import googleSearchRegular from "./googleRegular"
import type { BlockedUrlDataLocal } from "../types"
import googleSearchImages from "./googleImages"
import googleSearchVideos from "./googleVideos"
import googleSearchNews from "./googleNews"

export interface googleContentScriptProps {
  extensionIsOn: boolean
  urlsDict: { blockedUrlData: BlockedUrlDataLocal }
}

async function initializeContentScript() {
  const extensionIsOn: boolean = await isExtensionOn()
  const urlsDict = await getBlockedUrl()

  if (!extensionIsOn || !urlsDict.blockedUrlData) {
    console.info("Search Sanitizer Extension is off")
    return
  }
  callContentScript({ extensionIsOn, urlsDict })
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
  const result = await chrome.storage.local.get("extensionOnOff")
  return result.extensionOnOff as boolean
}

async function getBlockedUrl(): Promise<{ blockedUrlData: BlockedUrlDataLocal }> {
  const result = await chrome.storage.local.get("blockedUrlData")
  return { blockedUrlData: result.blockedUrlData || {} }
}

initializeContentScript()
