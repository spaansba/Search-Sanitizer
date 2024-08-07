import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchVideos({
  extensionIsOn,
  urlsDict,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, extensionIsOn, "v")
  await ContentScript.getSearchElement()
  const queryString: string = ".g:not([data-processed])"
  ContentScript.processSearchResultsForBlocking(queryString)
  new MutationObserver(() => {
    ContentScript.processSearchResultsForBlocking(queryString)
  }).observe(ContentScript.searchElementDiv, {
    childList: true,
    subtree: true,
  })
}
