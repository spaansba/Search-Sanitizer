import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchRegular({
  extensionIsOn,
  urlsDict,
  lifeTimeBlocks,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, extensionIsOn, lifeTimeBlocks)

  // We check extension is on here so GoogleScriptService still loads custom top of page element that shows the extension is turned off
  if (!extensionIsOn) {
    return
  }

  await ContentScript.getSearchElement()

  const queryString: string = ".g:not([data-processed]):not([data-initq]:not(.ivg-i)"
  ContentScript.processSearchResultsForBlocking(queryString, false, "w")

  processImagesForBlocking()

  if (ContentScript.searchResultsContainer) {
    new MutationObserver(() => {
      ContentScript.processSearchResultsForBlocking(queryString, false, "w")
      setTimeout(() => processRelatedQuestionsForBlocking(), 500) //TODO fix need for 500 timeout
      setTimeout(() => processImagesForBlocking(), 500)
    }).observe(ContentScript.searchResultsContainer, {
      childList: true,
      subtree: true,
    })
  }

  function processRelatedQuestionsForBlocking() {
    const moreToAskSections = ContentScript.searchResultsContainer?.querySelectorAll("[data-initq]")
    moreToAskSections?.forEach((askSection) => {
      const relatedQuestions = askSection.querySelectorAll(
        ".related-question-pair:not([data-processed])"
      )

      relatedQuestions?.forEach((relatedQuestion) => {
        if (ContentScript.processedResults.has(relatedQuestion)) {
          return
        }
        ContentScript.processedResults.add(relatedQuestion)
        relatedQuestion.setAttribute("data-processed", "true")
        if (
          ContentScript.checkLinksForBlockedUrls(relatedQuestion, false, "w", "related Q") ||
          ContentScript.checkCitesForBlockedUrls(relatedQuestion, false, "w", "related Q")
        ) {
          ContentScript.markElementAsBlocked(relatedQuestion as HTMLElement)
        }
      })
    })
  }

  // Block invis elements as well as sometimes they load in the "all image" section before the user sees them
  // Also this counts for i in block count instead of regular w
  function processImagesForBlocking() {
    const queryString: string = ".ivg-i:not([data-processed])"
    ContentScript.processSearchResultsForBlocking(queryString, true, "i")
  }
}
