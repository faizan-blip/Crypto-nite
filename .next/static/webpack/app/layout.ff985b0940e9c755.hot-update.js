"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8777d043070a\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/N2FiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjg3NzdkMDQzMDcwYVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/Components/Product.js":
/*!***************************************!*\
  !*** ./src/app/Components/Product.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CircularProgress,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/CircularProgress/CircularProgress.js\");\n/* harmony import */ var _barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CircularProgress,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CircularProgress,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Stack/Stack.js\");\n/* harmony import */ var _barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=Card,CircularProgress,Stack,Typography!=!@mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Card/Card.js\");\n/* harmony import */ var _Context_AppContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Context/AppContext */ \"(app-pages-browser)/./src/app/Context/AppContext.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Product = ()=>{\n    var _productData_quote_USD, _productData_quote, _productData_quote_USD1, _productData_quote1;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname)();\n    const { cryptoData } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_Context_AppContext__WEBPACK_IMPORTED_MODULE_3__.AppContext);\n    const extractId = ()=>{\n        if (router.startsWith(\"/explore/\")) {\n            return router.split(\"/\").pop();\n        }\n        return null;\n    };\n    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [productData, setProductData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const extractedId = extractId();\n        setId(extractedId);\n    }, [\n        router\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (id) {\n            const fetchData = ()=>{\n                const data = cryptoData.find((crypto)=>crypto.id == id);\n                console.log(data);\n                console.log(cryptoData);\n                console.log(id);\n                setProductData(data);\n                setLoading(false);\n            };\n            fetchData();\n        }\n    }, [\n        id,\n        cryptoData\n    ]);\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\Cryptonite\\\\cryptodashboard\\\\src\\\\app\\\\Components\\\\Product.js\",\n        lineNumber: 42,\n        columnNumber: 25\n    }, undefined);\n    if (!productData) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n        children: \"No data found\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\Cryptonite\\\\cryptodashboard\\\\src\\\\app\\\\Components\\\\Product.js\",\n        lineNumber: 44,\n        columnNumber: 30\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            flexDirection: \"row\",\n            gap: \"1em\",\n            height: \"100vh\",\n            flexWrap: {\n                lg: \"nowrap\",\n                xs: \"wrap\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                flexDirection: \"column\",\n                width: {\n                    lg: \"70%\",\n                    xs: \"auto\"\n                },\n                gap: \"1em\",\n                flexGrow: {\n                    lg: \"none\",\n                    xs: \"1\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    sx: {\n                        display: \"flex\",\n                        flexDirection: \"column\"\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            variant: \"h6\",\n                            children: productData.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\Cryptonite\\\\cryptodashboard\\\\src\\\\app\\\\Components\\\\Product.js\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            flexDirection: \"row\",\n                            gap: \"0.5em\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"body1\",\n                                    children: [\n                                        \"Price: $\",\n                                        (_productData_quote = productData.quote) === null || _productData_quote === void 0 ? void 0 : (_productData_quote_USD = _productData_quote.USD) === null || _productData_quote_USD === void 0 ? void 0 : _productData_quote_USD.price.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\Cryptonite\\\\cryptodashboard\\\\src\\\\app\\\\Components\\\\Product.js\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Card_CircularProgress_Stack_Typography_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                    variant: \"body1\",\n                                    children: [\n                                        \"Market Cap: \",\n                                        (_productData_quote1 = productData.quote) === null || _productData_quote1 === void 0 ? void 0 : (_productData_quote_USD1 = _productData_quote1.USD) === null || _productData_quote_USD1 === void 0 ? void 0 : _productData_quote_USD1.market_cap.toFixed(2)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\Cryptonite\\\\cryptodashboard\\\\src\\\\app\\\\Components\\\\Product.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\Cryptonite\\\\cryptodashboard\\\\src\\\\app\\\\Components\\\\Product.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\Cryptonite\\\\cryptodashboard\\\\src\\\\app\\\\Components\\\\Product.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\Cryptonite\\\\cryptodashboard\\\\src\\\\app\\\\Components\\\\Product.js\",\n                lineNumber: 50,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\OneDrive\\\\Desktop\\\\Cryptonite\\\\cryptodashboard\\\\src\\\\app\\\\Components\\\\Product.js\",\n            lineNumber: 49,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(Product, \"qjwPa4XY99uKoPZfyUZE43HQiwY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.usePathname\n    ];\n});\n_c = Product;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Product);\nvar _c;\n$RefreshReg$(_c, \"Product\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQ29tcG9uZW50cy9Qcm9kdWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUM4QztBQUNVO0FBQ2tCO0FBQ3ZCO0FBRW5ELE1BQU1TLFVBQVU7UUErQ2lDQyx3QkFBQUEsb0JBQ0lBLHlCQUFBQTs7SUEvQ2pELE1BQU1DLFNBQVNYLDREQUFXQTtJQUMxQixNQUFNLEVBQUVZLFVBQVUsRUFBRSxHQUFHWCxpREFBVUEsQ0FBQ08sMkRBQVVBO0lBRTVDLE1BQU1LLFlBQVk7UUFDZCxJQUFJRixPQUFPRyxVQUFVLENBQUMsY0FBYztZQUNoQyxPQUFPSCxPQUFPSSxLQUFLLENBQUMsS0FBS0MsR0FBRztRQUNoQztRQUNBLE9BQU87SUFDWDtJQUVBLE1BQU0sQ0FBQ0MsSUFBSUMsTUFBTSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUM3QixNQUFNLENBQUNPLGFBQWFTLGVBQWUsR0FBR2hCLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2lCLFNBQVNDLFdBQVcsR0FBR2xCLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1vQixjQUFjVDtRQUNwQkssTUFBTUk7SUFDVixHQUFHO1FBQUNYO0tBQU87SUFFWFQsZ0RBQVNBLENBQUM7UUFDTixJQUFJZSxJQUFJO1lBQ0osTUFBTU0sWUFBWTtnQkFDZCxNQUFNQyxPQUFPWixXQUFXYSxJQUFJLENBQUNDLENBQUFBLFNBQVVBLE9BQU9ULEVBQUUsSUFBSUE7Z0JBQ3BEVSxRQUFRQyxHQUFHLENBQUNKO2dCQUNaRyxRQUFRQyxHQUFHLENBQUNoQjtnQkFDWmUsUUFBUUMsR0FBRyxDQUFDWDtnQkFDWkUsZUFBZUs7Z0JBQ2ZILFdBQVc7WUFDZjtZQUVBRTtRQUNKO0lBQ0osR0FBRztRQUFDTjtRQUFJTDtLQUFXO0lBRW5CLElBQUlRLFNBQVMscUJBQU8sOERBQUNkLGtIQUFnQkE7Ozs7O0lBRXJDLElBQUksQ0FBQ0ksYUFBYSxxQkFBTyw4REFBQ0wsa0hBQVVBO2tCQUFDOzs7Ozs7SUFFckMscUJBRUk7a0JBQ0EsNEVBQUNFLGtIQUFLQTtZQUFDc0IsZUFBYztZQUFNQyxLQUFJO1lBQU1DLFFBQU87WUFBUUMsVUFBVTtnQkFBQ0MsSUFBRztnQkFBV0MsSUFBRztZQUFNO3NCQUN0Riw0RUFBQzNCLGtIQUFLQTtnQkFBQ3NCLGVBQWM7Z0JBQVNNLE9BQU87b0JBQUNGLElBQUc7b0JBQVFDLElBQUc7Z0JBQU07Z0JBQUdKLEtBQUk7Z0JBQU1NLFVBQVU7b0JBQUNILElBQUc7b0JBQVNDLElBQUc7Z0JBQUc7MEJBQ3BHLDRFQUFDOUIsa0hBQUlBO29CQUFDaUMsSUFBSTt3QkFBQ0MsU0FBUTt3QkFBU1QsZUFBYztvQkFBUTs7c0NBQzlDLDhEQUFDeEIsa0hBQVVBOzRCQUFDa0MsU0FBUTtzQ0FBTTdCLFlBQVk4QixJQUFJOzs7Ozs7c0NBQzFDLDhEQUFDakMsa0hBQUtBOzRCQUFDc0IsZUFBYzs0QkFBTUMsS0FBSTs7OENBQy9CLDhEQUFDekIsa0hBQVVBO29DQUFDa0MsU0FBUTs7d0NBQVE7eUNBQVM3QixxQkFBQUEsWUFBWStCLEtBQUssY0FBakIvQiwwQ0FBQUEseUJBQUFBLG1CQUFtQmdDLEdBQUcsY0FBdEJoQyw2Q0FBQUEsdUJBQXdCaUMsS0FBSyxDQUFDQyxPQUFPLENBQUM7Ozs7Ozs7OENBQzNFLDhEQUFDdkMsa0hBQVVBO29DQUFDa0MsU0FBUTs7d0NBQVE7eUNBQWE3QixzQkFBQUEsWUFBWStCLEtBQUssY0FBakIvQiwyQ0FBQUEsMEJBQUFBLG9CQUFtQmdDLEdBQUcsY0FBdEJoQyw4Q0FBQUEsd0JBQXdCbUMsVUFBVSxDQUFDRCxPQUFPLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9oRztHQXZETW5DOztRQUNhVCx3REFBV0E7OztLQUR4QlM7QUF5RE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Db21wb25lbnRzL1Byb2R1Y3QuanM/NGQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IHsgdXNlUGF0aG5hbWUgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBDYXJkLCBUeXBvZ3JhcGh5LCBDaXJjdWxhclByb2dyZXNzLCBTdGFjayB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnO1xyXG5pbXBvcnQgeyBBcHBDb250ZXh0IH0gZnJvbSAnLi4vQ29udGV4dC9BcHBDb250ZXh0JztcclxuXHJcbmNvbnN0IFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VQYXRobmFtZSgpO1xyXG4gICAgY29uc3QgeyBjcnlwdG9EYXRhIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpOyBcclxuXHJcbiAgICBjb25zdCBleHRyYWN0SWQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJvdXRlci5zdGFydHNXaXRoKCcvZXhwbG9yZS8nKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVyLnNwbGl0KCcvJykucG9wKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBbaWQsIHNldElkXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3Byb2R1Y3REYXRhLCBzZXRQcm9kdWN0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZXh0cmFjdGVkSWQgPSBleHRyYWN0SWQoKTtcclxuICAgICAgICBzZXRJZChleHRyYWN0ZWRJZCk7XHJcbiAgICB9LCBbcm91dGVyXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGNyeXB0b0RhdGEuZmluZChjcnlwdG8gPT4gY3J5cHRvLmlkID09IGlkKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY3J5cHRvRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRQcm9kdWN0RGF0YShkYXRhKTtcclxuICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW2lkLCBjcnlwdG9EYXRhXSk7XHJcblxyXG4gICAgaWYgKGxvYWRpbmcpIHJldHVybiA8Q2lyY3VsYXJQcm9ncmVzcyAvPjtcclxuXHJcbiAgICBpZiAoIXByb2R1Y3REYXRhKSByZXR1cm4gPFR5cG9ncmFwaHk+Tm8gZGF0YSBmb3VuZDwvVHlwb2dyYXBoeT47XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8U3RhY2sgZmxleERpcmVjdGlvbj0ncm93JyBnYXA9XCIxZW1cIiBoZWlnaHQ9JzEwMHZoJyBmbGV4V3JhcD17e2xnOlwibm93cmFwXCIgLCB4czpcIndyYXBcIn19ID5cclxuICAgICAgICA8U3RhY2sgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIHdpZHRoPXt7bGc6XCI3MCVcIiAsIHhzOlwiYXV0b1wifX0gZ2FwPVwiMWVtXCIgZmxleEdyb3c9e3tsZzpcIm5vbmVcIiAsIHhzOlwiMVwifX0+XHJcbiAgICAgICAgPENhcmQgc3g9e3tkaXNwbGF5OlwiZmxleFwiICwgZmxleERpcmVjdGlvbjpcImNvbHVtblwifX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntwcm9kdWN0RGF0YS5uYW1lfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPFN0YWNrIGZsZXhEaXJlY3Rpb249J3JvdycgZ2FwPScwLjVlbSc+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPlByaWNlOiAke3Byb2R1Y3REYXRhLnF1b3RlPy5VU0Q/LnByaWNlLnRvRml4ZWQoMil9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj5NYXJrZXQgQ2FwOiB7cHJvZHVjdERhdGEucXVvdGU/LlVTRD8ubWFya2V0X2NhcC50b0ZpeGVkKDIpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgPC9TdGFjaz5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0O1xyXG4iXSwibmFtZXMiOlsidXNlUGF0aG5hbWUiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiVHlwb2dyYXBoeSIsIkNpcmN1bGFyUHJvZ3Jlc3MiLCJTdGFjayIsIkFwcENvbnRleHQiLCJQcm9kdWN0IiwicHJvZHVjdERhdGEiLCJyb3V0ZXIiLCJjcnlwdG9EYXRhIiwiZXh0cmFjdElkIiwic3RhcnRzV2l0aCIsInNwbGl0IiwicG9wIiwiaWQiLCJzZXRJZCIsInNldFByb2R1Y3REYXRhIiwibG9hZGluZyIsInNldExvYWRpbmciLCJleHRyYWN0ZWRJZCIsImZldGNoRGF0YSIsImRhdGEiLCJmaW5kIiwiY3J5cHRvIiwiY29uc29sZSIsImxvZyIsImZsZXhEaXJlY3Rpb24iLCJnYXAiLCJoZWlnaHQiLCJmbGV4V3JhcCIsImxnIiwieHMiLCJ3aWR0aCIsImZsZXhHcm93Iiwic3giLCJkaXNwbGF5IiwidmFyaWFudCIsIm5hbWUiLCJxdW90ZSIsIlVTRCIsInByaWNlIiwidG9GaXhlZCIsIm1hcmtldF9jYXAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Components/Product.js\n"));

/***/ })

});