/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
}

body {
  background-color: var(--light-main-background);
}

.card {
  display: flex;
  flex-direction: column;
  padding: 32px !important;
  width: 550px !important;
  overflow-y: auto;
  position: fixed;
  top: 32px;
  bottom: 32px;
  left: calc(50% - 240px);
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

h2 {
  font-size: 24px;
  font-weight: 500;
  font-style: normal;
}

.settings-item-container {
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: var(--border);
}

p {
  font-size: 15px;
  color: var(--light-secondary-text);
}

.slider {
  margin-left: auto;
}

.active {
  color: green;
}
`, "",{"version":3,"sources":["webpack://./src/options/options.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,kCAAkC;EAClC,wBAAwB;EACxB,+BAA+B;EAC/B,gCAAgC;EAChC,sBAAsB;EACtB,gDAAgD;EAChD,+BAA+B;AACjC;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,wBAAwB;EACxB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;EACf,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,6CAA6C;EAC7C,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;EACf,kCAAkC;AACpC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd","sourcesContent":[":root {\r\n  color-scheme: light;\r\n  --light-main-background: #d1d1cf;\r\n  --light-secondary-background: #fff;\r\n  --light-main-text: black;\r\n  --light-secondary-text: #3a3a35;\r\n  --light-main-background: #d1d1cf;\r\n  --light-hover: #d1d1cf;\r\n  --border: 1px solid var(--light-main-background);\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background-color: var(--light-main-background);\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 32px !important;\r\n  width: 550px !important;\r\n  overflow-y: auto;\r\n  position: fixed;\r\n  top: 32px;\r\n  bottom: 32px;\r\n  left: calc(50% - 240px);\r\n  background: var(--light-secondary-background);\r\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.24);\r\n  border-radius: 8px;\r\n}\r\n\r\n#options-page-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\nheader {\r\n  padding-bottom: 0.8rem;\r\n  border-bottom: var(--border);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--light-main-text);\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n  line-height: 100%;\r\n}\r\n\r\n.image-offset {\r\n  gap: 0.8rem;\r\n}\r\n\r\n.container img {\r\n  margin-right: auto;\r\n}\r\n\r\n.header-wrapper {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 2rem;\r\n  font-size: 28px;\r\n  font-weight: 600;\r\n}\r\n\r\nh2 {\r\n  font-size: 24px;\r\n  font-weight: 500;\r\n  font-style: normal;\r\n}\r\n\r\n.settings-item-container {\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  border-bottom: var(--border);\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n  color: var(--light-secondary-text);\r\n}\r\n\r\n.slider {\r\n  margin-left: auto;\r\n}\r\n\r\n.active {\r\n  color: green;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
        chrome.storage.sync.get([googleStorageKey], (result) => {
            setIsChecked(result[googleStorageKey] || false);
            setIsLoaded(true);
        });
    }, [googleStorageKey]);
    const handleChange = () => {
        const newValue = !isChecked;
        chrome.storage.sync.set({ [googleStorageKey]: newValue });
        setIsChecked(newValue);
    };
    if (!isLoaded) {
        return null; // or a loading indicator
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
/* harmony import */ var _optionsHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./optionsHelper */ "./src/options/optionsHelper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const App = () => {
    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("settings");
    const allSettings = {
        settings: [
            {
                settingName: "Extension on",
                googleStorageKey: "ExtensionOnOFf",
            },
            {
                settingName: "Show a clean block page instead of funny images",
                googleStorageKey: "testKey2",
            },
        ],
    };
    function getValue(googleStorageKey) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(googleStorageKey);
            const boolOption = yield (0,_optionsHelper__WEBPACK_IMPORTED_MODULE_4__.getStorageItem)(googleStorageKey);
            console.log(boolOption);
        });
    }
    const renderMiddleSection = () => {
        switch (activeSection) {
            case "settings":
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "General Settings"),
                    allSettings.settings.map((setting, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, className: "settings-item-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, setting.settingName),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "slider" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_onOffSlider__WEBPACK_IMPORTED_MODULE_3__["default"], { id: index.toString(), googleStorageKey: setting.googleStorageKey })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: () => getValue("ExtensionOnOFf") }))))));
            case "blockedSites":
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Blocked Sites")));
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card" },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null,
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "broom.png", alt: "logo" }),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "header-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `container image-offset ${activeSection === "settings" ? "active" : ""}`, onClick: () => setActiveSection("settings") },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Settings")),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `container image-offset ${activeSection === "blockedSites" ? "active" : ""}`, onClick: () => setActiveSection("blockedSites") },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Blocked Sites"))))),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "middle" }, renderMiddleSection())));
};
const container = document.createElement("div");
document.body.appendChild(container);
const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(App, null));


/***/ }),

/***/ "./src/options/optionsHelper.ts":
/*!**************************************!*\
  !*** ./src/options/optionsHelper.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   allSettings: () => (/* binding */ allSettings),
/* harmony export */   getEntireSyncStorage: () => (/* binding */ getEntireSyncStorage),
/* harmony export */   getStorageItem: () => (/* binding */ getStorageItem),
/* harmony export */   initializeOptionsState: () => (/* binding */ initializeOptionsState),
/* harmony export */   updateOption: () => (/* binding */ updateOption)
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
// Define our settings
const allSettings = [
    {
        settingName: "Extension on",
        googleStorageKey: "ExtensionOnOff",
    },
    {
        settingName: "Show a clean block page instead of funny images",
        googleStorageKey: "testKey2",
    },
];
function updateOption(googleStorageKey, newValue) {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.set({ [googleStorageKey]: newValue }, () => {
            if (chrome.runtime.lastError) {
                console.error(`Error setting ${googleStorageKey}:`, chrome.runtime.lastError);
                reject(chrome.runtime.lastError);
            }
            else {
                resolve();
            }
        });
    });
}
function getStorageItem(key) {
    return new Promise((resolve) => {
        chrome.storage.sync.get([key], (result) => {
            console.log(`Value for ${key}:`, result[key]);
            resolve(result[key]);
        });
    });
}
function initializeOptionsState() {
    return __awaiter(this, void 0, void 0, function* () {
        const state = {};
        for (const setting of allSettings) {
            const value = yield getStorageItem(setting.googleStorageKey);
            state[setting.googleStorageKey] = value !== null && value !== void 0 ? value : false;
        }
        console.log("Initialized options state:", state);
        return state;
    });
}
function getEntireSyncStorage() {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(null, (items) => {
            if (chrome.runtime.lastError) {
                console.error("Error fetching sync storage:", chrome.runtime.lastError);
                reject(chrome.runtime.lastError);
            }
            else {
                console.log("Entire sync storage:", items);
                resolve(items);
            }
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e"], () => (__webpack_require__("./src/options/options.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=options.js.map