import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchRegular({
  extensionOn,
  urlsDict,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, extensionOn)
  await ContentScript.getSearchElement()

  const queryString: string = ".g:not([data-processed]):not([data-initq] *)"
  ContentScript.filterResults(queryString)
  new MutationObserver(() => {
    ContentScript.filterResults(queryString)
    setTimeout(() => filterRelatedQuestions(ContentScript.searchElement), 500) //TODO fix need for 500 timeout
  }).observe(ContentScript.searchElement, {
    childList: true,
    subtree: true,
  })

  function filterRelatedQuestions(search: Element) {
    const moreToAskSections = search.querySelectorAll("[data-initq]")
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

        for (const link of links) {
          if (
            ContentScript.shouldUrlBeBlocked(
              link.href,
              ContentScript.blockedUrlsDict
            )
          ) {
            ContentScript.markElementAsBlocked(relatedQuestion as HTMLElement)
            return
          }
        }

        for (const cite of cites) {
          if (
            cite.textContent &&
            ContentScript.shouldUrlBeBlocked(
              cite.textContent,
              ContentScript.blockedUrlsDict
            )
          ) {
            ContentScript.markElementAsBlocked(relatedQuestion as HTMLElement)
            return
          }
        }
      })
    })
  }
}
