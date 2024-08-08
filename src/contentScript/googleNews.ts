import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchNews({
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

  const queryString: string = ".SoaBEf:not([data-processed])"
  ContentScript.processSearchResultsForBlocking(queryString, false, "n")

  if (ContentScript.searchResultsContainer) {
    new MutationObserver(() => {
      ContentScript.processSearchResultsForBlocking(queryString, false, "n")
    }).observe(ContentScript.searchResultsContainer, {
      childList: true,
      subtree: true,
    })
  }
}
