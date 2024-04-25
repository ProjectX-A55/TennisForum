function QC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function f0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var h0={exports:{}},Qu={},p0={exports:{}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var da=Symbol.for("react.element"),XC=Symbol.for("react.portal"),JC=Symbol.for("react.fragment"),ZC=Symbol.for("react.strict_mode"),eE=Symbol.for("react.profiler"),tE=Symbol.for("react.provider"),nE=Symbol.for("react.context"),rE=Symbol.for("react.forward_ref"),iE=Symbol.for("react.suspense"),sE=Symbol.for("react.memo"),oE=Symbol.for("react.lazy"),Lg=Symbol.iterator;function aE(t){return t===null||typeof t!="object"?null:(t=Lg&&t[Lg]||t["@@iterator"],typeof t=="function"?t:null)}var m0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g0=Object.assign,v0={};function ws(t,e,n){this.props=t,this.context=e,this.refs=v0,this.updater=n||m0}ws.prototype.isReactComponent={};ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function y0(){}y0.prototype=ws.prototype;function Qh(t,e,n){this.props=t,this.context=e,this.refs=v0,this.updater=n||m0}var Xh=Qh.prototype=new y0;Xh.constructor=Qh;g0(Xh,ws.prototype);Xh.isPureReactComponent=!0;var Dg=Array.isArray,_0=Object.prototype.hasOwnProperty,Jh={current:null},w0={key:!0,ref:!0,__self:!0,__source:!0};function b0(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)_0.call(e,r)&&!w0.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:da,type:t,key:s,ref:o,props:i,_owner:Jh.current}}function lE(t,e){return{$$typeof:da,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zh(t){return typeof t=="object"&&t!==null&&t.$$typeof===da}function uE(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var jg=/\/+/g;function Zc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?uE(""+t.key):e.toString(36)}function wl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case da:case XC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Zc(o,0):r,Dg(i)?(n="",t!=null&&(n=t.replace(jg,"$&/")+"/"),wl(i,e,n,"",function(u){return u})):i!=null&&(Zh(i)&&(i=lE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(jg,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Dg(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Zc(s,a);o+=wl(s,e,n,l,i)}else if(l=aE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Zc(s,a++),o+=wl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ja(t,e,n){if(t==null)return t;var r=[],i=0;return wl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function cE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var pt={current:null},bl={transition:null},dE={ReactCurrentDispatcher:pt,ReactCurrentBatchConfig:bl,ReactCurrentOwner:Jh};Y.Children={map:ja,forEach:function(t,e,n){ja(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ja(t,function(){e++}),e},toArray:function(t){return ja(t,function(e){return e})||[]},only:function(t){if(!Zh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Y.Component=ws;Y.Fragment=JC;Y.Profiler=eE;Y.PureComponent=Qh;Y.StrictMode=ZC;Y.Suspense=iE;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dE;Y.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=g0({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Jh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)_0.call(e,l)&&!w0.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:da,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t){return t={$$typeof:nE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:tE,_context:t},t.Consumer=t};Y.createElement=b0;Y.createFactory=function(t){var e=b0.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:rE,render:t}};Y.isValidElement=Zh;Y.lazy=function(t){return{$$typeof:oE,_payload:{_status:-1,_result:t},_init:cE}};Y.memo=function(t,e){return{$$typeof:sE,type:t,compare:e===void 0?null:e}};Y.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(t,e){return pt.current.useCallback(t,e)};Y.useContext=function(t){return pt.current.useContext(t)};Y.useDebugValue=function(){};Y.useDeferredValue=function(t){return pt.current.useDeferredValue(t)};Y.useEffect=function(t,e){return pt.current.useEffect(t,e)};Y.useId=function(){return pt.current.useId()};Y.useImperativeHandle=function(t,e,n){return pt.current.useImperativeHandle(t,e,n)};Y.useInsertionEffect=function(t,e){return pt.current.useInsertionEffect(t,e)};Y.useLayoutEffect=function(t,e){return pt.current.useLayoutEffect(t,e)};Y.useMemo=function(t,e){return pt.current.useMemo(t,e)};Y.useReducer=function(t,e,n){return pt.current.useReducer(t,e,n)};Y.useRef=function(t){return pt.current.useRef(t)};Y.useState=function(t){return pt.current.useState(t)};Y.useSyncExternalStore=function(t,e,n){return pt.current.useSyncExternalStore(t,e,n)};Y.useTransition=function(){return pt.current.useTransition()};Y.version="18.2.0";p0.exports=Y;var b=p0.exports;const Xu=f0(b),sf=QC({__proto__:null,default:Xu},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fE=b,hE=Symbol.for("react.element"),pE=Symbol.for("react.fragment"),mE=Object.prototype.hasOwnProperty,gE=fE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vE={key:!0,ref:!0,__self:!0,__source:!0};function S0(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)mE.call(e,r)&&!vE.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:hE,type:t,key:s,ref:o,props:i,_owner:gE.current}}Qu.Fragment=pE;Qu.jsx=S0;Qu.jsxs=S0;h0.exports=Qu;var f=h0.exports,of={},x0={exports:{}},Rt={},C0={exports:{}},E0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,F){var V=O.length;O.push(F);e:for(;0<V;){var ee=V-1>>>1,P=O[ee];if(0<i(P,F))O[ee]=F,O[V]=P,V=ee;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var F=O[0],V=O.pop();if(V!==F){O[0]=V;e:for(var ee=0,P=O.length,Z=P>>>1;ee<Z;){var He=2*(ee+1)-1,Dt=O[He],Ae=He+1,Et=O[Ae];if(0>i(Dt,V))Ae<P&&0>i(Et,Dt)?(O[ee]=Et,O[Ae]=V,ee=Ae):(O[ee]=Dt,O[He]=V,ee=He);else if(Ae<P&&0>i(Et,V))O[ee]=Et,O[Ae]=V,ee=Ae;else break e}}return F}function i(O,F){var V=O.sortIndex-F.sortIndex;return V!==0?V:O.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,g=!1,v=!1,y=!1,w=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(O){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=O)r(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=n(u)}}function S(O){if(y=!1,_(O),!v)if(n(l)!==null)v=!0,se(x);else{var F=n(u);F!==null&&et(S,F.startTime-O)}}function x(O,F){v=!1,y&&(y=!1,p(C),C=-1),g=!0;var V=h;try{for(_(F),d=n(l);d!==null&&(!(d.expirationTime>F)||O&&!K());){var ee=d.callback;if(typeof ee=="function"){d.callback=null,h=d.priorityLevel;var P=ee(d.expirationTime<=F);F=t.unstable_now(),typeof P=="function"?d.callback=P:d===n(l)&&r(l),_(F)}else r(l);d=n(l)}if(d!==null)var Z=!0;else{var He=n(u);He!==null&&et(S,He.startTime-F),Z=!1}return Z}finally{d=null,h=V,g=!1}}var k=!1,E=null,C=-1,A=5,N=-1;function K(){return!(t.unstable_now()-N<A)}function he(){if(E!==null){var O=t.unstable_now();N=O;var F=!0;try{F=E(!0,O)}finally{F?We():(k=!1,E=null)}}else k=!1}var We;if(typeof m=="function")We=function(){m(he)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,ve=at.port2;at.port1.onmessage=he,We=function(){ve.postMessage(null)}}else We=function(){w(he,0)};function se(O){E=O,k||(k=!0,We())}function et(O,F){C=w(function(){O(t.unstable_now())},F)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,se(x))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(O){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var V=h;h=F;try{return O()}finally{h=V}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,F){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var V=h;h=O;try{return F()}finally{h=V}},t.unstable_scheduleCallback=function(O,F,V){var ee=t.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?ee+V:ee):V=ee,O){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=V+P,O={id:c++,callback:F,priorityLevel:O,startTime:V,expirationTime:P,sortIndex:-1},V>ee?(O.sortIndex=V,e(u,O),n(l)===null&&O===n(u)&&(y?(p(C),C=-1):y=!0,et(S,V-ee))):(O.sortIndex=P,e(l,O),v||g||(v=!0,se(x))),O},t.unstable_shouldYield=K,t.unstable_wrapCallback=function(O){var F=h;return function(){var V=h;h=F;try{return O.apply(this,arguments)}finally{h=V}}}})(E0);C0.exports=E0;var yE=C0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0=b,Ot=yE;function I(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var I0=new Set,Co={};function _i(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(Co[t]=e,t=0;t<e.length;t++)I0.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),af=Object.prototype.hasOwnProperty,_E=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Fg={},Ug={};function wE(t){return af.call(Ug,t)?!0:af.call(Fg,t)?!1:_E.test(t)?Ug[t]=!0:(Fg[t]=!0,!1)}function bE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function SE(t,e,n,r){if(e===null||typeof e>"u"||bE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function mt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new mt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new mt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new mt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new mt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new mt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new mt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new mt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new mt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new mt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ep=/[\-:]([a-z])/g;function tp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ep,tp);Je[e]=new mt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ep,tp);Je[e]=new mt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ep,tp);Je[e]=new mt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new mt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new mt(t,1,!1,t.toLowerCase(),null,!0,!0)});function np(t,e,n,r){var i=Je.hasOwnProperty(e)?Je[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(SE(e,n,i,r)&&(n=null),r||i===null?wE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var zn=k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Fa=Symbol.for("react.element"),Pi=Symbol.for("react.portal"),Ni=Symbol.for("react.fragment"),rp=Symbol.for("react.strict_mode"),lf=Symbol.for("react.profiler"),T0=Symbol.for("react.provider"),P0=Symbol.for("react.context"),ip=Symbol.for("react.forward_ref"),uf=Symbol.for("react.suspense"),cf=Symbol.for("react.suspense_list"),sp=Symbol.for("react.memo"),Zn=Symbol.for("react.lazy"),N0=Symbol.for("react.offscreen"),Vg=Symbol.iterator;function Ms(t){return t===null||typeof t!="object"?null:(t=Vg&&t[Vg]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,ed;function Js(t){if(ed===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ed=e&&e[1]||""}return`
`+ed+t}var td=!1;function nd(t,e){if(!t||td)return"";td=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{td=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Js(t):""}function xE(t){switch(t.tag){case 5:return Js(t.type);case 16:return Js("Lazy");case 13:return Js("Suspense");case 19:return Js("SuspenseList");case 0:case 2:case 15:return t=nd(t.type,!1),t;case 11:return t=nd(t.type.render,!1),t;case 1:return t=nd(t.type,!0),t;default:return""}}function df(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ni:return"Fragment";case Pi:return"Portal";case lf:return"Profiler";case rp:return"StrictMode";case uf:return"Suspense";case cf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case P0:return(t.displayName||"Context")+".Consumer";case T0:return(t._context.displayName||"Context")+".Provider";case ip:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case sp:return e=t.displayName||null,e!==null?e:df(t.type)||"Memo";case Zn:e=t._payload,t=t._init;try{return df(t(e))}catch{}}return null}function CE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return df(e);case 8:return e===rp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function kr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function O0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function EE(t){var e=O0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ua(t){t._valueTracker||(t._valueTracker=EE(t))}function R0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=O0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Bl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ff(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $g(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=kr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function A0(t,e){e=e.checked,e!=null&&np(t,"checked",e,!1)}function hf(t,e){A0(t,e);var n=kr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pf(t,e.type,n):e.hasOwnProperty("defaultValue")&&pf(t,e.type,kr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pf(t,e,n){(e!=="number"||Bl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function Yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+kr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(I(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Bg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(I(92));if(Zs(n)){if(1<n.length)throw Error(I(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:kr(n)}}function M0(t,e){var n=kr(e.value),r=kr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Wg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function L0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?L0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Va,D0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Va=Va||document.createElement("div"),Va.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Va.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Eo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var oo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kE=["Webkit","ms","Moz","O"];Object.keys(oo).forEach(function(t){kE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),oo[e]=oo[t]})});function j0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||oo.hasOwnProperty(t)&&oo[t]?(""+e).trim():e+"px"}function F0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=j0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var IE=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vf(t,e){if(e){if(IE[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(I(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(I(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(I(61))}if(e.style!=null&&typeof e.style!="object")throw Error(I(62))}}function yf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _f=null;function op(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var wf=null,qi=null,Ki=null;function Hg(t){if(t=pa(t)){if(typeof wf!="function")throw Error(I(280));var e=t.stateNode;e&&(e=nc(e),wf(t.stateNode,t.type,e))}}function U0(t){qi?Ki?Ki.push(t):Ki=[t]:qi=t}function V0(){if(qi){var t=qi,e=Ki;if(Ki=qi=null,Hg(t),e)for(t=0;t<e.length;t++)Hg(e[t])}}function $0(t,e){return t(e)}function z0(){}var rd=!1;function B0(t,e,n){if(rd)return t(e,n);rd=!0;try{return $0(t,e,n)}finally{rd=!1,(qi!==null||Ki!==null)&&(z0(),V0())}}function ko(t,e){var n=t.stateNode;if(n===null)return null;var r=nc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(I(231,e,typeof n));return n}var bf=!1;if(An)try{var Ls={};Object.defineProperty(Ls,"passive",{get:function(){bf=!0}}),window.addEventListener("test",Ls,Ls),window.removeEventListener("test",Ls,Ls)}catch{bf=!1}function TE(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ao=!1,Wl=null,Hl=!1,Sf=null,PE={onError:function(t){ao=!0,Wl=t}};function NE(t,e,n,r,i,s,o,a,l){ao=!1,Wl=null,TE.apply(PE,arguments)}function OE(t,e,n,r,i,s,o,a,l){if(NE.apply(this,arguments),ao){if(ao){var u=Wl;ao=!1,Wl=null}else throw Error(I(198));Hl||(Hl=!0,Sf=u)}}function wi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function W0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gg(t){if(wi(t)!==t)throw Error(I(188))}function RE(t){var e=t.alternate;if(!e){if(e=wi(t),e===null)throw Error(I(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gg(i),t;if(s===r)return Gg(i),e;s=s.sibling}throw Error(I(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(I(189))}}if(n.alternate!==r)throw Error(I(190))}if(n.tag!==3)throw Error(I(188));return n.stateNode.current===n?t:e}function H0(t){return t=RE(t),t!==null?G0(t):null}function G0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=G0(t);if(e!==null)return e;t=t.sibling}return null}var Y0=Ot.unstable_scheduleCallback,Yg=Ot.unstable_cancelCallback,AE=Ot.unstable_shouldYield,ME=Ot.unstable_requestPaint,Pe=Ot.unstable_now,LE=Ot.unstable_getCurrentPriorityLevel,ap=Ot.unstable_ImmediatePriority,q0=Ot.unstable_UserBlockingPriority,Gl=Ot.unstable_NormalPriority,DE=Ot.unstable_LowPriority,K0=Ot.unstable_IdlePriority,Ju=null,hn=null;function jE(t){if(hn&&typeof hn.onCommitFiberRoot=="function")try{hn.onCommitFiberRoot(Ju,t,void 0,(t.current.flags&128)===128)}catch{}}var Zt=Math.clz32?Math.clz32:VE,FE=Math.log,UE=Math.LN2;function VE(t){return t>>>=0,t===0?32:31-(FE(t)/UE|0)|0}var $a=64,za=4194304;function eo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=eo(a):(s&=o,s!==0&&(r=eo(s)))}else o=n&~i,o!==0?r=eo(o):s!==0&&(r=eo(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Zt(e),i=1<<n,r|=t[n],e&=~i;return r}function $E(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Zt(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=$E(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function xf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Q0(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function id(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function fa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zt(e),t[e]=n}function BE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Zt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function lp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Zt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function X0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var J0,up,Z0,ew,tw,Cf=!1,Ba=[],hr=null,pr=null,mr=null,Io=new Map,To=new Map,tr=[],WE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qg(t,e){switch(t){case"focusin":case"focusout":hr=null;break;case"dragenter":case"dragleave":pr=null;break;case"mouseover":case"mouseout":mr=null;break;case"pointerover":case"pointerout":Io.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(e.pointerId)}}function Ds(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=pa(e),e!==null&&up(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function HE(t,e,n,r,i){switch(e){case"focusin":return hr=Ds(hr,t,e,n,r,i),!0;case"dragenter":return pr=Ds(pr,t,e,n,r,i),!0;case"mouseover":return mr=Ds(mr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Io.set(s,Ds(Io.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,To.set(s,Ds(To.get(s)||null,t,e,n,r,i)),!0}return!1}function nw(t){var e=Hr(t.target);if(e!==null){var n=wi(e);if(n!==null){if(e=n.tag,e===13){if(e=W0(n),e!==null){t.blockedOn=e,tw(t.priority,function(){Z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Sl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ef(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);_f=r,n.target.dispatchEvent(r),_f=null}else return e=pa(n),e!==null&&up(e),t.blockedOn=n,!1;e.shift()}return!0}function Kg(t,e,n){Sl(t)&&n.delete(e)}function GE(){Cf=!1,hr!==null&&Sl(hr)&&(hr=null),pr!==null&&Sl(pr)&&(pr=null),mr!==null&&Sl(mr)&&(mr=null),Io.forEach(Kg),To.forEach(Kg)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,Cf||(Cf=!0,Ot.unstable_scheduleCallback(Ot.unstable_NormalPriority,GE)))}function Po(t){function e(i){return js(i,t)}if(0<Ba.length){js(Ba[0],t);for(var n=1;n<Ba.length;n++){var r=Ba[n];r.blockedOn===t&&(r.blockedOn=null)}}for(hr!==null&&js(hr,t),pr!==null&&js(pr,t),mr!==null&&js(mr,t),Io.forEach(e),To.forEach(e),n=0;n<tr.length;n++)r=tr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<tr.length&&(n=tr[0],n.blockedOn===null);)nw(n),n.blockedOn===null&&tr.shift()}var Qi=zn.ReactCurrentBatchConfig,ql=!0;function YE(t,e,n,r){var i=te,s=Qi.transition;Qi.transition=null;try{te=1,cp(t,e,n,r)}finally{te=i,Qi.transition=s}}function qE(t,e,n,r){var i=te,s=Qi.transition;Qi.transition=null;try{te=4,cp(t,e,n,r)}finally{te=i,Qi.transition=s}}function cp(t,e,n,r){if(ql){var i=Ef(t,e,n,r);if(i===null)pd(t,e,r,Kl,n),qg(t,r);else if(HE(i,t,e,n,r))r.stopPropagation();else if(qg(t,r),e&4&&-1<WE.indexOf(t)){for(;i!==null;){var s=pa(i);if(s!==null&&J0(s),s=Ef(t,e,n,r),s===null&&pd(t,e,r,Kl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else pd(t,e,r,null,n)}}var Kl=null;function Ef(t,e,n,r){if(Kl=null,t=op(r),t=Hr(t),t!==null)if(e=wi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=W0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Kl=t,null}function rw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(LE()){case ap:return 1;case q0:return 4;case Gl:case DE:return 16;case K0:return 536870912;default:return 16}default:return 16}}var lr=null,dp=null,xl=null;function iw(){if(xl)return xl;var t,e=dp,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return xl=i.slice(t,1<r?1-r:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Wa(){return!0}function Qg(){return!1}function At(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Wa:Qg,this.isPropagationStopped=Qg,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Wa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Wa)},persist:function(){},isPersistent:Wa}),e}var bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fp=At(bs),ha=Se({},bs,{view:0,detail:0}),KE=At(ha),sd,od,Fs,Zu=Se({},ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(sd=t.screenX-Fs.screenX,od=t.screenY-Fs.screenY):od=sd=0,Fs=t),sd)},movementY:function(t){return"movementY"in t?t.movementY:od}}),Xg=At(Zu),QE=Se({},Zu,{dataTransfer:0}),XE=At(QE),JE=Se({},ha,{relatedTarget:0}),ad=At(JE),ZE=Se({},bs,{animationName:0,elapsedTime:0,pseudoElement:0}),ek=At(ZE),tk=Se({},bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),nk=At(tk),rk=Se({},bs,{data:0}),Jg=At(rk),ik={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ok={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ak(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ok[t])?!!e[t]:!1}function hp(){return ak}var lk=Se({},ha,{key:function(t){if(t.key){var e=ik[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?sk[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),uk=At(lk),ck=Se({},Zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zg=At(ck),dk=Se({},ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),fk=At(dk),hk=Se({},bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),pk=At(hk),mk=Se({},Zu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),gk=At(mk),vk=[9,13,27,32],pp=An&&"CompositionEvent"in window,lo=null;An&&"documentMode"in document&&(lo=document.documentMode);var yk=An&&"TextEvent"in window&&!lo,sw=An&&(!pp||lo&&8<lo&&11>=lo),ev=" ",tv=!1;function ow(t,e){switch(t){case"keyup":return vk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function aw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Oi=!1;function _k(t,e){switch(t){case"compositionend":return aw(e);case"keypress":return e.which!==32?null:(tv=!0,ev);case"textInput":return t=e.data,t===ev&&tv?null:t;default:return null}}function wk(t,e){if(Oi)return t==="compositionend"||!pp&&ow(t,e)?(t=iw(),xl=dp=lr=null,Oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return sw&&e.locale!=="ko"?null:e.data;default:return null}}var bk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!bk[t.type]:e==="textarea"}function lw(t,e,n,r){U0(r),e=Ql(e,"onChange"),0<e.length&&(n=new fp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var uo=null,No=null;function Sk(t){_w(t,0)}function ec(t){var e=Mi(t);if(R0(e))return t}function xk(t,e){if(t==="change")return e}var uw=!1;if(An){var ld;if(An){var ud="oninput"in document;if(!ud){var rv=document.createElement("div");rv.setAttribute("oninput","return;"),ud=typeof rv.oninput=="function"}ld=ud}else ld=!1;uw=ld&&(!document.documentMode||9<document.documentMode)}function iv(){uo&&(uo.detachEvent("onpropertychange",cw),No=uo=null)}function cw(t){if(t.propertyName==="value"&&ec(No)){var e=[];lw(e,No,t,op(t)),B0(Sk,e)}}function Ck(t,e,n){t==="focusin"?(iv(),uo=e,No=n,uo.attachEvent("onpropertychange",cw)):t==="focusout"&&iv()}function Ek(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ec(No)}function kk(t,e){if(t==="click")return ec(e)}function Ik(t,e){if(t==="input"||t==="change")return ec(e)}function Tk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var rn=typeof Object.is=="function"?Object.is:Tk;function Oo(t,e){if(rn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!af.call(e,i)||!rn(t[i],e[i]))return!1}return!0}function sv(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ov(t,e){var n=sv(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sv(n)}}function dw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?dw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function fw(){for(var t=window,e=Bl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Bl(t.document)}return e}function mp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Pk(t){var e=fw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&dw(n.ownerDocument.documentElement,n)){if(r!==null&&mp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=ov(n,s);var o=ov(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Nk=An&&"documentMode"in document&&11>=document.documentMode,Ri=null,kf=null,co=null,If=!1;function av(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;If||Ri==null||Ri!==Bl(r)||(r=Ri,"selectionStart"in r&&mp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),co&&Oo(co,r)||(co=r,r=Ql(kf,"onSelect"),0<r.length&&(e=new fp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ri)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ai={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},cd={},hw={};An&&(hw=document.createElement("div").style,"AnimationEvent"in window||(delete Ai.animationend.animation,delete Ai.animationiteration.animation,delete Ai.animationstart.animation),"TransitionEvent"in window||delete Ai.transitionend.transition);function tc(t){if(cd[t])return cd[t];if(!Ai[t])return t;var e=Ai[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in hw)return cd[t]=e[n];return t}var pw=tc("animationend"),mw=tc("animationiteration"),gw=tc("animationstart"),vw=tc("transitionend"),yw=new Map,lv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){yw.set(t,e),_i(e,[t])}for(var dd=0;dd<lv.length;dd++){var fd=lv[dd],Ok=fd.toLowerCase(),Rk=fd[0].toUpperCase()+fd.slice(1);Dr(Ok,"on"+Rk)}Dr(pw,"onAnimationEnd");Dr(mw,"onAnimationIteration");Dr(gw,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(vw,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);_i("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_i("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_i("onBeforeInput",["compositionend","keypress","textInput","paste"]);_i("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_i("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ak=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function uv(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,OE(r,e,void 0,t),t.currentTarget=null}function _w(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;uv(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;uv(i,a,u),s=l}}}if(Hl)throw t=Sf,Hl=!1,Sf=null,t}function ue(t,e){var n=e[Rf];n===void 0&&(n=e[Rf]=new Set);var r=t+"__bubble";n.has(r)||(ww(e,t,2,!1),n.add(r))}function hd(t,e,n){var r=0;e&&(r|=4),ww(n,t,r,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function Ro(t){if(!t[Ga]){t[Ga]=!0,I0.forEach(function(n){n!=="selectionchange"&&(Ak.has(n)||hd(n,!1,t),hd(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,hd("selectionchange",!1,e))}}function ww(t,e,n,r){switch(rw(e)){case 1:var i=YE;break;case 4:i=qE;break;default:i=cp}n=i.bind(null,e,n,t),i=void 0,!bf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function pd(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Hr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}B0(function(){var u=s,c=op(n),d=[];e:{var h=yw.get(t);if(h!==void 0){var g=fp,v=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":g=uk;break;case"focusin":v="focus",g=ad;break;case"focusout":v="blur",g=ad;break;case"beforeblur":case"afterblur":g=ad;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Xg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=XE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=fk;break;case pw:case mw:case gw:g=ek;break;case vw:g=pk;break;case"scroll":g=KE;break;case"wheel":g=gk;break;case"copy":case"cut":case"paste":g=nk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Zg}var y=(e&4)!==0,w=!y&&t==="scroll",p=y?h!==null?h+"Capture":null:h;y=[];for(var m=u,_;m!==null;){_=m;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,p!==null&&(S=ko(m,p),S!=null&&y.push(Ao(m,S,_)))),w)break;m=m.return}0<y.length&&(h=new g(h,v,null,n,c),d.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==_f&&(v=n.relatedTarget||n.fromElement)&&(Hr(v)||v[Mn]))break e;if((g||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Hr(v):null,v!==null&&(w=wi(v),v!==w||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(y=Xg,S="onMouseLeave",p="onMouseEnter",m="mouse",(t==="pointerout"||t==="pointerover")&&(y=Zg,S="onPointerLeave",p="onPointerEnter",m="pointer"),w=g==null?h:Mi(g),_=v==null?h:Mi(v),h=new y(S,m+"leave",g,n,c),h.target=w,h.relatedTarget=_,S=null,Hr(c)===u&&(y=new y(p,m+"enter",v,n,c),y.target=_,y.relatedTarget=w,S=y),w=S,g&&v)t:{for(y=g,p=v,m=0,_=y;_;_=Ei(_))m++;for(_=0,S=p;S;S=Ei(S))_++;for(;0<m-_;)y=Ei(y),m--;for(;0<_-m;)p=Ei(p),_--;for(;m--;){if(y===p||p!==null&&y===p.alternate)break t;y=Ei(y),p=Ei(p)}y=null}else y=null;g!==null&&cv(d,h,g,y,!1),v!==null&&w!==null&&cv(d,w,v,y,!0)}}e:{if(h=u?Mi(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var x=xk;else if(nv(h))if(uw)x=Ik;else{x=Ek;var k=Ck}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(x=kk);if(x&&(x=x(t,u))){lw(d,x,n,c);break e}k&&k(t,h,u),t==="focusout"&&(k=h._wrapperState)&&k.controlled&&h.type==="number"&&pf(h,"number",h.value)}switch(k=u?Mi(u):window,t){case"focusin":(nv(k)||k.contentEditable==="true")&&(Ri=k,kf=u,co=null);break;case"focusout":co=kf=Ri=null;break;case"mousedown":If=!0;break;case"contextmenu":case"mouseup":case"dragend":If=!1,av(d,n,c);break;case"selectionchange":if(Nk)break;case"keydown":case"keyup":av(d,n,c)}var E;if(pp)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Oi?ow(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(sw&&n.locale!=="ko"&&(Oi||C!=="onCompositionStart"?C==="onCompositionEnd"&&Oi&&(E=iw()):(lr=c,dp="value"in lr?lr.value:lr.textContent,Oi=!0)),k=Ql(u,C),0<k.length&&(C=new Jg(C,t,null,n,c),d.push({event:C,listeners:k}),E?C.data=E:(E=aw(n),E!==null&&(C.data=E)))),(E=yk?_k(t,n):wk(t,n))&&(u=Ql(u,"onBeforeInput"),0<u.length&&(c=new Jg("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}_w(d,e)})}function Ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ko(t,n),s!=null&&r.unshift(Ao(t,s,i)),s=ko(t,e),s!=null&&r.push(Ao(t,s,i))),t=t.return}return r}function Ei(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function cv(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=ko(n,s),l!=null&&o.unshift(Ao(n,l,a))):i||(l=ko(n,s),l!=null&&o.push(Ao(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Mk=/\r\n?/g,Lk=/\u0000|\uFFFD/g;function dv(t){return(typeof t=="string"?t:""+t).replace(Mk,`
`).replace(Lk,"")}function Ya(t,e,n){if(e=dv(e),dv(t)!==e&&n)throw Error(I(425))}function Xl(){}var Tf=null,Pf=null;function Nf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Of=typeof setTimeout=="function"?setTimeout:void 0,Dk=typeof clearTimeout=="function"?clearTimeout:void 0,fv=typeof Promise=="function"?Promise:void 0,jk=typeof queueMicrotask=="function"?queueMicrotask:typeof fv<"u"?function(t){return fv.resolve(null).then(t).catch(Fk)}:Of;function Fk(t){setTimeout(function(){throw t})}function md(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Po(e)}function gr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function hv(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),cn="__reactFiber$"+Ss,Mo="__reactProps$"+Ss,Mn="__reactContainer$"+Ss,Rf="__reactEvents$"+Ss,Uk="__reactListeners$"+Ss,Vk="__reactHandles$"+Ss;function Hr(t){var e=t[cn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mn]||n[cn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=hv(t);t!==null;){if(n=t[cn])return n;t=hv(t)}return e}t=n,n=t.parentNode}return null}function pa(t){return t=t[cn]||t[Mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Mi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(I(33))}function nc(t){return t[Mo]||null}var Af=[],Li=-1;function jr(t){return{current:t}}function de(t){0>Li||(t.current=Af[Li],Af[Li]=null,Li--)}function le(t,e){Li++,Af[Li]=t.current,t.current=e}var Ir={},st=jr(Ir),wt=jr(!1),ri=Ir;function os(t,e){var n=t.type.contextTypes;if(!n)return Ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function bt(t){return t=t.childContextTypes,t!=null}function Jl(){de(wt),de(st)}function pv(t,e,n){if(st.current!==Ir)throw Error(I(168));le(st,e),le(wt,n)}function bw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(I(108,CE(t)||"Unknown",i));return Se({},n,r)}function Zl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,ri=st.current,le(st,t),le(wt,wt.current),!0}function mv(t,e,n){var r=t.stateNode;if(!r)throw Error(I(169));n?(t=bw(t,e,ri),r.__reactInternalMemoizedMergedChildContext=t,de(wt),de(st),le(st,t)):de(wt),le(wt,n)}var Cn=null,rc=!1,gd=!1;function Sw(t){Cn===null?Cn=[t]:Cn.push(t)}function $k(t){rc=!0,Sw(t)}function Fr(){if(!gd&&Cn!==null){gd=!0;var t=0,e=te;try{var n=Cn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Cn=null,rc=!1}catch(i){throw Cn!==null&&(Cn=Cn.slice(t+1)),Y0(ap,Fr),i}finally{te=e,gd=!1}}return null}var Di=[],ji=0,eu=null,tu=0,jt=[],Ft=0,ii=null,En=1,kn="";function $r(t,e){Di[ji++]=tu,Di[ji++]=eu,eu=t,tu=e}function xw(t,e,n){jt[Ft++]=En,jt[Ft++]=kn,jt[Ft++]=ii,ii=t;var r=En;t=kn;var i=32-Zt(r)-1;r&=~(1<<i),n+=1;var s=32-Zt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Zt(e)+i|n<<i|r,kn=s+t}else En=1<<s|n<<i|r,kn=t}function gp(t){t.return!==null&&($r(t,1),xw(t,1,0))}function vp(t){for(;t===eu;)eu=Di[--ji],Di[ji]=null,tu=Di[--ji],Di[ji]=null;for(;t===ii;)ii=jt[--Ft],jt[Ft]=null,kn=jt[--Ft],jt[Ft]=null,En=jt[--Ft],jt[Ft]=null}var Pt=null,It=null,pe=!1,Kt=null;function Cw(t,e){var n=Ut(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function gv(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,It=gr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,It=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ii!==null?{id:En,overflow:kn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ut(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,It=null,!0):!1;default:return!1}}function Mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lf(t){if(pe){var e=It;if(e){var n=e;if(!gv(t,e)){if(Mf(t))throw Error(I(418));e=gr(n.nextSibling);var r=Pt;e&&gv(t,e)?Cw(r,n):(t.flags=t.flags&-4097|2,pe=!1,Pt=t)}}else{if(Mf(t))throw Error(I(418));t.flags=t.flags&-4097|2,pe=!1,Pt=t}}}function vv(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function qa(t){if(t!==Pt)return!1;if(!pe)return vv(t),pe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Nf(t.type,t.memoizedProps)),e&&(e=It)){if(Mf(t))throw Ew(),Error(I(418));for(;e;)Cw(t,e),e=gr(e.nextSibling)}if(vv(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(I(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){It=gr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}It=null}}else It=Pt?gr(t.stateNode.nextSibling):null;return!0}function Ew(){for(var t=It;t;)t=gr(t.nextSibling)}function as(){It=Pt=null,pe=!1}function yp(t){Kt===null?Kt=[t]:Kt.push(t)}var zk=zn.ReactCurrentBatchConfig;function Yt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var nu=jr(null),ru=null,Fi=null,_p=null;function wp(){_p=Fi=ru=null}function bp(t){var e=nu.current;de(nu),t._currentValue=e}function Df(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xi(t,e){ru=t,_p=Fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(yt=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(_p!==t)if(t={context:t,memoizedValue:e,next:null},Fi===null){if(ru===null)throw Error(I(308));Fi=t,ru.dependencies={lanes:0,firstContext:t}}else Fi=Fi.next=t;return e}var Gr=null;function Sp(t){Gr===null?Gr=[t]:Gr.push(t)}function kw(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Sp(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var er=!1;function xp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Iw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Nn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,Sp(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function El(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lp(t,n)}}function yv(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function iu(t,e,n,r){var i=t.updateQueue;er=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,g=a.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,y=a;switch(h=e,g=n,y.tag){case 1:if(v=y.payload,typeof v=="function"){d=v.call(g,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=y.payload,h=typeof v=="function"?v.call(g,d,h):v,h==null)break e;d=Se({},d,h);break e;case 2:er=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else g={eventTime:g,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);oi|=o,t.lanes=o,t.memoizedState=d}}function _v(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(I(191,i));i.call(r)}}}var Tw=new k0.Component().refs;function jf(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ic={isMounted:function(t){return(t=t._reactInternals)?wi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ft(),i=_r(t),s=Nn(r,i);s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(en(e,t,i,r),El(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ft(),i=_r(t),s=Nn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=vr(t,s,i),e!==null&&(en(e,t,i,r),El(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ft(),r=_r(t),i=Nn(n,r);i.tag=2,e!=null&&(i.callback=e),e=vr(t,i,r),e!==null&&(en(e,t,r,n),El(e,t,r))}};function wv(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,s):!0}function Pw(t,e,n){var r=!1,i=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=zt(s):(i=bt(e)?ri:st.current,r=e.contextTypes,s=(r=r!=null)?os(t,i):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ic,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function bv(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ic.enqueueReplaceState(e,e.state,null)}function Ff(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Tw,xp(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=zt(s):(s=bt(e)?ri:st.current,i.context=os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(jf(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ic.enqueueReplaceState(i,i.state,null),iu(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Us(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(I(309));var r=n.stateNode}if(!r)throw Error(I(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Tw&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(I(284));if(!n._owner)throw Error(I(290,t))}return t}function Ka(t,e){throw t=Object.prototype.toString.call(e),Error(I(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Sv(t){var e=t._init;return e(t._payload)}function Nw(t){function e(p,m){if(t){var _=p.deletions;_===null?(p.deletions=[m],p.flags|=16):_.push(m)}}function n(p,m){if(!t)return null;for(;m!==null;)e(p,m),m=m.sibling;return null}function r(p,m){for(p=new Map;m!==null;)m.key!==null?p.set(m.key,m):p.set(m.index,m),m=m.sibling;return p}function i(p,m){return p=wr(p,m),p.index=0,p.sibling=null,p}function s(p,m,_){return p.index=_,t?(_=p.alternate,_!==null?(_=_.index,_<m?(p.flags|=2,m):_):(p.flags|=2,m)):(p.flags|=1048576,m)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,m,_,S){return m===null||m.tag!==6?(m=xd(_,p.mode,S),m.return=p,m):(m=i(m,_),m.return=p,m)}function l(p,m,_,S){var x=_.type;return x===Ni?c(p,m,_.props.children,S,_.key):m!==null&&(m.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zn&&Sv(x)===m.type)?(S=i(m,_.props),S.ref=Us(p,m,_),S.return=p,S):(S=Ol(_.type,_.key,_.props,null,p.mode,S),S.ref=Us(p,m,_),S.return=p,S)}function u(p,m,_,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=Cd(_,p.mode,S),m.return=p,m):(m=i(m,_.children||[]),m.return=p,m)}function c(p,m,_,S,x){return m===null||m.tag!==7?(m=Jr(_,p.mode,S,x),m.return=p,m):(m=i(m,_),m.return=p,m)}function d(p,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=xd(""+m,p.mode,_),m.return=p,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Fa:return _=Ol(m.type,m.key,m.props,null,p.mode,_),_.ref=Us(p,null,m),_.return=p,_;case Pi:return m=Cd(m,p.mode,_),m.return=p,m;case Zn:var S=m._init;return d(p,S(m._payload),_)}if(Zs(m)||Ms(m))return m=Jr(m,p.mode,_,null),m.return=p,m;Ka(p,m)}return null}function h(p,m,_,S){var x=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return x!==null?null:a(p,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Fa:return _.key===x?l(p,m,_,S):null;case Pi:return _.key===x?u(p,m,_,S):null;case Zn:return x=_._init,h(p,m,x(_._payload),S)}if(Zs(_)||Ms(_))return x!==null?null:c(p,m,_,S,null);Ka(p,_)}return null}function g(p,m,_,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return p=p.get(_)||null,a(m,p,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Fa:return p=p.get(S.key===null?_:S.key)||null,l(m,p,S,x);case Pi:return p=p.get(S.key===null?_:S.key)||null,u(m,p,S,x);case Zn:var k=S._init;return g(p,m,_,k(S._payload),x)}if(Zs(S)||Ms(S))return p=p.get(_)||null,c(m,p,S,x,null);Ka(m,S)}return null}function v(p,m,_,S){for(var x=null,k=null,E=m,C=m=0,A=null;E!==null&&C<_.length;C++){E.index>C?(A=E,E=null):A=E.sibling;var N=h(p,E,_[C],S);if(N===null){E===null&&(E=A);break}t&&E&&N.alternate===null&&e(p,E),m=s(N,m,C),k===null?x=N:k.sibling=N,k=N,E=A}if(C===_.length)return n(p,E),pe&&$r(p,C),x;if(E===null){for(;C<_.length;C++)E=d(p,_[C],S),E!==null&&(m=s(E,m,C),k===null?x=E:k.sibling=E,k=E);return pe&&$r(p,C),x}for(E=r(p,E);C<_.length;C++)A=g(E,p,C,_[C],S),A!==null&&(t&&A.alternate!==null&&E.delete(A.key===null?C:A.key),m=s(A,m,C),k===null?x=A:k.sibling=A,k=A);return t&&E.forEach(function(K){return e(p,K)}),pe&&$r(p,C),x}function y(p,m,_,S){var x=Ms(_);if(typeof x!="function")throw Error(I(150));if(_=x.call(_),_==null)throw Error(I(151));for(var k=x=null,E=m,C=m=0,A=null,N=_.next();E!==null&&!N.done;C++,N=_.next()){E.index>C?(A=E,E=null):A=E.sibling;var K=h(p,E,N.value,S);if(K===null){E===null&&(E=A);break}t&&E&&K.alternate===null&&e(p,E),m=s(K,m,C),k===null?x=K:k.sibling=K,k=K,E=A}if(N.done)return n(p,E),pe&&$r(p,C),x;if(E===null){for(;!N.done;C++,N=_.next())N=d(p,N.value,S),N!==null&&(m=s(N,m,C),k===null?x=N:k.sibling=N,k=N);return pe&&$r(p,C),x}for(E=r(p,E);!N.done;C++,N=_.next())N=g(E,p,C,N.value,S),N!==null&&(t&&N.alternate!==null&&E.delete(N.key===null?C:N.key),m=s(N,m,C),k===null?x=N:k.sibling=N,k=N);return t&&E.forEach(function(he){return e(p,he)}),pe&&$r(p,C),x}function w(p,m,_,S){if(typeof _=="object"&&_!==null&&_.type===Ni&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Fa:e:{for(var x=_.key,k=m;k!==null;){if(k.key===x){if(x=_.type,x===Ni){if(k.tag===7){n(p,k.sibling),m=i(k,_.props.children),m.return=p,p=m;break e}}else if(k.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===Zn&&Sv(x)===k.type){n(p,k.sibling),m=i(k,_.props),m.ref=Us(p,k,_),m.return=p,p=m;break e}n(p,k);break}else e(p,k);k=k.sibling}_.type===Ni?(m=Jr(_.props.children,p.mode,S,_.key),m.return=p,p=m):(S=Ol(_.type,_.key,_.props,null,p.mode,S),S.ref=Us(p,m,_),S.return=p,p=S)}return o(p);case Pi:e:{for(k=_.key;m!==null;){if(m.key===k)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){n(p,m.sibling),m=i(m,_.children||[]),m.return=p,p=m;break e}else{n(p,m);break}else e(p,m);m=m.sibling}m=Cd(_,p.mode,S),m.return=p,p=m}return o(p);case Zn:return k=_._init,w(p,m,k(_._payload),S)}if(Zs(_))return v(p,m,_,S);if(Ms(_))return y(p,m,_,S);Ka(p,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(n(p,m.sibling),m=i(m,_),m.return=p,p=m):(n(p,m),m=xd(_,p.mode,S),m.return=p,p=m),o(p)):n(p,m)}return w}var ls=Nw(!0),Ow=Nw(!1),ma={},pn=jr(ma),Lo=jr(ma),Do=jr(ma);function Yr(t){if(t===ma)throw Error(I(174));return t}function Cp(t,e){switch(le(Do,e),le(Lo,t),le(pn,ma),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gf(e,t)}de(pn),le(pn,e)}function us(){de(pn),de(Lo),de(Do)}function Rw(t){Yr(Do.current);var e=Yr(pn.current),n=gf(e,t.type);e!==n&&(le(Lo,t),le(pn,n))}function Ep(t){Lo.current===t&&(de(pn),de(Lo))}var ye=jr(0);function su(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vd=[];function kp(){for(var t=0;t<vd.length;t++)vd[t]._workInProgressVersionPrimary=null;vd.length=0}var kl=zn.ReactCurrentDispatcher,yd=zn.ReactCurrentBatchConfig,si=0,we=null,Me=null,Ve=null,ou=!1,fo=!1,jo=0,Bk=0;function tt(){throw Error(I(321))}function Ip(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!rn(t[n],e[n]))return!1;return!0}function Tp(t,e,n,r,i,s){if(si=s,we=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,kl.current=t===null||t.memoizedState===null?Yk:qk,t=n(r,i),fo){s=0;do{if(fo=!1,jo=0,25<=s)throw Error(I(301));s+=1,Ve=Me=null,e.updateQueue=null,kl.current=Kk,t=n(r,i)}while(fo)}if(kl.current=au,e=Me!==null&&Me.next!==null,si=0,Ve=Me=we=null,ou=!1,e)throw Error(I(300));return t}function Pp(){var t=jo!==0;return jo=0,t}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?we.memoizedState=Ve=t:Ve=Ve.next=t,Ve}function Bt(){if(Me===null){var t=we.alternate;t=t!==null?t.memoizedState:null}else t=Me.next;var e=Ve===null?we.memoizedState:Ve.next;if(e!==null)Ve=e,Me=t;else{if(t===null)throw Error(I(310));Me=t,t={memoizedState:Me.memoizedState,baseState:Me.baseState,baseQueue:Me.baseQueue,queue:Me.queue,next:null},Ve===null?we.memoizedState=Ve=t:Ve=Ve.next=t}return Ve}function Fo(t,e){return typeof e=="function"?e(t):e}function _d(t){var e=Bt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=Me,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((si&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,we.lanes|=c,oi|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,rn(r,e.memoizedState)||(yt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,we.lanes|=s,oi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function wd(t){var e=Bt(),n=e.queue;if(n===null)throw Error(I(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);rn(s,e.memoizedState)||(yt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Aw(){}function Mw(t,e){var n=we,r=Bt(),i=e(),s=!rn(r.memoizedState,i);if(s&&(r.memoizedState=i,yt=!0),r=r.queue,Np(jw.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ve!==null&&Ve.memoizedState.tag&1){if(n.flags|=2048,Uo(9,Dw.bind(null,n,r,i,e),void 0,null),ze===null)throw Error(I(349));si&30||Lw(n,e,i)}return i}function Lw(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dw(t,e,n,r){e.value=n,e.getSnapshot=r,Fw(e)&&Uw(t)}function jw(t,e,n){return n(function(){Fw(e)&&Uw(t)})}function Fw(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!rn(t,n)}catch{return!0}}function Uw(t){var e=Ln(t,1);e!==null&&en(e,t,1,-1)}function xv(t){var e=an();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fo,lastRenderedState:t},e.queue=t,t=t.dispatch=Gk.bind(null,we,t),[e.memoizedState,t]}function Uo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=we.updateQueue,e===null?(e={lastEffect:null,stores:null},we.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Vw(){return Bt().memoizedState}function Il(t,e,n,r){var i=an();we.flags|=t,i.memoizedState=Uo(1|e,n,void 0,r===void 0?null:r)}function sc(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(Me!==null){var o=Me.memoizedState;if(s=o.destroy,r!==null&&Ip(r,o.deps)){i.memoizedState=Uo(e,n,s,r);return}}we.flags|=t,i.memoizedState=Uo(1|e,n,s,r)}function Cv(t,e){return Il(8390656,8,t,e)}function Np(t,e){return sc(2048,8,t,e)}function $w(t,e){return sc(4,2,t,e)}function zw(t,e){return sc(4,4,t,e)}function Bw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ww(t,e,n){return n=n!=null?n.concat([t]):null,sc(4,4,Bw.bind(null,e,t),n)}function Op(){}function Hw(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ip(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Gw(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Ip(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Yw(t,e,n){return si&21?(rn(n,e)||(n=Q0(),we.lanes|=n,oi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,yt=!0),t.memoizedState=n)}function Wk(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=yd.transition;yd.transition={};try{t(!1),e()}finally{te=n,yd.transition=r}}function qw(){return Bt().memoizedState}function Hk(t,e,n){var r=_r(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kw(t))Qw(e,n);else if(n=kw(t,e,n,r),n!==null){var i=ft();en(n,t,r,i),Xw(n,e,r)}}function Gk(t,e,n){var r=_r(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kw(t))Qw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,rn(a,o)){var l=e.interleaved;l===null?(i.next=i,Sp(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=kw(t,e,i,r),n!==null&&(i=ft(),en(n,t,r,i),Xw(n,e,r))}}function Kw(t){var e=t.alternate;return t===we||e!==null&&e===we}function Qw(t,e){fo=ou=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Xw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,lp(t,n)}}var au={readContext:zt,useCallback:tt,useContext:tt,useEffect:tt,useImperativeHandle:tt,useInsertionEffect:tt,useLayoutEffect:tt,useMemo:tt,useReducer:tt,useRef:tt,useState:tt,useDebugValue:tt,useDeferredValue:tt,useTransition:tt,useMutableSource:tt,useSyncExternalStore:tt,useId:tt,unstable_isNewReconciler:!1},Yk={readContext:zt,useCallback:function(t,e){return an().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:Cv,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,Bw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=an();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=an();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Hk.bind(null,we,t),[r.memoizedState,t]},useRef:function(t){var e=an();return t={current:t},e.memoizedState=t},useState:xv,useDebugValue:Op,useDeferredValue:function(t){return an().memoizedState=t},useTransition:function(){var t=xv(!1),e=t[0];return t=Wk.bind(null,t[1]),an().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=we,i=an();if(pe){if(n===void 0)throw Error(I(407));n=n()}else{if(n=e(),ze===null)throw Error(I(349));si&30||Lw(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cv(jw.bind(null,r,s,t),[t]),r.flags|=2048,Uo(9,Dw.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=an(),e=ze.identifierPrefix;if(pe){var n=kn,r=En;n=(r&~(1<<32-Zt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=jo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Bk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},qk={readContext:zt,useCallback:Hw,useContext:zt,useEffect:Np,useImperativeHandle:Ww,useInsertionEffect:$w,useLayoutEffect:zw,useMemo:Gw,useReducer:_d,useRef:Vw,useState:function(){return _d(Fo)},useDebugValue:Op,useDeferredValue:function(t){var e=Bt();return Yw(e,Me.memoizedState,t)},useTransition:function(){var t=_d(Fo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:Aw,useSyncExternalStore:Mw,useId:qw,unstable_isNewReconciler:!1},Kk={readContext:zt,useCallback:Hw,useContext:zt,useEffect:Np,useImperativeHandle:Ww,useInsertionEffect:$w,useLayoutEffect:zw,useMemo:Gw,useReducer:wd,useRef:Vw,useState:function(){return wd(Fo)},useDebugValue:Op,useDeferredValue:function(t){var e=Bt();return Me===null?e.memoizedState=t:Yw(e,Me.memoizedState,t)},useTransition:function(){var t=wd(Fo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:Aw,useSyncExternalStore:Mw,useId:qw,unstable_isNewReconciler:!1};function cs(t,e){try{var n="",r=e;do n+=xE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function bd(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Uf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Qk=typeof WeakMap=="function"?WeakMap:Map;function Jw(t,e,n){n=Nn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){uu||(uu=!0,Kf=r),Uf(t,e)},n}function Zw(t,e,n){n=Nn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Uf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Uf(t,e),typeof r!="function"&&(yr===null?yr=new Set([this]):yr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ev(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Qk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=cI.bind(null,t,e,n),e.then(t,t))}function kv(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Iv(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Nn(-1,1),e.tag=2,vr(n,e,1))),n.lanes|=1),t)}var Xk=zn.ReactCurrentOwner,yt=!1;function ct(t,e,n,r){e.child=t===null?Ow(e,null,n,r):ls(e,t.child,n,r)}function Tv(t,e,n,r,i){n=n.render;var s=e.ref;return Xi(e,i),r=Tp(t,e,n,r,s,i),n=Pp(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(pe&&n&&gp(e),e.flags|=1,ct(t,e,r,i),e.child)}function Pv(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Up(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,e1(t,e,s,r,i)):(t=Ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,r)&&t.ref===e.ref)return Dn(t,e,i)}return e.flags|=1,t=wr(s,r),t.ref=e.ref,t.return=e,e.child=t}function e1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oo(s,r)&&t.ref===e.ref)if(yt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(yt=!0);else return e.lanes=t.lanes,Dn(t,e,i)}return Vf(t,e,n,r,i)}function t1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},le(Vi,kt),kt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,le(Vi,kt),kt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,le(Vi,kt),kt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,le(Vi,kt),kt|=r;return ct(t,e,i,n),e.child}function n1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vf(t,e,n,r,i){var s=bt(n)?ri:st.current;return s=os(e,s),Xi(e,i),n=Tp(t,e,n,r,s,i),r=Pp(),t!==null&&!yt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Dn(t,e,i)):(pe&&r&&gp(e),e.flags|=1,ct(t,e,n,i),e.child)}function Nv(t,e,n,r,i){if(bt(n)){var s=!0;Zl(e)}else s=!1;if(Xi(e,i),e.stateNode===null)Tl(t,e),Pw(e,n,r),Ff(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=zt(u):(u=bt(n)?ri:st.current,u=os(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&bv(e,o,r,u),er=!1;var h=e.memoizedState;o.state=h,iu(e,r,o,i),l=e.memoizedState,a!==r||h!==l||wt.current||er?(typeof c=="function"&&(jf(e,n,c,r),l=e.memoizedState),(a=er||wv(e,n,a,r,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Iw(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Yt(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zt(l):(l=bt(n)?ri:st.current,l=os(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&bv(e,o,r,l),er=!1,h=e.memoizedState,o.state=h,iu(e,r,o,i);var v=e.memoizedState;a!==d||h!==v||wt.current||er?(typeof g=="function"&&(jf(e,n,g,r),v=e.memoizedState),(u=er||wv(e,n,u,r,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return $f(t,e,n,r,s,i)}function $f(t,e,n,r,i,s){n1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&mv(e,n,!1),Dn(t,e,s);r=e.stateNode,Xk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,a,s)):ct(t,e,a,s),e.memoizedState=r.state,i&&mv(e,n,!0),e.child}function r1(t){var e=t.stateNode;e.pendingContext?pv(t,e.pendingContext,e.pendingContext!==e.context):e.context&&pv(t,e.context,!1),Cp(t,e.containerInfo)}function Ov(t,e,n,r,i){return as(),yp(i),e.flags|=256,ct(t,e,n,r),e.child}var zf={dehydrated:null,treeContext:null,retryLane:0};function Bf(t){return{baseLanes:t,cachePool:null,transitions:null}}function i1(t,e,n){var r=e.pendingProps,i=ye.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),le(ye,i&1),t===null)return Lf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lc(o,r,0,null),t=Jr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Bf(n),e.memoizedState=zf,t):Rp(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Jk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=wr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=Jr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Bf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=zf,r}return s=t.child,t=s.sibling,r=wr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Rp(t,e){return e=lc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qa(t,e,n,r){return r!==null&&yp(r),ls(e,t.child,null,n),t=Rp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Jk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=bd(Error(I(422))),Qa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=lc({mode:"visible",children:r.children},i,0,null),s=Jr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=Bf(o),e.memoizedState=zf,s);if(!(e.mode&1))return Qa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(I(419)),r=bd(s,r,void 0),Qa(t,e,o,r)}if(a=(o&t.childLanes)!==0,yt||a){if(r=ze,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(t,i),en(r,t,i,-1))}return Fp(),r=bd(Error(I(421))),Qa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=dI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,It=gr(i.nextSibling),Pt=e,pe=!0,Kt=null,t!==null&&(jt[Ft++]=En,jt[Ft++]=kn,jt[Ft++]=ii,En=t.id,kn=t.overflow,ii=e),e=Rp(e,r.children),e.flags|=4096,e)}function Rv(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Df(t.return,e,n)}function Sd(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function s1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(ct(t,e,r.children,n),r=ye.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rv(t,n,e);else if(t.tag===19)Rv(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(le(ye,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&su(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Sd(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&su(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Sd(e,!0,n,null,s);break;case"together":Sd(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Dn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),oi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(I(153));if(e.child!==null){for(t=e.child,n=wr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=wr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Zk(t,e,n){switch(e.tag){case 3:r1(e),as();break;case 5:Rw(e);break;case 1:bt(e.type)&&Zl(e);break;case 4:Cp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;le(nu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(le(ye,ye.current&1),e.flags|=128,null):n&e.child.childLanes?i1(t,e,n):(le(ye,ye.current&1),t=Dn(t,e,n),t!==null?t.sibling:null);le(ye,ye.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return s1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),le(ye,ye.current),r)break;return null;case 22:case 23:return e.lanes=0,t1(t,e,n)}return Dn(t,e,n)}var o1,Wf,a1,l1;o1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wf=function(){};a1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Yr(pn.current);var s=null;switch(n){case"input":i=ff(t,i),r=ff(t,r),s=[];break;case"select":i=Se({},i,{value:void 0}),r=Se({},r,{value:void 0}),s=[];break;case"textarea":i=mf(t,i),r=mf(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xl)}vf(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Co.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Co.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ue("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};l1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Vs(t,e){if(!pe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function nt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function eI(t,e,n){var r=e.pendingProps;switch(vp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(e),null;case 1:return bt(e.type)&&Jl(),nt(e),null;case 3:return r=e.stateNode,us(),de(wt),de(st),kp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Kt!==null&&(Jf(Kt),Kt=null))),Wf(t,e),nt(e),null;case 5:Ep(e);var i=Yr(Do.current);if(n=e.type,t!==null&&e.stateNode!=null)a1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(I(166));return nt(e),null}if(t=Yr(pn.current),qa(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[cn]=e,r[Mo]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<to.length;i++)ue(to[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":$g(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":Bg(r,s),ue("invalid",r)}vf(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ya(r.textContent,a,t),i=["children",""+a]):Co.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ue("scroll",r)}switch(n){case"input":Ua(r),zg(r,s,!0);break;case"textarea":Ua(r),Wg(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=L0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[cn]=e,t[Mo]=r,o1(t,e,!1,!1),e.stateNode=t;e:{switch(o=yf(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<to.length;i++)ue(to[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":$g(t,r),i=ff(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Se({},r,{value:void 0}),ue("invalid",t);break;case"textarea":Bg(t,r),i=mf(t,r),ue("invalid",t);break;default:i=r}vf(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?F0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&D0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Eo(t,l):typeof l=="number"&&Eo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Co.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ue("scroll",t):l!=null&&np(t,s,l,o))}switch(n){case"input":Ua(t),zg(t,r,!1);break;case"textarea":Ua(t),Wg(t);break;case"option":r.value!=null&&t.setAttribute("value",""+kr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return nt(e),null;case 6:if(t&&e.stateNode!=null)l1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(I(166));if(n=Yr(Do.current),Yr(pn.current),qa(e)){if(r=e.stateNode,n=e.memoizedProps,r[cn]=e,(s=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:Ya(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ya(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[cn]=e,e.stateNode=r}return nt(e),null;case 13:if(de(ye),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(pe&&It!==null&&e.mode&1&&!(e.flags&128))Ew(),as(),e.flags|=98560,s=!1;else if(s=qa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(I(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(I(317));s[cn]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;nt(e),s=!1}else Kt!==null&&(Jf(Kt),Kt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||ye.current&1?je===0&&(je=3):Fp())),e.updateQueue!==null&&(e.flags|=4),nt(e),null);case 4:return us(),Wf(t,e),t===null&&Ro(e.stateNode.containerInfo),nt(e),null;case 10:return bp(e.type._context),nt(e),null;case 17:return bt(e.type)&&Jl(),nt(e),null;case 19:if(de(ye),s=e.memoizedState,s===null)return nt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Vs(s,!1);else{if(je!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=su(t),o!==null){for(e.flags|=128,Vs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return le(ye,ye.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pe()>ds&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304)}else{if(!r)if(t=su(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Vs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!pe)return nt(e),null}else 2*Pe()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,r=!0,Vs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pe(),e.sibling=null,n=ye.current,le(ye,r?n&1|2:n&1),e):(nt(e),null);case 22:case 23:return jp(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?kt&1073741824&&(nt(e),e.subtreeFlags&6&&(e.flags|=8192)):nt(e),null;case 24:return null;case 25:return null}throw Error(I(156,e.tag))}function tI(t,e){switch(vp(e),e.tag){case 1:return bt(e.type)&&Jl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return us(),de(wt),de(st),kp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ep(e),null;case 13:if(de(ye),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(I(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return de(ye),null;case 4:return us(),null;case 10:return bp(e.type._context),null;case 22:case 23:return jp(),null;case 24:return null;default:return null}}var Xa=!1,it=!1,nI=typeof WeakSet=="function"?WeakSet:Set,L=null;function Ui(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){xe(t,e,r)}else n.current=null}function Hf(t,e,n){try{n()}catch(r){xe(t,e,r)}}var Av=!1;function rI(t,e){if(Tf=ql,t=fw(),mp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)h=d,d=g;for(;;){if(d===t)break t;if(h===n&&++u===i&&(a=o),h===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Pf={focusedElem:t,selectionRange:n},ql=!1,L=e;L!==null;)if(e=L,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,L=t;else for(;L!==null;){e=L;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var y=v.memoizedProps,w=v.memoizedState,p=e.stateNode,m=p.getSnapshotBeforeUpdate(e.elementType===e.type?y:Yt(e.type,y),w);p.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(I(163))}}catch(S){xe(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,L=t;break}L=e.return}return v=Av,Av=!1,v}function ho(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Hf(e,n,s)}i=i.next}while(i!==r)}}function oc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Gf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function u1(t){var e=t.alternate;e!==null&&(t.alternate=null,u1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[cn],delete e[Mo],delete e[Rf],delete e[Uk],delete e[Vk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function c1(t){return t.tag===5||t.tag===3||t.tag===4}function Mv(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(r!==4&&(t=t.child,t!==null))for(Yf(t,e,n),t=t.sibling;t!==null;)Yf(t,e,n),t=t.sibling}function qf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(qf(t,e,n),t=t.sibling;t!==null;)qf(t,e,n),t=t.sibling}var Ge=null,qt=!1;function Qn(t,e,n){for(n=n.child;n!==null;)d1(t,e,n),n=n.sibling}function d1(t,e,n){if(hn&&typeof hn.onCommitFiberUnmount=="function")try{hn.onCommitFiberUnmount(Ju,n)}catch{}switch(n.tag){case 5:it||Ui(n,e);case 6:var r=Ge,i=qt;Ge=null,Qn(t,e,n),Ge=r,qt=i,Ge!==null&&(qt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(qt?(t=Ge,n=n.stateNode,t.nodeType===8?md(t.parentNode,n):t.nodeType===1&&md(t,n),Po(t)):md(Ge,n.stateNode));break;case 4:r=Ge,i=qt,Ge=n.stateNode.containerInfo,qt=!0,Qn(t,e,n),Ge=r,qt=i;break;case 0:case 11:case 14:case 15:if(!it&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Hf(n,e,o),i=i.next}while(i!==r)}Qn(t,e,n);break;case 1:if(!it&&(Ui(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){xe(n,e,a)}Qn(t,e,n);break;case 21:Qn(t,e,n);break;case 22:n.mode&1?(it=(r=it)||n.memoizedState!==null,Qn(t,e,n),it=r):Qn(t,e,n);break;default:Qn(t,e,n)}}function Lv(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nI),e.forEach(function(r){var i=fI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ge=a.stateNode,qt=!1;break e;case 3:Ge=a.stateNode.containerInfo,qt=!0;break e;case 4:Ge=a.stateNode.containerInfo,qt=!0;break e}a=a.return}if(Ge===null)throw Error(I(160));d1(s,o,i),Ge=null,qt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){xe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)f1(e,t),e=e.sibling}function f1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),on(t),r&4){try{ho(3,t,t.return),oc(3,t)}catch(y){xe(t,t.return,y)}try{ho(5,t,t.return)}catch(y){xe(t,t.return,y)}}break;case 1:Gt(e,t),on(t),r&512&&n!==null&&Ui(n,n.return);break;case 5:if(Gt(e,t),on(t),r&512&&n!==null&&Ui(n,n.return),t.flags&32){var i=t.stateNode;try{Eo(i,"")}catch(y){xe(t,t.return,y)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&A0(i,s),yf(a,o);var u=yf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?F0(i,d):c==="dangerouslySetInnerHTML"?D0(i,d):c==="children"?Eo(i,d):np(i,c,d,u)}switch(a){case"input":hf(i,s);break;case"textarea":M0(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Yi(i,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Yi(i,!!s.multiple,s.defaultValue,!0):Yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Mo]=s}catch(y){xe(t,t.return,y)}}break;case 6:if(Gt(e,t),on(t),r&4){if(t.stateNode===null)throw Error(I(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(y){xe(t,t.return,y)}}break;case 3:if(Gt(e,t),on(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Po(e.containerInfo)}catch(y){xe(t,t.return,y)}break;case 4:Gt(e,t),on(t);break;case 13:Gt(e,t),on(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Lp=Pe())),r&4&&Lv(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(it=(u=it)||c,Gt(e,t),it=u):Gt(e,t),on(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(L=t,c=t.child;c!==null;){for(d=L=c;L!==null;){switch(h=L,g=h.child,h.tag){case 0:case 11:case 14:case 15:ho(4,h,h.return);break;case 1:Ui(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(y){xe(r,n,y)}}break;case 5:Ui(h,h.return);break;case 22:if(h.memoizedState!==null){jv(d);continue}}g!==null?(g.return=h,L=g):jv(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=j0("display",o))}catch(y){xe(t,t.return,y)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(y){xe(t,t.return,y)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Gt(e,t),on(t),r&4&&Lv(t);break;case 21:break;default:Gt(e,t),on(t)}}function on(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(c1(n)){var r=n;break e}n=n.return}throw Error(I(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Eo(i,""),r.flags&=-33);var s=Mv(t);qf(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Mv(t);Yf(t,a,o);break;default:throw Error(I(161))}}catch(l){xe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function iI(t,e,n){L=t,h1(t)}function h1(t,e,n){for(var r=(t.mode&1)!==0;L!==null;){var i=L,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xa;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||it;a=Xa;var u=it;if(Xa=o,(it=l)&&!u)for(L=i;L!==null;)o=L,l=o.child,o.tag===22&&o.memoizedState!==null?Fv(i):l!==null?(l.return=o,L=l):Fv(i);for(;s!==null;)L=s,h1(s),s=s.sibling;L=i,Xa=a,it=u}Dv(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,L=s):Dv(t)}}function Dv(t){for(;L!==null;){var e=L;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:it||oc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!it)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Yt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&_v(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}_v(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Po(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(I(163))}it||e.flags&512&&Gf(e)}catch(h){xe(e,e.return,h)}}if(e===t){L=null;break}if(n=e.sibling,n!==null){n.return=e.return,L=n;break}L=e.return}}function jv(t){for(;L!==null;){var e=L;if(e===t){L=null;break}var n=e.sibling;if(n!==null){n.return=e.return,L=n;break}L=e.return}}function Fv(t){for(;L!==null;){var e=L;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{oc(4,e)}catch(l){xe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){xe(e,i,l)}}var s=e.return;try{Gf(e)}catch(l){xe(e,s,l)}break;case 5:var o=e.return;try{Gf(e)}catch(l){xe(e,o,l)}}}catch(l){xe(e,e.return,l)}if(e===t){L=null;break}var a=e.sibling;if(a!==null){a.return=e.return,L=a;break}L=e.return}}var sI=Math.ceil,lu=zn.ReactCurrentDispatcher,Ap=zn.ReactCurrentOwner,$t=zn.ReactCurrentBatchConfig,q=0,ze=null,Re=null,Xe=0,kt=0,Vi=jr(0),je=0,Vo=null,oi=0,ac=0,Mp=0,po=null,vt=null,Lp=0,ds=1/0,xn=null,uu=!1,Kf=null,yr=null,Ja=!1,ur=null,cu=0,mo=0,Qf=null,Pl=-1,Nl=0;function ft(){return q&6?Pe():Pl!==-1?Pl:Pl=Pe()}function _r(t){return t.mode&1?q&2&&Xe!==0?Xe&-Xe:zk.transition!==null?(Nl===0&&(Nl=Q0()),Nl):(t=te,t!==0||(t=window.event,t=t===void 0?16:rw(t.type)),t):1}function en(t,e,n,r){if(50<mo)throw mo=0,Qf=null,Error(I(185));fa(t,n,r),(!(q&2)||t!==ze)&&(t===ze&&(!(q&2)&&(ac|=n),je===4&&nr(t,Xe)),St(t,r),n===1&&q===0&&!(e.mode&1)&&(ds=Pe()+500,rc&&Fr()))}function St(t,e){var n=t.callbackNode;zE(t,e);var r=Yl(t,t===ze?Xe:0);if(r===0)n!==null&&Yg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Yg(n),e===1)t.tag===0?$k(Uv.bind(null,t)):Sw(Uv.bind(null,t)),jk(function(){!(q&6)&&Fr()}),n=null;else{switch(X0(r)){case 1:n=ap;break;case 4:n=q0;break;case 16:n=Gl;break;case 536870912:n=K0;break;default:n=Gl}n=b1(n,p1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function p1(t,e){if(Pl=-1,Nl=0,q&6)throw Error(I(327));var n=t.callbackNode;if(Ji()&&t.callbackNode!==n)return null;var r=Yl(t,t===ze?Xe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=du(t,r);else{e=r;var i=q;q|=2;var s=g1();(ze!==t||Xe!==e)&&(xn=null,ds=Pe()+500,Xr(t,e));do try{lI();break}catch(a){m1(t,a)}while(!0);wp(),lu.current=s,q=i,Re!==null?e=0:(ze=null,Xe=0,e=je)}if(e!==0){if(e===2&&(i=xf(t),i!==0&&(r=i,e=Xf(t,i))),e===1)throw n=Vo,Xr(t,0),nr(t,r),St(t,Pe()),n;if(e===6)nr(t,r);else{if(i=t.current.alternate,!(r&30)&&!oI(i)&&(e=du(t,r),e===2&&(s=xf(t),s!==0&&(r=s,e=Xf(t,s))),e===1))throw n=Vo,Xr(t,0),nr(t,r),St(t,Pe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(I(345));case 2:zr(t,vt,xn);break;case 3:if(nr(t,r),(r&130023424)===r&&(e=Lp+500-Pe(),10<e)){if(Yl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ft(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Of(zr.bind(null,t,vt,xn),e);break}zr(t,vt,xn);break;case 4:if(nr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Zt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Pe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sI(r/1960))-r,10<r){t.timeoutHandle=Of(zr.bind(null,t,vt,xn),r);break}zr(t,vt,xn);break;case 5:zr(t,vt,xn);break;default:throw Error(I(329))}}}return St(t,Pe()),t.callbackNode===n?p1.bind(null,t):null}function Xf(t,e){var n=po;return t.current.memoizedState.isDehydrated&&(Xr(t,e).flags|=256),t=du(t,e),t!==2&&(e=vt,vt=n,e!==null&&Jf(e)),t}function Jf(t){vt===null?vt=t:vt.push.apply(vt,t)}function oI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!rn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function nr(t,e){for(e&=~Mp,e&=~ac,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zt(e),r=1<<n;t[n]=-1,e&=~r}}function Uv(t){if(q&6)throw Error(I(327));Ji();var e=Yl(t,0);if(!(e&1))return St(t,Pe()),null;var n=du(t,e);if(t.tag!==0&&n===2){var r=xf(t);r!==0&&(e=r,n=Xf(t,r))}if(n===1)throw n=Vo,Xr(t,0),nr(t,e),St(t,Pe()),n;if(n===6)throw Error(I(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zr(t,vt,xn),St(t,Pe()),null}function Dp(t,e){var n=q;q|=1;try{return t(e)}finally{q=n,q===0&&(ds=Pe()+500,rc&&Fr())}}function ai(t){ur!==null&&ur.tag===0&&!(q&6)&&Ji();var e=q;q|=1;var n=$t.transition,r=te;try{if($t.transition=null,te=1,t)return t()}finally{te=r,$t.transition=n,q=e,!(q&6)&&Fr()}}function jp(){kt=Vi.current,de(Vi)}function Xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dk(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(vp(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jl();break;case 3:us(),de(wt),de(st),kp();break;case 5:Ep(r);break;case 4:us();break;case 13:de(ye);break;case 19:de(ye);break;case 10:bp(r.type._context);break;case 22:case 23:jp()}n=n.return}if(ze=t,Re=t=wr(t.current,null),Xe=kt=e,je=0,Vo=null,Mp=ac=oi=0,vt=po=null,Gr!==null){for(e=0;e<Gr.length;e++)if(n=Gr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Gr=null}return t}function m1(t,e){do{var n=Re;try{if(wp(),kl.current=au,ou){for(var r=we.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ou=!1}if(si=0,Ve=Me=we=null,fo=!1,jo=0,Ap.current=null,n===null||n.return===null){je=1,Vo=e,Re=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Xe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=kv(o);if(g!==null){g.flags&=-257,Iv(g,o,a,s,e),g.mode&1&&Ev(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var y=new Set;y.add(l),e.updateQueue=y}else v.add(l);break e}else{if(!(e&1)){Ev(s,u,e),Fp();break e}l=Error(I(426))}}else if(pe&&a.mode&1){var w=kv(o);if(w!==null){!(w.flags&65536)&&(w.flags|=256),Iv(w,o,a,s,e),yp(cs(l,a));break e}}s=l=cs(l,a),je!==4&&(je=2),po===null?po=[s]:po.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Jw(s,l,e);yv(s,p);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(yr===null||!yr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Zw(s,a,e);yv(s,S);break e}}s=s.return}while(s!==null)}y1(n)}catch(x){e=x,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function g1(){var t=lu.current;return lu.current=au,t===null?au:t}function Fp(){(je===0||je===3||je===2)&&(je=4),ze===null||!(oi&268435455)&&!(ac&268435455)||nr(ze,Xe)}function du(t,e){var n=q;q|=2;var r=g1();(ze!==t||Xe!==e)&&(xn=null,Xr(t,e));do try{aI();break}catch(i){m1(t,i)}while(!0);if(wp(),q=n,lu.current=r,Re!==null)throw Error(I(261));return ze=null,Xe=0,je}function aI(){for(;Re!==null;)v1(Re)}function lI(){for(;Re!==null&&!AE();)v1(Re)}function v1(t){var e=w1(t.alternate,t,kt);t.memoizedProps=t.pendingProps,e===null?y1(t):Re=e,Ap.current=null}function y1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tI(n,e),n!==null){n.flags&=32767,Re=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{je=6,Re=null;return}}else if(n=eI(n,e,kt),n!==null){Re=n;return}if(e=e.sibling,e!==null){Re=e;return}Re=e=t}while(e!==null);je===0&&(je=5)}function zr(t,e,n){var r=te,i=$t.transition;try{$t.transition=null,te=1,uI(t,e,n,r)}finally{$t.transition=i,te=r}return null}function uI(t,e,n,r){do Ji();while(ur!==null);if(q&6)throw Error(I(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(I(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(BE(t,s),t===ze&&(Re=ze=null,Xe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ja||(Ja=!0,b1(Gl,function(){return Ji(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=$t.transition,$t.transition=null;var o=te;te=1;var a=q;q|=4,Ap.current=null,rI(t,n),f1(n,t),Pk(Pf),ql=!!Tf,Pf=Tf=null,t.current=n,iI(n),ME(),q=a,te=o,$t.transition=s}else t.current=n;if(Ja&&(Ja=!1,ur=t,cu=i),s=t.pendingLanes,s===0&&(yr=null),jE(n.stateNode),St(t,Pe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uu)throw uu=!1,t=Kf,Kf=null,t;return cu&1&&t.tag!==0&&Ji(),s=t.pendingLanes,s&1?t===Qf?mo++:(mo=0,Qf=t):mo=0,Fr(),null}function Ji(){if(ur!==null){var t=X0(cu),e=$t.transition,n=te;try{if($t.transition=null,te=16>t?16:t,ur===null)var r=!1;else{if(t=ur,ur=null,cu=0,q&6)throw Error(I(331));var i=q;for(q|=4,L=t.current;L!==null;){var s=L,o=s.child;if(L.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(L=u;L!==null;){var c=L;switch(c.tag){case 0:case 11:case 15:ho(8,c,s)}var d=c.child;if(d!==null)d.return=c,L=d;else for(;L!==null;){c=L;var h=c.sibling,g=c.return;if(u1(c),c===u){L=null;break}if(h!==null){h.return=g,L=h;break}L=g}}}var v=s.alternate;if(v!==null){var y=v.child;if(y!==null){v.child=null;do{var w=y.sibling;y.sibling=null,y=w}while(y!==null)}}L=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,L=o;else e:for(;L!==null;){if(s=L,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ho(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,L=p;break e}L=s.return}}var m=t.current;for(L=m;L!==null;){o=L;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,L=_;else e:for(o=m;L!==null;){if(a=L,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:oc(9,a)}}catch(x){xe(a,a.return,x)}if(a===o){L=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,L=S;break e}L=a.return}}if(q=i,Fr(),hn&&typeof hn.onPostCommitFiberRoot=="function")try{hn.onPostCommitFiberRoot(Ju,t)}catch{}r=!0}return r}finally{te=n,$t.transition=e}}return!1}function Vv(t,e,n){e=cs(n,e),e=Jw(t,e,1),t=vr(t,e,1),e=ft(),t!==null&&(fa(t,1,e),St(t,e))}function xe(t,e,n){if(t.tag===3)Vv(t,t,n);else for(;e!==null;){if(e.tag===3){Vv(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(yr===null||!yr.has(r))){t=cs(n,t),t=Zw(e,t,1),e=vr(e,t,1),t=ft(),e!==null&&(fa(e,1,t),St(e,t));break}}e=e.return}}function cI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ft(),t.pingedLanes|=t.suspendedLanes&n,ze===t&&(Xe&n)===n&&(je===4||je===3&&(Xe&130023424)===Xe&&500>Pe()-Lp?Xr(t,0):Mp|=n),St(t,e)}function _1(t,e){e===0&&(t.mode&1?(e=za,za<<=1,!(za&130023424)&&(za=4194304)):e=1);var n=ft();t=Ln(t,e),t!==null&&(fa(t,e,n),St(t,n))}function dI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),_1(t,n)}function fI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(I(314))}r!==null&&r.delete(e),_1(t,n)}var w1;w1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||wt.current)yt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return yt=!1,Zk(t,e,n);yt=!!(t.flags&131072)}else yt=!1,pe&&e.flags&1048576&&xw(e,tu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Tl(t,e),t=e.pendingProps;var i=os(e,st.current);Xi(e,n),i=Tp(null,e,r,t,i,n);var s=Pp();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bt(r)?(s=!0,Zl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,xp(e),i.updater=ic,e.stateNode=i,i._reactInternals=e,Ff(e,r,t,n),e=$f(null,e,r,!0,s,n)):(e.tag=0,pe&&s&&gp(e),ct(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Tl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=pI(r),t=Yt(r,t),i){case 0:e=Vf(null,e,r,t,n);break e;case 1:e=Nv(null,e,r,t,n);break e;case 11:e=Tv(null,e,r,t,n);break e;case 14:e=Pv(null,e,r,Yt(r.type,t),n);break e}throw Error(I(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Vf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Nv(t,e,r,i,n);case 3:e:{if(r1(e),t===null)throw Error(I(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Iw(t,e),iu(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=cs(Error(I(423)),e),e=Ov(t,e,r,n,i);break e}else if(r!==i){i=cs(Error(I(424)),e),e=Ov(t,e,r,n,i);break e}else for(It=gr(e.stateNode.containerInfo.firstChild),Pt=e,pe=!0,Kt=null,n=Ow(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),r===i){e=Dn(t,e,n);break e}ct(t,e,r,n)}e=e.child}return e;case 5:return Rw(e),t===null&&Lf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Nf(r,i)?o=null:s!==null&&Nf(r,s)&&(e.flags|=32),n1(t,e),ct(t,e,o,n),e.child;case 6:return t===null&&Lf(e),null;case 13:return i1(t,e,n);case 4:return Cp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ls(e,null,r,n):ct(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Tv(t,e,r,i,n);case 7:return ct(t,e,e.pendingProps,n),e.child;case 8:return ct(t,e,e.pendingProps.children,n),e.child;case 12:return ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,le(nu,r._currentValue),r._currentValue=o,s!==null)if(rn(s.value,o)){if(s.children===i.children&&!wt.current){e=Dn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Nn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Df(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(I(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Df(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ct(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xi(e,n),i=zt(i),r=r(i),e.flags|=1,ct(t,e,r,n),e.child;case 14:return r=e.type,i=Yt(r,e.pendingProps),i=Yt(r.type,i),Pv(t,e,r,i,n);case 15:return e1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Yt(r,i),Tl(t,e),e.tag=1,bt(r)?(t=!0,Zl(e)):t=!1,Xi(e,n),Pw(e,r,i),Ff(e,r,i,n),$f(null,e,r,!0,t,n);case 19:return s1(t,e,n);case 22:return t1(t,e,n)}throw Error(I(156,e.tag))};function b1(t,e){return Y0(t,e)}function hI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ut(t,e,n,r){return new hI(t,e,n,r)}function Up(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pI(t){if(typeof t=="function")return Up(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ip)return 11;if(t===sp)return 14}return 2}function wr(t,e){var n=t.alternate;return n===null?(n=Ut(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Up(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ni:return Jr(n.children,i,s,e);case rp:o=8,i|=8;break;case lf:return t=Ut(12,n,e,i|2),t.elementType=lf,t.lanes=s,t;case uf:return t=Ut(13,n,e,i),t.elementType=uf,t.lanes=s,t;case cf:return t=Ut(19,n,e,i),t.elementType=cf,t.lanes=s,t;case N0:return lc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case T0:o=10;break e;case P0:o=9;break e;case ip:o=11;break e;case sp:o=14;break e;case Zn:o=16,r=null;break e}throw Error(I(130,t==null?t:typeof t,""))}return e=Ut(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Jr(t,e,n,r){return t=Ut(7,t,r,e),t.lanes=n,t}function lc(t,e,n,r){return t=Ut(22,t,r,e),t.elementType=N0,t.lanes=n,t.stateNode={isHidden:!1},t}function xd(t,e,n){return t=Ut(6,t,null,e),t.lanes=n,t}function Cd(t,e,n){return e=Ut(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=id(0),this.expirationTimes=id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=id(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vp(t,e,n,r,i,s,o,a,l){return t=new mI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ut(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},xp(s),t}function gI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Pi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function S1(t){if(!t)return Ir;t=t._reactInternals;e:{if(wi(t)!==t||t.tag!==1)throw Error(I(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(I(171))}if(t.tag===1){var n=t.type;if(bt(n))return bw(t,n,e)}return e}function x1(t,e,n,r,i,s,o,a,l){return t=Vp(n,r,!0,t,i,s,o,a,l),t.context=S1(null),n=t.current,r=ft(),i=_r(n),s=Nn(r,i),s.callback=e??null,vr(n,s,i),t.current.lanes=i,fa(t,i,r),St(t,r),t}function uc(t,e,n,r){var i=e.current,s=ft(),o=_r(i);return n=S1(n),e.context===null?e.context=n:e.pendingContext=n,e=Nn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=vr(i,e,o),t!==null&&(en(t,i,o,s),El(t,i,o)),o}function fu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $v(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $p(t,e){$v(t,e),(t=t.alternate)&&$v(t,e)}function vI(){return null}var C1=typeof reportError=="function"?reportError:function(t){console.error(t)};function zp(t){this._internalRoot=t}cc.prototype.render=zp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(I(409));uc(t,e,null,null)};cc.prototype.unmount=zp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;ai(function(){uc(null,t,null,null)}),e[Mn]=null}};function cc(t){this._internalRoot=t}cc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ew();t={blockedOn:null,target:t,priority:e};for(var n=0;n<tr.length&&e!==0&&e<tr[n].priority;n++);tr.splice(n,0,t),n===0&&nw(t)}};function Bp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zv(){}function yI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=fu(o);s.call(u)}}var o=x1(e,r,t,0,null,!1,!1,"",zv);return t._reactRootContainer=o,t[Mn]=o.current,Ro(t.nodeType===8?t.parentNode:t),ai(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=fu(l);a.call(u)}}var l=Vp(t,0,!1,null,null,!1,!1,"",zv);return t._reactRootContainer=l,t[Mn]=l.current,Ro(t.nodeType===8?t.parentNode:t),ai(function(){uc(e,l,n,r)}),l}function fc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=fu(o);a.call(l)}}uc(e,o,t,i)}else o=yI(n,e,t,i,r);return fu(o)}J0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=eo(e.pendingLanes);n!==0&&(lp(e,n|1),St(e,Pe()),!(q&6)&&(ds=Pe()+500,Fr()))}break;case 13:ai(function(){var r=Ln(t,1);if(r!==null){var i=ft();en(r,t,1,i)}}),$p(t,1)}};up=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=ft();en(e,t,134217728,n)}$p(t,134217728)}};Z0=function(t){if(t.tag===13){var e=_r(t),n=Ln(t,e);if(n!==null){var r=ft();en(n,t,e,r)}$p(t,e)}};ew=function(){return te};tw=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};wf=function(t,e,n){switch(e){case"input":if(hf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=nc(r);if(!i)throw Error(I(90));R0(r),hf(r,i)}}}break;case"textarea":M0(t,n);break;case"select":e=n.value,e!=null&&Yi(t,!!n.multiple,e,!1)}};$0=Dp;z0=ai;var _I={usingClientEntryPoint:!1,Events:[pa,Mi,nc,U0,V0,Dp]},$s={findFiberByHostInstance:Hr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wI={bundleType:$s.bundleType,version:$s.version,rendererPackageName:$s.rendererPackageName,rendererConfig:$s.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:zn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=H0(t),t===null?null:t.stateNode},findFiberByHostInstance:$s.findFiberByHostInstance||vI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Za=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Za.isDisabled&&Za.supportsFiber)try{Ju=Za.inject(wI),hn=Za}catch{}}Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_I;Rt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Bp(e))throw Error(I(200));return gI(t,e,null,n)};Rt.createRoot=function(t,e){if(!Bp(t))throw Error(I(299));var n=!1,r="",i=C1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Vp(t,1,!1,null,null,n,!1,r,i),t[Mn]=e.current,Ro(t.nodeType===8?t.parentNode:t),new zp(e)};Rt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(I(188)):(t=Object.keys(t).join(","),Error(I(268,t)));return t=H0(e),t=t===null?null:t.stateNode,t};Rt.flushSync=function(t){return ai(t)};Rt.hydrate=function(t,e,n){if(!dc(e))throw Error(I(200));return fc(null,t,e,!0,n)};Rt.hydrateRoot=function(t,e,n){if(!Bp(t))throw Error(I(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=C1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=x1(e,null,t,1,n??null,i,!1,s,o),t[Mn]=e.current,Ro(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new cc(e)};Rt.render=function(t,e,n){if(!dc(e))throw Error(I(200));return fc(null,t,e,!1,n)};Rt.unmountComponentAtNode=function(t){if(!dc(t))throw Error(I(40));return t._reactRootContainer?(ai(function(){fc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mn]=null})}),!0):!1};Rt.unstable_batchedUpdates=Dp;Rt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!dc(n))throw Error(I(200));if(t==null||t._reactInternals===void 0)throw Error(I(38));return fc(t,e,n,!1,r)};Rt.version="18.2.0-next-9e3b772b8-20220608";function E1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E1)}catch(t){console.error(t)}}E1(),x0.exports=Rt;var k1=x0.exports,Bv=k1;of.createRoot=Bv.createRoot,of.hydrateRoot=Bv.hydrateRoot;/**
 * @remix-run/router v1.15.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function $o(){return $o=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$o.apply(this,arguments)}var cr;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(cr||(cr={}));const Wv="popstate";function bI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Zf("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:hu(i)}return xI(e,n,null,t)}function be(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function SI(){return Math.random().toString(36).substr(2,8)}function Hv(t,e){return{usr:t.state,key:t.key,idx:e}}function Zf(t,e,n,r){return n===void 0&&(n=null),$o({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?xs(e):e,{state:n,key:e&&e.key||r||SI()})}function hu(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function xs(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function xI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=cr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState($o({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=cr.Pop;let w=c(),p=w==null?null:w-u;u=w,l&&l({action:a,location:y.location,delta:p})}function h(w,p){a=cr.Push;let m=Zf(y.location,w,p);n&&n(m,w),u=c()+1;let _=Hv(m,u),S=y.createHref(m);try{o.pushState(_,"",S)}catch(x){if(x instanceof DOMException&&x.name==="DataCloneError")throw x;i.location.assign(S)}s&&l&&l({action:a,location:y.location,delta:1})}function g(w,p){a=cr.Replace;let m=Zf(y.location,w,p);n&&n(m,w),u=c();let _=Hv(m,u),S=y.createHref(m);o.replaceState(_,"",S),s&&l&&l({action:a,location:y.location,delta:0})}function v(w){let p=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof w=="string"?w:hu(w);return be(p,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,p)}let y={get action(){return a},get location(){return t(i,o)},listen(w){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Wv,d),l=w,()=>{i.removeEventListener(Wv,d),l=null}},createHref(w){return e(i,w)},createURL:v,encodeLocation(w){let p=v(w);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:g,go(w){return o.go(w)}};return y}var Gv;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Gv||(Gv={}));function CI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?xs(e):e,i=fs(r.pathname||"/",n);if(i==null)return null;let s=I1(t);EI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=MI(s[a],DI(i));return o}function I1(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(be(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=br([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(be(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),I1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:RI(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of T1(s.path))i(s,o,l)}),e}function T1(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=T1(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function EI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:AI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const kI=/^:[\w-]+$/,II=3,TI=2,PI=1,NI=10,OI=-2,Yv=t=>t==="*";function RI(t,e){let n=t.split("/"),r=n.length;return n.some(Yv)&&(r+=OI),e&&(r+=TI),n.filter(i=>!Yv(i)).reduce((i,s)=>i+(kI.test(s)?II:s===""?PI:NI),r)}function AI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function MI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=eh({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:br([i,c.pathname]),pathnameBase:$I(br([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=br([i,c.pathnameBase]))}return s}function eh(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=LI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:h,isOptional:g}=c;if(h==="*"){let y=a[d]||"";o=s.slice(0,s.length-y.length).replace(/(.)\/+$/,"$1")}const v=a[d];return g&&!v?u[h]=void 0:u[h]=jI(v||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function LI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(r.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function DI(t){try{return decodeURI(t)}catch(e){return Wp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function jI(t,e){try{return decodeURIComponent(t)}catch(n){return Wp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function fs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function FI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?xs(t):t;return{pathname:n?n.startsWith("/")?n:UI(n,e):e,search:zI(r),hash:BI(i)}}function UI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ed(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function VI(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hp(t,e){let n=VI(t);return e?n.map((r,i)=>i===t.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Gp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=xs(t):(i=$o({},t),be(!i.pathname||!i.pathname.includes("?"),Ed("?","pathname","search",i)),be(!i.pathname||!i.pathname.includes("#"),Ed("#","pathname","hash",i)),be(!i.search||!i.search.includes("#"),Ed("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(o==null)a=n;else{let d=e.length-1;if(!r&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=FI(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const br=t=>t.join("/").replace(/\/\/+/g,"/"),$I=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),zI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,BI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function WI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const P1=["post","put","patch","delete"];new Set(P1);const HI=["get",...P1];new Set(HI);/**
 * React Router v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zo(){return zo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zo.apply(this,arguments)}const hc=b.createContext(null),N1=b.createContext(null),Bn=b.createContext(null),pc=b.createContext(null),Wn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),O1=b.createContext(null);function GI(t,e){let{relative:n}=e===void 0?{}:e;Cs()||be(!1);let{basename:r,navigator:i}=b.useContext(Bn),{hash:s,pathname:o,search:a}=mc(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:br([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Cs(){return b.useContext(pc)!=null}function Hn(){return Cs()||be(!1),b.useContext(pc).location}function R1(t){b.useContext(Bn).static||b.useLayoutEffect(t)}function Ht(){let{isDataRoute:t}=b.useContext(Wn);return t?oT():YI()}function YI(){Cs()||be(!1);let t=b.useContext(hc),{basename:e,future:n,navigator:r}=b.useContext(Bn),{matches:i}=b.useContext(Wn),{pathname:s}=Hn(),o=JSON.stringify(Hp(i,n.v7_relativeSplatPath)),a=b.useRef(!1);return R1(()=>{a.current=!0}),b.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let d=Gp(u,JSON.parse(o),s,c.relative==="path");t==null&&e!=="/"&&(d.pathname=d.pathname==="/"?e:br([e,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[e,r,o,s,t])}function qI(){let{matches:t}=b.useContext(Wn),e=t[t.length-1];return e?e.params:{}}function mc(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=b.useContext(Bn),{matches:i}=b.useContext(Wn),{pathname:s}=Hn(),o=JSON.stringify(Hp(i,r.v7_relativeSplatPath));return b.useMemo(()=>Gp(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function KI(t,e){return QI(t,e)}function QI(t,e,n,r){Cs()||be(!1);let{navigator:i}=b.useContext(Bn),{matches:s}=b.useContext(Wn),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Hn(),c;if(e){var d;let w=typeof e=="string"?xs(e):e;l==="/"||(d=w.pathname)!=null&&d.startsWith(l)||be(!1),c=w}else c=u;let h=c.pathname||"/",g=l==="/"?h:h.slice(l.length)||"/",v=CI(t,{pathname:g}),y=tT(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},a,w.params),pathname:br([l,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?l:br([l,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),s,n,r);return e&&y?b.createElement(pc.Provider,{value:{location:zo({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:cr.Pop}},y):y}function XI(){let t=sT(),e=WI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,null)}const JI=b.createElement(XI,null);class ZI extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?b.createElement(Wn.Provider,{value:this.props.routeContext},b.createElement(O1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function eT(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(hc);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(Wn.Provider,{value:e},r)}function tT(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if((s=n)!=null&&s.errors)t=n.matches;else return null}let o=t,a=(i=n)==null?void 0:i.errors;if(a!=null){let c=o.findIndex(d=>d.route.id&&(a==null?void 0:a[d.route.id]));c>=0||be(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<o.length;c++){let d=o[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:h,errors:g}=n,v=d.route.loader&&h[d.route.id]===void 0&&(!g||g[d.route.id]===void 0);if(d.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,d,h)=>{let g,v=!1,y=null,w=null;n&&(g=a&&d.route.id?a[d.route.id]:void 0,y=d.route.errorElement||JI,l&&(u<0&&h===0?(aT("route-fallback",!1),v=!0,w=null):u===h&&(v=!0,w=d.route.hydrateFallbackElement||null)));let p=e.concat(o.slice(0,h+1)),m=()=>{let _;return g?_=y:v?_=w:d.route.Component?_=b.createElement(d.route.Component,null):d.route.element?_=d.route.element:_=c,b.createElement(eT,{match:d,routeContext:{outlet:c,matches:p,isDataRoute:n!=null},children:_})};return n&&(d.route.ErrorBoundary||d.route.errorElement||h===0)?b.createElement(ZI,{location:n.location,revalidation:n.revalidation,component:y,error:g,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var A1=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(A1||{}),pu=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(pu||{});function nT(t){let e=b.useContext(hc);return e||be(!1),e}function rT(t){let e=b.useContext(N1);return e||be(!1),e}function iT(t){let e=b.useContext(Wn);return e||be(!1),e}function M1(t){let e=iT(),n=e.matches[e.matches.length-1];return n.route.id||be(!1),n.route.id}function sT(){var t;let e=b.useContext(O1),n=rT(pu.UseRouteError),r=M1(pu.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function oT(){let{router:t}=nT(A1.UseNavigateStable),e=M1(pu.UseNavigateStable),n=b.useRef(!1);return R1(()=>{n.current=!0}),b.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,zo({fromRouteId:e},s)))},[t,e])}const qv={};function aT(t,e,n){!e&&!qv[t]&&(qv[t]=!0)}function L1(t){let{to:e,replace:n,state:r,relative:i}=t;Cs()||be(!1);let{future:s,static:o}=b.useContext(Bn),{matches:a}=b.useContext(Wn),{pathname:l}=Hn(),u=Ht(),c=Gp(e,Hp(a,s.v7_relativeSplatPath),l,i==="path"),d=JSON.stringify(c);return b.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:i}),[u,d,i,n,r]),null}function gt(t){be(!1)}function lT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=cr.Pop,navigator:s,static:o=!1,future:a}=t;Cs()&&be(!1);let l=e.replace(/^\/*/,"/"),u=b.useMemo(()=>({basename:l,navigator:s,static:o,future:zo({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof r=="string"&&(r=xs(r));let{pathname:c="/",search:d="",hash:h="",state:g=null,key:v="default"}=r,y=b.useMemo(()=>{let w=fs(c,l);return w==null?null:{location:{pathname:w,search:d,hash:h,state:g,key:v},navigationType:i}},[l,c,d,h,g,v,i]);return y==null?null:b.createElement(Bn.Provider,{value:u},b.createElement(pc.Provider,{children:n,value:y}))}function uT(t){let{children:e,location:n}=t;return KI(th(e),n)}new Promise(()=>{});function th(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;let s=[...e,i];if(r.type===b.Fragment){n.push.apply(n,th(r.props.children,s));return}r.type!==gt&&be(!1),!r.props.index||!r.props.children||be(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=th(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mu(){return mu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},mu.apply(this,arguments)}function D1(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function cT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function dT(t,e){return t.button===0&&(!e||e==="_self")&&!cT(t)}function nh(t){return t===void 0&&(t=""),new URLSearchParams(typeof t=="string"||Array.isArray(t)||t instanceof URLSearchParams?t:Object.keys(t).reduce((e,n)=>{let r=t[n];return e.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function fT(t,e){let n=nh(t);return e&&e.forEach((r,i)=>{n.has(i)||e.getAll(i).forEach(s=>{n.append(i,s)})}),n}const hT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],pT=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],mT="6";try{window.__reactRouterVersion=mT}catch{}const gT=b.createContext({isTransitioning:!1}),vT="startTransition",Kv=sf[vT];function yT(t){let{basename:e,children:n,future:r,window:i}=t,s=b.useRef();s.current==null&&(s.current=bI({window:i,v5Compat:!0}));let o=s.current,[a,l]=b.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=b.useCallback(d=>{u&&Kv?Kv(()=>l(d)):l(d)},[l,u]);return b.useLayoutEffect(()=>o.listen(c),[o,c]),b.createElement(lT,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o,future:r})}const _T=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",wT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,bT=b.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:d}=e,h=D1(e,hT),{basename:g}=b.useContext(Bn),v,y=!1;if(typeof u=="string"&&wT.test(u)&&(v=u,_T))try{let _=new URL(window.location.href),S=u.startsWith("//")?new URL(_.protocol+u):new URL(u),x=fs(S.pathname,g);S.origin===_.origin&&x!=null?u=x+S.search+S.hash:y=!0}catch{}let w=GI(u,{relative:i}),p=xT(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:d});function m(_){r&&r(_),_.defaultPrevented||p(_)}return b.createElement("a",mu({},h,{href:v||w,onClick:y||s?r:m,ref:n,target:l}))}),ut=b.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,d=D1(e,pT),h=mc(l,{relative:d.relative}),g=Hn(),v=b.useContext(N1),{navigator:y,basename:w}=b.useContext(Bn),p=v!=null&&ET(h)&&u===!0,m=y.encodeLocation?y.encodeLocation(h).pathname:h.pathname,_=g.pathname,S=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;i||(_=_.toLowerCase(),S=S?S.toLowerCase():null,m=m.toLowerCase()),S&&w&&(S=fs(S,w)||S);const x=m!=="/"&&m.endsWith("/")?m.length-1:m.length;let k=_===m||!o&&_.startsWith(m)&&_.charAt(x)==="/",E=S!=null&&(S===m||!o&&S.startsWith(m)&&S.charAt(m.length)==="/"),C={isActive:k,isPending:E,isTransitioning:p},A=k?r:void 0,N;typeof s=="function"?N=s(C):N=[s,k?"active":null,E?"pending":null,p?"transitioning":null].filter(Boolean).join(" ");let K=typeof a=="function"?a(C):a;return b.createElement(bT,mu({},d,{"aria-current":A,className:N,ref:n,style:K,to:l,unstable_viewTransition:u}),typeof c=="function"?c(C):c)});var rh;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(rh||(rh={}));var Qv;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Qv||(Qv={}));function ST(t){let e=b.useContext(hc);return e||be(!1),e}function xT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=Ht(),u=Hn(),c=mc(t,{relative:o});return b.useCallback(d=>{if(dT(d,n)){d.preventDefault();let h=r!==void 0?r:hu(u)===hu(c);l(t,{replace:h,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function CT(t){let e=b.useRef(nh(t)),n=b.useRef(!1),r=Hn(),i=b.useMemo(()=>fT(r.search,n.current?null:e.current),[r.search]),s=Ht(),o=b.useCallback((a,l)=>{const u=nh(typeof a=="function"?a(i):a);n.current=!0,s("?"+u,l)},[s,i]);return[i,o]}function ET(t,e){e===void 0&&(e={});let n=b.useContext(gT);n==null&&be(!1);let{basename:r}=ST(rh.useViewTransitionState),i=mc(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=fs(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=fs(n.nextLocation.pathname,r)||n.nextLocation.pathname;return eh(i.pathname,o)!=null||eh(i.pathname,s)!=null}var Xv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j1={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T=function(t,e){if(!t)throw Es(e)},Es=function(t){return new Error("Firebase Database ("+j1.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},kT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Yp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(h=64)),r.push(n[c],n[d],n[h],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(F1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):kT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new IT;const h=s<<2|a>>4;if(r.push(h),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class IT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const U1=function(t){const e=F1(t);return Yp.encodeByteArray(e,!0)},gu=function(t){return U1(t).replace(/\./g,"")},vu=function(t){try{return Yp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TT(t){return V1(void 0,t)}function V1(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!PT(n)||(t[n]=V1(t[n],e[n]));return t}function PT(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=()=>NT().__FIREBASE_DEFAULTS__,RT=()=>{if(typeof process>"u"||typeof Xv>"u")return;const t=Xv.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vu(t[1]);return e&&JSON.parse(e)},qp=()=>{try{return OT()||RT()||AT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},$1=t=>{var e,n;return(n=(e=qp())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},z1=t=>{const e=$1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},B1=()=>{var t;return(t=qp())===null||t===void 0?void 0:t.config},W1=t=>{var e;return(e=qp())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[gu(JSON.stringify(n)),gu(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Kp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function MT(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function G1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function LT(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Y1(){return j1.NODE_ADMIN===!0}function DT(){try{return typeof indexedDB=="object"}catch{return!1}}function jT(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT="FirebaseError";class Gn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=FT,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,va.prototype.create)}}class va{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?UT(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Gn(i,a,r)}}function UT(t,e){return t.replace(VT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const VT=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bo(t){return JSON.parse(t)}function De(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q1=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=Bo(vu(s[0])||""),n=Bo(vu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},$T=function(t){const e=q1(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},zT=function(t){const e=q1(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function hs(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function ih(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yu(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function _u(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jv(s)&&Jv(o)){if(!_u(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jv(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ks(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function no(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ro(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const h=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function WT(t,e){const n=new HT(t,e);return n.subscribe.bind(n)}class HT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");GT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=kd),i.error===void 0&&(i.error=kd),i.complete===void 0&&(i.complete=kd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function GT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function kd(){}function ya(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YT=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,T(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},gc=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){return t&&t._delegate?t._delegate:t}class Tr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ga;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(QT(e))try{this.getOrInitializeService({instanceIdentifier:Br})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Br){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Br){return this.instances.has(e)}getOptions(e=Br){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Br){return this.component?this.component.multipleInstances?e:Br:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KT(t){return t===Br?void 0:t}function QT(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new qT(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const JT={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},ZT=ie.INFO,eP={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},tP=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=eP[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Qp{constructor(e){this.name=e,this._logLevel=ZT,this._logHandler=tP,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?JT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const nP=(t,e)=>e.some(n=>t instanceof n);let Zv,ey;function rP(){return Zv||(Zv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iP(){return ey||(ey=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const K1=new WeakMap,sh=new WeakMap,Q1=new WeakMap,Id=new WeakMap,Xp=new WeakMap;function sP(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&K1.set(n,t)}).catch(()=>{}),Xp.set(e,t),e}function oP(t){if(sh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});sh.set(t,e)}let oh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return sh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Q1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function aP(t){oh=t(oh)}function lP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Td(this),e,...n);return Q1.set(r,e.sort?e.sort():[e]),Sr(r)}:iP().includes(t)?function(...e){return t.apply(Td(this),e),Sr(K1.get(this))}:function(...e){return Sr(t.apply(Td(this),e))}}function uP(t){return typeof t=="function"?lP(t):(t instanceof IDBTransaction&&oP(t),nP(t,rP())?new Proxy(t,oh):t)}function Sr(t){if(t instanceof IDBRequest)return sP(t);if(Id.has(t))return Id.get(t);const e=uP(t);return e!==t&&(Id.set(t,e),Xp.set(e,t)),e}const Td=t=>Xp.get(t);function cP(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Sr(o.result),l.oldVersion,l.newVersion,Sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const dP=["get","getKey","getAll","getAllKeys","count"],fP=["put","add","delete","clear"],Pd=new Map;function ty(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pd.get(e))return Pd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=fP.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||dP.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Pd.set(e,s),s}aP(t=>({...t,get:(e,n,r)=>ty(e,n)||t.get(e,n,r),has:(e,n)=>!!ty(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pP(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ah="@firebase/app",ny="0.9.27";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=new Qp("@firebase/app"),mP="@firebase/app-compat",gP="@firebase/analytics-compat",vP="@firebase/analytics",yP="@firebase/app-check-compat",_P="@firebase/app-check",wP="@firebase/auth",bP="@firebase/auth-compat",SP="@firebase/database",xP="@firebase/database-compat",CP="@firebase/functions",EP="@firebase/functions-compat",kP="@firebase/installations",IP="@firebase/installations-compat",TP="@firebase/messaging",PP="@firebase/messaging-compat",NP="@firebase/performance",OP="@firebase/performance-compat",RP="@firebase/remote-config",AP="@firebase/remote-config-compat",MP="@firebase/storage",LP="@firebase/storage-compat",DP="@firebase/firestore",jP="@firebase/firestore-compat",FP="firebase",UP="10.8.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lh="[DEFAULT]",VP={[ah]:"fire-core",[mP]:"fire-core-compat",[vP]:"fire-analytics",[gP]:"fire-analytics-compat",[_P]:"fire-app-check",[yP]:"fire-app-check-compat",[wP]:"fire-auth",[bP]:"fire-auth-compat",[SP]:"fire-rtdb",[xP]:"fire-rtdb-compat",[CP]:"fire-fn",[EP]:"fire-fn-compat",[kP]:"fire-iid",[IP]:"fire-iid-compat",[TP]:"fire-fcm",[PP]:"fire-fcm-compat",[NP]:"fire-perf",[OP]:"fire-perf-compat",[RP]:"fire-rc",[AP]:"fire-rc-compat",[MP]:"fire-gcs",[LP]:"fire-gcs-compat",[DP]:"fire-fst",[jP]:"fire-fst-compat","fire-js":"fire-js",[FP]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new Map,uh=new Map;function $P(t,e){try{t.container.addComponent(e)}catch(n){li.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ui(t){const e=t.name;if(uh.has(e))return li.debug(`There were multiple attempts to register component ${e}.`),!1;uh.set(e,t);for(const n of wu.values())$P(n,t);return!0}function vc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zP={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xr=new va("app","Firebase",zP);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=UP;function X1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:lh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=B1()),!n)throw xr.create("no-options");const s=wu.get(i);if(s){if(_u(n,s.options)&&_u(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new XT(i);for(const l of uh.values())o.addComponent(l);const a=new BP(n,r,o);return wu.set(i,a),a}function Jp(t=lh){const e=wu.get(t);if(!e&&t===lh&&B1())return X1();if(!e)throw xr.create("no-app",{appName:t});return e}function mn(t,e,n){var r;let i=(r=VP[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),li.warn(a.join(" "));return}ui(new Tr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WP="firebase-heartbeat-database",HP=1,Wo="firebase-heartbeat-store";let Nd=null;function J1(){return Nd||(Nd=cP(WP,HP,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Wo)}catch(n){console.warn(n)}}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),Nd}async function GP(t){try{const n=(await J1()).transaction(Wo),r=await n.objectStore(Wo).get(Z1(t));return await n.done,r}catch(e){if(e instanceof Gn)li.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});li.warn(n.message)}}}async function ry(t,e){try{const r=(await J1()).transaction(Wo,"readwrite");await r.objectStore(Wo).put(e,Z1(t)),await r.done}catch(n){if(n instanceof Gn)li.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});li.warn(r.message)}}}function Z1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=1024,qP=30*24*60*60*1e3;class KP{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new XP(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=iy();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=qP}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=iy(),{heartbeatsToSend:r,unsentEntries:i}=QP(this._heartbeatsCache.heartbeats),s=gu(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function iy(){return new Date().toISOString().substring(0,10)}function QP(t,e=YP){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class XP{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return DT()?jT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await GP(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ry(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sy(t){return gu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(t){ui(new Tr("platform-logger",e=>new hP(e),"PRIVATE")),ui(new Tr("heartbeat",e=>new KP(e),"PRIVATE")),mn(ah,ny,t),mn(ah,ny,"esm2017"),mn("fire-js","")}JP("");var oy={};const ay="@firebase/database",ly="1.0.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eb="";function ZP(t){eb=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eN{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),De(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return wn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eN(e)}}catch{}return new tN},qr=tb("localStorage"),ch=tb("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zi=new Qp("@firebase/database"),nN=function(){let t=1;return function(){return t++}}(),nb=function(t){const e=YT(t),n=new BT;n.update(e);const r=n.digest();return Yp.encodeByteArray(r)},_a=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=_a.apply(null,r):typeof r=="object"?e+=De(r):e+=r,e+=" "}return e};let Zr=null,uy=!0;const rN=function(t,e){T(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Zi.logLevel=ie.VERBOSE,Zr=Zi.log.bind(Zi),e&&ch.set("logging_enabled",!0)):typeof t=="function"?Zr=t:(Zr=null,ch.remove("logging_enabled"))},qe=function(...t){if(uy===!0&&(uy=!1,Zr===null&&ch.get("logging_enabled")===!0&&rN(!0)),Zr){const e=_a.apply(null,t);Zr(e)}},wa=function(t){return function(...e){qe(t,...e)}},dh=function(...t){const e="FIREBASE INTERNAL ERROR: "+_a(...t);Zi.error(e)},jn=function(...t){const e=`FIREBASE FATAL ERROR: ${_a(...t)}`;throw Zi.error(e),new Error(e)},ht=function(...t){const e="FIREBASE WARNING: "+_a(...t);Zi.warn(e)},iN=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ht("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zp=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},sN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ci="[MIN_NAME]",Pr="[MAX_NAME]",Si=function(t,e){if(t===e)return 0;if(t===ci||e===Pr)return-1;if(e===ci||t===Pr)return 1;{const n=cy(t),r=cy(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},oN=function(t,e){return t===e?0:t<e?-1:1},zs=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+De(e))},em=function(t){if(typeof t!="object"||t===null)return De(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=De(e[r]),n+=":",n+=em(t[e[r]]);return n+="}",n},rb=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Ze(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const ib=function(t){T(!Zp(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(c.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},aN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},lN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function uN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const cN=new RegExp("^-?(0*)\\d{1,10}$"),dN=-2147483648,fN=2147483647,cy=function(t){if(cN.test(t)){const e=Number(t);if(e>=dN&&e<=fN)return e}return null},Is=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ht("Exception was thrown by user callback.",n),e},Math.floor(0))}},hN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},go=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ht(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(qe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ht(e)}}class es{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}es.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm="5",sb="v",ob="s",ab="r",lb="f",ub=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,cb="ls",db="p",fh="ac",fb="websocket",hb="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r,i,s=!1,o="",a=!1,l=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qr.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qr.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function gN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function mb(t,e,n){T(typeof e=="string","typeof type must == string"),T(typeof n=="object","typeof params must == object");let r;if(e===fb)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===hb)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);gN(t)&&(n.ns=t.namespace);const i=[];return Ze(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vN{constructor(){this.counters_={}}incrementCounter(e,n=1){wn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return TT(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od={},Rd={};function nm(t){const e=t.toString();return Od[e]||(Od[e]=new vN),Od[e]}function yN(t,e){const n=t.toString();return Rd[n]||(Rd[n]=e()),Rd[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _N{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&Is(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="start",wN="close",bN="pLPCommand",SN="pRTLPCB",gb="id",vb="pw",yb="ser",xN="cb",CN="seg",EN="ts",kN="d",IN="dframe",_b=1870,wb=30,TN=_b-wb,PN=25e3,NN=3e4;class $i{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=wa(e),this.stats_=nm(n),this.urlFn=l=>(this.appCheckToken&&(l[fh]=this.appCheckToken),mb(n,hb,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new _N(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(NN)),sN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new rm((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===dy)this.id=a,this.password=l;else if(o===wN)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[dy]="t",r[yb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[xN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[sb]=tm,this.transportSessionId&&(r[ob]=this.transportSessionId),this.lastSessionId&&(r[cb]=this.lastSessionId),this.applicationId&&(r[db]=this.applicationId),this.appCheckToken&&(r[fh]=this.appCheckToken),typeof location<"u"&&location.hostname&&ub.test(location.hostname)&&(r[ab]=lb);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$i.forceAllow_=!0}static forceDisallow(){$i.forceDisallow_=!0}static isAvailable(){return $i.forceAllow_?!0:!$i.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!aN()&&!lN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=U1(n),i=rb(r,TN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[IN]="t",r[gb]=e,r[vb]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=De(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class rm{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=nN(),window[bN+this.uniqueCallbackIdentifier]=e,window[SN+this.uniqueCallbackIdentifier]=n,this.myIFrame=rm.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){qe("frame writing exception"),a.stack&&qe(a.stack),qe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||qe("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[gb]=this.myID,e[vb]=this.myPW,e[yb]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+wb+r.length<=_b;){const o=this.pendingSegs.shift();r=r+"&"+CN+i+"="+o.seg+"&"+EN+i+"="+o.ts+"&"+kN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(PN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{qe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ON=16384,RN=45e3;let bu=null;typeof MozWebSocket<"u"?bu=MozWebSocket:typeof WebSocket<"u"&&(bu=WebSocket);class Qt{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=wa(this.connId),this.stats_=nm(n),this.connURL=Qt.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[sb]=tm,typeof location<"u"&&location.hostname&&ub.test(location.hostname)&&(o[ab]=lb),n&&(o[ob]=n),r&&(o[cb]=r),i&&(o[fh]=i),s&&(o[db]=s),mb(e,fb,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qr.set("previous_websocket_failure",!0);try{let r;Y1(),this.mySock=new bu(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Qt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&bu!==null&&!Qt.forceDisallow_}static previouslyFailed(){return qr.isInMemoryStorage||qr.get("previous_websocket_failure")===!0}markConnectionHealthy(){qr.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=Bo(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(T(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=rb(n,ON);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(RN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Qt.responsesRequiredToBeHealthy=2;Qt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$i,Qt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Qt&&Qt.isAvailable();let r=n&&!Qt.previouslyFailed();if(e.webSocketOnly&&(n||ht("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Qt];else{const i=this.transports_=[];for(const s of Ho.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);Ho.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ho.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN=6e4,MN=5e3,LN=10*1024,DN=100*1024,Ad="t",fy="d",jN="s",hy="r",FN="e",py="o",my="a",gy="n",vy="p",UN="h";class VN{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=wa("c:"+this.id+":"),this.transportManager_=new Ho(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=go(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>DN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>LN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ad in e){const n=e[Ad];n===my?this.upgradeIfSecondaryHealthy_():n===hy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===py&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=zs("t",e),r=zs("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:vy,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:my,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:gy,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=zs("t",e),r=zs("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=zs(Ad,e);if(fy in e){const r=e[fy];if(n===UN){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===gy){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===jN?this.onConnectionShutdown_(r):n===hy?this.onReset_(r):n===FN?dh("Server Error: "+r):n===py?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):dh("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),tm!==r&&ht("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),go(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(AN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):go(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(MN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:vy,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qr.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e){this.allowedEvents_=e,this.listeners_={},T(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){T(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends Sb{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Kp()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Su}getInitialEvent(e){return T(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=32,_y=768;class ne{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Q(){return new ne("")}function G(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Nr(t){return t.pieces_.length-t.pieceNum_}function ae(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ne(t.pieces_,e)}function im(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function $N(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Go(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function xb(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ne(e,0)}function Ee(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof ne)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new ne(n,0)}function W(t){return t.pieceNum_>=t.pieces_.length}function dt(t,e){const n=G(t),r=G(e);if(n===null)return e;if(n===r)return dt(ae(t),ae(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function zN(t,e){const n=Go(t,0),r=Go(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=Si(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function Cb(t,e){if(Nr(t)!==Nr(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function Vt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Nr(t)>Nr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class BN{constructor(e,n){this.errorPrefix_=n,this.parts_=Go(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=gc(this.parts_[r]);Eb(this)}}function WN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=gc(e),Eb(t)}function HN(t){const e=t.parts_.pop();t.byteLength_-=gc(e),t.parts_.length>0&&(t.byteLength_-=1)}function Eb(t){if(t.byteLength_>_y)throw new Error(t.errorPrefix_+"has a key path longer than "+_y+" bytes ("+t.byteLength_+").");if(t.parts_.length>yy)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+yy+") or object contains a cycle "+Wr(t))}function Wr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm extends Sb{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new sm}getInitialEvent(e){return T(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=1e3,GN=60*5*1e3,wy=30*1e3,YN=1.3,qN=3e4,KN="server_kill",by=3;class On extends bb{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=On.nextPersistentConnectionId_++,this.log_=wa("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Bs,this.maxReconnectDelay_=GN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!Y1())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");sm.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Su.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(De(s)),T(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ga,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),T(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;On.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&wn(e,"w")){const r=hs(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ht(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||zT(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=wy)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=$T(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),T(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+De(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):dh("Unrecognized action received from server: "+De(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){T(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>qN&&(this.reconnectDelay_=Bs),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*YN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+On.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){T(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?qe("getToken() completed but was canceled"):(qe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new VN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{ht(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(KN)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ht(d),l())}}}interrupt(e){qe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){qe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],ih(this.interruptReasons_)&&(this.reconnectDelay_=Bs,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>em(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new ne(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){qe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=by&&(this.reconnectDelay_=wy,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){qe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=by&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+eb.replace(/\./g,"-")]=1,Kp()?e["framework.cordova"]=1:G1()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Su.getInstance().currentlyOnline();return ih(this.interruptReasons_)&&e}}On.nextPersistentConnectionId_=0;On.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new H(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new H(ci,e),i=new H(ci,n);return this.compare(r,i)!==0}minPost(){return H.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el;class kb extends yc{static get __EMPTY_NODE(){return el}static set __EMPTY_NODE(e){el=e}compare(e,n){return Si(e.name,n.name)}isDefinedOn(e){throw Es("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return H.MIN}maxPost(){return new H(Pr,el)}makePost(e,n){return T(typeof e=="string","KeyIndex indexValue must always be a string."),new H(e,el)}toString(){return".key"}}const ei=new kb;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??_t.EMPTY_NODE,this.right=s??_t.EMPTY_NODE}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return _t.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return _t.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}$e.RED=!0;$e.BLACK=!1;class QN{copy(e,n,r,i,s){return this}insert(e,n,r){return new $e(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class _t{constructor(e,n=_t.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new _t(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,$e.BLACK,null,null))}remove(e){return new _t(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,$e.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new tl(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new tl(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new tl(this.root_,null,this.comparator_,!0,e)}}_t.EMPTY_NODE=new QN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XN(t,e){return Si(t.name,e.name)}function om(t,e){return Si(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hh;function JN(t){hh=t}const Ib=function(t){return typeof t=="number"?"number:"+ib(t):"string:"+t},Tb=function(t){if(t.isLeafNode()){const e=t.val();T(typeof e=="string"||typeof e=="number"||typeof e=="object"&&wn(e,".sv"),"Priority must be a string or number.")}else T(t===hh||t.isEmpty(),"priority of unexpected type.");T(t===hh||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sy;class Ue{constructor(e,n=Ue.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,T(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Tb(this.priorityNode_)}static set __childrenNodeConstructor(e){Sy=e}static get __childrenNodeConstructor(){return Sy}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ue(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return W(e)?this:G(e)===".priority"?this.priorityNode_:Ue.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ue.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=G(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(T(r!==".priority"||Nr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Ue.__childrenNodeConstructor.EMPTY_NODE.updateChild(ae(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ib(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=ib(this.value_):e+=this.value_,this.lazyHash_=nb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ue.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ue.__childrenNodeConstructor?-1:(T(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=Ue.VALUE_TYPE_ORDER.indexOf(n),s=Ue.VALUE_TYPE_ORDER.indexOf(r);return T(i>=0,"Unknown leaf type: "+n),T(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ue.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pb,Nb;function ZN(t){Pb=t}function eO(t){Nb=t}class tO extends yc{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Si(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return H.MIN}maxPost(){return new H(Pr,new Ue("[PRIORITY-POST]",Nb))}makePost(e,n){const r=Pb(e);return new H(n,new Ue("[PRIORITY-POST]",r))}toString(){return".priority"}}const _e=new tO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=Math.log(2);class rO{constructor(e){const n=s=>parseInt(Math.log(s)/nO,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const xu=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,h;if(c===0)return null;if(c===1)return d=t[l],h=n?n(d):d,new $e(h,d.node,$e.BLACK,null,null);{const g=parseInt(c/2,10)+l,v=i(l,g),y=i(g+1,u);return d=t[g],h=n?n(d):d,new $e(h,d.node,$e.BLACK,v,y)}},s=function(l){let u=null,c=null,d=t.length;const h=function(v,y){const w=d-v,p=d;d-=v;const m=i(w+1,p),_=t[w],S=n?n(_):_;g(new $e(S,_.node,y,null,m))},g=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),w=Math.pow(2,l.count-(v+1));y?h(w,$e.BLACK):(h(w,$e.BLACK),h(w,$e.RED))}return c},o=new rO(t.length),a=s(o);return new _t(r||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Md;const ki={};class In{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return T(ki&&_e,"ChildrenNode.ts has not been loaded"),Md=Md||new In({".priority":ki},{".priority":_e}),Md}get(e){const n=hs(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof _t?n:null}hasIndex(e){return wn(this.indexSet_,e.toString())}addIndex(e,n){T(e!==ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(H.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=xu(r,e.getCompare()):a=ki;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new In(c,u)}addToIndexes(e,n){const r=yu(this.indexes_,(i,s)=>{const o=hs(this.indexSet_,s);if(T(o,"Missing index implementation for "+s),i===ki)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(H.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),xu(a,o.getCompare())}else return ki;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new H(e.name,a))),l.insert(e,e.node)}});return new In(r,this.indexSet_)}removeFromIndexes(e,n){const r=yu(this.indexes_,i=>{if(i===ki)return i;{const s=n.get(e.name);return s?i.remove(new H(e.name,s)):i}});return new In(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ws;class z{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Tb(this.priorityNode_),this.children_.isEmpty()&&T(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Ws||(Ws=new z(new _t(om),null,In.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ws}updatePriority(e){return this.children_.isEmpty()?this:new z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Ws:n}}getChild(e){const n=G(e);return n===null?this:this.getImmediateChild(n).getChild(ae(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(T(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new H(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Ws:this.priorityNode_;return new z(i,o,s)}}updateChild(e,n){const r=G(e);if(r===null)return n;{T(G(e)!==".priority"||Nr(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ae(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(_e,(o,a)=>{n[o]=a.val(e),r++,s&&z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ib(this.getPriority().val())+":"),this.forEachChild(_e,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":nb(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new H(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new H(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new H(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,H.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ba?-1:0}withIndex(e){if(e===ei||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(_e),i=n.getIterator(_e);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ei?null:this.indexMap_.get(e.toString())}}z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class iO extends z{constructor(){super(new _t(om),z.EMPTY_NODE,In.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return z.EMPTY_NODE}isEmpty(){return!1}}const ba=new iO;Object.defineProperties(H,{MIN:{value:new H(ci,z.EMPTY_NODE)},MAX:{value:new H(Pr,ba)}});kb.__EMPTY_NODE=z.EMPTY_NODE;Ue.__childrenNodeConstructor=z;JN(ba);eO(ba);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=!0;function Le(t,e=null){if(t===null)return z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),T(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ue(n,Le(e))}if(!(t instanceof Array)&&sO){const n=[];let r=!1;if(Ze(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Le(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new H(o,l)))}}),n.length===0)return z.EMPTY_NODE;const s=xu(n,XN,o=>o.name,om);if(r){const o=xu(n,_e.getCompare());return new z(s,Le(e),new In({".priority":o},{".priority":_e}))}else return new z(s,Le(e),In.Default)}else{let n=z.EMPTY_NODE;return Ze(t,(r,i)=>{if(wn(t,r)&&r.substring(0,1)!=="."){const s=Le(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Le(e))}}ZN(Le);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am extends yc{constructor(e){super(),this.indexPath_=e,T(!W(e)&&G(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Si(e.name,n.name):s}makePost(e,n){const r=Le(e),i=z.EMPTY_NODE.updateChild(this.indexPath_,r);return new H(n,i)}maxPost(){const e=z.EMPTY_NODE.updateChild(this.indexPath_,ba);return new H(Pr,e)}toString(){return Go(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO extends yc{compare(e,n){const r=e.node.compareTo(n.node);return r===0?Si(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return H.MIN}maxPost(){return H.MAX}makePost(e,n){const r=Le(e);return new H(n,r)}toString(){return".value"}}const Ob=new oO;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rb(t){return{type:"value",snapshotNode:t}}function ps(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Yo(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function qo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function aO(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){T(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Yo(n,a)):T(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ps(n,r)):o.trackChildChange(qo(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(_e,(i,s)=>{n.hasChild(i)||r.trackChildChange(Yo(i,s))}),n.isLeafNode()||n.forEachChild(_e,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(qo(i,s,o))}else r.trackChildChange(ps(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e){this.indexedFilter_=new lm(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Ko.getStartPost_(e),this.endPost_=Ko.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new H(n,r))||(r=z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(z.EMPTY_NODE);const s=this;return n.forEachChild(_e,(o,a)=>{s.matches(new H(o,a))||(i=i.updateImmediateChild(o,z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lO{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new Ko(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new H(n,r))||(r=z.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=z.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(z.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const a=s.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const a=e;T(a.numChildren()===this.limit_,"");const l=new H(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(qo(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Yo(n,d));const y=a.updateImmediateChild(n,z.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(ps(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Yo(u.name,u.node)),s.trackChildChange(ps(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,z.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class um{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=_e}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return T(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return T(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ci}hasEnd(){return this.endSet_}getIndexEndValue(){return T(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return T(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return T(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===_e}copy(){const e=new um;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function uO(t){return t.loadsAllData()?new lm(t.getIndex()):t.hasLimit()?new lO(t):new Ko(t)}function cO(t,e,n){const r=t.copy();return r.startSet_=!0,e===void 0&&(e=null),r.indexStartValue_=e,n!=null?(r.startNameSet_=!0,r.indexStartName_=n):(r.startNameSet_=!1,r.indexStartName_=""),r}function dO(t,e,n){const r=t.copy();return r.endSet_=!0,e===void 0&&(e=null),r.indexEndValue_=e,n!==void 0?(r.endNameSet_=!0,r.indexEndName_=n):(r.endNameSet_=!1,r.indexEndName_=""),r}function fO(t,e){const n=t.copy();return n.index_=e,n}function xy(t){const e={};if(t.isDefault())return e;let n;if(t.index_===_e?n="$priority":t.index_===Ob?n="$value":t.index_===ei?n="$key":(T(t.index_ instanceof am,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=De(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=De(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+De(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=De(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+De(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Cy(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==_e&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu extends bb{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=wa("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(T(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=Cu.getListenId_(e,r),a={};this.listens_[o]=a;const l=xy(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),hs(this.listens_,o)===a){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=Cu.getListenId_(e,n);delete this.listens_[r]}get(e){const n=xy(e._queryParams),r=e._path.toString(),i=new ga;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ks(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Bo(a.responseText)}catch{ht("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&ht("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(){this.rootNode_=z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(){return{value:null,children:new Map}}function Ab(t,e,n){if(W(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=G(e);t.children.has(r)||t.children.set(r,Eu());const i=t.children.get(r);e=ae(e),Ab(i,e,n)}}function ph(t,e,n){t.value!==null?n(e,t.value):pO(t,(r,i)=>{const s=new ne(e.toString()+"/"+r);ph(i,s,n)})}function pO(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mO{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Ze(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ey=10*1e3,gO=30*1e3,vO=5*60*1e3;class yO{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mO(e);const r=Ey+(gO-Ey)*Math.random();go(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Ze(e,(i,s)=>{s>0&&wn(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),go(this.reportStats_.bind(this),Math.floor(Math.random()*2*vO))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Xt||(Xt={}));function cm(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function dm(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function fm(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=Xt.ACK_USER_WRITE,this.source=cm()}operationForChild(e){if(W(this.path)){if(this.affectedTree.value!=null)return T(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ne(e));return new ku(Q(),n,this.revert)}}else return T(G(this.path)===e,"operationForChild called for unrelated child."),new ku(ae(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo{constructor(e,n){this.source=e,this.path=n,this.type=Xt.LISTEN_COMPLETE}operationForChild(e){return W(this.path)?new Qo(this.source,Q()):new Qo(this.source,ae(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=Xt.OVERWRITE}operationForChild(e){return W(this.path)?new di(this.source,Q(),this.snap.getImmediateChild(e)):new di(this.source,ae(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=Xt.MERGE}operationForChild(e){if(W(this.path)){const n=this.children.subtree(new ne(e));return n.isEmpty()?null:n.value?new di(this.source,Q(),n.value):new ms(this.source,Q(),n)}else return T(G(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ms(this.source,ae(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(W(e))return this.isFullyInitialized()&&!this.filtered_;const n=G(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _O{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function wO(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(aO(o.childName,o.snapshotNode))}),Hs(t,i,"child_removed",e,r,n),Hs(t,i,"child_added",e,r,n),Hs(t,i,"child_moved",s,r,n),Hs(t,i,"child_changed",e,r,n),Hs(t,i,"value",e,r,n),i}function Hs(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>SO(t,a,l)),o.forEach(a=>{const l=bO(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function bO(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function SO(t,e,n){if(e.childName==null||n.childName==null)throw Es("Should only compare child_ events.");const r=new H(e.childName,e.snapshotNode),i=new H(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(t,e){return{eventCache:t,serverCache:e}}function vo(t,e,n,r){return _c(new Or(e,n,r),t.serverCache)}function Mb(t,e,n,r){return _c(t.eventCache,new Or(e,n,r))}function Iu(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function fi(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ld;const xO=()=>(Ld||(Ld=new _t(oN)),Ld);class oe{constructor(e,n=xO()){this.value=e,this.children=n}static fromObject(e){let n=new oe(null);return Ze(e,(r,i)=>{n=n.set(new ne(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Q(),value:this.value};if(W(e))return null;{const r=G(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ae(e),n);return s!=null?{path:Ee(new ne(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(W(e))return this;{const n=G(e),r=this.children.get(n);return r!==null?r.subtree(ae(e)):new oe(null)}}set(e,n){if(W(e))return new oe(n,this.children);{const r=G(e),s=(this.children.get(r)||new oe(null)).set(ae(e),n),o=this.children.insert(r,s);return new oe(this.value,o)}}remove(e){if(W(e))return this.children.isEmpty()?new oe(null):new oe(null,this.children);{const n=G(e),r=this.children.get(n);if(r){const i=r.remove(ae(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new oe(null):new oe(this.value,s)}else return this}}get(e){if(W(e))return this.value;{const n=G(e),r=this.children.get(n);return r?r.get(ae(e)):null}}setTree(e,n){if(W(e))return n;{const r=G(e),s=(this.children.get(r)||new oe(null)).setTree(ae(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new oe(this.value,o)}}fold(e){return this.fold_(Q(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ee(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,Q(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(W(e))return null;{const s=G(e),o=this.children.get(s);return o?o.findOnPath_(ae(e),Ee(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Q(),n)}foreachOnPath_(e,n,r){if(W(e))return this;{this.value&&r(n,this.value);const i=G(e),s=this.children.get(i);return s?s.foreachOnPath_(ae(e),Ee(n,i),r):new oe(null)}}foreach(e){this.foreach_(Q(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ee(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new oe(null))}}function yo(t,e,n){if(W(e))return new tn(new oe(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=dt(i,e);return s=s.updateChild(o,n),new tn(t.writeTree_.set(i,s))}else{const i=new oe(n),s=t.writeTree_.setTree(e,i);return new tn(s)}}}function mh(t,e,n){let r=t;return Ze(n,(i,s)=>{r=yo(r,Ee(e,i),s)}),r}function ky(t,e){if(W(e))return tn.empty();{const n=t.writeTree_.setTree(e,new oe(null));return new tn(n)}}function gh(t,e){return xi(t,e)!=null}function xi(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(dt(n.path,e)):null}function Iy(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(_e,(r,i)=>{e.push(new H(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new H(r,i.value))}),e}function Cr(t,e){if(W(e))return t;{const n=xi(t,e);return n!=null?new tn(new oe(n)):new tn(t.writeTree_.subtree(e))}}function vh(t){return t.writeTree_.isEmpty()}function gs(t,e){return Lb(Q(),t.writeTree_,e)}function Lb(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(T(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Lb(Ee(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(Ee(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t,e){return Ub(e,t)}function CO(t,e,n,r,i){T(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=yo(t.visibleWrites,e,n)),t.lastWriteId=r}function EO(t,e,n,r){T(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=mh(t.visibleWrites,e,n),t.lastWriteId=r}function kO(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function IO(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);T(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&TO(a,r.path)?i=!1:Vt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return PO(t),!0;if(r.snap)t.visibleWrites=ky(t.visibleWrites,r.path);else{const a=r.children;Ze(a,l=>{t.visibleWrites=ky(t.visibleWrites,Ee(r.path,l))})}return!0}else return!1}function TO(t,e){if(t.snap)return Vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Vt(Ee(t.path,n),e))return!0;return!1}function PO(t){t.visibleWrites=Db(t.allWrites,NO,Q()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function NO(t){return t.visible}function Db(t,e,n){let r=tn.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)Vt(n,o)?(a=dt(n,o),r=yo(r,a,s.snap)):Vt(o,n)&&(a=dt(o,n),r=yo(r,Q(),s.snap.getChild(a)));else if(s.children){if(Vt(n,o))a=dt(n,o),r=mh(r,a,s.children);else if(Vt(o,n))if(a=dt(o,n),W(a))r=mh(r,Q(),s.children);else{const l=hs(s.children,G(a));if(l){const u=l.getChild(ae(a));r=yo(r,Q(),u)}}}else throw Es("WriteRecord should have .snap or .children")}}return r}function jb(t,e,n,r,i){if(!r&&!i){const s=xi(t.visibleWrites,e);if(s!=null)return s;{const o=Cr(t.visibleWrites,e);if(vh(o))return n;if(n==null&&!gh(o,Q()))return null;{const a=n||z.EMPTY_NODE;return gs(o,a)}}}else{const s=Cr(t.visibleWrites,e);if(!i&&vh(s))return n;if(!i&&n==null&&!gh(s,Q()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Vt(u.path,e)||Vt(e,u.path))},a=Db(t.allWrites,o,e),l=n||z.EMPTY_NODE;return gs(a,l)}}}function OO(t,e,n){let r=z.EMPTY_NODE;const i=xi(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(_e,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Cr(t.visibleWrites,e);return n.forEachChild(_e,(o,a)=>{const l=gs(Cr(s,new ne(o)),a);r=r.updateImmediateChild(o,l)}),Iy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Cr(t.visibleWrites,e);return Iy(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function RO(t,e,n,r,i){T(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ee(e,n);if(gh(t.visibleWrites,s))return null;{const o=Cr(t.visibleWrites,s);return vh(o)?i.getChild(n):gs(o,i.getChild(n))}}function AO(t,e,n,r){const i=Ee(e,n),s=xi(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Cr(t.visibleWrites,i);return gs(o,r.getNode().getImmediateChild(n))}else return null}function MO(t,e){return xi(t.visibleWrites,e)}function LO(t,e,n,r,i,s,o){let a;const l=Cr(t.visibleWrites,e),u=xi(l,Q());if(u!=null)a=u;else if(n!=null)a=gs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),h=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=h.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=h.getNext();return c}else return[]}function DO(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function Tu(t,e,n,r){return jb(t.writeTree,t.treePath,e,n,r)}function hm(t,e){return OO(t.writeTree,t.treePath,e)}function Ty(t,e,n,r){return RO(t.writeTree,t.treePath,e,n,r)}function Pu(t,e){return MO(t.writeTree,Ee(t.treePath,e))}function jO(t,e,n,r,i,s){return LO(t.writeTree,t.treePath,e,n,r,i,s)}function pm(t,e,n){return AO(t.writeTree,t.treePath,e,n)}function Fb(t,e){return Ub(Ee(t.treePath,e),t.writeTree)}function Ub(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FO{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;T(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),T(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,qo(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Yo(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ps(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,qo(r,e.snapshotNode,i.oldSnap));else throw Es("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UO{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const Vb=new UO;class mm{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new Or(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return pm(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:fi(this.viewCache_),s=jO(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VO(t){return{filter:t}}function $O(t,e){T(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),T(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function zO(t,e,n,r,i){const s=new FO;let o,a;if(n.type===Xt.OVERWRITE){const u=n;u.source.fromUser?o=yh(t,e,u.path,u.snap,r,i,s):(T(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!W(u.path),o=Nu(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===Xt.MERGE){const u=n;u.source.fromUser?o=WO(t,e,u.path,u.children,r,i,s):(T(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=_h(t,e,u.path,u.children,r,i,a,s))}else if(n.type===Xt.ACK_USER_WRITE){const u=n;u.revert?o=YO(t,e,u.path,r,i,s):o=HO(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===Xt.LISTEN_COMPLETE)o=GO(t,e,n.path,r,s);else throw Es("Unknown operation type: "+n.type);const l=s.getChanges();return BO(e,o,l),{viewCache:o,changes:l}}function BO(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Iu(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(Rb(Iu(e)))}}function $b(t,e,n,r,i,s){const o=e.eventCache;if(Pu(r,n)!=null)return e;{let a,l;if(W(n))if(T(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=fi(e),c=u instanceof z?u:z.EMPTY_NODE,d=hm(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Tu(r,fi(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=G(n);if(u===".priority"){T(Nr(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Ty(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=ae(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const h=Ty(r,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=pm(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return vo(e,a,o.isFullyInitialized()||W(n),t.filter.filtersNodes())}}function Nu(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(W(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=G(n);if(!l.isCompleteForPath(n)&&Nr(n)>1)return e;const v=ae(n),w=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=c.updatePriority(l.getNode(),w):u=c.updateChild(l.getNode(),g,w,v,Vb,null)}const d=Mb(e,u,l.isFullyInitialized()||W(n),c.filtersNodes()),h=new mm(i,d,s);return $b(t,d,n,i,h,a)}function yh(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new mm(i,e,s);if(W(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=vo(e,u,!0,t.filter.filtersNodes());else{const d=G(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=vo(e,u,a.isFullyInitialized(),a.isFiltered());else{const h=ae(n),g=a.getNode().getImmediateChild(d);let v;if(W(h))v=r;else{const y=c.getCompleteChild(d);y!=null?im(h)===".priority"&&y.getChild(xb(h)).isEmpty()?v=y:v=y.updateChild(h,r):v=z.EMPTY_NODE}if(g.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),d,v,h,c,o);l=vo(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Py(t,e){return t.eventCache.isCompleteForChild(e)}function WO(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=Ee(n,l);Py(e,G(c))&&(a=yh(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=Ee(n,l);Py(e,G(c))||(a=yh(t,a,c,u,i,s,o))}),a}function Ny(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function _h(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;W(n)?u=r:u=new oe(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=Ny(t,g,h);l=Nu(t,l,new ne(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),y=Ny(t,v,h);l=Nu(t,l,new ne(d),y,i,s,o,a)}}),l}function HO(t,e,n,r,i,s,o){if(Pu(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(W(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Nu(t,e,n,l.getNode().getChild(n),i,s,a,o);if(W(n)){let u=new oe(null);return l.getNode().forEachChild(ei,(c,d)=>{u=u.set(new ne(c),d)}),_h(t,e,n,u,i,s,a,o)}else return e}else{let u=new oe(null);return r.foreach((c,d)=>{const h=Ee(n,c);l.isCompleteForPath(h)&&(u=u.set(c,l.getNode().getChild(h)))}),_h(t,e,n,u,i,s,a,o)}}function GO(t,e,n,r,i){const s=e.serverCache,o=Mb(e,s.getNode(),s.isFullyInitialized()||W(n),s.isFiltered());return $b(t,o,n,r,Vb,i)}function YO(t,e,n,r,i,s){let o;if(Pu(r,n)!=null)return e;{const a=new mm(r,e,i),l=e.eventCache.getNode();let u;if(W(n)||G(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Tu(r,fi(e));else{const d=e.serverCache.getNode();T(d instanceof z,"serverChildren would be complete if leaf node"),c=hm(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=G(n);let d=pm(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,ae(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,z.EMPTY_NODE,ae(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Tu(r,fi(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Pu(r,Q())!=null,vo(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qO{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new lm(r.getIndex()),s=uO(r);this.processor_=VO(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(z.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(z.EMPTY_NODE,a.getNode(),null),c=new Or(l,o.isFullyInitialized(),i.filtersNodes()),d=new Or(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=_c(d,c),this.eventGenerator_=new _O(this.query_)}get query(){return this.query_}}function KO(t){return t.viewCache_.serverCache.getNode()}function QO(t){return Iu(t.viewCache_)}function XO(t,e){const n=fi(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!W(e)&&!n.getImmediateChild(G(e)).isEmpty())?n.getChild(e):null}function Oy(t){return t.eventRegistrations_.length===0}function JO(t,e){t.eventRegistrations_.push(e)}function Ry(t,e,n){const r=[];if(n){T(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Ay(t,e,n,r){e.type===Xt.MERGE&&e.source.queryId!==null&&(T(fi(t.viewCache_),"We should always have a full cache before handling merges"),T(Iu(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=zO(t.processor_,i,e,n,r);return $O(t.processor_,s.viewCache),T(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,zb(t,s.changes,s.viewCache.eventCache.getNode(),null)}function ZO(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(_e,(s,o)=>{r.push(ps(s,o))}),n.isFullyInitialized()&&r.push(Rb(n.getNode())),zb(t,r,n.getNode(),e)}function zb(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return wO(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ou;class Bb{constructor(){this.views=new Map}}function eR(t){T(!Ou,"__referenceConstructor has already been defined"),Ou=t}function tR(){return T(Ou,"Reference.ts has not been loaded"),Ou}function nR(t){return t.views.size===0}function gm(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return T(s!=null,"SyncTree gave us an op for an invalid query."),Ay(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Ay(o,e,n,r));return s}}function Wb(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Tu(n,i?r:null),l=!1;a?l=!0:r instanceof z?(a=hm(n,r),l=!1):(a=z.EMPTY_NODE,l=!1);const u=_c(new Or(a,l,!1),new Or(r,i,!1));return new qO(e,u)}return o}function rR(t,e,n,r,i,s){const o=Wb(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),JO(o,n),ZO(o,n)}function iR(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=Rr(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Ry(u,n,r)),Oy(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Ry(l,n,r)),Oy(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!Rr(t)&&s.push(new(tR())(e._repo,e._path)),{removed:s,events:o}}function Hb(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Er(t,e){let n=null;for(const r of t.views.values())n=n||XO(r,e);return n}function Gb(t,e){if(e._queryParams.loadsAllData())return bc(t);{const r=e._queryIdentifier;return t.views.get(r)}}function Yb(t,e){return Gb(t,e)!=null}function Rr(t){return bc(t)!=null}function bc(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ru;function sR(t){T(!Ru,"__referenceConstructor has already been defined"),Ru=t}function oR(){return T(Ru,"Reference.ts has not been loaded"),Ru}let aR=1;class My{constructor(e){this.listenProvider_=e,this.syncPointTree_=new oe(null),this.pendingWriteTree_=DO(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function qb(t,e,n,r,i){return CO(t.pendingWriteTree_,e,n,r,i),i?Ts(t,new di(cm(),e,n)):[]}function lR(t,e,n,r){EO(t.pendingWriteTree_,e,n,r);const i=oe.fromObject(n);return Ts(t,new ms(cm(),e,i))}function dr(t,e,n=!1){const r=kO(t.pendingWriteTree_,e);if(IO(t.pendingWriteTree_,e)){let s=new oe(null);return r.snap!=null?s=s.set(Q(),!0):Ze(r.children,o=>{s=s.set(new ne(o),!0)}),Ts(t,new ku(r.path,s,n))}else return[]}function Sa(t,e,n){return Ts(t,new di(dm(),e,n))}function uR(t,e,n){const r=oe.fromObject(n);return Ts(t,new ms(dm(),e,r))}function cR(t,e){return Ts(t,new Qo(dm(),e))}function dR(t,e,n){const r=ym(t,n);if(r){const i=_m(r),s=i.path,o=i.queryId,a=dt(s,e),l=new Qo(fm(o),a);return wm(t,s,l)}else return[]}function Kb(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||Yb(o,e))){const l=iR(o,e,n,r);nR(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,g)=>Rr(g));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const g=mR(h);for(let v=0;v<g.length;++v){const y=g[v],w=y.query,p=Zb(t,y);t.listenProvider_.startListening(_o(w),Xo(t,w),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(_o(e),null):u.forEach(h=>{const g=t.queryToTagMap.get(Sc(h));t.listenProvider_.stopListening(_o(h),g)}))}gR(t,u)}return a}function Qb(t,e,n,r){const i=ym(t,r);if(i!=null){const s=_m(i),o=s.path,a=s.queryId,l=dt(o,e),u=new di(fm(a),l,n);return wm(t,o,u)}else return[]}function fR(t,e,n,r){const i=ym(t,r);if(i){const s=_m(i),o=s.path,a=s.queryId,l=dt(o,e),u=oe.fromObject(n),c=new ms(fm(a),l,u);return wm(t,o,c)}else return[]}function hR(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const v=dt(h,i);s=s||Er(g,v),o=o||Rr(g)});let a=t.syncPointTree_.get(i);a?(o=o||Rr(a),s=s||Er(a,Q())):(a=new Bb,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const y=Er(v,Q());y&&(s=s.updateImmediateChild(g,y))}));const u=Yb(a,e);if(!u&&!e._queryParams.loadsAllData()){const h=Sc(e);T(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=vR();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const c=wc(t.pendingWriteTree_,i);let d=rR(a,e,n,c,s,l);if(!u&&!o&&!r){const h=Gb(a,e);d=d.concat(yR(t,e,h))}return d}function vm(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=dt(o,e),u=Er(a,l);if(u)return u});return jb(i,e,s,n,!0)}function pR(t,e){const n=e._path;let r=null;t.syncPointTree_.foreachOnPath(n,(u,c)=>{const d=dt(u,n);r=r||Er(c,d)});let i=t.syncPointTree_.get(n);i?r=r||Er(i,Q()):(i=new Bb,t.syncPointTree_=t.syncPointTree_.set(n,i));const s=r!=null,o=s?new Or(r,!0,!1):null,a=wc(t.pendingWriteTree_,e._path),l=Wb(i,e,a,s?o.getNode():z.EMPTY_NODE,s);return QO(l)}function Ts(t,e){return Xb(e,t.syncPointTree_,null,wc(t.pendingWriteTree_,Q()))}function Xb(t,e,n,r){if(W(t.path))return Jb(t,e,n,r);{const i=e.get(Q());n==null&&i!=null&&(n=Er(i,Q()));let s=[];const o=G(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=Fb(r,o);s=s.concat(Xb(a,l,u,c))}return i&&(s=s.concat(gm(i,t,r,n))),s}}function Jb(t,e,n,r){const i=e.get(Q());n==null&&i!=null&&(n=Er(i,Q()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=Fb(r,o),c=t.operationForChild(o);c&&(s=s.concat(Jb(c,a,l,u)))}),i&&(s=s.concat(gm(i,t,r,n))),s}function Zb(t,e){const n=e.query,r=Xo(t,n);return{hashFn:()=>(KO(e)||z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?dR(t,n._path,r):cR(t,n._path);{const s=uN(i,n);return Kb(t,n,null,s)}}}}function Xo(t,e){const n=Sc(e);return t.queryToTagMap.get(n)}function Sc(t){return t._path.toString()+"$"+t._queryIdentifier}function ym(t,e){return t.tagToQueryMap.get(e)}function _m(t){const e=t.indexOf("$");return T(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ne(t.substr(0,e))}}function wm(t,e,n){const r=t.syncPointTree_.get(e);T(r,"Missing sync point for query tag that we're tracking");const i=wc(t.pendingWriteTree_,e);return gm(r,n,i,null)}function mR(t){return t.fold((e,n,r)=>{if(n&&Rr(n))return[bc(n)];{let i=[];return n&&(i=Hb(n)),Ze(r,(s,o)=>{i=i.concat(o)}),i}})}function _o(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(oR())(t._repo,t._path):t}function gR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=Sc(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function vR(){return aR++}function yR(t,e,n){const r=e._path,i=Xo(t,e),s=Zb(t,n),o=t.listenProvider_.startListening(_o(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)T(!Rr(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!W(u)&&c&&Rr(c))return[bc(c).query];{let h=[];return c&&(h=h.concat(Hb(c).map(g=>g.query))),Ze(d,(g,v)=>{h=h.concat(v)}),h}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(_o(c),Xo(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new bm(n)}node(){return this.node_}}class Sm{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Ee(this.path_,e);return new Sm(this.syncTree_,n)}node(){return vm(this.syncTree_,this.path_)}}const _R=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},Ly=function(t,e,n){if(!t||typeof t!="object")return t;if(T(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return wR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return bR(t[".sv"],e);T(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},wR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:T(!1,"Unexpected server value: "+t)}},bR=function(t,e,n){t.hasOwnProperty("increment")||T(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&T(!1,"Unexpected increment value: "+r);const i=e.node();if(T(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},eS=function(t,e,n,r){return xm(e,new Sm(n,t),r)},tS=function(t,e,n){return xm(t,new bm(e),n)};function xm(t,e,n){const r=t.getPriority().val(),i=Ly(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=Ly(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ue(a,Le(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Ue(i))),o.forEachChild(_e,(a,l)=>{const u=xm(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Em(t,e){let n=e instanceof ne?e:new ne(e),r=t,i=G(n);for(;i!==null;){const s=hs(r.node.children,i)||{children:{},childCount:0};r=new Cm(i,r,s),n=ae(n),i=G(n)}return r}function Ps(t){return t.node.value}function nS(t,e){t.node.value=e,wh(t)}function rS(t){return t.node.childCount>0}function SR(t){return Ps(t)===void 0&&!rS(t)}function xc(t,e){Ze(t.node.children,(n,r)=>{e(new Cm(n,t,r))})}function iS(t,e,n,r){n&&!r&&e(t),xc(t,i=>{iS(i,e,!0,r)}),n&&r&&e(t)}function xR(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function xa(t){return new ne(t.parent===null?t.name:xa(t.parent)+"/"+t.name)}function wh(t){t.parent!==null&&CR(t.parent,t.name,t)}function CR(t,e,n){const r=SR(n),i=wn(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,wh(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,wh(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ER=/[\[\].#$\/\u0000-\u001F\u007F]/,kR=/[\[\].#$\u0000-\u001F\u007F]/,Dd=10*1024*1024,Cc=function(t){return typeof t=="string"&&t.length!==0&&!ER.test(t)},sS=function(t){return typeof t=="string"&&t.length!==0&&!kR.test(t)},IR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),sS(t)},bh=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Zp(t)||t&&typeof t=="object"&&wn(t,".sv")},Ca=function(t,e,n,r){r&&e===void 0||Ec(ya(t,"value"),e,n)},Ec=function(t,e,n){const r=n instanceof ne?new BN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Wr(r));if(typeof e=="function")throw new Error(t+"contains a function "+Wr(r)+" with contents = "+e.toString());if(Zp(e))throw new Error(t+"contains "+e.toString()+" "+Wr(r));if(typeof e=="string"&&e.length>Dd/3&&gc(e)>Dd)throw new Error(t+"contains a string greater than "+Dd+" utf8 bytes "+Wr(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Ze(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Cc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Wr(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);WN(r,o),Ec(t,a,r),HN(r)}),i&&s)throw new Error(t+' contains ".value" child '+Wr(r)+" in addition to actual children.")}},TR=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Go(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Cc(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(zN);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&Vt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},PR=function(t,e,n,r){if(r&&e===void 0)return;const i=ya(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];Ze(e,(o,a)=>{const l=new ne(o);if(Ec(i,a,Ee(n,l)),im(l)===".priority"&&!bh(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),TR(i,s)},NR=function(t,e,n,r){if(!(r&&n===void 0)&&!Cc(n))throw new Error(ya(t,e)+'was an invalid key = "'+n+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},km=function(t,e,n,r){if(!(r&&n===void 0)&&!sS(n))throw new Error(ya(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},OR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),km(t,e,n,r)},Im=function(t,e){if(G(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},RR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Cc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!IR(n))throw new Error(ya(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Tm(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!Cb(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function Wt(t,e,n){Tm(t,n),MR(t,r=>Vt(r,e)||Vt(e,r))}function MR(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(LR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function LR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Zr&&qe("event: "+n.toString()),Is(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DR="repo_interrupt",jR=25;class FR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new AR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Eu(),this.transactionQueueTree_=new Cm,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function UR(t,e,n){if(t.stats_=nm(t.repoInfo_),t.forceRestClient_||hN())t.server_=new Cu(t.repoInfo_,(r,i,s,o)=>{Dy(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>jy(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{De(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new On(t.repoInfo_,e,(r,i,s,o)=>{Dy(t,r,i,s,o)},r=>{jy(t,r)},r=>{VR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=yN(t.repoInfo_,()=>new yO(t.stats_,t.server_)),t.infoData_=new hO,t.infoSyncTree_=new My({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=Sa(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Pm(t,"connected",!1),t.serverSyncTree_=new My({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Wt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function oS(t){const n=t.infoData_.getNode(new ne(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kc(t){return _R({timestamp:oS(t)})}function Dy(t,e,n,r,i){t.dataUpdateCount++;const s=new ne(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=yu(n,u=>Le(u));o=fR(t.serverSyncTree_,s,l,i)}else{const l=Le(n);o=Qb(t.serverSyncTree_,s,l,i)}else if(r){const l=yu(n,u=>Le(u));o=uR(t.serverSyncTree_,s,l)}else{const l=Le(n);o=Sa(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=vs(t,s)),Wt(t.eventQueue_,a,o)}function jy(t,e){Pm(t,"connected",e),e===!1&&WR(t)}function VR(t,e){Ze(e,(n,r)=>{Pm(t,n,r)})}function Pm(t,e,n){const r=new ne("/.info/"+e),i=Le(n);t.infoData_.updateSnapshot(r,i);const s=Sa(t.infoSyncTree_,r,i);Wt(t.eventQueue_,r,s)}function Nm(t){return t.nextWriteId_++}function $R(t,e,n){const r=pR(t.serverSyncTree_,e);return r!=null?Promise.resolve(r):t.server_.get(e).then(i=>{const s=Le(i).withIndex(e._queryParams.getIndex());hR(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Sa(t.serverSyncTree_,e._path,s);else{const a=Xo(t.serverSyncTree_,e);o=Qb(t.serverSyncTree_,e._path,s,a)}return Wt(t.eventQueue_,e._path,o),Kb(t.serverSyncTree_,e,n,null,!0),s},i=>(Ea(t,"get for query "+De(e)+" failed: "+i),Promise.reject(new Error(i))))}function zR(t,e,n,r,i){Ea(t,"set",{path:e.toString(),value:n,priority:r});const s=kc(t),o=Le(n,r),a=vm(t.serverSyncTree_,e),l=tS(o,a,s),u=Nm(t),c=qb(t.serverSyncTree_,e,l,u,!0);Tm(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const v=h==="ok";v||ht("set at "+e+" failed: "+h);const y=dr(t.serverSyncTree_,u,!v);Wt(t.eventQueue_,e,y),Sh(t,i,h,g)});const d=Rm(t,e);vs(t,d),Wt(t.eventQueue_,d,[])}function BR(t,e,n,r){Ea(t,"update",{path:e.toString(),value:n});let i=!0;const s=kc(t),o={};if(Ze(n,(a,l)=>{i=!1,o[a]=eS(Ee(e,a),Le(l),t.serverSyncTree_,s)}),i)qe("update() called with empty data.  Don't do anything."),Sh(t,r,"ok",void 0);else{const a=Nm(t),l=lR(t.serverSyncTree_,e,o,a);Tm(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||ht("update at "+e+" failed: "+u);const h=dr(t.serverSyncTree_,a,!d),g=h.length>0?vs(t,e):e;Wt(t.eventQueue_,g,h),Sh(t,r,u,c)}),Ze(n,u=>{const c=Rm(t,Ee(e,u));vs(t,c)}),Wt(t.eventQueue_,e,[])}}function WR(t){Ea(t,"onDisconnectEvents");const e=kc(t),n=Eu();ph(t.onDisconnect_,Q(),(i,s)=>{const o=eS(i,s,t.serverSyncTree_,e);Ab(n,i,o)});let r=[];ph(n,Q(),(i,s)=>{r=r.concat(Sa(t.serverSyncTree_,i,s));const o=Rm(t,i);vs(t,o)}),t.onDisconnect_=Eu(),Wt(t.eventQueue_,Q(),r)}function HR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(DR)}function Ea(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),qe(n,...e)}function Sh(t,e,n,r){e&&Is(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function aS(t,e,n){return vm(t.serverSyncTree_,e,n)||z.EMPTY_NODE}function Om(t,e=t.transactionQueueTree_){if(e||Ic(t,e),Ps(e)){const n=uS(t,e);T(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&GR(t,xa(e),n)}else rS(e)&&xc(e,n=>{Om(t,n)})}function GR(t,e,n){const r=n.map(u=>u.currentWriteId),i=aS(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];T(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=dt(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Ea(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(dr(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Ic(t,Em(t.transactionQueueTree_,e)),Om(t,t.transactionQueueTree_),Wt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)Is(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ht("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}vs(t,e)}},o)}function vs(t,e){const n=lS(t,e),r=xa(n),i=uS(t,n);return YR(t,i,r),r}function YR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=dt(n,l.path);let c=!1,d;if(T(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=jR)c=!0,d="maxretry",i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0));else{const h=aS(t,l.path,o);l.currentInputSnapshot=h;const g=e[a].update(h.val());if(g!==void 0){Ec("transaction failed: Data returned ",g,l.path);let v=Le(g);typeof g=="object"&&g!=null&&wn(g,".priority")||(v=v.updatePriority(h.getPriority()));const w=l.currentWriteId,p=kc(t),m=tS(v,h,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=m,l.currentWriteId=Nm(t),o.splice(o.indexOf(w),1),i=i.concat(qb(t.serverSyncTree_,l.path,m,l.currentWriteId,l.applyLocally)),i=i.concat(dr(t.serverSyncTree_,w,!0))}else c=!0,d="nodata",i=i.concat(dr(t.serverSyncTree_,l.currentWriteId,!0))}Wt(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}Ic(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)Is(r[a]);Om(t,t.transactionQueueTree_)}function lS(t,e){let n,r=t.transactionQueueTree_;for(n=G(e);n!==null&&Ps(r)===void 0;)r=Em(r,n),e=ae(e),n=G(e);return r}function uS(t,e){const n=[];return cS(t,e,n),n.sort((r,i)=>r.order-i.order),n}function cS(t,e,n){const r=Ps(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);xc(e,i=>{cS(t,i,n)})}function Ic(t,e){const n=Ps(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,nS(e,n.length>0?n:void 0)}xc(e,r=>{Ic(t,r)})}function Rm(t,e){const n=xa(lS(t,e)),r=Em(t.transactionQueueTree_,e);return xR(r,i=>{jd(t,i)}),jd(t,r),iS(r,i=>{jd(t,i)}),n}function jd(t,e){const n=Ps(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(T(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(T(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(dr(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?nS(e,void 0):n.length=s+1,Wt(t.eventQueue_,xa(e),i);for(let o=0;o<r.length;o++)Is(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function KR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ht(`Invalid query segment '${n}' in query '${t}'`)}return e}const Fy=function(t,e){const n=QR(t),r=n.namespace;n.domain==="firebase.com"&&jn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&jn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||iN();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new pb(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new ne(n.pathString)}},QR=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=qR(t.substring(c,d)));const h=KR(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uy="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",XR=function(){let t=0;const e=[];return function(n){const r=n===t;t=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Uy.charAt(n%64),n=Math.floor(n/64);T(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Uy.charAt(e[i]);return T(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+De(this.snapshot.exportVal())}}class ZR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return T(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return W(this._path)?null:im(this._path)}get ref(){return new Yn(this._repo,this._path)}get _queryIdentifier(){const e=Cy(this._queryParams),n=em(e);return n==="{}"?"default":n}get _queryObject(){return Cy(this._queryParams)}isEqual(e){if(e=Ne(e),!(e instanceof Ns))return!1;const n=this._repo===e._repo,r=Cb(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+$N(this._path)}}function t2(t,e){if(t._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Am(t){let e=null,n=null;if(t.hasStart()&&(e=t.getIndexStartValue()),t.hasEnd()&&(n=t.getIndexEndValue()),t.getIndex()===ei){const r="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",i="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(t.hasStart()){if(t.getIndexStartName()!==ci)throw new Error(r);if(typeof e!="string")throw new Error(i)}if(t.hasEnd()){if(t.getIndexEndName()!==Pr)throw new Error(r);if(typeof n!="string")throw new Error(i)}}else if(t.getIndex()===_e){if(e!=null&&!bh(e)||n!=null&&!bh(n))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(T(t.getIndex()instanceof am||t.getIndex()===Ob,"unknown index type."),e!=null&&typeof e=="object"||n!=null&&typeof n=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function dS(t){if(t.hasStart()&&t.hasEnd()&&t.hasLimit()&&!t.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Yn extends Ns{constructor(e,n){super(e,n,new um,!1)}get parent(){const e=xb(this._path);return e===null?null:new Yn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Jo{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ne(e),r=Zo(this.ref,e);return new Jo(this._node.getChild(n),r,_e)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Jo(i,Zo(this.ref,r),_e)))}hasChild(e){const n=new ne(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function me(t,e){return t=Ne(t),t._checkNotDeleted("ref"),e!==void 0?Zo(t._root,e):t._root}function Zo(t,e){return t=Ne(t),G(t._path)===null?OR("child","path",e,!1):km("child","path",e,!1),new Yn(t._repo,Ee(t._path,e))}function fS(t,e){t=Ne(t),Im("push",t._path),Ca("push",e,t._path,!0);const n=oS(t._repo),r=XR(n),i=Zo(t,r),s=Zo(t,r);let o;return e!=null?o=Mm(s,e).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function hS(t){return Im("remove",t._path),Mm(t,null)}function Mm(t,e){t=Ne(t),Im("set",t._path),Ca("set",e,t._path,!1);const n=new ga;return zR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function ka(t,e){PR("update",e,t._path,!1);const n=new ga;return BR(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function Ct(t){t=Ne(t);const e=new e2(()=>{}),n=new Lm(e);return $R(t._repo,t,n).then(r=>new Jo(r,new Yn(t._repo,t._path),t._queryParams.getIndex()))}class Lm{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new JR("value",this,new Jo(e.snapshotNode,new Yn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ZR(this,e,n):null}matches(e){return e instanceof Lm?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Tc{}class n2 extends Tc{constructor(e,n){super(),this._value=e,this._key=n,this.type="endAt"}_apply(e){Ca("endAt",this._value,e._path,!0);const n=dO(e._queryParams,this._value,this._key);if(dS(n),Am(n),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new Ns(e._repo,e._path,n,e._orderByCalled)}}class r2 extends Tc{constructor(e,n){super(),this._value=e,this._key=n,this.type="startAt"}_apply(e){Ca("startAt",this._value,e._path,!0);const n=cO(e._queryParams,this._value,this._key);if(dS(n),Am(n),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new Ns(e._repo,e._path,n,e._orderByCalled)}}class i2 extends Tc{constructor(e){super(),this._path=e,this.type="orderByChild"}_apply(e){t2(e,"orderByChild");const n=new ne(this._path);if(W(n))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const r=new am(n),i=fO(e._queryParams,r);return Am(i),new Ns(e._repo,e._path,i,!0)}}function Dm(t){if(t==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(t==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(t==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return km("orderByChild","path",t,!1),new i2(t)}class s2 extends Tc{constructor(e,n){super(),this._value=e,this._key=n,this.type="equalTo"}_apply(e){if(Ca("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new n2(this._value,this._key)._apply(new r2(this._value,this._key)._apply(e))}}function pS(t,e){return NR("equalTo","key",e,!0),new s2(t,e)}function jm(t,...e){let n=Ne(t);for(const r of e)n=r._apply(n);return n}eR(Yn);sR(Yn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o2="FIREBASE_DATABASE_EMULATOR_HOST",xh={};let a2=!1;function l2(t,e,n,r){t.repoInfo_=new pb(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function u2(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||jn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),qe("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Fy(s,i),a=o.repoInfo,l,u;typeof process<"u"&&oy&&(u=oy[o2]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=Fy(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new es(es.OWNER):new mN(t.name,t.options,e);RR("Invalid Firebase Database URL",o),W(o.path)||jn("Database URL must point to the root of a Firebase Database (not including a child path).");const d=d2(a,t,c,new pN(t.name,n));return new f2(d,t)}function c2(t,e){const n=xh[e];(!n||n[t.key]!==t)&&jn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),HR(t),delete n[t.key]}function d2(t,e,n,r){let i=xh[e.name];i||(i={},xh[e.name]=i);let s=i[t.toURLString()];return s&&jn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new FR(t,a2,n,r),i[t.toURLString()]=s,s}class f2{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(UR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Yn(this._repo,Q())),this._rootInternal}_delete(){return this._rootInternal!==null&&(c2(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&jn("Cannot call "+e+" on a deleted database.")}}function h2(t=Jp(),e){const n=vc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=z1("database");r&&p2(n,...r)}return n}function p2(t,e,n,r={}){t=Ne(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&jn("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&jn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new es(es.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:H1(r.mockUserToken,t.app.options.projectId);s=new es(o)}l2(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(t){ZP(bi),ui(new Tr("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return u2(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),mn(ay,ly,t),mn(ay,ly,"esm2017")}On.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};On.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};m2();var g2="firebase",v2="10.8.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */mn(g2,v2,"app");function Fm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function mS(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const y2=mS,gS=new va("auth","Firebase",mS());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=new Qp("@firebase/auth");function _2(t,...e){Au.logLevel<=ie.WARN&&Au.warn(`Auth (${bi}): ${t}`,...e)}function Rl(t,...e){Au.logLevel<=ie.ERROR&&Au.error(`Auth (${bi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,...e){throw Um(t,...e)}function gn(t,...e){return Um(t,...e)}function w2(t,e,n){const r=Object.assign(Object.assign({},y2()),{[e]:n});return new va("auth","Firebase",r).create(e,{appName:t.name})}function Um(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return gS.create(t,...e)}function B(t,e,...n){if(!t)throw Um(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Rl(e),new Error(e)}function Fn(t,e){t||Tn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function b2(){return Vy()==="http:"||Vy()==="https:"}function Vy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b2()||MT()||"connection"in navigator)?navigator.onLine:!0}function x2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(e,n){this.shortDelay=e,this.longDelay=n,Fn(n>e,"Short delay should be less than long delay!"),this.isMobile=Kp()||G1()}get(){return S2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(t,e){Fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E2=new Ia(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Vr(t,e,n,r,i={}){return yS(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ks(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),vS.fetch()(_S(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function yS(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},C2),e);try{const i=new I2(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw nl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw nl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw nl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw nl(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw w2(t,c,u);sn(t,c)}}catch(i){if(i instanceof Gn)throw i;sn(t,"network-request-failed",{message:String(i)})}}async function Ta(t,e,n,r,i={}){const s=await Vr(t,e,n,r,i);return"mfaPendingCredential"in s&&sn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function _S(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Vm(t.config,i):`${t.config.apiScheme}://${i}`}function k2(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class I2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(gn(this.auth,"network-request-failed")),E2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function nl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=gn(t,e,r);return i.customData._tokenResponse=n,i}function $y(t){return t!==void 0&&t.enterprise!==void 0}class T2{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return k2(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function P2(t,e){return Vr(t,"GET","/v2/recaptchaConfig",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N2(t,e){return Vr(t,"POST","/v1/accounts:delete",e)}async function O2(t,e){return Vr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function R2(t,e=!1){const n=Ne(t),r=await n.getIdToken(e),i=$m(r);B(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:wo(Fd(i.auth_time)),issuedAtTime:wo(Fd(i.iat)),expirationTime:wo(Fd(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Fd(t){return Number(t)*1e3}function $m(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Rl("JWT malformed, contained fewer than 3 sections"),null;try{const i=vu(n);return i?JSON.parse(i):(Rl("Failed to decode base64 JWT payload"),null)}catch(i){return Rl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function A2(t){const e=$m(t);return B(e,"internal-error"),B(typeof e.exp<"u","internal-error"),B(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ea(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Gn&&M2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function M2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wS{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=wo(this.lastLoginAt),this.creationTime=wo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ea(t,O2(n,{idToken:r}));B(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?F2(s.providerUserInfo):[],a=j2(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wS(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function D2(t){const e=Ne(t);await Mu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function j2(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function F2(t){return t.map(e=>{var{providerId:n}=e,r=Fm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U2(t,e){const n=await yS(t,{},async()=>{const r=ks({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=_S(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",vS.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function V2(t,e){return Vr(t,"POST","/v2/accounts:revokeToken",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){B(e.idToken,"internal-error"),B(typeof e.idToken<"u","internal-error"),B(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):A2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return B(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await U2(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ta;return r&&(B(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(B(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(B(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ta,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e){B(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ti{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Fm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new L2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wS(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ea(this,this.stsTokenManager.getToken(this.auth,e));return B(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return R2(this,e)}reload(){return D2(this)}_assign(e){this!==e&&(B(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){B(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Mu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ea(this,N2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,w=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:S,isAnonymous:x,providerData:k,stsTokenManager:E}=n;B(_&&E,e,"internal-error");const C=ta.fromJSON(this.name,E);B(typeof _=="string",e,"internal-error"),Xn(d,e.name),Xn(h,e.name),B(typeof S=="boolean",e,"internal-error"),B(typeof x=="boolean",e,"internal-error"),Xn(g,e.name),Xn(v,e.name),Xn(y,e.name),Xn(w,e.name),Xn(p,e.name),Xn(m,e.name);const A=new ti({uid:_,auth:e,email:h,emailVerified:S,displayName:d,isAnonymous:x,photoURL:v,phoneNumber:g,tenantId:y,stsTokenManager:C,createdAt:p,lastLoginAt:m});return k&&Array.isArray(k)&&(A.providerData=k.map(N=>Object.assign({},N))),w&&(A._redirectEventId=w),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new ta;i.updateFromServerResponse(n);const s=new ti({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Mu(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zy=new Map;function Pn(t){Fn(t instanceof Function,"Expected a class definition");let e=zy.get(t);return e?(Fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,zy.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}bS.type="NONE";const By=bS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Al(this.userKey,i.apiKey,s),this.fullPersistenceKey=Al("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ti._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(Pn(By),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Pn(By);const o=Al(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=ti._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ts(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ts(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(CS(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(SS(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(kS(e))return"Blackberry";if(IS(e))return"Webos";if(zm(e))return"Safari";if((e.includes("chrome/")||xS(e))&&!e.includes("edge/"))return"Chrome";if(ES(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function SS(t=ot()){return/firefox\//i.test(t)}function zm(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xS(t=ot()){return/crios\//i.test(t)}function CS(t=ot()){return/iemobile/i.test(t)}function ES(t=ot()){return/android/i.test(t)}function kS(t=ot()){return/blackberry/i.test(t)}function IS(t=ot()){return/webos/i.test(t)}function Pc(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $2(t=ot()){var e;return Pc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function z2(){return LT()&&document.documentMode===10}function TS(t=ot()){return Pc(t)||ES(t)||IS(t)||kS(t)||/windows phone/i.test(t)||CS(t)}function B2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t,e=[]){let n;switch(t){case"Browser":n=Wy(ot());break;case"Worker":n=`${Wy(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H2(t,e={}){return Vr(t,"GET","/v2/passwordPolicy",Ur(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G2=6;class Y2{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:G2,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Hy(this),this.idTokenSubscription=new Hy(this),this.beforeStateQueue=new W2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=gS,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return B(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Mu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ne(e):null;return n&&B(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&B(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await H2(this),n=new Y2(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new va("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await V2(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pn(e)||this._popupRedirectResolver;B(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[Pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(B(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return B(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=PS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_2(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ci(t){return Ne(t)}class Hy{constructor(e){this.auth=e,this.observer=null,this.addObserver=WT(n=>this.observer=n)}get next(){return B(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function K2(t){Nc=t}function NS(t){return Nc.loadJS(t)}function Q2(){return Nc.recaptchaEnterpriseScript}function X2(){return Nc.gapiScript}function J2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Z2="recaptcha-enterprise",eA="NO_RECAPTCHA";class tA{constructor(e){this.type=Z2,this.auth=Ci(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{P2(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new T2(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;$y(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(eA)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&$y(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Q2();l.length!==0&&(l+=a),NS(l).then(()=>{i(a,s,o)}).catch(u=>{o(u)})}}).catch(a=>{o(a)})})}}async function Gy(t,e,n,r=!1){const i=new tA(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Eh(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Gy(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Gy(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nA(t,e){const n=vc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(_u(s,e??{}))return i;sn(i,"already-initialized")}return n.initialize({options:e})}function rA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function iA(t,e,n){const r=Ci(t);B(r._canInitEmulator,r,"emulator-config-failed"),B(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=OS(e),{host:o,port:a}=sA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||oA()}function OS(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function sA(t){const e=OS(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Yy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Yy(o)}}}function Yy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function oA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}async function aA(t,e){return Vr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lA(t,e){return Ta(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function cA(t,e){return Ta(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Bm{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new na(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new na(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eh(e,n,"signInWithPassword",lA);case"emailLink":return uA(e,{email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eh(e,r,"signUpPassword",aA);case"emailLink":return cA(e,{idToken:n,email:this._email,oobCode:this._password});default:sn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return Ta(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA="http://localhost";class hi extends Bm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new hi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Fm(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new hi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:dA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ks(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function hA(t){const e=no(ro(t)).link,n=e?no(ro(e)).deep_link_id:null,r=no(ro(t)).deep_link_id;return(r?no(ro(r)).link:null)||r||n||e||t}class Wm{constructor(e){var n,r,i,s,o,a;const l=no(ro(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=fA((i=l.mode)!==null&&i!==void 0?i:null);B(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=hA(e);try{return new Wm(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return na._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Wm.parseLink(n);return B(r,"argument-error"),na._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends RS{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Pa{constructor(){super("facebook.com")}static credential(e){return hi._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Pa{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return hi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ir.credential(n,r)}catch{return null}}}ir.GOOGLE_SIGN_IN_METHOD="google.com";ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Pa{constructor(){super("github.com")}static credential(e){return hi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return sr.credential(e.oauthAccessToken)}catch{return null}}}sr.GITHUB_SIGN_IN_METHOD="github.com";sr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or extends Pa{constructor(){super("twitter.com")}static credential(e,n){return hi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return or.credential(n,r)}catch{return null}}}or.TWITTER_SIGN_IN_METHOD="twitter.com";or.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pA(t,e){return Ta(t,"POST","/v1/accounts:signUp",Ur(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ti._fromIdTokenResponse(e,r,i),o=qy(r);return new pi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=qy(r);return new pi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function qy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu extends Gn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lu(e,n,r,i)}}function AS(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Lu._fromErrorAndOperation(t,s,e,r):s})}async function mA(t,e,n=!1){const r=await ea(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return pi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ea(t,AS(r,i,e,t),n);B(s.idToken,r,"internal-error");const o=$m(s.idToken);B(o,r,"internal-error");const{sub:a}=o;return B(t.uid===a,r,"user-mismatch"),pi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MS(t,e,n=!1){const r="signIn",i=await AS(t,r,e),s=await pi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function vA(t,e){return MS(Ci(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LS(t){const e=Ci(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function yA(t,e,n){const r=Ci(t),o=await Eh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",pA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&LS(t),l}),a=await pi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function _A(t,e,n){return vA(Ne(t),Os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&LS(t),r})}function wA(t,e,n,r){return Ne(t).onIdTokenChanged(e,n,r)}function bA(t,e,n){return Ne(t).beforeAuthStateChanged(e,n)}function SA(t,e,n,r){return Ne(t).onAuthStateChanged(e,n,r)}function xA(t){return Ne(t).signOut()}const Du="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Du,"1"),this.storage.removeItem(Du),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(){const t=ot();return zm(t)||Pc(t)}const EA=1e3,kA=10;class jS extends DS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=CA()&&B2(),this.fallbackToPolling=TS(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);z2()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,kA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jS.type="LOCAL";const IA=jS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS extends DS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}FS.type="SESSION";const US=FS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Oc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await TA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Oc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Hm("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(){return window}function NA(t){vn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(){return typeof vn().WorkerGlobalScope<"u"&&typeof vn().importScripts=="function"}async function OA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function RA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AA(){return VS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $S="firebaseLocalStorageDb",MA=1,ju="firebaseLocalStorage",zS="fbase_key";class Na{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rc(t,e){return t.transaction([ju],e?"readwrite":"readonly").objectStore(ju)}function LA(){const t=indexedDB.deleteDatabase($S);return new Na(t).toPromise()}function kh(){const t=indexedDB.open($S,MA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ju,{keyPath:zS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ju)?e(r):(r.close(),await LA(),e(await kh()))})})}async function Ky(t,e,n){const r=Rc(t,!0).put({[zS]:e,value:n});return new Na(r).toPromise()}async function DA(t,e){const n=Rc(t,!1).get(e),r=await new Na(n).toPromise();return r===void 0?null:r.value}function Qy(t,e){const n=Rc(t,!0).delete(e);return new Na(n).toPromise()}const jA=800,FA=3;class BS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await kh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return VS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Oc._getInstance(AA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OA(),!this.activeServiceWorker)return;this.sender=new PA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||RA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await kh();return await Ky(e,Du,"1"),await Qy(e,Du),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ky(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>DA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Qy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rc(i,!1).getAll();return new Na(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BS.type="LOCAL";const UA=BS;new Ia(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t,e){return e?Pn(e):(B(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm extends Bm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $A(t){return MS(t.auth,new Gm(t),t.bypassAuthState)}function zA(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),gA(n,new Gm(t),t.bypassAuthState)}async function BA(t){const{auth:e,user:n}=t;return B(n,e,"internal-error"),mA(n,new Gm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $A;case"linkViaPopup":case"linkViaRedirect":return BA;case"reauthViaPopup":case"reauthViaRedirect":return zA;default:sn(this.auth,"internal-error")}}resolve(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=new Ia(2e3,1e4);class zi extends WS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zi.currentPopupAction&&zi.currentPopupAction.cancel(),zi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return B(e,this.auth,"internal-error"),e}async onExecution(){Fn(this.filter.length===1,"Popup operations only handle one event");const e=Hm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(gn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(gn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(gn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,WA.get())};e()}}zi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HA="pendingRedirect",Ml=new Map;class GA extends WS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ml.get(this.auth._key());if(!e){try{const r=await YA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ml.set(this.auth._key(),e)}return this.bypassAuthState||Ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function YA(t,e){const n=QA(e),r=KA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qA(t,e){Ml.set(t._key(),e)}function KA(t){return Pn(t._redirectPersistence)}function QA(t){return Al(HA,t.config.apiKey,t.name)}async function XA(t,e,n=!1){const r=Ci(t),i=VA(r,e),o=await new GA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA=10*60*1e3;class ZA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!eM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!HS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(gn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=JA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xy(e))}saveEventToCache(e){this.cachedEventUids.add(Xy(e)),this.lastProcessedEventTime=Date.now()}}function Xy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function HS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function eM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return HS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tM(t,e={}){return Vr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,rM=/^https?/;async function iM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await tM(t);for(const n of e)try{if(sM(n))return}catch{}sn(t,"unauthorized-domain")}function sM(t){const e=Ch(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!rM.test(n))return!1;if(nM.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oM=new Ia(3e4,6e4);function Jy(){const t=vn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function aM(t){return new Promise((e,n)=>{var r,i,s;function o(){Jy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Jy(),n(gn(t,"network-request-failed"))},timeout:oM.get()})}if(!((i=(r=vn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=vn().gapi)===null||s===void 0)&&s.load)o();else{const a=J2("iframefcb");return vn()[a]=()=>{gapi.load?o():n(gn(t,"network-request-failed"))},NS(`${X2()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ll=null,e})}let Ll=null;function lM(t){return Ll=Ll||aM(t),Ll}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM=new Ia(5e3,15e3),cM="__/auth/iframe",dM="emulator/auth/iframe",fM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function pM(t){const e=t.config;B(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Vm(e,dM):`https://${t.config.authDomain}/${cM}`,r={apiKey:e.apiKey,appName:t.name,v:bi},i=hM.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ks(r).slice(1)}`}async function mM(t){const e=await lM(t),n=vn().gapi;return B(n,t,"internal-error"),e.open({where:document.body,url:pM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:fM,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=gn(t,"network-request-failed"),a=vn().setTimeout(()=>{s(o)},uM.get());function l(){vn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},vM=500,yM=600,_M="_blank",wM="http://localhost";class Zy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bM(t,e,n,r=vM,i=yM){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},gM),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ot().toLowerCase();n&&(a=xS(u)?_M:n),SS(u)&&(e=e||wM,l.scrollbars="yes");const c=Object.entries(l).reduce((h,[g,v])=>`${h}${g}=${v},`,"");if($2(u)&&a!=="_self")return SM(e||"",a),new Zy(null);const d=window.open(e||"",a,c);B(d,t,"popup-blocked");try{d.focus()}catch{}return new Zy(d)}function SM(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xM="__/auth/handler",CM="emulator/auth/handler",EM=encodeURIComponent("fac");async function e_(t,e,n,r,i,s){B(t.config.authDomain,t,"auth-domain-config-required"),B(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bi,eventId:i};if(e instanceof RS){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ih(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Pa){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${EM}=${encodeURIComponent(l)}`:"";return`${kM(t)}?${ks(a).slice(1)}${u}`}function kM({config:t}){return t.emulator?Vm(t,CM):`https://${t.authDomain}/${xM}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ud="webStorageSupport";class IM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=US,this._completeRedirectFn=XA,this._overrideRedirectResult=qA}async _openPopup(e,n,r,i){var s;Fn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await e_(e,n,r,Ch(),i);return bM(e,o,Hm())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await e_(e,n,r,Ch(),i);return NA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Fn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mM(e),r=new ZA(e);return n.register("authEvent",i=>(B(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ud,{type:Ud},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ud];o!==void 0&&n(!!o),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return TS()||zm()||Pc()}}const TM=IM;var t_="@firebase/auth",n_="1.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){B(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function OM(t){ui(new Tr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;B(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:PS(t)},u=new q2(r,i,s,l);return rA(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ui(new Tr("auth-internal",e=>{const n=Ci(e.getProvider("auth").getImmediate());return(r=>new PM(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),mn(t_,n_,NM(t)),mn(t_,n_,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RM=5*60,AM=W1("authIdTokenMaxAge")||RM;let r_=null;const MM=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AM)return;const i=n==null?void 0:n.token;r_!==i&&(r_=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function LM(t=Jp()){const e=vc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=nA(t,{popupRedirectResolver:TM,persistence:[UA,IA,US]}),r=W1("authTokenSyncURL");if(r){const s=MM(r);bA(n,s,()=>s(n.currentUser)),wA(n,o=>s(o))}const i=$1("auth");return i&&iA(n,`http://${i}`),n}function DM(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}K2({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=gn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DM().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});OM("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS="firebasestorage.googleapis.com",YS="storageBucket",jM=2*60*1e3,FM=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Gn{constructor(e,n,r=0){super(Vd(e),`Firebase Storage: ${n} (${Vd(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Te.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Vd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ie;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ie||(Ie={}));function Vd(t){return"storage/"+t}function Ym(){const t="An unknown error occurred, please check the error payload for server response.";return new Te(Ie.UNKNOWN,t)}function UM(t){return new Te(Ie.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function VM(t){return new Te(Ie.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function $M(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Te(Ie.UNAUTHENTICATED,t)}function zM(){return new Te(Ie.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function BM(t){return new Te(Ie.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function WM(){return new Te(Ie.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HM(){return new Te(Ie.CANCELED,"User canceled the upload/download.")}function GM(t){return new Te(Ie.INVALID_URL,"Invalid URL '"+t+"'.")}function YM(t){return new Te(Ie.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function qM(){return new Te(Ie.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+YS+"' property when initializing the app?")}function KM(){return new Te(Ie.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function QM(){return new Te(Ie.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function XM(t){return new Te(Ie.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Ih(t){return new Te(Ie.INVALID_ARGUMENT,t)}function qS(){return new Te(Ie.APP_DELETED,"The Firebase app was deleted.")}function JM(t){return new Te(Ie.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function bo(t,e){return new Te(Ie.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Gs(t){throw new Te(Ie.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Tt.makeFromUrl(e,n)}catch{return new Tt(e,"")}if(r.path==="")return r;throw YM(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),h="(/([^?#]*).*)?$",g=new RegExp(`^https?://${d}/${c}/b/${i}/o${h}`,"i"),v={bucket:1,path:3},y=n===GS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,w="([^?#]*)",p=new RegExp(`^https?://${y}/${i}/${w}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:g,indices:v,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<_.length;S++){const x=_[S],k=x.regex.exec(e);if(k){const E=k[x.indices.bucket];let C=k[x.indices.path];C||(C=""),r=new Tt(E,C),x.postModify(r);break}}if(r==null)throw GM(e);return r}}class ZM{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...w){u||(u=!0,e.apply(null,w))}function d(w){i=setTimeout(()=>{i=null,t(g,l())},w)}function h(){s&&clearTimeout(s)}function g(w,...p){if(u){h();return}if(w){h(),c.call(null,w,...p);return}if(l()||o){h(),c.call(null,w,...p);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,d(_)}let v=!1;function y(w){v||(v=!0,h(),!u&&(i!==null?(w||(a=2),clearTimeout(i),d(0)):w||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,y(!0)},n),y}function tL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nL(t){return t!==void 0}function rL(t){return typeof t=="object"&&!Array.isArray(t)}function qm(t){return typeof t=="string"||t instanceof String}function i_(t){return Km()&&t instanceof Blob}function Km(){return typeof Blob<"u"}function s_(t,e,n,r){if(r<e)throw Ih(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Ih(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function KS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ni;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ni||(ni={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,n,r,i,s,o,a,l,u,c,d,h=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,v)=>{this.resolve_=g,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new rl(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ni.NO_ERROR,l=s.getStatus();if(!a||iL(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ni.ABORT;r(!1,new rl(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new rl(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());nL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Ym();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?qS():HM();o(l)}else{const l=WM();o(l)}};this.canceled_?n(!1,new rl(!1,null,!0)):this.backoffId_=eL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&tL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class rl{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function oL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function aL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function lL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function uL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function cL(t,e,n,r,i,s,o=!0){const a=KS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return lL(u,e),oL(u,n),aL(u,s),uL(u,r),new sL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function fL(...t){const e=dL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Km())return new Blob(t);throw new Te(Ie.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function hL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pL(t){if(typeof atob>"u")throw XM("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class $d{constructor(e,n){this.data=e,this.contentType=n||null}}function mL(t,e){switch(t){case dn.RAW:return new $d(QS(e));case dn.BASE64:case dn.BASE64URL:return new $d(XS(t,e));case dn.DATA_URL:return new $d(vL(e),yL(e))}throw Ym()}function QS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function gL(t){let e;try{e=decodeURIComponent(t)}catch{throw bo(dn.DATA_URL,"Malformed data URL.")}return QS(e)}function XS(t,e){switch(t){case dn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw bo(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case dn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw bo(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=pL(e)}catch(i){throw i.message.includes("polyfill")?i:bo(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class JS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw bo(dn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=_L(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function vL(t){const e=new JS(t);return e.base64?XS(dn.BASE64,e.rest):gL(e.rest)}function yL(t){return new JS(t).contentType}function _L(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n){let r=0,i="";i_(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(i_(this.data_)){const r=this.data_,i=hL(r,e,n);return i===null?null:new ar(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ar(r,!0)}}static getBlob(...e){if(Km()){const n=e.map(r=>r instanceof ar?r.data_:r);return new ar(fL.apply(null,n))}else{const n=e.map(o=>qm(o)?mL(dn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ar(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZS(t){let e;try{e=JSON.parse(t)}catch{return null}return rL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wL(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function bL(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function ex(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SL(t,e){return e}class lt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||SL}}let il=null;function xL(t){return!qm(t)||t.length<2?t:ex(t)}function tx(){if(il)return il;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(s,o){return xL(o)}const n=new lt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new lt("size");return i.xform=r,t.push(i),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),il=t,il}function CL(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Tt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function EL(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return CL(r,t),r}function nx(t,e,n){const r=ZS(e);return r===null?null:EL(t,r,n)}function kL(t,e,n,r){const i=ZS(e);if(i===null||!qm(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,h="/b/"+o(c)+"/o/"+o(d),g=Qm(h,n,r),v=KS({alt:"media",token:u});return g+v})[0]}function IL(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class rx{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(t){if(!t)throw Ym()}function TL(t,e){function n(r,i){const s=nx(t,i,e);return ix(s!==null),s}return n}function PL(t,e){function n(r,i){const s=nx(t,i,e);return ix(s!==null),kL(s,i,t.host,t._protocol)}return n}function sx(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=zM():i=$M():n.getStatus()===402?i=VM(t.bucket):n.getStatus()===403?i=BM(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function NL(t){const e=sx(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=UM(t.path)),s.serverResponse=i.serverResponse,s}return n}function OL(t,e,n){const r=e.fullServerUrl(),i=Qm(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new rx(i,s,PL(t,n),o);return a.errorHandler=NL(e),a}function RL(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function AL(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=RL(null,e)),r}function ML(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let S=0;S<2;S++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=AL(e,r,i),c=IL(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,h=`\r
--`+l+"--",g=ar.getBlob(d,r,h);if(g===null)throw KM();const v={name:u.fullPath},y=Qm(s,t.host,t._protocol),w="POST",p=t.maxUploadRetryTime,m=new rx(y,w,TL(t,n),p);return m.urlParams=v,m.headers=o,m.body=g.uploadData(),m.errorHandler=sx(e),m}class LL{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ni.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ni.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ni.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Gs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Gs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Gs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Gs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Gs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class DL extends LL{initXhr(){this.xhr_.responseType="text"}}function ox(){return new DL}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this._service=e,n instanceof Tt?this._location=n:this._location=Tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new mi(e,n)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ex(this._location.path)}get storage(){return this._service}get parent(){const e=wL(this._location.path);if(e===null)return null;const n=new Tt(this._location.bucket,e);return new mi(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw JM(e)}}function jL(t,e,n){t._throwIfRoot("uploadBytes");const r=ML(t.storage,t._location,tx(),new ar(e,!0),n);return t.storage.makeRequestWithTokens(r,ox).then(i=>({metadata:i,ref:t}))}function FL(t){t._throwIfRoot("getDownloadURL");const e=OL(t.storage,t._location,tx());return t.storage.makeRequestWithTokens(e,ox).then(n=>{if(n===null)throw QM();return n})}function UL(t,e){const n=bL(t._location.path,e),r=new Tt(t._location.bucket,n);return new mi(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t){return/^[A-Za-z]+:\/\//.test(t)}function $L(t,e){return new mi(t,e)}function ax(t,e){if(t instanceof Xm){const n=t;if(n._bucket==null)throw qM();const r=new mi(n,n._bucket);return e!=null?ax(r,e):r}else return e!==void 0?UL(t,e):t}function zL(t,e){if(e&&VL(e)){if(t instanceof Xm)return $L(t,e);throw Ih("To use ref(service, url), the first argument must be a Storage instance.")}else return ax(t,e)}function o_(t,e){const n=e==null?void 0:e[YS];return n==null?null:Tt.makeFromBucketSpec(n,t)}function BL(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:H1(i,t.app.options.projectId))}class Xm{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=GS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=jM,this._maxUploadRetryTime=FM,this._requests=new Set,i!=null?this._bucket=Tt.makeFromBucketSpec(i,this._host):this._bucket=o_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=o_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){s_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){s_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new mi(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new ZM(qS());{const o=cL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const a_="@firebase/storage",l_="0.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx="storage";function WL(t,e,n){return t=Ne(t),jL(t,e,n)}function HL(t){return t=Ne(t),FL(t)}function GL(t,e){return t=Ne(t),zL(t,e)}function YL(t=Jp(),e){t=Ne(t);const r=vc(t,lx).getImmediate({identifier:e}),i=z1("storage");return i&&qL(r,...i),r}function qL(t,e,n,r={}){BL(t,e,n,r)}function KL(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Xm(n,r,i,e,bi)}function QL(){ui(new Tr(lx,KL,"PUBLIC").setMultipleInstances(!0)),mn(a_,l_,""),mn(a_,l_,"esm2017")}QL();const XL={apiKey:"AIzaSyAPsq4gobElVQBs3pA0MVXNzRnaPNhBewk",authDomain:"tennis-forum-12fa0.firebaseapp.com",databaseURL:"https://tennis-forum-12fa0-default-rtdb.europe-west1.firebasedatabase.app",projectId:"tennis-forum-12fa0",storageBucket:"tennis-forum-12fa0.appspot.com",messagingSenderId:"625602299697",appId:"1:625602299697:web:19c66cdb8a52b5519d9210"},Jm=X1(XL),Oa=LM(Jm),ge=h2(Jm),JL=YL(Jm),ZL=(t,e,n,r,i)=>Mm(me(ge,`users/${t}`),{username:t,firstName:e,lastName:n,uid:r,email:i,createdOn:new Date().toString(),likedPosts:{},avatarUrl:"https://static.thenounproject.com/png/989418-200.png",isAdmin:!1,isBlocked:!1}),ux=t=>Ct(jm(me(ge,"users"),Dm("uid"),pS(t))),eD=t=>Ct(jm(me(ge,"posts"),Dm("author"),pS(t))),cx=async()=>Ct(me(ge,"users")),dx=async(t,e)=>{const n=me(ge,`users/${t}`);await ka(n,e)},Ac=async t=>Ct(me(ge,`users/${t}`)),tD=async(t,e,n,r="General Discussions",i=[])=>fS(me(ge,"posts"),{author:t,title:e,content:n,createdOn:new Date().toISOString(),comments:[],topic:r,views:0,tags:i}),Mc=async(t="")=>{const e=await Ct(jm(me(ge,"posts"),Dm("createdOn")));return e.exists()?Object.keys(e.val()).map(r=>({id:r,...e.val()[r],createdOn:new Date(e.val()[r].createdOn).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),liked:e.val()[r].liked?Object.keys(e.val()[r].liked):[]})):[]},Zm=async t=>{const e=await Ct(me(ge,`posts/${t}`));return e.exists()?{id:t,...e.val(),createdOn:new Date(e.val().createdOn).toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),liked:e.val().liked?Object.keys(e.val().liked):[]}:null},fx=async(t,e,n,r,i)=>{if(!(await Ct(me(ge,`posts/${t}`))).exists())throw new Error("Post does not exist");const o={};return e&&(o[`/posts/${t}/title`]=e),n&&(o[`/posts/${t}/content`]=n),(r||r===0)&&(o[`/posts/${t}/views`]=r),i&&(o[`/posts/${t}/tags`]=i),ka(me(ge),o)},nD=async(t,e)=>{const n=await Ct(me(ge,`posts/${e}`));if(!n.exists())throw new Error("Post does not exist");if(n.val().author!==t.username&&t.isAdmin!==!0)throw new Error("Only the author can delete this post");return hS(me(ge,`posts/${e}`))},rD=(t,e)=>{const n={};return n[`/posts/${e}/liked/${t}`]=!0,n[`/users/${t}/likedPosts/${e}`]=!0,ka(me(ge),n)},iD=(t,e)=>{const n={};return n[`/posts/${e}/liked/${t}`]=null,n[`/users/${t}/likedPosts/${e}`]=null,ka(me(ge),n)};var hx={exports:{}},sD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",oD=sD,aD=oD;function px(){}function mx(){}mx.resetWarningCache=px;var lD=function(){function t(r,i,s,o,a,l){if(l!==aD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:mx,resetWarningCache:px};return n.PropTypes=n,n};hx.exports=lD();var uD=hx.exports;const R=f0(uD);function u_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?u_(Object(n),!0).forEach(function(r){Fe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Fu(t){"@babel/helpers - typeof";return Fu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fu(t)}function cD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function dD(t,e,n){return e&&c_(t.prototype,e),n&&c_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Fe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eg(t,e){return hD(t)||mD(t,e)||gx(t,e)||vD()}function Ra(t){return fD(t)||pD(t)||gx(t)||gD()}function fD(t){if(Array.isArray(t))return Th(t)}function hD(t){if(Array.isArray(t))return t}function pD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function mD(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function gx(t,e){if(t){if(typeof t=="string")return Th(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Th(t,e)}}function Th(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function gD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var d_=function(){},tg={},vx={},yx=null,_x={mark:d_,measure:d_};try{typeof window<"u"&&(tg=window),typeof document<"u"&&(vx=document),typeof MutationObserver<"u"&&(yx=MutationObserver),typeof performance<"u"&&(_x=performance)}catch{}var yD=tg.navigator||{},f_=yD.userAgent,h_=f_===void 0?"":f_,Ar=tg,fe=vx,p_=yx,sl=_x;Ar.document;var qn=!!fe.documentElement&&!!fe.head&&typeof fe.addEventListener=="function"&&typeof fe.createElement=="function",wx=~h_.indexOf("MSIE")||~h_.indexOf("Trident/"),ol,al,ll,ul,cl,Un="___FONT_AWESOME___",Ph=16,bx="fa",Sx="svg-inline--fa",gi="data-fa-i2svg",Nh="data-fa-pseudo-element",_D="data-fa-pseudo-element-pending",ng="data-prefix",rg="data-icon",m_="fontawesome-i2svg",wD="async",bD=["HTML","HEAD","STYLE","SCRIPT"],xx=function(){try{return!0}catch{return!1}}(),ce="classic",Ce="sharp",ig=[ce,Ce];function Aa(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[ce]}})}var ra=Aa((ol={},Fe(ol,ce,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),Fe(ol,Ce,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),ol)),ia=Aa((al={},Fe(al,ce,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Fe(al,Ce,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),al)),sa=Aa((ll={},Fe(ll,ce,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Fe(ll,Ce,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),ll)),SD=Aa((ul={},Fe(ul,ce,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Fe(ul,Ce,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),ul)),xD=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,Cx="fa-layers-text",CD=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,ED=Aa((cl={},Fe(cl,ce,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Fe(cl,Ce,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),cl)),Ex=[1,2,3,4,5,6,7,8,9,10],kD=Ex.concat([11,12,13,14,15,16,17,18,19,20]),ID=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Kr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},oa=new Set;Object.keys(ia[ce]).map(oa.add.bind(oa));Object.keys(ia[Ce]).map(oa.add.bind(oa));var TD=[].concat(ig,Ra(oa),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Kr.GROUP,Kr.SWAP_OPACITY,Kr.PRIMARY,Kr.SECONDARY]).concat(Ex.map(function(t){return"".concat(t,"x")})).concat(kD.map(function(t){return"w-".concat(t)})),So=Ar.FontAwesomeConfig||{};function PD(t){var e=fe.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function ND(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(fe&&typeof fe.querySelector=="function"){var OD=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];OD.forEach(function(t){var e=eg(t,2),n=e[0],r=e[1],i=ND(PD(n));i!=null&&(So[r]=i)})}var kx={styleDefault:"solid",familyDefault:"classic",cssPrefix:bx,replacementClass:Sx,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};So.familyPrefix&&(So.cssPrefix=So.familyPrefix);var ys=M(M({},kx),So);ys.autoReplaceSvg||(ys.observeMutations=!1);var D={};Object.keys(kx).forEach(function(t){Object.defineProperty(D,t,{enumerable:!0,set:function(n){ys[t]=n,xo.forEach(function(r){return r(D)})},get:function(){return ys[t]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(e){ys.cssPrefix=e,xo.forEach(function(n){return n(D)})},get:function(){return ys.cssPrefix}});Ar.FontAwesomeConfig=D;var xo=[];function RD(t){return xo.push(t),function(){xo.splice(xo.indexOf(t),1)}}var Jn=Ph,fn={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function AD(t){if(!(!t||!qn)){var e=fe.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=fe.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return fe.head.insertBefore(e,r),t}}var MD="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function aa(){for(var t=12,e="";t-- >0;)e+=MD[Math.random()*62|0];return e}function Rs(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function sg(t){return t.classList?Rs(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Ix(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function LD(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Ix(t[n]),'" ')},"").trim()}function Lc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function og(t){return t.size!==fn.size||t.x!==fn.x||t.y!==fn.y||t.rotate!==fn.rotate||t.flipX||t.flipY}function DD(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function jD(t){var e=t.transform,n=t.width,r=n===void 0?Ph:n,i=t.height,s=i===void 0?Ph:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&wx?l+="translate(".concat(e.x/Jn-r/2,"em, ").concat(e.y/Jn-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/Jn,"em), calc(-50% + ").concat(e.y/Jn,"em)) "):l+="translate(".concat(e.x/Jn,"em, ").concat(e.y/Jn,"em) "),l+="scale(".concat(e.size/Jn*(e.flipX?-1:1),", ").concat(e.size/Jn*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var FD=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Tx(){var t=bx,e=Sx,n=D.cssPrefix,r=D.replacementClass,i=FD;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var g_=!1;function zd(){D.autoAddCss&&!g_&&(AD(Tx()),g_=!0)}var UD={mixout:function(){return{dom:{css:Tx,insertCss:zd}}},hooks:function(){return{beforeDOMElementCreation:function(){zd()},beforeI2svg:function(){zd()}}}},Vn=Ar||{};Vn[Un]||(Vn[Un]={});Vn[Un].styles||(Vn[Un].styles={});Vn[Un].hooks||(Vn[Un].hooks={});Vn[Un].shims||(Vn[Un].shims=[]);var Jt=Vn[Un],Px=[],VD=function t(){fe.removeEventListener("DOMContentLoaded",t),Uu=1,Px.map(function(e){return e()})},Uu=!1;qn&&(Uu=(fe.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(fe.readyState),Uu||fe.addEventListener("DOMContentLoaded",VD));function $D(t){qn&&(Uu?setTimeout(t,0):Px.push(t))}function Ma(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Ix(t):"<".concat(e," ").concat(LD(r),">").concat(s.map(Ma).join(""),"</").concat(e,">")}function v_(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var zD=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Bd=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?zD(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function BD(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Oh(t){var e=BD(t);return e.length===1?e[0].toString(16):null}function WD(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function y_(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Rh(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=y_(e);typeof Jt.hooks.addPack=="function"&&!i?Jt.hooks.addPack(t,y_(e)):Jt.styles[t]=M(M({},Jt.styles[t]||{}),s),t==="fas"&&Rh("fa",e)}var dl,fl,hl,Bi=Jt.styles,HD=Jt.shims,GD=(dl={},Fe(dl,ce,Object.values(sa[ce])),Fe(dl,Ce,Object.values(sa[Ce])),dl),ag=null,Nx={},Ox={},Rx={},Ax={},Mx={},YD=(fl={},Fe(fl,ce,Object.keys(ra[ce])),Fe(fl,Ce,Object.keys(ra[Ce])),fl);function qD(t){return~TD.indexOf(t)}function KD(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!qD(i)?i:null}var Lx=function(){var e=function(s){return Bd(Bi,function(o,a,l){return o[l]=Bd(a,s,{}),o},{})};Nx=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Ox=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Mx=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Bi||D.autoFetchSvg,r=Bd(HD,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Rx=r.names,Ax=r.unicodes,ag=Dc(D.styleDefault,{family:D.familyDefault})};RD(function(t){ag=Dc(t.styleDefault,{family:D.familyDefault})});Lx();function lg(t,e){return(Nx[t]||{})[e]}function QD(t,e){return(Ox[t]||{})[e]}function Qr(t,e){return(Mx[t]||{})[e]}function Dx(t){return Rx[t]||{prefix:null,iconName:null}}function XD(t){var e=Ax[t],n=lg("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Mr(){return ag}var ug=function(){return{prefix:null,iconName:null,rest:[]}};function Dc(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?ce:n,i=ra[r][t],s=ia[r][t]||ia[r][i],o=t in Jt.styles?t:null;return s||o||null}var __=(hl={},Fe(hl,ce,Object.keys(sa[ce])),Fe(hl,Ce,Object.keys(sa[Ce])),hl);function jc(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},Fe(e,ce,"".concat(D.cssPrefix,"-").concat(ce)),Fe(e,Ce,"".concat(D.cssPrefix,"-").concat(Ce)),e),o=null,a=ce;(t.includes(s[ce])||t.some(function(u){return __[ce].includes(u)}))&&(a=ce),(t.includes(s[Ce])||t.some(function(u){return __[Ce].includes(u)}))&&(a=Ce);var l=t.reduce(function(u,c){var d=KD(D.cssPrefix,c);if(Bi[c]?(c=GD[a].includes(c)?SD[a][c]:c,o=c,u.prefix=c):YD[a].indexOf(c)>-1?(o=c,u.prefix=Dc(c,{family:a})):d?u.iconName=d:c!==D.replacementClass&&c!==s[ce]&&c!==s[Ce]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var h=o==="fa"?Dx(u.iconName):{},g=Qr(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||g||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Bi.far&&Bi.fas&&!D.autoFetchSvg&&(u.prefix="fas")}return u},ug());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ce&&(Bi.fass||D.autoFetchSvg)&&(l.prefix="fass",l.iconName=Qr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Mr()||"fas"),l}var JD=function(){function t(){cD(this,t),this.definitions={}}return dD(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=M(M({},n.definitions[a]||{}),o[a]),Rh(a,o[a]);var l=sa[ce][a];l&&Rh(l,o[a]),Lx()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),w_=[],Wi={},rs={},ZD=Object.keys(rs);function ej(t,e){var n=e.mixoutsTo;return w_=t,Wi={},Object.keys(rs).forEach(function(r){ZD.indexOf(r)===-1&&delete rs[r]}),w_.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Fu(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Wi[o]||(Wi[o]=[]),Wi[o].push(s[o])})}r.provides&&r.provides(rs)}),n}function Ah(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Wi[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function vi(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Wi[t]||[];i.forEach(function(s){s.apply(null,n)})}function $n(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return rs[t]?rs[t].apply(null,e):void 0}function Mh(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Mr();if(e)return e=Qr(n,e)||e,v_(jx.definitions,n,e)||v_(Jt.styles,n,e)}var jx=new JD,tj=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,vi("noAuto")},nj={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return qn?(vi("beforeI2svg",e),$n("pseudoElements2svg",e),$n("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,$D(function(){ij({autoReplaceSvgRoot:n}),vi("watch",e)})}},rj={icon:function(e){if(e===null)return null;if(Fu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Qr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Dc(e[0]);return{prefix:r,iconName:Qr(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(D.cssPrefix,"-"))>-1||e.match(xD))){var i=jc(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Mr(),iconName:Qr(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Mr();return{prefix:s,iconName:Qr(s,e)||e}}}},Mt={noAuto:tj,config:D,dom:nj,parse:rj,library:jx,findIconDefinition:Mh,toHtml:Ma},ij=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?fe:n;(Object.keys(Jt.styles).length>0||D.autoFetchSvg)&&qn&&D.autoReplaceSvg&&Mt.dom.i2svg({node:r})};function Fc(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ma(r)})}}),Object.defineProperty(t,"node",{get:function(){if(qn){var r=fe.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function sj(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(og(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Lc(M(M({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function oj(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(D.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:o}),children:r}]}]}function cg(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,h=t.watchable,g=h===void 0?!1:h,v=r.found?r:n,y=v.width,w=v.height,p=i==="fak",m=[D.replacementClass,s?"".concat(D.cssPrefix,"-").concat(s):""].filter(function(A){return d.classes.indexOf(A)===-1}).filter(function(A){return A!==""||!!A}).concat(d.classes).join(" "),_={children:[],attributes:M(M({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:m,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(y," ").concat(w)})},S=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(y/w*16*.0625,"em")}:{};g&&(_.attributes[gi]=""),l&&(_.children.push({tag:"title",attributes:{id:_.attributes["aria-labelledby"]||"title-".concat(c||aa())},children:[l]}),delete _.attributes.title);var x=M(M({},_),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:M(M({},S),d.styles)}),k=r.found&&n.found?$n("generateAbstractMask",x)||{children:[],attributes:{}}:$n("generateAbstractIcon",x)||{children:[],attributes:{}},E=k.children,C=k.attributes;return x.children=E,x.attributes=C,a?oj(x):sj(x)}function b_(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=M(M(M({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[gi]="");var c=M({},o.styles);og(i)&&(c.transform=jD({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Lc(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function aj(t){var e=t.content,n=t.title,r=t.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Lc(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Wd=Jt.styles;function Lh(t){var e=t[0],n=t[1],r=t.slice(4),i=eg(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(Kr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Kr.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(Kr.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var lj={found:!1,width:512,height:512};function uj(t,e){!xx&&!D.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Dh(t,e){var n=e;return e==="fa"&&D.styleDefault!==null&&(e=Mr()),new Promise(function(r,i){if($n("missingIconAbstract"),n==="fa"){var s=Dx(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Wd[e]&&Wd[e][t]){var o=Wd[e][t];return r(Lh(o))}uj(t,e),r(M(M({},lj),{},{icon:D.showMissingIcons&&t?$n("missingIconAbstract")||{}:{}}))})}var S_=function(){},jh=D.measurePerformance&&sl&&sl.mark&&sl.measure?sl:{mark:S_,measure:S_},io='FA "6.5.1"',cj=function(e){return jh.mark("".concat(io," ").concat(e," begins")),function(){return Fx(e)}},Fx=function(e){jh.mark("".concat(io," ").concat(e," ends")),jh.measure("".concat(io," ").concat(e),"".concat(io," ").concat(e," begins"),"".concat(io," ").concat(e," ends"))},dg={begin:cj,end:Fx},Dl=function(){};function x_(t){var e=t.getAttribute?t.getAttribute(gi):null;return typeof e=="string"}function dj(t){var e=t.getAttribute?t.getAttribute(ng):null,n=t.getAttribute?t.getAttribute(rg):null;return e&&n}function fj(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(D.replacementClass)}function hj(){if(D.autoReplaceSvg===!0)return jl.replace;var t=jl[D.autoReplaceSvg];return t||jl.replace}function pj(t){return fe.createElementNS("http://www.w3.org/2000/svg",t)}function mj(t){return fe.createElement(t)}function Ux(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?pj:mj:n;if(typeof t=="string")return fe.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(Ux(o,{ceFn:r}))}),i}function gj(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var jl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(Ux(i),n)}),n.getAttribute(gi)===null&&D.keepOriginalSource){var r=fe.createComment(gj(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~sg(n).indexOf(D.replacementClass))return jl.replace(e);var i=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===D.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Ma(a)}).join(`
`);n.setAttribute(gi,""),n.innerHTML=o}};function C_(t){t()}function Vx(t,e){var n=typeof e=="function"?e:Dl;if(t.length===0)n();else{var r=C_;D.mutateApproach===wD&&(r=Ar.requestAnimationFrame||C_),r(function(){var i=hj(),s=dg.begin("mutate");t.map(i),s(),n()})}}var fg=!1;function $x(){fg=!0}function Fh(){fg=!1}var Vu=null;function E_(t){if(p_&&D.observeMutations){var e=t.treeCallback,n=e===void 0?Dl:e,r=t.nodeCallback,i=r===void 0?Dl:r,s=t.pseudoElementsCallback,o=s===void 0?Dl:s,a=t.observeMutationsRoot,l=a===void 0?fe:a;Vu=new p_(function(u){if(!fg){var c=Mr();Rs(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!x_(d.addedNodes[0])&&(D.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&D.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&x_(d.target)&&~ID.indexOf(d.attributeName))if(d.attributeName==="class"&&dj(d.target)){var h=jc(sg(d.target)),g=h.prefix,v=h.iconName;d.target.setAttribute(ng,g||c),v&&d.target.setAttribute(rg,v)}else fj(d.target)&&i(d.target)})}}),qn&&Vu.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vj(){Vu&&Vu.disconnect()}function yj(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function _j(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=jc(sg(t));return i.prefix||(i.prefix=Mr()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=QD(i.prefix,t.innerText)||lg(i.prefix,Oh(t.innerText))),!i.iconName&&D.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function wj(t){var e=Rs(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return D.autoA11y&&(n?e["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||aa()):(e["aria-hidden"]="true",e.focusable="false")),e}function bj(){return{iconName:null,title:null,titleId:null,prefix:null,transform:fn,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function k_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=_j(t),r=n.iconName,i=n.prefix,s=n.rest,o=wj(t),a=Ah("parseNodeAttributes",{},t),l=e.styleParser?yj(t):[];return M({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:fn,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var Sj=Jt.styles;function zx(t){var e=D.autoReplaceSvg==="nest"?k_(t,{styleParser:!1}):k_(t);return~e.extra.classes.indexOf(Cx)?$n("generateLayersText",t,e):$n("generateSvgReplacementMutation",t,e)}var Lr=new Set;ig.map(function(t){Lr.add("fa-".concat(t))});Object.keys(ra[ce]).map(Lr.add.bind(Lr));Object.keys(ra[Ce]).map(Lr.add.bind(Lr));Lr=Ra(Lr);function I_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!qn)return Promise.resolve();var n=fe.documentElement.classList,r=function(d){return n.add("".concat(m_,"-").concat(d))},i=function(d){return n.remove("".concat(m_,"-").concat(d))},s=D.autoFetchSvg?Lr:ig.map(function(c){return"fa-".concat(c)}).concat(Object.keys(Sj));s.includes("fa")||s.push("fa");var o=[".".concat(Cx,":not([").concat(gi,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(gi,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=Rs(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=dg.begin("onTree"),u=a.reduce(function(c,d){try{var h=zx(d);h&&c.push(h)}catch(g){xx||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){Vx(h,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),d(h)})})}function xj(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;zx(t).then(function(n){n&&Vx([n],e)})}function Cj(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Mh(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Mh(i||{})),t(r,M(M({},n),{},{mask:i}))}}var Ej=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?fn:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,g=n.titleId,v=g===void 0?null:g,y=n.classes,w=y===void 0?[]:y,p=n.attributes,m=p===void 0?{}:p,_=n.styles,S=_===void 0?{}:_;if(e){var x=e.prefix,k=e.iconName,E=e.icon;return Fc(M({type:"icon"},e),function(){return vi("beforeDOMElementCreation",{iconDefinition:e,params:n}),D.autoA11y&&(h?m["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(v||aa()):(m["aria-hidden"]="true",m.focusable="false")),cg({icons:{main:Lh(E),mask:l?Lh(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:M(M({},fn),i),symbol:o,title:h,maskId:c,titleId:v,extra:{attributes:m,styles:S,classes:w}})})}},kj={mixout:function(){return{icon:Cj(Ej)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=I_,n.nodeCallback=xj,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?fe:r,s=n.callback,o=s===void 0?function(){}:s;return I_(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,h=r.extra;return new Promise(function(g,v){Promise.all([Dh(i,a),c.iconName?Dh(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(y){var w=eg(y,2),p=w[0],m=w[1];g([n,cg({icons:{main:p,mask:m},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:h,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Lc(a);l.length>0&&(i.style=l);var u;return og(o)&&(u=$n("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},Ij={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return Fc({type:"layer"},function(){vi("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(Ra(s)).join(" ")},children:o}]})}}}},Tj={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return Fc({type:"counter",content:n},function(){return vi("beforeDOMElementCreation",{content:n,params:r}),aj({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(Ra(a))}})})}}}},Pj={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?fn:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,h=r.styles,g=h===void 0?{}:h;return Fc({type:"text",content:n},function(){return vi("beforeDOMElementCreation",{content:n,params:r}),b_({content:n,transform:M(M({},fn),s),title:a,extra:{attributes:d,styles:g,classes:["".concat(D.cssPrefix,"-layers-text")].concat(Ra(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(wx){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return D.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,b_({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},Nj=new RegExp('"',"ug"),T_=[1105920,1112319];function Oj(t){var e=t.replace(Nj,""),n=WD(e,0),r=n>=T_[0]&&n<=T_[1],i=e.length===2?e[0]===e[1]:!1;return{value:Oh(i?e[0]:e),isSecondary:r||i}}function P_(t,e){var n="".concat(_D).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=Rs(t.children),o=s.filter(function(E){return E.getAttribute(Nh)===e})[0],a=Ar.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(CD),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?Ce:ce,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?ia[h][l[2].toLowerCase()]:ED[h][u],v=Oj(d),y=v.value,w=v.isSecondary,p=l[0].startsWith("FontAwesome"),m=lg(g,y),_=m;if(p){var S=XD(y);S.iconName&&S.prefix&&(m=S.iconName,g=S.prefix)}if(m&&!w&&(!o||o.getAttribute(ng)!==g||o.getAttribute(rg)!==_)){t.setAttribute(n,_),o&&t.removeChild(o);var x=bj(),k=x.extra;k.attributes[Nh]=e,Dh(m,g).then(function(E){var C=cg(M(M({},x),{},{icons:{main:E,mask:ug()},prefix:g,iconName:_,extra:k,watchable:!0})),A=fe.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(A,t.firstChild):t.appendChild(A),A.outerHTML=C.map(function(N){return Ma(N)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Rj(t){return Promise.all([P_(t,"::before"),P_(t,"::after")])}function Aj(t){return t.parentNode!==document.head&&!~bD.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Nh)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function N_(t){if(qn)return new Promise(function(e,n){var r=Rs(t.querySelectorAll("*")).filter(Aj).map(Rj),i=dg.begin("searchPseudoElements");$x(),Promise.all(r).then(function(){i(),Fh(),e()}).catch(function(){i(),Fh(),n()})})}var Mj={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=N_,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?fe:r;D.searchPseudoElements&&N_(i)}}},O_=!1,Lj={mixout:function(){return{dom:{unwatch:function(){$x(),O_=!0}}}},hooks:function(){return{bootstrap:function(){E_(Ah("mutationObserverCallbacks",{}))},noAuto:function(){vj()},watch:function(n){var r=n.observeMutationsRoot;O_?Fh():E_(Ah("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},R_=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},Dj={mixout:function(){return{parse:{transform:function(n){return R_(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=R_(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:d,path:h};return{tag:"g",attributes:M({},g.outer),children:[{tag:"g",attributes:M({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),g.path)}]}]}}}},Hd={x:0,y:0,width:"100%",height:"100%"};function A_(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function jj(t){return t.tag==="g"?t.children:[t]}var Fj={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?jc(i.split(" ").map(function(o){return o.trim()})):ug();return s.prefix||(s.prefix=Mr()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,h=o.icon,g=DD({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:M(M({},Hd),{},{fill:"white"})},y=c.children?{children:c.children.map(A_)}:{},w={tag:"g",attributes:M({},g.inner),children:[A_(M({tag:c.tag,attributes:M(M({},c.attributes),g.path)},y))]},p={tag:"g",attributes:M({},g.outer),children:[w]},m="mask-".concat(a||aa()),_="clip-".concat(a||aa()),S={tag:"mask",attributes:M(M({},Hd),{},{id:m,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:_},children:jj(h)},S]};return r.push(x,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(_,")"),mask:"url(#".concat(m,")")},Hd)}),{children:r,attributes:i}}}},Uj={provides:function(e){var n=!1;Ar.matchMedia&&(n=Ar.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=M(M({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Vj={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},$j=[UD,kj,Ij,Tj,Pj,Mj,Lj,Dj,Fj,Uj,Vj];ej($j,{mixoutsTo:Mt});Mt.noAuto;Mt.config;Mt.library;Mt.dom;var Uh=Mt.parse;Mt.findIconDefinition;Mt.toHtml;var zj=Mt.icon;Mt.layer;Mt.text;Mt.counter;function M_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function fr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?M_(Object(n),!0).forEach(function(r){Hi(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):M_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $u(t){"@babel/helpers - typeof";return $u=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$u(t)}function Hi(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Bj(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Wj(t,e){if(t==null)return{};var n=Bj(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}function Vh(t){return Hj(t)||Gj(t)||Yj(t)||qj()}function Hj(t){if(Array.isArray(t))return $h(t)}function Gj(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Yj(t,e){if(t){if(typeof t=="string")return $h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $h(t,e)}}function $h(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function qj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kj(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,h=t.fixedWidth,g=t.inverse,v=t.border,y=t.listItem,w=t.flip,p=t.size,m=t.rotation,_=t.pull,S=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":g,"fa-border":v,"fa-li":y,"fa-flip":w===!0,"fa-flip-horizontal":w==="horizontal"||w==="both","fa-flip-vertical":w==="vertical"||w==="both"},Hi(e,"fa-".concat(p),typeof p<"u"&&p!==null),Hi(e,"fa-rotate-".concat(m),typeof m<"u"&&m!==null&&m!==0),Hi(e,"fa-pull-".concat(_),typeof _<"u"&&_!==null),Hi(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(S).map(function(x){return S[x]?x:null}).filter(function(x){return x})}function Qj(t){return t=t-0,t===t}function Bx(t){return Qj(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Xj=["style"];function Jj(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Zj(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Bx(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[Jj(i)]=s:e[i]=s,e},{})}function Wx(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Wx(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=Zj(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Bx(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=Wj(n,Xj);return i.attrs.style=fr(fr({},i.attrs.style),o),t.apply(void 0,[e.tag,fr(fr({},i.attrs),a)].concat(Vh(r)))}var Hx=!1;try{Hx=!0}catch{}function e4(){if(!Hx&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function L_(t){if(t&&$u(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Uh.icon)return Uh.icon(t);if(t===null)return null;if(t&&$u(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Gd(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Hi({},t,e):{}}var Ke=Xu.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=L_(n),c=Gd("classes",[].concat(Vh(Kj(t)),Vh(s.split(" ")))),d=Gd("transform",typeof t.transform=="string"?Uh.transform(t.transform):t.transform),h=Gd("mask",L_(r)),g=zj(u,fr(fr(fr(fr({},c),d),h),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return e4("Could not find icon",u),null;var v=g.abstract,y={ref:e};return Object.keys(t).forEach(function(w){Ke.defaultProps.hasOwnProperty(w)||(y[w]=t[w])}),t4(v[0],y)});Ke.displayName="FontAwesomeIcon";Ke.propTypes={beat:R.bool,border:R.bool,beatFade:R.bool,bounce:R.bool,className:R.string,fade:R.bool,flash:R.bool,mask:R.oneOfType([R.object,R.array,R.string]),maskId:R.string,fixedWidth:R.bool,inverse:R.bool,flip:R.oneOf([!0,!1,"horizontal","vertical","both"]),icon:R.oneOfType([R.object,R.array,R.string]),listItem:R.bool,pull:R.oneOf(["right","left"]),pulse:R.bool,rotation:R.oneOf([0,90,180,270]),shake:R.bool,size:R.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:R.bool,spinPulse:R.bool,spinReverse:R.bool,symbol:R.oneOfType([R.bool,R.string]),title:R.string,titleId:R.string,transform:R.oneOfType([R.string,R.object]),swapOpacity:R.bool};Ke.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var t4=Wx.bind(null,Xu.createElement),n4={prefix:"fas",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]},r4=n4,hg={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},pg={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},i4={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},s4=i4,o4={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]},mg={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"]},a4={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},l4=a4;const gg=({post:t})=>{var u,c;const[e,n]=b.useState(null),[r,i]=b.useState(t),[s,o]=b.useState(0),a=Ht();b.useEffect(()=>{r&&r.comments?o(Object.keys(r.comments).length):o(0)},[r]),b.useEffect(()=>{Zm(t.id).then(d=>i(d))},[t.id]),b.useEffect(()=>{Ac(t.author).then(d=>n(d.val()))},[t]);const l=async()=>{if(r){const d=(r.views||0)+1,h={...r,views:d};i(h),await fx(t.id,t.title,t.content,d)}a(`/posts/${t.id}`)};return f.jsx("div",{className:"flex flex-col md:flex-row justify-center items-center h-auto mb-4",children:f.jsx("div",{className:"border border-amber-950 rounded-lg w-full md:w-3/4 shadow-lg shadow-2xl transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-2xl",children:f.jsxs("div",{className:"card-normal cursor-pointer flex flex-col md:flex-row",onClick:l,children:[f.jsx("div",{className:"w-full md:w-1/4",children:f.jsx("div",{className:"avatar ml-12 mb-4 mt-4",children:f.jsx("div",{className:"w-36 h-36 btn btn-ghost btn-circle avatar",children:f.jsx("img",{src:e==null?void 0:e.avatarUrl})})})}),f.jsxs("div",{className:"w-full md:w-3/4",children:[f.jsx("div",{className:"title mt-3",children:f.jsx("h1",{className:"text-start",children:t.title})}),f.jsx("div",{className:"mt-10",children:(u=r.tags)==null?void 0:u.map((d,h)=>f.jsx("button",{className:"btn btn-xs mr-1",children:d},h))}),f.jsxs("div",{className:"postInfo flex flex-col md:flex-row justify-between",children:[f.jsx("div",{className:"user-info text-sm mt-5",children:f.jsxs("div",{children:[f.jsx("p",{children:`Posted by: ${t.author}`}),f.jsx("p",{children:`Posted on: ${t.createdOn}`})]})}),f.jsxs("div",{className:"w-full md:w-1/4 flex flex-col mr-6",children:[f.jsx("div",{className:"flex-grow"}),f.jsx("div",{className:"flex-grow"}),f.jsxs("div",{className:"flex mb-1 justify-between",children:[f.jsxs("div",{className:"views flex flex-row mr-5",children:[f.jsx("span",{className:"mr-2",children:r==null?void 0:r.views}),f.jsx("div",{children:f.jsx(Ke,{icon:pg})})]}),f.jsxs("div",{className:"views flex flex-row mx-5",children:[f.jsx("span",{className:"mr-2",children:(c=t.liked)==null?void 0:c.length}),f.jsx("div",{children:f.jsx(Ke,{icon:hg})})]}),f.jsxs("div",{className:"views flex flex-row ml-5 ",children:[f.jsx("span",{className:"mr-2",children:s}),f.jsx("div",{children:f.jsx(Ke,{icon:mg})})]})]})]})]})]})]})})})};gg.propTypes={post:R.shape({id:R.string,title:R.string,content:R.string,createdOn:R.string,author:R.string,liked:R.array}),togglePostLike:R.func};const u4=async(t,e,n)=>{if(!(await Ct(me(ge,`posts/${t}`))).exists())throw new Error("Post does not exist");const i={author:e.username,authorId:e.uid,content:n,createdOn:new Date().toString()};return fS(me(ge,`posts/${t}/comments`),i)},Yd=async t=>{const e=await Ct(me(ge,`posts/${t}/comments`)),n=e.val();return e.exists()?n:[]},c4=async(t,e,n)=>{if(!(await Ct(me(ge,`posts/${t}/comments/${e}`))).exists())throw new Error("Comment does not exist");return ka(me(ge,`posts/${t}/comments/${e}`),{content:n})},d4=async(t,e)=>{if(!(await Ct(me(ge,`posts/${t}/comments/${e}`))).exists())throw new Error("Comment does not exist");return hS(me(ge,`posts/${t}/comments/${e}`))},f4=async()=>{const t=await Ct(me(ge,"posts")),e=t.val();return t.exists()?Object.values(e).reduce((r,i)=>{const s=i.comments?Object.values(i.comments).length:0;return r+s},0):0},D_=async t=>{const e=await Ct(me(ge,`posts/${t}/comments`)),n=e.val();return e.exists()?Object.values(n).length:0},h4=t=>{const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],n=t.getDate(),r=t.getMonth(),i=t.getFullYear();return`${e[r]}/${n<10?"0":""}${n}/${i}`},p4=()=>{const[t,e]=b.useState([]),[n,r]=b.useState(0),[i,s]=b.useState("mostViews"),[o,a]=b.useState([]);b.useEffect(()=>{Mc().then(e)},[]),b.useEffect(()=>{f4().then(a)},[]),b.useEffect(()=>{cx().then(u=>{r(Object.keys(u.val()).length)})},[]);const l=u=>{let c;switch(i){case"mostCommented":c=[...u].sort((d,h)=>(h.comments?Object.values(h.comments).length:0)-(d.comments?Object.values(d.comments).length:0));break;case"mostViews":c=[...u].sort((d,h)=>(h.views?h.views:0)-(d.views?d.views:0));break;default:c=[...u];break}return c.slice(0,10)};return f.jsxs("div",{className:"posts w-auto w-full  mb-5 justify-center",children:[f.jsxs("div",{className:"stats shadow shadow-2xl flex mb-10 w-2/4 mx-auto border border-amber-950",children:[f.jsxs("div",{className:"stat",children:[f.jsx("div",{className:"stat-figure text-secondary",children:f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})}),f.jsx("div",{className:"stat-title",children:"Posts"}),f.jsx("div",{className:"stat-value",children:t.length}),f.jsx("div",{className:"stat-desc",children:`Feb/08/2024 - ${h4(new Date)}`})]}),f.jsxs("div",{className:"stat",children:[f.jsx("div",{className:"stat-figure text-secondary",children:f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"})})}),f.jsx("div",{className:"stat-title",children:"All comments"}),f.jsx("div",{className:"stat-value",children:o}),f.jsx("div",{className:"stat-desc",children:"↘︎ 90 (14%)"})]}),f.jsxs("div",{className:"stat",children:[f.jsx("div",{className:"stat-figure text-secondary",children:f.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"inline-block w-8 h-8 stroke-current",children:f.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"})})}),f.jsx("div",{className:"stat-title",children:"Users"}),f.jsx("div",{className:"stat-value",children:n}),f.jsx("div",{className:"stat-desc",children:"↗︎ 400 (22%)"})]})]}),f.jsxs("div",{className:"all-posts",children:[f.jsxs("div",{className:"flex mb-5 w-3/4 mx-auto",children:[f.jsx("div",{onClick:()=>s("mostViews"),className:"cursor-pointer grid h-20 flex-grow card bg-base-300 rounded-box place-items-center",children:"TOP 10 MOST POPULAR"}),f.jsx("div",{className:"divider divider-horizontal",children:"OR"}),f.jsx("div",{onClick:()=>s("mostCommented"),className:"cursor-pointer grid h-20 flex-grow card bg-base-300 rounded-box place-items-center",children:"TOP 10 MOST COMMENTED"})]}),l(t).map(u=>f.jsx(gg,{post:u},u.id))]})]})},_n=b.createContext({user:null,userData:null,setContext:()=>{}}),m4=(t,e)=>yA(Oa,t,e),g4=(t,e)=>_A(Oa,t,e),v4=()=>xA(Oa),y4=()=>{const{setContext:t}=b.useContext(_n),[e,n]=b.useState({username:"",firstName:"",lastName:"",email:"",password:""}),r=Ht(),i=o=>a=>{n({...e,[o]:a.target.value})},s=async()=>{if(e.username.length<4||e.username.length>42){alert("Username must be between 4 and 42 characters long.");return}if(e.firstName.length<4||e.firstName.length>32){alert("Username must be between 4 and 42 characters long.");return}if(e.lastName.length<4||e.lastName.length>32){alert("Username must be between 4 and 42 characters long.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)){alert("Please enter a valid email.");return}if(!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/.test(e.password)){alert("Password must be at least 8 characters long, contain at least one letter, one number and one special character.");return}try{const l=await Ac(e.username);if(l.exists()){alert("Username already in existence. Please choose another one.");return}const u=await m4(e.email,e.password);await ZL(e.username,e.firstName,e.lastName,u.user.uid,e.email),t({user:l,userData:null}),r("/")}catch(l){l.message==="Firebase: Error (auth/email-already-in-use)."&&alert("Email already in use")}};return f.jsx("div",{className:"relative w-full flex flex-col justify-center h-screen overflow-hidden",children:f.jsxs("div",{className:"w-full p-6 m-auto bg-gray border border-amber-950 rounded-md shadow-2xl shad ring-2 ring-white lg:max-w-xl",children:[f.jsx("h1",{className:"text-3xl font-semibold text-center text-gray-700",children:"Sign Up"}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"username",children:"Username: "}),f.jsx("input",{className:"w-full input input-bordered",value:e.username,onChange:i("username"),type:"text",name:"username",id:"username"})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"firstName",children:"First Name: "}),f.jsx("input",{className:"w-full input input-bordered",value:e.firstName,onChange:i("firstName"),type:"text",name:"firstName",id:"firstName"}),f.jsx("br",{})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"lastName",children:"Last Name: "}),f.jsx("input",{className:"w-full input input-bordered",value:e.lastName,onChange:i("lastName"),type:"text",name:"lastName",id:"lastName"}),f.jsx("br",{})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"email",children:"Email: "}),f.jsx("input",{className:"w-full input input-bordered",value:e.email,onChange:i("email"),type:"text",name:"email",id:"email"}),f.jsx("br",{})]}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"password",children:"Password: "}),f.jsx("input",{className:"w-full input input-bordered",value:e.password,onChange:i("password"),type:"password",name:"password",id:"password"})]}),f.jsx("br",{}),f.jsx("div",{children:f.jsx("button",{className:"btn btn-ghost btn-circle avatar bg-base-200 w-full",onClick:s,type:"primary",children:"Register"})}),f.jsx("br",{}),f.jsx("span",{className:"mr-2",children:"Already have an account?"}),f.jsx(ut,{to:"/login",className:"text-blue-600 hover:text-blue-800 hover:underline",children:"Log in"})]})})},_4=()=>{var l;const{user:t,setContext:e}=b.useContext(_n),[n,r]=b.useState({email:"",password:""}),i=Ht(),s=Hn(),o=u=>c=>{r({...n,[u]:c.target.value})};b.useEffect(()=>{var u;t&&i(((u=s.state)==null?void 0:u.from.pathname)||"/")},[t,(l=s.state)==null?void 0:l.from.pathname,i]);const a=async()=>{try{const u=await g4(n.email,n.password);e({user:u.user,userData:null})}catch{alert("Wrong username or password")}};return f.jsx("div",{className:"hero min-h-screen ",children:f.jsxs("div",{className:"hero-content flex-col lg:flex-row-reverse",children:[f.jsxs("div",{className:"text-center lg:text-left",children:[f.jsx("h1",{className:"text-5xl font-bold",children:"Log in"}),f.jsx("p",{className:"py-6",children:"You need to be logged in to view this topic. Log in or create a new account now."})]}),f.jsx("div",{className:"card shrink-0 w-full max-w-sm shadow-lg bg-base-100  border border-amber-950 shadow-2xl",children:f.jsxs("div",{className:"card-body",children:[f.jsxs("div",{className:"form-control",children:[f.jsx("label",{htmlFor:"email",children:"Email: "}),f.jsx("input",{className:"input input-bordered",value:n.email,onChange:o("email"),type:"text",placeholder:"email",name:"email"})]}),f.jsxs("div",{className:"form-control",children:[f.jsx("label",{htmlFor:"password",children:"Password: "}),f.jsx("input",{className:"input input-bordered",value:n.password,onChange:o("password"),type:"password",placeholder:"password",name:"password"})]}),f.jsx("div",{className:"form-control mt-4",children:f.jsx("button",{className:"btn btn-primary",onClick:a,children:"Log in"})}),f.jsxs("div",{children:[f.jsx("span",{className:"mr-2",children:"Don't have an account?"}),f.jsx(ut,{to:"/register",className:"text-blue-600 hover:text-blue-800 hover:underline",children:"Register"})]})]})})]})})};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function w4(t,e,n,r){function i(s){return s instanceof n?s:new n(function(o){o(s)})}return new(n||(n=Promise))(function(s,o){function a(c){try{u(r.next(c))}catch(d){o(d)}}function l(c){try{u(r.throw(c))}catch(d){o(d)}}function u(c){c.done?s(c.value):i(c.value).then(a,l)}u((r=r.apply(t,e||[])).next())})}function b4(t,e){var n={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},r,i,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(u){return function(c){return l([u,c])}}function l(u){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(s=u[0]&2?i.return:u[0]?i.throw||((s=i.return)&&s.call(i),0):i.next)&&!(s=s.call(i,u[1])).done)return s;switch(i=0,s&&(u=[u[0]&2,s.value]),u[0]){case 0:case 1:s=u;break;case 4:return n.label++,{value:u[1],done:!1};case 5:n.label++,i=u[1],u=[0];continue;case 7:u=n.ops.pop(),n.trys.pop();continue;default:if(s=n.trys,!(s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){n=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){n.label=u[1];break}if(u[0]===6&&n.label<s[1]){n.label=s[1],s=u;break}if(s&&n.label<s[2]){n.label=s[2],n.ops.push(u);break}s[2]&&n.ops.pop(),n.trys.pop();continue}u=e.call(t,n)}catch(c){u=[6,c],i=0}finally{r=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var Gi=function(){return Gi=Object.assign||function(e){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},Gi.apply(this,arguments)},Gx=function(t){return{loading:t==null,value:t}},S4=function(){return function(t,e){switch(e.type){case"error":return Gi(Gi({},t),{error:e.error,loading:!1,value:void 0});case"reset":return Gx(e.defaultValue);case"value":return Gi(Gi({},t),{error:void 0,loading:!1,value:e.value});default:return t}}},x4=function(t){var e=t?t():void 0,n=b.useReducer(S4(),Gx(e)),r=n[0],i=n[1],s=b.useCallback(function(){var l=t?t():void 0;i({type:"reset",defaultValue:l})},[t]),o=b.useCallback(function(l){i({type:"error",error:l})},[]),a=b.useCallback(function(l){i({type:"value",value:l})},[]);return b.useMemo(function(){return{error:r.error,loading:r.loading,reset:s,setError:o,setValue:a,value:r.value}},[r.error,r.loading,s,o,a,r.value])},Yx=function(t,e){var n=x4(function(){return t.currentUser}),r=n.error,i=n.loading,s=n.setError,o=n.setValue,a=n.value;return b.useEffect(function(){var l=SA(t,function(u){return w4(void 0,void 0,void 0,function(){var c;return b4(this,function(d){switch(d.label){case 0:if(!(e!=null&&e.onUserChanged))return[3,4];d.label=1;case 1:return d.trys.push([1,3,,4]),[4,e.onUserChanged(u)];case 2:return d.sent(),[3,4];case 3:return c=d.sent(),s(c),[3,4];case 4:return o(u),[2]}})})},s);return function(){l()}},[t]),[a,i,r]};function yi(t){"@babel/helpers - typeof";return yi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yi(t)}function C4(t,e){if(yi(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e||"default");if(yi(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function qx(t){var e=C4(t,"string");return yi(e)=="symbol"?e:String(e)}function so(t,e,n){return e=qx(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function j_(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?j_(Object(n),!0).forEach(function(r){so(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j_(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function E4(t){if(Array.isArray(t))return t}function k4(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,i,s,o,a=[],l=!0,u=!1;try{if(s=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=s.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(c){u=!0,i=c}finally{try{if(!l&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return a}}function zh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Kx(t,e){if(t){if(typeof t=="string")return zh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return zh(t,e)}}function I4(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Rn(t,e){return E4(t)||k4(t,e)||Kx(t,e)||I4()}function T4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Kn(t,e){if(t==null)return{};var n=T4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var P4=["defaultInputValue","defaultMenuIsOpen","defaultValue","inputValue","menuIsOpen","onChange","onInputChange","onMenuClose","onMenuOpen","value"];function N4(t){var e=t.defaultInputValue,n=e===void 0?"":e,r=t.defaultMenuIsOpen,i=r===void 0?!1:r,s=t.defaultValue,o=s===void 0?null:s,a=t.inputValue,l=t.menuIsOpen,u=t.onChange,c=t.onInputChange,d=t.onMenuClose,h=t.onMenuOpen,g=t.value,v=Kn(t,P4),y=b.useState(a!==void 0?a:n),w=Rn(y,2),p=w[0],m=w[1],_=b.useState(l!==void 0?l:i),S=Rn(_,2),x=S[0],k=S[1],E=b.useState(g!==void 0?g:o),C=Rn(E,2),A=C[0],N=C[1],K=b.useCallback(function(O,F){typeof u=="function"&&u(O,F),N(O)},[u]),he=b.useCallback(function(O,F){var V;typeof c=="function"&&(V=c(O,F)),m(V!==void 0?V:O)},[c]),We=b.useCallback(function(){typeof h=="function"&&h(),k(!0)},[h]),at=b.useCallback(function(){typeof d=="function"&&d(),k(!1)},[d]),ve=a!==void 0?a:p,se=l!==void 0?l:x,et=g!==void 0?g:A;return U(U({},v),{},{inputValue:ve,menuIsOpen:se,onChange:K,onInputChange:he,onMenuClose:at,onMenuOpen:We,value:et})}function $(){return $=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},$.apply(this,arguments)}function O4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function F_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,qx(r.key),r)}}function R4(t,e,n){return e&&F_(t.prototype,e),n&&F_(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function Bh(t,e){return Bh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Bh(t,e)}function A4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Bh(t,e)}function zu(t){return zu=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},zu(t)}function Qx(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Qx=function(){return!!t})()}function M4(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function L4(t,e){if(e&&(yi(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return M4(t)}function D4(t){var e=Qx();return function(){var r=zu(t),i;if(e){var s=zu(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return L4(this,i)}}function j4(t){if(Array.isArray(t))return zh(t)}function F4(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function U4(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vg(t){return j4(t)||F4(t)||Kx(t)||U4()}function V4(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function $4(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var z4=function(){function t(n){var r=this;this._insertTag=function(i){var s;r.tags.length===0?r.insertionPoint?s=r.insertionPoint.nextSibling:r.prepend?s=r.container.firstChild:s=r.before:s=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(i,s),r.tags.push(i)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(r){r.forEach(this._insertTag)},e.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag($4(this));var i=this.tags[this.tags.length-1];if(this.isSpeedy){var s=V4(i);try{s.insertRule(r,s.cssRules.length)}catch{}}else i.appendChild(document.createTextNode(r));this.ctr++},e.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},t}(),rt="-ms-",Bu="-moz-",X="-webkit-",Xx="comm",yg="rule",_g="decl",B4="@import",Jx="@keyframes",W4="@layer",H4=Math.abs,Uc=String.fromCharCode,G4=Object.assign;function Y4(t,e){return Ye(t,0)^45?(((e<<2^Ye(t,0))<<2^Ye(t,1))<<2^Ye(t,2))<<2^Ye(t,3):0}function Zx(t){return t.trim()}function q4(t,e){return(t=e.exec(t))?t[0]:t}function J(t,e,n){return t.replace(e,n)}function Wh(t,e){return t.indexOf(e)}function Ye(t,e){return t.charCodeAt(e)|0}function la(t,e,n){return t.slice(e,n)}function ln(t){return t.length}function wg(t){return t.length}function pl(t,e){return e.push(t),t}function K4(t,e){return t.map(e).join("")}var Vc=1,_s=1,eC=0,xt=0,Oe=0,As="";function $c(t,e,n,r,i,s,o){return{value:t,root:e,parent:n,type:r,props:i,children:s,line:Vc,column:_s,length:o,return:""}}function Ys(t,e){return G4($c("",null,null,"",null,null,0),t,{length:-t.length},e)}function Q4(){return Oe}function X4(){return Oe=xt>0?Ye(As,--xt):0,_s--,Oe===10&&(_s=1,Vc--),Oe}function Nt(){return Oe=xt<eC?Ye(As,xt++):0,_s++,Oe===10&&(_s=1,Vc++),Oe}function yn(){return Ye(As,xt)}function Fl(){return xt}function La(t,e){return la(As,t,e)}function ua(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function tC(t){return Vc=_s=1,eC=ln(As=t),xt=0,[]}function nC(t){return As="",t}function Ul(t){return Zx(La(xt-1,Hh(t===91?t+2:t===40?t+1:t)))}function J4(t){for(;(Oe=yn())&&Oe<33;)Nt();return ua(t)>2||ua(Oe)>3?"":" "}function Z4(t,e){for(;--e&&Nt()&&!(Oe<48||Oe>102||Oe>57&&Oe<65||Oe>70&&Oe<97););return La(t,Fl()+(e<6&&yn()==32&&Nt()==32))}function Hh(t){for(;Nt();)switch(Oe){case t:return xt;case 34:case 39:t!==34&&t!==39&&Hh(Oe);break;case 40:t===41&&Hh(t);break;case 92:Nt();break}return xt}function e3(t,e){for(;Nt()&&t+Oe!==57;)if(t+Oe===84&&yn()===47)break;return"/*"+La(e,xt-1)+"*"+Uc(t===47?t:Nt())}function t3(t){for(;!ua(yn());)Nt();return La(t,xt)}function n3(t){return nC(Vl("",null,null,null,[""],t=tC(t),0,[0],t))}function Vl(t,e,n,r,i,s,o,a,l){for(var u=0,c=0,d=o,h=0,g=0,v=0,y=1,w=1,p=1,m=0,_="",S=i,x=s,k=r,E=_;w;)switch(v=m,m=Nt()){case 40:if(v!=108&&Ye(E,d-1)==58){Wh(E+=J(Ul(m),"&","&\f"),"&\f")!=-1&&(p=-1);break}case 34:case 39:case 91:E+=Ul(m);break;case 9:case 10:case 13:case 32:E+=J4(v);break;case 92:E+=Z4(Fl()-1,7);continue;case 47:switch(yn()){case 42:case 47:pl(r3(e3(Nt(),Fl()),e,n),l);break;default:E+="/"}break;case 123*y:a[u++]=ln(E)*p;case 125*y:case 59:case 0:switch(m){case 0:case 125:w=0;case 59+c:p==-1&&(E=J(E,/\f/g,"")),g>0&&ln(E)-d&&pl(g>32?V_(E+";",r,n,d-1):V_(J(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if(pl(k=U_(E,e,n,u,c,i,a,_,S=[],x=[],d),s),m===123)if(c===0)Vl(E,e,k,k,S,s,d,a,x);else switch(h===99&&Ye(E,3)===110?100:h){case 100:case 108:case 109:case 115:Vl(t,k,k,r&&pl(U_(t,k,k,0,0,i,a,_,i,S=[],d),x),i,x,d,a,r?S:x);break;default:Vl(E,k,k,k,[""],x,0,a,x)}}u=c=g=0,y=p=1,_=E="",d=o;break;case 58:d=1+ln(E),g=v;default:if(y<1){if(m==123)--y;else if(m==125&&y++==0&&X4()==125)continue}switch(E+=Uc(m),m*y){case 38:p=c>0?1:(E+="\f",-1);break;case 44:a[u++]=(ln(E)-1)*p,p=1;break;case 64:yn()===45&&(E+=Ul(Nt())),h=yn(),c=d=ln(_=E+=t3(Fl())),m++;break;case 45:v===45&&ln(E)==2&&(y=0)}}return s}function U_(t,e,n,r,i,s,o,a,l,u,c){for(var d=i-1,h=i===0?s:[""],g=wg(h),v=0,y=0,w=0;v<r;++v)for(var p=0,m=la(t,d+1,d=H4(y=o[v])),_=t;p<g;++p)(_=Zx(y>0?h[p]+" "+m:J(m,/&\f/g,h[p])))&&(l[w++]=_);return $c(t,e,n,i===0?yg:a,l,u,c)}function r3(t,e,n){return $c(t,e,n,Xx,Uc(Q4()),la(t,2,-2),0)}function V_(t,e,n,r){return $c(t,e,n,_g,la(t,0,r),la(t,r+1,-1),r)}function is(t,e){for(var n="",r=wg(t),i=0;i<r;i++)n+=e(t[i],i,t,e)||"";return n}function i3(t,e,n,r){switch(t.type){case W4:if(t.children.length)break;case B4:case _g:return t.return=t.return||t.value;case Xx:return"";case Jx:return t.return=t.value+"{"+is(t.children,r)+"}";case yg:t.value=t.props.join(",")}return ln(n=is(t.children,r))?t.return=t.value+"{"+n+"}":""}function s3(t){var e=wg(t);return function(n,r,i,s){for(var o="",a=0;a<e;a++)o+=t[a](n,r,i,s)||"";return o}}function o3(t){return function(e){e.root||(e=e.return)&&t(e)}}function a3(t){var e=Object.create(null);return function(n){return e[n]===void 0&&(e[n]=t(n)),e[n]}}var l3=function(e,n,r){for(var i=0,s=0;i=s,s=yn(),i===38&&s===12&&(n[r]=1),!ua(s);)Nt();return La(e,xt)},u3=function(e,n){var r=-1,i=44;do switch(ua(i)){case 0:i===38&&yn()===12&&(n[r]=1),e[r]+=l3(xt-1,n,r);break;case 2:e[r]+=Ul(i);break;case 4:if(i===44){e[++r]=yn()===58?"&\f":"",n[r]=e[r].length;break}default:e[r]+=Uc(i)}while(i=Nt());return e},c3=function(e,n){return nC(u3(tC(e),n))},$_=new WeakMap,d3=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var n=e.value,r=e.parent,i=e.column===r.column&&e.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(e.props.length===1&&n.charCodeAt(0)!==58&&!$_.get(r))&&!i){$_.set(e,!0);for(var s=[],o=c3(n,s),a=r.props,l=0,u=0;l<o.length;l++)for(var c=0;c<a.length;c++,u++)e.props[u]=s[l]?o[l].replace(/&\f/g,a[c]):a[c]+" "+o[l]}}},f3=function(e){if(e.type==="decl"){var n=e.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(e.return="",e.value="")}};function rC(t,e){switch(Y4(t,e)){case 5103:return X+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return X+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return X+t+Bu+t+rt+t+t;case 6828:case 4268:return X+t+rt+t+t;case 6165:return X+t+rt+"flex-"+t+t;case 5187:return X+t+J(t,/(\w+).+(:[^]+)/,X+"box-$1$2"+rt+"flex-$1$2")+t;case 5443:return X+t+rt+"flex-item-"+J(t,/flex-|-self/,"")+t;case 4675:return X+t+rt+"flex-line-pack"+J(t,/align-content|flex-|-self/,"")+t;case 5548:return X+t+rt+J(t,"shrink","negative")+t;case 5292:return X+t+rt+J(t,"basis","preferred-size")+t;case 6060:return X+"box-"+J(t,"-grow","")+X+t+rt+J(t,"grow","positive")+t;case 4554:return X+J(t,/([^-])(transform)/g,"$1"+X+"$2")+t;case 6187:return J(J(J(t,/(zoom-|grab)/,X+"$1"),/(image-set)/,X+"$1"),t,"")+t;case 5495:case 3959:return J(t,/(image-set\([^]*)/,X+"$1$`$1");case 4968:return J(J(t,/(.+:)(flex-)?(.*)/,X+"box-pack:$3"+rt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+X+t+t;case 4095:case 3583:case 4068:case 2532:return J(t,/(.+)-inline(.+)/,X+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ln(t)-1-e>6)switch(Ye(t,e+1)){case 109:if(Ye(t,e+4)!==45)break;case 102:return J(t,/(.+:)(.+)-([^]+)/,"$1"+X+"$2-$3$1"+Bu+(Ye(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Wh(t,"stretch")?rC(J(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(Ye(t,e+1)!==115)break;case 6444:switch(Ye(t,ln(t)-3-(~Wh(t,"!important")&&10))){case 107:return J(t,":",":"+X)+t;case 101:return J(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+X+(Ye(t,14)===45?"inline-":"")+"box$3$1"+X+"$2$3$1"+rt+"$2box$3")+t}break;case 5936:switch(Ye(t,e+11)){case 114:return X+t+rt+J(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return X+t+rt+J(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return X+t+rt+J(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return X+t+rt+t+t}return t}var h3=function(e,n,r,i){if(e.length>-1&&!e.return)switch(e.type){case _g:e.return=rC(e.value,e.length);break;case Jx:return is([Ys(e,{value:J(e.value,"@","@"+X)})],i);case yg:if(e.length)return K4(e.props,function(s){switch(q4(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return is([Ys(e,{props:[J(s,/:(read-\w+)/,":"+Bu+"$1")]})],i);case"::placeholder":return is([Ys(e,{props:[J(s,/:(plac\w+)/,":"+X+"input-$1")]}),Ys(e,{props:[J(s,/:(plac\w+)/,":"+Bu+"$1")]}),Ys(e,{props:[J(s,/:(plac\w+)/,rt+"input-$1")]})],i)}return""})}},p3=[h3],m3=function(e){var n=e.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(y){var w=y.getAttribute("data-emotion");w.indexOf(" ")!==-1&&(document.head.appendChild(y),y.setAttribute("data-s",""))})}var i=e.stylisPlugins||p3,s={},o,a=[];o=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(y){for(var w=y.getAttribute("data-emotion").split(" "),p=1;p<w.length;p++)s[w[p]]=!0;a.push(y)});var l,u=[d3,f3];{var c,d=[i3,o3(function(y){c.insert(y)})],h=s3(u.concat(i,d)),g=function(w){return is(n3(w),h)};l=function(w,p,m,_){c=m,g(w?w+"{"+p.styles+"}":p.styles),_&&(v.inserted[p.name]=!0)}}var v={key:n,sheet:new z4({key:n,container:o,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return v.sheet.hydrate(a),v},iC={exports:{}},re={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=typeof Symbol=="function"&&Symbol.for,bg=Be?Symbol.for("react.element"):60103,Sg=Be?Symbol.for("react.portal"):60106,zc=Be?Symbol.for("react.fragment"):60107,Bc=Be?Symbol.for("react.strict_mode"):60108,Wc=Be?Symbol.for("react.profiler"):60114,Hc=Be?Symbol.for("react.provider"):60109,Gc=Be?Symbol.for("react.context"):60110,xg=Be?Symbol.for("react.async_mode"):60111,Yc=Be?Symbol.for("react.concurrent_mode"):60111,qc=Be?Symbol.for("react.forward_ref"):60112,Kc=Be?Symbol.for("react.suspense"):60113,g3=Be?Symbol.for("react.suspense_list"):60120,Qc=Be?Symbol.for("react.memo"):60115,Xc=Be?Symbol.for("react.lazy"):60116,v3=Be?Symbol.for("react.block"):60121,y3=Be?Symbol.for("react.fundamental"):60117,_3=Be?Symbol.for("react.responder"):60118,w3=Be?Symbol.for("react.scope"):60119;function Lt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case bg:switch(t=t.type,t){case xg:case Yc:case zc:case Wc:case Bc:case Kc:return t;default:switch(t=t&&t.$$typeof,t){case Gc:case qc:case Xc:case Qc:case Hc:return t;default:return e}}case Sg:return e}}}function sC(t){return Lt(t)===Yc}re.AsyncMode=xg;re.ConcurrentMode=Yc;re.ContextConsumer=Gc;re.ContextProvider=Hc;re.Element=bg;re.ForwardRef=qc;re.Fragment=zc;re.Lazy=Xc;re.Memo=Qc;re.Portal=Sg;re.Profiler=Wc;re.StrictMode=Bc;re.Suspense=Kc;re.isAsyncMode=function(t){return sC(t)||Lt(t)===xg};re.isConcurrentMode=sC;re.isContextConsumer=function(t){return Lt(t)===Gc};re.isContextProvider=function(t){return Lt(t)===Hc};re.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===bg};re.isForwardRef=function(t){return Lt(t)===qc};re.isFragment=function(t){return Lt(t)===zc};re.isLazy=function(t){return Lt(t)===Xc};re.isMemo=function(t){return Lt(t)===Qc};re.isPortal=function(t){return Lt(t)===Sg};re.isProfiler=function(t){return Lt(t)===Wc};re.isStrictMode=function(t){return Lt(t)===Bc};re.isSuspense=function(t){return Lt(t)===Kc};re.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===zc||t===Yc||t===Wc||t===Bc||t===Kc||t===g3||typeof t=="object"&&t!==null&&(t.$$typeof===Xc||t.$$typeof===Qc||t.$$typeof===Hc||t.$$typeof===Gc||t.$$typeof===qc||t.$$typeof===y3||t.$$typeof===_3||t.$$typeof===w3||t.$$typeof===v3)};re.typeOf=Lt;iC.exports=re;var b3=iC.exports,oC=b3,S3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},x3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},aC={};aC[oC.ForwardRef]=S3;aC[oC.Memo]=x3;var C3=!0;function E3(t,e,n){var r="";return n.split(" ").forEach(function(i){t[i]!==void 0?e.push(t[i]+";"):r+=i+" "}),r}var lC=function(e,n,r){var i=e.key+"-"+n.name;(r===!1||C3===!1)&&e.registered[i]===void 0&&(e.registered[i]=n.styles)},k3=function(e,n,r){lC(e,n,r);var i=e.key+"-"+n.name;if(e.inserted[n.name]===void 0){var s=n;do e.insert(n===s?"."+i:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function I3(t){for(var e=0,n,r=0,i=t.length;i>=4;++r,i-=4)n=t.charCodeAt(r)&255|(t.charCodeAt(++r)&255)<<8|(t.charCodeAt(++r)&255)<<16|(t.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,e=(n&65535)*1540483477+((n>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(i){case 3:e^=(t.charCodeAt(r+2)&255)<<16;case 2:e^=(t.charCodeAt(r+1)&255)<<8;case 1:e^=t.charCodeAt(r)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var T3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},P3=/[A-Z]|^ms/g,N3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,uC=function(e){return e.charCodeAt(1)===45},z_=function(e){return e!=null&&typeof e!="boolean"},qd=a3(function(t){return uC(t)?t:t.replace(P3,"-$&").toLowerCase()}),B_=function(e,n){switch(e){case"animation":case"animationName":if(typeof n=="string")return n.replace(N3,function(r,i,s){return un={name:i,styles:s,next:un},i})}return T3[e]!==1&&!uC(e)&&typeof n=="number"&&n!==0?n+"px":n};function ca(t,e,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return un={name:n.name,styles:n.styles,next:un},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)un={name:r.name,styles:r.styles,next:un},r=r.next;var i=n.styles+";";return i}return O3(t,e,n)}case"function":{if(t!==void 0){var s=un,o=n(t);return un=s,ca(t,e,o)}break}}if(e==null)return n;var a=e[n];return a!==void 0?a:n}function O3(t,e,n){var r="";if(Array.isArray(n))for(var i=0;i<n.length;i++)r+=ca(t,e,n[i])+";";else for(var s in n){var o=n[s];if(typeof o!="object")e!=null&&e[o]!==void 0?r+=s+"{"+e[o]+"}":z_(o)&&(r+=qd(s)+":"+B_(s,o)+";");else if(Array.isArray(o)&&typeof o[0]=="string"&&(e==null||e[o[0]]===void 0))for(var a=0;a<o.length;a++)z_(o[a])&&(r+=qd(s)+":"+B_(s,o[a])+";");else{var l=ca(t,e,o);switch(s){case"animation":case"animationName":{r+=qd(s)+":"+l+";";break}default:r+=s+"{"+l+"}"}}}return r}var W_=/label:\s*([^\s;\n{]+)\s*(;|$)/g,un,cC=function(e,n,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var i=!0,s="";un=void 0;var o=e[0];o==null||o.raw===void 0?(i=!1,s+=ca(r,n,o)):s+=o[0];for(var a=1;a<e.length;a++)s+=ca(r,n,e[a]),i&&(s+=o[a]);W_.lastIndex=0;for(var l="",u;(u=W_.exec(s))!==null;)l+="-"+u[1];var c=I3(s)+l;return{name:c,styles:s,next:un}},R3=function(e){return e()},A3=sf.useInsertionEffect?sf.useInsertionEffect:!1,M3=A3||R3,Cg={}.hasOwnProperty,dC=b.createContext(typeof HTMLElement<"u"?m3({key:"css"}):null);dC.Provider;var L3=function(e){return b.forwardRef(function(n,r){var i=b.useContext(dC);return e(n,i,r)})},D3=b.createContext({}),Gh="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",j3=function(e,n){var r={};for(var i in n)Cg.call(n,i)&&(r[i]=n[i]);return r[Gh]=e,r},F3=function(e){var n=e.cache,r=e.serialized,i=e.isStringTag;return lC(n,r,i),M3(function(){return k3(n,r,i)}),null},U3=L3(function(t,e,n){var r=t.css;typeof r=="string"&&e.registered[r]!==void 0&&(r=e.registered[r]);var i=t[Gh],s=[r],o="";typeof t.className=="string"?o=E3(e.registered,s,t.className):t.className!=null&&(o=t.className+" ");var a=cC(s,void 0,b.useContext(D3));o+=e.key+"-"+a.name;var l={};for(var u in t)Cg.call(t,u)&&u!=="css"&&u!==Gh&&(l[u]=t[u]);return l.ref=n,l.className=o,b.createElement(b.Fragment,null,b.createElement(F3,{cache:e,serialized:a,isStringTag:typeof i=="string"}),b.createElement(i,l))}),V3=U3,j=function(e,n){var r=arguments;if(n==null||!Cg.call(n,"css"))return b.createElement.apply(void 0,r);var i=r.length,s=new Array(i);s[0]=V3,s[1]=j3(e,n);for(var o=2;o<i;o++)s[o]=r[o];return b.createElement.apply(null,s)};function Eg(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return cC(e)}var $3=function(){var e=Eg.apply(void 0,arguments),n="animation-"+e.name;return{name:n,styles:"@keyframes "+n+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function z3(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}const B3=Math.min,W3=Math.max,Wu=Math.round,ml=Math.floor,Hu=t=>({x:t,y:t});function H3(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function fC(t){return pC(t)?(t.nodeName||"").toLowerCase():"#document"}function nn(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function hC(t){var e;return(e=(pC(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function pC(t){return t instanceof Node||t instanceof nn(t).Node}function Yh(t){return t instanceof Element||t instanceof nn(t).Element}function kg(t){return t instanceof HTMLElement||t instanceof nn(t).HTMLElement}function H_(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof nn(t).ShadowRoot}function mC(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=Ig(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!["inline","contents"].includes(i)}function G3(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Y3(t){return["html","body","#document"].includes(fC(t))}function Ig(t){return nn(t).getComputedStyle(t)}function q3(t){if(fC(t)==="html")return t;const e=t.assignedSlot||t.parentNode||H_(t)&&t.host||hC(t);return H_(e)?e.host:e}function gC(t){const e=q3(t);return Y3(e)?t.ownerDocument?t.ownerDocument.body:t.body:kg(e)&&mC(e)?e:gC(e)}function Gu(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=gC(t),s=i===((r=t.ownerDocument)==null?void 0:r.body),o=nn(i);return s?e.concat(o,o.visualViewport||[],mC(i)?i:[],o.frameElement&&n?Gu(o.frameElement):[]):e.concat(i,Gu(i,[],n))}function K3(t){const e=Ig(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=kg(t),s=i?t.offsetWidth:n,o=i?t.offsetHeight:r,a=Wu(n)!==s||Wu(r)!==o;return a&&(n=s,r=o),{width:n,height:r,$:a}}function Tg(t){return Yh(t)?t:t.contextElement}function Kd(t){const e=Tg(t);if(!kg(e))return Hu(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:s}=K3(e);let o=(s?Wu(n.width):n.width)/r,a=(s?Wu(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Q3=Hu(0);function X3(t){const e=nn(t);return!G3()||!e.visualViewport?Q3:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function J3(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==nn(t)?!1:e}function G_(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=Tg(t);let o=Hu(1);e&&(r?Yh(r)&&(o=Kd(r)):o=Kd(t));const a=J3(s,n,r)?X3(s):Hu(0);let l=(i.left+a.x)/o.x,u=(i.top+a.y)/o.y,c=i.width/o.x,d=i.height/o.y;if(s){const h=nn(s),g=r&&Yh(r)?nn(r):r;let v=h,y=v.frameElement;for(;y&&r&&g!==v;){const w=Kd(y),p=y.getBoundingClientRect(),m=Ig(y),_=p.left+(y.clientLeft+parseFloat(m.paddingLeft))*w.x,S=p.top+(y.clientTop+parseFloat(m.paddingTop))*w.y;l*=w.x,u*=w.y,c*=w.x,d*=w.y,l+=_,u+=S,v=nn(y),y=v.frameElement}}return H3({width:c,height:d,x:l,y:u})}function Z3(t,e){let n=null,r;const i=hC(t);function s(){var a;clearTimeout(r),(a=n)==null||a.disconnect(),n=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),s();const{left:u,top:c,width:d,height:h}=t.getBoundingClientRect();if(a||e(),!d||!h)return;const g=ml(c),v=ml(i.clientWidth-(u+d)),y=ml(i.clientHeight-(c+h)),w=ml(u),m={rootMargin:-g+"px "+-v+"px "+-y+"px "+-w+"px",threshold:W3(0,B3(1,l))||1};let _=!0;function S(x){const k=x[0].intersectionRatio;if(k!==l){if(!_)return o();k?o(!1,k):r=setTimeout(()=>{o(!1,1e-7)},100)}_=!1}try{n=new IntersectionObserver(S,{...m,root:i.ownerDocument})}catch{n=new IntersectionObserver(S,m)}n.observe(t)}return o(!0),s}function eF(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=r,u=Tg(t),c=i||s?[...u?Gu(u):[],...Gu(e)]:[];c.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const d=u&&a?Z3(u,n):null;let h=-1,g=null;o&&(g=new ResizeObserver(p=>{let[m]=p;m&&m.target===u&&g&&(g.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var _;(_=g)==null||_.observe(e)})),n()}),u&&!l&&g.observe(u),g.observe(e));let v,y=l?G_(t):null;l&&w();function w(){const p=G_(t);y&&(p.x!==y.x||p.y!==y.y||p.width!==y.width||p.height!==y.height)&&n(),y=p,v=requestAnimationFrame(w)}return n(),()=>{var p;c.forEach(m=>{i&&m.removeEventListener("scroll",n),s&&m.removeEventListener("resize",n)}),d==null||d(),(p=g)==null||p.disconnect(),g=null,l&&cancelAnimationFrame(v)}}var qh=b.useLayoutEffect,tF=["className","clearValue","cx","getStyles","getClassNames","getValue","hasValue","isMulti","isRtl","options","selectOption","selectProps","setValue","theme"],Yu=function(){};function nF(t,e){return e?e[0]==="-"?t+e:t+"__"+e:t}function rF(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=[].concat(r);if(e&&t)for(var o in e)e.hasOwnProperty(o)&&e[o]&&s.push("".concat(nF(t,o)));return s.filter(function(a){return a}).map(function(a){return String(a).trim()}).join(" ")}var Y_=function(e){return fF(e)?e.filter(Boolean):yi(e)==="object"&&e!==null?[e]:[]},vC=function(e){e.className,e.clearValue,e.cx,e.getStyles,e.getClassNames,e.getValue,e.hasValue,e.isMulti,e.isRtl,e.options,e.selectOption,e.selectProps,e.setValue,e.theme;var n=Kn(e,tF);return U({},n)},ke=function(e,n,r){var i=e.cx,s=e.getStyles,o=e.getClassNames,a=e.className;return{css:s(n,e),className:i(r??{},o(n,e),a)}};function Jc(t){return[document.documentElement,document.body,window].indexOf(t)>-1}function iF(t){return Jc(t)?window.innerHeight:t.clientHeight}function yC(t){return Jc(t)?window.pageYOffset:t.scrollTop}function qu(t,e){if(Jc(t)){window.scrollTo(0,e);return}t.scrollTop=e}function sF(t){var e=getComputedStyle(t),n=e.position==="absolute",r=/(auto|scroll)/;if(e.position==="fixed")return document.documentElement;for(var i=t;i=i.parentElement;)if(e=getComputedStyle(i),!(n&&e.position==="static")&&r.test(e.overflow+e.overflowY+e.overflowX))return i;return document.documentElement}function oF(t,e,n,r){return n*((t=t/r-1)*t*t+1)+e}function gl(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:200,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:Yu,i=yC(t),s=e-i,o=10,a=0;function l(){a+=o;var u=oF(a,i,s,n);qu(t,u),a<n?window.requestAnimationFrame(l):r(t)}l()}function q_(t,e){var n=t.getBoundingClientRect(),r=e.getBoundingClientRect(),i=e.offsetHeight/3;r.bottom+i>n.bottom?qu(t,Math.min(e.offsetTop+e.clientHeight-t.offsetHeight+i,t.scrollHeight)):r.top-i<n.top&&qu(t,Math.max(e.offsetTop-i,0))}function aF(t){var e=t.getBoundingClientRect();return{bottom:e.bottom,height:e.height,left:e.left,right:e.right,top:e.top,width:e.width}}function K_(){try{return document.createEvent("TouchEvent"),!0}catch{return!1}}function lF(){try{return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}catch{return!1}}var _C=!1,uF={get passive(){return _C=!0}},vl=typeof window<"u"?window:{};vl.addEventListener&&vl.removeEventListener&&(vl.addEventListener("p",Yu,uF),vl.removeEventListener("p",Yu,!1));var cF=_C;function dF(t){return t!=null}function fF(t){return Array.isArray(t)}function yl(t,e,n){return t?e:n}var hF=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];var s=Object.entries(e).filter(function(o){var a=Rn(o,1),l=a[0];return!r.includes(l)});return s.reduce(function(o,a){var l=Rn(a,2),u=l[0],c=l[1];return o[u]=c,o},{})},pF=["children","innerProps"],mF=["children","innerProps"];function gF(t){var e=t.maxHeight,n=t.menuEl,r=t.minHeight,i=t.placement,s=t.shouldScroll,o=t.isFixedPosition,a=t.controlHeight,l=sF(n),u={placement:"bottom",maxHeight:e};if(!n||!n.offsetParent)return u;var c=l.getBoundingClientRect(),d=c.height,h=n.getBoundingClientRect(),g=h.bottom,v=h.height,y=h.top,w=n.offsetParent.getBoundingClientRect(),p=w.top,m=o?window.innerHeight:iF(l),_=yC(l),S=parseInt(getComputedStyle(n).marginBottom,10),x=parseInt(getComputedStyle(n).marginTop,10),k=p-x,E=m-y,C=k+_,A=d-_-y,N=g-m+_+S,K=_+y-x,he=160;switch(i){case"auto":case"bottom":if(E>=v)return{placement:"bottom",maxHeight:e};if(A>=v&&!o)return s&&gl(l,N,he),{placement:"bottom",maxHeight:e};if(!o&&A>=r||o&&E>=r){s&&gl(l,N,he);var We=o?E-S:A-S;return{placement:"bottom",maxHeight:We}}if(i==="auto"||o){var at=e,ve=o?k:C;return ve>=r&&(at=Math.min(ve-S-a,e)),{placement:"top",maxHeight:at}}if(i==="bottom")return s&&qu(l,N),{placement:"bottom",maxHeight:e};break;case"top":if(k>=v)return{placement:"top",maxHeight:e};if(C>=v&&!o)return s&&gl(l,K,he),{placement:"top",maxHeight:e};if(!o&&C>=r||o&&k>=r){var se=e;return(!o&&C>=r||o&&k>=r)&&(se=o?k-x:C-x),s&&gl(l,K,he),{placement:"top",maxHeight:se}}return{placement:"bottom",maxHeight:e};default:throw new Error('Invalid placement provided "'.concat(i,'".'))}return u}function vF(t){var e={bottom:"top",top:"bottom"};return t?e[t]:"bottom"}var wC=function(e){return e==="auto"?"bottom":e},yF=function(e,n){var r,i=e.placement,s=e.theme,o=s.borderRadius,a=s.spacing,l=s.colors;return U((r={label:"menu"},so(r,vF(i),"100%"),so(r,"position","absolute"),so(r,"width","100%"),so(r,"zIndex",1),r),n?{}:{backgroundColor:l.neutral0,borderRadius:o,boxShadow:"0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",marginBottom:a.menuGutter,marginTop:a.menuGutter})},bC=b.createContext(null),_F=function(e){var n=e.children,r=e.minMenuHeight,i=e.maxMenuHeight,s=e.menuPlacement,o=e.menuPosition,a=e.menuShouldScrollIntoView,l=e.theme,u=b.useContext(bC)||{},c=u.setPortalPlacement,d=b.useRef(null),h=b.useState(i),g=Rn(h,2),v=g[0],y=g[1],w=b.useState(null),p=Rn(w,2),m=p[0],_=p[1],S=l.spacing.controlHeight;return qh(function(){var x=d.current;if(x){var k=o==="fixed",E=a&&!k,C=gF({maxHeight:i,menuEl:x,minHeight:r,placement:s,shouldScroll:E,isFixedPosition:k,controlHeight:S});y(C.maxHeight),_(C.placement),c==null||c(C.placement)}},[i,s,o,a,r,c,S]),n({ref:d,placerProps:U(U({},e),{},{placement:m||wC(s),maxHeight:v})})},wF=function(e){var n=e.children,r=e.innerRef,i=e.innerProps;return j("div",$({},ke(e,"menu",{menu:!0}),{ref:r},i),n)},bF=wF,SF=function(e,n){var r=e.maxHeight,i=e.theme.spacing.baseUnit;return U({maxHeight:r,overflowY:"auto",position:"relative",WebkitOverflowScrolling:"touch"},n?{}:{paddingBottom:i,paddingTop:i})},xF=function(e){var n=e.children,r=e.innerProps,i=e.innerRef,s=e.isMulti;return j("div",$({},ke(e,"menuList",{"menu-list":!0,"menu-list--is-multi":s}),{ref:i},r),n)},SC=function(e,n){var r=e.theme,i=r.spacing.baseUnit,s=r.colors;return U({textAlign:"center"},n?{}:{color:s.neutral40,padding:"".concat(i*2,"px ").concat(i*3,"px")})},CF=SC,EF=SC,kF=function(e){var n=e.children,r=n===void 0?"No options":n,i=e.innerProps,s=Kn(e,pF);return j("div",$({},ke(U(U({},s),{},{children:r,innerProps:i}),"noOptionsMessage",{"menu-notice":!0,"menu-notice--no-options":!0}),i),r)},IF=function(e){var n=e.children,r=n===void 0?"Loading...":n,i=e.innerProps,s=Kn(e,mF);return j("div",$({},ke(U(U({},s),{},{children:r,innerProps:i}),"loadingMessage",{"menu-notice":!0,"menu-notice--loading":!0}),i),r)},TF=function(e){var n=e.rect,r=e.offset,i=e.position;return{left:n.left,position:i,top:r,width:n.width,zIndex:1}},PF=function(e){var n=e.appendTo,r=e.children,i=e.controlElement,s=e.innerProps,o=e.menuPlacement,a=e.menuPosition,l=b.useRef(null),u=b.useRef(null),c=b.useState(wC(o)),d=Rn(c,2),h=d[0],g=d[1],v=b.useMemo(function(){return{setPortalPlacement:g}},[]),y=b.useState(null),w=Rn(y,2),p=w[0],m=w[1],_=b.useCallback(function(){if(i){var E=aF(i),C=a==="fixed"?0:window.pageYOffset,A=E[h]+C;(A!==(p==null?void 0:p.offset)||E.left!==(p==null?void 0:p.rect.left)||E.width!==(p==null?void 0:p.rect.width))&&m({offset:A,rect:E})}},[i,a,h,p==null?void 0:p.offset,p==null?void 0:p.rect.left,p==null?void 0:p.rect.width]);qh(function(){_()},[_]);var S=b.useCallback(function(){typeof u.current=="function"&&(u.current(),u.current=null),i&&l.current&&(u.current=eF(i,l.current,_,{elementResize:"ResizeObserver"in window}))},[i,_]);qh(function(){S()},[S]);var x=b.useCallback(function(E){l.current=E,S()},[S]);if(!n&&a!=="fixed"||!p)return null;var k=j("div",$({ref:x},ke(U(U({},e),{},{offset:p.offset,position:a,rect:p.rect}),"menuPortal",{"menu-portal":!0}),s),r);return j(bC.Provider,{value:v},n?k1.createPortal(k,n):k)},NF=function(e){var n=e.isDisabled,r=e.isRtl;return{label:"container",direction:r?"rtl":void 0,pointerEvents:n?"none":void 0,position:"relative"}},OF=function(e){var n=e.children,r=e.innerProps,i=e.isDisabled,s=e.isRtl;return j("div",$({},ke(e,"container",{"--is-disabled":i,"--is-rtl":s}),r),n)},RF=function(e,n){var r=e.theme.spacing,i=e.isMulti,s=e.hasValue,o=e.selectProps.controlShouldRenderValue;return U({alignItems:"center",display:i&&s&&o?"flex":"grid",flex:1,flexWrap:"wrap",WebkitOverflowScrolling:"touch",position:"relative",overflow:"hidden"},n?{}:{padding:"".concat(r.baseUnit/2,"px ").concat(r.baseUnit*2,"px")})},AF=function(e){var n=e.children,r=e.innerProps,i=e.isMulti,s=e.hasValue;return j("div",$({},ke(e,"valueContainer",{"value-container":!0,"value-container--is-multi":i,"value-container--has-value":s}),r),n)},MF=function(){return{alignItems:"center",alignSelf:"stretch",display:"flex",flexShrink:0}},LF=function(e){var n=e.children,r=e.innerProps;return j("div",$({},ke(e,"indicatorsContainer",{indicators:!0}),r),n)},Q_,DF=["size"],jF=["innerProps","isRtl","size"],FF={name:"8mmkcg",styles:"display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"},xC=function(e){var n=e.size,r=Kn(e,DF);return j("svg",$({height:n,width:n,viewBox:"0 0 20 20","aria-hidden":"true",focusable:"false",css:FF},r))},Pg=function(e){return j(xC,$({size:20},e),j("path",{d:"M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"}))},CC=function(e){return j(xC,$({size:20},e),j("path",{d:"M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"}))},EC=function(e,n){var r=e.isFocused,i=e.theme,s=i.spacing.baseUnit,o=i.colors;return U({label:"indicatorContainer",display:"flex",transition:"color 150ms"},n?{}:{color:r?o.neutral60:o.neutral20,padding:s*2,":hover":{color:r?o.neutral80:o.neutral40}})},UF=EC,VF=function(e){var n=e.children,r=e.innerProps;return j("div",$({},ke(e,"dropdownIndicator",{indicator:!0,"dropdown-indicator":!0}),r),n||j(CC,null))},$F=EC,zF=function(e){var n=e.children,r=e.innerProps;return j("div",$({},ke(e,"clearIndicator",{indicator:!0,"clear-indicator":!0}),r),n||j(Pg,null))},BF=function(e,n){var r=e.isDisabled,i=e.theme,s=i.spacing.baseUnit,o=i.colors;return U({label:"indicatorSeparator",alignSelf:"stretch",width:1},n?{}:{backgroundColor:r?o.neutral10:o.neutral20,marginBottom:s*2,marginTop:s*2})},WF=function(e){var n=e.innerProps;return j("span",$({},n,ke(e,"indicatorSeparator",{"indicator-separator":!0})))},HF=$3(Q_||(Q_=z3([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))),GF=function(e,n){var r=e.isFocused,i=e.size,s=e.theme,o=s.colors,a=s.spacing.baseUnit;return U({label:"loadingIndicator",display:"flex",transition:"color 150ms",alignSelf:"center",fontSize:i,lineHeight:1,marginRight:i,textAlign:"center",verticalAlign:"middle"},n?{}:{color:r?o.neutral60:o.neutral20,padding:a*2})},Qd=function(e){var n=e.delay,r=e.offset;return j("span",{css:Eg({animation:"".concat(HF," 1s ease-in-out ").concat(n,"ms infinite;"),backgroundColor:"currentColor",borderRadius:"1em",display:"inline-block",marginLeft:r?"1em":void 0,height:"1em",verticalAlign:"top",width:"1em"},"","")})},YF=function(e){var n=e.innerProps,r=e.isRtl,i=e.size,s=i===void 0?4:i,o=Kn(e,jF);return j("div",$({},ke(U(U({},o),{},{innerProps:n,isRtl:r,size:s}),"loadingIndicator",{indicator:!0,"loading-indicator":!0}),n),j(Qd,{delay:0,offset:r}),j(Qd,{delay:160,offset:!0}),j(Qd,{delay:320,offset:!r}))},qF=function(e,n){var r=e.isDisabled,i=e.isFocused,s=e.theme,o=s.colors,a=s.borderRadius,l=s.spacing;return U({label:"control",alignItems:"center",cursor:"default",display:"flex",flexWrap:"wrap",justifyContent:"space-between",minHeight:l.controlHeight,outline:"0 !important",position:"relative",transition:"all 100ms"},n?{}:{backgroundColor:r?o.neutral5:o.neutral0,borderColor:r?o.neutral10:i?o.primary:o.neutral20,borderRadius:a,borderStyle:"solid",borderWidth:1,boxShadow:i?"0 0 0 1px ".concat(o.primary):void 0,"&:hover":{borderColor:i?o.primary:o.neutral30}})},KF=function(e){var n=e.children,r=e.isDisabled,i=e.isFocused,s=e.innerRef,o=e.innerProps,a=e.menuIsOpen;return j("div",$({ref:s},ke(e,"control",{control:!0,"control--is-disabled":r,"control--is-focused":i,"control--menu-is-open":a}),o,{"aria-disabled":r||void 0}),n)},QF=KF,XF=["data"],JF=function(e,n){var r=e.theme.spacing;return n?{}:{paddingBottom:r.baseUnit*2,paddingTop:r.baseUnit*2}},ZF=function(e){var n=e.children,r=e.cx,i=e.getStyles,s=e.getClassNames,o=e.Heading,a=e.headingProps,l=e.innerProps,u=e.label,c=e.theme,d=e.selectProps;return j("div",$({},ke(e,"group",{group:!0}),l),j(o,$({},a,{selectProps:d,theme:c,getStyles:i,getClassNames:s,cx:r}),u),j("div",null,n))},e5=function(e,n){var r=e.theme,i=r.colors,s=r.spacing;return U({label:"group",cursor:"default",display:"block"},n?{}:{color:i.neutral40,fontSize:"75%",fontWeight:500,marginBottom:"0.25em",paddingLeft:s.baseUnit*3,paddingRight:s.baseUnit*3,textTransform:"uppercase"})},t5=function(e){var n=vC(e);n.data;var r=Kn(n,XF);return j("div",$({},ke(e,"groupHeading",{"group-heading":!0}),r))},n5=ZF,r5=["innerRef","isDisabled","isHidden","inputClassName"],i5=function(e,n){var r=e.isDisabled,i=e.value,s=e.theme,o=s.spacing,a=s.colors;return U(U({visibility:r?"hidden":"visible",transform:i?"translateZ(0)":""},s5),n?{}:{margin:o.baseUnit/2,paddingBottom:o.baseUnit/2,paddingTop:o.baseUnit/2,color:a.neutral80})},kC={gridArea:"1 / 2",font:"inherit",minWidth:"2px",border:0,margin:0,outline:0,padding:0},s5={flex:"1 1 auto",display:"inline-grid",gridArea:"1 / 1 / 2 / 3",gridTemplateColumns:"0 min-content","&:after":U({content:'attr(data-value) " "',visibility:"hidden",whiteSpace:"pre"},kC)},o5=function(e){return U({label:"input",color:"inherit",background:0,opacity:e?0:1,width:"100%"},kC)},a5=function(e){var n=e.cx,r=e.value,i=vC(e),s=i.innerRef,o=i.isDisabled,a=i.isHidden,l=i.inputClassName,u=Kn(i,r5);return j("div",$({},ke(e,"input",{"input-container":!0}),{"data-value":r||""}),j("input",$({className:n({input:!0},l),ref:s,style:o5(a),disabled:o},u)))},l5=a5,u5=function(e,n){var r=e.theme,i=r.spacing,s=r.borderRadius,o=r.colors;return U({label:"multiValue",display:"flex",minWidth:0},n?{}:{backgroundColor:o.neutral10,borderRadius:s/2,margin:i.baseUnit/2})},c5=function(e,n){var r=e.theme,i=r.borderRadius,s=r.colors,o=e.cropWithEllipsis;return U({overflow:"hidden",textOverflow:o||o===void 0?"ellipsis":void 0,whiteSpace:"nowrap"},n?{}:{borderRadius:i/2,color:s.neutral80,fontSize:"85%",padding:3,paddingLeft:6})},d5=function(e,n){var r=e.theme,i=r.spacing,s=r.borderRadius,o=r.colors,a=e.isFocused;return U({alignItems:"center",display:"flex"},n?{}:{borderRadius:s/2,backgroundColor:a?o.dangerLight:void 0,paddingLeft:i.baseUnit,paddingRight:i.baseUnit,":hover":{backgroundColor:o.dangerLight,color:o.danger}})},IC=function(e){var n=e.children,r=e.innerProps;return j("div",r,n)},f5=IC,h5=IC;function p5(t){var e=t.children,n=t.innerProps;return j("div",$({role:"button"},n),e||j(Pg,{size:14}))}var m5=function(e){var n=e.children,r=e.components,i=e.data,s=e.innerProps,o=e.isDisabled,a=e.removeProps,l=e.selectProps,u=r.Container,c=r.Label,d=r.Remove;return j(u,{data:i,innerProps:U(U({},ke(e,"multiValue",{"multi-value":!0,"multi-value--is-disabled":o})),s),selectProps:l},j(c,{data:i,innerProps:U({},ke(e,"multiValueLabel",{"multi-value__label":!0})),selectProps:l},n),j(d,{data:i,innerProps:U(U({},ke(e,"multiValueRemove",{"multi-value__remove":!0})),{},{"aria-label":"Remove ".concat(n||"option")},a),selectProps:l}))},g5=m5,v5=function(e,n){var r=e.isDisabled,i=e.isFocused,s=e.isSelected,o=e.theme,a=o.spacing,l=o.colors;return U({label:"option",cursor:"default",display:"block",fontSize:"inherit",width:"100%",userSelect:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},n?{}:{backgroundColor:s?l.primary:i?l.primary25:"transparent",color:r?l.neutral20:s?l.neutral0:"inherit",padding:"".concat(a.baseUnit*2,"px ").concat(a.baseUnit*3,"px"),":active":{backgroundColor:r?void 0:s?l.primary:l.primary50}})},y5=function(e){var n=e.children,r=e.isDisabled,i=e.isFocused,s=e.isSelected,o=e.innerRef,a=e.innerProps;return j("div",$({},ke(e,"option",{option:!0,"option--is-disabled":r,"option--is-focused":i,"option--is-selected":s}),{ref:o,"aria-disabled":r},a),n)},_5=y5,w5=function(e,n){var r=e.theme,i=r.spacing,s=r.colors;return U({label:"placeholder",gridArea:"1 / 1 / 2 / 3"},n?{}:{color:s.neutral50,marginLeft:i.baseUnit/2,marginRight:i.baseUnit/2})},b5=function(e){var n=e.children,r=e.innerProps;return j("div",$({},ke(e,"placeholder",{placeholder:!0}),r),n)},S5=b5,x5=function(e,n){var r=e.isDisabled,i=e.theme,s=i.spacing,o=i.colors;return U({label:"singleValue",gridArea:"1 / 1 / 2 / 3",maxWidth:"100%",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n?{}:{color:r?o.neutral40:o.neutral80,marginLeft:s.baseUnit/2,marginRight:s.baseUnit/2})},C5=function(e){var n=e.children,r=e.isDisabled,i=e.innerProps;return j("div",$({},ke(e,"singleValue",{"single-value":!0,"single-value--is-disabled":r}),i),n)},E5=C5,k5={ClearIndicator:zF,Control:QF,DropdownIndicator:VF,DownChevron:CC,CrossIcon:Pg,Group:n5,GroupHeading:t5,IndicatorsContainer:LF,IndicatorSeparator:WF,Input:l5,LoadingIndicator:YF,Menu:bF,MenuList:xF,MenuPortal:PF,LoadingMessage:IF,NoOptionsMessage:kF,MultiValue:g5,MultiValueContainer:f5,MultiValueLabel:h5,MultiValueRemove:p5,Option:_5,Placeholder:S5,SelectContainer:OF,SingleValue:E5,ValueContainer:AF},I5=function(e){return U(U({},k5),e.components)},X_=Number.isNaN||function(e){return typeof e=="number"&&e!==e};function T5(t,e){return!!(t===e||X_(t)&&X_(e))}function P5(t,e){if(t.length!==e.length)return!1;for(var n=0;n<t.length;n++)if(!T5(t[n],e[n]))return!1;return!0}function N5(t,e){e===void 0&&(e=P5);var n=null;function r(){for(var i=[],s=0;s<arguments.length;s++)i[s]=arguments[s];if(n&&n.lastThis===this&&e(i,n.lastArgs))return n.lastResult;var o=t.apply(this,i);return n={lastResult:o,lastArgs:i,lastThis:this},o}return r.clear=function(){n=null},r}var O5={name:"7pg0cj-a11yText",styles:"label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"},R5=function(e){return j("span",$({css:O5},e))},J_=R5,A5={guidance:function(e){var n=e.isSearchable,r=e.isMulti,i=e.tabSelectsValue,s=e.context,o=e.isInitialFocus;switch(s){case"menu":return"Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(i?", press Tab to select the option and exit the menu":"",".");case"input":return o?"".concat(e["aria-label"]||"Select"," is focused ").concat(n?",type to refine list":"",", press Down to open the menu, ").concat(r?" press left to focus selected values":""):"";case"value":return"Use left and right to toggle between focused values, press Backspace to remove the currently focused value";default:return""}},onChange:function(e){var n=e.action,r=e.label,i=r===void 0?"":r,s=e.labels,o=e.isDisabled;switch(n){case"deselect-option":case"pop-value":case"remove-value":return"option ".concat(i,", deselected.");case"clear":return"All selected options have been cleared.";case"initial-input-focus":return"option".concat(s.length>1?"s":""," ").concat(s.join(","),", selected.");case"select-option":return o?"option ".concat(i," is disabled. Select another option."):"option ".concat(i,", selected.");default:return""}},onFocus:function(e){var n=e.context,r=e.focused,i=e.options,s=e.label,o=s===void 0?"":s,a=e.selectValue,l=e.isDisabled,u=e.isSelected,c=e.isAppleDevice,d=function(y,w){return y&&y.length?"".concat(y.indexOf(w)+1," of ").concat(y.length):""};if(n==="value"&&a)return"value ".concat(o," focused, ").concat(d(a,r),".");if(n==="menu"&&c){var h=l?" disabled":"",g="".concat(u?" selected":"").concat(h);return"".concat(o).concat(g,", ").concat(d(i,r),".")}return""},onFilter:function(e){var n=e.inputValue,r=e.resultsMessage;return"".concat(r).concat(n?" for search term "+n:"",".")}},M5=function(e){var n=e.ariaSelection,r=e.focusedOption,i=e.focusedValue,s=e.focusableOptions,o=e.isFocused,a=e.selectValue,l=e.selectProps,u=e.id,c=e.isAppleDevice,d=l.ariaLiveMessages,h=l.getOptionLabel,g=l.inputValue,v=l.isMulti,y=l.isOptionDisabled,w=l.isSearchable,p=l.menuIsOpen,m=l.options,_=l.screenReaderStatus,S=l.tabSelectsValue,x=l.isLoading,k=l["aria-label"],E=l["aria-live"],C=b.useMemo(function(){return U(U({},A5),d||{})},[d]),A=b.useMemo(function(){var ve="";if(n&&C.onChange){var se=n.option,et=n.options,O=n.removedValue,F=n.removedValues,V=n.value,ee=function(bn){return Array.isArray(bn)?null:bn},P=O||se||ee(V),Z=P?h(P):"",He=et||F||void 0,Dt=He?He.map(h):[],Ae=U({isDisabled:P&&y(P,a),label:Z,labels:Dt},n);ve=C.onChange(Ae)}return ve},[n,C,y,a,h]),N=b.useMemo(function(){var ve="",se=r||i,et=!!(r&&a&&a.includes(r));if(se&&C.onFocus){var O={focused:se,label:h(se),isDisabled:y(se,a),isSelected:et,options:s,context:se===r?"menu":"value",selectValue:a,isAppleDevice:c};ve=C.onFocus(O)}return ve},[r,i,h,y,C,s,a,c]),K=b.useMemo(function(){var ve="";if(p&&m.length&&!x&&C.onFilter){var se=_({count:s.length});ve=C.onFilter({inputValue:g,resultsMessage:se})}return ve},[s,g,p,C,m,_,x]),he=(n==null?void 0:n.action)==="initial-input-focus",We=b.useMemo(function(){var ve="";if(C.guidance){var se=i?"value":p?"menu":"input";ve=C.guidance({"aria-label":k,context:se,isDisabled:r&&y(r,a),isMulti:v,isSearchable:w,tabSelectsValue:S,isInitialFocus:he})}return ve},[k,r,i,v,y,w,p,C,a,S,he]),at=j(b.Fragment,null,j("span",{id:"aria-selection"},A),j("span",{id:"aria-focused"},N),j("span",{id:"aria-results"},K),j("span",{id:"aria-guidance"},We));return j(b.Fragment,null,j(J_,{id:u},he&&at),j(J_,{"aria-live":E,"aria-atomic":"false","aria-relevant":"additions text",role:"log"},o&&!he&&at))},L5=M5,Kh=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],D5=new RegExp("["+Kh.map(function(t){return t.letters}).join("")+"]","g"),TC={};for(var Xd=0;Xd<Kh.length;Xd++)for(var Jd=Kh[Xd],Zd=0;Zd<Jd.letters.length;Zd++)TC[Jd.letters[Zd]]=Jd.base;var PC=function(e){return e.replace(D5,function(n){return TC[n]})},j5=N5(PC),Z_=function(e){return e.replace(/^\s+|\s+$/g,"")},F5=function(e){return"".concat(e.label," ").concat(e.value)},U5=function(e){return function(n,r){if(n.data.__isNew__)return!0;var i=U({ignoreCase:!0,ignoreAccents:!0,stringify:F5,trim:!0,matchFrom:"any"},e),s=i.ignoreCase,o=i.ignoreAccents,a=i.stringify,l=i.trim,u=i.matchFrom,c=l?Z_(r):r,d=l?Z_(a(n)):a(n);return s&&(c=c.toLowerCase(),d=d.toLowerCase()),o&&(c=j5(c),d=PC(d)),u==="start"?d.substr(0,c.length)===c:d.indexOf(c)>-1}},V5=["innerRef"];function $5(t){var e=t.innerRef,n=Kn(t,V5),r=hF(n,"onExited","in","enter","exit","appear");return j("input",$({ref:e},r,{css:Eg({label:"dummyInput",background:0,border:0,caretColor:"transparent",fontSize:"inherit",gridArea:"1 / 1 / 2 / 3",outline:0,padding:0,width:1,color:"transparent",left:-100,opacity:0,position:"relative",transform:"scale(.01)"},"","")}))}var z5=function(e){e.cancelable&&e.preventDefault(),e.stopPropagation()};function B5(t){var e=t.isEnabled,n=t.onBottomArrive,r=t.onBottomLeave,i=t.onTopArrive,s=t.onTopLeave,o=b.useRef(!1),a=b.useRef(!1),l=b.useRef(0),u=b.useRef(null),c=b.useCallback(function(w,p){if(u.current!==null){var m=u.current,_=m.scrollTop,S=m.scrollHeight,x=m.clientHeight,k=u.current,E=p>0,C=S-x-_,A=!1;C>p&&o.current&&(r&&r(w),o.current=!1),E&&a.current&&(s&&s(w),a.current=!1),E&&p>C?(n&&!o.current&&n(w),k.scrollTop=S,A=!0,o.current=!0):!E&&-p>_&&(i&&!a.current&&i(w),k.scrollTop=0,A=!0,a.current=!0),A&&z5(w)}},[n,r,i,s]),d=b.useCallback(function(w){c(w,w.deltaY)},[c]),h=b.useCallback(function(w){l.current=w.changedTouches[0].clientY},[]),g=b.useCallback(function(w){var p=l.current-w.changedTouches[0].clientY;c(w,p)},[c]),v=b.useCallback(function(w){if(w){var p=cF?{passive:!1}:!1;w.addEventListener("wheel",d,p),w.addEventListener("touchstart",h,p),w.addEventListener("touchmove",g,p)}},[g,h,d]),y=b.useCallback(function(w){w&&(w.removeEventListener("wheel",d,!1),w.removeEventListener("touchstart",h,!1),w.removeEventListener("touchmove",g,!1))},[g,h,d]);return b.useEffect(function(){if(e){var w=u.current;return v(w),function(){y(w)}}},[e,v,y]),function(w){u.current=w}}var e0=["boxSizing","height","overflow","paddingRight","position"],t0={boxSizing:"border-box",overflow:"hidden",position:"relative",height:"100%"};function n0(t){t.preventDefault()}function r0(t){t.stopPropagation()}function i0(){var t=this.scrollTop,e=this.scrollHeight,n=t+this.offsetHeight;t===0?this.scrollTop=1:n===e&&(this.scrollTop=t-1)}function s0(){return"ontouchstart"in window||navigator.maxTouchPoints}var o0=!!(typeof window<"u"&&window.document&&window.document.createElement),qs=0,Ii={capture:!1,passive:!1};function W5(t){var e=t.isEnabled,n=t.accountForScrollbars,r=n===void 0?!0:n,i=b.useRef({}),s=b.useRef(null),o=b.useCallback(function(l){if(o0){var u=document.body,c=u&&u.style;if(r&&e0.forEach(function(v){var y=c&&c[v];i.current[v]=y}),r&&qs<1){var d=parseInt(i.current.paddingRight,10)||0,h=document.body?document.body.clientWidth:0,g=window.innerWidth-h+d||0;Object.keys(t0).forEach(function(v){var y=t0[v];c&&(c[v]=y)}),c&&(c.paddingRight="".concat(g,"px"))}u&&s0()&&(u.addEventListener("touchmove",n0,Ii),l&&(l.addEventListener("touchstart",i0,Ii),l.addEventListener("touchmove",r0,Ii))),qs+=1}},[r]),a=b.useCallback(function(l){if(o0){var u=document.body,c=u&&u.style;qs=Math.max(qs-1,0),r&&qs<1&&e0.forEach(function(d){var h=i.current[d];c&&(c[d]=h)}),u&&s0()&&(u.removeEventListener("touchmove",n0,Ii),l&&(l.removeEventListener("touchstart",i0,Ii),l.removeEventListener("touchmove",r0,Ii)))}},[r]);return b.useEffect(function(){if(e){var l=s.current;return o(l),function(){a(l)}}},[e,o,a]),function(l){s.current=l}}var H5=function(e){var n=e.target;return n.ownerDocument.activeElement&&n.ownerDocument.activeElement.blur()},G5={name:"1kfdb0e",styles:"position:fixed;left:0;bottom:0;right:0;top:0"};function Y5(t){var e=t.children,n=t.lockEnabled,r=t.captureEnabled,i=r===void 0?!0:r,s=t.onBottomArrive,o=t.onBottomLeave,a=t.onTopArrive,l=t.onTopLeave,u=B5({isEnabled:i,onBottomArrive:s,onBottomLeave:o,onTopArrive:a,onTopLeave:l}),c=W5({isEnabled:n}),d=function(g){u(g),c(g)};return j(b.Fragment,null,n&&j("div",{onClick:H5,css:G5}),e(d))}var q5={name:"1a0ro4n-requiredInput",styles:"label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"},K5=function(e){var n=e.name,r=e.onFocus;return j("input",{required:!0,name:n,tabIndex:-1,"aria-hidden":"true",onFocus:r,css:q5,value:"",onChange:function(){}})},Q5=K5;function Ng(t){var e;return typeof window<"u"&&window.navigator!=null?t.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function X5(){return Ng(/^iPhone/i)}function NC(){return Ng(/^Mac/i)}function J5(){return Ng(/^iPad/i)||NC()&&navigator.maxTouchPoints>1}function Z5(){return X5()||J5()}function e6(){return NC()||Z5()}var t6=function(e){return e.label},n6=function(e){return e.label},r6=function(e){return e.value},i6=function(e){return!!e.isDisabled},s6={clearIndicator:$F,container:NF,control:qF,dropdownIndicator:UF,group:JF,groupHeading:e5,indicatorsContainer:MF,indicatorSeparator:BF,input:i5,loadingIndicator:GF,loadingMessage:EF,menu:yF,menuList:SF,menuPortal:TF,multiValue:u5,multiValueLabel:c5,multiValueRemove:d5,noOptionsMessage:CF,option:v5,placeholder:w5,singleValue:x5,valueContainer:RF},o6={primary:"#2684FF",primary75:"#4C9AFF",primary50:"#B2D4FF",primary25:"#DEEBFF",danger:"#DE350B",dangerLight:"#FFBDAD",neutral0:"hsl(0, 0%, 100%)",neutral5:"hsl(0, 0%, 95%)",neutral10:"hsl(0, 0%, 90%)",neutral20:"hsl(0, 0%, 80%)",neutral30:"hsl(0, 0%, 70%)",neutral40:"hsl(0, 0%, 60%)",neutral50:"hsl(0, 0%, 50%)",neutral60:"hsl(0, 0%, 40%)",neutral70:"hsl(0, 0%, 30%)",neutral80:"hsl(0, 0%, 20%)",neutral90:"hsl(0, 0%, 10%)"},a6=4,OC=4,l6=38,u6=OC*2,c6={baseUnit:OC,controlHeight:l6,menuGutter:u6},ef={borderRadius:a6,colors:o6,spacing:c6},d6={"aria-live":"polite",backspaceRemovesValue:!0,blurInputOnSelect:K_(),captureMenuScroll:!K_(),classNames:{},closeMenuOnSelect:!0,closeMenuOnScroll:!1,components:{},controlShouldRenderValue:!0,escapeClearsValue:!1,filterOption:U5(),formatGroupLabel:t6,getOptionLabel:n6,getOptionValue:r6,isDisabled:!1,isLoading:!1,isMulti:!1,isRtl:!1,isSearchable:!0,isOptionDisabled:i6,loadingMessage:function(){return"Loading..."},maxMenuHeight:300,minMenuHeight:140,menuIsOpen:!1,menuPlacement:"bottom",menuPosition:"absolute",menuShouldBlockScroll:!1,menuShouldScrollIntoView:!lF(),noOptionsMessage:function(){return"No options"},openMenuOnFocus:!1,openMenuOnClick:!0,options:[],pageSize:5,placeholder:"Select...",screenReaderStatus:function(e){var n=e.count;return"".concat(n," result").concat(n!==1?"s":""," available")},styles:{},tabIndex:0,tabSelectsValue:!0,unstyled:!1};function a0(t,e,n,r){var i=MC(t,e,n),s=LC(t,e,n),o=AC(t,e),a=Ku(t,e);return{type:"option",data:e,isDisabled:i,isSelected:s,label:o,value:a,index:r}}function $l(t,e){return t.options.map(function(n,r){if("options"in n){var i=n.options.map(function(o,a){return a0(t,o,e,a)}).filter(function(o){return u0(t,o)});return i.length>0?{type:"group",data:n,options:i,index:r}:void 0}var s=a0(t,n,e,r);return u0(t,s)?s:void 0}).filter(dF)}function RC(t){return t.reduce(function(e,n){return n.type==="group"?e.push.apply(e,vg(n.options.map(function(r){return r.data}))):e.push(n.data),e},[])}function l0(t,e){return t.reduce(function(n,r){return r.type==="group"?n.push.apply(n,vg(r.options.map(function(i){return{data:i.data,id:"".concat(e,"-").concat(r.index,"-").concat(i.index)}}))):n.push({data:r.data,id:"".concat(e,"-").concat(r.index)}),n},[])}function f6(t,e){return RC($l(t,e))}function u0(t,e){var n=t.inputValue,r=n===void 0?"":n,i=e.data,s=e.isSelected,o=e.label,a=e.value;return(!jC(t)||!s)&&DC(t,{label:o,value:a,data:i},r)}function h6(t,e){var n=t.focusedValue,r=t.selectValue,i=r.indexOf(n);if(i>-1){var s=e.indexOf(n);if(s>-1)return n;if(i<e.length)return e[i]}return null}function p6(t,e){var n=t.focusedOption;return n&&e.indexOf(n)>-1?n:e[0]}var tf=function(e,n){var r,i=(r=e.find(function(s){return s.data===n}))===null||r===void 0?void 0:r.id;return i||null},AC=function(e,n){return e.getOptionLabel(n)},Ku=function(e,n){return e.getOptionValue(n)};function MC(t,e,n){return typeof t.isOptionDisabled=="function"?t.isOptionDisabled(e,n):!1}function LC(t,e,n){if(n.indexOf(e)>-1)return!0;if(typeof t.isOptionSelected=="function")return t.isOptionSelected(e,n);var r=Ku(t,e);return n.some(function(i){return Ku(t,i)===r})}function DC(t,e,n){return t.filterOption?t.filterOption(e,n):!0}var jC=function(e){var n=e.hideSelectedOptions,r=e.isMulti;return n===void 0?r:n},m6=1,FC=function(t){A4(n,t);var e=D4(n);function n(r){var i;if(O4(this,n),i=e.call(this,r),i.state={ariaSelection:null,focusedOption:null,focusedOptionId:null,focusableOptionsWithIds:[],focusedValue:null,inputIsHidden:!1,isFocused:!1,selectValue:[],clearFocusValueOnUpdate:!1,prevWasFocused:!1,inputIsHiddenAfterUpdate:void 0,prevProps:void 0,instancePrefix:""},i.blockOptionHover=!1,i.isComposing=!1,i.commonProps=void 0,i.initialTouchX=0,i.initialTouchY=0,i.openAfterFocus=!1,i.scrollToFocusedOptionOnUpdate=!1,i.userIsDragging=void 0,i.isAppleDevice=e6(),i.controlRef=null,i.getControlRef=function(l){i.controlRef=l},i.focusedOptionRef=null,i.getFocusedOptionRef=function(l){i.focusedOptionRef=l},i.menuListRef=null,i.getMenuListRef=function(l){i.menuListRef=l},i.inputRef=null,i.getInputRef=function(l){i.inputRef=l},i.focus=i.focusInput,i.blur=i.blurInput,i.onChange=function(l,u){var c=i.props,d=c.onChange,h=c.name;u.name=h,i.ariaOnChange(l,u),d(l,u)},i.setValue=function(l,u,c){var d=i.props,h=d.closeMenuOnSelect,g=d.isMulti,v=d.inputValue;i.onInputChange("",{action:"set-value",prevInputValue:v}),h&&(i.setState({inputIsHiddenAfterUpdate:!g}),i.onMenuClose()),i.setState({clearFocusValueOnUpdate:!0}),i.onChange(l,{action:u,option:c})},i.selectOption=function(l){var u=i.props,c=u.blurInputOnSelect,d=u.isMulti,h=u.name,g=i.state.selectValue,v=d&&i.isOptionSelected(l,g),y=i.isOptionDisabled(l,g);if(v){var w=i.getOptionValue(l);i.setValue(g.filter(function(p){return i.getOptionValue(p)!==w}),"deselect-option",l)}else if(!y)d?i.setValue([].concat(vg(g),[l]),"select-option",l):i.setValue(l,"select-option");else{i.ariaOnChange(l,{action:"select-option",option:l,name:h});return}c&&i.blurInput()},i.removeValue=function(l){var u=i.props.isMulti,c=i.state.selectValue,d=i.getOptionValue(l),h=c.filter(function(v){return i.getOptionValue(v)!==d}),g=yl(u,h,h[0]||null);i.onChange(g,{action:"remove-value",removedValue:l}),i.focusInput()},i.clearValue=function(){var l=i.state.selectValue;i.onChange(yl(i.props.isMulti,[],null),{action:"clear",removedValues:l})},i.popValue=function(){var l=i.props.isMulti,u=i.state.selectValue,c=u[u.length-1],d=u.slice(0,u.length-1),h=yl(l,d,d[0]||null);i.onChange(h,{action:"pop-value",removedValue:c})},i.getFocusedOptionId=function(l){return tf(i.state.focusableOptionsWithIds,l)},i.getFocusableOptionsWithIds=function(){return l0($l(i.props,i.state.selectValue),i.getElementId("option"))},i.getValue=function(){return i.state.selectValue},i.cx=function(){for(var l=arguments.length,u=new Array(l),c=0;c<l;c++)u[c]=arguments[c];return rF.apply(void 0,[i.props.classNamePrefix].concat(u))},i.getOptionLabel=function(l){return AC(i.props,l)},i.getOptionValue=function(l){return Ku(i.props,l)},i.getStyles=function(l,u){var c=i.props.unstyled,d=s6[l](u,c);d.boxSizing="border-box";var h=i.props.styles[l];return h?h(d,u):d},i.getClassNames=function(l,u){var c,d;return(c=(d=i.props.classNames)[l])===null||c===void 0?void 0:c.call(d,u)},i.getElementId=function(l){return"".concat(i.state.instancePrefix,"-").concat(l)},i.getComponents=function(){return I5(i.props)},i.buildCategorizedOptions=function(){return $l(i.props,i.state.selectValue)},i.getCategorizedOptions=function(){return i.props.menuIsOpen?i.buildCategorizedOptions():[]},i.buildFocusableOptions=function(){return RC(i.buildCategorizedOptions())},i.getFocusableOptions=function(){return i.props.menuIsOpen?i.buildFocusableOptions():[]},i.ariaOnChange=function(l,u){i.setState({ariaSelection:U({value:l},u)})},i.onMenuMouseDown=function(l){l.button===0&&(l.stopPropagation(),l.preventDefault(),i.focusInput())},i.onMenuMouseMove=function(l){i.blockOptionHover=!1},i.onControlMouseDown=function(l){if(!l.defaultPrevented){var u=i.props.openMenuOnClick;i.state.isFocused?i.props.menuIsOpen?l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&i.onMenuClose():u&&i.openMenu("first"):(u&&(i.openAfterFocus=!0),i.focusInput()),l.target.tagName!=="INPUT"&&l.target.tagName!=="TEXTAREA"&&l.preventDefault()}},i.onDropdownIndicatorMouseDown=function(l){if(!(l&&l.type==="mousedown"&&l.button!==0)&&!i.props.isDisabled){var u=i.props,c=u.isMulti,d=u.menuIsOpen;i.focusInput(),d?(i.setState({inputIsHiddenAfterUpdate:!c}),i.onMenuClose()):i.openMenu("first"),l.preventDefault()}},i.onClearIndicatorMouseDown=function(l){l&&l.type==="mousedown"&&l.button!==0||(i.clearValue(),l.preventDefault(),i.openAfterFocus=!1,l.type==="touchend"?i.focusInput():setTimeout(function(){return i.focusInput()}))},i.onScroll=function(l){typeof i.props.closeMenuOnScroll=="boolean"?l.target instanceof HTMLElement&&Jc(l.target)&&i.props.onMenuClose():typeof i.props.closeMenuOnScroll=="function"&&i.props.closeMenuOnScroll(l)&&i.props.onMenuClose()},i.onCompositionStart=function(){i.isComposing=!0},i.onCompositionEnd=function(){i.isComposing=!1},i.onTouchStart=function(l){var u=l.touches,c=u&&u.item(0);c&&(i.initialTouchX=c.clientX,i.initialTouchY=c.clientY,i.userIsDragging=!1)},i.onTouchMove=function(l){var u=l.touches,c=u&&u.item(0);if(c){var d=Math.abs(c.clientX-i.initialTouchX),h=Math.abs(c.clientY-i.initialTouchY),g=5;i.userIsDragging=d>g||h>g}},i.onTouchEnd=function(l){i.userIsDragging||(i.controlRef&&!i.controlRef.contains(l.target)&&i.menuListRef&&!i.menuListRef.contains(l.target)&&i.blurInput(),i.initialTouchX=0,i.initialTouchY=0)},i.onControlTouchEnd=function(l){i.userIsDragging||i.onControlMouseDown(l)},i.onClearIndicatorTouchEnd=function(l){i.userIsDragging||i.onClearIndicatorMouseDown(l)},i.onDropdownIndicatorTouchEnd=function(l){i.userIsDragging||i.onDropdownIndicatorMouseDown(l)},i.handleInputChange=function(l){var u=i.props.inputValue,c=l.currentTarget.value;i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange(c,{action:"input-change",prevInputValue:u}),i.props.menuIsOpen||i.onMenuOpen()},i.onInputFocus=function(l){i.props.onFocus&&i.props.onFocus(l),i.setState({inputIsHiddenAfterUpdate:!1,isFocused:!0}),(i.openAfterFocus||i.props.openMenuOnFocus)&&i.openMenu("first"),i.openAfterFocus=!1},i.onInputBlur=function(l){var u=i.props.inputValue;if(i.menuListRef&&i.menuListRef.contains(document.activeElement)){i.inputRef.focus();return}i.props.onBlur&&i.props.onBlur(l),i.onInputChange("",{action:"input-blur",prevInputValue:u}),i.onMenuClose(),i.setState({focusedValue:null,isFocused:!1})},i.onOptionHover=function(l){if(!(i.blockOptionHover||i.state.focusedOption===l)){var u=i.getFocusableOptions(),c=u.indexOf(l);i.setState({focusedOption:l,focusedOptionId:c>-1?i.getFocusedOptionId(l):null})}},i.shouldHideSelectedOptions=function(){return jC(i.props)},i.onValueInputFocus=function(l){l.preventDefault(),l.stopPropagation(),i.focus()},i.onKeyDown=function(l){var u=i.props,c=u.isMulti,d=u.backspaceRemovesValue,h=u.escapeClearsValue,g=u.inputValue,v=u.isClearable,y=u.isDisabled,w=u.menuIsOpen,p=u.onKeyDown,m=u.tabSelectsValue,_=u.openMenuOnFocus,S=i.state,x=S.focusedOption,k=S.focusedValue,E=S.selectValue;if(!y&&!(typeof p=="function"&&(p(l),l.defaultPrevented))){switch(i.blockOptionHover=!0,l.key){case"ArrowLeft":if(!c||g)return;i.focusValue("previous");break;case"ArrowRight":if(!c||g)return;i.focusValue("next");break;case"Delete":case"Backspace":if(g)return;if(k)i.removeValue(k);else{if(!d)return;c?i.popValue():v&&i.clearValue()}break;case"Tab":if(i.isComposing||l.shiftKey||!w||!m||!x||_&&i.isOptionSelected(x,E))return;i.selectOption(x);break;case"Enter":if(l.keyCode===229)break;if(w){if(!x||i.isComposing)return;i.selectOption(x);break}return;case"Escape":w?(i.setState({inputIsHiddenAfterUpdate:!1}),i.onInputChange("",{action:"menu-close",prevInputValue:g}),i.onMenuClose()):v&&h&&i.clearValue();break;case" ":if(g)return;if(!w){i.openMenu("first");break}if(!x)return;i.selectOption(x);break;case"ArrowUp":w?i.focusOption("up"):i.openMenu("last");break;case"ArrowDown":w?i.focusOption("down"):i.openMenu("first");break;case"PageUp":if(!w)return;i.focusOption("pageup");break;case"PageDown":if(!w)return;i.focusOption("pagedown");break;case"Home":if(!w)return;i.focusOption("first");break;case"End":if(!w)return;i.focusOption("last");break;default:return}l.preventDefault()}},i.state.instancePrefix="react-select-"+(i.props.instanceId||++m6),i.state.selectValue=Y_(r.value),r.menuIsOpen&&i.state.selectValue.length){var s=i.getFocusableOptionsWithIds(),o=i.buildFocusableOptions(),a=o.indexOf(i.state.selectValue[0]);i.state.focusableOptionsWithIds=s,i.state.focusedOption=o[a],i.state.focusedOptionId=tf(s,o[a])}return i}return R4(n,[{key:"componentDidMount",value:function(){this.startListeningComposition(),this.startListeningToTouch(),this.props.closeMenuOnScroll&&document&&document.addEventListener&&document.addEventListener("scroll",this.onScroll,!0),this.props.autoFocus&&this.focusInput(),this.props.menuIsOpen&&this.state.focusedOption&&this.menuListRef&&this.focusedOptionRef&&q_(this.menuListRef,this.focusedOptionRef)}},{key:"componentDidUpdate",value:function(i){var s=this.props,o=s.isDisabled,a=s.menuIsOpen,l=this.state.isFocused;(l&&!o&&i.isDisabled||l&&a&&!i.menuIsOpen)&&this.focusInput(),l&&o&&!i.isDisabled?this.setState({isFocused:!1},this.onMenuClose):!l&&!o&&i.isDisabled&&this.inputRef===document.activeElement&&this.setState({isFocused:!0}),this.menuListRef&&this.focusedOptionRef&&this.scrollToFocusedOptionOnUpdate&&(q_(this.menuListRef,this.focusedOptionRef),this.scrollToFocusedOptionOnUpdate=!1)}},{key:"componentWillUnmount",value:function(){this.stopListeningComposition(),this.stopListeningToTouch(),document.removeEventListener("scroll",this.onScroll,!0)}},{key:"onMenuOpen",value:function(){this.props.onMenuOpen()}},{key:"onMenuClose",value:function(){this.onInputChange("",{action:"menu-close",prevInputValue:this.props.inputValue}),this.props.onMenuClose()}},{key:"onInputChange",value:function(i,s){this.props.onInputChange(i,s)}},{key:"focusInput",value:function(){this.inputRef&&this.inputRef.focus()}},{key:"blurInput",value:function(){this.inputRef&&this.inputRef.blur()}},{key:"openMenu",value:function(i){var s=this,o=this.state,a=o.selectValue,l=o.isFocused,u=this.buildFocusableOptions(),c=i==="first"?0:u.length-1;if(!this.props.isMulti){var d=u.indexOf(a[0]);d>-1&&(c=d)}this.scrollToFocusedOptionOnUpdate=!(l&&this.menuListRef),this.setState({inputIsHiddenAfterUpdate:!1,focusedValue:null,focusedOption:u[c],focusedOptionId:this.getFocusedOptionId(u[c])},function(){return s.onMenuOpen()})}},{key:"focusValue",value:function(i){var s=this.state,o=s.selectValue,a=s.focusedValue;if(this.props.isMulti){this.setState({focusedOption:null});var l=o.indexOf(a);a||(l=-1);var u=o.length-1,c=-1;if(o.length){switch(i){case"previous":l===0?c=0:l===-1?c=u:c=l-1;break;case"next":l>-1&&l<u&&(c=l+1);break}this.setState({inputIsHidden:c!==-1,focusedValue:o[c]})}}}},{key:"focusOption",value:function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"first",s=this.props.pageSize,o=this.state.focusedOption,a=this.getFocusableOptions();if(a.length){var l=0,u=a.indexOf(o);o||(u=-1),i==="up"?l=u>0?u-1:a.length-1:i==="down"?l=(u+1)%a.length:i==="pageup"?(l=u-s,l<0&&(l=0)):i==="pagedown"?(l=u+s,l>a.length-1&&(l=a.length-1)):i==="last"&&(l=a.length-1),this.scrollToFocusedOptionOnUpdate=!0,this.setState({focusedOption:a[l],focusedValue:null,focusedOptionId:this.getFocusedOptionId(a[l])})}}},{key:"getTheme",value:function(){return this.props.theme?typeof this.props.theme=="function"?this.props.theme(ef):U(U({},ef),this.props.theme):ef}},{key:"getCommonProps",value:function(){var i=this.clearValue,s=this.cx,o=this.getStyles,a=this.getClassNames,l=this.getValue,u=this.selectOption,c=this.setValue,d=this.props,h=d.isMulti,g=d.isRtl,v=d.options,y=this.hasValue();return{clearValue:i,cx:s,getStyles:o,getClassNames:a,getValue:l,hasValue:y,isMulti:h,isRtl:g,options:v,selectOption:u,selectProps:d,setValue:c,theme:this.getTheme()}}},{key:"hasValue",value:function(){var i=this.state.selectValue;return i.length>0}},{key:"hasOptions",value:function(){return!!this.getFocusableOptions().length}},{key:"isClearable",value:function(){var i=this.props,s=i.isClearable,o=i.isMulti;return s===void 0?o:s}},{key:"isOptionDisabled",value:function(i,s){return MC(this.props,i,s)}},{key:"isOptionSelected",value:function(i,s){return LC(this.props,i,s)}},{key:"filterOption",value:function(i,s){return DC(this.props,i,s)}},{key:"formatOptionLabel",value:function(i,s){if(typeof this.props.formatOptionLabel=="function"){var o=this.props.inputValue,a=this.state.selectValue;return this.props.formatOptionLabel(i,{context:s,inputValue:o,selectValue:a})}else return this.getOptionLabel(i)}},{key:"formatGroupLabel",value:function(i){return this.props.formatGroupLabel(i)}},{key:"startListeningComposition",value:function(){document&&document.addEventListener&&(document.addEventListener("compositionstart",this.onCompositionStart,!1),document.addEventListener("compositionend",this.onCompositionEnd,!1))}},{key:"stopListeningComposition",value:function(){document&&document.removeEventListener&&(document.removeEventListener("compositionstart",this.onCompositionStart),document.removeEventListener("compositionend",this.onCompositionEnd))}},{key:"startListeningToTouch",value:function(){document&&document.addEventListener&&(document.addEventListener("touchstart",this.onTouchStart,!1),document.addEventListener("touchmove",this.onTouchMove,!1),document.addEventListener("touchend",this.onTouchEnd,!1))}},{key:"stopListeningToTouch",value:function(){document&&document.removeEventListener&&(document.removeEventListener("touchstart",this.onTouchStart),document.removeEventListener("touchmove",this.onTouchMove),document.removeEventListener("touchend",this.onTouchEnd))}},{key:"renderInput",value:function(){var i=this.props,s=i.isDisabled,o=i.isSearchable,a=i.inputId,l=i.inputValue,u=i.tabIndex,c=i.form,d=i.menuIsOpen,h=i.required,g=this.getComponents(),v=g.Input,y=this.state,w=y.inputIsHidden,p=y.ariaSelection,m=this.commonProps,_=a||this.getElementId("input"),S=U(U(U({"aria-autocomplete":"list","aria-expanded":d,"aria-haspopup":!0,"aria-errormessage":this.props["aria-errormessage"],"aria-invalid":this.props["aria-invalid"],"aria-label":this.props["aria-label"],"aria-labelledby":this.props["aria-labelledby"],"aria-required":h,role:"combobox","aria-activedescendant":this.isAppleDevice?void 0:this.state.focusedOptionId||""},d&&{"aria-controls":this.getElementId("listbox")}),!o&&{"aria-readonly":!0}),this.hasValue()?(p==null?void 0:p.action)==="initial-input-focus"&&{"aria-describedby":this.getElementId("live-region")}:{"aria-describedby":this.getElementId("placeholder")});return o?b.createElement(v,$({},m,{autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",id:_,innerRef:this.getInputRef,isDisabled:s,isHidden:w,onBlur:this.onInputBlur,onChange:this.handleInputChange,onFocus:this.onInputFocus,spellCheck:"false",tabIndex:u,form:c,type:"text",value:l},S)):b.createElement($5,$({id:_,innerRef:this.getInputRef,onBlur:this.onInputBlur,onChange:Yu,onFocus:this.onInputFocus,disabled:s,tabIndex:u,inputMode:"none",form:c,value:""},S))}},{key:"renderPlaceholderOrValue",value:function(){var i=this,s=this.getComponents(),o=s.MultiValue,a=s.MultiValueContainer,l=s.MultiValueLabel,u=s.MultiValueRemove,c=s.SingleValue,d=s.Placeholder,h=this.commonProps,g=this.props,v=g.controlShouldRenderValue,y=g.isDisabled,w=g.isMulti,p=g.inputValue,m=g.placeholder,_=this.state,S=_.selectValue,x=_.focusedValue,k=_.isFocused;if(!this.hasValue()||!v)return p?null:b.createElement(d,$({},h,{key:"placeholder",isDisabled:y,isFocused:k,innerProps:{id:this.getElementId("placeholder")}}),m);if(w)return S.map(function(C,A){var N=C===x,K="".concat(i.getOptionLabel(C),"-").concat(i.getOptionValue(C));return b.createElement(o,$({},h,{components:{Container:a,Label:l,Remove:u},isFocused:N,isDisabled:y,key:K,index:A,removeProps:{onClick:function(){return i.removeValue(C)},onTouchEnd:function(){return i.removeValue(C)},onMouseDown:function(We){We.preventDefault()}},data:C}),i.formatOptionLabel(C,"value"))});if(p)return null;var E=S[0];return b.createElement(c,$({},h,{data:E,isDisabled:y}),this.formatOptionLabel(E,"value"))}},{key:"renderClearIndicator",value:function(){var i=this.getComponents(),s=i.ClearIndicator,o=this.commonProps,a=this.props,l=a.isDisabled,u=a.isLoading,c=this.state.isFocused;if(!this.isClearable()||!s||l||!this.hasValue()||u)return null;var d={onMouseDown:this.onClearIndicatorMouseDown,onTouchEnd:this.onClearIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(s,$({},o,{innerProps:d,isFocused:c}))}},{key:"renderLoadingIndicator",value:function(){var i=this.getComponents(),s=i.LoadingIndicator,o=this.commonProps,a=this.props,l=a.isDisabled,u=a.isLoading,c=this.state.isFocused;if(!s||!u)return null;var d={"aria-hidden":"true"};return b.createElement(s,$({},o,{innerProps:d,isDisabled:l,isFocused:c}))}},{key:"renderIndicatorSeparator",value:function(){var i=this.getComponents(),s=i.DropdownIndicator,o=i.IndicatorSeparator;if(!s||!o)return null;var a=this.commonProps,l=this.props.isDisabled,u=this.state.isFocused;return b.createElement(o,$({},a,{isDisabled:l,isFocused:u}))}},{key:"renderDropdownIndicator",value:function(){var i=this.getComponents(),s=i.DropdownIndicator;if(!s)return null;var o=this.commonProps,a=this.props.isDisabled,l=this.state.isFocused,u={onMouseDown:this.onDropdownIndicatorMouseDown,onTouchEnd:this.onDropdownIndicatorTouchEnd,"aria-hidden":"true"};return b.createElement(s,$({},o,{innerProps:u,isDisabled:a,isFocused:l}))}},{key:"renderMenu",value:function(){var i=this,s=this.getComponents(),o=s.Group,a=s.GroupHeading,l=s.Menu,u=s.MenuList,c=s.MenuPortal,d=s.LoadingMessage,h=s.NoOptionsMessage,g=s.Option,v=this.commonProps,y=this.state.focusedOption,w=this.props,p=w.captureMenuScroll,m=w.inputValue,_=w.isLoading,S=w.loadingMessage,x=w.minMenuHeight,k=w.maxMenuHeight,E=w.menuIsOpen,C=w.menuPlacement,A=w.menuPosition,N=w.menuPortalTarget,K=w.menuShouldBlockScroll,he=w.menuShouldScrollIntoView,We=w.noOptionsMessage,at=w.onMenuScrollToTop,ve=w.onMenuScrollToBottom;if(!E)return null;var se=function(Z,He){var Dt=Z.type,Ae=Z.data,Et=Z.isDisabled,bn=Z.isSelected,Da=Z.label,YC=Z.value,Rg=y===Ae,Ag=Et?void 0:function(){return i.onOptionHover(Ae)},qC=Et?void 0:function(){return i.selectOption(Ae)},Mg="".concat(i.getElementId("option"),"-").concat(He),KC={id:Mg,onClick:qC,onMouseMove:Ag,onMouseOver:Ag,tabIndex:-1,role:"option","aria-selected":i.isAppleDevice?void 0:bn};return b.createElement(g,$({},v,{innerProps:KC,data:Ae,isDisabled:Et,isSelected:bn,key:Mg,label:Da,type:Dt,value:YC,isFocused:Rg,innerRef:Rg?i.getFocusedOptionRef:void 0}),i.formatOptionLabel(Z.data,"menu"))},et;if(this.hasOptions())et=this.getCategorizedOptions().map(function(P){if(P.type==="group"){var Z=P.data,He=P.options,Dt=P.index,Ae="".concat(i.getElementId("group"),"-").concat(Dt),Et="".concat(Ae,"-heading");return b.createElement(o,$({},v,{key:Ae,data:Z,options:He,Heading:a,headingProps:{id:Et,data:P.data},label:i.formatGroupLabel(P.data)}),P.options.map(function(bn){return se(bn,"".concat(Dt,"-").concat(bn.index))}))}else if(P.type==="option")return se(P,"".concat(P.index))});else if(_){var O=S({inputValue:m});if(O===null)return null;et=b.createElement(d,v,O)}else{var F=We({inputValue:m});if(F===null)return null;et=b.createElement(h,v,F)}var V={minMenuHeight:x,maxMenuHeight:k,menuPlacement:C,menuPosition:A,menuShouldScrollIntoView:he},ee=b.createElement(_F,$({},v,V),function(P){var Z=P.ref,He=P.placerProps,Dt=He.placement,Ae=He.maxHeight;return b.createElement(l,$({},v,V,{innerRef:Z,innerProps:{onMouseDown:i.onMenuMouseDown,onMouseMove:i.onMenuMouseMove},isLoading:_,placement:Dt}),b.createElement(Y5,{captureEnabled:p,onTopArrive:at,onBottomArrive:ve,lockEnabled:K},function(Et){return b.createElement(u,$({},v,{innerRef:function(Da){i.getMenuListRef(Da),Et(Da)},innerProps:{role:"listbox","aria-multiselectable":v.isMulti,id:i.getElementId("listbox")},isLoading:_,maxHeight:Ae,focusedOption:y}),et)}))});return N||A==="fixed"?b.createElement(c,$({},v,{appendTo:N,controlElement:this.controlRef,menuPlacement:C,menuPosition:A}),ee):ee}},{key:"renderFormField",value:function(){var i=this,s=this.props,o=s.delimiter,a=s.isDisabled,l=s.isMulti,u=s.name,c=s.required,d=this.state.selectValue;if(c&&!this.hasValue()&&!a)return b.createElement(Q5,{name:u,onFocus:this.onValueInputFocus});if(!(!u||a))if(l)if(o){var h=d.map(function(y){return i.getOptionValue(y)}).join(o);return b.createElement("input",{name:u,type:"hidden",value:h})}else{var g=d.length>0?d.map(function(y,w){return b.createElement("input",{key:"i-".concat(w),name:u,type:"hidden",value:i.getOptionValue(y)})}):b.createElement("input",{name:u,type:"hidden",value:""});return b.createElement("div",null,g)}else{var v=d[0]?this.getOptionValue(d[0]):"";return b.createElement("input",{name:u,type:"hidden",value:v})}}},{key:"renderLiveRegion",value:function(){var i=this.commonProps,s=this.state,o=s.ariaSelection,a=s.focusedOption,l=s.focusedValue,u=s.isFocused,c=s.selectValue,d=this.getFocusableOptions();return b.createElement(L5,$({},i,{id:this.getElementId("live-region"),ariaSelection:o,focusedOption:a,focusedValue:l,isFocused:u,selectValue:c,focusableOptions:d,isAppleDevice:this.isAppleDevice}))}},{key:"render",value:function(){var i=this.getComponents(),s=i.Control,o=i.IndicatorsContainer,a=i.SelectContainer,l=i.ValueContainer,u=this.props,c=u.className,d=u.id,h=u.isDisabled,g=u.menuIsOpen,v=this.state.isFocused,y=this.commonProps=this.getCommonProps();return b.createElement(a,$({},y,{className:c,innerProps:{id:d,onKeyDown:this.onKeyDown},isDisabled:h,isFocused:v}),this.renderLiveRegion(),b.createElement(s,$({},y,{innerRef:this.getControlRef,innerProps:{onMouseDown:this.onControlMouseDown,onTouchEnd:this.onControlTouchEnd},isDisabled:h,isFocused:v,menuIsOpen:g}),b.createElement(l,$({},y,{isDisabled:h}),this.renderPlaceholderOrValue(),this.renderInput()),b.createElement(o,$({},y,{isDisabled:h}),this.renderClearIndicator(),this.renderLoadingIndicator(),this.renderIndicatorSeparator(),this.renderDropdownIndicator())),this.renderMenu(),this.renderFormField())}}],[{key:"getDerivedStateFromProps",value:function(i,s){var o=s.prevProps,a=s.clearFocusValueOnUpdate,l=s.inputIsHiddenAfterUpdate,u=s.ariaSelection,c=s.isFocused,d=s.prevWasFocused,h=s.instancePrefix,g=i.options,v=i.value,y=i.menuIsOpen,w=i.inputValue,p=i.isMulti,m=Y_(v),_={};if(o&&(v!==o.value||g!==o.options||y!==o.menuIsOpen||w!==o.inputValue)){var S=y?f6(i,m):[],x=y?l0($l(i,m),"".concat(h,"-option")):[],k=a?h6(s,m):null,E=p6(s,S),C=tf(x,E);_={selectValue:m,focusedOption:E,focusedOptionId:C,focusableOptionsWithIds:x,focusedValue:k,clearFocusValueOnUpdate:!1}}var A=l!=null&&i!==o?{inputIsHidden:l,inputIsHiddenAfterUpdate:void 0}:{},N=u,K=c&&d;return c&&!K&&(N={value:yl(p,m,m[0]||null),options:m,action:"initial-input-focus"},K=!d),(u==null?void 0:u.action)==="initial-input-focus"&&(N=null),U(U(U({},_),A),{},{prevProps:i,ariaSelection:N,prevWasFocused:K})}}]),n}(b.Component);FC.defaultProps=d6;var g6=b.forwardRef(function(t,e){var n=N4(t);return b.createElement(FC,$({ref:e},n))}),v6=g6;const UC=[{value:"Players",label:"Players"},{value:"Tournaments",label:"Tournaments"},{value:"Techniques",label:"Techniques"},{value:"Gear",label:"Gear"},{value:"Matches",label:"Matches"},{value:"Strategy",label:"Strategy"},{value:"Training",label:"Training"},{value:"Fitness",label:"Fitness"},{value:"News",label:"News"},{value:"Discussion",label:"Discussion"},{value:"Tips",label:"Tips"},{value:"Equipment",label:"Equipment"},{value:"Coaching",label:"Coaching"},{value:"Events",label:"Events"},{value:"Community",label:"Community"}],nf=getComputedStyle(document.documentElement).getPropertyValue("--theme-color-1"),Ks=getComputedStyle(document.documentElement).getPropertyValue("--theme-color-2"),y6=t=>UC.filter(e=>t.includes(e.label)),Og=({updateTags:t,alreadySelectedTags:e=[]})=>f.jsxs(f.Fragment,{children:[f.jsx("label",{htmlFor:"input-tags",children:"Tags"}),f.jsx(v6,{isMulti:!0,options:UC,value:e,onChange:t,styles:{control:n=>({...n,backgroundColor:nf,color:Ks}),option:n=>({...n,backgroundColor:nf,color:Ks}),multiValue:n=>({...n,backgroundColor:nf,color:Ks}),multiValueLabel:n=>({...n,color:Ks}),multiValueRemove:n=>({...n,color:Ks})}})]});Og.propTypes={updateTags:R.func,alreadySelectedTags:R.array};const _6=()=>{const{userData:t}=b.useContext(_n),[e,n]=b.useState({title:"",content:"",tags:[]}),r=Ht(),i=(a,l)=>{n({...e,[l]:a})},s=a=>{i(a||[],"tags")},o=async()=>{if(e.title.length<16||e.title.length>64){alert("Title must be between 16 and 64 characters");return}if(e.content.length<32||e.content.length>8192){alert("Content must be between 32 and 8192 characters");return}if(e.tags.length===0){alert("You must select at least one tag");return}let a=e.tags.length>0?e.tags.map(l=>l.value):[];await tD(t.username,e.title,e.content,e.topic,a),n({title:"",content:"",tags:[]}),r("/posts")};return f.jsx(f.Fragment,{children:t.isBlocked?f.jsxs("h1",{className:"shadow shadow-2xl box rounded-md flex flex-row  border border-amber-950 text-wrap ml-7 mr-7 mt-7 mb-7",children:["You can't create a new post because you are banned. Sorry not sorry. Hasta la vista, baby."," "]}):f.jsx("div",{className:"relative w-full flex flex-col justify-center mt-12",children:f.jsxs("div",{className:"w-full p-6 m-auto rounded-md shadow-2xl lg:max-w-xl border border-amber-950",children:[f.jsx("h1",{className:"text-3xl font-semibold text-center",children:"Create a post"}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"input-title",children:"Title: "}),f.jsx("input",{placeholder:"Title",className:"w-full input input-bordered",value:e.title,onChange:a=>i(a.target.value,"title"),type:"text",name:"input-title",id:"username"})]}),f.jsx("br",{}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"input-topic",children:"Topic"}),f.jsxs("select",{className:"select select-bordered w-full",value:e.topic,onChange:a=>i(a.target.value,"topic"),children:[f.jsx("option",{value:"General Discussions",children:"General Discussions"}),f.jsx("option",{value:"Live Matches",children:"Live Matches"}),f.jsx("option",{value:"Men's Tennis",children:"Men's Tennis"}),f.jsx("option",{value:"Women's Tennis",children:"Women's Tennis"})]})]}),f.jsx("br",{}),f.jsx("div",{children:f.jsx(Og,{updateTags:s,alreadySelectedTags:e.tags})}),f.jsx("br",{}),f.jsxs("div",{children:[f.jsx("label",{htmlFor:"input-content",children:"Content:"}),f.jsx("br",{}),f.jsx("textarea",{placeholder:"Content",className:"textarea textarea-bordered textarea-sm w-full",value:e.content,onChange:a=>i(a.target.value,"content"),name:"input-content",id:"input-content",cols:"30",rows:"10"})]}),f.jsx("br",{}),f.jsx("div",{children:f.jsx("button",{className:"btn btn-primary w-full",onClick:o,type:"primary",children:"Create post"})})]})})})};function Qe(t){const e=Object.prototype.toString.call(t);return t instanceof Date||typeof t=="object"&&e==="[object Date]"?new t.constructor(+t):typeof t=="number"||e==="[object Number]"||typeof t=="string"||e==="[object String]"?new Date(t):new Date(NaN)}const _l=43200,c0=1440;let w6={};function b6(){return w6}function d0(t){const e=Qe(t),n=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return n.setUTCFullYear(e.getFullYear()),+t-+n}function zl(t,e){const n=Qe(t),r=Qe(e),i=n.getTime()-r.getTime();return i<0?-1:i>0?1:i}function S6(t,e){const n=Qe(t),r=Qe(e),i=n.getFullYear()-r.getFullYear(),s=n.getMonth()-r.getMonth();return i*12+s}function x6(t){return e=>{const r=(t?Math[t]:Math.trunc)(e);return r===0?0:r}}function C6(t,e){return+Qe(t)-+Qe(e)}function E6(t){const e=Qe(t);return e.setHours(23,59,59,999),e}function k6(t){const e=Qe(t),n=e.getMonth();return e.setFullYear(e.getFullYear(),n+1,0),e.setHours(23,59,59,999),e}function I6(t){const e=Qe(t);return+E6(e)==+k6(e)}function T6(t,e){const n=Qe(t),r=Qe(e),i=zl(n,r),s=Math.abs(S6(n,r));let o;if(s<1)o=0;else{n.getMonth()===1&&n.getDate()>27&&n.setDate(30),n.setMonth(n.getMonth()-i*s);let a=zl(n,r)===-i;I6(Qe(t))&&s===1&&zl(t,r)===1&&(a=!1),o=i*(s-Number(a))}return o===0?0:o}function P6(t,e,n){const r=C6(t,e)/1e3;return x6(n==null?void 0:n.roundingMethod)(r)}const N6={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},O6=(t,e,n)=>{let r;const i=N6[t];return typeof i=="string"?r=i:e===1?r=i.one:r=i.other.replace("{{count}}",e.toString()),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function rf(t){return(e={})=>{const n=e.width?String(e.width):t.defaultWidth;return t.formats[n]||t.formats[t.defaultWidth]}}const R6={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},A6={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},M6={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},L6={date:rf({formats:R6,defaultWidth:"full"}),time:rf({formats:A6,defaultWidth:"full"}),dateTime:rf({formats:M6,defaultWidth:"full"})},D6={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},j6=(t,e,n,r)=>D6[t];function Qs(t){return(e,n)=>{const r=n!=null&&n.context?String(n.context):"standalone";let i;if(r==="formatting"&&t.formattingValues){const o=t.defaultFormattingWidth||t.defaultWidth,a=n!=null&&n.width?String(n.width):o;i=t.formattingValues[a]||t.formattingValues[o]}else{const o=t.defaultWidth,a=n!=null&&n.width?String(n.width):t.defaultWidth;i=t.values[a]||t.values[o]}const s=t.argumentCallback?t.argumentCallback(e):e;return i[s]}}const F6={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},U6={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},V6={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},$6={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},z6={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},B6={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},W6=(t,e)=>{const n=Number(t),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},H6={ordinalNumber:W6,era:Qs({values:F6,defaultWidth:"wide"}),quarter:Qs({values:U6,defaultWidth:"wide",argumentCallback:t=>t-1}),month:Qs({values:V6,defaultWidth:"wide"}),day:Qs({values:$6,defaultWidth:"wide"}),dayPeriod:Qs({values:z6,defaultWidth:"wide",formattingValues:B6,defaultFormattingWidth:"wide"})};function Xs(t){return(e,n={})=>{const r=n.width,i=r&&t.matchPatterns[r]||t.matchPatterns[t.defaultMatchWidth],s=e.match(i);if(!s)return null;const o=s[0],a=r&&t.parsePatterns[r]||t.parsePatterns[t.defaultParseWidth],l=Array.isArray(a)?Y6(a,d=>d.test(o)):G6(a,d=>d.test(o));let u;u=t.valueCallback?t.valueCallback(l):l,u=n.valueCallback?n.valueCallback(u):u;const c=e.slice(o.length);return{value:u,rest:c}}}function G6(t,e){for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&e(t[n]))return n}function Y6(t,e){for(let n=0;n<t.length;n++)if(e(t[n]))return n}function q6(t){return(e,n={})=>{const r=e.match(t.matchPattern);if(!r)return null;const i=r[0],s=e.match(t.parsePattern);if(!s)return null;let o=t.valueCallback?t.valueCallback(s[0]):s[0];o=n.valueCallback?n.valueCallback(o):o;const a=e.slice(i.length);return{value:o,rest:a}}}const K6=/^(\d+)(th|st|nd|rd)?/i,Q6=/\d+/i,X6={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},J6={any:[/^b/i,/^(a|c)/i]},Z6={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},eU={any:[/1/i,/2/i,/3/i,/4/i]},tU={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},nU={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},rU={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},iU={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},sU={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},oU={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},aU={ordinalNumber:q6({matchPattern:K6,parsePattern:Q6,valueCallback:t=>parseInt(t,10)}),era:Xs({matchPatterns:X6,defaultMatchWidth:"wide",parsePatterns:J6,defaultParseWidth:"any"}),quarter:Xs({matchPatterns:Z6,defaultMatchWidth:"wide",parsePatterns:eU,defaultParseWidth:"any",valueCallback:t=>t+1}),month:Xs({matchPatterns:tU,defaultMatchWidth:"wide",parsePatterns:nU,defaultParseWidth:"any"}),day:Xs({matchPatterns:rU,defaultMatchWidth:"wide",parsePatterns:iU,defaultParseWidth:"any"}),dayPeriod:Xs({matchPatterns:sU,defaultMatchWidth:"any",parsePatterns:oU,defaultParseWidth:"any"})},lU={code:"en-US",formatDistance:O6,formatLong:L6,formatRelative:j6,localize:H6,match:aU,options:{weekStartsOn:0,firstWeekContainsDate:1}};function uU(t,e,n){const r=b6(),i=(n==null?void 0:n.locale)??r.locale??lU,s=2520,o=zl(t,e);if(isNaN(o))throw new RangeError("Invalid time value");const a=Object.assign({},n,{addSuffix:n==null?void 0:n.addSuffix,comparison:o});let l,u;o>0?(l=Qe(e),u=Qe(t)):(l=Qe(t),u=Qe(e));const c=P6(u,l),d=(d0(u)-d0(l))/1e3,h=Math.round((c-d)/60);let g;if(h<2)return n!=null&&n.includeSeconds?c<5?i.formatDistance("lessThanXSeconds",5,a):c<10?i.formatDistance("lessThanXSeconds",10,a):c<20?i.formatDistance("lessThanXSeconds",20,a):c<40?i.formatDistance("halfAMinute",0,a):c<60?i.formatDistance("lessThanXMinutes",1,a):i.formatDistance("xMinutes",1,a):h===0?i.formatDistance("lessThanXMinutes",1,a):i.formatDistance("xMinutes",h,a);if(h<45)return i.formatDistance("xMinutes",h,a);if(h<90)return i.formatDistance("aboutXHours",1,a);if(h<c0){const v=Math.round(h/60);return i.formatDistance("aboutXHours",v,a)}else{if(h<s)return i.formatDistance("xDays",1,a);if(h<_l){const v=Math.round(h/c0);return i.formatDistance("xDays",v,a)}else if(h<_l*2)return g=Math.round(h/_l),i.formatDistance("aboutXMonths",g,a)}if(g=T6(u,l),g<12){const v=Math.round(h/_l);return i.formatDistance("xMonths",v,a)}else{const v=g%12,y=Math.trunc(g/12);return v<3?i.formatDistance("aboutXYears",y,a):v<9?i.formatDistance("overXYears",y,a):i.formatDistance("almostXYears",y+1,a)}}function cU(t,e){return uU(t,Date.now(),e)}const VC=({comments:t,commentId:e,postId:n,currentUser:r,isBlocked:i,isAdmin:s,handleDeleteComment:o})=>{const[a,l]=b.useState(!1),[u,c]=b.useState(t.content),[d,h]=b.useState(null);b.useEffect(()=>{(async()=>{if(t!=null&&t.authorId){const w=await ux(t.authorId);w.exists()&&h(w.val()[Object.keys(w.val())[0]])}})()},[t]);const g=()=>{l(!0)},v=async()=>{if(u.length<4||u.length>5e3)return alert("Comment must be between 4 and 5000 characters.");try{await c4(n,e,u),t.content=u}catch(w){console.log(w)}l(!1)},y=()=>{c(t.content),l(!1)};return f.jsxs("div",{className:"shadow shadow-2xl box rounded-md flex flex-row  border border-amber-950 text-wrap ml-7 mr-7 mt-7 mb-7",style:{overflowWrap:"break-word",wordWrap:"break-word"},children:[f.jsx("div",{className:"add-comment w-full ",children:f.jsxs("div",{className:"comment-area flex",children:[f.jsx("div",{className:"flex justify-center ml-3",children:f.jsx("img",{className:"w-24 h-24 sm:w-20 sm:h-20 md:w-16 md:h-16 lg:w-12 lg:h-12 rounded-full ring ring-accent ring-offset-base-100 ring-offset-5 mt-4",src:d==null?void 0:d.avatarUrl})}),f.jsxs("div",{className:"flex flex-col w-full h-full",children:[f.jsxs("div",{className:"comment-author-date w-full flex m-5",children:[f.jsx("p",{className:"comment-author mr-2 font-bold",children:t.author}),f.jsxs("p",{children:["commented ",cU(new Date(t.createdOn))," ago"]})]}),f.jsx("div",{className:"content flex items-stretch w-full mt-3 mb-2",children:a?f.jsx("div",{className:"w-full",children:f.jsx("textarea",{type:"text",value:u,onChange:w=>c(w.target.value),className:"textarea textarea-bordered w-full mr-2",placeholder:"Edit"})}):f.jsx("div",{className:"mb-5 ml-5 mr-5",children:f.jsx("div",{children:t.content.trim().split(`
`).map((w,p)=>f.jsx("p",{className:"text-ellipsis",children:w},p))})})})]})]})}),f.jsxs("div",{className:"comment-buttons flex flex-row items-center justify-end mb-3 ml-auto",children:[(r===t.author||s===!0)&&i===!1&&a&&f.jsx("button",{className:"mr-3",onClick:v,children:f.jsx(Ke,{icon:s4})}),(r===t.author||s===!0)&&i===!1&&a&&f.jsx("button",{className:"mr-5",onClick:y,children:f.jsx(Ke,{icon:l4})}),(r===t.author||s===!0)&&i===!1&&!a&&f.jsx("button",{className:"mr-3",onClick:g,children:f.jsx(Ke,{icon:r4})}),(r===t.author||s===!0)&&!a&&f.jsx("button",{className:"mr-5",onClick:()=>o(e),type:"primary",children:f.jsx(Ke,{icon:o4})})]})]})};VC.propTypes={comments:R.shape({author:R.string,content:R.string,createdOn:R.string,authorId:R.string}),commentId:R.string,postId:R.string,currentUser:R.string,handleDeleteComment:R.func,isBlocked:R.bool,isAdmin:R.bool};const $C=({post:t,togglePostLike:e})=>{var ee;const{userData:n}=b.useContext(_n),r=Ht(),[i,s]=b.useState(!1),[o,a]=b.useState(t),[l,u]=b.useState(t.title),[c,d]=b.useState(t.tags),[h,g]=b.useState(t.content),[v,y]=b.useState(""),[w,p]=b.useState([]),[m,_]=b.useState(0),[S,x]=b.useState(null),[k,E]=b.useState(1),[C]=b.useState(5);b.useEffect(()=>{o&&o.comments?_(Object.keys(o.comments).length):_(0)},[o]),b.useEffect(()=>{(async()=>{const P=await Ac(o.author);u(o.title),g(o.content),d(y6(o.tags)),x(P.val()[Object.keys(P.val())[0]])})()},[o]),b.useEffect(()=>{Yd(o.id).then(p)},[v,o.id]);const A=async()=>{o.liked.includes(n.username)?(iD(n.username,o.id),a(P=>({...P,liked:P.liked.filter(Z=>Z!==n.username)}))):(rD(n.username,o.id),a(P=>({...P,liked:[...P.liked,n.username]}))),e(n.username,o)},N=async()=>{if(i){if(l.length<16||l.length>64){alert("Title must be between 16 and 64 characters.");return}if(h.length<32||h.length>8192){alert("Title must be between 32 and 8192 characters.");return}if(c.length<1){alert("You must choose at least one tag.");return}try{await fx(o.id,l,h,o.views,c.map(Z=>Z.label));const P=await Zm(o.id);a(P)}catch(P){console.error("Failed to update post:",P)}}s(!i)},K=async P=>{if(P.preventDefault(),v.length<4||v.length>5e3){alert("Comment must be between 4 and 5000 characters.");return}try{await u4(o.id,n,v),p(await Yd(o.id)),_(await D_(o.id)),y("")}catch(Z){console.error("Failed to add comment:",Z)}},he=async P=>{try{await d4(o.id,P),p(await Yd(o.id)),_(await D_(o.id))}catch(Z){console.error("Failed to delete comment:",Z)}},We=async()=>{try{await nD(n,o.id),r("/posts")}catch(P){console.error("Failed to delete post:",P)}},at=Math.ceil(Object.keys(w).length/C),ve=[];for(let P=1;P<=at;P++)ve.push(P);const se=k*C,et=se-C,F=Object.keys(w).reverse().slice(et,se),V=P=>E(P);return f.jsx("div",{className:"mt-12",children:f.jsxs("div",{className:"place-content-center flex flex-col w-auto",children:[f.jsxs("div",{className:"card shadow shadow-2xl border border-amber-950 text-wrap mr-5 ml-5",style:{overflowWrap:"break-word"},children:[f.jsxs("div",{className:"post-info w-full justify-between h-1/6 flex flex-row m-2",children:[f.jsx("div",{className:"topic ml-3",children:f.jsx("span",{children:o.topic})}),f.jsxs("div",{className:"author-data flex",children:[f.jsxs("div",{children:[f.jsx("span",{children:`Posted by: ${o.author}`}),f.jsx("br",{}),f.jsx("span",{children:`On: ${o.createdOn}`})]}),f.jsx("div",{children:f.jsx("img",{src:S,className:"w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-12 lg:h-12 rounded-full ring ring-accent ring-offset-base-100 ring-offset-5 mr-4 ml-4",alt:"User Avatar"})})]})]}),i?f.jsxs("div",{id:"edit-post",children:[f.jsxs("div",{className:"mr-5 ml-5 mt-2 mb-2",children:[f.jsx("label",{htmlFor:"input",className:"label",children:f.jsx("span",{className:"text-base label-text",children:"Title"})}),f.jsx("input",{value:l,onChange:P=>u(P.target.value),type:"text",placeholder:"Title",className:"w-full input input-bordered"})]}),f.jsx("div",{className:"mr-5 ml-5 mt-2 mb-2",children:f.jsx(Og,{updateTags:d,alreadySelectedTags:c})}),f.jsxs("div",{className:"mr-5 ml-5 mt-2 mb-2",children:[f.jsx("label",{htmlFor:"textarea",className:"label",children:f.jsx("span",{className:"text-base label-text",children:"Content"})}),f.jsx("textarea",{value:h,onChange:P=>g(P.target.value),type:"text",placeholder:"Edit content",className:"textarea textarea-bordered w-full shadow shadow-2xl"})]})]}):f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"content-title",children:f.jsx("div",{className:"post-title-info",children:f.jsx("div",{className:"post-title text-center mb-10 mt-5",children:f.jsx("p",{className:"text-2xl font-bold",children:o.title})})})}),f.jsx("div",{className:"card content shadow shadow-2xl ml-10 mr-10 mb-5  border border-amber-950",children:f.jsx("p",{className:"ml-5 mr-5 mb-5 mt-5",children:o.content.trim().split(`
`).map((P,Z)=>f.jsxs("p",{children:[P,f.jsx("br",{})]},Z))})})]}),f.jsxs("div",{className:"post-info w-full justify-between h-1/6 flex flex-row ml-2",children:[f.jsx("div",{className:"topic ml-3 mb-5",children:f.jsx("span",{children:o.tags.map((P,Z)=>f.jsx("button",{className:"btn btn-xs mr-1",children:P},Z))})}),f.jsx("div",{className:"author-date mr-3",children:f.jsxs("div",{className:"flex mb-1 justify-between mr-3",children:[f.jsxs("div",{className:"views flex flex-row mr-5",children:[f.jsx("span",{className:"mr-2",children:o==null?void 0:o.views}),f.jsx("div",{children:f.jsx(Ke,{icon:pg})})]}),f.jsxs("div",{className:"views flex flex-row mx-5",children:[f.jsx("span",{className:"mr-2",children:(ee=o.liked)==null?void 0:ee.length}),f.jsx("div",{children:f.jsx(Ke,{icon:hg})})]}),f.jsxs("div",{className:"views flex flex-row ml-5 ",children:[f.jsx("span",{className:"mr-2",children:m}),f.jsx("div",{children:f.jsx(Ke,{icon:mg})})]})]})})]})]}),f.jsxs("div",{className:"buttons mt-4 flex items-center justify-between",children:[f.jsx("div",{className:"like-dislike-button ml-5",children:f.jsx("button",{"data-testid":"like-button",onClick:A,className:" btn btn-outline btn-primary",children:o.liked.includes(n==null?void 0:n.username)?"Dislike":"Like"})}),f.jsx("div",{className:"user-buttons",children:((n==null?void 0:n.username)===o.author||(n==null?void 0:n.isAdmin)===!0)&&(n==null?void 0:n.isBlocked)===!1&&f.jsx(f.Fragment,{children:f.jsxs("div",{className:"edit-button mr-5",children:[i&&f.jsx("button",{onClick:()=>{a(t),s(!1)},className:"btn btn-outline btn-error mr-3",children:"Cancel"}),f.jsx("button",{"data-testid":"edit-button",onClick:()=>{N()},className:" mr-3 btn btn-outline btn-success",children:i?"Save":"Edit"}),f.jsx("button",{"data-testid":"delete-button",onClick:We,className:"btn btn-outline btn-error",children:"Delete"})]})})})]}),n!=null&&n.isBlocked?f.jsxs("h1",{"data-testid":"user-blocked",className:"shadow shadow-2xl box rounded-md flex flex-row border border-amber-950 text-wrap sm:ml-3 sm:mr-3 sm:mt-3 sm:mb-3 md:ml-5 md:mr-5 md:mt-5 md:mb-5 lg:ml-7 lg:mr-7 lg:mt-7 lg:mb-7",style:{fontSize:"1.5em",padding:"10px"},children:["You can't leave a comment because you are banned. Sorry not sorry. Hasta la vista, baby."," "]}):f.jsx("div",{className:"add-comment sm:w-full md:w-3/4 lg:w-3/4 mt-10 sm:ml-5 md:ml-10 lg:ml-20 ",children:f.jsx("form",{onSubmit:K,children:f.jsxs("div",{className:"flex justify-center mb-5",children:[f.jsx("img",{className:"w-24 h-24 lg:w-24 lg:h-24 rounded-full shadow-lg mr-3 ml-3",src:n==null?void 0:n.avatarUrl,alt:"User Avatar"}),f.jsx("div",{className:"flex w-full h-full relative",children:f.jsxs("div",{className:"w-full flex",children:[f.jsx("textarea",{"data-testid":"comment-input",placeholder:"Add your comment ...",className:"textarea textarea-bordered w-5/6 shadow shadow-2xl h-24",value:v,onChange:P=>y(P.target.value)}),f.jsx("div",{className:"add-comment-button 1/6 mt-3 ml-3 flex items",children:f.jsx("button",{"data-testid":"comment-button",className:"btn btn-outline btn-primary",type:"submit",children:"Add comment"})})]})})]})})}),f.jsxs("div",{className:"shadow shadow-2xl border border-amber-950 rounded-md text-wrap mr-5 ml-5 mt-10",style:{overflowWrap:"break-word"},children:[f.jsx("div",{className:"text-center mt-3 mb-3",children:f.jsx("h1",{children:f.jsx("b",{children:"Comments"})})}),f.jsxs("div",{className:"flex-shrink-0 mb-3",children:[Object.keys(w).length===0&&f.jsx("div",{className:"text-center",children:"No comments yet"}),F.map(P=>f.jsx(VC,{comments:w[P],postId:o.id,currentUser:n.username,isBlocked:n.isBlocked,isAdmin:n.isAdmin,commentId:P,handleDeleteComment:he},P)),f.jsxs("div",{className:"justify-center flex",children:[k>1&&f.jsx("button",{className:"join-item btn btn-outline mr-1",onClick:()=>V(k-1),children:"Previous"}),ve.map(P=>f.jsx("button",{className:`join-item btn mr-1 ${P===k?"btn-primary":""}`,onClick:()=>V(P),children:P},P)),k<at&&f.jsx("button",{className:"join-item btn btn-outline",onClick:()=>V(k+1),children:"Next"})]})]})]})]})})};$C.propTypes={post:R.shape({id:R.string,title:R.string,content:R.string,createdOn:R.string,author:R.string,liked:R.array,tags:R.array,topic:R.string}),togglePostLike:R.func};const dU=()=>{const[t,e]=b.useState(null),{id:n}=qI();b.useEffect(()=>{Zm(n).then(e)},[n]);const r=i=>{e({...t,liked:t.liked.includes(i)?t.liked.filter(s=>s!==i):[...t.liked,i]})};return f.jsx(f.Fragment,{children:t&&f.jsx($C,{post:t,togglePostLike:r})})};function Sn({children:t}){const[e]=b.useState(_n),[n,r]=Yx(Oa),i=Ht(),s=Hn();return!r&&!n?f.jsx(L1,{replace:!0,to:"/login",state:{from:s.pathname}}):e.isBlocked===!0?f.jsxs("div",{children:[f.jsxs("h1",{style:{fontSize:"2em"},children:["You can't see posts or leave comments because you are banned. Sorry not sorry. Hasta la vista, baby."," "]}),f.jsx("div",{onClick:()=>i("/"),role:"button",className:"btn m-1",children:"Back"})]}):f.jsx(f.Fragment,{children:t})}Sn.propTypes={children:R.any.isRequired,user:R.object};function fU(){const{user:t,setContext:e}=b.useContext(_n),{userData:n}=b.useContext(_n),[r,i]=b.useState(n==null?void 0:n.avatarUrl),s=Ht();b.useEffect(()=>{i(n==null?void 0:n.avatarUrl)},[n]);const o=async()=>{await v4(),e({user:null,userData:null})};return f.jsx("div",{className:"navbar bg-base-100 mb-10 border rounded flex flex-col lg:flex-row justify-between items-center fixed top-0 w-full z-10 shadow shadow-xl",children:f.jsxs("div",{className:"flex flex-col lg:flex-row justify-between w-full",children:[f.jsxs("div",{className:"flex-none lg:flex",children:[f.jsx("div",{onClick:()=>s("/"),role:"button",className:"btn m-1",children:"Home"}),f.jsxs("div",{className:"dropdown dropdown-hover",children:[f.jsx("div",{tabIndex:0,role:"button",className:"btn m-1",children:"Menu"}),f.jsxs("ul",{tabIndex:0,className:"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52",children:[f.jsx("li",{children:f.jsx(ut,{to:"/posts-create",children:"Create post"})}),f.jsx("li",{children:f.jsx(ut,{to:"/posts",children:"All posts"})}),f.jsx("li",{children:f.jsx(ut,{to:"/general-discussions",children:"General Discussions"})}),f.jsx("li",{children:f.jsx(ut,{to:"/live-matches",children:"Live Matches"})}),f.jsx("li",{children:f.jsx(ut,{to:"/women-s-tennis",children:"Women's Tennis"})}),f.jsx("li",{children:f.jsx(ut,{to:"/men-s-tennis",children:"Men's Tennis"})})]})]})]}),f.jsx("div",{className:"flex-none lg:flex gap-2 mt-4 lg:mt-0",children:t?f.jsxs("div",{className:"dropdown dropdown-end",children:[f.jsx("div",{tabIndex:"0",role:"button",className:"btn btn-ghost btn-circle avatar",children:f.jsx("div",{className:"w-10 rounded-full",children:f.jsx("img",{alt:"User Avatar",src:r})})}),f.jsxs("ul",{tabIndex:"0",className:"mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52",children:[(n==null?void 0:n.isAdmin)&&f.jsx("li",{children:f.jsx(ut,{to:"/admin",children:"Admin panel"})}),f.jsx("li",{children:f.jsx(ut,{to:"/profile",children:"Profile"})}),f.jsx("li",{onClick:o,role:"button",children:f.jsx(ut,{to:"/",children:"Log out"})})]})]}):f.jsx("div",{children:f.jsxs("ul",{className:"menu menu-vertical lg:menu-horizontal bg-base-200 rounded-box",children:[f.jsx("li",{children:f.jsx(ut,{to:"/register",children:"Register"})}),f.jsx("div",{className:"divider divider-horizontal"}),f.jsx("li",{children:f.jsx(ut,{to:"/login",children:"Log in"})})]})})})]})})}const zC=({userData:t,setContext:e})=>{const[n,r]=b.useState(t||{}),[i,s]=b.useState(null),[o,a]=b.useState(null),l=d=>{s(d.target.files[0])},u=d=>{r({...n,[d.target.name]:d.target.value})};b.useEffect(()=>{if(!i){a(null);return}const d=URL.createObjectURL(i);return a(d),()=>URL.revokeObjectURL(d)},[i]);const c=async d=>{if(d.preventDefault(),n.firstName.length<4||n.firstName.length>32){alert("First name must be between 4 and 32 characters.");return}if(n.lastName.length<4||n.lastName.length>32){alert("Last name must be between 4 and 32 characters.");return}try{let h=t==null?void 0:t.avatarUrl;if(i){const v=GL(JL,`avatars/${t.username}`);await WL(v,i),h=await HL(v)}const g={...n,avatarUrl:h};await dx(t.username,g),e(v=>({...v,userData:g}))}catch(h){console.error("Failed to update user:",h)}};return f.jsx("div",{className:"flex flex-col lg:flex-row w-full",children:f.jsx("form",{onSubmit:c,className:"border border-amber-950 shadow-2xl sm:rounded-xl sm:overflow-hidden w-full lg:w-5/6 mr-5",children:f.jsxs("div",{className:" py-6 px-4 sm:p-6 flex flex-col lg:flex-col",children:[f.jsxs("div",{id:"upper-part",className:"flex",children:[f.jsx("div",{id:"upper-firs-column",className:"w-full lg:w-1/2 flex flex-col justify-center items-center",children:f.jsxs("div",{className:"flex flex-col w-3/4",children:[f.jsx("label",{htmlFor:"",children:"Photo"}),f.jsxs("div",{className:"items-start flex flex-col mt-2",children:[f.jsx("div",{className:"avatar",children:f.jsx("div",{className:"w-28 rounded-full",children:f.jsx("img",{src:o||(t==null?void 0:t.avatarUrl)})})}),f.jsx("input",{type:"file",onChange:l,className:"file-input w-full max-w-xs mt-2"})]})]})}),f.jsx("div",{id:"upper-second-column",className:"w-full lg:w-1/2 flex flex-col justify-center items-center"})]}),f.jsxs("div",{id:"bottom-part",className:"flex mt-5",children:[f.jsxs("div",{id:"firs-column",className:"w-full lg:w-1/2 flex flex-col justify-center items-center",children:[f.jsxs("div",{className:"flex flex-col w-3/4",children:[f.jsx("label",{htmlFor:"",children:"User name"}),f.jsx("input",{type:"text",name:"username",value:n==null?void 0:n.username,onChange:u,className:"input input-bordered w-full mt-2"})]}),f.jsxs("div",{className:"flex flex-col w-3/4",children:[f.jsx("label",{htmlFor:"",children:"Email"}),f.jsx("input",{type:"text",name:"email",value:n==null?void 0:n.email,onChange:u,className:"input input-bordered w-full mt-2"})]})]}),f.jsxs("div",{id:"second-column",className:"w-full lg:w-1/2 flex flex-col justify-center items-center",children:[f.jsxs("div",{className:"flex flex-col w-3/4",children:[f.jsx("label",{htmlFor:"",children:"First name"}),f.jsx("input",{type:"text",name:"firstName",value:n==null?void 0:n.firstName,onChange:u,className:"input input-bordered w-full mt-2"})]}),f.jsxs("div",{className:"flex flex-col w-3/4",children:[f.jsx("label",{htmlFor:"",children:"Last name"}),f.jsx("input",{type:"text",name:"lastName",value:n==null?void 0:n.lastName,onChange:u,className:"input input-bordered w-full mt-2"})]})]})]}),f.jsxs("div",{id:"button-part",className:"flex mt-5 justify-between mr-20",children:[f.jsx("div",{}),f.jsx("button",{type:"submit",className:"btn btn-outline btn-accent",children:"Save"})]})]})})})};zC.propTypes={userData:R.object,setContext:R.func};const BC=({userData:t})=>{const[e,n]=b.useState([]);return b.useEffect(()=>{Mc().then(r=>{const s=r.filter(o=>o.comments&&Object.keys(o.comments).some(a=>o.comments[a].author===t.username)).flatMap(o=>Object.values(o.comments||{}).filter(a=>a.author===t.username).map(a=>({...a,postId:o.id,createdOn:new Date(a.createdOn).toLocaleString("en-US",{month:"short",day:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0})})));n(s)})},[t]),f.jsx("div",{className:"flex flex-col lg:flex-row w-full",children:f.jsx("div",{className:"border border-amber-950 shadow-2xl sm:rounded-xl sm:overflow-hidden w-full lg:w-5/6 mr-5",children:f.jsx("div",{className:" py-6 px-4 sm:p-6 flex flex-col lg:flex-col",children:f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"table min-w-full",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"№"}),f.jsx("th",{children:"Created on"}),f.jsx("th",{children:"Content"}),f.jsx("th",{children:"Stats"})]})}),f.jsx("tbody",{children:e.length>0?e.map((r,i)=>f.jsxs("tr",{children:[f.jsx("th",{children:i+1}),f.jsx("td",{children:r.createdOn}),f.jsx("td",{children:r.content}),f.jsx("td",{children:f.jsx(ut,{to:`/posts/${r.postId}`,children:"View post"})})]},r.id)):f.jsx("tr",{children:f.jsx("td",{colSpan:5,className:"font-semibold mt-3",children:"No comments to display."})})})]})})})})})};BC.propTypes={userData:R.object};const WC=({userData:t})=>{const[e,n]=b.useState([]);return b.useEffect(()=>{Mc().then(r=>{const i=r.filter(s=>s.author===t.username);n(i)})},[t]),f.jsx("div",{className:"flex flex-col lg:flex-row w-full",children:f.jsx("div",{className:"border border-amber-950 shadow-2xl sm:rounded-xl sm:overflow-hidden w-full lg:w-5/6 mr-5",children:f.jsx("div",{className:" py-6 px-4 sm:p-6 flex flex-col lg:flex-col",children:f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"table min-w-full",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsx("th",{children:"№"}),f.jsx("th",{children:"Created on"}),f.jsx("th",{children:"Title"}),f.jsx("th",{children:"Stats"})]})}),f.jsx("tbody",{children:e.length>0?e.map((r,i)=>{var s;return f.jsxs("tr",{children:[f.jsx("th",{children:i+1}),f.jsx("td",{children:r.createdOn}),f.jsx("td",{children:r.title}),f.jsx("td",{children:f.jsxs("div",{className:"flex mb-1 justify-between",children:[f.jsxs("div",{className:"views flex flex-row",children:[f.jsx("span",{className:"mr-2",children:r==null?void 0:r.views}),f.jsx("div",{children:f.jsx(Ke,{icon:pg})})]}),f.jsxs("div",{className:"views flex flex-row",children:[f.jsx("span",{className:"mr-2",children:((s=r==null?void 0:r.liked)==null?void 0:s.length)||0}),f.jsx("div",{children:f.jsx(Ke,{icon:hg})})]}),f.jsxs("div",{className:"views flex flex-row",children:[f.jsx("span",{className:"mr-2",children:Object.keys((r==null?void 0:r.comments)||{}).length}),f.jsx("div",{children:f.jsx(Ke,{icon:mg})})]})]})}),f.jsx("td",{children:f.jsx(ut,{to:`/posts/${r.id}`,children:"View post"})})]},r.id)}):f.jsx("tr",{children:f.jsx("td",{colSpan:5,className:"font-semibold mt-3",children:"No posts to display."})})})]})})})})})};WC.propTypes={userData:R.object};const hU=()=>{const{userData:t,setContext:e}=b.useContext(_n),[n,r]=b.useState("profile"),i={profile:f.jsx(zC,{userData:t,setContext:e}),"my-posts":f.jsx(WC,{userData:t}),"my-comments":f.jsx(BC,{userData:t})};return f.jsxs("div",{className:"flex flex-col lg:flex-row lg:space-x-10",children:[f.jsx("aside",{className:"py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:w-1/6 ml-5 mb-5 lg:mb-0",children:f.jsx("div",{className:"w-full lg:w-56",children:f.jsxs("ul",{className:"menu w-full lg:w-56 rounded-box border border-amber-950 shadow-2xl",children:[f.jsx("li",{onClick:()=>r("profile"),children:f.jsx("a",{children:"Profile"})}),f.jsx("li",{onClick:()=>r("my-posts"),children:f.jsx("a",{children:"My Posts"})}),f.jsx("li",{onClick:()=>r("my-comments"),children:f.jsx("a",{children:"My Comments"})})]})})}),f.jsx("div",{className:"w-full lg:ml-0",children:i[n]})]})},pU=()=>f.jsx("div",{className:"flex items-center justify-center min-h-screen",children:f.jsx("span",{className:"loading loading-dots loading-lg"})}),HC=({postsFromProps:t})=>{const[e,n]=b.useState([]),[r,i]=CT(),[s,o]=b.useState("newest"),[a,l]=b.useState(1),[u]=b.useState(5),[c,d]=b.useState(!1),h=Ht(),g=r.get("search")||"",v=C=>{i({search:C})};if(b.useEffect(()=>{const C=t.filter(A=>A.title.toLowerCase().includes(g.toLowerCase()));n(C),t.length>0&&d(!0)},[g,t]),!c)return f.jsx(pU,{});const y=(C,A)=>{n(e.map(N=>(N.id===A&&(N.liked=N.liked.includes(C)?N.liked.filter(K=>K!==C):[...N.liked,C]),N)))},w=C=>{switch(s){case"newest":return[...C].sort((A,N)=>new Date(N.createdOn)-new Date(A.createdOn));case"oldest":return[...C].sort((A,N)=>new Date(A.createdOn)-new Date(N.createdOn));case"mostLiked":return[...C].sort((A,N)=>N.liked.length-A.liked.length);case"mostCommented":return[...C].sort((A,N)=>(N.comments?Object.values(N.comments).length:0)-(A.comments?Object.values(A.comments).length:0));case"mostViews":return[...C].sort((A,N)=>(N.views?N.views:0)-(A.views?A.views:0));default:return C}},p=Math.ceil(e.length/u),m=[];for(let C=1;C<=p;C++)m.push(C);const _=w(e),S=a*u,x=S-u,k=_.slice(x,S),E=C=>l(C);return(e==null?void 0:e.length)>0?f.jsxs("div",{className:"posts w-full mt-12 mb-5",children:[f.jsx("div",{className:"my-nav flex justify-center items-center h-auto mb-10 sm:flex-col md:flex-row",children:f.jsxs("div",{className:"card w-full sm:w-3/4 flex flex-col sm:flex-row justify-between",children:[f.jsx("div",{className:"search",children:f.jsx("div",{className:"form-control",children:f.jsx("input",{value:g,onChange:C=>v(C.target.value),type:"text",placeholder:"Search",className:"input input-bordered w-full sm:w-24 md:w-auto"})})}),f.jsxs("div",{className:"flex flex-col sm:flex-row",children:[f.jsx("div",{className:"create-post",children:f.jsx("div",{onClick:()=>h("/posts-create"),role:"button",className:"btn m-1",children:"Create Post"})}),f.jsx("div",{className:"sort",children:f.jsxs("div",{className:"dropdown dropdown-bottom",children:[f.jsx("div",{tabIndex:0,role:"button",className:"btn m-1",children:"Sort By"}),f.jsxs("ul",{tabIndex:0,className:"dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52",children:[f.jsx("li",{children:f.jsx("a",{onClick:()=>o("newest"),children:"Newest"})}),f.jsx("li",{children:f.jsx("a",{onClick:()=>o("oldest"),children:"Oldest"})}),f.jsx("li",{children:f.jsx("a",{onClick:()=>o("mostLiked"),children:"Most Liked"})}),f.jsx("li",{children:f.jsx("a",{onClick:()=>o("mostCommented"),children:"Most Commented"})}),f.jsx("li",{children:f.jsx("a",{onClick:()=>o("mostViews"),children:"Most Views"})})]})]})})]})]})}),f.jsx("div",{id:"all-posts",children:k.map(C=>f.jsx(gg,{post:C,togglePostLike:y},C.id))}),f.jsxs("div",{className:"justify-center flex",children:[a>1&&f.jsx("button",{className:"join-item btn btn-outline mr-1",onClick:()=>E(a-1),children:"Previous"}),m.map(C=>f.jsx("button",{className:`join-item btn mr-1 ${C===a?"btn-primary":""}`,onClick:()=>E(C),children:C},C)),a<p&&f.jsx("button",{className:"join-item btn btn-outline",onClick:()=>E(a+1),children:"Next"})]})]}):f.jsxs("div",{children:[f.jsx("h1",{className:"text-2xl",children:"No posts found. Do you want to create one?"}),f.jsx("div",{className:"create-post",children:f.jsx("button",{onClick:()=>h("/posts-create"),role:"button",className:"btn m-1",children:"Create Post"})}),f.jsx("button",{onClick:()=>h("/posts"),role:"button",className:"btn m-1",children:"Back"})]})};HC.propTypes={postsFromProps:R.array};const Ti=({filter:t})=>{const[e,n]=b.useState([]);return b.useEffect(()=>{Mc().then(r=>{n(t?r.filter(i=>i.topic===t):r)})},[t]),f.jsx(HC,{postsFromProps:e})};Ti.propTypes={filter:R.string};const mU=()=>f.jsx("footer",{className:"rounded-lg footer footer-center p-4 bg-base-300 text-base-content mt-10",children:f.jsx("aside",{children:f.jsx("p",{children:"Copyright © 2024 - All rights reserved by Project-X Tennis Forum"})})}),gU=()=>{const t=Ht();return f.jsx("div",{className:"hero",children:f.jsxs("div",{className:"hero-content flex-col lg:flex-row",children:[f.jsx("div",{className:"image",children:f.jsx("img",{className:"rounded-lg",src:"https://i.imgur.com/dBR6coT.jpg"})}),f.jsxs("div",{className:"flex flex-col",children:[f.jsxs("div",{className:"info",children:[f.jsx("h3",{className:"text-6xl font-extrabold text-center mb-20",children:"Ace of 404s"}),f.jsxs("p",{className:"text-2xl",children:["You just aced our 404 page! Unfortunately, it's not the kind of ace we were hoping for. Double-fault your way back to the home page to continue the match","."]})]}),f.jsx("div",{className:"mt-3",children:f.jsx("button",{onClick:()=>t("/"),className:"btn btn-primary",children:"Go back"})})]})]})})};function GC({children:t}){const{userData:e}=b.useContext(_n);return e!=null&&e.isAdmin?t:f.jsx(L1,{to:"/"})}GC.propTypes={children:R.any.isRequired,userData:R.object};const vU=()=>{const[t,e]=b.useState([]),[n,r]=b.useState(1),[i,s]=b.useState(""),o=6;b.useEffect(()=>{(async()=>{let p=(await cx()).val();p=p?Object.values(p):[];for(let m of p){const S=(await eD(m.username)).val();m.postCount=S?Object.keys(S).length:0}e(p)})()},[]);const a=async y=>{const p=(await Ac(y)).val();p.isBlocked=!p.isBlocked,await dx(y,{isBlocked:p.isBlocked}),e(m=>m.map(_=>_.username===y?{..._,isBlocked:p.isBlocked}:_))};console.log(t);const l=t.filter(y=>y.username.toLowerCase().includes(i.toLowerCase())),u=Math.ceil(l.length/o),c=[];for(let y=1;y<=u;y++)c.push(y);const d=n*o,h=d-o,g=l.slice(h,d),v=y=>r(y);return f.jsxs("div",{className:"overflow-x-auto",children:[f.jsx("input",{className:"input input-bordered w-24 md:w-auto mt-2 mb-2 ml-2",type:"text",value:i,onChange:y=>s(y.target.value),placeholder:"Search users"}),f.jsxs("table",{className:"table",children:[f.jsx("thead",{children:f.jsxs("tr",{children:[f.jsxs("th",{children:["Ban ",f.jsx("br",{})," hammer"]}),f.jsx("th",{children:"User name"}),f.jsx("th",{children:"Email"}),f.jsx("th",{children:"Number of posts"}),f.jsx("th",{children:"Banned"}),f.jsx("th",{})]})}),f.jsx("tbody",{children:g.map(y=>f.jsxs("tr",{children:[f.jsx("th",{children:f.jsx("label",{children:f.jsx("input",{type:"checkbox",className:"checkbox",checked:y.isBlocked,onChange:()=>a(y.username)})})}),f.jsx("td",{children:f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"avatar",children:f.jsx("div",{className:"mask mask-squircle w-12 h-12",children:f.jsx("img",{src:y.avatarUrl,alt:"User avatar"})})}),f.jsxs("div",{children:[f.jsx("div",{className:"font-bold",children:y.username}),f.jsx("div",{className:"text-sm opacity-50",children:`${y.firstName} ${y.lastName}`})]})]})}),f.jsx("td",{children:f.jsx("div",{className:"email",children:y.email})}),f.jsx("th",{children:f.jsxs("div",{className:"font-normal",children:[y.postCount," posts"]})}),f.jsx("th",{children:f.jsx("div",{className:"blocked",children:y.isBlocked.toString()})})]},y.uid))})]}),f.jsxs("div",{className:"justify-center flex mt-5",children:[n>1&&f.jsx("button",{className:"join-item btn btn-outline mr-1",onClick:()=>v(n-1),children:"Previous"}),c.map(y=>f.jsx("button",{className:`join-item btn mr-1 ${y===n?"btn-primary":""}`,onClick:()=>v(y),children:y},y)),n<u&&f.jsx("button",{className:"join-item btn btn-outline",onClick:()=>v(n+1),children:"Next"})]})]})};function yU(){const[t,e]=b.useState({user:null,userData:null}),[n,r]=Yx(Oa);return b.useEffect(()=>{n&&ux(n.uid).then(i=>{i.exists()&&e({user:n,userData:i.val()[Object.keys(i.val())[0]]})})},[n]),f.jsx(_n.Provider,{value:{...t,setContext:e},children:f.jsxs(yT,{children:[f.jsx(fU,{}),f.jsx("div",{className:"min-h-screen place-content-center flex flex-row flex-wrap content-center shrink pt-28",children:f.jsx("div",{className:"flex-wrap content-center justify-center max-w-screen-2xl w-full h-auto",children:f.jsxs(uT,{children:[f.jsx(gt,{path:"/",element:f.jsx(p4,{})}),f.jsx(gt,{path:"/register",element:f.jsx(y4,{})}),f.jsx(gt,{path:"/login",element:f.jsx(_4,{})}),f.jsx(gt,{path:"/posts",element:f.jsx(Sn,{children:f.jsx(Ti,{filter:null})})}),f.jsx(gt,{path:"/profile",element:f.jsx(Sn,{children:f.jsx(hU,{})})}),f.jsx(gt,{path:"/posts/:id",element:f.jsx(Sn,{children:f.jsx(dU,{})})}),f.jsx(gt,{path:"/posts-create",element:f.jsx(Sn,{children:f.jsx(_6,{})})}),f.jsx(gt,{path:"/general-discussions",element:f.jsx(Sn,{children:f.jsx(Ti,{filter:"General Discussions"})})}),f.jsx(gt,{path:"/live-matches",element:f.jsx(Sn,{children:f.jsx(Ti,{filter:"Live Matches"})})}),f.jsx(gt,{path:"/men-s-tennis",element:f.jsx(Sn,{children:f.jsx(Ti,{filter:"Men's Tennis"})})}),f.jsx(gt,{path:"/women-s-tennis",element:f.jsx(Sn,{children:f.jsx(Ti,{filter:"Women's Tennis"})})}),f.jsx(gt,{path:"/admin",element:f.jsx(GC,{userData:t.userData,children:f.jsx(vU,{})})}),f.jsx(gt,{path:"*",element:f.jsx(gU,{})})]})})}),f.jsx(mU,{})]})})}of.createRoot(document.getElementById("root")).render(f.jsx(Xu.StrictMode,{children:f.jsx(yU,{})}));
