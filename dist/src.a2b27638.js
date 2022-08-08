// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/csvtojson/browser/browser.js":[function(require,module,exports) {
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

module.exports = function (t) {
  var e = {};

  function r(n) {
    if (e[n]) return e[n].exports;
    var i = e[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return t[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports;
  }

  return r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, {
      enumerable: !0,
      get: n
    });
  }, r.r = function (t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    });
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var i in t) r.d(n, i, function (e) {
      return t[e];
    }.bind(null, i));
    return n;
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };
    return r.d(e, "a", e), e;
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p = "", r(r.s = 32);
}([function (t, e) {
  var r;

  r = function () {
    return this;
  }();

  try {
    r = r || Function("return this")() || (0, eval)("this");
  } catch (t) {
    "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && (r = window);
  }

  t.exports = r;
}, function (t, e, r) {
  "use strict";

  var n = r(6),
      i = Object.keys || function (t) {
    var e = [];

    for (var r in t) e.push(r);

    return e;
  };

  t.exports = f;
  var o = r(5);
  o.inherits = r(2);
  var s = r(23),
      a = r(14);
  o.inherits(f, s);

  for (var u = i(a.prototype), c = 0; c < u.length; c++) {
    var l = u[c];
    f.prototype[l] || (f.prototype[l] = a.prototype[l]);
  }

  function f(t) {
    if (!(this instanceof f)) return new f(t);
    s.call(this, t), a.call(this, t), t && !1 === t.readable && (this.readable = !1), t && !1 === t.writable && (this.writable = !1), this.allowHalfOpen = !0, t && !1 === t.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", h);
  }

  function h() {
    this.allowHalfOpen || this._writableState.ended || n.nextTick(p, this);
  }

  function p(t) {
    t.end();
  }

  Object.defineProperty(f.prototype, "writableHighWaterMark", {
    enumerable: !1,
    get: function () {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(f.prototype, "destroyed", {
    get: function () {
      return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function (t) {
      void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, this._writableState.destroyed = t);
    }
  }), f.prototype._destroy = function (t, e) {
    this.push(null), this.end(), n.nextTick(e, t);
  };
}, function (t, e) {
  "function" == typeof Object.create ? t.exports = function (t, e) {
    t.super_ = e, t.prototype = Object.create(e.prototype, {
      constructor: {
        value: t,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    });
  } : t.exports = function (t, e) {
    t.super_ = e;

    var r = function () {};

    r.prototype = e.prototype, t.prototype = new r(), t.prototype.constructor = t;
  };
}, function (t, e, r) {
  "use strict";

  (function (t) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
     * @license  MIT
     */
    var n = r(38),
        i = r(39),
        o = r(40);

    function s() {
      return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
    }

    function a(t, e) {
      if (s() < e) throw new RangeError("Invalid typed array length");
      return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t;
    }

    function u(t, e, r) {
      if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, r);

      if ("number" == typeof t) {
        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
        return f(this, t);
      }

      return c(this, t, e, r);
    }

    function c(t, e, r, n) {
      if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
      return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, r, n) {
        if (e.byteLength, r < 0 || e.byteLength < r) throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < r + (n || 0)) throw new RangeError("'length' is out of bounds");
        return e = void 0 === r && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, r) : new Uint8Array(e, r, n), u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = h(t, e), t;
      }(t, e, r, n) : "string" == typeof e ? function (t, e, r) {
        if ("string" == typeof r && "" !== r || (r = "utf8"), !u.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
        var n = 0 | d(e, r),
            i = (t = a(t, n)).write(e, r);
        return i !== n && (t = t.slice(0, i)), t;
      }(t, e, r) : function (t, e) {
        if (u.isBuffer(e)) {
          var r = 0 | p(e.length);
          return 0 === (t = a(t, r)).length ? t : (e.copy(t, 0, 0, r), t);
        }

        if (e) {
          if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || function (t) {
            return t != t;
          }(e.length) ? a(t, 0) : h(t, e);
          if ("Buffer" === e.type && o(e.data)) return h(t, e.data);
        }

        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
      }(t, e);
    }

    function l(t) {
      if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
      if (t < 0) throw new RangeError('"size" argument must not be negative');
    }

    function f(t, e) {
      if (l(e), t = a(t, e < 0 ? 0 : 0 | p(e)), !u.TYPED_ARRAY_SUPPORT) for (var r = 0; r < e; ++r) t[r] = 0;
      return t;
    }

    function h(t, e) {
      var r = e.length < 0 ? 0 : 0 | p(e.length);
      t = a(t, r);

      for (var n = 0; n < r; n += 1) t[n] = 255 & e[n];

      return t;
    }

    function p(t) {
      if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
      return 0 | t;
    }

    function d(t, e) {
      if (u.isBuffer(t)) return t.length;
      if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
      "string" != typeof t && (t = "" + t);
      var r = t.length;
      if (0 === r) return 0;

      for (var n = !1;;) switch (e) {
        case "ascii":
        case "latin1":
        case "binary":
          return r;

        case "utf8":
        case "utf-8":
        case void 0:
          return N(t).length;

        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return 2 * r;

        case "hex":
          return r >>> 1;

        case "base64":
          return H(t).length;

        default:
          if (n) return N(t).length;
          e = ("" + e).toLowerCase(), n = !0;
      }
    }

    function _(t, e, r) {
      var n = t[e];
      t[e] = t[r], t[r] = n;
    }

    function v(t, e, r, n, i) {
      if (0 === t.length) return -1;

      if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
        if (i) return -1;
        r = t.length - 1;
      } else if (r < 0) {
        if (!i) return -1;
        r = 0;
      }

      if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, r, n, i);
      if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : y(t, [e], r, n, i);
      throw new TypeError("val must be string, number or Buffer");
    }

    function y(t, e, r, n, i) {
      var o,
          s = 1,
          a = t.length,
          u = e.length;

      if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
        if (t.length < 2 || e.length < 2) return -1;
        s = 2, a /= 2, u /= 2, r /= 2;
      }

      function c(t, e) {
        return 1 === s ? t[e] : t.readUInt16BE(e * s);
      }

      if (i) {
        var l = -1;

        for (o = r; o < a; o++) if (c(t, o) === c(e, -1 === l ? 0 : o - l)) {
          if (-1 === l && (l = o), o - l + 1 === u) return l * s;
        } else -1 !== l && (o -= o - l), l = -1;
      } else for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
        for (var f = !0, h = 0; h < u; h++) if (c(t, o + h) !== c(e, h)) {
          f = !1;
          break;
        }

        if (f) return o;
      }

      return -1;
    }

    function m(t, e, r, n) {
      r = Number(r) || 0;
      var i = t.length - r;
      n ? (n = Number(n)) > i && (n = i) : n = i;
      var o = e.length;
      if (o % 2 != 0) throw new TypeError("Invalid hex string");
      n > o / 2 && (n = o / 2);

      for (var s = 0; s < n; ++s) {
        var a = parseInt(e.substr(2 * s, 2), 16);
        if (isNaN(a)) return s;
        t[r + s] = a;
      }

      return s;
    }

    function g(t, e, r, n) {
      return V(N(e, t.length - r), t, r, n);
    }

    function b(t, e, r, n) {
      return V(function (t) {
        for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));

        return e;
      }(e), t, r, n);
    }

    function w(t, e, r, n) {
      return b(t, e, r, n);
    }

    function E(t, e, r, n) {
      return V(H(e), t, r, n);
    }

    function C(t, e, r, n) {
      return V(function (t, e) {
        for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = (r = t.charCodeAt(s)) >> 8, i = r % 256, o.push(i), o.push(n);

        return o;
      }(e, t.length - r), t, r, n);
    }

    function x(t, e, r) {
      return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
    }

    function j(t, e, r) {
      r = Math.min(t.length, r);

      for (var n = [], i = e; i < r;) {
        var o,
            s,
            a,
            u,
            c = t[i],
            l = null,
            f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
        if (i + f <= r) switch (f) {
          case 1:
            c < 128 && (l = c);
            break;

          case 2:
            128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
            break;

          case 3:
            o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
            break;

          case 4:
            o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u);
        }
        null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), n.push(l), i += f;
      }

      return function (t) {
        var e = t.length;
        if (e <= S) return String.fromCharCode.apply(String, t);

        for (var r = "", n = 0; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += S));

        return r;
      }(n);
    }

    e.Buffer = u, e.SlowBuffer = function (t) {
      return +t != t && (t = 0), u.alloc(+t);
    }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
      try {
        var t = new Uint8Array(1);
        return t.__proto__ = {
          __proto__: Uint8Array.prototype,
          foo: function () {
            return 42;
          }
        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength;
      } catch (t) {
        return !1;
      }
    }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function (t) {
      return t.__proto__ = u.prototype, t;
    }, u.from = function (t, e, r) {
      return c(null, t, e, r);
    }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
      value: null,
      configurable: !0
    })), u.alloc = function (t, e, r) {
      return function (t, e, r, n) {
        return l(e), e <= 0 ? a(t, e) : void 0 !== r ? "string" == typeof n ? a(t, e).fill(r, n) : a(t, e).fill(r) : a(t, e);
      }(null, t, e, r);
    }, u.allocUnsafe = function (t) {
      return f(null, t);
    }, u.allocUnsafeSlow = function (t) {
      return f(null, t);
    }, u.isBuffer = function (t) {
      return !(null == t || !t._isBuffer);
    }, u.compare = function (t, e) {
      if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
      if (t === e) return 0;

      for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i) if (t[i] !== e[i]) {
        r = t[i], n = e[i];
        break;
      }

      return r < n ? -1 : n < r ? 1 : 0;
    }, u.isEncoding = function (t) {
      switch (String(t).toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "latin1":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return !0;

        default:
          return !1;
      }
    }, u.concat = function (t, e) {
      if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
      if (0 === t.length) return u.alloc(0);
      var r;
      if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
      var n = u.allocUnsafe(e),
          i = 0;

      for (r = 0; r < t.length; ++r) {
        var s = t[r];
        if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
        s.copy(n, i), i += s.length;
      }

      return n;
    }, u.byteLength = d, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
      var t = this.length;
      if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");

      for (var e = 0; e < t; e += 2) _(this, e, e + 1);

      return this;
    }, u.prototype.swap32 = function () {
      var t = this.length;
      if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");

      for (var e = 0; e < t; e += 4) _(this, e, e + 3), _(this, e + 1, e + 2);

      return this;
    }, u.prototype.swap64 = function () {
      var t = this.length;
      if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");

      for (var e = 0; e < t; e += 8) _(this, e, e + 7), _(this, e + 1, e + 6), _(this, e + 2, e + 5), _(this, e + 3, e + 4);

      return this;
    }, u.prototype.toString = function () {
      var t = 0 | this.length;
      return 0 === t ? "" : 0 === arguments.length ? j(this, 0, t) : function (t, e, r) {
        var n = !1;
        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
        if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
        if ((r >>>= 0) <= (e >>>= 0)) return "";

        for (t || (t = "utf8");;) switch (t) {
          case "hex":
            return T(this, e, r);

          case "utf8":
          case "utf-8":
            return j(this, e, r);

          case "ascii":
            return R(this, e, r);

          case "latin1":
          case "binary":
            return k(this, e, r);

          case "base64":
            return x(this, e, r);

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return P(this, e, r);

          default:
            if (n) throw new TypeError("Unknown encoding: " + t);
            t = (t + "").toLowerCase(), n = !0;
        }
      }.apply(this, arguments);
    }, u.prototype.equals = function (t) {
      if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      return this === t || 0 === u.compare(this, t);
    }, u.prototype.inspect = function () {
      var t = "",
          r = e.INSPECT_MAX_BYTES;
      return this.length > 0 && (t = this.toString("hex", 0, r).match(/.{2}/g).join(" "), this.length > r && (t += " ... ")), "<Buffer " + t + ">";
    }, u.prototype.compare = function (t, e, r, n, i) {
      if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
      if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
      if (n >= i && e >= r) return 0;
      if (n >= i) return -1;
      if (e >= r) return 1;
      if (e >>>= 0, r >>>= 0, n >>>= 0, i >>>= 0, this === t) return 0;

      for (var o = i - n, s = r - e, a = Math.min(o, s), c = this.slice(n, i), l = t.slice(e, r), f = 0; f < a; ++f) if (c[f] !== l[f]) {
        o = c[f], s = l[f];
        break;
      }

      return o < s ? -1 : s < o ? 1 : 0;
    }, u.prototype.includes = function (t, e, r) {
      return -1 !== this.indexOf(t, e, r);
    }, u.prototype.indexOf = function (t, e, r) {
      return v(this, t, e, r, !0);
    }, u.prototype.lastIndexOf = function (t, e, r) {
      return v(this, t, e, r, !1);
    }, u.prototype.write = function (t, e, r, n) {
      if (void 0 === e) n = "utf8", r = this.length, e = 0;else if (void 0 === r && "string" == typeof e) n = e, r = this.length, e = 0;else {
        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
        e |= 0, isFinite(r) ? (r |= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
      }
      var i = this.length - e;
      if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
      n || (n = "utf8");

      for (var o = !1;;) switch (n) {
        case "hex":
          return m(this, t, e, r);

        case "utf8":
        case "utf-8":
          return g(this, t, e, r);

        case "ascii":
          return b(this, t, e, r);

        case "latin1":
        case "binary":
          return w(this, t, e, r);

        case "base64":
          return E(this, t, e, r);

        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return C(this, t, e, r);

        default:
          if (o) throw new TypeError("Unknown encoding: " + n);
          n = ("" + n).toLowerCase(), o = !0;
      }
    }, u.prototype.toJSON = function () {
      return {
        type: "Buffer",
        data: Array.prototype.slice.call(this._arr || this, 0)
      };
    };
    var S = 4096;

    function R(t, e, r) {
      var n = "";
      r = Math.min(t.length, r);

      for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);

      return n;
    }

    function k(t, e, r) {
      var n = "";
      r = Math.min(t.length, r);

      for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);

      return n;
    }

    function T(t, e, r) {
      var n = t.length;
      (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);

      for (var i = "", o = e; o < r; ++o) i += U(t[o]);

      return i;
    }

    function P(t, e, r) {
      for (var n = t.slice(e, r), i = "", o = 0; o < n.length; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);

      return i;
    }

    function O(t, e, r) {
      if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
      if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
    }

    function A(t, e, r, n, i, o) {
      if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
      if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
      if (r + n > t.length) throw new RangeError("Index out of range");
    }

    function F(t, e, r, n) {
      e < 0 && (e = 65535 + e + 1);

      for (var i = 0, o = Math.min(t.length - r, 2); i < o; ++i) t[r + i] = (e & 255 << 8 * (n ? i : 1 - i)) >>> 8 * (n ? i : 1 - i);
    }

    function L(t, e, r, n) {
      e < 0 && (e = 4294967295 + e + 1);

      for (var i = 0, o = Math.min(t.length - r, 4); i < o; ++i) t[r + i] = e >>> 8 * (n ? i : 3 - i) & 255;
    }

    function M(t, e, r, n, i, o) {
      if (r + n > t.length) throw new RangeError("Index out of range");
      if (r < 0) throw new RangeError("Index out of range");
    }

    function B(t, e, r, n, o) {
      return o || M(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
    }

    function D(t, e, r, n, o) {
      return o || M(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
    }

    u.prototype.slice = function (t, e) {
      var r,
          n = this.length;
      if (t = ~~t, e = void 0 === e ? n : ~~e, t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), e < t && (e = t), u.TYPED_ARRAY_SUPPORT) (r = this.subarray(t, e)).__proto__ = u.prototype;else {
        var i = e - t;
        r = new u(i, void 0);

        for (var o = 0; o < i; ++o) r[o] = this[o + t];
      }
      return r;
    }, u.prototype.readUIntLE = function (t, e, r) {
      t |= 0, e |= 0, r || O(t, e, this.length);

      for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;

      return n;
    }, u.prototype.readUIntBE = function (t, e, r) {
      t |= 0, e |= 0, r || O(t, e, this.length);

      for (var n = this[t + --e], i = 1; e > 0 && (i *= 256);) n += this[t + --e] * i;

      return n;
    }, u.prototype.readUInt8 = function (t, e) {
      return e || O(t, 1, this.length), this[t];
    }, u.prototype.readUInt16LE = function (t, e) {
      return e || O(t, 2, this.length), this[t] | this[t + 1] << 8;
    }, u.prototype.readUInt16BE = function (t, e) {
      return e || O(t, 2, this.length), this[t] << 8 | this[t + 1];
    }, u.prototype.readUInt32LE = function (t, e) {
      return e || O(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
    }, u.prototype.readUInt32BE = function (t, e) {
      return e || O(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
    }, u.prototype.readIntLE = function (t, e, r) {
      t |= 0, e |= 0, r || O(t, e, this.length);

      for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256);) n += this[t + o] * i;

      return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
    }, u.prototype.readIntBE = function (t, e, r) {
      t |= 0, e |= 0, r || O(t, e, this.length);

      for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256);) o += this[t + --n] * i;

      return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
    }, u.prototype.readInt8 = function (t, e) {
      return e || O(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
    }, u.prototype.readInt16LE = function (t, e) {
      e || O(t, 2, this.length);
      var r = this[t] | this[t + 1] << 8;
      return 32768 & r ? 4294901760 | r : r;
    }, u.prototype.readInt16BE = function (t, e) {
      e || O(t, 2, this.length);
      var r = this[t + 1] | this[t] << 8;
      return 32768 & r ? 4294901760 | r : r;
    }, u.prototype.readInt32LE = function (t, e) {
      return e || O(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
    }, u.prototype.readInt32BE = function (t, e) {
      return e || O(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
    }, u.prototype.readFloatLE = function (t, e) {
      return e || O(t, 4, this.length), i.read(this, t, !0, 23, 4);
    }, u.prototype.readFloatBE = function (t, e) {
      return e || O(t, 4, this.length), i.read(this, t, !1, 23, 4);
    }, u.prototype.readDoubleLE = function (t, e) {
      return e || O(t, 8, this.length), i.read(this, t, !0, 52, 8);
    }, u.prototype.readDoubleBE = function (t, e) {
      return e || O(t, 8, this.length), i.read(this, t, !1, 52, 8);
    }, u.prototype.writeUIntLE = function (t, e, r, n) {
      t = +t, e |= 0, r |= 0, n || A(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      var i = 1,
          o = 0;

      for (this[e] = 255 & t; ++o < r && (i *= 256);) this[e + o] = t / i & 255;

      return e + r;
    }, u.prototype.writeUIntBE = function (t, e, r, n) {
      t = +t, e |= 0, r |= 0, n || A(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
      var i = r - 1,
          o = 1;

      for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;

      return e + r;
    }, u.prototype.writeUInt8 = function (t, e, r) {
      return t = +t, e |= 0, r || A(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1;
    }, u.prototype.writeUInt16LE = function (t, e, r) {
      return t = +t, e |= 0, r || A(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : F(this, t, e, !0), e + 2;
    }, u.prototype.writeUInt16BE = function (t, e, r) {
      return t = +t, e |= 0, r || A(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : F(this, t, e, !1), e + 2;
    }, u.prototype.writeUInt32LE = function (t, e, r) {
      return t = +t, e |= 0, r || A(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : L(this, t, e, !0), e + 4;
    }, u.prototype.writeUInt32BE = function (t, e, r) {
      return t = +t, e |= 0, r || A(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;
    }, u.prototype.writeIntLE = function (t, e, r, n) {
      if (t = +t, e |= 0, !n) {
        var i = Math.pow(2, 8 * r - 1);
        A(this, t, e, r, i - 1, -i);
      }

      var o = 0,
          s = 1,
          a = 0;

      for (this[e] = 255 & t; ++o < r && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;

      return e + r;
    }, u.prototype.writeIntBE = function (t, e, r, n) {
      if (t = +t, e |= 0, !n) {
        var i = Math.pow(2, 8 * r - 1);
        A(this, t, e, r, i - 1, -i);
      }

      var o = r - 1,
          s = 1,
          a = 0;

      for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;

      return e + r;
    }, u.prototype.writeInt8 = function (t, e, r) {
      return t = +t, e |= 0, r || A(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1;
    }, u.prototype.writeInt16LE = function (t, e, r) {
      return t = +t, e |= 0, r || A(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : F(this, t, e, !0), e + 2;
    }, u.prototype.writeInt16BE = function (t, e, r) {
      return t = +t, e |= 0, r || A(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : F(this, t, e, !1), e + 2;
    }, u.prototype.writeInt32LE = function (t, e, r) {
      return t = +t, e |= 0, r || A(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : L(this, t, e, !0), e + 4;
    }, u.prototype.writeInt32BE = function (t, e, r) {
      return t = +t, e |= 0, r || A(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : L(this, t, e, !1), e + 4;
    }, u.prototype.writeFloatLE = function (t, e, r) {
      return B(this, t, e, !0, r);
    }, u.prototype.writeFloatBE = function (t, e, r) {
      return B(this, t, e, !1, r);
    }, u.prototype.writeDoubleLE = function (t, e, r) {
      return D(this, t, e, !0, r);
    }, u.prototype.writeDoubleBE = function (t, e, r) {
      return D(this, t, e, !1, r);
    }, u.prototype.copy = function (t, e, r, n) {
      if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
      if (0 === t.length || 0 === this.length) return 0;
      if (e < 0) throw new RangeError("targetStart out of bounds");
      if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
      if (n < 0) throw new RangeError("sourceEnd out of bounds");
      n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
      var i,
          o = n - r;
      if (this === t && r < e && e < n) for (i = o - 1; i >= 0; --i) t[i + e] = this[i + r];else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT) for (i = 0; i < o; ++i) t[i + e] = this[i + r];else Uint8Array.prototype.set.call(t, this.subarray(r, r + o), e);
      return o;
    }, u.prototype.fill = function (t, e, r, n) {
      if ("string" == typeof t) {
        if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, r = this.length), 1 === t.length) {
          var i = t.charCodeAt(0);
          i < 256 && (t = i);
        }

        if (void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
        if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
      } else "number" == typeof t && (t &= 255);

      if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
      if (r <= e) return this;
      var o;
      if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < r; ++o) this[o] = t;else {
        var s = u.isBuffer(t) ? t : N(new u(t, n).toString()),
            a = s.length;

        for (o = 0; o < r - e; ++o) this[o + e] = s[o % a];
      }
      return this;
    };
    var I = /[^+\/0-9A-Za-z-_]/g;

    function U(t) {
      return t < 16 ? "0" + t.toString(16) : t.toString(16);
    }

    function N(t, e) {
      var r;
      e = e || 1 / 0;

      for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
        if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
          if (!i) {
            if (r > 56319) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }

            if (s + 1 === n) {
              (e -= 3) > -1 && o.push(239, 191, 189);
              continue;
            }

            i = r;
            continue;
          }

          if (r < 56320) {
            (e -= 3) > -1 && o.push(239, 191, 189), i = r;
            continue;
          }

          r = 65536 + (i - 55296 << 10 | r - 56320);
        } else i && (e -= 3) > -1 && o.push(239, 191, 189);

        if (i = null, r < 128) {
          if ((e -= 1) < 0) break;
          o.push(r);
        } else if (r < 2048) {
          if ((e -= 2) < 0) break;
          o.push(r >> 6 | 192, 63 & r | 128);
        } else if (r < 65536) {
          if ((e -= 3) < 0) break;
          o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
        } else {
          if (!(r < 1114112)) throw new Error("Invalid code point");
          if ((e -= 4) < 0) break;
          o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
        }
      }

      return o;
    }

    function H(t) {
      return n.toByteArray(function (t) {
        if ((t = function (t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        }(t).replace(I, "")).length < 2) return "";

        for (; t.length % 4 != 0;) t += "=";

        return t;
      }(t));
    }

    function V(t, e, r, n) {
      for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];

      return i;
    }
  }).call(this, r(0));
}, function (t, e) {
  var r,
      n,
      i = t.exports = {};

  function o() {
    throw new Error("setTimeout has not been defined");
  }

  function s() {
    throw new Error("clearTimeout has not been defined");
  }

  function a(t) {
    if (r === setTimeout) return setTimeout(t, 0);
    if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0);

    try {
      return r(t, 0);
    } catch (e) {
      try {
        return r.call(null, t, 0);
      } catch (e) {
        return r.call(this, t, 0);
      }
    }
  }

  !function () {
    try {
      r = "function" == typeof setTimeout ? setTimeout : o;
    } catch (t) {
      r = o;
    }

    try {
      n = "function" == typeof clearTimeout ? clearTimeout : s;
    } catch (t) {
      n = s;
    }
  }();
  var u,
      c = [],
      l = !1,
      f = -1;

  function h() {
    l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p());
  }

  function p() {
    if (!l) {
      var t = a(h);
      l = !0;

      for (var e = c.length; e;) {
        for (u = c, c = []; ++f < e;) u && u[f].run();

        f = -1, e = c.length;
      }

      u = null, l = !1, function (t) {
        if (n === clearTimeout) return clearTimeout(t);
        if ((n === s || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);

        try {
          n(t);
        } catch (e) {
          try {
            return n.call(null, t);
          } catch (e) {
            return n.call(this, t);
          }
        }
      }(t);
    }
  }

  function d(t, e) {
    this.fun = t, this.array = e;
  }

  function _() {}

  i.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
    c.push(new d(t, e)), 1 !== c.length || l || a(p);
  }, d.prototype.run = function () {
    this.fun.apply(null, this.array);
  }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = _, i.addListener = _, i.once = _, i.off = _, i.removeListener = _, i.removeAllListeners = _, i.emit = _, i.prependListener = _, i.prependOnceListener = _, i.listeners = function (t) {
    return [];
  }, i.binding = function (t) {
    throw new Error("process.binding is not supported");
  }, i.cwd = function () {
    return "/";
  }, i.chdir = function (t) {
    throw new Error("process.chdir is not supported");
  }, i.umask = function () {
    return 0;
  };
}, function (t, e, r) {
  (function (t) {
    function r(t) {
      return Object.prototype.toString.call(t);
    }

    e.isArray = function (t) {
      return Array.isArray ? Array.isArray(t) : "[object Array]" === r(t);
    }, e.isBoolean = function (t) {
      return "boolean" == typeof t;
    }, e.isNull = function (t) {
      return null === t;
    }, e.isNullOrUndefined = function (t) {
      return null == t;
    }, e.isNumber = function (t) {
      return "number" == typeof t;
    }, e.isString = function (t) {
      return "string" == typeof t;
    }, e.isSymbol = function (t) {
      return "symbol" == _typeof(t);
    }, e.isUndefined = function (t) {
      return void 0 === t;
    }, e.isRegExp = function (t) {
      return "[object RegExp]" === r(t);
    }, e.isObject = function (t) {
      return "object" == _typeof(t) && null !== t;
    }, e.isDate = function (t) {
      return "[object Date]" === r(t);
    }, e.isError = function (t) {
      return "[object Error]" === r(t) || t instanceof Error;
    }, e.isFunction = function (t) {
      return "function" == typeof t;
    }, e.isPrimitive = function (t) {
      return null === t || "boolean" == typeof t || "number" == typeof t || "string" == typeof t || "symbol" == _typeof(t) || void 0 === t;
    }, e.isBuffer = t.isBuffer;
  }).call(this, r(3).Buffer);
}, function (t, e, r) {
  "use strict";

  (function (e) {
    !e.version || 0 === e.version.indexOf("v0.") || 0 === e.version.indexOf("v1.") && 0 !== e.version.indexOf("v1.8.") ? t.exports = {
      nextTick: function (t, r, n, i) {
        if ("function" != typeof t) throw new TypeError('"callback" argument must be a function');
        var o,
            s,
            a = arguments.length;

        switch (a) {
          case 0:
          case 1:
            return e.nextTick(t);

          case 2:
            return e.nextTick(function () {
              t.call(null, r);
            });

          case 3:
            return e.nextTick(function () {
              t.call(null, r, n);
            });

          case 4:
            return e.nextTick(function () {
              t.call(null, r, n, i);
            });

          default:
            for (o = new Array(a - 1), s = 0; s < o.length;) o[s++] = arguments[s];

            return e.nextTick(function () {
              t.apply(null, o);
            });
        }
      }
    } : t.exports = e;
  }).call(this, r(4));
}, function (t, e, r) {
  var n = r(3),
      i = n.Buffer;

  function o(t, e) {
    for (var r in t) e[r] = t[r];
  }

  function s(t, e, r) {
    return i(t, e, r);
  }

  i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), e.Buffer = s), o(i, s), s.from = function (t, e, r) {
    if ("number" == typeof t) throw new TypeError("Argument must not be a number");
    return i(t, e, r);
  }, s.alloc = function (t, e, r) {
    if ("number" != typeof t) throw new TypeError("Argument must be a number");
    var n = i(t);
    return void 0 !== e ? "string" == typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), n;
  }, s.allocUnsafe = function (t) {
    if ("number" != typeof t) throw new TypeError("Argument must be a number");
    return i(t);
  }, s.allocUnsafeSlow = function (t) {
    if ("number" != typeof t) throw new TypeError("Argument must be a number");
    return n.SlowBuffer(t);
  };
}, function (t, e, r) {
  var n = r(17)(Object, "create");
  t.exports = n;
}, function (t, e, r) {
  var n = r(31);

  t.exports = function (t, e) {
    for (var r = t.length; r--;) if (n(t[r][0], e)) return r;

    return -1;
  };
}, function (t, e, r) {
  var n = r(96);

  t.exports = function (t, e) {
    var r = t.__data__;
    return n(e) ? r["string" == typeof e ? "string" : "hash"] : r.map;
  };
}, function (t, e, r) {
  (function (t) {
    var n = void 0 !== t && t || "undefined" != typeof self && self || window,
        i = Function.prototype.apply;

    function o(t, e) {
      this._id = t, this._clearFn = e;
    }

    e.setTimeout = function () {
      return new o(i.call(setTimeout, n, arguments), clearTimeout);
    }, e.setInterval = function () {
      return new o(i.call(setInterval, n, arguments), clearInterval);
    }, e.clearTimeout = e.clearInterval = function (t) {
      t && t.close();
    }, o.prototype.unref = o.prototype.ref = function () {}, o.prototype.close = function () {
      this._clearFn.call(n, this._id);
    }, e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e;
    }, e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1;
    }, e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);
      var e = t._idleTimeout;
      e >= 0 && (t._idleTimeoutId = setTimeout(function () {
        t._onTimeout && t._onTimeout();
      }, e));
    }, r(35), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate;
  }).call(this, r(0));
}, function (t, e) {
  function r() {
    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0;
  }

  function n(t) {
    return "function" == typeof t;
  }

  function i(t) {
    return "object" == _typeof(t) && null !== t;
  }

  function o(t) {
    return void 0 === t;
  }

  t.exports = r, r.EventEmitter = r, r.prototype._events = void 0, r.prototype._maxListeners = void 0, r.defaultMaxListeners = 10, r.prototype.setMaxListeners = function (t) {
    if (!function (t) {
      return "number" == typeof t;
    }(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
    return this._maxListeners = t, this;
  }, r.prototype.emit = function (t) {
    var e, r, s, a, u, c;

    if (this._events || (this._events = {}), "error" === t && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
      if ((e = arguments[1]) instanceof Error) throw e;
      var l = new Error('Uncaught, unspecified "error" event. (' + e + ")");
      throw l.context = e, l;
    }

    if (o(r = this._events[t])) return !1;
    if (n(r)) switch (arguments.length) {
      case 1:
        r.call(this);
        break;

      case 2:
        r.call(this, arguments[1]);
        break;

      case 3:
        r.call(this, arguments[1], arguments[2]);
        break;

      default:
        a = Array.prototype.slice.call(arguments, 1), r.apply(this, a);
    } else if (i(r)) for (a = Array.prototype.slice.call(arguments, 1), s = (c = r.slice()).length, u = 0; u < s; u++) c[u].apply(this, a);
    return !0;
  }, r.prototype.addListener = function (t, e) {
    var s;
    if (!n(e)) throw TypeError("listener must be a function");
    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, n(e.listener) ? e.listener : e), this._events[t] ? i(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, i(this._events[t]) && !this._events[t].warned && (s = o(this._maxListeners) ? r.defaultMaxListeners : this._maxListeners) && s > 0 && this._events[t].length > s && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this;
  }, r.prototype.on = r.prototype.addListener, r.prototype.once = function (t, e) {
    if (!n(e)) throw TypeError("listener must be a function");
    var r = !1;

    function i() {
      this.removeListener(t, i), r || (r = !0, e.apply(this, arguments));
    }

    return i.listener = e, this.on(t, i), this;
  }, r.prototype.removeListener = function (t, e) {
    var r, o, s, a;
    if (!n(e)) throw TypeError("listener must be a function");
    if (!this._events || !this._events[t]) return this;
    if (s = (r = this._events[t]).length, o = -1, r === e || n(r.listener) && r.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);else if (i(r)) {
      for (a = s; a-- > 0;) if (r[a] === e || r[a].listener && r[a].listener === e) {
        o = a;
        break;
      }

      if (o < 0) return this;
      1 === r.length ? (r.length = 0, delete this._events[t]) : r.splice(o, 1), this._events.removeListener && this.emit("removeListener", t, e);
    }
    return this;
  }, r.prototype.removeAllListeners = function (t) {
    var e, r;
    if (!this._events) return this;
    if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;

    if (0 === arguments.length) {
      for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);

      return this.removeAllListeners("removeListener"), this._events = {}, this;
    }

    if (n(r = this._events[t])) this.removeListener(t, r);else if (r) for (; r.length;) this.removeListener(t, r[r.length - 1]);
    return delete this._events[t], this;
  }, r.prototype.listeners = function (t) {
    return this._events && this._events[t] ? n(this._events[t]) ? [this._events[t]] : this._events[t].slice() : [];
  }, r.prototype.listenerCount = function (t) {
    if (this._events) {
      var e = this._events[t];
      if (n(e)) return 1;
      if (e) return e.length;
    }

    return 0;
  }, r.listenerCount = function (t, e) {
    return t.listenerCount(e);
  };
}, function (t, e, r) {
  (e = t.exports = r(23)).Stream = e, e.Readable = e, e.Writable = r(14), e.Duplex = r(1), e.Transform = r(27), e.PassThrough = r(45);
}, function (t, e, r) {
  "use strict";

  (function (e, n, i) {
    var o = r(6);

    function s(t) {
      var e = this;
      this.next = null, this.entry = null, this.finish = function () {
        !function (t, e, r) {
          var n = t.entry;

          for (t.entry = null; n;) {
            var i = n.callback;
            e.pendingcb--, i(void 0), n = n.next;
          }

          e.corkedRequestsFree ? e.corkedRequestsFree.next = t : e.corkedRequestsFree = t;
        }(e, t);
      };
    }

    t.exports = m;
    var a,
        u = !e.browser && ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) > -1 ? n : o.nextTick;
    m.WritableState = y;
    var c = r(5);
    c.inherits = r(2);

    var l,
        f = {
      deprecate: r(44)
    },
        h = r(24),
        p = r(7).Buffer,
        d = i.Uint8Array || function () {},
        _ = r(25);

    function v() {}

    function y(t, e) {
      a = a || r(1), t = t || {};
      var n = e instanceof a;
      this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.writableObjectMode);
      var i = t.highWaterMark,
          c = t.writableHighWaterMark,
          l = this.objectMode ? 16 : 16384;
      this.highWaterMark = i || 0 === i ? i : n && (c || 0 === c) ? c : l, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
      var f = !1 === t.decodeStrings;
      this.decodeStrings = !f, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function (t) {
        !function (t, e) {
          var r = t._writableState,
              n = r.sync,
              i = r.writecb;
          if (function (t) {
            t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
          }(r), e) !function (t, e, r, n, i) {
            --e.pendingcb, r ? (o.nextTick(i, n), o.nextTick(x, t, e), t._writableState.errorEmitted = !0, t.emit("error", n)) : (i(n), t._writableState.errorEmitted = !0, t.emit("error", n), x(t, e));
          }(t, r, n, e, i);else {
            var s = E(r);
            s || r.corked || r.bufferProcessing || !r.bufferedRequest || w(t, r), n ? u(b, t, r, s, i) : b(t, r, s, i);
          }
        }(e, t);
      }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new s(this);
    }

    function m(t) {
      if (a = a || r(1), !(l.call(m, this) || this instanceof a)) return new m(t);
      this._writableState = new y(t, this), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), "function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), "function" == typeof t.final && (this._final = t.final)), h.call(this);
    }

    function g(t, e, r, n, i, o, s) {
      e.writelen = n, e.writecb = s, e.writing = !0, e.sync = !0, r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), e.sync = !1;
    }

    function b(t, e, r, n) {
      r || function (t, e) {
        0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"));
      }(t, e), e.pendingcb--, n(), x(t, e);
    }

    function w(t, e) {
      e.bufferProcessing = !0;
      var r = e.bufferedRequest;

      if (t._writev && r && r.next) {
        var n = e.bufferedRequestCount,
            i = new Array(n),
            o = e.corkedRequestsFree;
        o.entry = r;

        for (var a = 0, u = !0; r;) i[a] = r, r.isBuf || (u = !1), r = r.next, a += 1;

        i.allBuffers = u, g(t, e, !0, e.length, i, "", o.finish), e.pendingcb++, e.lastBufferedRequest = null, o.next ? (e.corkedRequestsFree = o.next, o.next = null) : e.corkedRequestsFree = new s(e), e.bufferedRequestCount = 0;
      } else {
        for (; r;) {
          var c = r.chunk,
              l = r.encoding,
              f = r.callback;
          if (g(t, e, !1, e.objectMode ? 1 : c.length, c, l, f), r = r.next, e.bufferedRequestCount--, e.writing) break;
        }

        null === r && (e.lastBufferedRequest = null);
      }

      e.bufferedRequest = r, e.bufferProcessing = !1;
    }

    function E(t) {
      return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing;
    }

    function C(t, e) {
      t._final(function (r) {
        e.pendingcb--, r && t.emit("error", r), e.prefinished = !0, t.emit("prefinish"), x(t, e);
      });
    }

    function x(t, e) {
      var r = E(e);
      return r && (function (t, e) {
        e.prefinished || e.finalCalled || ("function" == typeof t._final ? (e.pendingcb++, e.finalCalled = !0, o.nextTick(C, t, e)) : (e.prefinished = !0, t.emit("prefinish")));
      }(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"))), r;
    }

    c.inherits(m, h), y.prototype.getBuffer = function () {
      for (var t = this.bufferedRequest, e = []; t;) e.push(t), t = t.next;

      return e;
    }, function () {
      try {
        Object.defineProperty(y.prototype, "buffer", {
          get: f.deprecate(function () {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (t) {}
    }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (l = Function.prototype[Symbol.hasInstance], Object.defineProperty(m, Symbol.hasInstance, {
      value: function (t) {
        return !!l.call(this, t) || this === m && t && t._writableState instanceof y;
      }
    })) : l = function (t) {
      return t instanceof this;
    }, m.prototype.pipe = function () {
      this.emit("error", new Error("Cannot pipe, not readable"));
    }, m.prototype.write = function (t, e, r) {
      var n = this._writableState,
          i = !1,
          s = !n.objectMode && function (t) {
        return p.isBuffer(t) || t instanceof d;
      }(t);

      return s && !p.isBuffer(t) && (t = function (t) {
        return p.from(t);
      }(t)), "function" == typeof e && (r = e, e = null), s ? e = "buffer" : e || (e = n.defaultEncoding), "function" != typeof r && (r = v), n.ended ? function (t, e) {
        var r = new Error("write after end");
        t.emit("error", r), o.nextTick(e, r);
      }(this, r) : (s || function (t, e, r, n) {
        var i = !0,
            s = !1;
        return null === r ? s = new TypeError("May not write null values to stream") : "string" == typeof r || void 0 === r || e.objectMode || (s = new TypeError("Invalid non-string/buffer chunk")), s && (t.emit("error", s), o.nextTick(n, s), i = !1), i;
      }(this, n, t, r)) && (n.pendingcb++, i = function (t, e, r, n, i, o) {
        if (!r) {
          var s = function (t, e, r) {
            return t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = p.from(e, r)), e;
          }(e, n, i);

          n !== s && (r = !0, i = "buffer", n = s);
        }

        var a = e.objectMode ? 1 : n.length;
        e.length += a;
        var u = e.length < e.highWaterMark;

        if (u || (e.needDrain = !0), e.writing || e.corked) {
          var c = e.lastBufferedRequest;
          e.lastBufferedRequest = {
            chunk: n,
            encoding: i,
            isBuf: r,
            callback: o,
            next: null
          }, c ? c.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, e.bufferedRequestCount += 1;
        } else g(t, e, !1, a, n, i, o);

        return u;
      }(this, n, s, t, e, r)), i;
    }, m.prototype.cork = function () {
      this._writableState.corked++;
    }, m.prototype.uncork = function () {
      var t = this._writableState;
      t.corked && (t.corked--, t.writing || t.corked || t.finished || t.bufferProcessing || !t.bufferedRequest || w(this, t));
    }, m.prototype.setDefaultEncoding = function (t) {
      if ("string" == typeof t && (t = t.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((t + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + t);
      return this._writableState.defaultEncoding = t, this;
    }, Object.defineProperty(m.prototype, "writableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._writableState.highWaterMark;
      }
    }), m.prototype._write = function (t, e, r) {
      r(new Error("_write() is not implemented"));
    }, m.prototype._writev = null, m.prototype.end = function (t, e, r) {
      var n = this._writableState;
      "function" == typeof t ? (r = t, t = null, e = null) : "function" == typeof e && (r = e, e = null), null !== t && void 0 !== t && this.write(t, e), n.corked && (n.corked = 1, this.uncork()), n.ending || n.finished || function (t, e, r) {
        e.ending = !0, x(t, e), r && (e.finished ? o.nextTick(r) : t.once("finish", r)), e.ended = !0, t.writable = !1;
      }(this, n, r);
    }, Object.defineProperty(m.prototype, "destroyed", {
      get: function () {
        return void 0 !== this._writableState && this._writableState.destroyed;
      },
      set: function (t) {
        this._writableState && (this._writableState.destroyed = t);
      }
    }), m.prototype.destroy = _.destroy, m.prototype._undestroy = _.undestroy, m.prototype._destroy = function (t, e) {
      this.end(), e(t);
    };
  }).call(this, r(4), r(11).setImmediate, r(0));
}, function (t, e, r) {
  (function (e, r, n) {
    t.exports = function t(e, r, n) {
      function i(s, a) {
        if (!r[s]) {
          if (!e[s]) {
            var u = "function" == typeof _dereq_ && _dereq_;
            if (!a && u) return u(s, !0);
            if (o) return o(s, !0);
            var c = new Error("Cannot find module '" + s + "'");
            throw c.code = "MODULE_NOT_FOUND", c;
          }

          var l = r[s] = {
            exports: {}
          };
          e[s][0].call(l.exports, function (t) {
            return i(e[s][1][t] || t);
          }, l, l.exports, t, e, r, n);
        }

        return r[s].exports;
      }

      for (var o = "function" == typeof _dereq_ && _dereq_, s = 0; s < n.length; s++) i(n[s]);

      return i;
    }({
      1: [function (t, e, r) {
        "use strict";

        e.exports = function (t) {
          var e = t._SomePromiseArray;

          function r(t) {
            var r = new e(t),
                n = r.promise();
            return r.setHowMany(1), r.setUnwrap(), r.init(), n;
          }

          t.any = function (t) {
            return r(t);
          }, t.prototype.any = function () {
            return r(this);
          };
        };
      }, {}],
      2: [function (t, r, n) {
        "use strict";

        var i;

        try {
          throw new Error();
        } catch (t) {
          i = t;
        }

        var o = t("./schedule"),
            s = t("./queue"),
            a = t("./util");

        function u() {
          this._customScheduler = !1, this._isTickUsed = !1, this._lateQueue = new s(16), this._normalQueue = new s(16), this._haveDrainedQueues = !1, this._trampolineEnabled = !0;
          var t = this;
          this.drainQueues = function () {
            t._drainQueues();
          }, this._schedule = o;
        }

        function c(t, e, r) {
          this._lateQueue.push(t, e, r), this._queueTick();
        }

        function l(t, e, r) {
          this._normalQueue.push(t, e, r), this._queueTick();
        }

        function f(t) {
          this._normalQueue._pushOne(t), this._queueTick();
        }

        u.prototype.setScheduler = function (t) {
          var e = this._schedule;
          return this._schedule = t, this._customScheduler = !0, e;
        }, u.prototype.hasCustomScheduler = function () {
          return this._customScheduler;
        }, u.prototype.enableTrampoline = function () {
          this._trampolineEnabled = !0;
        }, u.prototype.disableTrampolineIfNecessary = function () {
          a.hasDevTools && (this._trampolineEnabled = !1);
        }, u.prototype.haveItemsQueued = function () {
          return this._isTickUsed || this._haveDrainedQueues;
        }, u.prototype.fatalError = function (t, r) {
          r ? (e.stderr.write("Fatal " + (t instanceof Error ? t.stack : t) + "\n"), e.exit(2)) : this.throwLater(t);
        }, u.prototype.throwLater = function (t, e) {
          if (1 === arguments.length && (e = t, t = function () {
            throw e;
          }), "undefined" != typeof setTimeout) setTimeout(function () {
            t(e);
          }, 0);else try {
            this._schedule(function () {
              t(e);
            });
          } catch (t) {
            throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
          }
        }, a.hasDevTools ? (u.prototype.invokeLater = function (t, e, r) {
          this._trampolineEnabled ? c.call(this, t, e, r) : this._schedule(function () {
            setTimeout(function () {
              t.call(e, r);
            }, 100);
          });
        }, u.prototype.invoke = function (t, e, r) {
          this._trampolineEnabled ? l.call(this, t, e, r) : this._schedule(function () {
            t.call(e, r);
          });
        }, u.prototype.settlePromises = function (t) {
          this._trampolineEnabled ? f.call(this, t) : this._schedule(function () {
            t._settlePromises();
          });
        }) : (u.prototype.invokeLater = c, u.prototype.invoke = l, u.prototype.settlePromises = f), u.prototype._drainQueue = function (t) {
          for (; t.length() > 0;) {
            var e = t.shift();

            if ("function" == typeof e) {
              var r = t.shift(),
                  n = t.shift();
              e.call(r, n);
            } else e._settlePromises();
          }
        }, u.prototype._drainQueues = function () {
          this._drainQueue(this._normalQueue), this._reset(), this._haveDrainedQueues = !0, this._drainQueue(this._lateQueue);
        }, u.prototype._queueTick = function () {
          this._isTickUsed || (this._isTickUsed = !0, this._schedule(this.drainQueues));
        }, u.prototype._reset = function () {
          this._isTickUsed = !1;
        }, r.exports = u, r.exports.firstLineError = i;
      }, {
        "./queue": 26,
        "./schedule": 29,
        "./util": 36
      }],
      3: [function (t, e, r) {
        "use strict";

        e.exports = function (t, e, r, n) {
          var i = !1,
              o = function (t, e) {
            this._reject(e);
          },
              s = function (t, e) {
            e.promiseRejectionQueued = !0, e.bindingPromise._then(o, o, null, this, t);
          },
              a = function (t, e) {
            0 == (50397184 & this._bitField) && this._resolveCallback(e.target);
          },
              u = function (t, e) {
            e.promiseRejectionQueued || this._reject(t);
          };

          t.prototype.bind = function (o) {
            i || (i = !0, t.prototype._propagateFrom = n.propagateFromFunction(), t.prototype._boundValue = n.boundValueFunction());
            var c = r(o),
                l = new t(e);

            l._propagateFrom(this, 1);

            var f = this._target();

            if (l._setBoundTo(c), c instanceof t) {
              var h = {
                promiseRejectionQueued: !1,
                promise: l,
                target: f,
                bindingPromise: c
              };
              f._then(e, s, void 0, l, h), c._then(a, u, void 0, l, h), l._setOnCancel(c);
            } else l._resolveCallback(f);

            return l;
          }, t.prototype._setBoundTo = function (t) {
            void 0 !== t ? (this._bitField = 2097152 | this._bitField, this._boundTo = t) : this._bitField = -2097153 & this._bitField;
          }, t.prototype._isBound = function () {
            return 2097152 == (2097152 & this._bitField);
          }, t.bind = function (e, r) {
            return t.resolve(r).bind(e);
          };
        };
      }, {}],
      4: [function (t, e, r) {
        "use strict";

        var n;
        "undefined" != typeof Promise && (n = Promise);
        var i = t("./promise")();
        i.noConflict = function () {
          try {
            Promise === i && (Promise = n);
          } catch (t) {}

          return i;
        }, e.exports = i;
      }, {
        "./promise": 22
      }],
      5: [function (t, e, r) {
        "use strict";

        var n = Object.create;

        if (n) {
          var i = n(null),
              o = n(null);
          i[" size"] = o[" size"] = 0;
        }

        e.exports = function (e) {
          var r = t("./util"),
              n = r.canEvaluate;

          function i(t) {
            return function (t, n) {
              var i;

              if (null != t && (i = t[n]), "function" != typeof i) {
                var o = "Object " + r.classString(t) + " has no method '" + r.toString(n) + "'";
                throw new e.TypeError(o);
              }

              return i;
            }(t, this.pop()).apply(t, this);
          }

          function o(t) {
            return t[this];
          }

          function s(t) {
            var e = +this;
            return e < 0 && (e = Math.max(0, e + t.length)), t[e];
          }

          r.isIdentifier, e.prototype.call = function (t) {
            var e = [].slice.call(arguments, 1);
            return e.push(t), this._then(i, void 0, void 0, e, void 0);
          }, e.prototype.get = function (t) {
            var e;
            if ("number" == typeof t) e = s;else if (n) {
              var r = (void 0)(t);
              e = null !== r ? r : o;
            } else e = o;
            return this._then(e, void 0, void 0, t, void 0);
          };
        };
      }, {
        "./util": 36
      }],
      6: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n, i) {
          var o = t("./util"),
              s = o.tryCatch,
              a = o.errorObj,
              u = e._async;
          e.prototype.break = e.prototype.cancel = function () {
            if (!i.cancellation()) return this._warn("cancellation is disabled");

            for (var t = this, e = t; t._isCancellable();) {
              if (!t._cancelBy(e)) {
                e._isFollowing() ? e._followee().cancel() : e._cancelBranched();
                break;
              }

              var r = t._cancellationParent;

              if (null == r || !r._isCancellable()) {
                t._isFollowing() ? t._followee().cancel() : t._cancelBranched();
                break;
              }

              t._isFollowing() && t._followee().cancel(), t._setWillBeCancelled(), e = t, t = r;
            }
          }, e.prototype._branchHasCancelled = function () {
            this._branchesRemainingToCancel--;
          }, e.prototype._enoughBranchesHaveCancelled = function () {
            return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0;
          }, e.prototype._cancelBy = function (t) {
            return t === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), !0) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), !0));
          }, e.prototype._cancelBranched = function () {
            this._enoughBranchesHaveCancelled() && this._cancel();
          }, e.prototype._cancel = function () {
            this._isCancellable() && (this._setCancelled(), u.invoke(this._cancelPromises, this, void 0));
          }, e.prototype._cancelPromises = function () {
            this._length() > 0 && this._settlePromises();
          }, e.prototype._unsetOnCancel = function () {
            this._onCancelField = void 0;
          }, e.prototype._isCancellable = function () {
            return this.isPending() && !this._isCancelled();
          }, e.prototype.isCancellable = function () {
            return this.isPending() && !this.isCancelled();
          }, e.prototype._doInvokeOnCancel = function (t, e) {
            if (o.isArray(t)) for (var r = 0; r < t.length; ++r) this._doInvokeOnCancel(t[r], e);else if (void 0 !== t) if ("function" == typeof t) {
              if (!e) {
                var n = s(t).call(this._boundValue());
                n === a && (this._attachExtraTrace(n.e), u.throwLater(n.e));
              }
            } else t._resultCancelled(this);
          }, e.prototype._invokeOnCancel = function () {
            var t = this._onCancel();

            this._unsetOnCancel(), u.invoke(this._doInvokeOnCancel, this, t);
          }, e.prototype._invokeInternalOnCancel = function () {
            this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), !0), this._unsetOnCancel());
          }, e.prototype._resultCancelled = function () {
            this.cancel();
          };
        };
      }, {
        "./util": 36
      }],
      7: [function (t, e, r) {
        "use strict";

        e.exports = function (e) {
          var r = t("./util"),
              n = t("./es5").keys,
              i = r.tryCatch,
              o = r.errorObj;
          return function (t, s, a) {
            return function (u) {
              var c = a._boundValue();

              t: for (var l = 0; l < t.length; ++l) {
                var f = t[l];

                if (f === Error || null != f && f.prototype instanceof Error) {
                  if (u instanceof f) return i(s).call(c, u);
                } else if ("function" == typeof f) {
                  var h = i(f).call(c, u);
                  if (h === o) return h;
                  if (h) return i(s).call(c, u);
                } else if (r.isObject(u)) {
                  for (var p = n(f), d = 0; d < p.length; ++d) {
                    var _ = p[d];
                    if (f[_] != u[_]) continue t;
                  }

                  return i(s).call(c, u);
                }
              }

              return e;
            };
          };
        };
      }, {
        "./es5": 13,
        "./util": 36
      }],
      8: [function (t, e, r) {
        "use strict";

        e.exports = function (t) {
          var e = !1,
              r = [];

          function n() {
            this._trace = new n.CapturedTrace(i());
          }

          function i() {
            var t = r.length - 1;
            if (t >= 0) return r[t];
          }

          return t.prototype._promiseCreated = function () {}, t.prototype._pushContext = function () {}, t.prototype._popContext = function () {
            return null;
          }, t._peekContext = t.prototype._peekContext = function () {}, n.prototype._pushContext = function () {
            void 0 !== this._trace && (this._trace._promiseCreated = null, r.push(this._trace));
          }, n.prototype._popContext = function () {
            if (void 0 !== this._trace) {
              var t = r.pop(),
                  e = t._promiseCreated;
              return t._promiseCreated = null, e;
            }

            return null;
          }, n.CapturedTrace = null, n.create = function () {
            if (e) return new n();
          }, n.deactivateLongStackTraces = function () {}, n.activateLongStackTraces = function () {
            var r = t.prototype._pushContext,
                o = t.prototype._popContext,
                s = t._peekContext,
                a = t.prototype._peekContext,
                u = t.prototype._promiseCreated;
            n.deactivateLongStackTraces = function () {
              t.prototype._pushContext = r, t.prototype._popContext = o, t._peekContext = s, t.prototype._peekContext = a, t.prototype._promiseCreated = u, e = !1;
            }, e = !0, t.prototype._pushContext = n.prototype._pushContext, t.prototype._popContext = n.prototype._popContext, t._peekContext = t.prototype._peekContext = i, t.prototype._promiseCreated = function () {
              var t = this._peekContext();

              t && null == t._promiseCreated && (t._promiseCreated = this);
            };
          }, n;
        };
      }, {}],
      9: [function (t, r, n) {
        "use strict";

        r.exports = function (r, n) {
          var i,
              o,
              s,
              a = r._getDomain,
              u = r._async,
              c = t("./errors").Warning,
              l = t("./util"),
              f = l.canAttachTrace,
              h = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/,
              p = /\((?:timers\.js):\d+:\d+\)/,
              d = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/,
              _ = null,
              v = null,
              y = !1,
              m = !(0 == l.env("BLUEBIRD_DEBUG")),
              g = !(0 == l.env("BLUEBIRD_WARNINGS") || !m && !l.env("BLUEBIRD_WARNINGS")),
              b = !(0 == l.env("BLUEBIRD_LONG_STACK_TRACES") || !m && !l.env("BLUEBIRD_LONG_STACK_TRACES")),
              w = 0 != l.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (g || !!l.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
          r.prototype.suppressUnhandledRejections = function () {
            var t = this._target();

            t._bitField = -1048577 & t._bitField | 524288;
          }, r.prototype._ensurePossibleRejectionHandled = function () {
            if (0 == (524288 & this._bitField)) {
              this._setRejectionIsUnhandled();

              var t = this;
              setTimeout(function () {
                t._notifyUnhandledRejection();
              }, 1);
            }
          }, r.prototype._notifyUnhandledRejectionIsHandled = function () {
            q("rejectionHandled", i, void 0, this);
          }, r.prototype._setReturnedNonUndefined = function () {
            this._bitField = 268435456 | this._bitField;
          }, r.prototype._returnedNonUndefined = function () {
            return 0 != (268435456 & this._bitField);
          }, r.prototype._notifyUnhandledRejection = function () {
            if (this._isRejectionUnhandled()) {
              var t = this._settledValue();

              this._setUnhandledRejectionIsNotified(), q("unhandledRejection", o, t, this);
            }
          }, r.prototype._setUnhandledRejectionIsNotified = function () {
            this._bitField = 262144 | this._bitField;
          }, r.prototype._unsetUnhandledRejectionIsNotified = function () {
            this._bitField = -262145 & this._bitField;
          }, r.prototype._isUnhandledRejectionNotified = function () {
            return (262144 & this._bitField) > 0;
          }, r.prototype._setRejectionIsUnhandled = function () {
            this._bitField = 1048576 | this._bitField;
          }, r.prototype._unsetRejectionIsUnhandled = function () {
            this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled());
          }, r.prototype._isRejectionUnhandled = function () {
            return (1048576 & this._bitField) > 0;
          }, r.prototype._warn = function (t, e, r) {
            return U(t, e, r || this);
          }, r.onPossiblyUnhandledRejection = function (t) {
            var e = a();
            o = "function" == typeof t ? null === e ? t : l.domainBind(e, t) : void 0;
          }, r.onUnhandledRejectionHandled = function (t) {
            var e = a();
            i = "function" == typeof t ? null === e ? t : l.domainBind(e, t) : void 0;
          };

          var E = function () {};

          r.longStackTraces = function () {
            if (u.haveItemsQueued() && !J.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");

            if (!J.longStackTraces && Y()) {
              var t = r.prototype._captureStackTrace,
                  e = r.prototype._attachExtraTrace;
              J.longStackTraces = !0, E = function () {
                if (u.haveItemsQueued() && !J.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                r.prototype._captureStackTrace = t, r.prototype._attachExtraTrace = e, n.deactivateLongStackTraces(), u.enableTrampoline(), J.longStackTraces = !1;
              }, r.prototype._captureStackTrace = D, r.prototype._attachExtraTrace = I, n.activateLongStackTraces(), u.disableTrampolineIfNecessary();
            }
          }, r.hasLongStackTraces = function () {
            return J.longStackTraces && Y();
          };

          var C = function () {
            try {
              if ("function" == typeof CustomEvent) {
                var t = new CustomEvent("CustomEvent");
                return l.global.dispatchEvent(t), function (t, e) {
                  var r = new CustomEvent(t.toLowerCase(), {
                    detail: e,
                    cancelable: !0
                  });
                  return !l.global.dispatchEvent(r);
                };
              }

              return "function" == typeof Event ? (t = new Event("CustomEvent"), l.global.dispatchEvent(t), function (t, e) {
                var r = new Event(t.toLowerCase(), {
                  cancelable: !0
                });
                return r.detail = e, !l.global.dispatchEvent(r);
              }) : ((t = document.createEvent("CustomEvent")).initCustomEvent("testingtheevent", !1, !0, {}), l.global.dispatchEvent(t), function (t, e) {
                var r = document.createEvent("CustomEvent");
                return r.initCustomEvent(t.toLowerCase(), !1, !0, e), !l.global.dispatchEvent(r);
              });
            } catch (t) {}

            return function () {
              return !1;
            };
          }(),
              x = l.isNode ? function () {
            return e.emit.apply(e, arguments);
          } : l.global ? function (t) {
            var e = "on" + t.toLowerCase(),
                r = l.global[e];
            return !!r && (r.apply(l.global, [].slice.call(arguments, 1)), !0);
          } : function () {
            return !1;
          };

          function j(t, e) {
            return {
              promise: e
            };
          }

          var S = {
            promiseCreated: j,
            promiseFulfilled: j,
            promiseRejected: j,
            promiseResolved: j,
            promiseCancelled: j,
            promiseChained: function (t, e, r) {
              return {
                promise: e,
                child: r
              };
            },
            warning: function (t, e) {
              return {
                warning: e
              };
            },
            unhandledRejection: function (t, e, r) {
              return {
                reason: e,
                promise: r
              };
            },
            rejectionHandled: j
          },
              R = function (t) {
            var e = !1;

            try {
              e = x.apply(null, arguments);
            } catch (t) {
              u.throwLater(t), e = !0;
            }

            var r = !1;

            try {
              r = C(t, S[t].apply(null, arguments));
            } catch (t) {
              u.throwLater(t), r = !0;
            }

            return r || e;
          };

          function k() {
            return !1;
          }

          function T(t, e, r) {
            var n = this;

            try {
              t(e, r, function (t) {
                if ("function" != typeof t) throw new TypeError("onCancel must be a function, got: " + l.toString(t));

                n._attachCancellationCallback(t);
              });
            } catch (t) {
              return t;
            }
          }

          function P(t) {
            if (!this._isCancellable()) return this;

            var e = this._onCancel();

            void 0 !== e ? l.isArray(e) ? e.push(t) : this._setOnCancel([e, t]) : this._setOnCancel(t);
          }

          function O() {
            return this._onCancelField;
          }

          function A(t) {
            this._onCancelField = t;
          }

          function F() {
            this._cancellationParent = void 0, this._onCancelField = void 0;
          }

          function L(t, e) {
            if (0 != (1 & e)) {
              this._cancellationParent = t;
              var r = t._branchesRemainingToCancel;
              void 0 === r && (r = 0), t._branchesRemainingToCancel = r + 1;
            }

            0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo);
          }

          r.config = function (t) {
            if ("longStackTraces" in (t = Object(t)) && (t.longStackTraces ? r.longStackTraces() : !t.longStackTraces && r.hasLongStackTraces() && E()), "warnings" in t) {
              var e = t.warnings;
              J.warnings = !!e, w = J.warnings, l.isObject(e) && "wForgottenReturn" in e && (w = !!e.wForgottenReturn);
            }

            if ("cancellation" in t && t.cancellation && !J.cancellation) {
              if (u.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
              r.prototype._clearCancellationData = F, r.prototype._propagateFrom = L, r.prototype._onCancel = O, r.prototype._setOnCancel = A, r.prototype._attachCancellationCallback = P, r.prototype._execute = T, M = L, J.cancellation = !0;
            }

            return "monitoring" in t && (t.monitoring && !J.monitoring ? (J.monitoring = !0, r.prototype._fireEvent = R) : !t.monitoring && J.monitoring && (J.monitoring = !1, r.prototype._fireEvent = k)), r;
          }, r.prototype._fireEvent = k, r.prototype._execute = function (t, e, r) {
            try {
              t(e, r);
            } catch (t) {
              return t;
            }
          }, r.prototype._onCancel = function () {}, r.prototype._setOnCancel = function (t) {}, r.prototype._attachCancellationCallback = function (t) {}, r.prototype._captureStackTrace = function () {}, r.prototype._attachExtraTrace = function () {}, r.prototype._clearCancellationData = function () {}, r.prototype._propagateFrom = function (t, e) {};

          var M = function (t, e) {
            0 != (2 & e) && t._isBound() && this._setBoundTo(t._boundTo);
          };

          function B() {
            var t = this._boundTo;
            return void 0 !== t && t instanceof r ? t.isFulfilled() ? t.value() : void 0 : t;
          }

          function D() {
            this._trace = new X(this._peekContext());
          }

          function I(t, e) {
            if (f(t)) {
              var r = this._trace;
              if (void 0 !== r && e && (r = r._parent), void 0 !== r) r.attachExtraTrace(t);else if (!t.__stackCleaned__) {
                var n = H(t);
                l.notEnumerableProp(t, "stack", n.message + "\n" + n.stack.join("\n")), l.notEnumerableProp(t, "__stackCleaned__", !0);
              }
            }
          }

          function U(t, e, n) {
            if (J.warnings) {
              var i,
                  o = new c(t);
              if (e) n._attachExtraTrace(o);else if (J.longStackTraces && (i = r._peekContext())) i.attachExtraTrace(o);else {
                var s = H(o);
                o.stack = s.message + "\n" + s.stack.join("\n");
              }
              R("warning", o) || V(o, "", !0);
            }
          }

          function N(t) {
            for (var e = [], r = 0; r < t.length; ++r) {
              var n = t[r],
                  i = "    (No stack trace)" === n || _.test(n),
                  o = i && $(n);

              i && !o && (y && " " !== n.charAt(0) && (n = "    " + n), e.push(n));
            }

            return e;
          }

          function H(t) {
            var e = t.stack,
                r = t.toString();
            return e = "string" == typeof e && e.length > 0 ? function (t) {
              for (var e = t.stack.replace(/\s+$/g, "").split("\n"), r = 0; r < e.length; ++r) {
                var n = e[r];
                if ("    (No stack trace)" === n || _.test(n)) break;
              }

              return r > 0 && "SyntaxError" != t.name && (e = e.slice(r)), e;
            }(t) : ["    (No stack trace)"], {
              message: r,
              stack: "SyntaxError" == t.name ? e : N(e)
            };
          }

          function V(t, e, r) {
            if ("undefined" != typeof console) {
              var n;

              if (l.isObject(t)) {
                var i = t.stack;
                n = e + v(i, t);
              } else n = e + String(t);

              "function" == typeof s ? s(n, r) : "function" != typeof console.log && "object" != _typeof(console.log) || console.log(n);
            }
          }

          function q(t, e, r, n) {
            var i = !1;

            try {
              "function" == typeof e && (i = !0, "rejectionHandled" === t ? e(n) : e(r, n));
            } catch (t) {
              u.throwLater(t);
            }

            "unhandledRejection" === t ? R(t, r, n) || i || V(r, "Unhandled rejection ") : R(t, n);
          }

          function W(t) {
            var e;
            if ("function" == typeof t) e = "[function " + (t.name || "anonymous") + "]";else {
              if (e = t && "function" == typeof t.toString ? t.toString() : l.toString(t), /\[object [a-zA-Z0-9$_]+\]/.test(e)) try {
                e = JSON.stringify(t);
              } catch (t) {}
              0 === e.length && (e = "(empty array)");
            }
            return "(<" + function (t) {
              return t.length < 41 ? t : t.substr(0, 38) + "...";
            }(e) + ">, no stack trace)";
          }

          function Y() {
            return "function" == typeof G;
          }

          var $ = function () {
            return !1;
          },
              z = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;

          function Q(t) {
            var e = t.match(z);
            if (e) return {
              fileName: e[1],
              line: parseInt(e[2], 10)
            };
          }

          function X(t) {
            this._parent = t, this._promisesCreated = 0;
            var e = this._length = 1 + (void 0 === t ? 0 : t._length);
            G(this, X), e > 32 && this.uncycle();
          }

          l.inherits(X, Error), n.CapturedTrace = X, X.prototype.uncycle = function () {
            var t = this._length;

            if (!(t < 2)) {
              for (var e = [], r = {}, n = 0, i = this; void 0 !== i; ++n) e.push(i), i = i._parent;

              for (n = (t = this._length = n) - 1; n >= 0; --n) {
                var o = e[n].stack;
                void 0 === r[o] && (r[o] = n);
              }

              for (n = 0; n < t; ++n) {
                var s = r[e[n].stack];

                if (void 0 !== s && s !== n) {
                  s > 0 && (e[s - 1]._parent = void 0, e[s - 1]._length = 1), e[n]._parent = void 0, e[n]._length = 1;
                  var a = n > 0 ? e[n - 1] : this;
                  s < t - 1 ? (a._parent = e[s + 1], a._parent.uncycle(), a._length = a._parent._length + 1) : (a._parent = void 0, a._length = 1);

                  for (var u = a._length + 1, c = n - 2; c >= 0; --c) e[c]._length = u, u++;

                  return;
                }
              }
            }
          }, X.prototype.attachExtraTrace = function (t) {
            if (!t.__stackCleaned__) {
              this.uncycle();

              for (var e = H(t), r = e.message, n = [e.stack], i = this; void 0 !== i;) n.push(N(i.stack.split("\n"))), i = i._parent;

              !function (t) {
                for (var e = t[0], r = 1; r < t.length; ++r) {
                  for (var n = t[r], i = e.length - 1, o = e[i], s = -1, a = n.length - 1; a >= 0; --a) if (n[a] === o) {
                    s = a;
                    break;
                  }

                  for (a = s; a >= 0; --a) {
                    var u = n[a];
                    if (e[i] !== u) break;
                    e.pop(), i--;
                  }

                  e = n;
                }
              }(n), function (t) {
                for (var e = 0; e < t.length; ++e) (0 === t[e].length || e + 1 < t.length && t[e][0] === t[e + 1][0]) && (t.splice(e, 1), e--);
              }(n), l.notEnumerableProp(t, "stack", function (t, e) {
                for (var r = 0; r < e.length - 1; ++r) e[r].push("From previous event:"), e[r] = e[r].join("\n");

                return r < e.length && (e[r] = e[r].join("\n")), t + "\n" + e.join("\n");
              }(r, n)), l.notEnumerableProp(t, "__stackCleaned__", !0);
            }
          };

          var G = function () {
            var t = /^\s*at\s*/,
                e = function (t, e) {
              return "string" == typeof t ? t : void 0 !== e.name && void 0 !== e.message ? e.toString() : W(e);
            };

            if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
              Error.stackTraceLimit += 6, _ = t, v = e;
              var r = Error.captureStackTrace;
              return $ = function (t) {
                return h.test(t);
              }, function (t, e) {
                Error.stackTraceLimit += 6, r(t, e), Error.stackTraceLimit -= 6;
              };
            }

            var n,
                i = new Error();
            if ("string" == typeof i.stack && i.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return _ = /@/, v = e, y = !0, function (t) {
              t.stack = new Error().stack;
            };

            try {
              throw new Error();
            } catch (t) {
              n = "stack" in t;
            }

            return "stack" in i || !n || "number" != typeof Error.stackTraceLimit ? (v = function (t, e) {
              return "string" == typeof t ? t : "object" != _typeof(e) && "function" != typeof e || void 0 === e.name || void 0 === e.message ? W(e) : e.toString();
            }, null) : (_ = t, v = e, function (t) {
              Error.stackTraceLimit += 6;

              try {
                throw new Error();
              } catch (e) {
                t.stack = e.stack;
              }

              Error.stackTraceLimit -= 6;
            });
          }();

          "undefined" != typeof console && void 0 !== console.warn && (s = function (t) {
            console.warn(t);
          }, l.isNode && e.stderr.isTTY ? s = function (t, e) {
            var r = e ? "[33m" : "[31m";
            console.warn(r + t + "[0m\n");
          } : l.isNode || "string" != typeof new Error().stack || (s = function (t, e) {
            console.warn("%c" + t, e ? "color: darkorange" : "color: red");
          }));
          var J = {
            warnings: g,
            longStackTraces: !1,
            cancellation: !1,
            monitoring: !1
          };
          return b && r.longStackTraces(), {
            longStackTraces: function () {
              return J.longStackTraces;
            },
            warnings: function () {
              return J.warnings;
            },
            cancellation: function () {
              return J.cancellation;
            },
            monitoring: function () {
              return J.monitoring;
            },
            propagateFromFunction: function () {
              return M;
            },
            boundValueFunction: function () {
              return B;
            },
            checkForgottenReturns: function (t, e, r, n, i) {
              if (void 0 === t && null !== e && w) {
                if (void 0 !== i && i._returnedNonUndefined()) return;
                if (0 == (65535 & n._bitField)) return;
                r && (r += " ");
                var o = "",
                    s = "";

                if (e._trace) {
                  for (var a = e._trace.stack.split("\n"), u = N(a), c = u.length - 1; c >= 0; --c) {
                    var l = u[c];

                    if (!p.test(l)) {
                      var f = l.match(d);
                      f && (o = "at " + f[1] + ":" + f[2] + ":" + f[3] + " ");
                      break;
                    }
                  }

                  if (u.length > 0) {
                    var h = u[0];

                    for (c = 0; c < a.length; ++c) if (a[c] === h) {
                      c > 0 && (s = "\n" + a[c - 1]);
                      break;
                    }
                  }
                }

                var _ = "a promise was created in a " + r + "handler " + o + "but was not returned from it, see http://goo.gl/rRqMUw" + s;

                n._warn(_, !0, e);
              }
            },
            setBounds: function (t, e) {
              if (Y()) {
                for (var r, n, i = t.stack.split("\n"), o = e.stack.split("\n"), s = -1, a = -1, u = 0; u < i.length; ++u) if (c = Q(i[u])) {
                  r = c.fileName, s = c.line;
                  break;
                }

                for (u = 0; u < o.length; ++u) {
                  var c;

                  if (c = Q(o[u])) {
                    n = c.fileName, a = c.line;
                    break;
                  }
                }

                s < 0 || a < 0 || !r || !n || r !== n || s >= a || ($ = function (t) {
                  if (h.test(t)) return !0;
                  var e = Q(t);
                  return !!(e && e.fileName === r && s <= e.line && e.line <= a);
                });
              }
            },
            warn: U,
            deprecated: function (t, e) {
              var r = t + " is deprecated and will be removed in a future version.";
              return e && (r += " Use " + e + " instead."), U(r);
            },
            CapturedTrace: X,
            fireDomEvent: C,
            fireGlobalEvent: x
          };
        };
      }, {
        "./errors": 12,
        "./util": 36
      }],
      10: [function (t, e, r) {
        "use strict";

        e.exports = function (t) {
          function e() {
            return this.value;
          }

          function r() {
            throw this.reason;
          }

          t.prototype.return = t.prototype.thenReturn = function (r) {
            return r instanceof t && r.suppressUnhandledRejections(), this._then(e, void 0, void 0, {
              value: r
            }, void 0);
          }, t.prototype.throw = t.prototype.thenThrow = function (t) {
            return this._then(r, void 0, void 0, {
              reason: t
            }, void 0);
          }, t.prototype.catchThrow = function (t) {
            if (arguments.length <= 1) return this._then(void 0, r, void 0, {
              reason: t
            }, void 0);
            var e = arguments[1];
            return this.caught(t, function () {
              throw e;
            });
          }, t.prototype.catchReturn = function (r) {
            if (arguments.length <= 1) return r instanceof t && r.suppressUnhandledRejections(), this._then(void 0, e, void 0, {
              value: r
            }, void 0);
            var n = arguments[1];
            return n instanceof t && n.suppressUnhandledRejections(), this.caught(r, function () {
              return n;
            });
          };
        };
      }, {}],
      11: [function (t, e, r) {
        "use strict";

        e.exports = function (t, e) {
          var r = t.reduce,
              n = t.all;

          function i() {
            return n(this);
          }

          t.prototype.each = function (t) {
            return r(this, t, e, 0)._then(i, void 0, void 0, this, void 0);
          }, t.prototype.mapSeries = function (t) {
            return r(this, t, e, e);
          }, t.each = function (t, n) {
            return r(t, n, e, 0)._then(i, void 0, void 0, t, void 0);
          }, t.mapSeries = function (t, n) {
            return r(t, n, e, e);
          };
        };
      }, {}],
      12: [function (t, e, r) {
        "use strict";

        var n,
            i,
            o = t("./es5"),
            s = o.freeze,
            a = t("./util"),
            u = a.inherits,
            c = a.notEnumerableProp;

        function l(t, e) {
          function r(n) {
            if (!(this instanceof r)) return new r(n);
            c(this, "message", "string" == typeof n ? n : e), c(this, "name", t), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this);
          }

          return u(r, Error), r;
        }

        var f = l("Warning", "warning"),
            h = l("CancellationError", "cancellation error"),
            p = l("TimeoutError", "timeout error"),
            d = l("AggregateError", "aggregate error");

        try {
          n = TypeError, i = RangeError;
        } catch (t) {
          n = l("TypeError", "type error"), i = l("RangeError", "range error");
        }

        for (var _ = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), v = 0; v < _.length; ++v) "function" == typeof Array.prototype[_[v]] && (d.prototype[_[v]] = Array.prototype[_[v]]);

        o.defineProperty(d.prototype, "length", {
          value: 0,
          configurable: !1,
          writable: !0,
          enumerable: !0
        }), d.prototype.isOperational = !0;
        var y = 0;

        function m(t) {
          if (!(this instanceof m)) return new m(t);
          c(this, "name", "OperationalError"), c(this, "message", t), this.cause = t, this.isOperational = !0, t instanceof Error ? (c(this, "message", t.message), c(this, "stack", t.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
        }

        d.prototype.toString = function () {
          var t = Array(4 * y + 1).join(" "),
              e = "\n" + t + "AggregateError of:\n";
          y++, t = Array(4 * y + 1).join(" ");

          for (var r = 0; r < this.length; ++r) {
            for (var n = this[r] === this ? "[Circular AggregateError]" : this[r] + "", i = n.split("\n"), o = 0; o < i.length; ++o) i[o] = t + i[o];

            e += (n = i.join("\n")) + "\n";
          }

          return y--, e;
        }, u(m, Error);
        var g = Error.__BluebirdErrorTypes__;
        g || (g = s({
          CancellationError: h,
          TimeoutError: p,
          OperationalError: m,
          RejectionError: m,
          AggregateError: d
        }), o.defineProperty(Error, "__BluebirdErrorTypes__", {
          value: g,
          writable: !1,
          enumerable: !1,
          configurable: !1
        })), e.exports = {
          Error: Error,
          TypeError: n,
          RangeError: i,
          CancellationError: g.CancellationError,
          OperationalError: g.OperationalError,
          TimeoutError: g.TimeoutError,
          AggregateError: g.AggregateError,
          Warning: f
        };
      }, {
        "./es5": 13,
        "./util": 36
      }],
      13: [function (t, e, r) {
        var n = function () {
          "use strict";

          return void 0 === this;
        }();

        if (n) e.exports = {
          freeze: Object.freeze,
          defineProperty: Object.defineProperty,
          getDescriptor: Object.getOwnPropertyDescriptor,
          keys: Object.keys,
          names: Object.getOwnPropertyNames,
          getPrototypeOf: Object.getPrototypeOf,
          isArray: Array.isArray,
          isES5: n,
          propertyIsWritable: function (t, e) {
            var r = Object.getOwnPropertyDescriptor(t, e);
            return !(r && !r.writable && !r.set);
          }
        };else {
          var i = {}.hasOwnProperty,
              o = {}.toString,
              s = {}.constructor.prototype,
              a = function (t) {
            var e = [];

            for (var r in t) i.call(t, r) && e.push(r);

            return e;
          };

          e.exports = {
            isArray: function (t) {
              try {
                return "[object Array]" === o.call(t);
              } catch (t) {
                return !1;
              }
            },
            keys: a,
            names: a,
            defineProperty: function (t, e, r) {
              return t[e] = r.value, t;
            },
            getDescriptor: function (t, e) {
              return {
                value: t[e]
              };
            },
            freeze: function (t) {
              return t;
            },
            getPrototypeOf: function (t) {
              try {
                return Object(t).constructor.prototype;
              } catch (t) {
                return s;
              }
            },
            isES5: n,
            propertyIsWritable: function () {
              return !0;
            }
          };
        }
      }, {}],
      14: [function (t, e, r) {
        "use strict";

        e.exports = function (t, e) {
          var r = t.map;
          t.prototype.filter = function (t, n) {
            return r(this, t, n, e);
          }, t.filter = function (t, n, i) {
            return r(t, n, i, e);
          };
        };
      }, {}],
      15: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n) {
          var i = t("./util"),
              o = e.CancellationError,
              s = i.errorObj,
              a = t("./catch_filter")(n);

          function u(t, e, r) {
            this.promise = t, this.type = e, this.handler = r, this.called = !1, this.cancelPromise = null;
          }

          function c(t) {
            this.finallyHandler = t;
          }

          function l(t, e) {
            return null != t.cancelPromise && (arguments.length > 1 ? t.cancelPromise._reject(e) : t.cancelPromise._cancel(), t.cancelPromise = null, !0);
          }

          function f() {
            return p.call(this, this.promise._target()._settledValue());
          }

          function h(t) {
            if (!l(this, t)) return s.e = t, s;
          }

          function p(t) {
            var i = this.promise,
                a = this.handler;

            if (!this.called) {
              this.called = !0;
              var u = this.isFinallyHandler() ? a.call(i._boundValue()) : a.call(i._boundValue(), t);
              if (u === n) return u;

              if (void 0 !== u) {
                i._setReturnedNonUndefined();

                var p = r(u, i);

                if (p instanceof e) {
                  if (null != this.cancelPromise) {
                    if (p._isCancelled()) {
                      var d = new o("late cancellation observer");
                      return i._attachExtraTrace(d), s.e = d, s;
                    }

                    p.isPending() && p._attachCancellationCallback(new c(this));
                  }

                  return p._then(f, h, void 0, this, void 0);
                }
              }
            }

            return i.isRejected() ? (l(this), s.e = t, s) : (l(this), t);
          }

          return u.prototype.isFinallyHandler = function () {
            return 0 === this.type;
          }, c.prototype._resultCancelled = function () {
            l(this.finallyHandler);
          }, e.prototype._passThrough = function (t, e, r, n) {
            return "function" != typeof t ? this.then() : this._then(r, n, void 0, new u(this, e, t), void 0);
          }, e.prototype.lastly = e.prototype.finally = function (t) {
            return this._passThrough(t, 0, p, p);
          }, e.prototype.tap = function (t) {
            return this._passThrough(t, 1, p);
          }, e.prototype.tapCatch = function (t) {
            var r = arguments.length;
            if (1 === r) return this._passThrough(t, 1, void 0, p);
            var n,
                o = new Array(r - 1),
                s = 0;

            for (n = 0; n < r - 1; ++n) {
              var u = arguments[n];
              if (!i.isObject(u)) return e.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + i.classString(u)));
              o[s++] = u;
            }

            o.length = s;
            var c = arguments[n];
            return this._passThrough(a(o, c, this), 1, void 0, p);
          }, u;
        };
      }, {
        "./catch_filter": 7,
        "./util": 36
      }],
      16: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n, i, o, s) {
          var a = t("./errors").TypeError,
              u = t("./util"),
              c = u.errorObj,
              l = u.tryCatch,
              f = [];

          function h(t, r, i, o) {
            if (s.cancellation()) {
              var a = new e(n),
                  u = this._finallyPromise = new e(n);
              this._promise = a.lastly(function () {
                return u;
              }), a._captureStackTrace(), a._setOnCancel(this);
            } else (this._promise = new e(n))._captureStackTrace();

            this._stack = o, this._generatorFunction = t, this._receiver = r, this._generator = void 0, this._yieldHandlers = "function" == typeof i ? [i].concat(f) : f, this._yieldedPromise = null, this._cancellationPhase = !1;
          }

          u.inherits(h, o), h.prototype._isResolved = function () {
            return null === this._promise;
          }, h.prototype._cleanup = function () {
            this._promise = this._generator = null, s.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null);
          }, h.prototype._promiseCancelled = function () {
            if (!this._isResolved()) {
              var t;
              if (void 0 !== this._generator.return) this._promise._pushContext(), t = l(this._generator.return).call(this._generator, void 0), this._promise._popContext();else {
                var r = new e.CancellationError("generator .return() sentinel");
                e.coroutine.returnSentinel = r, this._promise._attachExtraTrace(r), this._promise._pushContext(), t = l(this._generator.throw).call(this._generator, r), this._promise._popContext();
              }
              this._cancellationPhase = !0, this._yieldedPromise = null, this._continue(t);
            }
          }, h.prototype._promiseFulfilled = function (t) {
            this._yieldedPromise = null, this._promise._pushContext();
            var e = l(this._generator.next).call(this._generator, t);
            this._promise._popContext(), this._continue(e);
          }, h.prototype._promiseRejected = function (t) {
            this._yieldedPromise = null, this._promise._attachExtraTrace(t), this._promise._pushContext();
            var e = l(this._generator.throw).call(this._generator, t);
            this._promise._popContext(), this._continue(e);
          }, h.prototype._resultCancelled = function () {
            if (this._yieldedPromise instanceof e) {
              var t = this._yieldedPromise;
              this._yieldedPromise = null, t.cancel();
            }
          }, h.prototype.promise = function () {
            return this._promise;
          }, h.prototype._run = function () {
            this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0);
          }, h.prototype._continue = function (t) {
            var r = this._promise;
            if (t === c) return this._cleanup(), this._cancellationPhase ? r.cancel() : r._rejectCallback(t.e, !1);
            var n = t.value;
            if (!0 === t.done) return this._cleanup(), this._cancellationPhase ? r.cancel() : r._resolveCallback(n);
            var o = i(n, this._promise);

            if (o instanceof e || null !== (o = function (t, r, n) {
              for (var o = 0; o < r.length; ++o) {
                n._pushContext();

                var s = l(r[o])(t);

                if (n._popContext(), s === c) {
                  n._pushContext();

                  var a = e.reject(c.e);
                  return n._popContext(), a;
                }

                var u = i(s, n);
                if (u instanceof e) return u;
              }

              return null;
            }(o, this._yieldHandlers, this._promise))) {
              var s = (o = o._target())._bitField;

              0 == (50397184 & s) ? (this._yieldedPromise = o, o._proxy(this, null)) : 0 != (33554432 & s) ? e._async.invoke(this._promiseFulfilled, this, o._value()) : 0 != (16777216 & s) ? e._async.invoke(this._promiseRejected, this, o._reason()) : this._promiseCancelled();
            } else this._promiseRejected(new a("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(n)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
          }, e.coroutine = function (t, e) {
            if ("function" != typeof t) throw new a("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
            var r = Object(e).yieldHandler,
                n = h,
                i = new Error().stack;
            return function () {
              var e = t.apply(this, arguments),
                  o = new n(void 0, void 0, r, i),
                  s = o.promise();
              return o._generator = e, o._promiseFulfilled(void 0), s;
            };
          }, e.coroutine.addYieldHandler = function (t) {
            if ("function" != typeof t) throw new a("expecting a function but got " + u.classString(t));
            f.push(t);
          }, e.spawn = function (t) {
            if (s.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof t) return r("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
            var n = new h(t, this),
                i = n.promise();
            return n._run(e.spawn), i;
          };
        };
      }, {
        "./errors": 12,
        "./util": 36
      }],
      17: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n, i, o, s) {
          var a = t("./util");
          a.canEvaluate, a.tryCatch, a.errorObj, e.join = function () {
            var t,
                e = arguments.length - 1;
            e > 0 && "function" == typeof arguments[e] && (t = arguments[e]);
            var n = [].slice.call(arguments);
            t && n.pop();
            var i = new r(n).promise();
            return void 0 !== t ? i.spread(t) : i;
          };
        };
      }, {
        "./util": 36
      }],
      18: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n, i, o, s) {
          var a = e._getDomain,
              u = t("./util"),
              c = u.tryCatch,
              l = u.errorObj,
              f = e._async;

          function h(t, e, r, n) {
            this.constructor$(t), this._promise._captureStackTrace();
            var i = a();
            this._callback = null === i ? e : u.domainBind(i, e), this._preservedValues = n === o ? new Array(this.length()) : null, this._limit = r, this._inFlight = 0, this._queue = [], f.invoke(this._asyncInit, this, void 0);
          }

          function p(t, r, i, o) {
            if ("function" != typeof r) return n("expecting a function but got " + u.classString(r));
            var s = 0;

            if (void 0 !== i) {
              if ("object" != _typeof(i) || null === i) return e.reject(new TypeError("options argument must be an object but it is " + u.classString(i)));
              if ("number" != typeof i.concurrency) return e.reject(new TypeError("'concurrency' must be a number but it is " + u.classString(i.concurrency)));
              s = i.concurrency;
            }

            return new h(t, r, s = "number" == typeof s && isFinite(s) && s >= 1 ? s : 0, o).promise();
          }

          u.inherits(h, r), h.prototype._asyncInit = function () {
            this._init$(void 0, -2);
          }, h.prototype._init = function () {}, h.prototype._promiseFulfilled = function (t, r) {
            var n = this._values,
                o = this.length(),
                a = this._preservedValues,
                u = this._limit;

            if (r < 0) {
              if (n[r = -1 * r - 1] = t, u >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return !0;
            } else {
              if (u >= 1 && this._inFlight >= u) return n[r] = t, this._queue.push(r), !1;
              null !== a && (a[r] = t);

              var f = this._promise,
                  h = this._callback,
                  p = f._boundValue();

              f._pushContext();

              var d = c(h).call(p, t, r, o),
                  _ = f._popContext();

              if (s.checkForgottenReturns(d, _, null !== a ? "Promise.filter" : "Promise.map", f), d === l) return this._reject(d.e), !0;
              var v = i(d, this._promise);

              if (v instanceof e) {
                var y = (v = v._target())._bitField;

                if (0 == (50397184 & y)) return u >= 1 && this._inFlight++, n[r] = v, v._proxy(this, -1 * (r + 1)), !1;
                if (0 == (33554432 & y)) return 0 != (16777216 & y) ? (this._reject(v._reason()), !0) : (this._cancel(), !0);
                d = v._value();
              }

              n[r] = d;
            }

            return ++this._totalResolved >= o && (null !== a ? this._filter(n, a) : this._resolve(n), !0);
          }, h.prototype._drainQueue = function () {
            for (var t = this._queue, e = this._limit, r = this._values; t.length > 0 && this._inFlight < e;) {
              if (this._isResolved()) return;
              var n = t.pop();

              this._promiseFulfilled(r[n], n);
            }
          }, h.prototype._filter = function (t, e) {
            for (var r = e.length, n = new Array(r), i = 0, o = 0; o < r; ++o) t[o] && (n[i++] = e[o]);

            n.length = i, this._resolve(n);
          }, h.prototype.preservedValues = function () {
            return this._preservedValues;
          }, e.prototype.map = function (t, e) {
            return p(this, t, e, null);
          }, e.map = function (t, e, r, n) {
            return p(t, e, r, n);
          };
        };
      }, {
        "./util": 36
      }],
      19: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n, i, o) {
          var s = t("./util"),
              a = s.tryCatch;
          e.method = function (t) {
            if ("function" != typeof t) throw new e.TypeError("expecting a function but got " + s.classString(t));
            return function () {
              var n = new e(r);
              n._captureStackTrace(), n._pushContext();

              var i = a(t).apply(this, arguments),
                  s = n._popContext();

              return o.checkForgottenReturns(i, s, "Promise.method", n), n._resolveFromSyncValue(i), n;
            };
          }, e.attempt = e.try = function (t) {
            if ("function" != typeof t) return i("expecting a function but got " + s.classString(t));
            var n,
                u = new e(r);

            if (u._captureStackTrace(), u._pushContext(), arguments.length > 1) {
              o.deprecated("calling Promise.try with more than 1 argument");
              var c = arguments[1],
                  l = arguments[2];
              n = s.isArray(c) ? a(t).apply(l, c) : a(t).call(l, c);
            } else n = a(t)();

            var f = u._popContext();

            return o.checkForgottenReturns(n, f, "Promise.try", u), u._resolveFromSyncValue(n), u;
          }, e.prototype._resolveFromSyncValue = function (t) {
            t === s.errorObj ? this._rejectCallback(t.e, !1) : this._resolveCallback(t, !0);
          };
        };
      }, {
        "./util": 36
      }],
      20: [function (t, e, r) {
        "use strict";

        var n = t("./util"),
            i = n.maybeWrapAsError,
            o = t("./errors").OperationalError,
            s = t("./es5"),
            a = /^(?:name|message|stack|cause)$/;

        function u(t) {
          var e;

          if (function (t) {
            return t instanceof Error && s.getPrototypeOf(t) === Error.prototype;
          }(t)) {
            (e = new o(t)).name = t.name, e.message = t.message, e.stack = t.stack;

            for (var r = s.keys(t), i = 0; i < r.length; ++i) {
              var u = r[i];
              a.test(u) || (e[u] = t[u]);
            }

            return e;
          }

          return n.markAsOriginatingFromRejection(t), t;
        }

        e.exports = function (t, e) {
          return function (r, n) {
            if (null !== t) {
              if (r) {
                var o = u(i(r));
                t._attachExtraTrace(o), t._reject(o);
              } else if (e) {
                var s = [].slice.call(arguments, 1);

                t._fulfill(s);
              } else t._fulfill(n);

              t = null;
            }
          };
        };
      }, {
        "./errors": 12,
        "./es5": 13,
        "./util": 36
      }],
      21: [function (t, e, r) {
        "use strict";

        e.exports = function (e) {
          var r = t("./util"),
              n = e._async,
              i = r.tryCatch,
              o = r.errorObj;

          function s(t, e) {
            if (!r.isArray(t)) return a.call(this, t, e);
            var s = i(e).apply(this._boundValue(), [null].concat(t));
            s === o && n.throwLater(s.e);
          }

          function a(t, e) {
            var r = this._boundValue(),
                s = void 0 === t ? i(e).call(r, null) : i(e).call(r, null, t);

            s === o && n.throwLater(s.e);
          }

          function u(t, e) {
            if (!t) {
              var r = new Error(t + "");
              r.cause = t, t = r;
            }

            var s = i(e).call(this._boundValue(), t);
            s === o && n.throwLater(s.e);
          }

          e.prototype.asCallback = e.prototype.nodeify = function (t, e) {
            if ("function" == typeof t) {
              var r = a;
              void 0 !== e && Object(e).spread && (r = s), this._then(r, u, void 0, this, t);
            }

            return this;
          };
        };
      }, {
        "./util": 36
      }],
      22: [function (t, r, n) {
        "use strict";

        r.exports = function () {
          var n = function () {
            return new d("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
          },
              i = function () {
            return new T.PromiseInspection(this._target());
          },
              o = function (t) {
            return T.reject(new d(t));
          };

          function s() {}

          var a,
              u = {},
              c = t("./util");
          a = c.isNode ? function () {
            var t = e.domain;
            return void 0 === t && (t = null), t;
          } : function () {
            return null;
          }, c.notEnumerableProp(T, "_getDomain", a);
          var l = t("./es5"),
              f = t("./async"),
              h = new f();
          l.defineProperty(T, "_async", {
            value: h
          });
          var p = t("./errors"),
              d = T.TypeError = p.TypeError;
          T.RangeError = p.RangeError;

          var _ = T.CancellationError = p.CancellationError;

          T.TimeoutError = p.TimeoutError, T.OperationalError = p.OperationalError, T.RejectionError = p.OperationalError, T.AggregateError = p.AggregateError;

          var v = function () {},
              y = {},
              m = {},
              g = t("./thenables")(T, v),
              b = t("./promise_array")(T, v, g, o, s),
              w = t("./context")(T),
              E = w.create,
              C = t("./debuggability")(T, w),
              x = (C.CapturedTrace, t("./finally")(T, g, m)),
              j = t("./catch_filter")(m),
              S = t("./nodeback"),
              R = c.errorObj,
              k = c.tryCatch;

          function T(t) {
            t !== v && function (t, e) {
              if (null == t || t.constructor !== T) throw new d("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
              if ("function" != typeof e) throw new d("expecting a function but got " + c.classString(e));
            }(this, t), this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._resolveFromExecutor(t), this._promiseCreated(), this._fireEvent("promiseCreated", this);
          }

          function P(t) {
            this.promise._resolveCallback(t);
          }

          function O(t) {
            this.promise._rejectCallback(t, !1);
          }

          function A(t) {
            var e = new T(v);
            e._fulfillmentHandler0 = t, e._rejectionHandler0 = t, e._promise0 = t, e._receiver0 = t;
          }

          return T.prototype.toString = function () {
            return "[object Promise]";
          }, T.prototype.caught = T.prototype.catch = function (t) {
            var e = arguments.length;

            if (e > 1) {
              var r,
                  n = new Array(e - 1),
                  i = 0;

              for (r = 0; r < e - 1; ++r) {
                var s = arguments[r];
                if (!c.isObject(s)) return o("Catch statement predicate: expecting an object but got " + c.classString(s));
                n[i++] = s;
              }

              return n.length = i, t = arguments[r], this.then(void 0, j(n, t, this));
            }

            return this.then(void 0, t);
          }, T.prototype.reflect = function () {
            return this._then(i, i, void 0, this, void 0);
          }, T.prototype.then = function (t, e) {
            if (C.warnings() && arguments.length > 0 && "function" != typeof t && "function" != typeof e) {
              var r = ".then() only accepts functions but was passed: " + c.classString(t);
              arguments.length > 1 && (r += ", " + c.classString(e)), this._warn(r);
            }

            return this._then(t, e, void 0, void 0, void 0);
          }, T.prototype.done = function (t, e) {
            this._then(t, e, void 0, void 0, void 0)._setIsFinal();
          }, T.prototype.spread = function (t) {
            return "function" != typeof t ? o("expecting a function but got " + c.classString(t)) : this.all()._then(t, void 0, void 0, y, void 0);
          }, T.prototype.toJSON = function () {
            var t = {
              isFulfilled: !1,
              isRejected: !1,
              fulfillmentValue: void 0,
              rejectionReason: void 0
            };
            return this.isFulfilled() ? (t.fulfillmentValue = this.value(), t.isFulfilled = !0) : this.isRejected() && (t.rejectionReason = this.reason(), t.isRejected = !0), t;
          }, T.prototype.all = function () {
            return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new b(this).promise();
          }, T.prototype.error = function (t) {
            return this.caught(c.originatesFromRejection, t);
          }, T.getNewLibraryCopy = r.exports, T.is = function (t) {
            return t instanceof T;
          }, T.fromNode = T.fromCallback = function (t) {
            var e = new T(v);

            e._captureStackTrace();

            var r = arguments.length > 1 && !!Object(arguments[1]).multiArgs,
                n = k(t)(S(e, r));
            return n === R && e._rejectCallback(n.e, !0), e._isFateSealed() || e._setAsyncGuaranteed(), e;
          }, T.all = function (t) {
            return new b(t).promise();
          }, T.cast = function (t) {
            var e = g(t);
            return e instanceof T || ((e = new T(v))._captureStackTrace(), e._setFulfilled(), e._rejectionHandler0 = t), e;
          }, T.resolve = T.fulfilled = T.cast, T.reject = T.rejected = function (t) {
            var e = new T(v);
            return e._captureStackTrace(), e._rejectCallback(t, !0), e;
          }, T.setScheduler = function (t) {
            if ("function" != typeof t) throw new d("expecting a function but got " + c.classString(t));
            return h.setScheduler(t);
          }, T.prototype._then = function (t, e, r, n, i) {
            var o = void 0 !== i,
                s = o ? i : new T(v),
                u = this._target(),
                l = u._bitField;

            o || (s._propagateFrom(this, 3), s._captureStackTrace(), void 0 === n && 0 != (2097152 & this._bitField) && (n = 0 != (50397184 & l) ? this._boundValue() : u === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, s));
            var f = a();

            if (0 != (50397184 & l)) {
              var p,
                  d,
                  y = u._settlePromiseCtx;
              0 != (33554432 & l) ? (d = u._rejectionHandler0, p = t) : 0 != (16777216 & l) ? (d = u._fulfillmentHandler0, p = e, u._unsetRejectionIsUnhandled()) : (y = u._settlePromiseLateCancellationObserver, d = new _("late cancellation observer"), u._attachExtraTrace(d), p = e), h.invoke(y, u, {
                handler: null === f ? p : "function" == typeof p && c.domainBind(f, p),
                promise: s,
                receiver: n,
                value: d
              });
            } else u._addCallbacks(t, e, s, n, f);

            return s;
          }, T.prototype._length = function () {
            return 65535 & this._bitField;
          }, T.prototype._isFateSealed = function () {
            return 0 != (117506048 & this._bitField);
          }, T.prototype._isFollowing = function () {
            return 67108864 == (67108864 & this._bitField);
          }, T.prototype._setLength = function (t) {
            this._bitField = -65536 & this._bitField | 65535 & t;
          }, T.prototype._setFulfilled = function () {
            this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this);
          }, T.prototype._setRejected = function () {
            this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this);
          }, T.prototype._setFollowing = function () {
            this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this);
          }, T.prototype._setIsFinal = function () {
            this._bitField = 4194304 | this._bitField;
          }, T.prototype._isFinal = function () {
            return (4194304 & this._bitField) > 0;
          }, T.prototype._unsetCancelled = function () {
            this._bitField = -65537 & this._bitField;
          }, T.prototype._setCancelled = function () {
            this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this);
          }, T.prototype._setWillBeCancelled = function () {
            this._bitField = 8388608 | this._bitField;
          }, T.prototype._setAsyncGuaranteed = function () {
            h.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField);
          }, T.prototype._receiverAt = function (t) {
            var e = 0 === t ? this._receiver0 : this[4 * t - 4 + 3];
            if (e !== u) return void 0 === e && this._isBound() ? this._boundValue() : e;
          }, T.prototype._promiseAt = function (t) {
            return this[4 * t - 4 + 2];
          }, T.prototype._fulfillmentHandlerAt = function (t) {
            return this[4 * t - 4 + 0];
          }, T.prototype._rejectionHandlerAt = function (t) {
            return this[4 * t - 4 + 1];
          }, T.prototype._boundValue = function () {}, T.prototype._migrateCallback0 = function (t) {
            t._bitField;

            var e = t._fulfillmentHandler0,
                r = t._rejectionHandler0,
                n = t._promise0,
                i = t._receiverAt(0);

            void 0 === i && (i = u), this._addCallbacks(e, r, n, i, null);
          }, T.prototype._migrateCallbackAt = function (t, e) {
            var r = t._fulfillmentHandlerAt(e),
                n = t._rejectionHandlerAt(e),
                i = t._promiseAt(e),
                o = t._receiverAt(e);

            void 0 === o && (o = u), this._addCallbacks(r, n, i, o, null);
          }, T.prototype._addCallbacks = function (t, e, r, n, i) {
            var o = this._length();

            if (o >= 65531 && (o = 0, this._setLength(0)), 0 === o) this._promise0 = r, this._receiver0 = n, "function" == typeof t && (this._fulfillmentHandler0 = null === i ? t : c.domainBind(i, t)), "function" == typeof e && (this._rejectionHandler0 = null === i ? e : c.domainBind(i, e));else {
              var s = 4 * o - 4;
              this[s + 2] = r, this[s + 3] = n, "function" == typeof t && (this[s + 0] = null === i ? t : c.domainBind(i, t)), "function" == typeof e && (this[s + 1] = null === i ? e : c.domainBind(i, e));
            }
            return this._setLength(o + 1), o;
          }, T.prototype._proxy = function (t, e) {
            this._addCallbacks(void 0, void 0, e, t, null);
          }, T.prototype._resolveCallback = function (t, e) {
            if (0 == (117506048 & this._bitField)) {
              if (t === this) return this._rejectCallback(n(), !1);
              var r = g(t, this);
              if (!(r instanceof T)) return this._fulfill(t);
              e && this._propagateFrom(r, 2);

              var i = r._target();

              if (i !== this) {
                var o = i._bitField;

                if (0 == (50397184 & o)) {
                  var s = this._length();

                  s > 0 && i._migrateCallback0(this);

                  for (var a = 1; a < s; ++a) i._migrateCallbackAt(this, a);

                  this._setFollowing(), this._setLength(0), this._setFollowee(i);
                } else if (0 != (33554432 & o)) this._fulfill(i._value());else if (0 != (16777216 & o)) this._reject(i._reason());else {
                  var u = new _("late cancellation observer");
                  i._attachExtraTrace(u), this._reject(u);
                }
              } else this._reject(n());
            }
          }, T.prototype._rejectCallback = function (t, e, r) {
            var n = c.ensureErrorObject(t),
                i = n === t;

            if (!i && !r && C.warnings()) {
              var o = "a promise was rejected with a non-error: " + c.classString(t);

              this._warn(o, !0);
            }

            this._attachExtraTrace(n, !!e && i), this._reject(t);
          }, T.prototype._resolveFromExecutor = function (t) {
            if (t !== v) {
              var e = this;
              this._captureStackTrace(), this._pushContext();

              var r = !0,
                  n = this._execute(t, function (t) {
                e._resolveCallback(t);
              }, function (t) {
                e._rejectCallback(t, r);
              });

              r = !1, this._popContext(), void 0 !== n && e._rejectCallback(n, !0);
            }
          }, T.prototype._settlePromiseFromHandler = function (t, e, r, n) {
            var i = n._bitField;

            if (0 == (65536 & i)) {
              var o;
              n._pushContext(), e === y ? r && "number" == typeof r.length ? o = k(t).apply(this._boundValue(), r) : (o = R).e = new d("cannot .spread() a non-array: " + c.classString(r)) : o = k(t).call(e, r);

              var s = n._popContext();

              0 == (65536 & (i = n._bitField)) && (o === m ? n._reject(r) : o === R ? n._rejectCallback(o.e, !1) : (C.checkForgottenReturns(o, s, "", n, this), n._resolveCallback(o)));
            }
          }, T.prototype._target = function () {
            for (var t = this; t._isFollowing();) t = t._followee();

            return t;
          }, T.prototype._followee = function () {
            return this._rejectionHandler0;
          }, T.prototype._setFollowee = function (t) {
            this._rejectionHandler0 = t;
          }, T.prototype._settlePromise = function (t, e, r, n) {
            var o = t instanceof T,
                a = this._bitField,
                u = 0 != (134217728 & a);
            0 != (65536 & a) ? (o && t._invokeInternalOnCancel(), r instanceof x && r.isFinallyHandler() ? (r.cancelPromise = t, k(e).call(r, n) === R && t._reject(R.e)) : e === i ? t._fulfill(i.call(r)) : r instanceof s ? r._promiseCancelled(t) : o || t instanceof b ? t._cancel() : r.cancel()) : "function" == typeof e ? o ? (u && t._setAsyncGuaranteed(), this._settlePromiseFromHandler(e, r, n, t)) : e.call(r, n, t) : r instanceof s ? r._isResolved() || (0 != (33554432 & a) ? r._promiseFulfilled(n, t) : r._promiseRejected(n, t)) : o && (u && t._setAsyncGuaranteed(), 0 != (33554432 & a) ? t._fulfill(n) : t._reject(n));
          }, T.prototype._settlePromiseLateCancellationObserver = function (t) {
            var e = t.handler,
                r = t.promise,
                n = t.receiver,
                i = t.value;
            "function" == typeof e ? r instanceof T ? this._settlePromiseFromHandler(e, n, i, r) : e.call(n, i, r) : r instanceof T && r._reject(i);
          }, T.prototype._settlePromiseCtx = function (t) {
            this._settlePromise(t.promise, t.handler, t.receiver, t.value);
          }, T.prototype._settlePromise0 = function (t, e, r) {
            var n = this._promise0,
                i = this._receiverAt(0);

            this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(n, t, i, e);
          }, T.prototype._clearCallbackDataAtIndex = function (t) {
            var e = 4 * t - 4;
            this[e + 2] = this[e + 3] = this[e + 0] = this[e + 1] = void 0;
          }, T.prototype._fulfill = function (t) {
            var e = this._bitField;

            if (!((117506048 & e) >>> 16)) {
              if (t === this) {
                var r = n();
                return this._attachExtraTrace(r), this._reject(r);
              }

              this._setFulfilled(), this._rejectionHandler0 = t, (65535 & e) > 0 && (0 != (134217728 & e) ? this._settlePromises() : h.settlePromises(this));
            }
          }, T.prototype._reject = function (t) {
            var e = this._bitField;

            if (!((117506048 & e) >>> 16)) {
              if (this._setRejected(), this._fulfillmentHandler0 = t, this._isFinal()) return h.fatalError(t, c.isNode);
              (65535 & e) > 0 ? h.settlePromises(this) : this._ensurePossibleRejectionHandled();
            }
          }, T.prototype._fulfillPromises = function (t, e) {
            for (var r = 1; r < t; r++) {
              var n = this._fulfillmentHandlerAt(r),
                  i = this._promiseAt(r),
                  o = this._receiverAt(r);

              this._clearCallbackDataAtIndex(r), this._settlePromise(i, n, o, e);
            }
          }, T.prototype._rejectPromises = function (t, e) {
            for (var r = 1; r < t; r++) {
              var n = this._rejectionHandlerAt(r),
                  i = this._promiseAt(r),
                  o = this._receiverAt(r);

              this._clearCallbackDataAtIndex(r), this._settlePromise(i, n, o, e);
            }
          }, T.prototype._settlePromises = function () {
            var t = this._bitField,
                e = 65535 & t;

            if (e > 0) {
              if (0 != (16842752 & t)) {
                var r = this._fulfillmentHandler0;
                this._settlePromise0(this._rejectionHandler0, r, t), this._rejectPromises(e, r);
              } else {
                var n = this._rejectionHandler0;
                this._settlePromise0(this._fulfillmentHandler0, n, t), this._fulfillPromises(e, n);
              }

              this._setLength(0);
            }

            this._clearCancellationData();
          }, T.prototype._settledValue = function () {
            var t = this._bitField;
            return 0 != (33554432 & t) ? this._rejectionHandler0 : 0 != (16777216 & t) ? this._fulfillmentHandler0 : void 0;
          }, T.defer = T.pending = function () {
            return C.deprecated("Promise.defer", "new Promise"), {
              promise: new T(v),
              resolve: P,
              reject: O
            };
          }, c.notEnumerableProp(T, "_makeSelfResolutionError", n), t("./method")(T, v, g, o, C), t("./bind")(T, v, g, C), t("./cancel")(T, b, o, C), t("./direct_resolve")(T), t("./synchronous_inspection")(T), t("./join")(T, b, g, v, h, a), T.Promise = T, T.version = "3.5.1", t("./map.js")(T, b, o, g, v, C), t("./call_get.js")(T), t("./using.js")(T, o, g, E, v, C), t("./timers.js")(T, v, C), t("./generators.js")(T, o, v, g, s, C), t("./nodeify.js")(T), t("./promisify.js")(T, v), t("./props.js")(T, b, g, o), t("./race.js")(T, v, g, o), t("./reduce.js")(T, b, o, g, v, C), t("./settle.js")(T, b, C), t("./some.js")(T, b, o), t("./filter.js")(T, v), t("./each.js")(T, v), t("./any.js")(T), c.toFastProperties(T), c.toFastProperties(T.prototype), A({
            a: 1
          }), A({
            b: 2
          }), A({
            c: 3
          }), A(1), A(function () {}), A(void 0), A(!1), A(new T(v)), C.setBounds(f.firstLineError, c.lastLineError), T;
        };
      }, {
        "./any.js": 1,
        "./async": 2,
        "./bind": 3,
        "./call_get.js": 5,
        "./cancel": 6,
        "./catch_filter": 7,
        "./context": 8,
        "./debuggability": 9,
        "./direct_resolve": 10,
        "./each.js": 11,
        "./errors": 12,
        "./es5": 13,
        "./filter.js": 14,
        "./finally": 15,
        "./generators.js": 16,
        "./join": 17,
        "./map.js": 18,
        "./method": 19,
        "./nodeback": 20,
        "./nodeify.js": 21,
        "./promise_array": 23,
        "./promisify.js": 24,
        "./props.js": 25,
        "./race.js": 27,
        "./reduce.js": 28,
        "./settle.js": 30,
        "./some.js": 31,
        "./synchronous_inspection": 32,
        "./thenables": 33,
        "./timers.js": 34,
        "./using.js": 35,
        "./util": 36
      }],
      23: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n, i, o) {
          var s = t("./util");

          function a(t) {
            var n = this._promise = new e(r);
            t instanceof e && n._propagateFrom(t, 3), n._setOnCancel(this), this._values = t, this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
          }

          return s.isArray, s.inherits(a, o), a.prototype.length = function () {
            return this._length;
          }, a.prototype.promise = function () {
            return this._promise;
          }, a.prototype._init = function t(r, o) {
            var a = n(this._values, this._promise);

            if (a instanceof e) {
              var u = (a = a._target())._bitField;

              if (this._values = a, 0 == (50397184 & u)) return this._promise._setAsyncGuaranteed(), a._then(t, this._reject, void 0, this, o);
              if (0 == (33554432 & u)) return 0 != (16777216 & u) ? this._reject(a._reason()) : this._cancel();
              a = a._value();
            }

            if (null !== (a = s.asArray(a))) 0 !== a.length ? this._iterate(a) : -5 === o ? this._resolveEmptyArray() : this._resolve(function (t) {
              switch (o) {
                case -2:
                  return [];

                case -3:
                  return {};

                case -6:
                  return new Map();
              }
            }());else {
              var c = i("expecting an array or an iterable object but got " + s.classString(a)).reason();

              this._promise._rejectCallback(c, !1);
            }
          }, a.prototype._iterate = function (t) {
            var r = this.getActualLength(t.length);
            this._length = r, this._values = this.shouldCopyValues() ? new Array(r) : this._values;

            for (var i = this._promise, o = !1, s = null, a = 0; a < r; ++a) {
              var u = n(t[a], i);
              s = u instanceof e ? (u = u._target())._bitField : null, o ? null !== s && u.suppressUnhandledRejections() : null !== s ? 0 == (50397184 & s) ? (u._proxy(this, a), this._values[a] = u) : o = 0 != (33554432 & s) ? this._promiseFulfilled(u._value(), a) : 0 != (16777216 & s) ? this._promiseRejected(u._reason(), a) : this._promiseCancelled(a) : o = this._promiseFulfilled(u, a);
            }

            o || i._setAsyncGuaranteed();
          }, a.prototype._isResolved = function () {
            return null === this._values;
          }, a.prototype._resolve = function (t) {
            this._values = null, this._promise._fulfill(t);
          }, a.prototype._cancel = function () {
            !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel());
          }, a.prototype._reject = function (t) {
            this._values = null, this._promise._rejectCallback(t, !1);
          }, a.prototype._promiseFulfilled = function (t, e) {
            return this._values[e] = t, ++this._totalResolved >= this._length && (this._resolve(this._values), !0);
          }, a.prototype._promiseCancelled = function () {
            return this._cancel(), !0;
          }, a.prototype._promiseRejected = function (t) {
            return this._totalResolved++, this._reject(t), !0;
          }, a.prototype._resultCancelled = function () {
            if (!this._isResolved()) {
              var t = this._values;
              if (this._cancel(), t instanceof e) t.cancel();else for (var r = 0; r < t.length; ++r) t[r] instanceof e && t[r].cancel();
            }
          }, a.prototype.shouldCopyValues = function () {
            return !0;
          }, a.prototype.getActualLength = function (t) {
            return t;
          }, a;
        };
      }, {
        "./util": 36
      }],
      24: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r) {
          var n = {},
              i = t("./util"),
              o = t("./nodeback"),
              s = i.withAppended,
              a = i.maybeWrapAsError,
              u = i.canEvaluate,
              c = t("./errors").TypeError,
              l = {
            __isPromisified__: !0
          },
              f = new RegExp("^(?:" + ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"].join("|") + ")$"),
              h = function (t) {
            return i.isIdentifier(t) && "_" !== t.charAt(0) && "constructor" !== t;
          };

          function p(t) {
            return !f.test(t);
          }

          function d(t) {
            try {
              return !0 === t.__isPromisified__;
            } catch (t) {
              return !1;
            }
          }

          function _(t, e, r) {
            var n = i.getDataPropertyOrDefault(t, e + r, l);
            return !!n && d(n);
          }

          function v(t, e, r, n) {
            for (var o = i.inheritedDataKeys(t), s = [], a = 0; a < o.length; ++a) {
              var u = o[a],
                  l = t[u],
                  f = n === h || h(u, l, t);
              "function" != typeof l || d(l) || _(t, u, e) || !n(u, l, t, f) || s.push(u, l);
            }

            return function (t, e, r) {
              for (var n = 0; n < t.length; n += 2) {
                var i = t[n];
                if (r.test(i)) for (var o = i.replace(r, ""), s = 0; s < t.length; s += 2) if (t[s] === o) throw new c("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", e));
              }
            }(s, e, r), s;
          }

          var y = function (t) {
            return t.replace(/([$])/, "\\$");
          },
              m = u ? void 0 : function (t, u, c, l, f, h) {
            var p = function () {
              return this;
            }(),
                d = t;

            function _() {
              var i = u;
              u === n && (i = this);
              var c = new e(r);

              c._captureStackTrace();

              var l = "string" == typeof d && this !== p ? this[d] : t,
                  f = o(c, h);

              try {
                l.apply(i, s(arguments, f));
              } catch (t) {
                c._rejectCallback(a(t), !0, !0);
              }

              return c._isFateSealed() || c._setAsyncGuaranteed(), c;
            }

            return "string" == typeof d && (t = l), i.notEnumerableProp(_, "__isPromisified__", !0), _;
          };

          function g(t, e, r, o, s) {
            for (var a = new RegExp(y(e) + "$"), u = v(t, e, a, r), c = 0, l = u.length; c < l; c += 2) {
              var f = u[c],
                  h = u[c + 1],
                  p = f + e;
              if (o === m) t[p] = m(f, n, f, h, e, s);else {
                var d = o(h, function () {
                  return m(f, n, f, h, e, s);
                });
                i.notEnumerableProp(d, "__isPromisified__", !0), t[p] = d;
              }
            }

            return i.toFastProperties(t), t;
          }

          e.promisify = function (t, e) {
            if ("function" != typeof t) throw new c("expecting a function but got " + i.classString(t));
            if (d(t)) return t;

            var r = void 0 === (e = Object(e)).context ? n : e.context,
                o = !!e.multiArgs,
                s = function (t, e, r) {
              return m(t, e, void 0, t, null, o);
            }(t, r);

            return i.copyDescriptors(t, s, p), s;
          }, e.promisifyAll = function (t, e) {
            if ("function" != typeof t && "object" != _typeof(t)) throw new c("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
            var r = !!(e = Object(e)).multiArgs,
                n = e.suffix;
            "string" != typeof n && (n = "Async");
            var o = e.filter;
            "function" != typeof o && (o = h);
            var s = e.promisifier;
            if ("function" != typeof s && (s = m), !i.isIdentifier(n)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");

            for (var a = i.inheritedDataKeys(t), u = 0; u < a.length; ++u) {
              var l = t[a[u]];
              "constructor" !== a[u] && i.isClass(l) && (g(l.prototype, n, o, s, r), g(l, n, o, s, r));
            }

            return g(t, n, o, s, r);
          };
        };
      }, {
        "./errors": 12,
        "./nodeback": 20,
        "./util": 36
      }],
      25: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n, i) {
          var o,
              s = t("./util"),
              a = s.isObject,
              u = t("./es5");
          "function" == typeof Map && (o = Map);

          var c = function () {
            var t = 0,
                e = 0;

            function r(r, n) {
              this[t] = r, this[t + e] = n, t++;
            }

            return function (n) {
              e = n.size, t = 0;
              var i = new Array(2 * n.size);
              return n.forEach(r, i), i;
            };
          }();

          function l(t) {
            var e,
                r = !1;
            if (void 0 !== o && t instanceof o) e = c(t), r = !0;else {
              var n = u.keys(t),
                  i = n.length;
              e = new Array(2 * i);

              for (var s = 0; s < i; ++s) {
                var a = n[s];
                e[s] = t[a], e[s + i] = a;
              }
            }
            this.constructor$(e), this._isMap = r, this._init$(void 0, r ? -6 : -3);
          }

          function f(t) {
            var r,
                o = n(t);
            return a(o) ? (r = o instanceof e ? o._then(e.props, void 0, void 0, void 0, void 0) : new l(o).promise(), o instanceof e && r._propagateFrom(o, 2), r) : i("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
          }

          s.inherits(l, r), l.prototype._init = function () {}, l.prototype._promiseFulfilled = function (t, e) {
            if (this._values[e] = t, ++this._totalResolved >= this._length) {
              var r;
              if (this._isMap) r = function (t) {
                for (var e = new o(), r = t.length / 2 | 0, n = 0; n < r; ++n) {
                  var i = t[r + n],
                      s = t[n];
                  e.set(i, s);
                }

                return e;
              }(this._values);else {
                r = {};

                for (var n = this.length(), i = 0, s = this.length(); i < s; ++i) r[this._values[i + n]] = this._values[i];
              }
              return this._resolve(r), !0;
            }

            return !1;
          }, l.prototype.shouldCopyValues = function () {
            return !1;
          }, l.prototype.getActualLength = function (t) {
            return t >> 1;
          }, e.prototype.props = function () {
            return f(this);
          }, e.props = function (t) {
            return f(t);
          };
        };
      }, {
        "./es5": 13,
        "./util": 36
      }],
      26: [function (t, e, r) {
        "use strict";

        function n(t) {
          this._capacity = t, this._length = 0, this._front = 0;
        }

        n.prototype._willBeOverCapacity = function (t) {
          return this._capacity < t;
        }, n.prototype._pushOne = function (t) {
          var e = this.length();
          this._checkCapacity(e + 1), this[this._front + e & this._capacity - 1] = t, this._length = e + 1;
        }, n.prototype.push = function (t, e, r) {
          var n = this.length() + 3;
          if (this._willBeOverCapacity(n)) return this._pushOne(t), this._pushOne(e), void this._pushOne(r);
          var i = this._front + n - 3;

          this._checkCapacity(n);

          var o = this._capacity - 1;
          this[i + 0 & o] = t, this[i + 1 & o] = e, this[i + 2 & o] = r, this._length = n;
        }, n.prototype.shift = function () {
          var t = this._front,
              e = this[t];
          return this[t] = void 0, this._front = t + 1 & this._capacity - 1, this._length--, e;
        }, n.prototype.length = function () {
          return this._length;
        }, n.prototype._checkCapacity = function (t) {
          this._capacity < t && this._resizeTo(this._capacity << 1);
        }, n.prototype._resizeTo = function (t) {
          var e = this._capacity;
          this._capacity = t, function (t, e, r, n, i) {
            for (var o = 0; o < i; ++o) r[o + n] = t[o + 0], t[o + 0] = void 0;
          }(this, 0, this, e, this._front + this._length & e - 1);
        }, e.exports = n;
      }, {}],
      27: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n, i) {
          var o = t("./util"),
              s = function (t) {
            return t.then(function (e) {
              return a(e, t);
            });
          };

          function a(t, a) {
            var u = n(t);
            if (u instanceof e) return s(u);
            if (null === (t = o.asArray(t))) return i("expecting an array or an iterable object but got " + o.classString(t));
            var c = new e(r);
            void 0 !== a && c._propagateFrom(a, 3);

            for (var l = c._fulfill, f = c._reject, h = 0, p = t.length; h < p; ++h) {
              var d = t[h];
              (void 0 !== d || h in t) && e.cast(d)._then(l, f, void 0, c, null);
            }

            return c;
          }

          e.race = function (t) {
            return a(t, void 0);
          }, e.prototype.race = function () {
            return a(this, void 0);
          };
        };
      }, {
        "./util": 36
      }],
      28: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n, i, o, s) {
          var a = e._getDomain,
              u = t("./util"),
              c = u.tryCatch;

          function l(t, r, n, i) {
            this.constructor$(t);
            var s = a();
            this._fn = null === s ? r : u.domainBind(s, r), void 0 !== n && (n = e.resolve(n))._attachCancellationCallback(this), this._initialValue = n, this._currentCancellable = null, this._eachValues = i === o ? Array(this._length) : 0 === i ? null : void 0, this._promise._captureStackTrace(), this._init$(void 0, -5);
          }

          function f(t, e) {
            this.isFulfilled() ? e._resolve(t) : e._reject(t);
          }

          function h(t, e, r, i) {
            return "function" != typeof e ? n("expecting a function but got " + u.classString(e)) : new l(t, e, r, i).promise();
          }

          function p(t) {
            this.accum = t, this.array._gotAccum(t);
            var r = i(this.value, this.array._promise);
            return r instanceof e ? (this.array._currentCancellable = r, r._then(d, void 0, void 0, this, void 0)) : d.call(this, r);
          }

          function d(t) {
            var r,
                n = this.array,
                i = n._promise,
                o = c(n._fn);
            i._pushContext(), (r = void 0 !== n._eachValues ? o.call(i._boundValue(), t, this.index, this.length) : o.call(i._boundValue(), this.accum, t, this.index, this.length)) instanceof e && (n._currentCancellable = r);

            var a = i._popContext();

            return s.checkForgottenReturns(r, a, void 0 !== n._eachValues ? "Promise.each" : "Promise.reduce", i), r;
          }

          u.inherits(l, r), l.prototype._gotAccum = function (t) {
            void 0 !== this._eachValues && null !== this._eachValues && t !== o && this._eachValues.push(t);
          }, l.prototype._eachComplete = function (t) {
            return null !== this._eachValues && this._eachValues.push(t), this._eachValues;
          }, l.prototype._init = function () {}, l.prototype._resolveEmptyArray = function () {
            this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue);
          }, l.prototype.shouldCopyValues = function () {
            return !1;
          }, l.prototype._resolve = function (t) {
            this._promise._resolveCallback(t), this._values = null;
          }, l.prototype._resultCancelled = function (t) {
            if (t === this._initialValue) return this._cancel();
            this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e && this._currentCancellable.cancel(), this._initialValue instanceof e && this._initialValue.cancel());
          }, l.prototype._iterate = function (t) {
            var r, n;
            this._values = t;
            var i = t.length;
            if (void 0 !== this._initialValue ? (r = this._initialValue, n = 0) : (r = e.resolve(t[0]), n = 1), this._currentCancellable = r, !r.isRejected()) for (; n < i; ++n) {
              var o = {
                accum: null,
                value: t[n],
                index: n,
                length: i,
                array: this
              };
              r = r._then(p, void 0, void 0, o, void 0);
            }
            void 0 !== this._eachValues && (r = r._then(this._eachComplete, void 0, void 0, this, void 0)), r._then(f, f, void 0, r, this);
          }, e.prototype.reduce = function (t, e) {
            return h(this, t, e, null);
          }, e.reduce = function (t, e, r, n) {
            return h(t, e, r, n);
          };
        };
      }, {
        "./util": 36
      }],
      29: [function (t, i, o) {
        "use strict";

        var s,
            a = t("./util"),
            u = a.getNativePromise();

        if (a.isNode && "undefined" == typeof MutationObserver) {
          var c = r.setImmediate,
              l = e.nextTick;
          s = a.isRecentNode ? function (t) {
            c.call(r, t);
          } : function (t) {
            l.call(e, t);
          };
        } else if ("function" == typeof u && "function" == typeof u.resolve) {
          var f = u.resolve();

          s = function (t) {
            f.then(t);
          };
        } else s = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? void 0 !== n ? function (t) {
          n(t);
        } : "undefined" != typeof setTimeout ? function (t) {
          setTimeout(t, 0);
        } : function () {
          throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
        } : function () {
          var t = document.createElement("div"),
              e = {
            attributes: !0
          },
              r = !1,
              n = document.createElement("div");
          return new MutationObserver(function () {
            t.classList.toggle("foo"), r = !1;
          }).observe(n, e), function (i) {
            var o = new MutationObserver(function () {
              o.disconnect(), i();
            });
            o.observe(t, e), r || (r = !0, n.classList.toggle("foo"));
          };
        }();

        i.exports = s;
      }, {
        "./util": 36
      }],
      30: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n) {
          var i = e.PromiseInspection;

          function o(t) {
            this.constructor$(t);
          }

          t("./util").inherits(o, r), o.prototype._promiseResolved = function (t, e) {
            return this._values[t] = e, ++this._totalResolved >= this._length && (this._resolve(this._values), !0);
          }, o.prototype._promiseFulfilled = function (t, e) {
            var r = new i();
            return r._bitField = 33554432, r._settledValueField = t, this._promiseResolved(e, r);
          }, o.prototype._promiseRejected = function (t, e) {
            var r = new i();
            return r._bitField = 16777216, r._settledValueField = t, this._promiseResolved(e, r);
          }, e.settle = function (t) {
            return n.deprecated(".settle()", ".reflect()"), new o(t).promise();
          }, e.prototype.settle = function () {
            return e.settle(this);
          };
        };
      }, {
        "./util": 36
      }],
      31: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n) {
          var i = t("./util"),
              o = t("./errors").RangeError,
              s = t("./errors").AggregateError,
              a = i.isArray,
              u = {};

          function c(t) {
            this.constructor$(t), this._howMany = 0, this._unwrap = !1, this._initialized = !1;
          }

          function l(t, e) {
            if ((0 | e) !== e || e < 0) return n("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
            var r = new c(t),
                i = r.promise();
            return r.setHowMany(e), r.init(), i;
          }

          i.inherits(c, r), c.prototype._init = function () {
            if (this._initialized) if (0 !== this._howMany) {
              this._init$(void 0, -5);

              var t = a(this._values);
              !this._isResolved() && t && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
            } else this._resolve([]);
          }, c.prototype.init = function () {
            this._initialized = !0, this._init();
          }, c.prototype.setUnwrap = function () {
            this._unwrap = !0;
          }, c.prototype.howMany = function () {
            return this._howMany;
          }, c.prototype.setHowMany = function (t) {
            this._howMany = t;
          }, c.prototype._promiseFulfilled = function (t) {
            return this._addFulfilled(t), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), !0);
          }, c.prototype._promiseRejected = function (t) {
            return this._addRejected(t), this._checkOutcome();
          }, c.prototype._promiseCancelled = function () {
            return this._values instanceof e || null == this._values ? this._cancel() : (this._addRejected(u), this._checkOutcome());
          }, c.prototype._checkOutcome = function () {
            if (this.howMany() > this._canPossiblyFulfill()) {
              for (var t = new s(), e = this.length(); e < this._values.length; ++e) this._values[e] !== u && t.push(this._values[e]);

              return t.length > 0 ? this._reject(t) : this._cancel(), !0;
            }

            return !1;
          }, c.prototype._fulfilled = function () {
            return this._totalResolved;
          }, c.prototype._rejected = function () {
            return this._values.length - this.length();
          }, c.prototype._addRejected = function (t) {
            this._values.push(t);
          }, c.prototype._addFulfilled = function (t) {
            this._values[this._totalResolved++] = t;
          }, c.prototype._canPossiblyFulfill = function () {
            return this.length() - this._rejected();
          }, c.prototype._getRangeError = function (t) {
            var e = "Input array must contain at least " + this._howMany + " items but contains only " + t + " items";
            return new o(e);
          }, c.prototype._resolveEmptyArray = function () {
            this._reject(this._getRangeError(0));
          }, e.some = function (t, e) {
            return l(t, e);
          }, e.prototype.some = function (t) {
            return l(this, t);
          }, e._SomePromiseArray = c;
        };
      }, {
        "./errors": 12,
        "./util": 36
      }],
      32: [function (t, e, r) {
        "use strict";

        e.exports = function (t) {
          function e(t) {
            void 0 !== t ? (t = t._target(), this._bitField = t._bitField, this._settledValueField = t._isFateSealed() ? t._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0);
          }

          e.prototype._settledValue = function () {
            return this._settledValueField;
          };

          var r = e.prototype.value = function () {
            if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
            return this._settledValue();
          },
              n = e.prototype.error = e.prototype.reason = function () {
            if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
            return this._settledValue();
          },
              i = e.prototype.isFulfilled = function () {
            return 0 != (33554432 & this._bitField);
          },
              o = e.prototype.isRejected = function () {
            return 0 != (16777216 & this._bitField);
          },
              s = e.prototype.isPending = function () {
            return 0 == (50397184 & this._bitField);
          },
              a = e.prototype.isResolved = function () {
            return 0 != (50331648 & this._bitField);
          };

          e.prototype.isCancelled = function () {
            return 0 != (8454144 & this._bitField);
          }, t.prototype.__isCancelled = function () {
            return 65536 == (65536 & this._bitField);
          }, t.prototype._isCancelled = function () {
            return this._target().__isCancelled();
          }, t.prototype.isCancelled = function () {
            return 0 != (8454144 & this._target()._bitField);
          }, t.prototype.isPending = function () {
            return s.call(this._target());
          }, t.prototype.isRejected = function () {
            return o.call(this._target());
          }, t.prototype.isFulfilled = function () {
            return i.call(this._target());
          }, t.prototype.isResolved = function () {
            return a.call(this._target());
          }, t.prototype.value = function () {
            return r.call(this._target());
          }, t.prototype.reason = function () {
            var t = this._target();

            return t._unsetRejectionIsUnhandled(), n.call(t);
          }, t.prototype._value = function () {
            return this._settledValue();
          }, t.prototype._reason = function () {
            return this._unsetRejectionIsUnhandled(), this._settledValue();
          }, t.PromiseInspection = e;
        };
      }, {}],
      33: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r) {
          var n = t("./util"),
              i = n.errorObj,
              o = n.isObject,
              s = {}.hasOwnProperty;
          return function (t, a) {
            if (o(t)) {
              if (t instanceof e) return t;

              var u = function (t) {
                try {
                  return function (t) {
                    return t.then;
                  }(t);
                } catch (t) {
                  return i.e = t, i;
                }
              }(t);

              if (u === i) {
                a && a._pushContext();
                var c = e.reject(u.e);
                return a && a._popContext(), c;
              }

              if ("function" == typeof u) return function (t) {
                try {
                  return s.call(t, "_promise0");
                } catch (t) {
                  return !1;
                }
              }(t) ? (c = new e(r), t._then(c._fulfill, c._reject, void 0, c, null), c) : function (t, o, s) {
                var a = new e(r),
                    u = a;
                s && s._pushContext(), a._captureStackTrace(), s && s._popContext();
                var c = !0,
                    l = n.tryCatch(o).call(t, function (t) {
                  a && (a._resolveCallback(t), a = null);
                }, function (t) {
                  a && (a._rejectCallback(t, c, !0), a = null);
                });
                return c = !1, a && l === i && (a._rejectCallback(l.e, !0, !0), a = null), u;
              }(t, u, a);
            }

            return t;
          };
        };
      }, {
        "./util": 36
      }],
      34: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n) {
          var i = t("./util"),
              o = e.TimeoutError;

          function s(t) {
            this.handle = t;
          }

          s.prototype._resultCancelled = function () {
            clearTimeout(this.handle);
          };

          var a = function (t) {
            return u(+this).thenReturn(t);
          },
              u = e.delay = function (t, i) {
            var o, u;
            return void 0 !== i ? (o = e.resolve(i)._then(a, null, null, t, void 0), n.cancellation() && i instanceof e && o._setOnCancel(i)) : (o = new e(r), u = setTimeout(function () {
              o._fulfill();
            }, +t), n.cancellation() && o._setOnCancel(new s(u)), o._captureStackTrace()), o._setAsyncGuaranteed(), o;
          };

          function c(t) {
            return clearTimeout(this.handle), t;
          }

          function l(t) {
            throw clearTimeout(this.handle), t;
          }

          e.prototype.delay = function (t) {
            return u(t, this);
          }, e.prototype.timeout = function (t, e) {
            var r, a;
            t = +t;
            var u = new s(setTimeout(function () {
              r.isPending() && function (t, e, r) {
                var n;
                n = "string" != typeof e ? e instanceof Error ? e : new o("operation timed out") : new o(e), i.markAsOriginatingFromRejection(n), t._attachExtraTrace(n), t._reject(n), null != r && r.cancel();
              }(r, e, a);
            }, t));
            return n.cancellation() ? (a = this.then(), (r = a._then(c, l, void 0, u, void 0))._setOnCancel(u)) : r = this._then(c, l, void 0, u, void 0), r;
          };
        };
      }, {
        "./util": 36
      }],
      35: [function (t, e, r) {
        "use strict";

        e.exports = function (e, r, n, i, o, s) {
          var a = t("./util"),
              u = t("./errors").TypeError,
              c = t("./util").inherits,
              l = a.errorObj,
              f = a.tryCatch,
              h = {};

          function p(t) {
            setTimeout(function () {
              throw t;
            }, 0);
          }

          function d(t, r) {
            var i = 0,
                s = t.length,
                a = new e(o);
            return function o() {
              if (i >= s) return a._fulfill();

              var u = function (t) {
                var e = n(t);
                return e !== t && "function" == typeof t._isDisposable && "function" == typeof t._getDisposer && t._isDisposable() && e._setDisposable(t._getDisposer()), e;
              }(t[i++]);

              if (u instanceof e && u._isDisposable()) {
                try {
                  u = n(u._getDisposer().tryDispose(r), t.promise);
                } catch (t) {
                  return p(t);
                }

                if (u instanceof e) return u._then(o, p, null, null, null);
              }

              o();
            }(), a;
          }

          function _(t, e, r) {
            this._data = t, this._promise = e, this._context = r;
          }

          function v(t, e, r) {
            this.constructor$(t, e, r);
          }

          function y(t) {
            return _.isDisposer(t) ? (this.resources[this.index]._setDisposable(t), t.promise()) : t;
          }

          function m(t) {
            this.length = t, this.promise = null, this[t - 1] = null;
          }

          _.prototype.data = function () {
            return this._data;
          }, _.prototype.promise = function () {
            return this._promise;
          }, _.prototype.resource = function () {
            return this.promise().isFulfilled() ? this.promise().value() : h;
          }, _.prototype.tryDispose = function (t) {
            var e = this.resource(),
                r = this._context;
            void 0 !== r && r._pushContext();
            var n = e !== h ? this.doDispose(e, t) : null;
            return void 0 !== r && r._popContext(), this._promise._unsetDisposable(), this._data = null, n;
          }, _.isDisposer = function (t) {
            return null != t && "function" == typeof t.resource && "function" == typeof t.tryDispose;
          }, c(v, _), v.prototype.doDispose = function (t, e) {
            return this.data().call(t, t, e);
          }, m.prototype._resultCancelled = function () {
            for (var t = this.length, r = 0; r < t; ++r) {
              var n = this[r];
              n instanceof e && n.cancel();
            }
          }, e.using = function () {
            var t = arguments.length;
            if (t < 2) return r("you must pass at least 2 arguments to Promise.using");
            var i,
                o = arguments[t - 1];
            if ("function" != typeof o) return r("expecting a function but got " + a.classString(o));
            var u = !0;
            2 === t && Array.isArray(arguments[0]) ? (t = (i = arguments[0]).length, u = !1) : (i = arguments, t--);

            for (var c = new m(t), h = 0; h < t; ++h) {
              var p = i[h];

              if (_.isDisposer(p)) {
                var v = p;

                (p = p.promise())._setDisposable(v);
              } else {
                var g = n(p);
                g instanceof e && (p = g._then(y, null, null, {
                  resources: c,
                  index: h
                }, void 0));
              }

              c[h] = p;
            }

            var b = new Array(c.length);

            for (h = 0; h < b.length; ++h) b[h] = e.resolve(c[h]).reflect();

            var w = e.all(b).then(function (t) {
              for (var e = 0; e < t.length; ++e) {
                var r = t[e];
                if (r.isRejected()) return l.e = r.error(), l;
                if (!r.isFulfilled()) return void w.cancel();
                t[e] = r.value();
              }

              E._pushContext(), o = f(o);

              var n = u ? o.apply(void 0, t) : o(t),
                  i = E._popContext();

              return s.checkForgottenReturns(n, i, "Promise.using", E), n;
            }),
                E = w.lastly(function () {
              var t = new e.PromiseInspection(w);
              return d(c, t);
            });
            return c.promise = E, E._setOnCancel(c), E;
          }, e.prototype._setDisposable = function (t) {
            this._bitField = 131072 | this._bitField, this._disposer = t;
          }, e.prototype._isDisposable = function () {
            return (131072 & this._bitField) > 0;
          }, e.prototype._getDisposer = function () {
            return this._disposer;
          }, e.prototype._unsetDisposable = function () {
            this._bitField = -131073 & this._bitField, this._disposer = void 0;
          }, e.prototype.disposer = function (t) {
            if ("function" == typeof t) return new v(t, this, i());
            throw new u();
          };
        };
      }, {
        "./errors": 12,
        "./util": 36
      }],
      36: [function (t, n, i) {
        "use strict";

        var o,
            s = t("./es5"),
            a = "undefined" == typeof navigator,
            u = {
          e: {}
        },
            c = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== r ? r : void 0 !== this ? this : null;

        function l() {
          try {
            var t = o;
            return o = null, t.apply(this, arguments);
          } catch (t) {
            return u.e = t, u;
          }
        }

        function f(t) {
          return null == t || !0 === t || !1 === t || "string" == typeof t || "number" == typeof t;
        }

        function h(t, e, r) {
          if (f(t)) return t;
          var n = {
            value: r,
            configurable: !0,
            enumerable: !1,
            writable: !0
          };
          return s.defineProperty(t, e, n), t;
        }

        var p = function () {
          var t = [Array.prototype, Object.prototype, Function.prototype],
              e = function (e) {
            for (var r = 0; r < t.length; ++r) if (t[r] === e) return !0;

            return !1;
          };

          if (s.isES5) {
            var r = Object.getOwnPropertyNames;
            return function (t) {
              for (var n = [], i = Object.create(null); null != t && !e(t);) {
                var o;

                try {
                  o = r(t);
                } catch (t) {
                  return n;
                }

                for (var a = 0; a < o.length; ++a) {
                  var u = o[a];

                  if (!i[u]) {
                    i[u] = !0;
                    var c = Object.getOwnPropertyDescriptor(t, u);
                    null != c && null == c.get && null == c.set && n.push(u);
                  }
                }

                t = s.getPrototypeOf(t);
              }

              return n;
            };
          }

          var n = {}.hasOwnProperty;
          return function (r) {
            if (e(r)) return [];
            var i = [];

            t: for (var o in r) if (n.call(r, o)) i.push(o);else {
              for (var s = 0; s < t.length; ++s) if (n.call(t[s], o)) continue t;

              i.push(o);
            }

            return i;
          };
        }(),
            d = /this\s*\.\s*\S+\s*=/,
            _ = /^[a-z$_][a-z$_0-9]*$/i;

        function v(t) {
          try {
            return t + "";
          } catch (t) {
            return "[no string representation]";
          }
        }

        function y(t) {
          return t instanceof Error || null !== t && "object" == _typeof(t) && "string" == typeof t.message && "string" == typeof t.name;
        }

        function m(t) {
          return y(t) && s.propertyIsWritable(t, "stack");
        }

        var g = "stack" in new Error() ? function (t) {
          return m(t) ? t : new Error(v(t));
        } : function (t) {
          if (m(t)) return t;

          try {
            throw new Error(v(t));
          } catch (t) {
            return t;
          }
        };

        function b(t) {
          return {}.toString.call(t);
        }

        var w = function (t) {
          return s.isArray(t) ? t : null;
        };

        if ("undefined" != typeof Symbol && Symbol.iterator) {
          var E = "function" == typeof Array.from ? function (t) {
            return Array.from(t);
          } : function (t) {
            for (var e, r = [], n = t[Symbol.iterator](); !(e = n.next()).done;) r.push(e.value);

            return r;
          };

          w = function (t) {
            return s.isArray(t) ? t : null != t && "function" == typeof t[Symbol.iterator] ? E(t) : null;
          };
        }

        var C = void 0 !== e && "[object process]" === b(e).toLowerCase(),
            x = void 0 !== e && void 0 !== e.env,
            j = {
          isClass: function (t) {
            try {
              if ("function" == typeof t) {
                var e = s.names(t.prototype),
                    r = s.isES5 && e.length > 1,
                    n = e.length > 0 && !(1 === e.length && "constructor" === e[0]),
                    i = d.test(t + "") && s.names(t).length > 0;
                if (r || n || i) return !0;
              }

              return !1;
            } catch (t) {
              return !1;
            }
          },
          isIdentifier: function (t) {
            return _.test(t);
          },
          inheritedDataKeys: p,
          getDataPropertyOrDefault: function (t, e, r) {
            if (!s.isES5) return {}.hasOwnProperty.call(t, e) ? t[e] : void 0;
            var n = Object.getOwnPropertyDescriptor(t, e);
            return null != n ? null == n.get && null == n.set ? n.value : r : void 0;
          },
          thrower: function (t) {
            throw t;
          },
          isArray: s.isArray,
          asArray: w,
          notEnumerableProp: h,
          isPrimitive: f,
          isObject: function (t) {
            return "function" == typeof t || "object" == _typeof(t) && null !== t;
          },
          isError: y,
          canEvaluate: a,
          errorObj: u,
          tryCatch: function (t) {
            return o = t, l;
          },
          inherits: function (t, e) {
            var r = {}.hasOwnProperty;

            function n() {
              for (var n in this.constructor = t, this.constructor$ = e, e.prototype) r.call(e.prototype, n) && "$" !== n.charAt(n.length - 1) && (this[n + "$"] = e.prototype[n]);
            }

            return n.prototype = e.prototype, t.prototype = new n(), t.prototype;
          },
          withAppended: function (t, e) {
            var r,
                n = t.length,
                i = new Array(n + 1);

            for (r = 0; r < n; ++r) i[r] = t[r];

            return i[r] = e, i;
          },
          maybeWrapAsError: function (t) {
            return f(t) ? new Error(v(t)) : t;
          },
          toFastProperties: function (t) {
            function e() {}

            e.prototype = t;

            for (var r = 8; r--;) new e();

            return t;
          },
          filledRange: function (t, e, r) {
            for (var n = new Array(t), i = 0; i < t; ++i) n[i] = e + i + r;

            return n;
          },
          toString: v,
          canAttachTrace: m,
          ensureErrorObject: g,
          originatesFromRejection: function (t) {
            return null != t && (t instanceof Error.__BluebirdErrorTypes__.OperationalError || !0 === t.isOperational);
          },
          markAsOriginatingFromRejection: function (t) {
            try {
              h(t, "isOperational", !0);
            } catch (t) {}
          },
          classString: b,
          copyDescriptors: function (t, e, r) {
            for (var n = s.names(t), i = 0; i < n.length; ++i) {
              var o = n[i];
              if (r(o)) try {
                s.defineProperty(e, o, s.getDescriptor(t, o));
              } catch (t) {}
            }
          },
          hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes,
          isNode: C,
          hasEnvVariables: x,
          env: function (t) {
            return x ? e.env[t] : void 0;
          },
          global: c,
          getNativePromise: function () {
            if ("function" == typeof Promise) try {
              var t = new Promise(function () {});
              if ("[object Promise]" === {}.toString.call(t)) return Promise;
            } catch (t) {}
          },
          domainBind: function (t, e) {
            return t.bind(e);
          }
        };
        j.isRecentNode = j.isNode && function () {
          var t = e.versions.node.split(".").map(Number);
          return 0 === t[0] && t[1] > 10 || t[0] > 0;
        }(), j.isNode && j.toFastProperties(e);

        try {
          throw new Error();
        } catch (t) {
          j.lastLineError = t;
        }

        n.exports = j;
      }, {
        "./es5": 13
      }]
    }, {}, [4])(4), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise);
  }).call(this, r(4), r(0), r(11).setImmediate);
}, function (t, e, r) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.default = function (t, e) {
    if (!e.eol && t) for (var r = 0, n = t.length; r < n; r++) if ("\r" === t[r]) {
      if ("\n" === t[r + 1]) {
        e.eol = "\r\n";
        break;
      }

      if (t[r + 1]) {
        e.eol = "\r";
        break;
      }
    } else if ("\n" === t[r]) {
      e.eol = "\n";
      break;
    }
    return e.eol || "\n";
  };
}, function (t, e, r) {
  var n = r(65),
      i = r(73);

  t.exports = function (t, e) {
    var r = i(t, e);
    return n(r) ? r : void 0;
  };
}, function (t, e, r) {
  var n = r(19).Symbol;
  t.exports = n;
}, function (t, e, r) {
  var n = r(67),
      i = "object" == (typeof self === "undefined" ? "undefined" : _typeof(self)) && self && self.Object === Object && self,
      o = n || i || Function("return this")();
  t.exports = o;
}, function (t, e) {
  t.exports = function (t) {
    var e = _typeof(t);

    return null != t && ("object" == e || "function" == e);
  };
}, function (t, e) {
  var r = Array.isArray;
  t.exports = r;
}, function (t, e, r) {
  var n = r(30),
      i = r(76);

  t.exports = function (t) {
    return "symbol" == _typeof(t) || i(t) && "[object Symbol]" == n(t);
  };
}, function (t, e, r) {
  "use strict";

  (function (e, n) {
    var i = r(6);
    t.exports = g;
    var o,
        s = r(37);
    g.ReadableState = m, r(12).EventEmitter;

    var a = function (t, e) {
      return t.listeners(e).length;
    },
        u = r(24),
        c = r(7).Buffer,
        l = e.Uint8Array || function () {},
        f = r(5);

    f.inherits = r(2);
    var h = r(41),
        p = void 0;
    p = h && h.debuglog ? h.debuglog("stream") : function () {};

    var d,
        _ = r(42),
        v = r(25);

    f.inherits(g, u);
    var y = ["error", "close", "destroy", "pause", "resume"];

    function m(t, e) {
      o = o || r(1), t = t || {};
      var n = e instanceof o;
      this.objectMode = !!t.objectMode, n && (this.objectMode = this.objectMode || !!t.readableObjectMode);
      var i = t.highWaterMark,
          s = t.readableHighWaterMark,
          a = this.objectMode ? 16 : 16384;
      this.highWaterMark = i || 0 === i ? i : n && (s || 0 === s) ? s : a, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new _(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (d || (d = r(26).StringDecoder), this.decoder = new d(t.encoding), this.encoding = t.encoding);
    }

    function g(t) {
      if (o = o || r(1), !(this instanceof g)) return new g(t);
      this._readableState = new m(t, this), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), "function" == typeof t.destroy && (this._destroy = t.destroy)), u.call(this);
    }

    function b(t, e, r, n, i) {
      var o,
          s = t._readableState;
      return null === e ? (s.reading = !1, function (t, e) {
        if (!e.ended) {
          if (e.decoder) {
            var r = e.decoder.end();
            r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length);
          }

          e.ended = !0, x(t);
        }
      }(t, s)) : (i || (o = function (t, e) {
        var r;
        return function (t) {
          return c.isBuffer(t) || t instanceof l;
        }(e) || "string" == typeof e || void 0 === e || t.objectMode || (r = new TypeError("Invalid non-string/buffer chunk")), r;
      }(s, e)), o ? t.emit("error", o) : s.objectMode || e && e.length > 0 ? ("string" == typeof e || s.objectMode || Object.getPrototypeOf(e) === c.prototype || (e = function (t) {
        return c.from(t);
      }(e)), n ? s.endEmitted ? t.emit("error", new Error("stream.unshift() after end event")) : w(t, s, e, !0) : s.ended ? t.emit("error", new Error("stream.push() after EOF")) : (s.reading = !1, s.decoder && !r ? (e = s.decoder.write(e), s.objectMode || 0 !== e.length ? w(t, s, e, !1) : S(t, s)) : w(t, s, e, !1))) : n || (s.reading = !1)), function (t) {
        return !t.ended && (t.needReadable || t.length < t.highWaterMark || 0 === t.length);
      }(s);
    }

    function w(t, e, r, n) {
      e.flowing && 0 === e.length && !e.sync ? (t.emit("data", r), t.read(0)) : (e.length += e.objectMode ? 1 : r.length, n ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && x(t)), S(t, e);
    }

    Object.defineProperty(g.prototype, "destroyed", {
      get: function () {
        return void 0 !== this._readableState && this._readableState.destroyed;
      },
      set: function (t) {
        this._readableState && (this._readableState.destroyed = t);
      }
    }), g.prototype.destroy = v.destroy, g.prototype._undestroy = v.undestroy, g.prototype._destroy = function (t, e) {
      this.push(null), e(t);
    }, g.prototype.push = function (t, e) {
      var r,
          n = this._readableState;
      return n.objectMode ? r = !0 : "string" == typeof t && ((e = e || n.defaultEncoding) !== n.encoding && (t = c.from(t, e), e = ""), r = !0), b(this, t, e, !1, r);
    }, g.prototype.unshift = function (t) {
      return b(this, t, null, !0, !1);
    }, g.prototype.isPaused = function () {
      return !1 === this._readableState.flowing;
    }, g.prototype.setEncoding = function (t) {
      return d || (d = r(26).StringDecoder), this._readableState.decoder = new d(t), this._readableState.encoding = t, this;
    };
    var E = 8388608;

    function C(t, e) {
      return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function (t) {
        return t >= E ? t = E : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, t |= t >>> 16, t++), t;
      }(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0));
    }

    function x(t) {
      var e = t._readableState;
      e.needReadable = !1, e.emittedReadable || (p("emitReadable", e.flowing), e.emittedReadable = !0, e.sync ? i.nextTick(j, t) : j(t));
    }

    function j(t) {
      p("emit readable"), t.emit("readable"), P(t);
    }

    function S(t, e) {
      e.readingMore || (e.readingMore = !0, i.nextTick(R, t, e));
    }

    function R(t, e) {
      for (var r = e.length; !e.reading && !e.flowing && !e.ended && e.length < e.highWaterMark && (p("maybeReadMore read 0"), t.read(0), r !== e.length);) r = e.length;

      e.readingMore = !1;
    }

    function k(t) {
      p("readable nexttick read 0"), t.read(0);
    }

    function T(t, e) {
      e.reading || (p("resume read 0"), t.read(0)), e.resumeScheduled = !1, e.awaitDrain = 0, t.emit("resume"), P(t), e.flowing && !e.reading && t.read(0);
    }

    function P(t) {
      var e = t._readableState;

      for (p("flow", e.flowing); e.flowing && null !== t.read(););
    }

    function O(t, e) {
      return 0 === e.length ? null : (e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (r = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.head.data : e.buffer.concat(e.length), e.buffer.clear()) : r = function (t, e, r) {
        var n;
        return t < e.head.data.length ? (n = e.head.data.slice(0, t), e.head.data = e.head.data.slice(t)) : n = t === e.head.data.length ? e.shift() : r ? function (t, e) {
          var r = e.head,
              n = 1,
              i = r.data;

          for (t -= i.length; r = r.next;) {
            var o = r.data,
                s = t > o.length ? o.length : t;

            if (s === o.length ? i += o : i += o.slice(0, t), 0 == (t -= s)) {
              s === o.length ? (++n, r.next ? e.head = r.next : e.head = e.tail = null) : (e.head = r, r.data = o.slice(s));
              break;
            }

            ++n;
          }

          return e.length -= n, i;
        }(t, e) : function (t, e) {
          var r = c.allocUnsafe(t),
              n = e.head,
              i = 1;

          for (n.data.copy(r), t -= n.data.length; n = n.next;) {
            var o = n.data,
                s = t > o.length ? o.length : t;

            if (o.copy(r, r.length - t, 0, s), 0 == (t -= s)) {
              s === o.length ? (++i, n.next ? e.head = n.next : e.head = e.tail = null) : (e.head = n, n.data = o.slice(s));
              break;
            }

            ++i;
          }

          return e.length -= i, r;
        }(t, e), n;
      }(t, e.buffer, e.decoder), r);
      var r;
    }

    function A(t) {
      var e = t._readableState;
      if (e.length > 0) throw new Error('"endReadable()" called on non-empty stream');
      e.endEmitted || (e.ended = !0, i.nextTick(F, e, t));
    }

    function F(t, e) {
      t.endEmitted || 0 !== t.length || (t.endEmitted = !0, e.readable = !1, e.emit("end"));
    }

    function L(t, e) {
      for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;

      return -1;
    }

    g.prototype.read = function (t) {
      p("read", t), t = parseInt(t, 10);
      var e = this._readableState,
          r = t;
      if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && (e.length >= e.highWaterMark || e.ended)) return p("read: emitReadable", e.length, e.ended), 0 === e.length && e.ended ? A(this) : x(this), null;
      if (0 === (t = C(t, e)) && e.ended) return 0 === e.length && A(this), null;
      var n,
          i = e.needReadable;
      return p("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && p("length less than watermark", i = !0), e.ended || e.reading ? p("reading or ended", i = !1) : i && (p("do read"), e.reading = !0, e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), e.sync = !1, e.reading || (t = C(r, e))), null === (n = t > 0 ? O(t, e) : null) ? (e.needReadable = !0, t = 0) : e.length -= t, 0 === e.length && (e.ended || (e.needReadable = !0), r !== t && e.ended && A(this)), null !== n && this.emit("data", n), n;
    }, g.prototype._read = function (t) {
      this.emit("error", new Error("_read() is not implemented"));
    }, g.prototype.pipe = function (t, e) {
      var r = this,
          o = this._readableState;

      switch (o.pipesCount) {
        case 0:
          o.pipes = t;
          break;

        case 1:
          o.pipes = [o.pipes, t];
          break;

        default:
          o.pipes.push(t);
      }

      o.pipesCount += 1, p("pipe count=%d opts=%j", o.pipesCount, e);
      var u = e && !1 === e.end || t === n.stdout || t === n.stderr ? m : c;

      function c() {
        p("onend"), t.end();
      }

      o.endEmitted ? i.nextTick(u) : r.once("end", u), t.on("unpipe", function e(n, i) {
        p("onunpipe"), n === r && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, p("cleanup"), t.removeListener("close", v), t.removeListener("finish", y), t.removeListener("drain", l), t.removeListener("error", _), t.removeListener("unpipe", e), r.removeListener("end", c), r.removeListener("end", m), r.removeListener("data", d), f = !0, !o.awaitDrain || t._writableState && !t._writableState.needDrain || l());
      });

      var l = function (t) {
        return function () {
          var e = t._readableState;
          p("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && a(t, "data") && (e.flowing = !0, P(t));
        };
      }(r);

      t.on("drain", l);
      var f = !1,
          h = !1;

      function d(e) {
        p("ondata"), h = !1, !1 !== t.write(e) || h || ((1 === o.pipesCount && o.pipes === t || o.pipesCount > 1 && -1 !== L(o.pipes, t)) && !f && (p("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, h = !0), r.pause());
      }

      function _(e) {
        p("onerror", e), m(), t.removeListener("error", _), 0 === a(t, "error") && t.emit("error", e);
      }

      function v() {
        t.removeListener("finish", y), m();
      }

      function y() {
        p("onfinish"), t.removeListener("close", v), m();
      }

      function m() {
        p("unpipe"), r.unpipe(t);
      }

      return r.on("data", d), function (t, e, r) {
        if ("function" == typeof t.prependListener) return t.prependListener(e, r);
        t._events && t._events[e] ? s(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [r, t._events[e]] : t.on(e, r);
      }(t, "error", _), t.once("close", v), t.once("finish", y), t.emit("pipe", r), o.flowing || (p("pipe resume"), r.resume()), t;
    }, g.prototype.unpipe = function (t) {
      var e = this._readableState,
          r = {
        hasUnpiped: !1
      };
      if (0 === e.pipesCount) return this;
      if (1 === e.pipesCount) return t && t !== e.pipes ? this : (t || (t = e.pipes), e.pipes = null, e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, r), this);

      if (!t) {
        var n = e.pipes,
            i = e.pipesCount;
        e.pipes = null, e.pipesCount = 0, e.flowing = !1;

        for (var o = 0; o < i; o++) n[o].emit("unpipe", this, r);

        return this;
      }

      var s = L(e.pipes, t);
      return -1 === s ? this : (e.pipes.splice(s, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), t.emit("unpipe", this, r), this);
    }, g.prototype.on = function (t, e) {
      var r = u.prototype.on.call(this, t, e);
      if ("data" === t) !1 !== this._readableState.flowing && this.resume();else if ("readable" === t) {
        var n = this._readableState;
        n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && x(this) : i.nextTick(k, this));
      }
      return r;
    }, g.prototype.addListener = g.prototype.on, g.prototype.resume = function () {
      var t = this._readableState;
      return t.flowing || (p("resume"), t.flowing = !0, function (t, e) {
        e.resumeScheduled || (e.resumeScheduled = !0, i.nextTick(T, t, e));
      }(this, t)), this;
    }, g.prototype.pause = function () {
      return p("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (p("pause"), this._readableState.flowing = !1, this.emit("pause")), this;
    }, g.prototype.wrap = function (t) {
      var e = this,
          r = this._readableState,
          n = !1;

      for (var i in t.on("end", function () {
        if (p("wrapped end"), r.decoder && !r.ended) {
          var t = r.decoder.end();
          t && t.length && e.push(t);
        }

        e.push(null);
      }), t.on("data", function (i) {
        p("wrapped data"), r.decoder && (i = r.decoder.write(i)), (!r.objectMode || null !== i && void 0 !== i) && (r.objectMode || i && i.length) && (e.push(i) || (n = !0, t.pause()));
      }), t) void 0 === this[i] && "function" == typeof t[i] && (this[i] = function (e) {
        return function () {
          return t[e].apply(t, arguments);
        };
      }(i));

      for (var o = 0; o < y.length; o++) t.on(y[o], this.emit.bind(this, y[o]));

      return this._read = function (e) {
        p("wrapped _read", e), n && (n = !1, t.resume());
      }, this;
    }, Object.defineProperty(g.prototype, "readableHighWaterMark", {
      enumerable: !1,
      get: function () {
        return this._readableState.highWaterMark;
      }
    }), g._fromList = O;
  }).call(this, r(0), r(4));
}, function (t, e, r) {
  t.exports = r(12).EventEmitter;
}, function (t, e, r) {
  "use strict";

  var n = r(6);

  function i(t, e) {
    t.emit("error", e);
  }

  t.exports = {
    destroy: function (t, e) {
      var r = this,
          o = this._readableState && this._readableState.destroyed,
          s = this._writableState && this._writableState.destroyed;
      return o || s ? (e ? e(t) : !t || this._writableState && this._writableState.errorEmitted || n.nextTick(i, this, t), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function (t) {
        !e && t ? (n.nextTick(i, r, t), r._writableState && (r._writableState.errorEmitted = !0)) : e && e(t);
      }), this);
    },
    undestroy: function () {
      this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
    }
  };
}, function (t, e, r) {
  "use strict";

  var n = r(7).Buffer,
      i = n.isEncoding || function (t) {
    switch ((t = "" + t) && t.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;

      default:
        return !1;
    }
  };

  function o(t) {
    var e;

    switch (this.encoding = function (t) {
      var e = function (t) {
        if (!t) return "utf8";

        for (var e;;) switch (t) {
          case "utf8":
          case "utf-8":
            return "utf8";

          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";

          case "latin1":
          case "binary":
            return "latin1";

          case "base64":
          case "ascii":
          case "hex":
            return t;

          default:
            if (e) return;
            t = ("" + t).toLowerCase(), e = !0;
        }
      }(t);

      if ("string" != typeof e && (n.isEncoding === i || !i(t))) throw new Error("Unknown encoding: " + t);
      return e || t;
    }(t), this.encoding) {
      case "utf16le":
        this.text = u, this.end = c, e = 4;
        break;

      case "utf8":
        this.fillLast = a, e = 4;
        break;

      case "base64":
        this.text = l, this.end = f, e = 3;
        break;

      default:
        return this.write = h, void (this.end = p);
    }

    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(e);
  }

  function s(t) {
    return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2;
  }

  function a(t) {
    var e = this.lastTotal - this.lastNeed,
        r = function (t, e, r) {
      if (128 != (192 & e[0])) return t.lastNeed = 0, "�";

      if (t.lastNeed > 1 && e.length > 1) {
        if (128 != (192 & e[1])) return t.lastNeed = 1, "�";
        if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "�";
      }
    }(this, t);

    return void 0 !== r ? r : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void (this.lastNeed -= t.length));
  }

  function u(t, e) {
    if ((t.length - e) % 2 == 0) {
      var r = t.toString("utf16le", e);

      if (r) {
        var n = r.charCodeAt(r.length - 1);
        if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], r.slice(0, -1);
      }

      return r;
    }

    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1);
  }

  function c(t) {
    var e = t && t.length ? this.write(t) : "";

    if (this.lastNeed) {
      var r = this.lastTotal - this.lastNeed;
      return e + this.lastChar.toString("utf16le", 0, r);
    }

    return e;
  }

  function l(t, e) {
    var r = (t.length - e) % 3;
    return 0 === r ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r));
  }

  function f(t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
  }

  function h(t) {
    return t.toString(this.encoding);
  }

  function p(t) {
    return t && t.length ? this.write(t) : "";
  }

  e.StringDecoder = o, o.prototype.write = function (t) {
    if (0 === t.length) return "";
    var e, r;

    if (this.lastNeed) {
      if (void 0 === (e = this.fillLast(t))) return "";
      r = this.lastNeed, this.lastNeed = 0;
    } else r = 0;

    return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || "";
  }, o.prototype.end = function (t) {
    var e = t && t.length ? this.write(t) : "";
    return this.lastNeed ? e + "�" : e;
  }, o.prototype.text = function (t, e) {
    var r = function (t, e, r) {
      var n = e.length - 1;
      if (n < r) return 0;
      var i = s(e[n]);
      return i >= 0 ? (i > 0 && (t.lastNeed = i - 1), i) : --n < r || -2 === i ? 0 : (i = s(e[n])) >= 0 ? (i > 0 && (t.lastNeed = i - 2), i) : --n < r || -2 === i ? 0 : (i = s(e[n])) >= 0 ? (i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i) : 0;
    }(this, t, e);

    if (!this.lastNeed) return t.toString("utf8", e);
    this.lastTotal = r;
    var n = t.length - (r - this.lastNeed);
    return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
  }, o.prototype.fillLast = function (t) {
    if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
  };
}, function (t, e, r) {
  "use strict";

  t.exports = o;
  var n = r(1),
      i = r(5);

  function o(t) {
    if (!(this instanceof o)) return new o(t);
    n.call(this, t), this._transformState = {
      afterTransform: function (t, e) {
        var r = this._transformState;
        r.transforming = !1;
        var n = r.writecb;
        if (!n) return this.emit("error", new Error("write callback called multiple times"));
        r.writechunk = null, r.writecb = null, null != e && this.push(e), n(t);
        var i = this._readableState;
        i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
      }.bind(this),
      needTransform: !1,
      transforming: !1,
      writecb: null,
      writechunk: null,
      writeencoding: null
    }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), "function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", s);
  }

  function s() {
    var t = this;
    "function" == typeof this._flush ? this._flush(function (e, r) {
      a(t, e, r);
    }) : a(this, null, null);
  }

  function a(t, e, r) {
    if (e) return t.emit("error", e);
    if (null != r && t.push(r), t._writableState.length) throw new Error("Calling transform done when ws.length != 0");
    if (t._transformState.transforming) throw new Error("Calling transform done when still transforming");
    return t.push(null);
  }

  i.inherits = r(2), i.inherits(o, n), o.prototype.push = function (t, e) {
    return this._transformState.needTransform = !1, n.prototype.push.call(this, t, e);
  }, o.prototype._transform = function (t, e, r) {
    throw new Error("_transform() is not implemented");
  }, o.prototype._write = function (t, e, r) {
    var n = this._transformState;

    if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
      var i = this._readableState;
      (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
    }
  }, o.prototype._read = function (t) {
    var e = this._transformState;
    null !== e.writechunk && e.writecb && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
  }, o.prototype._destroy = function (t, e) {
    var r = this;

    n.prototype._destroy.call(this, t, function (t) {
      e(t), r.emit("close");
    });
  };
}, function (t, e, r) {
  "use strict";

  (function (t) {
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), e.bufFromString = function (e) {
      var r = t.byteLength(e),
          n = t.allocUnsafe ? t.allocUnsafe(r) : new t(r);
      return n.write(e), n;
    }, e.emptyBuffer = function () {
      return t.allocUnsafe ? t.allocUnsafe(0) : new t(0);
    }, e.filterArray = function (t, e) {
      for (var r = [], n = 0; n < t.length; n++) e.indexOf(n) > -1 && r.push(t[n]);

      return r;
    }, e.trimLeft = String.prototype.trimLeft ? function (t) {
      return t.trimLeft();
    } : function (t) {
      return t.replace(/^\s+/, "");
    }, e.trimRight = String.prototype.trimRight ? function (t) {
      return t.trimRight();
    } : function (t) {
      return t.replace(/\s+$/, "");
    };
  }).call(this, r(3).Buffer);
}, function (t, e, r) {
  "use strict";

  var n = this && this.__extends || function () {
    var t = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (t, e) {
      t.__proto__ = e;
    } || function (t, e) {
      for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
    };

    return function (e, r) {
      function n() {
        this.constructor = e;
      }

      t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
    };
  }();

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var i = function (t) {
    function e(e, r, n) {
      var i = t.call(this, "Error: " + e + ". JSON Line number: " + r + (n ? " near: " + n : "")) || this;
      return i.err = e, i.line = r, i.extra = n, i.name = "CSV Parse Error", i;
    }

    return n(e, t), e.column_mismatched = function (t, r) {
      return new e("column_mismatched", t, r);
    }, e.unclosed_quote = function (t, r) {
      return new e("unclosed_quote", t, r);
    }, e.fromJSON = function (t) {
      return new e(t.err, t.line, t.extra);
    }, e.prototype.toJSON = function () {
      return {
        err: this.err,
        line: this.line,
        extra: this.extra
      };
    }, e;
  }(Error);

  e.default = i;
}, function (t, e, r) {
  var n = r(18),
      i = r(68),
      o = r(69),
      s = n ? n.toStringTag : void 0;

  t.exports = function (t) {
    return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : s && s in Object(t) ? i(t) : o(t);
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return t === e || t != t && e != e;
  };
}, function (t, e, r) {
  t.exports = r(33);
}, function (t, e, r) {
  "use strict";

  var n = r(34),
      i = function (t, e) {
    return new n.Converter(t, e);
  };

  i.csv = i, i.Converter = n.Converter, t.exports = i;
}, function (t, e, r) {
  "use strict";

  (function (t) {
    var n = this && this.__extends || function () {
      var t = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      };

      return function (e, r) {
        function n() {
          this.constructor = e;
        }

        t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
      };
    }(),
        i = this && this.__importDefault || function (t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var o = r(36),
        s = r(50),
        a = r(51),
        u = i(r(15)),
        c = r(52),
        l = r(105),
        f = function (e) {
      function i(r, n) {
        void 0 === n && (n = {});
        var i = e.call(this, n) || this;
        return i.options = n, i.params = s.mergeParams(r), i.runtime = a.initParseRuntime(i), i.result = new l.Result(i), i.processor = new c.ProcessorLocal(i), i.once("error", function (e) {
          t(function () {
            i.result.processError(e), i.emit("done", e);
          });
        }), i.once("done", function () {
          i.processor.destroy();
        }), i;
      }

      return n(i, e), i.prototype.preRawData = function (t) {
        return this.runtime.preRawDataHook = t, this;
      }, i.prototype.preFileLine = function (t) {
        return this.runtime.preFileLineHook = t, this;
      }, i.prototype.subscribe = function (t, e, r) {
        return this.parseRuntime.subscribe = {
          onNext: t,
          onError: e,
          onCompleted: r
        }, this;
      }, i.prototype.fromFile = function (t, e) {
        var n = this,
            i = r(!function () {
          var t = new Error("Cannot find module 'fs'");
          throw t.code = "MODULE_NOT_FOUND", t;
        }());
        return i.exists(t, function (r) {
          r ? i.createReadStream(t, e).pipe(n) : n.emit("error", new Error("File does not exist. Check to make sure the file path to your csv is correct."));
        }), this;
      }, i.prototype.fromStream = function (t) {
        return t.pipe(this), this;
      }, i.prototype.fromString = function (t) {
        t.toString();
        var e = new o.Readable(),
            r = 0;
        return e._read = function (e) {
          if (r >= t.length) this.push(null);else {
            var n = t.substr(r, e);
            this.push(n), r += e;
          }
        }, this.fromStream(e);
      }, i.prototype.then = function (t, e) {
        var r = this;
        return new u.default(function (n, i) {
          r.parseRuntime.then = {
            onfulfilled: function (e) {
              n(t ? t(e) : e);
            },
            onrejected: function (t) {
              e ? n(e(t)) : i(t);
            }
          };
        });
      }, Object.defineProperty(i.prototype, "parseParam", {
        get: function () {
          return this.params;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(i.prototype, "parseRuntime", {
        get: function () {
          return this.runtime;
        },
        enumerable: !0,
        configurable: !0
      }), i.prototype._transform = function (t, e, r) {
        var n = this;
        this.processor.process(t).then(function (t) {
          if (t.length > 0) return n.runtime.started = !0, n.result.processResult(t);
        }).then(function () {
          n.emit("drained"), r();
        }, function (t) {
          n.runtime.hasError = !0, n.runtime.error = t, n.emit("error", t), r();
        });
      }, i.prototype._flush = function (t) {
        var e = this;
        this.processor.flush().then(function (t) {
          if (t.length > 0) return e.result.processResult(t);
        }).then(function () {
          e.processEnd(t);
        }, function (r) {
          e.emit("error", r), t();
        });
      }, i.prototype.processEnd = function (t) {
        this.result.endProcess(), this.emit("done"), t();
      }, Object.defineProperty(i.prototype, "parsedLineNumber", {
        get: function () {
          return this.runtime.parsedLineNumber;
        },
        enumerable: !0,
        configurable: !0
      }), i;
    }(o.Transform);

    e.Converter = f;
  }).call(this, r(11).setImmediate);
}, function (t, e, r) {
  (function (t, e) {
    !function (t, r) {
      "use strict";

      if (!t.setImmediate) {
        var n,
            i = 1,
            o = {},
            s = !1,
            a = t.document,
            u = Object.getPrototypeOf && Object.getPrototypeOf(t);
        u = u && u.setTimeout ? u : t, "[object process]" === {}.toString.call(t.process) ? n = function (t) {
          e.nextTick(function () {
            l(t);
          });
        } : function () {
          if (t.postMessage && !t.importScripts) {
            var e = !0,
                r = t.onmessage;
            return t.onmessage = function () {
              e = !1;
            }, t.postMessage("", "*"), t.onmessage = r, e;
          }
        }() ? function () {
          var e = "setImmediate$" + Math.random() + "$",
              r = function (r) {
            r.source === t && "string" == typeof r.data && 0 === r.data.indexOf(e) && l(+r.data.slice(e.length));
          };

          t.addEventListener ? t.addEventListener("message", r, !1) : t.attachEvent("onmessage", r), n = function (r) {
            t.postMessage(e + r, "*");
          };
        }() : t.MessageChannel ? function () {
          var t = new MessageChannel();
          t.port1.onmessage = function (t) {
            l(t.data);
          }, n = function (e) {
            t.port2.postMessage(e);
          };
        }() : a && "onreadystatechange" in a.createElement("script") ? function () {
          var t = a.documentElement;

          n = function (e) {
            var r = a.createElement("script");
            r.onreadystatechange = function () {
              l(e), r.onreadystatechange = null, t.removeChild(r), r = null;
            }, t.appendChild(r);
          };
        }() : n = function (t) {
          setTimeout(l, 0, t);
        }, u.setImmediate = function (t) {
          "function" != typeof t && (t = new Function("" + t));

          for (var e = new Array(arguments.length - 1), r = 0; r < e.length; r++) e[r] = arguments[r + 1];

          var s = {
            callback: t,
            args: e
          };
          return o[i] = s, n(i), i++;
        }, u.clearImmediate = c;
      }

      function c(t) {
        delete o[t];
      }

      function l(t) {
        if (s) setTimeout(l, 0, t);else {
          var e = o[t];

          if (e) {
            s = !0;

            try {
              !function (t) {
                var e = t.callback,
                    n = t.args;

                switch (n.length) {
                  case 0:
                    e();
                    break;

                  case 1:
                    e(n[0]);
                    break;

                  case 2:
                    e(n[0], n[1]);
                    break;

                  case 3:
                    e(n[0], n[1], n[2]);
                    break;

                  default:
                    e.apply(r, n);
                }
              }(e);
            } finally {
              c(t), s = !1;
            }
          }
        }
      }
    }("undefined" == typeof self ? void 0 === t ? this : t : self);
  }).call(this, r(0), r(4));
}, function (t, e, r) {
  t.exports = i;
  var n = r(12).EventEmitter;

  function i() {
    n.call(this);
  }

  r(2)(i, n), i.Readable = r(13), i.Writable = r(46), i.Duplex = r(47), i.Transform = r(48), i.PassThrough = r(49), i.Stream = i, i.prototype.pipe = function (t, e) {
    var r = this;

    function i(e) {
      t.writable && !1 === t.write(e) && r.pause && r.pause();
    }

    function o() {
      r.readable && r.resume && r.resume();
    }

    r.on("data", i), t.on("drain", o), t._isStdio || e && !1 === e.end || (r.on("end", a), r.on("close", u));
    var s = !1;

    function a() {
      s || (s = !0, t.end());
    }

    function u() {
      s || (s = !0, "function" == typeof t.destroy && t.destroy());
    }

    function c(t) {
      if (l(), 0 === n.listenerCount(this, "error")) throw t;
    }

    function l() {
      r.removeListener("data", i), t.removeListener("drain", o), r.removeListener("end", a), r.removeListener("close", u), r.removeListener("error", c), t.removeListener("error", c), r.removeListener("end", l), r.removeListener("close", l), t.removeListener("close", l);
    }

    return r.on("error", c), t.on("error", c), r.on("end", l), r.on("close", l), t.on("close", l), t.emit("pipe", r), t;
  };
}, function (t, e) {
  var r = {}.toString;

  t.exports = Array.isArray || function (t) {
    return "[object Array]" == r.call(t);
  };
}, function (t, e, r) {
  "use strict";

  e.byteLength = function (t) {
    var e = c(t),
        r = e[0],
        n = e[1];
    return 3 * (r + n) / 4 - n;
  }, e.toByteArray = function (t) {
    for (var e, r = c(t), n = r[0], s = r[1], a = new o(3 * (n + s) / 4 - s), u = 0, l = s > 0 ? n - 4 : n, f = 0; f < l; f += 4) e = i[t.charCodeAt(f)] << 18 | i[t.charCodeAt(f + 1)] << 12 | i[t.charCodeAt(f + 2)] << 6 | i[t.charCodeAt(f + 3)], a[u++] = e >> 16 & 255, a[u++] = e >> 8 & 255, a[u++] = 255 & e;

    return 2 === s && (e = i[t.charCodeAt(f)] << 2 | i[t.charCodeAt(f + 1)] >> 4, a[u++] = 255 & e), 1 === s && (e = i[t.charCodeAt(f)] << 10 | i[t.charCodeAt(f + 1)] << 4 | i[t.charCodeAt(f + 2)] >> 2, a[u++] = e >> 8 & 255, a[u++] = 255 & e), a;
  }, e.fromByteArray = function (t) {
    for (var e, r = t.length, i = r % 3, o = [], s = 0, a = r - i; s < a; s += 16383) o.push(f(t, s, s + 16383 > a ? a : s + 16383));

    return 1 === i ? (e = t[r - 1], o.push(n[e >> 2] + n[e << 4 & 63] + "==")) : 2 === i && (e = (t[r - 2] << 8) + t[r - 1], o.push(n[e >> 10] + n[e >> 4 & 63] + n[e << 2 & 63] + "=")), o.join("");
  };

  for (var n = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) n[a] = s[a], i[s.charCodeAt(a)] = a;

  function c(t) {
    var e = t.length;
    if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
    var r = t.indexOf("=");
    return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4];
  }

  function l(t) {
    return n[t >> 18 & 63] + n[t >> 12 & 63] + n[t >> 6 & 63] + n[63 & t];
  }

  function f(t, e, r) {
    for (var n, i = [], o = e; o < r; o += 3) n = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), i.push(l(n));

    return i.join("");
  }

  i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63;
}, function (t, e) {
  e.read = function (t, e, r, n, i) {
    var o,
        s,
        a = 8 * i - n - 1,
        u = (1 << a) - 1,
        c = u >> 1,
        l = -7,
        f = r ? i - 1 : 0,
        h = r ? -1 : 1,
        p = t[e + f];

    for (f += h, o = p & (1 << -l) - 1, p >>= -l, l += a; l > 0; o = 256 * o + t[e + f], f += h, l -= 8);

    for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + t[e + f], f += h, l -= 8);

    if (0 === o) o = 1 - c;else {
      if (o === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
      s += Math.pow(2, n), o -= c;
    }
    return (p ? -1 : 1) * s * Math.pow(2, o - n);
  }, e.write = function (t, e, r, n, i, o) {
    var s,
        a,
        u,
        c = 8 * o - i - 1,
        l = (1 << c) - 1,
        f = l >> 1,
        h = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
        p = n ? 0 : o - 1,
        d = n ? 1 : -1,
        _ = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;

    for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + f >= 1 ? h / u : h * Math.pow(2, 1 - f)) * u >= 2 && (s++, u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + p] = 255 & a, p += d, a /= 256, i -= 8);

    for (s = s << i | a, c += i; c > 0; t[r + p] = 255 & s, p += d, s /= 256, c -= 8);

    t[r + p - d] |= 128 * _;
  };
}, function (t, e) {
  var r = {}.toString;

  t.exports = Array.isArray || function (t) {
    return "[object Array]" == r.call(t);
  };
}, function (t, e) {}, function (t, e, r) {
  "use strict";

  var n = r(7).Buffer,
      i = r(43);

  function o(t, e, r) {
    t.copy(e, r);
  }

  t.exports = function () {
    function t() {
      !function (t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
      }(this, t), this.head = null, this.tail = null, this.length = 0;
    }

    return t.prototype.push = function (t) {
      var e = {
        data: t,
        next: null
      };
      this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length;
    }, t.prototype.unshift = function (t) {
      var e = {
        data: t,
        next: this.head
      };
      0 === this.length && (this.tail = e), this.head = e, ++this.length;
    }, t.prototype.shift = function () {
      if (0 !== this.length) {
        var t = this.head.data;
        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, t;
      }
    }, t.prototype.clear = function () {
      this.head = this.tail = null, this.length = 0;
    }, t.prototype.join = function (t) {
      if (0 === this.length) return "";

      for (var e = this.head, r = "" + e.data; e = e.next;) r += t + e.data;

      return r;
    }, t.prototype.concat = function (t) {
      if (0 === this.length) return n.alloc(0);
      if (1 === this.length) return this.head.data;

      for (var e = n.allocUnsafe(t >>> 0), r = this.head, i = 0; r;) o(r.data, e, i), i += r.data.length, r = r.next;

      return e;
    }, t;
  }(), i && i.inspect && i.inspect.custom && (t.exports.prototype[i.inspect.custom] = function () {
    var t = i.inspect({
      length: this.length
    });
    return this.constructor.name + " " + t;
  });
}, function (t, e) {}, function (t, e, r) {
  (function (e) {
    function r(t) {
      try {
        if (!e.localStorage) return !1;
      } catch (t) {
        return !1;
      }

      var r = e.localStorage[t];
      return null != r && "true" === String(r).toLowerCase();
    }

    t.exports = function (t, e) {
      if (r("noDeprecation")) return t;
      var n = !1;
      return function () {
        if (!n) {
          if (r("throwDeprecation")) throw new Error(e);
          r("traceDeprecation") ? console.trace(e) : console.warn(e), n = !0;
        }

        return t.apply(this, arguments);
      };
    };
  }).call(this, r(0));
}, function (t, e, r) {
  "use strict";

  t.exports = o;
  var n = r(27),
      i = r(5);

  function o(t) {
    if (!(this instanceof o)) return new o(t);
    n.call(this, t);
  }

  i.inherits = r(2), i.inherits(o, n), o.prototype._transform = function (t, e, r) {
    r(null, t);
  };
}, function (t, e, r) {
  t.exports = r(14);
}, function (t, e, r) {
  t.exports = r(1);
}, function (t, e, r) {
  t.exports = r(13).Transform;
}, function (t, e, r) {
  t.exports = r(13).PassThrough;
}, function (t, e, r) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.mergeParams = function (t) {
    var e = {
      delimiter: ",",
      ignoreColumns: void 0,
      includeColumns: void 0,
      quote: '"',
      trim: !0,
      checkType: !1,
      ignoreEmpty: !1,
      noheader: !1,
      headers: void 0,
      flatKeys: !1,
      maxRowLength: 0,
      checkColumn: !1,
      escape: '"',
      colParser: {},
      eol: void 0,
      alwaysSplitAtEOL: !1,
      output: "json",
      nullObject: !1,
      downstreamFormat: "line",
      needEmitAll: !0
    };

    for (var r in t || (t = {}), t) t.hasOwnProperty(r) && (Array.isArray(t[r]) ? e[r] = [].concat(t[r]) : e[r] = t[r]);

    return e;
  };
}, function (t, e, r) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  }), e.initParseRuntime = function (t) {
    var e = t.parseParam,
        r = {
      needProcessIgnoreColumn: !1,
      needProcessIncludeColumn: !1,
      selectedColumns: void 0,
      ended: !1,
      hasError: !1,
      error: void 0,
      delimiter: t.parseParam.delimiter,
      eol: t.parseParam.eol,
      columnConv: [],
      headerType: [],
      headerTitle: [],
      headerFlag: [],
      headers: void 0,
      started: !1,
      parsedLineNumber: 0,
      columnValueSetter: []
    };
    return e.ignoreColumns && (r.needProcessIgnoreColumn = !0), e.includeColumns && (r.needProcessIncludeColumn = !0), r;
  };
}, function (t, e, r) {
  "use strict";

  (function (t) {
    var n = this && this.__extends || function () {
      var t = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (t, e) {
        t.__proto__ = e;
      } || function (t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
      };

      return function (e, r) {
        function n() {
          this.constructor = e;
        }

        t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n());
      };
    }(),
        i = this && this.__importDefault || function (t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };

    Object.defineProperty(e, "__esModule", {
      value: !0
    });

    var o = r(53),
        s = i(r(15)),
        a = r(54),
        u = i(r(16)),
        c = r(57),
        l = r(28),
        f = r(58),
        h = i(r(59)),
        p = i(r(29)),
        d = function (e) {
      function r() {
        var t = null !== e && e.apply(this, arguments) || this;
        return t.rowSplit = new f.RowSplit(t.converter), t.eolEmitted = !1, t._needEmitEol = void 0, t.headEmitted = !1, t._needEmitHead = void 0, t;
      }

      return n(r, e), r.prototype.flush = function () {
        var t = this;

        if (this.runtime.csvLineBuffer && this.runtime.csvLineBuffer.length > 0) {
          var e = this.runtime.csvLineBuffer;
          return this.runtime.csvLineBuffer = void 0, this.process(e, !0).then(function (e) {
            return t.runtime.csvLineBuffer && t.runtime.csvLineBuffer.length > 0 ? s.default.reject(p.default.unclosed_quote(t.runtime.parsedLineNumber, t.runtime.csvLineBuffer.toString())) : s.default.resolve(e);
          });
        }

        return s.default.resolve([]);
      }, r.prototype.destroy = function () {
        return s.default.resolve();
      }, Object.defineProperty(r.prototype, "needEmitEol", {
        get: function () {
          return void 0 === this._needEmitEol && (this._needEmitEol = this.converter.listeners("eol").length > 0), this._needEmitEol;
        },
        enumerable: !0,
        configurable: !0
      }), Object.defineProperty(r.prototype, "needEmitHead", {
        get: function () {
          return void 0 === this._needEmitHead && (this._needEmitHead = this.converter.listeners("header").length > 0), this._needEmitHead;
        },
        enumerable: !0,
        configurable: !0
      }), r.prototype.process = function (t, e) {
        var r,
            n = this;
        return void 0 === e && (e = !1), r = e ? t.toString() : a.prepareData(t, this.converter.parseRuntime), s.default.resolve().then(function () {
          return n.runtime.preRawDataHook ? n.runtime.preRawDataHook(r) : r;
        }).then(function (t) {
          return t && t.length > 0 ? n.processCSV(t, e) : s.default.resolve([]);
        });
      }, r.prototype.processCSV = function (t, e) {
        var r = this,
            n = this.params,
            i = this.runtime;
        i.eol || u.default(t, i), this.needEmitEol && !this.eolEmitted && i.eol && (this.converter.emit("eol", i.eol), this.eolEmitted = !0), n.ignoreEmpty && !i.started && (t = l.trimLeft(t));
        var o = c.stringToLines(t, i);
        return e ? (o.lines.push(o.partial), o.partial = "") : this.prependLeftBuf(l.bufFromString(o.partial)), o.lines.length > 0 ? (i.preFileLineHook ? this.runPreLineHook(o.lines) : s.default.resolve(o.lines)).then(function (t) {
          return i.started || r.runtime.headers ? r.processCSVBody(t) : r.processDataWithHead(t);
        }) : s.default.resolve([]);
      }, r.prototype.processDataWithHead = function (t) {
        if (this.params.noheader) this.params.headers ? this.runtime.headers = this.params.headers : this.runtime.headers = [];else {
          for (var e = "", r = []; t.length;) {
            var n = e + t.shift(),
                i = this.rowSplit.parse(n);

            if (i.closed) {
              r = i.cells, e = "";
              break;
            }

            e = n + u.default(n, this.runtime);
          }

          if (this.prependLeftBuf(l.bufFromString(e)), 0 === r.length) return [];
          this.params.headers ? this.runtime.headers = this.params.headers : this.runtime.headers = r;
        }
        return (this.runtime.needProcessIgnoreColumn || this.runtime.needProcessIncludeColumn) && this.filterHeader(), this.needEmitHead && !this.headEmitted && (this.converter.emit("header", this.runtime.headers), this.headEmitted = !0), this.processCSVBody(t);
      }, r.prototype.filterHeader = function () {
        if (this.runtime.selectedColumns = [], this.runtime.headers) {
          for (var t = this.runtime.headers, e = 0; e < t.length; e++) if (this.params.ignoreColumns) {
            if (this.params.ignoreColumns.test(t[e])) {
              if (!this.params.includeColumns || !this.params.includeColumns.test(t[e])) continue;
              this.runtime.selectedColumns.push(e);
            } else this.runtime.selectedColumns.push(e);
          } else this.params.includeColumns ? this.params.includeColumns.test(t[e]) && this.runtime.selectedColumns.push(e) : this.runtime.selectedColumns.push(e);

          this.runtime.headers = l.filterArray(this.runtime.headers, this.runtime.selectedColumns);
        }
      }, r.prototype.processCSVBody = function (t) {
        if ("line" === this.params.output) return t;
        var e = this.rowSplit.parseMultiLines(t);
        return this.prependLeftBuf(l.bufFromString(e.partial)), "csv" === this.params.output ? e.rowsCells : h.default(e.rowsCells, this.converter);
      }, r.prototype.prependLeftBuf = function (e) {
        e && (this.runtime.csvLineBuffer ? this.runtime.csvLineBuffer = t.concat([e, this.runtime.csvLineBuffer]) : this.runtime.csvLineBuffer = e);
      }, r.prototype.runPreLineHook = function (t) {
        var e = this;
        return new s.default(function (r, n) {
          !function t(e, r, n, i) {
            if (n >= e.length) i();else if (r.preFileLineHook) {
              var o = e[n],
                  s = r.preFileLineHook(o, r.parsedLineNumber + n);
              if (n++, s && s.then) s.then(function (o) {
                e[n - 1] = o, t(e, r, n, i);
              });else {
                for (e[n - 1] = s; n < e.length;) e[n] = r.preFileLineHook(e[n], r.parsedLineNumber + n), n++;

                i();
              }
            } else i();
          }(t, e.runtime, 0, function (e) {
            e ? n(e) : r(t);
          });
        });
      }, r;
    }(o.Processor);

    e.ProcessorLocal = d;
  }).call(this, r(3).Buffer);
}, function (t, e, r) {
  "use strict";

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var n = function (t) {
    this.converter = t, this.params = t.parseParam, this.runtime = t.parseRuntime;
  };

  e.Processor = n;
}, function (t, e, r) {
  "use strict";

  (function (t) {
    var n = this && this.__importDefault || function (t) {
      return t && t.__esModule ? t : {
        default: t
      };
    };

    Object.defineProperty(e, "__esModule", {
      value: !0
    });
    var i = n(r(55));

    e.prepareData = function (e, r) {
      var n = function (e, r) {
        return r.csvLineBuffer && r.csvLineBuffer.length > 0 ? t.concat([r.csvLineBuffer, e]) : e;
      }(e, r);

      r.csvLineBuffer = void 0;

      var o = function (t, e) {
        var r = t.length - 1;

        if (0 != (128 & t[r])) {
          for (; 128 == (192 & t[r]);) r--;

          r--;
        }

        return r != t.length - 1 ? (e.csvLineBuffer = t.slice(r + 1), t.slice(0, r + 1)) : t;
      }(n, r).toString("utf8");

      return !1 === r.started ? i.default(o) : o;
    };
  }).call(this, r(3).Buffer);
}, function (t, e, r) {
  "use strict";

  (function (e) {
    var n = r(56);

    t.exports = function (t) {
      return "string" == typeof t && 65279 === t.charCodeAt(0) ? t.slice(1) : e.isBuffer(t) && n(t) && 239 === t[0] && 187 === t[1] && 191 === t[2] ? t.slice(3) : t;
    };
  }).call(this, r(3).Buffer);
}, function (t, e) {
  t.exports = function (t) {
    for (var e = 0; e < t.length;) if (9 == t[e] || 10 == t[e] || 13 == t[e] || 32 <= t[e] && t[e] <= 126) e += 1;else if (194 <= t[e] && t[e] <= 223 && 128 <= t[e + 1] && t[e + 1] <= 191) e += 2;else if (224 == t[e] && 160 <= t[e + 1] && t[e + 1] <= 191 && 128 <= t[e + 2] && t[e + 2] <= 191 || (225 <= t[e] && t[e] <= 236 || 238 == t[e] || 239 == t[e]) && 128 <= t[e + 1] && t[e + 1] <= 191 && 128 <= t[e + 2] && t[e + 2] <= 191 || 237 == t[e] && 128 <= t[e + 1] && t[e + 1] <= 159 && 128 <= t[e + 2] && t[e + 2] <= 191) e += 3;else {
      if (!(240 == t[e] && 144 <= t[e + 1] && t[e + 1] <= 191 && 128 <= t[e + 2] && t[e + 2] <= 191 && 128 <= t[e + 3] && t[e + 3] <= 191 || 241 <= t[e] && t[e] <= 243 && 128 <= t[e + 1] && t[e + 1] <= 191 && 128 <= t[e + 2] && t[e + 2] <= 191 && 128 <= t[e + 3] && t[e + 3] <= 191 || 244 == t[e] && 128 <= t[e + 1] && t[e + 1] <= 143 && 128 <= t[e + 2] && t[e + 2] <= 191 && 128 <= t[e + 3] && t[e + 3] <= 191)) return !1;
      e += 4;
    }

    return !0;
  };
}, function (t, e, r) {
  "use strict";

  var n = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      default: t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = n(r(16));

  e.stringToLines = function (t, e) {
    var r = i.default(t, e),
        n = t.split(r);
    return {
      lines: n,
      partial: n.pop() || ""
    };
  };
}, function (t, e, r) {
  "use strict";

  var n = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      default: t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var i = n(r(16)),
      o = r(28),
      s = [",", "|", "\t", ";", ":"],
      a = function () {
    function t(t) {
      this.conv = t, this.cachedRegExp = {}, this.delimiterEmitted = !1, this._needEmitDelimiter = void 0, this.quote = t.parseParam.quote, this.trim = t.parseParam.trim, this.escape = t.parseParam.escape;
    }

    return Object.defineProperty(t.prototype, "needEmitDelimiter", {
      get: function () {
        return void 0 === this._needEmitDelimiter && (this._needEmitDelimiter = this.conv.listeners("delimiter").length > 0), this._needEmitDelimiter;
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.parse = function (t) {
      if (0 === t.length || this.conv.parseParam.ignoreEmpty && 0 === t.trim().length) return {
        cells: [],
        closed: !0
      };
      var e = this.quote,
          r = this.trim;
      this.escape, (this.conv.parseRuntime.delimiter instanceof Array || "auto" === this.conv.parseRuntime.delimiter.toLowerCase()) && (this.conv.parseRuntime.delimiter = this.getDelimiter(t)), this.needEmitDelimiter && !this.delimiterEmitted && (this.conv.emit("delimiter", this.conv.parseRuntime.delimiter), this.delimiterEmitted = !0);
      var n = this.conv.parseRuntime.delimiter,
          i = t.split(n);

      if ("off" === e) {
        if (r) for (var o = 0; o < i.length; o++) i[o] = i[o].trim();
        return {
          cells: i,
          closed: !0
        };
      }

      return this.toCSVRow(i, r, e, n);
    }, t.prototype.toCSVRow = function (t, e, r, n) {
      for (var i = [], s = !1, a = "", u = 0, c = t.length; u < c; u++) {
        var l = t[u];
        !s && e && (l = o.trimLeft(l));
        var f = l.length;
        if (s) this.isQuoteClose(l) ? (s = !1, a += n + (l = l.substr(0, f - 1)), a = this.escapeQuote(a), e && (a = o.trimRight(a)), i.push(a), a = "") : a += n + l;else {
          if (2 === f && l === this.quote + this.quote) {
            i.push("");
            continue;
          }

          if (this.isQuoteOpen(l)) {
            if (l = l.substr(1), this.isQuoteClose(l)) {
              l = l.substring(0, l.lastIndexOf(r)), l = this.escapeQuote(l), i.push(l);
              continue;
            }

            if (-1 !== l.indexOf(r)) {
              for (var h = 0, p = "", d = 0, _ = l; d < _.length; d++) {
                var v = _[d];
                v === r && p !== this.escape ? (h++, p = "") : p = v;
              }

              if (h % 2 == 1) {
                e && (l = o.trimRight(l)), i.push(r + l);
                continue;
              }

              s = !0, a += l;
              continue;
            }

            s = !0, a += l;
            continue;
          }

          e && (l = o.trimRight(l)), i.push(l);
        }
      }

      return {
        cells: i,
        closed: !s
      };
    }, t.prototype.getDelimiter = function (t) {
      var e;
      if ("auto" === this.conv.parseParam.delimiter) e = s;else {
        if (!(this.conv.parseParam.delimiter instanceof Array)) return this.conv.parseParam.delimiter;
        e = this.conv.parseParam.delimiter;
      }
      var r = 0,
          n = ",";
      return e.forEach(function (e) {
        var i = t.split(e).length;
        i > r && (n = e, r = i);
      }), n;
    }, t.prototype.isQuoteOpen = function (t) {
      var e = this.quote,
          r = this.escape;
      return t[0] === e && (t[1] !== e || t[1] === r && (t[2] === e || 2 === t.length));
    }, t.prototype.isQuoteClose = function (t) {
      var e = this.quote,
          r = this.escape;
      this.conv.parseParam.trim && (t = o.trimRight(t));

      for (var n = 0, i = t.length - 1; t[i] === e || t[i] === r;) i--, n++;

      return n % 2 != 0;
    }, t.prototype.escapeQuote = function (t) {
      var e = "es|" + this.quote + "|" + this.escape;
      void 0 === this.cachedRegExp[e] && (this.cachedRegExp[e] = new RegExp("\\" + this.escape + "\\" + this.quote, "g"));
      var r = this.cachedRegExp[e];
      return t.replace(r, this.quote);
    }, t.prototype.parseMultiLines = function (t) {
      for (var e = [], r = ""; t.length;) {
        var n = r + t.shift(),
            s = this.parse(n);
        0 === s.cells.length && this.conv.parseParam.ignoreEmpty || (s.closed || this.conv.parseParam.alwaysSplitAtEOL ? (this.conv.parseRuntime.selectedColumns ? e.push(o.filterArray(s.cells, this.conv.parseRuntime.selectedColumns)) : e.push(s.cells), r = "") : r = n + (i.default(n, this.conv.parseRuntime) || "\n"));
      }

      return {
        rowsCells: e,
        partial: r
      };
    }, t;
  }();

  e.RowSplit = a;
}, function (t, e, r) {
  "use strict";

  var n = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      default: t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var i = n(r(29)),
      o = n(r(60)),
      s = /^[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?$/;

  function a(t, e, r) {
    if (e.parseParam.checkColumn && e.parseRuntime.headers && t.length !== e.parseRuntime.headers.length) throw i.default.column_mismatched(e.parseRuntime.parsedLineNumber + r);
    return function (t, e, r) {
      for (var n = !1, i = {}, o = 0, s = t.length; o < s; o++) {
        var a = t[o];

        if (!r.parseParam.ignoreEmpty || "" !== a) {
          n = !0;
          var u = e[o];
          u && "" !== u || (u = e[o] = "field" + (o + 1));
          var f = c(u, o, r);

          if (f) {
            var h = f(a, u, i, t, o);
            void 0 !== h && l(i, u, h, r, o);
          } else {
            if (r.parseParam.checkType) a = p(a, u, o, r)(a);
            void 0 !== a && l(i, u, a, r, o);
          }
        }
      }

      return n ? i : null;
    }(t, e.parseRuntime.headers || [], e) || null;
  }

  e.default = function (t, e) {
    for (var r = [], n = 0, i = t.length; n < i; n++) {
      var o = a(t[n], e, n);
      o && r.push(o);
    }

    return r;
  };

  var u = {
    string: _,
    number: d,
    omit: function () {}
  };

  function c(t, e, r) {
    if (void 0 !== r.parseRuntime.columnConv[e]) return r.parseRuntime.columnConv[e];
    var n = r.parseParam.colParser[t];
    if (void 0 === n) return r.parseRuntime.columnConv[e] = null;

    if ("object" == _typeof(n) && (n = n.cellParser || "string"), "string" == typeof n) {
      n = n.trim().toLowerCase();
      var i = u[n];
      return r.parseRuntime.columnConv[e] = i || null;
    }

    return r.parseRuntime.columnConv[e] = "function" == typeof n ? n : null;
  }

  function l(t, e, r, n, i) {
    if (!n.parseRuntime.columnValueSetter[i]) if (n.parseParam.flatKeys) n.parseRuntime.columnValueSetter[i] = f;else if (e.indexOf(".") > -1) {
      for (var o = e.split("."), s = !0; o.length > 0;) if (0 === o.shift().length) {
        s = !1;
        break;
      }

      !s || n.parseParam.colParser[e] && n.parseParam.colParser[e].flat ? n.parseRuntime.columnValueSetter[i] = f : n.parseRuntime.columnValueSetter[i] = h;
    } else n.parseRuntime.columnValueSetter[i] = f;
    !0 === n.parseParam.nullObject && "null" === r && (r = null), n.parseRuntime.columnValueSetter[i](t, e, r);
  }

  function f(t, e, r) {
    t[e] = r;
  }

  function h(t, e, r) {
    o.default(t, e, r);
  }

  function p(t, e, r, n) {
    return n.parseRuntime.headerType[r] ? n.parseRuntime.headerType[r] : e.indexOf("number#!") > -1 ? n.parseRuntime.headerType[r] = d : e.indexOf("string#!") > -1 ? n.parseRuntime.headerType[r] = _ : n.parseParam.checkType ? n.parseRuntime.headerType[r] = v : n.parseRuntime.headerType[r] = _;
  }

  function d(t) {
    var e = parseFloat(t);
    return isNaN(e) ? t : e;
  }

  function _(t) {
    return t.toString();
  }

  function v(t) {
    var e = t.trim();
    return "" === e ? _(t) : s.test(e) ? d(t) : 5 === e.length && "false" === e.toLowerCase() || 4 === e.length && "true" === e.toLowerCase() ? function (t) {
      var e = t.trim();
      return 5 !== e.length || "false" !== e.toLowerCase();
    }(t) : "{" === e[0] && "}" === e[e.length - 1] || "[" === e[0] && "]" === e[e.length - 1] ? function (t) {
      try {
        return JSON.parse(t);
      } catch (e) {
        return t;
      }
    }(t) : _(t);
  }
}, function (t, e, r) {
  var n = r(61);

  t.exports = function (t, e, r) {
    return null == t ? t : n(t, e, r);
  };
}, function (t, e, r) {
  var n = r(62),
      i = r(74),
      o = r(103),
      s = r(20),
      a = r(104);

  t.exports = function (t, e, r, u) {
    if (!s(t)) return t;

    for (var c = -1, l = (e = i(e, t)).length, f = l - 1, h = t; null != h && ++c < l;) {
      var p = a(e[c]),
          d = r;

      if (c != f) {
        var _ = h[p];
        void 0 === (d = u ? u(_, p, h) : void 0) && (d = s(_) ? _ : o(e[c + 1]) ? [] : {});
      }

      n(h, p, d), h = h[p];
    }

    return t;
  };
}, function (t, e, r) {
  var n = r(63),
      i = r(31),
      o = Object.prototype.hasOwnProperty;

  t.exports = function (t, e, r) {
    var s = t[e];
    o.call(t, e) && i(s, r) && (void 0 !== r || e in t) || n(t, e, r);
  };
}, function (t, e, r) {
  var n = r(64);

  t.exports = function (t, e, r) {
    "__proto__" == e && n ? n(t, e, {
      configurable: !0,
      enumerable: !0,
      value: r,
      writable: !0
    }) : t[e] = r;
  };
}, function (t, e, r) {
  var n = r(17),
      i = function () {
    try {
      var t = n(Object, "defineProperty");
      return t({}, "", {}), t;
    } catch (t) {}
  }();

  t.exports = i;
}, function (t, e, r) {
  var n = r(66),
      i = r(70),
      o = r(20),
      s = r(72),
      a = /^\[object .+?Constructor\]$/,
      u = Function.prototype,
      c = Object.prototype,
      l = u.toString,
      f = c.hasOwnProperty,
      h = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

  t.exports = function (t) {
    return !(!o(t) || i(t)) && (n(t) ? h : a).test(s(t));
  };
}, function (t, e, r) {
  var n = r(30),
      i = r(20);

  t.exports = function (t) {
    if (!i(t)) return !1;
    var e = n(t);
    return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e;
  };
}, function (t, e, r) {
  (function (e) {
    var r = "object" == _typeof(e) && e && e.Object === Object && e;
    t.exports = r;
  }).call(this, r(0));
}, function (t, e, r) {
  var n = r(18),
      i = Object.prototype,
      o = i.hasOwnProperty,
      s = i.toString,
      a = n ? n.toStringTag : void 0;

  t.exports = function (t) {
    var e = o.call(t, a),
        r = t[a];

    try {
      t[a] = void 0;
      var n = !0;
    } catch (t) {}

    var i = s.call(t);
    return n && (e ? t[a] = r : delete t[a]), i;
  };
}, function (t, e) {
  var r = Object.prototype.toString;

  t.exports = function (t) {
    return r.call(t);
  };
}, function (t, e, r) {
  var n = r(71),
      i = function () {
    var t = /[^.]+$/.exec(n && n.keys && n.keys.IE_PROTO || "");
    return t ? "Symbol(src)_1." + t : "";
  }();

  t.exports = function (t) {
    return !!i && i in t;
  };
}, function (t, e, r) {
  var n = r(19)["__core-js_shared__"];
  t.exports = n;
}, function (t, e) {
  var r = Function.prototype.toString;

  t.exports = function (t) {
    if (null != t) {
      try {
        return r.call(t);
      } catch (t) {}

      try {
        return t + "";
      } catch (t) {}
    }

    return "";
  };
}, function (t, e) {
  t.exports = function (t, e) {
    return null == t ? void 0 : t[e];
  };
}, function (t, e, r) {
  var n = r(21),
      i = r(75),
      o = r(77),
      s = r(100);

  t.exports = function (t, e) {
    return n(t) ? t : i(t, e) ? [t] : o(s(t));
  };
}, function (t, e, r) {
  var n = r(21),
      i = r(22),
      o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      s = /^\w*$/;

  t.exports = function (t, e) {
    if (n(t)) return !1;

    var r = _typeof(t);

    return !("number" != r && "symbol" != r && "boolean" != r && null != t && !i(t)) || s.test(t) || !o.test(t) || null != e && t in Object(e);
  };
}, function (t, e) {
  t.exports = function (t) {
    return null != t && "object" == _typeof(t);
  };
}, function (t, e, r) {
  var n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      i = /\\(\\)?/g,
      o = r(78)(function (t) {
    var e = [];
    return 46 === t.charCodeAt(0) && e.push(""), t.replace(n, function (t, r, n, o) {
      e.push(n ? o.replace(i, "$1") : r || t);
    }), e;
  });
  t.exports = o;
}, function (t, e, r) {
  var n = r(79);

  t.exports = function (t) {
    var e = n(t, function (t) {
      return 500 === r.size && r.clear(), t;
    }),
        r = e.cache;
    return e;
  };
}, function (t, e, r) {
  var n = r(80),
      i = "Expected a function";

  function o(t, e) {
    if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);

    var r = function () {
      var n = arguments,
          i = e ? e.apply(this, n) : n[0],
          o = r.cache;
      if (o.has(i)) return o.get(i);
      var s = t.apply(this, n);
      return r.cache = o.set(i, s) || o, s;
    };

    return r.cache = new (o.Cache || n)(), r;
  }

  o.Cache = n, t.exports = o;
}, function (t, e, r) {
  var n = r(81),
      i = r(95),
      o = r(97),
      s = r(98),
      a = r(99);

  function u(t) {
    var e = -1,
        r = null == t ? 0 : t.length;

    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }

  u.prototype.clear = n, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = s, u.prototype.set = a, t.exports = u;
}, function (t, e, r) {
  var n = r(82),
      i = r(88),
      o = r(94);

  t.exports = function () {
    this.size = 0, this.__data__ = {
      hash: new n(),
      map: new (o || i)(),
      string: new n()
    };
  };
}, function (t, e, r) {
  var n = r(83),
      i = r(84),
      o = r(85),
      s = r(86),
      a = r(87);

  function u(t) {
    var e = -1,
        r = null == t ? 0 : t.length;

    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }

  u.prototype.clear = n, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = s, u.prototype.set = a, t.exports = u;
}, function (t, e, r) {
  var n = r(8);

  t.exports = function () {
    this.__data__ = n ? n(null) : {}, this.size = 0;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = this.has(t) && delete this.__data__[t];
    return this.size -= e ? 1 : 0, e;
  };
}, function (t, e, r) {
  var n = r(8),
      i = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    var e = this.__data__;

    if (n) {
      var r = e[t];
      return "__lodash_hash_undefined__" === r ? void 0 : r;
    }

    return i.call(e, t) ? e[t] : void 0;
  };
}, function (t, e, r) {
  var n = r(8),
      i = Object.prototype.hasOwnProperty;

  t.exports = function (t) {
    var e = this.__data__;
    return n ? void 0 !== e[t] : i.call(e, t);
  };
}, function (t, e, r) {
  var n = r(8);

  t.exports = function (t, e) {
    var r = this.__data__;
    return this.size += this.has(t) ? 0 : 1, r[t] = n && void 0 === e ? "__lodash_hash_undefined__" : e, this;
  };
}, function (t, e, r) {
  var n = r(89),
      i = r(90),
      o = r(91),
      s = r(92),
      a = r(93);

  function u(t) {
    var e = -1,
        r = null == t ? 0 : t.length;

    for (this.clear(); ++e < r;) {
      var n = t[e];
      this.set(n[0], n[1]);
    }
  }

  u.prototype.clear = n, u.prototype.delete = i, u.prototype.get = o, u.prototype.has = s, u.prototype.set = a, t.exports = u;
}, function (t, e) {
  t.exports = function () {
    this.__data__ = [], this.size = 0;
  };
}, function (t, e, r) {
  var n = r(9),
      i = Array.prototype.splice;

  t.exports = function (t) {
    var e = this.__data__,
        r = n(e, t);
    return !(r < 0 || (r == e.length - 1 ? e.pop() : i.call(e, r, 1), --this.size, 0));
  };
}, function (t, e, r) {
  var n = r(9);

  t.exports = function (t) {
    var e = this.__data__,
        r = n(e, t);
    return r < 0 ? void 0 : e[r][1];
  };
}, function (t, e, r) {
  var n = r(9);

  t.exports = function (t) {
    return n(this.__data__, t) > -1;
  };
}, function (t, e, r) {
  var n = r(9);

  t.exports = function (t, e) {
    var r = this.__data__,
        i = n(r, t);
    return i < 0 ? (++this.size, r.push([t, e])) : r[i][1] = e, this;
  };
}, function (t, e, r) {
  var n = r(17)(r(19), "Map");
  t.exports = n;
}, function (t, e, r) {
  var n = r(10);

  t.exports = function (t) {
    var e = n(this, t).delete(t);
    return this.size -= e ? 1 : 0, e;
  };
}, function (t, e) {
  t.exports = function (t) {
    var e = _typeof(t);

    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t;
  };
}, function (t, e, r) {
  var n = r(10);

  t.exports = function (t) {
    return n(this, t).get(t);
  };
}, function (t, e, r) {
  var n = r(10);

  t.exports = function (t) {
    return n(this, t).has(t);
  };
}, function (t, e, r) {
  var n = r(10);

  t.exports = function (t, e) {
    var r = n(this, t),
        i = r.size;
    return r.set(t, e), this.size += r.size == i ? 0 : 1, this;
  };
}, function (t, e, r) {
  var n = r(101);

  t.exports = function (t) {
    return null == t ? "" : n(t);
  };
}, function (t, e, r) {
  var n = r(18),
      i = r(102),
      o = r(21),
      s = r(22),
      a = n ? n.prototype : void 0,
      u = a ? a.toString : void 0;

  t.exports = function t(e) {
    if ("string" == typeof e) return e;
    if (o(e)) return i(e, t) + "";
    if (s(e)) return u ? u.call(e) : "";
    var r = e + "";
    return "0" == r && 1 / e == -1 / 0 ? "-0" : r;
  };
}, function (t, e) {
  t.exports = function (t, e) {
    for (var r = -1, n = null == t ? 0 : t.length, i = Array(n); ++r < n;) i[r] = e(t[r], r, t);

    return i;
  };
}, function (t, e) {
  var r = /^(?:0|[1-9]\d*)$/;

  t.exports = function (t, e) {
    var n = _typeof(t);

    return !!(e = null == e ? 9007199254740991 : e) && ("number" == n || "symbol" != n && r.test(t)) && t > -1 && t % 1 == 0 && t < e;
  };
}, function (t, e, r) {
  var n = r(22);

  t.exports = function (t) {
    if ("string" == typeof t || n(t)) return t;
    var e = t + "";
    return "0" == e && 1 / t == -1 / 0 ? "-0" : e;
  };
}, function (t, e, r) {
  "use strict";

  var n = this && this.__importDefault || function (t) {
    return t && t.__esModule ? t : {
      default: t
    };
  };

  Object.defineProperty(e, "__esModule", {
    value: !0
  });

  var i = n(r(15)),
      o = r(106),
      s = function () {
    function t(t) {
      this.converter = t, this.finalResult = [];
    }

    return Object.defineProperty(t.prototype, "needEmitLine", {
      get: function () {
        return !!this.converter.parseRuntime.subscribe && !!this.converter.parseRuntime.subscribe.onNext || this.needPushDownstream;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t.prototype, "needPushDownstream", {
      get: function () {
        return void 0 === this._needPushDownstream && (this._needPushDownstream = this.converter.listeners("data").length > 0 || this.converter.listeners("readable").length > 0), this._needPushDownstream;
      },
      enumerable: !0,
      configurable: !0
    }), Object.defineProperty(t.prototype, "needEmitAll", {
      get: function () {
        return !!this.converter.parseRuntime.then && this.converter.parseParam.needEmitAll;
      },
      enumerable: !0,
      configurable: !0
    }), t.prototype.processResult = function (t) {
      var e = this,
          r = this.converter.parseRuntime.parsedLineNumber;
      return this.needPushDownstream && "array" === this.converter.parseParam.downstreamFormat && 0 === r && a(this.converter, "[" + o.EOL), new i.default(function (r, n) {
        e.needEmitLine ? function t(e, r, n, i, o) {
          if (n >= e.length) o();else if (r.parseRuntime.subscribe && r.parseRuntime.subscribe.onNext) {
            var s = r.parseRuntime.subscribe.onNext,
                u = e[n],
                c = s(u, r.parseRuntime.parsedLineNumber + n);
            if (n++, c && c.then) c.then(function () {
              !function (e, r, n, i, o, s, u) {
                o && a(n, u), t(e, n, i, o, s);
              }(e, 0, r, n, i, o, u);
            }, o);else {
              for (i && a(r, u); n < e.length;) {
                var l = e[n];
                s(l, r.parseRuntime.parsedLineNumber + n), n++, i && a(r, l);
              }

              o();
            }
          } else {
            if (i) for (; n < e.length;) l = e[n++], a(r, l);
            o();
          }
        }(t, e.converter, 0, e.needPushDownstream, function (i) {
          i ? n(i) : (e.appendFinalResult(t), r());
        }) : (e.appendFinalResult(t), r());
      });
    }, t.prototype.appendFinalResult = function (t) {
      this.needEmitAll && (this.finalResult = this.finalResult.concat(t)), this.converter.parseRuntime.parsedLineNumber += t.length;
    }, t.prototype.processError = function (t) {
      this.converter.parseRuntime.subscribe && this.converter.parseRuntime.subscribe.onError && this.converter.parseRuntime.subscribe.onError(t), this.converter.parseRuntime.then && this.converter.parseRuntime.then.onrejected && this.converter.parseRuntime.then.onrejected(t);
    }, t.prototype.endProcess = function () {
      this.converter.parseRuntime.then && this.converter.parseRuntime.then.onfulfilled && (this.needEmitAll ? this.converter.parseRuntime.then.onfulfilled(this.finalResult) : this.converter.parseRuntime.then.onfulfilled([])), this.converter.parseRuntime.subscribe && this.converter.parseRuntime.subscribe.onCompleted && this.converter.parseRuntime.subscribe.onCompleted(), this.needPushDownstream && "array" === this.converter.parseParam.downstreamFormat && a(this.converter, "]" + o.EOL);
    }, t;
  }();

  function a(t, e) {
    if ("object" != _typeof(e) || t.options.objectMode) t.push(e);else {
      var r = JSON.stringify(e);
      t.push(r + ("array" === t.parseParam.downstreamFormat ? "," + o.EOL : o.EOL), "utf8");
    }
  }

  e.Result = s;
}, function (t, e) {
  e.endianness = function () {
    return "LE";
  }, e.hostname = function () {
    return "undefined" != typeof location ? location.hostname : "";
  }, e.loadavg = function () {
    return [];
  }, e.uptime = function () {
    return 0;
  }, e.freemem = function () {
    return Number.MAX_VALUE;
  }, e.totalmem = function () {
    return Number.MAX_VALUE;
  }, e.cpus = function () {
    return [];
  }, e.type = function () {
    return "Browser";
  }, e.release = function () {
    return "undefined" != typeof navigator ? navigator.appVersion : "";
  }, e.networkInterfaces = e.getNetworkInterfaces = function () {
    return {};
  }, e.arch = function () {
    return "javascript";
  }, e.platform = function () {
    return "browser";
  }, e.tmpdir = e.tmpDir = function () {
    return "/tmp";
  }, e.EOL = "\n", e.homedir = function () {
    return "/";
  };
}]);
},{}],"node_modules/ajv/dist/compile/codegen/code.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexpCode = exports.getEsmExportName = exports.getProperty = exports.safeStringify = exports.stringify = exports.strConcat = exports.addCodeArg = exports.str = exports._ = exports.nil = exports._Code = exports.Name = exports.IDENTIFIER = exports._CodeOrName = void 0;
class _CodeOrName {
}
exports._CodeOrName = _CodeOrName;
exports.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
class Name extends _CodeOrName {
    constructor(s) {
        super();
        if (!exports.IDENTIFIER.test(s))
            throw new Error("CodeGen: name must be a valid identifier");
        this.str = s;
    }
    toString() {
        return this.str;
    }
    emptyStr() {
        return false;
    }
    get names() {
        return { [this.str]: 1 };
    }
}
exports.Name = Name;
class _Code extends _CodeOrName {
    constructor(code) {
        super();
        this._items = typeof code === "string" ? [code] : code;
    }
    toString() {
        return this.str;
    }
    emptyStr() {
        if (this._items.length > 1)
            return false;
        const item = this._items[0];
        return item === "" || item === '""';
    }
    get str() {
        var _a;
        return ((_a = this._str) !== null && _a !== void 0 ? _a : (this._str = this._items.reduce((s, c) => `${s}${c}`, "")));
    }
    get names() {
        var _a;
        return ((_a = this._names) !== null && _a !== void 0 ? _a : (this._names = this._items.reduce((names, c) => {
            if (c instanceof Name)
                names[c.str] = (names[c.str] || 0) + 1;
            return names;
        }, {})));
    }
}
exports._Code = _Code;
exports.nil = new _Code("");
function _(strs, ...args) {
    const code = [strs[0]];
    let i = 0;
    while (i < args.length) {
        addCodeArg(code, args[i]);
        code.push(strs[++i]);
    }
    return new _Code(code);
}
exports._ = _;
const plus = new _Code("+");
function str(strs, ...args) {
    const expr = [safeStringify(strs[0])];
    let i = 0;
    while (i < args.length) {
        expr.push(plus);
        addCodeArg(expr, args[i]);
        expr.push(plus, safeStringify(strs[++i]));
    }
    optimize(expr);
    return new _Code(expr);
}
exports.str = str;
function addCodeArg(code, arg) {
    if (arg instanceof _Code)
        code.push(...arg._items);
    else if (arg instanceof Name)
        code.push(arg);
    else
        code.push(interpolate(arg));
}
exports.addCodeArg = addCodeArg;
function optimize(expr) {
    let i = 1;
    while (i < expr.length - 1) {
        if (expr[i] === plus) {
            const res = mergeExprItems(expr[i - 1], expr[i + 1]);
            if (res !== undefined) {
                expr.splice(i - 1, 3, res);
                continue;
            }
            expr[i++] = "+";
        }
        i++;
    }
}
function mergeExprItems(a, b) {
    if (b === '""')
        return a;
    if (a === '""')
        return b;
    if (typeof a == "string") {
        if (b instanceof Name || a[a.length - 1] !== '"')
            return;
        if (typeof b != "string")
            return `${a.slice(0, -1)}${b}"`;
        if (b[0] === '"')
            return a.slice(0, -1) + b.slice(1);
        return;
    }
    if (typeof b == "string" && b[0] === '"' && !(a instanceof Name))
        return `"${a}${b.slice(1)}`;
    return;
}
function strConcat(c1, c2) {
    return c2.emptyStr() ? c1 : c1.emptyStr() ? c2 : str `${c1}${c2}`;
}
exports.strConcat = strConcat;
// TODO do not allow arrays here
function interpolate(x) {
    return typeof x == "number" || typeof x == "boolean" || x === null
        ? x
        : safeStringify(Array.isArray(x) ? x.join(",") : x);
}
function stringify(x) {
    return new _Code(safeStringify(x));
}
exports.stringify = stringify;
function safeStringify(x) {
    return JSON.stringify(x)
        .replace(/\u2028/g, "\\u2028")
        .replace(/\u2029/g, "\\u2029");
}
exports.safeStringify = safeStringify;
function getProperty(key) {
    return typeof key == "string" && exports.IDENTIFIER.test(key) ? new _Code(`.${key}`) : _ `[${key}]`;
}
exports.getProperty = getProperty;
//Does best effort to format the name properly
function getEsmExportName(key) {
    if (typeof key == "string" && exports.IDENTIFIER.test(key)) {
        return new _Code(`${key}`);
    }
    throw new Error(`CodeGen: invalid export name: ${key}, use explicit $id name mapping`);
}
exports.getEsmExportName = getEsmExportName;
function regexpCode(rx) {
    return new _Code(rx.toString());
}
exports.regexpCode = regexpCode;

},{}],"node_modules/ajv/dist/compile/codegen/scope.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueScope = exports.ValueScopeName = exports.Scope = exports.varKinds = exports.UsedValueState = void 0;
const code_1 = require("./code");
class ValueError extends Error {
    constructor(name) {
        super(`CodeGen: "code" for ${name} not defined`);
        this.value = name.value;
    }
}
var UsedValueState;
(function (UsedValueState) {
    UsedValueState[UsedValueState["Started"] = 0] = "Started";
    UsedValueState[UsedValueState["Completed"] = 1] = "Completed";
})(UsedValueState = exports.UsedValueState || (exports.UsedValueState = {}));
exports.varKinds = {
    const: new code_1.Name("const"),
    let: new code_1.Name("let"),
    var: new code_1.Name("var"),
};
class Scope {
    constructor({ prefixes, parent } = {}) {
        this._names = {};
        this._prefixes = prefixes;
        this._parent = parent;
    }
    toName(nameOrPrefix) {
        return nameOrPrefix instanceof code_1.Name ? nameOrPrefix : this.name(nameOrPrefix);
    }
    name(prefix) {
        return new code_1.Name(this._newName(prefix));
    }
    _newName(prefix) {
        const ng = this._names[prefix] || this._nameGroup(prefix);
        return `${prefix}${ng.index++}`;
    }
    _nameGroup(prefix) {
        var _a, _b;
        if (((_b = (_a = this._parent) === null || _a === void 0 ? void 0 : _a._prefixes) === null || _b === void 0 ? void 0 : _b.has(prefix)) || (this._prefixes && !this._prefixes.has(prefix))) {
            throw new Error(`CodeGen: prefix "${prefix}" is not allowed in this scope`);
        }
        return (this._names[prefix] = { prefix, index: 0 });
    }
}
exports.Scope = Scope;
class ValueScopeName extends code_1.Name {
    constructor(prefix, nameStr) {
        super(nameStr);
        this.prefix = prefix;
    }
    setValue(value, { property, itemIndex }) {
        this.value = value;
        this.scopePath = (0, code_1._) `.${new code_1.Name(property)}[${itemIndex}]`;
    }
}
exports.ValueScopeName = ValueScopeName;
const line = (0, code_1._) `\n`;
class ValueScope extends Scope {
    constructor(opts) {
        super(opts);
        this._values = {};
        this._scope = opts.scope;
        this.opts = { ...opts, _n: opts.lines ? line : code_1.nil };
    }
    get() {
        return this._scope;
    }
    name(prefix) {
        return new ValueScopeName(prefix, this._newName(prefix));
    }
    value(nameOrPrefix, value) {
        var _a;
        if (value.ref === undefined)
            throw new Error("CodeGen: ref must be passed in value");
        const name = this.toName(nameOrPrefix);
        const { prefix } = name;
        const valueKey = (_a = value.key) !== null && _a !== void 0 ? _a : value.ref;
        let vs = this._values[prefix];
        if (vs) {
            const _name = vs.get(valueKey);
            if (_name)
                return _name;
        }
        else {
            vs = this._values[prefix] = new Map();
        }
        vs.set(valueKey, name);
        const s = this._scope[prefix] || (this._scope[prefix] = []);
        const itemIndex = s.length;
        s[itemIndex] = value.ref;
        name.setValue(value, { property: prefix, itemIndex });
        return name;
    }
    getValue(prefix, keyOrRef) {
        const vs = this._values[prefix];
        if (!vs)
            return;
        return vs.get(keyOrRef);
    }
    scopeRefs(scopeName, values = this._values) {
        return this._reduceValues(values, (name) => {
            if (name.scopePath === undefined)
                throw new Error(`CodeGen: name "${name}" has no value`);
            return (0, code_1._) `${scopeName}${name.scopePath}`;
        });
    }
    scopeCode(values = this._values, usedValues, getCode) {
        return this._reduceValues(values, (name) => {
            if (name.value === undefined)
                throw new Error(`CodeGen: name "${name}" has no value`);
            return name.value.code;
        }, usedValues, getCode);
    }
    _reduceValues(values, valueCode, usedValues = {}, getCode) {
        let code = code_1.nil;
        for (const prefix in values) {
            const vs = values[prefix];
            if (!vs)
                continue;
            const nameSet = (usedValues[prefix] = usedValues[prefix] || new Map());
            vs.forEach((name) => {
                if (nameSet.has(name))
                    return;
                nameSet.set(name, UsedValueState.Started);
                let c = valueCode(name);
                if (c) {
                    const def = this.opts.es5 ? exports.varKinds.var : exports.varKinds.const;
                    code = (0, code_1._) `${code}${def} ${name} = ${c};${this.opts._n}`;
                }
                else if ((c = getCode === null || getCode === void 0 ? void 0 : getCode(name))) {
                    code = (0, code_1._) `${code}${c}${this.opts._n}`;
                }
                else {
                    throw new ValueError(name);
                }
                nameSet.set(name, UsedValueState.Completed);
            });
        }
        return code;
    }
}
exports.ValueScope = ValueScope;

},{"./code":"node_modules/ajv/dist/compile/codegen/code.js"}],"node_modules/ajv/dist/compile/codegen/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.or = exports.and = exports.not = exports.CodeGen = exports.operators = exports.varKinds = exports.ValueScopeName = exports.ValueScope = exports.Scope = exports.Name = exports.regexpCode = exports.stringify = exports.getProperty = exports.nil = exports.strConcat = exports.str = exports._ = void 0;
const code_1 = require("./code");
const scope_1 = require("./scope");
var code_2 = require("./code");
Object.defineProperty(exports, "_", { enumerable: true, get: function () { return code_2._; } });
Object.defineProperty(exports, "str", { enumerable: true, get: function () { return code_2.str; } });
Object.defineProperty(exports, "strConcat", { enumerable: true, get: function () { return code_2.strConcat; } });
Object.defineProperty(exports, "nil", { enumerable: true, get: function () { return code_2.nil; } });
Object.defineProperty(exports, "getProperty", { enumerable: true, get: function () { return code_2.getProperty; } });
Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return code_2.stringify; } });
Object.defineProperty(exports, "regexpCode", { enumerable: true, get: function () { return code_2.regexpCode; } });
Object.defineProperty(exports, "Name", { enumerable: true, get: function () { return code_2.Name; } });
var scope_2 = require("./scope");
Object.defineProperty(exports, "Scope", { enumerable: true, get: function () { return scope_2.Scope; } });
Object.defineProperty(exports, "ValueScope", { enumerable: true, get: function () { return scope_2.ValueScope; } });
Object.defineProperty(exports, "ValueScopeName", { enumerable: true, get: function () { return scope_2.ValueScopeName; } });
Object.defineProperty(exports, "varKinds", { enumerable: true, get: function () { return scope_2.varKinds; } });
exports.operators = {
    GT: new code_1._Code(">"),
    GTE: new code_1._Code(">="),
    LT: new code_1._Code("<"),
    LTE: new code_1._Code("<="),
    EQ: new code_1._Code("==="),
    NEQ: new code_1._Code("!=="),
    NOT: new code_1._Code("!"),
    OR: new code_1._Code("||"),
    AND: new code_1._Code("&&"),
    ADD: new code_1._Code("+"),
};
class Node {
    optimizeNodes() {
        return this;
    }
    optimizeNames(_names, _constants) {
        return this;
    }
}
class Def extends Node {
    constructor(varKind, name, rhs) {
        super();
        this.varKind = varKind;
        this.name = name;
        this.rhs = rhs;
    }
    render({ es5, _n }) {
        const varKind = es5 ? scope_1.varKinds.var : this.varKind;
        const rhs = this.rhs === undefined ? "" : ` = ${this.rhs}`;
        return `${varKind} ${this.name}${rhs};` + _n;
    }
    optimizeNames(names, constants) {
        if (!names[this.name.str])
            return;
        if (this.rhs)
            this.rhs = optimizeExpr(this.rhs, names, constants);
        return this;
    }
    get names() {
        return this.rhs instanceof code_1._CodeOrName ? this.rhs.names : {};
    }
}
class Assign extends Node {
    constructor(lhs, rhs, sideEffects) {
        super();
        this.lhs = lhs;
        this.rhs = rhs;
        this.sideEffects = sideEffects;
    }
    render({ _n }) {
        return `${this.lhs} = ${this.rhs};` + _n;
    }
    optimizeNames(names, constants) {
        if (this.lhs instanceof code_1.Name && !names[this.lhs.str] && !this.sideEffects)
            return;
        this.rhs = optimizeExpr(this.rhs, names, constants);
        return this;
    }
    get names() {
        const names = this.lhs instanceof code_1.Name ? {} : { ...this.lhs.names };
        return addExprNames(names, this.rhs);
    }
}
class AssignOp extends Assign {
    constructor(lhs, op, rhs, sideEffects) {
        super(lhs, rhs, sideEffects);
        this.op = op;
    }
    render({ _n }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + _n;
    }
}
class Label extends Node {
    constructor(label) {
        super();
        this.label = label;
        this.names = {};
    }
    render({ _n }) {
        return `${this.label}:` + _n;
    }
}
class Break extends Node {
    constructor(label) {
        super();
        this.label = label;
        this.names = {};
    }
    render({ _n }) {
        const label = this.label ? ` ${this.label}` : "";
        return `break${label};` + _n;
    }
}
class Throw extends Node {
    constructor(error) {
        super();
        this.error = error;
    }
    render({ _n }) {
        return `throw ${this.error};` + _n;
    }
    get names() {
        return this.error.names;
    }
}
class AnyCode extends Node {
    constructor(code) {
        super();
        this.code = code;
    }
    render({ _n }) {
        return `${this.code};` + _n;
    }
    optimizeNodes() {
        return `${this.code}` ? this : undefined;
    }
    optimizeNames(names, constants) {
        this.code = optimizeExpr(this.code, names, constants);
        return this;
    }
    get names() {
        return this.code instanceof code_1._CodeOrName ? this.code.names : {};
    }
}
class ParentNode extends Node {
    constructor(nodes = []) {
        super();
        this.nodes = nodes;
    }
    render(opts) {
        return this.nodes.reduce((code, n) => code + n.render(opts), "");
    }
    optimizeNodes() {
        const { nodes } = this;
        let i = nodes.length;
        while (i--) {
            const n = nodes[i].optimizeNodes();
            if (Array.isArray(n))
                nodes.splice(i, 1, ...n);
            else if (n)
                nodes[i] = n;
            else
                nodes.splice(i, 1);
        }
        return nodes.length > 0 ? this : undefined;
    }
    optimizeNames(names, constants) {
        const { nodes } = this;
        let i = nodes.length;
        while (i--) {
            // iterating backwards improves 1-pass optimization
            const n = nodes[i];
            if (n.optimizeNames(names, constants))
                continue;
            subtractNames(names, n.names);
            nodes.splice(i, 1);
        }
        return nodes.length > 0 ? this : undefined;
    }
    get names() {
        return this.nodes.reduce((names, n) => addNames(names, n.names), {});
    }
}
class BlockNode extends ParentNode {
    render(opts) {
        return "{" + opts._n + super.render(opts) + "}" + opts._n;
    }
}
class Root extends ParentNode {
}
class Else extends BlockNode {
}
Else.kind = "else";
class If extends BlockNode {
    constructor(condition, nodes) {
        super(nodes);
        this.condition = condition;
    }
    render(opts) {
        let code = `if(${this.condition})` + super.render(opts);
        if (this.else)
            code += "else " + this.else.render(opts);
        return code;
    }
    optimizeNodes() {
        super.optimizeNodes();
        const cond = this.condition;
        if (cond === true)
            return this.nodes; // else is ignored here
        let e = this.else;
        if (e) {
            const ns = e.optimizeNodes();
            e = this.else = Array.isArray(ns) ? new Else(ns) : ns;
        }
        if (e) {
            if (cond === false)
                return e instanceof If ? e : e.nodes;
            if (this.nodes.length)
                return this;
            return new If(not(cond), e instanceof If ? [e] : e.nodes);
        }
        if (cond === false || !this.nodes.length)
            return undefined;
        return this;
    }
    optimizeNames(names, constants) {
        var _a;
        this.else = (_a = this.else) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
        if (!(super.optimizeNames(names, constants) || this.else))
            return;
        this.condition = optimizeExpr(this.condition, names, constants);
        return this;
    }
    get names() {
        const names = super.names;
        addExprNames(names, this.condition);
        if (this.else)
            addNames(names, this.else.names);
        return names;
    }
}
If.kind = "if";
class For extends BlockNode {
}
For.kind = "for";
class ForLoop extends For {
    constructor(iteration) {
        super();
        this.iteration = iteration;
    }
    render(opts) {
        return `for(${this.iteration})` + super.render(opts);
    }
    optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants))
            return;
        this.iteration = optimizeExpr(this.iteration, names, constants);
        return this;
    }
    get names() {
        return addNames(super.names, this.iteration.names);
    }
}
class ForRange extends For {
    constructor(varKind, name, from, to) {
        super();
        this.varKind = varKind;
        this.name = name;
        this.from = from;
        this.to = to;
    }
    render(opts) {
        const varKind = opts.es5 ? scope_1.varKinds.var : this.varKind;
        const { name, from, to } = this;
        return `for(${varKind} ${name}=${from}; ${name}<${to}; ${name}++)` + super.render(opts);
    }
    get names() {
        const names = addExprNames(super.names, this.from);
        return addExprNames(names, this.to);
    }
}
class ForIter extends For {
    constructor(loop, varKind, name, iterable) {
        super();
        this.loop = loop;
        this.varKind = varKind;
        this.name = name;
        this.iterable = iterable;
    }
    render(opts) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(opts);
    }
    optimizeNames(names, constants) {
        if (!super.optimizeNames(names, constants))
            return;
        this.iterable = optimizeExpr(this.iterable, names, constants);
        return this;
    }
    get names() {
        return addNames(super.names, this.iterable.names);
    }
}
class Func extends BlockNode {
    constructor(name, args, async) {
        super();
        this.name = name;
        this.args = args;
        this.async = async;
    }
    render(opts) {
        const _async = this.async ? "async " : "";
        return `${_async}function ${this.name}(${this.args})` + super.render(opts);
    }
}
Func.kind = "func";
class Return extends ParentNode {
    render(opts) {
        return "return " + super.render(opts);
    }
}
Return.kind = "return";
class Try extends BlockNode {
    render(opts) {
        let code = "try" + super.render(opts);
        if (this.catch)
            code += this.catch.render(opts);
        if (this.finally)
            code += this.finally.render(opts);
        return code;
    }
    optimizeNodes() {
        var _a, _b;
        super.optimizeNodes();
        (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNodes();
        (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNodes();
        return this;
    }
    optimizeNames(names, constants) {
        var _a, _b;
        super.optimizeNames(names, constants);
        (_a = this.catch) === null || _a === void 0 ? void 0 : _a.optimizeNames(names, constants);
        (_b = this.finally) === null || _b === void 0 ? void 0 : _b.optimizeNames(names, constants);
        return this;
    }
    get names() {
        const names = super.names;
        if (this.catch)
            addNames(names, this.catch.names);
        if (this.finally)
            addNames(names, this.finally.names);
        return names;
    }
}
class Catch extends BlockNode {
    constructor(error) {
        super();
        this.error = error;
    }
    render(opts) {
        return `catch(${this.error})` + super.render(opts);
    }
}
Catch.kind = "catch";
class Finally extends BlockNode {
    render(opts) {
        return "finally" + super.render(opts);
    }
}
Finally.kind = "finally";
class CodeGen {
    constructor(extScope, opts = {}) {
        this._values = {};
        this._blockStarts = [];
        this._constants = {};
        this.opts = { ...opts, _n: opts.lines ? "\n" : "" };
        this._extScope = extScope;
        this._scope = new scope_1.Scope({ parent: extScope });
        this._nodes = [new Root()];
    }
    toString() {
        return this._root.render(this.opts);
    }
    // returns unique name in the internal scope
    name(prefix) {
        return this._scope.name(prefix);
    }
    // reserves unique name in the external scope
    scopeName(prefix) {
        return this._extScope.name(prefix);
    }
    // reserves unique name in the external scope and assigns value to it
    scopeValue(prefixOrName, value) {
        const name = this._extScope.value(prefixOrName, value);
        const vs = this._values[name.prefix] || (this._values[name.prefix] = new Set());
        vs.add(name);
        return name;
    }
    getScopeValue(prefix, keyOrRef) {
        return this._extScope.getValue(prefix, keyOrRef);
    }
    // return code that assigns values in the external scope to the names that are used internally
    // (same names that were returned by gen.scopeName or gen.scopeValue)
    scopeRefs(scopeName) {
        return this._extScope.scopeRefs(scopeName, this._values);
    }
    scopeCode() {
        return this._extScope.scopeCode(this._values);
    }
    _def(varKind, nameOrPrefix, rhs, constant) {
        const name = this._scope.toName(nameOrPrefix);
        if (rhs !== undefined && constant)
            this._constants[name.str] = rhs;
        this._leafNode(new Def(varKind, name, rhs));
        return name;
    }
    // `const` declaration (`var` in es5 mode)
    const(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.const, nameOrPrefix, rhs, _constant);
    }
    // `let` declaration with optional assignment (`var` in es5 mode)
    let(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.let, nameOrPrefix, rhs, _constant);
    }
    // `var` declaration with optional assignment
    var(nameOrPrefix, rhs, _constant) {
        return this._def(scope_1.varKinds.var, nameOrPrefix, rhs, _constant);
    }
    // assignment code
    assign(lhs, rhs, sideEffects) {
        return this._leafNode(new Assign(lhs, rhs, sideEffects));
    }
    // `+=` code
    add(lhs, rhs) {
        return this._leafNode(new AssignOp(lhs, exports.operators.ADD, rhs));
    }
    // appends passed SafeExpr to code or executes Block
    code(c) {
        if (typeof c == "function")
            c();
        else if (c !== code_1.nil)
            this._leafNode(new AnyCode(c));
        return this;
    }
    // returns code for object literal for the passed argument list of key-value pairs
    object(...keyValues) {
        const code = ["{"];
        for (const [key, value] of keyValues) {
            if (code.length > 1)
                code.push(",");
            code.push(key);
            if (key !== value || this.opts.es5) {
                code.push(":");
                (0, code_1.addCodeArg)(code, value);
            }
        }
        code.push("}");
        return new code_1._Code(code);
    }
    // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
    if(condition, thenBody, elseBody) {
        this._blockNode(new If(condition));
        if (thenBody && elseBody) {
            this.code(thenBody).else().code(elseBody).endIf();
        }
        else if (thenBody) {
            this.code(thenBody).endIf();
        }
        else if (elseBody) {
            throw new Error('CodeGen: "else" body without "then" body');
        }
        return this;
    }
    // `else if` clause - invalid without `if` or after `else` clauses
    elseIf(condition) {
        return this._elseNode(new If(condition));
    }
    // `else` clause - only valid after `if` or `else if` clauses
    else() {
        return this._elseNode(new Else());
    }
    // end `if` statement (needed if gen.if was used only with condition)
    endIf() {
        return this._endBlockNode(If, Else);
    }
    _for(node, forBody) {
        this._blockNode(node);
        if (forBody)
            this.code(forBody).endFor();
        return this;
    }
    // a generic `for` clause (or statement if `forBody` is passed)
    for(iteration, forBody) {
        return this._for(new ForLoop(iteration), forBody);
    }
    // `for` statement for a range of values
    forRange(nameOrPrefix, from, to, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.let) {
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new ForRange(varKind, name, from, to), () => forBody(name));
    }
    // `for-of` statement (in es5 mode replace with a normal for loop)
    forOf(nameOrPrefix, iterable, forBody, varKind = scope_1.varKinds.const) {
        const name = this._scope.toName(nameOrPrefix);
        if (this.opts.es5) {
            const arr = iterable instanceof code_1.Name ? iterable : this.var("_arr", iterable);
            return this.forRange("_i", 0, (0, code_1._) `${arr}.length`, (i) => {
                this.var(name, (0, code_1._) `${arr}[${i}]`);
                forBody(name);
            });
        }
        return this._for(new ForIter("of", varKind, name, iterable), () => forBody(name));
    }
    // `for-in` statement.
    // With option `ownProperties` replaced with a `for-of` loop for object keys
    forIn(nameOrPrefix, obj, forBody, varKind = this.opts.es5 ? scope_1.varKinds.var : scope_1.varKinds.const) {
        if (this.opts.ownProperties) {
            return this.forOf(nameOrPrefix, (0, code_1._) `Object.keys(${obj})`, forBody);
        }
        const name = this._scope.toName(nameOrPrefix);
        return this._for(new ForIter("in", varKind, name, obj), () => forBody(name));
    }
    // end `for` loop
    endFor() {
        return this._endBlockNode(For);
    }
    // `label` statement
    label(label) {
        return this._leafNode(new Label(label));
    }
    // `break` statement
    break(label) {
        return this._leafNode(new Break(label));
    }
    // `return` statement
    return(value) {
        const node = new Return();
        this._blockNode(node);
        this.code(value);
        if (node.nodes.length !== 1)
            throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(Return);
    }
    // `try` statement
    try(tryBody, catchCode, finallyCode) {
        if (!catchCode && !finallyCode)
            throw new Error('CodeGen: "try" without "catch" and "finally"');
        const node = new Try();
        this._blockNode(node);
        this.code(tryBody);
        if (catchCode) {
            const error = this.name("e");
            this._currNode = node.catch = new Catch(error);
            catchCode(error);
        }
        if (finallyCode) {
            this._currNode = node.finally = new Finally();
            this.code(finallyCode);
        }
        return this._endBlockNode(Catch, Finally);
    }
    // `throw` statement
    throw(error) {
        return this._leafNode(new Throw(error));
    }
    // start self-balancing block
    block(body, nodeCount) {
        this._blockStarts.push(this._nodes.length);
        if (body)
            this.code(body).endBlock(nodeCount);
        return this;
    }
    // end the current self-balancing block
    endBlock(nodeCount) {
        const len = this._blockStarts.pop();
        if (len === undefined)
            throw new Error("CodeGen: not in self-balancing block");
        const toClose = this._nodes.length - len;
        if (toClose < 0 || (nodeCount !== undefined && toClose !== nodeCount)) {
            throw new Error(`CodeGen: wrong number of nodes: ${toClose} vs ${nodeCount} expected`);
        }
        this._nodes.length = len;
        return this;
    }
    // `function` heading (or definition if funcBody is passed)
    func(name, args = code_1.nil, async, funcBody) {
        this._blockNode(new Func(name, args, async));
        if (funcBody)
            this.code(funcBody).endFunc();
        return this;
    }
    // end function definition
    endFunc() {
        return this._endBlockNode(Func);
    }
    optimize(n = 1) {
        while (n-- > 0) {
            this._root.optimizeNodes();
            this._root.optimizeNames(this._root.names, this._constants);
        }
    }
    _leafNode(node) {
        this._currNode.nodes.push(node);
        return this;
    }
    _blockNode(node) {
        this._currNode.nodes.push(node);
        this._nodes.push(node);
    }
    _endBlockNode(N1, N2) {
        const n = this._currNode;
        if (n instanceof N1 || (N2 && n instanceof N2)) {
            this._nodes.pop();
            return this;
        }
        throw new Error(`CodeGen: not in block "${N2 ? `${N1.kind}/${N2.kind}` : N1.kind}"`);
    }
    _elseNode(node) {
        const n = this._currNode;
        if (!(n instanceof If)) {
            throw new Error('CodeGen: "else" without "if"');
        }
        this._currNode = n.else = node;
        return this;
    }
    get _root() {
        return this._nodes[0];
    }
    get _currNode() {
        const ns = this._nodes;
        return ns[ns.length - 1];
    }
    set _currNode(node) {
        const ns = this._nodes;
        ns[ns.length - 1] = node;
    }
}
exports.CodeGen = CodeGen;
function addNames(names, from) {
    for (const n in from)
        names[n] = (names[n] || 0) + (from[n] || 0);
    return names;
}
function addExprNames(names, from) {
    return from instanceof code_1._CodeOrName ? addNames(names, from.names) : names;
}
function optimizeExpr(expr, names, constants) {
    if (expr instanceof code_1.Name)
        return replaceName(expr);
    if (!canOptimize(expr))
        return expr;
    return new code_1._Code(expr._items.reduce((items, c) => {
        if (c instanceof code_1.Name)
            c = replaceName(c);
        if (c instanceof code_1._Code)
            items.push(...c._items);
        else
            items.push(c);
        return items;
    }, []));
    function replaceName(n) {
        const c = constants[n.str];
        if (c === undefined || names[n.str] !== 1)
            return n;
        delete names[n.str];
        return c;
    }
    function canOptimize(e) {
        return (e instanceof code_1._Code &&
            e._items.some((c) => c instanceof code_1.Name && names[c.str] === 1 && constants[c.str] !== undefined));
    }
}
function subtractNames(names, from) {
    for (const n in from)
        names[n] = (names[n] || 0) - (from[n] || 0);
}
function not(x) {
    return typeof x == "boolean" || typeof x == "number" || x === null ? !x : (0, code_1._) `!${par(x)}`;
}
exports.not = not;
const andCode = mappend(exports.operators.AND);
// boolean AND (&&) expression with the passed arguments
function and(...args) {
    return args.reduce(andCode);
}
exports.and = and;
const orCode = mappend(exports.operators.OR);
// boolean OR (||) expression with the passed arguments
function or(...args) {
    return args.reduce(orCode);
}
exports.or = or;
function mappend(op) {
    return (x, y) => (x === code_1.nil ? y : y === code_1.nil ? x : (0, code_1._) `${par(x)} ${op} ${par(y)}`);
}
function par(x) {
    return x instanceof code_1.Name ? x : (0, code_1._) `(${x})`;
}

},{"./code":"node_modules/ajv/dist/compile/codegen/code.js","./scope":"node_modules/ajv/dist/compile/codegen/scope.js"}],"node_modules/ajv/dist/compile/util.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkStrictMode = exports.getErrorPath = exports.Type = exports.useFunc = exports.setEvaluated = exports.evaluatedPropsToName = exports.mergeEvaluated = exports.eachItem = exports.unescapeJsonPointer = exports.escapeJsonPointer = exports.escapeFragment = exports.unescapeFragment = exports.schemaRefOrVal = exports.schemaHasRulesButRef = exports.schemaHasRules = exports.checkUnknownRules = exports.alwaysValidSchema = exports.toHash = void 0;
const codegen_1 = require("./codegen");
const code_1 = require("./codegen/code");
// TODO refactor to use Set
function toHash(arr) {
    const hash = {};
    for (const item of arr)
        hash[item] = true;
    return hash;
}
exports.toHash = toHash;
function alwaysValidSchema(it, schema) {
    if (typeof schema == "boolean")
        return schema;
    if (Object.keys(schema).length === 0)
        return true;
    checkUnknownRules(it, schema);
    return !schemaHasRules(schema, it.self.RULES.all);
}
exports.alwaysValidSchema = alwaysValidSchema;
function checkUnknownRules(it, schema = it.schema) {
    const { opts, self } = it;
    if (!opts.strictSchema)
        return;
    if (typeof schema === "boolean")
        return;
    const rules = self.RULES.keywords;
    for (const key in schema) {
        if (!rules[key])
            checkStrictMode(it, `unknown keyword: "${key}"`);
    }
}
exports.checkUnknownRules = checkUnknownRules;
function schemaHasRules(schema, rules) {
    if (typeof schema == "boolean")
        return !schema;
    for (const key in schema)
        if (rules[key])
            return true;
    return false;
}
exports.schemaHasRules = schemaHasRules;
function schemaHasRulesButRef(schema, RULES) {
    if (typeof schema == "boolean")
        return !schema;
    for (const key in schema)
        if (key !== "$ref" && RULES.all[key])
            return true;
    return false;
}
exports.schemaHasRulesButRef = schemaHasRulesButRef;
function schemaRefOrVal({ topSchemaRef, schemaPath }, schema, keyword, $data) {
    if (!$data) {
        if (typeof schema == "number" || typeof schema == "boolean")
            return schema;
        if (typeof schema == "string")
            return (0, codegen_1._) `${schema}`;
    }
    return (0, codegen_1._) `${topSchemaRef}${schemaPath}${(0, codegen_1.getProperty)(keyword)}`;
}
exports.schemaRefOrVal = schemaRefOrVal;
function unescapeFragment(str) {
    return unescapeJsonPointer(decodeURIComponent(str));
}
exports.unescapeFragment = unescapeFragment;
function escapeFragment(str) {
    return encodeURIComponent(escapeJsonPointer(str));
}
exports.escapeFragment = escapeFragment;
function escapeJsonPointer(str) {
    if (typeof str == "number")
        return `${str}`;
    return str.replace(/~/g, "~0").replace(/\//g, "~1");
}
exports.escapeJsonPointer = escapeJsonPointer;
function unescapeJsonPointer(str) {
    return str.replace(/~1/g, "/").replace(/~0/g, "~");
}
exports.unescapeJsonPointer = unescapeJsonPointer;
function eachItem(xs, f) {
    if (Array.isArray(xs)) {
        for (const x of xs)
            f(x);
    }
    else {
        f(xs);
    }
}
exports.eachItem = eachItem;
function makeMergeEvaluated({ mergeNames, mergeToName, mergeValues, resultToName, }) {
    return (gen, from, to, toName) => {
        const res = to === undefined
            ? from
            : to instanceof codegen_1.Name
                ? (from instanceof codegen_1.Name ? mergeNames(gen, from, to) : mergeToName(gen, from, to), to)
                : from instanceof codegen_1.Name
                    ? (mergeToName(gen, to, from), from)
                    : mergeValues(from, to);
        return toName === codegen_1.Name && !(res instanceof codegen_1.Name) ? resultToName(gen, res) : res;
    };
}
exports.mergeEvaluated = {
    props: makeMergeEvaluated({
        mergeNames: (gen, from, to) => gen.if((0, codegen_1._) `${to} !== true && ${from} !== undefined`, () => {
            gen.if((0, codegen_1._) `${from} === true`, () => gen.assign(to, true), () => gen.assign(to, (0, codegen_1._) `${to} || {}`).code((0, codegen_1._) `Object.assign(${to}, ${from})`));
        }),
        mergeToName: (gen, from, to) => gen.if((0, codegen_1._) `${to} !== true`, () => {
            if (from === true) {
                gen.assign(to, true);
            }
            else {
                gen.assign(to, (0, codegen_1._) `${to} || {}`);
                setEvaluated(gen, to, from);
            }
        }),
        mergeValues: (from, to) => (from === true ? true : { ...from, ...to }),
        resultToName: evaluatedPropsToName,
    }),
    items: makeMergeEvaluated({
        mergeNames: (gen, from, to) => gen.if((0, codegen_1._) `${to} !== true && ${from} !== undefined`, () => gen.assign(to, (0, codegen_1._) `${from} === true ? true : ${to} > ${from} ? ${to} : ${from}`)),
        mergeToName: (gen, from, to) => gen.if((0, codegen_1._) `${to} !== true`, () => gen.assign(to, from === true ? true : (0, codegen_1._) `${to} > ${from} ? ${to} : ${from}`)),
        mergeValues: (from, to) => (from === true ? true : Math.max(from, to)),
        resultToName: (gen, items) => gen.var("items", items),
    }),
};
function evaluatedPropsToName(gen, ps) {
    if (ps === true)
        return gen.var("props", true);
    const props = gen.var("props", (0, codegen_1._) `{}`);
    if (ps !== undefined)
        setEvaluated(gen, props, ps);
    return props;
}
exports.evaluatedPropsToName = evaluatedPropsToName;
function setEvaluated(gen, props, ps) {
    Object.keys(ps).forEach((p) => gen.assign((0, codegen_1._) `${props}${(0, codegen_1.getProperty)(p)}`, true));
}
exports.setEvaluated = setEvaluated;
const snippets = {};
function useFunc(gen, f) {
    return gen.scopeValue("func", {
        ref: f,
        code: snippets[f.code] || (snippets[f.code] = new code_1._Code(f.code)),
    });
}
exports.useFunc = useFunc;
var Type;
(function (Type) {
    Type[Type["Num"] = 0] = "Num";
    Type[Type["Str"] = 1] = "Str";
})(Type = exports.Type || (exports.Type = {}));
function getErrorPath(dataProp, dataPropType, jsPropertySyntax) {
    // let path
    if (dataProp instanceof codegen_1.Name) {
        const isNumber = dataPropType === Type.Num;
        return jsPropertySyntax
            ? isNumber
                ? (0, codegen_1._) `"[" + ${dataProp} + "]"`
                : (0, codegen_1._) `"['" + ${dataProp} + "']"`
            : isNumber
                ? (0, codegen_1._) `"/" + ${dataProp}`
                : (0, codegen_1._) `"/" + ${dataProp}.replace(/~/g, "~0").replace(/\\//g, "~1")`; // TODO maybe use global escapePointer
    }
    return jsPropertySyntax ? (0, codegen_1.getProperty)(dataProp).toString() : "/" + escapeJsonPointer(dataProp);
}
exports.getErrorPath = getErrorPath;
function checkStrictMode(it, msg, mode = it.opts.strictSchema) {
    if (!mode)
        return;
    msg = `strict mode: ${msg}`;
    if (mode === true)
        throw new Error(msg);
    it.self.logger.warn(msg);
}
exports.checkStrictMode = checkStrictMode;

},{"./codegen":"node_modules/ajv/dist/compile/codegen/index.js","./codegen/code":"node_modules/ajv/dist/compile/codegen/code.js"}],"node_modules/ajv/dist/compile/names.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("./codegen");
const names = {
    // validation function arguments
    data: new codegen_1.Name("data"),
    // args passed from referencing schema
    valCxt: new codegen_1.Name("valCxt"),
    instancePath: new codegen_1.Name("instancePath"),
    parentData: new codegen_1.Name("parentData"),
    parentDataProperty: new codegen_1.Name("parentDataProperty"),
    rootData: new codegen_1.Name("rootData"),
    dynamicAnchors: new codegen_1.Name("dynamicAnchors"),
    // function scoped variables
    vErrors: new codegen_1.Name("vErrors"),
    errors: new codegen_1.Name("errors"),
    this: new codegen_1.Name("this"),
    // "globals"
    self: new codegen_1.Name("self"),
    scope: new codegen_1.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new codegen_1.Name("json"),
    jsonPos: new codegen_1.Name("jsonPos"),
    jsonLen: new codegen_1.Name("jsonLen"),
    jsonPart: new codegen_1.Name("jsonPart"),
};
exports.default = names;

},{"./codegen":"node_modules/ajv/dist/compile/codegen/index.js"}],"node_modules/ajv/dist/compile/errors.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendErrors = exports.resetErrorsCount = exports.reportExtraError = exports.reportError = exports.keyword$DataError = exports.keywordError = void 0;
const codegen_1 = require("./codegen");
const util_1 = require("./util");
const names_1 = require("./names");
exports.keywordError = {
    message: ({ keyword }) => (0, codegen_1.str) `must pass "${keyword}" keyword validation`,
};
exports.keyword$DataError = {
    message: ({ keyword, schemaType }) => schemaType
        ? (0, codegen_1.str) `"${keyword}" keyword must be ${schemaType} ($data)`
        : (0, codegen_1.str) `"${keyword}" keyword is invalid ($data)`,
};
function reportError(cxt, error = exports.keywordError, errorPaths, overrideAllErrors) {
    const { it } = cxt;
    const { gen, compositeRule, allErrors } = it;
    const errObj = errorObjectCode(cxt, error, errorPaths);
    if (overrideAllErrors !== null && overrideAllErrors !== void 0 ? overrideAllErrors : (compositeRule || allErrors)) {
        addError(gen, errObj);
    }
    else {
        returnErrors(it, (0, codegen_1._) `[${errObj}]`);
    }
}
exports.reportError = reportError;
function reportExtraError(cxt, error = exports.keywordError, errorPaths) {
    const { it } = cxt;
    const { gen, compositeRule, allErrors } = it;
    const errObj = errorObjectCode(cxt, error, errorPaths);
    addError(gen, errObj);
    if (!(compositeRule || allErrors)) {
        returnErrors(it, names_1.default.vErrors);
    }
}
exports.reportExtraError = reportExtraError;
function resetErrorsCount(gen, errsCount) {
    gen.assign(names_1.default.errors, errsCount);
    gen.if((0, codegen_1._) `${names_1.default.vErrors} !== null`, () => gen.if(errsCount, () => gen.assign((0, codegen_1._) `${names_1.default.vErrors}.length`, errsCount), () => gen.assign(names_1.default.vErrors, null)));
}
exports.resetErrorsCount = resetErrorsCount;
function extendErrors({ gen, keyword, schemaValue, data, errsCount, it, }) {
    /* istanbul ignore if */
    if (errsCount === undefined)
        throw new Error("ajv implementation error");
    const err = gen.name("err");
    gen.forRange("i", errsCount, names_1.default.errors, (i) => {
        gen.const(err, (0, codegen_1._) `${names_1.default.vErrors}[${i}]`);
        gen.if((0, codegen_1._) `${err}.instancePath === undefined`, () => gen.assign((0, codegen_1._) `${err}.instancePath`, (0, codegen_1.strConcat)(names_1.default.instancePath, it.errorPath)));
        gen.assign((0, codegen_1._) `${err}.schemaPath`, (0, codegen_1.str) `${it.errSchemaPath}/${keyword}`);
        if (it.opts.verbose) {
            gen.assign((0, codegen_1._) `${err}.schema`, schemaValue);
            gen.assign((0, codegen_1._) `${err}.data`, data);
        }
    });
}
exports.extendErrors = extendErrors;
function addError(gen, errObj) {
    const err = gen.const("err", errObj);
    gen.if((0, codegen_1._) `${names_1.default.vErrors} === null`, () => gen.assign(names_1.default.vErrors, (0, codegen_1._) `[${err}]`), (0, codegen_1._) `${names_1.default.vErrors}.push(${err})`);
    gen.code((0, codegen_1._) `${names_1.default.errors}++`);
}
function returnErrors(it, errs) {
    const { gen, validateName, schemaEnv } = it;
    if (schemaEnv.$async) {
        gen.throw((0, codegen_1._) `new ${it.ValidationError}(${errs})`);
    }
    else {
        gen.assign((0, codegen_1._) `${validateName}.errors`, errs);
        gen.return(false);
    }
}
const E = {
    keyword: new codegen_1.Name("keyword"),
    schemaPath: new codegen_1.Name("schemaPath"),
    params: new codegen_1.Name("params"),
    propertyName: new codegen_1.Name("propertyName"),
    message: new codegen_1.Name("message"),
    schema: new codegen_1.Name("schema"),
    parentSchema: new codegen_1.Name("parentSchema"),
};
function errorObjectCode(cxt, error, errorPaths) {
    const { createErrors } = cxt.it;
    if (createErrors === false)
        return (0, codegen_1._) `{}`;
    return errorObject(cxt, error, errorPaths);
}
function errorObject(cxt, error, errorPaths = {}) {
    const { gen, it } = cxt;
    const keyValues = [
        errorInstancePath(it, errorPaths),
        errorSchemaPath(cxt, errorPaths),
    ];
    extraErrorProps(cxt, error, keyValues);
    return gen.object(...keyValues);
}
function errorInstancePath({ errorPath }, { instancePath }) {
    const instPath = instancePath
        ? (0, codegen_1.str) `${errorPath}${(0, util_1.getErrorPath)(instancePath, util_1.Type.Str)}`
        : errorPath;
    return [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, instPath)];
}
function errorSchemaPath({ keyword, it: { errSchemaPath } }, { schemaPath, parentSchema }) {
    let schPath = parentSchema ? errSchemaPath : (0, codegen_1.str) `${errSchemaPath}/${keyword}`;
    if (schemaPath) {
        schPath = (0, codegen_1.str) `${schPath}${(0, util_1.getErrorPath)(schemaPath, util_1.Type.Str)}`;
    }
    return [E.schemaPath, schPath];
}
function extraErrorProps(cxt, { params, message }, keyValues) {
    const { keyword, data, schemaValue, it } = cxt;
    const { opts, propertyName, topSchemaRef, schemaPath } = it;
    keyValues.push([E.keyword, keyword], [E.params, typeof params == "function" ? params(cxt) : params || (0, codegen_1._) `{}`]);
    if (opts.messages) {
        keyValues.push([E.message, typeof message == "function" ? message(cxt) : message]);
    }
    if (opts.verbose) {
        keyValues.push([E.schema, schemaValue], [E.parentSchema, (0, codegen_1._) `${topSchemaRef}${schemaPath}`], [names_1.default.data, data]);
    }
    if (propertyName)
        keyValues.push([E.propertyName, propertyName]);
}

},{"./codegen":"node_modules/ajv/dist/compile/codegen/index.js","./util":"node_modules/ajv/dist/compile/util.js","./names":"node_modules/ajv/dist/compile/names.js"}],"node_modules/ajv/dist/compile/validate/boolSchema.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boolOrEmptySchema = exports.topBoolOrEmptySchema = void 0;
const errors_1 = require("../errors");
const codegen_1 = require("../codegen");
const names_1 = require("../names");
const boolError = {
    message: "boolean schema is false",
};
function topBoolOrEmptySchema(it) {
    const { gen, schema, validateName } = it;
    if (schema === false) {
        falseSchemaError(it, false);
    }
    else if (typeof schema == "object" && schema.$async === true) {
        gen.return(names_1.default.data);
    }
    else {
        gen.assign((0, codegen_1._) `${validateName}.errors`, null);
        gen.return(true);
    }
}
exports.topBoolOrEmptySchema = topBoolOrEmptySchema;
function boolOrEmptySchema(it, valid) {
    const { gen, schema } = it;
    if (schema === false) {
        gen.var(valid, false); // TODO var
        falseSchemaError(it);
    }
    else {
        gen.var(valid, true); // TODO var
    }
}
exports.boolOrEmptySchema = boolOrEmptySchema;
function falseSchemaError(it, overrideAllErrors) {
    const { gen, data } = it;
    // TODO maybe some other interface should be used for non-keyword validation errors...
    const cxt = {
        gen,
        keyword: "false schema",
        data,
        schema: false,
        schemaCode: false,
        schemaValue: false,
        params: {},
        it,
    };
    (0, errors_1.reportError)(cxt, boolError, undefined, overrideAllErrors);
}

},{"../errors":"node_modules/ajv/dist/compile/errors.js","../codegen":"node_modules/ajv/dist/compile/codegen/index.js","../names":"node_modules/ajv/dist/compile/names.js"}],"node_modules/ajv/dist/compile/rules.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRules = exports.isJSONType = void 0;
const _jsonTypes = ["string", "number", "integer", "boolean", "null", "object", "array"];
const jsonTypes = new Set(_jsonTypes);
function isJSONType(x) {
    return typeof x == "string" && jsonTypes.has(x);
}
exports.isJSONType = isJSONType;
function getRules() {
    const groups = {
        number: { type: "number", rules: [] },
        string: { type: "string", rules: [] },
        array: { type: "array", rules: [] },
        object: { type: "object", rules: [] },
    };
    return {
        types: { ...groups, integer: true, boolean: true, null: true },
        rules: [{ rules: [] }, groups.number, groups.string, groups.array, groups.object],
        post: { rules: [] },
        all: {},
        keywords: {},
    };
}
exports.getRules = getRules;

},{}],"node_modules/ajv/dist/compile/validate/applicability.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shouldUseRule = exports.shouldUseGroup = exports.schemaHasRulesForType = void 0;
function schemaHasRulesForType({ schema, self }, type) {
    const group = self.RULES.types[type];
    return group && group !== true && shouldUseGroup(schema, group);
}
exports.schemaHasRulesForType = schemaHasRulesForType;
function shouldUseGroup(schema, group) {
    return group.rules.some((rule) => shouldUseRule(schema, rule));
}
exports.shouldUseGroup = shouldUseGroup;
function shouldUseRule(schema, rule) {
    var _a;
    return (schema[rule.keyword] !== undefined ||
        ((_a = rule.definition.implements) === null || _a === void 0 ? void 0 : _a.some((kwd) => schema[kwd] !== undefined)));
}
exports.shouldUseRule = shouldUseRule;

},{}],"node_modules/ajv/dist/compile/validate/dataType.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reportTypeError = exports.checkDataTypes = exports.checkDataType = exports.coerceAndCheckDataType = exports.getJSONTypes = exports.getSchemaTypes = exports.DataType = void 0;
const rules_1 = require("../rules");
const applicability_1 = require("./applicability");
const errors_1 = require("../errors");
const codegen_1 = require("../codegen");
const util_1 = require("../util");
var DataType;
(function (DataType) {
    DataType[DataType["Correct"] = 0] = "Correct";
    DataType[DataType["Wrong"] = 1] = "Wrong";
})(DataType = exports.DataType || (exports.DataType = {}));
function getSchemaTypes(schema) {
    const types = getJSONTypes(schema.type);
    const hasNull = types.includes("null");
    if (hasNull) {
        if (schema.nullable === false)
            throw new Error("type: null contradicts nullable: false");
    }
    else {
        if (!types.length && schema.nullable !== undefined) {
            throw new Error('"nullable" cannot be used without "type"');
        }
        if (schema.nullable === true)
            types.push("null");
    }
    return types;
}
exports.getSchemaTypes = getSchemaTypes;
function getJSONTypes(ts) {
    const types = Array.isArray(ts) ? ts : ts ? [ts] : [];
    if (types.every(rules_1.isJSONType))
        return types;
    throw new Error("type must be JSONType or JSONType[]: " + types.join(","));
}
exports.getJSONTypes = getJSONTypes;
function coerceAndCheckDataType(it, types) {
    const { gen, data, opts } = it;
    const coerceTo = coerceToTypes(types, opts.coerceTypes);
    const checkTypes = types.length > 0 &&
        !(coerceTo.length === 0 && types.length === 1 && (0, applicability_1.schemaHasRulesForType)(it, types[0]));
    if (checkTypes) {
        const wrongType = checkDataTypes(types, data, opts.strictNumbers, DataType.Wrong);
        gen.if(wrongType, () => {
            if (coerceTo.length)
                coerceData(it, types, coerceTo);
            else
                reportTypeError(it);
        });
    }
    return checkTypes;
}
exports.coerceAndCheckDataType = coerceAndCheckDataType;
const COERCIBLE = new Set(["string", "number", "integer", "boolean", "null"]);
function coerceToTypes(types, coerceTypes) {
    return coerceTypes
        ? types.filter((t) => COERCIBLE.has(t) || (coerceTypes === "array" && t === "array"))
        : [];
}
function coerceData(it, types, coerceTo) {
    const { gen, data, opts } = it;
    const dataType = gen.let("dataType", (0, codegen_1._) `typeof ${data}`);
    const coerced = gen.let("coerced", (0, codegen_1._) `undefined`);
    if (opts.coerceTypes === "array") {
        gen.if((0, codegen_1._) `${dataType} == 'object' && Array.isArray(${data}) && ${data}.length == 1`, () => gen
            .assign(data, (0, codegen_1._) `${data}[0]`)
            .assign(dataType, (0, codegen_1._) `typeof ${data}`)
            .if(checkDataTypes(types, data, opts.strictNumbers), () => gen.assign(coerced, data)));
    }
    gen.if((0, codegen_1._) `${coerced} !== undefined`);
    for (const t of coerceTo) {
        if (COERCIBLE.has(t) || (t === "array" && opts.coerceTypes === "array")) {
            coerceSpecificType(t);
        }
    }
    gen.else();
    reportTypeError(it);
    gen.endIf();
    gen.if((0, codegen_1._) `${coerced} !== undefined`, () => {
        gen.assign(data, coerced);
        assignParentData(it, coerced);
    });
    function coerceSpecificType(t) {
        switch (t) {
            case "string":
                gen
                    .elseIf((0, codegen_1._) `${dataType} == "number" || ${dataType} == "boolean"`)
                    .assign(coerced, (0, codegen_1._) `"" + ${data}`)
                    .elseIf((0, codegen_1._) `${data} === null`)
                    .assign(coerced, (0, codegen_1._) `""`);
                return;
            case "number":
                gen
                    .elseIf((0, codegen_1._) `${dataType} == "boolean" || ${data} === null
              || (${dataType} == "string" && ${data} && ${data} == +${data})`)
                    .assign(coerced, (0, codegen_1._) `+${data}`);
                return;
            case "integer":
                gen
                    .elseIf((0, codegen_1._) `${dataType} === "boolean" || ${data} === null
              || (${dataType} === "string" && ${data} && ${data} == +${data} && !(${data} % 1))`)
                    .assign(coerced, (0, codegen_1._) `+${data}`);
                return;
            case "boolean":
                gen
                    .elseIf((0, codegen_1._) `${data} === "false" || ${data} === 0 || ${data} === null`)
                    .assign(coerced, false)
                    .elseIf((0, codegen_1._) `${data} === "true" || ${data} === 1`)
                    .assign(coerced, true);
                return;
            case "null":
                gen.elseIf((0, codegen_1._) `${data} === "" || ${data} === 0 || ${data} === false`);
                gen.assign(coerced, null);
                return;
            case "array":
                gen
                    .elseIf((0, codegen_1._) `${dataType} === "string" || ${dataType} === "number"
              || ${dataType} === "boolean" || ${data} === null`)
                    .assign(coerced, (0, codegen_1._) `[${data}]`);
        }
    }
}
function assignParentData({ gen, parentData, parentDataProperty }, expr) {
    // TODO use gen.property
    gen.if((0, codegen_1._) `${parentData} !== undefined`, () => gen.assign((0, codegen_1._) `${parentData}[${parentDataProperty}]`, expr));
}
function checkDataType(dataType, data, strictNums, correct = DataType.Correct) {
    const EQ = correct === DataType.Correct ? codegen_1.operators.EQ : codegen_1.operators.NEQ;
    let cond;
    switch (dataType) {
        case "null":
            return (0, codegen_1._) `${data} ${EQ} null`;
        case "array":
            cond = (0, codegen_1._) `Array.isArray(${data})`;
            break;
        case "object":
            cond = (0, codegen_1._) `${data} && typeof ${data} == "object" && !Array.isArray(${data})`;
            break;
        case "integer":
            cond = numCond((0, codegen_1._) `!(${data} % 1) && !isNaN(${data})`);
            break;
        case "number":
            cond = numCond();
            break;
        default:
            return (0, codegen_1._) `typeof ${data} ${EQ} ${dataType}`;
    }
    return correct === DataType.Correct ? cond : (0, codegen_1.not)(cond);
    function numCond(_cond = codegen_1.nil) {
        return (0, codegen_1.and)((0, codegen_1._) `typeof ${data} == "number"`, _cond, strictNums ? (0, codegen_1._) `isFinite(${data})` : codegen_1.nil);
    }
}
exports.checkDataType = checkDataType;
function checkDataTypes(dataTypes, data, strictNums, correct) {
    if (dataTypes.length === 1) {
        return checkDataType(dataTypes[0], data, strictNums, correct);
    }
    let cond;
    const types = (0, util_1.toHash)(dataTypes);
    if (types.array && types.object) {
        const notObj = (0, codegen_1._) `typeof ${data} != "object"`;
        cond = types.null ? notObj : (0, codegen_1._) `!${data} || ${notObj}`;
        delete types.null;
        delete types.array;
        delete types.object;
    }
    else {
        cond = codegen_1.nil;
    }
    if (types.number)
        delete types.integer;
    for (const t in types)
        cond = (0, codegen_1.and)(cond, checkDataType(t, data, strictNums, correct));
    return cond;
}
exports.checkDataTypes = checkDataTypes;
const typeError = {
    message: ({ schema }) => `must be ${schema}`,
    params: ({ schema, schemaValue }) => typeof schema == "string" ? (0, codegen_1._) `{type: ${schema}}` : (0, codegen_1._) `{type: ${schemaValue}}`,
};
function reportTypeError(it) {
    const cxt = getTypeErrorContext(it);
    (0, errors_1.reportError)(cxt, typeError);
}
exports.reportTypeError = reportTypeError;
function getTypeErrorContext(it) {
    const { gen, data, schema } = it;
    const schemaCode = (0, util_1.schemaRefOrVal)(it, schema, "type");
    return {
        gen,
        keyword: "type",
        data,
        schema: schema.type,
        schemaCode,
        schemaValue: schemaCode,
        parentSchema: schema,
        params: {},
        it,
    };
}

},{"../rules":"node_modules/ajv/dist/compile/rules.js","./applicability":"node_modules/ajv/dist/compile/validate/applicability.js","../errors":"node_modules/ajv/dist/compile/errors.js","../codegen":"node_modules/ajv/dist/compile/codegen/index.js","../util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/compile/validate/defaults.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignDefaults = void 0;
const codegen_1 = require("../codegen");
const util_1 = require("../util");
function assignDefaults(it, ty) {
    const { properties, items } = it.schema;
    if (ty === "object" && properties) {
        for (const key in properties) {
            assignDefault(it, key, properties[key].default);
        }
    }
    else if (ty === "array" && Array.isArray(items)) {
        items.forEach((sch, i) => assignDefault(it, i, sch.default));
    }
}
exports.assignDefaults = assignDefaults;
function assignDefault(it, prop, defaultValue) {
    const { gen, compositeRule, data, opts } = it;
    if (defaultValue === undefined)
        return;
    const childData = (0, codegen_1._) `${data}${(0, codegen_1.getProperty)(prop)}`;
    if (compositeRule) {
        (0, util_1.checkStrictMode)(it, `default is ignored for: ${childData}`);
        return;
    }
    let condition = (0, codegen_1._) `${childData} === undefined`;
    if (opts.useDefaults === "empty") {
        condition = (0, codegen_1._) `${condition} || ${childData} === null || ${childData} === ""`;
    }
    // `${childData} === undefined` +
    // (opts.useDefaults === "empty" ? ` || ${childData} === null || ${childData} === ""` : "")
    gen.if(condition, (0, codegen_1._) `${childData} = ${(0, codegen_1.stringify)(defaultValue)}`);
}

},{"../codegen":"node_modules/ajv/dist/compile/codegen/index.js","../util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/code.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUnion = exports.validateArray = exports.usePattern = exports.callValidateCode = exports.schemaProperties = exports.allSchemaProperties = exports.noPropertyInData = exports.propertyInData = exports.isOwnProperty = exports.hasPropFunc = exports.reportMissingProp = exports.checkMissingProp = exports.checkReportMissingProp = void 0;
const codegen_1 = require("../compile/codegen");
const util_1 = require("../compile/util");
const names_1 = require("../compile/names");
const util_2 = require("../compile/util");
function checkReportMissingProp(cxt, prop) {
    const { gen, data, it } = cxt;
    gen.if(noPropertyInData(gen, data, prop, it.opts.ownProperties), () => {
        cxt.setParams({ missingProperty: (0, codegen_1._) `${prop}` }, true);
        cxt.error();
    });
}
exports.checkReportMissingProp = checkReportMissingProp;
function checkMissingProp({ gen, data, it: { opts } }, properties, missing) {
    return (0, codegen_1.or)(...properties.map((prop) => (0, codegen_1.and)(noPropertyInData(gen, data, prop, opts.ownProperties), (0, codegen_1._) `${missing} = ${prop}`)));
}
exports.checkMissingProp = checkMissingProp;
function reportMissingProp(cxt, missing) {
    cxt.setParams({ missingProperty: missing }, true);
    cxt.error();
}
exports.reportMissingProp = reportMissingProp;
function hasPropFunc(gen) {
    return gen.scopeValue("func", {
        // eslint-disable-next-line @typescript-eslint/unbound-method
        ref: Object.prototype.hasOwnProperty,
        code: (0, codegen_1._) `Object.prototype.hasOwnProperty`,
    });
}
exports.hasPropFunc = hasPropFunc;
function isOwnProperty(gen, data, property) {
    return (0, codegen_1._) `${hasPropFunc(gen)}.call(${data}, ${property})`;
}
exports.isOwnProperty = isOwnProperty;
function propertyInData(gen, data, property, ownProperties) {
    const cond = (0, codegen_1._) `${data}${(0, codegen_1.getProperty)(property)} !== undefined`;
    return ownProperties ? (0, codegen_1._) `${cond} && ${isOwnProperty(gen, data, property)}` : cond;
}
exports.propertyInData = propertyInData;
function noPropertyInData(gen, data, property, ownProperties) {
    const cond = (0, codegen_1._) `${data}${(0, codegen_1.getProperty)(property)} === undefined`;
    return ownProperties ? (0, codegen_1.or)(cond, (0, codegen_1.not)(isOwnProperty(gen, data, property))) : cond;
}
exports.noPropertyInData = noPropertyInData;
function allSchemaProperties(schemaMap) {
    return schemaMap ? Object.keys(schemaMap).filter((p) => p !== "__proto__") : [];
}
exports.allSchemaProperties = allSchemaProperties;
function schemaProperties(it, schemaMap) {
    return allSchemaProperties(schemaMap).filter((p) => !(0, util_1.alwaysValidSchema)(it, schemaMap[p]));
}
exports.schemaProperties = schemaProperties;
function callValidateCode({ schemaCode, data, it: { gen, topSchemaRef, schemaPath, errorPath }, it }, func, context, passSchema) {
    const dataAndSchema = passSchema ? (0, codegen_1._) `${schemaCode}, ${data}, ${topSchemaRef}${schemaPath}` : data;
    const valCxt = [
        [names_1.default.instancePath, (0, codegen_1.strConcat)(names_1.default.instancePath, errorPath)],
        [names_1.default.parentData, it.parentData],
        [names_1.default.parentDataProperty, it.parentDataProperty],
        [names_1.default.rootData, names_1.default.rootData],
    ];
    if (it.opts.dynamicRef)
        valCxt.push([names_1.default.dynamicAnchors, names_1.default.dynamicAnchors]);
    const args = (0, codegen_1._) `${dataAndSchema}, ${gen.object(...valCxt)}`;
    return context !== codegen_1.nil ? (0, codegen_1._) `${func}.call(${context}, ${args})` : (0, codegen_1._) `${func}(${args})`;
}
exports.callValidateCode = callValidateCode;
const newRegExp = (0, codegen_1._) `new RegExp`;
function usePattern({ gen, it: { opts } }, pattern) {
    const u = opts.unicodeRegExp ? "u" : "";
    const { regExp } = opts.code;
    const rx = regExp(pattern, u);
    return gen.scopeValue("pattern", {
        key: rx.toString(),
        ref: rx,
        code: (0, codegen_1._) `${regExp.code === "new RegExp" ? newRegExp : (0, util_2.useFunc)(gen, regExp)}(${pattern}, ${u})`,
    });
}
exports.usePattern = usePattern;
function validateArray(cxt) {
    const { gen, data, keyword, it } = cxt;
    const valid = gen.name("valid");
    if (it.allErrors) {
        const validArr = gen.let("valid", true);
        validateItems(() => gen.assign(validArr, false));
        return validArr;
    }
    gen.var(valid, true);
    validateItems(() => gen.break());
    return valid;
    function validateItems(notValid) {
        const len = gen.const("len", (0, codegen_1._) `${data}.length`);
        gen.forRange("i", 0, len, (i) => {
            cxt.subschema({
                keyword,
                dataProp: i,
                dataPropType: util_1.Type.Num,
            }, valid);
            gen.if((0, codegen_1.not)(valid), notValid);
        });
    }
}
exports.validateArray = validateArray;
function validateUnion(cxt) {
    const { gen, schema, keyword, it } = cxt;
    /* istanbul ignore if */
    if (!Array.isArray(schema))
        throw new Error("ajv implementation error");
    const alwaysValid = schema.some((sch) => (0, util_1.alwaysValidSchema)(it, sch));
    if (alwaysValid && !it.opts.unevaluated)
        return;
    const valid = gen.let("valid", false);
    const schValid = gen.name("_valid");
    gen.block(() => schema.forEach((_sch, i) => {
        const schCxt = cxt.subschema({
            keyword,
            schemaProp: i,
            compositeRule: true,
        }, schValid);
        gen.assign(valid, (0, codegen_1._) `${valid} || ${schValid}`);
        const merged = cxt.mergeValidEvaluated(schCxt, schValid);
        // can short-circuit if `unevaluatedProperties/Items` not supported (opts.unevaluated !== true)
        // or if all properties and items were evaluated (it.props === true && it.items === true)
        if (!merged)
            gen.if((0, codegen_1.not)(valid));
    }));
    cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
}
exports.validateUnion = validateUnion;

},{"../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../compile/util":"node_modules/ajv/dist/compile/util.js","../compile/names":"node_modules/ajv/dist/compile/names.js"}],"node_modules/ajv/dist/compile/validate/keyword.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateKeywordUsage = exports.validSchemaType = exports.funcKeywordCode = exports.macroKeywordCode = void 0;
const codegen_1 = require("../codegen");
const names_1 = require("../names");
const code_1 = require("../../vocabularies/code");
const errors_1 = require("../errors");
function macroKeywordCode(cxt, def) {
    const { gen, keyword, schema, parentSchema, it } = cxt;
    const macroSchema = def.macro.call(it.self, schema, parentSchema, it);
    const schemaRef = useKeyword(gen, keyword, macroSchema);
    if (it.opts.validateSchema !== false)
        it.self.validateSchema(macroSchema, true);
    const valid = gen.name("valid");
    cxt.subschema({
        schema: macroSchema,
        schemaPath: codegen_1.nil,
        errSchemaPath: `${it.errSchemaPath}/${keyword}`,
        topSchemaRef: schemaRef,
        compositeRule: true,
    }, valid);
    cxt.pass(valid, () => cxt.error(true));
}
exports.macroKeywordCode = macroKeywordCode;
function funcKeywordCode(cxt, def) {
    var _a;
    const { gen, keyword, schema, parentSchema, $data, it } = cxt;
    checkAsyncKeyword(it, def);
    const validate = !$data && def.compile ? def.compile.call(it.self, schema, parentSchema, it) : def.validate;
    const validateRef = useKeyword(gen, keyword, validate);
    const valid = gen.let("valid");
    cxt.block$data(valid, validateKeyword);
    cxt.ok((_a = def.valid) !== null && _a !== void 0 ? _a : valid);
    function validateKeyword() {
        if (def.errors === false) {
            assignValid();
            if (def.modifying)
                modifyData(cxt);
            reportErrs(() => cxt.error());
        }
        else {
            const ruleErrs = def.async ? validateAsync() : validateSync();
            if (def.modifying)
                modifyData(cxt);
            reportErrs(() => addErrs(cxt, ruleErrs));
        }
    }
    function validateAsync() {
        const ruleErrs = gen.let("ruleErrs", null);
        gen.try(() => assignValid((0, codegen_1._) `await `), (e) => gen.assign(valid, false).if((0, codegen_1._) `${e} instanceof ${it.ValidationError}`, () => gen.assign(ruleErrs, (0, codegen_1._) `${e}.errors`), () => gen.throw(e)));
        return ruleErrs;
    }
    function validateSync() {
        const validateErrs = (0, codegen_1._) `${validateRef}.errors`;
        gen.assign(validateErrs, null);
        assignValid(codegen_1.nil);
        return validateErrs;
    }
    function assignValid(_await = def.async ? (0, codegen_1._) `await ` : codegen_1.nil) {
        const passCxt = it.opts.passContext ? names_1.default.this : names_1.default.self;
        const passSchema = !(("compile" in def && !$data) || def.schema === false);
        gen.assign(valid, (0, codegen_1._) `${_await}${(0, code_1.callValidateCode)(cxt, validateRef, passCxt, passSchema)}`, def.modifying);
    }
    function reportErrs(errors) {
        var _a;
        gen.if((0, codegen_1.not)((_a = def.valid) !== null && _a !== void 0 ? _a : valid), errors);
    }
}
exports.funcKeywordCode = funcKeywordCode;
function modifyData(cxt) {
    const { gen, data, it } = cxt;
    gen.if(it.parentData, () => gen.assign(data, (0, codegen_1._) `${it.parentData}[${it.parentDataProperty}]`));
}
function addErrs(cxt, errs) {
    const { gen } = cxt;
    gen.if((0, codegen_1._) `Array.isArray(${errs})`, () => {
        gen
            .assign(names_1.default.vErrors, (0, codegen_1._) `${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`)
            .assign(names_1.default.errors, (0, codegen_1._) `${names_1.default.vErrors}.length`);
        (0, errors_1.extendErrors)(cxt);
    }, () => cxt.error());
}
function checkAsyncKeyword({ schemaEnv }, def) {
    if (def.async && !schemaEnv.$async)
        throw new Error("async keyword in sync schema");
}
function useKeyword(gen, keyword, result) {
    if (result === undefined)
        throw new Error(`keyword "${keyword}" failed to compile`);
    return gen.scopeValue("keyword", typeof result == "function" ? { ref: result } : { ref: result, code: (0, codegen_1.stringify)(result) });
}
function validSchemaType(schema, schemaType, allowUndefined = false) {
    // TODO add tests
    return (!schemaType.length ||
        schemaType.some((st) => st === "array"
            ? Array.isArray(schema)
            : st === "object"
                ? schema && typeof schema == "object" && !Array.isArray(schema)
                : typeof schema == st || (allowUndefined && typeof schema == "undefined")));
}
exports.validSchemaType = validSchemaType;
function validateKeywordUsage({ schema, opts, self, errSchemaPath }, def, keyword) {
    /* istanbul ignore if */
    if (Array.isArray(def.keyword) ? !def.keyword.includes(keyword) : def.keyword !== keyword) {
        throw new Error("ajv implementation error");
    }
    const deps = def.dependencies;
    if (deps === null || deps === void 0 ? void 0 : deps.some((kwd) => !Object.prototype.hasOwnProperty.call(schema, kwd))) {
        throw new Error(`parent schema must have dependencies of ${keyword}: ${deps.join(",")}`);
    }
    if (def.validateSchema) {
        const valid = def.validateSchema(schema[keyword]);
        if (!valid) {
            const msg = `keyword "${keyword}" value is invalid at path "${errSchemaPath}": ` +
                self.errorsText(def.validateSchema.errors);
            if (opts.validateSchema === "log")
                self.logger.error(msg);
            else
                throw new Error(msg);
        }
    }
}
exports.validateKeywordUsage = validateKeywordUsage;

},{"../codegen":"node_modules/ajv/dist/compile/codegen/index.js","../names":"node_modules/ajv/dist/compile/names.js","../../vocabularies/code":"node_modules/ajv/dist/vocabularies/code.js","../errors":"node_modules/ajv/dist/compile/errors.js"}],"node_modules/ajv/dist/compile/validate/subschema.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extendSubschemaMode = exports.extendSubschemaData = exports.getSubschema = void 0;
const codegen_1 = require("../codegen");
const util_1 = require("../util");
function getSubschema(it, { keyword, schemaProp, schema, schemaPath, errSchemaPath, topSchemaRef }) {
    if (keyword !== undefined && schema !== undefined) {
        throw new Error('both "keyword" and "schema" passed, only one allowed');
    }
    if (keyword !== undefined) {
        const sch = it.schema[keyword];
        return schemaProp === undefined
            ? {
                schema: sch,
                schemaPath: (0, codegen_1._) `${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}`,
                errSchemaPath: `${it.errSchemaPath}/${keyword}`,
            }
            : {
                schema: sch[schemaProp],
                schemaPath: (0, codegen_1._) `${it.schemaPath}${(0, codegen_1.getProperty)(keyword)}${(0, codegen_1.getProperty)(schemaProp)}`,
                errSchemaPath: `${it.errSchemaPath}/${keyword}/${(0, util_1.escapeFragment)(schemaProp)}`,
            };
    }
    if (schema !== undefined) {
        if (schemaPath === undefined || errSchemaPath === undefined || topSchemaRef === undefined) {
            throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
        }
        return {
            schema,
            schemaPath,
            topSchemaRef,
            errSchemaPath,
        };
    }
    throw new Error('either "keyword" or "schema" must be passed');
}
exports.getSubschema = getSubschema;
function extendSubschemaData(subschema, it, { dataProp, dataPropType: dpType, data, dataTypes, propertyName }) {
    if (data !== undefined && dataProp !== undefined) {
        throw new Error('both "data" and "dataProp" passed, only one allowed');
    }
    const { gen } = it;
    if (dataProp !== undefined) {
        const { errorPath, dataPathArr, opts } = it;
        const nextData = gen.let("data", (0, codegen_1._) `${it.data}${(0, codegen_1.getProperty)(dataProp)}`, true);
        dataContextProps(nextData);
        subschema.errorPath = (0, codegen_1.str) `${errorPath}${(0, util_1.getErrorPath)(dataProp, dpType, opts.jsPropertySyntax)}`;
        subschema.parentDataProperty = (0, codegen_1._) `${dataProp}`;
        subschema.dataPathArr = [...dataPathArr, subschema.parentDataProperty];
    }
    if (data !== undefined) {
        const nextData = data instanceof codegen_1.Name ? data : gen.let("data", data, true); // replaceable if used once?
        dataContextProps(nextData);
        if (propertyName !== undefined)
            subschema.propertyName = propertyName;
        // TODO something is possibly wrong here with not changing parentDataProperty and not appending dataPathArr
    }
    if (dataTypes)
        subschema.dataTypes = dataTypes;
    function dataContextProps(_nextData) {
        subschema.data = _nextData;
        subschema.dataLevel = it.dataLevel + 1;
        subschema.dataTypes = [];
        it.definedProperties = new Set();
        subschema.parentData = it.data;
        subschema.dataNames = [...it.dataNames, _nextData];
    }
}
exports.extendSubschemaData = extendSubschemaData;
function extendSubschemaMode(subschema, { jtdDiscriminator, jtdMetadata, compositeRule, createErrors, allErrors }) {
    if (compositeRule !== undefined)
        subschema.compositeRule = compositeRule;
    if (createErrors !== undefined)
        subschema.createErrors = createErrors;
    if (allErrors !== undefined)
        subschema.allErrors = allErrors;
    subschema.jtdDiscriminator = jtdDiscriminator; // not inherited
    subschema.jtdMetadata = jtdMetadata; // not inherited
}
exports.extendSubschemaMode = extendSubschemaMode;

},{"../codegen":"node_modules/ajv/dist/compile/codegen/index.js","../util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/fast-deep-equal/index.js":[function(require,module,exports) {
'use strict';

// do not edit .js files directly - edit src/index.jst



module.exports = function equal(a, b) {
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }



    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;

    for (i = length; i-- !== 0;) {
      var key = keys[i];

      if (!equal(a[key], b[key])) return false;
    }

    return true;
  }

  // true if both NaN, false otherwise
  return a!==a && b!==b;
};

},{}],"node_modules/json-schema-traverse/index.js":[function(require,module,exports) {
'use strict';

var traverse = module.exports = function (schema, opts, cb) {
  // Legacy support for v0.3.1 and earlier.
  if (typeof opts == 'function') {
    cb = opts;
    opts = {};
  }

  cb = opts.cb || cb;
  var pre = (typeof cb == 'function') ? cb : cb.pre || function() {};
  var post = cb.post || function() {};

  _traverse(opts, pre, post, schema, '', schema);
};


traverse.keywords = {
  additionalItems: true,
  items: true,
  contains: true,
  additionalProperties: true,
  propertyNames: true,
  not: true,
  if: true,
  then: true,
  else: true
};

traverse.arrayKeywords = {
  items: true,
  allOf: true,
  anyOf: true,
  oneOf: true
};

traverse.propsKeywords = {
  $defs: true,
  definitions: true,
  properties: true,
  patternProperties: true,
  dependencies: true
};

traverse.skipKeywords = {
  default: true,
  enum: true,
  const: true,
  required: true,
  maximum: true,
  minimum: true,
  exclusiveMaximum: true,
  exclusiveMinimum: true,
  multipleOf: true,
  maxLength: true,
  minLength: true,
  pattern: true,
  format: true,
  maxItems: true,
  minItems: true,
  uniqueItems: true,
  maxProperties: true,
  minProperties: true
};


function _traverse(opts, pre, post, schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex) {
  if (schema && typeof schema == 'object' && !Array.isArray(schema)) {
    pre(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
    for (var key in schema) {
      var sch = schema[key];
      if (Array.isArray(sch)) {
        if (key in traverse.arrayKeywords) {
          for (var i=0; i<sch.length; i++)
            _traverse(opts, pre, post, sch[i], jsonPtr + '/' + key + '/' + i, rootSchema, jsonPtr, key, schema, i);
        }
      } else if (key in traverse.propsKeywords) {
        if (sch && typeof sch == 'object') {
          for (var prop in sch)
            _traverse(opts, pre, post, sch[prop], jsonPtr + '/' + key + '/' + escapeJsonPtr(prop), rootSchema, jsonPtr, key, schema, prop);
        }
      } else if (key in traverse.keywords || (opts.allKeys && !(key in traverse.skipKeywords))) {
        _traverse(opts, pre, post, sch, jsonPtr + '/' + key, rootSchema, jsonPtr, key, schema);
      }
    }
    post(schema, jsonPtr, rootSchema, parentJsonPtr, parentKeyword, parentSchema, keyIndex);
  }
}


function escapeJsonPtr(str) {
  return str.replace(/~/g, '~0').replace(/\//g, '~1');
}

},{}],"node_modules/ajv/dist/compile/resolve.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSchemaRefs = exports.resolveUrl = exports.normalizeId = exports._getFullPath = exports.getFullPath = exports.inlineRef = void 0;
const util_1 = require("./util");
const equal = require("fast-deep-equal");
const traverse = require("json-schema-traverse");
// TODO refactor to use keyword definitions
const SIMPLE_INLINED = new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const",
]);
function inlineRef(schema, limit = true) {
    if (typeof schema == "boolean")
        return true;
    if (limit === true)
        return !hasRef(schema);
    if (!limit)
        return false;
    return countKeys(schema) <= limit;
}
exports.inlineRef = inlineRef;
const REF_KEYWORDS = new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor",
]);
function hasRef(schema) {
    for (const key in schema) {
        if (REF_KEYWORDS.has(key))
            return true;
        const sch = schema[key];
        if (Array.isArray(sch) && sch.some(hasRef))
            return true;
        if (typeof sch == "object" && hasRef(sch))
            return true;
    }
    return false;
}
function countKeys(schema) {
    let count = 0;
    for (const key in schema) {
        if (key === "$ref")
            return Infinity;
        count++;
        if (SIMPLE_INLINED.has(key))
            continue;
        if (typeof schema[key] == "object") {
            (0, util_1.eachItem)(schema[key], (sch) => (count += countKeys(sch)));
        }
        if (count === Infinity)
            return Infinity;
    }
    return count;
}
function getFullPath(resolver, id = "", normalize) {
    if (normalize !== false)
        id = normalizeId(id);
    const p = resolver.parse(id);
    return _getFullPath(resolver, p);
}
exports.getFullPath = getFullPath;
function _getFullPath(resolver, p) {
    const serialized = resolver.serialize(p);
    return serialized.split("#")[0] + "#";
}
exports._getFullPath = _getFullPath;
const TRAILING_SLASH_HASH = /#\/?$/;
function normalizeId(id) {
    return id ? id.replace(TRAILING_SLASH_HASH, "") : "";
}
exports.normalizeId = normalizeId;
function resolveUrl(resolver, baseId, id) {
    id = normalizeId(id);
    return resolver.resolve(baseId, id);
}
exports.resolveUrl = resolveUrl;
const ANCHOR = /^[a-z_][-a-z0-9._]*$/i;
function getSchemaRefs(schema, baseId) {
    if (typeof schema == "boolean")
        return {};
    const { schemaId, uriResolver } = this.opts;
    const schId = normalizeId(schema[schemaId] || baseId);
    const baseIds = { "": schId };
    const pathPrefix = getFullPath(uriResolver, schId, false);
    const localRefs = {};
    const schemaRefs = new Set();
    traverse(schema, { allKeys: true }, (sch, jsonPtr, _, parentJsonPtr) => {
        if (parentJsonPtr === undefined)
            return;
        const fullPath = pathPrefix + jsonPtr;
        let baseId = baseIds[parentJsonPtr];
        if (typeof sch[schemaId] == "string")
            baseId = addRef.call(this, sch[schemaId]);
        addAnchor.call(this, sch.$anchor);
        addAnchor.call(this, sch.$dynamicAnchor);
        baseIds[jsonPtr] = baseId;
        function addRef(ref) {
            // eslint-disable-next-line @typescript-eslint/unbound-method
            const _resolve = this.opts.uriResolver.resolve;
            ref = normalizeId(baseId ? _resolve(baseId, ref) : ref);
            if (schemaRefs.has(ref))
                throw ambiguos(ref);
            schemaRefs.add(ref);
            let schOrRef = this.refs[ref];
            if (typeof schOrRef == "string")
                schOrRef = this.refs[schOrRef];
            if (typeof schOrRef == "object") {
                checkAmbiguosRef(sch, schOrRef.schema, ref);
            }
            else if (ref !== normalizeId(fullPath)) {
                if (ref[0] === "#") {
                    checkAmbiguosRef(sch, localRefs[ref], ref);
                    localRefs[ref] = sch;
                }
                else {
                    this.refs[ref] = fullPath;
                }
            }
            return ref;
        }
        function addAnchor(anchor) {
            if (typeof anchor == "string") {
                if (!ANCHOR.test(anchor))
                    throw new Error(`invalid anchor "${anchor}"`);
                addRef.call(this, `#${anchor}`);
            }
        }
    });
    return localRefs;
    function checkAmbiguosRef(sch1, sch2, ref) {
        if (sch2 !== undefined && !equal(sch1, sch2))
            throw ambiguos(ref);
    }
    function ambiguos(ref) {
        return new Error(`reference "${ref}" resolves to more than one schema`);
    }
}
exports.getSchemaRefs = getSchemaRefs;

},{"./util":"node_modules/ajv/dist/compile/util.js","fast-deep-equal":"node_modules/fast-deep-equal/index.js","json-schema-traverse":"node_modules/json-schema-traverse/index.js"}],"node_modules/ajv/dist/compile/validate/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = exports.KeywordCxt = exports.validateFunctionCode = void 0;
const boolSchema_1 = require("./boolSchema");
const dataType_1 = require("./dataType");
const applicability_1 = require("./applicability");
const dataType_2 = require("./dataType");
const defaults_1 = require("./defaults");
const keyword_1 = require("./keyword");
const subschema_1 = require("./subschema");
const codegen_1 = require("../codegen");
const names_1 = require("../names");
const resolve_1 = require("../resolve");
const util_1 = require("../util");
const errors_1 = require("../errors");
// schema compilation - generates validation function, subschemaCode (below) is used for subschemas
function validateFunctionCode(it) {
    if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
            topSchemaObjCode(it);
            return;
        }
    }
    validateFunction(it, () => (0, boolSchema_1.topBoolOrEmptySchema)(it));
}
exports.validateFunctionCode = validateFunctionCode;
function validateFunction({ gen, validateName, schema, schemaEnv, opts }, body) {
    if (opts.code.es5) {
        gen.func(validateName, (0, codegen_1._) `${names_1.default.data}, ${names_1.default.valCxt}`, schemaEnv.$async, () => {
            gen.code((0, codegen_1._) `"use strict"; ${funcSourceUrl(schema, opts)}`);
            destructureValCxtES5(gen, opts);
            gen.code(body);
        });
    }
    else {
        gen.func(validateName, (0, codegen_1._) `${names_1.default.data}, ${destructureValCxt(opts)}`, schemaEnv.$async, () => gen.code(funcSourceUrl(schema, opts)).code(body));
    }
}
function destructureValCxt(opts) {
    return (0, codegen_1._) `{${names_1.default.instancePath}="", ${names_1.default.parentData}, ${names_1.default.parentDataProperty}, ${names_1.default.rootData}=${names_1.default.data}${opts.dynamicRef ? (0, codegen_1._) `, ${names_1.default.dynamicAnchors}={}` : codegen_1.nil}}={}`;
}
function destructureValCxtES5(gen, opts) {
    gen.if(names_1.default.valCxt, () => {
        gen.var(names_1.default.instancePath, (0, codegen_1._) `${names_1.default.valCxt}.${names_1.default.instancePath}`);
        gen.var(names_1.default.parentData, (0, codegen_1._) `${names_1.default.valCxt}.${names_1.default.parentData}`);
        gen.var(names_1.default.parentDataProperty, (0, codegen_1._) `${names_1.default.valCxt}.${names_1.default.parentDataProperty}`);
        gen.var(names_1.default.rootData, (0, codegen_1._) `${names_1.default.valCxt}.${names_1.default.rootData}`);
        if (opts.dynamicRef)
            gen.var(names_1.default.dynamicAnchors, (0, codegen_1._) `${names_1.default.valCxt}.${names_1.default.dynamicAnchors}`);
    }, () => {
        gen.var(names_1.default.instancePath, (0, codegen_1._) `""`);
        gen.var(names_1.default.parentData, (0, codegen_1._) `undefined`);
        gen.var(names_1.default.parentDataProperty, (0, codegen_1._) `undefined`);
        gen.var(names_1.default.rootData, names_1.default.data);
        if (opts.dynamicRef)
            gen.var(names_1.default.dynamicAnchors, (0, codegen_1._) `{}`);
    });
}
function topSchemaObjCode(it) {
    const { schema, opts, gen } = it;
    validateFunction(it, () => {
        if (opts.$comment && schema.$comment)
            commentKeyword(it);
        checkNoDefault(it);
        gen.let(names_1.default.vErrors, null);
        gen.let(names_1.default.errors, 0);
        if (opts.unevaluated)
            resetEvaluated(it);
        typeAndKeywords(it);
        returnResults(it);
    });
    return;
}
function resetEvaluated(it) {
    // TODO maybe some hook to execute it in the end to check whether props/items are Name, as in assignEvaluated
    const { gen, validateName } = it;
    it.evaluated = gen.const("evaluated", (0, codegen_1._) `${validateName}.evaluated`);
    gen.if((0, codegen_1._) `${it.evaluated}.dynamicProps`, () => gen.assign((0, codegen_1._) `${it.evaluated}.props`, (0, codegen_1._) `undefined`));
    gen.if((0, codegen_1._) `${it.evaluated}.dynamicItems`, () => gen.assign((0, codegen_1._) `${it.evaluated}.items`, (0, codegen_1._) `undefined`));
}
function funcSourceUrl(schema, opts) {
    const schId = typeof schema == "object" && schema[opts.schemaId];
    return schId && (opts.code.source || opts.code.process) ? (0, codegen_1._) `/*# sourceURL=${schId} */` : codegen_1.nil;
}
// schema compilation - this function is used recursively to generate code for sub-schemas
function subschemaCode(it, valid) {
    if (isSchemaObj(it)) {
        checkKeywords(it);
        if (schemaCxtHasRules(it)) {
            subSchemaObjCode(it, valid);
            return;
        }
    }
    (0, boolSchema_1.boolOrEmptySchema)(it, valid);
}
function schemaCxtHasRules({ schema, self }) {
    if (typeof schema == "boolean")
        return !schema;
    for (const key in schema)
        if (self.RULES.all[key])
            return true;
    return false;
}
function isSchemaObj(it) {
    return typeof it.schema != "boolean";
}
function subSchemaObjCode(it, valid) {
    const { schema, gen, opts } = it;
    if (opts.$comment && schema.$comment)
        commentKeyword(it);
    updateContext(it);
    checkAsyncSchema(it);
    const errsCount = gen.const("_errs", names_1.default.errors);
    typeAndKeywords(it, errsCount);
    // TODO var
    gen.var(valid, (0, codegen_1._) `${errsCount} === ${names_1.default.errors}`);
}
function checkKeywords(it) {
    (0, util_1.checkUnknownRules)(it);
    checkRefsAndKeywords(it);
}
function typeAndKeywords(it, errsCount) {
    if (it.opts.jtd)
        return schemaKeywords(it, [], false, errsCount);
    const types = (0, dataType_1.getSchemaTypes)(it.schema);
    const checkedTypes = (0, dataType_1.coerceAndCheckDataType)(it, types);
    schemaKeywords(it, types, !checkedTypes, errsCount);
}
function checkRefsAndKeywords(it) {
    const { schema, errSchemaPath, opts, self } = it;
    if (schema.$ref && opts.ignoreKeywordsWithRef && (0, util_1.schemaHasRulesButRef)(schema, self.RULES)) {
        self.logger.warn(`$ref: keywords ignored in schema at path "${errSchemaPath}"`);
    }
}
function checkNoDefault(it) {
    const { schema, opts } = it;
    if (schema.default !== undefined && opts.useDefaults && opts.strictSchema) {
        (0, util_1.checkStrictMode)(it, "default is ignored in the schema root");
    }
}
function updateContext(it) {
    const schId = it.schema[it.opts.schemaId];
    if (schId)
        it.baseId = (0, resolve_1.resolveUrl)(it.opts.uriResolver, it.baseId, schId);
}
function checkAsyncSchema(it) {
    if (it.schema.$async && !it.schemaEnv.$async)
        throw new Error("async schema in sync schema");
}
function commentKeyword({ gen, schemaEnv, schema, errSchemaPath, opts }) {
    const msg = schema.$comment;
    if (opts.$comment === true) {
        gen.code((0, codegen_1._) `${names_1.default.self}.logger.log(${msg})`);
    }
    else if (typeof opts.$comment == "function") {
        const schemaPath = (0, codegen_1.str) `${errSchemaPath}/$comment`;
        const rootName = gen.scopeValue("root", { ref: schemaEnv.root });
        gen.code((0, codegen_1._) `${names_1.default.self}.opts.$comment(${msg}, ${schemaPath}, ${rootName}.schema)`);
    }
}
function returnResults(it) {
    const { gen, schemaEnv, validateName, ValidationError, opts } = it;
    if (schemaEnv.$async) {
        // TODO assign unevaluated
        gen.if((0, codegen_1._) `${names_1.default.errors} === 0`, () => gen.return(names_1.default.data), () => gen.throw((0, codegen_1._) `new ${ValidationError}(${names_1.default.vErrors})`));
    }
    else {
        gen.assign((0, codegen_1._) `${validateName}.errors`, names_1.default.vErrors);
        if (opts.unevaluated)
            assignEvaluated(it);
        gen.return((0, codegen_1._) `${names_1.default.errors} === 0`);
    }
}
function assignEvaluated({ gen, evaluated, props, items }) {
    if (props instanceof codegen_1.Name)
        gen.assign((0, codegen_1._) `${evaluated}.props`, props);
    if (items instanceof codegen_1.Name)
        gen.assign((0, codegen_1._) `${evaluated}.items`, items);
}
function schemaKeywords(it, types, typeErrors, errsCount) {
    const { gen, schema, data, allErrors, opts, self } = it;
    const { RULES } = self;
    if (schema.$ref && (opts.ignoreKeywordsWithRef || !(0, util_1.schemaHasRulesButRef)(schema, RULES))) {
        gen.block(() => keywordCode(it, "$ref", RULES.all.$ref.definition)); // TODO typecast
        return;
    }
    if (!opts.jtd)
        checkStrictTypes(it, types);
    gen.block(() => {
        for (const group of RULES.rules)
            groupKeywords(group);
        groupKeywords(RULES.post);
    });
    function groupKeywords(group) {
        if (!(0, applicability_1.shouldUseGroup)(schema, group))
            return;
        if (group.type) {
            gen.if((0, dataType_2.checkDataType)(group.type, data, opts.strictNumbers));
            iterateKeywords(it, group);
            if (types.length === 1 && types[0] === group.type && typeErrors) {
                gen.else();
                (0, dataType_2.reportTypeError)(it);
            }
            gen.endIf();
        }
        else {
            iterateKeywords(it, group);
        }
        // TODO make it "ok" call?
        if (!allErrors)
            gen.if((0, codegen_1._) `${names_1.default.errors} === ${errsCount || 0}`);
    }
}
function iterateKeywords(it, group) {
    const { gen, schema, opts: { useDefaults }, } = it;
    if (useDefaults)
        (0, defaults_1.assignDefaults)(it, group.type);
    gen.block(() => {
        for (const rule of group.rules) {
            if ((0, applicability_1.shouldUseRule)(schema, rule)) {
                keywordCode(it, rule.keyword, rule.definition, group.type);
            }
        }
    });
}
function checkStrictTypes(it, types) {
    if (it.schemaEnv.meta || !it.opts.strictTypes)
        return;
    checkContextTypes(it, types);
    if (!it.opts.allowUnionTypes)
        checkMultipleTypes(it, types);
    checkKeywordTypes(it, it.dataTypes);
}
function checkContextTypes(it, types) {
    if (!types.length)
        return;
    if (!it.dataTypes.length) {
        it.dataTypes = types;
        return;
    }
    types.forEach((t) => {
        if (!includesType(it.dataTypes, t)) {
            strictTypesError(it, `type "${t}" not allowed by context "${it.dataTypes.join(",")}"`);
        }
    });
    it.dataTypes = it.dataTypes.filter((t) => includesType(types, t));
}
function checkMultipleTypes(it, ts) {
    if (ts.length > 1 && !(ts.length === 2 && ts.includes("null"))) {
        strictTypesError(it, "use allowUnionTypes to allow union type keyword");
    }
}
function checkKeywordTypes(it, ts) {
    const rules = it.self.RULES.all;
    for (const keyword in rules) {
        const rule = rules[keyword];
        if (typeof rule == "object" && (0, applicability_1.shouldUseRule)(it.schema, rule)) {
            const { type } = rule.definition;
            if (type.length && !type.some((t) => hasApplicableType(ts, t))) {
                strictTypesError(it, `missing type "${type.join(",")}" for keyword "${keyword}"`);
            }
        }
    }
}
function hasApplicableType(schTs, kwdT) {
    return schTs.includes(kwdT) || (kwdT === "number" && schTs.includes("integer"));
}
function includesType(ts, t) {
    return ts.includes(t) || (t === "integer" && ts.includes("number"));
}
function strictTypesError(it, msg) {
    const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
    msg += ` at "${schemaPath}" (strictTypes)`;
    (0, util_1.checkStrictMode)(it, msg, it.opts.strictTypes);
}
class KeywordCxt {
    constructor(it, def, keyword) {
        (0, keyword_1.validateKeywordUsage)(it, def, keyword);
        this.gen = it.gen;
        this.allErrors = it.allErrors;
        this.keyword = keyword;
        this.data = it.data;
        this.schema = it.schema[keyword];
        this.$data = def.$data && it.opts.$data && this.schema && this.schema.$data;
        this.schemaValue = (0, util_1.schemaRefOrVal)(it, this.schema, keyword, this.$data);
        this.schemaType = def.schemaType;
        this.parentSchema = it.schema;
        this.params = {};
        this.it = it;
        this.def = def;
        if (this.$data) {
            this.schemaCode = it.gen.const("vSchema", getData(this.$data, it));
        }
        else {
            this.schemaCode = this.schemaValue;
            if (!(0, keyword_1.validSchemaType)(this.schema, def.schemaType, def.allowUndefined)) {
                throw new Error(`${keyword} value must be ${JSON.stringify(def.schemaType)}`);
            }
        }
        if ("code" in def ? def.trackErrors : def.errors !== false) {
            this.errsCount = it.gen.const("_errs", names_1.default.errors);
        }
    }
    result(condition, successAction, failAction) {
        this.failResult((0, codegen_1.not)(condition), successAction, failAction);
    }
    failResult(condition, successAction, failAction) {
        this.gen.if(condition);
        if (failAction)
            failAction();
        else
            this.error();
        if (successAction) {
            this.gen.else();
            successAction();
            if (this.allErrors)
                this.gen.endIf();
        }
        else {
            if (this.allErrors)
                this.gen.endIf();
            else
                this.gen.else();
        }
    }
    pass(condition, failAction) {
        this.failResult((0, codegen_1.not)(condition), undefined, failAction);
    }
    fail(condition) {
        if (condition === undefined) {
            this.error();
            if (!this.allErrors)
                this.gen.if(false); // this branch will be removed by gen.optimize
            return;
        }
        this.gen.if(condition);
        this.error();
        if (this.allErrors)
            this.gen.endIf();
        else
            this.gen.else();
    }
    fail$data(condition) {
        if (!this.$data)
            return this.fail(condition);
        const { schemaCode } = this;
        this.fail((0, codegen_1._) `${schemaCode} !== undefined && (${(0, codegen_1.or)(this.invalid$data(), condition)})`);
    }
    error(append, errorParams, errorPaths) {
        if (errorParams) {
            this.setParams(errorParams);
            this._error(append, errorPaths);
            this.setParams({});
            return;
        }
        this._error(append, errorPaths);
    }
    _error(append, errorPaths) {
        ;
        (append ? errors_1.reportExtraError : errors_1.reportError)(this, this.def.error, errorPaths);
    }
    $dataError() {
        (0, errors_1.reportError)(this, this.def.$dataError || errors_1.keyword$DataError);
    }
    reset() {
        if (this.errsCount === undefined)
            throw new Error('add "trackErrors" to keyword definition');
        (0, errors_1.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(cond) {
        if (!this.allErrors)
            this.gen.if(cond);
    }
    setParams(obj, assign) {
        if (assign)
            Object.assign(this.params, obj);
        else
            this.params = obj;
    }
    block$data(valid, codeBlock, $dataValid = codegen_1.nil) {
        this.gen.block(() => {
            this.check$data(valid, $dataValid);
            codeBlock();
        });
    }
    check$data(valid = codegen_1.nil, $dataValid = codegen_1.nil) {
        if (!this.$data)
            return;
        const { gen, schemaCode, schemaType, def } = this;
        gen.if((0, codegen_1.or)((0, codegen_1._) `${schemaCode} === undefined`, $dataValid));
        if (valid !== codegen_1.nil)
            gen.assign(valid, true);
        if (schemaType.length || def.validateSchema) {
            gen.elseIf(this.invalid$data());
            this.$dataError();
            if (valid !== codegen_1.nil)
                gen.assign(valid, false);
        }
        gen.else();
    }
    invalid$data() {
        const { gen, schemaCode, schemaType, def, it } = this;
        return (0, codegen_1.or)(wrong$DataType(), invalid$DataSchema());
        function wrong$DataType() {
            if (schemaType.length) {
                /* istanbul ignore if */
                if (!(schemaCode instanceof codegen_1.Name))
                    throw new Error("ajv implementation error");
                const st = Array.isArray(schemaType) ? schemaType : [schemaType];
                return (0, codegen_1._) `${(0, dataType_2.checkDataTypes)(st, schemaCode, it.opts.strictNumbers, dataType_2.DataType.Wrong)}`;
            }
            return codegen_1.nil;
        }
        function invalid$DataSchema() {
            if (def.validateSchema) {
                const validateSchemaRef = gen.scopeValue("validate$data", { ref: def.validateSchema }); // TODO value.code for standalone
                return (0, codegen_1._) `!${validateSchemaRef}(${schemaCode})`;
            }
            return codegen_1.nil;
        }
    }
    subschema(appl, valid) {
        const subschema = (0, subschema_1.getSubschema)(this.it, appl);
        (0, subschema_1.extendSubschemaData)(subschema, this.it, appl);
        (0, subschema_1.extendSubschemaMode)(subschema, appl);
        const nextContext = { ...this.it, ...subschema, items: undefined, props: undefined };
        subschemaCode(nextContext, valid);
        return nextContext;
    }
    mergeEvaluated(schemaCxt, toName) {
        const { it, gen } = this;
        if (!it.opts.unevaluated)
            return;
        if (it.props !== true && schemaCxt.props !== undefined) {
            it.props = util_1.mergeEvaluated.props(gen, schemaCxt.props, it.props, toName);
        }
        if (it.items !== true && schemaCxt.items !== undefined) {
            it.items = util_1.mergeEvaluated.items(gen, schemaCxt.items, it.items, toName);
        }
    }
    mergeValidEvaluated(schemaCxt, valid) {
        const { it, gen } = this;
        if (it.opts.unevaluated && (it.props !== true || it.items !== true)) {
            gen.if(valid, () => this.mergeEvaluated(schemaCxt, codegen_1.Name));
            return true;
        }
    }
}
exports.KeywordCxt = KeywordCxt;
function keywordCode(it, keyword, def, ruleType) {
    const cxt = new KeywordCxt(it, def, keyword);
    if ("code" in def) {
        def.code(cxt, ruleType);
    }
    else if (cxt.$data && def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
    }
    else if ("macro" in def) {
        (0, keyword_1.macroKeywordCode)(cxt, def);
    }
    else if (def.compile || def.validate) {
        (0, keyword_1.funcKeywordCode)(cxt, def);
    }
}
const JSON_POINTER = /^\/(?:[^~]|~0|~1)*$/;
const RELATIVE_JSON_POINTER = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
function getData($data, { dataLevel, dataNames, dataPathArr }) {
    let jsonPointer;
    let data;
    if ($data === "")
        return names_1.default.rootData;
    if ($data[0] === "/") {
        if (!JSON_POINTER.test($data))
            throw new Error(`Invalid JSON-pointer: ${$data}`);
        jsonPointer = $data;
        data = names_1.default.rootData;
    }
    else {
        const matches = RELATIVE_JSON_POINTER.exec($data);
        if (!matches)
            throw new Error(`Invalid JSON-pointer: ${$data}`);
        const up = +matches[1];
        jsonPointer = matches[2];
        if (jsonPointer === "#") {
            if (up >= dataLevel)
                throw new Error(errorMsg("property/index", up));
            return dataPathArr[dataLevel - up];
        }
        if (up > dataLevel)
            throw new Error(errorMsg("data", up));
        data = dataNames[dataLevel - up];
        if (!jsonPointer)
            return data;
    }
    let expr = data;
    const segments = jsonPointer.split("/");
    for (const segment of segments) {
        if (segment) {
            data = (0, codegen_1._) `${data}${(0, codegen_1.getProperty)((0, util_1.unescapeJsonPointer)(segment))}`;
            expr = (0, codegen_1._) `${expr} && ${data}`;
        }
    }
    return expr;
    function errorMsg(pointerType, up) {
        return `Cannot access ${pointerType} ${up} levels up, current level is ${dataLevel}`;
    }
}
exports.getData = getData;

},{"./boolSchema":"node_modules/ajv/dist/compile/validate/boolSchema.js","./dataType":"node_modules/ajv/dist/compile/validate/dataType.js","./applicability":"node_modules/ajv/dist/compile/validate/applicability.js","./defaults":"node_modules/ajv/dist/compile/validate/defaults.js","./keyword":"node_modules/ajv/dist/compile/validate/keyword.js","./subschema":"node_modules/ajv/dist/compile/validate/subschema.js","../codegen":"node_modules/ajv/dist/compile/codegen/index.js","../names":"node_modules/ajv/dist/compile/names.js","../resolve":"node_modules/ajv/dist/compile/resolve.js","../util":"node_modules/ajv/dist/compile/util.js","../errors":"node_modules/ajv/dist/compile/errors.js"}],"node_modules/ajv/dist/runtime/validation_error.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValidationError extends Error {
    constructor(errors) {
        super("validation failed");
        this.errors = errors;
        this.ajv = this.validation = true;
    }
}
exports.default = ValidationError;

},{}],"node_modules/ajv/dist/compile/ref_error.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolve_1 = require("./resolve");
class MissingRefError extends Error {
    constructor(resolver, baseId, ref, msg) {
        super(msg || `can't resolve reference ${ref} from id ${baseId}`);
        this.missingRef = (0, resolve_1.resolveUrl)(resolver, baseId, ref);
        this.missingSchema = (0, resolve_1.normalizeId)((0, resolve_1.getFullPath)(resolver, this.missingRef));
    }
}
exports.default = MissingRefError;

},{"./resolve":"node_modules/ajv/dist/compile/resolve.js"}],"node_modules/ajv/dist/compile/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveSchema = exports.getCompilingSchema = exports.resolveRef = exports.compileSchema = exports.SchemaEnv = void 0;
const codegen_1 = require("./codegen");
const validation_error_1 = require("../runtime/validation_error");
const names_1 = require("./names");
const resolve_1 = require("./resolve");
const util_1 = require("./util");
const validate_1 = require("./validate");
class SchemaEnv {
    constructor(env) {
        var _a;
        this.refs = {};
        this.dynamicAnchors = {};
        let schema;
        if (typeof env.schema == "object")
            schema = env.schema;
        this.schema = env.schema;
        this.schemaId = env.schemaId;
        this.root = env.root || this;
        this.baseId = (_a = env.baseId) !== null && _a !== void 0 ? _a : (0, resolve_1.normalizeId)(schema === null || schema === void 0 ? void 0 : schema[env.schemaId || "$id"]);
        this.schemaPath = env.schemaPath;
        this.localRefs = env.localRefs;
        this.meta = env.meta;
        this.$async = schema === null || schema === void 0 ? void 0 : schema.$async;
        this.refs = {};
    }
}
exports.SchemaEnv = SchemaEnv;
// let codeSize = 0
// let nodeCount = 0
// Compiles schema in SchemaEnv
function compileSchema(sch) {
    // TODO refactor - remove compilations
    const _sch = getCompilingSchema.call(this, sch);
    if (_sch)
        return _sch;
    const rootId = (0, resolve_1.getFullPath)(this.opts.uriResolver, sch.root.baseId); // TODO if getFullPath removed 1 tests fails
    const { es5, lines } = this.opts.code;
    const { ownProperties } = this.opts;
    const gen = new codegen_1.CodeGen(this.scope, { es5, lines, ownProperties });
    let _ValidationError;
    if (sch.$async) {
        _ValidationError = gen.scopeValue("Error", {
            ref: validation_error_1.default,
            code: (0, codegen_1._) `require("ajv/dist/runtime/validation_error").default`,
        });
    }
    const validateName = gen.scopeName("validate");
    sch.validateName = validateName;
    const schemaCxt = {
        gen,
        allErrors: this.opts.allErrors,
        data: names_1.default.data,
        parentData: names_1.default.parentData,
        parentDataProperty: names_1.default.parentDataProperty,
        dataNames: [names_1.default.data],
        dataPathArr: [codegen_1.nil],
        dataLevel: 0,
        dataTypes: [],
        definedProperties: new Set(),
        topSchemaRef: gen.scopeValue("schema", this.opts.code.source === true
            ? { ref: sch.schema, code: (0, codegen_1.stringify)(sch.schema) }
            : { ref: sch.schema }),
        validateName,
        ValidationError: _ValidationError,
        schema: sch.schema,
        schemaEnv: sch,
        rootId,
        baseId: sch.baseId || rootId,
        schemaPath: codegen_1.nil,
        errSchemaPath: sch.schemaPath || (this.opts.jtd ? "" : "#"),
        errorPath: (0, codegen_1._) `""`,
        opts: this.opts,
        self: this,
    };
    let sourceCode;
    try {
        this._compilations.add(sch);
        (0, validate_1.validateFunctionCode)(schemaCxt);
        gen.optimize(this.opts.code.optimize);
        // gen.optimize(1)
        const validateCode = gen.toString();
        sourceCode = `${gen.scopeRefs(names_1.default.scope)}return ${validateCode}`;
        // console.log((codeSize += sourceCode.length), (nodeCount += gen.nodeCount))
        if (this.opts.code.process)
            sourceCode = this.opts.code.process(sourceCode, sch);
        // console.log("\n\n\n *** \n", sourceCode)
        const makeValidate = new Function(`${names_1.default.self}`, `${names_1.default.scope}`, sourceCode);
        const validate = makeValidate(this, this.scope.get());
        this.scope.value(validateName, { ref: validate });
        validate.errors = null;
        validate.schema = sch.schema;
        validate.schemaEnv = sch;
        if (sch.$async)
            validate.$async = true;
        if (this.opts.code.source === true) {
            validate.source = { validateName, validateCode, scopeValues: gen._values };
        }
        if (this.opts.unevaluated) {
            const { props, items } = schemaCxt;
            validate.evaluated = {
                props: props instanceof codegen_1.Name ? undefined : props,
                items: items instanceof codegen_1.Name ? undefined : items,
                dynamicProps: props instanceof codegen_1.Name,
                dynamicItems: items instanceof codegen_1.Name,
            };
            if (validate.source)
                validate.source.evaluated = (0, codegen_1.stringify)(validate.evaluated);
        }
        sch.validate = validate;
        return sch;
    }
    catch (e) {
        delete sch.validate;
        delete sch.validateName;
        if (sourceCode)
            this.logger.error("Error compiling schema, function code:", sourceCode);
        // console.log("\n\n\n *** \n", sourceCode, this.opts)
        throw e;
    }
    finally {
        this._compilations.delete(sch);
    }
}
exports.compileSchema = compileSchema;
function resolveRef(root, baseId, ref) {
    var _a;
    ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, ref);
    const schOrFunc = root.refs[ref];
    if (schOrFunc)
        return schOrFunc;
    let _sch = resolve.call(this, root, ref);
    if (_sch === undefined) {
        const schema = (_a = root.localRefs) === null || _a === void 0 ? void 0 : _a[ref]; // TODO maybe localRefs should hold SchemaEnv
        const { schemaId } = this.opts;
        if (schema)
            _sch = new SchemaEnv({ schema, schemaId, root, baseId });
    }
    if (_sch === undefined)
        return;
    return (root.refs[ref] = inlineOrCompile.call(this, _sch));
}
exports.resolveRef = resolveRef;
function inlineOrCompile(sch) {
    if ((0, resolve_1.inlineRef)(sch.schema, this.opts.inlineRefs))
        return sch.schema;
    return sch.validate ? sch : compileSchema.call(this, sch);
}
// Index of schema compilation in the currently compiled list
function getCompilingSchema(schEnv) {
    for (const sch of this._compilations) {
        if (sameSchemaEnv(sch, schEnv))
            return sch;
    }
}
exports.getCompilingSchema = getCompilingSchema;
function sameSchemaEnv(s1, s2) {
    return s1.schema === s2.schema && s1.root === s2.root && s1.baseId === s2.baseId;
}
// resolve and compile the references ($ref)
// TODO returns AnySchemaObject (if the schema can be inlined) or validation function
function resolve(root, // information about the root schema for the current schema
ref // reference to resolve
) {
    let sch;
    while (typeof (sch = this.refs[ref]) == "string")
        ref = sch;
    return sch || this.schemas[ref] || resolveSchema.call(this, root, ref);
}
// Resolve schema, its root and baseId
function resolveSchema(root, // root object with properties schema, refs TODO below SchemaEnv is assigned to it
ref // reference to resolve
) {
    const p = this.opts.uriResolver.parse(ref);
    const refPath = (0, resolve_1._getFullPath)(this.opts.uriResolver, p);
    let baseId = (0, resolve_1.getFullPath)(this.opts.uriResolver, root.baseId, undefined);
    // TODO `Object.keys(root.schema).length > 0` should not be needed - but removing breaks 2 tests
    if (Object.keys(root.schema).length > 0 && refPath === baseId) {
        return getJsonPointer.call(this, p, root);
    }
    const id = (0, resolve_1.normalizeId)(refPath);
    const schOrRef = this.refs[id] || this.schemas[id];
    if (typeof schOrRef == "string") {
        const sch = resolveSchema.call(this, root, schOrRef);
        if (typeof (sch === null || sch === void 0 ? void 0 : sch.schema) !== "object")
            return;
        return getJsonPointer.call(this, p, sch);
    }
    if (typeof (schOrRef === null || schOrRef === void 0 ? void 0 : schOrRef.schema) !== "object")
        return;
    if (!schOrRef.validate)
        compileSchema.call(this, schOrRef);
    if (id === (0, resolve_1.normalizeId)(ref)) {
        const { schema } = schOrRef;
        const { schemaId } = this.opts;
        const schId = schema[schemaId];
        if (schId)
            baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        return new SchemaEnv({ schema, schemaId, root, baseId });
    }
    return getJsonPointer.call(this, p, schOrRef);
}
exports.resolveSchema = resolveSchema;
const PREVENT_SCOPE_CHANGE = new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions",
]);
function getJsonPointer(parsedRef, { baseId, schema, root }) {
    var _a;
    if (((_a = parsedRef.fragment) === null || _a === void 0 ? void 0 : _a[0]) !== "/")
        return;
    for (const part of parsedRef.fragment.slice(1).split("/")) {
        if (typeof schema === "boolean")
            return;
        const partSchema = schema[(0, util_1.unescapeFragment)(part)];
        if (partSchema === undefined)
            return;
        schema = partSchema;
        // TODO PREVENT_SCOPE_CHANGE could be defined in keyword def?
        const schId = typeof schema === "object" && schema[this.opts.schemaId];
        if (!PREVENT_SCOPE_CHANGE.has(part) && schId) {
            baseId = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schId);
        }
    }
    let env;
    if (typeof schema != "boolean" && schema.$ref && !(0, util_1.schemaHasRulesButRef)(schema, this.RULES)) {
        const $ref = (0, resolve_1.resolveUrl)(this.opts.uriResolver, baseId, schema.$ref);
        env = resolveSchema.call(this, root, $ref);
    }
    // even though resolution failed we need to return SchemaEnv to throw exception
    // so that compileAsync loads missing schema.
    const { schemaId } = this.opts;
    env = env || new SchemaEnv({ schema, schemaId, root, baseId });
    if (env.schema !== env.root.schema)
        return env;
    return undefined;
}

},{"./codegen":"node_modules/ajv/dist/compile/codegen/index.js","../runtime/validation_error":"node_modules/ajv/dist/runtime/validation_error.js","./names":"node_modules/ajv/dist/compile/names.js","./resolve":"node_modules/ajv/dist/compile/resolve.js","./util":"node_modules/ajv/dist/compile/util.js","./validate":"node_modules/ajv/dist/compile/validate/index.js"}],"node_modules/ajv/dist/refs/data.json":[function(require,module,exports) {
module.exports = {
  "$id": "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
  "description": "Meta-schema for $data reference (JSON AnySchema extension proposal)",
  "type": "object",
  "required": ["$data"],
  "properties": {
    "$data": {
      "type": "string",
      "anyOf": [{"format": "relative-json-pointer"}, {"format": "json-pointer"}]
    }
  },
  "additionalProperties": false
}
;
},{}],"node_modules/uri-js/dist/es5/uri.all.js":[function(require,module,exports) {
var define;
var global = arguments[3];
/** @license URI.js v4.4.1 (c) 2011 Gary Court. License: http://github.com/garycourt/uri-js */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.URI = global.URI || {})));
}(this, (function (exports) { 'use strict';

function merge() {
    for (var _len = arguments.length, sets = Array(_len), _key = 0; _key < _len; _key++) {
        sets[_key] = arguments[_key];
    }

    if (sets.length > 1) {
        sets[0] = sets[0].slice(0, -1);
        var xl = sets.length - 1;
        for (var x = 1; x < xl; ++x) {
            sets[x] = sets[x].slice(1, -1);
        }
        sets[xl] = sets[xl].slice(1);
        return sets.join('');
    } else {
        return sets[0];
    }
}
function subexp(str) {
    return "(?:" + str + ")";
}
function typeOf(o) {
    return o === undefined ? "undefined" : o === null ? "null" : Object.prototype.toString.call(o).split(" ").pop().split("]").shift().toLowerCase();
}
function toUpperCase(str) {
    return str.toUpperCase();
}
function toArray(obj) {
    return obj !== undefined && obj !== null ? obj instanceof Array ? obj : typeof obj.length !== "number" || obj.split || obj.setInterval || obj.call ? [obj] : Array.prototype.slice.call(obj) : [];
}
function assign(target, source) {
    var obj = target;
    if (source) {
        for (var key in source) {
            obj[key] = source[key];
        }
    }
    return obj;
}

function buildExps(isIRI) {
    var ALPHA$$ = "[A-Za-z]",
        CR$ = "[\\x0D]",
        DIGIT$$ = "[0-9]",
        DQUOTE$$ = "[\\x22]",
        HEXDIG$$ = merge(DIGIT$$, "[A-Fa-f]"),
        //case-insensitive
    LF$$ = "[\\x0A]",
        SP$$ = "[\\x20]",
        PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)),
        //expanded
    GEN_DELIMS$$ = "[\\:\\/\\?\\#\\[\\]\\@]",
        SUB_DELIMS$$ = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
        RESERVED$$ = merge(GEN_DELIMS$$, SUB_DELIMS$$),
        UCSCHAR$$ = isIRI ? "[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]" : "[]",
        //subset, excludes bidi control characters
    IPRIVATE$$ = isIRI ? "[\\uE000-\\uF8FF]" : "[]",
        //subset
    UNRESERVED$$ = merge(ALPHA$$, DIGIT$$, "[\\-\\.\\_\\~]", UCSCHAR$$),
        SCHEME$ = subexp(ALPHA$$ + merge(ALPHA$$, DIGIT$$, "[\\+\\-\\.]") + "*"),
        USERINFO$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]")) + "*"),
        DEC_OCTET$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("[1-9]" + DIGIT$$) + "|" + DIGIT$$),
        DEC_OCTET_RELAXED$ = subexp(subexp("25[0-5]") + "|" + subexp("2[0-4]" + DIGIT$$) + "|" + subexp("1" + DIGIT$$ + DIGIT$$) + "|" + subexp("0?[1-9]" + DIGIT$$) + "|0?0?" + DIGIT$$),
        //relaxed parsing rules
    IPV4ADDRESS$ = subexp(DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$ + "\\." + DEC_OCTET_RELAXED$),
        H16$ = subexp(HEXDIG$$ + "{1,4}"),
        LS32$ = subexp(subexp(H16$ + "\\:" + H16$) + "|" + IPV4ADDRESS$),
        IPV6ADDRESS1$ = subexp(subexp(H16$ + "\\:") + "{6}" + LS32$),
        //                           6( h16 ":" ) ls32
    IPV6ADDRESS2$ = subexp("\\:\\:" + subexp(H16$ + "\\:") + "{5}" + LS32$),
        //                      "::" 5( h16 ":" ) ls32
    IPV6ADDRESS3$ = subexp(subexp(H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{4}" + LS32$),
        //[               h16 ] "::" 4( h16 ":" ) ls32
    IPV6ADDRESS4$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,1}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{3}" + LS32$),
        //[ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
    IPV6ADDRESS5$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,2}" + H16$) + "?\\:\\:" + subexp(H16$ + "\\:") + "{2}" + LS32$),
        //[ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
    IPV6ADDRESS6$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,3}" + H16$) + "?\\:\\:" + H16$ + "\\:" + LS32$),
        //[ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
    IPV6ADDRESS7$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,4}" + H16$) + "?\\:\\:" + LS32$),
        //[ *4( h16 ":" ) h16 ] "::"              ls32
    IPV6ADDRESS8$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,5}" + H16$) + "?\\:\\:" + H16$),
        //[ *5( h16 ":" ) h16 ] "::"              h16
    IPV6ADDRESS9$ = subexp(subexp(subexp(H16$ + "\\:") + "{0,6}" + H16$) + "?\\:\\:"),
        //[ *6( h16 ":" ) h16 ] "::"
    IPV6ADDRESS$ = subexp([IPV6ADDRESS1$, IPV6ADDRESS2$, IPV6ADDRESS3$, IPV6ADDRESS4$, IPV6ADDRESS5$, IPV6ADDRESS6$, IPV6ADDRESS7$, IPV6ADDRESS8$, IPV6ADDRESS9$].join("|")),
        ZONEID$ = subexp(subexp(UNRESERVED$$ + "|" + PCT_ENCODED$) + "+"),
        //RFC 6874
    IPV6ADDRZ$ = subexp(IPV6ADDRESS$ + "\\%25" + ZONEID$),
        //RFC 6874
    IPV6ADDRZ_RELAXED$ = subexp(IPV6ADDRESS$ + subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + ZONEID$),
        //RFC 6874, with relaxed parsing rules
    IPVFUTURE$ = subexp("[vV]" + HEXDIG$$ + "+\\." + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:]") + "+"),
        IP_LITERAL$ = subexp("\\[" + subexp(IPV6ADDRZ_RELAXED$ + "|" + IPV6ADDRESS$ + "|" + IPVFUTURE$) + "\\]"),
        //RFC 6874
    REG_NAME$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$)) + "*"),
        HOST$ = subexp(IP_LITERAL$ + "|" + IPV4ADDRESS$ + "(?!" + REG_NAME$ + ")" + "|" + REG_NAME$),
        PORT$ = subexp(DIGIT$$ + "*"),
        AUTHORITY$ = subexp(subexp(USERINFO$ + "@") + "?" + HOST$ + subexp("\\:" + PORT$) + "?"),
        PCHAR$ = subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@]")),
        SEGMENT$ = subexp(PCHAR$ + "*"),
        SEGMENT_NZ$ = subexp(PCHAR$ + "+"),
        SEGMENT_NZ_NC$ = subexp(subexp(PCT_ENCODED$ + "|" + merge(UNRESERVED$$, SUB_DELIMS$$, "[\\@]")) + "+"),
        PATH_ABEMPTY$ = subexp(subexp("\\/" + SEGMENT$) + "*"),
        PATH_ABSOLUTE$ = subexp("\\/" + subexp(SEGMENT_NZ$ + PATH_ABEMPTY$) + "?"),
        //simplified
    PATH_NOSCHEME$ = subexp(SEGMENT_NZ_NC$ + PATH_ABEMPTY$),
        //simplified
    PATH_ROOTLESS$ = subexp(SEGMENT_NZ$ + PATH_ABEMPTY$),
        //simplified
    PATH_EMPTY$ = "(?!" + PCHAR$ + ")",
        PATH$ = subexp(PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$),
        QUERY$ = subexp(subexp(PCHAR$ + "|" + merge("[\\/\\?]", IPRIVATE$$)) + "*"),
        FRAGMENT$ = subexp(subexp(PCHAR$ + "|[\\/\\?]") + "*"),
        HIER_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$),
        URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"),
        RELATIVE_PART$ = subexp(subexp("\\/\\/" + AUTHORITY$ + PATH_ABEMPTY$) + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$),
        RELATIVE$ = subexp(RELATIVE_PART$ + subexp("\\?" + QUERY$) + "?" + subexp("\\#" + FRAGMENT$) + "?"),
        URI_REFERENCE$ = subexp(URI$ + "|" + RELATIVE$),
        ABSOLUTE_URI$ = subexp(SCHEME$ + "\\:" + HIER_PART$ + subexp("\\?" + QUERY$) + "?"),
        GENERIC_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$",
        RELATIVE_REF$ = "^(){0}" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_NOSCHEME$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?" + subexp("\\#(" + FRAGMENT$ + ")") + "?$",
        ABSOLUTE_REF$ = "^(" + SCHEME$ + ")\\:" + subexp(subexp("\\/\\/(" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?)") + "?(" + PATH_ABEMPTY$ + "|" + PATH_ABSOLUTE$ + "|" + PATH_ROOTLESS$ + "|" + PATH_EMPTY$ + ")") + subexp("\\?(" + QUERY$ + ")") + "?$",
        SAMEDOC_REF$ = "^" + subexp("\\#(" + FRAGMENT$ + ")") + "?$",
        AUTHORITY_REF$ = "^" + subexp("(" + USERINFO$ + ")@") + "?(" + HOST$ + ")" + subexp("\\:(" + PORT$ + ")") + "?$";
    return {
        NOT_SCHEME: new RegExp(merge("[^]", ALPHA$$, DIGIT$$, "[\\+\\-\\.]"), "g"),
        NOT_USERINFO: new RegExp(merge("[^\\%\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
        NOT_HOST: new RegExp(merge("[^\\%\\[\\]\\:]", UNRESERVED$$, SUB_DELIMS$$), "g"),
        NOT_PATH: new RegExp(merge("[^\\%\\/\\:\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
        NOT_PATH_NOSCHEME: new RegExp(merge("[^\\%\\/\\@]", UNRESERVED$$, SUB_DELIMS$$), "g"),
        NOT_QUERY: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]", IPRIVATE$$), "g"),
        NOT_FRAGMENT: new RegExp(merge("[^\\%]", UNRESERVED$$, SUB_DELIMS$$, "[\\:\\@\\/\\?]"), "g"),
        ESCAPE: new RegExp(merge("[^]", UNRESERVED$$, SUB_DELIMS$$), "g"),
        UNRESERVED: new RegExp(UNRESERVED$$, "g"),
        OTHER_CHARS: new RegExp(merge("[^\\%]", UNRESERVED$$, RESERVED$$), "g"),
        PCT_ENCODED: new RegExp(PCT_ENCODED$, "g"),
        IPV4ADDRESS: new RegExp("^(" + IPV4ADDRESS$ + ")$"),
        IPV6ADDRESS: new RegExp("^\\[?(" + IPV6ADDRESS$ + ")" + subexp(subexp("\\%25|\\%(?!" + HEXDIG$$ + "{2})") + "(" + ZONEID$ + ")") + "?\\]?$") //RFC 6874, with relaxed parsing rules
    };
}
var URI_PROTOCOL = buildExps(false);

var IRI_PROTOCOL = buildExps(true);

var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

/** Highest positive signed 32-bit float value */

var maxInt = 2147483647; // aka. 0x7FFFFFFF or 2^31-1

/** Bootstring parameters */
var base = 36;
var tMin = 1;
var tMax = 26;
var skew = 38;
var damp = 700;
var initialBias = 72;
var initialN = 128; // 0x80
var delimiter = '-'; // '\x2D'

/** Regular expressions */
var regexPunycode = /^xn--/;
var regexNonASCII = /[^\0-\x7E]/; // non-ASCII chars
var regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g; // RFC 3490 separators

/** Error messages */
var errors = {
	'overflow': 'Overflow: input needs wider integers to process',
	'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
	'invalid-input': 'Invalid input'
};

/** Convenience shortcuts */
var baseMinusTMin = base - tMin;
var floor = Math.floor;
var stringFromCharCode = String.fromCharCode;

/*--------------------------------------------------------------------------*/

/**
 * A generic error utility function.
 * @private
 * @param {String} type The error type.
 * @returns {Error} Throws a `RangeError` with the applicable error message.
 */
function error$1(type) {
	throw new RangeError(errors[type]);
}

/**
 * A generic `Array#map` utility function.
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} callback The function that gets called for every array
 * item.
 * @returns {Array} A new array of values returned by the callback function.
 */
function map(array, fn) {
	var result = [];
	var length = array.length;
	while (length--) {
		result[length] = fn(array[length]);
	}
	return result;
}

/**
 * A simple `Array#map`-like wrapper to work with domain name strings or email
 * addresses.
 * @private
 * @param {String} domain The domain name or email address.
 * @param {Function} callback The function that gets called for every
 * character.
 * @returns {Array} A new string of characters returned by the callback
 * function.
 */
function mapDomain(string, fn) {
	var parts = string.split('@');
	var result = '';
	if (parts.length > 1) {
		// In email addresses, only the domain name should be punycoded. Leave
		// the local part (i.e. everything up to `@`) intact.
		result = parts[0] + '@';
		string = parts[1];
	}
	// Avoid `split(regex)` for IE8 compatibility. See #17.
	string = string.replace(regexSeparators, '\x2E');
	var labels = string.split('.');
	var encoded = map(labels, fn).join('.');
	return result + encoded;
}

/**
 * Creates an array containing the numeric code points of each Unicode
 * character in the string. While JavaScript uses UCS-2 internally,
 * this function will convert a pair of surrogate halves (each of which
 * UCS-2 exposes as separate characters) into a single code point,
 * matching UTF-16.
 * @see `punycode.ucs2.encode`
 * @see <https://mathiasbynens.be/notes/javascript-encoding>
 * @memberOf punycode.ucs2
 * @name decode
 * @param {String} string The Unicode input string (UCS-2).
 * @returns {Array} The new array of code points.
 */
function ucs2decode(string) {
	var output = [];
	var counter = 0;
	var length = string.length;
	while (counter < length) {
		var value = string.charCodeAt(counter++);
		if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
			// It's a high surrogate, and there is a next character.
			var extra = string.charCodeAt(counter++);
			if ((extra & 0xFC00) == 0xDC00) {
				// Low surrogate.
				output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
			} else {
				// It's an unmatched surrogate; only append this code unit, in case the
				// next code unit is the high surrogate of a surrogate pair.
				output.push(value);
				counter--;
			}
		} else {
			output.push(value);
		}
	}
	return output;
}

/**
 * Creates a string based on an array of numeric code points.
 * @see `punycode.ucs2.decode`
 * @memberOf punycode.ucs2
 * @name encode
 * @param {Array} codePoints The array of numeric code points.
 * @returns {String} The new Unicode string (UCS-2).
 */
var ucs2encode = function ucs2encode(array) {
	return String.fromCodePoint.apply(String, toConsumableArray(array));
};

/**
 * Converts a basic code point into a digit/integer.
 * @see `digitToBasic()`
 * @private
 * @param {Number} codePoint The basic numeric code point value.
 * @returns {Number} The numeric value of a basic code point (for use in
 * representing integers) in the range `0` to `base - 1`, or `base` if
 * the code point does not represent a value.
 */
var basicToDigit = function basicToDigit(codePoint) {
	if (codePoint - 0x30 < 0x0A) {
		return codePoint - 0x16;
	}
	if (codePoint - 0x41 < 0x1A) {
		return codePoint - 0x41;
	}
	if (codePoint - 0x61 < 0x1A) {
		return codePoint - 0x61;
	}
	return base;
};

/**
 * Converts a digit/integer into a basic code point.
 * @see `basicToDigit()`
 * @private
 * @param {Number} digit The numeric value of a basic code point.
 * @returns {Number} The basic code point whose value (when used for
 * representing integers) is `digit`, which needs to be in the range
 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
 * used; else, the lowercase form is used. The behavior is undefined
 * if `flag` is non-zero and `digit` has no uppercase form.
 */
var digitToBasic = function digitToBasic(digit, flag) {
	//  0..25 map to ASCII a..z or A..Z
	// 26..35 map to ASCII 0..9
	return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
};

/**
 * Bias adaptation function as per section 3.4 of RFC 3492.
 * https://tools.ietf.org/html/rfc3492#section-3.4
 * @private
 */
var adapt = function adapt(delta, numPoints, firstTime) {
	var k = 0;
	delta = firstTime ? floor(delta / damp) : delta >> 1;
	delta += floor(delta / numPoints);
	for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
		delta = floor(delta / baseMinusTMin);
	}
	return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
};

/**
 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
 * symbols.
 * @memberOf punycode
 * @param {String} input The Punycode string of ASCII-only symbols.
 * @returns {String} The resulting string of Unicode symbols.
 */
var decode = function decode(input) {
	// Don't use UCS-2.
	var output = [];
	var inputLength = input.length;
	var i = 0;
	var n = initialN;
	var bias = initialBias;

	// Handle the basic code points: let `basic` be the number of input code
	// points before the last delimiter, or `0` if there is none, then copy
	// the first basic code points to the output.

	var basic = input.lastIndexOf(delimiter);
	if (basic < 0) {
		basic = 0;
	}

	for (var j = 0; j < basic; ++j) {
		// if it's not a basic code point
		if (input.charCodeAt(j) >= 0x80) {
			error$1('not-basic');
		}
		output.push(input.charCodeAt(j));
	}

	// Main decoding loop: start just after the last delimiter if any basic code
	// points were copied; start at the beginning otherwise.

	for (var index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

		// `index` is the index of the next character to be consumed.
		// Decode a generalized variable-length integer into `delta`,
		// which gets added to `i`. The overflow checking is easier
		// if we increase `i` as we go, then subtract off its starting
		// value at the end to obtain `delta`.
		var oldi = i;
		for (var w = 1, k = base;; /* no condition */k += base) {

			if (index >= inputLength) {
				error$1('invalid-input');
			}

			var digit = basicToDigit(input.charCodeAt(index++));

			if (digit >= base || digit > floor((maxInt - i) / w)) {
				error$1('overflow');
			}

			i += digit * w;
			var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

			if (digit < t) {
				break;
			}

			var baseMinusT = base - t;
			if (w > floor(maxInt / baseMinusT)) {
				error$1('overflow');
			}

			w *= baseMinusT;
		}

		var out = output.length + 1;
		bias = adapt(i - oldi, out, oldi == 0);

		// `i` was supposed to wrap around from `out` to `0`,
		// incrementing `n` each time, so we'll fix that now:
		if (floor(i / out) > maxInt - n) {
			error$1('overflow');
		}

		n += floor(i / out);
		i %= out;

		// Insert `n` at position `i` of the output.
		output.splice(i++, 0, n);
	}

	return String.fromCodePoint.apply(String, output);
};

/**
 * Converts a string of Unicode symbols (e.g. a domain name label) to a
 * Punycode string of ASCII-only symbols.
 * @memberOf punycode
 * @param {String} input The string of Unicode symbols.
 * @returns {String} The resulting Punycode string of ASCII-only symbols.
 */
var encode = function encode(input) {
	var output = [];

	// Convert the input in UCS-2 to an array of Unicode code points.
	input = ucs2decode(input);

	// Cache the length.
	var inputLength = input.length;

	// Initialize the state.
	var n = initialN;
	var delta = 0;
	var bias = initialBias;

	// Handle the basic code points.
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = input[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var _currentValue2 = _step.value;

			if (_currentValue2 < 0x80) {
				output.push(stringFromCharCode(_currentValue2));
			}
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator.return) {
				_iterator.return();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	var basicLength = output.length;
	var handledCPCount = basicLength;

	// `handledCPCount` is the number of code points that have been handled;
	// `basicLength` is the number of basic code points.

	// Finish the basic string with a delimiter unless it's empty.
	if (basicLength) {
		output.push(delimiter);
	}

	// Main encoding loop:
	while (handledCPCount < inputLength) {

		// All non-basic code points < n have been handled already. Find the next
		// larger one:
		var m = maxInt;
		var _iteratorNormalCompletion2 = true;
		var _didIteratorError2 = false;
		var _iteratorError2 = undefined;

		try {
			for (var _iterator2 = input[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
				var currentValue = _step2.value;

				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow.
		} catch (err) {
			_didIteratorError2 = true;
			_iteratorError2 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion2 && _iterator2.return) {
					_iterator2.return();
				}
			} finally {
				if (_didIteratorError2) {
					throw _iteratorError2;
				}
			}
		}

		var handledCPCountPlusOne = handledCPCount + 1;
		if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
			error$1('overflow');
		}

		delta += (m - n) * handledCPCountPlusOne;
		n = m;

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = input[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var _currentValue = _step3.value;

				if (_currentValue < n && ++delta > maxInt) {
					error$1('overflow');
				}
				if (_currentValue == n) {
					// Represent delta as a generalized variable-length integer.
					var q = delta;
					for (var k = base;; /* no condition */k += base) {
						var t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
						if (q < t) {
							break;
						}
						var qMinusT = q - t;
						var baseMinusT = base - t;
						output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		++delta;
		++n;
	}
	return output.join('');
};

/**
 * Converts a Punycode string representing a domain name or an email address
 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
 * it doesn't matter if you call it on a string that has already been
 * converted to Unicode.
 * @memberOf punycode
 * @param {String} input The Punycoded domain name or email address to
 * convert to Unicode.
 * @returns {String} The Unicode representation of the given Punycode
 * string.
 */
var toUnicode = function toUnicode(input) {
	return mapDomain(input, function (string) {
		return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
	});
};

/**
 * Converts a Unicode string representing a domain name or an email address to
 * Punycode. Only the non-ASCII parts of the domain name will be converted,
 * i.e. it doesn't matter if you call it with a domain that's already in
 * ASCII.
 * @memberOf punycode
 * @param {String} input The domain name or email address to convert, as a
 * Unicode string.
 * @returns {String} The Punycode representation of the given domain name or
 * email address.
 */
var toASCII = function toASCII(input) {
	return mapDomain(input, function (string) {
		return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
	});
};

/*--------------------------------------------------------------------------*/

/** Define the public API */
var punycode = {
	/**
  * A string representing the current Punycode.js version number.
  * @memberOf punycode
  * @type String
  */
	'version': '2.1.0',
	/**
  * An object of methods to convert from JavaScript's internal character
  * representation (UCS-2) to Unicode code points, and back.
  * @see <https://mathiasbynens.be/notes/javascript-encoding>
  * @memberOf punycode
  * @type Object
  */
	'ucs2': {
		'decode': ucs2decode,
		'encode': ucs2encode
	},
	'decode': decode,
	'encode': encode,
	'toASCII': toASCII,
	'toUnicode': toUnicode
};

/**
 * URI.js
 *
 * @fileoverview An RFC 3986 compliant, scheme extendable URI parsing/validating/resolving library for JavaScript.
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/uri-js
 */
/**
 * Copyright 2011 Gary Court. All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 *
 *    1. Redistributions of source code must retain the above copyright notice, this list of
 *       conditions and the following disclaimer.
 *
 *    2. Redistributions in binary form must reproduce the above copyright notice, this list
 *       of conditions and the following disclaimer in the documentation and/or other materials
 *       provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY GARY COURT ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND
 * FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL GARY COURT OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
 * ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF
 * ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * The views and conclusions contained in the software and documentation are those of the
 * authors and should not be interpreted as representing official policies, either expressed
 * or implied, of Gary Court.
 */
var SCHEMES = {};
function pctEncChar(chr) {
    var c = chr.charCodeAt(0);
    var e = void 0;
    if (c < 16) e = "%0" + c.toString(16).toUpperCase();else if (c < 128) e = "%" + c.toString(16).toUpperCase();else if (c < 2048) e = "%" + (c >> 6 | 192).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();else e = "%" + (c >> 12 | 224).toString(16).toUpperCase() + "%" + (c >> 6 & 63 | 128).toString(16).toUpperCase() + "%" + (c & 63 | 128).toString(16).toUpperCase();
    return e;
}
function pctDecChars(str) {
    var newStr = "";
    var i = 0;
    var il = str.length;
    while (i < il) {
        var c = parseInt(str.substr(i + 1, 2), 16);
        if (c < 128) {
            newStr += String.fromCharCode(c);
            i += 3;
        } else if (c >= 194 && c < 224) {
            if (il - i >= 6) {
                var c2 = parseInt(str.substr(i + 4, 2), 16);
                newStr += String.fromCharCode((c & 31) << 6 | c2 & 63);
            } else {
                newStr += str.substr(i, 6);
            }
            i += 6;
        } else if (c >= 224) {
            if (il - i >= 9) {
                var _c = parseInt(str.substr(i + 4, 2), 16);
                var c3 = parseInt(str.substr(i + 7, 2), 16);
                newStr += String.fromCharCode((c & 15) << 12 | (_c & 63) << 6 | c3 & 63);
            } else {
                newStr += str.substr(i, 9);
            }
            i += 9;
        } else {
            newStr += str.substr(i, 3);
            i += 3;
        }
    }
    return newStr;
}
function _normalizeComponentEncoding(components, protocol) {
    function decodeUnreserved(str) {
        var decStr = pctDecChars(str);
        return !decStr.match(protocol.UNRESERVED) ? str : decStr;
    }
    if (components.scheme) components.scheme = String(components.scheme).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_SCHEME, "");
    if (components.userinfo !== undefined) components.userinfo = String(components.userinfo).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_USERINFO, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.host !== undefined) components.host = String(components.host).replace(protocol.PCT_ENCODED, decodeUnreserved).toLowerCase().replace(protocol.NOT_HOST, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.path !== undefined) components.path = String(components.path).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(components.scheme ? protocol.NOT_PATH : protocol.NOT_PATH_NOSCHEME, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.query !== undefined) components.query = String(components.query).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_QUERY, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    if (components.fragment !== undefined) components.fragment = String(components.fragment).replace(protocol.PCT_ENCODED, decodeUnreserved).replace(protocol.NOT_FRAGMENT, pctEncChar).replace(protocol.PCT_ENCODED, toUpperCase);
    return components;
}

function _stripLeadingZeros(str) {
    return str.replace(/^0*(.*)/, "$1") || "0";
}
function _normalizeIPv4(host, protocol) {
    var matches = host.match(protocol.IPV4ADDRESS) || [];

    var _matches = slicedToArray(matches, 2),
        address = _matches[1];

    if (address) {
        return address.split(".").map(_stripLeadingZeros).join(".");
    } else {
        return host;
    }
}
function _normalizeIPv6(host, protocol) {
    var matches = host.match(protocol.IPV6ADDRESS) || [];

    var _matches2 = slicedToArray(matches, 3),
        address = _matches2[1],
        zone = _matches2[2];

    if (address) {
        var _address$toLowerCase$ = address.toLowerCase().split('::').reverse(),
            _address$toLowerCase$2 = slicedToArray(_address$toLowerCase$, 2),
            last = _address$toLowerCase$2[0],
            first = _address$toLowerCase$2[1];

        var firstFields = first ? first.split(":").map(_stripLeadingZeros) : [];
        var lastFields = last.split(":").map(_stripLeadingZeros);
        var isLastFieldIPv4Address = protocol.IPV4ADDRESS.test(lastFields[lastFields.length - 1]);
        var fieldCount = isLastFieldIPv4Address ? 7 : 8;
        var lastFieldsStart = lastFields.length - fieldCount;
        var fields = Array(fieldCount);
        for (var x = 0; x < fieldCount; ++x) {
            fields[x] = firstFields[x] || lastFields[lastFieldsStart + x] || '';
        }
        if (isLastFieldIPv4Address) {
            fields[fieldCount - 1] = _normalizeIPv4(fields[fieldCount - 1], protocol);
        }
        var allZeroFields = fields.reduce(function (acc, field, index) {
            if (!field || field === "0") {
                var lastLongest = acc[acc.length - 1];
                if (lastLongest && lastLongest.index + lastLongest.length === index) {
                    lastLongest.length++;
                } else {
                    acc.push({ index: index, length: 1 });
                }
            }
            return acc;
        }, []);
        var longestZeroFields = allZeroFields.sort(function (a, b) {
            return b.length - a.length;
        })[0];
        var newHost = void 0;
        if (longestZeroFields && longestZeroFields.length > 1) {
            var newFirst = fields.slice(0, longestZeroFields.index);
            var newLast = fields.slice(longestZeroFields.index + longestZeroFields.length);
            newHost = newFirst.join(":") + "::" + newLast.join(":");
        } else {
            newHost = fields.join(":");
        }
        if (zone) {
            newHost += "%" + zone;
        }
        return newHost;
    } else {
        return host;
    }
}
var URI_PARSE = /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i;
var NO_MATCH_IS_UNDEFINED = "".match(/(){0}/)[1] === undefined;
function parse(uriString) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var components = {};
    var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
    if (options.reference === "suffix") uriString = (options.scheme ? options.scheme + ":" : "") + "//" + uriString;
    var matches = uriString.match(URI_PARSE);
    if (matches) {
        if (NO_MATCH_IS_UNDEFINED) {
            //store each component
            components.scheme = matches[1];
            components.userinfo = matches[3];
            components.host = matches[4];
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = matches[7];
            components.fragment = matches[8];
            //fix port number
            if (isNaN(components.port)) {
                components.port = matches[5];
            }
        } else {
            //IE FIX for improper RegExp matching
            //store each component
            components.scheme = matches[1] || undefined;
            components.userinfo = uriString.indexOf("@") !== -1 ? matches[3] : undefined;
            components.host = uriString.indexOf("//") !== -1 ? matches[4] : undefined;
            components.port = parseInt(matches[5], 10);
            components.path = matches[6] || "";
            components.query = uriString.indexOf("?") !== -1 ? matches[7] : undefined;
            components.fragment = uriString.indexOf("#") !== -1 ? matches[8] : undefined;
            //fix port number
            if (isNaN(components.port)) {
                components.port = uriString.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/) ? matches[4] : undefined;
            }
        }
        if (components.host) {
            //normalize IP hosts
            components.host = _normalizeIPv6(_normalizeIPv4(components.host, protocol), protocol);
        }
        //determine reference type
        if (components.scheme === undefined && components.userinfo === undefined && components.host === undefined && components.port === undefined && !components.path && components.query === undefined) {
            components.reference = "same-document";
        } else if (components.scheme === undefined) {
            components.reference = "relative";
        } else if (components.fragment === undefined) {
            components.reference = "absolute";
        } else {
            components.reference = "uri";
        }
        //check for reference errors
        if (options.reference && options.reference !== "suffix" && options.reference !== components.reference) {
            components.error = components.error || "URI is not a " + options.reference + " reference.";
        }
        //find scheme handler
        var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
        //check if scheme can't handle IRIs
        if (!options.unicodeSupport && (!schemeHandler || !schemeHandler.unicodeSupport)) {
            //if host component is a domain name
            if (components.host && (options.domainHost || schemeHandler && schemeHandler.domainHost)) {
                //convert Unicode IDN -> ASCII IDN
                try {
                    components.host = punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase());
                } catch (e) {
                    components.error = components.error || "Host's domain name can not be converted to ASCII via punycode: " + e;
                }
            }
            //convert IRI -> URI
            _normalizeComponentEncoding(components, URI_PROTOCOL);
        } else {
            //normalize encodings
            _normalizeComponentEncoding(components, protocol);
        }
        //perform scheme specific parsing
        if (schemeHandler && schemeHandler.parse) {
            schemeHandler.parse(components, options);
        }
    } else {
        components.error = components.error || "URI can not be parsed.";
    }
    return components;
}

function _recomposeAuthority(components, options) {
    var protocol = options.iri !== false ? IRI_PROTOCOL : URI_PROTOCOL;
    var uriTokens = [];
    if (components.userinfo !== undefined) {
        uriTokens.push(components.userinfo);
        uriTokens.push("@");
    }
    if (components.host !== undefined) {
        //normalize IP hosts, add brackets and escape zone separator for IPv6
        uriTokens.push(_normalizeIPv6(_normalizeIPv4(String(components.host), protocol), protocol).replace(protocol.IPV6ADDRESS, function (_, $1, $2) {
            return "[" + $1 + ($2 ? "%25" + $2 : "") + "]";
        }));
    }
    if (typeof components.port === "number" || typeof components.port === "string") {
        uriTokens.push(":");
        uriTokens.push(String(components.port));
    }
    return uriTokens.length ? uriTokens.join("") : undefined;
}

var RDS1 = /^\.\.?\//;
var RDS2 = /^\/\.(\/|$)/;
var RDS3 = /^\/\.\.(\/|$)/;
var RDS5 = /^\/?(?:.|\n)*?(?=\/|$)/;
function removeDotSegments(input) {
    var output = [];
    while (input.length) {
        if (input.match(RDS1)) {
            input = input.replace(RDS1, "");
        } else if (input.match(RDS2)) {
            input = input.replace(RDS2, "/");
        } else if (input.match(RDS3)) {
            input = input.replace(RDS3, "/");
            output.pop();
        } else if (input === "." || input === "..") {
            input = "";
        } else {
            var im = input.match(RDS5);
            if (im) {
                var s = im[0];
                input = input.slice(s.length);
                output.push(s);
            } else {
                throw new Error("Unexpected dot segment condition");
            }
        }
    }
    return output.join("");
}

function serialize(components) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var protocol = options.iri ? IRI_PROTOCOL : URI_PROTOCOL;
    var uriTokens = [];
    //find scheme handler
    var schemeHandler = SCHEMES[(options.scheme || components.scheme || "").toLowerCase()];
    //perform scheme specific serialization
    if (schemeHandler && schemeHandler.serialize) schemeHandler.serialize(components, options);
    if (components.host) {
        //if host component is an IPv6 address
        if (protocol.IPV6ADDRESS.test(components.host)) {}
        //TODO: normalize IPv6 address as per RFC 5952

        //if host component is a domain name
        else if (options.domainHost || schemeHandler && schemeHandler.domainHost) {
                //convert IDN via punycode
                try {
                    components.host = !options.iri ? punycode.toASCII(components.host.replace(protocol.PCT_ENCODED, pctDecChars).toLowerCase()) : punycode.toUnicode(components.host);
                } catch (e) {
                    components.error = components.error || "Host's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                }
            }
    }
    //normalize encoding
    _normalizeComponentEncoding(components, protocol);
    if (options.reference !== "suffix" && components.scheme) {
        uriTokens.push(components.scheme);
        uriTokens.push(":");
    }
    var authority = _recomposeAuthority(components, options);
    if (authority !== undefined) {
        if (options.reference !== "suffix") {
            uriTokens.push("//");
        }
        uriTokens.push(authority);
        if (components.path && components.path.charAt(0) !== "/") {
            uriTokens.push("/");
        }
    }
    if (components.path !== undefined) {
        var s = components.path;
        if (!options.absolutePath && (!schemeHandler || !schemeHandler.absolutePath)) {
            s = removeDotSegments(s);
        }
        if (authority === undefined) {
            s = s.replace(/^\/\//, "/%2F"); //don't allow the path to start with "//"
        }
        uriTokens.push(s);
    }
    if (components.query !== undefined) {
        uriTokens.push("?");
        uriTokens.push(components.query);
    }
    if (components.fragment !== undefined) {
        uriTokens.push("#");
        uriTokens.push(components.fragment);
    }
    return uriTokens.join(""); //merge tokens into a string
}

function resolveComponents(base, relative) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var skipNormalization = arguments[3];

    var target = {};
    if (!skipNormalization) {
        base = parse(serialize(base, options), options); //normalize base components
        relative = parse(serialize(relative, options), options); //normalize relative components
    }
    options = options || {};
    if (!options.tolerant && relative.scheme) {
        target.scheme = relative.scheme;
        //target.authority = relative.authority;
        target.userinfo = relative.userinfo;
        target.host = relative.host;
        target.port = relative.port;
        target.path = removeDotSegments(relative.path || "");
        target.query = relative.query;
    } else {
        if (relative.userinfo !== undefined || relative.host !== undefined || relative.port !== undefined) {
            //target.authority = relative.authority;
            target.userinfo = relative.userinfo;
            target.host = relative.host;
            target.port = relative.port;
            target.path = removeDotSegments(relative.path || "");
            target.query = relative.query;
        } else {
            if (!relative.path) {
                target.path = base.path;
                if (relative.query !== undefined) {
                    target.query = relative.query;
                } else {
                    target.query = base.query;
                }
            } else {
                if (relative.path.charAt(0) === "/") {
                    target.path = removeDotSegments(relative.path);
                } else {
                    if ((base.userinfo !== undefined || base.host !== undefined || base.port !== undefined) && !base.path) {
                        target.path = "/" + relative.path;
                    } else if (!base.path) {
                        target.path = relative.path;
                    } else {
                        target.path = base.path.slice(0, base.path.lastIndexOf("/") + 1) + relative.path;
                    }
                    target.path = removeDotSegments(target.path);
                }
                target.query = relative.query;
            }
            //target.authority = base.authority;
            target.userinfo = base.userinfo;
            target.host = base.host;
            target.port = base.port;
        }
        target.scheme = base.scheme;
    }
    target.fragment = relative.fragment;
    return target;
}

function resolve(baseURI, relativeURI, options) {
    var schemelessOptions = assign({ scheme: 'null' }, options);
    return serialize(resolveComponents(parse(baseURI, schemelessOptions), parse(relativeURI, schemelessOptions), schemelessOptions, true), schemelessOptions);
}

function normalize(uri, options) {
    if (typeof uri === "string") {
        uri = serialize(parse(uri, options), options);
    } else if (typeOf(uri) === "object") {
        uri = parse(serialize(uri, options), options);
    }
    return uri;
}

function equal(uriA, uriB, options) {
    if (typeof uriA === "string") {
        uriA = serialize(parse(uriA, options), options);
    } else if (typeOf(uriA) === "object") {
        uriA = serialize(uriA, options);
    }
    if (typeof uriB === "string") {
        uriB = serialize(parse(uriB, options), options);
    } else if (typeOf(uriB) === "object") {
        uriB = serialize(uriB, options);
    }
    return uriA === uriB;
}

function escapeComponent(str, options) {
    return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.ESCAPE : IRI_PROTOCOL.ESCAPE, pctEncChar);
}

function unescapeComponent(str, options) {
    return str && str.toString().replace(!options || !options.iri ? URI_PROTOCOL.PCT_ENCODED : IRI_PROTOCOL.PCT_ENCODED, pctDecChars);
}

var handler = {
    scheme: "http",
    domainHost: true,
    parse: function parse(components, options) {
        //report missing host
        if (!components.host) {
            components.error = components.error || "HTTP URIs must have a host.";
        }
        return components;
    },
    serialize: function serialize(components, options) {
        var secure = String(components.scheme).toLowerCase() === "https";
        //normalize the default port
        if (components.port === (secure ? 443 : 80) || components.port === "") {
            components.port = undefined;
        }
        //normalize the empty path
        if (!components.path) {
            components.path = "/";
        }
        //NOTE: We do not parse query strings for HTTP URIs
        //as WWW Form Url Encoded query strings are part of the HTML4+ spec,
        //and not the HTTP spec.
        return components;
    }
};

var handler$1 = {
    scheme: "https",
    domainHost: handler.domainHost,
    parse: handler.parse,
    serialize: handler.serialize
};

function isSecure(wsComponents) {
    return typeof wsComponents.secure === 'boolean' ? wsComponents.secure : String(wsComponents.scheme).toLowerCase() === "wss";
}
//RFC 6455
var handler$2 = {
    scheme: "ws",
    domainHost: true,
    parse: function parse(components, options) {
        var wsComponents = components;
        //indicate if the secure flag is set
        wsComponents.secure = isSecure(wsComponents);
        //construct resouce name
        wsComponents.resourceName = (wsComponents.path || '/') + (wsComponents.query ? '?' + wsComponents.query : '');
        wsComponents.path = undefined;
        wsComponents.query = undefined;
        return wsComponents;
    },
    serialize: function serialize(wsComponents, options) {
        //normalize the default port
        if (wsComponents.port === (isSecure(wsComponents) ? 443 : 80) || wsComponents.port === "") {
            wsComponents.port = undefined;
        }
        //ensure scheme matches secure flag
        if (typeof wsComponents.secure === 'boolean') {
            wsComponents.scheme = wsComponents.secure ? 'wss' : 'ws';
            wsComponents.secure = undefined;
        }
        //reconstruct path from resource name
        if (wsComponents.resourceName) {
            var _wsComponents$resourc = wsComponents.resourceName.split('?'),
                _wsComponents$resourc2 = slicedToArray(_wsComponents$resourc, 2),
                path = _wsComponents$resourc2[0],
                query = _wsComponents$resourc2[1];

            wsComponents.path = path && path !== '/' ? path : undefined;
            wsComponents.query = query;
            wsComponents.resourceName = undefined;
        }
        //forbid fragment component
        wsComponents.fragment = undefined;
        return wsComponents;
    }
};

var handler$3 = {
    scheme: "wss",
    domainHost: handler$2.domainHost,
    parse: handler$2.parse,
    serialize: handler$2.serialize
};

var O = {};
var isIRI = true;
//RFC 3986
var UNRESERVED$$ = "[A-Za-z0-9\\-\\.\\_\\~" + (isIRI ? "\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF" : "") + "]";
var HEXDIG$$ = "[0-9A-Fa-f]"; //case-insensitive
var PCT_ENCODED$ = subexp(subexp("%[EFef]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%[89A-Fa-f]" + HEXDIG$$ + "%" + HEXDIG$$ + HEXDIG$$) + "|" + subexp("%" + HEXDIG$$ + HEXDIG$$)); //expanded
//RFC 5322, except these symbols as per RFC 6068: @ : / ? # [ ] & ; =
//const ATEXT$$ = "[A-Za-z0-9\\!\\#\\$\\%\\&\\'\\*\\+\\-\\/\\=\\?\\^\\_\\`\\{\\|\\}\\~]";
//const WSP$$ = "[\\x20\\x09]";
//const OBS_QTEXT$$ = "[\\x01-\\x08\\x0B\\x0C\\x0E-\\x1F\\x7F]";  //(%d1-8 / %d11-12 / %d14-31 / %d127)
//const QTEXT$$ = merge("[\\x21\\x23-\\x5B\\x5D-\\x7E]", OBS_QTEXT$$);  //%d33 / %d35-91 / %d93-126 / obs-qtext
//const VCHAR$$ = "[\\x21-\\x7E]";
//const WSP$$ = "[\\x20\\x09]";
//const OBS_QP$ = subexp("\\\\" + merge("[\\x00\\x0D\\x0A]", OBS_QTEXT$$));  //%d0 / CR / LF / obs-qtext
//const FWS$ = subexp(subexp(WSP$$ + "*" + "\\x0D\\x0A") + "?" + WSP$$ + "+");
//const QUOTED_PAIR$ = subexp(subexp("\\\\" + subexp(VCHAR$$ + "|" + WSP$$)) + "|" + OBS_QP$);
//const QUOTED_STRING$ = subexp('\\"' + subexp(FWS$ + "?" + QCONTENT$) + "*" + FWS$ + "?" + '\\"');
var ATEXT$$ = "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]";
var QTEXT$$ = "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]";
var VCHAR$$ = merge(QTEXT$$, "[\\\"\\\\]");
var SOME_DELIMS$$ = "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]";
var UNRESERVED = new RegExp(UNRESERVED$$, "g");
var PCT_ENCODED = new RegExp(PCT_ENCODED$, "g");
var NOT_LOCAL_PART = new RegExp(merge("[^]", ATEXT$$, "[\\.]", '[\\"]', VCHAR$$), "g");
var NOT_HFNAME = new RegExp(merge("[^]", UNRESERVED$$, SOME_DELIMS$$), "g");
var NOT_HFVALUE = NOT_HFNAME;
function decodeUnreserved(str) {
    var decStr = pctDecChars(str);
    return !decStr.match(UNRESERVED) ? str : decStr;
}
var handler$4 = {
    scheme: "mailto",
    parse: function parse$$1(components, options) {
        var mailtoComponents = components;
        var to = mailtoComponents.to = mailtoComponents.path ? mailtoComponents.path.split(",") : [];
        mailtoComponents.path = undefined;
        if (mailtoComponents.query) {
            var unknownHeaders = false;
            var headers = {};
            var hfields = mailtoComponents.query.split("&");
            for (var x = 0, xl = hfields.length; x < xl; ++x) {
                var hfield = hfields[x].split("=");
                switch (hfield[0]) {
                    case "to":
                        var toAddrs = hfield[1].split(",");
                        for (var _x = 0, _xl = toAddrs.length; _x < _xl; ++_x) {
                            to.push(toAddrs[_x]);
                        }
                        break;
                    case "subject":
                        mailtoComponents.subject = unescapeComponent(hfield[1], options);
                        break;
                    case "body":
                        mailtoComponents.body = unescapeComponent(hfield[1], options);
                        break;
                    default:
                        unknownHeaders = true;
                        headers[unescapeComponent(hfield[0], options)] = unescapeComponent(hfield[1], options);
                        break;
                }
            }
            if (unknownHeaders) mailtoComponents.headers = headers;
        }
        mailtoComponents.query = undefined;
        for (var _x2 = 0, _xl2 = to.length; _x2 < _xl2; ++_x2) {
            var addr = to[_x2].split("@");
            addr[0] = unescapeComponent(addr[0]);
            if (!options.unicodeSupport) {
                //convert Unicode IDN -> ASCII IDN
                try {
                    addr[1] = punycode.toASCII(unescapeComponent(addr[1], options).toLowerCase());
                } catch (e) {
                    mailtoComponents.error = mailtoComponents.error || "Email address's domain name can not be converted to ASCII via punycode: " + e;
                }
            } else {
                addr[1] = unescapeComponent(addr[1], options).toLowerCase();
            }
            to[_x2] = addr.join("@");
        }
        return mailtoComponents;
    },
    serialize: function serialize$$1(mailtoComponents, options) {
        var components = mailtoComponents;
        var to = toArray(mailtoComponents.to);
        if (to) {
            for (var x = 0, xl = to.length; x < xl; ++x) {
                var toAddr = String(to[x]);
                var atIdx = toAddr.lastIndexOf("@");
                var localPart = toAddr.slice(0, atIdx).replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_LOCAL_PART, pctEncChar);
                var domain = toAddr.slice(atIdx + 1);
                //convert IDN via punycode
                try {
                    domain = !options.iri ? punycode.toASCII(unescapeComponent(domain, options).toLowerCase()) : punycode.toUnicode(domain);
                } catch (e) {
                    components.error = components.error || "Email address's domain name can not be converted to " + (!options.iri ? "ASCII" : "Unicode") + " via punycode: " + e;
                }
                to[x] = localPart + "@" + domain;
            }
            components.path = to.join(",");
        }
        var headers = mailtoComponents.headers = mailtoComponents.headers || {};
        if (mailtoComponents.subject) headers["subject"] = mailtoComponents.subject;
        if (mailtoComponents.body) headers["body"] = mailtoComponents.body;
        var fields = [];
        for (var name in headers) {
            if (headers[name] !== O[name]) {
                fields.push(name.replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFNAME, pctEncChar) + "=" + headers[name].replace(PCT_ENCODED, decodeUnreserved).replace(PCT_ENCODED, toUpperCase).replace(NOT_HFVALUE, pctEncChar));
            }
        }
        if (fields.length) {
            components.query = fields.join("&");
        }
        return components;
    }
};

var URN_PARSE = /^([^\:]+)\:(.*)/;
//RFC 2141
var handler$5 = {
    scheme: "urn",
    parse: function parse$$1(components, options) {
        var matches = components.path && components.path.match(URN_PARSE);
        var urnComponents = components;
        if (matches) {
            var scheme = options.scheme || urnComponents.scheme || "urn";
            var nid = matches[1].toLowerCase();
            var nss = matches[2];
            var urnScheme = scheme + ":" + (options.nid || nid);
            var schemeHandler = SCHEMES[urnScheme];
            urnComponents.nid = nid;
            urnComponents.nss = nss;
            urnComponents.path = undefined;
            if (schemeHandler) {
                urnComponents = schemeHandler.parse(urnComponents, options);
            }
        } else {
            urnComponents.error = urnComponents.error || "URN can not be parsed.";
        }
        return urnComponents;
    },
    serialize: function serialize$$1(urnComponents, options) {
        var scheme = options.scheme || urnComponents.scheme || "urn";
        var nid = urnComponents.nid;
        var urnScheme = scheme + ":" + (options.nid || nid);
        var schemeHandler = SCHEMES[urnScheme];
        if (schemeHandler) {
            urnComponents = schemeHandler.serialize(urnComponents, options);
        }
        var uriComponents = urnComponents;
        var nss = urnComponents.nss;
        uriComponents.path = (nid || options.nid) + ":" + nss;
        return uriComponents;
    }
};

var UUID = /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/;
//RFC 4122
var handler$6 = {
    scheme: "urn:uuid",
    parse: function parse(urnComponents, options) {
        var uuidComponents = urnComponents;
        uuidComponents.uuid = uuidComponents.nss;
        uuidComponents.nss = undefined;
        if (!options.tolerant && (!uuidComponents.uuid || !uuidComponents.uuid.match(UUID))) {
            uuidComponents.error = uuidComponents.error || "UUID is not valid.";
        }
        return uuidComponents;
    },
    serialize: function serialize(uuidComponents, options) {
        var urnComponents = uuidComponents;
        //normalize UUID
        urnComponents.nss = (uuidComponents.uuid || "").toLowerCase();
        return urnComponents;
    }
};

SCHEMES[handler.scheme] = handler;
SCHEMES[handler$1.scheme] = handler$1;
SCHEMES[handler$2.scheme] = handler$2;
SCHEMES[handler$3.scheme] = handler$3;
SCHEMES[handler$4.scheme] = handler$4;
SCHEMES[handler$5.scheme] = handler$5;
SCHEMES[handler$6.scheme] = handler$6;

exports.SCHEMES = SCHEMES;
exports.pctEncChar = pctEncChar;
exports.pctDecChars = pctDecChars;
exports.parse = parse;
exports.removeDotSegments = removeDotSegments;
exports.serialize = serialize;
exports.resolveComponents = resolveComponents;
exports.resolve = resolve;
exports.normalize = normalize;
exports.equal = equal;
exports.escapeComponent = escapeComponent;
exports.unescapeComponent = unescapeComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));


},{}],"node_modules/ajv/dist/runtime/uri.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uri = require("uri-js");
uri.code = 'require("ajv/dist/runtime/uri").default';
exports.default = uri;

},{"uri-js":"node_modules/uri-js/dist/es5/uri.all.js"}],"node_modules/ajv/dist/core.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
var validate_1 = require("./compile/validate");
Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function () { return validate_1.KeywordCxt; } });
var codegen_1 = require("./compile/codegen");
Object.defineProperty(exports, "_", { enumerable: true, get: function () { return codegen_1._; } });
Object.defineProperty(exports, "str", { enumerable: true, get: function () { return codegen_1.str; } });
Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return codegen_1.stringify; } });
Object.defineProperty(exports, "nil", { enumerable: true, get: function () { return codegen_1.nil; } });
Object.defineProperty(exports, "Name", { enumerable: true, get: function () { return codegen_1.Name; } });
Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function () { return codegen_1.CodeGen; } });
const validation_error_1 = require("./runtime/validation_error");
const ref_error_1 = require("./compile/ref_error");
const rules_1 = require("./compile/rules");
const compile_1 = require("./compile");
const codegen_2 = require("./compile/codegen");
const resolve_1 = require("./compile/resolve");
const dataType_1 = require("./compile/validate/dataType");
const util_1 = require("./compile/util");
const $dataRefSchema = require("./refs/data.json");
const uri_1 = require("./runtime/uri");
const defaultRegExp = (str, flags) => new RegExp(str, flags);
defaultRegExp.code = "new RegExp";
const META_IGNORE_OPTIONS = ["removeAdditional", "useDefaults", "coerceTypes"];
const EXT_SCOPE_NAMES = new Set([
    "validate",
    "serialize",
    "parse",
    "wrapper",
    "root",
    "schema",
    "keyword",
    "pattern",
    "formats",
    "validate$data",
    "func",
    "obj",
    "Error",
]);
const removedOptions = {
    errorDataPath: "",
    format: "`validateFormats: false` can be used instead.",
    nullable: '"nullable" keyword is supported by default.',
    jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
    extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
    missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
    processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
    sourceCode: "Use option `code: {source: true}`",
    strictDefaults: "It is default now, see option `strict`.",
    strictKeywords: "It is default now, see option `strict`.",
    uniqueItems: '"uniqueItems" keyword is always validated.',
    unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
    cache: "Map is used as cache, schema object as key.",
    serialize: "Map is used as cache, schema object as key.",
    ajvErrors: "It is default now.",
};
const deprecatedOptions = {
    ignoreKeywordsWithRef: "",
    jsPropertySyntax: "",
    unicode: '"minLength"/"maxLength" account for unicode characters by default.',
};
const MAX_EXPRESSION = 200;
// eslint-disable-next-line complexity
function requiredOptions(o) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0;
    const s = o.strict;
    const _optz = (_a = o.code) === null || _a === void 0 ? void 0 : _a.optimize;
    const optimize = _optz === true || _optz === undefined ? 1 : _optz || 0;
    const regExp = (_c = (_b = o.code) === null || _b === void 0 ? void 0 : _b.regExp) !== null && _c !== void 0 ? _c : defaultRegExp;
    const uriResolver = (_d = o.uriResolver) !== null && _d !== void 0 ? _d : uri_1.default;
    return {
        strictSchema: (_f = (_e = o.strictSchema) !== null && _e !== void 0 ? _e : s) !== null && _f !== void 0 ? _f : true,
        strictNumbers: (_h = (_g = o.strictNumbers) !== null && _g !== void 0 ? _g : s) !== null && _h !== void 0 ? _h : true,
        strictTypes: (_k = (_j = o.strictTypes) !== null && _j !== void 0 ? _j : s) !== null && _k !== void 0 ? _k : "log",
        strictTuples: (_m = (_l = o.strictTuples) !== null && _l !== void 0 ? _l : s) !== null && _m !== void 0 ? _m : "log",
        strictRequired: (_p = (_o = o.strictRequired) !== null && _o !== void 0 ? _o : s) !== null && _p !== void 0 ? _p : false,
        code: o.code ? { ...o.code, optimize, regExp } : { optimize, regExp },
        loopRequired: (_q = o.loopRequired) !== null && _q !== void 0 ? _q : MAX_EXPRESSION,
        loopEnum: (_r = o.loopEnum) !== null && _r !== void 0 ? _r : MAX_EXPRESSION,
        meta: (_s = o.meta) !== null && _s !== void 0 ? _s : true,
        messages: (_t = o.messages) !== null && _t !== void 0 ? _t : true,
        inlineRefs: (_u = o.inlineRefs) !== null && _u !== void 0 ? _u : true,
        schemaId: (_v = o.schemaId) !== null && _v !== void 0 ? _v : "$id",
        addUsedSchema: (_w = o.addUsedSchema) !== null && _w !== void 0 ? _w : true,
        validateSchema: (_x = o.validateSchema) !== null && _x !== void 0 ? _x : true,
        validateFormats: (_y = o.validateFormats) !== null && _y !== void 0 ? _y : true,
        unicodeRegExp: (_z = o.unicodeRegExp) !== null && _z !== void 0 ? _z : true,
        int32range: (_0 = o.int32range) !== null && _0 !== void 0 ? _0 : true,
        uriResolver: uriResolver,
    };
}
class Ajv {
    constructor(opts = {}) {
        this.schemas = {};
        this.refs = {};
        this.formats = {};
        this._compilations = new Set();
        this._loading = {};
        this._cache = new Map();
        opts = this.opts = { ...opts, ...requiredOptions(opts) };
        const { es5, lines } = this.opts.code;
        this.scope = new codegen_2.ValueScope({ scope: {}, prefixes: EXT_SCOPE_NAMES, es5, lines });
        this.logger = getLogger(opts.logger);
        const formatOpt = opts.validateFormats;
        opts.validateFormats = false;
        this.RULES = (0, rules_1.getRules)();
        checkOptions.call(this, removedOptions, opts, "NOT SUPPORTED");
        checkOptions.call(this, deprecatedOptions, opts, "DEPRECATED", "warn");
        this._metaOpts = getMetaSchemaOptions.call(this);
        if (opts.formats)
            addInitialFormats.call(this);
        this._addVocabularies();
        this._addDefaultMetaSchema();
        if (opts.keywords)
            addInitialKeywords.call(this, opts.keywords);
        if (typeof opts.meta == "object")
            this.addMetaSchema(opts.meta);
        addInitialSchemas.call(this);
        opts.validateFormats = formatOpt;
    }
    _addVocabularies() {
        this.addKeyword("$async");
    }
    _addDefaultMetaSchema() {
        const { $data, meta, schemaId } = this.opts;
        let _dataRefSchema = $dataRefSchema;
        if (schemaId === "id") {
            _dataRefSchema = { ...$dataRefSchema };
            _dataRefSchema.id = _dataRefSchema.$id;
            delete _dataRefSchema.$id;
        }
        if (meta && $data)
            this.addMetaSchema(_dataRefSchema, _dataRefSchema[schemaId], false);
    }
    defaultMeta() {
        const { meta, schemaId } = this.opts;
        return (this.opts.defaultMeta = typeof meta == "object" ? meta[schemaId] || meta : undefined);
    }
    validate(schemaKeyRef, // key, ref or schema object
    data // to be validated
    ) {
        let v;
        if (typeof schemaKeyRef == "string") {
            v = this.getSchema(schemaKeyRef);
            if (!v)
                throw new Error(`no schema with key or ref "${schemaKeyRef}"`);
        }
        else {
            v = this.compile(schemaKeyRef);
        }
        const valid = v(data);
        if (!("$async" in v))
            this.errors = v.errors;
        return valid;
    }
    compile(schema, _meta) {
        const sch = this._addSchema(schema, _meta);
        return (sch.validate || this._compileSchemaEnv(sch));
    }
    compileAsync(schema, meta) {
        if (typeof this.opts.loadSchema != "function") {
            throw new Error("options.loadSchema should be a function");
        }
        const { loadSchema } = this.opts;
        return runCompileAsync.call(this, schema, meta);
        async function runCompileAsync(_schema, _meta) {
            await loadMetaSchema.call(this, _schema.$schema);
            const sch = this._addSchema(_schema, _meta);
            return sch.validate || _compileAsync.call(this, sch);
        }
        async function loadMetaSchema($ref) {
            if ($ref && !this.getSchema($ref)) {
                await runCompileAsync.call(this, { $ref }, true);
            }
        }
        async function _compileAsync(sch) {
            try {
                return this._compileSchemaEnv(sch);
            }
            catch (e) {
                if (!(e instanceof ref_error_1.default))
                    throw e;
                checkLoaded.call(this, e);
                await loadMissingSchema.call(this, e.missingSchema);
                return _compileAsync.call(this, sch);
            }
        }
        function checkLoaded({ missingSchema: ref, missingRef }) {
            if (this.refs[ref]) {
                throw new Error(`AnySchema ${ref} is loaded but ${missingRef} cannot be resolved`);
            }
        }
        async function loadMissingSchema(ref) {
            const _schema = await _loadSchema.call(this, ref);
            if (!this.refs[ref])
                await loadMetaSchema.call(this, _schema.$schema);
            if (!this.refs[ref])
                this.addSchema(_schema, ref, meta);
        }
        async function _loadSchema(ref) {
            const p = this._loading[ref];
            if (p)
                return p;
            try {
                return await (this._loading[ref] = loadSchema(ref));
            }
            finally {
                delete this._loading[ref];
            }
        }
    }
    // Adds schema to the instance
    addSchema(schema, // If array is passed, `key` will be ignored
    key, // Optional schema key. Can be passed to `validate` method instead of schema object or id/ref. One schema per instance can have empty `id` and `key`.
    _meta, // true if schema is a meta-schema. Used internally, addMetaSchema should be used instead.
    _validateSchema = this.opts.validateSchema // false to skip schema validation. Used internally, option validateSchema should be used instead.
    ) {
        if (Array.isArray(schema)) {
            for (const sch of schema)
                this.addSchema(sch, undefined, _meta, _validateSchema);
            return this;
        }
        let id;
        if (typeof schema === "object") {
            const { schemaId } = this.opts;
            id = schema[schemaId];
            if (id !== undefined && typeof id != "string") {
                throw new Error(`schema ${schemaId} must be string`);
            }
        }
        key = (0, resolve_1.normalizeId)(key || id);
        this._checkUnique(key);
        this.schemas[key] = this._addSchema(schema, _meta, key, _validateSchema, true);
        return this;
    }
    // Add schema that will be used to validate other schemas
    // options in META_IGNORE_OPTIONS are alway set to false
    addMetaSchema(schema, key, // schema key
    _validateSchema = this.opts.validateSchema // false to skip schema validation, can be used to override validateSchema option for meta-schema
    ) {
        this.addSchema(schema, key, true, _validateSchema);
        return this;
    }
    //  Validate schema against its meta-schema
    validateSchema(schema, throwOrLogError) {
        if (typeof schema == "boolean")
            return true;
        let $schema;
        $schema = schema.$schema;
        if ($schema !== undefined && typeof $schema != "string") {
            throw new Error("$schema must be a string");
        }
        $schema = $schema || this.opts.defaultMeta || this.defaultMeta();
        if (!$schema) {
            this.logger.warn("meta-schema not available");
            this.errors = null;
            return true;
        }
        const valid = this.validate($schema, schema);
        if (!valid && throwOrLogError) {
            const message = "schema is invalid: " + this.errorsText();
            if (this.opts.validateSchema === "log")
                this.logger.error(message);
            else
                throw new Error(message);
        }
        return valid;
    }
    // Get compiled schema by `key` or `ref`.
    // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
    getSchema(keyRef) {
        let sch;
        while (typeof (sch = getSchEnv.call(this, keyRef)) == "string")
            keyRef = sch;
        if (sch === undefined) {
            const { schemaId } = this.opts;
            const root = new compile_1.SchemaEnv({ schema: {}, schemaId });
            sch = compile_1.resolveSchema.call(this, root, keyRef);
            if (!sch)
                return;
            this.refs[keyRef] = sch;
        }
        return (sch.validate || this._compileSchemaEnv(sch));
    }
    // Remove cached schema(s).
    // If no parameter is passed all schemas but meta-schemas are removed.
    // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
    // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
    removeSchema(schemaKeyRef) {
        if (schemaKeyRef instanceof RegExp) {
            this._removeAllSchemas(this.schemas, schemaKeyRef);
            this._removeAllSchemas(this.refs, schemaKeyRef);
            return this;
        }
        switch (typeof schemaKeyRef) {
            case "undefined":
                this._removeAllSchemas(this.schemas);
                this._removeAllSchemas(this.refs);
                this._cache.clear();
                return this;
            case "string": {
                const sch = getSchEnv.call(this, schemaKeyRef);
                if (typeof sch == "object")
                    this._cache.delete(sch.schema);
                delete this.schemas[schemaKeyRef];
                delete this.refs[schemaKeyRef];
                return this;
            }
            case "object": {
                const cacheKey = schemaKeyRef;
                this._cache.delete(cacheKey);
                let id = schemaKeyRef[this.opts.schemaId];
                if (id) {
                    id = (0, resolve_1.normalizeId)(id);
                    delete this.schemas[id];
                    delete this.refs[id];
                }
                return this;
            }
            default:
                throw new Error("ajv.removeSchema: invalid parameter");
        }
    }
    // add "vocabulary" - a collection of keywords
    addVocabulary(definitions) {
        for (const def of definitions)
            this.addKeyword(def);
        return this;
    }
    addKeyword(kwdOrDef, def // deprecated
    ) {
        let keyword;
        if (typeof kwdOrDef == "string") {
            keyword = kwdOrDef;
            if (typeof def == "object") {
                this.logger.warn("these parameters are deprecated, see docs for addKeyword");
                def.keyword = keyword;
            }
        }
        else if (typeof kwdOrDef == "object" && def === undefined) {
            def = kwdOrDef;
            keyword = def.keyword;
            if (Array.isArray(keyword) && !keyword.length) {
                throw new Error("addKeywords: keyword must be string or non-empty array");
            }
        }
        else {
            throw new Error("invalid addKeywords parameters");
        }
        checkKeyword.call(this, keyword, def);
        if (!def) {
            (0, util_1.eachItem)(keyword, (kwd) => addRule.call(this, kwd));
            return this;
        }
        keywordMetaschema.call(this, def);
        const definition = {
            ...def,
            type: (0, dataType_1.getJSONTypes)(def.type),
            schemaType: (0, dataType_1.getJSONTypes)(def.schemaType),
        };
        (0, util_1.eachItem)(keyword, definition.type.length === 0
            ? (k) => addRule.call(this, k, definition)
            : (k) => definition.type.forEach((t) => addRule.call(this, k, definition, t)));
        return this;
    }
    getKeyword(keyword) {
        const rule = this.RULES.all[keyword];
        return typeof rule == "object" ? rule.definition : !!rule;
    }
    // Remove keyword
    removeKeyword(keyword) {
        // TODO return type should be Ajv
        const { RULES } = this;
        delete RULES.keywords[keyword];
        delete RULES.all[keyword];
        for (const group of RULES.rules) {
            const i = group.rules.findIndex((rule) => rule.keyword === keyword);
            if (i >= 0)
                group.rules.splice(i, 1);
        }
        return this;
    }
    // Add format
    addFormat(name, format) {
        if (typeof format == "string")
            format = new RegExp(format);
        this.formats[name] = format;
        return this;
    }
    errorsText(errors = this.errors, // optional array of validation errors
    { separator = ", ", dataVar = "data" } = {} // optional options with properties `separator` and `dataVar`
    ) {
        if (!errors || errors.length === 0)
            return "No errors";
        return errors
            .map((e) => `${dataVar}${e.instancePath} ${e.message}`)
            .reduce((text, msg) => text + separator + msg);
    }
    $dataMetaSchema(metaSchema, keywordsJsonPointers) {
        const rules = this.RULES.all;
        metaSchema = JSON.parse(JSON.stringify(metaSchema));
        for (const jsonPointer of keywordsJsonPointers) {
            const segments = jsonPointer.split("/").slice(1); // first segment is an empty string
            let keywords = metaSchema;
            for (const seg of segments)
                keywords = keywords[seg];
            for (const key in rules) {
                const rule = rules[key];
                if (typeof rule != "object")
                    continue;
                const { $data } = rule.definition;
                const schema = keywords[key];
                if ($data && schema)
                    keywords[key] = schemaOrData(schema);
            }
        }
        return metaSchema;
    }
    _removeAllSchemas(schemas, regex) {
        for (const keyRef in schemas) {
            const sch = schemas[keyRef];
            if (!regex || regex.test(keyRef)) {
                if (typeof sch == "string") {
                    delete schemas[keyRef];
                }
                else if (sch && !sch.meta) {
                    this._cache.delete(sch.schema);
                    delete schemas[keyRef];
                }
            }
        }
    }
    _addSchema(schema, meta, baseId, validateSchema = this.opts.validateSchema, addSchema = this.opts.addUsedSchema) {
        let id;
        const { schemaId } = this.opts;
        if (typeof schema == "object") {
            id = schema[schemaId];
        }
        else {
            if (this.opts.jtd)
                throw new Error("schema must be object");
            else if (typeof schema != "boolean")
                throw new Error("schema must be object or boolean");
        }
        let sch = this._cache.get(schema);
        if (sch !== undefined)
            return sch;
        baseId = (0, resolve_1.normalizeId)(id || baseId);
        const localRefs = resolve_1.getSchemaRefs.call(this, schema, baseId);
        sch = new compile_1.SchemaEnv({ schema, schemaId, meta, baseId, localRefs });
        this._cache.set(sch.schema, sch);
        if (addSchema && !baseId.startsWith("#")) {
            // TODO atm it is allowed to overwrite schemas without id (instead of not adding them)
            if (baseId)
                this._checkUnique(baseId);
            this.refs[baseId] = sch;
        }
        if (validateSchema)
            this.validateSchema(schema, true);
        return sch;
    }
    _checkUnique(id) {
        if (this.schemas[id] || this.refs[id]) {
            throw new Error(`schema with key or id "${id}" already exists`);
        }
    }
    _compileSchemaEnv(sch) {
        if (sch.meta)
            this._compileMetaSchema(sch);
        else
            compile_1.compileSchema.call(this, sch);
        /* istanbul ignore if */
        if (!sch.validate)
            throw new Error("ajv implementation error");
        return sch.validate;
    }
    _compileMetaSchema(sch) {
        const currentOpts = this.opts;
        this.opts = this._metaOpts;
        try {
            compile_1.compileSchema.call(this, sch);
        }
        finally {
            this.opts = currentOpts;
        }
    }
}
exports.default = Ajv;
Ajv.ValidationError = validation_error_1.default;
Ajv.MissingRefError = ref_error_1.default;
function checkOptions(checkOpts, options, msg, log = "error") {
    for (const key in checkOpts) {
        const opt = key;
        if (opt in options)
            this.logger[log](`${msg}: option ${key}. ${checkOpts[opt]}`);
    }
}
function getSchEnv(keyRef) {
    keyRef = (0, resolve_1.normalizeId)(keyRef); // TODO tests fail without this line
    return this.schemas[keyRef] || this.refs[keyRef];
}
function addInitialSchemas() {
    const optsSchemas = this.opts.schemas;
    if (!optsSchemas)
        return;
    if (Array.isArray(optsSchemas))
        this.addSchema(optsSchemas);
    else
        for (const key in optsSchemas)
            this.addSchema(optsSchemas[key], key);
}
function addInitialFormats() {
    for (const name in this.opts.formats) {
        const format = this.opts.formats[name];
        if (format)
            this.addFormat(name, format);
    }
}
function addInitialKeywords(defs) {
    if (Array.isArray(defs)) {
        this.addVocabulary(defs);
        return;
    }
    this.logger.warn("keywords option as map is deprecated, pass array");
    for (const keyword in defs) {
        const def = defs[keyword];
        if (!def.keyword)
            def.keyword = keyword;
        this.addKeyword(def);
    }
}
function getMetaSchemaOptions() {
    const metaOpts = { ...this.opts };
    for (const opt of META_IGNORE_OPTIONS)
        delete metaOpts[opt];
    return metaOpts;
}
const noLogs = { log() { }, warn() { }, error() { } };
function getLogger(logger) {
    if (logger === false)
        return noLogs;
    if (logger === undefined)
        return console;
    if (logger.log && logger.warn && logger.error)
        return logger;
    throw new Error("logger must implement log, warn and error methods");
}
const KEYWORD_NAME = /^[a-z_$][a-z0-9_$:-]*$/i;
function checkKeyword(keyword, def) {
    const { RULES } = this;
    (0, util_1.eachItem)(keyword, (kwd) => {
        if (RULES.keywords[kwd])
            throw new Error(`Keyword ${kwd} is already defined`);
        if (!KEYWORD_NAME.test(kwd))
            throw new Error(`Keyword ${kwd} has invalid name`);
    });
    if (!def)
        return;
    if (def.$data && !("code" in def || "validate" in def)) {
        throw new Error('$data keyword must have "code" or "validate" function');
    }
}
function addRule(keyword, definition, dataType) {
    var _a;
    const post = definition === null || definition === void 0 ? void 0 : definition.post;
    if (dataType && post)
        throw new Error('keyword with "post" flag cannot have "type"');
    const { RULES } = this;
    let ruleGroup = post ? RULES.post : RULES.rules.find(({ type: t }) => t === dataType);
    if (!ruleGroup) {
        ruleGroup = { type: dataType, rules: [] };
        RULES.rules.push(ruleGroup);
    }
    RULES.keywords[keyword] = true;
    if (!definition)
        return;
    const rule = {
        keyword,
        definition: {
            ...definition,
            type: (0, dataType_1.getJSONTypes)(definition.type),
            schemaType: (0, dataType_1.getJSONTypes)(definition.schemaType),
        },
    };
    if (definition.before)
        addBeforeRule.call(this, ruleGroup, rule, definition.before);
    else
        ruleGroup.rules.push(rule);
    RULES.all[keyword] = rule;
    (_a = definition.implements) === null || _a === void 0 ? void 0 : _a.forEach((kwd) => this.addKeyword(kwd));
}
function addBeforeRule(ruleGroup, rule, before) {
    const i = ruleGroup.rules.findIndex((_rule) => _rule.keyword === before);
    if (i >= 0) {
        ruleGroup.rules.splice(i, 0, rule);
    }
    else {
        ruleGroup.rules.push(rule);
        this.logger.warn(`rule ${before} is not defined`);
    }
}
function keywordMetaschema(def) {
    let { metaSchema } = def;
    if (metaSchema === undefined)
        return;
    if (def.$data && this.opts.$data)
        metaSchema = schemaOrData(metaSchema);
    def.validateSchema = this.compile(metaSchema, true);
}
const $dataRef = {
    $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",
};
function schemaOrData(schema) {
    return { anyOf: [schema, $dataRef] };
}

},{"./compile/validate":"node_modules/ajv/dist/compile/validate/index.js","./compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","./runtime/validation_error":"node_modules/ajv/dist/runtime/validation_error.js","./compile/ref_error":"node_modules/ajv/dist/compile/ref_error.js","./compile/rules":"node_modules/ajv/dist/compile/rules.js","./compile":"node_modules/ajv/dist/compile/index.js","./compile/resolve":"node_modules/ajv/dist/compile/resolve.js","./compile/validate/dataType":"node_modules/ajv/dist/compile/validate/dataType.js","./compile/util":"node_modules/ajv/dist/compile/util.js","./refs/data.json":"node_modules/ajv/dist/refs/data.json","./runtime/uri":"node_modules/ajv/dist/runtime/uri.js"}],"node_modules/ajv/dist/vocabularies/core/id.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const def = {
    keyword: "id",
    code() {
        throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    },
};
exports.default = def;

},{}],"node_modules/ajv/dist/vocabularies/core/ref.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.callRef = exports.getValidate = void 0;
const ref_error_1 = require("../../compile/ref_error");
const code_1 = require("../code");
const codegen_1 = require("../../compile/codegen");
const names_1 = require("../../compile/names");
const compile_1 = require("../../compile");
const util_1 = require("../../compile/util");
const def = {
    keyword: "$ref",
    schemaType: "string",
    code(cxt) {
        const { gen, schema: $ref, it } = cxt;
        const { baseId, schemaEnv: env, validateName, opts, self } = it;
        const { root } = env;
        if (($ref === "#" || $ref === "#/") && baseId === root.baseId)
            return callRootRef();
        const schOrEnv = compile_1.resolveRef.call(self, root, baseId, $ref);
        if (schOrEnv === undefined)
            throw new ref_error_1.default(it.opts.uriResolver, baseId, $ref);
        if (schOrEnv instanceof compile_1.SchemaEnv)
            return callValidate(schOrEnv);
        return inlineRefSchema(schOrEnv);
        function callRootRef() {
            if (env === root)
                return callRef(cxt, validateName, env, env.$async);
            const rootName = gen.scopeValue("root", { ref: root });
            return callRef(cxt, (0, codegen_1._) `${rootName}.validate`, root, root.$async);
        }
        function callValidate(sch) {
            const v = getValidate(cxt, sch);
            callRef(cxt, v, sch, sch.$async);
        }
        function inlineRefSchema(sch) {
            const schName = gen.scopeValue("schema", opts.code.source === true ? { ref: sch, code: (0, codegen_1.stringify)(sch) } : { ref: sch });
            const valid = gen.name("valid");
            const schCxt = cxt.subschema({
                schema: sch,
                dataTypes: [],
                schemaPath: codegen_1.nil,
                topSchemaRef: schName,
                errSchemaPath: $ref,
            }, valid);
            cxt.mergeEvaluated(schCxt);
            cxt.ok(valid);
        }
    },
};
function getValidate(cxt, sch) {
    const { gen } = cxt;
    return sch.validate
        ? gen.scopeValue("validate", { ref: sch.validate })
        : (0, codegen_1._) `${gen.scopeValue("wrapper", { ref: sch })}.validate`;
}
exports.getValidate = getValidate;
function callRef(cxt, v, sch, $async) {
    const { gen, it } = cxt;
    const { allErrors, schemaEnv: env, opts } = it;
    const passCxt = opts.passContext ? names_1.default.this : codegen_1.nil;
    if ($async)
        callAsyncRef();
    else
        callSyncRef();
    function callAsyncRef() {
        if (!env.$async)
            throw new Error("async schema referenced by sync schema");
        const valid = gen.let("valid");
        gen.try(() => {
            gen.code((0, codegen_1._) `await ${(0, code_1.callValidateCode)(cxt, v, passCxt)}`);
            addEvaluatedFrom(v); // TODO will not work with async, it has to be returned with the result
            if (!allErrors)
                gen.assign(valid, true);
        }, (e) => {
            gen.if((0, codegen_1._) `!(${e} instanceof ${it.ValidationError})`, () => gen.throw(e));
            addErrorsFrom(e);
            if (!allErrors)
                gen.assign(valid, false);
        });
        cxt.ok(valid);
    }
    function callSyncRef() {
        cxt.result((0, code_1.callValidateCode)(cxt, v, passCxt), () => addEvaluatedFrom(v), () => addErrorsFrom(v));
    }
    function addErrorsFrom(source) {
        const errs = (0, codegen_1._) `${source}.errors`;
        gen.assign(names_1.default.vErrors, (0, codegen_1._) `${names_1.default.vErrors} === null ? ${errs} : ${names_1.default.vErrors}.concat(${errs})`); // TODO tagged
        gen.assign(names_1.default.errors, (0, codegen_1._) `${names_1.default.vErrors}.length`);
    }
    function addEvaluatedFrom(source) {
        var _a;
        if (!it.opts.unevaluated)
            return;
        const schEvaluated = (_a = sch === null || sch === void 0 ? void 0 : sch.validate) === null || _a === void 0 ? void 0 : _a.evaluated;
        // TODO refactor
        if (it.props !== true) {
            if (schEvaluated && !schEvaluated.dynamicProps) {
                if (schEvaluated.props !== undefined) {
                    it.props = util_1.mergeEvaluated.props(gen, schEvaluated.props, it.props);
                }
            }
            else {
                const props = gen.var("props", (0, codegen_1._) `${source}.evaluated.props`);
                it.props = util_1.mergeEvaluated.props(gen, props, it.props, codegen_1.Name);
            }
        }
        if (it.items !== true) {
            if (schEvaluated && !schEvaluated.dynamicItems) {
                if (schEvaluated.items !== undefined) {
                    it.items = util_1.mergeEvaluated.items(gen, schEvaluated.items, it.items);
                }
            }
            else {
                const items = gen.var("items", (0, codegen_1._) `${source}.evaluated.items`);
                it.items = util_1.mergeEvaluated.items(gen, items, it.items, codegen_1.Name);
            }
        }
    }
}
exports.callRef = callRef;
exports.default = def;

},{"../../compile/ref_error":"node_modules/ajv/dist/compile/ref_error.js","../code":"node_modules/ajv/dist/vocabularies/code.js","../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/names":"node_modules/ajv/dist/compile/names.js","../../compile":"node_modules/ajv/dist/compile/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/core/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const id_1 = require("./id");
const ref_1 = require("./ref");
const core = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    id_1.default,
    ref_1.default,
];
exports.default = core;

},{"./id":"node_modules/ajv/dist/vocabularies/core/id.js","./ref":"node_modules/ajv/dist/vocabularies/core/ref.js"}],"node_modules/ajv/dist/vocabularies/validation/limitNumber.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const ops = codegen_1.operators;
const KWDs = {
    maximum: { okStr: "<=", ok: ops.LTE, fail: ops.GT },
    minimum: { okStr: ">=", ok: ops.GTE, fail: ops.LT },
    exclusiveMaximum: { okStr: "<", ok: ops.LT, fail: ops.GTE },
    exclusiveMinimum: { okStr: ">", ok: ops.GT, fail: ops.LTE },
};
const error = {
    message: ({ keyword, schemaCode }) => (0, codegen_1.str) `must be ${KWDs[keyword].okStr} ${schemaCode}`,
    params: ({ keyword, schemaCode }) => (0, codegen_1._) `{comparison: ${KWDs[keyword].okStr}, limit: ${schemaCode}}`,
};
const def = {
    keyword: Object.keys(KWDs),
    type: "number",
    schemaType: "number",
    $data: true,
    error,
    code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        cxt.fail$data((0, codegen_1._) `${data} ${KWDs[keyword].fail} ${schemaCode} || isNaN(${data})`);
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js"}],"node_modules/ajv/dist/vocabularies/validation/multipleOf.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const error = {
    message: ({ schemaCode }) => (0, codegen_1.str) `must be multiple of ${schemaCode}`,
    params: ({ schemaCode }) => (0, codegen_1._) `{multipleOf: ${schemaCode}}`,
};
const def = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: true,
    error,
    code(cxt) {
        const { gen, data, schemaCode, it } = cxt;
        // const bdt = bad$DataType(schemaCode, <string>def.schemaType, $data)
        const prec = it.opts.multipleOfPrecision;
        const res = gen.let("res");
        const invalid = prec
            ? (0, codegen_1._) `Math.abs(Math.round(${res}) - ${res}) > 1e-${prec}`
            : (0, codegen_1._) `${res} !== parseInt(${res})`;
        cxt.fail$data((0, codegen_1._) `(${schemaCode} === 0 || (${res} = ${data}/${schemaCode}, ${invalid}))`);
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js"}],"node_modules/ajv/dist/runtime/ucs2length.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://mathiasbynens.be/notes/javascript-encoding
// https://github.com/bestiejs/punycode.js - punycode.ucs2.decode
function ucs2length(str) {
    const len = str.length;
    let length = 0;
    let pos = 0;
    let value;
    while (pos < len) {
        length++;
        value = str.charCodeAt(pos++);
        if (value >= 0xd800 && value <= 0xdbff && pos < len) {
            // high surrogate, and there is a next character
            value = str.charCodeAt(pos);
            if ((value & 0xfc00) === 0xdc00)
                pos++; // low surrogate
        }
    }
    return length;
}
exports.default = ucs2length;
ucs2length.code = 'require("ajv/dist/runtime/ucs2length").default';

},{}],"node_modules/ajv/dist/vocabularies/validation/limitLength.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const ucs2length_1 = require("../../runtime/ucs2length");
const error = {
    message({ keyword, schemaCode }) {
        const comp = keyword === "maxLength" ? "more" : "fewer";
        return (0, codegen_1.str) `must NOT have ${comp} than ${schemaCode} characters`;
    },
    params: ({ schemaCode }) => (0, codegen_1._) `{limit: ${schemaCode}}`,
};
const def = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: true,
    error,
    code(cxt) {
        const { keyword, data, schemaCode, it } = cxt;
        const op = keyword === "maxLength" ? codegen_1.operators.GT : codegen_1.operators.LT;
        const len = it.opts.unicode === false ? (0, codegen_1._) `${data}.length` : (0, codegen_1._) `${(0, util_1.useFunc)(cxt.gen, ucs2length_1.default)}(${data})`;
        cxt.fail$data((0, codegen_1._) `${len} ${op} ${schemaCode}`);
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js","../../runtime/ucs2length":"node_modules/ajv/dist/runtime/ucs2length.js"}],"node_modules/ajv/dist/vocabularies/validation/pattern.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = require("../code");
const codegen_1 = require("../../compile/codegen");
const error = {
    message: ({ schemaCode }) => (0, codegen_1.str) `must match pattern "${schemaCode}"`,
    params: ({ schemaCode }) => (0, codegen_1._) `{pattern: ${schemaCode}}`,
};
const def = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: true,
    error,
    code(cxt) {
        const { data, $data, schema, schemaCode, it } = cxt;
        // TODO regexp should be wrapped in try/catchs
        const u = it.opts.unicodeRegExp ? "u" : "";
        const regExp = $data ? (0, codegen_1._) `(new RegExp(${schemaCode}, ${u}))` : (0, code_1.usePattern)(cxt, schema);
        cxt.fail$data((0, codegen_1._) `!${regExp}.test(${data})`);
    },
};
exports.default = def;

},{"../code":"node_modules/ajv/dist/vocabularies/code.js","../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js"}],"node_modules/ajv/dist/vocabularies/validation/limitProperties.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const error = {
    message({ keyword, schemaCode }) {
        const comp = keyword === "maxProperties" ? "more" : "fewer";
        return (0, codegen_1.str) `must NOT have ${comp} than ${schemaCode} items`;
    },
    params: ({ schemaCode }) => (0, codegen_1._) `{limit: ${schemaCode}}`,
};
const def = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: true,
    error,
    code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        const op = keyword === "maxProperties" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._) `Object.keys(${data}).length ${op} ${schemaCode}`);
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js"}],"node_modules/ajv/dist/vocabularies/validation/required.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = require("../code");
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const error = {
    message: ({ params: { missingProperty } }) => (0, codegen_1.str) `must have required property '${missingProperty}'`,
    params: ({ params: { missingProperty } }) => (0, codegen_1._) `{missingProperty: ${missingProperty}}`,
};
const def = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: true,
    error,
    code(cxt) {
        const { gen, schema, schemaCode, data, $data, it } = cxt;
        const { opts } = it;
        if (!$data && schema.length === 0)
            return;
        const useLoop = schema.length >= opts.loopRequired;
        if (it.allErrors)
            allErrorsMode();
        else
            exitOnErrorMode();
        if (opts.strictRequired) {
            const props = cxt.parentSchema.properties;
            const { definedProperties } = cxt.it;
            for (const requiredKey of schema) {
                if ((props === null || props === void 0 ? void 0 : props[requiredKey]) === undefined && !definedProperties.has(requiredKey)) {
                    const schemaPath = it.schemaEnv.baseId + it.errSchemaPath;
                    const msg = `required property "${requiredKey}" is not defined at "${schemaPath}" (strictRequired)`;
                    (0, util_1.checkStrictMode)(it, msg, it.opts.strictRequired);
                }
            }
        }
        function allErrorsMode() {
            if (useLoop || $data) {
                cxt.block$data(codegen_1.nil, loopAllRequired);
            }
            else {
                for (const prop of schema) {
                    (0, code_1.checkReportMissingProp)(cxt, prop);
                }
            }
        }
        function exitOnErrorMode() {
            const missing = gen.let("missing");
            if (useLoop || $data) {
                const valid = gen.let("valid", true);
                cxt.block$data(valid, () => loopUntilMissing(missing, valid));
                cxt.ok(valid);
            }
            else {
                gen.if((0, code_1.checkMissingProp)(cxt, schema, missing));
                (0, code_1.reportMissingProp)(cxt, missing);
                gen.else();
            }
        }
        function loopAllRequired() {
            gen.forOf("prop", schemaCode, (prop) => {
                cxt.setParams({ missingProperty: prop });
                gen.if((0, code_1.noPropertyInData)(gen, data, prop, opts.ownProperties), () => cxt.error());
            });
        }
        function loopUntilMissing(missing, valid) {
            cxt.setParams({ missingProperty: missing });
            gen.forOf(missing, schemaCode, () => {
                gen.assign(valid, (0, code_1.propertyInData)(gen, data, missing, opts.ownProperties));
                gen.if((0, codegen_1.not)(valid), () => {
                    cxt.error();
                    gen.break();
                });
            }, codegen_1.nil);
        }
    },
};
exports.default = def;

},{"../code":"node_modules/ajv/dist/vocabularies/code.js","../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/validation/limitItems.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const error = {
    message({ keyword, schemaCode }) {
        const comp = keyword === "maxItems" ? "more" : "fewer";
        return (0, codegen_1.str) `must NOT have ${comp} than ${schemaCode} items`;
    },
    params: ({ schemaCode }) => (0, codegen_1._) `{limit: ${schemaCode}}`,
};
const def = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: true,
    error,
    code(cxt) {
        const { keyword, data, schemaCode } = cxt;
        const op = keyword === "maxItems" ? codegen_1.operators.GT : codegen_1.operators.LT;
        cxt.fail$data((0, codegen_1._) `${data}.length ${op} ${schemaCode}`);
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js"}],"node_modules/ajv/dist/runtime/equal.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://github.com/ajv-validator/ajv/issues/889
const equal = require("fast-deep-equal");
equal.code = 'require("ajv/dist/runtime/equal").default';
exports.default = equal;

},{"fast-deep-equal":"node_modules/fast-deep-equal/index.js"}],"node_modules/ajv/dist/vocabularies/validation/uniqueItems.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dataType_1 = require("../../compile/validate/dataType");
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const equal_1 = require("../../runtime/equal");
const error = {
    message: ({ params: { i, j } }) => (0, codegen_1.str) `must NOT have duplicate items (items ## ${j} and ${i} are identical)`,
    params: ({ params: { i, j } }) => (0, codegen_1._) `{i: ${i}, j: ${j}}`,
};
const def = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: true,
    error,
    code(cxt) {
        const { gen, data, $data, schema, parentSchema, schemaCode, it } = cxt;
        if (!$data && !schema)
            return;
        const valid = gen.let("valid");
        const itemTypes = parentSchema.items ? (0, dataType_1.getSchemaTypes)(parentSchema.items) : [];
        cxt.block$data(valid, validateUniqueItems, (0, codegen_1._) `${schemaCode} === false`);
        cxt.ok(valid);
        function validateUniqueItems() {
            const i = gen.let("i", (0, codegen_1._) `${data}.length`);
            const j = gen.let("j");
            cxt.setParams({ i, j });
            gen.assign(valid, true);
            gen.if((0, codegen_1._) `${i} > 1`, () => (canOptimize() ? loopN : loopN2)(i, j));
        }
        function canOptimize() {
            return itemTypes.length > 0 && !itemTypes.some((t) => t === "object" || t === "array");
        }
        function loopN(i, j) {
            const item = gen.name("item");
            const wrongType = (0, dataType_1.checkDataTypes)(itemTypes, item, it.opts.strictNumbers, dataType_1.DataType.Wrong);
            const indices = gen.const("indices", (0, codegen_1._) `{}`);
            gen.for((0, codegen_1._) `;${i}--;`, () => {
                gen.let(item, (0, codegen_1._) `${data}[${i}]`);
                gen.if(wrongType, (0, codegen_1._) `continue`);
                if (itemTypes.length > 1)
                    gen.if((0, codegen_1._) `typeof ${item} == "string"`, (0, codegen_1._) `${item} += "_"`);
                gen
                    .if((0, codegen_1._) `typeof ${indices}[${item}] == "number"`, () => {
                    gen.assign(j, (0, codegen_1._) `${indices}[${item}]`);
                    cxt.error();
                    gen.assign(valid, false).break();
                })
                    .code((0, codegen_1._) `${indices}[${item}] = ${i}`);
            });
        }
        function loopN2(i, j) {
            const eql = (0, util_1.useFunc)(gen, equal_1.default);
            const outer = gen.name("outer");
            gen.label(outer).for((0, codegen_1._) `;${i}--;`, () => gen.for((0, codegen_1._) `${j} = ${i}; ${j}--;`, () => gen.if((0, codegen_1._) `${eql}(${data}[${i}], ${data}[${j}])`, () => {
                cxt.error();
                gen.assign(valid, false).break(outer);
            })));
        }
    },
};
exports.default = def;

},{"../../compile/validate/dataType":"node_modules/ajv/dist/compile/validate/dataType.js","../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js","../../runtime/equal":"node_modules/ajv/dist/runtime/equal.js"}],"node_modules/ajv/dist/vocabularies/validation/const.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const equal_1 = require("../../runtime/equal");
const error = {
    message: "must be equal to constant",
    params: ({ schemaCode }) => (0, codegen_1._) `{allowedValue: ${schemaCode}}`,
};
const def = {
    keyword: "const",
    $data: true,
    error,
    code(cxt) {
        const { gen, data, $data, schemaCode, schema } = cxt;
        if ($data || (schema && typeof schema == "object")) {
            cxt.fail$data((0, codegen_1._) `!${(0, util_1.useFunc)(gen, equal_1.default)}(${data}, ${schemaCode})`);
        }
        else {
            cxt.fail((0, codegen_1._) `${schema} !== ${data}`);
        }
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js","../../runtime/equal":"node_modules/ajv/dist/runtime/equal.js"}],"node_modules/ajv/dist/vocabularies/validation/enum.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const equal_1 = require("../../runtime/equal");
const error = {
    message: "must be equal to one of the allowed values",
    params: ({ schemaCode }) => (0, codegen_1._) `{allowedValues: ${schemaCode}}`,
};
const def = {
    keyword: "enum",
    schemaType: "array",
    $data: true,
    error,
    code(cxt) {
        const { gen, data, $data, schema, schemaCode, it } = cxt;
        if (!$data && schema.length === 0)
            throw new Error("enum must have non-empty array");
        const useLoop = schema.length >= it.opts.loopEnum;
        const eql = (0, util_1.useFunc)(gen, equal_1.default);
        let valid;
        if (useLoop || $data) {
            valid = gen.let("valid");
            cxt.block$data(valid, loopEnum);
        }
        else {
            /* istanbul ignore if */
            if (!Array.isArray(schema))
                throw new Error("ajv implementation error");
            const vSchema = gen.const("vSchema", schemaCode);
            valid = (0, codegen_1.or)(...schema.map((_x, i) => equalCode(vSchema, i)));
        }
        cxt.pass(valid);
        function loopEnum() {
            gen.assign(valid, false);
            gen.forOf("v", schemaCode, (v) => gen.if((0, codegen_1._) `${eql}(${data}, ${v})`, () => gen.assign(valid, true).break()));
        }
        function equalCode(vSchema, i) {
            const sch = schema[i];
            return typeof sch === "object" && sch !== null
                ? (0, codegen_1._) `${eql}(${data}, ${vSchema}[${i}])`
                : (0, codegen_1._) `${data} === ${sch}`;
        }
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js","../../runtime/equal":"node_modules/ajv/dist/runtime/equal.js"}],"node_modules/ajv/dist/vocabularies/validation/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const limitNumber_1 = require("./limitNumber");
const multipleOf_1 = require("./multipleOf");
const limitLength_1 = require("./limitLength");
const pattern_1 = require("./pattern");
const limitProperties_1 = require("./limitProperties");
const required_1 = require("./required");
const limitItems_1 = require("./limitItems");
const uniqueItems_1 = require("./uniqueItems");
const const_1 = require("./const");
const enum_1 = require("./enum");
const validation = [
    // number
    limitNumber_1.default,
    multipleOf_1.default,
    // string
    limitLength_1.default,
    pattern_1.default,
    // object
    limitProperties_1.default,
    required_1.default,
    // array
    limitItems_1.default,
    uniqueItems_1.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    const_1.default,
    enum_1.default,
];
exports.default = validation;

},{"./limitNumber":"node_modules/ajv/dist/vocabularies/validation/limitNumber.js","./multipleOf":"node_modules/ajv/dist/vocabularies/validation/multipleOf.js","./limitLength":"node_modules/ajv/dist/vocabularies/validation/limitLength.js","./pattern":"node_modules/ajv/dist/vocabularies/validation/pattern.js","./limitProperties":"node_modules/ajv/dist/vocabularies/validation/limitProperties.js","./required":"node_modules/ajv/dist/vocabularies/validation/required.js","./limitItems":"node_modules/ajv/dist/vocabularies/validation/limitItems.js","./uniqueItems":"node_modules/ajv/dist/vocabularies/validation/uniqueItems.js","./const":"node_modules/ajv/dist/vocabularies/validation/const.js","./enum":"node_modules/ajv/dist/vocabularies/validation/enum.js"}],"node_modules/ajv/dist/vocabularies/applicator/additionalItems.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAdditionalItems = void 0;
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const error = {
    message: ({ params: { len } }) => (0, codegen_1.str) `must NOT have more than ${len} items`,
    params: ({ params: { len } }) => (0, codegen_1._) `{limit: ${len}}`,
};
const def = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error,
    code(cxt) {
        const { parentSchema, it } = cxt;
        const { items } = parentSchema;
        if (!Array.isArray(items)) {
            (0, util_1.checkStrictMode)(it, '"additionalItems" is ignored when "items" is not an array of schemas');
            return;
        }
        validateAdditionalItems(cxt, items);
    },
};
function validateAdditionalItems(cxt, items) {
    const { gen, schema, data, keyword, it } = cxt;
    it.items = true;
    const len = gen.const("len", (0, codegen_1._) `${data}.length`);
    if (schema === false) {
        cxt.setParams({ len: items.length });
        cxt.pass((0, codegen_1._) `${len} <= ${items.length}`);
    }
    else if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
        const valid = gen.var("valid", (0, codegen_1._) `${len} <= ${items.length}`); // TODO var
        gen.if((0, codegen_1.not)(valid), () => validateItems(valid));
        cxt.ok(valid);
    }
    function validateItems(valid) {
        gen.forRange("i", items.length, len, (i) => {
            cxt.subschema({ keyword, dataProp: i, dataPropType: util_1.Type.Num }, valid);
            if (!it.allErrors)
                gen.if((0, codegen_1.not)(valid), () => gen.break());
        });
    }
}
exports.validateAdditionalItems = validateAdditionalItems;
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/applicator/items.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTuple = void 0;
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const code_1 = require("../code");
const def = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(cxt) {
        const { schema, it } = cxt;
        if (Array.isArray(schema))
            return validateTuple(cxt, "additionalItems", schema);
        it.items = true;
        if ((0, util_1.alwaysValidSchema)(it, schema))
            return;
        cxt.ok((0, code_1.validateArray)(cxt));
    },
};
function validateTuple(cxt, extraItems, schArr = cxt.schema) {
    const { gen, parentSchema, data, keyword, it } = cxt;
    checkStrictTuple(parentSchema);
    if (it.opts.unevaluated && schArr.length && it.items !== true) {
        it.items = util_1.mergeEvaluated.items(gen, schArr.length, it.items);
    }
    const valid = gen.name("valid");
    const len = gen.const("len", (0, codegen_1._) `${data}.length`);
    schArr.forEach((sch, i) => {
        if ((0, util_1.alwaysValidSchema)(it, sch))
            return;
        gen.if((0, codegen_1._) `${len} > ${i}`, () => cxt.subschema({
            keyword,
            schemaProp: i,
            dataProp: i,
        }, valid));
        cxt.ok(valid);
    });
    function checkStrictTuple(sch) {
        const { opts, errSchemaPath } = it;
        const l = schArr.length;
        const fullTuple = l === sch.minItems && (l === sch.maxItems || sch[extraItems] === false);
        if (opts.strictTuples && !fullTuple) {
            const msg = `"${keyword}" is ${l}-tuple, but minItems or maxItems/${extraItems} are not specified or different at path "${errSchemaPath}"`;
            (0, util_1.checkStrictMode)(it, msg, opts.strictTuples);
        }
    }
}
exports.validateTuple = validateTuple;
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js","../code":"node_modules/ajv/dist/vocabularies/code.js"}],"node_modules/ajv/dist/vocabularies/applicator/prefixItems.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const items_1 = require("./items");
const def = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (cxt) => (0, items_1.validateTuple)(cxt, "items"),
};
exports.default = def;

},{"./items":"node_modules/ajv/dist/vocabularies/applicator/items.js"}],"node_modules/ajv/dist/vocabularies/applicator/items2020.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const code_1 = require("../code");
const additionalItems_1 = require("./additionalItems");
const error = {
    message: ({ params: { len } }) => (0, codegen_1.str) `must NOT have more than ${len} items`,
    params: ({ params: { len } }) => (0, codegen_1._) `{limit: ${len}}`,
};
const def = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error,
    code(cxt) {
        const { schema, parentSchema, it } = cxt;
        const { prefixItems } = parentSchema;
        it.items = true;
        if ((0, util_1.alwaysValidSchema)(it, schema))
            return;
        if (prefixItems)
            (0, additionalItems_1.validateAdditionalItems)(cxt, prefixItems);
        else
            cxt.ok((0, code_1.validateArray)(cxt));
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js","../code":"node_modules/ajv/dist/vocabularies/code.js","./additionalItems":"node_modules/ajv/dist/vocabularies/applicator/additionalItems.js"}],"node_modules/ajv/dist/vocabularies/applicator/contains.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const error = {
    message: ({ params: { min, max } }) => max === undefined
        ? (0, codegen_1.str) `must contain at least ${min} valid item(s)`
        : (0, codegen_1.str) `must contain at least ${min} and no more than ${max} valid item(s)`,
    params: ({ params: { min, max } }) => max === undefined ? (0, codegen_1._) `{minContains: ${min}}` : (0, codegen_1._) `{minContains: ${min}, maxContains: ${max}}`,
};
const def = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: true,
    error,
    code(cxt) {
        const { gen, schema, parentSchema, data, it } = cxt;
        let min;
        let max;
        const { minContains, maxContains } = parentSchema;
        if (it.opts.next) {
            min = minContains === undefined ? 1 : minContains;
            max = maxContains;
        }
        else {
            min = 1;
        }
        const len = gen.const("len", (0, codegen_1._) `${data}.length`);
        cxt.setParams({ min, max });
        if (max === undefined && min === 0) {
            (0, util_1.checkStrictMode)(it, `"minContains" == 0 without "maxContains": "contains" keyword ignored`);
            return;
        }
        if (max !== undefined && min > max) {
            (0, util_1.checkStrictMode)(it, `"minContains" > "maxContains" is always invalid`);
            cxt.fail();
            return;
        }
        if ((0, util_1.alwaysValidSchema)(it, schema)) {
            let cond = (0, codegen_1._) `${len} >= ${min}`;
            if (max !== undefined)
                cond = (0, codegen_1._) `${cond} && ${len} <= ${max}`;
            cxt.pass(cond);
            return;
        }
        it.items = true;
        const valid = gen.name("valid");
        if (max === undefined && min === 1) {
            validateItems(valid, () => gen.if(valid, () => gen.break()));
        }
        else if (min === 0) {
            gen.let(valid, true);
            if (max !== undefined)
                gen.if((0, codegen_1._) `${data}.length > 0`, validateItemsWithCount);
        }
        else {
            gen.let(valid, false);
            validateItemsWithCount();
        }
        cxt.result(valid, () => cxt.reset());
        function validateItemsWithCount() {
            const schValid = gen.name("_valid");
            const count = gen.let("count", 0);
            validateItems(schValid, () => gen.if(schValid, () => checkLimits(count)));
        }
        function validateItems(_valid, block) {
            gen.forRange("i", 0, len, (i) => {
                cxt.subschema({
                    keyword: "contains",
                    dataProp: i,
                    dataPropType: util_1.Type.Num,
                    compositeRule: true,
                }, _valid);
                block();
            });
        }
        function checkLimits(count) {
            gen.code((0, codegen_1._) `${count}++`);
            if (max === undefined) {
                gen.if((0, codegen_1._) `${count} >= ${min}`, () => gen.assign(valid, true).break());
            }
            else {
                gen.if((0, codegen_1._) `${count} > ${max}`, () => gen.assign(valid, false).break());
                if (min === 1)
                    gen.assign(valid, true);
                else
                    gen.if((0, codegen_1._) `${count} >= ${min}`, () => gen.assign(valid, true));
            }
        }
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/applicator/dependencies.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSchemaDeps = exports.validatePropertyDeps = exports.error = void 0;
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const code_1 = require("../code");
exports.error = {
    message: ({ params: { property, depsCount, deps } }) => {
        const property_ies = depsCount === 1 ? "property" : "properties";
        return (0, codegen_1.str) `must have ${property_ies} ${deps} when property ${property} is present`;
    },
    params: ({ params: { property, depsCount, deps, missingProperty } }) => (0, codegen_1._) `{property: ${property},
    missingProperty: ${missingProperty},
    depsCount: ${depsCount},
    deps: ${deps}}`, // TODO change to reference
};
const def = {
    keyword: "dependencies",
    type: "object",
    schemaType: "object",
    error: exports.error,
    code(cxt) {
        const [propDeps, schDeps] = splitDependencies(cxt);
        validatePropertyDeps(cxt, propDeps);
        validateSchemaDeps(cxt, schDeps);
    },
};
function splitDependencies({ schema }) {
    const propertyDeps = {};
    const schemaDeps = {};
    for (const key in schema) {
        if (key === "__proto__")
            continue;
        const deps = Array.isArray(schema[key]) ? propertyDeps : schemaDeps;
        deps[key] = schema[key];
    }
    return [propertyDeps, schemaDeps];
}
function validatePropertyDeps(cxt, propertyDeps = cxt.schema) {
    const { gen, data, it } = cxt;
    if (Object.keys(propertyDeps).length === 0)
        return;
    const missing = gen.let("missing");
    for (const prop in propertyDeps) {
        const deps = propertyDeps[prop];
        if (deps.length === 0)
            continue;
        const hasProperty = (0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties);
        cxt.setParams({
            property: prop,
            depsCount: deps.length,
            deps: deps.join(", "),
        });
        if (it.allErrors) {
            gen.if(hasProperty, () => {
                for (const depProp of deps) {
                    (0, code_1.checkReportMissingProp)(cxt, depProp);
                }
            });
        }
        else {
            gen.if((0, codegen_1._) `${hasProperty} && (${(0, code_1.checkMissingProp)(cxt, deps, missing)})`);
            (0, code_1.reportMissingProp)(cxt, missing);
            gen.else();
        }
    }
}
exports.validatePropertyDeps = validatePropertyDeps;
function validateSchemaDeps(cxt, schemaDeps = cxt.schema) {
    const { gen, data, keyword, it } = cxt;
    const valid = gen.name("valid");
    for (const prop in schemaDeps) {
        if ((0, util_1.alwaysValidSchema)(it, schemaDeps[prop]))
            continue;
        gen.if((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties), () => {
            const schCxt = cxt.subschema({ keyword, schemaProp: prop }, valid);
            cxt.mergeValidEvaluated(schCxt, valid);
        }, () => gen.var(valid, true) // TODO var
        );
        cxt.ok(valid);
    }
}
exports.validateSchemaDeps = validateSchemaDeps;
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js","../code":"node_modules/ajv/dist/vocabularies/code.js"}],"node_modules/ajv/dist/vocabularies/applicator/propertyNames.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const error = {
    message: "property name must be valid",
    params: ({ params }) => (0, codegen_1._) `{propertyName: ${params.propertyName}}`,
};
const def = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error,
    code(cxt) {
        const { gen, schema, data, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema))
            return;
        const valid = gen.name("valid");
        gen.forIn("key", data, (key) => {
            cxt.setParams({ propertyName: key });
            cxt.subschema({
                keyword: "propertyNames",
                data: key,
                dataTypes: ["string"],
                propertyName: key,
                compositeRule: true,
            }, valid);
            gen.if((0, codegen_1.not)(valid), () => {
                cxt.error(true);
                if (!it.allErrors)
                    gen.break();
            });
        });
        cxt.ok(valid);
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = require("../code");
const codegen_1 = require("../../compile/codegen");
const names_1 = require("../../compile/names");
const util_1 = require("../../compile/util");
const error = {
    message: "must NOT have additional properties",
    params: ({ params }) => (0, codegen_1._) `{additionalProperty: ${params.additionalProperty}}`,
};
const def = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: true,
    trackErrors: true,
    error,
    code(cxt) {
        const { gen, schema, parentSchema, data, errsCount, it } = cxt;
        /* istanbul ignore if */
        if (!errsCount)
            throw new Error("ajv implementation error");
        const { allErrors, opts } = it;
        it.props = true;
        if (opts.removeAdditional !== "all" && (0, util_1.alwaysValidSchema)(it, schema))
            return;
        const props = (0, code_1.allSchemaProperties)(parentSchema.properties);
        const patProps = (0, code_1.allSchemaProperties)(parentSchema.patternProperties);
        checkAdditionalProperties();
        cxt.ok((0, codegen_1._) `${errsCount} === ${names_1.default.errors}`);
        function checkAdditionalProperties() {
            gen.forIn("key", data, (key) => {
                if (!props.length && !patProps.length)
                    additionalPropertyCode(key);
                else
                    gen.if(isAdditional(key), () => additionalPropertyCode(key));
            });
        }
        function isAdditional(key) {
            let definedProp;
            if (props.length > 8) {
                // TODO maybe an option instead of hard-coded 8?
                const propsSchema = (0, util_1.schemaRefOrVal)(it, parentSchema.properties, "properties");
                definedProp = (0, code_1.isOwnProperty)(gen, propsSchema, key);
            }
            else if (props.length) {
                definedProp = (0, codegen_1.or)(...props.map((p) => (0, codegen_1._) `${key} === ${p}`));
            }
            else {
                definedProp = codegen_1.nil;
            }
            if (patProps.length) {
                definedProp = (0, codegen_1.or)(definedProp, ...patProps.map((p) => (0, codegen_1._) `${(0, code_1.usePattern)(cxt, p)}.test(${key})`));
            }
            return (0, codegen_1.not)(definedProp);
        }
        function deleteAdditional(key) {
            gen.code((0, codegen_1._) `delete ${data}[${key}]`);
        }
        function additionalPropertyCode(key) {
            if (opts.removeAdditional === "all" || (opts.removeAdditional && schema === false)) {
                deleteAdditional(key);
                return;
            }
            if (schema === false) {
                cxt.setParams({ additionalProperty: key });
                cxt.error();
                if (!allErrors)
                    gen.break();
                return;
            }
            if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
                const valid = gen.name("valid");
                if (opts.removeAdditional === "failing") {
                    applyAdditionalSchema(key, valid, false);
                    gen.if((0, codegen_1.not)(valid), () => {
                        cxt.reset();
                        deleteAdditional(key);
                    });
                }
                else {
                    applyAdditionalSchema(key, valid);
                    if (!allErrors)
                        gen.if((0, codegen_1.not)(valid), () => gen.break());
                }
            }
        }
        function applyAdditionalSchema(key, valid, errors) {
            const subschema = {
                keyword: "additionalProperties",
                dataProp: key,
                dataPropType: util_1.Type.Str,
            };
            if (errors === false) {
                Object.assign(subschema, {
                    compositeRule: true,
                    createErrors: false,
                    allErrors: false,
                });
            }
            cxt.subschema(subschema, valid);
        }
    },
};
exports.default = def;

},{"../code":"node_modules/ajv/dist/vocabularies/code.js","../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/names":"node_modules/ajv/dist/compile/names.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/applicator/properties.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validate_1 = require("../../compile/validate");
const code_1 = require("../code");
const util_1 = require("../../compile/util");
const additionalProperties_1 = require("./additionalProperties");
const def = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(cxt) {
        const { gen, schema, parentSchema, data, it } = cxt;
        if (it.opts.removeAdditional === "all" && parentSchema.additionalProperties === undefined) {
            additionalProperties_1.default.code(new validate_1.KeywordCxt(it, additionalProperties_1.default, "additionalProperties"));
        }
        const allProps = (0, code_1.allSchemaProperties)(schema);
        for (const prop of allProps) {
            it.definedProperties.add(prop);
        }
        if (it.opts.unevaluated && allProps.length && it.props !== true) {
            it.props = util_1.mergeEvaluated.props(gen, (0, util_1.toHash)(allProps), it.props);
        }
        const properties = allProps.filter((p) => !(0, util_1.alwaysValidSchema)(it, schema[p]));
        if (properties.length === 0)
            return;
        const valid = gen.name("valid");
        for (const prop of properties) {
            if (hasDefault(prop)) {
                applyPropertySchema(prop);
            }
            else {
                gen.if((0, code_1.propertyInData)(gen, data, prop, it.opts.ownProperties));
                applyPropertySchema(prop);
                if (!it.allErrors)
                    gen.else().var(valid, true);
                gen.endIf();
            }
            cxt.it.definedProperties.add(prop);
            cxt.ok(valid);
        }
        function hasDefault(prop) {
            return it.opts.useDefaults && !it.compositeRule && schema[prop].default !== undefined;
        }
        function applyPropertySchema(prop) {
            cxt.subschema({
                keyword: "properties",
                schemaProp: prop,
                dataProp: prop,
            }, valid);
        }
    },
};
exports.default = def;

},{"../../compile/validate":"node_modules/ajv/dist/compile/validate/index.js","../code":"node_modules/ajv/dist/vocabularies/code.js","../../compile/util":"node_modules/ajv/dist/compile/util.js","./additionalProperties":"node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js"}],"node_modules/ajv/dist/vocabularies/applicator/patternProperties.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = require("../code");
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const util_2 = require("../../compile/util");
const def = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(cxt) {
        const { gen, schema, data, parentSchema, it } = cxt;
        const { opts } = it;
        const patterns = (0, code_1.allSchemaProperties)(schema);
        const alwaysValidPatterns = patterns.filter((p) => (0, util_1.alwaysValidSchema)(it, schema[p]));
        if (patterns.length === 0 ||
            (alwaysValidPatterns.length === patterns.length &&
                (!it.opts.unevaluated || it.props === true))) {
            return;
        }
        const checkProperties = opts.strictSchema && !opts.allowMatchingProperties && parentSchema.properties;
        const valid = gen.name("valid");
        if (it.props !== true && !(it.props instanceof codegen_1.Name)) {
            it.props = (0, util_2.evaluatedPropsToName)(gen, it.props);
        }
        const { props } = it;
        validatePatternProperties();
        function validatePatternProperties() {
            for (const pat of patterns) {
                if (checkProperties)
                    checkMatchingProperties(pat);
                if (it.allErrors) {
                    validateProperties(pat);
                }
                else {
                    gen.var(valid, true); // TODO var
                    validateProperties(pat);
                    gen.if(valid);
                }
            }
        }
        function checkMatchingProperties(pat) {
            for (const prop in checkProperties) {
                if (new RegExp(pat).test(prop)) {
                    (0, util_1.checkStrictMode)(it, `property ${prop} matches pattern ${pat} (use allowMatchingProperties)`);
                }
            }
        }
        function validateProperties(pat) {
            gen.forIn("key", data, (key) => {
                gen.if((0, codegen_1._) `${(0, code_1.usePattern)(cxt, pat)}.test(${key})`, () => {
                    const alwaysValid = alwaysValidPatterns.includes(pat);
                    if (!alwaysValid) {
                        cxt.subschema({
                            keyword: "patternProperties",
                            schemaProp: pat,
                            dataProp: key,
                            dataPropType: util_2.Type.Str,
                        }, valid);
                    }
                    if (it.opts.unevaluated && props !== true) {
                        gen.assign((0, codegen_1._) `${props}[${key}]`, true);
                    }
                    else if (!alwaysValid && !it.allErrors) {
                        // can short-circuit if `unevaluatedProperties` is not supported (opts.next === false)
                        // or if all properties were evaluated (props === true)
                        gen.if((0, codegen_1.not)(valid), () => gen.break());
                    }
                });
            });
        }
    },
};
exports.default = def;

},{"../code":"node_modules/ajv/dist/vocabularies/code.js","../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/applicator/not.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../compile/util");
const def = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: true,
    code(cxt) {
        const { gen, schema, it } = cxt;
        if ((0, util_1.alwaysValidSchema)(it, schema)) {
            cxt.fail();
            return;
        }
        const valid = gen.name("valid");
        cxt.subschema({
            keyword: "not",
            compositeRule: true,
            createErrors: false,
            allErrors: false,
        }, valid);
        cxt.failResult(valid, () => cxt.reset(), () => cxt.error());
    },
    error: { message: "must NOT be valid" },
};
exports.default = def;

},{"../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/applicator/anyOf.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = require("../code");
const def = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: true,
    code: code_1.validateUnion,
    error: { message: "must match a schema in anyOf" },
};
exports.default = def;

},{"../code":"node_modules/ajv/dist/vocabularies/code.js"}],"node_modules/ajv/dist/vocabularies/applicator/oneOf.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const error = {
    message: "must match exactly one schema in oneOf",
    params: ({ params }) => (0, codegen_1._) `{passingSchemas: ${params.passing}}`,
};
const def = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: true,
    error,
    code(cxt) {
        const { gen, schema, parentSchema, it } = cxt;
        /* istanbul ignore if */
        if (!Array.isArray(schema))
            throw new Error("ajv implementation error");
        if (it.opts.discriminator && parentSchema.discriminator)
            return;
        const schArr = schema;
        const valid = gen.let("valid", false);
        const passing = gen.let("passing", null);
        const schValid = gen.name("_valid");
        cxt.setParams({ passing });
        // TODO possibly fail straight away (with warning or exception) if there are two empty always valid schemas
        gen.block(validateOneOf);
        cxt.result(valid, () => cxt.reset(), () => cxt.error(true));
        function validateOneOf() {
            schArr.forEach((sch, i) => {
                let schCxt;
                if ((0, util_1.alwaysValidSchema)(it, sch)) {
                    gen.var(schValid, true);
                }
                else {
                    schCxt = cxt.subschema({
                        keyword: "oneOf",
                        schemaProp: i,
                        compositeRule: true,
                    }, schValid);
                }
                if (i > 0) {
                    gen
                        .if((0, codegen_1._) `${schValid} && ${valid}`)
                        .assign(valid, false)
                        .assign(passing, (0, codegen_1._) `[${passing}, ${i}]`)
                        .else();
                }
                gen.if(schValid, () => {
                    gen.assign(valid, true);
                    gen.assign(passing, i);
                    if (schCxt)
                        cxt.mergeEvaluated(schCxt, codegen_1.Name);
                });
            });
        }
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/applicator/allOf.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../compile/util");
const def = {
    keyword: "allOf",
    schemaType: "array",
    code(cxt) {
        const { gen, schema, it } = cxt;
        /* istanbul ignore if */
        if (!Array.isArray(schema))
            throw new Error("ajv implementation error");
        const valid = gen.name("valid");
        schema.forEach((sch, i) => {
            if ((0, util_1.alwaysValidSchema)(it, sch))
                return;
            const schCxt = cxt.subschema({ keyword: "allOf", schemaProp: i }, valid);
            cxt.ok(valid);
            cxt.mergeEvaluated(schCxt);
        });
    },
};
exports.default = def;

},{"../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/applicator/if.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const error = {
    message: ({ params }) => (0, codegen_1.str) `must match "${params.ifClause}" schema`,
    params: ({ params }) => (0, codegen_1._) `{failingKeyword: ${params.ifClause}}`,
};
const def = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: true,
    error,
    code(cxt) {
        const { gen, parentSchema, it } = cxt;
        if (parentSchema.then === undefined && parentSchema.else === undefined) {
            (0, util_1.checkStrictMode)(it, '"if" without "then" and "else" is ignored');
        }
        const hasThen = hasSchema(it, "then");
        const hasElse = hasSchema(it, "else");
        if (!hasThen && !hasElse)
            return;
        const valid = gen.let("valid", true);
        const schValid = gen.name("_valid");
        validateIf();
        cxt.reset();
        if (hasThen && hasElse) {
            const ifClause = gen.let("ifClause");
            cxt.setParams({ ifClause });
            gen.if(schValid, validateClause("then", ifClause), validateClause("else", ifClause));
        }
        else if (hasThen) {
            gen.if(schValid, validateClause("then"));
        }
        else {
            gen.if((0, codegen_1.not)(schValid), validateClause("else"));
        }
        cxt.pass(valid, () => cxt.error(true));
        function validateIf() {
            const schCxt = cxt.subschema({
                keyword: "if",
                compositeRule: true,
                createErrors: false,
                allErrors: false,
            }, schValid);
            cxt.mergeEvaluated(schCxt);
        }
        function validateClause(keyword, ifClause) {
            return () => {
                const schCxt = cxt.subschema({ keyword }, schValid);
                gen.assign(valid, schValid);
                cxt.mergeValidEvaluated(schCxt, valid);
                if (ifClause)
                    gen.assign(ifClause, (0, codegen_1._) `${keyword}`);
                else
                    cxt.setParams({ ifClause: keyword });
            };
        }
    },
};
function hasSchema(it, keyword) {
    const schema = it.schema[keyword];
    return schema !== undefined && !(0, util_1.alwaysValidSchema)(it, schema);
}
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/applicator/thenElse.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../compile/util");
const def = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword, parentSchema, it }) {
        if (parentSchema.if === undefined)
            (0, util_1.checkStrictMode)(it, `"${keyword}" without "if" is ignored`);
    },
};
exports.default = def;

},{"../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/applicator/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const additionalItems_1 = require("./additionalItems");
const prefixItems_1 = require("./prefixItems");
const items_1 = require("./items");
const items2020_1 = require("./items2020");
const contains_1 = require("./contains");
const dependencies_1 = require("./dependencies");
const propertyNames_1 = require("./propertyNames");
const additionalProperties_1 = require("./additionalProperties");
const properties_1 = require("./properties");
const patternProperties_1 = require("./patternProperties");
const not_1 = require("./not");
const anyOf_1 = require("./anyOf");
const oneOf_1 = require("./oneOf");
const allOf_1 = require("./allOf");
const if_1 = require("./if");
const thenElse_1 = require("./thenElse");
function getApplicator(draft2020 = false) {
    const applicator = [
        // any
        not_1.default,
        anyOf_1.default,
        oneOf_1.default,
        allOf_1.default,
        if_1.default,
        thenElse_1.default,
        // object
        propertyNames_1.default,
        additionalProperties_1.default,
        dependencies_1.default,
        properties_1.default,
        patternProperties_1.default,
    ];
    // array
    if (draft2020)
        applicator.push(prefixItems_1.default, items2020_1.default);
    else
        applicator.push(additionalItems_1.default, items_1.default);
    applicator.push(contains_1.default);
    return applicator;
}
exports.default = getApplicator;

},{"./additionalItems":"node_modules/ajv/dist/vocabularies/applicator/additionalItems.js","./prefixItems":"node_modules/ajv/dist/vocabularies/applicator/prefixItems.js","./items":"node_modules/ajv/dist/vocabularies/applicator/items.js","./items2020":"node_modules/ajv/dist/vocabularies/applicator/items2020.js","./contains":"node_modules/ajv/dist/vocabularies/applicator/contains.js","./dependencies":"node_modules/ajv/dist/vocabularies/applicator/dependencies.js","./propertyNames":"node_modules/ajv/dist/vocabularies/applicator/propertyNames.js","./additionalProperties":"node_modules/ajv/dist/vocabularies/applicator/additionalProperties.js","./properties":"node_modules/ajv/dist/vocabularies/applicator/properties.js","./patternProperties":"node_modules/ajv/dist/vocabularies/applicator/patternProperties.js","./not":"node_modules/ajv/dist/vocabularies/applicator/not.js","./anyOf":"node_modules/ajv/dist/vocabularies/applicator/anyOf.js","./oneOf":"node_modules/ajv/dist/vocabularies/applicator/oneOf.js","./allOf":"node_modules/ajv/dist/vocabularies/applicator/allOf.js","./if":"node_modules/ajv/dist/vocabularies/applicator/if.js","./thenElse":"node_modules/ajv/dist/vocabularies/applicator/thenElse.js"}],"node_modules/ajv/dist/vocabularies/dynamic/dynamicAnchor.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicAnchor = void 0;
const codegen_1 = require("../../compile/codegen");
const names_1 = require("../../compile/names");
const compile_1 = require("../../compile");
const ref_1 = require("../core/ref");
const def = {
    keyword: "$dynamicAnchor",
    schemaType: "string",
    code: (cxt) => dynamicAnchor(cxt, cxt.schema),
};
function dynamicAnchor(cxt, anchor) {
    const { gen, it } = cxt;
    it.schemaEnv.root.dynamicAnchors[anchor] = true;
    const v = (0, codegen_1._) `${names_1.default.dynamicAnchors}${(0, codegen_1.getProperty)(anchor)}`;
    const validate = it.errSchemaPath === "#" ? it.validateName : _getValidate(cxt);
    gen.if((0, codegen_1._) `!${v}`, () => gen.assign(v, validate));
}
exports.dynamicAnchor = dynamicAnchor;
function _getValidate(cxt) {
    const { schemaEnv, schema, self } = cxt.it;
    const { root, baseId, localRefs, meta } = schemaEnv.root;
    const { schemaId } = self.opts;
    const sch = new compile_1.SchemaEnv({ schema, schemaId, root, baseId, localRefs, meta });
    compile_1.compileSchema.call(self, sch);
    return (0, ref_1.getValidate)(cxt, sch);
}
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/names":"node_modules/ajv/dist/compile/names.js","../../compile":"node_modules/ajv/dist/compile/index.js","../core/ref":"node_modules/ajv/dist/vocabularies/core/ref.js"}],"node_modules/ajv/dist/vocabularies/dynamic/dynamicRef.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dynamicRef = void 0;
const codegen_1 = require("../../compile/codegen");
const names_1 = require("../../compile/names");
const ref_1 = require("../core/ref");
const def = {
    keyword: "$dynamicRef",
    schemaType: "string",
    code: (cxt) => dynamicRef(cxt, cxt.schema),
};
function dynamicRef(cxt, ref) {
    const { gen, keyword, it } = cxt;
    if (ref[0] !== "#")
        throw new Error(`"${keyword}" only supports hash fragment reference`);
    const anchor = ref.slice(1);
    if (it.allErrors) {
        _dynamicRef();
    }
    else {
        const valid = gen.let("valid", false);
        _dynamicRef(valid);
        cxt.ok(valid);
    }
    function _dynamicRef(valid) {
        // TODO the assumption here is that `recursiveRef: #` always points to the root
        // of the schema object, which is not correct, because there may be $id that
        // makes # point to it, and the target schema may not contain dynamic/recursiveAnchor.
        // Because of that 2 tests in recursiveRef.json fail.
        // This is a similar problem to #815 (`$id` doesn't alter resolution scope for `{ "$ref": "#" }`).
        // (This problem is not tested in JSON-Schema-Test-Suite)
        if (it.schemaEnv.root.dynamicAnchors[anchor]) {
            const v = gen.let("_v", (0, codegen_1._) `${names_1.default.dynamicAnchors}${(0, codegen_1.getProperty)(anchor)}`);
            gen.if(v, _callRef(v, valid), _callRef(it.validateName, valid));
        }
        else {
            _callRef(it.validateName, valid)();
        }
    }
    function _callRef(validate, valid) {
        return valid
            ? () => gen.block(() => {
                (0, ref_1.callRef)(cxt, validate);
                gen.let(valid, true);
            })
            : () => (0, ref_1.callRef)(cxt, validate);
    }
}
exports.dynamicRef = dynamicRef;
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/names":"node_modules/ajv/dist/compile/names.js","../core/ref":"node_modules/ajv/dist/vocabularies/core/ref.js"}],"node_modules/ajv/dist/vocabularies/dynamic/recursiveAnchor.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dynamicAnchor_1 = require("./dynamicAnchor");
const util_1 = require("../../compile/util");
const def = {
    keyword: "$recursiveAnchor",
    schemaType: "boolean",
    code(cxt) {
        if (cxt.schema)
            (0, dynamicAnchor_1.dynamicAnchor)(cxt, "");
        else
            (0, util_1.checkStrictMode)(cxt.it, "$recursiveAnchor: false is ignored");
    },
};
exports.default = def;

},{"./dynamicAnchor":"node_modules/ajv/dist/vocabularies/dynamic/dynamicAnchor.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/dynamic/recursiveRef.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dynamicRef_1 = require("./dynamicRef");
const def = {
    keyword: "$recursiveRef",
    schemaType: "string",
    code: (cxt) => (0, dynamicRef_1.dynamicRef)(cxt, cxt.schema),
};
exports.default = def;

},{"./dynamicRef":"node_modules/ajv/dist/vocabularies/dynamic/dynamicRef.js"}],"node_modules/ajv/dist/vocabularies/dynamic/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dynamicAnchor_1 = require("./dynamicAnchor");
const dynamicRef_1 = require("./dynamicRef");
const recursiveAnchor_1 = require("./recursiveAnchor");
const recursiveRef_1 = require("./recursiveRef");
const dynamic = [dynamicAnchor_1.default, dynamicRef_1.default, recursiveAnchor_1.default, recursiveRef_1.default];
exports.default = dynamic;

},{"./dynamicAnchor":"node_modules/ajv/dist/vocabularies/dynamic/dynamicAnchor.js","./dynamicRef":"node_modules/ajv/dist/vocabularies/dynamic/dynamicRef.js","./recursiveAnchor":"node_modules/ajv/dist/vocabularies/dynamic/recursiveAnchor.js","./recursiveRef":"node_modules/ajv/dist/vocabularies/dynamic/recursiveRef.js"}],"node_modules/ajv/dist/vocabularies/validation/dependentRequired.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dependencies_1 = require("../applicator/dependencies");
const def = {
    keyword: "dependentRequired",
    type: "object",
    schemaType: "object",
    error: dependencies_1.error,
    code: (cxt) => (0, dependencies_1.validatePropertyDeps)(cxt),
};
exports.default = def;

},{"../applicator/dependencies":"node_modules/ajv/dist/vocabularies/applicator/dependencies.js"}],"node_modules/ajv/dist/vocabularies/applicator/dependentSchemas.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dependencies_1 = require("./dependencies");
const def = {
    keyword: "dependentSchemas",
    type: "object",
    schemaType: "object",
    code: (cxt) => (0, dependencies_1.validateSchemaDeps)(cxt),
};
exports.default = def;

},{"./dependencies":"node_modules/ajv/dist/vocabularies/applicator/dependencies.js"}],"node_modules/ajv/dist/vocabularies/validation/limitContains.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../../compile/util");
const def = {
    keyword: ["maxContains", "minContains"],
    type: "array",
    schemaType: "number",
    code({ keyword, parentSchema, it }) {
        if (parentSchema.contains === undefined) {
            (0, util_1.checkStrictMode)(it, `"${keyword}" without "contains" is ignored`);
        }
    },
};
exports.default = def;

},{"../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/next.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dependentRequired_1 = require("./validation/dependentRequired");
const dependentSchemas_1 = require("./applicator/dependentSchemas");
const limitContains_1 = require("./validation/limitContains");
const next = [dependentRequired_1.default, dependentSchemas_1.default, limitContains_1.default];
exports.default = next;

},{"./validation/dependentRequired":"node_modules/ajv/dist/vocabularies/validation/dependentRequired.js","./applicator/dependentSchemas":"node_modules/ajv/dist/vocabularies/applicator/dependentSchemas.js","./validation/limitContains":"node_modules/ajv/dist/vocabularies/validation/limitContains.js"}],"node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedProperties.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const names_1 = require("../../compile/names");
const error = {
    message: "must NOT have unevaluated properties",
    params: ({ params }) => (0, codegen_1._) `{unevaluatedProperty: ${params.unevaluatedProperty}}`,
};
const def = {
    keyword: "unevaluatedProperties",
    type: "object",
    schemaType: ["boolean", "object"],
    trackErrors: true,
    error,
    code(cxt) {
        const { gen, schema, data, errsCount, it } = cxt;
        /* istanbul ignore if */
        if (!errsCount)
            throw new Error("ajv implementation error");
        const { allErrors, props } = it;
        if (props instanceof codegen_1.Name) {
            gen.if((0, codegen_1._) `${props} !== true`, () => gen.forIn("key", data, (key) => gen.if(unevaluatedDynamic(props, key), () => unevaluatedPropCode(key))));
        }
        else if (props !== true) {
            gen.forIn("key", data, (key) => props === undefined
                ? unevaluatedPropCode(key)
                : gen.if(unevaluatedStatic(props, key), () => unevaluatedPropCode(key)));
        }
        it.props = true;
        cxt.ok((0, codegen_1._) `${errsCount} === ${names_1.default.errors}`);
        function unevaluatedPropCode(key) {
            if (schema === false) {
                cxt.setParams({ unevaluatedProperty: key });
                cxt.error();
                if (!allErrors)
                    gen.break();
                return;
            }
            if (!(0, util_1.alwaysValidSchema)(it, schema)) {
                const valid = gen.name("valid");
                cxt.subschema({
                    keyword: "unevaluatedProperties",
                    dataProp: key,
                    dataPropType: util_1.Type.Str,
                }, valid);
                if (!allErrors)
                    gen.if((0, codegen_1.not)(valid), () => gen.break());
            }
        }
        function unevaluatedDynamic(evaluatedProps, key) {
            return (0, codegen_1._) `!${evaluatedProps} || !${evaluatedProps}[${key}]`;
        }
        function unevaluatedStatic(evaluatedProps, key) {
            const ps = [];
            for (const p in evaluatedProps) {
                if (evaluatedProps[p] === true)
                    ps.push((0, codegen_1._) `${key} !== ${p}`);
            }
            return (0, codegen_1.and)(...ps);
        }
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js","../../compile/names":"node_modules/ajv/dist/compile/names.js"}],"node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedItems.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const util_1 = require("../../compile/util");
const error = {
    message: ({ params: { len } }) => (0, codegen_1.str) `must NOT have more than ${len} items`,
    params: ({ params: { len } }) => (0, codegen_1._) `{limit: ${len}}`,
};
const def = {
    keyword: "unevaluatedItems",
    type: "array",
    schemaType: ["boolean", "object"],
    error,
    code(cxt) {
        const { gen, schema, data, it } = cxt;
        const items = it.items || 0;
        if (items === true)
            return;
        const len = gen.const("len", (0, codegen_1._) `${data}.length`);
        if (schema === false) {
            cxt.setParams({ len: items });
            cxt.fail((0, codegen_1._) `${len} > ${items}`);
        }
        else if (typeof schema == "object" && !(0, util_1.alwaysValidSchema)(it, schema)) {
            const valid = gen.var("valid", (0, codegen_1._) `${len} <= ${items}`);
            gen.if((0, codegen_1.not)(valid), () => validateItems(valid, items));
            cxt.ok(valid);
        }
        it.items = true;
        function validateItems(valid, from) {
            gen.forRange("i", from, len, (i) => {
                cxt.subschema({ keyword: "unevaluatedItems", dataProp: i, dataPropType: util_1.Type.Num }, valid);
                if (!it.allErrors)
                    gen.if((0, codegen_1.not)(valid), () => gen.break());
            });
        }
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/vocabularies/unevaluated/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unevaluatedProperties_1 = require("./unevaluatedProperties");
const unevaluatedItems_1 = require("./unevaluatedItems");
const unevaluated = [unevaluatedProperties_1.default, unevaluatedItems_1.default];
exports.default = unevaluated;

},{"./unevaluatedProperties":"node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedProperties.js","./unevaluatedItems":"node_modules/ajv/dist/vocabularies/unevaluated/unevaluatedItems.js"}],"node_modules/ajv/dist/vocabularies/format/format.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const error = {
    message: ({ schemaCode }) => (0, codegen_1.str) `must match format "${schemaCode}"`,
    params: ({ schemaCode }) => (0, codegen_1._) `{format: ${schemaCode}}`,
};
const def = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: true,
    error,
    code(cxt, ruleType) {
        const { gen, data, $data, schema, schemaCode, it } = cxt;
        const { opts, errSchemaPath, schemaEnv, self } = it;
        if (!opts.validateFormats)
            return;
        if ($data)
            validate$DataFormat();
        else
            validateFormat();
        function validate$DataFormat() {
            const fmts = gen.scopeValue("formats", {
                ref: self.formats,
                code: opts.code.formats,
            });
            const fDef = gen.const("fDef", (0, codegen_1._) `${fmts}[${schemaCode}]`);
            const fType = gen.let("fType");
            const format = gen.let("format");
            // TODO simplify
            gen.if((0, codegen_1._) `typeof ${fDef} == "object" && !(${fDef} instanceof RegExp)`, () => gen.assign(fType, (0, codegen_1._) `${fDef}.type || "string"`).assign(format, (0, codegen_1._) `${fDef}.validate`), () => gen.assign(fType, (0, codegen_1._) `"string"`).assign(format, fDef));
            cxt.fail$data((0, codegen_1.or)(unknownFmt(), invalidFmt()));
            function unknownFmt() {
                if (opts.strictSchema === false)
                    return codegen_1.nil;
                return (0, codegen_1._) `${schemaCode} && !${format}`;
            }
            function invalidFmt() {
                const callFormat = schemaEnv.$async
                    ? (0, codegen_1._) `(${fDef}.async ? await ${format}(${data}) : ${format}(${data}))`
                    : (0, codegen_1._) `${format}(${data})`;
                const validData = (0, codegen_1._) `(typeof ${format} == "function" ? ${callFormat} : ${format}.test(${data}))`;
                return (0, codegen_1._) `${format} && ${format} !== true && ${fType} === ${ruleType} && !${validData}`;
            }
        }
        function validateFormat() {
            const formatDef = self.formats[schema];
            if (!formatDef) {
                unknownFormat();
                return;
            }
            if (formatDef === true)
                return;
            const [fmtType, format, fmtRef] = getFormat(formatDef);
            if (fmtType === ruleType)
                cxt.pass(validCondition());
            function unknownFormat() {
                if (opts.strictSchema === false) {
                    self.logger.warn(unknownMsg());
                    return;
                }
                throw new Error(unknownMsg());
                function unknownMsg() {
                    return `unknown format "${schema}" ignored in schema at path "${errSchemaPath}"`;
                }
            }
            function getFormat(fmtDef) {
                const code = fmtDef instanceof RegExp
                    ? (0, codegen_1.regexpCode)(fmtDef)
                    : opts.code.formats
                        ? (0, codegen_1._) `${opts.code.formats}${(0, codegen_1.getProperty)(schema)}`
                        : undefined;
                const fmt = gen.scopeValue("formats", { key: schema, ref: fmtDef, code });
                if (typeof fmtDef == "object" && !(fmtDef instanceof RegExp)) {
                    return [fmtDef.type || "string", fmtDef.validate, (0, codegen_1._) `${fmt}.validate`];
                }
                return ["string", fmtDef, fmt];
            }
            function validCondition() {
                if (typeof formatDef == "object" && !(formatDef instanceof RegExp) && formatDef.async) {
                    if (!schemaEnv.$async)
                        throw new Error("async format in sync schema");
                    return (0, codegen_1._) `await ${fmtRef}(${data})`;
                }
                return typeof format == "function" ? (0, codegen_1._) `${fmtRef}(${data})` : (0, codegen_1._) `${fmtRef}.test(${data})`;
            }
        }
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js"}],"node_modules/ajv/dist/vocabularies/format/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const format_1 = require("./format");
const format = [format_1.default];
exports.default = format;

},{"./format":"node_modules/ajv/dist/vocabularies/format/format.js"}],"node_modules/ajv/dist/vocabularies/metadata.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentVocabulary = exports.metadataVocabulary = void 0;
exports.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples",
];
exports.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema",
];

},{}],"node_modules/ajv/dist/vocabularies/draft2020.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("./core");
const validation_1 = require("./validation");
const applicator_1 = require("./applicator");
const dynamic_1 = require("./dynamic");
const next_1 = require("./next");
const unevaluated_1 = require("./unevaluated");
const format_1 = require("./format");
const metadata_1 = require("./metadata");
const draft2020Vocabularies = [
    dynamic_1.default,
    core_1.default,
    validation_1.default,
    (0, applicator_1.default)(true),
    format_1.default,
    metadata_1.metadataVocabulary,
    metadata_1.contentVocabulary,
    next_1.default,
    unevaluated_1.default,
];
exports.default = draft2020Vocabularies;

},{"./core":"node_modules/ajv/dist/vocabularies/core/index.js","./validation":"node_modules/ajv/dist/vocabularies/validation/index.js","./applicator":"node_modules/ajv/dist/vocabularies/applicator/index.js","./dynamic":"node_modules/ajv/dist/vocabularies/dynamic/index.js","./next":"node_modules/ajv/dist/vocabularies/next.js","./unevaluated":"node_modules/ajv/dist/vocabularies/unevaluated/index.js","./format":"node_modules/ajv/dist/vocabularies/format/index.js","./metadata":"node_modules/ajv/dist/vocabularies/metadata.js"}],"node_modules/ajv/dist/vocabularies/discriminator/types.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscrError = void 0;
var DiscrError;
(function (DiscrError) {
    DiscrError["Tag"] = "tag";
    DiscrError["Mapping"] = "mapping";
})(DiscrError = exports.DiscrError || (exports.DiscrError = {}));

},{}],"node_modules/ajv/dist/vocabularies/discriminator/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../../compile/codegen");
const types_1 = require("../discriminator/types");
const compile_1 = require("../../compile");
const util_1 = require("../../compile/util");
const error = {
    message: ({ params: { discrError, tagName } }) => discrError === types_1.DiscrError.Tag
        ? `tag "${tagName}" must be string`
        : `value of tag "${tagName}" must be in oneOf`,
    params: ({ params: { discrError, tag, tagName } }) => (0, codegen_1._) `{error: ${discrError}, tag: ${tagName}, tagValue: ${tag}}`,
};
const def = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error,
    code(cxt) {
        const { gen, data, schema, parentSchema, it } = cxt;
        const { oneOf } = parentSchema;
        if (!it.opts.discriminator) {
            throw new Error("discriminator: requires discriminator option");
        }
        const tagName = schema.propertyName;
        if (typeof tagName != "string")
            throw new Error("discriminator: requires propertyName");
        if (schema.mapping)
            throw new Error("discriminator: mapping is not supported");
        if (!oneOf)
            throw new Error("discriminator: requires oneOf keyword");
        const valid = gen.let("valid", false);
        const tag = gen.const("tag", (0, codegen_1._) `${data}${(0, codegen_1.getProperty)(tagName)}`);
        gen.if((0, codegen_1._) `typeof ${tag} == "string"`, () => validateMapping(), () => cxt.error(false, { discrError: types_1.DiscrError.Tag, tag, tagName }));
        cxt.ok(valid);
        function validateMapping() {
            const mapping = getMapping();
            gen.if(false);
            for (const tagValue in mapping) {
                gen.elseIf((0, codegen_1._) `${tag} === ${tagValue}`);
                gen.assign(valid, applyTagSchema(mapping[tagValue]));
            }
            gen.else();
            cxt.error(false, { discrError: types_1.DiscrError.Mapping, tag, tagName });
            gen.endIf();
        }
        function applyTagSchema(schemaProp) {
            const _valid = gen.name("valid");
            const schCxt = cxt.subschema({ keyword: "oneOf", schemaProp }, _valid);
            cxt.mergeEvaluated(schCxt, codegen_1.Name);
            return _valid;
        }
        function getMapping() {
            var _a;
            const oneOfMapping = {};
            const topRequired = hasRequired(parentSchema);
            let tagRequired = true;
            for (let i = 0; i < oneOf.length; i++) {
                let sch = oneOf[i];
                if ((sch === null || sch === void 0 ? void 0 : sch.$ref) && !(0, util_1.schemaHasRulesButRef)(sch, it.self.RULES)) {
                    sch = compile_1.resolveRef.call(it.self, it.schemaEnv, it.baseId, sch === null || sch === void 0 ? void 0 : sch.$ref);
                    if (sch instanceof compile_1.SchemaEnv)
                        sch = sch.schema;
                }
                const propSch = (_a = sch === null || sch === void 0 ? void 0 : sch.properties) === null || _a === void 0 ? void 0 : _a[tagName];
                if (typeof propSch != "object") {
                    throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${tagName}"`);
                }
                tagRequired = tagRequired && (topRequired || hasRequired(sch));
                addMappings(propSch, i);
            }
            if (!tagRequired)
                throw new Error(`discriminator: "${tagName}" must be required`);
            return oneOfMapping;
            function hasRequired({ required }) {
                return Array.isArray(required) && required.includes(tagName);
            }
            function addMappings(sch, i) {
                if (sch.const) {
                    addMapping(sch.const, i);
                }
                else if (sch.enum) {
                    for (const tagValue of sch.enum) {
                        addMapping(tagValue, i);
                    }
                }
                else {
                    throw new Error(`discriminator: "properties/${tagName}" must have "const" or "enum"`);
                }
            }
            function addMapping(tagValue, i) {
                if (typeof tagValue != "string" || tagValue in oneOfMapping) {
                    throw new Error(`discriminator: "${tagName}" values must be unique strings`);
                }
                oneOfMapping[tagValue] = i;
            }
        }
    },
};
exports.default = def;

},{"../../compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js","../discriminator/types":"node_modules/ajv/dist/vocabularies/discriminator/types.js","../../compile":"node_modules/ajv/dist/compile/index.js","../../compile/util":"node_modules/ajv/dist/compile/util.js"}],"node_modules/ajv/dist/refs/json-schema-2020-12/schema.json":[function(require,module,exports) {
module.exports = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://json-schema.org/draft/2020-12/schema",
  "$vocabulary": {
    "https://json-schema.org/draft/2020-12/vocab/core": true,
    "https://json-schema.org/draft/2020-12/vocab/applicator": true,
    "https://json-schema.org/draft/2020-12/vocab/unevaluated": true,
    "https://json-schema.org/draft/2020-12/vocab/validation": true,
    "https://json-schema.org/draft/2020-12/vocab/meta-data": true,
    "https://json-schema.org/draft/2020-12/vocab/format-annotation": true,
    "https://json-schema.org/draft/2020-12/vocab/content": true
  },
  "$dynamicAnchor": "meta",

  "title": "Core and Validation specifications meta-schema",
  "allOf": [
    {"$ref": "meta/core"},
    {"$ref": "meta/applicator"},
    {"$ref": "meta/unevaluated"},
    {"$ref": "meta/validation"},
    {"$ref": "meta/meta-data"},
    {"$ref": "meta/format-annotation"},
    {"$ref": "meta/content"}
  ],
  "type": ["object", "boolean"],
  "$comment": "This meta-schema also defines keywords that have appeared in previous drafts in order to prevent incompatible extensions as they remain in common use.",
  "properties": {
    "definitions": {
      "$comment": "\"definitions\" has been replaced by \"$defs\".",
      "type": "object",
      "additionalProperties": {"$dynamicRef": "#meta"},
      "deprecated": true,
      "default": {}
    },
    "dependencies": {
      "$comment": "\"dependencies\" has been split and replaced by \"dependentSchemas\" and \"dependentRequired\" in order to serve their differing semantics.",
      "type": "object",
      "additionalProperties": {
        "anyOf": [{"$dynamicRef": "#meta"}, {"$ref": "meta/validation#/$defs/stringArray"}]
      },
      "deprecated": true,
      "default": {}
    },
    "$recursiveAnchor": {
      "$comment": "\"$recursiveAnchor\" has been replaced by \"$dynamicAnchor\".",
      "$ref": "meta/core#/$defs/anchorString",
      "deprecated": true
    },
    "$recursiveRef": {
      "$comment": "\"$recursiveRef\" has been replaced by \"$dynamicRef\".",
      "$ref": "meta/core#/$defs/uriReferenceString",
      "deprecated": true
    }
  }
}
;
},{}],"node_modules/ajv/dist/refs/json-schema-2020-12/meta/applicator.json":[function(require,module,exports) {
module.exports = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://json-schema.org/draft/2020-12/meta/applicator",
  "$vocabulary": {
    "https://json-schema.org/draft/2020-12/vocab/applicator": true
  },
  "$dynamicAnchor": "meta",

  "title": "Applicator vocabulary meta-schema",
  "type": ["object", "boolean"],
  "properties": {
    "prefixItems": {"$ref": "#/$defs/schemaArray"},
    "items": {"$dynamicRef": "#meta"},
    "contains": {"$dynamicRef": "#meta"},
    "additionalProperties": {"$dynamicRef": "#meta"},
    "properties": {
      "type": "object",
      "additionalProperties": {"$dynamicRef": "#meta"},
      "default": {}
    },
    "patternProperties": {
      "type": "object",
      "additionalProperties": {"$dynamicRef": "#meta"},
      "propertyNames": {"format": "regex"},
      "default": {}
    },
    "dependentSchemas": {
      "type": "object",
      "additionalProperties": {"$dynamicRef": "#meta"},
      "default": {}
    },
    "propertyNames": {"$dynamicRef": "#meta"},
    "if": {"$dynamicRef": "#meta"},
    "then": {"$dynamicRef": "#meta"},
    "else": {"$dynamicRef": "#meta"},
    "allOf": {"$ref": "#/$defs/schemaArray"},
    "anyOf": {"$ref": "#/$defs/schemaArray"},
    "oneOf": {"$ref": "#/$defs/schemaArray"},
    "not": {"$dynamicRef": "#meta"}
  },
  "$defs": {
    "schemaArray": {
      "type": "array",
      "minItems": 1,
      "items": {"$dynamicRef": "#meta"}
    }
  }
}
;
},{}],"node_modules/ajv/dist/refs/json-schema-2020-12/meta/unevaluated.json":[function(require,module,exports) {
module.exports = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://json-schema.org/draft/2020-12/meta/unevaluated",
  "$vocabulary": {
    "https://json-schema.org/draft/2020-12/vocab/unevaluated": true
  },
  "$dynamicAnchor": "meta",

  "title": "Unevaluated applicator vocabulary meta-schema",
  "type": ["object", "boolean"],
  "properties": {
    "unevaluatedItems": {"$dynamicRef": "#meta"},
    "unevaluatedProperties": {"$dynamicRef": "#meta"}
  }
}
;
},{}],"node_modules/ajv/dist/refs/json-schema-2020-12/meta/content.json":[function(require,module,exports) {
module.exports = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://json-schema.org/draft/2020-12/meta/content",
  "$vocabulary": {
    "https://json-schema.org/draft/2020-12/vocab/content": true
  },
  "$dynamicAnchor": "meta",

  "title": "Content vocabulary meta-schema",

  "type": ["object", "boolean"],
  "properties": {
    "contentEncoding": {"type": "string"},
    "contentMediaType": {"type": "string"},
    "contentSchema": {"$dynamicRef": "#meta"}
  }
}
;
},{}],"node_modules/ajv/dist/refs/json-schema-2020-12/meta/core.json":[function(require,module,exports) {
module.exports = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://json-schema.org/draft/2020-12/meta/core",
  "$vocabulary": {
    "https://json-schema.org/draft/2020-12/vocab/core": true
  },
  "$dynamicAnchor": "meta",

  "title": "Core vocabulary meta-schema",
  "type": ["object", "boolean"],
  "properties": {
    "$id": {
      "$ref": "#/$defs/uriReferenceString",
      "$comment": "Non-empty fragments not allowed.",
      "pattern": "^[^#]*#?$"
    },
    "$schema": {"$ref": "#/$defs/uriString"},
    "$ref": {"$ref": "#/$defs/uriReferenceString"},
    "$anchor": {"$ref": "#/$defs/anchorString"},
    "$dynamicRef": {"$ref": "#/$defs/uriReferenceString"},
    "$dynamicAnchor": {"$ref": "#/$defs/anchorString"},
    "$vocabulary": {
      "type": "object",
      "propertyNames": {"$ref": "#/$defs/uriString"},
      "additionalProperties": {
        "type": "boolean"
      }
    },
    "$comment": {
      "type": "string"
    },
    "$defs": {
      "type": "object",
      "additionalProperties": {"$dynamicRef": "#meta"}
    }
  },
  "$defs": {
    "anchorString": {
      "type": "string",
      "pattern": "^[A-Za-z_][-A-Za-z0-9._]*$"
    },
    "uriString": {
      "type": "string",
      "format": "uri"
    },
    "uriReferenceString": {
      "type": "string",
      "format": "uri-reference"
    }
  }
}
;
},{}],"node_modules/ajv/dist/refs/json-schema-2020-12/meta/format-annotation.json":[function(require,module,exports) {
module.exports = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://json-schema.org/draft/2020-12/meta/format-annotation",
  "$vocabulary": {
    "https://json-schema.org/draft/2020-12/vocab/format-annotation": true
  },
  "$dynamicAnchor": "meta",

  "title": "Format vocabulary meta-schema for annotation results",
  "type": ["object", "boolean"],
  "properties": {
    "format": {"type": "string"}
  }
}
;
},{}],"node_modules/ajv/dist/refs/json-schema-2020-12/meta/meta-data.json":[function(require,module,exports) {
module.exports = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://json-schema.org/draft/2020-12/meta/meta-data",
  "$vocabulary": {
    "https://json-schema.org/draft/2020-12/vocab/meta-data": true
  },
  "$dynamicAnchor": "meta",

  "title": "Meta-data vocabulary meta-schema",

  "type": ["object", "boolean"],
  "properties": {
    "title": {
      "type": "string"
    },
    "description": {
      "type": "string"
    },
    "default": true,
    "deprecated": {
      "type": "boolean",
      "default": false
    },
    "readOnly": {
      "type": "boolean",
      "default": false
    },
    "writeOnly": {
      "type": "boolean",
      "default": false
    },
    "examples": {
      "type": "array",
      "items": true
    }
  }
}
;
},{}],"node_modules/ajv/dist/refs/json-schema-2020-12/meta/validation.json":[function(require,module,exports) {
module.exports = {
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$id": "https://json-schema.org/draft/2020-12/meta/validation",
  "$vocabulary": {
    "https://json-schema.org/draft/2020-12/vocab/validation": true
  },
  "$dynamicAnchor": "meta",

  "title": "Validation vocabulary meta-schema",
  "type": ["object", "boolean"],
  "properties": {
    "type": {
      "anyOf": [
        {"$ref": "#/$defs/simpleTypes"},
        {
          "type": "array",
          "items": {"$ref": "#/$defs/simpleTypes"},
          "minItems": 1,
          "uniqueItems": true
        }
      ]
    },
    "const": true,
    "enum": {
      "type": "array",
      "items": true
    },
    "multipleOf": {
      "type": "number",
      "exclusiveMinimum": 0
    },
    "maximum": {
      "type": "number"
    },
    "exclusiveMaximum": {
      "type": "number"
    },
    "minimum": {
      "type": "number"
    },
    "exclusiveMinimum": {
      "type": "number"
    },
    "maxLength": {"$ref": "#/$defs/nonNegativeInteger"},
    "minLength": {"$ref": "#/$defs/nonNegativeIntegerDefault0"},
    "pattern": {
      "type": "string",
      "format": "regex"
    },
    "maxItems": {"$ref": "#/$defs/nonNegativeInteger"},
    "minItems": {"$ref": "#/$defs/nonNegativeIntegerDefault0"},
    "uniqueItems": {
      "type": "boolean",
      "default": false
    },
    "maxContains": {"$ref": "#/$defs/nonNegativeInteger"},
    "minContains": {
      "$ref": "#/$defs/nonNegativeInteger",
      "default": 1
    },
    "maxProperties": {"$ref": "#/$defs/nonNegativeInteger"},
    "minProperties": {"$ref": "#/$defs/nonNegativeIntegerDefault0"},
    "required": {"$ref": "#/$defs/stringArray"},
    "dependentRequired": {
      "type": "object",
      "additionalProperties": {
        "$ref": "#/$defs/stringArray"
      }
    }
  },
  "$defs": {
    "nonNegativeInteger": {
      "type": "integer",
      "minimum": 0
    },
    "nonNegativeIntegerDefault0": {
      "$ref": "#/$defs/nonNegativeInteger",
      "default": 0
    },
    "simpleTypes": {
      "enum": ["array", "boolean", "integer", "null", "number", "object", "string"]
    },
    "stringArray": {
      "type": "array",
      "items": {"type": "string"},
      "uniqueItems": true,
      "default": []
    }
  }
}
;
},{}],"node_modules/ajv/dist/refs/json-schema-2020-12/index.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metaSchema = require("./schema.json");
const applicator = require("./meta/applicator.json");
const unevaluated = require("./meta/unevaluated.json");
const content = require("./meta/content.json");
const core = require("./meta/core.json");
const format = require("./meta/format-annotation.json");
const metadata = require("./meta/meta-data.json");
const validation = require("./meta/validation.json");
const META_SUPPORT_DATA = ["/properties"];
function addMetaSchema2020($data) {
    ;
    [
        metaSchema,
        applicator,
        unevaluated,
        content,
        core,
        with$data(this, format),
        metadata,
        with$data(this, validation),
    ].forEach((sch) => this.addMetaSchema(sch, undefined, false));
    return this;
    function with$data(ajv, sch) {
        return $data ? ajv.$dataMetaSchema(sch, META_SUPPORT_DATA) : sch;
    }
}
exports.default = addMetaSchema2020;

},{"./schema.json":"node_modules/ajv/dist/refs/json-schema-2020-12/schema.json","./meta/applicator.json":"node_modules/ajv/dist/refs/json-schema-2020-12/meta/applicator.json","./meta/unevaluated.json":"node_modules/ajv/dist/refs/json-schema-2020-12/meta/unevaluated.json","./meta/content.json":"node_modules/ajv/dist/refs/json-schema-2020-12/meta/content.json","./meta/core.json":"node_modules/ajv/dist/refs/json-schema-2020-12/meta/core.json","./meta/format-annotation.json":"node_modules/ajv/dist/refs/json-schema-2020-12/meta/format-annotation.json","./meta/meta-data.json":"node_modules/ajv/dist/refs/json-schema-2020-12/meta/meta-data.json","./meta/validation.json":"node_modules/ajv/dist/refs/json-schema-2020-12/meta/validation.json"}],"node_modules/ajv/dist/2020.js":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeGen = exports.Name = exports.nil = exports.stringify = exports.str = exports._ = exports.KeywordCxt = void 0;
const core_1 = require("./core");
const draft2020_1 = require("./vocabularies/draft2020");
const discriminator_1 = require("./vocabularies/discriminator");
const json_schema_2020_12_1 = require("./refs/json-schema-2020-12");
const META_SCHEMA_ID = "https://json-schema.org/draft/2020-12/schema";
class Ajv2020 extends core_1.default {
    constructor(opts = {}) {
        super({
            ...opts,
            dynamicRef: true,
            next: true,
            unevaluated: true,
        });
    }
    _addVocabularies() {
        super._addVocabularies();
        draft2020_1.default.forEach((v) => this.addVocabulary(v));
        if (this.opts.discriminator)
            this.addKeyword(discriminator_1.default);
    }
    _addDefaultMetaSchema() {
        super._addDefaultMetaSchema();
        const { $data, meta } = this.opts;
        if (!meta)
            return;
        json_schema_2020_12_1.default.call(this, $data);
        this.refs["http://json-schema.org/schema"] = META_SCHEMA_ID;
    }
    defaultMeta() {
        return (this.opts.defaultMeta =
            super.defaultMeta() || (this.getSchema(META_SCHEMA_ID) ? META_SCHEMA_ID : undefined));
    }
}
module.exports = exports = Ajv2020;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Ajv2020;
var validate_1 = require("./compile/validate");
Object.defineProperty(exports, "KeywordCxt", { enumerable: true, get: function () { return validate_1.KeywordCxt; } });
var codegen_1 = require("./compile/codegen");
Object.defineProperty(exports, "_", { enumerable: true, get: function () { return codegen_1._; } });
Object.defineProperty(exports, "str", { enumerable: true, get: function () { return codegen_1.str; } });
Object.defineProperty(exports, "stringify", { enumerable: true, get: function () { return codegen_1.stringify; } });
Object.defineProperty(exports, "nil", { enumerable: true, get: function () { return codegen_1.nil; } });
Object.defineProperty(exports, "Name", { enumerable: true, get: function () { return codegen_1.Name; } });
Object.defineProperty(exports, "CodeGen", { enumerable: true, get: function () { return codegen_1.CodeGen; } });

},{"./core":"node_modules/ajv/dist/core.js","./vocabularies/draft2020":"node_modules/ajv/dist/vocabularies/draft2020.js","./vocabularies/discriminator":"node_modules/ajv/dist/vocabularies/discriminator/index.js","./refs/json-schema-2020-12":"node_modules/ajv/dist/refs/json-schema-2020-12/index.js","./compile/validate":"node_modules/ajv/dist/compile/validate/index.js","./compile/codegen":"node_modules/ajv/dist/compile/codegen/index.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _csvtojson = _interopRequireDefault(require("csvtojson"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Ajv2020 = require("ajv/dist/2020");

function convertIntObj(input) {
  var res = {};

  for (var key in input) {
    res[key] = {};

    for (var prop in input[key]) {
      var parsed = parseInt(input[key][prop], 10);
      res[key][prop] = isNaN(parsed) ? input[key][prop] : parsed;
    }
  }

  return res;
}

var ajv = new Ajv2020({
  allErrors: true,
  strict: true
});
var schema = {
  type: "object",
  properties: {
    OrderID: {
      type: "string"
    },
    Booker: {
      type: "string"
    },
    Value: {
      type: "number"
    },
    Rating: {
      type: "number",
      enum: ["0", "1", "2", "3", "4", "5"]
    }
  },
  additionalProperties: true
}; //const serialize = ajv.compileSerializer(schema);
// fetch data

var tableCols = [];

document.getElementById("import").onclick = function () {
  // empty array where we will store stringified json
  var arr; // finding imported file

  var files = document.getElementById("selectFiles").files;

  if (files.length <= 0) {
    return false;
  }

  var fr = new FileReader(); //load csv and convert to JSON

  fr.onload = function (e) {
    //console.log('fetching file'); //ok
    (0, _csvtojson.default)().fromString(e.target.result).then(function (arr) {
      var input = arr;
      var result = convertIntObj(input);
      var arrayResult = Object.values(result);
      console.log("arrayResult: ", arrayResult); //console.log("array contents: ", arr); // if not ok, no values

      var col = [];
      var record = [];
      var tableData = [];
      var tableHeader = [];

      for (var i = 0; i < arr.length; i++) {
        var record = arr[i];
        var recordVals = [];
        var numCols = Object.keys(record).length;

        for (var j = 0; j < numCols; j++) {
          var key = Object.keys(record)[j];
          var value = record[key];
          recordVals.push(value);
        }

        tableData.push(recordVals);
      } //console.log('table data', tableData);
      //console.log(arr.length);


      var errorList = [];

      for (var _i = 0; _i < arr.length; _i++) {
        var removeDuplicates = function removeDuplicates(errText) {
          return _toConsumableArray(new Set(errText));
        }; //console.log("errText cleaned: ", removeDuplicates(errText));


        var validate = ajv.compile(schema);
        var valid = validate(arr[_i]);

        if (!valid) {
          //console.log(validate.errors);
          errorList.push(validate.errors);
        }

        var msgs = document.getElementById("invalidMessages");
        var success = document.getElementById("validFile"); //if (valid) console.log("success!");

        var errs = errorList[0];
        var errText = [];

        for (var k = 0; k < errs.length; k++) {
          var colName = errs[k]["instancePath"].slice(1);
          var colType = errs[k]["keyword"];
          var problem = errs[k]["message"];

          if (colType === "type") {
            var errMsg = "\"".concat(colName, "\" ").concat(colType, " ").concat(problem, ".");
            errText.push(errMsg);
          } else if (errs[k]["params"]["error"] === "missing") {
            var missingCol = errs[k]["params"]["missingProperty"];
            var errMsg = "Cannot find required property \"".concat(missingCol, "\".");
            errText.push(errMsg);
          } else if (colType === "enum") {
            var allowed = errs[k]["params"]["allowedValues"];
            var _missingCol = errs[k]["params"]["missingProperty"];
            var errMsg = "\"".concat(colName, "\" must be one of ").concat(allowed, ".");
            errText.push(errMsg);
          }
        }

        msgs.innerHTML = "Issues:<br>".concat(removeDuplicates(errText));
      }

      for (var i = 0; i < input.length; i++) {
        for (var key in input[i]) {
          if (col.indexOf(key) === -1) {
            col.push(key);
          }
        }
      }

      for (var i in col) {
        tableHeader.push({
          title: col[i]
        });
      }

      $(document).ready(function () {
        $('#example').DataTable({
          "dom": '<"top"ip>rt<"clear">',
          data: tableData,
          // extract this from input file
          columns: tableHeader
        });
      });
    });
  };

  var myData = fr.readAsText(files.item(0));
};
},{"csvtojson":"node_modules/csvtojson/browser/browser.js","ajv/dist/2020":"node_modules/ajv/dist/2020.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61096" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map