(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === "object" && typeof module === "object")
    module.exports = factory()
  else if (typeof define === "function" && define.amd) define([], factory)
  else {
    var a = factory()
    for (var i in a) (typeof exports === "object" ? exports : root)[i] = a[i]
  }
})(self, function () {
  return /******/ (() => {
    // webpackBootstrap
    /******/ var __webpack_modules__ = [null
      ,
      /* 0 */ /* 1 */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        // extracted by mini-css-extract-plugin

        /***/
      },
      /* 2 */
      /***/ (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__,
      ) => {
        /* provided dependency */ var $ = __webpack_require__(3)
   

        /***/
      },
      /* 3 */
      /***/ function (module, exports) {
        var __WEBPACK_AMD_DEFINE_ARRAY__,
          __WEBPACK_AMD_DEFINE_RESULT__ /*!
           * jQuery JavaScript Library v3.7.0
           * https://jquery.com/
           *
           * Copyright OpenJS Foundation and other contributors
           * Released under the MIT license
           * https://jquery.org/license
           *
           * Date: 2023-05-11T18:29Z
           */
        ;(function (global, factory) {
          "use strict"

          if (true && typeof module.exports === "object") {
            // For CommonJS and CommonJS-like environments where a proper `window`
            // is present, execute the factory and get jQuery.
            // For environments that do not have a `window` with a `document`
            // (such as Node.js), expose a factory as module.exports.
            // This accentuates the need for the creation of a real `window`.
            // e.g. var jQuery = require("jquery")(window);
            // See ticket trac-14549 for more info.
            module.exports = global.document
              ? factory(global, true)
              : function (w) {
                  if (!w.document) {
                    throw new Error("jQuery requires a window with a document")
                  }
                  return factory(w)
                }
          } else {
            factory(global)
          }

          // Pass this if window is not defined yet
        })(
          typeof window !== "undefined" ? window : this,
          function (window, noGlobal) {
            // Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
            // throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
            // arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
            // enough that all such attempts are guarded in a try block.
            "use strict"

            var arr = []

            var getProto = Object.getPrototypeOf

            var slice = arr.slice

            var flat = arr.flat
              ? function (array) {
                  return arr.flat.call(array)
                }
              : function (array) {
                  return arr.concat.apply([], array)
                }

            var push = arr.push

            var indexOf = arr.indexOf

            var class2type = {}

            var toString = class2type.toString

            var hasOwn = class2type.hasOwnProperty

            var fnToString = hasOwn.toString

            var ObjectFunctionString = fnToString.call(Object)

            var support = {}

            var isFunction = function isFunction(obj) {
              // Support: Chrome <=57, Firefox <=52
              // In some browsers, typeof returns "function" for HTML <object> elements
              // (i.e., `typeof document.createElement( "object" ) === "function"`).
              // We don't want to classify *any* DOM node as a function.
              // Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
              // Plus for old WebKit, typeof returns "function" for HTML collections
              // (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
              return (
                typeof obj === "function" &&
                typeof obj.nodeType !== "number" &&
                typeof obj.item !== "function"
              )
            }

            var isWindow = function isWindow(obj) {
              return obj != null && obj === obj.window
            }

            var document = window.document

            var preservedScriptAttributes = {
              type: true,
              src: true,
              nonce: true,
              noModule: true,
            }

            function DOMEval(code, node, doc) {
              doc = doc || document
              var i,
                val,
                script = doc.createElement("script")

              script.text = code
              if (node) {
                for (i in preservedScriptAttributes) {
                  // Support: Firefox 64+, Edge 18+
                  // Some browsers don't support the "nonce" property on scripts.
                  // On the other hand, just using `getAttribute` is not enough as
                  // the `nonce` attribute is reset to an empty string whenever it
                  // becomes browsing-context connected.
                  // See https://github.com/whatwg/html/issues/2369
                  // See https://html.spec.whatwg.org/#nonce-attributes
                  // The `node.getAttribute` check was added for the sake of
                  // `jQuery.globalEval` so that it can fake a nonce-containing node
                  // via an object.
                  val = node[i] || (node.getAttribute && node.getAttribute(i))
                  if (val) {
                    script.setAttribute(i, val)
                  }
                }
              }
              doc.head.appendChild(script).parentNode.removeChild(script)
            }

            function toType(obj) {
              if (obj == null) {
                return obj + ""
              }

              // Support: Android <=2.3 only (functionish RegExp)
              return typeof obj === "object" || typeof obj === "function"
                ? class2type[toString.call(obj)] || "object"
                : typeof obj
            }
            /* global Symbol */
            // Defining this global in .eslintrc.json would create a danger of using the global
            // unguarded in another place, it seems safer to define global only for this module

            var version = "3.7.0",
              rhtmlSuffix = /HTML$/i,
              // Define a local copy of jQuery
              jQuery = function (selector, context) {
                // The jQuery object is actually just the init constructor 'enhanced'
                // Need init if jQuery is called (just allow error to be thrown if not included)
                return new jQuery.fn.init(selector, context)
              }

            jQuery.fn = jQuery.prototype = {
              // The current version of jQuery being used
              jquery: version,

              constructor: jQuery,

              // The default length of a jQuery object is 0
              length: 0,

              toArray: function () {
                return slice.call(this)
              },

              // Get the Nth element in the matched element set OR
              // Get the whole matched element set as a clean array
              get: function (num) {
                // Return all the elements in a clean array
                if (num == null) {
                  return slice.call(this)
                }

                // Return just the one element from the set
                return num < 0 ? this[num + this.length] : this[num]
              },

              // Take an array of elements and push it onto the stack
              // (returning the new matched element set)
              pushStack: function (elems) {
                // Build a new jQuery matched element set
                var ret = jQuery.merge(this.constructor(), elems)

                // Add the old object onto the stack (as a reference)
                ret.prevObject = this

                // Return the newly-formed element set
                return ret
              },

              // Execute a callback for every element in the matched set.
              each: function (callback) {
                return jQuery.each(this, callback)
              },

              map: function (callback) {
                return this.pushStack(
                  jQuery.map(this, function (elem, i) {
                    return callback.call(elem, i, elem)
                  }),
                )
              },

              slice: function () {
                return this.pushStack(slice.apply(this, arguments))
              },

              first: function () {
                return this.eq(0)
              },

              last: function () {
                return this.eq(-1)
              },

              even: function () {
                return this.pushStack(
                  jQuery.grep(this, function (_elem, i) {
                    return (i + 1) % 2
                  }),
                )
              },

              odd: function () {
                return this.pushStack(
                  jQuery.grep(this, function (_elem, i) {
                    return i % 2
                  }),
                )
              },

              eq: function (i) {
                var len = this.length,
                  j = +i + (i < 0 ? len : 0)
                return this.pushStack(j >= 0 && j < len ? [this[j]] : [])
              },

              end: function () {
                return this.prevObject || this.constructor()
              },

              // For internal use only.
              // Behaves like an Array's method, not like a jQuery method.
              push: push,
              sort: arr.sort,
              splice: arr.splice,
            }

            jQuery.extend = jQuery.fn.extend = function () {
              let options,
                name,
                src,
                copy,
                copyIsArray,
                clone,
                target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = false

              // Handle a deep copy situation
              if (typeof target === "boolean") {
                deep = target

                // Skip the boolean and the target
                target = arguments[i] || {}
                i++
              }

              // Handle case when target is a string or something (possible in deep copy)
              if (typeof target !== "object" && !isFunction(target)) {
                target = {}
              }

              // Extend jQuery itself if only one argument is passed
              if (i === length) {
                target = this
                i--
              }

              for (; i < length; i++) {
                // Only deal with non-null/undefined values
                if ((options = arguments[i]) != null) {
                  // Extend the base object
                  for (name in options) {
                    copy = options[name]

                    // Prevent Object.prototype pollution
                    // Prevent never-ending loop
                    if (name === "__proto__" || target === copy) {
                      continue
                    }

                    // Recurse if we're merging plain objects or arrays
                    if (
                      deep &&
                      copy &&
                      (jQuery.isPlainObject(copy) ||
                        (copyIsArray = Array.isArray(copy)))
                    ) {
                      src = target[name]

                      // Ensure proper type for the source value
                      if (copyIsArray && !Array.isArray(src)) {
                        clone = []
                      } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                        clone = {}
                      } else {
                        clone = src
                      }
                      copyIsArray = false

                      // Never move original objects, clone them
                      target[name] = jQuery.extend(deep, clone, copy)

                      // Don't bring in undefined values
                    } else if (copy !== undefined) {
                      target[name] = copy
                    }
                  }
                }
              }

              // Return the modified object
              return target
            }

            jQuery.extend({
              // Unique for each copy of jQuery on the page
              expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

              // Assume jQuery is ready without the ready module
              isReady: true,

              error: function (msg) {
                throw new Error(msg)
              },

              noop: function () {},

              isPlainObject: function (obj) {
                var proto, Ctor

                // Detect obvious negatives
                // Use toString instead of jQuery.type to catch host objects
                if (!obj || toString.call(obj) !== "[object Object]") {
                  return false
                }

                proto = getProto(obj)

                // Objects with no prototype (e.g., `Object.create( null )`) are plain
                if (!proto) {
                  return true
                }

                // Objects with prototype are plain iff they were constructed by a global Object function
                Ctor = hasOwn.call(proto, "constructor") && proto.constructor
                return (
                  typeof Ctor === "function" &&
                  fnToString.call(Ctor) === ObjectFunctionString
                )
              },

              isEmptyObject: function (obj) {
                var name

                for (name in obj) {
                  return false
                }
                return true
              },

              // Evaluates a script in a provided context; falls back to the global one
              // if not specified.
              globalEval: function (code, options, doc) {
                DOMEval(code, { nonce: options && options.nonce }, doc)
              },

              each: function (obj, callback) {
                var length,
                  i = 0

                if (isArrayLike(obj)) {
                  length = obj.length
                  for (; i < length; i++) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                      break
                    }
                  }
                } else {
                  for (i in obj) {
                    if (callback.call(obj[i], i, obj[i]) === false) {
                      break
                    }
                  }
                }

                return obj
              },

              // Retrieve the text value of an array of DOM nodes
              text: function (elem) {
                var node,
                  ret = "",
                  i = 0,
                  nodeType = elem.nodeType

                if (!nodeType) {
                  // If no nodeType, this is expected to be an array
                  while ((node = elem[i++])) {
                    // Do not traverse comment nodes
                    ret += jQuery.text(node)
                  }
                } else if (
                  nodeType === 1 ||
                  nodeType === 9 ||
                  nodeType === 11
                ) {
                  return elem.textContent
                } else if (nodeType === 3 || nodeType === 4) {
                  return elem.nodeValue
                }

                // Do not include comment or processing instruction nodes

                return ret
              },

              // results is for internal usage only
              makeArray: function (arr, results) {
                var ret = results || []

                if (arr != null) {
                  if (isArrayLike(Object(arr))) {
                    jQuery.merge(ret, typeof arr === "string" ? [arr] : arr)
                  } else {
                    push.call(ret, arr)
                  }
                }

                return ret
              },

              inArray: function (elem, arr, i) {
                return arr == null ? -1 : indexOf.call(arr, elem, i)
              },

              isXMLDoc: function (elem) {
                var namespace = elem && elem.namespaceURI,
                  docElem = elem && (elem.ownerDocument || elem).documentElement

                // Assume HTML when documentElement doesn't yet exist, such as inside
                // document fragments.
                return !rhtmlSuffix.test(
                  namespace || (docElem && docElem.nodeName) || "HTML",
                )
              },

              // Support: Android <=4.0 only, PhantomJS 1 only
              // push.apply(_, arraylike) throws on ancient WebKit
              merge: function (first, second) {
                var len = +second.length,
                  j = 0,
                  i = first.length

                for (; j < len; j++) {
                  first[i++] = second[j]
                }

                first.length = i

                return first
              },

              grep: function (elems, callback, invert) {
                var callbackInverse,
                  matches = [],
                  i = 0,
                  length = elems.length,
                  callbackExpect = !invert

                // Go through the array, only saving the items
                // that pass the validator function
                for (; i < length; i++) {
                  callbackInverse = !callback(elems[i], i)
                  if (callbackInverse !== callbackExpect) {
                    matches.push(elems[i])
                  }
                }

                return matches
              },

              // arg is for internal usage only
              map: function (elems, callback, arg) {
                var length,
                  value,
                  i = 0,
                  ret = []

                // Go through the array, translating each of the items to their new values
                if (isArrayLike(elems)) {
                  length = elems.length
                  for (; i < length; i++) {
                    value = callback(elems[i], i, arg)

                    if (value != null) {
                      ret.push(value)
                    }
                  }

                  // Go through every key on the object,
                } else {
                  for (i in elems) {
                    value = callback(elems[i], i, arg)

                    if (value != null) {
                      ret.push(value)
                    }
                  }
                }

                // Flatten any nested arrays
                return flat(ret)
              },

              // A global GUID counter for objects
              guid: 1,

              // jQuery.support is not used in Core but other projects attach their
              // properties to it so it needs to exist.
              support: support,
            })

            if (typeof Symbol === "function") {
              jQuery.fn[Symbol.iterator] = arr[Symbol.iterator]
            }

            // Populate the class2type map
            jQuery.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " ",
              ),
              function (_i, name) {
                class2type["[object " + name + "]"] = name.toLowerCase()
              },
            )

            function isArrayLike(obj) {
              // Support: real iOS 8.2 only (not reproducible in simulator)
              // `in` check used to prevent JIT error (gh-2145)
              // hasOwn isn't used here due to false negatives
              // regarding Nodelist length in IE
              var length = !!obj && "length" in obj && obj.length,
                type = toType(obj)

              if (isFunction(obj) || isWindow(obj)) {
                return false
              }

              return (
                type === "array" ||
                length === 0 ||
                (typeof length === "number" && length > 0 && length - 1 in obj)
              )
            }

            function nodeName(elem, name) {
              return (
                elem.nodeName &&
                elem.nodeName.toLowerCase() === name.toLowerCase()
              )
            }
            var pop = arr.pop

            var sort = arr.sort

            var splice = arr.splice

            var whitespace = "[\\x20\\t\\r\\n\\f]"

            var rtrimCSS = new RegExp(
              "^" +
                whitespace +
                "+|((?:^|[^\\\\])(?:\\\\.)*)" +
                whitespace +
                "+$",
              "g",
            )

            // Note: an element does not contain itself
            jQuery.contains = function (a, b) {
              var bup = b && b.parentNode

              return (
                a === bup ||
                !!(
                  bup &&
                  bup.nodeType === 1 &&
                  // Support: IE 9 - 11+
                  // IE doesn't have `contains` on SVG.
                  (a.contains
                    ? a.contains(bup)
                    : a.compareDocumentPosition &&
                      a.compareDocumentPosition(bup) & 16)
                )
              )
            }

            // CSS string/identifier serialization
            // https://drafts.csswg.org/cssom/#common-serializing-idioms
            var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g

            function fcssescape(ch, asCodePoint) {
              if (asCodePoint) {
                // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
                if (ch === "\0") {
                  return "\uFFFD"
                }

                // Control characters and (dependent upon position) numbers get escaped as code points
                return (
                  ch.slice(0, -1) +
                  "\\" +
                  ch.charCodeAt(ch.length - 1).toString(16) +
                  " "
                )
              }

              // Other potentially-special ASCII characters get backslash-escaped
              return "\\" + ch
            }

            jQuery.escapeSelector = function (sel) {
              return (sel + "").replace(rcssescape, fcssescape)
            }

            var preferredDoc = document,
              pushNative = push

            ;(function () {
              var i,
                Expr,
                outermostContext,
                sortInput,
                hasDuplicate,
                push = pushNative,
                // Local document vars
                document,
                documentElement,
                documentIsHTML,
                rbuggyQSA,
                matches,
                // Instance-specific data
                expando = jQuery.expando,
                dirruns = 0,
                done = 0,
                classCache = createCache(),
                tokenCache = createCache(),
                compilerCache = createCache(),
                nonnativeSelectorCache = createCache(),
                sortOrder = function (a, b) {
                  if (a === b) {
                    hasDuplicate = true
                  }
                  return 0
                },
                booleans =
                  "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
                  "loop|multiple|open|readonly|required|scoped",
                // Regular expressions

                // https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
                identifier =
                  "(?:\\\\[\\da-fA-F]{1,6}" +
                  whitespace +
                  "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                // Attribute selectors: https://www.w3.org/TR/selectors/#attribute-selectors
                attributes =
                  "\\[" +
                  whitespace +
                  "*(" +
                  identifier +
                  ")(?:" +
                  whitespace +
                  // Operator (capture 2)
                  "*([*^$|!~]?=)" +
                  whitespace +
                  // "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
                  "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                  identifier +
                  "))|)" +
                  whitespace +
                  "*\\]",
                pseudos =
                  ":(" +
                  identifier +
                  ")(?:\\((" +
                  // To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
                  // 1. quoted (capture 3; capture 4 or capture 5)
                  "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
                  // 2. simple (capture 6)
                  "((?:\\\\.|[^\\\\()[\\]]|" +
                  attributes +
                  ")*)|" +
                  // 3. anything else (capture 2)
                  ".*" +
                  ")\\)|)",
                // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
                rwhitespace = new RegExp(whitespace + "+", "g"),
                rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
                rleadingCombinator = new RegExp(
                  "^" +
                    whitespace +
                    "*([>+~]|" +
                    whitespace +
                    ")" +
                    whitespace +
                    "*",
                ),
                rdescend = new RegExp(whitespace + "|>"),
                rpseudo = new RegExp(pseudos),
                ridentifier = new RegExp("^" + identifier + "$"),
                matchExpr = {
                  ID: new RegExp("^#(" + identifier + ")"),
                  CLASS: new RegExp("^\\.(" + identifier + ")"),
                  TAG: new RegExp("^(" + identifier + "|[*])"),
                  ATTR: new RegExp("^" + attributes),
                  PSEUDO: new RegExp("^" + pseudos),
                  CHILD: new RegExp(
                    "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                      whitespace +
                      "*(even|odd|(([+-]|)(\\d*)n|)" +
                      whitespace +
                      "*(?:([+-]|)" +
                      whitespace +
                      "*(\\d+)|))" +
                      whitespace +
                      "*\\)|)",
                    "i",
                  ),
                  bool: new RegExp("^(?:" + booleans + ")$", "i"),

                  // For use in libraries implementing .is()
                  // We use this for POS matching in `select`
                  needsContext: new RegExp(
                    "^" +
                      whitespace +
                      "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                      whitespace +
                      "*((?:-\\d)?\\d*)" +
                      whitespace +
                      "*\\)|)(?=[^-]|$)",
                    "i",
                  ),
                },
                rinputs = /^(?:input|select|textarea|button)$/i,
                rheader = /^h\d$/i,
                // Easily-parseable/retrievable ID or TAG or CLASS selectors
                rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                rsibling = /[+~]/,
                // CSS escapes
                // https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
                runescape = new RegExp(
                  "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])",
                  "g",
                ),
                funescape = function (escape, nonHex) {
                  var high = "0x" + escape.slice(1) - 0x10000

                  if (nonHex) {
                    // Strip the backslash prefix from a non-hex escape sequence
                    return nonHex
                  }

                  // Replace a hexadecimal escape sequence with the encoded Unicode code point
                  // Support: IE <=11+
                  // For values outside the Basic Multilingual Plane (BMP), manually construct a
                  // surrogate pair
                  return high < 0
                    ? String.fromCharCode(high + 0x10000)
                    : String.fromCharCode(
                        (high >> 10) | 0xd800,
                        (high & 0x3ff) | 0xdc00,
                      )
                },
                // Used for iframes; see `setDocument`.
                // Support: IE 9 - 11+, Edge 12 - 18+
                // Removing the function wrapper causes a "Permission Denied"
                // error in IE/Edge.
                unloadHandler = function () {
                  setDocument()
                },
                inDisabledFieldset = addCombinator(
                  function (elem) {
                    return elem.disabled === true && nodeName(elem, "fieldset")
                  },
                  { dir: "parentNode", next: "legend" },
                )

              // Support: IE <=9 only
              // Accessing document.activeElement can throw unexpectedly
              // https://bugs.jquery.com/ticket/13393
              function safeActiveElement() {
                try {
                  return document.activeElement
                } catch (err) {}
              }

              // Optimize for push.apply( _, NodeList )
              try {
                push.apply(
                  (arr = slice.call(preferredDoc.childNodes)),
                  preferredDoc.childNodes,
                )

                // Support: Android <=4.0
                // Detect silently failing push.apply
                // eslint-disable-next-line no-unused-expressions
                arr[preferredDoc.childNodes.length].nodeType
              } catch (e) {
                push = {
                  apply: function (target, els) {
                    pushNative.apply(target, slice.call(els))
                  },
                  call: function (target) {
                    pushNative.apply(target, slice.call(arguments, 1))
                  },
                }
              }

              function find(selector, context, results, seed) {
                var m,
                  i,
                  elem,
                  nid,
                  match,
                  groups,
                  newSelector,
                  newContext = context && context.ownerDocument,
                  // nodeType defaults to 9, since context defaults to document
                  nodeType = context ? context.nodeType : 9

                results = results || []

                // Return early from calls with invalid selector or context
                if (
                  typeof selector !== "string" ||
                  !selector ||
                  (nodeType !== 1 && nodeType !== 9 && nodeType !== 11)
                ) {
                  return results
                }

                // Try to shortcut find operations (as opposed to filters) in HTML documents
                if (!seed) {
                  setDocument(context)
                  context = context || document

                  if (documentIsHTML) {
                    // If the selector is sufficiently simple, try using a "get*By*" DOM method
                    // (excepting DocumentFragment context, where the methods don't exist)
                    if (
                      nodeType !== 11 &&
                      (match = rquickExpr.exec(selector))
                    ) {
                      // ID selector
                      if ((m = match[1])) {
                        // Document context
                        if (nodeType === 9) {
                          if ((elem = context.getElementById(m))) {
                            // Support: IE 9 only
                            // getElementById can match elements by name instead of ID
                            if (elem.id === m) {
                              push.call(results, elem)
                              return results
                            }
                          } else {
                            return results
                          }

                          // Element context
                        } else {
                          // Support: IE 9 only
                          // getElementById can match elements by name instead of ID
                          if (
                            newContext &&
                            (elem = newContext.getElementById(m)) &&
                            find.contains(context, elem) &&
                            elem.id === m
                          ) {
                            push.call(results, elem)
                            return results
                          }
                        }

                        // Type selector
                      } else if (match[2]) {
                        push.apply(
                          results,
                          context.getElementsByTagName(selector),
                        )
                        return results

                        // Class selector
                      } else if (
                        (m = match[3]) &&
                        context.getElementsByClassName
                      ) {
                        push.apply(results, context.getElementsByClassName(m))
                        return results
                      }
                    }

                    // Take advantage of querySelectorAll
                    if (
                      !nonnativeSelectorCache[selector + " "] &&
                      (!rbuggyQSA || !rbuggyQSA.test(selector))
                    ) {
                      newSelector = selector
                      newContext = context

                      // qSA considers elements outside a scoping root when evaluating child or
                      // descendant combinators, which is not what we want.
                      // In such cases, we work around the behavior by prefixing every selector in the
                      // list with an ID selector referencing the scope context.
                      // The technique has to be used as well when a leading combinator is used
                      // as such selectors are not recognized by querySelectorAll.
                      // Thanks to Andrew Dupont for this technique.
                      if (
                        nodeType === 1 &&
                        (rdescend.test(selector) ||
                          rleadingCombinator.test(selector))
                      ) {
                        // Expand context for sibling selectors
                        newContext =
                          (rsibling.test(selector) &&
                            testContext(context.parentNode)) ||
                          context

                        // We can use :scope instead of the ID hack if the browser
                        // supports it & if we're not changing the context.
                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when
                        // strict-comparing two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (newContext != context || !support.scope) {
                          // Capture the context ID, setting it first if necessary
                          if ((nid = context.getAttribute("id"))) {
                            nid = jQuery.escapeSelector(nid)
                          } else {
                            context.setAttribute("id", (nid = expando))
                          }
                        }

                        // Prefix every selector in the list
                        groups = tokenize(selector)
                        i = groups.length
                        while (i--) {
                          groups[i] =
                            (nid ? "#" + nid : ":scope") +
                            " " +
                            toSelector(groups[i])
                        }
                        newSelector = groups.join(",")
                      }

                      try {
                        push.apply(
                          results,
                          newContext.querySelectorAll(newSelector),
                        )
                        return results
                      } catch (qsaError) {
                        nonnativeSelectorCache(selector, true)
                      } finally {
                        if (nid === expando) {
                          context.removeAttribute("id")
                        }
                      }
                    }
                  }
                }

                // All others
                return select(
                  selector.replace(rtrimCSS, "$1"),
                  context,
                  results,
                  seed,
                )
              }

              /**
               * Create key-value caches of limited size
               * @returns {function(string, object)} Returns the Object data after storing it on itself with
               *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
               *	deleting the oldest entry
               */
              function createCache() {
                var keys = []

                function cache(key, value) {
                  // Use (key + " ") to avoid collision with native prototype properties
                  // (see https://github.com/jquery/sizzle/issues/157)
                  if (keys.push(key + " ") > Expr.cacheLength) {
                    // Only keep the most recent entries
                    delete cache[keys.shift()]
                  }
                  return (cache[key + " "] = value)
                }
                return cache
              }

              /**
               * Mark a function for special use by jQuery selector module
               * @param {Function} fn The function to mark
               */
              function markFunction(fn) {
                fn[expando] = true
                return fn
              }

              /**
               * Support testing using an element
               * @param {Function} fn Passed the created element and returns a boolean result
               */
              function assert(fn) {
                var el = document.createElement("fieldset")

                try {
                  return !!fn(el)
                } catch (e) {
                  return false
                } finally {
                  // Remove from its parent by default
                  if (el.parentNode) {
                    el.parentNode.removeChild(el)
                  }

                  // release memory in IE
                  el = null
                }
              }

              /**
               * Returns a function to use in pseudos for input types
               * @param {String} type
               */
              function createInputPseudo(type) {
                return function (elem) {
                  return nodeName(elem, "input") && elem.type === type
                }
              }

              /**
               * Returns a function to use in pseudos for buttons
               * @param {String} type
               */
              function createButtonPseudo(type) {
                return function (elem) {
                  return (
                    (nodeName(elem, "input") || nodeName(elem, "button")) &&
                    elem.type === type
                  )
                }
              }

              /**
               * Returns a function to use in pseudos for :enabled/:disabled
               * @param {Boolean} disabled true for :disabled; false for :enabled
               */
              function createDisabledPseudo(disabled) {
                // Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
                return function (elem) {
                  // Only certain elements can match :enabled or :disabled
                  // https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
                  // https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
                  if ("form" in elem) {
                    // Check for inherited disabledness on relevant non-disabled elements:
                    // * listed form-associated elements in a disabled fieldset
                    //   https://html.spec.whatwg.org/multipage/forms.html#category-listed
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
                    // * option elements in a disabled optgroup
                    //   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
                    // All such elements have a "form" property.
                    if (elem.parentNode && elem.disabled === false) {
                      // Option elements defer to a parent optgroup if present
                      if ("label" in elem) {
                        if ("label" in elem.parentNode) {
                          return elem.parentNode.disabled === disabled
                        } else {
                          return elem.disabled === disabled
                        }
                      }

                      // Support: IE 6 - 11+
                      // Use the isDisabled shortcut property to check for disabled fieldset ancestors
                      return (
                        elem.isDisabled === disabled ||
                        // Where there is no isDisabled, check manually
                        (elem.isDisabled !== !disabled &&
                          inDisabledFieldset(elem) === disabled)
                      )
                    }

                    return elem.disabled === disabled

                    // Try to winnow out elements that can't be disabled before trusting the disabled property.
                    // Some victims get caught in our net (label, legend, menu, track), but it shouldn't
                    // even exist on them, let alone have a boolean value.
                  } else if ("label" in elem) {
                    return elem.disabled === disabled
                  }

                  // Remaining elements are neither :enabled nor :disabled
                  return false
                }
              }

              /**
               * Returns a function to use in pseudos for positionals
               * @param {Function} fn
               */
              function createPositionalPseudo(fn) {
                return markFunction(function (argument) {
                  argument = +argument
                  return markFunction(function (seed, matches) {
                    var j,
                      matchIndexes = fn([], seed.length, argument),
                      i = matchIndexes.length

                    // Match elements found at the specified indexes
                    while (i--) {
                      if (seed[(j = matchIndexes[i])]) {
                        seed[j] = !(matches[j] = seed[j])
                      }
                    }
                  })
                })
              }

              /**
               * Checks a node for validity as a jQuery selector context
               * @param {Element|Object=} context
               * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
               */
              function testContext(context) {
                return (
                  context &&
                  typeof context.getElementsByTagName !== "undefined" &&
                  context
                )
              }

              /**
               * Sets document-related variables once based on the current document
               * @param {Element|Object} [node] An element or document object to use to set the document
               * @returns {Object} Returns the current document
               */
              function setDocument(node) {
                var subWindow,
                  doc = node ? node.ownerDocument || node : preferredDoc

                // Return early if doc is invalid or already selected
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                if (
                  doc == document ||
                  doc.nodeType !== 9 ||
                  !doc.documentElement
                ) {
                  return document
                }

                // Update global variables
                document = doc
                documentElement = document.documentElement
                documentIsHTML = !jQuery.isXMLDoc(document)

                // Support: iOS 7 only, IE 9 - 11+
                // Older browsers didn't support unprefixed `matches`.
                matches =
                  documentElement.matches ||
                  documentElement.webkitMatchesSelector ||
                  documentElement.msMatchesSelector

                // Support: IE 9 - 11+, Edge 12 - 18+
                // Accessing iframe documents after unload throws "permission denied" errors (see trac-13936)
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                if (
                  preferredDoc != document &&
                  (subWindow = document.defaultView) &&
                  subWindow.top !== subWindow
                ) {
                  // Support: IE 9 - 11+, Edge 12 - 18+
                  subWindow.addEventListener("unload", unloadHandler)
                }

                // Support: IE <10
                // Check if getElementById returns elements by name
                // The broken getElementById methods don't pick up programmatically-set names,
                // so use a roundabout getElementsByName test
                support.getById = assert(function (el) {
                  documentElement.appendChild(el).id = jQuery.expando
                  return (
                    !document.getElementsByName ||
                    !document.getElementsByName(jQuery.expando).length
                  )
                })

                // Support: IE 9 only
                // Check to see if it's possible to do matchesSelector
                // on a disconnected node.
                support.disconnectedMatch = assert(function (el) {
                  return matches.call(el, "*")
                })

                // Support: IE 9 - 11+, Edge 12 - 18+
                // IE/Edge don't support the :scope pseudo-class.
                support.scope = assert(function () {
                  return document.querySelectorAll(":scope")
                })

                // Support: Chrome 105 - 111 only, Safari 15.4 - 16.3 only
                // Make sure the `:has()` argument is parsed unforgivingly.
                // We include `*` in the test to detect buggy implementations that are
                // _selectively_ forgiving (specifically when the list includes at least
                // one valid selector).
                // Note that we treat complete lack of support for `:has()` as if it were
                // spec-compliant support, which is fine because use of `:has()` in such
                // environments will fail in the qSA path and fall back to jQuery traversal
                // anyway.
                support.cssHas = assert(function () {
                  try {
                    document.querySelector(":has(*,:jqfake)")
                    return false
                  } catch (e) {
                    return true
                  }
                })

                // ID filter and find
                if (support.getById) {
                  Expr.filter.ID = function (id) {
                    var attrId = id.replace(runescape, funescape)
                    return function (elem) {
                      return elem.getAttribute("id") === attrId
                    }
                  }
                  Expr.find.ID = function (id, context) {
                    if (
                      typeof context.getElementById !== "undefined" &&
                      documentIsHTML
                    ) {
                      var elem = context.getElementById(id)
                      return elem ? [elem] : []
                    }
                  }
                } else {
                  Expr.filter.ID = function (id) {
                    var attrId = id.replace(runescape, funescape)
                    return function (elem) {
                      var node =
                        typeof elem.getAttributeNode !== "undefined" &&
                        elem.getAttributeNode("id")
                      return node && node.value === attrId
                    }
                  }

                  // Support: IE 6 - 7 only
                  // getElementById is not reliable as a find shortcut
                  Expr.find.ID = function (id, context) {
                    if (
                      typeof context.getElementById !== "undefined" &&
                      documentIsHTML
                    ) {
                      var node,
                        i,
                        elems,
                        elem = context.getElementById(id)

                      if (elem) {
                        // Verify the id attribute
                        node = elem.getAttributeNode("id")
                        if (node && node.value === id) {
                          return [elem]
                        }

                        // Fall back on getElementsByName
                        elems = context.getElementsByName(id)
                        i = 0
                        while ((elem = elems[i++])) {
                          node = elem.getAttributeNode("id")
                          if (node && node.value === id) {
                            return [elem]
                          }
                        }
                      }

                      return []
                    }
                  }
                }

                // Tag
                Expr.find.TAG = function (tag, context) {
                  if (typeof context.getElementsByTagName !== "undefined") {
                    return context.getElementsByTagName(tag)

                    // DocumentFragment nodes don't have gEBTN
                  } else {
                    return context.querySelectorAll(tag)
                  }
                }

                // Class
                Expr.find.CLASS = function (className, context) {
                  if (
                    typeof context.getElementsByClassName !== "undefined" &&
                    documentIsHTML
                  ) {
                    return context.getElementsByClassName(className)
                  }
                }

                /* QSA/matchesSelector
      ---------------------------------------------------------------------- */

                // QSA and matchesSelector support

                rbuggyQSA = []

                // Build QSA regex
                // Regex strategy adopted from Diego Perini
                assert(function (el) {
                  var input

                  documentElement.appendChild(el).innerHTML =
                    "<a id='" +
                    expando +
                    "' href='' disabled='disabled'></a>" +
                    "<select id='" +
                    expando +
                    "-\r\\' disabled='disabled'>" +
                    "<option selected=''></option></select>"

                  // Support: iOS <=7 - 8 only
                  // Boolean attributes and "value" are not treated correctly in some XML documents
                  if (!el.querySelectorAll("[selected]").length) {
                    rbuggyQSA.push(
                      "\\[" + whitespace + "*(?:value|" + booleans + ")",
                    )
                  }

                  // Support: iOS <=7 - 8 only
                  if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
                    rbuggyQSA.push("~=")
                  }

                  // Support: iOS 8 only
                  // https://bugs.webkit.org/show_bug.cgi?id=136851
                  // In-page `selector#id sibling-combinator selector` fails
                  if (!el.querySelectorAll("a#" + expando + "+*").length) {
                    rbuggyQSA.push(".#.+[+~]")
                  }

                  // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
                  // In some of the document kinds, these selectors wouldn't work natively.
                  // This is probably OK but for backwards compatibility we want to maintain
                  // handling them through jQuery traversal in jQuery 3.x.
                  if (!el.querySelectorAll(":checked").length) {
                    rbuggyQSA.push(":checked")
                  }

                  // Support: Windows 8 Native Apps
                  // The type and name attributes are restricted during .innerHTML assignment
                  input = document.createElement("input")
                  input.setAttribute("type", "hidden")
                  el.appendChild(input).setAttribute("name", "D")

                  // Support: IE 9 - 11+
                  // IE's :disabled selector does not pick up the children of disabled fieldsets
                  // Support: Chrome <=105+, Firefox <=104+, Safari <=15.4+
                  // In some of the document kinds, these selectors wouldn't work natively.
                  // This is probably OK but for backwards compatibility we want to maintain
                  // handling them through jQuery traversal in jQuery 3.x.
                  documentElement.appendChild(el).disabled = true
                  if (el.querySelectorAll(":disabled").length !== 2) {
                    rbuggyQSA.push(":enabled", ":disabled")
                  }

                  // Support: IE 11+, Edge 15 - 18+
                  // IE 11/Edge don't find elements on a `[name='']` query in some cases.
                  // Adding a temporary attribute to the document before the selection works
                  // around the issue.
                  // Interestingly, IE 10 & older don't seem to have the issue.
                  input = document.createElement("input")
                  input.setAttribute("name", "")
                  el.appendChild(input)
                  if (!el.querySelectorAll("[name='']").length) {
                    rbuggyQSA.push(
                      "\\[" +
                        whitespace +
                        "*name" +
                        whitespace +
                        "*=" +
                        whitespace +
                        "*(?:''|\"\")",
                    )
                  }
                })

                if (!support.cssHas) {
                  // Support: Chrome 105 - 110+, Safari 15.4 - 16.3+
                  // Our regular `try-catch` mechanism fails to detect natively-unsupported
                  // pseudo-classes inside `:has()` (such as `:has(:contains("Foo"))`)
                  // in browsers that parse the `:has()` argument as a forgiving selector list.
                  // https://drafts.csswg.org/selectors/#relational now requires the argument
                  // to be parsed unforgivingly, but browsers have not yet fully adjusted.
                  rbuggyQSA.push(":has")
                }

                rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"))

                /* Sorting
      ---------------------------------------------------------------------- */

                // Document order sorting
                sortOrder = function (a, b) {
                  // Flag for duplicate removal
                  if (a === b) {
                    hasDuplicate = true
                    return 0
                  }

                  // Sort on method existence if only one input has compareDocumentPosition
                  var compare =
                    !a.compareDocumentPosition - !b.compareDocumentPosition
                  if (compare) {
                    return compare
                  }

                  // Calculate position if both inputs belong to the same document
                  // Support: IE 11+, Edge 17 - 18+
                  // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                  // two documents; shallow comparisons work.
                  // eslint-disable-next-line eqeqeq
                  compare =
                    (a.ownerDocument || a) == (b.ownerDocument || b)
                      ? a.compareDocumentPosition(b)
                      : // Otherwise we know they are disconnected
                        1

                  // Disconnected nodes
                  if (
                    compare & 1 ||
                    (!support.sortDetached &&
                      b.compareDocumentPosition(a) === compare)
                  ) {
                    // Choose the first element that is related to our preferred document
                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (
                      a === document ||
                      (a.ownerDocument == preferredDoc &&
                        find.contains(preferredDoc, a))
                    ) {
                      return -1
                    }

                    // Support: IE 11+, Edge 17 - 18+
                    // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                    // two documents; shallow comparisons work.
                    // eslint-disable-next-line eqeqeq
                    if (
                      b === document ||
                      (b.ownerDocument == preferredDoc &&
                        find.contains(preferredDoc, b))
                    ) {
                      return 1
                    }

                    // Maintain original order
                    return sortInput
                      ? indexOf.call(sortInput, a) - indexOf.call(sortInput, b)
                      : 0
                  }

                  return compare & 4 ? -1 : 1
                }

                return document
              }

              find.matches = function (expr, elements) {
                return find(expr, null, null, elements)
              }

              find.matchesSelector = function (elem, expr) {
                setDocument(elem)

                if (
                  documentIsHTML &&
                  !nonnativeSelectorCache[expr + " "] &&
                  (!rbuggyQSA || !rbuggyQSA.test(expr))
                ) {
                  try {
                    var ret = matches.call(elem, expr)

                    // IE 9's matchesSelector returns false on disconnected nodes
                    if (
                      ret ||
                      support.disconnectedMatch ||
                      // As well, disconnected nodes are said to be in a document
                      // fragment in IE 9
                      (elem.document && elem.document.nodeType !== 11)
                    ) {
                      return ret
                    }
                  } catch (e) {
                    nonnativeSelectorCache(expr, true)
                  }
                }

                return find(expr, document, null, [elem]).length > 0
              }

              find.contains = function (context, elem) {
                // Set document vars if needed
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                if ((context.ownerDocument || context) != document) {
                  setDocument(context)
                }
                return jQuery.contains(context, elem)
              }

              find.attr = function (elem, name) {
                // Set document vars if needed
                // Support: IE 11+, Edge 17 - 18+
                // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                // two documents; shallow comparisons work.
                // eslint-disable-next-line eqeqeq
                if ((elem.ownerDocument || elem) != document) {
                  setDocument(elem)
                }

                var fn = Expr.attrHandle[name.toLowerCase()],
                  // Don't get fooled by Object.prototype properties (see trac-13807)
                  val =
                    fn && hasOwn.call(Expr.attrHandle, name.toLowerCase())
                      ? fn(elem, name, !documentIsHTML)
                      : undefined

                if (val !== undefined) {
                  return val
                }

                return elem.getAttribute(name)
              }

              find.error = function (msg) {
                throw new Error("Syntax error, unrecognized expression: " + msg)
              }

              /**
               * Document sorting and removing duplicates
               * @param {ArrayLike} results
               */
              jQuery.uniqueSort = function (results) {
                var elem,
                  duplicates = [],
                  j = 0,
                  i = 0

                // Unless we *know* we can detect duplicates, assume their presence
                //
                // Support: Android <=4.0+
                // Testing for detecting duplicates is unpredictable so instead assume we can't
                // depend on duplicate detection in all browsers without a stable sort.
                hasDuplicate = !support.sortStable
                sortInput = !support.sortStable && slice.call(results, 0)
                sort.call(results, sortOrder)

                if (hasDuplicate) {
                  while ((elem = results[i++])) {
                    if (elem === results[i]) {
                      j = duplicates.push(i)
                    }
                  }
                  while (j--) {
                    splice.call(results, duplicates[j], 1)
                  }
                }

                // Clear input after sorting to release objects
                // See https://github.com/jquery/sizzle/pull/225
                sortInput = null

                return results
              }

              jQuery.fn.uniqueSort = function () {
                return this.pushStack(jQuery.uniqueSort(slice.apply(this)))
              }

              Expr = jQuery.expr = {
                // Can be adjusted by the user
                cacheLength: 50,

                createPseudo: markFunction,

                match: matchExpr,

                attrHandle: {},

                find: {},

                relative: {
                  ">": { dir: "parentNode", first: true },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: true },
                  "~": { dir: "previousSibling" },
                },

                preFilter: {
                  ATTR: function (match) {
                    match[1] = match[1].replace(runescape, funescape)

                    // Move the given value to match[3] whether quoted or unquoted
                    match[3] = (match[3] || match[4] || match[5] || "").replace(
                      runescape,
                      funescape,
                    )

                    if (match[2] === "~=") {
                      match[3] = " " + match[3] + " "
                    }

                    return match.slice(0, 4)
                  },

                  CHILD: function (match) {
                    /* matches from matchExpr["CHILD"]
            1 type (only|nth|...)
            2 what (child|of-type)
            3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
            4 xn-component of xn+y argument ([+-]?\d*n|)
            5 sign of xn-component
            6 x of xn-component
            7 sign of y-component
            8 y of y-component
          */
                    match[1] = match[1].toLowerCase()

                    if (match[1].slice(0, 3) === "nth") {
                      // nth-* requires argument
                      if (!match[3]) {
                        find.error(match[0])
                      }

                      // numeric x and y parameters for Expr.filter.CHILD
                      // remember that false/true cast respectively to 0/1
                      match[4] = +(match[4]
                        ? match[5] + (match[6] || 1)
                        : 2 * (match[3] === "even" || match[3] === "odd"))
                      match[5] = +(match[7] + match[8] || match[3] === "odd")

                      // other types prohibit arguments
                    } else if (match[3]) {
                      find.error(match[0])
                    }

                    return match
                  },

                  PSEUDO: function (match) {
                    var excess,
                      unquoted = !match[6] && match[2]

                    if (matchExpr.CHILD.test(match[0])) {
                      return null
                    }

                    // Accept quoted arguments as-is
                    if (match[3]) {
                      match[2] = match[4] || match[5] || ""

                      // Strip excess characters from unquoted arguments
                    } else if (
                      unquoted &&
                      rpseudo.test(unquoted) &&
                      // Get excess from tokenize (recursively)
                      (excess = tokenize(unquoted, true)) &&
                      // advance to the next closing parenthesis
                      (excess =
                        unquoted.indexOf(")", unquoted.length - excess) -
                        unquoted.length)
                    ) {
                      // excess is a negative index
                      match[0] = match[0].slice(0, excess)
                      match[2] = unquoted.slice(0, excess)
                    }

                    // Return only captures needed by the pseudo filter method (type and argument)
                    return match.slice(0, 3)
                  },
                },

                filter: {
                  TAG: function (nodeNameSelector) {
                    var expectedNodeName = nodeNameSelector
                      .replace(runescape, funescape)
                      .toLowerCase()
                    return nodeNameSelector === "*"
                      ? function () {
                          return true
                        }
                      : function (elem) {
                          return nodeName(elem, expectedNodeName)
                        }
                  },

                  CLASS: function (className) {
                    var pattern = classCache[className + " "]

                    return (
                      pattern ||
                      ((pattern = new RegExp(
                        "(^|" +
                          whitespace +
                          ")" +
                          className +
                          "(" +
                          whitespace +
                          "|$)",
                      )) &&
                        classCache(className, function (elem) {
                          return pattern.test(
                            (typeof elem.className === "string" &&
                              elem.className) ||
                              (typeof elem.getAttribute !== "undefined" &&
                                elem.getAttribute("class")) ||
                              "",
                          )
                        }))
                    )
                  },

                  ATTR: function (name, operator, check) {
                    return function (elem) {
                      var result = find.attr(elem, name)

                      if (result == null) {
                        return operator === "!="
                      }
                      if (!operator) {
                        return true
                      }

                      result += ""

                      if (operator === "=") {
                        return result === check
                      }
                      if (operator === "!=") {
                        return result !== check
                      }
                      if (operator === "^=") {
                        return check && result.indexOf(check) === 0
                      }
                      if (operator === "*=") {
                        return check && result.indexOf(check) > -1
                      }
                      if (operator === "$=") {
                        return check && result.slice(-check.length) === check
                      }
                      if (operator === "~=") {
                        return (
                          (
                            " " +
                            result.replace(rwhitespace, " ") +
                            " "
                          ).indexOf(check) > -1
                        )
                      }
                      if (operator === "|=") {
                        return (
                          result === check ||
                          result.slice(0, check.length + 1) === check + "-"
                        )
                      }

                      return false
                    }
                  },

                  CHILD: function (type, what, _argument, first, last) {
                    var simple = type.slice(0, 3) !== "nth",
                      forward = type.slice(-4) !== "last",
                      ofType = what === "of-type"

                    return first === 1 && last === 0
                      ? // Shortcut for :nth-*(n)
                        function (elem) {
                          return !!elem.parentNode
                        }
                      : function (elem, _context, xml) {
                          var cache,
                            outerCache,
                            node,
                            nodeIndex,
                            start,
                            dir =
                              simple !== forward
                                ? "nextSibling"
                                : "previousSibling",
                            parent = elem.parentNode,
                            name = ofType && elem.nodeName.toLowerCase(),
                            useCache = !xml && !ofType,
                            diff = false

                          if (parent) {
                            // :(first|last|only)-(child|of-type)
                            if (simple) {
                              while (dir) {
                                node = elem
                                while ((node = node[dir])) {
                                  if (
                                    ofType
                                      ? nodeName(node, name)
                                      : node.nodeType === 1
                                  ) {
                                    return false
                                  }
                                }

                                // Reverse direction for :only-* (if we haven't yet done so)
                                start = dir =
                                  type === "only" && !start && "nextSibling"
                              }
                              return true
                            }

                            start = [
                              forward ? parent.firstChild : parent.lastChild,
                            ]

                            // non-xml :nth-child(...) stores cache data on `parent`
                            if (forward && useCache) {
                              // Seek `elem` from a previously-cached index
                              outerCache =
                                parent[expando] || (parent[expando] = {})
                              cache = outerCache[type] || []
                              nodeIndex = cache[0] === dirruns && cache[1]
                              diff = nodeIndex && cache[2]
                              node = nodeIndex && parent.childNodes[nodeIndex]

                              while (
                                (node =
                                  (++nodeIndex && node && node[dir]) ||
                                  // Fallback to seeking `elem` from the start
                                  (diff = nodeIndex = 0) ||
                                  start.pop())
                              ) {
                                // When found, cache indexes on `parent` and break
                                if (
                                  node.nodeType === 1 &&
                                  ++diff &&
                                  node === elem
                                ) {
                                  outerCache[type] = [dirruns, nodeIndex, diff]
                                  break
                                }
                              }
                            } else {
                              // Use previously-cached element index if available
                              if (useCache) {
                                outerCache =
                                  elem[expando] || (elem[expando] = {})
                                cache = outerCache[type] || []
                                nodeIndex = cache[0] === dirruns && cache[1]
                                diff = nodeIndex
                              }

                              // xml :nth-child(...)
                              // or :nth-last-child(...) or :nth(-last)?-of-type(...)
                              if (diff === false) {
                                // Use the same loop as above to seek `elem` from the start
                                while (
                                  (node =
                                    (++nodeIndex && node && node[dir]) ||
                                    (diff = nodeIndex = 0) ||
                                    start.pop())
                                ) {
                                  if (
                                    (ofType
                                      ? nodeName(node, name)
                                      : node.nodeType === 1) &&
                                    ++diff
                                  ) {
                                    // Cache the index of each encountered element
                                    if (useCache) {
                                      outerCache =
                                        node[expando] || (node[expando] = {})
                                      outerCache[type] = [dirruns, diff]
                                    }

                                    if (node === elem) {
                                      break
                                    }
                                  }
                                }
                              }
                            }

                            // Incorporate the offset, then check against cycle size
                            diff -= last
                            return (
                              diff === first ||
                              (diff % first === 0 && diff / first >= 0)
                            )
                          }
                        }
                  },

                  PSEUDO: function (pseudo, argument) {
                    // pseudo-class names are case-insensitive
                    // https://www.w3.org/TR/selectors/#pseudo-classes
                    // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
                    // Remember that setFilters inherits from pseudos
                    var args,
                      fn =
                        Expr.pseudos[pseudo] ||
                        Expr.setFilters[pseudo.toLowerCase()] ||
                        find.error("unsupported pseudo: " + pseudo)

                    // The user may use createPseudo to indicate that
                    // arguments are needed to create the filter function
                    // just as jQuery does
                    if (fn[expando]) {
                      return fn(argument)
                    }

                    // But maintain support for old signatures
                    if (fn.length > 1) {
                      args = [pseudo, pseudo, "", argument]
                      return Expr.setFilters.hasOwnProperty(
                        pseudo.toLowerCase(),
                      )
                        ? markFunction(function (seed, matches) {
                            var idx,
                              matched = fn(seed, argument),
                              i = matched.length
                            while (i--) {
                              idx = indexOf.call(seed, matched[i])
                              seed[idx] = !(matches[idx] = matched[i])
                            }
                          })
                        : function (elem) {
                            return fn(elem, 0, args)
                          }
                    }

                    return fn
                  },
                },

                pseudos: {
                  // Potentially complex pseudos
                  not: markFunction(function (selector) {
                    // Trim the selector passed to compile
                    // to avoid treating leading and trailing
                    // spaces as combinators
                    var input = [],
                      results = [],
                      matcher = compile(selector.replace(rtrimCSS, "$1"))

                    return matcher[expando]
                      ? markFunction(function (seed, matches, _context, xml) {
                          var elem,
                            unmatched = matcher(seed, null, xml, []),
                            i = seed.length

                          // Match elements unmatched by `matcher`
                          while (i--) {
                            if ((elem = unmatched[i])) {
                              seed[i] = !(matches[i] = elem)
                            }
                          }
                        })
                      : function (elem, _context, xml) {
                          input[0] = elem
                          matcher(input, null, xml, results)

                          // Don't keep the element
                          // (see https://github.com/jquery/sizzle/issues/299)
                          input[0] = null
                          return !results.pop()
                        }
                  }),

                  has: markFunction(function (selector) {
                    return function (elem) {
                      return find(selector, elem).length > 0
                    }
                  }),

                  contains: markFunction(function (text) {
                    text = text.replace(runescape, funescape)
                    return function (elem) {
                      return (
                        (elem.textContent || jQuery.text(elem)).indexOf(text) >
                        -1
                      )
                    }
                  }),

                  // "Whether an element is represented by a :lang() selector
                  // is based solely on the element's language value
                  // being equal to the identifier C,
                  // or beginning with the identifier C immediately followed by "-".
                  // The matching of C against the element's language value is performed case-insensitively.
                  // The identifier C does not have to be a valid language name."
                  // https://www.w3.org/TR/selectors/#lang-pseudo
                  lang: markFunction(function (lang) {
                    // lang value must be a valid identifier
                    if (!ridentifier.test(lang || "")) {
                      find.error("unsupported lang: " + lang)
                    }
                    lang = lang.replace(runescape, funescape).toLowerCase()
                    return function (elem) {
                      var elemLang
                      do {
                        if (
                          (elemLang = documentIsHTML
                            ? elem.lang
                            : elem.getAttribute("xml:lang") ||
                              elem.getAttribute("lang"))
                        ) {
                          elemLang = elemLang.toLowerCase()
                          return (
                            elemLang === lang ||
                            elemLang.indexOf(lang + "-") === 0
                          )
                        }
                      } while ((elem = elem.parentNode) && elem.nodeType === 1)
                      return false
                    }
                  }),

                  // Miscellaneous
                  target: function (elem) {
                    var hash = window.location && window.location.hash
                    return hash && hash.slice(1) === elem.id
                  },

                  root: function (elem) {
                    return elem === documentElement
                  },

                  focus: function (elem) {
                    return (
                      elem === safeActiveElement() &&
                      document.hasFocus() &&
                      !!(elem.type || elem.href || ~elem.tabIndex)
                    )
                  },

                  // Boolean properties
                  enabled: createDisabledPseudo(false),
                  disabled: createDisabledPseudo(true),

                  checked: function (elem) {
                    // In CSS3, :checked should return both checked and selected elements
                    // https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
                    return (
                      (nodeName(elem, "input") && !!elem.checked) ||
                      (nodeName(elem, "option") && !!elem.selected)
                    )
                  },

                  selected: function (elem) {
                    // Support: IE <=11+
                    // Accessing the selectedIndex property
                    // forces the browser to treat the default option as
                    // selected when in an optgroup.
                    if (elem.parentNode) {
                      // eslint-disable-next-line no-unused-expressions
                      elem.parentNode.selectedIndex
                    }

                    return elem.selected === true
                  },

                  // Contents
                  empty: function (elem) {
                    // https://www.w3.org/TR/selectors/#empty-pseudo
                    // :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
                    //   but not by others (comment: 8; processing instruction: 7; etc.)
                    // nodeType < 6 works because attributes (2) do not appear as children
                    for (
                      elem = elem.firstChild;
                      elem;
                      elem = elem.nextSibling
                    ) {
                      if (elem.nodeType < 6) {
                        return false
                      }
                    }
                    return true
                  },

                  parent: function (elem) {
                    return !Expr.pseudos.empty(elem)
                  },

                  // Element/input types
                  header: function (elem) {
                    return rheader.test(elem.nodeName)
                  },

                  input: function (elem) {
                    return rinputs.test(elem.nodeName)
                  },

                  button: function (elem) {
                    return (
                      (nodeName(elem, "input") && elem.type === "button") ||
                      nodeName(elem, "button")
                    )
                  },

                  text: function (elem) {
                    var attr
                    return (
                      nodeName(elem, "input") &&
                      elem.type === "text" &&
                      // Support: IE <10 only
                      // New HTML5 attribute values (e.g., "search") appear
                      // with elem.type === "text"
                      ((attr = elem.getAttribute("type")) == null ||
                        attr.toLowerCase() === "text")
                    )
                  },

                  // Position-in-collection
                  first: createPositionalPseudo(function () {
                    return [0]
                  }),

                  last: createPositionalPseudo(
                    function (_matchIndexes, length) {
                      return [length - 1]
                    },
                  ),

                  eq: createPositionalPseudo(
                    function (_matchIndexes, length, argument) {
                      return [argument < 0 ? argument + length : argument]
                    },
                  ),

                  even: createPositionalPseudo(function (matchIndexes, length) {
                    var i = 0
                    for (; i < length; i += 2) {
                      matchIndexes.push(i)
                    }
                    return matchIndexes
                  }),

                  odd: createPositionalPseudo(function (matchIndexes, length) {
                    var i = 1
                    for (; i < length; i += 2) {
                      matchIndexes.push(i)
                    }
                    return matchIndexes
                  }),

                  lt: createPositionalPseudo(
                    function (matchIndexes, length, argument) {
                      var i

                      if (argument < 0) {
                        i = argument + length
                      } else if (argument > length) {
                        i = length
                      } else {
                        i = argument
                      }

                      for (; --i >= 0; ) {
                        matchIndexes.push(i)
                      }
                      return matchIndexes
                    },
                  ),

                  gt: createPositionalPseudo(
                    function (matchIndexes, length, argument) {
                      var i = argument < 0 ? argument + length : argument
                      for (; ++i < length; ) {
                        matchIndexes.push(i)
                      }
                      return matchIndexes
                    },
                  ),
                },
              }

              Expr.pseudos.nth = Expr.pseudos.eq

              // Add button/input type pseudos
              for (i in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true,
              }) {
                Expr.pseudos[i] = createInputPseudo(i)
              }
              for (i in { submit: true, reset: true }) {
                Expr.pseudos[i] = createButtonPseudo(i)
              }

              // Easy API for creating new setFilters
              function setFilters() {}
              setFilters.prototype = Expr.filters = Expr.pseudos
              Expr.setFilters = new setFilters()

              function tokenize(selector, parseOnly) {
                var matched,
                  match,
                  tokens,
                  type,
                  soFar,
                  groups,
                  preFilters,
                  cached = tokenCache[selector + " "]

                if (cached) {
                  return parseOnly ? 0 : cached.slice(0)
                }

                soFar = selector
                groups = []
                preFilters = Expr.preFilter

                while (soFar) {
                  // Comma and first run
                  if (!matched || (match = rcomma.exec(soFar))) {
                    if (match) {
                      // Don't consume trailing commas as valid
                      soFar = soFar.slice(match[0].length) || soFar
                    }
                    groups.push((tokens = []))
                  }

                  matched = false

                  // Combinators
                  if ((match = rleadingCombinator.exec(soFar))) {
                    matched = match.shift()
                    tokens.push({
                      value: matched,

                      // Cast descendant combinators to space
                      type: match[0].replace(rtrimCSS, " "),
                    })
                    soFar = soFar.slice(matched.length)
                  }

                  // Filters
                  for (type in Expr.filter) {
                    if (
                      (match = matchExpr[type].exec(soFar)) &&
                      (!preFilters[type] || (match = preFilters[type](match)))
                    ) {
                      matched = match.shift()
                      tokens.push({
                        value: matched,
                        type: type,
                        matches: match,
                      })
                      soFar = soFar.slice(matched.length)
                    }
                  }

                  if (!matched) {
                    break
                  }
                }

                // Return the length of the invalid excess
                // if we're just parsing
                // Otherwise, throw an error or return tokens
                if (parseOnly) {
                  return soFar.length
                }

                return soFar
                  ? find.error(selector)
                  : // Cache the tokens
                    tokenCache(selector, groups).slice(0)
              }

              function toSelector(tokens) {
                var i = 0,
                  len = tokens.length,
                  selector = ""
                for (; i < len; i++) {
                  selector += tokens[i].value
                }
                return selector
              }

              function addCombinator(matcher, combinator, base) {
                var dir = combinator.dir,
                  skip = combinator.next,
                  key = skip || dir,
                  checkNonElements = base && key === "parentNode",
                  doneName = done++

                return combinator.first
                  ? // Check against closest ancestor/preceding element
                    function (elem, context, xml) {
                      while ((elem = elem[dir])) {
                        if (elem.nodeType === 1 || checkNonElements) {
                          return matcher(elem, context, xml)
                        }
                      }
                      return false
                    }
                  : // Check against all ancestor/preceding elements
                    function (elem, context, xml) {
                      var oldCache,
                        outerCache,
                        newCache = [dirruns, doneName]

                      // We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
                      if (xml) {
                        while ((elem = elem[dir])) {
                          if (elem.nodeType === 1 || checkNonElements) {
                            if (matcher(elem, context, xml)) {
                              return true
                            }
                          }
                        }
                      } else {
                        while ((elem = elem[dir])) {
                          if (elem.nodeType === 1 || checkNonElements) {
                            outerCache = elem[expando] || (elem[expando] = {})

                            if (skip && nodeName(elem, skip)) {
                              elem = elem[dir] || elem
                            } else if (
                              (oldCache = outerCache[key]) &&
                              oldCache[0] === dirruns &&
                              oldCache[1] === doneName
                            ) {
                              // Assign to newCache so results back-propagate to previous elements
                              return (newCache[2] = oldCache[2])
                            } else {
                              // Reuse newcache so results back-propagate to previous elements
                              outerCache[key] = newCache

                              // A match means we're done; a fail means we have to keep checking
                              if ((newCache[2] = matcher(elem, context, xml))) {
                                return true
                              }
                            }
                          }
                        }
                      }
                      return false
                    }
              }

              function elementMatcher(matchers) {
                return matchers.length > 1
                  ? function (elem, context, xml) {
                      var i = matchers.length
                      while (i--) {
                        if (!matchers[i](elem, context, xml)) {
                          return false
                        }
                      }
                      return true
                    }
                  : matchers[0]
              }

              function multipleContexts(selector, contexts, results) {
                var i = 0,
                  len = contexts.length
                for (; i < len; i++) {
                  find(selector, contexts[i], results)
                }
                return results
              }

              function condense(unmatched, map, filter, context, xml) {
                var elem,
                  newUnmatched = [],
                  i = 0,
                  len = unmatched.length,
                  mapped = map != null

                for (; i < len; i++) {
                  if ((elem = unmatched[i])) {
                    if (!filter || filter(elem, context, xml)) {
                      newUnmatched.push(elem)
                      if (mapped) {
                        map.push(i)
                      }
                    }
                  }
                }

                return newUnmatched
              }

              function setMatcher(
                preFilter,
                selector,
                matcher,
                postFilter,
                postFinder,
                postSelector,
              ) {
                if (postFilter && !postFilter[expando]) {
                  postFilter = setMatcher(postFilter)
                }
                if (postFinder && !postFinder[expando]) {
                  postFinder = setMatcher(postFinder, postSelector)
                }
                return markFunction(function (seed, results, context, xml) {
                  var temp,
                    i,
                    elem,
                    matcherOut,
                    preMap = [],
                    postMap = [],
                    preexisting = results.length,
                    // Get initial elements from seed or context
                    elems =
                      seed ||
                      multipleContexts(
                        selector || "*",
                        context.nodeType ? [context] : context,
                        [],
                      ),
                    // Prefilter to get matcher input, preserving a map for seed-results synchronization
                    matcherIn =
                      preFilter && (seed || !selector)
                        ? condense(elems, preMap, preFilter, context, xml)
                        : elems

                  if (matcher) {
                    // If we have a postFinder, or filtered seed, or non-seed postFilter
                    // or preexisting results,
                    matcherOut =
                      postFinder ||
                      (seed ? preFilter : preexisting || postFilter)
                        ? // ...intermediate processing is necessary
                          []
                        : // ...otherwise use results directly
                          results

                    // Find primary matches
                    matcher(matcherIn, matcherOut, context, xml)
                  } else {
                    matcherOut = matcherIn
                  }

                  // Apply postFilter
                  if (postFilter) {
                    temp = condense(matcherOut, postMap)
                    postFilter(temp, [], context, xml)

                    // Un-match failing elements by moving them back to matcherIn
                    i = temp.length
                    while (i--) {
                      if ((elem = temp[i])) {
                        matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem)
                      }
                    }
                  }

                  if (seed) {
                    if (postFinder || preFilter) {
                      if (postFinder) {
                        // Get the final matcherOut by condensing this intermediate into postFinder contexts
                        temp = []
                        i = matcherOut.length
                        while (i--) {
                          if ((elem = matcherOut[i])) {
                            // Restore matcherIn since elem is not yet a final match
                            temp.push((matcherIn[i] = elem))
                          }
                        }
                        postFinder(null, (matcherOut = []), temp, xml)
                      }

                      // Move matched elements from seed to results to keep them synchronized
                      i = matcherOut.length
                      while (i--) {
                        if (
                          (elem = matcherOut[i]) &&
                          (temp = postFinder
                            ? indexOf.call(seed, elem)
                            : preMap[i]) > -1
                        ) {
                          seed[temp] = !(results[temp] = elem)
                        }
                      }
                    }

                    // Add elements to results, through postFinder if defined
                  } else {
                    matcherOut = condense(
                      matcherOut === results
                        ? matcherOut.splice(preexisting, matcherOut.length)
                        : matcherOut,
                    )
                    if (postFinder) {
                      postFinder(null, results, matcherOut, xml)
                    } else {
                      push.apply(results, matcherOut)
                    }
                  }
                })
              }

              function matcherFromTokens(tokens) {
                var checkContext,
                  matcher,
                  j,
                  len = tokens.length,
                  leadingRelative = Expr.relative[tokens[0].type],
                  implicitRelative = leadingRelative || Expr.relative[" "],
                  i = leadingRelative ? 1 : 0,
                  // The foundational matcher ensures that elements are reachable from top-level context(s)
                  matchContext = addCombinator(
                    function (elem) {
                      return elem === checkContext
                    },
                    implicitRelative,
                    true,
                  ),
                  matchAnyContext = addCombinator(
                    function (elem) {
                      return indexOf.call(checkContext, elem) > -1
                    },
                    implicitRelative,
                    true,
                  ),
                  matchers = [
                    function (elem, context, xml) {
                      // Support: IE 11+, Edge 17 - 18+
                      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                      // two documents; shallow comparisons work.
                      // eslint-disable-next-line eqeqeq
                      var ret =
                        (!leadingRelative &&
                          (xml || context != outermostContext)) ||
                        ((checkContext = context).nodeType
                          ? matchContext(elem, context, xml)
                          : matchAnyContext(elem, context, xml))

                      // Avoid hanging onto element
                      // (see https://github.com/jquery/sizzle/issues/299)
                      checkContext = null
                      return ret
                    },
                  ]

                for (; i < len; i++) {
                  if ((matcher = Expr.relative[tokens[i].type])) {
                    matchers = [
                      addCombinator(elementMatcher(matchers), matcher),
                    ]
                  } else {
                    matcher = Expr.filter[tokens[i].type].apply(
                      null,
                      tokens[i].matches,
                    )

                    // Return special upon seeing a positional matcher
                    if (matcher[expando]) {
                      // Find the next relative operator (if any) for proper handling
                      j = ++i
                      for (; j < len; j++) {
                        if (Expr.relative[tokens[j].type]) {
                          break
                        }
                      }
                      return setMatcher(
                        i > 1 && elementMatcher(matchers),
                        i > 1 &&
                          toSelector(
                            // If the preceding token was a descendant combinator, insert an implicit any-element `*`
                            tokens.slice(0, i - 1).concat({
                              value: tokens[i - 2].type === " " ? "*" : "",
                            }),
                          ).replace(rtrimCSS, "$1"),
                        matcher,
                        i < j && matcherFromTokens(tokens.slice(i, j)),
                        j < len &&
                          matcherFromTokens((tokens = tokens.slice(j))),
                        j < len && toSelector(tokens),
                      )
                    }
                    matchers.push(matcher)
                  }
                }

                return elementMatcher(matchers)
              }

              function matcherFromGroupMatchers(elementMatchers, setMatchers) {
                var bySet = setMatchers.length > 0,
                  byElement = elementMatchers.length > 0,
                  superMatcher = function (
                    seed,
                    context,
                    xml,
                    results,
                    outermost,
                  ) {
                    var elem,
                      j,
                      matcher,
                      matchedCount = 0,
                      i = "0",
                      unmatched = seed && [],
                      setMatched = [],
                      contextBackup = outermostContext,
                      // We must always have either seed elements or outermost context
                      elems =
                        seed || (byElement && Expr.find.TAG("*", outermost)),
                      // Use integer dirruns iff this is the outermost matcher
                      dirrunsUnique = (dirruns +=
                        contextBackup == null ? 1 : Math.random() || 0.1),
                      len = elems.length

                    if (outermost) {
                      // Support: IE 11+, Edge 17 - 18+
                      // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                      // two documents; shallow comparisons work.
                      // eslint-disable-next-line eqeqeq
                      outermostContext =
                        context == document || context || outermost
                    }

                    // Add elements passing elementMatchers directly to results
                    // Support: iOS <=7 - 9 only
                    // Tolerate NodeList properties (IE: "length"; Safari: <number>) matching
                    // elements by id. (see trac-14142)
                    for (; i !== len && (elem = elems[i]) != null; i++) {
                      if (byElement && elem) {
                        j = 0

                        // Support: IE 11+, Edge 17 - 18+
                        // IE/Edge sometimes throw a "Permission denied" error when strict-comparing
                        // two documents; shallow comparisons work.
                        // eslint-disable-next-line eqeqeq
                        if (!context && elem.ownerDocument != document) {
                          setDocument(elem)
                          xml = !documentIsHTML
                        }
                        while ((matcher = elementMatchers[j++])) {
                          if (matcher(elem, context || document, xml)) {
                            push.call(results, elem)
                            break
                          }
                        }
                        if (outermost) {
                          dirruns = dirrunsUnique
                        }
                      }

                      // Track unmatched elements for set filters
                      if (bySet) {
                        // They will have gone through all possible matchers
                        if ((elem = !matcher && elem)) {
                          matchedCount--
                        }

                        // Lengthen the array for every element, matched or not
                        if (seed) {
                          unmatched.push(elem)
                        }
                      }
                    }

                    // `i` is now the count of elements visited above, and adding it to `matchedCount`
                    // makes the latter nonnegative.
                    matchedCount += i

                    // Apply set filters to unmatched elements
                    // NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
                    // equals `i`), unless we didn't visit _any_ elements in the above loop because we have
                    // no element matchers and no seed.
                    // Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
                    // case, which will result in a "00" `matchedCount` that differs from `i` but is also
                    // numerically zero.
                    if (bySet && i !== matchedCount) {
                      j = 0
                      while ((matcher = setMatchers[j++])) {
                        matcher(unmatched, setMatched, context, xml)
                      }

                      if (seed) {
                        // Reintegrate element matches to eliminate the need for sorting
                        if (matchedCount > 0) {
                          while (i--) {
                            if (!(unmatched[i] || setMatched[i])) {
                              setMatched[i] = pop.call(results)
                            }
                          }
                        }

                        // Discard index placeholder values to get only actual matches
                        setMatched = condense(setMatched)
                      }

                      // Add matches to results
                      push.apply(results, setMatched)

                      // Seedless set matches succeeding multiple successful matchers stipulate sorting
                      if (
                        outermost &&
                        !seed &&
                        setMatched.length > 0 &&
                        matchedCount + setMatchers.length > 1
                      ) {
                        jQuery.uniqueSort(results)
                      }
                    }

                    // Override manipulation of globals by nested matchers
                    if (outermost) {
                      dirruns = dirrunsUnique
                      outermostContext = contextBackup
                    }

                    return unmatched
                  }

                return bySet ? markFunction(superMatcher) : superMatcher
              }

              function compile(selector, match /* Internal Use Only */) {
                var i,
                  setMatchers = [],
                  elementMatchers = [],
                  cached = compilerCache[selector + " "]

                if (!cached) {
                  // Generate a function of recursive functions that can be used to check each element
                  if (!match) {
                    match = tokenize(selector)
                  }
                  i = match.length
                  while (i--) {
                    cached = matcherFromTokens(match[i])
                    if (cached[expando]) {
                      setMatchers.push(cached)
                    } else {
                      elementMatchers.push(cached)
                    }
                  }

                  // Cache the compiled function
                  cached = compilerCache(
                    selector,
                    matcherFromGroupMatchers(elementMatchers, setMatchers),
                  )

                  // Save selector and tokenization
                  cached.selector = selector
                }
                return cached
              }

              /**
               * A low-level selection function that works with jQuery's compiled
               *  selector functions
               * @param {String|Function} selector A selector or a pre-compiled
               *  selector function built with jQuery selector compile
               * @param {Element} context
               * @param {Array} [results]
               * @param {Array} [seed] A set of elements to match against
               */
              function select(selector, context, results, seed) {
                var i,
                  tokens,
                  token,
                  type,
                  find,
                  compiled = typeof selector === "function" && selector,
                  match =
                    !seed &&
                    tokenize((selector = compiled.selector || selector))

                results = results || []

                // Try to minimize operations if there is only one selector in the list and no seed
                // (the latter of which guarantees us context)
                if (match.length === 1) {
                  // Reduce context if the leading compound selector is an ID
                  tokens = match[0] = match[0].slice(0)
                  if (
                    tokens.length > 2 &&
                    (token = tokens[0]).type === "ID" &&
                    context.nodeType === 9 &&
                    documentIsHTML &&
                    Expr.relative[tokens[1].type]
                  ) {
                    context = (Expr.find.ID(
                      token.matches[0].replace(runescape, funescape),
                      context,
                    ) || [])[0]
                    if (!context) {
                      return results

                      // Precompiled matchers will still verify ancestry, so step up a level
                    } else if (compiled) {
                      context = context.parentNode
                    }

                    selector = selector.slice(tokens.shift().value.length)
                  }

                  // Fetch a seed set for right-to-left matching
                  i = matchExpr.needsContext.test(selector) ? 0 : tokens.length
                  while (i--) {
                    token = tokens[i]

                    // Abort if we hit a combinator
                    if (Expr.relative[(type = token.type)]) {
                      break
                    }
                    if ((find = Expr.find[type])) {
                      // Search, expanding context for leading sibling combinators
                      if (
                        (seed = find(
                          token.matches[0].replace(runescape, funescape),
                          (rsibling.test(tokens[0].type) &&
                            testContext(context.parentNode)) ||
                            context,
                        ))
                      ) {
                        // If seed is empty or no tokens remain, we can return early
                        tokens.splice(i, 1)
                        selector = seed.length && toSelector(tokens)
                        if (!selector) {
                          push.apply(results, seed)
                          return results
                        }

                        break
                      }
                    }
                  }
                }

                // Compile and execute a filtering function if one is not provided
                // Provide `match` to avoid retokenization if we modified the selector above
                (compiled || compile(selector, match))(
                  seed,
                  context,
                  !documentIsHTML,
                  results,
                  !context ||
                    (rsibling.test(selector) &&
                      testContext(context.parentNode)) ||
                    context,
                )
                return results
              }

              // One-time assignments

              // Support: Android <=4.0 - 4.1+
              // Sort stability
              support.sortStable =
                expando.split("").sort(sortOrder).join("") === expando

              // Initialize against the default document
              setDocument()

              // Support: Android <=4.0 - 4.1+
              // Detached nodes confoundingly follow *each other*
              support.sortDetached = assert(function (el) {
                // Should return 1, but returns 4 (following)
                return (
                  el.compareDocumentPosition(
                    document.createElement("fieldset"),
                  ) & 1
                )
              })

              jQuery.find = find

              // Deprecated
              jQuery.expr[":"] = jQuery.expr.pseudos
              jQuery.unique = jQuery.uniqueSort

              // These have always been private, but they used to be documented
              // as part of Sizzle so let's maintain them in the 3.x line
              // for backwards compatibility purposes.
              find.compile = compile
              find.select = select
              find.setDocument = setDocument

              find.escape = jQuery.escapeSelector
              find.getText = jQuery.text
              find.isXML = jQuery.isXMLDoc
              find.selectors = jQuery.expr
              find.support = jQuery.support
              find.uniqueSort = jQuery.uniqueSort

              /* eslint-enable */
            })()

            var dir = function (elem, dir, until) {
              var matched = [],
                truncate = until !== undefined

              while ((elem = elem[dir]) && elem.nodeType !== 9) {
                if (elem.nodeType === 1) {
                  if (truncate && jQuery(elem).is(until)) {
                    break
                  }
                  matched.push(elem)
                }
              }
              return matched
            }

            var siblings = function (n, elem) {
              var matched = []

              for (; n; n = n.nextSibling) {
                if (n.nodeType === 1 && n !== elem) {
                  matched.push(n)
                }
              }

              return matched
            }

            var rneedsContext = jQuery.expr.match.needsContext

            var rsingleTag =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i

            // Implement the identical functionality for filter and not
            function winnow(elements, qualifier, not) {
              if (isFunction(qualifier)) {
                return jQuery.grep(elements, function (elem, i) {
                  return !!qualifier.call(elem, i, elem) !== not
                })
              }

              // Single element
              if (qualifier.nodeType) {
                return jQuery.grep(elements, function (elem) {
                  return (elem === qualifier) !== not
                })
              }

              // Arraylike of elements (jQuery, arguments, Array)
              if (typeof qualifier !== "string") {
                return jQuery.grep(elements, function (elem) {
                  return indexOf.call(qualifier, elem) > -1 !== not
                })
              }

              // Filtered directly for both simple and complex selectors
              return jQuery.filter(qualifier, elements, not)
            }

            jQuery.filter = function (expr, elems, not) {
              var elem = elems[0]

              if (not) {
                expr = ":not(" + expr + ")"
              }

              if (elems.length === 1 && elem.nodeType === 1) {
                return jQuery.find.matchesSelector(elem, expr) ? [elem] : []
              }

              return jQuery.find.matches(
                expr,
                jQuery.grep(elems, function (elem) {
                  return elem.nodeType === 1
                }),
              )
            }

            jQuery.fn.extend({
              find: function (selector) {
                var i,
                  ret,
                  len = this.length,
                  self = this

                if (typeof selector !== "string") {
                  return this.pushStack(
                    jQuery(selector).filter(function () {
                      for (i = 0; i < len; i++) {
                        if (jQuery.contains(self[i], this)) {
                          return true
                        }
                      }
                    }),
                  )
                }

                ret = this.pushStack([])

                for (i = 0; i < len; i++) {
                  jQuery.find(selector, self[i], ret)
                }

                return len > 1 ? jQuery.uniqueSort(ret) : ret
              },
              filter: function (selector) {
                return this.pushStack(winnow(this, selector || [], false))
              },
              not: function (selector) {
                return this.pushStack(winnow(this, selector || [], true))
              },
              is: function (selector) {
                return !!winnow(
                  this,

                  // If this is a positional/relative selector, check membership in the returned set
                  // so $("p:first").is("p:last") won't return true for a doc with two "p".
                  typeof selector === "string" && rneedsContext.test(selector)
                    ? jQuery(selector)
                    : selector || [],
                  false,
                ).length
              },
            })

            // Initialize a jQuery object

            // A central reference to the root jQuery(document)
            var rootjQuery,
              // A simple way to check for HTML strings
              // Prioritize #id over <tag> to avoid XSS via location.hash (trac-9521)
              // Strict HTML recognition (trac-11290: must start with <)
              // Shortcut simple #id case for speed
              rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
              init = (jQuery.fn.init = function (selector, context, root) {
                var match, elem

                // HANDLE: $(""), $(null), $(undefined), $(false)
                if (!selector) {
                  return this
                }

                // Method init() accepts an alternate rootjQuery
                // so migrate can support jQuery.sub (gh-2101)
                root = root || rootjQuery

                // Handle HTML strings
                if (typeof selector === "string") {
                  if (
                    selector[0] === "<" &&
                    selector[selector.length - 1] === ">" &&
                    selector.length >= 3
                  ) {
                    // Assume that strings that start and end with <> are HTML and skip the regex check
                    match = [null, selector, null]
                  } else {
                    match = rquickExpr.exec(selector)
                  }

                  // Match html or make sure no context is specified for #id
                  if (match && (match[1] || !context)) {
                    // HANDLE: $(html) -> $(array)
                    if (match[1]) {
                      context = context instanceof jQuery ? context[0] : context

                      // Option to run scripts is true for back-compat
                      // Intentionally let the error be thrown if parseHTML is not present
                      jQuery.merge(
                        this,
                        jQuery.parseHTML(
                          match[1],
                          context && context.nodeType
                            ? context.ownerDocument || context
                            : document,
                          true,
                        ),
                      )

                      // HANDLE: $(html, props)
                      if (
                        rsingleTag.test(match[1]) &&
                        jQuery.isPlainObject(context)
                      ) {
                        for (match in context) {
                          // Properties of context are called as methods if possible
                          if (isFunction(this[match])) {
                            this[match](context[match])

                            // ...and otherwise set as attributes
                          } else {
                            this.attr(match, context[match])
                          }
                        }
                      }

                      return this

                      // HANDLE: $(#id)
                    } else {
                      elem = document.getElementById(match[2])

                      if (elem) {
                        // Inject the element directly into the jQuery object
                        this[0] = elem
                        this.length = 1
                      }
                      return this
                    }

                    // HANDLE: $(expr, $(...))
                  } else if (!context || context.jquery) {
                    return (context || root).find(selector)

                    // HANDLE: $(expr, context)
                    // (which is just equivalent to: $(context).find(expr)
                  } else {
                    return this.constructor(context).find(selector)
                  }

                  // HANDLE: $(DOMElement)
                } else if (selector.nodeType) {
                  this[0] = selector
                  this.length = 1
                  return this

                  // HANDLE: $(function)
                  // Shortcut for document ready
                } else if (isFunction(selector)) {
                  return root.ready !== undefined
                    ? root.ready(selector)
                    : // Execute immediately if ready is not present
                      selector(jQuery)
                }

                return jQuery.makeArray(selector, this)
              })

            // Give the init function the jQuery prototype for later instantiation
            init.prototype = jQuery.fn

            // Initialize central reference
            rootjQuery = jQuery(document)

            var rparentsprev = /^(?:parents|prev(?:Until|All))/,
              // Methods guaranteed to produce a unique set when starting from a unique set
              guaranteedUnique = {
                children: true,
                contents: true,
                next: true,
                prev: true,
              }

            jQuery.fn.extend({
              has: function (target) {
                var targets = jQuery(target, this),
                  l = targets.length

                return this.filter(function () {
                  var i = 0
                  for (; i < l; i++) {
                    if (jQuery.contains(this, targets[i])) {
                      return true
                    }
                  }
                })
              },

              closest: function (selectors, context) {
                var cur,
                  i = 0,
                  l = this.length,
                  matched = [],
                  targets = typeof selectors !== "string" && jQuery(selectors)

                // Positional selectors never match, since there's no _selection_ context
                if (!rneedsContext.test(selectors)) {
                  for (; i < l; i++) {
                    for (
                      cur = this[i];
                      cur && cur !== context;
                      cur = cur.parentNode
                    ) {
                      // Always skip document fragments
                      if (
                        cur.nodeType < 11 &&
                        (targets
                          ? targets.index(cur) > -1
                          : // Don't pass non-elements to jQuery#find
                            cur.nodeType === 1 &&
                            jQuery.find.matchesSelector(cur, selectors))
                      ) {
                        matched.push(cur)
                        break
                      }
                    }
                  }
                }

                return this.pushStack(
                  matched.length > 1 ? jQuery.uniqueSort(matched) : matched,
                )
              },

              // Determine the position of an element within the set
              index: function (elem) {
                // No argument, return index in parent
                if (!elem) {
                  return this[0] && this[0].parentNode
                    ? this.first().prevAll().length
                    : -1
                }

                // Index in selector
                if (typeof elem === "string") {
                  return indexOf.call(jQuery(elem), this[0])
                }

                // Locate the position of the desired element
                return indexOf.call(
                  this,

                  // If it receives a jQuery object, the first element is used
                  elem.jquery ? elem[0] : elem,
                )
              },

              add: function (selector, context) {
                return this.pushStack(
                  jQuery.uniqueSort(
                    jQuery.merge(this.get(), jQuery(selector, context)),
                  ),
                )
              },

              addBack: function (selector) {
                return this.add(
                  selector == null
                    ? this.prevObject
                    : this.prevObject.filter(selector),
                )
              },
            })

            function sibling(cur, dir) {
              while ((cur = cur[dir]) && cur.nodeType !== 1) {}
              return cur
            }

            jQuery.each(
              {
                parent: function (elem) {
                  var parent = elem.parentNode
                  return parent && parent.nodeType !== 11 ? parent : null
                },
                parents: function (elem) {
                  return dir(elem, "parentNode")
                },
                parentsUntil: function (elem, _i, until) {
                  return dir(elem, "parentNode", until)
                },
                next: function (elem) {
                  return sibling(elem, "nextSibling")
                },
                prev: function (elem) {
                  return sibling(elem, "previousSibling")
                },
                nextAll: function (elem) {
                  return dir(elem, "nextSibling")
                },
                prevAll: function (elem) {
                  return dir(elem, "previousSibling")
                },
                nextUntil: function (elem, _i, until) {
                  return dir(elem, "nextSibling", until)
                },
                prevUntil: function (elem, _i, until) {
                  return dir(elem, "previousSibling", until)
                },
                siblings: function (elem) {
                  return siblings((elem.parentNode || {}).firstChild, elem)
                },
                children: function (elem) {
                  return siblings(elem.firstChild)
                },
                contents: function (elem) {
                  if (
                    elem.contentDocument != null &&
                    // Support: IE 11+
                    // <object> elements with no `data` attribute has an object
                    // `contentDocument` with a `null` prototype.
                    getProto(elem.contentDocument)
                  ) {
                    return elem.contentDocument
                  }

                  // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
                  // Treat the template element as a regular one in browsers that
                  // don't support it.
                  if (nodeName(elem, "template")) {
                    elem = elem.content || elem
                  }

                  return jQuery.merge([], elem.childNodes)
                },
              },
              function (name, fn) {
                jQuery.fn[name] = function (until, selector) {
                  var matched = jQuery.map(this, fn, until)

                  if (name.slice(-5) !== "Until") {
                    selector = until
                  }

                  if (selector && typeof selector === "string") {
                    matched = jQuery.filter(selector, matched)
                  }

                  if (this.length > 1) {
                    // Remove duplicates
                    if (!guaranteedUnique[name]) {
                      jQuery.uniqueSort(matched)
                    }

                    // Reverse order for parents* and prev-derivatives
                    if (rparentsprev.test(name)) {
                      matched.reverse()
                    }
                  }

                  return this.pushStack(matched)
                }
              },
            )
            var rnothtmlwhite = /[^\x20\t\r\n\f]+/g

            // Convert String-formatted options into Object-formatted ones
            function createOptions(options) {
              var object = {}
              jQuery.each(
                options.match(rnothtmlwhite) || [],
                function (_, flag) {
                  object[flag] = true
                },
              )
              return object
            }

            /*
             * Create a callback list using the following parameters:
             *
             *	options: an optional list of space-separated options that will change how
             *			the callback list behaves or a more traditional option object
             *
             * By default a callback list will act like an event callback list and can be
             * "fired" multiple times.
             *
             * Possible options:
             *
             *	once:			will ensure the callback list can only be fired once (like a Deferred)
             *
             *	memory:			will keep track of previous values and will call any callback added
             *					after the list has been fired right away with the latest "memorized"
             *					values (like a Deferred)
             *
             *	unique:			will ensure a callback can only be added once (no duplicate in the list)
             *
             *	stopOnFalse:	interrupt callings when a callback returns false
             *
             */
            jQuery.Callbacks = function (options) {
              // Convert options from String-formatted to Object-formatted if needed
              // (we check in cache first)
              options =
                typeof options === "string"
                  ? createOptions(options)
                  : jQuery.extend({}, options)

              var // Flag to know if list is currently firing
                firing,
                // Last fire value for non-forgettable lists
                memory,
                // Flag to know if list was already fired
                fired,
                // Flag to prevent firing
                locked,
                // Actual callback list
                list = [],
                // Queue of execution data for repeatable lists
                queue = [],
                // Index of currently firing callback (modified by add/remove as needed)
                firingIndex = -1,
                // Fire callbacks
                fire = function () {
                  // Enforce single-firing
                  locked = locked || options.once

                  // Execute callbacks for all pending executions,
                  // respecting firingIndex overrides and runtime changes
                  fired = firing = true
                  for (; queue.length; firingIndex = -1) {
                    memory = queue.shift()
                    while (++firingIndex < list.length) {
                      // Run callback and check for early termination
                      if (
                        list[firingIndex].apply(memory[0], memory[1]) ===
                          false &&
                        options.stopOnFalse
                      ) {
                        // Jump to end and forget the data so .add doesn't re-fire
                        firingIndex = list.length
                        memory = false
                      }
                    }
                  }

                  // Forget the data if we're done with it
                  if (!options.memory) {
                    memory = false
                  }

                  firing = false

                  // Clean up if we're done firing for good
                  if (locked) {
                    // Keep an empty list if we have data for future add calls
                    if (memory) {
                      list = []

                      // Otherwise, this object is spent
                    } else {
                      list = ""
                    }
                  }
                },
                // Actual Callbacks object
                self = {
                  // Add a callback or a collection of callbacks to the list
                  add: function () {
                    if (list) {
                      // If we have memory from a past run, we should fire after adding
                      if (memory && !firing) {
                        firingIndex = list.length - 1
                        queue.push(memory)
                      }

                      (function add(args) {
                        jQuery.each(args, function (_, arg) {
                          if (isFunction(arg)) {
                            if (!options.unique || !self.has(arg)) {
                              list.push(arg)
                            }
                          } else if (
                            arg &&
                            arg.length &&
                            toType(arg) !== "string"
                          ) {
                            // Inspect recursively
                            add(arg)
                          }
                        })
                      })(arguments)

                      if (memory && !firing) {
                        fire()
                      }
                    }
                    return this
                  },

                  // Remove a callback from the list
                  remove: function () {
                    jQuery.each(arguments, function (_, arg) {
                      var index
                      while ((index = jQuery.inArray(arg, list, index)) > -1) {
                        list.splice(index, 1)

                        // Handle firing indexes
                        if (index <= firingIndex) {
                          firingIndex--
                        }
                      }
                    })
                    return this
                  },

                  // Check if a given callback is in the list.
                  // If no argument is given, return whether or not list has callbacks attached.
                  has: function (fn) {
                    return fn ? jQuery.inArray(fn, list) > -1 : list.length > 0
                  },

                  // Remove all callbacks from the list
                  empty: function () {
                    if (list) {
                      list = []
                    }
                    return this
                  },

                  // Disable .fire and .add
                  // Abort any current/pending executions
                  // Clear all callbacks and values
                  disable: function () {
                    locked = queue = []
                    list = memory = ""
                    return this
                  },
                  disabled: function () {
                    return !list
                  },

                  // Disable .fire
                  // Also disable .add unless we have memory (since it would have no effect)
                  // Abort any pending executions
                  lock: function () {
                    locked = queue = []
                    if (!memory && !firing) {
                      list = memory = ""
                    }
                    return this
                  },
                  locked: function () {
                    return !!locked
                  },

                  // Call all callbacks with the given context and arguments
                  fireWith: function (context, args) {
                    if (!locked) {
                      args = args || []
                      args = [context, args.slice ? args.slice() : args]
                      queue.push(args)
                      if (!firing) {
                        fire()
                      }
                    }
                    return this
                  },

                  // Call all the callbacks with the given arguments
                  fire: function () {
                    self.fireWith(this, arguments)
                    return this
                  },

                  // To know if the callbacks have already been called at least once
                  fired: function () {
                    return !!fired
                  },
                }

              return self
            }

            function Identity(v) {
              return v
            }
            function Thrower(ex) {
              throw ex
            }

            function adoptValue(value, resolve, reject, noValue) {
              var method

              try {
                // Check for promise aspect first to privilege synchronous behavior
                if (value && isFunction((method = value.promise))) {
                  method.call(value).done(resolve).fail(reject)

                  // Other thenables
                } else if (value && isFunction((method = value.then))) {
                  method.call(value, resolve, reject)

                  // Other non-thenables
                } else {
                  // Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
                  // * false: [ value ].slice( 0 ) => resolve( value )
                  // * true: [ value ].slice( 1 ) => resolve()
                  resolve.apply(undefined, [value].slice(noValue))
                }

                // For Promises/A+, convert exceptions into rejections
                // Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
                // Deferred#then to conditionally suppress rejection.
              } catch (value) {
                // Support: Android 4.0 only
                // Strict mode functions invoked without .call/.apply get global-object context
                reject.apply(undefined, [value])
              }
            }

            jQuery.extend({
              Deferred: function (func) {
                var tuples = [
                    // action, add listener, callbacks,
                    // ... .then handlers, argument index, [final state]
                    [
                      "notify",
                      "progress",
                      jQuery.Callbacks("memory"),
                      jQuery.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      jQuery.Callbacks("once memory"),
                      jQuery.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      jQuery.Callbacks("once memory"),
                      jQuery.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  state = "pending",
                  promise = {
                    state: function () {
                      return state
                    },
                    always: function () {
                      deferred.done(arguments).fail(arguments)
                      return this
                    },
                    catch: function (fn) {
                      return promise.then(null, fn)
                    },

                    // Keep pipe for back-compat
                    pipe: function (/* fnDone, fnFail, fnProgress */) {
                      var fns = arguments

                      return jQuery
                        .Deferred(function (newDefer) {
                          jQuery.each(tuples, function (_i, tuple) {
                            // Map tuples (progress, done, fail) to arguments (done, fail, progress)
                            var fn = isFunction(fns[tuple[4]]) && fns[tuple[4]]

                            // deferred.progress(function() { bind to newDefer or newDefer.notify })
                            // deferred.done(function() { bind to newDefer or newDefer.resolve })
                            // deferred.fail(function() { bind to newDefer or newDefer.reject })
                            deferred[tuple[1]](function () {
                              var returned = fn && fn.apply(this, arguments)
                              if (returned && isFunction(returned.promise)) {
                                returned
                                  .promise()
                                  .progress(newDefer.notify)
                                  .done(newDefer.resolve)
                                  .fail(newDefer.reject)
                              } else {
                                newDefer[tuple[0] + "With"](
                                  this,
                                  fn ? [returned] : arguments,
                                )
                              }
                            })
                          })
                          fns = null
                        })
                        .promise()
                    },
                    then: function (onFulfilled, onRejected, onProgress) {
                      var maxDepth = 0
                      function resolve(depth, deferred, handler, special) {
                        return function () {
                          var that = this,
                            args = arguments,
                            mightThrow = function () {
                              var returned, then

                              // Support: Promises/A+ section 2.3.3.3.3
                              // https://promisesaplus.com/#point-59
                              // Ignore double-resolution attempts
                              if (depth < maxDepth) {
                                return
                              }

                              returned = handler.apply(that, args)

                              // Support: Promises/A+ section 2.3.1
                              // https://promisesaplus.com/#point-48
                              if (returned === deferred.promise()) {
                                throw new TypeError("Thenable self-resolution")
                              }

                              // Support: Promises/A+ sections 2.3.3.1, 3.5
                              // https://promisesaplus.com/#point-54
                              // https://promisesaplus.com/#point-75
                              // Retrieve `then` only once
                              then =
                                returned &&
                                // Support: Promises/A+ section 2.3.4
                                // https://promisesaplus.com/#point-64
                                // Only check objects and functions for thenability
                                (typeof returned === "object" ||
                                  typeof returned === "function") &&
                                returned.then

                              // Handle a returned thenable
                              if (isFunction(then)) {
                                // Special processors (notify) just wait for resolution
                                if (special) {
                                  then.call(
                                    returned,
                                    resolve(
                                      maxDepth,
                                      deferred,
                                      Identity,
                                      special,
                                    ),
                                    resolve(
                                      maxDepth,
                                      deferred,
                                      Thrower,
                                      special,
                                    ),
                                  )

                                  // Normal processors (resolve) also hook into progress
                                } else {
                                  // ...and disregard older resolution values
                                  maxDepth++

                                  then.call(
                                    returned,
                                    resolve(
                                      maxDepth,
                                      deferred,
                                      Identity,
                                      special,
                                    ),
                                    resolve(
                                      maxDepth,
                                      deferred,
                                      Thrower,
                                      special,
                                    ),
                                    resolve(
                                      maxDepth,
                                      deferred,
                                      Identity,
                                      deferred.notifyWith,
                                    ),
                                  )
                                }

                                // Handle all other returned values
                              } else {
                                // Only substitute handlers pass on context
                                // and multiple values (non-spec behavior)
                                if (handler !== Identity) {
                                  that = undefined
                                  args = [returned]
                                }

                                // Process the value(s)
                                // Default process is resolve
                                (special || deferred.resolveWith)(that, args)
                              }
                            },
                            // Only normal processors (resolve) catch and reject exceptions
                            process = special
                              ? mightThrow
                              : function () {
                                  try {
                                    mightThrow()
                                  } catch (e) {
                                    if (jQuery.Deferred.exceptionHook) {
                                      jQuery.Deferred.exceptionHook(
                                        e,
                                        process.error,
                                      )
                                    }

                                    // Support: Promises/A+ section 2.3.3.3.4.1
                                    // https://promisesaplus.com/#point-61
                                    // Ignore post-resolution exceptions
                                    if (depth + 1 >= maxDepth) {
                                      // Only substitute handlers pass on context
                                      // and multiple values (non-spec behavior)
                                      if (handler !== Thrower) {
                                        that = undefined
                                        args = [e]
                                      }

                                      deferred.rejectWith(that, args)
                                    }
                                  }
                                }

                          // Support: Promises/A+ section 2.3.3.3.1
                          // https://promisesaplus.com/#point-57
                          // Re-resolve promises immediately to dodge false rejection from
                          // subsequent errors
                          if (depth) {
                            process()
                          } else {
                            // Call an optional hook to record the error, in case of exception
                            // since it's otherwise lost when execution goes async
                            if (jQuery.Deferred.getErrorHook) {
                              process.error = jQuery.Deferred.getErrorHook()

                              // The deprecated alias of the above. While the name suggests
                              // returning the stack, not an error instance, jQuery just passes
                              // it directly to `console.warn` so both will work; an instance
                              // just better cooperates with source maps.
                            } else if (jQuery.Deferred.getStackHook) {
                              process.error = jQuery.Deferred.getStackHook()
                            }
                            window.setTimeout(process)
                          }
                        }
                      }

                      return jQuery
                        .Deferred(function (newDefer) {
                          // progress_handlers.add( ... )
                          tuples[0][3].add(
                            resolve(
                              0,
                              newDefer,
                              isFunction(onProgress) ? onProgress : Identity,
                              newDefer.notifyWith,
                            ),
                          )

                          // fulfilled_handlers.add( ... )
                          tuples[1][3].add(
                            resolve(
                              0,
                              newDefer,
                              isFunction(onFulfilled) ? onFulfilled : Identity,
                            ),
                          )

                          // rejected_handlers.add( ... )
                          tuples[2][3].add(
                            resolve(
                              0,
                              newDefer,
                              isFunction(onRejected) ? onRejected : Thrower,
                            ),
                          )
                        })
                        .promise()
                    },

                    // Get a promise for this deferred
                    // If obj is provided, the promise aspect is added to the object
                    promise: function (obj) {
                      return obj != null ? jQuery.extend(obj, promise) : promise
                    },
                  },
                  deferred = {}

                // Add list-specific methods
                jQuery.each(tuples, function (i, tuple) {
                  var list = tuple[2],
                    stateString = tuple[5]

                  // promise.progress = list.add
                  // promise.done = list.add
                  // promise.fail = list.add
                  promise[tuple[1]] = list.add

                  // Handle state
                  if (stateString) {
                    list.add(
                      function () {
                        // state = "resolved" (i.e., fulfilled)
                        // state = "rejected"
                        state = stateString
                      },

                      // rejected_callbacks.disable
                      // fulfilled_callbacks.disable
                      tuples[3 - i][2].disable,

                      // rejected_handlers.disable
                      // fulfilled_handlers.disable
                      tuples[3 - i][3].disable,

                      // progress_callbacks.lock
                      tuples[0][2].lock,

                      // progress_handlers.lock
                      tuples[0][3].lock,
                    )
                  }

                  // progress_handlers.fire
                  // fulfilled_handlers.fire
                  // rejected_handlers.fire
                  list.add(tuple[3].fire)

                  // deferred.notify = function() { deferred.notifyWith(...) }
                  // deferred.resolve = function() { deferred.resolveWith(...) }
                  // deferred.reject = function() { deferred.rejectWith(...) }
                  deferred[tuple[0]] = function () {
                    deferred[tuple[0] + "With"](
                      this === deferred ? undefined : this,
                      arguments,
                    )
                    return this
                  }

                  // deferred.notifyWith = list.fireWith
                  // deferred.resolveWith = list.fireWith
                  // deferred.rejectWith = list.fireWith
                  deferred[tuple[0] + "With"] = list.fireWith
                })

                // Make the deferred a promise
                promise.promise(deferred)

                // Call given func if any
                if (func) {
                  func.call(deferred, deferred)
                }

                // All done!
                return deferred
              },

              // Deferred helper
              when: function (singleValue) {
                var // count of uncompleted subordinates
                  remaining = arguments.length,
                  // count of unprocessed arguments
                  i = remaining,
                  // subordinate fulfillment data
                  resolveContexts = Array(i),
                  resolveValues = slice.call(arguments),
                  // the primary Deferred
                  primary = jQuery.Deferred(),
                  // subordinate callback factory
                  updateFunc = function (i) {
                    return function (value) {
                      resolveContexts[i] = this
                      resolveValues[i] =
                        arguments.length > 1 ? slice.call(arguments) : value
                      if (!--remaining) {
                        primary.resolveWith(resolveContexts, resolveValues)
                      }
                    }
                  }

                // Single- and empty arguments are adopted like Promise.resolve
                if (remaining <= 1) {
                  adoptValue(
                    singleValue,
                    primary.done(updateFunc(i)).resolve,
                    primary.reject,
                    !remaining,
                  )

                  // Use .then() to unwrap secondary thenables (cf. gh-3000)
                  if (
                    primary.state() === "pending" ||
                    isFunction(resolveValues[i] && resolveValues[i].then)
                  ) {
                    return primary.then()
                  }
                }

                // Multiple arguments are aggregated like Promise.all array elements
                while (i--) {
                  adoptValue(resolveValues[i], updateFunc(i), primary.reject)
                }

                return primary.promise()
              },
            })

            // These usually indicate a programmer mistake during development,
            // warn about them ASAP rather than swallowing them by default.
            var rerrorNames =
              /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/

            // If `jQuery.Deferred.getErrorHook` is defined, `asyncError` is an error
            // captured before the async barrier to get the original error cause
            // which may otherwise be hidden.
            jQuery.Deferred.exceptionHook = function (error, asyncError) {
              // Support: IE 8 - 9 only
              // Console exists when dev tools are open, which can happen at any time
              if (
                window.console &&
                window.console.warn &&
                error &&
                rerrorNames.test(error.name)
              ) {
                window.console.warn(
                  "jQuery.Deferred exception: " + error.message,
                  error.stack,
                  asyncError,
                )
              }
            }

            jQuery.readyException = function (error) {
              window.setTimeout(function () {
                throw error
              })
            }

            // The deferred used on DOM ready
            var readyList = jQuery.Deferred()

            jQuery.fn.ready = function (fn) {
              readyList
                .then(fn)

                // Wrap jQuery.readyException in a function so that the lookup
                // happens at the time of error handling instead of callback
                // registration.
                .catch(function (error) {
                  jQuery.readyException(error)
                })

              return this
            }

            jQuery.extend({
              // Is the DOM ready to be used? Set to true once it occurs.
              isReady: false,

              // A counter to track how many items to wait for before
              // the ready event fires. See trac-6781
              readyWait: 1,

              // Handle when the DOM is ready
              ready: function (wait) {
                // Abort if there are pending holds or we're already ready
                if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
                  return
                }

                // Remember that the DOM is ready
                jQuery.isReady = true

                // If a normal DOM Ready event fired, decrement, and wait if need be
                if (wait !== true && --jQuery.readyWait > 0) {
                  return
                }

                // If there are functions bound, to execute
                readyList.resolveWith(document, [jQuery])
              },
            })

            jQuery.ready.then = readyList.then

            // The ready event handler and self cleanup method
            function completed() {
              document.removeEventListener("DOMContentLoaded", completed)
              window.removeEventListener("load", completed)
              jQuery.ready()
            }

            // Catch cases where $(document).ready() is called
            // after the browser event has already occurred.
            // Support: IE <=9 - 10 only
            // Older IE sometimes signals "interactive" too soon
            if (
              document.readyState === "complete" ||
              (document.readyState !== "loading" &&
                !document.documentElement.doScroll)
            ) {
              // Handle it asynchronously to allow scripts the opportunity to delay ready
              window.setTimeout(jQuery.ready)
            } else {
              // Use the handy event callback
              document.addEventListener("DOMContentLoaded", completed)

              // A fallback to window.onload, that will always work
              window.addEventListener("load", completed)
            }

            // Multifunctional method to get and set values of a collection
            // The value/s can optionally be executed if it's a function
            var access = function (
              elems,
              fn,
              key,
              value,
              chainable,
              emptyGet,
              raw,
            ) {
              var i = 0,
                len = elems.length,
                bulk = key == null

              // Sets many values
              if (toType(key) === "object") {
                chainable = true
                for (i in key) {
                  access(elems, fn, i, key[i], true, emptyGet, raw)
                }

                // Sets one value
              } else if (value !== undefined) {
                chainable = true

                if (!isFunction(value)) {
                  raw = true
                }

                if (bulk) {
                  // Bulk operations run against the entire set
                  if (raw) {
                    fn.call(elems, value)
                    fn = null

                    // ...except when executing function values
                  } else {
                    bulk = fn
                    fn = function (elem, _key, value) {
                      return bulk.call(jQuery(elem), value)
                    }
                  }
                }

                if (fn) {
                  for (; i < len; i++) {
                    fn(
                      elems[i],
                      key,
                      raw ? value : value.call(elems[i], i, fn(elems[i], key)),
                    )
                  }
                }
              }

              if (chainable) {
                return elems
              }

              // Gets
              if (bulk) {
                return fn.call(elems)
              }

              return len ? fn(elems[0], key) : emptyGet
            }

            // Matches dashed string for camelizing
            var rmsPrefix = /^-ms-/,
              rdashAlpha = /-([a-z])/g

            // Used by camelCase as callback to replace()
            function fcamelCase(_all, letter) {
              return letter.toUpperCase()
            }

            // Convert dashed to camelCase; used by the css and data modules
            // Support: IE <=9 - 11, Edge 12 - 15
            // Microsoft forgot to hump their vendor prefix (trac-9572)
            function camelCase(string) {
              return string
                .replace(rmsPrefix, "ms-")
                .replace(rdashAlpha, fcamelCase)
            }
            var acceptData = function (owner) {
              // Accepts only:
              //  - Node
              //    - Node.ELEMENT_NODE
              //    - Node.DOCUMENT_NODE
              //  - Object
              //    - Any
              return (
                owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType
              )
            }

            function Data() {
              this.expando = jQuery.expando + Data.uid++
            }

            Data.uid = 1

            Data.prototype = {
              cache: function (owner) {
                // Check if the owner object already has a cache
                var value = owner[this.expando]

                // If not, create one
                if (!value) {
                  value = {}

                  // We can accept data for non-element nodes in modern browsers,
                  // but we should not, see trac-8335.
                  // Always return an empty object.
                  if (acceptData(owner)) {
                    // If it is a node unlikely to be stringify-ed or looped over
                    // use plain assignment
                    if (owner.nodeType) {
                      owner[this.expando] = value

                      // Otherwise secure it in a non-enumerable property
                      // configurable must be true to allow the property to be
                      // deleted when data is removed
                    } else {
                      Object.defineProperty(owner, this.expando, {
                        value: value,
                        configurable: true,
                      })
                    }
                  }
                }

                return value
              },
              set: function (owner, data, value) {
                var prop,
                  cache = this.cache(owner)

                // Handle: [ owner, key, value ] args
                // Always use camelCase key (gh-2257)
                if (typeof data === "string") {
                  cache[camelCase(data)] = value

                  // Handle: [ owner, { properties } ] args
                } else {
                  // Copy the properties one-by-one to the cache object
                  for (prop in data) {
                    cache[camelCase(prop)] = data[prop]
                  }
                }
                return cache
              },
              get: function (owner, key) {
                return key === undefined
                  ? this.cache(owner)
                  : // Always use camelCase key (gh-2257)
                    owner[this.expando] && owner[this.expando][camelCase(key)]
              },
              access: function (owner, key, value) {
                // In cases where either:
                //
                //   1. No key was specified
                //   2. A string key was specified, but no value provided
                //
                // Take the "read" path and allow the get method to determine
                // which value to return, respectively either:
                //
                //   1. The entire cache object
                //   2. The data stored at the key
                //
                if (
                  key === undefined ||
                  (key && typeof key === "string" && value === undefined)
                ) {
                  return this.get(owner, key)
                }

                // When the key is not a string, or both a key and value
                // are specified, set or extend (existing objects) with either:
                //
                //   1. An object of properties
                //   2. A key and value
                //
                this.set(owner, key, value)

                // Since the "set" path can have two possible entry points
                // return the expected data based on which path was taken[*]
                return value !== undefined ? value : key
              },
              remove: function (owner, key) {
                var i,
                  cache = owner[this.expando]

                if (cache === undefined) {
                  return
                }

                if (key !== undefined) {
                  // Support array or space separated string of keys
                  if (Array.isArray(key)) {
                    // If key is an array of keys...
                    // We always set camelCase keys, so remove that.
                    key = key.map(camelCase)
                  } else {
                    key = camelCase(key)

                    // If a key with the spaces exists, use it.
                    // Otherwise, create an array by matching non-whitespace
                    key = key in cache ? [key] : key.match(rnothtmlwhite) || []
                  }

                  i = key.length

                  while (i--) {
                    delete cache[key[i]]
                  }
                }

                // Remove the expando if there's no more data
                if (key === undefined || jQuery.isEmptyObject(cache)) {
                  // Support: Chrome <=35 - 45
                  // Webkit & Blink performance suffers when deleting properties
                  // from DOM nodes, so set to undefined instead
                  // https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
                  if (owner.nodeType) {
                    owner[this.expando] = undefined
                  } else {
                    delete owner[this.expando]
                  }
                }
              },
              hasData: function (owner) {
                var cache = owner[this.expando]
                return cache !== undefined && !jQuery.isEmptyObject(cache)
              },
            }
            var dataPriv = new Data()

            var dataUser = new Data()

            //	Implementation Summary
            //
            //	1. Enforce API surface and semantic compatibility with 1.9.x branch
            //	2. Improve the module's maintainability by reducing the storage
            //		paths to a single mechanism.
            //	3. Use the same single mechanism to support "private" and "user" data.
            //	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
            //	5. Avoid exposing implementation details on user objects (eg. expando properties)
            //	6. Provide a clear path for implementation upgrade to WeakMap in 2014

            var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
              rmultiDash = /[A-Z]/g

            function getData(data) {
              if (data === "true") {
                return true
              }

              if (data === "false") {
                return false
              }

              if (data === "null") {
                return null
              }

              // Only convert to a number if it doesn't change the string
              if (data === +data + "") {
                return +data
              }

              if (rbrace.test(data)) {
                return JSON.parse(data)
              }

              return data
            }

            function dataAttr(elem, key, data) {
              var name

              // If nothing was found internally, try to fetch any
              // data from the HTML5 data-* attribute
              if (data === undefined && elem.nodeType === 1) {
                name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase()
                data = elem.getAttribute(name)

                if (typeof data === "string") {
                  try {
                    data = getData(data)
                  } catch (e) {}

                  // Make sure we set the data so it isn't changed later
                  dataUser.set(elem, key, data)
                } else {
                  data = undefined
                }
              }
              return data
            }

            jQuery.extend({
              hasData: function (elem) {
                return dataUser.hasData(elem) || dataPriv.hasData(elem)
              },

              data: function (elem, name, data) {
                return dataUser.access(elem, name, data)
              },

              removeData: function (elem, name) {
                dataUser.remove(elem, name)
              },

              // TODO: Now that all calls to _data and _removeData have been replaced
              // with direct calls to dataPriv methods, these can be deprecated.
              _data: function (elem, name, data) {
                return dataPriv.access(elem, name, data)
              },

              _removeData: function (elem, name) {
                dataPriv.remove(elem, name)
              },
            })

            jQuery.fn.extend({
              data: function (key, value) {
                var i,
                  name,
                  data,
                  elem = this[0],
                  attrs = elem && elem.attributes

                // Gets all values
                if (key === undefined) {
                  if (this.length) {
                    data = dataUser.get(elem)

                    if (
                      elem.nodeType === 1 &&
                      !dataPriv.get(elem, "hasDataAttrs")
                    ) {
                      i = attrs.length
                      while (i--) {
                        // Support: IE 11 only
                        // The attrs elements can be null (trac-14894)
                        if (attrs[i]) {
                          name = attrs[i].name
                          if (name.indexOf("data-") === 0) {
                            name = camelCase(name.slice(5))
                            dataAttr(elem, name, data[name])
                          }
                        }
                      }
                      dataPriv.set(elem, "hasDataAttrs", true)
                    }
                  }

                  return data
                }

                // Sets multiple values
                if (typeof key === "object") {
                  return this.each(function () {
                    dataUser.set(this, key)
                  })
                }

                return access(
                  this,
                  function (value) {
                    var data

                    // The calling jQuery object (element matches) is not empty
                    // (and therefore has an element appears at this[ 0 ]) and the
                    // `value` parameter was not undefined. An empty jQuery object
                    // will result in `undefined` for elem = this[ 0 ] which will
                    // throw an exception if an attempt to read a data cache is made.
                    if (elem && value === undefined) {
                      // Attempt to get data from the cache
                      // The key will always be camelCased in Data
                      data = dataUser.get(elem, key)
                      if (data !== undefined) {
                        return data
                      }

                      // Attempt to "discover" the data in
                      // HTML5 custom data-* attrs
                      data = dataAttr(elem, key)
                      if (data !== undefined) {
                        return data
                      }

                      // We tried really hard, but the data doesn't exist.
                      return
                    }

                    // Set the data...
                    this.each(function () {
                      // We always store the camelCased key
                      dataUser.set(this, key, value)
                    })
                  },
                  null,
                  value,
                  arguments.length > 1,
                  null,
                  true,
                )
              },

              removeData: function (key) {
                return this.each(function () {
                  dataUser.remove(this, key)
                })
              },
            })

            jQuery.extend({
              queue: function (elem, type, data) {
                var queue

                if (elem) {
                  type = (type || "fx") + "queue"
                  queue = dataPriv.get(elem, type)

                  // Speed up dequeue by getting out quickly if this is just a lookup
                  if (data) {
                    if (!queue || Array.isArray(data)) {
                      queue = dataPriv.access(
                        elem,
                        type,
                        jQuery.makeArray(data),
                      )
                    } else {
                      queue.push(data)
                    }
                  }
                  return queue || []
                }
              },

              dequeue: function (elem, type) {
                type = type || "fx"

                var queue = jQuery.queue(elem, type),
                  startLength = queue.length,
                  fn = queue.shift(),
                  hooks = jQuery._queueHooks(elem, type),
                  next = function () {
                    jQuery.dequeue(elem, type)
                  }

                // If the fx queue is dequeued, always remove the progress sentinel
                if (fn === "inprogress") {
                  fn = queue.shift()
                  startLength--
                }

                if (fn) {
                  // Add a progress sentinel to prevent the fx queue from being
                  // automatically dequeued
                  if (type === "fx") {
                    queue.unshift("inprogress")
                  }

                  // Clear up the last queue stop function
                  delete hooks.stop
                  fn.call(elem, next, hooks)
                }

                if (!startLength && hooks) {
                  hooks.empty.fire()
                }
              },

              // Not public - generate a queueHooks object, or return the current one
              _queueHooks: function (elem, type) {
                var key = type + "queueHooks"
                return (
                  dataPriv.get(elem, key) ||
                  dataPriv.access(elem, key, {
                    empty: jQuery.Callbacks("once memory").add(function () {
                      dataPriv.remove(elem, [type + "queue", key])
                    }),
                  })
                )
              },
            })

            jQuery.fn.extend({
              queue: function (type, data) {
                var setter = 2

                if (typeof type !== "string") {
                  data = type
                  type = "fx"
                  setter--
                }

                if (arguments.length < setter) {
                  return jQuery.queue(this[0], type)
                }

                return data === undefined
                  ? this
                  : this.each(function () {
                      var queue = jQuery.queue(this, type, data)

                      // Ensure a hooks for this queue
                      jQuery._queueHooks(this, type)

                      if (type === "fx" && queue[0] !== "inprogress") {
                        jQuery.dequeue(this, type)
                      }
                    })
              },
              dequeue: function (type) {
                return this.each(function () {
                  jQuery.dequeue(this, type)
                })
              },
              clearQueue: function (type) {
                return this.queue(type || "fx", [])
              },

              // Get a promise resolved when queues of a certain type
              // are emptied (fx is the type by default)
              promise: function (type, obj) {
                var tmp,
                  count = 1,
                  defer = jQuery.Deferred(),
                  elements = this,
                  i = this.length,
                  resolve = function () {
                    if (!--count) {
                      defer.resolveWith(elements, [elements])
                    }
                  }

                if (typeof type !== "string") {
                  obj = type
                  type = undefined
                }
                type = type || "fx"

                while (i--) {
                  tmp = dataPriv.get(elements[i], type + "queueHooks")
                  if (tmp && tmp.empty) {
                    count++
                    tmp.empty.add(resolve)
                  }
                }
                resolve()
                return defer.promise(obj)
              },
            })
            var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source

            var rcssNum = new RegExp(
              "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$",
              "i",
            )

            var cssExpand = ["Top", "Right", "Bottom", "Left"]

            var documentElement = document.documentElement

            var isAttached = function (elem) {
                return jQuery.contains(elem.ownerDocument, elem)
              },
              composed = { composed: true }

            // Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
            // Check attachment across shadow DOM boundaries when possible (gh-3504)
            // Support: iOS 10.0-10.2 only
            // Early iOS 10 versions support `attachShadow` but not `getRootNode`,
            // leading to errors. We need to check for `getRootNode`.
            if (documentElement.getRootNode) {
              isAttached = function (elem) {
                return (
                  jQuery.contains(elem.ownerDocument, elem) ||
                  elem.getRootNode(composed) === elem.ownerDocument
                )
              }
            }
            var isHiddenWithinTree = function (elem, el) {
              // isHiddenWithinTree might be called from jQuery#filter function;
              // in that case, element will be second argument
              elem = el || elem

              // Inline style trumps all
              return (
                elem.style.display === "none" ||
                (elem.style.display === "" &&
                  // Otherwise, check computed style
                  // Support: Firefox <=43 - 45
                  // Disconnected elements can have computed display: none, so first confirm that elem is
                  // in the document.
                  isAttached(elem) &&
                  jQuery.css(elem, "display") === "none")
              )
            }

            function adjustCSS(elem, prop, valueParts, tween) {
              var adjusted,
                scale,
                maxIterations = 20,
                currentValue = tween
                  ? function () {
                      return tween.cur()
                    }
                  : function () {
                      return jQuery.css(elem, prop, "")
                    },
                initial = currentValue(),
                unit =
                  (valueParts && valueParts[3]) ||
                  (jQuery.cssNumber[prop] ? "" : "px"),
                // Starting value computation is required for potential unit mismatches
                initialInUnit =
                  elem.nodeType &&
                  (jQuery.cssNumber[prop] || (unit !== "px" && +initial)) &&
                  rcssNum.exec(jQuery.css(elem, prop))

              if (initialInUnit && initialInUnit[3] !== unit) {
                // Support: Firefox <=54
                // Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
                initial = initial / 2

                // Trust units reported by jQuery.css
                unit = unit || initialInUnit[3]

                // Iteratively approximate from a nonzero starting point
                initialInUnit = +initial || 1

                while (maxIterations--) {
                  // Evaluate and update our best guess (doubling guesses that zero out).
                  // Finish if the scale equals or crosses 1 (making the old*new product non-positive).
                  jQuery.style(elem, prop, initialInUnit + unit)
                  if (
                    (1 - scale) *
                      (1 - (scale = currentValue() / initial || 0.5)) <=
                    0
                  ) {
                    maxIterations = 0
                  }
                  initialInUnit = initialInUnit / scale
                }

                initialInUnit = initialInUnit * 2
                jQuery.style(elem, prop, initialInUnit + unit)

                // Make sure we update the tween properties later on
                valueParts = valueParts || []
              }

              if (valueParts) {
                initialInUnit = +initialInUnit || +initial || 0

                // Apply relative offset (+=/-=) if specified
                adjusted = valueParts[1]
                  ? initialInUnit + (valueParts[1] + 1) * valueParts[2]
                  : +valueParts[2]
                if (tween) {
                  tween.unit = unit
                  tween.start = initialInUnit
                  tween.end = adjusted
                }
              }
              return adjusted
            }

            var defaultDisplayMap = {}

            function getDefaultDisplay(elem) {
              var temp,
                doc = elem.ownerDocument,
                nodeName = elem.nodeName,
                display = defaultDisplayMap[nodeName]

              if (display) {
                return display
              }

              temp = doc.body.appendChild(doc.createElement(nodeName))
              display = jQuery.css(temp, "display")

              temp.parentNode.removeChild(temp)

              if (display === "none") {
                display = "block"
              }
              defaultDisplayMap[nodeName] = display

              return display
            }

            function showHide(elements, show) {
              var display,
                elem,
                values = [],
                index = 0,
                length = elements.length

              // Determine new display value for elements that need to change
              for (; index < length; index++) {
                elem = elements[index]
                if (!elem.style) {
                  continue
                }

                display = elem.style.display
                if (show) {
                  // Since we force visibility upon cascade-hidden elements, an immediate (and slow)
                  // check is required in this first loop unless we have a nonempty display value (either
                  // inline or about-to-be-restored)
                  if (display === "none") {
                    values[index] = dataPriv.get(elem, "display") || null
                    if (!values[index]) {
                      elem.style.display = ""
                    }
                  }
                  if (elem.style.display === "" && isHiddenWithinTree(elem)) {
                    values[index] = getDefaultDisplay(elem)
                  }
                } else {
                  if (display !== "none") {
                    values[index] = "none"

                    // Remember what we're overwriting
                    dataPriv.set(elem, "display", display)
                  }
                }
              }

              // Set the display of the elements in a second loop to avoid constant reflow
              for (index = 0; index < length; index++) {
                if (values[index] != null) {
                  elements[index].style.display = values[index]
                }
              }

              return elements
            }

            jQuery.fn.extend({
              show: function () {
                return showHide(this, true)
              },
              hide: function () {
                return showHide(this)
              },
              toggle: function (state) {
                if (typeof state === "boolean") {
                  return state ? this.show() : this.hide()
                }

                return this.each(function () {
                  if (isHiddenWithinTree(this)) {
                    jQuery(this).show()
                  } else {
                    jQuery(this).hide()
                  }
                })
              },
            })
            var rcheckableType = /^(?:checkbox|radio)$/i

            var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i

            var rscriptType = /^$|^module$|\/(?:java|ecma)script/i

            ;(function () {
              var fragment = document.createDocumentFragment(),
                div = fragment.appendChild(document.createElement("div")),
                input = document.createElement("input")

              // Support: Android 4.0 - 4.3 only
              // Check state lost if the name is set (trac-11217)
              // Support: Windows Web Apps (WWA)
              // `name` and `type` must use .setAttribute for WWA (trac-14901)
              input.setAttribute("type", "radio")
              input.setAttribute("checked", "checked")
              input.setAttribute("name", "t")

              div.appendChild(input)

              // Support: Android <=4.1 only
              // Older WebKit doesn't clone checked state correctly in fragments
              support.checkClone = div
                .cloneNode(true)
                .cloneNode(true).lastChild.checked

              // Support: IE <=11 only
              // Make sure textarea (and checkbox) defaultValue is properly cloned
              div.innerHTML = "<textarea>x</textarea>"
              support.noCloneChecked =
                !!div.cloneNode(true).lastChild.defaultValue

              // Support: IE <=9 only
              // IE <=9 replaces <option> tags with their contents when inserted outside of
              // the select element.
              div.innerHTML = "<option></option>"
              support.option = !!div.lastChild
            })()

            // We have to close these tags to support XHTML (trac-13200)
            var wrapMap = {
              // XHTML parsers do not magically insert elements in the
              // same way that tag soup parsers do. So we cannot shorten
              // this by omitting <tbody> or other required elements.
              thead: [1, "<table>", "</table>"],
              col: [2, "<table><colgroup>", "</colgroup></table>"],
              tr: [2, "<table><tbody>", "</tbody></table>"],
              td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

              _default: [0, "", ""],
            }

            wrapMap.tbody =
              wrapMap.tfoot =
              wrapMap.colgroup =
              wrapMap.caption =
                wrapMap.thead
            wrapMap.th = wrapMap.td

            // Support: IE <=9 only
            if (!support.option) {
              wrapMap.optgroup = wrapMap.option = [
                1,
                "<select multiple='multiple'>",
                "</select>",
              ]
            }

            function getAll(context, tag) {
              // Support: IE <=9 - 11 only
              // Use typeof to avoid zero-argument method invocation on host objects (trac-15151)
              var ret

              if (typeof context.getElementsByTagName !== "undefined") {
                ret = context.getElementsByTagName(tag || "*")
              } else if (typeof context.querySelectorAll !== "undefined") {
                ret = context.querySelectorAll(tag || "*")
              } else {
                ret = []
              }

              if (tag === undefined || (tag && nodeName(context, tag))) {
                return jQuery.merge([context], ret)
              }

              return ret
            }

            // Mark scripts as having already been evaluated
            function setGlobalEval(elems, refElements) {
              var i = 0,
                l = elems.length

              for (; i < l; i++) {
                dataPriv.set(
                  elems[i],
                  "globalEval",
                  !refElements || dataPriv.get(refElements[i], "globalEval"),
                )
              }
            }

            var rhtml = /<|&#?\w+;/

            function buildFragment(
              elems,
              context,
              scripts,
              selection,
              ignored,
            ) {
              var elem,
                tmp,
                tag,
                wrap,
                attached,
                j,
                fragment = context.createDocumentFragment(),
                nodes = [],
                i = 0,
                l = elems.length

              for (; i < l; i++) {
                elem = elems[i]

                if (elem || elem === 0) {
                  // Add nodes directly
                  if (toType(elem) === "object") {
                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, elem.nodeType ? [elem] : elem)

                    // Convert non-html into a text node
                  } else if (!rhtml.test(elem)) {
                    nodes.push(context.createTextNode(elem))

                    // Convert html into DOM nodes
                  } else {
                    tmp =
                      tmp || fragment.appendChild(context.createElement("div"))

                    // Deserialize a standard representation
                    tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase()
                    wrap = wrapMap[tag] || wrapMap._default
                    tmp.innerHTML =
                      wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2]

                    // Descend through wrappers to the right content
                    j = wrap[0]
                    while (j--) {
                      tmp = tmp.lastChild
                    }

                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // push.apply(_, arraylike) throws on ancient WebKit
                    jQuery.merge(nodes, tmp.childNodes)

                    // Remember the top-level container
                    tmp = fragment.firstChild

                    // Ensure the created nodes are orphaned (trac-12392)
                    tmp.textContent = ""
                  }
                }
              }

              // Remove wrapper from fragment
              fragment.textContent = ""

              i = 0
              while ((elem = nodes[i++])) {
                // Skip elements already in the context collection (trac-4087)
                if (selection && jQuery.inArray(elem, selection) > -1) {
                  if (ignored) {
                    ignored.push(elem)
                  }
                  continue
                }

                attached = isAttached(elem)

                // Append to fragment
                tmp = getAll(fragment.appendChild(elem), "script")

                // Preserve script evaluation history
                if (attached) {
                  setGlobalEval(tmp)
                }

                // Capture executables
                if (scripts) {
                  j = 0
                  while ((elem = tmp[j++])) {
                    if (rscriptType.test(elem.type || "")) {
                      scripts.push(elem)
                    }
                  }
                }
              }

              return fragment
            }

            var rtypenamespace = /^([^.]*)(?:\.(.+)|)/

            function returnTrue() {
              return true
            }

            function returnFalse() {
              return false
            }

            function on(elem, types, selector, data, fn, one) {
              var origFn, type

              // Types can be a map of types/handlers
              if (typeof types === "object") {
                // ( types-Object, selector, data )
                if (typeof selector !== "string") {
                  // ( types-Object, data )
                  data = data || selector
                  selector = undefined
                }
                for (type in types) {
                  on(elem, type, selector, data, types[type], one)
                }
                return elem
              }

              if (data == null && fn == null) {
                // ( types, fn )
                fn = selector
                data = selector = undefined
              } else if (fn == null) {
                if (typeof selector === "string") {
                  // ( types, selector, fn )
                  fn = data
                  data = undefined
                } else {
                  // ( types, data, fn )
                  fn = data
                  data = selector
                  selector = undefined
                }
              }
              if (fn === false) {
                fn = returnFalse
              } else if (!fn) {
                return elem
              }

              if (one === 1) {
                origFn = fn
                fn = function (event) {
                  // Can use an empty set, since event contains the info
                  jQuery().off(event)
                  return origFn.apply(this, arguments)
                }

                // Use same guid so caller can remove using origFn
                fn.guid = origFn.guid || (origFn.guid = jQuery.guid++)
              }
              return elem.each(function () {
                jQuery.event.add(this, types, fn, data, selector)
              })
            }

            /*
             * Helper functions for managing events -- not part of the public interface.
             * Props to Dean Edwards' addEvent library for many of the ideas.
             */
            jQuery.event = {
              global: {},

              add: function (elem, types, handler, data, selector) {
                var handleObjIn,
                  eventHandle,
                  tmp,
                  events,
                  t,
                  handleObj,
                  special,
                  handlers,
                  type,
                  namespaces,
                  origType,
                  elemData = dataPriv.get(elem)

                // Only attach events to objects that accept data
                if (!acceptData(elem)) {
                  return
                }

                // Caller can pass in an object of custom data in lieu of the handler
                if (handler.handler) {
                  handleObjIn = handler
                  handler = handleObjIn.handler
                  selector = handleObjIn.selector
                }

                // Ensure that invalid selectors throw exceptions at attach time
                // Evaluate against documentElement in case elem is a non-element node (e.g., document)
                if (selector) {
                  jQuery.find.matchesSelector(documentElement, selector)
                }

                // Make sure that the handler has a unique ID, used to find/remove it later
                if (!handler.guid) {
                  handler.guid = jQuery.guid++
                }

                // Init the element's event structure and main handler, if this is the first
                if (!(events = elemData.events)) {
                  events = elemData.events = Object.create(null)
                }
                if (!(eventHandle = elemData.handle)) {
                  eventHandle = elemData.handle = function (e) {
                    // Discard the second event of a jQuery.event.trigger() and
                    // when an event is called after a page has unloaded
                    return typeof jQuery !== "undefined" &&
                      jQuery.event.triggered !== e.type
                      ? jQuery.event.dispatch.apply(elem, arguments)
                      : undefined
                  }
                }

                // Handle multiple events separated by a space
                types = (types || "").match(rnothtmlwhite) || [""]
                t = types.length
                while (t--) {
                  tmp = rtypenamespace.exec(types[t]) || []
                  type = origType = tmp[1]
                  namespaces = (tmp[2] || "").split(".").sort()

                  // There *must* be a type, no attaching namespace-only handlers
                  if (!type) {
                    continue
                  }

                  // If event changes its type, use the special event handlers for the changed type
                  special = jQuery.event.special[type] || {}

                  // If selector defined, determine special event api type, otherwise given type
                  type =
                    (selector ? special.delegateType : special.bindType) || type

                  // Update special based on newly reset type
                  special = jQuery.event.special[type] || {}

                  // handleObj is passed to all event handlers
                  handleObj = jQuery.extend(
                    {
                      type: type,
                      origType: origType,
                      data: data,
                      handler: handler,
                      guid: handler.guid,
                      selector: selector,
                      needsContext:
                        selector &&
                        jQuery.expr.match.needsContext.test(selector),
                      namespace: namespaces.join("."),
                    },
                    handleObjIn,
                  )

                  // Init the event handler queue if we're the first
                  if (!(handlers = events[type])) {
                    handlers = events[type] = []
                    handlers.delegateCount = 0

                    // Only use addEventListener if the special events handler returns false
                    if (
                      !special.setup ||
                      special.setup.call(
                        elem,
                        data,
                        namespaces,
                        eventHandle,
                      ) === false
                    ) {
                      if (elem.addEventListener) {
                        elem.addEventListener(type, eventHandle)
                      }
                    }
                  }

                  if (special.add) {
                    special.add.call(elem, handleObj)

                    if (!handleObj.handler.guid) {
                      handleObj.handler.guid = handler.guid
                    }
                  }

                  // Add to the element's handler list, delegates in front
                  if (selector) {
                    handlers.splice(handlers.delegateCount++, 0, handleObj)
                  } else {
                    handlers.push(handleObj)
                  }

                  // Keep track of which events have ever been used, for event optimization
                  jQuery.event.global[type] = true
                }
              },

              // Detach an event or set of events from an element
              remove: function (elem, types, handler, selector, mappedTypes) {
                var j,
                  origCount,
                  tmp,
                  events,
                  t,
                  handleObj,
                  special,
                  handlers,
                  type,
                  namespaces,
                  origType,
                  elemData = dataPriv.hasData(elem) && dataPriv.get(elem)

                if (!elemData || !(events = elemData.events)) {
                  return
                }

                // Once for each type.namespace in types; type may be omitted
                types = (types || "").match(rnothtmlwhite) || [""]
                t = types.length
                while (t--) {
                  tmp = rtypenamespace.exec(types[t]) || []
                  type = origType = tmp[1]
                  namespaces = (tmp[2] || "").split(".").sort()

                  // Unbind all events (on this namespace, if provided) for the element
                  if (!type) {
                    for (type in events) {
                      jQuery.event.remove(
                        elem,
                        type + types[t],
                        handler,
                        selector,
                        true,
                      )
                    }
                    continue
                  }

                  special = jQuery.event.special[type] || {}
                  type =
                    (selector ? special.delegateType : special.bindType) || type
                  handlers = events[type] || []
                  tmp =
                    tmp[2] &&
                    new RegExp(
                      "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)",
                    )

                  // Remove matching events
                  origCount = j = handlers.length
                  while (j--) {
                    handleObj = handlers[j]

                    if (
                      (mappedTypes || origType === handleObj.origType) &&
                      (!handler || handler.guid === handleObj.guid) &&
                      (!tmp || tmp.test(handleObj.namespace)) &&
                      (!selector ||
                        selector === handleObj.selector ||
                        (selector === "**" && handleObj.selector))
                    ) {
                      handlers.splice(j, 1)

                      if (handleObj.selector) {
                        handlers.delegateCount--
                      }
                      if (special.remove) {
                        special.remove.call(elem, handleObj)
                      }
                    }
                  }

                  // Remove generic event handler if we removed something and no more handlers exist
                  // (avoids potential for endless recursion during removal of special event handlers)
                  if (origCount && !handlers.length) {
                    if (
                      !special.teardown ||
                      special.teardown.call(
                        elem,
                        namespaces,
                        elemData.handle,
                      ) === false
                    ) {
                      jQuery.removeEvent(elem, type, elemData.handle)
                    }

                    delete events[type]
                  }
                }

                // Remove data and the expando if it's no longer used
                if (jQuery.isEmptyObject(events)) {
                  dataPriv.remove(elem, "handle events")
                }
              },

              dispatch: function (nativeEvent) {
                var i,
                  j,
                  ret,
                  matched,
                  handleObj,
                  handlerQueue,
                  args = new Array(arguments.length),
                  // Make a writable jQuery.Event from the native event object
                  event = jQuery.event.fix(nativeEvent),
                  handlers =
                    (dataPriv.get(this, "events") || Object.create(null))[
                      event.type
                    ] || [],
                  special = jQuery.event.special[event.type] || {}

                // Use the fix-ed jQuery.Event rather than the (read-only) native event
                args[0] = event

                for (i = 1; i < arguments.length; i++) {
                  args[i] = arguments[i]
                }

                event.delegateTarget = this

                // Call the preDispatch hook for the mapped type, and let it bail if desired
                if (
                  special.preDispatch &&
                  special.preDispatch.call(this, event) === false
                ) {
                  return
                }

                // Determine handlers
                handlerQueue = jQuery.event.handlers.call(this, event, handlers)

                // Run delegates first; they may want to stop propagation beneath us
                i = 0
                while (
                  (matched = handlerQueue[i++]) &&
                  !event.isPropagationStopped()
                ) {
                  event.currentTarget = matched.elem

                  j = 0
                  while (
                    (handleObj = matched.handlers[j++]) &&
                    !event.isImmediatePropagationStopped()
                  ) {
                    // If the event is namespaced, then each handler is only invoked if it is
                    // specially universal or its namespaces are a superset of the event's.
                    if (
                      !event.rnamespace ||
                      handleObj.namespace === false ||
                      event.rnamespace.test(handleObj.namespace)
                    ) {
                      event.handleObj = handleObj
                      event.data = handleObj.data

                      ret = (
                        (jQuery.event.special[handleObj.origType] || {})
                          .handle || handleObj.handler
                      ).apply(matched.elem, args)

                      if (ret !== undefined) {
                        if ((event.result = ret) === false) {
                          event.preventDefault()
                          event.stopPropagation()
                        }
                      }
                    }
                  }
                }

                // Call the postDispatch hook for the mapped type
                if (special.postDispatch) {
                  special.postDispatch.call(this, event)
                }

                return event.result
              },

              handlers: function (event, handlers) {
                var i,
                  handleObj,
                  sel,
                  matchedHandlers,
                  matchedSelectors,
                  handlerQueue = [],
                  delegateCount = handlers.delegateCount,
                  cur = event.target

                // Find delegate handlers
                if (
                  delegateCount &&
                  // Support: IE <=9
                  // Black-hole SVG <use> instance trees (trac-13180)
                  cur.nodeType &&
                  // Support: Firefox <=42
                  // Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
                  // https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
                  // Support: IE 11 only
                  // ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
                  !(event.type === "click" && event.button >= 1)
                ) {
                  for (; cur !== this; cur = cur.parentNode || this) {
                    // Don't check non-elements (trac-13208)
                    // Don't process clicks on disabled elements (trac-6911, trac-8165, trac-11382, trac-11764)
                    if (
                      cur.nodeType === 1 &&
                      !(event.type === "click" && cur.disabled === true)
                    ) {
                      matchedHandlers = []
                      matchedSelectors = {}
                      for (i = 0; i < delegateCount; i++) {
                        handleObj = handlers[i]

                        // Don't conflict with Object.prototype properties (trac-13203)
                        sel = handleObj.selector + " "

                        if (matchedSelectors[sel] === undefined) {
                          matchedSelectors[sel] = handleObj.needsContext
                            ? jQuery(sel, this).index(cur) > -1
                            : jQuery.find(sel, this, null, [cur]).length
                        }
                        if (matchedSelectors[sel]) {
                          matchedHandlers.push(handleObj)
                        }
                      }
                      if (matchedHandlers.length) {
                        handlerQueue.push({
                          elem: cur,
                          handlers: matchedHandlers,
                        })
                      }
                    }
                  }
                }

                // Add the remaining (directly-bound) handlers
                cur = this
                if (delegateCount < handlers.length) {
                  handlerQueue.push({
                    elem: cur,
                    handlers: handlers.slice(delegateCount),
                  })
                }

                return handlerQueue
              },

              addProp: function (name, hook) {
                Object.defineProperty(jQuery.Event.prototype, name, {
                  enumerable: true,
                  configurable: true,

                  get: isFunction(hook)
                    ? function () {
                        if (this.originalEvent) {
                          return hook(this.originalEvent)
                        }
                      }
                    : function () {
                        if (this.originalEvent) {
                          return this.originalEvent[name]
                        }
                      },

                  set: function (value) {
                    Object.defineProperty(this, name, {
                      enumerable: true,
                      configurable: true,
                      writable: true,
                      value: value,
                    })
                  },
                })
              },

              fix: function (originalEvent) {
                return originalEvent[jQuery.expando]
                  ? originalEvent
                  : new jQuery.Event(originalEvent)
              },

              special: {
                load: {
                  // Prevent triggered image.load events from bubbling to window.load
                  noBubble: true,
                },
                click: {
                  // Utilize native event to ensure correct state for checkable inputs
                  setup: function (data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data

                    // Claim the first handler
                    if (
                      rcheckableType.test(el.type) &&
                      el.click &&
                      nodeName(el, "input")
                    ) {
                      // dataPriv.set( el, "click", ... )
                      leverageNative(el, "click", true)
                    }

                    // Return false to allow normal processing in the caller
                    return false
                  },
                  trigger: function (data) {
                    // For mutual compressibility with _default, replace `this` access with a local var.
                    // `|| data` is dead code meant only to preserve the variable through minification.
                    var el = this || data

                    // Force setup before triggering a click
                    if (
                      rcheckableType.test(el.type) &&
                      el.click &&
                      nodeName(el, "input")
                    ) {
                      leverageNative(el, "click")
                    }

                    // Return non-false to allow normal event-path propagation
                    return true
                  },

                  // For cross-browser consistency, suppress native .click() on links
                  // Also prevent it if we're currently inside a leveraged native-event stack
                  _default: function (event) {
                    var target = event.target
                    return (
                      (rcheckableType.test(target.type) &&
                        target.click &&
                        nodeName(target, "input") &&
                        dataPriv.get(target, "click")) ||
                      nodeName(target, "a")
                    )
                  },
                },

                beforeunload: {
                  postDispatch: function (event) {
                    // Support: Firefox 20+
                    // Firefox doesn't alert if the returnValue field is not set.
                    if (event.result !== undefined && event.originalEvent) {
                      event.originalEvent.returnValue = event.result
                    }
                  },
                },
              },
            }

            // Ensure the presence of an event listener that handles manually-triggered
            // synthetic events by interrupting progress until reinvoked in response to
            // *native* events that it fires directly, ensuring that state changes have
            // already occurred before other listeners are invoked.
            function leverageNative(el, type, isSetup) {
              // Missing `isSetup` indicates a trigger call, which must force setup through jQuery.event.add
              if (!isSetup) {
                if (dataPriv.get(el, type) === undefined) {
                  jQuery.event.add(el, type, returnTrue)
                }
                return
              }

              // Register the controller as a special universal handler for all event namespaces
              dataPriv.set(el, type, false)
              jQuery.event.add(el, type, {
                namespace: false,
                handler: function (event) {
                  var result,
                    saved = dataPriv.get(this, type)

                  if (event.isTrigger & 1 && this[type]) {
                    // Interrupt processing of the outer synthetic .trigger()ed event
                    if (!saved) {
                      // Store arguments for use when handling the inner native event
                      // There will always be at least one argument (an event object), so this array
                      // will not be confused with a leftover capture object.
                      saved = slice.call(arguments)
                      dataPriv.set(this, type, saved)

                      // Trigger the native event and capture its result
                      this[type]()
                      result = dataPriv.get(this, type)
                      dataPriv.set(this, type, false)

                      if (saved !== result) {
                        // Cancel the outer synthetic event
                        event.stopImmediatePropagation()
                        event.preventDefault()

                        return result
                      }

                      // If this is an inner synthetic event for an event with a bubbling surrogate
                      // (focus or blur), assume that the surrogate already propagated from triggering
                      // the native event and prevent that from happening again here.
                      // This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
                      // bubbling surrogate propagates *after* the non-bubbling base), but that seems
                      // less bad than duplication.
                    } else if (
                      (jQuery.event.special[type] || {}).delegateType
                    ) {
                      event.stopPropagation()
                    }

                    // If this is a native event triggered above, everything is now in order
                    // Fire an inner synthetic event with the original arguments
                  } else if (saved) {
                    // ...and capture the result
                    dataPriv.set(
                      this,
                      type,
                      jQuery.event.trigger(saved[0], saved.slice(1), this),
                    )

                    // Abort handling of the native event by all jQuery handlers while allowing
                    // native handlers on the same element to run. On target, this is achieved
                    // by stopping immediate propagation just on the jQuery event. However,
                    // the native event is re-wrapped by a jQuery one on each level of the
                    // propagation so the only way to stop it for jQuery is to stop it for
                    // everyone via native `stopPropagation()`. This is not a problem for
                    // focus/blur which don't bubble, but it does also stop click on checkboxes
                    // and radios. We accept this limitation.
                    event.stopPropagation()
                    event.isImmediatePropagationStopped = returnTrue
                  }
                },
              })
            }

            jQuery.removeEvent = function (elem, type, handle) {
              // This "if" is needed for plain objects
              if (elem.removeEventListener) {
                elem.removeEventListener(type, handle)
              }
            }

            jQuery.Event = function (src, props) {
              // Allow instantiation without the 'new' keyword
              if (!(this instanceof jQuery.Event)) {
                return new jQuery.Event(src, props)
              }

              // Event object
              if (src && src.type) {
                this.originalEvent = src
                this.type = src.type

                // Events bubbling up the document may have been marked as prevented
                // by a handler lower down the tree; reflect the correct value.
                this.isDefaultPrevented =
                  src.defaultPrevented ||
                  (src.defaultPrevented === undefined &&
                    // Support: Android <=2.3 only
                    src.returnValue === false)
                    ? returnTrue
                    : returnFalse

                // Create target properties
                // Support: Safari <=6 - 7 only
                // Target should not be a text node (trac-504, trac-13143)
                this.target =
                  src.target && src.target.nodeType === 3
                    ? src.target.parentNode
                    : src.target

                this.currentTarget = src.currentTarget
                this.relatedTarget = src.relatedTarget

                // Event type
              } else {
                this.type = src
              }

              // Put explicitly provided properties onto the event object
              if (props) {
                jQuery.extend(this, props)
              }

              // Create a timestamp if incoming event doesn't have one
              this.timeStamp = (src && src.timeStamp) || Date.now()

              // Mark it as fixed
              this[jQuery.expando] = true
            }

            // jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
            // https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
            jQuery.Event.prototype = {
              constructor: jQuery.Event,
              isDefaultPrevented: returnFalse,
              isPropagationStopped: returnFalse,
              isImmediatePropagationStopped: returnFalse,
              isSimulated: false,

              preventDefault: function () {
                var e = this.originalEvent

                this.isDefaultPrevented = returnTrue

                if (e && !this.isSimulated) {
                  e.preventDefault()
                }
              },
              stopPropagation: function () {
                var e = this.originalEvent

                this.isPropagationStopped = returnTrue

                if (e && !this.isSimulated) {
                  e.stopPropagation()
                }
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent

                this.isImmediatePropagationStopped = returnTrue

                if (e && !this.isSimulated) {
                  e.stopImmediatePropagation()
                }

                this.stopPropagation()
              },
            }

            // Includes all common event props including KeyEvent and MouseEvent specific props
            jQuery.each(
              {
                altKey: true,
                bubbles: true,
                cancelable: true,
                changedTouches: true,
                ctrlKey: true,
                detail: true,
                eventPhase: true,
                metaKey: true,
                pageX: true,
                pageY: true,
                shiftKey: true,
                view: true,
                char: true,
                code: true,
                charCode: true,
                key: true,
                keyCode: true,
                button: true,
                buttons: true,
                clientX: true,
                clientY: true,
                offsetX: true,
                offsetY: true,
                pointerId: true,
                pointerType: true,
                screenX: true,
                screenY: true,
                targetTouches: true,
                toElement: true,
                touches: true,
                which: true,
              },
              jQuery.event.addProp,
            )

            jQuery.each(
              { focus: "focusin", blur: "focusout" },
              function (type, delegateType) {
                function focusMappedHandler(nativeEvent) {
                  if (document.documentMode) {
                    // Support: IE 11+
                    // Attach a single focusin/focusout handler on the document while someone wants
                    // focus/blur. This is because the former are synchronous in IE while the latter
                    // are async. In other browsers, all those handlers are invoked synchronously.

                    // `handle` from private data would already wrap the event, but we need
                    // to change the `type` here.
                    var handle = dataPriv.get(this, "handle"),
                      event = jQuery.event.fix(nativeEvent)
                    event.type =
                      nativeEvent.type === "focusin" ? "focus" : "blur"
                    event.isSimulated = true

                    // First, handle focusin/focusout
                    handle(nativeEvent)

                    // ...then, handle focus/blur
                    //
                    // focus/blur don't bubble while focusin/focusout do; simulate the former by only
                    // invoking the handler at the lower level.
                    if (event.target === event.currentTarget) {
                      // The setup part calls `leverageNative`, which, in turn, calls
                      // `jQuery.event.add`, so event handle will already have been set
                      // by this point.
                      handle(event)
                    }
                  } else {
                    // For non-IE browsers, attach a single capturing handler on the document
                    // while someone wants focusin/focusout.
                    jQuery.event.simulate(
                      delegateType,
                      nativeEvent.target,
                      jQuery.event.fix(nativeEvent),
                    )
                  }
                }

                jQuery.event.special[type] = {
                  // Utilize native event if possible so blur/focus sequence is correct
                  setup: function () {
                    var attaches

                    // Claim the first handler
                    // dataPriv.set( this, "focus", ... )
                    // dataPriv.set( this, "blur", ... )
                    leverageNative(this, type, true)

                    if (document.documentMode) {
                      // Support: IE 9 - 11+
                      // We use the same native handler for focusin & focus (and focusout & blur)
                      // so we need to coordinate setup & teardown parts between those events.
                      // Use `delegateType` as the key as `type` is already used by `leverageNative`.
                      attaches = dataPriv.get(this, delegateType)
                      if (!attaches) {
                        this.addEventListener(delegateType, focusMappedHandler)
                      }
                      dataPriv.set(this, delegateType, (attaches || 0) + 1)
                    } else {
                      // Return false to allow normal processing in the caller
                      return false
                    }
                  },
                  trigger: function () {
                    // Force setup before trigger
                    leverageNative(this, type)

                    // Return non-false to allow normal event-path propagation
                    return true
                  },

                  teardown: function () {
                    var attaches

                    if (document.documentMode) {
                      attaches = dataPriv.get(this, delegateType) - 1
                      if (!attaches) {
                        this.removeEventListener(
                          delegateType,
                          focusMappedHandler,
                        )
                        dataPriv.remove(this, delegateType)
                      } else {
                        dataPriv.set(this, delegateType, attaches)
                      }
                    } else {
                      // Return false to indicate standard teardown should be applied
                      return false
                    }
                  },

                  // Suppress native focus or blur if we're currently inside
                  // a leveraged native-event stack
                  _default: function (event) {
                    return dataPriv.get(event.target, type)
                  },

                  delegateType: delegateType,
                }

                // Support: Firefox <=44
                // Firefox doesn't have focus(in | out) events
                // Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
                //
                // Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
                // focus(in | out) events fire after focus & blur events,
                // which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
                // Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
                //
                // Support: IE 9 - 11+
                // To preserve relative focusin/focus & focusout/blur event order guaranteed on the 3.x branch,
                // attach a single handler for both events in IE.
                jQuery.event.special[delegateType] = {
                  setup: function () {
                    // Handle: regular nodes (via `this.ownerDocument`), window
                    // (via `this.document`) & document (via `this`).
                    var doc = this.ownerDocument || this.document || this,
                      dataHolder = document.documentMode ? this : doc,
                      attaches = dataPriv.get(dataHolder, delegateType)

                    // Support: IE 9 - 11+
                    // We use the same native handler for focusin & focus (and focusout & blur)
                    // so we need to coordinate setup & teardown parts between those events.
                    // Use `delegateType` as the key as `type` is already used by `leverageNative`.
                    if (!attaches) {
                      if (document.documentMode) {
                        this.addEventListener(delegateType, focusMappedHandler)
                      } else {
                        doc.addEventListener(type, focusMappedHandler, true)
                      }
                    }
                    dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1)
                  },
                  teardown: function () {
                    var doc = this.ownerDocument || this.document || this,
                      dataHolder = document.documentMode ? this : doc,
                      attaches = dataPriv.get(dataHolder, delegateType) - 1

                    if (!attaches) {
                      if (document.documentMode) {
                        this.removeEventListener(
                          delegateType,
                          focusMappedHandler,
                        )
                      } else {
                        doc.removeEventListener(type, focusMappedHandler, true)
                      }
                      dataPriv.remove(dataHolder, delegateType)
                    } else {
                      dataPriv.set(dataHolder, delegateType, attaches)
                    }
                  },
                }
              },
            )

            // Create mouseenter/leave events using mouseover/out and event-time checks
            // so that event delegation works in jQuery.
            // Do the same for pointerenter/pointerleave and pointerover/pointerout
            //
            // Support: Safari 7 only
            // Safari sends mouseenter too often; see:
            // https://bugs.chromium.org/p/chromium/issues/detail?id=470258
            // for the description of the bug (it existed in older Chrome versions as well).
            jQuery.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (orig, fix) {
                jQuery.event.special[orig] = {
                  delegateType: fix,
                  bindType: fix,

                  handle: function (event) {
                    var ret,
                      target = this,
                      related = event.relatedTarget,
                      handleObj = event.handleObj

                    // For mouseenter/leave call the handler if related is outside the target.
                    // NB: No relatedTarget if the mouse left/entered the browser window
                    if (
                      !related ||
                      (related !== target && !jQuery.contains(target, related))
                    ) {
                      event.type = handleObj.origType
                      ret = handleObj.handler.apply(this, arguments)
                      event.type = fix
                    }
                    return ret
                  },
                }
              },
            )

            jQuery.fn.extend({
              on: function (types, selector, data, fn) {
                return on(this, types, selector, data, fn)
              },
              one: function (types, selector, data, fn) {
                return on(this, types, selector, data, fn, 1)
              },
              off: function (types, selector, fn) {
                var handleObj, type
                if (types && types.preventDefault && types.handleObj) {
                  // ( event )  dispatched jQuery.Event
                  handleObj = types.handleObj
                  jQuery(types.delegateTarget).off(
                    handleObj.namespace
                      ? handleObj.origType + "." + handleObj.namespace
                      : handleObj.origType,
                    handleObj.selector,
                    handleObj.handler,
                  )
                  return this
                }
                if (typeof types === "object") {
                  // ( types-object [, selector] )
                  for (type in types) {
                    this.off(type, selector, types[type])
                  }
                  return this
                }
                if (selector === false || typeof selector === "function") {
                  // ( types [, fn] )
                  fn = selector
                  selector = undefined
                }
                if (fn === false) {
                  fn = returnFalse
                }
                return this.each(function () {
                  jQuery.event.remove(this, types, fn, selector)
                })
              },
            })

            var // Support: IE <=10 - 11, Edge 12 - 13 only
              // In IE/Edge using regex groups here causes severe slowdowns.
              // See https://connect.microsoft.com/IE/feedback/details/1736512/
              rnoInnerhtml = /<script|<style|<link/i,
              // checked="checked" or checked
              rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
              rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g

            // Prefer a tbody over its parent table for containing new rows
            function manipulationTarget(elem, content) {
              if (
                nodeName(elem, "table") &&
                nodeName(
                  content.nodeType !== 11 ? content : content.firstChild,
                  "tr",
                )
              ) {
                return jQuery(elem).children("tbody")[0] || elem
              }

              return elem
            }

            // Replace/restore the type attribute of script elements for safe DOM manipulation
            function disableScript(elem) {
              elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type
              return elem
            }
            function restoreScript(elem) {
              if ((elem.type || "").slice(0, 5) === "true/") {
                elem.type = elem.type.slice(5)
              } else {
                elem.removeAttribute("type")
              }

              return elem
            }

            function cloneCopyEvent(src, dest) {
              var i, l, type, pdataOld, udataOld, udataCur, events

              if (dest.nodeType !== 1) {
                return
              }

              // 1. Copy private data: events, handlers, etc.
              if (dataPriv.hasData(src)) {
                pdataOld = dataPriv.get(src)
                events = pdataOld.events

                if (events) {
                  dataPriv.remove(dest, "handle events")

                  for (type in events) {
                    for (i = 0, l = events[type].length; i < l; i++) {
                      jQuery.event.add(dest, type, events[type][i])
                    }
                  }
                }
              }

              // 2. Copy user data
              if (dataUser.hasData(src)) {
                udataOld = dataUser.access(src)
                udataCur = jQuery.extend({}, udataOld)

                dataUser.set(dest, udataCur)
              }
            }

            // Fix IE bugs, see support tests
            function fixInput(src, dest) {
              var nodeName = dest.nodeName.toLowerCase()

              // Fails to persist the checked state of a cloned checkbox or radio button.
              if (nodeName === "input" && rcheckableType.test(src.type)) {
                dest.checked = src.checked

                // Fails to return the selected option to the default selected state when cloning options
              } else if (nodeName === "input" || nodeName === "textarea") {
                dest.defaultValue = src.defaultValue
              }
            }

            function domManip(collection, args, callback, ignored) {
              // Flatten any nested arrays
              args = flat(args)

              var fragment,
                first,
                scripts,
                hasScripts,
                node,
                doc,
                i = 0,
                l = collection.length,
                iNoClone = l - 1,
                value = args[0],
                valueIsFunction = isFunction(value)

              // We can't cloneNode fragments that contain checked, in WebKit
              if (
                valueIsFunction ||
                (l > 1 &&
                  typeof value === "string" &&
                  !support.checkClone &&
                  rchecked.test(value))
              ) {
                return collection.each(function (index) {
                  var self = collection.eq(index)
                  if (valueIsFunction) {
                    args[0] = value.call(this, index, self.html())
                  }
                  domManip(self, args, callback, ignored)
                })
              }

              if (l) {
                fragment = buildFragment(
                  args,
                  collection[0].ownerDocument,
                  false,
                  collection,
                  ignored,
                )
                first = fragment.firstChild

                if (fragment.childNodes.length === 1) {
                  fragment = first
                }

                // Require either new content or an interest in ignored elements to invoke the callback
                if (first || ignored) {
                  scripts = jQuery.map(
                    getAll(fragment, "script"),
                    disableScript,
                  )
                  hasScripts = scripts.length

                  // Use the original fragment for the last item
                  // instead of the first because it can end up
                  // being emptied incorrectly in certain situations (trac-8070).
                  for (; i < l; i++) {
                    node = fragment

                    if (i !== iNoClone) {
                      node = jQuery.clone(node, true, true)

                      // Keep references to cloned scripts for later restoration
                      if (hasScripts) {
                        // Support: Android <=4.0 only, PhantomJS 1 only
                        // push.apply(_, arraylike) throws on ancient WebKit
                        jQuery.merge(scripts, getAll(node, "script"))
                      }
                    }

                    callback.call(collection[i], node, i)
                  }

                  if (hasScripts) {
                    doc = scripts[scripts.length - 1].ownerDocument

                    // Reenable scripts
                    jQuery.map(scripts, restoreScript)

                    // Evaluate executable scripts on first document insertion
                    for (i = 0; i < hasScripts; i++) {
                      node = scripts[i]
                      if (
                        rscriptType.test(node.type || "") &&
                        !dataPriv.access(node, "globalEval") &&
                        jQuery.contains(doc, node)
                      ) {
                        if (
                          node.src &&
                          (node.type || "").toLowerCase() !== "module"
                        ) {
                          // Optional AJAX dependency, but won't run scripts if not present
                          if (jQuery._evalUrl && !node.noModule) {
                            jQuery._evalUrl(
                              node.src,
                              {
                                nonce: node.nonce || node.getAttribute("nonce"),
                              },
                              doc,
                            )
                          }
                        } else {
                          // Unwrap a CDATA section containing script contents. This shouldn't be
                          // needed as in XML documents they're already not visible when
                          // inspecting element contents and in HTML documents they have no
                          // meaning but we're preserving that logic for backwards compatibility.
                          // This will be removed completely in 4.0. See gh-4904.
                          DOMEval(
                            node.textContent.replace(rcleanScript, ""),
                            node,
                            doc,
                          )
                        }
                      }
                    }
                  }
                }
              }

              return collection
            }

            function remove(elem, selector, keepData) {
              var node,
                nodes = selector ? jQuery.filter(selector, elem) : elem,
                i = 0

              for (; (node = nodes[i]) != null; i++) {
                if (!keepData && node.nodeType === 1) {
                  jQuery.cleanData(getAll(node))
                }

                if (node.parentNode) {
                  if (keepData && isAttached(node)) {
                    setGlobalEval(getAll(node, "script"))
                  }
                  node.parentNode.removeChild(node)
                }
              }

              return elem
            }

            jQuery.extend({
              htmlPrefilter: function (html) {
                return html
              },

              clone: function (elem, dataAndEvents, deepDataAndEvents) {
                var i,
                  l,
                  srcElements,
                  destElements,
                  clone = elem.cloneNode(true),
                  inPage = isAttached(elem)

                // Fix IE cloning issues
                if (
                  !support.noCloneChecked &&
                  (elem.nodeType === 1 || elem.nodeType === 11) &&
                  !jQuery.isXMLDoc(elem)
                ) {
                  // We eschew jQuery#find here for performance reasons:
                  // https://jsperf.com/getall-vs-sizzle/2
                  destElements = getAll(clone)
                  srcElements = getAll(elem)

                  for (i = 0, l = srcElements.length; i < l; i++) {
                    fixInput(srcElements[i], destElements[i])
                  }
                }

                // Copy the events from the original to the clone
                if (dataAndEvents) {
                  if (deepDataAndEvents) {
                    srcElements = srcElements || getAll(elem)
                    destElements = destElements || getAll(clone)

                    for (i = 0, l = srcElements.length; i < l; i++) {
                      cloneCopyEvent(srcElements[i], destElements[i])
                    }
                  } else {
                    cloneCopyEvent(elem, clone)
                  }
                }

                // Preserve script evaluation history
                destElements = getAll(clone, "script")
                if (destElements.length > 0) {
                  setGlobalEval(destElements, !inPage && getAll(elem, "script"))
                }

                // Return the cloned set
                return clone
              },

              cleanData: function (elems) {
                var data,
                  elem,
                  type,
                  special = jQuery.event.special,
                  i = 0

                for (; (elem = elems[i]) !== undefined; i++) {
                  if (acceptData(elem)) {
                    if ((data = elem[dataPriv.expando])) {
                      if (data.events) {
                        for (type in data.events) {
                          if (special[type]) {
                            jQuery.event.remove(elem, type)

                            // This is a shortcut to avoid jQuery.event.remove's overhead
                          } else {
                            jQuery.removeEvent(elem, type, data.handle)
                          }
                        }
                      }

                      // Support: Chrome <=35 - 45+
                      // Assign undefined instead of using delete, see Data#remove
                      elem[dataPriv.expando] = undefined
                    }
                    if (elem[dataUser.expando]) {
                      // Support: Chrome <=35 - 45+
                      // Assign undefined instead of using delete, see Data#remove
                      elem[dataUser.expando] = undefined
                    }
                  }
                }
              },
            })

            jQuery.fn.extend({
              detach: function (selector) {
                return remove(this, selector, true)
              },

              remove: function (selector) {
                return remove(this, selector)
              },

              text: function (value) {
                return access(
                  this,
                  function (value) {
                    return value === undefined
                      ? jQuery.text(this)
                      : this.empty().each(function () {
                          if (
                            this.nodeType === 1 ||
                            this.nodeType === 11 ||
                            this.nodeType === 9
                          ) {
                            this.textContent = value
                          }
                        })
                  },
                  null,
                  value,
                  arguments.length,
                )
              },

              append: function () {
                return domManip(this, arguments, function (elem) {
                  if (
                    this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9
                  ) {
                    var target = manipulationTarget(this, elem)
                    target.appendChild(elem)
                  }
                })
              },

              prepend: function () {
                return domManip(this, arguments, function (elem) {
                  if (
                    this.nodeType === 1 ||
                    this.nodeType === 11 ||
                    this.nodeType === 9
                  ) {
                    var target = manipulationTarget(this, elem)
                    target.insertBefore(elem, target.firstChild)
                  }
                })
              },

              before: function () {
                return domManip(this, arguments, function (elem) {
                  if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this)
                  }
                })
              },

              after: function () {
                return domManip(this, arguments, function (elem) {
                  if (this.parentNode) {
                    this.parentNode.insertBefore(elem, this.nextSibling)
                  }
                })
              },

              empty: function () {
                var elem,
                  i = 0

                for (; (elem = this[i]) != null; i++) {
                  if (elem.nodeType === 1) {
                    // Prevent memory leaks
                    jQuery.cleanData(getAll(elem, false))

                    // Remove any remaining nodes
                    elem.textContent = ""
                  }
                }

                return this
              },

              clone: function (dataAndEvents, deepDataAndEvents) {
                dataAndEvents = dataAndEvents == null ? false : dataAndEvents
                deepDataAndEvents =
                  deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents

                return this.map(function () {
                  return jQuery.clone(this, dataAndEvents, deepDataAndEvents)
                })
              },

              html: function (value) {
                return access(
                  this,
                  function (value) {
                    var elem = this[0] || {},
                      i = 0,
                      l = this.length

                    if (value === undefined && elem.nodeType === 1) {
                      return elem.innerHTML
                    }

                    // See if we can take a shortcut and just use innerHTML
                    if (
                      typeof value === "string" &&
                      !rnoInnerhtml.test(value) &&
                      !wrapMap[
                        (rtagName.exec(value) || ["", ""])[1].toLowerCase()
                      ]
                    ) {
                      value = jQuery.htmlPrefilter(value)

                      try {
                        for (; i < l; i++) {
                          elem = this[i] || {}

                          // Remove element nodes and prevent memory leaks
                          if (elem.nodeType === 1) {
                            jQuery.cleanData(getAll(elem, false))
                            elem.innerHTML = value
                          }
                        }

                        elem = 0

                        // If using innerHTML throws an exception, use the fallback method
                      } catch (e) {}
                    }

                    if (elem) {
                      this.empty().append(value)
                    }
                  },
                  null,
                  value,
                  arguments.length,
                )
              },

              replaceWith: function () {
                var ignored = []

                // Make the changes, replacing each non-ignored context element with the new content
                return domManip(
                  this,
                  arguments,
                  function (elem) {
                    var parent = this.parentNode

                    if (jQuery.inArray(this, ignored) < 0) {
                      jQuery.cleanData(getAll(this))
                      if (parent) {
                        parent.replaceChild(elem, this)
                      }
                    }

                    // Force callback invocation
                  },
                  ignored,
                )
              },
            })

            jQuery.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (name, original) {
                jQuery.fn[name] = function (selector) {
                  var elems,
                    ret = [],
                    insert = jQuery(selector),
                    last = insert.length - 1,
                    i = 0

                  for (; i <= last; i++) {
                    elems = i === last ? this : this.clone(true)
                    jQuery(insert[i])[original](elems)

                    // Support: Android <=4.0 only, PhantomJS 1 only
                    // .get() because push.apply(_, arraylike) throws on ancient WebKit
                    push.apply(ret, elems.get())
                  }

                  return this.pushStack(ret)
                }
              },
            )
            var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i")

            var rcustomProp = /^--/

            var getStyles = function (elem) {
              // Support: IE <=11 only, Firefox <=30 (trac-15098, trac-14150)
              // IE throws on elements created in popups
              // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
              var view = elem.ownerDocument.defaultView

              if (!view || !view.opener) {
                view = window
              }

              return view.getComputedStyle(elem)
            }

            var swap = function (elem, options, callback) {
              var ret,
                name,
                old = {}

              // Remember the old values, and insert the new ones
              for (name in options) {
                old[name] = elem.style[name]
                elem.style[name] = options[name]
              }

              ret = callback.call(elem)

              // Revert the old values
              for (name in options) {
                elem.style[name] = old[name]
              }

              return ret
            }

            var rboxStyle = new RegExp(cssExpand.join("|"), "i")

            ;(function () {
              // Executing both pixelPosition & boxSizingReliable tests require only one layout
              // so they're executed at the same time to save the second computation.
              function computeStyleTests() {
                // This is a singleton, we need to execute it only once
                if (!div) {
                  return
                }

                container.style.cssText =
                  "position:absolute;left:-11111px;width:60px;" +
                  "margin-top:1px;padding:0;border:0"
                div.style.cssText =
                  "position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
                  "margin:auto;border:1px;padding:1px;" +
                  "width:60%;top:1%"
                documentElement.appendChild(container).appendChild(div)

                var divStyle = window.getComputedStyle(div)
                pixelPositionVal = divStyle.top !== "1%"

                // Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
                reliableMarginLeftVal =
                  roundPixelMeasures(divStyle.marginLeft) === 12

                // Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
                // Some styles come back with percentage values, even though they shouldn't
                div.style.right = "60%"
                pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36

                // Support: IE 9 - 11 only
                // Detect misreporting of content dimensions for box-sizing:border-box elements
                boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36

                // Support: IE 9 only
                // Detect overflow:scroll screwiness (gh-3699)
                // Support: Chrome <=64
                // Don't get tricked when zoom affects offsetWidth (gh-4029)
                div.style.position = "absolute"
                scrollboxSizeVal =
                  roundPixelMeasures(div.offsetWidth / 3) === 12

                documentElement.removeChild(container)

                // Nullify the div so it wouldn't be stored in the memory and
                // it will also be a sign that checks already performed
                div = null
              }

              function roundPixelMeasures(measure) {
                return Math.round(parseFloat(measure))
              }

              var pixelPositionVal,
                boxSizingReliableVal,
                scrollboxSizeVal,
                pixelBoxStylesVal,
                reliableTrDimensionsVal,
                reliableMarginLeftVal,
                container = document.createElement("div"),
                div = document.createElement("div")

              // Finish early in limited (non-browser) environments
              if (!div.style) {
                return
              }

              // Support: IE <=9 - 11 only
              // Style of cloned element affects source element cloned (trac-8908)
              div.style.backgroundClip = "content-box"
              div.cloneNode(true).style.backgroundClip = ""
              support.clearCloneStyle =
                div.style.backgroundClip === "content-box"

              jQuery.extend(support, {
                boxSizingReliable: function () {
                  computeStyleTests()
                  return boxSizingReliableVal
                },
                pixelBoxStyles: function () {
                  computeStyleTests()
                  return pixelBoxStylesVal
                },
                pixelPosition: function () {
                  computeStyleTests()
                  return pixelPositionVal
                },
                reliableMarginLeft: function () {
                  computeStyleTests()
                  return reliableMarginLeftVal
                },
                scrollboxSize: function () {
                  computeStyleTests()
                  return scrollboxSizeVal
                },

                // Support: IE 9 - 11+, Edge 15 - 18+
                // IE/Edge misreport `getComputedStyle` of table rows with width/height
                // set in CSS while `offset*` properties report correct values.
                // Behavior in IE 9 is more subtle than in newer versions & it passes
                // some versions of this test; make sure not to make it pass there!
                //
                // Support: Firefox 70+
                // Only Firefox includes border widths
                // in computed dimensions. (gh-4529)
                reliableTrDimensions: function () {
                  var table, tr, trChild, trStyle
                  if (reliableTrDimensionsVal == null) {
                    table = document.createElement("table")
                    tr = document.createElement("tr")
                    trChild = document.createElement("div")

                    table.style.cssText =
                      "position:absolute;left:-11111px;border-collapse:separate"
                    tr.style.cssText = "border:1px solid"

                    // Support: Chrome 86+
                    // Height set through cssText does not get applied.
                    // Computed height then comes back as 0.
                    tr.style.height = "1px"
                    trChild.style.height = "9px"

                    // Support: Android 8 Chrome 86+
                    // In our bodyBackground.html iframe,
                    // display for all div elements is set to "inline",
                    // which causes a problem only in Android 8 Chrome 86.
                    // Ensuring the div is display: block
                    // gets around this issue.
                    trChild.style.display = "block"

                    documentElement
                      .appendChild(table)
                      .appendChild(tr)
                      .appendChild(trChild)

                    trStyle = window.getComputedStyle(tr)
                    reliableTrDimensionsVal =
                      parseInt(trStyle.height, 10) +
                        parseInt(trStyle.borderTopWidth, 10) +
                        parseInt(trStyle.borderBottomWidth, 10) ===
                      tr.offsetHeight

                    documentElement.removeChild(table)
                  }
                  return reliableTrDimensionsVal
                },
              })
            })()

            function curCSS(elem, name, computed) {
              var width,
                minWidth,
                maxWidth,
                ret,
                isCustomProp = rcustomProp.test(name),
                // Support: Firefox 51+
                // Retrieving style before computed somehow
                // fixes an issue with getting wrong values
                // on detached elements
                style = elem.style

              computed = computed || getStyles(elem)

              // getPropertyValue is needed for:
              //   .css('filter') (IE 9 only, trac-12537)
              //   .css('--customProperty) (gh-3144)
              if (computed) {
                // Support: IE <=9 - 11+
                // IE only supports `"float"` in `getPropertyValue`; in computed styles
                // it's only available as `"cssFloat"`. We no longer modify properties
                // sent to `.css()` apart from camelCasing, so we need to check both.
                // Normally, this would create difference in behavior: if
                // `getPropertyValue` returns an empty string, the value returned
                // by `.css()` would be `undefined`. This is usually the case for
                // disconnected elements. However, in IE even disconnected elements
                // with no styles return `"none"` for `getPropertyValue( "float" )`
                ret = computed.getPropertyValue(name) || computed[name]

                if (isCustomProp && ret) {
                  // Support: Firefox 105+, Chrome <=105+
                  // Spec requires trimming whitespace for custom properties (gh-4926).
                  // Firefox only trims leading whitespace. Chrome just collapses
                  // both leading & trailing whitespace to a single space.
                  //
                  // Fall back to `undefined` if empty string returned.
                  // This collapses a missing definition with property defined
                  // and set to an empty string but there's no standard API
                  // allowing us to differentiate them without a performance penalty
                  // and returning `undefined` aligns with older jQuery.
                  //
                  // rtrimCSS treats U+000D CARRIAGE RETURN and U+000C FORM FEED
                  // as whitespace while CSS does not, but this is not a problem
                  // because CSS preprocessing replaces them with U+000A LINE FEED
                  // (which *is* CSS whitespace)
                  // https://www.w3.org/TR/css-syntax-3/#input-preprocessing
                  ret = ret.replace(rtrimCSS, "$1") || undefined
                }

                if (ret === "" && !isAttached(elem)) {
                  ret = jQuery.style(elem, name)
                }

                // A tribute to the "awesome hack by Dean Edwards"
                // Android Browser returns percentage for some values,
                // but width seems to be reliably pixels.
                // This is against the CSSOM draft spec:
                // https://drafts.csswg.org/cssom/#resolved-values
                if (
                  !support.pixelBoxStyles() &&
                  rnumnonpx.test(ret) &&
                  rboxStyle.test(name)
                ) {
                  // Remember the original values
                  width = style.width
                  minWidth = style.minWidth
                  maxWidth = style.maxWidth

                  // Put in the new values to get a computed value out
                  style.minWidth = style.maxWidth = style.width = ret
                  ret = computed.width

                  // Revert the changed values
                  style.width = width
                  style.minWidth = minWidth
                  style.maxWidth = maxWidth
                }
              }

              return ret !== undefined
                ? // Support: IE <=9 - 11 only
                  // IE returns zIndex value as an integer.
                  ret + ""
                : ret
            }

            function addGetHookIf(conditionFn, hookFn) {
              // Define the hook, we'll check on the first run if it's really needed.
              return {
                get: function () {
                  if (conditionFn()) {
                    // Hook not needed (or it's not possible to use it due
                    // to missing dependency), remove it.
                    delete this.get
                    return
                  }

                  // Hook needed; redefine it so that the support test is not executed again.
                  return (this.get = hookFn).apply(this, arguments)
                },
              }
            }

            var cssPrefixes = ["Webkit", "Moz", "ms"],
              emptyStyle = document.createElement("div").style,
              vendorProps = {}

            // Return a vendor-prefixed property or undefined
            function vendorPropName(name) {
              // Check for vendor prefixed names
              var capName = name[0].toUpperCase() + name.slice(1),
                i = cssPrefixes.length

              while (i--) {
                name = cssPrefixes[i] + capName
                if (name in emptyStyle) {
                  return name
                }
              }
            }

            // Return a potentially-mapped jQuery.cssProps or vendor prefixed property
            function finalPropName(name) {
              var final = jQuery.cssProps[name] || vendorProps[name]

              if (final) {
                return final
              }
              if (name in emptyStyle) {
                return name
              }
              return (vendorProps[name] = vendorPropName(name) || name)
            }

            var // Swappable if display is none or starts with table
              // except "table", "table-cell", or "table-caption"
              // See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
              rdisplayswap = /^(none|table(?!-c[ea]).+)/,
              cssShow = {
                position: "absolute",
                visibility: "hidden",
                display: "block",
              },
              cssNormalTransform = {
                letterSpacing: "0",
                fontWeight: "400",
              }

            function setPositiveNumber(_elem, value, subtract) {
              // Any relative (+/-) values have already been
              // normalized at this point
              var matches = rcssNum.exec(value)
              return matches
                ? // Guard against undefined "subtract", e.g., when used as in cssHooks
                  Math.max(0, matches[2] - (subtract || 0)) +
                    (matches[3] || "px")
                : value
            }

            function boxModelAdjustment(
              elem,
              dimension,
              box,
              isBorderBox,
              styles,
              computedVal,
            ) {
              var i = dimension === "width" ? 1 : 0,
                extra = 0,
                delta = 0,
                marginDelta = 0

              // Adjustment may not be necessary
              if (box === (isBorderBox ? "border" : "content")) {
                return 0
              }

              for (; i < 4; i += 2) {
                // Both box models exclude margin
                // Count margin delta separately to only add it after scroll gutter adjustment.
                // This is needed to make negative margins work with `outerHeight( true )` (gh-3982).
                if (box === "margin") {
                  marginDelta += jQuery.css(
                    elem,
                    box + cssExpand[i],
                    true,
                    styles,
                  )
                }

                // If we get here with a content-box, we're seeking "padding" or "border" or "margin"
                if (!isBorderBox) {
                  // Add padding
                  delta += jQuery.css(
                    elem,
                    "padding" + cssExpand[i],
                    true,
                    styles,
                  )

                  // For "border" or "margin", add border
                  if (box !== "padding") {
                    delta += jQuery.css(
                      elem,
                      "border" + cssExpand[i] + "Width",
                      true,
                      styles,
                    )

                    // But still keep track of it otherwise
                  } else {
                    extra += jQuery.css(
                      elem,
                      "border" + cssExpand[i] + "Width",
                      true,
                      styles,
                    )
                  }

                  // If we get here with a border-box (content + padding + border), we're seeking "content" or
                  // "padding" or "margin"
                } else {
                  // For "content", subtract padding
                  if (box === "content") {
                    delta -= jQuery.css(
                      elem,
                      "padding" + cssExpand[i],
                      true,
                      styles,
                    )
                  }

                  // For "content" or "padding", subtract border
                  if (box !== "margin") {
                    delta -= jQuery.css(
                      elem,
                      "border" + cssExpand[i] + "Width",
                      true,
                      styles,
                    )
                  }
                }
              }

              // Account for positive content-box scroll gutter when requested by providing computedVal
              if (!isBorderBox && computedVal >= 0) {
                // offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
                // Assuming integer scroll gutter, subtract the rest and round down
                delta +=
                  Math.max(
                    0,
                    Math.ceil(
                      elem[
                        "offset" +
                          dimension[0].toUpperCase() +
                          dimension.slice(1)
                      ] -
                        computedVal -
                        delta -
                        extra -
                        0.5,

                      // If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
                      // Use an explicit zero to avoid NaN (gh-3964)
                    ),
                  ) || 0
              }

              return delta + marginDelta
            }

            function getWidthOrHeight(elem, dimension, extra) {
              // Start with computed style
              var styles = getStyles(elem),
                // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
                // Fake content-box until we know it's needed to know the true value.
                boxSizingNeeded = !support.boxSizingReliable() || extra,
                isBorderBox =
                  boxSizingNeeded &&
                  jQuery.css(elem, "boxSizing", false, styles) === "border-box",
                valueIsBorderBox = isBorderBox,
                val = curCSS(elem, dimension, styles),
                offsetProp =
                  "offset" + dimension[0].toUpperCase() + dimension.slice(1)

              // Support: Firefox <=54
              // Return a confounding non-pixel value or feign ignorance, as appropriate.
              if (rnumnonpx.test(val)) {
                if (!extra) {
                  return val
                }
                val = "auto"
              }

              // Support: IE 9 - 11 only
              // Use offsetWidth/offsetHeight for when box sizing is unreliable.
              // In those cases, the computed value can be trusted to be border-box.
              if (
                ((!support.boxSizingReliable() && isBorderBox) ||
                  // Support: IE 10 - 11+, Edge 15 - 18+
                  // IE/Edge misreport `getComputedStyle` of table rows with width/height
                  // set in CSS while `offset*` properties report correct values.
                  // Interestingly, in some cases IE 9 doesn't suffer from this issue.
                  (!support.reliableTrDimensions() && nodeName(elem, "tr")) ||
                  // Fall back to offsetWidth/offsetHeight when value is "auto"
                  // This happens for inline elements with no explicit setting (gh-3571)
                  val === "auto" ||
                  // Support: Android <=4.1 - 4.3 only
                  // Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
                  (!parseFloat(val) &&
                    jQuery.css(elem, "display", false, styles) === "inline")) &&
                // Make sure the element is visible & connected
                elem.getClientRects().length
              ) {
                isBorderBox =
                  jQuery.css(elem, "boxSizing", false, styles) === "border-box"

                // Where available, offsetWidth/offsetHeight approximate border box dimensions.
                // Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
                // retrieved value as a content box dimension.
                valueIsBorderBox = offsetProp in elem
                if (valueIsBorderBox) {
                  val = elem[offsetProp]
                }
              }

              // Normalize "" and auto
              val = parseFloat(val) || 0

              // Adjust for the element's box model
              return (
                val +
                boxModelAdjustment(
                  elem,
                  dimension,
                  extra || (isBorderBox ? "border" : "content"),
                  valueIsBorderBox,
                  styles,

                  // Provide the current computed size to request scroll gutter calculation (gh-3589)
                  val,
                ) +
                "px"
              )
            }

            jQuery.extend({
              // Add in style property hooks for overriding the default
              // behavior of getting and setting a style property
              cssHooks: {
                opacity: {
                  get: function (elem, computed) {
                    if (computed) {
                      // We should always get a number back from opacity
                      var ret = curCSS(elem, "opacity")
                      return ret === "" ? "1" : ret
                    }
                  },
                },
              },

              // Don't automatically add "px" to these possibly-unitless properties
              cssNumber: {
                animationIterationCount: true,
                aspectRatio: true,
                borderImageSlice: true,
                columnCount: true,
                flexGrow: true,
                flexShrink: true,
                fontWeight: true,
                gridArea: true,
                gridColumn: true,
                gridColumnEnd: true,
                gridColumnStart: true,
                gridRow: true,
                gridRowEnd: true,
                gridRowStart: true,
                lineHeight: true,
                opacity: true,
                order: true,
                orphans: true,
                scale: true,
                widows: true,
                zIndex: true,
                zoom: true,

                // SVG-related
                fillOpacity: true,
                floodOpacity: true,
                stopOpacity: true,
                strokeMiterlimit: true,
                strokeOpacity: true,
              },

              // Add in properties whose names you wish to fix before
              // setting or getting the value
              cssProps: {},

              // Get and set the style property on a DOM Node
              style: function (elem, name, value, extra) {
                // Don't set styles on text and comment nodes
                if (
                  !elem ||
                  elem.nodeType === 3 ||
                  elem.nodeType === 8 ||
                  !elem.style
                ) {
                  return
                }

                // Make sure that we're working with the right name
                var ret,
                  type,
                  hooks,
                  origName = camelCase(name),
                  isCustomProp = rcustomProp.test(name),
                  style = elem.style

                // Make sure that we're working with the right name. We don't
                // want to query the value if it is a CSS custom property
                // since they are user-defined.
                if (!isCustomProp) {
                  name = finalPropName(origName)
                }

                // Gets hook for the prefixed version, then unprefixed version
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]

                // Check if we're setting a value
                if (value !== undefined) {
                  type = typeof value

                  // Convert "+=" or "-=" to relative numbers (trac-7345)
                  if (
                    type === "string" &&
                    (ret = rcssNum.exec(value)) &&
                    ret[1]
                  ) {
                    value = adjustCSS(elem, name, ret)

                    // Fixes bug trac-9237
                    type = "number"
                  }

                  // Make sure that null and NaN values aren't set (trac-7116)
                  if (value == null || value !== value) {
                    return
                  }

                  // If a number was passed in, add the unit (except for certain CSS properties)
                  // The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
                  // "px" to a few hardcoded values.
                  if (type === "number" && !isCustomProp) {
                    value +=
                      (ret && ret[3]) ||
                      (jQuery.cssNumber[origName] ? "" : "px")
                  }

                  // background-* props affect original clone's values
                  if (
                    !support.clearCloneStyle &&
                    value === "" &&
                    name.indexOf("background") === 0
                  ) {
                    style[name] = "inherit"
                  }

                  // If a hook was provided, use that value, otherwise just set the specified value
                  if (
                    !hooks ||
                    !("set" in hooks) ||
                    (value = hooks.set(elem, value, extra)) !== undefined
                  ) {
                    if (isCustomProp) {
                      style.setProperty(name, value)
                    } else {
                      style[name] = value
                    }
                  }
                } else {
                  // If a hook was provided get the non-computed value from there
                  if (
                    hooks &&
                    "get" in hooks &&
                    (ret = hooks.get(elem, false, extra)) !== undefined
                  ) {
                    return ret
                  }

                  // Otherwise just get the value from the style object
                  return style[name]
                }
              },

              css: function (elem, name, extra, styles) {
                var val,
                  num,
                  hooks,
                  origName = camelCase(name),
                  isCustomProp = rcustomProp.test(name)

                // Make sure that we're working with the right name. We don't
                // want to modify the value if it is a CSS custom property
                // since they are user-defined.
                if (!isCustomProp) {
                  name = finalPropName(origName)
                }

                // Try prefixed name followed by the unprefixed name
                hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName]

                // If a hook was provided get the computed value from there
                if (hooks && "get" in hooks) {
                  val = hooks.get(elem, true, extra)
                }

                // Otherwise, if a way to get the computed value exists, use that
                if (val === undefined) {
                  val = curCSS(elem, name, styles)
                }

                // Convert "normal" to computed value
                if (val === "normal" && name in cssNormalTransform) {
                  val = cssNormalTransform[name]
                }

                // Make numeric if forced or a qualifier was provided and val looks numeric
                if (extra === "" || extra) {
                  num = parseFloat(val)
                  return extra === true || isFinite(num) ? num || 0 : val
                }

                return val
              },
            })

            jQuery.each(["height", "width"], function (_i, dimension) {
              jQuery.cssHooks[dimension] = {
                get: function (elem, computed, extra) {
                  if (computed) {
                    // Certain elements can have dimension info if we invisibly show them
                    // but it must have a current display style that would benefit
                    return rdisplayswap.test(jQuery.css(elem, "display")) &&
                      // Support: Safari 8+
                      // Table columns in Safari have non-zero offsetWidth & zero
                      // getBoundingClientRect().width unless display is changed.
                      // Support: IE <=11 only
                      // Running getBoundingClientRect on a disconnected node
                      // in IE throws an error.
                      (!elem.getClientRects().length ||
                        !elem.getBoundingClientRect().width)
                      ? swap(elem, cssShow, function () {
                          return getWidthOrHeight(elem, dimension, extra)
                        })
                      : getWidthOrHeight(elem, dimension, extra)
                  }
                },

                set: function (elem, value, extra) {
                  var matches,
                    styles = getStyles(elem),
                    // Only read styles.position if the test has a chance to fail
                    // to avoid forcing a reflow.
                    scrollboxSizeBuggy =
                      !support.scrollboxSize() &&
                      styles.position === "absolute",
                    // To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
                    boxSizingNeeded = scrollboxSizeBuggy || extra,
                    isBorderBox =
                      boxSizingNeeded &&
                      jQuery.css(elem, "boxSizing", false, styles) ===
                        "border-box",
                    subtract = extra
                      ? boxModelAdjustment(
                          elem,
                          dimension,
                          extra,
                          isBorderBox,
                          styles,
                        )
                      : 0

                  // Account for unreliable border-box dimensions by comparing offset* to computed and
                  // faking a content-box to get border and padding (gh-3699)
                  if (isBorderBox && scrollboxSizeBuggy) {
                    subtract -= Math.ceil(
                      elem[
                        "offset" +
                          dimension[0].toUpperCase() +
                          dimension.slice(1)
                      ] -
                        parseFloat(styles[dimension]) -
                        boxModelAdjustment(
                          elem,
                          dimension,
                          "border",
                          false,
                          styles,
                        ) -
                        0.5,
                    )
                  }

                  // Convert to pixels if value adjustment is needed
                  if (
                    subtract &&
                    (matches = rcssNum.exec(value)) &&
                    (matches[3] || "px") !== "px"
                  ) {
                    elem.style[dimension] = value
                    value = jQuery.css(elem, dimension)
                  }

                  return setPositiveNumber(elem, value, subtract)
                },
              }
            })

            jQuery.cssHooks.marginLeft = addGetHookIf(
              support.reliableMarginLeft,
              function (elem, computed) {
                if (computed) {
                  return (
                    (parseFloat(curCSS(elem, "marginLeft")) ||
                      elem.getBoundingClientRect().left -
                        swap(elem, { marginLeft: 0 }, function () {
                          return elem.getBoundingClientRect().left
                        })) + "px"
                  )
                }
              },
            )

            // These hooks are used by animate to expand properties
            jQuery.each(
              {
                margin: "",
                padding: "",
                border: "Width",
              },
              function (prefix, suffix) {
                jQuery.cssHooks[prefix + suffix] = {
                  expand: function (value) {
                    var i = 0,
                      expanded = {},
                      // Assumes a single number if not a string
                      parts =
                        typeof value === "string" ? value.split(" ") : [value]

                    for (; i < 4; i++) {
                      expanded[prefix + cssExpand[i] + suffix] =
                        parts[i] || parts[i - 2] || parts[0]
                    }

                    return expanded
                  },
                }

                if (prefix !== "margin") {
                  jQuery.cssHooks[prefix + suffix].set = setPositiveNumber
                }
              },
            )

            jQuery.fn.extend({
              css: function (name, value) {
                return access(
                  this,
                  function (elem, name, value) {
                    var styles,
                      len,
                      map = {},
                      i = 0

                    if (Array.isArray(name)) {
                      styles = getStyles(elem)
                      len = name.length

                      for (; i < len; i++) {
                        map[name[i]] = jQuery.css(elem, name[i], false, styles)
                      }

                      return map
                    }

                    return value !== undefined
                      ? jQuery.style(elem, name, value)
                      : jQuery.css(elem, name)
                  },
                  name,
                  value,
                  arguments.length > 1,
                )
              },
            })

            function Tween(elem, options, prop, end, easing) {
              return new Tween.prototype.init(elem, options, prop, end, easing)
            }
            jQuery.Tween = Tween

            Tween.prototype = {
              constructor: Tween,
              init: function (elem, options, prop, end, easing, unit) {
                this.elem = elem
                this.prop = prop
                this.easing = easing || jQuery.easing._default
                this.options = options
                this.start = this.now = this.cur()
                this.end = end
                this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px")
              },
              cur: function () {
                var hooks = Tween.propHooks[this.prop]

                return hooks && hooks.get
                  ? hooks.get(this)
                  : Tween.propHooks._default.get(this)
              },
              run: function (percent) {
                var eased,
                  hooks = Tween.propHooks[this.prop]

                if (this.options.duration) {
                  this.pos = eased = jQuery.easing[this.easing](
                    percent,
                    this.options.duration * percent,
                    0,
                    1,
                    this.options.duration,
                  )
                } else {
                  this.pos = eased = percent
                }
                this.now = (this.end - this.start) * eased + this.start

                if (this.options.step) {
                  this.options.step.call(this.elem, this.now, this)
                }

                if (hooks && hooks.set) {
                  hooks.set(this)
                } else {
                  Tween.propHooks._default.set(this)
                }
                return this
              },
            }

            Tween.prototype.init.prototype = Tween.prototype

            Tween.propHooks = {
              _default: {
                get: function (tween) {
                  var result

                  // Use a property on the element directly when it is not a DOM element,
                  // or when there is no matching style property that exists.
                  if (
                    tween.elem.nodeType !== 1 ||
                    (tween.elem[tween.prop] != null &&
                      tween.elem.style[tween.prop] == null)
                  ) {
                    return tween.elem[tween.prop]
                  }

                  // Passing an empty string as a 3rd parameter to .css will automatically
                  // attempt a parseFloat and fallback to a string if the parse fails.
                  // Simple values such as "10px" are parsed to Float;
                  // complex values such as "rotate(1rad)" are returned as-is.
                  result = jQuery.css(tween.elem, tween.prop, "")

                  // Empty strings, null, undefined and "auto" are converted to 0.
                  return !result || result === "auto" ? 0 : result
                },
                set: function (tween) {
                  // Use step hook for back compat.
                  // Use cssHook if its there.
                  // Use .style if available and use plain properties where available.
                  if (jQuery.fx.step[tween.prop]) {
                    jQuery.fx.step[tween.prop](tween)
                  } else if (
                    tween.elem.nodeType === 1 &&
                    (jQuery.cssHooks[tween.prop] ||
                      tween.elem.style[finalPropName(tween.prop)] != null)
                  ) {
                    jQuery.style(tween.elem, tween.prop, tween.now + tween.unit)
                  } else {
                    tween.elem[tween.prop] = tween.now
                  }
                },
              },
            }

            // Support: IE <=9 only
            // Panic based approach to setting things on disconnected nodes
            Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
              set: function (tween) {
                if (tween.elem.nodeType && tween.elem.parentNode) {
                  tween.elem[tween.prop] = tween.now
                }
              },
            }

            jQuery.easing = {
              linear: function (p) {
                return p
              },
              swing: function (p) {
                return 0.5 - Math.cos(p * Math.PI) / 2
              },
              _default: "swing",
            }

            jQuery.fx = Tween.prototype.init

            // Back compat <1.8 extension point
            jQuery.fx.step = {}

            var fxNow,
              inProgress,
              rfxtypes = /^(?:toggle|show|hide)$/,
              rrun = /queueHooks$/

            function schedule() {
              if (inProgress) {
                if (document.hidden === false && window.requestAnimationFrame) {
                  window.requestAnimationFrame(schedule)
                } else {
                  window.setTimeout(schedule, jQuery.fx.interval)
                }

                jQuery.fx.tick()
              }
            }

            // Animations created synchronously will run synchronously
            function createFxNow() {
              window.setTimeout(function () {
                fxNow = undefined
              })
              return (fxNow = Date.now())
            }

            // Generate parameters to create a standard animation
            function genFx(type, includeWidth) {
              var which,
                i = 0,
                attrs = { height: type }

              // If we include width, step value is 1 to do all cssExpand values,
              // otherwise step value is 2 to skip over Left and Right
              includeWidth = includeWidth ? 1 : 0
              for (; i < 4; i += 2 - includeWidth) {
                which = cssExpand[i]
                attrs["margin" + which] = attrs["padding" + which] = type
              }

              if (includeWidth) {
                attrs.opacity = attrs.width = type
              }

              return attrs
            }

            function createTween(value, prop, animation) {
              var tween,
                collection = (Animation.tweeners[prop] || []).concat(
                  Animation.tweeners["*"],
                ),
                index = 0,
                length = collection.length
              for (; index < length; index++) {
                if ((tween = collection[index].call(animation, prop, value))) {
                  // We're done with this property
                  return tween
                }
              }
            }

            function defaultPrefilter(elem, props, opts) {
              var prop,
                value,
                toggle,
                hooks,
                oldfire,
                propTween,
                restoreDisplay,
                display,
                isBox = "width" in props || "height" in props,
                anim = this,
                orig = {},
                style = elem.style,
                hidden = elem.nodeType && isHiddenWithinTree(elem),
                dataShow = dataPriv.get(elem, "fxshow")

              // Queue-skipping animations hijack the fx hooks
              if (!opts.queue) {
                hooks = jQuery._queueHooks(elem, "fx")
                if (hooks.unqueued == null) {
                  hooks.unqueued = 0
                  oldfire = hooks.empty.fire
                  hooks.empty.fire = function () {
                    if (!hooks.unqueued) {
                      oldfire()
                    }
                  }
                }
                hooks.unqueued++

                anim.always(function () {
                  // Ensure the complete handler is called before this completes
                  anim.always(function () {
                    hooks.unqueued--
                    if (!jQuery.queue(elem, "fx").length) {
                      hooks.empty.fire()
                    }
                  })
                })
              }

              // Detect show/hide animations
              for (prop in props) {
                value = props[prop]
                if (rfxtypes.test(value)) {
                  delete props[prop]
                  toggle = toggle || value === "toggle"
                  if (value === (hidden ? "hide" : "show")) {
                    // Pretend to be hidden if this is a "show" and
                    // there is still data from a stopped show/hide
                    if (
                      value === "show" &&
                      dataShow &&
                      dataShow[prop] !== undefined
                    ) {
                      hidden = true

                      // Ignore all other no-op show/hide data
                    } else {
                      continue
                    }
                  }
                  orig[prop] =
                    (dataShow && dataShow[prop]) || jQuery.style(elem, prop)
                }
              }

              // Bail out if this is a no-op like .hide().hide()
              propTween = !jQuery.isEmptyObject(props)
              if (!propTween && jQuery.isEmptyObject(orig)) {
                return
              }

              // Restrict "overflow" and "display" styles during box animations
              if (isBox && elem.nodeType === 1) {
                // Support: IE <=9 - 11, Edge 12 - 15
                // Record all 3 overflow attributes because IE does not infer the shorthand
                // from identically-valued overflowX and overflowY and Edge just mirrors
                // the overflowX value there.
                opts.overflow = [
                  style.overflow,
                  style.overflowX,
                  style.overflowY,
                ]

                // Identify a display type, preferring old show/hide data over the CSS cascade
                restoreDisplay = dataShow && dataShow.display
                if (restoreDisplay == null) {
                  restoreDisplay = dataPriv.get(elem, "display")
                }
                display = jQuery.css(elem, "display")
                if (display === "none") {
                  if (restoreDisplay) {
                    display = restoreDisplay
                  } else {
                    // Get nonempty value(s) by temporarily forcing visibility
                    showHide([elem], true)
                    restoreDisplay = elem.style.display || restoreDisplay
                    display = jQuery.css(elem, "display")
                    showHide([elem])
                  }
                }

                // Animate inline elements as inline-block
                if (
                  display === "inline" ||
                  (display === "inline-block" && restoreDisplay != null)
                ) {
                  if (jQuery.css(elem, "float") === "none") {
                    // Restore the original display value at the end of pure show/hide animations
                    if (!propTween) {
                      anim.done(function () {
                        style.display = restoreDisplay
                      })
                      if (restoreDisplay == null) {
                        display = style.display
                        restoreDisplay = display === "none" ? "" : display
                      }
                    }
                    style.display = "inline-block"
                  }
                }
              }

              if (opts.overflow) {
                style.overflow = "hidden"
                anim.always(function () {
                  style.overflow = opts.overflow[0]
                  style.overflowX = opts.overflow[1]
                  style.overflowY = opts.overflow[2]
                })
              }

              // Implement show/hide animations
              propTween = false
              for (prop in orig) {
                // General show/hide setup for this element animation
                if (!propTween) {
                  if (dataShow) {
                    if ("hidden" in dataShow) {
                      hidden = dataShow.hidden
                    }
                  } else {
                    dataShow = dataPriv.access(elem, "fxshow", {
                      display: restoreDisplay,
                    })
                  }

                  // Store hidden/visible for toggle so `.stop().toggle()` "reverses"
                  if (toggle) {
                    dataShow.hidden = !hidden
                  }

                  // Show elements before animating them
                  if (hidden) {
                    showHide([elem], true)
                  }

                  /* eslint-disable no-loop-func */

                  anim.done(function () {
                    /* eslint-enable no-loop-func */

                    // The final step of a "hide" animation is actually hiding the element
                    if (!hidden) {
                      showHide([elem])
                    }
                    dataPriv.remove(elem, "fxshow")
                    for (prop in orig) {
                      jQuery.style(elem, prop, orig[prop])
                    }
                  })
                }

                // Per-property setup
                propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim)
                if (!(prop in dataShow)) {
                  dataShow[prop] = propTween.start
                  if (hidden) {
                    propTween.end = propTween.start
                    propTween.start = 0
                  }
                }
              }
            }

            function propFilter(props, specialEasing) {
              var index, name, easing, value, hooks

              // camelCase, specialEasing and expand cssHook pass
              for (index in props) {
                name = camelCase(index)
                easing = specialEasing[name]
                value = props[index]
                if (Array.isArray(value)) {
                  easing = value[1]
                  value = props[index] = value[0]
                }

                if (index !== name) {
                  props[name] = value
                  delete props[index]
                }

                hooks = jQuery.cssHooks[name]
                if (hooks && "expand" in hooks) {
                  value = hooks.expand(value)
                  delete props[name]

                  // Not quite $.extend, this won't overwrite existing keys.
                  // Reusing 'index' because we have the correct "name"
                  for (index in value) {
                    if (!(index in props)) {
                      props[index] = value[index]
                      specialEasing[index] = easing
                    }
                  }
                } else {
                  specialEasing[name] = easing
                }
              }
            }

            function Animation(elem, properties, options) {
              var result,
                stopped,
                index = 0,
                length = Animation.prefilters.length,
                deferred = jQuery.Deferred().always(function () {
                  // Don't match elem in the :animated selector
                  delete tick.elem
                }),
                tick = function () {
                  if (stopped) {
                    return false
                  }
                  var currentTime = fxNow || createFxNow(),
                    remaining = Math.max(
                      0,
                      animation.startTime + animation.duration - currentTime,
                    ),
                    // Support: Android 2.3 only
                    // Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (trac-12497)
                    temp = remaining / animation.duration || 0,
                    percent = 1 - temp,
                    index = 0,
                    length = animation.tweens.length

                  for (; index < length; index++) {
                    animation.tweens[index].run(percent)
                  }

                  deferred.notifyWith(elem, [animation, percent, remaining])

                  // If there's more to do, yield
                  if (percent < 1 && length) {
                    return remaining
                  }

                  // If this was an empty animation, synthesize a final progress notification
                  if (!length) {
                    deferred.notifyWith(elem, [animation, 1, 0])
                  }

                  // Resolve the animation and report its conclusion
                  deferred.resolveWith(elem, [animation])
                  return false
                },
                animation = deferred.promise({
                  elem: elem,
                  props: jQuery.extend({}, properties),
                  opts: jQuery.extend(
                    true,
                    {
                      specialEasing: {},
                      easing: jQuery.easing._default,
                    },
                    options,
                  ),
                  originalProperties: properties,
                  originalOptions: options,
                  startTime: fxNow || createFxNow(),
                  duration: options.duration,
                  tweens: [],
                  createTween: function (prop, end) {
                    var tween = jQuery.Tween(
                      elem,
                      animation.opts,
                      prop,
                      end,
                      animation.opts.specialEasing[prop] ||
                        animation.opts.easing,
                    )
                    animation.tweens.push(tween)
                    return tween
                  },
                  stop: function (gotoEnd) {
                    var index = 0,
                      // If we are going to the end, we want to run all the tweens
                      // otherwise we skip this part
                      length = gotoEnd ? animation.tweens.length : 0
                    if (stopped) {
                      return this
                    }
                    stopped = true
                    for (; index < length; index++) {
                      animation.tweens[index].run(1)
                    }

                    // Resolve when we played the last frame; otherwise, reject
                    if (gotoEnd) {
                      deferred.notifyWith(elem, [animation, 1, 0])
                      deferred.resolveWith(elem, [animation, gotoEnd])
                    } else {
                      deferred.rejectWith(elem, [animation, gotoEnd])
                    }
                    return this
                  },
                }),
                props = animation.props

              propFilter(props, animation.opts.specialEasing)

              for (; index < length; index++) {
                result = Animation.prefilters[index].call(
                  animation,
                  elem,
                  props,
                  animation.opts,
                )
                if (result) {
                  if (isFunction(result.stop)) {
                    jQuery._queueHooks(
                      animation.elem,
                      animation.opts.queue,
                    ).stop = result.stop.bind(result)
                  }
                  return result
                }
              }

              jQuery.map(props, createTween, animation)

              if (isFunction(animation.opts.start)) {
                animation.opts.start.call(elem, animation)
              }

              // Attach callbacks from options
              animation
                .progress(animation.opts.progress)
                .done(animation.opts.done, animation.opts.complete)
                .fail(animation.opts.fail)
                .always(animation.opts.always)

              jQuery.fx.timer(
                jQuery.extend(tick, {
                  elem: elem,
                  anim: animation,
                  queue: animation.opts.queue,
                }),
              )

              return animation
            }

            jQuery.Animation = jQuery.extend(Animation, {
              tweeners: {
                "*": [
                  function (prop, value) {
                    var tween = this.createTween(prop, value)
                    adjustCSS(tween.elem, prop, rcssNum.exec(value), tween)
                    return tween
                  },
                ],
              },

              tweener: function (props, callback) {
                if (isFunction(props)) {
                  callback = props
                  props = ["*"]
                } else {
                  props = props.match(rnothtmlwhite)
                }

                var prop,
                  index = 0,
                  length = props.length

                for (; index < length; index++) {
                  prop = props[index]
                  Animation.tweeners[prop] = Animation.tweeners[prop] || []
                  Animation.tweeners[prop].unshift(callback)
                }
              },

              prefilters: [defaultPrefilter],

              prefilter: function (callback, prepend) {
                if (prepend) {
                  Animation.prefilters.unshift(callback)
                } else {
                  Animation.prefilters.push(callback)
                }
              },
            })

            jQuery.speed = function (speed, easing, fn) {
              var opt =
                speed && typeof speed === "object"
                  ? jQuery.extend({}, speed)
                  : {
                      complete:
                        fn || (!fn && easing) || (isFunction(speed) && speed),
                      duration: speed,
                      easing:
                        (fn && easing) ||
                        (easing && !isFunction(easing) && easing),
                    }

              // Go to the end state if fx are off
              if (jQuery.fx.off) {
                opt.duration = 0
              } else {
                if (typeof opt.duration !== "number") {
                  if (opt.duration in jQuery.fx.speeds) {
                    opt.duration = jQuery.fx.speeds[opt.duration]
                  } else {
                    opt.duration = jQuery.fx.speeds._default
                  }
                }
              }

              // Normalize opt.queue - true/undefined/null -> "fx"
              if (opt.queue == null || opt.queue === true) {
                opt.queue = "fx"
              }

              // Queueing
              opt.old = opt.complete

              opt.complete = function () {
                if (isFunction(opt.old)) {
                  opt.old.call(this)
                }

                if (opt.queue) {
                  jQuery.dequeue(this, opt.queue)
                }
              }

              return opt
            }

            jQuery.fn.extend({
              fadeTo: function (speed, to, easing, callback) {
                // Show any hidden elements after setting opacity to 0
                return (
                  this.filter(isHiddenWithinTree)
                    .css("opacity", 0)
                    .show()

                    // Animate to the value specified
                    .end()
                    .animate({ opacity: to }, speed, easing, callback)
                )
              },
              animate: function (prop, speed, easing, callback) {
                var empty = jQuery.isEmptyObject(prop),
                  optall = jQuery.speed(speed, easing, callback),
                  doAnimation = function () {
                    // Operate on a copy of prop so per-property easing won't be lost
                    var anim = Animation(this, jQuery.extend({}, prop), optall)

                    // Empty animations, or finishing resolves immediately
                    if (empty || dataPriv.get(this, "finish")) {
                      anim.stop(true)
                    }
                  }

                doAnimation.finish = doAnimation

                return empty || optall.queue === false
                  ? this.each(doAnimation)
                  : this.queue(optall.queue, doAnimation)
              },
              stop: function (type, clearQueue, gotoEnd) {
                var stopQueue = function (hooks) {
                  var stop = hooks.stop
                  delete hooks.stop
                  stop(gotoEnd)
                }

                if (typeof type !== "string") {
                  gotoEnd = clearQueue
                  clearQueue = type
                  type = undefined
                }
                if (clearQueue) {
                  this.queue(type || "fx", [])
                }

                return this.each(function () {
                  var dequeue = true,
                    index = type != null && type + "queueHooks",
                    timers = jQuery.timers,
                    data = dataPriv.get(this)

                  if (index) {
                    if (data[index] && data[index].stop) {
                      stopQueue(data[index])
                    }
                  } else {
                    for (index in data) {
                      if (data[index] && data[index].stop && rrun.test(index)) {
                        stopQueue(data[index])
                      }
                    }
                  }

                  for (index = timers.length; index--; ) {
                    if (
                      timers[index].elem === this &&
                      (type == null || timers[index].queue === type)
                    ) {
                      timers[index].anim.stop(gotoEnd)
                      dequeue = false
                      timers.splice(index, 1)
                    }
                  }

                  // Start the next in the queue if the last step wasn't forced.
                  // Timers currently will call their complete callbacks, which
                  // will dequeue but only if they were gotoEnd.
                  if (dequeue || !gotoEnd) {
                    jQuery.dequeue(this, type)
                  }
                })
              },
              finish: function (type) {
                if (type !== false) {
                  type = type || "fx"
                }
                return this.each(function () {
                  var index,
                    data = dataPriv.get(this),
                    queue = data[type + "queue"],
                    hooks = data[type + "queueHooks"],
                    timers = jQuery.timers,
                    length = queue ? queue.length : 0

                  // Enable finishing flag on private data
                  data.finish = true

                  // Empty the queue first
                  jQuery.queue(this, type, [])

                  if (hooks && hooks.stop) {
                    hooks.stop.call(this, true)
                  }

                  // Look for any active animations, and finish them
                  for (index = timers.length; index--; ) {
                    if (
                      timers[index].elem === this &&
                      timers[index].queue === type
                    ) {
                      timers[index].anim.stop(true)
                      timers.splice(index, 1)
                    }
                  }

                  // Look for any animations in the old queue and finish them
                  for (index = 0; index < length; index++) {
                    if (queue[index] && queue[index].finish) {
                      queue[index].finish.call(this)
                    }
                  }

                  // Turn off finishing flag
                  delete data.finish
                })
              },
            })

            jQuery.each(["toggle", "show", "hide"], function (_i, name) {
              var cssFn = jQuery.fn[name]
              jQuery.fn[name] = function (speed, easing, callback) {
                return speed == null || typeof speed === "boolean"
                  ? cssFn.apply(this, arguments)
                  : this.animate(genFx(name, true), speed, easing, callback)
              }
            })

            // Generate shortcuts for custom animations
            jQuery.each(
              {
                slideDown: genFx("show"),
                slideUp: genFx("hide"),
                slideToggle: genFx("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (name, props) {
                jQuery.fn[name] = function (speed, easing, callback) {
                  return this.animate(props, speed, easing, callback)
                }
              },
            )

            jQuery.timers = []
            jQuery.fx.tick = function () {
              var timer,
                i = 0,
                timers = jQuery.timers

              fxNow = Date.now()

              for (; i < timers.length; i++) {
                timer = timers[i]

                // Run the timer and safely remove it when done (allowing for external removal)
                if (!timer() && timers[i] === timer) {
                  timers.splice(i--, 1)
                }
              }

              if (!timers.length) {
                jQuery.fx.stop()
              }
              fxNow = undefined
            }

            jQuery.fx.timer = function (timer) {
              jQuery.timers.push(timer)
              jQuery.fx.start()
            }

            jQuery.fx.interval = 13
            jQuery.fx.start = function () {
              if (inProgress) {
                return
              }

              inProgress = true
              schedule()
            }

            jQuery.fx.stop = function () {
              inProgress = null
            }

            jQuery.fx.speeds = {
              slow: 600,
              fast: 200,

              // Default speed
              _default: 400,
            }

            // Based off of the plugin by Clint Helfers, with permission.
            jQuery.fn.delay = function (time, type) {
              time = jQuery.fx ? jQuery.fx.speeds[time] || time : time
              type = type || "fx"

              return this.queue(type, function (next, hooks) {
                var timeout = window.setTimeout(next, time)
                hooks.stop = function () {
                  window.clearTimeout(timeout)
                }
              })
            }
            ;(function () {
              var input = document.createElement("input"),
                select = document.createElement("select"),
                opt = select.appendChild(document.createElement("option"))

              input.type = "checkbox"

              // Support: Android <=4.3 only
              // Default value for a checkbox should be "on"
              support.checkOn = input.value !== ""

              // Support: IE <=11 only
              // Must access selectedIndex to make default options select
              support.optSelected = opt.selected

              // Support: IE <=11 only
              // An input loses its value after becoming a radio
              input = document.createElement("input")
              input.value = "t"
              input.type = "radio"
              support.radioValue = input.value === "t"
            })()

            var boolHook,
              attrHandle = jQuery.expr.attrHandle

            jQuery.fn.extend({
              attr: function (name, value) {
                return access(
                  this,
                  jQuery.attr,
                  name,
                  value,
                  arguments.length > 1,
                )
              },

              removeAttr: function (name) {
                return this.each(function () {
                  jQuery.removeAttr(this, name)
                })
              },
            })

            jQuery.extend({
              attr: function (elem, name, value) {
                var ret,
                  hooks,
                  nType = elem.nodeType

                // Don't get/set attributes on text, comment and attribute nodes
                if (nType === 3 || nType === 8 || nType === 2) {
                  return
                }

                // Fallback to prop when attributes are not supported
                if (typeof elem.getAttribute === "undefined") {
                  return jQuery.prop(elem, name, value)
                }

                // Attribute hooks are determined by the lowercase version
                // Grab necessary hook if one is defined
                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                  hooks =
                    jQuery.attrHooks[name.toLowerCase()] ||
                    (jQuery.expr.match.bool.test(name) ? boolHook : undefined)
                }

                if (value !== undefined) {
                  if (value === null) {
                    jQuery.removeAttr(elem, name)
                    return
                  }

                  if (
                    hooks &&
                    "set" in hooks &&
                    (ret = hooks.set(elem, value, name)) !== undefined
                  ) {
                    return ret
                  }

                  elem.setAttribute(name, value + "")
                  return value
                }

                if (
                  hooks &&
                  "get" in hooks &&
                  (ret = hooks.get(elem, name)) !== null
                ) {
                  return ret
                }

                ret = jQuery.find.attr(elem, name)

                // Non-existent attributes return null, we normalize to undefined
                return ret == null ? undefined : ret
              },

              attrHooks: {
                type: {
                  set: function (elem, value) {
                    if (
                      !support.radioValue &&
                      value === "radio" &&
                      nodeName(elem, "input")
                    ) {
                      var val = elem.value
                      elem.setAttribute("type", value)
                      if (val) {
                        elem.value = val
                      }
                      return value
                    }
                  },
                },
              },

              removeAttr: function (elem, value) {
                var name,
                  i = 0,
                  // Attribute names can contain non-HTML whitespace characters
                  // https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
                  attrNames = value && value.match(rnothtmlwhite)

                if (attrNames && elem.nodeType === 1) {
                  while ((name = attrNames[i++])) {
                    elem.removeAttribute(name)
                  }
                }
              },
            })

            // Hooks for boolean attributes
            boolHook = {
              set: function (elem, value, name) {
                if (value === false) {
                  // Remove boolean attributes when set to false
                  jQuery.removeAttr(elem, name)
                } else {
                  elem.setAttribute(name, name)
                }
                return name
              },
            }

            jQuery.each(
              jQuery.expr.match.bool.source.match(/\w+/g),
              function (_i, name) {
                var getter = attrHandle[name] || jQuery.find.attr

                attrHandle[name] = function (elem, name, isXML) {
                  var ret,
                    handle,
                    lowercaseName = name.toLowerCase()

                  if (!isXML) {
                    // Avoid an infinite loop by temporarily removing this function from the getter
                    handle = attrHandle[lowercaseName]
                    attrHandle[lowercaseName] = ret
                    ret =
                      getter(elem, name, isXML) != null ? lowercaseName : null
                    attrHandle[lowercaseName] = handle
                  }
                  return ret
                }
              },
            )

            var rfocusable = /^(?:input|select|textarea|button)$/i,
              rclickable = /^(?:a|area)$/i

            jQuery.fn.extend({
              prop: function (name, value) {
                return access(
                  this,
                  jQuery.prop,
                  name,
                  value,
                  arguments.length > 1,
                )
              },

              removeProp: function (name) {
                return this.each(function () {
                  delete this[jQuery.propFix[name] || name]
                })
              },
            })

            jQuery.extend({
              prop: function (elem, name, value) {
                var ret,
                  hooks,
                  nType = elem.nodeType

                // Don't get/set properties on text, comment and attribute nodes
                if (nType === 3 || nType === 8 || nType === 2) {
                  return
                }

                if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
                  // Fix name and attach hooks
                  name = jQuery.propFix[name] || name
                  hooks = jQuery.propHooks[name]
                }

                if (value !== undefined) {
                  if (
                    hooks &&
                    "set" in hooks &&
                    (ret = hooks.set(elem, value, name)) !== undefined
                  ) {
                    return ret
                  }

                  return (elem[name] = value)
                }

                if (
                  hooks &&
                  "get" in hooks &&
                  (ret = hooks.get(elem, name)) !== null
                ) {
                  return ret
                }

                return elem[name]
              },

              propHooks: {
                tabIndex: {
                  get: function (elem) {
                    // Support: IE <=9 - 11 only
                    // elem.tabIndex doesn't always return the
                    // correct value when it hasn't been explicitly set
                    // Use proper attribute retrieval (trac-12072)
                    var tabindex = jQuery.find.attr(elem, "tabindex")

                    if (tabindex) {
                      return parseInt(tabindex, 10)
                    }

                    if (
                      rfocusable.test(elem.nodeName) ||
                      (rclickable.test(elem.nodeName) && elem.href)
                    ) {
                      return 0
                    }

                    return -1
                  },
                },
              },

              propFix: {
                for: "htmlFor",
                class: "className",
              },
            })

            // Support: IE <=11 only
            // Accessing the selectedIndex property
            // forces the browser to respect setting selected
            // on the option
            // The getter ensures a default option is selected
            // when in an optgroup
            // eslint rule "no-unused-expressions" is disabled for this code
            // since it considers such accessions noop
            if (!support.optSelected) {
              jQuery.propHooks.selected = {
                get: function (elem) {
                  /* eslint no-unused-expressions: "off" */

                  var parent = elem.parentNode
                  if (parent && parent.parentNode) {
                    parent.parentNode.selectedIndex
                  }
                  return null
                },
                set: function (elem) {
                  /* eslint no-unused-expressions: "off" */

                  var parent = elem.parentNode
                  if (parent) {
                    parent.selectedIndex

                    if (parent.parentNode) {
                      parent.parentNode.selectedIndex
                    }
                  }
                },
              }
            }

            jQuery.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                jQuery.propFix[this.toLowerCase()] = this
              },
            )

            // Strip and collapse whitespace according to HTML spec
            // https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
            function stripAndCollapse(value) {
              var tokens = value.match(rnothtmlwhite) || []
              return tokens.join(" ")
            }

            function getClass(elem) {
              return (elem.getAttribute && elem.getAttribute("class")) || ""
            }

            function classesToArray(value) {
              if (Array.isArray(value)) {
                return value
              }
              if (typeof value === "string") {
                return value.match(rnothtmlwhite) || []
              }
              return []
            }

            jQuery.fn.extend({
              addClass: function (value) {
                var classNames, cur, curValue, className, i, finalValue

                if (isFunction(value)) {
                  return this.each(function (j) {
                    jQuery(this).addClass(value.call(this, j, getClass(this)))
                  })
                }

                classNames = classesToArray(value)

                if (classNames.length) {
                  return this.each(function () {
                    curValue = getClass(this)
                    cur =
                      this.nodeType === 1 &&
                      " " + stripAndCollapse(curValue) + " "

                    if (cur) {
                      for (i = 0; i < classNames.length; i++) {
                        className = classNames[i]
                        if (cur.indexOf(" " + className + " ") < 0) {
                          cur += className + " "
                        }
                      }

                      // Only assign if different to avoid unneeded rendering.
                      finalValue = stripAndCollapse(cur)
                      if (curValue !== finalValue) {
                        this.setAttribute("class", finalValue)
                      }
                    }
                  })
                }

                return this
              },

              removeClass: function (value) {
                var classNames, cur, curValue, className, i, finalValue

                if (isFunction(value)) {
                  return this.each(function (j) {
                    jQuery(this).removeClass(
                      value.call(this, j, getClass(this)),
                    )
                  })
                }

                if (!arguments.length) {
                  return this.attr("class", "")
                }

                classNames = classesToArray(value)

                if (classNames.length) {
                  return this.each(function () {
                    curValue = getClass(this)

                    // This expression is here for better compressibility (see addClass)
                    cur =
                      this.nodeType === 1 &&
                      " " + stripAndCollapse(curValue) + " "

                    if (cur) {
                      for (i = 0; i < classNames.length; i++) {
                        className = classNames[i]

                        // Remove *all* instances
                        while (cur.indexOf(" " + className + " ") > -1) {
                          cur = cur.replace(" " + className + " ", " ")
                        }
                      }

                      // Only assign if different to avoid unneeded rendering.
                      finalValue = stripAndCollapse(cur)
                      if (curValue !== finalValue) {
                        this.setAttribute("class", finalValue)
                      }
                    }
                  })
                }

                return this
              },

              toggleClass: function (value, stateVal) {
                var classNames,
                  className,
                  i,
                  self,
                  type = typeof value,
                  isValidValue = type === "string" || Array.isArray(value)

                if (isFunction(value)) {
                  return this.each(function (i) {
                    jQuery(this).toggleClass(
                      value.call(this, i, getClass(this), stateVal),
                      stateVal,
                    )
                  })
                }

                if (typeof stateVal === "boolean" && isValidValue) {
                  return stateVal
                    ? this.addClass(value)
                    : this.removeClass(value)
                }

                classNames = classesToArray(value)

                return this.each(function () {
                  if (isValidValue) {
                    // Toggle individual class names
                    self = jQuery(this)

                    for (i = 0; i < classNames.length; i++) {
                      className = classNames[i]

                      // Check each className given, space separated list
                      if (self.hasClass(className)) {
                        self.removeClass(className)
                      } else {
                        self.addClass(className)
                      }
                    }

                    // Toggle whole class name
                  } else if (value === undefined || type === "boolean") {
                    className = getClass(this)
                    if (className) {
                      // Store className if set
                      dataPriv.set(this, "__className__", className)
                    }

                    // If the element has a class name or if we're passed `false`,
                    // then remove the whole classname (if there was one, the above saved it).
                    // Otherwise bring back whatever was previously saved (if anything),
                    // falling back to the empty string if nothing was stored.
                    if (this.setAttribute) {
                      this.setAttribute(
                        "class",
                        className || value === false
                          ? ""
                          : dataPriv.get(this, "__className__") || "",
                      )
                    }
                  }
                })
              },

              hasClass: function (selector) {
                var className,
                  elem,
                  i = 0

                className = " " + selector + " "
                while ((elem = this[i++])) {
                  if (
                    elem.nodeType === 1 &&
                    (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(
                      className,
                    ) > -1
                  ) {
                    return true
                  }
                }

                return false
              },
            })

            var rreturn = /\r/g

            jQuery.fn.extend({
              val: function (value) {
                var hooks,
                  ret,
                  valueIsFunction,
                  elem = this[0]

                if (!arguments.length) {
                  if (elem) {
                    hooks =
                      jQuery.valHooks[elem.type] ||
                      jQuery.valHooks[elem.nodeName.toLowerCase()]

                    if (
                      hooks &&
                      "get" in hooks &&
                      (ret = hooks.get(elem, "value")) !== undefined
                    ) {
                      return ret
                    }

                    ret = elem.value

                    // Handle most common string cases
                    if (typeof ret === "string") {
                      return ret.replace(rreturn, "")
                    }

                    // Handle cases where value is null/undef or number
                    return ret == null ? "" : ret
                  }

                  return
                }

                valueIsFunction = isFunction(value)

                return this.each(function (i) {
                  var val

                  if (this.nodeType !== 1) {
                    return
                  }

                  if (valueIsFunction) {
                    val = value.call(this, i, jQuery(this).val())
                  } else {
                    val = value
                  }

                  // Treat null/undefined as ""; convert numbers to string
                  if (val == null) {
                    val = ""
                  } else if (typeof val === "number") {
                    val += ""
                  } else if (Array.isArray(val)) {
                    val = jQuery.map(val, function (value) {
                      return value == null ? "" : value + ""
                    })
                  }

                  hooks =
                    jQuery.valHooks[this.type] ||
                    jQuery.valHooks[this.nodeName.toLowerCase()]

                  // If set returns undefined, fall back to normal setting
                  if (
                    !hooks ||
                    !("set" in hooks) ||
                    hooks.set(this, val, "value") === undefined
                  ) {
                    this.value = val
                  }
                })
              },
            })

            jQuery.extend({
              valHooks: {
                option: {
                  get: function (elem) {
                    var val = jQuery.find.attr(elem, "value")
                    return val != null
                      ? val
                      : // Support: IE <=10 - 11 only
                        // option.text throws exceptions (trac-14686, trac-14858)
                        // Strip and collapse whitespace
                        // https://html.spec.whatwg.org/#strip-and-collapse-whitespace
                        stripAndCollapse(jQuery.text(elem))
                  },
                },
                select: {
                  get: function (elem) {
                    var value,
                      option,
                      i,
                      options = elem.options,
                      index = elem.selectedIndex,
                      one = elem.type === "select-one",
                      values = one ? null : [],
                      max = one ? index + 1 : options.length

                    if (index < 0) {
                      i = max
                    } else {
                      i = one ? index : 0
                    }

                    // Loop through all the selected options
                    for (; i < max; i++) {
                      option = options[i]

                      // Support: IE <=9 only
                      // IE8-9 doesn't update selected after form reset (trac-2551)
                      if (
                        (option.selected || i === index) &&
                        // Don't return options that are disabled or in a disabled optgroup
                        !option.disabled &&
                        (!option.parentNode.disabled ||
                          !nodeName(option.parentNode, "optgroup"))
                      ) {
                        // Get the specific value for the option
                        value = jQuery(option).val()

                        // We don't need an array for one selects
                        if (one) {
                          return value
                        }

                        // Multi-Selects return an array
                        values.push(value)
                      }
                    }

                    return values
                  },

                  set: function (elem, value) {
                    var optionSet,
                      option,
                      options = elem.options,
                      values = jQuery.makeArray(value),
                      i = options.length

                    while (i--) {
                      option = options[i]

                      /* eslint-disable no-cond-assign */

                      if (
                        (option.selected =
                          jQuery.inArray(
                            jQuery.valHooks.option.get(option),
                            values,
                          ) > -1)
                      ) {
                        optionSet = true
                      }

                      /* eslint-enable no-cond-assign */
                    }

                    // Force browsers to behave consistently when non-matching value is set
                    if (!optionSet) {
                      elem.selectedIndex = -1
                    }
                    return values
                  },
                },
              },
            })

            // Radios and checkboxes getter/setter
            jQuery.each(["radio", "checkbox"], function () {
              jQuery.valHooks[this] = {
                set: function (elem, value) {
                  if (Array.isArray(value)) {
                    return (elem.checked =
                      jQuery.inArray(jQuery(elem).val(), value) > -1)
                  }
                },
              }
              if (!support.checkOn) {
                jQuery.valHooks[this].get = function (elem) {
                  return elem.getAttribute("value") === null ? "on" : elem.value
                }
              }
            })

            // Return jQuery for attributes-only inclusion
            var location = window.location

            var nonce = { guid: Date.now() }

            var rquery = /\?/

            // Cross-browser xml parsing
            jQuery.parseXML = function (data) {
              var xml, parserErrorElem
              if (!data || typeof data !== "string") {
                return null
              }

              // Support: IE 9 - 11 only
              // IE throws on parseFromString with invalid input.
              try {
                xml = new window.DOMParser().parseFromString(data, "text/xml")
              } catch (e) {}

              parserErrorElem =
                xml && xml.getElementsByTagName("parsererror")[0]
              if (!xml || parserErrorElem) {
                jQuery.error(
                  "Invalid XML: " +
                    (parserErrorElem
                      ? jQuery
                          .map(parserErrorElem.childNodes, function (el) {
                            return el.textContent
                          })
                          .join("\n")
                      : data),
                )
              }
              return xml
            }

            var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
              stopPropagationCallback = function (e) {
                e.stopPropagation()
              }

            jQuery.extend(jQuery.event, {
              trigger: function (event, data, elem, onlyHandlers) {
                var i,
                  cur,
                  tmp,
                  bubbleType,
                  ontype,
                  handle,
                  special,
                  lastElement,
                  eventPath = [elem || document],
                  type = hasOwn.call(event, "type") ? event.type : event,
                  namespaces = hasOwn.call(event, "namespace")
                    ? event.namespace.split(".")
                    : []

                cur = lastElement = tmp = elem = elem || document

                // Don't do events on text and comment nodes
                if (elem.nodeType === 3 || elem.nodeType === 8) {
                  return
                }

                // focus/blur morphs to focusin/out; ensure we're not firing them right now
                if (rfocusMorph.test(type + jQuery.event.triggered)) {
                  return
                }

                if (type.indexOf(".") > -1) {
                  // Namespaced trigger; create a regexp to match event type in handle()
                  namespaces = type.split(".")
                  type = namespaces.shift()
                  namespaces.sort()
                }
                ontype = type.indexOf(":") < 0 && "on" + type

                // Caller can pass in a jQuery.Event object, Object, or just an event type string
                event = event[jQuery.expando]
                  ? event
                  : new jQuery.Event(type, typeof event === "object" && event)

                // Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
                event.isTrigger = onlyHandlers ? 2 : 3
                event.namespace = namespaces.join(".")
                event.rnamespace = event.namespace
                  ? new RegExp(
                      "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)",
                    )
                  : null

                // Clean up the event in case it is being reused
                event.result = undefined
                if (!event.target) {
                  event.target = elem
                }

                // Clone any incoming data and prepend the event, creating the handler arg list
                data = data == null ? [event] : jQuery.makeArray(data, [event])

                // Allow special events to draw outside the lines
                special = jQuery.event.special[type] || {}
                if (
                  !onlyHandlers &&
                  special.trigger &&
                  special.trigger.apply(elem, data) === false
                ) {
                  return
                }

                // Determine event propagation path in advance, per W3C events spec (trac-9951)
                // Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
                if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
                  bubbleType = special.delegateType || type
                  if (!rfocusMorph.test(bubbleType + type)) {
                    cur = cur.parentNode
                  }
                  for (; cur; cur = cur.parentNode) {
                    eventPath.push(cur)
                    tmp = cur
                  }

                  // Only add window if we got to document (e.g., not plain obj or detached DOM)
                  if (tmp === (elem.ownerDocument || document)) {
                    eventPath.push(
                      tmp.defaultView || tmp.parentWindow || window,
                    )
                  }
                }

                // Fire handlers on the event path
                i = 0
                while (
                  (cur = eventPath[i++]) &&
                  !event.isPropagationStopped()
                ) {
                  lastElement = cur
                  event.type = i > 1 ? bubbleType : special.bindType || type

                  // jQuery handler
                  handle =
                    (dataPriv.get(cur, "events") || Object.create(null))[
                      event.type
                    ] && dataPriv.get(cur, "handle")
                  if (handle) {
                    handle.apply(cur, data)
                  }

                  // Native handler
                  handle = ontype && cur[ontype]
                  if (handle && handle.apply && acceptData(cur)) {
                    event.result = handle.apply(cur, data)
                    if (event.result === false) {
                      event.preventDefault()
                    }
                  }
                }
                event.type = type

                // If nobody prevented the default action, do it now
                if (!onlyHandlers && !event.isDefaultPrevented()) {
                  if (
                    (!special._default ||
                      special._default.apply(eventPath.pop(), data) ===
                        false) &&
                    acceptData(elem)
                  ) {
                    // Call a native DOM method on the target with the same name as the event.
                    // Don't do default actions on window, that's where global variables be (trac-6170)
                    if (ontype && isFunction(elem[type]) && !isWindow(elem)) {
                      // Don't re-trigger an onFOO event when we call its FOO() method
                      tmp = elem[ontype]

                      if (tmp) {
                        elem[ontype] = null
                      }

                      // Prevent re-triggering of the same event, since we already bubbled it above
                      jQuery.event.triggered = type

                      if (event.isPropagationStopped()) {
                        lastElement.addEventListener(
                          type,
                          stopPropagationCallback,
                        )
                      }

                      elem[type]()

                      if (event.isPropagationStopped()) {
                        lastElement.removeEventListener(
                          type,
                          stopPropagationCallback,
                        )
                      }

                      jQuery.event.triggered = undefined

                      if (tmp) {
                        elem[ontype] = tmp
                      }
                    }
                  }
                }

                return event.result
              },

              // Piggyback on a donor event to simulate a different one
              // Used only for `focus(in | out)` events
              simulate: function (type, elem, event) {
                var e = jQuery.extend(new jQuery.Event(), event, {
                  type: type,
                  isSimulated: true,
                })

                jQuery.event.trigger(e, null, elem)
              },
            })

            jQuery.fn.extend({
              trigger: function (type, data) {
                return this.each(function () {
                  jQuery.event.trigger(type, data, this)
                })
              },
              triggerHandler: function (type, data) {
                var elem = this[0]
                if (elem) {
                  return jQuery.event.trigger(type, data, elem, true)
                }
              },
            })

            var rbracket = /\[\]$/,
              rCRLF = /\r?\n/g,
              rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
              rsubmittable = /^(?:input|select|textarea|keygen)/i

            function buildParams(prefix, obj, traditional, add) {
              var name

              if (Array.isArray(obj)) {
                // Serialize array item.
                jQuery.each(obj, function (i, v) {
                  if (traditional || rbracket.test(prefix)) {
                    // Treat each array item as a scalar.
                    add(prefix, v)
                  } else {
                    // Item is non-scalar (array or object), encode its numeric index.
                    buildParams(
                      prefix +
                        "[" +
                        (typeof v === "object" && v != null ? i : "") +
                        "]",
                      v,
                      traditional,
                      add,
                    )
                  }
                })
              } else if (!traditional && toType(obj) === "object") {
                // Serialize object item.
                for (name in obj) {
                  buildParams(
                    prefix + "[" + name + "]",
                    obj[name],
                    traditional,
                    add,
                  )
                }
              } else {
                // Serialize scalar item.
                add(prefix, obj)
              }
            }

            // Serialize an array of form elements or a set of
            // key/values into a query string
            jQuery.param = function (a, traditional) {
              var prefix,
                s = [],
                add = function (key, valueOrFunction) {
                  // If value is a function, invoke it and use its return value
                  var value = isFunction(valueOrFunction)
                    ? valueOrFunction()
                    : valueOrFunction

                  s[s.length] =
                    encodeURIComponent(key) +
                    "=" +
                    encodeURIComponent(value == null ? "" : value)
                }

              if (a == null) {
                return ""
              }

              // If an array was passed in, assume that it is an array of form elements.
              if (Array.isArray(a) || (a.jquery && !jQuery.isPlainObject(a))) {
                // Serialize the form elements
                jQuery.each(a, function () {
                  add(this.name, this.value)
                })
              } else {
                // If traditional, encode the "old" way (the way 1.3.2 or older
                // did it), otherwise encode params recursively.
                for (prefix in a) {
                  buildParams(prefix, a[prefix], traditional, add)
                }
              }

              // Return the resulting serialization
              return s.join("&")
            }

            jQuery.fn.extend({
              serialize: function () {
                return jQuery.param(this.serializeArray())
              },
              serializeArray: function () {
                return this.map(function () {
                  // Can add propHook for "elements" to filter or add form elements
                  var elements = jQuery.prop(this, "elements")
                  return elements ? jQuery.makeArray(elements) : this
                })
                  .filter(function () {
                    var type = this.type

                    // Use .is( ":disabled" ) so that fieldset[disabled] works
                    return (
                      this.name &&
                      !jQuery(this).is(":disabled") &&
                      rsubmittable.test(this.nodeName) &&
                      !rsubmitterTypes.test(type) &&
                      (this.checked || !rcheckableType.test(type))
                    )
                  })
                  .map(function (_i, elem) {
                    var val = jQuery(this).val()

                    if (val == null) {
                      return null
                    }

                    if (Array.isArray(val)) {
                      return jQuery.map(val, function (val) {
                        return {
                          name: elem.name,
                          value: val.replace(rCRLF, "\r\n"),
                        }
                      })
                    }

                    return {
                      name: elem.name,
                      value: val.replace(rCRLF, "\r\n"),
                    }
                  })
                  .get()
              },
            })

            var r20 = /%20/g,
              rhash = /#.*$/,
              rantiCache = /([?&])_=[^&]*/,
              rheaders = /^(.*?):[ \t]*([^\r\n]*)$/gm,
              // trac-7653, trac-8125, trac-8152: local protocol detection
              rlocalProtocol =
                /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
              rnoContent = /^(?:GET|HEAD)$/,
              rprotocol = /^\/\//,
              /* Prefilters
               * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
               * 2) These are called:
               *    - BEFORE asking for a transport
               *    - AFTER param serialization (s.data is a string if s.processData is true)
               * 3) key is the dataType
               * 4) the catchall symbol "*" can be used
               * 5) execution will start with transport dataType and THEN continue down to "*" if needed
               */
              prefilters = {},
              /* Transports bindings
               * 1) key is the dataType
               * 2) the catchall symbol "*" can be used
               * 3) selection will start with transport dataType and THEN go to "*" if needed
               */
              transports = {},
              // Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
              allTypes = "*/".concat("*"),
              // Anchor tag for parsing the document origin
              originAnchor = document.createElement("a")

            originAnchor.href = location.href

            // Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
            function addToPrefiltersOrTransports(structure) {
              // dataTypeExpression is optional and defaults to "*"
              return function (dataTypeExpression, func) {
                if (typeof dataTypeExpression !== "string") {
                  func = dataTypeExpression
                  dataTypeExpression = "*"
                }

                var dataType,
                  i = 0,
                  dataTypes =
                    dataTypeExpression.toLowerCase().match(rnothtmlwhite) || []

                if (isFunction(func)) {
                  // For each dataType in the dataTypeExpression
                  while ((dataType = dataTypes[i++])) {
                    // Prepend if requested
                    if (dataType[0] === "+") {
                      dataType = dataType.slice(1) || "*"
                      ;(structure[dataType] =
                        structure[dataType] || []).unshift(func)

                      // Otherwise append
                    } else {
                      (structure[dataType] = structure[dataType] || []).push(
                        func,
                      )
                    }
                  }
                }
              }
            }

            // Base inspection function for prefilters and transports
            function inspectPrefiltersOrTransports(
              structure,
              options,
              originalOptions,
              jqXHR,
            ) {
              var inspected = {},
                seekingTransport = structure === transports

              function inspect(dataType) {
                var selected
                inspected[dataType] = true
                jQuery.each(
                  structure[dataType] || [],
                  function (_, prefilterOrFactory) {
                    var dataTypeOrTransport = prefilterOrFactory(
                      options,
                      originalOptions,
                      jqXHR,
                    )
                    if (
                      typeof dataTypeOrTransport === "string" &&
                      !seekingTransport &&
                      !inspected[dataTypeOrTransport]
                    ) {
                      options.dataTypes.unshift(dataTypeOrTransport)
                      inspect(dataTypeOrTransport)
                      return false
                    } else if (seekingTransport) {
                      return !(selected = dataTypeOrTransport)
                    }
                  },
                )
                return selected
              }

              return (
                inspect(options.dataTypes[0]) ||
                (!inspected["*"] && inspect("*"))
              )
            }

            // A special extend for ajax options
            // that takes "flat" options (not to be deep extended)
            // Fixes trac-9887
            function ajaxExtend(target, src) {
              var key,
                deep,
                flatOptions = jQuery.ajaxSettings.flatOptions || {}

              for (key in src) {
                if (src[key] !== undefined) {
                  (flatOptions[key] ? target : deep || (deep = {}))[key] =
                    src[key]
                }
              }
              if (deep) {
                jQuery.extend(true, target, deep)
              }

              return target
            }

            /* Handles responses to an ajax request:
             * - finds the right dataType (mediates between content-type and expected dataType)
             * - returns the corresponding response
             */
            function ajaxHandleResponses(s, jqXHR, responses) {
              var ct,
                type,
                finalDataType,
                firstDataType,
                contents = s.contents,
                dataTypes = s.dataTypes

              // Remove auto dataType and get content-type in the process
              while (dataTypes[0] === "*") {
                dataTypes.shift()
                if (ct === undefined) {
                  ct = s.mimeType || jqXHR.getResponseHeader("Content-Type")
                }
              }

              // Check if we're dealing with a known content-type
              if (ct) {
                for (type in contents) {
                  if (contents[type] && contents[type].test(ct)) {
                    dataTypes.unshift(type)
                    break
                  }
                }
              }

              // Check to see if we have a response for the expected dataType
              if (dataTypes[0] in responses) {
                finalDataType = dataTypes[0]
              } else {
                // Try convertible dataTypes
                for (type in responses) {
                  if (
                    !dataTypes[0] ||
                    s.converters[type + " " + dataTypes[0]]
                  ) {
                    finalDataType = type
                    break
                  }
                  if (!firstDataType) {
                    firstDataType = type
                  }
                }

                // Or just use first one
                finalDataType = finalDataType || firstDataType
              }

              // If we found a dataType
              // We add the dataType to the list if needed
              // and return the corresponding response
              if (finalDataType) {
                if (finalDataType !== dataTypes[0]) {
                  dataTypes.unshift(finalDataType)
                }
                return responses[finalDataType]
              }
            }

            /* Chain conversions given the request and the original response
             * Also sets the responseXXX fields on the jqXHR instance
             */
            function ajaxConvert(s, response, jqXHR, isSuccess) {
              var conv2,
                current,
                conv,
                tmp,
                prev,
                converters = {},
                // Work with a copy of dataTypes in case we need to modify it for conversion
                dataTypes = s.dataTypes.slice()

              // Create converters map with lowercased keys
              if (dataTypes[1]) {
                for (conv in s.converters) {
                  converters[conv.toLowerCase()] = s.converters[conv]
                }
              }

              current = dataTypes.shift()

              // Convert to each sequential dataType
              while (current) {
                if (s.responseFields[current]) {
                  jqXHR[s.responseFields[current]] = response
                }

                // Apply the dataFilter if provided
                if (!prev && isSuccess && s.dataFilter) {
                  response = s.dataFilter(response, s.dataType)
                }

                prev = current
                current = dataTypes.shift()

                if (current) {
                  // There's only work to do if current dataType is non-auto
                  if (current === "*") {
                    current = prev

                    // Convert response if prev dataType is non-auto and differs from current
                  } else if (prev !== "*" && prev !== current) {
                    // Seek a direct converter
                    conv =
                      converters[prev + " " + current] ||
                      converters["* " + current]

                    // If none found, seek a pair
                    if (!conv) {
                      for (conv2 in converters) {
                        // If conv2 outputs current
                        tmp = conv2.split(" ")
                        if (tmp[1] === current) {
                          // If prev can be converted to accepted input
                          conv =
                            converters[prev + " " + tmp[0]] ||
                            converters["* " + tmp[0]]
                          if (conv) {
                            // Condense equivalence converters
                            if (conv === true) {
                              conv = converters[conv2]

                              // Otherwise, insert the intermediate dataType
                            } else if (converters[conv2] !== true) {
                              current = tmp[0]
                              dataTypes.unshift(tmp[1])
                            }
                            break
                          }
                        }
                      }
                    }

                    // Apply converter (if not an equivalence)
                    if (conv !== true) {
                      // Unless errors are allowed to bubble, catch and return them
                      if (conv && s.throws) {
                        response = conv(response)
                      } else {
                        try {
                          response = conv(response)
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: conv
                              ? e
                              : "No conversion from " + prev + " to " + current,
                          }
                        }
                      }
                    }
                  }
                }
              }

              return { state: "success", data: response }
            }

            jQuery.extend({
              // Counter for holding the number of active queries
              active: 0,

              // Last-Modified header cache for next request
              lastModified: {},
              etag: {},

              ajaxSettings: {
                url: location.href,
                type: "GET",
                isLocal: rlocalProtocol.test(location.protocol),
                global: true,
                processData: true,
                async: true,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",

                /*
      timeout: 0,
      data: null,
      dataType: null,
      username: null,
      password: null,
      cache: null,
      throws: false,
      traditional: false,
      headers: {},
      */

                accepts: {
                  "*": allTypes,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },

                contents: {
                  xml: /\bxml\b/,
                  html: /\bhtml/,
                  json: /\bjson\b/,
                },

                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },

                // Data converters
                // Keys separate source (or catchall "*") and destination types with a single space
                converters: {
                  // Convert anything to text
                  "* text": String,

                  // Text to html (true = no transformation)
                  "text html": true,

                  // Evaluate text as a json expression
                  "text json": JSON.parse,

                  // Parse text as xml
                  "text xml": jQuery.parseXML,
                },

                // For options that shouldn't be deep extended:
                // you can add your own custom options here if
                // and when you create one that shouldn't be
                // deep extended (see ajaxExtend)
                flatOptions: {
                  url: true,
                  context: true,
                },
              },

              // Creates a full fledged settings object into target
              // with both ajaxSettings and settings fields.
              // If target is omitted, writes into ajaxSettings.
              ajaxSetup: function (target, settings) {
                return settings
                  ? // Building a settings object
                    ajaxExtend(
                      ajaxExtend(target, jQuery.ajaxSettings),
                      settings,
                    )
                  : // Extending ajaxSettings
                    ajaxExtend(jQuery.ajaxSettings, target)
              },

              ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
              ajaxTransport: addToPrefiltersOrTransports(transports),

              // Main method
              ajax: function (url, options) {
                // If url is an object, simulate pre-1.5 signature
                if (typeof url === "object") {
                  options = url
                  url = undefined
                }

                // Force options to be an object
                options = options || {}

                var transport,
                  // URL without anti-cache param
                  cacheURL,
                  // Response headers
                  responseHeadersString,
                  responseHeaders,
                  // timeout handle
                  timeoutTimer,
                  // Url cleanup var
                  urlAnchor,
                  // Request state (becomes false upon send and true upon completion)
                  completed,
                  // To know if global events are to be dispatched
                  fireGlobals,
                  // Loop variable
                  i,
                  // uncached part of the url
                  uncached,
                  // Create the final options object
                  s = jQuery.ajaxSetup({}, options),
                  // Callbacks context
                  callbackContext = s.context || s,
                  // Context for global events is callbackContext if it is a DOM node or jQuery collection
                  globalEventContext =
                    s.context &&
                    (callbackContext.nodeType || callbackContext.jquery)
                      ? jQuery(callbackContext)
                      : jQuery.event,
                  // Deferreds
                  deferred = jQuery.Deferred(),
                  completeDeferred = jQuery.Callbacks("once memory"),
                  // Status-dependent callbacks
                  statusCode = s.statusCode || {},
                  // Headers (they are sent all at once)
                  requestHeaders = {},
                  requestHeadersNames = {},
                  // Default abort message
                  strAbort = "canceled",
                  // Fake xhr
                  jqXHR = {
                    readyState: 0,

                    // Builds headers hashtable if needed
                    getResponseHeader: function (key) {
                      var match
                      if (completed) {
                        if (!responseHeaders) {
                          responseHeaders = {}
                          while (
                            (match = rheaders.exec(responseHeadersString))
                          ) {
                            responseHeaders[match[1].toLowerCase() + " "] = (
                              responseHeaders[match[1].toLowerCase() + " "] ||
                              []
                            ).concat(match[2])
                          }
                        }
                        match = responseHeaders[key.toLowerCase() + " "]
                      }
                      return match == null ? null : match.join(", ")
                    },

                    // Raw string
                    getAllResponseHeaders: function () {
                      return completed ? responseHeadersString : null
                    },

                    // Caches the header
                    setRequestHeader: function (name, value) {
                      if (completed == null) {
                        name = requestHeadersNames[name.toLowerCase()] =
                          requestHeadersNames[name.toLowerCase()] || name
                        requestHeaders[name] = value
                      }
                      return this
                    },

                    // Overrides response content-type header
                    overrideMimeType: function (type) {
                      if (completed == null) {
                        s.mimeType = type
                      }
                      return this
                    },

                    // Status-dependent callbacks
                    statusCode: function (map) {
                      var code
                      if (map) {
                        if (completed) {
                          // Execute the appropriate callbacks
                          jqXHR.always(map[jqXHR.status])
                        } else {
                          // Lazy-add the new callbacks in a way that preserves old ones
                          for (code in map) {
                            statusCode[code] = [statusCode[code], map[code]]
                          }
                        }
                      }
                      return this
                    },

                    // Cancel the request
                    abort: function (statusText) {
                      var finalText = statusText || strAbort
                      if (transport) {
                        transport.abort(finalText)
                      }
                      done(0, finalText)
                      return this
                    },
                  }

                // Attach deferreds
                deferred.promise(jqXHR)

                // Add protocol if not provided (prefilters might expect it)
                // Handle falsy url in the settings object (trac-10093: consistency with old signature)
                // We also use the url parameter if available
                s.url = ((url || s.url || location.href) + "").replace(
                  rprotocol,
                  location.protocol + "//",
                )

                // Alias method option to type as per ticket trac-12004
                s.type = options.method || options.type || s.method || s.type

                // Extract dataTypes list
                s.dataTypes = (s.dataType || "*")
                  .toLowerCase()
                  .match(rnothtmlwhite) || [""]

                // A cross-domain request is in order when the origin doesn't match the current origin.
                if (s.crossDomain == null) {
                  urlAnchor = document.createElement("a")

                  // Support: IE <=8 - 11, Edge 12 - 15
                  // IE throws exception on accessing the href property if url is malformed,
                  // e.g. http://example.com:80x/
                  try {
                    urlAnchor.href = s.url

                    // Support: IE <=8 - 11 only
                    // Anchor's host property isn't correctly set when s.url is relative
                    urlAnchor.href = urlAnchor.href
                    s.crossDomain =
                      originAnchor.protocol + "//" + originAnchor.host !==
                      urlAnchor.protocol + "//" + urlAnchor.host
                  } catch (e) {
                    // If there is an error parsing the URL, assume it is crossDomain,
                    // it can be rejected by the transport if it is invalid
                    s.crossDomain = true
                  }
                }

                // Convert data if not already a string
                if (s.data && s.processData && typeof s.data !== "string") {
                  s.data = jQuery.param(s.data, s.traditional)
                }

                // Apply prefilters
                inspectPrefiltersOrTransports(prefilters, s, options, jqXHR)

                // If request was aborted inside a prefilter, stop there
                if (completed) {
                  return jqXHR
                }

                // We can fire global events as of now if asked to
                // Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
                fireGlobals = jQuery.event && s.global

                // Watch for a new set of requests
                if (fireGlobals && jQuery.active++ === 0) {
                  jQuery.event.trigger("ajaxStart")
                }

                // Uppercase the type
                s.type = s.type.toUpperCase()

                // Determine if request has content
                s.hasContent = !rnoContent.test(s.type)

                // Save the URL in case we're toying with the If-Modified-Since
                // and/or If-None-Match header later on
                // Remove hash to simplify url manipulation
                cacheURL = s.url.replace(rhash, "")

                // More options handling for requests with no content
                if (!s.hasContent) {
                  // Remember the hash so we can put it back
                  uncached = s.url.slice(cacheURL.length)

                  // If data is available and should be processed, append data to url
                  if (s.data && (s.processData || typeof s.data === "string")) {
                    cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s.data

                    // trac-9682: remove data so that it's not used in an eventual retry
                    delete s.data
                  }

                  // Add or update anti-cache param if needed
                  if (s.cache === false) {
                    cacheURL = cacheURL.replace(rantiCache, "$1")
                    uncached =
                      (rquery.test(cacheURL) ? "&" : "?") +
                      "_=" +
                      nonce.guid++ +
                      uncached
                  }

                  // Put hash and anti-cache on the URL that will be requested (gh-1732)
                  s.url = cacheURL + uncached

                  // Change '%20' to '+' if this is encoded form body content (gh-2658)
                } else if (
                  s.data &&
                  s.processData &&
                  (s.contentType || "").indexOf(
                    "application/x-www-form-urlencoded",
                  ) === 0
                ) {
                  s.data = s.data.replace(r20, "+")
                }

                // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                if (s.ifModified) {
                  if (jQuery.lastModified[cacheURL]) {
                    jqXHR.setRequestHeader(
                      "If-Modified-Since",
                      jQuery.lastModified[cacheURL],
                    )
                  }
                  if (jQuery.etag[cacheURL]) {
                    jqXHR.setRequestHeader(
                      "If-None-Match",
                      jQuery.etag[cacheURL],
                    )
                  }
                }

                // Set the correct header, if data is being sent
                if (
                  (s.data && s.hasContent && s.contentType !== false) ||
                  options.contentType
                ) {
                  jqXHR.setRequestHeader("Content-Type", s.contentType)
                }

                // Set the Accepts header for the server, depending on the dataType
                jqXHR.setRequestHeader(
                  "Accept",
                  s.dataTypes[0] && s.accepts[s.dataTypes[0]]
                    ? s.accepts[s.dataTypes[0]] +
                        (s.dataTypes[0] !== "*"
                          ? ", " + allTypes + "; q=0.01"
                          : "")
                    : s.accepts["*"],
                )

                // Check for headers option
                for (i in s.headers) {
                  jqXHR.setRequestHeader(i, s.headers[i])
                }

                // Allow custom headers/mimetypes and early abort
                if (
                  s.beforeSend &&
                  (s.beforeSend.call(callbackContext, jqXHR, s) === false ||
                    completed)
                ) {
                  // Abort if not done already and return
                  return jqXHR.abort()
                }

                // Aborting is no longer a cancellation
                strAbort = "abort"

                // Install callbacks on deferreds
                completeDeferred.add(s.complete)
                jqXHR.done(s.success)
                jqXHR.fail(s.error)

                // Get transport
                transport = inspectPrefiltersOrTransports(
                  transports,
                  s,
                  options,
                  jqXHR,
                )

                // If no transport, we auto-abort
                if (!transport) {
                  done(-1, "No Transport")
                } else {
                  jqXHR.readyState = 1

                  // Send global event
                  if (fireGlobals) {
                    globalEventContext.trigger("ajaxSend", [jqXHR, s])
                  }

                  // If request was aborted inside ajaxSend, stop there
                  if (completed) {
                    return jqXHR
                  }

                  // Timeout
                  if (s.async && s.timeout > 0) {
                    timeoutTimer = window.setTimeout(function () {
                      jqXHR.abort("timeout")
                    }, s.timeout)
                  }

                  try {
                    completed = false
                    transport.send(requestHeaders, done)
                  } catch (e) {
                    // Rethrow post-completion exceptions
                    if (completed) {
                      throw e
                    }

                    // Propagate others as results
                    done(-1, e)
                  }
                }

                // Callback for when everything is done
                function done(status, nativeStatusText, responses, headers) {
                  var isSuccess,
                    success,
                    error,
                    response,
                    modified,
                    statusText = nativeStatusText

                  // Ignore repeat invocations
                  if (completed) {
                    return
                  }

                  completed = true

                  // Clear timeout if it exists
                  if (timeoutTimer) {
                    window.clearTimeout(timeoutTimer)
                  }

                  // Dereference transport for early garbage collection
                  // (no matter how long the jqXHR object will be used)
                  transport = undefined

                  // Cache response headers
                  responseHeadersString = headers || ""

                  // Set readyState
                  jqXHR.readyState = status > 0 ? 4 : 0

                  // Determine if successful
                  isSuccess = (status >= 200 && status < 300) || status === 304

                  // Get response data
                  if (responses) {
                    response = ajaxHandleResponses(s, jqXHR, responses)
                  }

                  // Use a noop converter for missing script but not if jsonp
                  if (
                    !isSuccess &&
                    jQuery.inArray("script", s.dataTypes) > -1 &&
                    jQuery.inArray("json", s.dataTypes) < 0
                  ) {
                    s.converters["text script"] = function () {}
                  }

                  // Convert no matter what (that way responseXXX fields are always set)
                  response = ajaxConvert(s, response, jqXHR, isSuccess)

                  // If successful, handle type chaining
                  if (isSuccess) {
                    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
                    if (s.ifModified) {
                      modified = jqXHR.getResponseHeader("Last-Modified")
                      if (modified) {
                        jQuery.lastModified[cacheURL] = modified
                      }
                      modified = jqXHR.getResponseHeader("etag")
                      if (modified) {
                        jQuery.etag[cacheURL] = modified
                      }
                    }

                    // if no content
                    if (status === 204 || s.type === "HEAD") {
                      statusText = "nocontent"

                      // if not modified
                    } else if (status === 304) {
                      statusText = "notmodified"

                      // If we have data, let's convert it
                    } else {
                      statusText = response.state
                      success = response.data
                      error = response.error
                      isSuccess = !error
                    }
                  } else {
                    // Extract error from statusText and normalize for non-aborts
                    error = statusText
                    if (status || !statusText) {
                      statusText = "error"
                      if (status < 0) {
                        status = 0
                      }
                    }
                  }

                  // Set data for the fake xhr object
                  jqXHR.status = status
                  jqXHR.statusText = (nativeStatusText || statusText) + ""

                  // Success/Error
                  if (isSuccess) {
                    deferred.resolveWith(callbackContext, [
                      success,
                      statusText,
                      jqXHR,
                    ])
                  } else {
                    deferred.rejectWith(callbackContext, [
                      jqXHR,
                      statusText,
                      error,
                    ])
                  }

                  // Status-dependent callbacks
                  jqXHR.statusCode(statusCode)
                  statusCode = undefined

                  if (fireGlobals) {
                    globalEventContext.trigger(
                      isSuccess ? "ajaxSuccess" : "ajaxError",
                      [jqXHR, s, isSuccess ? success : error],
                    )
                  }

                  // Complete
                  completeDeferred.fireWith(callbackContext, [
                    jqXHR,
                    statusText,
                  ])

                  if (fireGlobals) {
                    globalEventContext.trigger("ajaxComplete", [jqXHR, s])

                    // Handle the global AJAX counter
                    if (!--jQuery.active) {
                      jQuery.event.trigger("ajaxStop")
                    }
                  }
                }

                return jqXHR
              },

              getJSON: function (url, data, callback) {
                return jQuery.get(url, data, callback, "json")
              },

              getScript: function (url, callback) {
                return jQuery.get(url, undefined, callback, "script")
              },
            })

            jQuery.each(["get", "post"], function (_i, method) {
              jQuery[method] = function (url, data, callback, type) {
                // Shift arguments if data argument was omitted
                if (isFunction(data)) {
                  type = type || callback
                  callback = data
                  data = undefined
                }

                // The url can be an options object (which then must have .url)
                return jQuery.ajax(
                  jQuery.extend(
                    {
                      url: url,
                      type: method,
                      dataType: type,
                      data: data,
                      success: callback,
                    },
                    jQuery.isPlainObject(url) && url,
                  ),
                )
              }
            })

            jQuery.ajaxPrefilter(function (s) {
              var i
              for (i in s.headers) {
                if (i.toLowerCase() === "content-type") {
                  s.contentType = s.headers[i] || ""
                }
              }
            })

            jQuery._evalUrl = function (url, options, doc) {
              return jQuery.ajax({
                url: url,

                // Make this explicit, since user can override this through ajaxSetup (trac-11264)
                type: "GET",
                dataType: "script",
                cache: true,
                async: false,
                global: false,

                // Only evaluate the response if it is successful (gh-4126)
                // dataFilter is not invoked for failure responses, so using it instead
                // of the default converter is kludgy but it works.
                converters: {
                  "text script": function () {},
                },
                dataFilter: function (response) {
                  jQuery.globalEval(response, options, doc)
                },
              })
            }

            jQuery.fn.extend({
              wrapAll: function (html) {
                var wrap

                if (this[0]) {
                  if (isFunction(html)) {
                    html = html.call(this[0])
                  }

                  // The elements to wrap the target around
                  wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true)

                  if (this[0].parentNode) {
                    wrap.insertBefore(this[0])
                  }

                  wrap
                    .map(function () {
                      var elem = this

                      while (elem.firstElementChild) {
                        elem = elem.firstElementChild
                      }

                      return elem
                    })
                    .append(this)
                }

                return this
              },

              wrapInner: function (html) {
                if (isFunction(html)) {
                  return this.each(function (i) {
                    jQuery(this).wrapInner(html.call(this, i))
                  })
                }

                return this.each(function () {
                  var self = jQuery(this),
                    contents = self.contents()

                  if (contents.length) {
                    contents.wrapAll(html)
                  } else {
                    self.append(html)
                  }
                })
              },

              wrap: function (html) {
                var htmlIsFunction = isFunction(html)

                return this.each(function (i) {
                  jQuery(this).wrapAll(
                    htmlIsFunction ? html.call(this, i) : html,
                  )
                })
              },

              unwrap: function (selector) {
                this.parent(selector)
                  .not("body")
                  .each(function () {
                    jQuery(this).replaceWith(this.childNodes)
                  })
                return this
              },
            })

            jQuery.expr.pseudos.hidden = function (elem) {
              return !jQuery.expr.pseudos.visible(elem)
            }
            jQuery.expr.pseudos.visible = function (elem) {
              return !!(
                elem.offsetWidth ||
                elem.offsetHeight ||
                elem.getClientRects().length
              )
            }

            jQuery.ajaxSettings.xhr = function () {
              try {
                return new window.XMLHttpRequest()
              } catch (e) {}
            }

            var xhrSuccessStatus = {
                // File protocol always yields status code 0, assume 200
                0: 200,

                // Support: IE <=9 only
                // trac-1450: sometimes IE returns 1223 when it should be 204
                1223: 204,
              },
              xhrSupported = jQuery.ajaxSettings.xhr()

            support.cors = !!xhrSupported && "withCredentials" in xhrSupported
            support.ajax = xhrSupported = !!xhrSupported

            jQuery.ajaxTransport(function (options) {
              var callback, errorCallback

              // Cross domain only allowed if supported through XMLHttpRequest
              if (support.cors || (xhrSupported && !options.crossDomain)) {
                return {
                  send: function (headers, complete) {
                    var i,
                      xhr = options.xhr()

                    xhr.open(
                      options.type,
                      options.url,
                      options.async,
                      options.username,
                      options.password,
                    )

                    // Apply custom fields if provided
                    if (options.xhrFields) {
                      for (i in options.xhrFields) {
                        xhr[i] = options.xhrFields[i]
                      }
                    }

                    // Override mime type if needed
                    if (options.mimeType && xhr.overrideMimeType) {
                      xhr.overrideMimeType(options.mimeType)
                    }

                    // X-Requested-With header
                    // For cross-domain requests, seeing as conditions for a preflight are
                    // akin to a jigsaw puzzle, we simply never set it to be sure.
                    // (it can always be set on a per-request basis or even using ajaxSetup)
                    // For same-domain requests, won't change header if already provided.
                    if (!options.crossDomain && !headers["X-Requested-With"]) {
                      headers["X-Requested-With"] = "XMLHttpRequest"
                    }

                    // Set headers
                    for (i in headers) {
                      xhr.setRequestHeader(i, headers[i])
                    }

                    // Callback
                    callback = function (type) {
                      return function () {
                        if (callback) {
                          callback =
                            errorCallback =
                            xhr.onload =
                            xhr.onerror =
                            xhr.onabort =
                            xhr.ontimeout =
                            xhr.onreadystatechange =
                              null

                          if (type === "abort") {
                            xhr.abort()
                          } else if (type === "error") {
                            // Support: IE <=9 only
                            // On a manual native abort, IE9 throws
                            // errors on any property access that is not readyState
                            if (typeof xhr.status !== "number") {
                              complete(0, "error")
                            } else {
                              complete(
                                // File: protocol always yields status 0; see trac-8605, trac-14207
                                xhr.status,
                                xhr.statusText,
                              )
                            }
                          } else {
                            complete(
                              xhrSuccessStatus[xhr.status] || xhr.status,
                              xhr.statusText,

                              // Support: IE <=9 only
                              // IE9 has no XHR2 but throws on binary (trac-11426)
                              // For XHR2 non-text, let the caller handle it (gh-2498)
                              (xhr.responseType || "text") !== "text" ||
                                typeof xhr.responseText !== "string"
                                ? { binary: xhr.response }
                                : { text: xhr.responseText },
                              xhr.getAllResponseHeaders(),
                            )
                          }
                        }
                      }
                    }

                    // Listen to events
                    xhr.onload = callback()
                    errorCallback =
                      xhr.onerror =
                      xhr.ontimeout =
                        callback("error")

                    // Support: IE 9 only
                    // Use onreadystatechange to replace onabort
                    // to handle uncaught aborts
                    if (xhr.onabort !== undefined) {
                      xhr.onabort = errorCallback
                    } else {
                      xhr.onreadystatechange = function () {
                        // Check readyState before timeout as it changes
                        if (xhr.readyState === 4) {
                          // Allow onerror to be called first,
                          // but that will not handle a native abort
                          // Also, save errorCallback to a variable
                          // as xhr.onerror cannot be accessed
                          window.setTimeout(function () {
                            if (callback) {
                              errorCallback()
                            }
                          })
                        }
                      }
                    }

                    // Create the abort callback
                    callback = callback("abort")

                    try {
                      // Do send the request (this may raise an exception)
                      xhr.send((options.hasContent && options.data) || null)
                    } catch (e) {
                      // trac-14683: Only rethrow if this hasn't been notified as an error yet
                      if (callback) {
                        throw e
                      }
                    }
                  },

                  abort: function () {
                    if (callback) {
                      callback()
                    }
                  },
                }
              }
            })

            // Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
            jQuery.ajaxPrefilter(function (s) {
              if (s.crossDomain) {
                s.contents.script = false
              }
            })

            // Install script dataType
            jQuery.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, " +
                  "application/ecmascript, application/x-ecmascript",
              },
              contents: {
                script: /\b(?:java|ecma)script\b/,
              },
              converters: {
                "text script": function (text) {
                  jQuery.globalEval(text)
                  return text
                },
              },
            })

            // Handle cache's special case and crossDomain
            jQuery.ajaxPrefilter("script", function (s) {
              if (s.cache === undefined) {
                s.cache = false
              }
              if (s.crossDomain) {
                s.type = "GET"
              }
            })

            // Bind script tag hack transport
            jQuery.ajaxTransport("script", function (s) {
              // This transport only deals with cross domain or forced-by-attrs requests
              if (s.crossDomain || s.scriptAttrs) {
                var script, callback
                return {
                  send: function (_, complete) {
                    script = jQuery("<script>")
                      .attr(s.scriptAttrs || {})
                      .prop({ charset: s.scriptCharset, src: s.url })
                      .on(
                        "load error",
                        (callback = function (evt) {
                          script.remove()
                          callback = null
                          if (evt) {
                            complete(evt.type === "error" ? 404 : 200, evt.type)
                          }
                        }),
                      )

                    // Use native DOM manipulation to avoid our domManip AJAX trickery
                    document.head.appendChild(script[0])
                  },
                  abort: function () {
                    if (callback) {
                      callback()
                    }
                  },
                }
              }
            })

            var oldCallbacks = [],
              rjsonp = /(=)\?(?=&|$)|\?\?/

            // Default jsonp settings
            jQuery.ajaxSetup({
              jsonp: "callback",
              jsonpCallback: function () {
                var callback =
                  oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++
                this[callback] = true
                return callback
              },
            })

            // Detect, normalize options and install callbacks for jsonp requests
            jQuery.ajaxPrefilter(
              "json jsonp",
              function (s, originalSettings, jqXHR) {
                var callbackName,
                  overwritten,
                  responseContainer,
                  jsonProp =
                    s.jsonp !== false &&
                    (rjsonp.test(s.url)
                      ? "url"
                      : typeof s.data === "string" &&
                        (s.contentType || "").indexOf(
                          "application/x-www-form-urlencoded",
                        ) === 0 &&
                        rjsonp.test(s.data) &&
                        "data")

                // Handle iff the expected data type is "jsonp" or we have a parameter to set
                if (jsonProp || s.dataTypes[0] === "jsonp") {
                  // Get callback name, remembering preexisting value associated with it
                  callbackName = s.jsonpCallback = isFunction(s.jsonpCallback)
                    ? s.jsonpCallback()
                    : s.jsonpCallback

                  // Insert callback into url or form data
                  if (jsonProp) {
                    s[jsonProp] = s[jsonProp].replace(
                      rjsonp,
                      "$1" + callbackName,
                    )
                  } else if (s.jsonp !== false) {
                    s.url +=
                      (rquery.test(s.url) ? "&" : "?") +
                      s.jsonp +
                      "=" +
                      callbackName
                  }

                  // Use data converter to retrieve json after script execution
                  s.converters["script json"] = function () {
                    if (!responseContainer) {
                      jQuery.error(callbackName + " was not called")
                    }
                    return responseContainer[0]
                  }

                  // Force json dataType
                  s.dataTypes[0] = "json"

                  // Install callback
                  overwritten = window[callbackName]
                  window[callbackName] = function () {
                    responseContainer = arguments
                  }

                  // Clean-up function (fires after converters)
                  jqXHR.always(function () {
                    // If previous value didn't exist - remove it
                    if (overwritten === undefined) {
                      jQuery(window).removeProp(callbackName)

                      // Otherwise restore preexisting value
                    } else {
                      window[callbackName] = overwritten
                    }

                    // Save back as free
                    if (s[callbackName]) {
                      // Make sure that re-using the options doesn't screw things around
                      s.jsonpCallback = originalSettings.jsonpCallback

                      // Save the callback name for future use
                      oldCallbacks.push(callbackName)
                    }

                    // Call if it was a function and we have a response
                    if (responseContainer && isFunction(overwritten)) {
                      overwritten(responseContainer[0])
                    }

                    responseContainer = overwritten = undefined
                  })

                  // Delegate to script
                  return "script"
                }
              },
            )

            // Support: Safari 8 only
            // In Safari 8 documents created via document.implementation.createHTMLDocument
            // collapse sibling forms: the second one becomes a child of the first one.
            // Because of that, this security measure has to be disabled in Safari 8.
            // https://bugs.webkit.org/show_bug.cgi?id=137337
            support.createHTMLDocument = (function () {
              var body = document.implementation.createHTMLDocument("").body
              body.innerHTML = "<form></form><form></form>"
              return body.childNodes.length === 2
            })()

            // Argument "data" should be string of html
            // context (optional): If specified, the fragment will be created in this context,
            // defaults to document
            // keepScripts (optional): If true, will include scripts passed in the html string
            jQuery.parseHTML = function (data, context, keepScripts) {
              if (typeof data !== "string") {
                return []
              }
              if (typeof context === "boolean") {
                keepScripts = context
                context = false
              }

              var base, parsed, scripts

              if (!context) {
                // Stop scripts or inline event handlers from being executed immediately
                // by using document.implementation
                if (support.createHTMLDocument) {
                  context = document.implementation.createHTMLDocument("")

                  // Set the base href for the created document
                  // so any parsed elements with URLs
                  // are based on the document's URL (gh-2965)
                  base = context.createElement("base")
                  base.href = document.location.href
                  context.head.appendChild(base)
                } else {
                  context = document
                }
              }

              parsed = rsingleTag.exec(data)
              scripts = !keepScripts && []

              // Single tag
              if (parsed) {
                return [context.createElement(parsed[1])]
              }

              parsed = buildFragment([data], context, scripts)

              if (scripts && scripts.length) {
                jQuery(scripts).remove()
              }

              return jQuery.merge([], parsed.childNodes)
            }

            /**
             * Load a url into a page
             */
            jQuery.fn.load = function (url, params, callback) {
              var selector,
                type,
                response,
                self = this,
                off = url.indexOf(" ")

              if (off > -1) {
                selector = stripAndCollapse(url.slice(off))
                url = url.slice(0, off)
              }

              // If it's a function
              if (isFunction(params)) {
                // We assume that it's the callback
                callback = params
                params = undefined

                // Otherwise, build a param string
              } else if (params && typeof params === "object") {
                type = "POST"
              }

              // If we have elements to modify, make the request
              if (self.length > 0) {
                jQuery
                  .ajax({
                    url: url,

                    // If "type" variable is undefined, then "GET" method will be used.
                    // Make value of this field explicit since
                    // user can override it through ajaxSetup method
                    type: type || "GET",
                    dataType: "html",
                    data: params,
                  })
                  .done(function (responseText) {
                    // Save response for use in complete callback
                    response = arguments

                    self.html(
                      selector
                        ? // If a selector was specified, locate the right elements in a dummy div
                          // Exclude scripts to avoid IE 'Permission Denied' errors
                          jQuery("<div>")
                            .append(jQuery.parseHTML(responseText))
                            .find(selector)
                        : // Otherwise use the full result
                          responseText,
                    )

                    // If the request succeeds, this function gets "data", "status", "jqXHR"
                    // but they are ignored because response was set above.
                    // If it fails, this function gets "jqXHR", "status", "error"
                  })
                  .always(
                    callback &&
                      function (jqXHR, status) {
                        self.each(function () {
                          callback.apply(
                            this,
                            response || [jqXHR.responseText, status, jqXHR],
                          )
                        })
                      },
                  )
              }

              return this
            }

            jQuery.expr.pseudos.animated = function (elem) {
              return jQuery.grep(jQuery.timers, function (fn) {
                return elem === fn.elem
              }).length
            }

            jQuery.offset = {
              setOffset: function (elem, options, i) {
                var curPosition,
                  curLeft,
                  curCSSTop,
                  curTop,
                  curOffset,
                  curCSSLeft,
                  calculatePosition,
                  position = jQuery.css(elem, "position"),
                  curElem = jQuery(elem),
                  props = {}

                // Set position first, in-case top/left are set even on static elem
                if (position === "static") {
                  elem.style.position = "relative"
                }

                curOffset = curElem.offset()
                curCSSTop = jQuery.css(elem, "top")
                curCSSLeft = jQuery.css(elem, "left")
                calculatePosition =
                  (position === "absolute" || position === "fixed") &&
                  (curCSSTop + curCSSLeft).indexOf("auto") > -1

                // Need to be able to calculate position if either
                // top or left is auto and position is either absolute or fixed
                if (calculatePosition) {
                  curPosition = curElem.position()
                  curTop = curPosition.top
                  curLeft = curPosition.left
                } else {
                  curTop = parseFloat(curCSSTop) || 0
                  curLeft = parseFloat(curCSSLeft) || 0
                }

                if (isFunction(options)) {
                  // Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
                  options = options.call(elem, i, jQuery.extend({}, curOffset))
                }

                if (options.top != null) {
                  props.top = options.top - curOffset.top + curTop
                }
                if (options.left != null) {
                  props.left = options.left - curOffset.left + curLeft
                }

                if ("using" in options) {
                  options.using.call(elem, props)
                } else {
                  curElem.css(props)
                }
              },
            }

            jQuery.fn.extend({
              // offset() relates an element's border box to the document origin
              offset: function (options) {
                // Preserve chaining for setter
                if (arguments.length) {
                  return options === undefined
                    ? this
                    : this.each(function (i) {
                        jQuery.offset.setOffset(this, options, i)
                      })
                }

                var rect,
                  win,
                  elem = this[0]

                if (!elem) {
                  return
                }

                // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
                // Support: IE <=11 only
                // Running getBoundingClientRect on a
                // disconnected node in IE throws an error
                if (!elem.getClientRects().length) {
                  return { top: 0, left: 0 }
                }

                // Get document-relative position by adding viewport scroll to viewport-relative gBCR
                rect = elem.getBoundingClientRect()
                win = elem.ownerDocument.defaultView
                return {
                  top: rect.top + win.pageYOffset,
                  left: rect.left + win.pageXOffset,
                }
              },

              // position() relates an element's margin box to its offset parent's padding box
              // This corresponds to the behavior of CSS absolute positioning
              position: function () {
                if (!this[0]) {
                  return
                }

                var offsetParent,
                  offset,
                  doc,
                  elem = this[0],
                  parentOffset = { top: 0, left: 0 }

                // position:fixed elements are offset from the viewport, which itself always has zero offset
                if (jQuery.css(elem, "position") === "fixed") {
                  // Assume position:fixed implies availability of getBoundingClientRect
                  offset = elem.getBoundingClientRect()
                } else {
                  offset = this.offset()

                  // Account for the *real* offset parent, which can be the document or its root element
                  // when a statically positioned element is identified
                  doc = elem.ownerDocument
                  offsetParent = elem.offsetParent || doc.documentElement
                  while (
                    offsetParent &&
                    (offsetParent === doc.body ||
                      offsetParent === doc.documentElement) &&
                    jQuery.css(offsetParent, "position") === "static"
                  ) {
                    offsetParent = offsetParent.parentNode
                  }
                  if (
                    offsetParent &&
                    offsetParent !== elem &&
                    offsetParent.nodeType === 1
                  ) {
                    // Incorporate borders into its offset, since they are outside its content origin
                    parentOffset = jQuery(offsetParent).offset()
                    parentOffset.top += jQuery.css(
                      offsetParent,
                      "borderTopWidth",
                      true,
                    )
                    parentOffset.left += jQuery.css(
                      offsetParent,
                      "borderLeftWidth",
                      true,
                    )
                  }
                }

                // Subtract parent offsets and element margins
                return {
                  top:
                    offset.top -
                    parentOffset.top -
                    jQuery.css(elem, "marginTop", true),
                  left:
                    offset.left -
                    parentOffset.left -
                    jQuery.css(elem, "marginLeft", true),
                }
              },

              // This method will return documentElement in the following cases:
              // 1) For the element inside the iframe without offsetParent, this method will return
              //    documentElement of the parent window
              // 2) For the hidden or detached element
              // 3) For body or html element, i.e. in case of the html node - it will return itself
              //
              // but those exceptions were never presented as a real life use-cases
              // and might be considered as more preferable results.
              //
              // This logic, however, is not guaranteed and can change at any point in the future
              offsetParent: function () {
                return this.map(function () {
                  var offsetParent = this.offsetParent

                  while (
                    offsetParent &&
                    jQuery.css(offsetParent, "position") === "static"
                  ) {
                    offsetParent = offsetParent.offsetParent
                  }

                  return offsetParent || documentElement
                })
              },
            })

            // Create scrollLeft and scrollTop methods
            jQuery.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (method, prop) {
                var top = "pageYOffset" === prop

                jQuery.fn[method] = function (val) {
                  return access(
                    this,
                    function (elem, method, val) {
                      // Coalesce documents and windows
                      var win
                      if (isWindow(elem)) {
                        win = elem
                      } else if (elem.nodeType === 9) {
                        win = elem.defaultView
                      }

                      if (val === undefined) {
                        return win ? win[prop] : elem[method]
                      }

                      if (win) {
                        win.scrollTo(
                          !top ? val : win.pageXOffset,
                          top ? val : win.pageYOffset,
                        )
                      } else {
                        elem[method] = val
                      }
                    },
                    method,
                    val,
                    arguments.length,
                  )
                }
              },
            )

            // Support: Safari <=7 - 9.1, Chrome <=37 - 49
            // Add the top/left cssHooks using jQuery.fn.position
            // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
            // Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
            // getComputedStyle returns percent when specified for top/left/bottom/right;
            // rather than make the css module depend on the offset module, just check for it here
            jQuery.each(["top", "left"], function (_i, prop) {
              jQuery.cssHooks[prop] = addGetHookIf(
                support.pixelPosition,
                function (elem, computed) {
                  if (computed) {
                    computed = curCSS(elem, prop)

                    // If curCSS returns percentage, fallback to offset
                    return rnumnonpx.test(computed)
                      ? jQuery(elem).position()[prop] + "px"
                      : computed
                  }
                },
              )
            })

            // Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
            jQuery.each(
              { Height: "height", Width: "width" },
              function (name, type) {
                jQuery.each(
                  {
                    padding: "inner" + name,
                    content: type,
                    "": "outer" + name,
                  },
                  function (defaultExtra, funcName) {
                    // Margin is only for outerHeight, outerWidth
                    jQuery.fn[funcName] = function (margin, value) {
                      var chainable =
                          arguments.length &&
                          (defaultExtra || typeof margin !== "boolean"),
                        extra =
                          defaultExtra ||
                          (margin === true || value === true
                            ? "margin"
                            : "border")

                      return access(
                        this,
                        function (elem, type, value) {
                          var doc

                          if (isWindow(elem)) {
                            // $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
                            return funcName.indexOf("outer") === 0
                              ? elem["inner" + name]
                              : elem.document.documentElement["client" + name]
                          }

                          // Get document width or height
                          if (elem.nodeType === 9) {
                            doc = elem.documentElement

                            // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
                            // whichever is greatest
                            return Math.max(
                              elem.body["scroll" + name],
                              doc["scroll" + name],
                              elem.body["offset" + name],
                              doc["offset" + name],
                              doc["client" + name],
                            )
                          }

                          return value === undefined
                            ? // Get width or height on the element, requesting but not forcing parseFloat
                              jQuery.css(elem, type, extra)
                            : // Set width or height on the element
                              jQuery.style(elem, type, value, extra)
                        },
                        type,
                        chainable ? margin : undefined,
                        chainable,
                      )
                    }
                  },
                )
              },
            )

            jQuery.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (_i, type) {
                jQuery.fn[type] = function (fn) {
                  return this.on(type, fn)
                }
              },
            )

            jQuery.fn.extend({
              bind: function (types, data, fn) {
                return this.on(types, null, data, fn)
              },
              unbind: function (types, fn) {
                return this.off(types, null, fn)
              },

              delegate: function (selector, types, data, fn) {
                return this.on(types, selector, data, fn)
              },
              undelegate: function (selector, types, fn) {
                // ( namespace ) or ( selector, types [, fn] )
                return arguments.length === 1
                  ? this.off(selector, "**")
                  : this.off(types, selector || "**", fn)
              },

              hover: function (fnOver, fnOut) {
                return this.mouseenter(fnOver).mouseleave(fnOut || fnOver)
              },
            })

            jQuery.each(
              (
                "blur focus focusin focusout resize scroll click dblclick " +
                "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
                "change select submit keydown keypress keyup contextmenu"
              ).split(" "),
              function (_i, name) {
                // Handle event binding
                jQuery.fn[name] = function (data, fn) {
                  return arguments.length > 0
                    ? this.on(name, null, data, fn)
                    : this.trigger(name)
                }
              },
            )

            // Support: Android <=4.0 only
            // Make sure we trim BOM and NBSP
            // Require that the "whitespace run" starts from a non-whitespace
            // to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
            var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g

            // Bind a function to a context, optionally partially applying any
            // arguments.
            // jQuery.proxy is deprecated to promote standards (specifically Function#bind)
            // However, it is not slated for removal any time soon
            jQuery.proxy = function (fn, context) {
              var tmp, args, proxy

              if (typeof context === "string") {
                tmp = fn[context]
                context = fn
                fn = tmp
              }

              // Quick check to determine if target is callable, in the spec
              // this throws a TypeError, but we will just return undefined.
              if (!isFunction(fn)) {
                return undefined
              }

              // Simulated bind
              args = slice.call(arguments, 2)
              proxy = function () {
                return fn.apply(
                  context || this,
                  args.concat(slice.call(arguments)),
                )
              }

              // Set the guid of unique handler to the same of original handler, so it can be removed
              proxy.guid = fn.guid = fn.guid || jQuery.guid++

              return proxy
            }

            jQuery.holdReady = function (hold) {
              if (hold) {
                jQuery.readyWait++
              } else {
                jQuery.ready(true)
              }
            }
            jQuery.isArray = Array.isArray
            jQuery.parseJSON = JSON.parse
            jQuery.nodeName = nodeName
            jQuery.isFunction = isFunction
            jQuery.isWindow = isWindow
            jQuery.camelCase = camelCase
            jQuery.type = toType

            jQuery.now = Date.now

            jQuery.isNumeric = function (obj) {
              // As of jQuery 3.0, isNumeric is limited to
              // strings and numbers (primitives or objects)
              // that can be coerced to finite numbers (gh-2662)
              var type = jQuery.type(obj)
              return (
                (type === "number" || type === "string") &&
                // parseFloat NaNs numeric-cast false positives ("")
                // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
                // subtraction forces infinities to NaN
                !isNaN(obj - parseFloat(obj))
              )
            }

            jQuery.trim = function (text) {
              return text == null ? "" : (text + "").replace(rtrim, "$1")
            }

            // Register as a named AMD module, since jQuery can be concatenated with other
            // files that may use define, but not via a proper concatenation script that
            // understands anonymous AMD modules. A named AMD is safest and most robust
            // way to register. Lowercase jquery is used because AMD module names are
            // derived from file names, and jQuery is normally delivered in a lowercase
            // file name. Do this after creating the global so that if an AMD module wants
            // to call noConflict to hide this version of jQuery, it will work.

            // Note that for maximum portability, libraries that are not jQuery should
            // declare themselves as anonymous modules, and avoid setting a global if an
            // AMD loader is present. jQuery is a special case. For more information, see
            // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

            if (true) {
              !((__WEBPACK_AMD_DEFINE_ARRAY__ = []),
              (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                return jQuery
              }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)),
              __WEBPACK_AMD_DEFINE_RESULT__ !== undefined &&
                (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
            }

            var // Map over jQuery in case of overwrite
              _jQuery = window.jQuery,
              // Map over the $ in case of overwrite
              _$ = window.$

            jQuery.noConflict = function (deep) {
              if (window.$ === jQuery) {
                window.$ = _$
              }

              if (deep && window.jQuery === jQuery) {
                window.jQuery = _jQuery
              }

              return jQuery
            }

            // Expose jQuery and $ identifiers, even in AMD
            // (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
            // and CommonJS for browser emulators (trac-13566)
            if (typeof noGlobal === "undefined") {
              window.jQuery = window.$ = jQuery
            }

            return jQuery
          },
        )

        /***/
      },
      /* 4 */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ MotionPathPlugin: () =>
            /* binding */ MotionPathPlugin,
          /* harmony export */ default: () => /* binding */ MotionPathPlugin,
          /* harmony export */
        })
        /* harmony import */ var _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(5)
        /* harmony import */ var _utils_matrix_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(6)
        /*!
         * MotionPathPlugin 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */

        /* eslint-disable */

        var _xProps = "x,translateX,left,marginLeft,xPercent".split(","),
          _yProps = "y,translateY,top,marginTop,yPercent".split(","),
          _DEG2RAD = Math.PI / 180,
          gsap,
          PropTween,
          _getUnit,
          _toArray,
          _getStyleSaver,
          _reverting,
          _getGSAP = function _getGSAP() {
            return (
              gsap ||
              (typeof window !== "undefined" &&
                (gsap = window.gsap) &&
                gsap.registerPlugin &&
                gsap)
            )
          },
          _populateSegmentFromArray = function _populateSegmentFromArray(
            segment,
            values,
            property,
            mode,
          ) {
            //mode: 0 = x but don't fill y yet, 1 = y, 2 = x and fill y with 0.
            var l = values.length,
              si = mode === 2 ? 0 : mode,
              i = 0,
              v

            for (; i < l; i++) {
              segment[si] = v = parseFloat(values[i][property])
              mode === 2 && (segment[si + 1] = 0)
              si += 2
            }

            return segment
          },
          _getPropNum = function _getPropNum(target, prop, unit) {
            return parseFloat(target._gsap.get(target, prop, unit || "px")) || 0
          },
          _relativize = function _relativize(segment) {
            var x = segment[0],
              y = segment[1],
              i

            for (i = 2; i < segment.length; i += 2) {
              x = segment[i] += x
              y = segment[i + 1] += y
            }
          },
       
          _segmentToRawPath = function _segmentToRawPath(
            plugin,
            segment,
            target,
            x,
            y,
            slicer,
            vars,
            unitX,
            unitY,
          ) {
            if (vars.type === "cubic") {
              segment = [segment]
            } else {
              vars.fromCurrent !== false &&
                segment.unshift(
                  _getPropNum(target, x, unitX),
                  y ? _getPropNum(target, y, unitY) : 0,
                )
              vars.relative && _relativize(segment)
              var pointFunc = y
                ? _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.pointsToSegment
                : _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.flatPointsToSegment
              segment = [pointFunc(segment, vars.curviness)]
            }

            segment = slicer(_align(segment, target, vars))

            _addDimensionalPropTween(plugin, target, x, segment, "x", unitX)

            y &&
              _addDimensionalPropTween(plugin, target, y, segment, "y", unitY)
            return (0,
            _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.cacheRawPathMeasurements)(
              segment,
              vars.resolution || (vars.curviness === 0 ? 20 : 12),
            ) //when curviness is 0, it creates control points right on top of the anchors which makes it more sensitive to resolution, thus we change the default accordingly.
          },
          _emptyFunc = function _emptyFunc(v) {
            return v
          },
          _numExp = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
          _originToPoint = function _originToPoint(
            element,
            origin,
            parentMatrix,
          ) {
            // origin is an array of normalized values (0-1) in relation to the width/height, so [0.5, 0.5] would be the center. It can also be "auto" in which case it will be the top left unless it's a <path>, when it will start at the beginning of the path itself.
            var m = (0,
              _utils_matrix_js__WEBPACK_IMPORTED_MODULE_1__.getGlobalMatrix)(
                element,
              ),
              x = 0,
              y = 0,
              svg

            if ((element.tagName + "").toLowerCase() === "svg") {
              svg = element.viewBox.baseVal
              svg.width ||
                (svg = {
                  width: +element.getAttribute("width"),
                  height: +element.getAttribute("height"),
                })
            } else {
              svg = origin && element.getBBox && element.getBBox()
            }

            if (origin && origin !== "auto") {
              x = origin.push
                ? origin[0] * (svg ? svg.width : element.offsetWidth || 0)
                : origin.x
              y = origin.push
                ? origin[1] * (svg ? svg.height : element.offsetHeight || 0)
                : origin.y
            }

            return parentMatrix.apply(
              x || y
                ? m.apply({
                    x: x,
                    y: y,
                  })
                : {
                    x: m.e,
                    y: m.f,
                  },
            )
          },
          _getAlignMatrix = function _getAlignMatrix(
            fromElement,
            toElement,
            fromOrigin,
            toOrigin,
          ) {
            var parentMatrix = (0,
              _utils_matrix_js__WEBPACK_IMPORTED_MODULE_1__.getGlobalMatrix)(
                fromElement.parentNode,
                true,
                true,
              ),
              m = parentMatrix
                .clone()
                .multiply(
                  (0,
                  _utils_matrix_js__WEBPACK_IMPORTED_MODULE_1__.getGlobalMatrix)(
                    toElement,
                  ),
                ),
              fromPoint = _originToPoint(fromElement, fromOrigin, parentMatrix),
              _originToPoint2 = _originToPoint(
                toElement,
                toOrigin,
                parentMatrix,
              ),
              x = _originToPoint2.x,
              y = _originToPoint2.y,
              p

            m.e = m.f = 0

            if (
              toOrigin === "auto" &&
              toElement.getTotalLength &&
              toElement.tagName.toLowerCase() === "path"
            ) {
              p = toElement.getAttribute("d").match(_numExp) || []
              p = m.apply({
                x: +p[0],
                y: +p[1],
              })
              x += p.x
              y += p.y
            } //if (p || (toElement.getBBox && fromElement.getBBox && toElement.ownerSVGElement === fromElement.ownerSVGElement)) {

            if (p) {
              p = m.apply(toElement.getBBox())
              x -= p.x
              y -= p.y
            }

            m.e = x - fromPoint.x
            m.f = y - fromPoint.y
            return m
          },
          _align = function _align(rawPath, target, _ref) {
            var align = _ref.align,
              matrix = _ref.matrix,
              offsetX = _ref.offsetX,
              offsetY = _ref.offsetY,
              alignOrigin = _ref.alignOrigin

            var x = rawPath[0][0],
              y = rawPath[0][1],
              curX = _getPropNum(target, "x"),
              curY = _getPropNum(target, "y"),
              alignTarget,
              m,
              p

            if (!rawPath || !rawPath.length) {
              return (0,
              _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.getRawPath)(
                "M0,0L0,0",
              )
            }

            if (align) {
              if (
                align === "self" ||
                (alignTarget = _toArray(align)[0] || target) === target
              ) {
                ;(0,
                _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.transformRawPath)(
                  rawPath,
                  1,
                  0,
                  0,
                  1,
                  curX - x,
                  curY - y,
                )
              } else {
                if (alignOrigin && alignOrigin[2] !== false) {
                  gsap.set(target, {
                    transformOrigin:
                      alignOrigin[0] * 100 + "% " + alignOrigin[1] * 100 + "%",
                  })
                } else {
                  alignOrigin = [
                    _getPropNum(target, "xPercent") / -100,
                    _getPropNum(target, "yPercent") / -100,
                  ]
                }

                m = _getAlignMatrix(target, alignTarget, alignOrigin, "auto")
                p = m.apply({
                  x: x,
                  y: y,
                })
                ;(0,
                _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.transformRawPath)(
                  rawPath,
                  m.a,
                  m.b,
                  m.c,
                  m.d,
                  curX + m.e - (p.x - m.e),
                  curY + m.f - (p.y - m.f),
                )
              }
            }

            if (matrix) {
              ;(0,
              _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.transformRawPath)(
                rawPath,
                matrix.a,
                matrix.b,
                matrix.c,
                matrix.d,
                matrix.e,
                matrix.f,
              )
            } else if (offsetX || offsetY) {
              ;(0,
              _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.transformRawPath)(
                rawPath,
                1,
                0,
                0,
                1,
                offsetX || 0,
                offsetY || 0,
              )
            }

            return rawPath
          },
          _addDimensionalPropTween = function _addDimensionalPropTween(
            plugin,
            target,
            property,
            rawPath,
            pathProperty,
            forceUnit,
          ) {
            var cache = target._gsap,
              harness = cache.harness,
              alias = harness && harness.aliases && harness.aliases[property],
              prop = alias && alias.indexOf(",") < 0 ? alias : property,
              pt = (plugin._pt = new PropTween(
                plugin._pt,
                target,
                prop,
                0,
                0,
                _emptyFunc,
                0,
                cache.set(target, prop, plugin),
              ))
            pt.u = _getUnit(cache.get(target, prop, forceUnit)) || 0
            pt.path = rawPath
            pt.pp = pathProperty

            plugin._props.push(prop)
          },
          _sliceModifier = function _sliceModifier(start, end) {
            return function (rawPath) {
              return start || end !== 1
                ? (0,
                  _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.sliceRawPath)(
                    rawPath,
                    start,
                    end,
                  )
                : rawPath
            }
          }

        var MotionPathPlugin = {
          version: "3.12.2",
          name: "motionPath",
          register: function register(core, Plugin, propTween) {
            gsap = core
            _getUnit = gsap.utils.getUnit
            _toArray = gsap.utils.toArray
            _getStyleSaver = gsap.core.getStyleSaver

            _reverting = gsap.core.reverting || function () {}

            PropTween = propTween
          },
          init: function init(target, vars, tween) {
            if (!gsap) {
              console.warn("Please gsap.registerPlugin(MotionPathPlugin)")
              return false
            }

            if (!(typeof vars === "object" && !vars.style) || !vars.path) {
              vars = {
                path: vars,
              }
            }

            var rawPaths = [],
              _vars = vars,
              path = _vars.path,
              autoRotate = _vars.autoRotate,
              unitX = _vars.unitX,
              unitY = _vars.unitY,
              x = _vars.x,
              y = _vars.y,
              firstObj = path[0],
              slicer = _sliceModifier(vars.start, "end" in vars ? vars.end : 1),
              rawPath,
              p

            this.rawPaths = rawPaths
            this.target = target
            this.tween = tween
            this.styles = _getStyleSaver && _getStyleSaver(target, "transform")

            if ((this.rotate = autoRotate || autoRotate === 0)) {
              //get the rotational data FIRST so that the setTransform() method is called in the correct order in the render() loop - rotation gets set last.
              this.rOffset = parseFloat(autoRotate) || 0
              this.radians = !!vars.useRadians
              this.rProp = vars.rotation || "rotation" // rotation property

              this.rSet = target._gsap.set(target, this.rProp, this) // rotation setter

              this.ru = _getUnit(target._gsap.get(target, this.rProp)) || 0 // rotation units
            }

            if (
              Array.isArray(path) &&
              !("closed" in path) &&
              typeof firstObj !== "number"
            ) {
              for (p in firstObj) {
                if (!x && ~_xProps.indexOf(p)) {
                  x = p
                } else if (!y && ~_yProps.indexOf(p)) {
                  y = p
                }
              }

              if (x && y) {
                //correlated values
                rawPaths.push(
                  _segmentToRawPath(
                    this,
                    _populateSegmentFromArray(
                      _populateSegmentFromArray([], path, x, 0),
                      path,
                      y,
                      1,
                    ),
                    target,
                    x,
                    y,
                    slicer,
                    vars,
                    unitX || _getUnit(path[0][x]),
                    unitY || _getUnit(path[0][y]),
                  ),
                )
              } else {
                x = y = 0
              }

              for (p in firstObj) {
                p !== x &&
                  p !== y &&
                  rawPaths.push(
                    _segmentToRawPath(
                      this,
                      _populateSegmentFromArray([], path, p, 2),
                      target,
                      p,
                      0,
                      slicer,
                      vars,
                      _getUnit(path[0][p]),
                    ),
                  )
              }
            } else {
              rawPath = slicer(
                _align(
                  (0, _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.getRawPath)(
                    vars.path,
                  ),
                  target,
                  vars,
                ),
              )
              ;(0,
              _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.cacheRawPathMeasurements)(
                rawPath,
                vars.resolution,
              )
              rawPaths.push(rawPath)

              _addDimensionalPropTween(
                this,
                target,
                vars.x || "x",
                rawPath,
                "x",
                vars.unitX || "px",
              )

              _addDimensionalPropTween(
                this,
                target,
                vars.y || "y",
                rawPath,
                "y",
                vars.unitY || "px",
              )
            }
          },
          render: function render(ratio, data) {
            var rawPaths = data.rawPaths,
              i = rawPaths.length,
              pt = data._pt

            if (data.tween._time || !_reverting()) {
              if (ratio > 1) {
                ratio = 1
              } else if (ratio < 0) {
                ratio = 0
              }

              while (i--) {
                ;(0,
                _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.getPositionOnPath)(
                  rawPaths[i],
                  ratio,
                  !i && data.rotate,
                  rawPaths[i],
                )
              }

              while (pt) {
                pt.set(pt.t, pt.p, pt.path[pt.pp] + pt.u, pt.d, ratio)
                pt = pt._next
              }

              data.rotate &&
                data.rSet(
                  data.target,
                  data.rProp,
                  rawPaths[0].angle * (data.radians ? _DEG2RAD : 1) +
                    data.rOffset +
                    data.ru,
                  data,
                  ratio,
                )
            } else {
              data.styles.revert()
            }
          },
          getLength: function getLength(path) {
            return (0,
            _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.cacheRawPathMeasurements)(
              (0, _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.getRawPath)(
                path,
              ),
            ).totalLength
          },
          sliceRawPath:
            _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.sliceRawPath,
          getRawPath: _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.getRawPath,
          pointsToSegment:
            _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.pointsToSegment,
          stringToRawPath:
            _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.stringToRawPath,
          rawPathToString:
            _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.rawPathToString,
          transformRawPath:
            _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.transformRawPath,
          getGlobalMatrix:
            _utils_matrix_js__WEBPACK_IMPORTED_MODULE_1__.getGlobalMatrix,
          getPositionOnPath:
            _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.getPositionOnPath,
          cacheRawPathMeasurements:
            _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.cacheRawPathMeasurements,
          convertToPath: function convertToPath(targets, swap) {
            return _toArray(targets).map(function (target) {
              return (0,
              _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.convertToPath)(
                target,
                swap !== false,
              )
            })
          },
          convertCoordinates: function convertCoordinates(
            fromElement,
            toElement,
            point,
          ) {
            var m = (0,
            _utils_matrix_js__WEBPACK_IMPORTED_MODULE_1__.getGlobalMatrix)(
              toElement,
              true,
              true,
            ).multiply(
              (0,
              _utils_matrix_js__WEBPACK_IMPORTED_MODULE_1__.getGlobalMatrix)(
                fromElement,
              ),
            )
            return point ? m.apply(point) : m
          },
          getAlignMatrix: _getAlignMatrix,
          getRelativePosition: function getRelativePosition(
            fromElement,
            toElement,
            fromOrigin,
            toOrigin,
          ) {
            var m = _getAlignMatrix(
              fromElement,
              toElement,
              fromOrigin,
              toOrigin,
            )

            return {
              x: m.e,
              y: m.f,
            }
          },
          arrayToRawPath: function arrayToRawPath(value, vars) {
            vars = vars || {}

            var segment = _populateSegmentFromArray(
              _populateSegmentFromArray([], value, vars.x || "x", 0),
              value,
              vars.y || "y",
              1,
            )

            vars.relative && _relativize(segment)
            return [
              vars.type === "cubic"
                ? segment
                : (0,
                  _utils_paths_js__WEBPACK_IMPORTED_MODULE_0__.pointsToSegment)(
                    segment,
                    vars.curviness,
                  ),
            ]
          },
        }
        _getGSAP() && gsap.registerPlugin(MotionPathPlugin)

        /***/
      },
      /* 5 */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getRawPath: () => /* binding */ getRawPath,
          /* harmony export */ copyRawPath: () => /* binding */ copyRawPath,
          /* harmony export */ reverseSegment: () =>
            /* binding */ reverseSegment,
          /* harmony export */ convertToPath: () => /* binding */ convertToPath,
          /* harmony export */ getRotationAtProgress: () =>
            /* binding */ getRotationAtProgress,
          /* harmony export */ sliceRawPath: () => /* binding */ sliceRawPath,
          /* harmony export */ cacheRawPathMeasurements: () =>
            /* binding */ cacheRawPathMeasurements,
          /* harmony export */ subdivideSegment: () =>
            /* binding */ subdivideSegment,
          /* harmony export */ getPositionOnPath: () =>
            /* binding */ getPositionOnPath,
          /* harmony export */ transformRawPath: () =>
            /* binding */ transformRawPath,
          /* harmony export */ stringToRawPath: () =>
            /* binding */ stringToRawPath,
          /* harmony export */ bezierToPoints: () =>
            /* binding */ bezierToPoints,
          /* harmony export */ flatPointsToSegment: () =>
            /* binding */ flatPointsToSegment,
          /* harmony export */ pointsToSegment: () =>
            /* binding */ pointsToSegment,
          /* harmony export */ simplifyPoints: () =>
            /* binding */ simplifyPoints,
          /* harmony export */ getClosestData: () =>
            /* binding */ getClosestData,
          /* harmony export */ subdivideSegmentNear: () =>
            /* binding */ subdivideSegmentNear,
          /* harmony export */ rawPathToString: () =>
            /* binding */ rawPathToString,
          /* harmony export */
        })
        /*!
         * paths 3.12.2
         * https://greensock.com
         *
         * Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */

        /* eslint-disable */
        var _svgPathExp = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          _numbersExp = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          _scientific = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
          _selectorExp = /(^[#\.][a-z]|[a-y][a-z])/i,
          _DEG2RAD = Math.PI / 180,
          _RAD2DEG = 180 / Math.PI,
          _sin = Math.sin,
          _cos = Math.cos,
          _abs = Math.abs,
          _sqrt = Math.sqrt,
          _atan2 = Math.atan2,
          _largeNum = 1e8,
          _isString = function _isString(value) {
            return typeof value === "string"
          },
          _isNumber = function _isNumber(value) {
            return typeof value === "number"
          },
          _isUndefined = function _isUndefined(value) {
            return typeof value === "undefined"
          },
          _temp = {},
          _temp2 = {},
          _roundingNum = 1e5,
          _wrapProgress = function _wrapProgress(progress) {
            return (
              Math.round(((progress + _largeNum) % 1) * _roundingNum) /
                _roundingNum || (progress < 0 ? 0 : 1)
            )
          },
          //if progress lands on 1, the % will make it 0 which is why we || 1, but not if it's negative because it makes more sense for motion to end at 0 in that case.
          _round = function _round(value) {
            return Math.round(value * _roundingNum) / _roundingNum || 0
          },
          _roundPrecise = function _roundPrecise(value) {
            return Math.round(value * 1e10) / 1e10 || 0
          },
          _splitSegment = function _splitSegment(rawPath, segIndex, i, t) {
            var segment = rawPath[segIndex],
              shift = t === 1 ? 6 : subdivideSegment(segment, i, t)

            if (shift && shift + i + 2 < segment.length) {
              rawPath.splice(segIndex, 0, segment.slice(0, i + shift + 2))
              segment.splice(0, i + shift)
              return 1
            }
          },
          _getSampleIndex = function _getSampleIndex(
            samples,
            length,
            progress,
          ) {
            // slightly slower way than doing this (when there's no lookup): segment.lookup[progress < 1 ? ~~(length / segment.minLength) : segment.lookup.length - 1] || 0;
            var l = samples.length,
              i = ~~(progress * l)

            if (samples[i] > length) {
              while (--i && samples[i] > length) {}

              i < 0 && (i = 0)
            } else {
              while (samples[++i] < length && i < l) {}
            }

            return i < l ? i : l - 1
          },
          _reverseRawPath = function _reverseRawPath(rawPath, skipOuter) {
            var i = rawPath.length
            skipOuter || rawPath.reverse()

            while (i--) {
              rawPath[i].reversed || reverseSegment(rawPath[i])
            }
          },
          _copyMetaData = function _copyMetaData(source, copy) {
            copy.totalLength = source.totalLength

            if (source.samples) {
              //segment
              copy.samples = source.samples.slice(0)
              copy.lookup = source.lookup.slice(0)
              copy.minLength = source.minLength
              copy.resolution = source.resolution
            } else if (source.totalPoints) {
              //rawPath
              copy.totalPoints = source.totalPoints
            }

            return copy
          },
          //pushes a new segment into a rawPath, but if its starting values match the ending values of the last segment, it'll merge it into that same segment (to reduce the number of segments)
          _appendOrMerge = function _appendOrMerge(rawPath, segment) {
            var index = rawPath.length,
              prevSeg = rawPath[index - 1] || [],
              l = prevSeg.length

            if (
              index &&
              segment[0] === prevSeg[l - 2] &&
              segment[1] === prevSeg[l - 1]
            ) {
              segment = prevSeg.concat(segment.slice(2))
              index--
            }

            rawPath[index] = segment
          },
          _bestDistance
        /* TERMINOLOGY
 - RawPath - an array of arrays, one for each Segment. A single RawPath could have multiple "M" commands, defining Segments (paths aren't always connected).
 - Segment - an array containing a sequence of Cubic Bezier coordinates in alternating x, y, x, y format. Starting anchor, then control point 1, control point 2, and ending anchor, then the next control point 1, control point 2, anchor, etc. Uses less memory than an array with a bunch of {x, y} points.
 - Bezier - a single cubic Bezier with a starting anchor, two control points, and an ending anchor.
 - the variable "t" is typically the position along an individual Bezier path (time) and it's NOT linear, meaning it could accelerate/decelerate based on the control points whereas the "p" or "progress" value is linearly mapped to the whole path, so it shouldn't really accelerate/decelerate based on control points. So a progress of 0.2 would be almost exactly 20% along the path. "t" is ONLY in an individual Bezier piece.
 */
        //accepts basic selector text, a path instance, a RawPath instance, or a Segment and returns a RawPath (makes it easy to homogenize things). If an element or selector text is passed in, it'll also cache the value so that if it's queried again, it'll just take the path data from there instead of parsing it all over again (as long as the path data itself hasn't changed - it'll check).

        function getRawPath(value) {
          value =
            _isString(value) && _selectorExp.test(value)
              ? document.querySelector(value) || value
              : value
          var e = value.getAttribute ? value : 0,
            rawPath

          if (e && (value = value.getAttribute("d"))) {
            //implements caching
            if (!e._gsPath) {
              e._gsPath = {}
            }

            rawPath = e._gsPath[value]
            return rawPath && !rawPath._dirty
              ? rawPath
              : (e._gsPath[value] = stringToRawPath(value))
          }

          return !value
            ? console.warn(
                "Expecting a <path> element or an SVG path data string",
              )
            : _isString(value)
            ? stringToRawPath(value)
            : _isNumber(value[0])
            ? [value]
            : value
        } //copies a RawPath WITHOUT the length meta data (for speed)

        function copyRawPath(rawPath) {
          var a = [],
            i = 0

          for (; i < rawPath.length; i++) {
            a[i] = _copyMetaData(rawPath[i], rawPath[i].slice(0))
          }

          return _copyMetaData(rawPath, a)
        }
        function reverseSegment(segment) {
          var i = 0,
            y
          segment.reverse() //this will invert the order y, x, y, x so we must flip it back.

          for (; i < segment.length; i += 2) {
            y = segment[i]
            segment[i] = segment[i + 1]
            segment[i + 1] = y
          }

          segment.reversed = !segment.reversed
        }

        var _createPath = function _createPath(e, ignore) {
            var path = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path",
              ),
              attr = [].slice.call(e.attributes),
              i = attr.length,
              name
            ignore = "," + ignore + ","

            while (--i > -1) {
              name = attr[i].nodeName.toLowerCase() //in Microsoft Edge, if you don't set the attribute with a lowercase name, it doesn't render correctly! Super weird.

              if (ignore.indexOf("," + name + ",") < 0) {
                path.setAttributeNS(null, name, attr[i].nodeValue)
              }
            }

            return path
          },
          _typeAttrs = {
            rect: "rx,ry,x,y,width,height",
            circle: "r,cx,cy",
            ellipse: "rx,ry,cx,cy",
            line: "x1,x2,y1,y2",
          },
          _attrToObj = function _attrToObj(e, attrs) {
            var props = attrs ? attrs.split(",") : [],
              obj = {},
              i = props.length

            while (--i > -1) {
              obj[props[i]] = +e.getAttribute(props[i]) || 0
            }

            return obj
          } //converts an SVG shape like <circle>, <rect>, <polygon>, <polyline>, <ellipse>, etc. to a <path>, swapping it in and copying the attributes to match.

        function convertToPath(element, swap) {
          var type = element.tagName.toLowerCase(),
            circ = 0.552284749831,
            data,
            x,
            y,
            r,
            ry,
            path,
            rcirc,
            rycirc,
            points,
            w,
            h,
            x2,
            x3,
            x4,
            x5,
            x6,
            y2,
            y3,
            y4,
            y5,
            y6,
            attr

          if (type === "path" || !element.getBBox) {
            return element
          }

          path = _createPath(
            element,
            "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points",
          )
          attr = _attrToObj(element, _typeAttrs[type])

          if (type === "rect") {
            r = attr.rx
            ry = attr.ry || r
            x = attr.x
            y = attr.y
            w = attr.width - r * 2
            h = attr.height - ry * 2

            if (r || ry) {
              //if there are rounded corners, render cubic beziers
              x2 = x + r * (1 - circ)
              x3 = x + r
              x4 = x3 + w
              x5 = x4 + r * circ
              x6 = x4 + r
              y2 = y + ry * (1 - circ)
              y3 = y + ry
              y4 = y3 + h
              y5 = y4 + ry * circ
              y6 = y4 + ry
              data =
                "M" +
                x6 +
                "," +
                y3 +
                " V" +
                y4 +
                " C" +
                [
                  x6,
                  y5,
                  x5,
                  y6,
                  x4,
                  y6,
                  x4 - (x4 - x3) / 3,
                  y6,
                  x3 + (x4 - x3) / 3,
                  y6,
                  x3,
                  y6,
                  x2,
                  y6,
                  x,
                  y5,
                  x,
                  y4,
                  x,
                  y4 - (y4 - y3) / 3,
                  x,
                  y3 + (y4 - y3) / 3,
                  x,
                  y3,
                  x,
                  y2,
                  x2,
                  y,
                  x3,
                  y,
                  x3 + (x4 - x3) / 3,
                  y,
                  x4 - (x4 - x3) / 3,
                  y,
                  x4,
                  y,
                  x5,
                  y,
                  x6,
                  y2,
                  x6,
                  y3,
                ].join(",") +
                "z"
            } else {
              data =
                "M" +
                (x + w) +
                "," +
                y +
                " v" +
                h +
                " h" +
                -w +
                " v" +
                -h +
                " h" +
                w +
                "z"
            }
          } else if (type === "circle" || type === "ellipse") {
            if (type === "circle") {
              r = ry = attr.r
              rycirc = r * circ
            } else {
              r = attr.rx
              ry = attr.ry
              rycirc = ry * circ
            }

            x = attr.cx
            y = attr.cy
            rcirc = r * circ
            data =
              "M" +
              (x + r) +
              "," +
              y +
              " C" +
              [
                x + r,
                y + rycirc,
                x + rcirc,
                y + ry,
                x,
                y + ry,
                x - rcirc,
                y + ry,
                x - r,
                y + rycirc,
                x - r,
                y,
                x - r,
                y - rycirc,
                x - rcirc,
                y - ry,
                x,
                y - ry,
                x + rcirc,
                y - ry,
                x + r,
                y - rycirc,
                x + r,
                y,
              ].join(",") +
              "z"
          } else if (type === "line") {
            data =
              "M" + attr.x1 + "," + attr.y1 + " L" + attr.x2 + "," + attr.y2 //previously, we just converted to "Mx,y Lx,y" but Safari has bugs that cause that not to render properly when using a stroke-dasharray that's not fully visible! Using a cubic bezier fixes that issue.
          } else if (type === "polyline" || type === "polygon") {
            points =
              (element.getAttribute("points") + "").match(_numbersExp) || []
            x = points.shift()
            y = points.shift()
            data = "M" + x + "," + y + " L" + points.join(",")

            if (type === "polygon") {
              data += "," + x + "," + y + "z"
            }
          }

          path.setAttribute(
            "d",
            rawPathToString((path._gsRawPath = stringToRawPath(data))),
          )

          if (swap && element.parentNode) {
            element.parentNode.insertBefore(path, element)
            element.parentNode.removeChild(element)
          }

          return path
        } //returns the rotation (in degrees) at a particular progress on a rawPath (the slope of the tangent)

        function getRotationAtProgress(rawPath, progress) {
          var d = getProgressData(
            rawPath,
            progress >= 1 ? 1 - 1e-9 : progress ? progress : 1e-9,
          )
          return getRotationAtBezierT(d.segment, d.i, d.t)
        }

        function getRotationAtBezierT(segment, i, t) {
          var a = segment[i],
            b = segment[i + 2],
            c = segment[i + 4],
            x
          a += (b - a) * t
          b += (c - b) * t
          a += (b - a) * t
          x = b + (c + (segment[i + 6] - c) * t - b) * t - a
          a = segment[i + 1]
          b = segment[i + 3]
          c = segment[i + 5]
          a += (b - a) * t
          b += (c - b) * t
          a += (b - a) * t
          return _round(
            _atan2(b + (c + (segment[i + 7] - c) * t - b) * t - a, x) *
              _RAD2DEG,
          )
        }

        function sliceRawPath(rawPath, start, end) {
          end = _isUndefined(end) ? 1 : _roundPrecise(end) || 0 // we must round to avoid issues like 4.15 / 8 = 0.8300000000000001 instead of 0.83 or 2.8 / 5 = 0.5599999999999999 instead of 0.56 and if someone is doing a loop like start: 2.8 / 0.5, end: 2.8 / 0.5 + 1.

          start = _roundPrecise(start) || 0
          var loops = Math.max(0, ~~(_abs(end - start) - 1e-8)),
            path = copyRawPath(rawPath)

          if (start > end) {
            start = 1 - start
            end = 1 - end

            _reverseRawPath(path)

            path.totalLength = 0
          }

          if (start < 0 || end < 0) {
            var offset = Math.abs(~~Math.min(start, end)) + 1
            start += offset
            end += offset
          }

          path.totalLength || cacheRawPathMeasurements(path)
          var wrap = end > 1,
            s = getProgressData(path, start, _temp, true),
            e = getProgressData(path, end, _temp2),
            eSeg = e.segment,
            sSeg = s.segment,
            eSegIndex = e.segIndex,
            sSegIndex = s.segIndex,
            ei = e.i,
            si = s.i,
            sameSegment = sSegIndex === eSegIndex,
            sameBezier = ei === si && sameSegment,
            wrapsBehind,
            sShift,
            eShift,
            i,
            copy,
            totalSegments,
            l,
            j

          if (wrap || loops) {
            wrapsBehind =
              eSegIndex < sSegIndex ||
              (sameSegment && ei < si) ||
              (sameBezier && e.t < s.t)

            if (_splitSegment(path, sSegIndex, si, s.t)) {
              sSegIndex++

              if (!wrapsBehind) {
                eSegIndex++

                if (sameBezier) {
                  e.t = (e.t - s.t) / (1 - s.t)
                  ei = 0
                } else if (sameSegment) {
                  ei -= si
                }
              }
            }

            if (Math.abs(1 - (end - start)) < 1e-5) {
              eSegIndex = sSegIndex - 1
            } else if (!e.t && eSegIndex) {
              eSegIndex--
            } else if (_splitSegment(path, eSegIndex, ei, e.t) && wrapsBehind) {
              sSegIndex++
            }

            if (s.t === 1) {
              sSegIndex = (sSegIndex + 1) % path.length
            }

            copy = []
            totalSegments = path.length
            l = 1 + totalSegments * loops
            j = sSegIndex
            l += (totalSegments - sSegIndex + eSegIndex) % totalSegments

            for (i = 0; i < l; i++) {
              _appendOrMerge(copy, path[j++ % totalSegments])
            }

            path = copy
          } else {
            eShift = e.t === 1 ? 6 : subdivideSegment(eSeg, ei, e.t)

            if (start !== end) {
              sShift = subdivideSegment(sSeg, si, sameBezier ? s.t / e.t : s.t)
              sameSegment && (eShift += sShift)
              eSeg.splice(ei + eShift + 2)
              ;(sShift || si) && sSeg.splice(0, si + sShift)
              i = path.length

              while (i--) {
                //chop off any extra segments
                ;(i < sSegIndex || i > eSegIndex) && path.splice(i, 1)
              }
            } else {
              eSeg.angle = getRotationAtBezierT(eSeg, ei + eShift, 0) //record the value before we chop because it'll be impossible to determine the angle after its length is 0!

              ei += eShift
              s = eSeg[ei]
              e = eSeg[ei + 1]
              eSeg.length = eSeg.totalLength = 0
              eSeg.totalPoints = path.totalPoints = 8
              eSeg.push(s, e, s, e, s, e, s, e)
            }
          }

          path.totalLength = 0
          return path
        } //measures a Segment according to its resolution (so if segment.resolution is 6, for example, it'll take 6 samples equally across each Bezier) and create/populate a "samples" Array that has the length up to each of those sample points (always increasing from the start) as well as a "lookup" array that's broken up according to the smallest distance between 2 samples. This gives us a very fast way of looking up a progress position rather than looping through all the points/Beziers. You can optionally have it only measure a subset, starting at startIndex and going for a specific number of beziers (remember, there are 3 x/y pairs each, for a total of 6 elements for each Bezier). It will also populate a "totalLength" property, but that's not generally super accurate because by default it'll only take 6 samples per Bezier. But for performance reasons, it's perfectly adequate for measuring progress values along the path. If you need a more accurate totalLength, either increase the resolution or use the more advanced bezierToPoints() method which keeps adding points until they don't deviate by more than a certain precision value.

        function measureSegment(segment, startIndex, bezierQty) {
          startIndex = startIndex || 0

          if (!segment.samples) {
            segment.samples = []
            segment.lookup = []
          }

          var resolution = ~~segment.resolution || 12,
            inc = 1 / resolution,
            endIndex = bezierQty
              ? startIndex + bezierQty * 6 + 1
              : segment.length,
            x1 = segment[startIndex],
            y1 = segment[startIndex + 1],
            samplesIndex = startIndex ? (startIndex / 6) * resolution : 0,
            samples = segment.samples,
            lookup = segment.lookup,
            min = (startIndex ? segment.minLength : _largeNum) || _largeNum,
            prevLength = samples[samplesIndex + bezierQty * resolution - 1],
            length = startIndex ? samples[samplesIndex - 1] : 0,
            i,
            j,
            x4,
            x3,
            x2,
            xd,
            xd1,
            y4,
            y3,
            y2,
            yd,
            yd1,
            inv,
            t,
            lengthIndex,
            l,
            segLength
          samples.length = lookup.length = 0

          for (j = startIndex + 2; j < endIndex; j += 6) {
            x4 = segment[j + 4] - x1
            x3 = segment[j + 2] - x1
            x2 = segment[j] - x1
            y4 = segment[j + 5] - y1
            y3 = segment[j + 3] - y1
            y2 = segment[j + 1] - y1
            xd = xd1 = yd = yd1 = 0

            if (
              _abs(x4) < 0.01 &&
              _abs(y4) < 0.01 &&
              _abs(x2) + _abs(y2) < 0.01
            ) {
              //dump points that are sufficiently close (basically right on top of each other, making a bezier super tiny or 0 length)
              if (segment.length > 8) {
                segment.splice(j, 6)
                j -= 6
                endIndex -= 6
              }
            } else {
              for (i = 1; i <= resolution; i++) {
                t = inc * i
                inv = 1 - t
                xd =
                  xd1 - (xd1 = (t * t * x4 + 3 * inv * (t * x3 + inv * x2)) * t)
                yd =
                  yd1 - (yd1 = (t * t * y4 + 3 * inv * (t * y3 + inv * y2)) * t)
                l = _sqrt(yd * yd + xd * xd)

                if (l < min) {
                  min = l
                }

                length += l
                samples[samplesIndex++] = length
              }
            }

            x1 += x4
            y1 += y4
          }

          if (prevLength) {
            prevLength -= length

            for (; samplesIndex < samples.length; samplesIndex++) {
              samples[samplesIndex] += prevLength
            }
          }

          if (samples.length && min) {
            segment.totalLength = segLength = samples[samples.length - 1] || 0
            segment.minLength = min

            if (segLength / min < 9999) {
              // if the lookup would require too many values (memory problem), we skip this and instead we use a loop to lookup values directly in the samples Array
              l = lengthIndex = 0

              for (i = 0; i < segLength; i += min) {
                lookup[l++] =
                  samples[lengthIndex] < i ? ++lengthIndex : lengthIndex
              }
            }
          } else {
            segment.totalLength = samples[0] = 0
          }

          return startIndex ? length - samples[startIndex / 2 - 1] : length
        }

        function cacheRawPathMeasurements(rawPath, resolution) {
          var pathLength, points, i

          for (i = pathLength = points = 0; i < rawPath.length; i++) {
            rawPath[i].resolution = ~~resolution || 12 //steps per Bezier curve (anchor, 2 control points, to anchor)

            points += rawPath[i].length
            pathLength += measureSegment(rawPath[i])
          }

          rawPath.totalPoints = points
          rawPath.totalLength = pathLength
          return rawPath
        } //divide segment[i] at position t (value between 0 and 1, progress along that particular cubic bezier segment that starts at segment[i]). Returns how many elements were spliced into the segment array (either 0 or 6)

        function subdivideSegment(segment, i, t) {
          if (t <= 0 || t >= 1) {
            return 0
          }

          var ax = segment[i],
            ay = segment[i + 1],
            cp1x = segment[i + 2],
            cp1y = segment[i + 3],
            cp2x = segment[i + 4],
            cp2y = segment[i + 5],
            bx = segment[i + 6],
            by = segment[i + 7],
            x1a = ax + (cp1x - ax) * t,
            x2 = cp1x + (cp2x - cp1x) * t,
            y1a = ay + (cp1y - ay) * t,
            y2 = cp1y + (cp2y - cp1y) * t,
            x1 = x1a + (x2 - x1a) * t,
            y1 = y1a + (y2 - y1a) * t,
            x2a = cp2x + (bx - cp2x) * t,
            y2a = cp2y + (by - cp2y) * t
          x2 += (x2a - x2) * t
          y2 += (y2a - y2) * t
          segment.splice(
            i + 2,
            4,
            _round(x1a), //first control point
            _round(y1a),
            _round(x1), //second control point
            _round(y1),
            _round(x1 + (x2 - x1) * t), //new fabricated anchor on line
            _round(y1 + (y2 - y1) * t),
            _round(x2), //third control point
            _round(y2),
            _round(x2a), //fourth control point
            _round(y2a),
          )
          segment.samples &&
            segment.samples.splice(
              ((i / 6) * segment.resolution) | 0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            )
          return 6
        } // returns an object {path, segment, segIndex, i, t}

        function getProgressData(
          rawPath,
          progress,
          decoratee,
          pushToNextIfAtEnd,
        ) {
          decoratee = decoratee || {}
          rawPath.totalLength || cacheRawPathMeasurements(rawPath)

          if (progress < 0 || progress > 1) {
            progress = _wrapProgress(progress)
          }

          var segIndex = 0,
            segment = rawPath[0],
            samples,
            resolution,
            length,
            min,
            max,
            i,
            t

          if (!progress) {
            t = i = segIndex = 0
            segment = rawPath[0]
          } else if (progress === 1) {
            t = 1
            segIndex = rawPath.length - 1
            segment = rawPath[segIndex]
            i = segment.length - 8
          } else {
            if (rawPath.length > 1) {
              //speed optimization: most of the time, there's only one segment so skip the recursion.
              length = rawPath.totalLength * progress
              max = i = 0

              while ((max += rawPath[i++].totalLength) < length) {
                segIndex = i
              }

              segment = rawPath[segIndex]
              min = max - segment.totalLength
              progress = (length - min) / (max - min) || 0
            }

            samples = segment.samples
            resolution = segment.resolution //how many samples per cubic bezier chunk

            length = segment.totalLength * progress
            i = segment.lookup.length
              ? segment.lookup[~~(length / segment.minLength)] || 0
              : _getSampleIndex(samples, length, progress)
            min = i ? samples[i - 1] : 0
            max = samples[i]

            if (max < length) {
              min = max
              max = samples[++i]
            }

            t =
              (1 / resolution) *
              ((length - min) / (max - min) + (i % resolution))
            i = ~~(i / resolution) * 6

            if (pushToNextIfAtEnd && t === 1) {
              if (i + 6 < segment.length) {
                i += 6
                t = 0
              } else if (segIndex + 1 < rawPath.length) {
                i = t = 0
                segment = rawPath[++segIndex]
              }
            }
          }

          decoratee.t = t
          decoratee.i = i
          decoratee.path = rawPath
          decoratee.segment = segment
          decoratee.segIndex = segIndex
          return decoratee
        }

        function getPositionOnPath(rawPath, progress, includeAngle, point) {
          var segment = rawPath[0],
            result = point || {},
            samples,
            resolution,
            length,
            min,
            max,
            i,
            t,
            a,
            inv

          if (progress < 0 || progress > 1) {
            progress = _wrapProgress(progress)
          }

          segment.lookup || cacheRawPathMeasurements(rawPath)

          if (rawPath.length > 1) {
            //speed optimization: most of the time, there's only one segment so skip the recursion.
            length = rawPath.totalLength * progress
            max = i = 0

            while ((max += rawPath[i++].totalLength) < length) {
              segment = rawPath[i]
            }

            min = max - segment.totalLength
            progress = (length - min) / (max - min) || 0
          }

          samples = segment.samples
          resolution = segment.resolution
          length = segment.totalLength * progress
          i = segment.lookup.length
            ? segment.lookup[
                progress < 1
                  ? ~~(length / segment.minLength)
                  : segment.lookup.length - 1
              ] || 0
            : _getSampleIndex(samples, length, progress)
          min = i ? samples[i - 1] : 0
          max = samples[i]

          if (max < length) {
            min = max
            max = samples[++i]
          }

          t =
            (1 / resolution) *
              ((length - min) / (max - min) + (i % resolution)) || 0
          inv = 1 - t
          i = ~~(i / resolution) * 6
          a = segment[i]
          result.x = _round(
            (t * t * (segment[i + 6] - a) +
              3 *
                inv *
                (t * (segment[i + 4] - a) + inv * (segment[i + 2] - a))) *
              t +
              a,
          )
          result.y = _round(
            (t * t * (segment[i + 7] - (a = segment[i + 1])) +
              3 *
                inv *
                (t * (segment[i + 5] - a) + inv * (segment[i + 3] - a))) *
              t +
              a,
          )

          if (includeAngle) {
            result.angle = segment.totalLength
              ? getRotationAtBezierT(
                  segment,
                  i,
                  t >= 1 ? 1 - 1e-9 : t ? t : 1e-9,
                )
              : segment.angle || 0
          }

          return result
        } //applies a matrix transform to RawPath (or a segment in a RawPath) and returns whatever was passed in (it transforms the values in the array(s), not a copy).

        function transformRawPath(rawPath, a, b, c, d, tx, ty) {
          var j = rawPath.length,
            segment,
            l,
            i,
            x,
            y

          while (--j > -1) {
            segment = rawPath[j]
            l = segment.length

            for (i = 0; i < l; i += 2) {
              x = segment[i]
              y = segment[i + 1]
              segment[i] = x * a + y * c + tx
              segment[i + 1] = x * b + y * d + ty
            }
          }

          rawPath._dirty = 1
          return rawPath
        } // translates SVG arc data into a segment (cubic beziers). Angle is in degrees.

        function arcToSegment(
          lastX,
          lastY,
          rx,
          ry,
          angle,
          largeArcFlag,
          sweepFlag,
          x,
          y,
        ) {
          if (lastX === x && lastY === y) {
            return
          }

          rx = _abs(rx)
          ry = _abs(ry)

          var angleRad = (angle % 360) * _DEG2RAD,
            cosAngle = _cos(angleRad),
            sinAngle = _sin(angleRad),
            PI = Math.PI,
            TWOPI = PI * 2,
            dx2 = (lastX - x) / 2,
            dy2 = (lastY - y) / 2,
            x1 = cosAngle * dx2 + sinAngle * dy2,
            y1 = -sinAngle * dx2 + cosAngle * dy2,
            x1_sq = x1 * x1,
            y1_sq = y1 * y1,
            radiiCheck = x1_sq / (rx * rx) + y1_sq / (ry * ry)

          if (radiiCheck > 1) {
            rx = _sqrt(radiiCheck) * rx
            ry = _sqrt(radiiCheck) * ry
          }

          var rx_sq = rx * rx,
            ry_sq = ry * ry,
            sq =
              (rx_sq * ry_sq - rx_sq * y1_sq - ry_sq * x1_sq) /
              (rx_sq * y1_sq + ry_sq * x1_sq)

          if (sq < 0) {
            sq = 0
          }

          var coef = (largeArcFlag === sweepFlag ? -1 : 1) * _sqrt(sq),
            cx1 = coef * ((rx * y1) / ry),
            cy1 = coef * -((ry * x1) / rx),
            sx2 = (lastX + x) / 2,
            sy2 = (lastY + y) / 2,
            cx = sx2 + (cosAngle * cx1 - sinAngle * cy1),
            cy = sy2 + (sinAngle * cx1 + cosAngle * cy1),
            ux = (x1 - cx1) / rx,
            uy = (y1 - cy1) / ry,
            vx = (-x1 - cx1) / rx,
            vy = (-y1 - cy1) / ry,
            temp = ux * ux + uy * uy,
            angleStart = (uy < 0 ? -1 : 1) * Math.acos(ux / _sqrt(temp)),
            angleExtent =
              (ux * vy - uy * vx < 0 ? -1 : 1) *
              Math.acos((ux * vx + uy * vy) / _sqrt(temp * (vx * vx + vy * vy)))

          isNaN(angleExtent) && (angleExtent = PI) //rare edge case. Math.cos(-1) is NaN.

          if (!sweepFlag && angleExtent > 0) {
            angleExtent -= TWOPI
          } else if (sweepFlag && angleExtent < 0) {
            angleExtent += TWOPI
          }

          angleStart %= TWOPI
          angleExtent %= TWOPI

          var segments = Math.ceil(_abs(angleExtent) / (TWOPI / 4)),
            rawPath = [],
            angleIncrement = angleExtent / segments,
            controlLength =
              ((4 / 3) * _sin(angleIncrement / 2)) /
              (1 + _cos(angleIncrement / 2)),
            ma = cosAngle * rx,
            mb = sinAngle * rx,
            mc = sinAngle * -ry,
            md = cosAngle * ry,
            i

          for (i = 0; i < segments; i++) {
            angle = angleStart + i * angleIncrement
            x1 = _cos(angle)
            y1 = _sin(angle)
            ux = _cos((angle += angleIncrement))
            uy = _sin(angle)
            rawPath.push(
              x1 - controlLength * y1,
              y1 + controlLength * x1,
              ux + controlLength * uy,
              uy - controlLength * ux,
              ux,
              uy,
            )
          } //now transform according to the actual size of the ellipse/arc (the beziers were noramlized, between 0 and 1 on a circle).

          for (i = 0; i < rawPath.length; i += 2) {
            x1 = rawPath[i]
            y1 = rawPath[i + 1]
            rawPath[i] = x1 * ma + y1 * mc + cx
            rawPath[i + 1] = x1 * mb + y1 * md + cy
          }

          rawPath[i - 2] = x //always set the end to exactly where it's supposed to be

          rawPath[i - 1] = y
          return rawPath
        } //Spits back a RawPath with absolute coordinates. Each segment starts with a "moveTo" command (x coordinate, then y) and then 2 control points (x, y, x, y), then anchor. The goal is to minimize memory and maximize speed.

        function stringToRawPath(d) {
          var a =
              (d + "")
                .replace(_scientific, function (m) {
                  var n = +m
                  return n < 0.0001 && n > -0.0001 ? 0 : n
                })
                .match(_svgPathExp) || [],
            //some authoring programs spit out very small numbers in scientific notation like "1e-5", so make sure we round that down to 0 first.
            path = [],
            relativeX = 0,
            relativeY = 0,
            twoThirds = 2 / 3,
            elements = a.length,
            points = 0,
            errorMessage = "ERROR: malformed path: " + d,
            i,
            j,
            x,
            y,
            command,
            isRelative,
            segment,
            startX,
            startY,
            difX,
            difY,
            beziers,
            prevCommand,
            flag1,
            flag2,
            line = function line(sx, sy, ex, ey) {
              difX = (ex - sx) / 3
              difY = (ey - sy) / 3
              segment.push(sx + difX, sy + difY, ex - difX, ey - difY, ex, ey)
            }

          if (!d || !isNaN(a[0]) || isNaN(a[1])) {
            console.log(errorMessage)
            return path
          }

          for (i = 0; i < elements; i++) {
            prevCommand = command

            if (isNaN(a[i])) {
              command = a[i].toUpperCase()
              isRelative = command !== a[i] //lower case means relative
            } else {
              //commands like "C" can be strung together without any new command characters between.
              i--
            }

            x = +a[i + 1]
            y = +a[i + 2]

            if (isRelative) {
              x += relativeX
              y += relativeY
            }

            if (!i) {
              startX = x
              startY = y
            } // "M" (move)

            if (command === "M") {
              if (segment) {
                if (segment.length < 8) {
                  //if the path data was funky and just had a M with no actual drawing anywhere, skip it.
                  path.length -= 1
                } else {
                  points += segment.length
                }
              }

              relativeX = startX = x
              relativeY = startY = y
              segment = [x, y]
              path.push(segment)
              i += 2
              command = "L" //an "M" with more than 2 values gets interpreted as "lineTo" commands ("L").
              // "C" (cubic bezier)
            } else if (command === "C") {
              if (!segment) {
                segment = [0, 0]
              }

              if (!isRelative) {
                relativeX = relativeY = 0
              } //note: "*1" is just a fast/short way to cast the value as a Number. WAAAY faster in Chrome, slightly slower in Firefox.

              segment.push(
                x,
                y,
                relativeX + a[i + 3] * 1,
                relativeY + a[i + 4] * 1,
                (relativeX += a[i + 5] * 1),
                (relativeY += a[i + 6] * 1),
              )
              i += 6 // "S" (continuation of cubic bezier)
            } else if (command === "S") {
              difX = relativeX
              difY = relativeY

              if (prevCommand === "C" || prevCommand === "S") {
                difX += relativeX - segment[segment.length - 4]
                difY += relativeY - segment[segment.length - 3]
              }

              if (!isRelative) {
                relativeX = relativeY = 0
              }

              segment.push(
                difX,
                difY,
                x,
                y,
                (relativeX += a[i + 3] * 1),
                (relativeY += a[i + 4] * 1),
              )
              i += 4 // "Q" (quadratic bezier)
            } else if (command === "Q") {
              difX = relativeX + (x - relativeX) * twoThirds
              difY = relativeY + (y - relativeY) * twoThirds

              if (!isRelative) {
                relativeX = relativeY = 0
              }

              relativeX += a[i + 3] * 1
              relativeY += a[i + 4] * 1
              segment.push(
                difX,
                difY,
                relativeX + (x - relativeX) * twoThirds,
                relativeY + (y - relativeY) * twoThirds,
                relativeX,
                relativeY,
              )
              i += 4 // "T" (continuation of quadratic bezier)
            } else if (command === "T") {
              difX = relativeX - segment[segment.length - 4]
              difY = relativeY - segment[segment.length - 3]
              segment.push(
                relativeX + difX,
                relativeY + difY,
                x + (relativeX + difX * 1.5 - x) * twoThirds,
                y + (relativeY + difY * 1.5 - y) * twoThirds,
                (relativeX = x),
                (relativeY = y),
              )
              i += 2 // "H" (horizontal line)
            } else if (command === "H") {
              line(relativeX, relativeY, (relativeX = x), relativeY)
              i += 1 // "V" (vertical line)
            } else if (command === "V") {
              //adjust values because the first (and only one) isn't x in this case, it's y.
              line(
                relativeX,
                relativeY,
                relativeX,
                (relativeY = x + (isRelative ? relativeY - relativeX : 0)),
              )
              i += 1 // "L" (line) or "Z" (close)
            } else if (command === "L" || command === "Z") {
              if (command === "Z") {
                x = startX
                y = startY
                segment.closed = true
              }

              if (
                command === "L" ||
                _abs(relativeX - x) > 0.5 ||
                _abs(relativeY - y) > 0.5
              ) {
                line(relativeX, relativeY, x, y)

                if (command === "L") {
                  i += 2
                }
              }

              relativeX = x
              relativeY = y // "A" (arc)
            } else if (command === "A") {
              flag1 = a[i + 4]
              flag2 = a[i + 5]
              difX = a[i + 6]
              difY = a[i + 7]
              j = 7

              if (flag1.length > 1) {
                // for cases when the flags are merged, like "a8 8 0 018 8" (the 0 and 1 flags are WITH the x value of 8, but it could also be "a8 8 0 01-8 8" so it may include x or not)
                if (flag1.length < 3) {
                  difY = difX
                  difX = flag2
                  j--
                } else {
                  difY = flag2
                  difX = flag1.substr(2)
                  j -= 2
                }

                flag2 = flag1.charAt(1)
                flag1 = flag1.charAt(0)
              }

              beziers = arcToSegment(
                relativeX,
                relativeY,
                +a[i + 1],
                +a[i + 2],
                +a[i + 3],
                +flag1,
                +flag2,
                (isRelative ? relativeX : 0) + difX * 1,
                (isRelative ? relativeY : 0) + difY * 1,
              )
              i += j

              if (beziers) {
                for (j = 0; j < beziers.length; j++) {
                  segment.push(beziers[j])
                }
              }

              relativeX = segment[segment.length - 2]
              relativeY = segment[segment.length - 1]
            } else {
              console.log(errorMessage)
            }
          }

          i = segment.length

          if (i < 6) {
            //in case there's odd SVG like a M0,0 command at the very end.
            path.pop()
            i = 0
          } else if (
            segment[0] === segment[i - 2] &&
            segment[1] === segment[i - 1]
          ) {
            segment.closed = true
          }

          path.totalPoints = points + i
          return path
        } //populates the points array in alternating x/y values (like [x, y, x, y...] instead of individual point objects [{x, y}, {x, y}...] to conserve memory and stay in line with how we're handling segment arrays

        function bezierToPoints(
          x1,
          y1,
          x2,
          y2,
          x3,
          y3,
          x4,
          y4,
          threshold,
          points,
          index,
        ) {
          var x12 = (x1 + x2) / 2,
            y12 = (y1 + y2) / 2,
            x23 = (x2 + x3) / 2,
            y23 = (y2 + y3) / 2,
            x34 = (x3 + x4) / 2,
            y34 = (y3 + y4) / 2,
            x123 = (x12 + x23) / 2,
            y123 = (y12 + y23) / 2,
            x234 = (x23 + x34) / 2,
            y234 = (y23 + y34) / 2,
            x1234 = (x123 + x234) / 2,
            y1234 = (y123 + y234) / 2,
            dx = x4 - x1,
            dy = y4 - y1,
            d2 = _abs((x2 - x4) * dy - (y2 - y4) * dx),
            d3 = _abs((x3 - x4) * dy - (y3 - y4) * dx),
            length

          if (!points) {
            points = [x1, y1, x4, y4]
            index = 2
          }

          points.splice(index || points.length - 2, 0, x1234, y1234)

          if ((d2 + d3) * (d2 + d3) > threshold * (dx * dx + dy * dy)) {
            length = points.length
            bezierToPoints(
              x1,
              y1,
              x12,
              y12,
              x123,
              y123,
              x1234,
              y1234,
              threshold,
              points,
              index,
            )
            bezierToPoints(
              x1234,
              y1234,
              x234,
              y234,
              x34,
              y34,
              x4,
              y4,
              threshold,
              points,
              index + 2 + (points.length - length),
            )
          }

          return points
        }
        /*
function getAngleBetweenPoints(x0, y0, x1, y1, x2, y2) { //angle between 3 points in radians
  var dx1 = x1 - x0,
    dy1 = y1 - y0,
    dx2 = x2 - x1,
    dy2 = y2 - y1,
    dx3 = x2 - x0,
    dy3 = y2 - y0,
    a = dx1 * dx1 + dy1 * dy1,
    b = dx2 * dx2 + dy2 * dy2,
    c = dx3 * dx3 + dy3 * dy3;
  return Math.acos( (a + b - c) / _sqrt(4 * a * b) );
},
*/
        //pointsToSegment() doesn't handle flat coordinates (where y is always 0) the way we need (the resulting control points are always right on top of the anchors), so this function basically makes the control points go directly up and down, varying in length based on the curviness (more curvy, further control points)

        function flatPointsToSegment(points, curviness) {
          if (curviness === void 0) {
            curviness = 1
          }

          var x = points[0],
            y = 0,
            segment = [x, y],
            i = 2

          for (; i < points.length; i += 2) {
            segment.push(
              x,
              y,
              points[i],
              (y = ((points[i] - x) * curviness) / 2),
              (x = points[i]),
              -y,
            )
          }

          return segment
        } //points is an array of x/y points, like [x, y, x, y, x, y]

        function pointsToSegment(points, curviness) {
          //points = simplifyPoints(points, tolerance);
          _abs(points[0] - points[2]) < 1e-4 &&
            _abs(points[1] - points[3]) < 1e-4 &&
            (points = points.slice(2)) // if the first two points are super close, dump the first one.

          var l = points.length - 2,
            x = +points[0],
            y = +points[1],
            nextX = +points[2],
            nextY = +points[3],
            segment = [x, y, x, y],
            dx2 = nextX - x,
            dy2 = nextY - y,
            closed =
              Math.abs(points[l] - x) < 0.001 &&
              Math.abs(points[l + 1] - y) < 0.001,
            prevX,
            prevY,
            i,
            dx1,
            dy1,
            r1,
            r2,
            r3,
            tl,
            mx1,
            mx2,
            mxm,
            my1,
            my2,
            mym

          if (closed) {
            // if the start and end points are basically on top of each other, close the segment by adding the 2nd point to the end, and the 2nd-to-last point to the beginning (we'll remove them at the end, but this allows the curvature to look perfect)
            points.push(nextX, nextY)
            nextX = x
            nextY = y
            x = points[l - 2]
            y = points[l - 1]
            points.unshift(x, y)
            l += 4
          }

          curviness = curviness || curviness === 0 ? +curviness : 1

          for (i = 2; i < l; i += 2) {
            prevX = x
            prevY = y
            x = nextX
            y = nextY
            nextX = +points[i + 2]
            nextY = +points[i + 3]

            if (x === nextX && y === nextY) {
              continue
            }

            dx1 = dx2
            dy1 = dy2
            dx2 = nextX - x
            dy2 = nextY - y
            r1 = _sqrt(dx1 * dx1 + dy1 * dy1) // r1, r2, and r3 correlate x and y (and z in the future). Basically 2D or 3D hypotenuse

            r2 = _sqrt(dx2 * dx2 + dy2 * dy2)
            r3 = _sqrt(
              Math.pow(dx2 / r2 + dx1 / r1, 2) +
                Math.pow(dy2 / r2 + dy1 / r1, 2),
            )
            tl = ((r1 + r2) * curviness * 0.25) / r3
            mx1 = x - (x - prevX) * (r1 ? tl / r1 : 0)
            mx2 = x + (nextX - x) * (r2 ? tl / r2 : 0)
            mxm =
              x -
              (mx1 + (((mx2 - mx1) * ((r1 * 3) / (r1 + r2) + 0.5)) / 4 || 0))
            my1 = y - (y - prevY) * (r1 ? tl / r1 : 0)
            my2 = y + (nextY - y) * (r2 ? tl / r2 : 0)
            mym =
              y -
              (my1 + (((my2 - my1) * ((r1 * 3) / (r1 + r2) + 0.5)) / 4 || 0))

            if (x !== prevX || y !== prevY) {
              segment.push(
                _round(mx1 + mxm), // first control point
                _round(my1 + mym),
                _round(x), // anchor
                _round(y),
                _round(mx2 + mxm), // second control point
                _round(my2 + mym),
              )
            }
          }

          x !== nextX || y !== nextY || segment.length < 4
            ? segment.push(
                _round(nextX),
                _round(nextY),
                _round(nextX),
                _round(nextY),
              )
            : (segment.length -= 2)

          if (segment.length === 2) {
            // only one point!
            segment.push(x, y, x, y, x, y)
          } else if (closed) {
            segment.splice(0, 6)
            segment.length = segment.length - 6
          }

          return segment
        } //returns the squared distance between an x/y coordinate and a segment between x1/y1 and x2/y2

        function pointToSegDist(x, y, x1, y1, x2, y2) {
          var dx = x2 - x1,
            dy = y2 - y1,
            t

          if (dx || dy) {
            t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy)

            if (t > 1) {
              x1 = x2
              y1 = y2
            } else if (t > 0) {
              x1 += dx * t
              y1 += dy * t
            }
          }

          return Math.pow(x - x1, 2) + Math.pow(y - y1, 2)
        }

        function simplifyStep(points, first, last, tolerance, simplified) {
          var maxSqDist = tolerance,
            firstX = points[first],
            firstY = points[first + 1],
            lastX = points[last],
            lastY = points[last + 1],
            index,
            i,
            d

          for (i = first + 2; i < last; i += 2) {
            d = pointToSegDist(
              points[i],
              points[i + 1],
              firstX,
              firstY,
              lastX,
              lastY,
            )

            if (d > maxSqDist) {
              index = i
              maxSqDist = d
            }
          }

          if (maxSqDist > tolerance) {
            index - first > 2 &&
              simplifyStep(points, first, index, tolerance, simplified)
            simplified.push(points[index], points[index + 1])
            last - index > 2 &&
              simplifyStep(points, index, last, tolerance, simplified)
          }
        } //points is an array of x/y values like [x, y, x, y, x, y]

        function simplifyPoints(points, tolerance) {
          var prevX = parseFloat(points[0]),
            prevY = parseFloat(points[1]),
            temp = [prevX, prevY],
            l = points.length - 2,
            i,
            x,
            y,
            dx,
            dy,
            result,
            last
          tolerance = Math.pow(tolerance || 1, 2)

          for (i = 2; i < l; i += 2) {
            x = parseFloat(points[i])
            y = parseFloat(points[i + 1])
            dx = prevX - x
            dy = prevY - y

            if (dx * dx + dy * dy > tolerance) {
              temp.push(x, y)
              prevX = x
              prevY = y
            }
          }

          temp.push(parseFloat(points[l]), parseFloat(points[l + 1]))
          last = temp.length - 2
          result = [temp[0], temp[1]]
          simplifyStep(temp, 0, last, tolerance, result)
          result.push(temp[last], temp[last + 1])
          return result
        }

        function getClosestProgressOnBezier(
          iterations,
          px,
          py,
          start,
          end,
          slices,
          x0,
          y0,
          x1,
          y1,
          x2,
          y2,
          x3,
          y3,
        ) {
          var inc = (end - start) / slices,
            best = 0,
            t = start,
            x,
            y,
            d,
            dx,
            dy,
            inv
          _bestDistance = _largeNum

          while (t <= end) {
            inv = 1 - t
            x =
              inv * inv * inv * x0 +
              3 * inv * inv * t * x1 +
              3 * inv * t * t * x2 +
              t * t * t * x3
            y =
              inv * inv * inv * y0 +
              3 * inv * inv * t * y1 +
              3 * inv * t * t * y2 +
              t * t * t * y3
            dx = x - px
            dy = y - py
            d = dx * dx + dy * dy

            if (d < _bestDistance) {
              _bestDistance = d
              best = t
            }

            t += inc
          }

          return iterations > 1
            ? getClosestProgressOnBezier(
                iterations - 1,
                px,
                py,
                Math.max(best - inc, 0),
                Math.min(best + inc, 1),
                slices,
                x0,
                y0,
                x1,
                y1,
                x2,
                y2,
                x3,
                y3,
              )
            : best
        }

        function getClosestData(rawPath, x, y, slices) {
          //returns an object with the closest j, i, and t (j is the segment index, i is the index of the point in that segment, and t is the time/progress along that bezier)
          var closest = {
              j: 0,
              i: 0,
              t: 0,
            },
            bestDistance = _largeNum,
            i,
            j,
            t,
            segment

          for (j = 0; j < rawPath.length; j++) {
            segment = rawPath[j]

            for (i = 0; i < segment.length; i += 6) {
              t = getClosestProgressOnBezier(
                1,
                x,
                y,
                0,
                1,
                slices || 20,
                segment[i],
                segment[i + 1],
                segment[i + 2],
                segment[i + 3],
                segment[i + 4],
                segment[i + 5],
                segment[i + 6],
                segment[i + 7],
              )

              if (bestDistance > _bestDistance) {
                bestDistance = _bestDistance
                closest.j = j
                closest.i = i
                closest.t = t
              }
            }
          }

          return closest
        } //subdivide a Segment closest to a specific x,y coordinate

        function subdivideSegmentNear(x, y, segment, slices, iterations) {
          var l = segment.length,
            bestDistance = _largeNum,
            bestT = 0,
            bestSegmentIndex = 0,
            t,
            i
          slices = slices || 20
          iterations = iterations || 3

          for (i = 0; i < l; i += 6) {
            t = getClosestProgressOnBezier(
              1,
              x,
              y,
              0,
              1,
              slices,
              segment[i],
              segment[i + 1],
              segment[i + 2],
              segment[i + 3],
              segment[i + 4],
              segment[i + 5],
              segment[i + 6],
              segment[i + 7],
            )

            if (bestDistance > _bestDistance) {
              bestDistance = _bestDistance
              bestT = t
              bestSegmentIndex = i
            }
          }

          t = getClosestProgressOnBezier(
            iterations,
            x,
            y,
            bestT - 0.05,
            bestT + 0.05,
            slices,
            segment[bestSegmentIndex],
            segment[bestSegmentIndex + 1],
            segment[bestSegmentIndex + 2],
            segment[bestSegmentIndex + 3],
            segment[bestSegmentIndex + 4],
            segment[bestSegmentIndex + 5],
            segment[bestSegmentIndex + 6],
            segment[bestSegmentIndex + 7],
          )
          subdivideSegment(segment, bestSegmentIndex, t)
          return bestSegmentIndex + 6
        }
        /*
Takes any of the following and converts it to an all Cubic Bezier SVG data string:
- A <path> data string like "M0,0 L2,4 v20,15 H100"
- A RawPath, like [[x, y, x, y, x, y, x, y][[x, y, x, y, x, y, x, y]]
- A Segment, like [x, y, x, y, x, y, x, y]

Note: all numbers are rounded down to the closest 0.001 to minimize memory, maximize speed, and avoid odd numbers like 1e-13
*/

        function rawPathToString(rawPath) {
          if (_isNumber(rawPath[0])) {
            //in case a segment is passed in instead
            rawPath = [rawPath]
          }

          var result = "",
            l = rawPath.length,
            sl,
            s,
            i,
            segment

          for (s = 0; s < l; s++) {
            segment = rawPath[s]
            result += "M" + _round(segment[0]) + "," + _round(segment[1]) + " C"
            sl = segment.length

            for (i = 2; i < sl; i++) {
              result +=
                _round(segment[i++]) +
                "," +
                _round(segment[i++]) +
                " " +
                _round(segment[i++]) +
                "," +
                _round(segment[i++]) +
                " " +
                _round(segment[i++]) +
                "," +
                _round(segment[i]) +
                " "
            }

            if (segment.closed) {
              result += "z"
            }
          }

          return result
        }
        /*
// takes a segment with coordinates [x, y, x, y, ...] and converts the control points into angles and lengths [x, y, angle, length, angle, length, x, y, angle, length, ...] so that it animates more cleanly and avoids odd breaks/kinks. For example, if you animate from 1 o'clock to 6 o'clock, it'd just go directly/linearly rather than around. So the length would be very short in the middle of the tween.
export function cpCoordsToAngles(segment, copy) {
  var result = copy ? segment.slice(0) : segment,
    x, y, i;
  for (i = 0; i < segment.length; i+=6) {
    x = segment[i+2] - segment[i];
    y = segment[i+3] - segment[i+1];
    result[i+2] = Math.atan2(y, x);
    result[i+3] = Math.sqrt(x * x + y * y);
    x = segment[i+6] - segment[i+4];
    y = segment[i+7] - segment[i+5];
    result[i+4] = Math.atan2(y, x);
    result[i+5] = Math.sqrt(x * x + y * y);
  }
  return result;
}

// takes a segment that was converted with cpCoordsToAngles() to have angles and lengths instead of coordinates for the control points, and converts it BACK into coordinates.
export function cpAnglesToCoords(segment, copy) {
  var result = copy ? segment.slice(0) : segment,
    length = segment.length,
    rnd = 1000,
    angle, l, i, j;
  for (i = 0; i < length; i+=6) {
    angle = segment[i+2];
    l = segment[i+3]; //length
    result[i+2] = (((segment[i] + Math.cos(angle) * l) * rnd) | 0) / rnd;
    result[i+3] = (((segment[i+1] + Math.sin(angle) * l) * rnd) | 0) / rnd;
    angle = segment[i+4];
    l = segment[i+5]; //length
    result[i+4] = (((segment[i+6] - Math.cos(angle) * l) * rnd) | 0) / rnd;
    result[i+5] = (((segment[i+7] - Math.sin(angle) * l) * rnd) | 0) / rnd;
  }
  return result;
}

//adds an "isSmooth" array to each segment and populates it with a boolean value indicating whether or not it's smooth (the control points have basically the same slope). For any smooth control points, it converts the coordinates into angle (x, in radians) and length (y) and puts them into the same index value in a smoothData array.
export function populateSmoothData(rawPath) {
  let j = rawPath.length,
    smooth, segment, x, y, x2, y2, i, l, a, a2, isSmooth, smoothData;
  while (--j > -1) {
    segment = rawPath[j];
    isSmooth = segment.isSmooth = segment.isSmooth || [0, 0, 0, 0];
    smoothData = segment.smoothData = segment.smoothData || [0, 0, 0, 0];
    isSmooth.length = 4;
    l = segment.length - 2;
    for (i = 6; i < l; i += 6) {
      x = segment[i] - segment[i - 2];
      y = segment[i + 1] - segment[i - 1];
      x2 = segment[i + 2] - segment[i];
      y2 = segment[i + 3] - segment[i + 1];
      a = _atan2(y, x);
      a2 = _atan2(y2, x2);
      smooth = (Math.abs(a - a2) < 0.09);
      if (smooth) {
        smoothData[i - 2] = a;
        smoothData[i + 2] = a2;
        smoothData[i - 1] = _sqrt(x * x + y * y);
        smoothData[i + 3] = _sqrt(x2 * x2 + y2 * y2);
      }
      isSmooth.push(smooth, smooth, 0, 0, smooth, smooth);
    }
    //if the first and last points are identical, check to see if there's a smooth transition. We must handle this a bit differently due to their positions in the array.
    if (segment[l] === segment[0] && segment[l+1] === segment[1]) {
      x = segment[0] - segment[l-2];
      y = segment[1] - segment[l-1];
      x2 = segment[2] - segment[0];
      y2 = segment[3] - segment[1];
      a = _atan2(y, x);
      a2 = _atan2(y2, x2);
      if (Math.abs(a - a2) < 0.09) {
        smoothData[l-2] = a;
        smoothData[2] = a2;
        smoothData[l-1] = _sqrt(x * x + y * y);
        smoothData[3] = _sqrt(x2 * x2 + y2 * y2);
        isSmooth[l-2] = isSmooth[l-1] = true; //don't change indexes 2 and 3 because we'll trigger everything from the END, and this will optimize file size a bit.
      }
    }
  }
  return rawPath;
}
export function pointToScreen(svgElement, point) {
  if (arguments.length < 2) { //by default, take the first set of coordinates in the path as the point
    let rawPath = getRawPath(svgElement);
    point = svgElement.ownerSVGElement.createSVGPoint();
    point.x = rawPath[0][0];
    point.y = rawPath[0][1];
  }
  return point.matrixTransform(svgElement.getScreenCTM());
}

*/

        /***/
      },
      /* 6 */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ Matrix2D: () => /* binding */ Matrix2D,
          /* harmony export */ getGlobalMatrix: () =>
            /* binding */ getGlobalMatrix,
          /* harmony export */ _getDocScrollTop: () =>
            /* binding */ _getDocScrollTop,
          /* harmony export */ _getDocScrollLeft: () =>
            /* binding */ _getDocScrollLeft,
          /* harmony export */ _setDoc: () => /* binding */ _setDoc,
          /* harmony export */ _isFixed: () => /* binding */ _isFixed,
          /* harmony export */ _getCTM: () => /* binding */ _getCTM,
          /* harmony export */
        })
        /*!
         * matrix 3.12.2
         * https://greensock.com
         *
         * Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */

        /* eslint-disable */
        var _doc,
          _win,
          _docElement,
          _body,
          _divContainer,
          _svgContainer,
          _identityMatrix,
          _gEl,
          _transformProp = "transform",
          _transformOriginProp = _transformProp + "Origin",
          _hasOffsetBug,
          _setDoc = function _setDoc(element) {
            var doc = element.ownerDocument || element

            if (
              !(_transformProp in element.style) &&
              "msTransform" in element.style
            ) {
              //to improve compatibility with old Microsoft browsers
              _transformProp = "msTransform"
              _transformOriginProp = _transformProp + "Origin"
            }

            while (doc.parentNode && (doc = doc.parentNode)) {}

            _win = window
            _identityMatrix = new Matrix2D()

            if (doc) {
              _doc = doc
              _docElement = doc.documentElement
              _body = doc.body
              _gEl = _doc.createElementNS("http://www.w3.org/2000/svg", "g") // prevent any existing CSS from transforming it

              _gEl.style.transform = "none" // now test for the offset reporting bug. Use feature detection instead of browser sniffing to make things more bulletproof and future-proof. Hopefully Safari will fix their bug soon but it's 2020 and it's still not fixed.

              var d1 = doc.createElement("div"),
                d2 = doc.createElement("div")

              _body.appendChild(d1)

              d1.appendChild(d2)
              d1.style.position = "static"
              d1.style[_transformProp] = "translate3d(0,0,1px)"
              _hasOffsetBug = d2.offsetParent !== d1

              _body.removeChild(d1)
            }

            return doc
          },
          _forceNonZeroScale = function _forceNonZeroScale(e) {
            // walks up the element's ancestors and finds any that had their scale set to 0 via GSAP, and changes them to 0.0001 to ensure that measurements work. Firefox has a bug that causes it to incorrectly report getBoundingClientRect() when scale is 0.
            var a, cache

            while (e && e !== _body) {
              cache = e._gsap
              cache && cache.uncache && cache.get(e, "x") // force re-parsing of transforms if necessary

              if (
                cache &&
                !cache.scaleX &&
                !cache.scaleY &&
                cache.renderTransform
              ) {
                cache.scaleX = cache.scaleY = 1e-4
                cache.renderTransform(1, cache)
                a ? a.push(cache) : (a = [cache])
              }

              e = e.parentNode
            }

            return a
          },
          // possible future addition: pass an element to _forceDisplay() and it'll walk up all its ancestors and make sure anything with display: none is set to display: block, and if there's no parentNode, it'll add it to the body. It returns an Array that you can then feed to _revertDisplay() to have it revert all the changes it made.
          // _forceDisplay = e => {
          // 	let a = [],
          // 		parent;
          // 	while (e && e !== _body) {
          // 		parent = e.parentNode;
          // 		(_win.getComputedStyle(e).display === "none" || !parent) && a.push(e, e.style.display, parent) && (e.style.display = "block");
          // 		parent || _body.appendChild(e);
          // 		e = parent;
          // 	}
          // 	return a;
          // },
          // _revertDisplay = a => {
          // 	for (let i = 0; i < a.length; i+=3) {
          // 		a[i+1] ? (a[i].style.display = a[i+1]) : a[i].style.removeProperty("display");
          // 		a[i+2] || a[i].parentNode.removeChild(a[i]);
          // 	}
          // },
          _svgTemps = [],
          //we create 3 elements for SVG, and 3 for other DOM elements and cache them for performance reasons. They get nested in _divContainer and _svgContainer so that just one element is added to the DOM on each successive attempt. Again, performance is key.
          _divTemps = [],
          _getDocScrollTop = function _getDocScrollTop() {
            return (
              _win.pageYOffset ||
              _doc.scrollTop ||
              _docElement.scrollTop ||
              _body.scrollTop ||
              0
            )
          },
          _getDocScrollLeft = function _getDocScrollLeft() {
            return (
              _win.pageXOffset ||
              _doc.scrollLeft ||
              _docElement.scrollLeft ||
              _body.scrollLeft ||
              0
            )
          },
          _svgOwner = function _svgOwner(element) {
            return (
              element.ownerSVGElement ||
              ((element.tagName + "").toLowerCase() === "svg" ? element : null)
            )
          },
          _isFixed = function _isFixed(element) {
            if (_win.getComputedStyle(element).position === "fixed") {
              return true
            }

            element = element.parentNode

            if (element && element.nodeType === 1) {
              // avoid document fragments which will throw an error.
              return _isFixed(element)
            }
          },
          _createSibling = function _createSibling(element, i) {
            if (element.parentNode && (_doc || _setDoc(element))) {
              var svg = _svgOwner(element),
                ns = svg
                  ? svg.getAttribute("xmlns") || "http://www.w3.org/2000/svg"
                  : "http://www.w3.org/1999/xhtml",
                type = svg ? (i ? "rect" : "g") : "div",
                x = i !== 2 ? 0 : 100,
                y = i === 3 ? 100 : 0,
                css =
                  "position:absolute;display:block;pointer-events:none;margin:0;padding:0;",
                e = _doc.createElementNS
                  ? _doc.createElementNS(ns.replace(/^https/, "http"), type)
                  : _doc.createElement(type)

              if (i) {
                if (!svg) {
                  if (!_divContainer) {
                    _divContainer = _createSibling(element)
                    _divContainer.style.cssText = css
                  }

                  e.style.cssText =
                    css +
                    "width:0.1px;height:0.1px;top:" +
                    y +
                    "px;left:" +
                    x +
                    "px"

                  _divContainer.appendChild(e)
                } else {
                  _svgContainer || (_svgContainer = _createSibling(element))
                  e.setAttribute("width", 0.01)
                  e.setAttribute("height", 0.01)
                  e.setAttribute("transform", "translate(" + x + "," + y + ")")

                  _svgContainer.appendChild(e)
                }
              }

              return e
            }

            throw "Need document and parent."
          },
          _consolidate = function _consolidate(m) {
            // replaces SVGTransformList.consolidate() because a bug in Firefox causes it to break pointer events. See https://greensock.com/forums/topic/23248-touch-is-not-working-on-draggable-in-firefox-windows-v324/?tab=comments#comment-109800
            var c = new Matrix2D(),
              i = 0

            for (; i < m.numberOfItems; i++) {
              c.multiply(m.getItem(i).matrix)
            }

            return c
          },
          _getCTM = function _getCTM(svg) {
            var m = svg.getCTM(),
              transform

            if (!m) {
              // Firefox returns null for getCTM() on root <svg> elements, so this is a workaround using a <g> that we temporarily append.
              transform = svg.style[_transformProp]
              svg.style[_transformProp] = "none" // a bug in Firefox causes css transforms to contaminate the getCTM()

              svg.appendChild(_gEl)
              m = _gEl.getCTM()
              svg.removeChild(_gEl)
              transform
                ? (svg.style[_transformProp] = transform)
                : svg.style.removeProperty(
                    _transformProp.replace(/([A-Z])/g, "-$1").toLowerCase(),
                  )
            }

            return m || _identityMatrix.clone() // Firefox will still return null if the <svg> has a width/height of 0 in the browser.
          },
          _placeSiblings = function _placeSiblings(element, adjustGOffset) {
            var svg = _svgOwner(element),
              isRootSVG = element === svg,
              siblings = svg ? _svgTemps : _divTemps,
              parent = element.parentNode,
              container,
              m,
              b,
              x,
              y,
              cs

            if (element === _win) {
              return element
            }

            siblings.length ||
              siblings.push(
                _createSibling(element, 1),
                _createSibling(element, 2),
                _createSibling(element, 3),
              )
            container = svg ? _svgContainer : _divContainer

            if (svg) {
              if (isRootSVG) {
                b = _getCTM(element)
                x = -b.e / b.a
                y = -b.f / b.d
                m = _identityMatrix
              } else if (element.getBBox) {
                b = element.getBBox()
                m = element.transform ? element.transform.baseVal : {} // IE11 doesn't follow the spec.

                m = !m.numberOfItems
                  ? _identityMatrix
                  : m.numberOfItems > 1
                  ? _consolidate(m)
                  : m.getItem(0).matrix // don't call m.consolidate().matrix because a bug in Firefox makes pointer events not work when consolidate() is called on the same tick as getBoundingClientRect()! See https://greensock.com/forums/topic/23248-touch-is-not-working-on-draggable-in-firefox-windows-v324/?tab=comments#comment-109800

                x = m.a * b.x + m.c * b.y
                y = m.b * b.x + m.d * b.y
              } else {
                // may be a <mask> which has no getBBox() so just use defaults instead of throwing errors.
                m = new Matrix2D()
                x = y = 0
              }

              if (adjustGOffset && element.tagName.toLowerCase() === "g") {
                x = y = 0
              }

              ;(isRootSVG ? svg : parent).appendChild(container)
              container.setAttribute(
                "transform",
                "matrix(" +
                  m.a +
                  "," +
                  m.b +
                  "," +
                  m.c +
                  "," +
                  m.d +
                  "," +
                  (m.e + x) +
                  "," +
                  (m.f + y) +
                  ")",
              )
            } else {
              x = y = 0

              if (_hasOffsetBug) {
                // some browsers (like Safari) have a bug that causes them to misreport offset values. When an ancestor element has a transform applied, it's supposed to treat it as if it's position: relative (new context). Safari botches this, so we need to find the closest ancestor (between the element and its offsetParent) that has a transform applied and if one is found, grab its offsetTop/Left and subtract them to compensate.
                m = element.offsetParent
                b = element

                while (b && (b = b.parentNode) && b !== m && b.parentNode) {
                  if (
                    (_win.getComputedStyle(b)[_transformProp] + "").length > 4
                  ) {
                    x = b.offsetLeft
                    y = b.offsetTop
                    b = 0
                  }
                }
              }

              cs = _win.getComputedStyle(element)

              if (cs.position !== "absolute" && cs.position !== "fixed") {
                m = element.offsetParent

                while (parent && parent !== m) {
                  // if there's an ancestor element between the element and its offsetParent that's scrolled, we must factor that in.
                  x += parent.scrollLeft || 0
                  y += parent.scrollTop || 0
                  parent = parent.parentNode
                }
              }

              b = container.style
              b.top = element.offsetTop - y + "px"
              b.left = element.offsetLeft - x + "px"
              b[_transformProp] = cs[_transformProp]
              b[_transformOriginProp] = cs[_transformOriginProp] // b.border = m.border;
              // b.borderLeftStyle = m.borderLeftStyle;
              // b.borderTopStyle = m.borderTopStyle;
              // b.borderLeftWidth = m.borderLeftWidth;
              // b.borderTopWidth = m.borderTopWidth;

              b.position = cs.position === "fixed" ? "fixed" : "absolute"
              element.parentNode.appendChild(container)
            }

            return container
          },
          _setMatrix = function _setMatrix(m, a, b, c, d, e, f) {
            m.a = a
            m.b = b
            m.c = c
            m.d = d
            m.e = e
            m.f = f
            return m
          }

        var Matrix2D = /*#__PURE__*/ (function () {
          function Matrix2D(a, b, c, d, e, f) {
            if (a === void 0) {
              a = 1
            }

            if (b === void 0) {
              b = 0
            }

            if (c === void 0) {
              c = 0
            }

            if (d === void 0) {
              d = 1
            }

            if (e === void 0) {
              e = 0
            }

            if (f === void 0) {
              f = 0
            }

            _setMatrix(this, a, b, c, d, e, f)
          }

          var _proto = Matrix2D.prototype

          _proto.inverse = function inverse() {
            var a = this.a,
              b = this.b,
              c = this.c,
              d = this.d,
              e = this.e,
              f = this.f,
              determinant = a * d - b * c || 1e-10
            return _setMatrix(
              this,
              d / determinant,
              -b / determinant,
              -c / determinant,
              a / determinant,
              (c * f - d * e) / determinant,
              -(a * f - b * e) / determinant,
            )
          }

          _proto.multiply = function multiply(matrix) {
            var a = this.a,
              b = this.b,
              c = this.c,
              d = this.d,
              e = this.e,
              f = this.f,
              a2 = matrix.a,
              b2 = matrix.c,
              c2 = matrix.b,
              d2 = matrix.d,
              e2 = matrix.e,
              f2 = matrix.f
            return _setMatrix(
              this,
              a2 * a + c2 * c,
              a2 * b + c2 * d,
              b2 * a + d2 * c,
              b2 * b + d2 * d,
              e + e2 * a + f2 * c,
              f + e2 * b + f2 * d,
            )
          }

          _proto.clone = function clone() {
            return new Matrix2D(this.a, this.b, this.c, this.d, this.e, this.f)
          }

          _proto.equals = function equals(matrix) {
            var a = this.a,
              b = this.b,
              c = this.c,
              d = this.d,
              e = this.e,
              f = this.f
            return (
              a === matrix.a &&
              b === matrix.b &&
              c === matrix.c &&
              d === matrix.d &&
              e === matrix.e &&
              f === matrix.f
            )
          }

          _proto.apply = function apply(point, decoratee) {
            if (decoratee === void 0) {
              decoratee = {}
            }

            var x = point.x,
              y = point.y,
              a = this.a,
              b = this.b,
              c = this.c,
              d = this.d,
              e = this.e,
              f = this.f
            decoratee.x = x * a + y * c + e || 0
            decoratee.y = x * b + y * d + f || 0
            return decoratee
          }

          return Matrix2D
        })() // Feed in an element and it'll return a 2D matrix (optionally inverted) so that you can translate between coordinate spaces.
        // Inverting lets you translate a global point into a local coordinate space. No inverting lets you go the other way.
        // We needed this to work around various browser bugs, like Firefox doesn't accurately report getScreenCTM() when there
        // are transforms applied to ancestor elements.
        // The matrix math to convert any x/y coordinate is as follows, which is wrapped in a convenient apply() method of Matrix2D above:
        //     tx = m.a * x + m.c * y + m.e
        //     ty = m.b * x + m.d * y + m.f

        function getGlobalMatrix(
          element,
          inverse,
          adjustGOffset,
          includeScrollInFixed,
        ) {
          // adjustGOffset is typically used only when grabbing an element's PARENT's global matrix, and it ignores the x/y offset of any SVG <g> elements because they behave in a special way.
          if (
            !element ||
            !element.parentNode ||
            (_doc || _setDoc(element)).documentElement === element
          ) {
            return new Matrix2D()
          }

          var zeroScales = _forceNonZeroScale(element),
            svg = _svgOwner(element),
            temps = svg ? _svgTemps : _divTemps,
            container = _placeSiblings(element, adjustGOffset),
            b1 = temps[0].getBoundingClientRect(),
            b2 = temps[1].getBoundingClientRect(),
            b3 = temps[2].getBoundingClientRect(),
            parent = container.parentNode,
            isFixed = !includeScrollInFixed && _isFixed(element),
            m = new Matrix2D(
              (b2.left - b1.left) / 100,
              (b2.top - b1.top) / 100,
              (b3.left - b1.left) / 100,
              (b3.top - b1.top) / 100,
              b1.left + (isFixed ? 0 : _getDocScrollLeft()),
              b1.top + (isFixed ? 0 : _getDocScrollTop()),
            )

          parent.removeChild(container)

          if (zeroScales) {
            b1 = zeroScales.length

            while (b1--) {
              b2 = zeroScales[b1]
              b2.scaleX = b2.scaleY = 0
              b2.renderTransform(1, b2)
            }
          }

          return inverse ? m.inverse() : m
        }
        // export function getMatrix(element) {
        // 	_doc || _setDoc(element);
        // 	let m = (_win.getComputedStyle(element)[_transformProp] + "").substr(7).match(/[-.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g),
        // 		is2D = m && m.length === 6;
        // 	return !m || m.length < 6 ? new Matrix2D() : new Matrix2D(+m[0], +m[1], +m[is2D ? 2 : 4], +m[is2D ? 3 : 5], +m[is2D ? 4 : 12], +m[is2D ? 5 : 13]);
        // }

        /***/
      },
      /* 7 */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ DrawSVGPlugin: () => /* binding */ DrawSVGPlugin,
          /* harmony export */ default: () => /* binding */ DrawSVGPlugin,
          /* harmony export */
        })
        /*!
         * DrawSVGPlugin 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */

        /* eslint-disable */
        var gsap,
          _toArray,
          _doc,
          _win,
          _isEdge,
          _coreInitted,
          _warned,
          _getStyleSaver,
          _reverting,
          _windowExists = function _windowExists() {
            return typeof window !== "undefined"
          },
          _getGSAP = function _getGSAP() {
            return (
              gsap ||
              (_windowExists() &&
                (gsap = window.gsap) &&
                gsap.registerPlugin &&
                gsap)
            )
          },
          _numExp = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
          //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
          _types = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"],
          },
          _round = function _round(value) {
            return Math.round(value * 10000) / 10000
          },
          _parseNum = function _parseNum(value) {
            return parseFloat(value) || 0
          },
          _parseSingleVal = function _parseSingleVal(value, length) {
            var num = _parseNum(value)

            return ~value.indexOf("%") ? (num / 100) * length : num
          },
          _getAttributeAsNumber = function _getAttributeAsNumber(target, attr) {
            return _parseNum(target.getAttribute(attr))
          },
          _sqrt = Math.sqrt,
          _getDistance = function _getDistance(x1, y1, x2, y2, scaleX, scaleY) {
            return _sqrt(
              Math.pow((_parseNum(x2) - _parseNum(x1)) * scaleX, 2) +
                Math.pow((_parseNum(y2) - _parseNum(y1)) * scaleY, 2),
            )
          },
          _warn = function _warn(message) {
            return console.warn(message)
          },
          _hasNonScalingStroke = function _hasNonScalingStroke(target) {
            return target.getAttribute("vector-effect") === "non-scaling-stroke"
          },
          _bonusValidated = 1,
          //<name>DrawSVGPlugin</name>
          //accepts values like "100%" or "20% 80%" or "20 50" and parses it into an absolute start and end position on the line/stroke based on its length. Returns an an array with the start and end values, like [0, 243]
          _parse = function _parse(value, length, defaultStart) {
            var i = value.indexOf(" "),
              s,
              e

            if (i < 0) {
              s = defaultStart !== undefined ? defaultStart + "" : value
              e = value
            } else {
              s = value.substr(0, i)
              e = value.substr(i + 1)
            }

            s = _parseSingleVal(s, length)
            e = _parseSingleVal(e, length)
            return s > e ? [e, s] : [s, e]
          },
          _getLength = function _getLength(target) {
            target = _toArray(target)[0]

            if (!target) {
              return 0
            }

            var type = target.tagName.toLowerCase(),
              style = target.style,
              scaleX = 1,
              scaleY = 1,
              length,
              bbox,
              points,
              prevPoint,
              i,
              rx,
              ry

            if (_hasNonScalingStroke(target)) {
              //non-scaling-stroke basically scales the shape and then strokes it at the screen-level (after transforms), thus we need to adjust the length accordingly.
              scaleY = target.getScreenCTM()
              scaleX = _sqrt(scaleY.a * scaleY.a + scaleY.b * scaleY.b)
              scaleY = _sqrt(scaleY.d * scaleY.d + scaleY.c * scaleY.c)
            }

            try {
              //IE bug: calling <path>.getTotalLength() locks the repaint area of the stroke to whatever its current dimensions are on that frame/tick. To work around that, we must call getBBox() to force IE to recalculate things.
              bbox = target.getBBox() //solely for fixing bug in IE - we don't actually use the bbox.
            } catch (e) {
              //firefox has a bug that throws an error if the element isn't visible.
              _warn(
                "Some browsers won't measure invisible elements (like display:none or masks inside defs).",
              )
            }

            var _ref = bbox || {
                x: 0,
                y: 0,
                width: 0,
                height: 0,
              },
              x = _ref.x,
              y = _ref.y,
              width = _ref.width,
              height = _ref.height

            if ((!bbox || (!width && !height)) && _types[type]) {
              //if the element isn't visible, try to discern width/height using its attributes.
              width = _getAttributeAsNumber(target, _types[type][0])
              height = _getAttributeAsNumber(target, _types[type][1])

              if (type !== "rect" && type !== "line") {
                //double the radius for circles and ellipses
                width *= 2
                height *= 2
              }

              if (type === "line") {
                x = _getAttributeAsNumber(target, "x1")
                y = _getAttributeAsNumber(target, "y1")
                width = Math.abs(width - x)
                height = Math.abs(height - y)
              }
            }

            if (type === "path") {
              prevPoint = style.strokeDasharray
              style.strokeDasharray = "none"
              length = target.getTotalLength() || 0
              _round(scaleX) !== _round(scaleY) &&
                !_warned &&
                (_warned = 1) &&
                _warn(
                  "Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled.",
                )
              length *= (scaleX + scaleY) / 2
              style.strokeDasharray = prevPoint
            } else if (type === "rect") {
              length = width * 2 * scaleX + height * 2 * scaleY
            } else if (type === "line") {
              length = _getDistance(x, y, x + width, y + height, scaleX, scaleY)
            } else if (type === "polyline" || type === "polygon") {
              points = target.getAttribute("points").match(_numExp) || []
              type === "polygon" && points.push(points[0], points[1])
              length = 0

              for (i = 2; i < points.length; i += 2) {
                length +=
                  _getDistance(
                    points[i - 2],
                    points[i - 1],
                    points[i],
                    points[i + 1],
                    scaleX,
                    scaleY,
                  ) || 0
              }
            } else if (type === "circle" || type === "ellipse") {
              rx = (width / 2) * scaleX
              ry = (height / 2) * scaleY
              length =
                Math.PI * (3 * (rx + ry) - _sqrt((3 * rx + ry) * (rx + 3 * ry)))
            }

            return length || 0
          },
          _getPosition = function _getPosition(target, length) {
            target = _toArray(target)[0]

            if (!target) {
              return [0, 0]
            }

            length || (length = _getLength(target) + 1)

            var cs = _win.getComputedStyle(target),
              dash = cs.strokeDasharray || "",
              offset = _parseNum(cs.strokeDashoffset),
              i = dash.indexOf(",")

            i < 0 && (i = dash.indexOf(" "))
            dash = i < 0 ? length : _parseNum(dash.substr(0, i))
            dash > length && (dash = length)
            return [-offset || 0, dash - offset || 0]
          },
          _initCore = function _initCore() {
            if (_windowExists()) {
              _doc = document
              _win = window
              _coreInitted = gsap = _getGSAP()
              _toArray = gsap.utils.toArray
              _getStyleSaver = gsap.core.getStyleSaver

              _reverting = gsap.core.reverting || function () {}

              _isEdge =
                ((_win.navigator || {}).userAgent || "").indexOf("Edge") !== -1 //Microsoft Edge has a bug that causes it not to redraw the path correctly if the stroke-linecap is anything other than "butt" (like "round") and it doesn't match the stroke-linejoin. A way to trigger it is to change the stroke-miterlimit, so we'll only do that if/when we have to (to maximize performance)
            }
          }

        var DrawSVGPlugin = {
          version: "3.12.2",
          name: "drawSVG",
          register: function register(core) {
            gsap = core

            _initCore()
          },
          init: function init(target, value, tween, index, targets) {
            if (!target.getBBox) {
              return false
            }

            _coreInitted || _initCore()

            var length = _getLength(target),
              start,
              end,
              cs

            this.styles =
              _getStyleSaver &&
              _getStyleSaver(
                target,
                "strokeDashoffset,strokeDasharray,strokeMiterlimit",
              )
            this.tween = tween
            this._style = target.style
            this._target = target

            if (value + "" === "true") {
              value = "0 100%"
            } else if (!value) {
              value = "0 0"
            } else if ((value + "").indexOf(" ") === -1) {
              value = "0 " + value
            }

            start = _getPosition(target, length)
            end = _parse(value, length, start[0])
            this._length = _round(length)
            this._dash = _round(start[1] - start[0]) //some browsers render artifacts if dash is 0, so we use a very small number in that case.

            this._offset = _round(-start[0])
            this._dashPT = this.add(
              this,
              "_dash",
              this._dash,
              _round(end[1] - end[0]),
              0,
              0,
              0,
              0,
              0,
              1,
            )
            this._offsetPT = this.add(
              this,
              "_offset",
              this._offset,
              _round(-end[0]),
              0,
              0,
              0,
              0,
              0,
              1,
            )

            if (_isEdge) {
              //to work around a bug in Microsoft Edge, animate the stroke-miterlimit by 0.0001 just to trigger the repaint (unnecessary if it's "round" and stroke-linejoin is also "round"). Imperceptible, relatively high-performance, and effective. Another option was to set the "d" <path> attribute to its current value on every tick, but that seems like it'd be much less performant.
              cs = _win.getComputedStyle(target)

              if (cs.strokeLinecap !== cs.strokeLinejoin) {
                end = _parseNum(cs.strokeMiterlimit)
                this.add(target.style, "strokeMiterlimit", end, end + 0.01)
              }
            }

            this._live =
              _hasNonScalingStroke(target) || ~(value + "").indexOf("live")
            this._nowrap = ~(value + "").indexOf("nowrap")

            this._props.push("drawSVG")

            return _bonusValidated
          },
          render: function render(ratio, data) {
            if (data.tween._time || !_reverting()) {
              var pt = data._pt,
                style = data._style,
                length,
                lengthRatio,
                dash,
                offset

              if (pt) {
                //when the element has vector-effect="non-scaling-stroke" and the SVG is resized (like on a window resize), it actually changes the length of the stroke! So we must sense that and make the proper adjustments.
                if (data._live) {
                  length = _getLength(data._target)

                  if (length !== data._length) {
                    lengthRatio = length / data._length
                    data._length = length

                    if (data._offsetPT) {
                      data._offsetPT.s *= lengthRatio
                      data._offsetPT.c *= lengthRatio
                    }

                    if (data._dashPT) {
                      data._dashPT.s *= lengthRatio
                      data._dashPT.c *= lengthRatio
                    } else {
                      data._dash *= lengthRatio
                    }
                  }
                }

                while (pt) {
                  pt.r(ratio, pt.d)
                  pt = pt._next
                }

                dash = data._dash || (ratio && ratio !== 1 && 0.0001) || 0 // only let it be zero if it's at the start or end of the tween.

                length = data._length - dash + 0.1
                offset = data._offset
                dash &&
                  offset &&
                  dash + Math.abs(offset % data._length) > data._length - 0.2 &&
                  (offset += offset < 0 ? 0.1 : -0.1) &&
                  (length += 0.1)
                style.strokeDashoffset = dash ? offset : offset + 0.001
                style.strokeDasharray =
                  length < 0.2
                    ? "none"
                    : dash
                    ? dash + "px," + (data._nowrap ? 999999 : length) + "px"
                    : "0px, 999999px"
              }
            } else {
              data.styles.revert()
            }
          },
          getLength: _getLength,
          getPosition: _getPosition,
        }
        _getGSAP() && gsap.registerPlugin(DrawSVGPlugin)

        /***/
      },
      /* 8 */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ SplitText: () => /* binding */ SplitText,
          /* harmony export */ default: () => /* binding */ SplitText,
          /* harmony export */
        })
        /* harmony import */ var _utils_strings_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(9)
        /*!
         * SplitText: 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */

        /* eslint-disable */

        var _doc,
          _win,
          _coreInitted,
          gsap,
          _context,
          _toArray,
          _stripExp = /(?:\r|\n|\t\t)/g,
          //find carriage returns, new line feeds and double-tabs.
          _multipleSpacesExp = /(?:\s\s+)/g,
          _initCore = function _initCore(core) {
            _doc = document
            _win = window
            gsap =
              gsap ||
              core ||
              _win.gsap ||
              console.warn("Please gsap.registerPlugin(SplitText)")

            if (gsap) {
              _toArray = gsap.utils.toArray

              _context = gsap.core.context || function () {}

              _coreInitted = 1
            }
          },
          _bonusValidated = 1,
          //<name>SplitText</name>
          _getComputedStyle = function _getComputedStyle(element) {
            return _win.getComputedStyle(element)
          },
          _isAbsolute = function _isAbsolute(vars) {
            return vars.position === "absolute" || vars.absolute === true
          },
          //some characters are combining marks (think diacritics/accents in European languages) which involve 2 or 4 characters that combine in the browser to form a single character. Pass in the remaining text and an array of the special characters to search for and if the text starts with one of those special characters, it'll spit back the number of characters to retain (often 2 or 4). Used in the specialChars features that was introduced in 0.6.0.
          _findSpecialChars = function _findSpecialChars(text, chars) {
            var i = chars.length,
              s

            while (--i > -1) {
              s = chars[i]

              if (text.substr(0, s.length) === s) {
                return s.length
              }
            }
          },
          _divStart = " style='position:relative;display:inline-block;'",
          _cssClassFunc = function _cssClassFunc(cssClass, tag) {
            if (cssClass === void 0) {
              cssClass = ""
            }

            var iterate = ~cssClass.indexOf("++"),
              num = 1

            if (iterate) {
              cssClass = cssClass.split("++").join("")
            }

            return function () {
              return (
                "<" +
                tag +
                _divStart +
                (cssClass
                  ? " class='" + cssClass + (iterate ? num++ : "") + "'>"
                  : ">")
              )
            }
          },
          _swapText = function _swapText(element, oldText, newText) {
            var type = element.nodeType

            if (type === 1 || type === 9 || type === 11) {
              for (
                element = element.firstChild;
                element;
                element = element.nextSibling
              ) {
                _swapText(element, oldText, newText)
              }
            } else if (type === 3 || type === 4) {
              element.nodeValue = element.nodeValue.split(oldText).join(newText)
            }
          },
          _pushReversed = function _pushReversed(a, merge) {
            var i = merge.length

            while (--i > -1) {
              a.push(merge[i])
            }
          },
          _isBeforeWordDelimiter = function _isBeforeWordDelimiter(
            e,
            root,
            wordDelimiter,
          ) {
            var next

            while (e && e !== root) {
              next = e._next || e.nextSibling

              if (next) {
                return next.textContent.charAt(0) === wordDelimiter
              }

              e = e.parentNode || e._parent
            }
          },
          _deWordify = function _deWordify(e) {
            var children = _toArray(e.childNodes),
              l = children.length,
              i,
              child

            for (i = 0; i < l; i++) {
              child = children[i]

              if (child._isSplit) {
                _deWordify(child)
              } else {
                if (
                  i &&
                  child.previousSibling &&
                  child.previousSibling.nodeType === 3
                ) {
                  child.previousSibling.nodeValue +=
                    child.nodeType === 3
                      ? child.nodeValue
                      : child.firstChild.nodeValue
                  e.removeChild(child)
                } else if (child.nodeType !== 3) {
                  e.insertBefore(child.firstChild, child)
                  e.removeChild(child)
                }
              }
            }
          },
          _getStyleAsNumber = function _getStyleAsNumber(name, computedStyle) {
            return parseFloat(computedStyle[name]) || 0
          },
          _setPositionsAfterSplit = function _setPositionsAfterSplit(
            element,
            vars,
            allChars,
            allWords,
            allLines,
            origWidth,
            origHeight,
          ) {
            var cs = _getComputedStyle(element),
              paddingLeft = _getStyleAsNumber("paddingLeft", cs),
              lineOffsetY = -999,
              borderTopAndBottom =
                _getStyleAsNumber("borderBottomWidth", cs) +
                _getStyleAsNumber("borderTopWidth", cs),
              borderLeftAndRight =
                _getStyleAsNumber("borderLeftWidth", cs) +
                _getStyleAsNumber("borderRightWidth", cs),
              padTopAndBottom =
                _getStyleAsNumber("paddingTop", cs) +
                _getStyleAsNumber("paddingBottom", cs),
              padLeftAndRight =
                _getStyleAsNumber("paddingLeft", cs) +
                _getStyleAsNumber("paddingRight", cs),
              lineThreshold =
                _getStyleAsNumber("fontSize", cs) * (vars.lineThreshold || 0.2),
              textAlign = cs.textAlign,
              charArray = [],
              wordArray = [],
              lineArray = [],
              wordDelimiter = vars.wordDelimiter || " ",
              tag = vars.tag ? vars.tag : vars.span ? "span" : "div",
              types = vars.type || vars.split || "chars,words,lines",
              lines = allLines && ~types.indexOf("lines") ? [] : null,
              words = ~types.indexOf("words"),
              chars = ~types.indexOf("chars"),
              absolute = _isAbsolute(vars),
              linesClass = vars.linesClass,
              iterateLine = ~(linesClass || "").indexOf("++"),
              spaceNodesToRemove = [],
              isFlex = cs.display === "flex",
              prevInlineDisplay = element.style.display,
              i,
              j,
              l,
              node,
              nodes,
              isChild,
              curLine,
              addWordSpaces,
              style,
              lineNode,
              lineWidth,
              offset

            iterateLine && (linesClass = linesClass.split("++").join(""))
            isFlex && (element.style.display = "block") //copy all the descendant nodes into an array (we can't use a regular nodeList because it's live and we may need to renest things)

            j = element.getElementsByTagName("*")
            l = j.length
            nodes = []

            for (i = 0; i < l; i++) {
              nodes[i] = j[i]
            } //for absolute positioning, we need to record the x/y offsets and width/height for every <div>. And even if we're not positioning things absolutely, in order to accommodate lines, we must figure out where the y offset changes so that we can sense where the lines break, and we populate the lines array.

            if (lines || absolute) {
              for (i = 0; i < l; i++) {
                node = nodes[i]
                isChild = node.parentNode === element

                if (isChild || absolute || (chars && !words)) {
                  offset = node.offsetTop

                  if (
                    lines &&
                    isChild &&
                    Math.abs(offset - lineOffsetY) > lineThreshold &&
                    (node.nodeName !== "BR" || i === 0)
                  ) {
                    //we found some rare occasions where a certain character like &#8209; could cause the offsetTop to be off by 1 pixel, so we build in a threshold.
                    curLine = []
                    lines.push(curLine)
                    lineOffsetY = offset
                  }

                  if (absolute) {
                    //record offset x and y, as well as width and height so that we can access them later for positioning. Grabbing them at once ensures we don't trigger a browser paint & we maximize performance.
                    node._x = node.offsetLeft
                    node._y = offset
                    node._w = node.offsetWidth
                    node._h = node.offsetHeight
                  }

                  if (lines) {
                    if (
                      (node._isSplit && isChild) ||
                      (!chars && isChild) ||
                      (words && isChild) ||
                      (!words &&
                        node.parentNode.parentNode === element &&
                        !node.parentNode._isSplit)
                    ) {
                      curLine.push(node)
                      node._x -= paddingLeft

                      if (
                        _isBeforeWordDelimiter(node, element, wordDelimiter)
                      ) {
                        node._wordEnd = true
                      }
                    }

                    if (
                      node.nodeName === "BR" &&
                      ((node.nextSibling &&
                        node.nextSibling.nodeName === "BR") ||
                        i === 0)
                    ) {
                      //two consecutive <br> tags signify a new [empty] line. Also, if the entire block of content STARTS with a <br>, add a line.
                      lines.push([])
                    }
                  }
                }
              }
            }

            for (i = 0; i < l; i++) {
              node = nodes[i]
              isChild = node.parentNode === element

              if (node.nodeName === "BR") {
                if (lines || absolute) {
                  node.parentNode && node.parentNode.removeChild(node)
                  nodes.splice(i--, 1)
                  l--
                } else if (!words) {
                  element.appendChild(node)
                }

                continue
              }

              if (absolute) {
                style = node.style

                if (!words && !isChild) {
                  node._x += node.parentNode._x
                  node._y += node.parentNode._y
                }

                style.left = node._x + "px"
                style.top = node._y + "px"
                style.position = "absolute"
                style.display = "block" //if we don't set the width/height, things collapse in older versions of IE and the origin for transforms is thrown off in all browsers.

                style.width = node._w + 1 + "px" //IE is 1px short sometimes. Avoid wrapping

                style.height = node._h + "px"
              }

              if (!words && chars) {
                //we always start out wrapping words in their own <div> so that line breaks happen correctly, but here we'll remove those <div> tags if necessary and re-nest the characters directly into the element rather than inside the word <div>
                if (node._isSplit) {
                  node._next = j = node.nextSibling
                  node.parentNode.appendChild(node) //put it at the end to keep the order correct.

                  while (j && j.nodeType === 3 && j.textContent === " ") {
                    // if there are nodes that are just a space right afterward, go ahead and append them to the end so they're not out of order.
                    node._next = j.nextSibling
                    node.parentNode.appendChild(j)
                    j = j.nextSibling
                  }
                } else if (node.parentNode._isSplit) {
                  node._parent = node.parentNode

                  if (!node.previousSibling && node.firstChild) {
                    node.firstChild._isFirst = true
                  }

                  if (
                    node.nextSibling &&
                    node.nextSibling.textContent === " " &&
                    !node.nextSibling.nextSibling
                  ) {
                    //if the last node inside a nested element is just a space (like T<span>nested </span>), remove it otherwise it'll get placed in the wrong order. Don't remove it right away, though, because we need to sense when words/characters are before a space like _isBeforeWordDelimiter(). Removing it now would make that a false negative.
                    spaceNodesToRemove.push(node.nextSibling)
                  }

                  node._next =
                    node.nextSibling && node.nextSibling._isFirst
                      ? null
                      : node.nextSibling
                  node.parentNode.removeChild(node)
                  nodes.splice(i--, 1)
                  l--
                } else if (!isChild) {
                  offset =
                    !node.nextSibling &&
                    _isBeforeWordDelimiter(
                      node.parentNode,
                      element,
                      wordDelimiter,
                    ) //if this is the last letter in the word (and we're not breaking by lines and not positioning things absolutely), we need to add a space afterwards so that the characters don't just mash together

                  node.parentNode._parent &&
                    node.parentNode._parent.appendChild(node)
                  offset &&
                    node.parentNode.appendChild(_doc.createTextNode(" "))

                  if (tag === "span") {
                    node.style.display = "inline" //so that word breaks are honored properly.
                  }

                  charArray.push(node)
                }
              } else if (
                node.parentNode._isSplit &&
                !node._isSplit &&
                node.innerHTML !== ""
              ) {
                wordArray.push(node)
              } else if (chars && !node._isSplit) {
                if (tag === "span") {
                  node.style.display = "inline"
                }

                charArray.push(node)
              }
            }

            i = spaceNodesToRemove.length

            while (--i > -1) {
              spaceNodesToRemove[i].parentNode.removeChild(
                spaceNodesToRemove[i],
              )
            }

            if (lines) {
              //the next 7 lines just give us the line width in the most reliable way and figure out the left offset (if position isn't relative or absolute). We must set the width along with text-align to ensure everything works properly for various alignments.
              if (absolute) {
                lineNode = _doc.createElement(tag)
                element.appendChild(lineNode)
                lineWidth = lineNode.offsetWidth + "px"
                offset =
                  lineNode.offsetParent === element ? 0 : element.offsetLeft
                element.removeChild(lineNode)
              }

              style = element.style.cssText
              element.style.cssText = "display:none;" //to improve performance, set display:none on the element so that the browser doesn't have to worry about reflowing or rendering while we're renesting things. We'll revert the cssText later.
              //we can't use element.innerHTML = "" because that causes IE to literally delete all the nodes and their content even though we've stored them in an array! So we must loop through the children and remove them.

              while (element.firstChild) {
                element.removeChild(element.firstChild)
              }

              addWordSpaces =
                wordDelimiter === " " && (!absolute || (!words && !chars))

              for (i = 0; i < lines.length; i++) {
                curLine = lines[i]
                lineNode = _doc.createElement(tag)
                lineNode.style.cssText =
                  "display:block;text-align:" +
                  textAlign +
                  ";position:" +
                  (absolute ? "absolute;" : "relative;")

                if (linesClass) {
                  lineNode.className = linesClass + (iterateLine ? i + 1 : "")
                }

                lineArray.push(lineNode)
                l = curLine.length

                for (j = 0; j < l; j++) {
                  if (curLine[j].nodeName !== "BR") {
                    node = curLine[j]
                    lineNode.appendChild(node)
                    addWordSpaces &&
                      node._wordEnd &&
                      lineNode.appendChild(_doc.createTextNode(" "))

                    if (absolute) {
                      if (j === 0) {
                        lineNode.style.top = node._y + "px"
                        lineNode.style.left = paddingLeft + offset + "px"
                      }

                      node.style.top = "0px"

                      if (offset) {
                        node.style.left = node._x - offset + "px"
                      }
                    }
                  }
                }

                if (l === 0) {
                  //if there are no nodes in the line (typically meaning there were two consecutive <br> tags, just add a non-breaking space so that things display properly.
                  lineNode.innerHTML = "&nbsp;"
                } else if (!words && !chars) {
                  _deWordify(lineNode)

                  _swapText(lineNode, String.fromCharCode(160), " ")
                }

                if (absolute) {
                  lineNode.style.width = lineWidth
                  lineNode.style.height = node._h + "px"
                }

                element.appendChild(lineNode)
              }

              element.style.cssText = style
            } //if everything shifts to being position:absolute, the container can collapse in terms of height or width, so fix that here.

            if (absolute) {
              if (origHeight > element.clientHeight) {
                element.style.height = origHeight - padTopAndBottom + "px"

                if (element.clientHeight < origHeight) {
                  //IE8 and earlier use a different box model - we must include padding and borders
                  element.style.height = origHeight + borderTopAndBottom + "px"
                }
              }

              if (origWidth > element.clientWidth) {
                element.style.width = origWidth - padLeftAndRight + "px"

                if (element.clientWidth < origWidth) {
                  //IE8 and earlier use a different box model - we must include padding and borders
                  element.style.width = origWidth + borderLeftAndRight + "px"
                }
              }
            }

            isFlex &&
              (prevInlineDisplay
                ? (element.style.display = prevInlineDisplay)
                : element.style.removeProperty("display"))

            _pushReversed(allChars, charArray)

            words && _pushReversed(allWords, wordArray)

            _pushReversed(allLines, lineArray)
          },
          _splitRawText = function _splitRawText(
            element,
            vars,
            wordStart,
            charStart,
          ) {
            var tag = vars.tag ? vars.tag : vars.span ? "span" : "div",
              types = vars.type || vars.split || "chars,words,lines",
              //words = (types.indexOf("words") !== -1),
              chars = ~types.indexOf("chars"),
              absolute = _isAbsolute(vars),
              wordDelimiter = vars.wordDelimiter || " ",
              space = wordDelimiter !== " " ? "" : absolute ? "&#173; " : " ",
              wordEnd = "</" + tag + ">",
              wordIsOpen = 1,
              specialChars = vars.specialChars
                ? typeof vars.specialChars === "function"
                  ? vars.specialChars
                  : _findSpecialChars
                : null,
              //specialChars can be an array or a function. For performance reasons, we always set this local "specialChars" to a function to which we pass the remaining text and whatever the original vars.specialChars was so that if it's an array, it works with the _findSpecialChars() function.
              text,
              splitText,
              i,
              j,
              l,
              character,
              hasTagStart,
              testResult,
              container = _doc.createElement("div"),
              parent = element.parentNode

            parent.insertBefore(container, element)
            container.textContent = element.nodeValue
            parent.removeChild(element)
            element = container
            text = (0, _utils_strings_js__WEBPACK_IMPORTED_MODULE_0__.getText)(
              element,
            )
            hasTagStart = text.indexOf("<") !== -1

            if (vars.reduceWhiteSpace !== false) {
              text = text
                .replace(_multipleSpacesExp, " ")
                .replace(_stripExp, "")
            }

            if (hasTagStart) {
              text = text.split("<").join("{{LT}}") //we can't leave "<" in the string, or when we set the innerHTML, it can be interpreted as a node
            }

            l = text.length
            splitText = (text.charAt(0) === " " ? space : "") + wordStart()

            for (i = 0; i < l; i++) {
              character = text.charAt(i)

              if (
                specialChars &&
                (testResult = specialChars(text.substr(i), vars.specialChars))
              ) {
                // look for any specialChars that were declared. Remember, they can be passed in like {specialChars:["मी", "पा", "है"]} or a function could be defined instead. Either way, the function should return the number of characters that should be grouped together for this "character".
                character = text.substr(i, testResult || 1)
                splitText +=
                  chars && character !== " "
                    ? charStart() + character + "</" + tag + ">"
                    : character
                i += testResult - 1
              } else if (
                character === wordDelimiter &&
                text.charAt(i - 1) !== wordDelimiter &&
                i
              ) {
                splitText += wordIsOpen ? wordEnd : ""
                wordIsOpen = 0

                while (text.charAt(i + 1) === wordDelimiter) {
                  //skip over empty spaces (to avoid making them words)
                  splitText += space
                  i++
                }

                if (i === l - 1) {
                  splitText += space
                } else if (text.charAt(i + 1) !== ")") {
                  splitText += space + wordStart()
                  wordIsOpen = 1
                }
              } else if (character === "{" && text.substr(i, 6) === "{{LT}}") {
                splitText += chars
                  ? charStart() + "{{LT}}" + "</" + tag + ">"
                  : "{{LT}}"
                i += 5
              } else if (
                (character.charCodeAt(0) >= 0xd800 &&
                  character.charCodeAt(0) <= 0xdbff) ||
                (text.charCodeAt(i + 1) >= 0xfe00 &&
                  text.charCodeAt(i + 1) <= 0xfe0f)
              ) {
                //special emoji characters use 2 or 4 unicode characters that we must keep together.
                j =
                  (
                    (text
                      .substr(i, 12)
                      .split(
                        _utils_strings_js__WEBPACK_IMPORTED_MODULE_0__.emojiExp,
                      ) || [])[1] || ""
                  ).length || 2
                splitText +=
                  chars && character !== " "
                    ? charStart() + text.substr(i, j) + "</" + tag + ">"
                    : text.substr(i, j)
                i += j - 1
              } else {
                splitText +=
                  chars && character !== " "
                    ? charStart() + character + "</" + tag + ">"
                    : character
              }
            }

            element.outerHTML = splitText + (wordIsOpen ? wordEnd : "")
            hasTagStart && _swapText(parent, "{{LT}}", "<") //note: don't perform this on "element" because that gets replaced with all new elements when we set element.outerHTML.
          },
          _split = function _split(element, vars, wordStart, charStart) {
            var children = _toArray(element.childNodes),
              l = children.length,
              absolute = _isAbsolute(vars),
              i,
              child

            if (element.nodeType !== 3 || l > 1) {
              vars.absolute = false

              for (i = 0; i < l; i++) {
                child = children[i]
                child._next =
                  child._isFirst =
                  child._parent =
                  child._wordEnd =
                    null

                if (child.nodeType !== 3 || /\S+/.test(child.nodeValue)) {
                  if (
                    absolute &&
                    child.nodeType !== 3 &&
                    _getComputedStyle(child).display === "inline"
                  ) {
                    //if there's a child node that's display:inline, switch it to inline-block so that absolute positioning works properly (most browsers don't report offsetTop/offsetLeft properly inside a <span> for example)
                    child.style.display = "inline-block"
                    child.style.position = "relative"
                  }

                  child._isSplit = true

                  _split(child, vars, wordStart, charStart) //don't split lines on child elements
                }
              }

              vars.absolute = absolute
              element._isSplit = true
              return
            }

            _splitRawText(element, vars, wordStart, charStart)
          }

        var SplitText = /*#__PURE__*/ (function () {
          function SplitText(element, vars) {
            _coreInitted || _initCore()
            this.elements = _toArray(element)
            this.chars = []
            this.words = []
            this.lines = []
            this._originals = []
            this.vars = vars || {}

            _context(this)

            _bonusValidated && this.split(vars)
          }

          var _proto = SplitText.prototype

          _proto.split = function split(vars) {
            this.isSplit && this.revert()
            this.vars = vars = vars || this.vars
            this._originals.length =
              this.chars.length =
              this.words.length =
              this.lines.length =
                0

            var i = this.elements.length,
              tag = vars.tag ? vars.tag : vars.span ? "span" : "div",
              wordStart = _cssClassFunc(vars.wordsClass, tag),
              charStart = _cssClassFunc(vars.charsClass, tag),
              origHeight,
              origWidth,
              e //we split in reversed order so that if/when we position:absolute elements, they don't affect the position of the ones after them in the document flow (shifting them up as they're taken out of the document flow).

            while (--i > -1) {
              e = this.elements[i]
              this._originals[i] = e.innerHTML
              origHeight = e.clientHeight
              origWidth = e.clientWidth

              _split(e, vars, wordStart, charStart)

              _setPositionsAfterSplit(
                e,
                vars,
                this.chars,
                this.words,
                this.lines,
                origWidth,
                origHeight,
              )
            }

            this.chars.reverse()
            this.words.reverse()
            this.lines.reverse()
            this.isSplit = true
            return this
          }

          _proto.revert = function revert() {
            var originals = this._originals

            if (!originals) {
              throw "revert() call wasn't scoped properly."
            }

            this.elements.forEach(function (e, i) {
              return (e.innerHTML = originals[i])
            })
            this.chars = []
            this.words = []
            this.lines = []
            this.isSplit = false
            return this
          }

          SplitText.create = function create(element, vars) {
            return new SplitText(element, vars)
          }

          return SplitText
        })()
        SplitText.version = "3.12.2"
        SplitText.register = _initCore

        /***/
      },
      /* 9 */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ emojiExp: () => /* binding */ emojiExp,
          /* harmony export */ getText: () => /* binding */ getText,
          /* harmony export */ splitInnerHTML: () =>
            /* binding */ splitInnerHTML,
          /* harmony export */ emojiSafeSplit: () =>
            /* binding */ emojiSafeSplit,
          /* harmony export */
        })
        /*!
         * strings: 3.12.2
         * https://greensock.com
         *
         * Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */

        /* eslint-disable */
        var _trimExp = /(?:^\s+|\s+$)/g
        var emojiExp =
          /([\uD800-\uDBFF][\uDC00-\uDFFF](?:[\u200D\uFE0F][\uD800-\uDBFF][\uDC00-\uDFFF]){2,}|\uD83D\uDC69(?:\u200D(?:(?:\uD83D\uDC69\u200D)?\uD83D\uDC67|(?:\uD83D\uDC69\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D(?:\uD83D\uDC69\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]\uFE0F|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC6F\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3C-\uDD3E\uDDD6-\uDDDF])\u200D[\u2640\u2642]\uFE0F|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F\u200D[\u2640\u2642]|(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642])\uFE0F|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\uD83D\uDC69\u200D[\u2695\u2696\u2708]|\uD83D\uDC68(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708]))\uFE0F|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83D\uDC69\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|\uD83D\uDC68(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66\u200D\uD83D\uDC66|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92])|(?:\uD83C[\uDFFB-\uDFFF])\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]))|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDD1-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\u200D(?:(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC67|(?:(?:\uD83D[\uDC68\uDC69])\u200D)?\uD83D\uDC66)|\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC69\uDC6E\uDC70-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD18-\uDD1C\uDD1E\uDD1F\uDD26\uDD30-\uDD39\uDD3D\uDD3E\uDDD1-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])?|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDEEB\uDEEC\uDEF4-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEF8]|\uD83E[\uDD10-\uDD3A\uDD3C-\uDD3E\uDD40-\uDD45\uDD47-\uDD4C\uDD50-\uDD6B\uDD80-\uDD97\uDDC0\uDDD0-\uDDE6])\uFE0F)/
        function getText(e) {
          var type = e.nodeType,
            result = ""

          if (type === 1 || type === 9 || type === 11) {
            if (typeof e.textContent === "string") {
              return e.textContent
            } else {
              for (e = e.firstChild; e; e = e.nextSibling) {
                result += getText(e)
              }
            }
          } else if (type === 3 || type === 4) {
            return e.nodeValue
          }

          return result
        }
        function splitInnerHTML(element, delimiter, trim, preserveSpaces) {
          var node = element.firstChild,
            result = [],
            s

          while (node) {
            if (node.nodeType === 3) {
              s = (node.nodeValue + "").replace(/^\n+/g, "")

              if (!preserveSpaces) {
                s = s.replace(/\s+/g, " ")
              }

              result.push.apply(
                result,
                emojiSafeSplit(s, delimiter, trim, preserveSpaces),
              )
            } else if ((node.nodeName + "").toLowerCase() === "br") {
              result[result.length - 1] += "<br>"
            } else {
              result.push(node.outerHTML)
            }

            node = node.nextSibling
          }

          s = result.length

          while (s--) {
            result[s] === "&" && result.splice(s, 1, "&amp;")
          }

          return result
        }
        

        function emojiSafeSplit(text, delimiter, trim, preserveSpaces) {
          text += "" // make sure it's cast as a string. Someone may pass in a number.

          trim && (text = text.trim ? text.trim() : text.replace(_trimExp, "")) // IE9 and earlier compatibility

          if (delimiter && delimiter !== "") {
            return text
              .replace(/>/g, "&gt;")
              .replace(/</g, "&lt;")
              .split(delimiter)
          }

          var result = [],
            l = text.length,
            i = 0,
            j,
            character

          for (; i < l; i++) {
            character = text.charAt(i)

            if (
              (character.charCodeAt(0) >= 0xd800 &&
                character.charCodeAt(0) <= 0xdbff) ||
              (text.charCodeAt(i + 1) >= 0xfe00 &&
                text.charCodeAt(i + 1) <= 0xfe0f)
            ) {
              //special emoji characters use 2 or 4 unicode characters that we must keep together.
              j =
                ((text.substr(i, 12).split(emojiExp) || [])[1] || "").length ||
                2
              character = text.substr(i, j)
              result.emoji = 1
              i += j - 1
            }

            result.push(
              character === ">"
                ? "&gt;"
                : character === "<"
                ? "&lt;"
                : preserveSpaces &&
                  character === " " &&
                  (text.charAt(i - 1) === " " || text.charAt(i + 1) === " ")
                ? "&nbsp;"
                : character,
            )
          }

          return result
        }

        /***/
      },
      /* 10 */
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        "use strict"
        __webpack_require__.r(__webpack_exports__)
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ ScrollSmoother: () =>
            /* binding */ ScrollSmoother,
          /* harmony export */ default: () => /* binding */ ScrollSmoother,
          /* harmony export */
        })
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i]
            descriptor.enumerable = descriptor.enumerable || false
            descriptor.configurable = true
            if ("value" in descriptor) descriptor.writable = true
            Object.defineProperty(target, descriptor.key, descriptor)
          }
        }

        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps) _defineProperties(Constructor.prototype, protoProps)
          if (staticProps) _defineProperties(Constructor, staticProps)
          return Constructor
        }

        /*!
         * ScrollSmoother 3.12.2
         * https://greensock.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */

        /* eslint-disable */
        var gsap,
          _coreInitted,
          _win,
          _doc,
          _docEl,
          _body,
          _root,
          _toArray,
          _clamp,
          ScrollTrigger,
          _mainInstance,
          _expo,
          _getVelocityProp,
          _inputObserver,
          _context,
          _onResizeDelayedCall,
          _windowExists = function _windowExists() {
            return typeof window !== "undefined"
          },
          _getGSAP = function _getGSAP() {
            return (
              gsap ||
              (_windowExists() &&
                (gsap = window.gsap) &&
                gsap.registerPlugin &&
                gsap)
            )
          },
          _bonusValidated = 1,
          //<name>ScrollSmoother</name>
          _round = function _round(value) {
            return Math.round(value * 100000) / 100000 || 0
          },
          _maxScroll = function _maxScroll(scroller) {
            return ScrollTrigger.maxScroll(scroller || _win)
          },
          _autoDistance = function _autoDistance(el, progress) {
            // for calculating the distance (and offset) for elements with speed: "auto". Progress is for if it's "above the fold" (negative start position), so we can crop as little as possible.
            var parent = el.parentNode || _docEl,
              b1 = el.getBoundingClientRect(),
              b2 = parent.getBoundingClientRect(),
              gapTop = b2.top - b1.top,
              gapBottom = b2.bottom - b1.bottom,
              change =
                (Math.abs(gapTop) > Math.abs(gapBottom) ? gapTop : gapBottom) /
                (1 - progress),
              offset = -change * progress,
              ratio,
              extraChange

            if (change > 0) {
              // if the image starts at the BOTTOM of the container, adjust things so that it shows as much of the image as possible while still covering.
              ratio = b2.height / (_win.innerHeight + b2.height)
              extraChange =
                ratio === 0.5
                  ? b2.height * 2
                  : Math.min(
                      b2.height,
                      Math.abs((-change * ratio) / (2 * ratio - 1)),
                    ) *
                    2 *
                    (progress || 1)
              offset += progress ? -extraChange * progress : -extraChange / 2 // whatever the offset, we must double that in the opposite direction to compensate.

              change += extraChange
            }

            return {
              change: change,
              offset: offset,
            }
          },
          _wrap = function _wrap(el) {
            var wrapper = _doc.querySelector(".ScrollSmoother-wrapper") // some frameworks load multiple times, so one already exists, just use that to avoid duplicates

            if (!wrapper) {
              wrapper = _doc.createElement("div")
              wrapper.classList.add("ScrollSmoother-wrapper")
              el.parentNode.insertBefore(wrapper, el)
              wrapper.appendChild(el)
            }

            return wrapper
          }

        var ScrollSmoother = /*#__PURE__*/ (function () {
          function ScrollSmoother(vars) {
            var _this = this

            _coreInitted ||
              ScrollSmoother.register(gsap) ||
              console.warn("Please gsap.registerPlugin(ScrollSmoother)")
            vars = this.vars = vars || {}
            _mainInstance && _mainInstance.kill()
            _mainInstance = this

            _context(this)

            var _vars = vars,
              smoothTouch = _vars.smoothTouch,
              _onUpdate = _vars.onUpdate,
              onStop = _vars.onStop,
              smooth = _vars.smooth,
              onFocusIn = _vars.onFocusIn,
              normalizeScroll = _vars.normalizeScroll,
              wholePixels = _vars.wholePixels,
              content,
              wrapper,
              height,
              mainST,
              effects,
              sections,
              intervalID,
              wrapperCSS,
              contentCSS,
              paused,
              pausedNormalizer,
              recordedRefreshScroll,
              recordedRefreshScrub,
              self = this,
              effectsPrefix = vars.effectsPrefix || "",
              scrollFunc = ScrollTrigger.getScrollFunc(_win),
              smoothDuration =
                ScrollTrigger.isTouch === 1
                  ? smoothTouch === true
                    ? 0.8
                    : parseFloat(smoothTouch) || 0
                  : smooth === 0 || smooth === false
                  ? 0
                  : parseFloat(smooth) || 0.8,
              speed = (smoothDuration && +vars.speed) || 1,
              currentY = 0,
              delta = 0,
              startupPhase = 1,
              tracker = _getVelocityProp(0),
              updateVelocity = function updateVelocity() {
                return tracker.update(-currentY)
              },
              scroll = {
                y: 0,
              },
              removeScroll = function removeScroll() {
                return (content.style.overflow = "visible")
              },
              isProxyScrolling,
              killScrub = function killScrub(trigger) {
                trigger.update() // it's possible that it hasn't been synchronized with the actual scroll position yet, like if it's later in the _triggers Array. If it was already updated, it'll skip the processing anyway.

                var scrub = trigger.getTween()

                if (scrub) {
                  scrub.pause()
                  scrub._time = scrub._dur // force the playhead to completion without rendering just so that when it resumes, it doesn't jump back in the .resetTo().

                  scrub._tTime = scrub._tDur
                }

                isProxyScrolling = false
                trigger.animation.progress(trigger.progress, true)
              },
              render = function render(y, force) {
                if ((y !== currentY && !paused) || force) {
                  wholePixels && (y = Math.round(y))

                  if (smoothDuration) {
                    content.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      y +
                      ", 0, 1)" //content.style.transform = "translateY(" + y + "px)"; // NOTE: when we used matrix3d() or set will-change: transform, it performed noticeably worse on iOS counter-intuitively!

                    content._gsap.y = y + "px"
                  }

                  delta = y - currentY
                  currentY = y
                  ScrollTrigger.isUpdating ||
                    ScrollSmoother.isRefreshing ||
                    ScrollTrigger.update() // note: if we allowed an update() when in the middle of a refresh() it could render all the other ScrollTriggers and inside the update(), _refreshing would be true thus scrubs would jump instantly, but then on the very next update they'd continue from there. Basically this allowed update() to be called on OTHER ScrollTriggers during the refresh() of the mainST which could cause some complications. See https://greensock.com/forums/topic/35536-smoothscroller-ignoremobileresize-for-non-touch-devices
                }
              },
              scrollTop = function scrollTop(value) {
                if (arguments.length) {
                  value < 0 && (value = 0)
                  scroll.y = -value // don't use currentY because we must accurately track the delta variable (in render() method)

                  isProxyScrolling = true // otherwise, if snapping was applied (or anything that attempted to SET the scroll proxy's scroll position), we'd set the scroll here which would then (on the next tick) update the content tween/ScrollTrigger which would try to smoothly animate to that new value, thus the scrub tween would impede the progress. So we use this flag to respond accordingly in the ScrollTrigger's onUpdate and effectively force the scrub to its end immediately.

                  paused ? (currentY = -value) : render(-value)
                  ScrollTrigger.isRefreshing
                    ? mainST.update()
                    : scrollFunc(value / speed) // during a refresh, we revert all scrollers to 0 and then put them back. We shouldn't force the window to that value too during the refresh.

                  return this
                }

                return -currentY
              },
              resizeObserver =
                typeof ResizeObserver !== "undefined" &&
                vars.autoResize !== false &&
                new ResizeObserver(function () {
                  if (!ScrollTrigger.isRefreshing) {
                    var max = _maxScroll(wrapper) * speed
                    max < -currentY && scrollTop(max) // if the user scrolled down to the bottom, for example, and then the page resizes smaller, we should adjust things accordingly right away so that the scroll position isn't past the very end.

                    _onResizeDelayedCall.restart(true)
                  }
                }),
              lastFocusElement,
              _onFocusIn = function _onFocusIn(e) {
                // when the focus changes, make sure that element is on-screen
                wrapper.scrollTop = 0

                if (
                  (e.target.contains && e.target.contains(wrapper)) ||
                  (onFocusIn && onFocusIn(_this, e) === false)
                ) {
                  return
                }

                ScrollTrigger.isInViewport(e.target) ||
                  e.target === lastFocusElement ||
                  _this.scrollTo(e.target, false, "center center")
                lastFocusElement = e.target
              },
              _transformPosition = function _transformPosition(position, st) {
                // feed in a position (start or end scroll value) and a ScrollTrigger that's associated with a parallax effect and it'll spit back the adjusted position based on the movement of the trigger. For example, if the trigger goes at a speed of 0.5 while in the viewport, we must push the start/end values of OTHER ScrollTriggers that use that same trigger further down to compensate.
                if (position < st.start) {
                  return position
                }

                var ratio = isNaN(st.ratio) ? 1 : st.ratio,
                  change = st.end - st.start,
                  distance = position - st.start,
                  offset = st.offset || 0,
                  pins = st.pins || [],
                  pinOffset = pins.offset || 0,
                  progressOffset =
                    (st._startClamp && st.start <= 0) ||
                    (st.pins && st.pins.offset)
                      ? 0
                      : st._endClamp && st.end === _maxScroll()
                      ? 1
                      : 0.5
                pins.forEach(function (p) {
                  // remove any pinning space/distance
                  change -= p.distance

                  if (p.nativeStart <= position) {
                    distance -= p.distance
                  }
                })

                if (pinOffset) {
                  // edge case when a clamped effect starts mid-pin; we've gotta compensate for the smaller change amount (the yOffset gets set to the st.pins.offset, so let's say it clamps such that the page starts with the element pinned 100px in, we have to set the yOffset to 100 but then subtract 100 from the change value to compensate, thus we must scale the positions accordingly based on the ratios. Like if it would normally have a change of 2000, and a pin would normally hit at 1000, but we're offsetting by 100, that means everything must scale now that we're only moving 1900px rather than 2000px.
                  distance *= (change - pinOffset / ratio) / change
                }

                return (
                  position +
                  (distance - offset * progressOffset) / ratio -
                  distance
                )
              },
              adjustEffectRelatedTriggers =
                function adjustEffectRelatedTriggers(st, triggers, partial) {
                  // if we're using this method to do only a partial Array of triggers, we should NOT reset or rebuild the pin data. For example, we tap into this from the offset() method.
                  partial || (st.pins.length = st.pins.offset = 0)
                  var pins = st.pins,
                    markers = st.markers,
                    dif,
                    isClamped,
                    start,
                    end,
                    nativeStart,
                    nativeEnd,
                    i,
                    trig

                  for (i = 0; i < triggers.length; i++) {
                    trig = triggers[i]

                    if (
                      st.trigger &&
                      trig.trigger &&
                      st !== trig &&
                      (trig.trigger === st.trigger ||
                        trig.pinnedContainer === st.trigger ||
                        st.trigger.contains(trig.trigger))
                    ) {
                      nativeStart =
                        trig._startNative || trig._startClamp || trig.start
                      nativeEnd = trig._endNative || trig._endClamp || trig.end
                      start = _transformPosition(nativeStart, st) // note: _startClamp and _endClamp are populated with the unclamped values. For the sake of efficiency sake, we use the property both like a boolean to indicate that clamping is enabled AND the actual original unclamped value which we need in situations like if there's a data-speed="" on an element that has something like start="clamp(top bottom)". For in-viewport elements, it would clamp the values on the ScrollTrigger first, then feed it here and we'd adjust it on the clamped value which could throw things off - we need to apply the logic to the unclamped value and THEN re-apply clamping on the result.

                      end =
                        trig.pin && nativeEnd > 0
                          ? start + (nativeEnd - nativeStart)
                          : _transformPosition(nativeEnd, st)
                      trig.setPositions(
                        start,
                        end,
                        true,
                        (trig._startClamp ? Math.max(0, start) : start) -
                          nativeStart,
                      ) // the last value (pinOffset) is to adjust the pinStart y value inside ScrollTrigger to accommodate for the y offset that gets applied by the parallax effect.

                      trig.markerStart &&
                        markers.push(
                          gsap.quickSetter(
                            [trig.markerStart, trig.markerEnd],
                            "y",
                            "px",
                          ),
                        )

                      if (trig.pin && trig.end > 0 && !partial) {
                        dif = trig.end - trig.start
                        isClamped = st._startClamp && trig.start < 0

                        if (isClamped) {
                          if (st.start > 0) {
                            // the trigger element on the effect must have been pinned BEFORE its starting position, so in this edge case we must adjust the start position to be 0 and end position to get pushed further by the amount of the overlap
                            st.setPositions(
                              0,
                              st.end + (st._startNative - st.start),
                              true,
                            ) // add the overlap amount

                            adjustEffectRelatedTriggers(st, triggers)
                            return // start over for this trigger element!
                          }

                          dif += trig.start
                          pins.offset = -trig.start // edge case when a clamped effect starts mid-pin, we've gotta compensate in the onUpdate algorithm.
                        }

                        pins.push({
                          start: trig.start,
                          nativeStart: nativeStart,
                          end: trig.end,
                          distance: dif,
                          trig: trig,
                        })
                        st.setPositions(
                          st.start,
                          st.end + (isClamped ? -trig.start : dif),
                          true,
                        )
                      }
                    }
                  }
                },
              adjustParallaxPosition = function adjustParallaxPosition(
                triggers,
                createdAfterEffectWasApplied,
              ) {
                effects.forEach(function (st) {
                  return adjustEffectRelatedTriggers(
                    st,
                    triggers,
                    createdAfterEffectWasApplied,
                  )
                })
              },
              onRefresh = function onRefresh() {
                removeScroll()
                requestAnimationFrame(removeScroll)

                if (effects) {
                  // adjust all the effect start/end positions including any pins!
                  ScrollTrigger.getAll().forEach(function (st) {
                    // record the native start/end positions because we'll be messing with them and need a way to have a "source of truth"
                    st._startNative = st.start
                    st._endNative = st.end
                  })
                  effects.forEach(function (st) {
                    var start = st._startClamp || st.start,
                      // if it was already clamped, we should base things on the unclamped value and then do the clamping here.
                      end = st.autoSpeed
                        ? Math.min(_maxScroll(), st.end)
                        : start + Math.abs((st.end - start) / st.ratio),
                      offset = end - st.end // we split the difference so that it reaches its natural position in the MIDDLE of the viewport

                    start -= offset / 2
                    end -= offset / 2

                    if (start > end) {
                      var s = start
                      start = end
                      end = s
                    }

                    if (st._startClamp && start < 0) {
                      end = st.ratio < 0 ? _maxScroll() : st.end / st.ratio
                      offset = end - st.end
                      start = 0
                    } else if (
                      st.ratio < 0 ||
                      (st._endClamp && end >= _maxScroll())
                    ) {
                      end = _maxScroll()
                      start =
                        st.ratio < 0
                          ? 0
                          : st.ratio > 1
                          ? 0
                          : end - (end - st.start) / st.ratio
                      offset = (end - start) * st.ratio - (st.end - st.start)
                    }

                    st.offset = offset || 0.0001 // we assign at least a tiny value because we check in the onUpdate for .offset being set in order to apply values.

                    st.pins.length = st.pins.offset = 0
                    st.setPositions(start, end, true) // note: another way of getting only the amount of offset traveled for a certain ratio is: distanceBetweenStartAndEnd * (1 / ratio - 1)
                  })
                  adjustParallaxPosition(ScrollTrigger.sort())
                }

                tracker.reset()
              },
              addOnRefresh = function addOnRefresh() {
                return ScrollTrigger.addEventListener("refresh", onRefresh)
              },
              restoreEffects = function restoreEffects() {
                return (
                  effects &&
                  effects.forEach(function (st) {
                    return st.vars.onRefresh(st)
                  })
                )
              },
              revertEffects = function revertEffects() {
                effects &&
                  effects.forEach(function (st) {
                    return st.vars.onRefreshInit(st)
                  })
                return restoreEffects
              },
              effectValueGetter = function effectValueGetter(
                name,
                value,
                index,
                el,
              ) {
                return function () {
                  var v = typeof value === "function" ? value(index, el) : value
                  v ||
                    v === 0 ||
                    (v =
                      el.getAttribute("data-" + effectsPrefix + name) ||
                      (name === "speed" ? 1 : 0))
                  el.setAttribute("data-" + effectsPrefix + name, v)
                  var clamp = (v + "").substr(0, 6) === "clamp("
                  return {
                    clamp: clamp,
                    value: clamp ? v.substr(6, v.length - 7) : v,
                  }
                }
              },
              createEffect = function createEffect(
                el,
                speed,
                lag,
                index,
                effectsPadding,
              ) {
                effectsPadding =
                  (typeof effectsPadding === "function"
                    ? effectsPadding(index, el)
                    : effectsPadding) || 0

                var getSpeed = effectValueGetter("speed", speed, index, el),
                  getLag = effectValueGetter("lag", lag, index, el),
                  startY = gsap.getProperty(el, "y"),
                  cache = el._gsap,
                  ratio,
                  st,
                  autoSpeed,
                  scrub,
                  progressOffset,
                  yOffset,
                  pins = [],
                  initDynamicValues = function initDynamicValues() {
                    speed = getSpeed()
                    lag = parseFloat(getLag().value)
                    ratio = parseFloat(speed.value) || 1
                    autoSpeed = speed.value === "auto"
                    progressOffset =
                      autoSpeed ||
                      (st && st._startClamp && st.start <= 0) ||
                      pins.offset
                        ? 0
                        : st && st._endClamp && st.end === _maxScroll()
                        ? 1
                        : 0.5
                    scrub && scrub.kill()
                    scrub =
                      lag &&
                      gsap.to(el, {
                        ease: _expo,
                        overwrite: false,
                        y: "+=0",
                        duration: lag,
                      })

                    if (st) {
                      st.ratio = ratio
                      st.autoSpeed = autoSpeed
                    }
                  },
                  revert = function revert() {
                    cache.y = startY + "px"
                    cache.renderTransform(1)
                    initDynamicValues()
                  },
                  markers = [],
                  change = 0,
                  updateChange = function updateChange(self) {
                    if (autoSpeed) {
                      revert()

                      var auto = _autoDistance(
                        el,
                        _clamp(0, 1, -self.start / (self.end - self.start)),
                      )

                      change = auto.change
                      yOffset = auto.offset
                    } else {
                      yOffset = pins.offset || 0
                      change = (self.end - self.start - yOffset) * (1 - ratio)
                    }

                    pins.forEach(function (p) {
                      return (change -= p.distance * (1 - ratio))
                    })
                    self.offset = change || 0.001
                    self.vars.onUpdate(self)
                    scrub && scrub.progress(1)
                  }

                initDynamicValues()

                if (ratio !== 1 || autoSpeed || scrub) {
                  st = ScrollTrigger.create({
                    trigger: autoSpeed ? el.parentNode : el,
                    start: function start() {
                      return speed.clamp
                        ? "clamp(top bottom+=" + effectsPadding + ")"
                        : "top bottom+=" + effectsPadding
                    },
                    end: function end() {
                      return speed.value < 0
                        ? "max"
                        : speed.clamp
                        ? "clamp(bottom top-=" + effectsPadding + ")"
                        : "bottom top-=" + effectsPadding
                    },
                    scroller: wrapper,
                    scrub: true,
                    refreshPriority: -999,
                    // must update AFTER any other ScrollTrigger pins
                    onRefreshInit: revert,
                    onRefresh: updateChange,
                    onKill: function onKill(self) {
                      var i = effects.indexOf(self)
                      i >= 0 && effects.splice(i, 1)
                      revert()
                    },
                    onUpdate: function onUpdate(self) {
                      var y =
                          startY + change * (self.progress - progressOffset),
                        i = pins.length,
                        extraY = 0,
                        pin,
                        scrollY,
                        end

                      if (self.offset) {
                        // wait until the effects are adjusted.
                        if (i) {
                          // pinning must be handled in a special way because when pinned, slope changes to 1.
                          scrollY = -currentY // -scroll.y;

                          end = self.end

                          while (i--) {
                            pin = pins[i]

                            if (
                              pin.trig.isActive ||
                              (scrollY >= pin.start && scrollY <= pin.end)
                            ) {
                              // currently pinned so no need to set anything
                              if (scrub) {
                                pin.trig.progress +=
                                  pin.trig.direction < 0 ? 0.001 : -0.001 // just to make absolutely sure that it renders (if the progress didn't change, it'll skip)

                                pin.trig.update(0, 0, 1)
                                scrub.resetTo(
                                  "y",
                                  parseFloat(cache.y),
                                  -delta,
                                  true,
                                )
                                startupPhase && scrub.progress(1)
                              }

                              return
                            }

                            scrollY > pin.end && (extraY += pin.distance)
                            end -= pin.distance
                          }

                          y =
                            startY +
                            extraY +
                            change *
                              ((gsap.utils.clamp(
                                self.start,
                                self.end,
                                scrollY,
                              ) -
                                self.start -
                                extraY) /
                                (end - self.start) -
                                progressOffset)
                        }

                        markers.length &&
                          !autoSpeed &&
                          markers.forEach(function (setter) {
                            return setter(y - extraY)
                          })
                        y = _round(y + yOffset)

                        if (scrub) {
                          scrub.resetTo("y", y, -delta, true)
                          startupPhase && scrub.progress(1)
                        } else {
                          cache.y = y + "px"
                          cache.renderTransform(1)
                        }
                      }
                    },
                  })
                  updateChange(st)
                  gsap.core.getCache(st.trigger).stRevert = revertEffects // if user calls ScrollSmoother.create() with effects and THEN creates a ScrollTrigger on the same trigger element, the effect would throw off the start/end positions thus we needed a way to revert things when creating a new ScrollTrigger in that scenario, so we use this stRevert property of the GSCache inside ScrollTrigger.

                  st.startY = startY
                  st.pins = pins
                  st.markers = markers
                  st.ratio = ratio
                  st.autoSpeed = autoSpeed
                  el.style.willChange = "transform"
                }

                return st
              }

            addOnRefresh()
            ScrollTrigger.addEventListener("killAll", addOnRefresh)
            gsap.delayedCall(0.5, function () {
              return (startupPhase = 0)
            })
            this.scrollTop = scrollTop

            this.scrollTo = function (target, smooth, position) {
              var p = gsap.utils.clamp(
                0,
                _maxScroll(),
                isNaN(target) ? _this.offset(target, position) : +target,
              )
              !smooth
                ? scrollTop(p)
                : paused
                ? gsap.to(_this, {
                    duration: smoothDuration,
                    scrollTop: p,
                    overwrite: "auto",
                    ease: _expo,
                  })
                : scrollFunc(p)
            }

            this.offset = function (target, position) {
              target = _toArray(target)[0]
              var cssText = target.style.cssText,
                // because if there's an effect applied, we revert(). We need to restore.
                st = ScrollTrigger.create({
                  trigger: target,
                  start: position || "top top",
                }),
                y

              if (effects) {
                startupPhase
                  ? ScrollTrigger.refresh()
                  : adjustParallaxPosition([st], true) // all the effects need to go through the initial full refresh() so that all the pins and ratios and offsets are set up. That's why we do a full refresh() if it's during the startupPhase.
              }

              y = st.start / speed
              st.kill(false)
              target.style.cssText = cssText
              gsap.core.getCache(target).uncache = 1
              return y
            }

            function refreshHeight() {
              height = content.clientHeight
              content.style.overflow = "visible"
              _body.style.height =
                _win.innerHeight + (height - _win.innerHeight) / speed + "px"
              return height - _win.innerHeight
            }

            this.content = function (element) {
              if (arguments.length) {
                var newContent =
                  _toArray(element || "#smooth-content")[0] ||
                  console.warn(
                    "ScrollSmoother needs a valid content element.",
                  ) ||
                  _body.children[0]

                if (newContent !== content) {
                  content = newContent
                  contentCSS = content.getAttribute("style") || ""
                  resizeObserver && resizeObserver.observe(content)
                  gsap.set(content, {
                    overflow: "visible",
                    width: "100%",
                    boxSizing: "border-box",
                    y: "+=0",
                  })
                  smoothDuration ||
                    gsap.set(content, {
                      clearProps: "transform",
                    })
                }

                return this
              }

              return content
            }

            this.wrapper = function (element) {
              if (arguments.length) {
                wrapper =
                  _toArray(element || "#smooth-wrapper")[0] || _wrap(content)
                wrapperCSS = wrapper.getAttribute("style") || ""
                refreshHeight()
                gsap.set(
                  wrapper,
                  smoothDuration
                    ? {
                        overflow: "hidden",
                        position: "fixed",
                        height: "100%",
                        width: "100%",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                      }
                    : {
                        overflow: "visible",
                        position: "relative",
                        width: "100%",
                        height: "auto",
                        top: "auto",
                        bottom: "auto",
                        left: "auto",
                        right: "auto",
                      },
                )
                return this
              }

              return wrapper
            }

            this.effects = function (targets, config) {
              var _effects

              effects || (effects = [])

              if (!targets) {
                return effects.slice(0)
              }

              targets = _toArray(targets)
              targets.forEach(function (target) {
                var i = effects.length

                while (i--) {
                  effects[i].trigger === target && effects[i].kill() // will automatically splice() it from the effects Array in the onKill
                }
              })
              config = config || {}
              var _config = config,
                speed = _config.speed,
                lag = _config.lag,
                effectsPadding = _config.effectsPadding,
                effectsToAdd = [],
                i,
                st

              for (i = 0; i < targets.length; i++) {
                st = createEffect(targets[i], speed, lag, i, effectsPadding)
                st && effectsToAdd.push(st)
              }

              ;(_effects = effects).push.apply(_effects, effectsToAdd)

              return effectsToAdd
            }

            this.sections = function (targets, config) {
              var _sections

              sections || (sections = [])

              if (!targets) {
                return sections.slice(0)
              }

              var newSections = _toArray(targets).map(function (el) {
                return ScrollTrigger.create({
                  trigger: el,
                  start: "top 120%",
                  end: "bottom -20%",
                  onToggle: function onToggle(self) {
                    el.style.opacity = self.isActive ? "1" : "0"
                    el.style.pointerEvents = self.isActive ? "all" : "none"
                  },
                })
              })

              config && config.add
                ? (_sections = sections).push.apply(_sections, newSections)
                : (sections = newSections.slice(0))
              return newSections
            }

            this.content(vars.content)
            this.wrapper(vars.wrapper)

            this.render = function (y) {
              return render(y || y === 0 ? y : currentY)
            }

            this.getVelocity = function () {
              return tracker.getVelocity(-currentY)
            }

            ScrollTrigger.scrollerProxy(wrapper, {
              scrollTop: scrollTop,
              scrollHeight: function scrollHeight() {
                return refreshHeight() && _body.scrollHeight
              },
              fixedMarkers: vars.fixedMarkers !== false && !!smoothDuration,
              content: content,
              getBoundingClientRect: function getBoundingClientRect() {
                return {
                  top: 0,
                  left: 0,
                  width: _win.innerWidth,
                  height: _win.innerHeight,
                }
              },
            })
            ScrollTrigger.defaults({
              scroller: wrapper,
            })
            var existingScrollTriggers = ScrollTrigger.getAll().filter(
              function (st) {
                return st.scroller === _win || st.scroller === wrapper
              },
            )
            existingScrollTriggers.forEach(function (st) {
              return st.revert(true, true)
            }) // in case it's in an environment like React where child components that have ScrollTriggers instantiate BEFORE the parent that does ScrollSmoother.create(...);

            mainST = ScrollTrigger.create({
              animation: gsap.fromTo(
                scroll,
                {
                  y: 0,
                },
                {
                  y: function y() {
                    return -refreshHeight()
                  },
                  immediateRender: false,
                  ease: "none",
                  data: "ScrollSmoother",
                  duration: 100,
                  // for added precision
                  onUpdate: function onUpdate() {
                    if (this._dur) {
                      // skip when it's the "from" part of the tween (setting the startAt)
                      var force = isProxyScrolling

                      if (force) {
                        killScrub(mainST)
                        scroll.y = currentY
                      }

                      render(scroll.y, force)
                      updateVelocity()
                      _onUpdate && !paused && _onUpdate(self)
                    }
                  },
                },
              ),
              onRefreshInit: function onRefreshInit(self) {
                if (ScrollSmoother.isRefreshing) {
                  // gets called on the onRefresh() when we do self.setPositions(...) in which case we should skip this
                  return
                }

                ScrollSmoother.isRefreshing = true

                if (effects) {
                  var _pins = ScrollTrigger.getAll().filter(function (st) {
                    return !!st.pin
                  })

                  effects.forEach(function (st) {
                    if (!st.vars.pinnedContainer) {
                      _pins.forEach(function (pinST) {
                        if (pinST.pin.contains(st.trigger)) {
                          var v = st.vars
                          v.pinnedContainer = pinST.pin
                          st.vars = null // otherwise, it'll self.kill(), triggering the onKill()

                          st.init(v, st.animation)
                        }
                      })
                    }
                  })
                }

                var scrub = self.getTween()
                recordedRefreshScrub = scrub && scrub._end > scrub._dp._time // don't use scrub.progress() < 1 because we may have called killScrub() recently in which case it'll report progress() as 1 when we were actually in the middle of a scrub. That's why we tap into the _end instead.

                recordedRefreshScroll = currentY
                scroll.y = 0

                if (smoothDuration) {
                  ScrollTrigger.isTouch === 1 &&
                    (wrapper.style.position = "absolute") // Safari 16 has a major bug - if you set wrapper.scrollTop to 0 (even if it's already 0), it blocks the whole page from scrolling page non-scrollable! See https://bugs.webkit.org/show_bug.cgi?id=245300 and https://codepen.io/GreenSock/pen/YzLZVOz. Originally we set pointer-events: none on the wrapper temporarily, and set it back to all after setting scrollTop to 0, but that could cause mouseenter/mouseleave/etc. events to fire too, so we opted to set the position to absolute and then back to fixed after setting scrollTop.

                  wrapper.scrollTop = 0 // set wrapper.scrollTop to 0 because in some very rare situations, the browser will auto-set that, like if there's a hash in the link or changing focus to an off-screen input

                  ScrollTrigger.isTouch === 1 &&
                    (wrapper.style.position = "fixed")
                }
              },
              onRefresh: function onRefresh(self) {
                self.animation.invalidate() // because pinnedContainers may have been found in ScrollTrigger's _refreshAll() that extend the height. Without this, it may prevent the user from being able to scroll all the way down.

                self.setPositions(self.start, refreshHeight() / speed)
                recordedRefreshScrub || killScrub(self)
                scroll.y = -scrollFunc() * speed // in 3.11.1, we shifted to forcing the scroll position to 0 during the entire refreshAll() in ScrollTrigger and then restored the scroll position AFTER everything had been updated, thus we should always make these adjustments AFTER a full refresh rather than putting it in the onRefresh() of the individual mainST ScrollTrigger which would fire before the scroll position was restored.

                render(scroll.y)
                startupPhase ||
                  self.animation.progress(
                    gsap.utils.clamp(
                      0,
                      1,
                      recordedRefreshScroll / speed / -self.end,
                    ),
                  )

                if (recordedRefreshScrub) {
                  // we need to trigger the scrub to happen again
                  self.progress -= 0.001
                  self.update()
                }

                ScrollSmoother.isRefreshing = false
              },
              id: "ScrollSmoother",
              scroller: _win,
              invalidateOnRefresh: true,
              start: 0,
              refreshPriority: -9999,
              // because all other pins, etc. should be calculated first before this figures out the height of the body. BUT this should also update FIRST so that the scroll position on the proxy is up-to-date when all the ScrollTriggers calculate their progress! -9999 is a special number that ScrollTrigger looks for to handle in this way.
              end: function end() {
                return refreshHeight() / speed
              },
              onScrubComplete: function onScrubComplete() {
                tracker.reset()
                onStop && onStop(_this)
              },
              scrub: smoothDuration || true,
            })

            this.smooth = function (value) {
              if (arguments.length) {
                smoothDuration = value || 0
                speed = (smoothDuration && +vars.speed) || 1
                mainST.scrubDuration(value)
              }

              return mainST.getTween() ? mainST.getTween().duration() : 0
            }

            mainST.getTween() &&
              (mainST.getTween().vars.ease = vars.ease || _expo)
            this.scrollTrigger = mainST
            vars.effects &&
              this.effects(
                vars.effects === true
                  ? "[data-" +
                      effectsPrefix +
                      "speed], [data-" +
                      effectsPrefix +
                      "lag]"
                  : vars.effects,
                {
                  effectsPadding: vars.effectsPadding,
                },
              )
            vars.sections &&
              this.sections(
                vars.sections === true ? "[data-section]" : vars.sections,
              )
            existingScrollTriggers.forEach(function (st) {
              st.vars.scroller = wrapper
              st.revert(false, true)
              st.init(st.vars, st.animation)
            })

            this.paused = function (value, allowNestedScroll) {
              if (arguments.length) {
                if (!!paused !== value) {
                  if (value) {
                    // pause
                    mainST.getTween() && mainST.getTween().pause()
                    scrollFunc(-currentY / speed)
                    tracker.reset()
                    pausedNormalizer = ScrollTrigger.normalizeScroll()
                    pausedNormalizer && pausedNormalizer.disable() // otherwise the normalizer would try to scroll the page on things like wheel events.

                    paused = ScrollTrigger.observe({
                      preventDefault: true,
                      type: "wheel,touch,scroll",
                      debounce: false,
                      allowClicks: true,
                      onChangeY: function onChangeY() {
                        return scrollTop(-currentY)
                      }, // refuse to scroll
                    })
                    paused.nested = _inputObserver(
                      _docEl,
                      "wheel,touch,scroll",
                      true,
                      allowNestedScroll !== false,
                    ) // allow nested scrolling, like modals
                  } else {
                    // resume
                    paused.nested.kill()
                    paused.kill()
                    paused = 0
                    pausedNormalizer && pausedNormalizer.enable()
                    mainST.progress =
                      (-currentY / speed - mainST.start) /
                      (mainST.end - mainST.start)
                    killScrub(mainST)
                  }
                }

                return this
              }

              return !!paused
            }

            this.kill = this.revert = function () {
              _this.paused(false)

              killScrub(mainST)
              mainST.kill()
              var triggers = (effects || []).concat(sections || []),
                i = triggers.length

              while (i--) {
                // make sure we go backwards because the onKill() will effects.splice(index, 1) and we don't want to skip
                triggers[i].kill()
              }

              ScrollTrigger.scrollerProxy(wrapper)
              ScrollTrigger.removeEventListener("killAll", addOnRefresh)
              ScrollTrigger.removeEventListener("refresh", onRefresh)
              wrapper.style.cssText = wrapperCSS
              content.style.cssText = contentCSS
              var defaults = ScrollTrigger.defaults({})
              defaults &&
                defaults.scroller === wrapper &&
                ScrollTrigger.defaults({
                  scroller: _win,
                })
              _this.normalizer && ScrollTrigger.normalizeScroll(false)
              clearInterval(intervalID)
              _mainInstance = null
              resizeObserver && resizeObserver.disconnect()

              _body.style.removeProperty("height")

              _win.removeEventListener("focusin", _onFocusIn)
            }

            this.refresh = function (soft, force) {
              return mainST.refresh(soft, force)
            }

            if (normalizeScroll) {
              this.normalizer = ScrollTrigger.normalizeScroll(
                normalizeScroll === true
                  ? {
                      debounce: true,
                      content: !smoothDuration && content,
                    }
                  : normalizeScroll,
              )
            }

            ScrollTrigger.config(vars) // in case user passes in ignoreMobileResize for example

            "overscrollBehavior" in _win.getComputedStyle(_body) &&
              gsap.set([_body, _docEl], {
                overscrollBehavior: "none",
              })
            "scrollBehavior" in _win.getComputedStyle(_body) &&
              gsap.set([_body, _docEl], {
                scrollBehavior: "auto",
              }) // if the user hits the tab key (or whatever) to shift focus to an element that's off-screen, center that element.

            _win.addEventListener("focusin", _onFocusIn)

            intervalID = setInterval(updateVelocity, 250)
            _doc.readyState === "loading" ||
              requestAnimationFrame(function () {
                return ScrollTrigger.refresh()
              })
          }

          ScrollSmoother.register = function register(core) {
            if (!_coreInitted) {
              gsap = core || _getGSAP()

              if (_windowExists() && window.document) {
                _win = window
                _doc = document
                _docEl = _doc.documentElement
                _body = _doc.body
              }

              if (gsap) {
                _toArray = gsap.utils.toArray
                _clamp = gsap.utils.clamp
                _expo = gsap.parseEase("expo")

                _context = gsap.core.context || function () {}

                ScrollTrigger = gsap.core.globals().ScrollTrigger
                gsap.core.globals("ScrollSmoother", ScrollSmoother) // must register the global manually because in Internet Explorer, functions (classes) don't have a "name" property.

                if (_body && ScrollTrigger) {
                  _onResizeDelayedCall = gsap
                    .delayedCall(0.2, function () {
                      return (
                        ScrollTrigger.isRefreshing ||
                        (_mainInstance && _mainInstance.refresh())
                      )
                    })
                    .pause()
                  _root = [_win, _doc, _docEl, _body]
                  _getVelocityProp = ScrollTrigger.core._getVelocityProp
                  _inputObserver = ScrollTrigger.core._inputObserver
                  ScrollSmoother.refresh = ScrollTrigger.refresh
                  _coreInitted = 1
                }
              }
            }

            return _coreInitted
          }

          _createClass(ScrollSmoother, [
            {
              key: "progress",
              get: function get() {
                return this.scrollTrigger
                  ? this.scrollTrigger.animation._time / 100
                  : 0
              },
            },
          ])

          return ScrollSmoother
        })()
        ScrollSmoother.version = "3.12.2"

        ScrollSmoother.create = function (vars) {
          return _mainInstance &&
            vars &&
            _mainInstance.content() === _toArray(vars.content)[0]
            ? _mainInstance
            : new ScrollSmoother(vars)
        }

        ScrollSmoother.get = function () {
          return _mainInstance
        }

        _getGSAP() && gsap.registerPlugin(ScrollSmoother)

        /***/
      },
      /******/
    ]
    /************************************************************************/
    /******/ // The module cache
    /******/ var __webpack_module_cache__ = {}
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
      /******/ // Check if module is in cache
      /******/ var cachedModule = __webpack_module_cache__[moduleId]
      /******/ if (cachedModule !== undefined) {
        /******/ return cachedModule.exports
        /******/
      }
      /******/ // Create a new module (and put it into the cache)
      /******/ var module = (__webpack_module_cache__[moduleId] = {
        /******/ // no module.id needed
        /******/ // no module.loaded needed
        /******/ exports: {},
        /******/
      })
      /******/
      /******/ // Execute the module function
      /******/ __webpack_modules__[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__,
      )
      /******/
      /******/ // Return the exports of the module
      /******/ return module.exports
      /******/
    }
    /******/
    /************************************************************************/
    /******/ /* webpack/runtime/compat get default export */
    /******/ ;(() => {
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/ __webpack_require__.n = (module) => {
        /******/ var getter =
          module && module.__esModule
            ? /******/ () => module["default"]
            : /******/ () => module
        /******/ __webpack_require__.d(getter, { a: getter })
        /******/ return getter
        /******/
      }
      /******/
    })()
    /******/
    /******/ /* webpack/runtime/define property getters */
    /******/
    ;(() => {
      /******/ // define getter functions for harmony exports
      /******/ __webpack_require__.d = (exports, definition) => {
        /******/ for (var key in definition) {
          /******/ if (
            __webpack_require__.o(definition, key) &&
            !__webpack_require__.o(exports, key)
          ) {
            /******/ Object.defineProperty(exports, key, {
              enumerable: true,
              get: definition[key],
            })
            /******/
          }
          /******/
        }
        /******/
      }
      /******/
    })()
    /******/
    /******/ /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    ;(() => {
      /******/ __webpack_require__.o = (obj, prop) =>
        Object.prototype.hasOwnProperty.call(obj, prop)
      /******/
    })()
    /******/
    /******/ /* webpack/runtime/make namespace object */
    /******/
    ;(() => {
      /******/ // define __esModule on exports
      /******/ __webpack_require__.r = (exports) => {
        /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          /******/ Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module",
          })
          /******/
        }
        /******/ Object.defineProperty(exports, "__esModule", { value: true })
        /******/
      }
      /******/
    })()
    /******/
    /************************************************************************/
    var __webpack_exports__ = {}
    // This entry need to be wrapped in an IIFE because it need to be in strict mode.
    ;(() => {
      "use strict"
      __webpack_require__.r(__webpack_exports__)
   
        var gsap_SplitText__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(8)
      /* harmony import */ var gsap_ScrollSmoother__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(10)
      /* provided dependency */ var $ = __webpack_require__(3)
      gsap.registerPlugin(
        ScrollTrigger,
        gsap_ScrollSmoother__WEBPACK_IMPORTED_MODULE_5__.ScrollSmoother,
      )
      window.addEventListener("DOMContentLoaded", function () {
        /*********    Fixed header    *********/
        $(window).scroll(function () {
          let scroll = $(this).scrollTop()

          if (scroll >= 700) {
            $(".header-fixed").addClass("active")
          } else {
            $(".header-fixed").removeClass("active")
          }
        })
        let currentYear = new Date().getFullYear(),
          yearNode = document.querySelector(".year")
        yearNode.innerHTML = currentYear
        const video = document.querySelector("video")

        if (window.matchMedia("(prefers-reduced-motion)").matches) {
          video.removeAttribute("autoplay")
          video.pause()
        }

        let mm = gsap.matchMedia(),
          breakPoint = 991
        mm.add(
          {
            isMobile: `(max-width: ${breakPoint}px)`,
            isDesktop: `(min-width: ${breakPoint + 1}px)`,
          },
          (context) => {
            let { isMobile, isDesktop } = context.conditions
            console.log(context.conditions)
            let smoother =
              gsap_ScrollSmoother__WEBPACK_IMPORTED_MODULE_5__.ScrollSmoother.create(
                {
                  wrapper: "#smooth-wrapper",
                  content: "#smooth-content",
                  smooth: isMobile ? 0.5 : 2,
                  smoothTouch: 0.1,
                  effects: true,
                },
              )
            smoother.effects(".second-screen__block-pic__img", {
              speed: "0.9",
            })
            smoother.effects(".alarm-screen__pics-pic__img", {
              speed: "1",
            })
            smoother.effects(".parallax-1", {
              speed: "1.1",
            })
            smoother.effects(".parallax-2", {
              speed: "1.2",
            })
          },
        ) // Main text appearance

        gsap.fromTo(
          ".title-1, .title-3",
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
          },
        )
        gsap.fromTo(
          ".title-2",
          {
            opacity: 0,
            x: 50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
          },
        )
        gsap.fromTo(
          ".stamp",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            yPercent: 0,
            duration: 1,
          },
        ) // Block rotation

        let rotation = gsap.utils.toArray(".rotation")
        rotation.forEach((el) => {
          let rotationTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
            },
          })
          rotationTimeline.to(el, {
            rotation: 40,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              scrub: 2,
            },
          })
        }) // Text split animation

        let text = gsap.utils.toArray(".split-title")
        text.forEach((el) => {
          let splitWords =
            new gsap_SplitText__WEBPACK_IMPORTED_MODULE_4__.SplitText(el, {
              type: "lines",
            })
          let splitTimeline = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
            },
          })
          splitTimeline.from(splitWords.lines, {
            opacity: 0,
            yPercent: 180,
            duration: 0.8,
            ease: "Power3.easeOut",
            stagger: 0.2,
            transform: "rotate3d(1,-.3,0,90deg)",
          })
        }) // Fade footer blocks

        let fade = gsap.utils.toArray(".fade")
        fade.forEach((el, i) => {
          if (i == 1) {
            gsap.from(el, {
              opacity: 0,
              xPercent: 10,
              duration: 0.8,
              scrollTrigger: {
                trigger: el,
              },
            })
          } else {
            gsap.from(el, {
              opacity: 0,
              xPercent: -10,
              duration: 0.8,
              scrollTrigger: {
                trigger: el,
              },
            })
          }
        }) // FadeUp blocks

        let smallImages = gsap.utils.toArray(".fadeUp")
        smallImages.forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            yPercent: 30,
            duration: 0.8,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              toggleActions: "play complete",
            },
          })
        }) // bubbles appearance for group blocks

        gsap.set(".pic", {
          opacity: 0,
          scale: 0,
        })
        ScrollTrigger.batch(".pic", {
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              scale: 1,
              stagger: 0.1,
              ease: "back.out",
            }),
        }) // slider

        new Swiper(".swiper", {
          speed: 1200,
          parallax: true,
          loop: false,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        })
        new Swiper(".swiper-mob", {
          speed: 600,
          autoHeight: true,
          loop: false,
          slidesPerView: "auto",
          spaceBetween: 16,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
        })
      })
    })()

    return __webpack_exports__
    /******/
  })()
})
