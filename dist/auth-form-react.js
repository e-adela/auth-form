import cr, { useState as kr } from "react";
import { useField as Dr, Formik as fr, Form as lr } from "formik";
import * as se from "yup";
function Fr(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var Fe = { exports: {} }, Ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ze;
function Mr() {
  if (Ze)
    return Ee;
  Ze = 1;
  var o = cr, I = Symbol.for("react.element"), v = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, T = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, y, P) {
    var p, _ = {}, D = null, N = null;
    P !== void 0 && (D = "" + P), y.key !== void 0 && (D = "" + y.key), y.ref !== void 0 && (N = y.ref);
    for (p in y)
      c.call(y, p) && !u.hasOwnProperty(p) && (_[p] = y[p]);
    if (d && d.defaultProps)
      for (p in y = d.defaultProps, y)
        _[p] === void 0 && (_[p] = y[p]);
    return { $$typeof: I, type: d, key: D, ref: N, props: _, _owner: T.current };
  }
  return Ee.Fragment = v, Ee.jsx = f, Ee.jsxs = f, Ee;
}
var Te = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Nr() {
  return Qe || (Qe = 1, process.env.NODE_ENV !== "production" && function() {
    var o = cr, I = Symbol.for("react.element"), v = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), B = Symbol.iterator, M = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[M];
      return typeof r == "function" ? r : null;
    }
    var U = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          n[l - 1] = arguments[l];
        V("error", e, n);
      }
    }
    function V(e, r, n) {
      {
        var l = U.ReactDebugCurrentFrame, A = l.getStackAddendum();
        A !== "" && (r += "%s", n = n.concat([A]));
        var F = n.map(function(C) {
          return String(C);
        });
        F.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, F);
      }
    }
    var W = !1, i = !1, re = !1, me = !1, he = !1, ue;
    ue = Symbol.for("react.module.reference");
    function be(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === u || he || e === T || e === P || e === p || me || e === N || W || i || re || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === _ || e.$$typeof === f || e.$$typeof === d || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ue || e.getModuleId !== void 0));
    }
    function ce(e, r, n) {
      var l = e.displayName;
      if (l)
        return l;
      var A = r.displayName || r.name || "";
      return A !== "" ? n + "(" + A + ")" : n;
    }
    function fe(e) {
      return e.displayName || "Context";
    }
    function K(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case v:
          return "Portal";
        case u:
          return "Profiler";
        case T:
          return "StrictMode";
        case P:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return fe(r) + ".Consumer";
          case f:
            var n = e;
            return fe(n._context) + ".Provider";
          case y:
            return ce(e, e.render, "ForwardRef");
          case _:
            var l = e.displayName || null;
            return l !== null ? l : K(e.type) || "Memo";
          case D: {
            var A = e, F = A._payload, C = A._init;
            try {
              return K(C(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, te = 0, X, ee, ae, le, t, s, E;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function m() {
      {
        if (te === 0) {
          X = console.log, ee = console.info, ae = console.warn, le = console.error, t = console.group, s = console.groupCollapsed, E = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: g,
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
        te++;
      }
    }
    function w() {
      {
        if (te--, te === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: X
            }),
            info: H({}, e, {
              value: ee
            }),
            warn: H({}, e, {
              value: ae
            }),
            error: H({}, e, {
              value: le
            }),
            group: H({}, e, {
              value: t
            }),
            groupCollapsed: H({}, e, {
              value: s
            }),
            groupEnd: H({}, e, {
              value: E
            })
          });
        }
        te < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var h = U.ReactCurrentDispatcher, b;
    function R(e, r, n) {
      {
        if (b === void 0)
          try {
            throw Error();
          } catch (A) {
            var l = A.stack.trim().match(/\n( *(at )?)/);
            b = l && l[1] || "";
          }
        return `
` + b + e;
      }
    }
    var j = !1, S;
    {
      var J = typeof WeakMap == "function" ? WeakMap : Map;
      S = new J();
    }
    function a(e, r) {
      if (!e || j)
        return "";
      {
        var n = S.get(e);
        if (n !== void 0)
          return n;
      }
      var l;
      j = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var F;
      F = h.current, h.current = null, m();
      try {
        if (r) {
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
            } catch (ne) {
              l = ne;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (ne) {
              l = ne;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ne) {
            l = ne;
          }
          e();
        }
      } catch (ne) {
        if (ne && l && typeof ne.stack == "string") {
          for (var O = ne.stack.split(`
`), G = l.stack.split(`
`), q = O.length - 1, L = G.length - 1; q >= 1 && L >= 0 && O[q] !== G[L]; )
            L--;
          for (; q >= 1 && L >= 0; q--, L--)
            if (O[q] !== G[L]) {
              if (q !== 1 || L !== 1)
                do
                  if (q--, L--, L < 0 || O[q] !== G[L]) {
                    var Q = `
` + O[q].replace(" at new ", " at ");
                    return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), typeof e == "function" && S.set(e, Q), Q;
                  }
                while (q >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        j = !1, h.current = F, w(), Error.prepareStackTrace = A;
      }
      var ve = e ? e.displayName || e.name : "", Xe = ve ? R(ve) : "";
      return typeof e == "function" && S.set(e, Xe), Xe;
    }
    function Z(e, r, n) {
      return a(e, !1);
    }
    function de(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function oe(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return a(e, de(e));
      if (typeof e == "string")
        return R(e);
      switch (e) {
        case P:
          return R("Suspense");
        case p:
          return R("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            return Z(e.render);
          case _:
            return oe(e.type, r, n);
          case D: {
            var l = e, A = l._payload, F = l._init;
            try {
              return oe(F(A), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var _e = Object.prototype.hasOwnProperty, Ye = {}, qe = U.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var r = e._owner, n = oe(e.type, e._source, r ? r.type : null);
        qe.setExtraStackFrame(n);
      } else
        qe.setExtraStackFrame(null);
    }
    function vr(e, r, n, l, A) {
      {
        var F = Function.call.bind(_e);
        for (var C in e)
          if (F(e, C)) {
            var O = void 0;
            try {
              if (typeof e[C] != "function") {
                var G = Error((l || "React class") + ": " + n + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw G.name = "Invariant Violation", G;
              }
              O = e[C](r, C, l, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              O = q;
            }
            O && !(O instanceof Error) && (Re(A), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", n, C, typeof O), Re(null)), O instanceof Error && !(O.message in Ye) && (Ye[O.message] = !0, Re(A), Y("Failed %s type: %s", n, O.message), Re(null));
          }
      }
    }
    var yr = Array.isArray;
    function xe(e) {
      return yr(e);
    }
    function mr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function hr(e) {
      try {
        return We(e), !1;
      } catch {
        return !0;
      }
    }
    function We(e) {
      return "" + e;
    }
    function Le(e) {
      if (hr(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), We(e);
    }
    var ge = U.ReactCurrentOwner, br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, Ve, Oe;
    Oe = {};
    function gr(e) {
      if (_e.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Er(e) {
      if (_e.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Tr(e, r) {
      if (typeof e.ref == "string" && ge.current && r && ge.current.stateNode !== r) {
        var n = K(ge.current.type);
        Oe[n] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', K(ge.current.type), e.ref), Oe[n] = !0);
      }
    }
    function _r(e, r) {
      {
        var n = function() {
          Ue || (Ue = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function Rr(e, r) {
      {
        var n = function() {
          Ve || (Ve = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var Sr = function(e, r, n, l, A, F, C) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: I,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: C,
        // Record the component responsible for creating this element.
        _owner: F
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: l
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function xr(e, r, n, l, A) {
      {
        var F, C = {}, O = null, G = null;
        n !== void 0 && (Le(n), O = "" + n), Er(r) && (Le(r.key), O = "" + r.key), gr(r) && (G = r.ref, Tr(r, A));
        for (F in r)
          _e.call(r, F) && !br.hasOwnProperty(F) && (C[F] = r[F]);
        if (e && e.defaultProps) {
          var q = e.defaultProps;
          for (F in q)
            C[F] === void 0 && (C[F] = q[F]);
        }
        if (O || G) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          O && _r(C, L), G && Rr(C, L);
        }
        return Sr(e, O, G, A, l, ge.current, C);
      }
    }
    var Pe = U.ReactCurrentOwner, ze = U.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var r = e._owner, n = oe(e.type, e._source, r ? r.type : null);
        ze.setExtraStackFrame(n);
      } else
        ze.setExtraStackFrame(null);
    }
    var we;
    we = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === I;
    }
    function Be() {
      {
        if (Pe.current) {
          var e = K(Pe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Or(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Je = {};
    function Pr(e) {
      {
        var r = Be();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Ge(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = Pr(r);
        if (Je[n])
          return;
        Je[n] = !0;
        var l = "";
        e && e._owner && e._owner !== Pe.current && (l = " It was passed a child from " + K(e._owner.type) + "."), pe(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, l), pe(null);
      }
    }
    function He(e, r) {
      {
        if (typeof e != "object")
          return;
        if (xe(e))
          for (var n = 0; n < e.length; n++) {
            var l = e[n];
            Ce(l) && Ge(l, r);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var A = z(e);
          if (typeof A == "function" && A !== e.entries)
            for (var F = A.call(e), C; !(C = F.next()).done; )
              Ce(C.value) && Ge(C.value, r);
        }
      }
    }
    function wr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          n = r.propTypes;
        else
          return;
        if (n) {
          var l = K(r);
          vr(n, e.props, "prop", l, e);
        } else if (r.PropTypes !== void 0 && !we) {
          we = !0;
          var A = K(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Cr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var l = r[n];
          if (l !== "children" && l !== "key") {
            pe(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), pe(null);
            break;
          }
        }
        e.ref !== null && (pe(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), pe(null));
      }
    }
    function Ke(e, r, n, l, A, F) {
      {
        var C = be(e);
        if (!C) {
          var O = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var G = Or(A);
          G ? O += G : O += Be();
          var q;
          e === null ? q = "null" : xe(e) ? q = "array" : e !== void 0 && e.$$typeof === I ? (q = "<" + (K(e.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : q = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, O);
        }
        var L = xr(e, r, n, A, F);
        if (L == null)
          return L;
        if (C) {
          var Q = r.children;
          if (Q !== void 0)
            if (l)
              if (xe(Q)) {
                for (var ve = 0; ve < Q.length; ve++)
                  He(Q[ve], e);
                Object.freeze && Object.freeze(Q);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              He(Q, e);
        }
        return e === c ? Cr(L) : wr(L), L;
      }
    }
    function jr(e, r, n) {
      return Ke(e, r, n, !0);
    }
    function Ar(e, r, n) {
      return Ke(e, r, n, !1);
    }
    var Ir = Ar, $r = jr;
    Te.Fragment = c, Te.jsx = Ir, Te.jsxs = $r;
  }()), Te;
}
process.env.NODE_ENV === "production" ? Fe.exports = Mr() : Fe.exports = Nr();
var x = Fe.exports, Me = { exports: {} }, Se = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Yr() {
  if (er)
    return $;
  er = 1;
  var o = typeof Symbol == "function" && Symbol.for, I = o ? Symbol.for("react.element") : 60103, v = o ? Symbol.for("react.portal") : 60106, c = o ? Symbol.for("react.fragment") : 60107, T = o ? Symbol.for("react.strict_mode") : 60108, u = o ? Symbol.for("react.profiler") : 60114, f = o ? Symbol.for("react.provider") : 60109, d = o ? Symbol.for("react.context") : 60110, y = o ? Symbol.for("react.async_mode") : 60111, P = o ? Symbol.for("react.concurrent_mode") : 60111, p = o ? Symbol.for("react.forward_ref") : 60112, _ = o ? Symbol.for("react.suspense") : 60113, D = o ? Symbol.for("react.suspense_list") : 60120, N = o ? Symbol.for("react.memo") : 60115, B = o ? Symbol.for("react.lazy") : 60116, M = o ? Symbol.for("react.block") : 60121, z = o ? Symbol.for("react.fundamental") : 60117, U = o ? Symbol.for("react.responder") : 60118, Y = o ? Symbol.for("react.scope") : 60119;
  function V(i) {
    if (typeof i == "object" && i !== null) {
      var re = i.$$typeof;
      switch (re) {
        case I:
          switch (i = i.type, i) {
            case y:
            case P:
            case c:
            case u:
            case T:
            case _:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case d:
                case p:
                case B:
                case N:
                case f:
                  return i;
                default:
                  return re;
              }
          }
        case v:
          return re;
      }
    }
  }
  function W(i) {
    return V(i) === P;
  }
  return $.AsyncMode = y, $.ConcurrentMode = P, $.ContextConsumer = d, $.ContextProvider = f, $.Element = I, $.ForwardRef = p, $.Fragment = c, $.Lazy = B, $.Memo = N, $.Portal = v, $.Profiler = u, $.StrictMode = T, $.Suspense = _, $.isAsyncMode = function(i) {
    return W(i) || V(i) === y;
  }, $.isConcurrentMode = W, $.isContextConsumer = function(i) {
    return V(i) === d;
  }, $.isContextProvider = function(i) {
    return V(i) === f;
  }, $.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === I;
  }, $.isForwardRef = function(i) {
    return V(i) === p;
  }, $.isFragment = function(i) {
    return V(i) === c;
  }, $.isLazy = function(i) {
    return V(i) === B;
  }, $.isMemo = function(i) {
    return V(i) === N;
  }, $.isPortal = function(i) {
    return V(i) === v;
  }, $.isProfiler = function(i) {
    return V(i) === u;
  }, $.isStrictMode = function(i) {
    return V(i) === T;
  }, $.isSuspense = function(i) {
    return V(i) === _;
  }, $.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === c || i === P || i === u || i === T || i === _ || i === D || typeof i == "object" && i !== null && (i.$$typeof === B || i.$$typeof === N || i.$$typeof === f || i.$$typeof === d || i.$$typeof === p || i.$$typeof === z || i.$$typeof === U || i.$$typeof === Y || i.$$typeof === M);
  }, $.typeOf = V, $;
}
var k = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function qr() {
  return rr || (rr = 1, process.env.NODE_ENV !== "production" && function() {
    var o = typeof Symbol == "function" && Symbol.for, I = o ? Symbol.for("react.element") : 60103, v = o ? Symbol.for("react.portal") : 60106, c = o ? Symbol.for("react.fragment") : 60107, T = o ? Symbol.for("react.strict_mode") : 60108, u = o ? Symbol.for("react.profiler") : 60114, f = o ? Symbol.for("react.provider") : 60109, d = o ? Symbol.for("react.context") : 60110, y = o ? Symbol.for("react.async_mode") : 60111, P = o ? Symbol.for("react.concurrent_mode") : 60111, p = o ? Symbol.for("react.forward_ref") : 60112, _ = o ? Symbol.for("react.suspense") : 60113, D = o ? Symbol.for("react.suspense_list") : 60120, N = o ? Symbol.for("react.memo") : 60115, B = o ? Symbol.for("react.lazy") : 60116, M = o ? Symbol.for("react.block") : 60121, z = o ? Symbol.for("react.fundamental") : 60117, U = o ? Symbol.for("react.responder") : 60118, Y = o ? Symbol.for("react.scope") : 60119;
    function V(a) {
      return typeof a == "string" || typeof a == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      a === c || a === P || a === u || a === T || a === _ || a === D || typeof a == "object" && a !== null && (a.$$typeof === B || a.$$typeof === N || a.$$typeof === f || a.$$typeof === d || a.$$typeof === p || a.$$typeof === z || a.$$typeof === U || a.$$typeof === Y || a.$$typeof === M);
    }
    function W(a) {
      if (typeof a == "object" && a !== null) {
        var Z = a.$$typeof;
        switch (Z) {
          case I:
            var de = a.type;
            switch (de) {
              case y:
              case P:
              case c:
              case u:
              case T:
              case _:
                return de;
              default:
                var oe = de && de.$$typeof;
                switch (oe) {
                  case d:
                  case p:
                  case B:
                  case N:
                  case f:
                    return oe;
                  default:
                    return Z;
                }
            }
          case v:
            return Z;
        }
      }
    }
    var i = y, re = P, me = d, he = f, ue = I, be = p, ce = c, fe = B, K = N, H = v, te = u, X = T, ee = _, ae = !1;
    function le(a) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(a) || W(a) === y;
    }
    function t(a) {
      return W(a) === P;
    }
    function s(a) {
      return W(a) === d;
    }
    function E(a) {
      return W(a) === f;
    }
    function g(a) {
      return typeof a == "object" && a !== null && a.$$typeof === I;
    }
    function m(a) {
      return W(a) === p;
    }
    function w(a) {
      return W(a) === c;
    }
    function h(a) {
      return W(a) === B;
    }
    function b(a) {
      return W(a) === N;
    }
    function R(a) {
      return W(a) === v;
    }
    function j(a) {
      return W(a) === u;
    }
    function S(a) {
      return W(a) === T;
    }
    function J(a) {
      return W(a) === _;
    }
    k.AsyncMode = i, k.ConcurrentMode = re, k.ContextConsumer = me, k.ContextProvider = he, k.Element = ue, k.ForwardRef = be, k.Fragment = ce, k.Lazy = fe, k.Memo = K, k.Portal = H, k.Profiler = te, k.StrictMode = X, k.Suspense = ee, k.isAsyncMode = le, k.isConcurrentMode = t, k.isContextConsumer = s, k.isContextProvider = E, k.isElement = g, k.isForwardRef = m, k.isFragment = w, k.isLazy = h, k.isMemo = b, k.isPortal = R, k.isProfiler = j, k.isStrictMode = S, k.isSuspense = J, k.isValidElementType = V, k.typeOf = W;
  }()), k;
}
var tr;
function dr() {
  return tr || (tr = 1, process.env.NODE_ENV === "production" ? Se.exports = Yr() : Se.exports = qr()), Se.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var je, nr;
function Wr() {
  if (nr)
    return je;
  nr = 1;
  var o = Object.getOwnPropertySymbols, I = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
  function c(u) {
    if (u == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(u);
  }
  function T() {
    try {
      if (!Object.assign)
        return !1;
      var u = new String("abc");
      if (u[5] = "de", Object.getOwnPropertyNames(u)[0] === "5")
        return !1;
      for (var f = {}, d = 0; d < 10; d++)
        f["_" + String.fromCharCode(d)] = d;
      var y = Object.getOwnPropertyNames(f).map(function(p) {
        return f[p];
      });
      if (y.join("") !== "0123456789")
        return !1;
      var P = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(p) {
        P[p] = p;
      }), Object.keys(Object.assign({}, P)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return je = T() ? Object.assign : function(u, f) {
    for (var d, y = c(u), P, p = 1; p < arguments.length; p++) {
      d = Object(arguments[p]);
      for (var _ in d)
        I.call(d, _) && (y[_] = d[_]);
      if (o) {
        P = o(d);
        for (var D = 0; D < P.length; D++)
          v.call(d, P[D]) && (y[P[D]] = d[P[D]]);
      }
    }
    return y;
  }, je;
}
var Ae, ar;
function Ne() {
  if (ar)
    return Ae;
  ar = 1;
  var o = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ae = o, Ae;
}
var Ie, or;
function pr() {
  return or || (or = 1, Ie = Function.call.bind(Object.prototype.hasOwnProperty)), Ie;
}
var $e, ir;
function Lr() {
  if (ir)
    return $e;
  ir = 1;
  var o = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var I = Ne(), v = {}, c = pr();
    o = function(u) {
      var f = "Warning: " + u;
      typeof console < "u" && console.error(f);
      try {
        throw new Error(f);
      } catch {
      }
    };
  }
  function T(u, f, d, y, P) {
    if (process.env.NODE_ENV !== "production") {
      for (var p in u)
        if (c(u, p)) {
          var _;
          try {
            if (typeof u[p] != "function") {
              var D = Error(
                (y || "React class") + ": " + d + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw D.name = "Invariant Violation", D;
            }
            _ = u[p](f, p, y, d, null, I);
          } catch (B) {
            _ = B;
          }
          if (_ && !(_ instanceof Error) && o(
            (y || "React class") + ": type specification of " + d + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in v)) {
            v[_.message] = !0;
            var N = P ? P() : "";
            o(
              "Failed " + d + " type: " + _.message + (N ?? "")
            );
          }
        }
    }
  }
  return T.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (v = {});
  }, $e = T, $e;
}
var ke, sr;
function Ur() {
  if (sr)
    return ke;
  sr = 1;
  var o = dr(), I = Wr(), v = Ne(), c = pr(), T = Lr(), u = function() {
  };
  process.env.NODE_ENV !== "production" && (u = function(d) {
    var y = "Warning: " + d;
    typeof console < "u" && console.error(y);
    try {
      throw new Error(y);
    } catch {
    }
  });
  function f() {
    return null;
  }
  return ke = function(d, y) {
    var P = typeof Symbol == "function" && Symbol.iterator, p = "@@iterator";
    function _(t) {
      var s = t && (P && t[P] || t[p]);
      if (typeof s == "function")
        return s;
    }
    var D = "<<anonymous>>", N = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: Y(),
      arrayOf: V,
      element: W(),
      elementType: i(),
      instanceOf: re,
      node: be(),
      objectOf: he,
      oneOf: me,
      oneOfType: ue,
      shape: fe,
      exact: K
    };
    function B(t, s) {
      return t === s ? t !== 0 || 1 / t === 1 / s : t !== t && s !== s;
    }
    function M(t, s) {
      this.message = t, this.data = s && typeof s == "object" ? s : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function z(t) {
      if (process.env.NODE_ENV !== "production")
        var s = {}, E = 0;
      function g(w, h, b, R, j, S, J) {
        if (R = R || D, S = S || b, J !== v) {
          if (y) {
            var a = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw a.name = "Invariant Violation", a;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Z = R + ":" + b;
            !s[Z] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (u(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), s[Z] = !0, E++);
          }
        }
        return h[b] == null ? w ? h[b] === null ? new M("The " + j + " `" + S + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new M("The " + j + " `" + S + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : t(h, b, R, j, S);
      }
      var m = g.bind(null, !1);
      return m.isRequired = g.bind(null, !0), m;
    }
    function U(t) {
      function s(E, g, m, w, h, b) {
        var R = E[g], j = X(R);
        if (j !== t) {
          var S = ee(R);
          return new M(
            "Invalid " + w + " `" + h + "` of type " + ("`" + S + "` supplied to `" + m + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return z(s);
    }
    function Y() {
      return z(f);
    }
    function V(t) {
      function s(E, g, m, w, h) {
        if (typeof t != "function")
          return new M("Property `" + h + "` of component `" + m + "` has invalid PropType notation inside arrayOf.");
        var b = E[g];
        if (!Array.isArray(b)) {
          var R = X(b);
          return new M("Invalid " + w + " `" + h + "` of type " + ("`" + R + "` supplied to `" + m + "`, expected an array."));
        }
        for (var j = 0; j < b.length; j++) {
          var S = t(b, j, m, w, h + "[" + j + "]", v);
          if (S instanceof Error)
            return S;
        }
        return null;
      }
      return z(s);
    }
    function W() {
      function t(s, E, g, m, w) {
        var h = s[E];
        if (!d(h)) {
          var b = X(h);
          return new M("Invalid " + m + " `" + w + "` of type " + ("`" + b + "` supplied to `" + g + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(t);
    }
    function i() {
      function t(s, E, g, m, w) {
        var h = s[E];
        if (!o.isValidElementType(h)) {
          var b = X(h);
          return new M("Invalid " + m + " `" + w + "` of type " + ("`" + b + "` supplied to `" + g + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(t);
    }
    function re(t) {
      function s(E, g, m, w, h) {
        if (!(E[g] instanceof t)) {
          var b = t.name || D, R = le(E[g]);
          return new M("Invalid " + w + " `" + h + "` of type " + ("`" + R + "` supplied to `" + m + "`, expected ") + ("instance of `" + b + "`."));
        }
        return null;
      }
      return z(s);
    }
    function me(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? u(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : u("Invalid argument supplied to oneOf, expected an array.")), f;
      function s(E, g, m, w, h) {
        for (var b = E[g], R = 0; R < t.length; R++)
          if (B(b, t[R]))
            return null;
        var j = JSON.stringify(t, function(J, a) {
          var Z = ee(a);
          return Z === "symbol" ? String(a) : a;
        });
        return new M("Invalid " + w + " `" + h + "` of value `" + String(b) + "` " + ("supplied to `" + m + "`, expected one of " + j + "."));
      }
      return z(s);
    }
    function he(t) {
      function s(E, g, m, w, h) {
        if (typeof t != "function")
          return new M("Property `" + h + "` of component `" + m + "` has invalid PropType notation inside objectOf.");
        var b = E[g], R = X(b);
        if (R !== "object")
          return new M("Invalid " + w + " `" + h + "` of type " + ("`" + R + "` supplied to `" + m + "`, expected an object."));
        for (var j in b)
          if (c(b, j)) {
            var S = t(b, j, m, w, h + "." + j, v);
            if (S instanceof Error)
              return S;
          }
        return null;
      }
      return z(s);
    }
    function ue(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && u("Invalid argument supplied to oneOfType, expected an instance of array."), f;
      for (var s = 0; s < t.length; s++) {
        var E = t[s];
        if (typeof E != "function")
          return u(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ae(E) + " at index " + s + "."
          ), f;
      }
      function g(m, w, h, b, R) {
        for (var j = [], S = 0; S < t.length; S++) {
          var J = t[S], a = J(m, w, h, b, R, v);
          if (a == null)
            return null;
          a.data && c(a.data, "expectedType") && j.push(a.data.expectedType);
        }
        var Z = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new M("Invalid " + b + " `" + R + "` supplied to " + ("`" + h + "`" + Z + "."));
      }
      return z(g);
    }
    function be() {
      function t(s, E, g, m, w) {
        return H(s[E]) ? null : new M("Invalid " + m + " `" + w + "` supplied to " + ("`" + g + "`, expected a ReactNode."));
      }
      return z(t);
    }
    function ce(t, s, E, g, m) {
      return new M(
        (t || "React class") + ": " + s + " type `" + E + "." + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + m + "`."
      );
    }
    function fe(t) {
      function s(E, g, m, w, h) {
        var b = E[g], R = X(b);
        if (R !== "object")
          return new M("Invalid " + w + " `" + h + "` of type `" + R + "` " + ("supplied to `" + m + "`, expected `object`."));
        for (var j in t) {
          var S = t[j];
          if (typeof S != "function")
            return ce(m, w, h, j, ee(S));
          var J = S(b, j, m, w, h + "." + j, v);
          if (J)
            return J;
        }
        return null;
      }
      return z(s);
    }
    function K(t) {
      function s(E, g, m, w, h) {
        var b = E[g], R = X(b);
        if (R !== "object")
          return new M("Invalid " + w + " `" + h + "` of type `" + R + "` " + ("supplied to `" + m + "`, expected `object`."));
        var j = I({}, E[g], t);
        for (var S in j) {
          var J = t[S];
          if (c(t, S) && typeof J != "function")
            return ce(m, w, h, S, ee(J));
          if (!J)
            return new M(
              "Invalid " + w + " `" + h + "` key `" + S + "` supplied to `" + m + "`.\nBad object: " + JSON.stringify(E[g], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var a = J(b, S, m, w, h + "." + S, v);
          if (a)
            return a;
        }
        return null;
      }
      return z(s);
    }
    function H(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(H);
          if (t === null || d(t))
            return !0;
          var s = _(t);
          if (s) {
            var E = s.call(t), g;
            if (s !== t.entries) {
              for (; !(g = E.next()).done; )
                if (!H(g.value))
                  return !1;
            } else
              for (; !(g = E.next()).done; ) {
                var m = g.value;
                if (m && !H(m[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(t, s) {
      return t === "symbol" ? !0 : s ? s["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && s instanceof Symbol : !1;
    }
    function X(t) {
      var s = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : te(s, t) ? "symbol" : s;
    }
    function ee(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var s = X(t);
      if (s === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return s;
    }
    function ae(t) {
      var s = ee(t);
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
    function le(t) {
      return !t.constructor || !t.constructor.name ? D : t.constructor.name;
    }
    return N.checkPropTypes = T, N.resetWarningCache = T.resetWarningCache, N.PropTypes = N, N;
  }, ke;
}
var De, ur;
function Vr() {
  if (ur)
    return De;
  ur = 1;
  var o = Ne();
  function I() {
  }
  function v() {
  }
  return v.resetWarningCache = I, De = function() {
    function c(f, d, y, P, p, _) {
      if (_ !== o) {
        var D = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw D.name = "Invariant Violation", D;
      }
    }
    c.isRequired = c;
    function T() {
      return c;
    }
    var u = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: T,
      element: c,
      elementType: c,
      instanceOf: T,
      node: c,
      objectOf: T,
      oneOf: T,
      oneOfType: T,
      shape: T,
      exact: T,
      checkPropTypes: v,
      resetWarningCache: I
    };
    return u.PropTypes = u, u;
  }, De;
}
if (process.env.NODE_ENV !== "production") {
  var zr = dr(), Br = !0;
  Me.exports = Ur()(zr.isElement, Br);
} else
  Me.exports = Vr()();
var Jr = Me.exports;
const ie = /* @__PURE__ */ Fr(Jr), ye = ({ ...o }) => {
  const [I, v] = Dr(o);
  return /* @__PURE__ */ x.jsxs("div", { className: `form-control ${v.touched && v.error}`, children: [
    /* @__PURE__ */ x.jsx("div", { className: "input-container", children: /* @__PURE__ */ x.jsx("input", { className: "input", ...I, ...o }) }),
    v.touched && v.error ? /* @__PURE__ */ x.jsx("div", { className: "form-error", children: v.error }) : null
  ] });
};
ye.propTypes = {
  id: ie.string.isRequired,
  name: ie.string.isRequired,
  value: ie.string,
  type: ie.oneOf(["text", "email", "password", "number"]),
  required: ie.bool,
  pattern: ie.string,
  placeholder: ie.string
};
function Gr({
  className: o,
  onSignIn: I,
  serverError: v,
  loading: c,
  validationSchema: T,
  initalValues: u
}) {
  return /* @__PURE__ */ x.jsx(
    fr,
    {
      initialValues: u || {
        username: "",
        password: ""
      },
      validationSchema: T || se.object({
        username: se.string().max(15, "must be 15 characters or less").required("required"),
        password: se.string().max(6, "must be 6 characters or less").required("required")
      }),
      onSubmit: (f) => {
        I(f);
      },
      children: (f) => /* @__PURE__ */ x.jsxs(lr, { className: o, onSubmit: f.handleSubmit, children: [
        /* @__PURE__ */ x.jsx("p", { className: "typography --h4", children: "Sign in" }),
        /* @__PURE__ */ x.jsx(
          ye,
          {
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Username",
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ x.jsx(
          ye,
          {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Password",
            autoComplete: "current-password"
          }
        ),
        v && /* @__PURE__ */ x.jsx("div", { className: "server-form-error", children: v }),
        c ? /* @__PURE__ */ x.jsx("button", { className: "button --secondary", type: "submit", disabled: !0, children: "Loading..." }) : /* @__PURE__ */ x.jsx(
          "button",
          {
            className: "button --secondary",
            type: "submit",
            disabled: !f.isValid,
            children: "Sign in"
          }
        )
      ] })
    }
  );
}
function Hr({
  className: o,
  onSignUp: I,
  serverError: v,
  loading: c,
  validationSchema: T,
  initalValues: u
}) {
  return /* @__PURE__ */ x.jsx(
    fr,
    {
      initialValues: u || {
        username: "",
        email: "",
        password: ""
      },
      validationSchema: T || se.object({
        username: se.string().max(15, "must be 15 characters or less").required("required"),
        email: se.string().email("invalid email address").required("required"),
        password: se.string().max(6, "must be 6 characters or less").required("required")
      }),
      onSubmit: (f) => {
        I(f);
      },
      children: (f) => /* @__PURE__ */ x.jsxs(lr, { className: o, onSubmit: f.handleSubmit, children: [
        /* @__PURE__ */ x.jsx("p", { className: "typography --h4", children: "Create Account" }),
        /* @__PURE__ */ x.jsx(
          ye,
          {
            id: "username",
            name: "username",
            type: "text",
            placeholder: "Username",
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ x.jsx(
          ye,
          {
            id: "email",
            name: "email",
            type: "email",
            placeholder: "Email",
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ x.jsx(
          ye,
          {
            id: "password",
            name: "password",
            type: "password",
            placeholder: "Password",
            autoComplete: "new-password"
          }
        ),
        v && /* @__PURE__ */ x.jsx("div", { className: "server-form-error", children: v }),
        c ? /* @__PURE__ */ x.jsx("button", { className: "button --secondary", type: "submit", disabled: !0, children: "Loading..." }) : /* @__PURE__ */ x.jsx(
          "button",
          {
            className: "button --secondary",
            type: "submit",
            disabled: !f.isValid,
            children: "Sign up"
          }
        )
      ] })
    }
  );
}
const Zr = ({
  onSignUp: o,
  onSignIn: I,
  serverError: v,
  loading: c = !1,
  validationSchema: T,
  initalValues: u
}) => {
  const [f, d] = kr(!1), y = () => {
    d((P) => !P);
  };
  return /* @__PURE__ */ x.jsx("div", { className: "wrapper", children: /* @__PURE__ */ x.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ x.jsx(
      "div",
      {
        className: `form-container --signup ${f ? "" : "--signup-inactive"}`,
        children: /* @__PURE__ */ x.jsx(
          Hr,
          {
            className: "form",
            onSignUp: o,
            serverError: v,
            loading: c,
            validationSchema: T,
            initalValues: u
          }
        )
      }
    ),
    /* @__PURE__ */ x.jsx(
      "div",
      {
        className: `form-container --signin ${f ? "--signin-inactive" : ""}`,
        children: /* @__PURE__ */ x.jsx(
          Gr,
          {
            className: "form",
            onSignIn: I,
            serverError: v,
            loading: c,
            validationSchema: T,
            initalValues: u
          }
        )
      }
    ),
    /* @__PURE__ */ x.jsx("div", { className: `overlay-container ${f ? "--signup-active" : ""}`, children: /* @__PURE__ */ x.jsx("div", { className: `overlay ${f ? "--signup-active" : ""}`, children: f ? /* @__PURE__ */ x.jsxs("div", { className: "overlay-panel --left --signup-active", children: [
      /* @__PURE__ */ x.jsx("p", { className: "typography --h4 --white", children: "Register now!" }),
      /* @__PURE__ */ x.jsx("p", { className: "typography --body --white", children: "Enter your personal details" }),
      /* @__PURE__ */ x.jsx("button", { className: "button --transparent", onClick: y, children: "Sign In" })
    ] }) : /* @__PURE__ */ x.jsxs("div", { className: "overlay-panel --right", children: [
      /* @__PURE__ */ x.jsx("p", { className: "typography --h4 --white", children: "Welcome Back!" }),
      /* @__PURE__ */ x.jsx("p", { className: "typography --body --white", children: "Please login with your personal info" }),
      /* @__PURE__ */ x.jsx("button", { className: "button --transparent", onClick: y, children: "Sign Up" })
    ] }) }) })
  ] }) });
};
export {
  Zr as AuthForm
};
