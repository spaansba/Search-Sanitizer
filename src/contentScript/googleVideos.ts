import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchVideos({
  extensionOn,
  urlsDict,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, extensionOn)
  await ContentScript.getSearchElement()
  const queryString: string = ".g:not([data-processed])"
  ContentScript.filterResults(queryString)
  new MutationObserver(() => {
    ContentScript.filterResults(queryString)
  }).observe(ContentScript.searchElement, {
    childList: true,
    subtree: true,
  })
}
