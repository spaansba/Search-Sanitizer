/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  /* Light mode colors */
  --main-background-color: #fff;
  --secondary-background-color: #f4f4f4;
  --text-color: #333333;
  --secondary-text-color: #333333;
  --card-background: #f0f0f0;
  --border: 1px solid #acacaa;
  font-family: "Lato", sans-serif;
}

/* Dark mode colors */
[data-theme="dark"] {
  --main-background-color: #696969;
  --secondary-background-color: #424242;
  --text-color: #000000;
  --secondary-text-color: #000000;
  --card-background: #2c2c2c;
  color: var(--text-color);
}

body {
  margin: 0;
  background-color: var(--main-background-color);
  width: 350px;
}

#popup-container {
  display: flex;
  flex-direction: column;
}

/* top bar */
#entire-top-bar {
  background-color: var(--secondary-background-color);
  padding: 15px 15px 0px 15px;
  padding-bottom: 15px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
}

.top-bar-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem;
}

.header-text {
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  color: var(--light-main-text);
  margin-left: 0.5rem;
}

.top-bar-icon {
  width: 32px;
  height: 32px;
}

/* Settings Button */
#settings-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.7s ease;

  img {
    user-select: none;
    width: 100%;
    height: 100%;
    display: block;
  }
}

#settings-icon:hover {
  cursor: pointer;
  transform: rotate(0.3turn);
}

.button-hover-effect {
  padding: 6px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}

#middle-section {
  padding: 5px 15px 15px 15px;

  h1 {
    font-size: 18px;
  }
}

#bottom-section {
  background-color: var(--secondary-background-color);
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  align-content: center;
  padding: 0px 15px;
  height: 78px;
}

#bottom-section h1 {
  font-size: 18px;
}

#bottom-section .blocked-svg-container {
  background-color: #c5ce9e00;
}

#bottom-section svg {
  width: 32px;
  height: 32px;
}

#bottom-section .badge {
  background-color: #ccccc8;
  width: 27px;
  height: 20px;
  font-size: 9px;
}

.block-url-header-container {
  display: flex;
  align-items: baseline;
}

.add-in-bulk-link {
  opacity: 0.7;
  font-size: 0.7rem;
  margin-left: 10px;
  text-decoration: underline;
}

.add-in-bulk-link:hover {
  opacity: 1;
  cursor: pointer;
}

.dicord-button {
  cursor: pointer;
}
`, "",{"version":3,"sources":["webpack://./src/popup/popup.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,qCAAqC;EACrC,qBAAqB;EACrB,+BAA+B;EAC/B,0BAA0B;EAC1B,2BAA2B;EAC3B,+BAA+B;AACjC;;AAIA,qBAAqB;AACrB;EACE,gCAAgC;EAChC,qCAAqC;EACrC,qBAAqB;EACrB,+BAA+B;EAC/B,0BAA0B;EAC1B,wBAAwB;AAC1B;;AAEA;EACE,SAAS;EACT,8CAA8C;EAC9C,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA,YAAY;AACZ;EACE,mDAAmD;EACnD,2BAA2B;EAC3B,oBAAoB;EACpB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,oBAAoB;AACpB;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,+BAA+B;;EAE/B;IACE,iBAAiB;IACjB,WAAW;IACX,YAAY;IACZ,cAAc;EAChB;AACF;;AAEA;EACE,eAAe;EACf,0BAA0B;AAC5B;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,2BAA2B;;EAE3B;IACE,eAAe;EACjB;AACF;;AAEA;EACE,mDAAmD;EACnD,yCAAyC;EACzC,qBAAqB;EACrB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,UAAU;EACV,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB","sourcesContent":[":root {\r\n  /* Light mode colors */\r\n  --main-background-color: #fff;\r\n  --secondary-background-color: #f4f4f4;\r\n  --text-color: #333333;\r\n  --secondary-text-color: #333333;\r\n  --card-background: #f0f0f0;\r\n  --border: 1px solid #acacaa;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\r\n\r\n/* Dark mode colors */\r\n[data-theme=\"dark\"] {\r\n  --main-background-color: #696969;\r\n  --secondary-background-color: #424242;\r\n  --text-color: #000000;\r\n  --secondary-text-color: #000000;\r\n  --card-background: #2c2c2c;\r\n  color: var(--text-color);\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  background-color: var(--main-background-color);\r\n  width: 350px;\r\n}\r\n\r\n#popup-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/* top bar */\r\n#entire-top-bar {\r\n  background-color: var(--secondary-background-color);\r\n  padding: 15px 15px 0px 15px;\r\n  padding-bottom: 15px;\r\n  height: 32px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.top-bar-section {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 0.8rem;\r\n}\r\n\r\n.header-text {\r\n  text-align: center;\r\n  font-weight: 400;\r\n  font-size: 18px;\r\n  color: var(--light-main-text);\r\n  margin-left: 0.5rem;\r\n}\r\n\r\n.top-bar-icon {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n/* Settings Button */\r\n#settings-icon {\r\n  width: 24px;\r\n  height: 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: transform 0.7s ease;\r\n\r\n  img {\r\n    user-select: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n  }\r\n}\r\n\r\n#settings-icon:hover {\r\n  cursor: pointer;\r\n  transform: rotate(0.3turn);\r\n}\r\n\r\n.button-hover-effect {\r\n  padding: 6px;\r\n  border-radius: 8px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n#middle-section {\r\n  padding: 5px 15px 15px 15px;\r\n\r\n  h1 {\r\n    font-size: 18px;\r\n  }\r\n}\r\n\r\n#bottom-section {\r\n  background-color: var(--secondary-background-color);\r\n  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);\r\n  align-content: center;\r\n  padding: 0px 15px;\r\n  height: 78px;\r\n}\r\n\r\n#bottom-section h1 {\r\n  font-size: 18px;\r\n}\r\n\r\n#bottom-section .blocked-svg-container {\r\n  background-color: #c5ce9e00;\r\n}\r\n\r\n#bottom-section svg {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n#bottom-section .badge {\r\n  background-color: #ccccc8;\r\n  width: 27px;\r\n  height: 20px;\r\n  font-size: 9px;\r\n}\r\n\r\n.block-url-header-container {\r\n  display: flex;\r\n  align-items: baseline;\r\n}\r\n\r\n.add-in-bulk-link {\r\n  opacity: 0.7;\r\n  font-size: 0.7rem;\r\n  margin-left: 10px;\r\n  text-decoration: underline;\r\n}\r\n\r\n.add-in-bulk-link:hover {\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.dicord-button {\r\n  cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/popup/popup.css":
/*!*****************************!*\
  !*** ./src/popup/popup.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/popup/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _popup_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup.css */ "./src/popup/popup.css");
/* harmony import */ var _components_onOffSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/onOffSlider */ "./src/components/onOffSlider.tsx");
/* harmony import */ var _components_urlInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/urlInput */ "./src/components/urlInput.tsx");
/* harmony import */ var _components_dashboard_blockedSvgContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard/blockedSvgContainer */ "./src/components/dashboard/blockedSvgContainer.tsx");







const App = () => {
    const [lifeTimeBlocks, setLifeTimeBlocks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ w: 0, i: 0, v: 0, n: 0 });
    function setTheme(isDarkMode) {
        document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    }
    // Set lifeTimeBlocks
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        chrome.storage.local.get(["lifetimeTotalBlocks"], (result) => {
            setLifeTimeBlocks(result.lifetimeTotalBlocks);
        });
        chrome.storage.local.get(["darkMode"], (result) => {
            const darkModeEnabled = result.darkMode === true;
            setTheme(darkModeEnabled);
        });
    }, []);
    // Get slider changed message
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const messageListener = (message) => {
            if (message.type === "SLIDER_CHANGED") {
                chrome.storage.local.get([message.key], (result) => {
                    console.log(`Slider ${message.key} changed to ${result[message.key]}`);
                });
            }
        };
        chrome.runtime.onMessage.addListener(messageListener);
        return () => {
            chrome.runtime.onMessage.removeListener(messageListener);
        };
    }, []);
    function openOptionsPage() {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage(() => {
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                    const tab = tabs[0];
                    if (tab.id) {
                        chrome.tabs.sendMessage(tab.id, { type: "SET_ACTIVE_SECTION", section: "settings" });
                    }
                });
            });
        }
        else {
            window.open(chrome.runtime.getURL("options.html?section=settings"));
        }
    }
    const handleClose = () => {
        window.close();
    };
    function addBlockedUrl(urlToAdd) {
        if (urlToAdd) {
            chrome.storage.local.get(["blockedUrlData"], (result) => {
                if (result.blockedUrlData) {
                    const updatedBlockedUrls = Object.assign({}, result.blockedUrlData);
                    updatedBlockedUrls[urlToAdd] = {
                        i: 0,
                        s: 0,
                        v: 0,
                    };
                    chrome.storage.local.set({ blockedUrlData: updatedBlockedUrls });
                }
            });
        }
    }
    function onClickDiscord() {
        window.open("https://discord.gg/smt753Fwt3", "_blank");
    }
    const ExtensionOnOffSetting = {
        settingName: "Extension on",
        googleStorageKey: "extensionOnOff",
        refreshPageOnUpdate: false,
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "popup-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "entire-top-bar" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "left-top-bar", className: "top-bar-section" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "top-bar-icon", src: "logoApp.png", alt: "Broom icon", title: "Search Sanitizer" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "right-top-bar", className: "top-bar-section" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_onOffSlider__WEBPACK_IMPORTED_MODULE_3__["default"], { id: "OnOff", setting: ExtensionOnOffSetting }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { title: "Join the Discord for help", className: "dicord-button", onClick: onClickDiscord },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "24px", height: "24px", viewBox: "0 -28.5 256 256", version: "1.1", preserveAspectRatio: "xMidYMid" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z", fill: "#5865F2" })))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { onClick: openOptionsPage, id: "settings-icon", className: "button-hover-effect" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "setting.png", alt: "Settings icon" })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "middle-section" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "block-url-header-container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Block URL"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { onClick: openOptionsPage, className: "add-in-bulk-link" }, "add in bulk")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_urlInput__WEBPACK_IMPORTED_MODULE_4__["default"], { handleClose: handleClose, addBlockedUrl: addBlockedUrl, addCurrentUrl: true })),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "bottom-section" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_dashboard_blockedSvgContainer__WEBPACK_IMPORTED_MODULE_5__["default"], { lifeTimeBlocks: {
                    i: lifeTimeBlocks.i,
                    n: lifeTimeBlocks.n,
                    v: lifeTimeBlocks.v,
                    w: lifeTimeBlocks.w,
                }, addLifeTimeText: true }))));
};
const container = document.createElement("div");
document.body.appendChild(container);
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkreact_extension"] = self["webpackChunkreact_extension"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","src_components_dashboard_blockedSvgContainer_tsx-src_components_onOffSlider_tsx-src_component-b96748"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map