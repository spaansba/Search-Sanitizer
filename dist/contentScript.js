/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/topPage.ts":
/*!***********************************!*\
  !*** ./src/components/topPage.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTopOfPage: () => (/* binding */ addTopOfPage),
/* harmony export */   updateBlockedCount: () => (/* binding */ updateBlockedCount)
/* harmony export */ });
const styles = `
  .extension-button:hover { opacity: 0.4 !important; }
  .extension-button:active { transform: scale(0.99) !important; }
 .blocked-count-overlay {
  position: absolute;
  background-color: #8e8280;
  color: white;
  padding-right: 2px;
  padding-left: 2px;
  font-size: 12px;
  border-radius: 8px;
  font-weight: bold;
  min-width: 26px;
  max-width: 60px;
  height: 15px;
  top: 1px;
  right: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  user-select: none;
}
#extension-button-search-bar{
  position: relative;
  user-select: none;
}
.logo-image{
  width: 22px;
  height: 22px;
}
`;
function addTopOfPage(getResultsAreHidden, setResultsAreHidden, blockedCount, isExtensionOn) {
    let searchFormContainer = document.querySelector(".fM33ce");
    let container = document.createElement("div");
    // if for whatever reason the searchFormContainer can not be found use the more secure appbar (this is under the search bar)
    if (!searchFormContainer) {
        searchFormContainer = document.querySelector("#appbar");
        container.style.marginBottom = "5px";
        if (!searchFormContainer) {
            return;
        }
    }
    container.id = "extension-button-search-bar";
    container.title = getTitle(blockedCount, getResultsAreHidden());
    container.className = "XDyW0e";
    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("logoApp.png");
    img.className = "logo-image";
    const blockedOverlay = document.createElement("div");
    blockedOverlay.className = "blocked-count-overlay";
    blockedOverlay.textContent = blockedCount.toString();
    container = isExtensionOn ? getExtensionOnElement(container) : getExtensionOffElement(container);
    container.appendChild(img);
    container.appendChild(blockedOverlay);
    // Insert the container after the form
    const form = searchFormContainer.querySelector(".dRYYxd");
    if (form) {
        form.insertAdjacentElement("afterend", container);
    }
    else {
        searchFormContainer.appendChild(container);
    }
    function getExtensionOnElement(container) {
        container.addEventListener("click", () => {
            setResultsAreHidden(!getResultsAreHidden());
            container.title = getTitle(blockedCount, getResultsAreHidden());
        });
        return container;
    }
    addStylesToHead();
    function addStylesToHead() {
        const styleElement = document.createElement("style");
        styleElement.textContent = styles;
        document.head.appendChild(styleElement);
    }
    function getExtensionOffElement(container) {
        container.title = "Search Sanitizer is currently turned off. Click to turn back on";
        container.style.opacity = "0.4";
        container.addEventListener("click", () => {
            chrome.storage.local.set({ extensionOnOff: true }, () => {
                window.location.reload();
            });
        });
        return container;
    }
}
function getTitle(blockedCount, resultsHidden) {
    if (blockedCount < 1) {
        return `${blockedCount} blocked search results`;
    }
    else {
        return `${blockedCount} blocked search results. Click to ${!resultsHidden ? "show" : "hide"} them again`;
    }
}
function updateBlockedCount(blockedCount) {
    const container = document.querySelector("#extension-button-search-bar");
    if (container) {
        container.title = getTitle(blockedCount, false); // Assuming results are not hidden by default
    }
    const overlayContainer = document.querySelector(".blocked-count-overlay");
    if (overlayContainer) {
        overlayContainer.textContent = blockedCount.toString();
    }
}


/***/ }),

/***/ "./src/contentScript/blockedCountUpdateManager.ts":
/*!********************************************************!*\
  !*** ./src/contentScript/blockedCountUpdateManager.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockedCountUpdateManager: () => (/* binding */ BlockedCountUpdateManager)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class BlockedCountUpdateManager {
    constructor(blockedUrlsDict, lifetimeBlocks, updateCallback) {
        this.blockedUrlsDict = blockedUrlsDict;
        this.updateCallback = updateCallback;
        this.countUpdates = {};
        this.lifetimeBlocks = { w: 0, i: 0, v: 0, n: 0 };
        this.lifetimeBlocks = lifetimeBlocks;
        this.debouncedBatchUpdate = this.debounce(() => this.batchUpdateCounts(), 1000);
        window.addEventListener("beforeunload", () => this.batchUpdateCounts());
    }
    incrementCount(userPattern, searchType) {
        if (!this.countUpdates[userPattern]) {
            this.countUpdates[userPattern] = { w: 0, i: 0, v: 0, n: 0 };
        }
        this.countUpdates[userPattern][searchType]++;
        this.debouncedBatchUpdate();
    }
    batchUpdateCounts() {
        return __awaiter(this, void 0, void 0, function* () {
            if (Object.keys(this.countUpdates).length === 0)
                return;
            const updatedBlockedUrlData = Object.assign({}, this.blockedUrlsDict.blockedUrlData);
            const updatedLifeTimeBlocks = Object.assign({}, this.lifetimeBlocks);
            for (const [url, counts] of Object.entries(this.countUpdates)) {
                if (!updatedBlockedUrlData[url]) {
                    updatedBlockedUrlData[url] = { w: 0, i: 0, v: 0, n: 0 };
                }
                for (const type of ["w", "i", "v", "n"]) {
                    updatedBlockedUrlData[url][type] += counts[type];
                    updatedLifeTimeBlocks[type] += counts[type];
                }
            }
            try {
                // Update both blockedUrlData and lifetimeTotalBlocks in storage
                yield chrome.storage.local.set({
                    blockedUrlData: updatedBlockedUrlData,
                    lifetimeTotalBlocks: updatedLifeTimeBlocks,
                });
                this.updateCallback(updatedBlockedUrlData);
                // Clear the accumulated updates
                this.countUpdates = {};
            }
            catch (error) {
                console.error("Failed to update blocked URL data:", error);
            }
        });
    }
    debounce(func, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), wait);
        };
    }
}


/***/ }),

/***/ "./src/contentScript/contentScript.tsx":
/*!*********************************************!*\
  !*** ./src/contentScript/contentScript.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GoogleScriptService: () => (/* binding */ GoogleScriptService)
/* harmony export */ });
/* harmony import */ var _components_topPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/topPage */ "./src/components/topPage.ts");
/* harmony import */ var _blockedCountUpdateManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockedCountUpdateManager */ "./src/contentScript/blockedCountUpdateManager.ts");


class GoogleScriptService {
    get blockedCount() {
        return this._blockedCount;
    }
    get resultsAreHidden() {
        return this._resultsAreHidden;
    }
    setBlockedElementsVisibility(value) {
        this._resultsAreHidden = value;
        this.updateBlockedElementsVisibility();
    }
    constructor(blockedUrlsDict, isExtensionOn, lifeTimeBlocks, searchType) {
        this.processedResults = new Set();
        this._blockedCount = 0;
        this._resultsAreHidden = false;
        this.isExtensionOn = true;
        this.blockedUrlsDict = blockedUrlsDict;
        this.isExtensionOn = isExtensionOn;
        this.addDocumentHead();
        this.addEventListeners();
        this.searchtype = searchType;
        this.updateManager = new _blockedCountUpdateManager__WEBPACK_IMPORTED_MODULE_1__.BlockedCountUpdateManager(blockedUrlsDict, lifeTimeBlocks, this.updatedBlockedCallback.bind(this));
    }
    // Return a promise that resolves when the search element is found
    getSearchElement() {
        return new Promise((resolve) => {
            new MutationObserver((_, obs) => {
                const searchElement = document.querySelector("#search");
                if (searchElement) {
                    this.searchElementDiv = searchElement;
                    obs.disconnect();
                    resolve();
                }
            }).observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    }
    addEventListeners() {
        document.addEventListener("DOMContentLoaded", () => {
            (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.addTopOfPage)(() => this.resultsAreHidden, (value) => this.setBlockedElementsVisibility(value), this.blockedCount, this.isExtensionOn);
        });
    }
    // Adds extra styles to the head of the document
    addDocumentHead() {
        const style = document.createElement("style");
        style.id = "Site Blocker Custom Styles";
        style.textContent = `
        /* Display Styles */
        [card-show="true"] { display: block !important; }
        [card-show="false"] { display: none !important; }
    
        /* Card Color Styles */
        [card-relevant="true"] {opacity: 0.3 !important}
      `;
        document.head.appendChild(style);
    }
    incrementBlockCount(userPattern) {
        this._blockedCount++;
        this.updateManager.incrementCount(userPattern, this.searchtype);
    }
    updatedBlockedCallback(updatedDataUrlBlocked) {
        this.blockedUrlsDict.blockedUrlData = updatedDataUrlBlocked;
        chrome.runtime.sendMessage({
            type: "updateBadge",
            count: this._blockedCount,
        });
    }
    // Mark element as blocked and also increment the block count
    markElementAsBlocked(element) {
        (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.updateBlockedCount)(this.blockedCount);
        element.setAttribute("card-show", this.resultsAreHidden.toString());
        element.setAttribute("card-relevant", "true");
    }
    // Users can toggle if blocked content is hidden or visible
    updateBlockedElementsVisibility() {
        const hiddenElements = document.querySelectorAll("[card-show]");
        hiddenElements.forEach((element) => {
            if (element instanceof HTMLElement) {
                element.setAttribute("card-show", this._resultsAreHidden.toString());
            }
        });
    }
    isPatternUrl(url, urlString, pattern) {
        try {
            if (!pattern) {
                console.log("not");
                return false;
            }
            pattern = this.removeTrailingSlash(pattern.toLowerCase());
            const patternVariations = [
                pattern,
                `www.${pattern}`,
                `https://${pattern}`,
                `https://www.${pattern}`,
                `http://${pattern}`,
                `http://www.${pattern}`,
            ];
            const comparisons = [
                urlString,
                url.origin.toLowerCase(),
                url.host.toLowerCase(),
                url.hostname.toLowerCase(),
                this.removeTrailingSlash(url.href.toLowerCase()),
            ];
            for (const comp of comparisons) {
                for (const variation of patternVariations) {
                    if (comp === variation) {
                        return true;
                    }
                }
            }
            return false;
        }
        catch (error) {
            console.error(`Invalid URL`);
            return false;
        }
    }
    removeTrailingSlash(s) {
        return s.endsWith("/") ? s.slice(0, -1) : s;
    }
    isPatternWildcard(urlString, pattern) {
        urlString = urlString.toLowerCase();
        pattern = pattern.toLowerCase();
        const escapedPattern = pattern.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/\\\*/g, ".*");
        const regex = new RegExp(`^${escapedPattern}$`);
        return regex.test(urlString);
    }
    shouldUrlBeBlocked(googleSearchUrl) {
        const url = new URL(googleSearchUrl);
        for (const pattern of Object.keys(this.blockedUrlsDict.blockedUrlData)) {
            // Here we check if the pattern is an URL and if it matches the current checked URL
            if (this.isPatternUrl(url, googleSearchUrl, pattern)) {
                console.log(`Blocked URL: ${googleSearchUrl} matched pattern: ${pattern}`);
                this.incrementBlockCount(pattern);
                return true;
            }
            // Here we check if the pattern is a matched Pattern and if it matches the current checked URL
            if (this.isPatternWildcard(googleSearchUrl, pattern)) {
                this.incrementBlockCount(pattern);
                console.log(`Blocked URL: ${url} matched pattern: ${pattern}`);
                return true;
            }
        }
        return false;
    }
    isElementVisible(element) {
        return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
    }
    processSearchResultsForBlocking(queryString) {
        const searchResults = this.searchElementDiv.querySelectorAll(queryString);
        searchResults === null || searchResults === void 0 ? void 0 : searchResults.forEach((searchElement) => {
            if (this.processedResults.has(searchElement)) {
                return;
            }
            this.processedResults.add(searchElement);
            searchElement.setAttribute("data-processed", "true");
            if (this.checkLinksForBlockedUrls(searchElement) ||
                this.checkCitesForBlockedUrls(searchElement)) {
                this.markElementAsBlocked(searchElement);
            }
        });
    }
    checkLinksForBlockedUrls(searchElement) {
        const links = searchElement.querySelectorAll("a");
        for (const link of links) {
            if (link.href && this.shouldUrlBeBlocked(link.href) && this.isElementVisible(link)) {
                return true;
            }
        }
        return false;
    }
    checkCitesForBlockedUrls(searchElement) {
        const cites = searchElement.querySelectorAll("cite");
        for (const cite of cites) {
            let url = cite.textContent.split(" ")[0]; // Get first text in cite (it concatenates all descendants)
            if (url) {
                // Add 'https://' if the URL doesn't start with 'http://' or 'https://'
                if (!/^https?:\/\//i.test(url)) {
                    url = "https://" + url;
                }
                if (this.shouldUrlBeBlocked(url) && this.isElementVisible(cite)) {
                    this.incrementBlockCount(url);
                    return true;
                }
            }
        }
        return false;
    }
}


/***/ }),

/***/ "./src/contentScript/googleImages.ts":
/*!*******************************************!*\
  !*** ./src/contentScript/googleImages.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ googleSearchImages)
/* harmony export */ });
/* harmony import */ var _contentScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentScript */ "./src/contentScript/contentScript.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function googleSearchImages(_a) {
    return __awaiter(this, arguments, void 0, function* ({ extensionIsOn, urlsDict, lifeTimeBlocks, }) {
        const ContentScript = new _contentScript__WEBPACK_IMPORTED_MODULE_0__.GoogleScriptService(urlsDict, extensionIsOn, lifeTimeBlocks, "i");
        // We check extension is on here so GoogleScriptService still loads custom top of page element that shows the extension is turned off
        if (!extensionIsOn) {
            return;
        }
        yield ContentScript.getSearchElement();
        const queryString = ".ivg-i:not([data-processed])";
        ContentScript.processSearchResultsForBlocking(queryString);
        new MutationObserver(() => {
            ContentScript.processSearchResultsForBlocking(queryString);
        }).observe(ContentScript.searchElementDiv, {
            childList: true,
            subtree: true,
        });
    });
}


/***/ }),

/***/ "./src/contentScript/googleNews.ts":
/*!*****************************************!*\
  !*** ./src/contentScript/googleNews.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ googleSearchNews)
/* harmony export */ });
/* harmony import */ var _contentScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentScript */ "./src/contentScript/contentScript.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function googleSearchNews(_a) {
    return __awaiter(this, arguments, void 0, function* ({ extensionIsOn, urlsDict, lifeTimeBlocks, }) {
        const ContentScript = new _contentScript__WEBPACK_IMPORTED_MODULE_0__.GoogleScriptService(urlsDict, extensionIsOn, lifeTimeBlocks, "n");
        // We check extension is on here so GoogleScriptService still loads custom top of page element that shows the extension is turned off
        if (!extensionIsOn) {
            return;
        }
        yield ContentScript.getSearchElement();
        const queryString = ".SoaBEf:not([data-processed])";
        ContentScript.processSearchResultsForBlocking(queryString);
        new MutationObserver(() => {
            ContentScript.processSearchResultsForBlocking(queryString);
        }).observe(ContentScript.searchElementDiv, {
            childList: true,
            subtree: true,
        });
    });
}


/***/ }),

/***/ "./src/contentScript/googleRegular.ts":
/*!********************************************!*\
  !*** ./src/contentScript/googleRegular.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ googleSearchRegular)
/* harmony export */ });
/* harmony import */ var _contentScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentScript */ "./src/contentScript/contentScript.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function googleSearchRegular(_a) {
    return __awaiter(this, arguments, void 0, function* ({ extensionIsOn, urlsDict, lifeTimeBlocks, }) {
        const ContentScript = new _contentScript__WEBPACK_IMPORTED_MODULE_0__.GoogleScriptService(urlsDict, extensionIsOn, lifeTimeBlocks, "w");
        // We check extension is on here so GoogleScriptService still loads custom top of page element that shows the extension is turned off
        if (!extensionIsOn) {
            return;
        }
        yield ContentScript.getSearchElement();
        const queryString = ".g:not([data-processed]):not([data-initq] *)";
        ContentScript.processSearchResultsForBlocking(queryString);
        new MutationObserver(() => {
            ContentScript.processSearchResultsForBlocking(queryString);
            setTimeout(() => processRelatedQuestionsForBlocking(ContentScript.searchElementDiv), 500); //TODO fix need for 500 timeout
        }).observe(ContentScript.searchElementDiv, {
            childList: true,
            subtree: true,
        });
        function processRelatedQuestionsForBlocking(searchElement) {
            const moreToAskSections = searchElement.querySelectorAll(":not([data-processed])[data-initq]");
            moreToAskSections === null || moreToAskSections === void 0 ? void 0 : moreToAskSections.forEach((askSection) => {
                askSection.setAttribute("data-processed", "true");
                const relatedQuestions = askSection.querySelectorAll(".related-question-pair:not([data-processed])");
                relatedQuestions === null || relatedQuestions === void 0 ? void 0 : relatedQuestions.forEach((relatedQuestion) => {
                    if (ContentScript.processedResults.has(relatedQuestion)) {
                        return;
                    }
                    ContentScript.processedResults.add(relatedQuestion);
                    relatedQuestion.setAttribute("data-processed", "true");
                    if (ContentScript.checkLinksForBlockedUrls(searchElement) ||
                        ContentScript.checkCitesForBlockedUrls(searchElement)) {
                        ContentScript.markElementAsBlocked(relatedQuestion);
                    }
                });
            });
        }
    });
}


/***/ }),

/***/ "./src/contentScript/googleVideos.ts":
/*!*******************************************!*\
  !*** ./src/contentScript/googleVideos.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ googleSearchVideos)
/* harmony export */ });
/* harmony import */ var _contentScript__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contentScript */ "./src/contentScript/contentScript.tsx");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function googleSearchVideos(_a) {
    return __awaiter(this, arguments, void 0, function* ({ extensionIsOn, urlsDict, lifeTimeBlocks, }) {
        const ContentScript = new _contentScript__WEBPACK_IMPORTED_MODULE_0__.GoogleScriptService(urlsDict, extensionIsOn, lifeTimeBlocks, "v");
        // We check extension is on here so GoogleScriptService still loads custom top of page element that shows the extension is turned off
        if (!extensionIsOn) {
            return;
        }
        yield ContentScript.getSearchElement();
        const queryString = ".g:not([data-processed])";
        ContentScript.processSearchResultsForBlocking(queryString);
        new MutationObserver(() => {
            ContentScript.processSearchResultsForBlocking(queryString);
        }).observe(ContentScript.searchElementDiv, {
            childList: true,
            subtree: true,
        });
    });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/contentScript/index.tsx ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _googleRegular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleRegular */ "./src/contentScript/googleRegular.ts");
/* harmony import */ var _googleImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googleImages */ "./src/contentScript/googleImages.ts");
/* harmony import */ var _googleVideos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./googleVideos */ "./src/contentScript/googleVideos.ts");
/* harmony import */ var _googleNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./googleNews */ "./src/contentScript/googleNews.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function initializeContentScript() {
    return __awaiter(this, void 0, void 0, function* () {
        const extensionIsOn = yield isExtensionOn();
        const urlsDict = yield getBlockedUrl();
        const lifeTimeBlocks = yield getLifeTimeBlockedUrl();
        if (!urlsDict.blockedUrlData) {
            return;
        }
        callContentScript({ extensionIsOn, urlsDict, lifeTimeBlocks });
    });
}
function callContentScript(googleContentScriptProps) {
    var _a, _b;
    const url = new URL(window.location.href);
    const urlParameters = url.searchParams;
    const tbm = (_a = urlParameters.get("tbm")) !== null && _a !== void 0 ? _a : "";
    const udm = (_b = urlParameters.get("udm")) !== null && _b !== void 0 ? _b : "";
    if (tbm.includes("bks")) {
        // Not implemented
    }
    else if (tbm.includes("vid")) {
        (0,_googleVideos__WEBPACK_IMPORTED_MODULE_2__["default"])(googleContentScriptProps);
    }
    else if (tbm.includes("nws")) {
        console.log("d");
        (0,_googleNews__WEBPACK_IMPORTED_MODULE_3__["default"])(googleContentScriptProps);
    }
    else if (udm.includes("2")) {
        (0,_googleImages__WEBPACK_IMPORTED_MODULE_1__["default"])(googleContentScriptProps);
    }
    else {
        (0,_googleRegular__WEBPACK_IMPORTED_MODULE_0__["default"])(googleContentScriptProps);
    }
}
function isExtensionOn() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield chrome.storage.local.get("extensionOnOff");
        return result.extensionOnOff;
    });
}
function getBlockedUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield chrome.storage.local.get("blockedUrlData");
        return { blockedUrlData: result.blockedUrlData || {} };
    });
}
function getLifeTimeBlockedUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield chrome.storage.local.get("lifetimeTotalBlocks");
        return result.lifetimeTotalBlocks;
    });
}
initializeContentScript();

/******/ })()
;
//# sourceMappingURL=contentScript.js.map