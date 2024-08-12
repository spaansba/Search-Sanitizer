import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchRegular({
  settings,
  urlsDict,
  lifeTimeBlocks,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, settings, lifeTimeBlocks)

  // We check extension is on here so GoogleScriptService still loads custom top of page element that shows the extension is turned off
  if (!settings.extensionIsOn) {
    return
  }

  await ContentScript.getSearchElement()

  ContentScript.processRegularForBlocking()
  ContentScript.processImagesForBlocking()
  ContentScript.processTopAddsForBlocking()
  ContentScript.processRecipes()

  if (ContentScript.searchResultsContainer) {
    new MutationObserver(() => {
      ContentScript.processRegularForBlocking()
      ContentScript.processImagesForBlocking()
      ContentScript.processTopAddsForBlocking()
      setTimeout(() => processRelatedQuestionsForBlocking(), 500) //TODO fix need for 500 timeout
      ContentScript.processRecipes()
    }).observe(ContentScript.searchResultsContainer, {
      childList: true,
      subtree: true,
    })
  }

  function processRelatedQuestionsForBlocking() {
    if (!settings.blockWeb) {
      return
    }

    const moreToAskSections = ContentScript.searchResultsContainer?.querySelectorAll("[data-initq]")
    moreToAskSections?.forEach((askSection) => {
      const relatedQuestions = askSection.querySelectorAll(
        ".related-question-pair:not([data-processed])"
      )

      relatedQuestions.forEach((relatedQuestion) => {
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
