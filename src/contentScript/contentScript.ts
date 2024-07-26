import { addTopOfPage, getResultsHidden } from "../components/topPage"
const sitesToFilter = ["reddit", "wikipedia"]

function filterGoogleSearch() {
  if (document.documentElement.dataset.addScript) {
    return
  }
  document.documentElement.dataset.addScript = "true"

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((element) => {
        if (element === document.head) {
          addDocumentHead(element)
        }
        const searchResults = document.querySelectorAll("#search .g")
        searchResults.forEach((result) => {
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
  })

  //TODO add if searchResultsDiv is nothing
  observer.observe(document.documentElement, { childList: true, subtree: true })
}

let headAdded: boolean = false
function addDocumentHead(element: Node): void {
  if (headAdded) {
    return
  }

  const style = document.createElement("style")
  style.textContent = `
    /* Existing styles */
    [card-show="true"] { display: block !important; }
    [card-show="false"] { display: none !important; }
    
    /* You might want to add specific display types for different elements */
    span[card-show="true"], a[card-show="true"] { display: inline !important; }
    div[card-show="true"] { display: block !important; }
    
    /* Add more styles as needed */
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
}
