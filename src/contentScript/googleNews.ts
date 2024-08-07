import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchNews({
  extensionIsOn,
  urlsDict,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, extensionIsOn)
  await ContentScript.getSearchElement()

  const queryString: string = ".SoaBEf:not([data-processed])"
  ContentScript.processSearchResultsForBlocking(queryString)
  new MutationObserver(() => {
    ContentScript.processSearchResultsForBlocking(queryString)
  }).observe(ContentScript.searchElement, {
    childList: true,
    subtree: true,
  })
}
