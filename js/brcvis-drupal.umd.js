(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var name = "brcvis-drupal";
  var version$1 = "0.1.0";
  var description = "Javscript code for BRC Vis module.";
  var type = "module";
  var main$1 = "../js/brcvis-drupal.umd.js";
  var browser = "../js/brcvis-drupal.umd.js";
  var browser_min = "../js/brcvis-drupal.min.umd.js";
  var browser_css = "../css/brcvis-drupal.css";
  var scripts = {
  	lint: "npx eslint js",
  	build: "rollup --config"
  };
  var author = "UKCEH Biological Records Centre";
  var license = "GPL-3.0-only";
  var devDependencies = {
  	"@babel/core": "^7.10.4",
  	"@babel/preset-env": "^7.10.4",
  	"@rollup/plugin-babel": "^5.0.4",
  	"@rollup/plugin-commonjs": "^13.0.0",
  	"@rollup/plugin-json": "^4.1.0",
  	"@rollup/plugin-node-resolve": "^8.1.0",
  	eslint: "^7.4.0",
  	rollup: "^2.23.0",
  	"rollup-plugin-css-only": "^2.1.0",
  	"rollup-plugin-eslint": "^4.0.0",
  	"rollup-plugin-terser": "^6.1.0"
  };
  var dependencies = {
  	"core-js": "^3.21.1",
  	"regenerator-runtime": "^0.13.9"
  };
  var pkg = {
  	name: name,
  	version: version$1,
  	description: description,
  	type: type,
  	main: main$1,
  	browser: browser,
  	browser_min: browser_min,
  	browser_css: browser_css,
  	scripts: scripts,
  	author: author,
  	license: license,
  	devDependencies: devDependencies,
  	dependencies: dependencies
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, basedir, module) {
  	return module = {
  	  path: basedir,
  	  exports: {},
  	  require: function (path, base) {
        return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
      }
  	}, fn(module, module.exports), module.exports;
  }

  function commonjsRequire () {
  	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
  }

  var check = function check(it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028


  var global_1 = // eslint-disable-next-line es/no-global-this -- safe
  check((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) == 'object' && globalThis) || check((typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check((typeof self === "undefined" ? "undefined" : _typeof(self)) == 'object' && self) || check(_typeof(commonjsGlobal) == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();

  var fails = function fails(exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };

  var descriptors = !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function get() {
        return 7;
      }
    })[1] != 7;
  });

  var functionBindNative = !fails(function () {
    var test = function () {
      /* empty */
    }.bind(); // eslint-disable-next-line no-prototype-builtins -- safe


    return typeof test != 'function' || test.hasOwnProperty('prototype');
  });

  var call$2 = Function.prototype.call;
  var functionCall = functionBindNative ? call$2.bind(call$2) : function () {
    return call$2.apply(call$2, arguments);
  };

  var $propertyIsEnumerable$2 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getOwnPropertyDescriptor$8 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug

  var NASHORN_BUG = getOwnPropertyDescriptor$8 && !$propertyIsEnumerable$2.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable

  var f$8 = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$8(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$2;
  var objectPropertyIsEnumerable = {
    f: f$8
  };

  var createPropertyDescriptor = function createPropertyDescriptor(bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var FunctionPrototype$4 = Function.prototype;
  var bind$2 = FunctionPrototype$4.bind;
  var call$1 = FunctionPrototype$4.call;
  var uncurryThis = functionBindNative && bind$2.bind(call$1, call$1);
  var functionUncurryThis = functionBindNative ? function (fn) {
    return fn && uncurryThis(fn);
  } : function (fn) {
    return fn && function () {
      return call$1.apply(fn, arguments);
    };
  };

  var toString$1 = functionUncurryThis({}.toString);
  var stringSlice$g = functionUncurryThis(''.slice);

  var classofRaw = function classofRaw(it) {
    return stringSlice$g(toString$1(it), 8, -1);
  };

  var Object$6 = global_1.Object;
  var split$3 = functionUncurryThis(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings

  var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object$6('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classofRaw(it) == 'String' ? split$3(it, '') : Object$6(it);
  } : Object$6;

  var TypeError$v = global_1.TypeError; // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible

  var requireObjectCoercible = function requireObjectCoercible(it) {
    if (it == undefined) throw TypeError$v("Can't call method on " + it);
    return it;
  };

  var toIndexedObject = function toIndexedObject(it) {
    return indexedObject(requireObjectCoercible(it));
  };

  // `IsCallable` abstract operation
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable = function isCallable(argument) {
    return typeof argument == 'function';
  };

  var isObject = function isObject(it) {
    return _typeof(it) == 'object' ? it !== null : isCallable(it);
  };

  var aFunction = function aFunction(argument) {
    return isCallable(argument) ? argument : undefined;
  };

  var getBuiltIn = function getBuiltIn(namespace, method) {
    return arguments.length < 2 ? aFunction(global_1[namespace]) : global_1[namespace] && global_1[namespace][method];
  };

  var objectIsPrototypeOf = functionUncurryThis({}.isPrototypeOf);

  var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';

  var process$4 = global_1.process;
  var Deno = global_1.Deno;
  var versions = process$4 && process$4.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;

  if (v8) {
    match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us

    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  } // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0


  if (!version && engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);

    if (!match || match[1] >= 74) {
      match = engineUserAgent.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }

  var engineV8Version = version;

  /* eslint-disable es/no-symbol -- required for testing */
  // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing

  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances

    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && engineV8Version && engineV8Version < 41;
  });

  /* eslint-disable es/no-symbol -- required for testing */

  var useSymbolAsUid = nativeSymbol && !Symbol.sham && _typeof(Symbol.iterator) == 'symbol';

  var Object$5 = global_1.Object;
  var isSymbol = useSymbolAsUid ? function (it) {
    return _typeof(it) == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn('Symbol');
    return isCallable($Symbol) && objectIsPrototypeOf($Symbol.prototype, Object$5(it));
  };

  var String$7 = global_1.String;

  var tryToString = function tryToString(argument) {
    try {
      return String$7(argument);
    } catch (error) {
      return 'Object';
    }
  };

  var TypeError$u = global_1.TypeError; // `Assert: IsCallable(argument) is true`

  var aCallable = function aCallable(argument) {
    if (isCallable(argument)) return argument;
    throw TypeError$u(tryToString(argument) + ' is not a function');
  };

  // https://tc39.es/ecma262/#sec-getmethod

  var getMethod = function getMethod(V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable(func);
  };

  var TypeError$t = global_1.TypeError; // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive

  var ordinaryToPrimitive = function ordinaryToPrimitive(input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    if (isCallable(fn = input.valueOf) && !isObject(val = functionCall(fn, input))) return val;
    if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = functionCall(fn, input))) return val;
    throw TypeError$t("Can't convert object to primitive value");
  };

  var isPure = false;

  var defineProperty$g = Object.defineProperty;

  var setGlobal = function setGlobal(key, value) {
    try {
      defineProperty$g(global_1, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global_1[key] = value;
    }

    return value;
  };

  var SHARED = '__core-js_shared__';
  var store$1 = global_1[SHARED] || setGlobal(SHARED, {});
  var sharedStore = store$1;

  var shared = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
      return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
      version: '3.21.1',
      mode: 'global',
      copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
      license: 'https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE',
      source: 'https://github.com/zloirock/core-js'
    });
  });

  var Object$4 = global_1.Object; // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject

  var toObject = function toObject(argument) {
    return Object$4(requireObjectCoercible(argument));
  };

  var hasOwnProperty = functionUncurryThis({}.hasOwnProperty); // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty

  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject(it), key);
  };

  var id$1 = 0;
  var postfix = Math.random();
  var toString = functionUncurryThis(1.0.toString);

  var uid = function uid(key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id$1 + postfix, 36);
  };

  var WellKnownSymbolsStore$1 = shared('wks');
  var _Symbol$2 = global_1.Symbol;
  var symbolFor = _Symbol$2 && _Symbol$2['for'];
  var createWellKnownSymbol = useSymbolAsUid ? _Symbol$2 : _Symbol$2 && _Symbol$2.withoutSetter || uid;

  var wellKnownSymbol = function wellKnownSymbol(name) {
    if (!hasOwnProperty_1(WellKnownSymbolsStore$1, name) || !(nativeSymbol || typeof WellKnownSymbolsStore$1[name] == 'string')) {
      var description = 'Symbol.' + name;

      if (nativeSymbol && hasOwnProperty_1(_Symbol$2, name)) {
        WellKnownSymbolsStore$1[name] = _Symbol$2[name];
      } else if (useSymbolAsUid && symbolFor) {
        WellKnownSymbolsStore$1[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
      }
    }

    return WellKnownSymbolsStore$1[name];
  };

  var TypeError$s = global_1.TypeError;
  var TO_PRIMITIVE$2 = wellKnownSymbol('toPrimitive'); // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive

  var toPrimitive = function toPrimitive(input, pref) {
    if (!isObject(input) || isSymbol(input)) return input;
    var exoticToPrim = getMethod(input, TO_PRIMITIVE$2);
    var result;

    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = functionCall(exoticToPrim, input, pref);
      if (!isObject(result) || isSymbol(result)) return result;
      throw TypeError$s("Can't convert object to primitive value");
    }

    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };

  // https://tc39.es/ecma262/#sec-topropertykey

  var toPropertyKey = function toPropertyKey(argument) {
    var key = toPrimitive(argument, 'string');
    return isSymbol(key) ? key : key + '';
  };

  var document$3 = global_1.document; // typeof document.createElement is 'object' in old IE

  var EXISTS$1 = isObject(document$3) && isObject(document$3.createElement);

  var documentCreateElement = function documentCreateElement(it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };

  var ie8DomDefine = !descriptors && !fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(documentCreateElement('div'), 'a', {
      get: function get() {
        return 7;
      }
    }).a != 7;
  });

  var $getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  var f$7 = descriptors ? $getOwnPropertyDescriptor$2 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPropertyKey(P);
    if (ie8DomDefine) try {
      return $getOwnPropertyDescriptor$2(O, P);
    } catch (error) {
      /* empty */
    }
    if (hasOwnProperty_1(O, P)) return createPropertyDescriptor(!functionCall(objectPropertyIsEnumerable.f, O, P), O[P]);
  };
  var objectGetOwnPropertyDescriptor = {
    f: f$7
  };

  // https://bugs.chromium.org/p/v8/issues/detail?id=3334

  var v8PrototypeDefineBug = descriptors && fails(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty(function () {
      /* empty */
    }, 'prototype', {
      value: 42,
      writable: false
    }).prototype != 42;
  });

  var String$6 = global_1.String;
  var TypeError$r = global_1.TypeError; // `Assert: Type(argument) is Object`

  var anObject = function anObject(argument) {
    if (isObject(argument)) return argument;
    throw TypeError$r(String$6(argument) + ' is not an object');
  };

  var TypeError$q = global_1.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe

  var $defineProperty$1 = Object.defineProperty; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
  var ENUMERABLE = 'enumerable';
  var CONFIGURABLE$1 = 'configurable';
  var WRITABLE = 'writable'; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty

  var f$6 = descriptors ? v8PrototypeDefineBug ? function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);

    if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
      var current = $getOwnPropertyDescriptor$1(O, P);

      if (current && current[WRITABLE]) {
        O[P] = Attributes.value;
        Attributes = {
          configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
          enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
          writable: false
        };
      }
    }

    return $defineProperty$1(O, P, Attributes);
  } : $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPropertyKey(P);
    anObject(Attributes);
    if (ie8DomDefine) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError$q('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var objectDefineProperty = {
    f: f$6
  };

  var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var functionToString$1 = functionUncurryThis(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper

  if (!isCallable(sharedStore.inspectSource)) {
    sharedStore.inspectSource = function (it) {
      return functionToString$1(it);
    };
  }

  var inspectSource = sharedStore.inspectSource;

  var WeakMap$2 = global_1.WeakMap;
  var nativeWeakMap = isCallable(WeakMap$2) && /native code/.test(inspectSource(WeakMap$2));

  var keys$3 = shared('keys');

  var sharedKey = function sharedKey(key) {
    return keys$3[key] || (keys$3[key] = uid(key));
  };

  var hiddenKeys$1 = {};

  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$p = global_1.TypeError;
  var WeakMap$1 = global_1.WeakMap;
  var set$3, get$2, has;

  var enforce = function enforce(it) {
    return has(it) ? get$2(it) : set$3(it, {});
  };

  var getterFor$1 = function getterFor(TYPE) {
    return function (it) {
      var state;

      if (!isObject(it) || (state = get$2(it)).type !== TYPE) {
        throw TypeError$p('Incompatible receiver, ' + TYPE + ' required');
      }

      return state;
    };
  };

  if (nativeWeakMap || sharedStore.state) {
    var store = sharedStore.state || (sharedStore.state = new WeakMap$1());
    var wmget = functionUncurryThis(store.get);
    var wmhas = functionUncurryThis(store.has);
    var wmset = functionUncurryThis(store.set);

    set$3 = function set(it, metadata) {
      if (wmhas(store, it)) throw new TypeError$p(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset(store, it, metadata);
      return metadata;
    };

    get$2 = function get(it) {
      return wmget(store, it) || {};
    };

    has = function has(it) {
      return wmhas(store, it);
    };
  } else {
    var STATE = sharedKey('state');
    hiddenKeys$1[STATE] = true;

    set$3 = function set(it, metadata) {
      if (hasOwnProperty_1(it, STATE)) throw new TypeError$p(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty(it, STATE, metadata);
      return metadata;
    };

    get$2 = function get(it) {
      return hasOwnProperty_1(it, STATE) ? it[STATE] : {};
    };

    has = function has(it) {
      return hasOwnProperty_1(it, STATE);
    };
  }

  var internalState = {
    set: set$3,
    get: get$2,
    has: has,
    enforce: enforce,
    getterFor: getterFor$1
  };

  var FunctionPrototype$3 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe

  var getDescriptor = descriptors && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwnProperty_1(FunctionPrototype$3, 'name'); // additional protection from minified / mangled / dropped function names

  var PROPER = EXISTS && function something() {
    /* empty */
  }.name === 'something';

  var CONFIGURABLE = EXISTS && (!descriptors || descriptors && getDescriptor(FunctionPrototype$3, 'name').configurable);
  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };

  var redefine = createCommonjsModule(function (module) {
    var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(String).split('String');
    (module.exports = function (O, key, value, options) {
      var unsafe = options ? !!options.unsafe : false;
      var simple = options ? !!options.enumerable : false;
      var noTargetGet = options ? !!options.noTargetGet : false;
      var name = options && options.name !== undefined ? options.name : key;
      var state;

      if (isCallable(value)) {
        if (String(name).slice(0, 7) === 'Symbol(') {
          name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
        }

        if (!hasOwnProperty_1(value, 'name') || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
          createNonEnumerableProperty(value, 'name', name);
        }

        state = enforceInternalState(value);

        if (!state.source) {
          state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
        }
      }

      if (O === global_1) {
        if (simple) O[key] = value;else setGlobal(key, value);
        return;
      } else if (!unsafe) {
        delete O[key];
      } else if (!noTargetGet && O[key]) {
        simple = true;
      }

      if (simple) O[key] = value;else createNonEnumerableProperty(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
      return isCallable(this) && getInternalState(this).source || inspectSource(this);
    });
  });

  var ceil$2 = Math.ceil;
  var floor$b = Math.floor; // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity

  var toIntegerOrInfinity = function toIntegerOrInfinity(argument) {
    var number = +argument; // eslint-disable-next-line no-self-compare -- safe

    return number !== number || number === 0 ? 0 : (number > 0 ? floor$b : ceil$2)(number);
  };

  var max$6 = Math.max;
  var min$9 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).

  var toAbsoluteIndex = function toAbsoluteIndex(index, length) {
    var integer = toIntegerOrInfinity(index);
    return integer < 0 ? max$6(integer + length, 0) : min$9(integer, length);
  };

  var min$8 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength

  var toLength = function toLength(argument) {
    return argument > 0 ? min$8(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };

  // https://tc39.es/ecma262/#sec-lengthofarraylike

  var lengthOfArrayLike = function lengthOfArrayLike(obj) {
    return toLength(obj.length);
  };

  var createMethod$6 = function createMethod(IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject($this);
      var length = lengthOfArrayLike(O);
      var index = toAbsoluteIndex(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check

      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check

        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };

  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$6(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$6(false)
  };

  var indexOf$2 = arrayIncludes.indexOf;
  var push$d = functionUncurryThis([].push);

  var objectKeysInternal = function objectKeysInternal(object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;

    for (key in O) {
      !hasOwnProperty_1(hiddenKeys$1, key) && hasOwnProperty_1(O, key) && push$d(result, key);
    } // Don't enum bug & hidden keys


    while (names.length > i) {
      if (hasOwnProperty_1(O, key = names[i++])) {
        ~indexOf$2(result, key) || push$d(result, key);
      }
    }

    return result;
  };

  // IE8- don't enum bug keys
  var enumBugKeys = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];

  var hiddenKeys = enumBugKeys.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe

  var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys);
  };

  var objectGetOwnPropertyNames = {
    f: f$5
  };

  // eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
  var f$4 = Object.getOwnPropertySymbols;
  var objectGetOwnPropertySymbols = {
    f: f$4
  };

  var concat$3 = functionUncurryThis([].concat); // all object keys, includes non-enumerable and symbols

  var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? concat$3(keys, getOwnPropertySymbols(it)) : keys;
  };

  var copyConstructorProperties = function copyConstructorProperties(target, source, exceptions) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (!hasOwnProperty_1(target, key) && !(exceptions && hasOwnProperty_1(exceptions, key))) {
        defineProperty(target, key, getOwnPropertyDescriptor(source, key));
      }
    }
  };

  var replacement = /#|\.prototype\./;

  var isForced = function isForced(feature, detection) {
    var value = data$1[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable(detection) ? fails(detection) : !!detection;
  };

  var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };

  var data$1 = isForced.data = {};
  var NATIVE = isForced.NATIVE = 'N';
  var POLYFILL = isForced.POLYFILL = 'P';
  var isForced_1 = isForced;

  var getOwnPropertyDescriptor$7 = objectGetOwnPropertyDescriptor.f;
  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
    options.name        - the .name of the function if it does not match the key
  */

  var _export = function _export(options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;

    if (GLOBAL) {
      target = global_1;
    } else if (STATIC) {
      target = global_1[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global_1[TARGET] || {}).prototype;
    }

    if (target) for (key in source) {
      sourceProperty = source[key];

      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$7(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];

      FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target

      if (!FORCED && targetProperty !== undefined) {
        if (_typeof(sourceProperty) == _typeof(targetProperty)) continue;
        copyConstructorProperties(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills


      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty(sourceProperty, 'sham', true);
      } // extend global


      redefine(target, key, sourceProperty, options);
    }
  };

  var FunctionPrototype$2 = Function.prototype;
  var apply = FunctionPrototype$2.apply;
  var call = FunctionPrototype$2.call; // eslint-disable-next-line es/no-reflect -- safe

  var functionApply = (typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) == 'object' && Reflect.apply || (functionBindNative ? call.bind(apply) : function () {
    return call.apply(apply, arguments);
  });

  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe

  var isArray = Array.isArray || function isArray(argument) {
    return classofRaw(argument) == 'Array';
  };

  var TO_STRING_TAG$5 = wellKnownSymbol('toStringTag');
  var test$2 = {};
  test$2[TO_STRING_TAG$5] = 'z';
  var toStringTagSupport = String(test$2) === '[object z]';

  var TO_STRING_TAG$4 = wellKnownSymbol('toStringTag');
  var Object$3 = global_1.Object; // ES3 wrong here

  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error

  var tryGet = function tryGet(it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`


  var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = Object$3(it), TO_STRING_TAG$4)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable(O.callee) ? 'Arguments' : result;
  };

  var String$5 = global_1.String;

  var toString_1 = function toString_1(argument) {
    if (classof(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return String$5(argument);
  };

  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe

  var objectKeys$1 = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
  };

  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe

  var f$3 = descriptors && !v8PrototypeDefineBug ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var props = toIndexedObject(Properties);
    var keys = objectKeys$1(Properties);
    var length = keys.length;
    var index = 0;
    var key;

    while (length > index) {
      objectDefineProperty.f(O, key = keys[index++], props[key]);
    }

    return O;
  };
  var objectDefineProperties = {
    f: f$3
  };

  var html = getBuiltIn('document', 'documentElement');

  /* global ActiveXObject -- old IE, WSH */

  var GT = '>';
  var LT = '<';
  var PROTOTYPE$2 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey('IE_PROTO');

  var EmptyConstructor = function EmptyConstructor() {
    /* empty */
  };

  var scriptTag = function scriptTag(content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype


  var NullProtoObjectViaActiveX = function NullProtoObjectViaActiveX(activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak

    return temp;
  }; // Create object with fake `null` prototype: use iframe Object with cleared prototype


  var NullProtoObjectViaIFrame = function NullProtoObjectViaIFrame() {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475

    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  }; // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug


  var activeXDocument;

  var _NullProtoObject = function NullProtoObject() {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {
      /* ignore */
    }

    _NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
    : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH

    var length = enumBugKeys.length;

    while (length--) {
      delete _NullProtoObject[PROTOTYPE$2][enumBugKeys[length]];
    }

    return _NullProtoObject();
  };

  hiddenKeys$1[IE_PROTO$1] = true; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create

  var objectCreate = Object.create || function create(O, Properties) {
    var result;

    if (O !== null) {
      EmptyConstructor[PROTOTYPE$2] = anObject(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$2] = null; // add "__proto__" for Object.getPrototypeOf polyfill

      result[IE_PROTO$1] = O;
    } else result = _NullProtoObject();

    return Properties === undefined ? result : objectDefineProperties.f(result, Properties);
  };

  var createProperty = function createProperty(object, key, value) {
    var propertyKey = toPropertyKey(key);
    if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));else object[propertyKey] = value;
  };

  var Array$9 = global_1.Array;
  var max$5 = Math.max;

  var arraySliceSimple = function arraySliceSimple(O, start, end) {
    var length = lengthOfArrayLike(O);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    var result = Array$9(max$5(fin - k, 0));

    for (var n = 0; k < fin; k++, n++) {
      createProperty(result, n, O[k]);
    }

    result.length = n;
    return result;
  };

  /* eslint-disable es/no-object-getownpropertynames -- safe */

  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function getWindowNames(it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySliceSimple(windowNames);
    }
  }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window


  var f$2 = function getOwnPropertyNames(it) {
    return windowNames && classofRaw(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject(it));
  };

  var objectGetOwnPropertyNamesExternal = {
    f: f$2
  };

  var arraySlice$1 = functionUncurryThis([].slice);

  var f$1 = wellKnownSymbol;
  var wellKnownSymbolWrapped = {
    f: f$1
  };

  var path = global_1;

  var defineProperty$f = objectDefineProperty.f;

  var defineWellKnownSymbol = function defineWellKnownSymbol(NAME) {
    var _Symbol = path.Symbol || (path.Symbol = {});

    if (!hasOwnProperty_1(_Symbol, NAME)) defineProperty$f(_Symbol, NAME, {
      value: wellKnownSymbolWrapped.f(NAME)
    });
  };

  var defineProperty$e = objectDefineProperty.f;
  var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');

  var setToStringTag = function setToStringTag(target, TAG, STATIC) {
    if (target && !STATIC) target = target.prototype;

    if (target && !hasOwnProperty_1(target, TO_STRING_TAG$3)) {
      defineProperty$e(target, TO_STRING_TAG$3, {
        configurable: true,
        value: TAG
      });
    }
  };

  var bind$1 = functionUncurryThis(functionUncurryThis.bind); // optional / simple context binding

  var functionBindContext = function functionBindContext(fn, that) {
    aCallable(fn);
    return that === undefined ? fn : functionBindNative ? bind$1(fn, that) : function
      /* ...args */
    () {
      return fn.apply(that, arguments);
    };
  };

  var noop = function noop() {
    /* empty */
  };

  var empty = [];
  var construct$1 = getBuiltIn('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$9 = functionUncurryThis(constructorRegExp.exec);
  var INCORRECT_TO_STRING$2 = !constructorRegExp.exec(noop);

  var isConstructorModern = function isConstructor(argument) {
    if (!isCallable(argument)) return false;

    try {
      construct$1(noop, empty, argument);
      return true;
    } catch (error) {
      return false;
    }
  };

  var isConstructorLegacy = function isConstructor(argument) {
    if (!isCallable(argument)) return false;

    switch (classof(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return false;
    }

    try {
      // we can't check .prototype since constructors produced by .bind haven't it
      // `Function#toString` throws on some built-it function in some legacy engines
      // (for example, `DOMQuad` and similar in FF41-)
      return INCORRECT_TO_STRING$2 || !!exec$9(constructorRegExp, inspectSource(argument));
    } catch (error) {
      return true;
    }
  };

  isConstructorLegacy.sham = true; // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor

  var isConstructor = !construct$1 || fails(function () {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;

  var SPECIES$6 = wellKnownSymbol('species');
  var Array$8 = global_1.Array; // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesConstructor = function arraySpeciesConstructor(originalArray) {
    var C;

    if (isArray(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback

      if (isConstructor(C) && (C === Array$8 || isArray(C.prototype))) C = undefined;else if (isObject(C)) {
        C = C[SPECIES$6];
        if (C === null) C = undefined;
      }
    }

    return C === undefined ? Array$8 : C;
  };

  // https://tc39.es/ecma262/#sec-arrayspeciescreate

  var arraySpeciesCreate = function arraySpeciesCreate(originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };

  var push$c = functionUncurryThis([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation

  var createMethod$5 = function createMethod(TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject($this);
      var self = indexedObject(O);
      var boundFunction = functionBindContext(callbackfn, that);
      var length = lengthOfArrayLike(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;

      for (; length > index; index++) {
        if (NO_HOLES || index in self) {
          value = self[index];
          result = boundFunction(value, index, O);

          if (TYPE) {
            if (IS_MAP) target[index] = result; // map
            else if (result) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return value;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                push$c(target, value);
              // filter
            } else switch (TYPE) {
              case 4:
                return false;
              // every

              case 7:
                push$c(target, value);
              // filterReject
            }
          }
        }
      }

      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };

  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$5(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$5(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$5(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$5(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$5(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$5(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$5(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$5(7)
  };

  var $forEach$2 = arrayIteration.forEach;
  var HIDDEN = sharedKey('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE$1 = 'prototype';
  var TO_PRIMITIVE$1 = wellKnownSymbol('toPrimitive');
  var setInternalState$a = internalState.set;
  var getInternalState$9 = internalState.getterFor(SYMBOL);
  var ObjectPrototype$4 = Object[PROTOTYPE$1];
  var $Symbol = global_1.Symbol;
  var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE$1];
  var TypeError$o = global_1.TypeError;
  var QObject = global_1.QObject;
  var $stringify$1 = getBuiltIn('JSON', 'stringify');
  var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var nativeDefineProperty = objectDefineProperty.f;
  var nativeGetOwnPropertyNames = objectGetOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = objectPropertyIsEnumerable.f;
  var push$b = functionUncurryThis([].push);
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var StringToSymbolRegistry = shared('string-to-symbol-registry');
  var SymbolToStringRegistry = shared('symbol-to-string-registry');
  var WellKnownSymbolsStore = shared('wks'); // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

  var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

  var setSymbolDescriptor = descriptors && fails(function () {
    return objectCreate(nativeDefineProperty({}, 'a', {
      get: function get() {
        return nativeDefineProperty(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype$4, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype$4[P];
    nativeDefineProperty(O, P, Attributes);

    if (ObjectPrototypeDescriptor && O !== ObjectPrototype$4) {
      nativeDefineProperty(ObjectPrototype$4, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty;

  var wrap$1 = function wrap(tag, description) {
    var symbol = AllSymbols[tag] = objectCreate(SymbolPrototype$1);
    setInternalState$a(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!descriptors) symbol.description = description;
    return symbol;
  };

  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype$4) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPropertyKey(P);
    anObject(Attributes);

    if (hasOwnProperty_1(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwnProperty_1(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwnProperty_1(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = objectCreate(Attributes, {
          enumerable: createPropertyDescriptor(0, false)
        });
      }

      return setSymbolDescriptor(O, key, Attributes);
    }

    return nativeDefineProperty(O, key, Attributes);
  };

  var $defineProperties = function defineProperties(O, Properties) {
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
    $forEach$2(keys, function (key) {
      if (!descriptors || functionCall($propertyIsEnumerable$1, properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };

  var $create = function create(O, Properties) {
    return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
  };

  var $propertyIsEnumerable$1 = function propertyIsEnumerable(V) {
    var P = toPropertyKey(V);
    var enumerable = functionCall(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype$4 && hasOwnProperty_1(AllSymbols, P) && !hasOwnProperty_1(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwnProperty_1(this, P) || !hasOwnProperty_1(AllSymbols, P) || hasOwnProperty_1(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };

  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype$4 && hasOwnProperty_1(AllSymbols, key) && !hasOwnProperty_1(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);

    if (descriptor && hasOwnProperty_1(AllSymbols, key) && !(hasOwnProperty_1(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }

    return descriptor;
  };

  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject(O));
    var result = [];
    $forEach$2(names, function (key) {
      if (!hasOwnProperty_1(AllSymbols, key) && !hasOwnProperty_1(hiddenKeys$1, key)) push$b(result, key);
    });
    return result;
  };

  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype$4;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach$2(names, function (key) {
      if (hasOwnProperty_1(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwnProperty_1(ObjectPrototype$4, key))) {
        push$b(result, AllSymbols[key]);
      }
    });
    return result;
  }; // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor


  if (!nativeSymbol) {
    $Symbol = function _Symbol() {
      if (objectIsPrototypeOf(SymbolPrototype$1, this)) throw TypeError$o('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : toString_1(arguments[0]);
      var tag = uid(description);

      var setter = function setter(value) {
        if (this === ObjectPrototype$4) functionCall(setter, ObjectPrototypeSymbols, value);
        if (hasOwnProperty_1(this, HIDDEN) && hasOwnProperty_1(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
      };

      if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype$4, tag, {
        configurable: true,
        set: setter
      });
      return wrap$1(tag, description);
    };

    SymbolPrototype$1 = $Symbol[PROTOTYPE$1];
    redefine(SymbolPrototype$1, 'toString', function toString() {
      return getInternalState$9(this).tag;
    });
    redefine($Symbol, 'withoutSetter', function (description) {
      return wrap$1(uid(description), description);
    });
    objectPropertyIsEnumerable.f = $propertyIsEnumerable$1;
    objectDefineProperty.f = $defineProperty;
    objectDefineProperties.f = $defineProperties;
    objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
    objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

    wellKnownSymbolWrapped.f = function (name) {
      return wrap$1(wellKnownSymbol(name), name);
    };

    if (descriptors) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty(SymbolPrototype$1, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$9(this).description;
        }
      });

      {
        redefine(ObjectPrototype$4, 'propertyIsEnumerable', $propertyIsEnumerable$1, {
          unsafe: true
        });
      }
    }
  }

  _export({
    global: true,
    wrap: true,
    forced: !nativeSymbol,
    sham: !nativeSymbol
  }, {
    Symbol: $Symbol
  });
  $forEach$2(objectKeys$1(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol(name);
  });
  _export({
    target: SYMBOL,
    stat: true,
    forced: !nativeSymbol
  }, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function _for(key) {
      var string = toString_1(key);
      if (hasOwnProperty_1(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError$o(sym + ' is not a symbol');
      if (hasOwnProperty_1(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function useSetter() {
      USE_SETTER = true;
    },
    useSimple: function useSimple() {
      USE_SETTER = false;
    }
  });
  _export({
    target: 'Object',
    stat: true,
    forced: !nativeSymbol,
    sham: !descriptors
  }, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });
  _export({
    target: 'Object',
    stat: true,
    forced: !nativeSymbol
  }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443

  _export({
    target: 'Object',
    stat: true,
    forced: fails(function () {
      objectGetOwnPropertySymbols.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return objectGetOwnPropertySymbols.f(toObject(it));
    }
  }); // `JSON.stringify` method behavior with symbols
  // https://tc39.es/ecma262/#sec-json.stringify

  if ($stringify$1) {
    var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
      var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}

      return $stringify$1([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
      || $stringify$1({
        a: symbol
      }) != '{}' // V8 throws on boxed symbols
      || $stringify$1(Object(symbol)) != '{}';
    });
    _export({
      target: 'JSON',
      stat: true,
      forced: FORCED_JSON_STRINGIFY
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice$1(arguments);
        var $replacer = replacer;
        if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

        if (!isArray(replacer)) replacer = function replacer(key, value) {
          if (isCallable($replacer)) value = functionCall($replacer, this, key, value);
          if (!isSymbol(value)) return value;
        };
        args[1] = replacer;
        return functionApply($stringify$1, null, args);
      }
    });
  } // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive


  if (!SymbolPrototype$1[TO_PRIMITIVE$1]) {
    var valueOf = SymbolPrototype$1.valueOf; // eslint-disable-next-line no-unused-vars -- required for .length

    redefine(SymbolPrototype$1, TO_PRIMITIVE$1, function (hint) {
      // TODO: improve hint logic
      return functionCall(valueOf, this);
    });
  } // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag


  setToStringTag($Symbol, SYMBOL);
  hiddenKeys$1[HIDDEN] = true;

  var defineProperty$d = objectDefineProperty.f;
  var NativeSymbol = global_1.Symbol;
  var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;

  if (descriptors && isCallable(NativeSymbol) && (!('description' in SymbolPrototype) || // Safari 12 bug
  NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description

    var SymbolWrapper = function _Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString_1(arguments[0]);
      var result = objectIsPrototypeOf(SymbolPrototype, this) ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };

    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    SymbolWrapper.prototype = SymbolPrototype;
    SymbolPrototype.constructor = SymbolWrapper;
    var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
    var symbolToString = functionUncurryThis(SymbolPrototype.toString);
    var symbolValueOf = functionUncurryThis(SymbolPrototype.valueOf);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace$b = functionUncurryThis(''.replace);
    var stringSlice$f = functionUncurryThis(''.slice);
    defineProperty$d(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = symbolValueOf(this);
        var string = symbolToString(symbol);
        if (hasOwnProperty_1(EmptyStringDescriptionStore, symbol)) return '';
        var desc = NATIVE_SYMBOL ? stringSlice$f(string, 7, -1) : replace$b(string, regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    _export({
      global: true,
      forced: true
    }, {
      Symbol: SymbolWrapper
    });
  }

  // https://tc39.es/ecma262/#sec-symbol.asynciterator

  defineWellKnownSymbol('asyncIterator');

  // https://tc39.es/ecma262/#sec-symbol.hasinstance

  defineWellKnownSymbol('hasInstance');

  // https://tc39.es/ecma262/#sec-symbol.isconcatspreadable

  defineWellKnownSymbol('isConcatSpreadable');

  // https://tc39.es/ecma262/#sec-symbol.iterator

  defineWellKnownSymbol('iterator');

  // https://tc39.es/ecma262/#sec-symbol.match

  defineWellKnownSymbol('match');

  // https://tc39.es/ecma262/#sec-symbol.matchall

  defineWellKnownSymbol('matchAll');

  // https://tc39.es/ecma262/#sec-symbol.replace

  defineWellKnownSymbol('replace');

  // https://tc39.es/ecma262/#sec-symbol.search

  defineWellKnownSymbol('search');

  // https://tc39.es/ecma262/#sec-symbol.species

  defineWellKnownSymbol('species');

  // https://tc39.es/ecma262/#sec-symbol.split

  defineWellKnownSymbol('split');

  // https://tc39.es/ecma262/#sec-symbol.toprimitive

  defineWellKnownSymbol('toPrimitive');

  // https://tc39.es/ecma262/#sec-symbol.tostringtag

  defineWellKnownSymbol('toStringTag');

  // https://tc39.es/ecma262/#sec-symbol.unscopables

  defineWellKnownSymbol('unscopables');

  var String$4 = global_1.String;
  var TypeError$n = global_1.TypeError;

  var aPossiblePrototype = function aPossiblePrototype(argument) {
    if (_typeof(argument) == 'object' || isCallable(argument)) return argument;
    throw TypeError$n("Can't set " + String$4(argument) + ' as a prototype');
  };

  /* eslint-disable no-proto -- safe */
  // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe

  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;

    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = functionUncurryThis(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }

    return function setPrototypeOf(O, proto) {
      anObject(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);

  var inheritIfRequired = function inheritIfRequired($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if ( // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) objectSetPrototypeOf($this, NewTargetPrototype);
    return $this;
  };

  var normalizeStringArgument = function normalizeStringArgument(argument, $default) {
    return argument === undefined ? arguments.length < 2 ? '' : $default : toString_1(argument);
  };

  // https://tc39.es/proposal-error-cause/#sec-errorobjects-install-error-cause

  var installErrorCause = function installErrorCause(O, options) {
    if (isObject(options) && 'cause' in options) {
      createNonEnumerableProperty(O, 'cause', options.cause);
    }
  };

  var replace$a = functionUncurryThis(''.replace);

  var TEST = function (arg) {
    return String(Error(arg).stack);
  }('zxcasd');

  var V8_OR_CHAKRA_STACK_ENTRY = /\n\s*at [^:]*:[^\n]*/;
  var IS_V8_OR_CHAKRA_STACK = V8_OR_CHAKRA_STACK_ENTRY.test(TEST);

  var clearErrorStack = function clearErrorStack(stack, dropEntries) {
    if (IS_V8_OR_CHAKRA_STACK && typeof stack == 'string') {
      while (dropEntries--) {
        stack = replace$a(stack, V8_OR_CHAKRA_STACK_ENTRY, '');
      }
    }

    return stack;
  };

  var errorStackInstallable = !fails(function () {
    var error = Error('a');
    if (!('stack' in error)) return true; // eslint-disable-next-line es/no-object-defineproperty -- safe

    Object.defineProperty(error, 'stack', createPropertyDescriptor(1, 7));
    return error.stack !== 7;
  });

  var wrapErrorConstructorWithCause = function wrapErrorConstructorWithCause(FULL_NAME, wrapper, FORCED, IS_AGGREGATE_ERROR) {
    var OPTIONS_POSITION = IS_AGGREGATE_ERROR ? 2 : 1;
    var path = FULL_NAME.split('.');
    var ERROR_NAME = path[path.length - 1];
    var OriginalError = getBuiltIn.apply(null, path);
    if (!OriginalError) return;
    var OriginalErrorPrototype = OriginalError.prototype; // V8 9.3- bug https://bugs.chromium.org/p/v8/issues/detail?id=12006

    if (hasOwnProperty_1(OriginalErrorPrototype, 'cause')) delete OriginalErrorPrototype.cause;
    if (!FORCED) return OriginalError;
    var BaseError = getBuiltIn('Error');
    var WrappedError = wrapper(function (a, b) {
      var message = normalizeStringArgument(IS_AGGREGATE_ERROR ? b : a, undefined);
      var result = IS_AGGREGATE_ERROR ? new OriginalError(a) : new OriginalError();
      if (message !== undefined) createNonEnumerableProperty(result, 'message', message);
      if (errorStackInstallable) createNonEnumerableProperty(result, 'stack', clearErrorStack(result.stack, 2));
      if (this && objectIsPrototypeOf(OriginalErrorPrototype, this)) inheritIfRequired(result, this, WrappedError);
      if (arguments.length > OPTIONS_POSITION) installErrorCause(result, arguments[OPTIONS_POSITION]);
      return result;
    });
    WrappedError.prototype = OriginalErrorPrototype;

    if (ERROR_NAME !== 'Error') {
      if (objectSetPrototypeOf) objectSetPrototypeOf(WrappedError, BaseError);else copyConstructorProperties(WrappedError, BaseError, {
        name: true
      });
    }

    copyConstructorProperties(WrappedError, OriginalError);
    try {
      // Safari 13- bug: WebAssembly errors does not have a proper `.name`
      if (OriginalErrorPrototype.name !== ERROR_NAME) {
        createNonEnumerableProperty(OriginalErrorPrototype, 'name', ERROR_NAME);
      }

      OriginalErrorPrototype.constructor = WrappedError;
    } catch (error) {
      /* empty */
    }
    return WrappedError;
  };

  /* eslint-disable no-unused-vars -- required for functions `.length` */

  var WEB_ASSEMBLY = 'WebAssembly';
  var WebAssembly$1 = global_1[WEB_ASSEMBLY];
  var FORCED$q = Error('e', {
    cause: 7
  }).cause !== 7;

  var exportGlobalErrorCauseWrapper = function exportGlobalErrorCauseWrapper(ERROR_NAME, wrapper) {
    var O = {};
    O[ERROR_NAME] = wrapErrorConstructorWithCause(ERROR_NAME, wrapper, FORCED$q);
    _export({
      global: true,
      forced: FORCED$q
    }, O);
  };

  var exportWebAssemblyErrorCauseWrapper = function exportWebAssemblyErrorCauseWrapper(ERROR_NAME, wrapper) {
    if (WebAssembly$1 && WebAssembly$1[ERROR_NAME]) {
      var O = {};
      O[ERROR_NAME] = wrapErrorConstructorWithCause(WEB_ASSEMBLY + '.' + ERROR_NAME, wrapper, FORCED$q);
      _export({
        target: WEB_ASSEMBLY,
        stat: true,
        forced: FORCED$q
      }, O);
    }
  }; // https://github.com/tc39/proposal-error-cause


  exportGlobalErrorCauseWrapper('Error', function (init) {
    return function Error(message) {
      return functionApply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('EvalError', function (init) {
    return function EvalError(message) {
      return functionApply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('RangeError', function (init) {
    return function RangeError(message) {
      return functionApply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('ReferenceError', function (init) {
    return function ReferenceError(message) {
      return functionApply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('SyntaxError', function (init) {
    return function SyntaxError(message) {
      return functionApply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('TypeError', function (init) {
    return function TypeError(message) {
      return functionApply(init, this, arguments);
    };
  });
  exportGlobalErrorCauseWrapper('URIError', function (init) {
    return function URIError(message) {
      return functionApply(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('CompileError', function (init) {
    return function CompileError(message) {
      return functionApply(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('LinkError', function (init) {
    return function LinkError(message) {
      return functionApply(init, this, arguments);
    };
  });
  exportWebAssemblyErrorCauseWrapper('RuntimeError', function (init) {
    return function RuntimeError(message) {
      return functionApply(init, this, arguments);
    };
  });

  var nativeErrorToString = Error.prototype.toString;
  var INCORRECT_TO_STRING$1 = fails(function () {
    if (descriptors) {
      // Chrome 32- incorrectly call accessor
      // eslint-disable-next-line es/no-object-defineproperty -- safe
      var object = objectCreate(Object.defineProperty({}, 'name', {
        get: function get() {
          return this === object;
        }
      }));
      if (nativeErrorToString.call(object) !== 'true') return true;
    } // FF10- does not properly handle non-strings


    return nativeErrorToString.call({
      message: 1,
      name: 2
    }) !== '2: 1' // IE8 does not properly handle defaults
    || nativeErrorToString.call({}) !== 'Error';
  });
  var errorToString = INCORRECT_TO_STRING$1 ? function toString() {
    var O = anObject(this);
    var name = normalizeStringArgument(O.name, 'Error');
    var message = normalizeStringArgument(O.message);
    return !name ? message : !message ? name : name + ': ' + message;
  } : nativeErrorToString;

  var ErrorPrototype$1 = Error.prototype; // `Error.prototype.toString` method fix
  // https://tc39.es/ecma262/#sec-error.prototype.tostring

  if (ErrorPrototype$1.toString !== errorToString) {
    redefine(ErrorPrototype$1, 'toString', errorToString);
  }

  var correctPrototypeGetter = !fails(function () {
    function F() {
      /* empty */
    }

    F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing

    return Object.getPrototypeOf(new F()) !== F.prototype;
  });

  var IE_PROTO = sharedKey('IE_PROTO');
  var Object$2 = global_1.Object;
  var ObjectPrototype$3 = Object$2.prototype; // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof

  var objectGetPrototypeOf = correctPrototypeGetter ? Object$2.getPrototypeOf : function (O) {
    var object = toObject(O);
    if (hasOwnProperty_1(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;

    if (isCallable(constructor) && object instanceof constructor) {
      return constructor.prototype;
    }

    return object instanceof Object$2 ? ObjectPrototype$3 : null;
  };

  var iterators = {};

  var ITERATOR$a = wellKnownSymbol('iterator');
  var ArrayPrototype$1 = Array.prototype; // check on default Array iterator

  var isArrayIteratorMethod = function isArrayIteratorMethod(it) {
    return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$a] === it);
  };

  var ITERATOR$9 = wellKnownSymbol('iterator');

  var getIteratorMethod = function getIteratorMethod(it) {
    if (it != undefined) return getMethod(it, ITERATOR$9) || getMethod(it, '@@iterator') || iterators[classof(it)];
  };

  var TypeError$m = global_1.TypeError;

  var getIterator = function getIterator(argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod(argument) : usingIterator;
    if (aCallable(iteratorMethod)) return anObject(functionCall(iteratorMethod, argument));
    throw TypeError$m(tryToString(argument) + ' is not iterable');
  };

  var iteratorClose = function iteratorClose(iterator, kind, value) {
    var innerResult, innerError;
    anObject(iterator);

    try {
      innerResult = getMethod(iterator, 'return');

      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }

      innerResult = functionCall(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }

    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject(innerResult);
    return value;
  };

  var TypeError$l = global_1.TypeError;

  var Result = function Result(stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };

  var ResultPrototype = Result.prototype;

  var iterate = function iterate(iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = functionBindContext(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;

    var stop = function stop(condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };

    var callFn = function callFn(value) {
      if (AS_ENTRIES) {
        anObject(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }

      return INTERRUPTED ? fn(value, stop) : fn(value);
    };

    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw TypeError$l(tryToString(iterable) + ' is not iterable'); // optimisation for array iterators

      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && objectIsPrototypeOf(ResultPrototype, result)) return result;
        }

        return new Result(false);
      }

      iterator = getIterator(iterable, iterFn);
    }

    next = iterator.next;

    while (!(step = functionCall(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }

      if (_typeof(result) == 'object' && result && objectIsPrototypeOf(ResultPrototype, result)) return result;
    }

    return new Result(false);
  };

  var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
  var Error$5 = global_1.Error;
  var push$a = [].push;

  var $AggregateError$1 = function AggregateError(errors, message
  /* , options */
  ) {
    var options = arguments.length > 2 ? arguments[2] : undefined;
    var isInstance = objectIsPrototypeOf(AggregateErrorPrototype, this);
    var that;

    if (objectSetPrototypeOf) {
      that = objectSetPrototypeOf(new Error$5(), isInstance ? objectGetPrototypeOf(this) : AggregateErrorPrototype);
    } else {
      that = isInstance ? this : objectCreate(AggregateErrorPrototype);
      createNonEnumerableProperty(that, TO_STRING_TAG$2, 'Error');
    }

    if (message !== undefined) createNonEnumerableProperty(that, 'message', normalizeStringArgument(message));
    if (errorStackInstallable) createNonEnumerableProperty(that, 'stack', clearErrorStack(that.stack, 1));
    installErrorCause(that, options);
    var errorsArray = [];
    iterate(errors, push$a, {
      that: errorsArray
    });
    createNonEnumerableProperty(that, 'errors', errorsArray);
    return that;
  };

  if (objectSetPrototypeOf) objectSetPrototypeOf($AggregateError$1, Error$5);else copyConstructorProperties($AggregateError$1, Error$5, {
    name: true
  });
  var AggregateErrorPrototype = $AggregateError$1.prototype = objectCreate(Error$5.prototype, {
    constructor: createPropertyDescriptor(1, $AggregateError$1),
    message: createPropertyDescriptor(1, ''),
    name: createPropertyDescriptor(1, 'AggregateError')
  }); // `AggregateError` constructor
  // https://tc39.es/ecma262/#sec-aggregate-error-constructor

  _export({
    global: true
  }, {
    AggregateError: $AggregateError$1
  });

  var AGGREGATE_ERROR = 'AggregateError';
  var $AggregateError = getBuiltIn(AGGREGATE_ERROR);
  var FORCED$p = !fails(function () {
    return $AggregateError([1]).errors[0] !== 1;
  }) && fails(function () {
    return $AggregateError([1], AGGREGATE_ERROR, {
      cause: 7
    }).cause !== 7;
  }); // https://github.com/tc39/proposal-error-cause

  _export({
    global: true,
    forced: FORCED$p
  }, {
    AggregateError: wrapErrorConstructorWithCause(AGGREGATE_ERROR, function (init) {
      // eslint-disable-next-line no-unused-vars -- required for functions `.length`
      return function AggregateError(errors, message) {
        return functionApply(init, this, arguments);
      };
    }, FORCED$p, true)
  });

  var UNSCOPABLES = wellKnownSymbol('unscopables');
  var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: objectCreate(null)
    });
  } // add a key to Array.prototype[@@unscopables]


  var addToUnscopables = function addToUnscopables(key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };

  // https://github.com/tc39/proposal-relative-indexing-method


  _export({
    target: 'Array',
    proto: true
  }, {
    at: function at(index) {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      var relativeIndex = toIntegerOrInfinity(index);
      var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
      return k < 0 || k >= len ? undefined : O[k];
    }
  });
  addToUnscopables('at');

  var SPECIES$5 = wellKnownSymbol('species');

  var arrayMethodHasSpeciesSupport = function arrayMethodHasSpeciesSupport(METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
      var array = [];
      var constructor = array.constructor = {};

      constructor[SPECIES$5] = function () {
        return {
          foo: 1
        };
      };

      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };

  var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
  var TypeError$k = global_1.TypeError; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679

  var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

  var isConcatSpreadable = function isConcatSpreadable(O) {
    if (!isObject(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
  };

  var FORCED$o = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species

  _export({
    target: 'Array',
    proto: true,
    forced: FORCED$o
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;

      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];

        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike(E);
          if (n + len > MAX_SAFE_INTEGER$1) throw TypeError$k(MAXIMUM_ALLOWED_INDEX_EXCEEDED);

          for (k = 0; k < len; k++, n++) {
            if (k in E) createProperty(A, n, E[k]);
          }
        } else {
          if (n >= MAX_SAFE_INTEGER$1) throw TypeError$k(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty(A, n++, E);
        }
      }

      A.length = n;
      return A;
    }
  });

  var min$7 = Math.min; // `Array.prototype.copyWithin` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.copywithin
  // eslint-disable-next-line es/no-array-prototype-copywithin -- safe

  var arrayCopyWithin = [].copyWithin || function copyWithin(target
  /* = 0 */
  , start
  /* = 0, end = @length */
  ) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var to = toAbsoluteIndex(target, len);
    var from = toAbsoluteIndex(start, len);
    var end = arguments.length > 2 ? arguments[2] : undefined;
    var count = min$7((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
    var inc = 1;

    if (from < to && to < from + count) {
      inc = -1;
      from += count - 1;
      to += count - 1;
    }

    while (count-- > 0) {
      if (from in O) O[to] = O[from];else delete O[to];
      to += inc;
      from += inc;
    }

    return O;
  };

  // https://tc39.es/ecma262/#sec-array.prototype.copywithin

  _export({
    target: 'Array',
    proto: true
  }, {
    copyWithin: arrayCopyWithin
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('copyWithin');

  var arrayMethodIsStrict = function arrayMethodIsStrict(METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails(function () {
      // eslint-disable-next-line no-useless-call -- required for testing
      method.call(null, argument || function () {
        return 1;
      }, 1);
    });
  };

  var $every$1 = arrayIteration.every;
  var STRICT_METHOD$8 = arrayMethodIsStrict('every'); // `Array.prototype.every` method
  // https://tc39.es/ecma262/#sec-array.prototype.every

  _export({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$8
  }, {
    every: function every(callbackfn
    /* , thisArg */
    ) {
      return $every$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype.fill


  var arrayFill = function fill(value
  /* , start = 0, end = @length */
  ) {
    var O = toObject(this);
    var length = lengthOfArrayLike(O);
    var argumentsLength = arguments.length;
    var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
    var end = argumentsLength > 2 ? arguments[2] : undefined;
    var endPos = end === undefined ? length : toAbsoluteIndex(end, length);

    while (endPos > index) {
      O[index++] = value;
    }

    return O;
  };

  // https://tc39.es/ecma262/#sec-array.prototype.fill

  _export({
    target: 'Array',
    proto: true
  }, {
    fill: arrayFill
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('fill');

  var $filter$1 = arrayIteration.filter;
  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('filter'); // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species

  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$3
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $find$1 = arrayIteration.find;
  var FIND = 'find';
  var SKIPS_HOLES$1 = true; // Shouldn't skip holes

  if (FIND in []) Array(1)[FIND](function () {
    SKIPS_HOLES$1 = false;
  }); // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find

  _export({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES$1
  }, {
    find: function find(callbackfn
    /* , that = undefined */
    ) {
      return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables(FIND);

  var $findIndex$1 = arrayIteration.findIndex;
  var FIND_INDEX = 'findIndex';
  var SKIPS_HOLES = true; // Shouldn't skip holes

  if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () {
    SKIPS_HOLES = false;
  }); // `Array.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-array.prototype.findindex

  _export({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
  }, {
    findIndex: function findIndex(callbackfn
    /* , that = undefined */
    ) {
      return $findIndex$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables(FIND_INDEX);

  var TypeError$j = global_1.TypeError; // `FlattenIntoArray` abstract operation
  // https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray

  var flattenIntoArray = function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
    var targetIndex = start;
    var sourceIndex = 0;
    var mapFn = mapper ? functionBindContext(mapper, thisArg) : false;
    var element, elementLen;

    while (sourceIndex < sourceLen) {
      if (sourceIndex in source) {
        element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

        if (depth > 0 && isArray(element)) {
          elementLen = lengthOfArrayLike(element);
          targetIndex = flattenIntoArray(target, original, element, elementLen, targetIndex, depth - 1) - 1;
        } else {
          if (targetIndex >= 0x1FFFFFFFFFFFFF) throw TypeError$j('Exceed the acceptable array length');
          target[targetIndex] = element;
        }

        targetIndex++;
      }

      sourceIndex++;
    }

    return targetIndex;
  };

  var flattenIntoArray_1 = flattenIntoArray;

  // https://tc39.es/ecma262/#sec-array.prototype.flat


  _export({
    target: 'Array',
    proto: true
  }, {
    flat: function
      /* depthArg = 1 */
    flat() {
      var depthArg = arguments.length ? arguments[0] : undefined;
      var O = toObject(this);
      var sourceLen = lengthOfArrayLike(O);
      var A = arraySpeciesCreate(O, 0);
      A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, depthArg === undefined ? 1 : toIntegerOrInfinity(depthArg));
      return A;
    }
  });

  // https://tc39.es/ecma262/#sec-array.prototype.flatmap


  _export({
    target: 'Array',
    proto: true
  }, {
    flatMap: function flatMap(callbackfn
    /* , thisArg */
    ) {
      var O = toObject(this);
      var sourceLen = lengthOfArrayLike(O);
      var A;
      aCallable(callbackfn);
      A = arraySpeciesCreate(O, 0);
      A.length = flattenIntoArray_1(A, O, O, sourceLen, 0, 1, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
      return A;
    }
  });

  var $forEach$1 = arrayIteration.forEach;
  var STRICT_METHOD$7 = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach

  var arrayForEach = !STRICT_METHOD$7 ? function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;

  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  // eslint-disable-next-line es/no-array-prototype-foreach -- safe


  _export({
    target: 'Array',
    proto: true,
    forced: [].forEach != arrayForEach
  }, {
    forEach: arrayForEach
  });

  var callWithSafeIterationClosing = function callWithSafeIterationClosing(iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose(iterator, 'throw', error);
    }
  };

  var Array$7 = global_1.Array; // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from

  var arrayFrom = function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject(arrayLike);
    var IS_CONSTRUCTOR = isConstructor(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = functionBindContext(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod(O);
    var index = 0;
    var length, result, step, iterator, next, value; // if the target is not iterable or it's an array with the default iterator - use a simple case

    if (iteratorMethod && !(this == Array$7 && isArrayIteratorMethod(iteratorMethod))) {
      iterator = getIterator(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];

      for (; !(step = functionCall(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty(result, index, value);
      }
    } else {
      length = lengthOfArrayLike(O);
      result = IS_CONSTRUCTOR ? new this(length) : Array$7(length);

      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty(result, index, value);
      }
    }

    result.length = index;
    return result;
  };

  var ITERATOR$8 = wellKnownSymbol('iterator');
  var SAFE_CLOSING = false;

  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function next() {
        return {
          done: !!called++
        };
      },
      'return': function _return() {
        SAFE_CLOSING = true;
      }
    };

    iteratorWithReturn[ITERATOR$8] = function () {
      return this;
    }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing


    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }

  var checkCorrectnessOfIteration = function checkCorrectnessOfIteration(exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;

    try {
      var object = {};

      object[ITERATOR$8] = function () {
        return {
          next: function next() {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };

      exec(object);
    } catch (error) {
      /* empty */
    }

    return ITERATION_SUPPORT;
  };

  var INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  }); // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from

  _export({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION$1
  }, {
    from: arrayFrom
  });

  var $includes$1 = arrayIncludes.includes; // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes

  _export({
    target: 'Array',
    proto: true
  }, {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes$1(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('includes');

  /* eslint-disable es/no-array-prototype-indexof -- required for testing */


  var $IndexOf = arrayIncludes.indexOf;
  var un$IndexOf = functionUncurryThis([].indexOf);
  var NEGATIVE_ZERO$1 = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
  var STRICT_METHOD$6 = arrayMethodIsStrict('indexOf'); // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof

  _export({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO$1 || !STRICT_METHOD$6
  }, {
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO$1 // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
    }
  });

  // https://tc39.es/ecma262/#sec-array.isarray

  _export({
    target: 'Array',
    stat: true
  }, {
    isArray: isArray
  });

  var ITERATOR$7 = wellKnownSymbol('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object

  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
  /* eslint-disable es/no-array-prototype-keys -- safe */

  if ([].keys) {
    arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`

    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
      PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }

  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails(function () {
    var test = {}; // FF44- legacy iterators case

    return IteratorPrototype$2[ITERATOR$7].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator

  if (!isCallable(IteratorPrototype$2[ITERATOR$7])) {
    redefine(IteratorPrototype$2, ITERATOR$7, function () {
      return this;
    });
  }

  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };

  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;

  var returnThis$1 = function returnThis() {
    return this;
  };

  var createIteratorConstructor = function createIteratorConstructor(IteratorConstructor, NAME, next, ENUMERABLE_NEXT) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
      next: createPropertyDescriptor(+!ENUMERABLE_NEXT, next)
    });
    setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
    iterators[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };

  var PROPER_FUNCTION_NAME$3 = functionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var IteratorPrototype = iteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = iteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$6 = wellKnownSymbol('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';

  var returnThis = function returnThis() {
    return this;
  };

  var defineIterator = function defineIterator(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor(IteratorConstructor, NAME, next);

    var getIterationMethod = function getIterationMethod(KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];

      switch (KIND) {
        case KEYS:
          return function keys() {
            return new IteratorConstructor(this, KIND);
          };

        case VALUES:
          return function values() {
            return new IteratorConstructor(this, KIND);
          };

        case ENTRIES:
          return function entries() {
            return new IteratorConstructor(this, KIND);
          };
      }

      return function () {
        return new IteratorConstructor(this);
      };
    };

    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$6] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY; // fix native

    if (anyNativeIterator) {
      CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));

      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (objectSetPrototypeOf) {
            objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable(CurrentIteratorPrototype[ITERATOR$6])) {
            redefine(CurrentIteratorPrototype, ITERATOR$6, returnThis);
          }
        } // Set @@toStringTag to native iterators


        setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF


    if (PROPER_FUNCTION_NAME$3 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME$1) {
        createNonEnumerableProperty(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;

        defaultIterator = function values() {
          return functionCall(nativeIterator, this);
        };
      }
    } // export additional methods


    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine(IterablePrototype, KEY, methods[KEY]);
        }
      } else _export({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    } // define iterator


    if (IterablePrototype[ITERATOR$6] !== defaultIterator) {
      redefine(IterablePrototype, ITERATOR$6, defaultIterator, {
        name: DEFAULT
      });
    }

    iterators[NAME] = defaultIterator;
    return methods;
  };

  var defineProperty$c = objectDefineProperty.f;
  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$9 = internalState.set;
  var getInternalState$8 = internalState.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator

  var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
    setInternalState$9(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind

    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$8(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;

    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }

    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject

  var values = iterators.Arguments = iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries'); // V8 ~ Chrome 45- bug

  if (descriptors && values.name !== 'values') try {
    defineProperty$c(values, 'name', {
      value: 'values'
    });
  } catch (error) {
    /* empty */
  }

  var un$Join = functionUncurryThis([].join);
  var ES3_STRINGS = indexedObject != Object;
  var STRICT_METHOD$5 = arrayMethodIsStrict('join', ','); // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join

  _export({
    target: 'Array',
    proto: true,
    forced: ES3_STRINGS || !STRICT_METHOD$5
  }, {
    join: function join(separator) {
      return un$Join(toIndexedObject(this), separator === undefined ? ',' : separator);
    }
  });

  /* eslint-disable es/no-array-prototype-lastindexof -- safe */


  var min$6 = Math.min;
  var $lastIndexOf = [].lastIndexOf;
  var NEGATIVE_ZERO = !!$lastIndexOf && 1 / [1].lastIndexOf(1, -0) < 0;
  var STRICT_METHOD$4 = arrayMethodIsStrict('lastIndexOf');
  var FORCED$n = NEGATIVE_ZERO || !STRICT_METHOD$4; // `Array.prototype.lastIndexOf` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof

  var arrayLastIndexOf = FORCED$n ? function lastIndexOf(searchElement
  /* , fromIndex = @[*-1] */
  ) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return functionApply($lastIndexOf, this, arguments) || 0;
    var O = toIndexedObject(this);
    var length = lengthOfArrayLike(O);
    var index = length - 1;
    if (arguments.length > 1) index = min$6(index, toIntegerOrInfinity(arguments[1]));
    if (index < 0) index = length + index;

    for (; index >= 0; index--) {
      if (index in O && O[index] === searchElement) return index || 0;
    }

    return -1;
  } : $lastIndexOf;

  // https://tc39.es/ecma262/#sec-array.prototype.lastindexof
  // eslint-disable-next-line es/no-array-prototype-lastindexof -- required for testing

  _export({
    target: 'Array',
    proto: true,
    forced: arrayLastIndexOf !== [].lastIndexOf
  }, {
    lastIndexOf: arrayLastIndexOf
  });

  var $map$1 = arrayIteration.map;
  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('map'); // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species

  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$2
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var Array$6 = global_1.Array;
  var ISNT_GENERIC = fails(function () {
    function F() {
      /* empty */
    }

    return !(Array$6.of.call(F) instanceof F);
  }); // `Array.of` method
  // https://tc39.es/ecma262/#sec-array.of
  // WebKit Array.of isn't generic

  _export({
    target: 'Array',
    stat: true,
    forced: ISNT_GENERIC
  }, {
    of: function
      /* ...args */
    of() {
      var index = 0;
      var argumentsLength = arguments.length;
      var result = new (isConstructor(this) ? this : Array$6)(argumentsLength);

      while (argumentsLength > index) {
        createProperty(result, index, arguments[index++]);
      }

      result.length = argumentsLength;
      return result;
    }
  });

  var TypeError$i = global_1.TypeError; // `Array.prototype.{ reduce, reduceRight }` methods implementation

  var createMethod$4 = function createMethod(IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aCallable(callbackfn);
      var O = toObject(that);
      var self = indexedObject(O);
      var length = lengthOfArrayLike(O);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }

        index += i;

        if (IS_RIGHT ? index < 0 : length <= index) {
          throw TypeError$i('Reduce of empty array with no initial value');
        }
      }

      for (; IS_RIGHT ? index >= 0 : length > index; index += i) {
        if (index in self) {
          memo = callbackfn(memo, self[index], index, O);
        }
      }

      return memo;
    };
  };

  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod$4(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod$4(true)
  };

  var engineIsNode = classofRaw(global_1.process) == 'process';

  var $reduce$1 = arrayReduce.left;
  var STRICT_METHOD$3 = arrayMethodIsStrict('reduce'); // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var CHROME_BUG$1 = !engineIsNode && engineV8Version > 79 && engineV8Version < 83; // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce

  _export({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$3 || CHROME_BUG$1
  }, {
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      var length = arguments.length;
      return $reduce$1(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
  });

  var $reduceRight$1 = arrayReduce.right;
  var STRICT_METHOD$2 = arrayMethodIsStrict('reduceRight'); // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

  var CHROME_BUG = !engineIsNode && engineV8Version > 79 && engineV8Version < 83; // `Array.prototype.reduceRight` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduceright

  _export({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$2 || CHROME_BUG
  }, {
    reduceRight: function reduceRight(callbackfn
    /* , initialValue */
    ) {
      return $reduceRight$1(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var un$Reverse = functionUncurryThis([].reverse);
  var test$1 = [1, 2]; // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794

  _export({
    target: 'Array',
    proto: true,
    forced: String(test$1) === String(test$1.reverse())
  }, {
    reverse: function reverse() {
      // eslint-disable-next-line no-self-assign -- dirty hack
      if (isArray(this)) this.length = this.length;
      return un$Reverse(this);
    }
  });

  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('slice');
  var SPECIES$4 = wellKnownSymbol('species');
  var Array$5 = global_1.Array;
  var max$4 = Math.max; // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects

  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject(this);
      var length = lengthOfArrayLike(O);
      var k = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible

      var Constructor, result, n;

      if (isArray(O)) {
        Constructor = O.constructor; // cross-realm fallback

        if (isConstructor(Constructor) && (Constructor === Array$5 || isArray(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject(Constructor)) {
          Constructor = Constructor[SPECIES$4];
          if (Constructor === null) Constructor = undefined;
        }

        if (Constructor === Array$5 || Constructor === undefined) {
          return arraySlice$1(O, k, fin);
        }
      }

      result = new (Constructor === undefined ? Array$5 : Constructor)(max$4(fin - k, 0));

      for (n = 0; k < fin; k++, n++) {
        if (k in O) createProperty(result, n, O[k]);
      }

      result.length = n;
      return result;
    }
  });

  var $some$1 = arrayIteration.some;
  var STRICT_METHOD$1 = arrayMethodIsStrict('some'); // `Array.prototype.some` method
  // https://tc39.es/ecma262/#sec-array.prototype.some

  _export({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$1
  }, {
    some: function some(callbackfn
    /* , thisArg */
    ) {
      return $some$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var floor$a = Math.floor;

  var mergeSort = function mergeSort(array, comparefn) {
    var length = array.length;
    var middle = floor$a(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySliceSimple(array, 0, middle), comparefn), mergeSort(arraySliceSimple(array, middle), comparefn), comparefn);
  };

  var insertionSort = function insertionSort(array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;

    while (i < length) {
      j = i;
      element = array[i];

      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }

      if (j !== i++) array[j] = element;
    }

    return array;
  };

  var merge = function merge(array, left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;

    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
    }

    return array;
  };

  var arraySort = mergeSort;

  var firefox = engineUserAgent.match(/firefox\/(\d+)/i);
  var engineFfVersion = !!firefox && +firefox[1];

  var engineIsIeOrEdge = /MSIE|Trident/.test(engineUserAgent);

  var webkit = engineUserAgent.match(/AppleWebKit\/(\d+)\./);
  var engineWebkitVersion = !!webkit && +webkit[1];

  var test = [];
  var un$Sort$1 = functionUncurryThis(test.sort);
  var push$9 = functionUncurryThis(test.push); // IE8-

  var FAILS_ON_UNDEFINED = fails(function () {
    test.sort(undefined);
  }); // V8 bug

  var FAILS_ON_NULL = fails(function () {
    test.sort(null);
  }); // Old WebKit

  var STRICT_METHOD = arrayMethodIsStrict('sort');
  var STABLE_SORT$1 = !fails(function () {
    // feature detection can be too slow, so check engines versions
    if (engineV8Version) return engineV8Version < 70;
    if (engineFfVersion && engineFfVersion > 3) return;
    if (engineIsIeOrEdge) return true;
    if (engineWebkitVersion) return engineWebkitVersion < 603;
    var result = '';
    var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)

    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);

      switch (code) {
        case 66:
        case 69:
        case 70:
        case 72:
          value = 3;
          break;

        case 68:
        case 71:
          value = 4;
          break;

        default:
          value = 2;
      }

      for (index = 0; index < 47; index++) {
        test.push({
          k: chr + index,
          v: value
        });
      }
    }

    test.sort(function (a, b) {
      return b.v - a.v;
    });

    for (index = 0; index < test.length; index++) {
      chr = test[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }

    return result !== 'DGBEFHACIJK';
  });
  var FORCED$m = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD || !STABLE_SORT$1;

  var getSortCompare$1 = function getSortCompare(comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString_1(x) > toString_1(y) ? 1 : -1;
    };
  }; // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort


  _export({
    target: 'Array',
    proto: true,
    forced: FORCED$m
  }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable(comparefn);
      var array = toObject(this);
      if (STABLE_SORT$1) return comparefn === undefined ? un$Sort$1(array) : un$Sort$1(array, comparefn);
      var items = [];
      var arrayLength = lengthOfArrayLike(array);
      var itemsLength, index;

      for (index = 0; index < arrayLength; index++) {
        if (index in array) push$9(items, array[index]);
      }

      arraySort(items, getSortCompare$1(comparefn));
      itemsLength = items.length;
      index = 0;

      while (index < itemsLength) {
        array[index] = items[index++];
      }

      while (index < arrayLength) {
        delete array[index++];
      }

      return array;
    }
  });

  var SPECIES$3 = wellKnownSymbol('species');

  var setSpecies = function setSpecies(CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
    var defineProperty = objectDefineProperty.f;

    if (descriptors && Constructor && !Constructor[SPECIES$3]) {
      defineProperty(Constructor, SPECIES$3, {
        configurable: true,
        get: function get() {
          return this;
        }
      });
    }
  };

  // https://tc39.es/ecma262/#sec-get-array-@@species

  setSpecies('Array');

  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
  var TypeError$h = global_1.TypeError;
  var max$3 = Math.max;
  var min$5 = Math.min;
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species

  _export({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    splice: function splice(start, deleteCount
    /* , ...items */
    ) {
      var O = toObject(this);
      var len = lengthOfArrayLike(O);
      var actualStart = toAbsoluteIndex(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;

      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min$5(max$3(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
      }

      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
        throw TypeError$h(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }

      A = arraySpeciesCreate(O, actualDeleteCount);

      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty(A, k, O[from]);
      }

      A.length = actualDeleteCount;

      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];else delete O[to];
        }

        for (k = len; k > len - actualDeleteCount + insertCount; k--) {
          delete O[k - 1];
        }
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];else delete O[to];
        }
      }

      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }

      O.length = len - actualDeleteCount + insertCount;
      return A;
    }
  });

  // in popular engines, so it's moved to a separate module
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('flat');

  // in popular engines, so it's moved to a separate module
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables

  addToUnscopables('flatMap');

  // eslint-disable-next-line es/no-typed-arrays -- safe
  var arrayBufferNative = typeof ArrayBuffer != 'undefined' && typeof DataView != 'undefined';

  var redefineAll = function redefineAll(target, src, options) {
    for (var key in src) {
      redefine(target, key, src[key], options);
    }

    return target;
  };

  var TypeError$g = global_1.TypeError;

  var anInstance = function anInstance(it, Prototype) {
    if (objectIsPrototypeOf(Prototype, it)) return it;
    throw TypeError$g('Incorrect invocation');
  };

  var RangeError$b = global_1.RangeError; // `ToIndex` abstract operation
  // https://tc39.es/ecma262/#sec-toindex

  var toIndex = function toIndex(it) {
    if (it === undefined) return 0;
    var number = toIntegerOrInfinity(it);
    var length = toLength(number);
    if (number !== length) throw RangeError$b('Wrong length or index');
    return length;
  };

  var Array$4 = global_1.Array;
  var abs$8 = Math.abs;
  var pow$5 = Math.pow;
  var floor$9 = Math.floor;
  var log$8 = Math.log;
  var LN2$2 = Math.LN2;

  var pack = function pack(number, mantissaLength, bytes) {
    var buffer = Array$4(bytes);
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var rt = mantissaLength === 23 ? pow$5(2, -24) - pow$5(2, -77) : 0;
    var sign = number < 0 || number === 0 && 1 / number < 0 ? 1 : 0;
    var index = 0;
    var exponent, mantissa, c;
    number = abs$8(number); // eslint-disable-next-line no-self-compare -- NaN check

    if (number != number || number === Infinity) {
      // eslint-disable-next-line no-self-compare -- NaN check
      mantissa = number != number ? 1 : 0;
      exponent = eMax;
    } else {
      exponent = floor$9(log$8(number) / LN2$2);
      c = pow$5(2, -exponent);

      if (number * c < 1) {
        exponent--;
        c *= 2;
      }

      if (exponent + eBias >= 1) {
        number += rt / c;
      } else {
        number += rt * pow$5(2, 1 - eBias);
      }

      if (number * c >= 2) {
        exponent++;
        c /= 2;
      }

      if (exponent + eBias >= eMax) {
        mantissa = 0;
        exponent = eMax;
      } else if (exponent + eBias >= 1) {
        mantissa = (number * c - 1) * pow$5(2, mantissaLength);
        exponent = exponent + eBias;
      } else {
        mantissa = number * pow$5(2, eBias - 1) * pow$5(2, mantissaLength);
        exponent = 0;
      }
    }

    while (mantissaLength >= 8) {
      buffer[index++] = mantissa & 255;
      mantissa /= 256;
      mantissaLength -= 8;
    }

    exponent = exponent << mantissaLength | mantissa;
    exponentLength += mantissaLength;

    while (exponentLength > 0) {
      buffer[index++] = exponent & 255;
      exponent /= 256;
      exponentLength -= 8;
    }

    buffer[--index] |= sign * 128;
    return buffer;
  };

  var unpack = function unpack(buffer, mantissaLength) {
    var bytes = buffer.length;
    var exponentLength = bytes * 8 - mantissaLength - 1;
    var eMax = (1 << exponentLength) - 1;
    var eBias = eMax >> 1;
    var nBits = exponentLength - 7;
    var index = bytes - 1;
    var sign = buffer[index--];
    var exponent = sign & 127;
    var mantissa;
    sign >>= 7;

    while (nBits > 0) {
      exponent = exponent * 256 + buffer[index--];
      nBits -= 8;
    }

    mantissa = exponent & (1 << -nBits) - 1;
    exponent >>= -nBits;
    nBits += mantissaLength;

    while (nBits > 0) {
      mantissa = mantissa * 256 + buffer[index--];
      nBits -= 8;
    }

    if (exponent === 0) {
      exponent = 1 - eBias;
    } else if (exponent === eMax) {
      return mantissa ? NaN : sign ? -Infinity : Infinity;
    } else {
      mantissa = mantissa + pow$5(2, mantissaLength);
      exponent = exponent - eBias;
    }

    return (sign ? -1 : 1) * mantissa * pow$5(2, exponent - mantissaLength);
  };

  var ieee754 = {
    pack: pack,
    unpack: unpack
  };

  var getOwnPropertyNames$3 = objectGetOwnPropertyNames.f;
  var defineProperty$b = objectDefineProperty.f;
  var PROPER_FUNCTION_NAME$2 = functionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
  var getInternalState$7 = internalState.get;
  var setInternalState$8 = internalState.set;
  var ARRAY_BUFFER$1 = 'ArrayBuffer';
  var DATA_VIEW = 'DataView';
  var PROTOTYPE = 'prototype';
  var WRONG_LENGTH = 'Wrong length';
  var WRONG_INDEX = 'Wrong index';
  var NativeArrayBuffer$1 = global_1[ARRAY_BUFFER$1];
  var $ArrayBuffer = NativeArrayBuffer$1;
  var ArrayBufferPrototype = $ArrayBuffer && $ArrayBuffer[PROTOTYPE];
  var $DataView = global_1[DATA_VIEW];
  var DataViewPrototype$1 = $DataView && $DataView[PROTOTYPE];
  var ObjectPrototype$2 = Object.prototype;
  var Array$3 = global_1.Array;
  var RangeError$a = global_1.RangeError;
  var fill = functionUncurryThis(arrayFill);
  var reverse = functionUncurryThis([].reverse);
  var packIEEE754 = ieee754.pack;
  var unpackIEEE754 = ieee754.unpack;

  var packInt8 = function packInt8(number) {
    return [number & 0xFF];
  };

  var packInt16 = function packInt16(number) {
    return [number & 0xFF, number >> 8 & 0xFF];
  };

  var packInt32 = function packInt32(number) {
    return [number & 0xFF, number >> 8 & 0xFF, number >> 16 & 0xFF, number >> 24 & 0xFF];
  };

  var unpackInt32 = function unpackInt32(buffer) {
    return buffer[3] << 24 | buffer[2] << 16 | buffer[1] << 8 | buffer[0];
  };

  var packFloat32 = function packFloat32(number) {
    return packIEEE754(number, 23, 4);
  };

  var packFloat64 = function packFloat64(number) {
    return packIEEE754(number, 52, 8);
  };

  var addGetter = function addGetter(Constructor, key) {
    defineProperty$b(Constructor[PROTOTYPE], key, {
      get: function get() {
        return getInternalState$7(this)[key];
      }
    });
  };

  var get$1 = function get(view, count, index, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState$7(view);
    if (intIndex + count > store.byteLength) throw RangeError$a(WRONG_INDEX);
    var bytes = getInternalState$7(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = arraySliceSimple(bytes, start, start + count);
    return isLittleEndian ? pack : reverse(pack);
  };

  var set$2 = function set(view, count, index, conversion, value, isLittleEndian) {
    var intIndex = toIndex(index);
    var store = getInternalState$7(view);
    if (intIndex + count > store.byteLength) throw RangeError$a(WRONG_INDEX);
    var bytes = getInternalState$7(store.buffer).bytes;
    var start = intIndex + store.byteOffset;
    var pack = conversion(+value);

    for (var i = 0; i < count; i++) {
      bytes[start + i] = pack[isLittleEndian ? i : count - i - 1];
    }
  };

  if (!arrayBufferNative) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, ArrayBufferPrototype);
      var byteLength = toIndex(length);
      setInternalState$8(this, {
        bytes: fill(Array$3(byteLength), 0),
        byteLength: byteLength
      });
      if (!descriptors) this.byteLength = byteLength;
    };

    ArrayBufferPrototype = $ArrayBuffer[PROTOTYPE];

    $DataView = function DataView(buffer, byteOffset, byteLength) {
      anInstance(this, DataViewPrototype$1);
      anInstance(buffer, ArrayBufferPrototype);
      var bufferLength = getInternalState$7(buffer).byteLength;
      var offset = toIntegerOrInfinity(byteOffset);
      if (offset < 0 || offset > bufferLength) throw RangeError$a('Wrong offset');
      byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
      if (offset + byteLength > bufferLength) throw RangeError$a(WRONG_LENGTH);
      setInternalState$8(this, {
        buffer: buffer,
        byteLength: byteLength,
        byteOffset: offset
      });

      if (!descriptors) {
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = offset;
      }
    };

    DataViewPrototype$1 = $DataView[PROTOTYPE];

    if (descriptors) {
      addGetter($ArrayBuffer, 'byteLength');
      addGetter($DataView, 'buffer');
      addGetter($DataView, 'byteLength');
      addGetter($DataView, 'byteOffset');
    }

    redefineAll(DataViewPrototype$1, {
      getInt8: function getInt8(byteOffset) {
        return get$1(this, 1, byteOffset)[0] << 24 >> 24;
      },
      getUint8: function getUint8(byteOffset) {
        return get$1(this, 1, byteOffset)[0];
      },
      getInt16: function getInt16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
      },
      getUint16: function getUint16(byteOffset
      /* , littleEndian */
      ) {
        var bytes = get$1(this, 2, byteOffset, arguments.length > 1 ? arguments[1] : undefined);
        return bytes[1] << 8 | bytes[0];
      },
      getInt32: function getInt32(byteOffset
      /* , littleEndian */
      ) {
        return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined));
      },
      getUint32: function getUint32(byteOffset
      /* , littleEndian */
      ) {
        return unpackInt32(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined)) >>> 0;
      },
      getFloat32: function getFloat32(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get$1(this, 4, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 23);
      },
      getFloat64: function getFloat64(byteOffset
      /* , littleEndian */
      ) {
        return unpackIEEE754(get$1(this, 8, byteOffset, arguments.length > 1 ? arguments[1] : undefined), 52);
      },
      setInt8: function setInt8(byteOffset, value) {
        set$2(this, 1, byteOffset, packInt8, value);
      },
      setUint8: function setUint8(byteOffset, value) {
        set$2(this, 1, byteOffset, packInt8, value);
      },
      setInt16: function setInt16(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint16: function setUint16(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 2, byteOffset, packInt16, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setInt32: function setInt32(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setUint32: function setUint32(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 4, byteOffset, packInt32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat32: function setFloat32(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 4, byteOffset, packFloat32, value, arguments.length > 2 ? arguments[2] : undefined);
      },
      setFloat64: function setFloat64(byteOffset, value
      /* , littleEndian */
      ) {
        set$2(this, 8, byteOffset, packFloat64, value, arguments.length > 2 ? arguments[2] : undefined);
      }
    });
  } else {
    var INCORRECT_ARRAY_BUFFER_NAME = PROPER_FUNCTION_NAME$2 && NativeArrayBuffer$1.name !== ARRAY_BUFFER$1;
    /* eslint-disable no-new -- required for testing */

    if (!fails(function () {
      NativeArrayBuffer$1(1);
    }) || !fails(function () {
      new NativeArrayBuffer$1(-1);
    }) || fails(function () {
      new NativeArrayBuffer$1();
      new NativeArrayBuffer$1(1.5);
      new NativeArrayBuffer$1(NaN);
      return INCORRECT_ARRAY_BUFFER_NAME && !CONFIGURABLE_FUNCTION_NAME;
    })) {
      /* eslint-enable no-new -- required for testing */
      $ArrayBuffer = function ArrayBuffer(length) {
        anInstance(this, ArrayBufferPrototype);
        return new NativeArrayBuffer$1(toIndex(length));
      };

      $ArrayBuffer[PROTOTYPE] = ArrayBufferPrototype;

      for (var keys$2 = getOwnPropertyNames$3(NativeArrayBuffer$1), j$1 = 0, key$3; keys$2.length > j$1;) {
        if (!((key$3 = keys$2[j$1++]) in $ArrayBuffer)) {
          createNonEnumerableProperty($ArrayBuffer, key$3, NativeArrayBuffer$1[key$3]);
        }
      }

      ArrayBufferPrototype.constructor = $ArrayBuffer;
    } else if (INCORRECT_ARRAY_BUFFER_NAME && CONFIGURABLE_FUNCTION_NAME) {
      createNonEnumerableProperty(NativeArrayBuffer$1, 'name', ARRAY_BUFFER$1);
    } // WebKit bug - the same parent prototype for typed arrays and data view


    if (objectSetPrototypeOf && objectGetPrototypeOf(DataViewPrototype$1) !== ObjectPrototype$2) {
      objectSetPrototypeOf(DataViewPrototype$1, ObjectPrototype$2);
    } // iOS Safari 7.x bug


    var testView = new $DataView(new $ArrayBuffer(2));
    var $setInt8 = functionUncurryThis(DataViewPrototype$1.setInt8);
    testView.setInt8(0, 2147483648);
    testView.setInt8(1, 2147483649);
    if (testView.getInt8(0) || !testView.getInt8(1)) redefineAll(DataViewPrototype$1, {
      setInt8: function setInt8(byteOffset, value) {
        $setInt8(this, byteOffset, value << 24 >> 24);
      },
      setUint8: function setUint8(byteOffset, value) {
        $setInt8(this, byteOffset, value << 24 >> 24);
      }
    }, {
      unsafe: true
    });
  }

  setToStringTag($ArrayBuffer, ARRAY_BUFFER$1);
  setToStringTag($DataView, DATA_VIEW);
  var arrayBuffer = {
    ArrayBuffer: $ArrayBuffer,
    DataView: $DataView
  };

  var ARRAY_BUFFER = 'ArrayBuffer';
  var ArrayBuffer$3 = arrayBuffer[ARRAY_BUFFER];
  var NativeArrayBuffer = global_1[ARRAY_BUFFER]; // `ArrayBuffer` constructor
  // https://tc39.es/ecma262/#sec-arraybuffer-constructor

  _export({
    global: true,
    forced: NativeArrayBuffer !== ArrayBuffer$3
  }, {
    ArrayBuffer: ArrayBuffer$3
  });
  setSpecies(ARRAY_BUFFER);

  var defineProperty$a = objectDefineProperty.f;
  var Int8Array$4 = global_1.Int8Array;
  var Int8ArrayPrototype$1 = Int8Array$4 && Int8Array$4.prototype;
  var Uint8ClampedArray$1 = global_1.Uint8ClampedArray;
  var Uint8ClampedArrayPrototype = Uint8ClampedArray$1 && Uint8ClampedArray$1.prototype;
  var TypedArray = Int8Array$4 && objectGetPrototypeOf(Int8Array$4);
  var TypedArrayPrototype$1 = Int8ArrayPrototype$1 && objectGetPrototypeOf(Int8ArrayPrototype$1);
  var ObjectPrototype$1 = Object.prototype;
  var TypeError$f = global_1.TypeError;
  var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
  var TYPED_ARRAY_TAG = uid('TYPED_ARRAY_TAG');
  var TYPED_ARRAY_CONSTRUCTOR$1 = uid('TYPED_ARRAY_CONSTRUCTOR'); // Fixing native typed arrays in Opera Presto crashes the browser, see #595

  var NATIVE_ARRAY_BUFFER_VIEWS$2 = arrayBufferNative && !!objectSetPrototypeOf && classof(global_1.opera) !== 'Opera';
  var TYPED_ARRAY_TAG_REQUIRED = false;
  var NAME$1, Constructor, Prototype;
  var TypedArrayConstructorsList = {
    Int8Array: 1,
    Uint8Array: 1,
    Uint8ClampedArray: 1,
    Int16Array: 2,
    Uint16Array: 2,
    Int32Array: 4,
    Uint32Array: 4,
    Float32Array: 4,
    Float64Array: 8
  };
  var BigIntArrayConstructorsList = {
    BigInt64Array: 8,
    BigUint64Array: 8
  };

  var isView = function isView(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return klass === 'DataView' || hasOwnProperty_1(TypedArrayConstructorsList, klass) || hasOwnProperty_1(BigIntArrayConstructorsList, klass);
  };

  var isTypedArray = function isTypedArray(it) {
    if (!isObject(it)) return false;
    var klass = classof(it);
    return hasOwnProperty_1(TypedArrayConstructorsList, klass) || hasOwnProperty_1(BigIntArrayConstructorsList, klass);
  };

  var aTypedArray$n = function aTypedArray(it) {
    if (isTypedArray(it)) return it;
    throw TypeError$f('Target is not a typed array');
  };

  var aTypedArrayConstructor$3 = function aTypedArrayConstructor(C) {
    if (isCallable(C) && (!objectSetPrototypeOf || objectIsPrototypeOf(TypedArray, C))) return C;
    throw TypeError$f(tryToString(C) + ' is not a typed array constructor');
  };

  var exportTypedArrayMethod$o = function exportTypedArrayMethod(KEY, property, forced, options) {
    if (!descriptors) return;
    if (forced) for (var ARRAY in TypedArrayConstructorsList) {
      var TypedArrayConstructor = global_1[ARRAY];
      if (TypedArrayConstructor && hasOwnProperty_1(TypedArrayConstructor.prototype, KEY)) try {
        delete TypedArrayConstructor.prototype[KEY];
      } catch (error) {
        // old WebKit bug - some methods are non-configurable
        try {
          TypedArrayConstructor.prototype[KEY] = property;
        } catch (error2) {
          /* empty */
        }
      }
    }

    if (!TypedArrayPrototype$1[KEY] || forced) {
      redefine(TypedArrayPrototype$1, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && Int8ArrayPrototype$1[KEY] || property, options);
    }
  };

  var exportTypedArrayStaticMethod$2 = function exportTypedArrayStaticMethod(KEY, property, forced) {
    var ARRAY, TypedArrayConstructor;
    if (!descriptors) return;

    if (objectSetPrototypeOf) {
      if (forced) for (ARRAY in TypedArrayConstructorsList) {
        TypedArrayConstructor = global_1[ARRAY];
        if (TypedArrayConstructor && hasOwnProperty_1(TypedArrayConstructor, KEY)) try {
          delete TypedArrayConstructor[KEY];
        } catch (error) {
          /* empty */
        }
      }

      if (!TypedArray[KEY] || forced) {
        // V8 ~ Chrome 49-50 `%TypedArray%` methods are non-writable non-configurable
        try {
          return redefine(TypedArray, KEY, forced ? property : NATIVE_ARRAY_BUFFER_VIEWS$2 && TypedArray[KEY] || property);
        } catch (error) {
          /* empty */
        }
      } else return;
    }

    for (ARRAY in TypedArrayConstructorsList) {
      TypedArrayConstructor = global_1[ARRAY];

      if (TypedArrayConstructor && (!TypedArrayConstructor[KEY] || forced)) {
        redefine(TypedArrayConstructor, KEY, property);
      }
    }
  };

  for (NAME$1 in TypedArrayConstructorsList) {
    Constructor = global_1[NAME$1];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR$1, Constructor);else NATIVE_ARRAY_BUFFER_VIEWS$2 = false;
  }

  for (NAME$1 in BigIntArrayConstructorsList) {
    Constructor = global_1[NAME$1];
    Prototype = Constructor && Constructor.prototype;
    if (Prototype) createNonEnumerableProperty(Prototype, TYPED_ARRAY_CONSTRUCTOR$1, Constructor);
  } // WebKit bug - typed arrays constructors prototype is Object.prototype


  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !isCallable(TypedArray) || TypedArray === Function.prototype) {
    // eslint-disable-next-line no-shadow -- safe
    TypedArray = function TypedArray() {
      throw TypeError$f('Incorrect invocation');
    };

    if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME$1 in TypedArrayConstructorsList) {
      if (global_1[NAME$1]) objectSetPrototypeOf(global_1[NAME$1], TypedArray);
    }
  }

  if (!NATIVE_ARRAY_BUFFER_VIEWS$2 || !TypedArrayPrototype$1 || TypedArrayPrototype$1 === ObjectPrototype$1) {
    TypedArrayPrototype$1 = TypedArray.prototype;
    if (NATIVE_ARRAY_BUFFER_VIEWS$2) for (NAME$1 in TypedArrayConstructorsList) {
      if (global_1[NAME$1]) objectSetPrototypeOf(global_1[NAME$1].prototype, TypedArrayPrototype$1);
    }
  } // WebKit bug - one more object in Uint8ClampedArray prototype chain


  if (NATIVE_ARRAY_BUFFER_VIEWS$2 && objectGetPrototypeOf(Uint8ClampedArrayPrototype) !== TypedArrayPrototype$1) {
    objectSetPrototypeOf(Uint8ClampedArrayPrototype, TypedArrayPrototype$1);
  }

  if (descriptors && !hasOwnProperty_1(TypedArrayPrototype$1, TO_STRING_TAG$1)) {
    TYPED_ARRAY_TAG_REQUIRED = true;
    defineProperty$a(TypedArrayPrototype$1, TO_STRING_TAG$1, {
      get: function get() {
        return isObject(this) ? this[TYPED_ARRAY_TAG] : undefined;
      }
    });

    for (NAME$1 in TypedArrayConstructorsList) {
      if (global_1[NAME$1]) {
        createNonEnumerableProperty(global_1[NAME$1], TYPED_ARRAY_TAG, NAME$1);
      }
    }
  }

  var arrayBufferViewCore = {
    NATIVE_ARRAY_BUFFER_VIEWS: NATIVE_ARRAY_BUFFER_VIEWS$2,
    TYPED_ARRAY_CONSTRUCTOR: TYPED_ARRAY_CONSTRUCTOR$1,
    TYPED_ARRAY_TAG: TYPED_ARRAY_TAG_REQUIRED && TYPED_ARRAY_TAG,
    aTypedArray: aTypedArray$n,
    aTypedArrayConstructor: aTypedArrayConstructor$3,
    exportTypedArrayMethod: exportTypedArrayMethod$o,
    exportTypedArrayStaticMethod: exportTypedArrayStaticMethod$2,
    isView: isView,
    isTypedArray: isTypedArray,
    TypedArray: TypedArray,
    TypedArrayPrototype: TypedArrayPrototype$1
  };

  var NATIVE_ARRAY_BUFFER_VIEWS$1 = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS; // `ArrayBuffer.isView` method
  // https://tc39.es/ecma262/#sec-arraybuffer.isview

  _export({
    target: 'ArrayBuffer',
    stat: true,
    forced: !NATIVE_ARRAY_BUFFER_VIEWS$1
  }, {
    isView: arrayBufferViewCore.isView
  });

  var TypeError$e = global_1.TypeError; // `Assert: IsConstructor(argument) is true`

  var aConstructor = function aConstructor(argument) {
    if (isConstructor(argument)) return argument;
    throw TypeError$e(tryToString(argument) + ' is not a constructor');
  };

  var SPECIES$2 = wellKnownSymbol('species'); // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor

  var speciesConstructor = function speciesConstructor(O, defaultConstructor) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES$2]) == undefined ? defaultConstructor : aConstructor(S);
  };

  var ArrayBuffer$2 = arrayBuffer.ArrayBuffer;
  var DataView$1 = arrayBuffer.DataView;
  var DataViewPrototype = DataView$1.prototype;
  var un$ArrayBufferSlice = functionUncurryThis(ArrayBuffer$2.prototype.slice);
  var getUint8 = functionUncurryThis(DataViewPrototype.getUint8);
  var setUint8 = functionUncurryThis(DataViewPrototype.setUint8);
  var INCORRECT_SLICE = fails(function () {
    return !new ArrayBuffer$2(2).slice(1, undefined).byteLength;
  }); // `ArrayBuffer.prototype.slice` method
  // https://tc39.es/ecma262/#sec-arraybuffer.prototype.slice

  _export({
    target: 'ArrayBuffer',
    proto: true,
    unsafe: true,
    forced: INCORRECT_SLICE
  }, {
    slice: function slice(start, end) {
      if (un$ArrayBufferSlice && end === undefined) {
        return un$ArrayBufferSlice(anObject(this), start); // FF fix
      }

      var length = anObject(this).byteLength;
      var first = toAbsoluteIndex(start, length);
      var fin = toAbsoluteIndex(end === undefined ? length : end, length);
      var result = new (speciesConstructor(this, ArrayBuffer$2))(toLength(fin - first));
      var viewSource = new DataView$1(this);
      var viewTarget = new DataView$1(result);
      var index = 0;

      while (first < fin) {
        setUint8(viewTarget, index++, getUint8(viewSource, first++));
      }

      return result;
    }
  });

  // https://tc39.es/ecma262/#sec-dataview-constructor

  _export({
    global: true,
    forced: !arrayBufferNative
  }, {
    DataView: arrayBuffer.DataView
  });

  var FORCED$l = fails(function () {
    return new Date(16e11).getYear() !== 120;
  });
  var getFullYear = functionUncurryThis(Date.prototype.getFullYear); // `Date.prototype.getYear` method
  // https://tc39.es/ecma262/#sec-date.prototype.getyear

  _export({
    target: 'Date',
    proto: true,
    forced: FORCED$l
  }, {
    getYear: function getYear() {
      return getFullYear(this) - 1900;
    }
  });

  var Date$2 = global_1.Date;
  var getTime$4 = functionUncurryThis(Date$2.prototype.getTime); // `Date.now` method
  // https://tc39.es/ecma262/#sec-date.now

  _export({
    target: 'Date',
    stat: true
  }, {
    now: function now() {
      return getTime$4(new Date$2());
    }
  });

  var DatePrototype$3 = Date.prototype;
  var getTime$3 = functionUncurryThis(DatePrototype$3.getTime);
  var setFullYear = functionUncurryThis(DatePrototype$3.setFullYear); // `Date.prototype.setYear` method
  // https://tc39.es/ecma262/#sec-date.prototype.setyear

  _export({
    target: 'Date',
    proto: true
  }, {
    setYear: function setYear(year) {
      // validate
      getTime$3(this);
      var yi = toIntegerOrInfinity(year);
      var yyyy = 0 <= yi && yi <= 99 ? yi + 1900 : yi;
      return setFullYear(this, yyyy);
    }
  });

  // https://tc39.es/ecma262/#sec-date.prototype.togmtstring

  _export({
    target: 'Date',
    proto: true
  }, {
    toGMTString: Date.prototype.toUTCString
  });

  var RangeError$9 = global_1.RangeError; // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat

  var stringRepeat = function repeat(count) {
    var str = toString_1(requireObjectCoercible(this));
    var result = '';
    var n = toIntegerOrInfinity(count);
    if (n < 0 || n == Infinity) throw RangeError$9('Wrong number of repetitions');

    for (; n > 0; (n >>>= 1) && (str += str)) {
      if (n & 1) result += str;
    }

    return result;
  };

  var repeat$2 = functionUncurryThis(stringRepeat);
  var stringSlice$e = functionUncurryThis(''.slice);
  var ceil$1 = Math.ceil; // `String.prototype.{ padStart, padEnd }` methods implementation

  var createMethod$3 = function createMethod(IS_END) {
    return function ($this, maxLength, fillString) {
      var S = toString_1(requireObjectCoercible($this));
      var intMaxLength = toLength(maxLength);
      var stringLength = S.length;
      var fillStr = fillString === undefined ? ' ' : toString_1(fillString);
      var fillLen, stringFiller;
      if (intMaxLength <= stringLength || fillStr == '') return S;
      fillLen = intMaxLength - stringLength;
      stringFiller = repeat$2(fillStr, ceil$1(fillLen / fillStr.length));
      if (stringFiller.length > fillLen) stringFiller = stringSlice$e(stringFiller, 0, fillLen);
      return IS_END ? S + stringFiller : stringFiller + S;
    };
  };

  var stringPad = {
    // `String.prototype.padStart` method
    // https://tc39.es/ecma262/#sec-string.prototype.padstart
    start: createMethod$3(false),
    // `String.prototype.padEnd` method
    // https://tc39.es/ecma262/#sec-string.prototype.padend
    end: createMethod$3(true)
  };

  var padStart = stringPad.start;
  var RangeError$8 = global_1.RangeError;
  var abs$7 = Math.abs;
  var DatePrototype$2 = Date.prototype;
  var n$DateToISOString = DatePrototype$2.toISOString;
  var getTime$2 = functionUncurryThis(DatePrototype$2.getTime);
  var getUTCDate = functionUncurryThis(DatePrototype$2.getUTCDate);
  var getUTCFullYear = functionUncurryThis(DatePrototype$2.getUTCFullYear);
  var getUTCHours = functionUncurryThis(DatePrototype$2.getUTCHours);
  var getUTCMilliseconds = functionUncurryThis(DatePrototype$2.getUTCMilliseconds);
  var getUTCMinutes = functionUncurryThis(DatePrototype$2.getUTCMinutes);
  var getUTCMonth = functionUncurryThis(DatePrototype$2.getUTCMonth);
  var getUTCSeconds = functionUncurryThis(DatePrototype$2.getUTCSeconds); // `Date.prototype.toISOString` method implementation
  // https://tc39.es/ecma262/#sec-date.prototype.toisostring
  // PhantomJS / old WebKit fails here:

  var dateToIsoString = fails(function () {
    return n$DateToISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
  }) || !fails(function () {
    n$DateToISOString.call(new Date(NaN));
  }) ? function toISOString() {
    if (!isFinite(getTime$2(this))) throw RangeError$8('Invalid time value');
    var date = this;
    var year = getUTCFullYear(date);
    var milliseconds = getUTCMilliseconds(date);
    var sign = year < 0 ? '-' : year > 9999 ? '+' : '';
    return sign + padStart(abs$7(year), sign ? 6 : 4, 0) + '-' + padStart(getUTCMonth(date) + 1, 2, 0) + '-' + padStart(getUTCDate(date), 2, 0) + 'T' + padStart(getUTCHours(date), 2, 0) + ':' + padStart(getUTCMinutes(date), 2, 0) + ':' + padStart(getUTCSeconds(date), 2, 0) + '.' + padStart(milliseconds, 3, 0) + 'Z';
  } : n$DateToISOString;

  // https://tc39.es/ecma262/#sec-date.prototype.toisostring
  // PhantomJS / old WebKit has a broken implementations

  _export({
    target: 'Date',
    proto: true,
    forced: Date.prototype.toISOString !== dateToIsoString
  }, {
    toISOString: dateToIsoString
  });

  var FORCED$k = fails(function () {
    return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({
      toISOString: function toISOString() {
        return 1;
      }
    }) !== 1;
  }); // `Date.prototype.toJSON` method
  // https://tc39.es/ecma262/#sec-date.prototype.tojson

  _export({
    target: 'Date',
    proto: true,
    forced: FORCED$k
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    toJSON: function toJSON(key) {
      var O = toObject(this);
      var pv = toPrimitive(O, 'number');
      return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
    }
  });

  var TypeError$d = global_1.TypeError; // `Date.prototype[@@toPrimitive](hint)` method implementation
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive

  var dateToPrimitive = function dateToPrimitive(hint) {
    anObject(this);
    if (hint === 'string' || hint === 'default') hint = 'string';else if (hint !== 'number') throw TypeError$d('Incorrect hint');
    return ordinaryToPrimitive(this, hint);
  };

  var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
  var DatePrototype$1 = Date.prototype; // `Date.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive

  if (!hasOwnProperty_1(DatePrototype$1, TO_PRIMITIVE)) {
    redefine(DatePrototype$1, TO_PRIMITIVE, dateToPrimitive);
  }

  var DatePrototype = Date.prototype;
  var INVALID_DATE = 'Invalid Date';
  var TO_STRING$1 = 'toString';
  var un$DateToString = functionUncurryThis(DatePrototype[TO_STRING$1]);
  var getTime$1 = functionUncurryThis(DatePrototype.getTime); // `Date.prototype.toString` method
  // https://tc39.es/ecma262/#sec-date.prototype.tostring

  if (String(new Date(NaN)) != INVALID_DATE) {
    redefine(DatePrototype, TO_STRING$1, function toString() {
      var value = getTime$1(this); // eslint-disable-next-line no-self-compare -- NaN check

      return value === value ? un$DateToString(this) : INVALID_DATE;
    });
  }

  var charAt$e = functionUncurryThis(''.charAt);
  var charCodeAt$5 = functionUncurryThis(''.charCodeAt);
  var exec$8 = functionUncurryThis(/./.exec);
  var numberToString$2 = functionUncurryThis(1.0.toString);
  var toUpperCase = functionUncurryThis(''.toUpperCase);
  var raw = /[\w*+\-./@]/;

  var hex$1 = function hex(code, length) {
    var result = numberToString$2(code, 16);

    while (result.length < length) {
      result = '0' + result;
    }

    return result;
  }; // `escape` method
  // https://tc39.es/ecma262/#sec-escape-string


  _export({
    global: true
  }, {
    escape: function escape(string) {
      var str = toString_1(string);
      var result = '';
      var length = str.length;
      var index = 0;
      var chr, code;

      while (index < length) {
        chr = charAt$e(str, index++);

        if (exec$8(raw, chr)) {
          result += chr;
        } else {
          code = charCodeAt$5(chr, 0);

          if (code < 256) {
            result += '%' + hex$1(code, 2);
          } else {
            result += '%u' + toUpperCase(hex$1(code, 4));
          }
        }
      }

      return result;
    }
  });

  var Function$3 = global_1.Function;
  var concat$2 = functionUncurryThis([].concat);
  var join$6 = functionUncurryThis([].join);
  var factories = {};

  var construct = function construct(C, argsLength, args) {
    if (!hasOwnProperty_1(factories, argsLength)) {
      for (var list = [], i = 0; i < argsLength; i++) {
        list[i] = 'a[' + i + ']';
      }

      factories[argsLength] = Function$3('C,a', 'return new C(' + join$6(list, ',') + ')');
    }

    return factories[argsLength](C, args);
  }; // `Function.prototype.bind` method implementation
  // https://tc39.es/ecma262/#sec-function.prototype.bind


  var functionBind = functionBindNative ? Function$3.bind : function bind(that
  /* , ...args */
  ) {
    var F = aCallable(this);
    var Prototype = F.prototype;
    var partArgs = arraySlice$1(arguments, 1);

    var boundFunction = function
      /* args... */
    bound() {
      var args = concat$2(partArgs, arraySlice$1(arguments));
      return this instanceof boundFunction ? construct(F, args.length, args) : F.apply(that, args);
    };

    if (isObject(Prototype)) boundFunction.prototype = Prototype;
    return boundFunction;
  };

  // https://tc39.es/ecma262/#sec-function.prototype.bind

  _export({
    target: 'Function',
    proto: true,
    forced: Function.bind !== functionBind
  }, {
    bind: functionBind
  });

  var HAS_INSTANCE = wellKnownSymbol('hasInstance');
  var FunctionPrototype$1 = Function.prototype; // `Function.prototype[@@hasInstance]` method
  // https://tc39.es/ecma262/#sec-function.prototype-@@hasinstance

  if (!(HAS_INSTANCE in FunctionPrototype$1)) {
    objectDefineProperty.f(FunctionPrototype$1, HAS_INSTANCE, {
      value: function value(O) {
        if (!isCallable(this) || !isObject(O)) return false;
        var P = this.prototype;
        if (!isObject(P)) return O instanceof this; // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:

        while (O = objectGetPrototypeOf(O)) {
          if (P === O) return true;
        }

        return false;
      }
    });
  }

  var FUNCTION_NAME_EXISTS = functionName.EXISTS;
  var defineProperty$9 = objectDefineProperty.f;
  var FunctionPrototype = Function.prototype;
  var functionToString = functionUncurryThis(FunctionPrototype.toString);
  var nameRE = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/;
  var regExpExec = functionUncurryThis(nameRE.exec);
  var NAME = 'name'; // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name

  if (descriptors && !FUNCTION_NAME_EXISTS) {
    defineProperty$9(FunctionPrototype, NAME, {
      configurable: true,
      get: function get() {
        try {
          return regExpExec(nameRE, functionToString(this))[1];
        } catch (error) {
          return '';
        }
      }
    });
  }

  // https://tc39.es/ecma262/#sec-globalthis

  _export({
    global: true
  }, {
    globalThis: global_1
  });

  var Array$2 = global_1.Array;
  var $stringify = getBuiltIn('JSON', 'stringify');
  var exec$7 = functionUncurryThis(/./.exec);
  var charAt$d = functionUncurryThis(''.charAt);
  var charCodeAt$4 = functionUncurryThis(''.charCodeAt);
  var replace$9 = functionUncurryThis(''.replace);
  var numberToString$1 = functionUncurryThis(1.0.toString);
  var tester = /[\uD800-\uDFFF]/g;
  var low = /^[\uD800-\uDBFF]$/;
  var hi = /^[\uDC00-\uDFFF]$/;

  var fix = function fix(match, offset, string) {
    var prev = charAt$d(string, offset - 1);
    var next = charAt$d(string, offset + 1);

    if (exec$7(low, match) && !exec$7(hi, next) || exec$7(hi, match) && !exec$7(low, prev)) {
      return "\\u" + numberToString$1(charCodeAt$4(match, 0), 16);
    }

    return match;
  };

  var FORCED$j = fails(function () {
    return $stringify("\uDF06\uD834") !== "\"\\udf06\\ud834\"" || $stringify("\uDEAD") !== "\"\\udead\"";
  });

  if ($stringify) {
    // `JSON.stringify` method
    // https://tc39.es/ecma262/#sec-json.stringify
    // https://github.com/tc39/proposal-well-formed-stringify
    _export({
      target: 'JSON',
      stat: true,
      forced: FORCED$j
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        for (var i = 0, l = arguments.length, args = Array$2(l); i < l; i++) {
          args[i] = arguments[i];
        }

        var result = functionApply($stringify, null, args);
        return typeof result == 'string' ? replace$9(result, tester, fix) : result;
      }
    });
  }

  // https://tc39.es/ecma262/#sec-json-@@tostringtag

  setToStringTag(global_1.JSON, 'JSON', true);

  var arrayBufferNonExtensible = fails(function () {
    if (typeof ArrayBuffer == 'function') {
      var buffer = new ArrayBuffer(8); // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe

      if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', {
        value: 8
      });
    }
  });

  var $isExtensible = Object.isExtensible;
  var FAILS_ON_PRIMITIVES$9 = fails(function () {
    $isExtensible(1);
  }); // `Object.isExtensible` method
  // https://tc39.es/ecma262/#sec-object.isextensible

  var objectIsExtensible = FAILS_ON_PRIMITIVES$9 || arrayBufferNonExtensible ? function isExtensible(it) {
    if (!isObject(it)) return false;
    if (arrayBufferNonExtensible && classofRaw(it) == 'ArrayBuffer') return false;
    return $isExtensible ? $isExtensible(it) : true;
  } : $isExtensible;

  var freezing = !fails(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });

  var internalMetadata = createCommonjsModule(function (module) {
    var defineProperty = objectDefineProperty.f;
    var REQUIRED = false;
    var METADATA = uid('meta');
    var id = 0;

    var setMetadata = function setMetadata(it) {
      defineProperty(it, METADATA, {
        value: {
          objectID: 'O' + id++,
          // object ID
          weakData: {} // weak collections IDs

        }
      });
    };

    var fastKey = function fastKey(it, create) {
      // return a primitive with prefix
      if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

      if (!hasOwnProperty_1(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!objectIsExtensible(it)) return 'F'; // not necessary to add metadata

        if (!create) return 'E'; // add missing metadata

        setMetadata(it); // return object ID
      }

      return it[METADATA].objectID;
    };

    var getWeakData = function getWeakData(it, create) {
      if (!hasOwnProperty_1(it, METADATA)) {
        // can't set metadata to uncaught frozen object
        if (!objectIsExtensible(it)) return true; // not necessary to add metadata

        if (!create) return false; // add missing metadata

        setMetadata(it); // return the store of weak collections IDs
      }

      return it[METADATA].weakData;
    }; // add metadata on freeze-family methods calling


    var onFreeze = function onFreeze(it) {
      if (freezing && REQUIRED && objectIsExtensible(it) && !hasOwnProperty_1(it, METADATA)) setMetadata(it);
      return it;
    };

    var enable = function enable() {
      meta.enable = function () {
        /* empty */
      };

      REQUIRED = true;
      var getOwnPropertyNames = objectGetOwnPropertyNames.f;
      var splice = functionUncurryThis([].splice);
      var test = {};
      test[METADATA] = 1; // prevent exposing of metadata key

      if (getOwnPropertyNames(test).length) {
        objectGetOwnPropertyNames.f = function (it) {
          var result = getOwnPropertyNames(it);

          for (var i = 0, length = result.length; i < length; i++) {
            if (result[i] === METADATA) {
              splice(result, i, 1);
              break;
            }
          }

          return result;
        };

        _export({
          target: 'Object',
          stat: true,
          forced: true
        }, {
          getOwnPropertyNames: objectGetOwnPropertyNamesExternal.f
        });
      }
    };

    var meta = module.exports = {
      enable: enable,
      fastKey: fastKey,
      getWeakData: getWeakData,
      onFreeze: onFreeze
    };
    hiddenKeys$1[METADATA] = true;
  });

  var collection = function collection(CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global_1[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};

    var fixMethod = function fixMethod(KEY) {
      var uncurriedNativeMethod = functionUncurryThis(NativePrototype[KEY]);
      redefine(NativePrototype, KEY, KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      });
    };

    var REPLACE = isForced_1(CONSTRUCTOR_NAME, !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    })));

    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      internalMetadata.enable();
    } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor(); // early implementations not supports chaining

      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false

      var THROWS_ON_PRIMITIVES = fails(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing

      var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) {
        new NativeConstructor(iterable);
      }); // for early implementations -0 and +0 not the same

      var BUGGY_ZERO = !IS_WEAK && fails(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;

        while (index--) {
          $instance[ADDER](index, index);
        }

        return !$instance.has(-0);
      });

      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance(dummy, NativePrototype);
          var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP
          });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }

      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }

      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }

    exported[CONSTRUCTOR_NAME] = Constructor;
    _export({
      global: true,
      forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };

  var defineProperty$8 = objectDefineProperty.f;
  var fastKey = internalMetadata.fastKey;
  var setInternalState$7 = internalState.set;
  var internalStateGetterFor$1 = internalState.getterFor;
  var collectionStrong = {
    getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance(that, Prototype);
        setInternalState$7(that, {
          type: CONSTRUCTOR_NAME,
          index: objectCreate(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!descriptors) that.size = 0;
        if (iterable != undefined) iterate(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);

      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index; // change existing entry

        if (entry) {
          entry.value = value; // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (descriptors) state.size++;else that.size++; // add to index

          if (index !== 'F') state.index[index] = entry;
        }

        return that;
      };

      var getEntry = function getEntry(that, key) {
        var state = getInternalState(that); // fast case

        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index]; // frozen object case

        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };

      redefineAll(Prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;

          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }

          state.first = state.last = undefined;
          if (descriptors) state.size = 0;else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function _delete(key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);

          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (descriptors) state.size--;else that.size--;
          }

          return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          var state = getInternalState(this);
          var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          var entry;

          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this); // revert to the last existing entry

            while (entry && entry.removed) {
              entry = entry.previous;
            }
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      redefineAll(Prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (descriptors) defineProperty$8(Prototype, 'size', {
        get: function get() {
          return getInternalState(this).size;
        }
      });
      return Constructor;
    },
    setStrong: function setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME); // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator

      defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$7(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last; // revert to the last existing entry

        while (entry && entry.removed) {
          entry = entry.previous;
        } // get next entry


        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        } // return step by kind


        if (kind == 'keys') return {
          value: entry.key,
          done: false
        };
        if (kind == 'values') return {
          value: entry.value,
          done: false
        };
        return {
          value: [entry.key, entry.value],
          done: false
        };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species

      setSpecies(CONSTRUCTOR_NAME);
    }
  };

  // https://tc39.es/ecma262/#sec-map-objects


  collection('Map', function (init) {
    return function Map() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong);

  var log$7 = Math.log; // `Math.log1p` method implementation
  // https://tc39.es/ecma262/#sec-math.log1p
  // eslint-disable-next-line es/no-math-log1p -- safe

  var mathLog1p = Math.log1p || function log1p(x) {
    return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : log$7(1 + x);
  };

  var $acosh = Math.acosh;
  var log$6 = Math.log;
  var sqrt$2 = Math.sqrt;
  var LN2$1 = Math.LN2;
  var FORCED$i = !$acosh // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  || Math.floor($acosh(Number.MAX_VALUE)) != 710 // Tor Browser bug: Math.acosh(Infinity) -> NaN
  || $acosh(Infinity) != Infinity; // `Math.acosh` method
  // https://tc39.es/ecma262/#sec-math.acosh

  _export({
    target: 'Math',
    stat: true,
    forced: FORCED$i
  }, {
    acosh: function acosh(x) {
      return (x = +x) < 1 ? NaN : x > 94906265.62425156 ? log$6(x) + LN2$1 : mathLog1p(x - 1 + sqrt$2(x - 1) * sqrt$2(x + 1));
    }
  });

  var $asinh = Math.asinh;
  var log$5 = Math.log;
  var sqrt$1 = Math.sqrt;

  function asinh(x) {
    return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : log$5(x + sqrt$1(x * x + 1));
  } // `Math.asinh` method
  // https://tc39.es/ecma262/#sec-math.asinh
  // Tor Browser bug: Math.asinh(0) -> -0


  _export({
    target: 'Math',
    stat: true,
    forced: !($asinh && 1 / $asinh(0) > 0)
  }, {
    asinh: asinh
  });

  var $atanh = Math.atanh;
  var log$4 = Math.log; // `Math.atanh` method
  // https://tc39.es/ecma262/#sec-math.atanh
  // Tor Browser bug: Math.atanh(-0) -> 0

  _export({
    target: 'Math',
    stat: true,
    forced: !($atanh && 1 / $atanh(-0) < 0)
  }, {
    atanh: function atanh(x) {
      return (x = +x) == 0 ? x : log$4((1 + x) / (1 - x)) / 2;
    }
  });

  // `Math.sign` method implementation
  // https://tc39.es/ecma262/#sec-math.sign
  // eslint-disable-next-line es/no-math-sign -- safe
  var mathSign = Math.sign || function sign(x) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
  };

  var abs$6 = Math.abs;
  var pow$4 = Math.pow; // `Math.cbrt` method
  // https://tc39.es/ecma262/#sec-math.cbrt

  _export({
    target: 'Math',
    stat: true
  }, {
    cbrt: function cbrt(x) {
      return mathSign(x = +x) * pow$4(abs$6(x), 1 / 3);
    }
  });

  var floor$8 = Math.floor;
  var log$3 = Math.log;
  var LOG2E = Math.LOG2E; // `Math.clz32` method
  // https://tc39.es/ecma262/#sec-math.clz32

  _export({
    target: 'Math',
    stat: true
  }, {
    clz32: function clz32(x) {
      return (x >>>= 0) ? 31 - floor$8(log$3(x + 0.5) * LOG2E) : 32;
    }
  });

  // eslint-disable-next-line es/no-math-expm1 -- safe
  var $expm1 = Math.expm1;
  var exp$2 = Math.exp; // `Math.expm1` method implementation
  // https://tc39.es/ecma262/#sec-math.expm1

  var mathExpm1 = !$expm1 // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168 // Tor Browser bug
  || $expm1(-2e-17) != -2e-17 ? function expm1(x) {
    return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : exp$2(x) - 1;
  } : $expm1;

  var $cosh = Math.cosh;
  var abs$5 = Math.abs;
  var E$1 = Math.E; // `Math.cosh` method
  // https://tc39.es/ecma262/#sec-math.cosh

  _export({
    target: 'Math',
    stat: true,
    forced: !$cosh || $cosh(710) === Infinity
  }, {
    cosh: function cosh(x) {
      var t = mathExpm1(abs$5(x) - 1) + 1;
      return (t + 1 / (t * E$1 * E$1)) * (E$1 / 2);
    }
  });

  // https://tc39.es/ecma262/#sec-math.expm1
  // eslint-disable-next-line es/no-math-expm1 -- required for testing

  _export({
    target: 'Math',
    stat: true,
    forced: mathExpm1 != Math.expm1
  }, {
    expm1: mathExpm1
  });

  var abs$4 = Math.abs;
  var pow$3 = Math.pow;
  var EPSILON = pow$3(2, -52);
  var EPSILON32 = pow$3(2, -23);
  var MAX32 = pow$3(2, 127) * (2 - EPSILON32);
  var MIN32 = pow$3(2, -126);

  var roundTiesToEven = function roundTiesToEven(n) {
    return n + 1 / EPSILON - 1 / EPSILON;
  }; // `Math.fround` method implementation
  // https://tc39.es/ecma262/#sec-math.fround
  // eslint-disable-next-line es/no-math-fround -- safe


  var mathFround = Math.fround || function fround(x) {
    var $abs = abs$4(x);
    var $sign = mathSign(x);
    var a, result;
    if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs); // eslint-disable-next-line no-self-compare -- NaN check

    if (result > MAX32 || result != result) return $sign * Infinity;
    return $sign * result;
  };

  // https://tc39.es/ecma262/#sec-math.fround

  _export({
    target: 'Math',
    stat: true
  }, {
    fround: mathFround
  });

  var $hypot = Math.hypot;
  var abs$3 = Math.abs;
  var sqrt = Math.sqrt; // Chrome 77 bug
  // https://bugs.chromium.org/p/v8/issues/detail?id=9546

  var BUGGY = !!$hypot && $hypot(Infinity, NaN) !== Infinity; // `Math.hypot` method
  // https://tc39.es/ecma262/#sec-math.hypot

  _export({
    target: 'Math',
    stat: true,
    forced: BUGGY
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    hypot: function hypot(value1, value2) {
      var sum = 0;
      var i = 0;
      var aLen = arguments.length;
      var larg = 0;
      var arg, div;

      while (i < aLen) {
        arg = abs$3(arguments[i++]);

        if (larg < arg) {
          div = larg / arg;
          sum = sum * div * div + 1;
          larg = arg;
        } else if (arg > 0) {
          div = arg / larg;
          sum += div * div;
        } else sum += arg;
      }

      return larg === Infinity ? Infinity : larg * sqrt(sum);
    }
  });

  var $imul = Math.imul;
  var FORCED$h = fails(function () {
    return $imul(0xFFFFFFFF, 5) != -5 || $imul.length != 2;
  }); // `Math.imul` method
  // https://tc39.es/ecma262/#sec-math.imul
  // some WebKit versions fails with big numbers, some has wrong arity

  _export({
    target: 'Math',
    stat: true,
    forced: FORCED$h
  }, {
    imul: function imul(x, y) {
      var UINT16 = 0xFFFF;
      var xn = +x;
      var yn = +y;
      var xl = UINT16 & xn;
      var yl = UINT16 & yn;
      return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
    }
  });

  var log$2 = Math.log;
  var LOG10E = Math.LOG10E; // eslint-disable-next-line es/no-math-log10 -- safe

  var mathLog10 = Math.log10 || function log10(x) {
    return log$2(x) * LOG10E;
  };

  // https://tc39.es/ecma262/#sec-math.log10

  _export({
    target: 'Math',
    stat: true
  }, {
    log10: mathLog10
  });

  // https://tc39.es/ecma262/#sec-math.log1p

  _export({
    target: 'Math',
    stat: true
  }, {
    log1p: mathLog1p
  });

  var log$1 = Math.log;
  var LN2 = Math.LN2; // `Math.log2` method
  // https://tc39.es/ecma262/#sec-math.log2

  _export({
    target: 'Math',
    stat: true
  }, {
    log2: function log2(x) {
      return log$1(x) / LN2;
    }
  });

  // https://tc39.es/ecma262/#sec-math.sign

  _export({
    target: 'Math',
    stat: true
  }, {
    sign: mathSign
  });

  var abs$2 = Math.abs;
  var exp$1 = Math.exp;
  var E = Math.E;
  var FORCED$g = fails(function () {
    // eslint-disable-next-line es/no-math-sinh -- required for testing
    return Math.sinh(-2e-17) != -2e-17;
  }); // `Math.sinh` method
  // https://tc39.es/ecma262/#sec-math.sinh
  // V8 near Chromium 38 has a problem with very small numbers

  _export({
    target: 'Math',
    stat: true,
    forced: FORCED$g
  }, {
    sinh: function sinh(x) {
      return abs$2(x = +x) < 1 ? (mathExpm1(x) - mathExpm1(-x)) / 2 : (exp$1(x - 1) - exp$1(-x - 1)) * (E / 2);
    }
  });

  var exp = Math.exp; // `Math.tanh` method
  // https://tc39.es/ecma262/#sec-math.tanh

  _export({
    target: 'Math',
    stat: true
  }, {
    tanh: function tanh(x) {
      var a = mathExpm1(x = +x);
      var b = mathExpm1(-x);
      return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
    }
  });

  // https://tc39.es/ecma262/#sec-math-@@tostringtag

  setToStringTag(Math, 'Math', true);

  var ceil = Math.ceil;
  var floor$7 = Math.floor; // `Math.trunc` method
  // https://tc39.es/ecma262/#sec-math.trunc

  _export({
    target: 'Math',
    stat: true
  }, {
    trunc: function trunc(it) {
      return (it > 0 ? floor$7 : ceil)(it);
    }
  });

  // https://tc39.es/ecma262/#sec-thisnumbervalue

  var thisNumberValue = functionUncurryThis(1.0.valueOf);

  // a string of all valid unicode whitespaces
  var whitespaces$1 = "\t\n\x0B\f\r \xA0\u1680\u2000\u2001\u2002" + "\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF";

  var replace$8 = functionUncurryThis(''.replace);
  var whitespace = '[' + whitespaces$1 + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation

  var createMethod$2 = function createMethod(TYPE) {
    return function ($this) {
      var string = toString_1(requireObjectCoercible($this));
      if (TYPE & 1) string = replace$8(string, ltrim, '');
      if (TYPE & 2) string = replace$8(string, rtrim, '');
      return string;
    };
  };

  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$2(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$2(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$2(3)
  };

  var getOwnPropertyNames$2 = objectGetOwnPropertyNames.f;
  var getOwnPropertyDescriptor$6 = objectGetOwnPropertyDescriptor.f;
  var defineProperty$7 = objectDefineProperty.f;
  var trim$2 = stringTrim.trim;
  var NUMBER = 'Number';
  var NativeNumber = global_1[NUMBER];
  var NumberPrototype = NativeNumber.prototype;
  var TypeError$c = global_1.TypeError;
  var arraySlice = functionUncurryThis(''.slice);
  var charCodeAt$3 = functionUncurryThis(''.charCodeAt); // `ToNumeric` abstract operation
  // https://tc39.es/ecma262/#sec-tonumeric

  var toNumeric = function toNumeric(value) {
    var primValue = toPrimitive(value, 'number');
    return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
  }; // `ToNumber` abstract operation
  // https://tc39.es/ecma262/#sec-tonumber


  var toNumber = function toNumber(argument) {
    var it = toPrimitive(argument, 'number');
    var first, third, radix, maxCode, digits, length, index, code;
    if (isSymbol(it)) throw TypeError$c('Cannot convert a Symbol value to a number');

    if (typeof it == 'string' && it.length > 2) {
      it = trim$2(it);
      first = charCodeAt$3(it, 0);

      if (first === 43 || first === 45) {
        third = charCodeAt$3(it, 2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (charCodeAt$3(it, 1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal of /^0b[01]+$/i

          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal of /^0o[0-7]+$/i

          default:
            return +it;
        }

        digits = arraySlice(it, 2);
        length = digits.length;

        for (index = 0; index < length; index++) {
          code = charCodeAt$3(digits, index); // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols

          if (code < 48 || code > maxCode) return NaN;
        }

        return parseInt(digits, radix);
      }
    }

    return +it;
  }; // `Number` constructor
  // https://tc39.es/ecma262/#sec-number-constructor


  if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number(value) {
      var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
      var dummy = this; // check on 1..constructor(foo) case

      return objectIsPrototypeOf(NumberPrototype, dummy) && fails(function () {
        thisNumberValue(dummy);
      }) ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
    };

    for (var keys$1 = descriptors ? getOwnPropertyNames$2(NativeNumber) : ( // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' + // ESNext
    'fromString,range').split(','), j = 0, key$2; keys$1.length > j; j++) {
      if (hasOwnProperty_1(NativeNumber, key$2 = keys$1[j]) && !hasOwnProperty_1(NumberWrapper, key$2)) {
        defineProperty$7(NumberWrapper, key$2, getOwnPropertyDescriptor$6(NativeNumber, key$2));
      }
    }

    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    redefine(global_1, NUMBER, NumberWrapper);
  }

  // https://tc39.es/ecma262/#sec-number.epsilon

  _export({
    target: 'Number',
    stat: true
  }, {
    EPSILON: Math.pow(2, -52)
  });

  var globalIsFinite = global_1.isFinite; // `Number.isFinite` method
  // https://tc39.es/ecma262/#sec-number.isfinite
  // eslint-disable-next-line es/no-number-isfinite -- safe

  var numberIsFinite = Number.isFinite || function isFinite(it) {
    return typeof it == 'number' && globalIsFinite(it);
  };

  // https://tc39.es/ecma262/#sec-number.isfinite

  _export({
    target: 'Number',
    stat: true
  }, {
    isFinite: numberIsFinite
  });

  var floor$6 = Math.floor; // `IsIntegralNumber` abstract operation
  // https://tc39.es/ecma262/#sec-isintegralnumber
  // eslint-disable-next-line es/no-number-isinteger -- safe

  var isIntegralNumber = Number.isInteger || function isInteger(it) {
    return !isObject(it) && isFinite(it) && floor$6(it) === it;
  };

  // https://tc39.es/ecma262/#sec-number.isinteger

  _export({
    target: 'Number',
    stat: true
  }, {
    isInteger: isIntegralNumber
  });

  // https://tc39.es/ecma262/#sec-number.isnan

  _export({
    target: 'Number',
    stat: true
  }, {
    isNaN: function isNaN(number) {
      // eslint-disable-next-line no-self-compare -- NaN check
      return number != number;
    }
  });

  var abs$1 = Math.abs; // `Number.isSafeInteger` method
  // https://tc39.es/ecma262/#sec-number.issafeinteger

  _export({
    target: 'Number',
    stat: true
  }, {
    isSafeInteger: function isSafeInteger(number) {
      return isIntegralNumber(number) && abs$1(number) <= 0x1FFFFFFFFFFFFF;
    }
  });

  // https://tc39.es/ecma262/#sec-number.max_safe_integer

  _export({
    target: 'Number',
    stat: true
  }, {
    MAX_SAFE_INTEGER: 0x1FFFFFFFFFFFFF
  });

  // https://tc39.es/ecma262/#sec-number.min_safe_integer

  _export({
    target: 'Number',
    stat: true
  }, {
    MIN_SAFE_INTEGER: -0x1FFFFFFFFFFFFF
  });

  var trim$1 = stringTrim.trim;
  var charAt$c = functionUncurryThis(''.charAt);
  var n$ParseFloat = global_1.parseFloat;
  var _Symbol$1 = global_1.Symbol;
  var ITERATOR$5 = _Symbol$1 && _Symbol$1.iterator;
  var FORCED$f = 1 / n$ParseFloat(whitespaces$1 + '-0') !== -Infinity // MS Edge 18- broken with boxed symbols
  || ITERATOR$5 && !fails(function () {
    n$ParseFloat(Object(ITERATOR$5));
  }); // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string

  var numberParseFloat = FORCED$f ? function parseFloat(string) {
    var trimmedString = trim$1(toString_1(string));
    var result = n$ParseFloat(trimmedString);
    return result === 0 && charAt$c(trimmedString, 0) == '-' ? -0 : result;
  } : n$ParseFloat;

  // https://tc39.es/ecma262/#sec-number.parseFloat
  // eslint-disable-next-line es/no-number-parsefloat -- required for testing

  _export({
    target: 'Number',
    stat: true,
    forced: Number.parseFloat != numberParseFloat
  }, {
    parseFloat: numberParseFloat
  });

  var trim = stringTrim.trim;
  var $parseInt = global_1.parseInt;
  var _Symbol = global_1.Symbol;
  var ITERATOR$4 = _Symbol && _Symbol.iterator;
  var hex = /^[+-]?0x/i;
  var exec$6 = functionUncurryThis(hex.exec);
  var FORCED$e = $parseInt(whitespaces$1 + '08') !== 8 || $parseInt(whitespaces$1 + '0x16') !== 22 // MS Edge 18- broken with boxed symbols
  || ITERATOR$4 && !fails(function () {
    $parseInt(Object(ITERATOR$4));
  }); // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix

  var numberParseInt = FORCED$e ? function parseInt(string, radix) {
    var S = trim(toString_1(string));
    return $parseInt(S, radix >>> 0 || (exec$6(hex, S) ? 16 : 10));
  } : $parseInt;

  // https://tc39.es/ecma262/#sec-number.parseint
  // eslint-disable-next-line es/no-number-parseint -- required for testing

  _export({
    target: 'Number',
    stat: true,
    forced: Number.parseInt != numberParseInt
  }, {
    parseInt: numberParseInt
  });

  var RangeError$7 = global_1.RangeError;
  var String$3 = global_1.String;
  var isFinite$1 = global_1.isFinite;
  var abs = Math.abs;
  var floor$5 = Math.floor;
  var pow$2 = Math.pow;
  var round = Math.round;
  var un$ToExponential = functionUncurryThis(1.0.toExponential);
  var repeat$1 = functionUncurryThis(stringRepeat);
  var stringSlice$d = functionUncurryThis(''.slice); // Edge 17-

  var ROUNDS_PROPERLY = un$ToExponential(-6.9e-11, 4) === '-6.9000e-11' // IE11- && Edge 14-
  && un$ToExponential(1.255, 2) === '1.25e+0' // FF86-, V8 ~ Chrome 49-50
  && un$ToExponential(12345, 3) === '1.235e+4' // FF86-, V8 ~ Chrome 49-50
  && un$ToExponential(25, 0) === '3e+1'; // IE8-

  var THROWS_ON_INFINITY_FRACTION = fails(function () {
    un$ToExponential(1, Infinity);
  }) && fails(function () {
    un$ToExponential(1, -Infinity);
  }); // Safari <11 && FF <50

  var PROPER_NON_FINITE_THIS_CHECK = !fails(function () {
    un$ToExponential(Infinity, Infinity);
  }) && !fails(function () {
    un$ToExponential(NaN, Infinity);
  });
  var FORCED$d = !ROUNDS_PROPERLY || !THROWS_ON_INFINITY_FRACTION || !PROPER_NON_FINITE_THIS_CHECK; // `Number.prototype.toExponential` method
  // https://tc39.es/ecma262/#sec-number.prototype.toexponential

  _export({
    target: 'Number',
    proto: true,
    forced: FORCED$d
  }, {
    toExponential: function toExponential(fractionDigits) {
      var x = thisNumberValue(this);
      if (fractionDigits === undefined) return un$ToExponential(x);
      var f = toIntegerOrInfinity(fractionDigits);
      if (!isFinite$1(x)) return String$3(x); // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation

      if (f < 0 || f > 20) throw RangeError$7('Incorrect fraction digits');
      if (ROUNDS_PROPERLY) return un$ToExponential(x, f);
      var s = '';
      var m = '';
      var e = 0;
      var c = '';
      var d = '';

      if (x < 0) {
        s = '-';
        x = -x;
      }

      if (x === 0) {
        e = 0;
        m = repeat$1('0', f + 1);
      } else {
        // this block is based on https://gist.github.com/SheetJSDev/1100ad56b9f856c95299ed0e068eea08
        // TODO: improve accuracy with big fraction digits
        var l = mathLog10(x);
        e = floor$5(l);
        var n = 0;
        var w = pow$2(10, e - f);
        n = round(x / w);

        if (2 * x >= (2 * n + 1) * w) {
          n += 1;
        }

        if (n >= pow$2(10, f + 1)) {
          n /= 10;
          e += 1;
        }

        m = String$3(n);
      }

      if (f !== 0) {
        m = stringSlice$d(m, 0, 1) + '.' + stringSlice$d(m, 1);
      }

      if (e === 0) {
        c = '+';
        d = '0';
      } else {
        c = e > 0 ? '+' : '-';
        d = String$3(abs(e));
      }

      m += 'e' + c + d;
      return s + m;
    }
  });

  var RangeError$6 = global_1.RangeError;
  var String$2 = global_1.String;
  var floor$4 = Math.floor;
  var repeat = functionUncurryThis(stringRepeat);
  var stringSlice$c = functionUncurryThis(''.slice);
  var un$ToFixed = functionUncurryThis(1.0.toFixed);

  var pow$1 = function pow(x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };

  var log = function log(x) {
    var n = 0;
    var x2 = x;

    while (x2 >= 4096) {
      n += 12;
      x2 /= 4096;
    }

    while (x2 >= 2) {
      n += 1;
      x2 /= 2;
    }

    return n;
  };

  var multiply = function multiply(data, n, c) {
    var index = -1;
    var c2 = c;

    while (++index < 6) {
      c2 += n * data[index];
      data[index] = c2 % 1e7;
      c2 = floor$4(c2 / 1e7);
    }
  };

  var divide = function divide(data, n) {
    var index = 6;
    var c = 0;

    while (--index >= 0) {
      c += data[index];
      data[index] = floor$4(c / n);
      c = c % n * 1e7;
    }
  };

  var dataToString = function dataToString(data) {
    var index = 6;
    var s = '';

    while (--index >= 0) {
      if (s !== '' || index === 0 || data[index] !== 0) {
        var t = String$2(data[index]);
        s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
      }
    }

    return s;
  };

  var FORCED$c = fails(function () {
    return un$ToFixed(0.00008, 3) !== '0.000' || un$ToFixed(0.9, 0) !== '1' || un$ToFixed(1.255, 2) !== '1.25' || un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
  }) || !fails(function () {
    // V8 ~ Android 4.3-
    un$ToFixed({});
  }); // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed

  _export({
    target: 'Number',
    proto: true,
    forced: FORCED$c
  }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue(this);
      var fractDigits = toIntegerOrInfinity(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k; // TODO: ES2018 increased the maximum number of fraction digits to 100, need to improve the implementation

      if (fractDigits < 0 || fractDigits > 20) throw RangeError$6('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare -- NaN check

      if (number != number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return String$2(number);

      if (number < 0) {
        sign = '-';
        number = -number;
      }

      if (number > 1e-21) {
        e = log(number * pow$1(2, 69, 1)) - 69;
        z = e < 0 ? number * pow$1(2, -e, 1) : number / pow$1(2, e, 1);
        z *= 0x10000000000000;
        e = 52 - e;

        if (e > 0) {
          multiply(data, 0, z);
          j = fractDigits;

          while (j >= 7) {
            multiply(data, 1e7, 0);
            j -= 7;
          }

          multiply(data, pow$1(10, j, 1), 0);
          j = e - 1;

          while (j >= 23) {
            divide(data, 1 << 23);
            j -= 23;
          }

          divide(data, 1 << j);
          multiply(data, 1, 1);
          divide(data, 2);
          result = dataToString(data);
        } else {
          multiply(data, 0, z);
          multiply(data, 1 << -e, 0);
          result = dataToString(data) + repeat('0', fractDigits);
        }
      }

      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits ? '0.' + repeat('0', fractDigits - k) + result : stringSlice$c(result, 0, k - fractDigits) + '.' + stringSlice$c(result, k - fractDigits));
      } else {
        result = sign + result;
      }

      return result;
    }
  });

  var un$ToPrecision = functionUncurryThis(1.0.toPrecision);
  var FORCED$b = fails(function () {
    // IE7-
    return un$ToPrecision(1, undefined) !== '1';
  }) || !fails(function () {
    // V8 ~ Android 4.3-
    un$ToPrecision({});
  }); // `Number.prototype.toPrecision` method
  // https://tc39.es/ecma262/#sec-number.prototype.toprecision

  _export({
    target: 'Number',
    proto: true,
    forced: FORCED$b
  }, {
    toPrecision: function toPrecision(precision) {
      return precision === undefined ? un$ToPrecision(thisNumberValue(this)) : un$ToPrecision(thisNumberValue(this), precision);
    }
  });

  var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing

  var defineProperty$6 = Object.defineProperty;
  var concat$1 = functionUncurryThis([].concat); // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign

  var objectAssign = !$assign || fails(function () {
    // should have correct order of operations (Edge bug)
    if (descriptors && $assign({
      b: 1
    }, $assign(defineProperty$6({}, 'a', {
      enumerable: true,
      get: function get() {
        defineProperty$6(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)

    var A = {};
    var B = {}; // eslint-disable-next-line es/no-symbol -- safe

    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $assign({}, A)[symbol] != 7 || objectKeys$1($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    var propertyIsEnumerable = objectPropertyIsEnumerable.f;

    while (argumentsLength > index) {
      var S = indexedObject(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat$1(objectKeys$1(S), getOwnPropertySymbols(S)) : objectKeys$1(S);
      var length = keys.length;
      var j = 0;
      var key;

      while (length > j) {
        key = keys[j++];
        if (!descriptors || functionCall(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    }

    return T;
  } : $assign;

  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing

  _export({
    target: 'Object',
    stat: true,
    forced: Object.assign !== objectAssign
  }, {
    assign: objectAssign
  });

  // https://tc39.es/ecma262/#sec-object.create

  _export({
    target: 'Object',
    stat: true,
    sham: !descriptors
  }, {
    create: objectCreate
  });

  var objectPrototypeAccessorsForced = !fails(function () {
    // This feature detection crashes old WebKit
    // https://github.com/zloirock/core-js/issues/232
    if (engineWebkitVersion && engineWebkitVersion < 535) return;
    var key = Math.random(); // In FF throws only define methods
    // eslint-disable-next-line no-undef, no-useless-call -- required for testing

    __defineSetter__.call(null, key, function () {
      /* empty */
    });

    delete global_1[key];
  });

  // https://tc39.es/ecma262/#sec-object.prototype.__defineGetter__


  if (descriptors) {
    _export({
      target: 'Object',
      proto: true,
      forced: objectPrototypeAccessorsForced
    }, {
      __defineGetter__: function __defineGetter__(P, getter) {
        objectDefineProperty.f(toObject(this), P, {
          get: aCallable(getter),
          enumerable: true,
          configurable: true
        });
      }
    });
  }

  var defineProperties$2 = objectDefineProperties.f; // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe

  _export({
    target: 'Object',
    stat: true,
    forced: Object.defineProperties !== defineProperties$2,
    sham: !descriptors
  }, {
    defineProperties: defineProperties$2
  });

  var defineProperty$5 = objectDefineProperty.f; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  // eslint-disable-next-line es/no-object-defineproperty -- safe

  _export({
    target: 'Object',
    stat: true,
    forced: Object.defineProperty !== defineProperty$5,
    sham: !descriptors
  }, {
    defineProperty: defineProperty$5
  });

  // https://tc39.es/ecma262/#sec-object.prototype.__defineSetter__


  if (descriptors) {
    _export({
      target: 'Object',
      proto: true,
      forced: objectPrototypeAccessorsForced
    }, {
      __defineSetter__: function __defineSetter__(P, setter) {
        objectDefineProperty.f(toObject(this), P, {
          set: aCallable(setter),
          enumerable: true,
          configurable: true
        });
      }
    });
  }

  var $propertyIsEnumerable = objectPropertyIsEnumerable.f;
  var propertyIsEnumerable = functionUncurryThis($propertyIsEnumerable);
  var push$8 = functionUncurryThis([].push); // `Object.{ entries, values }` methods implementation

  var createMethod$1 = function createMethod(TO_ENTRIES) {
    return function (it) {
      var O = toIndexedObject(it);
      var keys = objectKeys$1(O);
      var length = keys.length;
      var i = 0;
      var result = [];
      var key;

      while (length > i) {
        key = keys[i++];

        if (!descriptors || propertyIsEnumerable(O, key)) {
          push$8(result, TO_ENTRIES ? [key, O[key]] : O[key]);
        }
      }

      return result;
    };
  };

  var objectToArray = {
    // `Object.entries` method
    // https://tc39.es/ecma262/#sec-object.entries
    entries: createMethod$1(true),
    // `Object.values` method
    // https://tc39.es/ecma262/#sec-object.values
    values: createMethod$1(false)
  };

  var $entries = objectToArray.entries; // `Object.entries` method
  // https://tc39.es/ecma262/#sec-object.entries

  _export({
    target: 'Object',
    stat: true
  }, {
    entries: function entries(O) {
      return $entries(O);
    }
  });

  var onFreeze$2 = internalMetadata.onFreeze; // eslint-disable-next-line es/no-object-freeze -- safe

  var $freeze = Object.freeze;
  var FAILS_ON_PRIMITIVES$8 = fails(function () {
    $freeze(1);
  }); // `Object.freeze` method
  // https://tc39.es/ecma262/#sec-object.freeze

  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$8,
    sham: !freezing
  }, {
    freeze: function freeze(it) {
      return $freeze && isObject(it) ? $freeze(onFreeze$2(it)) : it;
    }
  });

  // https://github.com/tc39/proposal-object-from-entries

  _export({
    target: 'Object',
    stat: true
  }, {
    fromEntries: function fromEntries(iterable) {
      var obj = {};
      iterate(iterable, function (k, v) {
        createProperty(obj, k, v);
      }, {
        AS_ENTRIES: true
      });
      return obj;
    }
  });

  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var FAILS_ON_PRIMITIVES$7 = fails(function () {
    nativeGetOwnPropertyDescriptor(1);
  });
  var FORCED$a = !descriptors || FAILS_ON_PRIMITIVES$7; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor

  _export({
    target: 'Object',
    stat: true,
    forced: FORCED$a,
    sham: !descriptors
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
      return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
    }
  });

  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors

  _export({
    target: 'Object',
    stat: true,
    sham: !descriptors
  }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIndexedObject(object);
      var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
      var keys = ownKeys(O);
      var result = {};
      var index = 0;
      var key, descriptor;

      while (keys.length > index) {
        descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
        if (descriptor !== undefined) createProperty(result, key, descriptor);
      }

      return result;
    }
  });

  var getOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f; // eslint-disable-next-line es/no-object-getownpropertynames -- required for testing

  var FAILS_ON_PRIMITIVES$6 = fails(function () {
    return !Object.getOwnPropertyNames(1);
  }); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames

  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$6
  }, {
    getOwnPropertyNames: getOwnPropertyNames$1
  });

  var FAILS_ON_PRIMITIVES$5 = fails(function () {
    objectGetPrototypeOf(1);
  }); // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof

  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$5,
    sham: !correctPrototypeGetter
  }, {
    getPrototypeOf: function getPrototypeOf(it) {
      return objectGetPrototypeOf(toObject(it));
    }
  });

  // https://github.com/tc39/proposal-accessible-object-hasownproperty

  _export({
    target: 'Object',
    stat: true
  }, {
    hasOwn: hasOwnProperty_1
  });

  // `SameValue` abstract operation
  // https://tc39.es/ecma262/#sec-samevalue
  // eslint-disable-next-line es/no-object-is -- safe
  var sameValue = Object.is || function is(x, y) {
    // eslint-disable-next-line no-self-compare -- NaN check
    return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
  };

  // https://tc39.es/ecma262/#sec-object.is

  _export({
    target: 'Object',
    stat: true
  }, {
    is: sameValue
  });

  // https://tc39.es/ecma262/#sec-object.isextensible
  // eslint-disable-next-line es/no-object-isextensible -- safe

  _export({
    target: 'Object',
    stat: true,
    forced: Object.isExtensible !== objectIsExtensible
  }, {
    isExtensible: objectIsExtensible
  });

  var $isFrozen = Object.isFrozen;
  var FAILS_ON_PRIMITIVES$4 = fails(function () {
    $isFrozen(1);
  }); // `Object.isFrozen` method
  // https://tc39.es/ecma262/#sec-object.isfrozen

  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$4 || arrayBufferNonExtensible
  }, {
    isFrozen: function isFrozen(it) {
      if (!isObject(it)) return true;
      if (arrayBufferNonExtensible && classofRaw(it) == 'ArrayBuffer') return true;
      return $isFrozen ? $isFrozen(it) : false;
    }
  });

  var $isSealed = Object.isSealed;
  var FAILS_ON_PRIMITIVES$3 = fails(function () {
    $isSealed(1);
  }); // `Object.isSealed` method
  // https://tc39.es/ecma262/#sec-object.issealed

  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$3 || arrayBufferNonExtensible
  }, {
    isSealed: function isSealed(it) {
      if (!isObject(it)) return true;
      if (arrayBufferNonExtensible && classofRaw(it) == 'ArrayBuffer') return true;
      return $isSealed ? $isSealed(it) : false;
    }
  });

  var FAILS_ON_PRIMITIVES$2 = fails(function () {
    objectKeys$1(1);
  }); // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys

  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$2
  }, {
    keys: function keys(it) {
      return objectKeys$1(toObject(it));
    }
  });

  var getOwnPropertyDescriptor$5 = objectGetOwnPropertyDescriptor.f; // `Object.prototype.__lookupGetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__lookupGetter__

  if (descriptors) {
    _export({
      target: 'Object',
      proto: true,
      forced: objectPrototypeAccessorsForced
    }, {
      __lookupGetter__: function __lookupGetter__(P) {
        var O = toObject(this);
        var key = toPropertyKey(P);
        var desc;

        do {
          if (desc = getOwnPropertyDescriptor$5(O, key)) return desc.get;
        } while (O = objectGetPrototypeOf(O));
      }
    });
  }

  var getOwnPropertyDescriptor$4 = objectGetOwnPropertyDescriptor.f; // `Object.prototype.__lookupSetter__` method
  // https://tc39.es/ecma262/#sec-object.prototype.__lookupSetter__

  if (descriptors) {
    _export({
      target: 'Object',
      proto: true,
      forced: objectPrototypeAccessorsForced
    }, {
      __lookupSetter__: function __lookupSetter__(P) {
        var O = toObject(this);
        var key = toPropertyKey(P);
        var desc;

        do {
          if (desc = getOwnPropertyDescriptor$4(O, key)) return desc.set;
        } while (O = objectGetPrototypeOf(O));
      }
    });
  }

  var onFreeze$1 = internalMetadata.onFreeze; // eslint-disable-next-line es/no-object-preventextensions -- safe

  var $preventExtensions = Object.preventExtensions;
  var FAILS_ON_PRIMITIVES$1 = fails(function () {
    $preventExtensions(1);
  }); // `Object.preventExtensions` method
  // https://tc39.es/ecma262/#sec-object.preventextensions

  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$1,
    sham: !freezing
  }, {
    preventExtensions: function preventExtensions(it) {
      return $preventExtensions && isObject(it) ? $preventExtensions(onFreeze$1(it)) : it;
    }
  });

  var onFreeze = internalMetadata.onFreeze; // eslint-disable-next-line es/no-object-seal -- safe

  var $seal = Object.seal;
  var FAILS_ON_PRIMITIVES = fails(function () {
    $seal(1);
  }); // `Object.seal` method
  // https://tc39.es/ecma262/#sec-object.seal

  _export({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES,
    sham: !freezing
  }, {
    seal: function seal(it) {
      return $seal && isObject(it) ? $seal(onFreeze(it)) : it;
    }
  });

  // https://tc39.es/ecma262/#sec-object.setprototypeof

  _export({
    target: 'Object',
    stat: true
  }, {
    setPrototypeOf: objectSetPrototypeOf
  });

  // https://tc39.es/ecma262/#sec-object.prototype.tostring


  var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
  };

  // https://tc39.es/ecma262/#sec-object.prototype.tostring

  if (!toStringTagSupport) {
    redefine(Object.prototype, 'toString', objectToString, {
      unsafe: true
    });
  }

  var $values = objectToArray.values; // `Object.values` method
  // https://tc39.es/ecma262/#sec-object.values

  _export({
    target: 'Object',
    stat: true
  }, {
    values: function values(O) {
      return $values(O);
    }
  });

  // https://tc39.es/ecma262/#sec-parsefloat-string

  _export({
    global: true,
    forced: parseFloat != numberParseFloat
  }, {
    parseFloat: numberParseFloat
  });

  // https://tc39.es/ecma262/#sec-parseint-string-radix

  _export({
    global: true,
    forced: parseInt != numberParseInt
  }, {
    parseInt: numberParseInt
  });

  var nativePromiseConstructor = global_1.Promise;

  var TypeError$b = global_1.TypeError;

  var validateArgumentsLength = function validateArgumentsLength(passed, required) {
    if (passed < required) throw TypeError$b('Not enough arguments');
    return passed;
  };

  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(engineUserAgent);

  var set$1 = global_1.setImmediate;
  var clear = global_1.clearImmediate;
  var process$3 = global_1.process;
  var Dispatch = global_1.Dispatch;
  var Function$2 = global_1.Function;
  var MessageChannel = global_1.MessageChannel;
  var String$1 = global_1.String;
  var counter = 0;
  var queue$1 = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var location, defer, channel, port;

  try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    location = global_1.location;
  } catch (error) {
    /* empty */
  }

  var run = function run(id) {
    if (hasOwnProperty_1(queue$1, id)) {
      var fn = queue$1[id];
      delete queue$1[id];
      fn();
    }
  };

  var runner = function runner(id) {
    return function () {
      run(id);
    };
  };

  var listener = function listener(event) {
    run(event.data);
  };

  var post = function post(id) {
    // old engines have not location.origin
    global_1.postMessage(String$1(id), location.protocol + '//' + location.host);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


  if (!set$1 || !clear) {
    set$1 = function setImmediate(handler) {
      validateArgumentsLength(arguments.length, 1);
      var fn = isCallable(handler) ? handler : Function$2(handler);
      var args = arraySlice$1(arguments, 1);

      queue$1[++counter] = function () {
        functionApply(fn, undefined, args);
      };

      defer(counter);
      return counter;
    };

    clear = function clearImmediate(id) {
      delete queue$1[id];
    }; // Node.js 0.8-


    if (engineIsNode) {
      defer = function defer(id) {
        process$3.nextTick(runner(id));
      }; // Sphere (JS game engine) Dispatch API

    } else if (Dispatch && Dispatch.now) {
      defer = function defer(id) {
        Dispatch.now(runner(id));
      }; // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624

    } else if (MessageChannel && !engineIsIos) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = functionBindContext(port.postMessage, port); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global_1.addEventListener && isCallable(global_1.postMessage) && !global_1.importScripts && location && location.protocol !== 'file:' && !fails(post)) {
      defer = post;
      global_1.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in documentCreateElement('script')) {
      defer = function defer(id) {
        html.appendChild(documentCreateElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      }; // Rest old browsers

    } else {
      defer = function defer(id) {
        setTimeout(runner(id), 0);
      };
    }
  }

  var task$1 = {
    set: set$1,
    clear: clear
  };

  var engineIsIosPebble = /ipad|iphone|ipod/i.test(engineUserAgent) && global_1.Pebble !== undefined;

  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(engineUserAgent);

  var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var MutationObserver = global_1.MutationObserver || global_1.WebKitMutationObserver;
  var document$2 = global_1.document;
  var process$2 = global_1.process;
  var Promise$1 = global_1.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`

  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$3(global_1, 'queueMicrotask');
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var flush, head, last, notify$1, toggle, node, promise, then; // modern engines have queueMicrotask method

  if (!queueMicrotask) {
    flush = function flush() {
      var parent, fn;
      if (engineIsNode && (parent = process$2.domain)) parent.exit();

      while (head) {
        fn = head.fn;
        head = head.next;

        try {
          fn();
        } catch (error) {
          if (head) notify$1();else last = undefined;
          throw error;
        }
      }

      last = undefined;
      if (parent) parent.enter();
    }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898


    if (!engineIsIos && !engineIsNode && !engineIsWebosWebkit && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, {
        characterData: true
      });

      notify$1 = function notify() {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise

    } else if (!engineIsIosPebble && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug

      promise.constructor = Promise$1;
      then = functionBindContext(promise.then, promise);

      notify$1 = function notify() {
        then(flush);
      }; // Node.js without promises

    } else if (engineIsNode) {
      notify$1 = function notify() {
        process$2.nextTick(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout

    } else {
      // strange IE + webpack dev server bug - use .bind(global)
      macrotask = functionBindContext(macrotask, global_1);

      notify$1 = function notify() {
        macrotask(flush);
      };
    }
  }

  var microtask = queueMicrotask || function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify$1();
    }

    last = task;
  };

  var PromiseCapability = function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable(resolve);
    this.reject = aCallable(reject);
  }; // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability


  var f = function f(C) {
    return new PromiseCapability(C);
  };

  var newPromiseCapability$1 = {
    f: f
  };

  var promiseResolve = function promiseResolve(C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability$1.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var hostReportErrors = function hostReportErrors(a, b) {
    var console = global_1.console;

    if (console && console.error) {
      arguments.length == 1 ? console.error(a) : console.error(a, b);
    }
  };

  var perform = function perform(exec) {
    try {
      return {
        error: false,
        value: exec()
      };
    } catch (error) {
      return {
        error: true,
        value: error
      };
    }
  };

  var Queue = function Queue() {
    this.head = null;
    this.tail = null;
  };

  Queue.prototype = {
    add: function add(item) {
      var entry = {
        item: item,
        next: null
      };
      if (this.head) this.tail.next = entry;else this.head = entry;
      this.tail = entry;
    },
    get: function get() {
      var entry = this.head;

      if (entry) {
        this.head = entry.next;
        if (this.tail === entry) this.tail = null;
        return entry.item;
      }
    }
  };
  var queue = Queue;

  var engineIsBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object';

  var task = task$1.set;
  var SPECIES$1 = wellKnownSymbol('species');
  var PROMISE = 'Promise';
  var getInternalState$6 = internalState.getterFor(PROMISE);
  var setInternalState$6 = internalState.set;
  var getInternalPromiseState = internalState.getterFor(PROMISE);
  var NativePromisePrototype = nativePromiseConstructor && nativePromiseConstructor.prototype;
  var PromiseConstructor = nativePromiseConstructor;
  var PromisePrototype = NativePromisePrototype;
  var TypeError$a = global_1.TypeError;
  var document$1 = global_1.document;
  var process$1 = global_1.process;
  var newPromiseCapability = newPromiseCapability$1.f;
  var newGenericPromiseCapability = newPromiseCapability;
  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global_1.dispatchEvent);
  var NATIVE_REJECTION_EVENT = isCallable(global_1.PromiseRejectionEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var SUBCLASSING = false;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
  var FORCED$9 = isForced_1(PROMISE, function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions

    if (!GLOBAL_CORE_JS_PROMISE && engineV8Version === 66) return true; // We need Promise#finally in the pure version for preventing prototype pollution
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679

    if (engineV8Version >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false; // Detect correctness of subclassing with @@species support

    var promise = new PromiseConstructor(function (resolve) {
      resolve(1);
    });

    var FakePromise = function FakePromise(exec) {
      exec(function () {
        /* empty */
      }, function () {
        /* empty */
      });
    };

    var constructor = promise.constructor = {};
    constructor[SPECIES$1] = FakePromise;
    SUBCLASSING = promise.then(function () {
      /* empty */
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test

    return !GLOBAL_CORE_JS_PROMISE && engineIsBrowser && !NATIVE_REJECTION_EVENT;
  });
  var INCORRECT_ITERATION = FORCED$9 || !checkCorrectnessOfIteration(function (iterable) {
    PromiseConstructor.all(iterable)['catch'](function () {
      /* empty */
    });
  }); // helpers

  var isThenable = function isThenable(it) {
    var then;
    return isObject(it) && isCallable(then = it.then) ? then : false;
  };

  var callReaction = function callReaction(reaction, state) {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var handler = ok ? reaction.ok : reaction.fail;
    var resolve = reaction.resolve;
    var reject = reaction.reject;
    var domain = reaction.domain;
    var result, then, exited;

    try {
      if (handler) {
        if (!ok) {
          if (state.rejection === UNHANDLED) onHandleUnhandled(state);
          state.rejection = HANDLED;
        }

        if (handler === true) result = value;else {
          if (domain) domain.enter();
          result = handler(value); // can throw

          if (domain) {
            domain.exit();
            exited = true;
          }
        }

        if (result === reaction.promise) {
          reject(TypeError$a('Promise-chain cycle'));
        } else if (then = isThenable(result)) {
          functionCall(then, result, resolve, reject);
        } else resolve(result);
      } else reject(value);
    } catch (error) {
      if (domain && !exited) domain.exit();
      reject(error);
    }
  };

  var notify = function notify(state, isReject) {
    if (state.notified) return;
    state.notified = true;
    microtask(function () {
      var reactions = state.reactions;
      var reaction;

      while (reaction = reactions.get()) {
        callReaction(reaction, state);
      }

      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };

  var dispatchEvent = function dispatchEvent(name, promise, reason) {
    var event, handler;

    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global_1.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };

    if (!NATIVE_REJECTION_EVENT && (handler = global_1['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };

  var onUnhandled = function onUnhandled(state) {
    functionCall(task, global_1, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;

      if (IS_UNHANDLED) {
        result = perform(function () {
          if (engineIsNode) {
            process$1.emit('unhandledRejection', value, promise);
          } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

        state.rejection = engineIsNode || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };

  var isUnhandled = function isUnhandled(state) {
    return state.rejection !== HANDLED && !state.parent;
  };

  var onHandleUnhandled = function onHandleUnhandled(state) {
    functionCall(task, global_1, function () {
      var promise = state.facade;

      if (engineIsNode) {
        process$1.emit('rejectionHandled', promise);
      } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
    });
  };

  var bind = function bind(fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };

  var internalReject = function internalReject(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };

  var internalResolve = function internalResolve(state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;

    try {
      if (state.facade === value) throw TypeError$a("Promise can't be resolved itself");
      var then = isThenable(value);

      if (then) {
        microtask(function () {
          var wrapper = {
            done: false
          };

          try {
            functionCall(then, value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({
        done: false
      }, error, state);
    }
  }; // constructor polyfill


  if (FORCED$9) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance(this, PromisePrototype);
      aCallable(executor);
      functionCall(Internal, this);
      var state = getInternalState$6(this);

      try {
        executor(bind(internalResolve, state), bind(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };

    PromisePrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`

    Internal = function Promise(executor) {
      setInternalState$6(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: new queue(),
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };

    Internal.prototype = redefineAll(PromisePrototype, {
      // `Promise.prototype.then` method
      // https://tc39.es/ecma262/#sec-promise.prototype.then
      // eslint-disable-next-line unicorn/no-thenable -- safe
      then: function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
        state.parent = true;
        reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable(onRejected) && onRejected;
        reaction.domain = engineIsNode ? process$1.domain : undefined;
        if (state.state == PENDING) state.reactions.add(reaction);else microtask(function () {
          callReaction(reaction, state);
        });
        return reaction.promise;
      },
      // `Promise.prototype.catch` method
      // https://tc39.es/ecma262/#sec-promise.prototype.catch
      'catch': function _catch(onRejected) {
        return this.then(undefined, onRejected);
      }
    });

    OwnPromiseCapability = function OwnPromiseCapability() {
      var promise = new Internal();
      var state = getInternalState$6(promise);
      this.promise = promise;
      this.resolve = bind(internalResolve, state);
      this.reject = bind(internalReject, state);
    };

    newPromiseCapability$1.f = newPromiseCapability = function newPromiseCapability(C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };

    if (isCallable(nativePromiseConstructor) && NativePromisePrototype !== Object.prototype) {
      nativeThen = NativePromisePrototype.then;

      if (!SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        redefine(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            functionCall(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        }); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`

        redefine(NativePromisePrototype, 'catch', PromisePrototype['catch'], {
          unsafe: true
        });
      } // make `.constructor === Promise` work for native promise-based APIs


      try {
        delete NativePromisePrototype.constructor;
      } catch (error) {
        /* empty */
      } // make `instanceof Promise` work for native promise-based APIs


      if (objectSetPrototypeOf) {
        objectSetPrototypeOf(NativePromisePrototype, PromisePrototype);
      }
    }
  }

  _export({
    global: true,
    wrap: true,
    forced: FORCED$9
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag(PromiseConstructor, PROMISE, false);
  setSpecies(PROMISE);
  PromiseWrapper = getBuiltIn(PROMISE); // statics

  _export({
    target: PROMISE,
    stat: true,
    forced: FORCED$9
  }, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      functionCall(capability.reject, undefined, r);
      return capability.promise;
    }
  });
  _export({
    target: PROMISE,
    stat: true,
    forced: FORCED$9
  }, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });
  _export({
    target: PROMISE,
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          functionCall($promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable(C.resolve);
        iterate(iterable, function (promise) {
          functionCall($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  // https://tc39.es/ecma262/#sec-promise.allsettled


  _export({
    target: 'Promise',
    stat: true
  }, {
    allSettled: function allSettled(iterable) {
      var C = this;
      var capability = newPromiseCapability$1.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var promiseResolve = aCallable(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          functionCall(promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = {
              status: 'fulfilled',
              value: value
            };
            --remaining || resolve(values);
          }, function (error) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = {
              status: 'rejected',
              reason: error
            };
            --remaining || resolve(values);
          });
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var PROMISE_ANY_ERROR = 'No one promise resolved'; // `Promise.any` method
  // https://tc39.es/ecma262/#sec-promise.any

  _export({
    target: 'Promise',
    stat: true
  }, {
    any: function any(iterable) {
      var C = this;
      var AggregateError = getBuiltIn('AggregateError');
      var capability = newPromiseCapability$1.f(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var promiseResolve = aCallable(C.resolve);
        var errors = [];
        var counter = 0;
        var remaining = 1;
        var alreadyResolved = false;
        iterate(iterable, function (promise) {
          var index = counter++;
          var alreadyRejected = false;
          remaining++;
          functionCall(promiseResolve, C, promise).then(function (value) {
            if (alreadyRejected || alreadyResolved) return;
            alreadyResolved = true;
            resolve(value);
          }, function (error) {
            if (alreadyRejected || alreadyResolved) return;
            alreadyRejected = true;
            errors[index] = error;
            --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
          });
        });
        --remaining || reject(new AggregateError(errors, PROMISE_ANY_ERROR));
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });

  var NON_GENERIC = !!nativePromiseConstructor && fails(function () {
    // eslint-disable-next-line unicorn/no-thenable -- required for testing
    nativePromiseConstructor.prototype['finally'].call({
      then: function then() {
        /* empty */
      }
    }, function () {
      /* empty */
    });
  }); // `Promise.prototype.finally` method
  // https://tc39.es/ecma262/#sec-promise.prototype.finally

  _export({
    target: 'Promise',
    proto: true,
    real: true,
    forced: NON_GENERIC
  }, {
    'finally': function _finally(onFinally) {
      var C = speciesConstructor(this, getBuiltIn('Promise'));
      var isFunction = isCallable(onFinally);
      return this.then(isFunction ? function (x) {
        return promiseResolve(C, onFinally()).then(function () {
          return x;
        });
      } : onFinally, isFunction ? function (e) {
        return promiseResolve(C, onFinally()).then(function () {
          throw e;
        });
      } : onFinally);
    }
  }); // makes sure that native promise-based APIs `Promise#finally` properly works with patched `Promise#then`

  if (isCallable(nativePromiseConstructor)) {
    var method = getBuiltIn('Promise').prototype['finally'];

    if (nativePromiseConstructor.prototype['finally'] !== method) {
      redefine(nativePromiseConstructor.prototype, 'finally', method, {
        unsafe: true
      });
    }
  }

  var OPTIONAL_ARGUMENTS_LIST = !fails(function () {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.apply(function () {
      /* empty */
    });
  }); // `Reflect.apply` method
  // https://tc39.es/ecma262/#sec-reflect.apply

  _export({
    target: 'Reflect',
    stat: true,
    forced: OPTIONAL_ARGUMENTS_LIST
  }, {
    apply: function apply(target, thisArgument, argumentsList) {
      return functionApply(aCallable(target), thisArgument, anObject(argumentsList));
    }
  });

  var nativeConstruct = getBuiltIn('Reflect', 'construct');
  var ObjectPrototype = Object.prototype;
  var push$7 = [].push; // `Reflect.construct` method
  // https://tc39.es/ecma262/#sec-reflect.construct
  // MS Edge supports only 2 arguments and argumentsList argument is optional
  // FF Nightly sets third argument as `new.target`, but does not create `this` from it

  var NEW_TARGET_BUG = fails(function () {
    function F() {
      /* empty */
    }

    return !(nativeConstruct(function () {
      /* empty */
    }, [], F) instanceof F);
  });
  var ARGS_BUG = !fails(function () {
    nativeConstruct(function () {
      /* empty */
    });
  });
  var FORCED$8 = NEW_TARGET_BUG || ARGS_BUG;
  _export({
    target: 'Reflect',
    stat: true,
    forced: FORCED$8,
    sham: FORCED$8
  }, {
    construct: function construct(Target, args
    /* , newTarget */
    ) {
      aConstructor(Target);
      anObject(args);
      var newTarget = arguments.length < 3 ? Target : aConstructor(arguments[2]);
      if (ARGS_BUG && !NEW_TARGET_BUG) return nativeConstruct(Target, args, newTarget);

      if (Target == newTarget) {
        // w/o altered newTarget, optimization for 0-4 arguments
        switch (args.length) {
          case 0:
            return new Target();

          case 1:
            return new Target(args[0]);

          case 2:
            return new Target(args[0], args[1]);

          case 3:
            return new Target(args[0], args[1], args[2]);

          case 4:
            return new Target(args[0], args[1], args[2], args[3]);
        } // w/o altered newTarget, lot of arguments case


        var $args = [null];
        functionApply(push$7, $args, args);
        return new (functionApply(functionBind, Target, $args))();
      } // with altered newTarget, not support built-in constructors


      var proto = newTarget.prototype;
      var instance = objectCreate(isObject(proto) ? proto : ObjectPrototype);
      var result = functionApply(Target, instance, args);
      return isObject(result) ? result : instance;
    }
  });

  var ERROR_INSTEAD_OF_FALSE = fails(function () {
    // eslint-disable-next-line es/no-reflect -- required for testing
    Reflect.defineProperty(objectDefineProperty.f({}, 1, {
      value: 1
    }), 1, {
      value: 2
    });
  }); // `Reflect.defineProperty` method
  // https://tc39.es/ecma262/#sec-reflect.defineproperty

  _export({
    target: 'Reflect',
    stat: true,
    forced: ERROR_INSTEAD_OF_FALSE,
    sham: !descriptors
  }, {
    defineProperty: function defineProperty(target, propertyKey, attributes) {
      anObject(target);
      var key = toPropertyKey(propertyKey);
      anObject(attributes);

      try {
        objectDefineProperty.f(target, key, attributes);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f; // `Reflect.deleteProperty` method
  // https://tc39.es/ecma262/#sec-reflect.deleteproperty

  _export({
    target: 'Reflect',
    stat: true
  }, {
    deleteProperty: function deleteProperty(target, propertyKey) {
      var descriptor = getOwnPropertyDescriptor$2(anObject(target), propertyKey);
      return descriptor && !descriptor.configurable ? false : delete target[propertyKey];
    }
  });

  var isDataDescriptor = function isDataDescriptor(descriptor) {
    return descriptor !== undefined && (hasOwnProperty_1(descriptor, 'value') || hasOwnProperty_1(descriptor, 'writable'));
  };

  // https://tc39.es/ecma262/#sec-reflect.get

  function get(target, propertyKey
  /* , receiver */
  ) {
    var receiver = arguments.length < 3 ? target : arguments[2];
    var descriptor, prototype;
    if (anObject(target) === receiver) return target[propertyKey];
    descriptor = objectGetOwnPropertyDescriptor.f(target, propertyKey);
    if (descriptor) return isDataDescriptor(descriptor) ? descriptor.value : descriptor.get === undefined ? undefined : functionCall(descriptor.get, receiver);
    if (isObject(prototype = objectGetPrototypeOf(target))) return get(prototype, propertyKey, receiver);
  }

  _export({
    target: 'Reflect',
    stat: true
  }, {
    get: get
  });

  // https://tc39.es/ecma262/#sec-reflect.getownpropertydescriptor

  _export({
    target: 'Reflect',
    stat: true,
    sham: !descriptors
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
      return objectGetOwnPropertyDescriptor.f(anObject(target), propertyKey);
    }
  });

  // https://tc39.es/ecma262/#sec-reflect.getprototypeof

  _export({
    target: 'Reflect',
    stat: true,
    sham: !correctPrototypeGetter
  }, {
    getPrototypeOf: function getPrototypeOf(target) {
      return objectGetPrototypeOf(anObject(target));
    }
  });

  // https://tc39.es/ecma262/#sec-reflect.has

  _export({
    target: 'Reflect',
    stat: true
  }, {
    has: function has(target, propertyKey) {
      return propertyKey in target;
    }
  });

  // https://tc39.es/ecma262/#sec-reflect.isextensible

  _export({
    target: 'Reflect',
    stat: true
  }, {
    isExtensible: function isExtensible(target) {
      anObject(target);
      return objectIsExtensible(target);
    }
  });

  // https://tc39.es/ecma262/#sec-reflect.ownkeys

  _export({
    target: 'Reflect',
    stat: true
  }, {
    ownKeys: ownKeys
  });

  // https://tc39.es/ecma262/#sec-reflect.preventextensions

  _export({
    target: 'Reflect',
    stat: true,
    sham: !freezing
  }, {
    preventExtensions: function preventExtensions(target) {
      anObject(target);

      try {
        var objectPreventExtensions = getBuiltIn('Object', 'preventExtensions');
        if (objectPreventExtensions) objectPreventExtensions(target);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  // https://tc39.es/ecma262/#sec-reflect.set

  function set(target, propertyKey, V
  /* , receiver */
  ) {
    var receiver = arguments.length < 4 ? target : arguments[3];
    var ownDescriptor = objectGetOwnPropertyDescriptor.f(anObject(target), propertyKey);
    var existingDescriptor, prototype, setter;

    if (!ownDescriptor) {
      if (isObject(prototype = objectGetPrototypeOf(target))) {
        return set(prototype, propertyKey, V, receiver);
      }

      ownDescriptor = createPropertyDescriptor(0);
    }

    if (isDataDescriptor(ownDescriptor)) {
      if (ownDescriptor.writable === false || !isObject(receiver)) return false;

      if (existingDescriptor = objectGetOwnPropertyDescriptor.f(receiver, propertyKey)) {
        if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
        existingDescriptor.value = V;
        objectDefineProperty.f(receiver, propertyKey, existingDescriptor);
      } else objectDefineProperty.f(receiver, propertyKey, createPropertyDescriptor(0, V));
    } else {
      setter = ownDescriptor.set;
      if (setter === undefined) return false;
      functionCall(setter, receiver, V);
    }

    return true;
  } // MS Edge 17-18 Reflect.set allows setting the property to object
  // with non-writable property on the prototype


  var MS_EDGE_BUG = fails(function () {
    var Constructor = function Constructor() {
      /* empty */
    };

    var object = objectDefineProperty.f(new Constructor(), 'a', {
      configurable: true
    }); // eslint-disable-next-line es/no-reflect -- required for testing

    return Reflect.set(Constructor.prototype, 'a', 1, object) !== false;
  });
  _export({
    target: 'Reflect',
    stat: true,
    forced: MS_EDGE_BUG
  }, {
    set: set
  });

  // https://tc39.es/ecma262/#sec-reflect.setprototypeof

  if (objectSetPrototypeOf) _export({
    target: 'Reflect',
    stat: true
  }, {
    setPrototypeOf: function setPrototypeOf(target, proto) {
      anObject(target);
      aPossiblePrototype(proto);

      try {
        objectSetPrototypeOf(target, proto);
        return true;
      } catch (error) {
        return false;
      }
    }
  });

  _export({
    global: true
  }, {
    Reflect: {}
  }); // Reflect[@@toStringTag] property
  // https://tc39.es/ecma262/#sec-reflect-@@tostringtag

  setToStringTag(global_1.Reflect, 'Reflect', true);

  var MATCH$2 = wellKnownSymbol('match'); // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp

  var isRegexp = function isRegexp(it) {
    var isRegExp;
    return isObject(it) && ((isRegExp = it[MATCH$2]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
  };

  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags


  var regexpFlags = function regexpFlags() {
    var that = anObject(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };

  var $RegExp$2 = global_1.RegExp;
  var UNSUPPORTED_Y$3 = fails(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  }); // UC Browser bug
  // https://github.com/zloirock/core-js/issues/1008

  var MISSED_STICKY$2 = UNSUPPORTED_Y$3 || fails(function () {
    return !$RegExp$2('a', 'y').sticky;
  });
  var BROKEN_CARET = UNSUPPORTED_Y$3 || fails(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });
  var regexpStickyHelpers = {
    BROKEN_CARET: BROKEN_CARET,
    MISSED_STICKY: MISSED_STICKY$2,
    UNSUPPORTED_Y: UNSUPPORTED_Y$3
  };

  var $RegExp$1 = global_1.RegExp;
  var regexpUnsupportedDotAll = fails(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });

  var $RegExp = global_1.RegExp;
  var regexpUnsupportedNcg = fails(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
  });

  var defineProperty$4 = objectDefineProperty.f;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var enforceInternalState$1 = internalState.enforce;
  var MATCH$1 = wellKnownSymbol('match');
  var NativeRegExp = global_1.RegExp;
  var RegExpPrototype$7 = NativeRegExp.prototype;
  var SyntaxError$1 = global_1.SyntaxError;
  var getFlags$4 = functionUncurryThis(regexpFlags);
  var exec$5 = functionUncurryThis(RegExpPrototype$7.exec);
  var charAt$b = functionUncurryThis(''.charAt);
  var replace$7 = functionUncurryThis(''.replace);
  var stringIndexOf$4 = functionUncurryThis(''.indexOf);
  var stringSlice$b = functionUncurryThis(''.slice); // TODO: Use only propper RegExpIdentifierName

  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g; // "new" should create a new object, old webkit bug

  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var MISSED_STICKY$1 = regexpStickyHelpers.MISSED_STICKY;
  var UNSUPPORTED_Y$2 = regexpStickyHelpers.UNSUPPORTED_Y;
  var BASE_FORCED = descriptors && (!CORRECT_NEW || MISSED_STICKY$1 || regexpUnsupportedDotAll || regexpUnsupportedNcg || fails(function () {
    re2[MATCH$1] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match

    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));

  var handleDotAll = function handleDotAll(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;

    for (; index <= length; index++) {
      chr = charAt$b(string, index);

      if (chr === '\\') {
        result += chr + charAt$b(string, ++index);
        continue;
      }

      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        }

        result += chr;
      }
    }

    return result;
  };

  var handleNCG = function handleNCG(string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = {};
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;

    for (; index <= length; index++) {
      chr = charAt$b(string, index);

      if (chr === '\\') {
        chr = chr + charAt$b(string, ++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;

        case chr === '(':
          if (exec$5(IS_NCG, stringSlice$b(string, index + 1))) {
            index += 2;
            ncg = true;
          }

          result += chr;
          groupid++;
          continue;

        case chr === '>' && ncg:
          if (groupname === '' || hasOwnProperty_1(names, groupname)) {
            throw new SyntaxError$1('Invalid capture group name');
          }

          names[groupname] = true;
          named[named.length] = [groupname, groupid];
          ncg = false;
          groupname = '';
          continue;
      }

      if (ncg) groupname += chr;else result += chr;
    }

    return [result, named];
  }; // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor


  if (isForced_1('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = objectIsPrototypeOf(RegExpPrototype$7, this);
      var patternIsRegExp = isRegexp(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;

      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }

      if (patternIsRegExp || objectIsPrototypeOf(RegExpPrototype$7, pattern)) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags$4(rawPattern);
      }

      pattern = pattern === undefined ? '' : toString_1(pattern);
      flags = flags === undefined ? '' : toString_1(flags);
      rawPattern = pattern;

      if (regexpUnsupportedDotAll && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf$4(flags, 's') > -1;
        if (dotAll) flags = replace$7(flags, /s/g, '');
      }

      rawFlags = flags;

      if (MISSED_STICKY$1 && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf$4(flags, 'y') > -1;
        if (sticky && UNSUPPORTED_Y$2) flags = replace$7(flags, /y/g, '');
      }

      if (regexpUnsupportedNcg) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }

      result = inheritIfRequired(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$7, RegExpWrapper);

      if (dotAll || sticky || groups.length) {
        state = enforceInternalState$1(result);

        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }

        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }

      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) {
        /* empty */
      }
      return result;
    };

    var proxy = function proxy(key) {
      key in RegExpWrapper || defineProperty$4(RegExpWrapper, key, {
        configurable: true,
        get: function get() {
          return NativeRegExp[key];
        },
        set: function set(it) {
          NativeRegExp[key] = it;
        }
      });
    };

    for (var keys = getOwnPropertyNames(NativeRegExp), index$1 = 0; keys.length > index$1;) {
      proxy(keys[index$1++]);
    }

    RegExpPrototype$7.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$7;
    redefine(global_1, 'RegExp', RegExpWrapper);
  } // https://tc39.es/ecma262/#sec-get-regexp-@@species


  setSpecies('RegExp');

  var defineProperty$3 = objectDefineProperty.f;
  var getInternalState$5 = internalState.get;
  var RegExpPrototype$6 = RegExp.prototype;
  var TypeError$9 = global_1.TypeError; // `RegExp.prototype.dotAll` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.dotall

  if (descriptors && regexpUnsupportedDotAll) {
    defineProperty$3(RegExpPrototype$6, 'dotAll', {
      configurable: true,
      get: function get() {
        if (this === RegExpPrototype$6) return undefined; // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.

        if (classofRaw(this) === 'RegExp') {
          return !!getInternalState$5(this).dotAll;
        }

        throw TypeError$9('Incompatible receiver, RegExp required');
      }
    });
  }

  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */

  /* eslint-disable regexp/no-useless-quantifier -- testing */


  var getInternalState$4 = internalState.get;
  var nativeReplace = shared('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$a = functionUncurryThis(''.charAt);
  var indexOf$1 = functionUncurryThis(''.indexOf);
  var replace$6 = functionUncurryThis(''.replace);
  var stringSlice$a = functionUncurryThis(''.slice);

  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    functionCall(nativeExec, re1, 'a');
    functionCall(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();

  var UNSUPPORTED_Y$1 = regexpStickyHelpers.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.

  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1 || regexpUnsupportedDotAll || regexpUnsupportedNcg;

  if (PATCH) {
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$4(re);
      var str = toString_1(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;

      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = functionCall(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }

      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$1 && re.sticky;
      var flags = functionCall(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;

      if (sticky) {
        flags = replace$6(flags, 'y', '');

        if (indexOf$1(flags, 'g') === -1) {
          flags += 'g';
        }

        strCopy = stringSlice$a(str, re.lastIndex); // Support anchored sticky behavior.

        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$a(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        } // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.


        reCopy = new RegExp('^(?:' + source + ')', flags);
      }

      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }

      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = functionCall(nativeExec, sticky ? reCopy : re, strCopy);

      if (sticky) {
        if (match) {
          match.input = stringSlice$a(match.input, charsAdded);
          match[0] = stringSlice$a(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }

      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        functionCall(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }

      if (match && groups) {
        match.groups = object = objectCreate(null);

        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }

      return match;
    };
  }

  var regexpExec = patchedExec;

  // https://tc39.es/ecma262/#sec-regexp.prototype.exec


  _export({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== regexpExec
  }, {
    exec: regexpExec
  });

  var RegExpPrototype$5 = RegExp.prototype;
  var FORCED$7 = descriptors && fails(function () {
    // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
    return Object.getOwnPropertyDescriptor(RegExpPrototype$5, 'flags').get.call({
      dotAll: true,
      sticky: true
    }) !== 'sy';
  }); // `RegExp.prototype.flags` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags

  if (FORCED$7) objectDefineProperty.f(RegExpPrototype$5, 'flags', {
    configurable: true,
    get: regexpFlags
  });

  var MISSED_STICKY = regexpStickyHelpers.MISSED_STICKY;
  var defineProperty$2 = objectDefineProperty.f;
  var getInternalState$3 = internalState.get;
  var RegExpPrototype$4 = RegExp.prototype;
  var TypeError$8 = global_1.TypeError; // `RegExp.prototype.sticky` getter
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.sticky

  if (descriptors && MISSED_STICKY) {
    defineProperty$2(RegExpPrototype$4, 'sticky', {
      configurable: true,
      get: function get() {
        if (this === RegExpPrototype$4) return undefined; // We can't use InternalStateModule.getterFor because
        // we don't add metadata for regexps created by a literal.

        if (classofRaw(this) === 'RegExp') {
          return !!getInternalState$3(this).sticky;
        }

        throw TypeError$8('Incompatible receiver, RegExp required');
      }
    });
  }

  var DELEGATES_TO_EXEC = function () {
    var execCalled = false;
    var re = /[ac]/;

    re.exec = function () {
      execCalled = true;
      return /./.exec.apply(this, arguments);
    };

    return re.test('abc') === true && execCalled;
  }();

  var Error$4 = global_1.Error;
  var un$Test = functionUncurryThis(/./.test); // `RegExp.prototype.test` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.test

  _export({
    target: 'RegExp',
    proto: true,
    forced: !DELEGATES_TO_EXEC
  }, {
    test: function test(str) {
      var exec = this.exec;
      if (!isCallable(exec)) return un$Test(this, str);
      var result = functionCall(exec, this, str);

      if (result !== null && !isObject(result)) {
        throw new Error$4('RegExp exec method returned something other than an Object or null');
      }

      return !!result;
    }
  });

  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
  var TO_STRING = 'toString';
  var RegExpPrototype$3 = RegExp.prototype;
  var n$ToString = RegExpPrototype$3[TO_STRING];
  var getFlags$3 = functionUncurryThis(regexpFlags);
  var NOT_GENERIC = fails(function () {
    return n$ToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  }); // FF44- RegExp#toString has a wrong name

  var INCORRECT_NAME = PROPER_FUNCTION_NAME$1 && n$ToString.name != TO_STRING; // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring

  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject(this);
      var p = toString_1(R.source);
      var rf = R.flags;
      var f = toString_1(rf === undefined && objectIsPrototypeOf(RegExpPrototype$3, R) && !('flags' in RegExpPrototype$3) ? getFlags$3(R) : rf);
      return '/' + p + '/' + f;
    }, {
      unsafe: true
    });
  }

  // https://tc39.es/ecma262/#sec-set-objects


  collection('Set', function (init) {
    return function Set() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong);

  var charAt$9 = functionUncurryThis(''.charAt);
  var FORCED$6 = fails(function () {
    return '𠮷'.at(-2) !== "\uD842";
  }); // `String.prototype.at` method
  // https://github.com/tc39/proposal-relative-indexing-method

  _export({
    target: 'String',
    proto: true,
    forced: FORCED$6
  }, {
    at: function at(index) {
      var S = toString_1(requireObjectCoercible(this));
      var len = S.length;
      var relativeIndex = toIntegerOrInfinity(index);
      var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
      return k < 0 || k >= len ? undefined : charAt$9(S, k);
    }
  });

  var charAt$8 = functionUncurryThis(''.charAt);
  var charCodeAt$2 = functionUncurryThis(''.charCodeAt);
  var stringSlice$9 = functionUncurryThis(''.slice);

  var createMethod = function createMethod(CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString_1(requireObjectCoercible($this));
      var position = toIntegerOrInfinity(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$2(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$2(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$8(S, position) : first : CONVERT_TO_STRING ? stringSlice$9(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };

  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod(true)
  };

  var codeAt$1 = stringMultibyte.codeAt; // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat

  _export({
    target: 'String',
    proto: true
  }, {
    codePointAt: function codePointAt(pos) {
      return codeAt$1(this, pos);
    }
  });

  var TypeError$7 = global_1.TypeError;

  var notARegexp = function notARegexp(it) {
    if (isRegexp(it)) {
      throw TypeError$7("The method doesn't accept regular expressions");
    }

    return it;
  };

  var MATCH = wellKnownSymbol('match');

  var correctIsRegexpLogic = function correctIsRegexpLogic(METHOD_NAME) {
    var regexp = /./;

    try {
      '/./'[METHOD_NAME](regexp);
    } catch (error1) {
      try {
        regexp[MATCH] = false;
        return '/./'[METHOD_NAME](regexp);
      } catch (error2) {
        /* empty */
      }
    }

    return false;
  };

  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f; // eslint-disable-next-line es/no-string-prototype-endswith -- safe

  var un$EndsWith = functionUncurryThis(''.endsWith);
  var slice = functionUncurryThis(''.slice);
  var min$4 = Math.min;
  var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegexpLogic('endsWith'); // https://github.com/zloirock/core-js/pull/702

  var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function () {
    var descriptor = getOwnPropertyDescriptor$1(String.prototype, 'endsWith');
    return descriptor && !descriptor.writable;
  }(); // `String.prototype.endsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.endswith

  _export({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1
  }, {
    endsWith: function endsWith(searchString
    /* , endPosition = @length */
    ) {
      var that = toString_1(requireObjectCoercible(this));
      notARegexp(searchString);
      var endPosition = arguments.length > 1 ? arguments[1] : undefined;
      var len = that.length;
      var end = endPosition === undefined ? len : min$4(toLength(endPosition), len);
      var search = toString_1(searchString);
      return un$EndsWith ? un$EndsWith(that, search, end) : slice(that, end - search.length, end) === search;
    }
  });

  var RangeError$5 = global_1.RangeError;
  var fromCharCode$3 = String.fromCharCode; // eslint-disable-next-line es/no-string-fromcodepoint -- required for testing

  var $fromCodePoint = String.fromCodePoint;
  var join$5 = functionUncurryThis([].join); // length should be 1, old FF problem

  var INCORRECT_LENGTH = !!$fromCodePoint && $fromCodePoint.length != 1; // `String.fromCodePoint` method
  // https://tc39.es/ecma262/#sec-string.fromcodepoint

  _export({
    target: 'String',
    stat: true,
    forced: INCORRECT_LENGTH
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    fromCodePoint: function fromCodePoint(x) {
      var elements = [];
      var length = arguments.length;
      var i = 0;
      var code;

      while (length > i) {
        code = +arguments[i++];
        if (toAbsoluteIndex(code, 0x10FFFF) !== code) throw RangeError$5(code + ' is not a valid code point');
        elements[i] = code < 0x10000 ? fromCharCode$3(code) : fromCharCode$3(((code -= 0x10000) >> 10) + 0xD800, code % 0x400 + 0xDC00);
      }

      return join$5(elements, '');
    }
  });

  var stringIndexOf$3 = functionUncurryThis(''.indexOf); // `String.prototype.includes` method
  // https://tc39.es/ecma262/#sec-string.prototype.includes

  _export({
    target: 'String',
    proto: true,
    forced: !correctIsRegexpLogic('includes')
  }, {
    includes: function includes(searchString
    /* , position = 0 */
    ) {
      return !!~stringIndexOf$3(toString_1(requireObjectCoercible(this)), toString_1(notARegexp(searchString)), arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var charAt$7 = stringMultibyte.charAt;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$5 = internalState.set;
  var getInternalState$2 = internalState.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator

  defineIterator(String, 'String', function (iterated) {
    setInternalState$5(this, {
      type: STRING_ITERATOR,
      string: toString_1(iterated),
      index: 0
    }); // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$2(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt$7(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  });

  var SPECIES = wellKnownSymbol('species');
  var RegExpPrototype$2 = RegExp.prototype;

  var fixRegexpWellKnownSymbolLogic = function fixRegexpWellKnownSymbolLogic(KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol(KEY);
    var DELEGATES_TO_SYMBOL = !fails(function () {
      // String methods call symbol-named RegEp methods
      var O = {};

      O[SYMBOL] = function () {
        return 7;
      };

      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;

      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.

        re.constructor = {};

        re.constructor[SPECIES] = function () {
          return re;
        };

        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }

      re.exec = function () {
        execCalled = true;
        return null;
      };

      re[SYMBOL]('');
      return !execCalled;
    });

    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
      var uncurriedNativeRegExpMethod = functionUncurryThis(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = functionUncurryThis(nativeMethod);
        var $exec = regexp.exec;

        if ($exec === regexpExec || $exec === RegExpPrototype$2.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: uncurriedNativeRegExpMethod(regexp, str, arg2)
            };
          }

          return {
            done: true,
            value: uncurriedNativeMethod(str, regexp, arg2)
          };
        }

        return {
          done: false
        };
      });
      redefine(String.prototype, KEY, methods[0]);
      redefine(RegExpPrototype$2, SYMBOL, methods[1]);
    }

    if (SHAM) createNonEnumerableProperty(RegExpPrototype$2[SYMBOL], 'sham', true);
  };

  var charAt$6 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex

  var advanceStringIndex = function advanceStringIndex(S, index, unicode) {
    return index + (unicode ? charAt$6(S, index).length : 1);
  };

  var TypeError$6 = global_1.TypeError; // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec

  var regexpExecAbstract = function regexpExecAbstract(R, S) {
    var exec = R.exec;

    if (isCallable(exec)) {
      var result = functionCall(exec, R, S);
      if (result !== null) anObject(result);
      return result;
    }

    if (classofRaw(R) === 'RegExp') return functionCall(regexpExec, R, S);
    throw TypeError$6('RegExp#exec called on incompatible receiver');
  };

  fixRegexpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : getMethod(regexp, MATCH);
      return matcher ? functionCall(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString_1(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject(this);
      var S = toString_1(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done) return res.value;
      if (!rx.global) return regexpExecAbstract(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;

      while ((result = regexpExecAbstract(rx, S)) !== null) {
        var matchStr = toString_1(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }

      return n === 0 ? null : A;
    }];
  });

  /* eslint-disable es/no-string-prototype-matchall -- safe */


  var MATCH_ALL = wellKnownSymbol('matchAll');
  var REGEXP_STRING = 'RegExp String';
  var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
  var setInternalState$4 = internalState.set;
  var getInternalState$1 = internalState.getterFor(REGEXP_STRING_ITERATOR);
  var RegExpPrototype$1 = RegExp.prototype;
  var TypeError$5 = global_1.TypeError;
  var getFlags$2 = functionUncurryThis(regexpFlags);
  var stringIndexOf$2 = functionUncurryThis(''.indexOf);
  var un$MatchAll = functionUncurryThis(''.matchAll);
  var WORKS_WITH_NON_GLOBAL_REGEX = !!un$MatchAll && !fails(function () {
    un$MatchAll('a', /./);
  });
  var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
    setInternalState$4(this, {
      type: REGEXP_STRING_ITERATOR,
      regexp: regexp,
      string: string,
      global: $global,
      unicode: fullUnicode,
      done: false
    });
  }, REGEXP_STRING, function next() {
    var state = getInternalState$1(this);
    if (state.done) return {
      value: undefined,
      done: true
    };
    var R = state.regexp;
    var S = state.string;
    var match = regexpExecAbstract(R, S);
    if (match === null) return {
      value: undefined,
      done: state.done = true
    };

    if (state.global) {
      if (toString_1(match[0]) === '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
      return {
        value: match,
        done: false
      };
    }

    state.done = true;
    return {
      value: match,
      done: false
    };
  });

  var $matchAll = function $matchAll(string) {
    var R = anObject(this);
    var S = toString_1(string);
    var C, flagsValue, flags, matcher, $global, fullUnicode;
    C = speciesConstructor(R, RegExp);
    flagsValue = R.flags;

    if (flagsValue === undefined && objectIsPrototypeOf(RegExpPrototype$1, R) && !('flags' in RegExpPrototype$1)) {
      flagsValue = getFlags$2(R);
    }

    flags = flagsValue === undefined ? '' : toString_1(flagsValue);
    matcher = new C(C === RegExp ? R.source : R, flags);
    $global = !!~stringIndexOf$2(flags, 'g');
    fullUnicode = !!~stringIndexOf$2(flags, 'u');
    matcher.lastIndex = toLength(R.lastIndex);
    return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
  }; // `String.prototype.matchAll` method
  // https://tc39.es/ecma262/#sec-string.prototype.matchall


  _export({
    target: 'String',
    proto: true,
    forced: WORKS_WITH_NON_GLOBAL_REGEX
  }, {
    matchAll: function matchAll(regexp) {
      var O = requireObjectCoercible(this);
      var flags, S, matcher, rx;

      if (regexp != null) {
        if (isRegexp(regexp)) {
          flags = toString_1(requireObjectCoercible('flags' in RegExpPrototype$1 ? regexp.flags : getFlags$2(regexp)));
          if (!~stringIndexOf$2(flags, 'g')) throw TypeError$5('`.matchAll` does not allow non-global regexes');
        }

        if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);
        matcher = getMethod(regexp, MATCH_ALL);
        if (matcher === undefined && isPure && classofRaw(regexp) == 'RegExp') matcher = $matchAll;
        if (matcher) return functionCall(matcher, regexp, O);
      } else if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);

      S = toString_1(O);
      rx = new RegExp(regexp, 'g');
      return rx[MATCH_ALL](S);
    }
  });
  MATCH_ALL in RegExpPrototype$1 || redefine(RegExpPrototype$1, MATCH_ALL, $matchAll);

  var stringPadWebkitBug = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(engineUserAgent);

  var $padEnd = stringPad.end; // `String.prototype.padEnd` method
  // https://tc39.es/ecma262/#sec-string.prototype.padend

  _export({
    target: 'String',
    proto: true,
    forced: stringPadWebkitBug
  }, {
    padEnd: function padEnd(maxLength
    /* , fillString = ' ' */
    ) {
      return $padEnd(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var $padStart = stringPad.start; // `String.prototype.padStart` method
  // https://tc39.es/ecma262/#sec-string.prototype.padstart

  _export({
    target: 'String',
    proto: true,
    forced: stringPadWebkitBug
  }, {
    padStart: function padStart(maxLength
    /* , fillString = ' ' */
    ) {
      return $padStart(this, maxLength, arguments.length > 1 ? arguments[1] : undefined);
    }
  });

  var push$6 = functionUncurryThis([].push);
  var join$4 = functionUncurryThis([].join); // `String.raw` method
  // https://tc39.es/ecma262/#sec-string.raw

  _export({
    target: 'String',
    stat: true
  }, {
    raw: function raw(template) {
      var rawTemplate = toIndexedObject(toObject(template).raw);
      var literalSegments = lengthOfArrayLike(rawTemplate);
      var argumentsLength = arguments.length;
      var elements = [];
      var i = 0;

      while (literalSegments > i) {
        push$6(elements, toString_1(rawTemplate[i++]));
        if (i === literalSegments) return join$4(elements, '');
        if (i < argumentsLength) push$6(elements, toString_1(arguments[i]));
      }
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.repeat

  _export({
    target: 'String',
    proto: true
  }, {
    repeat: stringRepeat
  });

  var floor$3 = Math.floor;
  var charAt$5 = functionUncurryThis(''.charAt);
  var replace$5 = functionUncurryThis(''.replace);
  var stringSlice$8 = functionUncurryThis(''.slice);
  var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g; // `GetSubstitution` abstract operation
  // https://tc39.es/ecma262/#sec-getsubstitution

  var getSubstitution = function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;

    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }

    return replace$5(replacement, symbols, function (match, ch) {
      var capture;

      switch (charAt$5(ch, 0)) {
        case '$':
          return '$';

        case '&':
          return matched;

        case '`':
          return stringSlice$8(str, 0, position);

        case "'":
          return stringSlice$8(str, tailPos);

        case '<':
          capture = namedCaptures[stringSlice$8(ch, 1, -1)];
          break;

        default:
          // \d\d?
          var n = +ch;
          if (n === 0) return match;

          if (n > m) {
            var f = floor$3(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? charAt$5(ch, 1) : captures[f - 1] + charAt$5(ch, 1);
            return match;
          }

          capture = captures[n - 1];
      }

      return capture === undefined ? '' : capture;
    });
  };

  var REPLACE$1 = wellKnownSymbol('replace');
  var max$2 = Math.max;
  var min$3 = Math.min;
  var concat = functionUncurryThis([].concat);
  var push$5 = functionUncurryThis([].push);
  var stringIndexOf$1 = functionUncurryThis(''.indexOf);
  var stringSlice$7 = functionUncurryThis(''.slice);

  var maybeToString = function maybeToString(it) {
    return it === undefined ? it : String(it);
  }; // IE <= 11 replaces $0 with the whole match, as if it was $&
  // https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0


  var REPLACE_KEEPS_$0 = function () {
    // eslint-disable-next-line regexp/prefer-escape-replacement-dollar-char -- required for testing
    return 'a'.replace(/./, '$0') === '$0';
  }(); // Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string


  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function () {
    if (/./[REPLACE$1]) {
      return /./[REPLACE$1]('a', '$0') === '';
    }

    return false;
  }();

  var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
    var re = /./;

    re.exec = function () {
      var result = [];
      result.groups = {
        a: '7'
      };
      return result;
    }; // eslint-disable-next-line regexp/no-useless-dollar-replacements -- false positive


    return ''.replace(re, '$<a>') !== '7';
  }); // @@replace logic

  fixRegexpWellKnownSymbolLogic('replace', function (_, nativeReplace, maybeCallNative) {
    var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';
    return [// `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : getMethod(searchValue, REPLACE$1);
      return replacer ? functionCall(replacer, searchValue, O, replaceValue) : functionCall(nativeReplace, toString_1(O), searchValue, replaceValue);
    }, // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function (string, replaceValue) {
      var rx = anObject(this);
      var S = toString_1(string);

      if (typeof replaceValue == 'string' && stringIndexOf$1(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf$1(replaceValue, '$<') === -1) {
        var res = maybeCallNative(nativeReplace, rx, S, replaceValue);
        if (res.done) return res.value;
      }

      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString_1(replaceValue);
      var global = rx.global;

      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }

      var results = [];

      while (true) {
        var result = regexpExecAbstract(rx, S);
        if (result === null) break;
        push$5(results, result);
        if (!global) break;
        var matchStr = toString_1(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;

      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString_1(result[0]);
        var position = max$2(min$3(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = []; // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.

        for (var j = 1; j < result.length; j++) {
          push$5(captures, maybeToString(result[j]));
        }

        var namedCaptures = result.groups;

        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== undefined) push$5(replacerArgs, namedCaptures);
          var replacement = toString_1(functionApply(replaceValue, undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }

        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$7(S, nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }

      return accumulatedResult + stringSlice$7(S, nextSourcePosition);
    }];
  }, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);

  var REPLACE = wellKnownSymbol('replace');
  var RegExpPrototype = RegExp.prototype;
  var TypeError$4 = global_1.TypeError;
  var getFlags$1 = functionUncurryThis(regexpFlags);
  var indexOf = functionUncurryThis(''.indexOf);
  functionUncurryThis(''.replace);
  var stringSlice$6 = functionUncurryThis(''.slice);
  var max$1 = Math.max;

  var stringIndexOf = function stringIndexOf(string, searchValue, fromIndex) {
    if (fromIndex > string.length) return -1;
    if (searchValue === '') return fromIndex;
    return indexOf(string, searchValue, fromIndex);
  }; // `String.prototype.replaceAll` method
  // https://tc39.es/ecma262/#sec-string.prototype.replaceall


  _export({
    target: 'String',
    proto: true
  }, {
    replaceAll: function replaceAll(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var IS_REG_EXP, flags, replacer, string, searchString, functionalReplace, searchLength, advanceBy, replacement;
      var position = 0;
      var endOfLastMatch = 0;
      var result = '';

      if (searchValue != null) {
        IS_REG_EXP = isRegexp(searchValue);

        if (IS_REG_EXP) {
          flags = toString_1(requireObjectCoercible('flags' in RegExpPrototype ? searchValue.flags : getFlags$1(searchValue)));
          if (!~indexOf(flags, 'g')) throw TypeError$4('`.replaceAll` does not allow non-global regexes');
        }

        replacer = getMethod(searchValue, REPLACE);

        if (replacer) {
          return functionCall(replacer, searchValue, O, replaceValue);
        }
      }

      string = toString_1(O);
      searchString = toString_1(searchValue);
      functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString_1(replaceValue);
      searchLength = searchString.length;
      advanceBy = max$1(1, searchLength);
      position = stringIndexOf(string, searchString, 0);

      while (position !== -1) {
        replacement = functionalReplace ? toString_1(replaceValue(searchString, position, string)) : getSubstitution(searchString, string, position, [], undefined, replaceValue);
        result += stringSlice$6(string, endOfLastMatch, position) + replacement;
        endOfLastMatch = position + searchLength;
        position = stringIndexOf(string, searchString, position + advanceBy);
      }

      if (endOfLastMatch < string.length) {
        result += stringSlice$6(string, endOfLastMatch);
      }

      return result;
    }
  });

  fixRegexpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
    return [// `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = regexp == undefined ? undefined : getMethod(regexp, SEARCH);
      return searcher ? functionCall(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString_1(O));
    }, // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString_1(string);
      var res = maybeCallNative(nativeSearch, rx, S);
      if (res.done) return res.value;
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regexpExecAbstract(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }];
  });

  var UNSUPPORTED_Y = regexpStickyHelpers.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min$2 = Math.min;
  var $push = [].push;
  var exec$4 = functionUncurryThis(/./.exec);
  var push$4 = functionUncurryThis($push);
  var stringSlice$5 = functionUncurryThis(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper

  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;

    re.exec = function () {
      return originalExec.apply(this, arguments);
    };

    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  }); // @@split logic

  fixRegexpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;

    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function internalSplit(separator, limit) {
        var string = toString_1(requireObjectCoercible(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split

        if (!isRegexp(separator)) {
          return functionCall(nativeSplit, string, separator, lim);
        }

        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy

        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;

        while (match = functionCall(regexpExec, separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;

          if (lastIndex > lastLastIndex) {
            push$4(output, stringSlice$5(string, lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) functionApply($push, output, arraySliceSimple(match, 1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }

          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }

        if (lastLastIndex === string.length) {
          if (lastLength || !exec$4(separatorCopy, '')) push$4(output, '');
        } else push$4(output, stringSlice$5(string, lastLastIndex));

        return output.length > lim ? arraySliceSimple(output, 0, lim) : output;
      }; // Chakra, V8

    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function internalSplit(separator, limit) {
        return separator === undefined && limit === 0 ? [] : functionCall(nativeSplit, this, separator, limit);
      };
    } else internalSplit = nativeSplit;

    return [// `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : getMethod(separator, SPLIT);
      return splitter ? functionCall(splitter, separator, O, limit) : functionCall(internalSplit, toString_1(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString_1(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.

      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];

      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regexpExecAbstract(splitter, UNSUPPORTED_Y ? stringSlice$5(S, q) : S);
        var e;

        if (z === null || (e = min$2(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push$4(A, stringSlice$5(S, p, q));
          if (A.length === lim) return A;

          for (var i = 1; i <= z.length - 1; i++) {
            push$4(A, z[i]);
            if (A.length === lim) return A;
          }

          q = p = e;
        }
      }

      push$4(A, stringSlice$5(S, p));
      return A;
    }];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);

  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f; // eslint-disable-next-line es/no-string-prototype-startswith -- safe

  var un$StartsWith = functionUncurryThis(''.startsWith);
  var stringSlice$4 = functionUncurryThis(''.slice);
  var min$1 = Math.min;
  var CORRECT_IS_REGEXP_LOGIC = correctIsRegexpLogic('startsWith'); // https://github.com/zloirock/core-js/pull/702

  var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function () {
    var descriptor = getOwnPropertyDescriptor(String.prototype, 'startsWith');
    return descriptor && !descriptor.writable;
  }(); // `String.prototype.startsWith` method
  // https://tc39.es/ecma262/#sec-string.prototype.startswith

  _export({
    target: 'String',
    proto: true,
    forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
  }, {
    startsWith: function startsWith(searchString
    /* , position = 0 */
    ) {
      var that = toString_1(requireObjectCoercible(this));
      notARegexp(searchString);
      var index = toLength(min$1(arguments.length > 1 ? arguments[1] : undefined, that.length));
      var search = toString_1(searchString);
      return un$StartsWith ? un$StartsWith(that, search, index) : stringSlice$4(that, index, index + search.length) === search;
    }
  });

  var stringSlice$3 = functionUncurryThis(''.slice);
  var max = Math.max;
  var min = Math.min; // eslint-disable-next-line unicorn/prefer-string-slice -- required for testing

  var FORCED$5 = !''.substr || 'ab'.substr(-1) !== 'b'; // `String.prototype.substr` method
  // https://tc39.es/ecma262/#sec-string.prototype.substr

  _export({
    target: 'String',
    proto: true,
    forced: FORCED$5
  }, {
    substr: function substr(start, length) {
      var that = toString_1(requireObjectCoercible(this));
      var size = that.length;
      var intStart = toIntegerOrInfinity(start);
      var intLength, intEnd;
      if (intStart === Infinity) intStart = 0;
      if (intStart < 0) intStart = max(size + intStart, 0);
      intLength = length === undefined ? size : toIntegerOrInfinity(length);
      if (intLength <= 0 || intLength === Infinity) return '';
      intEnd = min(intStart + intLength, size);
      return intStart >= intEnd ? '' : stringSlice$3(that, intStart, intEnd);
    }
  });

  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var non = "\u200B\x85\u180E"; // check that a method works with the correct list
  // of whitespaces and has a correct name

  var stringTrimForced = function stringTrimForced(METHOD_NAME) {
    return fails(function () {
      return !!whitespaces$1[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME && whitespaces$1[METHOD_NAME].name !== METHOD_NAME;
    });
  };

  var $trim = stringTrim.trim; // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim

  _export({
    target: 'String',
    proto: true,
    forced: stringTrimForced('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });

  var $trimEnd = stringTrim.end;
  var FORCED$4 = stringTrimForced('trimEnd');
  var trimEnd = FORCED$4 ? function trimEnd() {
    return $trimEnd(this); // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
  } : ''.trimEnd; // `String.prototype.{ trimEnd, trimRight }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimend
  // https://tc39.es/ecma262/#String.prototype.trimright

  _export({
    target: 'String',
    proto: true,
    name: 'trimEnd',
    forced: FORCED$4
  }, {
    trimEnd: trimEnd,
    trimRight: trimEnd
  });

  var $trimStart = stringTrim.start;
  var FORCED$3 = stringTrimForced('trimStart');
  var trimStart = FORCED$3 ? function trimStart() {
    return $trimStart(this); // eslint-disable-next-line es/no-string-prototype-trimstart-trimend -- safe
  } : ''.trimStart; // `String.prototype.{ trimStart, trimLeft }` methods
  // https://tc39.es/ecma262/#sec-string.prototype.trimstart
  // https://tc39.es/ecma262/#String.prototype.trimleft

  _export({
    target: 'String',
    proto: true,
    name: 'trimStart',
    forced: FORCED$3
  }, {
    trimStart: trimStart,
    trimLeft: trimStart
  });

  var quot = /"/g;
  var replace$4 = functionUncurryThis(''.replace); // `CreateHTML` abstract operation
  // https://tc39.es/ecma262/#sec-createhtml

  var createHtml = function createHtml(string, tag, attribute, value) {
    var S = toString_1(requireObjectCoercible(string));
    var p1 = '<' + tag;
    if (attribute !== '') p1 += ' ' + attribute + '="' + replace$4(toString_1(value), quot, '&quot;') + '"';
    return p1 + '>' + S + '</' + tag + '>';
  };

  // of a tag and escaping quotes in arguments

  var stringHtmlForced = function stringHtmlForced(METHOD_NAME) {
    return fails(function () {
      var test = ''[METHOD_NAME]('"');
      return test !== test.toLowerCase() || test.split('"').length > 3;
    });
  };

  // https://tc39.es/ecma262/#sec-string.prototype.anchor


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('anchor')
  }, {
    anchor: function anchor(name) {
      return createHtml(this, 'a', 'name', name);
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.big


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('big')
  }, {
    big: function big() {
      return createHtml(this, 'big', '', '');
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.blink


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('blink')
  }, {
    blink: function blink() {
      return createHtml(this, 'blink', '', '');
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.bold


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('bold')
  }, {
    bold: function bold() {
      return createHtml(this, 'b', '', '');
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.fixed


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('fixed')
  }, {
    fixed: function fixed() {
      return createHtml(this, 'tt', '', '');
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.fontcolor


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('fontcolor')
  }, {
    fontcolor: function fontcolor(color) {
      return createHtml(this, 'font', 'color', color);
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.fontsize


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('fontsize')
  }, {
    fontsize: function fontsize(size) {
      return createHtml(this, 'font', 'size', size);
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.italics


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('italics')
  }, {
    italics: function italics() {
      return createHtml(this, 'i', '', '');
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.link


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('link')
  }, {
    link: function link(url) {
      return createHtml(this, 'a', 'href', url);
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.small


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('small')
  }, {
    small: function small() {
      return createHtml(this, 'small', '', '');
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.strike


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('strike')
  }, {
    strike: function strike() {
      return createHtml(this, 'strike', '', '');
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.sub


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('sub')
  }, {
    sub: function sub() {
      return createHtml(this, 'sub', '', '');
    }
  });

  // https://tc39.es/ecma262/#sec-string.prototype.sup


  _export({
    target: 'String',
    proto: true,
    forced: stringHtmlForced('sup')
  }, {
    sup: function sup() {
      return createHtml(this, 'sup', '', '');
    }
  });

  /* eslint-disable no-new -- required for testing */

  var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
  var ArrayBuffer$1 = global_1.ArrayBuffer;
  var Int8Array$3 = global_1.Int8Array;
  var typedArrayConstructorsRequireWrappers = !NATIVE_ARRAY_BUFFER_VIEWS || !fails(function () {
    Int8Array$3(1);
  }) || !fails(function () {
    new Int8Array$3(-1);
  }) || !checkCorrectnessOfIteration(function (iterable) {
    new Int8Array$3();
    new Int8Array$3(null);
    new Int8Array$3(1.5);
    new Int8Array$3(iterable);
  }, true) || fails(function () {
    // Safari (11+) bug - a reason why even Safari 13 should load a typed array polyfill
    return new Int8Array$3(new ArrayBuffer$1(2), 1, undefined).length !== 1;
  });

  var RangeError$4 = global_1.RangeError;

  var toPositiveInteger = function toPositiveInteger(it) {
    var result = toIntegerOrInfinity(it);
    if (result < 0) throw RangeError$4("The argument can't be less than 0");
    return result;
  };

  var RangeError$3 = global_1.RangeError;

  var toOffset = function toOffset(it, BYTES) {
    var offset = toPositiveInteger(it);
    if (offset % BYTES) throw RangeError$3('Wrong offset');
    return offset;
  };

  var aTypedArrayConstructor$2 = arrayBufferViewCore.aTypedArrayConstructor;

  var typedArrayFrom = function from(source
  /* , mapfn, thisArg */
  ) {
    var C = aConstructor(this);
    var O = toObject(source);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iteratorMethod = getIteratorMethod(O);
    var i, length, result, step, iterator, next;

    if (iteratorMethod && !isArrayIteratorMethod(iteratorMethod)) {
      iterator = getIterator(O, iteratorMethod);
      next = iterator.next;
      O = [];

      while (!(step = functionCall(next, iterator)).done) {
        O.push(step.value);
      }
    }

    if (mapping && argumentsLength > 2) {
      mapfn = functionBindContext(mapfn, arguments[2]);
    }

    length = lengthOfArrayLike(O);
    result = new (aTypedArrayConstructor$2(C))(length);

    for (i = 0; length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }

    return result;
  };

  var typedArrayConstructor = createCommonjsModule(function (module) {

    var getOwnPropertyNames = objectGetOwnPropertyNames.f;
    var forEach = arrayIteration.forEach;
    var getInternalState = internalState.get;
    var setInternalState = internalState.set;
    var nativeDefineProperty = objectDefineProperty.f;
    var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    var round = Math.round;
    var RangeError = global_1.RangeError;
    var ArrayBuffer = arrayBuffer.ArrayBuffer;
    var ArrayBufferPrototype = ArrayBuffer.prototype;
    var DataView = arrayBuffer.DataView;
    var NATIVE_ARRAY_BUFFER_VIEWS = arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS;
    var TYPED_ARRAY_CONSTRUCTOR = arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;
    var TYPED_ARRAY_TAG = arrayBufferViewCore.TYPED_ARRAY_TAG;
    var TypedArray = arrayBufferViewCore.TypedArray;
    var TypedArrayPrototype = arrayBufferViewCore.TypedArrayPrototype;
    var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
    var isTypedArray = arrayBufferViewCore.isTypedArray;
    var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
    var WRONG_LENGTH = 'Wrong length';

    var fromList = function fromList(C, list) {
      aTypedArrayConstructor(C);
      var index = 0;
      var length = list.length;
      var result = new C(length);

      while (length > index) {
        result[index] = list[index++];
      }

      return result;
    };

    var addGetter = function addGetter(it, key) {
      nativeDefineProperty(it, key, {
        get: function get() {
          return getInternalState(this)[key];
        }
      });
    };

    var isArrayBuffer = function isArrayBuffer(it) {
      var klass;
      return objectIsPrototypeOf(ArrayBufferPrototype, it) || (klass = classof(it)) == 'ArrayBuffer' || klass == 'SharedArrayBuffer';
    };

    var isTypedArrayIndex = function isTypedArrayIndex(target, key) {
      return isTypedArray(target) && !isSymbol(key) && key in target && isIntegralNumber(+key) && key >= 0;
    };

    var wrappedGetOwnPropertyDescriptor = function getOwnPropertyDescriptor(target, key) {
      key = toPropertyKey(key);
      return isTypedArrayIndex(target, key) ? createPropertyDescriptor(2, target[key]) : nativeGetOwnPropertyDescriptor(target, key);
    };

    var wrappedDefineProperty = function defineProperty(target, key, descriptor) {
      key = toPropertyKey(key);

      if (isTypedArrayIndex(target, key) && isObject(descriptor) && hasOwnProperty_1(descriptor, 'value') && !hasOwnProperty_1(descriptor, 'get') && !hasOwnProperty_1(descriptor, 'set') // TODO: add validation descriptor w/o calling accessors
      && !descriptor.configurable && (!hasOwnProperty_1(descriptor, 'writable') || descriptor.writable) && (!hasOwnProperty_1(descriptor, 'enumerable') || descriptor.enumerable)) {
        target[key] = descriptor.value;
        return target;
      }

      return nativeDefineProperty(target, key, descriptor);
    };

    if (descriptors) {
      if (!NATIVE_ARRAY_BUFFER_VIEWS) {
        objectGetOwnPropertyDescriptor.f = wrappedGetOwnPropertyDescriptor;
        objectDefineProperty.f = wrappedDefineProperty;
        addGetter(TypedArrayPrototype, 'buffer');
        addGetter(TypedArrayPrototype, 'byteOffset');
        addGetter(TypedArrayPrototype, 'byteLength');
        addGetter(TypedArrayPrototype, 'length');
      }

      _export({
        target: 'Object',
        stat: true,
        forced: !NATIVE_ARRAY_BUFFER_VIEWS
      }, {
        getOwnPropertyDescriptor: wrappedGetOwnPropertyDescriptor,
        defineProperty: wrappedDefineProperty
      });

      module.exports = function (TYPE, wrapper, CLAMPED) {
        var BYTES = TYPE.match(/\d+$/)[0] / 8;
        var CONSTRUCTOR_NAME = TYPE + (CLAMPED ? 'Clamped' : '') + 'Array';
        var GETTER = 'get' + TYPE;
        var SETTER = 'set' + TYPE;
        var NativeTypedArrayConstructor = global_1[CONSTRUCTOR_NAME];
        var TypedArrayConstructor = NativeTypedArrayConstructor;
        var TypedArrayConstructorPrototype = TypedArrayConstructor && TypedArrayConstructor.prototype;
        var exported = {};

        var getter = function getter(that, index) {
          var data = getInternalState(that);
          return data.view[GETTER](index * BYTES + data.byteOffset, true);
        };

        var setter = function setter(that, index, value) {
          var data = getInternalState(that);
          if (CLAMPED) value = (value = round(value)) < 0 ? 0 : value > 0xFF ? 0xFF : value & 0xFF;
          data.view[SETTER](index * BYTES + data.byteOffset, value, true);
        };

        var addElement = function addElement(that, index) {
          nativeDefineProperty(that, index, {
            get: function get() {
              return getter(this, index);
            },
            set: function set(value) {
              return setter(this, index, value);
            },
            enumerable: true
          });
        };

        if (!NATIVE_ARRAY_BUFFER_VIEWS) {
          TypedArrayConstructor = wrapper(function (that, data, offset, $length) {
            anInstance(that, TypedArrayConstructorPrototype);
            var index = 0;
            var byteOffset = 0;
            var buffer, byteLength, length;

            if (!isObject(data)) {
              length = toIndex(data);
              byteLength = length * BYTES;
              buffer = new ArrayBuffer(byteLength);
            } else if (isArrayBuffer(data)) {
              buffer = data;
              byteOffset = toOffset(offset, BYTES);
              var $len = data.byteLength;

              if ($length === undefined) {
                if ($len % BYTES) throw RangeError(WRONG_LENGTH);
                byteLength = $len - byteOffset;
                if (byteLength < 0) throw RangeError(WRONG_LENGTH);
              } else {
                byteLength = toLength($length) * BYTES;
                if (byteLength + byteOffset > $len) throw RangeError(WRONG_LENGTH);
              }

              length = byteLength / BYTES;
            } else if (isTypedArray(data)) {
              return fromList(TypedArrayConstructor, data);
            } else {
              return functionCall(typedArrayFrom, TypedArrayConstructor, data);
            }

            setInternalState(that, {
              buffer: buffer,
              byteOffset: byteOffset,
              byteLength: byteLength,
              length: length,
              view: new DataView(buffer)
            });

            while (index < length) {
              addElement(that, index++);
            }
          });
          if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
          TypedArrayConstructorPrototype = TypedArrayConstructor.prototype = objectCreate(TypedArrayPrototype);
        } else if (typedArrayConstructorsRequireWrappers) {
          TypedArrayConstructor = wrapper(function (dummy, data, typedArrayOffset, $length) {
            anInstance(dummy, TypedArrayConstructorPrototype);
            return inheritIfRequired(function () {
              if (!isObject(data)) return new NativeTypedArrayConstructor(toIndex(data));
              if (isArrayBuffer(data)) return $length !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES), $length) : typedArrayOffset !== undefined ? new NativeTypedArrayConstructor(data, toOffset(typedArrayOffset, BYTES)) : new NativeTypedArrayConstructor(data);
              if (isTypedArray(data)) return fromList(TypedArrayConstructor, data);
              return functionCall(typedArrayFrom, TypedArrayConstructor, data);
            }(), dummy, TypedArrayConstructor);
          });
          if (objectSetPrototypeOf) objectSetPrototypeOf(TypedArrayConstructor, TypedArray);
          forEach(getOwnPropertyNames(NativeTypedArrayConstructor), function (key) {
            if (!(key in TypedArrayConstructor)) {
              createNonEnumerableProperty(TypedArrayConstructor, key, NativeTypedArrayConstructor[key]);
            }
          });
          TypedArrayConstructor.prototype = TypedArrayConstructorPrototype;
        }

        if (TypedArrayConstructorPrototype.constructor !== TypedArrayConstructor) {
          createNonEnumerableProperty(TypedArrayConstructorPrototype, 'constructor', TypedArrayConstructor);
        }

        createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_CONSTRUCTOR, TypedArrayConstructor);

        if (TYPED_ARRAY_TAG) {
          createNonEnumerableProperty(TypedArrayConstructorPrototype, TYPED_ARRAY_TAG, CONSTRUCTOR_NAME);
        }

        exported[CONSTRUCTOR_NAME] = TypedArrayConstructor;
        _export({
          global: true,
          forced: TypedArrayConstructor != NativeTypedArrayConstructor,
          sham: !NATIVE_ARRAY_BUFFER_VIEWS
        }, exported);

        if (!(BYTES_PER_ELEMENT in TypedArrayConstructor)) {
          createNonEnumerableProperty(TypedArrayConstructor, BYTES_PER_ELEMENT, BYTES);
        }

        if (!(BYTES_PER_ELEMENT in TypedArrayConstructorPrototype)) {
          createNonEnumerableProperty(TypedArrayConstructorPrototype, BYTES_PER_ELEMENT, BYTES);
        }

        setSpecies(CONSTRUCTOR_NAME);
      };
    } else module.exports = function () {
      /* empty */
    };
  });

  // https://tc39.es/ecma262/#sec-typedarray-objects

  typedArrayConstructor('Float32', function (init) {
    return function Float32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // https://tc39.es/ecma262/#sec-typedarray-objects

  typedArrayConstructor('Float64', function (init) {
    return function Float64Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // https://tc39.es/ecma262/#sec-typedarray-objects

  typedArrayConstructor('Int8', function (init) {
    return function Int8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // https://tc39.es/ecma262/#sec-typedarray-objects

  typedArrayConstructor('Int16', function (init) {
    return function Int16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // https://tc39.es/ecma262/#sec-typedarray-objects

  typedArrayConstructor('Int32', function (init) {
    return function Int32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // https://tc39.es/ecma262/#sec-typedarray-objects

  typedArrayConstructor('Uint8', function (init) {
    return function Uint8Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // https://tc39.es/ecma262/#sec-typedarray-objects

  typedArrayConstructor('Uint8', function (init) {
    return function Uint8ClampedArray(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  }, true);

  // https://tc39.es/ecma262/#sec-typedarray-objects

  typedArrayConstructor('Uint16', function (init) {
    return function Uint16Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  // https://tc39.es/ecma262/#sec-typedarray-objects

  typedArrayConstructor('Uint32', function (init) {
    return function Uint32Array(data, byteOffset, length) {
      return init(this, data, byteOffset, length);
    };
  });

  var aTypedArray$m = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$n = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.at` method
  // https://github.com/tc39/proposal-relative-indexing-method

  exportTypedArrayMethod$n('at', function at(index) {
    var O = aTypedArray$m(this);
    var len = lengthOfArrayLike(O);
    var relativeIndex = toIntegerOrInfinity(index);
    var k = relativeIndex >= 0 ? relativeIndex : len + relativeIndex;
    return k < 0 || k >= len ? undefined : O[k];
  });

  var u$ArrayCopyWithin = functionUncurryThis(arrayCopyWithin);
  var aTypedArray$l = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$m = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.copyWithin` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.copywithin

  exportTypedArrayMethod$m('copyWithin', function copyWithin(target, start
  /* , end */
  ) {
    return u$ArrayCopyWithin(aTypedArray$l(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
  });

  var $every = arrayIteration.every;
  var aTypedArray$k = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$l = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.every` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.every

  exportTypedArrayMethod$l('every', function every(callbackfn
  /* , thisArg */
  ) {
    return $every(aTypedArray$k(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var aTypedArray$j = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$k = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.fill` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.fill

  exportTypedArrayMethod$k('fill', function fill(value
  /* , start, end */
  ) {
    var length = arguments.length;
    return functionCall(arrayFill, aTypedArray$j(this), value, length > 1 ? arguments[1] : undefined, length > 2 ? arguments[2] : undefined);
  });

  var arrayFromConstructorAndList = function arrayFromConstructorAndList(Constructor, list) {
    var index = 0;
    var length = lengthOfArrayLike(list);
    var result = new Constructor(length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  };

  var TYPED_ARRAY_CONSTRUCTOR = arrayBufferViewCore.TYPED_ARRAY_CONSTRUCTOR;
  var aTypedArrayConstructor$1 = arrayBufferViewCore.aTypedArrayConstructor; // a part of `TypedArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#typedarray-species-create

  var typedArraySpeciesConstructor = function typedArraySpeciesConstructor(originalArray) {
    return aTypedArrayConstructor$1(speciesConstructor(originalArray, originalArray[TYPED_ARRAY_CONSTRUCTOR]));
  };

  var typedArrayFromSpeciesAndList = function typedArrayFromSpeciesAndList(instance, list) {
    return arrayFromConstructorAndList(typedArraySpeciesConstructor(instance), list);
  };

  var $filter = arrayIteration.filter;
  var aTypedArray$i = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$j = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.filter` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.filter

  exportTypedArrayMethod$j('filter', function filter(callbackfn
  /* , thisArg */
  ) {
    var list = $filter(aTypedArray$i(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    return typedArrayFromSpeciesAndList(this, list);
  });

  var $find = arrayIteration.find;
  var aTypedArray$h = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$i = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.find` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.find

  exportTypedArrayMethod$i('find', function find(predicate
  /* , thisArg */
  ) {
    return $find(aTypedArray$h(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $findIndex = arrayIteration.findIndex;
  var aTypedArray$g = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$h = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.findIndex` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.findindex

  exportTypedArrayMethod$h('findIndex', function findIndex(predicate
  /* , thisArg */
  ) {
    return $findIndex(aTypedArray$g(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $forEach = arrayIteration.forEach;
  var aTypedArray$f = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$g = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.forEach` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.foreach

  exportTypedArrayMethod$g('forEach', function forEach(callbackfn
  /* , thisArg */
  ) {
    $forEach(aTypedArray$f(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var exportTypedArrayStaticMethod$1 = arrayBufferViewCore.exportTypedArrayStaticMethod; // `%TypedArray%.from` method
  // https://tc39.es/ecma262/#sec-%typedarray%.from

  exportTypedArrayStaticMethod$1('from', typedArrayFrom, typedArrayConstructorsRequireWrappers);

  var $includes = arrayIncludes.includes;
  var aTypedArray$e = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$f = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.includes` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.includes

  exportTypedArrayMethod$f('includes', function includes(searchElement
  /* , fromIndex */
  ) {
    return $includes(aTypedArray$e(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var $indexOf = arrayIncludes.indexOf;
  var aTypedArray$d = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$e = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.indexof

  exportTypedArrayMethod$e('indexOf', function indexOf(searchElement
  /* , fromIndex */
  ) {
    return $indexOf(aTypedArray$d(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
  });

  var ITERATOR$3 = wellKnownSymbol('iterator');
  var Uint8Array$1 = global_1.Uint8Array;
  var arrayValues = functionUncurryThis(es_array_iterator.values);
  var arrayKeys = functionUncurryThis(es_array_iterator.keys);
  var arrayEntries = functionUncurryThis(es_array_iterator.entries);
  var aTypedArray$c = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$d = arrayBufferViewCore.exportTypedArrayMethod;
  var TypedArrayPrototype = Uint8Array$1 && Uint8Array$1.prototype;
  var GENERIC = !fails(function () {
    TypedArrayPrototype[ITERATOR$3].call([1]);
  });
  var ITERATOR_IS_VALUES = !!TypedArrayPrototype && TypedArrayPrototype.values && TypedArrayPrototype[ITERATOR$3] === TypedArrayPrototype.values && TypedArrayPrototype.values.name === 'values';

  var typedArrayValues = function values() {
    return arrayValues(aTypedArray$c(this));
  }; // `%TypedArray%.prototype.entries` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.entries


  exportTypedArrayMethod$d('entries', function entries() {
    return arrayEntries(aTypedArray$c(this));
  }, GENERIC); // `%TypedArray%.prototype.keys` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.keys

  exportTypedArrayMethod$d('keys', function keys() {
    return arrayKeys(aTypedArray$c(this));
  }, GENERIC); // `%TypedArray%.prototype.values` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.values

  exportTypedArrayMethod$d('values', typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
    name: 'values'
  }); // `%TypedArray%.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype-@@iterator

  exportTypedArrayMethod$d(ITERATOR$3, typedArrayValues, GENERIC || !ITERATOR_IS_VALUES, {
    name: 'values'
  });

  var aTypedArray$b = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$c = arrayBufferViewCore.exportTypedArrayMethod;
  var $join = functionUncurryThis([].join); // `%TypedArray%.prototype.join` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.join

  exportTypedArrayMethod$c('join', function join(separator) {
    return $join(aTypedArray$b(this), separator);
  });

  var aTypedArray$a = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$b = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.lastIndexOf` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.lastindexof

  exportTypedArrayMethod$b('lastIndexOf', function lastIndexOf(searchElement
  /* , fromIndex */
  ) {
    var length = arguments.length;
    return functionApply(arrayLastIndexOf, aTypedArray$a(this), length > 1 ? [searchElement, arguments[1]] : [searchElement]);
  });

  var $map = arrayIteration.map;
  var aTypedArray$9 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$a = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.map` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.map

  exportTypedArrayMethod$a('map', function map(mapfn
  /* , thisArg */
  ) {
    return $map(aTypedArray$9(this), mapfn, arguments.length > 1 ? arguments[1] : undefined, function (O, length) {
      return new (typedArraySpeciesConstructor(O))(length);
    });
  });

  var aTypedArrayConstructor = arrayBufferViewCore.aTypedArrayConstructor;
  var exportTypedArrayStaticMethod = arrayBufferViewCore.exportTypedArrayStaticMethod; // `%TypedArray%.of` method
  // https://tc39.es/ecma262/#sec-%typedarray%.of

  exportTypedArrayStaticMethod('of', function
    /* ...items */
  of() {
    var index = 0;
    var length = arguments.length;
    var result = new (aTypedArrayConstructor(this))(length);

    while (length > index) {
      result[index] = arguments[index++];
    }

    return result;
  }, typedArrayConstructorsRequireWrappers);

  var $reduce = arrayReduce.left;
  var aTypedArray$8 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$9 = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduce

  exportTypedArrayMethod$9('reduce', function reduce(callbackfn
  /* , initialValue */
  ) {
    var length = arguments.length;
    return $reduce(aTypedArray$8(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
  });

  var $reduceRight = arrayReduce.right;
  var aTypedArray$7 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$8 = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.reduceRicht` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reduceright

  exportTypedArrayMethod$8('reduceRight', function reduceRight(callbackfn
  /* , initialValue */
  ) {
    var length = arguments.length;
    return $reduceRight(aTypedArray$7(this), callbackfn, length, length > 1 ? arguments[1] : undefined);
  });

  var aTypedArray$6 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$7 = arrayBufferViewCore.exportTypedArrayMethod;
  var floor$2 = Math.floor; // `%TypedArray%.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.reverse

  exportTypedArrayMethod$7('reverse', function reverse() {
    var that = this;
    var length = aTypedArray$6(that).length;
    var middle = floor$2(length / 2);
    var index = 0;
    var value;

    while (index < middle) {
      value = that[index];
      that[index++] = that[--length];
      that[length] = value;
    }

    return that;
  });

  var RangeError$2 = global_1.RangeError;
  var Int8Array$2 = global_1.Int8Array;
  var Int8ArrayPrototype = Int8Array$2 && Int8Array$2.prototype;
  var $set = Int8ArrayPrototype && Int8ArrayPrototype.set;
  var aTypedArray$5 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$6 = arrayBufferViewCore.exportTypedArrayMethod;
  var WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS = !fails(function () {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    var array = new Uint8ClampedArray(2);
    functionCall($set, array, {
      length: 1,
      0: 3
    }, 1);
    return array[1] !== 3;
  }); // https://bugs.chromium.org/p/v8/issues/detail?id=11294 and other

  var TO_OBJECT_BUG = WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS && arrayBufferViewCore.NATIVE_ARRAY_BUFFER_VIEWS && fails(function () {
    var array = new Int8Array$2(2);
    array.set(1);
    array.set('2', 1);
    return array[0] !== 0 || array[1] !== 2;
  }); // `%TypedArray%.prototype.set` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.set

  exportTypedArrayMethod$6('set', function set(arrayLike
  /* , offset */
  ) {
    aTypedArray$5(this);
    var offset = toOffset(arguments.length > 1 ? arguments[1] : undefined, 1);
    var src = toObject(arrayLike);
    if (WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS) return functionCall($set, this, src, offset);
    var length = this.length;
    var len = lengthOfArrayLike(src);
    var index = 0;
    if (len + offset > length) throw RangeError$2('Wrong length');

    while (index < len) {
      this[offset + index] = src[index++];
    }
  }, !WORKS_WITH_OBJECTS_AND_GEERIC_ON_TYPED_ARRAYS || TO_OBJECT_BUG);

  var aTypedArray$4 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$5 = arrayBufferViewCore.exportTypedArrayMethod;
  var FORCED$2 = fails(function () {
    // eslint-disable-next-line es/no-typed-arrays -- required for testing
    new Int8Array(1).slice();
  }); // `%TypedArray%.prototype.slice` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.slice

  exportTypedArrayMethod$5('slice', function slice(start, end) {
    var list = arraySlice$1(aTypedArray$4(this), start, end);
    var C = typedArraySpeciesConstructor(this);
    var index = 0;
    var length = list.length;
    var result = new C(length);

    while (length > index) {
      result[index] = list[index++];
    }

    return result;
  }, FORCED$2);

  var $some = arrayIteration.some;
  var aTypedArray$3 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$4 = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.some` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.some

  exportTypedArrayMethod$4('some', function some(callbackfn
  /* , thisArg */
  ) {
    return $some(aTypedArray$3(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  });

  var Array$1 = global_1.Array;
  var aTypedArray$2 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$3 = arrayBufferViewCore.exportTypedArrayMethod;
  var Uint16Array = global_1.Uint16Array;
  var un$Sort = Uint16Array && functionUncurryThis(Uint16Array.prototype.sort); // WebKit

  var ACCEPT_INCORRECT_ARGUMENTS = !!un$Sort && !(fails(function () {
    un$Sort(new Uint16Array(2), null);
  }) && fails(function () {
    un$Sort(new Uint16Array(2), {});
  }));
  var STABLE_SORT = !!un$Sort && !fails(function () {
    // feature detection can be too slow, so check engines versions
    if (engineV8Version) return engineV8Version < 74;
    if (engineFfVersion) return engineFfVersion < 67;
    if (engineIsIeOrEdge) return true;
    if (engineWebkitVersion) return engineWebkitVersion < 602;
    var array = new Uint16Array(516);
    var expected = Array$1(516);
    var index, mod;

    for (index = 0; index < 516; index++) {
      mod = index % 4;
      array[index] = 515 - index;
      expected[index] = index - 2 * mod + 3;
    }

    un$Sort(array, function (a, b) {
      return (a / 4 | 0) - (b / 4 | 0);
    });

    for (index = 0; index < 516; index++) {
      if (array[index] !== expected[index]) return true;
    }
  });

  var getSortCompare = function getSortCompare(comparefn) {
    return function (x, y) {
      if (comparefn !== undefined) return +comparefn(x, y) || 0; // eslint-disable-next-line no-self-compare -- NaN check

      if (y !== y) return -1; // eslint-disable-next-line no-self-compare -- NaN check

      if (x !== x) return 1;
      if (x === 0 && y === 0) return 1 / x > 0 && 1 / y < 0 ? 1 : -1;
      return x > y;
    };
  }; // `%TypedArray%.prototype.sort` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.sort


  exportTypedArrayMethod$3('sort', function sort(comparefn) {
    if (comparefn !== undefined) aCallable(comparefn);
    if (STABLE_SORT) return un$Sort(this, comparefn);
    return arraySort(aTypedArray$2(this), getSortCompare(comparefn));
  }, !STABLE_SORT || ACCEPT_INCORRECT_ARGUMENTS);

  var aTypedArray$1 = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$2 = arrayBufferViewCore.exportTypedArrayMethod; // `%TypedArray%.prototype.subarray` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.subarray

  exportTypedArrayMethod$2('subarray', function subarray(begin, end) {
    var O = aTypedArray$1(this);
    var length = O.length;
    var beginIndex = toAbsoluteIndex(begin, length);
    var C = typedArraySpeciesConstructor(O);
    return new C(O.buffer, O.byteOffset + beginIndex * O.BYTES_PER_ELEMENT, toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - beginIndex));
  });

  var Int8Array$1 = global_1.Int8Array;
  var aTypedArray = arrayBufferViewCore.aTypedArray;
  var exportTypedArrayMethod$1 = arrayBufferViewCore.exportTypedArrayMethod;
  var $toLocaleString = [].toLocaleString; // iOS Safari 6.x fails here

  var TO_LOCALE_STRING_BUG = !!Int8Array$1 && fails(function () {
    $toLocaleString.call(new Int8Array$1(1));
  });
  var FORCED$1 = fails(function () {
    return [1, 2].toLocaleString() != new Int8Array$1([1, 2]).toLocaleString();
  }) || !fails(function () {
    Int8Array$1.prototype.toLocaleString.call([1, 2]);
  }); // `%TypedArray%.prototype.toLocaleString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tolocalestring

  exportTypedArrayMethod$1('toLocaleString', function toLocaleString() {
    return functionApply($toLocaleString, TO_LOCALE_STRING_BUG ? arraySlice$1(aTypedArray(this)) : aTypedArray(this), arraySlice$1(arguments));
  }, FORCED$1);

  var exportTypedArrayMethod = arrayBufferViewCore.exportTypedArrayMethod;
  var Uint8Array = global_1.Uint8Array;
  var Uint8ArrayPrototype = Uint8Array && Uint8Array.prototype || {};
  var arrayToString = [].toString;
  var join$3 = functionUncurryThis([].join);

  if (fails(function () {
    arrayToString.call({});
  })) {
    arrayToString = function toString() {
      return join$3(this);
    };
  }

  var IS_NOT_ARRAY_METHOD = Uint8ArrayPrototype.toString != arrayToString; // `%TypedArray%.prototype.toString` method
  // https://tc39.es/ecma262/#sec-%typedarray%.prototype.tostring

  exportTypedArrayMethod('toString', arrayToString, IS_NOT_ARRAY_METHOD);

  var fromCharCode$2 = String.fromCharCode;
  var charAt$4 = functionUncurryThis(''.charAt);
  var exec$3 = functionUncurryThis(/./.exec);
  var stringSlice$2 = functionUncurryThis(''.slice);
  var hex2 = /^[\da-f]{2}$/i;
  var hex4 = /^[\da-f]{4}$/i; // `unescape` method
  // https://tc39.es/ecma262/#sec-unescape-string

  _export({
    global: true
  }, {
    unescape: function unescape(string) {
      var str = toString_1(string);
      var result = '';
      var length = str.length;
      var index = 0;
      var chr, part;

      while (index < length) {
        chr = charAt$4(str, index++);

        if (chr === '%') {
          if (charAt$4(str, index) === 'u') {
            part = stringSlice$2(str, index + 1, index + 5);

            if (exec$3(hex4, part)) {
              result += fromCharCode$2(parseInt(part, 16));
              index += 5;
              continue;
            }
          } else {
            part = stringSlice$2(str, index, index + 2);

            if (exec$3(hex2, part)) {
              result += fromCharCode$2(parseInt(part, 16));
              index += 2;
              continue;
            }
          }
        }

        result += chr;
      }

      return result;
    }
  });

  var getWeakData = internalMetadata.getWeakData;
  var setInternalState$3 = internalState.set;
  var internalStateGetterFor = internalState.getterFor;
  var find$1 = arrayIteration.find;
  var findIndex = arrayIteration.findIndex;
  var splice$1 = functionUncurryThis([].splice);
  var id = 0; // fallback for uncaught frozen keys

  var uncaughtFrozenStore = function uncaughtFrozenStore(store) {
    return store.frozen || (store.frozen = new UncaughtFrozenStore());
  };

  var UncaughtFrozenStore = function UncaughtFrozenStore() {
    this.entries = [];
  };

  var findUncaughtFrozen = function findUncaughtFrozen(store, key) {
    return find$1(store.entries, function (it) {
      return it[0] === key;
    });
  };

  UncaughtFrozenStore.prototype = {
    get: function get(key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function has(key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function set(key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.entries.push([key, value]);
    },
    'delete': function _delete(key) {
      var index = findIndex(this.entries, function (it) {
        return it[0] === key;
      });
      if (~index) splice$1(this.entries, index, 1);
      return !!~index;
    }
  };
  var collectionWeak = {
    getConstructor: function getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance(that, Prototype);
        setInternalState$3(that, {
          type: CONSTRUCTOR_NAME,
          id: id++,
          frozen: undefined
        });
        if (iterable != undefined) iterate(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

      var define = function define(that, key, value) {
        var state = getInternalState(that);
        var data = getWeakData(anObject(key), true);
        if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
        return that;
      };

      redefineAll(Prototype, {
        // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
        // https://tc39.es/ecma262/#sec-weakset.prototype.delete
        'delete': function _delete(key) {
          var state = getInternalState(this);
          if (!isObject(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state)['delete'](key);
          return data && hasOwnProperty_1(data, state.id) && delete data[state.id];
        },
        // `{ WeakMap, WeakSet }.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.has
        // https://tc39.es/ecma262/#sec-weakset.prototype.has
        has: function has(key) {
          var state = getInternalState(this);
          if (!isObject(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).has(key);
          return data && hasOwnProperty_1(data, state.id);
        }
      });
      redefineAll(Prototype, IS_MAP ? {
        // `WeakMap.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.get
        get: function get(key) {
          var state = getInternalState(this);

          if (isObject(key)) {
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state).get(key);
            return data ? data[state.id] : undefined;
          }
        },
        // `WeakMap.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.set
        set: function set(key, value) {
          return define(this, key, value);
        }
      } : {
        // `WeakSet.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-weakset.prototype.add
        add: function add(value) {
          return define(this, value, true);
        }
      });
      return Constructor;
    }
  };

  var enforceInternalState = internalState.enforce;
  var IS_IE11 = !global_1.ActiveXObject && 'ActiveXObject' in global_1;
  var InternalWeakMap;

  var wrapper = function wrapper(init) {
    return function WeakMap() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }; // `WeakMap` constructor
  // https://tc39.es/ecma262/#sec-weakmap-constructor


  var $WeakMap = collection('WeakMap', wrapper, collectionWeak); // IE11 WeakMap frozen keys fix
  // We can't use feature detection because it crash some old IE builds
  // https://github.com/zloirock/core-js/issues/485

  if (nativeWeakMap && IS_IE11) {
    InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
    internalMetadata.enable();
    var WeakMapPrototype = $WeakMap.prototype;
    var nativeDelete = functionUncurryThis(WeakMapPrototype['delete']);
    var nativeHas = functionUncurryThis(WeakMapPrototype.has);
    var nativeGet = functionUncurryThis(WeakMapPrototype.get);
    var nativeSet = functionUncurryThis(WeakMapPrototype.set);
    redefineAll(WeakMapPrototype, {
      'delete': function _delete(key) {
        if (isObject(key) && !objectIsExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeDelete(this, key) || state.frozen['delete'](key);
        }

        return nativeDelete(this, key);
      },
      has: function has(key) {
        if (isObject(key) && !objectIsExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key) || state.frozen.has(key);
        }

        return nativeHas(this, key);
      },
      get: function get(key) {
        if (isObject(key) && !objectIsExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
        }

        return nativeGet(this, key);
      },
      set: function set(key, value) {
        if (isObject(key) && !objectIsExtensible(key)) {
          var state = enforceInternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
        } else nativeSet(this, key, value);

        return this;
      }
    });
  }

  // https://tc39.es/ecma262/#sec-weakset-constructor


  collection('WeakSet', function (init) {
    return function WeakSet() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionWeak);

  var itoc$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var ctoi$1 = {};

  for (var index = 0; index < 66; index++) {
    ctoi$1[itoc$1.charAt(index)] = index;
  }

  var base64Map = {
    itoc: itoc$1,
    ctoi: ctoi$1
  };

  var ctoi = base64Map.ctoi;
  var disallowed = /[^\d+/a-z]/i;
  var whitespaces = /[\t\n\f\r ]+/g;
  var finalEq = /[=]+$/;
  var $atob = getBuiltIn('atob');
  var fromCharCode$1 = String.fromCharCode;
  var charAt$3 = functionUncurryThis(''.charAt);
  var replace$3 = functionUncurryThis(''.replace);
  var exec$2 = functionUncurryThis(disallowed.exec);
  var NO_SPACES_IGNORE = fails(function () {
    return atob(' ') !== '';
  });
  var NO_ARG_RECEIVING_CHECK$1 = !NO_SPACES_IGNORE && !fails(function () {
    $atob();
  }); // `atob` method
  // https://html.spec.whatwg.org/multipage/webappapis.html#dom-atob

  _export({
    global: true,
    enumerable: true,
    forced: NO_SPACES_IGNORE || NO_ARG_RECEIVING_CHECK$1
  }, {
    atob: function atob(data) {
      validateArgumentsLength(arguments.length, 1);
      if (NO_ARG_RECEIVING_CHECK$1) return $atob(data);
      var string = replace$3(toString_1(data), whitespaces, '');
      var output = '';
      var position = 0;
      var bc = 0;
      var chr, bs;

      if (string.length % 4 == 0) {
        string = replace$3(string, finalEq, '');
      }

      if (string.length % 4 == 1 || exec$2(disallowed, string)) {
        throw new (getBuiltIn('DOMException'))('The string is not correctly encoded', 'InvalidCharacterError');
      }

      while (chr = charAt$3(string, position++)) {
        if (hasOwnProperty_1(ctoi, chr)) {
          bs = bc % 4 ? bs * 64 + ctoi[chr] : ctoi[chr];
          if (bc++ % 4) output += fromCharCode$1(255 & bs >> (-2 * bc & 6));
        }
      }

      return output;
    }
  });

  var itoc = base64Map.itoc;
  var $btoa = getBuiltIn('btoa');
  var charAt$2 = functionUncurryThis(''.charAt);
  var charCodeAt$1 = functionUncurryThis(''.charCodeAt);
  var NO_ARG_RECEIVING_CHECK = !!$btoa && !fails(function () {
    $btoa();
  }); // `btoa` method
  // https://html.spec.whatwg.org/multipage/webappapis.html#dom-btoa

  _export({
    global: true,
    enumerable: true,
    forced: NO_ARG_RECEIVING_CHECK
  }, {
    btoa: function btoa(data) {
      validateArgumentsLength(arguments.length, 1);
      if (NO_ARG_RECEIVING_CHECK) return $btoa(data);
      var string = toString_1(data);
      var output = '';
      var position = 0;
      var map = itoc;
      var block, charCode;

      while (charAt$2(string, position) || (map = '=', position % 1)) {
        charCode = charCodeAt$1(string, position += 3 / 4);

        if (charCode > 0xFF) {
          throw new (getBuiltIn('DOMException'))('The string contains characters outside of the Latin1 range', 'InvalidCharacterError');
        }

        block = block << 8 | charCode;
        output += charAt$2(map, 63 & block >> 8 - position % 1 * 8);
      }

      return output;
    }
  });

  // iterable DOM collections
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
  var domIterables = {
    CSSRuleList: 0,
    CSSStyleDeclaration: 0,
    CSSValueList: 0,
    ClientRectList: 0,
    DOMRectList: 0,
    DOMStringList: 0,
    DOMTokenList: 1,
    DataTransferItemList: 0,
    FileList: 0,
    HTMLAllCollection: 0,
    HTMLCollection: 0,
    HTMLFormElement: 0,
    HTMLSelectElement: 0,
    MediaList: 0,
    MimeTypeArray: 0,
    NamedNodeMap: 0,
    NodeList: 1,
    PaintRequestList: 0,
    Plugin: 0,
    PluginArray: 0,
    SVGLengthList: 0,
    SVGNumberList: 0,
    SVGPathSegList: 0,
    SVGPointList: 0,
    SVGStringList: 0,
    SVGTransformList: 0,
    SourceBufferList: 0,
    StyleSheetList: 0,
    TextTrackCueList: 0,
    TextTrackList: 0,
    TouchList: 0
  };

  var classList = documentCreateElement('span').classList;
  var DOMTokenListPrototype = classList && classList.constructor && classList.constructor.prototype;
  var domTokenListPrototype = DOMTokenListPrototype === Object.prototype ? undefined : DOMTokenListPrototype;

  var handlePrototype$1 = function handlePrototype(CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== arrayForEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', arrayForEach);
    } catch (error) {
      CollectionPrototype.forEach = arrayForEach;
    }
  };

  for (var COLLECTION_NAME$1 in domIterables) {
    if (domIterables[COLLECTION_NAME$1]) {
      handlePrototype$1(global_1[COLLECTION_NAME$1] && global_1[COLLECTION_NAME$1].prototype);
    }
  }

  handlePrototype$1(domTokenListPrototype);

  var ITERATOR$2 = wellKnownSymbol('iterator');
  var TO_STRING_TAG = wellKnownSymbol('toStringTag');
  var ArrayValues = es_array_iterator.values;

  var handlePrototype = function handlePrototype(CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
        createNonEnumerableProperty(CollectionPrototype, ITERATOR$2, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$2] = ArrayValues;
      }

      if (!CollectionPrototype[TO_STRING_TAG]) {
        createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
      }

      if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
          createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
        }
      }
    }
  };

  for (var COLLECTION_NAME in domIterables) {
    handlePrototype(global_1[COLLECTION_NAME] && global_1[COLLECTION_NAME].prototype, COLLECTION_NAME);
  }

  handlePrototype(domTokenListPrototype, 'DOMTokenList');

  var tryNodeRequire = function tryNodeRequire(name) {
    try {
      // eslint-disable-next-line no-new-func -- safe
      if (engineIsNode) return Function('return require("' + name + '")')();
    } catch (error) {
      /* empty */
    }
  };

  var domExceptionConstants = {
    IndexSizeError: {
      s: 'INDEX_SIZE_ERR',
      c: 1,
      m: 1
    },
    DOMStringSizeError: {
      s: 'DOMSTRING_SIZE_ERR',
      c: 2,
      m: 0
    },
    HierarchyRequestError: {
      s: 'HIERARCHY_REQUEST_ERR',
      c: 3,
      m: 1
    },
    WrongDocumentError: {
      s: 'WRONG_DOCUMENT_ERR',
      c: 4,
      m: 1
    },
    InvalidCharacterError: {
      s: 'INVALID_CHARACTER_ERR',
      c: 5,
      m: 1
    },
    NoDataAllowedError: {
      s: 'NO_DATA_ALLOWED_ERR',
      c: 6,
      m: 0
    },
    NoModificationAllowedError: {
      s: 'NO_MODIFICATION_ALLOWED_ERR',
      c: 7,
      m: 1
    },
    NotFoundError: {
      s: 'NOT_FOUND_ERR',
      c: 8,
      m: 1
    },
    NotSupportedError: {
      s: 'NOT_SUPPORTED_ERR',
      c: 9,
      m: 1
    },
    InUseAttributeError: {
      s: 'INUSE_ATTRIBUTE_ERR',
      c: 10,
      m: 1
    },
    InvalidStateError: {
      s: 'INVALID_STATE_ERR',
      c: 11,
      m: 1
    },
    SyntaxError: {
      s: 'SYNTAX_ERR',
      c: 12,
      m: 1
    },
    InvalidModificationError: {
      s: 'INVALID_MODIFICATION_ERR',
      c: 13,
      m: 1
    },
    NamespaceError: {
      s: 'NAMESPACE_ERR',
      c: 14,
      m: 1
    },
    InvalidAccessError: {
      s: 'INVALID_ACCESS_ERR',
      c: 15,
      m: 1
    },
    ValidationError: {
      s: 'VALIDATION_ERR',
      c: 16,
      m: 0
    },
    TypeMismatchError: {
      s: 'TYPE_MISMATCH_ERR',
      c: 17,
      m: 1
    },
    SecurityError: {
      s: 'SECURITY_ERR',
      c: 18,
      m: 1
    },
    NetworkError: {
      s: 'NETWORK_ERR',
      c: 19,
      m: 1
    },
    AbortError: {
      s: 'ABORT_ERR',
      c: 20,
      m: 1
    },
    URLMismatchError: {
      s: 'URL_MISMATCH_ERR',
      c: 21,
      m: 1
    },
    QuotaExceededError: {
      s: 'QUOTA_EXCEEDED_ERR',
      c: 22,
      m: 1
    },
    TimeoutError: {
      s: 'TIMEOUT_ERR',
      c: 23,
      m: 1
    },
    InvalidNodeTypeError: {
      s: 'INVALID_NODE_TYPE_ERR',
      c: 24,
      m: 1
    },
    DataCloneError: {
      s: 'DATA_CLONE_ERR',
      c: 25,
      m: 1
    }
  };

  var defineProperty$1 = objectDefineProperty.f;
  var defineProperties$1 = objectDefineProperties.f;
  var DOM_EXCEPTION$2 = 'DOMException';
  var DATA_CLONE_ERR = 'DATA_CLONE_ERR';
  var Error$3 = getBuiltIn('Error'); // NodeJS < 17.0 does not expose `DOMException` to global

  var NativeDOMException$1 = getBuiltIn(DOM_EXCEPTION$2) || function () {
    try {
      // NodeJS < 15.0 does not expose `MessageChannel` to global
      var MessageChannel = getBuiltIn('MessageChannel') || tryNodeRequire('worker_threads').MessageChannel; // eslint-disable-next-line es/no-weak-map, unicorn/require-post-message-target-origin -- safe

      new MessageChannel().port1.postMessage(new WeakMap());
    } catch (error) {
      if (error.name == DATA_CLONE_ERR && error.code == 25) return error.constructor;
    }
  }();

  var NativeDOMExceptionPrototype = NativeDOMException$1 && NativeDOMException$1.prototype;
  var ErrorPrototype = Error$3.prototype;
  var setInternalState$2 = internalState.set;
  var getInternalState = internalState.getterFor(DOM_EXCEPTION$2);
  var HAS_STACK = ('stack' in Error$3(DOM_EXCEPTION$2));

  var codeFor = function codeFor(name) {
    return hasOwnProperty_1(domExceptionConstants, name) && domExceptionConstants[name].m ? domExceptionConstants[name].c : 0;
  };

  var $DOMException$1 = function DOMException() {
    anInstance(this, DOMExceptionPrototype$1);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var code = codeFor(name);
    setInternalState$2(this, {
      type: DOM_EXCEPTION$2,
      name: name,
      message: message,
      code: code
    });

    if (!descriptors) {
      this.name = name;
      this.message = message;
      this.code = code;
    }

    if (HAS_STACK) {
      var error = Error$3(message);
      error.name = DOM_EXCEPTION$2;
      defineProperty$1(this, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
    }
  };

  var DOMExceptionPrototype$1 = $DOMException$1.prototype = objectCreate(ErrorPrototype);

  var createGetterDescriptor = function createGetterDescriptor(get) {
    return {
      enumerable: true,
      configurable: true,
      get: get
    };
  };

  var getterFor = function getterFor(key) {
    return createGetterDescriptor(function () {
      return getInternalState(this)[key];
    });
  };

  if (descriptors) defineProperties$1(DOMExceptionPrototype$1, {
    name: getterFor('name'),
    message: getterFor('message'),
    code: getterFor('code')
  });
  defineProperty$1(DOMExceptionPrototype$1, 'constructor', createPropertyDescriptor(1, $DOMException$1)); // FF36- DOMException is a function, but can't be constructed

  var INCORRECT_CONSTRUCTOR = fails(function () {
    return !(new NativeDOMException$1() instanceof Error$3);
  }); // Safari 10.1 / Chrome 32- / IE8- DOMException.prototype.toString bugs

  var INCORRECT_TO_STRING = INCORRECT_CONSTRUCTOR || fails(function () {
    return ErrorPrototype.toString !== errorToString || String(new NativeDOMException$1(1, 2)) !== '2: 1';
  }); // Deno 1.6.3- DOMException.prototype.code just missed

  var INCORRECT_CODE = INCORRECT_CONSTRUCTOR || fails(function () {
    return new NativeDOMException$1(1, 'DataCloneError').code !== 25;
  }); // Deno 1.6.3- DOMException constants just missed

  INCORRECT_CONSTRUCTOR || NativeDOMException$1[DATA_CLONE_ERR] !== 25 || NativeDOMExceptionPrototype[DATA_CLONE_ERR] !== 25;
  var FORCED_CONSTRUCTOR$1 = INCORRECT_CONSTRUCTOR; // `DOMException` constructor
  // https://webidl.spec.whatwg.org/#idl-DOMException

  _export({
    global: true,
    forced: FORCED_CONSTRUCTOR$1
  }, {
    DOMException: FORCED_CONSTRUCTOR$1 ? $DOMException$1 : NativeDOMException$1
  });
  var PolyfilledDOMException$1 = getBuiltIn(DOM_EXCEPTION$2);
  var PolyfilledDOMExceptionPrototype$1 = PolyfilledDOMException$1.prototype;

  if (INCORRECT_TO_STRING && (NativeDOMException$1 === PolyfilledDOMException$1)) {
    redefine(PolyfilledDOMExceptionPrototype$1, 'toString', errorToString);
  }

  if (INCORRECT_CODE && descriptors && NativeDOMException$1 === PolyfilledDOMException$1) {
    defineProperty$1(PolyfilledDOMExceptionPrototype$1, 'code', createGetterDescriptor(function () {
      return codeFor(anObject(this).name);
    }));
  }

  for (var key$1 in domExceptionConstants) {
    if (hasOwnProperty_1(domExceptionConstants, key$1)) {
      var constant$1 = domExceptionConstants[key$1];
      var constantName$1 = constant$1.s;
      var descriptor = createPropertyDescriptor(6, constant$1.c);

      if (!hasOwnProperty_1(PolyfilledDOMException$1, constantName$1)) {
        defineProperty$1(PolyfilledDOMException$1, constantName$1, descriptor);
      }

      if (!hasOwnProperty_1(PolyfilledDOMExceptionPrototype$1, constantName$1)) {
        defineProperty$1(PolyfilledDOMExceptionPrototype$1, constantName$1, descriptor);
      }
    }
  }

  var defineProperty = objectDefineProperty.f;
  var DOM_EXCEPTION$1 = 'DOMException';
  var Error$2 = getBuiltIn('Error');
  var NativeDOMException = getBuiltIn(DOM_EXCEPTION$1);

  var $DOMException = function DOMException() {
    anInstance(this, DOMExceptionPrototype);
    var argumentsLength = arguments.length;
    var message = normalizeStringArgument(argumentsLength < 1 ? undefined : arguments[0]);
    var name = normalizeStringArgument(argumentsLength < 2 ? undefined : arguments[1], 'Error');
    var that = new NativeDOMException(message, name);
    var error = Error$2(message);
    error.name = DOM_EXCEPTION$1;
    defineProperty(that, 'stack', createPropertyDescriptor(1, clearErrorStack(error.stack, 1)));
    inheritIfRequired(that, this, $DOMException);
    return that;
  };

  var DOMExceptionPrototype = $DOMException.prototype = NativeDOMException.prototype;
  var ERROR_HAS_STACK = ('stack' in Error$2(DOM_EXCEPTION$1));
  var DOM_EXCEPTION_HAS_STACK = ('stack' in new NativeDOMException(1, 2));
  var FORCED_CONSTRUCTOR = ERROR_HAS_STACK && !DOM_EXCEPTION_HAS_STACK; // `DOMException` constructor patch for `.stack` where it's required
  // https://webidl.spec.whatwg.org/#es-DOMException-specialness

  _export({
    global: true,
    forced: FORCED_CONSTRUCTOR
  }, {
    // TODO: fix export logic
    DOMException: FORCED_CONSTRUCTOR ? $DOMException : NativeDOMException
  });
  var PolyfilledDOMException = getBuiltIn(DOM_EXCEPTION$1);
  var PolyfilledDOMExceptionPrototype = PolyfilledDOMException.prototype;

  if (PolyfilledDOMExceptionPrototype.constructor !== PolyfilledDOMException) {
    {
      defineProperty(PolyfilledDOMExceptionPrototype, 'constructor', createPropertyDescriptor(1, PolyfilledDOMException));
    }

    for (var key in domExceptionConstants) {
      if (hasOwnProperty_1(domExceptionConstants, key)) {
        var constant = domExceptionConstants[key];
        var constantName = constant.s;

        if (!hasOwnProperty_1(PolyfilledDOMException, constantName)) {
          defineProperty(PolyfilledDOMException, constantName, createPropertyDescriptor(6, constant.c));
        }
      }
    }
  }

  var DOM_EXCEPTION = 'DOMException';
  setToStringTag(getBuiltIn(DOM_EXCEPTION), DOM_EXCEPTION);

  var FORCED = !global_1.setImmediate || !global_1.clearImmediate; // http://w3c.github.io/setImmediate/

  _export({
    global: true,
    bind: true,
    enumerable: true,
    forced: FORCED
  }, {
    // `setImmediate` method
    // http://w3c.github.io/setImmediate/#si-setImmediate
    setImmediate: task$1.set,
    // `clearImmediate` method
    // http://w3c.github.io/setImmediate/#si-clearImmediate
    clearImmediate: task$1.clear
  });

  var process = global_1.process; // `queueMicrotask` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-queuemicrotask

  _export({
    global: true,
    enumerable: true,
    noTargetGet: true
  }, {
    queueMicrotask: function queueMicrotask(fn) {
      validateArgumentsLength(arguments.length, 1);
      aCallable(fn);
      var domain = engineIsNode && process.domain;
      microtask(domain ? domain.bind(fn) : fn);
    }
  });

  var Object$1 = global_1.Object;
  var Date$1 = global_1.Date;
  var Error$1 = global_1.Error;
  var EvalError = global_1.EvalError;
  var RangeError$1 = global_1.RangeError;
  var ReferenceError = global_1.ReferenceError;
  var SyntaxError = global_1.SyntaxError;
  var TypeError$3 = global_1.TypeError;
  var URIError = global_1.URIError;
  var PerformanceMark = global_1.PerformanceMark;
  var WebAssembly = global_1.WebAssembly;
  var CompileError = WebAssembly && WebAssembly.CompileError || Error$1;
  var LinkError = WebAssembly && WebAssembly.LinkError || Error$1;
  var RuntimeError = WebAssembly && WebAssembly.RuntimeError || Error$1;
  var DOMException = getBuiltIn('DOMException');
  var Set = getBuiltIn('Set');
  var Map = getBuiltIn('Map');
  var MapPrototype = Map.prototype;
  var mapHas = functionUncurryThis(MapPrototype.has);
  var mapGet = functionUncurryThis(MapPrototype.get);
  var mapSet = functionUncurryThis(MapPrototype.set);
  var setAdd = functionUncurryThis(Set.prototype.add);
  var objectKeys = getBuiltIn('Object', 'keys');
  var push$3 = functionUncurryThis([].push);
  var booleanValueOf = functionUncurryThis(true.valueOf);
  var numberValueOf = functionUncurryThis(1.0.valueOf);
  var stringValueOf = functionUncurryThis(''.valueOf);
  var getFlags = functionUncurryThis(regexpFlags);
  var getTime = functionUncurryThis(Date$1.prototype.getTime);
  var PERFORMANCE_MARK = uid('structuredClone');
  var DATA_CLONE_ERROR = 'DataCloneError';
  var TRANSFERRING = 'Transferring';

  var checkBasicSemantic = function checkBasicSemantic(structuredCloneImplementation) {
    return !fails(function () {
      var set1 = new global_1.Set([7]);
      var set2 = structuredCloneImplementation(set1);
      var number = structuredCloneImplementation(Object$1(7));
      return set2 == set1 || !set2.has(7) || _typeof(number) != 'object' || number != 7;
    }) && structuredCloneImplementation;
  }; // https://github.com/whatwg/html/pull/5749


  var checkNewErrorsSemantic = function checkNewErrorsSemantic(structuredCloneImplementation) {
    return !fails(function () {
      var test = structuredCloneImplementation(new global_1.AggregateError([1], PERFORMANCE_MARK, {
        cause: 3
      }));
      return test.name != 'AggregateError' || test.errors[0] != 1 || test.message != PERFORMANCE_MARK || test.cause != 3;
    }) && structuredCloneImplementation;
  }; // FF94+, Safari TP134+, Chrome Canary 98+, NodeJS 17.0+, Deno 1.13+
  // current FF and Safari implementations can't clone errors
  // https://bugzilla.mozilla.org/show_bug.cgi?id=1556604
  // no one of current implementations supports new (html/5749) error cloning semantic


  var nativeStructuredClone = global_1.structuredClone;
  var FORCED_REPLACEMENT = !checkNewErrorsSemantic(nativeStructuredClone); // Chrome 82+, Safari 14.1+, Deno 1.11+
  // Chrome 78-81 implementation swaps `.name` and `.message` of cloned `DOMException`
  // Safari 14.1 implementation doesn't clone some `RegExp` flags, so requires a workaround
  // current Safari implementation can't clone errors
  // Deno 1.2-1.10 implementations too naive
  // NodeJS 16.0+ does not have `PerformanceMark` constructor, structured cloning implementation
  //   from `performance.mark` is too naive and can't clone, for example, `RegExp` or some boxed primitives
  //   https://github.com/nodejs/node/issues/40840
  // no one of current implementations supports new (html/5749) error cloning semantic

  var structuredCloneFromMark = !nativeStructuredClone && checkBasicSemantic(function (value) {
    return new PerformanceMark(PERFORMANCE_MARK, {
      detail: value
    }).detail;
  });
  var nativeRestrictedStructuredClone = checkBasicSemantic(nativeStructuredClone) || structuredCloneFromMark;

  var throwUncloneable = function throwUncloneable(type) {
    throw new DOMException('Uncloneable type: ' + type, DATA_CLONE_ERROR);
  };

  var throwUnpolyfillable = function throwUnpolyfillable(type, kind) {
    throw new DOMException((kind || 'Cloning') + ' of ' + type + ' cannot be properly polyfilled in this engine', DATA_CLONE_ERROR);
  };

  var structuredCloneInternal = function structuredCloneInternal(value, map) {
    if (isSymbol(value)) throwUncloneable('Symbol');
    if (!isObject(value)) return value; // effectively preserves circular references

    if (map) {
      if (mapHas(map, value)) return mapGet(map, value);
    } else map = new Map();

    var type = classof(value);
    var deep = false;
    var C, name, cloned, dataTransfer, i, length, keys, key, source, target;

    switch (type) {
      case 'Array':
        cloned = [];
        deep = true;
        break;

      case 'Object':
        cloned = {};
        deep = true;
        break;

      case 'Map':
        cloned = new Map();
        deep = true;
        break;

      case 'Set':
        cloned = new Set();
        deep = true;
        break;

      case 'RegExp':
        // in this block because of a Safari 14.1 bug
        // old FF does not clone regexes passed to the constructor, so get the source and flags directly
        cloned = new RegExp(value.source, 'flags' in value ? value.flags : getFlags(value));
        break;

      case 'Error':
        name = value.name;

        switch (name) {
          case 'AggregateError':
            cloned = getBuiltIn('AggregateError')([]);
            break;

          case 'EvalError':
            cloned = EvalError();
            break;

          case 'RangeError':
            cloned = RangeError$1();
            break;

          case 'ReferenceError':
            cloned = ReferenceError();
            break;

          case 'SyntaxError':
            cloned = SyntaxError();
            break;

          case 'TypeError':
            cloned = TypeError$3();
            break;

          case 'URIError':
            cloned = URIError();
            break;

          case 'CompileError':
            cloned = CompileError();
            break;

          case 'LinkError':
            cloned = LinkError();
            break;

          case 'RuntimeError':
            cloned = RuntimeError();
            break;

          default:
            cloned = Error$1();
        }

        deep = true;
        break;

      case 'DOMException':
        cloned = new DOMException(value.message, value.name);
        deep = true;
        break;

      case 'DataView':
      case 'Int8Array':
      case 'Uint8Array':
      case 'Uint8ClampedArray':
      case 'Int16Array':
      case 'Uint16Array':
      case 'Int32Array':
      case 'Uint32Array':
      case 'Float32Array':
      case 'Float64Array':
      case 'BigInt64Array':
      case 'BigUint64Array':
        C = global_1[type]; // in some old engines like Safari 9, typeof C is 'object'
        // on Uint8ClampedArray or some other constructors

        if (!isObject(C)) throwUnpolyfillable(type);
        cloned = new C( // this is safe, since arraybuffer cannot have circular references
        structuredCloneInternal(value.buffer, map), value.byteOffset, type === 'DataView' ? value.byteLength : value.length);
        break;

      case 'DOMQuad':
        try {
          cloned = new DOMQuad(structuredCloneInternal(value.p1, map), structuredCloneInternal(value.p2, map), structuredCloneInternal(value.p3, map), structuredCloneInternal(value.p4, map));
        } catch (error) {
          if (nativeRestrictedStructuredClone) {
            cloned = nativeRestrictedStructuredClone(value);
          } else throwUnpolyfillable(type);
        }

        break;

      case 'FileList':
        C = global_1.DataTransfer;

        if (isConstructor(C)) {
          dataTransfer = new C();

          for (i = 0, length = lengthOfArrayLike(value); i < length; i++) {
            dataTransfer.items.add(structuredCloneInternal(value[i], map));
          }

          cloned = dataTransfer.files;
        } else if (nativeRestrictedStructuredClone) {
          cloned = nativeRestrictedStructuredClone(value);
        } else throwUnpolyfillable(type);

        break;

      case 'ImageData':
        // Safari 9 ImageData is a constructor, but typeof ImageData is 'object'
        try {
          cloned = new ImageData(structuredCloneInternal(value.data, map), value.width, value.height, {
            colorSpace: value.colorSpace
          });
        } catch (error) {
          if (nativeRestrictedStructuredClone) {
            cloned = nativeRestrictedStructuredClone(value);
          } else throwUnpolyfillable(type);
        }

        break;

      default:
        if (nativeRestrictedStructuredClone) {
          cloned = nativeRestrictedStructuredClone(value);
        } else switch (type) {
          case 'BigInt':
            // can be a 3rd party polyfill
            cloned = Object$1(value.valueOf());
            break;

          case 'Boolean':
            cloned = Object$1(booleanValueOf(value));
            break;

          case 'Number':
            cloned = Object$1(numberValueOf(value));
            break;

          case 'String':
            cloned = Object$1(stringValueOf(value));
            break;

          case 'Date':
            cloned = new Date$1(getTime(value));
            break;

          case 'ArrayBuffer':
            C = global_1.DataView; // `ArrayBuffer#slice` is not available in IE10
            // `ArrayBuffer#slice` and `DataView` are not available in old FF

            if (!C && typeof value.slice != 'function') throwUnpolyfillable(type); // detached buffers throws in `DataView` and `.slice`

            try {
              if (typeof value.slice == 'function') {
                cloned = value.slice(0);
              } else {
                length = value.byteLength;
                cloned = new ArrayBuffer(length);
                source = new C(value);
                target = new C(cloned);

                for (i = 0; i < length; i++) {
                  target.setUint8(i, source.getUint8(i));
                }
              }
            } catch (error) {
              throw new DOMException('ArrayBuffer is detached', DATA_CLONE_ERROR);
            }

            break;

          case 'SharedArrayBuffer':
            // SharedArrayBuffer should use shared memory, we can't polyfill it, so return the original
            cloned = value;
            break;

          case 'Blob':
            try {
              cloned = value.slice(0, value.size, value.type);
            } catch (error) {
              throwUnpolyfillable(type);
            }

            break;

          case 'DOMPoint':
          case 'DOMPointReadOnly':
            C = global_1[type];

            try {
              cloned = C.fromPoint ? C.fromPoint(value) : new C(value.x, value.y, value.z, value.w);
            } catch (error) {
              throwUnpolyfillable(type);
            }

            break;

          case 'DOMRect':
          case 'DOMRectReadOnly':
            C = global_1[type];

            try {
              cloned = C.fromRect ? C.fromRect(value) : new C(value.x, value.y, value.width, value.height);
            } catch (error) {
              throwUnpolyfillable(type);
            }

            break;

          case 'DOMMatrix':
          case 'DOMMatrixReadOnly':
            C = global_1[type];

            try {
              cloned = C.fromMatrix ? C.fromMatrix(value) : new C(value);
            } catch (error) {
              throwUnpolyfillable(type);
            }

            break;

          case 'AudioData':
          case 'VideoFrame':
            if (!isCallable(value.clone)) throwUnpolyfillable(type);

            try {
              cloned = value.clone();
            } catch (error) {
              throwUncloneable(type);
            }

            break;

          case 'File':
            try {
              cloned = new File([value], value.name, value);
            } catch (error) {
              throwUnpolyfillable(type);
            }

            break;

          case 'CryptoKey':
          case 'GPUCompilationMessage':
          case 'GPUCompilationInfo':
          case 'ImageBitmap':
          case 'RTCCertificate':
          case 'WebAssembly.Module':
            throwUnpolyfillable(type);
          // break omitted

          default:
            throwUncloneable(type);
        }

    }

    mapSet(map, value, cloned);
    if (deep) switch (type) {
      case 'Array':
      case 'Object':
        keys = objectKeys(value);

        for (i = 0, length = lengthOfArrayLike(keys); i < length; i++) {
          key = keys[i];
          createProperty(cloned, key, structuredCloneInternal(value[key], map));
        }

        break;

      case 'Map':
        value.forEach(function (v, k) {
          mapSet(cloned, structuredCloneInternal(k, map), structuredCloneInternal(v, map));
        });
        break;

      case 'Set':
        value.forEach(function (v) {
          setAdd(cloned, structuredCloneInternal(v, map));
        });
        break;

      case 'Error':
        createNonEnumerableProperty(cloned, 'message', structuredCloneInternal(value.message, map));

        if (hasOwnProperty_1(value, 'cause')) {
          createNonEnumerableProperty(cloned, 'cause', structuredCloneInternal(value.cause, map));
        }

        if (name == 'AggregateError') {
          cloned.errors = structuredCloneInternal(value.errors, map);
        }

      // break omitted

      case 'DOMException':
        if (errorStackInstallable) {
          createNonEnumerableProperty(cloned, 'stack', structuredCloneInternal(value.stack, map));
        }

    }
    return cloned;
  };

  var PROPER_TRANSFER = nativeStructuredClone && !fails(function () {
    var buffer = new ArrayBuffer(8);
    var clone = nativeStructuredClone(buffer, {
      transfer: [buffer]
    });
    return buffer.byteLength != 0 || clone.byteLength != 8;
  });

  var tryToTransfer = function tryToTransfer(rawTransfer, map) {
    if (!isObject(rawTransfer)) throw TypeError$3('Transfer option cannot be converted to a sequence');
    var transfer = [];
    iterate(rawTransfer, function (value) {
      push$3(transfer, anObject(value));
    });
    var i = 0;
    var length = lengthOfArrayLike(transfer);
    var value, type, C, transferredArray, transferred, canvas, context;

    if (PROPER_TRANSFER) {
      transferredArray = nativeStructuredClone(transfer, {
        transfer: transfer
      });

      while (i < length) {
        mapSet(map, transfer[i], transferredArray[i++]);
      }
    } else while (i < length) {
      value = transfer[i++];
      if (mapHas(map, value)) throw new DOMException('Duplicate transferable', DATA_CLONE_ERROR);
      type = classof(value);

      switch (type) {
        case 'ImageBitmap':
          C = global_1.OffscreenCanvas;
          if (!isConstructor(C)) throwUnpolyfillable(type, TRANSFERRING);

          try {
            canvas = new C(value.width, value.height);
            context = canvas.getContext('bitmaprenderer');
            context.transferFromImageBitmap(value);
            transferred = canvas.transferToImageBitmap();
          } catch (error) {
            /* empty */
          }

          break;

        case 'AudioData':
        case 'VideoFrame':
          if (!isCallable(value.clone) || !isCallable(value.close)) throwUnpolyfillable(type, TRANSFERRING);

          try {
            transferred = value.clone();
            value.close();
          } catch (error) {
            /* empty */
          }

          break;

        case 'ArrayBuffer':
        case 'MessagePort':
        case 'OffscreenCanvas':
        case 'ReadableStream':
        case 'TransformStream':
        case 'WritableStream':
          throwUnpolyfillable(type, TRANSFERRING);
      }

      if (transferred === undefined) throw new DOMException('This object cannot be transferred: ' + type, DATA_CLONE_ERROR);
      mapSet(map, value, transferred);
    }
  };

  _export({
    global: true,
    enumerable: true,
    sham: !PROPER_TRANSFER,
    forced: FORCED_REPLACEMENT
  }, {
    structuredClone: function structuredClone(value
    /* , { transfer } */
    ) {
      var options = validateArgumentsLength(arguments.length, 1) > 1 ? anObject(arguments[1]) : undefined;
      var transfer = options ? options.transfer : undefined;
      var map;

      if (transfer !== undefined) {
        map = new Map();
        tryToTransfer(transfer, map);
      }

      return structuredCloneInternal(value, map);
    }
  });

  var MSIE = /MSIE .\./.test(engineUserAgent); // <- dirty ie9- check

  var Function$1 = global_1.Function;

  var wrap = function wrap(scheduler) {
    return function (handler, timeout
    /* , ...arguments */
    ) {
      var boundArgs = validateArgumentsLength(arguments.length, 1) > 2;
      var fn = isCallable(handler) ? handler : Function$1(handler);
      var args = boundArgs ? arraySlice$1(arguments, 2) : undefined;
      return scheduler(boundArgs ? function () {
        functionApply(fn, this, args);
      } : fn, timeout);
    };
  }; // ie9- setTimeout & setInterval additional parameters fix
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers


  _export({
    global: true,
    bind: true,
    forced: MSIE
  }, {
    // `setTimeout` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
    setTimeout: wrap(global_1.setTimeout),
    // `setInterval` method
    // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
    setInterval: wrap(global_1.setInterval)
  });

  var ITERATOR$1 = wellKnownSymbol('iterator');
  var nativeUrl = !fails(function () {
    // eslint-disable-next-line unicorn/relative-url-style -- required for testing
    var url = new URL('b?a=1&b=2&c=3', 'http://a');
    var searchParams = url.searchParams;
    var result = '';
    url.pathname = 'c%20d';
    searchParams.forEach(function (value, key) {
      searchParams['delete']('b');
      result += key + value;
    });
    return isPure && !url.toJSON || !searchParams.sort || url.href !== 'http://a/c%20d?a=1&c=3' || searchParams.get('c') !== '3' || String(new URLSearchParams('?a=1')) !== 'a=1' || !searchParams[ITERATOR$1] // throws in Edge
    || new URL('https://a@b').username !== 'a' || new URLSearchParams(new URLSearchParams('a=b')).get('a') !== 'b' // not punycoded in Edge
    || new URL('http://тест').host !== 'xn--e1aybc' // not escaped in Chrome 62-
    || new URL('http://a#б').hash !== '#%D0%B1' // fails in Chrome 66-
    || result !== 'a1c3' // throws in Safari
    || new URL('http://x', undefined).host !== 'x';
  });

  var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

  var base = 36;
  var tMin = 1;
  var tMax = 26;
  var skew = 38;
  var damp = 700;
  var initialBias = 72;
  var initialN = 128; // 0x80

  var delimiter = '-'; // '\x2D'

  var regexNonASCII = /[^\0-\u007E]/; // non-ASCII chars

  var regexSeparators = /[.\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

  var OVERFLOW_ERROR = 'Overflow: input needs wider integers to process';
  var baseMinusTMin = base - tMin;
  var RangeError = global_1.RangeError;
  var exec$1 = functionUncurryThis(regexSeparators.exec);
  var floor$1 = Math.floor;
  var fromCharCode = String.fromCharCode;
  var charCodeAt = functionUncurryThis(''.charCodeAt);
  var join$2 = functionUncurryThis([].join);
  var push$2 = functionUncurryThis([].push);
  var replace$2 = functionUncurryThis(''.replace);
  var split$2 = functionUncurryThis(''.split);
  var toLowerCase$1 = functionUncurryThis(''.toLowerCase);
  /**
   * Creates an array containing the numeric code points of each Unicode
   * character in the string. While JavaScript uses UCS-2 internally,
   * this function will convert a pair of surrogate halves (each of which
   * UCS-2 exposes as separate characters) into a single code point,
   * matching UTF-16.
   */

  var ucs2decode = function ucs2decode(string) {
    var output = [];
    var counter = 0;
    var length = string.length;

    while (counter < length) {
      var value = charCodeAt(string, counter++);

      if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
        // It's a high surrogate, and there is a next character.
        var extra = charCodeAt(string, counter++);

        if ((extra & 0xFC00) == 0xDC00) {
          // Low surrogate.
          push$2(output, ((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
        } else {
          // It's an unmatched surrogate; only append this code unit, in case the
          // next code unit is the high surrogate of a surrogate pair.
          push$2(output, value);
          counter--;
        }
      } else {
        push$2(output, value);
      }
    }

    return output;
  };
  /**
   * Converts a digit/integer into a basic code point.
   */


  var digitToBasic = function digitToBasic(digit) {
    //  0..25 map to ASCII a..z or A..Z
    // 26..35 map to ASCII 0..9
    return digit + 22 + 75 * (digit < 26);
  };
  /**
   * Bias adaptation function as per section 3.4 of RFC 3492.
   * https://tools.ietf.org/html/rfc3492#section-3.4
   */


  var adapt = function adapt(delta, numPoints, firstTime) {
    var k = 0;
    delta = firstTime ? floor$1(delta / damp) : delta >> 1;
    delta += floor$1(delta / numPoints);

    while (delta > baseMinusTMin * tMax >> 1) {
      delta = floor$1(delta / baseMinusTMin);
      k += base;
    }

    return floor$1(k + (baseMinusTMin + 1) * delta / (delta + skew));
  };
  /**
   * Converts a string of Unicode symbols (e.g. a domain name label) to a
   * Punycode string of ASCII-only symbols.
   */


  var encode = function encode(input) {
    var output = []; // Convert the input in UCS-2 to an array of Unicode code points.

    input = ucs2decode(input); // Cache the length.

    var inputLength = input.length; // Initialize the state.

    var n = initialN;
    var delta = 0;
    var bias = initialBias;
    var i, currentValue; // Handle the basic code points.

    for (i = 0; i < input.length; i++) {
      currentValue = input[i];

      if (currentValue < 0x80) {
        push$2(output, fromCharCode(currentValue));
      }
    }

    var basicLength = output.length; // number of basic code points.

    var handledCPCount = basicLength; // number of code points that have been handled;
    // Finish the basic string with a delimiter unless it's empty.

    if (basicLength) {
      push$2(output, delimiter);
    } // Main encoding loop:


    while (handledCPCount < inputLength) {
      // All non-basic code points < n have been handled already. Find the next larger one:
      var m = maxInt;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];

        if (currentValue >= n && currentValue < m) {
          m = currentValue;
        }
      } // Increase `delta` enough to advance the decoder's <n,i> state to <m,0>, but guard against overflow.


      var handledCPCountPlusOne = handledCPCount + 1;

      if (m - n > floor$1((maxInt - delta) / handledCPCountPlusOne)) {
        throw RangeError(OVERFLOW_ERROR);
      }

      delta += (m - n) * handledCPCountPlusOne;
      n = m;

      for (i = 0; i < input.length; i++) {
        currentValue = input[i];

        if (currentValue < n && ++delta > maxInt) {
          throw RangeError(OVERFLOW_ERROR);
        }

        if (currentValue == n) {
          // Represent delta as a generalized variable-length integer.
          var q = delta;
          var k = base;

          while (true) {
            var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
            if (q < t) break;
            var qMinusT = q - t;
            var baseMinusT = base - t;
            push$2(output, fromCharCode(digitToBasic(t + qMinusT % baseMinusT)));
            q = floor$1(qMinusT / baseMinusT);
            k += base;
          }

          push$2(output, fromCharCode(digitToBasic(q)));
          bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
          delta = 0;
          handledCPCount++;
        }
      }

      delta++;
      n++;
    }

    return join$2(output, '');
  };

  var stringPunycodeToAscii = function stringPunycodeToAscii(input) {
    var encoded = [];
    var labels = split$2(replace$2(toLowerCase$1(input), regexSeparators, "."), '.');
    var i, label;

    for (i = 0; i < labels.length; i++) {
      label = labels[i];
      push$2(encoded, exec$1(regexNonASCII, label) ? 'xn--' + encode(label) : label);
    }

    return join$2(encoded, '.');
  };

  var ITERATOR = wellKnownSymbol('iterator');
  var URL_SEARCH_PARAMS = 'URLSearchParams';
  var URL_SEARCH_PARAMS_ITERATOR = URL_SEARCH_PARAMS + 'Iterator';
  var setInternalState$1 = internalState.set;
  var getInternalParamsState = internalState.getterFor(URL_SEARCH_PARAMS);
  var getInternalIteratorState = internalState.getterFor(URL_SEARCH_PARAMS_ITERATOR);
  var n$Fetch = getBuiltIn('fetch');
  var N$Request = getBuiltIn('Request');
  var Headers = getBuiltIn('Headers');
  var RequestPrototype = N$Request && N$Request.prototype;
  var HeadersPrototype = Headers && Headers.prototype;
  var RegExp$1 = global_1.RegExp;
  var TypeError$2 = global_1.TypeError;
  var decodeURIComponent = global_1.decodeURIComponent;
  var encodeURIComponent$1 = global_1.encodeURIComponent;
  var charAt$1 = functionUncurryThis(''.charAt);
  var join$1 = functionUncurryThis([].join);
  var push$1 = functionUncurryThis([].push);
  var replace$1 = functionUncurryThis(''.replace);
  var shift$1 = functionUncurryThis([].shift);
  var splice = functionUncurryThis([].splice);
  var split$1 = functionUncurryThis(''.split);
  var stringSlice$1 = functionUncurryThis(''.slice);
  var plus = /\+/g;
  var sequences = Array(4);

  var percentSequence = function percentSequence(bytes) {
    return sequences[bytes - 1] || (sequences[bytes - 1] = RegExp$1('((?:%[\\da-f]{2}){' + bytes + '})', 'gi'));
  };

  var percentDecode = function percentDecode(sequence) {
    try {
      return decodeURIComponent(sequence);
    } catch (error) {
      return sequence;
    }
  };

  var deserialize = function deserialize(it) {
    var result = replace$1(it, plus, ' ');
    var bytes = 4;

    try {
      return decodeURIComponent(result);
    } catch (error) {
      while (bytes) {
        result = replace$1(result, percentSequence(bytes--), percentDecode);
      }

      return result;
    }
  };

  var find = /[!'()~]|%20/g;
  var replacements = {
    '!': '%21',
    "'": '%27',
    '(': '%28',
    ')': '%29',
    '~': '%7E',
    '%20': '+'
  };

  var replacer = function replacer(match) {
    return replacements[match];
  };

  var _serialize = function serialize(it) {
    return replace$1(encodeURIComponent$1(it), find, replacer);
  };

  var URLSearchParamsIterator = createIteratorConstructor(function Iterator(params, kind) {
    setInternalState$1(this, {
      type: URL_SEARCH_PARAMS_ITERATOR,
      iterator: getIterator(getInternalParamsState(params).entries),
      kind: kind
    });
  }, 'Iterator', function next() {
    var state = getInternalIteratorState(this);
    var kind = state.kind;
    var step = state.iterator.next();
    var entry = step.value;

    if (!step.done) {
      step.value = kind === 'keys' ? entry.key : kind === 'values' ? entry.value : [entry.key, entry.value];
    }

    return step;
  }, true);

  var URLSearchParamsState = function URLSearchParamsState(init) {
    this.entries = [];
    this.url = null;

    if (init !== undefined) {
      if (isObject(init)) this.parseObject(init);else this.parseQuery(typeof init == 'string' ? charAt$1(init, 0) === '?' ? stringSlice$1(init, 1) : init : toString_1(init));
    }
  };

  URLSearchParamsState.prototype = {
    type: URL_SEARCH_PARAMS,
    bindURL: function bindURL(url) {
      this.url = url;
      this.update();
    },
    parseObject: function parseObject(object) {
      var iteratorMethod = getIteratorMethod(object);
      var iterator, next, step, entryIterator, entryNext, first, second;

      if (iteratorMethod) {
        iterator = getIterator(object, iteratorMethod);
        next = iterator.next;

        while (!(step = functionCall(next, iterator)).done) {
          entryIterator = getIterator(anObject(step.value));
          entryNext = entryIterator.next;
          if ((first = functionCall(entryNext, entryIterator)).done || (second = functionCall(entryNext, entryIterator)).done || !functionCall(entryNext, entryIterator).done) throw TypeError$2('Expected sequence with length 2');
          push$1(this.entries, {
            key: toString_1(first.value),
            value: toString_1(second.value)
          });
        }
      } else for (var key in object) {
        if (hasOwnProperty_1(object, key)) {
          push$1(this.entries, {
            key: key,
            value: toString_1(object[key])
          });
        }
      }
    },
    parseQuery: function parseQuery(query) {
      if (query) {
        var attributes = split$1(query, '&');
        var index = 0;
        var attribute, entry;

        while (index < attributes.length) {
          attribute = attributes[index++];

          if (attribute.length) {
            entry = split$1(attribute, '=');
            push$1(this.entries, {
              key: deserialize(shift$1(entry)),
              value: deserialize(join$1(entry, '='))
            });
          }
        }
      }
    },
    serialize: function serialize() {
      var entries = this.entries;
      var result = [];
      var index = 0;
      var entry;

      while (index < entries.length) {
        entry = entries[index++];
        push$1(result, _serialize(entry.key) + '=' + _serialize(entry.value));
      }

      return join$1(result, '&');
    },
    update: function update() {
      this.entries.length = 0;
      this.parseQuery(this.url.query);
    },
    updateURL: function updateURL() {
      if (this.url) this.url.update();
    }
  }; // `URLSearchParams` constructor
  // https://url.spec.whatwg.org/#interface-urlsearchparams

  var URLSearchParamsConstructor = function
    /* init */
  URLSearchParams() {
    anInstance(this, URLSearchParamsPrototype);
    var init = arguments.length > 0 ? arguments[0] : undefined;
    setInternalState$1(this, new URLSearchParamsState(init));
  };

  var URLSearchParamsPrototype = URLSearchParamsConstructor.prototype;
  redefineAll(URLSearchParamsPrototype, {
    // `URLSearchParams.prototype.append` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-append
    append: function append(name, value) {
      validateArgumentsLength(arguments.length, 2);
      var state = getInternalParamsState(this);
      push$1(state.entries, {
        key: toString_1(name),
        value: toString_1(value)
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.delete` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-delete
    'delete': function _delete(name) {
      validateArgumentsLength(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var key = toString_1(name);
      var index = 0;

      while (index < entries.length) {
        if (entries[index].key === key) splice(entries, index, 1);else index++;
      }

      state.updateURL();
    },
    // `URLSearchParams.prototype.get` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-get
    get: function get(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = toString_1(name);
      var index = 0;

      for (; index < entries.length; index++) {
        if (entries[index].key === key) return entries[index].value;
      }

      return null;
    },
    // `URLSearchParams.prototype.getAll` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-getall
    getAll: function getAll(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = toString_1(name);
      var result = [];
      var index = 0;

      for (; index < entries.length; index++) {
        if (entries[index].key === key) push$1(result, entries[index].value);
      }

      return result;
    },
    // `URLSearchParams.prototype.has` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-has
    has: function has(name) {
      validateArgumentsLength(arguments.length, 1);
      var entries = getInternalParamsState(this).entries;
      var key = toString_1(name);
      var index = 0;

      while (index < entries.length) {
        if (entries[index++].key === key) return true;
      }

      return false;
    },
    // `URLSearchParams.prototype.set` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-set
    set: function set(name, value) {
      validateArgumentsLength(arguments.length, 1);
      var state = getInternalParamsState(this);
      var entries = state.entries;
      var found = false;
      var key = toString_1(name);
      var val = toString_1(value);
      var index = 0;
      var entry;

      for (; index < entries.length; index++) {
        entry = entries[index];

        if (entry.key === key) {
          if (found) splice(entries, index--, 1);else {
            found = true;
            entry.value = val;
          }
        }
      }

      if (!found) push$1(entries, {
        key: key,
        value: val
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.sort` method
    // https://url.spec.whatwg.org/#dom-urlsearchparams-sort
    sort: function sort() {
      var state = getInternalParamsState(this);
      arraySort(state.entries, function (a, b) {
        return a.key > b.key ? 1 : -1;
      });
      state.updateURL();
    },
    // `URLSearchParams.prototype.forEach` method
    forEach: function forEach(callback
    /* , thisArg */
    ) {
      var entries = getInternalParamsState(this).entries;
      var boundFunction = functionBindContext(callback, arguments.length > 1 ? arguments[1] : undefined);
      var index = 0;
      var entry;

      while (index < entries.length) {
        entry = entries[index++];
        boundFunction(entry.value, entry.key, this);
      }
    },
    // `URLSearchParams.prototype.keys` method
    keys: function keys() {
      return new URLSearchParamsIterator(this, 'keys');
    },
    // `URLSearchParams.prototype.values` method
    values: function values() {
      return new URLSearchParamsIterator(this, 'values');
    },
    // `URLSearchParams.prototype.entries` method
    entries: function entries() {
      return new URLSearchParamsIterator(this, 'entries');
    }
  }, {
    enumerable: true
  }); // `URLSearchParams.prototype[@@iterator]` method

  redefine(URLSearchParamsPrototype, ITERATOR, URLSearchParamsPrototype.entries, {
    name: 'entries'
  }); // `URLSearchParams.prototype.toString` method
  // https://url.spec.whatwg.org/#urlsearchparams-stringification-behavior

  redefine(URLSearchParamsPrototype, 'toString', function toString() {
    return getInternalParamsState(this).serialize();
  }, {
    enumerable: true
  });
  setToStringTag(URLSearchParamsConstructor, URL_SEARCH_PARAMS);
  _export({
    global: true,
    forced: !nativeUrl
  }, {
    URLSearchParams: URLSearchParamsConstructor
  }); // Wrap `fetch` and `Request` for correct work with polyfilled `URLSearchParams`

  if (!nativeUrl && isCallable(Headers)) {
    var headersHas = functionUncurryThis(HeadersPrototype.has);
    var headersSet = functionUncurryThis(HeadersPrototype.set);

    var wrapRequestOptions = function wrapRequestOptions(init) {
      if (isObject(init)) {
        var body = init.body;
        var headers;

        if (classof(body) === URL_SEARCH_PARAMS) {
          headers = init.headers ? new Headers(init.headers) : new Headers();

          if (!headersHas(headers, 'content-type')) {
            headersSet(headers, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
          }

          return objectCreate(init, {
            body: createPropertyDescriptor(0, toString_1(body)),
            headers: createPropertyDescriptor(0, headers)
          });
        }
      }

      return init;
    };

    if (isCallable(n$Fetch)) {
      _export({
        global: true,
        enumerable: true,
        forced: true
      }, {
        fetch: function fetch(input
        /* , init */
        ) {
          return n$Fetch(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
        }
      });
    }

    if (isCallable(N$Request)) {
      var RequestConstructor = function Request(input
      /* , init */
      ) {
        anInstance(this, RequestPrototype);
        return new N$Request(input, arguments.length > 1 ? wrapRequestOptions(arguments[1]) : {});
      };

      RequestPrototype.constructor = RequestConstructor;
      RequestConstructor.prototype = RequestPrototype;
      _export({
        global: true,
        forced: true
      }, {
        Request: RequestConstructor
      });
    }
  }

  var web_urlSearchParams = {
    URLSearchParams: URLSearchParamsConstructor,
    getState: getInternalParamsState
  };

  var defineProperties = objectDefineProperties.f;
  var codeAt = stringMultibyte.codeAt;
  var setInternalState = internalState.set;
  var getInternalURLState = internalState.getterFor('URL');
  var URLSearchParams$1 = web_urlSearchParams.URLSearchParams;
  var getInternalSearchParamsState = web_urlSearchParams.getState;
  var NativeURL = global_1.URL;
  var TypeError$1 = global_1.TypeError;
  var parseInt$1 = global_1.parseInt;
  var floor = Math.floor;
  var pow = Math.pow;
  var charAt = functionUncurryThis(''.charAt);
  var exec = functionUncurryThis(/./.exec);
  var join = functionUncurryThis([].join);
  var numberToString = functionUncurryThis(1.0.toString);
  var pop = functionUncurryThis([].pop);
  var push = functionUncurryThis([].push);
  var replace = functionUncurryThis(''.replace);
  var shift = functionUncurryThis([].shift);
  var split = functionUncurryThis(''.split);
  var stringSlice = functionUncurryThis(''.slice);
  var toLowerCase = functionUncurryThis(''.toLowerCase);
  var unshift = functionUncurryThis([].unshift);
  var INVALID_AUTHORITY = 'Invalid authority';
  var INVALID_SCHEME = 'Invalid scheme';
  var INVALID_HOST = 'Invalid host';
  var INVALID_PORT = 'Invalid port';
  var ALPHA = /[a-z]/i; // eslint-disable-next-line regexp/no-obscure-range -- safe

  var ALPHANUMERIC = /[\d+-.a-z]/i;
  var DIGIT = /\d/;
  var HEX_START = /^0x/i;
  var OCT = /^[0-7]+$/;
  var DEC = /^\d+$/;
  var HEX = /^[\da-f]+$/i;
  /* eslint-disable regexp/no-control-character -- safe */

  var FORBIDDEN_HOST_CODE_POINT = /[\0\t\n\r #%/:<>?@[\\\]^|]/;
  var FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT = /[\0\t\n\r #/:<>?@[\\\]^|]/;
  var LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g;
  var TAB_AND_NEW_LINE = /[\t\n\r]/g;
  /* eslint-enable regexp/no-control-character -- safe */

  var EOF; // https://url.spec.whatwg.org/#ipv4-number-parser

  var parseIPv4 = function parseIPv4(input) {
    var parts = split(input, '.');
    var partsLength, numbers, index, part, radix, number, ipv4;

    if (parts.length && parts[parts.length - 1] == '') {
      parts.length--;
    }

    partsLength = parts.length;
    if (partsLength > 4) return input;
    numbers = [];

    for (index = 0; index < partsLength; index++) {
      part = parts[index];
      if (part == '') return input;
      radix = 10;

      if (part.length > 1 && charAt(part, 0) == '0') {
        radix = exec(HEX_START, part) ? 16 : 8;
        part = stringSlice(part, radix == 8 ? 1 : 2);
      }

      if (part === '') {
        number = 0;
      } else {
        if (!exec(radix == 10 ? DEC : radix == 8 ? OCT : HEX, part)) return input;
        number = parseInt$1(part, radix);
      }

      push(numbers, number);
    }

    for (index = 0; index < partsLength; index++) {
      number = numbers[index];

      if (index == partsLength - 1) {
        if (number >= pow(256, 5 - partsLength)) return null;
      } else if (number > 255) return null;
    }

    ipv4 = pop(numbers);

    for (index = 0; index < numbers.length; index++) {
      ipv4 += numbers[index] * pow(256, 3 - index);
    }

    return ipv4;
  }; // https://url.spec.whatwg.org/#concept-ipv6-parser
  // eslint-disable-next-line max-statements -- TODO


  var parseIPv6 = function parseIPv6(input) {
    var address = [0, 0, 0, 0, 0, 0, 0, 0];
    var pieceIndex = 0;
    var compress = null;
    var pointer = 0;
    var value, length, numbersSeen, ipv4Piece, number, swaps, swap;

    var chr = function chr() {
      return charAt(input, pointer);
    };

    if (chr() == ':') {
      if (charAt(input, 1) != ':') return;
      pointer += 2;
      pieceIndex++;
      compress = pieceIndex;
    }

    while (chr()) {
      if (pieceIndex == 8) return;

      if (chr() == ':') {
        if (compress !== null) return;
        pointer++;
        pieceIndex++;
        compress = pieceIndex;
        continue;
      }

      value = length = 0;

      while (length < 4 && exec(HEX, chr())) {
        value = value * 16 + parseInt$1(chr(), 16);
        pointer++;
        length++;
      }

      if (chr() == '.') {
        if (length == 0) return;
        pointer -= length;
        if (pieceIndex > 6) return;
        numbersSeen = 0;

        while (chr()) {
          ipv4Piece = null;

          if (numbersSeen > 0) {
            if (chr() == '.' && numbersSeen < 4) pointer++;else return;
          }

          if (!exec(DIGIT, chr())) return;

          while (exec(DIGIT, chr())) {
            number = parseInt$1(chr(), 10);
            if (ipv4Piece === null) ipv4Piece = number;else if (ipv4Piece == 0) return;else ipv4Piece = ipv4Piece * 10 + number;
            if (ipv4Piece > 255) return;
            pointer++;
          }

          address[pieceIndex] = address[pieceIndex] * 256 + ipv4Piece;
          numbersSeen++;
          if (numbersSeen == 2 || numbersSeen == 4) pieceIndex++;
        }

        if (numbersSeen != 4) return;
        break;
      } else if (chr() == ':') {
        pointer++;
        if (!chr()) return;
      } else if (chr()) return;

      address[pieceIndex++] = value;
    }

    if (compress !== null) {
      swaps = pieceIndex - compress;
      pieceIndex = 7;

      while (pieceIndex != 0 && swaps > 0) {
        swap = address[pieceIndex];
        address[pieceIndex--] = address[compress + swaps - 1];
        address[compress + --swaps] = swap;
      }
    } else if (pieceIndex != 8) return;

    return address;
  };

  var findLongestZeroSequence = function findLongestZeroSequence(ipv6) {
    var maxIndex = null;
    var maxLength = 1;
    var currStart = null;
    var currLength = 0;
    var index = 0;

    for (; index < 8; index++) {
      if (ipv6[index] !== 0) {
        if (currLength > maxLength) {
          maxIndex = currStart;
          maxLength = currLength;
        }

        currStart = null;
        currLength = 0;
      } else {
        if (currStart === null) currStart = index;
        ++currLength;
      }
    }

    if (currLength > maxLength) {
      maxIndex = currStart;
      maxLength = currLength;
    }

    return maxIndex;
  }; // https://url.spec.whatwg.org/#host-serializing


  var serializeHost = function serializeHost(host) {
    var result, index, compress, ignore0; // ipv4

    if (typeof host == 'number') {
      result = [];

      for (index = 0; index < 4; index++) {
        unshift(result, host % 256);
        host = floor(host / 256);
      }

      return join(result, '.'); // ipv6
    } else if (_typeof(host) == 'object') {
      result = '';
      compress = findLongestZeroSequence(host);

      for (index = 0; index < 8; index++) {
        if (ignore0 && host[index] === 0) continue;
        if (ignore0) ignore0 = false;

        if (compress === index) {
          result += index ? ':' : '::';
          ignore0 = true;
        } else {
          result += numberToString(host[index], 16);
          if (index < 7) result += ':';
        }
      }

      return '[' + result + ']';
    }

    return host;
  };

  var C0ControlPercentEncodeSet = {};
  var fragmentPercentEncodeSet = objectAssign({}, C0ControlPercentEncodeSet, {
    ' ': 1,
    '"': 1,
    '<': 1,
    '>': 1,
    '`': 1
  });
  var pathPercentEncodeSet = objectAssign({}, fragmentPercentEncodeSet, {
    '#': 1,
    '?': 1,
    '{': 1,
    '}': 1
  });
  var userinfoPercentEncodeSet = objectAssign({}, pathPercentEncodeSet, {
    '/': 1,
    ':': 1,
    ';': 1,
    '=': 1,
    '@': 1,
    '[': 1,
    '\\': 1,
    ']': 1,
    '^': 1,
    '|': 1
  });

  var percentEncode = function percentEncode(chr, set) {
    var code = codeAt(chr, 0);
    return code > 0x20 && code < 0x7F && !hasOwnProperty_1(set, chr) ? chr : encodeURIComponent(chr);
  }; // https://url.spec.whatwg.org/#special-scheme


  var specialSchemes = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  }; // https://url.spec.whatwg.org/#windows-drive-letter

  var isWindowsDriveLetter = function isWindowsDriveLetter(string, normalized) {
    var second;
    return string.length == 2 && exec(ALPHA, charAt(string, 0)) && ((second = charAt(string, 1)) == ':' || !normalized && second == '|');
  }; // https://url.spec.whatwg.org/#start-with-a-windows-drive-letter


  var startsWithWindowsDriveLetter = function startsWithWindowsDriveLetter(string) {
    var third;
    return string.length > 1 && isWindowsDriveLetter(stringSlice(string, 0, 2)) && (string.length == 2 || (third = charAt(string, 2)) === '/' || third === '\\' || third === '?' || third === '#');
  }; // https://url.spec.whatwg.org/#single-dot-path-segment


  var isSingleDot = function isSingleDot(segment) {
    return segment === '.' || toLowerCase(segment) === '%2e';
  }; // https://url.spec.whatwg.org/#double-dot-path-segment


  var isDoubleDot = function isDoubleDot(segment) {
    segment = toLowerCase(segment);
    return segment === '..' || segment === '%2e.' || segment === '.%2e' || segment === '%2e%2e';
  }; // States:


  var SCHEME_START = {};
  var SCHEME = {};
  var NO_SCHEME = {};
  var SPECIAL_RELATIVE_OR_AUTHORITY = {};
  var PATH_OR_AUTHORITY = {};
  var RELATIVE = {};
  var RELATIVE_SLASH = {};
  var SPECIAL_AUTHORITY_SLASHES = {};
  var SPECIAL_AUTHORITY_IGNORE_SLASHES = {};
  var AUTHORITY = {};
  var HOST = {};
  var HOSTNAME = {};
  var PORT = {};
  var FILE = {};
  var FILE_SLASH = {};
  var FILE_HOST = {};
  var PATH_START = {};
  var PATH = {};
  var CANNOT_BE_A_BASE_URL_PATH = {};
  var QUERY = {};
  var FRAGMENT = {};

  var URLState = function URLState(url, isBase, base) {
    var urlString = toString_1(url);
    var baseState, failure, searchParams;

    if (isBase) {
      failure = this.parse(urlString);
      if (failure) throw TypeError$1(failure);
      this.searchParams = null;
    } else {
      if (base !== undefined) baseState = new URLState(base, true);
      failure = this.parse(urlString, null, baseState);
      if (failure) throw TypeError$1(failure);
      searchParams = getInternalSearchParamsState(new URLSearchParams$1());
      searchParams.bindURL(this);
      this.searchParams = searchParams;
    }
  };

  URLState.prototype = {
    type: 'URL',
    // https://url.spec.whatwg.org/#url-parsing
    // eslint-disable-next-line max-statements -- TODO
    parse: function parse(input, stateOverride, base) {
      var url = this;
      var state = stateOverride || SCHEME_START;
      var pointer = 0;
      var buffer = '';
      var seenAt = false;
      var seenBracket = false;
      var seenPasswordToken = false;
      var codePoints, chr, bufferCodePoints, failure;
      input = toString_1(input);

      if (!stateOverride) {
        url.scheme = '';
        url.username = '';
        url.password = '';
        url.host = null;
        url.port = null;
        url.path = [];
        url.query = null;
        url.fragment = null;
        url.cannotBeABaseURL = false;
        input = replace(input, LEADING_AND_TRAILING_C0_CONTROL_OR_SPACE, '');
      }

      input = replace(input, TAB_AND_NEW_LINE, '');
      codePoints = arrayFrom(input);

      while (pointer <= codePoints.length) {
        chr = codePoints[pointer];

        switch (state) {
          case SCHEME_START:
            if (chr && exec(ALPHA, chr)) {
              buffer += toLowerCase(chr);
              state = SCHEME;
            } else if (!stateOverride) {
              state = NO_SCHEME;
              continue;
            } else return INVALID_SCHEME;

            break;

          case SCHEME:
            if (chr && (exec(ALPHANUMERIC, chr) || chr == '+' || chr == '-' || chr == '.')) {
              buffer += toLowerCase(chr);
            } else if (chr == ':') {
              if (stateOverride && (url.isSpecial() != hasOwnProperty_1(specialSchemes, buffer) || buffer == 'file' && (url.includesCredentials() || url.port !== null) || url.scheme == 'file' && !url.host)) return;
              url.scheme = buffer;

              if (stateOverride) {
                if (url.isSpecial() && specialSchemes[url.scheme] == url.port) url.port = null;
                return;
              }

              buffer = '';

              if (url.scheme == 'file') {
                state = FILE;
              } else if (url.isSpecial() && base && base.scheme == url.scheme) {
                state = SPECIAL_RELATIVE_OR_AUTHORITY;
              } else if (url.isSpecial()) {
                state = SPECIAL_AUTHORITY_SLASHES;
              } else if (codePoints[pointer + 1] == '/') {
                state = PATH_OR_AUTHORITY;
                pointer++;
              } else {
                url.cannotBeABaseURL = true;
                push(url.path, '');
                state = CANNOT_BE_A_BASE_URL_PATH;
              }
            } else if (!stateOverride) {
              buffer = '';
              state = NO_SCHEME;
              pointer = 0;
              continue;
            } else return INVALID_SCHEME;

            break;

          case NO_SCHEME:
            if (!base || base.cannotBeABaseURL && chr != '#') return INVALID_SCHEME;

            if (base.cannotBeABaseURL && chr == '#') {
              url.scheme = base.scheme;
              url.path = arraySliceSimple(base.path);
              url.query = base.query;
              url.fragment = '';
              url.cannotBeABaseURL = true;
              state = FRAGMENT;
              break;
            }

            state = base.scheme == 'file' ? FILE : RELATIVE;
            continue;

          case SPECIAL_RELATIVE_OR_AUTHORITY:
            if (chr == '/' && codePoints[pointer + 1] == '/') {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
              pointer++;
            } else {
              state = RELATIVE;
              continue;
            }

            break;

          case PATH_OR_AUTHORITY:
            if (chr == '/') {
              state = AUTHORITY;
              break;
            } else {
              state = PATH;
              continue;
            }

          case RELATIVE:
            url.scheme = base.scheme;

            if (chr == EOF) {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySliceSimple(base.path);
              url.query = base.query;
            } else if (chr == '/' || chr == '\\' && url.isSpecial()) {
              state = RELATIVE_SLASH;
            } else if (chr == '?') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySliceSimple(base.path);
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySliceSimple(base.path);
              url.query = base.query;
              url.fragment = '';
              state = FRAGMENT;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              url.path = arraySliceSimple(base.path);
              url.path.length--;
              state = PATH;
              continue;
            }

            break;

          case RELATIVE_SLASH:
            if (url.isSpecial() && (chr == '/' || chr == '\\')) {
              state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            } else if (chr == '/') {
              state = AUTHORITY;
            } else {
              url.username = base.username;
              url.password = base.password;
              url.host = base.host;
              url.port = base.port;
              state = PATH;
              continue;
            }

            break;

          case SPECIAL_AUTHORITY_SLASHES:
            state = SPECIAL_AUTHORITY_IGNORE_SLASHES;
            if (chr != '/' || charAt(buffer, pointer + 1) != '/') continue;
            pointer++;
            break;

          case SPECIAL_AUTHORITY_IGNORE_SLASHES:
            if (chr != '/' && chr != '\\') {
              state = AUTHORITY;
              continue;
            }

            break;

          case AUTHORITY:
            if (chr == '@') {
              if (seenAt) buffer = '%40' + buffer;
              seenAt = true;
              bufferCodePoints = arrayFrom(buffer);

              for (var i = 0; i < bufferCodePoints.length; i++) {
                var codePoint = bufferCodePoints[i];

                if (codePoint == ':' && !seenPasswordToken) {
                  seenPasswordToken = true;
                  continue;
                }

                var encodedCodePoints = percentEncode(codePoint, userinfoPercentEncodeSet);
                if (seenPasswordToken) url.password += encodedCodePoints;else url.username += encodedCodePoints;
              }

              buffer = '';
            } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
              if (seenAt && buffer == '') return INVALID_AUTHORITY;
              pointer -= arrayFrom(buffer).length + 1;
              buffer = '';
              state = HOST;
            } else buffer += chr;

            break;

          case HOST:
          case HOSTNAME:
            if (stateOverride && url.scheme == 'file') {
              state = FILE_HOST;
              continue;
            } else if (chr == ':' && !seenBracket) {
              if (buffer == '') return INVALID_HOST;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PORT;
              if (stateOverride == HOSTNAME) return;
            } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial()) {
              if (url.isSpecial() && buffer == '') return INVALID_HOST;
              if (stateOverride && buffer == '' && (url.includesCredentials() || url.port !== null)) return;
              failure = url.parseHost(buffer);
              if (failure) return failure;
              buffer = '';
              state = PATH_START;
              if (stateOverride) return;
              continue;
            } else {
              if (chr == '[') seenBracket = true;else if (chr == ']') seenBracket = false;
              buffer += chr;
            }

            break;

          case PORT:
            if (exec(DIGIT, chr)) {
              buffer += chr;
            } else if (chr == EOF || chr == '/' || chr == '?' || chr == '#' || chr == '\\' && url.isSpecial() || stateOverride) {
              if (buffer != '') {
                var port = parseInt$1(buffer, 10);
                if (port > 0xFFFF) return INVALID_PORT;
                url.port = url.isSpecial() && port === specialSchemes[url.scheme] ? null : port;
                buffer = '';
              }

              if (stateOverride) return;
              state = PATH_START;
              continue;
            } else return INVALID_PORT;

            break;

          case FILE:
            url.scheme = 'file';
            if (chr == '/' || chr == '\\') state = FILE_SLASH;else if (base && base.scheme == 'file') {
              if (chr == EOF) {
                url.host = base.host;
                url.path = arraySliceSimple(base.path);
                url.query = base.query;
              } else if (chr == '?') {
                url.host = base.host;
                url.path = arraySliceSimple(base.path);
                url.query = '';
                state = QUERY;
              } else if (chr == '#') {
                url.host = base.host;
                url.path = arraySliceSimple(base.path);
                url.query = base.query;
                url.fragment = '';
                state = FRAGMENT;
              } else {
                if (!startsWithWindowsDriveLetter(join(arraySliceSimple(codePoints, pointer), ''))) {
                  url.host = base.host;
                  url.path = arraySliceSimple(base.path);
                  url.shortenPath();
                }

                state = PATH;
                continue;
              }
            } else {
              state = PATH;
              continue;
            }
            break;

          case FILE_SLASH:
            if (chr == '/' || chr == '\\') {
              state = FILE_HOST;
              break;
            }

            if (base && base.scheme == 'file' && !startsWithWindowsDriveLetter(join(arraySliceSimple(codePoints, pointer), ''))) {
              if (isWindowsDriveLetter(base.path[0], true)) push(url.path, base.path[0]);else url.host = base.host;
            }

            state = PATH;
            continue;

          case FILE_HOST:
            if (chr == EOF || chr == '/' || chr == '\\' || chr == '?' || chr == '#') {
              if (!stateOverride && isWindowsDriveLetter(buffer)) {
                state = PATH;
              } else if (buffer == '') {
                url.host = '';
                if (stateOverride) return;
                state = PATH_START;
              } else {
                failure = url.parseHost(buffer);
                if (failure) return failure;
                if (url.host == 'localhost') url.host = '';
                if (stateOverride) return;
                buffer = '';
                state = PATH_START;
              }

              continue;
            } else buffer += chr;

            break;

          case PATH_START:
            if (url.isSpecial()) {
              state = PATH;
              if (chr != '/' && chr != '\\') continue;
            } else if (!stateOverride && chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (!stateOverride && chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              state = PATH;
              if (chr != '/') continue;
            }

            break;

          case PATH:
            if (chr == EOF || chr == '/' || chr == '\\' && url.isSpecial() || !stateOverride && (chr == '?' || chr == '#')) {
              if (isDoubleDot(buffer)) {
                url.shortenPath();

                if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                  push(url.path, '');
                }
              } else if (isSingleDot(buffer)) {
                if (chr != '/' && !(chr == '\\' && url.isSpecial())) {
                  push(url.path, '');
                }
              } else {
                if (url.scheme == 'file' && !url.path.length && isWindowsDriveLetter(buffer)) {
                  if (url.host) url.host = '';
                  buffer = charAt(buffer, 0) + ':'; // normalize windows drive letter
                }

                push(url.path, buffer);
              }

              buffer = '';

              if (url.scheme == 'file' && (chr == EOF || chr == '?' || chr == '#')) {
                while (url.path.length > 1 && url.path[0] === '') {
                  shift(url.path);
                }
              }

              if (chr == '?') {
                url.query = '';
                state = QUERY;
              } else if (chr == '#') {
                url.fragment = '';
                state = FRAGMENT;
              }
            } else {
              buffer += percentEncode(chr, pathPercentEncodeSet);
            }

            break;

          case CANNOT_BE_A_BASE_URL_PATH:
            if (chr == '?') {
              url.query = '';
              state = QUERY;
            } else if (chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              url.path[0] += percentEncode(chr, C0ControlPercentEncodeSet);
            }

            break;

          case QUERY:
            if (!stateOverride && chr == '#') {
              url.fragment = '';
              state = FRAGMENT;
            } else if (chr != EOF) {
              if (chr == "'" && url.isSpecial()) url.query += '%27';else if (chr == '#') url.query += '%23';else url.query += percentEncode(chr, C0ControlPercentEncodeSet);
            }

            break;

          case FRAGMENT:
            if (chr != EOF) url.fragment += percentEncode(chr, fragmentPercentEncodeSet);
            break;
        }

        pointer++;
      }
    },
    // https://url.spec.whatwg.org/#host-parsing
    parseHost: function parseHost(input) {
      var result, codePoints, index;

      if (charAt(input, 0) == '[') {
        if (charAt(input, input.length - 1) != ']') return INVALID_HOST;
        result = parseIPv6(stringSlice(input, 1, -1));
        if (!result) return INVALID_HOST;
        this.host = result; // opaque host
      } else if (!this.isSpecial()) {
        if (exec(FORBIDDEN_HOST_CODE_POINT_EXCLUDING_PERCENT, input)) return INVALID_HOST;
        result = '';
        codePoints = arrayFrom(input);

        for (index = 0; index < codePoints.length; index++) {
          result += percentEncode(codePoints[index], C0ControlPercentEncodeSet);
        }

        this.host = result;
      } else {
        input = stringPunycodeToAscii(input);
        if (exec(FORBIDDEN_HOST_CODE_POINT, input)) return INVALID_HOST;
        result = parseIPv4(input);
        if (result === null) return INVALID_HOST;
        this.host = result;
      }
    },
    // https://url.spec.whatwg.org/#cannot-have-a-username-password-port
    cannotHaveUsernamePasswordPort: function cannotHaveUsernamePasswordPort() {
      return !this.host || this.cannotBeABaseURL || this.scheme == 'file';
    },
    // https://url.spec.whatwg.org/#include-credentials
    includesCredentials: function includesCredentials() {
      return this.username != '' || this.password != '';
    },
    // https://url.spec.whatwg.org/#is-special
    isSpecial: function isSpecial() {
      return hasOwnProperty_1(specialSchemes, this.scheme);
    },
    // https://url.spec.whatwg.org/#shorten-a-urls-path
    shortenPath: function shortenPath() {
      var path = this.path;
      var pathSize = path.length;

      if (pathSize && (this.scheme != 'file' || pathSize != 1 || !isWindowsDriveLetter(path[0], true))) {
        path.length--;
      }
    },
    // https://url.spec.whatwg.org/#concept-url-serializer
    serialize: function serialize() {
      var url = this;
      var scheme = url.scheme;
      var username = url.username;
      var password = url.password;
      var host = url.host;
      var port = url.port;
      var path = url.path;
      var query = url.query;
      var fragment = url.fragment;
      var output = scheme + ':';

      if (host !== null) {
        output += '//';

        if (url.includesCredentials()) {
          output += username + (password ? ':' + password : '') + '@';
        }

        output += serializeHost(host);
        if (port !== null) output += ':' + port;
      } else if (scheme == 'file') output += '//';

      output += url.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
      if (query !== null) output += '?' + query;
      if (fragment !== null) output += '#' + fragment;
      return output;
    },
    // https://url.spec.whatwg.org/#dom-url-href
    setHref: function setHref(href) {
      var failure = this.parse(href);
      if (failure) throw TypeError$1(failure);
      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-origin
    getOrigin: function getOrigin() {
      var scheme = this.scheme;
      var port = this.port;
      if (scheme == 'blob') try {
        return new URLConstructor(scheme.path[0]).origin;
      } catch (error) {
        return 'null';
      }
      if (scheme == 'file' || !this.isSpecial()) return 'null';
      return scheme + '://' + serializeHost(this.host) + (port !== null ? ':' + port : '');
    },
    // https://url.spec.whatwg.org/#dom-url-protocol
    getProtocol: function getProtocol() {
      return this.scheme + ':';
    },
    setProtocol: function setProtocol(protocol) {
      this.parse(toString_1(protocol) + ':', SCHEME_START);
    },
    // https://url.spec.whatwg.org/#dom-url-username
    getUsername: function getUsername() {
      return this.username;
    },
    setUsername: function setUsername(username) {
      var codePoints = arrayFrom(toString_1(username));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.username = '';

      for (var i = 0; i < codePoints.length; i++) {
        this.username += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-password
    getPassword: function getPassword() {
      return this.password;
    },
    setPassword: function setPassword(password) {
      var codePoints = arrayFrom(toString_1(password));
      if (this.cannotHaveUsernamePasswordPort()) return;
      this.password = '';

      for (var i = 0; i < codePoints.length; i++) {
        this.password += percentEncode(codePoints[i], userinfoPercentEncodeSet);
      }
    },
    // https://url.spec.whatwg.org/#dom-url-host
    getHost: function getHost() {
      var host = this.host;
      var port = this.port;
      return host === null ? '' : port === null ? serializeHost(host) : serializeHost(host) + ':' + port;
    },
    setHost: function setHost(host) {
      if (this.cannotBeABaseURL) return;
      this.parse(host, HOST);
    },
    // https://url.spec.whatwg.org/#dom-url-hostname
    getHostname: function getHostname() {
      var host = this.host;
      return host === null ? '' : serializeHost(host);
    },
    setHostname: function setHostname(hostname) {
      if (this.cannotBeABaseURL) return;
      this.parse(hostname, HOSTNAME);
    },
    // https://url.spec.whatwg.org/#dom-url-port
    getPort: function getPort() {
      var port = this.port;
      return port === null ? '' : toString_1(port);
    },
    setPort: function setPort(port) {
      if (this.cannotHaveUsernamePasswordPort()) return;
      port = toString_1(port);
      if (port == '') this.port = null;else this.parse(port, PORT);
    },
    // https://url.spec.whatwg.org/#dom-url-pathname
    getPathname: function getPathname() {
      var path = this.path;
      return this.cannotBeABaseURL ? path[0] : path.length ? '/' + join(path, '/') : '';
    },
    setPathname: function setPathname(pathname) {
      if (this.cannotBeABaseURL) return;
      this.path = [];
      this.parse(pathname, PATH_START);
    },
    // https://url.spec.whatwg.org/#dom-url-search
    getSearch: function getSearch() {
      var query = this.query;
      return query ? '?' + query : '';
    },
    setSearch: function setSearch(search) {
      search = toString_1(search);

      if (search == '') {
        this.query = null;
      } else {
        if ('?' == charAt(search, 0)) search = stringSlice(search, 1);
        this.query = '';
        this.parse(search, QUERY);
      }

      this.searchParams.update();
    },
    // https://url.spec.whatwg.org/#dom-url-searchparams
    getSearchParams: function getSearchParams() {
      return this.searchParams.facade;
    },
    // https://url.spec.whatwg.org/#dom-url-hash
    getHash: function getHash() {
      var fragment = this.fragment;
      return fragment ? '#' + fragment : '';
    },
    setHash: function setHash(hash) {
      hash = toString_1(hash);

      if (hash == '') {
        this.fragment = null;
        return;
      }

      if ('#' == charAt(hash, 0)) hash = stringSlice(hash, 1);
      this.fragment = '';
      this.parse(hash, FRAGMENT);
    },
    update: function update() {
      this.query = this.searchParams.serialize() || null;
    }
  }; // `URL` constructor
  // https://url.spec.whatwg.org/#url-class

  var URLConstructor = function URL(url
  /* , base */
  ) {
    var that = anInstance(this, URLPrototype);
    var base = validateArgumentsLength(arguments.length, 1) > 1 ? arguments[1] : undefined;
    var state = setInternalState(that, new URLState(url, false, base));

    if (!descriptors) {
      that.href = state.serialize();
      that.origin = state.getOrigin();
      that.protocol = state.getProtocol();
      that.username = state.getUsername();
      that.password = state.getPassword();
      that.host = state.getHost();
      that.hostname = state.getHostname();
      that.port = state.getPort();
      that.pathname = state.getPathname();
      that.search = state.getSearch();
      that.searchParams = state.getSearchParams();
      that.hash = state.getHash();
    }
  };

  var URLPrototype = URLConstructor.prototype;

  var accessorDescriptor = function accessorDescriptor(getter, setter) {
    return {
      get: function get() {
        return getInternalURLState(this)[getter]();
      },
      set: setter && function (value) {
        return getInternalURLState(this)[setter](value);
      },
      configurable: true,
      enumerable: true
    };
  };

  if (descriptors) {
    defineProperties(URLPrototype, {
      // `URL.prototype.href` accessors pair
      // https://url.spec.whatwg.org/#dom-url-href
      href: accessorDescriptor('serialize', 'setHref'),
      // `URL.prototype.origin` getter
      // https://url.spec.whatwg.org/#dom-url-origin
      origin: accessorDescriptor('getOrigin'),
      // `URL.prototype.protocol` accessors pair
      // https://url.spec.whatwg.org/#dom-url-protocol
      protocol: accessorDescriptor('getProtocol', 'setProtocol'),
      // `URL.prototype.username` accessors pair
      // https://url.spec.whatwg.org/#dom-url-username
      username: accessorDescriptor('getUsername', 'setUsername'),
      // `URL.prototype.password` accessors pair
      // https://url.spec.whatwg.org/#dom-url-password
      password: accessorDescriptor('getPassword', 'setPassword'),
      // `URL.prototype.host` accessors pair
      // https://url.spec.whatwg.org/#dom-url-host
      host: accessorDescriptor('getHost', 'setHost'),
      // `URL.prototype.hostname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hostname
      hostname: accessorDescriptor('getHostname', 'setHostname'),
      // `URL.prototype.port` accessors pair
      // https://url.spec.whatwg.org/#dom-url-port
      port: accessorDescriptor('getPort', 'setPort'),
      // `URL.prototype.pathname` accessors pair
      // https://url.spec.whatwg.org/#dom-url-pathname
      pathname: accessorDescriptor('getPathname', 'setPathname'),
      // `URL.prototype.search` accessors pair
      // https://url.spec.whatwg.org/#dom-url-search
      search: accessorDescriptor('getSearch', 'setSearch'),
      // `URL.prototype.searchParams` getter
      // https://url.spec.whatwg.org/#dom-url-searchparams
      searchParams: accessorDescriptor('getSearchParams'),
      // `URL.prototype.hash` accessors pair
      // https://url.spec.whatwg.org/#dom-url-hash
      hash: accessorDescriptor('getHash', 'setHash')
    });
  } // `URL.prototype.toJSON` method
  // https://url.spec.whatwg.org/#dom-url-tojson


  redefine(URLPrototype, 'toJSON', function toJSON() {
    return getInternalURLState(this).serialize();
  }, {
    enumerable: true
  }); // `URL.prototype.toString` method
  // https://url.spec.whatwg.org/#URL-stringification-behavior

  redefine(URLPrototype, 'toString', function toString() {
    return getInternalURLState(this).serialize();
  }, {
    enumerable: true
  });

  if (NativeURL) {
    var nativeCreateObjectURL = NativeURL.createObjectURL;
    var nativeRevokeObjectURL = NativeURL.revokeObjectURL; // `URL.createObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL

    if (nativeCreateObjectURL) redefine(URLConstructor, 'createObjectURL', functionBindContext(nativeCreateObjectURL, NativeURL)); // `URL.revokeObjectURL` method
    // https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL

    if (nativeRevokeObjectURL) redefine(URLConstructor, 'revokeObjectURL', functionBindContext(nativeRevokeObjectURL, NativeURL));
  }

  setToStringTag(URLConstructor, 'URL');
  _export({
    global: true,
    forced: !nativeUrl,
    sham: !descriptors
  }, {
    URL: URLConstructor
  });

  // https://url.spec.whatwg.org/#dom-url-tojson


  _export({
    target: 'URL',
    proto: true,
    enumerable: true
  }, {
    toJSON: function toJSON() {
      return functionCall(URL.prototype.toString, this);
    }
  });

  createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var runtime = function (exports) {

      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.

      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }

      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function define(obj, key, value) {
          return obj[key] = value;
        };
      }

      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.

        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }

      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.

      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }

      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.

      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.

      function Generator() {}

      function GeneratorFunction() {}

      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.


      var IteratorPrototype = {};
      define(IteratorPrototype, iteratorSymbol, function () {
        return this;
      });
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }

      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = GeneratorFunctionPrototype;
      define(Gp, "constructor", GeneratorFunctionPrototype);
      define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.

      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }

      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };

      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }

        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.


      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };

      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);

          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;

            if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }

            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }

        var previousPromise;

        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }

          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).


        this._invoke = enqueue;
      }

      defineIteratorMethods(AsyncIterator.prototype);
      define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
        return this;
      });
      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.

      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };

      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }

          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


            return doneResult();
          }

          context.method = method;
          context.arg = arg;

          while (true) {
            var delegate = context.delegate;

            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);

              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }

            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }

              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }

            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);

            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;

              if (record.arg === ContinueSentinel) {
                continue;
              }

              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.

              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.


      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];

        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;

          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);

              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }

            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }

          return ContinueSentinel;
        }

        var record = tryCatch(method, delegate.iterator, context.arg);

        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }

        var info = record.arg;

        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }

        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.

          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.


        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.


      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.

      define(Gp, iteratorSymbol, function () {
        return this;
      });
      define(Gp, "toString", function () {
        return "[object Generator]";
      });

      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };

        if (1 in locs) {
          entry.catchLoc = locs[1];
        }

        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }

        this.tryEntries.push(entry);
      }

      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }

      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }

      exports.keys = function (object) {
        var keys = [];

        for (var key in object) {
          keys.push(key);
        }

        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.

        return function next() {
          while (keys.length) {
            var key = keys.pop();

            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.


          next.done = true;
          return next;
        };
      };

      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];

          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }

          if (typeof iterable.next === "function") {
            return iterable;
          }

          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }

              next.value = undefined$1;
              next.done = true;
              return next;
            };

            return next.next = next;
          }
        } // Return an iterator with no values.


        return {
          next: doneResult
        };
      }

      exports.values = values;

      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }

      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.

          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);

          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;

          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }

          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }

          var context = this;

          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;

            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }

            return !!caught;
          }

          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;

            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }

            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");

              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }

          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }

          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;

          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }

          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }

          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }

          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];

            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;

              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }

              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.


          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };

          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }

          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.

      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports );

    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, in modern engines
      // we can explicitly access globalThis. In older engines we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
        globalThis.regeneratorRuntime = runtime;
      } else {
        Function("r", "regeneratorRuntime = r")(runtime);
      }
    }
  });

  var $$1 = jQuery; // eslint-disable-line no-undef

  var ds$1 = drupalSettings; // eslint-disable-line no-undef

  var fns$1 = drupalSettings.brc_vis.fns; // eslint-disable-line no-undef

  function taxonSelect() {
    // Set up any taxon selection controls
    $$1('.brc_vis_taxon_selector').each(function () {
      var id = $$1(this).attr('id');
      var jwt = $$1(this).attr('data-jwt');
      var params = $$1(this).attr('data-params');
      var maxWidth = $$1(this).attr('data-max-width');
      var buttonText = $$1(this).attr('data-button-text');
      var placeholder = $$1(this).attr('data-placeholder'); // Hidden input for selected tvk and taxon
      // other functions can put on change event handlers on these

      var $tvkHidden = $$1('<input>').appendTo($$1(this));
      $tvkHidden.attr('id', "".concat(id, "-tvk-selected"));
      $tvkHidden.attr('class', 'tvk-selected');
      $tvkHidden.attr('type', 'hidden');
      var $taxonHidden = $$1('<input>').appendTo($$1(this));
      $taxonHidden.attr('id', "".concat(id, "-taxon-selected"));
      $taxonHidden.attr('class', 'taxon-selected');
      $taxonHidden.attr('type', 'hidden'); // Flex layout for input and button

      var $d0 = $$1('<div>').appendTo($$1(this));
      $d0.css('display', 'flex');
      $d0.css('width', '100%');
      $d0.css('margin', '0.3em 0');

      if (Number(maxWidth)) {
        $d0.css('max-width', Number(maxWidth) + 'px');
      }

      var $d1 = $$1('<div>').appendTo($d0);
      $d1.css('flex', '20');
      var $d2 = $$1('<div>').appendTo($d0);
      $d2.css('flex', '1'); // Action button
      var $button = $$1("<button>".concat(buttonText, "</button>")).appendTo($d2);
      $button.css('margin-left', '0.5em');
      $button.prop('disabled', true);
      $button.on('click', function () {
        //console.log("action!", selTvk, selText)
        fns$1.taxonSelected(id, $tvkHidden.val(), $taxonHidden.val());
      }); // Autocomplete

      var $wrapper = $$1('<div>').appendTo($d1);
      $wrapper.attr('class', 'autoComplete_wrapper');
      var $input = $$1('<input>').appendTo($wrapper);
      $input.attr('id', "".concat(id, "-input"));
      $input.attr('type', 'text');
      $input.attr('tabindex', '1');
      var searchString;
      var autoCompleteJS = new autoComplete({
        selector: "#".concat(id, "-input"),
        placeHolder: placeholder,
        debounce: 300,
        submit: true,
        data: {
          src: function () {
            var _src = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(query) {
              var url, source, data, json;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      searchString = query.toLowerCase();
                      _context.prev = 1;

                      // Enable disable search button
                      if (query === $taxonHidden.val()) {
                        $button.prop('disabled', false);
                      } else {
                        $button.prop('disabled', true);
                      } // Fetch Data from external Source


                      url = "".concat(ds$1.brc_vis.warehouse, "index.php/services/rest/taxa/search").concat(params, "searchQuery=").concat(query);
                      _context.next = 6;
                      return fetch(url, {
                        method: 'GET',
                        headers: {
                          Authorization: "Bearer ".concat(jwt)
                        }
                      });

                    case 6:
                      source = _context.sent;
                      _context.next = 9;
                      return source.json();

                    case 9:
                      data = _context.sent;
                      // Remove duplicates, e.g there are two Anthus pratensis with different authorities
                      json = data.data.filter(function (value, index, self) {
                        return index === self.findIndex(function (t) {
                          return t.default_common_name === value.default_common_name && t.taxon === value.taxon && t.preferred_taxon === value.preferred_taxon;
                        });
                      });
                      return _context.abrupt("return", json);

                    case 14:
                      _context.prev = 14;
                      _context.t0 = _context["catch"](1);
                      return _context.abrupt("return", _context.t0);

                    case 17:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[1, 14]]);
            }));

            function src(_x) {
              return _src.apply(this, arguments);
            }

            return src;
          }(),
          // Data 'Object' key to be searched
          keys: ["searchterm"]
        },
        resultsList: {
          element: function element(list, data) {
            if (!data.results.length) {
              // Create "No Results" message element
              var message = document.createElement("div"); // Add class to the created element

              message.setAttribute("class", "no_result"); // Add message text content

              message.innerHTML = "<span>Found No Results for \"".concat(data.query, "\"</span>"); // Append message element to the results list

              list.prepend(message);
            }
          },
          noResults: true,
          maxResults: 50
        },
        resultItem: {
          element: function element(item, data) {
            var id = Number($$1(item).attr('id').substr(20)) + 1;
            $$1(item).addClass(id % 2 ? 'item-odd' : 'item-even');
            var t = data.value;
            var line1, line2, line3; // Specify the lines

            if (t.language_iso !== 'lat') {
              line1 = boldenSearch(t.taxon);

              if (t.taxon !== t.preferred_taxon) {
                line2 = "[<i>".concat(boldenSearch(t.preferred_taxon), "</i>]");
              } else {
                line2 = '';
              }
            } else {
              line1 = "<i>".concat(boldenSearch(t.taxon), "</i>");

              if (t.taxon !== t.preferred_taxon) {
                line2 = "[syn. of <i>".concat(boldenSearch(t.preferred_taxon), "</i>]");
              } else if (t.default_common_name) {
                line2 = boldenSearch(t.default_common_name);
              } else {
                line2 = '';
              }
            }

            line3 = "<b>".concat(t.taxon_group, "</b>"); // Highlight the search text 

            function boldenSearch(taxon) {
              var taxonlc = taxon.toLowerCase();
              var iStart = taxonlc.indexOf(searchString);
              var p1, p2, p3;

              if (iStart > -1) {
                if (iStart === 0) {
                  p1 = '';
                } else {
                  p1 = taxon.substr(0, iStart);
                }

                p2 = "<b>".concat(taxon.substr(iStart, searchString.length), "</b>");

                if (iStart + searchString.length === taxon.length) {
                  p3 = '';
                } else {
                  p3 = taxon.substr(iStart + searchString.length);
                }

                return "".concat(p1).concat(p2).concat(p3);
              } else {
                return taxon;
              }
            }

            item.innerHTML = "<div>".concat(line1, "</div><div>").concat(line2, "</div><div>").concat(line3, "</div>");
          }
        },
        events: {
          input: {
            focus: function focus() {
              if (autoCompleteJS.input.value.length) autoCompleteJS.start();
            },
            selection: function selection(event) {
              var pttlid = event.detail.selection.value.preferred_taxa_taxon_list_id;
              var match = event.detail.selection.value.taxon; //console.log(pttlid)

              autoCompleteJS.input.value = match;
              $tvkHidden.val(pttlid);
              $taxonHidden.val(match);
              $button.prop('disabled', false);
            }
          }
        }
      });
    });
  }

  // The following two imports required for babel 7.4 onwards
  var $ = jQuery; // eslint-disable-line no-undef

  var ds = drupalSettings; // eslint-disable-line no-undef

  var fns = drupalSettings.brc_vis.fns; // eslint-disable-line no-undef

  var data = drupalSettings.brc_vis.data; // eslint-disable-line no-undef

  function main() {
    $(document).ready(function () {
      // Set up any taxon selection controls.
      taxonSelect(); // Set up functions for chart blocks and init data sources
      // that are ready to go.

      chartBlocks();
    });
  }

  function chartBlocks() {
    if (ds.brc_vis && ds.brc_vis.blocks) {
      // For each BRC visualisation block defined on
      // the layout, get its named function from the 
      // block config and call it, passing in the id
      // of the block div and the config object.
      // The named function will probably be from a
      // custom library.
      Object.keys(ds.brc_vis.config).forEach(function (divId) {
        var config = ds.brc_vis.config[divId];
        var fn = config['fn'] ? config['fn'] : null;

        if (fn && fns[fn]) {
          fns[fn](divId, config);
        }
      }); // The the initialisation funcions have set up ES data sources,
      // these will now be initialised, hooked up and populated.
      // (For functions that generate chart/map without the need
      // for further input such as a taxon selection control.)

      if (indiciaFns) {
        indiciaFns.initDataSources();
        indiciaFns.hookupDataSources();
        indiciaFns.populateDataSources();
      }
    }
  }

  fns.taxonSelected = function (taxonSelId, tvk, taxon) {
    // Execute each of the functions passed into addTaxonSelectedFn
    // when a taxon is selected. Pass the id of the taxon 
    // selection control and the tvk of the selected taxon as
    // arguments. If any of the functions sets up ES data sources,
    // these will be initialised, hooked up and populated after
    // all functions executed.  
    if (indiciaData) {
      indiciaData.esSources = []; // eslint-disable-line no-undef
    }

    data.taxonChangedFns.forEach(function (fn) {
      fn(taxonSelId, tvk, taxon);
    });

    if (indiciaFns) {
      indiciaFns.initDataSources();
      indiciaFns.hookupDataSources();
      indiciaFns.populateDataSources();
    }
  };

  fns.addTaxonSelectedFn = function (fn) {
    // This function is used by library functions to add callback
    // functions that respond to a taxon selection control.
    // The functions passed into this function should take
    // two arguments - the id of a selection control and
    // the selected taxon (tvk). The functions are added
    // to an array of functions to be called when taxon
    // selection controls are fired. The functions themselves
    // can check that the taxon selection control is the one
    // they want to respond to.
    if (!data.taxonChangedFns) {
      data.taxonChangedFns = [];
    }

    data.taxonChangedFns.push(fn);
  };

  // to assist with trouble shooting.

  console.log("Running ".concat(pkg.name, " version ").concat(pkg.version)); // Call main function

  main();

}));
