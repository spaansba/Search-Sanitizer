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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  color-scheme: dark;
}
body {
  background-color: #303030;
  width: 24rem;
  height: 24rem;
}

#popup-container {
  display: flex;
  flex-direction: column;
}

#entire-top-bar {
  padding-top: 0.5rem;
  padding-bottom: 0.8rem;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #d1d1cf;
}

.top-bar-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
}

.header-text {
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  color: #d1d1cf;
  margin-right: 0.2rem;
}

.top-bar-icon {
  width: 32px;
  height: 32px;
}

/* on off slider */
.slider-container {
  width: 34px;
  height: 21px;
  position: relative;
}

.slider-checkbox {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.slider-switch {
  width: 100%;
  height: 100%;
  display: block;
  background-color: #484847;
  border-radius: 11px;
  cursor: pointer;
  transition: all 0.2s ease-out;
}

.slider-slider {
  width: 18px;
  height: 18px;
  position: absolute;
  left: calc(50% - 18px / 2 - 7px);
  top: calc(50% - 18px / 2);
  border-radius: 50%;
  background: #767675;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15), 0px 2px 1px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease-out;
  cursor: pointer;
}

.slider-checkbox:checked + .slider-switch {
  background-color: #34c759;
}

.slider-checkbox:checked + .slider-switch .slider-slider {
  left: calc(50% - 18px / 2 + 7px);
  top: calc(50% - 18px / 2);
}

/* Settings Button */
#settings-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#settings-icon img {
  width: 100%;
  height: 100%;
  display: block;
}

.button-hover-effect {
  padding: 6px;
  border-radius: 8px;
  transition: background-color 0.3s ease;
}
.button-hover-effect:hover {
  background-color: #484847;
}

/* middle */
#middle-section {
  max-height: 20rem;
  overflow-y: auto;
  overflow-x: hidden;
}

.add-new-blocked-site {
  padding: 0.5rem;
  height: 4rem;
}

.cont {
  margin: 10px;
}
.blocked-add-icon {
  width: 44px;
  height: 44px;
  padding-top: 5px;
  padding-bottom: 5px;
}

.blocked-card-inside {
  gap: 1.5rem;
}

.blocked-card-outline {
  margin: 5px 10px 5px 10px;
  display: flex;
}

.blocked-card-add {
  justify-content: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.blocked-site-img {
  width: 52px;
  height: 52px;
}

.blocked-site-text-container {
  padding-top: 0.5rem;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
}

.blocked-site-url {
  font-weight: 400;
  font-size: 18px;
  color: #d1d1cf;
  padding-bottom: 0.2rem;
}

.blocked-site-under-text {
  font-size: 12px;
  color: #7e7e74;
}
/* Bottom bar */
#bottom-bar {
  padding-top: 0.5rem;
  padding-bottom: 0.8rem;
  height: 32px;
}

/* Popup for adding new sites */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: #303030;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  min-width: 200px;
}

.popup-content button {
  padding: 10px;
  background-color: #484847;
  color: #d1d1cf;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cross-button {
  display: flex;
  justify-content: center;
}

.cross-image {
  padding-top: 5px;
  padding-bottom: 5px;
  height: 20px;
  width: 20px;
}
`, "",{"version":3,"sources":["webpack://./src/popup/popup.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,gCAAgC;AAClC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,oBAAoB;AACtB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA,kBAAkB;AAClB;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,mBAAmB;EACnB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,gCAAgC;EAChC,yBAAyB;EACzB,kBAAkB;EAClB,mBAAmB;EACnB,4EAA4E;EAC5E,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,gCAAgC;EAChC,yBAAyB;AAC3B;;AAEA,oBAAoB;AACpB;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,sCAAsC;AACxC;AACA;EACE,yBAAyB;AAC3B;;AAEA,WAAW;AACX;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;AACd;AACA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,eAAe;EACf,cAAc;AAChB;AACA,eAAe;AACf;EACE,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;AACd;;AAEA,+BAA+B;AAC/B;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,SAAS;EACT,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,cAAc;EACd,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,WAAW;AACb","sourcesContent":[":root {\r\n  color-scheme: dark;\r\n}\r\nbody {\r\n  background-color: #303030;\r\n  width: 24rem;\r\n  height: 24rem;\r\n}\r\n\r\n#popup-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n#entire-top-bar {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.8rem;\r\n  height: 32px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-bottom: 1px solid #d1d1cf;\r\n}\r\n\r\n.top-bar-section {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  gap: 0.5rem;\r\n}\r\n\r\n.header-text {\r\n  text-align: center;\r\n  font-weight: 400;\r\n  font-size: 18px;\r\n  color: #d1d1cf;\r\n  margin-right: 0.2rem;\r\n}\r\n\r\n.top-bar-icon {\r\n  width: 32px;\r\n  height: 32px;\r\n}\r\n\r\n/* on off slider */\r\n.slider-container {\r\n  width: 34px;\r\n  height: 21px;\r\n  position: relative;\r\n}\r\n\r\n.slider-checkbox {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n  position: absolute;\r\n}\r\n\r\n.slider-switch {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  background-color: #484847;\r\n  border-radius: 11px;\r\n  cursor: pointer;\r\n  transition: all 0.2s ease-out;\r\n}\r\n\r\n.slider-slider {\r\n  width: 18px;\r\n  height: 18px;\r\n  position: absolute;\r\n  left: calc(50% - 18px / 2 - 7px);\r\n  top: calc(50% - 18px / 2);\r\n  border-radius: 50%;\r\n  background: #767675;\r\n  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.15), 0px 2px 1px rgba(0, 0, 0, 0.06);\r\n  transition: all 0.2s ease-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider-checkbox:checked + .slider-switch {\r\n  background-color: #34c759;\r\n}\r\n\r\n.slider-checkbox:checked + .slider-switch .slider-slider {\r\n  left: calc(50% - 18px / 2 + 7px);\r\n  top: calc(50% - 18px / 2);\r\n}\r\n\r\n/* Settings Button */\r\n#settings-icon {\r\n  width: 24px;\r\n  height: 24px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n#settings-icon img {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n}\r\n\r\n.button-hover-effect {\r\n  padding: 6px;\r\n  border-radius: 8px;\r\n  transition: background-color 0.3s ease;\r\n}\r\n.button-hover-effect:hover {\r\n  background-color: #484847;\r\n}\r\n\r\n/* middle */\r\n#middle-section {\r\n  max-height: 20rem;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.add-new-blocked-site {\r\n  padding: 0.5rem;\r\n  height: 4rem;\r\n}\r\n\r\n.cont {\r\n  margin: 10px;\r\n}\r\n.blocked-add-icon {\r\n  width: 44px;\r\n  height: 44px;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.blocked-card-inside {\r\n  gap: 1.5rem;\r\n}\r\n\r\n.blocked-card-outline {\r\n  margin: 5px 10px 5px 10px;\r\n  display: flex;\r\n}\r\n\r\n.blocked-card-add {\r\n  justify-content: center;\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.5rem;\r\n}\r\n\r\n.blocked-site-img {\r\n  width: 52px;\r\n  height: 52px;\r\n}\r\n\r\n.blocked-site-text-container {\r\n  padding-top: 0.5rem;\r\n  align-self: flex-start;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.blocked-site-url {\r\n  font-weight: 400;\r\n  font-size: 18px;\r\n  color: #d1d1cf;\r\n  padding-bottom: 0.2rem;\r\n}\r\n\r\n.blocked-site-under-text {\r\n  font-size: 12px;\r\n  color: #7e7e74;\r\n}\r\n/* Bottom bar */\r\n#bottom-bar {\r\n  padding-top: 0.5rem;\r\n  padding-bottom: 0.8rem;\r\n  height: 32px;\r\n}\r\n\r\n/* Popup for adding new sites */\r\n.popup-overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.popup-content {\r\n  background-color: #303030;\r\n  padding: 20px;\r\n  border-radius: 8px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 10px;\r\n  position: relative;\r\n  min-width: 200px;\r\n}\r\n\r\n.popup-content button {\r\n  padding: 10px;\r\n  background-color: #484847;\r\n  color: #d1d1cf;\r\n  border: none;\r\n  border-radius: 8px;\r\n  cursor: pointer;\r\n  transition: background-color 0.3s ease;\r\n}\r\n\r\n.cross-button {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.cross-image {\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  height: 20px;\r\n  width: 20px;\r\n}\r\n"],"sourceRoot":""}]);
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



const Brands = [
    {
        id: 1,
        icon: "broom.png",
        url: "reddit.com",
    },
    {
        id: 2,
        icon: "broom.png",
        url: "wikipedia.com",
    },
    {
        id: 1,
        icon: "broom.png",
        url: "reddit.com",
    },
    {
        id: 1,
        icon: "broom.png",
        url: "reddit.com",
    },
    {
        id: 2,
        icon: "broom.png",
        url: "wikipedia.com",
    },
    {
        id: 1,
        icon: "broom.png",
        url: "reddit.com",
    },
    {
        id: 1,
        icon: "broom.png",
        url: "reddit.com",
    },
    {
        id: 2,
        icon: "broom.png",
        url: "wikipedia.com",
    },
    {
        id: 1,
        icon: "broom.png",
        url: "reddit.com",
    },
];
const App = ({ blockedWebsites }) => {
    const [showPopup, setAddSiteShowPopup] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const popupRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const handleAddNewClick = () => {
        setAddSiteShowPopup(true);
    };
    const handleClosePopup = () => {
        setAddSiteShowPopup(false);
    };
    // For if the user clicks outside of the add site popup, close the add site popup
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const handleClickOutside = (event) => {
            if (popupRef.current &&
                !popupRef.current.contains(event.target)) {
                handleClosePopup();
            }
        };
        if (showPopup) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showPopup]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "popup-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "entire-top-bar" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "left-top-bar", className: "top-bar-section" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "top-bar-icon", src: "broom.png", alt: "Broom icon" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "header-text" }, "Search Sanitzer")),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "right-top-bar", className: "top-bar-section" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "slider-container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", className: "slider-checkbox", id: "checkbox" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "slider-switch", htmlFor: "checkbox" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "slider-slider" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "settings-icon", className: "button-hover-effect" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "setting.png", alt: "Settings icon" })))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "middle-section", className: "scrollable-section" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { onClick: handleAddNewClick, id: "blocked-add-new", className: "blocked-card-outline blocked-card-add button-hover-effect" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "blocked-add-icon", src: "add.png", alt: "plus icon" })),
            blockedWebsites.map((website) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "button-hover-effect blocked-card-outline blocked-card-inside", key: website.id },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "blocked-site-img", src: website.icon, alt: `Logo for ${website.url}` }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "blocked-site-text-container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "blocked-site-url" }, website.url),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "blocked-site-under-text" }, "Blocked 12k times")))))),
        showPopup && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-overlay" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "popup-content", ref: popupRef },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => {
                        handleClosePopup();
                    } }, "Add <current site>"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => {
                        handleClosePopup();
                    } }, "Manual add sites"),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cross-button button-hover-effect", onClick: handleClosePopup },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "cross-image", src: "close.png" }))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "bottom-bar" })));
};
const container = document.createElement("div");
document.body.appendChild(container);
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, { blockedWebsites: Brands }));
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e"], () => (__webpack_require__("./src/popup/popup.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map