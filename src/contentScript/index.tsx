import googleSearchRegular from "./googleRegular"
import { addTopOfPage } from "../components/topPage"
import type { BlockedUrlData } from "../types"
import googleSearchImages from "./googleImages"

async function initializeContentScript() {
  const extensionOn: boolean = await isExtensionOn()
  const urlsDict: BlockedUrlData = await getBlockedUrl()
  const searchElement: Element = await findSearchElementOnGoogle()
  if (!searchElement) {
    console.info("Search element not found")
    return
  }
  if (!extensionOn || !urlsDict.blockedUrlData) {
    console.info("Search Sanitizer Extension is off")
    return
  }
  addDocumentHead()
  addEventListeners(extensionOn)
  callContentScript(urlsDict, searchElement)
}

function callContentScript(urlsDict: BlockedUrlData, searchElement: Element) {
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
    googleSearchImages(urlsDict, BlockedCountManager, searchElement)
  } else {
    googleSearchRegular(urlsDict, BlockedCountManager, searchElement)
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

async function findSearchElementOnGoogle(): Promise<Element> {
  return new Promise((resolve) => {
    const existingSearch = document.querySelector("#search")
    if (existingSearch) {
      resolve(existingSearch)
      return
    }

    new MutationObserver((_, obs) => {
      const search = document.querySelector("#search")
      if (search) {
        obs.disconnect()
        resolve(search)
      }
    }).observe(document.body, {
      childList: true,
      subtree: true,
    })
  })
}

function addEventListeners(extensionOn: boolean) {
  document.addEventListener("DOMContentLoaded", () => {
    addTopOfPage(extensionOn, BlockedCountManager)
  })
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
      return blockedCount
    },
    getBlockedCount: () => blockedCount,
  }
})()

initializeContentScript()
