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
let resultsHidden = false;
let blockedCount = 0;
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
function addTopOfPage(ExtensionIsOn, BlockedCount) {
    blockedCount = BlockedCount;
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
    container.title = getTitle(); //TODO make the title look the same as google titles
    container.className = "XDyW0e";
    const img = document.createElement("img");
    img.src = chrome.runtime.getURL("logoApp.png");
    img.className = "logo-image";
    const blockedOverlay = document.createElement("div");
    blockedOverlay.className = "blocked-count-overlay";
    blockedOverlay.textContent = blockedCount.toString();
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
    addStylesToHead();
}
function addStylesToHead() {
    const styleElement = document.createElement("style");
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
}
function getExtensionOnElement(container) {
    container.addEventListener("click", () => {
        resultsHidden = !resultsHidden;
        container.title = getTitle();
        toggleHiddenResults();
    });
    return container;
}
function getExtensionOffElement(container) {
    container.title =
        "Search Sanitizer is currently turned off. Click to turn back on";
    container.style.opacity = "0.4";
    container.addEventListener("click", () => {
        chrome.storage.sync.set({ ExtensionOnOff: true }, () => {
            window.location.reload();
        });
    });
    return container;
}
function getTitle() {
    if (blockedCount < 1) {
        return `${blockedCount} blocked search results`;
    }
    else {
        return `${blockedCount} blocked search results. Click to ${!resultsHidden ? "show" : "hide"} them again`;
    }
}
function toggleHiddenResults() {
    const hiddenElements = document.querySelectorAll("[card-show]");
    hiddenElements.forEach((element) => {
        if (element instanceof HTMLElement) {
            element.setAttribute("card-show", resultsHidden.toString());
        }
    });
}
function getResultsHidden() {
    return resultsHidden;
}
function updateBlockedCount(newCount) {
    blockedCount = newCount;
    const container = document.querySelector(".extension-button-search-bar");
    if (container) {
        container.title = getTitle();
    }
    const overlayContainer = document.querySelector(".blocked-count-overlay");
    if (overlayContainer) {
        overlayContainer.textContent = blockedCount.toString();
    }
    chrome.runtime.sendMessage({ type: "updateBadge", count: blockedCount });
}


/***/ }),

/***/ "./src/helper/urlFilter.ts":
/*!*********************************!*\
  !*** ./src/helper/urlFilter.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUrlFilter: () => (/* binding */ createUrlFilter)
/* harmony export */ });
function createUrlFilter(initialBlockedUrls) {
    let blockedUrls = Object.assign({}, initialBlockedUrls);
    let urlsBlocked = false;
    function shouldFilterLink(url) {
        try {
            for (const pattern of Object.keys(blockedUrls)) {
                // Here we check if the pattern is an URL and if it matches the current checked URL
                if (checkIfMatchedUrl(url, pattern)) {
                    console.log(`Blocked URL: ${url} matched pattern: ${pattern}`);
                    blockedUrls[pattern].s++;
                    return true;
                }
                // Here we check if the pattern is a matched Pattern and if it matches the current checked URL
                if (matchesPattern(url, pattern)) {
                    console.log(`Blocked URL: ${url} matched pattern: ${pattern}`);
                    blockedUrls[pattern].s++;
                    return true;
                }
            }
            return false;
        }
        catch (error) {
            console.error(`Error processing ${url}:`, error);
            return false;
        }
    }
    function checkIfMatchedUrl(urlString, pattern) {
        try {
            const url = new URL(urlString);
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
            console.error(`Invalid URL: ${urlString}`);
            return false;
        }
    }
    function removeTrailingSlash(s) {
        return s.endsWith("/") ? s.slice(0, -1) : s;
    }
    function matchesPattern(url, pattern) {
        url = url.toLowerCase();
        pattern = pattern.toLowerCase();
        const escapedPattern = pattern
            .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            .replace(/\\\*/g, ".*");
        const regex = new RegExp(`^${escapedPattern}$`);
        return regex.test(url);
    }
    function shouldFilterResult(links, cites) {
        for (const link of links) {
            if (isElementVisible(link) && shouldFilterLink(link.href)) {
                return true;
            }
        }
        for (const cite of cites) {
            if (cite.textContent &&
                isElementVisible(cite) &&
                shouldFilterLink(cite.textContent)) {
                return true;
            }
        }
        return false;
    }
    function isElementVisible(element) {
        return !!(element.offsetWidth ||
            element.offsetHeight ||
            element.getClientRects().length);
    }
    function getBlockedUrls() {
        return blockedUrls;
    }
    function resetUrlsBlocked() {
        urlsBlocked = false;
    }
    function wereUrlsBlocked() {
        return urlsBlocked;
    }
    function setBlockedUrl() {
        chrome.storage.sync.set({ blockedUrlData: blockedUrls });
    }
    return {
        setBlockedUrl,
        shouldFilterResult,
        getBlockedUrls,
        resetUrlsBlocked,
        wereUrlsBlocked,
    };
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
/*!********************************************!*\
  !*** ./src/contentScript/contentScript.ts ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_topPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/topPage */ "./src/components/topPage.ts");
/* harmony import */ var _helper_urlFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper/urlFilter */ "./src/helper/urlFilter.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function filterGoogleSearch(blockedUrls) {
    if (document.documentElement.dataset.addScript) {
        console.error("script already added");
        return;
    }
    document.documentElement.dataset.addScript = "true";
    const processedResults = new Set();
    const urlFilter = (0,_helper_urlFilter__WEBPACK_IMPORTED_MODULE_1__.createUrlFilter)(blockedUrls);
    // Set up a MutationObserver to wait for the #search element
    new MutationObserver((_, obs) => {
        const search = document.querySelector("#search");
        if (search) {
            obs.disconnect(); // Stop observing once #search is found
            setupFilteringObserver(search);
        }
    }).observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });
    function setupFilteringObserver(search) {
        new MutationObserver(() => {
            filterNormalSearch(search);
            setTimeout(() => filterRelatedQuestions(search), 500); //TODO fix need for 500 timeout
            urlFilter.setBlockedUrl();
        }).observe(search, {
            childList: true,
            subtree: true,
            attributes: false,
            characterData: false,
        });
    }
    function filterNormalSearch(search) {
        const searchResults = search.querySelectorAll(".g:not([data-processed]):not([data-initq] *)");
        if (!searchResults) {
            return;
        }
        searchResults.forEach((result) => {
            if (processedResults.has(result)) {
                return;
            }
            processedResults.add(result);
            result.setAttribute("data-processed", "true");
            const links = result.querySelectorAll("a");
            const cites = result.querySelectorAll("cite");
            if (urlFilter.shouldFilterResult(links, cites)) {
                addCardShow(result);
            }
        });
    }
    function filterRelatedQuestions(search) {
        const moreToAskSections = search.querySelectorAll("[data-initq]");
        if (!moreToAskSections) {
            return;
        }
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
                if (urlFilter.shouldFilterResult(links, cites)) {
                    addCardShow(relatedQuestion);
                }
            });
        });
    }
}
function initializeExtension() {
    return __awaiter(this, void 0, void 0, function* () {
        checkForUrlChange();
        const isExtensionOn = yield chrome.storage.sync.get(["ExtensionOnOff"]);
        if (isExtensionOn.ExtensionOnOff) {
            const initialValues = yield chrome.storage.sync.get(["blockedUrlData"]);
            if (initialValues.blockedUrlData) {
                addDocumentHead();
                filterGoogleSearch(initialValues.blockedUrlData);
            }
        }
    });
}
let BlockedCount = 0;
document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["ExtensionOnOff"], (result) => {
        (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.addTopOfPage)(result.ExtensionOnOff, BlockedCount);
    });
});
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
function addCardShow(element) {
    BlockedCount = BlockedCount + 1;
    (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.updateBlockedCount)(BlockedCount);
    element.setAttribute("card-show", (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.getResultsHidden)().toString());
    element.setAttribute("card-relevant", "true");
}
let lastUrl = location.href;
function checkForUrlChange() {
    if (location.href !== lastUrl) {
        lastUrl = location.href;
        resetBadge();
    }
}
function resetBadge() {
    BlockedCount = 0;
    (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.updateBlockedCount)(BlockedCount);
}
window.addEventListener("beforeunload", resetBadge);
initializeExtension();

/******/ })()
;
//# sourceMappingURL=contentScript.js.map