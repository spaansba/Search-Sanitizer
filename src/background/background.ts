interface StorageData {
  extensionOnOff?: boolean
  darkMode?: boolean
  lifetimeTotalBlocks?: {
    i: number
    n: number
    v: number
    w: number
  }
  blockedUrlData?: Record<string, any>
}

chrome.runtime.onInstalled.addListener(() => {
  // Check and set local storage values only if they don't exist
  chrome.storage.local.get(
    ["extensionOnOff", "darkMode", "lifetimeTotalBlocks", "blockedUrlData"],
    (result: StorageData) => {
      const valuesToSet: StorageData = {}

      if (result.extensionOnOff === undefined) {
        valuesToSet.extensionOnOff = true
      }

      if (result.darkMode === undefined) {
        valuesToSet.darkMode = false
      }

      if (result.lifetimeTotalBlocks === undefined) {
        valuesToSet.lifetimeTotalBlocks = { i: 0, n: 0, v: 0, w: 0 }
      }

      if (result.blockedUrlData === undefined) {
        valuesToSet.blockedUrlData = {}
      }

      if (Object.keys(valuesToSet).length > 0) {
        chrome.storage.local.set(valuesToSet, () => {
          console.log("Initial values set in local storage")
        })
      }
    }
  )

  chrome.action.setBadgeBackgroundColor({ color: "#666665" })
  chrome.action.setBadgeTextColor({ color: "#fff" })

  // Add context menu
  chrome.contextMenus.create({
    id: "AddCurrentURL",
    title: "Block this site in Google Search",
    contexts: ["all"],
  })
})

chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case "SLIDER_CHANGED":
      chrome.runtime.sendMessage(message)
      break
    case "updateBadge":
      chrome.action.setBadgeText({ text: message.count.toString() })
      break
  }
})

// Reset the badge when a new page starts loading
chrome.tabs.onUpdated.addListener((_tabId, changeInfo, _tab) => {
  if (changeInfo.status === "loading") {
    chrome.action.setBadgeText({ text: "" })
  }
})

chrome.contextMenus.onClicked.addListener((info) => {
  switch (info.menuItemId) {
    case "AddCurrentURL":
      chrome.action.openPopup()
      break
  }
})
