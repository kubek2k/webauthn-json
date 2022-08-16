"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
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
  }; // src/webauthn-json/base64url.ts


  function base64urlToBuffer(baseurl64String) {
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

  function bufferToBase64url(buffer) {
    var byteView = new Uint8Array(buffer);
    var str = "";

    var _iterator = _createForOfIteratorHelper(byteView),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var charCode = _step.value;
        str += String.fromCharCode(charCode);
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    var base64String = btoa(str);
    var base64urlString = base64String.replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
    return base64urlString;
  } // src/webauthn-json/convert.ts


  var copyValue = "copy";
  var convertValue = "convert";

  function convert(conversionFn, schema, input) {
    if (schema === copyValue) {
      return input;
    }

    if (schema === convertValue) {
      return conversionFn(input);
    }

    if (schema instanceof Array) {
      return input.map(function (v) {
        return convert(conversionFn, schema[0], v);
      });
    }

    if (schema instanceof Object) {
      var output = {};

      for (var _i = 0, _Object$entries = Object.entries(schema); _i < _Object$entries.length; _i++) {
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

        output[key] = convert(conversionFn, schemaField.schema, input[key]);
      }

      return output;
    }
  }

  function derived(schema, derive) {
    return {
      required: true,
      schema: schema,
      derive: derive
    };
  }

  function required(schema) {
    return {
      required: true,
      schema: schema
    };
  }

  function optional(schema) {
    return {
      required: false,
      schema: schema
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
        var _a3;

        return ((_a3 = response.getTransports) == null ? void 0 : _a3.call(response)) || [];
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
  }; // src/webauthn-json/basic/api.ts

  function createRequestFromJSON(requestJSON) {
    return convert(base64urlToBuffer, credentialCreationOptions, requestJSON);
  }

  function createResponseToJSON(credential) {
    return convert(bufferToBase64url, publicKeyCredentialWithAttestation, credential);
  }

  function getRequestFromJSON(requestJSON) {
    return convert(base64urlToBuffer, credentialRequestOptions, requestJSON);
  }

  function getResponseToJSON(credential) {
    return convert(bufferToBase64url, publicKeyCredentialWithAssertion, credential);
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
  publicKeyCredentialWithAssertionExtended.clientExtensionResults = derived(authenticationExtensionsClientOutputsSchema, publicKeyCredentialWithAssertion.clientExtensionResults.derive); // src/dev/inspector/inspector.css.ts

  var inspectorCSS = ":host {\n  position: absolute;\n  top: 2em;\n  left: 2em;\n  right: 2em;\n  bottom: 2em;\n  box-sizing: border-box;\n  font-family: sans-serif;\n  box-shadow: 0 0 1em 2em rgba(0, 0, 0, 0.2);\n  overflow: hidden;\n  resize: both;\n\n  background: rgba(0, 0, 0, 0.5);\n  backdrop-filter: blur(0.5em);\n  -webkit-backdrop-filter: blur(4px);\n  z-index: 1000000;\n}\n\n.wrapper {\n  width: 100%;\n  height: 100%;\n  padding: 1em;\n  box-sizing: border-box;\n  display: grid;\n  grid-template-rows: auto auto 1fr;\n}\n\n.header {\n  text-align: center;\n}\n\ntextarea {\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.8);\n}\n\n.success textarea {\n  background: rgba(0, 255, 0, 0.5);\n}\n\n.failure textarea {\n  background: rgba(255, 0, 0, 0.25);\n}\n\n.controls {\n  text-align: center;\n  align-items: center;\n  margin: 0.5em;\n  gap: 0.5em;\n}\n\nbutton {\n  margin-right: 0.5em;\n}\n"; // src/dev/inspector/inspector.ts

  var _a;

  var originalCreate = (_a = navigator.credentials) == null ? void 0 : _a.create.bind(navigator.credentials);

  var _a2;

  var originalGet = (_a2 = navigator.credentials) == null ? void 0 : _a2.get.bind(navigator.credentials);

  if (!navigator.credentials) {
    navigator.credentials = {};
  }

  var WebAuthnInspector = /*#__PURE__*/function (_HTMLElement) {
    _inherits(WebAuthnInspector, _HTMLElement);

    var _super = _createSuper(WebAuthnInspector);

    function WebAuthnInspector() {
      var _this;

      _classCallCheck(this, WebAuthnInspector);

      _this = _super.call(this);
      _this.shadow = _this.attachShadow({
        mode: "closed"
      });
      var cssElem = document.createElement("style");
      cssElem.textContent = inspectorCSS;

      _this.shadow.appendChild(cssElem);

      _this.contentWrapper = document.createElement("div");

      _this.contentWrapper.classList.add("wrapper");

      _this.shadow.appendChild(_this.contentWrapper);

      _this.header = document.createElement("div");
      _this.header.textContent = "WebAuthn Request";

      _this.header.classList.add("header");

      _this.contentWrapper.appendChild(_this.header);

      _this.controls = document.createElement("div");

      _this.controls.classList.add("controls");

      _this.contentWrapper.appendChild(_this.controls);

      _this.textareaWrapper = document.createElement("div");

      _this.textareaWrapper.classList.add("textarea-wrapper");

      _this.contentWrapper.appendChild(_this.textareaWrapper);

      _this.textarea = document.createElement("textarea");

      _this.textareaWrapper.appendChild(_this.textarea);

      _this.closeButton = document.createElement("button");
      _this.closeButton.textContent = "Close";

      _this.closeButton.addEventListener("click", function () {
        document.body.removeChild(_assertThisInitialized(_this));

        if (_this.close) {
          _this.close();
        }
      });

      _this.controls.appendChild(_this.closeButton);

      var copyButton = document.createElement("button");
      copyButton.textContent = "Copy JSON";
      copyButton.addEventListener("click", function () {
        navigator.clipboard.writeText(_this.textarea.value);
        copyButton.textContent = "Copied!";
        setTimeout(function () {
          copyButton.textContent = "Copy JSON";
        }, 1e3);
      });

      _this.controls.appendChild(copyButton);

      document.body.appendChild(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(WebAuthnInspector, [{
      key: "create",
      value: function create(options) {
        return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
          var _this2 = this;

          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  return _context2.abrupt("return", new Promise(function (resolve, reject) {
                    _this2.close = function () {
                      reject("WebAuthn inspector closed");
                    };

                    var json = convert(bufferToBase64url, credentialCreationOptionsExtended, options);
                    _this2.header.textContent = "WebAuthn Create Request";
                    _this2.textarea.value = JSON.stringify(json, null, "  ");
                    _this2.opButton = document.createElement("button");
                    _this2.opButton.textContent = "Create";

                    _this2.opButton.addEventListener("click", function () {
                      return __async(_this2, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                        var requestJSON, request, response;
                        return _regeneratorRuntime().wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.prev = 0;
                                requestJSON = JSON.parse(this.textarea.value);
                                request = createRequestFromJSON(requestJSON);
                                _context.next = 5;
                                return originalCreate(request);

                              case 5:
                                response = _context.sent;
                                this.success("Create", createResponseToJSON(response));
                                this.closeButton.textContent = "Respond";

                                this.close = function () {
                                  resolve(response);
                                };

                                _context.next = 15;
                                break;

                              case 11:
                                _context.prev = 11;
                                _context.t0 = _context["catch"](0);
                                this.failure("Create", _context.t0);

                                this.close = function () {
                                  reject(_context.t0);
                                };

                              case 15:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this, [[0, 11]]);
                      }));
                    });

                    _this2.controls.appendChild(_this2.opButton);
                  }));

                case 1:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));
      }
    }, {
      key: "get",
      value: function get(options) {
        return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
          var _this3 = this;

          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  return _context4.abrupt("return", new Promise(function (resolve, reject) {
                    _this3.close = function () {
                      reject("WebAuthn inspector closed");
                    };

                    var json = convert(bufferToBase64url, credentialRequestOptionsExtended, options);
                    _this3.header.textContent = "WebAuthn Get Request";
                    _this3.textarea.value = JSON.stringify(json, null, "  ");
                    _this3.opButton = document.createElement("button");
                    _this3.opButton.textContent = "Get";

                    _this3.opButton.addEventListener("click", function () {
                      return __async(_this3, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                        var requestJSON, request, response;
                        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.prev = 0;
                                requestJSON = JSON.parse(this.textarea.value);
                                request = getRequestFromJSON(requestJSON);
                                console.log(request);
                                _context3.next = 6;
                                return originalGet(request);

                              case 6:
                                response = _context3.sent;
                                this.success("Get", getResponseToJSON(response));
                                this.closeButton.textContent = "Respond";

                                this.close = function () {
                                  resolve(response);
                                };

                                _context3.next = 16;
                                break;

                              case 12:
                                _context3.prev = 12;
                                _context3.t0 = _context3["catch"](0);
                                this.failure("Get", _context3.t0);

                                this.close = function () {
                                  reject(_context3.t0);
                                };

                              case 16:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this, [[0, 12]]);
                      }));
                    });

                    _this3.controls.appendChild(_this3.opButton);
                  }));

                case 1:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));
      }
    }, {
      key: "success",
      value: function success(op, responseJSON) {
        this.controls.removeChild(this.opButton);
        this.header.textContent = "\u2705 WebAuthn ".concat(op, " Response");
        this.contentWrapper.classList.add("success");
        this.textarea.value = JSON.stringify(responseJSON, null, "  ");
      }
    }, {
      key: "failure",
      value: function failure(op, e) {
        this.controls.removeChild(this.opButton);
        this.header.textContent = "\u274C WebAuthn ".concat(op, " Response");
        this.contentWrapper.classList.add("failure");
        this.textarea.value = e.toString();
      }
    }]);

    return WebAuthnInspector;
  }( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

  customElements.define("webauthn-inspector", WebAuthnInspector);

  navigator.credentials.create = function (options) {
    return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
      var interceptor;
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              console.log(options);
              interceptor = new WebAuthnInspector();
              _context5.next = 4;
              return interceptor.create(options);

            case 4:
              return _context5.abrupt("return", _context5.sent);

            case 5:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
  };

  navigator.credentials.get = function (options) {
    return __async(this, null, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
      var interceptor;
      return _regeneratorRuntime().wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              interceptor = new WebAuthnInspector();
              _context6.next = 3;
              return interceptor.get(options);

            case 3:
              return _context6.abrupt("return", _context6.sent);

            case 4:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));
  };

  console.log("WebAuthn Inspector is active!");
})();