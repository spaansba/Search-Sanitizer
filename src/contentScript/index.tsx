import { useState } from "react"
import { BlockedUrlData } from "../types"
import googleSearchRegular from "./contentScript"
import { addTopOfPage } from "../components/topPage"

async function isExtensionOn(): Promise<boolean> {
  const result = await chrome.storage.sync.get(["ExtensionOnOff"])
  return result.ExtensionOnOff === true
}
async function getBlockedUrl(): Promise<BlockedUrlData> {
  const result = (await chrome.storage.sync.get([
    "blockedUrlData",
  ])) as BlockedUrlData
  return result
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
  const extensionOn = await isExtensionOn()
  const urls = await getBlockedUrl()

  document.addEventListener("DOMContentLoaded", () => {
    addTopOfPage(extensionOn, BlockedCountManager)
  })

  if (!extensionOn || !urls.blockedUrlData) {
    console.log("Extension is off")
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
    googleSearchRegular(urls, BlockedCountManager)
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
