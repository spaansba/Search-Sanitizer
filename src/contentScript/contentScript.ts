import {
  addTopOfPage,
  getResultsHidden,
  updateBlockedCount,
} from "../components/topPage"
const sitesToFilter = new Set(["reddit", "wikipedia"])
let BlockedCount: number = 0

function filterGoogleSearch() {
  if (document.documentElement.dataset.addScript) {
    console.error("script already added")
    return
  }
  document.documentElement.dataset.addScript = "true"

  const processedResults = new Set()

  new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type !== "childList") {
        return
      }
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== Node.ELEMENT_NODE) {
          return
        }
        const searchResults = document.querySelectorAll(
          "#search .g:not([data-processed])"
        )
        searchResults.forEach((result) => {
          if (processedResults.has(result)) {
            return
          }
          processedResults.add(result)
          result.setAttribute("data-processed", "true")

          const links = result.querySelectorAll("a")
          const cites = result.querySelectorAll("cite")

          const shouldHide = shouldFilterResult(links, cites)

          if (shouldHide) {
            addCardShow(result as HTMLElement)
          }
        })

        filterMoreToAskSection()
      })
    })
  }).observe(document.documentElement, { childList: true, subtree: true })
}

function filterMoreToAskSection() {
  const moreToAskSection = document.querySelector("[data-initq]")
  if (moreToAskSection) {
    const accordionItems =
      moreToAskSection.querySelectorAll('[jsname="yEVEwb"]')
    accordionItems.forEach((item) => {
      const links = item.querySelectorAll("a")
      const cites = item.querySelectorAll("cite")
      const shouldHide = shouldFilterResult(links, cites)
      if (shouldHide) {
        addCardShow(item as HTMLElement)
      }
    })
  }
}

function shouldFilterResult(
  links: NodeListOf<HTMLAnchorElement>,
  cites: NodeListOf<HTMLElement>
): boolean {
  for (const link of links) {
    if (shouldFilterLink(link.href)) {
      return true
    }
  }
  for (const cite of cites) {
    if (cite.textContent && shouldFilterLink(cite.textContent)) {
      return true
    }
  }
  return false
}

function shouldFilterLink(url: string): boolean {
  if (!url) return false
  try {
    const { hostname } = new URL(url)
    return Array.from(sitesToFilter).some((site) => hostname.includes(site))
  } catch (error) {
    console.log(`Invalid URL: ${url}`)
    return false
  }
}

chrome.storage.sync.get(["ExtensionOnOff"], (result) => {
  if (result.ExtensionOnOff) {
    filterGoogleSearch()
  }
})

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
