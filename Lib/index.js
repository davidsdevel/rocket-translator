(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/cli/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = function () {\n\treturn /[\\u001b\\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;\n};\n\n\n//# sourceURL=webpack:///./node_modules/ansi-regex/index.js?");

/***/ }),

/***/ "./node_modules/cli-color/art.js":
/*!***************************************!*\
  !*** ./node_modules/cli-color/art.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar object        = __webpack_require__(/*! es5-ext/object/valid-object */ \"./node_modules/es5-ext/object/valid-object.js\")\n  , stringifiable = __webpack_require__(/*! es5-ext/object/validate-stringifiable-value */ \"./node_modules/es5-ext/object/validate-stringifiable-value.js\")\n  , forOf         = __webpack_require__(/*! es6-iterator/for-of */ \"./node_modules/es6-iterator/for-of.js\");\n\nmodule.exports = function (text, style) {\n\tvar result = \"\";\n\ttext = stringifiable(text);\n\tobject(style);\n\tforOf(text, function (char) { result += style[char] || char; });\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/art.js?");

/***/ }),

/***/ "./node_modules/cli-color/bare.js":
/*!****************************************!*\
  !*** ./node_modules/cli-color/bare.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d              = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , assign         = __webpack_require__(/*! es5-ext/object/assign */ \"./node_modules/es5-ext/object/assign/index.js\")\n  , forEach        = __webpack_require__(/*! es5-ext/object/for-each */ \"./node_modules/es5-ext/object/for-each.js\")\n  , map            = __webpack_require__(/*! es5-ext/object/map */ \"./node_modules/es5-ext/object/map.js\")\n  , primitiveSet   = __webpack_require__(/*! es5-ext/object/primitive-set */ \"./node_modules/es5-ext/object/primitive-set.js\")\n  , setPrototypeOf = __webpack_require__(/*! es5-ext/object/set-prototype-of */ \"./node_modules/es5-ext/object/set-prototype-of/index.js\")\n  , memoize        = __webpack_require__(/*! memoizee */ \"./node_modules/memoizee/index.js\")\n  , memoizeMethods = __webpack_require__(/*! memoizee/methods */ \"./node_modules/memoizee/methods.js\")\n\n  , sgr = __webpack_require__(/*! ./lib/sgr */ \"./node_modules/cli-color/lib/sgr.js\")\n  , mods = sgr.mods\n\n  , join = Array.prototype.join, defineProperty = Object.defineProperty\n  , max = Math.max, min = Math.min\n  , variantModes = primitiveSet(\"_fg\", \"_bg\")\n  , xtermMatch, getFn;\n\n// Some use cli-color as: console.log(clc.red('Error!'));\n// Which is inefficient as on each call it configures new clc object\n// with memoization we reuse once created object\nvar memoized = memoize(function (scope, mod) {\n\treturn defineProperty(getFn(), \"_cliColorData\", d(assign({}, scope._cliColorData, mod)));\n});\n\nvar proto = Object.create(Function.prototype, assign(map(mods, function (mod) {\n\treturn d.gs(function () { return memoized(this, mod); });\n}), memoizeMethods({\n\t// xterm (255) color\n\txterm: d(function (code) {\n\t\tcode = isNaN(code) ? 255 : min(max(code, 0), 255);\n\t\treturn defineProperty(getFn(), \"_cliColorData\",\n\t\t\td(assign({}, this._cliColorData, {\n\t\t\t\t_fg: [xtermMatch ? xtermMatch[code] : \"38;5;\" + code, 39]\n\t\t\t})));\n\t}),\n\tbgXterm: d(function (code) {\n\t\tcode = isNaN(code) ? 255 : min(max(code, 0), 255);\n\t\treturn defineProperty(getFn(), \"_cliColorData\",\n\t\t\td(assign({}, this._cliColorData, {\n\t\t\t\t_bg: [xtermMatch ? xtermMatch[code] + 10 : \"48;5;\" + code, 49]\n\t\t\t})));\n\t})\n})));\n\nvar getEndRe = memoize(function (code) {\n\treturn new RegExp(\"\\x1b\\\\[\" + code + \"m\", \"g\");\n}, { primitive: true });\n\nif (process.platform === \"win32\") xtermMatch = __webpack_require__(/*! ./lib/xterm-match */ \"./node_modules/cli-color/lib/xterm-match.js\");\n\ngetFn = function () {\n\treturn setPrototypeOf(function self(/* …msg*/) {\n\t\tvar start = \"\", end = \"\", msg = join.call(arguments, \" \"), conf = self._cliColorData\n\t\t  , hasAnsi = sgr.hasCSI(msg);\n\t\tforEach(conf, function (mod, key) {\n\t\t\tend = sgr(mod[1]) + end;\n\t\t\tstart += sgr(mod[0]);\n\t\t\tif (hasAnsi) {\n\t\t\t\tmsg = msg.replace(getEndRe(mod[1]), variantModes[key] ? sgr(mod[0]) : \"\");\n\t\t\t}\n\t\t}, null, true);\n\t\treturn start + msg + end;\n\t}, proto);\n};\n\nmodule.exports = Object.defineProperties(getFn(), {\n\txtermSupported: d(!xtermMatch),\n\t_cliColorData: d(\"\", {})\n});\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/bare.js?");

/***/ }),

/***/ "./node_modules/cli-color/beep.js":
/*!****************************************!*\
  !*** ./node_modules/cli-color/beep.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = \"\\x07\";\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/beep.js?");

/***/ }),

/***/ "./node_modules/cli-color/columns.js":
/*!*******************************************!*\
  !*** ./node_modules/cli-color/columns.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar generate          = __webpack_require__(/*! es5-ext/array/generate */ \"./node_modules/es5-ext/array/generate.js\")\n  , from              = __webpack_require__(/*! es5-ext/array/from */ \"./node_modules/es5-ext/array/from/index.js\")\n  , iterable          = __webpack_require__(/*! es5-ext/iterable/validate-object */ \"./node_modules/es5-ext/iterable/validate-object.js\")\n  , isValue           = __webpack_require__(/*! es5-ext/object/is-value */ \"./node_modules/es5-ext/object/is-value.js\")\n  , stringifiable     = __webpack_require__(/*! es5-ext/object/validate-stringifiable */ \"./node_modules/es5-ext/object/validate-stringifiable.js\")\n  , repeat            = __webpack_require__(/*! es5-ext/string/#/repeat */ \"./node_modules/es5-ext/string/#/repeat/index.js\")\n  , getStrippedLength = __webpack_require__(/*! ./get-stripped-length */ \"./node_modules/cli-color/get-stripped-length.js\");\n\nvar push = Array.prototype.push;\n\nmodule.exports = function (inputRows/*, options*/) {\n\tvar options = Object(arguments[1])\n\t  , colsMeta = []\n\t  , colsOptions = options.columns || []\n\t  , rows = [];\n\n\tfrom(iterable(inputRows), function (row) {\n\t\tvar rowRows = [[]];\n\t\tfrom(iterable(row), function (cellStr, columnIndex) {\n\t\t\tvar cellRows = stringifiable(cellStr).split(\"\\n\");\n\t\t\twhile (cellRows.length > rowRows.length) rowRows.push(generate(columnIndex, \"\"));\n\t\t\tcellRows.forEach(function (cellRow, rowRowIndex) {\n\t\t\t\trowRows[rowRowIndex][columnIndex] = cellRow;\n\t\t\t});\n\t\t});\n\t\tpush.apply(rows, rowRows);\n\t});\n\n\treturn (\n\t\trows\n\t\t\t.map(function (row) {\n\t\t\t\treturn from(iterable(row), function (str, index) {\n\t\t\t\t\tvar col = colsMeta[index], strLength;\n\t\t\t\t\tif (!col) col = colsMeta[index] = { width: 0 };\n\t\t\t\t\tstr = stringifiable(str);\n\t\t\t\t\tstrLength = getStrippedLength(str);\n\t\t\t\t\tif (strLength > col.width) col.width = strLength;\n\t\t\t\t\treturn { str: str, length: strLength };\n\t\t\t\t});\n\t\t\t})\n\t\t\t.map(function (row) {\n\t\t\t\treturn row\n\t\t\t\t\t.map(function (item, index) {\n\t\t\t\t\t\tvar pad, align = \"left\", colOptions = colsOptions && colsOptions[index];\n\t\t\t\t\t\talign = colOptions && colOptions.align === \"right\" ? \"right\" : \"left\";\n\t\t\t\t\t\tpad = repeat.call(\" \", colsMeta[index].width - item.length);\n\t\t\t\t\t\tif (align === \"left\") return item.str + pad;\n\t\t\t\t\t\treturn pad + item.str;\n\t\t\t\t\t})\n\t\t\t\t\t.join(isValue(options.sep) ? options.sep : \" | \");\n\t\t\t})\n\t\t\t.join(\"\\n\") + \"\\n\"\n\t);\n};\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/columns.js?");

/***/ }),

/***/ "./node_modules/cli-color/erase.js":
/*!*****************************************!*\
  !*** ./node_modules/cli-color/erase.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = {\n\tscreen: \"\\x1b[2J\",\n\tscreenLeft: \"\\x1b[1J\",\n\tscreenRight: \"\\x1b[J\",\n\tline: \"\\x1b[2K\",\n\tlineLeft: \"\\x1b[1K\",\n\tlineRight: \"\\x1b[K\"\n};\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/erase.js?");

/***/ }),

/***/ "./node_modules/cli-color/get-stripped-length.js":
/*!*******************************************************!*\
  !*** ./node_modules/cli-color/get-stripped-length.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n * get actual length of ANSI-formatted string\n */\n\nvar strip = __webpack_require__(/*! ./strip */ \"./node_modules/cli-color/strip.js\");\n\nmodule.exports = function (str) {\n\treturn strip(str).length;\n};\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/get-stripped-length.js?");

/***/ }),

/***/ "./node_modules/cli-color/index.js":
/*!*****************************************!*\
  !*** ./node_modules/cli-color/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d = __webpack_require__(/*! d */ \"./node_modules/d/index.js\");\n\nmodule.exports = Object.defineProperties(__webpack_require__(/*! ./bare */ \"./node_modules/cli-color/bare.js\"), {\n\twindowSize: d(__webpack_require__(/*! ./window-size */ \"./node_modules/cli-color/window-size.js\")),\n\terase: d(__webpack_require__(/*! ./erase */ \"./node_modules/cli-color/erase.js\")),\n\tmove: d(__webpack_require__(/*! ./move */ \"./node_modules/cli-color/move.js\")),\n\tbeep: d(__webpack_require__(/*! ./beep */ \"./node_modules/cli-color/beep.js\")),\n\tcolumns: d(__webpack_require__(/*! ./columns */ \"./node_modules/cli-color/columns.js\")),\n\tstrip: d(__webpack_require__(/*! ./strip */ \"./node_modules/cli-color/strip.js\")),\n\tgetStrippedLength: d(__webpack_require__(/*! ./get-stripped-length */ \"./node_modules/cli-color/get-stripped-length.js\")),\n\tslice: d(__webpack_require__(/*! ./slice */ \"./node_modules/cli-color/slice.js\")),\n\tthrobber: d(__webpack_require__(/*! ./throbber */ \"./node_modules/cli-color/throbber.js\")),\n\treset: d(__webpack_require__(/*! ./reset */ \"./node_modules/cli-color/reset.js\")),\n\tart: d(__webpack_require__(/*! ./art */ \"./node_modules/cli-color/art.js\"))\n});\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/index.js?");

/***/ }),

/***/ "./node_modules/cli-color/lib/sgr.js":
/*!*******************************************!*\
  !*** ./node_modules/cli-color/lib/sgr.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/* CSI - control sequence introducer */\n/* SGR - set graphic rendition */\n\nvar assign       = __webpack_require__(/*! es5-ext/object/assign */ \"./node_modules/es5-ext/object/assign/index.js\")\n  , includes     = __webpack_require__(/*! es5-ext/string/#/contains */ \"./node_modules/es5-ext/string/#/contains/index.js\")\n  , forOwn       = __webpack_require__(/*! es5-ext/object/for-each */ \"./node_modules/es5-ext/object/for-each.js\")\n  , onlyKey      = __webpack_require__(/*! es5-ext/object/first-key */ \"./node_modules/es5-ext/object/first-key.js\")\n  , forEachRight = __webpack_require__(/*! es5-ext/array/#/for-each-right */ \"./node_modules/es5-ext/array/#/for-each-right.js\")\n  , uniq         = __webpack_require__(/*! es5-ext/array/#/uniq.js */ \"./node_modules/es5-ext/array/#/uniq.js\");\n\nvar CSI = \"\\x1b[\";\n\nvar sgr = function (code) { return CSI + code + \"m\"; };\n\nsgr.CSI = CSI;\n\nvar mods = assign(\n\t{\n\t\t// Style\n\t\tbold: { _bold: [1, 22] },\n\t\titalic: { _italic: [3, 23] },\n\t\tunderline: { _underline: [4, 24] },\n\t\tblink: { _blink: [5, 25] },\n\t\tinverse: { _inverse: [7, 27] },\n\t\tstrike: { _strike: [9, 29] }\n\n\t\t// Color\n\t},\n\t[\"black\", \"red\", \"green\", \"yellow\", \"blue\", \"magenta\", \"cyan\", \"white\"].reduce(function (\n\t\tobj,\n\t\tcolor,\n\t\tindex\n\t) {\n\t\t// foreground\n\t\tobj[color] = { _fg: [30 + index, 39] };\n\t\tobj[color + \"Bright\"] = { _fg: [90 + index, 39] };\n\n\t\t// background\n\t\tobj[\"bg\" + color[0].toUpperCase() + color.slice(1)] = { _bg: [40 + index, 49] };\n\t\tobj[\"bg\" + color[0].toUpperCase() + color.slice(1) + \"Bright\"] = { _bg: [100 + index, 49] };\n\n\t\treturn obj;\n\t}, {})\n);\n\nsgr.mods = mods;\n\nsgr.openers = {};\nsgr.closers = {};\n\nforOwn(mods, function (mod) {\n\tvar modPair = mod[onlyKey(mod)];\n\n\tsgr.openers[modPair[0]] = modPair;\n\tsgr.closers[modPair[1]] = modPair;\n});\n\nsgr.openStyle = function (openedMods, code) { openedMods.push(sgr.openers[code]); };\n\nsgr.closeStyle = function (openedMods, code) {\n\tforEachRight.call(openedMods, function (modPair, index) {\n\t\tif (modPair[1] === code) {\n\t\t\topenedMods.splice(index, 1);\n\t\t}\n\t});\n};\n\n/* prepend openers */\nsgr.prepend = function (currentMods) {\n\treturn currentMods.map(function (modPair) { return sgr(modPair[0]); });\n};\n\n/* complete non-closed openers with corresponding closers */\nsgr.complete = function (openedMods, closerCodes) {\n\tcloserCodes.forEach(function (code) { sgr.closeStyle(openedMods, code); });\n\n\t// mods must be closed from the last opened to first opened\n\topenedMods = openedMods.reverse();\n\n\topenedMods = openedMods.map(function (modPair) { return modPair[1]; });\n\n\t// one closer can close many openers (31, 32 -> 39)\n\topenedMods = uniq.call(openedMods);\n\n\treturn openedMods.map(sgr);\n};\n\nvar hasCSI = function (str) { return includes.call(str, CSI); };\n\nsgr.hasCSI = hasCSI;\n\nvar extractCode = function (csi) {\n\tvar code = csi.slice(2, -1);\n\tcode = Number(code);\n\treturn code;\n};\n\nsgr.extractCode = extractCode;\n\nmodule.exports = sgr;\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/lib/sgr.js?");

/***/ }),

/***/ "./node_modules/cli-color/lib/xterm-colors.js":
/*!****************************************************!*\
  !*** ./node_modules/cli-color/lib/xterm-colors.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = [\n\t\"000000\", \"800000\", \"008000\", \"808000\", \"000080\", \"800080\", \"008080\", \"c0c0c0\",\n\t\"808080\", \"ff0000\", \"00ff00\", \"ffff00\", \"0000ff\", \"ff00ff\", \"00ffff\", \"ffffff\",\n\n\t\"000000\", \"00005f\", \"000087\", \"0000af\", \"0000d7\", \"0000ff\",\n\t\"005f00\", \"005f5f\", \"005f87\", \"005faf\", \"005fd7\", \"005fff\",\n\t\"008700\", \"00875f\", \"008787\", \"0087af\", \"0087d7\", \"0087ff\",\n\t\"00af00\", \"00af5f\", \"00af87\", \"00afaf\", \"00afd7\", \"00afff\",\n\t\"00d700\", \"00d75f\", \"00d787\", \"00d7af\", \"00d7d7\", \"00d7ff\",\n\t\"00ff00\", \"00ff5f\", \"00ff87\", \"00ffaf\", \"00ffd7\", \"00ffff\",\n\n\t\"5f0000\", \"5f005f\", \"5f0087\", \"5f00af\", \"5f00d7\", \"5f00ff\",\n\t\"5f5f00\", \"5f5f5f\", \"5f5f87\", \"5f5faf\", \"5f5fd7\", \"5f5fff\",\n\t\"5f8700\", \"5f875f\", \"5f8787\", \"5f87af\", \"5f87d7\", \"5f87ff\",\n\t\"5faf00\", \"5faf5f\", \"5faf87\", \"5fafaf\", \"5fafd7\", \"5fafff\",\n\t\"5fd700\", \"5fd75f\", \"5fd787\", \"5fd7af\", \"5fd7d7\", \"5fd7ff\",\n\t\"5fff00\", \"5fff5f\", \"5fff87\", \"5fffaf\", \"5fffd7\", \"5fffff\",\n\n\t\"870000\", \"87005f\", \"870087\", \"8700af\", \"8700d7\", \"8700ff\",\n\t\"875f00\", \"875f5f\", \"875f87\", \"875faf\", \"875fd7\", \"875fff\",\n\t\"878700\", \"87875f\", \"878787\", \"8787af\", \"8787d7\", \"8787ff\",\n\t\"87af00\", \"87af5f\", \"87af87\", \"87afaf\", \"87afd7\", \"87afff\",\n\t\"87d700\", \"87d75f\", \"87d787\", \"87d7af\", \"87d7d7\", \"87d7ff\",\n\t\"87ff00\", \"87ff5f\", \"87ff87\", \"87ffaf\", \"87ffd7\", \"87ffff\",\n\n\t\"af0000\", \"af005f\", \"af0087\", \"af00af\", \"af00d7\", \"af00ff\",\n\t\"af5f00\", \"af5f5f\", \"af5f87\", \"af5faf\", \"af5fd7\", \"af5fff\",\n\t\"af8700\", \"af875f\", \"af8787\", \"af87af\", \"af87d7\", \"af87ff\",\n\t\"afaf00\", \"afaf5f\", \"afaf87\", \"afafaf\", \"afafd7\", \"afafff\",\n\t\"afd700\", \"afd75f\", \"afd787\", \"afd7af\", \"afd7d7\", \"afd7ff\",\n\t\"afff00\", \"afff5f\", \"afff87\", \"afffaf\", \"afffd7\", \"afffff\",\n\n\t\"d70000\", \"d7005f\", \"d70087\", \"d700af\", \"d700d7\", \"d700ff\",\n\t\"d75f00\", \"d75f5f\", \"d75f87\", \"d75faf\", \"d75fd7\", \"d75fff\",\n\t\"d78700\", \"d7875f\", \"d78787\", \"d787af\", \"d787d7\", \"d787ff\",\n\t\"d7af00\", \"d7af5f\", \"d7af87\", \"d7afaf\", \"d7afd7\", \"d7afff\",\n\t\"d7d700\", \"d7d75f\", \"d7d787\", \"d7d7af\", \"d7d7d7\", \"d7d7ff\",\n\t\"d7ff00\", \"d7ff5f\", \"d7ff87\", \"d7ffaf\", \"d7ffd7\", \"d7ffff\",\n\n\t\"ff0000\", \"ff005f\", \"ff0087\", \"ff00af\", \"ff00d7\", \"ff00ff\",\n\t\"ff5f00\", \"ff5f5f\", \"ff5f87\", \"ff5faf\", \"ff5fd7\", \"ff5fff\",\n\t\"ff8700\", \"ff875f\", \"ff8787\", \"ff87af\", \"ff87d7\", \"ff87ff\",\n\t\"ffaf00\", \"ffaf5f\", \"ffaf87\", \"ffafaf\", \"ffafd7\", \"ffafff\",\n\t\"ffd700\", \"ffd75f\", \"ffd787\", \"ffd7af\", \"ffd7d7\", \"ffd7ff\",\n\t\"ffff00\", \"ffff5f\", \"ffff87\", \"ffffaf\", \"ffffd7\", \"ffffff\",\n\n\t\"080808\", \"121212\", \"1c1c1c\", \"262626\", \"303030\", \"3a3a3a\",\n\t\"444444\", \"4e4e4e\", \"585858\", \"626262\", \"6c6c6c\", \"767676\",\n\t\"808080\", \"8a8a8a\", \"949494\", \"9e9e9e\", \"a8a8a8\", \"b2b2b2\",\n\t\"bcbcbc\", \"c6c6c6\", \"d0d0d0\", \"dadada\", \"e4e4e4\", \"eeeeee\"\n];\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/lib/xterm-colors.js?");

/***/ }),

/***/ "./node_modules/cli-color/lib/xterm-match.js":
/*!***************************************************!*\
  !*** ./node_modules/cli-color/lib/xterm-match.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar push = Array.prototype.push\n  , reduce = Array.prototype.reduce\n  , abs = Math.abs\n  , colors\n  , match\n  , result\n  , i;\n\ncolors = __webpack_require__(/*! ./xterm-colors */ \"./node_modules/cli-color/lib/xterm-colors.js\").map(function (color) {\n\treturn {\n\t\tr: parseInt(color.slice(0, 2), 16),\n\t\tg: parseInt(color.slice(2, 4), 16),\n\t\tb: parseInt(color.slice(4), 16)\n\t};\n});\n\nmatch = colors.slice(0, 16);\n\nmodule.exports = result = [];\n\ni = 0;\nwhile (i < 8) {\n\tresult.push(30 + i++);\n}\ni = 0;\nwhile (i < 8) {\n\tresult.push(90 + i++);\n}\npush.apply(\n\tresult,\n\tcolors.slice(16).map(function (data) {\n\t\tvar index, diff = Infinity;\n\t\tmatch.every(function (innerMatch, currentIndex) {\n\t\t\tvar ndiff = reduce.call(\n\t\t\t\t\"rgb\",\n\t\t\t\tfunction (currentDiff, channel) {\n\t\t\t\t\tcurrentDiff += abs(innerMatch[channel] - data[channel]);\n\t\t\t\t\treturn currentDiff;\n\t\t\t\t},\n\t\t\t\t0\n\t\t\t);\n\t\t\tif (ndiff < diff) {\n\t\t\t\tindex = currentIndex;\n\t\t\t\tdiff = ndiff;\n\t\t\t}\n\t\t\treturn ndiff;\n\t\t});\n\t\treturn result[index];\n\t})\n);\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/lib/xterm-match.js?");

/***/ }),

/***/ "./node_modules/cli-color/move.js":
/*!****************************************!*\
  !*** ./node_modules/cli-color/move.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d     = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , trunc = __webpack_require__(/*! es5-ext/math/trunc */ \"./node_modules/es5-ext/math/trunc/index.js\");\n\nvar up, down, right, left, abs = Math.abs, floor = Math.floor, max = Math.max;\n\nvar getMove = function (control) {\n\treturn function (num) {\n\t\tnum = isNaN(num) ? 0 : max(floor(num), 0);\n\t\treturn num ? \"\\x1b[\" + num + control : \"\";\n\t};\n};\n\nmodule.exports = Object.defineProperties(\n\tfunction (x, y) {\n\t\tx = isNaN(x) ? 0 : floor(x);\n\t\ty = isNaN(y) ? 0 : floor(y);\n\t\treturn (x > 0 ? right(x) : left(-x)) + (y > 0 ? down(y) : up(-y));\n\t},\n\t{\n\t\tup: d((up = getMove(\"A\"))),\n\t\tdown: d((down = getMove(\"B\"))),\n\t\tright: d((right = getMove(\"C\"))),\n\t\tleft: d((left = getMove(\"D\"))),\n\t\tto: d(function (x, y) {\n\t\t\tx = isNaN(x) ? 1 : max(floor(x), 0) + 1;\n\t\t\ty = isNaN(y) ? 1 : max(floor(y), 0) + 1;\n\t\t\treturn \"\\x1b[\" + y + \";\" + x + \"H\";\n\t\t}),\n\t\tlines: d(function (n) {\n\t\t\tvar dir;\n\t\t\tn = trunc(n) || 0;\n\t\t\tdir = n >= 0 ? \"E\" : \"F\";\n\t\t\tn = floor(abs(n));\n\t\t\treturn \"\\x1b[\" + n + dir;\n\t\t}),\n\t\ttop: d(\"\\x1b[5000F\"),\n\t\tbottom: d(\"\\x1b[5000B\"),\n\t\tlineBegin: d(\"\\x1b[5000D\"),\n\t\tlineEnd: d(\"\\x1b[5000C\")\n\t}\n);\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/move.js?");

/***/ }),

/***/ "./node_modules/cli-color/reset.js":
/*!*****************************************!*\
  !*** ./node_modules/cli-color/reset.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = \"\\x1b[2J\\x1b[0;0H\";\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/reset.js?");

/***/ }),

/***/ "./node_modules/cli-color/slice.js":
/*!*****************************************!*\
  !*** ./node_modules/cli-color/slice.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar reAnsi        = __webpack_require__(/*! ansi-regex */ \"./node_modules/ansi-regex/index.js\")\n  , stringifiable = __webpack_require__(/*! es5-ext/object/validate-stringifiable-value */ \"./node_modules/es5-ext/object/validate-stringifiable-value.js\")\n  , length        = __webpack_require__(/*! ./get-stripped-length */ \"./node_modules/cli-color/get-stripped-length.js\")\n  , sgr           = __webpack_require__(/*! ./lib/sgr */ \"./node_modules/cli-color/lib/sgr.js\")\n  , max           = Math.max;\n\nvar Token = function (token) { this.token = token; };\n\nvar tokenize = function (str) {\n\tvar match = reAnsi().exec(str);\n\n\tif (!match) {\n\t\treturn [str];\n\t}\n\n\tvar index = match.index, head, prehead, tail;\n\n\tif (index === 0) {\n\t\thead = match[0];\n\t\ttail = str.slice(head.length);\n\n\t\treturn [new Token(head)].concat(tokenize(tail));\n\t}\n\n\tprehead = str.slice(0, index);\n\thead = match[0];\n\ttail = str.slice(index + head.length);\n\n\treturn [prehead, new Token(head)].concat(tokenize(tail));\n};\n\nvar isChunkInSlice = function (chunk, index, begin, end) {\n\tvar endIndex = chunk.length + index;\n\n\tif (begin > endIndex) return false;\n\tif (end < index) return false;\n\treturn true;\n};\n\n// eslint-disable-next-line max-lines-per-function\nvar sliceSeq = function (seq, begin, end) {\n\tvar sliced = seq.reduce(\n\t\tfunction (state, chunk) {\n\t\t\tvar index = state.index;\n\n\t\t\tif (chunk instanceof Token) {\n\t\t\t\tvar code = sgr.extractCode(chunk.token);\n\n\t\t\t\tif (index <= begin) {\n\t\t\t\t\tif (code in sgr.openers) {\n\t\t\t\t\t\tsgr.openStyle(state.preOpeners, code);\n\t\t\t\t\t}\n\t\t\t\t\tif (code in sgr.closers) {\n\t\t\t\t\t\tsgr.closeStyle(state.preOpeners, code);\n\t\t\t\t\t}\n\t\t\t\t} else if (index < end) {\n\t\t\t\t\tif (code in sgr.openers) {\n\t\t\t\t\t\tsgr.openStyle(state.inOpeners, code);\n\t\t\t\t\t\tstate.seq.push(chunk);\n\t\t\t\t\t} else if (code in sgr.closers) {\n\t\t\t\t\t\tstate.inClosers.push(code);\n\t\t\t\t\t\tstate.seq.push(chunk);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tvar nextChunk = \"\";\n\n\t\t\t\tif (isChunkInSlice(chunk, index, begin, end)) {\n\t\t\t\t\tvar relBegin = Math.max(begin - index, 0)\n\t\t\t\t\t  , relEnd = Math.min(end - index, chunk.length);\n\n\t\t\t\t\tnextChunk = chunk.slice(relBegin, relEnd);\n\t\t\t\t}\n\n\t\t\t\tstate.seq.push(nextChunk);\n\t\t\t\tstate.index = index + chunk.length;\n\t\t\t}\n\n\t\t\treturn state;\n\t\t},\n\t\t{\n\t\t\tindex: 0,\n\t\t\tseq: [],\n\n\t\t\t// preOpeners -> [ mod ]\n\t\t\t// preOpeners must be prepended to the slice if they wasn't closed til the end of it\n\t\t\t// preOpeners must be closed if they wasn't closed til the end of the slice\n\t\t\tpreOpeners: [],\n\n\t\t\t// inOpeners  -> [ mod ]\n\t\t\t// inOpeners already in the slice and must not be prepended to the slice\n\t\t\t// inOpeners must be closed if they wasn't closed til the end of the slice\n\t\t\tinOpeners: [], // opener CSI inside slice\n\n\t\t\t// inClosers -> [ code ]\n\t\t\t// closer CSIs for determining which pre/in-Openers must be closed\n\t\t\tinClosers: []\n\t\t}\n\t);\n\n\tsliced.seq = [].concat(\n\t\tsgr.prepend(sliced.preOpeners), sliced.seq,\n\t\tsgr.complete([].concat(sliced.preOpeners, sliced.inOpeners), sliced.inClosers)\n\t);\n\n\treturn sliced.seq;\n};\n\nmodule.exports = function (str/*, begin, end*/) {\n\tvar seq, begin = Number(arguments[1]), end = Number(arguments[2]), len;\n\n\tstr = stringifiable(str);\n\tlen = length(str);\n\n\tif (isNaN(begin)) {\n\t\tbegin = 0;\n\t}\n\tif (isNaN(end)) {\n\t\tend = len;\n\t}\n\tif (begin < 0) {\n\t\tbegin = max(len + begin, 0);\n\t}\n\tif (end < 0) {\n\t\tend = max(len + end, 0);\n\t}\n\n\tseq = tokenize(str);\n\tseq = sliceSeq(seq, begin, end);\n\treturn seq\n\t\t.map(function (chunk) {\n\t\t\tif (chunk instanceof Token) {\n\t\t\t\treturn chunk.token;\n\t\t\t}\n\n\t\t\treturn chunk;\n\t\t})\n\t\t.join(\"\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/slice.js?");

/***/ }),

/***/ "./node_modules/cli-color/strip.js":
/*!*****************************************!*\
  !*** ./node_modules/cli-color/strip.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Strip ANSI formatting from string\n\n\n\nvar stringifiable = __webpack_require__(/*! es5-ext/object/validate-stringifiable */ \"./node_modules/es5-ext/object/validate-stringifiable.js\")\n  , r             = __webpack_require__(/*! ansi-regex */ \"./node_modules/ansi-regex/index.js\")();\n\nmodule.exports = function (str) { return stringifiable(str).replace(r, \"\"); };\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/strip.js?");

/***/ }),

/***/ "./node_modules/cli-color/throbber.js":
/*!********************************************!*\
  !*** ./node_modules/cli-color/throbber.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar compose      = __webpack_require__(/*! es5-ext/function/#/compose */ \"./node_modules/es5-ext/function/#/compose.js\")\n  , callable     = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , d            = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , validTimeout = __webpack_require__(/*! timers-ext/valid-timeout */ \"./node_modules/timers-ext/valid-timeout.js\");\n\nvar chars = \"-\\\\|/\", l = chars.length, ThrobberIterator;\n\nThrobberIterator = function () {\n\t// no setup needed\n};\nObject.defineProperties(ThrobberIterator.prototype, {\n\tindex: d(-1),\n\trunning: d(false),\n\tnext: d(function () {\n\t\tvar str = this.running ? \"\\u0008\" : \"\";\n\t\tif (!this.running) this.running = true;\n\t\treturn str + chars[this.index = (this.index + 1) % l];\n\t}),\n\treset: d(function () {\n\t\tif (!this.running) return \"\";\n\t\tthis.index = -1;\n\t\tthis.running = false;\n\t\treturn \"\\u0008\";\n\t})\n});\n\nmodule.exports = exports = function (write, interval/*, format*/) {\n\tvar format = arguments[2], token, iterator = new ThrobberIterator();\n\tcallable(write);\n\tinterval = validTimeout(interval);\n\tif (format !== undefined) write = compose.call(write, callable(format));\n\treturn {\n\t\tstart: function () {\n\t\t\tif (token) return;\n\t\t\ttoken = setInterval(function () { write(iterator.next()); }, interval);\n\t\t},\n\t\trestart: function () {\n\t\t\tthis.stop();\n\t\t\tthis.start();\n\t\t},\n\t\tstop: function () {\n\t\t\tif (!token) return;\n\t\t\tclearInterval(token);\n\t\t\ttoken = null;\n\t\t\twrite(iterator.reset());\n\t\t}\n\t};\n};\n\nObject.defineProperty(exports, \"Iterator\", d(ThrobberIterator));\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/throbber.js?");

/***/ }),

/***/ "./node_modules/cli-color/window-size.js":
/*!***********************************************!*\
  !*** ./node_modules/cli-color/window-size.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d = __webpack_require__(/*! d */ \"./node_modules/d/index.js\");\n\nObject.defineProperties(exports, {\n\twidth: d.gs(\"ce\", function () { return process.stdout.columns || 0; }),\n\theight: d.gs(\"ce\", function () { return process.stdout.rows || 0; })\n});\n\n\n//# sourceURL=webpack:///./node_modules/cli-color/window-size.js?");

/***/ }),

/***/ "./node_modules/d/auto-bind.js":
/*!*************************************!*\
  !*** ./node_modules/d/auto-bind.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar copy             = __webpack_require__(/*! es5-ext/object/copy */ \"./node_modules/es5-ext/object/copy.js\")\n  , normalizeOptions = __webpack_require__(/*! es5-ext/object/normalize-options */ \"./node_modules/es5-ext/object/normalize-options.js\")\n  , ensureCallable   = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , map              = __webpack_require__(/*! es5-ext/object/map */ \"./node_modules/es5-ext/object/map.js\")\n  , callable         = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , validValue       = __webpack_require__(/*! es5-ext/object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n\n  , bind = Function.prototype.bind, defineProperty = Object.defineProperty\n  , hasOwnProperty = Object.prototype.hasOwnProperty\n  , define;\n\ndefine = function (name, desc, options) {\n\tvar value = validValue(desc) && callable(desc.value), dgs;\n\tdgs = copy(desc);\n\tdelete dgs.writable;\n\tdelete dgs.value;\n\tdgs.get = function () {\n\t\tif (!options.overwriteDefinition && hasOwnProperty.call(this, name)) return value;\n\t\tdesc.value = bind.call(value, options.resolveContext ? options.resolveContext(this) : this);\n\t\tdefineProperty(this, name, desc);\n\t\treturn this[name];\n\t};\n\treturn dgs;\n};\n\nmodule.exports = function (props/*, options*/) {\n\tvar options = normalizeOptions(arguments[1]);\n\tif (options.resolveContext != null) ensureCallable(options.resolveContext);\n\treturn map(props, function (desc, name) { return define(name, desc, options); });\n};\n\n\n//# sourceURL=webpack:///./node_modules/d/auto-bind.js?");

/***/ }),

/***/ "./node_modules/d/index.js":
/*!*********************************!*\
  !*** ./node_modules/d/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar assign        = __webpack_require__(/*! es5-ext/object/assign */ \"./node_modules/es5-ext/object/assign/index.js\")\n  , normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ \"./node_modules/es5-ext/object/normalize-options.js\")\n  , isCallable    = __webpack_require__(/*! es5-ext/object/is-callable */ \"./node_modules/es5-ext/object/is-callable.js\")\n  , contains      = __webpack_require__(/*! es5-ext/string/#/contains */ \"./node_modules/es5-ext/string/#/contains/index.js\")\n\n  , d;\n\nd = module.exports = function (dscr, value/*, options*/) {\n\tvar c, e, w, options, desc;\n\tif ((arguments.length < 2) || (typeof dscr !== 'string')) {\n\t\toptions = value;\n\t\tvalue = dscr;\n\t\tdscr = null;\n\t} else {\n\t\toptions = arguments[2];\n\t}\n\tif (dscr == null) {\n\t\tc = w = true;\n\t\te = false;\n\t} else {\n\t\tc = contains.call(dscr, 'c');\n\t\te = contains.call(dscr, 'e');\n\t\tw = contains.call(dscr, 'w');\n\t}\n\n\tdesc = { value: value, configurable: c, enumerable: e, writable: w };\n\treturn !options ? desc : assign(normalizeOpts(options), desc);\n};\n\nd.gs = function (dscr, get, set/*, options*/) {\n\tvar c, e, options, desc;\n\tif (typeof dscr !== 'string') {\n\t\toptions = set;\n\t\tset = get;\n\t\tget = dscr;\n\t\tdscr = null;\n\t} else {\n\t\toptions = arguments[3];\n\t}\n\tif (get == null) {\n\t\tget = undefined;\n\t} else if (!isCallable(get)) {\n\t\toptions = get;\n\t\tget = set = undefined;\n\t} else if (set == null) {\n\t\tset = undefined;\n\t} else if (!isCallable(set)) {\n\t\toptions = set;\n\t\tset = undefined;\n\t}\n\tif (dscr == null) {\n\t\tc = true;\n\t\te = false;\n\t} else {\n\t\tc = contains.call(dscr, 'c');\n\t\te = contains.call(dscr, 'e');\n\t}\n\n\tdesc = { get: get, set: set, configurable: c, enumerable: e };\n\treturn !options ? desc : assign(normalizeOpts(options), desc);\n};\n\n\n//# sourceURL=webpack:///./node_modules/d/index.js?");

/***/ }),

/***/ "./node_modules/d/lazy.js":
/*!********************************!*\
  !*** ./node_modules/d/lazy.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar map        = __webpack_require__(/*! es5-ext/object/map */ \"./node_modules/es5-ext/object/map.js\")\n  , isCallable = __webpack_require__(/*! es5-ext/object/is-callable */ \"./node_modules/es5-ext/object/is-callable.js\")\n  , validValue = __webpack_require__(/*! es5-ext/object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , contains   = __webpack_require__(/*! es5-ext/string/#/contains */ \"./node_modules/es5-ext/string/#/contains/index.js\")\n\n  , call = Function.prototype.call\n  , defineProperty = Object.defineProperty\n  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor\n  , getPrototypeOf = Object.getPrototypeOf\n  , hasOwnProperty = Object.prototype.hasOwnProperty\n  , cacheDesc = { configurable: false, enumerable: false, writable: false,\n\t\tvalue: null }\n  , define;\n\ndefine = function (name, options) {\n\tvar value, dgs, cacheName, desc, writable = false, resolvable\n\t  , flat;\n\toptions = Object(validValue(options));\n\tcacheName = options.cacheName;\n\tflat = options.flat;\n\tif (cacheName == null) cacheName = name;\n\tdelete options.cacheName;\n\tvalue = options.value;\n\tresolvable = isCallable(value);\n\tdelete options.value;\n\tdgs = { configurable: Boolean(options.configurable),\n\t\tenumerable: Boolean(options.enumerable) };\n\tif (name !== cacheName) {\n\t\tdgs.get = function () {\n\t\t\tif (hasOwnProperty.call(this, cacheName)) return this[cacheName];\n\t\t\tcacheDesc.value = resolvable ? call.call(value, this, options) : value;\n\t\t\tcacheDesc.writable = writable;\n\t\t\tdefineProperty(this, cacheName, cacheDesc);\n\t\t\tcacheDesc.value = null;\n\t\t\tif (desc) defineProperty(this, name, desc);\n\t\t\treturn this[cacheName];\n\t\t};\n\t} else if (!flat) {\n\t\tdgs.get = function self() {\n\t\t\tvar ownDesc;\n\t\t\tif (hasOwnProperty.call(this, name)) {\n\t\t\t\townDesc = getOwnPropertyDescriptor(this, name);\n\t\t\t\t// It happens in Safari, that getter is still called after property\n\t\t\t\t// was defined with a value, following workarounds that\n\t\t\t\t// While in IE11 it may happen that here ownDesc is undefined (go figure)\n\t\t\t\tif (ownDesc) {\n\t\t\t\t\tif (ownDesc.hasOwnProperty('value')) return ownDesc.value;\n\t\t\t\t\tif ((typeof ownDesc.get === 'function') && (ownDesc.get !== self)) {\n\t\t\t\t\t\treturn ownDesc.get.call(this);\n\t\t\t\t\t}\n\t\t\t\t\treturn value;\n\t\t\t\t}\n\t\t\t}\n\t\t\tdesc.value = resolvable ? call.call(value, this, options) : value;\n\t\t\tdefineProperty(this, name, desc);\n\t\t\tdesc.value = null;\n\t\t\treturn this[name];\n\t\t};\n\t} else {\n\t\tdgs.get = function self() {\n\t\t\tvar base = this, ownDesc;\n\t\t\tif (hasOwnProperty.call(this, name)) {\n\t\t\t\t// It happens in Safari, that getter is still called after property\n\t\t\t\t// was defined with a value, following workarounds that\n\t\t\t\townDesc = getOwnPropertyDescriptor(this, name);\n\t\t\t\tif (ownDesc.hasOwnProperty('value')) return ownDesc.value;\n\t\t\t\tif ((typeof ownDesc.get === 'function') && (ownDesc.get !== self)) {\n\t\t\t\t\treturn ownDesc.get.call(this);\n\t\t\t\t}\n\t\t\t}\n\t\t\twhile (!hasOwnProperty.call(base, name)) base = getPrototypeOf(base);\n\t\t\tdesc.value = resolvable ? call.call(value, base, options) : value;\n\t\t\tdefineProperty(base, name, desc);\n\t\t\tdesc.value = null;\n\t\t\treturn base[name];\n\t\t};\n\t}\n\tdgs.set = function (value) {\n\t\tif (hasOwnProperty.call(this, name)) {\n\t\t\tthrow new TypeError(\"Cannot assign to lazy defined '\" + name + \"' property of \" + this);\n\t\t}\n\t\tdgs.get.call(this);\n\t\tthis[cacheName] = value;\n\t};\n\tif (options.desc) {\n\t\tdesc = {\n\t\t\tconfigurable: contains.call(options.desc, 'c'),\n\t\t\tenumerable: contains.call(options.desc, 'e')\n\t\t};\n\t\tif (cacheName === name) {\n\t\t\tdesc.writable = contains.call(options.desc, 'w');\n\t\t\tdesc.value = null;\n\t\t} else {\n\t\t\twritable = contains.call(options.desc, 'w');\n\t\t\tdesc.get = dgs.get;\n\t\t\tdesc.set = dgs.set;\n\t\t}\n\t\tdelete options.desc;\n\t} else if (cacheName === name) {\n\t\tdesc = {\n\t\t\tconfigurable: Boolean(options.configurable),\n\t\t\tenumerable: Boolean(options.enumerable),\n\t\t\twritable: Boolean(options.writable),\n\t\t\tvalue: null\n\t\t};\n\t}\n\tdelete options.configurable;\n\tdelete options.enumerable;\n\tdelete options.writable;\n\treturn dgs;\n};\n\nmodule.exports = function (props) {\n\treturn map(props, function (desc, name) { return define(name, desc); });\n};\n\n\n//# sourceURL=webpack:///./node_modules/d/lazy.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/#/clear.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/array/#/clear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Inspired by Google Closure:\n// http://closure-library.googlecode.com/svn/docs/\n// closure_goog_array_array.js.html#goog.array.clear\n\n\n\nvar value = __webpack_require__(/*! ../../object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\");\n\nmodule.exports = function () {\n\tvalue(this).length = 0;\n\treturn this;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/#/clear.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/#/e-index-of.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/array/#/e-index-of.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar numberIsNaN       = __webpack_require__(/*! ../../number/is-nan */ \"./node_modules/es5-ext/number/is-nan/index.js\")\n  , toPosInt          = __webpack_require__(/*! ../../number/to-pos-integer */ \"./node_modules/es5-ext/number/to-pos-integer.js\")\n  , value             = __webpack_require__(/*! ../../object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , indexOf           = Array.prototype.indexOf\n  , objHasOwnProperty = Object.prototype.hasOwnProperty\n  , abs               = Math.abs\n  , floor             = Math.floor;\n\nmodule.exports = function (searchElement /*, fromIndex*/) {\n\tvar i, length, fromIndex, val;\n\tif (!numberIsNaN(searchElement)) return indexOf.apply(this, arguments);\n\n\tlength = toPosInt(value(this).length);\n\tfromIndex = arguments[1];\n\tif (isNaN(fromIndex)) fromIndex = 0;\n\telse if (fromIndex >= 0) fromIndex = floor(fromIndex);\n\telse fromIndex = toPosInt(this.length) - floor(abs(fromIndex));\n\n\tfor (i = fromIndex; i < length; ++i) {\n\t\tif (objHasOwnProperty.call(this, i)) {\n\t\t\tval = this[i];\n\t\t\tif (numberIsNaN(val)) return i; // Jslint: ignore\n\t\t}\n\t}\n\treturn -1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/#/e-index-of.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/#/for-each-right.js":
/*!********************************************************!*\
  !*** ./node_modules/es5-ext/array/#/for-each-right.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toPosInt          = __webpack_require__(/*! ../../number/to-pos-integer */ \"./node_modules/es5-ext/number/to-pos-integer.js\")\n  , callable          = __webpack_require__(/*! ../../object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , value             = __webpack_require__(/*! ../../object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , objHasOwnProperty = Object.prototype.hasOwnProperty\n  , call              = Function.prototype.call;\n\nmodule.exports = function (cb /*, thisArg*/) {\n\tvar i, self, thisArg;\n\n\tself = Object(value(this));\n\tcallable(cb);\n\tthisArg = arguments[1];\n\n\tfor (i = toPosInt(self.length) - 1; i >= 0; --i) {\n\t\tif (objHasOwnProperty.call(self, i)) call.call(cb, thisArg, self[i], i, self);\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/#/for-each-right.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/#/uniq.js":
/*!**********************************************!*\
  !*** ./node_modules/es5-ext/array/#/uniq.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar indexOf = __webpack_require__(/*! ./e-index-of */ \"./node_modules/es5-ext/array/#/e-index-of.js\")\n\n  , filter = Array.prototype.filter\n\n  , isFirst;\n\nisFirst = function (value, index) {\n\treturn indexOf.call(this, value) === index;\n};\n\nmodule.exports = function () {\n return filter.call(this, isFirst, this);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/#/uniq.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/from/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/array/from/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/array/from/is-implemented.js\")()\n\t? Array.from\n\t: __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/array/from/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/from/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/from/is-implemented.js":
/*!***********************************************************!*\
  !*** ./node_modules/es5-ext/array/from/is-implemented.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar from = Array.from, arr, result;\n\tif (typeof from !== \"function\") return false;\n\tarr = [\"raz\", \"dwa\"];\n\tresult = from(arr);\n\treturn Boolean(result && (result !== arr) && (result[1] === \"dwa\"));\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/from/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/from/shim.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/array/from/shim.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar iteratorSymbol = __webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\").iterator\n  , isArguments    = __webpack_require__(/*! ../../function/is-arguments */ \"./node_modules/es5-ext/function/is-arguments.js\")\n  , isFunction     = __webpack_require__(/*! ../../function/is-function */ \"./node_modules/es5-ext/function/is-function.js\")\n  , toPosInt       = __webpack_require__(/*! ../../number/to-pos-integer */ \"./node_modules/es5-ext/number/to-pos-integer.js\")\n  , callable       = __webpack_require__(/*! ../../object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , validValue     = __webpack_require__(/*! ../../object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , isValue        = __webpack_require__(/*! ../../object/is-value */ \"./node_modules/es5-ext/object/is-value.js\")\n  , isString       = __webpack_require__(/*! ../../string/is-string */ \"./node_modules/es5-ext/string/is-string.js\")\n  , isArray        = Array.isArray\n  , call           = Function.prototype.call\n  , desc           = { configurable: true, enumerable: true, writable: true, value: null }\n  , defineProperty = Object.defineProperty;\n\n// eslint-disable-next-line complexity, max-lines-per-function\nmodule.exports = function (arrayLike /*, mapFn, thisArg*/) {\n\tvar mapFn = arguments[1]\n\t  , thisArg = arguments[2]\n\t  , Context\n\t  , i\n\t  , j\n\t  , arr\n\t  , length\n\t  , code\n\t  , iterator\n\t  , result\n\t  , getIterator\n\t  , value;\n\n\tarrayLike = Object(validValue(arrayLike));\n\n\tif (isValue(mapFn)) callable(mapFn);\n\tif (!this || this === Array || !isFunction(this)) {\n\t\t// Result: Plain array\n\t\tif (!mapFn) {\n\t\t\tif (isArguments(arrayLike)) {\n\t\t\t\t// Source: Arguments\n\t\t\t\tlength = arrayLike.length;\n\t\t\t\tif (length !== 1) return Array.apply(null, arrayLike);\n\t\t\t\tarr = new Array(1);\n\t\t\t\tarr[0] = arrayLike[0];\n\t\t\t\treturn arr;\n\t\t\t}\n\t\t\tif (isArray(arrayLike)) {\n\t\t\t\t// Source: Array\n\t\t\t\tarr = new Array(length = arrayLike.length);\n\t\t\t\tfor (i = 0; i < length; ++i) arr[i] = arrayLike[i];\n\t\t\t\treturn arr;\n\t\t\t}\n\t\t}\n\t\tarr = [];\n\t} else {\n\t\t// Result: Non plain array\n\t\tContext = this;\n\t}\n\n\tif (!isArray(arrayLike)) {\n\t\tif ((getIterator = arrayLike[iteratorSymbol]) !== undefined) {\n\t\t\t// Source: Iterator\n\t\t\titerator = callable(getIterator).call(arrayLike);\n\t\t\tif (Context) arr = new Context();\n\t\t\tresult = iterator.next();\n\t\t\ti = 0;\n\t\t\twhile (!result.done) {\n\t\t\t\tvalue = mapFn ? call.call(mapFn, thisArg, result.value, i) : result.value;\n\t\t\t\tif (Context) {\n\t\t\t\t\tdesc.value = value;\n\t\t\t\t\tdefineProperty(arr, i, desc);\n\t\t\t\t} else {\n\t\t\t\t\tarr[i] = value;\n\t\t\t\t}\n\t\t\t\tresult = iterator.next();\n\t\t\t\t++i;\n\t\t\t}\n\t\t\tlength = i;\n\t\t} else if (isString(arrayLike)) {\n\t\t\t// Source: String\n\t\t\tlength = arrayLike.length;\n\t\t\tif (Context) arr = new Context();\n\t\t\tfor (i = 0, j = 0; i < length; ++i) {\n\t\t\t\tvalue = arrayLike[i];\n\t\t\t\tif (i + 1 < length) {\n\t\t\t\t\tcode = value.charCodeAt(0);\n\t\t\t\t\t// eslint-disable-next-line max-depth\n\t\t\t\t\tif (code >= 0xd800 && code <= 0xdbff) value += arrayLike[++i];\n\t\t\t\t}\n\t\t\t\tvalue = mapFn ? call.call(mapFn, thisArg, value, j) : value;\n\t\t\t\tif (Context) {\n\t\t\t\t\tdesc.value = value;\n\t\t\t\t\tdefineProperty(arr, j, desc);\n\t\t\t\t} else {\n\t\t\t\t\tarr[j] = value;\n\t\t\t\t}\n\t\t\t\t++j;\n\t\t\t}\n\t\t\tlength = j;\n\t\t}\n\t}\n\tif (length === undefined) {\n\t\t// Source: array or array-like\n\t\tlength = toPosInt(arrayLike.length);\n\t\tif (Context) arr = new Context(length);\n\t\tfor (i = 0; i < length; ++i) {\n\t\t\tvalue = mapFn ? call.call(mapFn, thisArg, arrayLike[i], i) : arrayLike[i];\n\t\t\tif (Context) {\n\t\t\t\tdesc.value = value;\n\t\t\t\tdefineProperty(arr, i, desc);\n\t\t\t} else {\n\t\t\t\tarr[i] = value;\n\t\t\t}\n\t\t}\n\t}\n\tif (Context) {\n\t\tdesc.value = null;\n\t\tarr.length = length;\n\t}\n\treturn arr;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/from/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/generate.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/array/generate.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toPosInt = __webpack_require__(/*! ../number/to-pos-integer */ \"./node_modules/es5-ext/number/to-pos-integer.js\")\n  , value    = __webpack_require__(/*! ../object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , slice    = Array.prototype.slice;\n\nmodule.exports = function (length /*, …fill*/) {\n\tvar arr, currentLength;\n\tlength = toPosInt(value(length));\n\tif (length === 0) return [];\n\n\tarr = arguments.length < 2 ? [undefined] : slice.call(arguments, 1, 1 + length);\n\n\twhile ((currentLength = arr.length) < length) {\n\t\tarr = arr.concat(arr.slice(0, length - currentLength));\n\t}\n\treturn arr;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/generate.js?");

/***/ }),

/***/ "./node_modules/es5-ext/array/to-array.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/array/to-array.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar from = __webpack_require__(/*! ./from */ \"./node_modules/es5-ext/array/from/index.js\")\n\n  , isArray = Array.isArray;\n\nmodule.exports = function (arrayLike) {\n\treturn isArray(arrayLike) ? arrayLike : from(arrayLike);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/array/to-array.js?");

/***/ }),

/***/ "./node_modules/es5-ext/error/custom.js":
/*!**********************************************!*\
  !*** ./node_modules/es5-ext/error/custom.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar assign            = __webpack_require__(/*! ../object/assign */ \"./node_modules/es5-ext/object/assign/index.js\")\n  , isObject          = __webpack_require__(/*! ../object/is-object */ \"./node_modules/es5-ext/object/is-object.js\")\n  , isValue           = __webpack_require__(/*! ../object/is-value */ \"./node_modules/es5-ext/object/is-value.js\")\n  , captureStackTrace = Error.captureStackTrace;\n\nexports = module.exports = function (message /*, code, ext*/) {\n\tvar err = new Error(message), code = arguments[1], ext = arguments[2];\n\tif (!isValue(ext)) {\n\t\tif (isObject(code)) {\n\t\t\text = code;\n\t\t\tcode = null;\n\t\t}\n\t}\n\tif (isValue(ext)) assign(err, ext);\n\tif (isValue(code)) err.code = code;\n\tif (captureStackTrace) captureStackTrace(err, exports);\n\treturn err;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/error/custom.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/#/compose.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/function/#/compose.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar callable = __webpack_require__(/*! ../../object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , aFrom    = __webpack_require__(/*! ../../array/from */ \"./node_modules/es5-ext/array/from/index.js\")\n  , apply    = Function.prototype.apply\n  , call     = Function.prototype.call\n  , callFn   = function (arg, fn) {\n\treturn call.call(fn, this, arg);\n};\n\nmodule.exports = function (fn /*, …fnn*/) {\n\tvar fns, first;\n\tif (!fn) callable(fn);\n\tfns = [this].concat(aFrom(arguments));\n\tfns.forEach(callable);\n\tfns = fns.reverse();\n\tfirst = fns[0];\n\tfns = fns.slice(1);\n\treturn function (argIgnored) {\n\t\treturn fns.reduce(callFn, apply.call(first, this, arguments));\n\t};\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/function/#/compose.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/_define-length.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/function/_define-length.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toPosInt = __webpack_require__(/*! ../number/to-pos-integer */ \"./node_modules/es5-ext/number/to-pos-integer.js\");\n\nvar test = function (arg1, arg2) {\n\treturn arg2;\n};\n\nvar desc, defineProperty, generate, mixin;\n\ntry {\n\tObject.defineProperty(test, \"length\", {\n\t\tconfigurable: true,\n\t\twritable: false,\n\t\tenumerable: false,\n\t\tvalue: 1\n\t});\n} catch (ignore) {}\n\nif (test.length === 1) {\n\t// ES6\n\tdesc = { configurable: true, writable: false, enumerable: false };\n\tdefineProperty = Object.defineProperty;\n\tmodule.exports = function (fn, length) {\n\t\tlength = toPosInt(length);\n\t\tif (fn.length === length) return fn;\n\t\tdesc.value = length;\n\t\treturn defineProperty(fn, \"length\", desc);\n\t};\n} else {\n\tmixin = __webpack_require__(/*! ../object/mixin */ \"./node_modules/es5-ext/object/mixin.js\");\n\tgenerate = (function () {\n\t\tvar cache = [];\n\t\treturn function (length) {\n\t\t\tvar args, i = 0;\n\t\t\tif (cache[length]) return cache[length];\n\t\t\targs = [];\n\t\t\twhile (length--) args.push(\"a\" + (++i).toString(36));\n\t\t\t// eslint-disable-next-line no-new-func\n\t\t\treturn new Function(\n\t\t\t\t\"fn\",\n\t\t\t\t\"return function (\" + args.join(\", \") + \") { return fn.apply(this, arguments); };\"\n\t\t\t);\n\t\t};\n\t}());\n\tmodule.exports = function (src, length) {\n\t\tvar target;\n\t\tlength = toPosInt(length);\n\t\tif (src.length === length) return src;\n\t\ttarget = generate(length)(src);\n\t\ttry {\n\t\t\tmixin(target, src);\n\t\t} catch (ignore) {}\n\t\treturn target;\n\t};\n}\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/function/_define-length.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/is-arguments.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-arguments.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar objToString = Object.prototype.toString\n  , id = objToString.call(\n\t(function () {\n\t\treturn arguments;\n\t})()\n);\n\nmodule.exports = function (value) {\n\treturn objToString.call(value) === id;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/function/is-arguments.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/is-function.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/function/is-function.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar objToString = Object.prototype.toString, id = objToString.call(__webpack_require__(/*! ./noop */ \"./node_modules/es5-ext/function/noop.js\"));\n\nmodule.exports = function (value) {\n\treturn typeof value === \"function\" && objToString.call(value) === id;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/function/is-function.js?");

/***/ }),

/***/ "./node_modules/es5-ext/function/noop.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/function/noop.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// eslint-disable-next-line no-empty-function\nmodule.exports = function () {};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/function/noop.js?");

/***/ }),

/***/ "./node_modules/es5-ext/iterable/is.js":
/*!*********************************************!*\
  !*** ./node_modules/es5-ext/iterable/is.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar iteratorSymbol = __webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\").iterator\n  , isValue        = __webpack_require__(/*! ../object/is-value */ \"./node_modules/es5-ext/object/is-value.js\")\n  , isArrayLike    = __webpack_require__(/*! ../object/is-array-like */ \"./node_modules/es5-ext/object/is-array-like.js\");\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) return false;\n\tif (typeof value[iteratorSymbol] === \"function\") return true;\n\treturn isArrayLike(value);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/iterable/is.js?");

/***/ }),

/***/ "./node_modules/es5-ext/iterable/validate-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/iterable/validate-object.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ../object/is-object */ \"./node_modules/es5-ext/object/is-object.js\")\n  , is       = __webpack_require__(/*! ./is */ \"./node_modules/es5-ext/iterable/is.js\");\n\nmodule.exports = function (value) {\n\tif (is(value) && isObject(value)) return value;\n\tthrow new TypeError(value + \" is not an iterable or array-like object\");\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/iterable/validate-object.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/sign/index.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/math/sign/is-implemented.js\")()\n\t? Math.sign\n\t: __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/math/sign/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/math/sign/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/sign/is-implemented.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/is-implemented.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar sign = Math.sign;\n\tif (typeof sign !== \"function\") return false;\n\treturn (sign(10) === 1) && (sign(-20) === -1);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/math/sign/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/sign/shim.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/math/sign/shim.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value) {\n\tvalue = Number(value);\n\tif (isNaN(value) || (value === 0)) return value;\n\treturn value > 0 ? 1 : -1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/math/sign/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/trunc/index.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/math/trunc/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/math/trunc/is-implemented.js\")()\n\t? Math.trunc\n\t: __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/math/trunc/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/math/trunc/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/trunc/is-implemented.js":
/*!***********************************************************!*\
  !*** ./node_modules/es5-ext/math/trunc/is-implemented.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar trunc = Math.trunc;\n\tif (typeof trunc !== \"function\") return false;\n\treturn (trunc(13.67) === 13) && (trunc(-13.67) === -13);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/math/trunc/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/math/trunc/shim.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/math/trunc/shim.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar floor = Math.floor;\n\nmodule.exports = function (value) {\n\tif (isNaN(value)) return NaN;\n\tvalue = Number(value);\n\tif (value === 0) return value;\n\tif (value === Infinity) return Infinity;\n\tif (value === -Infinity) return -Infinity;\n\tif (value > 0) return floor(value);\n\treturn -floor(-value);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/math/trunc/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/number/is-nan/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/number/is-nan/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/number/is-nan/is-implemented.js\")()\n\t? Number.isNaN\n\t: __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/number/is-nan/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/number/is-nan/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/number/is-nan/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/number/is-nan/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar numberIsNaN = Number.isNaN;\n\tif (typeof numberIsNaN !== \"function\") return false;\n\treturn !numberIsNaN({}) && numberIsNaN(NaN) && !numberIsNaN(34);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/number/is-nan/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/number/is-nan/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/number/is-nan/shim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (value) {\n\t// eslint-disable-next-line no-self-compare\n\treturn value !== value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/number/is-nan/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/number/to-integer.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/number/to-integer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar sign = __webpack_require__(/*! ../math/sign */ \"./node_modules/es5-ext/math/sign/index.js\")\n\n  , abs = Math.abs, floor = Math.floor;\n\nmodule.exports = function (value) {\n\tif (isNaN(value)) return 0;\n\tvalue = Number(value);\n\tif ((value === 0) || !isFinite(value)) return value;\n\treturn sign(value) * floor(abs(value));\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/number/to-integer.js?");

/***/ }),

/***/ "./node_modules/es5-ext/number/to-pos-integer.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/number/to-pos-integer.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toInteger = __webpack_require__(/*! ./to-integer */ \"./node_modules/es5-ext/number/to-integer.js\")\n\n  , max = Math.max;\n\nmodule.exports = function (value) {\n return max(0, toInteger(value));\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/number/to-pos-integer.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/_iterate.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/_iterate.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Internal method, used by iteration functions.\n// Calls a function for each key-value pair found in object\n// Optionally takes compareFn to iterate object in specific order\n\n\n\nvar callable                = __webpack_require__(/*! ./valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , value                   = __webpack_require__(/*! ./valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , bind                    = Function.prototype.bind\n  , call                    = Function.prototype.call\n  , keys                    = Object.keys\n  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nmodule.exports = function (method, defVal) {\n\treturn function (obj, cb /*, thisArg, compareFn*/) {\n\t\tvar list, thisArg = arguments[2], compareFn = arguments[3];\n\t\tobj = Object(value(obj));\n\t\tcallable(cb);\n\n\t\tlist = keys(obj);\n\t\tif (compareFn) {\n\t\t\tlist.sort(typeof compareFn === \"function\" ? bind.call(compareFn, obj) : undefined);\n\t\t}\n\t\tif (typeof method !== \"function\") method = list[method];\n\t\treturn call.call(method, list, function (key, index) {\n\t\t\tif (!objPropertyIsEnumerable.call(obj, key)) return defVal;\n\t\t\treturn call.call(cb, thisArg, obj[key], key, obj, index);\n\t\t});\n\t};\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/_iterate.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/object/assign/is-implemented.js\")()\n\t? Object.assign\n\t: __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/object/assign/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/assign/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/is-implemented.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/is-implemented.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\tvar assign = Object.assign, obj;\n\tif (typeof assign !== \"function\") return false;\n\tobj = { foo: \"raz\" };\n\tassign(obj, { bar: \"dwa\" }, { trzy: \"trzy\" });\n\treturn (obj.foo + obj.bar + obj.trzy) === \"razdwatrzy\";\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/assign/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/assign/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/assign/shim.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar keys  = __webpack_require__(/*! ../keys */ \"./node_modules/es5-ext/object/keys/index.js\")\n  , value = __webpack_require__(/*! ../valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , max   = Math.max;\n\nmodule.exports = function (dest, src /*, …srcn*/) {\n\tvar error, i, length = max(arguments.length, 2), assign;\n\tdest = Object(value(dest));\n\tassign = function (key) {\n\t\ttry {\n\t\t\tdest[key] = src[key];\n\t\t} catch (e) {\n\t\t\tif (!error) error = e;\n\t\t}\n\t};\n\tfor (i = 1; i < length; ++i) {\n\t\tsrc = arguments[i];\n\t\tkeys(src).forEach(assign);\n\t}\n\tif (error !== undefined) throw error;\n\treturn dest;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/assign/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/copy.js":
/*!*********************************************!*\
  !*** ./node_modules/es5-ext/object/copy.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar aFrom  = __webpack_require__(/*! ../array/from */ \"./node_modules/es5-ext/array/from/index.js\")\n  , assign = __webpack_require__(/*! ./assign */ \"./node_modules/es5-ext/object/assign/index.js\")\n  , value  = __webpack_require__(/*! ./valid-value */ \"./node_modules/es5-ext/object/valid-value.js\");\n\nmodule.exports = function (obj/*, propertyNames, options*/) {\n\tvar copy = Object(value(obj)), propertyNames = arguments[1], options = Object(arguments[2]);\n\tif (copy !== obj && !propertyNames) return copy;\n\tvar result = {};\n\tif (propertyNames) {\n\t\taFrom(propertyNames, function (propertyName) {\n\t\t\tif (options.ensure || propertyName in obj) result[propertyName] = obj[propertyName];\n\t\t});\n\t} else {\n\t\tassign(result, obj);\n\t}\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/copy.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/create.js":
/*!***********************************************!*\
  !*** ./node_modules/es5-ext/object/create.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Workaround for http://code.google.com/p/v8/issues/detail?id=2804\n\n\n\nvar create = Object.create, shim;\n\nif (!__webpack_require__(/*! ./set-prototype-of/is-implemented */ \"./node_modules/es5-ext/object/set-prototype-of/is-implemented.js\")()) {\n\tshim = __webpack_require__(/*! ./set-prototype-of/shim */ \"./node_modules/es5-ext/object/set-prototype-of/shim.js\");\n}\n\nmodule.exports = (function () {\n\tvar nullObject, polyProps, desc;\n\tif (!shim) return create;\n\tif (shim.level !== 1) return create;\n\n\tnullObject = {};\n\tpolyProps = {};\n\tdesc = {\n\t\tconfigurable: false,\n\t\tenumerable: false,\n\t\twritable: true,\n\t\tvalue: undefined\n\t};\n\tObject.getOwnPropertyNames(Object.prototype).forEach(function (name) {\n\t\tif (name === \"__proto__\") {\n\t\t\tpolyProps[name] = {\n\t\t\t\tconfigurable: true,\n\t\t\t\tenumerable: false,\n\t\t\t\twritable: true,\n\t\t\t\tvalue: undefined\n\t\t\t};\n\t\t\treturn;\n\t\t}\n\t\tpolyProps[name] = desc;\n\t});\n\tObject.defineProperties(nullObject, polyProps);\n\n\tObject.defineProperty(shim, \"nullPolyfill\", {\n\t\tconfigurable: false,\n\t\tenumerable: false,\n\t\twritable: false,\n\t\tvalue: nullObject\n\t});\n\n\treturn function (prototype, props) {\n\t\treturn create(prototype === null ? nullObject : prototype, props);\n\t};\n}());\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/create.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/first-key.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/first-key.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar value                   = __webpack_require__(/*! ./valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , objPropertyIsEnumerable = Object.prototype.propertyIsEnumerable;\n\nmodule.exports = function (obj) {\n\tvar i;\n\tvalue(obj);\n\tfor (i in obj) {\n\t\tif (objPropertyIsEnumerable.call(obj, i)) return i;\n\t}\n\treturn null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/first-key.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/for-each.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/for-each.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./_iterate */ \"./node_modules/es5-ext/object/_iterate.js\")(\"forEach\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/for-each.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/is-array-like.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/object/is-array-like.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isFunction = __webpack_require__(/*! ../function/is-function */ \"./node_modules/es5-ext/function/is-function.js\")\n  , isObject   = __webpack_require__(/*! ./is-object */ \"./node_modules/es5-ext/object/is-object.js\")\n  , isValue    = __webpack_require__(/*! ./is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nmodule.exports = function (value) {\n\treturn (\n\t\t(isValue(value) &&\n\t\t\ttypeof value.length === \"number\" &&\n\t\t\t// Just checking ((typeof x === 'object') && (typeof x !== 'function'))\n\t\t\t// won't work right for some cases, e.g.:\n\t\t\t// type of instance of NodeList in Safari is a 'function'\n\t\t\t((isObject(value) && !isFunction(value)) || typeof value === \"string\")) ||\n\t\tfalse\n\t);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/is-array-like.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/is-callable.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/is-callable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Deprecated\n\n\n\nmodule.exports = function (obj) {\n return typeof obj === \"function\";\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/is-callable.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/is-object.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/is-object.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nvar map = { function: true, object: true };\n\nmodule.exports = function (value) {\n\treturn (isValue(value) && map[typeof value]) || false;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/is-object.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/is-value.js":
/*!*************************************************!*\
  !*** ./node_modules/es5-ext/object/is-value.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _undefined = __webpack_require__(/*! ../function/noop */ \"./node_modules/es5-ext/function/noop.js\")(); // Support ES3 engines\n\nmodule.exports = function (val) {\n return (val !== _undefined) && (val !== null);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/is-value.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/index.js":
/*!***************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/object/keys/is-implemented.js\")() ? Object.keys : __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/object/keys/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/keys/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/is-implemented.js":
/*!************************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/is-implemented.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function () {\n\ttry {\n\t\tObject.keys(\"primitive\");\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/keys/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/keys/shim.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/object/keys/shim.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ../is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nvar keys = Object.keys;\n\nmodule.exports = function (object) { return keys(isValue(object) ? Object(object) : object); };\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/keys/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/map.js":
/*!********************************************!*\
  !*** ./node_modules/es5-ext/object/map.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar callable = __webpack_require__(/*! ./valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , forEach  = __webpack_require__(/*! ./for-each */ \"./node_modules/es5-ext/object/for-each.js\")\n  , call     = Function.prototype.call;\n\nmodule.exports = function (obj, cb /*, thisArg*/) {\n\tvar result = {}, thisArg = arguments[2];\n\tcallable(cb);\n\tforEach(obj, function (value, key, targetObj, index) {\n\t\tresult[key] = call.call(cb, thisArg, value, key, targetObj, index);\n\t});\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/map.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/mixin.js":
/*!**********************************************!*\
  !*** ./node_modules/es5-ext/object/mixin.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar value = __webpack_require__(/*! ./valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n\n  , defineProperty = Object.defineProperty\n  , getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor\n  , getOwnPropertyNames = Object.getOwnPropertyNames\n  , getOwnPropertySymbols = Object.getOwnPropertySymbols;\n\nmodule.exports = function (target, source) {\n\tvar error, sourceObject = Object(value(source));\n\ttarget = Object(value(target));\n\tgetOwnPropertyNames(sourceObject).forEach(function (name) {\n\t\ttry {\n\t\t\tdefineProperty(target, name, getOwnPropertyDescriptor(source, name));\n\t\t} catch (e) {\n error = e;\n}\n\t});\n\tif (typeof getOwnPropertySymbols === \"function\") {\n\t\tgetOwnPropertySymbols(sourceObject).forEach(function (symbol) {\n\t\t\ttry {\n\t\t\t\tdefineProperty(target, symbol, getOwnPropertyDescriptor(source, symbol));\n\t\t\t} catch (e) {\n error = e;\n}\n\t\t});\n\t}\n\tif (error !== undefined) throw error;\n\treturn target;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/mixin.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/normalize-options.js":
/*!**********************************************************!*\
  !*** ./node_modules/es5-ext/object/normalize-options.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nvar forEach = Array.prototype.forEach, create = Object.create;\n\nvar process = function (src, obj) {\n\tvar key;\n\tfor (key in src) obj[key] = src[key];\n};\n\n// eslint-disable-next-line no-unused-vars\nmodule.exports = function (opts1 /*, …options*/) {\n\tvar result = create(null);\n\tforEach.call(arguments, function (options) {\n\t\tif (!isValue(options)) return;\n\t\tprocess(Object(options), result);\n\t});\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/normalize-options.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/primitive-set.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/object/primitive-set.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar forEach = Array.prototype.forEach, create = Object.create;\n\n// eslint-disable-next-line no-unused-vars\nmodule.exports = function (arg /*, …args*/) {\n\tvar set = create(null);\n\tforEach.call(arguments, function (name) {\n\t\tset[name] = true;\n\t});\n\treturn set;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/primitive-set.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/object/set-prototype-of/is-implemented.js\")()\n\t? Object.setPrototypeOf\n\t: __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/object/set-prototype-of/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/set-prototype-of/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/is-implemented.js":
/*!************************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/is-implemented.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar create = Object.create, getPrototypeOf = Object.getPrototypeOf, plainObject = {};\n\nmodule.exports = function (/* CustomCreate*/) {\n\tvar setPrototypeOf = Object.setPrototypeOf, customCreate = arguments[0] || create;\n\tif (typeof setPrototypeOf !== \"function\") return false;\n\treturn getPrototypeOf(setPrototypeOf(customCreate(null), plainObject)) === plainObject;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/set-prototype-of/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/set-prototype-of/shim.js":
/*!**************************************************************!*\
  !*** ./node_modules/es5-ext/object/set-prototype-of/shim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint no-proto: \"off\" */\n\n// Big thanks to @WebReflection for sorting this out\n// https://gist.github.com/WebReflection/5593554\n\n\n\nvar isObject        = __webpack_require__(/*! ../is-object */ \"./node_modules/es5-ext/object/is-object.js\")\n  , value           = __webpack_require__(/*! ../valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , objIsPrototypeOf = Object.prototype.isPrototypeOf\n  , defineProperty  = Object.defineProperty\n  , nullDesc        = {\n\tconfigurable: true,\n\tenumerable: false,\n\twritable: true,\n\tvalue: undefined\n}\n  , validate;\n\nvalidate = function (obj, prototype) {\n\tvalue(obj);\n\tif (prototype === null || isObject(prototype)) return obj;\n\tthrow new TypeError(\"Prototype must be null or an object\");\n};\n\nmodule.exports = (function (status) {\n\tvar fn, set;\n\tif (!status) return null;\n\tif (status.level === 2) {\n\t\tif (status.set) {\n\t\t\tset = status.set;\n\t\t\tfn = function (obj, prototype) {\n\t\t\t\tset.call(validate(obj, prototype), prototype);\n\t\t\t\treturn obj;\n\t\t\t};\n\t\t} else {\n\t\t\tfn = function (obj, prototype) {\n\t\t\t\tvalidate(obj, prototype).__proto__ = prototype;\n\t\t\t\treturn obj;\n\t\t\t};\n\t\t}\n\t} else {\n\t\tfn = function self(obj, prototype) {\n\t\t\tvar isNullBase;\n\t\t\tvalidate(obj, prototype);\n\t\t\tisNullBase = objIsPrototypeOf.call(self.nullPolyfill, obj);\n\t\t\tif (isNullBase) delete self.nullPolyfill.__proto__;\n\t\t\tif (prototype === null) prototype = self.nullPolyfill;\n\t\t\tobj.__proto__ = prototype;\n\t\t\tif (isNullBase) defineProperty(self.nullPolyfill, \"__proto__\", nullDesc);\n\t\t\treturn obj;\n\t\t};\n\t}\n\treturn Object.defineProperty(fn, \"level\", {\n\t\tconfigurable: false,\n\t\tenumerable: false,\n\t\twritable: false,\n\t\tvalue: status.level\n\t});\n}(\n\t(function () {\n\t\tvar tmpObj1 = Object.create(null)\n\t\t  , tmpObj2 = {}\n\t\t  , set\n\t\t  , desc = Object.getOwnPropertyDescriptor(Object.prototype, \"__proto__\");\n\n\t\tif (desc) {\n\t\t\ttry {\n\t\t\t\tset = desc.set; // Opera crashes at this point\n\t\t\t\tset.call(tmpObj1, tmpObj2);\n\t\t\t} catch (ignore) {}\n\t\t\tif (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { set: set, level: 2 };\n\t\t}\n\n\t\ttmpObj1.__proto__ = tmpObj2;\n\t\tif (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 2 };\n\n\t\ttmpObj1 = {};\n\t\ttmpObj1.__proto__ = tmpObj2;\n\t\tif (Object.getPrototypeOf(tmpObj1) === tmpObj2) return { level: 1 };\n\n\t\treturn false;\n\t})()\n));\n\n__webpack_require__(/*! ../create */ \"./node_modules/es5-ext/object/create.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/set-prototype-of/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-callable.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (fn) {\n\tif (typeof fn !== \"function\") throw new TypeError(fn + \" is not a function\");\n\treturn fn;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/valid-callable.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-object.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isObject = __webpack_require__(/*! ./is-object */ \"./node_modules/es5-ext/object/is-object.js\");\n\nmodule.exports = function (value) {\n\tif (!isObject(value)) throw new TypeError(value + \" is not an Object\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/valid-object.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/valid-value.js":
/*!****************************************************!*\
  !*** ./node_modules/es5-ext/object/valid-value.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isValue = __webpack_require__(/*! ./is-value */ \"./node_modules/es5-ext/object/is-value.js\");\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) throw new TypeError(\"Cannot use null or undefined\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/valid-value.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/validate-stringifiable-value.js":
/*!*********************************************************************!*\
  !*** ./node_modules/es5-ext/object/validate-stringifiable-value.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar ensureValue   = __webpack_require__(/*! ./valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , stringifiable = __webpack_require__(/*! ./validate-stringifiable */ \"./node_modules/es5-ext/object/validate-stringifiable.js\");\n\nmodule.exports = function (value) {\n\treturn stringifiable(ensureValue(value));\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/validate-stringifiable-value.js?");

/***/ }),

/***/ "./node_modules/es5-ext/object/validate-stringifiable.js":
/*!***************************************************************!*\
  !*** ./node_modules/es5-ext/object/validate-stringifiable.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isCallable = __webpack_require__(/*! ./is-callable */ \"./node_modules/es5-ext/object/is-callable.js\");\n\nmodule.exports = function (stringifiable) {\n\ttry {\n\t\tif (stringifiable && isCallable(stringifiable.toString)) return stringifiable.toString();\n\t\treturn String(stringifiable);\n\t} catch (e) {\n\t\tthrow new TypeError(\"Passed argument cannot be stringifed\");\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/object/validate-stringifiable.js?");

/***/ }),

/***/ "./node_modules/es5-ext/safe-to-string.js":
/*!************************************************!*\
  !*** ./node_modules/es5-ext/safe-to-string.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isCallable = __webpack_require__(/*! ./object/is-callable */ \"./node_modules/es5-ext/object/is-callable.js\");\n\nmodule.exports = function (value) {\n\ttry {\n\t\tif (value && isCallable(value.toString)) return value.toString();\n\t\treturn String(value);\n\t} catch (e) {\n\t\treturn \"<Non-coercible to string value>\";\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/safe-to-string.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/string/#/contains/is-implemented.js\")()\n\t? String.prototype.contains\n\t: __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/string/#/contains/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/contains/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/is-implemented.js":
/*!******************************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/is-implemented.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar str = \"razdwatrzy\";\n\nmodule.exports = function () {\n\tif (typeof str.contains !== \"function\") return false;\n\treturn (str.contains(\"dwa\") === true) && (str.contains(\"foo\") === false);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/contains/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/contains/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/es5-ext/string/#/contains/shim.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar indexOf = String.prototype.indexOf;\n\nmodule.exports = function (searchString/*, position*/) {\n\treturn indexOf.call(this, searchString, arguments[1]) > -1;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/contains/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/repeat/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/es5-ext/string/#/repeat/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es5-ext/string/#/repeat/is-implemented.js\")()\n\t? String.prototype.repeat\n\t: __webpack_require__(/*! ./shim */ \"./node_modules/es5-ext/string/#/repeat/shim.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/repeat/index.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/repeat/is-implemented.js":
/*!****************************************************************!*\
  !*** ./node_modules/es5-ext/string/#/repeat/is-implemented.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar str = \"foo\";\n\nmodule.exports = function () {\n\tif (typeof str.repeat !== \"function\") return false;\n\treturn str.repeat(2) === \"foofoo\";\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/repeat/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/#/repeat/shim.js":
/*!******************************************************!*\
  !*** ./node_modules/es5-ext/string/#/repeat/shim.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Thanks\n// @rauchma http://www.2ality.com/2014/01/efficient-string-repeat.html\n// @mathiasbynens https://github.com/mathiasbynens/String.prototype.repeat/blob/4a4b567def/repeat.js\n\n\n\nvar value     = __webpack_require__(/*! ../../../object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , toInteger = __webpack_require__(/*! ../../../number/to-integer */ \"./node_modules/es5-ext/number/to-integer.js\");\n\nmodule.exports = function (count) {\n\tvar str = String(value(this)), result;\n\tcount = toInteger(count);\n\tif (count < 0) throw new RangeError(\"Count must be >= 0\");\n\tif (!isFinite(count)) throw new RangeError(\"Count must be < ∞\");\n\n\tresult = \"\";\n\twhile (count) {\n\t\tif (count % 2) result += str;\n\t\tif (count > 1) str += str;\n\t\t// eslint-disable-next-line no-bitwise\n\t\tcount >>= 1;\n\t}\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/#/repeat/shim.js?");

/***/ }),

/***/ "./node_modules/es5-ext/string/is-string.js":
/*!**************************************************!*\
  !*** ./node_modules/es5-ext/string/is-string.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar objToString = Object.prototype.toString, id = objToString.call(\"\");\n\nmodule.exports = function (value) {\n\treturn (\n\t\ttypeof value === \"string\" ||\n\t\t(value &&\n\t\t\ttypeof value === \"object\" &&\n\t\t\t(value instanceof String || objToString.call(value) === id)) ||\n\t\tfalse\n\t);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/string/is-string.js?");

/***/ }),

/***/ "./node_modules/es5-ext/to-short-string-representation.js":
/*!****************************************************************!*\
  !*** ./node_modules/es5-ext/to-short-string-representation.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar safeToString = __webpack_require__(/*! ./safe-to-string */ \"./node_modules/es5-ext/safe-to-string.js\");\n\nvar reNewLine = /[\\n\\r\\u2028\\u2029]/g;\n\nmodule.exports = function (value) {\n\tvar string = safeToString(value);\n\t// Trim if too long\n\tif (string.length > 100) string = string.slice(0, 99) + \"…\";\n\t// Replace eventual new lines\n\tstring = string.replace(reNewLine, function (char) {\n\t\treturn JSON.stringify(char).slice(1, -1);\n\t});\n\treturn string;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es5-ext/to-short-string-representation.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/array.js":
/*!********************************************!*\
  !*** ./node_modules/es6-iterator/array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar setPrototypeOf = __webpack_require__(/*! es5-ext/object/set-prototype-of */ \"./node_modules/es5-ext/object/set-prototype-of/index.js\")\n  , contains       = __webpack_require__(/*! es5-ext/string/#/contains */ \"./node_modules/es5-ext/string/#/contains/index.js\")\n  , d              = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , Symbol         = __webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\")\n  , Iterator       = __webpack_require__(/*! ./ */ \"./node_modules/es6-iterator/index.js\");\n\nvar defineProperty = Object.defineProperty, ArrayIterator;\n\nArrayIterator = module.exports = function (arr, kind) {\n\tif (!(this instanceof ArrayIterator)) throw new TypeError(\"Constructor requires 'new'\");\n\tIterator.call(this, arr);\n\tif (!kind) kind = \"value\";\n\telse if (contains.call(kind, \"key+value\")) kind = \"key+value\";\n\telse if (contains.call(kind, \"key\")) kind = \"key\";\n\telse kind = \"value\";\n\tdefineProperty(this, \"__kind__\", d(\"\", kind));\n};\nif (setPrototypeOf) setPrototypeOf(ArrayIterator, Iterator);\n\n// Internal %ArrayIteratorPrototype% doesn't expose its constructor\ndelete ArrayIterator.prototype.constructor;\n\nArrayIterator.prototype = Object.create(Iterator.prototype, {\n\t_resolve: d(function (i) {\n\t\tif (this.__kind__ === \"value\") return this.__list__[i];\n\t\tif (this.__kind__ === \"key+value\") return [i, this.__list__[i]];\n\t\treturn i;\n\t})\n});\ndefineProperty(ArrayIterator.prototype, Symbol.toStringTag, d(\"c\", \"Array Iterator\"));\n\n\n//# sourceURL=webpack:///./node_modules/es6-iterator/array.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/for-of.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-iterator/for-of.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isArguments = __webpack_require__(/*! es5-ext/function/is-arguments */ \"./node_modules/es5-ext/function/is-arguments.js\")\n  , callable    = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , isString    = __webpack_require__(/*! es5-ext/string/is-string */ \"./node_modules/es5-ext/string/is-string.js\")\n  , get         = __webpack_require__(/*! ./get */ \"./node_modules/es6-iterator/get.js\");\n\nvar isArray = Array.isArray, call = Function.prototype.call, some = Array.prototype.some;\n\nmodule.exports = function (iterable, cb /*, thisArg*/) {\n\tvar mode, thisArg = arguments[2], result, doBreak, broken, i, length, char, code;\n\tif (isArray(iterable) || isArguments(iterable)) mode = \"array\";\n\telse if (isString(iterable)) mode = \"string\";\n\telse iterable = get(iterable);\n\n\tcallable(cb);\n\tdoBreak = function () {\n\t\tbroken = true;\n\t};\n\tif (mode === \"array\") {\n\t\tsome.call(iterable, function (value) {\n\t\t\tcall.call(cb, thisArg, value, doBreak);\n\t\t\treturn broken;\n\t\t});\n\t\treturn;\n\t}\n\tif (mode === \"string\") {\n\t\tlength = iterable.length;\n\t\tfor (i = 0; i < length; ++i) {\n\t\t\tchar = iterable[i];\n\t\t\tif (i + 1 < length) {\n\t\t\t\tcode = char.charCodeAt(0);\n\t\t\t\tif (code >= 0xd800 && code <= 0xdbff) char += iterable[++i];\n\t\t\t}\n\t\t\tcall.call(cb, thisArg, char, doBreak);\n\t\t\tif (broken) break;\n\t\t}\n\t\treturn;\n\t}\n\tresult = iterable.next();\n\n\twhile (!result.done) {\n\t\tcall.call(cb, thisArg, result.value, doBreak);\n\t\tif (broken) return;\n\t\tresult = iterable.next();\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-iterator/for-of.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/get.js":
/*!******************************************!*\
  !*** ./node_modules/es6-iterator/get.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isArguments    = __webpack_require__(/*! es5-ext/function/is-arguments */ \"./node_modules/es5-ext/function/is-arguments.js\")\n  , isString       = __webpack_require__(/*! es5-ext/string/is-string */ \"./node_modules/es5-ext/string/is-string.js\")\n  , ArrayIterator  = __webpack_require__(/*! ./array */ \"./node_modules/es6-iterator/array.js\")\n  , StringIterator = __webpack_require__(/*! ./string */ \"./node_modules/es6-iterator/string.js\")\n  , iterable       = __webpack_require__(/*! ./valid-iterable */ \"./node_modules/es6-iterator/valid-iterable.js\")\n  , iteratorSymbol = __webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\").iterator;\n\nmodule.exports = function (obj) {\n\tif (typeof iterable(obj)[iteratorSymbol] === \"function\") return obj[iteratorSymbol]();\n\tif (isArguments(obj)) return new ArrayIterator(obj);\n\tif (isString(obj)) return new StringIterator(obj);\n\treturn new ArrayIterator(obj);\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-iterator/get.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/index.js":
/*!********************************************!*\
  !*** ./node_modules/es6-iterator/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar clear    = __webpack_require__(/*! es5-ext/array/#/clear */ \"./node_modules/es5-ext/array/#/clear.js\")\n  , assign   = __webpack_require__(/*! es5-ext/object/assign */ \"./node_modules/es5-ext/object/assign/index.js\")\n  , callable = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , value    = __webpack_require__(/*! es5-ext/object/valid-value */ \"./node_modules/es5-ext/object/valid-value.js\")\n  , d        = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , autoBind = __webpack_require__(/*! d/auto-bind */ \"./node_modules/d/auto-bind.js\")\n  , Symbol   = __webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\");\n\nvar defineProperty = Object.defineProperty, defineProperties = Object.defineProperties, Iterator;\n\nmodule.exports = Iterator = function (list, context) {\n\tif (!(this instanceof Iterator)) throw new TypeError(\"Constructor requires 'new'\");\n\tdefineProperties(this, {\n\t\t__list__: d(\"w\", value(list)),\n\t\t__context__: d(\"w\", context),\n\t\t__nextIndex__: d(\"w\", 0)\n\t});\n\tif (!context) return;\n\tcallable(context.on);\n\tcontext.on(\"_add\", this._onAdd);\n\tcontext.on(\"_delete\", this._onDelete);\n\tcontext.on(\"_clear\", this._onClear);\n};\n\n// Internal %IteratorPrototype% doesn't expose its constructor\ndelete Iterator.prototype.constructor;\n\ndefineProperties(\n\tIterator.prototype,\n\tassign(\n\t\t{\n\t\t\t_next: d(function () {\n\t\t\t\tvar i;\n\t\t\t\tif (!this.__list__) return undefined;\n\t\t\t\tif (this.__redo__) {\n\t\t\t\t\ti = this.__redo__.shift();\n\t\t\t\t\tif (i !== undefined) return i;\n\t\t\t\t}\n\t\t\t\tif (this.__nextIndex__ < this.__list__.length) return this.__nextIndex__++;\n\t\t\t\tthis._unBind();\n\t\t\t\treturn undefined;\n\t\t\t}),\n\t\t\tnext: d(function () {\n\t\t\t\treturn this._createResult(this._next());\n\t\t\t}),\n\t\t\t_createResult: d(function (i) {\n\t\t\t\tif (i === undefined) return { done: true, value: undefined };\n\t\t\t\treturn { done: false, value: this._resolve(i) };\n\t\t\t}),\n\t\t\t_resolve: d(function (i) {\n\t\t\t\treturn this.__list__[i];\n\t\t\t}),\n\t\t\t_unBind: d(function () {\n\t\t\t\tthis.__list__ = null;\n\t\t\t\tdelete this.__redo__;\n\t\t\t\tif (!this.__context__) return;\n\t\t\t\tthis.__context__.off(\"_add\", this._onAdd);\n\t\t\t\tthis.__context__.off(\"_delete\", this._onDelete);\n\t\t\t\tthis.__context__.off(\"_clear\", this._onClear);\n\t\t\t\tthis.__context__ = null;\n\t\t\t}),\n\t\t\ttoString: d(function () {\n\t\t\t\treturn \"[object \" + (this[Symbol.toStringTag] || \"Object\") + \"]\";\n\t\t\t})\n\t\t},\n\t\tautoBind({\n\t\t\t_onAdd: d(function (index) {\n\t\t\t\tif (index >= this.__nextIndex__) return;\n\t\t\t\t++this.__nextIndex__;\n\t\t\t\tif (!this.__redo__) {\n\t\t\t\t\tdefineProperty(this, \"__redo__\", d(\"c\", [index]));\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tthis.__redo__.forEach(function (redo, i) {\n\t\t\t\t\tif (redo >= index) this.__redo__[i] = ++redo;\n\t\t\t\t}, this);\n\t\t\t\tthis.__redo__.push(index);\n\t\t\t}),\n\t\t\t_onDelete: d(function (index) {\n\t\t\t\tvar i;\n\t\t\t\tif (index >= this.__nextIndex__) return;\n\t\t\t\t--this.__nextIndex__;\n\t\t\t\tif (!this.__redo__) return;\n\t\t\t\ti = this.__redo__.indexOf(index);\n\t\t\t\tif (i !== -1) this.__redo__.splice(i, 1);\n\t\t\t\tthis.__redo__.forEach(function (redo, j) {\n\t\t\t\t\tif (redo > index) this.__redo__[j] = --redo;\n\t\t\t\t}, this);\n\t\t\t}),\n\t\t\t_onClear: d(function () {\n\t\t\t\tif (this.__redo__) clear.call(this.__redo__);\n\t\t\t\tthis.__nextIndex__ = 0;\n\t\t\t})\n\t\t})\n\t)\n);\n\ndefineProperty(\n\tIterator.prototype,\n\tSymbol.iterator,\n\td(function () {\n\t\treturn this;\n\t})\n);\n\n\n//# sourceURL=webpack:///./node_modules/es6-iterator/index.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/is-iterable.js":
/*!**************************************************!*\
  !*** ./node_modules/es6-iterator/is-iterable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isArguments = __webpack_require__(/*! es5-ext/function/is-arguments */ \"./node_modules/es5-ext/function/is-arguments.js\")\n  , isValue     = __webpack_require__(/*! es5-ext/object/is-value */ \"./node_modules/es5-ext/object/is-value.js\")\n  , isString    = __webpack_require__(/*! es5-ext/string/is-string */ \"./node_modules/es5-ext/string/is-string.js\");\n\nvar iteratorSymbol = __webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\").iterator\n  , isArray        = Array.isArray;\n\nmodule.exports = function (value) {\n\tif (!isValue(value)) return false;\n\tif (isArray(value)) return true;\n\tif (isString(value)) return true;\n\tif (isArguments(value)) return true;\n\treturn typeof value[iteratorSymbol] === \"function\";\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-iterator/is-iterable.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/string.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-iterator/string.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Thanks @mathiasbynens\n// http://mathiasbynens.be/notes/javascript-unicode#iterating-over-symbols\n\n\n\nvar setPrototypeOf = __webpack_require__(/*! es5-ext/object/set-prototype-of */ \"./node_modules/es5-ext/object/set-prototype-of/index.js\")\n  , d              = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , Symbol         = __webpack_require__(/*! es6-symbol */ \"./node_modules/es6-symbol/index.js\")\n  , Iterator       = __webpack_require__(/*! ./ */ \"./node_modules/es6-iterator/index.js\");\n\nvar defineProperty = Object.defineProperty, StringIterator;\n\nStringIterator = module.exports = function (str) {\n\tif (!(this instanceof StringIterator)) throw new TypeError(\"Constructor requires 'new'\");\n\tstr = String(str);\n\tIterator.call(this, str);\n\tdefineProperty(this, \"__length__\", d(\"\", str.length));\n};\nif (setPrototypeOf) setPrototypeOf(StringIterator, Iterator);\n\n// Internal %ArrayIteratorPrototype% doesn't expose its constructor\ndelete StringIterator.prototype.constructor;\n\nStringIterator.prototype = Object.create(Iterator.prototype, {\n\t_next: d(function () {\n\t\tif (!this.__list__) return undefined;\n\t\tif (this.__nextIndex__ < this.__length__) return this.__nextIndex__++;\n\t\tthis._unBind();\n\t\treturn undefined;\n\t}),\n\t_resolve: d(function (i) {\n\t\tvar char = this.__list__[i], code;\n\t\tif (this.__nextIndex__ === this.__length__) return char;\n\t\tcode = char.charCodeAt(0);\n\t\tif (code >= 0xd800 && code <= 0xdbff) return char + this.__list__[this.__nextIndex__++];\n\t\treturn char;\n\t})\n});\ndefineProperty(StringIterator.prototype, Symbol.toStringTag, d(\"c\", \"String Iterator\"));\n\n\n//# sourceURL=webpack:///./node_modules/es6-iterator/string.js?");

/***/ }),

/***/ "./node_modules/es6-iterator/valid-iterable.js":
/*!*****************************************************!*\
  !*** ./node_modules/es6-iterator/valid-iterable.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isIterable = __webpack_require__(/*! ./is-iterable */ \"./node_modules/es6-iterator/is-iterable.js\");\n\nmodule.exports = function (value) {\n\tif (!isIterable(value)) throw new TypeError(value + \" is not iterable\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-iterator/valid-iterable.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/index.js":
/*!******************************************!*\
  !*** ./node_modules/es6-symbol/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./is-implemented */ \"./node_modules/es6-symbol/is-implemented.js\")() ? Symbol : __webpack_require__(/*! ./polyfill */ \"./node_modules/es6-symbol/polyfill.js\");\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/index.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/is-implemented.js":
/*!***************************************************!*\
  !*** ./node_modules/es6-symbol/is-implemented.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar validTypes = { object: true, symbol: true };\n\nmodule.exports = function () {\n\tvar symbol;\n\tif (typeof Symbol !== 'function') return false;\n\tsymbol = Symbol('test symbol');\n\ttry { String(symbol); } catch (e) { return false; }\n\n\t// Return 'true' also for polyfills\n\tif (!validTypes[typeof Symbol.iterator]) return false;\n\tif (!validTypes[typeof Symbol.toPrimitive]) return false;\n\tif (!validTypes[typeof Symbol.toStringTag]) return false;\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/is-implemented.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/is-symbol.js":
/*!**********************************************!*\
  !*** ./node_modules/es6-symbol/is-symbol.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (x) {\n\tif (!x) return false;\n\tif (typeof x === 'symbol') return true;\n\tif (!x.constructor) return false;\n\tif (x.constructor.name !== 'Symbol') return false;\n\treturn (x[x.constructor.toStringTag] === 'Symbol');\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/is-symbol.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/polyfill.js":
/*!*********************************************!*\
  !*** ./node_modules/es6-symbol/polyfill.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// ES2015 Symbol polyfill for environments that do not (or partially) support it\n\n\n\nvar d              = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , validateSymbol = __webpack_require__(/*! ./validate-symbol */ \"./node_modules/es6-symbol/validate-symbol.js\")\n\n  , create = Object.create, defineProperties = Object.defineProperties\n  , defineProperty = Object.defineProperty, objPrototype = Object.prototype\n  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null)\n  , isNativeSafe;\n\nif (typeof Symbol === 'function') {\n\tNativeSymbol = Symbol;\n\ttry {\n\t\tString(NativeSymbol());\n\t\tisNativeSafe = true;\n\t} catch (ignore) {}\n}\n\nvar generateName = (function () {\n\tvar created = create(null);\n\treturn function (desc) {\n\t\tvar postfix = 0, name, ie11BugWorkaround;\n\t\twhile (created[desc + (postfix || '')]) ++postfix;\n\t\tdesc += (postfix || '');\n\t\tcreated[desc] = true;\n\t\tname = '@@' + desc;\n\t\tdefineProperty(objPrototype, name, d.gs(null, function (value) {\n\t\t\t// For IE11 issue see:\n\t\t\t// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/\n\t\t\t//    ie11-broken-getters-on-dom-objects\n\t\t\t// https://github.com/medikoo/es6-symbol/issues/12\n\t\t\tif (ie11BugWorkaround) return;\n\t\t\tie11BugWorkaround = true;\n\t\t\tdefineProperty(this, name, d(value));\n\t\t\tie11BugWorkaround = false;\n\t\t}));\n\t\treturn name;\n\t};\n}());\n\n// Internal constructor (not one exposed) for creating Symbol instances.\n// This one is used to ensure that `someSymbol instanceof Symbol` always return false\nHiddenSymbol = function Symbol(description) {\n\tif (this instanceof HiddenSymbol) throw new TypeError('Symbol is not a constructor');\n\treturn SymbolPolyfill(description);\n};\n\n// Exposed `Symbol` constructor\n// (returns instances of HiddenSymbol)\nmodule.exports = SymbolPolyfill = function Symbol(description) {\n\tvar symbol;\n\tif (this instanceof Symbol) throw new TypeError('Symbol is not a constructor');\n\tif (isNativeSafe) return NativeSymbol(description);\n\tsymbol = create(HiddenSymbol.prototype);\n\tdescription = (description === undefined ? '' : String(description));\n\treturn defineProperties(symbol, {\n\t\t__description__: d('', description),\n\t\t__name__: d('', generateName(description))\n\t});\n};\ndefineProperties(SymbolPolyfill, {\n\tfor: d(function (key) {\n\t\tif (globalSymbols[key]) return globalSymbols[key];\n\t\treturn (globalSymbols[key] = SymbolPolyfill(String(key)));\n\t}),\n\tkeyFor: d(function (s) {\n\t\tvar key;\n\t\tvalidateSymbol(s);\n\t\tfor (key in globalSymbols) if (globalSymbols[key] === s) return key;\n\t}),\n\n\t// To ensure proper interoperability with other native functions (e.g. Array.from)\n\t// fallback to eventual native implementation of given symbol\n\thasInstance: d('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),\n\tisConcatSpreadable: d('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||\n\t\tSymbolPolyfill('isConcatSpreadable')),\n\titerator: d('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),\n\tmatch: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),\n\treplace: d('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),\n\tsearch: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),\n\tspecies: d('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),\n\tsplit: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),\n\ttoPrimitive: d('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),\n\ttoStringTag: d('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),\n\tunscopables: d('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))\n});\n\n// Internal tweaks for real symbol producer\ndefineProperties(HiddenSymbol.prototype, {\n\tconstructor: d(SymbolPolyfill),\n\ttoString: d('', function () { return this.__name__; })\n});\n\n// Proper implementation of methods exposed on Symbol.prototype\n// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype\ndefineProperties(SymbolPolyfill.prototype, {\n\ttoString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),\n\tvalueOf: d(function () { return validateSymbol(this); })\n});\ndefineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {\n\tvar symbol = validateSymbol(this);\n\tif (typeof symbol === 'symbol') return symbol;\n\treturn symbol.toString();\n}));\ndefineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));\n\n// Proper implementaton of toPrimitive and toStringTag for returned symbol instances\ndefineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,\n\td('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));\n\n// Note: It's important to define `toPrimitive` as last one, as some implementations\n// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)\n// And that may invoke error in definition flow:\n// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149\ndefineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,\n\td('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/polyfill.js?");

/***/ }),

/***/ "./node_modules/es6-symbol/validate-symbol.js":
/*!****************************************************!*\
  !*** ./node_modules/es6-symbol/validate-symbol.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isSymbol = __webpack_require__(/*! ./is-symbol */ \"./node_modules/es6-symbol/is-symbol.js\");\n\nmodule.exports = function (value) {\n\tif (!isSymbol(value)) throw new TypeError(value + \" is not a symbol\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/es6-symbol/validate-symbol.js?");

/***/ }),

/***/ "./node_modules/event-emitter/index.js":
/*!*********************************************!*\
  !*** ./node_modules/event-emitter/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar d        = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , callable = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n\n  , apply = Function.prototype.apply, call = Function.prototype.call\n  , create = Object.create, defineProperty = Object.defineProperty\n  , defineProperties = Object.defineProperties\n  , hasOwnProperty = Object.prototype.hasOwnProperty\n  , descriptor = { configurable: true, enumerable: false, writable: true }\n\n  , on, once, off, emit, methods, descriptors, base;\n\non = function (type, listener) {\n\tvar data;\n\n\tcallable(listener);\n\n\tif (!hasOwnProperty.call(this, '__ee__')) {\n\t\tdata = descriptor.value = create(null);\n\t\tdefineProperty(this, '__ee__', descriptor);\n\t\tdescriptor.value = null;\n\t} else {\n\t\tdata = this.__ee__;\n\t}\n\tif (!data[type]) data[type] = listener;\n\telse if (typeof data[type] === 'object') data[type].push(listener);\n\telse data[type] = [data[type], listener];\n\n\treturn this;\n};\n\nonce = function (type, listener) {\n\tvar once, self;\n\n\tcallable(listener);\n\tself = this;\n\ton.call(this, type, once = function () {\n\t\toff.call(self, type, once);\n\t\tapply.call(listener, this, arguments);\n\t});\n\n\tonce.__eeOnceListener__ = listener;\n\treturn this;\n};\n\noff = function (type, listener) {\n\tvar data, listeners, candidate, i;\n\n\tcallable(listener);\n\n\tif (!hasOwnProperty.call(this, '__ee__')) return this;\n\tdata = this.__ee__;\n\tif (!data[type]) return this;\n\tlisteners = data[type];\n\n\tif (typeof listeners === 'object') {\n\t\tfor (i = 0; (candidate = listeners[i]); ++i) {\n\t\t\tif ((candidate === listener) ||\n\t\t\t\t\t(candidate.__eeOnceListener__ === listener)) {\n\t\t\t\tif (listeners.length === 2) data[type] = listeners[i ? 0 : 1];\n\t\t\t\telse listeners.splice(i, 1);\n\t\t\t}\n\t\t}\n\t} else {\n\t\tif ((listeners === listener) ||\n\t\t\t\t(listeners.__eeOnceListener__ === listener)) {\n\t\t\tdelete data[type];\n\t\t}\n\t}\n\n\treturn this;\n};\n\nemit = function (type) {\n\tvar i, l, listener, listeners, args;\n\n\tif (!hasOwnProperty.call(this, '__ee__')) return;\n\tlisteners = this.__ee__[type];\n\tif (!listeners) return;\n\n\tif (typeof listeners === 'object') {\n\t\tl = arguments.length;\n\t\targs = new Array(l - 1);\n\t\tfor (i = 1; i < l; ++i) args[i - 1] = arguments[i];\n\n\t\tlisteners = listeners.slice();\n\t\tfor (i = 0; (listener = listeners[i]); ++i) {\n\t\t\tapply.call(listener, this, args);\n\t\t}\n\t} else {\n\t\tswitch (arguments.length) {\n\t\tcase 1:\n\t\t\tcall.call(listeners, this);\n\t\t\tbreak;\n\t\tcase 2:\n\t\t\tcall.call(listeners, this, arguments[1]);\n\t\t\tbreak;\n\t\tcase 3:\n\t\t\tcall.call(listeners, this, arguments[1], arguments[2]);\n\t\t\tbreak;\n\t\tdefault:\n\t\t\tl = arguments.length;\n\t\t\targs = new Array(l - 1);\n\t\t\tfor (i = 1; i < l; ++i) {\n\t\t\t\targs[i - 1] = arguments[i];\n\t\t\t}\n\t\t\tapply.call(listeners, this, args);\n\t\t}\n\t}\n};\n\nmethods = {\n\ton: on,\n\tonce: once,\n\toff: off,\n\temit: emit\n};\n\ndescriptors = {\n\ton: d(on),\n\tonce: d(once),\n\toff: d(off),\n\temit: d(emit)\n};\n\nbase = defineProperties({}, descriptors);\n\nmodule.exports = exports = function (o) {\n\treturn (o == null) ? create(base) : defineProperties(Object(o), descriptors);\n};\nexports.methods = methods;\n\n\n//# sourceURL=webpack:///./node_modules/event-emitter/index.js?");

/***/ }),

/***/ "./node_modules/is-promise/index.js":
/*!******************************************!*\
  !*** ./node_modules/is-promise/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = isPromise;\n\nfunction isPromise(obj) {\n  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-promise/index.js?");

/***/ }),

/***/ "./node_modules/lru-queue/index.js":
/*!*****************************************!*\
  !*** ./node_modules/lru-queue/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toPosInt = __webpack_require__(/*! es5-ext/number/to-pos-integer */ \"./node_modules/es5-ext/number/to-pos-integer.js\")\n\n  , create = Object.create, hasOwnProperty = Object.prototype.hasOwnProperty;\n\nmodule.exports = function (limit) {\n\tvar size = 0, base = 1, queue = create(null), map = create(null), index = 0, del;\n\tlimit = toPosInt(limit);\n\treturn {\n\t\thit: function (id) {\n\t\t\tvar oldIndex = map[id], nuIndex = ++index;\n\t\t\tqueue[nuIndex] = id;\n\t\t\tmap[id] = nuIndex;\n\t\t\tif (!oldIndex) {\n\t\t\t\t++size;\n\t\t\t\tif (size <= limit) return;\n\t\t\t\tid = queue[base];\n\t\t\t\tdel(id);\n\t\t\t\treturn id;\n\t\t\t}\n\t\t\tdelete queue[oldIndex];\n\t\t\tif (base !== oldIndex) return;\n\t\t\twhile (!hasOwnProperty.call(queue, ++base)) continue; //jslint: skip\n\t\t},\n\t\tdelete: del = function (id) {\n\t\t\tvar oldIndex = map[id];\n\t\t\tif (!oldIndex) return;\n\t\t\tdelete queue[oldIndex];\n\t\t\tdelete map[id];\n\t\t\t--size;\n\t\t\tif (base !== oldIndex) return;\n\t\t\tif (!size) {\n\t\t\t\tindex = 0;\n\t\t\t\tbase = 1;\n\t\t\t\treturn;\n\t\t\t}\n\t\t\twhile (!hasOwnProperty.call(queue, ++base)) continue; //jslint: skip\n\t\t},\n\t\tclear: function () {\n\t\t\tsize = 0;\n\t\t\tbase = 1;\n\t\t\tqueue = create(null);\n\t\t\tmap = create(null);\n\t\t\tindex = 0;\n\t\t}\n\t};\n};\n\n\n//# sourceURL=webpack:///./node_modules/lru-queue/index.js?");

/***/ }),

/***/ "./node_modules/memoizee/ext/async.js":
/*!********************************************!*\
  !*** ./node_modules/memoizee/ext/async.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint consistent-this: 0, no-shadow:0, no-eq-null: 0, eqeqeq: 0, no-unused-vars: 0 */\n\n// Support for asynchronous functions\n\n\n\nvar aFrom        = __webpack_require__(/*! es5-ext/array/from */ \"./node_modules/es5-ext/array/from/index.js\")\n  , objectMap    = __webpack_require__(/*! es5-ext/object/map */ \"./node_modules/es5-ext/object/map.js\")\n  , mixin        = __webpack_require__(/*! es5-ext/object/mixin */ \"./node_modules/es5-ext/object/mixin.js\")\n  , defineLength = __webpack_require__(/*! es5-ext/function/_define-length */ \"./node_modules/es5-ext/function/_define-length.js\")\n  , nextTick     = __webpack_require__(/*! next-tick */ \"./node_modules/next-tick/index.js\");\n\nvar slice = Array.prototype.slice, apply = Function.prototype.apply, create = Object.create;\n\n__webpack_require__(/*! ../lib/registered-extensions */ \"./node_modules/memoizee/lib/registered-extensions.js\").async = function (tbi, conf) {\n\tvar waiting = create(null)\n\t  , cache = create(null)\n\t  , base = conf.memoized\n\t  , original = conf.original\n\t  , currentCallback\n\t  , currentContext\n\t  , currentArgs;\n\n\t// Initial\n\tconf.memoized = defineLength(function (arg) {\n\t\tvar args = arguments, last = args[args.length - 1];\n\t\tif (typeof last === \"function\") {\n\t\t\tcurrentCallback = last;\n\t\t\targs = slice.call(args, 0, -1);\n\t\t}\n\t\treturn base.apply(currentContext = this, currentArgs = args);\n\t}, base);\n\ttry { mixin(conf.memoized, base); }\n\tcatch (ignore) {}\n\n\t// From cache (sync)\n\tconf.on(\"get\", function (id) {\n\t\tvar cb, context, args;\n\t\tif (!currentCallback) return;\n\n\t\t// Unresolved\n\t\tif (waiting[id]) {\n\t\t\tif (typeof waiting[id] === \"function\") waiting[id] = [waiting[id], currentCallback];\n\t\t\telse waiting[id].push(currentCallback);\n\t\t\tcurrentCallback = null;\n\t\t\treturn;\n\t\t}\n\n\t\t// Resolved, assure next tick invocation\n\t\tcb = currentCallback;\n\t\tcontext = currentContext;\n\t\targs = currentArgs;\n\t\tcurrentCallback = currentContext = currentArgs = null;\n\t\tnextTick(function () {\n\t\t\tvar data;\n\t\t\tif (hasOwnProperty.call(cache, id)) {\n\t\t\t\tdata = cache[id];\n\t\t\t\tconf.emit(\"getasync\", id, args, context);\n\t\t\t\tapply.call(cb, data.context, data.args);\n\t\t\t} else {\n\t\t\t\t// Purged in a meantime, we shouldn't rely on cached value, recall\n\t\t\t\tcurrentCallback = cb;\n\t\t\t\tcurrentContext = context;\n\t\t\t\tcurrentArgs = args;\n\t\t\t\tbase.apply(context, args);\n\t\t\t}\n\t\t});\n\t});\n\n\t// Not from cache\n\tconf.original = function () {\n\t\tvar args, cb, origCb, result;\n\t\tif (!currentCallback) return apply.call(original, this, arguments);\n\t\targs = aFrom(arguments);\n\t\tcb = function self(err) {\n\t\t\tvar cb, args, id = self.id;\n\t\t\tif (id == null) {\n\t\t\t\t// Shouldn't happen, means async callback was called sync way\n\t\t\t\tnextTick(apply.bind(self, this, arguments));\n\t\t\t\treturn undefined;\n\t\t\t}\n\t\t\tdelete self.id;\n\t\t\tcb = waiting[id];\n\t\t\tdelete waiting[id];\n\t\t\tif (!cb) {\n\t\t\t\t// Already processed,\n\t\t\t\t// outcome of race condition: asyncFn(1, cb), asyncFn.clear(), asyncFn(1, cb)\n\t\t\t\treturn undefined;\n\t\t\t}\n\t\t\targs = aFrom(arguments);\n\t\t\tif (conf.has(id)) {\n\t\t\t\tif (err) {\n\t\t\t\t\tconf.delete(id);\n\t\t\t\t} else {\n\t\t\t\t\tcache[id] = { context: this, args: args };\n\t\t\t\t\tconf.emit(\"setasync\", id, typeof cb === \"function\" ? 1 : cb.length);\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (typeof cb === \"function\") {\n\t\t\t\tresult = apply.call(cb, this, args);\n\t\t\t} else {\n\t\t\t\tcb.forEach(function (cb) { result = apply.call(cb, this, args); }, this);\n\t\t\t}\n\t\t\treturn result;\n\t\t};\n\t\torigCb = currentCallback;\n\t\tcurrentCallback = currentContext = currentArgs = null;\n\t\targs.push(cb);\n\t\tresult = apply.call(original, this, args);\n\t\tcb.cb = origCb;\n\t\tcurrentCallback = cb;\n\t\treturn result;\n\t};\n\n\t// After not from cache call\n\tconf.on(\"set\", function (id) {\n\t\tif (!currentCallback) {\n\t\t\tconf.delete(id);\n\t\t\treturn;\n\t\t}\n\t\tif (waiting[id]) {\n\t\t\t// Race condition: asyncFn(1, cb), asyncFn.clear(), asyncFn(1, cb)\n\t\t\tif (typeof waiting[id] === \"function\") waiting[id] = [waiting[id], currentCallback.cb];\n\t\t\telse waiting[id].push(currentCallback.cb);\n\t\t} else {\n\t\t\twaiting[id] = currentCallback.cb;\n\t\t}\n\t\tdelete currentCallback.cb;\n\t\tcurrentCallback.id = id;\n\t\tcurrentCallback = null;\n\t});\n\n\t// On delete\n\tconf.on(\"delete\", function (id) {\n\t\tvar result;\n\t\t// If false, we don't have value yet, so we assume that intention is not\n\t\t// to memoize this call. After value is obtained we don't cache it but\n\t\t// gracefully pass to callback\n\t\tif (hasOwnProperty.call(waiting, id)) return;\n\t\tif (!cache[id]) return;\n\t\tresult = cache[id];\n\t\tdelete cache[id];\n\t\tconf.emit(\"deleteasync\", id, slice.call(result.args, 1));\n\t});\n\n\t// On clear\n\tconf.on(\"clear\", function () {\n\t\tvar oldCache = cache;\n\t\tcache = create(null);\n\t\tconf.emit(\n\t\t\t\"clearasync\", objectMap(oldCache, function (data) { return slice.call(data.args, 1); })\n\t\t);\n\t});\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/ext/async.js?");

/***/ }),

/***/ "./node_modules/memoizee/ext/dispose.js":
/*!**********************************************!*\
  !*** ./node_modules/memoizee/ext/dispose.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Call dispose callback on each cache purge\n\n\n\nvar callable   = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , forEach    = __webpack_require__(/*! es5-ext/object/for-each */ \"./node_modules/es5-ext/object/for-each.js\")\n  , extensions = __webpack_require__(/*! ../lib/registered-extensions */ \"./node_modules/memoizee/lib/registered-extensions.js\")\n\n  , apply = Function.prototype.apply;\n\nextensions.dispose = function (dispose, conf, options) {\n\tvar del;\n\tcallable(dispose);\n\tif ((options.async && extensions.async) || (options.promise && extensions.promise)) {\n\t\tconf.on(\"deleteasync\", del = function (id, resultArray) {\n\t\t\tapply.call(dispose, null, resultArray);\n\t\t});\n\t\tconf.on(\"clearasync\", function (cache) {\n\t\t\tforEach(cache, function (result, id) {\n del(id, result);\n});\n\t\t});\n\t\treturn;\n\t}\n\tconf.on(\"delete\", del = function (id, result) {\n dispose(result);\n});\n\tconf.on(\"clear\", function (cache) {\n\t\tforEach(cache, function (result, id) {\n del(id, result);\n});\n\t});\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/ext/dispose.js?");

/***/ }),

/***/ "./node_modules/memoizee/ext/max-age.js":
/*!**********************************************!*\
  !*** ./node_modules/memoizee/ext/max-age.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint consistent-this: 0 */\n\n// Timeout cached values\n\n\n\nvar aFrom      = __webpack_require__(/*! es5-ext/array/from */ \"./node_modules/es5-ext/array/from/index.js\")\n  , forEach    = __webpack_require__(/*! es5-ext/object/for-each */ \"./node_modules/es5-ext/object/for-each.js\")\n  , nextTick   = __webpack_require__(/*! next-tick */ \"./node_modules/next-tick/index.js\")\n  , isPromise  = __webpack_require__(/*! is-promise */ \"./node_modules/is-promise/index.js\")\n  , timeout    = __webpack_require__(/*! timers-ext/valid-timeout */ \"./node_modules/timers-ext/valid-timeout.js\")\n  , extensions = __webpack_require__(/*! ../lib/registered-extensions */ \"./node_modules/memoizee/lib/registered-extensions.js\");\n\nvar noop = Function.prototype, max = Math.max, min = Math.min, create = Object.create;\n\nextensions.maxAge = function (maxAge, conf, options) {\n\tvar timeouts, postfix, preFetchAge, preFetchTimeouts;\n\n\tmaxAge = timeout(maxAge);\n\tif (!maxAge) return;\n\n\ttimeouts = create(null);\n\tpostfix =\n\t\t(options.async && extensions.async) || (options.promise && extensions.promise)\n\t\t\t? \"async\"\n\t\t\t: \"\";\n\tconf.on(\"set\" + postfix, function (id) {\n\t\ttimeouts[id] = setTimeout(function () { conf.delete(id); }, maxAge);\n\t\tif (typeof timeouts[id].unref === \"function\") timeouts[id].unref();\n\t\tif (!preFetchTimeouts) return;\n\t\tif (preFetchTimeouts[id]) {\n\t\t\tif (preFetchTimeouts[id] !== \"nextTick\") clearTimeout(preFetchTimeouts[id]);\n\t\t}\n\t\tpreFetchTimeouts[id] = setTimeout(function () {\n\t\t\tdelete preFetchTimeouts[id];\n\t\t}, preFetchAge);\n\t\tif (typeof preFetchTimeouts[id].unref === \"function\") preFetchTimeouts[id].unref();\n\t});\n\tconf.on(\"delete\" + postfix, function (id) {\n\t\tclearTimeout(timeouts[id]);\n\t\tdelete timeouts[id];\n\t\tif (!preFetchTimeouts) return;\n\t\tif (preFetchTimeouts[id] !== \"nextTick\") clearTimeout(preFetchTimeouts[id]);\n\t\tdelete preFetchTimeouts[id];\n\t});\n\n\tif (options.preFetch) {\n\t\tif (options.preFetch === true || isNaN(options.preFetch)) {\n\t\t\tpreFetchAge = 0.333;\n\t\t} else {\n\t\t\tpreFetchAge = max(min(Number(options.preFetch), 1), 0);\n\t\t}\n\t\tif (preFetchAge) {\n\t\t\tpreFetchTimeouts = {};\n\t\t\tpreFetchAge = (1 - preFetchAge) * maxAge;\n\t\t\tconf.on(\"get\" + postfix, function (id, args, context) {\n\t\t\t\tif (!preFetchTimeouts[id]) {\n\t\t\t\t\tpreFetchTimeouts[id] = \"nextTick\";\n\t\t\t\t\tnextTick(function () {\n\t\t\t\t\t\tvar result;\n\t\t\t\t\t\tif (preFetchTimeouts[id] !== \"nextTick\") return;\n\t\t\t\t\t\tdelete preFetchTimeouts[id];\n\t\t\t\t\t\tconf.delete(id);\n\t\t\t\t\t\tif (options.async) {\n\t\t\t\t\t\t\targs = aFrom(args);\n\t\t\t\t\t\t\targs.push(noop);\n\t\t\t\t\t\t}\n\t\t\t\t\t\tresult = conf.memoized.apply(context, args);\n\t\t\t\t\t\tif (options.promise) {\n\t\t\t\t\t\t\t// Supress eventual error warnings\n\t\t\t\t\t\t\tif (isPromise(result)) {\n\t\t\t\t\t\t\t\tif (typeof result.done === \"function\") result.done(noop, noop);\n\t\t\t\t\t\t\t\telse result.then(noop, noop);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t}\n\t\t\t\t\t});\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}\n\n\tconf.on(\"clear\" + postfix, function () {\n\t\tforEach(timeouts, function (id) { clearTimeout(id); });\n\t\ttimeouts = {};\n\t\tif (preFetchTimeouts) {\n\t\t\tforEach(preFetchTimeouts, function (id) { if (id !== \"nextTick\") clearTimeout(id); });\n\t\t\tpreFetchTimeouts = {};\n\t\t}\n\t});\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/ext/max-age.js?");

/***/ }),

/***/ "./node_modules/memoizee/ext/max.js":
/*!******************************************!*\
  !*** ./node_modules/memoizee/ext/max.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Limit cache size, LRU (least recently used) algorithm.\n\n\n\nvar toPosInteger = __webpack_require__(/*! es5-ext/number/to-pos-integer */ \"./node_modules/es5-ext/number/to-pos-integer.js\")\n  , lruQueue     = __webpack_require__(/*! lru-queue */ \"./node_modules/lru-queue/index.js\")\n  , extensions   = __webpack_require__(/*! ../lib/registered-extensions */ \"./node_modules/memoizee/lib/registered-extensions.js\");\n\nextensions.max = function (max, conf, options) {\n\tvar postfix, queue, hit;\n\n\tmax = toPosInteger(max);\n\tif (!max) return;\n\n\tqueue = lruQueue(max);\n\tpostfix = (options.async && extensions.async) || (options.promise && extensions.promise)\n\t\t? \"async\" : \"\";\n\n\tconf.on(\"set\" + postfix, hit = function (id) {\n\t\tid = queue.hit(id);\n\t\tif (id === undefined) return;\n\t\tconf.delete(id);\n\t});\n\tconf.on(\"get\" + postfix, hit);\n\tconf.on(\"delete\" + postfix, queue.delete);\n\tconf.on(\"clear\" + postfix, queue.clear);\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/ext/max.js?");

/***/ }),

/***/ "./node_modules/memoizee/ext/promise.js":
/*!**********************************************!*\
  !*** ./node_modules/memoizee/ext/promise.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint max-statements: 0 */\n\n// Support for functions returning promise\n\n\n\nvar objectMap     = __webpack_require__(/*! es5-ext/object/map */ \"./node_modules/es5-ext/object/map.js\")\n  , primitiveSet  = __webpack_require__(/*! es5-ext/object/primitive-set */ \"./node_modules/es5-ext/object/primitive-set.js\")\n  , ensureString  = __webpack_require__(/*! es5-ext/object/validate-stringifiable-value */ \"./node_modules/es5-ext/object/validate-stringifiable-value.js\")\n  , toShortString = __webpack_require__(/*! es5-ext/to-short-string-representation */ \"./node_modules/es5-ext/to-short-string-representation.js\")\n  , isPromise     = __webpack_require__(/*! is-promise */ \"./node_modules/is-promise/index.js\")\n  , nextTick      = __webpack_require__(/*! next-tick */ \"./node_modules/next-tick/index.js\");\n\nvar create = Object.create\n  , supportedModes = primitiveSet(\"then\", \"then:finally\", \"done\", \"done:finally\");\n\n__webpack_require__(/*! ../lib/registered-extensions */ \"./node_modules/memoizee/lib/registered-extensions.js\").promise = function (mode, conf) {\n\tvar waiting = create(null), cache = create(null), promises = create(null);\n\n\tif (mode === true) {\n\t\tmode = null;\n\t} else {\n\t\tmode = ensureString(mode);\n\t\tif (!supportedModes[mode]) {\n\t\t\tthrow new TypeError(\"'\" + toShortString(mode) + \"' is not valid promise mode\");\n\t\t}\n\t}\n\n\t// After not from cache call\n\tconf.on(\"set\", function (id, ignore, promise) {\n\t\tvar isFailed = false;\n\n\t\tif (!isPromise(promise)) {\n\t\t\t// Non promise result\n\t\t\tcache[id] = promise;\n\t\t\tconf.emit(\"setasync\", id, 1);\n\t\t\treturn;\n\t\t}\n\t\twaiting[id] = 1;\n\t\tpromises[id] = promise;\n\t\tvar onSuccess = function (result) {\n\t\t\tvar count = waiting[id];\n\t\t\tif (isFailed) {\n\t\t\t\tthrow new Error(\n\t\t\t\t\t\"Memoizee error: Detected unordered then|done & finally resolution, which \" +\n\t\t\t\t\t\t\"in turn makes proper detection of success/failure impossible (when in \" +\n\t\t\t\t\t\t\"'done:finally' mode)\\n\" +\n\t\t\t\t\t\t\"Consider to rely on 'then' or 'done' mode instead.\"\n\t\t\t\t);\n\t\t\t}\n\t\t\tif (!count) return; // Deleted from cache before resolved\n\t\t\tdelete waiting[id];\n\t\t\tcache[id] = result;\n\t\t\tconf.emit(\"setasync\", id, count);\n\t\t};\n\t\tvar onFailure = function () {\n\t\t\tisFailed = true;\n\t\t\tif (!waiting[id]) return; // Deleted from cache (or succeed in case of finally)\n\t\t\tdelete waiting[id];\n\t\t\tdelete promises[id];\n\t\t\tconf.delete(id);\n\t\t};\n\n\t\tvar resolvedMode = mode;\n\t\tif (!resolvedMode) resolvedMode = \"then\";\n\n\t\tif (resolvedMode === \"then\") {\n\t\t\tvar nextTickFailure = function () { nextTick(onFailure); };\n\t\t\t// Eventual finally needs to be attached to non rejected promise\n\t\t\t// (so we not force propagation of unhandled rejection)\n\t\t\tpromise = promise.then(function (result) {\n\t\t\t\tnextTick(onSuccess.bind(this, result));\n\t\t\t}, nextTickFailure);\n\t\t\t// If `finally` is a function we attach to it to remove cancelled promises.\n\t\t\tif (typeof promise.finally === \"function\") {\n\t\t\t\tpromise.finally(nextTickFailure);\n\t\t\t}\n\t\t} else if (resolvedMode === \"done\") {\n\t\t\t// Not recommended, as it may mute any eventual \"Unhandled error\" events\n\t\t\tif (typeof promise.done !== \"function\") {\n\t\t\t\tthrow new Error(\n\t\t\t\t\t\"Memoizee error: Retrieved promise does not implement 'done' \" +\n\t\t\t\t\t\t\"in 'done' mode\"\n\t\t\t\t);\n\t\t\t}\n\t\t\tpromise.done(onSuccess, onFailure);\n\t\t} else if (resolvedMode === \"done:finally\") {\n\t\t\t// The only mode with no side effects assuming library does not throw unconditionally\n\t\t\t// for rejected promises.\n\t\t\tif (typeof promise.done !== \"function\") {\n\t\t\t\tthrow new Error(\n\t\t\t\t\t\"Memoizee error: Retrieved promise does not implement 'done' \" +\n\t\t\t\t\t\t\"in 'done:finally' mode\"\n\t\t\t\t);\n\t\t\t}\n\t\t\tif (typeof promise.finally !== \"function\") {\n\t\t\t\tthrow new Error(\n\t\t\t\t\t\"Memoizee error: Retrieved promise does not implement 'finally' \" +\n\t\t\t\t\t\t\"in 'done:finally' mode\"\n\t\t\t\t);\n\t\t\t}\n\t\t\tpromise.done(onSuccess);\n\t\t\tpromise.finally(onFailure);\n\t\t}\n\t});\n\n\t// From cache (sync)\n\tconf.on(\"get\", function (id, args, context) {\n\t\tvar promise;\n\t\tif (waiting[id]) {\n\t\t\t++waiting[id]; // Still waiting\n\t\t\treturn;\n\t\t}\n\t\tpromise = promises[id];\n\t\tvar emit = function () { conf.emit(\"getasync\", id, args, context); };\n\t\tif (isPromise(promise)) {\n\t\t\tif (typeof promise.done === \"function\") promise.done(emit);\n\t\t\telse {\n\t\t\t\tpromise.then(function () { nextTick(emit); });\n\t\t\t}\n\t\t} else {\n\t\t\temit();\n\t\t}\n\t});\n\n\t// On delete\n\tconf.on(\"delete\", function (id) {\n\t\tdelete promises[id];\n\t\tif (waiting[id]) {\n\t\t\tdelete waiting[id];\n\t\t\treturn; // Not yet resolved\n\t\t}\n\t\tif (!hasOwnProperty.call(cache, id)) return;\n\t\tvar result = cache[id];\n\t\tdelete cache[id];\n\t\tconf.emit(\"deleteasync\", id, [result]);\n\t});\n\n\t// On clear\n\tconf.on(\"clear\", function () {\n\t\tvar oldCache = cache;\n\t\tcache = create(null);\n\t\twaiting = create(null);\n\t\tpromises = create(null);\n\t\tconf.emit(\"clearasync\", objectMap(oldCache, function (data) { return [data]; }));\n\t});\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/ext/promise.js?");

/***/ }),

/***/ "./node_modules/memoizee/ext/ref-counter.js":
/*!**************************************************!*\
  !*** ./node_modules/memoizee/ext/ref-counter.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("// Reference counter, useful for garbage collector like functionality\n\n\n\nvar d          = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , extensions = __webpack_require__(/*! ../lib/registered-extensions */ \"./node_modules/memoizee/lib/registered-extensions.js\")\n\n  , create = Object.create, defineProperties = Object.defineProperties;\n\nextensions.refCounter = function (ignore, conf, options) {\n\tvar cache, postfix;\n\n\tcache = create(null);\n\tpostfix = (options.async && extensions.async) || (options.promise && extensions.promise)\n\t\t? \"async\" : \"\";\n\n\tconf.on(\"set\" + postfix, function (id, length) {\n cache[id] = length || 1;\n});\n\tconf.on(\"get\" + postfix, function (id) {\n ++cache[id];\n});\n\tconf.on(\"delete\" + postfix, function (id) {\n delete cache[id];\n});\n\tconf.on(\"clear\" + postfix, function () {\n cache = {};\n});\n\n\tdefineProperties(conf.memoized, {\n\t\tdeleteRef: d(function () {\n\t\t\tvar id = conf.get(arguments);\n\t\t\tif (id === null) return null;\n\t\t\tif (!cache[id]) return null;\n\t\t\tif (!--cache[id]) {\n\t\t\t\tconf.delete(id);\n\t\t\t\treturn true;\n\t\t\t}\n\t\t\treturn false;\n\t\t}),\n\t\tgetRefCount: d(function () {\n\t\t\tvar id = conf.get(arguments);\n\t\t\tif (id === null) return 0;\n\t\t\tif (!cache[id]) return 0;\n\t\t\treturn cache[id];\n\t\t})\n\t});\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/ext/ref-counter.js?");

/***/ }),

/***/ "./node_modules/memoizee/index.js":
/*!****************************************!*\
  !*** ./node_modules/memoizee/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ \"./node_modules/es5-ext/object/normalize-options.js\")\n  , resolveLength = __webpack_require__(/*! ./lib/resolve-length */ \"./node_modules/memoizee/lib/resolve-length.js\")\n  , plain         = __webpack_require__(/*! ./plain */ \"./node_modules/memoizee/plain.js\");\n\nmodule.exports = function (fn/*, options*/) {\n\tvar options = normalizeOpts(arguments[1]), length;\n\n\tif (!options.normalizer) {\n\t\tlength = options.length = resolveLength(options.length, fn.length, options.async);\n\t\tif (length !== 0) {\n\t\t\tif (options.primitive) {\n\t\t\t\tif (length === false) {\n\t\t\t\t\toptions.normalizer = __webpack_require__(/*! ./normalizers/primitive */ \"./node_modules/memoizee/normalizers/primitive.js\");\n\t\t\t\t} else if (length > 1) {\n\t\t\t\t\toptions.normalizer = __webpack_require__(/*! ./normalizers/get-primitive-fixed */ \"./node_modules/memoizee/normalizers/get-primitive-fixed.js\")(length);\n\t\t\t\t}\n\t\t\t} else if (length === false) options.normalizer = __webpack_require__(/*! ./normalizers/get */ \"./node_modules/memoizee/normalizers/get.js\")();\n\t\t\t\telse if (length === 1) options.normalizer = __webpack_require__(/*! ./normalizers/get-1 */ \"./node_modules/memoizee/normalizers/get-1.js\")();\n\t\t\t\telse options.normalizer = __webpack_require__(/*! ./normalizers/get-fixed */ \"./node_modules/memoizee/normalizers/get-fixed.js\")(length);\n\t\t}\n\t}\n\n\t// Assure extensions\n\tif (options.async) __webpack_require__(/*! ./ext/async */ \"./node_modules/memoizee/ext/async.js\");\n\tif (options.promise) __webpack_require__(/*! ./ext/promise */ \"./node_modules/memoizee/ext/promise.js\");\n\tif (options.dispose) __webpack_require__(/*! ./ext/dispose */ \"./node_modules/memoizee/ext/dispose.js\");\n\tif (options.maxAge) __webpack_require__(/*! ./ext/max-age */ \"./node_modules/memoizee/ext/max-age.js\");\n\tif (options.max) __webpack_require__(/*! ./ext/max */ \"./node_modules/memoizee/ext/max.js\");\n\tif (options.refCounter) __webpack_require__(/*! ./ext/ref-counter */ \"./node_modules/memoizee/ext/ref-counter.js\");\n\n\treturn plain(fn, options);\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/index.js?");

/***/ }),

/***/ "./node_modules/memoizee/lib/configure-map.js":
/*!****************************************************!*\
  !*** ./node_modules/memoizee/lib/configure-map.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint no-eq-null: 0, eqeqeq: 0, no-unused-vars: 0 */\n\n\n\nvar customError      = __webpack_require__(/*! es5-ext/error/custom */ \"./node_modules/es5-ext/error/custom.js\")\n  , defineLength     = __webpack_require__(/*! es5-ext/function/_define-length */ \"./node_modules/es5-ext/function/_define-length.js\")\n  , d                = __webpack_require__(/*! d */ \"./node_modules/d/index.js\")\n  , ee               = __webpack_require__(/*! event-emitter */ \"./node_modules/event-emitter/index.js\").methods\n  , resolveResolve   = __webpack_require__(/*! ./resolve-resolve */ \"./node_modules/memoizee/lib/resolve-resolve.js\")\n  , resolveNormalize = __webpack_require__(/*! ./resolve-normalize */ \"./node_modules/memoizee/lib/resolve-normalize.js\");\n\nvar apply = Function.prototype.apply\n  , call = Function.prototype.call\n  , create = Object.create\n  , defineProperties = Object.defineProperties\n  , on = ee.on\n  , emit = ee.emit;\n\nmodule.exports = function (original, length, options) {\n\tvar cache = create(null)\n\t  , conf\n\t  , memLength\n\t  , get\n\t  , set\n\t  , del\n\t  , clear\n\t  , extDel\n\t  , extGet\n\t  , extHas\n\t  , normalizer\n\t  , getListeners\n\t  , setListeners\n\t  , deleteListeners\n\t  , memoized\n\t  , resolve;\n\tif (length !== false) memLength = length;\n\telse if (isNaN(original.length)) memLength = 1;\n\telse memLength = original.length;\n\n\tif (options.normalizer) {\n\t\tnormalizer = resolveNormalize(options.normalizer);\n\t\tget = normalizer.get;\n\t\tset = normalizer.set;\n\t\tdel = normalizer.delete;\n\t\tclear = normalizer.clear;\n\t}\n\tif (options.resolvers != null) resolve = resolveResolve(options.resolvers);\n\n\tif (get) {\n\t\tmemoized = defineLength(function (arg) {\n\t\t\tvar id, result, args = arguments;\n\t\t\tif (resolve) args = resolve(args);\n\t\t\tid = get(args);\n\t\t\tif (id !== null) {\n\t\t\t\tif (hasOwnProperty.call(cache, id)) {\n\t\t\t\t\tif (getListeners) conf.emit(\"get\", id, args, this);\n\t\t\t\t\treturn cache[id];\n\t\t\t\t}\n\t\t\t}\n\t\t\tif (args.length === 1) result = call.call(original, this, args[0]);\n\t\t\telse result = apply.call(original, this, args);\n\t\t\tif (id === null) {\n\t\t\t\tid = get(args);\n\t\t\t\tif (id !== null) throw customError(\"Circular invocation\", \"CIRCULAR_INVOCATION\");\n\t\t\t\tid = set(args);\n\t\t\t} else if (hasOwnProperty.call(cache, id)) {\n\t\t\t\tthrow customError(\"Circular invocation\", \"CIRCULAR_INVOCATION\");\n\t\t\t}\n\t\t\tcache[id] = result;\n\t\t\tif (setListeners) conf.emit(\"set\", id, null, result);\n\t\t\treturn result;\n\t\t}, memLength);\n\t} else if (length === 0) {\n\t\tmemoized = function () {\n\t\t\tvar result;\n\t\t\tif (hasOwnProperty.call(cache, \"data\")) {\n\t\t\t\tif (getListeners) conf.emit(\"get\", \"data\", arguments, this);\n\t\t\t\treturn cache.data;\n\t\t\t}\n\t\t\tif (arguments.length) result = apply.call(original, this, arguments);\n\t\t\telse result = call.call(original, this);\n\t\t\tif (hasOwnProperty.call(cache, \"data\")) {\n\t\t\t\tthrow customError(\"Circular invocation\", \"CIRCULAR_INVOCATION\");\n\t\t\t}\n\t\t\tcache.data = result;\n\t\t\tif (setListeners) conf.emit(\"set\", \"data\", null, result);\n\t\t\treturn result;\n\t\t};\n\t} else {\n\t\tmemoized = function (arg) {\n\t\t\tvar result, args = arguments, id;\n\t\t\tif (resolve) args = resolve(arguments);\n\t\t\tid = String(args[0]);\n\t\t\tif (hasOwnProperty.call(cache, id)) {\n\t\t\t\tif (getListeners) conf.emit(\"get\", id, args, this);\n\t\t\t\treturn cache[id];\n\t\t\t}\n\t\t\tif (args.length === 1) result = call.call(original, this, args[0]);\n\t\t\telse result = apply.call(original, this, args);\n\t\t\tif (hasOwnProperty.call(cache, id)) {\n\t\t\t\tthrow customError(\"Circular invocation\", \"CIRCULAR_INVOCATION\");\n\t\t\t}\n\t\t\tcache[id] = result;\n\t\t\tif (setListeners) conf.emit(\"set\", id, null, result);\n\t\t\treturn result;\n\t\t};\n\t}\n\tconf = {\n\t\toriginal: original,\n\t\tmemoized: memoized,\n\t\tprofileName: options.profileName,\n\t\tget: function (args) {\n\t\t\tif (resolve) args = resolve(args);\n\t\t\tif (get) return get(args);\n\t\t\treturn String(args[0]);\n\t\t},\n\t\thas: function (id) { return hasOwnProperty.call(cache, id); },\n\t\tdelete: function (id) {\n\t\t\tvar result;\n\t\t\tif (!hasOwnProperty.call(cache, id)) return;\n\t\t\tif (del) del(id);\n\t\t\tresult = cache[id];\n\t\t\tdelete cache[id];\n\t\t\tif (deleteListeners) conf.emit(\"delete\", id, result);\n\t\t},\n\t\tclear: function () {\n\t\t\tvar oldCache = cache;\n\t\t\tif (clear) clear();\n\t\t\tcache = create(null);\n\t\t\tconf.emit(\"clear\", oldCache);\n\t\t},\n\t\ton: function (type, listener) {\n\t\t\tif (type === \"get\") getListeners = true;\n\t\t\telse if (type === \"set\") setListeners = true;\n\t\t\telse if (type === \"delete\") deleteListeners = true;\n\t\t\treturn on.call(this, type, listener);\n\t\t},\n\t\temit: emit,\n\t\tupdateEnv: function () { original = conf.original; }\n\t};\n\tif (get) {\n\t\textDel = defineLength(function (arg) {\n\t\t\tvar id, args = arguments;\n\t\t\tif (resolve) args = resolve(args);\n\t\t\tid = get(args);\n\t\t\tif (id === null) return;\n\t\t\tconf.delete(id);\n\t\t}, memLength);\n\t} else if (length === 0) {\n\t\textDel = function () { return conf.delete(\"data\"); };\n\t} else {\n\t\textDel = function (arg) {\n\t\t\tif (resolve) arg = resolve(arguments)[0];\n\t\t\treturn conf.delete(arg);\n\t\t};\n\t}\n\textGet = defineLength(function () {\n\t\tvar id, args = arguments;\n\t\tif (length === 0) return cache.data;\n\t\tif (resolve) args = resolve(args);\n\t\tif (get) id = get(args);\n\t\telse id = String(args[0]);\n\t\treturn cache[id];\n\t});\n\textHas = defineLength(function () {\n\t\tvar id, args = arguments;\n\t\tif (length === 0) return conf.has(\"data\");\n\t\tif (resolve) args = resolve(args);\n\t\tif (get) id = get(args);\n\t\telse id = String(args[0]);\n\t\tif (id === null) return false;\n\t\treturn conf.has(id);\n\t});\n\tdefineProperties(memoized, {\n\t\t__memoized__: d(true),\n\t\tdelete: d(extDel),\n\t\tclear: d(conf.clear),\n\t\t_get: d(extGet),\n\t\t_has: d(extHas)\n\t});\n\treturn conf;\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/lib/configure-map.js?");

/***/ }),

/***/ "./node_modules/memoizee/lib/methods.js":
/*!**********************************************!*\
  !*** ./node_modules/memoizee/lib/methods.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar forEach       = __webpack_require__(/*! es5-ext/object/for-each */ \"./node_modules/es5-ext/object/for-each.js\")\n  , normalizeOpts = __webpack_require__(/*! es5-ext/object/normalize-options */ \"./node_modules/es5-ext/object/normalize-options.js\")\n  , callable      = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , lazy          = __webpack_require__(/*! d/lazy */ \"./node_modules/d/lazy.js\")\n  , resolveLength = __webpack_require__(/*! ./resolve-length */ \"./node_modules/memoizee/lib/resolve-length.js\")\n  , extensions    = __webpack_require__(/*! ./registered-extensions */ \"./node_modules/memoizee/lib/registered-extensions.js\");\n\nmodule.exports = function (memoize) {\n\treturn function (props) {\n\t\tforEach(props, function (desc) {\n\t\t\tvar fn = callable(desc.value), length;\n\t\t\tdesc.value = function (options) {\n\t\t\t\tif (options.getNormalizer) {\n\t\t\t\t\toptions = normalizeOpts(options);\n\t\t\t\t\tif (length === undefined) {\n\t\t\t\t\t\tlength = resolveLength(\n\t\t\t\t\t\t\toptions.length,\n\t\t\t\t\t\t\tfn.length,\n\t\t\t\t\t\t\toptions.async && extensions.async\n\t\t\t\t\t\t);\n\t\t\t\t\t}\n\t\t\t\t\toptions.normalizer = options.getNormalizer(length);\n\t\t\t\t\tdelete options.getNormalizer;\n\t\t\t\t}\n\t\t\t\treturn memoize(fn.bind(this), options);\n\t\t\t};\n\t\t});\n\t\treturn lazy(props);\n\t};\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/lib/methods.js?");

/***/ }),

/***/ "./node_modules/memoizee/lib/registered-extensions.js":
/*!************************************************************!*\
  !*** ./node_modules/memoizee/lib/registered-extensions.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/lib/registered-extensions.js?");

/***/ }),

/***/ "./node_modules/memoizee/lib/resolve-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/memoizee/lib/resolve-length.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toPosInt = __webpack_require__(/*! es5-ext/number/to-pos-integer */ \"./node_modules/es5-ext/number/to-pos-integer.js\");\n\nmodule.exports = function (optsLength, fnLength, isAsync) {\n\tvar length;\n\tif (isNaN(optsLength)) {\n\t\tlength = fnLength;\n\t\tif (!(length >= 0)) return 1;\n\t\tif (isAsync && length) return length - 1;\n\t\treturn length;\n\t}\n\tif (optsLength === false) return false;\n\treturn toPosInt(optsLength);\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/lib/resolve-length.js?");

/***/ }),

/***/ "./node_modules/memoizee/lib/resolve-normalize.js":
/*!********************************************************!*\
  !*** ./node_modules/memoizee/lib/resolve-normalize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar callable = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\");\n\nmodule.exports = function (userNormalizer) {\n\tvar normalizer;\n\tif (typeof userNormalizer === \"function\") return { set: userNormalizer, get: userNormalizer };\n\tnormalizer = { get: callable(userNormalizer.get) };\n\tif (userNormalizer.set !== undefined) {\n\t\tnormalizer.set = callable(userNormalizer.set);\n\t\tif (userNormalizer.delete) normalizer.delete = callable(userNormalizer.delete);\n\t\tif (userNormalizer.clear) normalizer.clear = callable(userNormalizer.clear);\n\t\treturn normalizer;\n\t}\n\tnormalizer.set = normalizer.get;\n\treturn normalizer;\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/lib/resolve-normalize.js?");

/***/ }),

/***/ "./node_modules/memoizee/lib/resolve-resolve.js":
/*!******************************************************!*\
  !*** ./node_modules/memoizee/lib/resolve-resolve.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toArray  = __webpack_require__(/*! es5-ext/array/to-array */ \"./node_modules/es5-ext/array/to-array.js\")\n  , isValue  = __webpack_require__(/*! es5-ext/object/is-value */ \"./node_modules/es5-ext/object/is-value.js\")\n  , callable = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\");\n\nvar slice = Array.prototype.slice, resolveArgs;\n\nresolveArgs = function (args) {\n\treturn this.map(function (resolve, i) {\n\t\treturn resolve ? resolve(args[i]) : args[i];\n\t}).concat(slice.call(args, this.length));\n};\n\nmodule.exports = function (resolvers) {\n\tresolvers = toArray(resolvers);\n\tresolvers.forEach(function (resolve) {\n\t\tif (isValue(resolve)) callable(resolve);\n\t});\n\treturn resolveArgs.bind(resolvers);\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/lib/resolve-resolve.js?");

/***/ }),

/***/ "./node_modules/memoizee/methods.js":
/*!******************************************!*\
  !*** ./node_modules/memoizee/methods.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ./lib/methods */ \"./node_modules/memoizee/lib/methods.js\")(__webpack_require__(/*! ./ */ \"./node_modules/memoizee/index.js\"));\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/methods.js?");

/***/ }),

/***/ "./node_modules/memoizee/normalizers/get-1.js":
/*!****************************************************!*\
  !*** ./node_modules/memoizee/normalizers/get-1.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar indexOf = __webpack_require__(/*! es5-ext/array/#/e-index-of */ \"./node_modules/es5-ext/array/#/e-index-of.js\");\n\nmodule.exports = function () {\n\tvar lastId = 0, argsMap = [], cache = [];\n\treturn {\n\t\tget: function (args) {\n\t\t\tvar index = indexOf.call(argsMap, args[0]);\n\t\t\treturn index === -1 ? null : cache[index];\n\t\t},\n\t\tset: function (args) {\n\t\t\targsMap.push(args[0]);\n\t\t\tcache.push(++lastId);\n\t\t\treturn lastId;\n\t\t},\n\t\tdelete: function (id) {\n\t\t\tvar index = indexOf.call(cache, id);\n\t\t\tif (index !== -1) {\n\t\t\t\targsMap.splice(index, 1);\n\t\t\t\tcache.splice(index, 1);\n\t\t\t}\n\t\t},\n\t\tclear: function () {\n\t\t\targsMap = [];\n\t\t\tcache = [];\n\t\t}\n\t};\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/normalizers/get-1.js?");

/***/ }),

/***/ "./node_modules/memoizee/normalizers/get-fixed.js":
/*!********************************************************!*\
  !*** ./node_modules/memoizee/normalizers/get-fixed.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar indexOf = __webpack_require__(/*! es5-ext/array/#/e-index-of */ \"./node_modules/es5-ext/array/#/e-index-of.js\")\n  , create  = Object.create;\n\nmodule.exports = function (length) {\n\tvar lastId = 0, map = [[], []], cache = create(null);\n\treturn {\n\t\tget: function (args) {\n\t\t\tvar index = 0, set = map, i;\n\t\t\twhile (index < length - 1) {\n\t\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\t\tif (i === -1) return null;\n\t\t\t\tset = set[1][i];\n\t\t\t\t++index;\n\t\t\t}\n\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\tif (i === -1) return null;\n\t\t\treturn set[1][i] || null;\n\t\t},\n\t\tset: function (args) {\n\t\t\tvar index = 0, set = map, i;\n\t\t\twhile (index < length - 1) {\n\t\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\t\tif (i === -1) {\n\t\t\t\t\ti = set[0].push(args[index]) - 1;\n\t\t\t\t\tset[1].push([[], []]);\n\t\t\t\t}\n\t\t\t\tset = set[1][i];\n\t\t\t\t++index;\n\t\t\t}\n\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\tif (i === -1) {\n\t\t\t\ti = set[0].push(args[index]) - 1;\n\t\t\t}\n\t\t\tset[1][i] = ++lastId;\n\t\t\tcache[lastId] = args;\n\t\t\treturn lastId;\n\t\t},\n\t\tdelete: function (id) {\n\t\t\tvar index = 0, set = map, i, path = [], args = cache[id];\n\t\t\twhile (index < length - 1) {\n\t\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\t\tif (i === -1) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tpath.push(set, i);\n\t\t\t\tset = set[1][i];\n\t\t\t\t++index;\n\t\t\t}\n\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\tif (i === -1) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tid = set[1][i];\n\t\t\tset[0].splice(i, 1);\n\t\t\tset[1].splice(i, 1);\n\t\t\twhile (!set[0].length && path.length) {\n\t\t\t\ti = path.pop();\n\t\t\t\tset = path.pop();\n\t\t\t\tset[0].splice(i, 1);\n\t\t\t\tset[1].splice(i, 1);\n\t\t\t}\n\t\t\tdelete cache[id];\n\t\t},\n\t\tclear: function () {\n\t\t\tmap = [[], []];\n\t\t\tcache = create(null);\n\t\t}\n\t};\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/normalizers/get-fixed.js?");

/***/ }),

/***/ "./node_modules/memoizee/normalizers/get-primitive-fixed.js":
/*!******************************************************************!*\
  !*** ./node_modules/memoizee/normalizers/get-primitive-fixed.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (length) {\n\tif (!length) {\n\t\treturn function () {\n\t\t\treturn \"\";\n\t\t};\n\t}\n\treturn function (args) {\n\t\tvar id = String(args[0]), i = 0, currentLength = length;\n\t\twhile (--currentLength) {\n\t\t\tid += \"\\u0001\" + args[++i];\n\t\t}\n\t\treturn id;\n\t};\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/normalizers/get-primitive-fixed.js?");

/***/ }),

/***/ "./node_modules/memoizee/normalizers/get.js":
/*!**************************************************!*\
  !*** ./node_modules/memoizee/normalizers/get.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint max-statements: 0 */\n\n\n\nvar indexOf = __webpack_require__(/*! es5-ext/array/#/e-index-of */ \"./node_modules/es5-ext/array/#/e-index-of.js\");\n\nvar create = Object.create;\n\nmodule.exports = function () {\n\tvar lastId = 0, map = [], cache = create(null);\n\treturn {\n\t\tget: function (args) {\n\t\t\tvar index = 0, set = map, i, length = args.length;\n\t\t\tif (length === 0) return set[length] || null;\n\t\t\tif ((set = set[length])) {\n\t\t\t\twhile (index < length - 1) {\n\t\t\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\t\t\tif (i === -1) return null;\n\t\t\t\t\tset = set[1][i];\n\t\t\t\t\t++index;\n\t\t\t\t}\n\t\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\t\tif (i === -1) return null;\n\t\t\t\treturn set[1][i] || null;\n\t\t\t}\n\t\t\treturn null;\n\t\t},\n\t\tset: function (args) {\n\t\t\tvar index = 0, set = map, i, length = args.length;\n\t\t\tif (length === 0) {\n\t\t\t\tset[length] = ++lastId;\n\t\t\t} else {\n\t\t\t\tif (!set[length]) {\n\t\t\t\t\tset[length] = [[], []];\n\t\t\t\t}\n\t\t\t\tset = set[length];\n\t\t\t\twhile (index < length - 1) {\n\t\t\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\t\t\tif (i === -1) {\n\t\t\t\t\t\ti = set[0].push(args[index]) - 1;\n\t\t\t\t\t\tset[1].push([[], []]);\n\t\t\t\t\t}\n\t\t\t\t\tset = set[1][i];\n\t\t\t\t\t++index;\n\t\t\t\t}\n\t\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\t\tif (i === -1) {\n\t\t\t\t\ti = set[0].push(args[index]) - 1;\n\t\t\t\t}\n\t\t\t\tset[1][i] = ++lastId;\n\t\t\t}\n\t\t\tcache[lastId] = args;\n\t\t\treturn lastId;\n\t\t},\n\t\tdelete: function (id) {\n\t\t\tvar index = 0, set = map, i, args = cache[id], length = args.length, path = [];\n\t\t\tif (length === 0) {\n\t\t\t\tdelete set[length];\n\t\t\t} else if ((set = set[length])) {\n\t\t\t\twhile (index < length - 1) {\n\t\t\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\t\t\tif (i === -1) {\n\t\t\t\t\t\treturn;\n\t\t\t\t\t}\n\t\t\t\t\tpath.push(set, i);\n\t\t\t\t\tset = set[1][i];\n\t\t\t\t\t++index;\n\t\t\t\t}\n\t\t\t\ti = indexOf.call(set[0], args[index]);\n\t\t\t\tif (i === -1) {\n\t\t\t\t\treturn;\n\t\t\t\t}\n\t\t\t\tid = set[1][i];\n\t\t\t\tset[0].splice(i, 1);\n\t\t\t\tset[1].splice(i, 1);\n\t\t\t\twhile (!set[0].length && path.length) {\n\t\t\t\t\ti = path.pop();\n\t\t\t\t\tset = path.pop();\n\t\t\t\t\tset[0].splice(i, 1);\n\t\t\t\t\tset[1].splice(i, 1);\n\t\t\t\t}\n\t\t\t}\n\t\t\tdelete cache[id];\n\t\t},\n\t\tclear: function () {\n\t\t\tmap = [];\n\t\t\tcache = create(null);\n\t\t}\n\t};\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/normalizers/get.js?");

/***/ }),

/***/ "./node_modules/memoizee/normalizers/primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/memoizee/normalizers/primitive.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (args) {\n\tvar id, i, length = args.length;\n\tif (!length) return \"\\u0002\";\n\tid = String(args[i = 0]);\n\twhile (--length) id += \"\\u0001\" + args[++i];\n\treturn id;\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/normalizers/primitive.js?");

/***/ }),

/***/ "./node_modules/memoizee/plain.js":
/*!****************************************!*\
  !*** ./node_modules/memoizee/plain.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar callable      = __webpack_require__(/*! es5-ext/object/valid-callable */ \"./node_modules/es5-ext/object/valid-callable.js\")\n  , forEach       = __webpack_require__(/*! es5-ext/object/for-each */ \"./node_modules/es5-ext/object/for-each.js\")\n  , extensions    = __webpack_require__(/*! ./lib/registered-extensions */ \"./node_modules/memoizee/lib/registered-extensions.js\")\n  , configure     = __webpack_require__(/*! ./lib/configure-map */ \"./node_modules/memoizee/lib/configure-map.js\")\n  , resolveLength = __webpack_require__(/*! ./lib/resolve-length */ \"./node_modules/memoizee/lib/resolve-length.js\");\n\nmodule.exports = function self(fn /*, options */) {\n\tvar options, length, conf;\n\n\tcallable(fn);\n\toptions = Object(arguments[1]);\n\n\tif (options.async && options.promise) {\n\t\tthrow new Error(\"Options 'async' and 'promise' cannot be used together\");\n\t}\n\n\t// Do not memoize already memoized function\n\tif (hasOwnProperty.call(fn, \"__memoized__\") && !options.force) return fn;\n\n\t// Resolve length;\n\tlength = resolveLength(options.length, fn.length, options.async && extensions.async);\n\n\t// Configure cache map\n\tconf = configure(fn, length, options);\n\n\t// Bind eventual extensions\n\tforEach(extensions, function (extFn, name) {\n\t\tif (options[name]) extFn(options[name], conf, options);\n\t});\n\n\tif (self.__profiler__) self.__profiler__(conf);\n\n\tconf.updateEnv();\n\treturn conf.memoized;\n};\n\n\n//# sourceURL=webpack:///./node_modules/memoizee/plain.js?");

/***/ }),

/***/ "./node_modules/next-tick/index.js":
/*!*****************************************!*\
  !*** ./node_modules/next-tick/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar callable, byObserver;\n\ncallable = function (fn) {\n\tif (typeof fn !== 'function') throw new TypeError(fn + \" is not a function\");\n\treturn fn;\n};\n\nbyObserver = function (Observer) {\n\tvar node = document.createTextNode(''), queue, currentQueue, i = 0;\n\tnew Observer(function () {\n\t\tvar callback;\n\t\tif (!queue) {\n\t\t\tif (!currentQueue) return;\n\t\t\tqueue = currentQueue;\n\t\t} else if (currentQueue) {\n\t\t\tqueue = currentQueue.concat(queue);\n\t\t}\n\t\tcurrentQueue = queue;\n\t\tqueue = null;\n\t\tif (typeof currentQueue === 'function') {\n\t\t\tcallback = currentQueue;\n\t\t\tcurrentQueue = null;\n\t\t\tcallback();\n\t\t\treturn;\n\t\t}\n\t\tnode.data = (i = ++i % 2); // Invoke other batch, to handle leftover callbacks in case of crash\n\t\twhile (currentQueue) {\n\t\t\tcallback = currentQueue.shift();\n\t\t\tif (!currentQueue.length) currentQueue = null;\n\t\t\tcallback();\n\t\t}\n\t}).observe(node, { characterData: true });\n\treturn function (fn) {\n\t\tcallable(fn);\n\t\tif (queue) {\n\t\t\tif (typeof queue === 'function') queue = [queue, fn];\n\t\t\telse queue.push(fn);\n\t\t\treturn;\n\t\t}\n\t\tqueue = fn;\n\t\tnode.data = (i = ++i % 2);\n\t};\n};\n\nmodule.exports = (function () {\n\t// Node.js\n\tif ((typeof process === 'object') && process && (typeof process.nextTick === 'function')) {\n\t\treturn process.nextTick;\n\t}\n\n\t// MutationObserver\n\tif ((typeof document === 'object') && document) {\n\t\tif (typeof MutationObserver === 'function') return byObserver(MutationObserver);\n\t\tif (typeof WebKitMutationObserver === 'function') return byObserver(WebKitMutationObserver);\n\t}\n\n\t// W3C Draft\n\t// http://dvcs.w3.org/hg/webperf/raw-file/tip/specs/setImmediate/Overview.html\n\tif (typeof setImmediate === 'function') {\n\t\treturn function (cb) { setImmediate(callable(cb)); };\n\t}\n\n\t// Wide available standard\n\tif ((typeof setTimeout === 'function') || (typeof setTimeout === 'object')) {\n\t\treturn function (cb) { setTimeout(callable(cb), 0); };\n\t}\n\n\treturn null;\n}());\n\n\n//# sourceURL=webpack:///./node_modules/next-tick/index.js?");

/***/ }),

/***/ "./node_modules/timers-ext/max-timeout.js":
/*!************************************************!*\
  !*** ./node_modules/timers-ext/max-timeout.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = 2147483647;\n\n\n//# sourceURL=webpack:///./node_modules/timers-ext/max-timeout.js?");

/***/ }),

/***/ "./node_modules/timers-ext/valid-timeout.js":
/*!**************************************************!*\
  !*** ./node_modules/timers-ext/valid-timeout.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar toPosInt   = __webpack_require__(/*! es5-ext/number/to-pos-integer */ \"./node_modules/es5-ext/number/to-pos-integer.js\")\n  , maxTimeout = __webpack_require__(/*! ./max-timeout */ \"./node_modules/timers-ext/max-timeout.js\");\n\nmodule.exports = function (value) {\n\tvalue = toPosInt(value);\n\tif (value > maxTimeout) throw new TypeError(value + \" exceeds maximum possible timeout\");\n\treturn value;\n};\n\n\n//# sourceURL=webpack:///./node_modules/timers-ext/valid-timeout.js?");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, description, keywords, engines, directories, main, repository, scripts, bugs, homepage, author, license, bin, dependencies, devDependencies, default */
/***/ (function(module) {

eval("module.exports = {\"name\":\"rocket-translator\",\"version\":\"2.0.3\",\"description\":\"Translate your HTML files to React.js and Vue.js\",\"keywords\":[\"vue\",\"react\",\"translator\",\"html translator\"],\"engines\":{\"node\":\">= 0.1\"},\"directories\":{\"bin\":\"bin\",\"Lib\":\"Lib\"},\"main\":\"./Lib/core/index.js\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/davidsdevel/rocket-translator.git\"},\"scripts\":{\"postinstall\":\"node bin/changelog.js\",\"test\":\"webpack --config test.config.js && jest\",\"lint\":\"eslint -c .eslintrc.js ./src\",\"lint-fix\":\"eslint -c .eslintrc.js --fix ./src\",\"build\":\"webpack --mode production\",\"dev\":\"webpack --mode development && node bin\"},\"bugs\":{\"url\":\"https://github.com/davidsdevel/rocket-translator/issues\"},\"homepage\":\"https://github.com/davidsdevel/rocket-translator#readme\",\"author\":\"David's Devel <djgm1206@gmail.com>\",\"license\":\"ISC\",\"bin\":{\"rocket\":\"bin/index.js\"},\"dependencies\":{\"cli-color\":\"^1.4.0\"},\"devDependencies\":{\"eslint\":\"^5.11.1\",\"eslint-plugin-import\":\"^2.14.0\",\"eslint-plugin-react\":\"^7.12.2\",\"jest\":\"^23.6.0\",\"webpack\":\"^4.29.6\",\"webpack-cli\":\"^3.3.0\"}};\n\n//# sourceURL=webpack:///./package.json?");

/***/ }),

/***/ "./src/cli/index.js":
/*!**************************!*\
  !*** ./src/cli/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Core */ \"./src/core/index.js\");\n/* harmony import */ var FileFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! FileFunctions */ \"./src/file-functions/index.js\");\n/* harmony import */ var cli_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cli-color */ \"./node_modules/cli-color/index.js\");\n/* harmony import */ var cli_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cli_color__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../package.json */ \"./package.json\");\nvar _package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ \"./package.json\", 1);\n//Const\r\n\r\n\r\n\r\n\r\n\r\nconst functions = new FileFunctions__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\n\r\n/**\r\n * CLI\r\n * \r\n * Initialize and Handle the Command Line Interface (CLI)\r\n * \r\n * @class\r\n */\r\nclass CLI {\r\n\t/**\r\n\t * CLI\r\n\t * \r\n\t * @constructor\r\n\t * @param {Object} param0 \r\n\t */\r\n\tconstructor({entry, output, mode}) {\r\n\t\tthis.entry = entry;\r\n\t\tthis.output = output;\r\n\t\tthis.mode = mode;\r\n\r\n\t\tif (this.entry === \"not-file\") {\r\n\t\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.redBright(\"\\nError!!!\\n\"));\r\n\t\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.whiteBright(\"Please select a file to compile.\"));\r\n\t\t\treturn;\r\n\t\t}\r\n\r\n\t\tfunctions.setParams(entry, output);\r\n\t\tthis.handleMode();\r\n\t}\r\n\t/**\r\n\t * Handle Mode\r\n\t * \r\n\t * Get compiler mode and then call respective compiler.\r\n\t * If not have valid compiler throw Invalid Mode Error\r\n\t * \r\n\t * @public\r\n\t */\r\n\thandleMode() {\r\n\t\tswitch(this.mode) {\r\n\t\tcase \"vue\":\r\n\t\t\tthis.compile(\"vue\");\r\n\t\t\tbreak;\r\n\t\tcase \"react\":\r\n\t\t\tthis.compile(\"react\");\r\n\t\t\tbreak;\r\n\t\tcase \"angular\":\r\n\t\t\tthis.compile(\"angular\");\r\n\t\t\tbreak;\r\n\t\tdefault:\r\n\t\t\tthis.invalidMode();\r\n\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Compile\r\n\t * \r\n\t * Execute a Compiler corresponding with mode\r\n\t * \r\n\t * @param {String} mode \r\n\t */\r\n\tcompile(mode) {\r\n\t\t\r\n\t\tlet {html, css, js, name} = this.fileContent;\r\n\r\n\t\tfunctions.filterJavascriptDataFile(js);\r\n\r\n\t\tlet compiler;\r\n\t\tswitch(mode) {\r\n\t\tcase \"vue\":\r\n\t\t\tcompiler = Core__WEBPACK_IMPORTED_MODULE_0__[\"VueCompiler\"];\r\n\t\t\tbreak;\r\n\t\tcase \"react\":\r\n\t\t\tcompiler = Core__WEBPACK_IMPORTED_MODULE_0__[\"ReactCompiler\"];\r\n\t\t\tbreak;\r\n\t\tcase \"angular\":\r\n\t\t\tcompiler = Core__WEBPACK_IMPORTED_MODULE_0__[\"AngularCompiler\"];\r\n\t\t\tbreak;\r\n\t\tdefault: break;\r\n\t\t}\r\n\t\tconst {main, components} = compiler(name, html, css);\r\n\t\tfunctions.writeFile({\r\n\t\t\tname,\r\n\t\t\tcontent:main,\r\n\t\t\ttype:mode\r\n\t\t});\r\n\t\tfunctions.writeComponents(name, mode, components);\r\n\t\tthis.sayThanks();\r\n\t}\r\n\t/**\r\n\t * Show Help\r\n\t * \r\n\t * Show help Window\r\n\t * \r\n\t * @static\r\n\t * @public\r\n\t */\r\n\tstatic showHelp() {\r\n\t\t//Help Commands\r\n\t\tconsole.log(`\\nUsage:\trocket <command> [filename] <output-folder>\r\n\trocket [option]\r\n\r\nCommands:\r\n  ${cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.whiteBright(\"react\")}\t\t\tTranslate to React\r\n  ${cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.whiteBright(\"vue\")}\t\t\tTranslate to Vue\r\n  ${cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.whiteBright(\"angular\")}\t\tTranslate to Angular\r\n\r\nOptions:\r\n  ${cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.whiteBright(\"--help, -h\")}\t\tShow help\r\n  ${cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.whiteBright(\"--version, -v\")}\t\tShow version number`);\r\n\t}\r\n\t/**\r\n\t * Show Version\r\n\t * \r\n\t * @static\r\n\t * @public\r\n\t */\r\n\tstatic showVersion() {\r\n\t\tconsole.log(`v${_package_json__WEBPACK_IMPORTED_MODULE_3__[\"version\"]}`);\r\n\t}\r\n\t/**\r\n\t * Invalid Mode\r\n\t * \r\n\t * Show a Message with the invalid Mode\r\n\t * \r\n\t * @static\r\n\t * @public\r\n\t *\r\n\t * @param {String} mode \r\n\t */\r\n\tstatic invalidMode(mode) {\r\n\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.redBright(\"\\nError!!!\\n\"));\r\n\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.redBright(`Invalid Mode ${cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.whiteBright(`\"${mode}\"`)}`));\r\n\t}\r\n\t/**\r\n\t * File Content Getter\r\n\t * \r\n\t * @return {Object}\r\n\t */\r\n\tget fileContent() {\r\n\t\tlet componentName = this.entry.match(/((\\w*-)*\\w*|\\w*)(?=.html$)/); //Get the name from the file\r\n\r\n\t\tlet name = componentName[0].split(\"-\").map(e => {\r\n\t\t\treturn e[0].toUpperCase() + e.slice(1);\r\n\t\t}).join(\"\"); //convert to CamelCase\r\n\t\t\r\n\t\tlet html = functions.getFile(); //Get the html file data\r\n\t\tlet js = functions.getJs(); //Get the JS file data\r\n\t\tlet css = functions.getCSS(); //Get the CSS file data\r\n\r\n\t\treturn {\r\n\t\t\thtml,\r\n\t\t\tcss,\r\n\t\t\tjs,\r\n\t\t\tname\r\n\t\t};\r\n\t}\r\n\t/**\r\n\t * Say Thanks\r\n\t * \r\n\t * Show a Thanks Message to invite to follow on my Social Networks\r\n\t * \r\n\t * @public\r\n\t */\r\n\tsayThanks() {\r\n\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.greenBright(\"\\nSuccess...\\n\"));\r\n\t\tconsole.log(`Thanks for use ${cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.whiteBright(\"Rocket Translator\")}.\\n\\nOpen ${cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.whiteBright(this.output)} to view your files.`);\r\n\t\tconsole.log(`\\nSend a feedback to ${cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.whiteBright(\"@David_Devel\")} on Twitter.\\n\\nTo report a Error, open a new issue on:\\n${cli_color__WEBPACK_IMPORTED_MODULE_2___default.a.whiteBright(\"https://github.com/Davids-Devel/rocket-translator\")}`);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (CLI);\r\n\n\n//# sourceURL=webpack:///./src/cli/index.js?");

/***/ }),

/***/ "./src/commons sync recursive":
/*!**************************!*\
  !*** ./src/commons sync ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/commons sync recursive\";\n\n//# sourceURL=webpack:///./src/commons_sync?");

/***/ }),

/***/ "./src/commons/file.js":
/*!*****************************!*\
  !*** ./src/commons/file.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass File {\r\n\t/**\r\n\t * Read File As String\r\n\t * \r\n\t * @static\r\n\t * @param {String} path \r\n\t * \r\n\t * @return {String}\r\n\t */\r\n\tstatic readFileAsString(path) {\r\n\t\tconst buff = Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"readFileSync\"])(path);\r\n\t\treturn buff.toString();\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (File);\r\n\n\n//# sourceURL=webpack:///./src/commons/file.js?");

/***/ }),

/***/ "./src/commons/require.js":
/*!********************************!*\
  !*** ./src/commons/require.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\nvar require;\r\n\r\nconst requireHelper = name => {\r\n\tconst req = require;\r\n\treturn __webpack_require__(\"./src/commons sync recursive\")(name);\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (requireHelper);\r\n\n\n//# sourceURL=webpack:///./src/commons/require.js?");

/***/ }),

/***/ "./src/commons/utils.js":
/*!******************************!*\
  !*** ./src/commons/utils.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Utils {\r\n\t/**\r\n\t * Is Upper Case\r\n\t * \r\n\t * Return true is letter is Upper Case\r\n\t * \r\n\t * @static\r\n\t * @param {String} letter\r\n\t * \r\n\t * @return {Boolean}\r\n\t */\r\n\tstatic isUpperCase(letter) {\r\n\t\treturn letter === letter.toUpperCase();\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Utils);\r\n\n\n//# sourceURL=webpack:///./src/commons/utils.js?");

/***/ }),

/***/ "./src/const/Events.json":
/*!*******************************!*\
  !*** ./src/const/Events.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, default */
/***/ (function(module) {

eval("module.exports = [\"abort\",\"afterprint\",\"animationend\",\"animationiteration\",\"animationstart\",\"beforeprint\",\"beforeunload\",\"blur\",\"canplay\",\"canplaythrough\",\"change\",\"click\",\"contextmenu\",\"copy\",\"cut\",\"dblclick\",\"drag\",\"dragend\",\"dragenter\",\"dragleave\",\"dragover\",\"dragstart\",\"drop\",\"durationchange\",\"ended\",\"error\",\"focus\",\"focusin\",\"focusout\",\"fullscreenchange\",\"fullscreenerror\",\"hashchange\",\"input\",\"invalid\",\"keydown\",\"keypress\",\"keyup\",\"load\",\"loadeddata\",\"loadedmetadata\",\"loadstart\",\"message\",\"mousedown\",\"mouseenter\",\"mouseleave\",\"mousemove\",\"mouseover\",\"mouseout\",\"mouseup\",\"mousewheel\",\"offline\",\"online\",\"open\",\"pagehide\",\"pageshow\",\"paste\",\"pause\",\"play\",\"playing\",\"popstate\",\"pointerdown\",\"pointermove\",\"pointerup\",\"pointercancel\",\"gotpointercapture\",\"lostpointercapture\",\"pointerenter\",\"pointerleave\",\"pointerover\",\"pointerout\",\"progress\",\"ratechange\",\"resize\",\"reset\",\"scroll\",\"search\",\"seeked\",\"seeking\",\"select\",\"show\",\"stalled\",\"storage\",\"submit\",\"suspend\",\"timeupdate\",\"toggle\",\"touchcancel\",\"touchend\",\"touchmove\",\"touchstart\",\"transitionend\",\"unload\",\"volumechange\",\"waiting\",\"wheel\"];\n\n//# sourceURL=webpack:///./src/const/Events.json?");

/***/ }),

/***/ "./src/const/Globals.json":
/*!********************************!*\
  !*** ./src/const/Globals.json ***!
  \********************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

eval("module.exports = [\"document\",\"window\",\"navigator\"];\n\n//# sourceURL=webpack:///./src/const/Globals.json?");

/***/ }),

/***/ "./src/const/Lifecycle.json":
/*!**********************************!*\
  !*** ./src/const/Lifecycle.json ***!
  \**********************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, default */
/***/ (function(module) {

eval("module.exports = [\"setInitialState\",\"setStateWatchers\",\"defineGlobals\",\"beforeMount\",\"mounted\",\"beforeUpdate\",\"updated\",\"beforeUnmount\",\"unmounted\"];\n\n//# sourceURL=webpack:///./src/const/Lifecycle.json?");

/***/ }),

/***/ "./src/core/ErrorManagement/index.js":
/*!*******************************************!*\
  !*** ./src/core/ErrorManagement/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Commons_file__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Commons/file */ \"./src/commons/file.js\");\n/* harmony import */ var cli_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cli-color */ \"./node_modules/cli-color/index.js\");\n/* harmony import */ var cli_color__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cli_color__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nconst {readFileAsString} = Commons_file__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\r\n\r\nclass ErrorManagement {\r\n\tconstructor() {\r\n\t\tlet file = readFileAsString(global.translatorFilePath);\r\n\t\tthis.lines = file.split(/\\r\\n|\\n|\\r/);\r\n\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_1___default.a.redBright(\"\\nError!!!\\n\"));\r\n\t}\r\n\t/**\r\n\t * Throw Error\r\n\t * \r\n\t * Get the Component data and throw a new Error\r\n\t * \r\n\t * @param {String} data \r\n\t * @param {String} type Error Type\r\n\t */\r\n\tthrowError(data, type) {\r\n\t\tlet stringToMatch;\r\n\t\tlet name;\r\n\t\tswitch(type) {\r\n\t\tcase \"Missing Var\":\r\n\t\t\tstringToMatch = `{${data.stateName}\\\\s*-\\\\s*state\\\\s*-\\\\s*${data.varName}}`;\r\n\t\t\tname = data.stateName;\r\n\t\t\tbreak;\r\n\t\tcase \"Duplicate Component\":\r\n\t\t\tstringToMatch = `<component name=('|\")${data}('|\")`;\r\n\t\t\tname = data;\r\n\t\t\tbreak;\r\n\t\tcase \"Undefined Method\":\r\n\t\t\tstringToMatch = `on.*=('|\")${data}\\\\(.*\\\\)('|\")`;\r\n\t\t\tname = data;\r\n\t\t\tbreak;\r\n\r\n\t\tcase \"Undefined Computed\":\r\n\t\t\tstringToMatch = `{${data}\\\\s*-\\\\s*computed}`;\r\n\t\t\tname = data;\r\n\t\t\tbreak;\r\n\r\n\t\tcase \"Undefined State\":\r\n\t\t\tstringToMatch = data.string;\r\n\t\t\t// eslint-disable-next-line prefer-destructuring\r\n\t\t\tname = data.name;\r\n\t\t\tbreak;\r\n\t\tcase \"Expected Token\":\r\n\t\t\tstringToMatch = data.split(/\\r\\n|\\n|\\r/)[0];\r\n\t\t\tname = \"}\";\r\n\t\t\tbreak;\r\n\t\tcase \"Undefined Type\":\r\n\t\t\tstringToMatch = data;\r\n\t\t\tname = data\r\n\t\t\t\t.split(\"-\")[1]\r\n\t\t\t\t.replace(/^\\s*/, \"\")\r\n\t\t\t\t.replace(/\\s*$/, \"\");\r\n\t\t\tbreak;\r\n\t\tcase \"Expected Attribute\":\r\n\t\t\tstringToMatch = data.line;\r\n\t\t\t// eslint-disable-next-line prefer-destructuring\r\n\t\t\tname = data.name;\r\n\t\t\tbreak;\r\n\t\tcase \"Undefined Input Name\":\r\n\t\t\tstringToMatch = data;\r\n\t\t\tname = \"\";\r\n\t\t\tbreak;\r\n\t\tdefault: break;\r\n\t\t}\r\n\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_1___default.a.whiteBright(`${type}:\\n`));\r\n\t\tthis.lines.forEach((line, i) => {\r\n\t\t\tlet matched = line.match(new RegExp(stringToMatch));\r\n\t\t\tif (matched) {\r\n\t\t\t\tconsole.log(`-> ${cli_color__WEBPACK_IMPORTED_MODULE_1___default.a.whiteBright(name)} on line: ${i+1}`);\r\n\t\t\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_1___default.a.redBright(`${i}|`)+cli_color__WEBPACK_IMPORTED_MODULE_1___default.a.red(`${this.lines[i-1]}`));\r\n\t\t\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_1___default.a.redBright(`${i+1}|${this.lines[i]}`));\r\n\t\t\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_1___default.a.redBright(`${i+2}|`)+cli_color__WEBPACK_IMPORTED_MODULE_1___default.a.red(`${this.lines[i+1]}`));\r\n\t\t\t}\r\n\t\t});\r\n\t\tprocess.exit(1);\r\n\t}\r\n}\r\n\r\nclass MissingVarError extends ErrorManagement {\r\n\t/**\r\n\t * Missing Var Error\r\n\t * \r\n\t * @constructor\r\n\t * \r\n\t * @param {String} stateName \r\n\t * @param {String} varName \r\n\t */\r\n\tconstructor(stateName, varName) {\r\n\t\tsuper();\r\n\t\tthis.throwError({stateName, varName}, \"Missing Var\");\r\n\t}\r\n}\r\nclass DuplicateComponentError extends ErrorManagement {\r\n\t/**\r\n\t * Duplicate Component Error\r\n\t * \r\n\t * @constructor\r\n\t * \r\n\t * @param {String} componentName \r\n\t */\r\n\tconstructor(componentName) {\r\n\t\tsuper();\r\n\t\tthis.throwError(componentName, \"Duplicate Component\");\r\n\t}\r\n}\r\nclass UndefinedMethodError extends ErrorManagement {\r\n\t/**\r\n\t * Undefined Method Error\r\n\t * \r\n\t * @constructor\r\n\t * \r\n\t * @param {String} methodName \r\n\t */\r\n\tconstructor(methodName) {\r\n\t\tsuper();\r\n\t\tthis.throwError(methodName, \"Undefined Method\");\r\n\t}\r\n}\r\nclass UndefinedComputedError extends ErrorManagement {\r\n\t/**\r\n\t * Undefined Computed Error\r\n\t * \r\n\t * @constructor\r\n\t * \r\n\t * @param {String} computedName \r\n\t */\r\n\tconstructor(computedName) {\r\n\t\tsuper();\r\n\t\tthis.throwError(computedName, \"Undefined Computed\");\r\n\t}\r\n}\r\nclass ExpectedTokenError extends ErrorManagement {\r\n\t/**\r\n\t * Expected Token Error\r\n\t * \r\n\t * @constructor\r\n\t * \r\n\t * @param {String} data \r\n\t */\r\n\tconstructor(data) {\r\n\t\tsuper();\r\n\t\tthis.throwError(data, \"Expected Token\");\r\n\t}\r\n}\r\nclass UndefinedTypeError extends ErrorManagement {\r\n\t/**\r\n\t * Undefined Type Error\r\n\t * \r\n\t * @constructor\r\n\t * \r\n\t * @param {String} data \r\n\t */\r\n\tconstructor(data) {\r\n\t\tsuper();\r\n\t\tthis.throwError(data, \"Undefined Type\");\r\n\t}\r\n}\r\nclass UndefinedStateError extends ErrorManagement {\r\n\t/**\r\n\t * Undefined State Error\r\n\t * \r\n\t * @constructor\r\n\t * \r\n\t * @param {String} data \r\n\t */\r\n\tconstructor(data) {\r\n\t\tsuper();\r\n\t\tlet {type, name} = data;\r\n\t\tlet stringToMatch;\r\n\t\tswitch(type) {\r\n\t\tcase \"conditional\":\r\n\t\t\tstringToMatch = `<if\\\\s*cond=('|\")${name}`;\r\n\t\t\tbreak;\r\n\t\tcase \"loop\":\r\n\t\t\tstringToMatch = `<for\\\\s*val=('|\")\\\\w*\\\\s*in\\\\s*${name}('|\")`;\r\n\t\t\tbreak;\r\n\t\tcase \"watcher\":\r\n\t\t\tstringToMatch = `watch\\\\s*${name}\\\\s*=`;\r\n\t\t\tbreak;\r\n\t\tdefault: break;\r\n\t\t}\r\n\t\tthis.throwError({name, string:stringToMatch}, \"Undefined State\");\r\n\t}\r\n}\r\nclass ExpectedAttributeError extends ErrorManagement {\r\n\t/**\r\n\t * Expected Attribute Error\r\n\t * \r\n\t * @constructor\r\n\t * \r\n\t * @param {String} line \r\n\t * @param {String} name \r\n\t */\r\n\tconstructor(line, name) {\r\n\t\tsuper();\r\n\t\tthis.throwError({line, name}, \"Expected Attribute\");\r\n\t}\r\n}\r\nclass UndefinedInputNameError extends ErrorManagement {\r\n\t/**\r\n\t * Undefined Input Name Error\r\n\t * \r\n\t * @constructor\r\n\t * \r\n\t * @param {String} line \r\n\t */\r\n\tconstructor(line) {\r\n\t\tsuper();\r\n\t\tthis.throwError(line, \"Undefined Input Name\");\r\n\t}\r\n}\r\n\r\nconst defineGlobals = () => {\r\n\tglobal.UndefinedTypeError = UndefinedTypeError;\r\n\tglobal.ExpectedTokenError = ExpectedTokenError;\r\n\tglobal.MissingVarError = MissingVarError;\r\n\tglobal.DuplicateComponentError = DuplicateComponentError;\r\n\tglobal.UndefinedComputedError = UndefinedComputedError;\r\n\tglobal.UndefinedMethodError = UndefinedMethodError;\r\n\tglobal.UndefinedStateError = UndefinedStateError;\r\n\tglobal.ExpectedAttributeError = ExpectedAttributeError;\r\n\tglobal.UndefinedInputNameError = UndefinedInputNameError;\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (defineGlobals);\r\n\n\n//# sourceURL=webpack:///./src/core/ErrorManagement/index.js?");

/***/ }),

/***/ "./src/core/JavascriptManagement sync recursive ^.*$":
/*!*************************************************!*\
  !*** ./src/core/JavascriptManagement sync ^.*$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\".\": \"./src/core/JavascriptManagement/index.js\",\n\t\"./\": \"./src/core/JavascriptManagement/index.js\",\n\t\"./index\": \"./src/core/JavascriptManagement/index.js\",\n\t\"./index.js\": \"./src/core/JavascriptManagement/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/core/JavascriptManagement sync recursive ^.*$\";\n\n//# sourceURL=webpack:///./src/core/JavascriptManagement_sync_^.*$?");

/***/ }),

/***/ "./src/core/JavascriptManagement/index.js":
/*!************************************************!*\
  !*** ./src/core/JavascriptManagement/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Const_Lifecycle_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Const/Lifecycle.json */ \"./src/const/Lifecycle.json\");\nvar Const_Lifecycle_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! Const/Lifecycle.json */ \"./src/const/Lifecycle.json\", 1);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\nclass JavascriptManagement {\r\n\t/**\r\n\t * Javascript Management\r\n\t * \r\n\t * Initialize the data and execute the _main method\r\n\t * \r\n\t * @constructor\r\n\t */\r\n\tconstructor(){\r\n\t\tthis._data;\r\n\t\tthis._watchers = new Array();\r\n\t\tthis._vars = new Array();\r\n\t\tthis._states = new Array();\r\n\t\tthis._functions = new Array();\r\n\t\tthis.lifecycles = new Array();\r\n\t\tthis._main();\r\n\t}\r\n\t/**\r\n\t * Main\r\n\t * \r\n\t * Reset the data, get the Javascript data from the temp data file\r\n\t * \r\n\t * @return {void}\r\n\t */\r\n\t_main() {\r\n\t\t//Reset Data\r\n\t\tthis._data = undefined;\r\n\t\tthis._watchers = [];\r\n\t\tthis._vars = [];\r\n\t\tthis._states = [];\r\n\t\tthis._functions = [];\r\n\t\tthis.lifecycles = [];\r\n\r\n\t\tif (!global.tempDataFile)\r\n\t\t\treturn;\r\n\t\t\r\n\t\tthis._data = __webpack_require__(\"./src/core/JavascriptManagement sync recursive ^.*$\")(`${global.tempDataFile}`);\r\n\t\tlet dataKeys = Object.keys(this._data);\r\n\r\n\t\tif(this._data.setInitialState)\r\n\t\t\tthis.states = this._data.setInitialState();\r\n\r\n\t\tif(this._data.setStateWatchers)\r\n\t\t\tthis.watchers = this._data.setStateWatchers();\r\n\r\n\t\tif(this._data.beforeMount)\r\n\t\t\tthis.lifecycles.push({\r\n\t\t\t\tname:\"beforeMount\",\r\n\t\t\t\tcontent:this._data.beforeMount.toString()\r\n\t\t\t});\r\n\r\n\t\tif(this._data.mounted)\r\n\t\t\tthis.lifecycles.push({\r\n\t\t\t\tname:\"mounted\",\r\n\t\t\t\tcontent:this._data.mounted.toString()\r\n\t\t\t});\r\n\r\n\t\tif(this._data.beforeUpdate)\r\n\t\t\tthis.lifecycles.push({\r\n\t\t\t\tname:\"beforeUpdate\",\r\n\t\t\t\tcontent:this._data.beforeUpdate.toString()\r\n\t\t\t});\r\n\r\n\t\tif(this._data.updated)\r\n\t\t\tthis.lifecycles.push({\r\n\t\t\t\tname:\"updated\",\r\n\t\t\t\tcontent:this._data.updated.toString()\r\n\t\t\t});\r\n\r\n\t\tif(this._data.beforeUnmount)\r\n\t\t\tthis.lifecycles.push({\r\n\t\t\t\tname:\"beforeUnmount\",\r\n\t\t\t\tcontent:this._data.beforeUnmount.toString()\r\n\t\t\t});\r\n\r\n\t\tif(this._data.unmount)\r\n\t\t\tthis.lifecycles.push({\r\n\t\t\t\tname:\"unmount\",\r\n\t\t\t\tcontent:this._data.unmount.toString()\r\n\t\t\t});\r\n\r\n\t\tdataKeys.forEach(key => {\r\n\t\t\tif (Const_Lifecycle_json__WEBPACK_IMPORTED_MODULE_0__.indexOf(key) === -1) {\r\n\t\t\t\tif (typeof this._data[key] === \"function\")\r\n\t\t\t\t\tthis.functions = key;\r\n\t\t\t\telse\r\n\t\t\t\t\tthis._vars.push({name:key, value:this._data[key]});\r\n\t\t\t}\r\n\t\t});\r\n\t\tif (Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"existsSync\"])(global.defineGlobals))\r\n\t\t\tObject(fs__WEBPACK_IMPORTED_MODULE_1__[\"unlinkSync\"])(global.defineGlobals);\r\n\t\tif (Object(fs__WEBPACK_IMPORTED_MODULE_1__[\"existsSync\"])(global.tempDataFile))\r\n\t\t\tObject(fs__WEBPACK_IMPORTED_MODULE_1__[\"unlinkSync\"])(global.tempDataFile);\r\n\t}\r\n\r\n\t/**\r\n\t * Setter Functions\r\n\t * \r\n\t * Parse the function and push to _functions Array\r\n\t * \r\n\t * @param {String} functionName\r\n\t */\r\n\tset functions(functionName) {\r\n\t\tlet name = functionName;\r\n\t\tlet content = this._data[name].toString().replace(/\\s*=>\\s*/, \"\");\r\n\t\tthis._functions.push({name, content});\r\n\t}\r\n\t/**\r\n\t * Getter Functions\r\n\t * \r\n\t * Return the _functions Array\r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\tget functions(){\r\n\t\treturn this._functions;\r\n\t}\r\n\t/**\r\n\t * Setter States\r\n\t * \r\n\t * Get a Javascript Object and set all states to _states Array\r\n\t * \r\n\t * @param {Object} js\r\n\t */\r\n\tset states(js){\r\n\t\tlet keys = Object.keys(js);\r\n\t\tkeys.forEach(e => {\r\n\t\t\tthis._states.push({key:e, value:js[e]});\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t * Getter States\r\n\t * \r\n\t * Return _states Array\r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\tget states(){\r\n\t\treturn this._states;\r\n\t}\r\n\t/**\r\n\t * Setter Watchers\r\n\t * \r\n\t * Get a Javascript Object and set all watchers to _watchers Array\r\n\t * \r\n\t * @param {Object} js\r\n\t */\r\n\tset watchers(js){\r\n\t\tlet keys = Object.keys(js);\r\n\t\tkeys.forEach(e => {\r\n\t\t\tlet {name} = js[e];\r\n\t\t\tlet content = js[e].toString()\r\n\t\t\t\t.replace(/\\w*/, \"\")\r\n\t\t\t\t.replace(/\\s*=>\\s*/, \" \")\r\n\t\t\t\t.split(/\\n|\\r\\n|\\r/)\r\n\t\t\t\t.map(e => e.replace(/\\t\\t|\\s\\s\\s\\s\\s\\s\\s\\s/, \"\"))\r\n\t\t\t\t.join(\"\\n\");\r\n\r\n\t\t\tthis._watchers.push({name, content});\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t * Getter Watchers\r\n\t * \r\n\t * Return _watchers Array\r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\tget watchers(){\r\n\t\treturn this._watchers;\r\n\t}\r\n\t/**\r\n\t * Getter Vars\r\n\t * \r\n\t * Return _vars Array\r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\tget vars(){\r\n\t\treturn this._vars;\r\n\t}\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (JavascriptManagement);\r\n\n\n//# sourceURL=webpack:///./src/core/JavascriptManagement/index.js?");

/***/ }),

/***/ "./src/core/StateManagement sync recursive ^.*$":
/*!********************************************!*\
  !*** ./src/core/StateManagement sync ^.*$ ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\".\": \"./src/core/StateManagement/index.js\",\n\t\"./\": \"./src/core/StateManagement/index.js\",\n\t\"./AngularStateManagement\": \"./src/core/StateManagement/AngularStateManagement.js\",\n\t\"./AngularStateManagement.js\": \"./src/core/StateManagement/AngularStateManagement.js\",\n\t\"./ReactStateManagement\": \"./src/core/StateManagement/ReactStateManagement.js\",\n\t\"./ReactStateManagement.js\": \"./src/core/StateManagement/ReactStateManagement.js\",\n\t\"./StateManagement\": \"./src/core/StateManagement/StateManagement.js\",\n\t\"./StateManagement.js\": \"./src/core/StateManagement/StateManagement.js\",\n\t\"./VueStateManagement\": \"./src/core/StateManagement/VueStateManagement.js\",\n\t\"./VueStateManagement.js\": \"./src/core/StateManagement/VueStateManagement.js\",\n\t\"./index\": \"./src/core/StateManagement/index.js\",\n\t\"./index.js\": \"./src/core/StateManagement/index.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/core/StateManagement sync recursive ^.*$\";\n\n//# sourceURL=webpack:///./src/core/StateManagement_sync_^.*$?");

/***/ }),

/***/ "./src/core/StateManagement/AngularStateManagement.js":
/*!************************************************************!*\
  !*** ./src/core/StateManagement/AngularStateManagement.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StateManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManagement */ \"./src/core/StateManagement/StateManagement.js\");\n/* harmony import */ var Const_Events_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Const/Events.json */ \"./src/const/Events.json\");\nvar Const_Events_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! Const/Events.json */ \"./src/const/Events.json\", 1);\n/* harmony import */ var Commons_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Commons/utils */ \"./src/commons/utils.js\");\n\r\n\r\n\r\n\r\nconst {isUpperCase} = Commons_utils__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\r\n/**\r\n * Class Angular State Management\r\n * \r\n * @class\r\n * @extends StateManagement\r\n */\r\nclass AngularStateManagement extends _StateManagement__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\t/**\r\n\t * Get Component Data (getter)\r\n\t * \r\n\t * @public\r\n\t * @return {string}\r\n\t */\r\n\tget componentData() {\r\n\t\t/*\r\n\t\t\tStates\r\n\t\t\tlifecycles\r\n\t\t\tProps\r\n\t\t\tMethods\r\n\t\t\tComputeds\r\n\t\t\twatchers\r\n\t\t*/\r\n\t\tconst haveStates = this.states.length > 0;\r\n\t\tconst haveProps = this.props.length > 0;\r\n\t\tconst haveLifecycles = this.lifecycle.length > 0;\r\n\t\tconst haveComputed = this.computed.length > 0;\r\n\t\tconst haveMethods = this.methods.length > 0;\r\n\t\tconst haveWatchers = this.watchers.length > 0;\r\n\r\n\t\tlet states = \"\";\r\n\t\tlet methods = \"\";\r\n\t\tlet props = \"\";\r\n\t\tlet computed = \"\";\r\n\r\n\t\tif(haveStates) {\r\n\t\t\tlet mappedStates = this.states.map(e => {\r\n\t\t\t\tif(typeof e === \"object\")\r\n\t\t\t\t\treturn `${e.key} = ${this._toString(e.value)};`;\r\n\t\t\t\t\r\n\t\t\t\treturn `${e} = \"\";`;\r\n\t\t\t});\r\n\t\t\tstates = `${mappedStates.join(\"\\n\\t\")}\\n\\n\\t`;\r\n\t\t}\r\n\t\tif(haveMethods){\r\n\t\t\tlet mappedMethods = this.methods.map(({name, content}) => {\r\n\t\t\t\treturn `${name}${content}`;\r\n\t\t\t});\r\n\t\t\tmethods = `${mappedMethods.join(\"\\n\\t\")}\\n\\n\\t`;\r\n\t\t}\r\n\t\tif (haveProps) {\r\n\t\t\tlet mappedProps = this.props.map(e => `@Input() ${e} : string;`);\r\n\r\n\t\t\tprops = `${mappedProps.join(\"\\n\\t\")}\\n\\n\\t`;\r\n\t\t}\r\n\t\tif (haveComputed) {\r\n\t\t\tlet mappedComputed = this.computed.map(({name, content}) => `get ${name}(): string ${content.replace(/\\(.*\\)/, \"\")}`);\r\n\r\n\t\t\tcomputed = `${mappedComputed.join(\"\\n\\t\")}\\n\\t`;\r\n\t\t}\r\n\r\n\t\treturn `${props}${states}${methods}${computed}`;\r\n\t}\r\n\t\r\n\t/**\r\n\t * Filter HTML\r\n\t *\r\n\t * @public\r\n\t * @param {string} html\r\n\t *\r\n\t * @return {string}\r\n\t *\r\n\t */\r\n\tfilterHTML(html) {\r\n\t\treturn html\r\n\t\t\t/*Replace All Quotes with single quotes*/\r\n\t\t\t.replace(/\"/g, \"'\")\r\n\r\n\t\t\t/*Filter html data*/\r\n\t\t\t.split(/\\{(?=\\w*)/g)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i === 0) \r\n\t\t\t\t\treturn e;\r\n\r\n\t\t\t\treturn `{{${e.replace(/(\\s*-.*\\})/g, \"}}\")}`;\r\n\t\t\t})\r\n\t\t\t.join(\"\")\r\n\r\n\t\t\t/*Filter HTML Events*/\r\n\t\t\t.split(new RegExp(`on(?=${Const_Events_json__WEBPACK_IMPORTED_MODULE_1__.join(\"|\")})`))\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tconst event = e.match(/\\w*(?==)/)[0];\r\n\t\t\t\t\treturn  `(${event})${e.replace(event, \"\")}`;\r\n\t\t\t\t}\r\n\t\t\t\treturn e;\r\n\t\t\t})\r\n\t\t\t.join(\"\")\r\n\t\t\t/*Filter Components Declaration*/\r\n\t\t\t.split(/<(?=[A-Z]\\w*)/)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i === 0)\r\n\t\t\t\t\treturn e;\r\n\r\n\t\t\t\tlet componentName = e.match(/^\\w*/)[0];\r\n\t\t\t\tlet newName = this.generateComponentName(componentName);\r\n\t\t\t\t\r\n\t\t\t\treturn e.replace(/^\\w*/, `${newName}-root`).replace(/\\s*\\/>/, `></${newName}-root>`);\r\n\t\t\t})\r\n\t\t\t.join(\"<\")\r\n\t\t\t/*Bind Directives*/\r\n\t\t\t.split(/:(?=\\w*=)/)\r\n\t\t\t.map((content, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tconst bindSimpleOrWithTypeRegExp = /^\\w*='(\\w*(\\s*-\\s*\\w*)*)'/;\r\n\t\t\t\t\tconst bindWithConditional = /^\\w*='\\s*\\w*\\s*(\\?).*('|\"|}|])\\s*'/;\r\n\r\n\t\t\t\t\tif (bindSimpleOrWithTypeRegExp.test(content)) {\r\n\r\n\t\t\t\t\t\tconst bindAttr = content.match(bindSimpleOrWithTypeRegExp)[0];\r\n\r\n\t\t\t\t\t\tconst attrName = bindAttr.match(/\\w*/)[0];\r\n\r\n\t\t\t\t\t\tcontent = content.replace(new RegExp(`^${attrName}`), `[${attrName}]`);\r\n\r\n\t\t\t\t\t\tif (/prop/.test(bindAttr) || /state/.test(bindAttr))\r\n\t\t\t\t\t\t\treturn content.replace(/\\s*-\\s*\\w*'/, \"'\");\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\treturn content;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse if (bindWithConditional.test(content)) {\r\n\t\t\t\t\t\tconst expression = content.match(bindWithConditional)[0];\r\n\t\t\t\t\t\tconst replacedQuotes = expression\r\n\t\t\t\t\t\t\t.replace(/\"/g, \"'\")\r\n\t\t\t\t\t\t\t.replace(\"'\", \"\\\"\")\r\n\t\t\t\t\t\t\t.replace(/'$/, \"}}\");\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\treturn content\r\n\t\t\t\t\t\t\t.replace(expression, replacedQuotes)\r\n\t\t\t\t\t\t\t.replace(\"=\\\"\", \"={{\");\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t//return content of index 0\r\n\t\t\t\treturn content;\r\n\t\t\t})\r\n\t\t\t.join(\"\")\r\n\t\t\t.split(/<(?=for\\s*val=)/)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tconst tagRegExp = /\\s*tag=('|\")\\w*(-\\w*)*('|\")/;\r\n\t\t\t\t\tvar tagName = \"div\";\r\n\r\n\t\t\t\t\tif (tagRegExp.test(e)) \r\n\t\t\t\t\t\ttagName = e.match(tagRegExp)[0]\r\n\t\t\t\t\t\t\t.replace(/\\s*tag=/, \"\")\r\n\t\t\t\t\t\t\t.replace(/'|\"/g, \"\");\r\n\r\n\t\t\t\t\tconst loopData = e.match(/\\w*\\s*in\\s*\\w*/)[0];\r\n\r\n\t\t\t\t\tconst dataSplitted = loopData.split(/\\s*in\\s*/);\r\n\r\n\t\t\t\t\tconst varName = dataSplitted[0];\r\n\t\t\t\t\tconst stateName = dataSplitted[1];\r\n\r\n\t\t\t\t\treturn e.replace(/for val=(?=.*>)/g, `${tagName} *ngFor=`)\r\n\t\t\t\t\t\t.replace(/\\/for(?=>)/g, `/${tagName}`)\r\n\t\t\t\t\t\t.replace(tagRegExp, \"\")\r\n\t\t\t\t\t\t.replace(loopData, `let ${varName} of ${stateName}`);\r\n\t\t\t\t}\r\n\t\t\t\treturn e;\r\n\t\t\t})\r\n\t\t\t.join(\"<\")\r\n\t\t\t.split(/<(?=if\\s*cond=)/)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tvar haveElse = false;\r\n\t\t\t\t\tvar elseId;\r\n\t\t\t\t\tconst dataSplitted = e.split(/<(?=else)/);\r\n\r\n\t\t\t\t\tconst mappedData = dataSplitted.map(conditional => {\r\n\t\t\t\t\t\tvar data = conditional;\r\n\t\t\t\t\t\tconst tagRegExp = /\\s*tag=('|\")\\w*(-\\w*)*('|\")/;\r\n\r\n\t\t\t\t\t\tconst conditionalTag = /^\\w*(-\\w*)*/.exec(conditional)[0];\r\n\r\n\t\t\t\t\t\tconst isElse = /^else\\s*.*>/.test(conditional);\r\n\r\n\t\t\t\t\t\t// TODO: Add Else If Support\r\n\t\t\t\t\t\t//const isElseIf = /else-if\\s*/.test(conditional);\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\thaveElse = isElse;\r\n\r\n\t\t\t\t\t\tvar tagName = \"div\";\r\n\t\t\t\t\t\tvar haveTag = tagRegExp.test(conditional);\r\n\r\n\t\t\t\t\t\tif (haveTag) {\r\n\t\t\t\t\t\t\ttagName = e.match(tagRegExp)[0]\r\n\t\t\t\t\t\t\t\t.replace(/\\s*tag=/, \"\")\r\n\t\t\t\t\t\t\t\t.replace(/'|\"/g, \"\");\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tif (isElse) {\r\n\t\t\t\t\t\t\tlet id = \"\"; //Empty String to set a conditional ID\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t/*\r\n\t\t\t\t\t\t\t* Generate ID\r\n\t\t\t\t\t\t\t*/\r\n\t\t\t\t\t\t\tfor (let a = 0; a <= 3; a++) {\r\n\t\t\t\t\t\t\t\tid += new String(Math.floor(Math.random()*10));\r\n\t\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\t\telseId = id;\r\n\t\t\t\t\t\t\ttagName = haveTag ? tagName : \"ng-template\";\r\n\t\t\t\t\t\t\tdata = data\r\n\t\t\t\t\t\t\t\t.replace(/^else.*>/, `${tagName} #elseBlock${id}>`)\r\n\t\t\t\t\t\t\t\t.replace(\"</else>\", `<${tagName}>`);\r\n\t\t\t\t\t\t}\r\n\r\n\t\t\t\t\t\tdata = data\r\n\t\t\t\t\t\t\t.replace(conditionalTag, tagName)\r\n\t\t\t\t\t\t\t.replace(`</${conditionalTag}>`, `</${tagName}>`)\r\n\t\t\t\t\t\t\t.replace(tagRegExp, \"\")\r\n\t\t\t\t\t\t\t.replace(/cond=/, \"*ngIf=\");\r\n\r\n\t\t\t\t\t\treturn data;\r\n\t\t\t\t\t});\r\n\t\t\t\t\tif (haveElse) {\r\n\t\t\t\t\t\tvar mainIf = mappedData[0];\r\n\t\t\t\t\t\tconst cond = mainIf.match(/\\*ngIf=('|\").*('|\")/)[0];\r\n\r\n\t\t\t\t\t\tconst newCond = cond.replace(/('|\")$/, `; else elseBlock${elseId}'`);\r\n\r\n\t\t\t\t\t\tmappedData[0] = mainIf.replace(cond, newCond);\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\treturn mappedData.join(\"<\");\r\n\t\t\t\t}\r\n\t\t\t\treturn e;\r\n\t\t\t}).join(\"<\")\r\n\t\t\t.split(\"<component \").map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tlet name = e.match(/component-name=('|\")\\w*/)[0].replace(/component-name=('|\")/, \"\");\r\n\t\t\t\t\tname = this.generateComponentName(name);\r\n\t\t\t\t\tconst attributes = e.split(\">\")[0].split(/\\s(?=\\w*=')/).map((attr, ind) => {\r\n\t\t\t\t\t\tif (ind > 0)\r\n\t\t\t\t\t\t\treturn attr.match(/^\\w*/)[0];\r\n\r\n\t\t\t\t\t\treturn null;\r\n\t\t\t\t\t}).filter(a => a);\r\n\r\n\t\t\t\t\tlet splitted = e.split(\"</component>\");\r\n\t\t\t\t\tlet tag = splitted[0].split(/\\r\\n|\\n|\\r/)[0];\r\n\r\n\t\t\t\t\ttag = tag.replace(/component-name=('|\")\\w*('|\")/, `${name}-root`).replace(\">\", `></${name}-root>`) + splitted[1];\r\n\r\n\t\t\t\t\tattributes.forEach(a => {\r\n\t\t\t\t\t\ttag = tag.replace(new RegExp(`${a}(?==')`), `[${a}]`);\r\n\t\t\t\t\t});\r\n\t\t\t\t\treturn tag;\r\n\t\t\t\t} \r\n\t\t\t\treturn e;\r\n\t\t\t})\r\n\t\t\t.join(\"<\");\r\n\t}\r\n\t/**\r\n\t * Generate Component \r\n\t *\r\n\t * Take a Camel Case and return Kebab Case\r\n\t *\r\n\t * @param {String} name\r\n\t *\r\n\t * @return {String}\r\n\t */\r\n\tgenerateComponentName(name) {\r\n\t\tlet newName = \"\";\r\n\r\n\t\tfor (let i = 0; i < name.length; i++) {\r\n\t\t\tlet letter = name[i];\r\n\r\n\t\t\tif (isUpperCase(letter)) {\r\n\t\t\t\tif (i === 0)\r\n\t\t\t\t\tnewName += letter.toLowerCase();\r\n\t\t\t\telse\r\n\t\t\t\t\tnewName += `-${letter.toLowerCase()}`;\r\n\t\t\t}\r\n\t\t\telse \r\n\t\t\t\tnewName += letter;\t\t\t\r\n\t\t}\r\n\r\n\t\treturn newName;\r\n\t}\r\n\t/**\r\n\t *  To String\r\n\t * \r\n\t * Get all and Return String\r\n\t * \r\n\t * @private\r\n\t * @param {any} data \r\n\t * \r\n\t * @return {String}\r\n\t */\r\n\t_toString(data){\r\n\r\n\t\tlet _isNull = data === null;\r\n\t\tlet _isUndefined = data === undefined;\r\n\t\t// eslint-disable-next-line use-isnan\r\n\t\tlet _isNaN = data === NaN;\r\n\t\tlet _isInfinity = data === Infinity;\r\n\r\n\t\tif (_isNull)\r\n\t\t\treturn \"null\";\r\n\r\n\t\tif (_isNaN)\r\n\t\t\treturn \"NaN\";\r\n\r\n\t\tif (_isInfinity)\r\n\t\t\treturn \"Infinity\";\r\n\r\n\t\tif (_isUndefined)\r\n\t\t\treturn \"undefined\";\r\n\t\t\r\n\t\treturn JSON.stringify(data);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (AngularStateManagement);\r\n\n\n//# sourceURL=webpack:///./src/core/StateManagement/AngularStateManagement.js?");

/***/ }),

/***/ "./src/core/StateManagement/ReactStateManagement.js":
/*!**********************************************************!*\
  !*** ./src/core/StateManagement/ReactStateManagement.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StateManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManagement */ \"./src/core/StateManagement/StateManagement.js\");\n/* harmony import */ var Const_Events_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Const/Events.json */ \"./src/const/Events.json\");\nvar Const_Events_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! Const/Events.json */ \"./src/const/Events.json\", 1);\n\r\n\r\n\r\n/**\r\n * Class React State Management\r\n * \r\n * @class\r\n * @extends StateManagement\r\n */\r\nclass ReactStateManagement extends _StateManagement__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\tconstructor(){\r\n\t\tsuper();\r\n\t\tthis.condStates = new Array();\r\n\t\tthis.loopsState = new Array();\r\n\r\n\t\t//Arroy to map on prerender logical\r\n\t\tthis.prerenderComputed = new Array();\r\n\t\tthis.condWasMapped = false;\r\n\t\tthis.loopsWasMapped = false;\r\n\t}\r\n\t/**\r\n\t * Get Components To Import (getter)\r\n\t * \r\n\t * @description Set Components Imports to String Template\r\n\t * @public\r\n\t * @return {string}\r\n\t */\r\n\tget importComponents(){\r\n\t\tlet components = \"\";\r\n\t\tif (this.components.length > 0) {\r\n\t\t\tthis.components.forEach(e => {\r\n\t\t\t\tcomponents += `import ${e} from \"./components/${e}\"\\n`; //Add Import for each Component Value\r\n\t\t\t});\r\n\t\t}\r\n\t\treturn components;\r\n\t}\r\n\t/**\r\n\t * Get Component Data (getter)\r\n\t * \r\n\t * @public\r\n\t * @return {string}\r\n\t */\r\n\tget componentData(){\r\n\t\tconst haveStates = this.states.length > 0;\r\n\t\tconst haveLifecycles = this.lifecycle.length > 0;\r\n\t\tconst haveComputed = this.computed.length > 0;\r\n\t\tconst haveMethods = this.methods.length > 0;\r\n\t\tconst haveWatchers = this.watchers.length > 0;\r\n\t\t\r\n\t\tvar componentDidUpdateContent = \"\";\r\n\r\n\t\t//Empty vars to append into template\r\n\t\tlet states = \"\";\r\n\t\tlet lifecycle = \"\";\r\n\t\tlet computed = \"\";\r\n\t\tlet methods = \"\";\r\n\t\tlet bindMethods = \"\";\r\n\t\tlet bindComputeds = \"\";\r\n\t\tlet bindLifecycles = \"\";\r\n\t\tlet watchers = \"\";\r\n\t\tlet inputHandler = \"\";\r\n\r\n\t\t//Map States\r\n\t\tif (haveStates) {\r\n\t\t\tvar mappedStates = {}; //Empty Object to set States\r\n\t\t\tthis.states.forEach(state => {\r\n\t\t\t\tlet isObject = typeof state === \"object\";\r\n\r\n\t\t\t\tlet stateName =  isObject ? state.key : state.replace(/(\"|')/g, \"\");\r\n\t\t\t\t\r\n\t\t\t\tmappedStates[stateName] = isObject ? state.value : \"\";\r\n\t\t\t});\r\n\t\t\tstates = `\\n\\t\\tthis.state = ${this._JSONPrettify(mappedStates)};`; //Set States\r\n\t\t}\r\n\t\tif (haveLifecycles) {\r\n\t\t\tvar mappedBindLifecycles = [];\r\n\t\t\tconst mappedLifecycle = this.lifecycle.map(({name, content}) => {\r\n\t\t\t\tif (haveWatchers && name === \"componentDidUpdate\") {\r\n\t\t\t\t\tcomponentDidUpdateContent = content\r\n\t\t\t\t\t\t.replace(/(.*)\\s*{/, \"\")\r\n\t\t\t\t\t\t.replace(/}$/, \"\");\r\n\r\n\t\t\t\t\treturn \"\";\r\n\t\t\t\t}\r\n\t\t\t\tmappedBindLifecycles.push(`this.${name} = this.${name}.bind(this);`);\r\n\r\n\t\t\t\treturn `${name}${content}\\n\\t`;\r\n\t\t\t});\r\n\r\n\t\t\tlifecycle = `${mappedLifecycle.join(\"\\n\\t\")}\\n\\t`;\r\n\t\t\t\r\n\t\t\tbindLifecycles = `\\n\\t\\t${mappedBindLifecycles.join(\"\\n\\t\\t\")}`;\r\n\t\t}\r\n\r\n\t\t//Map Computed Properties\r\n\t\tif (haveComputed) {\r\n\t\t\tlet mappedComputed = this.computed.map(({name, content}) => {\r\n\t\t\t\tthis.prerenderComputed.push(`var ${name} = this.${name}();\\n\\t\\t`);\r\n\t\t\t\treturn `${name}${content}`;\r\n\t\t\t});\r\n\t\t\tcomputed = `${mappedComputed.join(\"\\n\\t\")}\\n\\t`;\r\n\r\n\t\t\t//Add to bind methods\r\n\t\t\tlet mappedBindComputed = this.computed.map(({name}) => {\r\n\t\t\t\tlet sliced = name.replace(\"()\", \"\");\r\n\t\t\t\treturn `this.${sliced} = this.${sliced}.bind(this);`;\r\n\t\t\t});\r\n\t\t\tbindComputeds = `\\n\\t\\t${mappedBindComputed.join(\"\\n\\t\\t\")}`;\r\n\t\t}\r\n\r\n\t\t//Methods\r\n\t\tif(haveMethods){\r\n\t\t\tlet mappedMethods = this.methods.map(({name, content}) => {\r\n\t\t\t\treturn `${name}${content}`;\r\n\t\t\t});\r\n\t\t\tmethods = `${mappedMethods.join(\"\\n\\t\")}\\n\\t`;\r\n\r\n\t\t\t//Add to bind methods\r\n\t\t\tlet mappedBindMethods = this.methods.map(({name}) => {\r\n\t\t\t\tlet sliced = name.replace(\"()\", \"\");\r\n\t\t\t\treturn `this.${sliced} = this.${sliced}.bind(this);`;\r\n\t\t\t});\r\n\t\t\tbindMethods = `\\n\\t\\t${mappedBindMethods.join(\"\\n\\t\\t\")}`;\r\n\t\t}\r\n\r\n\t\t//Map State Watchers\r\n\t\tif (haveWatchers) {\r\n\t\t\tconst filteredJs = this._filterJS(this.watchers, \"r\");\r\n\t\t\tconst watchToMap = filteredJs.concat([{name: \"rocketComponentDidUpdate\", content:componentDidUpdateContent}]);\r\n\t\t\t//Filter Content And Map Watchers\r\n\t\t\tlet mappedWatchers = watchToMap\r\n\t\t\t\t.map(({name, content}, i) => {\r\n\t\t\t\t\t\r\n\t\t\t\t\tif (name === \"rocketComponentDidUpdate\")\r\n\t\t\t\t\t\treturn content;\r\n\t\t\t\t\t\r\n\t\t\t\t\tconst param = content.match(/\\w*(?=\\s*(\\)|=>))/)[0];\r\n\t\t\t\t\tcontent = content.replace(/.*(?={)/, \"\");\r\n\t\t\t\t\tlet stateOrProp = \"\";\r\n\r\n\t\t\t\t\t//Watch if is a state\r\n\t\t\t\t\tfor (let i = 0; i < this.states.length; i++) {\r\n\t\t\t\t\t\tif (stateOrProp === \"state.\")\r\n\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\tconst stateName = typeof this.states[i] === \"object\" ? this.states[i].key : this.states[i];\r\n\t\t\t\t\t\tif (name === stateName)\r\n\t\t\t\t\t\t\tstateOrProp = \"state.\";\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif (!stateOrProp) {\r\n\t\t\t\t\t//Watch if is a prop\r\n\t\t\t\t\t\tfor (let i = 0; i < this.states.length; i++) {\r\n\t\t\t\t\t\t\tif (stateOrProp === \"prop.\")\r\n\t\t\t\t\t\t\t\tbreak;\r\n\r\n\t\t\t\t\t\t\tconst stateName = typeof this.states[i] === \"object\" ? this.states[i].key : this.states[i];\r\n\t\t\t\t\t\t\tif (name === stateName)\r\n\t\t\t\t\t\t\t\tstateOrProp = \"prop.\";\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tlet conditional = i === 0 ? \"if\" : \"else if\";\r\n\t\t\t\t\treturn `${conditional} (${stateOrProp + name}) ${content.split(/\\n/).join(\"\\n\\t\").replace(/^{/, `{\\n\\t\\t\\tlet ${param} = ${stateOrProp + name};`)}`;\r\n\t\t\t\t});\r\n\t\t\twatchers = `componentDidUpdate(prop, state){\\n\\t\\t${mappedWatchers.join(\" \")}\\n\\t}`;\r\n\t\t}\r\n\r\n\t\t//Map Input Handler\r\n\t\tif (this.handleInputs) {\r\n\t\t\tinputHandler = \"inputHandler({target}){\\n\\t\\tlet {name, type} = target;\\n\\t\\tlet value = type === 'checkbox' ? target.checked : target.value;\\n\\t\\tthis.setState({\\n\\t\\t\\t[name]: value\\n\\t\\t});\\n\\t}\\n\\t\";\r\n\t\t}\r\n\t\t//If don't have data return empty\r\n\t\tif (\r\n\t\t\t!states &&\r\n\t\t\t!computed &&\r\n\t\t\t!methods &&\r\n\t\t\t!watchers &&\r\n\t\t\tthis.props.length === 0\r\n\t\t) {\r\n\t\t\treturn \"\";\r\n\t\t}\r\n\r\n\t\treturn `constructor() {\\n\\t\\tsuper();${states}${bindMethods}${bindLifecycles}${watchers ? \"\\n\\t\\tthis.componentDidUpdate = this.componentDidUpdate.bind(this);\" : \"\"}${bindComputeds}\\n\\t}\\n\\t${lifecycle}${computed}${methods}${inputHandler}${watchers}`;\r\n\t}\r\n\t/**\r\n\t * Map Conditionals\r\n\t *\r\n\t * @private\r\n\t * @param {string} html\r\n\t * \r\n\t * @return {string} \r\n\t */\r\n\t_mapConditionals(html) {\r\n\t\tlet splittedCond = html.split(/<(?=if\\s*cond)/);\r\n\t\t\r\n\t\tthis.conditionals.forEach((conditionalData, i) => {\r\n\t\t\tlet id = \"\"; //Empty String to set a conditional ID\r\n\r\n\t\t\t/*\r\n\t\t\t * Generate ID\r\n\t\t\t */\r\n\t\t\tfor (let a = 0; a <= 3; a++) {\r\n\t\t\t\tid += new String(Math.floor(Math.random()*10));\r\n\t\t\t}\r\n\r\n\t\t\tif(splittedCond.length > 1) {\r\n\r\n\t\t\t\t//Get Conditional HTML Content\r\n\t\t\t\tlet condTag;\r\n\t\t\t\tif (conditionalData.else)\r\n\t\t\t\t\tcondTag = \"</else>\";\r\n\t\t\t\telse if (conditionalData.elseIf)\r\n\t\t\t\t\tcondTag = \"</else-if>\";\r\n\t\t\t\telse\r\n\t\t\t\t\tcondTag = \"</if>\";\r\n\r\n\t\t\t\tlet replaced = splittedCond[i+1].split(condTag);\r\n\t\t\t\tlet latestIndexOfReplaced = replaced[replaced.length - 1];\r\n\t\t\t\t//We replace that content with the conditional ID\r\n\t\t\t\t//And replace the content in the main Array\r\n\t\t\t\tsplittedCond[i+1] = `{cond_${id}}${latestIndexOfReplaced}`;\r\n\r\n\t\t\t\t/*-----------Data for If --------------*/\r\n\t\t\t\tlet filterIf = this._filterConditionalHTML(conditionalData.if);\r\n\r\n\t\t\t\t/*-----------Data for Else If --------------*/\r\n\t\t\t\tlet filterElseIf;\r\n\t\t\t\tif (conditionalData.elseIf)\r\n\t\t\t\t\tfilterElseIf = conditionalData.elseIf.map(con => {\r\n\t\t\t\t\t\treturn {\r\n\t\t\t\t\t\t\tcond:con.cond,\r\n\t\t\t\t\t\t\ttag:con.tag,\r\n\t\t\t\t\t\t\tcontent:this._filterConditionalHTML(con.content)\r\n\t\t\t\t\t\t};\r\n\t\t\t\t\t});\r\n\t\t\t\t/*-----------Data for Else --------------*/\r\n\t\t\t\tlet filterElse;\r\n\t\t\t\tif (conditionalData.else)\r\n\t\t\t\t\tfilterElse = this._filterConditionalHTML(conditionalData.else);\r\n\t\t\t\t\r\n\r\n\t\t\t\tthis.condStates.push({\r\n\t\t\t\t\tid,\r\n\t\t\t\t\tcond:conditionalData.cond,\r\n\t\t\t\t\ttagIf:conditionalData.tagIf,\r\n\t\t\t\t\ttagElse:conditionalData.tagElse,\r\n\t\t\t\t\telseIf:filterElseIf,\r\n\t\t\t\t\tif:filterIf,\r\n\t\t\t\t\telse:filterElse\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\t\tthis.condWasMapped = true;\r\n\t\treturn splittedCond.join(\"\");\r\n\t}\r\n\t/**\r\n\t * Filter Conditional HTML\r\n\t * \r\n\t * Get the conditional HTML and filter all HTML single tags\r\n\t * \r\n\t * @private\r\n\t * @param {String} html \r\n\t * \r\n\t * @return {String}\r\n\t */\r\n\t_filterConditionalHTML(html) {\r\n\t\tlet finalHTML = html\r\n\t\t\t/*Filter Firts Tabs*/\r\n\t\t\t.replace(/\\t|\\s\\s/g, \"\")\r\n\t\t\t/*Filter NewLine*/\r\n\t\t\t.replace(/(\\r\\n|\\n|\\r)/g, \"\")\r\n\t\t\t.split(/<(?=img|br|input|hr|wbr|area|track|param|source|col|progress)/)\r\n\t\t\t.map((content, i) => {\r\n\t\t\t\tif (i > 0) { \r\n\t\t\t\t\t//Add enclosing tag\r\n\t\t\t\t\treturn content.replace(/>|\\/>/, \"/>\");\r\n\t\t\t\t}\r\n\t\t\t\treturn content;\r\n\t\t\t}).join(\"<\");\r\n\r\n\t\t//If have a loop\r\n\t\tif(finalHTML.match(/<for\\s*val/))\r\n\t\t\tfinalHTML = this._mapLoops(finalHTML);\r\n\r\n\t\treturn finalHTML;\r\n\t}\r\n\t/**\r\n\t * Map Loops\r\n\t *\r\n\t * @private\r\n\t * @param {string} html\r\n\t * \r\n\t * @return {string}\r\n\t */\r\n\t_mapLoops(html) {\r\n\t\tlet splittedLoops = html.split(/<(?=for\\s*val)/);\r\n\t\tthis.loops.forEach((loopData, i) => {\r\n\t\t\tlet id = \"\"; //Empty String to set a Loop ID\r\n\r\n\t\t\t/*\r\n\t\t\t * Generate ID\r\n\t\t\t */\r\n\t\t\tfor (let a = 0; a <= 3; a++) {\r\n\t\t\t\tid += new String(Math.floor(Math.random()*10));\r\n\t\t\t}\r\n\r\n\t\t\tif(splittedLoops.length > 1) {\r\n\t\t\t\tvar tag = null;\r\n\t\t\t\tconst tagRegExp = /\\s*tag=('|\")\\w*(-\\w*)*('|\")/;\r\n\r\n\t\t\t\tif (tagRegExp.test(splittedLoops[1]))\r\n\t\t\t\t\ttag = splittedLoops[1].match(tagRegExp)[0]\r\n\t\t\t\t\t\t.replace(/\\s*tag=/, \"\")\r\n\t\t\t\t\t\t.replace(/'|\"/g, \"\");\r\n\t\t\t\t\r\n\t\t\t\t//Replace Content with Loop ID\r\n\t\t\t\tlet replaced = splittedLoops[i+1].split(\"</for>\");\r\n\t\t\t\treplaced[0] = `{loop_${id}}`;\r\n\t\t\t\tsplittedLoops[i+1] = replaced.join(\"\");\r\n\r\n\t\t\t\t\r\n\t\t\t\tthis.loopsState.push({\r\n\t\t\t\t\tid,\r\n\t\t\t\t\ttag,\r\n\t\t\t\t\tstate:loopData.state,\r\n\t\t\t\t\tvalue:loopData.value,\r\n\t\t\t\t\tcontent:loopData.content.replace(/(\\n|\\r|\\r\\n|\\t|\\s\\s*)/g, \"\")\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\t\tthis.loopsWasMapped = true;\r\n\t\treturn splittedLoops.join(\"\");\r\n\t}\r\n\t/**\r\n\t * Filter HTML\r\n\t *\r\n\t * Filter HTML String and return with React Syntax\r\n\t * \r\n\t * @public\r\n\t * @param {string} html\r\n\t *\r\n\t * @return {string}\r\n\t */\r\n\tfilterHTML(html){\r\n\t\tif (!this.condWasMapped) {\r\n\t\t\thtml = this._mapConditionals(html);\t\r\n\t\t}\r\n\t\tif (!this.loopsWasMapped){\r\n\t\t\thtml = this._mapLoops(html);\r\n\t\t}\r\n\t\thtml = html\r\n\t\t\t.replace(/\"/g, \"'\")\r\n\t\t\t.split(/\\{(?=\\w*)/g)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (e) {\r\n\t\t\t\t\tif (i === 0)\r\n\t\t\t\t\t\treturn e;\r\n\t\t\t\t\t\r\n\t\t\t\t\tif (/prop/.test(e))\r\n\t\t\t\t\t\treturn `{this.props.${e.replace(/(\\s*-.*\\})/g, \"}\")}`;\r\n\t\t\t\t\t\r\n\t\t\t\t\tif (/computed/.test(e))\r\n\t\t\t\t\t\treturn `{${e.replace(/(\\s-.*\\})/g, \"}\")}`;\r\n\t\t\t\t\t\r\n\t\t\t\t\tif (/state/.test(e))\r\n\t\t\t\t\t\treturn `{this.state.${e.replace(/(\\s*-.*\\})/g, \"}\")}`;\r\n\t\t\t\t\r\n\t\t\t\t\treturn `{${e}`;\r\n\t\t\t\t}\r\n\t\t\t})\r\n\t\t\t.join(\"\")\r\n\t\t\t.split(/:(?=\\w*='\\w*)/g)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i !== 0) {\r\n\t\t\t\t\tif(/^\\w*='\\w*'/.test(e)){\r\n\t\t\t\t\t\tlet isState = false;\r\n\t\t\t\t\t\tlet toCompare = e.match(/='\\w*(?=')/)[0];\r\n\t\t\t\t\t\tthis.states.forEach(state => {\r\n\t\t\t\t\t\t\tstate = typeof state === \"object\" ? state.key : state;\r\n\t\t\t\t\t\t\tif (new RegExp(state).test(toCompare)) {\r\n\t\t\t\t\t\t\t\tisState = true;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t\treturn e.replace(/'/, isState ? \"{this.state.\" :  \"{\").replace(/'/, \"}\");\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif (/^\\w*='\\w*\\s*-\\s*\\w*'/.test(e)) {\r\n\t\t\t\t\t\tvar type = \"\";\r\n\t\t\t\t\t\tif (/^\\w*='\\w*\\s*-\\s*prop'/.test(e))\r\n\t\t\t\t\t\t\ttype = \"this.props.\";\r\n\t\t\t\t\t\telse if(/^\\w*='\\w*\\s*-\\s*state'/.test(e))\r\n\t\t\t\t\t\t\ttype = \"this.state.\";\r\n\r\n\t\t\t\t\t\treturn e.replace(/'(?=\\w*)/, `{${type}`).replace(/\\s*-\\s*.*''/, \"}\").replace(/}'/, \"}}\");\r\n\t\t\t\t\t}\r\n\t\t\t\t\tif (/^\\w*='(\\w*|\\w*(\\.\\w*)*)\\s*(<|>|==|===|\\?)/.test(e)) {\r\n\t\t\t\t\t\tlet isState = false;\r\n\t\t\t\t\t\tlet toCompare = e.match(/(\\w*|\\w*(\\.\\w*)*)(?=\\s*(<|>|==|===|\\?))/)[0];\r\n\t\t\t\t\t\tthis.states.forEach(state => {\r\n\t\t\t\t\t\t\tstate = typeof state === \"object\" ? state.key : state;\r\n\t\t\t\t\t\t\tif (new RegExp(state).test(toCompare)) {\r\n\t\t\t\t\t\t\t\tisState = true;\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t});\r\n\t\t\t\t\t\treturn e.replace(/'(?=\\w*)/, isState ? \"{this.state.\" : \"{\").replace(/'''/, \"\\\"\\\"}\").replace(/''/, \"'}\").replace(/='}/, \"=''\").replace(/}'/, \"}}\");\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\treturn e;\r\n\t\t\t})\r\n\t\t\t.join(\" \")\r\n\t\t\t.replace(/\\s-\\s.*'/g, \"}\")\r\n\t\t\t.split(new RegExp(`on(?=${Const_Events_json__WEBPACK_IMPORTED_MODULE_1__.join(\"|\")})`))\r\n\t\t\t.map((e, index) => {\r\n\t\t\t\tif (index === 0) {\r\n\t\t\t\t\treturn e;\r\n\t\t\t\t} else {\r\n\t\t\t\t\tlet eventName = e.match(/^\\w*/)[0].toLowerCase();\r\n\t\t\t\t\tswitch (eventName) {\r\n\t\t\t\t\tcase \"afterprint\":\r\n\t\t\t\t\t\teventName = \"AfterPrint\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"animationend\":\r\n\t\t\t\t\t\teventName = \"AnimationEnd\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"animationiteration\":\r\n\t\t\t\t\t\teventName = \"AnimationIteration\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"animationstart\":\r\n\t\t\t\t\t\teventName = \"AnimationStart\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"beforeprint\":\r\n\t\t\t\t\t\teventName = \"BeforePrint\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"beforeunload\":\r\n\t\t\t\t\t\teventName = \"BeforeUnload\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"canplay\":\r\n\t\t\t\t\t\teventName = \"CanPlay\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"canplaythrough\":\r\n\t\t\t\t\t\teventName = \"CanPlayThrough\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"contextmenu\":\r\n\t\t\t\t\t\teventName = \"ContextMenu\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"compositionend\": \r\n\t\t\t\t\t\teventName = \"CompositionEnd\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"compositionstart\":\r\n\t\t\t\t\t\teventName = \"CompositionStart\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"compositionupdate\":\r\n\t\t\t\t\t\teventName = \"CompositionUpdate\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"dblclick\":\r\n\t\t\t\t\t\teventName = \"DoubleClick\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"dragend\":\r\n\t\t\t\t\t\teventName = \"DragEnd\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"dragenter\":\r\n\t\t\t\t\t\teventName = \"DragEnter\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"dragleave\":\r\n\t\t\t\t\t\teventName = \"DragLeave\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"dragover\":\r\n\t\t\t\t\t\teventName = \"DragOver\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"dragstart\":\r\n\t\t\t\t\t\teventName = \"DragStart\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"durationchange\":\r\n\t\t\t\t\t\teventName = \"DurationChange\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"focusin\":\r\n\t\t\t\t\t\teventName = \"FocusIn\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"focusout\":\r\n\t\t\t\t\t\teventName = \"FocusOut\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"hashchange\":\r\n\t\t\t\t\t\teventName = \"HashChange\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"keydown\":\r\n\t\t\t\t\t\teventName = \"KeyDown\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"keypress\":\r\n\t\t\t\t\t\teventName = \"KeyPress\"; \r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"keyup\":\r\n\t\t\t\t\t\teventName = \"KeyUp\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"loadeddata\":\r\n\t\t\t\t\t\teventName = \"LoadedData\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"loadedmetadata\":\r\n\t\t\t\t\t\teventName = \"LoadedMetadata\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"loadstart\":\r\n\t\t\t\t\t\teventName = \"LoadStart\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"mousedown\":\r\n\t\t\t\t\t\teventName = \"MouseDown\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"mouseenter\":\r\n\t\t\t\t\t\teventName = \"MouseEnter\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"mouseleave\":\r\n\t\t\t\t\t\teventName = \"MouseLeave\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"mousemove\":\r\n\t\t\t\t\t\teventName = \"MouseMove\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"mouseover\":\r\n\t\t\t\t\t\teventName = \"MouseOver\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"mouseout\":\r\n\t\t\t\t\t\teventName = \"MouseOut\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"mouseup\":\r\n\t\t\t\t\t\teventName = \"MouseUp\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"pagehide\":\r\n\t\t\t\t\t\teventName = \"PageHide\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"pageshow\":\r\n\t\t\t\t\t\teventName = \"PageShow\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"pointerdown\":\r\n\t\t\t\t\t\teventName = \"PointerDown\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"pointermove\":\r\n\t\t\t\t\t\teventName = \"PointerMove\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"pointerup\":\r\n\t\t\t\t\t\teventName = \"PointerUp\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"pointercancel\":\r\n\t\t\t\t\t\teventName = \"PointerCancel\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"gotpointercapture\":\r\n\t\t\t\t\t\teventName = \"GotPointerCapture\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"lostpointercapture\":\r\n\t\t\t\t\t\teventName = \"LostPointerCapture\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"pointerenter\":\r\n\t\t\t\t\t\teventName = \"PointerEnter\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"pointerleave\":\r\n\t\t\t\t\t\teventName = \"PointerLeave\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"pointerover\":\r\n\t\t\t\t\t\teventName = \"PointerOver\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"pointerout\":\r\n\t\t\t\t\t\teventName = \"PointerOut\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"popstate\":\r\n\t\t\t\t\t\teventName = \"PopState\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"ratechange\":\r\n\t\t\t\t\t\teventName = \"RateChange\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"timeupdate\":\r\n\t\t\t\t\t\teventName = \"TimeUpdate\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"touchcancel\":\r\n\t\t\t\t\t\teventName = \"TouchCancel\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"touchend\":\r\n\t\t\t\t\t\teventName = \"TouchEnd\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"touchmove\":\r\n\t\t\t\t\t\teventName = \"TouchMove\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"touchstart\":\r\n\t\t\t\t\t\teventName = \"TouchStart\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"transitionend\":\r\n\t\t\t\t\t\teventName = \"TransitionEnd\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"volumechange\":\r\n\t\t\t\t\t\teventName = \"VolumeChange\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tdefault:\r\n\t\t\t\t\t\teventName = eventName[0].toUpperCase() + eventName.slice(1);\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\t}\r\n\r\n\t\t\t\t\tif(/='\\w*\\(\\)/.test(e))\r\n\t\t\t\t\t\treturn e.replace(/\\w*/, eventName)\r\n\t\t\t\t\t\t\t.replace(/'(?=\\w*)/, \"{this.\")\r\n\t\t\t\t\t\t\t.replace(/\\(\\)'(?=\\s|\\/|>)/, \"}\");\r\n\r\n\t\t\t\t\tif(/='\\w*\\(.*\\)/.test(e))\r\n\t\t\t\t\t\treturn e.replace(/\\w*/, eventName)\r\n\t\t\t\t\t\t\t.replace(/'(?=\\w*)/, \"{()=>this.\")\r\n\t\t\t\t\t\t\t.replace(/\\)'(?=\\s|\\/|>)/, \")}\");\r\n\r\n\r\n\t\t\t\t\treturn e.replace(/\\w*/, eventName)\r\n\t\t\t\t\t\t.replace(\"'\", \"{\")\r\n\t\t\t\t\t\t.replace(\"'\", \"}\");\r\n\t\t\t\t} \r\n\t\t\t})\r\n\t\t\t.join(\"on\")\r\n\t\t\t.split(/<input/)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tconst haveName = /name=(\"|')\\w*(\"|')/.test(e);\r\n\t\t\t\t\tlet handler = \"\";\r\n\t\t\t\t\tif (haveName) {\r\n\t\t\t\t\t\thandler = \"onChange={this.inputHandler.bind(this)}\";\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn handler + e;\r\n\t\t\t\t}\r\n\t\t\t\treturn e;\r\n\t\t\t})\r\n\t\t\t.join(\"<input \")\r\n\t\t\t.split(/<textarea/)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tconst haveName = /name=(\"|')\\w*(\"|')/.test(e);\r\n\t\t\t\t\tlet handler = \"\";\r\n\t\t\t\t\tif (haveName) {\r\n\t\t\t\t\t\thandler = \"onChange={this.inputHandler.bind(this)}\";\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn handler + e;\r\n\t\t\t\t}\r\n\t\t\t\treturn e;\r\n\t\t\t})\r\n\t\t\t.join(\"<textarea \")\r\n\t\t\t.split(/<select/)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tconst haveName = /name=(\"|')\\w*(\"|')/.test(e);\r\n\t\t\t\t\tlet handler = \"\";\r\n\t\t\t\t\tif (haveName) {\r\n\t\t\t\t\t\thandler = \"onChange={this.inputHandler.bind(this)}\";\r\n\t\t\t\t\t}\r\n\t\t\t\t\treturn handler + e;\r\n\t\t\t\t}\r\n\t\t\t\treturn e;\r\n\t\t\t})\r\n\t\t\t.join(\"<select \")\r\n\t\t\t.replace(/class(?=='|={)/g, \"className\")\r\n\t\t\t.replace(/for(?=='|={)/g, \"htmlFor\")\r\n\t\t\t.split(/<br/)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0)\r\n\t\t\t\t\treturn e.replace(/>|\\/>/, \"/>\");\r\n\t\t\t\t\r\n\t\t\t\treturn e; \r\n\t\t\t}).join(\"<br\")\r\n\t\t\t.split(/<img/)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0)\r\n\t\t\t\t\treturn e.replace(/>|\\/>/, \"/>\");\r\n\t\t\t\t\r\n\t\t\t\treturn e; \r\n\t\t\t}).join(\"<img\")\r\n\t\t\t.split(/<input/)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0)\r\n\t\t\t\t\treturn e.replace(/>|\\/>/, \"/>\");\r\n\t\t\t\t\r\n\t\t\t\treturn e; \r\n\t\t\t}).join(\"<input\")\r\n\t\t\t.split(\"<component \").map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tlet name = e.match(/component-name=('|\")\\w*/)[0].replace(/component-name=('|\")/, \"\");\r\n\t\t\t\t\tlet splitted = e.split(\"</component>\");\r\n\t\t\t\t\tlet tag = splitted[0].split(/\\r\\n|\\n|\\r/)[0];\r\n\t\t\t\t\treturn tag.replace(/component-name=('|\")\\w*('|\")/, name).replace(\">\", \"/>\") + splitted[1];\r\n\t\t\t\t} \r\n\t\t\t\treturn e;\r\n\t\t\t})\r\n\t\t\t.join(\"<\");\r\n\r\n\t\treturn html;\r\n\t}\r\n\t/**\r\n\t * Get Typeof Data\r\n\t * \r\n\t * Take a conditional state and get if is a State or a Prop\r\n\t * \r\n\t * @private\r\n\t * @param {String} data\r\n\t * \r\n\t * @return {String}\r\n\t */\r\n\t_getTypeofData(data) {\r\n\t\tconst name = data.match(/^\\w*/)[0];\r\n\t\t//Map States\r\n\t\tfor (let i = 0; i < this.states.length; i++) {\r\n\r\n\t\t\tconst state = typeof this.states[i] === \"object\" ? this.states[i].key : this.states[i];\r\n\t\t\tif (state === name)\r\n\t\t\t\treturn `this.state.${data}`;\r\n\t\t}\r\n\r\n\t\t//Map Props\r\n\t\tfor (let i = 0; i < this.props.length; i++) {\r\n\t\t\tif (this.props[i] === name)\r\n\t\t\t\treturn `this.props.${data}`;\r\n\t\t}\r\n\t}\r\n\t\r\n\t/**\r\n\t * Prerender Logical (getter)\r\n\t *\r\n\t * Set logical to execute while render the component\r\n\t *\r\n\t * @return {string}\r\n\t *\r\n\t */\r\n\tget prerenderLogical(){\r\n\t\tthis.loopsWasMapped = false;\r\n\t\tlet loops = this.loopsState.map(e => {\r\n\t\t\tvar content;\r\n\r\n\t\t\tif (e.tag !== null)\r\n\t\t\t\tcontent = `<${e.tag}>${this.filterHTML(e.content)}</${e.tag}>`;\r\n\t\t\telse\r\n\t\t\t\tcontent = this.filterHTML(e.content);\r\n\r\n\t\t\treturn `var loop_${e.id} = this.state.${e.state}.map(${e.value}=>\\n\\t\\t\\t(${content})\\n\\t\\t);\\n\\t\\t`;\r\n\t\t});\r\n\t\tthis.condWasMapped = false;\r\n\t\tlet cond = this.condStates.map(e => {\r\n\t\t\t\r\n\t\t\tvar ifContent;\r\n\t\t\tif (e.tagIf)\r\n\t\t\t\tifContent = `<${e.tagIf}>${e.if}</${e.tagIf}>`;\r\n\t\t\telse {\r\n\t\t\t\tif (/^\\w*/.test(e.if[0]))\r\n\t\t\t\t\tifContent = `\"${e.if}\";`;\r\n\t\t\t\telse\r\n\t\t\t\t\tifContent = e.if;\r\n\t\t\t}\r\n\r\n\t\t\tvar elseContent;\r\n\t\t\tif (e.else) {\r\n\t\t\t\tif (e.tagElse)\r\n\t\t\t\t\telseContent = `<${e.tagElse}>${e.else}</${e.tagElse}>`;\r\n\t\t\t\telse {\r\n\t\t\t\t\tif (/^\\w*/.test(e.else[0]))\r\n\t\t\t\t\t\telseContent = `\"${e.else}\";`;\r\n\t\t\t\t\telse\r\n\t\t\t\t\t\telseContent = e.else;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\r\n\t\t\treturn `var cond_${e.id};\\n\\t\\tif(${this._getTypeofData(e.cond)}) {\\n\\t\\t\\tcond_${e.id} = ${this.filterHTML(ifContent)}\\n\\t\\t} ${e.elseIf ? e.elseIf.map(con => {\r\n\t\t\t\tvar content;\r\n\t\t\t\tif (con.tag)\r\n\t\t\t\t\tcontent = `<${con.tag}>${con.content}</${con.tag}>`;\r\n\t\t\t\telse {\r\n\t\t\t\t\tif (/^w*/.test(con.content[0]))\r\n\t\t\t\t\t\tcontent = `\"${con.content}\";`;\r\n\t\t\t\t\telse\r\n\t\t\t\t\t\t// eslint-disable-next-line prefer-destructuring\r\n\t\t\t\t\t\tcontent = con.content;\r\n\t\t\t\t}\r\n\t\t\t\treturn `else if (${this._getTypeofData(con.cond)}) {\\n\\t\\t\\tcond_${e.id} = ${this.filterHTML(content)}\\n\\t\\t}\\n\\t\\t`;\r\n\t\t\t\r\n\t\t\t}).join(\"\"):\"\"}${e.else ? `else {\\n\\t\\t\\tcond_${e.id} = ${this.filterHTML(elseContent)}\\n\\t\\t}\\n\\t\\t`:\"\"}`;\r\n\t\t});\r\n\t\tthis.condStates = [];\r\n\t\tthis.loopsState = [];\r\n\t\treturn `${loops ? loops.join(\"\"):\"\"}${cond ? cond.join(\"\") : \"\"}${this.prerenderComputed.length > 0 ? this.prerenderComputed.join(\"\"):\"\"}`;\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ReactStateManagement);\r\n\n\n//# sourceURL=webpack:///./src/core/StateManagement/ReactStateManagement.js?");

/***/ }),

/***/ "./src/core/StateManagement/StateManagement.js":
/*!*****************************************************!*\
  !*** ./src/core/StateManagement/StateManagement.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Core_ErrorManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Core/ErrorManagement */ \"./src/core/ErrorManagement/index.js\");\n/* harmony import */ var Const_Globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Const/Globals */ \"./src/const/Globals.json\");\nvar Const_Globals__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! Const/Globals */ \"./src/const/Globals.json\", 1);\n //Define Error Management Globals\r\n\r\n\r\nObject(Core_ErrorManagement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); \r\n\r\n/**\r\n * State Management Base Class\r\n * \r\n * Class that manage HTML String and get all data from these\r\n * \r\n * @class\r\n */\r\nclass StateManagement {\r\n\tconstructor(){\r\n\t\t//Initialize Data arrays\r\n\t\tthis._states = new Array();\r\n\t\tthis._computed = new Array();\r\n\t\tthis._methods = new Array();\r\n\t\tthis._components = new Array();\r\n\t\tthis._watchers = new Array();\r\n\t\tthis._props = new Array();\r\n\t\tthis._handleInputs = false;\r\n\t\tthis._cond = new Array();\r\n\t\tthis._loops = new Array();\r\n\t\tthis._lifecycle = new Array();\r\n\t\t\r\n\t\tthis._regExpToMatchState = /^\\w*\\s*-\\s*state$/g; //RegExp to get State With Declaration\r\n\t\tthis._regExpToMatchStateWithValue = /^\\w*\\s*-\\s*state\\s*-\\s*.*$/g; //RegExp to get State With Value\r\n\t\tthis._regExpToMatchComputed = /^\\w*\\s*-\\s*computed/g; //RegExp to get Computed Methods\r\n\t\tthis._regExpToMatchProps = /^\\w*\\s*-\\s*prop/g; //RegExp to get Props\r\n\t\t\r\n\t\tthis.componentsContent = new Array();\r\n\t}\r\n\r\n\t//--------------- Public Methods -----------------\r\n\r\n\t/**\r\n\t * Get HTML String\r\n\t * \r\n\t * Get Get All Data From HTML\r\n\t * \r\n\t * @public\r\n\t * @param {string} html\r\n\t */\r\n\tgetHTMLString(html){\r\n\t\tthis._setDataFromHTML(html); //Call Method to Get Data from HTML String\r\n\t}\r\n\t/**\r\n\t * Get Js Data\r\n\t * \r\n\t * Get Js Methods from the Js File and Set to Methods Contents\r\n\t * \r\n\t * @public\r\n\t * @param {Array} JSParsed JS Content Array From JS Parser\r\n\t * @param {String} type This Can Be 'v' or 'r'\r\n\t */\r\n\tgetJsData(JSParsed, type) {\r\n\t\tif (JSParsed.length > 0) {\r\n\t\t\tthis._filterJS(JSParsed, type).forEach(e => {\r\n\t\t\t\t//Map Methods\r\n\t\t\t\tthis.methods.forEach((method, i) => {\r\n\t\t\t\t\tif (e.name === method.name) {\r\n\t\t\t\t\t\tthis._methods[i].content = e.content;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t\t//Map Computed\r\n\t\t\t\tthis.computed.forEach(({name}, i) => {\r\n\t\t\t\t\tif (e.name === name) {\r\n\t\t\t\t\t\tthis._computed[i].content = e.content;\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\r\n\t\t\t});\r\n\t\t}\r\n\t\t/*Error Handle*/\r\n\t\tthis.methods.forEach(({content, name}) => {\r\n\t\t\tif(!content) new global.UndefinedMethodError(name);\r\n\t\t});\r\n\t\tthis.computed.forEach(({content, name}) => {\r\n\t\t\tif(!content) new global.UndefinedComputedError(name);\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t * Set Vars\r\n\t * \r\n\t * Get Vars from JS Parsed and set the value in the corresponding state\r\n\t * \r\n\t * @public\r\n\t * @param {Array} VarsArray \r\n\t */\r\n\tsetVarsToStatesContent(VarsArray){\r\n\t\t//Map Vars Array\r\n\t\tthis.states.forEach((state, i) => {\r\n\t\t\tif (typeof state === \"object\") {\r\n\t\t\t\tconst {value:val} = state;\r\n\t\t\t\t//If match replace the corresponding state\r\n\t\t\t\tif (VarsArray.length > 0) {\r\n\t\t\t\t\tVarsArray.forEach(({name, value}) => {\r\n\t\t\t\t\t\tif (val.var) {\r\n\t\t\t\t\t\t\tif (state.value.var === name) {\r\n\t\t\t\t\t\t\t\tthis._states[i] = {\r\n\t\t\t\t\t\t\t\t\tkey:state.key,\r\n\t\t\t\t\t\t\t\t\tvalue:value\r\n\t\t\t\t\t\t\t\t};\r\n\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\telse new global.MissingVarError(state.key, val.var);\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t});\r\n\t\t\t\t} else {\r\n\t\t\t\t\tif (typeof val === \"object\" && val.var)\r\n\t\t\t\t\t\tnew global.MissingVarError(state.key, val.var);\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t * Set States\r\n\t * \r\n\t * Get States from JS Parsed and set to Component States\r\n\t * \r\n\t * @public\r\n\t * @param {Array} statesArray Array with all states from JS Parser\r\n\t */\r\n\tset statesFromJS(statesArray){\r\n\t\tthis._states = new Array();\r\n\t\tthis._computed = new Array();\r\n\t\tthis._methods = new Array();\r\n\t\tthis._components = new Array();\r\n\t\tthis._watchers = new Array();\r\n\t\tthis._props = new Array();\r\n\t\tthis._handleInputs = false;\r\n\t\tthis._cond = new Array();\r\n\t\tthis._loops = new Array();\r\n\t\tthis._lifecycle = new Array();\r\n\r\n\t\tif (statesArray) {\r\n\t\t\tthis._states = statesArray;\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Setter Watcher\r\n\t * \r\n\t * Get State Watchers from JS Parsed and set to Component Watchers\r\n\t * \r\n\t * @public\r\n\t * @param {Array} watchersArray \r\n\t */\r\n\tset watchers(watchersArray){\r\n\t\tif (watchersArray) {\r\n\t\t\twatchersArray.forEach(({name}) => {\r\n\t\t\t\tlet count = 0;\r\n\t\t\t\tthis.states.forEach(state => {\r\n\t\t\t\t\tlet key = typeof state === \"object\" ? state.key : state;\r\n\t\t\t\t\tif (key === name) count++;\r\n\t\t\t\t});\r\n\t\t\t\tif (count === 0){\r\n\t\t\t\t\tnew global.UndefinedStateError({type:\"watcher\", name});\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t\tthis._watchers = watchersArray;\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Getter Watchers\r\n\t * \r\n\t * @public\r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\tget watchers(){\r\n\t\treturn this._watchers;\r\n\t}\r\n\r\n\t/**\r\n\t * Lifecycle Setter\r\n\t * \r\n\t * @public\r\n\t * @param {Array} lifecycles\r\n\t * @param {String} type\r\n\t * \r\n\t * @return {Object}\r\n\t */\r\n\tsetLifecycle(lifecycles, type) {\r\n\t\tif (lifecycles.length > 0) {\r\n\t\t\tconst jsFiltered = this._filterJS(lifecycles, type);\r\n\r\n\t\t\tthis._lifecycle = jsFiltered.map(({name, content}) => {\r\n\t\r\n\t\t\t\tif (type === \"r\") {\r\n\t\t\t\t\tswitch(name) {\r\n\t\t\t\t\tcase \"beforeMount\":\r\n\t\t\t\t\t\tname = \"componentWillMount\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"mounted\":\r\n\t\t\t\t\t\tname = \"componentDidMount\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"beforeUpdate\":\r\n\t\t\t\t\t\tname = \"componentWillUpdate\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"updated\":\r\n\t\t\t\t\t\tname = \"componentDidUpdate\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"beforeUnmount\":\r\n\t\t\t\t\tcase \"unmounted\":\r\n\t\t\t\t\t\tname = \"componentWillUnmount\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tdefault: break;\r\n\t\t\t\t\t}\r\n\t\t\t\t} else if (type === \"v\") {\r\n\t\t\t\t\tswitch(name) {\r\n\t\t\t\t\tcase \"beforeUnmount\":\r\n\t\t\t\t\t\tname = \"beforeDestroy\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tcase \"unmounted\":\r\n\t\t\t\t\t\tname = \"destroyed\";\r\n\t\t\t\t\t\tbreak;\r\n\t\t\t\t\tdefault: break;\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t\treturn {\r\n\t\t\t\t\tname,\r\n\t\t\t\t\tcontent\r\n\t\t\t\t};\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Lifecycle Getter\r\n\t * \r\n\t * @public\r\n\t * @return {Array}\r\n\t */\r\n\tget lifecycle() {\r\n\t\treturn this._lifecycle;\r\n\t}\r\n\t/**\r\n\t* Components Setter\r\n\t* \r\n\t* @public\r\n\t* @param {string} html \r\n\t*/\r\n\tset components(html){\r\n\t\tlet _matchComponents = html.match(/<([A-Z]\\w*).*\\/>/g); //Match Components\r\n\t\tif (_matchComponents) {\r\n\t\t\t_matchComponents.forEach(e => {\r\n\t\t\t\tlet name = e.match(/[A-Z]\\w*/g)[0]; //Get Component Name\r\n\t\t\t\tlet bindData = e.match(/:\\w*=('|\")\\w*('|\")/g); //Get Bind Prop Data\r\n\t\t\t\tlet bindDataHasNameAndValue = e.match(/:\\w*=('|\")\\w*\\s-\\s('|\")\\w*('|\")('|\")/g); //Get Bind Prop Data and Value\r\n\t\t\t\tif (bindData) {\r\n\t\t\t\t\tthis._states.push(bindData[0].replace(/'|\"/g, \"\").slice(1).split(\"=\")[1]); //Push Bind Data to States\r\n\t\t\t\t}\r\n\t\t\t\tif(bindDataHasNameAndValue){\r\n\t\t\t\t\tlet dataArray = bindDataHasNameAndValue[0].split(\"=\"); //Get Data Array\r\n\t\t\t\t\tlet keyValue = dataArray[1].split(\" - \"); //Split Key And Value\r\n\t\t\t\t\tlet key = keyValue[0].slice(1); //Set Key Name\r\n\t\t\t\t\tlet value = this._defineTypeFromString(keyValue[1].slice(0, keyValue[1].length - 1)); //Get Type of Value and Set it\r\n\t\t\t\t\tthis._states.push({key, value}); //Push Bind Data With Value to States\r\n\t\t\t\t}\r\n\t\t\t\tthis._components.push(name);\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\tlet splitComponentWithContent = html.split(\"<component \");\r\n\t\tsplitComponentWithContent.forEach((e, i) => {\r\n\t\t\tif (i > 0) {\r\n\t\t\t\tlet componentName = e.match(/component-name\\s*=\\s*('|\")\\w*/)[0].replace(/component-name\\s*=\\s*(\"|')/, \"\");\r\n\t\t\t\tlet componentContent = e.replace(/.*>(\\r\\n|\\n|\\r)/, \"\").split(/(\\r\\n|\\n|\\r)*\\t*<\\/component>/)[0];\r\n\r\n\t\t\t\tthis._components.push(componentName);\r\n\t\t\t\t\r\n\t\t\t\tthis.componentsContent.push({\r\n\t\t\t\t\tname:componentName,\r\n\t\t\t\t\tcontent:componentContent\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\t\tthis.componentsContent.forEach(({name}) => {\r\n\t\t\tlet duplicates = 0;\r\n\t\t\tthis.componentsContent.forEach(ev => {\r\n\t\t\t\tif (name === ev.name) duplicates++;\r\n\t\t\t});\r\n\t\t\tif (duplicates > 1) {\r\n\t\t\t\tnew global.DuplicateComponentError(name);\r\n\t\t\t}\r\n\t\t\t\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t * Components Getter\r\n\t * \r\n\t * @public\r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\tget components() {\r\n\t\treturn this._components;\r\n\t}\r\n\t/**\r\n\t * Computed Setter\r\n\t * \r\n\t * @public\r\n\t * @param {array} dataArray Array With All Data\r\n\t */\r\n\tset computed(dataArray){\r\n\t\tlet _computedArray=[]; //Declare Empty Array\r\n\t\t//Map Array to get computed methods\r\n\t\tdataArray.forEach(e => {\r\n\t\t\tlet _computedMatched = e.match(this._regExpToMatchComputed);\r\n\t\t\t//If Match push to empty array\r\n\t\t\tif (_computedMatched) {\r\n\t\t\t\t//This must match something like: {Name - computed}\r\n\t\t\t\t_computedArray.push(_computedMatched[0]);\r\n\t\t\t}\r\n\t\t});\r\n\r\n\t\t//If have matched computed push to Component Computed\r\n\t\tif (_computedArray.length > 0) {\r\n\t\t\tlet computedList = [\"1234\"];\r\n\r\n\t\t\t_computedArray = _computedArray.filter(e => {\r\n\t\t\t\tlet duplicate = false;\r\n\t\t\t\tcomputedList.forEach(ev => {\r\n\t\t\t\t\tif (e.name === ev) duplicate = true;\r\n\t\t\t\t\telse computedList.push(e.name);\r\n\t\t\t\t});\r\n\t\t\t\tif (!duplicate) return e;\r\n\t\t\t});\r\n\t\t\t_computedArray.forEach(e => {\r\n\t\t\t\tthis._computed.push({\r\n\t\t\t\t\tname:e.match(/^\\w*/g)[0],\r\n\t\t\t\t\tcontent:null\r\n\t\t\t\t});\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Computed Getter\r\n\t * \r\n\t * @public\r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\tget computed() {\r\n\t\treturn this._computed;\r\n\t}\r\n\t/**\r\n\t * State In Bind Attributes Setter\r\n\t * \r\n\t * @public\r\n\t * @param {String} html\r\n\t */\r\n\tset statesInBindAttributes(html) {\r\n\t\thtml.split(/:(?=\\w*=)/).forEach((bindAttr, i) => {\r\n\t\t\tif (i > 0) {\r\n\t\t\t\tconst withTypeRegExp = /^\\w*=(\"|')\\w*\\s*-\\s*\\w*(\"|')/;\r\n\r\n\t\t\t\tif (withTypeRegExp.test(bindAttr)) {\r\n\t\t\t\t\tconst attrib = bindAttr.match(withTypeRegExp)[0];\r\n\r\n\t\t\t\t\tif (/state/.test(attrib)) {\r\n\t\t\t\t\t\tconst stateName = attrib.replace(/'/g, \"\\\"\").split(/=\"/)[1].replace(/\\s*-.*$/, \"\");\r\n\t\t\t\t\t\tthis._states.push(stateName);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t * States In Bars Setter\r\n\t * \r\n\t * @public\r\n\t * @param {array} dataArray \r\n\t */\r\n\tset statesInBars(dataArray){\r\n\t\t/* \r\n\t\t\tCapture State Without Value and push to Empty Array\r\n\t\t*/\r\n\t\tlet _stateArray = []; //Declare Empty Array to State With Declaration: {name - state}\r\n\t\tdataArray.forEach(e => {\r\n\t\t\tlet _matched = e.match(this._regExpToMatchState);\r\n\t\t\tif(_matched){\r\n\t\t\t\t_stateArray.push(_matched[0]);\r\n\t\t\t}\r\n\t\t});\r\n\t\t/* \r\n\t\t\tCapture State With Value and Instance and push to Empty Array\r\n\t\t*/       \r\n\t\tlet _stateWithValueArray = []; //Declare Empty Array to State With Value: {name - state - someValue}\r\n\t\tdataArray.forEach(e => {\r\n\t\t\tlet _matched = e.match(this._regExpToMatchStateWithValue); \r\n\t\t\tif (_matched) {\r\n\t\t\t\t_stateWithValueArray.push(_matched[0]);\r\n\t\t\t}\r\n\t\t});\r\n\t\t//If State With Declaration, Map and Push to Component States\r\n\t\tif (_stateArray.length > 0){\r\n\t\t\t_stateArray.forEach(e => {\r\n\t\t\t\tlet _stateName = e.match(/^\\w*/g)[0]; //Get State Name\r\n\t\t\t\tthis._states.push(_stateName);\r\n\t\t\t});\r\n\t\t}\r\n\r\n\t\t//If State With Value, Map and Push to Component States\r\n\t\tif (_stateWithValueArray) {\r\n\t\t\t_stateWithValueArray.forEach(e => {\r\n\t\t\t\tlet _getKey = e.match(/^\\w*/);\r\n\t\t\t\tlet value = this._defineTypeFromString(e.match(/(\\w*|\\{.*\\}|\\[.*\\]|('|\")\\w*(\\s*\\w*)*('|\"))$/)[0]); //Set Value\r\n\t\t\t\tlet key = _getKey[0]; //Set Key\r\n\t\t\t\tthis._states.push({key, value });\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * States Getter\r\n\t * \r\n\t * @public\r\n\t * @return {Array}\r\n\t */\r\n\tget states() {\r\n\t\treturn this._states;\r\n\t}\r\n\t/**\r\n\t * Methods Setter\r\n\t * \r\n\t * Map and get all HTML events attr like onclick, onsubmit, etc.\r\n\t * \r\n\t * @public\r\n\t * @param {string} html HTML String\r\n\t */\r\n\tset methods(html){\r\n\t\tlet events = html.match(/on\\w*=(\"|')\\w*\\(.*\\)(\"|')/g); //Match RegExp\r\n\t\tif (events) {\r\n\t\t\tevents.forEach(e => {\r\n\t\t\t\tlet split = e.split(\"=\");\r\n\t\t\t\tlet name = split[1].match(/\\w*(?=\\()/)[0];\r\n\t\t\t\tthis._methods.push({\r\n\t\t\t\t\tname, /*Get Method Name*/\r\n\t\t\t\t\tcontent:null\r\n\t\t\t\t});\r\n\t\t\t});\r\n\r\n\t\t\t//Array to push each method if don't is duplicate \r\n\t\t\tlet duplicateList = [\"1234\"];\r\n\r\n\t\t\t//Methods Errors Handle\r\n\t\t\tthis._methods = this._methods.filter(method => {\r\n\t\t\t\tlet duplicate = false;\r\n\t\t\t\tduplicateList.forEach(methodNameToCompare => {\r\n\t\t\t\t\tif (method.name === methodNameToCompare)\r\n\t\t\t\t\t\tduplicate = true;\r\n\r\n\t\t\t\t\telse\r\n\t\t\t\t\t\tduplicateList.push(method.name);\r\n\t\t\t\t});\r\n\t\t\t\tif (!duplicate) return method;\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Methods Getter\r\n\t * \r\n\t * @public\r\n\t * @return {Array}\r\n\t */\r\n\tget methods() {\r\n\t\treturn this._methods;\r\n\t}\r\n\t/**\r\n\t * Props In Bind Attributes Setter\r\n\t * \r\n\t * @public\r\n\t * @param {String} html\r\n\t */\r\n\tset propsInBindAttributes(html) {\r\n\t\thtml.split(/:(?=\\w*=)/).forEach((bindAttr, i) => {\r\n\t\t\tif (i > 0) {\r\n\t\t\t\tconst regExpToMatch = /^\\w*=\"(\\w*(\\s*-\\s*\\w*)*)\"/;\r\n\t\t\t\tif (regExpToMatch.test(bindAttr)) {\r\n\t\t\t\t\tconst attrib = bindAttr.match(regExpToMatch)[0];\r\n\r\n\t\t\t\t\tif (/prop/.test(attrib)) {\r\n\t\t\t\t\t\tconst propName = attrib.replace(/'/g, \"\\\"\").split(/=\"/)[1].replace(/\\s*-.*$/, \"\");\r\n\t\t\t\t\t\tthis._props.push(propName);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t* Props In Bars\r\n\t* \r\n\t* @public\r\n\t* @param {Array} dataArray\r\n\t*/\r\n\tset propsInBars(dataArray) {\r\n\t\t//Map Array\r\n\t\tdataArray.forEach(e => {\r\n\t\t\t//If Match Add Prop Name to Props\r\n\t\t\tif (e.match(this._regExpToMatchProps)) {\r\n\t\t\t\tthis._props.push(e.replace(/\\s-\\s\\w*/g, \"\"));\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t * Props Getter\r\n\t * \r\n\t * @public\r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\tget props() {\r\n\t\treturn this._props;\r\n\t}\r\n\t/**\r\n\t * Inputs Setter\r\n\t * \r\n\t * Get Input, Textarea and Option Tags from HTML String\r\n\t * \r\n\t * @public\r\n\t * @param {string} html \r\n\t */\r\n\tset inputs(html) {\r\n\t\t//Match Tags\r\n\t\tlet inputs = html.match(/<(input|select|textarea).*(\\/>|>)/g);\r\n\t\tif (inputs) {\r\n\t\t\t//Map Matches Tags\r\n\t\t\tinputs.forEach(e => {\r\n\t\t\t\t//If the tag have the attr \"name\" set an input handler\r\n\t\t\t\tlet name = e.match(/name=('|\")\\w*('|\")/g);\r\n\t\t\t\tif (name) {\r\n\t\t\t\t\tlet stateKey = name[0].match(/('|\")\\w*(?=\"|')/)[0].slice(1); //Get the name value to declare a state\r\n\t\t\t\t\tif (!stateKey)\r\n\t\t\t\t\t\tnew global.UndefinedInputNameError(e.split(/\\r\\n|\\n|\\r/)[0]);\r\n\t\t\t\t\tthis._handleInputs = true;\r\n\t\t\t\t\tthis._states.push(stateKey); //push to states\r\n\t\t\t\t}\r\n\t\t\t\telse\r\n\t\t\t\t\tnew global.ExpectedAttributeError(e.split(/\\r\\n|\\n|\\r/)[0], \"name\");\r\n\t\t\t});\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Handle Inputs Getter\r\n\t * \r\n\t * @public\r\n\t * @return {Array}\r\n\t */\r\n\tget handleInputs() {\r\n\t\treturn this._handleInputs;\r\n\t}\r\n\t/**\r\n\t * Conditionals Setter\r\n\t * \r\n\t * @public\r\n\t * @param {String} html\r\n\t */\r\n\tset conditionals(html){\r\n\t\t//Function to get tag condition\r\n\t\tconst getData = data => {\r\n\t\t\tconst tagRegExp = /\\s*tag=('|\")\\w*(-\\w*)*(\"|')/;\r\n\t\t\tvar tag = \"\";\r\n\t\t\tif (tagRegExp.test(data))\r\n\t\t\t\ttag = data.match(tagRegExp)[0].replace(/\\s*tag=/, \"\").replace(/('|\")/g, \"\");\r\n\r\n\t\t\tdata = data.replace(tagRegExp, \"\");\r\n\r\n\t\t\tlet dataCond = data.match(/cond=('|\").*('|\")/g);\r\n\r\n\t\t\treturn {\r\n\t\t\t\tcond: dataCond[0].replace(/cond=('|\")/, \"\").replace(/('|\")$/, \"\"),\r\n\t\t\t\ttag\r\n\t\t\t};\r\n\t\t};\r\n\t\tlet condTagsArray = html.split(\"<if \");\r\n\t\tlet condData = condTagsArray\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tlet {cond, tag:tagIf} = getData(e);\r\n\t\t\t\t\tlet tagElse = \"\";\r\n\t\t\t\t\tlet elseIf = [];\r\n\t\t\t\t\tlet contentIf;\r\n\t\t\t\t\tlet contentElse;\r\n\t\t\t\t\tif (e) {\r\n\t\t\t\t\t\tcontentIf = e.replace(/cond=.*>(\\r|\\n|\\r\\n)*/, \"\").split(/(\\r|\\n|\\r\\n)*\\t*<\\/if>/)[0];\r\n\t\t\t\t\t\tif(/<else-if/.test(e)) {\r\n\t\t\t\t\t\t\te.split(\"<else-if\").forEach((ev, i) => {\r\n\t\t\t\t\t\t\t\tconst {cond:elseIfCond, tag:elseIfTag} = getData(ev);\r\n\t\t\t\t\t\t\t\tif (i > 0)\r\n\t\t\t\t\t\t\t\t\telseIf.push({\r\n\t\t\t\t\t\t\t\t\t\tcond:elseIfCond,\r\n\t\t\t\t\t\t\t\t\t\ttag:elseIfTag,\r\n\t\t\t\t\t\t\t\t\t\tcontent:ev.replace(/cond=.*>(\\r|\\n|\\r\\n)*/, \"\").split(/(\\r|\\n|\\r\\n)*\\t*<\\/else-if>/)[0]\r\n\t\t\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t\t});\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t\tcontentElse = e.split(/<else>(\\n|\\r|\\r\\n)*/)[2];\r\n\t\t\t\t\t\tif (contentElse) {\t\r\n\t\t\t\t\t\t\tconst tagRegExp = /<else\\s*tag=('|\")\\w*(-\\w*)*(\"|')/;\r\n\r\n\t\t\t\t\t\t\tif (tagRegExp.test(e))\r\n\t\t\t\t\t\t\t\ttagElse = e.match(tagRegExp)[0].replace(/<else\\s*tag=/, \"\").replace(/('|\")/g, \"\");\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\tcontentElse = contentElse.split(/(\\r|\\n)*<\\/else>/)[0];\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t}\r\n\t\t\t\t\tlet matchState = false;\r\n\t\t\t\t\tlet condDefined;\r\n\t\t\t\t\tthis.states.forEach(e => {\r\n\r\n\t\t\t\t\t\tlet name = typeof e === \"object\" ? e.key : e;\r\n\t\t\t\t\t\tcondDefined = cond.match(/^\\w*/)[0];\r\n\t\t\t\t\t\tif(name === condDefined)\r\n\t\t\t\t\t\t\tmatchState = true;\r\n\t\t\t\t\t});\r\n\t\t\t\t\tif (!matchState)\r\n\t\t\t\t\t\tnew global.UndefinedStateError({type:\"conditional\", name:condDefined});\r\n\t\t\t\t\t\r\n\t\t\t\t\treturn {\r\n\t\t\t\t\t\tcond,\r\n\t\t\t\t\t\tif:contentIf,\r\n\t\t\t\t\t\telseIf,\r\n\t\t\t\t\t\ttagIf,\r\n\t\t\t\t\t\ttagElse,\r\n\t\t\t\t\t\telse:contentElse\r\n\t\t\t\t\t};\r\n\t\t\t\t}\r\n\t\t\t\treturn null;\r\n\t\t\t});\r\n\t\tthis._cond = condData.filter(e => {\r\n\t\t\treturn e;\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t * Conditionals Getter\r\n\t * \r\n\t * @public\r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\tget conditionals() {\r\n\t\treturn this._cond;\r\n\t}\r\n\t/**\r\n\t * Loops Setter\r\n\t * \r\n\t * @public\r\n\t * @param {String} html\r\n\t */\r\n\tset loops(html){\r\n\t\tlet loopsTagsArray = html.split(/<for /);\r\n\r\n\t\tlet loopsData = loopsTagsArray\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tlet valueAndState = e.match(/val=('|\").*(?=('|\")>)/)[0];\r\n\t\t\t\t\tlet valueToSetInTemplate = valueAndState.replace(/^val=('|\")/, \"\").match(/.*(?=\\sin)/)[0];\r\n\t\t\t\t\tlet stateToMap = valueAndState.replace(/^.*in /, \"\").replace(/('|\").*/, \"\");\r\n\t\t\t\t\tlet loopContent = e.replace(/val=.*>(\\n|\\r|\\r\\n)/, \"\").split(/<\\/for>/)[0];\r\n\t\t\t\t\t\r\n\t\t\t\t\tlet matchState = false;\r\n\t\t\t\t\tthis.states.forEach(e => {\r\n\r\n\t\t\t\t\t\tif(stateToMap === (typeof e === \"object\" ? e.key : e))\r\n\t\t\t\t\t\t\tmatchState = true;\r\n\t\t\t\t\t});\r\n\t\t\t\t\tif (!matchState)\r\n\t\t\t\t\t\tnew global.UndefinedStateError({type:\"loop\", name:stateToMap});\r\n\r\n\t\t\t\t\treturn {\r\n\t\t\t\t\t\tvalue:valueToSetInTemplate,\r\n\t\t\t\t\t\tstate:stateToMap,\r\n\t\t\t\t\t\tcontent:loopContent\r\n\t\t\t\t\t};\r\n\t\t\t\t}\r\n\t\t\t\treturn null;\r\n\t\t\t});\r\n\t\t\t\r\n\t\tthis._loops = loopsData.filter(e => {\r\n\t\t\treturn e;\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t * Loops Getter\r\n\t * \r\n\t * @public\r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\tget loops() {\r\n\t\treturn this._loops;\r\n\t}\r\n\r\n\t//------------------------------------------------------------------------------\r\n\t/*Internal Methods*/\r\n\t\r\n\t/**\r\n\t * JSON Prettify\r\n\t * \r\n\t * Convert an Object to String and add new lines and indents to code beauty\r\n\t * \r\n\t * @protected\r\n\t * @param {Object} json\r\n\t * \r\n\t * @return {String}\r\n\t */\r\n\t_JSONPrettify(json){\r\n\t\tlet jsonToString = JSON.stringify(json); //Convert to String\r\n\t\tlet quoteMatch = jsonToString.match(/\"\\w*\"(?=:)/g); //Get Object keys\r\n\t\tquoteMatch.forEach(e => {\r\n\t\t\t//Add indents and delete quotes in state keys\r\n\t\t\tjsonToString = jsonToString.replace(e, `\\t\\t\\t${e.slice(1, e.length-1)}`);\r\n\t\t});\r\n\t\t//Filter Globals\r\n\t\tthis._globals.forEach(glob => {\r\n\t\t\tjsonToString = jsonToString.replace(new RegExp(`('|\")${glob}('|\")`), glob);\r\n\t\t});\r\n\t\t//Return JSON Prettify\r\n\t\treturn jsonToString.replace(/\\{/g, \"{\\n\")\r\n\t\t\t.replace(/,(?=(\\t)*\\w*:)/g, \",\\n\")\r\n\t\t\t.replace(/}/g, \"\\n\\t\\t\\t}\")\r\n\t\t\t.replace(/\\t\\t}$/g, \"\\t}\")\r\n\t\t\t.replace(/:(?=\"|\\d|true|false|\\{|\\[)/g, \": \");\r\n\t}\r\n\t/**\r\n\t * Set Data From HTML\r\n\t * \r\n\t * Get All Data From HTML\r\n\t * \r\n\t * @private\r\n\t * @param {string} html\r\n\t */\r\n\t_setDataFromHTML(html){\r\n\r\n\t\tthis.components = html; //Get Components\r\n\t\thtml = html\r\n\t\t\t.split(\"<component \")\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tlet name = e.match(/name=('|\")\\w*/)[0].slice(6);\r\n\t\t\t\t\tlet splitted = e.split(\"</component>\");\r\n\t\t\t\t\tlet tag = splitted[0].split(/\\r\\n|\\n|\\r/)[0];\r\n\t\t\t\t\treturn tag.replace(/name=('|\")\\w*('|\")/, name).replace(\">\", \"/>\") + splitted[1];\r\n\t\t\t\t}\r\n\t\t\t\treturn e;\r\n\t\t\t})\r\n\t\t\t.join(\"<\");\r\n\t\t/*\r\n\t\t *\tGet all data that was be declared with \"{Name - Type}\" format.\r\n\t\t */\r\n\t\tlet _getBarsSyntax = html\r\n\t\t\t.split(\"{\")\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tlet match = e.match(/.*(?=\\})/g); //Get All that continue with \"}\" \r\n\t\t\t\t\tif(match) {\r\n\t\t\t\t\t\treturn match[0];\r\n\t\t\t\t\t}\r\n\t\t\t\t\tnew global.ExpectedTokenError(e);\r\n\t\t\t\t}\r\n\t\t\t}).filter(a => {\r\n\t\t\t\t//Filter the undefined values\r\n\t\t\t\treturn a;\r\n\t\t\t});\r\n\t\t\t//Handle Error\r\n\t\t_getBarsSyntax.forEach(e => {\r\n\t\t\tif (/^\\w*$/.test(e))\r\n\t\t\t\treturn;\r\n\t\t\t\r\n\t\t\tif (/\\w*\\s*-\\s*(state|prop|computed)/.test(e) === false)\r\n\t\t\t\tnew global.UndefinedTypeError(e);\r\n\t\t});\r\n\r\n\t\tif (_getBarsSyntax) {\r\n\t\t\tthis.statesInBars = _getBarsSyntax; //Get States\r\n\t\t\tthis.computed = _getBarsSyntax; //Get Computed Methods \r\n\t\t\tthis.propsInBars = _getBarsSyntax; //Get Props\r\n\t\t}\r\n\t\tthis.statesInBindAttributes = html;\r\n\r\n\t\tthis.propsInBindAttributes = html;\r\n\r\n\t\tthis.inputs = html; //Get Inputs, Textarea and Options\r\n\r\n\t\tthis.conditionals = html; //Get conditionals Data\r\n\r\n\t\tthis.loops = html; //Get Loops Data\r\n\r\n\t\tthis.methods = html; //Call Method to Get Data from HTML String\r\n\t}\r\n\t/**\r\n\t * Filter Javascript\r\n\t *\r\n\t * Get an Object's Array with JS Data and return with Vue or React Syntax\r\n\t *\r\n\t * @protected\r\n\t * @param {Array} JsArray \r\n\t * @param {String} type \r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\t_filterJS(JsArray, type){\r\n\t\t//Watch if have Content\r\n\t\tif (JsArray.length > 0) {\r\n\t\t\tlet stateReplace; //Empty var to set state declaration\r\n\t\t\tlet propReplace; //Empty var to set props declaration\r\n\t\t\tlet tab; //Empty var to set indent to code beauty\r\n\t\t\tswitch (type) {\r\n\t\t\tcase \"r\":\r\n\t\t\t\tstateReplace = \"this.state.\";\r\n\t\t\t\tpropReplace = \"this.props.\";\r\n\t\t\t\ttab = \"\";\r\n\t\t\t\tbreak;\r\n\t\t\tcase \"a\":\r\n\t\t\t\tstateReplace = \"this.\";\r\n\t\t\t\tpropReplace = \"this.\";\r\n\t\t\t\ttab = \"\";\r\n\t\t\t\tbreak;\r\n\t\t\tcase \"v\":\r\n\t\t\t\tstateReplace = \"this.\";\r\n\t\t\t\tpropReplace = \"this.\";\r\n\t\t\t\ttab = \"\\t\";\r\n\t\t\t\tbreak;\r\n\t\t\tdefault: throw new Error(\"The type param must be 'v', 'r' or 'a'\");\r\n\t\t\t}\r\n\t\t\t//Map JS Content\r\n\t\t\tlet JsonArray = JsArray.map(({content, name}) => {\r\n\t\t\t\tlet params = content.match(/\\(.*\\)|\\w*/)[0];\r\n\t\t\t\tcontent = content.replace(/.*(?={)/, \"\");\r\n\r\n\t\t\t\tvar data = content; //Asign content to var data\r\n\t\t\t\t/*\r\n\t\t\t\t\tMap exist state to asign the state declaration to data\r\n\r\n\t\t\t\t\tExample: If var 'name' is a state \r\n\t\t\t\t\tOn React was be: 'this.state.name' \r\n\t\t\t\t\tand on Vue was be: 'this.name'\r\n\t\t\t\t*/\r\n\t\t\t\tthis.states.forEach(state => {\r\n\t\t\t\t\t/*If state is an Object this will be like {key:'foo', value:'var'}\r\n\t\t\t\t\t\t\"key\" is the state name.\r\n\r\n\t\t\t\t\t\tIf state is not an Object this was be like 'foo' \r\n\t\t\t\t\t\tthis is the state name without value\r\n\t\t\t\t\t*/\r\n\t\t\t\t\tlet stateName = typeof state === \"object\" ? state.key : state;\r\n\t\t\t\t\tdata = this._expressionsFilter(data, stateName, stateReplace);\r\n\t\t\t\t});\r\n\t\t\t\tthis.props.forEach(prop => {\r\n\t\t\t\t\tdata = this._expressionsFilter(data, prop, propReplace);\r\n\t\t\t\t});\r\n\r\n\t\t\t\tif (type === \"r\")\r\n\t\t\t\t\tdata = this._setStateFilter(data);\r\n\r\n\t\t\t\treturn {\r\n\t\t\t\t\tname,\r\n\t\t\t\t\tcontent:params + data\r\n\t\t\t\t\t\t.split(\"\\n\")\r\n\t\t\t\t\t\t.map((es, i) => {\r\n\t\t\t\t\t\t\tif (es && i > 0 && es != /^}(\\s|\\t)*$/) return `${tab+es}\\n`;\r\n\t\t\t\t\t\t\telse if (es == /^}(\\s|\\t)*$/) return `${tab}}`;\r\n\t\t\t\t\t\t\telse return `${es }\\n`;\r\n\t\t\t\t\t\t})\r\n\t\t\t\t\t\t.join(\"\")\r\n\t\t\t\t\t\t.replace(/(\\n|\\r)$/g, \"\")\r\n\t\t\t\t};\r\n\t\t\t});\r\n\t\t\treturn JsonArray;\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Set State Filter\r\n\t * \r\n\t * Filter the state value assignament and change: 'this.state.name = \"Value\";'\r\n\t * with: 'this.setState({name: \"Value\"});'\r\n\t * \r\n\t * Executes only when translate React\r\n\t * \r\n\t * @private\r\n\t * @param {String} data \r\n\t * \r\n\t * @return {String}\r\n\t */\r\n\t_setStateFilter(data) {\r\n\t\tconst statesToChange = data.match(/this\\.state\\.\\w*\\s*=.*/g);\r\n\r\n\t\tif(statesToChange === null)\r\n\t\t\treturn data;\r\n\t\t\r\n\t\tstatesToChange.forEach(states => {\r\n\t\t\tconst value = states.match(/=.*$/)[0].replace(/=\\s*/, \"\").replace(/;/, \"\");\r\n\t\t\tconst state = states.replace(/this\\.state\\./, \"\").replace(/\\s*=.*/, \"\");\r\n\t\r\n\t\t\tconst setStateString = `this.setState({${state}: ${value}});`;\r\n\t\t\tdata = data.replace(states, setStateString);\r\n\t\t});\r\n\r\n\t\treturn data;\r\n\t}\r\n\r\n\t/**\r\n\t * Expressions Filter\r\n\t * \r\n\t * Filter States and Props vars with corresponding caller\r\n\t * \r\n\t * @private\r\n\t * @param {String} html \r\n\t * @param {String} name \r\n\t * @param {String} replace \r\n\t * \r\n\t * @return {String}\r\n\t */\r\n\t_expressionsFilter(html, name, replace) {\r\n\t\tvar filtered = html\r\n\t\t\t.replace(new RegExp(`\\\\t(${replace+name}|${name})(?!\\\\(|\\\\s*\\\\(|\\\\.)`, \"g\"), `\\t${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\(|\\\\(\\\\s*)(${replace+name}|${name})`, \"g\"), `(${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\[|\\\\[\\\\s*)(${replace+name}|${name})`, \"g\"), `[${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\$\\\\{|\\\\$\\\\{\\\\s*)(${replace+name}|${name})`, \"g\"), `\\${${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(=|=\\\\s*)(${replace+name}|${name})`, \"g\"), `= ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(>|>\\\\s*)(${replace+name}|${name})`, \"g\"), `> ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(<|<\\\\s*)(${replace+name}|${name})`, \"g\"), `< ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(~|~\\\\s*)(${replace+name}|${name})`, \"g\"), `~${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\!|\\\\!\\\\s*)(${replace+name}|${name})`, \"g\"), `\\\\! ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(:|:\\\\s*)(${replace+name}|${name})`, \"g\"), `: ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\?|\\\\?\\\\s*)(${replace+name}|${name})(?=.*:)`, \"g\"), `? ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\+|\\\\+\\\\s*)(${replace+name}|${name})`, \"g\"), `+ ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(-|-\\\\s*)(${replace+name}|${name})`, \"g\"), `- ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\*|\\\\*\\\\s*)(${replace+name}|${name})`, \"g\"), `* ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\/|\\\\/\\\\s*)(${replace+name}|${name})`, \"g\"), `/ ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\%|\\\\%\\\\s*)(${replace+name}|${name})`, \"g\"), `% ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(return|return\\\\s*)(${replace+name}|${name})`, \"g\"), `return ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(typeof|typeof\\\\s*)(${replace+name}|${name})`, \"g\"), `typeof ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\&|\\\\&\\\\s*)(${replace+name}|${name})(!=.*(\\\\\\`|\"|'))`, \"g\"), `& ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\||\\\\|\\\\s*)(${replace+name}|${name})(!=.*(\\\\\\`|\"|'))`, \"g\"), `| ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(in|in\\\\s*)(${replace+name}|${name})(!=.*(\\\\\\`|\"|'))`, \"g\"), `in ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(case|case\\\\s*)(${replace+name}|${name})(!=.*(\\\\\\`|\"|'))`, \"g\"), `case ${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\t|\\\\s\\\\s\\\\s\\\\s|\\\\s\\\\s)(${replace+name}|${name})(?=\\\\.)`, \"g\"), `\\t${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\t|\\\\s\\\\s\\\\s\\\\s|\\\\s\\\\s)(${replace+name}|${name})(?=\\\\+\\\\+)`, \"g\"), `\\t${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\t|\\\\s\\\\s\\\\s\\\\s|\\\\s\\\\s)(${replace+name}|${name})(?=\\\\s*=)`, \"g\"), `\\t${replace}${name}`)\r\n\t\t\t.replace(new RegExp(`(\\\\t|\\\\s\\\\s\\\\s\\\\s|\\\\s\\\\s)(${replace+name}|${name})(?=--)`, \"g\"), `\\t${replace}${name}`);\r\n\r\n\t\t//To Replace Filtered No States\r\n\t\tconst toUnfilter = new RegExp(`(${replace+name}|${name})\\\\w*`).exec(filtered);\r\n\r\n\t\tif (toUnfilter) {\r\n\t\t\tvar isState = false;\r\n\t\t\tfor(let i = 0; i < this.states.length; i++) {\r\n\t\t\t\tconst state = typeof this.states[i] === \"object\" ? this.states[i].key : this.states[i];\r\n\r\n\t\t\t\tif(toUnfilter[0] === `${replace}${state}`) {\r\n\t\t\t\t\tisState = true;\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t\tif (isState)\r\n\t\t\t\treturn filtered;\r\n\t\t\t\r\n\t\t\treturn filtered.replace(toUnfilter[0], toUnfilter[0].replace(replace, \"\"));\r\n\t\t}\r\n\t\treturn filtered;\r\n\t}\r\n\t/**\r\n\t * Globals Getter\r\n\t * \r\n\t * Getter that return the global list\r\n\t * \r\n\t * @private\r\n\t * @return {Array}\r\n\t */\r\n\tget _globals () {\r\n\t\tif (!global.defineGlobals)\r\n\t\t\treturn Const_Globals__WEBPACK_IMPORTED_MODULE_1__;\r\n\t\t\r\n\t\tconst {defineGlobals} = __webpack_require__(\"./src/core/StateManagement sync recursive ^.*$\")(`${global.defineGlobals}`);\r\n\r\n\t\treturn Const_Globals__WEBPACK_IMPORTED_MODULE_1__.concat(defineGlobals !== undefined ? defineGlobals() : []);\r\n\t}\r\n\t/**\r\n\t * Define Type From String\r\n\t * \r\n\t * Get String Value and Parse that\r\n\t * \r\n\t * @param {string} string String Value\r\n\t * \r\n\t * @return {any}\r\n\t */\r\n\t_defineTypeFromString(string){\r\n\t\tlet _isString = /^(\"|').*('|\")$/.test(string);\r\n\t\tlet _isDigit = /^\\d*$/.test(string);\r\n\t\tlet _isBoolean = /(true|false)$/g.test(string);\r\n\t\tlet _isArray = /^\\[.*\\]$/.test(string);\r\n\t\tlet _isObject = /^\\{(\\r|\\n)*((\\t*).*(\\r|\\n*))*\\}/g.test(string);\r\n\t\tlet _isNull = /null$/g.test(string);\r\n\t\tlet _isUndefined = /undefined$/g.test(string);\r\n\t\tlet _isNaN = /NaN$/g.test(string);\r\n\t\tlet _isInfinity = /Infinity$/g.test(string);\r\n\r\n\t\tif (_isDigit)\r\n\t\t\treturn parseFloat(string);\r\n\r\n\t\tif (_isNull)\r\n\t\t\treturn null;\r\n\r\n\t\tif (_isNaN)\r\n\t\t\treturn NaN;\r\n\r\n\t\tif (_isInfinity)\r\n\t\t\treturn Infinity;\r\n\r\n\t\tif (_isUndefined)\r\n\t\t\treturn undefined;\r\n\r\n\t\tif (_isBoolean)\r\n\t\t\treturn this._BooleanParser(string);\r\n\t\t\r\n\t\tif(_isArray)\r\n\t\t\treturn this._ArrayAndObjectParser(_isArray[0]);\r\n\t\t\r\n\t\tif (_isObject)\r\n\t\t\treturn this._ArrayAndObjectParser(_isObject[0]);\r\n\t\t\r\n\t\tif(_isString)\r\n\t\t\treturn string.replace(/(\"|')/g, \"\"); //String Value\r\n\t\t\r\n\t\t/*is Var*/\r\n\t\treturn {var:string};\r\n\t}\r\n\t/**\r\n\t * Boolean Parser\r\n\t * \r\n\t * Parse Boolean String\r\n\t * \r\n\t * @param {string} string String Value\r\n\t * \r\n\t * @return {Boolean}\r\n\t */\r\n\t_BooleanParser(string){\r\n\t\tif (string === \"true\")\r\n\t\t\treturn true;\r\n\t\t\r\n\t\treturn false;\r\n\t}\r\n\t/**\r\n\t * Array And Object Parser\r\n\t * \r\n\t * Parse Array, Object and Define Type\r\n\t * \r\n\t * @param {string} string String Value\r\n\t * \r\n\t * @return {Array}\r\n\t */\r\n\t_ArrayAndObjectParser(string){\r\n\t\tlet filtered = string;\r\n\t\t//If is Object, parse the content\r\n\t\tif(string.startsWith(\"{\")){\r\n\t\t\tfiltered = filtered\r\n\t\t\t\t.replace(/:/g, \"\\\":\")\r\n\t\t\t\t.replace(/(\\t|\\s\\s|\\s\\s\\s\\s)(?=.*:)/g, \"\\t\\\"\")\r\n\t\t\t\t.replace(/(\\t|\\s\\s|\\s\\s\\s\\s)\"(?=\\t\")/g, \"\\t\")\r\n\t\t\t\t.replace(/,(?=\\n(\\t)*})/g, \"\")\r\n\t\t\t\t.replace(/\"\"/g, \"\\\"\");\r\n\t\t}\r\n\t\treturn JSON.parse(filtered);\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (StateManagement);\r\n\n\n//# sourceURL=webpack:///./src/core/StateManagement/StateManagement.js?");

/***/ }),

/***/ "./src/core/StateManagement/VueStateManagement.js":
/*!********************************************************!*\
  !*** ./src/core/StateManagement/VueStateManagement.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _StateManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StateManagement */ \"./src/core/StateManagement/StateManagement.js\");\n\r\n\r\n/**\r\n * Vue State Management\r\n *\r\n * Class to handle the Vue Data\r\n *\r\n * @class\r\n * @extends StateManagement\r\n *\r\n */\r\nclass VueStateManagement extends _StateManagement__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n\t/**\r\n\t * Component Data\r\n\t * \r\n\t * Return the filtered component data\r\n\t *\r\n\t * @public\r\n\t * @param {string} componentName\r\n\t * @return {string}\r\n\t *\r\n\t */\r\n\tcomponentData(componentName){\r\n\t\treturn this._mapComponentData(componentName);\r\n\t}\r\n\r\n\t/**\r\n\t * Filter HTML\r\n\t *\r\n\t * Filter and return the html with the Vue Syntax\r\n\t *\r\n\t * @public\r\n\t * @param {string} html\r\n\t * @return {string}\r\n\t *\r\n\t */\r\n\tfilterHTML(html){\r\n\t\t//Quotes Replace to double quotes\r\n\t\tlet replacedQuotes = html.replace(/(')/g, \"\\\"\");\r\n\r\n\t\t//Parse open braces\r\n\t\tlet addOpenBraces = replacedQuotes\r\n\t\t\t.split(/\\{(?=\\w*)/g)\r\n\t\t\t.map(content => {\r\n\t\t\t\tif (content) return content.replace(/(\\s*-.*\\}|\\})/g, \"}}\");\r\n\t\t\t})\r\n\t\t\t.join(\"{{\");\r\n\t\t\r\n\t\t//Parsing Event Tags \"on\"\r\n\t\tlet addEventToVue = addOpenBraces\r\n\t\t\t.replace(/on(?=\\w*=\"\\w*\\(.*\\)\")/g, \"@\");\r\n\r\n\t\t/*----------Parsing Inputs Tags----------*/\r\n\t\t\r\n\t\t/*\r\n\t\t* If have the attr \"name\" this is replace whit the v-model directive\r\n\t\t*/\r\n\r\n\t\tlet inputTag = addEventToVue\r\n\t\t\t.split(/<input/g)\r\n\t\t\t.map((content, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tlet nameTag = content.match(/name=(\"|')\\w*(\"|')/);\r\n\t\t\t\t\t\r\n\t\t\t\t\tlet vModelDirective = nameTag ? `v-model='${nameTag[0].match(/\"\\w*(?=\")/)[0].slice(1)}'`: \"\";\r\n\t\t\t\t\t\r\n\t\t\t\t\treturn content.replace(\" \", ` ${vModelDirective}`);\r\n\t\t\t\t} \r\n\t\t\t\treturn content;\r\n\t\t\t})\r\n\t\t\t.join(\"<input\");\r\n\r\n\t\tlet textareaTag = inputTag\r\n\t\t\t.split(/<textarea/g)\r\n\t\t\t.map((content, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tlet nameTag = content.match(/name=(\"|')\\w*(\"|')/);\r\n\t\t\t\t\t\r\n\t\t\t\t\tlet vModelDirective = nameTag ? `v-model='${nameTag[0].match(/\"\\w*(?=\")/)[0].slice(1)}'`: \"\";\r\n\t\t\t\t\t\r\n\t\t\t\t\treturn content.replace(\" \", ` ${vModelDirective}`);\r\n\t\t\t\t} \r\n\t\t\t\treturn content;\r\n\t\t\t})\r\n\t\t\t.join(\"<textarea\");\r\n\r\n\t\tlet selectTag = textareaTag\r\n\t\t\t.split(/<select/g)\r\n\t\t\t.map((content, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tlet nameTag = content.match(/name=(\"|')\\w*(\"|')/);\r\n\t\t\t\t\t\r\n\t\t\t\t\tlet vModelDirective = nameTag ? `v-model='${nameTag[0].match(/\"\\w*(?=\")/)[0].slice(1)}'`: \"\";\r\n\t\t\t\t\t\r\n\t\t\t\t\treturn content.replace(\" \", ` ${vModelDirective}`);\r\n\t\t\t\t} \r\n\t\t\t\treturn content;\r\n\t\t\t})\r\n\t\t\t.join(\"<select\");\r\n\r\n\t\tconst condParsed = selectTag\r\n\t\t\t.split(/<(?=if\\s*cond=)/)\r\n\t\t\t.map((cond, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tconst condTagName = cond.match(/^\\w*(-\\w*)*/)[0];\r\n\t\t\t\t\tconst tagRegExp = /\\s*tag=\"\\w*(-\\w*)*\"/;\r\n\t\t\t\t\tvar tagName = \"template\";\r\n\r\n\t\t\t\t\tif (tagRegExp.test(cond)) \r\n\t\t\t\t\t\ttagName = cond.match(tagRegExp)[0]\r\n\t\t\t\t\t\t\t.replace(/\\s*tag=/, \"\")\r\n\t\t\t\t\t\t\t.replace(/'|\"/g, \"\");\r\n\r\n\t\t\t\t\treturn cond.replace(new RegExp(`${condTagName} cond=\"(?=.*>)`, \"g\"), `${tagName} v-${condTagName}='`)\r\n\t\t\t\t\t\t.replace(`</${condTagName}>`, `</${tagName}>`)\r\n\t\t\t\t\t\t.replace(`<${condTagName}>`, `<${tagName}>`)\r\n\t\t\t\t\t\t.replace(tagRegExp, \"\")\r\n\t\t\t\t\t\t.replace(/\"\\s*\"/, \"\\\"'\");\r\n\t\t\t\t}\r\n\t\t\t\treturn cond;\r\n\t\t\t})\r\n\t\t\t.join(\"<\");\r\n\r\n\t\t//Parsing the bind attr with the v-bind directive\r\n\t\tlet bindDirectivesReplaced = condParsed\r\n\t\t\t.split(/:(?=\\w*=)/)\r\n\t\t\t.map((content, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tconst bindSimpleOrWithTypeRegExp = /^\\w*=\"(\\w*(\\s*-\\s*\\w*)*)\"/;\r\n\t\t\t\t\tconst bindWithConditional = /^\\w*=\"\\s*\\w*\\s*(\\?).*('|\"|}|])\\s*\"/;\r\n\r\n\t\t\t\t\tif (bindSimpleOrWithTypeRegExp.test(content)) {\r\n\t\t\t\t\t\tconst bindAttr = content.match(bindSimpleOrWithTypeRegExp)[0];\r\n\r\n\t\t\t\t\t\tif (/prop/.test(bindAttr) || /state/.test(bindAttr))\r\n\t\t\t\t\t\t\treturn content.replace(bindAttr, bindAttr.replace(/\\s*-.*$/, \"\\\"\"));\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\treturn content;\r\n\t\t\t\t\t}\r\n\t\t\t\t\telse if (bindWithConditional.test(content)) {\r\n\t\t\t\t\t\tconst expression = content.match(bindWithConditional)[0];\r\n\t\t\t\t\t\tconst replacedQuotes = expression\r\n\t\t\t\t\t\t\t.replace(/\"/g, \"'\")\r\n\t\t\t\t\t\t\t.replace(\"'\", \"\\\"\")\r\n\t\t\t\t\t\t\t.replace(/'$/, \"\\\"\");\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\treturn content.replace(expression, replacedQuotes);\r\n\t\t\t\t\t}\r\n\t\t\t\t}\r\n\r\n\t\t\t\t//return content of index 0\r\n\t\t\t\treturn content;\r\n\t\t\t})\r\n\t\t\t.join(\":\");\r\n\t\t\t\r\n\t\t//Parsing for tags\r\n\t\tlet loopParse = bindDirectivesReplaced\r\n\t\t\t.split(/<(?=for val=)/)\r\n\t\t\t.map((e, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tconst tagRegExp = /\\s*tag=('|\")\\w*(-\\w*)*('|\")/;\r\n\t\t\t\t\tvar tagName = \"template\";\r\n\t\t\t\t\tif (tagRegExp.test(e)) \r\n\t\t\t\t\t\ttagName = e.match(tagRegExp)[0]\r\n\t\t\t\t\t\t\t.replace(/\\s*tag=/, \"\")\r\n\t\t\t\t\t\t\t.replace(/'|\"/g, \"\");\r\n\r\n\t\t\t\t\treturn e.replace(/for val=(?=.*>)/g, `${tagName} v-for=`)\r\n\t\t\t\t\t\t.replace(/\\/for(?=>)/g, `/${tagName}`)\r\n\t\t\t\t\t\t.replace(tagRegExp, \"\");\r\n\t\t\t\t}\r\n\t\t\t\treturn e;\r\n\t\t\t})\r\n\t\t\t.join(\"<\");\r\n\t\t\t\r\n\t\t\t\r\n\t\tlet componentParsed = loopParse\r\n\t\t\t.split(\"<component \")\r\n\t\t\t.map((content, i) => {\r\n\t\t\t\tif (i > 0) {\r\n\t\t\t\t\tlet componentName = content.match(/name=('|\")\\w*/)[0].slice(6);\r\n\t\t\t\t\tlet splitted = content.split(\"</component>\");\r\n\t\t\t\t\tlet componentTag = splitted[0].split(/\\r\\n|\\n|\\r/)[0];\r\n\r\n\t\t\t\t\treturn componentTag\r\n\t\t\t\t\t\t/*Deleted component name attr*/\r\n\t\t\t\t\t\t.replace(/component-name=('|\")\\w*('|\")/, componentName)\r\n\r\n\t\t\t\t\t\t/*If not have add enclosing tag*/\r\n\t\t\t\t\t\t.replace(\">\", \"/>\") + splitted[1];\r\n\t\t\t\t} \r\n\t\t\t\treturn content;\r\n\t\t\t})\r\n\t\t\t.join(\"<\");\r\n\r\n\t\treturn componentParsed;\r\n\t}\r\n\r\n\t/**\r\n\t * Map Component Data\r\n\t *\r\n\t * @private\r\n\t * @param {string} componentName\r\n\t * @return {string}\r\n\t *\r\n\t */\r\n\t_mapComponentData(componentName){\r\n\t\tconst haveComponents = this.components.length > 0;\r\n\t\tconst haveProps = this.props.length > 0;\r\n\t\tconst haveStates = this.states.length > 0;\r\n\t\tconst haveLifecycles = this.lifecycle.length > 0;\r\n\t\tconst haveComputed = this.computed.length > 0;\r\n\t\tconst haveMethods = this.methods.length > 0;\r\n\t\tconst haveWatchers = this.watchers.length > 0;\r\n\r\n\t\t//Strings to data content\r\n\t\tlet importComponents = \"\";\r\n\t\tlet components = \"\";\r\n\t\tlet props = \"\";\r\n\t\tlet states = \"\";\r\n\t\tlet lifecycle = \"\";\r\n\t\tlet computed = \"\";\r\n\t\tlet methods = \"\";\r\n\t\tlet watchers = \"\";\r\n\r\n\t\t//Components\r\n\t\tif (haveComponents) {\r\n\t\t\tconst comma = \r\n\t\t\t\thaveProps ||\r\n\t\t\t\thaveStates ||\r\n\t\t\t\thaveLifecycles ||\r\n\t\t\t\thaveComputed ||\r\n\t\t\t\thaveMethods ||\r\n\t\t\t\thaveWatchers ? \",\" : \"\";\r\n\t\t\t\t\r\n\t\t\tcomponents = `\\n\\tcomponents:{\\n\\t\\t${this.components.join(\",\\n\\t\\t\")}\\n\\t}${comma}`;\r\n\r\n\t\t\timportComponents = this.components.map(e => `import ${e} from \"~/components/${e}\"\\n`).join(\"\");\r\n\t\t}\r\n\r\n\t\t//Props\r\n\t\tif (haveProps) {\r\n\t\t\tconst comma = \r\n\t\t\t\thaveStates ||\r\n\t\t\t\thaveLifecycles ||\r\n\t\t\t\thaveComputed ||\r\n\t\t\t\thaveMethods ||\r\n\t\t\t\thaveWatchers ? \",\" : \"\";\r\n\r\n\t\t\tlet lastIndex = this.props.length - 1;\r\n\t\t\tlet mappedProps = this.props.map((e, i) => {\r\n\r\n\t\t\t\tlet comma = i === lastIndex ? \"\" : \",\";\r\n\t\t\t\treturn `\\n\\t\\t${e}:{\\n\\t\\t\\ttype:String,\\n\\t\\t\\trequired:true,\\n\\t\\t\\tdefault:\"Hola Mundo\"\\n\\t\\t}${comma}`;\r\n\t\t\t});\r\n\t\t\tprops = `\\n\\tprops:{${mappedProps.join(\"\")}\\n\\t}${comma}`;\r\n\t\t}\r\n\t\t//Map States\r\n\t\tif (haveStates) {\r\n\t\t\tconst comma = \r\n\t\t\t\thaveLifecycles ||\r\n\t\t\t\thaveComputed ||\r\n\t\t\t\thaveMethods ||\r\n\t\t\t\thaveWatchers ? \",\" : \"\";\r\n\r\n\t\t\tvar mappedStates = {};\r\n\r\n\t\t\tthis.states.forEach(state => {\r\n\t\t\t\tlet isObject = typeof state === \"object\";\r\n\t\t\t\tlet stateName = isObject ? state.key : state.replace(/(\"|')/g, \"\");\r\n\r\n\t\t\t\tmappedStates[stateName] = isObject ? state.value : \"\";\r\n\t\t\t});\r\n\t\t\tstates = `\\n\\tdata(){\\n\\t\\treturn ${this._JSONPrettify(mappedStates)}\\n\\t}${comma}`;\r\n\t\t}\r\n\r\n\t\t//Lifecycles\r\n\t\tif(haveLifecycles) {\r\n\t\t\tconst comma = \r\n\t\t\t\thaveComputed ||\r\n\t\t\t\thaveMethods ||\r\n\t\t\t\thaveWatchers ? \",\" : \"\";\r\n\r\n\t\t\tconst mappedLifecycles = this.lifecycle.map(({name, content}) => {\r\n\t\t\t\tcontent = content\r\n\t\t\t\t\t.split(/\\n|\\r\\n|\\r/)\r\n\t\t\t\t\t.map(e => e.replace(\"\\t\", \"\"))\r\n\t\t\t\t\t.join(\"\\r\\n\");\r\n\r\n\t\t\t\treturn `${name}${content}`;\r\n\t\t\t});\r\n\r\n\t\t\tlifecycle = `\\n\\t${mappedLifecycles.join(\",\\n\\t\")}${comma}`;\r\n\t\t}\r\n\r\n\t\t//Computed Properties\r\n\t\tif (haveComputed) {\r\n\t\t\tconst comma = \r\n\t\t\t\thaveMethods ||\r\n\t\t\t\thaveWatchers ? \",\" : \"\";\r\n\r\n\t\t\tlet mappedComputed = this.computed.map(({name, content}) => `${name}${content}`);\r\n\r\n\t\t\tcomputed = `\\n\\tcomputed:{\\n\\t\\t${mappedComputed.join(\",\\n\\t\\t\")}\\n\\t}${comma}`;\r\n\t\t}\r\n\r\n\t\t//Methods\r\n\t\tif (haveMethods){\r\n\t\t\tconst comma = haveWatchers ? \",\" : \"\";\r\n\r\n\t\t\tlet mappedMethods = this.methods.map(({content, name}) => `${name}${content}`);\r\n\r\n\t\t\tmethods = `\\n\\tmethods:{\\n\\t\\t${mappedMethods.join(\",\\n\\t\\t\")}\\n\\t}${comma}`;\r\n\t\t}\r\n\r\n\t\t//Watchers\r\n\t\tif (haveWatchers) {\r\n\t\t\tlet mappedWatchers = this._filterJS(this.watchers, \"v\").map(({content, name}) => `${name}${content}`);\r\n\r\n\t\t\twatchers = `\\n\\twatch:{\\n\\t\\t${mappedWatchers.join(\",\\n\\t\\t\")}\\n\\t}`;\r\n\t\t}\r\n\r\n\t\tconst haveData = \r\n\t\t\thaveComponents ||\r\n\t\t\thaveProps ||\r\n\t\t\thaveStates ||\r\n\t\t\thaveLifecycles ||\r\n\t\t\thaveComputed ||\r\n\t\t\thaveMethods ||\r\n\t\t\thaveWatchers;\r\n\r\n\t\tlet mainTemplate = \t`${importComponents}export default {\\n\\tname:${componentName || \"MyComponent\"}${haveData ? \",\" : \"\"}${components}${props}${states}${lifecycle}${computed}${methods}${watchers}\\n}`;\r\n\t\t\r\n\t\tif (haveData)\r\n\t\t\treturn `<script>\\n${mainTemplate}\\n</script>`;\r\n\t\t\r\n\t\treturn \"\";\r\n\t}\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (VueStateManagement);\r\n\n\n//# sourceURL=webpack:///./src/core/StateManagement/VueStateManagement.js?");

/***/ }),

/***/ "./src/core/StateManagement/index.js":
/*!*******************************************!*\
  !*** ./src/core/StateManagement/index.js ***!
  \*******************************************/
/*! exports provided: ReactStateManagement, VueStateManagement, AngularStateManagement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ReactStateManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReactStateManagement */ \"./src/core/StateManagement/ReactStateManagement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ReactStateManagement\", function() { return _ReactStateManagement__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _VueStateManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueStateManagement */ \"./src/core/StateManagement/VueStateManagement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"VueStateManagement\", function() { return _VueStateManagement__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _AngularStateManagement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AngularStateManagement */ \"./src/core/StateManagement/AngularStateManagement.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"AngularStateManagement\", function() { return _AngularStateManagement__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/core/StateManagement/index.js?");

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: VueCompiler, AngularCompiler, ReactCompiler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VueCompiler\", function() { return VueCompiler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"AngularCompiler\", function() { return AngularCompiler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ReactCompiler\", function() { return ReactCompiler; });\n/* harmony import */ var Core_StateManagement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Core/StateManagement */ \"./src/core/StateManagement/index.js\");\n/* harmony import */ var Core_JavascriptManagement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Core/JavascriptManagement */ \"./src/core/JavascriptManagement/index.js\");\n\r\n\r\n\r\n/**\r\n * React Compiler\r\n * \r\n * Function that take the HTML string and translate to React\r\n * \r\n * @param {string} name Component Name\r\n * @param {string} html HTML String\r\n * @param {string} css CSS String\r\n *\r\n * @return {string}\r\n */\r\nconst ReactCompiler = (name, html, css) => {\r\n\r\n\tlet RStateManagement = new Core_StateManagement__WEBPACK_IMPORTED_MODULE_0__[\"ReactStateManagement\"]();\r\n\r\n\tlet parse = new Core_JavascriptManagement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); //JS Parser\r\n\r\n\t//Get all data from HTML string\r\n\tRStateManagement.statesFromJS = parse.states;\r\n\r\n\t//Parse Lifecycles\r\n\tRStateManagement.setLifecycle(parse.lifecycles, \"r\");\r\n\r\n\tRStateManagement.getHTMLString(html);\t\r\n\r\n\t//Get Methods from JS and set to Data\r\n\tRStateManagement.getJsData(parse.functions, \"r\");\r\n\r\n\tRStateManagement.watchers = parse.watchers;\r\n\r\n\tRStateManagement.setVarsToStatesContent(parse.vars);\r\n\r\n\t//Add new lines and idents to code beauty\r\n\tlet pretty = RStateManagement\r\n\t\t.filterHTML(html)\r\n\t\t.split(/\\n/)\r\n\t\t.map(e => {\r\n\t\t\tif (e) return `\\t\\t\\t${e}\\n`;\r\n\t\t})\r\n\t\t.join(\"\");\r\n\t\t\r\n\t//Template to Set All Data\r\n\tlet template =\r\n`import React, {Component} from \"react\"\r\n${RStateManagement.importComponents}\r\nclass ${name || \"MyComponent\"} extends Component {\r\n\t${RStateManagement.componentData}\r\n\trender(){\r\n\t\t${RStateManagement.prerenderLogical}\r\n\t\treturn(\r\n${pretty}\\t\\t)\r\n\t}\r\n}\r\nexport default ${name || \"MyComponent\"};\r\n`;\r\n\treturn {\r\n\t\tmain:template,\r\n\t\tcomponents:RStateManagement.componentsContent\r\n\t};\r\n};\r\n\r\n/**\r\n * Vue Compiler\r\n * \r\n * Function that take the HTML string and translate to Vue\r\n *\r\n * @param {String} name Component Name\r\n * @param {string} html HTML String \r\n * @param {string} css CSS String\r\n * \r\n * @return {string}\r\n */\r\nconst VueCompiler = (name, html, css) => {\r\n\r\n\tlet VStateManagement = new Core_StateManagement__WEBPACK_IMPORTED_MODULE_0__[\"VueStateManagement\"]();\r\n\r\n\t\r\n\tlet parse = new Core_JavascriptManagement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); //JS Parser\r\n\r\n\t// Set Styles\r\n\tlet style = css !== \"\" ? `<style scoped>\\n${css}</style>` : \"\";\r\n\r\n\t//Get states declarations from JS and set to Data\r\n\tVStateManagement.statesFromJS = parse.states;\r\n\r\n\t//Parse Lifecycles\r\n\tVStateManagement.setLifecycle(parse.lifecycles, \"v\");\r\n\r\n\t//Get all data from HTML string\r\n\tVStateManagement.getHTMLString(html);\r\n\r\n\t//Get Methods from JS and set to Data\r\n\tVStateManagement.getJsData(parse.functions, \"v\");\r\n\t\r\n\tVStateManagement.watchers = parse.watchers;\r\n\t\r\n\tVStateManagement.setVarsToStatesContent(parse.vars);\r\n\t\r\n\t//Add new lines and idents to code beauty\r\n\tlet pretty = VStateManagement\r\n\t\t.filterHTML(html)\r\n\t\t.split(/\\n/)\r\n\t\t.map(e => {\r\n\t\t\tif (e) return `\\t${e}\\n`;\r\n\t\t})\r\n\t\t.join(\"\");\r\n\t\r\n\t//Template to Set All Data\r\n\tlet component = \r\n`<template>\\n${pretty}</template>\r\n${VStateManagement.componentData(name)}\r\n${style}`;\r\n\r\n\treturn {\r\n\t\tmain:component,\r\n\t\tcomponents:VStateManagement.componentsContent\r\n\t};\r\n};\r\n\r\n/**\r\n * Angular Compiler\r\n * \r\n * Function that take the HTML string and translate to Angular\r\n *\r\n * @param {String} name Component Name\r\n * @param {string} html HTML String \r\n * @param {string} css CSS String\r\n * \r\n * @return {string}\r\n */\r\nconst AngularCompiler = (name, html, css) => {\r\n\r\n\tconst AStateManagement = new Core_StateManagement__WEBPACK_IMPORTED_MODULE_0__[\"AngularStateManagement\"]();\r\n\r\n\tconst parse = new Core_JavascriptManagement__WEBPACK_IMPORTED_MODULE_1__[\"default\"](); //JS Parser\r\n\r\n\t// Set Styles\r\n\tlet style = css !== \"\" ? `<style scoped>\\n${css}</style>` : \"\";\r\n\r\n\t//Get states declarations from JS and set to Data\r\n\tAStateManagement.statesFromJS = parse.states;\r\n\r\n\t//Parse Lifecycles\r\n\tAStateManagement.setLifecycle(parse.lifecycles, \"a\");\r\n\r\n\t//Get all data from HTML string\r\n\tAStateManagement.getHTMLString(html);\r\n\r\n\t//Get Methods from JS and set to Data\r\n\tAStateManagement.getJsData(parse.functions, \"a\");\r\n\t\r\n\tAStateManagement.watchers = parse.watchers;\r\n\t\r\n\tAStateManagement.setVarsToStatesContent(parse.vars);\r\n\t\r\n\t//Add new lines and idents to code beauty\r\n\tlet pretty = AStateManagement\r\n\t\t.filterHTML(html)\r\n\t\t.split(/\\n/)\r\n\t\t.map(e => {\r\n\t\t\tif (e) return `\\t${e}\\n`;\r\n\t\t})\r\n\t\t.join(\"\");\r\n\r\n\tconst component = `import { Component${AStateManagement.props.length > 0 ? \", Input\" : \"\"}} from '@angular/core';\r\n${AStateManagement.components.map(e => `\\nimport { ${e} } from \"./components/${e}\";`).join(\"\")}\r\n\r\n@Component({\r\n\tselector: '${AStateManagement.generateComponentName(name)}-root',\r\n\ttemplate:\\`${pretty}\\`\r\n})\r\n\r\nexport class ${name} {\r\n\t${AStateManagement.componentData}\r\n}`;\r\n\treturn {\r\n\t\tmain:component,\r\n\t\tcomponents:AStateManagement.componentsContent\r\n\t};\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/core/index.js?");

/***/ }),

/***/ "./src/file-functions/index.js":
/*!*************************************!*\
  !*** ./src/file-functions/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Commons_file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Commons/file */ \"./src/commons/file.js\");\n/* harmony import */ var Core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Core */ \"./src/core/index.js\");\n/* harmony import */ var cli_color__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cli-color */ \"./node_modules/cli-color/index.js\");\n/* harmony import */ var cli_color__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cli_color__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var Const_Lifecycle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! Const/Lifecycle */ \"./src/const/Lifecycle.json\");\nvar Const_Lifecycle__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! Const/Lifecycle */ \"./src/const/Lifecycle.json\", 1);\n/* harmony import */ var Const_Globals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! Const/Globals */ \"./src/const/Globals.json\");\nvar Const_Globals__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! Const/Globals */ \"./src/const/Globals.json\", 1);\n/* harmony import */ var Commons_require__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! Commons/require */ \"./src/commons/require.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst {readFileAsString} = Commons_file__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\r\n\r\n/**\r\n  * File Functions to CLI\r\n  * \r\n  * @class\r\n  */\r\nclass TranslatorFileFunctions {\r\n\tcontructor(){\r\n\t\t//Initialize propierties\r\n\t\tthis._file = undefined;\r\n\t\tthis._entry = undefined;\r\n\t\tthis._out = undefined;\r\n\t\tthis._js = undefined;\r\n\t\tthis._css = undefined;\r\n\t}\r\n\t/**\r\n\t * Set Params\r\n\t * \r\n\t * Set Input file and output folder\r\n\t * \r\n\t * @public\r\n\t * @param {String} fileName \r\n\t * @param {String} output \r\n\t */\r\n\tsetParams(fileName, output){\r\n\t\tthis._entry = fileName;\r\n\t\tthis._out = output;\r\n\t\tthis._js = [];\r\n\t\tthis._css = [];\r\n\t\tthis._findFile(fileName); //Find all files\r\n\t}\r\n\t/**\r\n\t * Get File\r\n\t * \r\n\t * Return the HTML file\r\n\t * \r\n\t * @public\r\n\t * @return {String}\r\n\t */\r\n\tgetFile(){\r\n\t\treturn this._file;\r\n\t}\r\n\t/**\r\n\t * Get Js\r\n\t * \r\n\t * Return the Javascript file\r\n\t * \r\n\t * @public\r\n\t * @return {String}\r\n\t */\r\n\tgetJs(){\r\n\t\tif (this._js !== undefined){\r\n\t\t\treturn this._js.join(\"\\r\\n\");\r\n\r\n\t\t} else {\r\n\t\t\treturn \"\";\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Filter Javascript Data File\r\n\t * \r\n\t * Get the HTML file and create a temp file that export the Javascript Data\r\n\t * \r\n\t * @public\r\n\t * @param {String} js \r\n\t */\r\n\tfilterJavascriptDataFile(js) {\r\n\t\tif (!js)\r\n\t\t\treturn;\r\n\t\t\r\n\t\tlet newData = js;\r\n\t\tlet data = js.match(new RegExp(Const_Lifecycle__WEBPACK_IMPORTED_MODULE_5__.join(\"|\"), \"g\")) || [];\r\n\r\n\t\tdata.forEach(e => {\r\n\t\t\tnewData = newData.replace(new RegExp(`(const|var|let)\\\\s*(?=${e})`), \"exports.\");\r\n\t\t});\r\n\r\n\t\t//Parse Functions\r\n\t\tconst splittedFunctions = newData.split(/\\r*\\n*(?=function)/);\r\n\r\n\t\tnewData = splittedFunctions.map(e => {\r\n\r\n\t\t\treturn e\r\n\t\t\t\t.replace(/^function\\s*/, \"exports.\")\r\n\t\t\t\t.replace(/\\(/, \" = (\")\r\n\t\t\t\t.replace(/\\)/, \") =>\")\r\n\t\t\t\t.replace(/=\\s*=\\s*/, \"= \")\r\n\t\t\t\t.replace(/=>\\s*=>\\s*/, \"=> \");\r\n\t\t}).join(\"\");\r\n\r\n\t\tlet splittedData = newData.split(/\\n/);\r\n\t\tvar functionIsOpen = false;\r\n\r\n\t\tnewData = splittedData\r\n\t\t\t.map(e => {\r\n\t\t\t\tif (/exports\\.\\w*\\s*=\\s*\\(.*\\)\\s*=>\\s*{/.test(e))\r\n\t\t\t\t\tfunctionIsOpen = true;\r\n\t\t\t\telse if (/\\t*}\\r*\\n*/.test(e))\r\n\t\t\t\t\tfunctionIsOpen = false;\r\n\r\n\r\n\t\t\t\tif (!functionIsOpen)\r\n\t\t\t\t\treturn e.replace(/(var|let|const)\\s*/, \"exports.\");\r\n\r\n\t\t\t\treturn e;\r\n\t\t\t})\r\n\t\t\t.join(\"\\n\");\r\n\r\n\t\tconst defineGlobalsFile = newData\r\n\t\t\t.split(/(\\n|\\r\\n|\\r)(?=exports.\\w*)/)\r\n\t\t\t.filter(e => e.startsWith(\"exports.defineGlobals\"))\r\n\t\t\t.join(\"\");\r\n\t\t\r\n\t\tif (!Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"existsSync\"])(this._out))\r\n\t\t\tObject(fs__WEBPACK_IMPORTED_MODULE_0__[\"mkdirSync\"])(this._out);\r\n\t\t\t\r\n\t\tconst tempDataFilePath = Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(this._out, \"rockettemp_data.js\");\r\n\t\tconst tempDefineGlobals = Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(this._out, \"rockettemp_defineglobals.js\");\r\n\r\n\t\tconsole.log(newData)\r\n\r\n\t\tObject(fs__WEBPACK_IMPORTED_MODULE_0__[\"writeFileSync\"])(tempDataFilePath, newData);\r\n\t\tObject(fs__WEBPACK_IMPORTED_MODULE_0__[\"writeFileSync\"])(tempDefineGlobals, defineGlobalsFile || \"exports.defineGlobals = () => []\");\r\n\r\n\t\tglobal.tempDataFile = tempDataFilePath;\r\n\t\tglobal.defineGlobals = tempDefineGlobals;\r\n\r\n\t\tthis._filterGlobals();\r\n\t}\r\n\t/**\r\n\t * Filter Globals\r\n\t * \r\n\t * Get the globals list, then replace on temp data file and create a global's global list\r\n\t * \r\n\t * @private\r\n\t */\r\n\t_filterGlobals() {\r\n\t\tconst {defineGlobals} = Object(Commons_require__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(`${global.defineGlobals}`);\r\n\t\t\r\n\t\tconst globals = Object.assign([], Const_Globals__WEBPACK_IMPORTED_MODULE_6__, defineGlobals !== undefined ? defineGlobals() : []);\r\n\r\n\t\tlet fileData = readFileAsString(global.tempDataFile);\r\n\r\n\t\tglobals.forEach(glob => {\r\n\t\t\tfileData = fileData.replace(new RegExp(`:${glob}`), `:\"${glob}\"`);\r\n\t\t});\r\n\r\n\t\tObject(fs__WEBPACK_IMPORTED_MODULE_0__[\"writeFileSync\"])(global.tempDataFile, fileData);\r\n\t}\r\n\t/**\r\n\t * Get CSS\r\n\t * \r\n\t * Return the Css file\r\n\t * \r\n\t * @public\r\n\t * @return {String}\r\n\t */\r\n\tgetCSS(){\r\n\t\tif (this._css !== undefined){\r\n\t\t\treturn this._css.join(\"\\r\\n\").replace(/^(\\n|\\r|\\r\\n)\\t*/g, \"\");\r\n\t\t} else {\r\n\t\t\treturn \"\";\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Write Components\r\n\t * \r\n\t * Append components to the Main Component folder\r\n\t * \r\n\t * @public\r\n\t * @param {String} MainComponentName\r\n\t * @param {Array} ComponentsArray\r\n\t */\r\n\twriteComponents(MainComponentName, type, ComponentsArray) {\r\n\t\tif (ComponentsArray.length > 0) {\r\n\t\t\tlet componentsFolder = Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(this._out, MainComponentName, \"components\");\r\n\t\t\tif(!Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"existsSync\"])(componentsFolder)){\r\n\t\t\t\tObject(fs__WEBPACK_IMPORTED_MODULE_0__[\"mkdirSync\"])(componentsFolder);\r\n\t\t\t}\r\n\t\t\tfor (let i = 0; i <= ComponentsArray.length - 1; i++) {\r\n\t\t\t\tlet {name, content} = ComponentsArray[i];\r\n\t\t\t\tlet mime;\r\n\t\t\t\t\r\n\t\t\t\tswitch(type) {\r\n\t\t\t\tcase \"vue\":\r\n\t\t\t\t\tcontent = Object(Core__WEBPACK_IMPORTED_MODULE_3__[\"VueCompiler\"])(name, content.split(/\\n/).map(e => e.replace(/\\t\\t/, \"\")).join(\"\\n\"), \"\", this.getJs()).main;\r\n\t\t\t\t\tmime = \"vue\";\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"react\":\r\n\t\t\t\t\tcontent = Object(Core__WEBPACK_IMPORTED_MODULE_3__[\"ReactCompiler\"])(name, content.split(/\\n/).map(e => e.replace(/\\t\\t/, \"\")).join(\"\\n\"), \"\", this.getJs()).main;\r\n\t\t\t\t\tmime = \"jsx\";\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tcase \"angular\":\r\n\t\t\t\t\tcontent = Object(Core__WEBPACK_IMPORTED_MODULE_3__[\"AngularCompiler\"])(name, content.split(/\\n/).map(e => e.replace(/\\t\\t/, \"\")).join(\"\\n\"), \"\", this.getJs()).main;\r\n\t\t\t\t\tmime = \"component.ts\";\r\n\t\t\t\t\tbreak;\r\n\t\t\t\tdefault: \r\n\t\t\t\t\tconsole.error(`Type must be '${cli_color__WEBPACK_IMPORTED_MODULE_4___default.a.whiteBright(\"react\")}' or '${cli_color__WEBPACK_IMPORTED_MODULE_4___default.a.whiteBright(\"vue\")}'\"`);\r\n\t\t\t\t\tprocess.exit(1);\r\n\t\t\t\t}\r\n\t\t\t\tObject(fs__WEBPACK_IMPORTED_MODULE_0__[\"writeFileSync\"])(Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(componentsFolder, `${name}.${mime}`), content);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Write File\r\n\t * \r\n\t * Append files to the output folder\r\n\t * \r\n\t * @public\r\n\t * @param {Object} param0\r\n\t */\r\n\twriteFile({content, type, name}){\r\n\t\tif(!Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"existsSync\"])(this._out)){\r\n\t\t\tObject(fs__WEBPACK_IMPORTED_MODULE_0__[\"mkdirSync\"])(this._out);\r\n\t\t}\r\n\t\tlet mime;\r\n\t\tswitch (type) {\r\n\t\tcase \"vue\":\r\n\t\t\tmime = \"vue\"; //Set \"vue\" extension\r\n\t\t\tbreak;\r\n\t\tcase \"react\":\r\n\t\t\tmime = \"jsx\"; //Set \"jsx\" extension\r\n\t\t\tbreak;\r\n\t\tcase \"angular\":\r\n\t\t\tmime = \"component.ts\";\r\n\t\t\tbreak;\r\n\t\tdefault:\r\n\t\t\tthrow new Error(`Invalid Type ${type}`);\r\n\t\t}\r\n\r\n\t\t//Component Folder Name\r\n\t\tlet folderPath = Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(this._out, name);\r\n\r\n\t\tif(!Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"existsSync\"])(folderPath)){\r\n\t\t\tObject(fs__WEBPACK_IMPORTED_MODULE_0__[\"mkdirSync\"])(folderPath);\r\n\t\t}\r\n\r\n\t\t//Component Path\r\n\t\tlet filePath = Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(this._out, name, `index.${mime}`);\r\n\t\tObject(fs__WEBPACK_IMPORTED_MODULE_0__[\"writeFileSync\"])(filePath, content);\r\n\r\n\t\t//console.log(content); //Console Log to debug\r\n\t}\r\n\t/**\r\n\t * Find File\r\n\t * \r\n\t * Get the path and find if the file exist\r\n\t * \r\n\t * @param {String} pathname\r\n\t */\r\n\t_findFile(pathname){\r\n\t\tif (!Object(fs__WEBPACK_IMPORTED_MODULE_0__[\"existsSync\"])(pathname)) {\r\n\t\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_4___default.a.redBright(\"\\nError!!!\\n\"));\r\n\t\t\tconsole.error(cli_color__WEBPACK_IMPORTED_MODULE_4___default.a.whiteBright(\"File does not exist.\"));\r\n\t\t\tprocess.exit(1);\r\n\t\t} else {\r\n\t\t\t//If is not a HTML file\r\n\t\t\tif (!pathname.match(/\\w*.html$/)){\r\n\t\t\t\tconsole.log(cli_color__WEBPACK_IMPORTED_MODULE_4___default.a.redBright(\"\\nError!!!\\n\"));\r\n\t\t\t\tconsole.error(cli_color__WEBPACK_IMPORTED_MODULE_4___default.a.whiteBright(\"Please select a html file.\"));\r\n\t\t\t\tprocess.exit(1);\r\n\t\t\t} else {\r\n\t\t\t\tconst data = readFileAsString(pathname);\r\n\r\n\t\t\t\t//Remove external files routes\r\n\t\t\t\tthis._file = data\r\n\t\t\t\t\t.replace(/#js .*(\\n|\\r)/g, \"\")\r\n\t\t\t\t\t.replace(/#css .*(\\n|\\r|\\r\\n)/g, \"\")\r\n\t\t\t\t\t.split(/<script.*>/g)\r\n\t\t\t\t\t.map((e, i) => {\r\n\t\t\t\t\t\tif (i > 0) return e.replace(/(\\n|\\r|\\r\\n)*(.*(\\n|\\r|\\r\\n)*)*<\\/script>/, \"\");\r\n\t\t\t\t\t\telse return e;\r\n\t\t\t\t\t})\r\n\t\t\t\t\t.join(\"\");\r\n\t\t\t\tthis._getFileData(data, \"js\"); //Get Js Route and Data\r\n\t\t\t\tthis._getFileData(data, \"css\"); //Get Css Route and Data\r\n\t\t\t\tthis._getScriptTags(data);\r\n\t\t\t\tthis._getStyleTags(data);\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\t/**\r\n\t * Get Script Tags\r\n\t * \r\n\t * Find the script tags and set the content as Component Data\r\n\t * \r\n\t * @param {String} html \r\n\t */\r\n\t_getScriptTags(html) {\r\n\t\thtml.split(/<script.*>/g).forEach((e, i) => {\r\n\t\t\tif (i > 0) {\r\n\t\t\t\tthis._js.push(e.replace(/<\\/script>/g, \"\"));\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t * Get Style Tags\r\n\t * \r\n\t * Find the style tags and set the content as Component Styles\r\n\t * \r\n\t * @param {String} html \r\n\t */\r\n\t_getStyleTags(html){\r\n\t\thtml.split(/<style.*>/g).forEach((e, i) => {\r\n\t\t\tif (i > 0) {\r\n\t\t\t\tthis._css.push(e.replace(/<\\/style>/, \"\"));\r\n\t\t\t}\r\n\t\t});\r\n\t}\r\n\t/**\r\n\t * Get File Data\r\n\t * \r\n\t * Get Data from JS or Css, Get routes from the HTML String and get the content\r\n\t * \r\n\t * @param {String} htmlString \r\n\t * @param {String} type\r\n\t */\r\n\t_getFileData(htmlString, type){\r\n\t\tif (type === \"css\" || type === \"js\") {\r\n\t\t\tlet reg = new RegExp(`#${type} .*`, \"g\"); //RegExp to get paths\r\n\t\t\tlet path = null;\r\n\t\t\tif (htmlString.match(reg)) {\r\n\t\t\t\tpath = htmlString.match(reg).map(e => {\r\n\t\t\t\t\treturn e.replace(`#${type} `, \"\");\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t\tif (path !== null) {\r\n\t\t\t\tpath.forEach(e => {\r\n\t\t\t\t\tconst data = readFileAsString(Object(path__WEBPACK_IMPORTED_MODULE_1__[\"join\"])(__dirname, \"..\", \"..\", e));\r\n\r\n\t\t\t\t\ttype === \"css\" ? this._css.push(data) : this._js.push(data); //Set Data                    \r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t} else {\r\n\t\t\tthrow new Error(`Invalid Type ${type}`);\r\n\t\t}\r\n\t}\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (TranslatorFileFunctions);\r\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/file-functions/index.js?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ })));