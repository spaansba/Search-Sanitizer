/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**************************************!*\
  !*** ./src/background/background.ts ***!
  \**************************************/

chrome.runtime.onInstalled.addListener(() => {
    // Define default values
    const defaultValues = {
        extensionOnOff: true,
        darkMode: false,
        lifetimeTotalBlocks: { i: 0, n: 0, v: 0, w: 0 },
        blockedUrlData: {},
        blockAds: true,
        blockImage: true,
        blockNews: true,
        blockRecipe: true,
        blockVideo: true,
        blockWeb: true,
    };
    // Check and set local storage values
    chrome.storage.local.get(Object.keys(defaultValues), (result) => {
        const valuesToSet = {};
        for (const [key, defaultValue] of Object.entries(defaultValues)) {
            if (result[key] === undefined) {
                valuesToSet[key] = defaultValue;
            }
        }
        if (Object.keys(valuesToSet).length > 0) {
            chrome.storage.local.set(valuesToSet, () => {
                console.log("Initial values set in local storage");
            });
        }
    });
    chrome.action.setBadgeBackgroundColor({ color: "#666665" });
    chrome.action.setBadgeTextColor({ color: "#fff" });
    // Add context menu
    chrome.contextMenus.create({
        id: "AddCurrentURL",
        title: "Block this site in Google Search",
        contexts: ["all"],
    });
});
chrome.runtime.onMessage.addListener((message) => {
    switch (message.type) {
        case "SLIDER_CHANGED":
            chrome.runtime.sendMessage(message);
            break;
        case "updateBadge":
            chrome.action.setBadgeText({ text: message.count.toString() });
            break;
    }
});
chrome.contextMenus.onClicked.addListener((info) => {
    switch (info.menuItemId) {
        case "AddCurrentURL":
            chrome.action.openPopup();
            break;
    }
});

/******/ })()
;
//# sourceMappingURL=background.js.map