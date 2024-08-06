import googleSearchRegular from "./contentScript"
import { addTopOfPage } from "../components/topPage"
import type { BlockedUrlData } from "../types"

async function isExtensionOn(): Promise<boolean> {
  const result = await chrome.storage.sync.get("extensionOnOff")
  return result.extensionOnOff as boolean
}

async function getBlockedUrl(): Promise<BlockedUrlData> {
  const result = await chrome.storage.sync.get("blockedUrlData")
  console.log(result as BlockedUrlData)
  return result as BlockedUrlData
}

function addDocumentHead(): void {
  const style = document.createElement("style")
  style.id = "Site Blocker Custom Styles"
  style.textContent = `
      /* Display Styles */
      [card-show="true"] { display: block !important; }
      [card-show="false"] { display: none !important; }
  
      /* Card Color Styles */
      [card-relevant="true"] {opacity: 0.7 !important}
    `
  document.head.appendChild(style)
}

async function init() {
  const extensionOn: boolean = await isExtensionOn()
  const urlsDict: BlockedUrlData = await getBlockedUrl()

  document.addEventListener("DOMContentLoaded", () => {
    addTopOfPage(extensionOn, BlockedCountManager)
  })

  if (!extensionOn || !urlsDict.blockedUrlData) {
    console.info("Search Sanitizer Extension is off")
    return
  }
  addDocumentHead()

  const url = new URL(window.location.href)
  const urlParameters = url.searchParams
  const tbm = urlParameters.get("tbm") ?? ""
  const udm = urlParameters.get("udm") ?? ""
  if (tbm.includes("bks")) {
    console.log("books")
  } else if (tbm.includes("vid")) {
    console.log("videos")
  } else if (tbm.includes("nws")) {
    console.log("news")
  } else if (udm.includes("2")) {
    console.log("images")
  } else {
    googleSearchRegular(urlsDict, BlockedCountManager)
  }
}

// Way to safely set the blocked count
export interface BlockedCountManager {
  incrementBlockedCount: () => number
  getBlockedCount: () => number
}

const BlockedCountManager = (() => {
  let blockedCount = 0

  return {
    incrementBlockedCount: () => {
      blockedCount++
      // You might want to update some UI here
      console.log("Blocked count:", blockedCount)
      return blockedCount
    },
    getBlockedCount: () => blockedCount,
  }
})()

init()
