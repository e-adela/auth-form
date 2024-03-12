(function(ne,ae){typeof exports=="object"&&typeof module<"u"?ae(exports,require("react"),require("styled-components"),require("formik"),require("yup")):typeof define=="function"&&define.amd?define(["exports","react","styled-components","formik","yup"],ae):(ne=typeof globalThis<"u"?globalThis:ne||self,ae(ne["auth-form-react"]={},ne.React,ne.styled,ne.formik,ne.yup))})(this,function(ne,ae,F,xe,_r){"use strict";function Sr(r){const E=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(r){for(const c in r)if(c!=="default"){const u=Object.getOwnPropertyDescriptor(r,c);Object.defineProperty(E,c,u.get?u:{enumerable:!0,get:()=>r[c]})}}return E.default=r,Object.freeze(E)}const ue=Sr(_r);function wr(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ke={exports:{}},Re={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He;function Or(){if(He)return Re;He=1;var r=ae,E=Symbol.for("react.element"),c=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,f=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function O(p,h,j){var v,R={},M=null,U=null;j!==void 0&&(M=""+j),h.key!==void 0&&(M=""+h.key),h.ref!==void 0&&(U=h.ref);for(v in h)u.call(h,v)&&!d.hasOwnProperty(v)&&(R[v]=h[v]);if(p&&p.defaultProps)for(v in h=p.defaultProps,h)R[v]===void 0&&(R[v]=h[v]);return{$$typeof:E,type:p,key:M,ref:U,props:R,_owner:f.current}}return Re.Fragment=c,Re.jsx=O,Re.jsxs=O,Re}var _e={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Je;function Pr(){return Je||(Je=1,process.env.NODE_ENV!=="production"&&function(){var r=ae,E=Symbol.for("react.element"),c=Symbol.for("react.portal"),u=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),p=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),v=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),U=Symbol.for("react.offscreen"),J=Symbol.iterator,q="@@iterator";function H(e){if(e===null||typeof e!="object")return null;var t=J&&e[J]||e[q];return typeof t=="function"?t:null}var B=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function L(e){{for(var t=arguments.length,o=new Array(t>1?t-1:0),l=1;l<t;l++)o[l-1]=arguments[l];X("error",e,o)}}function X(e,t,o){{var l=B.ReactDebugCurrentFrame,A=l.getStackAddendum();A!==""&&(t+="%s",o=o.concat([A]));var W=o.map(function(C){return String(C)});W.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,W)}}var V=!1,i=!1,ie=!1,Se=!1,we=!1,ye;ye=Symbol.for("react.module.reference");function Oe(e){return!!(typeof e=="string"||typeof e=="function"||e===u||e===d||we||e===f||e===j||e===v||Se||e===U||V||i||ie||typeof e=="object"&&e!==null&&(e.$$typeof===M||e.$$typeof===R||e.$$typeof===O||e.$$typeof===p||e.$$typeof===h||e.$$typeof===ye||e.getModuleId!==void 0))}function me(e,t,o){var l=e.displayName;if(l)return l;var A=t.displayName||t.name||"";return A!==""?o+"("+A+")":o}function ge(e){return e.displayName||"Context"}function Q(e){if(e==null)return null;if(typeof e.tag=="number"&&L("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case u:return"Fragment";case c:return"Portal";case d:return"Profiler";case f:return"StrictMode";case j:return"Suspense";case v:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case p:var t=e;return ge(t)+".Consumer";case O:var o=e;return ge(o._context)+".Provider";case h:return me(e,e.render,"ForwardRef");case R:var l=e.displayName||null;return l!==null?l:Q(e.type)||"Memo";case M:{var A=e,W=A._payload,C=A._init;try{return Q(C(W))}catch{return null}}}return null}var Z=Object.assign,se=0,ee,oe,de,he,n,s,T;function b(){}b.__reactDisabledLog=!0;function y(){{if(se===0){ee=console.log,oe=console.info,de=console.warn,he=console.error,n=console.group,s=console.groupCollapsed,T=console.groupEnd;var e={configurable:!0,enumerable:!0,value:b,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}se++}}function P(){{if(se--,se===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:Z({},e,{value:ee}),info:Z({},e,{value:oe}),warn:Z({},e,{value:de}),error:Z({},e,{value:he}),group:Z({},e,{value:n}),groupCollapsed:Z({},e,{value:s}),groupEnd:Z({},e,{value:T})})}se<0&&L("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var m=B.ReactCurrentDispatcher,g;function _(e,t,o){{if(g===void 0)try{throw Error()}catch(A){var l=A.stack.trim().match(/\n( *(at )?)/);g=l&&l[1]||""}return`
`+g+e}}var $=!1,S;{var G=typeof WeakMap=="function"?WeakMap:Map;S=new G}function a(e,t){if(!e||$)return"";{var o=S.get(e);if(o!==void 0)return o}var l;$=!0;var A=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var W;W=m.current,m.current=null,y();try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(ce){l=ce}Reflect.construct(e,[],C)}else{try{C.call()}catch(ce){l=ce}e.call(C.prototype)}}else{try{throw Error()}catch(ce){l=ce}e()}}catch(ce){if(ce&&l&&typeof ce.stack=="string"){for(var w=ce.stack.split(`
`),K=l.stack.split(`
`),z=w.length-1,N=K.length-1;z>=1&&N>=0&&w[z]!==K[N];)N--;for(;z>=1&&N>=0;z--,N--)if(w[z]!==K[N]){if(z!==1||N!==1)do if(z--,N--,N<0||w[z]!==K[N]){var te=`
`+w[z].replace(" at new "," at ");return e.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",e.displayName)),typeof e=="function"&&S.set(e,te),te}while(z>=1&&N>=0);break}}}finally{$=!1,m.current=W,P(),Error.prepareStackTrace=A}var Te=e?e.displayName||e.name:"",Rr=Te?_(Te):"";return typeof e=="function"&&S.set(e,Rr),Rr}function re(e,t,o){return a(e,!1)}function be(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function pe(e,t,o){if(e==null)return"";if(typeof e=="function")return a(e,be(e));if(typeof e=="string")return _(e);switch(e){case j:return _("Suspense");case v:return _("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case h:return re(e.render);case R:return pe(e.type,t,o);case M:{var l=e,A=l._payload,W=l._init;try{return pe(W(A),t,o)}catch{}}}return""}var $e=Object.prototype.hasOwnProperty,lr={},dr=B.ReactDebugCurrentFrame;function Ae(e){if(e){var t=e._owner,o=pe(e.type,e._source,t?t.type:null);dr.setExtraStackFrame(o)}else dr.setExtraStackFrame(null)}function ct(e,t,o,l,A){{var W=Function.call.bind($e);for(var C in e)if(W(e,C)){var w=void 0;try{if(typeof e[C]!="function"){var K=Error((l||"React class")+": "+o+" type `"+C+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[C]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw K.name="Invariant Violation",K}w=e[C](t,C,l,o,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(z){w=z}w&&!(w instanceof Error)&&(Ae(A),L("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",l||"React class",o,C,typeof w),Ae(null)),w instanceof Error&&!(w.message in lr)&&(lr[w.message]=!0,Ae(A),L("Failed %s type: %s",o,w.message),Ae(null))}}}var ut=Array.isArray;function ze(e){return ut(e)}function ft(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,o=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return o}}function lt(e){try{return pr(e),!1}catch{return!0}}function pr(e){return""+e}function vr(e){if(lt(e))return L("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ft(e)),pr(e)}var Pe=B.ReactCurrentOwner,dt={key:!0,ref:!0,__self:!0,__source:!0},yr,mr,Ve;Ve={};function pt(e){if($e.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function vt(e){if($e.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function yt(e,t){if(typeof e.ref=="string"&&Pe.current&&t&&Pe.current.stateNode!==t){var o=Q(Pe.current.type);Ve[o]||(L('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',Q(Pe.current.type),e.ref),Ve[o]=!0)}}function mt(e,t){{var o=function(){yr||(yr=!0,L("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};o.isReactWarning=!0,Object.defineProperty(e,"key",{get:o,configurable:!0})}}function gt(e,t){{var o=function(){mr||(mr=!0,L("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};o.isReactWarning=!0,Object.defineProperty(e,"ref",{get:o,configurable:!0})}}var ht=function(e,t,o,l,A,W,C){var w={$$typeof:E,type:e,key:t,ref:o,props:C,_owner:W};return w._store={},Object.defineProperty(w._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(w,"_self",{configurable:!1,enumerable:!1,writable:!1,value:l}),Object.defineProperty(w,"_source",{configurable:!1,enumerable:!1,writable:!1,value:A}),Object.freeze&&(Object.freeze(w.props),Object.freeze(w)),w};function bt(e,t,o,l,A){{var W,C={},w=null,K=null;o!==void 0&&(vr(o),w=""+o),vt(t)&&(vr(t.key),w=""+t.key),pt(t)&&(K=t.ref,yt(t,A));for(W in t)$e.call(t,W)&&!dt.hasOwnProperty(W)&&(C[W]=t[W]);if(e&&e.defaultProps){var z=e.defaultProps;for(W in z)C[W]===void 0&&(C[W]=z[W])}if(w||K){var N=typeof e=="function"?e.displayName||e.name||"Unknown":e;w&&mt(C,N),K&&gt(C,N)}return ht(e,w,K,A,l,Pe.current,C)}}var Ne=B.ReactCurrentOwner,gr=B.ReactDebugCurrentFrame;function Ee(e){if(e){var t=e._owner,o=pe(e.type,e._source,t?t.type:null);gr.setExtraStackFrame(o)}else gr.setExtraStackFrame(null)}var Be;Be=!1;function Xe(e){return typeof e=="object"&&e!==null&&e.$$typeof===E}function hr(){{if(Ne.current){var e=Q(Ne.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function Et(e){{if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),o=e.lineNumber;return`

Check your code at `+t+":"+o+"."}return""}}var br={};function Tt(e){{var t=hr();if(!t){var o=typeof e=="string"?e:e.displayName||e.name;o&&(t=`

Check the top-level render call using <`+o+">.")}return t}}function Er(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var o=Tt(t);if(br[o])return;br[o]=!0;var l="";e&&e._owner&&e._owner!==Ne.current&&(l=" It was passed a child from "+Q(e._owner.type)+"."),Ee(e),L('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',o,l),Ee(null)}}function Tr(e,t){{if(typeof e!="object")return;if(ze(e))for(var o=0;o<e.length;o++){var l=e[o];Xe(l)&&Er(l,t)}else if(Xe(e))e._store&&(e._store.validated=!0);else if(e){var A=H(e);if(typeof A=="function"&&A!==e.entries)for(var W=A.call(e),C;!(C=W.next()).done;)Xe(C.value)&&Er(C.value,t)}}}function xt(e){{var t=e.type;if(t==null||typeof t=="string")return;var o;if(typeof t=="function")o=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===h||t.$$typeof===R))o=t.propTypes;else return;if(o){var l=Q(t);ct(o,e.props,"prop",l,e)}else if(t.PropTypes!==void 0&&!Be){Be=!0;var A=Q(t);L("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",A||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&L("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Rt(e){{for(var t=Object.keys(e.props),o=0;o<t.length;o++){var l=t[o];if(l!=="children"&&l!=="key"){Ee(e),L("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",l),Ee(null);break}}e.ref!==null&&(Ee(e),L("Invalid attribute `ref` supplied to `React.Fragment`."),Ee(null))}}function xr(e,t,o,l,A,W){{var C=Oe(e);if(!C){var w="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(w+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var K=Et(A);K?w+=K:w+=hr();var z;e===null?z="null":ze(e)?z="array":e!==void 0&&e.$$typeof===E?(z="<"+(Q(e.type)||"Unknown")+" />",w=" Did you accidentally export a JSX literal instead of a component?"):z=typeof e,L("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",z,w)}var N=bt(e,t,o,A,W);if(N==null)return N;if(C){var te=t.children;if(te!==void 0)if(l)if(ze(te)){for(var Te=0;Te<te.length;Te++)Tr(te[Te],e);Object.freeze&&Object.freeze(te)}else L("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Tr(te,e)}return e===u?Rt(N):xt(N),N}}function _t(e,t,o){return xr(e,t,o,!0)}function St(e,t,o){return xr(e,t,o,!1)}var wt=St,Ot=_t;_e.Fragment=u,_e.jsx=wt,_e.jsxs=Ot}()),_e}process.env.NODE_ENV==="production"?ke.exports=Or():ke.exports=Pr();var x=ke.exports,Ie={exports:{}},Ce={exports:{}},k={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ge;function Cr(){if(Ge)return k;Ge=1;var r=typeof Symbol=="function"&&Symbol.for,E=r?Symbol.for("react.element"):60103,c=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,f=r?Symbol.for("react.strict_mode"):60108,d=r?Symbol.for("react.profiler"):60114,O=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,h=r?Symbol.for("react.async_mode"):60111,j=r?Symbol.for("react.concurrent_mode"):60111,v=r?Symbol.for("react.forward_ref"):60112,R=r?Symbol.for("react.suspense"):60113,M=r?Symbol.for("react.suspense_list"):60120,U=r?Symbol.for("react.memo"):60115,J=r?Symbol.for("react.lazy"):60116,q=r?Symbol.for("react.block"):60121,H=r?Symbol.for("react.fundamental"):60117,B=r?Symbol.for("react.responder"):60118,L=r?Symbol.for("react.scope"):60119;function X(i){if(typeof i=="object"&&i!==null){var ie=i.$$typeof;switch(ie){case E:switch(i=i.type,i){case h:case j:case u:case d:case f:case R:return i;default:switch(i=i&&i.$$typeof,i){case p:case v:case J:case U:case O:return i;default:return ie}}case c:return ie}}}function V(i){return X(i)===j}return k.AsyncMode=h,k.ConcurrentMode=j,k.ContextConsumer=p,k.ContextProvider=O,k.Element=E,k.ForwardRef=v,k.Fragment=u,k.Lazy=J,k.Memo=U,k.Portal=c,k.Profiler=d,k.StrictMode=f,k.Suspense=R,k.isAsyncMode=function(i){return V(i)||X(i)===h},k.isConcurrentMode=V,k.isContextConsumer=function(i){return X(i)===p},k.isContextProvider=function(i){return X(i)===O},k.isElement=function(i){return typeof i=="object"&&i!==null&&i.$$typeof===E},k.isForwardRef=function(i){return X(i)===v},k.isFragment=function(i){return X(i)===u},k.isLazy=function(i){return X(i)===J},k.isMemo=function(i){return X(i)===U},k.isPortal=function(i){return X(i)===c},k.isProfiler=function(i){return X(i)===d},k.isStrictMode=function(i){return X(i)===f},k.isSuspense=function(i){return X(i)===R},k.isValidElementType=function(i){return typeof i=="string"||typeof i=="function"||i===u||i===j||i===d||i===f||i===R||i===M||typeof i=="object"&&i!==null&&(i.$$typeof===J||i.$$typeof===U||i.$$typeof===O||i.$$typeof===p||i.$$typeof===v||i.$$typeof===H||i.$$typeof===B||i.$$typeof===L||i.$$typeof===q)},k.typeOf=X,k}var I={};/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ke;function jr(){return Ke||(Ke=1,process.env.NODE_ENV!=="production"&&function(){var r=typeof Symbol=="function"&&Symbol.for,E=r?Symbol.for("react.element"):60103,c=r?Symbol.for("react.portal"):60106,u=r?Symbol.for("react.fragment"):60107,f=r?Symbol.for("react.strict_mode"):60108,d=r?Symbol.for("react.profiler"):60114,O=r?Symbol.for("react.provider"):60109,p=r?Symbol.for("react.context"):60110,h=r?Symbol.for("react.async_mode"):60111,j=r?Symbol.for("react.concurrent_mode"):60111,v=r?Symbol.for("react.forward_ref"):60112,R=r?Symbol.for("react.suspense"):60113,M=r?Symbol.for("react.suspense_list"):60120,U=r?Symbol.for("react.memo"):60115,J=r?Symbol.for("react.lazy"):60116,q=r?Symbol.for("react.block"):60121,H=r?Symbol.for("react.fundamental"):60117,B=r?Symbol.for("react.responder"):60118,L=r?Symbol.for("react.scope"):60119;function X(a){return typeof a=="string"||typeof a=="function"||a===u||a===j||a===d||a===f||a===R||a===M||typeof a=="object"&&a!==null&&(a.$$typeof===J||a.$$typeof===U||a.$$typeof===O||a.$$typeof===p||a.$$typeof===v||a.$$typeof===H||a.$$typeof===B||a.$$typeof===L||a.$$typeof===q)}function V(a){if(typeof a=="object"&&a!==null){var re=a.$$typeof;switch(re){case E:var be=a.type;switch(be){case h:case j:case u:case d:case f:case R:return be;default:var pe=be&&be.$$typeof;switch(pe){case p:case v:case J:case U:case O:return pe;default:return re}}case c:return re}}}var i=h,ie=j,Se=p,we=O,ye=E,Oe=v,me=u,ge=J,Q=U,Z=c,se=d,ee=f,oe=R,de=!1;function he(a){return de||(de=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),n(a)||V(a)===h}function n(a){return V(a)===j}function s(a){return V(a)===p}function T(a){return V(a)===O}function b(a){return typeof a=="object"&&a!==null&&a.$$typeof===E}function y(a){return V(a)===v}function P(a){return V(a)===u}function m(a){return V(a)===J}function g(a){return V(a)===U}function _(a){return V(a)===c}function $(a){return V(a)===d}function S(a){return V(a)===f}function G(a){return V(a)===R}I.AsyncMode=i,I.ConcurrentMode=ie,I.ContextConsumer=Se,I.ContextProvider=we,I.Element=ye,I.ForwardRef=Oe,I.Fragment=me,I.Lazy=ge,I.Memo=Q,I.Portal=Z,I.Profiler=se,I.StrictMode=ee,I.Suspense=oe,I.isAsyncMode=he,I.isConcurrentMode=n,I.isContextConsumer=s,I.isContextProvider=T,I.isElement=b,I.isForwardRef=y,I.isFragment=P,I.isLazy=m,I.isMemo=g,I.isPortal=_,I.isProfiler=$,I.isStrictMode=S,I.isSuspense=G,I.isValidElementType=X,I.typeOf=V}()),I}var Ze;function Qe(){return Ze||(Ze=1,process.env.NODE_ENV==="production"?Ce.exports=Cr():Ce.exports=jr()),Ce.exports}/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Fe,er;function $r(){if(er)return Fe;er=1;var r=Object.getOwnPropertySymbols,E=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function u(d){if(d==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(d)}function f(){try{if(!Object.assign)return!1;var d=new String("abc");if(d[5]="de",Object.getOwnPropertyNames(d)[0]==="5")return!1;for(var O={},p=0;p<10;p++)O["_"+String.fromCharCode(p)]=p;var h=Object.getOwnPropertyNames(O).map(function(v){return O[v]});if(h.join("")!=="0123456789")return!1;var j={};return"abcdefghijklmnopqrst".split("").forEach(function(v){j[v]=v}),Object.keys(Object.assign({},j)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}return Fe=f()?Object.assign:function(d,O){for(var p,h=u(d),j,v=1;v<arguments.length;v++){p=Object(arguments[v]);for(var R in p)E.call(p,R)&&(h[R]=p[R]);if(r){j=r(p);for(var M=0;M<j.length;M++)c.call(p,j[M])&&(h[j[M]]=p[j[M]])}}return h},Fe}var De,rr;function Me(){if(rr)return De;rr=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return De=r,De}var We,tr;function nr(){return tr||(tr=1,We=Function.call.bind(Object.prototype.hasOwnProperty)),We}var Ye,or;function Ar(){if(or)return Ye;or=1;var r=function(){};if(process.env.NODE_ENV!=="production"){var E=Me(),c={},u=nr();r=function(d){var O="Warning: "+d;typeof console<"u"&&console.error(O);try{throw new Error(O)}catch{}}}function f(d,O,p,h,j){if(process.env.NODE_ENV!=="production"){for(var v in d)if(u(d,v)){var R;try{if(typeof d[v]!="function"){var M=Error((h||"React class")+": "+p+" type `"+v+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof d[v]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw M.name="Invariant Violation",M}R=d[v](O,v,h,p,null,E)}catch(J){R=J}if(R&&!(R instanceof Error)&&r((h||"React class")+": type specification of "+p+" `"+v+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof R+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),R instanceof Error&&!(R.message in c)){c[R.message]=!0;var U=j?j():"";r("Failed "+p+" type: "+R.message+(U??""))}}}}return f.resetWarningCache=function(){process.env.NODE_ENV!=="production"&&(c={})},Ye=f,Ye}var qe,ar;function kr(){if(ar)return qe;ar=1;var r=Qe(),E=$r(),c=Me(),u=nr(),f=Ar(),d=function(){};process.env.NODE_ENV!=="production"&&(d=function(p){var h="Warning: "+p;typeof console<"u"&&console.error(h);try{throw new Error(h)}catch{}});function O(){return null}return qe=function(p,h){var j=typeof Symbol=="function"&&Symbol.iterator,v="@@iterator";function R(n){var s=n&&(j&&n[j]||n[v]);if(typeof s=="function")return s}var M="<<anonymous>>",U={array:B("array"),bigint:B("bigint"),bool:B("boolean"),func:B("function"),number:B("number"),object:B("object"),string:B("string"),symbol:B("symbol"),any:L(),arrayOf:X,element:V(),elementType:i(),instanceOf:ie,node:Oe(),objectOf:we,oneOf:Se,oneOfType:ye,shape:ge,exact:Q};function J(n,s){return n===s?n!==0||1/n===1/s:n!==n&&s!==s}function q(n,s){this.message=n,this.data=s&&typeof s=="object"?s:{},this.stack=""}q.prototype=Error.prototype;function H(n){if(process.env.NODE_ENV!=="production")var s={},T=0;function b(P,m,g,_,$,S,G){if(_=_||M,S=S||g,G!==c){if(h){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}else if(process.env.NODE_ENV!=="production"&&typeof console<"u"){var re=_+":"+g;!s[re]&&T<3&&(d("You are manually calling a React.PropTypes validation function for the `"+S+"` prop on `"+_+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),s[re]=!0,T++)}}return m[g]==null?P?m[g]===null?new q("The "+$+" `"+S+"` is marked as required "+("in `"+_+"`, but its value is `null`.")):new q("The "+$+" `"+S+"` is marked as required in "+("`"+_+"`, but its value is `undefined`.")):null:n(m,g,_,$,S)}var y=b.bind(null,!1);return y.isRequired=b.bind(null,!0),y}function B(n){function s(T,b,y,P,m,g){var _=T[b],$=ee(_);if($!==n){var S=oe(_);return new q("Invalid "+P+" `"+m+"` of type "+("`"+S+"` supplied to `"+y+"`, expected ")+("`"+n+"`."),{expectedType:n})}return null}return H(s)}function L(){return H(O)}function X(n){function s(T,b,y,P,m){if(typeof n!="function")return new q("Property `"+m+"` of component `"+y+"` has invalid PropType notation inside arrayOf.");var g=T[b];if(!Array.isArray(g)){var _=ee(g);return new q("Invalid "+P+" `"+m+"` of type "+("`"+_+"` supplied to `"+y+"`, expected an array."))}for(var $=0;$<g.length;$++){var S=n(g,$,y,P,m+"["+$+"]",c);if(S instanceof Error)return S}return null}return H(s)}function V(){function n(s,T,b,y,P){var m=s[T];if(!p(m)){var g=ee(m);return new q("Invalid "+y+" `"+P+"` of type "+("`"+g+"` supplied to `"+b+"`, expected a single ReactElement."))}return null}return H(n)}function i(){function n(s,T,b,y,P){var m=s[T];if(!r.isValidElementType(m)){var g=ee(m);return new q("Invalid "+y+" `"+P+"` of type "+("`"+g+"` supplied to `"+b+"`, expected a single ReactElement type."))}return null}return H(n)}function ie(n){function s(T,b,y,P,m){if(!(T[b]instanceof n)){var g=n.name||M,_=he(T[b]);return new q("Invalid "+P+" `"+m+"` of type "+("`"+_+"` supplied to `"+y+"`, expected ")+("instance of `"+g+"`."))}return null}return H(s)}function Se(n){if(!Array.isArray(n))return process.env.NODE_ENV!=="production"&&(arguments.length>1?d("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):d("Invalid argument supplied to oneOf, expected an array.")),O;function s(T,b,y,P,m){for(var g=T[b],_=0;_<n.length;_++)if(J(g,n[_]))return null;var $=JSON.stringify(n,function(G,a){var re=oe(a);return re==="symbol"?String(a):a});return new q("Invalid "+P+" `"+m+"` of value `"+String(g)+"` "+("supplied to `"+y+"`, expected one of "+$+"."))}return H(s)}function we(n){function s(T,b,y,P,m){if(typeof n!="function")return new q("Property `"+m+"` of component `"+y+"` has invalid PropType notation inside objectOf.");var g=T[b],_=ee(g);if(_!=="object")return new q("Invalid "+P+" `"+m+"` of type "+("`"+_+"` supplied to `"+y+"`, expected an object."));for(var $ in g)if(u(g,$)){var S=n(g,$,y,P,m+"."+$,c);if(S instanceof Error)return S}return null}return H(s)}function ye(n){if(!Array.isArray(n))return process.env.NODE_ENV!=="production"&&d("Invalid argument supplied to oneOfType, expected an instance of array."),O;for(var s=0;s<n.length;s++){var T=n[s];if(typeof T!="function")return d("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+de(T)+" at index "+s+"."),O}function b(y,P,m,g,_){for(var $=[],S=0;S<n.length;S++){var G=n[S],a=G(y,P,m,g,_,c);if(a==null)return null;a.data&&u(a.data,"expectedType")&&$.push(a.data.expectedType)}var re=$.length>0?", expected one of type ["+$.join(", ")+"]":"";return new q("Invalid "+g+" `"+_+"` supplied to "+("`"+m+"`"+re+"."))}return H(b)}function Oe(){function n(s,T,b,y,P){return Z(s[T])?null:new q("Invalid "+y+" `"+P+"` supplied to "+("`"+b+"`, expected a ReactNode."))}return H(n)}function me(n,s,T,b,y){return new q((n||"React class")+": "+s+" type `"+T+"."+b+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+y+"`.")}function ge(n){function s(T,b,y,P,m){var g=T[b],_=ee(g);if(_!=="object")return new q("Invalid "+P+" `"+m+"` of type `"+_+"` "+("supplied to `"+y+"`, expected `object`."));for(var $ in n){var S=n[$];if(typeof S!="function")return me(y,P,m,$,oe(S));var G=S(g,$,y,P,m+"."+$,c);if(G)return G}return null}return H(s)}function Q(n){function s(T,b,y,P,m){var g=T[b],_=ee(g);if(_!=="object")return new q("Invalid "+P+" `"+m+"` of type `"+_+"` "+("supplied to `"+y+"`, expected `object`."));var $=E({},T[b],n);for(var S in $){var G=n[S];if(u(n,S)&&typeof G!="function")return me(y,P,m,S,oe(G));if(!G)return new q("Invalid "+P+" `"+m+"` key `"+S+"` supplied to `"+y+"`.\nBad object: "+JSON.stringify(T[b],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(n),null,"  "));var a=G(g,S,y,P,m+"."+S,c);if(a)return a}return null}return H(s)}function Z(n){switch(typeof n){case"number":case"string":case"undefined":return!0;case"boolean":return!n;case"object":if(Array.isArray(n))return n.every(Z);if(n===null||p(n))return!0;var s=R(n);if(s){var T=s.call(n),b;if(s!==n.entries){for(;!(b=T.next()).done;)if(!Z(b.value))return!1}else for(;!(b=T.next()).done;){var y=b.value;if(y&&!Z(y[1]))return!1}}else return!1;return!0;default:return!1}}function se(n,s){return n==="symbol"?!0:s?s["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&s instanceof Symbol:!1}function ee(n){var s=typeof n;return Array.isArray(n)?"array":n instanceof RegExp?"object":se(s,n)?"symbol":s}function oe(n){if(typeof n>"u"||n===null)return""+n;var s=ee(n);if(s==="object"){if(n instanceof Date)return"date";if(n instanceof RegExp)return"regexp"}return s}function de(n){var s=oe(n);switch(s){case"array":case"object":return"an "+s;case"boolean":case"date":case"regexp":return"a "+s;default:return s}}function he(n){return!n.constructor||!n.constructor.name?M:n.constructor.name}return U.checkPropTypes=f,U.resetWarningCache=f.resetWarningCache,U.PropTypes=U,U},qe}var Ue,ir;function Ir(){if(ir)return Ue;ir=1;var r=Me();function E(){}function c(){}return c.resetWarningCache=E,Ue=function(){function u(O,p,h,j,v,R){if(R!==r){var M=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw M.name="Invariant Violation",M}}u.isRequired=u;function f(){return u}var d={array:u,bigint:u,bool:u,func:u,number:u,object:u,string:u,symbol:u,any:u,arrayOf:f,element:u,elementType:u,instanceOf:f,node:u,objectOf:f,oneOf:f,oneOfType:f,shape:f,exact:f,checkPropTypes:c,resetWarningCache:E};return d.PropTypes=d,d},Ue}if(process.env.NODE_ENV!=="production"){var Fr=Qe(),Dr=!0;Ie.exports=kr()(Fr.isElement,Dr)}else Ie.exports=Ir()();var Mr=Ie.exports;const Y=wr(Mr),D={color:{dark:"rgba(0, 0, 0, 0.87)",primary:"#5677fc",primaryDark:"#455ede",secondary:"#ff5177",grey:"#EEEEEE",greyLight:"#f6f5f7",white:"#FFFFFF"},transition:{base:r=>`
          ${r.el} ${r.speed||"0.2"}s cubic-bezier(0.4, 0.0, 0.2, 1)
        `}},Le=F.css`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  margin-bottom: ${r=>r.marginBottom||"0.35em"};
  margin-top: ${r=>r.marginTop||0};
  margin-left: ${r=>r.marginLeft||0};
  margin-right: ${r=>r.marginRight||0};
  color: ${r=>D.color[r.color]||D.color.dark};
  font-weight: ${r=>r.fontWeight||400};
  text-align: ${r=>r.align||"inherit"};
`,Wr=F.p`
  ${Le}
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
`,Yr=F.h4`
  ${Le}
  font-size: 2.125rem;
  line-height: 1.17;
  letter-spacing: 0.00735em;
`,qr=F.p`
  ${Le}
  font-size: 0.875rem;
  line-height: 1.5;
  letter-spacing: 0.01071em;
`,fe=({variant:r="body",...E})=>{const c={h4:Yr,body:Wr,body2:qr};return ae.createElement(c[r],E)};fe.propTypes={variant:Y.oneOf(["h4","body","body2"]),marginBottom:Y.string,marginTop:Y.string,marginLeft:Y.string,marginRight:Y.string,color:Y.string,fontWeight:Y.number,align:Y.oneOf(["right","left","center","inherit"])};const je=F.button`
  border-radius: 20px;
  border: 1px solid ${r=>D.color[r.color]||D.color.grey};
  background-color: ${r=>D.color[r.color]||D.color.grey};
  margin-bottom: ${r=>r.marginBottom||"0.35em"};
  margin-top: ${r=>r.marginTop||0};
  margin-left: ${r=>r.marginLeft||0};
  margin-right: ${r=>r.marginRight||0};
  color: ${D.color.dark};
  font-size: 0.875rem;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: ${D.transition.base({el:"transform"})};
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
`,Ur=F(je)`
  border-color: ${D.color.primary};
  background-color: ${D.color.primary};
  color: ${D.color.white};
`,Lr=F(je)`
  border-color: ${D.color.scondary};
  background-color: ${D.color.secondary};
  color: ${D.color.white};
`,zr=F(je)`
  background-color: transparent;
  border-color: ${D.color.white};
  color: ${D.color.white};
`,le=({variant:r="default",...E})=>{const c={primary:Ur,secondary:Lr,transparent:zr,default:je};return ae.createElement(c[r],E)};le.propTypes={variant:Y.oneOf(["primary","secondary","transparent","default"]),marginBottom:Y.string,marginTop:Y.string,marginLeft:Y.string,marginRight:Y.string,color:Y.string,type:Y.oneOf(["button","submit"]),onClick:Y.func,disabled:Y.bool};const sr=F.div`
  color: red;
  font-size: 0.775rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 550;
  padding-top: 10px;
`,Vr=F.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Nr=F.div`
  width: 100%;
`,Br=F.input`
  width: 100%;
  padding: 12px 15px;
  -webkit-box-sizing: border-box; // Safari/Chrome, other WebKit
  -moz-box-sizing: border-box; // Firefox, other Gecko
  box-sizing: border-box; // Opera/IE 8+
  margin: 8px 0;
  background-color: ${D.color.grey};
  border: 1px solid ${D.color.grey};
  border-radius: 4px;
  outline: none;
  font-size: "1rem";
  transition: ${D.transition.base({el:"border"})};
  &:invalid {
    border-color: red;
    background: #ffd1d1;
  }
  &:focus {
    border: 2px solid ${D.color.primary};
    transition: ${D.transition.base({el:"border"})};
  }
`,Xr=F.div`
  color: red;
  font-size: 0.775rem;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 550;
`,ve=({...r})=>{const[E,c]=xe.useField(r);return x.jsxs(Vr,{className:c.touched&&c.error,children:[x.jsx(Nr,{children:x.jsx(Br,{...E,...r})}),c.touched&&c.error?x.jsx(Xr,{children:c.error}):null]})};ve.propTypes={id:Y.string.isRequired,name:Y.string.isRequired,value:Y.string,type:Y.oneOf(["text","email","password","number"]),required:Y.bool,pattern:Y.string,placeholder:Y.string};function Hr({className:r,onSignUp:E,serverError:c,loading:u}){return x.jsx(xe.Formik,{initialValues:{username:"",email:"",password:""},validationSchema:ue.object({username:ue.string().max(15,"must be 15 characters or less").required("required"),email:ue.string().email("invalid email address").required("required"),password:ue.string().max(6,"must be 6 characters or less").required("required")}),onSubmit:f=>{E(f)},children:f=>x.jsxs(xe.Form,{className:r,onSubmit:f.handleSubmit,children:[x.jsx(fe,{fontWeight:550,variant:"h4",children:"Create Account"}),x.jsx(ve,{id:"username",name:"username",type:"text",placeholder:"Username"}),x.jsx(ve,{id:"email",name:"email",type:"email",placeholder:"Email"}),x.jsx(ve,{id:"password",name:"password",type:"password",placeholder:"Password"}),c&&x.jsx(sr,{children:c}),u?x.jsx(le,{variant:"secondary",type:"submit",marginTop:"1.17rem",disabled:!0,children:"Loading..."}):x.jsx(le,{variant:"secondary",type:"submit",marginTop:"1.17rem",disabled:!f.isValid,children:"Sign up"})]})})}function Jr({className:r,onSignIn:E,serverError:c,loading:u}){return x.jsx(xe.Formik,{initialValues:{username:"",password:""},validationSchema:ue.object({username:ue.string().max(15,"must be 15 characters or less").required("required"),password:ue.string().max(6,"must be 6 characters or less").required("required")}),onSubmit:f=>{E(f)},children:f=>x.jsxs(xe.Form,{className:r,onSubmit:f.handleSubmit,children:[x.jsx(fe,{fontWeight:550,variant:"h4",children:"Sign in"}),x.jsx(ve,{id:"username",name:"username",type:"text",placeholder:"Username"}),x.jsx(ve,{id:"password",name:"password",type:"password",placeholder:"Password"}),c&&x.jsx(sr,{children:c}),u?x.jsx(le,{variant:"secondary",type:"submit",marginTop:"1.17rem",disabled:!0,children:"Loading..."}):x.jsx(le,{variant:"secondary",type:"submit",marginTop:"1.17rem",disabled:!f.isValid,children:"Sign in"})]})})}const Gr=F.div`
  background: ${D.color.greyLight};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
`,Kr=F.div`
  background-color: ${D.color.white};
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
  text-align: center;
`,cr=F.div`
  left: 0;
  width: 50%;
  position: absolute;
  top: 0;
  height: 100%;
  transition: ${D.transition.base({el:"all",speed:"0.6"})};
`,Zr=F.keyframes`
  0%, 49.99% {
    opacity: 0;
    z-index: 1;
  }

  50%, 100% {
    opacity: 1;
    z-index: 5;
  }
`,Qr=F(cr)`
  z-index: ${r=>r.signUpActive?5:1};
  transform: ${r=>r.signUpActive?"translateX(100%)":"translateX(0)"};
  opacity: ${r=>r.signUpActive?1:0};
  animation: ${r=>r.signUpActive?F.css`
          ${Zr} 0.6
        `:"none"};
`,et=F(cr)`
  z-index: 2;
  transform: ${r=>r.signUpActive?"translateX(100%)":"translateX(0)"};
`,ur=F.css`
  background-color: ${D.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
`,rt=F(Hr)`
  ${ur}
`,tt=F(Jr)`
  ${ur}
`,nt=F.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100%;
  overflow: hidden;
  transition: ${D.transition.base({el:"transform",speed:"0.6"})};
  z-index: 100;
  transform: ${r=>r.signUpActive?"translateX(-100%)":"translateX(0)"};
`,ot=F.div`
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
  transform: ${r=>r.signUpActive?"translateX(50%)":"translateX(0)"};
  transition: ${D.transition.base({el:"transform",speed:"0.6"})};
`,fr=F.div`
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
  transition: ${D.transition.base({el:"transform",speed:"0.6"})};
`,at=F(fr)`
  transform: ${r=>r.signUpActive?"translateX(-0)":"translateX(-20%)"};
`,it=F(fr)`
  right: 0;
  transform: ${r=>r.signUpActive?"translateX(20%)":"translateX(0)"};
`,st=({onSignUp:r,onSignIn:E,serverError:c,loading:u})=>{const[f,d]=ae.useState(!1),O=()=>{d(p=>!p)};return x.jsx(Gr,{children:x.jsxs(Kr,{children:[f?x.jsx(Qr,{signUpActive:f,children:x.jsx(rt,{onSignUp:r,serverError:c,loading:u})}):x.jsx(et,{signUpActive:f,children:x.jsx(tt,{onSignIn:E,serverError:c,loading:u})}),x.jsx(nt,{signUpActive:f,children:x.jsx(ot,{signUpActive:f,children:f?x.jsxs(at,{signUpActive:f,children:[x.jsx(fe,{fontWeight:550,variant:"h4",color:"white",children:"Register now!"}),x.jsx(fe,{variant:"body",color:"white",children:"Enter your personal details"}),x.jsx(le,{onClick:O,variant:"transparent",marginTop:"1.17rem",children:"Sign In"})]}):x.jsxs(it,{signUpActive:f,children:[x.jsx(fe,{fontWeight:550,variant:"h4",color:"white",children:"Welcome Back!"}),x.jsx(fe,{variant:"body",color:"white",children:"Please login with your personal info"}),x.jsx(le,{onClick:O,variant:"transparent",marginTop:"1.17rem",children:"Sign Up"})]})})})]})})};ne.AuthForm=st,Object.defineProperty(ne,Symbol.toStringTag,{value:"Module"})});
