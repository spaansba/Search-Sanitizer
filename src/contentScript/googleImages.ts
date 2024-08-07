import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchImages({
  extensionOn,
  urlsDict,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, extensionOn)
  await ContentScript.getSearchElement()
  const queryString: string = ".ivg-i:not([data-processed])"
  ContentScript.filterResults(queryString)
  new MutationObserver(() => {
    ContentScript.filterResults(queryString)
  }).observe(ContentScript.searchElement, {
    childList: true,
    subtree: true,
  })
}
