/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contentScript/topPage.ts":
/*!**************************************!*\
  !*** ./src/contentScript/topPage.ts ***!
  \**************************************/
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
`;
function addTopOfPage(ExtensionIsOn, BlockedCount) {
    blockedCount = BlockedCount;
    const appBar = document.querySelector("#appbar");
    if (!appBar) {
        console.log("App Bar could not be found");
        return;
    }
    const style = document.createElement("style");
    style.id = "top-content-styles";
    style.textContent = styles;
    document.head.appendChild(style);
    const baseButton = document.createElement("button");
    baseButton.style.width = "auto";
    baseButton.style.height = "30px";
    baseButton.style.marginBottom = "0.2rem";
    baseButton.style.paddingLeft = "0.7rem";
    baseButton.style.paddingRight = "0.7rem";
    baseButton.style.borderWidth = "0px";
    baseButton.style.borderRadius = "8px";
    baseButton.style.transition = "opacity 0.3s ease";
    baseButton.className = "extension-button";
    if (ExtensionIsOn) {
        AddTopExtensionOn(appBar, baseButton);
    }
    else {
        AddTopExtensionOff(appBar, baseButton);
    }
}
// Top of page when the extension is on, exists of a button to hide / show the blocked sites
// Also contains a count of how many sites are blocked on the current page
function AddTopExtensionOn(appBar, baseButton) {
    const container = document.createElement("div");
    baseButton.addEventListener("click", () => {
        resultsHidden = !resultsHidden;
        toggleHiddenResults();
        updateButtonText(baseButton);
    });
    container.appendChild(baseButton);
    appBar.appendChild(container);
    updateButtonText(baseButton);
}
function updateButtonText(button) {
    if (blockedCount < 1) {
        button.textContent = `We blocked ${blockedCount} search results`;
    }
    else {
        button.textContent = `We blocked ${blockedCount} search results. Click to ${resultsHidden ? "hide" : "show"}`;
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
// Top of page when the extension is off, exists of a text and a button to turn the extension back on/refresh the page
function AddTopExtensionOff(appBar, baseButton) {
    const container = document.createElement("div");
    baseButton.textContent =
        "<name> is currently turned off. Click to turn back on";
    baseButton.addEventListener("click", () => {
        chrome.storage.sync.set({ ExtensionOnOff: true }, () => {
            window.location.reload();
        });
    });
    container.appendChild(baseButton);
    appBar.appendChild(container);
}
function updateBlockedCount(newCount) {
    blockedCount = newCount;
    const button = document.querySelector(".extension-button");
    if (button) {
        updateButtonText(button);
    }
}


/***/ }),

/***/ "./src/contentScript/urlFilter.ts":
/*!****************************************!*\
  !*** ./src/contentScript/urlFilter.ts ***!
  \****************************************/
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
    function matchesPattern(hostname, pattern) {
        hostname = hostname.toLowerCase();
        pattern = pattern.toLowerCase();
        const escapedPattern = pattern
            .replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
            .replace(/\\\*/g, ".*");
        const regex = new RegExp(`^${escapedPattern}$`);
        return regex.test(hostname);
    }
    function shouldFilterResult(links, cites) {
        for (const link of links) {
            if (shouldFilterLink(link.href)) {
                return true;
            }
        }
        for (const cite of cites) {
            if (cite.textContent && shouldFilterLink(cite.textContent)) {
                return true;
            }
        }
        return false;
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
/* harmony import */ var _topPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./topPage */ "./src/contentScript/topPage.ts");
/* harmony import */ var _urlFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./urlFilter */ "./src/contentScript/urlFilter.ts");
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
    const urlFilter = (0,_urlFilter__WEBPACK_IMPORTED_MODULE_1__.createUrlFilter)(blockedUrls);
    const search = getSearchElement();
    const ds = document.querySelector("#search");
    if (!search) {
        console.error("Cant find #search");
        return;
    }
    new MutationObserver(() => {
        filterNormalSearch();
        setTimeout(filterRelatedQuestions, 500); //TODO fix need for 500 timeout
        urlFilter.setBlockedUrl();
    }).observe(search, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
    });
    function filterNormalSearch() {
        //:not([data-initq] * excludes all the "MoreToAskSection" elements
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
    function filterRelatedQuestions() {
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
    function getSearchElement() {
        const startTime = Date.now();
        while (Date.now() - startTime < 10000) {
            const search = document.querySelector("#search");
            if (search) {
                return search;
            }
            const waitTill = new Date(new Date().getTime() + 100);
            while (waitTill > new Date()) { }
        }
        console.error("Timeout: Can't find #search after 10 seconds");
        return null;
    }
}
function initializeExtension() {
    return __awaiter(this, void 0, void 0, function* () {
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
//Since we run content script at document start (see manifest) we can only add new content on loaded dom
document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.sync.get(["ExtensionOnOff"], (result) => {
        (0,_topPage__WEBPACK_IMPORTED_MODULE_0__.addTopOfPage)(result.ExtensionOnOff, BlockedCount);
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
    if (isElementVisible(element)) {
        BlockedCount = BlockedCount + 1;
        (0,_topPage__WEBPACK_IMPORTED_MODULE_0__.updateBlockedCount)(BlockedCount);
        element.setAttribute("card-show", (0,_topPage__WEBPACK_IMPORTED_MODULE_0__.getResultsHidden)().toString());
        element.setAttribute("card-relevant", "true");
    }
}
// Otherwise we are processing way to many elements that are not even visible on the page
function isElementVisible(element) {
    return !!(element.offsetWidth ||
        element.offsetHeight ||
        element.getClientRects().length);
}
initializeExtension();

/******/ })()
;
//# sourceMappingURL=contentScript.js.map