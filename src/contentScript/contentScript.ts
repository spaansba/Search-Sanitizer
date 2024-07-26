import { addTopOfPage, getResultsHidden } from "../components/topPage"
const sitesToFilter = ["reddit", "wikipedia"]
let count = 0
function filterGoogleSearch() {
  if (document.documentElement.dataset.addScript) {
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
        if (node === document.head && !headAdded) {
          addDocumentHead()
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
          console.log(count)
          count = count + 1

          if (shouldHide) {
            addCardShow(result as HTMLElement)
          }
        })

        filterMoreToAskSection()
      })
    })
  }).observe(document.documentElement, { childList: true, subtree: true })
}

let headAdded: boolean = false
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
  headAdded = true
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
    if (shouldFilterLink(cite.textContent)) {
      return true
    }
  }
  return false
}

function shouldFilterLink(url: string): boolean {
  if (!url) return false

  try {
    const parsedUrl = new URL(url)
    const hostname = parsedUrl.hostname

    for (const site of sitesToFilter) {
      if (hostname.includes(site)) {
        // console.log(`Filtered: ${url} (matched: ${site})`)
        return true
      }
    }
  } catch (error) {
    console.log(`Invalid URL: ${url}`)
  }
  return false
}

// Check if the current URL starts with any of the keys in rules
function Start() {
  filterGoogleSearch()
}

Start()

//Since we run content script at document start (see manifest) we can only add new content on loaded dom
document.addEventListener("DOMContentLoaded", () => {
  addTopOfPage()
})

function addCardShow(element: HTMLElement) {
  element.setAttribute("card-show", getResultsHidden().toString())
  element.setAttribute("card-relevant", "true")
}
