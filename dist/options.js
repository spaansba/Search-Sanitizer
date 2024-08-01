/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/dashboard/optionBlockedCards.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/dashboard/optionBlockedCards.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  color-scheme: light;
  --light-main-background: #d1d1cf;
  --light-secondary-background: #fff;
  --light-main-text: black;
  --light-secondary-text: #3a3a35;
  --light-main-background: #d1d1cf;
  --light-hover: #d1d1cf;
  --border: 1px solid var(--light-main-background);
  font-family: "Lato", sans-serif;
}

.cards-container {
  row-gap: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card-container {
  background: linear-gradient(rgb(234, 240, 168), rgb(244, 247, 212));
  position: relative;
  height: 100px;
  width: 210px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  font-family: "Roboto";
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.2),
    0px 5px 7px 1px rgba(0, 0, 0, 0.14), 0px 2px 9px 3px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
}

.card-container > .card-top {
  background: linear-gradient(rgb(234, 240, 168), rgb(244, 247, 212));
  height: 60%;
  padding-left: 3px;
  padding-right: 3px;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 14px;
    font-weight: 700;
    text-overflow: ellipsis;
    overflow-x: hidden;
  }
}

.card-container > .card-bottom {
  padding-right: 1.2rem;
  padding-left: 1.2rem;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  height: 40%;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.card-container > .card-bottom .blocked-results {
  display: flex;
  gap: 8px;
}

.card-container > .blocked-results span {
  font-weight: 500;
  font-size: 10px;
  text-align: center;
}

.card-container > .card-bottom svg {
  width: 14px;
  height: 14px;
  fill: rgb(36, 22, 22);
  transition: fill 0.3s ease;
}

.card-container:hover {
  transform: translateY(-5px);

  .delete-button {
    opacity: 0.9;
  }
  .card-bottom svg {
    fill: black;
  }
}

.delete-button {
  opacity: 0.3;
  position: absolute;
  top: 5px;
  right: 5px;
  z-index: 1;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.delete-button svg {
  width: 18px;
  height: 18px;
  fill: rgb(36, 22, 22);
  transition: fill 0.3s ease;
}

.delete-button:hover svg {
  fill: #ff4444;
}
`, "",{"version":3,"sources":["webpack://./src/components/dashboard/optionBlockedCards.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,kCAAkC;EAClC,wBAAwB;EACxB,+BAA+B;EAC/B,gCAAgC;EAChC,sBAAsB;EACtB,gDAAgD;EAChD,+BAA+B;AACjC;;AAIA;EACE,aAAa;EACb,aAAa;EACb,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,mEAAmE;EACnE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,+BAA+B;EAC/B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,qBAAqB;EACrB;4EAC0E;EAC1E,kBAAkB;AACpB;;AAEA;EACE,mEAAmE;EACnE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB;IACE,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;EACpB;AACF;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,sBAAsB;EACtB,WAAW;EACX,8BAA8B;EAC9B,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,2BAA2B;;EAE3B;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,UAAU;EACV,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf","sourcesContent":[":root {\r\n  color-scheme: light;\r\n  --light-main-background: #d1d1cf;\r\n  --light-secondary-background: #fff;\r\n  --light-main-text: black;\r\n  --light-secondary-text: #3a3a35;\r\n  --light-main-background: #d1d1cf;\r\n  --light-hover: #d1d1cf;\r\n  --border: 1px solid var(--light-main-background);\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\r\n\r\n.cards-container {\r\n  row-gap: 12px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n}\r\n\r\n.card-container {\r\n  background: linear-gradient(rgb(234, 240, 168), rgb(244, 247, 212));\r\n  position: relative;\r\n  height: 100px;\r\n  width: 210px;\r\n  transition: transform 0.3s ease;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  font-family: \"Roboto\";\r\n  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.2),\r\n    0px 5px 7px 1px rgba(0, 0, 0, 0.14), 0px 2px 9px 3px rgba(0, 0, 0, 0.12);\r\n  border-radius: 8px;\r\n}\r\n\r\n.card-container > .card-top {\r\n  background: linear-gradient(rgb(234, 240, 168), rgb(244, 247, 212));\r\n  height: 60%;\r\n  padding-left: 3px;\r\n  padding-right: 3px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  p {\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    text-overflow: ellipsis;\r\n    overflow-x: hidden;\r\n  }\r\n}\r\n\r\n.card-container > .card-bottom {\r\n  padding-right: 1.2rem;\r\n  padding-left: 1.2rem;\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  background-color: #fff;\r\n  height: 40%;\r\n  border-bottom-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n\r\n.card-container > .card-bottom .blocked-results {\r\n  display: flex;\r\n  gap: 8px;\r\n}\r\n\r\n.card-container > .blocked-results span {\r\n  font-weight: 500;\r\n  font-size: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.card-container > .card-bottom svg {\r\n  width: 14px;\r\n  height: 14px;\r\n  fill: rgb(36, 22, 22);\r\n  transition: fill 0.3s ease;\r\n}\r\n\r\n.card-container:hover {\r\n  transform: translateY(-5px);\r\n\r\n  .delete-button {\r\n    opacity: 0.9;\r\n  }\r\n  .card-bottom svg {\r\n    fill: black;\r\n  }\r\n}\r\n\r\n.delete-button {\r\n  opacity: 0.3;\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  transition: opacity 0.3s ease;\r\n}\r\n\r\n.delete-button svg {\r\n  width: 18px;\r\n  height: 18px;\r\n  fill: rgb(36, 22, 22);\r\n  transition: fill 0.3s ease;\r\n}\r\n\r\n.delete-button:hover svg {\r\n  fill: #ff4444;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/helpButton/helpButton.css":
/*!****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/helpButton/helpButton.css ***!
  \****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.helpbutton-container {
  width: 20px;
  height: 20px;
  svg {
    fill: "#e8eaed";
    transition: 0.3;
  }
}

.help-dialog {
  user-select: text;
  transform: translateY(-2px);
  z-index: 100;
  p {
    font-size: 14px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/helpButton/helpButton.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ;IACE,eAAe;IACf,eAAe;EACjB;AACF;;AAEA;EACE,iBAAiB;EACjB,2BAA2B;EAC3B,YAAY;EACZ;IACE,eAAe;EACjB;AACF","sourcesContent":[".helpbutton-container {\r\n  width: 20px;\r\n  height: 20px;\r\n  svg {\r\n    fill: \"#e8eaed\";\r\n    transition: 0.3;\r\n  }\r\n}\r\n\r\n.help-dialog {\r\n  user-select: text;\r\n  transform: translateY(-2px);\r\n  z-index: 100;\r\n  p {\r\n    font-size: 14px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/onOffSlider.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/onOffSlider.css ***!
  \******************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `/* On/Off Slider */
.slider-container {
  width: 42.5px; /* 34px * 1.25 = 42.5px */
  height: 26.25px; /* 21px * 1.25 = 26.25px */
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
  background-color: #e0dfe2;
  border-radius: 13.75px; /* 11px * 1.25 = 13.75px */
  cursor: pointer;
  transition: all 0.4s ease-out;
}

.slider-slider {
  width: 22.5px; /* 18px * 1.25 = 22.5px */
  height: 22.5px;
  position: absolute;
  left: calc(50% - 22.5px / 2 - 8.75px); /* Adjusted for new size */
  top: calc(50% - 22.5px / 2);
  border-radius: 50%;
  background: white;
  box-shadow: 0px 2.5px 6.25px rgba(0, 0, 0, 0.15),
    0px 2.5px 1.25px rgba(0, 0, 0, 0.06); /* Increased shadow */
  transition: all 0.4s ease-out;
  cursor: pointer;
}

.slider-checkbox:checked + .slider-switch {
  background-color: #34c759;
}

.slider-checkbox:checked + .slider-switch .slider-slider {
  left: calc(50% - 22.5px / 2 + 8.75px); /* Adjusted for new size */
  top: calc(50% - 22.5px / 2);
}
`, "",{"version":3,"sources":["webpack://./src/components/onOffSlider.css"],"names":[],"mappings":"AAAA,kBAAkB;AAClB;EACE,aAAa,EAAE,yBAAyB;EACxC,eAAe,EAAE,0BAA0B;EAC3C,kBAAkB;AACpB;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;EACd,yBAAyB;EACzB,sBAAsB,EAAE,0BAA0B;EAClD,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,aAAa,EAAE,yBAAyB;EACxC,cAAc;EACd,kBAAkB;EAClB,qCAAqC,EAAE,0BAA0B;EACjE,2BAA2B;EAC3B,kBAAkB;EAClB,iBAAiB;EACjB;wCACsC,EAAE,qBAAqB;EAC7D,6BAA6B;EAC7B,eAAe;AACjB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,qCAAqC,EAAE,0BAA0B;EACjE,2BAA2B;AAC7B","sourcesContent":["/* On/Off Slider */\r\n.slider-container {\r\n  width: 42.5px; /* 34px * 1.25 = 42.5px */\r\n  height: 26.25px; /* 21px * 1.25 = 26.25px */\r\n  position: relative;\r\n}\r\n\r\n.slider-checkbox {\r\n  opacity: 0;\r\n  width: 0;\r\n  height: 0;\r\n  position: absolute;\r\n}\r\n\r\n.slider-switch {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block;\r\n  background-color: #e0dfe2;\r\n  border-radius: 13.75px; /* 11px * 1.25 = 13.75px */\r\n  cursor: pointer;\r\n  transition: all 0.4s ease-out;\r\n}\r\n\r\n.slider-slider {\r\n  width: 22.5px; /* 18px * 1.25 = 22.5px */\r\n  height: 22.5px;\r\n  position: absolute;\r\n  left: calc(50% - 22.5px / 2 - 8.75px); /* Adjusted for new size */\r\n  top: calc(50% - 22.5px / 2);\r\n  border-radius: 50%;\r\n  background: white;\r\n  box-shadow: 0px 2.5px 6.25px rgba(0, 0, 0, 0.15),\r\n    0px 2.5px 1.25px rgba(0, 0, 0, 0.06); /* Increased shadow */\r\n  transition: all 0.4s ease-out;\r\n  cursor: pointer;\r\n}\r\n\r\n.slider-checkbox:checked + .slider-switch {\r\n  background-color: #34c759;\r\n}\r\n\r\n.slider-checkbox:checked + .slider-switch .slider-slider {\r\n  left: calc(50% - 22.5px / 2 + 8.75px); /* Adjusted for new size */\r\n  top: calc(50% - 22.5px / 2);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/options/options.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/options/options.css ***!
  \***********************************************************************/
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
  color-scheme: light;
  --light-main-background: #d1d1cf;
  --light-secondary-background: #fff;
  --light-main-text: black;
  --light-secondary-text: #3a3a35;
  --light-main-background: #d1d1cf;
  --light-hover: #d1d1cf;
  --border: 1px solid var(--light-main-background);
  font-family: "Lato", sans-serif;
  user-select: none;
}

body {
  background-color: var(--light-main-background);
}

h2 {
  font-size: 24px;
  font-weight: 600;
  font-style: normal;
}

h3 {
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
}

.card {
  display: flex;
  flex-direction: column;
  padding: 28px !important;
  width: 730px !important;
  overflow-y: auto;
  position: fixed;
  top: 32px;
  bottom: 32px;
  left: calc(50% - 375px);
  background: var(--light-secondary-background);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
}

#options-page-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

header {
  padding-bottom: 0.8rem;
  border-bottom: var(--border);
}

.container {
  display: flex;
  align-items: center;
  color: var(--light-main-text);
  font-weight: 400;
  font-size: 22px;
  line-height: 100%;
}

.image-offset {
  gap: 0.8rem;
}

.container img {
  margin-right: auto;
}

.header-wrapper {
  flex-grow: 1;
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  font-size: 28px;
  font-weight: 600;
}

.settings-item-container {
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: var(--border);
}

.button {
  cursor: pointer;
}

p {
  font-size: 15px;
  color: var(--light-secondary-text);
  user-select: text;
}

.slider {
  margin-left: auto;
}

.active {
  color: green;
}

.custom-textarea {
  margin: 0;
  flex-grow: 2;
  flex-shrink: 0;
  display: block;
  white-space: pre;
  word-wrap: normal;
  box-sizing: border-box;
  min-height: 100%;
  padding: 4px 0;
  outline: none;
}

.blocked-site-container {
  background-color: #202124;
  border: 1px solid rgb(95, 99, 104);
  color: #e8e8d3;
  height: 300px;
  overflow: hidden;
  resize: vertical;
}

.scroll-container {
  display: flex !important;
  align-items: flex-start !important;
  font-family: monospace;
  line-height: 1.4;
  height: 100%;
  overflow-x: auto;
  position: relative;
  z-index: 0;
}

.line-number-container {
  width: 30px;
  overflow: hidden;
}

.buttons {
  background-color: aqua;
  width: 30px;
  height: 40px;
}

.logo {
  width: 40px;
  height: 40px;
}

svg {
  width: 20px;
  height: 20px;
  fill: rgb(36, 22, 22);
  transition: fill 0.3s ease;
}

.question-text {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/options/options.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,kCAAkC;EAClC,wBAAwB;EACxB,+BAA+B;EAC/B,gCAAgC;EAChC,sBAAsB;EACtB,gDAAgD;EAChD,+BAA+B;EAC/B,iBAAiB;AACnB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,wBAAwB;EACxB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;EACf,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,6CAA6C;EAC7C,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,cAAc;EACd,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kCAAkC;EAClC,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,kCAAkC;EAClC,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,mBAAmB;AACrB","sourcesContent":[":root {\r\n  color-scheme: light;\r\n  --light-main-background: #d1d1cf;\r\n  --light-secondary-background: #fff;\r\n  --light-main-text: black;\r\n  --light-secondary-text: #3a3a35;\r\n  --light-main-background: #d1d1cf;\r\n  --light-hover: #d1d1cf;\r\n  --border: 1px solid var(--light-main-background);\r\n  font-family: \"Lato\", sans-serif;\r\n  user-select: none;\r\n}\r\n\r\nbody {\r\n  background-color: var(--light-main-background);\r\n}\r\n\r\nh2 {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\nh3 {\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  font-style: normal;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 28px !important;\r\n  width: 730px !important;\r\n  overflow-y: auto;\r\n  position: fixed;\r\n  top: 32px;\r\n  bottom: 32px;\r\n  left: calc(50% - 375px);\r\n  background: var(--light-secondary-background);\r\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.24);\r\n  border-radius: 8px;\r\n}\r\n\r\n#options-page-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\nheader {\r\n  padding-bottom: 0.8rem;\r\n  border-bottom: var(--border);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--light-main-text);\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n  line-height: 100%;\r\n}\r\n\r\n.image-offset {\r\n  gap: 0.8rem;\r\n}\r\n\r\n.container img {\r\n  margin-right: auto;\r\n}\r\n\r\n.header-wrapper {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 2rem;\r\n  font-size: 28px;\r\n  font-weight: 600;\r\n}\r\n\r\n.settings-item-container {\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  border-bottom: var(--border);\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n  color: var(--light-secondary-text);\r\n  user-select: text;\r\n}\r\n\r\n.slider {\r\n  margin-left: auto;\r\n}\r\n\r\n.active {\r\n  color: green;\r\n}\r\n\r\n.custom-textarea {\r\n  margin: 0;\r\n  flex-grow: 2;\r\n  flex-shrink: 0;\r\n  display: block;\r\n  white-space: pre;\r\n  word-wrap: normal;\r\n  box-sizing: border-box;\r\n  min-height: 100%;\r\n  padding: 4px 0;\r\n  outline: none;\r\n}\r\n\r\n.blocked-site-container {\r\n  background-color: #202124;\r\n  border: 1px solid rgb(95, 99, 104);\r\n  color: #e8e8d3;\r\n  height: 300px;\r\n  overflow: hidden;\r\n  resize: vertical;\r\n}\r\n\r\n.scroll-container {\r\n  display: flex !important;\r\n  align-items: flex-start !important;\r\n  font-family: monospace;\r\n  line-height: 1.4;\r\n  height: 100%;\r\n  overflow-x: auto;\r\n  position: relative;\r\n  z-index: 0;\r\n}\r\n\r\n.line-number-container {\r\n  width: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n.buttons {\r\n  background-color: aqua;\r\n  width: 30px;\r\n  height: 40px;\r\n}\r\n\r\n.logo {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\nsvg {\r\n  width: 20px;\r\n  height: 20px;\r\n  fill: rgb(36, 22, 22);\r\n  transition: fill 0.3s ease;\r\n}\r\n\r\n.question-text {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.3rem;\r\n  margin-bottom: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/dashboard/optionBlockedCards.css":
/*!*********************************************************!*\
  !*** ./src/components/dashboard/optionBlockedCards.css ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_optionBlockedCards_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./optionBlockedCards.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/dashboard/optionBlockedCards.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_optionBlockedCards_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_optionBlockedCards_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_optionBlockedCards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_optionBlockedCards_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/helpButton/helpButton.css":
/*!**************************************************!*\
  !*** ./src/components/helpButton/helpButton.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_helpButton_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./helpButton.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/helpButton/helpButton.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_helpButton_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_helpButton_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_helpButton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_helpButton_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/onOffSlider.css":
/*!****************************************!*\
  !*** ./src/components/onOffSlider.css ***!
  \****************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_onOffSlider_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./onOffSlider.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/onOffSlider.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_onOffSlider_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_onOffSlider_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_onOffSlider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_onOffSlider_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/options/options.css":
/*!*********************************!*\
  !*** ./src/options/options.css ***!
  \*********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_options_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./options.css */ "./node_modules/css-loader/dist/cjs.js!./src/options/options.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_options_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_options_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_options_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_options_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/components/codeMirrorEditor/codeMirrorEditor.tsx":
/*!**************************************************************!*\
  !*** ./src/components/codeMirrorEditor/codeMirrorEditor.tsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @codemirror/view */ "./node_modules/@codemirror/view/dist/index.js");
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @codemirror/state */ "./node_modules/@codemirror/state/dist/index.js");
/* harmony import */ var _codemirror_lint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codemirror/lint */ "./node_modules/@codemirror/lint/dist/index.js");
/* harmony import */ var _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codemirror/lang-javascript */ "./node_modules/@codemirror/lang-javascript/dist/index.js");
/* harmony import */ var _codemirror_commands__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @codemirror/commands */ "./node_modules/@codemirror/commands/dist/index.js");
/* harmony import */ var _linter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linter */ "./src/components/codeMirrorEditor/linter.ts");








const CodeMirrorEditor = () => {
    const editorViewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [initialDoc, setInitialDoc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [blockedUrlData, setBlockedUrlData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    // Get initial blockedUrls from storage
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        chrome.storage.sync.get(["blockedUrlData"], (result) => {
            if (result.blockedUrlData) {
                setBlockedUrlData(result.blockedUrlData);
                setInitialDoc(Object.keys(result.blockedUrlData).join("\n"));
            }
        });
    }, []);
    // When initialDoc is loaded add values to the editor
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
        if (editorViewRef.current) {
            editorViewRef.current.dispatch({
                changes: {
                    from: 0,
                    to: editorViewRef.current.state.doc.length,
                    insert: initialDoc,
                },
            });
            editorViewRef.current.focus();
        }
    }, [initialDoc]);
    function onSave() {
        if (editorViewRef.current) {
            const docValues = editorViewRef.current.state.doc.toString().split("\n");
            const newBlockedUrlData = {};
            docValues.forEach((url) => {
                var _a, _b, _c;
                url = url.trim();
                if (url) {
                    newBlockedUrlData[url] = {
                        i: ((_a = blockedUrlData[url]) === null || _a === void 0 ? void 0 : _a.i) || 0,
                        s: ((_b = blockedUrlData[url]) === null || _b === void 0 ? void 0 : _b.s) || 0,
                        v: ((_c = blockedUrlData[url]) === null || _c === void 0 ? void 0 : _c.v) || 0,
                    };
                }
            });
            console.log(newBlockedUrlData);
            chrome.storage.sync.set({ blockedUrlData: newBlockedUrlData }, function () {
                console.log("URL data saved");
                setBlockedUrlData(newBlockedUrlData);
            });
        }
    }
    const editor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((parent) => {
        var _a;
        if (parent) {
            editorViewRef.current = new codemirror__WEBPACK_IMPORTED_MODULE_2__.EditorView({
                parent,
                state: _codemirror_state__WEBPACK_IMPORTED_MODULE_3__.EditorState.create({
                    doc: initialDoc,
                    extensions: [
                        _linter__WEBPACK_IMPORTED_MODULE_1__.urlLinter,
                        codemirror__WEBPACK_IMPORTED_MODULE_2__.keymap.of([..._codemirror_commands__WEBPACK_IMPORTED_MODULE_4__.historyKeymap, ..._codemirror_commands__WEBPACK_IMPORTED_MODULE_4__.standardKeymap]),
                        (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_4__.history)(),
                        (0,codemirror__WEBPACK_IMPORTED_MODULE_2__.dropCursor)(),
                        (0,_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_5__.javascript)(),
                        (0,_codemirror_lint__WEBPACK_IMPORTED_MODULE_6__.lintGutter)(),
                        (0,codemirror__WEBPACK_IMPORTED_MODULE_2__.lineNumbers)(),
                        (0,codemirror__WEBPACK_IMPORTED_MODULE_2__.highlightActiveLineGutter)(),
                        codemirror__WEBPACK_IMPORTED_MODULE_2__.EditorView.theme({
                            "&": {
                                height: "300px",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                            },
                            ".cm-scroller": {
                                fontFamily: "monospace",
                                fontSize: "14px",
                            },
                            ".cm-content": {
                                caretColor: "blue",
                            },
                            ".cm-line": {
                                padding: "0 4px",
                            },
                            ".cm-activeLineGutter": {
                                backgroundColor: "#e8f2ff",
                                color: "green",
                            },
                            ".cm-gutters": {
                                backgroundColor: "#f5f5f5",
                                color: "#333",
                                border: "none",
                            },
                        }),
                    ],
                }),
            });
        }
        else {
            (_a = editorViewRef.current) === null || _a === void 0 ? void 0 : _a.destroy();
        }
    }, []);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: editor }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "buttons", onClick: onSave }, "Save")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeMirrorEditor);


/***/ }),

/***/ "./src/components/codeMirrorEditor/linter.ts":
/*!***************************************************!*\
  !*** ./src/components/codeMirrorEditor/linter.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlLinter: () => (/* binding */ urlLinter)
/* harmony export */ });
/* harmony import */ var _codemirror_lint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @codemirror/lint */ "./node_modules/@codemirror/lint/dist/index.js");

const MAX_LINES = 200; // Maximum number of lines allowed
const MAX_CHARS_PER_LINE = 100; // Maximum number of characters allowed per line
const urlLinter = (0,_codemirror_lint__WEBPACK_IMPORTED_MODULE_0__.linter)((view) => {
    let diagnostics = [];
    let doc = view.state.doc;
    // Check if total lines exceed MAX_LINES
    if (doc.lines > MAX_LINES) {
        diagnostics.push({
            from: 0,
            to: doc.length,
            severity: "error",
            message: `Too many lines. Maximum allowed: ${MAX_LINES}`,
        });
    }
    for (let i = 1; i <= doc.lines; i++) {
        let line = doc.line(i);
        let lineText = line.text.trim();
        // Check if line exceeds MAX_CHARS_PER_LINE
        if (lineText.length > MAX_CHARS_PER_LINE) {
            diagnostics.push({
                from: line.from,
                to: line.to,
                severity: "error",
                message: `Line ${i} exceeds maximum length of ${MAX_CHARS_PER_LINE} characters`,
                actions: [
                    {
                        name: "Truncate line",
                        apply(view, from, to) {
                            view.dispatch({
                                changes: {
                                    from,
                                    to,
                                    insert: lineText.slice(0, MAX_CHARS_PER_LINE),
                                },
                            });
                        },
                    },
                ],
            });
        }
        if (lineText) {
            if (!isValidMatchPattern(lineText)) {
                let fixedPattern = attemptToFixMatchPattern(lineText);
                diagnostics.push({
                    from: line.from,
                    to: line.to,
                    severity: "error",
                    message: "Invalid match pattern",
                    actions: [
                        {
                            name: "Fix match pattern",
                            apply(view, from, to) {
                                view.dispatch({
                                    changes: { from, to, insert: fixedPattern },
                                });
                            },
                        },
                        {
                            name: "Remove line",
                            apply(view, from, to) {
                                const lineStart = view.state.doc.lineAt(from).from;
                                const lineEnd = view.state.doc.lineAt(to).to;
                                view.dispatch({ changes: { from: lineStart, to: lineEnd } });
                            },
                        },
                    ],
                });
            }
        }
    }
    return diagnostics;
}, {
    delay: 1000,
});
function isValidMatchPattern(input) {
    const matchPatternRegex = /^(?:(?:\*|https?|ftp):\/\/(?:\*|(?:\*\.)?[^/*]+)(?:\/.*)?|\*:\/\/.*)$/;
    if (!matchPatternRegex.test(input)) {
        return false;
    }
    if (input.includes("://") && !input.startsWith("*://")) {
        const [scheme, rest] = input.split("://");
        if (!["http", "https", "ftp"].includes(scheme)) {
            return false;
        }
    }
    return true;
}
function attemptToFixMatchPattern(input) {
    input = input.trim();
    // If it's a URL, convert it to a match pattern
    if (/^https?:\/\//.test(input)) {
        return input.replace(/^(https?):\/\//, "*://*.");
    }
    // If it doesn't start with a scheme, add *://
    if (!/^(\*|https?|ftp):\/\//.test(input)) {
        input = "*://*." + input;
    }
    // If there's no path, add /*
    if (!/\//.test(input)) {
        input += "/*";
    }
    else if (!input.endsWith("*")) {
        input += "*";
    }
    // Replace multiple consecutive * with a single *
    input = input.replace(/\*+/g, "*");
    return input;
}


/***/ }),

/***/ "./src/components/dashboard/optionBlockedCards.tsx":
/*!*********************************************************!*\
  !*** ./src/components/dashboard/optionBlockedCards.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _optionBlockedCards_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionBlockedCards.css */ "./src/components/dashboard/optionBlockedCards.css");


function OptionBlockedCards() {
    const [blockedUrls, setBlockedUrls] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        chrome.storage.sync.get(["blockedUrlData"], (result) => {
            console.log("Retrieved from storage:", result.blockedUrlData);
            if (result.blockedUrlData) {
                setBlockedUrls(result.blockedUrlData);
            }
        });
    }, []);
    const formatCount = (count) => {
        if (count >= 1000000) {
            return (count / 1000000).toFixed(1) + "M";
        }
        else if (count >= 1000) {
            return (count / 1000).toFixed(1) + "K";
        }
        return count.toString();
    };
    function onClickDeleteButton(urlToDelete) {
        chrome.storage.sync.get(["blockedUrlData"], (result) => {
            if (result.blockedUrlData) {
                const updatedBlockedUrls = Object.assign({}, result.blockedUrlData);
                delete updatedBlockedUrls[urlToDelete];
                chrome.storage.sync.set({ blockedUrlData: updatedBlockedUrls }, () => {
                    setBlockedUrls(updatedBlockedUrls);
                });
            }
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cards-container" }, Object.entries(blockedUrls).map(([blockedUrl, count], index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, className: "card-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "delete-button", onClick: () => onClickDeleteButton(blockedUrl) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 -960 960 960" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M256-192.35 192.35-256l224-224-224-224L256-767.65l224 224 224-224L767.65-704l-224 224 224 224L704-192.35l-224-224-224 224Z" }))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-top" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { title: blockedUrl },
                    " ",
                    blockedUrl)),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-bottom" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "blocked-results", title: "Blocked regular search results" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 -960 960 960" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M273.31-65.16q-83.35 0-142.86-59.53-59.51-59.53-59.51-142.88 0-83.36 59.53-142.86 59.53-59.51 142.89-59.51 83.35 0 142.86 59.53 59.5 59.53 59.5 142.88 0 83.36-59.53 142.86-59.52 59.51-142.88 59.51ZM839.06-94 576.71-355.78q-10.42 9.27-24.48 17.41t-26.94 13.14q-3.91-28.83-12.55-53.07-8.64-24.24-20.15-43.7 44.89-20.68 74.39-62.26 29.51-41.58 29.51-99.17 0-74.95-51.77-127.06-51.77-52.1-126.72-52.1-75.24 0-127.53 52.1-52.3 52.11-52.3 127.06 0 12.89 2 26.21t6.15 22.05q-21.96 2.34-48.03 9.78-26.06 7.45-45.46 18.81-5.9-16.85-8.5-37.59-2.59-20.75-2.59-39.26 0-114.78 80.77-195.19 80.78-80.41 195.6-80.41 114.17 0 194.49 80.74 80.33 80.74 80.33 194.86 0 44.32-13.27 85.58t-36.72 71.17l264.97 263.83L839.06-94ZM202.9-160.93l70.1-69.91 68.87 69.25 36.32-36.42-68.77-67.54 71.2-71.77-36.19-36.75-69.81 70.1-71.05-70.67-35.76 36.32 70.15 69.77-71.11 70.54 36.05 37.08Z" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                        " ",
                        formatCount(count.s))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "blocked-results", title: "Blocked image search results" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 -960 960 960" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M856.2-226.93 226.93-856.2h540.75q36.42 0 62.47 26.05 26.05 26.05 26.05 62.47v540.75ZM811.32-35.84l-68.33-68.33H192.32q-36.42 0-62.28-25.87-25.87-25.86-25.87-62.28v-550.67l-67.66-67.66 52.42-52.42L863.74-88.26l-52.42 52.42ZM229.23-272.35H575.9l-88.75-88.56-39.82 50.46-99.53-121.46-118.57 159.56Z" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "count-text" },
                        " ",
                        formatCount(count.i))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "blocked-results", title: "Blocked video search results" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 -960 960 960" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M835.33-28 696.67-166h-542q-27 0-46.84-19.83Q88-205.67 88-232.67V-722q0-27 19.83-46.83 19.84-19.84 46.84-19.84h14.66l15.34 15.34v94.66l-150-150L82-876 882.67-75.33 835.33-28Zm31.34-156-144-144v-309.33L565.33-512.67v-126H412L253.33-797.33h565.34q27 0 46.83 19.83t19.83 46.83v498q0 16.34-4.83 28.67-4.83 12.33-13.83 20ZM251.33-326h286l-286-286v286Z" })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                        " ",
                        formatCount(count.v))))))))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OptionBlockedCards);


/***/ }),

/***/ "./src/components/helpButton/helpButton.tsx":
/*!**************************************************!*\
  !*** ./src/components/helpButton/helpButton.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HelpButton)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpButton.css */ "./src/components/helpButton/helpButton.css");


function HelpButton({ helpElement }) {
    const [isHelpVisible, setIsHelpVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const helpDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        isHelpVisible ? helpDialog.current.show() : helpDialog.current.close();
    }, [isHelpVisible]);
    function handleKeyDown(event) {
        if (event.key === "Escape") {
            setIsHelpVisible(false);
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "helpbutton-container", onMouseEnter: () => setIsHelpVisible(true), onMouseLeave: () => setIsHelpVisible(false) },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { onKeyDown: handleKeyDown, className: "info-button", viewBox: "0 -960 960 960" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M479-247q19.74 0 33.37-13.63Q526-274.26 526-294q0-19.74-13.63-33.37Q498.74-341 479-341q-19.74 0-33.37 13.63Q432-313.74 432-294q0 19.74 13.63 33.37Q459.26-247 479-247Zm-35-149h70q0-31.5 7.75-50T563-497q26-25 40-48.25T617-600q0-54.55-39.25-83.78Q538.5-713 484.17-713q-55.29 0-89.73 28.75Q360-655.5 346-615l63.21 24q4.79-18 22.04-38 17.26-20 52.75-20 32 0 48 17.5t16 38.5q0 20-11.75 37T507-524q-42.5 37.5-52.75 57.75T444-396Zm36 306q-80.91 0-152.07-30.76-71.15-30.77-123.79-83.5Q151.5-257 120.75-328.09 90-399.17 90-480q0-80.91 30.76-152.07 30.77-71.15 83.5-123.79Q257-808.5 328.09-839.25 399.17-870 480-870q80.91 0 152.07 30.76 71.15 30.77 123.79 83.5Q808.5-703 839.25-631.91 870-560.83 870-480q0 80.91-30.76 152.07-30.77 71.15-83.5 123.79Q703-151.5 631.91-120.75 560.83-90 480-90Zm0-75q131.5 0 223.25-91.75T795-480q0-131.5-91.75-223.25T480-795q-131.5 0-223.25 91.75T165-480q0 131.5 91.75 223.25T480-165Zm0-315Z" })),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dialog", { className: "help-dialog", ref: helpDialog }, helpElement))));
}


/***/ }),

/***/ "./src/components/onOffSlider.tsx":
/*!****************************************!*\
  !*** ./src/components/onOffSlider.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _onOffSlider_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onOffSlider.css */ "./src/components/onOffSlider.css");


function OnOffSlider({ id, googleStorageKey }) {
    const [isChecked, setIsChecked] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [isLoaded, setIsLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // get the inital state of the slider
        chrome.storage.sync.get([googleStorageKey], (result) => {
            setIsChecked(result[googleStorageKey] || false);
            setIsLoaded(true);
        });
        // Listen for changes from other contexts
        const listener = (changes) => {
            if (changes[googleStorageKey]) {
                setIsChecked(changes[googleStorageKey].newValue);
            }
        };
        chrome.storage.onChanged.addListener(listener);
        return () => {
            chrome.storage.onChanged.removeListener(listener);
        };
    }, [googleStorageKey]);
    const handleChange = () => {
        const newValue = !isChecked;
        chrome.storage.sync.set({ [googleStorageKey]: newValue });
        setIsChecked(newValue);
        // Notify other contexts about the change (for if 2 sliders are open in different contexts (e.g on/off slider in both options and popup))
        chrome.runtime.sendMessage({
            type: "SLIDER_CHANGED",
            key: googleStorageKey,
            value: newValue,
        });
    };
    if (!isLoaded) {
        return null;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "slider-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { type: "checkbox", id: id, className: "slider-checkbox", checked: isChecked, onChange: handleChange }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("label", { className: "slider-switch", htmlFor: id },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "slider-slider" }))));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OnOffSlider);


/***/ }),

/***/ "./src/options/options.tsx":
/*!*********************************!*\
  !*** ./src/options/options.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _options_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options.css */ "./src/options/options.css");
/* harmony import */ var _components_onOffSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/onOffSlider */ "./src/components/onOffSlider.tsx");
/* harmony import */ var _components_codeMirrorEditor_codeMirrorEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/codeMirrorEditor/codeMirrorEditor */ "./src/components/codeMirrorEditor/codeMirrorEditor.tsx");
/* harmony import */ var _components_dashboard_optionBlockedCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard/optionBlockedCards */ "./src/components/dashboard/optionBlockedCards.tsx");
/* harmony import */ var _components_helpButton_helpButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/helpButton/helpButton */ "./src/components/helpButton/helpButton.tsx");







const App = () => {
    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("blockedSites");
    const allSettings = {
        settings: [
            {
                settingName: "Extension on",
                googleStorageKey: "ExtensionOnOff",
            },
            {
                settingName: "Show a clean block page instead of funny images",
                googleStorageKey: "testKey2",
            },
        ],
    };
    // UseEffect to subscribe to slider being changed in different part of our app.
    // Aka. if the slider changes in the popup-page while the option page is open also change the slider on the option page
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const messageListener = (message) => {
            if (message.type === "SLIDER_CHANGED") {
                chrome.storage.sync.get([message.key], (result) => {
                    console.log(`Slider ${message.key} changed to ${result[message.key]}`);
                });
            }
        };
        chrome.runtime.onMessage.addListener(messageListener);
        return () => {
            chrome.runtime.onMessage.removeListener(messageListener);
        };
    }, []);
    const renderMiddleSection = () => {
        switch (activeSection) {
            case "settings":
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "top-h2" }, "General Settings"),
                    allSettings.settings.map((setting, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, className: "settings-item-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, setting.settingName),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "slider" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_onOffSlider__WEBPACK_IMPORTED_MODULE_3__["default"], { id: index.toString(), googleStorageKey: setting.googleStorageKey })))))));
            case "blockedSites":
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Blocked Sites"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "question-text" },
                        "Sites can be blocked via URL or by Match Pattern",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helpButton_helpButton__WEBPACK_IMPORTED_MODULE_6__["default"], { helpElement: helpMatchedPattern() })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_dashboard_optionBlockedCards__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Block in bulk"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_codeMirrorEditor_codeMirrorEditor__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "logo", src: "logoApp.png", alt: "logo" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "header-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `container image-offset button ${activeSection === "settings" ? "active" : ""}`, onClick: () => setActiveSection("settings") },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Settings")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `container image-offset button ${activeSection === "blockedSites" ? "active" : ""}`, onClick: () => setActiveSection("blockedSites") },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Blocked Sites"))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "middle" }, renderMiddleSection())));
};
const helpMatchedPattern = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
            "A match pattern is used to specify a group of URLs.",
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("br", null),
            "Here are some examples and their effects:"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("table", { style: { borderCollapse: "collapse", width: "100%" } },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("thead", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { style: { border: "1px solid black", padding: "8px" } }, "Match Pattern"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { style: { border: "1px solid black", padding: "8px" } }, "URLs Matched"))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tbody", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { style: { border: "1px solid black", padding: "8px" } }, "*://*.temu.com/*"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { style: { border: "1px solid black", padding: "8px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "https://www.temu.com/"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "http://shop.temu.com/products"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "https://us.temu.com/category/home")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { style: { border: "1px solid black", padding: "8px" } }, "https://google.*"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { style: { border: "1px solid black", padding: "8px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "https://google.com/"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "https://google.nl/")))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("tr", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { style: { border: "1px solid black", padding: "8px" } }, "https://*.quora.com/*"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("td", { style: { border: "1px solid black", padding: "8px" } },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("ul", null,
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "https://quora.com/"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "https://es.quora.com/"),
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("li", null, "https://de.quora.com/topic/Science"))))))));
};
const container = document.createElement("div");
document.body.appendChild(container);
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));


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
/******/ 			"options": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","vendors-node_modules_codemirror_commands_dist_index_js-node_modules_codemirror_lang-javascrip-e9cd47"], () => (__webpack_require__("./src/options/options.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=options.js.map