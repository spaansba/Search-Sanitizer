chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeBackgroundColor({ color: "#666665" })
  chrome.action.setBadgeTextColor({ color: "#fff" })
})

// chrome.storage.onChanged.addListener((changes, namespace) => {
//   for (const [key, { oldValue, newValue }] of Object.entries(changes)) {
//     console.log(
//       `Storage key "${key}" in namespace "${namespace}" changed.`,
//       `Old value was "${oldValue}", new value is "${newValue}".`
//     )

//     // if (key === "blockedUrlData") {
//     //   updateTotalBlocked(oldValue, newValue)
//     // }
//   }
// })

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
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
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "loading") {
    chrome.action.setBadgeText({ text: "" })
  }
})

// Add context menu(s)
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "AddCurrentURL",
    title: "Block this site in Google Search",
    contexts: ["all"],
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "AddCurrentURL":
      chrome.action.openPopup()
      break
  }
})
