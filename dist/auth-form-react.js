import Ce, { useState as Br } from "react";
import q, { css as Ve, keyframes as Nr } from "styled-components";
import { useField as Xr, Formik as gr, Form as hr } from "formik";
import * as ue from "yup";
function Hr(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Le = { exports: {} }, _e = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir;
function Jr() {
  if (ir)
    return _e;
  ir = 1;
  var r = Ce, w = Symbol.for("react.element"), f = Symbol.for("react.fragment"), u = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(p, h, j) {
    var v, T = {}, D = null, U = null;
    j !== void 0 && (D = "" + j), h.key !== void 0 && (D = "" + h.key), h.ref !== void 0 && (U = h.ref);
    for (v in h)
      u.call(h, v) && !d.hasOwnProperty(v) && (T[v] = h[v]);
    if (p && p.defaultProps)
      for (v in h = p.defaultProps, h)
        T[v] === void 0 && (T[v] = h[v]);
    return { $$typeof: w, type: p, key: D, ref: U, props: T, _owner: c.current };
  }
  return _e.Fragment = f, _e.jsx = O, _e.jsxs = O, _e;
}
var Se = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function Gr() {
  return sr || (sr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Ce, w = Symbol.for("react.element"), f = Symbol.for("react.portal"), u = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), p = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), U = Symbol.for("react.offscreen"), J = Symbol.iterator, W = "@@iterator";
    function H(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = J && e[J] || e[W];
      return typeof t == "function" ? t : null;
    }
    var N = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function L(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), l = 1; l < t; l++)
          o[l - 1] = arguments[l];
        X("error", e, o);
      }
    }
    function X(e, t, o) {
      {
        var l = N.ReactDebugCurrentFrame, A = l.getStackAddendum();
        A !== "" && (t += "%s", o = o.concat([A]));
        var M = o.map(function(C) {
          return String(C);
        });
        M.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, M);
      }
    }
    var V = !1, i = !1, oe = !1, Ee = !1, Te = !1, de;
    de = Symbol.for("react.module.reference");
    function xe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === u || e === d || Te || e === c || e === j || e === v || Ee || e === U || V || i || oe || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === T || e.$$typeof === O || e.$$typeof === p || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === de || e.getModuleId !== void 0));
    }
    function pe(e, t, o) {
      var l = e.displayName;
      if (l)
        return l;
      var A = t.displayName || t.name || "";
      return A !== "" ? o + "(" + A + ")" : o;
    }
    function ve(e) {
      return e.displayName || "Context";
    }
    function Q(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case u:
          return "Fragment";
        case f:
          return "Portal";
        case d:
          return "Profiler";
        case c:
          return "StrictMode";
        case j:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            var t = e;
            return ve(t) + ".Consumer";
          case O:
            var o = e;
            return ve(o._context) + ".Provider";
          case h:
            return pe(e, e.render, "ForwardRef");
          case T:
            var l = e.displayName || null;
            return l !== null ? l : Q(e.type) || "Memo";
          case D: {
            var A = e, M = A._payload, C = A._init;
            try {
              return Q(C(M));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, ae = 0, ee, ne, se, ye, n, s, E;
    function b() {
    }
    b.__reactDisabledLog = !0;
    function y() {
      {
        if (ae === 0) {
          ee = console.log, ne = console.info, se = console.warn, ye = console.error, n = console.group, s = console.groupCollapsed, E = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: b,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        ae++;
      }
    }
    function P() {
      {
        if (ae--, ae === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, e, {
              value: ee
            }),
            info: Z({}, e, {
              value: ne
            }),
            warn: Z({}, e, {
              value: se
            }),
            error: Z({}, e, {
              value: ye
            }),
            group: Z({}, e, {
              value: n
            }),
            groupCollapsed: Z({}, e, {
              value: s
            }),
            groupEnd: Z({}, e, {
              value: E
            })
          });
        }
        ae < 0 && L("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var m = N.ReactCurrentDispatcher, g;
    function x(e, t, o) {
      {
        if (g === void 0)
          try {
            throw Error();
          } catch (A) {
            var l = A.stack.trim().match(/\n( *(at )?)/);
            g = l && l[1] || "";
          }
        return `
` + g + e;
      }
    }
    var $ = !1, R;
    {
      var G = typeof WeakMap == "function" ? WeakMap : Map;
      R = new G();
    }
    function a(e, t) {
      if (!e || $)
        return "";
      {
        var o = R.get(e);
        if (o !== void 0)
          return o;
      }
      var l;
      $ = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var M;
      M = m.current, m.current = null, y();
      try {
        if (t) {
          var C = function() {
            throw Error();
          };
          if (Object.defineProperty(C.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(C, []);
            } catch (ie) {
              l = ie;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (ie) {
              l = ie;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            l = ie;
          }
          e();
        }
      } catch (ie) {
        if (ie && l && typeof ie.stack == "string") {
          for (var S = ie.stack.split(`
`), K = l.stack.split(`
`), z = S.length - 1, B = K.length - 1; z >= 1 && B >= 0 && S[z] !== K[B]; )
            B--;
          for (; z >= 1 && B >= 0; z--, B--)
            if (S[z] !== K[B]) {
              if (z !== 1 || B !== 1)
                do
                  if (z--, B--, B < 0 || S[z] !== K[B]) {
                    var te = `
` + S[z].replace(" at new ", " at ");
                    return e.displayName && te.includes("<anonymous>") && (te = te.replace("<anonymous>", e.displayName)), typeof e == "function" && R.set(e, te), te;
                  }
                while (z >= 1 && B >= 0);
              break;
            }
        }
      } finally {
        $ = !1, m.current = M, P(), Error.prepareStackTrace = A;
      }
      var he = e ? e.displayName || e.name : "", ar = he ? x(he) : "";
      return typeof e == "function" && R.set(e, ar), ar;
    }
    function re(e, t, o) {
      return a(e, !1);
    }
    function me(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ce(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return a(e, me(e));
      if (typeof e == "string")
        return x(e);
      switch (e) {
        case j:
          return x("Suspense");
        case v:
          return x("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            return re(e.render);
          case T:
            return ce(e.type, t, o);
          case D: {
            var l = e, A = l._payload, M = l._init;
            try {
              return ce(M(A), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, Xe = {}, He = N.ReactDebugCurrentFrame;
    function Oe(e) {
      if (e) {
        var t = e._owner, o = ce(e.type, e._source, t ? t.type : null);
        He.setExtraStackFrame(o);
      } else
        He.setExtraStackFrame(null);
    }
    function Sr(e, t, o, l, A) {
      {
        var M = Function.call.bind(we);
        for (var C in e)
          if (M(e, C)) {
            var S = void 0;
            try {
              if (typeof e[C] != "function") {
                var K = Error((l || "React class") + ": " + o + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              S = e[C](t, C, l, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (z) {
              S = z;
            }
            S && !(S instanceof Error) && (Oe(A), L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", o, C, typeof S), Oe(null)), S instanceof Error && !(S.message in Xe) && (Xe[S.message] = !0, Oe(A), L("Failed %s type: %s", o, S.message), Oe(null));
          }
      }
    }
    var wr = Array.isArray;
    function $e(e) {
      return wr(e);
    }
    function Or(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Pr(e) {
      try {
        return Je(e), !1;
      } catch {
        return !0;
      }
    }
    function Je(e) {
      return "" + e;
    }
    function Ge(e) {
      if (Pr(e))
        return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Or(e)), Je(e);
    }
    var Re = N.ReactCurrentOwner, Cr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ke, Ze, Ae;
    Ae = {};
    function jr(e) {
      if (we.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function $r(e) {
      if (we.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ar(e, t) {
      if (typeof e.ref == "string" && Re.current && t && Re.current.stateNode !== t) {
        var o = Q(Re.current.type);
        Ae[o] || (L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(Re.current.type), e.ref), Ae[o] = !0);
      }
    }
    function kr(e, t) {
      {
        var o = function() {
          Ke || (Ke = !0, L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Ir(e, t) {
      {
        var o = function() {
          Ze || (Ze = !0, L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var Fr = function(e, t, o, l, A, M, C) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: C,
        // Record the component responsible for creating this element.
        _owner: M
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function Dr(e, t, o, l, A) {
      {
        var M, C = {}, S = null, K = null;
        o !== void 0 && (Ge(o), S = "" + o), $r(t) && (Ge(t.key), S = "" + t.key), jr(t) && (K = t.ref, Ar(t, A));
        for (M in t)
          we.call(t, M) && !Cr.hasOwnProperty(M) && (C[M] = t[M]);
        if (e && e.defaultProps) {
          var z = e.defaultProps;
          for (M in z)
            C[M] === void 0 && (C[M] = z[M]);
        }
        if (S || K) {
          var B = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          S && kr(C, B), K && Ir(C, B);
        }
        return Fr(e, S, K, A, l, Re.current, C);
      }
    }
    var ke = N.ReactCurrentOwner, Qe = N.ReactDebugCurrentFrame;
    function ge(e) {
      if (e) {
        var t = e._owner, o = ce(e.type, e._source, t ? t.type : null);
        Qe.setExtraStackFrame(o);
      } else
        Qe.setExtraStackFrame(null);
    }
    var Ie;
    Ie = !1;
    function Fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    function er() {
      {
        if (ke.current) {
          var e = Q(ke.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Mr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), o = e.lineNumber;
          return `

Check your code at ` + t + ":" + o + ".";
        }
        return "";
      }
    }
    var rr = {};
    function Wr(e) {
      {
        var t = er();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function tr(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = Wr(t);
        if (rr[o])
          return;
        rr[o] = !0;
        var l = "";
        e && e._owner && e._owner !== ke.current && (l = " It was passed a child from " + Q(e._owner.type) + "."), ge(e), L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, l), ge(null);
      }
    }
    function nr(e, t) {
      {
        if (typeof e != "object")
          return;
        if ($e(e))
          for (var o = 0; o < e.length; o++) {
            var l = e[o];
            Fe(l) && tr(l, t);
          }
        else if (Fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var A = H(e);
          if (typeof A == "function" && A !== e.entries)
            for (var M = A.call(e), C; !(C = M.next()).done; )
              Fe(C.value) && tr(C.value, t);
        }
      }
    }
    function Yr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === T))
          o = t.propTypes;
        else
          return;
        if (o) {
          var l = Q(t);
          Sr(o, e.props, "prop", l, e);
        } else if (t.PropTypes !== void 0 && !Ie) {
          Ie = !0;
          var A = Q(t);
          L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function qr(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var l = t[o];
          if (l !== "children" && l !== "key") {
            ge(e), L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), ge(null);
            break;
          }
        }
        e.ref !== null && (ge(e), L("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    function or(e, t, o, l, A, M) {
      {
        var C = xe(e);
        if (!C) {
          var S = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Mr(A);
          K ? S += K : S += er();
          var z;
          e === null ? z = "null" : $e(e) ? z = "array" : e !== void 0 && e.$$typeof === w ? (z = "<" + (Q(e.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : z = typeof e, L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", z, S);
        }
        var B = Dr(e, t, o, A, M);
        if (B == null)
          return B;
        if (C) {
          var te = t.children;
          if (te !== void 0)
            if (l)
              if ($e(te)) {
                for (var he = 0; he < te.length; he++)
                  nr(te[he], e);
                Object.freeze && Object.freeze(te);
              } else
                L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              nr(te, e);
        }
        return e === u ? qr(B) : Yr(B), B;
      }
    }
    function Ur(e, t, o) {
      return or(e, t, o, !0);
    }
    function Lr(e, t, o) {
      return or(e, t, o, !1);
    }
    var zr = Lr, Vr = Ur;
    Se.Fragment = u, Se.jsx = zr, Se.jsxs = Vr;
  }()), Se;
}
process.env.NODE_ENV === "production" ? Le.exports = Jr() : Le.exports = Gr();
var _ = Le.exports, ze = { exports: {} }, Pe = { exports: {} }, k = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Kr() {
  if (cr)
    return k;
  cr = 1;
  var r = typeof Symbol == "function" && Symbol.for, w = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, c = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, O = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, j = r ? Symbol.for("react.concurrent_mode") : 60111, v = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, D = r ? Symbol.for("react.suspense_list") : 60120, U = r ? Symbol.for("react.memo") : 60115, J = r ? Symbol.for("react.lazy") : 60116, W = r ? Symbol.for("react.block") : 60121, H = r ? Symbol.for("react.fundamental") : 60117, N = r ? Symbol.for("react.responder") : 60118, L = r ? Symbol.for("react.scope") : 60119;
  function X(i) {
    if (typeof i == "object" && i !== null) {
      var oe = i.$$typeof;
      switch (oe) {
        case w:
          switch (i = i.type, i) {
            case h:
            case j:
            case u:
            case d:
            case c:
            case T:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case p:
                case v:
                case J:
                case U:
                case O:
                  return i;
                default:
                  return oe;
              }
          }
        case f:
          return oe;
      }
    }
  }
  function V(i) {
    return X(i) === j;
  }
  return k.AsyncMode = h, k.ConcurrentMode = j, k.ContextConsumer = p, k.ContextProvider = O, k.Element = w, k.ForwardRef = v, k.Fragment = u, k.Lazy = J, k.Memo = U, k.Portal = f, k.Profiler = d, k.StrictMode = c, k.Suspense = T, k.isAsyncMode = function(i) {
    return V(i) || X(i) === h;
  }, k.isConcurrentMode = V, k.isContextConsumer = function(i) {
    return X(i) === p;
  }, k.isContextProvider = function(i) {
    return X(i) === O;
  }, k.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === w;
  }, k.isForwardRef = function(i) {
    return X(i) === v;
  }, k.isFragment = function(i) {
    return X(i) === u;
  }, k.isLazy = function(i) {
    return X(i) === J;
  }, k.isMemo = function(i) {
    return X(i) === U;
  }, k.isPortal = function(i) {
    return X(i) === f;
  }, k.isProfiler = function(i) {
    return X(i) === d;
  }, k.isStrictMode = function(i) {
    return X(i) === c;
  }, k.isSuspense = function(i) {
    return X(i) === T;
  }, k.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === u || i === j || i === d || i === c || i === T || i === D || typeof i == "object" && i !== null && (i.$$typeof === J || i.$$typeof === U || i.$$typeof === O || i.$$typeof === p || i.$$typeof === v || i.$$typeof === H || i.$$typeof === N || i.$$typeof === L || i.$$typeof === W);
  }, k.typeOf = X, k;
}
var I = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ur;
function Zr() {
  return ur || (ur = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, w = r ? Symbol.for("react.element") : 60103, f = r ? Symbol.for("react.portal") : 60106, u = r ? Symbol.for("react.fragment") : 60107, c = r ? Symbol.for("react.strict_mode") : 60108, d = r ? Symbol.for("react.profiler") : 60114, O = r ? Symbol.for("react.provider") : 60109, p = r ? Symbol.for("react.context") : 60110, h = r ? Symbol.for("react.async_mode") : 60111, j = r ? Symbol.for("react.concurrent_mode") : 60111, v = r ? Symbol.for("react.forward_ref") : 60112, T = r ? Symbol.for("react.suspense") : 60113, D = r ? Symbol.for("react.suspense_list") : 60120, U = r ? Symbol.for("react.memo") : 60115, J = r ? Symbol.for("react.lazy") : 60116, W = r ? Symbol.for("react.block") : 60121, H = r ? Symbol.for("react.fundamental") : 60117, N = r ? Symbol.for("react.responder") : 60118, L = r ? Symbol.for("react.scope") : 60119;
    function X(a) {
      return typeof a == "string" || typeof a == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      a === u || a === j || a === d || a === c || a === T || a === D || typeof a == "object" && a !== null && (a.$$typeof === J || a.$$typeof === U || a.$$typeof === O || a.$$typeof === p || a.$$typeof === v || a.$$typeof === H || a.$$typeof === N || a.$$typeof === L || a.$$typeof === W);
    }
    function V(a) {
      if (typeof a == "object" && a !== null) {
        var re = a.$$typeof;
        switch (re) {
          case w:
            var me = a.type;
            switch (me) {
              case h:
              case j:
              case u:
              case d:
              case c:
              case T:
                return me;
              default:
                var ce = me && me.$$typeof;
                switch (ce) {
                  case p:
                  case v:
                  case J:
                  case U:
                  case O:
                    return ce;
                  default:
                    return re;
                }
            }
          case f:
            return re;
        }
      }
    }
    var i = h, oe = j, Ee = p, Te = O, de = w, xe = v, pe = u, ve = J, Q = U, Z = f, ae = d, ee = c, ne = T, se = !1;
    function ye(a) {
      return se || (se = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), n(a) || V(a) === h;
    }
    function n(a) {
      return V(a) === j;
    }
    function s(a) {
      return V(a) === p;
    }
    function E(a) {
      return V(a) === O;
    }
    function b(a) {
      return typeof a == "object" && a !== null && a.$$typeof === w;
    }
    function y(a) {
      return V(a) === v;
    }
    function P(a) {
      return V(a) === u;
    }
    function m(a) {
      return V(a) === J;
    }
    function g(a) {
      return V(a) === U;
    }
    function x(a) {
      return V(a) === f;
    }
    function $(a) {
      return V(a) === d;
    }
    function R(a) {
      return V(a) === c;
    }
    function G(a) {
      return V(a) === T;
    }
    I.AsyncMode = i, I.ConcurrentMode = oe, I.ContextConsumer = Ee, I.ContextProvider = Te, I.Element = de, I.ForwardRef = xe, I.Fragment = pe, I.Lazy = ve, I.Memo = Q, I.Portal = Z, I.Profiler = ae, I.StrictMode = ee, I.Suspense = ne, I.isAsyncMode = ye, I.isConcurrentMode = n, I.isContextConsumer = s, I.isContextProvider = E, I.isElement = b, I.isForwardRef = y, I.isFragment = P, I.isLazy = m, I.isMemo = g, I.isPortal = x, I.isProfiler = $, I.isStrictMode = R, I.isSuspense = G, I.isValidElementType = X, I.typeOf = V;
  }()), I;
}
var fr;
function br() {
  return fr || (fr = 1, process.env.NODE_ENV === "production" ? Pe.exports = Kr() : Pe.exports = Zr()), Pe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var De, lr;
function Qr() {
  if (lr)
    return De;
  lr = 1;
  var r = Object.getOwnPropertySymbols, w = Object.prototype.hasOwnProperty, f = Object.prototype.propertyIsEnumerable;
  function u(d) {
    if (d == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(d);
  }
  function c() {
    try {
      if (!Object.assign)
        return !1;
      var d = new String("abc");
      if (d[5] = "de", Object.getOwnPropertyNames(d)[0] === "5")
        return !1;
      for (var O = {}, p = 0; p < 10; p++)
        O["_" + String.fromCharCode(p)] = p;
      var h = Object.getOwnPropertyNames(O).map(function(v) {
        return O[v];
      });
      if (h.join("") !== "0123456789")
        return !1;
      var j = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        j[v] = v;
      }), Object.keys(Object.assign({}, j)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return De = c() ? Object.assign : function(d, O) {
    for (var p, h = u(d), j, v = 1; v < arguments.length; v++) {
      p = Object(arguments[v]);
      for (var T in p)
        w.call(p, T) && (h[T] = p[T]);
      if (r) {
        j = r(p);
        for (var D = 0; D < j.length; D++)
          f.call(p, j[D]) && (h[j[D]] = p[j[D]]);
      }
    }
    return h;
  }, De;
}
var Me, dr;
function Be() {
  if (dr)
    return Me;
  dr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Me = r, Me;
}
var We, pr;
function Er() {
  return pr || (pr = 1, We = Function.call.bind(Object.prototype.hasOwnProperty)), We;
}
var Ye, vr;
function et() {
  if (vr)
    return Ye;
  vr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var w = Be(), f = {}, u = Er();
    r = function(d) {
      var O = "Warning: " + d;
      typeof console < "u" && console.error(O);
      try {
        throw new Error(O);
      } catch {
      }
    };
  }
  function c(d, O, p, h, j) {
    if (process.env.NODE_ENV !== "production") {
      for (var v in d)
        if (u(d, v)) {
          var T;
          try {
            if (typeof d[v] != "function") {
              var D = Error(
                (h || "React class") + ": " + p + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof d[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw D.name = "Invariant Violation", D;
            }
            T = d[v](O, v, h, p, null, w);
          } catch (J) {
            T = J;
          }
          if (T && !(T instanceof Error) && r(
            (h || "React class") + ": type specification of " + p + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof T + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), T instanceof Error && !(T.message in f)) {
            f[T.message] = !0;
            var U = j ? j() : "";
            r(
              "Failed " + p + " type: " + T.message + (U ?? "")
            );
          }
        }
    }
  }
  return c.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (f = {});
  }, Ye = c, Ye;
}
var qe, yr;
function rt() {
  if (yr)
    return qe;
  yr = 1;
  var r = br(), w = Qr(), f = Be(), u = Er(), c = et(), d = function() {
  };
  process.env.NODE_ENV !== "production" && (d = function(p) {
    var h = "Warning: " + p;
    typeof console < "u" && console.error(h);
    try {
      throw new Error(h);
    } catch {
    }
  });
  function O() {
    return null;
  }
  return qe = function(p, h) {
    var j = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function T(n) {
      var s = n && (j && n[j] || n[v]);
      if (typeof s == "function")
        return s;
    }
    var D = "<<anonymous>>", U = {
      array: N("array"),
      bigint: N("bigint"),
      bool: N("boolean"),
      func: N("function"),
      number: N("number"),
      object: N("object"),
      string: N("string"),
      symbol: N("symbol"),
      any: L(),
      arrayOf: X,
      element: V(),
      elementType: i(),
      instanceOf: oe,
      node: xe(),
      objectOf: Te,
      oneOf: Ee,
      oneOfType: de,
      shape: ve,
      exact: Q
    };
    function J(n, s) {
      return n === s ? n !== 0 || 1 / n === 1 / s : n !== n && s !== s;
    }
    function W(n, s) {
      this.message = n, this.data = s && typeof s == "object" ? s : {}, this.stack = "";
    }
    W.prototype = Error.prototype;
    function H(n) {
      if (process.env.NODE_ENV !== "production")
        var s = {}, E = 0;
      function b(P, m, g, x, $, R, G) {
        if (x = x || D, R = R || g, G !== f) {
          if (h) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw a.name = "Invariant Violation", a;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var re = x + ":" + g;
            !s[re] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (d(
              "You are manually calling a React.PropTypes validation function for the `" + R + "` prop on `" + x + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), s[re] = !0, E++);
          }
        }
        return m[g] == null ? P ? m[g] === null ? new W("The " + $ + " `" + R + "` is marked as required " + ("in `" + x + "`, but its value is `null`.")) : new W("The " + $ + " `" + R + "` is marked as required in " + ("`" + x + "`, but its value is `undefined`.")) : null : n(m, g, x, $, R);
      }
      var y = b.bind(null, !1);
      return y.isRequired = b.bind(null, !0), y;
    }
    function N(n) {
      function s(E, b, y, P, m, g) {
        var x = E[b], $ = ee(x);
        if ($ !== n) {
          var R = ne(x);
          return new W(
            "Invalid " + P + " `" + m + "` of type " + ("`" + R + "` supplied to `" + y + "`, expected ") + ("`" + n + "`."),
            { expectedType: n }
          );
        }
        return null;
      }
      return H(s);
    }
    function L() {
      return H(O);
    }
    function X(n) {
      function s(E, b, y, P, m) {
        if (typeof n != "function")
          return new W("Property `" + m + "` of component `" + y + "` has invalid PropType notation inside arrayOf.");
        var g = E[b];
        if (!Array.isArray(g)) {
          var x = ee(g);
          return new W("Invalid " + P + " `" + m + "` of type " + ("`" + x + "` supplied to `" + y + "`, expected an array."));
        }
        for (var $ = 0; $ < g.length; $++) {
          var R = n(g, $, y, P, m + "[" + $ + "]", f);
          if (R instanceof Error)
            return R;
        }
        return null;
      }
      return H(s);
    }
    function V() {
      function n(s, E, b, y, P) {
        var m = s[E];
        if (!p(m)) {
          var g = ee(m);
          return new W("Invalid " + y + " `" + P + "` of type " + ("`" + g + "` supplied to `" + b + "`, expected a single ReactElement."));
        }
        return null;
      }
      return H(n);
    }
    function i() {
      function n(s, E, b, y, P) {
        var m = s[E];
        if (!r.isValidElementType(m)) {
          var g = ee(m);
          return new W("Invalid " + y + " `" + P + "` of type " + ("`" + g + "` supplied to `" + b + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return H(n);
    }
    function oe(n) {
      function s(E, b, y, P, m) {
        if (!(E[b] instanceof n)) {
          var g = n.name || D, x = ye(E[b]);
          return new W("Invalid " + P + " `" + m + "` of type " + ("`" + x + "` supplied to `" + y + "`, expected ") + ("instance of `" + g + "`."));
        }
        return null;
      }
      return H(s);
    }
    function Ee(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? d(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : d("Invalid argument supplied to oneOf, expected an array.")), O;
      function s(E, b, y, P, m) {
        for (var g = E[b], x = 0; x < n.length; x++)
          if (J(g, n[x]))
            return null;
        var $ = JSON.stringify(n, function(G, a) {
          var re = ne(a);
          return re === "symbol" ? String(a) : a;
        });
        return new W("Invalid " + P + " `" + m + "` of value `" + String(g) + "` " + ("supplied to `" + y + "`, expected one of " + $ + "."));
      }
      return H(s);
    }
    function Te(n) {
      function s(E, b, y, P, m) {
        if (typeof n != "function")
          return new W("Property `" + m + "` of component `" + y + "` has invalid PropType notation inside objectOf.");
        var g = E[b], x = ee(g);
        if (x !== "object")
          return new W("Invalid " + P + " `" + m + "` of type " + ("`" + x + "` supplied to `" + y + "`, expected an object."));
        for (var $ in g)
          if (u(g, $)) {
            var R = n(g, $, y, P, m + "." + $, f);
            if (R instanceof Error)
              return R;
          }
        return null;
      }
      return H(s);
    }
    function de(n) {
      if (!Array.isArray(n))
        return process.env.NODE_ENV !== "production" && d("Invalid argument supplied to oneOfType, expected an instance of array."), O;
      for (var s = 0; s < n.length; s++) {
        var E = n[s];
        if (typeof E != "function")
          return d(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + se(E) + " at index " + s + "."
          ), O;
      }
      function b(y, P, m, g, x) {
        for (var $ = [], R = 0; R < n.length; R++) {
          var G = n[R], a = G(y, P, m, g, x, f);
          if (a == null)
            return null;
          a.data && u(a.data, "expectedType") && $.push(a.data.expectedType);
        }
        var re = $.length > 0 ? ", expected one of type [" + $.join(", ") + "]" : "";
        return new W("Invalid " + g + " `" + x + "` supplied to " + ("`" + m + "`" + re + "."));
      }
      return H(b);
    }
    function xe() {
      function n(s, E, b, y, P) {
        return Z(s[E]) ? null : new W("Invalid " + y + " `" + P + "` supplied to " + ("`" + b + "`, expected a ReactNode."));
      }
      return H(n);
    }
    function pe(n, s, E, b, y) {
      return new W(
        (n || "React class") + ": " + s + " type `" + E + "." + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + y + "`."
      );
    }
    function ve(n) {
      function s(E, b, y, P, m) {
        var g = E[b], x = ee(g);
        if (x !== "object")
          return new W("Invalid " + P + " `" + m + "` of type `" + x + "` " + ("supplied to `" + y + "`, expected `object`."));
        for (var $ in n) {
          var R = n[$];
          if (typeof R != "function")
            return pe(y, P, m, $, ne(R));
          var G = R(g, $, y, P, m + "." + $, f);
          if (G)
            return G;
        }
        return null;
      }
      return H(s);
    }
    function Q(n) {
      function s(E, b, y, P, m) {
        var g = E[b], x = ee(g);
        if (x !== "object")
          return new W("Invalid " + P + " `" + m + "` of type `" + x + "` " + ("supplied to `" + y + "`, expected `object`."));
        var $ = w({}, E[b], n);
        for (var R in $) {
          var G = n[R];
          if (u(n, R) && typeof G != "function")
            return pe(y, P, m, R, ne(G));
          if (!G)
            return new W(
              "Invalid " + P + " `" + m + "` key `" + R + "` supplied to `" + y + "`.\nBad object: " + JSON.stringify(E[b], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(n), null, "  ")
            );
          var a = G(g, R, y, P, m + "." + R, f);
          if (a)
            return a;
        }
        return null;
      }
      return H(s);
    }
    function Z(n) {
      switch (typeof n) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !n;
        case "object":
          if (Array.isArray(n))
            return n.every(Z);
          if (n === null || p(n))
            return !0;
          var s = T(n);
          if (s) {
            var E = s.call(n), b;
            if (s !== n.entries) {
              for (; !(b = E.next()).done; )
                if (!Z(b.value))
                  return !1;
            } else
              for (; !(b = E.next()).done; ) {
                var y = b.value;
                if (y && !Z(y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(n, s) {
      return n === "symbol" ? !0 : s ? s["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && s instanceof Symbol : !1;
    }
    function ee(n) {
      var s = typeof n;
      return Array.isArray(n) ? "array" : n instanceof RegExp ? "object" : ae(s, n) ? "symbol" : s;
    }
    function ne(n) {
      if (typeof n > "u" || n === null)
        return "" + n;
      var s = ee(n);
      if (s === "object") {
        if (n instanceof Date)
          return "date";
        if (n instanceof RegExp)
          return "regexp";
      }
      return s;
    }
    function se(n) {
      var s = ne(n);
      switch (s) {
        case "array":
        case "object":
          return "an " + s;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + s;
        default:
          return s;
      }
    }
    function ye(n) {
      return !n.constructor || !n.constructor.name ? D : n.constructor.name;
    }
    return U.checkPropTypes = c, U.resetWarningCache = c.resetWarningCache, U.PropTypes = U, U;
  }, qe;
}
var Ue, mr;
function tt() {
  if (mr)
    return Ue;
  mr = 1;
  var r = Be();
  function w() {
  }
  function f() {
  }
  return f.resetWarningCache = w, Ue = function() {
    function u(O, p, h, j, v, T) {
      if (T !== r) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
      }
    }
    u.isRequired = u;
    function c() {
      return u;
    }
    var d = {
      array: u,
      bigint: u,
      bool: u,
      func: u,
      number: u,
      object: u,
      string: u,
      symbol: u,
      any: u,
      arrayOf: c,
      element: u,
      elementType: u,
      instanceOf: c,
      node: u,
      objectOf: c,
      oneOf: c,
      oneOfType: c,
      shape: c,
      exact: c,
      checkPropTypes: f,
      resetWarningCache: w
    };
    return d.PropTypes = d, d;
  }, Ue;
}
if (process.env.NODE_ENV !== "production") {
  var nt = br(), ot = !0;
  ze.exports = rt()(nt.isElement, ot);
} else
  ze.exports = tt()();
var at = ze.exports;
const Y = /* @__PURE__ */ Hr(at), F = {
  color: {
    dark: "rgba(0, 0, 0, 0.87)",
    primary: "#5677fc",
    primaryDark: "#455ede",
    secondary: "#ff5177",
    grey: "#EEEEEE",
    greyLight: "#f6f5f7",
    white: "#FFFFFF"
  },
  transition: {
    base: (r) => `
          ${r.el} ${r.speed || "0.2"}s cubic-bezier(0.4, 0.0, 0.2, 1)
        `
  }
}, Ne = Ve`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  margin-bottom: ${(r) => r.marginBottom || "0.35em"};
  margin-top: ${(r) => r.marginTop || 0};
  margin-left: ${(r) => r.marginLeft || 0};
  margin-right: ${(r) => r.marginRight || 0};
  color: ${(r) => F.color[r.color] || F.color.dark};
  font-weight: ${(r) => r.fontWeight || 400};
  text-align: ${(r) => r.align || "inherit"};
`, it = q.p`
  ${Ne}
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`, st = q.h4`
  ${Ne}
  font-size: 2.125rem;
  line-height: 1.17;
  letter-spacing: 0.00735em;
`, ct = q.p`
  ${Ne}
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.01071em;
`, fe = ({ variant: r = "body", ...w }) => {
  const f = {
    h4: st,
    body: it,
    body2: ct
  };
  return Ce.createElement(f[r], w);
};
fe.propTypes = {
  variant: Y.oneOf(["h4", "body", "body2"]),
  marginBottom: Y.string,
  marginTop: Y.string,
  marginLeft: Y.string,
  marginRight: Y.string,
  color: Y.string,
  fontWeight: Y.number,
  align: Y.oneOf(["right", "left", "center", "inherit"])
};
const je = q.button`
  border-radius: 20px;
  border: 1px solid ${(r) => F.color[r.color] || F.color.grey};
  background-color: ${(r) => F.color[r.color] || F.color.grey};
  margin-bottom: ${(r) => r.marginBottom || "0.35em"};
  margin-top: ${(r) => r.marginTop || 0};
  margin-left: ${(r) => r.marginLeft || 0};
  margin-right: ${(r) => r.marginRight || 0};
  color: ${F.color.dark};
  font-size: 0.875rem;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: ${F.transition.base({ el: "transform" })};
  cursor: pointer;

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  &:disabled,
  &:hover:disabled,
  &:active:disabled {
    background: #ccc;
    color: #979797;
    border-color: #ccc;
    cursor: not-allowed;
  }
`, ut = q(je)`
  border-color: ${F.color.primary};
  background-color: ${F.color.primary};
  color: ${F.color.white};
`, ft = q(je)`
  border-color: ${F.color.scondary};
  background-color: ${F.color.secondary};
  color: ${F.color.white};
`, lt = q(je)`
  background-color: transparent;
  border-color: ${F.color.white};
  color: ${F.color.white};
`, le = ({ variant: r = "default", ...w }) => {
  const f = {
    primary: ut,
    secondary: ft,
    transparent: lt,
    default: je
  };
  return Ce.createElement(f[r], w);
};
le.propTypes = {
  variant: Y.oneOf(["primary", "secondary", "transparent", "default"]),
  marginBottom: Y.string,
  marginTop: Y.string,
  marginLeft: Y.string,
  marginRight: Y.string,
  color: Y.string,
  type: Y.oneOf(["button", "submit"]),
  onClick: Y.func,
  disabled: Y.bool
};
const Tr = q.div`
  color: red;
  font-size: 0.775rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 550;
  padding-top: 10px;
`, dt = q.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`, pt = q.div`
  width: 100%;
`, vt = q.input`
  width: 100%;
  padding: 12px 15px;
  -webkit-box-sizing: border-box; // Safari/Chrome, other WebKit
  -moz-box-sizing: border-box; // Firefox, other Gecko
  box-sizing: border-box; // Opera/IE 8+
  margin: 8px 0;
  background-color: ${F.color.grey};
  border: 1px solid ${F.color.grey};
  border-radius: 4px;
  outline: none;
  font-size: "1rem";
  transition: ${F.transition.base({ el: "border" })};
  &:invalid {
    border-color: red;
    background: #ffd1d1;
  }
  &:focus {
    border: 2px solid ${F.color.primary};
    transition: ${F.transition.base({ el: "border" })};
  }
`, yt = q.div`
  color: red;
  font-size: 0.775rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 550;
`, be = ({ ...r }) => {
  const [w, f] = Xr(r);
  return /* @__PURE__ */ _.jsxs(dt, { className: f.touched && f.error, children: [
    /* @__PURE__ */ _.jsx(pt, { children: /* @__PURE__ */ _.jsx(vt, { ...w, ...r }) }),
    f.touched && f.error ? /* @__PURE__ */ _.jsx(yt, { children: f.error }) : null
  ] });
};
be.propTypes = {
  id: Y.string.isRequired,
  name: Y.string.isRequired,
  value: Y.string,
  type: Y.oneOf(["text", "email", "password", "number"]),
  required: Y.bool,
  pattern: Y.string,
  placeholder: Y.string
};
function mt({ className: r, onSignUp: w, serverError: f, loading: u }) {
  return /* @__PURE__ */ _.jsx(
    gr,
    {
      initialValues: {
        username: "",
        email: "",
        password: ""
      },
      validationSchema: ue.object({
        username: ue.string().max(15, "must be 15 characters or less").required("required"),
        email: ue.string().email("invalid email address").required("required"),
        password: ue.string().max(6, "must be 6 characters or less").required("required")
      }),
      onSubmit: (c) => {
        w(c);
      },
      children: (c) => /* @__PURE__ */ _.jsxs(hr, { className: r, onSubmit: c.handleSubmit, children: [
        /* @__PURE__ */ _.jsx(fe, { fontWeight: 550, variant: "h4", children: "Create Account" }),
        /* @__PURE__ */ _.jsx(
          be,
          {
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Username"
          }
        ),
        /* @__PURE__ */ _.jsx(be, { id: "email", name: "email", type: "email", placeholder: "Email" }),
        /* @__PURE__ */ _.jsx(
          be,
          {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Password"
          }
        ),
        f && /* @__PURE__ */ _.jsx(Tr, { children: f }),
        u ? /* @__PURE__ */ _.jsx(
          le,
          {
            variant: "secondary",
            type: "submit",
            marginTop: "1.17rem",
            disabled: !0,
            children: "Loading..."
          }
        ) : /* @__PURE__ */ _.jsx(
          le,
          {
            variant: "secondary",
            type: "submit",
            marginTop: "1.17rem",
            disabled: !c.isValid,
            children: "Sign up"
          }
        )
      ] })
    }
  );
}
function gt({ className: r, onSignIn: w, serverError: f, loading: u }) {
  return /* @__PURE__ */ _.jsx(
    gr,
    {
      initialValues: {
        username: "",
        password: ""
      },
      validationSchema: ue.object({
        username: ue.string().max(15, "must be 15 characters or less").required("required"),
        password: ue.string().max(6, "must be 6 characters or less").required("required")
      }),
      onSubmit: (c) => {
        w(c);
      },
      children: (c) => /* @__PURE__ */ _.jsxs(hr, { className: r, onSubmit: c.handleSubmit, children: [
        /* @__PURE__ */ _.jsx(fe, { fontWeight: 550, variant: "h4", children: "Sign in" }),
        /* @__PURE__ */ _.jsx(
          be,
          {
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Username"
          }
        ),
        /* @__PURE__ */ _.jsx(
          be,
          {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Password"
          }
        ),
        f && /* @__PURE__ */ _.jsx(Tr, { children: f }),
        u ? /* @__PURE__ */ _.jsx(
          le,
          {
            variant: "secondary",
            type: "submit",
            marginTop: "1.17rem",
            disabled: !0,
            children: "Loading..."
          }
        ) : /* @__PURE__ */ _.jsx(
          le,
          {
            variant: "secondary",
            type: "submit",
            marginTop: "1.17rem",
            disabled: !c.isValid,
            children: "Sign in"
          }
        )
      ] })
    }
  );
}
const ht = q.div`
  background: ${F.color.greyLight};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
`, bt = q.div`
  background-color: ${F.color.white};
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  text-align: center;
`, xr = q.div`
  left: 0;
  width: 50%;
  position: absolute;
  top: 0;
  height: 100%;
  transition: ${F.transition.base({ el: "all", speed: "0.6" })};
`, Et = Nr`
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
`, Tt = q(xr)`
  z-index: ${(r) => r.signUpActive ? 5 : 1};
  transform: ${(r) => r.signUpActive ? "translateX(100%)" : "translateX(0)"};
  opacity: ${(r) => r.signUpActive ? 1 : 0};
  animation: ${(r) => r.signUpActive ? Ve`
          ${Et} 0.6
        ` : "none"};
`, xt = q(xr)`
  z-index: 2;
  transform: ${(r) => r.signUpActive ? "translateX(100%)" : "translateX(0)"};
`, Rr = Ve`
  background-color: ${F.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`, Rt = q(mt)`
  ${Rr}
`, _t = q(gt)`
  ${Rr}
`, St = q.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: ${F.transition.base({ el: "transform", speed: "0.6" })};
  z-index: 100;
  transform: ${(r) => r.signUpActive ? "translateX(-100%)" : "translateX(0)"};
`, wt = q.div`
  background: #ff416c;
  background: linear-gradient(to right, #9965f4 20%, #0000d6 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;
  color: #ffffff;
  position: relative;
  left: -100%;
  height: 100%;
  width: 200%;
  transform: ${(r) => r.signUpActive ? "translateX(50%)" : "translateX(0)"};
  transition: ${F.transition.base({ el: "transform", speed: "0.6" })};
`, _r = q.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  top: 0;
  height: 100%;
  width: 50%;
  transform: "translateX(0)";
  transition: ${F.transition.base({ el: "transform", speed: "0.6" })};
`, Ot = q(_r)`
  transform: ${(r) => r.signUpActive ? "translateX(-0)" : "translateX(-20%)"};
`, Pt = q(_r)`
  right: 0;
  transform: ${(r) => r.signUpActive ? "translateX(20%)" : "translateX(0)"};
`, At = ({ onSignUp: r, onSignIn: w, serverError: f, loading: u }) => {
  const [c, d] = Br(!1), O = () => {
    d((p) => !p);
  };
  return /* @__PURE__ */ _.jsx(ht, { children: /* @__PURE__ */ _.jsxs(bt, { children: [
    c ? /* @__PURE__ */ _.jsx(Tt, { signUpActive: c, children: /* @__PURE__ */ _.jsx(
      Rt,
      {
        onSignUp: r,
        serverError: f,
        loading: u
      }
    ) }) : /* @__PURE__ */ _.jsx(xt, { signUpActive: c, children: /* @__PURE__ */ _.jsx(
      _t,
      {
        onSignIn: w,
        serverError: f,
        loading: u
      }
    ) }),
    /* @__PURE__ */ _.jsx(St, { signUpActive: c, children: /* @__PURE__ */ _.jsx(wt, { signUpActive: c, children: c ? /* @__PURE__ */ _.jsxs(Ot, { signUpActive: c, children: [
      /* @__PURE__ */ _.jsx(fe, { fontWeight: 550, variant: "h4", color: "white", children: "Register now!" }),
      /* @__PURE__ */ _.jsx(fe, { variant: "body", color: "white", children: "Enter your personal details" }),
      /* @__PURE__ */ _.jsx(
        le,
        {
          onClick: O,
          variant: "transparent",
          marginTop: "1.17rem",
          children: "Sign In"
        }
      )
    ] }) : /* @__PURE__ */ _.jsxs(Pt, { signUpActive: c, children: [
      /* @__PURE__ */ _.jsx(fe, { fontWeight: 550, variant: "h4", color: "white", children: "Welcome Back!" }),
      /* @__PURE__ */ _.jsx(fe, { variant: "body", color: "white", children: "Please login with your personal info" }),
      /* @__PURE__ */ _.jsx(
        le,
        {
          onClick: O,
          variant: "transparent",
          marginTop: "1.17rem",
          children: "Sign Up"
        }
      )
    ] }) }) })
  ] }) });
};
export {
  At as AuthForm
};
