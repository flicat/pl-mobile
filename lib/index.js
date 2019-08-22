module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (false) { var repeat, classify, classifyRE, hasConsole; }

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (false) {}
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (false) {}
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (false
  ) {}
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     false && false;
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (false) {}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       false && false;

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     false && false;
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (false) {}
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (false) {}
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (false) {}
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (false) {}
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (false) {}

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (false) {}
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    false
  ) {}
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (false) {}
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (false) {}
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (false) { var getHandler, hasHandler, isBuiltInModifier, hasProxy, warnReservedPrefix, warnNonPresent, allowedGlobals; }

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (false) { var perf; }

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       false && false;
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (false) { var keyInLowerCase; }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (false) {} else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (false) {}
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (false) {}
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       false && false;
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       false && false;
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (false) {}
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (false) {}
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (false) {}
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     false && false;
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (false
  ) {}
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (false) {} else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (false) {} else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (false) {}
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       false && false;
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 false
                  ? (undefined)
                  : null
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (false) { var lowerCaseEvent; }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (false) {}
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (false) {} else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (false) {}

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (false) {}
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (false) {}
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (false) {}
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (false) {}
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  false
    ? undefined
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       false && false;
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (false) { var hyphenatedKey; } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     false && false;
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (false) {}
    if (props && hasOwn(props, key)) {
       false && false;
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (false) {}

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (false) {}
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (false) {}
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (false) {}
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (false) {}
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (false) {}

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (false) {} else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (false) {}

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (false
  ) {}
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (false) {}

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (false) {}
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (false) {}
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
       false && false;
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (false) {}

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (false) {}
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (false) {}
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (false) {}

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (false) {}
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (false) {}
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (false
              ) {}
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (false) {}
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

/*  */

/*  */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (false) {}

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (false) {}

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
     false && false;
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (false) {}

    var mode = this.mode;

    // warn invalid mode
    if (false
    ) {}

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (false) { var name, opts; }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        false
      ) {}
    }
    if (false
    ) {}
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["a"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22), __webpack_require__(27).setImmediate))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("2b7e1011", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("7b1b6ca6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("37debf8d", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("83586ca2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("1a36e222", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("b9f406a8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("234765cf", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("55ef49f4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("05f91d29", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("7b72df40", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("3416b27b", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("1eaa1e4a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("8e30ae24", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("576307df", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("956cab3c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("7b2d8dfd", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("e9c94418", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("cd8a06c2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(66);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("4b9f2ff2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/word.2e203ff.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(67);


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_04d57055_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_04d57055_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_04d57055_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_loading_vue_vue_type_style_index_0_id_04d57055_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".pl-loading[data-v-04d57055] {\n  text-align: center;\n  color: #999;\n}\n.pl-loading-vertical .loading-icon[data-v-04d57055] {\n  display: block;\n  margin: auto;\n}\n.pl-loading-vertical .loading-icon svg[data-v-04d57055] {\n  width: 3em;\n  height: 3em;\n}\n.pl-loading-horizontal .loading-icon[data-v-04d57055] {\n  display: inline-block;\n  margin-right: 0.5em;\n}\n.pl-loading-horizontal .loading-icon svg[data-v-04d57055] {\n  width: 1em;\n  height: 1em;\n}\n.pl-loading .loading-icon svg[data-v-04d57055] {\n  vertical-align: middle;\n  stroke: currentColor;\n  fill: none;\n}\n.pl-loading .loading-text[data-v-04d57055] {\n  color: currentColor;\n  line-height: 2em;\n}\n", ""]);



/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(28);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(22), __webpack_require__(29)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cf1b9d0e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cf1b9d0e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cf1b9d0e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_cf1b9d0e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* 设计稿尺寸 */\n/* 基础字体大小 */\n/* px转rem方法 */\n.pl-button[data-v-cf1b9d0e] {\n  border-radius: 3px;\n  line-height: normal;\n  background: none;\n  border: 0 none;\n  outline: 0 none;\n  text-align: center;\n  color: #fff;\n}\n.pl-button[data-v-cf1b9d0e]:active {\n  opacity: 0.8;\n}\n.pl-button--default[data-v-cf1b9d0e] {\n  background: #BEC5CB;\n}\n.pl-button--primary[data-v-cf1b9d0e] {\n  background: #5074FF;\n}\n.pl-button--success[data-v-cf1b9d0e] {\n  background: #67c23a;\n}\n.pl-button--warning[data-v-cf1b9d0e] {\n  background: #e6a23c;\n}\n.pl-button--danger[data-v-cf1b9d0e] {\n  background: #f56c6c;\n}\n.pl-button--text[data-v-cf1b9d0e] {\n  background: none;\n  color: #5074FF;\n}\n.pl-button--normal[data-v-cf1b9d0e] {\n  font-size: 1.06666667rem;\n  padding: 0.64rem;\n}\n.pl-button--small[data-v-cf1b9d0e] {\n  font-size: 0.85333333rem;\n  padding: 0.42666667rem;\n}\n.pl-button--lager[data-v-cf1b9d0e] {\n  font-size: 1.28rem;\n  padding: 0.85333333rem 1.28rem;\n}\n.pl-button > *[data-v-cf1b9d0e] {\n  vertical-align: bottom;\n}\n.is-disabled[data-v-cf1b9d0e] {\n  cursor: not-allowed;\n  background-color: #E2E5F0;\n}\n.is-round[data-v-cf1b9d0e] {\n  border-radius: 1em;\n}\n.is-circle[data-v-cf1b9d0e] {\n  border-radius: 50%;\n}\n", ""]);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ffcfdaae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ffcfdaae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ffcfdaae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ffcfdaae_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".pl-cell[data-v-ffcfdaae] {\n  display: grid;\n  width: 100%;\n  background-color: #fff;\n}\n", ""]);



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f231500_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f231500_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f231500_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2f231500_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".pl-icon[data-v-2f231500] {\n  width: 1.2em;\n  height: 1.2em;\n  display: inline-block;\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: contain;\n  vertical-align: middle;\n  line-height: 0;\n}\n.pl-icon .icon-svg[data-v-2f231500] {\n  width: 100%;\n  height: 100%;\n  fill: currentColor;\n  overflow: hidden;\n  vertical-align: top;\n}\n", ""]);



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bbba9ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bbba9ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bbba9ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bbba9ca_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* 设计稿尺寸 */\n/* 基础字体大小 */\n/* px转rem方法 */\n.pl-checkbox[data-v-5bbba9ca] {\n  background-color: #fff;\n  padding: 0 1.2em;\n  line-height: normal;\n}\n.pl-checkbox-cell[data-v-5bbba9ca] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.pl-checkbox--large[data-v-5bbba9ca] {\n  font-size: 1.2em;\n}\n.pl-checkbox--small[data-v-5bbba9ca] {\n  font-size: 0.8em;\n}\n.pl-checkbox--error[data-v-5bbba9ca] {\n  position: relative;\n}\n.pl-checkbox-inner[data-v-5bbba9ca] {\n  padding: 1em 0;\n  flex: 1;\n}\n.pl-checkbox .pl-checkbox-label[data-v-5bbba9ca] {\n  padding-right: 0.4em;\n}\n.pl-checkbox .pl-checkbox-label--require[data-v-5bbba9ca] {\n  position: relative;\n}\n.pl-checkbox .pl-checkbox-label--require[data-v-5bbba9ca]::before {\n  position: absolute;\n  content: '*';\n  color: #f56c6c;\n  left: -0.6em;\n  top: 30%;\n}\n.pl-checkbox .pl-checkbox-item[data-v-5bbba9ca] {\n  position: relative;\n  display: inline-table;\n  margin-right: 1em;\n}\n.pl-checkbox .pl-checkbox-item input[data-v-5bbba9ca] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  z-index: 10;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  -webkit-appearance: none;\n}\n.pl-checkbox .pl-checkbox-item input:checked ~ .pl-checkbox-text[data-v-5bbba9ca] {\n  color: #5074FF;\n  border-color: #5074FF;\n}\n.pl-checkbox .pl-checkbox-item input:checked ~ .icon-unchecked[data-v-5bbba9ca] {\n  display: none;\n}\n.pl-checkbox .pl-checkbox-item input:checked ~ .icon-checked[data-v-5bbba9ca] {\n  display: inline-block;\n}\n.pl-checkbox .pl-checkbox-item input:checked ~ .pl-checkbox-icon[data-v-5bbba9ca] svg {\n  fill: #5074FF;\n}\n.pl-checkbox .pl-checkbox-item input:disabled ~ .pl-checkbox-text[data-v-5bbba9ca] {\n  color: #c8c9cc;\n  border-color: #dcdfe6;\n}\n.pl-checkbox .pl-checkbox-item input:disabled ~ .pl-checkbox-icon[data-v-5bbba9ca] svg {\n  fill: #ebedf0;\n}\n.pl-checkbox .pl-checkbox-item .pl-checkbox-text[data-v-5bbba9ca] {\n  color: #333;\n  display: inline-block;\n  vertical-align: middle;\n}\n.pl-checkbox .pl-checkbox-item .pl-checkbox-icon[data-v-5bbba9ca] {\n  margin-right: 0.5em;\n  font-size: 1em;\n}\n.pl-checkbox .pl-checkbox-item .pl-checkbox-icon.icon-unchecked[data-v-5bbba9ca] {\n  display: inline-block;\n}\n.pl-checkbox .pl-checkbox-item .pl-checkbox-icon.icon-checked[data-v-5bbba9ca] {\n  display: none;\n}\n.pl-checkbox .pl-checkbox-item .pl-checkbox-icon[data-v-5bbba9ca] svg {\n  fill: #dcdfe6;\n}\n.pl-checkbox .pl-checkbox-item[data-v-5bbba9ca]:last-child {\n  margin-right: 0;\n}\n.pl-checkbox .pl-checkbox-item.is-vertical[data-v-5bbba9ca] {\n  display: block;\n  width: 100%;\n  margin-right: 0;\n  margin-bottom: 0.5em;\n  padding-bottom: 0.5em;\n  border-bottom: 1px solid #f0f0f0;\n}\n.pl-checkbox .pl-checkbox-item.is-vertical .pl-checkbox-icon[data-v-5bbba9ca] {\n  position: absolute;\n  right: 0.5em;\n}\n.pl-checkbox .pl-checkbox-item.is-vertical[data-v-5bbba9ca]:last-child {\n  margin-bottom: 0;\n  padding-bottom: 0;\n  border-bottom: 0 none;\n}\n.pl-checkbox .pl-checkbox-item.is-button[data-v-5bbba9ca] {\n  margin: 0;\n}\n.pl-checkbox .pl-checkbox-item.is-button .pl-checkbox-text[data-v-5bbba9ca] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 1px solid #dcdfe6;\n  padding: 0.3em 0.5em;\n}\n.pl-checkbox .pl-checkbox-item.is-button .pl-checkbox-icon[data-v-5bbba9ca] {\n  display: none;\n}\n.pl-checkbox .pl-checkbox-item.is-button:first-child ~ :not(.is-vertical) .pl-checkbox-text[data-v-5bbba9ca] {\n  border-left: 0 none;\n}\n.pl-checkbox .pl-checkbox-item.is-button:first-child .pl-checkbox-text[data-v-5bbba9ca] {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n}\n.pl-checkbox .pl-checkbox-item.is-button:last-child .pl-checkbox-text[data-v-5bbba9ca] {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.pl-checkbox .pl-checkbox-item.is-button.is-vertical[data-v-5bbba9ca] {\n  padding-bottom: 0;\n  border-bottom: 0 none;\n}\n.pl-checkbox .pl-checkbox-item.is-button.is-vertical:not(:last-child) .pl-checkbox-text[data-v-5bbba9ca] {\n  border-bottom: 0 none;\n}\n.pl-checkbox .pl-checkbox-item.is-button.is-vertical:first-child .pl-checkbox-text[data-v-5bbba9ca] {\n  border-top-left-radius: 5px;\n  border-top-right-radius: 5px;\n}\n.pl-checkbox .pl-checkbox-item.is-button.is-vertical:last-child .pl-checkbox-text[data-v-5bbba9ca] {\n  border-bottom-left-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n.pl-checkbox .pl-checkbox-item.is-button input:checked ~ .pl-checkbox-text[data-v-5bbba9ca] {\n  background-color: #5074FF;\n  color: #fff;\n}\n.pl-checkbox .pl-checkbox-item.is-button input:disabled ~ .pl-checkbox-text[data-v-5bbba9ca] {\n  background-color: #ebebe4;\n  color: #999;\n}\n.pl-checkbox-error[data-v-5bbba9ca] {\n  padding: 0 0.5em;\n  color: #f56c6c;\n  line-height: 2em;\n}\n.pl-checkbox.is-vertical .pl-checkbox-label[data-v-5bbba9ca] {\n  align-self: flex-start;\n  margin-top: 1em;\n}\n", ""]);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e625534_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e625534_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e625534_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_2e625534_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".pl-collapse-top[data-v-2e625534] {\n  display: flex;\n  padding: 1em 1.2em;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n.pl-collapse-top .icon-arrow[data-v-2e625534] {\n  transition: all 0.3s ease;\n}\n.pl-collapse-content[data-v-2e625534] {\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.pl-collapse-inner[data-v-2e625534] {\n  transform: translateY(-100%);\n  transition: all 0.3s ease;\n}\n.pl-collapse--active > .pl-collapse-top > .icon-arrow[data-v-2e625534] {\n  transform: rotate(90deg);\n}\n.pl-collapse--active > .pl-collapse-content > .pl-collapse-inner[data-v-2e625534] {\n  transform: translateY(0);\n}\n", ""]);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c700fd5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c700fd5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c700fd5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5c700fd5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* 设计稿尺寸 */\n/* 基础字体大小 */\n/* px转rem方法 */\n@keyframes up-data-v-5c700fd5 {\nfrom {\n    transform: translateY(100%);\n}\nto {\n    transform: translateY(0);\n}\n}\n@keyframes down-data-v-5c700fd5 {\nfrom {\n    transform: translateY(0);\n}\nto {\n    transform: translateY(100%);\n}\n}\n@keyframes in-data-v-5c700fd5 {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes out-data-v-5c700fd5 {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n.pl-picker[data-v-5c700fd5] {\n  position: fixed;\n  z-index: 9999;\n  left: 0;\n  top: 0;\n  display: flex;\n  flex-direction: column-reverse;\n  width: 100%;\n  height: 100%;\n}\n.pl-picker--open[data-v-5c700fd5] {\n  display: flex;\n}\n.pl-picker--open .pl-picker-content[data-v-5c700fd5] {\n  animation: up-data-v-5c700fd5 0.3s ease 1 forwards;\n}\n.pl-picker--open .pl-picker-layer[data-v-5c700fd5] {\n  animation: in-data-v-5c700fd5 0.3s ease 1 forwards;\n}\n.pl-picker--close .pl-picker-content[data-v-5c700fd5] {\n  animation: down-data-v-5c700fd5 0.3s ease 1 forwards;\n}\n.pl-picker--close .pl-picker-layer[data-v-5c700fd5] {\n  animation: out-data-v-5c700fd5 0.3s ease 1 forwards;\n}\n.pl-picker--hide[data-v-5c700fd5] {\n  display: none;\n}\n.pl-picker-content[data-v-5c700fd5] {\n  position: relative;\n  z-index: 1;\n  font-size: 1.13777778rem;\n  color: #333;\n  background-color: #fff;\n}\n.pl-picker-layer[data-v-5c700fd5] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.pl-picker-top[data-v-5c700fd5] {\n  height: 3.12888889rem;\n  line-height: 3.12888889rem;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  border-top: 1px solid #ebedf0;\n  border-bottom: 1px solid #ebedf0;\n}\n.pl-picker-btn--cancel[data-v-5c700fd5],\n.pl-picker-btn--submit[data-v-5c700fd5] {\n  font-size: 0.99555556rem;\n  color: #3388FF;\n  margin: 0rem 1.42222222rem;\n}\n.pl-picker-inner[data-v-5c700fd5] {\n  height: 13.79555556rem;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  overflow: hidden;\n}\n.pl-picker-inner-col[data-v-5c700fd5] {\n  flex: 1;\n  height: 100%;\n  text-align: center;\n  position: relative;\n  z-index: 1;\n}\n.pl-picker-inner-col[data-v-5c700fd5]::before,\n.pl-picker-inner-col[data-v-5c700fd5]::after {\n  content: '';\n  position: absolute;\n  left: 0;\n  z-index: 3;\n  display: block;\n  width: 100%;\n  height: 40%;\n}\n.pl-picker-inner-col[data-v-5c700fd5]::before {\n  background: linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%);\n  top: 0;\n  border-bottom: 1px solid #ebedf0;\n}\n.pl-picker-inner-col[data-v-5c700fd5]::after {\n  background: linear-gradient(0deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%);\n  bottom: 0;\n  border-top: 1px solid #ebedf0;\n}\n.pl-picker-inner-row[data-v-5c700fd5] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  transition: all 0.3s ease;\n}\n.pl-picker-inner-item[data-v-5c700fd5] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n", ""]);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_30f00382_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_30f00382_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_30f00382_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_30f00382_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* 设计稿尺寸 */\n/* 基础字体大小 */\n/* px转rem方法 */\n.pl-datetime[data-v-30f00382] {\n  background-color: #fff;\n  padding: 0 1.2em;\n  line-height: normal;\n  overflow: hidden;\n}\n.pl-datetime-cell[data-v-30f00382] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.pl-datetime--large[data-v-30f00382] {\n  font-size: 1.2em;\n}\n.pl-datetime--small[data-v-30f00382] {\n  font-size: 0.8em;\n}\n.pl-datetime--error[data-v-30f00382] {\n  position: relative;\n}\n.pl-datetime-inner[data-v-30f00382] {\n  padding: 1em 0;\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pl-datetime-inner .placeholder[data-v-30f00382] {\n  color: #757575;\n}\n.pl-datetime-label[data-v-30f00382] {\n  padding-right: 0.4em;\n}\n.pl-datetime-label--require[data-v-30f00382] {\n  position: relative;\n}\n.pl-datetime-label--require[data-v-30f00382]::before {\n  position: absolute;\n  content: '*';\n  color: #f56c6c;\n  left: -0.6em;\n  top: 30%;\n}\n.pl-datetime-append[data-v-30f00382],\n.pl-datetime-prepend[data-v-30f00382] {\n  text-align: center;\n}\n.pl-datetime-append[data-v-30f00382] {\n  padding-left: 0.4em;\n}\n.pl-datetime-prepend[data-v-30f00382] {\n  padding-right: 0.4em;\n}\n.pl-datetime-clear[data-v-30f00382] {\n  padding: 0 0.4em;\n}\n.pl-datetime-clear .icon-clear[data-v-30f00382] {\n  width: 1.2em;\n  height: 1.2em;\n  vertical-align: bottom;\n}\n.pl-datetime-error[data-v-30f00382] {\n  padding: 0 0.5em;\n  color: #f56c6c;\n  line-height: 2em;\n}\n.pl-datetime.is-disabled[data-v-30f00382] {\n  background-color: #ebebe4;\n}\n", ""]);



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50daa70e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50daa70e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50daa70e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_50daa70e_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* 设计稿尺寸 */\n/* 基础字体大小 */\n/* px转rem方法 */\n.pl-to-top[data-v-50daa70e] {\n  position: fixed;\n  z-index: 999;\n  width: 2.84444444rem;\n  height: 2.84444444rem;\n  line-height: 2.70222222rem;\n  right: 1.56444444rem;\n  bottom: 1.56444444rem;\n  background: #fff;\n  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);\n  border-radius: 50%;\n  text-align: center;\n  font-size: 1.56444444rem;\n  color: #C1CEFF;\n}\n", ""]);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".pl-input {\n  background-color: #fff;\n  padding: 0 1.2em;\n  line-height: normal;\n}\n.pl-input-cell {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.pl-input--large {\n  font-size: 1.2em;\n}\n.pl-input--small {\n  font-size: 0.8em;\n}\n.pl-input--error {\n  position: relative;\n}\n.pl-input-inner {\n  padding: 1em 0;\n  flex: 1;\n}\n.pl-input .pl-input-label,\n.pl-input .pl-textarea-label {\n  padding-right: 0.4em;\n}\n.pl-input .pl-input-label--require,\n.pl-input .pl-textarea-label--require {\n  position: relative;\n}\n.pl-input .pl-input-label--require::before,\n.pl-input .pl-textarea-label--require::before {\n  position: absolute;\n  content: '*';\n  color: #f56c6c;\n  left: -0.6em;\n  top: 30%;\n}\n.pl-input .pl-textarea-label {\n  align-self: flex-start;\n  margin-top: 1em;\n}\n.pl-input-append,\n.pl-input-prepend {\n  text-align: center;\n}\n.pl-input-append {\n  padding-left: 0.4em;\n}\n.pl-input-prepend {\n  padding-right: 0.4em;\n}\n.pl-input-clear {\n  padding: 0 0.4em;\n}\n.pl-input-clear .icon-clear {\n  width: 1.2em;\n  height: 1.2em;\n  vertical-align: bottom;\n}\n.pl-input-error {\n  padding: 0 0.5em;\n  color: #f56c6c;\n  line-height: 2em;\n}\n.pl-input input,\n.pl-input textarea {\n  border: 0 none;\n  margin: 0;\n  padding: 0;\n  line-height: normal;\n  width: 100%;\n  background-color: transparent;\n}\n.pl-input input::placeholder,\n.pl-input textarea::placeholder {\n  color: #9898B6;\n}\n.pl-input.is-disabled {\n  background-color: #E2E5F0;\n}\n", ""]);



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_07f15ee5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_07f15ee5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_07f15ee5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_07f15ee5_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* 设计稿尺寸 */\n/* 基础字体大小 */\n/* px转rem方法 */\n.pl-list[data-v-07f15ee5] {\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.pl-list-wrap[data-v-07f15ee5] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\n.pl-list-inner[data-v-07f15ee5] {\n  position: relative;\n  z-index: 2;\n  transition: all 0.3s ease;\n}\n.pl-list-loading-top[data-v-07f15ee5],\n.pl-list-loading-bottom[data-v-07f15ee5],\n.pl-list-loading-finished[data-v-07f15ee5],\n.pl-list-refresh-tip[data-v-07f15ee5] {\n  width: 100%;\n  height: 80px;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #ccc;\n  font-size: 14px;\n  position: absolute;\n  left: 0;\n}\n.pl-list-loading-top[data-v-07f15ee5] .pl-icon,\n.pl-list-loading-bottom[data-v-07f15ee5] .pl-icon,\n.pl-list-loading-finished[data-v-07f15ee5] .pl-icon,\n.pl-list-refresh-tip[data-v-07f15ee5] .pl-icon {\n  margin-right: 0.5em;\n}\n.pl-list-loading-bottom[data-v-07f15ee5],\n.pl-list-loading-finished[data-v-07f15ee5] {\n  top: 100%;\n}\n.pl-list-loading-top[data-v-07f15ee5],\n.pl-list-refresh-tip[data-v-07f15ee5] {\n  top: 0;\n}\n", ""]);



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38605898_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38605898_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38605898_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38605898_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".pl-progress[data-v-38605898] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n  padding: 1em 0;\n}\n.pl-progress .progress-inner[data-v-38605898] {\n  position: relative;\n  z-index: 1;\n  flex: 1;\n  height: 0.4em;\n  background: #EBEDFB;\n  border-radius: 0.4em;\n}\n.pl-progress .progress-inner .progress-track[data-v-38605898] {\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  height: 0.4em;\n  border-radius: 0.4em;\n}\n.pl-progress .progress-value[data-v-38605898] {\n  margin-left: 0.5em;\n  font-size: smaller;\n}\n", ""]);



/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6cbf9e2a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6cbf9e2a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6cbf9e2a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_6cbf9e2a_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* 设计稿尺寸 */\n/* 基础字体大小 */\n/* px转rem方法 */\n.pl-radio[data-v-6cbf9e2a] {\n  background-color: #fff;\n  padding: 0 1.2em;\n  line-height: normal;\n}\n.pl-radio-cell[data-v-6cbf9e2a] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.pl-radio--large[data-v-6cbf9e2a] {\n  font-size: 1.2em;\n}\n.pl-radio--small[data-v-6cbf9e2a] {\n  font-size: 0.8em;\n}\n.pl-radio--error[data-v-6cbf9e2a] {\n  position: relative;\n}\n.pl-radio-inner[data-v-6cbf9e2a] {\n  padding: 1em 0;\n  flex: 1;\n}\n.pl-radio .pl-radio-label[data-v-6cbf9e2a] {\n  padding-right: 0.4em;\n}\n.pl-radio .pl-radio-label--require[data-v-6cbf9e2a] {\n  position: relative;\n}\n.pl-radio .pl-radio-label--require[data-v-6cbf9e2a]::before {\n  position: absolute;\n  content: '*';\n  color: #f56c6c;\n  left: -0.6em;\n  top: 30%;\n}\n.pl-radio .pl-radio-item[data-v-6cbf9e2a] {\n  position: relative;\n  display: inline-table;\n  margin-right: 1em;\n  color: #333;\n}\n.pl-radio .pl-radio-item[data-v-6cbf9e2a]:last-child {\n  margin-right: 0;\n}\n.pl-radio .pl-radio-item .pl-radio-icon[data-v-6cbf9e2a] {\n  margin-right: 0.5em;\n  font-size: 1em;\n}\n.pl-radio .pl-radio-item .pl-radio-icon + span[data-v-6cbf9e2a] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.pl-radio .pl-radio-item.is-vertical[data-v-6cbf9e2a] {\n  display: table;\n  width: 100%;\n  margin-right: 0;\n}\n.pl-radio .pl-radio-item.is-vertical .pl-radio-icon[data-v-6cbf9e2a] {\n  position: absolute;\n  right: 0.5em;\n}\n.pl-radio .pl-radio-item.is-vertical[data-v-6cbf9e2a]:not(.is-button):not(:last-child) {\n  margin-bottom: 0.5em;\n  padding-bottom: 0.5em;\n  border-bottom: 1px solid #f0f0f0;\n}\n.pl-radio .pl-radio-item.is-button[data-v-6cbf9e2a] {\n  margin: 0;\n  padding: 0.3em 0.5em;\n  border: 1px solid #dcdfe6;\n}\n.pl-radio .pl-radio-item.is-button .pl-radio-icon[data-v-6cbf9e2a] {\n  display: none;\n}\n.pl-radio .pl-radio-item.is-button[data-v-6cbf9e2a]:not(.is-vertical):not(:last-child) {\n  border-right: 0 none;\n}\n.pl-radio .pl-radio-item.is-button[data-v-6cbf9e2a]:not(.is-vertical):first-child {\n  border-radius: 5px 0 0 5px;\n}\n.pl-radio .pl-radio-item.is-button[data-v-6cbf9e2a]:not(.is-vertical):last-child {\n  border-radius: 0 5px 5px 0;\n}\n.pl-radio .pl-radio-item.is-button.is-vertical[data-v-6cbf9e2a]:not(:last-child) {\n  border-bottom: 0 none;\n}\n.pl-radio .pl-radio-item.is-button.is-vertical[data-v-6cbf9e2a]:first-child {\n  border-radius: 5px 5px 0 0;\n}\n.pl-radio .pl-radio-item.is-button.is-vertical[data-v-6cbf9e2a]:last-child {\n  border-radius: 0 0 5px 5px;\n}\n.pl-radio .pl-radio-item.is-button.is-active[data-v-6cbf9e2a] {\n  background-color: #5074FF;\n  color: #fff;\n}\n.pl-radio .pl-radio-item.is-button.is-disabled[data-v-6cbf9e2a] {\n  background-color: #ebebe4;\n  color: #999;\n}\n.pl-radio .pl-radio-item.is-active[data-v-6cbf9e2a] {\n  color: #5074FF;\n  border-color: #5074FF;\n}\n.pl-radio .pl-radio-item.is-disabled[data-v-6cbf9e2a] {\n  color: #c8c9cc;\n}\n.pl-radio-error[data-v-6cbf9e2a] {\n  padding: 0 0.5em;\n  color: #f56c6c;\n  line-height: 2em;\n}\n.pl-radio.is-vertical .pl-radio-label[data-v-6cbf9e2a] {\n  align-self: flex-start;\n  margin-top: 1em;\n}\n", ""]);



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44e8ce28_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44e8ce28_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44e8ce28_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_44e8ce28_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* 设计稿尺寸 */\n/* 基础字体大小 */\n/* px转rem方法 */\n.pl-range[data-v-44e8ce28] {\n  padding: 0 1.2em;\n  line-height: normal;\n}\n.pl-range-cell[data-v-44e8ce28] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.pl-range--large[data-v-44e8ce28] {\n  font-size: 1.2em;\n}\n.pl-range--small[data-v-44e8ce28] {\n  font-size: 0.8em;\n}\n.pl-range--error[data-v-44e8ce28] {\n  position: relative;\n}\n.pl-range-inner[data-v-44e8ce28] {\n  box-sizing: border-box;\n  padding: 1em;\n  flex: 1;\n  width: 100%;\n}\n.pl-range .pl-range-label[data-v-44e8ce28] {\n  padding-right: 0.4em;\n}\n.pl-range .pl-range-label--require[data-v-44e8ce28] {\n  position: relative;\n}\n.pl-range .pl-range-label--require[data-v-44e8ce28]::before {\n  position: absolute;\n  content: '*';\n  color: #f56c6c;\n  left: -0.6em;\n  top: 30%;\n}\n.pl-range .slider-runnable-track[data-v-44e8ce28] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  height: 3px;\n  background: #EBEDFB;\n  border-radius: 2px;\n}\n.pl-range .slider-runnable-track .progress[data-v-44e8ce28],\n.pl-range .slider-runnable-track .thumb[data-v-44e8ce28] {\n  position: absolute;\n  z-index: 0;\n}\n.pl-range .slider-runnable-track .progress[data-v-44e8ce28] {\n  left: 0;\n  top: 0;\n  height: 3px;\n  border-radius: 2px;\n  background: #5074FF;\n}\n.pl-range .slider-runnable-track .thumb[data-v-44e8ce28] {\n  left: -0.8em;\n  top: -0.8em;\n  z-index: 2;\n  background: #FFF;\n  width: 1.6em;\n  height: 1.6em;\n  line-height: 1.6em;\n  text-align: center;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n.pl-range .pl-range-slot[data-v-44e8ce28] {\n  display: table;\n  width: 100%;\n  font-size: smaller;\n  color: #999;\n  line-height: 2em;\n}\n.pl-range .pl-range-slot .pl-range-prepend[data-v-44e8ce28],\n.pl-range .pl-range-slot .pl-range-append[data-v-44e8ce28] {\n  display: table-cell;\n}\n.pl-range .pl-range-slot .pl-range-prepend[data-v-44e8ce28] {\n  text-align: left;\n}\n.pl-range .pl-range-slot .pl-range-append[data-v-44e8ce28] {\n  text-align: right;\n}\n.pl-range-error[data-v-44e8ce28] {\n  padding: 0 0.5em;\n  color: #f56c6c;\n  line-height: 2em;\n}\n.pl-range.is-disabled .slider-runnable-track .progress[data-v-44e8ce28] {\n  background-color: #9D9FA8;\n}\n", ""]);



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0dd80ac3_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0dd80ac3_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0dd80ac3_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0dd80ac3_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* 设计稿尺寸 */\n/* 基础字体大小 */\n/* px转rem方法 */\n.pl-select[data-v-0dd80ac3] {\n  background-color: #fff;\n  padding: 0 1.2em;\n  line-height: normal;\n  overflow: hidden;\n}\n.pl-select-cell[data-v-0dd80ac3] {\n  display: flex;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n.pl-select--large[data-v-0dd80ac3] {\n  font-size: 1.2em;\n}\n.pl-select--small[data-v-0dd80ac3] {\n  font-size: 0.8em;\n}\n.pl-select--error[data-v-0dd80ac3] {\n  position: relative;\n}\n.pl-select-inner[data-v-0dd80ac3] {\n  padding: 1em 0;\n  flex: 1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pl-select-inner .placeholder[data-v-0dd80ac3] {\n  color: #9898B6;\n}\n.pl-select-label[data-v-0dd80ac3] {\n  padding-right: 0.4em;\n}\n.pl-select-label--require[data-v-0dd80ac3] {\n  position: relative;\n}\n.pl-select-label--require[data-v-0dd80ac3]::before {\n  position: absolute;\n  content: '*';\n  color: #f56c6c;\n  left: -0.6em;\n  top: 30%;\n}\n.pl-select-append[data-v-0dd80ac3],\n.pl-select-prepend[data-v-0dd80ac3] {\n  text-align: center;\n}\n.pl-select-append[data-v-0dd80ac3] {\n  padding-left: 0.4em;\n}\n.pl-select-prepend[data-v-0dd80ac3] {\n  padding-right: 0.4em;\n}\n.pl-select-clear[data-v-0dd80ac3] {\n  padding: 0 0.4em;\n}\n.pl-select-clear .icon-clear[data-v-0dd80ac3] {\n  width: 1.2em;\n  height: 1.2em;\n  vertical-align: bottom;\n}\n.pl-select-error[data-v-0dd80ac3] {\n  padding: 0 0.5em;\n  color: #f56c6c;\n  line-height: 2em;\n}\n.pl-select-icon .icon-arrow[data-v-0dd80ac3] {\n  display: block;\n  width: 0;\n  height: 0;\n  border: 3px solid;\n  border-color: transparent transparent currentColor currentColor;\n  transform: rotate(-45deg);\n  transform-origin: 0 0;\n  opacity: 0.6;\n}\n.pl-select.is-disabled[data-v-0dd80ac3] {\n  background-color: #ebebe4;\n}\n", ""]);



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_step_item_vue_vue_type_style_index_0_id_fd83a810_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_step_item_vue_vue_type_style_index_0_id_fd83a810_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_step_item_vue_vue_type_style_index_0_id_fd83a810_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_step_item_vue_vue_type_style_index_0_id_fd83a810_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* 设计稿尺寸 */\n/* 基础字体大小 */\n/* px转rem方法 */\n.pl-step[data-v-fd83a810] {\n  position: relative;\n}\n.pl-step .pl-step-circle[data-v-fd83a810] {\n  display: flex;\n  position: absolute;\n}\n.pl-step .icon-default[data-v-fd83a810] {\n  display: inline-block;\n}\n.pl-step--vertical[data-v-fd83a810] {\n  padding-left: 2em;\n  padding-bottom: 1em;\n}\n.pl-step--vertical .pl-step-title[data-v-fd83a810] {\n  text-align: left;\n}\n.pl-step--vertical .pl-step-circle[data-v-fd83a810] {\n  flex-direction: column;\n  width: 1.2em;\n  left: 0;\n  top: 0;\n  bottom: 0;\n}\n.pl-step--vertical .pl-step-circle .pl-step-line[data-v-fd83a810] {\n  width: 0.6em;\n  flex: 1;\n  margin-top: 0.2em;\n  border-right: 1px solid #F2F3F5;\n}\n.pl-step--vertical .pl-step-circle .icon-default[data-v-fd83a810] {\n  width: 1em;\n  height: 1em;\n  border: 0.3em solid transparent;\n  border-radius: 50%;\n  background-color: #DCDEE0;\n  background-clip: content-box;\n}\n.pl-step--horizontal[data-v-fd83a810] {\n  flex: 1;\n  padding-bottom: 2em;\n}\n.pl-step--horizontal .pl-step-title[data-v-fd83a810] {\n  text-align: center;\n}\n.pl-step--horizontal .pl-step-circle[data-v-fd83a810] {\n  flex-direction: row;\n  height: 1.2em;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  transform: translateX(calc(50% - 0.6em));\n}\n.pl-step--horizontal .pl-step-circle .pl-step-line[data-v-fd83a810] {\n  height: 0.6em;\n  flex: 1;\n  margin-left: 0.2em;\n  border-bottom: 1px solid #F2F3F5;\n}\n.pl-step--horizontal .pl-step-circle .icon-default[data-v-fd83a810] {\n  width: 0.5em;\n  height: 0.5em;\n  border-top: 1px solid #DCDEE0;\n  border-right: 1px solid #DCDEE0;\n  transform: rotate(45deg);\n  transform-origin: -50% 50%;\n}\n", ""]);



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02025656_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02025656_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02025656_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_02025656_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "/* 设计稿尺寸 */\n/* 基础字体大小 */\n/* px转rem方法 */\n.pl-steps[data-v-02025656] {\n  overflow: hidden;\n  width: 100%;\n  box-sizing: border-box;\n}\n.pl-steps .pl-steps-items[data-v-02025656] {\n  display: flex;\n}\n.pl-steps .pl-steps-toggle[data-v-02025656] {\n  width: 100%;\n  text-align: center;\n  font-size: 0.71111111rem;\n  color: #9898B6;\n  padding: 1em 0;\n}\n.pl-steps .pl-steps-toggle[data-v-02025656] .pl-icon {\n  vertical-align: text-bottom;\n  margin-right: 0.2em;\n}\n.pl-steps--horizontal .pl-steps-items[data-v-02025656] {\n  flex-direction: row;\n}\n.pl-steps--vertical .pl-steps-items[data-v-02025656] {\n  flex-direction: column;\n}\n.pl-steps--vertical .pl-steps-fold[data-v-02025656] .pl-step + .pl-step {\n  display: none;\n}\n", ""]);



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e9d26c76_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e9d26c76_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e9d26c76_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e9d26c76_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".pl-tabs[data-v-e9d26c76] {\n  display: grid;\n  width: 100%;\n}\n.pl-tabs .pl-tab-title[data-v-e9d26c76] {\n  grid-area: title;\n  overflow: hidden;\n  background-color: #fff;\n}\n.pl-tabs .pl-tab-title-inner[data-v-e9d26c76] {\n  display: grid;\n  transition: all 0.3s ease;\n}\n.pl-tabs .pl-tab-title-inner .tab-title[data-v-e9d26c76] {\n  color: #9898B6;\n  padding: 1em 1.2em;\n  white-space: nowrap;\n  text-align: center;\n  line-height: normal;\n}\n.pl-tabs .pl-tab-content[data-v-e9d26c76] {\n  grid-area: content;\n}\n.pl-tabs.is-top .pl-tab-title-inner[data-v-e9d26c76],\n.pl-tabs.is-bottom .pl-tab-title-inner[data-v-e9d26c76] {\n  grid-auto-flow: column;\n}\n.pl-tabs.is-top .pl-tab-title-inner .tab-line[data-v-e9d26c76],\n.pl-tabs.is-bottom .pl-tab-title-inner .tab-line[data-v-e9d26c76] {\n  padding: 0 1em;\n}\n.pl-tabs.is-right .pl-tab-title-inner[data-v-e9d26c76],\n.pl-tabs.is-left .pl-tab-title-inner[data-v-e9d26c76] {\n  grid-auto-flow: row;\n}\n.pl-tabs.is-right .pl-tab-title-inner .tab-line[data-v-e9d26c76],\n.pl-tabs.is-left .pl-tab-title-inner .tab-line[data-v-e9d26c76] {\n  padding: 1em 0;\n}\n.is-card .pl-tab-title-inner[data-v-e9d26c76] {\n  position: relative;\n}\n.is-card .pl-tab-title-inner .tab-line[data-v-e9d26c76] {\n  position: absolute;\n  transition: all 0.3s ease;\n  background-color: #5074FF;\n  background-clip: content-box;\n}\n.is-card .pl-tab-title-inner .is-active[data-v-e9d26c76] {\n  color: #1E3259;\n}\n.is-card .pl-tab-title-inner .is-disabled[data-v-e9d26c76] {\n  color: #9898B6;\n}\n.is-border-card .tab-title[data-v-e9d26c76] {\n  border: 1px solid #e4e7ed;\n}\n.is-border-card .tab-title.is-disabled[data-v-e9d26c76] {\n  background-color: #f6f6f6;\n}\n.is-border-card.is-top .tab-title + .tab-title[data-v-e9d26c76] {\n  border-left: 0 none;\n}\n.is-border-card.is-top .tab-title.is-active[data-v-e9d26c76] {\n  border-bottom: 0 none;\n}\n.is-border-card.is-bottom .tab-title + .tab-title[data-v-e9d26c76] {\n  border-left: 0 none;\n}\n.is-border-card.is-bottom .tab-title.is-active[data-v-e9d26c76] {\n  border-top: 0 none;\n}\n.is-border-card.is-left .tab-title + .tab-title[data-v-e9d26c76] {\n  border-top: 0 none;\n}\n.is-border-card.is-left .tab-title.is-active[data-v-e9d26c76] {\n  border-right: 0 none;\n}\n.is-border-card.is-right .tab-title + .tab-title[data-v-e9d26c76] {\n  border-top: 0 none;\n}\n.is-border-card.is-right .tab-title.is-active[data-v-e9d26c76] {\n  border-left: 0 none;\n}\n.is-button .pl-tab-title-inner .tab-title[data-v-e9d26c76] {\n  border: 1px solid #5074FF;\n  color: #5074FF;\n  padding: 0.6em 1em;\n}\n.is-button .pl-tab-title-inner .tab-title.is-active[data-v-e9d26c76] {\n  background-color: #5074FF;\n  color: #fff;\n}\n.is-button .pl-tab-title-inner .tab-title.is-disabled[data-v-e9d26c76] {\n  background-color: #E2E5F0;\n  border-color: #E2E5F0;\n}\n.is-button.is-top .tab-title[data-v-e9d26c76]:first-child,\n.is-button.is-bottom .tab-title[data-v-e9d26c76]:first-child {\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.is-button.is-top .tab-title[data-v-e9d26c76]:last-child,\n.is-button.is-bottom .tab-title[data-v-e9d26c76]:last-child {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.is-button.is-top .tab-title ~ .tab-title[data-v-e9d26c76],\n.is-button.is-bottom .tab-title ~ .tab-title[data-v-e9d26c76] {\n  border-left: 0 none;\n}\n.is-button.is-right .tab-title[data-v-e9d26c76]:first-child,\n.is-button.is-left .tab-title[data-v-e9d26c76]:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.is-button.is-right .tab-title[data-v-e9d26c76]:last-child,\n.is-button.is-left .tab-title[data-v-e9d26c76]:last-child {\n  border-bottom-left-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.is-button.is-right .tab-title ~ .tab-title[data-v-e9d26c76],\n.is-button.is-left .tab-title ~ .tab-title[data-v-e9d26c76] {\n  border-top: 0 none;\n}\n.is-top[data-v-e9d26c76] {\n  grid-template-rows: auto 1fr;\n  grid-template-areas: 'title' 'content';\n}\n.is-top.is-card .pl-tab-title[data-v-e9d26c76] {\n  border-bottom: 1px solid #EFF2F5;\n}\n.is-top.is-card .pl-tab-title .tab-line[data-v-e9d26c76] {\n  bottom: -1px;\n}\n.is-bottom[data-v-e9d26c76] {\n  grid-template-rows: 1fr auto;\n  grid-template-areas: 'content' 'title';\n}\n.is-bottom.is-card .pl-tab-title[data-v-e9d26c76] {\n  border-top: 1px solid #EFF2F5;\n}\n.is-bottom.is-card .pl-tab-title .tab-line[data-v-e9d26c76] {\n  top: -1px;\n}\n.is-left[data-v-e9d26c76] {\n  grid-template-columns: auto 1fr;\n  grid-template-areas: 'title content';\n}\n.is-left.is-card .pl-tab-title[data-v-e9d26c76] {\n  border-right: 1px solid #EFF2F5;\n}\n.is-left.is-card .pl-tab-title .tab-line[data-v-e9d26c76] {\n  right: -1px;\n}\n.is-right[data-v-e9d26c76] {\n  grid-template-columns: 1fr auto;\n  grid-template-areas: 'content title';\n}\n.is-right.is-card .pl-tab-title[data-v-e9d26c76] {\n  border-left: 1px solid #EFF2F5;\n}\n.is-right.is-card .pl-tab-title .tab-line[data-v-e9d26c76] {\n  left: -1px;\n}\n", ""]);



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/pdf.57b4050.png";

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_be4dbcf0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_be4dbcf0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_be4dbcf0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_be4dbcf0_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, ".pl-upload .rows[data-v-be4dbcf0] {\n  width: 100%;\n  display: grid;\n  grid-gap: 1em;\n}\n.pl-upload .rows .cols[data-v-be4dbcf0] {\n  position: relative;\n  height: 0;\n  padding-bottom: 100%;\n}\n.pl-upload .rows .cols .pl-file-preview[data-v-be4dbcf0],\n.pl-upload .rows .cols .pl-upload-button[data-v-be4dbcf0] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.pl-upload .pl-file-preview .pl-upload-img[data-v-be4dbcf0] {\n  width: 100%;\n  height: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%;\n  border-radius: 4px;\n}\n.pl-upload .pl-file-preview .pl-upload-del[data-v-be4dbcf0] {\n  padding: 1em;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: translate(50%, -50%);\n  color: #ccc;\n}\n.pl-upload .pl-upload-button .file-input[data-v-be4dbcf0] {\n  position: absolute;\n  z-index: 9999;\n  -webkit-appearance: none;\n  opacity: 0;\n  width: 100%;\n  height: 100%;\n}\n.pl-upload .pl-upload-button .pl-add-button[data-v-be4dbcf0] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #EBEDFB;\n  color: #EBEDFB;\n  width: 100%;\n  height: 100%;\n}\n.pl-upload .pl-upload-button .pl-add-button .pl-upload-add[data-v-be4dbcf0] {\n  font-size: 2em;\n}\n.pl-upload .pl-preview-dialog[data-v-be4dbcf0] {\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background: rgba(0, 0, 0, 0.5);\n}\n.pl-upload .pl-preview-dialog .preview-list[data-v-be4dbcf0] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 10;\n  list-style: none;\n  transition: all 0.3s ease;\n}\n.pl-upload .pl-preview-dialog .preview-list .preview-item[data-v-be4dbcf0] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-position: 50% 50%;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n.pl-upload .pl-preview-dialog .preview-index[data-v-be4dbcf0] {\n  position: absolute;\n  z-index: 11;\n  left: 0;\n  top: 1em;\n  width: 100%;\n  text-align: center;\n  color: #fff;\n}\n", ""]);



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/loading.vue?vue&type=template&id=04d57055&scoped=true&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "pl-loading",
      class: [_vm.vertical ? "pl-loading-vertical" : "pl-loading-horizontal"]
    },
    [
      _c("div", { staticClass: "loading-icon" }, [
        _c(
          "svg",
          {
            attrs: { viewBox: "0 0 38 38", xmlns: "http://www.w3.org/2000/svg" }
          },
          [
            _c("g", { attrs: { fill: "none", "fill-rule": "evenodd" } }, [
              _c(
                "g",
                { attrs: { transform: "translate(1 1)", "stroke-width": "2" } },
                [
                  _c("circle", {
                    attrs: {
                      "stroke-opacity": ".5",
                      cx: "18",
                      cy: "18",
                      r: "18"
                    }
                  }),
                  _c(
                    "path",
                    { attrs: { d: "M36 18c0-9.94-8.06-18-18-18" } },
                    [
                      _c("animateTransform", {
                        attrs: {
                          attributeName: "transform",
                          type: "rotate",
                          from: "0 18 18",
                          to: "360 18 18",
                          dur: "1s",
                          repeatCount: "indefinite"
                        }
                      })
                    ],
                    1
                  )
                ]
              )
            ])
          ]
        )
      ]),
      _c("span", { staticClass: "loading-text" }, [_vm._t("default")], 2)
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./packages/loading/loading.vue?vue&type=template&id=04d57055&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/loading/loading.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// loading
/* harmony default export */ var loadingvue_type_script_lang_js_ = ({
  name: 'plLoading',
  componentName: 'plLoading',
  props: {
    vertical: Boolean
  }
});
// CONCATENATED MODULE: ./packages/loading/loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var loading_loadingvue_type_script_lang_js_ = (loadingvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/loading/loading.vue?vue&type=style&index=0&id=04d57055&lang=less&scoped=true&
var loadingvue_type_style_index_0_id_04d57055_lang_less_scoped_true_ = __webpack_require__(25);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/loading/loading.vue






/* normalize component */

var component = normalizeComponent(
  loading_loadingvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "04d57055",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "packages/loading/loading.vue"
/* harmony default export */ var loading = (component.exports);
// CONCATENATED MODULE: ./packages/loading/index.js



// loading
var loading_loading = vue_runtime_esm["a" /* default */].extend({
  components: {
    plLoading: loading
  },
  render: function render(createElement) {
    return createElement('div', {
      class: 'loading',
      style: {
        display: this.isShow ? 'flex' : 'none',
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
      }
    }, [createElement('plLoading', {
      props: {
        vertical: this.vertical
      },
      style: {
        color: '#fff',
        margin: 'auto'
      }
    }, this.text)]);
  }
});

var loadingDom = new loading_loading({
  el: document.createElement('div'),
  data: function data() {
    return {
      vertical: true,
      isShow: false,
      text: ''
    };
  }
});

var loadingCount = 0;

function showLoading(text, vertical) {
  loadingCount++;
  loadingDom.isShow = true;
  loadingDom.text = text;
  if (typeof vertical === 'boolean') {
    loadingDom.vertical = vertical;
  }
}

function hideLoading() {
  loadingCount--;
  loadingDom.isShow = loadingCount > 0;
}

/* harmony default export */ var packages_loading = (function () {
  vue_runtime_esm["a" /* default */].prototype.$loadingShow = showLoading;
  vue_runtime_esm["a" /* default */].prototype.$loadingHide = hideLoading;
  document.body.appendChild(loadingDom.$el);
});
// CONCATENATED MODULE: ./packages/message/alert.js


// alert
var Alert = vue_runtime_esm["a" /* default */].extend({
  render: function render(createElement) {
    var _this = this;

    return createElement('div', {
      class: 'pl-alert',
      style: {
        display: this.display,
        position: 'fixed',
        zIndex: 9999,
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        transition: 'all 0.3s ease',
        opacity: this.visible ? 1 : 0
      }
    }, [createElement('div', {
      class: 'pl-alert-inner',
      style: {
        margin: 'auto',
        width: '80%',
        paddingTop: '1em',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '0.5em'
      }
    }, [createElement('div', {
      class: 'pl-alert-title',
      style: {
        color: '#333',
        paddingBottom: '1em',
        fontWeight: '700'
      }
    }, this.title), createElement('div', {
      class: 'pl-alert-content',
      domProps: this.html ? { innerHTML: this.message } : null,
      style: {
        color: '#666',
        lineHeight: '1.5em',
        padding: '0 1em 1em',
        borderBottom: '1px solid #EBEDFB'
      }
    }, this.html ? null : this.message), createElement('div', {
      class: 'pl-alert-button',
      on: {
        click: function click() {
          _this.confirm();
        }
      },
      style: {
        color: '#5074FF',
        lineHeight: '3em',
        fontWeight: '700'
      }
    }, this.buttonText)])]);
  },

  data: function data() {
    return {
      display: 'none',
      visible: false,
      timer: null,

      title: '', // 弹框标题
      message: '', // 弹框主体信息
      html: false, // 是否显示为HTML
      buttonText: '', // 按钮文字
      action: function action() {} // 确认回调
    };
  },
  methods: {
    confirm: function confirm() {
      if (typeof this.action === 'function') {
        this.action();
      }
      this.hide();
    },
    show: function show() {
      var _this2 = this;

      this.display = 'flex';
      this.$nextTick(function () {
        _this2.visible = true;
      });
    },
    hide: function hide() {
      var _this3 = this;

      this.visible = false;
      setTimeout(function () {
        _this3.display = 'none';
      }, 300);
    }
  }
});

var alertDom = new Alert({
  el: document.createElement('div')
});

function showAlert(_ref) {
  var title = _ref.title,
      message = _ref.message,
      html = _ref.html,
      buttonText = _ref.buttonText,
      action = _ref.action;

  alertDom.title = title || '';
  alertDom.message = message || '';
  alertDom.html = !!html;
  alertDom.buttonText = buttonText || '好';
  alertDom.action = action || null;
  alertDom.show();
}

/* harmony default export */ var message_alert = (function () {
  vue_runtime_esm["a" /* default */].prototype.$alert = showAlert;
  document.body.appendChild(alertDom.$el);
});
// CONCATENATED MODULE: ./packages/message/confirm.js


// confirm
var Confirm = vue_runtime_esm["a" /* default */].extend({
  render: function render(createElement) {
    var _this = this;

    return createElement('div', {
      class: 'pl-confirm',
      style: {
        display: this.display,
        position: 'fixed',
        zIndex: 9999,
        left: '0',
        top: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        transition: 'all 0.3s ease',
        opacity: this.visible ? 1 : 0
      }
    }, [createElement('div', {
      class: 'pl-confirm-inner',
      style: {
        margin: 'auto',
        width: '80%',
        paddingTop: '1em',
        textAlign: 'center',
        backgroundColor: '#fff',
        borderRadius: '0.5em'
      }
    }, [createElement('div', {
      class: 'pl-confirm-title',
      style: {
        color: '#333',
        paddingBottom: '1em',
        fontWeight: '700'
      }
    }, this.title), createElement('div', {
      class: 'pl-confirm-content',
      domProps: this.html ? { innerHTML: this.message } : null,
      style: {
        color: '#666',
        lineHeight: '1.5em',
        padding: '0 1em 1em',
        borderBottom: '1px solid #EBEDFB'
      }
    }, this.html ? null : this.message), createElement('div', {
      class: 'pl-confirm-button-wrap',
      style: {
        lineHeight: '3em',
        display: 'table',
        width: '100%',
        fontWeight: '700'
      }
    }, [createElement('div', {
      class: 'pl-confirm-button-cancel',
      style: {
        color: '#333',
        display: 'table-cell',
        width: '50%',
        borderRight: '1px solid #EBEDFB'
      },
      on: {
        click: function click() {
          _this.onCancel();
        }
      }
    }, this.cancelText), createElement('div', {
      class: 'pl-confirm-button-submit',
      style: {
        color: '#5074FF',
        display: 'table-cell',
        width: '50%'
      },
      on: {
        click: function click() {
          _this.onSubmit();
        }
      }
    }, this.submitText)])])]);
  },

  data: function data() {
    return {
      display: 'none',
      visible: false,
      timer: null,

      title: '', // 弹框标题
      message: '', // 弹框主体信息
      html: false, // 是否显示为HTML
      submitText: '', // 提交按钮文字
      cancelText: '', // 取消按钮文字
      submit: function submit() {}, // 确认回调
      cancel: function cancel() {} // 取消回调
    };
  },
  methods: {
    onSubmit: function onSubmit() {
      if (typeof this.submit === 'function') {
        this.submit();
      }
      this.hide();
    },
    onCancel: function onCancel() {
      if (typeof this.cancel === 'function') {
        this.cancel();
      }
      this.hide();
    },
    show: function show() {
      var _this2 = this;

      this.display = 'flex';
      this.$nextTick(function () {
        _this2.visible = true;
      });
    },
    hide: function hide() {
      var _this3 = this;

      this.visible = false;
      setTimeout(function () {
        _this3.display = 'none';
      }, 300);
    }
  }
});

var confirmDom = new Confirm({
  el: document.createElement('div')
});

function showConfirm(_ref) {
  var title = _ref.title,
      message = _ref.message,
      html = _ref.html,
      submitText = _ref.submitText,
      cancelText = _ref.cancelText,
      submit = _ref.submit,
      cancel = _ref.cancel;

  confirmDom.title = title || '';
  confirmDom.message = message || '';
  confirmDom.html = !!html;
  confirmDom.submitText = submitText || '确认';
  confirmDom.cancelText = cancelText || '取消';
  confirmDom.submit = submit || null;
  confirmDom.cancel = cancel || null;
  confirmDom.show();
}

/* harmony default export */ var message_confirm = (function () {
  vue_runtime_esm["a" /* default */].prototype.$confirm = showConfirm;
  document.body.appendChild(confirmDom.$el);
});
// CONCATENATED MODULE: ./packages/message/toast.js


// toast
var Toast = vue_runtime_esm["a" /* default */].extend({
  render: function render(createElement) {
    return createElement('div', {
      class: 'pl-toast',
      style: {
        display: this.display,
        position: 'fixed',
        zIndex: 9999,
        left: '50%',
        top: '75%',
        backgroundColor: 'rgba(0,0,0,0.5)',
        color: '#d6d6d6',
        borderRadius: '3px',
        padding: '0.3em 1em',
        lineHeight: 'normal',
        textAlign: 'center',
        maxWidth: '90%',
        wordBreak: 'break-all',
        transform: 'translate(-50%, -50%)',
        transition: 'all 0.3s ease',
        opacity: this.visible ? 1 : 0
      }
    }, this.text);
  },

  data: function data() {
    return {
      display: 'none',
      visible: false,
      timer: null,
      duration: 3000,
      text: ''
    };
  },
  methods: {
    show: function show() {
      var _this = this;

      this.display = 'block';
      this.$nextTick(function () {
        _this.visible = true;
      });

      clearTimeout(this.timer);
      this.timer = setTimeout(function () {
        _this.hide();
      }, this.duration);
    },
    hide: function hide() {
      var _this2 = this;

      this.visible = false;
      setTimeout(function () {
        _this2.display = 'none';
      }, 300);
    }
  }
});

var toastDom = new Toast({
  el: document.createElement('div')
});

function showToast(text, duration) {
  toastDom.text = text;
  if (typeof duration === 'number') {
    toastDom.duration = duration;
  }
  toastDom.show();
}

/* harmony default export */ var toast = (function () {
  vue_runtime_esm["a" /* default */].prototype.$toast = showToast;
  document.body.appendChild(toastDom.$el);
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/index.vue?vue&type=template&id=cf1b9d0e&scoped=true&
var buttonvue_type_template_id_cf1b9d0e_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    _vm._g(
      _vm._b(
        {
          staticClass: "pl-button",
          class: [
            _vm.type ? "pl-button--" + _vm.type : "",
            _vm.size ? "pl-button--" + _vm.size : "",
            {
              "is-disabled": _vm.disabled,
              "is-round": _vm.round,
              "is-circle": _vm.circle
            }
          ],
          attrs: { disabled: _vm.disabled }
        },
        "button",
        _vm.$props,
        false
      ),
      _vm.$listeners
    ),
    [_vm._t("default")],
    2
  )
}
var buttonvue_type_template_id_cf1b9d0e_scoped_true_staticRenderFns = []
buttonvue_type_template_id_cf1b9d0e_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/button/index.vue?vue&type=template&id=cf1b9d0e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/button/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var buttonvue_type_script_lang_js_ = ({
  name: 'plButton',
  componentName: 'plButton',
  props: {
    size: { // 尺寸 可选值：normal，small，lager
      type: String,
      default: 'normal'
    },
    type: { // 类型 可选值：default，primary，success，warning，danger，text
      type: String,
      default: 'default'
    },
    round: Boolean, // 是否圆角按钮 boolean
    circle: Boolean, // 是否圆形按钮 boolean
    disabled: Boolean // 是否禁用状态 boolean
  }
});
// CONCATENATED MODULE: ./packages/button/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_buttonvue_type_script_lang_js_ = (buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/button/index.vue?vue&type=style&index=0&id=cf1b9d0e&lang=less&scoped=true&
var buttonvue_type_style_index_0_id_cf1b9d0e_lang_less_scoped_true_ = __webpack_require__(30);

// CONCATENATED MODULE: ./packages/button/index.vue






/* normalize component */

var button_component = normalizeComponent(
  packages_buttonvue_type_script_lang_js_,
  buttonvue_type_template_id_cf1b9d0e_scoped_true_render,
  buttonvue_type_template_id_cf1b9d0e_scoped_true_staticRenderFns,
  false,
  null,
  "cf1b9d0e",
  null
  
)

/* hot reload */
if (false) { var button_api; }
button_component.options.__file = "packages/button/index.vue"
/* harmony default export */ var packages_button = (button_component.exports);
// CONCATENATED MODULE: ./packages/button/index.js


/* istanbul ignore next */
packages_button.install = function (Vue) {
  Vue.component(packages_button.name, packages_button);
};

/* harmony default export */ var packages_button_0 = (packages_button);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/cell/index.vue?vue&type=template&id=ffcfdaae&scoped=true&
var cellvue_type_template_id_ffcfdaae_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pl-cell", style: _vm.rowStyle },
    [_vm._t("default")],
    2
  )
}
var cellvue_type_template_id_ffcfdaae_scoped_true_staticRenderFns = []
cellvue_type_template_id_ffcfdaae_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/cell/index.vue?vue&type=template&id=ffcfdaae&scoped=true&

// CONCATENATED MODULE: ./src/assets/utils/index.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* 將字符串转换成日期对象
 * @param {Date, String} dateStr
 */
function getDateFromString(dateStr) {
  var date = null;

  if (dateStr instanceof Date) {
    date = new Date(dateStr);
  } else if (/^(string|number)$/.test(typeof dateStr === 'undefined' ? 'undefined' : _typeof(dateStr))) {
    // 匹配日期
    var matchDate = /(\d{4})([年/-])(\d{1,2})(月|\2)(\d{1,2})/.exec(dateStr);

    if (matchDate) {
      date = new Date([matchDate[1], matchDate[3], matchDate[5]].join('/'));

      // 匹配时间
      var matchTime = /\d{1,2}(:\d{1,2}){1,2}/.exec(dateStr);

      if (!!date.getTime() && matchTime && matchTime[0]) {
        date.setHours.apply(date, matchTime[0].split(':'));
      }
    } else {
      if (/^\d+$/.test(dateStr)) {
        dateStr -= 0;
      }
      // 时间戳或其他格式
      date = new Date(dateStr);
    }
  }

  return String(date) === 'Invalid Date' ? null : date;
}

/* 將日期对象转换成字符串
 * @param {Date, timestamp} date
 * @param {String} format
 */
function getDateString(date) {
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Y-M-D';

  date = getDateFromString(date);

  if (!date) {
    return '';
  }

  var padStr = function padStr(str) {
    return String(str).padStart(2, '0');
  };

  var weeks = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
  var weeks2 = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

  if (date.toString() !== 'Invalid Date') {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var week = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    return format.replace(/y+/ig, year).replace(/m+/g, month).replace(/d+/g, day).replace(/M+/g, padStr(month)).replace(/D+/g, padStr(day)).replace(/h+/g, hours).replace(/i+/g, minutes).replace(/s+/g, seconds).replace(/H+/g, padStr(hours)).replace(/I+/g, padStr(minutes)).replace(/S+/g, padStr(seconds)).replace(/w+/g, weeks[week]).replace(/W+/g, weeks2[week]);
  } else {
    return '';
  }
}

// 获取基于baseTime的n天后的日期，如果没有baseTime则默认今天之后的日期
function getRangeDate(day, format, baseTime) {
  day = day | 0 || 0;

  var date = void 0;
  if (baseTime) {
    date = getDateFromString(baseTime);
  } else {
    date = new Date();
  }

  date.setHours(0, 0, 0, 0);
  date.setDate(date.getDate() + day);

  if (format) {
    return getDateString(date, format);
  } else {
    return date;
  }
}

// 获取一个月的天数
function getMonthDays(yy, mm) {
  yy = Number(yy);
  mm = Number(mm);
  var getCheckYear = function getCheckYear(yy) {
    return yy % 100 === 0 ? yy % 400 === 0 : yy % 4 === 0;
  };

  if (getCheckYear(yy) && mm === 2) {
    return 29;
  }

  if (!getCheckYear(yy) && mm === 2) {
    return 28;
  }

  if (mm === 4 || mm === 6 || mm === 9 || mm === 11) {
    return 30;
  }

  return 31;
}

/* 比较两个日期相差的天数 */
function getDayDiff(date1, date2) {
  var _date1 = getDateFromString(date1);
  var _date2 = getDateFromString(date2);

  _date1.setHours(0, 0, 0, 0);
  _date2.setHours(0, 0, 0, 0);

  return Math.ceil((_date2 - _date1) / 86400000);
}

/* 比较两个日期相差的月份 */
function getMonthDiff(date1, date2) {
  var year1 = new Date(date1).getFullYear();
  var month1 = new Date(date1).getMonth();
  var day1 = new Date(date1).getDate();
  var year2 = new Date(date2).getFullYear();
  var month2 = new Date(date2).getMonth();
  var day2 = new Date(date2).getDate();

  var diff = void 0;
  if (year1 === year2) {
    diff = month2 - month1;
  } else {
    diff = (year2 - year1) * 12 + month2 - month1;
  }

  if (day2 >= day1) {
    diff++;
  }
  return diff;
}

/* 类型判断 */
function is(target) {
  var typeString = Object.prototype.toString.call(target).match(/\[object (\w+)\]/)[1].toLowerCase();

  for (var _len = arguments.length, type = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    type[_key - 1] = arguments[_key];
  }

  return type.indexOf(typeString) > -1;
}

// 验证方法
/** 支持的属性
 * trigger: 'change',
 * type: 'string|number|boolean|function',
 * required: true,
 * message: '',
 * pattern: / /,
 * validator: function (rule, value, callback) {},
 * length: 0,
 * range: {min: 0, max: 0}
 */
function utils_validate(rule, value) {
  return new Promise(function (resolve, reject) {
    if (is(rule.validator, 'function')) {
      rule.validator(rule, value, function (err) {
        if (err) {
          reject(err.message);
        }
      });
    }

    if (!rule.required && (is(value, 'null', 'undefined') || value === '')) {
      resolve();
    } else if (rule.required && (is(value, 'null', 'undefined') || value === '')) {
      reject(rule.message);
    } else {
      if (is(rule.type, 'string') && !is(value, rule.type)) {
        reject(rule.message);
      }

      if (is(rule.pattern, 'regexp') && !rule.pattern.test(value)) {
        reject(rule.message);
      }

      if (is(rule.length, 'number')) {
        if ((is(value, 'string') || is(value, 'number')) && String(value).length !== rule.length) {
          reject(rule.message);
        }
        if (is(value, 'array') && value.length !== rule.length) {
          reject(rule.message);
        }
      }
      if (is(rule.range, 'object') && is(rule.range.min, 'number') && is(rule.range.max, 'number') && (value > rule.range.max || value < rule.range.min)) {
        reject(rule.message);
      }

      resolve();
    }
  });
}
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/cell/index.vue?vue&type=script&lang=js&
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//



/* harmony default export */ var cellvue_type_script_lang_js_ = ({
  name: 'plCell',
  componentName: 'plCell',
  props: {
    direction: { // 排列方式  column，row
      type: String,
      default: function _default() {
        return 'row';
      }
    },
    span: Array,
    gap: String,
    justifyContent: {
      type: String, // 横向排列方式：stretch | start | end | center | space-between | space-around | space-evenly
      default: function _default() {
        return 'space-evenly';
      }
    },
    alignContent: {
      type: String, // 纵向排列方式：stretch | start | end | center | space-between | space-around | space-evenly
      default: function _default() {
        return 'center';
      }
    }
  },
  computed: {
    templates: function templates() {
      if (this.span && this.span.length) {
        return this.span.filter(function (item) {
          return item && (is(item, 'string') || is(item, 'number'));
        }).map(function (item) {
          if (is(item, 'number')) {
            return item + 'fr';
          } else {
            return item;
          }
        }).join(' ');
      }
      return null;
    },
    rowStyle: function rowStyle() {
      var _ref, _ref2;

      return _extends({}, this.templates ? (_ref = {}, _ref[this.direction === 'row' ? 'grid-template-columns' : 'grid-template-rows'] = this.templates, _ref) : null, this.gap ? (_ref2 = {}, _ref2[this.direction === 'row' ? 'grid-column-gap' : 'grid-row-gap'] = this.gap, _ref2) : null, this.justifyContent ? { 'justify-content': this.justifyContent } : null, this.alignContent ? { 'align-content': this.alignContent } : null);
    }
  }
});
// CONCATENATED MODULE: ./packages/cell/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_cellvue_type_script_lang_js_ = (cellvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/cell/index.vue?vue&type=style&index=0&id=ffcfdaae&lang=less&scoped=true&
var cellvue_type_style_index_0_id_ffcfdaae_lang_less_scoped_true_ = __webpack_require__(32);

// CONCATENATED MODULE: ./packages/cell/index.vue






/* normalize component */

var cell_component = normalizeComponent(
  packages_cellvue_type_script_lang_js_,
  cellvue_type_template_id_ffcfdaae_scoped_true_render,
  cellvue_type_template_id_ffcfdaae_scoped_true_staticRenderFns,
  false,
  null,
  "ffcfdaae",
  null
  
)

/* hot reload */
if (false) { var cell_api; }
cell_component.options.__file = "packages/cell/index.vue"
/* harmony default export */ var cell = (cell_component.exports);
// CONCATENATED MODULE: ./packages/cell/index.js


/* istanbul ignore next */
cell.install = function (Vue) {
  Vue.component(cell.name, cell);
};

/* harmony default export */ var packages_cell = (cell);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/index.vue?vue&type=template&id=5bbba9ca&scoped=true&
var checkboxvue_type_template_id_5bbba9ca_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "pl-checkbox",
      class: [
        _vm.size ? "pl-checkbox--" + _vm.size : "",
        {
          "is-vertical": _vm.vertical,
          "is-disabled": _vm.disabled,
          "pl-checkbox--error": _vm.ruleMessage
        }
      ]
    },
    [
      _c("div", { staticClass: "pl-checkbox-cell" }, [
        _vm.label
          ? _c(
              "div",
              {
                staticClass: "pl-checkbox-label",
                class: { "pl-checkbox-label--require": _vm.required },
                style: { width: _vm.labelWidth }
              },
              [_vm._t("label", [_vm._v(_vm._s(_vm.label))])],
              2
            )
          : _vm._e(),
        _c(
          "div",
          { staticClass: "pl-checkbox-inner" },
          [
            _vm.data && _vm.data.length
              ? _vm._l(_vm.data, function(item, i) {
                  return _c(
                    "div",
                    {
                      key: i,
                      staticClass: "pl-checkbox-item",
                      class: {
                        "is-button": _vm.button,
                        "is-vertical": _vm.vertical
                      }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.currentValue,
                            expression: "currentValue"
                          }
                        ],
                        attrs: {
                          type: "checkbox",
                          disabled: _vm.disabled || item[_vm.prop.disabled]
                        },
                        domProps: {
                          value: item[_vm.prop.value],
                          checked: Array.isArray(_vm.currentValue)
                            ? _vm._i(_vm.currentValue, item[_vm.prop.value]) >
                              -1
                            : _vm.currentValue
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$a = _vm.currentValue,
                                $$el = $event.target,
                                $$c = $$el.checked ? true : false
                              if (Array.isArray($$a)) {
                                var $$v = item[_vm.prop.value],
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.currentValue = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.currentValue = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.currentValue = $$c
                              }
                            },
                            _vm.emit
                          ]
                        }
                      }),
                      !_vm.button
                        ? _c("icon", {
                            staticClass: "pl-checkbox-icon icon-unchecked",
                            attrs: { name: "icon-kongjianweixuan" }
                          })
                        : _vm._e(),
                      !_vm.button
                        ? _c("icon", {
                            staticClass: "pl-checkbox-icon icon-checked",
                            attrs: { name: "icon-kongjianxuanzhong" }
                          })
                        : _vm._e(),
                      _c(
                        "span",
                        { staticClass: "pl-checkbox-text" },
                        [
                          _vm._t(
                            "default",
                            [_vm._v(_vm._s(item[_vm.prop.label]))],
                            { item: item }
                          )
                        ],
                        2
                      )
                    ],
                    1
                  )
                })
              : [
                  _c(
                    "div",
                    {
                      staticClass: "pl-checkbox-item",
                      class: {
                        "is-button": _vm.button,
                        "is-vertical": _vm.vertical
                      }
                    },
                    [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.currentValue,
                            expression: "currentValue"
                          }
                        ],
                        attrs: {
                          type: "checkbox",
                          disabled: _vm.disabled,
                          "true-value": _vm.trueValue,
                          "false-value": _vm.falseValue
                        },
                        domProps: {
                          checked: Array.isArray(_vm.currentValue)
                            ? _vm._i(_vm.currentValue, null) > -1
                            : _vm._q(_vm.currentValue, _vm.trueValue)
                        },
                        on: {
                          change: [
                            function($event) {
                              var $$a = _vm.currentValue,
                                $$el = $event.target,
                                $$c = $$el.checked
                                  ? _vm.trueValue
                                  : _vm.falseValue
                              if (Array.isArray($$a)) {
                                var $$v = null,
                                  $$i = _vm._i($$a, $$v)
                                if ($$el.checked) {
                                  $$i < 0 &&
                                    (_vm.currentValue = $$a.concat([$$v]))
                                } else {
                                  $$i > -1 &&
                                    (_vm.currentValue = $$a
                                      .slice(0, $$i)
                                      .concat($$a.slice($$i + 1)))
                                }
                              } else {
                                _vm.currentValue = $$c
                              }
                            },
                            _vm.emit
                          ]
                        }
                      }),
                      !_vm.button
                        ? _c("icon", {
                            staticClass: "pl-checkbox-icon icon-unchecked",
                            attrs: { name: "icon-kongjianweixuan" }
                          })
                        : _vm._e(),
                      !_vm.button
                        ? _c("icon", {
                            staticClass: "pl-checkbox-icon icon-checked",
                            attrs: { name: "icon-kongjianxuanzhong" }
                          })
                        : _vm._e(),
                      _c(
                        "span",
                        { staticClass: "pl-checkbox-text" },
                        [_vm._t("default")],
                        2
                      )
                    ],
                    1
                  )
                ]
          ],
          2
        )
      ]),
      _vm.ruleMessage
        ? _c("div", { staticClass: "pl-checkbox-error" }, [
            _vm._v(_vm._s(_vm.ruleMessage))
          ])
        : _vm._e()
    ]
  )
}
var checkboxvue_type_template_id_5bbba9ca_scoped_true_staticRenderFns = []
checkboxvue_type_template_id_5bbba9ca_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/checkbox/index.vue?vue&type=template&id=5bbba9ca&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon/index.vue?vue&type=template&id=2f231500&scoped=true&
var iconvue_type_template_id_2f231500_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "i",
    _vm._g({ staticClass: "pl-icon", style: _vm.style }, _vm.$listeners),
    [
      _vm.name && !_vm.src
        ? _c(
            "svg",
            { staticClass: "icon-svg", attrs: { "aria-hidden": "true" } },
            [
              _c("use", {
                attrs: {
                  fill: _vm.fill,
                  stroke: _vm.stroke,
                  "xlink:href": "#" + _vm.name
                }
              })
            ]
          )
        : _vm._e()
    ]
  )
}
var iconvue_type_template_id_2f231500_scoped_true_staticRenderFns = []
iconvue_type_template_id_2f231500_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/icon/index.vue?vue&type=template&id=2f231500&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/icon/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var iconvue_type_script_lang_js_ = ({
  name: 'plIcon',
  componentName: 'plIcon',

  props: {
    name: { // iconfont name
      type: String,
      default: ''
    },
    src: { // 图标链接
      type: String,
      default: ''
    },
    fill: String, // svg 填充颜色
    stroke: String // svg 描边颜色
  },
  computed: {
    style: function style() {
      if (this.src) {
        return {
          backgroundImage: 'url(' + this.src + ')'
        };
      } else {
        return null;
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/icon/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_iconvue_type_script_lang_js_ = (iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/icon/index.vue?vue&type=style&index=0&id=2f231500&lang=less&scoped=true&
var iconvue_type_style_index_0_id_2f231500_lang_less_scoped_true_ = __webpack_require__(34);

// CONCATENATED MODULE: ./packages/icon/index.vue






/* normalize component */

var icon_component = normalizeComponent(
  packages_iconvue_type_script_lang_js_,
  iconvue_type_template_id_2f231500_scoped_true_render,
  iconvue_type_template_id_2f231500_scoped_true_staticRenderFns,
  false,
  null,
  "2f231500",
  null
  
)

/* hot reload */
if (false) { var icon_api; }
icon_component.options.__file = "packages/icon/index.vue"
/* harmony default export */ var icon = (icon_component.exports);
// CONCATENATED MODULE: ./packages/icon/index.js


/* istanbul ignore next */
icon.install = function (Vue) {
  Vue.component(icon.name, icon);
};

/* harmony default export */ var packages_icon = (icon);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/checkbox/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// checkbox
/* harmony default export */ var checkboxvue_type_script_lang_js_ = ({
  name: 'plCheckbox',
  componentName: 'plCheckbox',
  components: {
    icon: packages_icon
  },
  props: {
    rules: { // 验证规则
      type: Array,
      default: function _default() {
        return [];
      }
    },
    size: { // 尺寸 可选值为 normal，large, small
      type: String,
      default: 'normal'
    },
    data: { // 单选选项
      type: Array,
      default: function _default() {
        return [];
      }
    },
    prop: { // key与value
      type: Object,
      default: function _default() {
        return { label: 'label', value: 'value', disabled: 'disabled' };
      }
    },
    value: {
      default: null
    },
    trueValue: {
      default: null
    },
    falseValue: {
      default: null
    },
    disabled: Boolean, // 禁用
    required: Boolean, // 必填 *号
    button: Boolean, // 是否是按钮样式
    vertical: Boolean, // 是否是竖向排列
    label: String, // 左侧 label
    labelWidth: String // label 宽度
  },
  data: function data() {
    return {
      currentValue: this.value === undefined ? '' : this.value,
      ruleMessage: '' // 验证错误提示信息
    };
  },

  computed: {},
  mounted: function mounted() {},

  methods: {
    // 手动验证方法
    validate: function validate() {
      var _this = this;

      return Promise.all(this.rules.map(function (rule) {
        return utils_validate(rule, _this.currentValue);
      })).then(function () {
        _this.ruleMessage = '';
        return Promise.resolve();
      }).catch(function (e) {
        _this.ruleMessage = e;
        return Promise.reject(e);
      });
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) {
        return false;
      }
      this.currentValue = value;
    },
    emit: function emit() {
      this.validate();
      this.$emit('input', this.currentValue);
      this.$emit('change', this.currentValue);
    }
  },
  watch: {
    'value': function value(val) {
      this.setCurrentValue(val);
    }
  }
});
// CONCATENATED MODULE: ./packages/checkbox/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_checkboxvue_type_script_lang_js_ = (checkboxvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/checkbox/index.vue?vue&type=style&index=0&id=5bbba9ca&lang=less&scoped=true&
var checkboxvue_type_style_index_0_id_5bbba9ca_lang_less_scoped_true_ = __webpack_require__(36);

// CONCATENATED MODULE: ./packages/checkbox/index.vue






/* normalize component */

var checkbox_component = normalizeComponent(
  packages_checkboxvue_type_script_lang_js_,
  checkboxvue_type_template_id_5bbba9ca_scoped_true_render,
  checkboxvue_type_template_id_5bbba9ca_scoped_true_staticRenderFns,
  false,
  null,
  "5bbba9ca",
  null
  
)

/* hot reload */
if (false) { var checkbox_api; }
checkbox_component.options.__file = "packages/checkbox/index.vue"
/* harmony default export */ var packages_checkbox = (checkbox_component.exports);
// CONCATENATED MODULE: ./packages/checkbox/index.js


/* istanbul ignore next */
packages_checkbox.install = function (Vue) {
  Vue.component(packages_checkbox.name, packages_checkbox);
};

/* harmony default export */ var packages_checkbox_0 = (packages_checkbox);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/collapse/index.vue?vue&type=template&id=2e625534&scoped=true&
var collapsevue_type_template_id_2e625534_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._g(
      {
        staticClass: "pl-collapse",
        class: { "pl-collapse--active": _vm.currentValue }
      },
      _vm.$listeners
    ),
    [
      _c(
        "div",
        { staticClass: "pl-collapse-top", on: { click: _vm.toggle } },
        [
          _c(
            "div",
            { staticClass: "pl-collapse-title" },
            [_vm._t("title", [_vm._v(_vm._s(_vm.title))])],
            2
          ),
          !_vm.disabled
            ? _c("icon", {
                staticClass: "icon-arrow",
                attrs: { name: "icon-enter", fill: "#ccc" }
              })
            : _vm._e()
        ],
        1
      ),
      _c(
        "div",
        {
          staticClass: "pl-collapse-content",
          style: { height: _vm.contentHeight }
        },
        [
          _c(
            "div",
            { ref: "inner", staticClass: "pl-collapse-inner" },
            [_vm._t("default")],
            2
          )
        ]
      )
    ]
  )
}
var collapsevue_type_template_id_2e625534_scoped_true_staticRenderFns = []
collapsevue_type_template_id_2e625534_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/collapse/index.vue?vue&type=template&id=2e625534&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/collapse/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var collapsevue_type_script_lang_js_ = ({
  name: 'plCollapse',
  componentName: 'plCollapse',
  components: {
    icon: icon
  },
  props: {
    size: { // 尺寸 可选值为 normal，large, small
      type: String,
      default: 'normal'
    },
    value: {
      type: Boolean,
      default: false
    },
    disabled: Boolean, // 禁用
    title: String // 标题
  },
  data: function data() {
    return {
      currentValue: this.value === undefined ? false : this.value,
      contentHeight: this.value ? 'auto' : '0',
      inner: null
    };
  },

  computed: {},
  mounted: function mounted() {
    this.inner = this.$refs.inner;
  },

  methods: {
    toggle: function toggle() {
      if (!this.disabled) {
        this.setCurrentValue(!this.currentValue);
      }
    },
    setCurrentValue: function setCurrentValue(value) {
      var _this = this;

      if (value === this.currentValue) {
        return false;
      }
      this.currentValue = value;
      this.$emit('input', value);
      this.$emit('change', value);

      this.contentHeight = this.inner.scrollHeight + 'px';
      if (value) {
        setTimeout(function () {
          _this.contentHeight = 'auto';
        }, 300);
      } else {
        setTimeout(function () {
          _this.contentHeight = '0';
        }, 0);
      }
    }
  },
  watch: {
    'value': function value(val) {
      this.setCurrentValue(val);
    }
  }
});
// CONCATENATED MODULE: ./packages/collapse/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_collapsevue_type_script_lang_js_ = (collapsevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/collapse/index.vue?vue&type=style&index=0&id=2e625534&lang=less&scoped=true&
var collapsevue_type_style_index_0_id_2e625534_lang_less_scoped_true_ = __webpack_require__(38);

// CONCATENATED MODULE: ./packages/collapse/index.vue






/* normalize component */

var collapse_component = normalizeComponent(
  packages_collapsevue_type_script_lang_js_,
  collapsevue_type_template_id_2e625534_scoped_true_render,
  collapsevue_type_template_id_2e625534_scoped_true_staticRenderFns,
  false,
  null,
  "2e625534",
  null
  
)

/* hot reload */
if (false) { var collapse_api; }
collapse_component.options.__file = "packages/collapse/index.vue"
/* harmony default export */ var collapse = (collapse_component.exports);
// CONCATENATED MODULE: ./packages/collapse/index.js


/* istanbul ignore next */
collapse.install = function (Vue) {
  Vue.component(collapse.name, collapse);
};

/* harmony default export */ var packages_collapse = (collapse);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/datetime/index.vue?vue&type=template&id=30f00382&scoped=true&
var datetimevue_type_template_id_30f00382_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._g(
      {
        staticClass: "pl-datetime",
        class: [
          _vm.size ? "pl-datetime--" + _vm.size : "",
          {
            "is-disabled": _vm.disabled,
            "pl-datetime--error": _vm.ruleMessage
          }
        ]
      },
      _vm.$listeners
    ),
    [
      _c("div", { staticClass: "pl-datetime-cell" }, [
        _vm.label
          ? _c(
              "div",
              {
                staticClass: "pl-datetime-label",
                class: { "pl-datetime-label--require": _vm.required },
                style: { width: _vm.labelWidth }
              },
              [_vm._t("label", [_vm._v(_vm._s(_vm.label))])],
              2
            )
          : _vm._e(),
        _vm.$slots.prepend
          ? _c(
              "div",
              { staticClass: "pl-datetime-prepend" },
              [_vm._t("prepend")],
              2
            )
          : _vm._e(),
        _c(
          "div",
          { staticClass: "pl-datetime-inner", on: { click: _vm.open } },
          [
            _vm.currentItem || _vm.currentValue
              ? _c("span", { staticClass: "title" }, [
                  _vm._v(_vm._s(_vm.valueTitle))
                ])
              : _c("span", { staticClass: "placeholder" }, [
                  _vm._v(_vm._s(_vm.placeholder))
                ])
          ]
        ),
        _c(
          "div",
          {
            staticClass: "pl-datetime-clear",
            on: {
              touchstart: function($event) {
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.clear($event)
              },
              mousedown: function($event) {
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.clear($event)
              }
            }
          },
          [
            _vm.showClear
              ? _c("icon", {
                  attrs: { name: "icon-roundclosefill", fill: "#ccc" }
                })
              : _vm._e()
          ],
          1
        ),
        _vm.$slots.append
          ? _c(
              "div",
              { staticClass: "pl-datetime-append" },
              [_vm._t("append")],
              2
            )
          : _vm._e()
      ]),
      _c("picker", {
        ref: "picker",
        attrs: {
          options: _vm.getPickerOption(),
          defaultValue: [_vm.currentValue],
          title: _vm.placeholder,
          props: _vm.props
        },
        on: { submit: _vm.submit, cancel: _vm.cancel },
        scopedSlots: _vm._u(
          [
            {
              key: "default",
              fn: function(scope) {
                return [_vm._t("default", null, { item: scope.item })]
              }
            }
          ],
          null,
          true
        )
      })
    ],
    1
  )
}
var datetimevue_type_template_id_30f00382_scoped_true_staticRenderFns = []
datetimevue_type_template_id_30f00382_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/datetime/index.vue?vue&type=template&id=30f00382&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/picker/index.vue?vue&type=template&id=5c700fd5&scoped=true&
var pickervue_type_template_id_5c700fd5_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "pl-picker",
      class: [
        _vm.isOpen ? "pl-picker--open" : "pl-picker--close",
        _vm.visible ? "" : "pl-picker--hide"
      ]
    },
    [
      _vm.isOpen
        ? _c("div", { staticClass: "pl-picker-content" }, [
            _c("div", { staticClass: "pl-picker-top" }, [
              _c(
                "div",
                {
                  staticClass: "pl-picker-btn--cancel",
                  on: { click: _vm.cancel }
                },
                [_vm._v("取消")]
              ),
              _c("div", { staticClass: "pl-picker-title" }, [
                _vm._v(_vm._s(_vm.title))
              ]),
              _c(
                "div",
                {
                  staticClass: "pl-picker-btn--submit",
                  on: { click: _vm.submit }
                },
                [_vm._v("确认")]
              )
            ]),
            _c(
              "div",
              { ref: "inner", staticClass: "pl-picker-inner" },
              _vm._l(_vm.computedOption, function(items, i) {
                return _c(
                  "div",
                  {
                    key: i,
                    staticClass: "pl-picker-inner-col",
                    style: {
                      width: (1 / _vm.computedOption.length) * 100 + "%"
                    },
                    on: {
                      touchstart: function($event) {
                        return _vm.handlerScroll($event, i)
                      },
                      touchmove: function($event) {
                        return _vm.handlerScroll($event, i)
                      },
                      touchend: function($event) {
                        return _vm.handlerScroll($event, i)
                      },
                      touchcancel: function($event) {
                        return _vm.handlerScroll($event, i)
                      }
                    }
                  },
                  [
                    _c(
                      "ul",
                      {
                        ref: "inner-col",
                        refInFor: true,
                        staticClass: "pl-picker-inner-row"
                      },
                      _vm._l(items, function(item, j) {
                        return _c(
                          "li",
                          {
                            key: j,
                            ref: "inner-item",
                            refInFor: true,
                            staticClass: "pl-picker-inner-item",
                            style: _vm.itemStyle
                          },
                          [
                            _vm._t(
                              "default",
                              [_vm._v(_vm._s(_vm.getLabel(item)))],
                              { item: item }
                            )
                          ],
                          2
                        )
                      }),
                      0
                    )
                  ]
                )
              }),
              0
            )
          ])
        : _vm._e(),
      _c("div", { staticClass: "pl-picker-layer", on: { click: _vm.close } })
    ]
  )
}
var pickervue_type_template_id_5c700fd5_scoped_true_staticRenderFns = []
pickervue_type_template_id_5c700fd5_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/picker/index.vue?vue&type=template&id=5c700fd5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/picker/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var pickervue_type_script_lang_js_ = ({
  name: 'plPicker',
  componentName: 'plPicker',
  props: {
    title: String, // 标题
    defaultValue: Array, // 默认选中值
    options: { // 下拉选项，回调式：[function() {}]，嵌套式：{children: [{children: []}]}
      type: [Array, Object],
      default: function _default() {
        return [];
      }
    },
    props: {
      type: Object, // 显示的标签和返回的值 {label, value, children}
      default: function _default() {
        return {};
      }
    }
  },
  data: function data() {
    return {
      isOpen: false,
      visible: false,
      renderType: 'function', // 渲染模式，function：函数回调，object：children子项嵌套模式

      computedOption: [], // 计算后的下拉选项
      selectedValue: [], // 已选中的项 index

      innerHeight: 0, // 下拉框高度
      itemHeight: 0, // 子项高度
      translate: [], // 每一列的滚动高度

      transDiff: 0,
      transStart: 0,
      transEnd: 0
    };
  },

  computed: {
    itemStyle: function itemStyle() {
      return {
        height: this.itemHeight + 'px',
        lineHeight: this.itemHeight + 'px'
      };
    }
  },
  mounted: function mounted() {},

  methods: {
    // 手动打开弹框
    open: function open() {
      var _this = this;

      this.isOpen = true;
      this.visible = true;

      this.$nextTick(function () {
        _this.calculate();

        // 滚动到默认值位置
        if (_this.defaultValue && _this.defaultValue.length) {
          _this.defaultValue.forEach(function (value, i) {
            var index = _this.computedOption[i].findIndex(function (item) {
              return _this.getValue(item) === value;
            });
            if (index > 0 && index < _this.computedOption[i].length) {
              var translate = index * _this.itemHeight;
              _this.$set(_this.selectedValue, i, index);
              _this.$set(_this.translate, i, translate);
              _this.setPosition(translate, i);
            }
          });
        }
      });
    },
    close: function close() {
      var _this2 = this;

      this.isOpen = false;
      setTimeout(function () {
        _this2.visible = false;
      }, 300);
    },

    // 重置选项
    reset: function reset() {
      this.$set(this, 'selectedValue', this.selectedValue.map(function () {
        return 0;
      }));
      this.$set(this, 'translate', this.translate.map(function () {
        return 0;
      }));
    },

    // 取消
    cancel: function cancel() {
      this.$emit('cancel');
      this.reset();
      this.close();
    },

    // 确定
    submit: function submit() {
      var _this3 = this;

      this.$emit('submit', this.selectedValue.map(function (value, index) {
        return _this3.computedOption[index][value];
      }));
      this.reset();
      this.close();
    },

    // 滚动方法
    handlerScroll: function handlerScroll(e, index) {
      var cols = this.$refs['inner-col'];
      // 当前滚动的位置具体数值
      var translate = void 0;
      // 当前滚动到的项index
      var selected = void 0;

      e.preventDefault();
      e.stopPropagation();

      switch (e.type) {
        case 'touchstart':
          this.transDiff = this.translate[index];
          this.transStart = e.touches[0].clientY;
          cols[index].style.transition = cols[index].style.webkitTransition = 'none';
          break;
        case 'touchmove':
          this.transEnd = e.touches[0].clientY;
          translate = this.transDiff + this.transStart - this.transEnd;
          this.$set(this.translate, index, translate);
          this.setPosition(translate, index);
          break;
        case 'touchend':
        case 'touchcancel':
          // 当前滚动到的项index
          selected = Math.round(this.translate[index] / this.itemHeight);

          if (selected < 0) {
            selected = 0;
          }
          if (selected >= this.computedOption[index].length) {
            selected = this.computedOption[index].length - 1;
          }
          translate = selected * this.itemHeight;

          this.$set(this.selectedValue, index, selected);
          this.$set(this.translate, index, translate);
          cols[index].style.transition = cols[index].style.webkitTransition = '';

          this.setChildren(this.computedOption[index][selected], index);
          this.setPosition(translate, index);
          break;
      }
    },

    // 设置列表滚动定位
    setPosition: function setPosition(translate, index) {
      var cols = this.$refs['inner-col'];
      if (cols && cols[index]) {
        cols[index].style.transform = cols[index].style.webkitTransform = 'translateY(' + (this.itemHeight * 2 - translate) + 'px)';
      }
    },

    // 设置子列表项
    setChildren: function setChildren(selected, index) {
      var _this4 = this;

      if (this.renderType === 'function') {
        this.options.forEach(function (item, i) {
          if (i > index) {
            var result = item.apply(null, _this4.selectedValue.slice(0, i).map(function (item, index) {
              return _this4.computedOption[index][item];
            }));
            _this4.$set(_this4.computedOption, i, result);

            if (!_this4.selectedValue[i] || _this4.selectedValue[i] >= result.length) {
              _this4.$set(_this4.translate, i, 0);
              _this4.$set(_this4.selectedValue, i, 0);
              _this4.setPosition(0, i);
            }
          }
        });
      } else if (this.renderType === 'object') {
        var find = function find(target, i) {
          var children = _this4.getChildren(target);

          if (children.length) {
            _this4.$set(_this4.computedOption, i, children);

            if (!_this4.selectedValue[i] || _this4.selectedValue[i] >= children.length) {
              _this4.$set(_this4.translate, i, 0);
              _this4.$set(_this4.selectedValue, i, 0);
              _this4.setPosition(0, i);
            }

            find(children[0], i + 1);
          }
        };
        find(selected, index + 1);
      }
    },

    // 计算子项高度
    calculate: function calculate() {
      var _this5 = this;

      if (this.$refs.inner) {
        this.innerHeight = this.$refs.inner.offsetHeight;
        this.itemHeight = Math.round(this.innerHeight / 5);
        this.translate.map(function (translate, index) {
          _this5.setPosition(translate, index);
        });
      }
    },
    getLabel: function getLabel(target) {
      return this.props.label && is(target, 'object') ? target[this.props.label] : target;
    },
    getValue: function getValue(target) {
      return this.props.value && is(target, 'object') ? target[this.props.value] : target;
    },
    getChildren: function getChildren(target) {
      return this.props.children && is(target, 'object') ? target[this.props.children] : target;
    }
  },
  watch: {
    'options': {
      handler: function handler(val) {
        if (is(val, 'array') && val.every(function (item) {
          return is(item, 'function');
        })) {
          this.renderType = 'function';
          this.setChildren(null, -1);
        } else if (is(val, 'object') && Array.isArray(val[this.props.children])) {
          this.renderType = 'object';
          this.setChildren(val, -1);
        }
      },

      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./packages/picker/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_pickervue_type_script_lang_js_ = (pickervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/picker/index.vue?vue&type=style&index=0&id=5c700fd5&lang=less&scoped=true&
var pickervue_type_style_index_0_id_5c700fd5_lang_less_scoped_true_ = __webpack_require__(40);

// CONCATENATED MODULE: ./packages/picker/index.vue






/* normalize component */

var picker_component = normalizeComponent(
  packages_pickervue_type_script_lang_js_,
  pickervue_type_template_id_5c700fd5_scoped_true_render,
  pickervue_type_template_id_5c700fd5_scoped_true_staticRenderFns,
  false,
  null,
  "5c700fd5",
  null
  
)

/* hot reload */
if (false) { var picker_api; }
picker_component.options.__file = "packages/picker/index.vue"
/* harmony default export */ var picker = (picker_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/datetime/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// TODO datetime




/* harmony default export */ var datetimevue_type_script_lang_js_ = ({
  name: 'plDatetime',
  componentName: 'plDatetime',
  components: {
    picker: picker,
    icon: icon
  },
  props: {
    rules: { // 验证规则
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      default: ''
    },
    size: { // 尺寸 可选值为 normal，large, small
      type: String,
      default: 'normal'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    type: { // 日历类型：month，date，time，monthrange，daterange，timerange
      type: String,
      default: 'date'
    },
    format: String, // 日期格式，Y-M-D H:I:S 不传则返回日期对象
    disabled: Boolean, // 禁用
    readonly: Boolean, // 只读
    required: Boolean, // 必填 *号
    label: String, // 左侧 label
    labelWidth: String, // label 宽度
    clearable: { // 清除按钮
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      currentValue: this.value === undefined ? '' : this.value,
      ruleMessage: '',
      handlers: []
    };
  },

  computed: {
    valueTitle: function valueTitle() {
      if (this.format) {
        return getDateString(this.currentValue, this.format);
      } else {
        return getDateFromString(this.currentValue);
      }
    },
    showClear: function showClear() {
      return this.clearable && !this.disabled && this.currentValue;
    }
  },
  methods: {
    // 手动验证方法
    validate: function validate() {
      var _this = this;

      return Promise.all(this.rules.map(function (rule) {
        return utils_validate(rule, _this.currentValue);
      })).then(function () {
        _this.ruleMessage = '';
        return Promise.resolve();
      }).catch(function (e) {
        _this.ruleMessage = e;
        return Promise.reject(e);
      });
    },
    open: function open() {
      if (this.disabled || this.readonly) {
        return false;
      }
      this.$refs.picker.open();
    },
    cancel: function cancel() {
      this.$emit('cancel');
    },
    submit: function submit(_ref) {
      var result = _ref[0];

      var value = this.getValue(result);
      this.setCurrentValue(value);
    },
    clear: function clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
      this.setCurrentValue('');
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) {
        return false;
      }
      this.currentValue = value;
      this.validate();
      this.$emit('input', value);
      this.$emit('change', value);
    },
    getPickerOption: function getPickerOption() {
      return [function () {
        return this.options;
      }.bind(this)];
    },
    getLabel: function getLabel(target) {
      return this.props.label && is(target, 'object') ? target[this.props.label] : target;
    },
    getValue: function getValue(target) {
      return this.props.value && is(target, 'object') ? target[this.props.value] : target;
    }
  },
  watch: {
    'value': {
      handler: function handler(val) {
        this.setCurrentValue(val);
      },

      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./packages/datetime/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_datetimevue_type_script_lang_js_ = (datetimevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/datetime/index.vue?vue&type=style&index=0&id=30f00382&lang=less&scoped=true&
var datetimevue_type_style_index_0_id_30f00382_lang_less_scoped_true_ = __webpack_require__(42);

// CONCATENATED MODULE: ./packages/datetime/index.vue






/* normalize component */

var datetime_component = normalizeComponent(
  packages_datetimevue_type_script_lang_js_,
  datetimevue_type_template_id_30f00382_scoped_true_render,
  datetimevue_type_template_id_30f00382_scoped_true_staticRenderFns,
  false,
  null,
  "30f00382",
  null
  
)

/* hot reload */
if (false) { var datetime_api; }
datetime_component.options.__file = "packages/datetime/index.vue"
/* harmony default export */ var datetime = (datetime_component.exports);
// CONCATENATED MODULE: ./packages/datetime/index.js


/* istanbul ignore next */
datetime.install = function (Vue) {
  Vue.component(datetime.name, datetime);
};

/* harmony default export */ var packages_datetime = (datetime);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/index.vue?vue&type=template&id=490437e2&
var dialogvue_type_template_id_490437e2_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var dialogvue_type_template_id_490437e2_staticRenderFns = []
dialogvue_type_template_id_490437e2_render._withStripped = true


// CONCATENATED MODULE: ./packages/dialog/index.vue?vue&type=template&id=490437e2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/dialog/index.vue?vue&type=script&lang=js&
//
//
//
//

// TODO dialog
/* harmony default export */ var dialogvue_type_script_lang_js_ = ({
  name: 'plDialog',
  componentName: 'plDialog'
});
// CONCATENATED MODULE: ./packages/dialog/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_dialogvue_type_script_lang_js_ = (dialogvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/dialog/index.vue





/* normalize component */

var dialog_component = normalizeComponent(
  packages_dialogvue_type_script_lang_js_,
  dialogvue_type_template_id_490437e2_render,
  dialogvue_type_template_id_490437e2_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var dialog_api; }
dialog_component.options.__file = "packages/dialog/index.vue"
/* harmony default export */ var dialog = (dialog_component.exports);
// CONCATENATED MODULE: ./packages/dialog/index.js


/* istanbul ignore next */
dialog.install = function (Vue) {
  Vue.component(dialog.name, dialog);
};

/* harmony default export */ var packages_dialog = (dialog);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/index.vue?vue&type=template&id=39de438b&
var formvue_type_template_id_39de438b_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var formvue_type_template_id_39de438b_staticRenderFns = []
formvue_type_template_id_39de438b_render._withStripped = true


// CONCATENATED MODULE: ./packages/form/index.vue?vue&type=template&id=39de438b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/form/index.vue?vue&type=script&lang=js&
//
//
//
//

// TODO form
/* harmony default export */ var formvue_type_script_lang_js_ = ({
  name: 'plForm',
  componentName: 'plForm'
});
// CONCATENATED MODULE: ./packages/form/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_formvue_type_script_lang_js_ = (formvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/form/index.vue





/* normalize component */

var form_component = normalizeComponent(
  packages_formvue_type_script_lang_js_,
  formvue_type_template_id_39de438b_render,
  formvue_type_template_id_39de438b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var form_api; }
form_component.options.__file = "packages/form/index.vue"
/* harmony default export */ var packages_form = (form_component.exports);
// CONCATENATED MODULE: ./packages/form/index.js


/* istanbul ignore next */
packages_form.install = function (Vue) {
  Vue.component(packages_form.name, packages_form);
};

/* harmony default export */ var packages_form_0 = (packages_form);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/goTopButton/index.vue?vue&type=template&id=50daa70e&scoped=true&
var goTopButtonvue_type_template_id_50daa70e_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.scrollTop > _vm.offset
    ? _c(
        "div",
        { staticClass: "pl-to-top", on: { click: _vm.scrollToTop } },
        [_c("icon", { attrs: { name: "icon-up" } })],
        1
      )
    : _vm._e()
}
var goTopButtonvue_type_template_id_50daa70e_scoped_true_staticRenderFns = []
goTopButtonvue_type_template_id_50daa70e_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/goTopButton/index.vue?vue&type=template&id=50daa70e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/goTopButton/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//



/* harmony default export */ var goTopButtonvue_type_script_lang_js_ = ({
  name: 'plGoTopButton',
  componentName: 'plGoTopButton',
  components: {
    icon: icon
  },
  props: {
    target: [Node, Window], // 滚动的对象
    offset: { // 显示返回顶部按钮的位置
      type: Number,
      default: 0
    }
  },
  data: function data() {
    return {
      scrollTop: 0
    };
  },

  methods: {
    scrollToTop: function scrollToTop() {
      var target = this.target;
      var top = this.scrollTop;
      var step = top / 1000 * 60;
      var animate = function animate() {
        top -= step;
        if (top < 0) {
          top = 0;
        } else {
          requestAnimationFrame(animate);
        }
        target.scrollTop = top;
      };
      animate();
      this.scrollTop = 0;
    },
    scrollHandler: function scrollHandler(e) {
      this.scrollTop = e.target.scrollTop;
    }
  },
  beforeDestroy: function beforeDestroy() {
    if (this.target) {
      this.target.removeEventListener('scroll', this.scrollHandler);
    }
  },

  watch: {
    target: {
      handler: function handler(val) {
        if (val) {
          val.addEventListener('scroll', this.scrollHandler);
        }
      },

      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./packages/goTopButton/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_goTopButtonvue_type_script_lang_js_ = (goTopButtonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/goTopButton/index.vue?vue&type=style&index=0&id=50daa70e&lang=less&scoped=true&
var goTopButtonvue_type_style_index_0_id_50daa70e_lang_less_scoped_true_ = __webpack_require__(44);

// CONCATENATED MODULE: ./packages/goTopButton/index.vue






/* normalize component */

var goTopButton_component = normalizeComponent(
  packages_goTopButtonvue_type_script_lang_js_,
  goTopButtonvue_type_template_id_50daa70e_scoped_true_render,
  goTopButtonvue_type_template_id_50daa70e_scoped_true_staticRenderFns,
  false,
  null,
  "50daa70e",
  null
  
)

/* hot reload */
if (false) { var goTopButton_api; }
goTopButton_component.options.__file = "packages/goTopButton/index.vue"
/* harmony default export */ var goTopButton = (goTopButton_component.exports);
// CONCATENATED MODULE: ./packages/goTopButton/index.js


/* istanbul ignore next */
goTopButton.install = function (Vue) {
  Vue.component(goTopButton.name, goTopButton);
};

/* harmony default export */ var packages_goTopButton = (goTopButton);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/index.vue?vue&type=template&id=2f3bab39&
var inputvue_type_template_id_2f3bab39_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "pl-input",
      class: [
        _vm.size ? "pl-input--" + _vm.size : "",
        {
          "is-disabled": _vm.disabled,
          "pl-input-group": _vm.$slots.prepend || _vm.$slots.append,
          "pl-input-group--append": _vm.$slots.append,
          "pl-input-group--prepend": _vm.$slots.prepend,
          "pl-input--error": _vm.ruleMessage
        }
      ]
    },
    [
      _c(
        "div",
        { staticClass: "pl-input-cell" },
        [
          _vm.label
            ? _c(
                "div",
                {
                  class: [
                    _vm.type === "textarea"
                      ? "pl-textarea-label"
                      : "pl-input-label",
                    { "pl-input-label--require": _vm.required }
                  ],
                  style: { width: _vm.labelWidth }
                },
                [_vm._t("label", [_vm._v(_vm._s(_vm.label))])],
                2
              )
            : _vm._e(),
          _vm.type !== "textarea"
            ? [
                _vm.$slots.prepend
                  ? _c(
                      "div",
                      { staticClass: "pl-input-prepend" },
                      [_vm._t("prepend")],
                      2
                    )
                  : _vm._e(),
                _c("div", { staticClass: "pl-input-inner" }, [
                  _vm.type !== "textarea"
                    ? _c(
                        "input",
                        _vm._g(
                          _vm._b(
                            {
                              ref: "input",
                              attrs: { type: _vm.type, disabled: _vm.disabled },
                              domProps: { value: _vm.currentValue }
                            },
                            "input",
                            _vm.$attrs,
                            false
                          ),
                          Object.assign({}, _vm.$listeners, {
                            input: _vm.emit,
                            focus: _vm.emit,
                            blur: _vm.emit
                          })
                        )
                      )
                    : _vm._e()
                ]),
                _c(
                  "div",
                  {
                    staticClass: "pl-input-clear",
                    on: { touchstart: _vm.clear, mousedown: _vm.clear }
                  },
                  [
                    _vm.showClear
                      ? _c("icon", {
                          attrs: { name: "icon-roundclosefill", fill: "#ccc" }
                        })
                      : _vm._e()
                  ],
                  1
                ),
                _vm.$slots.append
                  ? _c(
                      "div",
                      { staticClass: "pl-input-append" },
                      [_vm._t("append")],
                      2
                    )
                  : _vm._e()
              ]
            : _c("div", { staticClass: "pl-input-inner" }, [
                _c(
                  "textarea",
                  _vm._g(
                    _vm._b(
                      {
                        ref: "input",
                        attrs: {
                          rows: _vm.rows,
                          cols: _vm.cols,
                          disabled: _vm.disabled
                        },
                        domProps: { value: _vm.currentValue }
                      },
                      "textarea",
                      _vm.$attrs,
                      false
                    ),
                    Object.assign({}, _vm.$listeners, {
                      input: _vm.emit,
                      focus: _vm.emit,
                      blur: _vm.emit
                    })
                  )
                )
              ])
        ],
        2
      ),
      _vm.ruleMessage
        ? _c("div", { staticClass: "pl-input-error" }, [
            _vm._v(_vm._s(_vm.ruleMessage))
          ])
        : _vm._e()
    ]
  )
}
var inputvue_type_template_id_2f3bab39_staticRenderFns = []
inputvue_type_template_id_2f3bab39_render._withStripped = true


// CONCATENATED MODULE: ./packages/input/index.vue?vue&type=template&id=2f3bab39&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/input/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var inputvue_type_script_lang_js_ = ({
  name: 'plInput',
  componentName: 'plInput',
  components: {
    icon: icon
  },
  props: {
    rules: { // 验证规则
      type: Array,
      default: function _default() {
        return [];
      }
    },
    size: { // 尺寸 可选值为 normal，large, small
      type: String,
      default: 'normal'
    },
    type: { // 表单类型，原生字段
      type: String,
      default: 'text'
    },
    value: [String, Number],
    disabled: Boolean, // 禁用
    required: Boolean, // 必填 *号
    rows: String, // 左侧 label
    cols: String, // 左侧 label
    label: String, // 左侧 label
    labelWidth: String, // label 宽度
    clearable: { // 清除按钮
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      currentValue: this.value === undefined ? '' : this.value,
      focused: false,
      ruleMessage: '', // 验证错误提示信息
      handlers: []
    };
  },

  computed: {
    showClear: function showClear() {
      return this.clearable && !this.disabled && this.currentValue !== '' && this.focused;
    }
  },
  mounted: function mounted() {
    this.bindEvent();
  },

  methods: {
    // 手动验证方法
    validate: function validate() {
      var _this = this;

      return Promise.all(this.rules.map(function (rule) {
        return utils_validate(rule, _this.value);
      })).then(function () {
        _this.ruleMessage = '';
        return Promise.resolve();
      }).catch(function (e) {
        _this.ruleMessage = e;
        return Promise.reject(e);
      });
    },
    focus: function focus() {
      this.$refs.input.focus();
    },
    blur: function blur() {
      this.$refs.input.blur();
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) {
        return false;
      }
      this.currentValue = value;
    },
    clear: function clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
      this.setCurrentValue('');
      this.focus();
    },
    emit: function emit(e) {
      var value = e.target.value;
      var type = e.type;

      if (type === 'input') {
        this.setCurrentValue(value);
      }
      if (type === 'focus') {
        this.focused = true;
      }
      if (type === 'blur') {
        this.focused = false;
      }
      this.$emit(type, value);
    },
    bindEvent: function bindEvent() {
      var _this2 = this;

      // 绑定事件
      this.rules.forEach(function (rule) {
        var event = rule.trigger;
        if (!event) {
          event = 'change';
        }

        var handler = function handler() {
          utils_validate(rule, _this2.value).then(function () {
            _this2.ruleMessage = '';
          }).catch(function (e) {
            _this2.ruleMessage = e;
          });
        };

        _this2.$refs.input.addEventListener(event, handler);
        _this2.handlers.push({ event: event, handler: handler });
      });
    },
    unbindEvent: function unbindEvent() {
      var _this3 = this;

      this.handlers.forEach(function (handler) {
        _this3.$refs.input.removeEventListener(handler.event, handler.handler);
      });
      this.handlers.length = 0;
    }
  },
  watch: {
    'value': function value(val) {
      this.setCurrentValue(val);
    },
    'rules': function rules(val) {
      if (Array.isArray(val)) {
        this.unbindEvent();
        this.bindEvent();
      }
    }
  },
  beforeDestroy: function beforeDestroy() {
    this.unbindEvent();
  }
});
// CONCATENATED MODULE: ./packages/input/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_inputvue_type_script_lang_js_ = (inputvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/input/index.vue?vue&type=style&index=0&lang=less&
var inputvue_type_style_index_0_lang_less_ = __webpack_require__(46);

// CONCATENATED MODULE: ./packages/input/index.vue






/* normalize component */

var input_component = normalizeComponent(
  packages_inputvue_type_script_lang_js_,
  inputvue_type_template_id_2f3bab39_render,
  inputvue_type_template_id_2f3bab39_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var input_api; }
input_component.options.__file = "packages/input/index.vue"
/* harmony default export */ var input = (input_component.exports);
// CONCATENATED MODULE: ./packages/input/index.js


/* istanbul ignore next */
input.install = function (Vue) {
  Vue.component(input.name, input);
};

/* harmony default export */ var packages_input = (input);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/list/index.vue?vue&type=template&id=07f15ee5&scoped=true&
var listvue_type_template_id_07f15ee5_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pl-list" },
    [
      _c(
        "div",
        _vm._g(
          {
            ref: "list",
            staticClass: "pl-list-wrap",
            on: {
              touchstart: function($event) {
                return _vm.touchEvent($event)
              },
              touchmove: function($event) {
                return _vm.touchEvent($event)
              },
              touchend: function($event) {
                return _vm.touchEvent($event)
              },
              touchcancel: function($event) {
                return _vm.touchEvent($event)
              }
            }
          },
          _vm.$listeners
        ),
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.loading,
                  expression: "loading"
                }
              ],
              staticClass: "pl-list-loading-top"
            },
            [
              _c("icon", { attrs: { name: "icon-icon_loading" } }),
              _vm._v("\n      " + _vm._s(_vm.loadingText) + "\n    ")
            ],
            1
          ),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.translate !== 0 && !_vm.loading,
                  expression: "translate !== 0 && !loading"
                }
              ],
              staticClass: "pl-list-refresh-tip"
            },
            [_vm._v("松开刷新")]
          ),
          _c(
            "div",
            {
              ref: "inner",
              staticClass: "pl-list-inner",
              style: _vm.innerStyle
            },
            [
              _vm._t("default"),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.translate !== 0 && !_vm.finished,
                      expression: "translate !== 0 && !finished"
                    }
                  ],
                  staticClass: "pl-list-loading-bottom"
                },
                [
                  _c("icon", { attrs: { name: "icon-icon_loading" } }),
                  _vm._v("\n        " + _vm._s(_vm.loadingText) + "\n      ")
                ],
                1
              ),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.translate !== 0 && _vm.finished,
                      expression: "translate !== 0 && finished"
                    }
                  ],
                  staticClass: "pl-list-loading-finished"
                },
                [_vm._v(_vm._s(_vm.finishedText))]
              )
            ],
            2
          )
        ]
      ),
      _vm.topButton
        ? _c("go-top-button", { attrs: { target: _vm.$refs.list } })
        : _vm._e()
    ],
    1
  )
}
var listvue_type_template_id_07f15ee5_scoped_true_staticRenderFns = []
listvue_type_template_id_07f15ee5_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/list/index.vue?vue&type=template&id=07f15ee5&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/list/index.vue?vue&type=script&lang=js&
var listvue_type_script_lang_js_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var listvue_type_script_lang_js_ = ({
  name: 'plList',
  componentName: 'plList',
  components: {
    icon: icon,
    goTopButton: goTopButton
  },
  props: {
    // 是否处于加载状态，加载过程中不触发load事件
    loading: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    // 是否已加载完成，加载完成后不再触发load事件
    finished: {
      type: Boolean,
      default: function _default() {
        return false;
      }
    },
    // 加载过程中的提示文案
    loadingText: {
      type: String,
      default: function _default() {
        return '加载中...';
      }
    },
    // 加载完成后的提示文案
    finishedText: {
      type: String,
      default: function _default() {
        return '加载完成';
      }
    },
    // 加载失败后的提示文案
    errorText: {
      type: String,
      default: function _default() {
        return '加载失败';
      }
    },
    topButton: Boolean // 返回顶部按钮
  },
  data: function data() {
    return {
      translate: 0,
      transition: null,
      transDiff: 0,

      scrollTop: 0
    };
  },

  computed: {
    innerStyle: function innerStyle() {
      return listvue_type_script_lang_js_extends({
        'transform': 'translateY(' + -this.translate + 'px)',
        'webkitTransform': 'translateY(' + -this.translate + 'px)'
      }, this.transition ? {
        'transition': this.transition,
        'webkitTransition': this.transition
      } : null);
    },

    // 是否能下拉或者上划加载
    canDrag: function canDrag() {
      return (this.scrollTop === 0 || this.scrollBottom === 0) && !this.loading;
    }
  },
  mounted: function mounted() {},

  methods: {
    // 触摸事件
    touchEvent: function touchEvent(e) {
      var _this = this;

      var diff = 0;

      switch (e.type) {
        case 'touchstart':
          this.scrollTop = this.$refs.list.scrollTop;
          this.scrollBottom = this.$refs.list.scrollHeight - this.scrollTop - this.$refs.list.clientHeight;

          this.transDiff = e.touches[0].clientY;
          this.transition = 'none';
          break;
        case 'touchmove':
          if (this.canDrag) {
            diff = (this.transDiff - e.touches[0].clientY) / 2;
            if (this.scrollTop === 0 && diff < 0 || this.scrollBottom === 0 && diff > 0) {
              if (diff > 80) {
                diff = 80;
              }
              if (diff < -80) {
                diff = -80;
              }
              this.translate = diff;

              e.preventDefault();
              e.stopPropagation();
            }
          }
          break;
        case 'touchend':
        case 'touchcancel':
          if (Math.abs(this.translate) >= 80 && !this.loading) {
            if (this.scrollTop === 0) {
              this.$emit('refresh');
            }
            if (this.scrollBottom === 0 && !this.finished) {
              this.$emit('load');
            }
          }
          this.$nextTick(function () {
            if (!_this.loading || _this.finished) {
              _this.translate = 0;
            }
          });

          this.transition = null;
          break;
      }
    }
  },
  watch: {
    'loading': function loading(val) {
      var _this2 = this;

      if (!val) {
        this.translate = 0;

        if (!this.finished) {
          // 如果加载内容的高度不够则继续加载下一页
          this.$nextTick(function () {
            if (_this2.$refs.list && _this2.$refs.inner && _this2.$refs.inner.scrollHeight <= _this2.$refs.list.clientHeight) {
              _this2.$emit('load');
            }
          });
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/list/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_listvue_type_script_lang_js_ = (listvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/list/index.vue?vue&type=style&index=0&id=07f15ee5&lang=less&scoped=true&
var listvue_type_style_index_0_id_07f15ee5_lang_less_scoped_true_ = __webpack_require__(48);

// CONCATENATED MODULE: ./packages/list/index.vue






/* normalize component */

var list_component = normalizeComponent(
  packages_listvue_type_script_lang_js_,
  listvue_type_template_id_07f15ee5_scoped_true_render,
  listvue_type_template_id_07f15ee5_scoped_true_staticRenderFns,
  false,
  null,
  "07f15ee5",
  null
  
)

/* hot reload */
if (false) { var list_api; }
list_component.options.__file = "packages/list/index.vue"
/* harmony default export */ var list = (list_component.exports);
// CONCATENATED MODULE: ./packages/list/index.js


/* istanbul ignore next */
list.install = function (Vue) {
  Vue.component(list.name, list);
};

/* harmony default export */ var packages_list = (list);
// CONCATENATED MODULE: ./packages/picker/index.js


/* istanbul ignore next */
picker.install = function (Vue) {
  Vue.component(picker.name, picker);
};

/* harmony default export */ var packages_picker = (picker);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/index.vue?vue&type=template&id=38605898&scoped=true&
var progressvue_type_template_id_38605898_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "pl-progress" }, [
    _c("div", { staticClass: "progress-inner" }, [
      _c("div", { staticClass: "progress-track", style: _vm.trackStyle })
    ]),
    _c("div", { staticClass: "progress-value", style: _vm.textStyle }, [
      _vm._v(_vm._s(_vm.progress) + "%")
    ])
  ])
}
var progressvue_type_template_id_38605898_scoped_true_staticRenderFns = []
progressvue_type_template_id_38605898_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/progress/index.vue?vue&type=template&id=38605898&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/progress/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var progressvue_type_script_lang_js_ = ({
  name: 'plButton',
  componentName: 'plButton',
  props: {
    fill: {
      type: String,
      default: '#5074FF'
    },
    progress: {
      type: Number,
      default: 0
    }
  },
  computed: {
    trackStyle: function trackStyle() {
      return {
        'width': this.progress + '%',
        'background-color': this.fill
      };
    },
    textStyle: function textStyle() {
      return {
        'color': this.fill
      };
    }
  }
});
// CONCATENATED MODULE: ./packages/progress/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_progressvue_type_script_lang_js_ = (progressvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/progress/index.vue?vue&type=style&index=0&id=38605898&lang=less&scoped=true&
var progressvue_type_style_index_0_id_38605898_lang_less_scoped_true_ = __webpack_require__(50);

// CONCATENATED MODULE: ./packages/progress/index.vue






/* normalize component */

var progress_component = normalizeComponent(
  packages_progressvue_type_script_lang_js_,
  progressvue_type_template_id_38605898_scoped_true_render,
  progressvue_type_template_id_38605898_scoped_true_staticRenderFns,
  false,
  null,
  "38605898",
  null
  
)

/* hot reload */
if (false) { var progress_api; }
progress_component.options.__file = "packages/progress/index.vue"
/* harmony default export */ var progress = (progress_component.exports);
// CONCATENATED MODULE: ./packages/progress/index.js


/* istanbul ignore next */
progress.install = function (Vue) {
  Vue.component(progress.name, progress);
};

/* harmony default export */ var packages_progress = (progress);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio/index.vue?vue&type=template&id=6cbf9e2a&scoped=true&
var radiovue_type_template_id_6cbf9e2a_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "pl-radio",
      class: [
        _vm.size ? "pl-radio--" + _vm.size : "",
        {
          "is-vertical": _vm.vertical,
          "is-disabled": _vm.disabled,
          "pl-radio--error": _vm.ruleMessage
        }
      ]
    },
    [
      _c("div", { staticClass: "pl-radio-cell" }, [
        _vm.label
          ? _c(
              "div",
              {
                staticClass: "pl-radio-label",
                class: { "pl-radio-label--require": _vm.required },
                style: { width: _vm.labelWidth }
              },
              [_vm._t("label", [_vm._v(_vm._s(_vm.label))])],
              2
            )
          : _vm._e(),
        _c(
          "div",
          { staticClass: "pl-radio-inner" },
          _vm._l(_vm.data, function(item, i) {
            return _c(
              "div",
              {
                key: i,
                staticClass: "pl-radio-item",
                class: {
                  "is-active": item[_vm.prop.value] === _vm.currentValue,
                  "is-disabled": _vm.disabled || item[_vm.prop.disabled],
                  "is-button": _vm.button,
                  "is-vertical": _vm.vertical
                },
                on: {
                  click: function($event) {
                    !(_vm.disabled || item[_vm.prop.disabled]) &&
                      _vm.emit(item[_vm.prop.value])
                  }
                }
              },
              [
                !_vm.button
                  ? _c("icon", {
                      staticClass: "pl-radio-icon",
                      attrs: {
                        name:
                          item[_vm.prop.value] === _vm.currentValue
                            ? "icon-btn_choose"
                            : "icon-btn_cicle_unchoose",
                        fill:
                          _vm.disabled || item[_vm.prop.disabled]
                            ? "#ebedf0"
                            : item[_vm.prop.value] === _vm.currentValue
                            ? "@primary"
                            : "#dcdfe6"
                      }
                    })
                  : _vm._e(),
                _c(
                  "span",
                  [
                    _vm._t("default", [_vm._v(_vm._s(item[_vm.prop.label]))], {
                      item: item
                    })
                  ],
                  2
                )
              ],
              1
            )
          }),
          0
        )
      ]),
      _vm.ruleMessage
        ? _c("div", { staticClass: "pl-radio-error" }, [
            _vm._v(_vm._s(_vm.ruleMessage))
          ])
        : _vm._e()
    ]
  )
}
var radiovue_type_template_id_6cbf9e2a_scoped_true_staticRenderFns = []
radiovue_type_template_id_6cbf9e2a_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/radio/index.vue?vue&type=template&id=6cbf9e2a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/radio/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// radio
/* harmony default export */ var radiovue_type_script_lang_js_ = ({
  name: 'plRadio',
  componentName: 'plRadio',
  components: {
    icon: packages_icon
  },
  props: {
    rules: { // 验证规则
      type: Array,
      default: function _default() {
        return [];
      }
    },
    size: { // 尺寸 可选值为 normal，large, small
      type: String,
      default: 'normal'
    },
    data: { // 单选选项
      type: Array,
      default: function _default() {
        return [];
      }
    },
    prop: { // key与value
      type: Object,
      default: function _default() {
        return { label: 'label', value: 'value', disabled: 'disabled' };
      }
    },
    value: {
      default: null
    },
    disabled: Boolean, // 禁用
    required: Boolean, // 必填 *号
    button: Boolean, // 是否是按钮样式
    vertical: Boolean, // 是否是竖向排列
    label: String, // 左侧 label
    labelWidth: String // label 宽度
  },
  data: function data() {
    return {
      currentValue: this.value === undefined ? '' : this.value,
      ruleMessage: '' // 验证错误提示信息
    };
  },

  computed: {},
  mounted: function mounted() {},

  methods: {
    // 手动验证方法
    validate: function validate() {
      var _this = this;

      return Promise.all(this.rules.map(function (rule) {
        return utils_validate(rule, _this.currentValue);
      })).then(function () {
        _this.ruleMessage = '';
        return Promise.resolve();
      }).catch(function (e) {
        _this.ruleMessage = e;
        return Promise.reject(e);
      });
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) {
        return false;
      }
      this.currentValue = value;
    },
    emit: function emit(value) {
      if (value === this.currentValue) {
        return false;
      }
      this.currentValue = value;
      this.validate();
      this.$emit('input', value);
      this.$emit('change', value);
    }
  },
  watch: {
    'value': function value(val) {
      this.setCurrentValue(val);
    }
  }
});
// CONCATENATED MODULE: ./packages/radio/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_radiovue_type_script_lang_js_ = (radiovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/radio/index.vue?vue&type=style&index=0&id=6cbf9e2a&lang=less&scoped=true&
var radiovue_type_style_index_0_id_6cbf9e2a_lang_less_scoped_true_ = __webpack_require__(52);

// CONCATENATED MODULE: ./packages/radio/index.vue






/* normalize component */

var radio_component = normalizeComponent(
  packages_radiovue_type_script_lang_js_,
  radiovue_type_template_id_6cbf9e2a_scoped_true_render,
  radiovue_type_template_id_6cbf9e2a_scoped_true_staticRenderFns,
  false,
  null,
  "6cbf9e2a",
  null
  
)

/* hot reload */
if (false) { var radio_api; }
radio_component.options.__file = "packages/radio/index.vue"
/* harmony default export */ var packages_radio = (radio_component.exports);
// CONCATENATED MODULE: ./packages/radio/index.js


/* istanbul ignore next */
packages_radio.install = function (Vue) {
  Vue.component(packages_radio.name, packages_radio);
};

/* harmony default export */ var packages_radio_0 = (packages_radio);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/range/index.vue?vue&type=template&id=44e8ce28&scoped=true&
var rangevue_type_template_id_44e8ce28_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "pl-range",
      class: [
        _vm.size ? "pl-range--" + _vm.size : "",
        {
          "is-disabled": _vm.disabled,
          "pl-range--error": _vm.ruleMessage
        }
      ]
    },
    [
      _c("div", { staticClass: "pl-range-cell" }, [
        _vm.label
          ? _c(
              "div",
              {
                staticClass: "pl-range-label",
                class: { "pl-range-label--require": _vm.required },
                style: { width: _vm.labelWidth }
              },
              [_vm._t("label", [_vm._v(_vm._s(_vm.label))])],
              2
            )
          : _vm._e(),
        _c("div", { staticClass: "pl-range-inner" }, [
          _c("div", { ref: "track", staticClass: "slider-runnable-track" }, [
            _c("div", { staticClass: "progress", style: _vm.progressStyle }),
            _c("div", {
              staticClass: "thumb",
              style: _vm.thumbStyle,
              on: {
                touchstart: function($event) {
                  return _vm.touchEvent($event)
                },
                touchmove: function($event) {
                  return _vm.touchEvent($event)
                },
                touchend: function($event) {
                  return _vm.touchEvent($event)
                },
                touchcancel: function($event) {
                  return _vm.touchEvent($event)
                }
              }
            })
          ]),
          _c("div", { staticClass: "pl-range-slot" }, [
            _vm.$slots.prepend
              ? _c(
                  "div",
                  { staticClass: "pl-range-prepend" },
                  [_vm._t("prepend")],
                  2
                )
              : _vm._e(),
            _vm.$slots.append
              ? _c(
                  "div",
                  { staticClass: "pl-range-append" },
                  [_vm._t("append")],
                  2
                )
              : _vm._e()
          ])
        ])
      ]),
      _vm.ruleMessage
        ? _c("div", { staticClass: "pl-range-error" }, [
            _vm._v(_vm._s(_vm.ruleMessage))
          ])
        : _vm._e()
    ]
  )
}
var rangevue_type_template_id_44e8ce28_scoped_true_staticRenderFns = []
rangevue_type_template_id_44e8ce28_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/range/index.vue?vue&type=template&id=44e8ce28&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/range/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// range
/* harmony default export */ var rangevue_type_script_lang_js_ = ({
  name: 'plRange',
  componentName: 'plRange',
  props: {
    rules: { // 验证规则
      type: Array,
      default: function _default() {
        return [];
      }
    },
    size: { // 尺寸 可选值为 normal，large, small
      type: String,
      default: 'normal'
    },
    value: Number,
    // 最小值
    min: {
      type: Number,
      default: 0
    },
    // 最大值
    max: {
      type: Number,
      default: 100
    },
    // step进度间隔
    step: {
      type: Number,
      default: 1
    },
    disabled: Boolean, // 禁用
    required: Boolean, // 必填 *号
    label: String, // 左侧 label
    labelWidth: String // label 宽度
  },
  data: function data() {
    return {
      currentValue: this.value === undefined ? '' : this.value,
      ruleMessage: '', // 验证错误提示信息,

      rangeWidth: 0,
      transDiff: 0,
      transStart: 0,
      transEnd: 0
    };
  },

  computed: {
    diff: function diff() {
      return this.currentValue / (this.max - this.min) * this.rangeWidth;
    },
    progressStyle: function progressStyle() {
      return {
        width: this.diff + 'px'
      };
    },
    thumbStyle: function thumbStyle() {
      return {
        'transform': 'translateX(' + this.diff + 'px)',
        '-webkit-transform': 'translateX(' + this.diff + 'px)'
      };
    }
  },
  mounted: function mounted() {
    if (this.$refs['track']) {
      this.rangeWidth = this.$refs['track'].clientWidth;
    }
  },

  methods: {
    // 手动验证方法
    validate: function validate() {
      var _this = this;

      return Promise.all(this.rules.map(function (rule) {
        return utils_validate(rule, _this.currentValue);
      })).then(function () {
        _this.ruleMessage = '';
        return Promise.resolve();
      }).catch(function (e) {
        _this.ruleMessage = e;
        return Promise.reject(e);
      });
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) {
        return false;
      }
      this.currentValue = value;
    },
    touchEvent: function touchEvent(e) {
      if (this.disabled) {
        return false;
      }
      var currentValue = 0;

      switch (e.type) {
        case 'touchstart':
          this.transStart = e.touches[0].clientX;
          this.transDiff = this.diff;
          break;
        case 'touchmove':
          e.preventDefault();
          e.stopPropagation();
          this.transEnd = e.touches[0].clientX;
          currentValue = Math.round((this.transDiff + this.transEnd - this.transStart) / this.rangeWidth * (this.max - this.min) / this.step) * this.step;
          if (currentValue < this.min) {
            currentValue = this.min;
          }
          if (currentValue > this.max) {
            currentValue = this.max;
          }
          this.currentValue = currentValue;
          this.$emit('input', this.currentValue);
          this.$emit('change', this.currentValue);
          break;
        case 'touchend':
        case 'touchcancel':
          this.validate();
          break;
      }
    }
  },
  watch: {
    'value': function value(val) {
      this.setCurrentValue(val);
    }
  }
});
// CONCATENATED MODULE: ./packages/range/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_rangevue_type_script_lang_js_ = (rangevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/range/index.vue?vue&type=style&index=0&id=44e8ce28&lang=less&scoped=true&
var rangevue_type_style_index_0_id_44e8ce28_lang_less_scoped_true_ = __webpack_require__(54);

// CONCATENATED MODULE: ./packages/range/index.vue






/* normalize component */

var range_component = normalizeComponent(
  packages_rangevue_type_script_lang_js_,
  rangevue_type_template_id_44e8ce28_scoped_true_render,
  rangevue_type_template_id_44e8ce28_scoped_true_staticRenderFns,
  false,
  null,
  "44e8ce28",
  null
  
)

/* hot reload */
if (false) { var range_api; }
range_component.options.__file = "packages/range/index.vue"
/* harmony default export */ var range = (range_component.exports);
// CONCATENATED MODULE: ./packages/range/index.js


/* istanbul ignore next */
range.install = function (Vue) {
  Vue.component(range.name, range);
};

/* harmony default export */ var packages_range = (range);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/index.vue?vue&type=template&id=0dd80ac3&scoped=true&
var selectvue_type_template_id_0dd80ac3_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._g(
      {
        staticClass: "pl-select",
        class: [
          _vm.size ? "pl-select--" + _vm.size : "",
          {
            "is-disabled": _vm.disabled,
            "pl-select--error": _vm.ruleMessage
          }
        ]
      },
      _vm.$listeners
    ),
    [
      _c("div", { staticClass: "pl-select-cell" }, [
        _vm.label
          ? _c(
              "div",
              {
                staticClass: "pl-select-label",
                class: { "pl-select-label--require": _vm.required },
                style: { width: _vm.labelWidth }
              },
              [_vm._t("label", [_vm._v(_vm._s(_vm.label))])],
              2
            )
          : _vm._e(),
        _vm.$slots.prepend
          ? _c(
              "div",
              { staticClass: "pl-select-prepend" },
              [_vm._t("prepend")],
              2
            )
          : _vm._e(),
        _c("div", { staticClass: "pl-select-inner", on: { click: _vm.open } }, [
          _vm.currentItem || _vm.currentValue
            ? _c("span", { staticClass: "title" }, [
                _vm._v(_vm._s(_vm.valueTitle))
              ])
            : _c("span", { staticClass: "placeholder" }, [
                _vm._v(_vm._s(_vm.placeholder))
              ])
        ]),
        _c(
          "div",
          {
            staticClass: "pl-select-clear",
            on: {
              touchstart: function($event) {
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.clear($event)
              },
              mousedown: function($event) {
                $event.stopPropagation()
                $event.preventDefault()
                return _vm.clear($event)
              }
            }
          },
          [
            _vm.showClear
              ? _c("icon", {
                  attrs: { name: "icon-roundclosefill", fill: "#ccc" }
                })
              : _vm._e()
          ],
          1
        ),
        _vm._m(0),
        _vm.$slots.append
          ? _c(
              "div",
              { staticClass: "pl-select-append" },
              [_vm._t("append")],
              2
            )
          : _vm._e()
      ]),
      _vm.ruleMessage
        ? _c("div", { staticClass: "pl-select-error" }, [
            _vm._v(_vm._s(_vm.ruleMessage))
          ])
        : _vm._e(),
      _c("picker", {
        ref: "picker",
        attrs: {
          options: _vm.getPickerOption(),
          defaultValue: [_vm.currentValue],
          title: _vm.placeholder,
          props: _vm.props
        },
        on: { submit: _vm.submit, cancel: _vm.cancel },
        scopedSlots: _vm._u(
          [
            {
              key: "default",
              fn: function(scope) {
                return [_vm._t("default", null, { item: scope.item })]
              }
            }
          ],
          null,
          true
        )
      })
    ],
    1
  )
}
var selectvue_type_template_id_0dd80ac3_scoped_true_staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "pl-select-icon" }, [
      _c("i", { staticClass: "icon-arrow" })
    ])
  }
]
selectvue_type_template_id_0dd80ac3_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/select/index.vue?vue&type=template&id=0dd80ac3&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/select/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





// TODO select
/* harmony default export */ var selectvue_type_script_lang_js_ = ({
  name: 'plSelect',
  componentName: 'plSelect',
  components: {
    picker: picker,
    icon: icon
  },
  props: {
    rules: { // 验证规则
      type: Array,
      default: function _default() {
        return [];
      }
    },
    value: {
      default: ''
    },
    size: { // 尺寸 可选值为 normal，large, small
      type: String,
      default: 'normal'
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    options: { // 下拉选项
      type: Array,
      default: function _default() {
        return [];
      }
    },
    props: {
      type: Object, // 显示的标签和返回的值 {label, value}
      default: function _default() {
        return { label: 'label', value: 'value' };
      }
    },
    disabled: Boolean, // 禁用
    readonly: Boolean, // 只读
    required: Boolean, // 必填 *号
    label: String, // 左侧 label
    labelWidth: String, // label 宽度
    clearable: { // 清除按钮
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      currentValue: this.value === undefined ? '' : this.value,
      currentItem: null,

      ruleMessage: '',
      handlers: []
    };
  },

  computed: {
    valueTitle: function valueTitle() {
      if (this.currentItem) {
        if (this.props.label && is(this.currentItem, 'object')) {
          return this.currentItem[this.props.label];
        } else {
          return this.currentItem;
        }
      }
      return this.currentValue || '';
    },
    showClear: function showClear() {
      return this.clearable && !this.disabled && (this.currentItem || this.currentValue);
    }
  },
  methods: {
    // 手动验证方法
    validate: function validate() {
      var _this = this;

      return Promise.all(this.rules.map(function (rule) {
        return utils_validate(rule, _this.currentValue);
      })).then(function () {
        _this.ruleMessage = '';
        return Promise.resolve();
      }).catch(function (e) {
        _this.ruleMessage = e;
        return Promise.reject(e);
      });
    },
    open: function open() {
      if (this.disabled || this.readonly || !this.options.length) {
        return false;
      }
      this.$refs.picker.open();
    },
    cancel: function cancel() {
      this.$emit('cancel');
    },
    submit: function submit(_ref) {
      var result = _ref[0];

      var value = this.getValue(result);
      this.currentItem = result;
      this.setCurrentValue(value);
    },
    clear: function clear() {
      this.$emit('input', '');
      this.$emit('change', '');
      this.$emit('clear');
      this.setCurrentValue('');
    },
    setCurrentValue: function setCurrentValue(value) {
      if (value === this.currentValue) {
        return false;
      }
      this.currentValue = value;
      this.validate();
      this.$emit('input', value);
      this.$emit('change', value);
    },
    getPickerOption: function getPickerOption() {
      return [function () {
        return this.options;
      }.bind(this)];
    },
    getLabel: function getLabel(target) {
      return this.props.label && is(target, 'object') ? target[this.props.label] : target;
    },
    getValue: function getValue(target) {
      return this.props.value && is(target, 'object') ? target[this.props.value] : target;
    }
  },
  watch: {
    'value': {
      handler: function handler(val) {
        var _this2 = this;

        this.currentItem = this.options.find(function (item) {
          return _this2.getValue(item) === val;
        });
        this.setCurrentValue(val);
      },

      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./packages/select/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_selectvue_type_script_lang_js_ = (selectvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/select/index.vue?vue&type=style&index=0&id=0dd80ac3&lang=less&scoped=true&
var selectvue_type_style_index_0_id_0dd80ac3_lang_less_scoped_true_ = __webpack_require__(56);

// CONCATENATED MODULE: ./packages/select/index.vue






/* normalize component */

var select_component = normalizeComponent(
  packages_selectvue_type_script_lang_js_,
  selectvue_type_template_id_0dd80ac3_scoped_true_render,
  selectvue_type_template_id_0dd80ac3_scoped_true_staticRenderFns,
  false,
  null,
  "0dd80ac3",
  null
  
)

/* hot reload */
if (false) { var select_api; }
select_component.options.__file = "packages/select/index.vue"
/* harmony default export */ var packages_select = (select_component.exports);
// CONCATENATED MODULE: ./packages/select/index.js


/* istanbul ignore next */
packages_select.install = function (Vue) {
  Vue.component(packages_select.name, packages_select);
};

/* harmony default export */ var packages_select_0 = (packages_select);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/steps/step-item.vue?vue&type=template&id=fd83a810&scoped=true&
var step_itemvue_type_template_id_fd83a810_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pl-step", class: ["pl-step--" + _vm.direction] },
    [
      _c(
        "div",
        { staticClass: "pl-step-circle" },
        [
          _vm._t("icon", [
            _vm.active
              ? _c("icon", {
                  attrs: { name: "icon-btn_choose", fill: _vm.activeColor }
                })
              : _c("i", { staticClass: "icon-default" })
          ]),
          !_vm.isLast ? _c("div", { staticClass: "pl-step-line" }) : _vm._e()
        ],
        2
      ),
      _c(
        "div",
        {
          staticClass: "pl-step-title",
          style: { color: _vm.active ? _vm.activeColor : "#9898B6" }
        },
        [_vm._t("default")],
        2
      )
    ]
  )
}
var step_itemvue_type_template_id_fd83a810_scoped_true_staticRenderFns = []
step_itemvue_type_template_id_fd83a810_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/steps/step-item.vue?vue&type=template&id=fd83a810&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/steps/step-item.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



// step-item
/* harmony default export */ var step_itemvue_type_script_lang_js_ = ({
  name: 'plStepItem',
  componentName: 'plStepItem',
  components: {
    icon: icon
  },
  data: function data() {
    return {};
  },

  computed: {
    isFirst: function isFirst() {
      return this.$parent.items.indexOf(this) === 0;
    },
    isLast: function isLast() {
      return this.$parent.items.indexOf(this) === this.$parent.items.length - 1;
    },
    active: function active() {
      var index = this.$parent.items.indexOf(this);
      var active = this.$parent.active;
      return index === active;
    },
    activeColor: function activeColor() {
      return this.$parent.activeColor || 'currentColor';
    },
    direction: function direction() {
      return this.$parent.direction;
    }
  },

  mounted: function mounted() {
    this.$parent.updateItems();
  },
  destroyed: function destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.$parent.removeItem(this);
  }
});
// CONCATENATED MODULE: ./packages/steps/step-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var steps_step_itemvue_type_script_lang_js_ = (step_itemvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/steps/step-item.vue?vue&type=style&index=0&id=fd83a810&lang=less&scoped=true&
var step_itemvue_type_style_index_0_id_fd83a810_lang_less_scoped_true_ = __webpack_require__(58);

// CONCATENATED MODULE: ./packages/steps/step-item.vue






/* normalize component */

var step_item_component = normalizeComponent(
  steps_step_itemvue_type_script_lang_js_,
  step_itemvue_type_template_id_fd83a810_scoped_true_render,
  step_itemvue_type_template_id_fd83a810_scoped_true_staticRenderFns,
  false,
  null,
  "fd83a810",
  null
  
)

/* hot reload */
if (false) { var step_item_api; }
step_item_component.options.__file = "packages/steps/step-item.vue"
/* harmony default export */ var step_item = (step_item_component.exports);
// CONCATENATED MODULE: ./packages/stepItem/index.js


/* istanbul ignore next */
step_item.install = function (Vue) {
  Vue.component(step_item.name, step_item);
};

/* harmony default export */ var stepItem = (step_item);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/steps/index.vue?vue&type=template&id=02025656&scoped=true&
var stepsvue_type_template_id_02025656_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pl-steps", class: ["pl-steps--" + _vm.direction] },
    [
      _c(
        "div",
        {
          staticClass: "pl-steps-items",
          class: { "pl-steps-fold": _vm.isFold }
        },
        [_vm._t("default")],
        2
      ),
      _vm.direction === "vertical" && _vm.items.length > 1
        ? _c(
            "div",
            { staticClass: "pl-steps-toggle", on: { click: _vm.toggle } },
            [
              _vm.isFold
                ? _c(
                    "span",
                    [
                      _c("icon", {
                        attrs: { fill: "#C2C5CE", name: "icon-icon_more_down" }
                      }),
                      _vm._v("展开")
                    ],
                    1
                  )
                : _c(
                    "span",
                    [
                      _c("icon", {
                        attrs: { fill: "#C2C5CE", name: "icon-icon_more_up" }
                      }),
                      _vm._v("收起")
                    ],
                    1
                  )
            ]
          )
        : _vm._e()
    ]
  )
}
var stepsvue_type_template_id_02025656_scoped_true_staticRenderFns = []
stepsvue_type_template_id_02025656_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/steps/index.vue?vue&type=template&id=02025656&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/steps/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//



// steps
/* harmony default export */ var stepsvue_type_script_lang_js_ = ({
  name: 'plSteps',
  componentName: 'plSteps',
  components: {
    icon: icon
  },
  props: {
    active: { //  当前步骤 0
      type: Number,
      default: 0
    },
    activeColor: { //  当前激活的颜色
      type: String,
      default: '#67c23a'
    },
    direction: { // 显示方向，可选值为 vertical horizontal
      type: String,
      default: 'vertical'
    },
    fold: { // 是否默认折叠
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      currentItem: this.active === undefined ? 0 : this.active, // 当前激活标签
      isFold: this.fold === undefined ? true : this.fold, // 是否折叠
      items: [] // 内容节点列表
    };
  },

  computed: {},
  mounted: function mounted() {
    this.updateItems();
  },

  methods: {
    setCurrentItem: function setCurrentItem(value) {
      if (this.currentItem === value) {
        return false;
      }
      this.currentItem = value;
    },

    // 更新内容节点
    updateItems: function updateItems() {
      this.items = this.$children.filter(function (item) {
        return item.$options.name === 'plStepItem';
      });
    },

    // 删除内容节点
    removeItem: function removeItem(item) {
      var items = this.items;
      var index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },

    // 展开/收起
    toggle: function toggle() {
      this.isFold = !this.isFold;
    }
  },
  watch: {
    'active': function active(val) {
      this.setCurrentItem(val);
    },
    'fold': function fold(val) {
      this.isFold = val;
    }
  }
});
// CONCATENATED MODULE: ./packages/steps/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_stepsvue_type_script_lang_js_ = (stepsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/steps/index.vue?vue&type=style&index=0&id=02025656&lang=less&scoped=true&
var stepsvue_type_style_index_0_id_02025656_lang_less_scoped_true_ = __webpack_require__(60);

// CONCATENATED MODULE: ./packages/steps/index.vue






/* normalize component */

var steps_component = normalizeComponent(
  packages_stepsvue_type_script_lang_js_,
  stepsvue_type_template_id_02025656_scoped_true_render,
  stepsvue_type_template_id_02025656_scoped_true_staticRenderFns,
  false,
  null,
  "02025656",
  null
  
)

/* hot reload */
if (false) { var steps_api; }
steps_component.options.__file = "packages/steps/index.vue"
/* harmony default export */ var steps = (steps_component.exports);
// CONCATENATED MODULE: ./packages/steps/index.js


/* istanbul ignore next */
steps.install = function (Vue) {
  Vue.component(steps.name, steps);
};

/* harmony default export */ var packages_steps = (steps);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/swipe/index.vue?vue&type=template&id=3d2606a9&
var swipevue_type_template_id_3d2606a9_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div")
}
var swipevue_type_template_id_3d2606a9_staticRenderFns = []
swipevue_type_template_id_3d2606a9_render._withStripped = true


// CONCATENATED MODULE: ./packages/swipe/index.vue?vue&type=template&id=3d2606a9&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/swipe/index.vue?vue&type=script&lang=js&
//
//
//
//

// TODO swipe
/* harmony default export */ var swipevue_type_script_lang_js_ = ({
  name: 'plSwipe',
  componentName: 'plSwipe'
});
// CONCATENATED MODULE: ./packages/swipe/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_swipevue_type_script_lang_js_ = (swipevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/swipe/index.vue





/* normalize component */

var swipe_component = normalizeComponent(
  packages_swipevue_type_script_lang_js_,
  swipevue_type_template_id_3d2606a9_render,
  swipevue_type_template_id_3d2606a9_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var swipe_api; }
swipe_component.options.__file = "packages/swipe/index.vue"
/* harmony default export */ var swipe = (swipe_component.exports);
// CONCATENATED MODULE: ./packages/swipe/index.js


/* istanbul ignore next */
swipe.install = function (Vue) {
  Vue.component(swipe.name, swipe);
};

/* harmony default export */ var packages_swipe = (swipe);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabs/tab-item.vue?vue&type=template&id=bcd783b0&
var tab_itemvue_type_template_id_bcd783b0_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.active,
          expression: "active"
        }
      ],
      staticClass: "pl-tab-item",
      class: { "is-active": _vm.active }
    },
    [_vm._t("default")],
    2
  )
}
var tab_itemvue_type_template_id_bcd783b0_staticRenderFns = []
tab_itemvue_type_template_id_bcd783b0_render._withStripped = true


// CONCATENATED MODULE: ./packages/tabs/tab-item.vue?vue&type=template&id=bcd783b0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabs/tab-item.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var tab_itemvue_type_script_lang_js_ = ({
  name: 'plTabItem',
  componentName: 'plTabItem',

  props: {
    label: String,
    name: [String, Number],
    disabled: Boolean
  },

  data: function data() {
    return {};
  },


  computed: {
    active: function active() {
      return this.$parent.currentName === this.name;
    }
  },

  mounted: function mounted() {
    this.$parent.updateItems();
  },
  destroyed: function destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el);
    }
    this.$parent.removeItem(this);
  },


  watch: {
    label: function label() {
      this.$parent.$forceUpdate();
    }
  }
});
// CONCATENATED MODULE: ./packages/tabs/tab-item.vue?vue&type=script&lang=js&
 /* harmony default export */ var tabs_tab_itemvue_type_script_lang_js_ = (tab_itemvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/tabs/tab-item.vue





/* normalize component */

var tab_item_component = normalizeComponent(
  tabs_tab_itemvue_type_script_lang_js_,
  tab_itemvue_type_template_id_bcd783b0_render,
  tab_itemvue_type_template_id_bcd783b0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var tab_item_api; }
tab_item_component.options.__file = "packages/tabs/tab-item.vue"
/* harmony default export */ var tab_item = (tab_item_component.exports);
// CONCATENATED MODULE: ./packages/tabItem/index.js


/* istanbul ignore next */
tab_item.install = function (Vue) {
  Vue.component(tab_item.name, tab_item);
};

/* harmony default export */ var tabItem = (tab_item);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabs/index.vue?vue&type=template&id=e9d26c76&scoped=true&
var tabsvue_type_template_id_e9d26c76_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._g(
      {
        ref: "tabs",
        staticClass: "pl-tabs",
        class: ["is-" + _vm.type, "is-" + _vm.position]
      },
      _vm.$listeners
    ),
    [
      _c(
        "div",
        {
          staticClass: "pl-tab-title",
          on: {
            touchstart: function($event) {
              return _vm.touchEvent($event)
            },
            touchmove: function($event) {
              return _vm.touchEvent($event)
            },
            touchend: function($event) {
              return _vm.touchEvent($event)
            },
            touchcancel: function($event) {
              return _vm.touchEvent($event)
            }
          }
        },
        [
          _c(
            "div",
            {
              ref: "title",
              staticClass: "pl-tab-title-inner",
              style: _vm.titleStyle
            },
            [
              _vm.type === "card"
                ? _c("div", { staticClass: "tab-line", style: _vm.lineStyle })
                : _vm._e(),
              _vm._l(_vm.titleArray, function(title) {
                return _c(
                  "div",
                  {
                    key: title.name,
                    ref: "title-item",
                    refInFor: true,
                    staticClass: "tab-title",
                    class: {
                      "is-active": title.name === _vm.currentName,
                      "is-disabled": title.disabled
                    },
                    on: {
                      click: function($event) {
                        return _vm.setCurrentName(title.name, title.disabled)
                      }
                    }
                  },
                  [
                    _c(
                      "span",
                      [
                        _vm._t("title", [_vm._v(_vm._s(title.label))], {
                          title: title
                        })
                      ],
                      2
                    )
                  ]
                )
              })
            ],
            2
          )
        ]
      ),
      _c("div", { staticClass: "pl-tab-content" }, [_vm._t("default")], 2)
    ]
  )
}
var tabsvue_type_template_id_e9d26c76_scoped_true_staticRenderFns = []
tabsvue_type_template_id_e9d26c76_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/tabs/index.vue?vue&type=template&id=e9d26c76&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/tabs/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var tabsvue_type_script_lang_js_ = ({
  name: 'plTabs',
  componentName: 'plTabs',

  props: {
    // 风格类型：card/border-card/button
    type: {
      type: String,
      default: 'card'
    },
    // 绑定值，选中选项卡的 name：第一个选项卡的 name
    value: {
      type: [String, Number],
      default: ''
    },
    // 选项卡所在位置：top/right/bottom/left
    position: {
      type: String,
      default: 'top'
    }
  },
  data: function data() {
    return {
      currentName: this.value === undefined ? '' : this.value, // 当前激活标签
      items: [], // 内容节点列表
      titles: [], // 标题节点列表

      tabSize: 0, // tab宽/高
      titleSize: 0, // 标题宽/高

      swipeDir: null, // 标题滑动方向
      transition: null,
      translate: 0,
      transDiff: 0,
      transStart: 0,
      transEnd: 0
    };
  },

  computed: {
    // 当前选中的标题节点
    currentTitleNode: function currentTitleNode() {
      var _this = this;

      var index = this.titleArray.findIndex(function (item) {
        return item.name === _this.currentName;
      });
      if (this.titles.length) {
        return this.titles[index];
      } else {
        return null;
      }
    },

    // 标题对象数组
    titleArray: function titleArray() {
      return this.items.map(function (item) {
        return {
          name: item.name,
          label: item.label,
          disabled: item.disabled
        };
      });
    },

    // 标题
    titleStyle: function titleStyle() {
      var transform = this.swipeDir === 'column' ? 'translateX(' + -this.translate + 'px)' : 'translateY(' + -this.translate + 'px)';

      return {
        transform: transform,
        webkitTransform: transform,
        transition: this.transition,
        webkitTransition: this.transition
      };
    },

    // 标题底线样式
    lineStyle: function lineStyle() {
      if (this.currentTitleNode) {
        var width = this.swipeDir === 'column' ? this.currentTitleNode.offsetWidth + 'px' : '3px';
        var height = this.swipeDir === 'row' ? this.currentTitleNode.offsetHeight + 'px' : '3px';
        var transform = this.swipeDir === 'column' ? 'translateX(' + this.currentTitleNode.offsetLeft + 'px)' : 'translateY(' + this.currentTitleNode.offsetTop + 'px)';

        return {
          width: width,
          height: height,
          transform: transform,
          webkitTransform: transform
        };
      } else {
        return null;
      }
    }
  },
  mounted: function mounted() {
    this.updateItems();
  },

  methods: {
    setCurrentName: function setCurrentName(value, disabled) {
      if (disabled) {
        return false;
      }
      if (this.currentName === value) {
        return false;
      }
      this.currentName = value;
      this.$emit('input', value);
      this.$emit('change', value);
    },

    // 更新内容节点
    updateItems: function updateItems() {
      this.items = this.$children.filter(function (item) {
        return item.$options.name === 'plTabItem';
      });
    },

    // 删除内容节点
    removeItem: function removeItem(item) {
      var items = this.items;
      var index = items.indexOf(item);
      if (index > -1) {
        items.splice(index, 1);
      }
    },

    // 标题触摸事件
    touchEvent: function touchEvent(e) {
      if (this.tabSize >= this.titleSize) {
        return false;
      }

      switch (e.type) {
        case 'touchstart':
          this.transDiff = this.translate;

          if (this.swipeDir === 'column') {
            this.transStart = e.touches[0].clientX;
          } else {
            this.transStart = e.touches[0].clientY;
          }
          this.transition = 'none';
          break;
        case 'touchmove':
          e.preventDefault();
          e.stopPropagation();

          if (this.swipeDir === 'column') {
            this.transEnd = e.touches[0].clientX;
          } else {
            this.transEnd = e.touches[0].clientY;
          }
          this.translate = this.transDiff + this.transStart - this.transEnd;
          break;
        case 'touchend':
        case 'touchcancel':
          this.transition = null;
          if (this.translate < 0) {
            this.translate = 0;
          } else if (this.translate + this.tabSize > this.titleSize) {
            this.translate = this.titleSize - this.tabSize;
          }
          break;
      }
    }
  },
  watch: {
    'value': function value(val) {
      this.setCurrentName(val);
    },
    'titleArray': function titleArray() {
      var _this2 = this;

      this.$nextTick(function () {
        // 更新标题节点
        if (_this2.$refs['title-item'] && _this2.$refs['title-item'].length) {
          _this2.titles = _this2.$refs['title-item'];
        }

        _this2.swipeDir = /^(top|bottom)$/.test(_this2.position) ? 'column' : 'row';

        // 标题滑动方向，如果标题过长则返回
        if (_this2.swipeDir === 'column') {
          _this2.tabSize = _this2.$refs.tabs.clientWidth;
          _this2.titleSize = _this2.$refs.title.scrollWidth;
        } else {
          _this2.tabSize = _this2.$refs.tabs.clientHeight;
          _this2.titleSize = _this2.$refs.title.scrollHeight;
        }
      });
    },
    'currentTitleNode': function currentTitleNode(val) {
      var titleSize = this.titleSize;
      var tabSize = this.tabSize;

      // 如果标题在可是区域外则滚动至可见
      if (val && titleSize > tabSize) {
        if (this.swipeDir === 'column') {
          var width = val.offsetWidth;
          var offset = val.offsetLeft + width - this.translate;
          if (offset > tabSize - width) {
            this.translate += tabSize / 2;
          } else if (offset < width * 2) {
            this.translate -= tabSize / 2;
          }
        } else if (this.swipeDir === 'row') {
          var height = val.offsetHeight;
          var _offset = val.offsetTop + height - this.translate;
          if (_offset > tabSize - height) {
            this.translate += tabSize / 2;
          } else if (_offset < height * 2) {
            this.translate -= tabSize / 2;
          }
        }
        if (this.translate < 0) {
          this.translate = 0;
        } else if (this.translate + tabSize > titleSize) {
          this.translate = titleSize - tabSize;
        }
      }
    }
  }
});
// CONCATENATED MODULE: ./packages/tabs/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_tabsvue_type_script_lang_js_ = (tabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/tabs/index.vue?vue&type=style&index=0&id=e9d26c76&lang=less&scoped=true&
var tabsvue_type_style_index_0_id_e9d26c76_lang_less_scoped_true_ = __webpack_require__(62);

// CONCATENATED MODULE: ./packages/tabs/index.vue






/* normalize component */

var tabs_component = normalizeComponent(
  packages_tabsvue_type_script_lang_js_,
  tabsvue_type_template_id_e9d26c76_scoped_true_render,
  tabsvue_type_template_id_e9d26c76_scoped_true_staticRenderFns,
  false,
  null,
  "e9d26c76",
  null
  
)

/* hot reload */
if (false) { var tabs_api; }
tabs_component.options.__file = "packages/tabs/index.vue"
/* harmony default export */ var tabs = (tabs_component.exports);
// CONCATENATED MODULE: ./packages/tabs/index.js


/* istanbul ignore next */
tabs.install = function (Vue) {
  Vue.component(tabs.name, tabs);
};

/* harmony default export */ var packages_tabs = (tabs);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./packages/upload/index.vue?vue&type=template&id=be4dbcf0&scoped=true&
var uploadvue_type_template_id_be4dbcf0_scoped_true_render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "pl-upload" },
    [
      _c(
        "div",
        { staticClass: "rows", style: _vm.rowStyle },
        [
          _vm._l(_vm.files, function(file, i) {
            return _c("div", { key: i, staticClass: "cols" }, [
              _c(
                "div",
                { staticClass: "pl-file-preview" },
                [
                  _c("div", {
                    staticClass: "pl-upload-img",
                    style: { "background-image": "url(" + file.preview + ")" },
                    on: {
                      click: function($event) {
                        return _vm.preview(i, file)
                      }
                    }
                  }),
                  !_vm.disabled
                    ? _c(
                        "div",
                        {
                          staticClass: "pl-upload-del",
                          on: {
                            click: function($event) {
                              return _vm.delFile(i)
                            }
                          }
                        },
                        [
                          _c("icon", { attrs: { name: "icon-roundclosefill" } })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._t("append", null, { file: file })
                ],
                2
              )
            ])
          }),
          !_vm.disabled && _vm.files.length < _vm.maxCount
            ? _c("div", { staticClass: "cols" }, [
                _c(
                  "div",
                  { staticClass: "pl-upload-button" },
                  [
                    _c("input", {
                      staticClass: "file-input",
                      attrs: {
                        type: "file",
                        multiple: _vm.multiple,
                        accept: _vm.accept,
                        capture: _vm.capture
                      },
                      on: { change: _vm.setFiles }
                    }),
                    _vm._t("button", [
                      _c(
                        "div",
                        { staticClass: "pl-add-button" },
                        [
                          _c("icon", {
                            staticClass: "pl-upload-add",
                            attrs: { name: "icon-jia" }
                          })
                        ],
                        1
                      )
                    ])
                  ],
                  2
                )
              ])
            : _vm._e()
        ],
        2
      ),
      _vm._t("default"),
      _vm.dialogPreview
        ? _c("div", { staticClass: "pl-preview-dialog" }, [
            _c(
              "ul",
              {
                ref: "preview-list",
                staticClass: "preview-list",
                style: { transform: "translateX(" + -_vm.translateX + "px)" },
                on: {
                  touchstart: function($event) {
                    return _vm.touchEvent($event)
                  },
                  touchmove: function($event) {
                    return _vm.touchEvent($event)
                  },
                  touchend: function($event) {
                    return _vm.touchEvent($event)
                  },
                  touchcancel: function($event) {
                    return _vm.touchEvent($event)
                  },
                  click: _vm.closePreview
                }
              },
              _vm._l(_vm.files, function(file, i) {
                return _c("li", {
                  key: i,
                  staticClass: "preview-item",
                  style: {
                    "background-image": "url(" + file.preview + ")",
                    left: i * 100 + "%"
                  }
                })
              }),
              0
            ),
            _c("div", { staticClass: "preview-index" }, [
              _vm._v(
                _vm._s(_vm.previewIndex + 1) + "/" + _vm._s(_vm.files.length)
              )
            ])
          ])
        : _vm._e()
    ],
    2
  )
}
var uploadvue_type_template_id_be4dbcf0_scoped_true_staticRenderFns = []
uploadvue_type_template_id_be4dbcf0_scoped_true_render._withStripped = true


// CONCATENATED MODULE: ./packages/upload/index.vue?vue&type=template&id=be4dbcf0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./packages/upload/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var uploadvue_type_script_lang_js_ = ({
  name: 'plUpload',
  componentName: 'plUpload',
  components: {
    icon: icon
  },
  props: {
    value: Array,
    accept: { // 接受的文件类型
      type: String,
      default: '*/*'
    },
    rows: {
      type: Number, // 文件列表项宽
      default: 4
    },
    multiple: Boolean, // 是否开启图片多选，部分安卓机型不支持
    disabled: Boolean, // 是否禁用文件上传
    capture: String, // 图片选取模式，可选值为 camera (直接调起摄像头)
    beforeRead: Function, // 文件读取前的回调函数，返回false可终止文件读取
    afterRead: Function, // 文件读取完成后的回调函数
    maxSize: { // 文件大小限制，单位为byte
      type: Number,
      default: Infinity
    },
    maxCount: { // 文件上传数量限制
      type: Number,
      default: Infinity
    }
  },
  data: function data() {
    return {
      files: [],

      dialogPreview: false,
      previewIndex: 0,
      transStart: 0,
      transDiff: 0
    };
  },

  computed: {
    // 列的样式
    rowStyle: function rowStyle() {
      return {
        'grid-template-columns': 'repeat(' + this.rows + ', 1fr)'
      };
    },

    // 预览图便宜量
    translateX: function translateX() {
      return this.previewIndex * window.innerWidth;
    }
  },
  methods: {
    // 预览
    preview: function preview(index, file) {
      if (file.type === 'img') {
        this.dialogPreview = true;
        this.previewIndex = index;
      } else {
        window.open(file.url);
      }
    },
    closePreview: function closePreview() {
      this.dialogPreview = false;
    },

    // 删除文件
    delFile: function delFile(index) {
      this.files.splice(index, 1);
    },

    // 获取文件类型
    getFileType: function getFileType(file) {
      return (/image/.test(file.type) || /\.(jpe?g|png|gif|bmp)$/i.test(file.name) ? 'img' : /\.doc(x|m)?$/i.test(file.name) ? 'doc' : /\.xls(x|b|m)?$/i.test(file.name) ? 'xls' : /\.ppt(x|m)?$/i.test(file.name) ? 'ppt' : /\.pdf$/i.test(file.name) ? 'pdf' : ''
      );
    },

    // 根据文件类型获取预览图
    getFilePreview: function getFilePreview(file) {
      var previewUrl = {
        img: this.getFileUrl(file),
        doc: __webpack_require__(23),
        xls: __webpack_require__(23),
        ppt: __webpack_require__(23),
        pdf: __webpack_require__(64)
      };
      return previewUrl[this.getFileType(file)];
    },

    // 获取文件链接
    getFileUrl: function getFileUrl(file) {
      if (file.url) {
        return file.url;
      }
      if (file instanceof File) {
        return window.URL.createObjectURL(file);
      }
      return null;
    },

    // 获取文件
    setFiles: function setFiles(e) {
      var _this = this;

      var files = Array.from(e.target.files);
      var normalFiles = [];
      var oversizeFiles = [];

      files.forEach(function (file) {
        if (file.size > _this.maxSize) {
          oversizeFiles.push(file);
        } else {
          normalFiles.push(file);
        }
      });

      if (oversizeFiles.length) {
        this.$emit('oversize', oversizeFiles); // 文件超大事件
      }

      if (normalFiles.length && (!is(this.beforeRead, 'function') || this.beforeRead(normalFiles))) {
        // 文件选择前置钩子
        var fileLength = normalFiles.length + this.files.length;
        if (fileLength > this.maxCount) {
          this.$emit('exceed', fileLength - this.maxCount); // 文件数量超出事件
          normalFiles = normalFiles.slice(0, this.maxCount - fileLength);
        }
        this.files = this.files.concat(normalFiles.map(function (file) {
          return {
            type: _this.getFileType(file),
            url: _this.getFileUrl(file),
            preview: _this.getFilePreview(file),
            file: file
          };
        }));
        // 文件选择后置钩子
        is(this.afterRead, 'function') && this.afterRead(normalFiles);
      }
    },

    // 预览触摸滚动事件
    touchEvent: function touchEvent(e) {
      var list = this.$refs['preview-list'];

      switch (e.type) {
        case 'touchstart':
          this.transStart = e.touches[0].clientX;
          list.style.transition = list.style.webkitTransition = 'none';
          break;
        case 'touchmove':
          this.transDiff = e.touches[0].clientX - this.transStart;
          list.style.transform = list.style.webkitTransform = 'translateX(' + (this.transDiff - this.translateX) + 'px)';
          break;
        case 'touchend':
        case 'touchcancel':
          list.style.transition = list.style.webkitTransition = '';
          if (this.transDiff > 0) {
            this.previewIndex--;
          } else {
            this.previewIndex++;
          }
          if (this.previewIndex < 0) {
            this.previewIndex = 0;
          }
          if (this.previewIndex >= this.files.length) {
            this.previewIndex = this.files.length - 1;
          }
          list.style.transform = list.style.webkitTransform = 'translateX(' + -this.translateX + 'px)';
          break;
      }
    }
  },
  watch: {
    'files': {
      handler: function handler(val) {
        this.$emit('input', val);
      },

      deep: true
    },
    'value': {
      handler: function handler(val) {
        var _this2 = this;

        if (Array.isArray(val)) {
          val.forEach(function (file) {
            if (!file.url) {
              file.url = _this2.getFileUrl(file);
            }
            if (!file.preview) {
              file.preview = _this2.getFilePreview(file);
            }
            if (!file.type) {
              file.type = _this2.getFileType(file);
            }
          });
          this.$set(this, 'files', val);
        }
      },

      immediate: true
    }
  }
});
// CONCATENATED MODULE: ./packages/upload/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var packages_uploadvue_type_script_lang_js_ = (uploadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/upload/index.vue?vue&type=style&index=0&id=be4dbcf0&lang=less&scoped=true&
var uploadvue_type_style_index_0_id_be4dbcf0_lang_less_scoped_true_ = __webpack_require__(65);

// CONCATENATED MODULE: ./packages/upload/index.vue






/* normalize component */

var upload_component = normalizeComponent(
  packages_uploadvue_type_script_lang_js_,
  uploadvue_type_template_id_be4dbcf0_scoped_true_render,
  uploadvue_type_template_id_be4dbcf0_scoped_true_staticRenderFns,
  false,
  null,
  "be4dbcf0",
  null
  
)

/* hot reload */
if (false) { var upload_api; }
upload_component.options.__file = "packages/upload/index.vue"
/* harmony default export */ var upload = (upload_component.exports);
// CONCATENATED MODULE: ./packages/upload/index.js


/* istanbul ignore next */
upload.install = function (Vue) {
  Vue.component(upload.name, upload);
};

/* harmony default export */ var packages_upload = (upload);
// CONCATENATED MODULE: ./src/index.js
/*!
 * @author liyuelong1020@gmail.com
 * @date 2019/6/28 028
 * @description Description
 */





























var components = [packages_button_0, packages_cell, packages_checkbox_0, packages_collapse, packages_datetime, packages_dialog, packages_form_0, packages_goTopButton, packages_icon, packages_input, packages_list, packages_picker, packages_progress, packages_radio_0, packages_range, packages_select_0, stepItem, packages_steps, packages_swipe, tabItem, packages_tabs, packages_upload];

var src_install = function install(Vue) {
  components.forEach(function (component) {
    Vue.component(component.name, component);
  });

  Vue.use(packages_loading);
  Vue.use(message_alert);
  Vue.use(message_confirm);
  Vue.use(toast);
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  src_install(window.Vue);
}

/* harmony default export */ var src = __webpack_exports__["default"] = ({
  version: '1.0.0',
  install: src_install,
  Button: packages_button_0,
  Cell: packages_cell,
  Checkbox: packages_checkbox_0,
  Collapse: packages_collapse,
  Datetime: packages_datetime,
  Dialog: packages_dialog,
  Form: packages_form_0,
  GoTopButton: packages_goTopButton,
  Icon: packages_icon,
  Input: packages_input,
  List: packages_list,
  Picker: packages_picker,
  Progress: packages_progress,
  Radio: packages_radio_0,
  Range: packages_range,
  Select: packages_select_0,
  StepItem: stepItem,
  Steps: packages_steps,
  Swipe: packages_swipe,
  TabItem: tabItem,
  Tabs: packages_tabs,
  Upload: packages_upload
});

/***/ })
/******/ ])["default"];