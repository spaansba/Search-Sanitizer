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

  ContentScript.processRegularForBlocking()
  ContentScript.processImagesForBlocking()
  ContentScript.processTopAddsForBlocking()

  if (ContentScript.searchResultsContainer) {
    new MutationObserver(() => {
      ContentScript.processRegularForBlocking()
      ContentScript.processImagesForBlocking()
      ContentScript.processTopAddsForBlocking()
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
      relatedQuestions.forEach((relatedQuestion) => {
        if (ContentScript.processedResults.has(relatedQuestion)) {
          return
        }

        ContentScript.processedResults.add(relatedQuestion)
        relatedQuestion.setAttribute("data-processed", "true")
        if (
          ContentScript.checkLinksForBlockedUrls(relatedQuestion, true, "w", "related Q") ||
          ContentScript.checkCitesForBlockedUrls(relatedQuestion, true, "w", "related Q")
        ) {
          console.log("block ", relatedQuestion)

          ContentScript.markElementAsBlocked(relatedQuestion as HTMLElement)
        }
      })
    })
  }
}
