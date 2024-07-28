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
    getBlockedAmount();
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
function getBlockedAmount() {
    const hiddenElements = Array.from(document.querySelectorAll('[card-show="false"]'));
    console.log(hiddenElements.values);
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

const sitesToFilter = new Set(["reddit", "wikipedia"]);
let BlockedCount = 0;
function filterGoogleSearch() {
    if (document.documentElement.dataset.addScript) {
        console.error("script already added");
        return;
    }
    document.documentElement.dataset.addScript = "true";
    const processedResults = new Set();
    new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type !== "childList") {
                return;
            }
            mutation.addedNodes.forEach((node) => {
                if (node.nodeType !== Node.ELEMENT_NODE) {
                    return;
                }
                const searchResults = document.querySelectorAll("#search .g:not([data-processed])");
                searchResults.forEach((result) => {
                    if (processedResults.has(result)) {
                        return;
                    }
                    processedResults.add(result);
                    result.setAttribute("data-processed", "true");
                    const links = result.querySelectorAll("a");
                    const cites = result.querySelectorAll("cite");
                    const shouldHide = shouldFilterResult(links, cites);
                    if (shouldHide) {
                        addCardShow(result);
                    }
                });
                filterMoreToAskSection();
            });
        });
    }).observe(document.documentElement, { childList: true, subtree: true });
}
function filterMoreToAskSection() {
    const moreToAskSection = document.querySelector("[data-initq]");
    if (moreToAskSection) {
        const accordionItems = moreToAskSection.querySelectorAll('[jsname="yEVEwb"]');
        accordionItems.forEach((item) => {
            const links = item.querySelectorAll("a");
            const cites = item.querySelectorAll("cite");
            const shouldHide = shouldFilterResult(links, cites);
            if (shouldHide) {
                addCardShow(item);
            }
        });
    }
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
function shouldFilterLink(url) {
    if (!url)
        return false;
    try {
        const { hostname } = new URL(url);
        return Array.from(sitesToFilter).some((site) => hostname.includes(site));
    }
    catch (error) {
        console.log(`Invalid URL: ${url}`);
        return false;
    }
}
chrome.storage.sync.get(["ExtensionOnOff"], (result) => {
    if (result.ExtensionOnOff) {
        filterGoogleSearch();
    }
});
//Since we run content script at document start (see manifest) we can only add new content on loaded dom
document.addEventListener("DOMContentLoaded", () => {
    addDocumentHead();
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
    if (isElementVisible(element)) {
        BlockedCount = BlockedCount + 1;
        (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.updateBlockedCount)(BlockedCount);
        element.setAttribute("card-show", (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.getResultsHidden)().toString());
        element.setAttribute("card-relevant", "true");
    }
}
// Otherwise we are processing way to many elements that are not even visible on the page
function isElementVisible(element) {
    return !!(element.offsetWidth ||
        element.offsetHeight ||
        element.getClientRects().length);
}

/******/ })()
;
//# sourceMappingURL=contentScript.js.map