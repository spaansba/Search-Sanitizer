/******/ (() => { // webpackBootstrap
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
chrome.runtime.sendMessage("from content script", (response) => {
    console.log(response);
});

/******/ })()
;
//# sourceMappingURL=contentScript.js.map