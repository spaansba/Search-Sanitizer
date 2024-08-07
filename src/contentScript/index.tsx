import googleSearchRegular from "./googleRegular"
import type { BlockedUrlData } from "../types"
import googleSearchImages from "./googleImages"
import googleSearchVideos from "./googleVideos"
import googleSearchNews from "./googleNews"

export interface googleContentScriptProps {
  extensionOn: boolean
  urlsDict: BlockedUrlData
}

async function initializeContentScript() {
  const extensionOn: boolean = await isExtensionOn()
  const urlsDict: BlockedUrlData = await getBlockedUrl()

  if (!extensionOn || !urlsDict.blockedUrlData) {
    console.info("Search Sanitizer Extension is off")
    return
  }
  callContentScript({ extensionOn, urlsDict })
}

function callContentScript(googleContentScriptProps: googleContentScriptProps) {
  const url = new URL(window.location.href)
  const urlParameters = url.searchParams
  const tbm = urlParameters.get("tbm") ?? ""
  const udm = urlParameters.get("udm") ?? ""
  if (tbm.includes("bks")) {
    // Not implemented
  } else if (tbm.includes("vid")) {
    googleSearchVideos(googleContentScriptProps)
  } else if (tbm.includes("nws")) {
    console.log("d")
    googleSearchNews(googleContentScriptProps)
  } else if (udm.includes("2")) {
    googleSearchImages(googleContentScriptProps)
  } else {
    googleSearchRegular(googleContentScriptProps)
  }
}

async function isExtensionOn(): Promise<boolean> {
  const result = await chrome.storage.sync.get("extensionOnOff")
  return result.extensionOnOff as boolean
}

async function getBlockedUrl(): Promise<BlockedUrlData> {
  const result = await chrome.storage.sync.get("blockedUrlData")
  return result as BlockedUrlData
}

initializeContentScript()
