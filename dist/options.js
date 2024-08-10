/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/codeMirror/codeMirrorEditor.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/codeMirror/codeMirrorEditor.css ***!
  \**********************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.bottom-button-container {
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;

  .button {
    font-weight: 500;
    font-size: larger;
    position: relative;
    padding: 8px 25px;
    border-radius: 8px;
    border: 1px solid #ccccca;
    color: #1d1c1c;
    cursor: pointer;
    background-color: #fff;
    transition: all 0.2s ease;
  }

  .button:hover {
    background-color: #ccccca;
  }

  .button:before,
  .button:after {
    position: absolute;
    content: "";
    width: 150%;
    left: 50%;
    height: 100%;
    transform: translateX(-50%);
    z-index: -1000;
    background-repeat: no-repeat;
  }

  .button:hover:before {
    top: -70%;
    background-image: radial-gradient(circle, #a7e48f 20%, transparent 20%),
      radial-gradient(circle, transparent 20%, #a7e48f 20%, transparent 30%),
      radial-gradient(circle, #a7e48f 20%, transparent 20%),
      radial-gradient(circle, #a7e48f 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #a7e48f 15%, transparent 20%),
      radial-gradient(circle, #a7e48f 20%, transparent 20%),
      radial-gradient(circle, #a7e48f 20%, transparent 20%),
      radial-gradient(circle, #a7e48f 20%, transparent 20%),
      radial-gradient(circle, #a7e48f 20%, transparent 20%);
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;
    background-position: 50% 120%;
    animation: greentopBubbles 0.6s ease;
  }

  .button:hover::after {
    bottom: -70%;
    background-image: radial-gradient(circle, #a7e48f 20%, transparent 20%),
      radial-gradient(circle, #a7e48f 20%, transparent 20%),
      radial-gradient(circle, transparent 10%, #a7e48f 15%, transparent 20%),
      radial-gradient(circle, #a7e48f 20%, transparent 20%),
      radial-gradient(circle, #a7e48f 20%, transparent 20%),
      radial-gradient(circle, #a7e48f 20%, transparent 20%),
      radial-gradient(circle, #a7e48f 20%, transparent 20%);
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;
    background-position: 50% 0%;
    animation: greenbottomBubbles 0.6s ease;
  }
}

.text-button-wrapper {
  display: flex;
  align-items: center;
}

.unsaved-changes-text {
  font-size: 16px;
  font-weight: 400;
  padding-right: 20px;
  text-align: center;
  font-style: italic;
  padding-bottom: 5px;
  color: #7b2c45;
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%,
      70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%,
      90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%,
      90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/codeMirror/codeMirrorEditor.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,yBAAyB;EACzB,eAAe;;EAEf;IACE,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;;IAEE,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,SAAS;IACT,YAAY;IACZ,2BAA2B;IAC3B,cAAc;IACd,4BAA4B;EAC9B;;EAEA;IACE,SAAS;IACT;;;;;;;;2DAQuD;IACvD,gGAAgG;IAChG,6BAA6B;IAC7B,oCAAoC;EACtC;;EAEA;IACE,YAAY;IACZ;;;;;;2DAMuD;IACvD,8EAA8E;IAC9E,2BAA2B;IAC3B,uCAAuC;EACzC;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE;IACE;aACS;EACX;;EAEA;IACE;aACS;EACX;;EAEA;IACE;aACS;IACT,yDAAyD;EAC3D;AACF;;AAEA;EACE;IACE,sFAAsF;EACxF;;EAEA;IACE,kFAAkF;EACpF;;EAEA;IACE,mFAAmF;IACnF,yDAAyD;EAC3D;AACF","sourcesContent":[".bottom-button-container {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-top: 8px;\r\n\r\n  .button {\r\n    font-weight: 500;\r\n    font-size: larger;\r\n    position: relative;\r\n    padding: 8px 25px;\r\n    border-radius: 8px;\r\n    border: 1px solid #ccccca;\r\n    color: #1d1c1c;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    transition: all 0.2s ease;\r\n  }\r\n\r\n  .button:hover {\r\n    background-color: #ccccca;\r\n  }\r\n\r\n  .button:before,\r\n  .button:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 150%;\r\n    left: 50%;\r\n    height: 100%;\r\n    transform: translateX(-50%);\r\n    z-index: -1000;\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  .button:hover:before {\r\n    top: -70%;\r\n    background-image: radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, transparent 20%, #a7e48f 20%, transparent 30%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, transparent 10%, #a7e48f 15%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%);\r\n    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%, 15% 15%, 10% 10%, 18% 18%;\r\n    background-position: 50% 120%;\r\n    animation: greentopBubbles 0.6s ease;\r\n  }\r\n\r\n  .button:hover::after {\r\n    bottom: -70%;\r\n    background-image: radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, transparent 10%, #a7e48f 15%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%);\r\n    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%, 18% 18%;\r\n    background-position: 50% 0%;\r\n    animation: greenbottomBubbles 0.6s ease;\r\n  }\r\n}\r\n\r\n.text-button-wrapper {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.unsaved-changes-text {\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  padding-right: 20px;\r\n  text-align: center;\r\n  font-style: italic;\r\n  padding-bottom: 5px;\r\n  color: #7b2c45;\r\n}\r\n\r\n@keyframes greentopBubbles {\r\n  0% {\r\n    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%, 40% 90%, 55% 90%,\r\n      70% 90%;\r\n  }\r\n\r\n  50% {\r\n    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%, 50% 50%, 65% 20%,\r\n      90% 30%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%, 50% 40%, 65% 10%,\r\n      90% 20%;\r\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\r\n  }\r\n}\r\n\r\n@keyframes greenbottomBubbles {\r\n  0% {\r\n    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%, 70% -10%, 70% 0%;\r\n  }\r\n\r\n  50% {\r\n    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%, 105% 0%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%, 110% 10%;\r\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cards-container {
  gap: 12px;
  display: flex;
  flex-wrap: wrap;
}

.card-container {
  background: var(--green-card-linear);
  position: relative;
  height: 100px;
  width: 210px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  font-family: "Roboto";
  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.2), 0px 5px 7px 1px rgba(0, 0, 0, 0.14),
    0px 2px 9px 3px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
}

.card-container > .add-card-container {
  display: flex;
  justify-content: center;
}

.add-card-container {
  cursor: pointer;
}

.card-container > .card-top {
  background: var(--green-card-linear);
  height: 55%;
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
  fill: rgb(36, 22, 22);
  transition: fill 0.3s ease;
}

.delete-button:hover svg {
  fill: #ff4444;
}

.secondary {
  background: var(--blue-card-linear);
}

#card-top-lifetime {
  background: var(--blue-card-linear);
}
`, "",{"version":3,"sources":["webpack://./src/components/dashboard/optionBlockedCards.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,+BAA+B;EAC/B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,qBAAqB;EACrB;uCACqC;EACrC,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,oCAAoC;EACpC,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB;IACE,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;EACpB;AACF;;AAEA;EACE,2BAA2B;;EAE3B;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,UAAU;EACV,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;AACrC","sourcesContent":[".cards-container {\r\n  gap: 12px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.card-container {\r\n  background: var(--green-card-linear);\r\n  position: relative;\r\n  height: 100px;\r\n  width: 210px;\r\n  transition: transform 0.3s ease;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  font-family: \"Roboto\";\r\n  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.2), 0px 5px 7px 1px rgba(0, 0, 0, 0.14),\r\n    0px 2px 9px 3px rgba(0, 0, 0, 0.12);\r\n  border-radius: 8px;\r\n}\r\n\r\n.card-container > .add-card-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.add-card-container {\r\n  cursor: pointer;\r\n}\r\n\r\n.card-container > .card-top {\r\n  background: var(--green-card-linear);\r\n  height: 55%;\r\n  padding-left: 3px;\r\n  padding-right: 3px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  p {\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    text-overflow: ellipsis;\r\n    overflow-x: hidden;\r\n  }\r\n}\r\n\r\n.card-container:hover {\r\n  transform: translateY(-5px);\r\n\r\n  .delete-button {\r\n    opacity: 0.9;\r\n  }\r\n  .card-bottom svg {\r\n    fill: black;\r\n  }\r\n}\r\n\r\n.delete-button {\r\n  opacity: 0.3;\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  transition: opacity 0.3s ease;\r\n}\r\n\r\n.delete-button svg {\r\n  fill: rgb(36, 22, 22);\r\n  transition: fill 0.3s ease;\r\n}\r\n\r\n.delete-button:hover svg {\r\n  fill: #ff4444;\r\n}\r\n\r\n.secondary {\r\n  background: var(--blue-card-linear);\r\n}\r\n\r\n#card-top-lifetime {\r\n  background: var(--blue-card-linear);\r\n}\r\n"],"sourceRoot":""}]);
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
  background-color: var(--dialog-background-color);
  user-select: text;
  transform: translateY(-2px);
  z-index: 100;
  p {
    font-size: 14px;
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/helpButton/helpButton.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ;IACE,eAAe;IACf,eAAe;EACjB;AACF;;AAEA;EACE,gDAAgD;EAChD,iBAAiB;EACjB,2BAA2B;EAC3B,YAAY;EACZ;IACE,eAAe;EACjB;AACF","sourcesContent":[".helpbutton-container {\r\n  width: 20px;\r\n  height: 20px;\r\n  svg {\r\n    fill: \"#e8eaed\";\r\n    transition: 0.3;\r\n  }\r\n}\r\n\r\n.help-dialog {\r\n  background-color: var(--dialog-background-color);\r\n  user-select: text;\r\n  transform: translateY(-2px);\r\n  z-index: 100;\r\n  p {\r\n    font-size: 14px;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/modals/modalAddUrl.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/modals/modalAddUrl.css ***!
  \*************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.dialog-container {
  width: 300px;
  border: 1px solid #ccccca;
  border-radius: 8px;
  z-index: 1000;
  background: #fffaf2;
  animation: dialogAnimation 0.2s ease-out forwards;
  padding: 15px;

  h1 {
    font-size: 18px;
    margin-bottom: 15px;
  }
}

.dialog-container::backdrop {
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  animation: fadeIn 0.2s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes dialogAnimation {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/modals/modalAddUrl.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,iDAAiD;EACjD,aAAa;;EAEb;IACE,eAAe;IACf,mBAAmB;EACrB;AACF;;AAEA;EACE,8BAA8B;EAC9B,0BAA0B;EAC1B,wCAAwC;AAC1C;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;IACV,qBAAqB;EACvB;EACA;IACE,UAAU;IACV,mBAAmB;EACrB;AACF","sourcesContent":[".dialog-container {\r\n  width: 300px;\r\n  border: 1px solid #ccccca;\r\n  border-radius: 8px;\r\n  z-index: 1000;\r\n  background: #fffaf2;\r\n  animation: dialogAnimation 0.2s ease-out forwards;\r\n  padding: 15px;\r\n\r\n  h1 {\r\n    font-size: 18px;\r\n    margin-bottom: 15px;\r\n  }\r\n}\r\n\r\n.dialog-container::backdrop {\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  animation: fadeIn 0.2s ease-out forwards;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes dialogAnimation {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale(0.9);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  /* Light mode colors */
  --main-background-color: #fff;
  --secondary-background-color: #d1d1cf;
  --text-color: #333333;
  --secondary-text-color: #333333;
  --card-background: #f0f0f0;
  --button-background: #e0e0e0;
  --button-text: #000000;
  --border-color: #cccccc;
  --active-button-color: green;
  font-family: "Lato", sans-serif;
  user-select: none;
  color: var(--text-color);
  --dialog-background-color: #fff;
  --blue-card-linear: linear-gradient(rgb(168 222 240), rgb(212 234 247));
  --green-card-linear: linear-gradient(rgb(234, 240, 168), rgb(244, 247, 212));
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
  --button-background: #3a3a3a;
  --button-text: #ffffff;
  --border-color: #444444;
  --active-button-color: #fff;
  --dialog-background-color: #d0d0d0;
  --blue-card-linear: linear-gradient(rgb(113 166 184), rgb(134 157 170));
  --green-card-linear: linear-gradient(rgb(198 204 128), rgb(193 195 166));
  color: var(--text-color);
}

body {
  background-color: var(--secondary-background-color);
  margin: 0;
  padding: 0;
}

h2 {
  margin-top: 14px;
  margin-bottom: 8px;
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
  width: 790px !important;
  height: calc(100vh - 64px);
  position: relative;
  margin: 32px auto;
  background: var(--main-background-color);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.24);
  border-radius: 8px;
  overflow: hidden;
}

#options-page-container {
  display: flex;
  align-items: center;
  flex-direction: column;
}

header {
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: var(--main-background-color);
  padding: 28px 28px 0.8rem;
  border-bottom: var(--border);
}

.container {
  display: flex;
  align-items: center;
  color: var(--secondary-text-color);
  font-weight: 400;
  font-size: 22px;
  line-height: 100%;
  gap: 20px;
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

#middle {
  flex: 1;
  overflow-y: auto;
  padding: 28px;
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
  color: var(--secondary-text-color);
  user-select: text;
}

.slider {
  margin-left: auto;
}

.active {
  color: var(--active-button-color);
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

.question-text {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 10px;
}

.discord-button {
  cursor: pointer;
  font-weight: 600;
}

.discord-button svg {
  margin-right: 4px;
}
`, "",{"version":3,"sources":["webpack://./src/options/options.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,6BAA6B;EAC7B,qCAAqC;EACrC,qBAAqB;EACrB,+BAA+B;EAC/B,0BAA0B;EAC1B,4BAA4B;EAC5B,sBAAsB;EACtB,uBAAuB;EACvB,4BAA4B;EAC5B,+BAA+B;EAC/B,iBAAiB;EACjB,wBAAwB;EACxB,+BAA+B;EAC/B,uEAAuE;EACvE,4EAA4E;EAC5E,2BAA2B;EAC3B,+BAA+B;AACjC;;AAIA,qBAAqB;AACrB;EACE,gCAAgC;EAChC,qCAAqC;EACrC,qBAAqB;EACrB,+BAA+B;EAC/B,0BAA0B;EAC1B,4BAA4B;EAC5B,sBAAsB;EACtB,uBAAuB;EACvB,2BAA2B;EAC3B,kCAAkC;EAClC,uEAAuE;EACvE,wEAAwE;EACxE,wBAAwB;AAC1B;;AAEA;EACE,mDAAmD;EACnD,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,0BAA0B;EAC1B,kBAAkB;EAClB,iBAAiB;EACjB,wCAAwC;EACxC,2CAA2C;EAC3C,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,MAAM;EACN,aAAa;EACb,8CAA8C;EAC9C,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kCAAkC;EAClC,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,SAAS;AACX;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,OAAO;EACP,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,cAAc;EACd,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kCAAkC;EAClC,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,kCAAkC;EAClC,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[":root {\r\n  /* Light mode colors */\r\n  --main-background-color: #fff;\r\n  --secondary-background-color: #d1d1cf;\r\n  --text-color: #333333;\r\n  --secondary-text-color: #333333;\r\n  --card-background: #f0f0f0;\r\n  --button-background: #e0e0e0;\r\n  --button-text: #000000;\r\n  --border-color: #cccccc;\r\n  --active-button-color: green;\r\n  font-family: \"Lato\", sans-serif;\r\n  user-select: none;\r\n  color: var(--text-color);\r\n  --dialog-background-color: #fff;\r\n  --blue-card-linear: linear-gradient(rgb(168 222 240), rgb(212 234 247));\r\n  --green-card-linear: linear-gradient(rgb(234, 240, 168), rgb(244, 247, 212));\r\n  --border: 1px solid #acacaa;\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\r\n\r\n/* Dark mode colors */\r\n[data-theme=\"dark\"] {\r\n  --main-background-color: #696969;\r\n  --secondary-background-color: #424242;\r\n  --text-color: #000000;\r\n  --secondary-text-color: #000000;\r\n  --card-background: #2c2c2c;\r\n  --button-background: #3a3a3a;\r\n  --button-text: #ffffff;\r\n  --border-color: #444444;\r\n  --active-button-color: #fff;\r\n  --dialog-background-color: #d0d0d0;\r\n  --blue-card-linear: linear-gradient(rgb(113 166 184), rgb(134 157 170));\r\n  --green-card-linear: linear-gradient(rgb(198 204 128), rgb(193 195 166));\r\n  color: var(--text-color);\r\n}\r\n\r\nbody {\r\n  background-color: var(--secondary-background-color);\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh2 {\r\n  margin-top: 14px;\r\n  margin-bottom: 8px;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\nh3 {\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  font-style: normal;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 790px !important;\r\n  height: calc(100vh - 64px);\r\n  position: relative;\r\n  margin: 32px auto;\r\n  background: var(--main-background-color);\r\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.24);\r\n  border-radius: 8px;\r\n  overflow: hidden;\r\n}\r\n\r\n#options-page-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\nheader {\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 1000;\r\n  background-color: var(--main-background-color);\r\n  padding: 28px 28px 0.8rem;\r\n  border-bottom: var(--border);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--secondary-text-color);\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n  line-height: 100%;\r\n  gap: 20px;\r\n}\r\n\r\n.image-offset {\r\n  gap: 0.8rem;\r\n}\r\n\r\n.container img {\r\n  margin-right: auto;\r\n}\r\n\r\n.header-wrapper {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 2rem;\r\n  font-size: 28px;\r\n  font-weight: 600;\r\n}\r\n\r\n#middle {\r\n  flex: 1;\r\n  overflow-y: auto;\r\n  padding: 28px;\r\n}\r\n\r\n.settings-item-container {\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  border-bottom: var(--border);\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n  color: var(--secondary-text-color);\r\n  user-select: text;\r\n}\r\n\r\n.slider {\r\n  margin-left: auto;\r\n}\r\n\r\n.active {\r\n  color: var(--active-button-color);\r\n}\r\n\r\n.custom-textarea {\r\n  margin: 0;\r\n  flex-grow: 2;\r\n  flex-shrink: 0;\r\n  display: block;\r\n  white-space: pre;\r\n  word-wrap: normal;\r\n  box-sizing: border-box;\r\n  min-height: 100%;\r\n  padding: 4px 0;\r\n  outline: none;\r\n}\r\n\r\n.blocked-site-container {\r\n  background-color: #202124;\r\n  border: 1px solid rgb(95, 99, 104);\r\n  color: #e8e8d3;\r\n  height: 300px;\r\n  overflow: hidden;\r\n  resize: vertical;\r\n}\r\n\r\n.scroll-container {\r\n  display: flex !important;\r\n  align-items: flex-start !important;\r\n  font-family: monospace;\r\n  line-height: 1.4;\r\n  height: 100%;\r\n  overflow-x: auto;\r\n  position: relative;\r\n  z-index: 0;\r\n}\r\n\r\n.line-number-container {\r\n  width: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n.buttons {\r\n  background-color: aqua;\r\n  width: 30px;\r\n  height: 40px;\r\n}\r\n\r\n.logo {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.question-text {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.3rem;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.discord-button {\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n}\r\n\r\n.discord-button svg {\r\n  margin-right: 4px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/codeMirror/codeMirrorEditor.css":
/*!********************************************************!*\
  !*** ./src/components/codeMirror/codeMirrorEditor.css ***!
  \********************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_codeMirrorEditor_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./codeMirrorEditor.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/codeMirror/codeMirrorEditor.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_codeMirrorEditor_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_codeMirrorEditor_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_codeMirrorEditor_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_codeMirrorEditor_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/modals/modalAddUrl.css":
/*!***********************************************!*\
  !*** ./src/components/modals/modalAddUrl.css ***!
  \***********************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modalAddUrl_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./modalAddUrl.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/modals/modalAddUrl.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modalAddUrl_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modalAddUrl_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_modalAddUrl_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_modalAddUrl_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/codeMirror/codeMirrorEditor.tsx":
/*!********************************************************!*\
  !*** ./src/components/codeMirror/codeMirrorEditor.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @codemirror/view */ "./node_modules/@codemirror/view/dist/index.js");
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codemirror/state */ "./node_modules/@codemirror/state/dist/index.js");
/* harmony import */ var _codemirror_lint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @codemirror/lint */ "./node_modules/@codemirror/lint/dist/index.js");
/* harmony import */ var _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codemirror/lang-javascript */ "./node_modules/@codemirror/lang-javascript/dist/index.js");
/* harmony import */ var _codemirror_commands__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codemirror/commands */ "./node_modules/@codemirror/commands/dist/index.js");
/* harmony import */ var _codeMirrorLinter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./codeMirrorLinter */ "./src/components/codeMirror/codeMirrorLinter.ts");
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../options/options */ "./src/options/options.tsx");
/* harmony import */ var _codeMirrorEditor_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codeMirrorEditor.css */ "./src/components/codeMirror/codeMirrorEditor.css");











const CodeMirrorEditor = () => {
    const editorViewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [blockedUrls, setBlockedUrls] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_options_options__WEBPACK_IMPORTED_MODULE_2__.BlockedUrlsContext);
    const [initialDoc, setInitialDoc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const [hasUnsavedChanges, setHasUnsavedChanges] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const newInitialDoc = Object.entries(blockedUrls)
            .map(([url]) => `${url}`)
            .join("\n");
        setInitialDoc(newInitialDoc);
    }, [blockedUrls]);
    //Show a popup if the user tries to leave the page with unsaved changes in the editor
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const handleBeforeUnload = (event) => {
            if (hasUnsavedChanges) {
                event.preventDefault();
            }
        };
        window.addEventListener("beforeunload", handleBeforeUnload);
        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [hasUnsavedChanges]);
    function onSave() {
        if (editorViewRef.current) {
            const docValues = editorViewRef.current.state.doc.toString().split("\n");
            const newBlockedUrlData = {};
            docValues.forEach((url) => {
                var _a, _b, _c, _d;
                url = url.trim();
                if (url) {
                    newBlockedUrlData[url] = {
                        w: ((_a = blockedUrls[url]) === null || _a === void 0 ? void 0 : _a.w) || 0,
                        i: ((_b = blockedUrls[url]) === null || _b === void 0 ? void 0 : _b.i) || 0,
                        v: ((_c = blockedUrls[url]) === null || _c === void 0 ? void 0 : _c.v) || 0,
                        n: ((_d = blockedUrls[url]) === null || _d === void 0 ? void 0 : _d.n) || 0,
                    };
                }
            });
            chrome.storage.local.set({ blockedUrlData: newBlockedUrlData }, () => {
                setBlockedUrls(newBlockedUrlData);
            });
        }
    }
    // If the editor changes from the original doc display a message that there are unsaved changes
    function onEditorChange() {
        if (editorViewRef.current) {
            const currentDoc = editorViewRef.current.state.doc.toString();
            if (currentDoc === initialDoc) {
                setHasUnsavedChanges(false);
            }
            else {
                setHasUnsavedChanges(true);
            }
        }
    }
    const editor = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((parent) => {
        var _a;
        if (parent) {
            editorViewRef.current = new codemirror__WEBPACK_IMPORTED_MODULE_4__.EditorView({
                parent,
                state: _codemirror_state__WEBPACK_IMPORTED_MODULE_5__.EditorState.create({
                    doc: initialDoc,
                    extensions: [
                        _codeMirrorLinter__WEBPACK_IMPORTED_MODULE_1__.urlLinter,
                        codemirror__WEBPACK_IMPORTED_MODULE_4__.keymap.of([..._codemirror_commands__WEBPACK_IMPORTED_MODULE_6__.historyKeymap, ..._codemirror_commands__WEBPACK_IMPORTED_MODULE_6__.standardKeymap]),
                        codemirror__WEBPACK_IMPORTED_MODULE_4__.EditorView.updateListener.of((update) => {
                            if (update.docChanged) {
                                onEditorChange();
                            }
                        }),
                        (0,_codemirror_commands__WEBPACK_IMPORTED_MODULE_6__.history)(),
                        (0,codemirror__WEBPACK_IMPORTED_MODULE_4__.dropCursor)(),
                        (0,_codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_7__.javascript)(),
                        (0,_codemirror_lint__WEBPACK_IMPORTED_MODULE_8__.lintGutter)(),
                        (0,codemirror__WEBPACK_IMPORTED_MODULE_4__.lineNumbers)(),
                        (0,codemirror__WEBPACK_IMPORTED_MODULE_4__.highlightActiveLineGutter)(),
                        codemirror__WEBPACK_IMPORTED_MODULE_4__.EditorView.theme({
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
    }, [initialDoc]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { ref: editor }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "bottom-button-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "text-button-wrapper" },
                hasUnsavedChanges && (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "unsaved-changes-text" }, "Editor has unsaved changes")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "button", onClick: onSave }, "Save")))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CodeMirrorEditor);


/***/ }),

/***/ "./src/components/codeMirror/codeMirrorLinter.ts":
/*!*******************************************************!*\
  !*** ./src/components/codeMirror/codeMirrorLinter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   urlLinter: () => (/* binding */ urlLinter)
/* harmony export */ });
/* harmony import */ var _codemirror_lint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @codemirror/lint */ "./node_modules/@codemirror/lint/dist/index.js");
/* harmony import */ var _helper_urlHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/urlHelpers */ "./src/helper/urlHelpers.ts");


const MAX_CHARS_PER_LINE = 100; // Maximum number of characters allowed per line
const urlLinter = (0,_codemirror_lint__WEBPACK_IMPORTED_MODULE_1__.linter)((view) => {
    const diagnostics = [];
    const doc = view.state.doc;
    for (let i = 1; i <= doc.lines; i++) {
        const line = doc.line(i);
        const lineText = line.text.trim();
        // Check if line exceeds MAX_CHARS_PER_LINE
        if (lineText.length > MAX_CHARS_PER_LINE) {
            diagnostics.push({
                from: line.from,
                to: line.to,
                severity: "error",
                message: `Exceeds maximum length of ${MAX_CHARS_PER_LINE} characters`,
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
            return diagnostics;
        }
        if (lineText) {
            if (!(0,_helper_urlHelpers__WEBPACK_IMPORTED_MODULE_0__.isValidMatchPattern)(lineText) && !(0,_helper_urlHelpers__WEBPACK_IMPORTED_MODULE_0__.isValidUrl)(lineText)) {
                const convertedUrl = (0,_helper_urlHelpers__WEBPACK_IMPORTED_MODULE_0__.stringToUrl)(lineText);
                const fixedPattern = (0,_helper_urlHelpers__WEBPACK_IMPORTED_MODULE_0__.stringToMatchPattern)(lineText);
                diagnostics.push({
                    from: line.from,
                    to: line.to,
                    severity: "error",
                    message: `Invalid match pattern or URL\n\nTurn into URL?: ${convertedUrl}\nOr turn into match pattern?: ${fixedPattern}\n\n`,
                    actions: [
                        {
                            name: "Convert to URL",
                            apply(view, from, to) {
                                view.dispatch({
                                    changes: { from, to, insert: convertedUrl },
                                });
                            },
                        },
                        {
                            name: "Convert to Match Pattern",
                            apply(view, from, to) {
                                view.dispatch({
                                    changes: { from, to, insert: fixedPattern },
                                });
                            },
                        },
                        {
                            name: "Remove",
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
    delay: 200,
});


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
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../options/options */ "./src/options/options.tsx");
/* harmony import */ var _modals_modalAddUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals/modalAddUrl */ "./src/components/modals/modalAddUrl.tsx");
/* harmony import */ var _blockedSvgContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blockedSvgContainer */ "./src/components/dashboard/blockedSvgContainer.tsx");





function OptionBlockedCards() {
    const [blockedUrls, setBlockedUrls] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_options_options__WEBPACK_IMPORTED_MODULE_2__.BlockedUrlsContext);
    const [isAddModalOpen, setIsAddModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [lifeTimeBlocks, setLifeTimeBlocks] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({ w: 0, i: 0, v: 0, n: 0 });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        chrome.storage.local.get(["lifetimeTotalBlocks"], (result) => {
            setLifeTimeBlocks(result.lifetimeTotalBlocks);
        });
    }, []);
    function onClickDeleteButton(urlToDelete) {
        chrome.storage.local.get(["blockedUrlData"], (result) => {
            if (result.blockedUrlData) {
                const updatedBlockedUrls = Object.assign({}, result.blockedUrlData);
                delete updatedBlockedUrls[urlToDelete];
                chrome.storage.local.set({ blockedUrlData: updatedBlockedUrls }, () => {
                    setBlockedUrls(updatedBlockedUrls);
                });
            }
        });
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cards-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modals_modalAddUrl__WEBPACK_IMPORTED_MODULE_3__["default"], { isOpen: isAddModalOpen, onClose: () => setIsAddModalOpen(false) }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-container secondary add-card-container", onClick: () => setIsAddModalOpen(true) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "add-card-container", title: "Add singular URL or match pattern" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", width: "56px", height: "56px" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-container secondary" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "card-top-lifetime", className: "card-top", title: "Total lifetime blocked sites" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Lifetime Blocks")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_blockedSvgContainer__WEBPACK_IMPORTED_MODULE_4__["default"], { lifeTimeBlocks: {
                        i: lifeTimeBlocks.i,
                        n: lifeTimeBlocks.n,
                        v: lifeTimeBlocks.v,
                        w: lifeTimeBlocks.w,
                    }, addLifeTimeText: true })),
            Object.entries(blockedUrls).map(([blockedUrl, blockedCount], index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, className: "card-container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "delete-button", onClick: () => onClickDeleteButton(blockedUrl) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", width: "20px", height: "20px" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-top" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { title: blockedUrl },
                        " ",
                        blockedUrl)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_blockedSvgContainer__WEBPACK_IMPORTED_MODULE_4__["default"], { lifeTimeBlocks: {
                        i: blockedCount.i,
                        n: blockedCount.n,
                        v: blockedCount.v,
                        w: blockedCount.w,
                    }, addLifeTimeText: false })))))));
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
        if (!helpDialog.current) {
            return;
        }
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

/***/ "./src/components/modals/modalAddUrl.tsx":
/*!***********************************************!*\
  !*** ./src/components/modals/modalAddUrl.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ModalAddUrl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modalAddUrl_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalAddUrl.css */ "./src/components/modals/modalAddUrl.css");
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../options/options */ "./src/options/options.tsx");
/* harmony import */ var _urlInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../urlInput */ "./src/components/urlInput.tsx");




function ModalAddUrl({ isOpen, onClose }) {
    const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [_, setBlockedUrls] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_options_options__WEBPACK_IMPORTED_MODULE_2__.BlockedUrlsContext);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        var _a, _b;
        if (isOpen) {
            (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.showModal();
        }
        else {
            (_b = dialogRef.current) === null || _b === void 0 ? void 0 : _b.close();
        }
    }, [isOpen]);
    const handleClose = () => {
        onClose();
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
                    chrome.storage.local.set({ blockedUrlData: updatedBlockedUrls }, () => {
                        setBlockedUrls(updatedBlockedUrls);
                        handleClose();
                    });
                }
            });
        }
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dialog", { className: "dialog-container", ref: dialogRef, onClose: handleClose },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Add new URL to block"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_urlInput__WEBPACK_IMPORTED_MODULE_3__["default"], { handleClose: handleClose, addBlockedUrl: addBlockedUrl, addCurrentUrl: false })));
}


/***/ }),

/***/ "./src/options/options.tsx":
/*!*********************************!*\
  !*** ./src/options/options.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockedUrlsContext: () => (/* binding */ BlockedUrlsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _options_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options.css */ "./src/options/options.css");
/* harmony import */ var _components_onOffSlider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/onOffSlider */ "./src/components/onOffSlider.tsx");
/* harmony import */ var _components_codeMirror_codeMirrorEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/codeMirror/codeMirrorEditor */ "./src/components/codeMirror/codeMirrorEditor.tsx");
/* harmony import */ var _components_dashboard_optionBlockedCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard/optionBlockedCards */ "./src/components/dashboard/optionBlockedCards.tsx");
/* harmony import */ var _components_helpButton_helpButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/helpButton/helpButton */ "./src/components/helpButton/helpButton.tsx");
// biome-ignore lint/style/useImportType: <explanation>








const BlockedUrlsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([{}, () => { }]);
const App = () => {
    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("blockedSites");
    const [blockedUrls, setBlockedUrls] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    function setTheme(isDarkMode) {
        document.documentElement.setAttribute("data-theme", isDarkMode ? "dark" : "light");
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const section = urlParams.get("section");
        if (section === "settings" || section === "blockedSites") {
            setActiveSection(section);
        }
        chrome.storage.local.get(["blockedUrlData"], (result) => {
            if (result.blockedUrlData) {
                setBlockedUrls(result.blockedUrlData);
            }
        });
        chrome.storage.local.get(["darkMode"], (result) => {
            const darkModeEnabled = result.darkMode === true;
            setTheme(darkModeEnabled);
        });
    }, []);
    // Add Section to the url, when we refresh the page on a certain header, we will remain on that page
    const setActiveSectionAndUpdateURL = (section) => {
        setActiveSection(section);
        const url = new URL(window.location.href);
        url.searchParams.set("section", section);
        window.history.pushState({}, "", url);
    };
    const allSettings = [
        {
            settingName: "Extension on",
            googleStorageKey: "extensionOnOff",
            refreshPageOnUpdate: false,
        },
        {
            settingName: "Dark mode",
            googleStorageKey: "darkMode",
            refreshPageOnUpdate: true,
        },
    ];
    // UseEffect to subscribe to slider being changed in different part of our app.
    // Aka. if the slider changes in the popup-page while the option page is open also change the slider on the option page
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const messageListener = (message) => {
            if (message.type === "SLIDER_CHANGED") {
                chrome.storage.local.get([message.key], (_result) => { });
            }
        };
        chrome.runtime.onMessage.addListener(messageListener);
        return () => {
            chrome.runtime.onMessage.removeListener(messageListener);
        };
    }, []);
    const renderMiddleSection = () => {
        switch (activeSection) {
            case "blockedSites":
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Blocked Sites"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "question-text" },
                        "Sites can be blocked via URL or by Match Pattern",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helpButton_helpButton__WEBPACK_IMPORTED_MODULE_6__["default"], { helpElement: helpMatchedPattern() })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_dashboard_optionBlockedCards__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Block in bulk"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "question-text" }, "Easy access to remove and add sites to block in bulk via URL or by Match Pattern"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_codeMirror_codeMirrorEditor__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
            case "settings":
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "top-h2" }, "General Settings"),
                    allSettings.map((setting, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, className: "settings-item-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, setting.settingName),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "slider" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_onOffSlider__WEBPACK_IMPORTED_MODULE_3__["default"], { id: index.toString(), setting: setting }))))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { title: "Join the Discord for help", className: "settings-item-container discord-button", onClick: onClickDiscord },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Questions? Requests? Bugs? Join the Discord."),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "slider" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { width: "33px", height: "33px", viewBox: "0 -28.5 256 256", version: "1.1", preserveAspectRatio: "xMidYMid" },
                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("g", null,
                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z", fill: "#5865F2" })))))));
        }
    };
    function onClickDiscord() {
        window.open("https://discord.gg/smt753Fwt3", "_blank");
    }
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlockedUrlsContext.Provider, { value: [blockedUrls, setBlockedUrls] },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "logo", src: "logoApp.png", alt: "logo", title: "Search Sanitizer" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "header-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `container image-offset button ${activeSection === "blockedSites" ? "active" : ""}`, onClick: () => setActiveSectionAndUpdateURL("blockedSites") },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Blocked Sites")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `container image-offset button ${activeSection === "settings" ? "active" : ""}`, onClick: () => setActiveSectionAndUpdateURL("settings") },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Settings"))))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "middle" }, renderMiddleSection()))));
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
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("th", { style: { border: "1px solid black", padding: "8px" } }, "Example of URLs Matched"))),
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","vendors-node_modules_codemirror_commands_dist_index_js-node_modules_codemirror_lang-javascrip-e9cd47","src_components_dashboard_blockedSvgContainer_tsx-src_components_onOffSlider_tsx-src_component-b96748"], () => (__webpack_require__("./src/options/options.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=options.js.map