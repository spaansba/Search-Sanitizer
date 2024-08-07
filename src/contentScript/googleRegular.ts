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

  const queryString: string = ".g:not([data-processed]):not([data-initq] *)"
  ContentScript.processSearchResultsForBlocking(queryString)
  new MutationObserver(() => {
    ContentScript.processSearchResultsForBlocking(queryString)
    setTimeout(() => processRelatedQuestionsForBlocking(ContentScript.searchElementDiv), 500) //TODO fix need for 500 timeout
  }).observe(ContentScript.searchElementDiv, {
    childList: true,
    subtree: true,
  })

  function processRelatedQuestionsForBlocking(searchElement: Element) {
    const moreToAskSections = searchElement.querySelectorAll(":not([data-processed])[data-initq]")
    moreToAskSections?.forEach((askSection) => {
      askSection.setAttribute("data-processed", "true")
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
          ContentScript.checkLinksForBlockedUrls(searchElement) ||
          ContentScript.checkCitesForBlockedUrls(searchElement)
        ) {
          ContentScript.markElementAsBlocked(relatedQuestion as HTMLElement)
        }
      })
    })
  }
}
