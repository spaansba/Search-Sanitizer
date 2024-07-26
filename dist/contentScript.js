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
/* harmony export */   getResultsHidden: () => (/* binding */ getResultsHidden)
/* harmony export */ });
let resultsHidden = false;
function addTopOfPage() {
    const appBar = document.querySelector("#appbar");
    if (!appBar) {
        console.log("App Bar could not be found");
        return;
    }
    console.log("App bar found:", appBar);
    const container = document.createElement("div");
    const toggleButton = document.createElement("button");
    toggleButton.style.width = "auto";
    toggleButton.style.height = "30px";
    toggleButton.style.marginBottom = "0.5rem";
    toggleButton.style.paddingLeft = "0.7rem";
    toggleButton.style.paddingRight = "0.7rem";
    toggleButton.style.borderWidth = "0px";
    toggleButton.style.borderRadius = "8px";
    container.appendChild(toggleButton);
    appBar.appendChild(container);
    // Add event listener to the toggle button
    toggleButton.addEventListener("click", () => {
        resultsHidden = !resultsHidden;
        updateToggleButton(toggleButton);
        toggleHiddenResults();
    });
    updateToggleButton(toggleButton);
}
function updateToggleButton(button) {
    button.textContent = resultsHidden
        ? "We blocked x search results. Click to block"
        : "We blocked x search results. Click to show";
}
function toggleHiddenResults() {
    const hiddenElements = document.querySelectorAll("[card-show]");
    hiddenElements.forEach((el) => {
        el.setAttribute("card-show", resultsHidden.toString());
    });
}
function getResultsHidden() {
    return resultsHidden;
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

const sitesToFilter = ["reddit", "wikipedia"];
function filterGoogleSearch() {
    if (document.documentElement.dataset.addScript) {
        return;
    }
    document.documentElement.dataset.addScript = "true";
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((element) => {
                if (element === document.head) {
                    addDocumentHead(element);
                }
                const searchResults = document.querySelectorAll("#search .g");
                searchResults.forEach((result) => {
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
    });
    //TODO add if searchResultsDiv is nothing
    observer.observe(document.documentElement, { childList: true, subtree: true });
}
let headAdded = false;
function addDocumentHead(element) {
    if (headAdded) {
        return;
    }
    const style = document.createElement("style");
    style.textContent = `
    /* Existing styles */
    [card-show="true"] { display: block !important; }
    [card-show="false"] { display: none !important; }
    
    /* You might want to add specific display types for different elements */
    span[card-show="true"], a[card-show="true"] { display: inline !important; }
    div[card-show="true"] { display: block !important; }
    
    /* Add more styles as needed */
  `;
    document.head.appendChild(style);
    headAdded = true;
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
        if (shouldFilterLink(cite.textContent)) {
            return true;
        }
    }
    return false;
}
function shouldFilterLink(url) {
    if (!url)
        return false;
    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname;
        for (const site of sitesToFilter) {
            if (hostname.includes(site)) {
                // console.log(`Filtered: ${url} (matched: ${site})`)
                return true;
            }
        }
    }
    catch (error) {
        console.log(`Invalid URL: ${url}`);
    }
    return false;
}
// Check if the current URL starts with any of the keys in rules
function Start() {
    filterGoogleSearch();
}
Start();
//Since we run content script at document start (see manifest) we can only add new content on loaded dom
document.addEventListener("DOMContentLoaded", () => {
    (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.addTopOfPage)();
});
function addCardShow(element) {
    element.setAttribute("card-show", (0,_components_topPage__WEBPACK_IMPORTED_MODULE_0__.getResultsHidden)().toString());
}

/******/ })()
;
//# sourceMappingURL=contentScript.js.map