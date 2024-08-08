import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchRegular({
  extensionIsOn,
  urlsDict,
  lifeTimeBlocks,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, extensionIsOn, lifeTimeBlocks, "w")

  // We check extension is on here so GoogleScriptService still loads custom top of page element that shows the extension is turned off
  if (!extensionIsOn) {
    return
  }

  await ContentScript.getSearchElement()

  const queryString: string = ".g:not([data-processed]):not([data-initq]:not(.ivg-i)"
  ContentScript.processSearchResultsForBlocking(queryString, false)

  processImagesForBlocking()

  if (ContentScript.searchResultsContainer) {
    new MutationObserver(() => {
      ContentScript.processSearchResultsForBlocking(queryString, false)
      setTimeout(() => processRelatedQuestionsForBlocking(), 500) //TODO fix need for 500 timeout
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
          ContentScript.checkLinksForBlockedUrls(relatedQuestion, false, "related Q") ||
          ContentScript.checkCitesForBlockedUrls(relatedQuestion, false, "related Q")
        ) {
          console.log("blocking related " + relatedQuestion)

          ContentScript.markElementAsBlocked(relatedQuestion as HTMLElement)
        }
      })
    })
  }

  //The image section on the main webpage is already loaded so we dont need to run it through the MutationObserver
  //For this reason we need to block invisible elements as well
  function processImagesForBlocking() {
    const queryString: string = ".ivg-i:not([data-processed])"
    ContentScript.processSearchResultsForBlocking(queryString, true)
  }
}
