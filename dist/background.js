/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.runtime.onInstalled.addListener(() => {
    chrome.action.setBadgeBackgroundColor({ color: "#666665" });
    chrome.action.setBadgeTextColor({ color: "#fff" });
});
chrome.storage.onChanged.addListener((changes, namespace) => {
    for (const [key, { oldValue, newValue }] of Object.entries(changes)) {
        console.log(`Storage key "${key}" in namespace "${namespace}" changed.`, `Old value was "${oldValue}", new value is "${newValue}".`);
        // if (key === "blockedUrlData") {
        //   updateTotalBlocked(oldValue, newValue)
        // }
    }
});
// function updateTotalBlocked(oldData, newData) {
//   const totalChanges = { i: 0, s: 0, v: 0 }
//   for (const url in newData) {
//     if (!oldData || !oldData[url]) {
//       totalChanges.i += newData[url].i
//       totalChanges.s += newData[url].s
//       totalChanges.v += newData[url].v
//     } else {
//       totalChanges.i += Math.max(0, newData[url].i - oldData[url].i)
//       totalChanges.s += Math.max(0, newData[url].s - oldData[url].s)
//       totalChanges.v += Math.max(0, newData[url].v - oldData[url].v)
//     }
//   }
//   if (totalChanges.i > 0 || totalChanges.s > 0 || totalChanges.v > 0) {
//     chrome.storage.local.get("totalBlocked", (result) => {
//       const totalBlocked = result.totalBlocked || {
//         "i total": 0,
//         "s total": 0,
//         "v total": 0,
//       }
//       totalBlocked["i total"] += totalChanges.i
//       totalBlocked["s total"] += totalChanges.s
//       totalBlocked["v total"] += totalChanges.v
//       chrome.storage.local.set({ totalBlocked }, () => {
//         console.log("Updated totalBlocked:", totalBlocked)
//       })
//     })
//   }
// }
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
        case "SLIDER_CHANGED":
            chrome.runtime.sendMessage(message);
            break;
        case "updateBadge":
            if (message.count > 0) {
                chrome.action.setBadgeText({ text: message.count.toString() });
            }
            else {
                chrome.action.setBadgeText({ text: "" }); // Remove the badge
            }
            break;
    }
});
// Add context menu(s)
chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "AddCurrentURL",
        title: "Block this site in Google Search",
        contexts: ["all"],
    });
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
    switch (info.menuItemId) {
        case "AddCurrentURL":
            chrome.action.openPopup();
            break;
    }
});

/******/ })()
;
//# sourceMappingURL=background.js.map