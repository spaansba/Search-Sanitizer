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
/* harmony export */   getResultsHidden: () => (/* binding */ getResultsHidden),
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
  heigth: 22px;
}
`;
let resultsHidden = false;
function addTopOfPage(ExtensionIsOn, blockedCountManager) {
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
    container.title = getTitle(blockedCountManager.getBlockedCount()); //TODO make the title look the same as google titles
    container.className = "XDyW0e";
    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("logoApp.png");
    img.className = "logo-image";
    const blockedOverlay = document.createElement("div");
    blockedOverlay.className = "blocked-count-overlay";
    blockedOverlay.textContent = blockedCountManager.getBlockedCount().toString();
    container = ExtensionIsOn
        ? getExtensionOnElement(container)
        : getExtensionOffElement(container);
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
            resultsHidden = !resultsHidden;
            container.title = getTitle(blockedCountManager.getBlockedCount());
            toggleHiddenResults();
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
        container.title =
            "Search Sanitizer is currently turned off. Click to turn back on";
        container.style.opacity = "0.4";
        container.addEventListener("click", () => {
            chrome.storage.sync.set({ extensionOnOff: true }, () => {
                window.location.reload();
            });
        });
        return container;
    }
    function toggleHiddenResults() {
        const hiddenElements = document.querySelectorAll("[card-show]");
        hiddenElements.forEach((element) => {
            if (element instanceof HTMLElement) {
                element.setAttribute("card-show", resultsHidden.toString());
            }
        });
    }
}
function getTitle(blockedCount) {
    if (blockedCount < 1) {
        return `${blockedCount} blocked search results`;
    }
    else {
        return `${blockedCount} blocked search results. Click to ${!resultsHidden ? "show" : "hide"} them again`;
    }
}
function getResultsHidden() {
    return resultsHidden;
}
function updateBlockedCount(blockedCount) {
    const container = document.querySelector(".extension-button-search-bar");
    if (container) {
        container.title = getTitle(blockedCount);
    }
    const overlayContainer = document.querySelector(".blocked-count-overlay");
    if (overlayContainer) {
        overlayContainer.textContent = blockedCount.toString();
    }
}


/***/ }),

/***/ "./src/contentScript/googleHelper.ts":
/*!*******************************************!*\
  !*** ./src/contentScript/googleHelper.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isElementVisible: () => (/* binding */ isElementVisible)
/* harmony export */ });
function isElementVisible(element) {
    return !!(element.offsetWidth ||
        element.offsetHeight ||
        element.getClientRects().length);
}


/***/ }),

/***/ "./src/contentScript/googleImages.tsx":
/*!********************************************!*\
  !*** ./src/contentScript/googleImages.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ googleSearchImages)
/* harmony export */ });
/* harmony import */ var _googleHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleHelper */ "./src/contentScript/googleHelper.ts");
/* harmony import */ var _googleRegular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googleRegular */ "./src/contentScript/googleRegular.tsx");


function googleSearchImages(blockedUrlsDict, blockedCountManager, searchElement) {
    const processedResults = new Set();
    new MutationObserver(() => {
        filterImageResults(searchElement);
    }).observe(searchElement, {
        childList: true,
        subtree: true,
    });
    function filterImageResults(search) {
        const searchResults = search.querySelectorAll(".ivg-i:not([data-processed]):not([data-initq] *)");
        searchResults.forEach((result) => {
            if (processedResults.has(result)) {
                return;
            }
            processedResults.add(result);
            result.setAttribute("data-processed", "true");
            const links = result.querySelectorAll("a");
            const cites = result.querySelectorAll("cite");
            for (const link of links) {
                if (link.href &&
                    (0,_googleRegular__WEBPACK_IMPORTED_MODULE_1__.shouldFilterLink)(link.href, blockedUrlsDict) &&
                    (0,_googleHelper__WEBPACK_IMPORTED_MODULE_0__.isElementVisible)(link)) {
                    console.log("yes");
                    addCardShow(result);
                    return;
                }
            }
            for (const cite of cites) {
                console.log(cite);
                if (cite.textContent &&
                    (0,_googleRegular__WEBPACK_IMPORTED_MODULE_1__.shouldFilterLink)(cite.textContent, blockedUrlsDict) &&
                    (0,_googleHelper__WEBPACK_IMPORTED_MODULE_0__.isElementVisible)(cite)) {
                    console.log("yes");
                    addCardShow(result);
                    return;
                }
            }
        });
    }
    function addCardShow(element) {
        blockedCountManager.incrementBlockedCount();
        // updateBlockedCount(blockedCountManager.getBlockedCount())
        element.setAttribute("card-show", "true");
        element.setAttribute("card-relevant", "true");
    }
}


/***/ }),

/***/ "./src/contentScript/googleRegular.tsx":
/*!*********************************************!*\
  !*** ./src/contentScript/googleRegular.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ googleSearchRegular),
/* harmony export */   shouldFilterLink: () => (/* binding */ shouldFilterLink)
/* harmony export */ });
/* harmony import */ var _components_topPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/topPage */ "./src/components/topPage.ts");
/* harmony import */ var _googleHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googleHelper */ "./src/contentScript/googleHelper.ts");


function googleSearchRegular(blockedUrlsDict, blockedCountManager, searchElement) {
    const processedResults = new Set();
    new MutationObserver(() => {
        filterNormalSearch(searchElement);
        setTimeout(() => filterRelatedQuestions(searchElement), 500); //TODO fix need for 500 timeout
    }).observe(searchElement, {
        childList: true,
        subtree: true,
    });
    function filterNormalSearch(search) {
        const searchResults = search.querySelectorAll(".g:not([data-processed]):not([data-initq] *)");
        searchResults.forEach((result) => {
            if (processedResults.has(result)) {
                return;
            }
            processedResults.add(result);
            result.setAttribute("data-processed", "true");
            const links = result.querySelectorAll("a");
            const cites = result.querySelectorAll("cite");
            for (const link of links) {
                if (link.href &&
                    shouldFilterLink(link.href, blockedUrlsDict) &&
                    (0,_googleHelper__WEBPACK_IMPORTED_MODULE_1__.isElementVisible)(link)) {
                    addCardShow(result);
                    return;
                }
            }
            for (const cite of cites) {
                if (cite.textContent &&
                    shouldFilterLink(cite.textContent, blockedUrlsDict) &&
                    (0,_googleHelper__WEBPACK_IMPORTED_MODULE_1__.isElementVisible)(cite)) {
                    addCardShow(result);
                    return;
                }
            }
        });
    }
    function filterRelatedQuestions(search) {
        const moreToAskSections = search.querySelectorAll("[data-initq]");
        moreToAskSections.forEach((askSection) => {
            askSection.setAttribute("data-processed", "true");
            const relatedQuestions = askSection.querySelectorAll(".related-question-pair:not([data-processed])");
            relatedQuestions.forEach((relatedQuestion) => {
                if (processedResults.has(relatedQuestion)) {
                    return;
                }
                processedResults.add(relatedQuestion);
                relatedQuestion.setAttribute("data-processed", "true");
                const links = relatedQuestion.querySelectorAll("a");
                const cites = relatedQuestion.querySelectorAll("cite");
                for (const link of links) {
                    if (shouldFilterLink(link.href, blockedUrlsDict)) {
                        addCardShow(relatedQuestion);
                        return;
                    }
                }
                for (const cite of cites) {
                    if (cite.textContent &&
                        shouldFilterLink(cite.textContent, blockedUrlsDict)) {
                        addCardShow(relatedQuestion);
                        return;
                    }
                }
            });
        });
    }
    function addCardShow(element) {
        blockedCountManager.incrementBlockedCount();
        (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.updateBlockedCount)(blockedCountManager.getBlockedCount());
        element.setAttribute("card-show", (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.getResultsHidden)().toString());
        element.setAttribute("card-relevant", "true");
    }
}
// url filter functions ///////////////
function shouldFilterLink(urlString, blockedUrls) {
    try {
        const url = new URL(urlString);
        for (const pattern of Object.keys(blockedUrls.blockedUrlData)) {
            // Here we check if the pattern is an URL and if it matches the current checked URL
            if (checkIfMatchedUrl(url, urlString, pattern)) {
                console.log(`Blocked URL: ${urlString} matched pattern: ${pattern}`);
                blockedUrls.blockedUrlData[pattern].s++;
                return true;
            }
            // Here we check if the pattern is a matched Pattern and if it matches the current checked URL
            if (matchesPattern(urlString, pattern)) {
                console.log(`Blocked URL: ${url} matched pattern: ${pattern}`);
                blockedUrls.blockedUrlData[pattern].s++;
                return true;
            }
        }
        return false;
    }
    catch (error) {
        console.error(`Error processing ${urlString}:`, error);
        return false;
    }
}
function checkIfMatchedUrl(url, urlString, pattern) {
    try {
        if (!pattern) {
            debugger;
            console.log("not");
            return;
        }
        pattern = removeTrailingSlash(pattern.toLowerCase());
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
            removeTrailingSlash(url.href.toLowerCase()),
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
function removeTrailingSlash(s) {
    return s.endsWith("/") ? s.slice(0, -1) : s;
}
function matchesPattern(urlString, pattern) {
    urlString = urlString.toLowerCase();
    pattern = pattern.toLowerCase();
    const escapedPattern = pattern
        .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        .replace(/\\\*/g, ".*");
    const regex = new RegExp(`^${escapedPattern}$`);
    return regex.test(urlString);
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
/* harmony import */ var _googleRegular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./googleRegular */ "./src/contentScript/googleRegular.tsx");
/* harmony import */ var _components_topPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/topPage */ "./src/components/topPage.ts");
/* harmony import */ var _googleImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./googleImages */ "./src/contentScript/googleImages.tsx");
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
        const extensionOn = yield isExtensionOn();
        const urlsDict = yield getBlockedUrl();
        const searchElement = yield findSearchElementOnGoogle();
        if (!searchElement) {
            console.info("Search element not found");
            return;
        }
        if (!extensionOn || !urlsDict.blockedUrlData) {
            console.info("Search Sanitizer Extension is off");
            return;
        }
        addDocumentHead();
        addEventListeners(extensionOn);
        callContentScript(urlsDict, searchElement);
    });
}
function callContentScript(urlsDict, searchElement) {
    var _a, _b;
    const url = new URL(window.location.href);
    const urlParameters = url.searchParams;
    const tbm = (_a = urlParameters.get("tbm")) !== null && _a !== void 0 ? _a : "";
    const udm = (_b = urlParameters.get("udm")) !== null && _b !== void 0 ? _b : "";
    if (tbm.includes("bks")) {
        console.log("books");
    }
    else if (tbm.includes("vid")) {
        console.log("videos");
    }
    else if (tbm.includes("nws")) {
        console.log("news");
    }
    else if (udm.includes("2")) {
        (0,_googleImages__WEBPACK_IMPORTED_MODULE_2__["default"])(urlsDict, BlockedCountManager, searchElement);
    }
    else {
        (0,_googleRegular__WEBPACK_IMPORTED_MODULE_0__["default"])(urlsDict, BlockedCountManager, searchElement);
    }
}
function isExtensionOn() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield chrome.storage.sync.get("extensionOnOff");
        return result.extensionOnOff;
    });
}
function getBlockedUrl() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield chrome.storage.sync.get("blockedUrlData");
        return result;
    });
}
function findSearchElementOnGoogle() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            const existingSearch = document.querySelector("#search");
            if (existingSearch) {
                resolve(existingSearch);
                return;
            }
            new MutationObserver((_, obs) => {
                const search = document.querySelector("#search");
                if (search) {
                    obs.disconnect();
                    resolve(search);
                }
            }).observe(document.body, {
                childList: true,
                subtree: true,
            });
        });
    });
}
function addEventListeners(extensionOn) {
    document.addEventListener("DOMContentLoaded", () => {
        (0,_components_topPage__WEBPACK_IMPORTED_MODULE_1__.addTopOfPage)(extensionOn, BlockedCountManager);
    });
}
function addDocumentHead() {
    const style = document.createElement("style");
    style.id = "Site Blocker Custom Styles";
    style.textContent = `
      /* Display Styles */
      [card-show="true"] { display: block !important; }
      [card-show="false"] { display: none !important; }
  
      /* Card Color Styles */
      [card-relevant="true"] {opacity: 0.7 !important}
    `;
    document.head.appendChild(style);
}
const BlockedCountManager = (() => {
    let blockedCount = 0;
    return {
        incrementBlockedCount: () => {
            blockedCount++;
            return blockedCount;
        },
        getBlockedCount: () => blockedCount,
    };
})();
initializeContentScript();

/******/ })()
;
//# sourceMappingURL=contentScript.js.map