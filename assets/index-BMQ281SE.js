(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerPolicy&&(u.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?u.credentials="include":s.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(s){if(s.ep)return;s.ep=!0;const u=n(s);fetch(s.href,u)}})();function pS(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var zd={exports:{}},kl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv;function J1(){if(Wv)return kl;Wv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,s,u){var c=null;if(u!==void 0&&(c=""+u),s.key!==void 0&&(c=""+s.key),"key"in s){u={};for(var f in s)f!=="key"&&(u[f]=s[f])}else u=s;return s=u.ref,{$$typeof:o,type:a,key:c,ref:s!==void 0?s:null,props:u}}return kl.Fragment=t,kl.jsx=n,kl.jsxs=n,kl}var qv;function $1(){return qv||(qv=1,zd.exports=J1()),zd.exports}var B=$1(),Id={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv;function tE(){if(jv)return se;jv=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),g=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=g&&I[g]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,x={};function y(I,j,mt){this.props=I,this.context=j,this.refs=x,this.updater=mt||M}y.prototype.isReactComponent={},y.prototype.setState=function(I,j){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,j,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function R(){}R.prototype=y.prototype;function U(I,j,mt){this.props=I,this.context=j,this.refs=x,this.updater=mt||M}var w=U.prototype=new R;w.constructor=U,E(w,y.prototype),w.isPureReactComponent=!0;var O=Array.isArray;function P(){}var L={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function C(I,j,mt){var Tt=mt.ref;return{$$typeof:o,type:I,key:j,ref:Tt!==void 0?Tt:null,props:mt}}function $(I,j){return C(I.type,j,I.props)}function G(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function Y(I){var j={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(mt){return j[mt]})}var Q=/\/+/g;function it(I,j){return typeof I=="object"&&I!==null&&I.key!=null?Y(""+I.key):j.toString(36)}function Z(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(P,P):(I.status="pending",I.then(function(j){I.status==="pending"&&(I.status="fulfilled",I.value=j)},function(j){I.status==="pending"&&(I.status="rejected",I.reason=j)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function F(I,j,mt,Tt,Ut){var rt=typeof I;(rt==="undefined"||rt==="boolean")&&(I=null);var xt=!1;if(I===null)xt=!0;else switch(rt){case"bigint":case"string":case"number":xt=!0;break;case"object":switch(I.$$typeof){case o:case t:xt=!0;break;case _:return xt=I._init,F(xt(I._payload),j,mt,Tt,Ut)}}if(xt)return Ut=Ut(I),xt=Tt===""?"."+it(I,0):Tt,O(Ut)?(mt="",xt!=null&&(mt=xt.replace(Q,"$&/")+"/"),F(Ut,j,mt,"",function(Qt){return Qt})):Ut!=null&&(G(Ut)&&(Ut=$(Ut,mt+(Ut.key==null||I&&I.key===Ut.key?"":(""+Ut.key).replace(Q,"$&/")+"/")+xt)),j.push(Ut)),1;xt=0;var At=Tt===""?".":Tt+":";if(O(I))for(var kt=0;kt<I.length;kt++)Tt=I[kt],rt=At+it(Tt,kt),xt+=F(Tt,j,mt,rt,Ut);else if(kt=S(I),typeof kt=="function")for(I=kt.call(I),kt=0;!(Tt=I.next()).done;)Tt=Tt.value,rt=At+it(Tt,kt++),xt+=F(Tt,j,mt,rt,Ut);else if(rt==="object"){if(typeof I.then=="function")return F(Z(I),j,mt,Tt,Ut);throw j=String(I),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return xt}function H(I,j,mt){if(I==null)return I;var Tt=[],Ut=0;return F(I,Tt,"","",function(rt){return j.call(mt,rt,Ut++)}),Tt}function ot(I){if(I._status===-1){var j=I._result;j=j(),j.then(function(mt){(I._status===0||I._status===-1)&&(I._status=1,I._result=mt)},function(mt){(I._status===0||I._status===-1)&&(I._status=2,I._result=mt)}),I._status===-1&&(I._status=0,I._result=j)}if(I._status===1)return I._result.default;throw I._result}var ct=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)},St={map:H,forEach:function(I,j,mt){H(I,function(){j.apply(this,arguments)},mt)},count:function(I){var j=0;return H(I,function(){j++}),j},toArray:function(I){return H(I,function(j){return j})||[]},only:function(I){if(!G(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return se.Activity=v,se.Children=St,se.Component=y,se.Fragment=n,se.Profiler=s,se.PureComponent=U,se.StrictMode=a,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,se.__COMPILER_RUNTIME={__proto__:null,c:function(I){return L.H.useMemoCache(I)}},se.cache=function(I){return function(){return I.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(I,j,mt){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var Tt=E({},I.props),Ut=I.key;if(j!=null)for(rt in j.key!==void 0&&(Ut=""+j.key),j)!T.call(j,rt)||rt==="key"||rt==="__self"||rt==="__source"||rt==="ref"&&j.ref===void 0||(Tt[rt]=j[rt]);var rt=arguments.length-2;if(rt===1)Tt.children=mt;else if(1<rt){for(var xt=Array(rt),At=0;At<rt;At++)xt[At]=arguments[At+2];Tt.children=xt}return C(I.type,Ut,Tt)},se.createContext=function(I){return I={$$typeof:c,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:u,_context:I},I},se.createElement=function(I,j,mt){var Tt,Ut={},rt=null;if(j!=null)for(Tt in j.key!==void 0&&(rt=""+j.key),j)T.call(j,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(Ut[Tt]=j[Tt]);var xt=arguments.length-2;if(xt===1)Ut.children=mt;else if(1<xt){for(var At=Array(xt),kt=0;kt<xt;kt++)At[kt]=arguments[kt+2];Ut.children=At}if(I&&I.defaultProps)for(Tt in xt=I.defaultProps,xt)Ut[Tt]===void 0&&(Ut[Tt]=xt[Tt]);return C(I,rt,Ut)},se.createRef=function(){return{current:null}},se.forwardRef=function(I){return{$$typeof:f,render:I}},se.isValidElement=G,se.lazy=function(I){return{$$typeof:_,_payload:{_status:-1,_result:I},_init:ot}},se.memo=function(I,j){return{$$typeof:d,type:I,compare:j===void 0?null:j}},se.startTransition=function(I){var j=L.T,mt={};L.T=mt;try{var Tt=I(),Ut=L.S;Ut!==null&&Ut(mt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(P,ct)}catch(rt){ct(rt)}finally{j!==null&&mt.types!==null&&(j.types=mt.types),L.T=j}},se.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},se.use=function(I){return L.H.use(I)},se.useActionState=function(I,j,mt){return L.H.useActionState(I,j,mt)},se.useCallback=function(I,j){return L.H.useCallback(I,j)},se.useContext=function(I){return L.H.useContext(I)},se.useDebugValue=function(){},se.useDeferredValue=function(I,j){return L.H.useDeferredValue(I,j)},se.useEffect=function(I,j){return L.H.useEffect(I,j)},se.useEffectEvent=function(I){return L.H.useEffectEvent(I)},se.useId=function(){return L.H.useId()},se.useImperativeHandle=function(I,j,mt){return L.H.useImperativeHandle(I,j,mt)},se.useInsertionEffect=function(I,j){return L.H.useInsertionEffect(I,j)},se.useLayoutEffect=function(I,j){return L.H.useLayoutEffect(I,j)},se.useMemo=function(I,j){return L.H.useMemo(I,j)},se.useOptimistic=function(I,j){return L.H.useOptimistic(I,j)},se.useReducer=function(I,j,mt){return L.H.useReducer(I,j,mt)},se.useRef=function(I){return L.H.useRef(I)},se.useState=function(I){return L.H.useState(I)},se.useSyncExternalStore=function(I,j,mt){return L.H.useSyncExternalStore(I,j,mt)},se.useTransition=function(){return L.H.useTransition()},se.version="19.2.4",se}var Yv;function Fm(){return Yv||(Yv=1,Id.exports=tE()),Id.exports}var Zt=Fm();const eE=pS(Zt);var Bd={exports:{}},Xl={},Hd={exports:{}},Gd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv;function nE(){return Zv||(Zv=1,(function(o){function t(F,H){var ot=F.length;F.push(H);t:for(;0<ot;){var ct=ot-1>>>1,St=F[ct];if(0<s(St,H))F[ct]=H,F[ot]=St,ot=ct;else break t}}function n(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var H=F[0],ot=F.pop();if(ot!==H){F[0]=ot;t:for(var ct=0,St=F.length,I=St>>>1;ct<I;){var j=2*(ct+1)-1,mt=F[j],Tt=j+1,Ut=F[Tt];if(0>s(mt,ot))Tt<St&&0>s(Ut,mt)?(F[ct]=Ut,F[Tt]=ot,ct=Tt):(F[ct]=mt,F[j]=ot,ct=j);else if(Tt<St&&0>s(Ut,ot))F[ct]=Ut,F[Tt]=ot,ct=Tt;else break t}}return H}function s(F,H){var ot=F.sortIndex-H.sortIndex;return ot!==0?ot:F.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var c=Date,f=c.now();o.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,v=null,g=3,S=!1,M=!1,E=!1,x=!1,y=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function w(F){for(var H=n(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=F)a(d),H.sortIndex=H.expirationTime,t(p,H);else break;H=n(d)}}function O(F){if(E=!1,w(F),!M)if(n(p)!==null)M=!0,P||(P=!0,Y());else{var H=n(d);H!==null&&Z(O,H.startTime-F)}}var P=!1,L=-1,T=5,C=-1;function $(){return x?!0:!(o.unstable_now()-C<T)}function G(){if(x=!1,P){var F=o.unstable_now();C=F;var H=!0;try{t:{M=!1,E&&(E=!1,R(L),L=-1),S=!0;var ot=g;try{e:{for(w(F),v=n(p);v!==null&&!(v.expirationTime>F&&$());){var ct=v.callback;if(typeof ct=="function"){v.callback=null,g=v.priorityLevel;var St=ct(v.expirationTime<=F);if(F=o.unstable_now(),typeof St=="function"){v.callback=St,w(F),H=!0;break e}v===n(p)&&a(p),w(F)}else a(p);v=n(p)}if(v!==null)H=!0;else{var I=n(d);I!==null&&Z(O,I.startTime-F),H=!1}}break t}finally{v=null,g=ot,S=!1}H=void 0}}finally{H?Y():P=!1}}}var Y;if(typeof U=="function")Y=function(){U(G)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,it=Q.port2;Q.port1.onmessage=G,Y=function(){it.postMessage(null)}}else Y=function(){y(G,0)};function Z(F,H){L=y(function(){F(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return g},o.unstable_next=function(F){switch(g){case 1:case 2:case 3:var H=3;break;default:H=g}var ot=g;g=H;try{return F()}finally{g=ot}},o.unstable_requestPaint=function(){x=!0},o.unstable_runWithPriority=function(F,H){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var ot=g;g=F;try{return H()}finally{g=ot}},o.unstable_scheduleCallback=function(F,H,ot){var ct=o.unstable_now();switch(typeof ot=="object"&&ot!==null?(ot=ot.delay,ot=typeof ot=="number"&&0<ot?ct+ot:ct):ot=ct,F){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=ot+St,F={id:_++,callback:H,priorityLevel:F,startTime:ot,expirationTime:St,sortIndex:-1},ot>ct?(F.sortIndex=ot,t(d,F),n(p)===null&&F===n(d)&&(E?(R(L),L=-1):E=!0,Z(O,ot-ct))):(F.sortIndex=St,t(p,F),M||S||(M=!0,P||(P=!0,Y()))),F},o.unstable_shouldYield=$,o.unstable_wrapCallback=function(F){var H=g;return function(){var ot=g;g=H;try{return F.apply(this,arguments)}finally{g=ot}}}})(Gd)),Gd}var Kv;function iE(){return Kv||(Kv=1,Hd.exports=nE()),Hd.exports}var Vd={exports:{}},zn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qv;function aE(){if(Qv)return zn;Qv=1;var o=Fm();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},s=Symbol.for("react.portal");function u(p,d,_){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:v==null?null:""+v,children:p,containerInfo:d,implementation:_}}var c=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return zn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,zn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return u(p,d,null,_)},zn.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},zn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},zn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},zn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin),g=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:v,integrity:g,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:v,integrity:g,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},zn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},zn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,v=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:v,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},zn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},zn.requestFormReset=function(p){a.d.r(p)},zn.unstable_batchedUpdates=function(p,d){return p(d)},zn.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},zn.useFormStatus=function(){return c.H.useHostTransitionStatus()},zn.version="19.2.4",zn}var Jv;function rE(){if(Jv)return Vd.exports;Jv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Vd.exports=aE(),Vd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v;function sE(){if($v)return Xl;$v=1;var o=iE(),t=Fm(),n=rE();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)i+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,r=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(r=i.return),e=i.return;while(e)}return i.tag===3?r:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(a(188));return i!==e?null:e}for(var r=e,l=i;;){var h=r.return;if(h===null)break;var m=h.alternate;if(m===null){if(l=h.return,l!==null){r=l;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===r)return p(h),e;if(m===l)return p(h),i;m=m.sibling}throw Error(a(188))}if(r.return!==l.return)r=h,l=m;else{for(var b=!1,D=h.child;D;){if(D===r){b=!0,r=h,l=m;break}if(D===l){b=!0,l=h,r=m;break}D=D.sibling}if(!b){for(D=m.child;D;){if(D===r){b=!0,r=m,l=h;break}if(D===l){b=!0,l=m,r=h;break}D=D.sibling}if(!b)throw Error(a(189))}}if(r.alternate!==l)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,g=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),U=Symbol.for("react.context"),w=Symbol.for("react.forward_ref"),O=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),$=Symbol.for("react.memo_cache_sentinel"),G=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=G&&e[G]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function it(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Profiler";case x:return"StrictMode";case O:return"Suspense";case P:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case U:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case w:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case L:return i=e.displayName||null,i!==null?i:it(e.type)||"Memo";case T:i=e._payload,e=e._init;try{return it(e(i))}catch{}}return null}var Z=Array.isArray,F=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ot={pending:!1,data:null,method:null,action:null},ct=[],St=-1;function I(e){return{current:e}}function j(e){0>St||(e.current=ct[St],ct[St]=null,St--)}function mt(e,i){St++,ct[St]=e.current,e.current=i}var Tt=I(null),Ut=I(null),rt=I(null),xt=I(null);function At(e,i){switch(mt(rt,i),mt(Ut,e),mt(Tt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?pv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=pv(i),e=mv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}j(Tt),mt(Tt,e)}function kt(){j(Tt),j(Ut),j(rt)}function Qt(e){e.memoizedState!==null&&mt(xt,e);var i=Tt.current,r=mv(i,e.type);i!==r&&(mt(Ut,e),mt(Tt,r))}function te(e){Ut.current===e&&(j(Tt),j(Ut)),xt.current===e&&(j(xt),Bl._currentValue=ot)}var rn,ve;function me(e){if(rn===void 0)try{throw Error()}catch(r){var i=r.stack.trim().match(/\n( *(at )?)/);rn=i&&i[1]||"",ve=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+e+ve}var Ue=!1;function le(e,i){if(!e||Ue)return"";Ue=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var vt=function(){throw Error()};if(Object.defineProperty(vt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(vt,[])}catch(ft){var st=ft}Reflect.construct(e,[],vt)}else{try{vt.call()}catch(ft){st=ft}e.call(vt.prototype)}}else{try{throw Error()}catch(ft){st=ft}(vt=e())&&typeof vt.catch=="function"&&vt.catch(function(){})}}catch(ft){if(ft&&st&&typeof ft.stack=="string")return[ft.stack,st.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],D=m[1];if(b&&D){var V=b.split(`
`),nt=D.split(`
`);for(h=l=0;l<V.length&&!V[l].includes("DetermineComponentFrameRoot");)l++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(l===V.length||h===nt.length)for(l=V.length-1,h=nt.length-1;1<=l&&0<=h&&V[l]!==nt[h];)h--;for(;1<=l&&0<=h;l--,h--)if(V[l]!==nt[h]){if(l!==1||h!==1)do if(l--,h--,0>h||V[l]!==nt[h]){var pt=`
`+V[l].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=l&&0<=h);break}}}finally{Ue=!1,Error.prepareStackTrace=r}return(r=e?e.displayName||e.name:"")?me(r):""}function tn(e,i){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==i&&i!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return me("Activity");default:return""}}function k(e){try{var i="",r=null;do i+=tn(e,r),r=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ze=Object.prototype.hasOwnProperty,be=o.unstable_scheduleCallback,Le=o.unstable_cancelCallback,qt=o.unstable_shouldYield,z=o.unstable_requestPaint,A=o.unstable_now,K=o.unstable_getCurrentPriorityLevel,_t=o.unstable_ImmediatePriority,yt=o.unstable_UserBlockingPriority,dt=o.unstable_NormalPriority,Xt=o.unstable_LowPriority,wt=o.unstable_IdlePriority,Kt=o.log,ee=o.unstable_setDisableYieldValue,bt=null,Mt=null;function Pt(e){if(typeof Kt=="function"&&ee(e),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(bt,e)}catch{}}var Ot=Math.clz32?Math.clz32:q,Ft=Math.log,ce=Math.LN2;function q(e){return e>>>=0,e===0?32:31-(Ft(e)/ce|0)|0}var Ct=256,Rt=262144,zt=4194304;function Et(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ht(e,i,r){var l=e.pendingLanes;if(l===0)return 0;var h=0,m=e.suspendedLanes,b=e.pingedLanes;e=e.warmLanes;var D=l&134217727;return D!==0?(l=D&~m,l!==0?h=Et(l):(b&=D,b!==0?h=Et(b):r||(r=D&~e,r!==0&&(h=Et(r))))):(D=l&~m,D!==0?h=Et(D):b!==0?h=Et(b):r||(r=l&~e,r!==0&&(h=Et(r)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,r=i&-i,m>=r||m===32&&(r&4194048)!==0)?i:h}function Bt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ie(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=zt;return zt<<=1,(zt&62914560)===0&&(zt=4194304),e}function Te(e){for(var i=[],r=0;31>r;r++)i.push(e);return i}function kn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xi(e,i,r,l,h,m){var b=e.pendingLanes;e.pendingLanes=r,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=r,e.entangledLanes&=r,e.errorRecoveryDisabledLanes&=r,e.shellSuspendCounter=0;var D=e.entanglements,V=e.expirationTimes,nt=e.hiddenUpdates;for(r=b&~r;0<r;){var pt=31-Ot(r),vt=1<<pt;D[pt]=0,V[pt]=-1;var st=nt[pt];if(st!==null)for(nt[pt]=null,pt=0;pt<st.length;pt++){var ft=st[pt];ft!==null&&(ft.lane&=-536870913)}r&=~vt}l!==0&&tl(e,l,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(b&~i))}function tl(e,i,r){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-Ot(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|r&261930}function Ps(e,i){var r=e.entangledLanes|=i;for(e=e.entanglements;r;){var l=31-Ot(r),h=1<<l;h&i|e[l]&i&&(e[l]|=i),r&=~h}}function Mu(e,i){var r=i&-i;return r=(r&42)!==0?1:Fs(r),(r&(e.suspendedLanes|i))!==0?0:r}function Fs(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function aa(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Iv(e.type))}function Is(e,i){var r=H.p;try{return H.p=e,i()}finally{H.p=r}}var Wi=Math.random().toString(36).slice(2),dn="__reactFiber$"+Wi,En="__reactProps$"+Wi,Ea="__reactContainer$"+Wi,sr="__reactEvents$"+Wi,Eu="__reactListeners$"+Wi,bu="__reactHandles$"+Wi,Tu="__reactResources$"+Wi,Kr="__reactMarker$"+Wi;function el(e){delete e[dn],delete e[En],delete e[sr],delete e[Eu],delete e[bu]}function or(e){var i=e[dn];if(i)return i;for(var r=e.parentNode;r;){if(i=r[Ea]||r[dn]){if(r=i.alternate,i.child!==null||r!==null&&r.child!==null)for(e=Mv(e);e!==null;){if(r=e[dn])return r;e=Mv(e)}return i}e=r,r=e.parentNode}return null}function lr(e){if(e=e[dn]||e[Ea]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Qr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function N(e){var i=e[Tu];return i||(i=e[Tu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function W(e){e[Kr]=!0}var ut=new Set,at={};function tt(e,i){Dt(e,i),Dt(e+"Capture",i)}function Dt(e,i){for(at[e]=i,e=0;e<i.length;e++)ut.add(i[e])}var It=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Nt={},Wt={};function Yt(e){return Ze.call(Wt,e)?!0:Ze.call(Nt,e)?!1:It.test(e)?Wt[e]=!0:(Nt[e]=!0,!1)}function ne(e,i,r){if(Yt(i))if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+r)}}function re(e,i,r){if(r===null)e.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+r)}}function Ht(e,i,r,l){if(l===null)e.removeAttribute(r);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(r);return}e.setAttributeNS(i,r,""+l)}}function fe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ke(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(e,i,r){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,m=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(b){r=""+b,m.call(this,b)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return r},setValue:function(b){r=""+b},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Re(e){if(!e._valueTracker){var i=Ke(e)?"checked":"value";e._valueTracker=Qe(e,i,""+e[i])}}function bn(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var r=i.getValue(),l="";return e&&(l=Ke(e)?e.checked?"true":"false":e.value),e=l,e!==r?(i.setValue(e),!0):!1}function Vt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Xn=/[\n"\\]/g;function ae(e){return e.replace(Xn,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Wn(e,i,r,l,h,m,b,D){e.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.type=b:e.removeAttribute("type"),i!=null?b==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+fe(i)):e.value!==""+fe(i)&&(e.value=""+fe(i)):b!=="submit"&&b!=="reset"||e.removeAttribute("value"),i!=null?qi(e,b,fe(i)):r!=null?qi(e,b,fe(r)):l!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+fe(D):e.removeAttribute("name")}function fi(e,i,r,l,h,m,b,D){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||r!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Re(e);return}r=r!=null?""+fe(r):"",i=i!=null?""+fe(i):r,D||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=D?e.checked:!!l,e.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(e.name=b),Re(e)}function qi(e,i,r){i==="number"&&Vt(e.ownerDocument)===e||e.defaultValue===""+r||(e.defaultValue=""+r)}function hi(e,i,r,l){if(e=e.options,i){i={};for(var h=0;h<r.length;h++)i["$"+r[h]]=!0;for(r=0;r<e.length;r++)h=i.hasOwnProperty("$"+e[r].value),e[r].selected!==h&&(e[r].selected=h),h&&l&&(e[r].defaultSelected=!0)}else{for(r=""+fe(r),i=null,h=0;h<e.length;h++){if(e[h].value===r){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function Oe(e,i,r){if(i!=null&&(i=""+fe(i),i!==e.value&&(e.value=i),r==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=r!=null?""+fe(r):""}function pn(e,i,r,l){if(i==null){if(l!=null){if(r!=null)throw Error(a(92));if(Z(l)){if(1<l.length)throw Error(a(93));l=l[0]}r=l}r==null&&(r=""),i=r}r=fe(i),e.defaultValue=r,l=e.textContent,l===r&&l!==""&&l!==null&&(e.value=l),Re(e)}function qn(e,i){if(i){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=i;return}}e.textContent=i}var mn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ji(e,i,r){var l=i.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,r):typeof r!="number"||r===0||mn.has(i)?i==="float"?e.cssFloat=r:e[i]=(""+r).trim():e[i]=r+"px"}function ba(e,i,r){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,r!=null){for(var l in r)!r.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&r[h]!==l&&ji(e,h,l)}else for(var m in i)i.hasOwnProperty(m)&&ji(e,m,i[m])}function Bs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Au(e){return Zy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ta(){}var Of=null;function Pf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hs=null,Gs=null;function d0(e){var i=lr(e);if(i&&(e=i.stateNode)){var r=e[En]||null;t:switch(e=i.stateNode,i.type){case"input":if(Wn(e,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),i=r.name,r.type==="radio"&&i!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+ae(""+i)+'"][type="radio"]'),i=0;i<r.length;i++){var l=r[i];if(l!==e&&l.form===e.form){var h=l[En]||null;if(!h)throw Error(a(90));Wn(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<r.length;i++)l=r[i],l.form===e.form&&bn(l)}break t;case"textarea":Oe(e,r.value,r.defaultValue);break t;case"select":i=r.value,i!=null&&hi(e,!!r.multiple,i,!1)}}}var Ff=!1;function p0(e,i,r){if(Ff)return e(i,r);Ff=!0;try{var l=e(i);return l}finally{if(Ff=!1,(Hs!==null||Gs!==null)&&(dc(),Hs&&(i=Hs,e=Gs,Gs=Hs=null,d0(i),e)))for(i=0;i<e.length;i++)d0(e[i])}}function nl(e,i){var r=e.stateNode;if(r===null)return null;var l=r[En]||null;if(l===null)return null;r=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(a(231,i,typeof r));return r}var Aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zf=!1;if(Aa)try{var il={};Object.defineProperty(il,"passive",{get:function(){zf=!0}}),window.addEventListener("test",il,il),window.removeEventListener("test",il,il)}catch{zf=!1}var ur=null,If=null,Ru=null;function m0(){if(Ru)return Ru;var e,i=If,r=i.length,l,h="value"in ur?ur.value:ur.textContent,m=h.length;for(e=0;e<r&&i[e]===h[e];e++);var b=r-e;for(l=1;l<=b&&i[r-l]===h[m-l];l++);return Ru=h.slice(e,1<l?1-l:void 0)}function Cu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function wu(){return!0}function _0(){return!1}function Qn(e){function i(r,l,h,m,b){this._reactName=r,this._targetInst=h,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(r=e[D],this[D]=r?r(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wu:_0,this.isPropagationStopped=_0,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=wu)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=wu)},persist:function(){},isPersistent:wu}),i}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Du=Qn(Jr),al=v({},Jr,{view:0,detail:0}),Ky=Qn(al),Bf,Hf,rl,Uu=v({},al,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==rl&&(rl&&e.type==="mousemove"?(Bf=e.screenX-rl.screenX,Hf=e.screenY-rl.screenY):Hf=Bf=0,rl=e),Bf)},movementY:function(e){return"movementY"in e?e.movementY:Hf}}),g0=Qn(Uu),Qy=v({},Uu,{dataTransfer:0}),Jy=Qn(Qy),$y=v({},al,{relatedTarget:0}),Gf=Qn($y),tM=v({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),eM=Qn(tM),nM=v({},Jr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iM=Qn(nM),aM=v({},Jr,{data:0}),v0=Qn(aM),rM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lM(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=oM[e])?!!i[e]:!1}function Vf(){return lM}var uM=v({},al,{key:function(e){if(e.key){var i=rM[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Cu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sM[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vf,charCode:function(e){return e.type==="keypress"?Cu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Cu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),cM=Qn(uM),fM=v({},Uu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),x0=Qn(fM),hM=v({},al,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vf}),dM=Qn(hM),pM=v({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),mM=Qn(pM),_M=v({},Uu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gM=Qn(_M),vM=v({},Jr,{newState:0,oldState:0}),xM=Qn(vM),SM=[9,13,27,32],kf=Aa&&"CompositionEvent"in window,sl=null;Aa&&"documentMode"in document&&(sl=document.documentMode);var yM=Aa&&"TextEvent"in window&&!sl,S0=Aa&&(!kf||sl&&8<sl&&11>=sl),y0=" ",M0=!1;function E0(e,i){switch(e){case"keyup":return SM.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function b0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vs=!1;function MM(e,i){switch(e){case"compositionend":return b0(i);case"keypress":return i.which!==32?null:(M0=!0,y0);case"textInput":return e=i.data,e===y0&&M0?null:e;default:return null}}function EM(e,i){if(Vs)return e==="compositionend"||!kf&&E0(e,i)?(e=m0(),Ru=If=ur=null,Vs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return S0&&i.locale!=="ko"?null:i.data;default:return null}}var bM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!bM[e.type]:i==="textarea"}function A0(e,i,r,l){Hs?Gs?Gs.push(l):Gs=[l]:Hs=l,i=Sc(i,"onChange"),0<i.length&&(r=new Du("onChange","change",null,r,l),e.push({event:r,listeners:i}))}var ol=null,ll=null;function TM(e){lv(e,0)}function Nu(e){var i=Qr(e);if(bn(i))return e}function R0(e,i){if(e==="change")return i}var C0=!1;if(Aa){var Xf;if(Aa){var Wf="oninput"in document;if(!Wf){var w0=document.createElement("div");w0.setAttribute("oninput","return;"),Wf=typeof w0.oninput=="function"}Xf=Wf}else Xf=!1;C0=Xf&&(!document.documentMode||9<document.documentMode)}function D0(){ol&&(ol.detachEvent("onpropertychange",U0),ll=ol=null)}function U0(e){if(e.propertyName==="value"&&Nu(ll)){var i=[];A0(i,ll,e,Pf(e)),p0(TM,i)}}function AM(e,i,r){e==="focusin"?(D0(),ol=i,ll=r,ol.attachEvent("onpropertychange",U0)):e==="focusout"&&D0()}function RM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Nu(ll)}function CM(e,i){if(e==="click")return Nu(i)}function wM(e,i){if(e==="input"||e==="change")return Nu(i)}function DM(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var di=typeof Object.is=="function"?Object.is:DM;function ul(e,i){if(di(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var r=Object.keys(e),l=Object.keys(i);if(r.length!==l.length)return!1;for(l=0;l<r.length;l++){var h=r[l];if(!Ze.call(i,h)||!di(e[h],i[h]))return!1}return!0}function N0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function L0(e,i){var r=N0(e);e=0;for(var l;r;){if(r.nodeType===3){if(l=e+r.textContent.length,e<=i&&l>=i)return{node:r,offset:i-e};e=l}t:{for(;r;){if(r.nextSibling){r=r.nextSibling;break t}r=r.parentNode}r=void 0}r=N0(r)}}function O0(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?O0(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function P0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=Vt(e.document);i instanceof e.HTMLIFrameElement;){try{var r=typeof i.contentWindow.location.href=="string"}catch{r=!1}if(r)e=i.contentWindow;else break;i=Vt(e.document)}return i}function qf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var UM=Aa&&"documentMode"in document&&11>=document.documentMode,ks=null,jf=null,cl=null,Yf=!1;function F0(e,i,r){var l=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Yf||ks==null||ks!==Vt(l)||(l=ks,"selectionStart"in l&&qf(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),cl&&ul(cl,l)||(cl=l,l=Sc(jf,"onSelect"),0<l.length&&(i=new Du("onSelect","select",null,i,r),e.push({event:i,listeners:l}),i.target=ks)))}function $r(e,i){var r={};return r[e.toLowerCase()]=i.toLowerCase(),r["Webkit"+e]="webkit"+i,r["Moz"+e]="moz"+i,r}var Xs={animationend:$r("Animation","AnimationEnd"),animationiteration:$r("Animation","AnimationIteration"),animationstart:$r("Animation","AnimationStart"),transitionrun:$r("Transition","TransitionRun"),transitionstart:$r("Transition","TransitionStart"),transitioncancel:$r("Transition","TransitionCancel"),transitionend:$r("Transition","TransitionEnd")},Zf={},z0={};Aa&&(z0=document.createElement("div").style,"AnimationEvent"in window||(delete Xs.animationend.animation,delete Xs.animationiteration.animation,delete Xs.animationstart.animation),"TransitionEvent"in window||delete Xs.transitionend.transition);function ts(e){if(Zf[e])return Zf[e];if(!Xs[e])return e;var i=Xs[e],r;for(r in i)if(i.hasOwnProperty(r)&&r in z0)return Zf[e]=i[r];return e}var I0=ts("animationend"),B0=ts("animationiteration"),H0=ts("animationstart"),NM=ts("transitionrun"),LM=ts("transitionstart"),OM=ts("transitioncancel"),G0=ts("transitionend"),V0=new Map,Kf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kf.push("scrollEnd");function Yi(e,i){V0.set(e,i),tt(i,[e])}var Lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Di=[],Ws=0,Qf=0;function Ou(){for(var e=Ws,i=Qf=Ws=0;i<e;){var r=Di[i];Di[i++]=null;var l=Di[i];Di[i++]=null;var h=Di[i];Di[i++]=null;var m=Di[i];if(Di[i++]=null,l!==null&&h!==null){var b=l.pending;b===null?h.next=h:(h.next=b.next,b.next=h),l.pending=h}m!==0&&k0(r,h,m)}}function Pu(e,i,r,l){Di[Ws++]=e,Di[Ws++]=i,Di[Ws++]=r,Di[Ws++]=l,Qf|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Jf(e,i,r,l){return Pu(e,i,r,l),Fu(e)}function es(e,i){return Pu(e,null,null,i),Fu(e)}function k0(e,i,r){e.lanes|=r;var l=e.alternate;l!==null&&(l.lanes|=r);for(var h=!1,m=e.return;m!==null;)m.childLanes|=r,l=m.alternate,l!==null&&(l.childLanes|=r),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Ot(r),e=m.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=r|536870912),m):null}function Fu(e){if(50<Nl)throw Nl=0,od=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var qs={};function PM(e,i,r,l){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(e,i,r,l){return new PM(e,i,r,l)}function $f(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ra(e,i){var r=e.alternate;return r===null?(r=pi(e.tag,i,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=i,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&65011712,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,i=e.dependencies,r.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r.refCleanup=e.refCleanup,r}function X0(e,i){e.flags&=65011714;var r=e.alternate;return r===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=r.childLanes,e.lanes=r.lanes,e.child=r.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=r.memoizedProps,e.memoizedState=r.memoizedState,e.updateQueue=r.updateQueue,e.type=r.type,i=r.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function zu(e,i,r,l,h,m){var b=0;if(l=e,typeof e=="function")$f(e)&&(b=1);else if(typeof e=="string")b=H1(e,r,Tt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=pi(31,r,i,h),e.elementType=C,e.lanes=m,e;case E:return ns(r.children,h,m,i);case x:b=8,h|=24;break;case y:return e=pi(12,r,i,h|2),e.elementType=y,e.lanes=m,e;case O:return e=pi(13,r,i,h),e.elementType=O,e.lanes=m,e;case P:return e=pi(19,r,i,h),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:b=10;break t;case R:b=9;break t;case w:b=11;break t;case L:b=14;break t;case T:b=16,l=null;break t}b=29,r=Error(a(130,e===null?"null":typeof e,"")),l=null}return i=pi(b,r,i,h),i.elementType=e,i.type=l,i.lanes=m,i}function ns(e,i,r,l){return e=pi(7,e,l,i),e.lanes=r,e}function th(e,i,r){return e=pi(6,e,null,i),e.lanes=r,e}function W0(e){var i=pi(18,null,null,0);return i.stateNode=e,i}function eh(e,i,r){return i=pi(4,e.children!==null?e.children:[],e.key,i),i.lanes=r,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var q0=new WeakMap;function Ui(e,i){if(typeof e=="object"&&e!==null){var r=q0.get(e);return r!==void 0?r:(i={value:e,source:i,stack:k(i)},q0.set(e,i),i)}return{value:e,source:i,stack:k(i)}}var js=[],Ys=0,Iu=null,fl=0,Ni=[],Li=0,cr=null,ra=1,sa="";function Ca(e,i){js[Ys++]=fl,js[Ys++]=Iu,Iu=e,fl=i}function j0(e,i,r){Ni[Li++]=ra,Ni[Li++]=sa,Ni[Li++]=cr,cr=e;var l=ra;e=sa;var h=32-Ot(l)-1;l&=~(1<<h),r+=1;var m=32-Ot(i)+h;if(30<m){var b=h-h%5;m=(l&(1<<b)-1).toString(32),l>>=b,h-=b,ra=1<<32-Ot(i)+h|r<<h|l,sa=m+e}else ra=1<<m|r<<h|l,sa=e}function nh(e){e.return!==null&&(Ca(e,1),j0(e,1,0))}function ih(e){for(;e===Iu;)Iu=js[--Ys],js[Ys]=null,fl=js[--Ys],js[Ys]=null;for(;e===cr;)cr=Ni[--Li],Ni[Li]=null,sa=Ni[--Li],Ni[Li]=null,ra=Ni[--Li],Ni[Li]=null}function Y0(e,i){Ni[Li++]=ra,Ni[Li++]=sa,Ni[Li++]=cr,ra=i.id,sa=i.overflow,cr=e}var Un=null,je=null,ye=!1,fr=null,Oi=!1,ah=Error(a(519));function hr(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw hl(Ui(i,e)),ah}function Z0(e){var i=e.stateNode,r=e.type,l=e.memoizedProps;switch(i[dn]=e,i[En]=l,r){case"dialog":ge("cancel",i),ge("close",i);break;case"iframe":case"object":case"embed":ge("load",i);break;case"video":case"audio":for(r=0;r<Ol.length;r++)ge(Ol[r],i);break;case"source":ge("error",i);break;case"img":case"image":case"link":ge("error",i),ge("load",i);break;case"details":ge("toggle",i);break;case"input":ge("invalid",i),fi(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ge("invalid",i);break;case"textarea":ge("invalid",i),pn(i,l.value,l.defaultValue,l.children)}r=l.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||i.textContent===""+r||l.suppressHydrationWarning===!0||hv(i.textContent,r)?(l.popover!=null&&(ge("beforetoggle",i),ge("toggle",i)),l.onScroll!=null&&ge("scroll",i),l.onScrollEnd!=null&&ge("scrollend",i),l.onClick!=null&&(i.onclick=Ta),i=!0):i=!1,i||hr(e,!0)}function K0(e){for(Un=e.return;Un;)switch(Un.tag){case 5:case 31:case 13:Oi=!1;return;case 27:case 3:Oi=!0;return;default:Un=Un.return}}function Zs(e){if(e!==Un)return!1;if(!ye)return K0(e),ye=!0,!1;var i=e.tag,r;if((r=i!==3&&i!==27)&&((r=i===5)&&(r=e.type,r=!(r!=="form"&&r!=="button")||Md(e.type,e.memoizedProps)),r=!r),r&&je&&hr(e),K0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=yv(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=yv(e)}else i===27?(i=je,Ar(e.type)?(e=Rd,Rd=null,je=e):je=i):je=Un?Fi(e.stateNode.nextSibling):null;return!0}function is(){je=Un=null,ye=!1}function rh(){var e=fr;return e!==null&&(ei===null?ei=e:ei.push.apply(ei,e),fr=null),e}function hl(e){fr===null?fr=[e]:fr.push(e)}var sh=I(null),as=null,wa=null;function dr(e,i,r){mt(sh,i._currentValue),i._currentValue=r}function Da(e){e._currentValue=sh.current,j(sh)}function oh(e,i,r){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===r)break;e=e.return}}function lh(e,i,r,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var b=h.child;m=m.firstContext;t:for(;m!==null;){var D=m;m=h;for(var V=0;V<i.length;V++)if(D.context===i[V]){m.lanes|=r,D=m.alternate,D!==null&&(D.lanes|=r),oh(m.return,r,e),l||(b=null);break t}m=D.next}}else if(h.tag===18){if(b=h.return,b===null)throw Error(a(341));b.lanes|=r,m=b.alternate,m!==null&&(m.lanes|=r),oh(b,r,e),b=null}else b=h.child;if(b!==null)b.return=h;else for(b=h;b!==null;){if(b===e){b=null;break}if(h=b.sibling,h!==null){h.return=b.return,b=h;break}b=b.return}h=b}}function Ks(e,i,r,l){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var b=h.alternate;if(b===null)throw Error(a(387));if(b=b.memoizedProps,b!==null){var D=h.type;di(h.pendingProps.value,b.value)||(e!==null?e.push(D):e=[D])}}else if(h===xt.current){if(b=h.alternate,b===null)throw Error(a(387));b.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(Bl):e=[Bl])}h=h.return}e!==null&&lh(i,e,r,l),i.flags|=262144}function Bu(e){for(e=e.firstContext;e!==null;){if(!di(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rs(e){as=e,wa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return Q0(as,e)}function Hu(e,i){return as===null&&rs(e),Q0(e,i)}function Q0(e,i){var r=i._currentValue;if(i={context:i,memoizedValue:r,next:null},wa===null){if(e===null)throw Error(a(308));wa=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else wa=wa.next=i;return r}var FM=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(r,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(r){return r()})}},zM=o.unstable_scheduleCallback,IM=o.unstable_NormalPriority,_n={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uh(){return{controller:new FM,data:new Map,refCount:0}}function dl(e){e.refCount--,e.refCount===0&&zM(IM,function(){e.controller.abort()})}var pl=null,ch=0,Qs=0,Js=null;function BM(e,i){if(pl===null){var r=pl=[];ch=0,Qs=dd(),Js={status:"pending",value:void 0,then:function(l){r.push(l)}}}return ch++,i.then(J0,J0),i}function J0(){if(--ch===0&&pl!==null){Js!==null&&(Js.status="fulfilled");var e=pl;pl=null,Qs=0,Js=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function HM(e,i){var r=[],l={status:"pending",value:null,reason:null,then:function(h){r.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<r.length;h++)(0,r[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<r.length;h++)(0,r[h])(void 0)}),l}var $0=F.S;F.S=function(e,i){Fg=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&BM(e,i),$0!==null&&$0(e,i)};var ss=I(null);function fh(){var e=ss.current;return e!==null?e:Xe.pooledCache}function Gu(e,i){i===null?mt(ss,ss.current):mt(ss,i.pool)}function t_(){var e=fh();return e===null?null:{parent:_n._currentValue,pool:e}}var $s=Error(a(460)),hh=Error(a(474)),Vu=Error(a(542)),ku={then:function(){}};function e_(e){return e=e.status,e==="fulfilled"||e==="rejected"}function n_(e,i,r){switch(r=e[r],r===void 0?e.push(i):r!==i&&(i.then(Ta,Ta),i=r),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,a_(e),e;default:if(typeof i.status=="string")i.then(Ta,Ta);else{if(e=Xe,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,a_(e),e}throw ls=i,$s}}function os(e){try{var i=e._init;return i(e._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(ls=r,$s):r}}var ls=null;function i_(){if(ls===null)throw Error(a(459));var e=ls;return ls=null,e}function a_(e){if(e===$s||e===Vu)throw Error(a(483))}var to=null,ml=0;function Xu(e){var i=ml;return ml+=1,to===null&&(to=[]),n_(to,e,i)}function _l(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Wu(e,i){throw i.$$typeof===g?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function r_(e){function i(J,X){if(e){var et=J.deletions;et===null?(J.deletions=[X],J.flags|=16):et.push(X)}}function r(J,X){if(!e)return null;for(;X!==null;)i(J,X),X=X.sibling;return null}function l(J){for(var X=new Map;J!==null;)J.key!==null?X.set(J.key,J):X.set(J.index,J),J=J.sibling;return X}function h(J,X){return J=Ra(J,X),J.index=0,J.sibling=null,J}function m(J,X,et){return J.index=et,e?(et=J.alternate,et!==null?(et=et.index,et<X?(J.flags|=67108866,X):et):(J.flags|=67108866,X)):(J.flags|=1048576,X)}function b(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function D(J,X,et,gt){return X===null||X.tag!==6?(X=th(et,J.mode,gt),X.return=J,X):(X=h(X,et),X.return=J,X)}function V(J,X,et,gt){var Jt=et.type;return Jt===E?pt(J,X,et.props.children,gt,et.key):X!==null&&(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===T&&os(Jt)===X.type)?(X=h(X,et.props),_l(X,et),X.return=J,X):(X=zu(et.type,et.key,et.props,null,J.mode,gt),_l(X,et),X.return=J,X)}function nt(J,X,et,gt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=eh(et,J.mode,gt),X.return=J,X):(X=h(X,et.children||[]),X.return=J,X)}function pt(J,X,et,gt,Jt){return X===null||X.tag!==7?(X=ns(et,J.mode,gt,Jt),X.return=J,X):(X=h(X,et),X.return=J,X)}function vt(J,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=th(""+X,J.mode,et),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return et=zu(X.type,X.key,X.props,null,J.mode,et),_l(et,X),et.return=J,et;case M:return X=eh(X,J.mode,et),X.return=J,X;case T:return X=os(X),vt(J,X,et)}if(Z(X)||Y(X))return X=ns(X,J.mode,et,null),X.return=J,X;if(typeof X.then=="function")return vt(J,Xu(X),et);if(X.$$typeof===U)return vt(J,Hu(J,X),et);Wu(J,X)}return null}function st(J,X,et,gt){var Jt=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Jt!==null?null:D(J,X,""+et,gt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case S:return et.key===Jt?V(J,X,et,gt):null;case M:return et.key===Jt?nt(J,X,et,gt):null;case T:return et=os(et),st(J,X,et,gt)}if(Z(et)||Y(et))return Jt!==null?null:pt(J,X,et,gt,null);if(typeof et.then=="function")return st(J,X,Xu(et),gt);if(et.$$typeof===U)return st(J,X,Hu(J,et),gt);Wu(J,et)}return null}function ft(J,X,et,gt,Jt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return J=J.get(et)||null,D(X,J,""+gt,Jt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case S:return J=J.get(gt.key===null?et:gt.key)||null,V(X,J,gt,Jt);case M:return J=J.get(gt.key===null?et:gt.key)||null,nt(X,J,gt,Jt);case T:return gt=os(gt),ft(J,X,et,gt,Jt)}if(Z(gt)||Y(gt))return J=J.get(et)||null,pt(X,J,gt,Jt,null);if(typeof gt.then=="function")return ft(J,X,et,Xu(gt),Jt);if(gt.$$typeof===U)return ft(J,X,et,Hu(X,gt),Jt);Wu(X,gt)}return null}function Gt(J,X,et,gt){for(var Jt=null,Ce=null,jt=X,he=X=0,Se=null;jt!==null&&he<et.length;he++){jt.index>he?(Se=jt,jt=null):Se=jt.sibling;var we=st(J,jt,et[he],gt);if(we===null){jt===null&&(jt=Se);break}e&&jt&&we.alternate===null&&i(J,jt),X=m(we,X,he),Ce===null?Jt=we:Ce.sibling=we,Ce=we,jt=Se}if(he===et.length)return r(J,jt),ye&&Ca(J,he),Jt;if(jt===null){for(;he<et.length;he++)jt=vt(J,et[he],gt),jt!==null&&(X=m(jt,X,he),Ce===null?Jt=jt:Ce.sibling=jt,Ce=jt);return ye&&Ca(J,he),Jt}for(jt=l(jt);he<et.length;he++)Se=ft(jt,J,he,et[he],gt),Se!==null&&(e&&Se.alternate!==null&&jt.delete(Se.key===null?he:Se.key),X=m(Se,X,he),Ce===null?Jt=Se:Ce.sibling=Se,Ce=Se);return e&&jt.forEach(function(Ur){return i(J,Ur)}),ye&&Ca(J,he),Jt}function $t(J,X,et,gt){if(et==null)throw Error(a(151));for(var Jt=null,Ce=null,jt=X,he=X=0,Se=null,we=et.next();jt!==null&&!we.done;he++,we=et.next()){jt.index>he?(Se=jt,jt=null):Se=jt.sibling;var Ur=st(J,jt,we.value,gt);if(Ur===null){jt===null&&(jt=Se);break}e&&jt&&Ur.alternate===null&&i(J,jt),X=m(Ur,X,he),Ce===null?Jt=Ur:Ce.sibling=Ur,Ce=Ur,jt=Se}if(we.done)return r(J,jt),ye&&Ca(J,he),Jt;if(jt===null){for(;!we.done;he++,we=et.next())we=vt(J,we.value,gt),we!==null&&(X=m(we,X,he),Ce===null?Jt=we:Ce.sibling=we,Ce=we);return ye&&Ca(J,he),Jt}for(jt=l(jt);!we.done;he++,we=et.next())we=ft(jt,J,he,we.value,gt),we!==null&&(e&&we.alternate!==null&&jt.delete(we.key===null?he:we.key),X=m(we,X,he),Ce===null?Jt=we:Ce.sibling=we,Ce=we);return e&&jt.forEach(function(Q1){return i(J,Q1)}),ye&&Ca(J,he),Jt}function ke(J,X,et,gt){if(typeof et=="object"&&et!==null&&et.type===E&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case S:t:{for(var Jt=et.key;X!==null;){if(X.key===Jt){if(Jt=et.type,Jt===E){if(X.tag===7){r(J,X.sibling),gt=h(X,et.props.children),gt.return=J,J=gt;break t}}else if(X.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===T&&os(Jt)===X.type){r(J,X.sibling),gt=h(X,et.props),_l(gt,et),gt.return=J,J=gt;break t}r(J,X);break}else i(J,X);X=X.sibling}et.type===E?(gt=ns(et.props.children,J.mode,gt,et.key),gt.return=J,J=gt):(gt=zu(et.type,et.key,et.props,null,J.mode,gt),_l(gt,et),gt.return=J,J=gt)}return b(J);case M:t:{for(Jt=et.key;X!==null;){if(X.key===Jt)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){r(J,X.sibling),gt=h(X,et.children||[]),gt.return=J,J=gt;break t}else{r(J,X);break}else i(J,X);X=X.sibling}gt=eh(et,J.mode,gt),gt.return=J,J=gt}return b(J);case T:return et=os(et),ke(J,X,et,gt)}if(Z(et))return Gt(J,X,et,gt);if(Y(et)){if(Jt=Y(et),typeof Jt!="function")throw Error(a(150));return et=Jt.call(et),$t(J,X,et,gt)}if(typeof et.then=="function")return ke(J,X,Xu(et),gt);if(et.$$typeof===U)return ke(J,X,Hu(J,et),gt);Wu(J,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(r(J,X.sibling),gt=h(X,et),gt.return=J,J=gt):(r(J,X),gt=th(et,J.mode,gt),gt.return=J,J=gt),b(J)):r(J,X)}return function(J,X,et,gt){try{ml=0;var Jt=ke(J,X,et,gt);return to=null,Jt}catch(jt){if(jt===$s||jt===Vu)throw jt;var Ce=pi(29,jt,null,J.mode);return Ce.lanes=gt,Ce.return=J,Ce}finally{}}}var us=r_(!0),s_=r_(!1),pr=!1;function dh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ph(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _r(e,i,r){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ne&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Fu(e),k0(e,null,r),i}return Pu(e,l,i,r),Fu(e)}function gl(e,i,r){if(i=i.updateQueue,i!==null&&(i=i.shared,(r&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Ps(e,r)}}function mh(e,i){var r=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,r===l)){var h=null,m=null;if(r=r.firstBaseUpdate,r!==null){do{var b={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};m===null?h=m=b:m=m.next=b,r=r.next}while(r!==null);m===null?h=m=i:m=m.next=i}else h=m=i;r={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=i:e.next=i,r.lastBaseUpdate=i}var _h=!1;function vl(){if(_h){var e=Js;if(e!==null)throw e}}function xl(e,i,r,l){_h=!1;var h=e.updateQueue;pr=!1;var m=h.firstBaseUpdate,b=h.lastBaseUpdate,D=h.shared.pending;if(D!==null){h.shared.pending=null;var V=D,nt=V.next;V.next=null,b===null?m=nt:b.next=nt,b=V;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,D=pt.lastBaseUpdate,D!==b&&(D===null?pt.firstBaseUpdate=nt:D.next=nt,pt.lastBaseUpdate=V))}if(m!==null){var vt=h.baseState;b=0,pt=nt=V=null,D=m;do{var st=D.lane&-536870913,ft=st!==D.lane;if(ft?(xe&st)===st:(l&st)===st){st!==0&&st===Qs&&(_h=!0),pt!==null&&(pt=pt.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var Gt=e,$t=D;st=i;var ke=r;switch($t.tag){case 1:if(Gt=$t.payload,typeof Gt=="function"){vt=Gt.call(ke,vt,st);break t}vt=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=$t.payload,st=typeof Gt=="function"?Gt.call(ke,vt,st):Gt,st==null)break t;vt=v({},vt,st);break t;case 2:pr=!0}}st=D.callback,st!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=h.callbacks,ft===null?h.callbacks=[st]:ft.push(st))}else ft={lane:st,tag:D.tag,payload:D.payload,callback:D.callback,next:null},pt===null?(nt=pt=ft,V=vt):pt=pt.next=ft,b|=st;if(D=D.next,D===null){if(D=h.shared.pending,D===null)break;ft=D,D=ft.next,ft.next=null,h.lastBaseUpdate=ft,h.shared.pending=null}}while(!0);pt===null&&(V=vt),h.baseState=V,h.firstBaseUpdate=nt,h.lastBaseUpdate=pt,m===null&&(h.shared.lanes=0),yr|=b,e.lanes=b,e.memoizedState=vt}}function o_(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function l_(e,i){var r=e.callbacks;if(r!==null)for(e.callbacks=null,e=0;e<r.length;e++)o_(r[e],i)}var eo=I(null),qu=I(0);function u_(e,i){e=Ba,mt(qu,e),mt(eo,i),Ba=e|i.baseLanes}function gh(){mt(qu,Ba),mt(eo,eo.current)}function vh(){Ba=qu.current,j(eo),j(qu)}var mi=I(null),Pi=null;function gr(e){var i=e.alternate;mt(un,un.current&1),mt(mi,e),Pi===null&&(i===null||eo.current!==null||i.memoizedState!==null)&&(Pi=e)}function xh(e){mt(un,un.current),mt(mi,e),Pi===null&&(Pi=e)}function c_(e){e.tag===22?(mt(un,un.current),mt(mi,e),Pi===null&&(Pi=e)):vr()}function vr(){mt(un,un.current),mt(mi,mi.current)}function _i(e){j(mi),Pi===e&&(Pi=null),j(un)}var un=I(0);function ju(e){for(var i=e;i!==null;){if(i.tag===13){var r=i.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||Td(r)||Ad(r)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ua=0,ue=null,Ge=null,gn=null,Yu=!1,no=!1,cs=!1,Zu=0,Sl=0,io=null,GM=0;function sn(){throw Error(a(321))}function Sh(e,i){if(i===null)return!1;for(var r=0;r<i.length&&r<e.length;r++)if(!di(e[r],i[r]))return!1;return!0}function yh(e,i,r,l,h,m){return Ua=m,ue=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,F.H=e===null||e.memoizedState===null?j_:Fh,cs=!1,m=r(l,h),cs=!1,no&&(m=h_(i,r,l,h)),f_(e),m}function f_(e){F.H=El;var i=Ge!==null&&Ge.next!==null;if(Ua=0,gn=Ge=ue=null,Yu=!1,Sl=0,io=null,i)throw Error(a(300));e===null||vn||(e=e.dependencies,e!==null&&Bu(e)&&(vn=!0))}function h_(e,i,r,l){ue=e;var h=0;do{if(no&&(io=null),Sl=0,no=!1,25<=h)throw Error(a(301));if(h+=1,gn=Ge=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}F.H=Y_,m=i(r,l)}while(no);return m}function VM(){var e=F.H,i=e.useState()[0];return i=typeof i.then=="function"?yl(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(ue.flags|=1024),i}function Mh(){var e=Zu!==0;return Zu=0,e}function Eh(e,i,r){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~r}function bh(e){if(Yu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Yu=!1}Ua=0,gn=Ge=ue=null,no=!1,Sl=Zu=0,io=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?ue.memoizedState=gn=e:gn=gn.next=e,gn}function cn(){if(Ge===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=gn===null?ue.memoizedState:gn.next;if(i!==null)gn=i,Ge=e;else{if(e===null)throw ue.alternate===null?Error(a(467)):Error(a(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},gn===null?ue.memoizedState=gn=e:gn=gn.next=e}return gn}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function yl(e){var i=Sl;return Sl+=1,io===null&&(io=[]),e=n_(io,e,i),i=ue,(gn===null?i.memoizedState:gn.next)===null&&(i=i.alternate,F.H=i===null||i.memoizedState===null?j_:Fh),e}function Qu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return yl(e);if(e.$$typeof===U)return Nn(e)}throw Error(a(438,String(e)))}function Th(e){var i=null,r=ue.updateQueue;if(r!==null&&(i=r.memoCache),i==null){var l=ue.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),r===null&&(r=Ku(),ue.updateQueue=r),r.memoCache=i,r=i.data[i.index],r===void 0)for(r=i.data[i.index]=Array(e),l=0;l<e;l++)r[l]=$;return i.index++,r}function Na(e,i){return typeof i=="function"?i(e):i}function Ju(e){var i=cn();return Ah(i,Ge,e)}function Ah(e,i,r){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=r;var h=e.baseQueue,m=l.pending;if(m!==null){if(h!==null){var b=h.next;h.next=m.next,m.next=b}i.baseQueue=h=m,l.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var D=b=null,V=null,nt=i,pt=!1;do{var vt=nt.lane&-536870913;if(vt!==nt.lane?(xe&vt)===vt:(Ua&vt)===vt){var st=nt.revertLane;if(st===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),vt===Qs&&(pt=!0);else if((Ua&st)===st){nt=nt.next,st===Qs&&(pt=!0);continue}else vt={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(D=V=vt,b=m):V=V.next=vt,ue.lanes|=st,yr|=st;vt=nt.action,cs&&r(m,vt),m=nt.hasEagerState?nt.eagerState:r(m,vt)}else st={lane:vt,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},V===null?(D=V=st,b=m):V=V.next=st,ue.lanes|=vt,yr|=vt;nt=nt.next}while(nt!==null&&nt!==i);if(V===null?b=m:V.next=D,!di(m,e.memoizedState)&&(vn=!0,pt&&(r=Js,r!==null)))throw r;e.memoizedState=m,e.baseState=b,e.baseQueue=V,l.lastRenderedState=m}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Rh(e){var i=cn(),r=i.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=e;var l=r.dispatch,h=r.pending,m=i.memoizedState;if(h!==null){r.pending=null;var b=h=h.next;do m=e(m,b.action),b=b.next;while(b!==h);di(m,i.memoizedState)||(vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),r.lastRenderedState=m}return[m,l]}function d_(e,i,r){var l=ue,h=cn(),m=ye;if(m){if(r===void 0)throw Error(a(407));r=r()}else r=i();var b=!di((Ge||h).memoizedState,r);if(b&&(h.memoizedState=r,vn=!0),h=h.queue,Dh(__.bind(null,l,h,e),[e]),h.getSnapshot!==i||b||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,ao(9,{destroy:void 0},m_.bind(null,l,h,r,i),null),Xe===null)throw Error(a(349));m||(Ua&127)!==0||p_(l,i,r)}return r}function p_(e,i,r){e.flags|=16384,e={getSnapshot:i,value:r},i=ue.updateQueue,i===null?(i=Ku(),ue.updateQueue=i,i.stores=[e]):(r=i.stores,r===null?i.stores=[e]:r.push(e))}function m_(e,i,r,l){i.value=r,i.getSnapshot=l,g_(i)&&v_(e)}function __(e,i,r){return r(function(){g_(i)&&v_(e)})}function g_(e){var i=e.getSnapshot;e=e.value;try{var r=i();return!di(e,r)}catch{return!0}}function v_(e){var i=es(e,2);i!==null&&ni(i,e,2)}function Ch(e){var i=jn();if(typeof e=="function"){var r=e;if(e=r(),cs){Pt(!0);try{r()}finally{Pt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:e},i}function x_(e,i,r,l){return e.baseState=r,Ah(e,Ge,typeof l=="function"?l:Na)}function kM(e,i,r,l,h){if(ec(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};F.T!==null?r(!0):m.isTransition=!1,l(m),r=i.pending,r===null?(m.next=i.pending=m,S_(i,m)):(m.next=r.next,i.pending=r.next=m)}}function S_(e,i){var r=i.action,l=i.payload,h=e.state;if(i.isTransition){var m=F.T,b={};F.T=b;try{var D=r(h,l),V=F.S;V!==null&&V(b,D),y_(e,i,D)}catch(nt){wh(e,i,nt)}finally{m!==null&&b.types!==null&&(m.types=b.types),F.T=m}}else try{m=r(h,l),y_(e,i,m)}catch(nt){wh(e,i,nt)}}function y_(e,i,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(l){M_(e,i,l)},function(l){return wh(e,i,l)}):M_(e,i,r)}function M_(e,i,r){i.status="fulfilled",i.value=r,E_(i),e.state=r,i=e.pending,i!==null&&(r=i.next,r===i?e.pending=null:(r=r.next,i.next=r,S_(e,r)))}function wh(e,i,r){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=r,E_(i),i=i.next;while(i!==l)}e.action=null}function E_(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function b_(e,i){return i}function T_(e,i){if(ye){var r=Xe.formState;if(r!==null){t:{var l=ue;if(ye){if(je){e:{for(var h=je,m=Oi;h.nodeType!==8;){if(!m){h=null;break e}if(h=Fi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){je=Fi(h.nextSibling),l=h.data==="F!";break t}}hr(l)}l=!1}l&&(i=r[0])}}return r=jn(),r.memoizedState=r.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:b_,lastRenderedState:i},r.queue=l,r=X_.bind(null,ue,l),l.dispatch=r,l=Ch(!1),m=Ph.bind(null,ue,!1,l.queue),l=jn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,r=kM.bind(null,ue,h,m,r),h.dispatch=r,l.memoizedState=e,[i,r,!1]}function A_(e){var i=cn();return R_(i,Ge,e)}function R_(e,i,r){if(i=Ah(e,i,b_)[0],e=Ju(Na)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=yl(i)}catch(b){throw b===$s?Vu:b}else l=i;i=cn();var h=i.queue,m=h.dispatch;return r!==i.memoizedState&&(ue.flags|=2048,ao(9,{destroy:void 0},XM.bind(null,h,r),null)),[l,m,e]}function XM(e,i){e.action=i}function C_(e){var i=cn(),r=Ge;if(r!==null)return R_(i,r,e);cn(),i=i.memoizedState,r=cn();var l=r.queue.dispatch;return r.memoizedState=e,[i,l,!1]}function ao(e,i,r,l){return e={tag:e,create:r,deps:l,inst:i,next:null},i=ue.updateQueue,i===null&&(i=Ku(),ue.updateQueue=i),r=i.lastEffect,r===null?i.lastEffect=e.next=e:(l=r.next,r.next=e,e.next=l,i.lastEffect=e),e}function w_(){return cn().memoizedState}function $u(e,i,r,l){var h=jn();ue.flags|=e,h.memoizedState=ao(1|i,{destroy:void 0},r,l===void 0?null:l)}function tc(e,i,r,l){var h=cn();l=l===void 0?null:l;var m=h.memoizedState.inst;Ge!==null&&l!==null&&Sh(l,Ge.memoizedState.deps)?h.memoizedState=ao(i,m,r,l):(ue.flags|=e,h.memoizedState=ao(1|i,m,r,l))}function D_(e,i){$u(8390656,8,e,i)}function Dh(e,i){tc(2048,8,e,i)}function WM(e){ue.flags|=4;var i=ue.updateQueue;if(i===null)i=Ku(),ue.updateQueue=i,i.events=[e];else{var r=i.events;r===null?i.events=[e]:r.push(e)}}function U_(e){var i=cn().memoizedState;return WM({ref:i,nextImpl:e}),function(){if((Ne&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function N_(e,i){return tc(4,2,e,i)}function L_(e,i){return tc(4,4,e,i)}function O_(e,i){if(typeof i=="function"){e=e();var r=i(e);return function(){typeof r=="function"?r():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function P_(e,i,r){r=r!=null?r.concat([e]):null,tc(4,4,O_.bind(null,i,e),r)}function Uh(){}function F_(e,i){var r=cn();i=i===void 0?null:i;var l=r.memoizedState;return i!==null&&Sh(i,l[1])?l[0]:(r.memoizedState=[e,i],e)}function z_(e,i){var r=cn();i=i===void 0?null:i;var l=r.memoizedState;if(i!==null&&Sh(i,l[1]))return l[0];if(l=e(),cs){Pt(!0);try{e()}finally{Pt(!1)}}return r.memoizedState=[l,i],l}function Nh(e,i,r){return r===void 0||(Ua&1073741824)!==0&&(xe&261930)===0?e.memoizedState=i:(e.memoizedState=r,e=Ig(),ue.lanes|=e,yr|=e,r)}function I_(e,i,r,l){return di(r,i)?r:eo.current!==null?(e=Nh(e,r,l),di(e,i)||(vn=!0),e):(Ua&42)===0||(Ua&1073741824)!==0&&(xe&261930)===0?(vn=!0,e.memoizedState=r):(e=Ig(),ue.lanes|=e,yr|=e,i)}function B_(e,i,r,l,h){var m=H.p;H.p=m!==0&&8>m?m:8;var b=F.T,D={};F.T=D,Ph(e,!1,i,r);try{var V=h(),nt=F.S;if(nt!==null&&nt(D,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var pt=HM(V,l);Ml(e,i,pt,xi(e))}else Ml(e,i,l,xi(e))}catch(vt){Ml(e,i,{then:function(){},status:"rejected",reason:vt},xi())}finally{H.p=m,b!==null&&D.types!==null&&(b.types=D.types),F.T=b}}function qM(){}function Lh(e,i,r,l){if(e.tag!==5)throw Error(a(476));var h=H_(e).queue;B_(e,h,i,ot,r===null?qM:function(){return G_(e),r(l)})}function H_(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ot,baseState:ot,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:ot},next:null};var r={};return i.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:r},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function G_(e){var i=H_(e);i.next===null&&(i=e.alternate.memoizedState),Ml(e,i.next.queue,{},xi())}function Oh(){return Nn(Bl)}function V_(){return cn().memoizedState}function k_(){return cn().memoizedState}function jM(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var r=xi();e=mr(r);var l=_r(i,e,r);l!==null&&(ni(l,i,r),gl(l,i,r)),i={cache:uh()},e.payload=i;return}i=i.return}}function YM(e,i,r){var l=xi();r={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ec(e)?W_(i,r):(r=Jf(e,i,r,l),r!==null&&(ni(r,e,l),q_(r,i,l)))}function X_(e,i,r){var l=xi();Ml(e,i,r,l)}function Ml(e,i,r,l){var h={lane:l,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(ec(e))W_(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,D=m(b,r);if(h.hasEagerState=!0,h.eagerState=D,di(D,b))return Pu(e,i,h,0),Xe===null&&Ou(),!1}catch{}finally{}if(r=Jf(e,i,h,l),r!==null)return ni(r,e,l),q_(r,i,l),!0}return!1}function Ph(e,i,r,l){if(l={lane:2,revertLane:dd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},ec(e)){if(i)throw Error(a(479))}else i=Jf(e,r,l,2),i!==null&&ni(i,e,2)}function ec(e){var i=e.alternate;return e===ue||i!==null&&i===ue}function W_(e,i){no=Yu=!0;var r=e.pending;r===null?i.next=i:(i.next=r.next,r.next=i),e.pending=i}function q_(e,i,r){if((r&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,r|=l,i.lanes=r,Ps(e,r)}}var El={readContext:Nn,use:Qu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn};El.useEffectEvent=sn;var j_={readContext:Nn,use:Qu,useCallback:function(e,i){return jn().memoizedState=[e,i===void 0?null:i],e},useContext:Nn,useEffect:D_,useImperativeHandle:function(e,i,r){r=r!=null?r.concat([e]):null,$u(4194308,4,O_.bind(null,i,e),r)},useLayoutEffect:function(e,i){return $u(4194308,4,e,i)},useInsertionEffect:function(e,i){$u(4,2,e,i)},useMemo:function(e,i){var r=jn();i=i===void 0?null:i;var l=e();if(cs){Pt(!0);try{e()}finally{Pt(!1)}}return r.memoizedState=[l,i],l},useReducer:function(e,i,r){var l=jn();if(r!==void 0){var h=r(i);if(cs){Pt(!0);try{r(i)}finally{Pt(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=YM.bind(null,ue,e),[l.memoizedState,e]},useRef:function(e){var i=jn();return e={current:e},i.memoizedState=e},useState:function(e){e=Ch(e);var i=e.queue,r=X_.bind(null,ue,i);return i.dispatch=r,[e.memoizedState,r]},useDebugValue:Uh,useDeferredValue:function(e,i){var r=jn();return Nh(r,e,i)},useTransition:function(){var e=Ch(!1);return e=B_.bind(null,ue,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,r){var l=ue,h=jn();if(ye){if(r===void 0)throw Error(a(407));r=r()}else{if(r=i(),Xe===null)throw Error(a(349));(xe&127)!==0||p_(l,i,r)}h.memoizedState=r;var m={value:r,getSnapshot:i};return h.queue=m,D_(__.bind(null,l,m,e),[e]),l.flags|=2048,ao(9,{destroy:void 0},m_.bind(null,l,m,r,i),null),r},useId:function(){var e=jn(),i=Xe.identifierPrefix;if(ye){var r=sa,l=ra;r=(l&~(1<<32-Ot(l)-1)).toString(32)+r,i="_"+i+"R_"+r,r=Zu++,0<r&&(i+="H"+r.toString(32)),i+="_"}else r=GM++,i="_"+i+"r_"+r.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Oh,useFormState:T_,useActionState:T_,useOptimistic:function(e){var i=jn();i.memoizedState=i.baseState=e;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=r,i=Ph.bind(null,ue,!0,r),r.dispatch=i,[e,i]},useMemoCache:Th,useCacheRefresh:function(){return jn().memoizedState=jM.bind(null,ue)},useEffectEvent:function(e){var i=jn(),r={impl:e};return i.memoizedState=r,function(){if((Ne&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Fh={readContext:Nn,use:Qu,useCallback:F_,useContext:Nn,useEffect:Dh,useImperativeHandle:P_,useInsertionEffect:N_,useLayoutEffect:L_,useMemo:z_,useReducer:Ju,useRef:w_,useState:function(){return Ju(Na)},useDebugValue:Uh,useDeferredValue:function(e,i){var r=cn();return I_(r,Ge.memoizedState,e,i)},useTransition:function(){var e=Ju(Na)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:yl(e),i]},useSyncExternalStore:d_,useId:V_,useHostTransitionStatus:Oh,useFormState:A_,useActionState:A_,useOptimistic:function(e,i){var r=cn();return x_(r,Ge,e,i)},useMemoCache:Th,useCacheRefresh:k_};Fh.useEffectEvent=U_;var Y_={readContext:Nn,use:Qu,useCallback:F_,useContext:Nn,useEffect:Dh,useImperativeHandle:P_,useInsertionEffect:N_,useLayoutEffect:L_,useMemo:z_,useReducer:Rh,useRef:w_,useState:function(){return Rh(Na)},useDebugValue:Uh,useDeferredValue:function(e,i){var r=cn();return Ge===null?Nh(r,e,i):I_(r,Ge.memoizedState,e,i)},useTransition:function(){var e=Rh(Na)[0],i=cn().memoizedState;return[typeof e=="boolean"?e:yl(e),i]},useSyncExternalStore:d_,useId:V_,useHostTransitionStatus:Oh,useFormState:C_,useActionState:C_,useOptimistic:function(e,i){var r=cn();return Ge!==null?x_(r,Ge,e,i):(r.baseState=e,[e,r.queue.dispatch])},useMemoCache:Th,useCacheRefresh:k_};Y_.useEffectEvent=U_;function zh(e,i,r,l){i=e.memoizedState,r=r(l,i),r=r==null?i:v({},i,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Ih={enqueueSetState:function(e,i,r){e=e._reactInternals;var l=xi(),h=mr(l);h.payload=i,r!=null&&(h.callback=r),i=_r(e,h,l),i!==null&&(ni(i,e,l),gl(i,e,l))},enqueueReplaceState:function(e,i,r){e=e._reactInternals;var l=xi(),h=mr(l);h.tag=1,h.payload=i,r!=null&&(h.callback=r),i=_r(e,h,l),i!==null&&(ni(i,e,l),gl(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var r=xi(),l=mr(r);l.tag=2,i!=null&&(l.callback=i),i=_r(e,l,r),i!==null&&(ni(i,e,r),gl(i,e,r))}};function Z_(e,i,r,l,h,m,b){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,m,b):i.prototype&&i.prototype.isPureReactComponent?!ul(r,l)||!ul(h,m):!0}function K_(e,i,r,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(r,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(r,l),i.state!==e&&Ih.enqueueReplaceState(i,i.state,null)}function fs(e,i){var r=i;if("ref"in i){r={};for(var l in i)l!=="ref"&&(r[l]=i[l])}if(e=e.defaultProps){r===i&&(r=v({},r));for(var h in e)r[h]===void 0&&(r[h]=e[h])}return r}function Q_(e){Lu(e)}function J_(e){console.error(e)}function $_(e){Lu(e)}function nc(e,i){try{var r=e.onUncaughtError;r(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function tg(e,i,r){try{var l=e.onCaughtError;l(r.value,{componentStack:r.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Bh(e,i,r){return r=mr(r),r.tag=3,r.payload={element:null},r.callback=function(){nc(e,i)},r}function eg(e){return e=mr(e),e.tag=3,e}function ng(e,i,r,l){var h=r.type.getDerivedStateFromError;if(typeof h=="function"){var m=l.value;e.payload=function(){return h(m)},e.callback=function(){tg(i,r,l)}}var b=r.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(e.callback=function(){tg(i,r,l),typeof h!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var D=l.stack;this.componentDidCatch(l.value,{componentStack:D!==null?D:""})})}function ZM(e,i,r,l,h){if(r.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=r.alternate,i!==null&&Ks(i,r,h,!0),r=mi.current,r!==null){switch(r.tag){case 31:case 13:return Pi===null?pc():r.alternate===null&&on===0&&(on=3),r.flags&=-257,r.flags|=65536,r.lanes=h,l===ku?r.flags|=16384:(i=r.updateQueue,i===null?r.updateQueue=new Set([l]):i.add(l),cd(e,l,h)),!1;case 22:return r.flags|=65536,l===ku?r.flags|=16384:(i=r.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},r.updateQueue=i):(r=i.retryQueue,r===null?i.retryQueue=new Set([l]):r.add(l)),cd(e,l,h)),!1}throw Error(a(435,r.tag))}return cd(e,l,h),pc(),!1}if(ye)return i=mi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==ah&&(e=Error(a(422),{cause:l}),hl(Ui(e,r)))):(l!==ah&&(i=Error(a(423),{cause:l}),hl(Ui(i,r))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Ui(l,r),h=Bh(e.stateNode,l,h),mh(e,h),on!==4&&(on=2)),!1;var m=Error(a(520),{cause:l});if(m=Ui(m,r),Ul===null?Ul=[m]:Ul.push(m),on!==4&&(on=2),i===null)return!0;l=Ui(l,r),r=i;do{switch(r.tag){case 3:return r.flags|=65536,e=h&-h,r.lanes|=e,e=Bh(r.stateNode,l,e),mh(r,e),!1;case 1:if(i=r.type,m=r.stateNode,(r.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Mr===null||!Mr.has(m))))return r.flags|=65536,h&=-h,r.lanes|=h,h=eg(h),ng(h,e,r,l),mh(r,h),!1}r=r.return}while(r!==null);return!1}var Hh=Error(a(461)),vn=!1;function Ln(e,i,r,l){i.child=e===null?s_(i,null,r,l):us(i,e.child,r,l)}function ig(e,i,r,l,h){r=r.render;var m=i.ref;if("ref"in l){var b={};for(var D in l)D!=="ref"&&(b[D]=l[D])}else b=l;return rs(i),l=yh(e,i,r,b,m,h),D=Mh(),e!==null&&!vn?(Eh(e,i,h),La(e,i,h)):(ye&&D&&nh(i),i.flags|=1,Ln(e,i,l,h),i.child)}function ag(e,i,r,l,h){if(e===null){var m=r.type;return typeof m=="function"&&!$f(m)&&m.defaultProps===void 0&&r.compare===null?(i.tag=15,i.type=m,rg(e,i,m,l,h)):(e=zu(r.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!Yh(e,h)){var b=m.memoizedProps;if(r=r.compare,r=r!==null?r:ul,r(b,l)&&e.ref===i.ref)return La(e,i,h)}return i.flags|=1,e=Ra(m,l),e.ref=i.ref,e.return=i,i.child=e}function rg(e,i,r,l,h){if(e!==null){var m=e.memoizedProps;if(ul(m,l)&&e.ref===i.ref)if(vn=!1,i.pendingProps=l=m,Yh(e,h))(e.flags&131072)!==0&&(vn=!0);else return i.lanes=e.lanes,La(e,i,h)}return Gh(e,i,r,l,h)}function sg(e,i,r,l){var h=l.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|r:r,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~m}else l=0,i.child=null;return og(e,i,m,r,l)}if((r&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Gu(i,m!==null?m.cachePool:null),m!==null?u_(i,m):gh(),c_(i);else return l=i.lanes=536870912,og(e,i,m!==null?m.baseLanes|r:r,r,l)}else m!==null?(Gu(i,m.cachePool),u_(i,m),vr(),i.memoizedState=null):(e!==null&&Gu(i,null),gh(),vr());return Ln(e,i,h,r),i.child}function bl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function og(e,i,r,l,h){var m=fh();return m=m===null?null:{parent:_n._currentValue,pool:m},i.memoizedState={baseLanes:r,cachePool:m},e!==null&&Gu(i,null),gh(),c_(i),e!==null&&Ks(e,i,l,!0),i.childLanes=h,null}function ic(e,i){return i=rc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function lg(e,i,r){return us(i,e.child,null,r),e=ic(i,i.pendingProps),e.flags|=2,_i(i),i.memoizedState=null,e}function KM(e,i,r){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(ye){if(l.mode==="hidden")return e=ic(i,l),i.lanes=536870912,bl(null,e);if(xh(i),(e=je)?(e=Sv(e,Oi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:cr!==null?{id:ra,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},r=W0(e),r.return=i,i.child=r,Un=i,je=null)):e=null,e===null)throw hr(i);return i.lanes=536870912,null}return ic(i,l)}var m=e.memoizedState;if(m!==null){var b=m.dehydrated;if(xh(i),h)if(i.flags&256)i.flags&=-257,i=lg(e,i,r);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(vn||Ks(e,i,r,!1),h=(r&e.childLanes)!==0,vn||h){if(l=Xe,l!==null&&(b=Mu(l,r),b!==0&&b!==m.retryLane))throw m.retryLane=b,es(e,b),ni(l,e,b),Hh;pc(),i=lg(e,i,r)}else e=m.treeContext,je=Fi(b.nextSibling),Un=i,ye=!0,fr=null,Oi=!1,e!==null&&Y0(i,e),i=ic(i,l),i.flags|=4096;return i}return e=Ra(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function ac(e,i){var r=i.ref;if(r===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(e===null||e.ref!==r)&&(i.flags|=4194816)}}function Gh(e,i,r,l,h){return rs(i),r=yh(e,i,r,l,void 0,h),l=Mh(),e!==null&&!vn?(Eh(e,i,h),La(e,i,h)):(ye&&l&&nh(i),i.flags|=1,Ln(e,i,r,h),i.child)}function ug(e,i,r,l,h,m){return rs(i),i.updateQueue=null,r=h_(i,l,r,h),f_(e),l=Mh(),e!==null&&!vn?(Eh(e,i,m),La(e,i,m)):(ye&&l&&nh(i),i.flags|=1,Ln(e,i,r,m),i.child)}function cg(e,i,r,l,h){if(rs(i),i.stateNode===null){var m=qs,b=r.contextType;typeof b=="object"&&b!==null&&(m=Nn(b)),m=new r(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Ih,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},dh(i),b=r.contextType,m.context=typeof b=="object"&&b!==null?Nn(b):qs,m.state=i.memoizedState,b=r.getDerivedStateFromProps,typeof b=="function"&&(zh(i,r,b,l),m.state=i.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Ih.enqueueReplaceState(m,m.state,null),xl(i,l,m,h),vl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){m=i.stateNode;var D=i.memoizedProps,V=fs(r,D);m.props=V;var nt=m.context,pt=r.contextType;b=qs,typeof pt=="object"&&pt!==null&&(b=Nn(pt));var vt=r.getDerivedStateFromProps;pt=typeof vt=="function"||typeof m.getSnapshotBeforeUpdate=="function",D=i.pendingProps!==D,pt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(D||nt!==b)&&K_(i,m,l,b),pr=!1;var st=i.memoizedState;m.state=st,xl(i,l,m,h),vl(),nt=i.memoizedState,D||st!==nt||pr?(typeof vt=="function"&&(zh(i,r,vt,l),nt=i.memoizedState),(V=pr||Z_(i,r,V,l,st,nt,b))?(pt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=nt),m.props=l,m.state=nt,m.context=b,l=V):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,ph(e,i),b=i.memoizedProps,pt=fs(r,b),m.props=pt,vt=i.pendingProps,st=m.context,nt=r.contextType,V=qs,typeof nt=="object"&&nt!==null&&(V=Nn(nt)),D=r.getDerivedStateFromProps,(nt=typeof D=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==vt||st!==V)&&K_(i,m,l,V),pr=!1,st=i.memoizedState,m.state=st,xl(i,l,m,h),vl();var ft=i.memoizedState;b!==vt||st!==ft||pr||e!==null&&e.dependencies!==null&&Bu(e.dependencies)?(typeof D=="function"&&(zh(i,r,D,l),ft=i.memoizedState),(pt=pr||Z_(i,r,pt,l,st,ft,V)||e!==null&&e.dependencies!==null&&Bu(e.dependencies))?(nt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,ft,V),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,ft,V)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ft),m.props=l,m.state=ft,m.context=V,l=pt):(typeof m.componentDidUpdate!="function"||b===e.memoizedProps&&st===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===e.memoizedProps&&st===e.memoizedState||(i.flags|=1024),l=!1)}return m=l,ac(e,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,r=l&&typeof r.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&l?(i.child=us(i,e.child,null,h),i.child=us(i,null,r,h)):Ln(e,i,r,h),i.memoizedState=m.state,e=i.child):e=La(e,i,h),e}function fg(e,i,r,l){return is(),i.flags|=256,Ln(e,i,r,l),i.child}var Vh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function kh(e){return{baseLanes:e,cachePool:t_()}}function Xh(e,i,r){return e=e!==null?e.childLanes&~r:0,i&&(e|=vi),e}function hg(e,i,r){var l=i.pendingProps,h=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=e!==null&&e.memoizedState===null?!1:(un.current&2)!==0),b&&(h=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,e===null){if(ye){if(h?gr(i):vr(),(e=je)?(e=Sv(e,Oi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:cr!==null?{id:ra,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},r=W0(e),r.return=i,i.child=r,Un=i,je=null)):e=null,e===null)throw hr(i);return Ad(e)?i.lanes=32:i.lanes=536870912,null}var D=l.children;return l=l.fallback,h?(vr(),h=i.mode,D=rc({mode:"hidden",children:D},h),l=ns(l,h,r,null),D.return=i,l.return=i,D.sibling=l,i.child=D,l=i.child,l.memoizedState=kh(r),l.childLanes=Xh(e,b,r),i.memoizedState=Vh,bl(null,l)):(gr(i),Wh(i,D))}var V=e.memoizedState;if(V!==null&&(D=V.dehydrated,D!==null)){if(m)i.flags&256?(gr(i),i.flags&=-257,i=qh(e,i,r)):i.memoizedState!==null?(vr(),i.child=e.child,i.flags|=128,i=null):(vr(),D=l.fallback,h=i.mode,l=rc({mode:"visible",children:l.children},h),D=ns(D,h,r,null),D.flags|=2,l.return=i,D.return=i,l.sibling=D,i.child=l,us(i,e.child,null,r),l=i.child,l.memoizedState=kh(r),l.childLanes=Xh(e,b,r),i.memoizedState=Vh,i=bl(null,l));else if(gr(i),Ad(D)){if(b=D.nextSibling&&D.nextSibling.dataset,b)var nt=b.dgst;b=nt,l=Error(a(419)),l.stack="",l.digest=b,hl({value:l,source:null,stack:null}),i=qh(e,i,r)}else if(vn||Ks(e,i,r,!1),b=(r&e.childLanes)!==0,vn||b){if(b=Xe,b!==null&&(l=Mu(b,r),l!==0&&l!==V.retryLane))throw V.retryLane=l,es(e,l),ni(b,e,l),Hh;Td(D)||pc(),i=qh(e,i,r)}else Td(D)?(i.flags|=192,i.child=e.child,i=null):(e=V.treeContext,je=Fi(D.nextSibling),Un=i,ye=!0,fr=null,Oi=!1,e!==null&&Y0(i,e),i=Wh(i,l.children),i.flags|=4096);return i}return h?(vr(),D=l.fallback,h=i.mode,V=e.child,nt=V.sibling,l=Ra(V,{mode:"hidden",children:l.children}),l.subtreeFlags=V.subtreeFlags&65011712,nt!==null?D=Ra(nt,D):(D=ns(D,h,r,null),D.flags|=2),D.return=i,l.return=i,l.sibling=D,i.child=l,bl(null,l),l=i.child,D=e.child.memoizedState,D===null?D=kh(r):(h=D.cachePool,h!==null?(V=_n._currentValue,h=h.parent!==V?{parent:V,pool:V}:h):h=t_(),D={baseLanes:D.baseLanes|r,cachePool:h}),l.memoizedState=D,l.childLanes=Xh(e,b,r),i.memoizedState=Vh,bl(e.child,l)):(gr(i),r=e.child,e=r.sibling,r=Ra(r,{mode:"visible",children:l.children}),r.return=i,r.sibling=null,e!==null&&(b=i.deletions,b===null?(i.deletions=[e],i.flags|=16):b.push(e)),i.child=r,i.memoizedState=null,r)}function Wh(e,i){return i=rc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function rc(e,i){return e=pi(22,e,null,i),e.lanes=0,e}function qh(e,i,r){return us(i,e.child,null,r),e=Wh(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function dg(e,i,r){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),oh(e.return,i,r)}function jh(e,i,r,l,h,m){var b=e.memoizedState;b===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:r,tailMode:h,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=r,b.tailMode=h,b.treeForkCount=m)}function pg(e,i,r){var l=i.pendingProps,h=l.revealOrder,m=l.tail;l=l.children;var b=un.current,D=(b&2)!==0;if(D?(b=b&1|2,i.flags|=128):b&=1,mt(un,b),Ln(e,i,l,r),l=ye?fl:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dg(e,r,i);else if(e.tag===19)dg(e,r,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(r=i.child,h=null;r!==null;)e=r.alternate,e!==null&&ju(e)===null&&(h=r),r=r.sibling;r=h,r===null?(h=i.child,i.child=null):(h=r.sibling,r.sibling=null),jh(i,!1,h,r,m,l);break;case"backwards":case"unstable_legacy-backwards":for(r=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&ju(e)===null){i.child=h;break}e=h.sibling,h.sibling=r,r=h,h=e}jh(i,!0,r,null,m,l);break;case"together":jh(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function La(e,i,r){if(e!==null&&(i.dependencies=e.dependencies),yr|=i.lanes,(r&i.childLanes)===0)if(e!==null){if(Ks(e,i,r,!1),(r&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,r=Ra(e,e.pendingProps),i.child=r,r.return=i;e.sibling!==null;)e=e.sibling,r=r.sibling=Ra(e,e.pendingProps),r.return=i;r.sibling=null}return i.child}function Yh(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Bu(e)))}function QM(e,i,r){switch(i.tag){case 3:At(i,i.stateNode.containerInfo),dr(i,_n,e.memoizedState.cache),is();break;case 27:case 5:Qt(i);break;case 4:At(i,i.stateNode.containerInfo);break;case 10:dr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,xh(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(gr(i),i.flags|=128,null):(r&i.child.childLanes)!==0?hg(e,i,r):(gr(i),e=La(e,i,r),e!==null?e.sibling:null);gr(i);break;case 19:var h=(e.flags&128)!==0;if(l=(r&i.childLanes)!==0,l||(Ks(e,i,r,!1),l=(r&i.childLanes)!==0),h){if(l)return pg(e,i,r);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),mt(un,un.current),l)break;return null;case 22:return i.lanes=0,sg(e,i,r,i.pendingProps);case 24:dr(i,_n,e.memoizedState.cache)}return La(e,i,r)}function mg(e,i,r){if(e!==null)if(e.memoizedProps!==i.pendingProps)vn=!0;else{if(!Yh(e,r)&&(i.flags&128)===0)return vn=!1,QM(e,i,r);vn=(e.flags&131072)!==0}else vn=!1,ye&&(i.flags&1048576)!==0&&j0(i,fl,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=os(i.elementType),i.type=e,typeof e=="function")$f(e)?(l=fs(e,l),i.tag=1,i=cg(null,i,e,l,r)):(i.tag=0,i=Gh(null,i,e,l,r));else{if(e!=null){var h=e.$$typeof;if(h===w){i.tag=11,i=ig(null,i,e,l,r);break t}else if(h===L){i.tag=14,i=ag(null,i,e,l,r);break t}}throw i=it(e)||e,Error(a(306,i,""))}}return i;case 0:return Gh(e,i,i.type,i.pendingProps,r);case 1:return l=i.type,h=fs(l,i.pendingProps),cg(e,i,l,h,r);case 3:t:{if(At(i,i.stateNode.containerInfo),e===null)throw Error(a(387));l=i.pendingProps;var m=i.memoizedState;h=m.element,ph(e,i),xl(i,l,null,r);var b=i.memoizedState;if(l=b.cache,dr(i,_n,l),l!==m.cache&&lh(i,[_n],r,!0),vl(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=fg(e,i,l,r);break t}else if(l!==h){h=Ui(Error(a(424)),i),hl(h),i=fg(e,i,l,r);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(je=Fi(e.firstChild),Un=i,ye=!0,fr=null,Oi=!0,r=s_(i,null,l,r),i.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(is(),l===h){i=La(e,i,r);break t}Ln(e,i,l,r)}i=i.child}return i;case 26:return ac(e,i),e===null?(r=Av(i.type,null,i.pendingProps,null))?i.memoizedState=r:ye||(r=i.type,e=i.pendingProps,l=yc(rt.current).createElement(r),l[dn]=i,l[En]=e,On(l,r,e),W(l),i.stateNode=l):i.memoizedState=Av(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Qt(i),e===null&&ye&&(l=i.stateNode=Ev(i.type,i.pendingProps,rt.current),Un=i,Oi=!0,h=je,Ar(i.type)?(Rd=h,je=Fi(l.firstChild)):je=h),Ln(e,i,i.pendingProps.children,r),ac(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&ye&&((h=l=je)&&(l=R1(l,i.type,i.pendingProps,Oi),l!==null?(i.stateNode=l,Un=i,je=Fi(l.firstChild),Oi=!1,h=!0):h=!1),h||hr(i)),Qt(i),h=i.type,m=i.pendingProps,b=e!==null?e.memoizedProps:null,l=m.children,Md(h,m)?l=null:b!==null&&Md(h,b)&&(i.flags|=32),i.memoizedState!==null&&(h=yh(e,i,VM,null,null,r),Bl._currentValue=h),ac(e,i),Ln(e,i,l,r),i.child;case 6:return e===null&&ye&&((e=r=je)&&(r=C1(r,i.pendingProps,Oi),r!==null?(i.stateNode=r,Un=i,je=null,e=!0):e=!1),e||hr(i)),null;case 13:return hg(e,i,r);case 4:return At(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=us(i,null,l,r):Ln(e,i,l,r),i.child;case 11:return ig(e,i,i.type,i.pendingProps,r);case 7:return Ln(e,i,i.pendingProps,r),i.child;case 8:return Ln(e,i,i.pendingProps.children,r),i.child;case 12:return Ln(e,i,i.pendingProps.children,r),i.child;case 10:return l=i.pendingProps,dr(i,i.type,l.value),Ln(e,i,l.children,r),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,rs(i),h=Nn(h),l=l(h),i.flags|=1,Ln(e,i,l,r),i.child;case 14:return ag(e,i,i.type,i.pendingProps,r);case 15:return rg(e,i,i.type,i.pendingProps,r);case 19:return pg(e,i,r);case 31:return KM(e,i,r);case 22:return sg(e,i,r,i.pendingProps);case 24:return rs(i),l=Nn(_n),e===null?(h=fh(),h===null&&(h=Xe,m=uh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=r),h=m),i.memoizedState={parent:l,cache:h},dh(i),dr(i,_n,h)):((e.lanes&r)!==0&&(ph(e,i),xl(i,null,null,r),vl()),h=e.memoizedState,m=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),dr(i,_n,l)):(l=m.cache,dr(i,_n,l),l!==h.cache&&lh(i,[_n],r,!0))),Ln(e,i,i.pendingProps.children,r),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function Oa(e){e.flags|=4}function Zh(e,i,r,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Vg())e.flags|=8192;else throw ls=ku,hh}else e.flags&=-16777217}function _g(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Uv(i))if(Vg())e.flags|=8192;else throw ls=ku,hh}function sc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Pe():536870912,e.lanes|=i,lo|=i)}function Tl(e,i){if(!ye)switch(e.tailMode){case"hidden":i=e.tail;for(var r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Ye(e){var i=e.alternate!==null&&e.alternate.child===e.child,r=0,l=0;if(i)for(var h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)r|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=r,i}function JM(e,i,r){var l=i.pendingProps;switch(ih(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(i),null;case 1:return Ye(i),null;case 3:return r=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Da(_n),kt(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zs(i)?Oa(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,rh())),Ye(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(Oa(i),m!==null?(Ye(i),_g(i,m)):(Ye(i),Zh(i,h,null,l,r))):m?m!==e.memoizedState?(Oa(i),Ye(i),_g(i,m)):(Ye(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Oa(i),Ye(i),Zh(i,h,e,l,r)),null;case 27:if(te(i),r=rt.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Oa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ye(i),null}e=Tt.current,Zs(i)?Z0(i):(e=Ev(h,l,r),i.stateNode=e,Oa(i))}return Ye(i),null;case 5:if(te(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Oa(i);else{if(!l){if(i.stateNode===null)throw Error(a(166));return Ye(i),null}if(m=Tt.current,Zs(i))Z0(i);else{var b=yc(rt.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?b.createElement(h,{is:l.is}):b.createElement(h)}}m[dn]=i,m[En]=l;t:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break t;for(;b.sibling===null;){if(b.return===null||b.return===i)break t;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;t:switch(On(m,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Oa(i)}}return Ye(i),Zh(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,r),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Oa(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(a(166));if(e=rt.current,Zs(i)){if(e=i.stateNode,r=i.memoizedProps,l=null,h=Un,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[dn]=i,e=!!(e.nodeValue===r||l!==null&&l.suppressHydrationWarning===!0||hv(e.nodeValue,r)),e||hr(i,!0)}else e=yc(e).createTextNode(l),e[dn]=i,i.stateNode=e}return Ye(i),null;case 31:if(r=i.memoizedState,e===null||e.memoizedState!==null){if(l=Zs(i),r!==null){if(e===null){if(!l)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[dn]=i}else is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),e=!1}else r=rh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),e=!0;if(!e)return i.flags&256?(_i(i),i):(_i(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ye(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Zs(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[dn]=i}else is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),h=!1}else h=rh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(_i(i),i):(_i(i),null)}return _i(i),(i.flags&128)!==0?(i.lanes=r,i):(r=l!==null,e=e!==null&&e.memoizedState!==null,r&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==h&&(l.flags|=2048)),r!==e&&r&&(i.child.flags|=8192),sc(i,i.updateQueue),Ye(i),null);case 4:return kt(),e===null&&gd(i.stateNode.containerInfo),Ye(i),null;case 10:return Da(i.type),Ye(i),null;case 19:if(j(un),l=i.memoizedState,l===null)return Ye(i),null;if(h=(i.flags&128)!==0,m=l.rendering,m===null)if(h)Tl(l,!1);else{if(on!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=ju(e),m!==null){for(i.flags|=128,Tl(l,!1),e=m.updateQueue,i.updateQueue=e,sc(i,e),i.subtreeFlags=0,e=r,r=i.child;r!==null;)X0(r,e),r=r.sibling;return mt(un,un.current&1|2),ye&&Ca(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&A()>fc&&(i.flags|=128,h=!0,Tl(l,!1),i.lanes=4194304)}else{if(!h)if(e=ju(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,sc(i,e),Tl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!ye)return Ye(i),null}else 2*A()-l.renderingStartTime>fc&&r!==536870912&&(i.flags|=128,h=!0,Tl(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(e=l.last,e!==null?e.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=A(),e.sibling=null,r=un.current,mt(un,h?r&1|2:r&1),ye&&Ca(i,l.treeForkCount),e):(Ye(i),null);case 22:case 23:return _i(i),vh(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(r&536870912)!==0&&(i.flags&128)===0&&(Ye(i),i.subtreeFlags&6&&(i.flags|=8192)):Ye(i),r=i.updateQueue,r!==null&&sc(i,r.retryQueue),r=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048),e!==null&&j(ss),null;case 24:return r=null,e!==null&&(r=e.memoizedState.cache),i.memoizedState.cache!==r&&(i.flags|=2048),Da(_n),Ye(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function $M(e,i){switch(ih(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Da(_n),kt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return te(i),null;case 31:if(i.memoizedState!==null){if(_i(i),i.alternate===null)throw Error(a(340));is()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(_i(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));is()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return j(un),null;case 4:return kt(),null;case 10:return Da(i.type),null;case 22:case 23:return _i(i),vh(),e!==null&&j(ss),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Da(_n),null;case 25:return null;default:return null}}function gg(e,i){switch(ih(i),i.tag){case 3:Da(_n),kt();break;case 26:case 27:case 5:te(i);break;case 4:kt();break;case 31:i.memoizedState!==null&&_i(i);break;case 13:_i(i);break;case 19:j(un);break;case 10:Da(i.type);break;case 22:case 23:_i(i),vh(),e!==null&&j(ss);break;case 24:Da(_n)}}function Al(e,i){try{var r=i.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var h=l.next;r=h;do{if((r.tag&e)===e){l=void 0;var m=r.create,b=r.inst;l=m(),b.destroy=l}r=r.next}while(r!==h)}}catch(D){ze(i,i.return,D)}}function xr(e,i,r){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var m=h.next;l=m;do{if((l.tag&e)===e){var b=l.inst,D=b.destroy;if(D!==void 0){b.destroy=void 0,h=i;var V=r,nt=D;try{nt()}catch(pt){ze(h,V,pt)}}}l=l.next}while(l!==m)}}catch(pt){ze(i,i.return,pt)}}function vg(e){var i=e.updateQueue;if(i!==null){var r=e.stateNode;try{l_(i,r)}catch(l){ze(e,e.return,l)}}}function xg(e,i,r){r.props=fs(e.type,e.memoizedProps),r.state=e.memoizedState;try{r.componentWillUnmount()}catch(l){ze(e,i,l)}}function Rl(e,i){try{var r=e.ref;if(r!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof r=="function"?e.refCleanup=r(l):r.current=l}}catch(h){ze(e,i,h)}}function oa(e,i){var r=e.ref,l=e.refCleanup;if(r!==null)if(typeof l=="function")try{l()}catch(h){ze(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(h){ze(e,i,h)}else r.current=null}function Sg(e){var i=e.type,r=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":r.autoFocus&&l.focus();break t;case"img":r.src?l.src=r.src:r.srcSet&&(l.srcset=r.srcSet)}}catch(h){ze(e,e.return,h)}}function Kh(e,i,r){try{var l=e.stateNode;y1(l,e.type,r,i),l[En]=i}catch(h){ze(e,e.return,h)}}function yg(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ar(e.type)||e.tag===4}function Qh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||yg(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jh(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(e,i):(i=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,i.appendChild(e),r=r._reactRootContainer,r!=null||i.onclick!==null||(i.onclick=Ta));else if(l!==4&&(l===27&&Ar(e.type)&&(r=e.stateNode,i=null),e=e.child,e!==null))for(Jh(e,i,r),e=e.sibling;e!==null;)Jh(e,i,r),e=e.sibling}function oc(e,i,r){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?r.insertBefore(e,i):r.appendChild(e);else if(l!==4&&(l===27&&Ar(e.type)&&(r=e.stateNode),e=e.child,e!==null))for(oc(e,i,r),e=e.sibling;e!==null;)oc(e,i,r),e=e.sibling}function Mg(e){var i=e.stateNode,r=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);On(i,l,r),i[dn]=e,i[En]=r}catch(m){ze(e,e.return,m)}}var Pa=!1,xn=!1,$h=!1,Eg=typeof WeakSet=="function"?WeakSet:Set,Cn=null;function t1(e,i){if(e=e.containerInfo,Sd=Cc,e=P0(e),qf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var h=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var b=0,D=-1,V=-1,nt=0,pt=0,vt=e,st=null;e:for(;;){for(var ft;vt!==r||h!==0&&vt.nodeType!==3||(D=b+h),vt!==m||l!==0&&vt.nodeType!==3||(V=b+l),vt.nodeType===3&&(b+=vt.nodeValue.length),(ft=vt.firstChild)!==null;)st=vt,vt=ft;for(;;){if(vt===e)break e;if(st===r&&++nt===h&&(D=b),st===m&&++pt===l&&(V=b),(ft=vt.nextSibling)!==null)break;vt=st,st=vt.parentNode}vt=ft}r=D===-1||V===-1?null:{start:D,end:V}}else r=null}r=r||{start:0,end:0}}else r=null;for(yd={focusedElem:e,selectionRange:r},Cc=!1,Cn=i;Cn!==null;)if(i=Cn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Cn=e;else for(;Cn!==null;){switch(i=Cn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(r=0;r<e.length;r++)h=e[r],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,r=i,h=m.memoizedProps,m=m.memoizedState,l=r.stateNode;try{var Gt=fs(r.type,h);e=l.getSnapshotBeforeUpdate(Gt,m),l.__reactInternalSnapshotBeforeUpdate=e}catch($t){ze(r,r.return,$t)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,r=e.nodeType,r===9)bd(e);else if(r===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":bd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Cn=e;break}Cn=i.return}}function bg(e,i,r){var l=r.flags;switch(r.tag){case 0:case 11:case 15:za(e,r),l&4&&Al(5,r);break;case 1:if(za(e,r),l&4)if(e=r.stateNode,i===null)try{e.componentDidMount()}catch(b){ze(r,r.return,b)}else{var h=fs(r.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(b){ze(r,r.return,b)}}l&64&&vg(r),l&512&&Rl(r,r.return);break;case 3:if(za(e,r),l&64&&(e=r.updateQueue,e!==null)){if(i=null,r.child!==null)switch(r.child.tag){case 27:case 5:i=r.child.stateNode;break;case 1:i=r.child.stateNode}try{l_(e,i)}catch(b){ze(r,r.return,b)}}break;case 27:i===null&&l&4&&Mg(r);case 26:case 5:za(e,r),i===null&&l&4&&Sg(r),l&512&&Rl(r,r.return);break;case 12:za(e,r);break;case 31:za(e,r),l&4&&Rg(e,r);break;case 13:za(e,r),l&4&&Cg(e,r),l&64&&(e=r.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(r=u1.bind(null,r),w1(e,r))));break;case 22:if(l=r.memoizedState!==null||Pa,!l){i=i!==null&&i.memoizedState!==null||xn,h=Pa;var m=xn;Pa=l,(xn=i)&&!m?Ia(e,r,(r.subtreeFlags&8772)!==0):za(e,r),Pa=h,xn=m}break;case 30:break;default:za(e,r)}}function Tg(e){var i=e.alternate;i!==null&&(e.alternate=null,Tg(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&el(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Jn=!1;function Fa(e,i,r){for(r=r.child;r!==null;)Ag(e,i,r),r=r.sibling}function Ag(e,i,r){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(bt,r)}catch{}switch(r.tag){case 26:xn||oa(r,i),Fa(e,i,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:xn||oa(r,i);var l=Je,h=Jn;Ar(r.type)&&(Je=r.stateNode,Jn=!1),Fa(e,i,r),Fl(r.stateNode),Je=l,Jn=h;break;case 5:xn||oa(r,i);case 6:if(l=Je,h=Jn,Je=null,Fa(e,i,r),Je=l,Jn=h,Je!==null)if(Jn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(r.stateNode)}catch(m){ze(r,i,m)}else try{Je.removeChild(r.stateNode)}catch(m){ze(r,i,m)}break;case 18:Je!==null&&(Jn?(e=Je,vv(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,r.stateNode),go(e)):vv(Je,r.stateNode));break;case 4:l=Je,h=Jn,Je=r.stateNode.containerInfo,Jn=!0,Fa(e,i,r),Je=l,Jn=h;break;case 0:case 11:case 14:case 15:xr(2,r,i),xn||xr(4,r,i),Fa(e,i,r);break;case 1:xn||(oa(r,i),l=r.stateNode,typeof l.componentWillUnmount=="function"&&xg(r,i,l)),Fa(e,i,r);break;case 21:Fa(e,i,r);break;case 22:xn=(l=xn)||r.memoizedState!==null,Fa(e,i,r),xn=l;break;default:Fa(e,i,r)}}function Rg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{go(e)}catch(r){ze(i,i.return,r)}}}function Cg(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{go(e)}catch(r){ze(i,i.return,r)}}function e1(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Eg),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Eg),i;default:throw Error(a(435,e.tag))}}function lc(e,i){var r=e1(e);i.forEach(function(l){if(!r.has(l)){r.add(l);var h=c1.bind(null,e,l);l.then(h,h)}})}function $n(e,i){var r=i.deletions;if(r!==null)for(var l=0;l<r.length;l++){var h=r[l],m=e,b=i,D=b;t:for(;D!==null;){switch(D.tag){case 27:if(Ar(D.type)){Je=D.stateNode,Jn=!1;break t}break;case 5:Je=D.stateNode,Jn=!1;break t;case 3:case 4:Je=D.stateNode.containerInfo,Jn=!0;break t}D=D.return}if(Je===null)throw Error(a(160));Ag(m,b,h),Je=null,Jn=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)wg(i,e),i=i.sibling}var Zi=null;function wg(e,i){var r=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:$n(i,e),ti(e),l&4&&(xr(3,e,e.return),Al(3,e),xr(5,e,e.return));break;case 1:$n(i,e),ti(e),l&512&&(xn||r===null||oa(r,r.return)),l&64&&Pa&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(r=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=r===null?l:r.concat(l))));break;case 26:var h=Zi;if($n(i,e),ti(e),l&512&&(xn||r===null||oa(r,r.return)),l&4){var m=r!==null?r.memoizedState:null;if(l=e.memoizedState,r===null)if(l===null)if(e.stateNode===null){t:{l=e.type,r=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Kr]||m[dn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(l),h.head.insertBefore(m,h.querySelector("head > title"))),On(m,l,r),m[dn]=e,W(m),l=m;break t;case"link":var b=wv("link","href",h).get(l+(r.href||""));if(b){for(var D=0;D<b.length;D++)if(m=b[D],m.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&m.getAttribute("rel")===(r.rel==null?null:r.rel)&&m.getAttribute("title")===(r.title==null?null:r.title)&&m.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){b.splice(D,1);break e}}m=h.createElement(l),On(m,l,r),h.head.appendChild(m);break;case"meta":if(b=wv("meta","content",h).get(l+(r.content||""))){for(D=0;D<b.length;D++)if(m=b[D],m.getAttribute("content")===(r.content==null?null:""+r.content)&&m.getAttribute("name")===(r.name==null?null:r.name)&&m.getAttribute("property")===(r.property==null?null:r.property)&&m.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&m.getAttribute("charset")===(r.charSet==null?null:r.charSet)){b.splice(D,1);break e}}m=h.createElement(l),On(m,l,r),h.head.appendChild(m);break;default:throw Error(a(468,l))}m[dn]=e,W(m),l=m}e.stateNode=l}else Dv(h,e.type,e.stateNode);else e.stateNode=Cv(h,l,e.memoizedProps);else m!==l?(m===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):m.count--,l===null?Dv(h,e.type,e.stateNode):Cv(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Kh(e,e.memoizedProps,r.memoizedProps)}break;case 27:$n(i,e),ti(e),l&512&&(xn||r===null||oa(r,r.return)),r!==null&&l&4&&Kh(e,e.memoizedProps,r.memoizedProps);break;case 5:if($n(i,e),ti(e),l&512&&(xn||r===null||oa(r,r.return)),e.flags&32){h=e.stateNode;try{qn(h,"")}catch(Gt){ze(e,e.return,Gt)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Kh(e,h,r!==null?r.memoizedProps:h)),l&1024&&($h=!0);break;case 6:if($n(i,e),ti(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,r=e.stateNode;try{r.nodeValue=l}catch(Gt){ze(e,e.return,Gt)}}break;case 3:if(bc=null,h=Zi,Zi=Mc(i.containerInfo),$n(i,e),Zi=h,ti(e),l&4&&r!==null&&r.memoizedState.isDehydrated)try{go(i.containerInfo)}catch(Gt){ze(e,e.return,Gt)}$h&&($h=!1,Dg(e));break;case 4:l=Zi,Zi=Mc(e.stateNode.containerInfo),$n(i,e),ti(e),Zi=l;break;case 12:$n(i,e),ti(e);break;case 31:$n(i,e),ti(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,lc(e,l)));break;case 13:$n(i,e),ti(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(cc=A()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,lc(e,l)));break;case 22:h=e.memoizedState!==null;var V=r!==null&&r.memoizedState!==null,nt=Pa,pt=xn;if(Pa=nt||h,xn=pt||V,$n(i,e),xn=pt,Pa=nt,ti(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(r===null||V||Pa||xn||hs(e)),r=null,i=e;;){if(i.tag===5||i.tag===26){if(r===null){V=r=i;try{if(m=V.stateNode,h)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{D=V.stateNode;var vt=V.memoizedProps.style,st=vt!=null&&vt.hasOwnProperty("display")?vt.display:null;D.style.display=st==null||typeof st=="boolean"?"":(""+st).trim()}}catch(Gt){ze(V,V.return,Gt)}}}else if(i.tag===6){if(r===null){V=i;try{V.stateNode.nodeValue=h?"":V.memoizedProps}catch(Gt){ze(V,V.return,Gt)}}}else if(i.tag===18){if(r===null){V=i;try{var ft=V.stateNode;h?xv(ft,!0):xv(V.stateNode,!1)}catch(Gt){ze(V,V.return,Gt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;r===i&&(r=null),i=i.return}r===i&&(r=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(r=l.retryQueue,r!==null&&(l.retryQueue=null,lc(e,r))));break;case 19:$n(i,e),ti(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,lc(e,l)));break;case 30:break;case 21:break;default:$n(i,e),ti(e)}}function ti(e){var i=e.flags;if(i&2){try{for(var r,l=e.return;l!==null;){if(yg(l)){r=l;break}l=l.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var h=r.stateNode,m=Qh(e);oc(e,m,h);break;case 5:var b=r.stateNode;r.flags&32&&(qn(b,""),r.flags&=-33);var D=Qh(e);oc(e,D,b);break;case 3:case 4:var V=r.stateNode.containerInfo,nt=Qh(e);Jh(e,nt,V);break;default:throw Error(a(161))}}catch(pt){ze(e,e.return,pt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function Dg(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;Dg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function za(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)bg(e,i.alternate,i),i=i.sibling}function hs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:xr(4,i,i.return),hs(i);break;case 1:oa(i,i.return);var r=i.stateNode;typeof r.componentWillUnmount=="function"&&xg(i,i.return,r),hs(i);break;case 27:Fl(i.stateNode);case 26:case 5:oa(i,i.return),hs(i);break;case 22:i.memoizedState===null&&hs(i);break;case 30:hs(i);break;default:hs(i)}e=e.sibling}}function Ia(e,i,r){for(r=r&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:Ia(h,m,r),Al(4,m);break;case 1:if(Ia(h,m,r),l=m,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){ze(l,l.return,nt)}if(l=m,h=l.updateQueue,h!==null){var D=l.stateNode;try{var V=h.shared.hiddenCallbacks;if(V!==null)for(h.shared.hiddenCallbacks=null,h=0;h<V.length;h++)o_(V[h],D)}catch(nt){ze(l,l.return,nt)}}r&&b&64&&vg(m),Rl(m,m.return);break;case 27:Mg(m);case 26:case 5:Ia(h,m,r),r&&l===null&&b&4&&Sg(m),Rl(m,m.return);break;case 12:Ia(h,m,r);break;case 31:Ia(h,m,r),r&&b&4&&Rg(h,m);break;case 13:Ia(h,m,r),r&&b&4&&Cg(h,m);break;case 22:m.memoizedState===null&&Ia(h,m,r),Rl(m,m.return);break;case 30:break;default:Ia(h,m,r)}i=i.sibling}}function td(e,i){var r=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(r=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==r&&(e!=null&&e.refCount++,r!=null&&dl(r))}function ed(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&dl(e))}function Ki(e,i,r,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Ug(e,i,r,l),i=i.sibling}function Ug(e,i,r,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ki(e,i,r,l),h&2048&&Al(9,i);break;case 1:Ki(e,i,r,l);break;case 3:Ki(e,i,r,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&dl(e)));break;case 12:if(h&2048){Ki(e,i,r,l),e=i.stateNode;try{var m=i.memoizedProps,b=m.id,D=m.onPostCommit;typeof D=="function"&&D(b,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(V){ze(i,i.return,V)}}else Ki(e,i,r,l);break;case 31:Ki(e,i,r,l);break;case 13:Ki(e,i,r,l);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?Ki(e,i,r,l):Cl(e,i):m._visibility&2?Ki(e,i,r,l):(m._visibility|=2,ro(e,i,r,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&td(b,i);break;case 24:Ki(e,i,r,l),h&2048&&ed(i.alternate,i);break;default:Ki(e,i,r,l)}}function ro(e,i,r,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,b=i,D=r,V=l,nt=b.flags;switch(b.tag){case 0:case 11:case 15:ro(m,b,D,V,h),Al(8,b);break;case 23:break;case 22:var pt=b.stateNode;b.memoizedState!==null?pt._visibility&2?ro(m,b,D,V,h):Cl(m,b):(pt._visibility|=2,ro(m,b,D,V,h)),h&&nt&2048&&td(b.alternate,b);break;case 24:ro(m,b,D,V,h),h&&nt&2048&&ed(b.alternate,b);break;default:ro(m,b,D,V,h)}i=i.sibling}}function Cl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var r=e,l=i,h=l.flags;switch(l.tag){case 22:Cl(r,l),h&2048&&td(l.alternate,l);break;case 24:Cl(r,l),h&2048&&ed(l.alternate,l);break;default:Cl(r,l)}i=i.sibling}}var wl=8192;function so(e,i,r){if(e.subtreeFlags&wl)for(e=e.child;e!==null;)Ng(e,i,r),e=e.sibling}function Ng(e,i,r){switch(e.tag){case 26:so(e,i,r),e.flags&wl&&e.memoizedState!==null&&G1(r,Zi,e.memoizedState,e.memoizedProps);break;case 5:so(e,i,r);break;case 3:case 4:var l=Zi;Zi=Mc(e.stateNode.containerInfo),so(e,i,r),Zi=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=wl,wl=16777216,so(e,i,r),wl=l):so(e,i,r));break;default:so(e,i,r)}}function Lg(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function Dl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Cn=l,Pg(l,e)}Lg(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Og(e),e=e.sibling}function Og(e){switch(e.tag){case 0:case 11:case 15:Dl(e),e.flags&2048&&xr(9,e,e.return);break;case 3:Dl(e);break;case 12:Dl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,uc(e)):Dl(e);break;default:Dl(e)}}function uc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];Cn=l,Pg(l,e)}Lg(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:xr(8,i,i.return),uc(i);break;case 22:r=i.stateNode,r._visibility&2&&(r._visibility&=-3,uc(i));break;default:uc(i)}e=e.sibling}}function Pg(e,i){for(;Cn!==null;){var r=Cn;switch(r.tag){case 0:case 11:case 15:xr(8,r,i);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var l=r.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:dl(r.memoizedState.cache)}if(l=r.child,l!==null)l.return=r,Cn=l;else t:for(r=e;Cn!==null;){l=Cn;var h=l.sibling,m=l.return;if(Tg(l),l===r){Cn=null;break t}if(h!==null){h.return=m,Cn=h;break t}Cn=m}}}var n1={getCacheForType:function(e){var i=Nn(_n),r=i.data.get(e);return r===void 0&&(r=e(),i.data.set(e,r)),r},cacheSignal:function(){return Nn(_n).controller.signal}},i1=typeof WeakMap=="function"?WeakMap:Map,Ne=0,Xe=null,_e=null,xe=0,Fe=0,gi=null,Sr=!1,oo=!1,nd=!1,Ba=0,on=0,yr=0,ds=0,id=0,vi=0,lo=0,Ul=null,ei=null,ad=!1,cc=0,Fg=0,fc=1/0,hc=null,Mr=null,Tn=0,Er=null,uo=null,Ha=0,rd=0,sd=null,zg=null,Nl=0,od=null;function xi(){return(Ne&2)!==0&&xe!==0?xe&-xe:F.T!==null?dd():aa()}function Ig(){if(vi===0)if((xe&536870912)===0||ye){var e=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),vi=e}else vi=536870912;return e=mi.current,e!==null&&(e.flags|=32),vi}function ni(e,i,r){(e===Xe&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)&&(co(e,0),br(e,xe,vi,!1)),kn(e,r),((Ne&2)===0||e!==Xe)&&(e===Xe&&((Ne&2)===0&&(ds|=r),on===4&&br(e,xe,vi,!1)),la(e))}function Bg(e,i,r){if((Ne&6)!==0)throw Error(a(327));var l=!r&&(i&127)===0&&(i&e.expiredLanes)===0||Bt(e,i),h=l?s1(e,i):ud(e,i,!0),m=l;do{if(h===0){oo&&!l&&br(e,i,0,!1);break}else{if(r=e.current.alternate,m&&!a1(r)){h=ud(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var b=0;else b=e.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;t:{var D=e;h=Ul;var V=D.current.memoizedState.isDehydrated;if(V&&(co(D,b).flags|=256),b=ud(D,b,!1),b!==2){if(nd&&!V){D.errorRecoveryDisabledLanes|=m,ds|=m,h=4;break t}m=ei,ei=h,m!==null&&(ei===null?ei=m:ei.push.apply(ei,m))}h=b}if(m=!1,h!==2)continue}}if(h===1){co(e,0),br(e,i,0,!0);break}t:{switch(l=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:br(l,i,vi,!Sr);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=cc+300-A(),10<h)){if(br(l,i,vi,!Sr),ht(l,0,!0)!==0)break t;Ha=i,l.timeoutHandle=_v(Hg.bind(null,l,r,ei,hc,ad,i,vi,ds,lo,Sr,m,"Throttled",-0,0),h);break t}Hg(l,r,ei,hc,ad,i,vi,ds,lo,Sr,m,null,-0,0)}}break}while(!0);la(e)}function Hg(e,i,r,l,h,m,b,D,V,nt,pt,vt,st,ft){if(e.timeoutHandle=-1,vt=i.subtreeFlags,vt&8192||(vt&16785408)===16785408){vt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ta},Ng(i,m,vt);var Gt=(m&62914560)===m?cc-A():(m&4194048)===m?Fg-A():0;if(Gt=V1(vt,Gt),Gt!==null){Ha=m,e.cancelPendingCommit=Gt(Yg.bind(null,e,i,m,r,l,h,b,D,V,pt,vt,null,st,ft)),br(e,m,b,!nt);return}}Yg(e,i,m,r,l,h,b,D,V)}function a1(e){for(var i=e;;){var r=i.tag;if((r===0||r===11||r===15)&&i.flags&16384&&(r=i.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var l=0;l<r.length;l++){var h=r[l],m=h.getSnapshot;h=h.value;try{if(!di(m(),h))return!1}catch{return!1}}if(r=i.child,i.subtreeFlags&16384&&r!==null)r.return=i,i=r;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function br(e,i,r,l){i&=~id,i&=~ds,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var m=31-Ot(h),b=1<<m;l[m]=-1,h&=~b}r!==0&&tl(e,r,i)}function dc(){return(Ne&6)===0?(Ll(0),!1):!0}function ld(){if(_e!==null){if(Fe===0)var e=_e.return;else e=_e,wa=as=null,bh(e),to=null,ml=0,e=_e;for(;e!==null;)gg(e.alternate,e),e=e.return;_e=null}}function co(e,i){var r=e.timeoutHandle;r!==-1&&(e.timeoutHandle=-1,b1(r)),r=e.cancelPendingCommit,r!==null&&(e.cancelPendingCommit=null,r()),Ha=0,ld(),Xe=e,_e=r=Ra(e.current,null),xe=i,Fe=0,gi=null,Sr=!1,oo=Bt(e,i),nd=!1,lo=vi=id=ds=yr=on=0,ei=Ul=null,ad=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-Ot(l),m=1<<h;i|=e[h],l&=~m}return Ba=i,Ou(),r}function Gg(e,i){ue=null,F.H=El,i===$s||i===Vu?(i=i_(),Fe=3):i===hh?(i=i_(),Fe=4):Fe=i===Hh?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,gi=i,_e===null&&(on=1,nc(e,Ui(i,e.current)))}function Vg(){var e=mi.current;return e===null?!0:(xe&4194048)===xe?Pi===null:(xe&62914560)===xe||(xe&536870912)!==0?e===Pi:!1}function kg(){var e=F.H;return F.H=El,e===null?El:e}function Xg(){var e=F.A;return F.A=n1,e}function pc(){on=4,Sr||(xe&4194048)!==xe&&mi.current!==null||(oo=!0),(yr&134217727)===0&&(ds&134217727)===0||Xe===null||br(Xe,xe,vi,!1)}function ud(e,i,r){var l=Ne;Ne|=2;var h=kg(),m=Xg();(Xe!==e||xe!==i)&&(hc=null,co(e,i)),i=!1;var b=on;t:do try{if(Fe!==0&&_e!==null){var D=_e,V=gi;switch(Fe){case 8:ld(),b=6;break t;case 3:case 2:case 9:case 6:mi.current===null&&(i=!0);var nt=Fe;if(Fe=0,gi=null,fo(e,D,V,nt),r&&oo){b=0;break t}break;default:nt=Fe,Fe=0,gi=null,fo(e,D,V,nt)}}r1(),b=on;break}catch(pt){Gg(e,pt)}while(!0);return i&&e.shellSuspendCounter++,wa=as=null,Ne=l,F.H=h,F.A=m,_e===null&&(Xe=null,xe=0,Ou()),b}function r1(){for(;_e!==null;)Wg(_e)}function s1(e,i){var r=Ne;Ne|=2;var l=kg(),h=Xg();Xe!==e||xe!==i?(hc=null,fc=A()+500,co(e,i)):oo=Bt(e,i);t:do try{if(Fe!==0&&_e!==null){i=_e;var m=gi;e:switch(Fe){case 1:Fe=0,gi=null,fo(e,i,m,1);break;case 2:case 9:if(e_(m)){Fe=0,gi=null,qg(i);break}i=function(){Fe!==2&&Fe!==9||Xe!==e||(Fe=7),la(e)},m.then(i,i);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:e_(m)?(Fe=0,gi=null,qg(i)):(Fe=0,gi=null,fo(e,i,m,7));break;case 5:var b=null;switch(_e.tag){case 26:b=_e.memoizedState;case 5:case 27:var D=_e;if(b?Uv(b):D.stateNode.complete){Fe=0,gi=null;var V=D.sibling;if(V!==null)_e=V;else{var nt=D.return;nt!==null?(_e=nt,mc(nt)):_e=null}break e}}Fe=0,gi=null,fo(e,i,m,5);break;case 6:Fe=0,gi=null,fo(e,i,m,6);break;case 8:ld(),on=6;break t;default:throw Error(a(462))}}o1();break}catch(pt){Gg(e,pt)}while(!0);return wa=as=null,F.H=l,F.A=h,Ne=r,_e!==null?0:(Xe=null,xe=0,Ou(),on)}function o1(){for(;_e!==null&&!qt();)Wg(_e)}function Wg(e){var i=mg(e.alternate,e,Ba);e.memoizedProps=e.pendingProps,i===null?mc(e):_e=i}function qg(e){var i=e,r=i.alternate;switch(i.tag){case 15:case 0:i=ug(r,i,i.pendingProps,i.type,void 0,xe);break;case 11:i=ug(r,i,i.pendingProps,i.type.render,i.ref,xe);break;case 5:bh(i);default:gg(r,i),i=_e=X0(i,Ba),i=mg(r,i,Ba)}e.memoizedProps=e.pendingProps,i===null?mc(e):_e=i}function fo(e,i,r,l){wa=as=null,bh(i),to=null,ml=0;var h=i.return;try{if(ZM(e,h,i,r,xe)){on=1,nc(e,Ui(r,e.current)),_e=null;return}}catch(m){if(h!==null)throw _e=h,m;on=1,nc(e,Ui(r,e.current)),_e=null;return}i.flags&32768?(ye||l===1?e=!0:oo||(xe&536870912)!==0?e=!1:(Sr=e=!0,(l===2||l===9||l===3||l===6)&&(l=mi.current,l!==null&&l.tag===13&&(l.flags|=16384))),jg(i,e)):mc(i)}function mc(e){var i=e;do{if((i.flags&32768)!==0){jg(i,Sr);return}e=i.return;var r=JM(i.alternate,i,Ba);if(r!==null){_e=r;return}if(i=i.sibling,i!==null){_e=i;return}_e=i=e}while(i!==null);on===0&&(on=5)}function jg(e,i){do{var r=$M(e.alternate,e);if(r!==null){r.flags&=32767,_e=r;return}if(r=e.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!i&&(e=e.sibling,e!==null)){_e=e;return}_e=e=r}while(e!==null);on=6,_e=null}function Yg(e,i,r,l,h,m,b,D,V){e.cancelPendingCommit=null;do _c();while(Tn!==0);if((Ne&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=Qf,Xi(e,r,m,b,D,V),e===Xe&&(_e=Xe=null,xe=0),uo=i,Er=e,Ha=r,rd=m,sd=h,zg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,f1(dt,function(){return $g(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=F.T,F.T=null,h=H.p,H.p=2,b=Ne,Ne|=4;try{t1(e,i,r)}finally{Ne=b,H.p=h,F.T=l}}Tn=1,Zg(),Kg(),Qg()}}function Zg(){if(Tn===1){Tn=0;var e=Er,i=uo,r=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var l=H.p;H.p=2;var h=Ne;Ne|=4;try{wg(i,e);var m=yd,b=P0(e.containerInfo),D=m.focusedElem,V=m.selectionRange;if(b!==D&&D&&D.ownerDocument&&O0(D.ownerDocument.documentElement,D)){if(V!==null&&qf(D)){var nt=V.start,pt=V.end;if(pt===void 0&&(pt=nt),"selectionStart"in D)D.selectionStart=nt,D.selectionEnd=Math.min(pt,D.value.length);else{var vt=D.ownerDocument||document,st=vt&&vt.defaultView||window;if(st.getSelection){var ft=st.getSelection(),Gt=D.textContent.length,$t=Math.min(V.start,Gt),ke=V.end===void 0?$t:Math.min(V.end,Gt);!ft.extend&&$t>ke&&(b=ke,ke=$t,$t=b);var J=L0(D,$t),X=L0(D,ke);if(J&&X&&(ft.rangeCount!==1||ft.anchorNode!==J.node||ft.anchorOffset!==J.offset||ft.focusNode!==X.node||ft.focusOffset!==X.offset)){var et=vt.createRange();et.setStart(J.node,J.offset),ft.removeAllRanges(),$t>ke?(ft.addRange(et),ft.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ft.addRange(et))}}}}for(vt=[],ft=D;ft=ft.parentNode;)ft.nodeType===1&&vt.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<vt.length;D++){var gt=vt[D];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}Cc=!!Sd,yd=Sd=null}finally{Ne=h,H.p=l,F.T=r}}e.current=i,Tn=2}}function Kg(){if(Tn===2){Tn=0;var e=Er,i=uo,r=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var l=H.p;H.p=2;var h=Ne;Ne|=4;try{bg(e,i.alternate,i)}finally{Ne=h,H.p=l,F.T=r}}Tn=3}}function Qg(){if(Tn===4||Tn===3){Tn=0,z();var e=Er,i=uo,r=Ha,l=zg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,uo=Er=null,Jg(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Mr=null),zs(r),i=i.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(bt,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=F.T,h=H.p,H.p=2,F.T=null;try{for(var m=e.onRecoverableError,b=0;b<l.length;b++){var D=l[b];m(D.value,{componentStack:D.stack})}}finally{F.T=i,H.p=h}}(Ha&3)!==0&&_c(),la(e),h=e.pendingLanes,(r&261930)!==0&&(h&42)!==0?e===od?Nl++:(Nl=0,od=e):Nl=0,Ll(0)}}function Jg(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,dl(i)))}function _c(){return Zg(),Kg(),Qg(),$g()}function $g(){if(Tn!==5)return!1;var e=Er,i=rd;rd=0;var r=zs(Ha),l=F.T,h=H.p;try{H.p=32>r?32:r,F.T=null,r=sd,sd=null;var m=Er,b=Ha;if(Tn=0,uo=Er=null,Ha=0,(Ne&6)!==0)throw Error(a(331));var D=Ne;if(Ne|=4,Og(m.current),Ug(m,m.current,b,r),Ne=D,Ll(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(bt,m)}catch{}return!0}finally{H.p=h,F.T=l,Jg(e,i)}}function tv(e,i,r){i=Ui(r,i),i=Bh(e.stateNode,i,2),e=_r(e,i,2),e!==null&&(kn(e,2),la(e))}function ze(e,i,r){if(e.tag===3)tv(e,e,r);else for(;i!==null;){if(i.tag===3){tv(i,e,r);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Mr===null||!Mr.has(l))){e=Ui(r,e),r=eg(2),l=_r(i,r,2),l!==null&&(ng(r,l,i,e),kn(l,2),la(l));break}}i=i.return}}function cd(e,i,r){var l=e.pingCache;if(l===null){l=e.pingCache=new i1;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(r)||(nd=!0,h.add(r),e=l1.bind(null,e,i,r),i.then(e,e))}function l1(e,i,r){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&r,e.warmLanes&=~r,Xe===e&&(xe&r)===r&&(on===4||on===3&&(xe&62914560)===xe&&300>A()-cc?(Ne&2)===0&&co(e,0):id|=r,lo===xe&&(lo=0)),la(e)}function ev(e,i){i===0&&(i=Pe()),e=es(e,i),e!==null&&(kn(e,i),la(e))}function u1(e){var i=e.memoizedState,r=0;i!==null&&(r=i.retryLane),ev(e,r)}function c1(e,i){var r=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(r=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(i),ev(e,r)}function f1(e,i){return be(e,i)}var gc=null,ho=null,fd=!1,vc=!1,hd=!1,Tr=0;function la(e){e!==ho&&e.next===null&&(ho===null?gc=ho=e:ho=ho.next=e),vc=!0,fd||(fd=!0,d1())}function Ll(e,i){if(!hd&&vc){hd=!0;do for(var r=!1,l=gc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var m=0;else{var b=l.suspendedLanes,D=l.pingedLanes;m=(1<<31-Ot(42|e)+1)-1,m&=h&~(b&~D),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(r=!0,rv(l,m))}else m=xe,m=ht(l,l===Xe?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Bt(l,m)||(r=!0,rv(l,m));l=l.next}while(r);hd=!1}}function h1(){nv()}function nv(){vc=fd=!1;var e=0;Tr!==0&&E1()&&(e=Tr);for(var i=A(),r=null,l=gc;l!==null;){var h=l.next,m=iv(l,i);m===0?(l.next=null,r===null?gc=h:r.next=h,h===null&&(ho=r)):(r=l,(e!==0||(m&3)!==0)&&(vc=!0)),l=h}Tn!==0&&Tn!==5||Ll(e),Tr!==0&&(Tr=0)}function iv(e,i){for(var r=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var b=31-Ot(m),D=1<<b,V=h[b];V===-1?((D&r)===0||(D&l)!==0)&&(h[b]=ie(D,i)):V<=i&&(e.expiredLanes|=D),m&=~D}if(i=Xe,r=xe,r=ht(e,e===i?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,r===0||e===i&&(Fe===2||Fe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Le(l),e.callbackNode=null,e.callbackPriority=0;if((r&3)===0||Bt(e,r)){if(i=r&-r,i===e.callbackPriority)return i;switch(l!==null&&Le(l),zs(r)){case 2:case 8:r=yt;break;case 32:r=dt;break;case 268435456:r=wt;break;default:r=dt}return l=av.bind(null,e),r=be(r,l),e.callbackPriority=i,e.callbackNode=r,i}return l!==null&&l!==null&&Le(l),e.callbackPriority=2,e.callbackNode=null,2}function av(e,i){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var r=e.callbackNode;if(_c()&&e.callbackNode!==r)return null;var l=xe;return l=ht(e,e===Xe?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Bg(e,l,i),iv(e,A()),e.callbackNode!=null&&e.callbackNode===r?av.bind(null,e):null)}function rv(e,i){if(_c())return null;Bg(e,i,!0)}function d1(){T1(function(){(Ne&6)!==0?be(_t,h1):nv()})}function dd(){if(Tr===0){var e=Qs;e===0&&(e=Ct,Ct<<=1,(Ct&261888)===0&&(Ct=256)),Tr=e}return Tr}function sv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Au(""+e)}function ov(e,i){var r=i.ownerDocument.createElement("input");return r.name=i.name,r.value=i.value,e.id&&r.setAttribute("form",e.id),i.parentNode.insertBefore(r,i),e=new FormData(e),r.parentNode.removeChild(r),e}function p1(e,i,r,l,h){if(i==="submit"&&r&&r.stateNode===h){var m=sv((h[En]||null).action),b=l.submitter;b&&(i=(i=b[En]||null)?sv(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var D=new Du("action","action",null,l,h);e.push({event:D,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Tr!==0){var V=b?ov(h,b):new FormData(h);Lh(r,{pending:!0,data:V,method:h.method,action:m},null,V)}}else typeof m=="function"&&(D.preventDefault(),V=b?ov(h,b):new FormData(h),Lh(r,{pending:!0,data:V,method:h.method,action:m},m,V))},currentTarget:h}]})}}for(var pd=0;pd<Kf.length;pd++){var md=Kf[pd],m1=md.toLowerCase(),_1=md[0].toUpperCase()+md.slice(1);Yi(m1,"on"+_1)}Yi(I0,"onAnimationEnd"),Yi(B0,"onAnimationIteration"),Yi(H0,"onAnimationStart"),Yi("dblclick","onDoubleClick"),Yi("focusin","onFocus"),Yi("focusout","onBlur"),Yi(NM,"onTransitionRun"),Yi(LM,"onTransitionStart"),Yi(OM,"onTransitionCancel"),Yi(G0,"onTransitionEnd"),Dt("onMouseEnter",["mouseout","mouseover"]),Dt("onMouseLeave",["mouseout","mouseover"]),Dt("onPointerEnter",["pointerout","pointerover"]),Dt("onPointerLeave",["pointerout","pointerover"]),tt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tt("onBeforeInput",["compositionend","keypress","textInput","paste"]),tt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),g1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ol));function lv(e,i){i=(i&4)!==0;for(var r=0;r<e.length;r++){var l=e[r],h=l.event;l=l.listeners;t:{var m=void 0;if(i)for(var b=l.length-1;0<=b;b--){var D=l[b],V=D.instance,nt=D.currentTarget;if(D=D.listener,V!==m&&h.isPropagationStopped())break t;m=D,h.currentTarget=nt;try{m(h)}catch(pt){Lu(pt)}h.currentTarget=null,m=V}else for(b=0;b<l.length;b++){if(D=l[b],V=D.instance,nt=D.currentTarget,D=D.listener,V!==m&&h.isPropagationStopped())break t;m=D,h.currentTarget=nt;try{m(h)}catch(pt){Lu(pt)}h.currentTarget=null,m=V}}}}function ge(e,i){var r=i[sr];r===void 0&&(r=i[sr]=new Set);var l=e+"__bubble";r.has(l)||(uv(i,e,2,!1),r.add(l))}function _d(e,i,r){var l=0;i&&(l|=4),uv(r,e,l,i)}var xc="_reactListening"+Math.random().toString(36).slice(2);function gd(e){if(!e[xc]){e[xc]=!0,ut.forEach(function(r){r!=="selectionchange"&&(g1.has(r)||_d(r,!1,e),_d(r,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[xc]||(i[xc]=!0,_d("selectionchange",!1,i))}}function uv(e,i,r,l){switch(Iv(i)){case 2:var h=W1;break;case 8:h=q1;break;default:h=Nd}r=h.bind(null,i,r,e),h=void 0,!zf||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,r,{capture:!0,passive:h}):e.addEventListener(i,r,!0):h!==void 0?e.addEventListener(i,r,{passive:h}):e.addEventListener(i,r,!1)}function vd(e,i,r,l,h){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var D=l.stateNode.containerInfo;if(D===h)break;if(b===4)for(b=l.return;b!==null;){var V=b.tag;if((V===3||V===4)&&b.stateNode.containerInfo===h)return;b=b.return}for(;D!==null;){if(b=or(D),b===null)return;if(V=b.tag,V===5||V===6||V===26||V===27){l=m=b;continue t}D=D.parentNode}}l=l.return}p0(function(){var nt=m,pt=Pf(r),vt=[];t:{var st=V0.get(e);if(st!==void 0){var ft=Du,Gt=e;switch(e){case"keypress":if(Cu(r)===0)break t;case"keydown":case"keyup":ft=cM;break;case"focusin":Gt="focus",ft=Gf;break;case"focusout":Gt="blur",ft=Gf;break;case"beforeblur":case"afterblur":ft=Gf;break;case"click":if(r.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=g0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=dM;break;case I0:case B0:case H0:ft=eM;break;case G0:ft=mM;break;case"scroll":case"scrollend":ft=Ky;break;case"wheel":ft=gM;break;case"copy":case"cut":case"paste":ft=iM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=x0;break;case"toggle":case"beforetoggle":ft=xM}var $t=(i&4)!==0,ke=!$t&&(e==="scroll"||e==="scrollend"),J=$t?st!==null?st+"Capture":null:st;$t=[];for(var X=nt,et;X!==null;){var gt=X;if(et=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||et===null||J===null||(gt=nl(X,J),gt!=null&&$t.push(Pl(X,gt,et))),ke)break;X=X.return}0<$t.length&&(st=new ft(st,Gt,null,r,pt),vt.push({event:st,listeners:$t}))}}if((i&7)===0){t:{if(st=e==="mouseover"||e==="pointerover",ft=e==="mouseout"||e==="pointerout",st&&r!==Of&&(Gt=r.relatedTarget||r.fromElement)&&(or(Gt)||Gt[Ea]))break t;if((ft||st)&&(st=pt.window===pt?pt:(st=pt.ownerDocument)?st.defaultView||st.parentWindow:window,ft?(Gt=r.relatedTarget||r.toElement,ft=nt,Gt=Gt?or(Gt):null,Gt!==null&&(ke=u(Gt),$t=Gt.tag,Gt!==ke||$t!==5&&$t!==27&&$t!==6)&&(Gt=null)):(ft=null,Gt=nt),ft!==Gt)){if($t=g0,gt="onMouseLeave",J="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&($t=x0,gt="onPointerLeave",J="onPointerEnter",X="pointer"),ke=ft==null?st:Qr(ft),et=Gt==null?st:Qr(Gt),st=new $t(gt,X+"leave",ft,r,pt),st.target=ke,st.relatedTarget=et,gt=null,or(pt)===nt&&($t=new $t(J,X+"enter",Gt,r,pt),$t.target=et,$t.relatedTarget=ke,gt=$t),ke=gt,ft&&Gt)e:{for($t=v1,J=ft,X=Gt,et=0,gt=J;gt;gt=$t(gt))et++;gt=0;for(var Jt=X;Jt;Jt=$t(Jt))gt++;for(;0<et-gt;)J=$t(J),et--;for(;0<gt-et;)X=$t(X),gt--;for(;et--;){if(J===X||X!==null&&J===X.alternate){$t=J;break e}J=$t(J),X=$t(X)}$t=null}else $t=null;ft!==null&&cv(vt,st,ft,$t,!1),Gt!==null&&ke!==null&&cv(vt,ke,Gt,$t,!0)}}t:{if(st=nt?Qr(nt):window,ft=st.nodeName&&st.nodeName.toLowerCase(),ft==="select"||ft==="input"&&st.type==="file")var Ce=R0;else if(T0(st))if(C0)Ce=wM;else{Ce=RM;var jt=AM}else ft=st.nodeName,!ft||ft.toLowerCase()!=="input"||st.type!=="checkbox"&&st.type!=="radio"?nt&&Bs(nt.elementType)&&(Ce=R0):Ce=CM;if(Ce&&(Ce=Ce(e,nt))){A0(vt,Ce,r,pt);break t}jt&&jt(e,st,nt),e==="focusout"&&nt&&st.type==="number"&&nt.memoizedProps.value!=null&&qi(st,"number",st.value)}switch(jt=nt?Qr(nt):window,e){case"focusin":(T0(jt)||jt.contentEditable==="true")&&(ks=jt,jf=nt,cl=null);break;case"focusout":cl=jf=ks=null;break;case"mousedown":Yf=!0;break;case"contextmenu":case"mouseup":case"dragend":Yf=!1,F0(vt,r,pt);break;case"selectionchange":if(UM)break;case"keydown":case"keyup":F0(vt,r,pt)}var he;if(kf)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Vs?E0(e,r)&&(Se="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(Se="onCompositionStart");Se&&(S0&&r.locale!=="ko"&&(Vs||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Vs&&(he=m0()):(ur=pt,If="value"in ur?ur.value:ur.textContent,Vs=!0)),jt=Sc(nt,Se),0<jt.length&&(Se=new v0(Se,e,null,r,pt),vt.push({event:Se,listeners:jt}),he?Se.data=he:(he=b0(r),he!==null&&(Se.data=he)))),(he=yM?MM(e,r):EM(e,r))&&(Se=Sc(nt,"onBeforeInput"),0<Se.length&&(jt=new v0("onBeforeInput","beforeinput",null,r,pt),vt.push({event:jt,listeners:Se}),jt.data=he)),p1(vt,e,nt,r,pt)}lv(vt,i)})}function Pl(e,i,r){return{instance:e,listener:i,currentTarget:r}}function Sc(e,i){for(var r=i+"Capture",l=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=nl(e,r),h!=null&&l.unshift(Pl(e,h,m)),h=nl(e,i),h!=null&&l.push(Pl(e,h,m))),e.tag===3)return l;e=e.return}return[]}function v1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cv(e,i,r,l,h){for(var m=i._reactName,b=[];r!==null&&r!==l;){var D=r,V=D.alternate,nt=D.stateNode;if(D=D.tag,V!==null&&V===l)break;D!==5&&D!==26&&D!==27||nt===null||(V=nt,h?(nt=nl(r,m),nt!=null&&b.unshift(Pl(r,nt,V))):h||(nt=nl(r,m),nt!=null&&b.push(Pl(r,nt,V)))),r=r.return}b.length!==0&&e.push({event:i,listeners:b})}var x1=/\r\n?/g,S1=/\u0000|\uFFFD/g;function fv(e){return(typeof e=="string"?e:""+e).replace(x1,`
`).replace(S1,"")}function hv(e,i){return i=fv(i),fv(e)===i}function Ve(e,i,r,l,h,m){switch(r){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||qn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&qn(e,""+l);break;case"className":re(e,"class",l);break;case"tabIndex":re(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":re(e,r,l);break;case"style":ba(e,l,m);break;case"data":if(i!=="object"){re(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||r!=="href")){e.removeAttribute(r);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Au(""+l),e.setAttribute(r,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(r==="formAction"?(i!=="input"&&Ve(e,i,"name",h.name,h,null),Ve(e,i,"formEncType",h.formEncType,h,null),Ve(e,i,"formMethod",h.formMethod,h,null),Ve(e,i,"formTarget",h.formTarget,h,null)):(Ve(e,i,"encType",h.encType,h,null),Ve(e,i,"method",h.method,h,null),Ve(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(r);break}l=Au(""+l),e.setAttribute(r,l);break;case"onClick":l!=null&&(e.onclick=Ta);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}r=Au(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""+l):e.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,""):e.removeAttribute(r);break;case"capture":case"download":l===!0?e.setAttribute(r,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(r,l):e.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(r,l):e.removeAttribute(r);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(r):e.setAttribute(r,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),ne(e,"popover",l);break;case"xlinkActuate":Ht(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Ht(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Ht(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Ht(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Ht(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Ht(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Ht(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ne(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Yy.get(r)||r,ne(e,r,l))}}function xd(e,i,r,l,h,m){switch(r){case"style":ba(e,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(r=l.__html,r!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=r}}break;case"children":typeof l=="string"?qn(e,l):(typeof l=="number"||typeof l=="bigint")&&qn(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ta);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!at.hasOwnProperty(r))t:{if(r[0]==="o"&&r[1]==="n"&&(h=r.endsWith("Capture"),i=r.slice(2,h?r.length-7:void 0),m=e[En]||null,m=m!=null?m[r]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof l=="function")){typeof m!="function"&&m!==null&&(r in e?e[r]=null:e.hasAttribute(r)&&e.removeAttribute(r)),e.addEventListener(i,l,h);break t}r in e?e[r]=l:l===!0?e.setAttribute(r,""):ne(e,r,l)}}}function On(e,i,r){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,h=!1,m;for(m in r)if(r.hasOwnProperty(m)){var b=r[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,m,b,r,null)}}h&&Ve(e,i,"srcSet",r.srcSet,r,null),l&&Ve(e,i,"src",r.src,r,null);return;case"input":ge("invalid",e);var D=m=b=h=null,V=null,nt=null;for(l in r)if(r.hasOwnProperty(l)){var pt=r[l];if(pt!=null)switch(l){case"name":h=pt;break;case"type":b=pt;break;case"checked":V=pt;break;case"defaultChecked":nt=pt;break;case"value":m=pt;break;case"defaultValue":D=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(a(137,i));break;default:Ve(e,i,l,pt,r,null)}}fi(e,m,D,V,nt,b,h,!1);return;case"select":ge("invalid",e),l=b=m=null;for(h in r)if(r.hasOwnProperty(h)&&(D=r[h],D!=null))switch(h){case"value":m=D;break;case"defaultValue":b=D;break;case"multiple":l=D;default:Ve(e,i,h,D,r,null)}i=m,r=b,e.multiple=!!l,i!=null?hi(e,!!l,i,!1):r!=null&&hi(e,!!l,r,!0);return;case"textarea":ge("invalid",e),m=h=l=null;for(b in r)if(r.hasOwnProperty(b)&&(D=r[b],D!=null))switch(b){case"value":l=D;break;case"defaultValue":h=D;break;case"children":m=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(91));break;default:Ve(e,i,b,D,r,null)}pn(e,l,h,m);return;case"option":for(V in r)if(r.hasOwnProperty(V)&&(l=r[V],l!=null))switch(V){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Ve(e,i,V,l,r,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<Ol.length;l++)ge(Ol[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in r)if(r.hasOwnProperty(nt)&&(l=r[nt],l!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:Ve(e,i,nt,l,r,null)}return;default:if(Bs(i)){for(pt in r)r.hasOwnProperty(pt)&&(l=r[pt],l!==void 0&&xd(e,i,pt,l,r,void 0));return}}for(D in r)r.hasOwnProperty(D)&&(l=r[D],l!=null&&Ve(e,i,D,l,r,null))}function y1(e,i,r,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,b=null,D=null,V=null,nt=null,pt=null;for(ft in r){var vt=r[ft];if(r.hasOwnProperty(ft)&&vt!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":V=vt;default:l.hasOwnProperty(ft)||Ve(e,i,ft,null,l,vt)}}for(var st in l){var ft=l[st];if(vt=r[st],l.hasOwnProperty(st)&&(ft!=null||vt!=null))switch(st){case"type":m=ft;break;case"name":h=ft;break;case"checked":nt=ft;break;case"defaultChecked":pt=ft;break;case"value":b=ft;break;case"defaultValue":D=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(a(137,i));break;default:ft!==vt&&Ve(e,i,st,ft,l,vt)}}Wn(e,b,D,V,nt,pt,m,h);return;case"select":ft=b=D=st=null;for(m in r)if(V=r[m],r.hasOwnProperty(m)&&V!=null)switch(m){case"value":break;case"multiple":ft=V;default:l.hasOwnProperty(m)||Ve(e,i,m,null,l,V)}for(h in l)if(m=l[h],V=r[h],l.hasOwnProperty(h)&&(m!=null||V!=null))switch(h){case"value":st=m;break;case"defaultValue":D=m;break;case"multiple":b=m;default:m!==V&&Ve(e,i,h,m,l,V)}i=D,r=b,l=ft,st!=null?hi(e,!!r,st,!1):!!l!=!!r&&(i!=null?hi(e,!!r,i,!0):hi(e,!!r,r?[]:"",!1));return;case"textarea":ft=st=null;for(D in r)if(h=r[D],r.hasOwnProperty(D)&&h!=null&&!l.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Ve(e,i,D,null,l,h)}for(b in l)if(h=l[b],m=r[b],l.hasOwnProperty(b)&&(h!=null||m!=null))switch(b){case"value":st=h;break;case"defaultValue":ft=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&Ve(e,i,b,h,l,m)}Oe(e,st,ft);return;case"option":for(var Gt in r)if(st=r[Gt],r.hasOwnProperty(Gt)&&st!=null&&!l.hasOwnProperty(Gt))switch(Gt){case"selected":e.selected=!1;break;default:Ve(e,i,Gt,null,l,st)}for(V in l)if(st=l[V],ft=r[V],l.hasOwnProperty(V)&&st!==ft&&(st!=null||ft!=null))switch(V){case"selected":e.selected=st&&typeof st!="function"&&typeof st!="symbol";break;default:Ve(e,i,V,st,l,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $t in r)st=r[$t],r.hasOwnProperty($t)&&st!=null&&!l.hasOwnProperty($t)&&Ve(e,i,$t,null,l,st);for(nt in l)if(st=l[nt],ft=r[nt],l.hasOwnProperty(nt)&&st!==ft&&(st!=null||ft!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(a(137,i));break;default:Ve(e,i,nt,st,l,ft)}return;default:if(Bs(i)){for(var ke in r)st=r[ke],r.hasOwnProperty(ke)&&st!==void 0&&!l.hasOwnProperty(ke)&&xd(e,i,ke,void 0,l,st);for(pt in l)st=l[pt],ft=r[pt],!l.hasOwnProperty(pt)||st===ft||st===void 0&&ft===void 0||xd(e,i,pt,st,l,ft);return}}for(var J in r)st=r[J],r.hasOwnProperty(J)&&st!=null&&!l.hasOwnProperty(J)&&Ve(e,i,J,null,l,st);for(vt in l)st=l[vt],ft=r[vt],!l.hasOwnProperty(vt)||st===ft||st==null&&ft==null||Ve(e,i,vt,st,l,ft)}function dv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function M1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,r=performance.getEntriesByType("resource"),l=0;l<r.length;l++){var h=r[l],m=h.transferSize,b=h.initiatorType,D=h.duration;if(m&&D&&dv(b)){for(b=0,D=h.responseEnd,l+=1;l<r.length;l++){var V=r[l],nt=V.startTime;if(nt>D)break;var pt=V.transferSize,vt=V.initiatorType;pt&&dv(vt)&&(V=V.responseEnd,b+=pt*(V<D?1:(D-nt)/(V-nt)))}if(--l,i+=8*(m+b)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Sd=null,yd=null;function yc(e){return e.nodeType===9?e:e.ownerDocument}function pv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Md(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ed=null;function E1(){var e=window.event;return e&&e.type==="popstate"?e===Ed?!1:(Ed=e,!0):(Ed=null,!1)}var _v=typeof setTimeout=="function"?setTimeout:void 0,b1=typeof clearTimeout=="function"?clearTimeout:void 0,gv=typeof Promise=="function"?Promise:void 0,T1=typeof queueMicrotask=="function"?queueMicrotask:typeof gv<"u"?function(e){return gv.resolve(null).then(e).catch(A1)}:_v;function A1(e){setTimeout(function(){throw e})}function Ar(e){return e==="head"}function vv(e,i){var r=i,l=0;do{var h=r.nextSibling;if(e.removeChild(r),h&&h.nodeType===8)if(r=h.data,r==="/$"||r==="/&"){if(l===0){e.removeChild(h),go(i);return}l--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")l++;else if(r==="html")Fl(e.ownerDocument.documentElement);else if(r==="head"){r=e.ownerDocument.head,Fl(r);for(var m=r.firstChild;m;){var b=m.nextSibling,D=m.nodeName;m[Kr]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&m.rel.toLowerCase()==="stylesheet"||r.removeChild(m),m=b}}else r==="body"&&Fl(e.ownerDocument.body);r=h}while(r);go(i)}function xv(e,i){var r=e;e=0;do{var l=r.nextSibling;if(r.nodeType===1?i?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(i?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(e===0)break;e--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||e++;r=l}while(r)}function bd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var r=i;switch(i=i.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":bd(r),el(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}e.removeChild(r)}}function R1(e,i,r,l){for(;e.nodeType===1;){var h=r;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Kr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=Fi(e.nextSibling),e===null)break}return null}function C1(e,i,r){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!r||(e=Fi(e.nextSibling),e===null))return null;return e}function Sv(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Fi(e.nextSibling),e===null))return null;return e}function Td(e){return e.data==="$?"||e.data==="$~"}function Ad(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function w1(e,i){var r=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||r.readyState!=="loading")i();else{var l=function(){i(),r.removeEventListener("DOMContentLoaded",l)};r.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Fi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Rd=null;function yv(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"||r==="/&"){if(i===0)return Fi(e.nextSibling);i--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||i++}e=e.nextSibling}return null}function Mv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(i===0)return e;i--}else r!=="/$"&&r!=="/&"||i++}e=e.previousSibling}return null}function Ev(e,i,r){switch(i=yc(r),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Fl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);el(e)}var zi=new Map,bv=new Set;function Mc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ga=H.d;H.d={f:D1,r:U1,D:N1,C:L1,L:O1,m:P1,X:z1,S:F1,M:I1};function D1(){var e=Ga.f(),i=dc();return e||i}function U1(e){var i=lr(e);i!==null&&i.tag===5&&i.type==="form"?G_(i):Ga.r(e)}var po=typeof document>"u"?null:document;function Tv(e,i,r){var l=po;if(l&&typeof i=="string"&&i){var h=ae(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof r=="string"&&(h+='[crossorigin="'+r+'"]'),bv.has(h)||(bv.add(h),e={rel:e,crossOrigin:r,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),On(i,"link",e),W(i),l.head.appendChild(i)))}}function N1(e){Ga.D(e),Tv("dns-prefetch",e,null)}function L1(e,i){Ga.C(e,i),Tv("preconnect",e,i)}function O1(e,i,r){Ga.L(e,i,r);var l=po;if(l&&e&&i){var h='link[rel="preload"][as="'+ae(i)+'"]';i==="image"&&r&&r.imageSrcSet?(h+='[imagesrcset="'+ae(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(h+='[imagesizes="'+ae(r.imageSizes)+'"]')):h+='[href="'+ae(e)+'"]';var m=h;switch(i){case"style":m=mo(e);break;case"script":m=_o(e)}zi.has(m)||(e=v({rel:"preload",href:i==="image"&&r&&r.imageSrcSet?void 0:e,as:i},r),zi.set(m,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(zl(m))||i==="script"&&l.querySelector(Il(m))||(i=l.createElement("link"),On(i,"link",e),W(i),l.head.appendChild(i)))}}function P1(e,i){Ga.m(e,i);var r=po;if(r&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ae(l)+'"][href="'+ae(e)+'"]',m=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=_o(e)}if(!zi.has(m)&&(e=v({rel:"modulepreload",href:e},i),zi.set(m,e),r.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Il(m)))return}l=r.createElement("link"),On(l,"link",e),W(l),r.head.appendChild(l)}}}function F1(e,i,r){Ga.S(e,i,r);var l=po;if(l&&e){var h=N(l).hoistableStyles,m=mo(e);i=i||"default";var b=h.get(m);if(!b){var D={loading:0,preload:null};if(b=l.querySelector(zl(m)))D.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},r),(r=zi.get(m))&&Cd(e,r);var V=b=l.createElement("link");W(V),On(V,"link",e),V._p=new Promise(function(nt,pt){V.onload=nt,V.onerror=pt}),V.addEventListener("load",function(){D.loading|=1}),V.addEventListener("error",function(){D.loading|=2}),D.loading|=4,Ec(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:D},h.set(m,b)}}}function z1(e,i){Ga.X(e,i);var r=po;if(r&&e){var l=N(r).hoistableScripts,h=_o(e),m=l.get(h);m||(m=r.querySelector(Il(h)),m||(e=v({src:e,async:!0},i),(i=zi.get(h))&&wd(e,i),m=r.createElement("script"),W(m),On(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function I1(e,i){Ga.M(e,i);var r=po;if(r&&e){var l=N(r).hoistableScripts,h=_o(e),m=l.get(h);m||(m=r.querySelector(Il(h)),m||(e=v({src:e,async:!0,type:"module"},i),(i=zi.get(h))&&wd(e,i),m=r.createElement("script"),W(m),On(m,"link",e),r.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(h,m))}}function Av(e,i,r,l){var h=(h=rt.current)?Mc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(i=mo(r.href),r=N(h).hoistableStyles,l=r.get(i),l||(l={type:"style",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){e=mo(r.href);var m=N(h).hoistableStyles,b=m.get(e);if(b||(h=h.ownerDocument||h,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,b),(m=h.querySelector(zl(e)))&&!m._p&&(b.instance=m,b.state.loading=5),zi.has(e)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},zi.set(e,r),m||B1(h,e,r,b.state))),i&&l===null)throw Error(a(528,""));return b}if(i&&l!==null)throw Error(a(529,""));return null;case"script":return i=r.async,r=r.src,typeof r=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=_o(r),r=N(h).hoistableScripts,l=r.get(i),l||(l={type:"script",instance:null,count:0,state:null},r.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function mo(e){return'href="'+ae(e)+'"'}function zl(e){return'link[rel="stylesheet"]['+e+"]"}function Rv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function B1(e,i,r,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),On(i,"link",r),W(i),e.head.appendChild(i))}function _o(e){return'[src="'+ae(e)+'"]'}function Il(e){return"script[async]"+e}function Cv(e,i,r){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+ae(r.href)+'"]');if(l)return i.instance=l,W(l),l;var h=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),W(l),On(l,"style",h),Ec(l,r.precedence,e),i.instance=l;case"stylesheet":h=mo(r.href);var m=e.querySelector(zl(h));if(m)return i.state.loading|=4,i.instance=m,W(m),m;l=Rv(r),(h=zi.get(h))&&Cd(l,h),m=(e.ownerDocument||e).createElement("link"),W(m);var b=m;return b._p=new Promise(function(D,V){b.onload=D,b.onerror=V}),On(m,"link",l),i.state.loading|=4,Ec(m,r.precedence,e),i.instance=m;case"script":return m=_o(r.src),(h=e.querySelector(Il(m)))?(i.instance=h,W(h),h):(l=r,(h=zi.get(m))&&(l=v({},r),wd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),W(h),On(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,Ec(l,r.precedence,e));return i.instance}function Ec(e,i,r){for(var l=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,m=h,b=0;b<l.length;b++){var D=l[b];if(D.dataset.precedence===i)m=D;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=r.nodeType===9?r.head:r,i.insertBefore(e,i.firstChild))}function Cd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function wd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var bc=null;function wv(e,i,r){if(bc===null){var l=new Map,h=bc=new Map;h.set(r,l)}else h=bc,l=h.get(r),l||(l=new Map,h.set(r,l));if(l.has(e))return l;for(l.set(e,null),r=r.getElementsByTagName(e),h=0;h<r.length;h++){var m=r[h];if(!(m[Kr]||m[dn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=e+b;var D=l.get(b);D?D.push(m):l.set(b,[m])}}return l}function Dv(e,i,r){e=e.ownerDocument||e,e.head.insertBefore(r,i==="title"?e.querySelector("head > title"):null)}function H1(e,i,r){if(r===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function Uv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function G1(e,i,r,l){if(r.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var h=mo(l.href),m=i.querySelector(zl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Tc.bind(e),i.then(e,e)),r.state.loading|=4,r.instance=m,W(m);return}m=i.ownerDocument||i,l=Rv(l),(h=zi.get(h))&&Cd(l,h),m=m.createElement("link"),W(m);var b=m;b._p=new Promise(function(D,V){b.onload=D,b.onerror=V}),On(m,"link",l),r.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(r,i),(i=r.state.preload)&&(r.state.loading&3)===0&&(e.count++,r=Tc.bind(e),i.addEventListener("load",r),i.addEventListener("error",r))}}var Dd=0;function V1(e,i){return e.stylesheets&&e.count===0&&Rc(e,e.stylesheets),0<e.count||0<e.imgCount?function(r){var l=setTimeout(function(){if(e.stylesheets&&Rc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Dd===0&&(Dd=62500*M1());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Rc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Dd?50:800)+i);return e.unsuspend=r,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function Tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ac=null;function Rc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ac=new Map,i.forEach(k1,e),Ac=null,Tc.call(e))}function k1(e,i){if(!(i.state.loading&4)){var r=Ac.get(e);if(r)var l=r.get(null);else{r=new Map,Ac.set(e,r);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var b=h[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(r.set(b.dataset.precedence,b),l=b)}l&&r.set(null,l)}h=i.instance,b=h.getAttribute("data-precedence"),m=r.get(b)||l,m===l&&r.set(null,h),r.set(b,h),this.count++,l=Tc.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var Bl={$$typeof:U,Provider:null,Consumer:null,_currentValue:ot,_currentValue2:ot,_threadCount:0};function X1(e,i,r,l,h,m,b,D,V){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function Nv(e,i,r,l,h,m,b,D,V,nt,pt,vt){return e=new X1(e,i,r,b,V,nt,pt,vt,D),i=1,m===!0&&(i|=24),m=pi(3,null,null,i),e.current=m,m.stateNode=e,i=uh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:r,cache:i},dh(m),e}function Lv(e){return e?(e=qs,e):qs}function Ov(e,i,r,l,h,m){h=Lv(h),l.context===null?l.context=h:l.pendingContext=h,l=mr(i),l.payload={element:r},m=m===void 0?null:m,m!==null&&(l.callback=m),r=_r(e,l,i),r!==null&&(ni(r,e,i),gl(r,e,i))}function Pv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<i?r:i}}function Ud(e,i){Pv(e,i),(e=e.alternate)&&Pv(e,i)}function Fv(e){if(e.tag===13||e.tag===31){var i=es(e,67108864);i!==null&&ni(i,e,67108864),Ud(e,67108864)}}function zv(e){if(e.tag===13||e.tag===31){var i=xi();i=Fs(i);var r=es(e,i);r!==null&&ni(r,e,i),Ud(e,i)}}var Cc=!0;function W1(e,i,r,l){var h=F.T;F.T=null;var m=H.p;try{H.p=2,Nd(e,i,r,l)}finally{H.p=m,F.T=h}}function q1(e,i,r,l){var h=F.T;F.T=null;var m=H.p;try{H.p=8,Nd(e,i,r,l)}finally{H.p=m,F.T=h}}function Nd(e,i,r,l){if(Cc){var h=Ld(l);if(h===null)vd(e,i,l,wc,r),Bv(e,l);else if(Y1(h,e,i,r,l))l.stopPropagation();else if(Bv(e,l),i&4&&-1<j1.indexOf(e)){for(;h!==null;){var m=lr(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Et(m.pendingLanes);if(b!==0){var D=m;for(D.pendingLanes|=2,D.entangledLanes|=2;b;){var V=1<<31-Ot(b);D.entanglements[1]|=V,b&=~V}la(m),(Ne&6)===0&&(fc=A()+500,Ll(0))}}break;case 31:case 13:D=es(m,2),D!==null&&ni(D,m,2),dc(),Ud(m,2)}if(m=Ld(l),m===null&&vd(e,i,l,wc,r),m===h)break;h=m}h!==null&&l.stopPropagation()}else vd(e,i,l,null,r)}}function Ld(e){return e=Pf(e),Od(e)}var wc=null;function Od(e){if(wc=null,e=or(e),e!==null){var i=u(e);if(i===null)e=null;else{var r=i.tag;if(r===13){if(e=c(i),e!==null)return e;e=null}else if(r===31){if(e=f(i),e!==null)return e;e=null}else if(r===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return wc=e,null}function Iv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case _t:return 2;case yt:return 8;case dt:case Xt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var Pd=!1,Rr=null,Cr=null,wr=null,Hl=new Map,Gl=new Map,Dr=[],j1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bv(e,i){switch(e){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Hl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gl.delete(i.pointerId)}}function Vl(e,i,r,l,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:r,eventSystemFlags:l,nativeEvent:m,targetContainers:[h]},i!==null&&(i=lr(i),i!==null&&Fv(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function Y1(e,i,r,l,h){switch(i){case"focusin":return Rr=Vl(Rr,e,i,r,l,h),!0;case"dragenter":return Cr=Vl(Cr,e,i,r,l,h),!0;case"mouseover":return wr=Vl(wr,e,i,r,l,h),!0;case"pointerover":var m=h.pointerId;return Hl.set(m,Vl(Hl.get(m)||null,e,i,r,l,h)),!0;case"gotpointercapture":return m=h.pointerId,Gl.set(m,Vl(Gl.get(m)||null,e,i,r,l,h)),!0}return!1}function Hv(e){var i=or(e.target);if(i!==null){var r=u(i);if(r!==null){if(i=r.tag,i===13){if(i=c(r),i!==null){e.blockedOn=i,Is(e.priority,function(){zv(r)});return}}else if(i===31){if(i=f(r),i!==null){e.blockedOn=i,Is(e.priority,function(){zv(r)});return}}else if(i===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var r=Ld(e.nativeEvent);if(r===null){r=e.nativeEvent;var l=new r.constructor(r.type,r);Of=l,r.target.dispatchEvent(l),Of=null}else return i=lr(r),i!==null&&Fv(i),e.blockedOn=r,!1;i.shift()}return!0}function Gv(e,i,r){Dc(e)&&r.delete(i)}function Z1(){Pd=!1,Rr!==null&&Dc(Rr)&&(Rr=null),Cr!==null&&Dc(Cr)&&(Cr=null),wr!==null&&Dc(wr)&&(wr=null),Hl.forEach(Gv),Gl.forEach(Gv)}function Uc(e,i){e.blockedOn===i&&(e.blockedOn=null,Pd||(Pd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Z1)))}var Nc=null;function Vv(e){Nc!==e&&(Nc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Nc===e&&(Nc=null);for(var i=0;i<e.length;i+=3){var r=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(Od(l||r)===null)continue;break}var m=lr(r);m!==null&&(e.splice(i,3),i-=3,Lh(m,{pending:!0,data:h,method:r.method,action:l},l,h))}}))}function go(e){function i(V){return Uc(V,e)}Rr!==null&&Uc(Rr,e),Cr!==null&&Uc(Cr,e),wr!==null&&Uc(wr,e),Hl.forEach(i),Gl.forEach(i);for(var r=0;r<Dr.length;r++){var l=Dr[r];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Dr.length&&(r=Dr[0],r.blockedOn===null);)Hv(r),r.blockedOn===null&&Dr.shift();if(r=(e.ownerDocument||e).$$reactFormReplay,r!=null)for(l=0;l<r.length;l+=3){var h=r[l],m=r[l+1],b=h[En]||null;if(typeof m=="function")b||Vv(r);else if(b){var D=null;if(m&&m.hasAttribute("formAction")){if(h=m,b=m[En]||null)D=b.formAction;else if(Od(h)!==null)continue}else D=b.action;typeof D=="function"?r[l+1]=D:(r.splice(l,3),l-=3),Vv(r)}}}function kv(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return h=b})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(r,20)}function r(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(r,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Fd(e){this._internalRoot=e}Lc.prototype.render=Fd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var r=i.current,l=xi();Ov(r,l,e,i,null,null)},Lc.prototype.unmount=Fd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;Ov(e.current,2,null,e,null,null),dc(),i[Ea]=null}};function Lc(e){this._internalRoot=e}Lc.prototype.unstable_scheduleHydration=function(e){if(e){var i=aa();e={blockedOn:null,target:e,priority:i};for(var r=0;r<Dr.length&&i!==0&&i<Dr[r].priority;r++);Dr.splice(r,0,e),r===0&&Hv(e)}};var Xv=t.version;if(Xv!=="19.2.4")throw Error(a(527,Xv,"19.2.4"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var K1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{bt=Oc.inject(K1),Mt=Oc}catch{}}return Xl.createRoot=function(e,i){if(!s(e))throw Error(a(299));var r=!1,l="",h=Q_,m=J_,b=$_;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=Nv(e,1,!1,null,null,r,l,null,h,m,b,kv),e[Ea]=i.current,gd(e),new Fd(i)},Xl.hydrateRoot=function(e,i,r){if(!s(e))throw Error(a(299));var l=!1,h="",m=Q_,b=J_,D=$_,V=null;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(h=r.identifierPrefix),r.onUncaughtError!==void 0&&(m=r.onUncaughtError),r.onCaughtError!==void 0&&(b=r.onCaughtError),r.onRecoverableError!==void 0&&(D=r.onRecoverableError),r.formState!==void 0&&(V=r.formState)),i=Nv(e,1,!0,i,r??null,l,h,V,m,b,D,kv),i.context=Lv(null),r=i.current,l=xi(),l=Fs(l),h=mr(l),h.callback=null,_r(r,h,l),r=l,i.current.lanes=r,kn(i,r),la(i),e[Ea]=i.current,gd(e),new Lc(i)},Xl.version="19.2.4",Xl}var tx;function oE(){if(tx)return Bd.exports;tx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Bd.exports=sE(),Bd.exports}var lE=oE();const uE=pS(lE);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zm="183",cE=0,ex=1,fE=2,of=1,hE=2,tu=3,Wr=0,ri=1,Za=2,Qa=0,Po=1,nx=2,ix=3,ax=4,dE=5,bs=100,pE=101,mE=102,_E=103,gE=104,vE=200,xE=201,SE=202,yE=203,Dp=204,Up=205,ME=206,EE=207,bE=208,TE=209,AE=210,RE=211,CE=212,wE=213,DE=214,Np=0,Lp=1,Op=2,Ho=3,Pp=4,Fp=5,zp=6,Ip=7,mS=0,UE=1,NE=2,ga=0,_S=1,gS=2,vS=3,xS=4,SS=5,yS=6,MS=7,ES=300,Ls=301,Go=302,kd=303,Xd=304,Rf=306,Bp=1e3,Ka=1001,Hp=1002,Pn=1003,LE=1004,Pc=1005,Gn=1006,Wd=1007,As=1008,Gi=1009,bS=1010,TS=1011,ou=1012,Im=1013,Sa=1014,pa=1015,tr=1016,Bm=1017,Hm=1018,lu=1020,AS=35902,RS=35899,CS=1021,wS=1022,na=1023,er=1026,Rs=1027,DS=1028,Gm=1029,Vo=1030,Vm=1031,km=1033,lf=33776,uf=33777,cf=33778,ff=33779,Gp=35840,Vp=35841,kp=35842,Xp=35843,Wp=36196,qp=37492,jp=37496,Yp=37488,Zp=37489,Kp=37490,Qp=37491,Jp=37808,$p=37809,tm=37810,em=37811,nm=37812,im=37813,am=37814,rm=37815,sm=37816,om=37817,lm=37818,um=37819,cm=37820,fm=37821,hm=36492,dm=36494,pm=36495,mm=36283,_m=36284,gm=36285,vm=36286,OE=3200,PE=0,FE=1,Ir="",Hi="srgb",ko="srgb-linear",_f="linear",Ie="srgb",vo=7680,rx=519,zE=512,IE=513,BE=514,Xm=515,HE=516,GE=517,Wm=518,VE=519,sx=35044,ox="300 es",ma=2e3,gf=2001;function kE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function vf(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function XE(){const o=vf("canvas");return o.style.display="block",o}const lx={};function ux(...o){const t="THREE."+o.shift();console.log(t,...o)}function US(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=o[1];n&&n.isStackTrace?o[0]+=" "+n.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function oe(...o){o=US(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...o)}}function De(...o){o=US(o);const t="THREE."+o.shift();{const n=o[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...o)}}function xf(...o){const t=o.join(" ");t in lx||(lx[t]=!0,oe(...o))}function WE(o,t,n){return new Promise(function(a,s){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:s();break;case o.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:a()}}setTimeout(u,n)})}const qE={[Np]:Lp,[Op]:zp,[Pp]:Ip,[Ho]:Fp,[Lp]:Np,[zp]:Op,[Ip]:Pp,[Fp]:Ho};class Qo{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const s=a[t];if(s!==void 0){const u=s.indexOf(n);u!==-1&&s.splice(u,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const s=a.slice(0);for(let u=0,c=s.length;u<c;u++)s[u].call(this,t);t.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qd=Math.PI/180,xm=180/Math.PI;function gu(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(In[o&255]+In[o>>8&255]+In[o>>16&255]+In[o>>24&255]+"-"+In[t&255]+In[t>>8&255]+"-"+In[t>>16&15|64]+In[t>>24&255]+"-"+In[n&63|128]+In[n>>8&255]+"-"+In[n>>16&255]+In[n>>24&255]+In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]).toLowerCase()}function Me(o,t,n){return Math.max(t,Math.min(n,o))}function jE(o,t){return(o%t+t)%t}function jd(o,t,n){return(1-n)*o+n*t}function Wl(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ii(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class He{constructor(t=0,n=0){He.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,s=t.elements;return this.x=s[0]*n+s[3]*a+s[6],this.y=s[1]*n+s[4]*a+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),s=Math.sin(n),u=this.x-t.x,c=this.y-t.y;return this.x=u*a-c*s+t.x,this.y=u*s+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jo{constructor(t=0,n=0,a=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=s}static slerpFlat(t,n,a,s,u,c,f){let p=a[s+0],d=a[s+1],_=a[s+2],v=a[s+3],g=u[c+0],S=u[c+1],M=u[c+2],E=u[c+3];if(v!==E||p!==g||d!==S||_!==M){let x=p*g+d*S+_*M+v*E;x<0&&(g=-g,S=-S,M=-M,E=-E,x=-x);let y=1-f;if(x<.9995){const R=Math.acos(x),U=Math.sin(R);y=Math.sin(y*R)/U,f=Math.sin(f*R)/U,p=p*y+g*f,d=d*y+S*f,_=_*y+M*f,v=v*y+E*f}else{p=p*y+g*f,d=d*y+S*f,_=_*y+M*f,v=v*y+E*f;const R=1/Math.sqrt(p*p+d*d+_*_+v*v);p*=R,d*=R,_*=R,v*=R}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=v}static multiplyQuaternionsFlat(t,n,a,s,u,c){const f=a[s],p=a[s+1],d=a[s+2],_=a[s+3],v=u[c],g=u[c+1],S=u[c+2],M=u[c+3];return t[n]=f*M+_*v+p*S-d*g,t[n+1]=p*M+_*g+d*v-f*S,t[n+2]=d*M+_*S+f*g-p*v,t[n+3]=_*M-f*v-p*g-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,s){return this._x=t,this._y=n,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,s=t._y,u=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(s/2),v=f(u/2),g=p(a/2),S=p(s/2),M=p(u/2);switch(c){case"XYZ":this._x=g*_*v+d*S*M,this._y=d*S*v-g*_*M,this._z=d*_*M+g*S*v,this._w=d*_*v-g*S*M;break;case"YXZ":this._x=g*_*v+d*S*M,this._y=d*S*v-g*_*M,this._z=d*_*M-g*S*v,this._w=d*_*v+g*S*M;break;case"ZXY":this._x=g*_*v-d*S*M,this._y=d*S*v+g*_*M,this._z=d*_*M+g*S*v,this._w=d*_*v-g*S*M;break;case"ZYX":this._x=g*_*v-d*S*M,this._y=d*S*v+g*_*M,this._z=d*_*M-g*S*v,this._w=d*_*v+g*S*M;break;case"YZX":this._x=g*_*v+d*S*M,this._y=d*S*v+g*_*M,this._z=d*_*M-g*S*v,this._w=d*_*v-g*S*M;break;case"XZY":this._x=g*_*v-d*S*M,this._y=d*S*v-g*_*M,this._z=d*_*M+g*S*v,this._w=d*_*v+g*S*M;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,s=Math.sin(a);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],s=n[4],u=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],v=n[10],g=a+f+v;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(_-p)*S,this._y=(u-d)*S,this._z=(c-s)*S}else if(a>f&&a>v){const S=2*Math.sqrt(1+a-f-v);this._w=(_-p)/S,this._x=.25*S,this._y=(s+c)/S,this._z=(u+d)/S}else if(f>v){const S=2*Math.sqrt(1+f-a-v);this._w=(u-d)/S,this._x=(s+c)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+v-a-f);this._w=(c-s)/S,this._x=(u+d)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const s=Math.min(1,n/a);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,s=t._y,u=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+s*d-u*p,this._y=s*_+c*p+u*f-a*d,this._z=u*_+c*d+a*p-s*f,this._w=c*_-a*f-s*p-u*d,this._onChangeCallback(),this}slerp(t,n){let a=t._x,s=t._y,u=t._z,c=t._w,f=this.dot(t);f<0&&(a=-a,s=-s,u=-u,c=-c,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+s*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),u=Math.sqrt(a);return this.set(s*Math.sin(t),s*Math.cos(t),u*Math.sin(n),u*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class lt{constructor(t=0,n=0,a=0){lt.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(cx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(cx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[3]*a+u[6]*s,this.y=u[1]*n+u[4]*a+u[7]*s,this.z=u[2]*n+u[5]*a+u[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=t.elements,c=1/(u[3]*n+u[7]*a+u[11]*s+u[15]);return this.x=(u[0]*n+u[4]*a+u[8]*s+u[12])*c,this.y=(u[1]*n+u[5]*a+u[9]*s+u[13])*c,this.z=(u[2]*n+u[6]*a+u[10]*s+u[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,s=this.z,u=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*s-f*a),_=2*(f*n-u*s),v=2*(u*a-c*n);return this.x=n+p*d+c*v-f*_,this.y=a+p*_+f*d-u*v,this.z=s+p*v+u*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,s=this.z,u=t.elements;return this.x=u[0]*n+u[4]*a+u[8]*s,this.y=u[1]*n+u[5]*a+u[9]*s,this.z=u[2]*n+u[6]*a+u[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,s=t.y,u=t.z,c=n.x,f=n.y,p=n.z;return this.x=s*p-u*f,this.y=u*c-a*p,this.z=a*f-s*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return Yd.copy(this).projectOnVector(t),this.sub(Yd)}reflect(t){return this.sub(Yd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(Me(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,s=this.z-t.z;return n*n+a*a+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const s=Math.sin(n)*t;return this.x=s*Math.sin(a),this.y=Math.cos(n)*t,this.z=s*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yd=new lt,cx=new Jo;class de{constructor(t,n,a,s,u,c,f,p,d){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,p,d)}set(t,n,a,s,u,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=s,_[2]=f,_[3]=n,_[4]=u,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],v=a[7],g=a[2],S=a[5],M=a[8],E=s[0],x=s[3],y=s[6],R=s[1],U=s[4],w=s[7],O=s[2],P=s[5],L=s[8];return u[0]=c*E+f*R+p*O,u[3]=c*x+f*U+p*P,u[6]=c*y+f*w+p*L,u[1]=d*E+_*R+v*O,u[4]=d*x+_*U+v*P,u[7]=d*y+_*w+v*L,u[2]=g*E+S*R+M*O,u[5]=g*x+S*U+M*P,u[8]=g*y+S*w+M*L,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*u*_+a*f*p+s*u*d-s*c*p}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],v=_*c-f*d,g=f*p-_*u,S=d*u-c*p,M=n*v+a*g+s*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return t[0]=v*E,t[1]=(s*d-_*a)*E,t[2]=(f*a-s*c)*E,t[3]=g*E,t[4]=(_*n-s*p)*E,t[5]=(s*u-f*n)*E,t[6]=S*E,t[7]=(a*p-d*n)*E,t[8]=(c*n-a*u)*E,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,s,u,c,f){const p=Math.cos(u),d=Math.sin(u);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-s*d,s*p,-s*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(Zd.makeScale(t,n)),this}rotate(t){return this.premultiply(Zd.makeRotation(-t)),this}translate(t,n){return this.premultiply(Zd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<9;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Zd=new de,fx=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hx=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function YE(){const o={enabled:!0,workingColorSpace:ko,spaces:{},convert:function(s,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Ie&&(s.r=Ja(s.r),s.g=Ja(s.g),s.b=Ja(s.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(s.applyMatrix3(this.spaces[u].toXYZ),s.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ie&&(s.r=Fo(s.r),s.g=Fo(s.g),s.b=Fo(s.b))),s},workingToColorSpace:function(s,u){return this.convert(s,this.workingColorSpace,u)},colorSpaceToWorking:function(s,u){return this.convert(s,u,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ir?_f:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,u=this.workingColorSpace){return s.fromArray(this.spaces[u].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,u,c){return s.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,u){return xf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(s,u)},toWorkingColorSpace:function(s,u){return xf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(s,u)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return o.define({[ko]:{primaries:t,whitePoint:a,transfer:_f,toXYZ:fx,fromXYZ:hx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Hi},outputColorSpaceConfig:{drawingBufferColorSpace:Hi}},[Hi]:{primaries:t,whitePoint:a,transfer:Ie,toXYZ:fx,fromXYZ:hx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Hi}}}),o}const Ae=YE();function Ja(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Fo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let xo;class ZE{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{xo===void 0&&(xo=vf("canvas")),xo.width=t.width,xo.height=t.height;const s=xo.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),a=xo}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=vf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const s=a.getImageData(0,0,t.width,t.height),u=s.data;for(let c=0;c<u.length;c++)u[c]=Ja(u[c]/255)*255;return a.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Ja(n[a]/255)*255):n[a]=Ja(n[a]);return{data:n,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let KE=0;class qm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=gu(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let u;if(Array.isArray(s)){u=[];for(let c=0,f=s.length;c<f;c++)s[c].isDataTexture?u.push(Kd(s[c].image)):u.push(Kd(s[c]))}else u=Kd(s);a.url=u}return n||(t.images[this.uuid]=a),a}}function Kd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ZE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let QE=0;const Qd=new lt;class Kn extends Qo{constructor(t=Kn.DEFAULT_IMAGE,n=Kn.DEFAULT_MAPPING,a=Ka,s=Ka,u=Gn,c=As,f=na,p=Gi,d=Kn.DEFAULT_ANISOTROPY,_=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=gu(),this.name="",this.source=new qm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=u,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qd).x}get height(){return this.source.getSize(Qd).y}get depth(){return this.source.getSize(Qd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){oe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){oe(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ES)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bp:t.x=t.x-Math.floor(t.x);break;case Ka:t.x=t.x<0?0:1;break;case Hp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bp:t.y=t.y-Math.floor(t.y);break;case Ka:t.y=t.y<0?0:1;break;case Hp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=ES;Kn.DEFAULT_ANISOTROPY=1;class hn{constructor(t=0,n=0,a=0,s=1){hn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,s){return this.x=t,this.y=n,this.z=a,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,s=this.z,u=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*s+c[12]*u,this.y=c[1]*n+c[5]*a+c[9]*s+c[13]*u,this.z=c[2]*n+c[6]*a+c[10]*s+c[14]*u,this.w=c[3]*n+c[7]*a+c[11]*s+c[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,s,u;const p=t.elements,d=p[0],_=p[4],v=p[8],g=p[1],S=p[5],M=p[9],E=p[2],x=p[6],y=p[10];if(Math.abs(_-g)<.01&&Math.abs(v-E)<.01&&Math.abs(M-x)<.01){if(Math.abs(_+g)<.1&&Math.abs(v+E)<.1&&Math.abs(M+x)<.1&&Math.abs(d+S+y-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const U=(d+1)/2,w=(S+1)/2,O=(y+1)/2,P=(_+g)/4,L=(v+E)/4,T=(M+x)/4;return U>w&&U>O?U<.01?(a=0,s=.707106781,u=.707106781):(a=Math.sqrt(U),s=P/a,u=L/a):w>O?w<.01?(a=.707106781,s=0,u=.707106781):(s=Math.sqrt(w),a=P/s,u=T/s):O<.01?(a=.707106781,s=.707106781,u=0):(u=Math.sqrt(O),a=L/u,s=T/u),this.set(a,s,u,n),this}let R=Math.sqrt((x-M)*(x-M)+(v-E)*(v-E)+(g-_)*(g-_));return Math.abs(R)<.001&&(R=1),this.x=(x-M)/R,this.y=(v-E)/R,this.z=(g-_)/R,this.w=Math.acos((d+S+y-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Me(this.x,t.x,n.x),this.y=Me(this.y,t.y,n.y),this.z=Me(this.z,t.z,n.z),this.w=Me(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=Me(this.x,t,n),this.y=Me(this.y,t,n),this.z=Me(this.z,t,n),this.w=Me(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Me(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JE extends Qo{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new hn(0,0,t,n),this.scissorTest=!1,this.viewport=new hn(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:a.depth},u=new Kn(s),c=a.count;for(let f=0;f<c;f++)this.textures[f]=u.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Gn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let s=0,u=this.textures.length;s<u;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new qm(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class va extends JE{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class NS extends Kn{constructor(t=null,n=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $E extends Kn{constructor(t=null,n=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ka,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Mn{constructor(t,n,a,s,u,c,f,p,d,_,v,g,S,M,E,x){Mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,s,u,c,f,p,d,_,v,g,S,M,E,x)}set(t,n,a,s,u,c,f,p,d,_,v,g,S,M,E,x){const y=this.elements;return y[0]=t,y[4]=n,y[8]=a,y[12]=s,y[1]=u,y[5]=c,y[9]=f,y[13]=p,y[2]=d,y[6]=_,y[10]=v,y[14]=g,y[3]=S,y[7]=M,y[11]=E,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,s=1/So.setFromMatrixColumn(t,0).length(),u=1/So.setFromMatrixColumn(t,1).length(),c=1/So.setFromMatrixColumn(t,2).length();return n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=0,n[4]=a[4]*u,n[5]=a[5]*u,n[6]=a[6]*u,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,s=t.y,u=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(s),d=Math.sin(s),_=Math.cos(u),v=Math.sin(u);if(t.order==="XYZ"){const g=c*_,S=c*v,M=f*_,E=f*v;n[0]=p*_,n[4]=-p*v,n[8]=d,n[1]=S+M*d,n[5]=g-E*d,n[9]=-f*p,n[2]=E-g*d,n[6]=M+S*d,n[10]=c*p}else if(t.order==="YXZ"){const g=p*_,S=p*v,M=d*_,E=d*v;n[0]=g+E*f,n[4]=M*f-S,n[8]=c*d,n[1]=c*v,n[5]=c*_,n[9]=-f,n[2]=S*f-M,n[6]=E+g*f,n[10]=c*p}else if(t.order==="ZXY"){const g=p*_,S=p*v,M=d*_,E=d*v;n[0]=g-E*f,n[4]=-c*v,n[8]=M+S*f,n[1]=S+M*f,n[5]=c*_,n[9]=E-g*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const g=c*_,S=c*v,M=f*_,E=f*v;n[0]=p*_,n[4]=M*d-S,n[8]=g*d+E,n[1]=p*v,n[5]=E*d+g,n[9]=S*d-M,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const g=c*p,S=c*d,M=f*p,E=f*d;n[0]=p*_,n[4]=E-g*v,n[8]=M*v+S,n[1]=v,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=S*v+M,n[10]=g-E*v}else if(t.order==="XZY"){const g=c*p,S=c*d,M=f*p,E=f*d;n[0]=p*_,n[4]=-v,n[8]=d*_,n[1]=g*v+E,n[5]=c*_,n[9]=S*v-M,n[2]=M*v-S,n[6]=f*_,n[10]=E*v+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tb,t,eb)}lookAt(t,n,a){const s=this.elements;return Si.subVectors(t,n),Si.lengthSq()===0&&(Si.z=1),Si.normalize(),Nr.crossVectors(a,Si),Nr.lengthSq()===0&&(Math.abs(a.z)===1?Si.x+=1e-4:Si.z+=1e-4,Si.normalize(),Nr.crossVectors(a,Si)),Nr.normalize(),Fc.crossVectors(Si,Nr),s[0]=Nr.x,s[4]=Fc.x,s[8]=Si.x,s[1]=Nr.y,s[5]=Fc.y,s[9]=Si.y,s[2]=Nr.z,s[6]=Fc.z,s[10]=Si.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,s=n.elements,u=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],v=a[5],g=a[9],S=a[13],M=a[2],E=a[6],x=a[10],y=a[14],R=a[3],U=a[7],w=a[11],O=a[15],P=s[0],L=s[4],T=s[8],C=s[12],$=s[1],G=s[5],Y=s[9],Q=s[13],it=s[2],Z=s[6],F=s[10],H=s[14],ot=s[3],ct=s[7],St=s[11],I=s[15];return u[0]=c*P+f*$+p*it+d*ot,u[4]=c*L+f*G+p*Z+d*ct,u[8]=c*T+f*Y+p*F+d*St,u[12]=c*C+f*Q+p*H+d*I,u[1]=_*P+v*$+g*it+S*ot,u[5]=_*L+v*G+g*Z+S*ct,u[9]=_*T+v*Y+g*F+S*St,u[13]=_*C+v*Q+g*H+S*I,u[2]=M*P+E*$+x*it+y*ot,u[6]=M*L+E*G+x*Z+y*ct,u[10]=M*T+E*Y+x*F+y*St,u[14]=M*C+E*Q+x*H+y*I,u[3]=R*P+U*$+w*it+O*ot,u[7]=R*L+U*G+w*Z+O*ct,u[11]=R*T+U*Y+w*F+O*St,u[15]=R*C+U*Q+w*H+O*I,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],s=t[8],u=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],v=t[6],g=t[10],S=t[14],M=t[3],E=t[7],x=t[11],y=t[15],R=p*S-d*g,U=f*S-d*v,w=f*g-p*v,O=c*S-d*_,P=c*g-p*_,L=c*v-f*_;return n*(E*R-x*U+y*w)-a*(M*R-x*O+y*P)+s*(M*U-E*O+y*L)-u*(M*w-E*P+x*L)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],s=t[2],u=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],v=t[9],g=t[10],S=t[11],M=t[12],E=t[13],x=t[14],y=t[15],R=n*f-a*c,U=n*p-s*c,w=n*d-u*c,O=a*p-s*f,P=a*d-u*f,L=s*d-u*p,T=_*E-v*M,C=_*x-g*M,$=_*y-S*M,G=v*x-g*E,Y=v*y-S*E,Q=g*y-S*x,it=R*Q-U*Y+w*G+O*$-P*C+L*T;if(it===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Z=1/it;return t[0]=(f*Q-p*Y+d*G)*Z,t[1]=(s*Y-a*Q-u*G)*Z,t[2]=(E*L-x*P+y*O)*Z,t[3]=(g*P-v*L-S*O)*Z,t[4]=(p*$-c*Q-d*C)*Z,t[5]=(n*Q-s*$+u*C)*Z,t[6]=(x*w-M*L-y*U)*Z,t[7]=(_*L-g*w+S*U)*Z,t[8]=(c*Y-f*$+d*T)*Z,t[9]=(a*$-n*Y-u*T)*Z,t[10]=(M*P-E*w+y*R)*Z,t[11]=(v*w-_*P-S*R)*Z,t[12]=(f*C-c*G-p*T)*Z,t[13]=(n*G-a*C+s*T)*Z,t[14]=(E*U-M*O-x*R)*Z,t[15]=(_*O-v*U+g*R)*Z,this}scale(t){const n=this.elements,a=t.x,s=t.y,u=t.z;return n[0]*=a,n[4]*=s,n[8]*=u,n[1]*=a,n[5]*=s,n[9]*=u,n[2]*=a,n[6]*=s,n[10]*=u,n[3]*=a,n[7]*=s,n[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,s))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),s=Math.sin(n),u=1-a,c=t.x,f=t.y,p=t.z,d=u*c,_=u*f;return this.set(d*c+a,d*f-s*p,d*p+s*f,0,d*f+s*p,_*f+a,_*p-s*c,0,d*p-s*f,_*p+s*c,u*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,s,u,c){return this.set(1,a,u,0,t,1,c,0,n,s,1,0,0,0,0,1),this}compose(t,n,a){const s=this.elements,u=n._x,c=n._y,f=n._z,p=n._w,d=u+u,_=c+c,v=f+f,g=u*d,S=u*_,M=u*v,E=c*_,x=c*v,y=f*v,R=p*d,U=p*_,w=p*v,O=a.x,P=a.y,L=a.z;return s[0]=(1-(E+y))*O,s[1]=(S+w)*O,s[2]=(M-U)*O,s[3]=0,s[4]=(S-w)*P,s[5]=(1-(g+y))*P,s[6]=(x+R)*P,s[7]=0,s[8]=(M+U)*L,s[9]=(x-R)*L,s[10]=(1-(g+E))*L,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,a){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const u=this.determinant();if(u===0)return a.set(1,1,1),n.identity(),this;let c=So.set(s[0],s[1],s[2]).length();const f=So.set(s[4],s[5],s[6]).length(),p=So.set(s[8],s[9],s[10]).length();u<0&&(c=-c),Qi.copy(this);const d=1/c,_=1/f,v=1/p;return Qi.elements[0]*=d,Qi.elements[1]*=d,Qi.elements[2]*=d,Qi.elements[4]*=_,Qi.elements[5]*=_,Qi.elements[6]*=_,Qi.elements[8]*=v,Qi.elements[9]*=v,Qi.elements[10]*=v,n.setFromRotationMatrix(Qi),a.x=c,a.y=f,a.z=p,this}makePerspective(t,n,a,s,u,c,f=ma,p=!1){const d=this.elements,_=2*u/(n-t),v=2*u/(a-s),g=(n+t)/(n-t),S=(a+s)/(a-s);let M,E;if(p)M=u/(c-u),E=c*u/(c-u);else if(f===ma)M=-(c+u)/(c-u),E=-2*c*u/(c-u);else if(f===gf)M=-c/(c-u),E=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=v,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,s,u,c,f=ma,p=!1){const d=this.elements,_=2/(n-t),v=2/(a-s),g=-(n+t)/(n-t),S=-(a+s)/(a-s);let M,E;if(p)M=1/(c-u),E=c/(c-u);else if(f===ma)M=-2/(c-u),E=-(c+u)/(c-u);else if(f===gf)M=-1/(c-u),E=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=g,d[1]=0,d[5]=v,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=M,d[14]=E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let s=0;s<16;s++)if(n[s]!==a[s])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const So=new lt,Qi=new Mn,tb=new lt(0,0,0),eb=new lt(1,1,1),Nr=new lt,Fc=new lt,Si=new lt,dx=new Mn,px=new Jo;class nr{constructor(t=0,n=0,a=0,s=nr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,s=this._order){return this._x=t,this._y=n,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const s=t.elements,u=s[0],c=s[4],f=s[8],p=s[1],d=s[5],_=s[9],v=s[2],g=s[6],S=s[10];switch(n){case"XYZ":this._y=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,d),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-v,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(Me(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-v,u)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,d),this._y=Math.atan2(f,u)):(this._x=Math.atan2(-_,S),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return dx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dx,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return px.setFromEuler(this),this.setFromQuaternion(px,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nr.DEFAULT_ORDER="XYZ";class LS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let nb=0;const mx=new lt,yo=new Jo,Va=new Mn,zc=new lt,ql=new lt,ib=new lt,ab=new Jo,_x=new lt(1,0,0),gx=new lt(0,1,0),vx=new lt(0,0,1),xx={type:"added"},rb={type:"removed"},Mo={type:"childadded",child:null},Jd={type:"childremoved",child:null};class Ai extends Qo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=gu(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ai.DEFAULT_UP.clone();const t=new lt,n=new nr,a=new Jo,s=new lt(1,1,1);function u(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(u),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mn},normalMatrix:{value:new de}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=Ai.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new LS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return yo.setFromAxisAngle(t,n),this.quaternion.multiply(yo),this}rotateOnWorldAxis(t,n){return yo.setFromAxisAngle(t,n),this.quaternion.premultiply(yo),this}rotateX(t){return this.rotateOnAxis(_x,t)}rotateY(t){return this.rotateOnAxis(gx,t)}rotateZ(t){return this.rotateOnAxis(vx,t)}translateOnAxis(t,n){return mx.copy(t).applyQuaternion(this.quaternion),this.position.add(mx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(_x,t)}translateY(t){return this.translateOnAxis(gx,t)}translateZ(t){return this.translateOnAxis(vx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Va.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?zc.copy(t):zc.set(t,n,a);const s=this.parent;this.updateWorldMatrix(!0,!1),ql.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Va.lookAt(ql,zc,this.up):Va.lookAt(zc,ql,this.up),this.quaternion.setFromRotationMatrix(Va),s&&(Va.extractRotation(s.matrixWorld),yo.setFromRotationMatrix(Va),this.quaternion.premultiply(yo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(De("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xx),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null):De("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(rb),Jd.child=t,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Va.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Va.multiply(t.parent.matrixWorld)),t.applyMatrix4(Va),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xx),Mo.child=t,this.dispatchEvent(Mo),Mo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,s=this.children.length;a<s;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const s=this.children;for(let u=0,c=s.length;u<c;u++)s[u].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,t,ib),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ql,ab,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,a=t.y,s=t.z,u=this.matrix.elements;u[12]+=n-u[0]*n-u[4]*a-u[8]*s,u[13]+=a-u[1]*n-u[5]*a-u[9]*s,u[14]+=s-u[2]*n-u[6]*a-u[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let u=0,c=s.length;u<c;u++)s[u].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(f=>({...f})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function u(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=u(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const v=p[d];u(t.shapes,v)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(u(t.materials,this.material[p]));s.material=f}else s.material=u(t.materials,this.material);if(this.children.length>0){s.children=[];for(let f=0;f<this.children.length;f++)s.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];s.animations.push(u(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),v=c(t.shapes),g=c(t.skeletons),S=c(t.animations),M=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),v.length>0&&(a.shapes=v),g.length>0&&(a.skeletons=g),S.length>0&&(a.animations=S),M.length>0&&(a.nodes=M)}return a.object=s,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),t.pivot!==null&&(this.pivot=t.pivot.clone()),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const s=t.children[a];this.add(s.clone())}return this}}Ai.DEFAULT_UP=new lt(0,1,0);Ai.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ai.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ic extends Ai{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sb={type:"move"};class $d{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ic,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ic,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new lt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new lt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ic,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new lt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new lt),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let s=null,u=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const E of t.hand.values()){const x=n.getJointPose(E,a),y=this._getHandJoint(d,E);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const _=d.joints["index-finger-tip"],v=d.joints["thumb-tip"],g=_.position.distanceTo(v.position),S=.02,M=.005;d.inputState.pinching&&g>S+M?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&g<=S-M&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=n.getPose(t.gripSpace,a),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(s=n.getPose(t.targetRaySpace,a),s===null&&u!==null&&(s=u),s!==null&&(f.matrix.fromArray(s.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,s.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(s.linearVelocity)):f.hasLinearVelocity=!1,s.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(s.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return f!==null&&(f.visible=s!==null),p!==null&&(p.visible=u!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new Ic;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}const OS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Bc={h:0,s:0,l:0};function tp(o,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?o+(t-o)*6*n:n<1/2?t:n<2/3?o+(t-o)*6*(2/3-n):o}class Be{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Hi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ae.colorSpaceToWorking(this,n),this}setRGB(t,n,a,s=Ae.workingColorSpace){return this.r=t,this.g=n,this.b=a,Ae.colorSpaceToWorking(this,s),this}setHSL(t,n,a,s=Ae.workingColorSpace){if(t=jE(t,1),n=Me(n,0,1),a=Me(a,0,1),n===0)this.r=this.g=this.b=a;else{const u=a<=.5?a*(1+n):a+n-a*n,c=2*a-u;this.r=tp(c,u,t+1/3),this.g=tp(c,u,t),this.b=tp(c,u,t-1/3)}return Ae.colorSpaceToWorking(this,s),this}setStyle(t,n=Hi){function a(u){u!==void 0&&parseFloat(u)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const c=s[1],f=s[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=s[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Hi){const a=OS[t.toLowerCase()];return a!==void 0?this.setHex(a,n):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ja(t.r),this.g=Ja(t.g),this.b=Ja(t.b),this}copyLinearToSRGB(t){return this.r=Fo(t.r),this.g=Fo(t.g),this.b=Fo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hi){return Ae.workingToColorSpace(Bn.copy(this),t),Math.round(Me(Bn.r*255,0,255))*65536+Math.round(Me(Bn.g*255,0,255))*256+Math.round(Me(Bn.b*255,0,255))}getHexString(t=Hi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=Ae.workingColorSpace){Ae.workingToColorSpace(Bn.copy(this),n);const a=Bn.r,s=Bn.g,u=Bn.b,c=Math.max(a,s,u),f=Math.min(a,s,u);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const v=c-f;switch(d=_<=.5?v/(c+f):v/(2-c-f),c){case a:p=(s-u)/v+(s<u?6:0);break;case s:p=(u-a)/v+2;break;case u:p=(a-s)/v+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=Ae.workingColorSpace){return Ae.workingToColorSpace(Bn.copy(this),n),t.r=Bn.r,t.g=Bn.g,t.b=Bn.b,t}getStyle(t=Hi){Ae.workingToColorSpace(Bn.copy(this),t);const n=Bn.r,a=Bn.g,s=Bn.b;return t!==Hi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(t,n,a){return this.getHSL(Lr),this.setHSL(Lr.h+t,Lr.s+n,Lr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Lr),t.getHSL(Bc);const a=jd(Lr.h,Bc.h,n),s=jd(Lr.s,Bc.s,n),u=jd(Lr.l,Bc.l,n);return this.setHSL(a,s,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,s=this.b,u=t.elements;return this.r=u[0]*n+u[3]*a+u[6]*s,this.g=u[1]*n+u[4]*a+u[7]*s,this.b=u[2]*n+u[5]*a+u[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bn=new Be;Be.NAMES=OS;class ob extends Ai{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nr,this.environmentIntensity=1,this.environmentRotation=new nr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Ji=new lt,ka=new lt,ep=new lt,Xa=new lt,Eo=new lt,bo=new lt,Sx=new lt,np=new lt,ip=new lt,ap=new lt,rp=new hn,sp=new hn,op=new hn;class ea{constructor(t=new lt,n=new lt,a=new lt){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,s){s.subVectors(a,n),Ji.subVectors(t,n),s.cross(Ji);const u=s.lengthSq();return u>0?s.multiplyScalar(1/Math.sqrt(u)):s.set(0,0,0)}static getBarycoord(t,n,a,s,u){Ji.subVectors(s,n),ka.subVectors(a,n),ep.subVectors(t,n);const c=Ji.dot(Ji),f=Ji.dot(ka),p=Ji.dot(ep),d=ka.dot(ka),_=ka.dot(ep),v=c*d-f*f;if(v===0)return u.set(0,0,0),null;const g=1/v,S=(d*p-f*_)*g,M=(c*_-f*p)*g;return u.set(1-S-M,M,S)}static containsPoint(t,n,a,s){return this.getBarycoord(t,n,a,s,Xa)===null?!1:Xa.x>=0&&Xa.y>=0&&Xa.x+Xa.y<=1}static getInterpolation(t,n,a,s,u,c,f,p){return this.getBarycoord(t,n,a,s,Xa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Xa.x),p.addScaledVector(c,Xa.y),p.addScaledVector(f,Xa.z),p)}static getInterpolatedAttribute(t,n,a,s,u,c){return rp.setScalar(0),sp.setScalar(0),op.setScalar(0),rp.fromBufferAttribute(t,n),sp.fromBufferAttribute(t,a),op.fromBufferAttribute(t,s),c.setScalar(0),c.addScaledVector(rp,u.x),c.addScaledVector(sp,u.y),c.addScaledVector(op,u.z),c}static isFrontFacing(t,n,a,s){return Ji.subVectors(a,n),ka.subVectors(t,n),Ji.cross(ka).dot(s)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,s){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,a,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ji.subVectors(this.c,this.b),ka.subVectors(this.a,this.b),Ji.cross(ka).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ea.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ea.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,s,u){return ea.getInterpolation(t,this.a,this.b,this.c,n,a,s,u)}containsPoint(t){return ea.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ea.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,s=this.b,u=this.c;let c,f;Eo.subVectors(s,a),bo.subVectors(u,a),np.subVectors(t,a);const p=Eo.dot(np),d=bo.dot(np);if(p<=0&&d<=0)return n.copy(a);ip.subVectors(t,s);const _=Eo.dot(ip),v=bo.dot(ip);if(_>=0&&v<=_)return n.copy(s);const g=p*v-_*d;if(g<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(Eo,c);ap.subVectors(t,u);const S=Eo.dot(ap),M=bo.dot(ap);if(M>=0&&S<=M)return n.copy(u);const E=S*d-p*M;if(E<=0&&d>=0&&M<=0)return f=d/(d-M),n.copy(a).addScaledVector(bo,f);const x=_*M-S*v;if(x<=0&&v-_>=0&&S-M>=0)return Sx.subVectors(u,s),f=(v-_)/(v-_+(S-M)),n.copy(s).addScaledVector(Sx,f);const y=1/(x+E+g);return c=E*y,f=g*y,n.copy(a).addScaledVector(Eo,c).addScaledVector(bo,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class vu{constructor(t=new lt(1/0,1/0,1/0),n=new lt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint($i.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint($i.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=$i.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const u=a.getAttribute("position");if(n===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=u.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,$i):$i.fromBufferAttribute(u,c),$i.applyMatrix4(t.matrixWorld),this.expandByPoint($i);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Hc.copy(a.boundingBox)),Hc.applyMatrix4(t.matrixWorld),this.union(Hc)}const s=t.children;for(let u=0,c=s.length;u<c;u++)this.expandByObject(s[u],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$i),$i.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(jl),Gc.subVectors(this.max,jl),To.subVectors(t.a,jl),Ao.subVectors(t.b,jl),Ro.subVectors(t.c,jl),Or.subVectors(Ao,To),Pr.subVectors(Ro,Ao),ps.subVectors(To,Ro);let n=[0,-Or.z,Or.y,0,-Pr.z,Pr.y,0,-ps.z,ps.y,Or.z,0,-Or.x,Pr.z,0,-Pr.x,ps.z,0,-ps.x,-Or.y,Or.x,0,-Pr.y,Pr.x,0,-ps.y,ps.x,0];return!lp(n,To,Ao,Ro,Gc)||(n=[1,0,0,0,1,0,0,0,1],!lp(n,To,Ao,Ro,Gc))?!1:(Vc.crossVectors(Or,Pr),n=[Vc.x,Vc.y,Vc.z],lp(n,To,Ao,Ro,Gc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$i).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($i).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Wa=[new lt,new lt,new lt,new lt,new lt,new lt,new lt,new lt],$i=new lt,Hc=new vu,To=new lt,Ao=new lt,Ro=new lt,Or=new lt,Pr=new lt,ps=new lt,jl=new lt,Gc=new lt,Vc=new lt,ms=new lt;function lp(o,t,n,a,s){for(let u=0,c=o.length-3;u<=c;u+=3){ms.fromArray(o,u);const f=s.x*Math.abs(ms.x)+s.y*Math.abs(ms.y)+s.z*Math.abs(ms.z),p=t.dot(ms),d=n.dot(ms),_=a.dot(ms);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const Sn=new lt,kc=new He;let lb=0;class xa{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=sx,this.updateRanges=[],this.gpuType=pa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let s=0,u=this.itemSize;s<u;s++)this.array[t+s]=n.array[a+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)kc.fromBufferAttribute(this,n),kc.applyMatrix3(t),this.setXY(n,kc.x,kc.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Wl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ii(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Wl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Wl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Wl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Wl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ii(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ii(n,this.array),a=ii(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,s){return t*=this.itemSize,this.normalized&&(n=ii(n,this.array),a=ii(a,this.array),s=ii(s,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this}setXYZW(t,n,a,s,u){return t*=this.itemSize,this.normalized&&(n=ii(n,this.array),a=ii(a,this.array),s=ii(s,this.array),u=ii(u,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=s,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==sx&&(t.usage=this.usage),t}}class PS extends xa{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class FS extends xa{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class $a extends xa{constructor(t,n,a){super(new Float32Array(t),n,a)}}const ub=new vu,Yl=new lt,up=new lt;class jm{constructor(t=new lt,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):ub.setFromPoints(t).getCenter(a);let s=0;for(let u=0,c=t.length;u<c;u++)s=Math.max(s,a.distanceToSquared(t[u]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yl.subVectors(t,this.center);const n=Yl.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),s=(a-this.radius)*.5;this.center.addScaledVector(Yl,s/a),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(up.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yl.copy(t.center).add(up)),this.expandByPoint(Yl.copy(t.center).sub(up))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let cb=0;const Ii=new Mn,cp=new Ai,Co=new lt,yi=new vu,Zl=new vu,wn=new lt;class rr extends Qo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cb++}),this.uuid=gu(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kE(t)?FS:PS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const u=new de().getNormalMatrix(t);a.applyNormalMatrix(u),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,n,a){return Ii.makeTranslation(t,n,a),this.applyMatrix4(Ii),this}scale(t,n,a){return Ii.makeScale(t,n,a),this.applyMatrix4(Ii),this}lookAt(t){return cp.lookAt(t),cp.updateMatrix(),this.applyMatrix4(cp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Co).negate(),this.translate(Co.x,Co.y,Co.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let s=0,u=t.length;s<u;s++){const c=t[s];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new $a(a,3))}else{const a=Math.min(t.length,n.count);for(let s=0;s<a;s++){const u=t[s];n.setXYZ(s,u.x,u.y,u.z||0)}t.length>n.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new lt(-1/0,-1/0,-1/0),new lt(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,s=n.length;a<s;a++){const u=n[a];yi.setFromBufferAttribute(u),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,yi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,yi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(yi.min),this.boundingBox.expandByPoint(yi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&De('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jm);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){De("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new lt,1/0);return}if(t){const a=this.boundingSphere.center;if(yi.setFromBufferAttribute(t),n)for(let u=0,c=n.length;u<c;u++){const f=n[u];Zl.setFromBufferAttribute(f),this.morphTargetsRelative?(wn.addVectors(yi.min,Zl.min),yi.expandByPoint(wn),wn.addVectors(yi.max,Zl.max),yi.expandByPoint(wn)):(yi.expandByPoint(Zl.min),yi.expandByPoint(Zl.max))}yi.getCenter(a);let s=0;for(let u=0,c=t.count;u<c;u++)wn.fromBufferAttribute(t,u),s=Math.max(s,a.distanceToSquared(wn));if(n)for(let u=0,c=n.length;u<c;u++){const f=n[u],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)wn.fromBufferAttribute(f,d),p&&(Co.fromBufferAttribute(t,d),wn.add(Co)),s=Math.max(s,a.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&De('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){De("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,s=n.normal,u=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xa(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let T=0;T<a.count;T++)f[T]=new lt,p[T]=new lt;const d=new lt,_=new lt,v=new lt,g=new He,S=new He,M=new He,E=new lt,x=new lt;function y(T,C,$){d.fromBufferAttribute(a,T),_.fromBufferAttribute(a,C),v.fromBufferAttribute(a,$),g.fromBufferAttribute(u,T),S.fromBufferAttribute(u,C),M.fromBufferAttribute(u,$),_.sub(d),v.sub(d),S.sub(g),M.sub(g);const G=1/(S.x*M.y-M.x*S.y);isFinite(G)&&(E.copy(_).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(G),x.copy(v).multiplyScalar(S.x).addScaledVector(_,-M.x).multiplyScalar(G),f[T].add(E),f[C].add(E),f[$].add(E),p[T].add(x),p[C].add(x),p[$].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let T=0,C=R.length;T<C;++T){const $=R[T],G=$.start,Y=$.count;for(let Q=G,it=G+Y;Q<it;Q+=3)y(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const U=new lt,w=new lt,O=new lt,P=new lt;function L(T){O.fromBufferAttribute(s,T),P.copy(O);const C=f[T];U.copy(C),U.sub(O.multiplyScalar(O.dot(C))).normalize(),w.crossVectors(P,C);const G=w.dot(p[T])<0?-1:1;c.setXYZW(T,U.x,U.y,U.z,G)}for(let T=0,C=R.length;T<C;++T){const $=R[T],G=$.start,Y=$.count;for(let Q=G,it=G+Y;Q<it;Q+=3)L(t.getX(Q+0)),L(t.getX(Q+1)),L(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new xa(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let g=0,S=a.count;g<S;g++)a.setXYZ(g,0,0,0);const s=new lt,u=new lt,c=new lt,f=new lt,p=new lt,d=new lt,_=new lt,v=new lt;if(t)for(let g=0,S=t.count;g<S;g+=3){const M=t.getX(g+0),E=t.getX(g+1),x=t.getX(g+2);s.fromBufferAttribute(n,M),u.fromBufferAttribute(n,E),c.fromBufferAttribute(n,x),_.subVectors(c,u),v.subVectors(s,u),_.cross(v),f.fromBufferAttribute(a,M),p.fromBufferAttribute(a,E),d.fromBufferAttribute(a,x),f.add(_),p.add(_),d.add(_),a.setXYZ(M,f.x,f.y,f.z),a.setXYZ(E,p.x,p.y,p.z),a.setXYZ(x,d.x,d.y,d.z)}else for(let g=0,S=n.count;g<S;g+=3)s.fromBufferAttribute(n,g+0),u.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),_.subVectors(c,u),v.subVectors(s,u),_.cross(v),a.setXYZ(g+0,_.x,_.y,_.z),a.setXYZ(g+1,_.x,_.y,_.z),a.setXYZ(g+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)wn.fromBufferAttribute(t,n),wn.normalize(),t.setXYZ(n,wn.x,wn.y,wn.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,v=f.normalized,g=new d.constructor(p.length*_);let S=0,M=0;for(let E=0,x=p.length;E<x;E++){f.isInterleavedBufferAttribute?S=p[E]*f.data.stride+f.offset:S=p[E]*_;for(let y=0;y<_;y++)g[M++]=d[S++]}return new xa(g,_,v)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,a=this.index.array,s=this.attributes;for(const f in s){const p=s[f],d=t(p,a);n.setAttribute(f,d)}const u=this.morphAttributes;for(const f in u){const p=[],d=u[f];for(let _=0,v=d.length;_<v;_++){const g=d[_],S=t(g,a);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const s={};let u=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let v=0,g=d.length;v<g;v++){const S=d[v];_.push(S.toJSON(t.data))}_.length>0&&(s[p]=_,u=!0)}u&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const s=t.attributes;for(const d in s){const _=s[d];this.setAttribute(d,_.clone(n))}const u=t.morphAttributes;for(const d in u){const _=[],v=u[d];for(let g=0,S=v.length;g<S;g++)_.push(v[g].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const v=c[d];this.addGroup(v.start,v.count,v.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let fb=0;class Cf extends Qo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=gu(),this.name="",this.type="Material",this.blending=Po,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dp,this.blendDst=Up,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){oe(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){oe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Po&&(a.blending=this.blending),this.side!==Wr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Dp&&(a.blendSrc=this.blendSrc),this.blendDst!==Up&&(a.blendDst=this.blendDst),this.blendEquation!==bs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Ho&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(u){const c=[];for(const f in u){const p=u[f];delete p.metadata,c.push(p)}return c}if(n){const u=s(t.textures),c=s(t.images);u.length>0&&(a.textures=u),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const s=n.length;a=new Array(s);for(let u=0;u!==s;++u)a[u]=n[u].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const qa=new lt,fp=new lt,Xc=new lt,Fr=new lt,hp=new lt,Wc=new lt,dp=new lt;class hb{constructor(t=new lt,n=new lt(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qa)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=qa.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(qa.copy(this.origin).addScaledVector(this.direction,n),qa.distanceToSquared(t))}distanceSqToSegment(t,n,a,s){fp.copy(t).add(n).multiplyScalar(.5),Xc.copy(n).sub(t).normalize(),Fr.copy(this.origin).sub(fp);const u=t.distanceTo(n)*.5,c=-this.direction.dot(Xc),f=Fr.dot(this.direction),p=-Fr.dot(Xc),d=Fr.lengthSq(),_=Math.abs(1-c*c);let v,g,S,M;if(_>0)if(v=c*p-f,g=c*f-p,M=u*_,v>=0)if(g>=-M)if(g<=M){const E=1/_;v*=E,g*=E,S=v*(v+c*g+2*f)+g*(c*v+g+2*p)+d}else g=u,v=Math.max(0,-(c*g+f)),S=-v*v+g*(g+2*p)+d;else g=-u,v=Math.max(0,-(c*g+f)),S=-v*v+g*(g+2*p)+d;else g<=-M?(v=Math.max(0,-(-c*u+f)),g=v>0?-u:Math.min(Math.max(-u,-p),u),S=-v*v+g*(g+2*p)+d):g<=M?(v=0,g=Math.min(Math.max(-u,-p),u),S=g*(g+2*p)+d):(v=Math.max(0,-(c*u+f)),g=v>0?u:Math.min(Math.max(-u,-p),u),S=-v*v+g*(g+2*p)+d);else g=c>0?-u:u,v=Math.max(0,-(c*g+f)),S=-v*v+g*(g+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,v),s&&s.copy(fp).addScaledVector(Xc,g),S}intersectSphere(t,n){qa.subVectors(t.center,this.origin);const a=qa.dot(this.direction),s=qa.dot(qa)-a*a,u=t.radius*t.radius;if(s>u)return null;const c=Math.sqrt(u-s),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,s,u,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,v=1/this.direction.z,g=this.origin;return d>=0?(a=(t.min.x-g.x)*d,s=(t.max.x-g.x)*d):(a=(t.max.x-g.x)*d,s=(t.min.x-g.x)*d),_>=0?(u=(t.min.y-g.y)*_,c=(t.max.y-g.y)*_):(u=(t.max.y-g.y)*_,c=(t.min.y-g.y)*_),a>c||u>s||((u>a||isNaN(a))&&(a=u),(c<s||isNaN(s))&&(s=c),v>=0?(f=(t.min.z-g.z)*v,p=(t.max.z-g.z)*v):(f=(t.max.z-g.z)*v,p=(t.min.z-g.z)*v),a>p||f>s)||((f>a||a!==a)&&(a=f),(p<s||s!==s)&&(s=p),s<0)?null:this.at(a>=0?a:s,n)}intersectsBox(t){return this.intersectBox(t,qa)!==null}intersectTriangle(t,n,a,s,u){hp.subVectors(n,t),Wc.subVectors(a,t),dp.crossVectors(hp,Wc);let c=this.direction.dot(dp),f;if(c>0){if(s)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Fr.subVectors(this.origin,t);const p=f*this.direction.dot(Wc.crossVectors(Fr,Wc));if(p<0)return null;const d=f*this.direction.dot(hp.cross(Fr));if(d<0||p+d>c)return null;const _=-f*Fr.dot(dp);return _<0?null:this.at(_/c,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zS extends Cf{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nr,this.combine=mS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yx=new Mn,_s=new hb,qc=new jm,Mx=new lt,jc=new lt,Yc=new lt,Zc=new lt,pp=new lt,Kc=new lt,Ex=new lt,Qc=new lt;class ya extends Ai{constructor(t=new rr,n=new zS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const s=n[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=s.length;u<c;u++){const f=s[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=u}}}}getVertexPosition(t,n){const a=this.geometry,s=a.attributes.position,u=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(s,t);const f=this.morphTargetInfluences;if(u&&f){Kc.set(0,0,0);for(let p=0,d=u.length;p<d;p++){const _=f[p],v=u[p];_!==0&&(pp.fromBufferAttribute(v,t),c?Kc.addScaledVector(pp,_):Kc.addScaledVector(pp.sub(n),_))}n.add(Kc)}return n}raycast(t,n){const a=this.geometry,s=this.material,u=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),qc.copy(a.boundingSphere),qc.applyMatrix4(u),_s.copy(t.ray).recast(t.near),!(qc.containsPoint(_s.origin)===!1&&(_s.intersectSphere(qc,Mx)===null||_s.origin.distanceToSquared(Mx)>(t.far-t.near)**2))&&(yx.copy(u).invert(),_s.copy(t.ray).applyMatrix4(yx),!(a.boundingBox!==null&&_s.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,_s)))}_computeIntersections(t,n,a){let s;const u=this.geometry,c=this.material,f=u.index,p=u.attributes.position,d=u.attributes.uv,_=u.attributes.uv1,v=u.attributes.normal,g=u.groups,S=u.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const x=g[M],y=c[x.materialIndex],R=Math.max(x.start,S.start),U=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let w=R,O=U;w<O;w+=3){const P=f.getX(w),L=f.getX(w+1),T=f.getX(w+2);s=Jc(this,y,t,a,d,_,v,P,L,T),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,n.push(s))}}else{const M=Math.max(0,S.start),E=Math.min(f.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const R=f.getX(x),U=f.getX(x+1),w=f.getX(x+2);s=Jc(this,c,t,a,d,_,v,R,U,w),s&&(s.faceIndex=Math.floor(x/3),n.push(s))}}else if(p!==void 0)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const x=g[M],y=c[x.materialIndex],R=Math.max(x.start,S.start),U=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let w=R,O=U;w<O;w+=3){const P=w,L=w+1,T=w+2;s=Jc(this,y,t,a,d,_,v,P,L,T),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=x.materialIndex,n.push(s))}}else{const M=Math.max(0,S.start),E=Math.min(p.count,S.start+S.count);for(let x=M,y=E;x<y;x+=3){const R=x,U=x+1,w=x+2;s=Jc(this,c,t,a,d,_,v,R,U,w),s&&(s.faceIndex=Math.floor(x/3),n.push(s))}}}}function db(o,t,n,a,s,u,c,f){let p;if(t.side===ri?p=a.intersectTriangle(c,u,s,!0,f):p=a.intersectTriangle(s,u,c,t.side===Wr,f),p===null)return null;Qc.copy(f),Qc.applyMatrix4(o.matrixWorld);const d=n.ray.origin.distanceTo(Qc);return d<n.near||d>n.far?null:{distance:d,point:Qc.clone(),object:o}}function Jc(o,t,n,a,s,u,c,f,p,d){o.getVertexPosition(f,jc),o.getVertexPosition(p,Yc),o.getVertexPosition(d,Zc);const _=db(o,t,n,a,jc,Yc,Zc,Ex);if(_){const v=new lt;ea.getBarycoord(Ex,jc,Yc,Zc,v),s&&(_.uv=ea.getInterpolatedAttribute(s,f,p,d,v,new He)),u&&(_.uv1=ea.getInterpolatedAttribute(u,f,p,d,v,new He)),c&&(_.normal=ea.getInterpolatedAttribute(c,f,p,d,v,new lt),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const g={a:f,b:p,c:d,normal:new lt,materialIndex:0};ea.getNormal(jc,Yc,Zc,g.normal),_.face=g,_.barycoord=v}return _}class pb extends Kn{constructor(t=null,n=1,a=1,s,u,c,f,p,d=Pn,_=Pn,v,g){super(null,c,f,p,d,_,s,u,v,g),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mp=new lt,mb=new lt,_b=new de;class Ms{constructor(t=new lt(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,s){return this.normal.set(t,n,a),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const s=mp.subVectors(a,n).cross(mb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(mp),s=this.normal.dot(a);if(s===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/s;return u<0||u>1?null:n.copy(t.start).addScaledVector(a,u)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||_b.getNormalMatrix(t),s=this.coplanarPoint(mp).applyMatrix4(t),u=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new jm,gb=new He(.5,.5),$c=new lt;class IS{constructor(t=new Ms,n=new Ms,a=new Ms,s=new Ms,u=new Ms,c=new Ms){this.planes=[t,n,a,s,u,c]}set(t,n,a,s,u,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(s),f[4].copy(u),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=ma,a=!1){const s=this.planes,u=t.elements,c=u[0],f=u[1],p=u[2],d=u[3],_=u[4],v=u[5],g=u[6],S=u[7],M=u[8],E=u[9],x=u[10],y=u[11],R=u[12],U=u[13],w=u[14],O=u[15];if(s[0].setComponents(d-c,S-_,y-M,O-R).normalize(),s[1].setComponents(d+c,S+_,y+M,O+R).normalize(),s[2].setComponents(d+f,S+v,y+E,O+U).normalize(),s[3].setComponents(d-f,S-v,y-E,O-U).normalize(),a)s[4].setComponents(p,g,x,w).normalize(),s[5].setComponents(d-p,S-g,y-x,O-w).normalize();else if(s[4].setComponents(d-p,S-g,y-x,O-w).normalize(),n===ma)s[5].setComponents(d+p,S+g,y+x,O+w).normalize();else if(n===gf)s[5].setComponents(p,g,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(t){gs.center.set(0,0,0);const n=gb.distanceTo(t.center);return gs.radius=.7071067811865476+n,gs.applyMatrix4(t.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(t){const n=this.planes,a=t.center,s=-t.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(a)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const s=n[a];if($c.x=s.normal.x>0?t.max.x:t.min.x,$c.y=s.normal.y>0?t.max.y:t.min.y,$c.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint($c)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class BS extends Kn{constructor(t=[],n=Ls,a,s,u,c,f,p,d,_){super(t,n,a,s,u,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uu extends Kn{constructor(t,n,a=Sa,s,u,c,f=Pn,p=Pn,d,_=er,v=1){if(_!==er&&_!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:n,depth:v};super(g,s,u,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class vb extends uu{constructor(t,n=Sa,a=Ls,s,u,c=Pn,f=Pn,p,d=er){const _={width:t,height:t,depth:1},v=[_,_,_,_,_,_];super(t,t,n,a,s,u,c,f,p,d),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class HS extends Kn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xu extends rr{constructor(t=1,n=1,a=1,s=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:s,heightSegments:u,depthSegments:c};const f=this;s=Math.floor(s),u=Math.floor(u),c=Math.floor(c);const p=[],d=[],_=[],v=[];let g=0,S=0;M("z","y","x",-1,-1,a,n,t,c,u,0),M("z","y","x",1,-1,a,n,-t,c,u,1),M("x","z","y",1,1,t,a,n,s,c,2),M("x","z","y",1,-1,t,a,-n,s,c,3),M("x","y","z",1,-1,t,n,a,s,u,4),M("x","y","z",-1,-1,t,n,-a,s,u,5),this.setIndex(p),this.setAttribute("position",new $a(d,3)),this.setAttribute("normal",new $a(_,3)),this.setAttribute("uv",new $a(v,2));function M(E,x,y,R,U,w,O,P,L,T,C){const $=w/L,G=O/T,Y=w/2,Q=O/2,it=P/2,Z=L+1,F=T+1;let H=0,ot=0;const ct=new lt;for(let St=0;St<F;St++){const I=St*G-Q;for(let j=0;j<Z;j++){const mt=j*$-Y;ct[E]=mt*R,ct[x]=I*U,ct[y]=it,d.push(ct.x,ct.y,ct.z),ct[E]=0,ct[x]=0,ct[y]=P>0?1:-1,_.push(ct.x,ct.y,ct.z),v.push(j/L),v.push(1-St/T),H+=1}}for(let St=0;St<T;St++)for(let I=0;I<L;I++){const j=g+I+Z*St,mt=g+I+Z*(St+1),Tt=g+(I+1)+Z*(St+1),Ut=g+(I+1)+Z*St;p.push(j,mt,Ut),p.push(mt,Tt,Ut),ot+=6}f.addGroup(S,ot,C),S+=ot,g+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xu(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Su extends rr{constructor(t=1,n=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:s};const u=t/2,c=n/2,f=Math.floor(a),p=Math.floor(s),d=f+1,_=p+1,v=t/f,g=n/p,S=[],M=[],E=[],x=[];for(let y=0;y<_;y++){const R=y*g-c;for(let U=0;U<d;U++){const w=U*v-u;M.push(w,-R,0),E.push(0,0,1),x.push(U/f),x.push(1-y/p)}}for(let y=0;y<p;y++)for(let R=0;R<f;R++){const U=R+d*y,w=R+d*(y+1),O=R+1+d*(y+1),P=R+1+d*y;S.push(U,w,P),S.push(w,O,P)}this.setIndex(S),this.setAttribute("position",new $a(M,3)),this.setAttribute("normal",new $a(E,3)),this.setAttribute("uv",new $a(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Su(t.width,t.height,t.widthSegments,t.heightSegments)}}function Xo(o){const t={};for(const n in o){t[n]={};for(const a in o[n]){const s=o[n][a];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=s.clone():Array.isArray(s)?t[n][a]=s.slice():t[n][a]=s}}return t}function Yn(o){const t={};for(let n=0;n<o.length;n++){const a=Xo(o[n]);for(const s in a)t[s]=a[s]}return t}function xb(o){const t=[];for(let n=0;n<o.length;n++)t.push(o[n].clone());return t}function GS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ae.workingColorSpace}const Sb={clone:Xo,merge:Yn};var yb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends Cf{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yb,this.fragmentShader=Mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xo(t.uniforms),this.uniformsGroups=xb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const c=this.uniforms[s].value;c&&c.isTexture?n.uniforms[s]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[s]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[s]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[s]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[s]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[s]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[s]={type:"m4",value:c.toArray()}:n.uniforms[s]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class Eb extends ia{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class bb extends Cf{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Tb extends Cf{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tf=new lt,ef=new Jo,ua=new lt;class VS extends Ai{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=ma,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(tf,ef,ua),ua.x===1&&ua.y===1&&ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tf,ef,ua.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(tf,ef,ua),ua.x===1&&ua.y===1&&ua.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(tf,ef,ua.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const zr=new lt,bx=new He,Tx=new He;class ta extends VS{constructor(t=50,n=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=xm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qd*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xm*2*Math.atan(Math.tan(qd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-t/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(zr.x,zr.y).multiplyScalar(-t/zr.z)}getViewSize(t,n){return this.getViewBounds(t,bx,Tx),n.subVectors(Tx,bx)}setViewOffset(t,n,a,s,u,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(qd*.5*this.fov)/this.zoom,a=2*n,s=this.aspect*a,u=-.5*s;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;u+=c.offsetX*s/p,n-=c.offsetY*a/d,s*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(u+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+s,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ym extends VS{constructor(t=-1,n=1,a=1,s=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=s,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,s,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=s,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let u=a-t,c=a+t,f=s+n,p=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=d*this.view.offsetX,c=u+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(u,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const wo=-90,Do=1;class Ab extends Ai{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ta(wo,Do,t,n);s.layers=this.layers,this.add(s);const u=new ta(wo,Do,t,n);u.layers=this.layers,this.add(u);const c=new ta(wo,Do,t,n);c.layers=this.layers,this.add(c);const f=new ta(wo,Do,t,n);f.layers=this.layers,this.add(f);const p=new ta(wo,Do,t,n);p.layers=this.layers,this.add(p);const d=new ta(wo,Do,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,s,u,c,f,p]=n;for(const d of n)this.remove(d);if(t===ma)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===gf)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,c,f,p,d,_]=this.children,v=t.getRenderTarget(),g=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const E=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let x=!1;t.isWebGLRenderer===!0?x=t.state.buffers.depth.getReversed():x=t.reversedDepthBuffer,t.setRenderTarget(a,0,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,u),t.setRenderTarget(a,1,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),t.setRenderTarget(a,2,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,f),t.setRenderTarget(a,3,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,p),t.setRenderTarget(a,4,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,d),a.texture.generateMipmaps=E,t.setRenderTarget(a,5,s),x&&t.autoClear===!1&&t.clearDepth(),t.render(n,_),t.setRenderTarget(v,g,S),t.xr.enabled=M,a.texture.needsPMREMUpdate=!0}}class Rb extends ta{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Ax(o,t,n,a){const s=Cb(a);switch(n){case CS:return o*t;case DS:return o*t/s.components*s.byteLength;case Gm:return o*t/s.components*s.byteLength;case Vo:return o*t*2/s.components*s.byteLength;case Vm:return o*t*2/s.components*s.byteLength;case wS:return o*t*3/s.components*s.byteLength;case na:return o*t*4/s.components*s.byteLength;case km:return o*t*4/s.components*s.byteLength;case lf:case uf:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case cf:case ff:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Vp:case Xp:return Math.max(o,16)*Math.max(t,8)/4;case Gp:case kp:return Math.max(o,8)*Math.max(t,8)/2;case Wp:case qp:case Yp:case Zp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case jp:case Kp:case Qp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Jp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $p:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case tm:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case em:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case nm:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case im:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case am:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case rm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case sm:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case om:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case lm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case um:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case cm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case fm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case hm:case dm:case pm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case mm:case _m:return Math.ceil(o/4)*Math.ceil(t/4)*8;case gm:case vm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Cb(o){switch(o){case Gi:case bS:return{byteLength:1,components:1};case ou:case TS:case tr:return{byteLength:2,components:1};case Bm:case Hm:return{byteLength:2,components:4};case Sa:case Im:case pa:return{byteLength:4,components:1};case AS:case RS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zm}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kS(){let o=null,t=!1,n=null,a=null;function s(u,c){n(u,c),a=o.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&(a=o.requestAnimationFrame(s),t=!0)},stop:function(){o.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(u){n=u},setContext:function(u){o=u}}}function wb(o){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,v=d.byteLength,g=o.createBuffer();o.bindBuffer(p,g),o.bufferData(p,d,_),f.onUploadCallback();let S;if(d instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=o.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=o.SHORT;else if(d instanceof Uint32Array)S=o.UNSIGNED_INT;else if(d instanceof Int32Array)S=o.INT;else if(d instanceof Int8Array)S=o.BYTE;else if(d instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:g,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:v}}function a(f,p,d){const _=p.array,v=p.updateRanges;if(o.bindBuffer(d,f),v.length===0)o.bufferSubData(d,0,_);else{v.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<v.length;S++){const M=v[g],E=v[S];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,v[g]=E)}v.length=g+1;for(let S=0,M=v.length;S<M;S++){const E=v[S];o.bufferSubData(d,E.start*_.BYTES_PER_ELEMENT,_,E.start,E.count)}p.clearUpdateRanges()}p.onUploadCallback()}function s(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function u(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(o.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:s,remove:u,update:c}}var Db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ub=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ob=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ib=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,kb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Jb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,$b=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,eT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sT="gl_FragColor = linearToOutputTexel( gl_FragColor );",oT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,uT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_T=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,vT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,MT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ET=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,CT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,DT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,UT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,BT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,HT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,qT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,YT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ZT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,$T=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,rA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,hA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_A=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,bA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,BA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,XA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$A=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,t2=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,a2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pe={alphahash_fragment:Db,alphahash_pars_fragment:Ub,alphamap_fragment:Nb,alphamap_pars_fragment:Lb,alphatest_fragment:Ob,alphatest_pars_fragment:Pb,aomap_fragment:Fb,aomap_pars_fragment:zb,batching_pars_vertex:Ib,batching_vertex:Bb,begin_vertex:Hb,beginnormal_vertex:Gb,bsdfs:Vb,iridescence_fragment:kb,bumpmap_pars_fragment:Xb,clipping_planes_fragment:Wb,clipping_planes_pars_fragment:qb,clipping_planes_pars_vertex:jb,clipping_planes_vertex:Yb,color_fragment:Zb,color_pars_fragment:Kb,color_pars_vertex:Qb,color_vertex:Jb,common:$b,cube_uv_reflection_fragment:tT,defaultnormal_vertex:eT,displacementmap_pars_vertex:nT,displacementmap_vertex:iT,emissivemap_fragment:aT,emissivemap_pars_fragment:rT,colorspace_fragment:sT,colorspace_pars_fragment:oT,envmap_fragment:lT,envmap_common_pars_fragment:uT,envmap_pars_fragment:cT,envmap_pars_vertex:fT,envmap_physical_pars_fragment:MT,envmap_vertex:hT,fog_vertex:dT,fog_pars_vertex:pT,fog_fragment:mT,fog_pars_fragment:_T,gradientmap_pars_fragment:gT,lightmap_pars_fragment:vT,lights_lambert_fragment:xT,lights_lambert_pars_fragment:ST,lights_pars_begin:yT,lights_toon_fragment:ET,lights_toon_pars_fragment:bT,lights_phong_fragment:TT,lights_phong_pars_fragment:AT,lights_physical_fragment:RT,lights_physical_pars_fragment:CT,lights_fragment_begin:wT,lights_fragment_maps:DT,lights_fragment_end:UT,logdepthbuf_fragment:NT,logdepthbuf_pars_fragment:LT,logdepthbuf_pars_vertex:OT,logdepthbuf_vertex:PT,map_fragment:FT,map_pars_fragment:zT,map_particle_fragment:IT,map_particle_pars_fragment:BT,metalnessmap_fragment:HT,metalnessmap_pars_fragment:GT,morphinstance_vertex:VT,morphcolor_vertex:kT,morphnormal_vertex:XT,morphtarget_pars_vertex:WT,morphtarget_vertex:qT,normal_fragment_begin:jT,normal_fragment_maps:YT,normal_pars_fragment:ZT,normal_pars_vertex:KT,normal_vertex:QT,normalmap_pars_fragment:JT,clearcoat_normal_fragment_begin:$T,clearcoat_normal_fragment_maps:tA,clearcoat_pars_fragment:eA,iridescence_pars_fragment:nA,opaque_fragment:iA,packing:aA,premultiplied_alpha_fragment:rA,project_vertex:sA,dithering_fragment:oA,dithering_pars_fragment:lA,roughnessmap_fragment:uA,roughnessmap_pars_fragment:cA,shadowmap_pars_fragment:fA,shadowmap_pars_vertex:hA,shadowmap_vertex:dA,shadowmask_pars_fragment:pA,skinbase_vertex:mA,skinning_pars_vertex:_A,skinning_vertex:gA,skinnormal_vertex:vA,specularmap_fragment:xA,specularmap_pars_fragment:SA,tonemapping_fragment:yA,tonemapping_pars_fragment:MA,transmission_fragment:EA,transmission_pars_fragment:bA,uv_pars_fragment:TA,uv_pars_vertex:AA,uv_vertex:RA,worldpos_vertex:CA,background_vert:wA,background_frag:DA,backgroundCube_vert:UA,backgroundCube_frag:NA,cube_vert:LA,cube_frag:OA,depth_vert:PA,depth_frag:FA,distance_vert:zA,distance_frag:IA,equirect_vert:BA,equirect_frag:HA,linedashed_vert:GA,linedashed_frag:VA,meshbasic_vert:kA,meshbasic_frag:XA,meshlambert_vert:WA,meshlambert_frag:qA,meshmatcap_vert:jA,meshmatcap_frag:YA,meshnormal_vert:ZA,meshnormal_frag:KA,meshphong_vert:QA,meshphong_frag:JA,meshphysical_vert:$A,meshphysical_frag:t2,meshtoon_vert:e2,meshtoon_frag:n2,points_vert:i2,points_frag:a2,shadow_vert:r2,shadow_frag:s2,sprite_vert:o2,sprite_frag:l2},Lt={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},ha={basic:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Yn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Yn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Yn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Be(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Yn([Lt.points,Lt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Yn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Yn([Lt.common,Lt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Yn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Yn([Lt.sprite,Lt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distance:{uniforms:Yn([Lt.common,Lt.displacementmap,{referencePosition:{value:new lt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distance_vert,fragmentShader:pe.distance_frag},shadow:{uniforms:Yn([Lt.lights,Lt.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ha.physical={uniforms:Yn([ha.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const nf={r:0,b:0,g:0},vs=new nr,u2=new Mn;function c2(o,t,n,a,s,u){const c=new Be(0);let f=s===!0?0:1,p,d,_=null,v=0,g=null;function S(R){let U=R.isScene===!0?R.background:null;if(U&&U.isTexture){const w=R.backgroundBlurriness>0;U=t.get(U,w)}return U}function M(R){let U=!1;const w=S(R);w===null?x(c,f):w&&w.isColor&&(x(w,1),U=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(o.autoClear||U)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function E(R,U){const w=S(U);w&&(w.isCubeTexture||w.mapping===Rf)?(d===void 0&&(d=new ya(new xu(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:Xo(ha.backgroundCube.uniforms),vertexShader:ha.backgroundCube.vertexShader,fragmentShader:ha.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(O,P,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),vs.copy(U.backgroundRotation),vs.x*=-1,vs.y*=-1,vs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),d.material.uniforms.envMap.value=w,d.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(u2.makeRotationFromEuler(vs)),d.material.toneMapped=Ae.getTransfer(w.colorSpace)!==Ie,(_!==w||v!==w.version||g!==o.toneMapping)&&(d.material.needsUpdate=!0,_=w,v=w.version,g=o.toneMapping),d.layers.enableAll(),R.unshift(d,d.geometry,d.material,0,0,null)):w&&w.isTexture&&(p===void 0&&(p=new ya(new Su(2,2),new ia({name:"BackgroundMaterial",uniforms:Xo(ha.background.uniforms),vertexShader:ha.background.vertexShader,fragmentShader:ha.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=w,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=Ae.getTransfer(w.colorSpace)!==Ie,w.matrixAutoUpdate===!0&&w.updateMatrix(),p.material.uniforms.uvTransform.value.copy(w.matrix),(_!==w||v!==w.version||g!==o.toneMapping)&&(p.material.needsUpdate=!0,_=w,v=w.version,g=o.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function x(R,U){R.getRGB(nf,GS(o)),n.buffers.color.setClear(nf.r,nf.g,nf.b,U,u)}function y(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,U=1){c.set(R),f=U,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,x(c,f)},render:M,addToRenderList:E,dispose:y}}function f2(o,t){const n=o.getParameter(o.MAX_VERTEX_ATTRIBS),a={},s=g(null);let u=s,c=!1;function f(G,Y,Q,it,Z){let F=!1;const H=v(G,it,Q,Y);u!==H&&(u=H,d(u.object)),F=S(G,it,Q,Z),F&&M(G,it,Q,Z),Z!==null&&t.update(Z,o.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,w(G,Y,Q,it),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function p(){return o.createVertexArray()}function d(G){return o.bindVertexArray(G)}function _(G){return o.deleteVertexArray(G)}function v(G,Y,Q,it){const Z=it.wireframe===!0;let F=a[Y.id];F===void 0&&(F={},a[Y.id]=F);const H=G.isInstancedMesh===!0?G.id:0;let ot=F[H];ot===void 0&&(ot={},F[H]=ot);let ct=ot[Q.id];ct===void 0&&(ct={},ot[Q.id]=ct);let St=ct[Z];return St===void 0&&(St=g(p()),ct[Z]=St),St}function g(G){const Y=[],Q=[],it=[];for(let Z=0;Z<n;Z++)Y[Z]=0,Q[Z]=0,it[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Q,attributeDivisors:it,object:G,attributes:{},index:null}}function S(G,Y,Q,it){const Z=u.attributes,F=Y.attributes;let H=0;const ot=Q.getAttributes();for(const ct in ot)if(ot[ct].location>=0){const I=Z[ct];let j=F[ct];if(j===void 0&&(ct==="instanceMatrix"&&G.instanceMatrix&&(j=G.instanceMatrix),ct==="instanceColor"&&G.instanceColor&&(j=G.instanceColor)),I===void 0||I.attribute!==j||j&&I.data!==j.data)return!0;H++}return u.attributesNum!==H||u.index!==it}function M(G,Y,Q,it){const Z={},F=Y.attributes;let H=0;const ot=Q.getAttributes();for(const ct in ot)if(ot[ct].location>=0){let I=F[ct];I===void 0&&(ct==="instanceMatrix"&&G.instanceMatrix&&(I=G.instanceMatrix),ct==="instanceColor"&&G.instanceColor&&(I=G.instanceColor));const j={};j.attribute=I,I&&I.data&&(j.data=I.data),Z[ct]=j,H++}u.attributes=Z,u.attributesNum=H,u.index=it}function E(){const G=u.newAttributes;for(let Y=0,Q=G.length;Y<Q;Y++)G[Y]=0}function x(G){y(G,0)}function y(G,Y){const Q=u.newAttributes,it=u.enabledAttributes,Z=u.attributeDivisors;Q[G]=1,it[G]===0&&(o.enableVertexAttribArray(G),it[G]=1),Z[G]!==Y&&(o.vertexAttribDivisor(G,Y),Z[G]=Y)}function R(){const G=u.newAttributes,Y=u.enabledAttributes;for(let Q=0,it=Y.length;Q<it;Q++)Y[Q]!==G[Q]&&(o.disableVertexAttribArray(Q),Y[Q]=0)}function U(G,Y,Q,it,Z,F,H){H===!0?o.vertexAttribIPointer(G,Y,Q,Z,F):o.vertexAttribPointer(G,Y,Q,it,Z,F)}function w(G,Y,Q,it){E();const Z=it.attributes,F=Q.getAttributes(),H=Y.defaultAttributeValues;for(const ot in F){const ct=F[ot];if(ct.location>=0){let St=Z[ot];if(St===void 0&&(ot==="instanceMatrix"&&G.instanceMatrix&&(St=G.instanceMatrix),ot==="instanceColor"&&G.instanceColor&&(St=G.instanceColor)),St!==void 0){const I=St.normalized,j=St.itemSize,mt=t.get(St);if(mt===void 0)continue;const Tt=mt.buffer,Ut=mt.type,rt=mt.bytesPerElement,xt=Ut===o.INT||Ut===o.UNSIGNED_INT||St.gpuType===Im;if(St.isInterleavedBufferAttribute){const At=St.data,kt=At.stride,Qt=St.offset;if(At.isInstancedInterleavedBuffer){for(let te=0;te<ct.locationSize;te++)y(ct.location+te,At.meshPerAttribute);G.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let te=0;te<ct.locationSize;te++)x(ct.location+te);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let te=0;te<ct.locationSize;te++)U(ct.location+te,j/ct.locationSize,Ut,I,kt*rt,(Qt+j/ct.locationSize*te)*rt,xt)}else{if(St.isInstancedBufferAttribute){for(let At=0;At<ct.locationSize;At++)y(ct.location+At,St.meshPerAttribute);G.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=St.meshPerAttribute*St.count)}else for(let At=0;At<ct.locationSize;At++)x(ct.location+At);o.bindBuffer(o.ARRAY_BUFFER,Tt);for(let At=0;At<ct.locationSize;At++)U(ct.location+At,j/ct.locationSize,Ut,I,j*rt,j/ct.locationSize*At*rt,xt)}}else if(H!==void 0){const I=H[ot];if(I!==void 0)switch(I.length){case 2:o.vertexAttrib2fv(ct.location,I);break;case 3:o.vertexAttrib3fv(ct.location,I);break;case 4:o.vertexAttrib4fv(ct.location,I);break;default:o.vertexAttrib1fv(ct.location,I)}}}}R()}function O(){C();for(const G in a){const Y=a[G];for(const Q in Y){const it=Y[Q];for(const Z in it){const F=it[Z];for(const H in F)_(F[H].object),delete F[H];delete it[Z]}}delete a[G]}}function P(G){if(a[G.id]===void 0)return;const Y=a[G.id];for(const Q in Y){const it=Y[Q];for(const Z in it){const F=it[Z];for(const H in F)_(F[H].object),delete F[H];delete it[Z]}}delete a[G.id]}function L(G){for(const Y in a){const Q=a[Y];for(const it in Q){const Z=Q[it];if(Z[G.id]===void 0)continue;const F=Z[G.id];for(const H in F)_(F[H].object),delete F[H];delete Z[G.id]}}}function T(G){for(const Y in a){const Q=a[Y],it=G.isInstancedMesh===!0?G.id:0,Z=Q[it];if(Z!==void 0){for(const F in Z){const H=Z[F];for(const ot in H)_(H[ot].object),delete H[ot];delete Z[F]}delete Q[it],Object.keys(Q).length===0&&delete a[Y]}}}function C(){$(),c=!0,u!==s&&(u=s,d(u.object))}function $(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:f,reset:C,resetDefaultState:$,dispose:O,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:L,initAttributes:E,enableAttribute:x,disableUnusedAttributes:R}}function h2(o,t,n){let a;function s(d){a=d}function u(d,_){o.drawArrays(a,d,_),n.update(_,a,1)}function c(d,_,v){v!==0&&(o.drawArraysInstanced(a,d,_,v),n.update(_,a,v))}function f(d,_,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,v);let S=0;for(let M=0;M<v;M++)S+=_[M];n.update(S,a,1)}function p(d,_,v,g){if(v===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<d.length;M++)c(d[M],_[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(a,d,0,_,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=_[E]*g[E];n.update(M,a,1)}}this.setMode=s,this.render=u,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function d2(o,t,n,a){let s;function u(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const L=t.get("EXT_texture_filter_anisotropic");s=o.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function c(L){return!(L!==na&&a.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(L){const T=L===tr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(L!==Gi&&a.convert(L)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==pa&&!T)}function p(L){if(L==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(oe("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const v=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_TEXTURE_SIZE),x=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),R=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),O=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:R,maxVaryings:U,maxFragmentUniforms:w,maxSamples:O,samples:P}}function p2(o){const t=this;let n=null,a=0,s=!1,u=!1;const c=new Ms,f=new de,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const S=v.length!==0||g||a!==0||s;return s=g,a=v.length,S},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(v,g){n=_(v,g,0)},this.setState=function(v,g,S){const M=v.clippingPlanes,E=v.clipIntersection,x=v.clipShadows,y=o.get(v);if(!s||M===null||M.length===0||u&&!x)u?_(null):d();else{const R=u?0:a,U=R*4;let w=y.clippingState||null;p.value=w,w=_(M,g,U,S);for(let O=0;O!==U;++O)w[O]=n[O];y.clippingState=w,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=R}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(v,g,S,M){const E=v!==null?v.length:0;let x=null;if(E!==0){if(x=p.value,M!==!0||x===null){const y=S+E*4,R=g.matrixWorldInverse;f.getNormalMatrix(R),(x===null||x.length<y)&&(x=new Float32Array(y));for(let U=0,w=S;U!==E;++U,w+=4)c.copy(v[U]).applyMatrix4(R,f),c.normal.toArray(x,w),x[w+3]=c.constant}p.value=x,p.needsUpdate=!0}return t.numPlanes=E,t.numIntersection=0,x}}const Br=4,Rx=[.125,.215,.35,.446,.526,.582],Ts=20,m2=256,Kl=new Ym,Cx=new Be;let _p=null,gp=0,vp=0,xp=!1;const _2=new lt;class wx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,s=100,u={}){const{size:c=256,position:f=_2}=u;_p=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),xp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,s,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ux(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(_p,gp,vp),this._renderer.xr.enabled=xp,t.scissorTest=!1,Uo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ls||t.mapping===Go?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_p=this._renderer.getRenderTarget(),gp=this._renderer.getActiveCubeFace(),vp=this._renderer.getActiveMipmapLevel(),xp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Gn,minFilter:Gn,generateMipmaps:!1,type:tr,format:na,colorSpace:ko,depthBuffer:!1},s=Dx(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dx(t,n,a);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=g2(u)),this._blurMaterial=x2(u,t,n),this._ggxMaterial=v2(u,t,n)}return s}_compileMaterial(t){const n=new ya(new rr,t);this._renderer.compile(n,Kl)}_sceneToCubeUV(t,n,a,s,u){const p=new ta(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,S=v.toneMapping;v.getClearColor(Cx),v.toneMapping=ga,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(s),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ya(new xu,new zS({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,x=E.material;let y=!1;const R=t.background;R?R.isColor&&(x.color.copy(R),t.background=null,y=!0):(x.color.copy(Cx),y=!0);for(let U=0;U<6;U++){const w=U%3;w===0?(p.up.set(0,d[U],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+_[U],u.y,u.z)):w===1?(p.up.set(0,0,d[U]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+_[U],u.z)):(p.up.set(0,d[U],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+_[U]));const O=this._cubeSize;Uo(s,w*O,U>2?O:0,O,O),v.setRenderTarget(s),y&&v.render(E,p),v.render(t,p)}v.toneMapping=S,v.autoClear=g,t.background=R}_textureToCubeUV(t,n){const a=this._renderer,s=t.mapping===Ls||t.mapping===Go;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ux());const u=s?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const f=u.uniforms;f.envMap.value=t;const p=this._cubeSize;Uo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,Kl)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let u=1;u<s;u++)this._applyGGXFilter(t,u-1,u);n.autoClear=a}_applyGGXFilter(t,n,a){const s=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),v=Math.sqrt(d*d-_*_),g=0+d*1.25,S=v*g,{_lodMax:M}=this,E=this._sizeLods[a],x=3*E*(a>M-Br?a-M+Br:0),y=4*(this._cubeSize-E);p.envMap.value=t.texture,p.roughness.value=S,p.mipInt.value=M-n,Uo(u,x,y,3*E,2*E),s.setRenderTarget(u),s.render(f,Kl),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=M-a,Uo(t,x,y,3*E,2*E),s.setRenderTarget(t),s.render(f,Kl)}_blur(t,n,a,s,u){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,s,"latitudinal",u),this._halfBlur(c,t,a,a,s,"longitudinal",u)}_halfBlur(t,n,a,s,u,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&De("blur direction must be either latitudinal or longitudinal!");const _=3,v=this._lodMeshes[s];v.material=d;const g=d.uniforms,S=this._sizeLods[a]-1,M=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Ts-1),E=u/M,x=isFinite(u)?1+Math.floor(_*E):Ts;x>Ts&&oe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ts}`);const y=[];let R=0;for(let L=0;L<Ts;++L){const T=L/E,C=Math.exp(-T*T/2);y.push(C),L===0?R+=C:L<x&&(R+=2*C)}for(let L=0;L<y.length;L++)y[L]=y[L]/R;g.envMap.value=t.texture,g.samples.value=x,g.weights.value=y,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:U}=this;g.dTheta.value=M,g.mipInt.value=U-a;const w=this._sizeLods[s],O=3*w*(s>U-Br?s-U+Br:0),P=4*(this._cubeSize-w);Uo(n,O,P,3*w,2*w),p.setRenderTarget(n),p.render(v,Kl)}}function g2(o){const t=[],n=[],a=[];let s=o;const u=o-Br+1+Rx.length;for(let c=0;c<u;c++){const f=Math.pow(2,s);t.push(f);let p=1/f;c>o-Br?p=Rx[c-o+Br-1]:c===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,v=1+d,g=[_,_,v,_,v,v,_,_,v,v,_,v],S=6,M=6,E=3,x=2,y=1,R=new Float32Array(E*M*S),U=new Float32Array(x*M*S),w=new Float32Array(y*M*S);for(let P=0;P<S;P++){const L=P%3*2/3-1,T=P>2?0:-1,C=[L,T,0,L+2/3,T,0,L+2/3,T+1,0,L,T,0,L+2/3,T+1,0,L,T+1,0];R.set(C,E*M*P),U.set(g,x*M*P);const $=[P,P,P,P,P,P];w.set($,y*M*P)}const O=new rr;O.setAttribute("position",new xa(R,E)),O.setAttribute("uv",new xa(U,x)),O.setAttribute("faceIndex",new xa(w,y)),a.push(new ya(O,null)),s>Br&&s--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function Dx(o,t,n){const a=new va(o,t,n);return a.texture.mapping=Rf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Uo(o,t,n,a,s){o.viewport.set(t,n,a,s),o.scissor.set(t,n,a,s)}function v2(o,t,n){return new ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m2,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function x2(o,t,n){const a=new Float32Array(Ts),s=new lt(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Ux(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function Nx(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qa,depthTest:!1,depthWrite:!1})}function wf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class XS extends va{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},s=[a,a,a,a,a,a];this.texture=new BS(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new xu(5,5,5),u=new ia({name:"CubemapFromEquirect",uniforms:Xo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:ri,blending:Qa});u.uniforms.tEquirect.value=n;const c=new ya(s,u),f=n.minFilter;return n.minFilter===As&&(n.minFilter=Gn),new Ab(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,s=!0){const u=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,s);t.setRenderTarget(u)}}function S2(o){let t=new WeakMap,n=new WeakMap,a=null;function s(g,S=!1){return g==null?null:S?c(g):u(g)}function u(g){if(g&&g.isTexture){const S=g.mapping;if(S===kd||S===Xd)if(t.has(g)){const M=t.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const E=new XS(M.height);return E.fromEquirectangularTexture(o,g),t.set(g,E),g.addEventListener("dispose",d),f(E.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const S=g.mapping,M=S===kd||S===Xd,E=S===Ls||S===Go;if(M||E){let x=n.get(g);const y=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return a===null&&(a=new wx(o)),x=M?a.fromEquirectangular(g,x):a.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,n.set(g,x),x.texture;if(x!==void 0)return x.texture;{const R=g.image;return M&&R&&R.height>0||E&&R&&p(R)?(a===null&&(a=new wx(o)),x=M?a.fromEquirectangular(g):a.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,n.set(g,x),g.addEventListener("dispose",_),x.texture):null}}}return g}function f(g,S){return S===kd?g.mapping=Ls:S===Xd&&(g.mapping=Go),g}function p(g){let S=0;const M=6;for(let E=0;E<M;E++)g[E]!==void 0&&S++;return S===M}function d(g){const S=g.target;S.removeEventListener("dispose",d);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function _(g){const S=g.target;S.removeEventListener("dispose",_);const M=n.get(S);M!==void 0&&(n.delete(S),M.dispose())}function v(){t=new WeakMap,n=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:v}}function y2(o){const t={};function n(a){if(t[a]!==void 0)return t[a];const s=o.getExtension(a);return t[a]=s,s}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const s=n(a);return s===null&&xf("WebGLRenderer: "+a+" extension not supported."),s}}}function M2(o,t,n,a){const s={},u=new WeakMap;function c(v){const g=v.target;g.index!==null&&t.remove(g.index);for(const M in g.attributes)t.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete s[g.id];const S=u.get(g);S&&(t.remove(S),u.delete(g)),a.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(v,g){return s[g.id]===!0||(g.addEventListener("dispose",c),s[g.id]=!0,n.memory.geometries++),g}function p(v){const g=v.attributes;for(const S in g)t.update(g[S],o.ARRAY_BUFFER)}function d(v){const g=[],S=v.index,M=v.attributes.position;let E=0;if(M===void 0)return;if(S!==null){const R=S.array;E=S.version;for(let U=0,w=R.length;U<w;U+=3){const O=R[U+0],P=R[U+1],L=R[U+2];g.push(O,P,P,L,L,O)}}else{const R=M.array;E=M.version;for(let U=0,w=R.length/3-1;U<w;U+=3){const O=U+0,P=U+1,L=U+2;g.push(O,P,P,L,L,O)}}const x=new(M.count>=65535?FS:PS)(g,1);x.version=E;const y=u.get(v);y&&t.remove(y),u.set(v,x)}function _(v){const g=u.get(v);if(g){const S=v.index;S!==null&&g.version<S.version&&d(v)}else d(v);return u.get(v)}return{get:f,update:p,getWireframeAttribute:_}}function E2(o,t,n){let a;function s(g){a=g}let u,c;function f(g){u=g.type,c=g.bytesPerElement}function p(g,S){o.drawElements(a,S,u,g*c),n.update(S,a,1)}function d(g,S,M){M!==0&&(o.drawElementsInstanced(a,S,u,g*c,M),n.update(S,a,M))}function _(g,S,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,u,g,0,M);let x=0;for(let y=0;y<M;y++)x+=S[y];n.update(x,a,1)}function v(g,S,M,E){if(M===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<g.length;y++)d(g[y]/c,S[y],E[y]);else{x.multiDrawElementsInstancedWEBGL(a,S,0,u,g,0,E,0,M);let y=0;for(let R=0;R<M;R++)y+=S[R]*E[R];n.update(y,a,1)}}this.setMode=s,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=v}function b2(o){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(u,c,f){switch(n.calls++,c){case o.TRIANGLES:n.triangles+=f*(u/3);break;case o.LINES:n.lines+=f*(u/2);break;case o.LINE_STRIP:n.lines+=f*(u-1);break;case o.LINE_LOOP:n.lines+=f*u;break;case o.POINTS:n.points+=f*u;break;default:De("WebGLInfo: Unknown draw mode:",c);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:a}}function T2(o,t,n){const a=new WeakMap,s=new hn;function u(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=_!==void 0?_.length:0;let g=a.get(f);if(g===void 0||g.count!==v){let $=function(){T.dispose(),a.delete(f),f.removeEventListener("dispose",$)};var S=$;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,E=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let w=0;M===!0&&(w=1),E===!0&&(w=2),x===!0&&(w=3);let O=f.attributes.position.count*w,P=1;O>t.maxTextureSize&&(P=Math.ceil(O/t.maxTextureSize),O=t.maxTextureSize);const L=new Float32Array(O*P*4*v),T=new NS(L,O,P,v);T.type=pa,T.needsUpdate=!0;const C=w*4;for(let G=0;G<v;G++){const Y=y[G],Q=R[G],it=U[G],Z=O*P*4*G;for(let F=0;F<Y.count;F++){const H=F*C;M===!0&&(s.fromBufferAttribute(Y,F),L[Z+H+0]=s.x,L[Z+H+1]=s.y,L[Z+H+2]=s.z,L[Z+H+3]=0),E===!0&&(s.fromBufferAttribute(Q,F),L[Z+H+4]=s.x,L[Z+H+5]=s.y,L[Z+H+6]=s.z,L[Z+H+7]=0),x===!0&&(s.fromBufferAttribute(it,F),L[Z+H+8]=s.x,L[Z+H+9]=s.y,L[Z+H+10]=s.z,L[Z+H+11]=it.itemSize===4?s.w:1)}}g={count:v,texture:T,size:new He(O,P)},a.set(f,g),f.addEventListener("dispose",$)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",c.morphTexture,n);else{let M=0;for(let x=0;x<d.length;x++)M+=d[x];const E=f.morphTargetsRelative?1:1-M;p.getUniforms().setValue(o,"morphTargetBaseInfluence",E),p.getUniforms().setValue(o,"morphTargetInfluences",d)}p.getUniforms().setValue(o,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(o,"morphTargetsTextureSize",g.size)}return{update:u}}function A2(o,t,n,a,s){let u=new WeakMap;function c(d){const _=s.render.frame,v=d.geometry,g=t.get(d,v);if(u.get(g)!==_&&(t.update(g),u.set(g,_)),d.isInstancedMesh&&(d.hasEventListener("dispose",p)===!1&&d.addEventListener("dispose",p),u.get(d)!==_&&(n.update(d.instanceMatrix,o.ARRAY_BUFFER),d.instanceColor!==null&&n.update(d.instanceColor,o.ARRAY_BUFFER),u.set(d,_))),d.isSkinnedMesh){const S=d.skeleton;u.get(S)!==_&&(S.update(),u.set(S,_))}return g}function f(){u=new WeakMap}function p(d){const _=d.target;_.removeEventListener("dispose",p),a.releaseStatesOfObject(_),n.remove(_.instanceMatrix),_.instanceColor!==null&&n.remove(_.instanceColor)}return{update:c,dispose:f}}const R2={[_S]:"LINEAR_TONE_MAPPING",[gS]:"REINHARD_TONE_MAPPING",[vS]:"CINEON_TONE_MAPPING",[xS]:"ACES_FILMIC_TONE_MAPPING",[yS]:"AGX_TONE_MAPPING",[MS]:"NEUTRAL_TONE_MAPPING",[SS]:"CUSTOM_TONE_MAPPING"};function C2(o,t,n,a,s){const u=new va(t,n,{type:o,depthBuffer:a,stencilBuffer:s}),c=new va(t,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),f=new rr;f.setAttribute("position",new $a([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new $a([0,2,0,0,2,0],2));const p=new Eb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new ya(f,p),_=new Ym(-1,1,1,-1,0,1);let v=null,g=null,S=!1,M,E=null,x=[],y=!1;this.setSize=function(R,U){u.setSize(R,U),c.setSize(R,U);for(let w=0;w<x.length;w++){const O=x[w];O.setSize&&O.setSize(R,U)}},this.setEffects=function(R){x=R,y=x.length>0&&x[0].isRenderPass===!0;const U=u.width,w=u.height;for(let O=0;O<x.length;O++){const P=x[O];P.setSize&&P.setSize(U,w)}},this.begin=function(R,U){if(S||R.toneMapping===ga&&x.length===0)return!1;if(E=U,U!==null){const w=U.width,O=U.height;(u.width!==w||u.height!==O)&&this.setSize(w,O)}return y===!1&&R.setRenderTarget(u),M=R.toneMapping,R.toneMapping=ga,!0},this.hasRenderPass=function(){return y},this.end=function(R,U){R.toneMapping=M,S=!0;let w=u,O=c;for(let P=0;P<x.length;P++){const L=x[P];if(L.enabled!==!1&&(L.render(R,O,w,U),L.needsSwap!==!1)){const T=w;w=O,O=T}}if(v!==R.outputColorSpace||g!==R.toneMapping){v=R.outputColorSpace,g=R.toneMapping,p.defines={},Ae.getTransfer(v)===Ie&&(p.defines.SRGB_TRANSFER="");const P=R2[g];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=w.texture,R.setRenderTarget(E),R.render(d,_),E=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){u.dispose(),c.dispose(),f.dispose(),p.dispose()}}const WS=new Kn,Sm=new uu(1,1),qS=new NS,jS=new $E,YS=new BS,Lx=[],Ox=[],Px=new Float32Array(16),Fx=new Float32Array(9),zx=new Float32Array(4);function $o(o,t,n){const a=o[0];if(a<=0||a>0)return o;const s=t*n;let u=Lx[s];if(u===void 0&&(u=new Float32Array(s),Lx[s]=u),t!==0){a.toArray(u,0);for(let c=1,f=0;c!==t;++c)f+=n,o[c].toArray(u,f)}return u}function An(o,t){if(o.length!==t.length)return!1;for(let n=0,a=o.length;n<a;n++)if(o[n]!==t[n])return!1;return!0}function Rn(o,t){for(let n=0,a=t.length;n<a;n++)o[n]=t[n]}function Df(o,t){let n=Ox[t];n===void 0&&(n=new Int32Array(t),Ox[t]=n);for(let a=0;a!==t;++a)n[a]=o.allocateTextureUnit();return n}function w2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1f(this.addr,t),n[0]=t)}function D2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;o.uniform2fv(this.addr,t),Rn(n,t)}}function U2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(An(n,t))return;o.uniform3fv(this.addr,t),Rn(n,t)}}function N2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;o.uniform4fv(this.addr,t),Rn(n,t)}}function L2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(An(n,t))return;o.uniformMatrix2fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,a))return;zx.set(a),o.uniformMatrix2fv(this.addr,!1,zx),Rn(n,a)}}function O2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(An(n,t))return;o.uniformMatrix3fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,a))return;Fx.set(a),o.uniformMatrix3fv(this.addr,!1,Fx),Rn(n,a)}}function P2(o,t){const n=this.cache,a=t.elements;if(a===void 0){if(An(n,t))return;o.uniformMatrix4fv(this.addr,!1,t),Rn(n,t)}else{if(An(n,a))return;Px.set(a),o.uniformMatrix4fv(this.addr,!1,Px),Rn(n,a)}}function F2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1i(this.addr,t),n[0]=t)}function z2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;o.uniform2iv(this.addr,t),Rn(n,t)}}function I2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;o.uniform3iv(this.addr,t),Rn(n,t)}}function B2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;o.uniform4iv(this.addr,t),Rn(n,t)}}function H2(o,t){const n=this.cache;n[0]!==t&&(o.uniform1ui(this.addr,t),n[0]=t)}function G2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(An(n,t))return;o.uniform2uiv(this.addr,t),Rn(n,t)}}function V2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(An(n,t))return;o.uniform3uiv(this.addr,t),Rn(n,t)}}function k2(o,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(An(n,t))return;o.uniform4uiv(this.addr,t),Rn(n,t)}}function X2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s);let u;this.type===o.SAMPLER_2D_SHADOW?(Sm.compareFunction=n.isReversedDepthBuffer()?Wm:Xm,u=Sm):u=WS,n.setTexture2D(t||u,s)}function W2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture3D(t||jS,s)}function q2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTextureCube(t||YS,s)}function j2(o,t,n){const a=this.cache,s=n.allocateTextureUnit();a[0]!==s&&(o.uniform1i(this.addr,s),a[0]=s),n.setTexture2DArray(t||qS,s)}function Y2(o){switch(o){case 5126:return w2;case 35664:return D2;case 35665:return U2;case 35666:return N2;case 35674:return L2;case 35675:return O2;case 35676:return P2;case 5124:case 35670:return F2;case 35667:case 35671:return z2;case 35668:case 35672:return I2;case 35669:case 35673:return B2;case 5125:return H2;case 36294:return G2;case 36295:return V2;case 36296:return k2;case 35678:case 36198:case 36298:case 36306:case 35682:return X2;case 35679:case 36299:case 36307:return W2;case 35680:case 36300:case 36308:case 36293:return q2;case 36289:case 36303:case 36311:case 36292:return j2}}function Z2(o,t){o.uniform1fv(this.addr,t)}function K2(o,t){const n=$o(t,this.size,2);o.uniform2fv(this.addr,n)}function Q2(o,t){const n=$o(t,this.size,3);o.uniform3fv(this.addr,n)}function J2(o,t){const n=$o(t,this.size,4);o.uniform4fv(this.addr,n)}function $2(o,t){const n=$o(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,n)}function t3(o,t){const n=$o(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,n)}function e3(o,t){const n=$o(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,n)}function n3(o,t){o.uniform1iv(this.addr,t)}function i3(o,t){o.uniform2iv(this.addr,t)}function a3(o,t){o.uniform3iv(this.addr,t)}function r3(o,t){o.uniform4iv(this.addr,t)}function s3(o,t){o.uniform1uiv(this.addr,t)}function o3(o,t){o.uniform2uiv(this.addr,t)}function l3(o,t){o.uniform3uiv(this.addr,t)}function u3(o,t){o.uniform4uiv(this.addr,t)}function c3(o,t,n){const a=this.cache,s=t.length,u=Df(n,s);An(a,u)||(o.uniform1iv(this.addr,u),Rn(a,u));let c;this.type===o.SAMPLER_2D_SHADOW?c=Sm:c=WS;for(let f=0;f!==s;++f)n.setTexture2D(t[f]||c,u[f])}function f3(o,t,n){const a=this.cache,s=t.length,u=Df(n,s);An(a,u)||(o.uniform1iv(this.addr,u),Rn(a,u));for(let c=0;c!==s;++c)n.setTexture3D(t[c]||jS,u[c])}function h3(o,t,n){const a=this.cache,s=t.length,u=Df(n,s);An(a,u)||(o.uniform1iv(this.addr,u),Rn(a,u));for(let c=0;c!==s;++c)n.setTextureCube(t[c]||YS,u[c])}function d3(o,t,n){const a=this.cache,s=t.length,u=Df(n,s);An(a,u)||(o.uniform1iv(this.addr,u),Rn(a,u));for(let c=0;c!==s;++c)n.setTexture2DArray(t[c]||qS,u[c])}function p3(o){switch(o){case 5126:return Z2;case 35664:return K2;case 35665:return Q2;case 35666:return J2;case 35674:return $2;case 35675:return t3;case 35676:return e3;case 5124:case 35670:return n3;case 35667:case 35671:return i3;case 35668:case 35672:return a3;case 35669:case 35673:return r3;case 5125:return s3;case 36294:return o3;case 36295:return l3;case 36296:return u3;case 35678:case 36198:case 36298:case 36306:case 35682:return c3;case 35679:case 36299:case 36307:return f3;case 35680:case 36300:case 36308:case 36293:return h3;case 36289:case 36303:case 36311:case 36292:return d3}}class m3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=Y2(n.type)}}class _3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=p3(n.type)}}class g3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const s=this.seq;for(let u=0,c=s.length;u!==c;++u){const f=s[u];f.setValue(t,n[f.id],a)}}}const Sp=/(\w+)(\])?(\[|\.)?/g;function Ix(o,t){o.seq.push(t),o.map[t.id]=t}function v3(o,t,n){const a=o.name,s=a.length;for(Sp.lastIndex=0;;){const u=Sp.exec(a),c=Sp.lastIndex;let f=u[1];const p=u[2]==="]",d=u[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===s){Ix(n,d===void 0?new m3(f,o,t):new _3(f,o,t));break}else{let v=n.map[f];v===void 0&&(v=new g3(f),Ix(n,v)),n=v}}}class hf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=t.getActiveUniform(n,c),p=t.getUniformLocation(n,f.name);v3(f,p,this)}const s=[],u=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(c):u.push(c);s.length>0&&(this.seq=s.concat(u))}setValue(t,n,a,s){const u=this.map[n];u!==void 0&&u.setValue(t,a,s)}setOptional(t,n,a){const s=n[a];s!==void 0&&this.setValue(t,a,s)}static upload(t,n,a,s){for(let u=0,c=n.length;u!==c;++u){const f=n[u],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,s)}}static seqWithValue(t,n){const a=[];for(let s=0,u=t.length;s!==u;++s){const c=t[s];c.id in n&&a.push(c)}return a}}function Bx(o,t,n){const a=o.createShader(t);return o.shaderSource(a,n),o.compileShader(a),a}const x3=37297;let S3=0;function y3(o,t){const n=o.split(`
`),a=[],s=Math.max(t-6,0),u=Math.min(t+6,n.length);for(let c=s;c<u;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const Hx=new de;function M3(o){Ae._getMatrix(Hx,Ae.workingColorSpace,o);const t=`mat3( ${Hx.elements.map(n=>n.toFixed(4))} )`;switch(Ae.getTransfer(o)){case _f:return[t,"LinearTransferOETF"];case Ie:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Gx(o,t,n){const a=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(a&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+y3(o.getShaderSource(t),f)}else return u}function E3(o,t){const n=M3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const b3={[_S]:"Linear",[gS]:"Reinhard",[vS]:"Cineon",[xS]:"ACESFilmic",[yS]:"AgX",[MS]:"Neutral",[SS]:"Custom"};function T3(o,t){const n=b3[t];return n===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const af=new lt;function A3(){Ae.getLuminanceCoefficients(af);const o=af.x.toFixed(4),t=af.y.toFixed(4),n=af.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(eu).join(`
`)}function C3(o){const t=[];for(const n in o){const a=o[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function w3(o,t){const n={},a=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const u=o.getActiveAttrib(t,s),c=u.name;let f=1;u.type===o.FLOAT_MAT2&&(f=2),u.type===o.FLOAT_MAT3&&(f=3),u.type===o.FLOAT_MAT4&&(f=4),n[c]={type:u.type,location:o.getAttribLocation(t,c),locationSize:f}}return n}function eu(o){return o!==""}function Vx(o,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function kx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const D3=/^[ \t]*#include +<([\w\d./]+)>/gm;function ym(o){return o.replace(D3,N3)}const U3=new Map;function N3(o,t){let n=pe[t];if(n===void 0){const a=U3.get(t);if(a!==void 0)n=pe[a],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return ym(n)}const L3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xx(o){return o.replace(L3,O3)}function O3(o,t,n,a){let s="";for(let u=parseInt(t);u<parseInt(n);u++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return s}function Wx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const P3={[of]:"SHADOWMAP_TYPE_PCF",[tu]:"SHADOWMAP_TYPE_VSM"};function F3(o){return P3[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const z3={[Ls]:"ENVMAP_TYPE_CUBE",[Go]:"ENVMAP_TYPE_CUBE",[Rf]:"ENVMAP_TYPE_CUBE_UV"};function I3(o){return o.envMap===!1?"ENVMAP_TYPE_CUBE":z3[o.envMapMode]||"ENVMAP_TYPE_CUBE"}const B3={[Go]:"ENVMAP_MODE_REFRACTION"};function H3(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":B3[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const G3={[mS]:"ENVMAP_BLENDING_MULTIPLY",[UE]:"ENVMAP_BLENDING_MIX",[NE]:"ENVMAP_BLENDING_ADD"};function V3(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":G3[o.combine]||"ENVMAP_BLENDING_NONE"}function k3(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function X3(o,t,n,a){const s=o.getContext(),u=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=F3(n),d=I3(n),_=H3(n),v=V3(n),g=k3(n),S=R3(n),M=C3(u),E=s.createProgram();let x,y,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(eu).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(eu).join(`
`),y.length>0&&(y+=`
`)):(x=[Wx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(eu).join(`
`),y=[Wx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ga?"#define TONE_MAPPING":"",n.toneMapping!==ga?pe.tonemapping_pars_fragment:"",n.toneMapping!==ga?T3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,E3("linearToOutputTexel",n.outputColorSpace),A3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(eu).join(`
`)),c=ym(c),c=Vx(c,n),c=kx(c,n),f=ym(f),f=Vx(f,n),f=kx(f,n),c=Xx(c),f=Xx(f),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",n.glslVersion===ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const U=R+x+c,w=R+y+f,O=Bx(s,s.VERTEX_SHADER,U),P=Bx(s,s.FRAGMENT_SHADER,w);s.attachShader(E,O),s.attachShader(E,P),n.index0AttributeName!==void 0?s.bindAttribLocation(E,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(E,0,"position"),s.linkProgram(E);function L(G){if(o.debug.checkShaderErrors){const Y=s.getProgramInfoLog(E)||"",Q=s.getShaderInfoLog(O)||"",it=s.getShaderInfoLog(P)||"",Z=Y.trim(),F=Q.trim(),H=it.trim();let ot=!0,ct=!0;if(s.getProgramParameter(E,s.LINK_STATUS)===!1)if(ot=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(s,E,O,P);else{const St=Gx(s,O,"vertex"),I=Gx(s,P,"fragment");De("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(E,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+Z+`
`+St+`
`+I)}else Z!==""?oe("WebGLProgram: Program Info Log:",Z):(F===""||H==="")&&(ct=!1);ct&&(G.diagnostics={runnable:ot,programLog:Z,vertexShader:{log:F,prefix:x},fragmentShader:{log:H,prefix:y}})}s.deleteShader(O),s.deleteShader(P),T=new hf(s,E),C=w3(s,E)}let T;this.getUniforms=function(){return T===void 0&&L(this),T};let C;this.getAttributes=function(){return C===void 0&&L(this),C};let $=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return $===!1&&($=s.getProgramParameter(E,x3)),$},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(E),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=S3++,this.cacheKey=t,this.usedTimes=1,this.program=E,this.vertexShader=O,this.fragmentShader=P,this}let W3=0;class q3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,s=this._getShaderStage(n),u=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(s)===!1&&(c.add(s),s.usedTimes++),c.has(u)===!1&&(c.add(u),u.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new j3(t),n.set(t,a)),a}}class j3{constructor(t){this.id=W3++,this.code=t,this.usedTimes=0}}function Y3(o,t,n,a,s,u){const c=new LS,f=new q3,p=new Set,d=[],_=new Map,v=a.logarithmicDepthBuffer;let g=a.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return p.add(T),T===0?"uv":`uv${T}`}function E(T,C,$,G,Y){const Q=G.fog,it=Y.geometry,Z=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,F=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,H=t.get(T.envMap||Z,F),ot=H&&H.mapping===Rf?H.image.height:null,ct=S[T.type];T.precision!==null&&(g=a.getMaxPrecision(T.precision),g!==T.precision&&oe("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const St=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,I=St!==void 0?St.length:0;let j=0;it.morphAttributes.position!==void 0&&(j=1),it.morphAttributes.normal!==void 0&&(j=2),it.morphAttributes.color!==void 0&&(j=3);let mt,Tt,Ut,rt;if(ct){const Te=ha[ct];mt=Te.vertexShader,Tt=Te.fragmentShader}else mt=T.vertexShader,Tt=T.fragmentShader,f.update(T),Ut=f.getVertexShaderID(T),rt=f.getFragmentShaderID(T);const xt=o.getRenderTarget(),At=o.state.buffers.depth.getReversed(),kt=Y.isInstancedMesh===!0,Qt=Y.isBatchedMesh===!0,te=!!T.map,rn=!!T.matcap,ve=!!H,me=!!T.aoMap,Ue=!!T.lightMap,le=!!T.bumpMap,tn=!!T.normalMap,k=!!T.displacementMap,Ze=!!T.emissiveMap,be=!!T.metalnessMap,Le=!!T.roughnessMap,qt=T.anisotropy>0,z=T.clearcoat>0,A=T.dispersion>0,K=T.iridescence>0,_t=T.sheen>0,yt=T.transmission>0,dt=qt&&!!T.anisotropyMap,Xt=z&&!!T.clearcoatMap,wt=z&&!!T.clearcoatNormalMap,Kt=z&&!!T.clearcoatRoughnessMap,ee=K&&!!T.iridescenceMap,bt=K&&!!T.iridescenceThicknessMap,Mt=_t&&!!T.sheenColorMap,Pt=_t&&!!T.sheenRoughnessMap,Ot=!!T.specularMap,Ft=!!T.specularColorMap,ce=!!T.specularIntensityMap,q=yt&&!!T.transmissionMap,Ct=yt&&!!T.thicknessMap,Rt=!!T.gradientMap,zt=!!T.alphaMap,Et=T.alphaTest>0,ht=!!T.alphaHash,Bt=!!T.extensions;let ie=ga;T.toneMapped&&(xt===null||xt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Pe={shaderID:ct,shaderType:T.type,shaderName:T.name,vertexShader:mt,fragmentShader:Tt,defines:T.defines,customVertexShaderID:Ut,customFragmentShaderID:rt,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Qt,batchingColor:Qt&&Y._colorsTexture!==null,instancing:kt,instancingColor:kt&&Y.instanceColor!==null,instancingMorph:kt&&Y.morphTexture!==null,outputColorSpace:xt===null?o.outputColorSpace:xt.isXRRenderTarget===!0?xt.texture.colorSpace:ko,alphaToCoverage:!!T.alphaToCoverage,map:te,matcap:rn,envMap:ve,envMapMode:ve&&H.mapping,envMapCubeUVHeight:ot,aoMap:me,lightMap:Ue,bumpMap:le,normalMap:tn,displacementMap:k,emissiveMap:Ze,normalMapObjectSpace:tn&&T.normalMapType===FE,normalMapTangentSpace:tn&&T.normalMapType===PE,metalnessMap:be,roughnessMap:Le,anisotropy:qt,anisotropyMap:dt,clearcoat:z,clearcoatMap:Xt,clearcoatNormalMap:wt,clearcoatRoughnessMap:Kt,dispersion:A,iridescence:K,iridescenceMap:ee,iridescenceThicknessMap:bt,sheen:_t,sheenColorMap:Mt,sheenRoughnessMap:Pt,specularMap:Ot,specularColorMap:Ft,specularIntensityMap:ce,transmission:yt,transmissionMap:q,thicknessMap:Ct,gradientMap:Rt,opaque:T.transparent===!1&&T.blending===Po&&T.alphaToCoverage===!1,alphaMap:zt,alphaTest:Et,alphaHash:ht,combine:T.combine,mapUv:te&&M(T.map.channel),aoMapUv:me&&M(T.aoMap.channel),lightMapUv:Ue&&M(T.lightMap.channel),bumpMapUv:le&&M(T.bumpMap.channel),normalMapUv:tn&&M(T.normalMap.channel),displacementMapUv:k&&M(T.displacementMap.channel),emissiveMapUv:Ze&&M(T.emissiveMap.channel),metalnessMapUv:be&&M(T.metalnessMap.channel),roughnessMapUv:Le&&M(T.roughnessMap.channel),anisotropyMapUv:dt&&M(T.anisotropyMap.channel),clearcoatMapUv:Xt&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:wt&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:bt&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Pt&&M(T.sheenRoughnessMap.channel),specularMapUv:Ot&&M(T.specularMap.channel),specularColorMapUv:Ft&&M(T.specularColorMap.channel),specularIntensityMapUv:ce&&M(T.specularIntensityMap.channel),transmissionMapUv:q&&M(T.transmissionMap.channel),thicknessMapUv:Ct&&M(T.thicknessMap.channel),alphaMapUv:zt&&M(T.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(tn||qt),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!it.attributes.uv&&(te||zt),fog:!!Q,useFog:T.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||it.attributes.normal===void 0&&tn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:At,skinning:Y.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:j,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&$.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:te&&T.map.isVideoTexture===!0&&Ae.getTransfer(T.map.colorSpace)===Ie,decodeVideoTextureEmissive:Ze&&T.emissiveMap.isVideoTexture===!0&&Ae.getTransfer(T.emissiveMap.colorSpace)===Ie,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Za,flipSided:T.side===ri,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Bt&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&T.extensions.multiDraw===!0||Qt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function x(T){const C=[];if(T.shaderID?C.push(T.shaderID):(C.push(T.customVertexShaderID),C.push(T.customFragmentShaderID)),T.defines!==void 0)for(const $ in T.defines)C.push($),C.push(T.defines[$]);return T.isRawShaderMaterial===!1&&(y(C,T),R(C,T),C.push(o.outputColorSpace)),C.push(T.customProgramCacheKey),C.join()}function y(T,C){T.push(C.precision),T.push(C.outputColorSpace),T.push(C.envMapMode),T.push(C.envMapCubeUVHeight),T.push(C.mapUv),T.push(C.alphaMapUv),T.push(C.lightMapUv),T.push(C.aoMapUv),T.push(C.bumpMapUv),T.push(C.normalMapUv),T.push(C.displacementMapUv),T.push(C.emissiveMapUv),T.push(C.metalnessMapUv),T.push(C.roughnessMapUv),T.push(C.anisotropyMapUv),T.push(C.clearcoatMapUv),T.push(C.clearcoatNormalMapUv),T.push(C.clearcoatRoughnessMapUv),T.push(C.iridescenceMapUv),T.push(C.iridescenceThicknessMapUv),T.push(C.sheenColorMapUv),T.push(C.sheenRoughnessMapUv),T.push(C.specularMapUv),T.push(C.specularColorMapUv),T.push(C.specularIntensityMapUv),T.push(C.transmissionMapUv),T.push(C.thicknessMapUv),T.push(C.combine),T.push(C.fogExp2),T.push(C.sizeAttenuation),T.push(C.morphTargetsCount),T.push(C.morphAttributeCount),T.push(C.numDirLights),T.push(C.numPointLights),T.push(C.numSpotLights),T.push(C.numSpotLightMaps),T.push(C.numHemiLights),T.push(C.numRectAreaLights),T.push(C.numDirLightShadows),T.push(C.numPointLightShadows),T.push(C.numSpotLightShadows),T.push(C.numSpotLightShadowsWithMaps),T.push(C.numLightProbes),T.push(C.shadowMapType),T.push(C.toneMapping),T.push(C.numClippingPlanes),T.push(C.numClipIntersection),T.push(C.depthPacking)}function R(T,C){c.disableAll(),C.instancing&&c.enable(0),C.instancingColor&&c.enable(1),C.instancingMorph&&c.enable(2),C.matcap&&c.enable(3),C.envMap&&c.enable(4),C.normalMapObjectSpace&&c.enable(5),C.normalMapTangentSpace&&c.enable(6),C.clearcoat&&c.enable(7),C.iridescence&&c.enable(8),C.alphaTest&&c.enable(9),C.vertexColors&&c.enable(10),C.vertexAlphas&&c.enable(11),C.vertexUv1s&&c.enable(12),C.vertexUv2s&&c.enable(13),C.vertexUv3s&&c.enable(14),C.vertexTangents&&c.enable(15),C.anisotropy&&c.enable(16),C.alphaHash&&c.enable(17),C.batching&&c.enable(18),C.dispersion&&c.enable(19),C.batchingColor&&c.enable(20),C.gradientMap&&c.enable(21),T.push(c.mask),c.disableAll(),C.fog&&c.enable(0),C.useFog&&c.enable(1),C.flatShading&&c.enable(2),C.logarithmicDepthBuffer&&c.enable(3),C.reversedDepthBuffer&&c.enable(4),C.skinning&&c.enable(5),C.morphTargets&&c.enable(6),C.morphNormals&&c.enable(7),C.morphColors&&c.enable(8),C.premultipliedAlpha&&c.enable(9),C.shadowMapEnabled&&c.enable(10),C.doubleSided&&c.enable(11),C.flipSided&&c.enable(12),C.useDepthPacking&&c.enable(13),C.dithering&&c.enable(14),C.transmission&&c.enable(15),C.sheen&&c.enable(16),C.opaque&&c.enable(17),C.pointsUvs&&c.enable(18),C.decodeVideoTexture&&c.enable(19),C.decodeVideoTextureEmissive&&c.enable(20),C.alphaToCoverage&&c.enable(21),T.push(c.mask)}function U(T){const C=S[T.type];let $;if(C){const G=ha[C];$=Sb.clone(G.uniforms)}else $=T.uniforms;return $}function w(T,C){let $=_.get(C);return $!==void 0?++$.usedTimes:($=new X3(o,C,T,s),d.push($),_.set(C,$)),$}function O(T){if(--T.usedTimes===0){const C=d.indexOf(T);d[C]=d[d.length-1],d.pop(),_.delete(T.cacheKey),T.destroy()}}function P(T){f.remove(T)}function L(){f.dispose()}return{getParameters:E,getProgramCacheKey:x,getUniforms:U,acquireProgram:w,releaseProgram:O,releaseShaderCache:P,programs:d,dispose:L}}function Z3(){let o=new WeakMap;function t(c){return o.has(c)}function n(c){let f=o.get(c);return f===void 0&&(f={},o.set(c,f)),f}function a(c){o.delete(c)}function s(c,f,p){o.get(c)[f]=p}function u(){o=new WeakMap}return{has:t,get:n,remove:a,update:s,dispose:u}}function K3(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function qx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function jx(){const o=[];let t=0;const n=[],a=[],s=[];function u(){t=0,n.length=0,a.length=0,s.length=0}function c(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,M,E,x,y){let R=o[t];return R===void 0?(R={id:g.id,object:g,geometry:S,material:M,materialVariant:c(g),groupOrder:E,renderOrder:g.renderOrder,z:x,group:y},o[t]=R):(R.id=g.id,R.object=g,R.geometry=S,R.material=M,R.materialVariant=c(g),R.groupOrder=E,R.renderOrder=g.renderOrder,R.z=x,R.group=y),t++,R}function p(g,S,M,E,x,y){const R=f(g,S,M,E,x,y);M.transmission>0?a.push(R):M.transparent===!0?s.push(R):n.push(R)}function d(g,S,M,E,x,y){const R=f(g,S,M,E,x,y);M.transmission>0?a.unshift(R):M.transparent===!0?s.unshift(R):n.unshift(R)}function _(g,S){n.length>1&&n.sort(g||K3),a.length>1&&a.sort(S||qx),s.length>1&&s.sort(S||qx)}function v(){for(let g=t,S=o.length;g<S;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:a,transparent:s,init:u,push:p,unshift:d,finish:v,sort:_}}function Q3(){let o=new WeakMap;function t(a,s){const u=o.get(a);let c;return u===void 0?(c=new jx,o.set(a,[c])):s>=u.length?(c=new jx,u.push(c)):c=u[s],c}function n(){o=new WeakMap}return{get:t,dispose:n}}function J3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new lt,color:new Be};break;case"SpotLight":n={position:new lt,direction:new lt,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new lt,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new lt,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new lt,halfWidth:new lt,halfHeight:new lt};break}return o[t.id]=n,n}}}function $3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=n,n}}}let tR=0;function eR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function nR(o){const t=new J3,n=$3(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new lt);const s=new lt,u=new Mn,c=new Mn;function f(d){let _=0,v=0,g=0;for(let C=0;C<9;C++)a.probe[C].set(0,0,0);let S=0,M=0,E=0,x=0,y=0,R=0,U=0,w=0,O=0,P=0,L=0;d.sort(eR);for(let C=0,$=d.length;C<$;C++){const G=d[C],Y=G.color,Q=G.intensity,it=G.distance;let Z=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Vo?Z=G.shadow.map.texture:Z=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)_+=Y.r*Q,v+=Y.g*Q,g+=Y.b*Q;else if(G.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(G.sh.coefficients[F],Q);L++}else if(G.isDirectionalLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const H=G.shadow,ot=n.get(G);ot.shadowIntensity=H.intensity,ot.shadowBias=H.bias,ot.shadowNormalBias=H.normalBias,ot.shadowRadius=H.radius,ot.shadowMapSize=H.mapSize,a.directionalShadow[S]=ot,a.directionalShadowMap[S]=Z,a.directionalShadowMatrix[S]=G.shadow.matrix,R++}a.directional[S]=F,S++}else if(G.isSpotLight){const F=t.get(G);F.position.setFromMatrixPosition(G.matrixWorld),F.color.copy(Y).multiplyScalar(Q),F.distance=it,F.coneCos=Math.cos(G.angle),F.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),F.decay=G.decay,a.spot[E]=F;const H=G.shadow;if(G.map&&(a.spotLightMap[O]=G.map,O++,H.updateMatrices(G),G.castShadow&&P++),a.spotLightMatrix[E]=H.matrix,G.castShadow){const ot=n.get(G);ot.shadowIntensity=H.intensity,ot.shadowBias=H.bias,ot.shadowNormalBias=H.normalBias,ot.shadowRadius=H.radius,ot.shadowMapSize=H.mapSize,a.spotShadow[E]=ot,a.spotShadowMap[E]=Z,w++}E++}else if(G.isRectAreaLight){const F=t.get(G);F.color.copy(Y).multiplyScalar(Q),F.halfWidth.set(G.width*.5,0,0),F.halfHeight.set(0,G.height*.5,0),a.rectArea[x]=F,x++}else if(G.isPointLight){const F=t.get(G);if(F.color.copy(G.color).multiplyScalar(G.intensity),F.distance=G.distance,F.decay=G.decay,G.castShadow){const H=G.shadow,ot=n.get(G);ot.shadowIntensity=H.intensity,ot.shadowBias=H.bias,ot.shadowNormalBias=H.normalBias,ot.shadowRadius=H.radius,ot.shadowMapSize=H.mapSize,ot.shadowCameraNear=H.camera.near,ot.shadowCameraFar=H.camera.far,a.pointShadow[M]=ot,a.pointShadowMap[M]=Z,a.pointShadowMatrix[M]=G.shadow.matrix,U++}a.point[M]=F,M++}else if(G.isHemisphereLight){const F=t.get(G);F.skyColor.copy(G.color).multiplyScalar(Q),F.groundColor.copy(G.groundColor).multiplyScalar(Q),a.hemi[y]=F,y++}}x>0&&(o.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Lt.LTC_FLOAT_1,a.rectAreaLTC2=Lt.LTC_FLOAT_2):(a.rectAreaLTC1=Lt.LTC_HALF_1,a.rectAreaLTC2=Lt.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=v,a.ambient[2]=g;const T=a.hash;(T.directionalLength!==S||T.pointLength!==M||T.spotLength!==E||T.rectAreaLength!==x||T.hemiLength!==y||T.numDirectionalShadows!==R||T.numPointShadows!==U||T.numSpotShadows!==w||T.numSpotMaps!==O||T.numLightProbes!==L)&&(a.directional.length=S,a.spot.length=E,a.rectArea.length=x,a.point.length=M,a.hemi.length=y,a.directionalShadow.length=R,a.directionalShadowMap.length=R,a.pointShadow.length=U,a.pointShadowMap.length=U,a.spotShadow.length=w,a.spotShadowMap.length=w,a.directionalShadowMatrix.length=R,a.pointShadowMatrix.length=U,a.spotLightMatrix.length=w+O-P,a.spotLightMap.length=O,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=L,T.directionalLength=S,T.pointLength=M,T.spotLength=E,T.rectAreaLength=x,T.hemiLength=y,T.numDirectionalShadows=R,T.numPointShadows=U,T.numSpotShadows=w,T.numSpotMaps=O,T.numLightProbes=L,a.version=tR++)}function p(d,_){let v=0,g=0,S=0,M=0,E=0;const x=_.matrixWorldInverse;for(let y=0,R=d.length;y<R;y++){const U=d[y];if(U.isDirectionalLight){const w=a.directional[v];w.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),v++}else if(U.isSpotLight){const w=a.spot[S];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(x),w.direction.setFromMatrixPosition(U.matrixWorld),s.setFromMatrixPosition(U.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(x),S++}else if(U.isRectAreaLight){const w=a.rectArea[M];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(x),c.identity(),u.copy(U.matrixWorld),u.premultiply(x),c.extractRotation(u),w.halfWidth.set(U.width*.5,0,0),w.halfHeight.set(0,U.height*.5,0),w.halfWidth.applyMatrix4(c),w.halfHeight.applyMatrix4(c),M++}else if(U.isPointLight){const w=a.point[g];w.position.setFromMatrixPosition(U.matrixWorld),w.position.applyMatrix4(x),g++}else if(U.isHemisphereLight){const w=a.hemi[E];w.direction.setFromMatrixPosition(U.matrixWorld),w.direction.transformDirection(x),E++}}}return{setup:f,setupView:p,state:a}}function Yx(o){const t=new nR(o),n=[],a=[];function s(_){d.camera=_,n.length=0,a.length=0}function u(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:f,setupLightsView:p,pushLight:u,pushShadow:c}}function iR(o){let t=new WeakMap;function n(s,u=0){const c=t.get(s);let f;return c===void 0?(f=new Yx(o),t.set(s,[f])):u>=c.length?(f=new Yx(o),c.push(f)):f=c[u],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const aR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,sR=[new lt(1,0,0),new lt(-1,0,0),new lt(0,1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1)],oR=[new lt(0,-1,0),new lt(0,-1,0),new lt(0,0,1),new lt(0,0,-1),new lt(0,-1,0),new lt(0,-1,0)],Zx=new Mn,Ql=new lt,yp=new lt;function lR(o,t,n){let a=new IS;const s=new He,u=new He,c=new hn,f=new bb,p=new Tb,d={},_=n.maxTextureSize,v={[Wr]:ri,[ri]:Wr,[Za]:Za},g=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:aR,fragmentShader:rR}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new rr;M.setAttribute("position",new xa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ya(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=of;let y=this.type;this.render=function(P,L,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;this.type===hE&&(oe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=of);const C=o.getRenderTarget(),$=o.getActiveCubeFace(),G=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(Qa),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=y!==this.type;Q&&L.traverse(function(it){it.material&&(Array.isArray(it.material)?it.material.forEach(Z=>Z.needsUpdate=!0):it.material.needsUpdate=!0)});for(let it=0,Z=P.length;it<Z;it++){const F=P[it],H=F.shadow;if(H===void 0){oe("WebGLShadowMap:",F,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ot=H.getFrameExtents();s.multiply(ot),u.copy(H.mapSize),(s.x>_||s.y>_)&&(s.x>_&&(u.x=Math.floor(_/ot.x),s.x=u.x*ot.x,H.mapSize.x=u.x),s.y>_&&(u.y=Math.floor(_/ot.y),s.y=u.y*ot.y,H.mapSize.y=u.y));const ct=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=ct,H.map===null||Q===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===tu){if(F.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new va(s.x,s.y,{format:Vo,type:tr,minFilter:Gn,magFilter:Gn,generateMipmaps:!1}),H.map.texture.name=F.name+".shadowMap",H.map.depthTexture=new uu(s.x,s.y,pa),H.map.depthTexture.name=F.name+".shadowMapDepth",H.map.depthTexture.format=er,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn}else F.isPointLight?(H.map=new XS(s.x),H.map.depthTexture=new vb(s.x,Sa)):(H.map=new va(s.x,s.y),H.map.depthTexture=new uu(s.x,s.y,Sa)),H.map.depthTexture.name=F.name+".shadowMap",H.map.depthTexture.format=er,this.type===of?(H.map.depthTexture.compareFunction=ct?Wm:Xm,H.map.depthTexture.minFilter=Gn,H.map.depthTexture.magFilter=Gn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Pn,H.map.depthTexture.magFilter=Pn);H.camera.updateProjectionMatrix()}const St=H.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<St;I++){if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,I),o.clear();else{I===0&&(o.setRenderTarget(H.map),o.clear());const j=H.getViewport(I);c.set(u.x*j.x,u.y*j.y,u.x*j.z,u.y*j.w),Y.viewport(c)}if(F.isPointLight){const j=H.camera,mt=H.matrix,Tt=F.distance||j.far;Tt!==j.far&&(j.far=Tt,j.updateProjectionMatrix()),Ql.setFromMatrixPosition(F.matrixWorld),j.position.copy(Ql),yp.copy(j.position),yp.add(sR[I]),j.up.copy(oR[I]),j.lookAt(yp),j.updateMatrixWorld(),mt.makeTranslation(-Ql.x,-Ql.y,-Ql.z),Zx.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Zx,j.coordinateSystem,j.reversedDepth)}else H.updateMatrices(F);a=H.getFrustum(),w(L,T,H.camera,F,this.type)}H.isPointLightShadow!==!0&&this.type===tu&&R(H,T),H.needsUpdate=!1}y=this.type,x.needsUpdate=!1,o.setRenderTarget(C,$,G)};function R(P,L){const T=t.update(E);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new va(s.x,s.y,{format:Vo,type:tr})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(L,null,T,g,E,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(L,null,T,S,E,null)}function U(P,L,T,C){let $=null;const G=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)$=G;else if($=T.isPointLight===!0?p:f,o.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const Y=$.uuid,Q=L.uuid;let it=d[Y];it===void 0&&(it={},d[Y]=it);let Z=it[Q];Z===void 0&&(Z=$.clone(),it[Q]=Z,L.addEventListener("dispose",O)),$=Z}if($.visible=L.visible,$.wireframe=L.wireframe,C===tu?$.side=L.shadowSide!==null?L.shadowSide:L.side:$.side=L.shadowSide!==null?L.shadowSide:v[L.side],$.alphaMap=L.alphaMap,$.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,$.map=L.map,$.clipShadows=L.clipShadows,$.clippingPlanes=L.clippingPlanes,$.clipIntersection=L.clipIntersection,$.displacementMap=L.displacementMap,$.displacementScale=L.displacementScale,$.displacementBias=L.displacementBias,$.wireframeLinewidth=L.wireframeLinewidth,$.linewidth=L.linewidth,T.isPointLight===!0&&$.isMeshDistanceMaterial===!0){const Y=o.properties.get($);Y.light=T}return $}function w(P,L,T,C,$){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&$===tu)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const Q=t.update(P),it=P.material;if(Array.isArray(it)){const Z=Q.groups;for(let F=0,H=Z.length;F<H;F++){const ot=Z[F],ct=it[ot.materialIndex];if(ct&&ct.visible){const St=U(P,ct,C,$);P.onBeforeShadow(o,P,L,T,Q,St,ot),o.renderBufferDirect(T,null,Q,St,P,ot),P.onAfterShadow(o,P,L,T,Q,St,ot)}}}else if(it.visible){const Z=U(P,it,C,$);P.onBeforeShadow(o,P,L,T,Q,Z,null),o.renderBufferDirect(T,null,Q,Z,P,null),P.onAfterShadow(o,P,L,T,Q,Z,null)}}const Y=P.children;for(let Q=0,it=Y.length;Q<it;Q++)w(Y[Q],L,T,C,$)}function O(P){P.target.removeEventListener("dispose",O);for(const T in d){const C=d[T],$=P.target.uuid;$ in C&&(C[$].dispose(),delete C[$])}}}function uR(o,t){function n(){let q=!1;const Ct=new hn;let Rt=null;const zt=new hn(0,0,0,0);return{setMask:function(Et){Rt!==Et&&!q&&(o.colorMask(Et,Et,Et,Et),Rt=Et)},setLocked:function(Et){q=Et},setClear:function(Et,ht,Bt,ie,Pe){Pe===!0&&(Et*=ie,ht*=ie,Bt*=ie),Ct.set(Et,ht,Bt,ie),zt.equals(Ct)===!1&&(o.clearColor(Et,ht,Bt,ie),zt.copy(Ct))},reset:function(){q=!1,Rt=null,zt.set(-1,0,0,0)}}}function a(){let q=!1,Ct=!1,Rt=null,zt=null,Et=null;return{setReversed:function(ht){if(Ct!==ht){const Bt=t.get("EXT_clip_control");ht?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Ct=ht;const ie=Et;Et=null,this.setClear(ie)}},getReversed:function(){return Ct},setTest:function(ht){ht?xt(o.DEPTH_TEST):At(o.DEPTH_TEST)},setMask:function(ht){Rt!==ht&&!q&&(o.depthMask(ht),Rt=ht)},setFunc:function(ht){if(Ct&&(ht=qE[ht]),zt!==ht){switch(ht){case Np:o.depthFunc(o.NEVER);break;case Lp:o.depthFunc(o.ALWAYS);break;case Op:o.depthFunc(o.LESS);break;case Ho:o.depthFunc(o.LEQUAL);break;case Pp:o.depthFunc(o.EQUAL);break;case Fp:o.depthFunc(o.GEQUAL);break;case zp:o.depthFunc(o.GREATER);break;case Ip:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}zt=ht}},setLocked:function(ht){q=ht},setClear:function(ht){Et!==ht&&(Et=ht,Ct&&(ht=1-ht),o.clearDepth(ht))},reset:function(){q=!1,Rt=null,zt=null,Et=null,Ct=!1}}}function s(){let q=!1,Ct=null,Rt=null,zt=null,Et=null,ht=null,Bt=null,ie=null,Pe=null;return{setTest:function(Te){q||(Te?xt(o.STENCIL_TEST):At(o.STENCIL_TEST))},setMask:function(Te){Ct!==Te&&!q&&(o.stencilMask(Te),Ct=Te)},setFunc:function(Te,kn,Xi){(Rt!==Te||zt!==kn||Et!==Xi)&&(o.stencilFunc(Te,kn,Xi),Rt=Te,zt=kn,Et=Xi)},setOp:function(Te,kn,Xi){(ht!==Te||Bt!==kn||ie!==Xi)&&(o.stencilOp(Te,kn,Xi),ht=Te,Bt=kn,ie=Xi)},setLocked:function(Te){q=Te},setClear:function(Te){Pe!==Te&&(o.clearStencil(Te),Pe=Te)},reset:function(){q=!1,Ct=null,Rt=null,zt=null,Et=null,ht=null,Bt=null,ie=null,Pe=null}}}const u=new n,c=new a,f=new s,p=new WeakMap,d=new WeakMap;let _={},v={},g=new WeakMap,S=[],M=null,E=!1,x=null,y=null,R=null,U=null,w=null,O=null,P=null,L=new Be(0,0,0),T=0,C=!1,$=null,G=null,Y=null,Q=null,it=null;const Z=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,H=0;const ot=o.getParameter(o.VERSION);ot.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ot)[1]),F=H>=1):ot.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ot)[1]),F=H>=2);let ct=null,St={};const I=o.getParameter(o.SCISSOR_BOX),j=o.getParameter(o.VIEWPORT),mt=new hn().fromArray(I),Tt=new hn().fromArray(j);function Ut(q,Ct,Rt,zt){const Et=new Uint8Array(4),ht=o.createTexture();o.bindTexture(q,ht),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<Rt;Bt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,zt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Ct+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return ht}const rt={};rt[o.TEXTURE_2D]=Ut(o.TEXTURE_2D,o.TEXTURE_2D,1),rt[o.TEXTURE_CUBE_MAP]=Ut(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[o.TEXTURE_2D_ARRAY]=Ut(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),rt[o.TEXTURE_3D]=Ut(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),f.setClear(0),xt(o.DEPTH_TEST),c.setFunc(Ho),le(!1),tn(ex),xt(o.CULL_FACE),me(Qa);function xt(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function At(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function kt(q,Ct){return v[q]!==Ct?(o.bindFramebuffer(q,Ct),v[q]=Ct,q===o.DRAW_FRAMEBUFFER&&(v[o.FRAMEBUFFER]=Ct),q===o.FRAMEBUFFER&&(v[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Qt(q,Ct){let Rt=S,zt=!1;if(q){Rt=g.get(Ct),Rt===void 0&&(Rt=[],g.set(Ct,Rt));const Et=q.textures;if(Rt.length!==Et.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let ht=0,Bt=Et.length;ht<Bt;ht++)Rt[ht]=o.COLOR_ATTACHMENT0+ht;Rt.length=Et.length,zt=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,zt=!0);zt&&o.drawBuffers(Rt)}function te(q){return M!==q?(o.useProgram(q),M=q,!0):!1}const rn={[bs]:o.FUNC_ADD,[pE]:o.FUNC_SUBTRACT,[mE]:o.FUNC_REVERSE_SUBTRACT};rn[_E]=o.MIN,rn[gE]=o.MAX;const ve={[vE]:o.ZERO,[xE]:o.ONE,[SE]:o.SRC_COLOR,[Dp]:o.SRC_ALPHA,[AE]:o.SRC_ALPHA_SATURATE,[bE]:o.DST_COLOR,[ME]:o.DST_ALPHA,[yE]:o.ONE_MINUS_SRC_COLOR,[Up]:o.ONE_MINUS_SRC_ALPHA,[TE]:o.ONE_MINUS_DST_COLOR,[EE]:o.ONE_MINUS_DST_ALPHA,[RE]:o.CONSTANT_COLOR,[CE]:o.ONE_MINUS_CONSTANT_COLOR,[wE]:o.CONSTANT_ALPHA,[DE]:o.ONE_MINUS_CONSTANT_ALPHA};function me(q,Ct,Rt,zt,Et,ht,Bt,ie,Pe,Te){if(q===Qa){E===!0&&(At(o.BLEND),E=!1);return}if(E===!1&&(xt(o.BLEND),E=!0),q!==dE){if(q!==x||Te!==C){if((y!==bs||w!==bs)&&(o.blendEquation(o.FUNC_ADD),y=bs,w=bs),Te)switch(q){case Po:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nx:o.blendFunc(o.ONE,o.ONE);break;case ix:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ax:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:De("WebGLState: Invalid blending: ",q);break}else switch(q){case Po:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case nx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case ix:De("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ax:De("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:De("WebGLState: Invalid blending: ",q);break}R=null,U=null,O=null,P=null,L.set(0,0,0),T=0,x=q,C=Te}return}Et=Et||Ct,ht=ht||Rt,Bt=Bt||zt,(Ct!==y||Et!==w)&&(o.blendEquationSeparate(rn[Ct],rn[Et]),y=Ct,w=Et),(Rt!==R||zt!==U||ht!==O||Bt!==P)&&(o.blendFuncSeparate(ve[Rt],ve[zt],ve[ht],ve[Bt]),R=Rt,U=zt,O=ht,P=Bt),(ie.equals(L)===!1||Pe!==T)&&(o.blendColor(ie.r,ie.g,ie.b,Pe),L.copy(ie),T=Pe),x=q,C=!1}function Ue(q,Ct){q.side===Za?At(o.CULL_FACE):xt(o.CULL_FACE);let Rt=q.side===ri;Ct&&(Rt=!Rt),le(Rt),q.blending===Po&&q.transparent===!1?me(Qa):me(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),c.setFunc(q.depthFunc),c.setTest(q.depthTest),c.setMask(q.depthWrite),u.setMask(q.colorWrite);const zt=q.stencilWrite;f.setTest(zt),zt&&(f.setMask(q.stencilWriteMask),f.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),f.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ze(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?xt(o.SAMPLE_ALPHA_TO_COVERAGE):At(o.SAMPLE_ALPHA_TO_COVERAGE)}function le(q){$!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),$=q)}function tn(q){q!==cE?(xt(o.CULL_FACE),q!==G&&(q===ex?o.cullFace(o.BACK):q===fE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):At(o.CULL_FACE),G=q}function k(q){q!==Y&&(F&&o.lineWidth(q),Y=q)}function Ze(q,Ct,Rt){q?(xt(o.POLYGON_OFFSET_FILL),(Q!==Ct||it!==Rt)&&(Q=Ct,it=Rt,c.getReversed()&&(Ct=-Ct),o.polygonOffset(Ct,Rt))):At(o.POLYGON_OFFSET_FILL)}function be(q){q?xt(o.SCISSOR_TEST):At(o.SCISSOR_TEST)}function Le(q){q===void 0&&(q=o.TEXTURE0+Z-1),ct!==q&&(o.activeTexture(q),ct=q)}function qt(q,Ct,Rt){Rt===void 0&&(ct===null?Rt=o.TEXTURE0+Z-1:Rt=ct);let zt=St[Rt];zt===void 0&&(zt={type:void 0,texture:void 0},St[Rt]=zt),(zt.type!==q||zt.texture!==Ct)&&(ct!==Rt&&(o.activeTexture(Rt),ct=Rt),o.bindTexture(q,Ct||rt[q]),zt.type=q,zt.texture=Ct)}function z(){const q=St[ct];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function K(){try{o.compressedTexImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function _t(){try{o.texSubImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function yt(){try{o.texSubImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function dt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function Xt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function wt(){try{o.texStorage2D(...arguments)}catch(q){De("WebGLState:",q)}}function Kt(){try{o.texStorage3D(...arguments)}catch(q){De("WebGLState:",q)}}function ee(){try{o.texImage2D(...arguments)}catch(q){De("WebGLState:",q)}}function bt(){try{o.texImage3D(...arguments)}catch(q){De("WebGLState:",q)}}function Mt(q){mt.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),mt.copy(q))}function Pt(q){Tt.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),Tt.copy(q))}function Ot(q,Ct){let Rt=d.get(Ct);Rt===void 0&&(Rt=new WeakMap,d.set(Ct,Rt));let zt=Rt.get(q);zt===void 0&&(zt=o.getUniformBlockIndex(Ct,q.name),Rt.set(q,zt))}function Ft(q,Ct){const zt=d.get(Ct).get(q);p.get(Ct)!==zt&&(o.uniformBlockBinding(Ct,zt,q.__bindingPointIndex),p.set(Ct,zt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),c.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ct=null,St={},v={},g=new WeakMap,S=[],M=null,E=!1,x=null,y=null,R=null,U=null,w=null,O=null,P=null,L=new Be(0,0,0),T=0,C=!1,$=null,G=null,Y=null,Q=null,it=null,mt.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),c.reset(),f.reset()}return{buffers:{color:u,depth:c,stencil:f},enable:xt,disable:At,bindFramebuffer:kt,drawBuffers:Qt,useProgram:te,setBlending:me,setMaterial:Ue,setFlipSided:le,setCullFace:tn,setLineWidth:k,setPolygonOffset:Ze,setScissorTest:be,activeTexture:Le,bindTexture:qt,unbindTexture:z,compressedTexImage2D:A,compressedTexImage3D:K,texImage2D:ee,texImage3D:bt,updateUBOMapping:Ot,uniformBlockBinding:Ft,texStorage2D:wt,texStorage3D:Kt,texSubImage2D:_t,texSubImage3D:yt,compressedTexSubImage2D:dt,compressedTexSubImage3D:Xt,scissor:Mt,viewport:Pt,reset:ce}}function cR(o,t,n,a,s,u,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new He,_=new WeakMap;let v;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(z,A){return S?new OffscreenCanvas(z,A):vf("canvas")}function E(z,A,K){let _t=1;const yt=qt(z);if((yt.width>K||yt.height>K)&&(_t=K/Math.max(yt.width,yt.height)),_t<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const dt=Math.floor(_t*yt.width),Xt=Math.floor(_t*yt.height);v===void 0&&(v=M(dt,Xt));const wt=A?M(dt,Xt):v;return wt.width=dt,wt.height=Xt,wt.getContext("2d").drawImage(z,0,0,dt,Xt),oe("WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+dt+"x"+Xt+")."),wt}else return"data"in z&&oe("WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),z;return z}function x(z){return z.generateMipmaps}function y(z){o.generateMipmap(z)}function R(z){return z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?o.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(z,A,K,_t,yt=!1){if(z!==null){if(o[z]!==void 0)return o[z];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let dt=A;if(A===o.RED&&(K===o.FLOAT&&(dt=o.R32F),K===o.HALF_FLOAT&&(dt=o.R16F),K===o.UNSIGNED_BYTE&&(dt=o.R8)),A===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(dt=o.R8UI),K===o.UNSIGNED_SHORT&&(dt=o.R16UI),K===o.UNSIGNED_INT&&(dt=o.R32UI),K===o.BYTE&&(dt=o.R8I),K===o.SHORT&&(dt=o.R16I),K===o.INT&&(dt=o.R32I)),A===o.RG&&(K===o.FLOAT&&(dt=o.RG32F),K===o.HALF_FLOAT&&(dt=o.RG16F),K===o.UNSIGNED_BYTE&&(dt=o.RG8)),A===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(dt=o.RG8UI),K===o.UNSIGNED_SHORT&&(dt=o.RG16UI),K===o.UNSIGNED_INT&&(dt=o.RG32UI),K===o.BYTE&&(dt=o.RG8I),K===o.SHORT&&(dt=o.RG16I),K===o.INT&&(dt=o.RG32I)),A===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(dt=o.RGB8UI),K===o.UNSIGNED_SHORT&&(dt=o.RGB16UI),K===o.UNSIGNED_INT&&(dt=o.RGB32UI),K===o.BYTE&&(dt=o.RGB8I),K===o.SHORT&&(dt=o.RGB16I),K===o.INT&&(dt=o.RGB32I)),A===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(dt=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(dt=o.RGBA16UI),K===o.UNSIGNED_INT&&(dt=o.RGBA32UI),K===o.BYTE&&(dt=o.RGBA8I),K===o.SHORT&&(dt=o.RGBA16I),K===o.INT&&(dt=o.RGBA32I)),A===o.RGB&&(K===o.UNSIGNED_INT_5_9_9_9_REV&&(dt=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(dt=o.R11F_G11F_B10F)),A===o.RGBA){const Xt=yt?_f:Ae.getTransfer(_t);K===o.FLOAT&&(dt=o.RGBA32F),K===o.HALF_FLOAT&&(dt=o.RGBA16F),K===o.UNSIGNED_BYTE&&(dt=Xt===Ie?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(dt=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(dt=o.RGB5_A1)}return(dt===o.R16F||dt===o.R32F||dt===o.RG16F||dt===o.RG32F||dt===o.RGBA16F||dt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),dt}function w(z,A){let K;return z?A===null||A===Sa||A===lu?K=o.DEPTH24_STENCIL8:A===pa?K=o.DEPTH32F_STENCIL8:A===ou&&(K=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Sa||A===lu?K=o.DEPTH_COMPONENT24:A===pa?K=o.DEPTH_COMPONENT32F:A===ou&&(K=o.DEPTH_COMPONENT16),K}function O(z,A){return x(z)===!0||z.isFramebufferTexture&&z.minFilter!==Pn&&z.minFilter!==Gn?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function P(z){const A=z.target;A.removeEventListener("dispose",P),T(A),A.isVideoTexture&&_.delete(A)}function L(z){const A=z.target;A.removeEventListener("dispose",L),$(A)}function T(z){const A=a.get(z);if(A.__webglInit===void 0)return;const K=z.source,_t=g.get(K);if(_t){const yt=_t[A.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&C(z),Object.keys(_t).length===0&&g.delete(K)}a.remove(z)}function C(z){const A=a.get(z);o.deleteTexture(A.__webglTexture);const K=z.source,_t=g.get(K);delete _t[A.__cacheKey],c.memory.textures--}function $(z){const A=a.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),a.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(A.__webglFramebuffer[_t]))for(let yt=0;yt<A.__webglFramebuffer[_t].length;yt++)o.deleteFramebuffer(A.__webglFramebuffer[_t][yt]);else o.deleteFramebuffer(A.__webglFramebuffer[_t]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[_t])}else{if(Array.isArray(A.__webglFramebuffer))for(let _t=0;_t<A.__webglFramebuffer.length;_t++)o.deleteFramebuffer(A.__webglFramebuffer[_t]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let _t=0;_t<A.__webglColorRenderbuffer.length;_t++)A.__webglColorRenderbuffer[_t]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[_t]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const K=z.textures;for(let _t=0,yt=K.length;_t<yt;_t++){const dt=a.get(K[_t]);dt.__webglTexture&&(o.deleteTexture(dt.__webglTexture),c.memory.textures--),a.remove(K[_t])}a.remove(z)}let G=0;function Y(){G=0}function Q(){const z=G;return z>=s.maxTextures&&oe("WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+s.maxTextures),G+=1,z}function it(z){const A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function Z(z,A){const K=a.get(z);if(z.isVideoTexture&&be(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&K.__version!==z.version){const _t=z.image;if(_t===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{rt(K,z,A);return}}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+A)}function F(z,A){const K=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){rt(K,z,A);return}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);n.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+A)}function H(z,A){const K=a.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){rt(K,z,A);return}n.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+A)}function ot(z,A){const K=a.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&K.__version!==z.version){xt(K,z,A);return}n.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+A)}const ct={[Bp]:o.REPEAT,[Ka]:o.CLAMP_TO_EDGE,[Hp]:o.MIRRORED_REPEAT},St={[Pn]:o.NEAREST,[LE]:o.NEAREST_MIPMAP_NEAREST,[Pc]:o.NEAREST_MIPMAP_LINEAR,[Gn]:o.LINEAR,[Wd]:o.LINEAR_MIPMAP_NEAREST,[As]:o.LINEAR_MIPMAP_LINEAR},I={[zE]:o.NEVER,[VE]:o.ALWAYS,[IE]:o.LESS,[Xm]:o.LEQUAL,[BE]:o.EQUAL,[Wm]:o.GEQUAL,[HE]:o.GREATER,[GE]:o.NOTEQUAL};function j(z,A){if(A.type===pa&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Gn||A.magFilter===Wd||A.magFilter===Pc||A.magFilter===As||A.minFilter===Gn||A.minFilter===Wd||A.minFilter===Pc||A.minFilter===As)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,ct[A.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,ct[A.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,ct[A.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,St[A.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,St[A.minFilter]),A.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,I[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Pn||A.minFilter!==Pc&&A.minFilter!==As||A.type===pa&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");o.texParameterf(z,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function mt(z,A){let K=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",P));const _t=A.source;let yt=g.get(_t);yt===void 0&&(yt={},g.set(_t,yt));const dt=it(A);if(dt!==z.__cacheKey){yt[dt]===void 0&&(yt[dt]={texture:o.createTexture(),usedTimes:0},c.memory.textures++,K=!0),yt[dt].usedTimes++;const Xt=yt[z.__cacheKey];Xt!==void 0&&(yt[z.__cacheKey].usedTimes--,Xt.usedTimes===0&&C(A)),z.__cacheKey=dt,z.__webglTexture=yt[dt].texture}return K}function Tt(z,A,K){return Math.floor(Math.floor(z/K)/A)}function Ut(z,A,K,_t){const dt=z.updateRanges;if(dt.length===0)n.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,K,_t,A.data);else{dt.sort((bt,Mt)=>bt.start-Mt.start);let Xt=0;for(let bt=1;bt<dt.length;bt++){const Mt=dt[Xt],Pt=dt[bt],Ot=Mt.start+Mt.count,Ft=Tt(Pt.start,A.width,4),ce=Tt(Mt.start,A.width,4);Pt.start<=Ot+1&&Ft===ce&&Tt(Pt.start+Pt.count-1,A.width,4)===Ft?Mt.count=Math.max(Mt.count,Pt.start+Pt.count-Mt.start):(++Xt,dt[Xt]=Pt)}dt.length=Xt+1;const wt=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),ee=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let bt=0,Mt=dt.length;bt<Mt;bt++){const Pt=dt[bt],Ot=Math.floor(Pt.start/4),Ft=Math.ceil(Pt.count/4),ce=Ot%A.width,q=Math.floor(Ot/A.width),Ct=Ft,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),n.texSubImage2D(o.TEXTURE_2D,0,ce,q,Ct,Rt,K,_t,A.data)}z.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,wt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,ee)}}function rt(z,A,K){let _t=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(_t=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(_t=o.TEXTURE_3D);const yt=mt(z,A),dt=A.source;n.bindTexture(_t,z.__webglTexture,o.TEXTURE0+K);const Xt=a.get(dt);if(dt.version!==Xt.__version||yt===!0){n.activeTexture(o.TEXTURE0+K);const wt=Ae.getPrimaries(Ae.workingColorSpace),Kt=A.colorSpace===Ir?null:Ae.getPrimaries(A.colorSpace),ee=A.colorSpace===Ir||wt===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let bt=E(A.image,!1,s.maxTextureSize);bt=Le(A,bt);const Mt=u.convert(A.format,A.colorSpace),Pt=u.convert(A.type);let Ot=U(A.internalFormat,Mt,Pt,A.colorSpace,A.isVideoTexture);j(_t,A);let Ft;const ce=A.mipmaps,q=A.isVideoTexture!==!0,Ct=Xt.__version===void 0||yt===!0,Rt=dt.dataReady,zt=O(A,bt);if(A.isDepthTexture)Ot=w(A.format===Rs,A.type),Ct&&(q?n.texStorage2D(o.TEXTURE_2D,1,Ot,bt.width,bt.height):n.texImage2D(o.TEXTURE_2D,0,Ot,bt.width,bt.height,0,Mt,Pt,null));else if(A.isDataTexture)if(ce.length>0){q&&Ct&&n.texStorage2D(o.TEXTURE_2D,zt,Ot,ce[0].width,ce[0].height);for(let Et=0,ht=ce.length;Et<ht;Et++)Ft=ce[Et],q?Rt&&n.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,Mt,Pt,Ft.data):n.texImage2D(o.TEXTURE_2D,Et,Ot,Ft.width,Ft.height,0,Mt,Pt,Ft.data);A.generateMipmaps=!1}else q?(Ct&&n.texStorage2D(o.TEXTURE_2D,zt,Ot,bt.width,bt.height),Rt&&Ut(A,bt,Mt,Pt)):n.texImage2D(o.TEXTURE_2D,0,Ot,bt.width,bt.height,0,Mt,Pt,bt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){q&&Ct&&n.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ot,ce[0].width,ce[0].height,bt.depth);for(let Et=0,ht=ce.length;Et<ht;Et++)if(Ft=ce[Et],A.format!==na)if(Mt!==null)if(q){if(Rt)if(A.layerUpdates.size>0){const Bt=Ax(Ft.width,Ft.height,A.format,A.type);for(const ie of A.layerUpdates){const Pe=Ft.data.subarray(ie*Bt/Ft.data.BYTES_PER_ELEMENT,(ie+1)*Bt/Ft.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ie,Ft.width,Ft.height,1,Mt,Pe)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,bt.depth,Mt,Ft.data)}else n.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Ot,Ft.width,Ft.height,bt.depth,0,Ft.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Rt&&n.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,Ft.width,Ft.height,bt.depth,Mt,Pt,Ft.data):n.texImage3D(o.TEXTURE_2D_ARRAY,Et,Ot,Ft.width,Ft.height,bt.depth,0,Mt,Pt,Ft.data)}else{q&&Ct&&n.texStorage2D(o.TEXTURE_2D,zt,Ot,ce[0].width,ce[0].height);for(let Et=0,ht=ce.length;Et<ht;Et++)Ft=ce[Et],A.format!==na?Mt!==null?q?Rt&&n.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,Mt,Ft.data):n.compressedTexImage2D(o.TEXTURE_2D,Et,Ot,Ft.width,Ft.height,0,Ft.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Rt&&n.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ft.width,Ft.height,Mt,Pt,Ft.data):n.texImage2D(o.TEXTURE_2D,Et,Ot,Ft.width,Ft.height,0,Mt,Pt,Ft.data)}else if(A.isDataArrayTexture)if(q){if(Ct&&n.texStorage3D(o.TEXTURE_2D_ARRAY,zt,Ot,bt.width,bt.height,bt.depth),Rt)if(A.layerUpdates.size>0){const Et=Ax(bt.width,bt.height,A.format,A.type);for(const ht of A.layerUpdates){const Bt=bt.data.subarray(ht*Et/bt.data.BYTES_PER_ELEMENT,(ht+1)*Et/bt.data.BYTES_PER_ELEMENT);n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,ht,bt.width,bt.height,1,Mt,Pt,Bt)}A.clearLayerUpdates()}else n.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Mt,Pt,bt.data)}else n.texImage3D(o.TEXTURE_2D_ARRAY,0,Ot,bt.width,bt.height,bt.depth,0,Mt,Pt,bt.data);else if(A.isData3DTexture)q?(Ct&&n.texStorage3D(o.TEXTURE_3D,zt,Ot,bt.width,bt.height,bt.depth),Rt&&n.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Mt,Pt,bt.data)):n.texImage3D(o.TEXTURE_3D,0,Ot,bt.width,bt.height,bt.depth,0,Mt,Pt,bt.data);else if(A.isFramebufferTexture){if(Ct)if(q)n.texStorage2D(o.TEXTURE_2D,zt,Ot,bt.width,bt.height);else{let Et=bt.width,ht=bt.height;for(let Bt=0;Bt<zt;Bt++)n.texImage2D(o.TEXTURE_2D,Bt,Ot,Et,ht,0,Mt,Pt,null),Et>>=1,ht>>=1}}else if(ce.length>0){if(q&&Ct){const Et=qt(ce[0]);n.texStorage2D(o.TEXTURE_2D,zt,Ot,Et.width,Et.height)}for(let Et=0,ht=ce.length;Et<ht;Et++)Ft=ce[Et],q?Rt&&n.texSubImage2D(o.TEXTURE_2D,Et,0,0,Mt,Pt,Ft):n.texImage2D(o.TEXTURE_2D,Et,Ot,Mt,Pt,Ft);A.generateMipmaps=!1}else if(q){if(Ct){const Et=qt(bt);n.texStorage2D(o.TEXTURE_2D,zt,Ot,Et.width,Et.height)}Rt&&n.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,Pt,bt)}else n.texImage2D(o.TEXTURE_2D,0,Ot,Mt,Pt,bt);x(A)&&y(_t),Xt.__version=dt.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function xt(z,A,K){if(A.image.length!==6)return;const _t=mt(z,A),yt=A.source;n.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+K);const dt=a.get(yt);if(yt.version!==dt.__version||_t===!0){n.activeTexture(o.TEXTURE0+K);const Xt=Ae.getPrimaries(Ae.workingColorSpace),wt=A.colorSpace===Ir?null:Ae.getPrimaries(A.colorSpace),Kt=A.colorSpace===Ir||Xt===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const ee=A.isCompressedTexture||A.image[0].isCompressedTexture,bt=A.image[0]&&A.image[0].isDataTexture,Mt=[];for(let ht=0;ht<6;ht++)!ee&&!bt?Mt[ht]=E(A.image[ht],!0,s.maxCubemapSize):Mt[ht]=bt?A.image[ht].image:A.image[ht],Mt[ht]=Le(A,Mt[ht]);const Pt=Mt[0],Ot=u.convert(A.format,A.colorSpace),Ft=u.convert(A.type),ce=U(A.internalFormat,Ot,Ft,A.colorSpace),q=A.isVideoTexture!==!0,Ct=dt.__version===void 0||_t===!0,Rt=yt.dataReady;let zt=O(A,Pt);j(o.TEXTURE_CUBE_MAP,A);let Et;if(ee){q&&Ct&&n.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ce,Pt.width,Pt.height);for(let ht=0;ht<6;ht++){Et=Mt[ht].mipmaps;for(let Bt=0;Bt<Et.length;Bt++){const ie=Et[Bt];A.format!==na?Ot!==null?q?Rt&&n.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,0,0,ie.width,ie.height,Ot,ie.data):n.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,ce,ie.width,ie.height,0,ie.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Rt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,0,0,ie.width,ie.height,Ot,Ft,ie.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt,ce,ie.width,ie.height,0,Ot,Ft,ie.data)}}}else{if(Et=A.mipmaps,q&&Ct){Et.length>0&&zt++;const ht=qt(Mt[0]);n.texStorage2D(o.TEXTURE_CUBE_MAP,zt,ce,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(bt){q?Rt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Mt[ht].width,Mt[ht].height,Ot,Ft,Mt[ht].data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ce,Mt[ht].width,Mt[ht].height,0,Ot,Ft,Mt[ht].data);for(let Bt=0;Bt<Et.length;Bt++){const Pe=Et[Bt].image[ht].image;q?Rt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,0,0,Pe.width,Pe.height,Ot,Ft,Pe.data):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,ce,Pe.width,Pe.height,0,Ot,Ft,Pe.data)}}else{q?Rt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ot,Ft,Mt[ht]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ce,Ot,Ft,Mt[ht]);for(let Bt=0;Bt<Et.length;Bt++){const ie=Et[Bt];q?Rt&&n.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,0,0,Ot,Ft,ie.image[ht]):n.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Bt+1,ce,Ot,Ft,ie.image[ht])}}}x(A)&&y(o.TEXTURE_CUBE_MAP),dt.__version=yt.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function At(z,A,K,_t,yt,dt){const Xt=u.convert(K.format,K.colorSpace),wt=u.convert(K.type),Kt=U(K.internalFormat,Xt,wt,K.colorSpace),ee=a.get(A),bt=a.get(K);if(bt.__renderTarget=A,!ee.__hasExternalTextures){const Mt=Math.max(1,A.width>>dt),Pt=Math.max(1,A.height>>dt);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?n.texImage3D(yt,dt,Kt,Mt,Pt,A.depth,0,Xt,wt,null):n.texImage2D(yt,dt,Kt,Mt,Pt,0,Xt,wt,null)}n.bindFramebuffer(o.FRAMEBUFFER,z),Ze(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_t,yt,bt.__webglTexture,0,k(A)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_t,yt,bt.__webglTexture,dt),n.bindFramebuffer(o.FRAMEBUFFER,null)}function kt(z,A,K){if(o.bindRenderbuffer(o.RENDERBUFFER,z),A.depthBuffer){const _t=A.depthTexture,yt=_t&&_t.isDepthTexture?_t.type:null,dt=w(A.stencilBuffer,yt),Xt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;Ze(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(A),dt,A.width,A.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(A),dt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,dt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Xt,o.RENDERBUFFER,z)}else{const _t=A.textures;for(let yt=0;yt<_t.length;yt++){const dt=_t[yt],Xt=u.convert(dt.format,dt.colorSpace),wt=u.convert(dt.type),Kt=U(dt.internalFormat,Xt,wt,dt.colorSpace);Ze(A)?f.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,k(A),Kt,A.width,A.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,k(A),Kt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Qt(z,A,K){const _t=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(o.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const yt=a.get(A.depthTexture);if(yt.__renderTarget=A,(!yt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),_t){if(yt.__webglInit===void 0&&(yt.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),yt.__webglTexture===void 0){yt.__webglTexture=o.createTexture(),n.bindTexture(o.TEXTURE_CUBE_MAP,yt.__webglTexture),j(o.TEXTURE_CUBE_MAP,A.depthTexture);const ee=u.convert(A.depthTexture.format),bt=u.convert(A.depthTexture.type);let Mt;A.depthTexture.format===er?Mt=o.DEPTH_COMPONENT24:A.depthTexture.format===Rs&&(Mt=o.DEPTH24_STENCIL8);for(let Pt=0;Pt<6;Pt++)o.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0,Mt,A.width,A.height,0,ee,bt,null)}}else Z(A.depthTexture,0);const dt=yt.__webglTexture,Xt=k(A),wt=_t?o.TEXTURE_CUBE_MAP_POSITIVE_X+K:o.TEXTURE_2D,Kt=A.depthTexture.format===Rs?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===er)Ze(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Kt,wt,dt,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Kt,wt,dt,0);else if(A.depthTexture.format===Rs)Ze(A)?f.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Kt,wt,dt,0,Xt):o.framebufferTexture2D(o.FRAMEBUFFER,Kt,wt,dt,0);else throw new Error("Unknown depthTexture format")}function te(z){const A=a.get(z),K=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){const _t=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),_t){const yt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,_t.removeEventListener("dispose",yt)};_t.addEventListener("dispose",yt),A.__depthDisposeCallback=yt}A.__boundDepthTexture=_t}if(z.depthTexture&&!A.__autoAllocateDepthBuffer)if(K)for(let _t=0;_t<6;_t++)Qt(A.__webglFramebuffer[_t],z,_t);else{const _t=z.texture.mipmaps;_t&&_t.length>0?Qt(A.__webglFramebuffer[0],z,0):Qt(A.__webglFramebuffer,z,0)}else if(K){A.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[_t]),A.__webglDepthbuffer[_t]===void 0)A.__webglDepthbuffer[_t]=o.createRenderbuffer(),kt(A.__webglDepthbuffer[_t],z,!1);else{const yt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=A.__webglDepthbuffer[_t];o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,dt)}}else{const _t=z.texture.mipmaps;if(_t&&_t.length>0?n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),kt(A.__webglDepthbuffer,z,!1);else{const yt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,dt=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,dt),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,dt)}}n.bindFramebuffer(o.FRAMEBUFFER,null)}function rn(z,A,K){const _t=a.get(z);A!==void 0&&At(_t.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&te(z)}function ve(z){const A=z.texture,K=a.get(z),_t=a.get(A);z.addEventListener("dispose",L);const yt=z.textures,dt=z.isWebGLCubeRenderTarget===!0,Xt=yt.length>1;if(Xt||(_t.__webglTexture===void 0&&(_t.__webglTexture=o.createTexture()),_t.__version=A.version,c.memory.textures++),dt){K.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer[wt]=[];for(let Kt=0;Kt<A.mipmaps.length;Kt++)K.__webglFramebuffer[wt][Kt]=o.createFramebuffer()}else K.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){K.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)K.__webglFramebuffer[wt]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(Xt)for(let wt=0,Kt=yt.length;wt<Kt;wt++){const ee=a.get(yt[wt]);ee.__webglTexture===void 0&&(ee.__webglTexture=o.createTexture(),c.memory.textures++)}if(z.samples>0&&Ze(z)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let wt=0;wt<yt.length;wt++){const Kt=yt[wt];K.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[wt]);const ee=u.convert(Kt.format,Kt.colorSpace),bt=u.convert(Kt.type),Mt=U(Kt.internalFormat,ee,bt,Kt.colorSpace,z.isXRRenderTarget===!0),Pt=k(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,Pt,Mt,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,K.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),kt(K.__webglDepthRenderbuffer,z,!0)),n.bindFramebuffer(o.FRAMEBUFFER,null)}}if(dt){n.bindTexture(o.TEXTURE_CUBE_MAP,_t.__webglTexture),j(o.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Kt=0;Kt<A.mipmaps.length;Kt++)At(K.__webglFramebuffer[wt][Kt],z,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,Kt);else At(K.__webglFramebuffer[wt],z,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);x(A)&&y(o.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Xt){for(let wt=0,Kt=yt.length;wt<Kt;wt++){const ee=yt[wt],bt=a.get(ee);let Mt=o.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Mt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(Mt,bt.__webglTexture),j(Mt,ee),At(K.__webglFramebuffer,z,ee,o.COLOR_ATTACHMENT0+wt,Mt,0),x(ee)&&y(Mt)}n.unbindTexture()}else{let wt=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(wt=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),n.bindTexture(wt,_t.__webglTexture),j(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let Kt=0;Kt<A.mipmaps.length;Kt++)At(K.__webglFramebuffer[Kt],z,A,o.COLOR_ATTACHMENT0,wt,Kt);else At(K.__webglFramebuffer,z,A,o.COLOR_ATTACHMENT0,wt,0);x(A)&&y(wt),n.unbindTexture()}z.depthBuffer&&te(z)}function me(z){const A=z.textures;for(let K=0,_t=A.length;K<_t;K++){const yt=A[K];if(x(yt)){const dt=R(z),Xt=a.get(yt).__webglTexture;n.bindTexture(dt,Xt),y(dt),n.unbindTexture()}}}const Ue=[],le=[];function tn(z){if(z.samples>0){if(Ze(z)===!1){const A=z.textures,K=z.width,_t=z.height;let yt=o.COLOR_BUFFER_BIT;const dt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Xt=a.get(z),wt=A.length>1;if(wt)for(let ee=0;ee<A.length;ee++)n.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,null),n.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,null,0);n.bindFramebuffer(o.READ_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer);const Kt=z.texture.mipmaps;Kt&&Kt.length>0?n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer[0]):n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let ee=0;ee<A.length;ee++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[ee]);const bt=a.get(A[ee]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,bt,0)}o.blitFramebuffer(0,0,K,_t,0,0,K,_t,yt,o.NEAREST),p===!0&&(Ue.length=0,le.length=0,Ue.push(o.COLOR_ATTACHMENT0+ee),z.depthBuffer&&z.resolveDepthBuffer===!1&&(Ue.push(dt),le.push(dt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,le)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(o.READ_FRAMEBUFFER,null),n.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let ee=0;ee<A.length;ee++){n.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.RENDERBUFFER,Xt.__webglColorRenderbuffer[ee]);const bt=a.get(A[ee]).__webglTexture;n.bindFramebuffer(o.FRAMEBUFFER,Xt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+ee,o.TEXTURE_2D,bt,0)}n.bindFramebuffer(o.DRAW_FRAMEBUFFER,Xt.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&p){const A=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function k(z){return Math.min(s.maxSamples,z.samples)}function Ze(z){const A=a.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function be(z){const A=c.render.frame;_.get(z)!==A&&(_.set(z,A),z.update())}function Le(z,A){const K=z.colorSpace,_t=z.format,yt=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||K!==ko&&K!==Ir&&(Ae.getTransfer(K)===Ie?(_t!==na||yt!==Gi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):De("WebGLTextures: Unsupported texture color space:",K)),A}function qt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(d.width=z.naturalWidth||z.width,d.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(d.width=z.displayWidth,d.height=z.displayHeight):(d.width=z.width,d.height=z.height),d}this.allocateTextureUnit=Q,this.resetTextureUnits=Y,this.setTexture2D=Z,this.setTexture2DArray=F,this.setTexture3D=H,this.setTextureCube=ot,this.rebindTextures=rn,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=tn,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=At,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function fR(o,t){function n(a,s=Ir){let u;const c=Ae.getTransfer(s);if(a===Gi)return o.UNSIGNED_BYTE;if(a===Bm)return o.UNSIGNED_SHORT_4_4_4_4;if(a===Hm)return o.UNSIGNED_SHORT_5_5_5_1;if(a===AS)return o.UNSIGNED_INT_5_9_9_9_REV;if(a===RS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(a===bS)return o.BYTE;if(a===TS)return o.SHORT;if(a===ou)return o.UNSIGNED_SHORT;if(a===Im)return o.INT;if(a===Sa)return o.UNSIGNED_INT;if(a===pa)return o.FLOAT;if(a===tr)return o.HALF_FLOAT;if(a===CS)return o.ALPHA;if(a===wS)return o.RGB;if(a===na)return o.RGBA;if(a===er)return o.DEPTH_COMPONENT;if(a===Rs)return o.DEPTH_STENCIL;if(a===DS)return o.RED;if(a===Gm)return o.RED_INTEGER;if(a===Vo)return o.RG;if(a===Vm)return o.RG_INTEGER;if(a===km)return o.RGBA_INTEGER;if(a===lf||a===uf||a===cf||a===ff)if(c===Ie)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(a===lf)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===uf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===cf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===ff)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(a===lf)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===uf)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===cf)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===ff)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Gp||a===Vp||a===kp||a===Xp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(a===Gp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Vp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===kp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Xp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Wp||a===qp||a===jp||a===Yp||a===Zp||a===Kp||a===Qp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(a===Wp||a===qp)return c===Ie?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(a===jp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(a===Yp)return u.COMPRESSED_R11_EAC;if(a===Zp)return u.COMPRESSED_SIGNED_R11_EAC;if(a===Kp)return u.COMPRESSED_RG11_EAC;if(a===Qp)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Jp||a===$p||a===tm||a===em||a===nm||a===im||a===am||a===rm||a===sm||a===om||a===lm||a===um||a===cm||a===fm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(a===Jp)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===$p)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===tm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===em)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===nm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===im)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===am)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===rm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===sm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===om)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===lm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===um)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===cm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===fm)return c===Ie?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===hm||a===dm||a===pm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(a===hm)return c===Ie?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===dm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===pm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===mm||a===_m||a===gm||a===vm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(a===mm)return u.COMPRESSED_RED_RGTC1_EXT;if(a===_m)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===gm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===vm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===lu?o.UNSIGNED_INT_24_8:o[a]!==void 0?o[a]:null}return{convert:n}}const hR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class pR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new HS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ia({vertexShader:hR,fragmentShader:dR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ya(new Su(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mR extends Qo{constructor(t,n){super();const a=this;let s=null,u=1,c=null,f="local-floor",p=1,d=null,_=null,v=null,g=null,S=null,M=null;const E=typeof XRWebGLBinding<"u",x=new pR,y={},R=n.getContextAttributes();let U=null,w=null;const O=[],P=[],L=new He;let T=null;const C=new ta;C.viewport=new hn;const $=new ta;$.viewport=new hn;const G=[C,$],Y=new Rb;let Q=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let xt=O[rt];return xt===void 0&&(xt=new $d,O[rt]=xt),xt.getTargetRaySpace()},this.getControllerGrip=function(rt){let xt=O[rt];return xt===void 0&&(xt=new $d,O[rt]=xt),xt.getGripSpace()},this.getHand=function(rt){let xt=O[rt];return xt===void 0&&(xt=new $d,O[rt]=xt),xt.getHandSpace()};function Z(rt){const xt=P.indexOf(rt.inputSource);if(xt===-1)return;const At=O[xt];At!==void 0&&(At.update(rt.inputSource,rt.frame,d||c),At.dispatchEvent({type:rt.type,data:rt.inputSource}))}function F(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",H);for(let rt=0;rt<O.length;rt++){const xt=P[rt];xt!==null&&(P[rt]=null,O[rt].disconnect(xt))}Q=null,it=null,x.reset();for(const rt in y)delete y[rt];t.setRenderTarget(U),S=null,g=null,v=null,s=null,w=null,Ut.stop(),a.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){u=rt,a.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){f=rt,a.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(rt){d=rt},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(s,n)),v},this.getFrame=function(){return M},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(U=t.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",F),s.addEventListener("inputsourceschange",H),R.xrCompatible!==!0&&await n.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let At=null,kt=null,Qt=null;R.depth&&(Qt=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,At=R.stencil?Rs:er,kt=R.stencil?lu:Sa);const te={colorFormat:n.RGBA8,depthFormat:Qt,scaleFactor:u};v=this.getBinding(),g=v.createProjectionLayer(te),s.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),w=new va(g.textureWidth,g.textureHeight,{format:na,type:Gi,depthTexture:new uu(g.textureWidth,g.textureHeight,kt,void 0,void 0,void 0,void 0,void 0,void 0,At),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const At={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(s,n,At),s.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new va(S.framebufferWidth,S.framebufferHeight,{format:na,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await s.requestReferenceSpace(f),Ut.setContext(s),Ut.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(rt){for(let xt=0;xt<rt.removed.length;xt++){const At=rt.removed[xt],kt=P.indexOf(At);kt>=0&&(P[kt]=null,O[kt].disconnect(At))}for(let xt=0;xt<rt.added.length;xt++){const At=rt.added[xt];let kt=P.indexOf(At);if(kt===-1){for(let te=0;te<O.length;te++)if(te>=P.length){P.push(At),kt=te;break}else if(P[te]===null){P[te]=At,kt=te;break}if(kt===-1)break}const Qt=O[kt];Qt&&Qt.connect(At)}}const ot=new lt,ct=new lt;function St(rt,xt,At){ot.setFromMatrixPosition(xt.matrixWorld),ct.setFromMatrixPosition(At.matrixWorld);const kt=ot.distanceTo(ct),Qt=xt.projectionMatrix.elements,te=At.projectionMatrix.elements,rn=Qt[14]/(Qt[10]-1),ve=Qt[14]/(Qt[10]+1),me=(Qt[9]+1)/Qt[5],Ue=(Qt[9]-1)/Qt[5],le=(Qt[8]-1)/Qt[0],tn=(te[8]+1)/te[0],k=rn*le,Ze=rn*tn,be=kt/(-le+tn),Le=be*-le;if(xt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(Le),rt.translateZ(be),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Qt[10]===-1)rt.projectionMatrix.copy(xt.projectionMatrix),rt.projectionMatrixInverse.copy(xt.projectionMatrixInverse);else{const qt=rn+be,z=ve+be,A=k-Le,K=Ze+(kt-Le),_t=me*ve/z*qt,yt=Ue*ve/z*qt;rt.projectionMatrix.makePerspective(A,K,_t,yt,qt,z),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function I(rt,xt){xt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(xt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let xt=rt.near,At=rt.far;x.texture!==null&&(x.depthNear>0&&(xt=x.depthNear),x.depthFar>0&&(At=x.depthFar)),Y.near=$.near=C.near=xt,Y.far=$.far=C.far=At,(Q!==Y.near||it!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Q=Y.near,it=Y.far),Y.layers.mask=rt.layers.mask|6,C.layers.mask=Y.layers.mask&-5,$.layers.mask=Y.layers.mask&-3;const kt=rt.parent,Qt=Y.cameras;I(Y,kt);for(let te=0;te<Qt.length;te++)I(Qt[te],kt);Qt.length===2?St(Y,C,$):Y.projectionMatrix.copy(C.projectionMatrix),j(rt,Y,kt)};function j(rt,xt,At){At===null?rt.matrix.copy(xt.matrixWorld):(rt.matrix.copy(At.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(xt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(xt.projectionMatrix),rt.projectionMatrixInverse.copy(xt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=xm*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&S===null))return p},this.setFoveation=function(rt){p=rt,g!==null&&(g.fixedFoveation=rt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=rt)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Y)},this.getCameraTexture=function(rt){return y[rt]};let mt=null;function Tt(rt,xt){if(_=xt.getViewerPose(d||c),M=xt,_!==null){const At=_.views;S!==null&&(t.setRenderTargetFramebuffer(w,S.framebuffer),t.setRenderTarget(w));let kt=!1;At.length!==Y.cameras.length&&(Y.cameras.length=0,kt=!0);for(let ve=0;ve<At.length;ve++){const me=At[ve];let Ue=null;if(S!==null)Ue=S.getViewport(me);else{const tn=v.getViewSubImage(g,me);Ue=tn.viewport,ve===0&&(t.setRenderTargetTextures(w,tn.colorTexture,tn.depthStencilTexture),t.setRenderTarget(w))}let le=G[ve];le===void 0&&(le=new ta,le.layers.enable(ve),le.viewport=new hn,G[ve]=le),le.matrix.fromArray(me.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(me.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),ve===0&&(Y.matrix.copy(le.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),kt===!0&&Y.cameras.push(le)}const Qt=s.enabledFeatures;if(Qt&&Qt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&E){v=a.getBinding();const ve=v.getDepthInformation(At[0]);ve&&ve.isValid&&ve.texture&&x.init(ve,s.renderState)}if(Qt&&Qt.includes("camera-access")&&E){t.state.unbindTexture(),v=a.getBinding();for(let ve=0;ve<At.length;ve++){const me=At[ve].camera;if(me){let Ue=y[me];Ue||(Ue=new HS,y[me]=Ue);const le=v.getCameraImage(me);Ue.sourceTexture=le}}}}for(let At=0;At<O.length;At++){const kt=P[At],Qt=O[At];kt!==null&&Qt!==void 0&&Qt.update(kt,xt,d||c)}mt&&mt(rt,xt),xt.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:xt}),M=null}const Ut=new kS;Ut.setAnimationLoop(Tt),this.setAnimationLoop=function(rt){mt=rt},this.dispose=function(){}}}const xs=new nr,_R=new Mn;function gR(o,t){function n(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function a(x,y){y.color.getRGB(x.fogColor.value,GS(o)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function s(x,y,R,U,w){y.isMeshBasicMaterial?u(x,y):y.isMeshLambertMaterial?(u(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(u(x,y),v(x,y)):y.isMeshPhongMaterial?(u(x,y),_(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(u(x,y),g(x,y),y.isMeshPhysicalMaterial&&S(x,y,w)):y.isMeshMatcapMaterial?(u(x,y),M(x,y)):y.isMeshDepthMaterial?u(x,y):y.isMeshDistanceMaterial?(u(x,y),E(x,y)):y.isMeshNormalMaterial?u(x,y):y.isLineBasicMaterial?(c(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?p(x,y,R,U):y.isSpriteMaterial?d(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function u(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,n(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===ri&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,n(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===ri&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,n(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,n(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,n(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const R=t.get(y),U=R.envMap,w=R.envMapRotation;U&&(x.envMap.value=U,xs.copy(w),xs.x*=-1,xs.y*=-1,xs.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),x.envMapRotation.value.setFromMatrix4(_R.makeRotationFromEuler(xs)),x.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,n(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,n(y.aoMap,x.aoMapTransform))}function c(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function p(x,y,R,U){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*R,x.scale.value=U*.5,y.map&&(x.map.value=y.map,n(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,n(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,n(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function _(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function v(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function g(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,n(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,n(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,R){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,n(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,n(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,n(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,n(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,n(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ri&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,n(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,n(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,n(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,n(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,n(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,n(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,n(y.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,y){y.matcap&&(x.matcap.value=y.matcap)}function E(x,y){const R=t.get(y).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function vR(o,t,n,a){let s={},u={},c=[];const f=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,U){const w=U.program;a.uniformBlockBinding(R,w)}function d(R,U){let w=s[R.id];w===void 0&&(M(R),w=_(R),s[R.id]=w,R.addEventListener("dispose",x));const O=U.program;a.updateUBOMapping(R,O);const P=t.render.frame;u[R.id]!==P&&(g(R),u[R.id]=P)}function _(R){const U=v();R.__bindingPointIndex=U;const w=o.createBuffer(),O=R.__size,P=R.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,O,P),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,w),w}function v(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return De("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const U=s[R.id],w=R.uniforms,O=R.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let P=0,L=w.length;P<L;P++){const T=Array.isArray(w[P])?w[P]:[w[P]];for(let C=0,$=T.length;C<$;C++){const G=T[C];if(S(G,P,C,O)===!0){const Y=G.__offset,Q=Array.isArray(G.value)?G.value:[G.value];let it=0;for(let Z=0;Z<Q.length;Z++){const F=Q[Z],H=E(F);typeof F=="number"||typeof F=="boolean"?(G.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,Y+it,G.__data)):F.isMatrix3?(G.__data[0]=F.elements[0],G.__data[1]=F.elements[1],G.__data[2]=F.elements[2],G.__data[3]=0,G.__data[4]=F.elements[3],G.__data[5]=F.elements[4],G.__data[6]=F.elements[5],G.__data[7]=0,G.__data[8]=F.elements[6],G.__data[9]=F.elements[7],G.__data[10]=F.elements[8],G.__data[11]=0):(F.toArray(G.__data,it),it+=H.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,G.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(R,U,w,O){const P=R.value,L=U+"_"+w;if(O[L]===void 0)return typeof P=="number"||typeof P=="boolean"?O[L]=P:O[L]=P.clone(),!0;{const T=O[L];if(typeof P=="number"||typeof P=="boolean"){if(T!==P)return O[L]=P,!0}else if(T.equals(P)===!1)return T.copy(P),!0}return!1}function M(R){const U=R.uniforms;let w=0;const O=16;for(let L=0,T=U.length;L<T;L++){const C=Array.isArray(U[L])?U[L]:[U[L]];for(let $=0,G=C.length;$<G;$++){const Y=C[$],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let it=0,Z=Q.length;it<Z;it++){const F=Q[it],H=E(F),ot=w%O,ct=ot%H.boundary,St=ot+ct;w+=ct,St!==0&&O-St<H.storage&&(w+=O-St),Y.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=H.storage}}}const P=w%O;return P>0&&(w+=O-P),R.__size=w,R.__cache={},this}function E(R){const U={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(U.boundary=4,U.storage=4):R.isVector2?(U.boundary=8,U.storage=8):R.isVector3||R.isColor?(U.boundary=16,U.storage=12):R.isVector4?(U.boundary=16,U.storage=16):R.isMatrix3?(U.boundary=48,U.storage=48):R.isMatrix4?(U.boundary=64,U.storage=64):R.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",R),U}function x(R){const U=R.target;U.removeEventListener("dispose",x);const w=c.indexOf(U.__bindingPointIndex);c.splice(w,1),o.deleteBuffer(s[U.id]),delete s[U.id],delete u[U.id]}function y(){for(const R in s)o.deleteBuffer(s[R]);c=[],s={},u={}}return{bind:p,update:d,dispose:y}}const xR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ca=null;function SR(){return ca===null&&(ca=new pb(xR,16,16,Vo,tr),ca.name="DFG_LUT",ca.minFilter=Gn,ca.magFilter=Gn,ca.wrapS=Ka,ca.wrapT=Ka,ca.generateMipmaps=!1,ca.needsUpdate=!0),ca}class yR{constructor(t={}){const{canvas:n=XE(),context:a=null,depth:s=!0,stencil:u=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Gi}=t;this.isWebGLRenderer=!0;let M;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=a.getContextAttributes().alpha}else M=c;const E=S,x=new Set([km,Vm,Gm]),y=new Set([Gi,Sa,ou,lu,Bm,Hm]),R=new Uint32Array(4),U=new Int32Array(4);let w=null,O=null;const P=[],L=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ga,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let $=!1;this._outputColorSpace=Hi;let G=0,Y=0,Q=null,it=-1,Z=null;const F=new hn,H=new hn;let ot=null;const ct=new Be(0);let St=0,I=n.width,j=n.height,mt=1,Tt=null,Ut=null;const rt=new hn(0,0,I,j),xt=new hn(0,0,I,j);let At=!1;const kt=new IS;let Qt=!1,te=!1;const rn=new Mn,ve=new lt,me=new hn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function tn(){return Q===null?mt:1}let k=a;function Ze(N,W){return n.getContext(N,W)}try{const N={alpha:!0,depth:s,stencil:u,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:v};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${zm}`),n.addEventListener("webglcontextlost",Bt,!1),n.addEventListener("webglcontextrestored",ie,!1),n.addEventListener("webglcontextcreationerror",Pe,!1),k===null){const W="webgl2";if(k=Ze(W,N),k===null)throw Ze(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(N){throw De("WebGLRenderer: "+N.message),N}let be,Le,qt,z,A,K,_t,yt,dt,Xt,wt,Kt,ee,bt,Mt,Pt,Ot,Ft,ce,q,Ct,Rt,zt;function Et(){be=new y2(k),be.init(),Ct=new fR(k,be),Le=new d2(k,be,t,Ct),qt=new uR(k,be),Le.reversedDepthBuffer&&g&&qt.buffers.depth.setReversed(!0),z=new b2(k),A=new Z3,K=new cR(k,be,qt,A,Le,Ct,z),_t=new S2(C),yt=new wb(k),Rt=new f2(k,yt),dt=new M2(k,yt,z,Rt),Xt=new A2(k,dt,yt,Rt,z),Ft=new T2(k,Le,K),Mt=new p2(A),wt=new Y3(C,_t,be,Le,Rt,Mt),Kt=new gR(C,A),ee=new Q3,bt=new iR(be),Ot=new c2(C,_t,qt,Xt,M,p),Pt=new lR(C,Xt,Le),zt=new vR(k,z,Le,qt),ce=new h2(k,be,z),q=new E2(k,be,z),z.programs=wt.programs,C.capabilities=Le,C.extensions=be,C.properties=A,C.renderLists=ee,C.shadowMap=Pt,C.state=qt,C.info=z}Et(),E!==Gi&&(T=new C2(E,n.width,n.height,s,u));const ht=new mR(C,k);this.xr=ht,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const N=be.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=be.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return mt},this.setPixelRatio=function(N){N!==void 0&&(mt=N,this.setSize(I,j,!1))},this.getSize=function(N){return N.set(I,j)},this.setSize=function(N,W,ut=!0){if(ht.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}I=N,j=W,n.width=Math.floor(N*mt),n.height=Math.floor(W*mt),ut===!0&&(n.style.width=N+"px",n.style.height=W+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,N,W)},this.getDrawingBufferSize=function(N){return N.set(I*mt,j*mt).floor()},this.setDrawingBufferSize=function(N,W,ut){I=N,j=W,mt=ut,n.width=Math.floor(N*ut),n.height=Math.floor(W*ut),this.setViewport(0,0,N,W)},this.setEffects=function(N){if(E===Gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let W=0;W<N.length;W++)if(N[W].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(F)},this.getViewport=function(N){return N.copy(rt)},this.setViewport=function(N,W,ut,at){N.isVector4?rt.set(N.x,N.y,N.z,N.w):rt.set(N,W,ut,at),qt.viewport(F.copy(rt).multiplyScalar(mt).round())},this.getScissor=function(N){return N.copy(xt)},this.setScissor=function(N,W,ut,at){N.isVector4?xt.set(N.x,N.y,N.z,N.w):xt.set(N,W,ut,at),qt.scissor(H.copy(xt).multiplyScalar(mt).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(N){qt.setScissorTest(At=N)},this.setOpaqueSort=function(N){Tt=N},this.setTransparentSort=function(N){Ut=N},this.getClearColor=function(N){return N.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor(...arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha(...arguments)},this.clear=function(N=!0,W=!0,ut=!0){let at=0;if(N){let tt=!1;if(Q!==null){const Dt=Q.texture.format;tt=x.has(Dt)}if(tt){const Dt=Q.texture.type,It=y.has(Dt),Nt=Ot.getClearColor(),Wt=Ot.getClearAlpha(),Yt=Nt.r,ne=Nt.g,re=Nt.b;It?(R[0]=Yt,R[1]=ne,R[2]=re,R[3]=Wt,k.clearBufferuiv(k.COLOR,0,R)):(U[0]=Yt,U[1]=ne,U[2]=re,U[3]=Wt,k.clearBufferiv(k.COLOR,0,U))}else at|=k.COLOR_BUFFER_BIT}W&&(at|=k.DEPTH_BUFFER_BIT),ut&&(at|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),at!==0&&k.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Bt,!1),n.removeEventListener("webglcontextrestored",ie,!1),n.removeEventListener("webglcontextcreationerror",Pe,!1),Ot.dispose(),ee.dispose(),bt.dispose(),A.dispose(),_t.dispose(),Xt.dispose(),Rt.dispose(),zt.dispose(),wt.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Fs),ht.removeEventListener("sessionend",zs),aa.stop()};function Bt(N){N.preventDefault(),ux("WebGLRenderer: Context Lost."),$=!0}function ie(){ux("WebGLRenderer: Context Restored."),$=!1;const N=z.autoReset,W=Pt.enabled,ut=Pt.autoUpdate,at=Pt.needsUpdate,tt=Pt.type;Et(),z.autoReset=N,Pt.enabled=W,Pt.autoUpdate=ut,Pt.needsUpdate=at,Pt.type=tt}function Pe(N){De("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Te(N){const W=N.target;W.removeEventListener("dispose",Te),kn(W)}function kn(N){Xi(N),A.remove(N)}function Xi(N){const W=A.get(N).programs;W!==void 0&&(W.forEach(function(ut){wt.releaseProgram(ut)}),N.isShaderMaterial&&wt.releaseShaderCache(N))}this.renderBufferDirect=function(N,W,ut,at,tt,Dt){W===null&&(W=Ue);const It=tt.isMesh&&tt.matrixWorld.determinant()<0,Nt=Tu(N,W,ut,at,tt);qt.setMaterial(at,It);let Wt=ut.index,Yt=1;if(at.wireframe===!0){if(Wt=dt.getWireframeAttribute(ut),Wt===void 0)return;Yt=2}const ne=ut.drawRange,re=ut.attributes.position;let Ht=ne.start*Yt,fe=(ne.start+ne.count)*Yt;Dt!==null&&(Ht=Math.max(Ht,Dt.start*Yt),fe=Math.min(fe,(Dt.start+Dt.count)*Yt)),Wt!==null?(Ht=Math.max(Ht,0),fe=Math.min(fe,Wt.count)):re!=null&&(Ht=Math.max(Ht,0),fe=Math.min(fe,re.count));const Ke=fe-Ht;if(Ke<0||Ke===1/0)return;Rt.setup(tt,at,Nt,ut,Wt);let Qe,Re=ce;if(Wt!==null&&(Qe=yt.get(Wt),Re=q,Re.setIndex(Qe)),tt.isMesh)at.wireframe===!0?(qt.setLineWidth(at.wireframeLinewidth*tn()),Re.setMode(k.LINES)):Re.setMode(k.TRIANGLES);else if(tt.isLine){let bn=at.linewidth;bn===void 0&&(bn=1),qt.setLineWidth(bn*tn()),tt.isLineSegments?Re.setMode(k.LINES):tt.isLineLoop?Re.setMode(k.LINE_LOOP):Re.setMode(k.LINE_STRIP)}else tt.isPoints?Re.setMode(k.POINTS):tt.isSprite&&Re.setMode(k.TRIANGLES);if(tt.isBatchedMesh)if(tt._multiDrawInstances!==null)xf("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances);else if(be.get("WEBGL_multi_draw"))Re.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else{const bn=tt._multiDrawStarts,Vt=tt._multiDrawCounts,Xn=tt._multiDrawCount,ae=Wt?yt.get(Wt).bytesPerElement:1,Wn=A.get(at).currentProgram.getUniforms();for(let fi=0;fi<Xn;fi++)Wn.setValue(k,"_gl_DrawID",fi),Re.render(bn[fi]/ae,Vt[fi])}else if(tt.isInstancedMesh)Re.renderInstances(Ht,Ke,tt.count);else if(ut.isInstancedBufferGeometry){const bn=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Vt=Math.min(ut.instanceCount,bn);Re.renderInstances(Ht,Ke,Vt)}else Re.render(Ht,Ke)};function tl(N,W,ut){N.transparent===!0&&N.side===Za&&N.forceSinglePass===!1?(N.side=ri,N.needsUpdate=!0,sr(N,W,ut),N.side=Wr,N.needsUpdate=!0,sr(N,W,ut),N.side=Za):sr(N,W,ut)}this.compile=function(N,W,ut=null){ut===null&&(ut=N),O=bt.get(ut),O.init(W),L.push(O),ut.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(O.pushLight(tt),tt.castShadow&&O.pushShadow(tt))}),N!==ut&&N.traverseVisible(function(tt){tt.isLight&&tt.layers.test(W.layers)&&(O.pushLight(tt),tt.castShadow&&O.pushShadow(tt))}),O.setupLights();const at=new Set;return N.traverse(function(tt){if(!(tt.isMesh||tt.isPoints||tt.isLine||tt.isSprite))return;const Dt=tt.material;if(Dt)if(Array.isArray(Dt))for(let It=0;It<Dt.length;It++){const Nt=Dt[It];tl(Nt,ut,tt),at.add(Nt)}else tl(Dt,ut,tt),at.add(Dt)}),O=L.pop(),at},this.compileAsync=function(N,W,ut=null){const at=this.compile(N,W,ut);return new Promise(tt=>{function Dt(){if(at.forEach(function(It){A.get(It).currentProgram.isReady()&&at.delete(It)}),at.size===0){tt(N);return}setTimeout(Dt,10)}be.get("KHR_parallel_shader_compile")!==null?Dt():setTimeout(Dt,10)})};let Ps=null;function Mu(N){Ps&&Ps(N)}function Fs(){aa.stop()}function zs(){aa.start()}const aa=new kS;aa.setAnimationLoop(Mu),typeof self<"u"&&aa.setContext(self),this.setAnimationLoop=function(N){Ps=N,ht.setAnimationLoop(N),N===null?aa.stop():aa.start()},ht.addEventListener("sessionstart",Fs),ht.addEventListener("sessionend",zs),this.render=function(N,W){if(W!==void 0&&W.isCamera!==!0){De("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;const ut=ht.enabled===!0&&ht.isPresenting===!0,at=T!==null&&(Q===null||ut)&&T.begin(C,Q);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(W),W=ht.getCamera()),N.isScene===!0&&N.onBeforeRender(C,N,W,Q),O=bt.get(N,L.length),O.init(W),L.push(O),rn.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),kt.setFromProjectionMatrix(rn,ma,W.reversedDepth),te=this.localClippingEnabled,Qt=Mt.init(this.clippingPlanes,te),w=ee.get(N,P.length),w.init(),P.push(w),ht.enabled===!0&&ht.isPresenting===!0){const It=C.xr.getDepthSensingMesh();It!==null&&Is(It,W,-1/0,C.sortObjects)}Is(N,W,0,C.sortObjects),w.finish(),C.sortObjects===!0&&w.sort(Tt,Ut),le=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,le&&Ot.addToRenderList(w,N),this.info.render.frame++,Qt===!0&&Mt.beginShadows();const tt=O.state.shadowsArray;if(Pt.render(tt,N,W),Qt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&T.hasRenderPass())===!1){const It=w.opaque,Nt=w.transmissive;if(O.setupLights(),W.isArrayCamera){const Wt=W.cameras;if(Nt.length>0)for(let Yt=0,ne=Wt.length;Yt<ne;Yt++){const re=Wt[Yt];dn(It,Nt,N,re)}le&&Ot.render(N);for(let Yt=0,ne=Wt.length;Yt<ne;Yt++){const re=Wt[Yt];Wi(w,N,re,re.viewport)}}else Nt.length>0&&dn(It,Nt,N,W),le&&Ot.render(N),Wi(w,N,W)}Q!==null&&Y===0&&(K.updateMultisampleRenderTarget(Q),K.updateRenderTargetMipmap(Q)),at&&T.end(C),N.isScene===!0&&N.onAfterRender(C,N,W),Rt.resetDefaultState(),it=-1,Z=null,L.pop(),L.length>0?(O=L[L.length-1],Qt===!0&&Mt.setGlobalState(C.clippingPlanes,O.state.camera)):O=null,P.pop(),P.length>0?w=P[P.length-1]:w=null};function Is(N,W,ut,at){if(N.visible===!1)return;if(N.layers.test(W.layers)){if(N.isGroup)ut=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(W);else if(N.isLight)O.pushLight(N),N.castShadow&&O.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||kt.intersectsSprite(N)){at&&me.setFromMatrixPosition(N.matrixWorld).applyMatrix4(rn);const It=Xt.update(N),Nt=N.material;Nt.visible&&w.push(N,It,Nt,ut,me.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||kt.intersectsObject(N))){const It=Xt.update(N),Nt=N.material;if(at&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),me.copy(N.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),me.copy(It.boundingSphere.center)),me.applyMatrix4(N.matrixWorld).applyMatrix4(rn)),Array.isArray(Nt)){const Wt=It.groups;for(let Yt=0,ne=Wt.length;Yt<ne;Yt++){const re=Wt[Yt],Ht=Nt[re.materialIndex];Ht&&Ht.visible&&w.push(N,It,Ht,ut,me.z,re)}}else Nt.visible&&w.push(N,It,Nt,ut,me.z,null)}}const Dt=N.children;for(let It=0,Nt=Dt.length;It<Nt;It++)Is(Dt[It],W,ut,at)}function Wi(N,W,ut,at){const{opaque:tt,transmissive:Dt,transparent:It}=N;O.setupLightsView(ut),Qt===!0&&Mt.setGlobalState(C.clippingPlanes,ut),at&&qt.viewport(F.copy(at)),tt.length>0&&En(tt,W,ut),Dt.length>0&&En(Dt,W,ut),It.length>0&&En(It,W,ut),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function dn(N,W,ut,at){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;if(O.state.transmissionRenderTarget[at.id]===void 0){const Ht=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");O.state.transmissionRenderTarget[at.id]=new va(1,1,{generateMipmaps:!0,type:Ht?tr:Gi,minFilter:As,samples:Le.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ae.workingColorSpace})}const Dt=O.state.transmissionRenderTarget[at.id],It=at.viewport||F;Dt.setSize(It.z*C.transmissionResolutionScale,It.w*C.transmissionResolutionScale);const Nt=C.getRenderTarget(),Wt=C.getActiveCubeFace(),Yt=C.getActiveMipmapLevel();C.setRenderTarget(Dt),C.getClearColor(ct),St=C.getClearAlpha(),St<1&&C.setClearColor(16777215,.5),C.clear(),le&&Ot.render(ut);const ne=C.toneMapping;C.toneMapping=ga;const re=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),O.setupLightsView(at),Qt===!0&&Mt.setGlobalState(C.clippingPlanes,at),En(N,ut,at),K.updateMultisampleRenderTarget(Dt),K.updateRenderTargetMipmap(Dt),be.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let fe=0,Ke=W.length;fe<Ke;fe++){const Qe=W[fe],{object:Re,geometry:bn,material:Vt,group:Xn}=Qe;if(Vt.side===Za&&Re.layers.test(at.layers)){const ae=Vt.side;Vt.side=ri,Vt.needsUpdate=!0,Ea(Re,ut,at,bn,Vt,Xn),Vt.side=ae,Vt.needsUpdate=!0,Ht=!0}}Ht===!0&&(K.updateMultisampleRenderTarget(Dt),K.updateRenderTargetMipmap(Dt))}C.setRenderTarget(Nt,Wt,Yt),C.setClearColor(ct,St),re!==void 0&&(at.viewport=re),C.toneMapping=ne}function En(N,W,ut){const at=W.isScene===!0?W.overrideMaterial:null;for(let tt=0,Dt=N.length;tt<Dt;tt++){const It=N[tt],{object:Nt,geometry:Wt,group:Yt}=It;let ne=It.material;ne.allowOverride===!0&&at!==null&&(ne=at),Nt.layers.test(ut.layers)&&Ea(Nt,W,ut,Wt,ne,Yt)}}function Ea(N,W,ut,at,tt,Dt){N.onBeforeRender(C,W,ut,at,tt,Dt),N.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),tt.onBeforeRender(C,W,ut,at,N,Dt),tt.transparent===!0&&tt.side===Za&&tt.forceSinglePass===!1?(tt.side=ri,tt.needsUpdate=!0,C.renderBufferDirect(ut,W,at,tt,N,Dt),tt.side=Wr,tt.needsUpdate=!0,C.renderBufferDirect(ut,W,at,tt,N,Dt),tt.side=Za):C.renderBufferDirect(ut,W,at,tt,N,Dt),N.onAfterRender(C,W,ut,at,tt,Dt)}function sr(N,W,ut){W.isScene!==!0&&(W=Ue);const at=A.get(N),tt=O.state.lights,Dt=O.state.shadowsArray,It=tt.state.version,Nt=wt.getParameters(N,tt.state,Dt,W,ut),Wt=wt.getProgramCacheKey(Nt);let Yt=at.programs;at.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?W.environment:null,at.fog=W.fog;const ne=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;at.envMap=_t.get(N.envMap||at.environment,ne),at.envMapRotation=at.environment!==null&&N.envMap===null?W.environmentRotation:N.envMapRotation,Yt===void 0&&(N.addEventListener("dispose",Te),Yt=new Map,at.programs=Yt);let re=Yt.get(Wt);if(re!==void 0){if(at.currentProgram===re&&at.lightsStateVersion===It)return bu(N,Nt),re}else Nt.uniforms=wt.getUniforms(N),N.onBeforeCompile(Nt,C),re=wt.acquireProgram(Nt,Wt),Yt.set(Wt,re),at.uniforms=Nt.uniforms;const Ht=at.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(Ht.clippingPlanes=Mt.uniform),bu(N,Nt),at.needsLights=el(N),at.lightsStateVersion=It,at.needsLights&&(Ht.ambientLightColor.value=tt.state.ambient,Ht.lightProbe.value=tt.state.probe,Ht.directionalLights.value=tt.state.directional,Ht.directionalLightShadows.value=tt.state.directionalShadow,Ht.spotLights.value=tt.state.spot,Ht.spotLightShadows.value=tt.state.spotShadow,Ht.rectAreaLights.value=tt.state.rectArea,Ht.ltc_1.value=tt.state.rectAreaLTC1,Ht.ltc_2.value=tt.state.rectAreaLTC2,Ht.pointLights.value=tt.state.point,Ht.pointLightShadows.value=tt.state.pointShadow,Ht.hemisphereLights.value=tt.state.hemi,Ht.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Ht.spotLightMatrix.value=tt.state.spotLightMatrix,Ht.spotLightMap.value=tt.state.spotLightMap,Ht.pointShadowMatrix.value=tt.state.pointShadowMatrix),at.currentProgram=re,at.uniformsList=null,re}function Eu(N){if(N.uniformsList===null){const W=N.currentProgram.getUniforms();N.uniformsList=hf.seqWithValue(W.seq,N.uniforms)}return N.uniformsList}function bu(N,W){const ut=A.get(N);ut.outputColorSpace=W.outputColorSpace,ut.batching=W.batching,ut.batchingColor=W.batchingColor,ut.instancing=W.instancing,ut.instancingColor=W.instancingColor,ut.instancingMorph=W.instancingMorph,ut.skinning=W.skinning,ut.morphTargets=W.morphTargets,ut.morphNormals=W.morphNormals,ut.morphColors=W.morphColors,ut.morphTargetsCount=W.morphTargetsCount,ut.numClippingPlanes=W.numClippingPlanes,ut.numIntersection=W.numClipIntersection,ut.vertexAlphas=W.vertexAlphas,ut.vertexTangents=W.vertexTangents,ut.toneMapping=W.toneMapping}function Tu(N,W,ut,at,tt){W.isScene!==!0&&(W=Ue),K.resetTextureUnits();const Dt=W.fog,It=at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial?W.environment:null,Nt=Q===null?C.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ko,Wt=at.isMeshStandardMaterial||at.isMeshLambertMaterial&&!at.envMap||at.isMeshPhongMaterial&&!at.envMap,Yt=_t.get(at.envMap||It,Wt),ne=at.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,re=!!ut.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Ht=!!ut.morphAttributes.position,fe=!!ut.morphAttributes.normal,Ke=!!ut.morphAttributes.color;let Qe=ga;at.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Qe=C.toneMapping);const Re=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,bn=Re!==void 0?Re.length:0,Vt=A.get(at),Xn=O.state.lights;if(Qt===!0&&(te===!0||N!==Z)){const mn=N===Z&&at.id===it;Mt.setState(at,N,mn)}let ae=!1;at.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Xn.state.version||Vt.outputColorSpace!==Nt||tt.isBatchedMesh&&Vt.batching===!1||!tt.isBatchedMesh&&Vt.batching===!0||tt.isBatchedMesh&&Vt.batchingColor===!0&&tt.colorTexture===null||tt.isBatchedMesh&&Vt.batchingColor===!1&&tt.colorTexture!==null||tt.isInstancedMesh&&Vt.instancing===!1||!tt.isInstancedMesh&&Vt.instancing===!0||tt.isSkinnedMesh&&Vt.skinning===!1||!tt.isSkinnedMesh&&Vt.skinning===!0||tt.isInstancedMesh&&Vt.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Vt.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Vt.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Vt.instancingMorph===!1&&tt.morphTexture!==null||Vt.envMap!==Yt||at.fog===!0&&Vt.fog!==Dt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Mt.numPlanes||Vt.numIntersection!==Mt.numIntersection)||Vt.vertexAlphas!==ne||Vt.vertexTangents!==re||Vt.morphTargets!==Ht||Vt.morphNormals!==fe||Vt.morphColors!==Ke||Vt.toneMapping!==Qe||Vt.morphTargetsCount!==bn)&&(ae=!0):(ae=!0,Vt.__version=at.version);let Wn=Vt.currentProgram;ae===!0&&(Wn=sr(at,W,tt));let fi=!1,qi=!1,hi=!1;const Oe=Wn.getUniforms(),pn=Vt.uniforms;if(qt.useProgram(Wn.program)&&(fi=!0,qi=!0,hi=!0),at.id!==it&&(it=at.id,qi=!0),fi||Z!==N){qt.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Oe.setValue(k,"projectionMatrix",N.projectionMatrix),Oe.setValue(k,"viewMatrix",N.matrixWorldInverse);const ji=Oe.map.cameraPosition;ji!==void 0&&ji.setValue(k,ve.setFromMatrixPosition(N.matrixWorld)),Le.logarithmicDepthBuffer&&Oe.setValue(k,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&Oe.setValue(k,"isOrthographic",N.isOrthographicCamera===!0),Z!==N&&(Z=N,qi=!0,hi=!0)}if(Vt.needsLights&&(Xn.state.directionalShadowMap.length>0&&Oe.setValue(k,"directionalShadowMap",Xn.state.directionalShadowMap,K),Xn.state.spotShadowMap.length>0&&Oe.setValue(k,"spotShadowMap",Xn.state.spotShadowMap,K),Xn.state.pointShadowMap.length>0&&Oe.setValue(k,"pointShadowMap",Xn.state.pointShadowMap,K)),tt.isSkinnedMesh){Oe.setOptional(k,tt,"bindMatrix"),Oe.setOptional(k,tt,"bindMatrixInverse");const mn=tt.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),Oe.setValue(k,"boneTexture",mn.boneTexture,K))}tt.isBatchedMesh&&(Oe.setOptional(k,tt,"batchingTexture"),Oe.setValue(k,"batchingTexture",tt._matricesTexture,K),Oe.setOptional(k,tt,"batchingIdTexture"),Oe.setValue(k,"batchingIdTexture",tt._indirectTexture,K),Oe.setOptional(k,tt,"batchingColorTexture"),tt._colorsTexture!==null&&Oe.setValue(k,"batchingColorTexture",tt._colorsTexture,K));const qn=ut.morphAttributes;if((qn.position!==void 0||qn.normal!==void 0||qn.color!==void 0)&&Ft.update(tt,ut,Wn),(qi||Vt.receiveShadow!==tt.receiveShadow)&&(Vt.receiveShadow=tt.receiveShadow,Oe.setValue(k,"receiveShadow",tt.receiveShadow)),(at.isMeshStandardMaterial||at.isMeshLambertMaterial||at.isMeshPhongMaterial)&&at.envMap===null&&W.environment!==null&&(pn.envMapIntensity.value=W.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=SR()),qi&&(Oe.setValue(k,"toneMappingExposure",C.toneMappingExposure),Vt.needsLights&&Kr(pn,hi),Dt&&at.fog===!0&&Kt.refreshFogUniforms(pn,Dt),Kt.refreshMaterialUniforms(pn,at,mt,j,O.state.transmissionRenderTarget[N.id]),hf.upload(k,Eu(Vt),pn,K)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(hf.upload(k,Eu(Vt),pn,K),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&Oe.setValue(k,"center",tt.center),Oe.setValue(k,"modelViewMatrix",tt.modelViewMatrix),Oe.setValue(k,"normalMatrix",tt.normalMatrix),Oe.setValue(k,"modelMatrix",tt.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const mn=at.uniformsGroups;for(let ji=0,ba=mn.length;ji<ba;ji++){const Bs=mn[ji];zt.update(Bs,Wn),zt.bind(Bs,Wn)}}return Wn}function Kr(N,W){N.ambientLightColor.needsUpdate=W,N.lightProbe.needsUpdate=W,N.directionalLights.needsUpdate=W,N.directionalLightShadows.needsUpdate=W,N.pointLights.needsUpdate=W,N.pointLightShadows.needsUpdate=W,N.spotLights.needsUpdate=W,N.spotLightShadows.needsUpdate=W,N.rectAreaLights.needsUpdate=W,N.hemisphereLights.needsUpdate=W}function el(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return Q},this.setRenderTargetTextures=function(N,W,ut){const at=A.get(N);at.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),A.get(N.texture).__webglTexture=W,A.get(N.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:ut,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,W){const ut=A.get(N);ut.__webglFramebuffer=W,ut.__useDefaultFramebuffer=W===void 0};const or=k.createFramebuffer();this.setRenderTarget=function(N,W=0,ut=0){Q=N,G=W,Y=ut;let at=null,tt=!1,Dt=!1;if(N){const Nt=A.get(N);if(Nt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(k.FRAMEBUFFER,Nt.__webglFramebuffer),F.copy(N.viewport),H.copy(N.scissor),ot=N.scissorTest,qt.viewport(F),qt.scissor(H),qt.setScissorTest(ot),it=-1;return}else if(Nt.__webglFramebuffer===void 0)K.setupRenderTarget(N);else if(Nt.__hasExternalTextures)K.rebindTextures(N,A.get(N.texture).__webglTexture,A.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ne=N.depthTexture;if(Nt.__boundDepthTexture!==ne){if(ne!==null&&A.has(ne)&&(N.width!==ne.image.width||N.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(N)}}const Wt=N.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Dt=!0);const Yt=A.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Yt[W])?at=Yt[W][ut]:at=Yt[W],tt=!0):N.samples>0&&K.useMultisampledRTT(N)===!1?at=A.get(N).__webglMultisampledFramebuffer:Array.isArray(Yt)?at=Yt[ut]:at=Yt,F.copy(N.viewport),H.copy(N.scissor),ot=N.scissorTest}else F.copy(rt).multiplyScalar(mt).floor(),H.copy(xt).multiplyScalar(mt).floor(),ot=At;if(ut!==0&&(at=or),qt.bindFramebuffer(k.FRAMEBUFFER,at)&&qt.drawBuffers(N,at),qt.viewport(F),qt.scissor(H),qt.setScissorTest(ot),tt){const Nt=A.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+W,Nt.__webglTexture,ut)}else if(Dt){const Nt=W;for(let Wt=0;Wt<N.textures.length;Wt++){const Yt=A.get(N.textures[Wt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Wt,Yt.__webglTexture,ut,Nt)}}else if(N!==null&&ut!==0){const Nt=A.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Nt.__webglTexture,ut)}it=-1},this.readRenderTargetPixels=function(N,W,ut,at,tt,Dt,It,Nt=0){if(!(N&&N.isWebGLRenderTarget)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Wt=A.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&It!==void 0&&(Wt=Wt[It]),Wt){qt.bindFramebuffer(k.FRAMEBUFFER,Wt);try{const Yt=N.textures[Nt],ne=Yt.format,re=Yt.type;if(N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Nt),!Le.textureFormatReadable(ne)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Le.textureTypeReadable(re)){De("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=N.width-at&&ut>=0&&ut<=N.height-tt&&k.readPixels(W,ut,at,tt,Ct.convert(ne),Ct.convert(re),Dt)}finally{const Yt=Q!==null?A.get(Q).__webglFramebuffer:null;qt.bindFramebuffer(k.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(N,W,ut,at,tt,Dt,It,Nt=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Wt=A.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&It!==void 0&&(Wt=Wt[It]),Wt)if(W>=0&&W<=N.width-at&&ut>=0&&ut<=N.height-tt){qt.bindFramebuffer(k.FRAMEBUFFER,Wt);const Yt=N.textures[Nt],ne=Yt.format,re=Yt.type;if(N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Nt),!Le.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Le.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ht=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Ht),k.bufferData(k.PIXEL_PACK_BUFFER,Dt.byteLength,k.STREAM_READ),k.readPixels(W,ut,at,tt,Ct.convert(ne),Ct.convert(re),0);const fe=Q!==null?A.get(Q).__webglFramebuffer:null;qt.bindFramebuffer(k.FRAMEBUFFER,fe);const Ke=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await WE(k,Ke,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Ht),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Dt),k.deleteBuffer(Ht),k.deleteSync(Ke),Dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,W=null,ut=0){const at=Math.pow(2,-ut),tt=Math.floor(N.image.width*at),Dt=Math.floor(N.image.height*at),It=W!==null?W.x:0,Nt=W!==null?W.y:0;K.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,ut,0,0,It,Nt,tt,Dt),qt.unbindTexture()};const lr=k.createFramebuffer(),Qr=k.createFramebuffer();this.copyTextureToTexture=function(N,W,ut=null,at=null,tt=0,Dt=0){let It,Nt,Wt,Yt,ne,re,Ht,fe,Ke;const Qe=N.isCompressedTexture?N.mipmaps[Dt]:N.image;if(ut!==null)It=ut.max.x-ut.min.x,Nt=ut.max.y-ut.min.y,Wt=ut.isBox3?ut.max.z-ut.min.z:1,Yt=ut.min.x,ne=ut.min.y,re=ut.isBox3?ut.min.z:0;else{const pn=Math.pow(2,-tt);It=Math.floor(Qe.width*pn),Nt=Math.floor(Qe.height*pn),N.isDataArrayTexture?Wt=Qe.depth:N.isData3DTexture?Wt=Math.floor(Qe.depth*pn):Wt=1,Yt=0,ne=0,re=0}at!==null?(Ht=at.x,fe=at.y,Ke=at.z):(Ht=0,fe=0,Ke=0);const Re=Ct.convert(W.format),bn=Ct.convert(W.type);let Vt;W.isData3DTexture?(K.setTexture3D(W,0),Vt=k.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(K.setTexture2DArray(W,0),Vt=k.TEXTURE_2D_ARRAY):(K.setTexture2D(W,0),Vt=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Xn=k.getParameter(k.UNPACK_ROW_LENGTH),ae=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Wn=k.getParameter(k.UNPACK_SKIP_PIXELS),fi=k.getParameter(k.UNPACK_SKIP_ROWS),qi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Qe.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Qe.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Yt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ne),k.pixelStorei(k.UNPACK_SKIP_IMAGES,re);const hi=N.isDataArrayTexture||N.isData3DTexture,Oe=W.isDataArrayTexture||W.isData3DTexture;if(N.isDepthTexture){const pn=A.get(N),qn=A.get(W),mn=A.get(pn.__renderTarget),ji=A.get(qn.__renderTarget);qt.bindFramebuffer(k.READ_FRAMEBUFFER,mn.__webglFramebuffer),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,ji.__webglFramebuffer);for(let ba=0;ba<Wt;ba++)hi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(N).__webglTexture,tt,re+ba),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(W).__webglTexture,Dt,Ke+ba)),k.blitFramebuffer(Yt,ne,It,Nt,Ht,fe,It,Nt,k.DEPTH_BUFFER_BIT,k.NEAREST);qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(tt!==0||N.isRenderTargetTexture||A.has(N)){const pn=A.get(N),qn=A.get(W);qt.bindFramebuffer(k.READ_FRAMEBUFFER,lr),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Qr);for(let mn=0;mn<Wt;mn++)hi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,pn.__webglTexture,tt,re+mn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,pn.__webglTexture,tt),Oe?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,qn.__webglTexture,Dt,Ke+mn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,qn.__webglTexture,Dt),tt!==0?k.blitFramebuffer(Yt,ne,It,Nt,Ht,fe,It,Nt,k.COLOR_BUFFER_BIT,k.NEAREST):Oe?k.copyTexSubImage3D(Vt,Dt,Ht,fe,Ke+mn,Yt,ne,It,Nt):k.copyTexSubImage2D(Vt,Dt,Ht,fe,Yt,ne,It,Nt);qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Oe?N.isDataTexture||N.isData3DTexture?k.texSubImage3D(Vt,Dt,Ht,fe,Ke,It,Nt,Wt,Re,bn,Qe.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Vt,Dt,Ht,fe,Ke,It,Nt,Wt,Re,Qe.data):k.texSubImage3D(Vt,Dt,Ht,fe,Ke,It,Nt,Wt,Re,bn,Qe):N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Dt,Ht,fe,It,Nt,Re,bn,Qe.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Dt,Ht,fe,Qe.width,Qe.height,Re,Qe.data):k.texSubImage2D(k.TEXTURE_2D,Dt,Ht,fe,It,Nt,Re,bn,Qe);k.pixelStorei(k.UNPACK_ROW_LENGTH,Xn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ae),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Wn),k.pixelStorei(k.UNPACK_SKIP_ROWS,fi),k.pixelStorei(k.UNPACK_SKIP_IMAGES,qi),Dt===0&&W.generateMipmaps&&k.generateMipmap(Vt),qt.unbindTexture()},this.initRenderTarget=function(N){A.get(N).__webglFramebuffer===void 0&&K.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?K.setTextureCube(N,0):N.isData3DTexture?K.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?K.setTexture2DArray(N,0):K.setTexture2D(N,0),qt.unbindTexture()},this.resetState=function(){G=0,Y=0,Q=null,qt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ma}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=Ae._getDrawingBufferColorSpace(t),n.unpackColorSpace=Ae._getUnpackColorSpace()}}const MR=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,ER=`
precision mediump float;

uniform float uTime;
uniform vec2 uResolution;
uniform float uFlakeSize;
uniform float uMinFlakeSize;
uniform float uPixelResolution;
uniform float uSpeed;
uniform float uDepthFade;
uniform float uFarPlane;
uniform vec3 uColor;
uniform float uBrightness;
uniform float uGamma;
uniform float uDensity;
uniform float uVariant;
uniform float uDirection;

#define PI 3.14159265
#define PI_OVER_6 0.5235988
#define PI_OVER_3 1.0471976
#define INV_SQRT3 0.57735027
#define M1 1597334677U
#define M2 3812015801U
#define M3 3299493293U
#define F0 2.3283064e-10

#define hash(n) (n * (n ^ (n >> 15)))
#define coord3(p) (uvec3(p).x * M1 ^ uvec3(p).y * M2 ^ uvec3(p).z * M3)

const vec3 camK = vec3(0.57735027, 0.57735027, 0.57735027);
const vec3 camI = vec3(0.70710678, 0.0, -0.70710678);
const vec3 camJ = vec3(-0.40824829, 0.81649658, -0.40824829);

const vec2 b1d = vec2(0.574, 0.819);

vec3 hash3(uint n) {
  uvec3 hashed = hash(n) * uvec3(1U, 511U, 262143U);
  return vec3(hashed) * F0;
}

float snowflakeDist(vec2 p) {
  float r = length(p);
  float a = atan(p.y, p.x);
  a = abs(mod(a + PI_OVER_6, PI_OVER_3) - PI_OVER_6);
  vec2 q = r * vec2(cos(a), sin(a));
  float dMain = max(abs(q.y), max(-q.x, q.x - 1.0));
  float b1t = clamp(dot(q - vec2(0.4, 0.0), b1d), 0.0, 0.4);
  float dB1 = length(q - vec2(0.4, 0.0) - b1t * b1d);
  float b2t = clamp(dot(q - vec2(0.7, 0.0), b1d), 0.0, 0.25);
  float dB2 = length(q - vec2(0.7, 0.0) - b2t * b1d);
  return min(dMain, min(dB1, dB2)) * 10.0;
}

void main() {
  float invPixelRes = 1.0 / uPixelResolution;
  float pixelSize = max(1.0, floor(0.5 + uResolution.x * invPixelRes));
  float invPixelSize = 1.0 / pixelSize;
  
  vec2 fragCoord = floor(gl_FragCoord.xy * invPixelSize);
  vec2 res = uResolution * invPixelSize;
  float invResX = 1.0 / res.x;

  vec3 ray = normalize(vec3((fragCoord - res * 0.5) * invResX, 1.0));
  ray = ray.x * camI + ray.y * camJ + ray.z * camK;

  float timeSpeed = uTime * uSpeed;
  float windX = cos(uDirection) * 0.4;
  float windY = sin(uDirection) * 0.4;
  vec3 camPos = (windX * camI + windY * camJ + 0.1 * camK) * timeSpeed;
  vec3 pos = camPos;

  vec3 absRay = max(abs(ray), vec3(0.001));
  vec3 strides = 1.0 / absRay;
  vec3 raySign = step(ray, vec3(0.0));
  vec3 phase = fract(pos) * strides;
  phase = mix(strides - phase, phase, raySign);

  float rayDotCamK = dot(ray, camK);
  float invRayDotCamK = 1.0 / rayDotCamK;
  float invDepthFade = 1.0 / uDepthFade;
  float halfInvResX = 0.5 * invResX;
  vec3 timeAnim = timeSpeed * 0.1 * vec3(7.0, 8.0, 5.0);

  float t = 0.0;
  for (int i = 0; i < 128; i++) {
    if (t >= uFarPlane) break;
    
    vec3 fpos = floor(pos);
    uint cellCoord = coord3(fpos);
    float cellHash = hash3(cellCoord).x;

    if (cellHash < uDensity) {
      vec3 h = hash3(cellCoord);
      
      vec3 sinArg1 = fpos.yzx * 0.073;
      vec3 sinArg2 = fpos.zxy * 0.27;
      vec3 flakePos = 0.5 - 0.5 * cos(4.0 * sin(sinArg1) + 4.0 * sin(sinArg2) + 2.0 * h + timeAnim);
      flakePos = flakePos * 0.8 + 0.1 + fpos;

      float toIntersection = dot(flakePos - pos, camK) * invRayDotCamK;
      
      if (toIntersection > 0.0) {
        vec3 testPos = pos + ray * toIntersection - flakePos;
        float testX = dot(testPos, camI);
        float testY = dot(testPos, camJ);
        vec2 testUV = abs(vec2(testX, testY));
        
        float depth = dot(flakePos - camPos, camK);
        float flakeSize = max(uFlakeSize, uMinFlakeSize * depth * halfInvResX);
        
        float dist;
        if (uVariant < 0.5) {
          dist = max(testUV.x, testUV.y);
        } else if (uVariant < 1.5) {
          dist = length(testUV);
        } else {
          float invFlakeSize = 1.0 / flakeSize;
          dist = snowflakeDist(vec2(testX, testY) * invFlakeSize) * flakeSize;
        }

        if (dist < flakeSize) {
          float flakeSizeRatio = uFlakeSize / flakeSize;
          float intensity = exp2(-(t + toIntersection) * invDepthFade) *
                           min(1.0, flakeSizeRatio * flakeSizeRatio) * uBrightness;
          gl_FragColor = vec4(uColor * pow(vec3(intensity), vec3(uGamma)), 1.0);
          return;
        }
      }
    }

    float nextStep = min(min(phase.x, phase.y), phase.z);
    vec3 sel = step(phase, vec3(nextStep));
    phase = phase - nextStep + strides * sel;
    t += nextStep;
    pos = mix(pos + ray * nextStep, floor(pos + ray * nextStep + 0.5), sel);
  }

  gl_FragColor = vec4(0.0);
}
`;function bR({color:o="#ffffff",flakeSize:t=.01,minFlakeSize:n=1.25,pixelResolution:a=200,speed:s=1.25,depthFade:u=8,farPlane:c=20,brightness:f=1,gamma:p=.4545,density:d=.3,variant:_="square",direction:v=125,className:g="",style:S={}}){const M=Zt.useRef(null),E=Zt.useRef(0),x=Zt.useRef(!0),y=Zt.useRef(null),R=Zt.useRef(null),U=Zt.useRef(null),w=Zt.useMemo(()=>_==="round"?1:_==="snowflake"?2:0,[_]),O=Zt.useMemo(()=>{const L=new Be(o);return new lt(L.r,L.g,L.b)},[o]),P=Zt.useCallback(()=>{U.current&&clearTimeout(U.current),U.current=window.setTimeout(()=>{const L=M.current,T=y.current,C=R.current;if(!L||!T||!C)return;const $=L.offsetWidth,G=L.offsetHeight;T.setSize($,G),C.uniforms.uResolution.value.set($,G)},100)},[]);return Zt.useEffect(()=>{const L=M.current;if(!L)return;const T=new IntersectionObserver(([C])=>{x.current=C.isIntersecting},{threshold:0});return T.observe(L),()=>T.disconnect()},[]),Zt.useEffect(()=>{const L=M.current;if(!L)return;const T=new ob,C=new Ym(-1,1,1,-1,0,1),$=new yR({antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!1});$.setPixelRatio(Math.min(window.devicePixelRatio,2)),$.setSize(L.offsetWidth,L.offsetHeight),$.setClearColor(0,0),L.appendChild($.domElement),y.current=$;const G=new ia({vertexShader:MR,fragmentShader:ER,uniforms:{uTime:{value:0},uResolution:{value:new He(L.offsetWidth,L.offsetHeight)},uFlakeSize:{value:t},uMinFlakeSize:{value:n},uPixelResolution:{value:a},uSpeed:{value:s},uDepthFade:{value:u},uFarPlane:{value:c},uColor:{value:O.clone()},uBrightness:{value:f},uGamma:{value:p},uDensity:{value:d},uVariant:{value:w},uDirection:{value:v*Math.PI/180}},transparent:!0});R.current=G;const Y=new Su(2,2);T.add(new ya(Y,G)),window.addEventListener("resize",P);const Q=performance.now(),it=()=>{E.current=requestAnimationFrame(it),x.current&&(G.uniforms.uTime.value=(performance.now()-Q)*.001,$.render(T,C))};return it(),()=>{cancelAnimationFrame(E.current),window.removeEventListener("resize",P),U.current&&clearTimeout(U.current),L.contains($.domElement)&&L.removeChild($.domElement),$.dispose(),Y.dispose(),G.dispose(),y.current=null,R.current=null}},[P]),Zt.useEffect(()=>{const L=R.current;L&&(L.uniforms.uFlakeSize.value=t,L.uniforms.uMinFlakeSize.value=n,L.uniforms.uPixelResolution.value=a,L.uniforms.uSpeed.value=s,L.uniforms.uDepthFade.value=u,L.uniforms.uFarPlane.value=c,L.uniforms.uBrightness.value=f,L.uniforms.uGamma.value=p,L.uniforms.uDensity.value=d,L.uniforms.uVariant.value=w,L.uniforms.uDirection.value=v*Math.PI/180,L.uniforms.uColor.value.copy(O))},[t,n,a,s,u,c,f,p,d,w,v,O]),B.jsx("div",{ref:M,className:`absolute inset-0 w-full h-full transform-gpu will-change-transform backface-hidden ${g}`,style:S})}function ja(o){if(o===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return o}function ZS(o,t){o.prototype=Object.create(t.prototype),o.prototype.constructor=o,o.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wo={duration:.5,overwrite:!1,delay:0},Zm,Fn,$e,Vi=1e8,qe=1/Vi,Mm=Math.PI*2,TR=Mm/4,AR=0,KS=Math.sqrt,RR=Math.cos,CR=Math.sin,Dn=function(t){return typeof t=="string"},ln=function(t){return typeof t=="function"},ir=function(t){return typeof t=="number"},Km=function(t){return typeof t>"u"},Ma=function(t){return typeof t=="object"},si=function(t){return t!==!1},Qm=function(){return typeof window<"u"},rf=function(t){return ln(t)||Dn(t)},QS=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Vn=Array.isArray,wR=/random\([^)]+\)/g,DR=/,\s*/g,Kx=/(?:-?\.?\d|\.)+/gi,JS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Lo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,$S=/[+-]=-?[.\d]+/,UR=/[^,'"\[\]\s]+/gi,NR=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,nn,fa,Em,Jm,Ci={},Sf={},ty,ey=function(t){return(Sf=qo(t,Ci))&&ci},$m=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},cu=function(t,n){return!n&&console.warn(t)},ny=function(t,n){return t&&(Ci[t]=n)&&Sf&&(Sf[t]=n)||Ci},fu=function(){return 0},LR={suppressEvents:!0,isStart:!0,kill:!1},df={suppressEvents:!0,kill:!1},OR={suppressEvents:!0},t0={},kr=[],bm={},iy,Mi={},Ep={},Qx=30,pf=[],e0="",n0=function(t){var n=t[0],a,s;if(Ma(n)||ln(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(s=pf.length;s--&&!pf[s].targetTest(n););a=pf[s]}for(s=t.length;s--;)t[s]&&(t[s]._gsap||(t[s]._gsap=new Ry(t[s],a)))||t.splice(s,1);return t},ws=function(t){return t._gsap||n0(ki(t))[0]._gsap},ay=function(t,n,a){return(a=t[n])&&ln(a)?t[n]():Km(a)&&t.getAttribute&&t.getAttribute(n)||a},oi=function(t,n){return(t=t.split(",")).forEach(n)||t},fn=function(t){return Math.round(t*1e5)/1e5||0},en=function(t){return Math.round(t*1e7)/1e7||0},zo=function(t,n){var a=n.charAt(0),s=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+s:a==="-"?t-s:a==="*"?t*s:t/s},PR=function(t,n){for(var a=n.length,s=0;t.indexOf(n[s])<0&&++s<a;);return s<a},yf=function(){var t=kr.length,n=kr.slice(0),a,s;for(bm={},kr.length=0,a=0;a<t;a++)s=n[a],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},i0=function(t){return!!(t._initted||t._startAt||t.add)},ry=function(t,n,a,s){kr.length&&!Fn&&yf(),t.render(n,a,!!(Fn&&n<0&&i0(t))),kr.length&&!Fn&&yf()},sy=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(UR).length<2?n:Dn(t)?t.trim():t},oy=function(t){return t},wi=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},FR=function(t){return function(n,a){for(var s in a)s in n||s==="duration"&&t||s==="ease"||(n[s]=a[s])}},qo=function(t,n){for(var a in n)t[a]=n[a];return t},Jx=function o(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=Ma(n[a])?o(t[a]||(t[a]={}),n[a]):n[a]);return t},Mf=function(t,n){var a={},s;for(s in t)s in n||(a[s]=t[s]);return a},au=function(t){var n=t.parent||nn,a=t.keyframes?FR(Vn(t.keyframes)):wi;if(si(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},zR=function(t,n){for(var a=t.length,s=a===n.length;s&&a--&&t[a]===n[a];);return a<0},ly=function(t,n,a,s,u){var c=t[s],f;if(u)for(f=n[u];c&&c[u]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[s]=n,n._prev=c,n.parent=n._dp=t,n},Uf=function(t,n,a,s){a===void 0&&(a="_first"),s===void 0&&(s="_last");var u=n._prev,c=n._next;u?u._next=c:t[a]===n&&(t[a]=c),c?c._prev=u:t[s]===n&&(t[s]=u),n._next=n._prev=n.parent=null},qr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ds=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},IR=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Tm=function(t,n,a,s){return t._startAt&&(Fn?t._startAt.revert(df):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,s))},BR=function o(t){return!t||t._ts&&o(t.parent)},$x=function(t){return t._repeat?jo(t._tTime,t=t.duration()+t._rDelay)*t:0},jo=function(t,n){var a=Math.floor(t=en(t/n));return t&&a===t?a-1:a},Ef=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},Nf=function(t){return t._end=en(t._start+(t._tDur/Math.abs(t._ts||t._rts||qe)||0))},Lf=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=en(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),Nf(t),a._dirty||Ds(a,t)),t},uy=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=Ef(t.rawTime(),n),(!n._dur||yu(0,n.totalDuration(),a)-n._tTime>qe)&&n.render(a,!0)),Ds(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-qe}},da=function(t,n,a,s){return n.parent&&qr(n),n._start=en((ir(a)?a:a||t!==nn?Bi(t,a,n):t._time)+n._delay),n._end=en(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),ly(t,n,"_first","_last",t._sort?"_start":0),Am(n)||(t._recent=n),s||uy(t,n),t._ts<0&&Lf(t,t._tTime),t},cy=function(t,n){return(Ci.ScrollTrigger||$m("scrollTrigger",n))&&Ci.ScrollTrigger.create(n,t)},fy=function(t,n,a,s,u){if(r0(t,n,u),!t._initted)return 1;if(!a&&t._pt&&!Fn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&iy!==Ei.frame)return kr.push(t),t._lazy=[u,s],1},HR=function o(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||o(n))},Am=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},GR=function(t,n,a,s){var u=t.ratio,c=n<0||!n&&(!t._start&&HR(t)&&!(!t._initted&&Am(t))||(t._ts<0||t._dp._ts<0)&&!Am(t))?0:1,f=t._rDelay,p=0,d,_,v;if(f&&t._repeat&&(p=yu(0,t._tDur,n),_=jo(p,f),t._yoyo&&_&1&&(c=1-c),_!==jo(t._tTime,f)&&(u=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==u||Fn||s||t._zTime===qe||!n&&t._zTime){if(!t._initted&&fy(t,n,s,a,p))return;for(v=t._zTime,t._zTime=n||(a?qe:0),a||(a=n&&!v),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&Tm(t,n,a,!0),t._onUpdate&&!a&&bi(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&bi(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&qr(t,1),!a&&!Fn&&(bi(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},VR=function(t,n,a){var s;if(a>n)for(s=t._first;s&&s._start<=a;){if(s.data==="isPause"&&s._start>n)return s;s=s._next}else for(s=t._last;s&&s._start>=a;){if(s.data==="isPause"&&s._start<n)return s;s=s._prev}},Yo=function(t,n,a,s){var u=t._repeat,c=en(n)||0,f=t._tTime/t._tDur;return f&&!s&&(t._time*=c/t._dur),t._dur=c,t._tDur=u?u<0?1e10:en(c*(u+1)+t._rDelay*u):c,f>0&&!s&&Lf(t,t._tTime=t._tDur*f),t.parent&&Nf(t),a||Ds(t.parent,t),t},tS=function(t){return t instanceof Zn?Ds(t):Yo(t,t._dur)},kR={_start:0,endTime:fu,totalDuration:fu},Bi=function o(t,n,a){var s=t.labels,u=t._recent||kR,c=t.duration()>=Vi?u.endTime(!1):t._dur,f,p,d;return Dn(n)&&(isNaN(n)||n in s)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?u._start:u.endTime(u._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?u:a).totalDuration()/100:1)):f<0?(n in s||(s[n]=c),s[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(Vn(a)?a[0]:a).totalDuration()),f>1?o(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},ru=function(t,n,a){var s=ir(n[1]),u=(s?2:1)+(t<2?0:1),c=n[u],f,p;if(s&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=si(p.vars.inherit)&&p.parent;c.immediateRender=si(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[u-1]}return new yn(n[0],c,n[u+1])},Zr=function(t,n){return t||t===0?n(t):n},yu=function(t,n,a){return a<t?t:a>n?n:a},Hn=function(t,n){return!Dn(t)||!(n=NR.exec(t))?"":n[1]},XR=function(t,n,a){return Zr(a,function(s){return yu(t,n,s)})},Rm=[].slice,hy=function(t,n){return t&&Ma(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&Ma(t[0]))&&!t.nodeType&&t!==fa},WR=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(s){var u;return Dn(s)&&!n||hy(s,1)?(u=a).push.apply(u,ki(s)):a.push(s)})||a},ki=function(t,n,a){return $e&&!n&&$e.selector?$e.selector(t):Dn(t)&&!a&&(Em||!Zo())?Rm.call((n||Jm).querySelectorAll(t),0):Vn(t)?WR(t,a):hy(t)?Rm.call(t,0):t?[t]:[]},Cm=function(t){return t=ki(t)[0]||cu("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return ki(n,a.querySelectorAll?a:a===t?cu("Invalid scope")||Jm.createElement("div"):t)}},dy=function(t){return t.sort(function(){return .5-Math.random()})},py=function(t){if(ln(t))return t;var n=Ma(t)?t:{each:t},a=Us(n.ease),s=n.from||0,u=parseFloat(n.base)||0,c={},f=s>0&&s<1,p=isNaN(s)||f,d=n.axis,_=s,v=s;return Dn(s)?_=v={center:.5,edges:.5,end:1}[s]||0:!f&&p&&(_=s[0],v=s[1]),function(g,S,M){var E=(M||n).length,x=c[E],y,R,U,w,O,P,L,T,C;if(!x){if(C=n.grid==="auto"?0:(n.grid||[1,Vi])[1],!C){for(L=-Vi;L<(L=M[C++].getBoundingClientRect().left)&&C<E;);C<E&&C--}for(x=c[E]=[],y=p?Math.min(C,E)*_-.5:s%C,R=C===Vi?0:p?E*v/C-.5:s/C|0,L=0,T=Vi,P=0;P<E;P++)U=P%C-y,w=R-(P/C|0),x[P]=O=d?Math.abs(d==="y"?w:U):KS(U*U+w*w),O>L&&(L=O),O<T&&(T=O);s==="random"&&dy(x),x.max=L-T,x.min=T,x.v=E=(parseFloat(n.amount)||parseFloat(n.each)*(C>E?E-1:d?d==="y"?E/C:C:Math.max(C,E/C))||0)*(s==="edges"?-1:1),x.b=E<0?u-E:u,x.u=Hn(n.amount||n.each)||0,a=a&&E<0?by(a):a}return E=(x[g]-x.min)/x.max||0,en(x.b+(a?a(E):E)*x.v)+x.u}},wm=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var s=en(Math.round(parseFloat(a)/t)*t*n);return(s-s%1)/n+(ir(a)?0:Hn(a))}},my=function(t,n){var a=Vn(t),s,u;return!a&&Ma(t)&&(s=a=t.radius||Vi,t.values?(t=ki(t.values),(u=!ir(t[0]))&&(s*=s)):t=wm(t.increment)),Zr(n,a?ln(t)?function(c){return u=t(c),Math.abs(u-c)<=s?u:c}:function(c){for(var f=parseFloat(u?c.x:c),p=parseFloat(u?c.y:0),d=Vi,_=0,v=t.length,g,S;v--;)u?(g=t[v].x-f,S=t[v].y-p,g=g*g+S*S):g=Math.abs(t[v]-f),g<d&&(d=g,_=v);return _=!s||d<=s?t[_]:c,u||_===c||ir(c)?_:_+Hn(c)}:wm(t))},_y=function(t,n,a,s){return Zr(Vn(t)?!n:a===!0?!!(a=0):!s,function(){return Vn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(s=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*s)/s})},qR=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(s){return n.reduce(function(u,c){return c(u)},s)}},jR=function(t,n){return function(a){return t(parseFloat(a))+(n||Hn(a))}},YR=function(t,n,a){return vy(t,n,0,1,a)},gy=function(t,n,a){return Zr(a,function(s){return t[~~n(s)]})},ZR=function o(t,n,a){var s=n-t;return Vn(t)?gy(t,o(0,t.length),n):Zr(a,function(u){return(s+(u-t)%s)%s+t})},KR=function o(t,n,a){var s=n-t,u=s*2;return Vn(t)?gy(t,o(0,t.length-1),n):Zr(a,function(c){return c=(u+(c-t)%u)%u||0,t+(c>s?u-c:c)})},hu=function(t){return t.replace(wR,function(n){var a=n.indexOf("[")+1,s=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(DR);return _y(a?s:+s[0],a?0:+s[1],+s[2]||1e-5)})},vy=function(t,n,a,s,u){var c=n-t,f=s-a;return Zr(u,function(p){return a+((p-t)/c*f||0)})},QR=function o(t,n,a,s){var u=isNaN(t+n)?0:function(S){return(1-S)*t+S*n};if(!u){var c=Dn(t),f={},p,d,_,v,g;if(a===!0&&(s=1)&&(a=null),c)t={p:t},n={p:n};else if(Vn(t)&&!Vn(n)){for(_=[],v=t.length,g=v-2,d=1;d<v;d++)_.push(o(t[d-1],t[d]));v--,u=function(M){M*=v;var E=Math.min(g,~~M);return _[E](M-E)},a=n}else s||(t=qo(Vn(t)?[]:{},t));if(!_){for(p in n)a0.call(f,t,p,"get",n[p]);u=function(M){return l0(M,f)||(c?t.p:t)}}}return Zr(a,u)},eS=function(t,n,a){var s=t.labels,u=Vi,c,f,p;for(c in s)f=s[c]-n,f<0==!!a&&f&&u>(f=Math.abs(f))&&(p=c,u=f);return p},bi=function(t,n,a){var s=t.vars,u=s[n],c=$e,f=t._ctx,p,d,_;if(u)return p=s[n+"Params"],d=s.callbackScope||t,a&&kr.length&&yf(),f&&($e=f),_=p?u.apply(d,p):u.call(d),$e=c,_},nu=function(t){return qr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Fn),t.progress()<1&&bi(t,"onInterrupt"),t},Oo,xy=[],Sy=function(t){if(t)if(t=!t.name&&t.default||t,Qm()||t.headless){var n=t.name,a=ln(t),s=n&&!a&&t.init?function(){this._props=[]}:t,u={init:fu,render:l0,add:a0,kill:dC,modifier:hC,rawVars:0},c={targetTest:0,get:0,getSetter:o0,aliases:{},register:0};if(Zo(),t!==s){if(Mi[n])return;wi(s,wi(Mf(t,u),c)),qo(s.prototype,qo(u,Mf(t,c))),Mi[s.prop=n]=s,t.targetTest&&(pf.push(s),t0[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}ny(n,s),t.register&&t.register(ci,s,li)}else xy.push(t)},We=255,iu={aqua:[0,We,We],lime:[0,We,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,We],navy:[0,0,128],white:[We,We,We],olive:[128,128,0],yellow:[We,We,0],orange:[We,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[We,0,0],pink:[We,192,203],cyan:[0,We,We],transparent:[We,We,We,0]},bp=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*We+.5|0},yy=function(t,n,a){var s=t?ir(t)?[t>>16,t>>8&We,t&We]:0:iu.black,u,c,f,p,d,_,v,g,S,M;if(!s){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),iu[t])s=iu[t];else if(t.charAt(0)==="#"){if(t.length<6&&(u=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+u+u+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return s=parseInt(t.substr(1,6),16),[s>>16,s>>8&We,s&We,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),s=[t>>16,t>>8&We,t&We]}else if(t.substr(0,3)==="hsl"){if(s=M=t.match(Kx),!n)p=+s[0]%360/360,d=+s[1]/100,_=+s[2]/100,c=_<=.5?_*(d+1):_+d-_*d,u=_*2-c,s.length>3&&(s[3]*=1),s[0]=bp(p+1/3,u,c),s[1]=bp(p,u,c),s[2]=bp(p-1/3,u,c);else if(~t.indexOf("="))return s=t.match(JS),a&&s.length<4&&(s[3]=1),s}else s=t.match(Kx)||iu.transparent;s=s.map(Number)}return n&&!M&&(u=s[0]/We,c=s[1]/We,f=s[2]/We,v=Math.max(u,c,f),g=Math.min(u,c,f),_=(v+g)/2,v===g?p=d=0:(S=v-g,d=_>.5?S/(2-v-g):S/(v+g),p=v===u?(c-f)/S+(c<f?6:0):v===c?(f-u)/S+2:(u-c)/S+4,p*=60),s[0]=~~(p+.5),s[1]=~~(d*100+.5),s[2]=~~(_*100+.5)),a&&s.length<4&&(s[3]=1),s},My=function(t){var n=[],a=[],s=-1;return t.split(Xr).forEach(function(u){var c=u.match(Lo)||[];n.push.apply(n,c),a.push(s+=c.length+1)}),n.c=a,n},nS=function(t,n,a){var s="",u=(t+s).match(Xr),c=n?"hsla(":"rgba(",f=0,p,d,_,v;if(!u)return t;if(u=u.map(function(g){return(g=yy(g,n,1))&&c+(n?g[0]+","+g[1]+"%,"+g[2]+"%,"+g[3]:g.join(","))+")"}),a&&(_=My(t),p=a.c,p.join(s)!==_.c.join(s)))for(d=t.replace(Xr,"1").split(Lo),v=d.length-1;f<v;f++)s+=d[f]+(~p.indexOf(f)?u.shift()||c+"0,0,0,0)":(_.length?_:u.length?u:a).shift());if(!d)for(d=t.split(Xr),v=d.length-1;f<v;f++)s+=d[f]+u[f];return s+d[v]},Xr=(function(){var o="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in iu)o+="|"+t+"\\b";return new RegExp(o+")","gi")})(),JR=/hsl[a]?\(/,Ey=function(t){var n=t.join(" "),a;if(Xr.lastIndex=0,Xr.test(n))return a=JR.test(n),t[1]=nS(t[1],a),t[0]=nS(t[0],a,My(t[1])),!0},du,Ei=(function(){var o=Date.now,t=500,n=33,a=o(),s=a,u=1e3/240,c=u,f=[],p,d,_,v,g,S,M=function E(x){var y=o()-s,R=x===!0,U,w,O,P;if((y>t||y<0)&&(a+=y-n),s+=y,O=s-a,U=O-c,(U>0||R)&&(P=++v.frame,g=O-v.time*1e3,v.time=O=O/1e3,c+=U+(U>=u?4:u-U),w=1),R||(p=d(E)),w)for(S=0;S<f.length;S++)f[S](O,g,P,x)};return v={time:0,frame:0,tick:function(){M(!0)},deltaRatio:function(x){return g/(1e3/(x||60))},wake:function(){ty&&(!Em&&Qm()&&(fa=Em=window,Jm=fa.document||{},Ci.gsap=ci,(fa.gsapVersions||(fa.gsapVersions=[])).push(ci.version),ey(Sf||fa.GreenSockGlobals||!fa.gsap&&fa||{}),xy.forEach(Sy)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&v.sleep(),d=_||function(x){return setTimeout(x,c-v.time*1e3+1|0)},du=1,M(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),du=0,d=fu},lagSmoothing:function(x,y){t=x||1/0,n=Math.min(y||33,t)},fps:function(x){u=1e3/(x||240),c=v.time*1e3+u},add:function(x,y,R){var U=y?function(w,O,P,L){x(w,O,P,L),v.remove(U)}:x;return v.remove(x),f[R?"unshift":"push"](U),Zo(),U},remove:function(x,y){~(y=f.indexOf(x))&&f.splice(y,1)&&S>=y&&S--},_listeners:f},v})(),Zo=function(){return!du&&Ei.wake()},Ee={},$R=/^[\d.\-M][\d.\-,\s]/,tC=/["']/g,eC=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),s=a[0],u=1,c=a.length,f,p,d;u<c;u++)p=a[u],f=u!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[s]=isNaN(d)?d.replace(tC,"").trim():+d,s=p.substr(f+1).trim();return n},nC=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),s=t.indexOf("(",n);return t.substring(n,~s&&s<a?t.indexOf(")",a+1):a)},iC=function(t){var n=(t+"").split("("),a=Ee[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[eC(n[1])]:nC(t).split(",").map(sy)):Ee._CE&&$R.test(t)?Ee._CE("",t):a},by=function(t){return function(n){return 1-t(1-n)}},Ty=function o(t,n){for(var a=t._first,s;a;)a instanceof Zn?o(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?o(a.timeline,n):(s=a._ease,a._ease=a._yEase,a._yEase=s,a._yoyo=n)),a=a._next},Us=function(t,n){return t&&(ln(t)?t:Ee[t]||iC(t))||n},Os=function(t,n,a,s){a===void 0&&(a=function(p){return 1-n(1-p)}),s===void 0&&(s=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var u={easeIn:n,easeOut:a,easeInOut:s},c;return oi(t,function(f){Ee[f]=Ci[f]=u,Ee[c=f.toLowerCase()]=a;for(var p in u)Ee[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Ee[f+"."+p]=u[p]}),u},Ay=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Tp=function o(t,n,a){var s=n>=1?n:1,u=(a||(t?.3:.45))/(n<1?n:1),c=u/Mm*(Math.asin(1/s)||0),f=function(_){return _===1?1:s*Math.pow(2,-10*_)*CR((_-c)*u)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:Ay(f);return u=Mm/u,p.config=function(d,_){return o(t,d,_)},p},Ap=function o(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},s=t==="out"?a:t==="in"?function(u){return 1-a(1-u)}:Ay(a);return s.config=function(u){return o(t,u)},s};oi("Linear,Quad,Cubic,Quart,Quint,Strong",function(o,t){var n=t<5?t+1:t;Os(o+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Ee.Linear.easeNone=Ee.none=Ee.Linear.easeIn;Os("Elastic",Tp("in"),Tp("out"),Tp());(function(o,t){var n=1/t,a=2*n,s=2.5*n,u=function(f){return f<n?o*f*f:f<a?o*Math.pow(f-1.5/t,2)+.75:f<s?o*(f-=2.25/t)*f+.9375:o*Math.pow(f-2.625/t,2)+.984375};Os("Bounce",function(c){return 1-u(1-c)},u)})(7.5625,2.75);Os("Expo",function(o){return Math.pow(2,10*(o-1))*o+o*o*o*o*o*o*(1-o)});Os("Circ",function(o){return-(KS(1-o*o)-1)});Os("Sine",function(o){return o===1?1:-RR(o*TR)+1});Os("Back",Ap("in"),Ap("out"),Ap());Ee.SteppedEase=Ee.steps=Ci.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,s=t+(n?0:1),u=n?1:0,c=1-qe;return function(f){return((s*yu(0,c,f)|0)+u)*a}}};Wo.ease=Ee["quad.out"];oi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(o){return e0+=o+","+o+"Params,"});var Ry=function(t,n){this.id=AR++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:ay,this.set=n?n.getSetter:o0},pu=(function(){function o(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Yo(this,+n.duration,1,1),this.data=n.data,$e&&(this._ctx=$e,$e.data.push(this)),du||Ei.wake()}var t=o.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Yo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,s){if(Zo(),!arguments.length)return this._tTime;var u=this._dp;if(u&&u.smoothChildTiming&&this._ts){for(Lf(this,a),!u._dp||u.parent||uy(u,this);u&&u.parent;)u.parent._time!==u._start+(u._ts>=0?u._tTime/u._ts:(u.totalDuration()-u._tTime)/-u._ts)&&u.totalTime(u._tTime,!0),u=u.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&da(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===qe||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),ry(this,a,s)),this},t.time=function(a,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+$x(this))%(this._dur+this._rDelay)||(a?this._dur:0),s):this._time},t.totalProgress=function(a,s){return arguments.length?this.totalTime(this.totalDuration()*a,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+$x(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,s){var u=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*u,s):this._repeat?jo(this._tTime,u)+1:1},t.timeScale=function(a,s){if(!arguments.length)return this._rts===-qe?0:this._rts;if(this._rts===a)return this;var u=this.parent&&this._ts?Ef(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-qe?0:this._rts,this.totalTime(yu(-Math.abs(this._delay),this.totalDuration(),u),s!==!1),Nf(this),IR(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Zo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==qe&&(this._tTime-=qe)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=en(a);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&da(s,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(si(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var s=this.parent||this._dp;return s?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ef(s.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=OR);var s=Fn;return Fn=a,i0(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Fn=s,this},t.globalTime=function(a){for(var s=this,u=arguments.length?a:s.rawTime();s;)u=s._start+u/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(a):u},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,tS(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var s=this._time;return this._rDelay=a,tS(this),s?this.time(s):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,s){return this.totalTime(Bi(this,a),si(s))},t.restart=function(a,s){return this.play().totalTime(a?-this._delay:0,si(s)),this._dur||(this._zTime=-qe),this},t.play=function(a,s){return a!=null&&this.seek(a,s),this.reversed(!1).paused(!1)},t.reverse=function(a,s){return a!=null&&this.seek(a||this.totalDuration(),s),this.reversed(!0).paused(!1)},t.pause=function(a,s){return a!=null&&this.seek(a,s),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-qe:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-qe,this},t.isActive=function(){var a=this.parent||this._dp,s=this._start,u;return!!(!a||this._ts&&this._initted&&a.isActive()&&(u=a.rawTime(!0))>=s&&u<this.endTime(!0)-qe)},t.eventCallback=function(a,s,u){var c=this.vars;return arguments.length>1?(s?(c[a]=s,u&&(c[a+"Params"]=u),a==="onUpdate"&&(this._onUpdate=s)):delete c[a],this):c[a]},t.then=function(a){var s=this,u=s._prom;return new Promise(function(c){var f=ln(a)?a:oy,p=function(){var _=s.then;s.then=null,u&&u(),ln(f)&&(f=f(s))&&(f.then||f===s)&&(s.then=_),c(f),s.then=_};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?p():s._prom=p})},t.kill=function(){nu(this)},o})();wi(pu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-qe,_prom:0,_ps:!1,_rts:1});var Zn=(function(o){ZS(t,o);function t(a,s){var u;return a===void 0&&(a={}),u=o.call(this,a)||this,u.labels={},u.smoothChildTiming=!!a.smoothChildTiming,u.autoRemoveChildren=!!a.autoRemoveChildren,u._sort=si(a.sortChildren),nn&&da(a.parent||nn,ja(u),s),a.reversed&&u.reverse(),a.paused&&u.paused(!0),a.scrollTrigger&&cy(ja(u),a.scrollTrigger),u}var n=t.prototype;return n.to=function(s,u,c){return ru(0,arguments,this),this},n.from=function(s,u,c){return ru(1,arguments,this),this},n.fromTo=function(s,u,c,f){return ru(2,arguments,this),this},n.set=function(s,u,c){return u.duration=0,u.parent=this,au(u).repeatDelay||(u.repeat=0),u.immediateRender=!!u.immediateRender,new yn(s,u,Bi(this,c),1),this},n.call=function(s,u,c){return da(this,yn.delayedCall(0,s,u),c)},n.staggerTo=function(s,u,c,f,p,d,_){return c.duration=u,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new yn(s,c,Bi(this,p)),this},n.staggerFrom=function(s,u,c,f,p,d,_){return c.runBackwards=1,au(c).immediateRender=si(c.immediateRender),this.staggerTo(s,u,c,f,p,d,_)},n.staggerFromTo=function(s,u,c,f,p,d,_,v){return f.startAt=c,au(f).immediateRender=si(f.immediateRender),this.staggerTo(s,u,f,p,d,_,v)},n.render=function(s,u,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=s<=0?0:en(s),v=this._zTime<0!=s<0&&(this._initted||!d),g,S,M,E,x,y,R,U,w,O,P,L;if(this!==nn&&_>p&&s>=0&&(_=p),_!==this._tTime||c||v){if(f!==this._time&&d&&(_+=this._time-f,s+=this._time-f),g=_,w=this._start,U=this._ts,y=!U,v&&(d||(f=this._zTime),(s||!u)&&(this._zTime=s)),this._repeat){if(P=this._yoyo,x=d+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(x*100+s,u,c);if(g=en(_%x),_===p?(E=this._repeat,g=d):(O=en(_/x),E=~~O,E&&E===O&&(g=d,E--),g>d&&(g=d)),O=jo(this._tTime,x),!f&&this._tTime&&O!==E&&this._tTime-O*x-this._dur<=0&&(O=E),P&&E&1&&(g=d-g,L=1),E!==O&&!this._lock){var T=P&&O&1,C=T===(P&&E&1);if(E<O&&(T=!T),f=T?0:_%d?d:_,this._lock=1,this.render(f||(L?0:en(E*x)),u,!d)._lock=0,this._tTime=_,!u&&this.parent&&bi(this,"onRepeat"),this.vars.repeatRefresh&&!L&&(this.invalidate()._lock=1,O=E),f&&f!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,C&&(this._lock=2,f=T?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!L&&this.invalidate()),this._lock=0,!this._ts&&!y)return this;Ty(this,L)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(R=VR(this,en(f),en(g)),R&&(_-=g-(g=R._start))),this._tTime=_,this._time=g,this._act=!U,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,f=0),!f&&_&&d&&!u&&!O&&(bi(this,"onStart"),this._tTime!==_))return this;if(g>=f&&s>=0)for(S=this._first;S;){if(M=S._next,(S._act||g>=S._start)&&S._ts&&R!==S){if(S.parent!==this)return this.render(s,u,c);if(S.render(S._ts>0?(g-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(g-S._start)*S._ts,u,c),g!==this._time||!this._ts&&!y){R=0,M&&(_+=this._zTime=-qe);break}}S=M}else{S=this._last;for(var $=s<0?s:g;S;){if(M=S._prev,(S._act||$<=S._end)&&S._ts&&R!==S){if(S.parent!==this)return this.render(s,u,c);if(S.render(S._ts>0?($-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+($-S._start)*S._ts,u,c||Fn&&i0(S)),g!==this._time||!this._ts&&!y){R=0,M&&(_+=this._zTime=$?-qe:qe);break}}S=M}}if(R&&!u&&(this.pause(),R.render(g>=f?0:-qe)._zTime=g>=f?1:-1,this._ts))return this._start=w,Nf(this),this.render(s,u,c);this._onUpdate&&!u&&bi(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(w===this._start||Math.abs(U)!==Math.abs(this._ts))&&(this._lock||((s||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&qr(this,1),!u&&!(s<0&&!f)&&(_||f||!p)&&(bi(this,_===p&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(s,u){var c=this;if(ir(u)||(u=Bi(this,u,s)),!(s instanceof pu)){if(Vn(s))return s.forEach(function(f){return c.add(f,u)}),this;if(Dn(s))return this.addLabel(s,u);if(ln(s))s=yn.delayedCall(0,s);else return this}return this!==s?da(this,s,u):this},n.getChildren=function(s,u,c,f){s===void 0&&(s=!0),u===void 0&&(u=!0),c===void 0&&(c=!0),f===void 0&&(f=-Vi);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof yn?u&&p.push(d):(c&&p.push(d),s&&p.push.apply(p,d.getChildren(!0,u,c)))),d=d._next;return p},n.getById=function(s){for(var u=this.getChildren(1,1,1),c=u.length;c--;)if(u[c].vars.id===s)return u[c]},n.remove=function(s){return Dn(s)?this.removeLabel(s):ln(s)?this.killTweensOf(s):(s.parent===this&&Uf(this,s),s===this._recent&&(this._recent=this._last),Ds(this))},n.totalTime=function(s,u){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(Ei.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),o.prototype.totalTime.call(this,s,u),this._forcing=0,this):this._tTime},n.addLabel=function(s,u){return this.labels[s]=Bi(this,u),this},n.removeLabel=function(s){return delete this.labels[s],this},n.addPause=function(s,u,c){var f=yn.delayedCall(0,u||fu,c);return f.data="isPause",this._hasPause=1,da(this,f,Bi(this,s))},n.removePause=function(s){var u=this._first;for(s=Bi(this,s);u;)u._start===s&&u.data==="isPause"&&qr(u),u=u._next},n.killTweensOf=function(s,u,c){for(var f=this.getTweensOf(s,c),p=f.length;p--;)Hr!==f[p]&&f[p].kill(s,u);return this},n.getTweensOf=function(s,u){for(var c=[],f=ki(s),p=this._first,d=ir(u),_;p;)p instanceof yn?PR(p._targets,f)&&(d?(!Hr||p._initted&&p._ts)&&p.globalTime(0)<=u&&p.globalTime(p.totalDuration())>u:!u||p.isActive())&&c.push(p):(_=p.getTweensOf(f,u)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(s,u){u=u||{};var c=this,f=Bi(c,s),p=u,d=p.startAt,_=p.onStart,v=p.onStartParams,g=p.immediateRender,S,M=yn.to(c,wi({ease:u.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:u.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||qe,onStart:function(){if(c.pause(),!S){var x=u.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());M._dur!==x&&Yo(M,x,0,1).render(M._time,!0,!0),S=1}_&&_.apply(M,v||[])}},u));return g?M.render(0):M},n.tweenFromTo=function(s,u,c){return this.tweenTo(u,wi({startAt:{time:Bi(this,s)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(s){return s===void 0&&(s=this._time),eS(this,Bi(this,s))},n.previousLabel=function(s){return s===void 0&&(s=this._time),eS(this,Bi(this,s),1)},n.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+qe)},n.shiftChildren=function(s,u,c){c===void 0&&(c=0);var f=this._first,p=this.labels,d;for(s=en(s);f;)f._start>=c&&(f._start+=s,f._end+=s),f=f._next;if(u)for(d in p)p[d]>=c&&(p[d]+=s);return Ds(this)},n.invalidate=function(s){var u=this._first;for(this._lock=0;u;)u.invalidate(s),u=u._next;return o.prototype.invalidate.call(this,s)},n.clear=function(s){s===void 0&&(s=!0);for(var u=this._first,c;u;)c=u._next,this.remove(u),u=c;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),Ds(this)},n.totalDuration=function(s){var u=0,c=this,f=c._last,p=Vi,d,_,v;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-s:s));if(c._dirty){for(v=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,da(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(u-=_,(!v&&!c._dp||v&&v.smoothChildTiming)&&(c._start+=en(_/c._ts),c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>u&&f._ts&&(u=f._end),f=d;Yo(c,c===nn&&c._time>u?c._time:u,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(s){if(nn._ts&&(ry(nn,Ef(s,nn)),iy=Ei.frame),Ei.frame>=Qx){Qx+=Ri.autoSleep||120;var u=nn._first;if((!u||!u._ts)&&Ri.autoSleep&&Ei._listeners.length<2){for(;u&&!u._ts;)u=u._next;u||Ei.sleep()}}},t})(pu);wi(Zn.prototype,{_lock:0,_hasPause:0,_forcing:0});var aC=function(t,n,a,s,u,c,f){var p=new li(this._pt,t,n,0,1,Ly,null,u),d=0,_=0,v,g,S,M,E,x,y,R;for(p.b=a,p.e=s,a+="",s+="",(y=~s.indexOf("random("))&&(s=hu(s)),c&&(R=[a,s],c(R,t,n),a=R[0],s=R[1]),g=a.match(Mp)||[];v=Mp.exec(s);)M=v[0],E=s.substring(d,v.index),S?S=(S+1)%5:E.substr(-5)==="rgba("&&(S=1),M!==g[_++]&&(x=parseFloat(g[_-1])||0,p._pt={_next:p._pt,p:E||_===1?E:",",s:x,c:M.charAt(1)==="="?zo(x,M)-x:parseFloat(M)-x,m:S&&S<4?Math.round:0},d=Mp.lastIndex);return p.c=d<s.length?s.substring(d,s.length):"",p.fp=f,($S.test(s)||y)&&(p.e=0),this._pt=p,p},a0=function(t,n,a,s,u,c,f,p,d,_){ln(s)&&(s=s(u||0,t,c));var v=t[n],g=a!=="get"?a:ln(v)?d?t[n.indexOf("set")||!ln(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():v,S=ln(v)?d?uC:Uy:s0,M;if(Dn(s)&&(~s.indexOf("random(")&&(s=hu(s)),s.charAt(1)==="="&&(M=zo(g,s)+(Hn(g)||0),(M||M===0)&&(s=M))),!_||g!==s||Dm)return!isNaN(g*s)&&s!==""?(M=new li(this._pt,t,n,+g||0,s-(g||0),typeof v=="boolean"?fC:Ny,0,S),d&&(M.fp=d),f&&M.modifier(f,this,t),this._pt=M):(!v&&!(n in t)&&$m(n,s),aC.call(this,t,n,g,s,S,p||Ri.stringFilter,d))},rC=function(t,n,a,s,u){if(ln(t)&&(t=su(t,u,n,a,s)),!Ma(t)||t.style&&t.nodeType||Vn(t)||QS(t))return Dn(t)?su(t,u,n,a,s):t;var c={},f;for(f in t)c[f]=su(t[f],u,n,a,s);return c},Cy=function(t,n,a,s,u,c){var f,p,d,_;if(Mi[t]&&(f=new Mi[t]).init(u,f.rawVars?n[t]:rC(n[t],s,u,c,a),a,s,c)!==!1&&(a._pt=p=new li(a._pt,u,t,0,1,f.render,f,0,f.priority),a!==Oo))for(d=a._ptLookup[a._targets.indexOf(u)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Hr,Dm,r0=function o(t,n,a){var s=t.vars,u=s.ease,c=s.startAt,f=s.immediateRender,p=s.lazy,d=s.onUpdate,_=s.runBackwards,v=s.yoyoEase,g=s.keyframes,S=s.autoRevert,M=t._dur,E=t._startAt,x=t._targets,y=t.parent,R=y&&y.data==="nested"?y.vars.targets:x,U=t._overwrite==="auto"&&!Zm,w=t.timeline,O,P,L,T,C,$,G,Y,Q,it,Z,F,H;if(w&&(!g||!u)&&(u="none"),t._ease=Us(u,Wo.ease),t._yEase=v?by(Us(v===!0?u:v,Wo.ease)):0,v&&t._yoyo&&!t._repeat&&(v=t._yEase,t._yEase=t._ease,t._ease=v),t._from=!w&&!!s.runBackwards,!w||g&&!s.stagger){if(Y=x[0]?ws(x[0]).harness:0,F=Y&&s[Y.prop],O=Mf(s,t0),E&&(E._zTime<0&&E.progress(1),n<0&&_&&f&&!S?E.render(-1,!0):E.revert(_&&M?df:LR),E._lazy=0),c){if(qr(t._startAt=yn.set(x,wi({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!E&&si(p),startAt:null,delay:0,onUpdate:d&&function(){return bi(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Fn||!f&&!S)&&t._startAt.revert(df),f&&M&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&M&&!E){if(n&&(f=!1),L=wi({overwrite:!1,data:"isFromStart",lazy:f&&!E&&si(p),immediateRender:f,stagger:0,parent:y},O),F&&(L[Y.prop]=F),qr(t._startAt=yn.set(x,L)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Fn?t._startAt.revert(df):t._startAt.render(-1,!0)),t._zTime=n,!f)o(t._startAt,qe,qe);else if(!n)return}for(t._pt=t._ptCache=0,p=M&&si(p)||p&&!M,P=0;P<x.length;P++){if(C=x[P],G=C._gsap||n0(x)[P]._gsap,t._ptLookup[P]=it={},bm[G.id]&&kr.length&&yf(),Z=R===x?P:R.indexOf(C),Y&&(Q=new Y).init(C,F||O,t,Z,R)!==!1&&(t._pt=T=new li(t._pt,C,Q.name,0,1,Q.render,Q,0,Q.priority),Q._props.forEach(function(ot){it[ot]=T}),Q.priority&&($=1)),!Y||F)for(L in O)Mi[L]&&(Q=Cy(L,O,t,Z,C,R))?Q.priority&&($=1):it[L]=T=a0.call(t,C,L,"get",O[L],Z,R,0,s.stringFilter);t._op&&t._op[P]&&t.kill(C,t._op[P]),U&&t._pt&&(Hr=t,nn.killTweensOf(C,it,t.globalTime(n)),H=!t.parent,Hr=0),t._pt&&p&&(bm[G.id]=1)}$&&Oy(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!H,g&&n<=0&&w.render(Vi,!0,!0)},sC=function(t,n,a,s,u,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,v,g,S;if(!d)for(d=t._ptCache[n]=[],g=t._ptLookup,S=t._targets.length;S--;){if(_=g[S][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return Dm=1,t.vars[n]="+=0",r0(t,f),Dm=0,p?cu(n+" not eligible for reset"):1;d.push(_)}for(S=d.length;S--;)v=d[S],_=v._pt||v,_.s=(s||s===0)&&!u?s:_.s+(s||0)+c*_.c,_.c=a-_.s,v.e&&(v.e=fn(a)+Hn(v.e)),v.b&&(v.b=_.s+Hn(v.b))},oC=function(t,n){var a=t[0]?ws(t[0]).harness:0,s=a&&a.aliases,u,c,f,p;if(!s)return n;u=qo({},n);for(c in s)if(c in u)for(p=s[c].split(","),f=p.length;f--;)u[p[f]]=u[c];return u},lC=function(t,n,a,s){var u=n.ease||s||"power1.inOut",c,f;if(Vn(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:u})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:u})},su=function(t,n,a,s,u){return ln(t)?t.call(n,a,s,u):Dn(t)&&~t.indexOf("random(")?hu(t):t},wy=e0+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Dy={};oi(wy+",id,stagger,delay,duration,paused,scrollTrigger",function(o){return Dy[o]=1});var yn=(function(o){ZS(t,o);function t(a,s,u,c){var f;typeof s=="number"&&(u.duration=s,s=u,u=null),f=o.call(this,c?s:au(s))||this;var p=f.vars,d=p.duration,_=p.delay,v=p.immediateRender,g=p.stagger,S=p.overwrite,M=p.keyframes,E=p.defaults,x=p.scrollTrigger,y=p.yoyoEase,R=s.parent||nn,U=(Vn(a)||QS(a)?ir(a[0]):"length"in s)?[a]:ki(a),w,O,P,L,T,C,$,G;if(f._targets=U.length?n0(U):cu("GSAP target "+a+" not found. https://gsap.com",!Ri.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=S,M||g||rf(d)||rf(_)){if(s=f.vars,w=f.timeline=new Zn({data:"nested",defaults:E||{},targets:R&&R.data==="nested"?R.vars.targets:U}),w.kill(),w.parent=w._dp=ja(f),w._start=0,g||rf(d)||rf(_)){if(L=U.length,$=g&&py(g),Ma(g))for(T in g)~wy.indexOf(T)&&(G||(G={}),G[T]=g[T]);for(O=0;O<L;O++)P=Mf(s,Dy),P.stagger=0,y&&(P.yoyoEase=y),G&&qo(P,G),C=U[O],P.duration=+su(d,ja(f),O,C,U),P.delay=(+su(_,ja(f),O,C,U)||0)-f._delay,!g&&L===1&&P.delay&&(f._delay=_=P.delay,f._start+=_,P.delay=0),w.to(C,P,$?$(O,C,U):0),w._ease=Ee.none;w.duration()?d=_=0:f.timeline=0}else if(M){au(wi(w.vars.defaults,{ease:"none"})),w._ease=Us(M.ease||s.ease||"none");var Y=0,Q,it,Z;if(Vn(M))M.forEach(function(F){return w.to(U,F,">")}),w.duration();else{P={};for(T in M)T==="ease"||T==="easeEach"||lC(T,M[T],P,M.easeEach);for(T in P)for(Q=P[T].sort(function(F,H){return F.t-H.t}),Y=0,O=0;O<Q.length;O++)it=Q[O],Z={ease:it.e,duration:(it.t-(O?Q[O-1].t:0))/100*d},Z[T]=it.v,w.to(U,Z,Y),Y+=Z.duration;w.duration()<d&&w.to({},{duration:d-w.duration()})}}d||f.duration(d=w.duration())}else f.timeline=0;return S===!0&&!Zm&&(Hr=ja(f),nn.killTweensOf(U),Hr=0),da(R,ja(f),u),s.reversed&&f.reverse(),s.paused&&f.paused(!0),(v||!d&&!M&&f._start===en(R._time)&&si(v)&&BR(ja(f))&&R.data!=="nested")&&(f._tTime=-qe,f.render(Math.max(0,-_)||0)),x&&cy(ja(f),x),f}var n=t.prototype;return n.render=function(s,u,c){var f=this._time,p=this._tDur,d=this._dur,_=s<0,v=s>p-qe&&!_?p:s<qe?0:s,g,S,M,E,x,y,R,U,w;if(!d)GR(this,s,u,c);else if(v!==this._tTime||!s||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(g=v,U=this.timeline,this._repeat){if(E=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(E*100+s,u,c);if(g=en(v%E),v===p?(M=this._repeat,g=d):(x=en(v/E),M=~~x,M&&M===x?(g=d,M--):g>d&&(g=d)),y=this._yoyo&&M&1,y&&(w=this._yEase,g=d-g),x=jo(this._tTime,E),g===f&&!c&&this._initted&&M===x)return this._tTime=v,this;M!==x&&(U&&this._yEase&&Ty(U,y),this.vars.repeatRefresh&&!y&&!this._lock&&g!==E&&this._initted&&(this._lock=c=1,this.render(en(E*M),!0).invalidate()._lock=0))}if(!this._initted){if(fy(this,_?s:g,c,u,v))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&M!==x))return this;if(d!==this._dur)return this.render(s,u,c)}if(this._tTime=v,this._time=g,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=R=(w||this._ease)(g/d),this._from&&(this.ratio=R=1-R),!f&&v&&!u&&!x&&(bi(this,"onStart"),this._tTime!==v))return this;for(S=this._pt;S;)S.r(R,S.d),S=S._next;U&&U.render(s<0?s:U._dur*U._ease(g/this._dur),u,c)||this._startAt&&(this._zTime=s),this._onUpdate&&!u&&(_&&Tm(this,s,u,c),bi(this,"onUpdate")),this._repeat&&M!==x&&this.vars.onRepeat&&!u&&this.parent&&bi(this,"onRepeat"),(v===this._tDur||!v)&&this._tTime===v&&(_&&!this._onUpdate&&Tm(this,s,!0,!0),(s||!d)&&(v===this._tDur&&this._ts>0||!v&&this._ts<0)&&qr(this,1),!u&&!(_&&!f)&&(v||f||y)&&(bi(this,v===p?"onComplete":"onReverseComplete",!0),this._prom&&!(v<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),o.prototype.invalidate.call(this,s)},n.resetTo=function(s,u,c,f,p){du||Ei.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||r0(this,d),_=this._ease(d/this._dur),sC(this,s,u,c,f,_,d,p)?this.resetTo(s,u,c,f,1):(Lf(this,0),this.parent||ly(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(s,u){if(u===void 0&&(u="all"),!s&&(!u||u==="all"))return this._lazy=this._pt=0,this.parent?nu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Fn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(s,u,Hr&&Hr.vars.overwrite!==!0)._first||nu(this),this.parent&&c!==this.timeline.totalDuration()&&Yo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=s?ki(s):f,d=this._ptLookup,_=this._pt,v,g,S,M,E,x,y;if((!u||u==="all")&&zR(f,p))return u==="all"&&(this._pt=0),nu(this);for(v=this._op=this._op||[],u!=="all"&&(Dn(u)&&(E={},oi(u,function(R){return E[R]=1}),u=E),u=oC(f,u)),y=f.length;y--;)if(~p.indexOf(f[y])){g=d[y],u==="all"?(v[y]=u,M=g,S={}):(S=v[y]=v[y]||{},M=u);for(E in M)x=g&&g[E],x&&((!("kill"in x.d)||x.d.kill(E)===!0)&&Uf(this,x,"_pt"),delete g[E]),S!=="all"&&(S[E]=1)}return this._initted&&!this._pt&&_&&nu(this),this},t.to=function(s,u){return new t(s,u,arguments[2])},t.from=function(s,u){return ru(1,arguments)},t.delayedCall=function(s,u,c,f){return new t(u,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:u,onReverseComplete:u,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(s,u,c){return ru(2,arguments)},t.set=function(s,u){return u.duration=0,u.repeatDelay||(u.repeat=0),new t(s,u)},t.killTweensOf=function(s,u,c){return nn.killTweensOf(s,u,c)},t})(pu);wi(yn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});oi("staggerTo,staggerFrom,staggerFromTo",function(o){yn[o]=function(){var t=new Zn,n=Rm.call(arguments,0);return n.splice(o==="staggerFromTo"?5:4,0,0),t[o].apply(t,n)}});var s0=function(t,n,a){return t[n]=a},Uy=function(t,n,a){return t[n](a)},uC=function(t,n,a,s){return t[n](s.fp,a)},cC=function(t,n,a){return t.setAttribute(n,a)},o0=function(t,n){return ln(t[n])?Uy:Km(t[n])&&t.setAttribute?cC:s0},Ny=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},fC=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},Ly=function(t,n){var a=n._pt,s="";if(!t&&n.b)s=n.b;else if(t===1&&n.e)s=n.e;else{for(;a;)s=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+s,a=a._next;s+=n.c}n.set(n.t,n.p,s,n)},l0=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},hC=function(t,n,a,s){for(var u=this._pt,c;u;)c=u._next,u.p===s&&u.modifier(t,n,a),u=c},dC=function(t){for(var n=this._pt,a,s;n;)s=n._next,n.p===t&&!n.op||n.op===t?Uf(this,n,"_pt"):n.dep||(a=1),n=s;return!a},pC=function(t,n,a,s){s.mSet(t,n,s.m.call(s.tween,a,s.mt),s)},Oy=function(t){for(var n=t._pt,a,s,u,c;n;){for(a=n._next,s=u;s&&s.pr>n.pr;)s=s._next;(n._prev=s?s._prev:c)?n._prev._next=n:u=n,(n._next=s)?s._prev=n:c=n,n=a}t._pt=u},li=(function(){function o(n,a,s,u,c,f,p,d,_){this.t=a,this.s=u,this.c=c,this.p=s,this.r=f||Ny,this.d=p||this,this.set=d||s0,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=o.prototype;return t.modifier=function(a,s,u){this.mSet=this.mSet||this.set,this.set=pC,this.m=a,this.mt=u,this.tween=s},o})();oi(e0+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(o){return t0[o]=1});Ci.TweenMax=Ci.TweenLite=yn;Ci.TimelineLite=Ci.TimelineMax=Zn;nn=new Zn({sortChildren:!1,defaults:Wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ri.stringFilter=Ey;var Ns=[],mf={},mC=[],iS=0,_C=0,Rp=function(t){return(mf[t]||mC).map(function(n){return n()})},Um=function(){var t=Date.now(),n=[];t-iS>2&&(Rp("matchMediaInit"),Ns.forEach(function(a){var s=a.queries,u=a.conditions,c,f,p,d;for(f in s)c=fa.matchMedia(s[f]).matches,c&&(p=1),c!==u[f]&&(u[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),Rp("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(s){return a.add(null,s)})}),iS=t,Rp("matchMedia"))},Py=(function(){function o(n,a){this.selector=a&&Cm(a),this.data=[],this._r=[],this.isReverted=!1,this.id=_C++,n&&this.add(n)}var t=o.prototype;return t.add=function(a,s,u){ln(a)&&(u=s,s=a,a=ln);var c=this,f=function(){var d=$e,_=c.selector,v;return d&&d!==c&&d.data.push(c),u&&(c.selector=Cm(u)),$e=c,v=s.apply(c,arguments),ln(v)&&c._r.push(v),$e=d,c.selector=_,c.isReverted=!1,v};return c.last=f,a===ln?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var s=$e;$e=null,a(this),$e=s},t.getTweens=function(){var a=[];return this.data.forEach(function(s){return s instanceof o?a.push.apply(a,s.getTweens()):s instanceof yn&&!(s.parent&&s.parent.data==="nested")&&a.push(s)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,s){var u=this;if(a?(function(){for(var f=u.getTweens(),p=u.data.length,d;p--;)d=u.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,v){return v.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=u.data.length;p--;)d=u.data[p],d instanceof Zn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof yn)&&d.revert&&d.revert(a);u._r.forEach(function(_){return _(a,u)}),u.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),s)for(var c=Ns.length;c--;)Ns[c].id===this.id&&Ns.splice(c,1)},t.revert=function(a){this.kill(a||{})},o})(),gC=(function(){function o(n){this.contexts=[],this.scope=n,$e&&$e.data.push(this)}var t=o.prototype;return t.add=function(a,s,u){Ma(a)||(a={matches:a});var c=new Py(0,u||this.scope),f=c.conditions={},p,d,_;$e&&!c.selector&&(c.selector=$e.selector),this.contexts.push(c),s=c.add("onMatch",s),c.queries=a;for(d in a)d==="all"?_=1:(p=fa.matchMedia(a[d]),p&&(Ns.indexOf(c)<0&&Ns.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(Um):p.addEventListener("change",Um)));return _&&s(c,function(v){return c.add(null,v)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(s){return s.kill(a,!0)})},o})(),bf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(s){return Sy(s)})},timeline:function(t){return new Zn(t)},getTweensOf:function(t,n){return nn.getTweensOf(t,n)},getProperty:function(t,n,a,s){Dn(t)&&(t=ki(t)[0]);var u=ws(t||{}).get,c=a?oy:sy;return a==="native"&&(a=""),t&&(n?c((Mi[n]&&Mi[n].get||u)(t,n,a,s)):function(f,p,d){return c((Mi[f]&&Mi[f].get||u)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=ki(t),t.length>1){var s=t.map(function(_){return ci.quickSetter(_,n,a)}),u=s.length;return function(_){for(var v=u;v--;)s[v](_)}}t=t[0]||{};var c=Mi[n],f=ws(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var v=new c;Oo._pt=0,v.init(t,a?_+a:_,Oo,0,[t]),v.render(1,v),Oo._pt&&l0(1,Oo)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var s,u=ci.to(t,wi((s={},s[n]="+=0.1",s.paused=!0,s.stagger=0,s),a||{})),c=function(p,d,_){return u.resetTo(n,p,d,_)};return c.tween=u,c},isTweening:function(t){return nn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Us(t.ease,Wo.ease)),Jx(Wo,t||{})},config:function(t){return Jx(Ri,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,s=t.plugins,u=t.defaults,c=t.extendTimeline;(s||"").split(",").forEach(function(f){return f&&!Mi[f]&&!Ci[f]&&cu(n+" effect requires "+f+" plugin.")}),Ep[n]=function(f,p,d){return a(ki(f),wi(p||{},u),d)},c&&(Zn.prototype[n]=function(f,p,d){return this.add(Ep[n](f,Ma(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Ee[t]=Us(n)},parseEase:function(t,n){return arguments.length?Us(t,n):Ee},getById:function(t){return nn.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Zn(t),s,u;for(a.smoothChildTiming=si(t.smoothChildTiming),nn.remove(a),a._dp=0,a._time=a._tTime=nn._time,s=nn._first;s;)u=s._next,(n||!(!s._dur&&s instanceof yn&&s.vars.onComplete===s._targets[0]))&&da(a,s,s._start-s._delay),s=u;return da(nn,a,0),a},context:function(t,n){return t?new Py(t,n):$e},matchMedia:function(t){return new gC(t)},matchMediaRefresh:function(){return Ns.forEach(function(t){var n=t.conditions,a,s;for(s in n)n[s]&&(n[s]=!1,a=1);a&&t.revert()})||Um()},addEventListener:function(t,n){var a=mf[t]||(mf[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=mf[t],s=a&&a.indexOf(n);s>=0&&a.splice(s,1)},utils:{wrap:ZR,wrapYoyo:KR,distribute:py,random:_y,snap:my,normalize:YR,getUnit:Hn,clamp:XR,splitColor:yy,toArray:ki,selector:Cm,mapRange:vy,pipe:qR,unitize:jR,interpolate:QR,shuffle:dy},install:ey,effects:Ep,ticker:Ei,updateRoot:Zn.updateRoot,plugins:Mi,globalTimeline:nn,core:{PropTween:li,globals:ny,Tween:yn,Timeline:Zn,Animation:pu,getCache:ws,_removeLinkedListItem:Uf,reverting:function(){return Fn},context:function(t){return t&&$e&&($e.data.push(t),t._ctx=$e),$e},suppressOverwrites:function(t){return Zm=t}}};oi("to,from,fromTo,delayedCall,set,killTweensOf",function(o){return bf[o]=yn[o]});Ei.add(Zn.updateRoot);Oo=bf.to({},{duration:0});var vC=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},xC=function(t,n){var a=t._targets,s,u,c;for(s in n)for(u=a.length;u--;)c=t._ptLookup[u][s],c&&(c=c.d)&&(c._pt&&(c=vC(c,s)),c&&c.modifier&&c.modifier(n[s],t,a[u],s))},Cp=function(t,n){return{name:t,headless:1,rawVars:1,init:function(s,u,c){c._onInit=function(f){var p,d;if(Dn(u)&&(p={},oi(u,function(_){return p[_]=1}),u=p),n){p={};for(d in u)p[d]=n(u[d]);u=p}xC(f,u)}}}},ci=bf.registerPlugin({name:"attr",init:function(t,n,a,s,u){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],s,u,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)Fn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},Cp("roundProps",wm),Cp("modifiers"),Cp("snap",my))||bf;yn.version=Zn.version=ci.version="3.14.2";ty=1;Qm()&&Zo();Ee.Power0;Ee.Power1;Ee.Power2;Ee.Power3;Ee.Power4;Ee.Linear;Ee.Quad;Ee.Cubic;Ee.Quart;Ee.Quint;Ee.Strong;Ee.Elastic;Ee.Back;Ee.SteppedEase;Ee.Bounce;Ee.Sine;Ee.Expo;Ee.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var aS,Gr,Io,u0,Cs,rS,c0,SC=function(){return typeof window<"u"},ar={},Es=180/Math.PI,Bo=Math.PI/180,No=Math.atan2,sS=1e8,f0=/([A-Z])/g,yC=/(left|right|width|margin|padding|x)/i,MC=/[\s,\(]\S/,_a={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Nm=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},EC=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},bC=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},TC=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},AC=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},Fy=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},zy=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},RC=function(t,n,a){return t.style[n]=a},CC=function(t,n,a){return t.style.setProperty(n,a)},wC=function(t,n,a){return t._gsap[n]=a},DC=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},UC=function(t,n,a,s,u){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(u,c)},NC=function(t,n,a,s,u){var c=t._gsap;c[n]=a,c.renderTransform(u,c)},an="transform",ui=an+"Origin",LC=function o(t,n){var a=this,s=this.target,u=s.style,c=s._gsap;if(t in ar&&u){if(this.tfm=this.tfm||{},t!=="transform")t=_a[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=Ya(s,f)}):this.tfm[t]=c.x?c[t]:Ya(s,t),t===ui&&(this.tfm.zOrigin=c.zOrigin);else return _a.transform.split(",").forEach(function(f){return o.call(a,f,n)});if(this.props.indexOf(an)>=0)return;c.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ui,n,"")),t=an}(u||n)&&this.props.push(t,n,u[t])},Iy=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},OC=function(){var t=this.props,n=this.target,a=n.style,s=n._gsap,u,c;for(u=0;u<t.length;u+=3)t[u+1]?t[u+1]===2?n[t[u]](t[u+2]):n[t[u]]=t[u+2]:t[u+2]?a[t[u]]=t[u+2]:a.removeProperty(t[u].substr(0,2)==="--"?t[u]:t[u].replace(f0,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)s[c]=this.tfm[c];s.svg&&(s.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),u=c0(),(!u||!u.isStart)&&!a[an]&&(Iy(a),s.zOrigin&&a[ui]&&(a[ui]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},By=function(t,n){var a={target:t,props:[],revert:OC,save:LC};return t._gsap||ci.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(s){return a.save(s)}),a},Hy,Lm=function(t,n){var a=Gr.createElementNS?Gr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Gr.createElement(t);return a&&a.style?a:Gr.createElement(t)},Ti=function o(t,n,a){var s=getComputedStyle(t);return s[n]||s.getPropertyValue(n.replace(f0,"-$1").toLowerCase())||s.getPropertyValue(n)||!a&&o(t,Ko(n)||n,1)||""},oS="O,Moz,ms,Ms,Webkit".split(","),Ko=function(t,n,a){var s=n||Cs,u=s.style,c=5;if(t in u&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(oS[c]+t in u););return c<0?null:(c===3?"ms":c>=0?oS[c]:"")+t},Om=function(){SC()&&window.document&&(aS=window,Gr=aS.document,Io=Gr.documentElement,Cs=Lm("div")||{style:{}},Lm("div"),an=Ko(an),ui=an+"Origin",Cs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Hy=!!Ko("perspective"),c0=ci.core.reverting,u0=1)},lS=function(t){var n=t.ownerSVGElement,a=Lm("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=t.cloneNode(!0),u;s.style.display="block",a.appendChild(s),Io.appendChild(a);try{u=s.getBBox()}catch{}return a.removeChild(s),Io.removeChild(a),u},uS=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},Gy=function(t){var n,a;try{n=t.getBBox()}catch{n=lS(t),a=1}return n&&(n.width||n.height)||a||(n=lS(t)),n&&!n.width&&!n.x&&!n.y?{x:+uS(t,["x","cx","x1"])||0,y:+uS(t,["y","cy","y1"])||0,width:0,height:0}:n},Vy=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Gy(t))},jr=function(t,n){if(n){var a=t.style,s;n in ar&&n!==ui&&(n=an),a.removeProperty?(s=n.substr(0,2),(s==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(s==="--"?n:n.replace(f0,"-$1").toLowerCase())):a.removeAttribute(n)}},Vr=function(t,n,a,s,u,c){var f=new li(t._pt,n,a,0,1,c?zy:Fy);return t._pt=f,f.b=s,f.e=u,t._props.push(a),f},cS={deg:1,rad:1,turn:1},PC={grid:1,flex:1},Yr=function o(t,n,a,s){var u=parseFloat(a)||0,c=(a+"").trim().substr((u+"").length)||"px",f=Cs.style,p=yC.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),v=100,g=s==="px",S=s==="%",M,E,x,y;if(s===c||!u||cS[s]||cS[c])return u;if(c!=="px"&&!g&&(u=o(t,n,a,"px")),y=t.getCTM&&Vy(t),(S||c==="%")&&(ar[n]||~n.indexOf("adius")))return M=y?t.getBBox()[p?"width":"height"]:t[_],fn(S?u/M*v:u/100*M);if(f[p?"width":"height"]=v+(g?c:s),E=s!=="rem"&&~n.indexOf("adius")||s==="em"&&t.appendChild&&!d?t:t.parentNode,y&&(E=(t.ownerSVGElement||{}).parentNode),(!E||E===Gr||!E.appendChild)&&(E=Gr.body),x=E._gsap,x&&S&&x.width&&p&&x.time===Ei.time&&!x.uncache)return fn(u/x.width*v);if(S&&(n==="height"||n==="width")){var R=t.style[n];t.style[n]=v+s,M=t[_],R?t.style[n]=R:jr(t,n)}else(S||c==="%")&&!PC[Ti(E,"display")]&&(f.position=Ti(t,"position")),E===t&&(f.position="static"),E.appendChild(Cs),M=Cs[_],E.removeChild(Cs),f.position="absolute";return p&&S&&(x=ws(E),x.time=Ei.time,x.width=E[_]),fn(g?M*u/v:M&&u?v/M*u:0)},Ya=function(t,n,a,s){var u;return u0||Om(),n in _a&&n!=="transform"&&(n=_a[n],~n.indexOf(",")&&(n=n.split(",")[0])),ar[n]&&n!=="transform"?(u=_u(t,s),u=n!=="transformOrigin"?u[n]:u.svg?u.origin:Af(Ti(t,ui))+" "+u.zOrigin+"px"):(u=t.style[n],(!u||u==="auto"||s||~(u+"").indexOf("calc("))&&(u=Tf[n]&&Tf[n](t,n,a)||Ti(t,n)||ay(t,n)||(n==="opacity"?1:0))),a&&!~(u+"").trim().indexOf(" ")?Yr(t,n,u,a)+a:u},FC=function(t,n,a,s){if(!a||a==="none"){var u=Ko(n,t,1),c=u&&Ti(t,u,1);c&&c!==a?(n=u,a=c):n==="borderColor"&&(a=Ti(t,"borderTopColor"))}var f=new li(this._pt,t.style,n,0,1,Ly),p=0,d=0,_,v,g,S,M,E,x,y,R,U,w,O;if(f.b=a,f.e=s,a+="",s+="",s.substring(0,6)==="var(--"&&(s=Ti(t,s.substring(4,s.indexOf(")")))),s==="auto"&&(E=t.style[n],t.style[n]=s,s=Ti(t,n)||s,E?t.style[n]=E:jr(t,n)),_=[a,s],Ey(_),a=_[0],s=_[1],g=a.match(Lo)||[],O=s.match(Lo)||[],O.length){for(;v=Lo.exec(s);)x=v[0],R=s.substring(p,v.index),M?M=(M+1)%5:(R.substr(-5)==="rgba("||R.substr(-5)==="hsla(")&&(M=1),x!==(E=g[d++]||"")&&(S=parseFloat(E)||0,w=E.substr((S+"").length),x.charAt(1)==="="&&(x=zo(S,x)+w),y=parseFloat(x),U=x.substr((y+"").length),p=Lo.lastIndex-U.length,U||(U=U||Ri.units[n]||w,p===s.length&&(s+=U,f.e+=U)),w!==U&&(S=Yr(t,n,E,U)||0),f._pt={_next:f._pt,p:R||d===1?R:",",s:S,c:y-S,m:M&&M<4||n==="zIndex"?Math.round:0});f.c=p<s.length?s.substring(p,s.length):""}else f.r=n==="display"&&s==="none"?zy:Fy;return $S.test(s)&&(f.e=0),this._pt=f,f},fS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},zC=function(t){var n=t.split(" "),a=n[0],s=n[1]||"50%";return(a==="top"||a==="bottom"||s==="left"||s==="right")&&(t=a,a=s,s=t),n[0]=fS[a]||a,n[1]=fS[s]||s,n.join(" ")},IC=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,s=a.style,u=n.u,c=a._gsap,f,p,d;if(u==="all"||u===!0)s.cssText="",p=1;else for(u=u.split(","),d=u.length;--d>-1;)f=u[d],ar[f]&&(p=1,f=f==="transformOrigin"?ui:an),jr(a,f);p&&(jr(a,an),c&&(c.svg&&a.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",_u(a,1),c.uncache=1,Iy(s)))}},Tf={clearProps:function(t,n,a,s,u){if(u.data!=="isFromStart"){var c=t._pt=new li(t._pt,n,a,0,0,IC);return c.u=s,c.pr=-10,c.tween=u,t._props.push(a),1}}},mu=[1,0,0,1,0,0],ky={},Xy=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},hS=function(t){var n=Ti(t,an);return Xy(n)?mu:n.substr(7).match(JS).map(fn)},h0=function(t,n){var a=t._gsap||ws(t),s=t.style,u=hS(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,u=[p.a,p.b,p.c,p.d,p.e,p.f],u.join(",")==="1,0,0,1,0,0"?mu:u):(u===mu&&!t.offsetParent&&t!==Io&&!a.svg&&(p=s.display,s.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Io.appendChild(t)),u=hS(t),p?s.display=p:jr(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):Io.removeChild(t))),n&&u.length>6?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)},Pm=function(t,n,a,s,u,c){var f=t._gsap,p=u||h0(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,v=f.xOffset||0,g=f.yOffset||0,S=p[0],M=p[1],E=p[2],x=p[3],y=p[4],R=p[5],U=n.split(" "),w=parseFloat(U[0])||0,O=parseFloat(U[1])||0,P,L,T,C;a?p!==mu&&(L=S*x-M*E)&&(T=w*(x/L)+O*(-E/L)+(E*R-x*y)/L,C=w*(-M/L)+O*(S/L)-(S*R-M*y)/L,w=T,O=C):(P=Gy(t),w=P.x+(~U[0].indexOf("%")?w/100*P.width:w),O=P.y+(~(U[1]||U[0]).indexOf("%")?O/100*P.height:O)),s||s!==!1&&f.smooth?(y=w-d,R=O-_,f.xOffset=v+(y*S+R*E)-y,f.yOffset=g+(y*M+R*x)-R):f.xOffset=f.yOffset=0,f.xOrigin=w,f.yOrigin=O,f.smooth=!!s,f.origin=n,f.originIsAbsolute=!!a,t.style[ui]="0px 0px",c&&(Vr(c,f,"xOrigin",d,w),Vr(c,f,"yOrigin",_,O),Vr(c,f,"xOffset",v,f.xOffset),Vr(c,f,"yOffset",g,f.yOffset)),t.setAttribute("data-svg-origin",w+" "+O)},_u=function(t,n){var a=t._gsap||new Ry(t);if("x"in a&&!n&&!a.uncache)return a;var s=t.style,u=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=Ti(t,ui)||"0",_,v,g,S,M,E,x,y,R,U,w,O,P,L,T,C,$,G,Y,Q,it,Z,F,H,ot,ct,St,I,j,mt,Tt,Ut;return _=v=g=E=x=y=R=U=w=0,S=M=1,a.svg=!!(t.getCTM&&Vy(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(s[an]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[an]!=="none"?p[an]:"")),s.scale=s.rotate=s.translate="none"),L=h0(t,a.svg),a.svg&&(a.uncache?(ot=t.getBBox(),d=a.xOrigin-ot.x+"px "+(a.yOrigin-ot.y)+"px",H=""):H=!n&&t.getAttribute("data-svg-origin"),Pm(t,H||d,!!H||a.originIsAbsolute,a.smooth!==!1,L)),O=a.xOrigin||0,P=a.yOrigin||0,L!==mu&&(G=L[0],Y=L[1],Q=L[2],it=L[3],_=Z=L[4],v=F=L[5],L.length===6?(S=Math.sqrt(G*G+Y*Y),M=Math.sqrt(it*it+Q*Q),E=G||Y?No(Y,G)*Es:0,R=Q||it?No(Q,it)*Es+E:0,R&&(M*=Math.abs(Math.cos(R*Bo))),a.svg&&(_-=O-(O*G+P*Q),v-=P-(O*Y+P*it))):(Ut=L[6],mt=L[7],St=L[8],I=L[9],j=L[10],Tt=L[11],_=L[12],v=L[13],g=L[14],T=No(Ut,j),x=T*Es,T&&(C=Math.cos(-T),$=Math.sin(-T),H=Z*C+St*$,ot=F*C+I*$,ct=Ut*C+j*$,St=Z*-$+St*C,I=F*-$+I*C,j=Ut*-$+j*C,Tt=mt*-$+Tt*C,Z=H,F=ot,Ut=ct),T=No(-Q,j),y=T*Es,T&&(C=Math.cos(-T),$=Math.sin(-T),H=G*C-St*$,ot=Y*C-I*$,ct=Q*C-j*$,Tt=it*$+Tt*C,G=H,Y=ot,Q=ct),T=No(Y,G),E=T*Es,T&&(C=Math.cos(T),$=Math.sin(T),H=G*C+Y*$,ot=Z*C+F*$,Y=Y*C-G*$,F=F*C-Z*$,G=H,Z=ot),x&&Math.abs(x)+Math.abs(E)>359.9&&(x=E=0,y=180-y),S=fn(Math.sqrt(G*G+Y*Y+Q*Q)),M=fn(Math.sqrt(F*F+Ut*Ut)),T=No(Z,F),R=Math.abs(T)>2e-4?T*Es:0,w=Tt?1/(Tt<0?-Tt:Tt):0),a.svg&&(H=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!Xy(Ti(t,an)),H&&t.setAttribute("transform",H))),Math.abs(R)>90&&Math.abs(R)<270&&(u?(S*=-1,R+=E<=0?180:-180,E+=E<=0?180:-180):(M*=-1,R+=R<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=v-((a.yPercent=v&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-v)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=g+c,a.scaleX=fn(S),a.scaleY=fn(M),a.rotation=fn(E)+f,a.rotationX=fn(x)+f,a.rotationY=fn(y)+f,a.skewX=R+f,a.skewY=U+f,a.transformPerspective=w+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(s[ui]=Af(d)),a.xOffset=a.yOffset=0,a.force3D=Ri.force3D,a.renderTransform=a.svg?HC:Hy?Wy:BC,a.uncache=0,a},Af=function(t){return(t=t.split(" "))[0]+" "+t[1]},wp=function(t,n,a){var s=Hn(n);return fn(parseFloat(n)+parseFloat(Yr(t,"x",a+"px",s)))+s},BC=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,Wy(t,n)},Ss="0deg",Jl="0px",ys=") ",Wy=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,v=a.rotationX,g=a.skewX,S=a.skewY,M=a.scaleX,E=a.scaleY,x=a.transformPerspective,y=a.force3D,R=a.target,U=a.zOrigin,w="",O=y==="auto"&&t&&t!==1||y===!0;if(U&&(v!==Ss||_!==Ss)){var P=parseFloat(_)*Bo,L=Math.sin(P),T=Math.cos(P),C;P=parseFloat(v)*Bo,C=Math.cos(P),c=wp(R,c,L*C*-U),f=wp(R,f,-Math.sin(P)*-U),p=wp(R,p,T*C*-U+U)}x!==Jl&&(w+="perspective("+x+ys),(s||u)&&(w+="translate("+s+"%, "+u+"%) "),(O||c!==Jl||f!==Jl||p!==Jl)&&(w+=p!==Jl||O?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+ys),d!==Ss&&(w+="rotate("+d+ys),_!==Ss&&(w+="rotateY("+_+ys),v!==Ss&&(w+="rotateX("+v+ys),(g!==Ss||S!==Ss)&&(w+="skew("+g+", "+S+ys),(M!==1||E!==1)&&(w+="scale("+M+", "+E+ys),R.style[an]=w||"translate(0, 0)"},HC=function(t,n){var a=n||this,s=a.xPercent,u=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,v=a.scaleX,g=a.scaleY,S=a.target,M=a.xOrigin,E=a.yOrigin,x=a.xOffset,y=a.yOffset,R=a.forceCSS,U=parseFloat(c),w=parseFloat(f),O,P,L,T,C;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=Bo,d*=Bo,O=Math.cos(p)*v,P=Math.sin(p)*v,L=Math.sin(p-d)*-g,T=Math.cos(p-d)*g,d&&(_*=Bo,C=Math.tan(d-_),C=Math.sqrt(1+C*C),L*=C,T*=C,_&&(C=Math.tan(_),C=Math.sqrt(1+C*C),O*=C,P*=C)),O=fn(O),P=fn(P),L=fn(L),T=fn(T)):(O=v,T=g,P=L=0),(U&&!~(c+"").indexOf("px")||w&&!~(f+"").indexOf("px"))&&(U=Yr(S,"x",c,"px"),w=Yr(S,"y",f,"px")),(M||E||x||y)&&(U=fn(U+M-(M*O+E*L)+x),w=fn(w+E-(M*P+E*T)+y)),(s||u)&&(C=S.getBBox(),U=fn(U+s/100*C.width),w=fn(w+u/100*C.height)),C="matrix("+O+","+P+","+L+","+T+","+U+","+w+")",S.setAttribute("transform",C),R&&(S.style[an]=C)},GC=function(t,n,a,s,u){var c=360,f=Dn(u),p=parseFloat(u)*(f&&~u.indexOf("rad")?Es:1),d=p-s,_=s+d+"deg",v,g;return f&&(v=u.split("_")[1],v==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),v==="cw"&&d<0?d=(d+c*sS)%c-~~(d/c)*c:v==="ccw"&&d>0&&(d=(d-c*sS)%c-~~(d/c)*c)),t._pt=g=new li(t._pt,n,a,s,d,EC),g.e=_,g.u="deg",t._props.push(a),g},dS=function(t,n){for(var a in n)t[a]=n[a];return t},VC=function(t,n,a){var s=dS({},a._gsap),u="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,v,g,S,M;s.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[an]=n,f=_u(a,1),jr(a,an),a.setAttribute("transform",d)):(d=getComputedStyle(a)[an],c[an]=n,f=_u(a,1),c[an]=d);for(p in ar)d=s[p],_=f[p],d!==_&&u.indexOf(p)<0&&(S=Hn(d),M=Hn(_),v=S!==M?Yr(a,p,d,M):parseFloat(d),g=parseFloat(_),t._pt=new li(t._pt,f,p,v,g-v,Nm),t._pt.u=M||0,t._props.push(p));dS(f,s)};oi("padding,margin,Width,Radius",function(o,t){var n="Top",a="Right",s="Bottom",u="Left",c=(t<3?[n,a,s,u]:[n+u,n+a,s+a,s+u]).map(function(f){return t<2?o+f:"border"+f+o});Tf[t>1?"border"+o:o]=function(f,p,d,_,v){var g,S;if(arguments.length<4)return g=c.map(function(M){return Ya(f,M,d)}),S=g.join(" "),S.split(g[0]).length===5?g[0]:S;g=(_+"").split(" "),S={},c.forEach(function(M,E){return S[M]=g[E]=g[E]||g[(E-1)/2|0]}),f.init(p,S,v)}});var qy={name:"css",register:Om,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,s,u){var c=this._props,f=t.style,p=a.vars.startAt,d,_,v,g,S,M,E,x,y,R,U,w,O,P,L,T,C;u0||Om(),this.styles=this.styles||By(t),T=this.styles.props,this.tween=a;for(E in n)if(E!=="autoRound"&&(_=n[E],!(Mi[E]&&Cy(E,n,a,s,t,u)))){if(S=typeof _,M=Tf[E],S==="function"&&(_=_.call(a,s,t,u),S=typeof _),S==="string"&&~_.indexOf("random(")&&(_=hu(_)),M)M(this,t,E,_,a)&&(L=1);else if(E.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(E)+"").trim(),_+="",Xr.lastIndex=0,Xr.test(d)||(x=Hn(d),y=Hn(_),y?x!==y&&(d=Yr(t,E,d,y)+y):x&&(_+=x)),this.add(f,"setProperty",d,_,s,u,0,0,E),c.push(E),T.push(E,0,f[E]);else if(S!=="undefined"){if(p&&E in p?(d=typeof p[E]=="function"?p[E].call(a,s,t,u):p[E],Dn(d)&&~d.indexOf("random(")&&(d=hu(d)),Hn(d+"")||d==="auto"||(d+=Ri.units[E]||Hn(Ya(t,E))||""),(d+"").charAt(1)==="="&&(d=Ya(t,E))):d=Ya(t,E),g=parseFloat(d),R=S==="string"&&_.charAt(1)==="="&&_.substr(0,2),R&&(_=_.substr(2)),v=parseFloat(_),E in _a&&(E==="autoAlpha"&&(g===1&&Ya(t,"visibility")==="hidden"&&v&&(g=0),T.push("visibility",0,f.visibility),Vr(this,f,"visibility",g?"inherit":"hidden",v?"inherit":"hidden",!v)),E!=="scale"&&E!=="transform"&&(E=_a[E],~E.indexOf(",")&&(E=E.split(",")[0]))),U=E in ar,U){if(this.styles.save(E),C=_,S==="string"&&_.substring(0,6)==="var(--"){if(_=Ti(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var $=t.style.perspective;t.style.perspective=_,_=Ti(t,"perspective"),$?t.style.perspective=$:jr(t,"perspective")}v=parseFloat(_)}if(w||(O=t._gsap,O.renderTransform&&!n.parseTransform||_u(t,n.parseTransform),P=n.smoothOrigin!==!1&&O.smooth,w=this._pt=new li(this._pt,f,an,0,1,O.renderTransform,O,0,-1),w.dep=1),E==="scale")this._pt=new li(this._pt,O,"scaleY",O.scaleY,(R?zo(O.scaleY,R+v):v)-O.scaleY||0,Nm),this._pt.u=0,c.push("scaleY",E),E+="X";else if(E==="transformOrigin"){T.push(ui,0,f[ui]),_=zC(_),O.svg?Pm(t,_,0,P,0,this):(y=parseFloat(_.split(" ")[2])||0,y!==O.zOrigin&&Vr(this,O,"zOrigin",O.zOrigin,y),Vr(this,f,E,Af(d),Af(_)));continue}else if(E==="svgOrigin"){Pm(t,_,1,P,0,this);continue}else if(E in ky){GC(this,O,E,g,R?zo(g,R+_):_);continue}else if(E==="smoothOrigin"){Vr(this,O,"smooth",O.smooth,_);continue}else if(E==="force3D"){O[E]=_;continue}else if(E==="transform"){VC(this,_,t);continue}}else E in f||(E=Ko(E)||E);if(U||(v||v===0)&&(g||g===0)&&!MC.test(_)&&E in f)x=(d+"").substr((g+"").length),v||(v=0),y=Hn(_)||(E in Ri.units?Ri.units[E]:x),x!==y&&(g=Yr(t,E,d,y)),this._pt=new li(this._pt,U?O:f,E,g,(R?zo(g,R+v):v)-g,!U&&(y==="px"||E==="zIndex")&&n.autoRound!==!1?AC:Nm),this._pt.u=y||0,U&&C!==_?(this._pt.b=d,this._pt.e=C,this._pt.r=TC):x!==y&&y!=="%"&&(this._pt.b=d,this._pt.r=bC);else if(E in f)FC.call(this,t,E,d,R?R+_:_);else if(E in t)this.add(t,E,d||t[E],R?R+_:_,s,u);else if(E!=="parseTransform"){$m(E,_);continue}U||(E in f?T.push(E,0,f[E]):typeof t[E]=="function"?T.push(E,2,t[E]()):T.push(E,1,d||t[E])),c.push(E)}}L&&Oy(this)},render:function(t,n){if(n.tween._time||!c0())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:Ya,aliases:_a,getSetter:function(t,n,a){var s=_a[n];return s&&s.indexOf(",")<0&&(n=s),n in ar&&n!==ui&&(t._gsap.x||Ya(t,"x"))?a&&rS===a?n==="scale"?DC:wC:(rS=a||{})&&(n==="scale"?UC:NC):t.style&&!Km(t.style[n])?RC:~n.indexOf("-")?CC:o0(t,n)},core:{_removeProperty:jr,_getMatrix:h0}};ci.utils.checkPrefix=Ko;ci.core.getStyleSaver=By;(function(o,t,n,a){var s=oi(o+","+t+","+n,function(u){ar[u]=1});oi(t,function(u){Ri.units[u]="deg",ky[u]=1}),_a[s[13]]=o+","+t,oi(a,function(u){var c=u.split(":");_a[c[1]]=s[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");oi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(o){Ri.units[o]="px"});ci.registerPlugin(qy);var ai=ci.registerPlugin(qy)||ci;ai.core.Tween;const kC=({text:o,as:t="div",typingSpeed:n=50,initialDelay:a=0,pauseDuration:s=2e3,deletingSpeed:u=30,loop:c=!0,className:f="",showCursor:p=!0,hideCursorWhileTyping:d=!1,cursorCharacter:_="|",cursorClassName:v="",cursorBlinkDuration:g=.5,textColors:S=[],variableSpeed:M,onSentenceComplete:E,startOnVisible:x=!1,reverseMode:y=!1,...R})=>{const[U,w]=Zt.useState(""),[O,P]=Zt.useState(0),[L,T]=Zt.useState(!1),[C,$]=Zt.useState(0),[G,Y]=Zt.useState(!x),Q=Zt.useRef(null),it=Zt.useRef(null),Z=Zt.useMemo(()=>Array.isArray(o)?o:[o],[o]),F=Zt.useCallback(()=>{if(!M)return n;const{min:ct,max:St}=M;return Math.random()*(St-ct)+ct},[M,n]),H=()=>S.length===0?"inherit":S[C%S.length];Zt.useEffect(()=>{if(!x||!it.current)return;const ct=new IntersectionObserver(St=>{St.forEach(I=>{I.isIntersecting&&Y(!0)})},{threshold:.1});return ct.observe(it.current),()=>ct.disconnect()},[x]),Zt.useEffect(()=>{p&&Q.current&&(ai.set(Q.current,{opacity:1}),ai.to(Q.current,{opacity:0,duration:g,repeat:-1,yoyo:!0,ease:"power2.inOut"}))},[p,g]),Zt.useEffect(()=>{if(!G)return;let ct;const St=Z[C],I=y?St.split("").reverse().join(""):St,j=()=>{if(L)if(U===""){if(T(!1),C===Z.length-1&&!c)return;E&&E(Z[C],C),$(mt=>(mt+1)%Z.length),P(0),ct=setTimeout(()=>{},s)}else ct=setTimeout(()=>{w(mt=>mt.slice(0,-1))},u);else if(O<I.length)ct=setTimeout(()=>{w(mt=>mt+I[O]),P(mt=>mt+1)},M?F():n);else if(Z.length>=1){if(!c&&C===Z.length-1)return;ct=setTimeout(()=>{T(!0)},s)}};return O===0&&!L&&U===""?ct=setTimeout(j,a):j(),()=>clearTimeout(ct)},[O,U,L,n,u,s,Z,C,c,a,G,y,M,E]);const ot=d&&(O<Z[C].length||L);return Zt.createElement(t,{ref:it,className:`inline-block whitespace-pre-wrap tracking-tight ${f}`,...R},B.jsx("span",{className:"inline",style:{color:H()||"inherit"},children:U}),p&&B.jsx("span",{ref:Q,className:`ml-1 inline-block opacity-100 ${ot?"hidden":""} ${v}`,children:_}))},XC=({onContactMe:o})=>B.jsxs("div",{className:"profile-page",children:[B.jsx("img",{src:"assets/a.png",alt:"Mostafa Oulahyan"}),B.jsx("h1",{children:"Mostafa Oulahyan"}),B.jsx(kC,{as:"h3",text:["Full-Stack Web Developer","Custom Software Solutions","From Idea to Production"],typingSpeed:75,deletingSpeed:50,pauseDuration:1500,showCursor:!0,cursorCharacter:"_",cursorBlinkDuration:.5}),B.jsxs("div",{className:"social-media",children:[B.jsx("a",{href:"https://github.com/Mostafa10Oulahyan",target:"_blank",rel:"noreferrer",children:B.jsx("i",{className:"bx bxl-github"})}),B.jsx("a",{href:"https://www.instagram.com/mostapha_oulahyan/",target:"_blank",rel:"noreferrer",children:B.jsx("i",{className:"bx bxl-instagram"})}),B.jsx("a",{href:"https://www.linkedin.com/in/mostafa-oulahyan-6220b435a/",target:"_blank",rel:"noreferrer",children:B.jsx("i",{className:"bx bxl-linkedin-square"})})]}),B.jsx("p",{children:"I am currently a Digital Development student at ISTA NTIC Tangier (OFPPT), passionate about creating modern, high-performance web applications. I have a versatile Full Stack Developer profile with strong skills across both front-end and back-end technologies"}),B.jsxs("div",{className:"btn-box",children:[B.jsx("a",{href:"resume/Mostafa_Oulahyan.pdf",download:"Mostafa_Oulahyan.pdf",className:"btn",children:"Download CV"}),B.jsx("a",{href:"#",className:"btn contact-me",onClick:t=>{t.preventDefault(),o()},children:"Contact Me!"})]})]}),WC=Zt.memo(function(){return B.jsxs(B.Fragment,{children:[B.jsx("h1",{className:"title",children:"Work Experience"}),B.jsx("div",{className:"workeduc-box",children:B.jsx("strong",{children:"No work experiences yet"})}),B.jsx("h1",{className:"title",style:{marginTop:"2rem"},children:"Participations"}),B.jsx("div",{className:"workeduc-box",children:B.jsxs("div",{className:"workeduc-content",children:[B.jsxs("span",{className:"year",children:[B.jsx("i",{className:"bx bxs-calendar"}),"2025"]}),B.jsx("h3",{children:"Hackathon Participation – Tangier, World Cup 2030 Tourism Services"}),B.jsx("p",{children:'I participated in the Tangier Hackathon on the theme of "Services for the Public and Tourism in Preparation for the 2030 World Cup." Using our equipment, we developed an innovative digital solution to enhance the visitor experience through interactive services, personalized assistance, and improved tourist guidance. This participation allowed me to develop my problem-solving, equipment operation, user experience/UI design, and functional prototyping skills within a limited timeframe.'})]})})]})}),qC=Zt.memo(function(){return B.jsxs(B.Fragment,{children:[B.jsx("h1",{className:"title",children:"Education"}),B.jsxs("div",{className:"workeduc-box",children:[B.jsxs("div",{className:"workeduc-content",children:[B.jsxs("span",{className:"year",children:[B.jsx("i",{className:"bx bxs-calendar"}),"2023 - 2024"]}),B.jsx("h3",{children:"High School"}),B.jsx("p",{children:"Physical and Chemical Sciences option from Lycée Elbassatine in June 2024, providing me with a strong foundational knowledge in scientific and methodological disciplines necessary for digital development."})]}),B.jsxs("div",{className:"workeduc-content",children:[B.jsxs("span",{className:"year",children:[B.jsx("i",{className:"bx bxs-calendar"}),"2024 - 2026"]}),B.jsx("h3",{children:"ISTA NTIC"}),B.jsx("p",{children:"Currently pursuing a Diploma in Digital Development at ISTA NTIC Tangier (OFPPT), where I am acquiring comprehensive skills in web development, programming, and digital technologies"})]})]})]})}),jC={webdev:{title:"Web Development",subtitle:"What I Deliver:",icon:"bx bx-code-alt",gradient:"linear-gradient(135deg, #0ea5e9 0%, #2563eb 50%, #7c3aed 100%)",items:["Custom Web Applications","RESTful API Integration","Authentication Systems","Admin Dashboards","Database Architecture","Deployment & Hosting"]},uiux:{title:"Creative Design",subtitle:"What I Provide:",icon:"bx bxs-paint",gradient:"linear-gradient(135deg, #f472b6 0%, #a855f7 50%, #6366f1 100%)",items:["Wireframes & Prototypes","Responsive Layout Design","Design Systems","Accessibility Optimization","User Flow Planning"]},backend:{title:"Backend & Performance",subtitle:"What I Handle:",icon:"bx bx-search",gradient:"linear-gradient(135deg, #34d399 0%, #06b6d4 50%, #3b82f6 100%)",items:["API Development","Database Design","Query Optimization","Authentication & Authorization","Server Configuration","Performance Monitoring"]}},YC=({serviceKey:o,onClose:t})=>{const n=Zt.useRef(null),a=Zt.useRef(null),s=Zt.useRef(null),u=Zt.useRef(null),c=Zt.useRef([]),f=Zt.useRef(null),p=Zt.useRef(null),d=Zt.useRef(null),_=jC[o];if(!_)return null;const v=Zt.useCallback(()=>{const g=ai.timeline({onComplete:t});g.to(c.current,{x:20,opacity:0,scale:.9,duration:.15,stagger:.04,ease:"power2.in"}),g.to([u.current,p.current],{opacity:0,y:-10,duration:.15,ease:"power2.in"},"-=0.1"),g.to(s.current,{opacity:0,y:-20,scale:.9,duration:.2,ease:"power2.in"},"-=0.1"),g.to(a.current,{scale:.85,opacity:0,rotateX:10,duration:.25,ease:"power3.in"},"-=0.15"),g.to(n.current,{opacity:0,duration:.2,ease:"power2.in"},"-=0.15")},[t]);return Zt.useEffect(()=>{const g=ai.timeline();return d.current=g,ai.set(n.current,{opacity:0}),ai.set(a.current,{scale:.8,opacity:0,rotateX:15,transformPerspective:800}),ai.set(s.current,{opacity:0,y:-30,scale:.8}),ai.set(u.current,{opacity:0,x:-20}),ai.set(p.current,{opacity:0,scale:0,rotation:-180}),ai.set(f.current,{opacity:0,scale:.5}),c.current.forEach(S=>{S&&ai.set(S,{opacity:0,x:-40,scale:.85,rotateY:-20,transformPerspective:600})}),g.to(n.current,{opacity:1,duration:.3,ease:"power2.out"}),g.to(f.current,{opacity:.6,scale:1,duration:.5,ease:"power2.out"},"-=0.1"),g.to(a.current,{scale:1,opacity:1,rotateX:0,duration:.45,ease:"back.out(1.6)"},"-=0.3"),g.to(s.current,{opacity:1,y:0,scale:1,duration:.35,ease:"back.out(2)"},"-=0.2"),g.to(p.current,{opacity:1,scale:1,rotation:0,duration:.3,ease:"back.out(3)"},"-=0.25"),g.to(u.current,{opacity:1,x:0,duration:.25,ease:"power3.out"},"-=0.15"),g.to(c.current,{opacity:1,x:0,scale:1,rotateY:0,duration:.3,stagger:.07,ease:"power3.out"},"-=0.1"),ai.to(f.current,{opacity:.3,scale:1.1,duration:2,repeat:-1,yoyo:!0,ease:"sine.inOut"}),()=>{g.kill(),ai.killTweensOf(f.current)}},[]),B.jsxs("div",{ref:n,className:"service-modal-overlay",onClick:v,children:[B.jsx("div",{ref:f,className:"service-modal-glow",style:{background:_.gradient}}),B.jsxs("div",{ref:a,className:"service-modal-card",onClick:g=>g.stopPropagation(),children:[B.jsx("button",{ref:p,className:"service-modal-close",onClick:v,children:B.jsx("i",{className:"bx bx-x"})}),B.jsxs("div",{ref:s,className:"service-modal-header",children:[B.jsx("div",{className:"service-modal-icon",style:{background:_.gradient},children:B.jsx("i",{className:_.icon})}),B.jsx("h3",{children:_.title})]}),B.jsx("p",{ref:u,className:"service-modal-subtitle",children:_.subtitle}),B.jsx("ul",{className:"service-modal-list",children:_.items.map((g,S)=>B.jsxs("li",{ref:M=>c.current[S]=M,className:"service-modal-item",children:[B.jsx("span",{className:"service-modal-check",children:B.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:B.jsx("polyline",{points:"20 6 9 17 4 12"})})}),B.jsx("span",{children:g})]},S))})]})]})},ZC=Zt.memo(function(){const[t,n]=Zt.useState(null),a=Zt.useCallback(u=>c=>{c.preventDefault(),n(u)},[]),s=Zt.useCallback(()=>{n(null)},[]);return B.jsxs(B.Fragment,{children:[B.jsx("h1",{className:"title",children:"My Services"}),B.jsxs("div",{className:"services-box",children:[B.jsxs("div",{className:"services-content",children:[B.jsx("i",{className:"bx bx-code-alt"}),B.jsx("h3",{children:"Web Development"}),B.jsx("p",{children:"Building modern, responsive websites using React, Laravel, and PHP for complete full-stack solutions."}),B.jsx("a",{href:"#",className:"btn",onClick:a("webdev"),children:"Read More"})]}),B.jsxs("div",{className:"services-content",children:[B.jsx("i",{className:"bx bxs-paint"}),B.jsx("h3",{children:"Creative Design"}),B.jsx("p",{children:"Designing intuitive UI/UX interfaces with Figma, combining functionality and visual appeal."}),B.jsx("a",{href:"#",className:"btn",onClick:a("uiux"),children:"Read More"})]}),B.jsxs("div",{className:"services-content",children:[B.jsx("i",{className:"bx bx-search"}),B.jsx("h3",{children:"Backend & Performance Optimization"}),B.jsx("p",{children:"I build secure backend systems and optimize web applications for high performance and scalability."}),B.jsx("a",{href:"#",className:"btn",onClick:a("backend"),children:"Read More"})]})]}),t&&B.jsx(YC,{serviceKey:t,onClose:s})]})}),jy={width:"2.2rem",height:"2.2rem",fill:"var(--main-color)"},KC=()=>B.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 52",style:jy,children:B.jsx("path",{d:"M49.626 11.564a.809.809 0 0 1 .028.209v10.972a.8.8 0 0 1-.402.694l-9.209 5.302V39.25c0 .286-.152.55-.4.694L20.42 51.01c-.044.025-.092.041-.14.058-.018.006-.035.017-.054.022a.805.805 0 0 1-.41 0c-.022-.006-.042-.018-.063-.026-.044-.016-.09-.03-.132-.054L.402 39.944A.801.801 0 0 1 0 39.25V6.334c0-.072.01-.142.028-.21.006-.023.02-.044.028-.067.015-.042.029-.085.051-.124.015-.026.037-.047.055-.071.023-.032.044-.065.071-.093.023-.023.053-.04.079-.06.029-.024.055-.05.088-.069h.001l9.61-5.533a.802.802 0 0 1 .8 0l9.61 5.533h.002c.032.02.059.045.088.068.026.02.055.038.078.06.028.029.048.062.072.094.017.024.04.045.054.071.023.04.036.082.052.124.008.023.022.044.028.068a.809.809 0 0 1 .028.209v20.559l8.008-4.611v-10.51c0-.07.01-.141.028-.208.007-.024.02-.045.028-.068.016-.042.03-.085.052-.124.015-.026.037-.047.054-.071.024-.032.044-.065.072-.093.023-.023.052-.04.078-.06.03-.024.056-.05.088-.069h.001l9.611-5.533a.801.801 0 0 1 .8 0l9.61 5.533c.034.02.06.045.09.068.025.02.054.038.077.06.028.029.048.062.072.094.018.024.04.045.054.071.023.039.036.082.052.124.009.023.022.044.028.068zm-1.574 10.718v-9.124l-3.363 1.936-4.646 2.675v9.124l8.01-4.611zm-9.61 16.505v-9.13l-4.57 2.61-13.05 7.448v9.216l17.62-10.144zM1.602 7.719v31.068L19.22 48.93v-9.214l-9.204-5.209-.003-.002-.004-.002c-.031-.018-.057-.044-.086-.066-.025-.02-.054-.036-.076-.058l-.002-.003c-.026-.025-.044-.056-.066-.084-.02-.027-.044-.05-.06-.078l-.001-.003c-.018-.03-.029-.066-.042-.1-.013-.03-.03-.058-.038-.09v-.001c-.01-.038-.012-.078-.016-.117-.004-.03-.012-.06-.012-.09v-.002-21.481L4.965 9.654 1.602 7.72zm8.81-5.994L2.405 6.334l8.005 4.609 8.006-4.61-8.006-4.608zm4.164 28.764l4.645-2.674V7.719l-3.363 1.936-4.646 2.675v20.096l3.364-1.937zM39.243 7.164l-8.006 4.609 8.006 4.609 8.005-4.61-8.005-4.608zm-.801 10.605l-4.646-2.675-3.363-1.936v9.124l4.645 2.674 3.364 1.937v-9.124zM20.02 38.33l11.743-6.704 5.87-3.35-8-4.606-9.211 5.303-8.395 4.833 7.993 4.524z"})}),QC=()=>B.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 289",style:jy,children:B.jsx("path",{d:"M128 288.464c-3.975 0-7.685-1.06-11.13-2.915l-35.247-20.936c-5.3-2.915-2.65-3.975-1.06-4.505 7.155-2.385 8.48-2.915 15.9-7.155.796-.53 1.856-.265 2.65.265l27.032 16.166c1.06.53 2.385.53 3.18 0l105.74-61.217c1.06-.53 1.59-1.59 1.59-2.915V83.08c0-1.325-.53-2.385-1.59-2.915L129.325 19.213c-1.06-.53-2.385-.53-3.18 0L20.405 80.165c-1.06.53-1.59 1.855-1.59 2.915v122.17c0 1.06.53 2.385 1.59 2.915l28.887 16.695c15.635 7.95 25.44-1.325 25.44-10.6V93.15c0-1.59 1.325-3.18 3.18-3.18h13.25c1.59 0 3.18 1.325 3.18 3.18v121.11c0 20.936-11.396 33.126-31.272 33.126-6.095 0-10.865 0-24.38-6.625l-27.827-15.9C4.24 221.936 0 215.046 0 207.626V85.46c0-7.42 4.24-14.31 11.13-17.755L116.87 6.487c6.625-3.71 15.635-3.71 22.26 0L244.87 67.703c6.89 3.975 11.13 10.6 11.13 17.756v122.17c0 7.155-4.24 14.045-11.13 17.755L139.13 286.6c-3.445 1.325-7.155 1.855-11.13 1.855zm32.596-84.009c-46.378 0-55.917-21.2-55.917-39.221 0-1.59 1.325-3.18 3.18-3.18h13.515c1.59 0 2.915 1.06 2.915 2.65 2.12 14.045 8.215 20.936 36.307 20.936 22.26 0 31.802-5.035 31.802-16.96 0-6.89-2.65-11.925-37.367-15.37-28.887-2.915-46.908-9.275-46.908-32.33 0-21.466 18.02-34.186 48.233-34.186 33.921 0 50.617 11.66 52.737 37.102 0 .795-.265 1.59-.795 2.385-.53.53-1.325 1.06-2.12 1.06h-13.78c-1.325 0-2.65-1.06-2.915-2.385-3.18-14.575-11.396-19.345-33.126-19.345-24.38 0-27.296 8.48-27.296 14.84 0 7.685 3.445 10.07 36.307 14.31 32.596 4.24 47.967 10.335 47.967 33.126-.265 23.316-19.345 36.572-53.001 36.572z"})}),JC=()=>B.jsxs(B.Fragment,{children:[B.jsx("h1",{className:"title",children:"My Skills"}),B.jsxs("div",{className:"skills-box",children:[B.jsxs("div",{className:"skills-content",children:[B.jsx("h3",{children:"Front-End"}),B.jsxs("div",{className:"content skills-scroll",children:[B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-html5"}),"HTML"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-css3"}),"CSS"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-javascript"}),"JS"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-tailwind-css"}),"Tailwind"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-react"}),"React Js"]}),B.jsxs("span",{children:[B.jsx("i",{className:"devicon-nextjs-plain"}),"Next.js"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-bootstrap"}),"BootStrap"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-jquery"}),"Jquery"]})]})]}),B.jsxs("div",{className:"skills-content",children:[B.jsx("h3",{children:"Back-End & Databases"}),B.jsxs("div",{className:"content skills-scroll",children:[B.jsxs("span",{children:[B.jsx(QC,{}),"Node.js"]}),B.jsxs("span",{children:[B.jsx("i",{className:"devicon-express-original"}),"Express"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-python"}),"Python"]}),B.jsxs("span",{children:[B.jsx(KC,{}),"Laravel"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-php"}),"PHP"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-mongodb"}),"MongoDB"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxs-data"}),"MySQL"]}),B.jsxs("span",{children:[B.jsx("i",{className:"devicon-supabase-plain"}),"Supabase"]})]})]}),B.jsxs("div",{className:"skills-content",children:[B.jsx("h3",{children:"Version Control"}),B.jsxs("div",{className:"content skills-scroll",children:[B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-git"}),"Git"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-github"}),"GitHub"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-gitlab"}),"GitLab"]})]})]}),B.jsxs("div",{className:"skills-content",children:[B.jsx("h3",{children:"Tools & Design"}),B.jsxs("div",{className:"content skills-scroll",children:[B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-visual-studio"}),"VS Code"]}),B.jsxs("span",{children:[B.jsx("i",{className:"bx bxl-figma"}),"Figma"]}),B.jsxs("span",{children:[B.jsx("img",{src:"assets/Untitled design.png",alt:"Postman"}),"Postman"]}),B.jsxs("span",{children:[B.jsx("i",{className:"devicon-docker-plain"}),"Docker"]})]})]})]})]}),$C=()=>B.jsxs(B.Fragment,{children:[B.jsx("h1",{className:"title",children:"Project 1 :"}),B.jsxs("div",{className:"portfolio-box",children:[B.jsx("div",{className:"img-box",children:B.jsx("img",{src:"assets/imageStore4u.png",alt:"Store4u Project"})}),B.jsxs("div",{className:"info-box",children:[B.jsxs("div",{className:"info-title",children:[B.jsx("h3",{children:"Project Name :Store4u"}),B.jsxs("a",{href:"https://my-niche.vercel.app/",target:"_blank",rel:"noreferrer",children:["Live Preview ",B.jsx("i",{className:"bx bx-link-external"})]})]}),B.jsxs("p",{children:[" ",B.jsx("strong",{children:"Description : "})," is a Eco-Store for Material sport "]}),B.jsx("p",{children:"-Tech Used:"}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Front-End:"})," Html5, Css3, JavaScript"]}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Back-End:"})," Laravel, ,AlwaysData(Mysql)"]}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Version Control:"})," Git, Github,"]}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Design:"})," Figma "]}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Hosting:"})," Vercel,Cloudinary for Picutres"]})]})]})]}),tw=()=>B.jsxs(B.Fragment,{children:[B.jsx("h1",{className:"title",children:"Project 2 :"}),B.jsxs("div",{className:"portfolio-box",children:[B.jsx("div",{className:"img-box",children:B.jsx("img",{src:"assets/imageSwipyeatAdmin.png",alt:"Swipyeat Project"})}),B.jsxs("div",{className:"info-box",children:[B.jsxs("div",{className:"info-title",children:[B.jsxs("h3",{children:[B.jsx("strong",{children:"Project Name : "})," Swipyeat"]}),B.jsxs("a",{href:"https://adminswipyeat.vercel.app/",target:"_blank",rel:"noreferrer",children:["Live Preview ",B.jsx("i",{className:"bx bx-link-external"})]})]}),B.jsx("div",{className:"info-content",children:B.jsxs("p",{children:[B.jsx("strong",{children:"Description : "})," SaaS Restaurant Management (Admin Part) username: ",B.jsx("strong",{children:"restaurantadmin@gmail.com"})," password: same like username "]})}),B.jsxs("p",{children:[" ",B.jsx("strong",{children:"-Tech Used:"})]}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Front-End:"})," Html5, Css3, JavaScript"]}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Back-End:"})," MySQL, MongoDB"]}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Version Control:"})," Git, Gitlab"]})]}),B.jsx("div",{className:"btn-box",style:{marginTop:"2rem"},children:B.jsx("a",{href:"https://www.swipyeat.com/",className:"btn",target:"_blank",rel:"noreferrer",children:"The Whole Service"})})]})]}),ew=Zt.memo(function(){return B.jsxs(B.Fragment,{children:[B.jsx("h1",{className:"title",children:"Latest Project:"}),B.jsxs("div",{className:"portfolio-box",children:[B.jsx("div",{className:"img-box",children:B.jsx("img",{src:"assets/image.png",alt:"Figrbay Project"})}),B.jsxs("div",{className:"info-box",children:[B.jsxs("div",{className:"info-title",children:[B.jsx("h3",{children:"Project Name : Figrbay"}),B.jsxs("a",{href:"https://figrbay.onrender.com/",target:"_blank",rel:"noreferrer",children:["Live Preview ",B.jsx("i",{className:"bx bx-link-external"})]})]}),B.jsx("div",{className:"info-content",children:B.jsxs("p",{children:[B.jsx("strong",{children:"Desciption : "})," Is like Marketplace of 'Facebook' , Put your products and sell them for users to buy it"]})}),B.jsx("p",{children:"-Tech Used:"}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Front-End:"}),"Html5,Css3,JavaScript"]}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Back-End:"})," PHP,Mysql,MongoDB"]}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Version Control:"})," Git,Gitlab"]}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Design:"})," Figma"]}),B.jsxs("p",{children:["  ",B.jsx("strong",{children:"Hosting:"})," Render"]})]}),B.jsxs("div",{className:"btn-box",children:[B.jsx("a",{href:"https://github.com/Mostafa10Oulahyan",className:"btn",target:"_blank",rel:"noreferrer",children:"More Projects"}),B.jsx("a",{href:"https://mysql-mongodb-atelier-fab7bb.gitlab.io/",className:"btn",target:"_blank",rel:"noreferrer",children:"Les Ateliers"})]})]})]})}),nw=Zt.memo(function(){return B.jsxs(B.Fragment,{children:[B.jsx("h1",{className:"title",children:"Contact Me!"}),B.jsx("div",{className:"contact-box",children:B.jsxs("form",{action:"https://formsubmit.co/mostaphaoulahyan@gmail.com",method:"POST",children:[B.jsx("input",{type:"text",name:"name",className:"field",placeholder:"Full Name",required:!0}),B.jsx("input",{type:"email",name:"email",className:"field",placeholder:"Email Address",required:!0}),B.jsx("textarea",{name:"message",cols:"30",rows:"10",className:"field",placeholder:"Your Message",required:!0}),B.jsx("input",{type:"submit",value:"Send Message",className:"btn"})]})})]})}),$l=4,iw={turnedPages:{1:!0,2:!0,3:!0,4:!0},zIndexes:{1:20,2:21,3:22,4:23},coverTurned:!1,coverZIndex:100};function aw(o,t){switch(t.type){case"TURN_COVER":return{...o,coverTurned:!0};case"HIDE_COVER":return{...o,coverZIndex:-1};case"SET_PAGE_TURNED":return{...o,turnedPages:{...o.turnedPages,[t.pageId]:t.turned}};case"SET_Z_INDEX":return{...o,zIndexes:{...o.zIndexes,[t.pageId]:t.zIndex}};case"TOGGLE_PAGE":return{...o,turnedPages:{...o.turnedPages,[t.pageId]:!o.turnedPages[t.pageId]}};default:return o}}const sf=Zt.memo(function({pageId:t,turned:n,zIndex:a,FrontComponent:s,BackComponent:u,frontPageNum:c,backPageNum:f,onNextClick:p,onPrevClick:d,backProfileSlot:_,frontId:v,backId:g}){return B.jsxs("div",{className:`book-page page-right ${n?"turn":""}`,style:{zIndex:a},children:[B.jsxs("div",{className:"page-front",id:v,children:[B.jsx(s,{}),B.jsx("span",{className:"number-page",children:c}),B.jsx("span",{className:"nextprev-btn",onClick:p,children:B.jsx("i",{className:"bx bx-chevron-right"})})]}),B.jsxs("div",{className:"page-back",id:g,children:[B.jsx(u,{}),B.jsx("span",{className:"number-page",children:f}),B.jsx("span",{className:"nextprev-btn back",onClick:d,children:B.jsx("i",{className:"bx bx-chevron-left"})}),_]})]})}),rw=Zt.memo(function(){return B.jsx("div",{style:{width:"100%",height:"100vh",position:"fixed",top:0,left:0,zIndex:0,pointerEvents:"none"},children:B.jsx(bR,{color:"#ffffff",flakeSize:.01,minFlakeSize:1.25,pixelResolution:500,speed:1.25,density:.3,direction:125,brightness:1,depthFade:8,farPlane:20,gamma:.4545,variant:"round"})})});function sw(){const[o,t]=Zt.useReducer(aw,iw),{turnedPages:n,zIndexes:a,coverTurned:s,coverZIndex:u}=o,c=Zt.useRef(o);c.current=o;const f=Zt.useCallback(()=>{if(window.innerWidth<=768){document.documentElement.style.fontSize="16px";return}const y=window.visualViewport||{width:window.innerWidth,height:window.innerHeight},R=y.width/66,U=y.height/55,w=Math.min(R,U,20);document.documentElement.style.fontSize=w+"px"},[]);Zt.useEffect(()=>(f(),window.addEventListener("resize",f),window.visualViewport&&window.visualViewport.addEventListener("resize",f),()=>{window.removeEventListener("resize",f),window.visualViewport&&window.visualViewport.removeEventListener("resize",f)}),[f]),Zt.useEffect(()=>{const M=[];return M.push(setTimeout(()=>t({type:"TURN_COVER"}),2100)),M.push(setTimeout(()=>t({type:"HIDE_COVER"}),2800)),[4,3,2,1].forEach((x,y)=>{M.push(setTimeout(()=>{t({type:"SET_PAGE_TURNED",pageId:x,turned:!1}),M.push(setTimeout(()=>{t({type:"SET_Z_INDEX",pageId:x,zIndex:10+y})},500))},(y+1)*200+2100))}),()=>M.forEach(x=>clearTimeout(x))},[]);const p=Zt.useCallback((M,E)=>{const x=c.current.turnedPages[M];t({type:"TOGGLE_PAGE",pageId:M}),setTimeout(()=>{t({type:"SET_Z_INDEX",pageId:M,zIndex:x?20-E:20+E})},500)},[]),d=Zt.useCallback(()=>window.innerWidth<=768,[]),_=Zt.useCallback(()=>{var M;if(d()){(M=document.getElementById("contact"))==null||M.scrollIntoView({behavior:"smooth"});return}for(let E=1;E<=$l;E++){const x=E*200;setTimeout(()=>{t({type:"TOGGLE_PAGE",pageId:E}),setTimeout(()=>{const y=c.current.turnedPages[E];t({type:"SET_Z_INDEX",pageId:E,zIndex:y?20+(E-1):20+($l-E)})},500)},x)}},[d]),v=Zt.useCallback(()=>{var M;if(d()){(M=document.getElementById("profile"))==null||M.scrollIntoView({behavior:"smooth"});return}for(let E=$l;E>=1;E--){const x=($l-E)*200;setTimeout(()=>{t({type:"TOGGLE_PAGE",pageId:E}),setTimeout(()=>{const y=c.current.turnedPages[E];t({type:"SET_Z_INDEX",pageId:E,zIndex:y?20+(E-1):20+($l-E)})},500)},x)}},[d]),g=Zt.useMemo(()=>({next1:()=>p(1,0),prev1:()=>p(1,1),next2:()=>p(2,2),prev2:()=>p(2,3),next3:()=>p(3,4),prev3:()=>p(3,5),next4:()=>p(4,6),prev4:()=>p(4,7)}),[p]),S=Zt.useMemo(()=>B.jsxs("a",{href:"#",className:"back-profile",onClick:M=>{M.preventDefault(),v()},children:[B.jsx("p",{children:"Profile"}),B.jsx("i",{className:"bx bxs-user"})]}),[v]);return B.jsxs(B.Fragment,{children:[B.jsx(rw,{}),B.jsxs("div",{className:"wrapper",style:{position:"relative",zIndex:1},children:[B.jsx("div",{className:"cover cover-left"}),B.jsx("div",{className:`cover cover-right ${s?"turn":""}`,style:{zIndex:u}}),B.jsxs("div",{className:"book",children:[B.jsx("div",{className:"book-page page-left",id:"profile",children:B.jsx(XC,{onContactMe:_})}),B.jsx(sf,{pageId:1,turned:n[1],zIndex:a[1],FrontComponent:WC,BackComponent:qC,frontPageNum:1,backPageNum:2,onNextClick:g.next1,onPrevClick:g.prev1,frontId:"work-experience",backId:"education"}),B.jsx(sf,{pageId:2,turned:n[2],zIndex:a[2],FrontComponent:ZC,BackComponent:JC,frontPageNum:3,backPageNum:4,onNextClick:g.next2,onPrevClick:g.prev2,frontId:"services",backId:"skills"}),B.jsx(sf,{pageId:3,turned:n[3],zIndex:a[3],FrontComponent:$C,BackComponent:tw,frontPageNum:5,backPageNum:6,onNextClick:g.next3,onPrevClick:g.prev3,frontId:"projects1",backId:"projects2"}),B.jsx(sf,{pageId:4,turned:n[4],zIndex:a[4],FrontComponent:ew,BackComponent:nw,frontPageNum:7,backPageNum:8,onNextClick:g.next4,onPrevClick:g.prev4,backProfileSlot:S,frontId:"portfolio",backId:"contact"})]})]})]})}uE.createRoot(document.getElementById("root")).render(B.jsx(eE.StrictMode,{children:B.jsx(sw,{})}));
