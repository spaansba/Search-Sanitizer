import googleSearchRegular from "./googleRegular"
import type { blockCategories, BlockedUrlDataLocal } from "../types"
import googleSearchImages from "./googleImages"
import googleSearchVideos from "./googleVideos"
import googleSearchNews from "./googleNews"

export interface contentRelatedSettings {
  extensionIsOn: boolean
  blockAds: boolean
  blockImage: boolean
  blockNews: boolean
  blockRecipe: boolean
  blockVideo: boolean
  blockWeb: boolean
}

export interface googleContentScriptProps {
  settings: contentRelatedSettings
  urlsDict: { blockedUrlData: BlockedUrlDataLocal }
  lifeTimeBlocks: blockCategories
}

async function initializeContentScript() {
  const settings = await isExtensionOn()
  const urlsDict = await getBlockedUrl()
  const lifeTimeBlocks = await getLifeTimeBlockedUrl()

  if (!urlsDict.blockedUrlData) {
    return
  }

  callContentScript({ settings, urlsDict, lifeTimeBlocks })
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
    googleSearchNews(googleContentScriptProps)
  } else if (udm.includes("2")) {
    googleSearchImages(googleContentScriptProps)
  } else {
    googleSearchRegular(googleContentScriptProps)
  }
}

async function isExtensionOn(): Promise<googleContentScriptProps["settings"]> {
  return new Promise((resolve) => {
    chrome.storage.local.get(
      [
        "extensionIsOn",
        "blockAds",
        "blockImage",
        "blockNews",
        "blockRecipe",
        "blockVideo",
        "blockWeb",
      ],
      (result: { [key: string]: boolean }) => {
        resolve({
          extensionIsOn: result.extensionIsOn ?? true,
          blockAds: result.blockAds ?? false,
          blockImage: result.blockImage ?? false,
          blockNews: result.blockNews ?? false,
          blockRecipe: result.blockRecipe ?? false,
          blockVideo: result.blockVideo ?? false,
          blockWeb: result.blockWeb ?? false,
        })
      }
    )
  })
}

async function getBlockedUrl(): Promise<{ blockedUrlData: BlockedUrlDataLocal }> {
  const result = await chrome.storage.local.get("blockedUrlData")
  return { blockedUrlData: result.blockedUrlData || {} }
}

async function getLifeTimeBlockedUrl(): Promise<blockCategories> {
  const result = await chrome.storage.local.get("lifetimeTotalBlocks")
  return result.lifetimeTotalBlocks as blockCategories
}

initializeContentScript()
