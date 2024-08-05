import {
  addTopOfPage,
  getResultsHidden,
  updateBlockedCount,
} from "../components/topPage"
import { BlockedUrlData } from "../types"
import { createUrlFilter } from "../helper/urlFilter"

function filterGoogleSearch(blockedUrls: BlockedUrlData) {
  if (document.documentElement.dataset.addScript) {
    console.error("script already added")
    return
  }
  document.documentElement.dataset.addScript = "true"

  const processedResults = new Set()
  const urlFilter = createUrlFilter(blockedUrls)

  // Set up a MutationObserver to wait for the #search element
  new MutationObserver((_, obs) => {
    const search = document.querySelector("#search")
    if (search) {
      obs.disconnect() // Stop observing once #search is found
      setupFilteringObserver(search)
    }
  }).observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false,
  })

  function setupFilteringObserver(search: Element) {
    new MutationObserver(() => {
      filterNormalSearch(search)
      setTimeout(() => filterRelatedQuestions(search), 500) //TODO fix need for 500 timeout
      urlFilter.setBlockedUrl()
    }).observe(search, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false,
    })
  }

  function filterNormalSearch(search: Element) {
    const searchResults = search.querySelectorAll(
      ".g:not([data-processed]):not([data-initq] *)"
    )
    if (!searchResults) {
      return
    }
    searchResults.forEach((result) => {
      if (processedResults.has(result)) {
        return
      }
      processedResults.add(result)
      result.setAttribute("data-processed", "true")

      const links = result.querySelectorAll("a")
      const cites = result.querySelectorAll("cite")

      if (urlFilter.shouldFilterResult(links, cites)) {
        addCardShow(result as HTMLElement)
      }
    })
  }

  function filterRelatedQuestions(search: Element) {
    const moreToAskSections = search.querySelectorAll("[data-initq]")
    if (!moreToAskSections) {
      return
    }
    moreToAskSections.forEach((askSection) => {
      askSection.setAttribute("data-processed", "true")
      const relatedQuestions = askSection.querySelectorAll(
        ".related-question-pair:not([data-processed])"
      )
      relatedQuestions.forEach((relatedQuestion) => {
        if (processedResults.has(relatedQuestion)) {
          return
        }
        processedResults.add(relatedQuestion)
        relatedQuestion.setAttribute("data-processed", "true")
        const links = relatedQuestion.querySelectorAll("a")
        const cites = relatedQuestion.querySelectorAll("cite")
        if (urlFilter.shouldFilterResult(links, cites)) {
          addCardShow(relatedQuestion as HTMLElement)
        }
      })
    })
  }
}

async function initializeExtension() {
  checkForUrlChange()
  const isExtensionOn = await chrome.storage.sync.get(["ExtensionOnOff"])
  if (isExtensionOn.ExtensionOnOff) {
    const initialValues = await chrome.storage.sync.get(["blockedUrlData"])
    if (initialValues.blockedUrlData) {
      addDocumentHead()
      filterGoogleSearch(initialValues.blockedUrlData)
    }
  }
}

let BlockedCount: number = 0

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.sync.get(["ExtensionOnOff"], (result) => {
    addTopOfPage(result.ExtensionOnOff, BlockedCount)
  })
})

function addDocumentHead(): void {
  const style = document.createElement("style")
  style.id = "Site Blocker Custom Styles"
  style.textContent = `
    /* Display Styles */
    [card-show="true"] { display: block !important; }
    [card-show="false"] { display: none !important; }

    /* Card Color Styles */
    [card-relevant="true"] {opacity: 0.7 !important}
  `
  document.head.appendChild(style)
}

function addCardShow(element: HTMLElement) {
  BlockedCount = BlockedCount + 1
  updateBlockedCount(BlockedCount)
  element.setAttribute("card-show", getResultsHidden().toString())
  element.setAttribute("card-relevant", "true")
}

let lastUrl = location.href

function checkForUrlChange() {
  if (location.href !== lastUrl) {
    lastUrl = location.href
    resetBadge()
  }
}

function resetBadge() {
  BlockedCount = 0
  updateBlockedCount(BlockedCount)
}

window.addEventListener("beforeunload", resetBadge)

initializeExtension()

function test() {
  const urlParameters = new URL(window.location.href).searchParams
  const tbm = urlParameters.get("tbm") ?? "" // Books
  const udm = urlParameters.get("udm") ?? "" // Images
}

test()
