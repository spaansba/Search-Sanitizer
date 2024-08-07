import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchRegular({
  extensionIsOn,
  urlsDict,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, extensionIsOn)
  await ContentScript.getSearchElement()

  const queryString: string = ".g:not([data-processed]):not([data-initq] *)"
  ContentScript.processSearchResultsForBlocking(queryString)
  new MutationObserver(() => {
    ContentScript.processSearchResultsForBlocking(queryString)
    setTimeout(() => processRelatedQuestionsForBlocking(ContentScript.searchElement), 500) //TODO fix need for 500 timeout
  }).observe(ContentScript.searchElement, {
    childList: true,
    subtree: true,
  })

  function processRelatedQuestionsForBlocking(searchElement: Element) {
    const moreToAskSections = searchElement.querySelectorAll("[data-initq]")
    moreToAskSections.forEach((askSection) => {
      askSection.setAttribute("data-processed", "true")
      const relatedQuestions = askSection.querySelectorAll(
        ".related-question-pair:not([data-processed])"
      )
      relatedQuestions.forEach((relatedQuestion) => {
        if (ContentScript.processedResults.has(relatedQuestion)) {
          return
        }
        ContentScript.processedResults.add(relatedQuestion)
        relatedQuestion.setAttribute("data-processed", "true")
        const links = relatedQuestion.querySelectorAll("a")
        const cites = relatedQuestion.querySelectorAll("cite")

        if (
          this.checkLinksForBlockedUrls(relatedQuestion) ||
          this.checkCitesForBlockedUrls(relatedQuestion)
        ) {
          this.markElementAsBlocked(relatedQuestion as HTMLElement)
        }
      })
    })
  }
}
