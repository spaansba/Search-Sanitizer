import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchVideos({
  extensionIsOn,
  urlsDict,
  lifeTimeBlocks,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, extensionIsOn, lifeTimeBlocks, "v")

  // We check extension is on here so GoogleScriptService still loads custom top of page element that shows the extension is turned off
  if (!extensionIsOn) {
    return
  }

  await ContentScript.getSearchElement()
  const queryString: string = ".g:not([data-processed])"

  if (ContentScript.searchResultsContainer) {
    ContentScript.processSearchResultsForBlocking(queryString, false)
    new MutationObserver(() => {
      ContentScript.processSearchResultsForBlocking(queryString, false)
    }).observe(ContentScript.searchResultsContainer, {
      childList: true,
      subtree: true,
    })
  }
}
