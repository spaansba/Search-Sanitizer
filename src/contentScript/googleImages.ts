import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchImages({
  extensionIsOn,
  urlsDict,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, extensionIsOn, "i")
  await ContentScript.getSearchElement()
  const queryString: string = ".ivg-i:not([data-processed])"
  ContentScript.processSearchResultsForBlocking(queryString)

  new MutationObserver(() => {
    ContentScript.processSearchResultsForBlocking(queryString)
  }).observe(ContentScript.searchElementDiv, {
    childList: true,
    subtree: true,
  })
}
