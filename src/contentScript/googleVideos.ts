import { googleContentScriptProps } from "."
import { GoogleScriptService } from "./contentScript"

export default async function googleSearchVideos({
  settings,
  urlsDict,
  lifeTimeBlocks,
}: googleContentScriptProps) {
  const ContentScript = new GoogleScriptService(urlsDict, settings, lifeTimeBlocks)

  // We check extension is on here so GoogleScriptService still loads custom top of page element that shows the extension is turned off
  if (!settings.extensionIsOn) {
    return
  }

  await ContentScript.getSearchElement()
  ContentScript.processVideosForBlocking()
  new MutationObserver(() => {
    ContentScript.processVideosForBlocking()
  }).observe(ContentScript.searchResultsContainer, {
    childList: true,
    subtree: true,
  })
}
