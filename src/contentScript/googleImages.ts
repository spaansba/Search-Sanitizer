import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchImages({
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
  const queryString: string = ".ivg-i:not([data-processed])"
  ContentScript.processSearchResultsForBlocking(queryString, false, "i")

  if (ContentScript.searchResultsContainer) {
    new MutationObserver(() => {
      ContentScript.processSearchResultsForBlocking(queryString, false, "i")
    }).observe(ContentScript.searchResultsContainer, {
      childList: true,
      subtree: true,
    })
  }
}
