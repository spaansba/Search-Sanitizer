import type { BlockedCountManager } from "."
import type { BlockedUrlData } from "../types"
import { getResultsHidden, updateBlockedCount } from "../components/topPage"
import shouldFilterResult from "../helper/urlFilter"

export default function googleSearchRegular(
  blockedUrlsDict: BlockedUrlData,
  blockedCountManager: BlockedCountManager,
  searchElement: Element
) {
  const processedResults = new Set()
  new MutationObserver(() => {
    filterNormalSearch(searchElement)
    setTimeout(() => filterRelatedQuestions(searchElement), 500) //TODO fix need for 500 timeout
  }).observe(searchElement, {
    childList: true,
    subtree: true,
  })

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
        console.log("yes1")
        addCardShow(result as HTMLElement)
      }
    })
  }

  function filterRelatedQuestions(search: Element) {
    const moreToAskSections = search.querySelectorAll("[data-initq]")
    if (!moreToAskSections) {
      console.warn("moreToAskSections not found")
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
  function addCardShow(element: HTMLElement) {
    blockedCountManager.incrementBlockedCount()
    updateBlockedCount(blockedCountManager.getBlockedCount())
    element.setAttribute("card-show", getResultsHidden().toString())
    element.setAttribute("card-relevant", "true")
  }
}
