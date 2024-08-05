import { BlockedCountManager } from "."
import { getResultsHidden, updateBlockedCount } from "../components/topPage"
import shouldFilterResult from "../helper/urlFilter"
import { BlockedUrlData } from "../types"

export default function googleSearchRegular(
  blockedUrlsDict: BlockedUrlData,
  blockedCountManager: BlockedCountManager
) {
  filterGoogleSearch()

  function filterGoogleSearch() {
    if (document.documentElement.dataset.addScript) {
      console.error("script already added")
      return
    }
    document.documentElement.dataset.addScript = "true"

    const processedResults = new Set()

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
        if (shouldFilterResult(links, cites, blockedUrlsDict)) {
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
          if (shouldFilterResult(links, cites, blockedUrlsDict)) {
            addCardShow(relatedQuestion as HTMLElement)
          }
        })
      })
    }
  }

  function addCardShow(element: HTMLElement) {
    blockedCountManager.incrementBlockedCount()
    updateBlockedCount(blockedCountManager.getBlockedCount())
    element.setAttribute("card-show", getResultsHidden().toString())
    element.setAttribute("card-relevant", "true")
  }
}
