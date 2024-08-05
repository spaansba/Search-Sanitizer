/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/
chrome.storage.onChanged.addListener((changes, namespace) => {
    for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
        console.log(`Storage key "${key}" in namespace "${namespace}" changed.`, `Old value was "${oldValue}", new value is "${newValue}".`);
        if (key === "blockedUrlData") {
            updateTotalBlocked(oldValue, newValue);
        }
    }
});
function updateTotalBlocked(oldData, newData) {
    let totalChanges = { i: 0, s: 0, v: 0 };
    for (let url in newData) {
        if (!oldData || !oldData[url]) {
            totalChanges.i += newData[url].i;
            totalChanges.s += newData[url].s;
            totalChanges.v += newData[url].v;
        }
        else {
            totalChanges.i += Math.max(0, newData[url].i - oldData[url].i);
            totalChanges.s += Math.max(0, newData[url].s - oldData[url].s);
            totalChanges.v += Math.max(0, newData[url].v - oldData[url].v);
        }
    }
    if (totalChanges.i > 0 || totalChanges.s > 0 || totalChanges.v > 0) {
        chrome.storage.sync.get("totalBlocked", (result) => {
            let totalBlocked = result.totalBlocked || {
                "i total": 0,
                "s total": 0,
                "v total": 0,
            };
            totalBlocked["i total"] += totalChanges.i;
            totalBlocked["s total"] += totalChanges.s;
            totalBlocked["v total"] += totalChanges.v;
            chrome.storage.sync.set({ totalBlocked }, () => {
                console.log("Updated totalBlocked:", totalBlocked);
            });
        });
    }
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
        case "SLIDER_CHANGED":
            chrome.runtime.sendMessage(message);
            break;
        case "updateBadge":
            if (message.count > 0) {
                chrome.action.setBadgeText({ text: message.count.toString() });
                chrome.action.setBadgeBackgroundColor({ color: "#93827c" });
            }
            else {
                chrome.action.setBadgeText({ text: "" }); // Remove the badge
            }
            break;
    }
});
// Add context menu(s)
chrome.runtime.onInstalled.addListener(function () {
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