import { addTopOfPage, getResultsHidden, updateBlockedCount } from "./topPage"
import { BlockedUrlData } from "../types"
import { createUrlFilter } from "./urlFilter"

function filterGoogleSearch(blockedUrls: BlockedUrlData) {
  if (document.documentElement.dataset.addScript) {
    console.error("script already added")
    return
  }
  document.documentElement.dataset.addScript = "true"

  const processedResults = new Set()
  const urlFilter = createUrlFilter(blockedUrls)
  const search = document.querySelector("#search")
  if (!search) {
    console.error("Cant find #search")
    return
  }

  new MutationObserver(() => {
    filterNormalSearch()
    setTimeout(filterRelatedQuestions, 1000)
    urlFilter.setBlockedUrl()
  }).observe(search, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false,
  })

  function filterNormalSearch() {
    //:not([data-initq] * excludes all the "MoreToAskSection" elements
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
        console.log("blocked in normal search")
        addCardShow(result as HTMLElement)
      }
    })
  }

  function filterRelatedQuestions() {
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
          console.log("blocked in more to ask")
          addCardShow(relatedQuestion as HTMLElement)
        }
      })
    })
  }
}

async function initializeExtension() {
  const isExtensionOn = await chrome.storage.sync.get(["ExtensionOnOff"])
  if (isExtensionOn.ExtensionOnOff) {
    const initialValues = await chrome.storage.sync.get(["blockedUrlData"])
    if (initialValues.blockedUrlData) {
      console.log(initialValues.blockedUrlData)
      filterGoogleSearch(initialValues.blockedUrlData)
    }
  }
}

let BlockedCount: number = 0

//Since we run content script at document start (see manifest) we can only add new content on loaded dom
document.addEventListener("DOMContentLoaded", () => {
  addDocumentHead()
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
  if (isElementVisible(element)) {
    BlockedCount = BlockedCount + 1
    updateBlockedCount(BlockedCount)
    element.setAttribute("card-show", getResultsHidden().toString())
    element.setAttribute("card-relevant", "true")
  }
}

// Otherwise we are processing way to many elements that are not even visible on the page
function isElementVisible(element: HTMLElement): boolean {
  return !!(
    element.offsetWidth ||
    element.offsetHeight ||
    element.getClientRects().length
  )
}

initializeExtension()
