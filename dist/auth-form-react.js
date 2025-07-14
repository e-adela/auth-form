import fr, { useState as Mr } from "react";
import { useField as Yr, Formik as lr, Form as dr } from "formik";
import * as ue from "yup";
import './index.css';function qr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Fe = { exports: {} }, Te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qe;
function Nr() {
  if (Qe) return Te;
  Qe = 1;
  var a = fr, A = Symbol.for("react.element"), v = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, T = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, y, P) {
    var p, _ = {}, D = null, Y = null;
    P !== void 0 && (D = "" + P), y.key !== void 0 && (D = "" + y.key), y.ref !== void 0 && (Y = y.ref);
    for (p in y) c.call(y, p) && !u.hasOwnProperty(p) && (_[p] = y[p]);
    if (d && d.defaultProps) for (p in y = d.defaultProps, y) _[p] === void 0 && (_[p] = y[p]);
    return { $$typeof: A, type: d, key: D, ref: Y, props: _, _owner: T.current };
  }
  return Te.Fragment = v, Te.jsx = f, Te.jsxs = f, Te;
}
var _e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Wr() {
  return er || (er = 1, process.env.NODE_ENV !== "production" && function() {
    var a = fr, A = Symbol.for("react.element"), v = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), T = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), Y = Symbol.for("react.offscreen"), B = Symbol.iterator, M = "@@iterator";
    function z(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = B && e[B] || e[M];
      return typeof r == "function" ? r : null;
    }
    var U = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function q(e) {
      {
        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
          o[l - 1] = arguments[l];
        V("error", e, o);
      }
    }
    function V(e, r, o) {
      {
        var l = U.ReactDebugCurrentFrame, I = l.getStackAddendum();
        I !== "" && (r += "%s", o = o.concat([I]));
        var F = o.map(function(C) {
          return String(C);
        });
        F.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, F);
      }
    }
    var W = !1, i = !1, te = !1, he = !1, be = !1, ce;
    ce = Symbol.for("react.module.reference");
    function ge(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === u || be || e === T || e === P || e === p || he || e === Y || W || i || te || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === _ || e.$$typeof === f || e.$$typeof === d || e.$$typeof === y || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ce || e.getModuleId !== void 0));
    }
    function fe(e, r, o) {
      var l = e.displayName;
      if (l)
        return l;
      var I = r.displayName || r.name || "";
      return I !== "" ? o + "(" + I + ")" : o;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function Z(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && q("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
            return le(r) + ".Consumer";
          case f:
            var o = e;
            return le(o._context) + ".Provider";
          case y:
            return fe(e, e.render, "ForwardRef");
          case _:
            var l = e.displayName || null;
            return l !== null ? l : Z(e.type) || "Memo";
          case D: {
            var I = e, F = I._payload, C = I._init;
            try {
              return Z(C(F));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, ne = 0, H, re, ae, de, t, s, E;
    function g() {
    }
    g.__reactDisabledLog = !0;
    function m() {
      {
        if (ne === 0) {
          H = console.log, re = console.info, ae = console.warn, de = console.error, t = console.group, s = console.groupCollapsed, E = console.groupEnd;
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
        ne++;
      }
    }
    function w() {
      {
        if (ne--, ne === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, e, {
              value: H
            }),
            info: G({}, e, {
              value: re
            }),
            warn: G({}, e, {
              value: ae
            }),
            error: G({}, e, {
              value: de
            }),
            group: G({}, e, {
              value: t
            }),
            groupCollapsed: G({}, e, {
              value: s
            }),
            groupEnd: G({}, e, {
              value: E
            })
          });
        }
        ne < 0 && q("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var h = U.ReactCurrentDispatcher, b;
    function R(e, r, o) {
      {
        if (b === void 0)
          try {
            throw Error();
          } catch (I) {
            var l = I.stack.trim().match(/\n( *(at )?)/);
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
    function n(e, r) {
      if (!e || j)
        return "";
      {
        var o = S.get(e);
        if (o !== void 0)
          return o;
      }
      var l;
      j = !0;
      var I = Error.prepareStackTrace;
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
            } catch (X) {
              l = X;
            }
            Reflect.construct(e, [], C);
          } else {
            try {
              C.call();
            } catch (X) {
              l = X;
            }
            e.call(C.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (X) {
            l = X;
          }
          e();
        }
      } catch (X) {
        if (X && l && typeof X.stack == "string") {
          for (var O = X.stack.split(`
`), K = l.stack.split(`
`), N = O.length - 1, L = K.length - 1; N >= 1 && L >= 0 && O[N] !== K[L]; )
            L--;
          for (; N >= 1 && L >= 0; N--, L--)
            if (O[N] !== K[L]) {
              if (N !== 1 || L !== 1)
                do
                  if (N--, L--, L < 0 || O[N] !== K[L]) {
                    var ee = `
` + O[N].replace(" at new ", " at ");
                    return e.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", e.displayName)), typeof e == "function" && S.set(e, ee), ee;
                  }
                while (N >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        j = !1, h.current = F, w(), Error.prepareStackTrace = I;
      }
      var ye = e ? e.displayName || e.name : "", ie = ye ? R(ye) : "";
      return typeof e == "function" && S.set(e, ie), ie;
    }
    function Q(e, r, o) {
      return n(e, !1);
    }
    function pe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function oe(e, r, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return n(e, pe(e));
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
            return Q(e.render);
          case _:
            return oe(e.type, r, o);
          case D: {
            var l = e, I = l._payload, F = l._init;
            try {
              return oe(F(I), r, o);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, qe = {}, Ne = U.ReactDebugCurrentFrame;
    function Re(e) {
      if (e) {
        var r = e._owner, o = oe(e.type, e._source, r ? r.type : null);
        Ne.setExtraStackFrame(o);
      } else
        Ne.setExtraStackFrame(null);
    }
    function yr(e, r, o, l, I) {
      {
        var F = Function.call.bind(Ee);
        for (var C in e)
          if (F(e, C)) {
            var O = void 0;
            try {
              if (typeof e[C] != "function") {
                var K = Error((l || "React class") + ": " + o + " type `" + C + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[C] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw K.name = "Invariant Violation", K;
              }
              O = e[C](r, C, l, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              O = N;
            }
            O && !(O instanceof Error) && (Re(I), q("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", l || "React class", o, C, typeof O), Re(null)), O instanceof Error && !(O.message in qe) && (qe[O.message] = !0, Re(I), q("Failed %s type: %s", o, O.message), Re(null));
          }
      }
    }
    var mr = Array.isArray;
    function xe(e) {
      return mr(e);
    }
    function hr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, o = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function br(e) {
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
      if (br(e))
        return q("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(e)), We(e);
    }
    var Ue = U.ReactCurrentOwner, gr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, ze;
    function Er(e) {
      if (Ee.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Tr(e) {
      if (Ee.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function _r(e, r) {
      typeof e.ref == "string" && Ue.current;
    }
    function Rr(e, r) {
      {
        var o = function() {
          Ve || (Ve = !0, q("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function Sr(e, r) {
      {
        var o = function() {
          ze || (ze = !0, q("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var xr = function(e, r, o, l, I, F, C) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: A,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: o,
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
        value: I
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function Or(e, r, o, l, I) {
      {
        var F, C = {}, O = null, K = null;
        o !== void 0 && (Le(o), O = "" + o), Tr(r) && (Le(r.key), O = "" + r.key), Er(r) && (K = r.ref, _r(r, I));
        for (F in r)
          Ee.call(r, F) && !gr.hasOwnProperty(F) && (C[F] = r[F]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (F in N)
            C[F] === void 0 && (C[F] = N[F]);
        }
        if (O || K) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          O && Rr(C, L), K && Sr(C, L);
        }
        return xr(e, O, K, I, l, Ue.current, C);
      }
    }
    var Oe = U.ReactCurrentOwner, Be = U.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var r = e._owner, o = oe(e.type, e._source, r ? r.type : null);
        Be.setExtraStackFrame(o);
      } else
        Be.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function we(e) {
      return typeof e == "object" && e !== null && e.$$typeof === A;
    }
    function Je() {
      {
        if (Oe.current) {
          var e = Z(Oe.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Pr(e) {
      return "";
    }
    var Ke = {};
    function wr(e) {
      {
        var r = Je();
        if (!r) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (r = `

Check the top-level render call using <` + o + ">.");
        }
        return r;
      }
    }
    function Ge(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = wr(r);
        if (Ke[o])
          return;
        Ke[o] = !0;
        var l = "";
        e && e._owner && e._owner !== Oe.current && (l = " It was passed a child from " + Z(e._owner.type) + "."), ve(e), q('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, l), ve(null);
      }
    }
    function Xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (xe(e))
          for (var o = 0; o < e.length; o++) {
            var l = e[o];
            we(l) && Ge(l, r);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var I = z(e);
          if (typeof I == "function" && I !== e.entries)
            for (var F = I.call(e), C; !(C = F.next()).done; )
              we(C.value) && Ge(C.value, r);
        }
      }
    }
    function Cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var o;
        if (typeof r == "function")
          o = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === y || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          o = r.propTypes;
        else
          return;
        if (o) {
          var l = Z(r);
          yr(o, e.props, "prop", l, e);
        } else if (r.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var I = Z(r);
          q("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", I || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && q("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(e) {
      {
        for (var r = Object.keys(e.props), o = 0; o < r.length; o++) {
          var l = r[o];
          if (l !== "children" && l !== "key") {
            ve(e), q("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", l), ve(null);
            break;
          }
        }
        e.ref !== null && (ve(e), q("Invalid attribute `ref` supplied to `React.Fragment`."), ve(null));
      }
    }
    var He = {};
    function Ze(e, r, o, l, I, F) {
      {
        var C = ge(e);
        if (!C) {
          var O = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var K = Pr();
          K ? O += K : O += Je();
          var N;
          e === null ? N = "null" : xe(e) ? N = "array" : e !== void 0 && e.$$typeof === A ? (N = "<" + (Z(e.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, q("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, O);
        }
        var L = Or(e, r, o, I, F);
        if (L == null)
          return L;
        if (C) {
          var ee = r.children;
          if (ee !== void 0)
            if (l)
              if (xe(ee)) {
                for (var ye = 0; ye < ee.length; ye++)
                  Xe(ee[ye], e);
                Object.freeze && Object.freeze(ee);
              } else
                q("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Xe(ee, e);
        }
        if (Ee.call(r, "key")) {
          var ie = Z(e), X = Object.keys(r).filter(function(Fr) {
            return Fr !== "key";
          }), Ce = X.length > 0 ? "{key: someKey, " + X.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[ie + Ce]) {
            var Dr = X.length > 0 ? "{" + X.join(": ..., ") + ": ...}" : "{}";
            q(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ce, ie, Dr, ie), He[ie + Ce] = !0;
          }
        }
        return e === c ? jr(L) : Cr(L), L;
      }
    }
    function Ar(e, r, o) {
      return Ze(e, r, o, !0);
    }
    function Ir(e, r, o) {
      return Ze(e, r, o, !1);
    }
    var $r = Ir, kr = Ar;
    _e.Fragment = c, _e.jsx = $r, _e.jsxs = kr;
  }()), _e;
}
process.env.NODE_ENV === "production" ? Fe.exports = Nr() : Fe.exports = Wr();
var x = Fe.exports, Me = { exports: {} }, Se = { exports: {} }, $ = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function Lr() {
  if (rr) return $;
  rr = 1;
  var a = typeof Symbol == "function" && Symbol.for, A = a ? Symbol.for("react.element") : 60103, v = a ? Symbol.for("react.portal") : 60106, c = a ? Symbol.for("react.fragment") : 60107, T = a ? Symbol.for("react.strict_mode") : 60108, u = a ? Symbol.for("react.profiler") : 60114, f = a ? Symbol.for("react.provider") : 60109, d = a ? Symbol.for("react.context") : 60110, y = a ? Symbol.for("react.async_mode") : 60111, P = a ? Symbol.for("react.concurrent_mode") : 60111, p = a ? Symbol.for("react.forward_ref") : 60112, _ = a ? Symbol.for("react.suspense") : 60113, D = a ? Symbol.for("react.suspense_list") : 60120, Y = a ? Symbol.for("react.memo") : 60115, B = a ? Symbol.for("react.lazy") : 60116, M = a ? Symbol.for("react.block") : 60121, z = a ? Symbol.for("react.fundamental") : 60117, U = a ? Symbol.for("react.responder") : 60118, q = a ? Symbol.for("react.scope") : 60119;
  function V(i) {
    if (typeof i == "object" && i !== null) {
      var te = i.$$typeof;
      switch (te) {
        case A:
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
                case Y:
                case f:
                  return i;
                default:
                  return te;
              }
          }
        case v:
          return te;
      }
    }
  }
  function W(i) {
    return V(i) === P;
  }
  return $.AsyncMode = y, $.ConcurrentMode = P, $.ContextConsumer = d, $.ContextProvider = f, $.Element = A, $.ForwardRef = p, $.Fragment = c, $.Lazy = B, $.Memo = Y, $.Portal = v, $.Profiler = u, $.StrictMode = T, $.Suspense = _, $.isAsyncMode = function(i) {
    return W(i) || V(i) === y;
  }, $.isConcurrentMode = W, $.isContextConsumer = function(i) {
    return V(i) === d;
  }, $.isContextProvider = function(i) {
    return V(i) === f;
  }, $.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === A;
  }, $.isForwardRef = function(i) {
    return V(i) === p;
  }, $.isFragment = function(i) {
    return V(i) === c;
  }, $.isLazy = function(i) {
    return V(i) === B;
  }, $.isMemo = function(i) {
    return V(i) === Y;
  }, $.isPortal = function(i) {
    return V(i) === v;
  }, $.isProfiler = function(i) {
    return V(i) === u;
  }, $.isStrictMode = function(i) {
    return V(i) === T;
  }, $.isSuspense = function(i) {
    return V(i) === _;
  }, $.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === c || i === P || i === u || i === T || i === _ || i === D || typeof i == "object" && i !== null && (i.$$typeof === B || i.$$typeof === Y || i.$$typeof === f || i.$$typeof === d || i.$$typeof === p || i.$$typeof === z || i.$$typeof === U || i.$$typeof === q || i.$$typeof === M);
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
var tr;
function Ur() {
  return tr || (tr = 1, process.env.NODE_ENV !== "production" && function() {
    var a = typeof Symbol == "function" && Symbol.for, A = a ? Symbol.for("react.element") : 60103, v = a ? Symbol.for("react.portal") : 60106, c = a ? Symbol.for("react.fragment") : 60107, T = a ? Symbol.for("react.strict_mode") : 60108, u = a ? Symbol.for("react.profiler") : 60114, f = a ? Symbol.for("react.provider") : 60109, d = a ? Symbol.for("react.context") : 60110, y = a ? Symbol.for("react.async_mode") : 60111, P = a ? Symbol.for("react.concurrent_mode") : 60111, p = a ? Symbol.for("react.forward_ref") : 60112, _ = a ? Symbol.for("react.suspense") : 60113, D = a ? Symbol.for("react.suspense_list") : 60120, Y = a ? Symbol.for("react.memo") : 60115, B = a ? Symbol.for("react.lazy") : 60116, M = a ? Symbol.for("react.block") : 60121, z = a ? Symbol.for("react.fundamental") : 60117, U = a ? Symbol.for("react.responder") : 60118, q = a ? Symbol.for("react.scope") : 60119;
    function V(n) {
      return typeof n == "string" || typeof n == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      n === c || n === P || n === u || n === T || n === _ || n === D || typeof n == "object" && n !== null && (n.$$typeof === B || n.$$typeof === Y || n.$$typeof === f || n.$$typeof === d || n.$$typeof === p || n.$$typeof === z || n.$$typeof === U || n.$$typeof === q || n.$$typeof === M);
    }
    function W(n) {
      if (typeof n == "object" && n !== null) {
        var Q = n.$$typeof;
        switch (Q) {
          case A:
            var pe = n.type;
            switch (pe) {
              case y:
              case P:
              case c:
              case u:
              case T:
              case _:
                return pe;
              default:
                var oe = pe && pe.$$typeof;
                switch (oe) {
                  case d:
                  case p:
                  case B:
                  case Y:
                  case f:
                    return oe;
                  default:
                    return Q;
                }
            }
          case v:
            return Q;
        }
      }
    }
    var i = y, te = P, he = d, be = f, ce = A, ge = p, fe = c, le = B, Z = Y, G = v, ne = u, H = T, re = _, ae = !1;
    function de(n) {
      return ae || (ae = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(n) || W(n) === y;
    }
    function t(n) {
      return W(n) === P;
    }
    function s(n) {
      return W(n) === d;
    }
    function E(n) {
      return W(n) === f;
    }
    function g(n) {
      return typeof n == "object" && n !== null && n.$$typeof === A;
    }
    function m(n) {
      return W(n) === p;
    }
    function w(n) {
      return W(n) === c;
    }
    function h(n) {
      return W(n) === B;
    }
    function b(n) {
      return W(n) === Y;
    }
    function R(n) {
      return W(n) === v;
    }
    function j(n) {
      return W(n) === u;
    }
    function S(n) {
      return W(n) === T;
    }
    function J(n) {
      return W(n) === _;
    }
    k.AsyncMode = i, k.ConcurrentMode = te, k.ContextConsumer = he, k.ContextProvider = be, k.Element = ce, k.ForwardRef = ge, k.Fragment = fe, k.Lazy = le, k.Memo = Z, k.Portal = G, k.Profiler = ne, k.StrictMode = H, k.Suspense = re, k.isAsyncMode = de, k.isConcurrentMode = t, k.isContextConsumer = s, k.isContextProvider = E, k.isElement = g, k.isForwardRef = m, k.isFragment = w, k.isLazy = h, k.isMemo = b, k.isPortal = R, k.isProfiler = j, k.isStrictMode = S, k.isSuspense = J, k.isValidElementType = V, k.typeOf = W;
  }()), k;
}
var nr;
function pr() {
  return nr || (nr = 1, process.env.NODE_ENV === "production" ? Se.exports = Lr() : Se.exports = Ur()), Se.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var je, ar;
function Vr() {
  if (ar) return je;
  ar = 1;
  var a = Object.getOwnPropertySymbols, A = Object.prototype.hasOwnProperty, v = Object.prototype.propertyIsEnumerable;
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
        A.call(d, _) && (y[_] = d[_]);
      if (a) {
        P = a(d);
        for (var D = 0; D < P.length; D++)
          v.call(d, P[D]) && (y[P[D]] = d[P[D]]);
      }
    }
    return y;
  }, je;
}
var Ae, or;
function Ye() {
  if (or) return Ae;
  or = 1;
  var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ae = a, Ae;
}
var Ie, ir;
function vr() {
  return ir || (ir = 1, Ie = Function.call.bind(Object.prototype.hasOwnProperty)), Ie;
}
var $e, sr;
function zr() {
  if (sr) return $e;
  sr = 1;
  var a = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var A = Ye(), v = {}, c = vr();
    a = function(u) {
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
            _ = u[p](f, p, y, d, null, A);
          } catch (B) {
            _ = B;
          }
          if (_ && !(_ instanceof Error) && a(
            (y || "React class") + ": type specification of " + d + " `" + p + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof _ + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), _ instanceof Error && !(_.message in v)) {
            v[_.message] = !0;
            var Y = P ? P() : "";
            a(
              "Failed " + d + " type: " + _.message + (Y ?? "")
            );
          }
        }
    }
  }
  return T.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (v = {});
  }, $e = T, $e;
}
var ke, ur;
function Br() {
  if (ur) return ke;
  ur = 1;
  var a = pr(), A = Vr(), v = Ye(), c = vr(), T = zr(), u = function() {
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
    var D = "<<anonymous>>", Y = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: q(),
      arrayOf: V,
      element: W(),
      elementType: i(),
      instanceOf: te,
      node: ge(),
      objectOf: be,
      oneOf: he,
      oneOfType: ce,
      shape: le,
      exact: Z
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
            var n = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw n.name = "Invariant Violation", n;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Q = R + ":" + b;
            !s[Q] && // Avoid spamming the console because they are often not actionable except for lib authors
            E < 3 && (u(
              "You are manually calling a React.PropTypes validation function for the `" + S + "` prop on `" + R + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), s[Q] = !0, E++);
          }
        }
        return h[b] == null ? w ? h[b] === null ? new M("The " + j + " `" + S + "` is marked as required " + ("in `" + R + "`, but its value is `null`.")) : new M("The " + j + " `" + S + "` is marked as required in " + ("`" + R + "`, but its value is `undefined`.")) : null : t(h, b, R, j, S);
      }
      var m = g.bind(null, !1);
      return m.isRequired = g.bind(null, !0), m;
    }
    function U(t) {
      function s(E, g, m, w, h, b) {
        var R = E[g], j = H(R);
        if (j !== t) {
          var S = re(R);
          return new M(
            "Invalid " + w + " `" + h + "` of type " + ("`" + S + "` supplied to `" + m + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return z(s);
    }
    function q() {
      return z(f);
    }
    function V(t) {
      function s(E, g, m, w, h) {
        if (typeof t != "function")
          return new M("Property `" + h + "` of component `" + m + "` has invalid PropType notation inside arrayOf.");
        var b = E[g];
        if (!Array.isArray(b)) {
          var R = H(b);
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
          var b = H(h);
          return new M("Invalid " + m + " `" + w + "` of type " + ("`" + b + "` supplied to `" + g + "`, expected a single ReactElement."));
        }
        return null;
      }
      return z(t);
    }
    function i() {
      function t(s, E, g, m, w) {
        var h = s[E];
        if (!a.isValidElementType(h)) {
          var b = H(h);
          return new M("Invalid " + m + " `" + w + "` of type " + ("`" + b + "` supplied to `" + g + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return z(t);
    }
    function te(t) {
      function s(E, g, m, w, h) {
        if (!(E[g] instanceof t)) {
          var b = t.name || D, R = de(E[g]);
          return new M("Invalid " + w + " `" + h + "` of type " + ("`" + R + "` supplied to `" + m + "`, expected ") + ("instance of `" + b + "`."));
        }
        return null;
      }
      return z(s);
    }
    function he(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? u(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : u("Invalid argument supplied to oneOf, expected an array.")), f;
      function s(E, g, m, w, h) {
        for (var b = E[g], R = 0; R < t.length; R++)
          if (B(b, t[R]))
            return null;
        var j = JSON.stringify(t, function(J, n) {
          var Q = re(n);
          return Q === "symbol" ? String(n) : n;
        });
        return new M("Invalid " + w + " `" + h + "` of value `" + String(b) + "` " + ("supplied to `" + m + "`, expected one of " + j + "."));
      }
      return z(s);
    }
    function be(t) {
      function s(E, g, m, w, h) {
        if (typeof t != "function")
          return new M("Property `" + h + "` of component `" + m + "` has invalid PropType notation inside objectOf.");
        var b = E[g], R = H(b);
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
    function ce(t) {
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
          var J = t[S], n = J(m, w, h, b, R, v);
          if (n == null)
            return null;
          n.data && c(n.data, "expectedType") && j.push(n.data.expectedType);
        }
        var Q = j.length > 0 ? ", expected one of type [" + j.join(", ") + "]" : "";
        return new M("Invalid " + b + " `" + R + "` supplied to " + ("`" + h + "`" + Q + "."));
      }
      return z(g);
    }
    function ge() {
      function t(s, E, g, m, w) {
        return G(s[E]) ? null : new M("Invalid " + m + " `" + w + "` supplied to " + ("`" + g + "`, expected a ReactNode."));
      }
      return z(t);
    }
    function fe(t, s, E, g, m) {
      return new M(
        (t || "React class") + ": " + s + " type `" + E + "." + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + m + "`."
      );
    }
    function le(t) {
      function s(E, g, m, w, h) {
        var b = E[g], R = H(b);
        if (R !== "object")
          return new M("Invalid " + w + " `" + h + "` of type `" + R + "` " + ("supplied to `" + m + "`, expected `object`."));
        for (var j in t) {
          var S = t[j];
          if (typeof S != "function")
            return fe(m, w, h, j, re(S));
          var J = S(b, j, m, w, h + "." + j, v);
          if (J)
            return J;
        }
        return null;
      }
      return z(s);
    }
    function Z(t) {
      function s(E, g, m, w, h) {
        var b = E[g], R = H(b);
        if (R !== "object")
          return new M("Invalid " + w + " `" + h + "` of type `" + R + "` " + ("supplied to `" + m + "`, expected `object`."));
        var j = A({}, E[g], t);
        for (var S in j) {
          var J = t[S];
          if (c(t, S) && typeof J != "function")
            return fe(m, w, h, S, re(J));
          if (!J)
            return new M(
              "Invalid " + w + " `" + h + "` key `" + S + "` supplied to `" + m + "`.\nBad object: " + JSON.stringify(E[g], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var n = J(b, S, m, w, h + "." + S, v);
          if (n)
            return n;
        }
        return null;
      }
      return z(s);
    }
    function G(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(G);
          if (t === null || d(t))
            return !0;
          var s = _(t);
          if (s) {
            var E = s.call(t), g;
            if (s !== t.entries) {
              for (; !(g = E.next()).done; )
                if (!G(g.value))
                  return !1;
            } else
              for (; !(g = E.next()).done; ) {
                var m = g.value;
                if (m && !G(m[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ne(t, s) {
      return t === "symbol" ? !0 : s ? s["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && s instanceof Symbol : !1;
    }
    function H(t) {
      var s = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : ne(s, t) ? "symbol" : s;
    }
    function re(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var s = H(t);
      if (s === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return s;
    }
    function ae(t) {
      var s = re(t);
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
    function de(t) {
      return !t.constructor || !t.constructor.name ? D : t.constructor.name;
    }
    return Y.checkPropTypes = T, Y.resetWarningCache = T.resetWarningCache, Y.PropTypes = Y, Y;
  }, ke;
}
var De, cr;
function Jr() {
  if (cr) return De;
  cr = 1;
  var a = Ye();
  function A() {
  }
  function v() {
  }
  return v.resetWarningCache = A, De = function() {
    function c(f, d, y, P, p, _) {
      if (_ !== a) {
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
      resetWarningCache: A
    };
    return u.PropTypes = u, u;
  }, De;
}
if (process.env.NODE_ENV !== "production") {
  var Kr = pr(), Gr = !0;
  Me.exports = Br()(Kr.isElement, Gr);
} else
  Me.exports = Jr()();
var Xr = Me.exports;
const se = /* @__PURE__ */ qr(Xr), me = ({ ...a }) => {
  const [A, v] = Yr(a);
  return /* @__PURE__ */ x.jsxs("div", { className: `form-control ${v.touched && v.error}`, children: [
    /* @__PURE__ */ x.jsx("div", { className: "input-container", children: /* @__PURE__ */ x.jsx("input", { className: "input", ...A, ...a }) }),
    v.touched && v.error ? /* @__PURE__ */ x.jsx("div", { className: "form-error", children: v.error }) : null
  ] });
};
me.propTypes = {
  id: se.string.isRequired,
  name: se.string.isRequired,
  value: se.string,
  type: se.oneOf(["text", "email", "password", "number"]),
  required: se.bool,
  pattern: se.string,
  placeholder: se.string
};
function Hr({
  className: a,
  onSignIn: A,
  serverError: v,
  loading: c,
  validationSchema: T,
  initalValues: u
}) {
  return /* @__PURE__ */ x.jsx(
    lr,
    {
      initialValues: u || {
        username: "",
        password: ""
      },
      validationSchema: T || ue.object({
        username: ue.string().max(15, "must be 15 characters or less").required("required"),
        password: ue.string().max(6, "must be 6 characters or less").required("required")
      }),
      onSubmit: (f) => {
        A(f);
      },
      children: (f) => /* @__PURE__ */ x.jsxs(dr, { className: a, onSubmit: f.handleSubmit, children: [
        /* @__PURE__ */ x.jsx("p", { className: "typography --h4", children: "Sign in" }),
        /* @__PURE__ */ x.jsx(
          me,
          {
            id: "signin-username",
            name: "username",
            type: "text",
            placeholder: "Username",
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ x.jsx(
          me,
          {
            id: "signin-password",
            name: "password",
            type: "password",
            placeholder: "Password",
            autoComplete: "current-password"
          }
        ),
        v && /* @__PURE__ */ x.jsx("div", { className: "server-form-error", children: v }),
        c ? /* @__PURE__ */ x.jsx(
          "button",
          {
            className: "button --secondary",
            type: "submit",
            disabled: !0,
            children: "Loading..."
          }
        ) : /* @__PURE__ */ x.jsx(
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
function Zr({
  className: a,
  onSignUp: A,
  serverError: v,
  loading: c,
  validationSchema: T,
  initalValues: u
}) {
  return /* @__PURE__ */ x.jsx(
    lr,
    {
      initialValues: u || {
        username: "",
        email: "",
        password: ""
      },
      validationSchema: T || ue.object({
        username: ue.string().max(15, "must be 15 characters or less").required("required"),
        email: ue.string().email("invalid email address").required("required"),
        password: ue.string().max(6, "must be 6 characters or less").required("required")
      }),
      onSubmit: (f) => {
        A(f);
      },
      children: (f) => /* @__PURE__ */ x.jsxs(dr, { className: a, onSubmit: f.handleSubmit, children: [
        /* @__PURE__ */ x.jsx("p", { className: "typography --h4", children: "Create Account" }),
        /* @__PURE__ */ x.jsx(
          me,
          {
            id: "signup-username",
            name: "username",
            type: "text",
            placeholder: "Username",
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ x.jsx(
          me,
          {
            id: "signup-email",
            name: "email",
            type: "email",
            placeholder: "Email",
            autoComplete: "username"
          }
        ),
        /* @__PURE__ */ x.jsx(
          me,
          {
            id: "signup-password",
            name: "password",
            type: "password",
            placeholder: "Password",
            autoComplete: "new-password"
          }
        ),
        v && /* @__PURE__ */ x.jsx("div", { className: "server-form-error", children: v }),
        c ? /* @__PURE__ */ x.jsx(
          "button",
          {
            className: "button --secondary",
            type: "submit",
            disabled: !0,
            children: "Loading..."
          }
        ) : /* @__PURE__ */ x.jsx(
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
const rt = ({
  onSignUp: a,
  onSignIn: A,
  serverError: v,
  loading: c = !1,
  validationSchema: T,
  initalValues: u
}) => {
  const [f, d] = Mr(!1), y = () => {
    d((P) => !P);
  };
  return /* @__PURE__ */ x.jsx("div", { className: "wrapper", children: /* @__PURE__ */ x.jsxs("div", { className: "container", children: [
    /* @__PURE__ */ x.jsx(
      "div",
      {
        className: `form-container --signup ${f ? "" : "--signup-inactive"}`,
        children: /* @__PURE__ */ x.jsx(
          Zr,
          {
            className: "form",
            onSignUp: a,
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
          Hr,
          {
            className: "form",
            onSignIn: A,
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
        className: `overlay-container ${f ? "--signup-active" : ""}`,
        children: /* @__PURE__ */ x.jsx("div", { className: `overlay ${f ? "--signup-active" : ""}`, children: f ? /* @__PURE__ */ x.jsxs("div", { className: "overlay-panel --left --signup-active", children: [
          /* @__PURE__ */ x.jsx("p", { className: "typography --h4 --white", children: "Register now!" }),
          /* @__PURE__ */ x.jsx("p", { className: "typography --body --white", children: "Enter your personal details" }),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              className: "button --transparent",
              onClick: y,
              children: "Sign In"
            }
          )
        ] }) : /* @__PURE__ */ x.jsxs("div", { className: "overlay-panel --right", children: [
          /* @__PURE__ */ x.jsx("p", { className: "typography --h4 --white", children: "Welcome Back!" }),
          /* @__PURE__ */ x.jsx("p", { className: "typography --body --white", children: "Please login with your personal info" }),
          /* @__PURE__ */ x.jsx(
            "button",
            {
              className: "button --transparent",
              onClick: y,
              children: "Sign Up"
            }
          )
        ] }) })
      }
    )
  ] }) });
};
export {
  rt as AuthForm
};
