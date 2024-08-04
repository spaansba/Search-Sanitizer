/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/codeMirrorEditor/codeMirrorEditor.css":
/*!****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/codeMirrorEditor/codeMirrorEditor.css ***!
  \****************************************************************************************************/
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
    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,
      15% 15%, 10% 10%, 18% 18%;
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
    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%,
      18% 18%;
    background-position: 50% 0%;
    animation: greenbottomBubbles 0.6s ease;
  }
}

@keyframes greentopBubbles {
  0% {
    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,
      40% 90%, 55% 90%, 70% 90%;
  }

  50% {
    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,
      50% 50%, 65% 20%, 90% 30%;
  }

  100% {
    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,
      50% 40%, 65% 10%, 90% 20%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}

@keyframes greenbottomBubbles {
  0% {
    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,
      70% -10%, 70% 0%;
  }

  50% {
    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,
      105% 0%;
  }

  100% {
    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,
      110% 10%;
    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;
  }
}
`, "",{"version":3,"sources":["webpack://./src/components/codeMirrorEditor/codeMirrorEditor.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,yBAAyB;EACzB,eAAe;;EAEf;IACE,gBAAgB;IAChB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,eAAe;IACf,sBAAsB;IACtB,yBAAyB;EAC3B;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;;IAEE,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,SAAS;IACT,YAAY;IACZ,2BAA2B;IAC3B,cAAc;IACd,4BAA4B;EAC9B;;EAEA;IACE,SAAS;IACT;;;;;;;;2DAQuD;IACvD;+BAC2B;IAC3B,6BAA6B;IAC7B,oCAAoC;EACtC;;EAEA;IACE,YAAY;IACZ;;;;;;2DAMuD;IACvD;aACS;IACT,2BAA2B;IAC3B,uCAAuC;EACzC;AACF;;AAEA;EACE;IACE;+BAC2B;EAC7B;;EAEA;IACE;+BAC2B;EAC7B;;EAEA;IACE;+BAC2B;IAC3B,yDAAyD;EAC3D;AACF;;AAEA;EACE;IACE;sBACkB;EACpB;;EAEA;IACE;aACS;EACX;;EAEA;IACE;cACU;IACV,yDAAyD;EAC3D;AACF","sourcesContent":[".bottom-button-container {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-top: 8px;\r\n\r\n  .button {\r\n    font-weight: 500;\r\n    font-size: larger;\r\n    position: relative;\r\n    padding: 8px 25px;\r\n    border-radius: 8px;\r\n    border: 1px solid #ccccca;\r\n    color: #1d1c1c;\r\n    cursor: pointer;\r\n    background-color: #fff;\r\n    transition: all 0.2s ease;\r\n  }\r\n\r\n  .button:hover {\r\n    background-color: #ccccca;\r\n  }\r\n\r\n  .button:before,\r\n  .button:after {\r\n    position: absolute;\r\n    content: \"\";\r\n    width: 150%;\r\n    left: 50%;\r\n    height: 100%;\r\n    transform: translateX(-50%);\r\n    z-index: -1000;\r\n    background-repeat: no-repeat;\r\n  }\r\n\r\n  .button:hover:before {\r\n    top: -70%;\r\n    background-image: radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, transparent 20%, #a7e48f 20%, transparent 30%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, transparent 10%, #a7e48f 15%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%);\r\n    background-size: 10% 10%, 20% 20%, 15% 15%, 20% 20%, 18% 18%, 10% 10%,\r\n      15% 15%, 10% 10%, 18% 18%;\r\n    background-position: 50% 120%;\r\n    animation: greentopBubbles 0.6s ease;\r\n  }\r\n\r\n  .button:hover::after {\r\n    bottom: -70%;\r\n    background-image: radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, transparent 10%, #a7e48f 15%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%),\r\n      radial-gradient(circle, #a7e48f 20%, transparent 20%);\r\n    background-size: 15% 15%, 20% 20%, 18% 18%, 20% 20%, 15% 15%, 20% 20%,\r\n      18% 18%;\r\n    background-position: 50% 0%;\r\n    animation: greenbottomBubbles 0.6s ease;\r\n  }\r\n}\r\n\r\n@keyframes greentopBubbles {\r\n  0% {\r\n    background-position: 5% 90%, 10% 90%, 10% 90%, 15% 90%, 25% 90%, 25% 90%,\r\n      40% 90%, 55% 90%, 70% 90%;\r\n  }\r\n\r\n  50% {\r\n    background-position: 0% 80%, 0% 20%, 10% 40%, 20% 0%, 30% 30%, 22% 50%,\r\n      50% 50%, 65% 20%, 90% 30%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0% 70%, 0% 10%, 10% 30%, 20% -10%, 30% 20%, 22% 40%,\r\n      50% 40%, 65% 10%, 90% 20%;\r\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\r\n  }\r\n}\r\n\r\n@keyframes greenbottomBubbles {\r\n  0% {\r\n    background-position: 10% -10%, 30% 10%, 55% -10%, 70% -10%, 85% -10%,\r\n      70% -10%, 70% 0%;\r\n  }\r\n\r\n  50% {\r\n    background-position: 0% 80%, 20% 80%, 45% 60%, 60% 100%, 75% 70%, 95% 60%,\r\n      105% 0%;\r\n  }\r\n\r\n  100% {\r\n    background-position: 0% 90%, 20% 90%, 45% 70%, 60% 110%, 75% 80%, 95% 70%,\r\n      110% 10%;\r\n    background-size: 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%, 0% 0%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
  gap: 12px;
  display: flex;
  flex-wrap: wrap;
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

.card-container > .add-card-container {
  display: flex;
  justify-content: center;
}

.add-card-container {
  cursor: pointer;
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
  align-items: center;
}

.card-container > .blocked-results span {
  font-weight: 500;
  font-size: 10px;
  text-align: center;
}

.card-container > .card-bottom svg {
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
  fill: rgb(36, 22, 22);
  transition: fill 0.3s ease;
}

.delete-button:hover svg {
  fill: #ff4444;
}

.secondary {
  background: linear-gradient(rgb(168 222 240), rgb(212 234 247));
}

#card-top-lifetime {
  background: linear-gradient(rgb(168 222 240), rgb(212 234 247));
}
`, "",{"version":3,"sources":["webpack://./src/components/dashboard/optionBlockedCards.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,kCAAkC;EAClC,wBAAwB;EACxB,+BAA+B;EAC/B,gCAAgC;EAChC,sBAAsB;EACtB,gDAAgD;EAChD,+BAA+B;AACjC;;AAIA;EACE,SAAS;EACT,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,mEAAmE;EACnE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,+BAA+B;EAC/B,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,aAAa;EACb,qBAAqB;EACrB;4EAC0E;EAC1E,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,mEAAmE;EACnE,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;;EAEvB;IACE,eAAe;IACf,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;EACpB;AACF;;AAEA;EACE,qBAAqB;EACrB,oBAAoB;EACpB,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,sBAAsB;EACtB,WAAW;EACX,8BAA8B;EAC9B,+BAA+B;AACjC;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,2BAA2B;;EAE3B;IACE,YAAY;EACd;EACA;IACE,WAAW;EACb;AACF;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,UAAU;EACV,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,+DAA+D;AACjE;;AAEA;EACE,+DAA+D;AACjE","sourcesContent":[":root {\r\n  color-scheme: light;\r\n  --light-main-background: #d1d1cf;\r\n  --light-secondary-background: #fff;\r\n  --light-main-text: black;\r\n  --light-secondary-text: #3a3a35;\r\n  --light-main-background: #d1d1cf;\r\n  --light-hover: #d1d1cf;\r\n  --border: 1px solid var(--light-main-background);\r\n  font-family: \"Lato\", sans-serif;\r\n}\r\n\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap\");\r\n\r\n.cards-container {\r\n  gap: 12px;\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.card-container {\r\n  background: linear-gradient(rgb(234, 240, 168), rgb(244, 247, 212));\r\n  position: relative;\r\n  height: 100px;\r\n  width: 210px;\r\n  transition: transform 0.3s ease;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 10px;\r\n  font-family: \"Roboto\";\r\n  box-shadow: 0px 3px 3px -3px rgba(0, 0, 0, 0.2),\r\n    0px 5px 7px 1px rgba(0, 0, 0, 0.14), 0px 2px 9px 3px rgba(0, 0, 0, 0.12);\r\n  border-radius: 8px;\r\n}\r\n\r\n.card-container > .add-card-container {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.add-card-container {\r\n  cursor: pointer;\r\n}\r\n\r\n.card-container > .card-top {\r\n  background: linear-gradient(rgb(234, 240, 168), rgb(244, 247, 212));\r\n  height: 60%;\r\n  padding-left: 3px;\r\n  padding-right: 3px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  p {\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    text-overflow: ellipsis;\r\n    overflow-x: hidden;\r\n  }\r\n}\r\n\r\n.card-container > .card-bottom {\r\n  padding-right: 1.2rem;\r\n  padding-left: 1.2rem;\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  background-color: #fff;\r\n  height: 40%;\r\n  border-bottom-left-radius: 4px;\r\n  border-bottom-right-radius: 4px;\r\n}\r\n\r\n.card-container > .card-bottom .blocked-results {\r\n  display: flex;\r\n  gap: 8px;\r\n  align-items: center;\r\n}\r\n\r\n.card-container > .blocked-results span {\r\n  font-weight: 500;\r\n  font-size: 10px;\r\n  text-align: center;\r\n}\r\n\r\n.card-container > .card-bottom svg {\r\n  fill: rgb(36, 22, 22);\r\n  transition: fill 0.3s ease;\r\n}\r\n\r\n.card-container:hover {\r\n  transform: translateY(-5px);\r\n\r\n  .delete-button {\r\n    opacity: 0.9;\r\n  }\r\n  .card-bottom svg {\r\n    fill: black;\r\n  }\r\n}\r\n\r\n.delete-button {\r\n  opacity: 0.3;\r\n  position: absolute;\r\n  top: 5px;\r\n  right: 5px;\r\n  z-index: 1;\r\n  cursor: pointer;\r\n  transition: opacity 0.3s ease;\r\n}\r\n\r\n.delete-button svg {\r\n  fill: rgb(36, 22, 22);\r\n  transition: fill 0.3s ease;\r\n}\r\n\r\n.delete-button:hover svg {\r\n  fill: #ff4444;\r\n}\r\n\r\n.secondary {\r\n  background: linear-gradient(rgb(168 222 240), rgb(212 234 247));\r\n}\r\n\r\n#card-top-lifetime {\r\n  background: linear-gradient(rgb(168 222 240), rgb(212 234 247));\r\n}\r\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes fadeIn {
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
`, "",{"version":3,"sources":["webpack://./src/components/modals/modalAddUrl.css"],"names":[],"mappings":"AAAA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE;IACE,UAAU;IACV,qBAAqB;EACvB;EACA;IACE,UAAU;IACV,mBAAmB;EACrB;AACF","sourcesContent":["@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes dialogAnimation {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale(0.9);\r\n  }\r\n  to {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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

.question-text {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 10px;
}
`, "",{"version":3,"sources":["webpack://./src/options/options.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,gCAAgC;EAChC,kCAAkC;EAClC,wBAAwB;EACxB,+BAA+B;EAC/B,gCAAgC;EAChC,sBAAsB;EACtB,gDAAgD;EAChD,+BAA+B;EAC/B,iBAAiB;AACnB;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,wBAAwB;EACxB,uBAAuB;EACvB,gBAAgB;EAChB,eAAe;EACf,SAAS;EACT,YAAY;EACZ,uBAAuB;EACvB,6CAA6C;EAC7C,2CAA2C;EAC3C,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,6BAA6B;EAC7B,gBAAgB;EAChB,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,6BAA6B;EAC7B,SAAS;EACT,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,4BAA4B;AAC9B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,kCAAkC;EAClC,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,SAAS;EACT,YAAY;EACZ,cAAc;EACd,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;EAChB,cAAc;EACd,aAAa;AACf;;AAEA;EACE,yBAAyB;EACzB,kCAAkC;EAClC,cAAc;EACd,aAAa;EACb,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,wBAAwB;EACxB,kCAAkC;EAClC,sBAAsB;EACtB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,mBAAmB;AACrB","sourcesContent":[":root {\r\n  color-scheme: light;\r\n  --light-main-background: #d1d1cf;\r\n  --light-secondary-background: #fff;\r\n  --light-main-text: black;\r\n  --light-secondary-text: #3a3a35;\r\n  --light-main-background: #d1d1cf;\r\n  --light-hover: #d1d1cf;\r\n  --border: 1px solid var(--light-main-background);\r\n  font-family: \"Lato\", sans-serif;\r\n  user-select: none;\r\n}\r\n\r\nbody {\r\n  background-color: var(--light-main-background);\r\n}\r\n\r\nh2 {\r\n  margin-top: 14px;\r\n  margin-bottom: 8px;\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  font-style: normal;\r\n}\r\n\r\nh3 {\r\n  font-size: 20px;\r\n  font-weight: 500;\r\n  font-style: normal;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 28px !important;\r\n  width: 730px !important;\r\n  overflow-y: auto;\r\n  position: fixed;\r\n  top: 32px;\r\n  bottom: 32px;\r\n  left: calc(50% - 375px);\r\n  background: var(--light-secondary-background);\r\n  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.24);\r\n  border-radius: 8px;\r\n}\r\n\r\n#options-page-container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\nheader {\r\n  padding-bottom: 0.8rem;\r\n  border-bottom: var(--border);\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  align-items: center;\r\n  color: var(--light-main-text);\r\n  font-weight: 400;\r\n  font-size: 22px;\r\n  line-height: 100%;\r\n}\r\n\r\n.image-offset {\r\n  gap: 0.8rem;\r\n}\r\n\r\n.container img {\r\n  margin-right: auto;\r\n}\r\n\r\n.header-wrapper {\r\n  flex-grow: 1;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  gap: 2rem;\r\n  font-size: 28px;\r\n  font-weight: 600;\r\n}\r\n\r\n.settings-item-container {\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  border-bottom: var(--border);\r\n}\r\n\r\n.button {\r\n  cursor: pointer;\r\n}\r\n\r\np {\r\n  font-size: 15px;\r\n  color: var(--light-secondary-text);\r\n  user-select: text;\r\n}\r\n\r\n.slider {\r\n  margin-left: auto;\r\n}\r\n\r\n.active {\r\n  color: green;\r\n}\r\n\r\n.custom-textarea {\r\n  margin: 0;\r\n  flex-grow: 2;\r\n  flex-shrink: 0;\r\n  display: block;\r\n  white-space: pre;\r\n  word-wrap: normal;\r\n  box-sizing: border-box;\r\n  min-height: 100%;\r\n  padding: 4px 0;\r\n  outline: none;\r\n}\r\n\r\n.blocked-site-container {\r\n  background-color: #202124;\r\n  border: 1px solid rgb(95, 99, 104);\r\n  color: #e8e8d3;\r\n  height: 300px;\r\n  overflow: hidden;\r\n  resize: vertical;\r\n}\r\n\r\n.scroll-container {\r\n  display: flex !important;\r\n  align-items: flex-start !important;\r\n  font-family: monospace;\r\n  line-height: 1.4;\r\n  height: 100%;\r\n  overflow-x: auto;\r\n  position: relative;\r\n  z-index: 0;\r\n}\r\n\r\n.line-number-container {\r\n  width: 30px;\r\n  overflow: hidden;\r\n}\r\n\r\n.buttons {\r\n  background-color: aqua;\r\n  width: 30px;\r\n  height: 40px;\r\n}\r\n\r\n.logo {\r\n  width: 40px;\r\n  height: 40px;\r\n}\r\n\r\n.question-text {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 0.3rem;\r\n  margin-bottom: 10px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/codeMirrorEditor/codeMirrorEditor.css":
/*!**************************************************************!*\
  !*** ./src/components/codeMirrorEditor/codeMirrorEditor.css ***!
  \**************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_codeMirrorEditor_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./codeMirrorEditor.css */ "./node_modules/css-loader/dist/cjs.js!./src/components/codeMirrorEditor/codeMirrorEditor.css");

      
      
      
      
      
      
      
      
      

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
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @codemirror/view */ "./node_modules/@codemirror/view/dist/index.js");
/* harmony import */ var _codemirror_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @codemirror/state */ "./node_modules/@codemirror/state/dist/index.js");
/* harmony import */ var _codemirror_lint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @codemirror/lint */ "./node_modules/@codemirror/lint/dist/index.js");
/* harmony import */ var _codemirror_lang_javascript__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @codemirror/lang-javascript */ "./node_modules/@codemirror/lang-javascript/dist/index.js");
/* harmony import */ var _codemirror_commands__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @codemirror/commands */ "./node_modules/@codemirror/commands/dist/index.js");
/* harmony import */ var _linter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linter */ "./src/components/codeMirrorEditor/linter.ts");
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../options/options */ "./src/options/options.tsx");
/* harmony import */ var _codeMirrorEditor_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./codeMirrorEditor.css */ "./src/components/codeMirrorEditor/codeMirrorEditor.css");










const CodeMirrorEditor = () => {
    const editorViewRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [blockedUrls, setBlockedUrls] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_options_options__WEBPACK_IMPORTED_MODULE_2__.BlockedUrlsContext);
    const [initialDoc, setInitialDoc] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        const newInitialDoc = Object.entries(blockedUrls)
            .map(([url, data]) => `${url}`)
            .join("\n");
        setInitialDoc(newInitialDoc);
        console.log(newInitialDoc);
    }, [blockedUrls]);
    function onSave() {
        if (editorViewRef.current) {
            const docValues = editorViewRef.current.state.doc.toString().split("\n");
            const newBlockedUrlData = {};
            docValues.forEach((url) => {
                var _a, _b, _c;
                url = url.trim();
                if (url) {
                    newBlockedUrlData[url] = {
                        i: ((_a = blockedUrls[url]) === null || _a === void 0 ? void 0 : _a.i) || 0,
                        s: ((_b = blockedUrls[url]) === null || _b === void 0 ? void 0 : _b.s) || 0,
                        v: ((_c = blockedUrls[url]) === null || _c === void 0 ? void 0 : _c.v) || 0,
                    };
                }
            });
            chrome.storage.sync.set({ blockedUrlData: newBlockedUrlData }, function () {
                console.log("URL data saved");
                setBlockedUrls(newBlockedUrlData);
            });
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
                        _linter__WEBPACK_IMPORTED_MODULE_1__.urlLinter,
                        codemirror__WEBPACK_IMPORTED_MODULE_4__.keymap.of([..._codemirror_commands__WEBPACK_IMPORTED_MODULE_6__.historyKeymap, ..._codemirror_commands__WEBPACK_IMPORTED_MODULE_6__.standardKeymap]),
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
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { className: "button", onClick: onSave }, "Save"))));
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
/* harmony import */ var _codemirror_lint__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @codemirror/lint */ "./node_modules/@codemirror/lint/dist/index.js");
/* harmony import */ var _helper_urlHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helper/urlHelpers */ "./src/helper/urlHelpers.ts");


const MAX_CHARS_PER_LINE = 100; // Maximum number of characters allowed per line
const urlLinter = (0,_codemirror_lint__WEBPACK_IMPORTED_MODULE_1__.linter)((view) => {
    let diagnostics = [];
    let doc = view.state.doc;
    for (let i = 1; i <= doc.lines; i++) {
        let line = doc.line(i);
        let lineText = line.text.trim();
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




function OptionBlockedCards() {
    const [blockedUrls, setBlockedUrls] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_options_options__WEBPACK_IMPORTED_MODULE_2__.BlockedUrlsContext);
    const [isAddModalOpen, setIsAddModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
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
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "cards-container" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_modals_modalAddUrl__WEBPACK_IMPORTED_MODULE_3__["default"], { isOpen: isAddModalOpen, onClose: () => setIsAddModalOpen(false) }),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-container secondary add-card-container", onClick: () => setIsAddModalOpen(true) },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "add-card-container", title: "Add singular URL or match pattern" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", width: "56", height: "56", fill: "currentColor" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" })))),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-container secondary" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { id: "card-top-lifetime", className: "card-top", title: "Total lifetime blocked sites" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, " Lifetime Blocks")),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-bottom" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "blocked-results", title: `${1} Lifetime blocked regular search results` },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "currentColor" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm-2-5h4v2h-4V9z" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                            " ",
                            formatCount(13))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "blocked-results", title: `${1} Lifetime blocked image search results` },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "currentColor" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "count-text" },
                            " ",
                            formatCount(12))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "blocked-results", title: `${1} Lifetime blocked video search results` },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "currentColor" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                            " ",
                            formatCount(12))))),
            Object.entries(blockedUrls).map(([blockedUrl, count], index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, className: "card-container" },
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "delete-button", onClick: () => onClickDeleteButton(blockedUrl) },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", width: "20", height: "20", fill: "currentColor" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-top" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { title: blockedUrl },
                        " ",
                        blockedUrl)),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card-bottom" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "blocked-results", title: `${formatCount(count.s)} Blocked regular search results` },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "currentColor" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm-2-5h4v2h-4V9z" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null,
                            " ",
                            formatCount(count.s))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "blocked-results", title: `${formatCount(count.i)} Blocked image search results` },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "currentColor" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", { className: "count-text" },
                            " ",
                            formatCount(count.i))),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "blocked-results", title: `${formatCount(count.v)} Blocked video search results` },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("svg", { viewBox: "0 0 24 24", width: "22", height: "22", fill: "currentColor" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("path", { d: "M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z" })),
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
/* harmony import */ var _shared_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared.css */ "./src/shared.css");
/* harmony import */ var _options_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../options/options */ "./src/options/options.tsx");
/* harmony import */ var _helper_urlHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helper/urlHelpers */ "./src/helper/urlHelpers.ts");





function ModalAddUrl({ isOpen, onClose }) {
    const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const urlInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const [inputIsValid, setInputIsValid] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const [_, setBlockedUrls] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_options_options__WEBPACK_IMPORTED_MODULE_3__.BlockedUrlsContext);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        var _a, _b;
        if (isOpen) {
            (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.showModal();
        }
        else {
            (_b = dialogRef.current) === null || _b === void 0 ? void 0 : _b.close();
        }
    }, [isOpen]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        // Listen for the custom event to open the modal
        const handleOpenModal = (event) => {
            var _a;
            (_a = dialogRef.current) === null || _a === void 0 ? void 0 : _a.showModal();
            if (urlInput.current && event.detail.url) {
                urlInput.current.value = event.detail.url;
                handleOnChange();
            }
        };
        document.addEventListener("openAddUrlModal", handleOpenModal);
        return () => {
            document.removeEventListener("openAddUrlModal", handleOpenModal);
        };
    }, []);
    const handleClose = () => {
        urlInput.current.value = "";
        onClose();
    };
    const handleAddNewUrl = () => {
        if (!inputIsValid) {
            return;
        }
        const urlToAdd = urlInput.current.value;
        if (urlToAdd) {
            chrome.storage.sync.get(["blockedUrlData"], (result) => {
                if (result.blockedUrlData) {
                    const updatedBlockedUrls = Object.assign({}, result.blockedUrlData);
                    updatedBlockedUrls[urlToAdd] = {
                        i: 0,
                        s: 0,
                        v: 0,
                    };
                    chrome.storage.sync.set({ blockedUrlData: updatedBlockedUrls }, () => {
                        setBlockedUrls(updatedBlockedUrls);
                        handleClose();
                    });
                }
            });
        }
    };
    const handleOnChange = () => {
        const userInput = urlInput.current.value;
        if ((0,_helper_urlHelpers__WEBPACK_IMPORTED_MODULE_4__.isValidMatchPattern)(userInput) || (0,_helper_urlHelpers__WEBPACK_IMPORTED_MODULE_4__.isValidUrl)(userInput)) {
            setInputIsValid(true);
        }
        else {
            setInputIsValid(false);
        }
    };
    const handleOnKeyDown = (event) => {
        switch (event.key) {
            case "Enter":
                handleAddNewUrl();
                break;
            case "Escape":
                handleClose();
                break;
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("dialog", { className: "dialog-container", ref: dialogRef, onClose: handleClose, onKeyDown: (event) => handleOnKeyDown(event) },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Add new URL to block"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("input", { onBlur: handleOnChange, onChange: handleOnChange, ref: urlInput, type: "url", className: "url-input", placeholder: "example.com" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "button-wrapper" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: handleAddNewUrl, className: `url-button add ${!inputIsValid ? "disabled" : ""}`, title: !inputIsValid ? "Please enter a valid URL or match pattern" : "" }, "Add"),
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", { onClick: handleClose, className: "url-button cancel" }, "Cancel"))));
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
/* harmony import */ var _components_codeMirrorEditor_codeMirrorEditor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/codeMirrorEditor/codeMirrorEditor */ "./src/components/codeMirrorEditor/codeMirrorEditor.tsx");
/* harmony import */ var _components_dashboard_optionBlockedCards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard/optionBlockedCards */ "./src/components/dashboard/optionBlockedCards.tsx");
/* harmony import */ var _components_helpButton_helpButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/helpButton/helpButton */ "./src/components/helpButton/helpButton.tsx");







const BlockedUrlsContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)([{}, () => { }]);
const App = () => {
    const [activeSection, setActiveSection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("blockedSites");
    const [blockedUrls, setBlockedUrls] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
        chrome.storage.sync.get(["blockedUrlData"], (result) => {
            console.log("Retrieved from storage:", result.blockedUrlData);
            if (result.blockedUrlData) {
                setBlockedUrls(result.blockedUrlData);
            }
        });
    }, []);
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
            case "blockedSites":
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Blocked Sites"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "question-text" },
                        "Sites can be blocked via URL or by Match Pattern",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helpButton_helpButton__WEBPACK_IMPORTED_MODULE_6__["default"], { helpElement: helpMatchedPattern() })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_dashboard_optionBlockedCards__WEBPACK_IMPORTED_MODULE_5__["default"], null),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, "Block in bulk"),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "question-text" },
                        "Easy access to remove and add sites to block in bulk via URL or by Match Pattern",
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_helpButton_helpButton__WEBPACK_IMPORTED_MODULE_6__["default"], { helpElement: helpMatchedPattern() })),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_codeMirrorEditor_codeMirrorEditor__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
            case "settings":
                return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", { className: "top-h2" }, "General Settings"),
                    allSettings.settings.map((setting, index) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { key: index, className: "settings-item-container" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, setting.settingName),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "slider" },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_onOffSlider__WEBPACK_IMPORTED_MODULE_3__["default"], { id: index.toString(), googleStorageKey: setting.googleStorageKey })))))));
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(BlockedUrlsContext.Provider, { value: [blockedUrls, setBlockedUrls] },
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "card" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header", null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "container" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { className: "logo", src: "logoApp.png", alt: "logo" }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "header-wrapper" },
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `container image-offset button ${activeSection === "blockedSites" ? "active" : ""}`, onClick: () => setActiveSection("blockedSites") },
                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "Blocked Sites")),
                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: `container image-offset button ${activeSection === "settings" ? "active" : ""}`, onClick: () => setActiveSection("settings") },
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","vendors-node_modules_codemirror_commands_dist_index_js-node_modules_codemirror_lang-javascrip-e9cd47","src_shared_css-src_components_onOffSlider_tsx-src_helper_urlHelpers_ts"], () => (__webpack_require__("./src/options/options.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=options.js.map