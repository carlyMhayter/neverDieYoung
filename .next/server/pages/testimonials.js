/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/testimonials";
exports.ids = ["pages/testimonials"];
exports.modules = {

/***/ "./components/Carousel/index.js":
/*!**************************************!*\
  !*** ./components/Carousel/index.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Carousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Carousel.module.scss */ \"./components/Carousel/Carousel.module.scss\");\n/* harmony import */ var _Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _useTransition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useTransition */ \"./components/Carousel/useTransition.js\");\n\nvar _jsxFileName = \"/Users/carlyhayter/Documents/Coding/neverDieYoung/components/Carousel/index.js\";\n\n\n\n\nfunction Carousel({\n  children,\n  width,\n  unit\n}) {\n  // here we extracted the carousel functionality into its own hook\n  const {\n    translate,\n    items,\n    setAction\n  } = (0,_useTransition__WEBPACK_IMPORTED_MODULE_3__.default)(width, children);\n\n  const handleNext = () => setAction(\"next\");\n\n  const handlePrev = () => setAction(\"prev\");\n\n  const prevText = \"< prev\";\n  const nextText = \"next >\";\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().parent),\n    style: {\n      width: `${width}${unit}`\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().inner),\n        style: {\n          width: `${width * items.length}${unit}`,\n          transform: `translateX(-${translate}${unit})`\n        },\n        children: items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().item),\n          style: {\n            width: `${width}${unit}`\n          },\n          children: item\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 13\n        }, this))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: (_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().controls),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: `${(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().next)} button`,\n        onClick: handleNext,\n        children: nextText\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: `${(_Carousel_module_scss__WEBPACK_IMPORTED_MODULE_4___default().prev)} button`,\n        onClick: handlePrev,\n        children: prevText\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, this);\n}\nCarousel.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)), (prop_types__WEBPACK_IMPORTED_MODULE_2___default().node)]).isRequired,\n  width: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),\n  unit: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string)\n};\nCarousel.defaultProps = {\n  width: 350,\n  unit: \"px\"\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVXYWxraW5nTWVuLy4vY29tcG9uZW50cy9DYXJvdXNlbC9pbmRleC5qcz9kN2U0Il0sIm5hbWVzIjpbIkNhcm91c2VsIiwiY2hpbGRyZW4iLCJ3aWR0aCIsInVuaXQiLCJ0cmFuc2xhdGUiLCJpdGVtcyIsInNldEFjdGlvbiIsInVzZVRyYW5zaXRpb24iLCJoYW5kbGVOZXh0IiwiaGFuZGxlUHJldiIsInByZXZUZXh0IiwibmV4dFRleHQiLCJzdHlsZXMiLCJsZW5ndGgiLCJ0cmFuc2Zvcm0iLCJtYXAiLCJpdGVtIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxRQUFULENBQWtCO0FBQUVDLFVBQUY7QUFBWUMsT0FBWjtBQUFtQkM7QUFBbkIsQ0FBbEIsRUFBNkM7QUFDMUQ7QUFDQSxRQUFNO0FBQUVDLGFBQUY7QUFBYUMsU0FBYjtBQUFvQkM7QUFBcEIsTUFBa0NDLHVEQUFhLENBQUNMLEtBQUQsRUFBUUQsUUFBUixDQUFyRDs7QUFFQSxRQUFNTyxVQUFVLEdBQUcsTUFBTUYsU0FBUyxDQUFDLE1BQUQsQ0FBbEM7O0FBQ0EsUUFBTUcsVUFBVSxHQUFHLE1BQU1ILFNBQVMsQ0FBQyxNQUFELENBQWxDOztBQUNBLFFBQU1JLFFBQVEsR0FBRyxRQUFqQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxRQUFqQjtBQUVBLHNCQUNFO0FBQ0UsYUFBUyxFQUFFQyxxRUFEYjtBQUVFLFNBQUssRUFBRTtBQUNMVixXQUFLLEVBQUcsR0FBRUEsS0FBTSxHQUFFQyxJQUFLO0FBRGxCLEtBRlQ7QUFBQSw0QkFNRTtBQUFLLGVBQVMsRUFBRVMsd0VBQWhCO0FBQUEsNkJBQ0U7QUFDRSxpQkFBUyxFQUFFQSxvRUFEYjtBQUVFLGFBQUssRUFBRTtBQUNMVixlQUFLLEVBQUcsR0FBRUEsS0FBSyxHQUFHRyxLQUFLLENBQUNRLE1BQU8sR0FBRVYsSUFBSyxFQURqQztBQUVMVyxtQkFBUyxFQUFHLGVBQWNWLFNBQVUsR0FBRUQsSUFBSztBQUZ0QyxTQUZUO0FBQUEsa0JBT0dFLEtBQUssQ0FBQ1UsR0FBTixDQUFXQyxJQUFELGlCQUNUO0FBQ0UsbUJBQVMsRUFBRUosbUVBRGI7QUFFRSxlQUFLLEVBQUU7QUFDTFYsaUJBQUssRUFBRyxHQUFFQSxLQUFNLEdBQUVDLElBQUs7QUFEbEIsV0FGVDtBQUFBLG9CQU1HYTtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREQ7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBMEJFO0FBQUssZUFBUyxFQUFFSix1RUFBaEI7QUFBQSw4QkFDRTtBQUFRLGlCQUFTLEVBQUcsR0FBRUEsbUVBQVksU0FBbEM7QUFBNEMsZUFBTyxFQUFFSixVQUFyRDtBQUFBLGtCQUNHRztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFO0FBQVEsaUJBQVMsRUFBRyxHQUFFQyxtRUFBWSxTQUFsQztBQUE0QyxlQUFPLEVBQUVILFVBQXJEO0FBQUEsa0JBQ0dDO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQTFCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFDRDtBQUVEVixRQUFRLENBQUNpQixTQUFULEdBQXFCO0FBQ25CaEIsVUFBUSxFQUFFaUIsMkRBQUEsQ0FBb0IsQ0FDNUJBLHlEQUFBLENBQWtCQSx3REFBbEIsQ0FENEIsRUFFNUJBLHdEQUY0QixDQUFwQixFQUdQQyxVQUpnQjtBQUtuQmpCLE9BQUssRUFBRWdCLDBEQUxZO0FBTW5CZixNQUFJLEVBQUVlLDBEQUFnQkU7QUFOSCxDQUFyQjtBQVNBcEIsUUFBUSxDQUFDcUIsWUFBVCxHQUF3QjtBQUN0Qm5CLE9BQUssRUFBRSxHQURlO0FBRXRCQyxNQUFJLEVBQUU7QUFGZ0IsQ0FBeEIiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9DYXJvdXNlbC5tb2R1bGUuc2Nzc1wiO1xuaW1wb3J0IHVzZVRyYW5zaXRpb24gZnJvbSBcIi4vdXNlVHJhbnNpdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJvdXNlbCh7IGNoaWxkcmVuLCB3aWR0aCwgdW5pdCB9KSB7XG4gIC8vIGhlcmUgd2UgZXh0cmFjdGVkIHRoZSBjYXJvdXNlbCBmdW5jdGlvbmFsaXR5IGludG8gaXRzIG93biBob29rXG4gIGNvbnN0IHsgdHJhbnNsYXRlLCBpdGVtcywgc2V0QWN0aW9uIH0gPSB1c2VUcmFuc2l0aW9uKHdpZHRoLCBjaGlsZHJlbik7XG5cbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHNldEFjdGlvbihcIm5leHRcIik7XG4gIGNvbnN0IGhhbmRsZVByZXYgPSAoKSA9PiBzZXRBY3Rpb24oXCJwcmV2XCIpO1xuICBjb25zdCBwcmV2VGV4dCA9IFwiPCBwcmV2XCI7XG4gIGNvbnN0IG5leHRUZXh0ID0gXCJuZXh0ID5cIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnBhcmVudH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHdpZHRoOiBgJHt3aWR0aH0ke3VuaXR9YCxcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5uZXJ9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aCAqIGl0ZW1zLmxlbmd0aH0ke3VuaXR9YCxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVgoLSR7dHJhbnNsYXRlfSR7dW5pdH0pYCxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfVxuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt3aWR0aH0ke3VuaXR9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAge2l0ZW19XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udHJvbHN9PlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5leHR9IGJ1dHRvbmB9IG9uQ2xpY2s9e2hhbmRsZU5leHR9PlxuICAgICAgICAgIHtuZXh0VGV4dH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtgJHtzdHlsZXMucHJldn0gYnV0dG9uYH0gb25DbGljaz17aGFuZGxlUHJldn0+XG4gICAgICAgICAge3ByZXZUZXh0fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5DYXJvdXNlbC5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMubm9kZSksXG4gICAgUHJvcFR5cGVzLm5vZGUsXG4gIF0pLmlzUmVxdWlyZWQsXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICB1bml0OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuQ2Fyb3VzZWwuZGVmYXVsdFByb3BzID0ge1xuICB3aWR0aDogMzUwLFxuICB1bml0OiBcInB4XCIsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Carousel/index.js\n");

/***/ }),

/***/ "./components/Carousel/useTransition.js":
/*!**********************************************!*\
  !*** ./components/Carousel/useTransition.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ useTransition; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // this function works as our way to control the animation speed\n\nfunction getNextTransition(width, index, translate, direction, setTranslate) {\n  const to = width * (index + (direction === \"next\" ? 1 : -1)); // within half the width, slow down\n\n  if (to - translate < width / 2 && direction === \"next\" || to - translate > -(width / 2) && direction === \"prev\") {\n    setTranslate(direction === \"next\" ? translate + 1 : translate - 1);\n  }\n\n  setTranslate(direction === \"next\" ? translate + 2 : translate - 2);\n}\n\nfunction useTransition(width, children) {\n  const len = children.length; // declare state variables\n\n  const {\n    0: index,\n    1: setIndex\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);\n  const {\n    0: translate,\n    1: setTranslate\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(width);\n  const {\n    0: action,\n    1: setAction\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({\n    lastAction: \"\",\n    currentAction: \"\"\n  });\n  const {\n    0: items,\n    1: setItems\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([children[len - 1], ...children]);\n\n  const setNextAction = currentAction => {\n    setAction({\n      lastAction: action.currentAction,\n      currentAction\n    });\n  }; // this effect hook will be triggered every time the \"translate variable will change\"\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // if the transition has not completed, continue with transition\n    if (translate < (index + 1) * width && action.currentAction === \"next\" || translate > (index - 1) * width && action.currentAction === \"prev\") {\n      getNextTransition(width, index, translate, action.currentAction, setTranslate);\n    } else if (action.currentAction !== \"\") {\n      // otherwise set the next action to be ''\n      setNextAction(\"\");\n    }\n  }, [translate]); // this effect hook will be triggered every time the action object changes.\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    // if we click next when we are at the end of our carousel.\n    if (action.currentAction === \"next\" && index + 1 > len) {\n      // add the first item to the end of the array\n      setItems([children[len - 1], ...children, children[0]]); // start transition\n\n      setTranslate(translate + 1); // if we clicked next\n    } else if (action.currentAction === \"next\") {\n      // start transition\n      setTranslate(translate + 1); // if we clicked prev\n    } else if (action.currentAction === \"prev\") {\n      // start transition\n      setTranslate(translate - 1); // if we have gone past the last item (and onto the extra one)\n    } else if (index + 1 > len && action.lastAction === \"next\") {\n      // reset items to initial state\n      setItems([children[len - 1], ...children]); // set translate to the 1 index of the array\n\n      setTranslate(width); // and set the current index to one.\n\n      setIndex(1); // if we reached the first (duplicate) item in the array and want to go back\n    } else if (index - 1 === 0 && action.lastAction === \"prev\") {\n      // set index to last item in array\n      setIndex(len); // set translate to last item in array\n\n      setTranslate(len * width); // if transition next happened\n    } else if (action.lastAction === \"next\") {\n      // update index\n      setIndex(index + 1); // if transition prev happened\n    } else if (action.lastAction === \"prev\") {\n      // update index\n      setIndex(index - 1);\n    }\n  }, [action]); // return all variables to be used with the hook.\n\n  return {\n    index,\n    translate,\n    setIndex,\n    setTranslate,\n    items,\n    setAction: setNextAction\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVXYWxraW5nTWVuLy4vY29tcG9uZW50cy9DYXJvdXNlbC91c2VUcmFuc2l0aW9uLmpzPzZjMmIiXSwibmFtZXMiOlsiZ2V0TmV4dFRyYW5zaXRpb24iLCJ3aWR0aCIsImluZGV4IiwidHJhbnNsYXRlIiwiZGlyZWN0aW9uIiwic2V0VHJhbnNsYXRlIiwidG8iLCJ1c2VUcmFuc2l0aW9uIiwiY2hpbGRyZW4iLCJsZW4iLCJsZW5ndGgiLCJzZXRJbmRleCIsInVzZVN0YXRlIiwiYWN0aW9uIiwic2V0QWN0aW9uIiwibGFzdEFjdGlvbiIsImN1cnJlbnRBY3Rpb24iLCJpdGVtcyIsInNldEl0ZW1zIiwic2V0TmV4dEFjdGlvbiIsInVzZUVmZmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0NBRUE7O0FBQ0EsU0FBU0EsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDQyxLQUFsQyxFQUF5Q0MsU0FBekMsRUFBb0RDLFNBQXBELEVBQStEQyxZQUEvRCxFQUE2RTtBQUMzRSxRQUFNQyxFQUFFLEdBQUdMLEtBQUssSUFBSUMsS0FBSyxJQUFJRSxTQUFTLEtBQUssTUFBZCxHQUF1QixDQUF2QixHQUEyQixDQUFDLENBQWhDLENBQVQsQ0FBaEIsQ0FEMkUsQ0FHM0U7O0FBQ0EsTUFDR0UsRUFBRSxHQUFHSCxTQUFMLEdBQWlCRixLQUFLLEdBQUcsQ0FBekIsSUFBOEJHLFNBQVMsS0FBSyxNQUE3QyxJQUNDRSxFQUFFLEdBQUdILFNBQUwsR0FBaUIsRUFBRUYsS0FBSyxHQUFHLENBQVYsQ0FBakIsSUFBaUNHLFNBQVMsS0FBSyxNQUZsRCxFQUdFO0FBQ0FDLGdCQUFZLENBQUNELFNBQVMsS0FBSyxNQUFkLEdBQXVCRCxTQUFTLEdBQUcsQ0FBbkMsR0FBdUNBLFNBQVMsR0FBRyxDQUFwRCxDQUFaO0FBQ0Q7O0FBRURFLGNBQVksQ0FBQ0QsU0FBUyxLQUFLLE1BQWQsR0FBdUJELFNBQVMsR0FBRyxDQUFuQyxHQUF1Q0EsU0FBUyxHQUFHLENBQXBELENBQVo7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Q0FVLGNBQVEsQ0FBQyxDQUFELENBQVIsQ0FOMEQsQ0FRMUQ7QUFDRCxLQVRNLE1BU0EsSUFBSVQsS0FBSyxHQUFHLENBQVIsS0FBYyxDQUFkLElBQW1CVyxNQUFNLENBQUNFLFVBQVAsS0FBc0IsTUFBN0MsRUFBcUQ7QUFDMUQ7QUFDQUosY0FBUSxDQUFDRixHQUFELENBQVIsQ0FGMEQsQ0FHMUQ7O0FBQ0FKLGtCQUFZLENBQUNJLEdBQUcsR0FBR1IsS0FBUCxDQUFaLENBSjBELENBTTFEO0FBQ0QsS0FQTSxNQU9BLElBQUlZLE1BQU0sQ0FBQ0UsVUFBUCxLQUFzQixNQUExQixFQUFrQztBQUN2QztBQUNBSixjQUFRLENBQUNULEtBQUssR0FBRyxDQUFULENBQVIsQ0FGdUMsQ0FJdkM7QUFDRCxLQUxNLE1BS0EsSUFBSVcsTUFBTSxDQUFDRSxVQUFQLEtBQXNCLE1BQTFCLEVBQWtDO0FBQ3ZDO0FBQ0FKLGNBQVEsQ0FBQ1QsS0FBSyxHQUFHLENBQVQsQ0FBUjtBQUNEO0FBQ0YsR0E1Q1EsRUE0Q04sQ0FBQ1csTUFBRCxDQTVDTSxDQUFULENBcENxRCxDQWtGckQ7O0FBQ0EsU0FBTztBQUNMWCxTQURLO0FBRUxDLGFBRks7QUFHTFEsWUFISztBQUlMTixnQkFKSztBQUtMWSxTQUxLO0FBTUxILGFBQVMsRUFBRUs7QUFOTixHQUFQO0FBUUQiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsL3VzZVRyYW5zaXRpb24uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbi8vIHRoaXMgZnVuY3Rpb24gd29ya3MgYXMgb3VyIHdheSB0byBjb250cm9sIHRoZSBhbmltYXRpb24gc3BlZWRcbmZ1bmN0aW9uIGdldE5leHRUcmFuc2l0aW9uKHdpZHRoLCBpbmRleCwgdHJhbnNsYXRlLCBkaXJlY3Rpb24sIHNldFRyYW5zbGF0ZSkge1xuICBjb25zdCB0byA9IHdpZHRoICogKGluZGV4ICsgKGRpcmVjdGlvbiA9PT0gXCJuZXh0XCIgPyAxIDogLTEpKTtcblxuICAvLyB3aXRoaW4gaGFsZiB0aGUgd2lkdGgsIHNsb3cgZG93blxuICBpZiAoXG4gICAgKHRvIC0gdHJhbnNsYXRlIDwgd2lkdGggLyAyICYmIGRpcmVjdGlvbiA9PT0gXCJuZXh0XCIpIHx8XG4gICAgKHRvIC0gdHJhbnNsYXRlID4gLSh3aWR0aCAvIDIpICYmIGRpcmVjdGlvbiA9PT0gXCJwcmV2XCIpXG4gICkge1xuICAgIHNldFRyYW5zbGF0ZShkaXJlY3Rpb24gPT09IFwibmV4dFwiID8gdHJhbnNsYXRlICsgMSA6IHRyYW5zbGF0ZSAtIDEpO1xuICB9XG5cbiAgc2V0VHJhbnNsYXRlKGRpcmVjdGlvbiA9PT0gXCJuZXh0XCIgPyB0cmFuc2xhdGUgKyAyIDogdHJhbnNsYXRlIC0gMik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRyYW5zaXRpb24od2lkdGgsIGNoaWxkcmVuKSB7XG4gIGNvbnN0IGxlbiA9IGNoaWxkcmVuLmxlbmd0aDtcblxuICAvLyBkZWNsYXJlIHN0YXRlIHZhcmlhYmxlc1xuICBjb25zdCBbaW5kZXgsIHNldEluZGV4XSA9IHVzZVN0YXRlKDEpO1xuICBjb25zdCBbdHJhbnNsYXRlLCBzZXRUcmFuc2xhdGVdID0gdXNlU3RhdGUod2lkdGgpO1xuICBjb25zdCBbYWN0aW9uLCBzZXRBY3Rpb25dID0gdXNlU3RhdGUoeyBsYXN0QWN0aW9uOiBcIlwiLCBjdXJyZW50QWN0aW9uOiBcIlwiIH0pO1xuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IHVzZVN0YXRlKFtjaGlsZHJlbltsZW4gLSAxXSwgLi4uY2hpbGRyZW5dKTtcbiAgY29uc3Qgc2V0TmV4dEFjdGlvbiA9IChjdXJyZW50QWN0aW9uKSA9PiB7XG4gICAgc2V0QWN0aW9uKHtcbiAgICAgIGxhc3RBY3Rpb246IGFjdGlvbi5jdXJyZW50QWN0aW9uLFxuICAgICAgY3VycmVudEFjdGlvbixcbiAgICB9KTtcbiAgfTtcblxuICAvLyB0aGlzIGVmZmVjdCBob29rIHdpbGwgYmUgdHJpZ2dlcmVkIGV2ZXJ5IHRpbWUgdGhlIFwidHJhbnNsYXRlIHZhcmlhYmxlIHdpbGwgY2hhbmdlXCJcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBpZiB0aGUgdHJhbnNpdGlvbiBoYXMgbm90IGNvbXBsZXRlZCwgY29udGludWUgd2l0aCB0cmFuc2l0aW9uXG4gICAgaWYgKFxuICAgICAgKHRyYW5zbGF0ZSA8IChpbmRleCArIDEpICogd2lkdGggJiYgYWN0aW9uLmN1cnJlbnRBY3Rpb24gPT09IFwibmV4dFwiKSB8fFxuICAgICAgKHRyYW5zbGF0ZSA+IChpbmRleCAtIDEpICogd2lkdGggJiYgYWN0aW9uLmN1cnJlbnRBY3Rpb24gPT09IFwicHJldlwiKVxuICAgICkge1xuICAgICAgZ2V0TmV4dFRyYW5zaXRpb24oXG4gICAgICAgIHdpZHRoLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgdHJhbnNsYXRlLFxuICAgICAgICBhY3Rpb24uY3VycmVudEFjdGlvbixcbiAgICAgICAgc2V0VHJhbnNsYXRlXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoYWN0aW9uLmN1cnJlbnRBY3Rpb24gIT09IFwiXCIpIHtcbiAgICAgIC8vIG90aGVyd2lzZSBzZXQgdGhlIG5leHQgYWN0aW9uIHRvIGJlICcnXG4gICAgICBzZXROZXh0QWN0aW9uKFwiXCIpO1xuICAgIH1cbiAgfSwgW3RyYW5zbGF0ZV0pO1xuXG4gIC8vIHRoaXMgZWZmZWN0IGhvb2sgd2lsbCBiZSB0cmlnZ2VyZWQgZXZlcnkgdGltZSB0aGUgYWN0aW9uIG9iamVjdCBjaGFuZ2VzLlxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGlmIHdlIGNsaWNrIG5leHQgd2hlbiB3ZSBhcmUgYXQgdGhlIGVuZCBvZiBvdXIgY2Fyb3VzZWwuXG4gICAgaWYgKGFjdGlvbi5jdXJyZW50QWN0aW9uID09PSBcIm5leHRcIiAmJiBpbmRleCArIDEgPiBsZW4pIHtcbiAgICAgIC8vIGFkZCB0aGUgZmlyc3QgaXRlbSB0byB0aGUgZW5kIG9mIHRoZSBhcnJheVxuICAgICAgc2V0SXRlbXMoW2NoaWxkcmVuW2xlbiAtIDFdLCAuLi5jaGlsZHJlbiwgY2hpbGRyZW5bMF1dKTtcbiAgICAgIC8vIHN0YXJ0IHRyYW5zaXRpb25cbiAgICAgIHNldFRyYW5zbGF0ZSh0cmFuc2xhdGUgKyAxKTtcblxuICAgICAgLy8gaWYgd2UgY2xpY2tlZCBuZXh0XG4gICAgfSBlbHNlIGlmIChhY3Rpb24uY3VycmVudEFjdGlvbiA9PT0gXCJuZXh0XCIpIHtcbiAgICAgIC8vIHN0YXJ0IHRyYW5zaXRpb25cbiAgICAgIHNldFRyYW5zbGF0ZSh0cmFuc2xhdGUgKyAxKTtcblxuICAgICAgLy8gaWYgd2UgY2xpY2tlZCBwcmV2XG4gICAgfSBlbHNlIGlmIChhY3Rpb24uY3VycmVudEFjdGlvbiA9PT0gXCJwcmV2XCIpIHtcbiAgICAgIC8vIHN0YXJ0IHRyYW5zaXRpb25cbiAgICAgIHNldFRyYW5zbGF0ZSh0cmFuc2xhdGUgLSAxKTtcblxuICAgICAgLy8gaWYgd2UgaGF2ZSBnb25lIHBhc3QgdGhlIGxhc3QgaXRlbSAoYW5kIG9udG8gdGhlIGV4dHJhIG9uZSlcbiAgICB9IGVsc2UgaWYgKGluZGV4ICsgMSA+IGxlbiAmJiBhY3Rpb24ubGFzdEFjdGlvbiA9PT0gXCJuZXh0XCIpIHtcbiAgICAgIC8vIHJlc2V0IGl0ZW1zIHRvIGluaXRpYWwgc3RhdGVcbiAgICAgIHNldEl0ZW1zKFtjaGlsZHJlbltsZW4gLSAxXSwgLi4uY2hpbGRyZW5dKTtcbiAgICAgIC8vIHNldCB0cmFuc2xhdGUgdG8gdGhlIDEgaW5kZXggb2YgdGhlIGFycmF5XG4gICAgICBzZXRUcmFuc2xhdGUod2lkdGgpO1xuICAgICAgLy8gYW5kIHNldCB0aGUgY3VycmVudCBpbmRleCB0byBvbmUuXG4gICAgICBzZXRJbmRleCgxKTtcblxuICAgICAgLy8gaWYgd2UgcmVhY2hlZCB0aGUgZmlyc3QgKGR1cGxpY2F0ZSkgaXRlbSBpbiB0aGUgYXJyYXkgYW5kIHdhbnQgdG8gZ28gYmFja1xuICAgIH0gZWxzZSBpZiAoaW5kZXggLSAxID09PSAwICYmIGFjdGlvbi5sYXN0QWN0aW9uID09PSBcInByZXZcIikge1xuICAgICAgLy8gc2V0IGluZGV4IHRvIGxhc3QgaXRlbSBpbiBhcnJheVxuICAgICAgc2V0SW5kZXgobGVuKTtcbiAgICAgIC8vIHNldCB0cmFuc2xhdGUgdG8gbGFzdCBpdGVtIGluIGFycmF5XG4gICAgICBzZXRUcmFuc2xhdGUobGVuICogd2lkdGgpO1xuXG4gICAgICAvLyBpZiB0cmFuc2l0aW9uIG5leHQgaGFwcGVuZWRcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi5sYXN0QWN0aW9uID09PSBcIm5leHRcIikge1xuICAgICAgLy8gdXBkYXRlIGluZGV4XG4gICAgICBzZXRJbmRleChpbmRleCArIDEpO1xuXG4gICAgICAvLyBpZiB0cmFuc2l0aW9uIHByZXYgaGFwcGVuZWRcbiAgICB9IGVsc2UgaWYgKGFjdGlvbi5sYXN0QWN0aW9uID09PSBcInByZXZcIikge1xuICAgICAgLy8gdXBkYXRlIGluZGV4XG4gICAgICBzZXRJbmRleChpbmRleCAtIDEpO1xuICAgIH1cbiAgfSwgW2FjdGlvbl0pO1xuXG4gIC8vIHJldHVybiBhbGwgdmFyaWFibGVzIHRvIGJlIHVzZWQgd2l0aCB0aGUgaG9vay5cbiAgcmV0dXJuIHtcbiAgICBpbmRleCxcbiAgICB0cmFuc2xhdGUsXG4gICAgc2V0SW5kZXgsXG4gICAgc2V0VHJhbnNsYXRlLFxuICAgIGl0ZW1zLFxuICAgIHNldEFjdGlvbjogc2V0TmV4dEFjdGlvbixcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel/useTransition.js\n");

/***/ }),

/***/ "./pages/testimonials.js":
/*!*******************************!*\
  !*** ./pages/testimonials.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Carousel */ \"./components/Carousel/index.js\");\n\nvar _jsxFileName = \"/Users/carlyhayter/Documents/Coding/neverDieYoung/pages/testimonials.js\";\n\nconst testimonials = [{\n  name: \"Danny Reyes/Percussionist, Zach Brown Band\",\n  text: \" The music of James Taylor presented with authenticity and musical brilliance. I’m a big fan!\"\n}, {\n  name: \"John Raymond/Guitarist, Kenny G\",\n  text: \"The Real Deal\"\n}, {\n  name: \"Damian DeRobbio, Belly Up Tavern, Solana Beach, California\",\n  text: \"The Walking Man Tribute is an absolute pleasure to witness. Musical Mastery of some of America’s finest songs.\"\n}, {\n  name: \"Greg Howard, CEO, Carecraft\",\n  text: \"The show was flawless. Each song sounds true to the original; faithfully reproduced from beginning to end. Amazing, I would hire them again without hesitation, and plan to do so.\"\n}, {\n  name: \"Raffi Simonian\",\n  text: \"You have got to see Never Die Young (the San Diego based James Taylor tribute band). Their performance at the Belly Up in May 2019 was stunningly good. This simply amazing band covers the folk-rock songs from Taylor’s impactful 50 year career that are both gentle & sweet as well as uplifting. If you want to see a great show that will trigger your most beautiful and emotional nostalgic memories, do not miss Never Die Young!\"\n}];\n\nconst Home = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n  className: \"page-content\",\n  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"page-title\",\n    children: \"Testimonials\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n    className: \"content\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"tile testimonial-tile\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Carousel__WEBPACK_IMPORTED_MODULE_1__.default, {\n        children: testimonials.map(testimonial => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"testimonial-container\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"testing\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n              className: \"testimonial-person\",\n              id: \"unknown\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 17\n            }, undefined)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 33,\n            columnNumber: 15\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-tile-text-emp testimonial-text testimonial-text\",\n            children: [testimonial.text, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              className: \"text-tile-text-minor testimonial-text\",\n              children: [\"- \", testimonial.name]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 17\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 15\n          }, undefined)]\n        }, testimonial.name, true, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true, {\n  fileName: _jsxFileName,\n  lineNumber: 26,\n  columnNumber: 3\n}, undefined);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVXYWxraW5nTWVuLy4vcGFnZXMvdGVzdGltb25pYWxzLmpzP2E2ZDEiXSwibmFtZXMiOlsidGVzdGltb25pYWxzIiwibmFtZSIsInRleHQiLCJIb21lIiwibWFwIiwidGVzdGltb25pYWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsWUFBWSxHQUFHLENBQ25CO0FBQ0VDLE1BQUksRUFBRSw0Q0FEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQURtQixFQUtuQjtBQUNFRCxNQUFJLEVBQUUsaUNBRFI7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FMbUIsRUFTbkI7QUFDRUQsTUFBSSxFQUFFLDREQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBVG1CLEVBYW5CO0FBQ0VELE1BQUksRUFBRSw2QkFEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQWJtQixFQWlCbkI7QUFDRUQsTUFBSSxFQUFFLGdCQURSO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBakJtQixDQUFyQjs7QUF1QkEsTUFBTUMsSUFBSSxHQUFHLG1CQUNYO0FBQUssV0FBUyxFQUFDLGNBQWY7QUFBQSwwQkFDRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUEsMkJBQ0U7QUFBSyxlQUFTLEVBQUMsdUJBQWY7QUFBQSw2QkFDRSw4REFBQyx5REFBRDtBQUFBLGtCQUNHSCxZQUFZLENBQUNJLEdBQWIsQ0FBa0JDLFdBQUQsaUJBQ2hCO0FBQTRCLG1CQUFTLEVBQUMsdUJBQXRDO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFNBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsb0JBQWY7QUFBb0MsZ0JBQUUsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUlFO0FBQUsscUJBQVMsRUFBQyxzREFBZjtBQUFBLHVCQUNHQSxXQUFXLENBQUNILElBRGYsZUFFRTtBQUFHLHVCQUFTLEVBQUMsdUNBQWI7QUFBQSwrQkFDS0csV0FBVyxDQUFDSixJQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGO0FBQUEsV0FBVUksV0FBVyxDQUFDSixJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7O0FBd0JBLCtEQUFlRSxJQUFmIiwiZmlsZSI6Ii4vcGFnZXMvdGVzdGltb25pYWxzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcm91c2VsIGZyb20gXCIuLi9jb21wb25lbnRzL0Nhcm91c2VsXCI7XG5jb25zdCB0ZXN0aW1vbmlhbHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIkRhbm55IFJleWVzL1BlcmN1c3Npb25pc3QsIFphY2ggQnJvd24gQmFuZFwiLFxuICAgIHRleHQ6IFwiIFRoZSBtdXNpYyBvZiBKYW1lcyBUYXlsb3IgcHJlc2VudGVkIHdpdGggYXV0aGVudGljaXR5IGFuZCBtdXNpY2FsIGJyaWxsaWFuY2UuIEnigJltIGEgYmlnIGZhbiFcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSm9obiBSYXltb25kL0d1aXRhcmlzdCwgS2VubnkgR1wiLFxuICAgIHRleHQ6IFwiVGhlIFJlYWwgRGVhbFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJEYW1pYW4gRGVSb2JiaW8sIEJlbGx5IFVwIFRhdmVybiwgU29sYW5hIEJlYWNoLCBDYWxpZm9ybmlhXCIsXG4gICAgdGV4dDogXCJUaGUgV2Fsa2luZyBNYW4gVHJpYnV0ZSBpcyBhbiBhYnNvbHV0ZSBwbGVhc3VyZSB0byB3aXRuZXNzLiBNdXNpY2FsIE1hc3Rlcnkgb2Ygc29tZSBvZiBBbWVyaWNh4oCZcyBmaW5lc3Qgc29uZ3MuXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdyZWcgSG93YXJkLCBDRU8sIENhcmVjcmFmdFwiLFxuICAgIHRleHQ6IFwiVGhlIHNob3cgd2FzIGZsYXdsZXNzLiBFYWNoIHNvbmcgc291bmRzIHRydWUgdG8gdGhlIG9yaWdpbmFsOyBmYWl0aGZ1bGx5IHJlcHJvZHVjZWQgZnJvbSBiZWdpbm5pbmcgdG8gZW5kLiBBbWF6aW5nLCBJIHdvdWxkIGhpcmUgdGhlbSBhZ2FpbiB3aXRob3V0IGhlc2l0YXRpb24sIGFuZCBwbGFuIHRvIGRvIHNvLlwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJSYWZmaSBTaW1vbmlhblwiLFxuICAgIHRleHQ6IFwiWW91IGhhdmUgZ290IHRvIHNlZSBOZXZlciBEaWUgWW91bmcgKHRoZSBTYW4gRGllZ28gYmFzZWQgSmFtZXMgVGF5bG9yIHRyaWJ1dGUgYmFuZCkuIFRoZWlyIHBlcmZvcm1hbmNlIGF0IHRoZSBCZWxseSBVcCBpbiBNYXkgMjAxOSB3YXMgc3R1bm5pbmdseSBnb29kLiBUaGlzIHNpbXBseSBhbWF6aW5nIGJhbmQgY292ZXJzIHRoZSBmb2xrLXJvY2sgc29uZ3MgZnJvbSBUYXlsb3LigJlzIGltcGFjdGZ1bCA1MCB5ZWFyIGNhcmVlciB0aGF0IGFyZSBib3RoIGdlbnRsZSAmIHN3ZWV0IGFzIHdlbGwgYXMgdXBsaWZ0aW5nLiBJZiB5b3Ugd2FudCB0byBzZWUgYSBncmVhdCBzaG93IHRoYXQgd2lsbCB0cmlnZ2VyIHlvdXIgbW9zdCBiZWF1dGlmdWwgYW5kIGVtb3Rpb25hbCBub3N0YWxnaWMgbWVtb3JpZXMsIGRvIG5vdCBtaXNzIE5ldmVyIERpZSBZb3VuZyFcIixcbiAgfSxcbl07XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1jb250ZW50XCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLXRpdGxlXCI+VGVzdGltb25pYWxzPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbGUgdGVzdGltb25pYWwtdGlsZVwiPlxuICAgICAgICA8Q2Fyb3VzZWw+XG4gICAgICAgICAge3Rlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFsKSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGtleT17dGVzdGltb25pYWwubmFtZX0gY2xhc3NOYW1lPVwidGVzdGltb25pYWwtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGluZ1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVzdGltb25pYWwtcGVyc29uXCIgaWQ9XCJ1bmtub3duXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtdGlsZS10ZXh0LWVtcCB0ZXN0aW1vbmlhbC10ZXh0IHRlc3RpbW9uaWFsLXRleHRcIj5cbiAgICAgICAgICAgICAgICB7dGVzdGltb25pYWwudGV4dH1cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXRpbGUtdGV4dC1taW5vciB0ZXN0aW1vbmlhbC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAtIHt0ZXN0aW1vbmlhbC5uYW1lfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/testimonials.js\n");

/***/ }),

/***/ "./components/Carousel/Carousel.module.scss":
/*!**************************************************!*\
  !*** ./components/Carousel/Carousel.module.scss ***!
  \**************************************************/
/***/ (function(module) {

eval("// Exports\nmodule.exports = {\n\t\"parent\": \"Carousel_parent__3aj3n\",\n\t\"container\": \"Carousel_container__3nMon\",\n\t\"inner\": \"Carousel_inner__1GiQj\",\n\t\"item\": \"Carousel_item__3b9_y\",\n\t\"controls\": \"Carousel_controls__3EN1d\",\n\t\"button\": \"Carousel_button__1TnvE\",\n\t\"next\": \"Carousel_next__2P8Ca Carousel_button__1TnvE\",\n\t\"prev\": \"Carousel_prev__2SHWH Carousel_button__1TnvE\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVXYWxraW5nTWVuLy4vY29tcG9uZW50cy9DYXJvdXNlbC9DYXJvdXNlbC5tb2R1bGUuc2Nzcz8yM2YxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0Nhcm91c2VsL0Nhcm91c2VsLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicGFyZW50XCI6IFwiQ2Fyb3VzZWxfcGFyZW50X18zYWozblwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkNhcm91c2VsX2NvbnRhaW5lcl9fM25Nb25cIixcblx0XCJpbm5lclwiOiBcIkNhcm91c2VsX2lubmVyX18xR2lRalwiLFxuXHRcIml0ZW1cIjogXCJDYXJvdXNlbF9pdGVtX18zYjlfeVwiLFxuXHRcImNvbnRyb2xzXCI6IFwiQ2Fyb3VzZWxfY29udHJvbHNfXzNFTjFkXCIsXG5cdFwiYnV0dG9uXCI6IFwiQ2Fyb3VzZWxfYnV0dG9uX18xVG52RVwiLFxuXHRcIm5leHRcIjogXCJDYXJvdXNlbF9uZXh0X18yUDhDYSBDYXJvdXNlbF9idXR0b25fXzFUbnZFXCIsXG5cdFwicHJldlwiOiBcIkNhcm91c2VsX3ByZXZfXzJTSFdIIENhcm91c2VsX2J1dHRvbl9fMVRudkVcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Carousel/Carousel.module.scss\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/testimonials.js"));
module.exports = __webpack_exports__;

})();