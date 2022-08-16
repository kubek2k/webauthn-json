"use strict";

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;

var __markAsModule = function __markAsModule(target) {
  return __defProp(target, "__esModule", {
    value: true
  });
};

var __export = function __export(target, all) {
  for (var name in all) {
    __defProp(target, name, {
      get: all[name],
      enumerable: true
    });
  }
};

var __reExport = function __reExport(target, module2, copyDefault, desc) {
  if (module2 && _typeof(module2) === "object" || typeof module2 === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(module2)),
        _step;

    try {
      var _loop = function _loop() {
        var key = _step.value;
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default")) __defProp(target, key, {
          get: function get() {
            return module2[key];
          },
          enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable
        });
      };

      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  return target;
};

var __toCommonJS = /* @__PURE__ */function (cache) {
  return function (module2, temp) {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
}(typeof WeakMap !== "undefined" ? /* @__PURE__ */new WeakMap() : 0);

var __async = function __async(__this, __arguments, generator) {
  return new Promise(function (resolve, reject) {
    var fulfilled = function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };

    var rejected = function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    };

    var step = function step(x) {
      return x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    };

    step((generator = generator.apply(__this, __arguments)).next());
  });
}; // src/webauthn-json/extended.ts


var extended_exports = {};

__export(extended_exports, {
  base64urlToBuffer: function base64urlToBuffer() {
    return _base64urlToBuffer;
  },
  bufferToBase64url: function bufferToBase64url() {
    return _bufferToBase64url;
  },
  convert: function convert() {
    return _convert;
  },
  create: function create() {
    return _create;
  },
  createExtended: function createExtended() {
    return _createExtended;
  },
  createExtendedRequestFromJSON: function createExtendedRequestFromJSON() {
    return _createExtendedRequestFromJSON;
  },
  createExtendedResponseToJSON: function createExtendedResponseToJSON() {
    return _createExtendedResponseToJSON;
  },
  createRequestFromJSON: function createRequestFromJSON() {
    return _createRequestFromJSON;
  },
  createResponseToJSON: function createResponseToJSON() {
    return _createResponseToJSON;
  },
  get: function get() {
    return _get;
  },
  getExtended: function getExtended() {
    return _getExtended;
  },
  getExtendedRequestFromJSON: function getExtendedRequestFromJSON() {
    return _getExtendedRequestFromJSON;
  },
  getExtendedResponseToJSON: function getExtendedResponseToJSON() {
    return _getExtendedResponseToJSON;
  },
  getRequestFromJSON: function getRequestFromJSON() {
    return _getRequestFromJSON;
  },
  getResponseToJSON: function getResponseToJSON() {
    return _getResponseToJSON;
  },
  schema: function schema() {
    return _schema;
  },
  supported: function supported() {
    return _supported;
  }
}); // src/webauthn-json/base64url.ts


function _base64urlToBuffer(baseurl64String) {
  var padding = "==".slice(0, (4 - baseurl64String.length % 4) % 4);
  var base64String = baseurl64String.replace(/-/g, "+").replace(/_/g, "/") + padding;
  var str = atob(base64String);
  var buffer = new ArrayBuffer(str.length);
  var byteView = new Uint8Array(buffer);

  for (var i = 0; i < str.length; i++) {
    byteView[i] = str.charCodeAt(i);
  }

  return buffer;
}

function _bufferToBase64url(buffer) {
  var byteView = new Uint8Array(buffer);
  var str = "";

  var _iterator2 = _createForOfIteratorHelper(byteView),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var charCode = _step2.value;
      str += String.fromCharCode(charCode);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  var base64String = btoa(str);
  var base64urlString = base64String.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
  return base64urlString;
} // src/webauthn-json/convert.ts


var copyValue = "copy";
var convertValue = "convert";

function _convert(conversionFn, schema2, input) {
  if (schema2 === copyValue) {
    return input;
  }

  if (schema2 === convertValue) {
    return conversionFn(input);
  }

  if (schema2 instanceof Array) {
    return input.map(function (v) {
      return _convert(conversionFn, schema2[0], v);
    });
  }

  if (schema2 instanceof Object) {
    var output = {};

    for (var _i = 0, _Object$entries = Object.entries(schema2); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          key = _Object$entries$_i[0],
          schemaField = _Object$entries$_i[1];

      if (schemaField.derive) {
        var v = schemaField.derive(input);

        if (v !== void 0) {
          input[key] = v;
        }
      }

      if (!(key in input)) {
        if (schemaField.required) {
          throw new Error("Missing key: ".concat(key));
        }

        continue;
      }

      if (input[key] == null) {
        output[key] = null;
        continue;
      }

      output[key] = _convert(conversionFn, schemaField.schema, input[key]);
    }

    return output;
  }
}

function derived(schema2, derive) {
  return {
    required: true,
    schema: schema2,
    derive: derive
  };
}

function required(schema2) {
  return {
    required: true,
    schema: schema2
  };
}

function optional(schema2) {
  return {
    required: false,
    schema: schema2
  };
} // src/webauthn-json/basic/schema.ts


var publicKeyCredentialDescriptorSchema = {
  type: required(copyValue),
  id: required(convertValue),
  transports: optional(copyValue)
};
var simplifiedExtensionsSchema = {
  appid: optional(copyValue),
  appidExclude: optional(copyValue),
  credProps: optional(copyValue)
};
var simplifiedClientExtensionResultsSchema = {
  appid: optional(copyValue),
  appidExclude: optional(copyValue),
  credProps: optional(copyValue)
};
var credentialCreationOptions = {
  publicKey: required({
    rp: required(copyValue),
    user: required({
      id: required(convertValue),
      name: required(copyValue),
      displayName: required(copyValue)
    }),
    challenge: required(convertValue),
    pubKeyCredParams: required(copyValue),
    timeout: optional(copyValue),
    excludeCredentials: optional([publicKeyCredentialDescriptorSchema]),
    authenticatorSelection: optional(copyValue),
    attestation: optional(copyValue),
    extensions: optional(simplifiedExtensionsSchema)
  }),
  signal: optional(copyValue)
};
var publicKeyCredentialWithAttestation = {
  type: required(copyValue),
  id: required(copyValue),
  rawId: required(convertValue),
  authenticatorAttachment: optional(copyValue),
  response: required({
    clientDataJSON: required(convertValue),
    attestationObject: required(convertValue),
    transports: derived(copyValue, function (response) {
      var _a;

      return ((_a = response.getTransports) == null ? void 0 : _a.call(response)) || [];
    })
  }),
  clientExtensionResults: derived(simplifiedClientExtensionResultsSchema, function (pkc) {
    return pkc.getClientExtensionResults();
  })
};
var credentialRequestOptions = {
  mediation: optional(copyValue),
  publicKey: required({
    challenge: required(convertValue),
    timeout: optional(copyValue),
    rpId: optional(copyValue),
    allowCredentials: optional([publicKeyCredentialDescriptorSchema]),
    userVerification: optional(copyValue),
    extensions: optional(simplifiedExtensionsSchema)
  }),
  signal: optional(copyValue)
};
var publicKeyCredentialWithAssertion = {
  type: required(copyValue),
  id: required(copyValue),
  rawId: required(convertValue),
  authenticatorAttachment: optional(copyValue),
  response: required({
    clientDataJSON: required(convertValue),
    authenticatorData: required(convertValue),
    signature: required(convertValue),
    userHandle: required(convertValue)
  }),
  clientExtensionResults: derived(simplifiedClientExtensionResultsSchema, function (pkc) {
    return pkc.getClientExtensionResults();
  })
};
var _schema = {
  credentialCreationOptions: credentialCreationOptions,
  publicKeyCredentialWithAttestation: publicKeyCredentialWithAttestation,
  credentialRequestOptions: credentialRequestOptions,
  publicKeyCredentialWithAssertion: publicKeyCredentialWithAssertion
}; // src/webauthn-json/basic/api.ts

function _createRequestFromJSON(requestJSON) {
  return _convert(_base64urlToBuffer, credentialCreationOptions, requestJSON);
}

function _createResponseToJSON(credential) {
  return _convert(_bufferToBase64url, publicKeyCredentialWithAttestation, credential);
}

function _create(requestJSON) {
  return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var credential;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return navigator.credentials.create(_createRequestFromJSON(requestJSON));

          case 2:
            credential = _context.sent;
            return _context.abrupt("return", _createResponseToJSON(credential));

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
}

function _getRequestFromJSON(requestJSON) {
  return _convert(_base64urlToBuffer, credentialRequestOptions, requestJSON);
}

function _getResponseToJSON(credential) {
  return _convert(_bufferToBase64url, publicKeyCredentialWithAssertion, credential);
}

function _get(requestJSON) {
  return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var credential;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return navigator.credentials.get(_getRequestFromJSON(requestJSON));

          case 2:
            credential = _context2.sent;
            return _context2.abrupt("return", _getResponseToJSON(credential));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
} // src/webauthn-json/basic/supported.ts


function _supported() {
  return !!(navigator.credentials && navigator.credentials.create && navigator.credentials.get && window.PublicKeyCredential);
} // src/webauthn-json/extended/schema.ts


var authenticationExtensionsClientInputsSchema = {
  appid: optional(copyValue),
  appidExclude: optional(copyValue),
  uvm: optional(copyValue),
  credProps: optional(copyValue),
  largeBlob: optional({
    support: optional(copyValue),
    read: optional(copyValue),
    write: optional(convertValue)
  })
};
var authenticationExtensionsClientOutputsSchema = {
  appid: optional(copyValue),
  appidExclude: optional(copyValue),
  uvm: optional(copyValue),
  credProps: optional(copyValue),
  largeBlob: optional({
    supported: optional(copyValue),
    blob: optional(convertValue),
    written: optional(copyValue)
  })
};
var credentialCreationOptionsExtended = JSON.parse(JSON.stringify(credentialCreationOptions));
credentialCreationOptionsExtended.publicKey.schema.extensions = optional(authenticationExtensionsClientInputsSchema);
var publicKeyCredentialWithAttestationExtended = JSON.parse(JSON.stringify(publicKeyCredentialWithAttestation));
publicKeyCredentialWithAttestationExtended.clientExtensionResults = derived(authenticationExtensionsClientOutputsSchema, publicKeyCredentialWithAttestation.clientExtensionResults.derive);
publicKeyCredentialWithAttestationExtended.response.schema.transports = publicKeyCredentialWithAttestation.response.schema.transports;
var credentialRequestOptionsExtended = JSON.parse(JSON.stringify(credentialRequestOptions));
credentialRequestOptionsExtended.publicKey.schema.extensions = optional(authenticationExtensionsClientInputsSchema);
var publicKeyCredentialWithAssertionExtended = JSON.parse(JSON.stringify(publicKeyCredentialWithAssertion));
publicKeyCredentialWithAssertionExtended.clientExtensionResults = derived(authenticationExtensionsClientOutputsSchema, publicKeyCredentialWithAssertion.clientExtensionResults.derive); // src/webauthn-json/extended/api.ts

function _createExtendedRequestFromJSON(requestJSON) {
  return _convert(_base64urlToBuffer, credentialCreationOptionsExtended, requestJSON);
}

function _createExtendedResponseToJSON(credential) {
  return _convert(_bufferToBase64url, publicKeyCredentialWithAttestationExtended, credential);
}

function makeCallable(jsonResponse, credentialResponse) {
  var callable = {};

  if (credentialResponse.getTransports) {
    callable.getTransports = function () {
      return credentialResponse.getTransports();
    };
  }

  if (credentialResponse.getAuthenticatorData) {
    callable.getAuthenticatorData = function () {
      return _bufferToBase64url(credentialResponse.getAuthenticatorData());
    };
  }

  if (credentialResponse.getPublicKey) {
    callable.getPublicKey = function () {
      var publicKey = credentialResponse.getPublicKey();
      return publicKey && _bufferToBase64url(publicKey);
    };
  }

  if (credentialResponse.getPublicKeyAlgorithm) {
    callable.getPublicKeyAlgorithm = function () {
      return credentialResponse.getPublicKeyAlgorithm();
    };
  }

  var newJSON = Object.create(callable);
  Object.assign(newJSON, jsonResponse);
  return newJSON;
}

function _createExtended(requestJSON) {
  return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
    var credential, json;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return navigator.credentials.create(_createExtendedRequestFromJSON(requestJSON));

          case 2:
            credential = _context3.sent;
            json = _createExtendedResponseToJSON(credential);
            json.response = makeCallable(json.response, credential.response);
            return _context3.abrupt("return", json);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
}

function _getExtendedRequestFromJSON(requestJSON) {
  return _convert(_base64urlToBuffer, credentialRequestOptionsExtended, requestJSON);
}

function _getExtendedResponseToJSON(credential) {
  return _convert(_bufferToBase64url, publicKeyCredentialWithAssertionExtended, credential);
}

function _getExtended(requestJSON) {
  return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
    var credential;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return navigator.credentials.get(_getExtendedRequestFromJSON(requestJSON));

          case 2:
            credential = _context4.sent;
            return _context4.abrupt("return", _getExtendedResponseToJSON(credential));

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
}

module.exports = __toCommonJS(extended_exports);