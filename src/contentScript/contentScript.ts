const sitesToFilter = ["reddit", "wikipedia"]

function filterGoogleSearch() {
  if (document.documentElement.dataset.addScript) {
    return
  }
  const searchResultsDiv = document.querySelector("#search")
  document.documentElement.dataset.addScript = "true"
  const observer = new MutationObserver((mutations) => {
    console.log(mutations)
    // mutations.forEach(() => {
    //   const searchResults = document.querySelectorAll("#search .g")
    //   searchResults.forEach((result) => {
    //     const links = result.querySelectorAll("a")
    //     const cites = result.querySelectorAll("cite")

    //     if (shouldFilterResult(links, cites)) {
    //       ;(result as HTMLElement).style.display = "none"
    //     }
    //   })

    //   filterMoreToAskSection()
    // })
  })

  //TODO add if searchResultsDiv is nothing
  observer.observe(document.documentElement, { childList: true, subtree: true })

  // filterMoreToAskSection()
}

function filterMoreToAskSection() {
  const moreToAskSection = document.querySelector("[data-initq]")
  if (moreToAskSection) {
    const accordionItems =
      moreToAskSection.querySelectorAll('[jsname="yEVEwb"]')
    accordionItems.forEach((item) => {
      const links = item.querySelectorAll("a")
      const cites = item.querySelectorAll("cite")

      if (shouldFilterResult(links, cites)) {
        ;(item as HTMLElement).style.display = "none"
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
        console.log(`Filtered: ${url} (matched: ${site})`)
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
