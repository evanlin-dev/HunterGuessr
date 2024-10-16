import {
  require_react
} from "./chunk-32E4H3EV.js";
import {
  __commonJS
} from "./chunk-G3PMV62Z.js";

// node_modules/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var hasSymbol = typeof Symbol === "function" && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for("react.element") : 60103;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for("react.portal") : 60106;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for("react.fragment") : 60107;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for("react.strict_mode") : 60108;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for("react.profiler") : 60114;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for("react.provider") : 60109;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for("react.context") : 60110;
        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for("react.async_mode") : 60111;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for("react.concurrent_mode") : 60111;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for("react.forward_ref") : 60112;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for("react.suspense") : 60113;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for("react.suspense_list") : 60120;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for("react.memo") : 60115;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for("react.lazy") : 60116;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for("react.block") : 60121;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for("react.fundamental") : 60117;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for("react.responder") : 60118;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for("react.scope") : 60119;
        function isValidElementType(type) {
          return typeof type === "string" || typeof type === "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === "object" && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.");
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/prop-types/lib/ReactPropTypesSecret.js
var require_ReactPropTypesSecret = __commonJS({
  "node_modules/prop-types/lib/ReactPropTypesSecret.js"(exports, module) {
    "use strict";
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    module.exports = ReactPropTypesSecret;
  }
});

// node_modules/prop-types/lib/has.js
var require_has = __commonJS({
  "node_modules/prop-types/lib/has.js"(exports, module) {
    module.exports = Function.call.bind(Object.prototype.hasOwnProperty);
  }
});

// node_modules/prop-types/checkPropTypes.js
var require_checkPropTypes = __commonJS({
  "node_modules/prop-types/checkPropTypes.js"(exports, module) {
    "use strict";
    var printWarning = function() {
    };
    if (true) {
      ReactPropTypesSecret = require_ReactPropTypesSecret();
      loggedTypeFailures = {};
      has = require_has();
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    var ReactPropTypesSecret;
    var loggedTypeFailures;
    var has;
    function checkPropTypes(typeSpecs, values, location2, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (has(typeSpecs, typeSpecName)) {
            var error;
            try {
              if (typeof typeSpecs[typeSpecName] !== "function") {
                var err = Error(
                  (componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                );
                err.name = "Invariant Violation";
                throw err;
              }
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, ReactPropTypesSecret);
            } catch (ex) {
              error = ex;
            }
            if (error && !(error instanceof Error)) {
              printWarning(
                (componentName || "React class") + ": type specification of " + location2 + " `" + typeSpecName + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof error + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
              );
            }
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              printWarning(
                "Failed " + location2 + " type: " + error.message + (stack != null ? stack : "")
              );
            }
          }
        }
      }
    }
    checkPropTypes.resetWarningCache = function() {
      if (true) {
        loggedTypeFailures = {};
      }
    };
    module.exports = checkPropTypes;
  }
});

// node_modules/prop-types/factoryWithTypeCheckers.js
var require_factoryWithTypeCheckers = __commonJS({
  "node_modules/prop-types/factoryWithTypeCheckers.js"(exports, module) {
    "use strict";
    var ReactIs = require_react_is();
    var assign = require_object_assign();
    var ReactPropTypesSecret = require_ReactPropTypesSecret();
    var has = require_has();
    var checkPropTypes = require_checkPropTypes();
    var printWarning = function() {
    };
    if (true) {
      printWarning = function(text) {
        var message = "Warning: " + text;
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
    }
    function emptyFunctionThatReturnsNull() {
      return null;
    }
    module.exports = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bigint: createPrimitiveTypeChecker("bigint"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        elementType: createElementTypeTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message, data) {
        this.message = message;
        this.data = data && typeof data === "object" ? data : {};
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location2, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== ReactPropTypesSecret) {
            if (throwOnDirectAccess) {
              var err = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
              err.name = "Invariant Violation";
              throw err;
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                printWarning(
                  "You are manually calling a React.PropTypes validation function for the `" + propFullName + "` prop on `" + componentName + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location2 + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location2, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location2, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError(
              "Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."),
              { expectedType }
            );
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunctionThatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location2, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location2, propFullName + "[" + i + "]", ReactPropTypesSecret);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeTypeChecker() {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          if (!ReactIs.isValidElementType(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement type."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location2, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          if (true) {
            if (arguments.length > 1) {
              printWarning(
                "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
              );
            } else {
              printWarning("Invalid argument supplied to oneOf, expected an array.");
            }
          }
          return emptyFunctionThatReturnsNull;
        }
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
            var type = getPreciseType(value);
            if (type === "symbol") {
              return String(value);
            }
            return value;
          });
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of value `" + String(propValue) + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location2, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (has(propValue, key)) {
              var error = typeChecker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? printWarning("Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunctionThatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            printWarning(
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + getPostfixForTypeWarning(checker) + " at index " + i + "."
            );
            return emptyFunctionThatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location2, propFullName) {
          var expectedTypes = [];
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            var checkerResult = checker2(props, propName, componentName, location2, propFullName, ReactPropTypesSecret);
            if (checkerResult == null) {
              return null;
            }
            if (checkerResult.data && has(checkerResult.data, "expectedType")) {
              expectedTypes.push(checkerResult.data.expectedType);
            }
          }
          var expectedTypesMessage = expectedTypes.length > 0 ? ", expected one of type [" + expectedTypes.join(", ") + "]" : "";
          return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`" + expectedTypesMessage + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location2, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function invalidValidatorError(componentName, location2, propFullName, key, type) {
        return new PropTypeError(
          (componentName || "React class") + ": " + location2 + " type `" + propFullName + "." + key + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + type + "`."
        );
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (typeof checker !== "function") {
              return invalidValidatorError(componentName, location2, propFullName, key, getPreciseType(checker));
            }
            var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location2, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location2 + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (has(shapeTypes, key) && typeof checker !== "function") {
              return invalidValidatorError(componentName, location2, propFullName, key, getPreciseType(checker));
            }
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location2 + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location2, propFullName + "." + key, ReactPropTypesSecret);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (!propValue) {
          return false;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes;
      ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
  }
});

// node_modules/prop-types/index.js
var require_prop_types = __commonJS({
  "node_modules/prop-types/index.js"(exports, module) {
    if (true) {
      ReactIs = require_react_is();
      throwOnDirectAccess = true;
      module.exports = require_factoryWithTypeCheckers()(ReactIs.isElement, throwOnDirectAccess);
    } else {
      module.exports = null();
    }
    var ReactIs;
    var throwOnDirectAccess;
  }
});

// node_modules/react-pannellum/dist/index.js
var require_dist = __commonJS({
  "node_modules/react-pannellum/dist/index.js"(exports) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var React = require_react();
    var PropTypes = require_prop_types();
    function _interopDefaultLegacy(e) {
      return e && typeof e === "object" && "default" in e ? e : { "default": e };
    }
    var React__default = _interopDefaultLegacy(React);
    var PropTypes__default = _interopDefaultLegacy(PropTypes);
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
      }
      return keys;
    }
    function _objectSpread2(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
          _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
      return target;
    }
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      Object.defineProperty(Constructor, "prototype", {
        writable: false
      });
      return Constructor;
    }
    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value,
          enumerable: true,
          configurable: true,
          writable: true
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }
    function _inherits(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperty(subClass, "prototype", {
        writable: false
      });
      if (superClass) _setPrototypeOf(subClass, superClass);
    }
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf2(o2) {
        return o2.__proto__ || Object.getPrototypeOf(o2);
      };
      return _getPrototypeOf(o);
    }
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p2) {
        o2.__proto__ = p2;
        return o2;
      };
      return _setPrototypeOf(o, p);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e) {
        return false;
      }
    }
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return self;
    }
    function _possibleConstructorReturn(self, call) {
      if (call && (typeof call === "object" || typeof call === "function")) {
        return call;
      } else if (call !== void 0) {
        throw new TypeError("Derived constructors may only return object or undefined");
      }
      return _assertThisInitialized(self);
    }
    function _createSuper(Derived) {
      var hasNativeReflectConstruct = _isNativeReflectConstruct();
      return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
          var NewTarget = _getPrototypeOf(this).constructor;
          result = Reflect.construct(Super, arguments, NewTarget);
        } else {
          result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
      };
    }
    var libpannellum = function(window2, document2, undefined$1) {
      if (!window2 || !document2) return;
      function Renderer(container) {
        var canvas = document2.createElement("canvas");
        canvas.style.width = canvas.style.height = "100%";
        container.appendChild(canvas);
        var program, gl, vs, fs;
        var fallbackImgSize;
        var world;
        var vtmps;
        var pose;
        var image, imageType, dynamic;
        var texCoordBuffer, cubeVertBuf, cubeVertTexCoordBuf, cubeVertIndBuf;
        var globalParams;
        this.init = function(_image, _imageType, _dynamic, haov, vaov, voffset, callback, params) {
          if (_imageType === undefined$1) _imageType = "equirectangular";
          if (_imageType != "equirectangular" && _imageType != "cubemap" && _imageType != "multires") {
            console.log("Error: invalid image type specified!");
            throw {
              type: "config error"
            };
          }
          imageType = _imageType;
          image = _image;
          dynamic = _dynamic;
          globalParams = params || {};
          if (program) {
            if (vs) {
              gl.detachShader(program, vs);
              gl.deleteShader(vs);
            }
            if (fs) {
              gl.detachShader(program, fs);
              gl.deleteShader(fs);
            }
            gl.bindBuffer(gl.ARRAY_BUFFER, null);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
            if (program.texture) gl.deleteTexture(program.texture);
            if (program.nodeCache) for (var i = 0; i < program.nodeCache.length; i++) {
              gl.deleteTexture(program.nodeCache[i].texture);
            }
            gl.deleteProgram(program);
            program = undefined$1;
          }
          pose = undefined$1;
          var s;
          var faceMissing = false;
          var cubeImgWidth;
          if (imageType == "cubemap") {
            for (s = 0; s < 6; s++) {
              if (image[s].width > 0) {
                if (cubeImgWidth === undefined$1) cubeImgWidth = image[s].width;
                if (cubeImgWidth != image[s].width) console.log("Cube faces have inconsistent widths: " + cubeImgWidth + " vs. " + image[s].width);
              } else faceMissing = true;
            }
          }
          function fillMissingFaces(imgSize) {
            if (faceMissing) {
              var nbytes = imgSize * imgSize * 4;
              var imageArray = new Uint8ClampedArray(nbytes);
              var rgb = params.backgroundColor ? params.backgroundColor : [0, 0, 0];
              rgb[0] *= 255;
              rgb[1] *= 255;
              rgb[2] *= 255;
              for (var i2 = 0; i2 < nbytes; i2++) {
                imageArray[i2++] = rgb[0];
                imageArray[i2++] = rgb[1];
                imageArray[i2++] = rgb[2];
              }
              var backgroundSquare = new ImageData(imageArray, imgSize, imgSize);
              for (s = 0; s < 6; s++) {
                if (image[s].width == 0) image[s] = backgroundSquare;
              }
            }
          }
          if (!(imageType == "cubemap" && (cubeImgWidth & cubeImgWidth - 1) !== 0 && (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/) || navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 9_/) || navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 10_/) || navigator.userAgent.match(/Trident.*rv[ :]*11\./)))) {
            if (!gl) gl = canvas.getContext("experimental-webgl", {
              alpha: false,
              depth: false
            });
            if (gl && gl.getError() == 1286) handleWebGLError1286();
          }
          if (!gl && (imageType == "multires" && image.hasOwnProperty("fallbackPath") || imageType == "cubemap") && ("WebkitAppearance" in document2.documentElement.style || navigator.userAgent.match(/Trident.*rv[ :]*11\./) || navigator.appVersion.indexOf("MSIE 10") !== -1)) {
            if (world) {
              container.removeChild(world);
            }
            world = document2.createElement("div");
            world.className = "pnlm-world";
            var path;
            if (image.basePath) {
              path = image.basePath + image.fallbackPath;
            } else {
              path = image.fallbackPath;
            }
            var sides = ["f", "r", "b", "l", "u", "d"];
            var loaded = 0;
            var onLoad = function onLoad2() {
              var faceCanvas = document2.createElement("canvas");
              faceCanvas.className = "pnlm-face pnlm-" + sides[this.side] + "face";
              world.appendChild(faceCanvas);
              var faceContext = faceCanvas.getContext("2d");
              faceCanvas.style.width = this.width + 4 + "px";
              faceCanvas.style.height = this.height + 4 + "px";
              faceCanvas.width = this.width + 4;
              faceCanvas.height = this.height + 4;
              faceContext.drawImage(this, 2, 2);
              var imgData = faceContext.getImageData(0, 0, faceCanvas.width, faceCanvas.height);
              var data = imgData.data;
              var i2;
              var j;
              for (i2 = 2; i2 < faceCanvas.width - 2; i2++) {
                for (j = 0; j < 4; j++) {
                  data[(i2 + faceCanvas.width) * 4 + j] = data[(i2 + faceCanvas.width * 2) * 4 + j];
                  data[(i2 + faceCanvas.width * (faceCanvas.height - 2)) * 4 + j] = data[(i2 + faceCanvas.width * (faceCanvas.height - 3)) * 4 + j];
                }
              }
              for (i2 = 2; i2 < faceCanvas.height - 2; i2++) {
                for (j = 0; j < 4; j++) {
                  data[(i2 * faceCanvas.width + 1) * 4 + j] = data[(i2 * faceCanvas.width + 2) * 4 + j];
                  data[((i2 + 1) * faceCanvas.width - 2) * 4 + j] = data[((i2 + 1) * faceCanvas.width - 3) * 4 + j];
                }
              }
              for (j = 0; j < 4; j++) {
                data[(faceCanvas.width + 1) * 4 + j] = data[(faceCanvas.width * 2 + 2) * 4 + j];
                data[(faceCanvas.width * 2 - 2) * 4 + j] = data[(faceCanvas.width * 3 - 3) * 4 + j];
                data[(faceCanvas.width * (faceCanvas.height - 2) + 1) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 3) + 2) * 4 + j];
                data[(faceCanvas.width * (faceCanvas.height - 1) - 2) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 2) - 3) * 4 + j];
              }
              for (i2 = 1; i2 < faceCanvas.width - 1; i2++) {
                for (j = 0; j < 4; j++) {
                  data[i2 * 4 + j] = data[(i2 + faceCanvas.width) * 4 + j];
                  data[(i2 + faceCanvas.width * (faceCanvas.height - 1)) * 4 + j] = data[(i2 + faceCanvas.width * (faceCanvas.height - 2)) * 4 + j];
                }
              }
              for (i2 = 1; i2 < faceCanvas.height - 1; i2++) {
                for (j = 0; j < 4; j++) {
                  data[i2 * faceCanvas.width * 4 + j] = data[(i2 * faceCanvas.width + 1) * 4 + j];
                  data[((i2 + 1) * faceCanvas.width - 1) * 4 + j] = data[((i2 + 1) * faceCanvas.width - 2) * 4 + j];
                }
              }
              for (j = 0; j < 4; j++) {
                data[j] = data[(faceCanvas.width + 1) * 4 + j];
                data[(faceCanvas.width - 1) * 4 + j] = data[(faceCanvas.width * 2 - 2) * 4 + j];
                data[faceCanvas.width * (faceCanvas.height - 1) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 2) + 1) * 4 + j];
                data[(faceCanvas.width * faceCanvas.height - 1) * 4 + j] = data[(faceCanvas.width * (faceCanvas.height - 1) - 2) * 4 + j];
              }
              faceContext.putImageData(imgData, 0, 0);
              incLoaded.call(this);
            };
            var incLoaded = function incLoaded2() {
              if (this.width > 0) {
                if (fallbackImgSize === undefined$1) fallbackImgSize = this.width;
                if (fallbackImgSize != this.width) console.log("Fallback faces have inconsistent widths: " + fallbackImgSize + " vs. " + this.width);
              } else faceMissing = true;
              loaded++;
              if (loaded == 6) {
                fallbackImgSize = this.width;
                container.appendChild(world);
                callback();
              }
            };
            faceMissing = false;
            for (s = 0; s < 6; s++) {
              var faceImg = new Image();
              faceImg.crossOrigin = globalParams.crossOrigin ? globalParams.crossOrigin : "anonymous";
              faceImg.side = s;
              faceImg.onload = onLoad;
              faceImg.onerror = incLoaded;
              if (imageType == "multires") {
                faceImg.src = path.replace("%s", sides[s]) + "." + image.extension;
              } else {
                faceImg.src = image[s].src;
              }
            }
            fillMissingFaces(fallbackImgSize);
            return;
          } else if (!gl) {
            console.log("Error: no WebGL support detected!");
            throw {
              type: "no webgl"
            };
          }
          if (imageType == "cubemap") fillMissingFaces(cubeImgWidth);
          if (image.basePath) {
            image.fullpath = image.basePath + image.path;
          } else {
            image.fullpath = image.path;
          }
          image.invTileResolution = 1 / image.tileResolution;
          var vertices = createCube();
          vtmps = [];
          for (s = 0; s < 6; s++) {
            vtmps[s] = vertices.slice(s * 12, s * 12 + 12);
            vertices = createCube();
          }
          var maxWidth = 0;
          if (imageType == "equirectangular") {
            maxWidth = gl.getParameter(gl.MAX_TEXTURE_SIZE);
            if (Math.max(image.width / 2, image.height) > maxWidth) {
              console.log("Error: The image is too big; it's " + image.width + "px wide, but this device's maximum supported size is " + maxWidth * 2 + "px.");
              throw {
                type: "webgl size error",
                width: image.width,
                maxWidth: maxWidth * 2
              };
            }
          } else if (imageType == "cubemap") {
            if (cubeImgWidth > gl.getParameter(gl.MAX_CUBE_MAP_TEXTURE_SIZE)) {
              console.log("Error: The image is too big; it's " + cubeImgWidth + "px wide, but this device's maximum supported size is " + maxWidth + "px.");
              throw {
                type: "webgl size error",
                width: cubeImgWidth,
                maxWidth
              };
            }
          }
          if (params !== undefined$1 && (params.horizonPitch !== undefined$1 || params.horizonRoll !== undefined$1)) pose = [params.horizonPitch == undefined$1 ? 0 : params.horizonPitch, params.horizonRoll == undefined$1 ? 0 : params.horizonRoll];
          var glBindType = gl.TEXTURE_2D;
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          if (gl.getShaderPrecisionFormat) {
            var precision = gl.getShaderPrecisionFormat(gl.FRAGMENT_SHADER, gl.HIGH_FLOAT);
            if (precision && precision.precision < 1) {
              fragEquiCubeBase = fragEquiCubeBase.replace("highp", "mediump");
            }
          }
          vs = gl.createShader(gl.VERTEX_SHADER);
          var vertexSrc = v;
          if (imageType == "multires") {
            vertexSrc = vMulti;
          }
          gl.shaderSource(vs, vertexSrc);
          gl.compileShader(vs);
          fs = gl.createShader(gl.FRAGMENT_SHADER);
          var fragmentSrc = fragEquirectangular;
          if (imageType == "cubemap") {
            glBindType = gl.TEXTURE_CUBE_MAP;
            fragmentSrc = fragCube;
          } else if (imageType == "multires") {
            fragmentSrc = fragMulti;
          }
          gl.shaderSource(fs, fragmentSrc);
          gl.compileShader(fs);
          program = gl.createProgram();
          gl.attachShader(program, vs);
          gl.attachShader(program, fs);
          gl.linkProgram(program);
          if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) console.log(gl.getShaderInfoLog(vs));
          if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) console.log(gl.getShaderInfoLog(fs));
          if (!gl.getProgramParameter(program, gl.LINK_STATUS)) console.log(gl.getProgramInfoLog(program));
          gl.useProgram(program);
          program.drawInProgress = false;
          var color = params.backgroundColor ? params.backgroundColor : [0, 0, 0];
          gl.clearColor(color[0], color[1], color[2], 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
          program.texCoordLocation = gl.getAttribLocation(program, "a_texCoord");
          gl.enableVertexAttribArray(program.texCoordLocation);
          if (imageType != "multires") {
            if (!texCoordBuffer) texCoordBuffer = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, 1, 1, 1, 1, -1, -1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);
            gl.vertexAttribPointer(program.texCoordLocation, 2, gl.FLOAT, false, 0, 0);
            program.aspectRatio = gl.getUniformLocation(program, "u_aspectRatio");
            gl.uniform1f(program.aspectRatio, gl.drawingBufferWidth / gl.drawingBufferHeight);
            program.psi = gl.getUniformLocation(program, "u_psi");
            program.theta = gl.getUniformLocation(program, "u_theta");
            program.f = gl.getUniformLocation(program, "u_f");
            program.h = gl.getUniformLocation(program, "u_h");
            program.v = gl.getUniformLocation(program, "u_v");
            program.vo = gl.getUniformLocation(program, "u_vo");
            program.rot = gl.getUniformLocation(program, "u_rot");
            gl.uniform1f(program.h, haov / (Math.PI * 2));
            gl.uniform1f(program.v, vaov / Math.PI);
            gl.uniform1f(program.vo, voffset / Math.PI * 2);
            if (imageType == "equirectangular") {
              program.backgroundColor = gl.getUniformLocation(program, "u_backgroundColor");
              gl.uniform4fv(program.backgroundColor, color.concat([1]));
            }
            program.texture = gl.createTexture();
            gl.bindTexture(glBindType, program.texture);
            if (imageType == "cubemap") {
              gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_X, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[1]);
              gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_X, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[3]);
              gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Y, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[4]);
              gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Y, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[5]);
              gl.texImage2D(gl.TEXTURE_CUBE_MAP_POSITIVE_Z, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[0]);
              gl.texImage2D(gl.TEXTURE_CUBE_MAP_NEGATIVE_Z, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image[2]);
            } else {
              if (image.width <= maxWidth) {
                gl.uniform1i(gl.getUniformLocation(program, "u_splitImage"), 0);
                gl.texImage2D(glBindType, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
              } else {
                gl.uniform1i(gl.getUniformLocation(program, "u_splitImage"), 1);
                var cropCanvas = document2.createElement("canvas");
                cropCanvas.width = image.width / 2;
                cropCanvas.height = image.height;
                var cropContext = cropCanvas.getContext("2d");
                cropContext.drawImage(image, 0, 0);
                var cropImage = cropContext.getImageData(0, 0, image.width / 2, image.height);
                gl.texImage2D(glBindType, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, cropImage);
                program.texture2 = gl.createTexture();
                gl.activeTexture(gl.TEXTURE1);
                gl.bindTexture(glBindType, program.texture2);
                gl.uniform1i(gl.getUniformLocation(program, "u_image1"), 1);
                cropContext.drawImage(image, -image.width / 2, 0);
                cropImage = cropContext.getImageData(0, 0, image.width / 2, image.height);
                gl.texImage2D(glBindType, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, cropImage);
                gl.texParameteri(glBindType, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
                gl.texParameteri(glBindType, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
                gl.texParameteri(glBindType, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
                gl.texParameteri(glBindType, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
                gl.activeTexture(gl.TEXTURE0);
              }
            }
            gl.texParameteri(glBindType, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
            gl.texParameteri(glBindType, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
            gl.texParameteri(glBindType, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
            gl.texParameteri(glBindType, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          } else {
            program.vertPosLocation = gl.getAttribLocation(program, "a_vertCoord");
            gl.enableVertexAttribArray(program.vertPosLocation);
            if (!cubeVertBuf) cubeVertBuf = gl.createBuffer();
            if (!cubeVertTexCoordBuf) cubeVertTexCoordBuf = gl.createBuffer();
            if (!cubeVertIndBuf) cubeVertIndBuf = gl.createBuffer();
            gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertTexCoordBuf);
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), gl.STATIC_DRAW);
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertIndBuf);
            gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
            program.perspUniform = gl.getUniformLocation(program, "u_perspMatrix");
            program.cubeUniform = gl.getUniformLocation(program, "u_cubeMatrix");
            program.level = -1;
            program.currentNodes = [];
            program.nodeCache = [];
            program.nodeCacheTimestamp = 0;
          }
          var err = gl.getError();
          if (err !== 0) {
            console.log("Error: Something went wrong with WebGL!", err);
            throw {
              type: "webgl error"
            };
          }
          callback();
        };
        this.destroy = function() {
          if (container !== undefined$1) {
            if (canvas !== undefined$1 && container.contains(canvas)) {
              container.removeChild(canvas);
            }
            if (world !== undefined$1 && container.contains(world)) {
              container.removeChild(world);
            }
          }
          if (gl) {
            var extension = gl.getExtension("WEBGL_lose_context");
            if (extension) extension.loseContext();
          }
        };
        this.resize = function() {
          var pixelRatio = window2.devicePixelRatio || 1;
          canvas.width = canvas.clientWidth * pixelRatio;
          canvas.height = canvas.clientHeight * pixelRatio;
          if (gl) {
            if (gl.getError() == 1286) handleWebGLError1286();
            gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
            if (imageType != "multires") {
              gl.uniform1f(program.aspectRatio, canvas.clientWidth / canvas.clientHeight);
            }
          }
        };
        this.resize();
        this.setPose = function(horizonPitch, horizonRoll) {
          pose = [horizonPitch, horizonRoll];
        };
        this.render = function(pitch, yaw, hfov, params) {
          var focal, i, s, roll = 0;
          if (params === undefined$1) params = {};
          if (params.roll) roll = params.roll;
          if (pose !== undefined$1) {
            var horizonPitch = pose[0], horizonRoll = pose[1];
            var orig_pitch = pitch, orig_yaw = yaw, x = Math.cos(horizonRoll) * Math.sin(pitch) * Math.sin(horizonPitch) + Math.cos(pitch) * (Math.cos(horizonPitch) * Math.cos(yaw) + Math.sin(horizonRoll) * Math.sin(horizonPitch) * Math.sin(yaw)), y = -Math.sin(pitch) * Math.sin(horizonRoll) + Math.cos(pitch) * Math.cos(horizonRoll) * Math.sin(yaw), z = Math.cos(horizonRoll) * Math.cos(horizonPitch) * Math.sin(pitch) + Math.cos(pitch) * (-Math.cos(yaw) * Math.sin(horizonPitch) + Math.cos(horizonPitch) * Math.sin(horizonRoll) * Math.sin(yaw));
            pitch = Math.asin(Math.max(Math.min(z, 1), -1));
            yaw = Math.atan2(y, x);
            var v2 = [Math.cos(orig_pitch) * (Math.sin(horizonRoll) * Math.sin(horizonPitch) * Math.cos(orig_yaw) - Math.cos(horizonPitch) * Math.sin(orig_yaw)), Math.cos(orig_pitch) * Math.cos(horizonRoll) * Math.cos(orig_yaw), Math.cos(orig_pitch) * (Math.cos(horizonPitch) * Math.sin(horizonRoll) * Math.cos(orig_yaw) + Math.sin(orig_yaw) * Math.sin(horizonPitch))], w = [-Math.cos(pitch) * Math.sin(yaw), Math.cos(pitch) * Math.cos(yaw)];
            var roll_adj = Math.acos(Math.max(Math.min((v2[0] * w[0] + v2[1] * w[1]) / (Math.sqrt(v2[0] * v2[0] + v2[1] * v2[1] + v2[2] * v2[2]) * Math.sqrt(w[0] * w[0] + w[1] * w[1])), 1), -1));
            if (v2[2] < 0) roll_adj = 2 * Math.PI - roll_adj;
            roll += roll_adj;
          }
          if (!gl && (imageType == "multires" || imageType == "cubemap")) {
            s = fallbackImgSize / 2;
            var transforms = {
              f: "translate3d(-" + (s + 2) + "px, -" + (s + 2) + "px, -" + s + "px)",
              b: "translate3d(" + (s + 2) + "px, -" + (s + 2) + "px, " + s + "px) rotateX(180deg) rotateZ(180deg)",
              u: "translate3d(-" + (s + 2) + "px, -" + s + "px, " + (s + 2) + "px) rotateX(270deg)",
              d: "translate3d(-" + (s + 2) + "px, " + s + "px, -" + (s + 2) + "px) rotateX(90deg)",
              l: "translate3d(-" + s + "px, -" + (s + 2) + "px, " + (s + 2) + "px) rotateX(180deg) rotateY(90deg) rotateZ(180deg)",
              r: "translate3d(" + s + "px, -" + (s + 2) + "px, -" + (s + 2) + "px) rotateY(270deg)"
            };
            focal = 1 / Math.tan(hfov / 2);
            var zoom = focal * canvas.clientWidth / 2 + "px";
            var transform = "perspective(" + zoom + ") translateZ(" + zoom + ") rotateX(" + pitch + "rad) rotateY(" + yaw + "rad) ";
            var faces = Object.keys(transforms);
            for (i = 0; i < 6; i++) {
              var face = world.querySelector(".pnlm-" + faces[i] + "face");
              if (!face) continue;
              face.style.webkitTransform = transform + transforms[faces[i]];
              face.style.transform = transform + transforms[faces[i]];
            }
            return;
          }
          if (imageType != "multires") {
            var vfov = 2 * Math.atan(Math.tan(hfov * 0.5) / (gl.drawingBufferWidth / gl.drawingBufferHeight));
            focal = 1 / Math.tan(vfov * 0.5);
            gl.uniform1f(program.psi, yaw);
            gl.uniform1f(program.theta, pitch);
            gl.uniform1f(program.rot, roll);
            gl.uniform1f(program.f, focal);
            if (dynamic === true) {
              if (imageType == "equirectangular") {
                gl.bindTexture(gl.TEXTURE_2D, program.texture);
                gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, image);
              }
            }
            gl.drawArrays(gl.TRIANGLES, 0, 6);
          } else {
            var perspMatrix = makePersp(hfov, gl.drawingBufferWidth / gl.drawingBufferHeight, 0.1, 100);
            checkZoom(hfov);
            var matrix = identityMatrix3();
            matrix = rotateMatrix(matrix, -roll, "z");
            matrix = rotateMatrix(matrix, -pitch, "x");
            matrix = rotateMatrix(matrix, yaw, "y");
            matrix = makeMatrix4(matrix);
            gl.uniformMatrix4fv(program.perspUniform, false, new Float32Array(transposeMatrix4(perspMatrix)));
            gl.uniformMatrix4fv(program.cubeUniform, false, new Float32Array(transposeMatrix4(matrix)));
            var rotPersp = rotatePersp(perspMatrix, matrix);
            program.nodeCache.sort(multiresNodeSort);
            if (program.nodeCache.length > 200 && program.nodeCache.length > program.currentNodes.length + 50) {
              var removed = program.nodeCache.splice(200, program.nodeCache.length - 200);
              for (var j = 0; j < removed.length; j++) {
                gl.deleteTexture(removed[j].texture);
              }
            }
            program.currentNodes = [];
            var sides = ["f", "b", "u", "d", "l", "r"];
            for (s = 0; s < 6; s++) {
              var ntmp = new MultiresNode(vtmps[s], sides[s], 1, 0, 0, image.fullpath);
              testMultiresNode(rotPersp, ntmp, pitch, yaw);
            }
            program.currentNodes.sort(multiresNodeRenderSort);
            for (i = pendingTextureRequests.length - 1; i >= 0; i--) {
              if (program.currentNodes.indexOf(pendingTextureRequests[i].node) === -1) {
                pendingTextureRequests[i].node.textureLoad = false;
                pendingTextureRequests.splice(i, 1);
              }
            }
            if (pendingTextureRequests.length === 0) {
              for (i = 0; i < program.currentNodes.length; i++) {
                var node = program.currentNodes[i];
                if (!node.texture && !node.textureLoad) {
                  node.textureLoad = true;
                  setTimeout(processNextTile, 0, node);
                  break;
                }
              }
            }
            multiresDraw();
          }
          if (params.returnImage !== undefined$1) {
            return canvas.toDataURL("image/png");
          }
        };
        this.isLoading = function() {
          if (gl && imageType == "multires") {
            for (var i = 0; i < program.currentNodes.length; i++) {
              if (!program.currentNodes[i].textureLoaded) {
                return true;
              }
            }
          }
          return false;
        };
        this.getCanvas = function() {
          return canvas;
        };
        function multiresNodeSort(a, b) {
          if (a.level == 1 && b.level != 1) {
            return -1;
          }
          if (b.level == 1 && a.level != 1) {
            return 1;
          }
          return b.timestamp - a.timestamp;
        }
        function multiresNodeRenderSort(a, b) {
          if (a.level != b.level) {
            return a.level - b.level;
          }
          return a.diff - b.diff;
        }
        function multiresDraw() {
          if (!program.drawInProgress) {
            program.drawInProgress = true;
            gl.clear(gl.COLOR_BUFFER_BIT);
            for (var i = 0; i < program.currentNodes.length; i++) {
              if (program.currentNodes[i].textureLoaded > 1) {
                gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertBuf);
                gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(program.currentNodes[i].vertices), gl.STATIC_DRAW);
                gl.vertexAttribPointer(program.vertPosLocation, 3, gl.FLOAT, false, 0, 0);
                gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertTexCoordBuf);
                gl.vertexAttribPointer(program.texCoordLocation, 2, gl.FLOAT, false, 0, 0);
                gl.bindTexture(gl.TEXTURE_2D, program.currentNodes[i].texture);
                gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
              }
            }
            program.drawInProgress = false;
          }
        }
        function MultiresNode(vertices, side, level, x, y, path) {
          this.vertices = vertices;
          this.side = side;
          this.level = level;
          this.x = x;
          this.y = y;
          this.path = path.replace("%s", side).replace("%l", level).replace("%x", x).replace("%y", y);
        }
        function testMultiresNode(rotPersp, node, pitch, yaw, hfov) {
          if (checkSquareInView(rotPersp, node.vertices)) {
            var v2 = node.vertices;
            var x = v2[0] + v2[3] + v2[6] + v2[9];
            var y = v2[1] + v2[4] + v2[7] + v2[10];
            var z = v2[2] + v2[5] + v2[8] + v2[11];
            var r = Math.sqrt(x * x + y * y + z * z);
            var theta = Math.asin(z / r);
            var phi = Math.atan2(y, x);
            var ydiff = phi - yaw;
            ydiff += ydiff > Math.PI ? -2 * Math.PI : ydiff < -Math.PI ? 2 * Math.PI : 0;
            ydiff = Math.abs(ydiff);
            node.diff = Math.acos(Math.sin(pitch) * Math.sin(theta) + Math.cos(pitch) * Math.cos(theta) * Math.cos(ydiff));
            var inCurrent = false;
            for (var k = 0; k < program.nodeCache.length; k++) {
              if (program.nodeCache[k].path == node.path) {
                inCurrent = true;
                program.nodeCache[k].timestamp = program.nodeCacheTimestamp++;
                program.nodeCache[k].diff = node.diff;
                program.currentNodes.push(program.nodeCache[k]);
                break;
              }
            }
            if (!inCurrent) {
              node.timestamp = program.nodeCacheTimestamp++;
              program.currentNodes.push(node);
              program.nodeCache.push(node);
            }
            if (node.level < program.level) {
              var cubeSize = image.cubeResolution * Math.pow(2, node.level - image.maxLevel);
              var numTiles = Math.ceil(cubeSize * image.invTileResolution) - 1;
              var doubleTileSize = cubeSize % image.tileResolution * 2;
              var lastTileSize = cubeSize * 2 % image.tileResolution;
              if (lastTileSize === 0) {
                lastTileSize = image.tileResolution;
              }
              if (doubleTileSize === 0) {
                doubleTileSize = image.tileResolution * 2;
              }
              var f = 0.5;
              if (node.x == numTiles || node.y == numTiles) {
                f = 1 - image.tileResolution / (image.tileResolution + lastTileSize);
              }
              var i = 1 - f;
              var children = [];
              var vtmp, ntmp;
              var f1 = f, f2 = f, f3 = f, i1 = i, i2 = i, i3 = i;
              if (lastTileSize < image.tileResolution) {
                if (node.x == numTiles && node.y != numTiles) {
                  f2 = 0.5;
                  i2 = 0.5;
                  if (node.side == "d" || node.side == "u") {
                    f3 = 0.5;
                    i3 = 0.5;
                  }
                } else if (node.x != numTiles && node.y == numTiles) {
                  f1 = 0.5;
                  i1 = 0.5;
                  if (node.side == "l" || node.side == "r") {
                    f3 = 0.5;
                    i3 = 0.5;
                  }
                }
              }
              if (doubleTileSize <= image.tileResolution) {
                if (node.x == numTiles) {
                  f1 = 0;
                  i1 = 1;
                  if (node.side == "l" || node.side == "r") {
                    f3 = 0;
                    i3 = 1;
                  }
                }
                if (node.y == numTiles) {
                  f2 = 0;
                  i2 = 1;
                  if (node.side == "d" || node.side == "u") {
                    f3 = 0;
                    i3 = 1;
                  }
                }
              }
              vtmp = [v2[0], v2[1], v2[2], v2[0] * f1 + v2[3] * i1, v2[1] * f + v2[4] * i, v2[2] * f3 + v2[5] * i3, v2[0] * f1 + v2[6] * i1, v2[1] * f2 + v2[7] * i2, v2[2] * f3 + v2[8] * i3, v2[0] * f + v2[9] * i, v2[1] * f2 + v2[10] * i2, v2[2] * f3 + v2[11] * i3];
              ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x * 2, node.y * 2, image.fullpath);
              children.push(ntmp);
              if (!(node.x == numTiles && doubleTileSize <= image.tileResolution)) {
                vtmp = [v2[0] * f1 + v2[3] * i1, v2[1] * f + v2[4] * i, v2[2] * f3 + v2[5] * i3, v2[3], v2[4], v2[5], v2[3] * f + v2[6] * i, v2[4] * f2 + v2[7] * i2, v2[5] * f3 + v2[8] * i3, v2[0] * f1 + v2[6] * i1, v2[1] * f2 + v2[7] * i2, v2[2] * f3 + v2[8] * i3];
                ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x * 2 + 1, node.y * 2, image.fullpath);
                children.push(ntmp);
              }
              if (!(node.x == numTiles && doubleTileSize <= image.tileResolution) && !(node.y == numTiles && doubleTileSize <= image.tileResolution)) {
                vtmp = [v2[0] * f1 + v2[6] * i1, v2[1] * f2 + v2[7] * i2, v2[2] * f3 + v2[8] * i3, v2[3] * f + v2[6] * i, v2[4] * f2 + v2[7] * i2, v2[5] * f3 + v2[8] * i3, v2[6], v2[7], v2[8], v2[9] * f1 + v2[6] * i1, v2[10] * f + v2[7] * i, v2[11] * f3 + v2[8] * i3];
                ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x * 2 + 1, node.y * 2 + 1, image.fullpath);
                children.push(ntmp);
              }
              if (!(node.y == numTiles && doubleTileSize <= image.tileResolution)) {
                vtmp = [v2[0] * f + v2[9] * i, v2[1] * f2 + v2[10] * i2, v2[2] * f3 + v2[11] * i3, v2[0] * f1 + v2[6] * i1, v2[1] * f2 + v2[7] * i2, v2[2] * f3 + v2[8] * i3, v2[9] * f1 + v2[6] * i1, v2[10] * f + v2[7] * i, v2[11] * f3 + v2[8] * i3, v2[9], v2[10], v2[11]];
                ntmp = new MultiresNode(vtmp, node.side, node.level + 1, node.x * 2, node.y * 2 + 1, image.fullpath);
                children.push(ntmp);
              }
              for (var j = 0; j < children.length; j++) {
                testMultiresNode(rotPersp, children[j], pitch, yaw);
              }
            }
          }
        }
        function createCube() {
          return [
            -1,
            1,
            -1,
            1,
            1,
            -1,
            1,
            -1,
            -1,
            -1,
            -1,
            -1,
            // Front face
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1,
            1,
            1,
            -1,
            1,
            // Back face
            -1,
            1,
            1,
            1,
            1,
            1,
            1,
            1,
            -1,
            -1,
            1,
            -1,
            // Up face
            -1,
            -1,
            -1,
            1,
            -1,
            -1,
            1,
            -1,
            1,
            -1,
            -1,
            1,
            // Down face
            -1,
            1,
            1,
            -1,
            1,
            -1,
            -1,
            -1,
            -1,
            -1,
            -1,
            1,
            // Left face
            1,
            1,
            -1,
            1,
            1,
            1,
            1,
            -1,
            1,
            1,
            -1,
            -1
            // Right face
          ];
        }
        function identityMatrix3() {
          return [1, 0, 0, 0, 1, 0, 0, 0, 1];
        }
        function rotateMatrix(m, angle, axis) {
          var s = Math.sin(angle);
          var c = Math.cos(angle);
          if (axis == "x") {
            return [m[0], c * m[1] + s * m[2], c * m[2] - s * m[1], m[3], c * m[4] + s * m[5], c * m[5] - s * m[4], m[6], c * m[7] + s * m[8], c * m[8] - s * m[7]];
          }
          if (axis == "y") {
            return [c * m[0] - s * m[2], m[1], c * m[2] + s * m[0], c * m[3] - s * m[5], m[4], c * m[5] + s * m[3], c * m[6] - s * m[8], m[7], c * m[8] + s * m[6]];
          }
          if (axis == "z") {
            return [c * m[0] + s * m[1], c * m[1] - s * m[0], m[2], c * m[3] + s * m[4], c * m[4] - s * m[3], m[5], c * m[6] + s * m[7], c * m[7] - s * m[6], m[8]];
          }
        }
        function makeMatrix4(m) {
          return [m[0], m[1], m[2], 0, m[3], m[4], m[5], 0, m[6], m[7], m[8], 0, 0, 0, 0, 1];
        }
        function transposeMatrix4(m) {
          return [m[0], m[4], m[8], m[12], m[1], m[5], m[9], m[13], m[2], m[6], m[10], m[14], m[3], m[7], m[11], m[15]];
        }
        function makePersp(hfov, aspect, znear, zfar) {
          var fovy = 2 * Math.atan(Math.tan(hfov / 2) * gl.drawingBufferHeight / gl.drawingBufferWidth);
          var f = 1 / Math.tan(fovy / 2);
          return [f / aspect, 0, 0, 0, 0, f, 0, 0, 0, 0, (zfar + znear) / (znear - zfar), 2 * zfar * znear / (znear - zfar), 0, 0, -1, 0];
        }
        function processLoadedTexture(img, tex) {
          gl.bindTexture(gl.TEXTURE_2D, tex);
          gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, img);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
          gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
          gl.bindTexture(gl.TEXTURE_2D, null);
        }
        var pendingTextureRequests = [];
        var loadTexture = function() {
          var cacheTop = 4;
          var textureImageCache = {};
          var crossOrigin;
          function TextureImageLoader() {
            var self = this;
            this.texture = this.callback = null;
            this.image = new Image();
            this.image.crossOrigin = crossOrigin ? crossOrigin : "anonymous";
            var loadFn = function loadFn2() {
              if (self.image.width > 0 && self.image.height > 0) {
                processLoadedTexture(self.image, self.texture);
                self.callback(self.texture, true);
              } else {
                self.callback(self.texture, false);
              }
              releaseTextureImageLoader(self);
            };
            this.image.addEventListener("load", loadFn);
            this.image.addEventListener("error", loadFn);
          }
          TextureImageLoader.prototype.loadTexture = function(src, texture, callback) {
            this.texture = texture;
            this.callback = callback;
            this.image.src = src;
          };
          function PendingTextureRequest(node, src, texture, callback) {
            this.node = node;
            this.src = src;
            this.texture = texture;
            this.callback = callback;
          }
          function releaseTextureImageLoader(til) {
            if (pendingTextureRequests.length) {
              var req = pendingTextureRequests.shift();
              til.loadTexture(req.src, req.texture, req.callback);
            } else textureImageCache[cacheTop++] = til;
          }
          for (var i = 0; i < cacheTop; i++) {
            textureImageCache[i] = new TextureImageLoader();
          }
          return function(node, src, callback, _crossOrigin) {
            crossOrigin = _crossOrigin;
            var texture = gl.createTexture();
            if (cacheTop) textureImageCache[--cacheTop].loadTexture(src, texture, callback);
            else pendingTextureRequests.push(new PendingTextureRequest(node, src, texture, callback));
            return texture;
          };
        }();
        function processNextTile(node) {
          loadTexture(node, node.path + "." + image.extension, function(texture, loaded) {
            node.texture = texture;
            node.textureLoaded = loaded ? 2 : 1;
          }, globalParams.crossOrigin);
        }
        function checkZoom(hfov) {
          var newLevel = 1;
          while (newLevel < image.maxLevel && gl.drawingBufferWidth > image.tileResolution * Math.pow(2, newLevel - 1) * Math.tan(hfov / 2) * 0.707) {
            newLevel++;
          }
          program.level = newLevel;
        }
        function rotatePersp(p, r) {
          return [p[0] * r[0], p[0] * r[1], p[0] * r[2], 0, p[5] * r[4], p[5] * r[5], p[5] * r[6], 0, p[10] * r[8], p[10] * r[9], p[10] * r[10], p[11], -r[8], -r[9], -r[10], 0];
        }
        function applyRotPerspToVec(m, v2) {
          return [m[0] * v2[0] + m[1] * v2[1] + m[2] * v2[2], m[4] * v2[0] + m[5] * v2[1] + m[6] * v2[2], m[11] + m[8] * v2[0] + m[9] * v2[1] + m[10] * v2[2], 1 / (m[12] * v2[0] + m[13] * v2[1] + m[14] * v2[2])];
        }
        function checkInView(m, v2) {
          var vpp = applyRotPerspToVec(m, v2);
          var winX = vpp[0] * vpp[3];
          var winY = vpp[1] * vpp[3];
          var winZ = vpp[2] * vpp[3];
          var ret = [0, 0, 0];
          if (winX < -1) ret[0] = -1;
          if (winX > 1) ret[0] = 1;
          if (winY < -1) ret[1] = -1;
          if (winY > 1) ret[1] = 1;
          if (winZ < -1 || winZ > 1) ret[2] = 1;
          return ret;
        }
        function checkSquareInView(m, v2) {
          var check1 = checkInView(m, v2.slice(0, 3));
          var check2 = checkInView(m, v2.slice(3, 6));
          var check3 = checkInView(m, v2.slice(6, 9));
          var check4 = checkInView(m, v2.slice(9, 12));
          var testX = check1[0] + check2[0] + check3[0] + check4[0];
          if (testX == -4 || testX == 4) return false;
          var testY = check1[1] + check2[1] + check3[1] + check4[1];
          if (testY == -4 || testY == 4) return false;
          var testZ = check1[2] + check2[2] + check3[2] + check4[2];
          return testZ != 4;
        }
        function handleWebGLError1286() {
          console.log("Reducing canvas size due to error 1286!");
          canvas.width = Math.round(canvas.width / 2);
          canvas.height = Math.round(canvas.height / 2);
        }
      }
      var v = [
        "attribute vec2 a_texCoord;",
        "varying vec2 v_texCoord;",
        "void main() {",
        // Set position
        "gl_Position = vec4(a_texCoord, 0.0, 1.0);",
        // Pass the coordinates to the fragment shader
        "v_texCoord = a_texCoord;",
        "}"
      ].join("");
      var vMulti = [
        "attribute vec3 a_vertCoord;",
        "attribute vec2 a_texCoord;",
        "uniform mat4 u_cubeMatrix;",
        "uniform mat4 u_perspMatrix;",
        "varying mediump vec2 v_texCoord;",
        "void main(void) {",
        // Set position
        "gl_Position = u_perspMatrix * u_cubeMatrix * vec4(a_vertCoord, 1.0);",
        // Pass the coordinates to the fragment shader
        "v_texCoord = a_texCoord;",
        "}"
      ].join("");
      var fragEquiCubeBase = [
        "precision highp float;",
        // mediump looks bad on some mobile devices
        "uniform float u_aspectRatio;",
        "uniform float u_psi;",
        "uniform float u_theta;",
        "uniform float u_f;",
        "uniform float u_h;",
        "uniform float u_v;",
        "uniform float u_vo;",
        "uniform float u_rot;",
        "const float PI = 3.14159265358979323846264;",
        // Texture
        "uniform sampler2D u_image0;",
        "uniform sampler2D u_image1;",
        "uniform bool u_splitImage;",
        "uniform samplerCube u_imageCube;",
        // Coordinates passed in from vertex shader
        "varying vec2 v_texCoord;",
        // Background color (display for partial panoramas)
        "uniform vec4 u_backgroundColor;",
        "void main() {",
        // Map canvas/camera to sphere
        "float x = v_texCoord.x * u_aspectRatio;",
        "float y = v_texCoord.y;",
        "float sinrot = sin(u_rot);",
        "float cosrot = cos(u_rot);",
        "float rot_x = x * cosrot - y * sinrot;",
        "float rot_y = x * sinrot + y * cosrot;",
        "float sintheta = sin(u_theta);",
        "float costheta = cos(u_theta);",
        "float a = u_f * costheta - rot_y * sintheta;",
        "float root = sqrt(rot_x * rot_x + a * a);",
        "float lambda = atan(rot_x / root, a / root) + u_psi;",
        "float phi = atan((rot_y * costheta + u_f * sintheta) / root);"
      ].join("\n");
      var fragCube = fragEquiCubeBase + [
        // Look up color from texture
        "float cosphi = cos(phi);",
        "gl_FragColor = textureCube(u_imageCube, vec3(cosphi*sin(lambda), sin(phi), cosphi*cos(lambda)));",
        "}"
      ].join("\n");
      var fragEquirectangular = fragEquiCubeBase + [
        // Wrap image
        "lambda = mod(lambda + PI, PI * 2.0) - PI;",
        // Map texture to sphere
        "vec2 coord = vec2(lambda / PI, phi / (PI / 2.0));",
        // Look up color from texture
        // Map from [-1,1] to [0,1] and flip y-axis
        "if(coord.x < -u_h || coord.x > u_h || coord.y < -u_v + u_vo || coord.y > u_v + u_vo)",
        "gl_FragColor = u_backgroundColor;",
        "else {",
        "if(u_splitImage) {",
        // Image was split into two textures to work around texture size limits
        "if(coord.x < 0.0)",
        "gl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / u_h, (-coord.y + u_v + u_vo) / (u_v * 2.0)));",
        "else",
        "gl_FragColor = texture2D(u_image1, vec2((coord.x + u_h) / u_h - 1.0, (-coord.y + u_v + u_vo) / (u_v * 2.0)));",
        "} else {",
        "gl_FragColor = texture2D(u_image0, vec2((coord.x + u_h) / (u_h * 2.0), (-coord.y + u_v + u_vo) / (u_v * 2.0)));",
        "}",
        "}",
        "}"
      ].join("\n");
      var fragMulti = [
        "varying mediump vec2 v_texCoord;",
        "uniform sampler2D u_sampler;",
        //'uniform mediump vec4 u_color;',
        "void main(void) {",
        // Look up color from texture
        "gl_FragColor = texture2D(u_sampler, v_texCoord);",
        //    'gl_FragColor = u_color;',
        "}"
      ].join("");
      return {
        renderer: function renderer(container, image, imagetype, dynamic) {
          return new Renderer(container, image, imagetype, dynamic);
        }
      };
    }(typeof window === "undefined" ? null : window, typeof document === "undefined" ? null : document);
    var pannellum = /* @__PURE__ */ function(window2, document2, undefined$1) {
      function Viewer(container, initialConfig) {
        var _this = this;
        var config, renderer, preview, isUserInteracting = false, latestInteraction = Date.now(), onPointerDownPointerX = 0, onPointerDownPointerY = 0, onPointerDownPointerDist = -1, onPointerDownYaw = 0, onPointerDownPitch = 0, keysDown = new Array(10), fullscreenActive = false, loaded, error = false, listenersAdded = false, panoImage, prevTime, speed = {
          yaw: 0,
          pitch: 0,
          hfov: 0
        }, animating = false, orientation = false, orientationYawOffset = 0, autoRotateStart, autoRotateSpeed = 0, origHfov, origPitch, animatedMove = {}, externalEventListeners = {}, specifiedPhotoSphereExcludes = [], update = false, eps = 1e-6, hotspotsCreated = false, destroyed = false;
        var defaultConfig = {
          hfov: 100,
          minHfov: 50,
          multiResMinHfov: false,
          maxHfov: 120,
          pitch: 0,
          minPitch: -90,
          maxPitch: 90,
          yaw: 0,
          minYaw: -180,
          maxYaw: 180,
          roll: 0,
          haov: 360,
          vaov: 180,
          vOffset: 0,
          autoRotate: false,
          autoRotateInactivityDelay: -1,
          autoRotateStopDelay: 0,
          type: "equirectangular",
          northOffset: 0,
          showFullscreenCtrl: true,
          dynamic: false,
          dynamicUpdate: false,
          doubleClickZoom: true,
          keyboardZoom: true,
          mouseZoom: true,
          showZoomCtrl: true,
          autoLoad: false,
          showControls: true,
          orientationOnByDefault: false,
          hotSpotDebug: false,
          backgroundColor: [0, 0, 0],
          avoidShowingBackground: false,
          animationTimingFunction: timingFunction,
          draggable: true,
          disableKeyboardCtrl: false,
          crossOrigin: "anonymous",
          touchPanSpeedCoeffFactor: 1,
          capturedKeyNumbers: [16, 17, 27, 37, 38, 39, 40, 61, 65, 68, 83, 87, 107, 109, 173, 187, 189],
          friction: 0.15
        };
        defaultConfig.uiText = {
          // Labels
          loadButtonLabel: "Click to<br>Load<br>Panorama",
          loadingLabel: "Loading...",
          bylineLabel: "by %s",
          // One substitution: author
          // Errors
          noPanoramaError: "No panorama image was specified.",
          fileAccessError: "The file %s could not be accessed.",
          // One substitution: file URL
          malformedURLError: "There is something wrong with the panorama URL.",
          iOS8WebGLError: "Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).",
          genericWebGLError: "Your browser does not have the necessary WebGL support to display this panorama.",
          textureSizeError: "This panorama is too big for your device! It's %spx wide, but your device only supports images up to %spx wide. Try another device. (If you're the author, try scaling down the image.)",
          // Two substitutions: image width, max image width
          unknownError: "Unknown error. Check developer console."
        };
        container = typeof container === "string" ? document2.getElementById(container) : container;
        container.classList.add("pnlm-container");
        container.tabIndex = 0;
        var uiContainer = document2.createElement("div");
        uiContainer.className = "pnlm-ui";
        container.appendChild(uiContainer);
        var renderContainer = document2.createElement("div");
        renderContainer.className = "pnlm-render-container";
        container.appendChild(renderContainer);
        var dragFix = document2.createElement("div");
        dragFix.className = "pnlm-dragfix";
        uiContainer.appendChild(dragFix);
        var aboutMsg = document2.createElement("span");
        aboutMsg.className = "pnlm-about-msg";
        aboutMsg.innerHTML = '<a href="https://pannellum.org/" target="_blank">Pannellum</a>';
        uiContainer.appendChild(aboutMsg);
        dragFix.addEventListener("contextmenu", aboutMessage);
        var infoDisplay = {};
        var hotSpotDebugIndicator = document2.createElement("div");
        hotSpotDebugIndicator.className = "pnlm-sprite pnlm-hot-spot-debug-indicator";
        uiContainer.appendChild(hotSpotDebugIndicator);
        infoDisplay.container = document2.createElement("div");
        infoDisplay.container.className = "pnlm-panorama-info";
        infoDisplay.title = document2.createElement("div");
        infoDisplay.title.className = "pnlm-title-box";
        infoDisplay.container.appendChild(infoDisplay.title);
        infoDisplay.description = document2.createElement("div");
        infoDisplay.description.className = "pnlm-description-box";
        infoDisplay.container.appendChild(infoDisplay.description);
        infoDisplay.author = document2.createElement("div");
        infoDisplay.author.className = "pnlm-author-box";
        infoDisplay.container.appendChild(infoDisplay.author);
        uiContainer.appendChild(infoDisplay.container);
        infoDisplay.load = {};
        infoDisplay.load.box = document2.createElement("div");
        infoDisplay.load.box.className = "pnlm-load-box";
        infoDisplay.load.boxp = document2.createElement("p");
        infoDisplay.load.box.appendChild(infoDisplay.load.boxp);
        infoDisplay.load.lbox = document2.createElement("div");
        infoDisplay.load.lbox.className = "pnlm-lbox";
        infoDisplay.load.lbox.innerHTML = '<div class="pnlm-loading"></div>';
        infoDisplay.load.box.appendChild(infoDisplay.load.lbox);
        infoDisplay.load.lbar = document2.createElement("div");
        infoDisplay.load.lbar.className = "pnlm-lbar";
        infoDisplay.load.lbarFill = document2.createElement("div");
        infoDisplay.load.lbarFill.className = "pnlm-lbar-fill";
        infoDisplay.load.lbar.appendChild(infoDisplay.load.lbarFill);
        infoDisplay.load.box.appendChild(infoDisplay.load.lbar);
        infoDisplay.load.msg = document2.createElement("p");
        infoDisplay.load.msg.className = "pnlm-lmsg";
        infoDisplay.load.box.appendChild(infoDisplay.load.msg);
        uiContainer.appendChild(infoDisplay.load.box);
        infoDisplay.errorMsg = document2.createElement("div");
        infoDisplay.errorMsg.className = "pnlm-error-msg pnlm-info-box";
        uiContainer.appendChild(infoDisplay.errorMsg);
        var controls = {};
        controls.container = document2.createElement("div");
        controls.container.className = "pnlm-controls-container";
        uiContainer.appendChild(controls.container);
        controls.load = document2.createElement("div");
        controls.load.className = "pnlm-load-button";
        controls.load.addEventListener("click", function() {
          processOptions();
          load();
        });
        uiContainer.appendChild(controls.load);
        controls.zoom = document2.createElement("div");
        controls.zoom.className = "pnlm-zoom-controls pnlm-controls";
        controls.zoomIn = document2.createElement("div");
        controls.zoomIn.className = "pnlm-zoom-in pnlm-sprite pnlm-control";
        controls.zoomIn.addEventListener("click", zoomIn);
        controls.zoom.appendChild(controls.zoomIn);
        controls.zoomOut = document2.createElement("div");
        controls.zoomOut.className = "pnlm-zoom-out pnlm-sprite pnlm-control";
        controls.zoomOut.addEventListener("click", zoomOut);
        controls.zoom.appendChild(controls.zoomOut);
        controls.container.appendChild(controls.zoom);
        controls.fullscreen = document2.createElement("div");
        controls.fullscreen.addEventListener("click", toggleFullscreen2);
        controls.fullscreen.className = "pnlm-fullscreen-toggle-button pnlm-sprite pnlm-fullscreen-toggle-button-inactive pnlm-controls pnlm-control";
        if (document2.fullscreenEnabled || document2.mozFullScreenEnabled || document2.webkitFullscreenEnabled || document2.msFullscreenEnabled) controls.container.appendChild(controls.fullscreen);
        controls.orientation = document2.createElement("div");
        controls.orientation.addEventListener("click", function() {
          if (orientation) stopOrientation2();
          else startOrientation2();
        });
        controls.orientation.addEventListener("mousedown", function(e) {
          e.stopPropagation();
        });
        controls.orientation.addEventListener("touchstart", function(e) {
          e.stopPropagation();
        });
        controls.orientation.addEventListener("pointerdown", function(e) {
          e.stopPropagation();
        });
        controls.orientation.className = "pnlm-orientation-button pnlm-orientation-button-inactive pnlm-sprite pnlm-controls pnlm-control";
        var orientationSupport = false;
        if (window2.DeviceOrientationEvent && location.protocol === "https:" && navigator.userAgent.toLowerCase().indexOf("mobi") >= 0) {
          controls.container.appendChild(controls.orientation);
          orientationSupport = true;
        }
        var compass = document2.createElement("div");
        compass.className = "pnlm-compass pnlm-controls pnlm-control";
        uiContainer.appendChild(compass);
        if (initialConfig.firstScene) {
          mergeConfig(initialConfig.firstScene);
        } else if (initialConfig["default"] && initialConfig["default"].firstScene) {
          mergeConfig(initialConfig["default"].firstScene);
        } else {
          mergeConfig(null);
        }
        processOptions(true);
        function init() {
          var div = document2.createElement("div");
          div.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->";
          if (div.getElementsByTagName("i").length === 1) {
            anError();
            return;
          }
          origHfov = config.hfov;
          origPitch = config.pitch;
          var i, p;
          if (config.type === "cubemap") {
            panoImage = [];
            for (i = 0; i < 6; i++) {
              panoImage.push(new Image());
              panoImage[i].crossOrigin = config.crossOrigin;
            }
            infoDisplay.load.lbox.style.display = "block";
            infoDisplay.load.lbar.style.display = "none";
          } else if (config.type === "multires") {
            var c = JSON.parse(JSON.stringify(config.multiRes));
            if (config.basePath && config.multiRes.basePath && !/^(?:[a-z]+:)?\/\//i.test(config.multiRes.basePath)) {
              c.basePath = config.basePath + config.multiRes.basePath;
            } else if (config.multiRes.basePath) {
              c.basePath = config.multiRes.basePath;
            } else if (config.basePath) {
              c.basePath = config.basePath;
            }
            panoImage = c;
          } else {
            if (config.dynamic === true) {
              panoImage = config.imageSource;
            } else {
              if (config.imageSource === undefined$1) {
                anError(config.uiText.noPanoramaError);
                return;
              }
              panoImage = new Image();
            }
          }
          if (config.type === "cubemap") {
            var itemsToLoad = 6;
            var onLoad = function onLoad2() {
              itemsToLoad--;
              if (itemsToLoad === 0) {
                onImageLoad();
              }
            };
            var onError = function onError2(e) {
              var a = document2.createElement("a");
              a.href = e.target.src;
              a.innerHTML = a.href;
              anError(config.uiText.fileAccessError.replace("%s", a.outerHTML));
            };
            for (i = 0; i < panoImage.length; i++) {
              panoImage[i].onload = onLoad;
              panoImage[i].onerror = onError;
              p = config.cubeMap[i];
              if (p === "null") {
                console.log("Will use background instead of missing cubemap face " + i);
                onLoad();
              } else {
                if (config.basePath && !absoluteURL(p)) {
                  p = config.basePath + p;
                }
                panoImage[i].onload = onLoad;
                panoImage[i].onerror = onError;
                panoImage[i].src = sanitizeURL(p);
              }
            }
          } else if (config.type === "multires") {
            onImageLoad();
          } else {
            p = "";
            if (config.basePath) {
              p = config.basePath;
            }
            if (config.dynamic !== true) {
              p = absoluteURL(config.imageSource) ? config.imageSource : p + config.imageSource;
              panoImage.onload = function() {
                window2.URL.revokeObjectURL(this.src);
                onImageLoad();
              };
              var xhr = new XMLHttpRequest();
              xhr.onloadend = function() {
                if (xhr.status != 200) {
                  var a = document2.createElement("a");
                  a.href = p;
                  a.textContent = a.href;
                  anError(config.uiText.fileAccessError.replace("%s", a.outerHTML));
                }
                var img = this.response;
                if (img) {
                  parseGPanoXMP(img);
                }
                infoDisplay.load.msg.innerHTML = "";
              };
              xhr.onprogress = function(e) {
                if (e.lengthComputable) {
                  var percent = e.loaded / e.total * 100;
                  infoDisplay.load.lbarFill.style.width = percent + "%";
                  var unit, numerator, denominator;
                  if (e.total > 1e6) {
                    unit = "MB";
                    numerator = (e.loaded / 1e6).toFixed(2);
                    denominator = (e.total / 1e6).toFixed(2);
                  } else if (e.total > 1e3) {
                    unit = "kB";
                    numerator = (e.loaded / 1e3).toFixed(1);
                    denominator = (e.total / 1e3).toFixed(1);
                  } else {
                    unit = "B";
                    numerator = e.loaded;
                    denominator = e.total;
                  }
                  infoDisplay.load.msg.innerHTML = numerator + " / " + denominator + " " + unit;
                } else {
                  infoDisplay.load.lbox.style.display = "block";
                  infoDisplay.load.lbar.style.display = "none";
                }
              };
              try {
                xhr.open("GET", p, true);
              } catch (e) {
                anError(config.uiText.malformedURLError);
              }
              xhr.responseType = "blob";
              xhr.setRequestHeader("Accept", "image/*,*/*;q=0.9");
              xhr.withCredentials = config.crossOrigin === "use-credentials";
              xhr.send();
            }
          }
          if (config.draggable) uiContainer.classList.add("pnlm-grab");
          uiContainer.classList.remove("pnlm-grabbing");
          update = config.dynamicUpdate === true;
          if (config.dynamic && update) {
            panoImage = config.panorama;
            onImageLoad();
          }
        }
        function absoluteURL(url) {
          return new RegExp("^(?:[a-z]+:)?//", "i").test(url) || url[0] === "/" || url.slice(0, 5) === "blob:";
        }
        function onImageLoad() {
          if (!renderer) renderer = new libpannellum.renderer(renderContainer);
          if (!listenersAdded) {
            listenersAdded = true;
            dragFix.addEventListener("mousedown", onDocumentMouseDown, false);
            document2.addEventListener("mousemove", onDocumentMouseMove, false);
            document2.addEventListener("mouseup", onDocumentMouseUp, false);
            if (config.mouseZoom) {
              uiContainer.addEventListener("mousewheel", onDocumentMouseWheel, false);
              uiContainer.addEventListener("DOMMouseScroll", onDocumentMouseWheel, false);
            }
            if (config.doubleClickZoom) {
              dragFix.addEventListener("dblclick", onDocumentDoubleClick, false);
            }
            container.addEventListener("mozfullscreenchange", onFullScreenChange, false);
            container.addEventListener("webkitfullscreenchange", onFullScreenChange, false);
            container.addEventListener("msfullscreenchange", onFullScreenChange, false);
            container.addEventListener("fullscreenchange", onFullScreenChange, false);
            window2.addEventListener("resize", onDocumentResize, false);
            window2.addEventListener("orientationchange", onDocumentResize, false);
            if (!config.disableKeyboardCtrl) {
              container.addEventListener("keydown", onDocumentKeyPress, false);
              container.addEventListener("keyup", onDocumentKeyUp, false);
              container.addEventListener("blur", clearKeys, false);
            }
            document2.addEventListener("mouseleave", onDocumentMouseUp, false);
            if (document2.documentElement.style.pointerAction === "" && document2.documentElement.style.touchAction === "") {
              dragFix.addEventListener("pointerdown", onDocumentPointerDown, false);
              dragFix.addEventListener("pointermove", onDocumentPointerMove, false);
              dragFix.addEventListener("pointerup", onDocumentPointerUp, false);
              dragFix.addEventListener("pointerleave", onDocumentPointerUp, false);
            } else {
              dragFix.addEventListener("touchstart", onDocumentTouchStart, false);
              dragFix.addEventListener("touchmove", onDocumentTouchMove, false);
              dragFix.addEventListener("touchend", onDocumentTouchEnd, false);
            }
            if (window2.navigator.pointerEnabled) container.style.touchAction = "none";
          }
          renderInit();
          setHfov2(config.hfov);
        }
        function parseGPanoXMP(image) {
          var fileReader = new FileReader();
          var reader = fileReader.addEventListener ? fileReader : fileReader._realReader;
          reader.addEventListener("loadend", function() {
            var img = reader.result;
            if (navigator.userAgent.toLowerCase().match(/(iphone|ipod|ipad).* os 8_/)) {
              var flagIndex = img.indexOf("ÿÂ");
              if (flagIndex < 0 || flagIndex > 65536) anError(config.uiText.iOS8WebGLError);
            }
            var start = img.indexOf("<x:xmpmeta");
            if (start > -1 && config.ignoreGPanoXMP !== true) {
              var xmpData = img.substring(start, img.indexOf("</x:xmpmeta>") + 12);
              var getTag = function getTag2(tag) {
                var result;
                if (xmpData.indexOf(tag + '="') >= 0) {
                  result = xmpData.substring(xmpData.indexOf(tag + '="') + tag.length + 2);
                  result = result.substring(0, result.indexOf('"'));
                } else if (xmpData.indexOf(tag + ">") >= 0) {
                  result = xmpData.substring(xmpData.indexOf(tag + ">") + tag.length + 1);
                  result = result.substring(0, result.indexOf("<"));
                }
                if (result !== undefined$1) {
                  return Number(result);
                }
                return null;
              };
              var xmp = {
                fullWidth: getTag("GPano:FullPanoWidthPixels"),
                croppedWidth: getTag("GPano:CroppedAreaImageWidthPixels"),
                fullHeight: getTag("GPano:FullPanoHeightPixels"),
                croppedHeight: getTag("GPano:CroppedAreaImageHeightPixels"),
                topPixels: getTag("GPano:CroppedAreaTopPixels"),
                heading: getTag("GPano:PoseHeadingDegrees"),
                horizonPitch: getTag("GPano:PosePitchDegrees"),
                horizonRoll: getTag("GPano:PoseRollDegrees")
              };
              if (xmp.fullWidth !== null && xmp.croppedWidth !== null && xmp.fullHeight !== null && xmp.croppedHeight !== null && xmp.topPixels !== null) {
                if (specifiedPhotoSphereExcludes.indexOf("haov") < 0) config.haov = xmp.croppedWidth / xmp.fullWidth * 360;
                if (specifiedPhotoSphereExcludes.indexOf("vaov") < 0) config.vaov = xmp.croppedHeight / xmp.fullHeight * 180;
                if (specifiedPhotoSphereExcludes.indexOf("vOffset") < 0) config.vOffset = ((xmp.topPixels + xmp.croppedHeight / 2) / xmp.fullHeight - 0.5) * -180;
                if (xmp.heading !== null && specifiedPhotoSphereExcludes.indexOf("northOffset") < 0) {
                  config.northOffset = xmp.heading;
                  if (config.compass !== false) {
                    config.compass = true;
                  }
                }
                if (xmp.horizonPitch !== null && xmp.horizonRoll !== null) {
                  if (specifiedPhotoSphereExcludes.indexOf("horizonPitch") < 0) config.horizonPitch = xmp.horizonPitch;
                  if (specifiedPhotoSphereExcludes.indexOf("horizonRoll") < 0) config.horizonRoll = xmp.horizonRoll;
                }
              }
            }
            panoImage.src = window2.URL.createObjectURL(image);
          });
          if (reader.readAsBinaryString !== undefined$1) {
            reader.readAsBinaryString(image);
          } else {
            reader.readAsText(image);
          }
        }
        function anError(errorMsg) {
          if (errorMsg === undefined$1) errorMsg = config.uiText.genericWebGLError;
          infoDisplay.errorMsg.innerHTML = "<p>" + errorMsg + "</p>";
          controls.load.style.display = "none";
          infoDisplay.load.box.style.display = "none";
          infoDisplay.errorMsg.style.display = "table";
          error = true;
          loaded = undefined$1;
          renderContainer.style.display = "none";
          fireEvent("error", errorMsg);
        }
        function clearError() {
          if (error) {
            infoDisplay.load.box.style.display = "none";
            infoDisplay.errorMsg.style.display = "none";
            error = false;
            renderContainer.style.display = "block";
            fireEvent("errorcleared");
          }
        }
        function aboutMessage(event2) {
          var pos = mousePosition(event2);
          aboutMsg.style.left = pos.x + "px";
          aboutMsg.style.top = pos.y + "px";
          clearTimeout(aboutMessage.t1);
          clearTimeout(aboutMessage.t2);
          aboutMsg.style.display = "block";
          aboutMsg.style.opacity = 1;
          aboutMessage.t1 = setTimeout(function() {
            aboutMsg.style.opacity = 0;
          }, 2e3);
          aboutMessage.t2 = setTimeout(function() {
            aboutMsg.style.display = "none";
          }, 2500);
          event2.preventDefault();
        }
        function mousePosition(event2) {
          var bounds = container.getBoundingClientRect();
          var pos = {};
          pos.x = (event2.clientX || event2.pageX) - bounds.left;
          pos.y = (event2.clientY || event2.pageY) - bounds.top;
          return pos;
        }
        function onDocumentMouseDown(event2) {
          event2.preventDefault();
          container.focus();
          if (!loaded || !config.draggable) {
            return;
          }
          var pos = mousePosition(event2);
          if (config.hotSpotDebug) {
            var coords = mouseEventToCoords2(event2);
            console.log("Pitch: " + coords[0] + ", Yaw: " + coords[1] + ", Center Pitch: " + config.pitch + ", Center Yaw: " + config.yaw + ", HFOV: " + config.hfov);
          }
          stopAnimation();
          stopOrientation2();
          config.roll = 0;
          speed.hfov = 0;
          isUserInteracting = true;
          latestInteraction = Date.now();
          onPointerDownPointerX = pos.x;
          onPointerDownPointerY = pos.y;
          onPointerDownYaw = config.yaw;
          onPointerDownPitch = config.pitch;
          uiContainer.classList.add("pnlm-grabbing");
          uiContainer.classList.remove("pnlm-grab");
          fireEvent("mousedown", event2);
          animateInit();
        }
        function onDocumentDoubleClick(event2) {
          if (config.minHfov === config.hfov) {
            _this.setHfov(origHfov, 1e3);
          } else {
            var coords = mouseEventToCoords2(event2);
            _this.lookAt(coords[0], coords[1], config.minHfov, 1e3);
          }
        }
        function mouseEventToCoords2(event2) {
          var pos = mousePosition(event2);
          var canvas = renderer.getCanvas();
          var canvasWidth = canvas.clientWidth, canvasHeight = canvas.clientHeight;
          var x = pos.x / canvasWidth * 2 - 1;
          var y = (1 - pos.y / canvasHeight * 2) * canvasHeight / canvasWidth;
          var focal = 1 / Math.tan(config.hfov * Math.PI / 360);
          var s = Math.sin(config.pitch * Math.PI / 180);
          var c = Math.cos(config.pitch * Math.PI / 180);
          var a = focal * c - y * s;
          var root = Math.sqrt(x * x + a * a);
          var pitch = Math.atan((y * c + focal * s) / root) * 180 / Math.PI;
          var yaw = Math.atan2(x / root, a / root) * 180 / Math.PI + config.yaw;
          if (yaw < -180) yaw += 360;
          if (yaw > 180) yaw -= 360;
          return [pitch, yaw];
        }
        function onDocumentMouseMove(event2) {
          if (isUserInteracting && loaded) {
            latestInteraction = Date.now();
            var canvas = renderer.getCanvas();
            var canvasWidth = canvas.clientWidth, canvasHeight = canvas.clientHeight;
            var pos = mousePosition(event2);
            var yaw = (Math.atan(onPointerDownPointerX / canvasWidth * 2 - 1) - Math.atan(pos.x / canvasWidth * 2 - 1)) * 180 / Math.PI * config.hfov / 90 + onPointerDownYaw;
            speed.yaw = (yaw - config.yaw) % 360 * 0.2;
            config.yaw = yaw;
            var vfov = 2 * Math.atan(Math.tan(config.hfov / 360 * Math.PI) * canvasHeight / canvasWidth) * 180 / Math.PI;
            var pitch = (Math.atan(pos.y / canvasHeight * 2 - 1) - Math.atan(onPointerDownPointerY / canvasHeight * 2 - 1)) * 180 / Math.PI * vfov / 90 + onPointerDownPitch;
            speed.pitch = (pitch - config.pitch) * 0.2;
            config.pitch = pitch;
          }
        }
        function onDocumentMouseUp(event2) {
          if (!isUserInteracting) {
            return;
          }
          isUserInteracting = false;
          if (Date.now() - latestInteraction > 15) {
            speed.pitch = speed.yaw = 0;
          }
          uiContainer.classList.add("pnlm-grab");
          uiContainer.classList.remove("pnlm-grabbing");
          latestInteraction = Date.now();
          fireEvent("mouseup", event2);
        }
        function onDocumentTouchStart(event2) {
          if (!loaded || !config.draggable) {
            return;
          }
          stopAnimation();
          stopOrientation2();
          config.roll = 0;
          speed.hfov = 0;
          var pos0 = mousePosition(event2.targetTouches[0]);
          onPointerDownPointerX = pos0.x;
          onPointerDownPointerY = pos0.y;
          if (event2.targetTouches.length === 2) {
            var pos1 = mousePosition(event2.targetTouches[1]);
            onPointerDownPointerX += (pos1.x - pos0.x) * 0.5;
            onPointerDownPointerY += (pos1.y - pos0.y) * 0.5;
            onPointerDownPointerDist = Math.sqrt((pos0.x - pos1.x) * (pos0.x - pos1.x) + (pos0.y - pos1.y) * (pos0.y - pos1.y));
          }
          isUserInteracting = true;
          latestInteraction = Date.now();
          onPointerDownYaw = config.yaw;
          onPointerDownPitch = config.pitch;
          fireEvent("touchstart", event2);
          animateInit();
        }
        function onDocumentTouchMove(event2) {
          if (!config.draggable) {
            return;
          }
          event2.preventDefault();
          if (loaded) {
            latestInteraction = Date.now();
          }
          if (isUserInteracting && loaded) {
            var pos0 = mousePosition(event2.targetTouches[0]);
            var clientX = pos0.x;
            var clientY = pos0.y;
            if (event2.targetTouches.length === 2 && onPointerDownPointerDist != -1) {
              var pos1 = mousePosition(event2.targetTouches[1]);
              clientX += (pos1.x - pos0.x) * 0.5;
              clientY += (pos1.y - pos0.y) * 0.5;
              var clientDist = Math.sqrt((pos0.x - pos1.x) * (pos0.x - pos1.x) + (pos0.y - pos1.y) * (pos0.y - pos1.y));
              setHfov2(config.hfov + (onPointerDownPointerDist - clientDist) * 0.1);
              onPointerDownPointerDist = clientDist;
            }
            var touchmovePanSpeedCoeff = config.hfov / 360 * config.touchPanSpeedCoeffFactor;
            var yaw = (onPointerDownPointerX - clientX) * touchmovePanSpeedCoeff + onPointerDownYaw;
            speed.yaw = (yaw - config.yaw) % 360 * 0.2;
            config.yaw = yaw;
            var pitch = (clientY - onPointerDownPointerY) * touchmovePanSpeedCoeff + onPointerDownPitch;
            speed.pitch = (pitch - config.pitch) * 0.2;
            config.pitch = pitch;
          }
        }
        function onDocumentTouchEnd() {
          isUserInteracting = false;
          if (Date.now() - latestInteraction > 150) {
            speed.pitch = speed.yaw = 0;
          }
          onPointerDownPointerDist = -1;
          latestInteraction = Date.now();
          fireEvent("touchend", event);
        }
        var pointerIDs = [], pointerCoordinates = [];
        function onDocumentPointerDown(event2) {
          if (event2.pointerType === "touch") {
            if (!loaded || !config.draggable) return;
            pointerIDs.push(event2.pointerId);
            pointerCoordinates.push({
              clientX: event2.clientX,
              clientY: event2.clientY
            });
            event2.targetTouches = pointerCoordinates;
            onDocumentTouchStart(event2);
            event2.preventDefault();
          }
        }
        function onDocumentPointerMove(event2) {
          if (event2.pointerType === "touch") {
            if (!config.draggable) return;
            for (var i = 0; i < pointerIDs.length; i++) {
              if (event2.pointerId === pointerIDs[i]) {
                pointerCoordinates[i].clientX = event2.clientX;
                pointerCoordinates[i].clientY = event2.clientY;
                event2.targetTouches = pointerCoordinates;
                onDocumentTouchMove(event2);
                event2.preventDefault();
                return;
              }
            }
          }
        }
        function onDocumentPointerUp(event2) {
          if (event2.pointerType === "touch") {
            var defined = false;
            for (var i = 0; i < pointerIDs.length; i++) {
              if (event2.pointerId === pointerIDs[i]) pointerIDs[i] = undefined$1;
              if (pointerIDs[i]) defined = true;
            }
            if (!defined) {
              pointerIDs = [];
              pointerCoordinates = [];
              onDocumentTouchEnd();
            }
            event2.preventDefault();
          }
        }
        function onDocumentMouseWheel(event2) {
          if (!loaded || config.mouseZoom === "fullscreenonly" && !fullscreenActive) {
            return;
          }
          event2.preventDefault();
          stopAnimation();
          latestInteraction = Date.now();
          if (event2.wheelDeltaY) {
            setHfov2(config.hfov - event2.wheelDeltaY * 0.05);
            speed.hfov = event2.wheelDelta < 0 ? 1 : -1;
          } else if (event2.wheelDelta) {
            setHfov2(config.hfov - event2.wheelDelta * 0.05);
            speed.hfov = event2.wheelDelta < 0 ? 1 : -1;
          } else if (event2.detail) {
            setHfov2(config.hfov + event2.detail * 1.5);
            speed.hfov = event2.detail > 0 ? 1 : -1;
          }
          animateInit();
        }
        function onDocumentKeyPress(event2) {
          stopAnimation();
          latestInteraction = Date.now();
          stopOrientation2();
          config.roll = 0;
          var keynumber = event2.which || event2.keycode;
          if (config.capturedKeyNumbers.indexOf(keynumber) < 0) return;
          event2.preventDefault();
          if (keynumber === 27) {
            if (fullscreenActive) {
              toggleFullscreen2();
            }
          } else {
            changeKey(keynumber, true);
          }
        }
        function clearKeys() {
          for (var i = 0; i < 10; i++) {
            keysDown[i] = false;
          }
        }
        function onDocumentKeyUp(event2) {
          var keynumber = event2.which || event2.keycode;
          if (config.capturedKeyNumbers.indexOf(keynumber) < 0) return;
          event2.preventDefault();
          changeKey(keynumber, false);
        }
        function changeKey(keynumber, value) {
          var keyChanged = false;
          switch (keynumber) {
            case 109:
            case 189:
            case 17:
            case 173:
              if (keysDown[0] != value) {
                keyChanged = true;
              }
              keysDown[0] = value;
              break;
            case 107:
            case 187:
            case 16:
            case 61:
              if (keysDown[1] != value) {
                keyChanged = true;
              }
              keysDown[1] = value;
              break;
            case 38:
              if (keysDown[2] != value) {
                keyChanged = true;
              }
              keysDown[2] = value;
              break;
            case 87:
              if (keysDown[6] != value) {
                keyChanged = true;
              }
              keysDown[6] = value;
              break;
            case 40:
              if (keysDown[3] != value) {
                keyChanged = true;
              }
              keysDown[3] = value;
              break;
            case 83:
              if (keysDown[7] != value) {
                keyChanged = true;
              }
              keysDown[7] = value;
              break;
            case 37:
              if (keysDown[4] != value) {
                keyChanged = true;
              }
              keysDown[4] = value;
              break;
            case 65:
              if (keysDown[8] != value) {
                keyChanged = true;
              }
              keysDown[8] = value;
              break;
            case 39:
              if (keysDown[5] != value) {
                keyChanged = true;
              }
              keysDown[5] = value;
              break;
            case 68:
              if (keysDown[9] != value) {
                keyChanged = true;
              }
              keysDown[9] = value;
          }
          if (keyChanged && value) {
            if (typeof performance !== "undefined" && performance.now()) {
              prevTime = performance.now();
            } else {
              prevTime = Date.now();
            }
            animateInit();
          }
        }
        function keyRepeat() {
          if (!loaded) {
            return;
          }
          var isKeyDown = false;
          var prevPitch = config.pitch;
          var prevYaw = config.yaw;
          var prevZoom = config.hfov;
          var newTime;
          if (typeof performance !== "undefined" && performance.now()) {
            newTime = performance.now();
          } else {
            newTime = Date.now();
          }
          if (prevTime === undefined$1) {
            prevTime = newTime;
          }
          var diff = (newTime - prevTime) * config.hfov / 1700;
          diff = Math.min(diff, 1);
          if (keysDown[0] && config.keyboardZoom === true) {
            setHfov2(config.hfov + (speed.hfov * 0.8 + 0.5) * diff);
            isKeyDown = true;
          }
          if (keysDown[1] && config.keyboardZoom === true) {
            setHfov2(config.hfov + (speed.hfov * 0.8 - 0.2) * diff);
            isKeyDown = true;
          }
          if (keysDown[2] || keysDown[6]) {
            config.pitch += (speed.pitch * 0.8 + 0.2) * diff;
            isKeyDown = true;
          }
          if (keysDown[3] || keysDown[7]) {
            config.pitch += (speed.pitch * 0.8 - 0.2) * diff;
            isKeyDown = true;
          }
          if (keysDown[4] || keysDown[8]) {
            config.yaw += (speed.yaw * 0.8 - 0.2) * diff;
            isKeyDown = true;
          }
          if (keysDown[5] || keysDown[9]) {
            config.yaw += (speed.yaw * 0.8 + 0.2) * diff;
            isKeyDown = true;
          }
          if (isKeyDown) latestInteraction = Date.now();
          if (config.autoRotate) {
            if (newTime - prevTime > 1e-3) {
              var timeDiff = (newTime - prevTime) / 1e3;
              var yawDiff = (speed.yaw / timeDiff * diff - config.autoRotate * 0.2) * timeDiff;
              yawDiff = (-config.autoRotate > 0 ? 1 : -1) * Math.min(Math.abs(config.autoRotate * timeDiff), Math.abs(yawDiff));
              config.yaw += yawDiff;
            }
            if (config.autoRotateStopDelay) {
              config.autoRotateStopDelay -= newTime - prevTime;
              if (config.autoRotateStopDelay <= 0) {
                config.autoRotateStopDelay = false;
                autoRotateSpeed = config.autoRotate;
                config.autoRotate = 0;
              }
            }
          }
          if (animatedMove.pitch) {
            animateMove("pitch");
            prevPitch = config.pitch;
          }
          if (animatedMove.yaw) {
            animateMove("yaw");
            prevYaw = config.yaw;
          }
          if (animatedMove.hfov) {
            animateMove("hfov");
            prevZoom = config.hfov;
          }
          if (diff > 0 && !config.autoRotate) {
            var slowDownFactor = 1 - config.friction;
            if (!keysDown[4] && !keysDown[5] && !keysDown[8] && !keysDown[9] && !animatedMove.yaw) {
              config.yaw += speed.yaw * diff * slowDownFactor;
            }
            if (!keysDown[2] && !keysDown[3] && !keysDown[6] && !keysDown[7] && !animatedMove.pitch) {
              config.pitch += speed.pitch * diff * slowDownFactor;
            }
            if (!keysDown[0] && !keysDown[1] && !animatedMove.hfov) {
              setHfov2(config.hfov + speed.hfov * diff * slowDownFactor);
            }
          }
          prevTime = newTime;
          if (diff > 0) {
            speed.yaw = speed.yaw * 0.8 + (config.yaw - prevYaw) / diff * 0.2;
            speed.pitch = speed.pitch * 0.8 + (config.pitch - prevPitch) / diff * 0.2;
            speed.hfov = speed.hfov * 0.8 + (config.hfov - prevZoom) / diff * 0.2;
            var maxSpeed = config.autoRotate ? Math.abs(config.autoRotate) : 5;
            speed.yaw = Math.min(maxSpeed, Math.max(speed.yaw, -maxSpeed));
            speed.pitch = Math.min(maxSpeed, Math.max(speed.pitch, -maxSpeed));
            speed.hfov = Math.min(maxSpeed, Math.max(speed.hfov, -maxSpeed));
          }
          if (keysDown[0] && keysDown[1]) {
            speed.hfov = 0;
          }
          if ((keysDown[2] || keysDown[6]) && (keysDown[3] || keysDown[7])) {
            speed.pitch = 0;
          }
          if ((keysDown[4] || keysDown[8]) && (keysDown[5] || keysDown[9])) {
            speed.yaw = 0;
          }
        }
        function animateMove(axis) {
          var t = animatedMove[axis];
          var normTime = Math.min(1, Math.max((Date.now() - t.startTime) / 1e3 / (t.duration / 1e3), 0));
          var result = t.startPosition + config.animationTimingFunction(normTime) * (t.endPosition - t.startPosition);
          if (t.endPosition > t.startPosition && result >= t.endPosition || t.endPosition < t.startPosition && result <= t.endPosition || t.endPosition === t.startPosition) {
            result = t.endPosition;
            speed[axis] = 0;
            delete animatedMove[axis];
          }
          config[axis] = result;
        }
        function timingFunction(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }
        function onDocumentResize() {
          onFullScreenChange("resize");
        }
        function animateInit() {
          if (animating) {
            return;
          }
          animating = true;
          animate();
        }
        function animate() {
          if (destroyed) {
            return;
          }
          render();
          if (autoRotateStart) clearTimeout(autoRotateStart);
          if (isUserInteracting || orientation === true) {
            requestAnimationFrame(animate);
          } else if (keysDown[0] || keysDown[1] || keysDown[2] || keysDown[3] || keysDown[4] || keysDown[5] || keysDown[6] || keysDown[7] || keysDown[8] || keysDown[9] || config.autoRotate || animatedMove.pitch || animatedMove.yaw || animatedMove.hfov || Math.abs(speed.yaw) > 0.01 || Math.abs(speed.pitch) > 0.01 || Math.abs(speed.hfov) > 0.01) {
            keyRepeat();
            if (config.autoRotateInactivityDelay >= 0 && autoRotateSpeed && Date.now() - latestInteraction > config.autoRotateInactivityDelay && !config.autoRotate) {
              config.autoRotate = autoRotateSpeed;
              _this.lookAt(origPitch, undefined$1, origHfov, 3e3);
            }
            requestAnimationFrame(animate);
          } else if (renderer && (renderer.isLoading() || config.dynamic === true && update)) {
            requestAnimationFrame(animate);
          } else {
            fireEvent("animatefinished", {
              pitch: _this.getPitch(),
              yaw: _this.getYaw(),
              hfov: _this.getHfov()
            });
            animating = false;
            prevTime = undefined$1;
            var autoRotateStartTime = config.autoRotateInactivityDelay - (Date.now() - latestInteraction);
            if (autoRotateStartTime > 0) {
              autoRotateStart = setTimeout(function() {
                config.autoRotate = autoRotateSpeed;
                _this.lookAt(origPitch, undefined$1, origHfov, 3e3);
                animateInit();
              }, autoRotateStartTime);
            } else if (config.autoRotateInactivityDelay >= 0 && autoRotateSpeed) {
              config.autoRotate = autoRotateSpeed;
              _this.lookAt(origPitch, undefined$1, origHfov, 3e3);
              animateInit();
            }
          }
        }
        function render() {
          var tmpyaw;
          if (loaded) {
            var canvas = renderer.getCanvas();
            if (config.autoRotate !== false) {
              if (config.yaw > 180) {
                config.yaw -= 360;
              } else if (config.yaw < -180) {
                config.yaw += 360;
              }
            }
            tmpyaw = config.yaw;
            var hoffcut = 0;
            if (config.avoidShowingBackground) {
              var hfov2 = config.hfov / 2, vfov2 = Math.atan2(Math.tan(hfov2 / 180 * Math.PI), canvas.width / canvas.height) * 180 / Math.PI, transposed = config.vaov > config.haov;
              if (!transposed) {
                hoffcut = hfov2 * (1 - Math.min(Math.cos((config.pitch - vfov2) / 180 * Math.PI), Math.cos((config.pitch + vfov2) / 180 * Math.PI)));
              }
            }
            var yawRange = config.maxYaw - config.minYaw, minYaw = -180, maxYaw = 180;
            if (yawRange < 360) {
              minYaw = config.minYaw + config.hfov / 2 + hoffcut;
              maxYaw = config.maxYaw - config.hfov / 2 - hoffcut;
              if (yawRange < config.hfov) {
                minYaw = maxYaw = (minYaw + maxYaw) / 2;
              }
              config.yaw = Math.max(minYaw, Math.min(maxYaw, config.yaw));
            }
            if (!(config.autoRotate !== false)) {
              if (config.yaw > 180) {
                config.yaw -= 360;
              } else if (config.yaw < -180) {
                config.yaw += 360;
              }
            }
            if (config.autoRotate !== false && tmpyaw != config.yaw && prevTime !== undefined$1) {
              config.autoRotate *= -1;
            }
            var vfov = 2 * Math.atan(Math.tan(config.hfov / 180 * Math.PI * 0.5) / (canvas.width / canvas.height)) / Math.PI * 180;
            var minPitch = config.minPitch + vfov / 2, maxPitch = config.maxPitch - vfov / 2;
            var pitchRange = config.maxPitch - config.minPitch;
            if (pitchRange < vfov) {
              minPitch = maxPitch = (minPitch + maxPitch) / 2;
            }
            if (isNaN(minPitch)) minPitch = -90;
            if (isNaN(maxPitch)) maxPitch = 90;
            config.pitch = Math.max(minPitch, Math.min(maxPitch, config.pitch));
            renderer.render(config.pitch * Math.PI / 180, config.yaw * Math.PI / 180, config.hfov * Math.PI / 180, {
              roll: config.roll * Math.PI / 180
            });
            renderHotSpots();
            if (config.compass) {
              compass.style.transform = "rotate(" + (-config.yaw - config.northOffset) + "deg)";
              compass.style.webkitTransform = "rotate(" + (-config.yaw - config.northOffset) + "deg)";
            }
          }
        }
        function Quaternion(w, x, y, z) {
          this.w = w;
          this.x = x;
          this.y = y;
          this.z = z;
        }
        Quaternion.prototype.multiply = function(q) {
          return new Quaternion(this.w * q.w - this.x * q.x - this.y * q.y - this.z * q.z, this.x * q.w + this.w * q.x + this.y * q.z - this.z * q.y, this.y * q.w + this.w * q.y + this.z * q.x - this.x * q.z, this.z * q.w + this.w * q.z + this.x * q.y - this.y * q.x);
        };
        Quaternion.prototype.toEulerAngles = function() {
          var phi = Math.atan2(2 * (this.w * this.x + this.y * this.z), 1 - 2 * (this.x * this.x + this.y * this.y)), theta = Math.asin(2 * (this.w * this.y - this.z * this.x)), psi = Math.atan2(2 * (this.w * this.z + this.x * this.y), 1 - 2 * (this.y * this.y + this.z * this.z));
          return [phi, theta, psi];
        };
        function taitBryanToQuaternion(alpha, beta, gamma) {
          var r = [beta ? beta * Math.PI / 180 / 2 : 0, gamma ? gamma * Math.PI / 180 / 2 : 0, alpha ? alpha * Math.PI / 180 / 2 : 0];
          var c = [Math.cos(r[0]), Math.cos(r[1]), Math.cos(r[2])], s = [Math.sin(r[0]), Math.sin(r[1]), Math.sin(r[2])];
          return new Quaternion(c[0] * c[1] * c[2] - s[0] * s[1] * s[2], s[0] * c[1] * c[2] - c[0] * s[1] * s[2], c[0] * s[1] * c[2] + s[0] * c[1] * s[2], c[0] * c[1] * s[2] + s[0] * s[1] * c[2]);
        }
        function computeQuaternion(alpha, beta, gamma) {
          var quaternion = taitBryanToQuaternion(alpha, beta, gamma);
          quaternion = quaternion.multiply(new Quaternion(Math.sqrt(0.5), -Math.sqrt(0.5), 0, 0));
          var angle = window2.orientation ? -window2.orientation * Math.PI / 180 / 2 : 0;
          return quaternion.multiply(new Quaternion(Math.cos(angle), 0, -Math.sin(angle), 0));
        }
        function orientationListener(e) {
          if (e.hasOwnProperty("requestPermission")) e.requestPermission();
          var q = computeQuaternion(e.alpha, e.beta, e.gamma).toEulerAngles();
          if (typeof orientation === "number" && orientation < 10) {
            orientation += 1;
          } else if (orientation === 10) {
            orientationYawOffset = q[2] / Math.PI * 180 + config.yaw;
            orientation = true;
            requestAnimationFrame(animate);
          } else {
            config.pitch = q[0] / Math.PI * 180;
            config.roll = -q[1] / Math.PI * 180;
            config.yaw = -q[2] / Math.PI * 180 + orientationYawOffset;
          }
        }
        function renderInit() {
          try {
            var params = {};
            if (config.horizonPitch !== undefined$1) params.horizonPitch = config.horizonPitch * Math.PI / 180;
            if (config.horizonRoll !== undefined$1) params.horizonRoll = config.horizonRoll * Math.PI / 180;
            if (config.backgroundColor !== undefined$1) params.backgroundColor = config.backgroundColor;
            renderer.init(panoImage, config.type, config.dynamic, config.haov * Math.PI / 180, config.vaov * Math.PI / 180, config.vOffset * Math.PI / 180, renderInitCallback, params);
            if (config.dynamic !== true) {
              panoImage = undefined$1;
            }
          } catch (event2) {
            if (event2.type === "webgl error" || event2.type === "no webgl") {
              anError();
            } else if (event2.type === "webgl size error") {
              anError(config.uiText.textureSizeError.replace("%s", event2.width).replace("%s", event2.maxWidth));
            } else {
              anError(config.uiText.unknownError);
              throw event2;
            }
          }
        }
        function renderInitCallback() {
          if (config.sceneFadeDuration && renderer.fadeImg !== undefined$1) {
            renderer.fadeImg.style.opacity = 0;
            var fadeImg = renderer.fadeImg;
            delete renderer.fadeImg;
            setTimeout(function() {
              renderContainer.removeChild(fadeImg);
              fireEvent("scenechangefadedone");
            }, config.sceneFadeDuration);
          }
          if (config.compass) {
            compass.style.display = "inline";
          } else {
            compass.style.display = "none";
          }
          createHotSpots();
          infoDisplay.load.box.style.display = "none";
          if (preview !== undefined$1) {
            renderContainer.removeChild(preview);
            preview = undefined$1;
          }
          loaded = true;
          animateInit();
          fireEvent("load");
        }
        function createHotSpot(hs) {
          hs.pitch = Number(hs.pitch) || 0;
          hs.yaw = Number(hs.yaw) || 0;
          var div = document2.createElement("div");
          div.className = "pnlm-hotspot-base";
          if (hs.cssClass) div.className += " " + hs.cssClass;
          else div.className += " pnlm-hotspot pnlm-sprite pnlm-" + escapeHTML(hs.type);
          var span = document2.createElement("span");
          if (hs.text) span.innerHTML = escapeHTML(hs.text);
          var a;
          if (hs.video) {
            var video = document2.createElement("video"), vidp = hs.video;
            if (config.basePath && !absoluteURL(vidp)) vidp = config.basePath + vidp;
            video.src = sanitizeURL(vidp);
            video.controls = true;
            video.style.width = hs.width + "px";
            renderContainer.appendChild(div);
            span.appendChild(video);
          } else if (hs.image) {
            var imgp = hs.image;
            if (config.basePath && !absoluteURL(imgp)) imgp = config.basePath + imgp;
            a = document2.createElement("a");
            a.href = sanitizeURL(hs.URL ? hs.URL : imgp);
            a.target = "_blank";
            span.appendChild(a);
            var image = document2.createElement("img");
            image.src = sanitizeURL(imgp);
            image.style.width = hs.width + "px";
            image.style.paddingTop = "5px";
            renderContainer.appendChild(div);
            a.appendChild(image);
            span.style.maxWidth = "initial";
          } else if (hs.URL) {
            a = document2.createElement("a");
            a.href = sanitizeURL(hs.URL);
            if (hs.attributes) {
              for (var key in hs.attributes) {
                a.setAttribute(key, hs.attributes[key]);
              }
            } else {
              a.target = "_blank";
            }
            renderContainer.appendChild(a);
            div.className += " pnlm-pointer";
            span.className += " pnlm-pointer";
            a.appendChild(div);
          } else {
            if (hs.sceneId) {
              div.onclick = div.ontouchend = function() {
                if (!div.clicked) {
                  div.clicked = true;
                  loadScene2(hs.sceneId, hs.targetPitch, hs.targetYaw, hs.targetHfov);
                }
                return false;
              };
              div.className += " pnlm-pointer";
              span.className += " pnlm-pointer";
            }
            renderContainer.appendChild(div);
          }
          if (hs.createTooltipFunc) {
            hs.createTooltipFunc(div, hs.createTooltipArgs);
          } else if (hs.text || hs.video || hs.image) {
            div.classList.add("pnlm-tooltip");
            div.appendChild(span);
            span.style.width = span.scrollWidth - 20 + "px";
            span.style.marginLeft = -(span.scrollWidth - div.offsetWidth) / 2 + "px";
            span.style.marginTop = -span.scrollHeight - 12 + "px";
          }
          if (hs.clickHandlerFunc) {
            div.addEventListener("click", function(e) {
              hs.clickHandlerFunc(e, hs.clickHandlerArgs);
            }, "false");
            div.className += " pnlm-pointer";
            span.className += " pnlm-pointer";
          }
          hs.div = div;
        }
        function createHotSpots() {
          if (hotspotsCreated) return;
          if (!config.hotSpots) {
            config.hotSpots = [];
          } else {
            config.hotSpots = config.hotSpots.sort(function(a, b) {
              return a.pitch < b.pitch;
            });
            config.hotSpots.forEach(createHotSpot);
          }
          hotspotsCreated = true;
          renderHotSpots();
        }
        function destroyHotSpots() {
          var hs = config.hotSpots;
          hotspotsCreated = false;
          delete config.hotSpots;
          if (hs) {
            for (var i = 0; i < hs.length; i++) {
              var current = hs[i].div;
              if (current) {
                while (current.parentNode && current.parentNode != renderContainer) {
                  current = current.parentNode;
                }
                renderContainer.removeChild(current);
              }
              delete hs[i].div;
            }
          }
        }
        function renderHotSpot(hs) {
          var hsPitchSin = Math.sin(hs.pitch * Math.PI / 180), hsPitchCos = Math.cos(hs.pitch * Math.PI / 180), configPitchSin = Math.sin(config.pitch * Math.PI / 180), configPitchCos = Math.cos(config.pitch * Math.PI / 180), yawCos = Math.cos((-hs.yaw + config.yaw) * Math.PI / 180);
          var z = hsPitchSin * configPitchSin + hsPitchCos * yawCos * configPitchCos;
          if (hs.yaw <= 90 && hs.yaw > -90 && z <= 0 || (hs.yaw > 90 || hs.yaw <= -90) && z <= 0) {
            hs.div.style.visibility = "hidden";
          } else {
            var yawSin = Math.sin((-hs.yaw + config.yaw) * Math.PI / 180), hfovTan = Math.tan(config.hfov * Math.PI / 360);
            hs.div.style.visibility = "visible";
            var canvas = renderer.getCanvas(), canvasWidth = canvas.clientWidth, canvasHeight = canvas.clientHeight;
            var coord = [-canvasWidth / hfovTan * yawSin * hsPitchCos / z / 2, -canvasWidth / hfovTan * (hsPitchSin * configPitchCos - hsPitchCos * yawCos * configPitchSin) / z / 2];
            var rollSin = Math.sin(config.roll * Math.PI / 180), rollCos = Math.cos(config.roll * Math.PI / 180);
            coord = [coord[0] * rollCos - coord[1] * rollSin, coord[0] * rollSin + coord[1] * rollCos];
            coord[0] += (canvasWidth - hs.div.offsetWidth) / 2;
            coord[1] += (canvasHeight - hs.div.offsetHeight) / 2;
            var transform = "translate(" + coord[0] + "px, " + coord[1] + "px) translateZ(9999px) rotate(" + config.roll + "deg)";
            if (hs.scale) {
              transform += " scale(" + origHfov / config.hfov / z + ")";
            }
            hs.div.style.webkitTransform = transform;
            hs.div.style.MozTransform = transform;
            hs.div.style.transform = transform;
          }
        }
        function renderHotSpots() {
          config.hotSpots.forEach(renderHotSpot);
        }
        function mergeConfig(sceneId) {
          config = {};
          var k, s;
          var photoSphereExcludes = ["haov", "vaov", "vOffset", "northOffset", "horizonPitch", "horizonRoll"];
          specifiedPhotoSphereExcludes = [];
          for (k in defaultConfig) {
            if (defaultConfig.hasOwnProperty(k)) {
              config[k] = defaultConfig[k];
            }
          }
          for (k in initialConfig["default"]) {
            if (initialConfig["default"].hasOwnProperty(k)) {
              if (k === "uiText") {
                for (s in initialConfig["default"].uiText) {
                  if (initialConfig["default"].uiText.hasOwnProperty(s)) {
                    config.uiText[s] = escapeHTML(initialConfig["default"].uiText[s]);
                  }
                }
              } else {
                config[k] = initialConfig["default"][k];
                if (photoSphereExcludes.indexOf(k) >= 0) {
                  specifiedPhotoSphereExcludes.push(k);
                }
              }
            }
          }
          if (sceneId !== null && sceneId !== "" && initialConfig.scenes && initialConfig.scenes[sceneId]) {
            var scene = initialConfig.scenes[sceneId];
            for (k in scene) {
              if (scene.hasOwnProperty(k)) {
                if (k === "uiText") {
                  for (s in scene.uiText) {
                    if (scene.uiText.hasOwnProperty(s)) {
                      config.uiText[s] = escapeHTML(scene.uiText[s]);
                    }
                  }
                } else {
                  config[k] = scene[k];
                  if (photoSphereExcludes.indexOf(k) >= 0) {
                    specifiedPhotoSphereExcludes.push(k);
                  }
                }
              }
            }
            config.scene = sceneId;
          }
          for (k in initialConfig) {
            if (initialConfig.hasOwnProperty(k)) {
              if (k === "uiText") {
                for (s in initialConfig.uiText) {
                  if (initialConfig.uiText.hasOwnProperty(s)) {
                    config.uiText[s] = escapeHTML(initialConfig.uiText[s]);
                  }
                }
              } else {
                config[k] = initialConfig[k];
                if (photoSphereExcludes.indexOf(k) >= 0) {
                  specifiedPhotoSphereExcludes.push(k);
                }
              }
            }
          }
        }
        function processOptions(isPreview) {
          isPreview = isPreview ? isPreview : false;
          if (isPreview && "preview" in config) {
            var p = config.preview;
            if (config.basePath && !absoluteURL(p)) p = config.basePath + p;
            preview = document2.createElement("div");
            preview.className = "pnlm-preview-img";
            preview.style.backgroundImage = "url('" + sanitizeURLForCss(p) + "')";
            renderContainer.appendChild(preview);
          }
          var title = config.title, author = config.author, description = config.description;
          if (isPreview) {
            if ("previewTitle" in config) config.title = config.previewTitle;
            if ("previewDescription" in config) config.description = config.previewDescription;
            if ("previewAuthor" in config) config.author = config.previewAuthor;
          }
          if (!config.hasOwnProperty("title")) infoDisplay.title.innerHTML = "";
          if (!config.hasOwnProperty("description")) infoDisplay.description.innerHTML = "";
          if (!config.hasOwnProperty("author")) infoDisplay.author.innerHTML = "";
          if (!config.hasOwnProperty("title") && !config.hasOwnProperty("description") && !config.hasOwnProperty("author")) infoDisplay.container.style.display = "none";
          controls.load.innerHTML = "<p>" + config.uiText.loadButtonLabel + "</p>";
          infoDisplay.load.boxp.innerHTML = config.uiText.loadingLabel;
          for (var key in config) {
            if (config.hasOwnProperty(key)) {
              switch (key) {
                case "title":
                  infoDisplay.title.innerHTML = escapeHTML(config[key]);
                  infoDisplay.container.style.display = "inline";
                  break;
                case "description":
                  infoDisplay.description.innerHTML = escapeHTML(config[key]);
                  infoDisplay.container.style.display = "inline";
                  break;
                case "author":
                  var authorText = escapeHTML(config[key]);
                  if (config.authorURL) {
                    var authorLink = document2.createElement("a");
                    authorLink.href = sanitizeURL(config["authorURL"]);
                    authorLink.target = "_blank";
                    authorLink.innerHTML = escapeHTML(config[key]);
                    authorText = authorLink.outerHTML;
                  }
                  infoDisplay.author.innerHTML = config.uiText.bylineLabel.replace("%s", authorText);
                  infoDisplay.container.style.display = "inline";
                  break;
                case "fallback":
                  var link = document2.createElement("a");
                  link.href = sanitizeURL(config[key]);
                  link.target = "_blank";
                  link.textContent = "Click here to view this panorama in an alternative viewer.";
                  var message = document2.createElement("p");
                  message.textContent = "Your browser does not support WebGL.";
                  message.appendChild(document2.createElement("br"));
                  message.appendChild(link);
                  infoDisplay.errorMsg.innerHTML = "";
                  infoDisplay.errorMsg.appendChild(message);
                  break;
                case "hfov":
                  setHfov2(Number(config[key]));
                  break;
                case "autoLoad":
                  if (config[key] === true && renderer === undefined$1) {
                    infoDisplay.load.box.style.display = "inline";
                    controls.load.style.display = "none";
                    init();
                  }
                  break;
                case "showZoomCtrl":
                  if (config[key] && config.showControls != false) {
                    controls.zoom.style.display = "block";
                  } else {
                    controls.zoom.style.display = "none";
                  }
                  break;
                case "showFullscreenCtrl":
                  if (config[key] && config.showControls != false && ("fullscreen" in document2 || "mozFullScreen" in document2 || "webkitIsFullScreen" in document2 || "msFullscreenElement" in document2)) {
                    controls.fullscreen.style.display = "block";
                  } else {
                    controls.fullscreen.style.display = "none";
                  }
                  break;
                case "hotSpotDebug":
                  if (config[key]) hotSpotDebugIndicator.style.display = "block";
                  else hotSpotDebugIndicator.style.display = "none";
                  break;
                case "showControls":
                  if (!config[key]) {
                    controls.orientation.style.display = "none";
                    controls.zoom.style.display = "none";
                    controls.fullscreen.style.display = "none";
                  }
                  break;
                case "orientationOnByDefault":
                  if (config[key]) {
                    startOrientation2();
                    break;
                  }
              }
            }
          }
          if (isPreview) {
            if (title) config.title = title;
            else delete config.title;
            if (description) config.description = description;
            else delete config.description;
            if (author) config.author = author;
            else delete config.author;
          }
        }
        function toggleFullscreen2() {
          if (loaded && !error) {
            if (!fullscreenActive) {
              try {
                if (container.requestFullscreen) {
                  container.requestFullscreen();
                } else if (container.mozRequestFullScreen) {
                  container.mozRequestFullScreen();
                } else if (container.msRequestFullscreen) {
                  container.msRequestFullscreen();
                } else {
                  container.webkitRequestFullScreen();
                }
              } catch (event2) {
              }
            } else {
              if (document2.exitFullscreen) {
                document2.exitFullscreen();
              } else if (document2.mozCancelFullScreen) {
                document2.mozCancelFullScreen();
              } else if (document2.webkitCancelFullScreen) {
                document2.webkitCancelFullScreen();
              } else if (document2.msExitFullscreen) {
                document2.msExitFullscreen();
              }
            }
          }
        }
        function onFullScreenChange(resize2) {
          if (document2.fullscreenElement || document2.fullscreen || document2.mozFullScreen || document2.webkitIsFullScreen || document2.msFullscreenElement) {
            controls.fullscreen.classList.add("pnlm-fullscreen-toggle-button-active");
            fullscreenActive = true;
          } else {
            controls.fullscreen.classList.remove("pnlm-fullscreen-toggle-button-active");
            fullscreenActive = false;
          }
          if (resize2 !== "resize") fireEvent("fullscreenchange", fullscreenActive);
          renderer.resize();
          setHfov2(config.hfov);
          animateInit();
        }
        function zoomIn() {
          if (loaded) {
            setHfov2(config.hfov - 5);
            animateInit();
          }
        }
        function zoomOut() {
          if (loaded) {
            setHfov2(config.hfov + 5);
            animateInit();
          }
        }
        function constrainHfov(hfov) {
          var minHfov = config.minHfov;
          if (config.type === "multires" && renderer && !config.multiResMinHfov) {
            minHfov = Math.min(minHfov, renderer.getCanvas().width / (config.multiRes.cubeResolution / 90 * 0.9));
          }
          if (minHfov > config.maxHfov) {
            console.log("HFOV bounds do not make sense (minHfov > maxHfov).");
            return config.hfov;
          }
          var newHfov = config.hfov;
          if (hfov < minHfov) {
            newHfov = minHfov;
          } else if (hfov > config.maxHfov) {
            newHfov = config.maxHfov;
          } else {
            newHfov = hfov;
          }
          if (config.avoidShowingBackground && renderer) {
            var canvas = renderer.getCanvas();
            newHfov = Math.min(newHfov, Math.atan(Math.tan((config.maxPitch - config.minPitch) / 360 * Math.PI) / canvas.height * canvas.width) * 360 / Math.PI);
          }
          return newHfov;
        }
        function setHfov2(hfov) {
          config.hfov = constrainHfov(hfov);
          fireEvent("zoomchange", config.hfov);
        }
        function stopAnimation() {
          animatedMove = {};
          autoRotateSpeed = config.autoRotate ? config.autoRotate : autoRotateSpeed;
          config.autoRotate = false;
        }
        function load() {
          clearError();
          loaded = false;
          controls.load.style.display = "none";
          infoDisplay.load.box.style.display = "inline";
          init();
        }
        function loadScene2(sceneId, targetPitch, targetYaw, targetHfov, fadeDone) {
          if (!loaded) fadeDone = true;
          loaded = false;
          animatedMove = {};
          var fadeImg, workingPitch, workingYaw, workingHfov;
          if (config.sceneFadeDuration && !fadeDone) {
            var data = renderer.render(config.pitch * Math.PI / 180, config.yaw * Math.PI / 180, config.hfov * Math.PI / 180, {
              returnImage: true
            });
            if (data !== undefined$1) {
              fadeImg = new Image();
              fadeImg.className = "pnlm-fade-img";
              fadeImg.style.transition = "opacity " + config.sceneFadeDuration / 1e3 + "s";
              fadeImg.style.width = "100%";
              fadeImg.style.height = "100%";
              fadeImg.onload = function() {
                loadScene2(sceneId, targetPitch, targetYaw, targetHfov, true);
              };
              fadeImg.src = data;
              renderContainer.appendChild(fadeImg);
              renderer.fadeImg = fadeImg;
              return;
            }
          }
          if (targetPitch === "same") {
            workingPitch = config.pitch;
          } else {
            workingPitch = targetPitch;
          }
          if (targetYaw === "same") {
            workingYaw = config.yaw;
          } else if (targetYaw === "sameAzimuth") {
            workingYaw = config.yaw + (config.northOffset || 0) - (initialConfig.scenes[sceneId].northOffset || 0);
          } else {
            workingYaw = targetYaw;
          }
          if (targetHfov === "same") {
            workingHfov = config.hfov;
          } else {
            workingHfov = targetHfov;
          }
          destroyHotSpots();
          mergeConfig(sceneId);
          speed.yaw = speed.pitch = speed.hfov = 0;
          processOptions();
          if (workingPitch !== undefined$1) {
            config.pitch = workingPitch;
          }
          if (workingYaw !== undefined$1) {
            config.yaw = workingYaw;
          }
          if (workingHfov !== undefined$1) {
            config.hfov = workingHfov;
          }
          fireEvent("scenechange", sceneId);
          load();
        }
        function stopOrientation2() {
          window2.removeEventListener("deviceorientation", orientationListener);
          controls.orientation.classList.remove("pnlm-orientation-button-active");
          orientation = false;
        }
        function startOrientation2() {
          orientation = 1;
          if (DeviceOrientationEvent && typeof DeviceOrientationEvent.requestPermission === "function") {
            DeviceOrientationEvent.requestPermission().then(function(response) {
              if (response === "granted") {
                window2.addEventListener("deviceorientation", orientationListener);
              }
            })["catch"](console.error);
          } else {
            window2.addEventListener("deviceorientation", orientationListener);
          }
          controls.orientation.classList.add("pnlm-orientation-button-active");
        }
        function escapeHTML(s) {
          if (!initialConfig.escapeHTML) return String(s).split("\n").join("<br>");
          return String(s).split(/&/g).join("&amp;").split('"').join("&quot;").split("'").join("&#39;").split("<").join("&lt;").split(">").join("&gt;").split("/").join("&#x2f;").split("\n").join("<br>");
        }
        function sanitizeURL(url) {
          if (url.trim().toLowerCase().indexOf("javascript:") === 0) {
            return "about:blank";
          }
          return url;
        }
        function sanitizeURLForCss(url) {
          return sanitizeURL(url).replace(/"/g, "%22").replace(/'/g, "%27");
        }
        this.isLoaded = function() {
          return Boolean(loaded);
        };
        this.getPitch = function() {
          return config.pitch;
        };
        this.setPitch = function(pitch, animated, callback, callbackArgs) {
          latestInteraction = Date.now();
          if (Math.abs(pitch - config.pitch) <= eps) {
            if (typeof callback === "function") callback(callbackArgs);
            return this;
          }
          animated = animated === undefined$1 ? 1e3 : Number(animated);
          if (animated) {
            animatedMove.pitch = {
              startTime: Date.now(),
              startPosition: config.pitch,
              endPosition: pitch,
              duration: animated
            };
            if (typeof callback === "function") setTimeout(function() {
              callback(callbackArgs);
            }, animated);
          } else {
            config.pitch = pitch;
          }
          animateInit();
          return this;
        };
        this.getPitchBounds = function() {
          return [config.minPitch, config.maxPitch];
        };
        this.setPitchBounds = function(bounds) {
          config.minPitch = Math.max(-90, Math.min(bounds[0], 90));
          config.maxPitch = Math.max(-90, Math.min(bounds[1], 90));
          return this;
        };
        this.getYaw = function() {
          return config.yaw;
        };
        this.setYaw = function(yaw, animated, callback, callbackArgs) {
          latestInteraction = Date.now();
          if (Math.abs(yaw - config.yaw) <= eps) {
            if (typeof callback === "function") callback(callbackArgs);
            return this;
          }
          animated = animated === undefined$1 ? 1e3 : Number(animated);
          yaw = (yaw + 180) % 360 - 180;
          if (animated) {
            if (config.yaw - yaw > 180) yaw += 360;
            else if (yaw - config.yaw > 180) yaw -= 360;
            animatedMove.yaw = {
              startTime: Date.now(),
              startPosition: config.yaw,
              endPosition: yaw,
              duration: animated
            };
            if (typeof callback === "function") setTimeout(function() {
              callback(callbackArgs);
            }, animated);
          } else {
            config.yaw = yaw;
          }
          animateInit();
          return this;
        };
        this.getYawBounds = function() {
          return [config.minYaw, config.maxYaw];
        };
        this.setYawBounds = function(bounds) {
          config.minYaw = Math.max(-180, Math.min(bounds[0], 180));
          config.maxYaw = Math.max(-180, Math.min(bounds[1], 180));
          return this;
        };
        this.getHfov = function() {
          return config.hfov;
        };
        this.setHfov = function(hfov, animated, callback, callbackArgs) {
          latestInteraction = Date.now();
          if (Math.abs(hfov - config.hfov) <= eps) {
            if (typeof callback === "function") callback(callbackArgs);
            return this;
          }
          animated = animated === undefined$1 ? 1e3 : Number(animated);
          if (animated) {
            animatedMove.hfov = {
              startTime: Date.now(),
              startPosition: config.hfov,
              endPosition: constrainHfov(hfov),
              duration: animated
            };
            if (typeof callback === "function") setTimeout(function() {
              callback(callbackArgs);
            }, animated);
          } else {
            setHfov2(hfov);
          }
          animateInit();
          return this;
        };
        this.getHfovBounds = function() {
          return [config.minHfov, config.maxHfov];
        };
        this.setHfovBounds = function(bounds) {
          config.minHfov = Math.max(0, bounds[0]);
          config.maxHfov = Math.max(0, bounds[1]);
          return this;
        };
        this.lookAt = function(pitch, yaw, hfov, animated, callback, callbackArgs) {
          animated = animated === undefined$1 ? 1e3 : Number(animated);
          if (pitch !== undefined$1 && Math.abs(pitch - config.pitch) > eps) {
            this.setPitch(pitch, animated, callback, callbackArgs);
            callback = undefined$1;
          }
          if (yaw !== undefined$1 && Math.abs(yaw - config.yaw) > eps) {
            this.setYaw(yaw, animated, callback, callbackArgs);
            callback = undefined$1;
          }
          if (hfov !== undefined$1 && Math.abs(hfov - config.hfov) > eps) {
            this.setHfov(hfov, animated, callback, callbackArgs);
            callback = undefined$1;
          }
          if (typeof callback === "function") callback(callbackArgs);
          return this;
        };
        this.getNorthOffset = function() {
          return config.northOffset;
        };
        this.setNorthOffset = function(heading) {
          config.northOffset = Math.min(360, Math.max(0, heading));
          animateInit();
          return this;
        };
        this.getHorizonRoll = function() {
          return config.horizonRoll;
        };
        this.setHorizonRoll = function(roll) {
          config.horizonRoll = Math.min(90, Math.max(-90, roll));
          renderer.setPose(config.horizonPitch * Math.PI / 180, config.horizonRoll * Math.PI / 180);
          animateInit();
          return this;
        };
        this.getHorizonPitch = function() {
          return config.horizonPitch;
        };
        this.setHorizonPitch = function(pitch) {
          config.horizonPitch = Math.min(90, Math.max(-90, pitch));
          renderer.setPose(config.horizonPitch * Math.PI / 180, config.horizonRoll * Math.PI / 180);
          animateInit();
          return this;
        };
        this.startAutoRotate = function(speed2, pitch) {
          speed2 = speed2 || autoRotateSpeed || 1;
          pitch = pitch === undefined$1 ? origPitch : pitch;
          config.autoRotate = speed2;
          _this.lookAt(pitch, undefined$1, origHfov, 3e3);
          animateInit();
          return this;
        };
        this.stopAutoRotate = function() {
          autoRotateSpeed = config.autoRotate ? config.autoRotate : autoRotateSpeed;
          config.autoRotate = false;
          config.autoRotateInactivityDelay = -1;
          return this;
        };
        this.stopMovement = function() {
          stopAnimation();
          speed = {
            yaw: 0,
            pitch: 0,
            hfov: 0
          };
        };
        this.getRenderer = function() {
          return renderer;
        };
        this.setUpdate = function(bool) {
          update = bool === true;
          if (renderer === undefined$1) onImageLoad();
          else animateInit();
          return this;
        };
        this.mouseEventToCoords = function(event2) {
          return mouseEventToCoords2(event2);
        };
        this.loadScene = function(sceneId, pitch, yaw, hfov) {
          if (loaded !== false) loadScene2(sceneId, pitch, yaw, hfov);
          return this;
        };
        this.getScene = function() {
          return config.scene;
        };
        this.getAllScenes = function() {
          var allScenes = [];
          Object.keys(initialConfig.scenes).forEach(function(scene) {
            allScenes.push(_defineProperty({}, scene, initialConfig.scenes[scene]));
          });
          return allScenes;
        };
        this.addScene = function(sceneId, config2) {
          initialConfig.scenes[sceneId] = config2;
          return this;
        };
        this.removeScene = function(sceneId) {
          if (config.scene === sceneId || !initialConfig.scenes.hasOwnProperty(sceneId)) return false;
          delete initialConfig.scenes[sceneId];
          return true;
        };
        this.toggleFullscreen = function() {
          toggleFullscreen2();
          return this;
        };
        this.getConfig = function() {
          return config;
        };
        this.getContainer = function() {
          return container;
        };
        this.addHotSpot = function(hs, sceneId) {
          if (sceneId === undefined$1 && config.scene === undefined$1) {
            config.hotSpots.push(hs);
          } else {
            var id = sceneId !== undefined$1 ? sceneId : config.scene;
            if (initialConfig.scenes.hasOwnProperty(id)) {
              if (!initialConfig.scenes[id].hasOwnProperty("hotSpots")) {
                initialConfig.scenes[id].hotSpots = [];
                if (id === config.scene) config.hotSpots = initialConfig.scenes[id].hotSpots;
              }
              initialConfig.scenes[id].hotSpots.push(hs);
            } else {
              throw "Invalid scene ID!";
            }
          }
          if (sceneId === undefined$1 || config.scene === sceneId) {
            createHotSpot(hs);
            if (loaded) renderHotSpot(hs);
          }
          return this;
        };
        this.removeHotSpot = function(hotSpotId, sceneId) {
          if (sceneId === undefined$1 || config.scene === sceneId) {
            if (!config.hotSpots) return false;
            for (var i = 0; i < config.hotSpots.length; i++) {
              if (config.hotSpots[i].hasOwnProperty("id") && config.hotSpots[i].id === hotSpotId) {
                var current = config.hotSpots[i].div;
                while (current.parentNode != renderContainer) {
                  current = current.parentNode;
                }
                renderContainer.removeChild(current);
                delete config.hotSpots[i].div;
                config.hotSpots.splice(i, 1);
                return true;
              }
            }
          } else {
            if (initialConfig.scenes.hasOwnProperty(sceneId)) {
              if (!initialConfig.scenes[sceneId].hasOwnProperty("hotSpots")) return false;
              for (var j = 0; j < initialConfig.scenes[sceneId].hotSpots.length; j++) {
                if (initialConfig.scenes[sceneId].hotSpots[j].hasOwnProperty("id") && initialConfig.scenes[sceneId].hotSpots[j].id === hotSpotId) {
                  initialConfig.scenes[sceneId].hotSpots.splice(j, 1);
                  return true;
                }
              }
            } else {
              return false;
            }
          }
        };
        this.resize = function() {
          if (renderer) onDocumentResize();
        };
        this.isLoaded = function() {
          return loaded;
        };
        this.isOrientationSupported = function() {
          return orientationSupport || false;
        };
        this.stopOrientation = function() {
          stopOrientation2();
        };
        this.startOrientation = function() {
          if (orientationSupport) startOrientation2();
        };
        this.isOrientationActive = function() {
          return Boolean(orientation);
        };
        this.on = function(type, listener) {
          externalEventListeners[type] = externalEventListeners[type] || [];
          externalEventListeners[type].push(listener);
          return this;
        };
        this.off = function(type, listener) {
          if (!type) {
            externalEventListeners = {};
            return this;
          }
          if (listener) {
            var i = externalEventListeners[type].indexOf(listener);
            if (i >= 0) {
              externalEventListeners[type].splice(i, 1);
            }
            if (externalEventListeners[type].length === 0) {
              delete externalEventListeners[type];
            }
          } else {
            delete externalEventListeners[type];
          }
          return this;
        };
        function fireEvent(type) {
          if (type in externalEventListeners) {
            for (var i = externalEventListeners[type].length; i > 0; i--) {
              externalEventListeners[type][externalEventListeners[type].length - i].apply(null, [].slice.call(arguments, 1));
            }
          }
        }
        this.destroy = function() {
          destroyed = true;
          clearTimeout(autoRotateStart);
          if (renderer) renderer.destroy();
          if (listenersAdded) {
            document2.removeEventListener("mousemove", onDocumentMouseMove, false);
            document2.removeEventListener("mouseup", onDocumentMouseUp, false);
            container.removeEventListener("mozfullscreenchange", onFullScreenChange, false);
            container.removeEventListener("webkitfullscreenchange", onFullScreenChange, false);
            container.removeEventListener("msfullscreenchange", onFullScreenChange, false);
            container.removeEventListener("fullscreenchange", onFullScreenChange, false);
            window2.removeEventListener("resize", onDocumentResize, false);
            window2.removeEventListener("orientationchange", onDocumentResize, false);
            container.removeEventListener("keydown", onDocumentKeyPress, false);
            container.removeEventListener("keyup", onDocumentKeyUp, false);
            container.removeEventListener("blur", clearKeys, false);
            document2.removeEventListener("mouseleave", onDocumentMouseUp, false);
          }
          container.innerHTML = "";
          container.classList.remove("pnlm-container");
        };
      }
      return {
        viewer: function viewer(container, config) {
          return new Viewer(container, config);
        }
      };
    }(typeof window === "undefined" ? null : window, typeof document === "undefined" ? null : document);
    var myPromise = function myPromise2(condition) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      var promise = new Promise(function(resolve, reject) {
        if (condition) {
          if (args !== []) {
            resolve.apply(void 0, args);
          } else {
            reject("Argruments cannot be empty");
          }
        } else {
          reject("Something when wrong!!!");
        }
      });
      return promise;
    };
    var configs = {
      uiText: {
        loadButtonLabel: "Click to<br>Load<br>Panorama",
        loadingLabel: "Loading...",
        bylineLabel: "by %s",
        noPanoramaError: "No panorama image was specified.",
        fileAccessError: "The file %s could not be accessed.",
        malformedURLError: "There is something wrong with the panorama URL.",
        iOS8WebGLError: "Due to iOS 8's broken WebGL implementation, only progressive encoded JPEGs work for your device (this panorama uses standard encoding).",
        genericWebGLError: "Your browser does not have the necessary WebGL support to display this panorama.",
        textureSizeError: "This panorama is too big for your device! It's %spx wide, but your device only supports images up to %spx wide. Try another device. (If you're the author, try scaling down the image.)",
        unknownError: "Unknown error. Check developer console."
      },
      styles: {
        width: "600px",
        height: "400px",
        background: "#000000"
      },
      equirectangularOptions: {
        haov: 360,
        vaov: 180,
        vOffset: 0,
        ignoreGPanoXMP: false
      },
      panoramaConfigs: {
        autoLoad: false,
        autoRotate: 0,
        autoRotateInactivityDelay: 0,
        autoRotateStopDelay: 0,
        preview: "",
        showZoomCtrl: true,
        keyboardZoom: true,
        mouseZoom: true,
        doubleClickZoom: false,
        draggable: true,
        friction: 0.15,
        disableKeyboardCtrl: false,
        showFullscreenCtrl: true,
        showControls: true,
        touchPanSpeedCoeffFactor: 1,
        yaw: 0,
        pitch: 0,
        maxPitch: 90,
        minPitch: -90,
        maxYaw: 180,
        minYaw: -180,
        hfov: 100,
        minHfov: 50,
        maxHfov: 120,
        multiResMinHfov: false,
        backgroundColor: [0, 0, 0],
        avoidShowingBackground: false,
        compass: false,
        northOffset: 0,
        hotSpots: [],
        hotSpotDebug: false
      }
    };
    function styleInject(css, ref) {
      if (ref === void 0) ref = {};
      var insertAt = ref.insertAt;
      if (!css || typeof document === "undefined") {
        return;
      }
      var head = document.head || document.getElementsByTagName("head")[0];
      var style = document.createElement("style");
      style.type = "text/css";
      if (insertAt === "top") {
        if (head.firstChild) {
          head.insertBefore(style, head.firstChild);
        } else {
          head.appendChild(style);
        }
      } else {
        head.appendChild(style);
      }
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
    }
    var css_248z = `/* Pannellum 2.4.1, https://github.com/mpetroff/pannellum */\r
\r
.pnlm-container {\r
  margin: 0;\r
  padding: 0;\r
  overflow: hidden;\r
  position: relative;\r
  cursor: default;\r
  width: 100%;\r
  height: 100%;\r
  font-family: Helvetica, "Nimbus Sans L", "Liberation Sans", Arial, sans-serif;\r
  background: #f4f4f4 url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2267%22%20height%3D%22100%22%20viewBox%3D%220%200%2067%20100%22%3E%0A%3Cpath%20stroke%3D%22%23ccc%22%20fill%3D%22none%22%20d%3D%22M33.5%2C50%2C0%2C63%2C33.5%2C75%2C67%2C63%2C33.5%2C50m-33.5-50%2C67%2C25m-0.5%2C0%2C0%2C75m-66.5-75%2C67-25m-33.5%2C75%2C0%2C25m0-100%2C0%2C50%22%2F%3E%0A%3C%2Fsvg%3E%0A') repeat;\r
  -webkit-user-select: none;\r
  -khtml-user-select: none;\r
  -moz-user-select: none;\r
  -o-user-select: none;\r
  -ms-user-select: none;\r
  user-select: none;\r
  outline: 0;\r
  line-height: 1.4;\r
  contain: content;\r
}\r
\r
.pnlm-container * {\r
  box-sizing: content-box;\r
}\r
\r
.pnlm-ui {\r
  position: absolute;\r
  width: 100%;\r
  height: 100%;\r
  z-index: 1;\r
}\r
\r
.pnlm-grab {\r
  cursor: grab;\r
  cursor: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2226%22%20width%3D%2226%22%3E%0A%3Cpath%20stroke%3D%22%23000%22%20stroke-width%3D%221px%22%20fill%3D%22%23fff%22%20d%3D%22m15.3%2020.5s6.38-6.73%204.64-8.24-3.47%201.01-3.47%201.01%203.61-5.72%201.41-6.49c-2.2-0.769-3.33%204.36-3.33%204.36s0.873-5.76-1.06-5.76-1.58%205.39-1.58%205.39-0.574-4.59-2.18-4.12c-1.61%200.468-0.572%205.51-0.572%205.51s-1.58-4.89-2.93-3.79c-1.35%201.11%200.258%205.25%200.572%206.62%200.836%202.43%202.03%202.94%202.17%205.55%22%2F%3E%0A%3C%2Fsvg%3E%0A') 12 8, default\r
}\r
\r
.pnlm-grabbing {\r
  cursor: grabbing;\r
  cursor: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2226%22%20width%3D%2226%22%3E%0A%3Cpath%20stroke%3D%22%23000%22%20stroke-width%3D%221px%22%20fill%3D%22%23fff%22%20d%3D%22m15.3%2020.5s5.07-5.29%203.77-6.74c-1.31-1.45-2.53%200.14-2.53%200.14s2.74-3.29%200.535-4.06c-2.2-0.769-2.52%201.3-2.52%201.3s0.81-2.13-1.12-2.13-1.52%201.77-1.52%201.77-0.261-1.59-1.87-1.12c-1.61%200.468-0.874%202.17-0.874%202.17s-0.651-1.55-2-0.445c-1.35%201.11-0.68%202.25-0.365%203.62%200.836%202.43%202.03%202.94%202.17%205.55%22%2F%3E%0A%3C%2Fsvg%3E%0A') 12 8, default\r
}\r
\r
.pnlm-sprite {\r
  background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2226%22%20height%3D%22208%22%3E%0A%3Ccircle%20fill-opacity%3D%22.78%22%20cy%3D%22117%22%20cx%3D%2213%22%20r%3D%2211%22%20fill%3D%22%23fff%22%2F%3E%0A%3Ccircle%20fill-opacity%3D%22.78%22%20cy%3D%22143%22%20cx%3D%2213%22%20r%3D%2211%22%20fill%3D%22%23fff%22%2F%3E%0A%3Ccircle%20cy%3D%22169%22%20cx%3D%2213%22%20r%3D%227%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%222%22%2F%3E%0A%3Ccircle%20cy%3D%22195%22%20cx%3D%2213%22%20r%3D%227%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-width%3D%222%22%2F%3E%0A%3Ccircle%20cx%3D%2213%22%20cy%3D%22195%22%20r%3D%222.5%22%2F%3E%0A%3Cpath%20d%3D%22m5%2083v6h2v-4h4v-2zm10%200v2h4v4h2v-6zm-5%205v6h6v-6zm-5%205v6h6v-2h-4v-4zm14%200v4h-4v2h6v-6z%22%2F%3E%0A%3Cpath%20d%3D%22m13%20110a7%207%200%200%200%20-7%207%207%207%200%200%200%207%207%207%207%200%200%200%207%20-7%207%207%200%200%200%20-7%20-7zm-1%203h2v2h-2zm0%203h2v5h-2z%22%2F%3E%0A%3Cpath%20d%3D%22m5%2057v6h2v-4h4v-2zm10%200v2h4v4h2v-6zm-10%2010v6h6v-2h-4v-4zm14%200v4h-4v2h6v-6z%22%2F%3E%0A%3Cpath%20d%3D%22m17%2038v2h-8v-2z%22%2F%3E%0A%3Cpath%20d%3D%22m12%209v3h-3v2h3v3h2v-3h3v-2h-3v-3z%22%2F%3E%0A%3Cpath%20d%3D%22m13%20136-6.125%206.125h4.375v7.875h3.5v-7.875h4.375z%22%2F%3E%0A%3Cpath%20d%3D%22m10.428%20173.33v-5.77l5-2.89v5.77zm1-1.73%203-1.73-3.001-1.74z%22%2F%3E%0A%3C%2Fsvg%3E%0A')\r
}\r
\r
.pnlm-container:-moz-full-screen {\r
  height: 100% !important;\r
  width: 100% !important;\r
  position: static !important;\r
}\r
\r
.pnlm-container:-webkit-full-screen {\r
  height: 100% !important;\r
  width: 100% !important;\r
  position: static !important;\r
}\r
\r
.pnlm-container:-ms-fullscreen {\r
  height: 100% !important;\r
  width: 100% !important;\r
  position: static !important;\r
}\r
\r
.pnlm-container:fullscreen {\r
  height: 100% !important;\r
  width: 100% !important;\r
  position: static !important;\r
}\r
\r
.pnlm-render-container {\r
  cursor: inherit;\r
\r
  /* Fix display bug in Safari 7 */\r
  position: absolute;\r
  height: 100%;\r
  width: 100%;\r
}\r
\r
.pnlm-controls {\r
  margin-top: 4px;\r
  background-color: #fff;\r
  border: 1px solid #999;\r
  border-color: rgba(0, 0, 0, 0.4);\r
  border-radius: 3px;\r
  cursor: pointer;\r
  z-index: 2;\r
  /* Fix Safari fullscreen bug */\r
  -webkit-transform: translateZ(9999px);\r
  transform: translateZ(9999px);\r
}\r
\r
.pnlm-control:hover {\r
  background-color: #f8f8f8;\r
}\r
\r
.pnlm-controls-container {\r
  position: absolute;\r
  top: 0;\r
  left: 4px;\r
  z-index: 1;\r
}\r
\r
.pnlm-zoom-controls {\r
  width: 26px;\r
  height: 52px;\r
}\r
\r
.pnlm-zoom-in {\r
  width: 100%;\r
  height: 50%;\r
  position: absolute;\r
  top: 0;\r
  border-radius: 3px 3px 0 0;\r
}\r
\r
.pnlm-zoom-out {\r
  width: 100%;\r
  height: 50%;\r
  position: absolute;\r
  bottom: 0;\r
  background-position: 0 -26px;\r
  border-top: 1px solid #ddd;\r
  border-top-color: rgba(0, 0, 0, 0.10);\r
  border-radius: 0 0 3px 3px;\r
}\r
\r
.pnlm-fullscreen-toggle-button,\r
.pnlm-orientation-button,\r
.pnlm-hot-spot-debug-indicator {\r
  width: 26px;\r
  height: 26px;\r
}\r
\r
.pnlm-hot-spot-debug-indicator {\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  width: 26px;\r
  height: 26px;\r
  margin: -13px 0 0 -13px;\r
  background-color: rgba(255, 255, 255, 0.5);\r
  border-radius: 13px;\r
  display: none;\r
}\r
\r
.pnlm-orientation-button-inactive {\r
  background-position: 0 -156px;\r
}\r
\r
.pnlm-orientation-button-active {\r
  background-position: 0 -182px;\r
}\r
\r
.pnlm-fullscreen-toggle-button-inactive {\r
  background-position: 0 -52px;\r
}\r
\r
.pnlm-fullscreen-toggle-button-active {\r
  background-position: 0 -78px;\r
}\r
\r
.pnlm-panorama-info {\r
  position: absolute;\r
  bottom: 4px;\r
  background-color: rgba(0, 0, 0, 0.7);\r
  border-radius: 0 3px 3px 0;\r
  padding-right: 10px;\r
  color: #fff;\r
  text-align: left;\r
  display: none;\r
  z-index: 2;\r
  /* Fix Safari fullscreen bug */\r
  -webkit-transform: translateZ(9999px);\r
  transform: translateZ(9999px);\r
}\r
\r
.pnlm-title-box {\r
  position: relative;\r
  font-size: 20px;\r
  display: table;\r
  padding-left: 5px;\r
  margin-bottom: 3px;\r
}\r
\r
.pnlm-description-box {\r
  position: relative;\r
  font-size: 18px;\r
  display: table;\r
  padding-left: 5px;\r
  margin-bottom: 3px;\r
}\r
\r
.pnlm-author-box {\r
  position: relative;\r
  font-size: 12px;\r
  display: table;\r
  padding-left: 5px;\r
}\r
\r
.pnlm-load-box {\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  width: 200px;\r
  height: 150px;\r
  margin: -75px 0 0 -100px;\r
  background-color: rgba(0, 0, 0, 0.7);\r
  border-radius: 3px;\r
  text-align: center;\r
  font-size: 20px;\r
  display: none;\r
  color: #fff;\r
}\r
\r
.pnlm-load-box p {\r
  margin: 20px 0;\r
}\r
\r
.pnlm-lbox {\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  width: 20px;\r
  height: 20px;\r
  margin: -10px 0 0 -10px;\r
  display: none;\r
}\r
\r
.pnlm-loading {\r
  animation-duration: 1.5s;\r
  -webkit-animation-duration: 1.5s;\r
  animation-name: pnlm-mv;\r
  -webkit-animation-name: pnlm-mv;\r
  animation-iteration-count: infinite;\r
  -webkit-animation-iteration-count: infinite;\r
  animation-timing-function: linear;\r
  -webkit-animation-timing-function: linear;\r
  height: 10px;\r
  width: 10px;\r
  background-color: #fff;\r
  position: relative;\r
}\r
\r
@keyframes pnlm-mv {\r
  from {\r
    left: 0;\r
    top: 0;\r
  }\r
\r
  25% {\r
    left: 10px;\r
    top: 0;\r
  }\r
\r
  50% {\r
    left: 10px;\r
    top: 10px;\r
  }\r
\r
  75% {\r
    left: 0;\r
    top: 10px;\r
  }\r
\r
  to {\r
    left: 0;\r
    top: 0;\r
  }\r
}\r
\r
@-webkit-keyframes pnlm-mv {\r
  from {\r
    left: 0;\r
    top: 0;\r
  }\r
\r
  25% {\r
    left: 10px;\r
    top: 0;\r
  }\r
\r
  50% {\r
    left: 10px;\r
    top: 10px;\r
  }\r
\r
  75% {\r
    left: 0;\r
    top: 10px;\r
  }\r
\r
  to {\r
    left: 0;\r
    top: 0;\r
  }\r
}\r
\r
.pnlm-load-button {\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  width: 200px;\r
  height: 100px;\r
  margin: -50px 0 0 -100px;\r
  background-color: rgba(0, 0, 0, .7);\r
  border-radius: 3px;\r
  text-align: center;\r
  font-size: 20px;\r
  display: table;\r
  color: #fff;\r
  cursor: pointer;\r
}\r
\r
.pnlm-load-button:hover {\r
  background-color: rgba(0, 0, 0, .8);\r
}\r
\r
.pnlm-load-button p {\r
  display: table-cell;\r
  vertical-align: middle;\r
}\r
\r
.pnlm-info-box {\r
  font-size: 15px;\r
  position: absolute;\r
  top: 50%;\r
  left: 50%;\r
  width: 200px;\r
  height: 150px;\r
  margin: -75px 0 0 -100px;\r
  background-color: #000;\r
  border-radius: 3px;\r
  display: table;\r
  text-align: center;\r
  color: #fff;\r
  table-layout: fixed;\r
}\r
\r
.pnlm-info-box a,\r
.pnlm-author-box a {\r
  color: #fff;\r
  word-wrap: break-word;\r
  overflow-wrap: break-word;\r
}\r
\r
.pnlm-info-box p {\r
  display: table-cell;\r
  vertical-align: middle;\r
  padding: 0 5px 0 5px;\r
}\r
\r
.pnlm-error-msg {\r
  display: none;\r
}\r
\r
.pnlm-about-msg {\r
  font-size: 11px;\r
  line-height: 11px;\r
  color: #fff;\r
  padding: 5px 8px 5px 8px;\r
  background: rgba(0, 0, 0, 0.7);\r
  border-radius: 3px;\r
  position: absolute;\r
  top: 50px;\r
  left: 50px;\r
  display: none;\r
  opacity: 0;\r
  -moz-transition: opacity .3s ease-in-out;\r
  -webkit-transition: opacity .3s ease-in-out;\r
  -o-transition: opacity .3s ease-in-out;\r
  -ms-transition: opacity .3s ease-in-out;\r
  transition: opacity .3s ease-in-out;\r
  z-index: 1;\r
}\r
\r
.pnlm-about-msg a:link,\r
.pnlm-about-msg a:visited {\r
  color: #fff;\r
}\r
\r
.pnlm-about-msg a:hover,\r
.pnlm-about-msg a:active {\r
  color: #eee;\r
}\r
\r
.pnlm-hotspot-base {\r
  position: absolute;\r
  visibility: hidden;\r
  cursor: default;\r
  vertical-align: middle;\r
  top: 0;\r
  z-index: 1;\r
}\r
\r
.pnlm-hotspot {\r
  height: 26px;\r
  width: 26px;\r
  border-radius: 13px;\r
}\r
\r
.pnlm-hotspot:hover {\r
  background-color: rgba(255, 255, 255, 0.2);\r
}\r
\r
.pnlm-hotspot.pnlm-info {\r
  background-position: 0 -104px;\r
}\r
\r
.pnlm-hotspot.pnlm-scene {\r
  background-position: 0 -130px;\r
}\r
\r
div.pnlm-tooltip span {\r
  visibility: hidden;\r
  position: absolute;\r
  border-radius: 3px;\r
  background-color: rgba(0, 0, 0, 0.7);\r
  color: #fff;\r
  text-align: center;\r
  max-width: 200px;\r
  padding: 5px 10px;\r
  margin-left: -220px;\r
  cursor: default;\r
}\r
\r
div.pnlm-tooltip:hover span {\r
  visibility: visible;\r
}\r
\r
div.pnlm-tooltip:hover span:after {\r
  content: '';\r
  position: absolute;\r
  width: 0;\r
  height: 0;\r
  border-width: 10px;\r
  border-style: solid;\r
  border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;\r
  bottom: -20px;\r
  left: -10px;\r
  margin: 0 50%;\r
}\r
\r
.pnlm-compass {\r
  position: absolute;\r
  width: 50px;\r
  height: 50px;\r
  right: 4px;\r
  bottom: 4px;\r
  border-radius: 25px;\r
  background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20height%3D%2250%22%20width%3D%2250%22%3E%0A%3Cpath%20d%3D%22m24.5078%206-3.2578%2018h7.5l-3.25781-18h-0.984376zm-3.2578%2020%203.2578%2018h0.9844l3.2578-18h-7.5zm1.19531%200.9941h5.10938l-2.5547%2014.1075-2.5547-14.1075z%22%2F%3E%0A%3C%2Fsvg%3E%0A');\r
  cursor: default;\r
  display: none;\r
}\r
\r
.pnlm-world {\r
  position: absolute;\r
  left: 50%;\r
  top: 50%;\r
}\r
\r
.pnlm-face {\r
  position: absolute;\r
  -webkit-transform-origin: 0 0 0;\r
  transform-origin: 0 0 0;\r
}\r
\r
.pnlm-dragfix,\r
.pnlm-preview-img {\r
  position: absolute;\r
  height: 100%;\r
  width: 100%;\r
}\r
\r
.pnlm-preview-img {\r
  background-size: cover;\r
  background-position: center;\r
}\r
\r
.pnlm-lbar {\r
  width: 150px;\r
  margin: 0 auto;\r
  border: #fff 1px solid;\r
  height: 6px;\r
}\r
\r
.pnlm-lbar-fill {\r
  background: #fff;\r
  height: 100%;\r
  width: 0;\r
}\r
\r
.pnlm-lmsg {\r
  font-size: 12px;\r
}\r
\r
.pnlm-fade-img {\r
  position: absolute;\r
  top: 0;\r
  left: 0;\r
}\r
\r
.pnlm-pointer {\r
  cursor: pointer;\r
}\r
`;
    styleInject(css_248z);
    var myPannellum = null;
    var myViewers = [];
    var ReactPannellum = function(_React$Component) {
      _inherits(ReactPannellum2, _React$Component);
      var _super = _createSuper(ReactPannellum2);
      function ReactPannellum2() {
        var _this;
        _classCallCheck(this, ReactPannellum2);
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _this = _super.call.apply(_super, [this].concat(args));
        _this.state = {
          imageSource: "",
          equirectangularOptions: {},
          cubeMap: [],
          multiRes: {}
        };
        _this.init = function() {
          var _this$state = _this.state, imageSource = _this$state.imageSource, equirectangularOptions = _this$state.equirectangularOptions, cubeMap = _this$state.cubeMap, multiRes = _this$state.multiRes;
          var _this$props = _this.props, sceneId = _this$props.sceneId, config = _this$props.config, type = _this$props.type;
          myPannellum = pannellum.viewer(_this.props.id, {
            "default": {
              firstScene: sceneId
            },
            scenes: _defineProperty({}, sceneId, JSON.parse(JSON.stringify(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, configs.panoramaConfigs), configs.equirectangularOptions), configs.uiText), config), {}, {
              type,
              imageSource
            }, equirectangularOptions), {}, {
              cubeMap,
              multiRes
            }))))
          });
          myViewers.push(myPannellum);
          _this.props.onPanoramaLoaded && myPannellum.on("load", function() {
            return _this.props.onPanoramaLoaded();
          });
          _this.props.onPanoramaMouseDown && myPannellum.on("mousedown", function(event2) {
            return _this.props.onPanoramaMouseDown(event2);
          });
          _this.props.onPanoramaMouseUp && myPannellum.on("mouseup", function(event2) {
            return _this.props.onPanoramaMouseUp(event2);
          });
        };
        return _this;
      }
      _createClass(ReactPannellum2, [{
        key: "initPanalleum",
        value: function initPanalleum() {
          var _this2 = this;
          var _this$props2 = this.props, imageSource = _this$props2.imageSource, type = _this$props2.type, cubeMap = _this$props2.cubeMap, multiRes = _this$props2.multiRes, equirectangularOptions = _this$props2.equirectangularOptions;
          switch (type) {
            case "equirectangular":
              this.setState({
                imageSource,
                equirectangularOptions,
                cubeMap: []
              }, function() {
                return _this2.init();
              });
              break;
            case "cubemap":
              this.setState({
                cubeMap,
                imageSource: ""
              }, function() {
                return _this2.init();
              });
              break;
            case "multires":
              this.setState({
                cubeMap: [],
                imageSource: "",
                multiRes
              }, function() {
                return _this2.init();
              });
              break;
          }
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this.initPanalleum();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          var _this3 = this;
          if (myPannellum) {
            this.props.onPanoramaLoaded && myPannellum.off("load", this.props.onPanoramaLoaded);
            this.props.onPanoramaMouseDown && myPannellum.off("mousedown", function() {
              return _this3.props.onPanoramaMouseDown;
            });
            this.props.onPanoramaMouseUp && myPannellum.off("mouseup", function() {
              return _this3.props.onPanoramaMouseUp;
            });
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _this$props3 = this.props, style = _this$props3.style, className = _this$props3.className, id = _this$props3.id, children = _this$props3.children;
          return React__default["default"].createElement("div", {
            id,
            style,
            className,
            children
          });
        }
      }], [{
        key: "isLoaded",
        value: function isLoaded2() {
          return myPannellum && myPannellum.isLoaded();
        }
      }, {
        key: "getPitch",
        value: function getPitch2() {
          return myPannellum && myPannellum.getPitch();
        }
      }, {
        key: "setPitch",
        value: function setPitch2(pitch) {
          var animated = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
          var callback = arguments.length > 2 ? arguments[2] : void 0;
          var callbackArgs = arguments.length > 3 ? arguments[3] : void 0;
          if (myPannellum) {
            myPannellum.setPitch(pitch, animated, callback, callbackArgs);
          }
        }
      }, {
        key: "getPitchBounds",
        value: function getPitchBounds2() {
          return myPannellum && myPannellum.getPitchBounds();
        }
      }, {
        key: "setPitchBounds",
        value: function setPitchBounds2(bounds) {
          if (myPannellum) {
            myPannellum.setPitchBounds(bounds);
          }
        }
      }, {
        key: "getYaw",
        value: function getYaw2() {
          return myPannellum && myPannellum.getYaw();
        }
      }, {
        key: "setYaw",
        value: function setYaw2(yaw) {
          var animated = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
          var callback = arguments.length > 2 ? arguments[2] : void 0;
          var callbackArgs = arguments.length > 3 ? arguments[3] : void 0;
          if (myPannellum) {
            myPannellum.setYaw(yaw, animated, callback, callbackArgs);
          }
        }
      }, {
        key: "getYawBounds",
        value: function getYawBounds2() {
          return myPannellum && myPannellum.getYawBounds();
        }
      }, {
        key: "setYawBounds",
        value: function setYawBounds2(bounds) {
          myPromise(myPannellum, {
            bounds
          }).then(function(_ref) {
            var bounds2 = _ref.bounds;
            myPannellum.setYawBounds(bounds2);
          })["catch"](function(err) {
            console.log(err);
          });
        }
      }, {
        key: "getHfov",
        value: function getHfov2() {
          return myPannellum && myPannellum.getHfov();
        }
      }, {
        key: "setHfov",
        value: function setHfov2(hfov) {
          var animated = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3;
          var callback = arguments.length > 2 ? arguments[2] : void 0;
          var callbackArgs = arguments.length > 3 ? arguments[3] : void 0;
          if (myPannellum) {
            myPannellum.setHfov(hfov, animated, callback, callbackArgs);
          }
        }
      }, {
        key: "getHfovBounds",
        value: function getHfovBounds2() {
          return myPannellum && myPannellum.getHfovBounds();
        }
      }, {
        key: "setHfovBounds",
        value: function setHfovBounds2(bounds) {
          myPromise(myPannellum, {
            bounds
          }).then(function(_ref2) {
            var bounds2 = _ref2.bounds;
            myPannellum.setHfovBounds(bounds2);
          })["catch"](function(err) {
            console.log(err);
          });
        }
      }, {
        key: "lookAt",
        value: function lookAt2(pitch, yaw, hfov) {
          var animated = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1e3;
          var callback = arguments.length > 4 ? arguments[4] : void 0;
          var callbackArgs = arguments.length > 5 ? arguments[5] : void 0;
          if (myPannellum) {
            myPannellum.lookAt(pitch, yaw, hfov, animated, callback, callbackArgs);
          }
        }
      }, {
        key: "getNorthOffset",
        value: function getNorthOffset2() {
          return myPannellum && myPannellum.getNorthOffset();
        }
      }, {
        key: "setNorthOffset",
        value: function setNorthOffset2(heading) {
          myPromise(myPannellum, {
            heading
          }).then(function(_ref3) {
            var heading2 = _ref3.heading;
            myPannellum.setNorthOffset(heading2);
          })["catch"](function(err) {
            console.log(err);
          });
        }
      }, {
        key: "getHorizonRoll",
        value: function getHorizonRoll2() {
          return myPannellum && myPannellum.getHorizonRoll();
        }
      }, {
        key: "setHorizonRoll",
        value: function setHorizonRoll2(roll) {
          myPromise(myPannellum, {
            roll
          }).then(function(_ref4) {
            var roll2 = _ref4.roll;
            myPannellum.setHorizonRoll(roll2);
          })["catch"](function(err) {
            console.log(err);
          });
        }
      }, {
        key: "getHorizonPitch",
        value: function getHorizonPitch2() {
          return myPannellum && myPannellum.getHorizonPitch();
        }
      }, {
        key: "setHorizonPitch",
        value: function setHorizonPitch2(pitch) {
          myPromise(myPannellum, {
            pitch
          }).then(function(_ref5) {
            var pitch2 = _ref5.pitch;
            myPannellum.setHorizonPitch(pitch2);
          })["catch"](function(err) {
            console.log(err);
          });
        }
      }, {
        key: "startAutoRotate",
        value: function startAutoRotate2(speed, pitch) {
          myPromise(myPannellum, {
            pitch
          }).then(function(_ref6) {
            var pitch2 = _ref6.pitch;
            myPannellum.startAutoRotate(speed, pitch2);
          })["catch"](function(err) {
            console.log(err);
          });
        }
      }, {
        key: "stopAutoRotate",
        value: function stopAutoRotate2() {
          if (myPannellum) {
            myPannellum.stopAutoRotate();
          }
        }
      }, {
        key: "mouseEventToCoords",
        value: function mouseEventToCoords2(event2) {
          return myPannellum && myPannellum.mouseEventToCoords(event2);
        }
      }, {
        key: "addScene",
        value: function addScene2(sceneId, config, callback) {
          if (sceneId && sceneId !== "" && config && JSON.stringify(config) !== "{}") {
            myPromise(myPannellum, {
              sceneId,
              config,
              callback
            }).then(function(_ref7) {
              var sceneId2 = _ref7.sceneId, config2 = _ref7.config, callback2 = _ref7.callback;
              myPannellum.addScene(sceneId2, config2);
              callback2 && callback2();
            })["catch"](function(err) {
              console.log(err);
            });
          } else {
            console.log("sceneId cannot be empty and config.imageSource cannot be empty!!");
          }
        }
      }, {
        key: "getCurrentScene",
        value: function getCurrentScene2() {
          return myPannellum && myPannellum.getScene();
        }
      }, {
        key: "getAllScenes",
        value: function getAllScenes2() {
          return myPannellum && myPannellum.getAllScenes();
        }
      }, {
        key: "removeScene",
        value: function removeScene2(sceneId, callback) {
          if (sceneId && sceneId !== "") {
            myPromise(myPannellum, {
              sceneId
            }).then(function(_ref8) {
              var sceneId2 = _ref8.sceneId;
              myPannellum.removeScene(sceneId2);
              callback && callback();
            })["catch"](function(err) {
              console.log(err);
            });
          } else {
            console.log("sceneId cannot be empty");
          }
        }
      }, {
        key: "loadScene",
        value: function loadScene2(sceneId, targetPitch, targetYaw, targetHfov, fadeDone) {
          if (myPannellum && sceneId && sceneId !== "") {
            myPannellum.loadScene(sceneId, targetPitch, targetYaw, targetHfov, fadeDone);
          }
        }
      }, {
        key: "toggleFullscreen",
        value: function toggleFullscreen2() {
          return myPannellum && myPannellum.toggleFullscreen();
        }
      }, {
        key: "getConfig",
        value: function getConfig2() {
          return myPannellum && myPannellum.getConfig();
        }
      }, {
        key: "getContainer",
        value: function getContainer2() {
          return myPannellum && myPannellum.getContainer();
        }
      }, {
        key: "addHotSpot",
        value: function addHotSpot2(hotspot, sceneId) {
          if (JSON.stringify(hotspot) !== "{}") {
            myPromise(myPannellum, {
              hotspot,
              sceneId
            }).then(function(_ref9) {
              var hotspot2 = _ref9.hotspot, sceneId2 = _ref9.sceneId;
              myPannellum.addHotSpot(hotspot2, sceneId2);
            })["catch"](function(err) {
              console.log(err);
            });
          } else {
            console.log("hotspot cannot be empty, please check hotspot elements needed in document: config props `hotSpots`.");
          }
        }
      }, {
        key: "removeHotSpot",
        value: function removeHotSpot2(hotSpotId, sceneId) {
          if (hotSpotId !== "") {
            myPromise(myPannellum, {
              hotSpotId,
              sceneId
            }).then(function(_ref10) {
              var hotSpotId2 = _ref10.hotSpotId, sceneId2 = _ref10.sceneId;
              myPannellum.removeHotSpot(hotSpotId2, sceneId2);
            })["catch"](function(err) {
              console.log(err);
            });
          } else {
            console.log("hotspotId cannot be empty!!");
          }
        }
      }, {
        key: "destroy",
        value: function destroy2() {
          return myPannellum && myPannellum.destroy();
        }
      }, {
        key: "stopMovement",
        value: function stopMovement2() {
          return myPannellum && myPannellum.stopMovement();
        }
      }, {
        key: "resize",
        value: function resize2() {
          return myPannellum && myPannellum.resize();
        }
      }, {
        key: "isOrientationSupported",
        value: function isOrientationSupported2() {
          return myPannellum && myPannellum.isOrientationSupported();
        }
      }, {
        key: "stopOrientation",
        value: function stopOrientation2() {
          return myPannellum && myPannellum.stopOrientation();
        }
      }, {
        key: "startOrientation",
        value: function startOrientation2() {
          return myPannellum && myPannellum.startOrientation();
        }
      }, {
        key: "isOrientationActive",
        value: function isOrientationActive2() {
          return myPannellum && myPannellum.isOrientationActive();
        }
      }, {
        key: "getViewer",
        value: function getViewer2() {
          return myPannellum;
        }
      }, {
        key: "getViewers",
        value: function getViewers2() {
          return myViewers;
        }
      }]);
      return ReactPannellum2;
    }(React__default["default"].Component);
    ReactPannellum.propTypes = {
      id: PropTypes__default["default"].string.isRequired,
      sceneId: PropTypes__default["default"].string.isRequired,
      children: PropTypes__default["default"].any,
      type: PropTypes__default["default"].string,
      imageSource: PropTypes__default["default"].string,
      equirectangularOptions: PropTypes__default["default"].shape({}),
      cubeMap: PropTypes__default["default"].arrayOf(PropTypes__default["default"].string),
      multiRes: PropTypes__default["default"].shape({
        basePath: PropTypes__default["default"].string,
        path: PropTypes__default["default"].string,
        fallbackPath: PropTypes__default["default"].string,
        extension: PropTypes__default["default"].string,
        tileResolution: PropTypes__default["default"].number,
        maxLevel: PropTypes__default["default"].number,
        cubeResolution: PropTypes__default["default"].number
      }),
      config: PropTypes__default["default"].shape({}),
      className: PropTypes__default["default"].string,
      style: PropTypes__default["default"].shape({}),
      onPanoramaLoaded: PropTypes__default["default"].func,
      onPanoramaMouseUp: PropTypes__default["default"].func,
      onPanoramaMouseDown: PropTypes__default["default"].func
    };
    ReactPannellum.defaultProps = {
      type: "equirectangular",
      imageSource: "",
      equirectangularOptions: {},
      cubeMap: [],
      multiRes: {},
      className: "",
      style: configs.styles,
      config: {}
    };
    var addScene = ReactPannellum.addScene;
    var getCurrentScene = ReactPannellum.getCurrentScene;
    var getAllScenes = ReactPannellum.getAllScenes;
    var removeScene = ReactPannellum.removeScene;
    var loadScene = ReactPannellum.loadScene;
    var isLoaded = ReactPannellum.isLoaded;
    var getPitch = ReactPannellum.getPitch;
    var setPitch = ReactPannellum.setPitch;
    var getPitchBounds = ReactPannellum.getPitchBounds;
    var setPitchBounds = ReactPannellum.setPitchBounds;
    var getYaw = ReactPannellum.getYaw;
    var setYaw = ReactPannellum.setYaw;
    var getYawBounds = ReactPannellum.getYawBounds;
    var setYawBounds = ReactPannellum.setYawBounds;
    var getHfov = ReactPannellum.getHfov;
    var setHfov = ReactPannellum.setHfov;
    var getHfovBounds = ReactPannellum.getHfovBounds;
    var setHfovBounds = ReactPannellum.setHfovBounds;
    var lookAt = ReactPannellum.lookAt;
    var getNorthOffset = ReactPannellum.getNorthOffset;
    var setNorthOffset = ReactPannellum.setNorthOffset;
    var getHorizonRoll = ReactPannellum.getHorizonRoll;
    var setHorizonRoll = ReactPannellum.setHorizonRoll;
    var getHorizonPitch = ReactPannellum.getHorizonPitch;
    var setHorizonPitch = ReactPannellum.setHorizonPitch;
    var startAutoRotate = ReactPannellum.startAutoRotate;
    var stopAutoRotate = ReactPannellum.stopAutoRotate;
    var mouseEventToCoords = ReactPannellum.mouseEventToCoords;
    var toggleFullscreen = ReactPannellum.toggleFullscreen;
    var getConfig = ReactPannellum.getConfig;
    var getContainer = ReactPannellum.getContainer;
    var addHotSpot = ReactPannellum.addHotSpot;
    var removeHotSpot = ReactPannellum.removeHotSpot;
    var destroy = ReactPannellum.destroy;
    var stopMovement = ReactPannellum.stopMovement;
    var resize = ReactPannellum.resize;
    var isOrientationSupported = ReactPannellum.isOrientationSupported;
    var stopOrientation = ReactPannellum.stopOrientation;
    var startOrientation = ReactPannellum.startOrientation;
    var isOrientationActive = ReactPannellum.isOrientationActive;
    var getViewer = ReactPannellum.getViewer;
    var getViewers = ReactPannellum.getViewers;
    exports.addHotSpot = addHotSpot;
    exports.addScene = addScene;
    exports.default = ReactPannellum;
    exports.destroy = destroy;
    exports.getAllScenes = getAllScenes;
    exports.getConfig = getConfig;
    exports.getContainer = getContainer;
    exports.getCurrentScene = getCurrentScene;
    exports.getHfov = getHfov;
    exports.getHfovBounds = getHfovBounds;
    exports.getHorizonPitch = getHorizonPitch;
    exports.getHorizonRoll = getHorizonRoll;
    exports.getNorthOffset = getNorthOffset;
    exports.getPitch = getPitch;
    exports.getPitchBounds = getPitchBounds;
    exports.getViewer = getViewer;
    exports.getViewers = getViewers;
    exports.getYaw = getYaw;
    exports.getYawBounds = getYawBounds;
    exports.isLoaded = isLoaded;
    exports.isOrientationActive = isOrientationActive;
    exports.isOrientationSupported = isOrientationSupported;
    exports.loadScene = loadScene;
    exports.lookAt = lookAt;
    exports.mouseEventToCoords = mouseEventToCoords;
    exports.removeHotSpot = removeHotSpot;
    exports.removeScene = removeScene;
    exports.resize = resize;
    exports.setHfov = setHfov;
    exports.setHfovBounds = setHfovBounds;
    exports.setHorizonPitch = setHorizonPitch;
    exports.setHorizonRoll = setHorizonRoll;
    exports.setNorthOffset = setNorthOffset;
    exports.setPitch = setPitch;
    exports.setPitchBounds = setPitchBounds;
    exports.setYaw = setYaw;
    exports.setYawBounds = setYawBounds;
    exports.startAutoRotate = startAutoRotate;
    exports.startOrientation = startOrientation;
    exports.stopAutoRotate = stopAutoRotate;
    exports.stopMovement = stopMovement;
    exports.stopOrientation = stopOrientation;
    exports.toggleFullscreen = toggleFullscreen;
  }
});
export default require_dist();
/*! Bundled license information:

react-is/cjs/react-is.development.js:
  (** @license React v16.13.1
   * react-is.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

object-assign/index.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-pannellum.js.map
