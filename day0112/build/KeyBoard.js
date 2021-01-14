/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/KeyBoard.js":
/*!*************************!*\
  !*** ./src/KeyBoard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass KeyBoard {\n  constructor(options = {}) {\n    this.value = ''; // 输入的内容\n\n    this.options = {\n      type: 'integer'\n    }; // 合并成一个配置项\n\n    let res = Object.assign(this.options, options);\n    console.log(res);\n    this.init(res);\n  }\n\n  init(options) {\n    // 根据type 处理 键盘\n    this.initKey(options.type); // 3种值\n    // 键盘渲染出来\n\n    this._renderKeyboard(options.el);\n  }\n\n  initKey(type) {\n    let typeKey = {};\n\n    switch (type) {\n      case 'integer':\n        // 左下角变成 清空\n        typeKey = {\n          content: '清空',\n          action: 'clear'\n        };\n        break;\n\n      case 'idCard':\n        typeKey = {\n          content: 'X',\n          action: 'value'\n        };\n        break;\n\n      default:\n        typeKey = {\n          content: '.',\n          action: 'value'\n        };\n        break;\n    }\n\n    this.items = [{\n      content: '1',\n      action: 'value'\n    }, {\n      content: '2',\n      action: 'value'\n    }, {\n      content: '3',\n      action: 'value'\n    }, {\n      content: '4',\n      action: 'value'\n    }, {\n      content: '5',\n      action: 'value'\n    }, {\n      content: '6',\n      action: 'value'\n    }, {\n      content: '7',\n      action: 'value'\n    }, {\n      content: '8',\n      action: 'value'\n    }, {\n      content: '9',\n      action: 'value'\n    }, typeKey, {\n      content: '0',\n      action: 'value'\n    }, {\n      content: '&larr;',\n      action: 'value'\n    }];\n  }\n\n  _renderKeyboard(container) {\n    let keyboards = this.items.map(item => {\n      return `<button>${item.content}</button>`;\n    });\n    let oBox = document.createElement('div');\n    oBox.innerHTML = keyboards.join(''); // 事件\n\n    oBox.addEventListener('touchend', e => {\n      let value = e.target.innerHTML; // console.log(value)\n\n      if (value === '清空') {\n        this.value = '';\n      } else if (value === '←') {\n        //删除 最后一个\n        this.value = this.value.slice(0, this.value.length - 1);\n      } else {\n        this.value += value;\n      }\n\n      this.options.inputValue(this.value);\n    }); // onclick : 300ms延时\n\n    container.appendChild(oBox);\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeyBoard);\n\n//# sourceURL=webpack://bingyu-keyboard/./src/KeyBoard.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/KeyBoard.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;