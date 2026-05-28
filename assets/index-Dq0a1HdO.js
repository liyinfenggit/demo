(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function wp(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ne={},Jo=[],is=()=>{},Kx=()=>!1,Uh=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Nh=e=>e.startsWith("onUpdate:"),En=Object.assign,Tp=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},AS=Object.prototype.hasOwnProperty,Te=(e,t)=>AS.call(e,t),ee=Array.isArray,Qo=e=>Dl(e)==="[object Map]",Zx=e=>Dl(e)==="[object Set]",Lm=e=>Dl(e)==="[object Date]",oe=e=>typeof e=="function",dn=e=>typeof e=="string",as=e=>typeof e=="symbol",Fe=e=>e!==null&&typeof e=="object",Jx=e=>(Fe(e)||oe(e))&&oe(e.then)&&oe(e.catch),Qx=Object.prototype.toString,Dl=e=>Qx.call(e),RS=e=>Dl(e).slice(8,-1),tv=e=>Dl(e)==="[object Object]",Ap=e=>dn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,cl=wp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fh=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},CS=/-\w/g,Ii=Fh(e=>e.replace(CS,t=>t.slice(1).toUpperCase())),PS=/\B([A-Z])/g,ao=Fh(e=>e.replace(PS,"-$1").toLowerCase()),ev=Fh(e=>e.charAt(0).toUpperCase()+e.slice(1)),iu=Fh(e=>e?`on${ev(e)}`:""),ts=(e,t)=>!Object.is(e,t),eh=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},nv=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Rp=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Dm;const Bh=()=>Dm||(Dm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cp(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=dn(i)?OS(i):Cp(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(dn(e)||Fe(e))return e}const LS=/;(?![^(]*\))/g,DS=/:([^]+)/,IS=/\/\*[^]*?\*\//g;function OS(e){const t={};return e.replace(IS,"").split(LS).forEach(n=>{if(n){const i=n.split(DS);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Kr(e){let t="";if(dn(e))t=e;else if(ee(e))for(let n=0;n<e.length;n++){const i=Kr(e[n]);i&&(t+=i+" ")}else if(Fe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const US="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",NS=wp(US);function iv(e){return!!e||e===""}function FS(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=Pp(e[i],t[i]);return n}function Pp(e,t){if(e===t)return!0;let n=Lm(e),i=Lm(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=as(e),i=as(t),n||i)return e===t;if(n=ee(e),i=ee(t),n||i)return n&&i?FS(e,t):!1;if(n=Fe(e),i=Fe(t),n||i){if(!n||!i)return!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Pp(e[o],t[o]))return!1}}return String(e)===String(t)}const sv=e=>!!(e&&e.__v_isRef===!0),Rs=e=>dn(e)?e:e==null?"":ee(e)||Fe(e)&&(e.toString===Qx||!oe(e.toString))?sv(e)?Rs(e.value):JSON.stringify(e,rv,2):String(e),rv=(e,t)=>sv(t)?rv(e,t.value):Qo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s],r)=>(n[su(i,r)+" =>"]=s,n),{})}:Zx(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>su(n))}:as(t)?su(t):Fe(t)&&!ee(t)&&!tv(t)?String(t):t,su=(e,t="")=>{var n;return as(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sn;class BS{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Sn&&(Sn.active?(this.parent=Sn,this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Sn;try{return Sn=this,t()}finally{Sn=n}}}on(){++this._on===1&&(this.prevScope=Sn,Sn=this)}off(){if(this._on>0&&--this._on===0){if(Sn===this)Sn=this.prevScope;else{let t=Sn;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function kS(){return Sn}let ze;const ru=new WeakSet;class ov{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Sn&&(Sn.active?Sn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ru.has(this)&&(ru.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lv(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Im(this),cv(this);const t=ze,n=Oi;ze=this,Oi=!0;try{return this.fn()}finally{hv(this),ze=t,Oi=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ip(t);this.deps=this.depsTail=void 0,Im(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ru.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){tf(this)&&this.run()}get dirty(){return tf(this)}}let av=0,hl,ul;function lv(e,t=!1){if(e.flags|=8,t){e.next=ul,ul=e;return}e.next=hl,hl=e}function Lp(){av++}function Dp(){if(--av>0)return;if(ul){let t=ul;for(ul=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;hl;){let t=hl;for(hl=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function cv(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function hv(e){let t,n=e.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Ip(i),zS(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=t,e.depsTail=n}function tf(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(uv(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function uv(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===yl)||(e.globalVersion=yl,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!tf(e))))return;e.flags|=2;const t=e.dep,n=ze,i=Oi;ze=e,Oi=!0;try{cv(e);const s=e.fn(e._value);(t.version===0||ts(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ze=n,Oi=i,hv(e),e.flags&=-3}}function Ip(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Ip(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function zS(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Oi=!0;const dv=[];function Hs(){dv.push(Oi),Oi=!1}function Vs(){const e=dv.pop();Oi=e===void 0?!0:e}function Im(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ze;ze=void 0;try{t()}finally{ze=n}}}let yl=0;class HS{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Op{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ze||!Oi||ze===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ze)n=this.activeLink=new HS(ze,this),ze.deps?(n.prevDep=ze.depsTail,ze.depsTail.nextDep=n,ze.depsTail=n):ze.deps=ze.depsTail=n,fv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ze.depsTail,n.nextDep=void 0,ze.depsTail.nextDep=n,ze.depsTail=n,ze.deps===n&&(ze.deps=i)}return n}trigger(t){this.version++,yl++,this.notify(t)}notify(t){Lp();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Dp()}}}function fv(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)fv(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const ef=new WeakMap,Qr=Symbol(""),nf=Symbol(""),Sl=Symbol("");function Pn(e,t,n){if(Oi&&ze){let i=ef.get(e);i||ef.set(e,i=new Map);let s=i.get(n);s||(i.set(n,s=new Op),s.map=i,s.key=n),s.track()}}function Is(e,t,n,i,s,r){const o=ef.get(e);if(!o){yl++;return}const a=l=>{l&&l.trigger()};if(Lp(),t==="clear")o.forEach(a);else{const l=ee(e),c=l&&Ap(n);if(l&&n==="length"){const h=Number(i);o.forEach((d,f)=>{(f==="length"||f===Sl||!as(f)&&f>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Sl)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Qr)),Qo(e)&&a(o.get(nf)));break;case"delete":l||(a(o.get(Qr)),Qo(e)&&a(o.get(nf)));break;case"set":Qo(e)&&a(o.get(Qr));break}}Dp()}function fo(e){const t=we(e);return t===e?t:(Pn(t,"iterate",Sl),Ui(e)?t:t.map(Gs))}function Up(e){return Pn(e=we(e),"iterate",Sl),e}function Ki(e,t){return yr(e)?bl(ta(e)?Gs(t):t):Gs(t)}const VS={__proto__:null,[Symbol.iterator](){return ou(this,Symbol.iterator,e=>Ki(this,e))},concat(...e){return fo(this).concat(...e.map(t=>ee(t)?fo(t):t))},entries(){return ou(this,"entries",e=>(e[1]=Ki(this,e[1]),e))},every(e,t){return ps(this,"every",e,t,void 0,arguments)},filter(e,t){return ps(this,"filter",e,t,n=>n.map(i=>Ki(this,i)),arguments)},find(e,t){return ps(this,"find",e,t,n=>Ki(this,n),arguments)},findIndex(e,t){return ps(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return ps(this,"findLast",e,t,n=>Ki(this,n),arguments)},findLastIndex(e,t){return ps(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return ps(this,"forEach",e,t,void 0,arguments)},includes(...e){return au(this,"includes",e)},indexOf(...e){return au(this,"indexOf",e)},join(e){return fo(this).join(e)},lastIndexOf(...e){return au(this,"lastIndexOf",e)},map(e,t){return ps(this,"map",e,t,void 0,arguments)},pop(){return ya(this,"pop")},push(...e){return ya(this,"push",e)},reduce(e,...t){return Om(this,"reduce",e,t)},reduceRight(e,...t){return Om(this,"reduceRight",e,t)},shift(){return ya(this,"shift")},some(e,t){return ps(this,"some",e,t,void 0,arguments)},splice(...e){return ya(this,"splice",e)},toReversed(){return fo(this).toReversed()},toSorted(e){return fo(this).toSorted(e)},toSpliced(...e){return fo(this).toSpliced(...e)},unshift(...e){return ya(this,"unshift",e)},values(){return ou(this,"values",e=>Ki(this,e))}};function ou(e,t,n){const i=Up(e),s=i[t]();return i!==e&&!Ui(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const GS=Array.prototype;function ps(e,t,n,i,s,r){const o=Up(e),a=o!==e&&!Ui(e),l=o[t];if(l!==GS[t]){const d=l.apply(e,r);return a?Gs(d):d}let c=n;o!==e&&(a?c=function(d,f){return n.call(this,Ki(e,d),f,e)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,e)}));const h=l.call(o,c,i);return a&&s?s(h):h}function Om(e,t,n,i){const s=Up(e),r=s!==e&&!Ui(e);let o=n,a=!1;s!==e&&(r?(a=i.length===0,o=function(c,h,d){return a&&(a=!1,c=Ki(e,c)),n.call(this,c,Ki(e,h),d,e)}):n.length>3&&(o=function(c,h,d){return n.call(this,c,h,d,e)}));const l=s[t](o,...i);return a?Ki(e,l):l}function au(e,t,n){const i=we(e);Pn(i,"iterate",Sl);const s=i[t](...n);return(s===-1||s===!1)&&Bp(n[0])?(n[0]=we(n[0]),i[t](...n)):s}function ya(e,t,n=[]){Hs(),Lp();const i=we(e)[t].apply(e,n);return Dp(),Vs(),i}const WS=wp("__proto__,__v_isRef,__isVue"),pv=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(as));function XS(e){as(e)||(e=String(e));const t=we(this);return Pn(t,"has",e),t.hasOwnProperty(e)}class mv{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?eM:vv:r?xv:gv).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=ee(t);if(!s){let l;if(o&&(l=VS[n]))return l;if(n==="hasOwnProperty")return XS}const a=Reflect.get(t,n,Dn(t)?t:i);if((as(n)?pv.has(n):WS(n))||(s||Pn(t,"get",n),r))return a;if(Dn(a)){const l=o&&Ap(n)?a:a.value;return s&&Fe(l)?rf(l):l}return Fe(a)?s?rf(a):Ml(a):a}}class _v extends mv{constructor(t=!1){super(!1,t)}set(t,n,i,s){let r=t[n];const o=ee(t)&&Ap(n);if(!this._isShallow){const c=yr(r);if(!Ui(i)&&!yr(i)&&(r=we(r),i=we(i)),!o&&Dn(r)&&!Dn(i))return c||(r.value=i),!0}const a=o?Number(n)<t.length:Te(t,n),l=Reflect.set(t,n,i,Dn(t)?t:s);return t===we(s)&&(a?ts(i,r)&&Is(t,"set",n,i):Is(t,"add",n,i)),l}deleteProperty(t,n){const i=Te(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&i&&Is(t,"delete",n,void 0),s}has(t,n){const i=Reflect.has(t,n);return(!as(n)||!pv.has(n))&&Pn(t,"has",n),i}ownKeys(t){return Pn(t,"iterate",ee(t)?"length":Qr),Reflect.ownKeys(t)}}class $S extends mv{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const YS=new _v,jS=new $S,qS=new _v(!0);const sf=e=>e,Xl=e=>Reflect.getPrototypeOf(e);function KS(e,t,n){return function(...i){const s=this.__v_raw,r=we(s),o=Qo(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...i),h=n?sf:t?bl:Gs;return!t&&Pn(r,"iterate",l?nf:Qr),En(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[h(d[0]),h(d[1])]:h(d),done:f}}})}}function $l(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ZS(e,t){const n={get(s){const r=this.__v_raw,o=we(r),a=we(s);e||(ts(s,a)&&Pn(o,"get",s),Pn(o,"get",a));const{has:l}=Xl(o),c=t?sf:e?bl:Gs;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Pn(we(s),"iterate",Qr),s.size},has(s){const r=this.__v_raw,o=we(r),a=we(s);return e||(ts(s,a)&&Pn(o,"has",s),Pn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=we(a),c=t?sf:e?bl:Gs;return!e&&Pn(l,"iterate",Qr),a.forEach((h,d)=>s.call(r,c(h),c(d),o))}};return En(n,e?{add:$l("add"),set:$l("set"),delete:$l("delete"),clear:$l("clear")}:{add(s){const r=we(this),o=Xl(r),a=we(s),l=!t&&!Ui(s)&&!yr(s)?a:s;return o.has.call(r,l)||ts(s,l)&&o.has.call(r,s)||ts(a,l)&&o.has.call(r,a)||(r.add(l),Is(r,"add",l,l)),this},set(s,r){!t&&!Ui(r)&&!yr(r)&&(r=we(r));const o=we(this),{has:a,get:l}=Xl(o);let c=a.call(o,s);c||(s=we(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?ts(r,h)&&Is(o,"set",s,r):Is(o,"add",s,r),this},delete(s){const r=we(this),{has:o,get:a}=Xl(r);let l=o.call(r,s);l||(s=we(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Is(r,"delete",s,void 0),c},clear(){const s=we(this),r=s.size!==0,o=s.clear();return r&&Is(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=KS(s,e,t)}),n}function Np(e,t){const n=ZS(e,t);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(Te(n,s)&&s in i?n:i,s,r)}const JS={get:Np(!1,!1)},QS={get:Np(!1,!0)},tM={get:Np(!0,!1)};const gv=new WeakMap,xv=new WeakMap,vv=new WeakMap,eM=new WeakMap;function nM(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function iM(e){return e.__v_skip||!Object.isExtensible(e)?0:nM(RS(e))}function Ml(e){return yr(e)?e:Fp(e,!1,YS,JS,gv)}function sM(e){return Fp(e,!1,qS,QS,xv)}function rf(e){return Fp(e,!0,jS,tM,vv)}function Fp(e,t,n,i,s){if(!Fe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=iM(e);if(r===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,r===2?i:n);return s.set(e,a),a}function ta(e){return yr(e)?ta(e.__v_raw):!!(e&&e.__v_isReactive)}function yr(e){return!!(e&&e.__v_isReadonly)}function Ui(e){return!!(e&&e.__v_isShallow)}function Bp(e){return e?!!e.__v_raw:!1}function we(e){const t=e&&e.__v_raw;return t?we(t):e}function rM(e){return!Te(e,"__v_skip")&&Object.isExtensible(e)&&nv(e,"__v_skip",!0),e}const Gs=e=>Fe(e)?Ml(e):e,bl=e=>Fe(e)?rf(e):e;function Dn(e){return e?e.__v_isRef===!0:!1}function kp(e){return oM(e,!1)}function oM(e,t){return Dn(e)?e:new aM(e,t)}class aM{constructor(t,n){this.dep=new Op,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:we(t),this._value=n?t:Gs(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Ui(t)||yr(t);t=i?t:we(t),ts(t,n)&&(this._rawValue=t,this._value=i?t:Gs(t),this.dep.trigger())}}function lM(e){return Dn(e)?e.value:e}const cM={get:(e,t,n)=>t==="__v_raw"?e:lM(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return Dn(s)&&!Dn(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function yv(e){return ta(e)?e:new Proxy(e,cM)}class hM{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Op(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=yl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ze!==this)return lv(this,!0),!0}get value(){const t=this.dep.track();return uv(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function uM(e,t,n=!1){let i,s;return oe(e)?i=e:(i=e.get,s=e.set),new hM(i,s,n)}const Yl={},gh=new WeakMap;let Gr;function dM(e,t=!1,n=Gr){if(n){let i=gh.get(n);i||gh.set(n,i=[]),i.push(e)}}function fM(e,t,n=Ne){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=M=>s?M:Ui(M)||s===!1||s===0?Os(M,1):Os(M);let h,d,f,u,g=!1,_=!1;if(Dn(e)?(d=()=>e.value,g=Ui(e)):ta(e)?(d=()=>c(e),g=!0):ee(e)?(_=!0,g=e.some(M=>ta(M)||Ui(M)),d=()=>e.map(M=>{if(Dn(M))return M.value;if(ta(M))return c(M);if(oe(M))return l?l(M,2):M()})):oe(e)?t?d=l?()=>l(e,2):e:d=()=>{if(f){Hs();try{f()}finally{Vs()}}const M=Gr;Gr=h;try{return l?l(e,3,[u]):e(u)}finally{Gr=M}}:d=is,t&&s){const M=d,C=s===!0?1/0:s;d=()=>Os(M(),C)}const m=kS(),p=()=>{h.stop(),m&&m.active&&Tp(m.effects,h)};if(r&&t){const M=t;t=(...C)=>{M(...C),p()}}let v=_?new Array(e.length).fill(Yl):Yl;const y=M=>{if(!(!(h.flags&1)||!h.dirty&&!M))if(t){const C=h.run();if(s||g||(_?C.some((w,R)=>ts(w,v[R])):ts(C,v))){f&&f();const w=Gr;Gr=h;try{const R=[C,v===Yl?void 0:_&&v[0]===Yl?[]:v,u];v=C,l?l(t,3,R):t(...R)}finally{Gr=w}}}else h.run()};return a&&a(y),h=new ov(d),h.scheduler=o?()=>o(y,!1):y,u=M=>dM(M,!1,h),f=h.onStop=()=>{const M=gh.get(h);if(M){if(l)l(M,4);else for(const C of M)C();gh.delete(h)}},t?i?y(!0):v=h.run():o?o(y.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function Os(e,t=1/0,n){if(t<=0||!Fe(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Dn(e))Os(e.value,t,n);else if(ee(e))for(let i=0;i<e.length;i++)Os(e[i],t,n);else if(Zx(e)||Qo(e))e.forEach(i=>{Os(i,t,n)});else if(tv(e)){for(const i in e)Os(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Os(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Il(e,t,n,i){try{return i?e(...i):e()}catch(s){kh(s,t,n)}}function ls(e,t,n,i){if(oe(e)){const s=Il(e,t,n,i);return s&&Jx(s)&&s.catch(r=>{kh(r,t,n)}),s}if(ee(e)){const s=[];for(let r=0;r<e.length;r++)s.push(ls(e[r],t,n,i));return s}}function kh(e,t,n,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Ne;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](e,l,c)===!1)return}a=a.parent}if(r){Hs(),Il(r,null,10,[e,l,c]),Vs();return}}pM(e,n,s,i,o)}function pM(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const Bn=[];let ji=-1;const ea=[];let cr=null,Xo=0;const Sv=Promise.resolve();let xh=null;function mM(e){const t=xh||Sv;return e?t.then(this?e.bind(this):e):t}function _M(e){let t=ji+1,n=Bn.length;for(;t<n;){const i=t+n>>>1,s=Bn[i],r=El(s);r<e||r===e&&s.flags&2?t=i+1:n=i}return t}function zp(e){if(!(e.flags&1)){const t=El(e),n=Bn[Bn.length-1];!n||!(e.flags&2)&&t>=El(n)?Bn.push(e):Bn.splice(_M(t),0,e),e.flags|=1,Mv()}}function Mv(){xh||(xh=Sv.then(Ev))}function gM(e){ee(e)?ea.push(...e):cr&&e.id===-1?cr.splice(Xo+1,0,e):e.flags&1||(ea.push(e),e.flags|=1),Mv()}function Um(e,t,n=ji+1){for(;n<Bn.length;n++){const i=Bn[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Bn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function bv(e){if(ea.length){const t=[...new Set(ea)].sort((n,i)=>El(n)-El(i));if(ea.length=0,cr){cr.push(...t);return}for(cr=t,Xo=0;Xo<cr.length;Xo++){const n=cr[Xo];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}cr=null,Xo=0}}const El=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ev(e){try{for(ji=0;ji<Bn.length;ji++){const t=Bn[ji];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Il(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;ji<Bn.length;ji++){const t=Bn[ji];t&&(t.flags&=-2)}ji=-1,Bn.length=0,bv(),xh=null,(Bn.length||ea.length)&&Ev()}}let _i=null,wv=null;function vh(e){const t=_i;return _i=e,wv=e&&e.type.__scopeId||null,t}function xM(e,t=_i,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&$m(-1);const r=vh(t);let o;try{o=e(...s)}finally{vh(r),i._d&&$m(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function jl(e,t){if(_i===null)return e;const n=Gh(_i),i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=Ne]=t[s];r&&(oe(r)&&(r={mounted:r,updated:r}),r.deep&&Os(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Rr(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(Hs(),ls(l,n,8,[e.el,a,e,t]),Vs())}}function vM(e,t){if(kn){let n=kn.provides;const i=kn.parent&&kn.parent.provides;i===n&&(n=kn.provides=Object.create(i)),n[e]=t}}function nh(e,t,n=!1){const i=gb();if(i||na){let s=na?na._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&oe(t)?t.call(i&&i.proxy):t}}const yM=Symbol.for("v-scx"),SM=()=>nh(yM);function dl(e,t,n){return Tv(e,t,n)}function Tv(e,t,n=Ne){const{immediate:i,deep:s,flush:r,once:o}=n,a=En({},n),l=t&&i||!t&&r!=="post";let c;if(Tl){if(r==="sync"){const u=SM();c=u.__watcherHandles||(u.__watcherHandles=[])}else if(!l){const u=()=>{};return u.stop=is,u.resume=is,u.pause=is,u}}const h=kn;a.call=(u,g,_)=>ls(u,h,g,_);let d=!1;r==="post"?a.scheduler=u=>{Yn(u,h&&h.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(u,g)=>{g?u():zp(u)}),a.augmentJob=u=>{t&&(u.flags|=4),d&&(u.flags|=2,h&&(u.id=h.uid,u.i=h))};const f=fM(e,t,a);return Tl&&(c?c.push(f):l&&f()),f}function MM(e,t,n){const i=this.proxy,s=dn(e)?e.includes(".")?Av(i,e):()=>i[e]:e.bind(i,i);let r;oe(t)?r=t:(r=t.handler,n=t);const o=Ol(this),a=Tv(s,r.bind(i),n);return o(),a}function Av(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const bM=Symbol("_vte"),EM=e=>e.__isTeleport,wM=Symbol("_leaveCb");function Hp(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Hp(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Vp(e,t){return oe(e)?En({name:e.name},t,{setup:e}):e}function Rv(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Nm(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const yh=new WeakMap;function fl(e,t,n,i,s=!1){if(ee(e)){e.forEach((_,m)=>fl(_,t&&(ee(t)?t[m]:t),n,i,s));return}if(pl(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&fl(e,t,n,i.component.subTree);return}const r=i.shapeFlag&4?Gh(i.component):i.el,o=s?null:r,{i:a,r:l}=e,c=t&&t.r,h=a.refs===Ne?a.refs={}:a.refs,d=a.setupState,f=we(d),u=d===Ne?Kx:_=>Nm(h,_)?!1:Te(f,_),g=(_,m)=>!(m&&Nm(h,m));if(c!=null&&c!==l){if(Fm(t),dn(c))h[c]=null,u(c)&&(d[c]=null);else if(Dn(c)){const _=t;g(c,_.k)&&(c.value=null),_.k&&(h[_.k]=null)}}if(oe(l))Il(l,a,12,[o,h]);else{const _=dn(l),m=Dn(l);if(_||m){const p=()=>{if(e.f){const v=_?u(l)?d[l]:h[l]:g()||!e.k?l.value:h[e.k];if(s)ee(v)&&Tp(v,r);else if(ee(v))v.includes(r)||v.push(r);else if(_)h[l]=[r],u(l)&&(d[l]=h[l]);else{const y=[r];g(l,e.k)&&(l.value=y),e.k&&(h[e.k]=y)}}else _?(h[l]=o,u(l)&&(d[l]=o)):m&&(g(l,e.k)&&(l.value=o),e.k&&(h[e.k]=o))};if(o){const v=()=>{p(),yh.delete(e)};v.id=-1,yh.set(e,v),Yn(v,n)}else Fm(e),p()}}}function Fm(e){const t=yh.get(e);t&&(t.flags|=8,yh.delete(e))}Bh().requestIdleCallback;Bh().cancelIdleCallback;const pl=e=>!!e.type.__asyncLoader,Cv=e=>e.type.__isKeepAlive;function TM(e,t){Pv(e,"a",t)}function AM(e,t){Pv(e,"da",t)}function Pv(e,t,n=kn){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(zh(t,i,n),n){let s=n.parent;for(;s&&s.parent;)Cv(s.parent.vnode)&&RM(i,t,n,s),s=s.parent}}function RM(e,t,n,i){const s=zh(t,e,i,!0);Lv(()=>{Tp(i[t],s)},n)}function zh(e,t,n=kn,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{Hs();const a=Ol(n),l=ls(t,n,e,o);return a(),Vs(),l});return i?s.unshift(r):s.push(r),r}}const Ys=e=>(t,n=kn)=>{(!Tl||e==="sp")&&zh(e,(...i)=>t(...i),n)},CM=Ys("bm"),Gp=Ys("m"),PM=Ys("bu"),LM=Ys("u"),Wp=Ys("bum"),Lv=Ys("um"),DM=Ys("sp"),IM=Ys("rtg"),OM=Ys("rtc");function UM(e,t=kn){zh("ec",e,t)}const NM=Symbol.for("v-ndc"),of=e=>e?Jv(e)?Gh(e):of(e.parent):null,ml=En(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>of(e.parent),$root:e=>of(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Iv(e),$forceUpdate:e=>e.f||(e.f=()=>{zp(e.update)}),$nextTick:e=>e.n||(e.n=mM.bind(e.proxy)),$watch:e=>MM.bind(e)}),lu=(e,t)=>e!==Ne&&!e.__isScriptSetup&&Te(e,t),FM={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=e;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(lu(i,t))return o[t]=1,i[t];if(s!==Ne&&Te(s,t))return o[t]=2,s[t];if(Te(r,t))return o[t]=3,r[t];if(n!==Ne&&Te(n,t))return o[t]=4,n[t];af&&(o[t]=0)}}const c=ml[t];let h,d;if(c)return t==="$attrs"&&Pn(e.attrs,"get",""),c(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==Ne&&Te(n,t))return o[t]=4,n[t];if(d=l.config.globalProperties,Te(d,t))return d[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return lu(s,t)?(s[t]=n,!0):i!==Ne&&Te(i,t)?(i[t]=n,!0):Te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||e!==Ne&&a[0]!=="$"&&Te(e,a)||lu(t,a)||Te(r,a)||Te(i,a)||Te(ml,a)||Te(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Bm(e){return ee(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let af=!0;function BM(e){const t=Iv(e),n=e.proxy,i=e.ctx;af=!1,t.beforeCreate&&km(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:d,mounted:f,beforeUpdate:u,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:v,destroyed:y,unmounted:M,render:C,renderTracked:w,renderTriggered:R,errorCaptured:S,serverPrefetch:T,expose:O,inheritAttrs:L,components:I,directives:V,filters:Y}=t;if(c&&kM(c,i,null),o)for(const B in o){const j=o[B];oe(j)&&(i[B]=j.bind(n))}if(s){const B=s.call(n,n);Fe(B)&&(e.data=Ml(B))}if(af=!0,r)for(const B in r){const j=r[B],st=oe(j)?j.bind(n,n):oe(j.get)?j.get.bind(n,n):is,vt=!oe(j)&&oe(j.set)?j.set.bind(n):is,ht=bb({get:st,set:vt});Object.defineProperty(i,B,{enumerable:!0,configurable:!0,get:()=>ht.value,set:tt=>ht.value=tt})}if(a)for(const B in a)Dv(a[B],i,n,B);if(l){const B=oe(l)?l.call(n):l;Reflect.ownKeys(B).forEach(j=>{vM(j,B[j])})}h&&km(h,e,"c");function k(B,j){ee(j)?j.forEach(st=>B(st.bind(n))):j&&B(j.bind(n))}if(k(CM,d),k(Gp,f),k(PM,u),k(LM,g),k(TM,_),k(AM,m),k(UM,S),k(OM,w),k(IM,R),k(Wp,v),k(Lv,M),k(DM,T),ee(O))if(O.length){const B=e.exposed||(e.exposed={});O.forEach(j=>{Object.defineProperty(B,j,{get:()=>n[j],set:st=>n[j]=st,enumerable:!0})})}else e.exposed||(e.exposed={});C&&e.render===is&&(e.render=C),L!=null&&(e.inheritAttrs=L),I&&(e.components=I),V&&(e.directives=V),T&&Rv(e)}function kM(e,t,n=is){ee(e)&&(e=lf(e));for(const i in e){const s=e[i];let r;Fe(s)?"default"in s?r=nh(s.from||i,s.default,!0):r=nh(s.from||i):r=nh(s),Dn(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function km(e,t,n){ls(ee(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Dv(e,t,n,i){let s=i.includes(".")?Av(n,i):()=>n[i];if(dn(e)){const r=t[e];oe(r)&&dl(s,r)}else if(oe(e))dl(s,e.bind(n));else if(Fe(e))if(ee(e))e.forEach(r=>Dv(r,t,n,i));else{const r=oe(e.handler)?e.handler.bind(n):t[e.handler];oe(r)&&dl(s,r,e)}}function Iv(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!n&&!i?l=t:(l={},s.length&&s.forEach(c=>Sh(l,c,o,!0)),Sh(l,t,o)),Fe(t)&&r.set(t,l),l}function Sh(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&Sh(e,r,n,!0),s&&s.forEach(o=>Sh(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=zM[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const zM={data:zm,props:Hm,emits:Hm,methods:nl,computed:nl,beforeCreate:Un,created:Un,beforeMount:Un,mounted:Un,beforeUpdate:Un,updated:Un,beforeDestroy:Un,beforeUnmount:Un,destroyed:Un,unmounted:Un,activated:Un,deactivated:Un,errorCaptured:Un,serverPrefetch:Un,components:nl,directives:nl,watch:VM,provide:zm,inject:HM};function zm(e,t){return t?e?function(){return En(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function HM(e,t){return nl(lf(e),lf(t))}function lf(e){if(ee(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Un(e,t){return e?[...new Set([].concat(e,t))]:t}function nl(e,t){return e?En(Object.create(null),e,t):t}function Hm(e,t){return e?ee(e)&&ee(t)?[...new Set([...e,...t])]:En(Object.create(null),Bm(e),Bm(t??{})):t}function VM(e,t){if(!e)return t;if(!t)return e;const n=En(Object.create(null),e);for(const i in t)n[i]=Un(e[i],t[i]);return n}function Ov(){return{app:null,config:{isNativeTag:Kx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let GM=0;function WM(e,t){return function(i,s=null){oe(i)||(i=En({},i)),s!=null&&!Fe(s)&&(s=null);const r=Ov(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:GM++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Eb,get config(){return r.config},set config(h){},use(h,...d){return o.has(h)||(h&&oe(h.install)?(o.add(h),h.install(c,...d)):oe(h)&&(o.add(h),h(c,...d))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,d){return d?(r.components[h]=d,c):r.components[h]},directive(h,d){return d?(r.directives[h]=d,c):r.directives[h]},mount(h,d,f){if(!l){const u=c._ceVNode||Ni(i,s);return u.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),e(u,h,f),l=!0,c._container=h,h.__vue_app__=c,Gh(u.component)}},onUnmount(h){a.push(h)},unmount(){l&&(ls(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(h,d){return r.provides[h]=d,c},runWithContext(h){const d=na;na=c;try{return h()}finally{na=d}}};return c}}let na=null;const XM=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Ii(t)}Modifiers`]||e[`${ao(t)}Modifiers`];function $M(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||Ne;let s=n;const r=t.startsWith("update:"),o=r&&XM(i,t.slice(7));o&&(o.trim&&(s=n.map(h=>dn(h)?h.trim():h)),o.number&&(s=n.map(Rp)));let a,l=i[a=iu(t)]||i[a=iu(Ii(t))];!l&&r&&(l=i[a=iu(ao(t))]),l&&ls(l,e,6,s);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,ls(c,e,6,s)}}const YM=new WeakMap;function Uv(e,t,n=!1){const i=n?YM:t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!oe(e)){const l=c=>{const h=Uv(c,t,!0);h&&(a=!0,En(o,h))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(Fe(e)&&i.set(e,null),null):(ee(r)?r.forEach(l=>o[l]=null):En(o,r),Fe(e)&&i.set(e,o),o)}function Hh(e,t){return!e||!Uh(t)?!1:(t=t.slice(2).replace(/Once$/,""),Te(e,t[0].toLowerCase()+t.slice(1))||Te(e,ao(t))||Te(e,t))}function Vm(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:d,data:f,setupState:u,ctx:g,inheritAttrs:_}=e,m=vh(e);let p,v;try{if(n.shapeFlag&4){const M=s||i,C=M;p=Zi(c.call(C,M,h,d,u,f,g)),v=a}else{const M=t;p=Zi(M.length>1?M(d,{attrs:a,slots:o,emit:l}):M(d,null)),v=t.props?a:jM(a)}}catch(M){_l.length=0,kh(M,e,1),p=Ni(Sr)}let y=p;if(v&&_!==!1){const M=Object.keys(v),{shapeFlag:C}=y;M.length&&C&7&&(r&&M.some(Nh)&&(v=qM(v,r)),y=la(y,v,!1,!0))}return n.dirs&&(y=la(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&Hp(y,n.transition),p=y,vh(m),p}const jM=e=>{let t;for(const n in e)(n==="class"||n==="style"||Uh(n))&&((t||(t={}))[n]=e[n]);return t},qM=(e,t)=>{const n={};for(const i in e)(!Nh(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function KM(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Gm(i,o,c):!!o;if(l&8){const h=t.dynamicProps;for(let d=0;d<h.length;d++){const f=h[d];if(Nv(o,i,f)&&!Hh(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gm(i,o,c):!0:!!o;return!1}function Gm(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Nv(t,e,r)&&!Hh(n,r))return!0}return!1}function Nv(e,t,n){const i=e[n],s=t[n];return n==="style"&&Fe(i)&&Fe(s)?!Pp(i,s):i!==s}function ZM({vnode:e,parent:t,suspense:n},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=i,e=s),s===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const Fv={},Bv=()=>Object.create(Fv),kv=e=>Object.getPrototypeOf(e)===Fv;function JM(e,t,n,i=!1){const s={},r=Bv();e.propsDefaults=Object.create(null),zv(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:sM(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function QM(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=we(s),[l]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=e.vnode.dynamicProps;for(let d=0;d<h.length;d++){let f=h[d];if(Hh(e.emitsOptions,f))continue;const u=t[f];if(l)if(Te(r,f))u!==r[f]&&(r[f]=u,c=!0);else{const g=Ii(f);s[g]=cf(l,a,g,u,e,!1)}else u!==r[f]&&(r[f]=u,c=!0)}}}else{zv(e,t,s,r)&&(c=!0);let h;for(const d in a)(!t||!Te(t,d)&&((h=ao(d))===d||!Te(t,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=cf(l,a,d,void 0,e,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!Te(t,d))&&(delete r[d],c=!0)}c&&Is(e.attrs,"set","")}function zv(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(cl(l))continue;const c=t[l];let h;s&&Te(s,h=Ii(l))?!r||!r.includes(h)?n[h]=c:(a||(a={}))[h]=c:Hh(e.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=we(n),c=a||Ne;for(let h=0;h<r.length;h++){const d=r[h];n[d]=cf(s,l,d,c[d],e,!Te(c,d))}}return o}function cf(e,t,n,i,s,r){const o=e[n];if(o!=null){const a=Te(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&oe(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const h=Ol(s);i=c[n]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ao(n))&&(i=!0))}return i}const tb=new WeakMap;function Hv(e,t,n=!1){const i=n?tb:t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let l=!1;if(!oe(e)){const h=d=>{l=!0;const[f,u]=Hv(d,t,!0);En(o,f),u&&a.push(...u)};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!r&&!l)return Fe(e)&&i.set(e,Jo),Jo;if(ee(r))for(let h=0;h<r.length;h++){const d=Ii(r[h]);Wm(d)&&(o[d]=Ne)}else if(r)for(const h in r){const d=Ii(h);if(Wm(d)){const f=r[h],u=o[d]=ee(f)||oe(f)?{type:f}:En({},f),g=u.type;let _=!1,m=!0;if(ee(g))for(let p=0;p<g.length;++p){const v=g[p],y=oe(v)&&v.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(m=!1)}else _=oe(g)&&g.name==="Boolean";u[0]=_,u[1]=m,(_||Te(u,"default"))&&a.push(d)}}const c=[o,a];return Fe(e)&&i.set(e,c),c}function Wm(e){return e[0]!=="$"&&!cl(e)}const Xp=e=>e==="_"||e==="_ctx"||e==="$stable",$p=e=>ee(e)?e.map(Zi):[Zi(e)],eb=(e,t,n)=>{if(t._n)return t;const i=xM((...s)=>$p(t(...s)),n);return i._c=!1,i},Vv=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Xp(s))continue;const r=e[s];if(oe(r))t[s]=eb(s,r,i);else if(r!=null){const o=$p(r);t[s]=()=>o}}},Gv=(e,t)=>{const n=$p(t);e.slots.default=()=>n},Wv=(e,t,n)=>{for(const i in t)(n||!Xp(i))&&(e[i]=t[i])},nb=(e,t,n)=>{const i=e.slots=Bv();if(e.vnode.shapeFlag&32){const s=t._;s?(Wv(i,t,n),n&&nv(i,"_",s,!0)):Vv(t,i)}else t&&Gv(e,t)},ib=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=Ne;if(i.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Wv(s,t,n):(r=!t.$stable,Vv(t,s)),o=t}else t&&(Gv(e,t),o={default:1});if(r)for(const a in s)!Xp(a)&&o[a]==null&&delete s[a]},Yn=lb;function sb(e){return rb(e)}function rb(e,t){const n=Bh();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:d,nextSibling:f,setScopeId:u=is,insertStaticContent:g}=e,_=(P,D,W,nt=null,K=null,et=null,ut=void 0,ft=null,A=!!D.dynamicChildren)=>{if(P===D)return;P&&!Sa(P,D)&&(nt=Tt(P),tt(P,K,et,!0),P=null),D.patchFlag===-2&&(A=!1,D.dynamicChildren=null);const{type:ot,ref:gt,shapeFlag:ct}=D;switch(ot){case Vh:m(P,D,W,nt);break;case Sr:p(P,D,W,nt);break;case hu:P==null&&v(D,W,nt,ut);break;case Ls:I(P,D,W,nt,K,et,ut,ft,A);break;default:ct&1?C(P,D,W,nt,K,et,ut,ft,A):ct&6?V(P,D,W,nt,K,et,ut,ft,A):(ct&64||ct&128)&&ot.process(P,D,W,nt,K,et,ut,ft,A,Dt)}gt!=null&&K?fl(gt,P&&P.ref,et,D||P,!D):gt==null&&P&&P.ref!=null&&fl(P.ref,null,et,P,!0)},m=(P,D,W,nt)=>{if(P==null)i(D.el=a(D.children),W,nt);else{const K=D.el=P.el;D.children!==P.children&&c(K,D.children)}},p=(P,D,W,nt)=>{P==null?i(D.el=l(D.children||""),W,nt):D.el=P.el},v=(P,D,W,nt)=>{[P.el,P.anchor]=g(P.children,D,W,nt,P.el,P.anchor)},y=({el:P,anchor:D},W,nt)=>{let K;for(;P&&P!==D;)K=f(P),i(P,W,nt),P=K;i(D,W,nt)},M=({el:P,anchor:D})=>{let W;for(;P&&P!==D;)W=f(P),s(P),P=W;s(D)},C=(P,D,W,nt,K,et,ut,ft,A)=>{if(D.type==="svg"?ut="svg":D.type==="math"&&(ut="mathml"),P==null)w(D,W,nt,K,et,ut,ft,A);else{const ot=P.el&&P.el._isVueCE?P.el:null;try{ot&&ot._beginPatch(),T(P,D,K,et,ut,ft,A)}finally{ot&&ot._endPatch()}}},w=(P,D,W,nt,K,et,ut,ft)=>{let A,ot;const{props:gt,shapeFlag:ct,transition:Z,dirs:At}=P;if(A=P.el=o(P.type,et,gt&&gt.is,gt),ct&8?h(A,P.children):ct&16&&S(P.children,A,null,nt,K,cu(P,et),ut,ft),At&&Rr(P,null,nt,"created"),R(A,P,P.scopeId,ut,nt),gt){for(const x in gt)x!=="value"&&!cl(x)&&r(A,x,null,gt[x],et,nt);"value"in gt&&r(A,"value",null,gt.value,et),(ot=gt.onVnodeBeforeMount)&&Vi(ot,nt,P)}At&&Rr(P,null,nt,"beforeMount");const E=ob(K,Z);E&&Z.beforeEnter(A),i(A,D,W),((ot=gt&&gt.onVnodeMounted)||E||At)&&Yn(()=>{try{ot&&Vi(ot,nt,P),E&&Z.enter(A),At&&Rr(P,null,nt,"mounted")}finally{}},K)},R=(P,D,W,nt,K)=>{if(W&&u(P,W),nt)for(let et=0;et<nt.length;et++)u(P,nt[et]);if(K){let et=K.subTree;if(D===et||jv(et.type)&&(et.ssContent===D||et.ssFallback===D)){const ut=K.vnode;R(P,ut,ut.scopeId,ut.slotScopeIds,K.parent)}}},S=(P,D,W,nt,K,et,ut,ft,A=0)=>{for(let ot=A;ot<P.length;ot++){const gt=P[ot]=ft?Ds(P[ot]):Zi(P[ot]);_(null,gt,D,W,nt,K,et,ut,ft)}},T=(P,D,W,nt,K,et,ut)=>{const ft=D.el=P.el;let{patchFlag:A,dynamicChildren:ot,dirs:gt}=D;A|=P.patchFlag&16;const ct=P.props||Ne,Z=D.props||Ne;let At;if(W&&Cr(W,!1),(At=Z.onVnodeBeforeUpdate)&&Vi(At,W,D,P),gt&&Rr(D,P,W,"beforeUpdate"),W&&Cr(W,!0),(ct.innerHTML&&Z.innerHTML==null||ct.textContent&&Z.textContent==null)&&h(ft,""),ot?O(P.dynamicChildren,ot,ft,W,nt,cu(D,K),et):ut||j(P,D,ft,null,W,nt,cu(D,K),et,!1),A>0){if(A&16)L(ft,ct,Z,W,K);else if(A&2&&ct.class!==Z.class&&r(ft,"class",null,Z.class,K),A&4&&r(ft,"style",ct.style,Z.style,K),A&8){const E=D.dynamicProps;for(let x=0;x<E.length;x++){const F=E[x],q=ct[F],it=Z[F];(it!==q||F==="value")&&r(ft,F,q,it,K,W)}}A&1&&P.children!==D.children&&h(ft,D.children)}else!ut&&ot==null&&L(ft,ct,Z,W,K);((At=Z.onVnodeUpdated)||gt)&&Yn(()=>{At&&Vi(At,W,D,P),gt&&Rr(D,P,W,"updated")},nt)},O=(P,D,W,nt,K,et,ut)=>{for(let ft=0;ft<D.length;ft++){const A=P[ft],ot=D[ft],gt=A.el&&(A.type===Ls||!Sa(A,ot)||A.shapeFlag&198)?d(A.el):W;_(A,ot,gt,null,nt,K,et,ut,!0)}},L=(P,D,W,nt,K)=>{if(D!==W){if(D!==Ne)for(const et in D)!cl(et)&&!(et in W)&&r(P,et,D[et],null,K,nt);for(const et in W){if(cl(et))continue;const ut=W[et],ft=D[et];ut!==ft&&et!=="value"&&r(P,et,ft,ut,K,nt)}"value"in W&&r(P,"value",D.value,W.value,K)}},I=(P,D,W,nt,K,et,ut,ft,A)=>{const ot=D.el=P?P.el:a(""),gt=D.anchor=P?P.anchor:a("");let{patchFlag:ct,dynamicChildren:Z,slotScopeIds:At}=D;At&&(ft=ft?ft.concat(At):At),P==null?(i(ot,W,nt),i(gt,W,nt),S(D.children||[],W,gt,K,et,ut,ft,A)):ct>0&&ct&64&&Z&&P.dynamicChildren&&P.dynamicChildren.length===Z.length?(O(P.dynamicChildren,Z,W,K,et,ut,ft),(D.key!=null||K&&D===K.subTree)&&Xv(P,D,!0)):j(P,D,W,gt,K,et,ut,ft,A)},V=(P,D,W,nt,K,et,ut,ft,A)=>{D.slotScopeIds=ft,P==null?D.shapeFlag&512?K.ctx.activate(D,W,nt,ut,A):Y(D,W,nt,K,et,ut,A):U(P,D,A)},Y=(P,D,W,nt,K,et,ut)=>{const ft=P.component=_b(P,nt,K);if(Cv(P)&&(ft.ctx.renderer=Dt),xb(ft,!1,ut),ft.asyncDep){if(K&&K.registerDep(ft,k,ut),!P.el){const A=ft.subTree=Ni(Sr);p(null,A,D,W),P.placeholder=A.el}}else k(ft,P,D,W,K,et,ut)},U=(P,D,W)=>{const nt=D.component=P.component;if(KM(P,D,W))if(nt.asyncDep&&!nt.asyncResolved){B(nt,D,W);return}else nt.next=D,nt.update();else D.el=P.el,nt.vnode=D},k=(P,D,W,nt,K,et,ut)=>{const ft=()=>{if(P.isMounted){let{next:ct,bu:Z,u:At,parent:E,vnode:x}=P;{const _t=$v(P);if(_t){ct&&(ct.el=x.el,B(P,ct,ut)),_t.asyncDep.then(()=>{Yn(()=>{P.isUnmounted||ot()},K)});return}}let F=ct,q;Cr(P,!1),ct?(ct.el=x.el,B(P,ct,ut)):ct=x,Z&&eh(Z),(q=ct.props&&ct.props.onVnodeBeforeUpdate)&&Vi(q,E,ct,x),Cr(P,!0);const it=Vm(P),pt=P.subTree;P.subTree=it,_(pt,it,d(pt.el),Tt(pt),P,K,et),ct.el=it.el,F===null&&ZM(P,it.el),At&&Yn(At,K),(q=ct.props&&ct.props.onVnodeUpdated)&&Yn(()=>Vi(q,E,ct,x),K)}else{let ct;const{el:Z,props:At}=D,{bm:E,m:x,parent:F,root:q,type:it}=P,pt=pl(D);Cr(P,!1),E&&eh(E),!pt&&(ct=At&&At.onVnodeBeforeMount)&&Vi(ct,F,D),Cr(P,!0);{q.ce&&q.ce._hasShadowRoot()&&q.ce._injectChildStyle(it,P.parent?P.parent.type:void 0);const _t=P.subTree=Vm(P);_(null,_t,W,nt,P,K,et),D.el=_t.el}if(x&&Yn(x,K),!pt&&(ct=At&&At.onVnodeMounted)){const _t=D;Yn(()=>Vi(ct,F,_t),K)}(D.shapeFlag&256||F&&pl(F.vnode)&&F.vnode.shapeFlag&256)&&P.a&&Yn(P.a,K),P.isMounted=!0,D=W=nt=null}};P.scope.on();const A=P.effect=new ov(ft);P.scope.off();const ot=P.update=A.run.bind(A),gt=P.job=A.runIfDirty.bind(A);gt.i=P,gt.id=P.uid,A.scheduler=()=>zp(gt),Cr(P,!0),ot()},B=(P,D,W)=>{D.component=P;const nt=P.vnode.props;P.vnode=D,P.next=null,QM(P,D.props,nt,W),ib(P,D.children,W),Hs(),Um(P),Vs()},j=(P,D,W,nt,K,et,ut,ft,A=!1)=>{const ot=P&&P.children,gt=P?P.shapeFlag:0,ct=D.children,{patchFlag:Z,shapeFlag:At}=D;if(Z>0){if(Z&128){vt(ot,ct,W,nt,K,et,ut,ft,A);return}else if(Z&256){st(ot,ct,W,nt,K,et,ut,ft,A);return}}At&8?(gt&16&&rt(ot,K,et),ct!==ot&&h(W,ct)):gt&16?At&16?vt(ot,ct,W,nt,K,et,ut,ft,A):rt(ot,K,et,!0):(gt&8&&h(W,""),At&16&&S(ct,W,nt,K,et,ut,ft,A))},st=(P,D,W,nt,K,et,ut,ft,A)=>{P=P||Jo,D=D||Jo;const ot=P.length,gt=D.length,ct=Math.min(ot,gt);let Z;for(Z=0;Z<ct;Z++){const At=D[Z]=A?Ds(D[Z]):Zi(D[Z]);_(P[Z],At,W,null,K,et,ut,ft,A)}ot>gt?rt(P,K,et,!0,!1,ct):S(D,W,nt,K,et,ut,ft,A,ct)},vt=(P,D,W,nt,K,et,ut,ft,A)=>{let ot=0;const gt=D.length;let ct=P.length-1,Z=gt-1;for(;ot<=ct&&ot<=Z;){const At=P[ot],E=D[ot]=A?Ds(D[ot]):Zi(D[ot]);if(Sa(At,E))_(At,E,W,null,K,et,ut,ft,A);else break;ot++}for(;ot<=ct&&ot<=Z;){const At=P[ct],E=D[Z]=A?Ds(D[Z]):Zi(D[Z]);if(Sa(At,E))_(At,E,W,null,K,et,ut,ft,A);else break;ct--,Z--}if(ot>ct){if(ot<=Z){const At=Z+1,E=At<gt?D[At].el:nt;for(;ot<=Z;)_(null,D[ot]=A?Ds(D[ot]):Zi(D[ot]),W,E,K,et,ut,ft,A),ot++}}else if(ot>Z)for(;ot<=ct;)tt(P[ot],K,et,!0),ot++;else{const At=ot,E=ot,x=new Map;for(ot=E;ot<=Z;ot++){const xt=D[ot]=A?Ds(D[ot]):Zi(D[ot]);xt.key!=null&&x.set(xt.key,ot)}let F,q=0;const it=Z-E+1;let pt=!1,_t=0;const Q=new Array(it);for(ot=0;ot<it;ot++)Q[ot]=0;for(ot=At;ot<=ct;ot++){const xt=P[ot];if(q>=it){tt(xt,K,et,!0);continue}let wt;if(xt.key!=null)wt=x.get(xt.key);else for(F=E;F<=Z;F++)if(Q[F-E]===0&&Sa(xt,D[F])){wt=F;break}wt===void 0?tt(xt,K,et,!0):(Q[wt-E]=ot+1,wt>=_t?_t=wt:pt=!0,_(xt,D[wt],W,null,K,et,ut,ft,A),q++)}const lt=pt?ab(Q):Jo;for(F=lt.length-1,ot=it-1;ot>=0;ot--){const xt=E+ot,wt=D[xt],St=D[xt+1],yt=xt+1<gt?St.el||Yv(St):nt;Q[ot]===0?_(null,wt,W,yt,K,et,ut,ft,A):pt&&(F<0||ot!==lt[F]?ht(wt,W,yt,2):F--)}}},ht=(P,D,W,nt,K=null)=>{const{el:et,type:ut,transition:ft,children:A,shapeFlag:ot}=P;if(ot&6){ht(P.component.subTree,D,W,nt);return}if(ot&128){P.suspense.move(D,W,nt);return}if(ot&64){ut.move(P,D,W,Dt);return}if(ut===Ls){i(et,D,W);for(let ct=0;ct<A.length;ct++)ht(A[ct],D,W,nt);i(P.anchor,D,W);return}if(ut===hu){y(P,D,W);return}if(nt!==2&&ot&1&&ft)if(nt===0)ft.beforeEnter(et),i(et,D,W),Yn(()=>ft.enter(et),K);else{const{leave:ct,delayLeave:Z,afterLeave:At}=ft,E=()=>{P.ctx.isUnmounted?s(et):i(et,D,W)},x=()=>{et._isLeaving&&et[wM](!0),ct(et,()=>{E(),At&&At()})};Z?Z(et,E,x):x()}else i(et,D,W)},tt=(P,D,W,nt=!1,K=!1)=>{const{type:et,props:ut,ref:ft,children:A,dynamicChildren:ot,shapeFlag:gt,patchFlag:ct,dirs:Z,cacheIndex:At,memo:E}=P;if(ct===-2&&(K=!1),ft!=null&&(Hs(),fl(ft,null,W,P,!0),Vs()),At!=null&&(D.renderCache[At]=void 0),gt&256){D.ctx.deactivate(P);return}const x=gt&1&&Z,F=!pl(P);let q;if(F&&(q=ut&&ut.onVnodeBeforeUnmount)&&Vi(q,D,P),gt&6)jt(P.component,W,nt);else{if(gt&128){P.suspense.unmount(W,nt);return}x&&Rr(P,null,D,"beforeUnmount"),gt&64?P.type.remove(P,D,W,Dt,nt):ot&&!ot.hasOnce&&(et!==Ls||ct>0&&ct&64)?rt(ot,D,W,!1,!0):(et===Ls&&ct&384||!K&&gt&16)&&rt(A,D,W),nt&&Jt(P)}const it=E!=null&&At==null;(F&&(q=ut&&ut.onVnodeUnmounted)||x||it)&&Yn(()=>{q&&Vi(q,D,P),x&&Rr(P,null,D,"unmounted"),it&&(P.el=null)},W)},Jt=P=>{const{type:D,el:W,anchor:nt,transition:K}=P;if(D===Ls){$t(W,nt);return}if(D===hu){M(P);return}const et=()=>{s(W),K&&!K.persisted&&K.afterLeave&&K.afterLeave()};if(P.shapeFlag&1&&K&&!K.persisted){const{leave:ut,delayLeave:ft}=K,A=()=>ut(W,et);ft?ft(P.el,et,A):A()}else et()},$t=(P,D)=>{let W;for(;P!==D;)W=f(P),s(P),P=W;s(D)},jt=(P,D,W)=>{const{bum:nt,scope:K,job:et,subTree:ut,um:ft,m:A,a:ot}=P;Xm(A),Xm(ot),nt&&eh(nt),K.stop(),et&&(et.flags|=8,tt(ut,P,D,W)),ft&&Yn(ft,D),Yn(()=>{P.isUnmounted=!0},D)},rt=(P,D,W,nt=!1,K=!1,et=0)=>{for(let ut=et;ut<P.length;ut++)tt(P[ut],D,W,nt,K)},Tt=P=>{if(P.shapeFlag&6)return Tt(P.component.subTree);if(P.shapeFlag&128)return P.suspense.next();const D=f(P.anchor||P.el),W=D&&D[bM];return W?f(W):D};let dt=!1;const Rt=(P,D,W)=>{let nt;P==null?D._vnode&&(tt(D._vnode,null,null,!0),nt=D._vnode.component):_(D._vnode||null,P,D,null,null,null,W),D._vnode=P,dt||(dt=!0,Um(nt),bv(),dt=!1)},Dt={p:_,um:tt,m:ht,r:Jt,mt:Y,mc:S,pc:j,pbc:O,n:Tt,o:e};return{render:Rt,hydrate:void 0,createApp:WM(Rt)}}function cu({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Cr({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function ob(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Xv(e,t,n=!1){const i=e.children,s=t.children;if(ee(i)&&ee(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ds(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Xv(o,a)),a.type===Vh&&(a.patchFlag===-1&&(a=s[r]=Ds(a)),a.el=o.el),a.type===Sr&&!a.el&&(a.el=o.el)}}function ab(e){const t=e.slice(),n=[0];let i,s,r,o,a;const l=e.length;for(i=0;i<l;i++){const c=e[i];if(c!==0){if(s=n[n.length-1],e[s]<c){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<c?r=a+1:o=a;c<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function $v(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:$v(t)}function Xm(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function Yv(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?Yv(t.subTree):null}const jv=e=>e.__isSuspense;function lb(e,t){t&&t.pendingBranch?ee(e)?t.effects.push(...e):t.effects.push(e):gM(e)}const Ls=Symbol.for("v-fgt"),Vh=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),hu=Symbol.for("v-stc"),_l=[];let oi=null;function no(e=!1){_l.push(oi=e?null:[])}function cb(){_l.pop(),oi=_l[_l.length-1]||null}let wl=1;function $m(e,t=!1){wl+=e,e<0&&oi&&t&&(oi.hasOnce=!0)}function qv(e){return e.dynamicChildren=wl>0?oi||Jo:null,cb(),wl>0&&oi&&oi.push(e),e}function aa(e,t,n,i,s,r){return qv(Ht(e,t,n,i,s,r,!0))}function hb(e,t,n,i,s){return qv(Ni(e,t,n,i,s,!0))}function Kv(e){return e?e.__v_isVNode===!0:!1}function Sa(e,t){return e.type===t.type&&e.key===t.key}const Zv=({key:e})=>e??null,ih=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?dn(e)||Dn(e)||oe(e)?{i:_i,r:e,k:t,f:!!n}:e:null);function Ht(e,t=null,n=null,i=0,s=null,r=e===Ls?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zv(t),ref:t&&ih(t),scopeId:wv,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:_i};return a?(jp(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=dn(n)?8:16),wl>0&&!o&&oi&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&oi.push(l),l}const Ni=ub;function ub(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===NM)&&(e=Sr),Kv(e)){const a=la(e,t,!0);return n&&jp(a,n),wl>0&&!r&&oi&&(a.shapeFlag&6?oi[oi.indexOf(e)]=a:oi.push(a)),a.patchFlag=-2,a}if(Mb(e)&&(e=e.__vccOpts),t){t=db(t);let{class:a,style:l}=t;a&&!dn(a)&&(t.class=Kr(a)),Fe(l)&&(Bp(l)&&!ee(l)&&(l=En({},l)),t.style=Cp(l))}const o=dn(e)?1:jv(e)?128:EM(e)?64:Fe(e)?4:oe(e)?2:0;return Ht(e,t,n,i,s,o,r,!0)}function db(e){return e?Bp(e)||kv(e)?En({},e):e:null}function la(e,t,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=e,c=t?fb(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Zv(c),ref:t&&t.ref?n&&r?ee(r)?r.concat(ih(t)):[r,ih(t)]:ih(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ls?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&la(e.ssContent),ssFallback:e.ssFallback&&la(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&Hp(h,l.clone(h)),h}function $o(e=" ",t=0){return Ni(Vh,null,e,t)}function Yp(e="",t=!1){return t?(no(),hb(Sr,null,e)):Ni(Sr,null,e)}function Zi(e){return e==null||typeof e=="boolean"?Ni(Sr):ee(e)?Ni(Ls,null,e.slice()):Kv(e)?Ds(e):Ni(Vh,null,String(e))}function Ds(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:la(e)}function jp(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(ee(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),jp(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!kv(t)?t._ctx=_i:s===3&&_i&&(_i.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:_i},n=32):(t=String(t),i&64?(n=16,t=[$o(t)]):n=8);e.children=t,e.shapeFlag|=n}function fb(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Kr([t.class,i.class]));else if(s==="style")t.style=Cp([t.style,i.style]);else if(Uh(s)){const r=t[s],o=i[s];o&&r!==o&&!(ee(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Nh(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function Vi(e,t,n,i=null){ls(e,t,7,[n,i])}const pb=Ov();let mb=0;function _b(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||pb,r={uid:mb++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new BS(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Hv(i,s),emitsOptions:Uv(i,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:i.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=$M.bind(null,r),e.ce&&e.ce(r),r}let kn=null;const gb=()=>kn||_i;let Mh,hf;{const e=Bh(),t=(n,i)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Mh=t("__VUE_INSTANCE_SETTERS__",n=>kn=n),hf=t("__VUE_SSR_SETTERS__",n=>Tl=n)}const Ol=e=>{const t=kn;return Mh(e),e.scope.on(),()=>{e.scope.off(),Mh(t)}},Ym=()=>{kn&&kn.scope.off(),Mh(null)};function Jv(e){return e.vnode.shapeFlag&4}let Tl=!1;function xb(e,t=!1,n=!1){t&&hf(t);const{props:i,children:s}=e.vnode,r=Jv(e);JM(e,i,r,t),nb(e,s,n||t);const o=r?vb(e,t):void 0;return t&&hf(!1),o}function vb(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,FM);const{setup:i}=n;if(i){Hs();const s=e.setupContext=i.length>1?Sb(e):null,r=Ol(e),o=Il(i,e,0,[e.props,s]),a=Jx(o);if(Vs(),r(),(a||e.sp)&&!pl(e)&&Rv(e),a){if(o.then(Ym,Ym),t)return o.then(l=>{jm(e,l)}).catch(l=>{kh(l,e,0)});e.asyncDep=o}else jm(e,o)}else Qv(e)}function jm(e,t,n){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Fe(t)&&(e.setupState=yv(t)),Qv(e)}function Qv(e,t,n){const i=e.type;e.render||(e.render=i.render||is);{const s=Ol(e);Hs();try{BM(e)}finally{Vs(),s()}}}const yb={get(e,t){return Pn(e,"get",""),e[t]}};function Sb(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,yb),slots:e.slots,emit:e.emit,expose:t}}function Gh(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(yv(rM(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ml)return ml[n](e)},has(t,n){return n in t||n in ml}})):e.proxy}function Mb(e){return oe(e)&&"__vccOpts"in e}const bb=(e,t)=>uM(e,t,Tl),Eb="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let uf;const qm=typeof window<"u"&&window.trustedTypes;if(qm)try{uf=qm.createPolicy("vue",{createHTML:e=>e})}catch{}const ty=uf?e=>uf.createHTML(e):e=>e,wb="http://www.w3.org/2000/svg",Tb="http://www.w3.org/1998/Math/MathML",Ps=typeof document<"u"?document:null,Km=Ps&&Ps.createElement("template"),Ab={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?Ps.createElementNS(wb,e):t==="mathml"?Ps.createElementNS(Tb,e):n?Ps.createElement(e,{is:n}):Ps.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Ps.createTextNode(e),createComment:e=>Ps.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ps.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{Km.innerHTML=ty(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=Km.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Rb=Symbol("_vtc");function Cb(e,t,n){const i=e[Rb];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Zm=Symbol("_vod"),Pb=Symbol("_vsh"),Lb=Symbol(""),Db=/(?:^|;)\s*display\s*:/;function Ib(e,t,n){const i=e.style,s=dn(n);let r=!1;if(n&&!s){if(t)if(dn(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&il(i,a,"")}else for(const o in t)n[o]==null&&il(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?Ub(e,o,!dn(t)&&t?t[o]:void 0,a)||il(i,o,a):il(i,o,"")}}else if(s){if(t!==n){const o=i[Lb];o&&(n+=";"+o),i.cssText=n,r=Db.test(n)}}else t&&e.removeAttribute("style");Zm in e&&(e[Zm]=r?i.display:"",e[Pb]&&(i.display="none"))}const Jm=/\s*!important$/;function il(e,t,n){if(ee(n))n.forEach(i=>il(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Ob(e,t);Jm.test(n)?e.setProperty(ao(i),n.replace(Jm,""),"important"):e[i]=n}}const Qm=["Webkit","Moz","ms"],uu={};function Ob(e,t){const n=uu[t];if(n)return n;let i=Ii(t);if(i!=="filter"&&i in e)return uu[t]=i;i=ev(i);for(let s=0;s<Qm.length;s++){const r=Qm[s]+i;if(r in e)return uu[t]=r}return t}function Ub(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&dn(i)&&n===i}const t_="http://www.w3.org/1999/xlink";function e_(e,t,n,i,s,r=NS(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(t_,t.slice(6,t.length)):e.setAttributeNS(t_,t,n):n==null||r&&!iv(n)?e.removeAttribute(t):e.setAttribute(t,r?"":as(n)?String(n):n)}function n_(e,t,n,i,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?ty(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=iv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Yo(e,t,n,i){e.addEventListener(t,n,i)}function Nb(e,t,n,i){e.removeEventListener(t,n,i)}const i_=Symbol("_vei");function Fb(e,t,n,i,s=null){const r=e[i_]||(e[i_]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Bb(t);if(i){const c=r[t]=Hb(i,s);Yo(e,a,c,l)}else o&&(Nb(e,a,o,l),r[t]=void 0)}}const s_=/(?:Once|Passive|Capture)$/;function Bb(e){let t;if(s_.test(e)){t={};let i;for(;i=e.match(s_);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ao(e.slice(2)),t]}let du=0;const kb=Promise.resolve(),zb=()=>du||(kb.then(()=>du=0),du=Date.now());function Hb(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ls(Vb(i,n.value),t,5,[i])};return n.value=e,n.attached=zb(),n}function Vb(e,t){if(ee(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const r_=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Gb=(e,t,n,i,s,r)=>{const o=s==="svg";t==="class"?Cb(e,i,o):t==="style"?Ib(e,n,i):Uh(t)?Nh(t)||Fb(e,t,n,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Wb(e,t,i,o))?(n_(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&e_(e,t,i,o,r,t!=="value")):e._isVueCE&&(Xb(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!dn(i)))?n_(e,Ii(t),i,r,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),e_(e,t,i,o))};function Wb(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&r_(t)&&oe(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return r_(t)&&dn(n)?!1:t in e}function Xb(e,t){const n=e._def.props;if(!n)return!1;const i=Ii(t);return Array.isArray(n)?n.some(s=>Ii(s)===i):Object.keys(n).some(s=>Ii(s)===i)}const o_=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ee(t)?n=>eh(t,n):t};function $b(e){e.target.composing=!0}function a_(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const fu=Symbol("_assign");function l_(e,t,n){return t&&(e=e.trim()),n&&(e=Rp(e)),e}const ql={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e[fu]=o_(s);const r=i||s.props&&s.props.type==="number";Yo(e,t?"change":"input",o=>{o.target.composing||e[fu](l_(e.value,n,r))}),(n||r)&&Yo(e,"change",()=>{e.value=l_(e.value,n,r)}),t||(Yo(e,"compositionstart",$b),Yo(e,"compositionend",a_),Yo(e,"change",a_))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(e[fu]=o_(o),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?Rp(e.value):e.value,l=t??"";if(a===l)return;const c=e.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===e&&e.type!=="range"&&(i&&t===n||s&&e.value.trim()===l)||(e.value=l)}},Yb=["ctrl","shift","alt","meta"],jb={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Yb.some(n=>e[`${n}Key`]&&!t.includes(n))},qb=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=jb[t[o]];if(a&&a(s,t))return}return e(s,...r)})},Kb=En({patchProp:Gb},Ab);let c_;function Zb(){return c_||(c_=sb(Kb))}const Jb=(...e)=>{const t=Zb().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=tE(i);if(!s)return;const r=t._component;!oe(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Qb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Qb(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function tE(e){return dn(e)?document.querySelector(e):e}var h_;(function(e){e[e.No=0]="No",e[e.Yes=1]="Yes",e[e.NoAndSkip=2]="NoAndSkip",e[e.YesAndSkip=3]="YesAndSkip"})(h_||(h_={}));const eE={};function Qt(e){return e===void 0}function gi(e){return e==null}function en(e){return typeof e=="string"}const{isFinite:df}=Number;function Ke(e){return typeof e=="number"}const{isArray:hn}=Array;function He(e){return e&&typeof e=="object"}function nE(e){return JSON.stringify(e)==="{}"}const De={default:(e,t)=>(Kl(t,e),Kl(e,t),e),assign(e,t,n){let i;Object.keys(t).forEach(s=>{var r,o;if(i=t[s],(i==null?void 0:i.constructor)===Object&&((r=e[s])===null||r===void 0?void 0:r.constructor)===Object)return Kl(e[s],t[s],n&&n[s]);n&&s in n?((o=n[s])===null||o===void 0?void 0:o.constructor)===Object&&Kl(e[s]={},t[s],n[s]):e[s]=t[s]})},copyAttrs:(e,t,n)=>(n.forEach(i=>{Qt(t[i])||(e[i]=t[i])}),e),clone:e=>JSON.parse(JSON.stringify(e)),toMap(e){const t={};for(let n=0,i=e.length;n<i;n++)t[e[n]]=!0;return t},stintSet(e,t,n){n||(n=void 0),e[t]!==n&&(e[t]=n)}},{assign:Kl}=De;class ey{get __useNaturalRatio(){return!0}get __isLinePath(){const{path:t}=this;return t&&t.length===6&&t[0]===1}get __usePathBox(){return this.__pathInputed}get __blendMode(){if(this.eraser&&this.eraser!=="path")return"destination-out";const{blendMode:t}=this;return t==="pass-through"?null:t}constructor(t){this.__leaf=t}__get(t){if(this.__input){const n=this.__input[t];if(!Qt(n))return n}return this[t]}__getData(){const t={tag:this.__leaf.tag},{__input:n}=this;let i;for(let s in this)s[0]!=="_"&&(i=n?n[s]:void 0,t[s]=Qt(i)?this[s]:i);return t}__setInput(t,n){this.__input||(this.__input={}),this.__input[t]=n}__getInput(t){if(this.__input){const n=this.__input[t];if(!Qt(n))return n}if(t!=="path"||this.__pathInputed)return this["_"+t]}__removeInput(t){this.__input&&!Qt(this.__input[t])&&(this.__input[t]=void 0)}__getInputData(t,n){const i={};if(t)if(hn(t))for(let s of t)i[s]=this.__getInput(s);else for(let s in t)i[s]=this.__getInput(s);else{let s,r,{__input:o}=this;i.tag=this.__leaf.tag;for(let a in this)if(a[0]!=="_"&&(s=this["_"+a],!Qt(s))){if(a==="path"&&!this.__pathInputed)continue;r=o?o[a]:void 0,i[a]=Qt(r)?s:r}}if(n&&n.matrix){const{a:s,b:r,c:o,d:a,e:l,f:c}=this.__leaf.__localMatrix;i.matrix={a:s,b:r,c:o,d:a,e:l,f:c}}return i}__setMiddle(t,n){this.__middle||(this.__middle={}),this.__middle[t]=n}__getMiddle(t){return this.__middle&&this.__middle[t]}__checkSingle(){const t=this;if(t.blendMode==="pass-through"){const n=this.__leaf;t.opacity<1&&(n.isBranch||t.__hasMultiPaint)||n.__hasEraser||t.eraser||t.filter?t.__single=!0:t.__single&&(t.__single=!1)}else t.__single=!0}__removeNaturalSize(){this.__naturalWidth=this.__naturalHeight=void 0}destroy(){this.__input=this.__middle=null,this.__complexData&&this.__complexData.destroy()}}const Ws={RUNTIME:"runtime",LEAF:"leaf",TASK:"task",CNAVAS:"canvas",IMAGE:"image",types:{},create(e){const{types:t}=iE;return t[e]?t[e]++:(t[e]=1,0)}},iE=Ws;let Vn,Gn,pu;const{max:Ma}=Math,mu=[0,0,0,0],Ul={zero:[...mu],tempFour:mu,set:(e,t,n,i,s)=>(n===void 0&&(n=i=s=t),e[0]=t,e[1]=n,e[2]=i,e[3]=s,e),setTemp:(e,t,n,i)=>Zl(mu,e,t,n,i),toTempAB(e,t,n){pu=n?Ke(e)?t:e:[],Ke(e)?(Vn=u_(e),Gn=t):Ke(t)?(Vn=e,Gn=u_(t)):(Vn=e,Gn=t),Vn.length!==4&&(Vn=_u(Vn)),Gn.length!==4&&(Gn=_u(Gn))},get(e,t){let n;if(!Ke(e))switch(e.length){case 4:n=Qt(t)?e:[...e];break;case 2:n=[e[0],e[1],e[0],e[1]];break;case 3:n=[e[0],e[1],e[2],e[1]];break;case 1:e=e[0];break;default:e=0}if(n||(n=[e,e,e,e]),!Qt(t))for(let i=0;i<4;i++)n[i]>t&&(n[i]=t);return n},max:(e,t,n)=>Ke(e)&&Ke(t)?Ma(e,t):(d_(e,t,n),Zl(pu,Ma(Vn[0],Gn[0]),Ma(Vn[1],Gn[1]),Ma(Vn[2],Gn[2]),Ma(Vn[3],Gn[3]))),add:(e,t,n)=>Ke(e)&&Ke(t)?e+t:(d_(e,t,n),Zl(pu,Vn[0]+Gn[0],Vn[1]+Gn[1],Vn[2]+Gn[2],Vn[3]+Gn[3])),swapAndScale(e,t,n,i){if(Ke(e))return t===n?e*t:[e*n,e*t];const s=i?e:[],[r,o,a,l]=e.length===4?e:_u(e);return Zl(s,a*n,l*t,r*n,o*t)}},{set:Zl,get:_u,setTemp:u_,toTempAB:d_}=Ul,{round:sE,pow:rE,max:oE,floor:aE,PI:qp}=Math,gu={},wn={within:(e,t,n)=>(He(t)&&(n=t.max,t=t.min),!Qt(t)&&e<t&&(e=t),!Qt(n)&&e>n&&(e=n),e),fourNumber:Ul.get,formatRotation:(e,t)=>(e%=360,t?e<0&&(e+=360):(e>180&&(e-=360),e<-180&&(e+=360)),wn.float(e)),getGapRotation(e,t,n=0){let i=e+n;if(t>1){const s=Math.abs(i%t);(s<1||s>t-1)&&(i=Math.round(i/t)*t)}return i-n},float(e,t){const n=Qt(t)?1e12:rE(10,t);return(e=sE(e*n)/n)===-0?0:e},sign:e=>e<0?-1:1,getScaleData(e,t,n,i){if(i||(i={}),t){const s=(Ke(t)?t:t.width||0)/n.width,r=(Ke(t)?t:t.height||0)/n.height;i.scaleX=s||r||1,i.scaleY=r||s||1}else e&&wn.assignScale(i,e);return i},getScaleFixedData(e,t,n,i,s){let{scaleX:r,scaleY:o}=e;if((i||t)&&(r<0&&(r=-r),o<0&&(o=-o)),t)if(t===!0)r=o=n?1:1/r;else{let a;Ke(t)?a=t:t==="zoom-in"&&(a=1),a&&(r=o=r>a||o>a?n?1:1/r:n?1:1/a)}return gu.scaleX=r,gu.scaleY=o,gu},assignScale(e,t){Ke(t)?e.scaleX=e.scaleY=t:(e.scaleX=t.x,e.scaleY=t.y)},getFloorScale:(e,t=1)=>oE(aE(e),t)/e,randInt:Jl,randColor:e=>`rgba(${Jl(255)},${Jl(255)},${Jl(255)},${e||1})`};function Jl(e){return Math.round(Math.random()*e)}const Me=qp/180,Ei=2*qp,jo=qp/2;function lE(){return{x:0,y:0}}function ny(){return{x:0,y:0,width:0,height:0}}function iy(){return{a:1,b:0,c:0,d:1,e:0,f:0}}const{sin:xu,cos:vu,acos:Ql,sqrt:yu}=Math,{float:po}=wn,mo={};function f_(){return Object.assign(Object.assign(Object.assign({},{a:1,b:0,c:0,d:1,e:0,f:0}),{x:0,y:0,width:0,height:0}),{scaleX:1,scaleY:1,rotation:0,skewX:0,skewY:0})}const re={defaultMatrix:{a:1,b:0,c:0,d:1,e:0,f:0},defaultWorld:f_(),tempMatrix:{},set(e,t=1,n=0,i=0,s=1,r=0,o=0){e.a=t,e.b=n,e.c=i,e.d=s,e.e=r,e.f=o},get:iy,getWorld:f_,copy(e,t){e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e.e=t.e,e.f=t.f},translate(e,t,n){e.e+=t,e.f+=n},translateInner(e,t,n,i){e.e+=e.a*t+e.c*n,e.f+=e.b*t+e.d*n,i&&(e.e-=t,e.f-=n)},scale(e,t,n=t){e.a*=t,e.b*=t,e.c*=n,e.d*=n},pixelScale(e,t,n){n||(n=e),n.a=e.a*t,n.b=e.b*t,n.c=e.c*t,n.d=e.d*t,n.e=e.e*t,n.f=e.f*t},scaleOfOuter(e,t,n,i){$e.toInnerPoint(e,t,mo),$e.scaleOfInner(e,mo,n,i)},scaleOfInner(e,t,n,i=n){$e.translateInner(e,t.x,t.y),$e.scale(e,n,i),$e.translateInner(e,-t.x,-t.y)},rotate(e,t){const{a:n,b:i,c:s,d:r}=e,o=vu(t*=Me),a=xu(t);e.a=n*o-i*a,e.b=n*a+i*o,e.c=s*o-r*a,e.d=s*a+r*o},rotateOfOuter(e,t,n){$e.toInnerPoint(e,t,mo),$e.rotateOfInner(e,mo,n)},rotateOfInner(e,t,n){$e.translateInner(e,t.x,t.y),$e.rotate(e,n),$e.translateInner(e,-t.x,-t.y)},skew(e,t,n){const{a:i,b:s,c:r,d:o}=e;n&&(n*=Me,e.a=i+r*n,e.b=s+o*n),t&&(t*=Me,e.c=r+i*t,e.d=o+s*t)},skewOfOuter(e,t,n,i){$e.toInnerPoint(e,t,mo),$e.skewOfInner(e,mo,n,i)},skewOfInner(e,t,n,i=0){$e.translateInner(e,t.x,t.y),$e.skew(e,n,i),$e.translateInner(e,-t.x,-t.y)},multiply(e,t){const{a:n,b:i,c:s,d:r,e:o,f:a}=e;e.a=t.a*n+t.b*s,e.b=t.a*i+t.b*r,e.c=t.c*n+t.d*s,e.d=t.c*i+t.d*r,e.e=t.e*n+t.f*s+o,e.f=t.e*i+t.f*r+a},multiplyParent(e,t,n,i,s){const{e:r,f:o}=e;if(n||(n=e),Qt(i)&&(i=e.a!==1||e.b||e.c||e.d!==1),i){const{a,b:l,c,d:h}=e;n.a=a*t.a+l*t.c,n.b=a*t.b+l*t.d,n.c=c*t.a+h*t.c,n.d=c*t.b+h*t.d,s&&(n.scaleX=t.scaleX*s.scaleX,n.scaleY=t.scaleY*s.scaleY)}else n.a=t.a,n.b=t.b,n.c=t.c,n.d=t.d,s&&(n.scaleX=t.scaleX,n.scaleY=t.scaleY);n.e=r*t.a+o*t.c+t.e,n.f=r*t.b+o*t.d+t.f},divide(e,t){$e.multiply(e,$e.tempInvert(t))},divideParent(e,t){$e.multiplyParent(e,$e.tempInvert(t))},tempInvert(e){const{tempMatrix:t}=$e;return $e.copy(t,e),$e.invert(t),t},invert(e){const{a:t,b:n,c:i,d:s,e:r,f:o}=e;if(n||i){const a=1/(t*s-n*i);e.a=s*a,e.b=-n*a,e.c=-i*a,e.d=t*a,e.e=-(r*s-o*i)*a,e.f=-(o*t-r*n)*a}else if(t===1&&s===1)e.e=-r,e.f=-o;else{const a=1/(t*s);e.a=s*a,e.d=t*a,e.e=-r*s*a,e.f=-o*t*a}},toOuterPoint(e,t,n,i){const{x:s,y:r}=t;n||(n=t),n.x=s*e.a+r*e.c,n.y=s*e.b+r*e.d,i||(n.x+=e.e,n.y+=e.f)},toInnerPoint(e,t,n,i){const{a:s,b:r,c:o,d:a}=e,l=1/(s*a-r*o),{x:c,y:h}=t;if(n||(n=t),n.x=(c*a-h*o)*l,n.y=(h*s-c*r)*l,!i){const{e:d,f}=e;n.x-=(d*a-f*o)*l,n.y-=(f*s-d*r)*l}},setLayout(e,t,n,i,s){const{x:r,y:o,scaleX:a,scaleY:l}=t;if(Qt(s)&&(s=t.rotation||t.skewX||t.skewY),s){const{rotation:c,skewX:h,skewY:d}=t,f=c*Me,u=vu(f),g=xu(f);if(h||d){const _=h*Me,m=d*Me;e.a=(u+m*-g)*a,e.b=(g+m*u)*a,e.c=(_*u-g)*l,e.d=(u+_*g)*l}else e.a=u*a,e.b=g*a,e.c=-g*l,e.d=u*l}else e.a=a,e.b=0,e.c=0,e.d=l;e.e=r,e.f=o,(n=n||i)&&$e.translateInner(e,-n.x,-n.y,!i)},getLayout(e,t,n,i){const{a:s,b:r,c:o,d:a,e:l,f:c}=e;let h,d,f,u,g,_=l,m=c;if(r||o){const p=s*a-r*o;if(o&&!i){h=yu(s*s+r*r),d=p/h;const M=s/h;f=r>0?Ql(M):-Ql(M)}else{d=yu(o*o+a*a),h=p/d;const M=o/d;f=jo-(a>0?Ql(-M):-Ql(M))}const v=po(vu(f)),y=xu(f);h=po(h),d=po(d),u=v?po((o/d+y)/v/Me,9):0,g=v?po((r/h-y)/v/Me,9):0,f=po(f/Me)}else h=s,d=a,f=u=g=0;return(t=n||t)&&(_+=t.x*s+t.y*o,m+=t.x*r+t.y*a,n||(_-=t.x,m-=t.y)),{x:_,y:m,scaleX:h,scaleY:d,rotation:f,skewX:u,skewY:g}},withScale(e,t,n=t){const i=e;if(!t||!n){const{a:s,b:r,c:o,d:a}=e;r||o?n=(s*a-r*o)/(t=yu(s*s+r*r)):(t=s,n=a)}return i.scaleX=t,i.scaleY=n,i},reset(e){$e.set(e)}},$e=re,{float:tc}=wn,{toInnerPoint:Su,toOuterPoint:p_}=re,{sin:m_,cos:__,abs:g_,sqrt:cE,atan2:hE,min:uE,round:ec}=Math,ce={defaultPoint:{x:0,y:0},tempPoint:{},tempRadiusPoint:{},set(e,t=0,n=0){e.x=t,e.y=n},setRadius(e,t,n){e.radiusX=t,e.radiusY=Qt(n)?t:n},copy(e,t){e.x=t.x,e.y=t.y},copyFrom(e,t,n){e.x=t,e.y=n},round(e,t){e.x=t?ec(e.x-.5)+.5:ec(e.x),e.y=t?ec(e.y-.5)+.5:ec(e.y)},move(e,t,n){He(t)?(e.x+=t.x,e.y+=t.y):(e.x+=t,e.y+=n)},scale(e,t,n=t){e.x&&(e.x*=t),e.y&&(e.y*=n)},scaleOf(e,t,n,i=n){e.x+=(e.x-t.x)*(n-1),e.y+=(e.y-t.y)*(i-1)},rotate(e,t,n){n||(n=Wr.defaultPoint);const i=__(t*=Me),s=m_(t),r=e.x-n.x,o=e.y-n.y;e.x=n.x+r*i-o*s,e.y=n.y+r*s+o*i},tempToInnerOf(e,t){const{tempPoint:n}=Wr;return nc(n,e),Su(t,n,n),n},tempToOuterOf(e,t){const{tempPoint:n}=Wr;return nc(n,e),p_(t,n,n),n},tempToInnerRadiusPointOf(e,t){const{tempRadiusPoint:n}=Wr;return nc(n,e),Wr.toInnerRadiusPointOf(e,t,n),n},copyRadiusPoint:(e,t,n,i)=>(nc(e,t),dE(e,n,i),e),toInnerRadiusPointOf(e,t,n){n||(n=e),Su(t,e,n),n.radiusX=Math.abs(e.radiusX/t.scaleX),n.radiusY=Math.abs(e.radiusY/t.scaleY)},toInnerOf(e,t,n){Su(t,e,n)},toOuterOf(e,t,n){p_(t,e,n)},getCenter:(e,t)=>({x:e.x+(t.x-e.x)/2,y:e.y+(t.y-e.y)/2}),getCenterX:(e,t)=>e+(t-e)/2,getCenterY:(e,t)=>e+(t-e)/2,getDistance:(e,t)=>Mu(e.x,e.y,t.x,t.y),getDistanceFrom(e,t,n,i){const s=g_(n-e),r=g_(i-t);return cE(s*s+r*r)},getMinDistanceFrom:(e,t,n,i,s,r)=>uE(Mu(e,t,n,i),Mu(n,i,s,r)),getAngle:(e,t)=>x_(e,t)/Me,getRotation:(e,t,n,i)=>(i||(i=t),Wr.getRadianFrom(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)/Me),getRadianFrom(e,t,n,i,s,r,o,a){Qt(o)&&(o=n,a=i);const l=e-n,c=t-i,h=s-o,d=r-a;return Math.atan2(l*d-c*h,l*h+c*d)},getAtan2:(e,t)=>hE(t.y-e.y,t.x-e.x),getDistancePoint(e,t,n,i,s){const r=x_(e,t);return s&&(e=t),i||(t={}),t.x=e.x+__(r)*n,t.y=e.y+m_(r)*n,t},toNumberPoints(e){let t=e;return He(e[0])&&(t=[],e.forEach(n=>t.push(n.x,n.y))),t},isSame:(e,t,n)=>n?e.x===t.x&&e.y===t.y:tc(e.x)===tc(t.x)&&tc(e.y)===tc(t.y),reset(e){}},Wr=ce,{getDistanceFrom:Mu,copy:nc,setRadius:dE,getAtan2:x_}=Wr;let fE=class sh{constructor(t,n){this.set(t,n)}set(t,n){return He(t)?ce.copy(this,t):ce.set(this,t,n),this}get(){const{x:t,y:n}=this;return{x:t,y:n}}clone(){return new sh(this)}move(t,n){return ce.move(this,t,n),this}scale(t,n){return ce.scale(this,t,n),this}scaleOf(t,n,i){return ce.scaleOf(this,t,n,i),this}rotate(t,n){return ce.rotate(this,t,n),this}rotateOf(t,n){return ce.rotate(this,n,t),this}getRotation(t,n,i){return ce.getRotation(this,t,n,i)}toInnerOf(t,n){return ce.toInnerOf(this,t,n),this}toOuterOf(t,n){return ce.toOuterOf(this,t,n),this}getCenter(t){return new sh(ce.getCenter(this,t))}getDistance(t){return ce.getDistance(this,t)}getDistancePoint(t,n,i,s){return new sh(ce.getDistancePoint(this,t,n,i,s))}getAngle(t){return ce.getAngle(this,t)}getAtan2(t){return ce.getAtan2(this,t)}isSame(t,n){return ce.isSame(this,t,n)}reset(){return this}};new fE;let io=class sy{constructor(t,n,i,s,r,o){this.set(t,n,i,s,r,o)}set(t,n,i,s,r,o){return He(t)?re.copy(this,t):re.set(this,t,n,i,s,r,o),this}setWith(t){return re.copy(this,t),this.scaleX=t.scaleX,this.scaleY=t.scaleY,this}get(){const{a:t,b:n,c:i,d:s,e:r,f:o}=this;return{a:t,b:n,c:i,d:s,e:r,f:o}}clone(){return new sy(this)}translate(t,n){return re.translate(this,t,n),this}translateInner(t,n){return re.translateInner(this,t,n),this}scale(t,n){return re.scale(this,t,n),this}scaleWith(t,n){return re.scale(this,t,n),this.scaleX*=t,this.scaleY*=n||t,this}pixelScale(t){return re.pixelScale(this,t),this}scaleOfOuter(t,n,i){return re.scaleOfOuter(this,t,n,i),this}scaleOfInner(t,n,i){return re.scaleOfInner(this,t,n,i),this}rotate(t){return re.rotate(this,t),this}rotateOfOuter(t,n){return re.rotateOfOuter(this,t,n),this}rotateOfInner(t,n){return re.rotateOfInner(this,t,n),this}skew(t,n){return re.skew(this,t,n),this}skewOfOuter(t,n,i){return re.skewOfOuter(this,t,n,i),this}skewOfInner(t,n,i){return re.skewOfInner(this,t,n,i),this}multiply(t){return re.multiply(this,t),this}multiplyParent(t){return re.multiplyParent(this,t),this}divide(t){return re.divide(this,t),this}divideParent(t){return re.divideParent(this,t),this}invert(){return re.invert(this),this}invertWith(){return re.invert(this),this.scaleX=1/this.scaleX,this.scaleY=1/this.scaleY,this}toOuterPoint(t,n,i){re.toOuterPoint(this,t,n,i)}toInnerPoint(t,n,i){re.toInnerPoint(this,t,n,i)}setLayout(t,n,i){return re.setLayout(this,t,n,i),this}getLayout(t,n,i){return re.getLayout(this,t,n,i)}withScale(t,n){return re.withScale(this,t,n)}reset(){re.reset(this)}};new io;const Wh={tempPointBounds:{},setPoint(e,t,n){e.minX=e.maxX=t,e.minY=e.maxY=n},addPoint(e,t,n){e.minX=t<e.minX?t:e.minX,e.minY=n<e.minY?n:e.minY,e.maxX=t>e.maxX?t:e.maxX,e.maxY=n>e.maxY?n:e.maxY},addBounds(e,t,n,i,s){v_(e,t,n),v_(e,t+i,n+s)},copy(e,t){e.minX=t.minX,e.minY=t.minY,e.maxX=t.maxX,e.maxY=t.maxY},addPointBounds(e,t){e.minX=t.minX<e.minX?t.minX:e.minX,e.minY=t.minY<e.minY?t.minY:e.minY,e.maxX=t.maxX>e.maxX?t.maxX:e.maxX,e.maxY=t.maxY>e.maxY?t.maxY:e.maxY},toBounds(e,t){t.x=e.minX,t.y=e.minY,t.width=e.maxX-e.minX,t.height=e.maxY-e.minY}},{addPoint:v_}=Wh;var ff,pf;(function(e){e[e.top=0]="top",e[e.right=1]="right",e[e.bottom=2]="bottom",e[e.left=3]="left"})(ff||(ff={})),function(e){e[e.topLeft=0]="topLeft",e[e.top=1]="top",e[e.topRight=2]="topRight",e[e.right=3]="right",e[e.bottomRight=4]="bottomRight",e[e.bottom=5]="bottom",e[e.bottomLeft=6]="bottomLeft",e[e.left=7]="left",e[e.center=8]="center",e[e["top-left"]=0]="top-left",e[e["top-right"]=2]="top-right",e[e["bottom-right"]=4]="bottom-right",e[e["bottom-left"]=6]="bottom-left"}(pf||(pf={}));const Kp=[{x:0,y:0},{x:.5,y:0},{x:1,y:0},{x:1,y:.5},{x:1,y:1},{x:.5,y:1},{x:0,y:1},{x:0,y:.5},{x:.5,y:.5}];Kp.forEach(e=>e.type="percent");const wr={directionData:Kp,tempPoint:{},get:y_,toPoint(e,t,n,i,s,r){const o=y_(e);n.x=o.x,n.y=o.y,o.type==="percent"&&(n.x*=t.width,n.y*=t.height,s&&(r||(n.x-=s.x,n.y-=s.y),o.x&&(n.x-=o.x===1?s.width:o.x===.5?o.x*s.width:0),o.y&&(n.y-=o.y===1?s.height:o.y===.5?o.y*s.height:0))),i||(n.x+=t.x,n.y+=t.y)},getPoint:(e,t,n,i=!0)=>(n||(n={}),wr.toPoint(e,t,n,i),n)};function y_(e){return en(e)?Kp[pf[e]]:e}const{toPoint:pE}=wr,ry={toPoint(e,t,n,i,s,r){pE(e,n,i,s,t,r)}},{tempPointBounds:Qs,setPoint:S_,addPoint:ic,toBounds:M_}=Wh,{toOuterPoint:sc}=re,{float:rc,fourNumber:mE}=wn,{floor:b_,ceil:oc}=Math;let Gi,Wi,Pr,Lr;const ms={},li={},Dr={},Bt={tempBounds:Dr,set(e,t=0,n=0,i=0,s=0){e.x=t,e.y=n,e.width=i,e.height=s},copy(e,t){e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height},copyAndSpread(e,t,n,i,s){const{x:r,y:o,width:a,height:l}=t;if(hn(n)){const c=mE(n);i?be.set(e,r+c[3],o+c[0],a-c[1]-c[3],l-c[2]-c[0]):be.set(e,r-c[3],o-c[0],a+c[1]+c[3],l+c[2]+c[0])}else i&&(n=-n),be.set(e,r-n,o-n,a+2*n,l+2*n);s&&(s==="width"?(e.y=o,e.height=l):(e.x=r,e.width=a))},minX:e=>e.width>0?e.x:e.x+e.width,minY:e=>e.height>0?e.y:e.y+e.height,maxX:e=>e.width>0?e.x+e.width:e.x,maxY:e=>e.height>0?e.y+e.height:e.y,move(e,t,n){e.x+=t,e.y+=n},scroll(e,t){e.x+=t.scrollX,e.y+=t.scrollY},getByMove:(e,t,n)=>(e=Object.assign({},e),be.move(e,t,n),e),toOffsetOutBounds(e,t,n){t?w_(t,e):t=e,n||(n=e),t.offsetX=be.maxX(n),t.offsetY=be.maxY(n),be.move(t,-t.offsetX,-t.offsetY)},scale(e,t,n=t,i){i||ce.scale(e,t,n),e.width*=t,e.height*=n},scaleOf(e,t,n,i=n){ce.scaleOf(e,t,n,i),e.width*=n,e.height*=i},tempToOuterOf:(e,t)=>(be.copy(Dr,e),be.toOuterOf(Dr,t),Dr),getOuterOf:(e,t)=>(e=Object.assign({},e),be.toOuterOf(e,t),e),toOuterOf(e,t,n){if(n||(n=e),t.b===0&&t.c===0){const{a:i,d:s,e:r,f:o}=t;i>0?(n.width=e.width*i,n.x=r+e.x*i):(n.width=e.width*-i,n.x=r+e.x*i-n.width),s>0?(n.height=e.height*s,n.y=o+e.y*s):(n.height=e.height*-s,n.y=o+e.y*s-n.height)}else ms.x=e.x,ms.y=e.y,sc(t,ms,li),S_(Qs,li.x,li.y),ms.x=e.x+e.width,sc(t,ms,li),ic(Qs,li.x,li.y),ms.y=e.y+e.height,sc(t,ms,li),ic(Qs,li.x,li.y),ms.x=e.x,sc(t,ms,li),ic(Qs,li.x,li.y),M_(Qs,n)},toInnerOf(e,t,n){n||(n=e),be.move(n,-t.e,-t.f),be.scale(n,1/t.a,1/t.d)},getFitMatrix(e,t,n=1){const i=Math.min(n,be.getFitScale(e,t));return new io(i,0,0,i,-t.x*i,-t.y*i)},getFitScale(e,t,n){const i=e.width/t.width,s=e.height/t.height;return n?Math.max(i,s):Math.min(i,s)},put(e,t,n="center",i=1,s=!0,r){r||(r=t),en(i)&&(i=be.getFitScale(e,t,i==="cover")),Dr.width=s?t.width*=i:t.width*i,Dr.height=s?t.height*=i:t.height*i,ry.toPoint(n,Dr,e,r,!0,!0)},getSpread(e,t,n){const i={};return be.copyAndSpread(i,e,t,!1,n),i},spread(e,t,n){be.copyAndSpread(e,e,t,!1,n)},shrink(e,t,n){be.copyAndSpread(e,e,t,!0,n)},ceil(e){const{x:t,y:n}=e;e.x=b_(e.x),e.y=b_(e.y),e.width=t>e.x?oc(e.width+t-e.x):oc(e.width),e.height=n>e.y?oc(e.height+n-e.y):oc(e.height)},unsign(e){e.width<0&&(e.x+=e.width,e.width=-e.width),e.height<0&&(e.y+=e.height,e.height=-e.height)},float(e,t){e.x=rc(e.x,t),e.y=rc(e.y,t),e.width=rc(e.width,t),e.height=rc(e.height,t)},add(e,t,n){Gi=e.x+e.width,Wi=e.y+e.height,Pr=t.x,Lr=t.y,n||(Pr+=t.width,Lr+=t.height),Gi=Gi>Pr?Gi:Pr,Wi=Wi>Lr?Wi:Lr,e.x=e.x<t.x?e.x:t.x,e.y=e.y<t.y?e.y:t.y,e.width=Gi-e.x,e.height=Wi-e.y},addList(e,t){be.setListWithFn(e,t,void 0,!0)},setList(e,t,n=!1){be.setListWithFn(e,t,void 0,n)},addListWithFn(e,t,n){be.setListWithFn(e,t,n,!0)},setListWithFn(e,t,n,i=!1){let s,r=!0;for(let o=0,a=t.length;o<a;o++)s=n?n(t[o],o):t[o],s&&(s.width||s.height)&&(r?(r=!1,i||w_(e,s)):E_(e,s));r&&be.reset(e)},setPoints(e,t){t.forEach((n,i)=>i===0?S_(Qs,n.x,n.y):ic(Qs,n.x,n.y)),M_(Qs,e)},setPoint(e,t){be.set(e,t.x,t.y)},addPoint(e,t){E_(e,t,!0)},getPoints(e){const{x:t,y:n,width:i,height:s}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t+i,y:n+s},{x:t,y:n+s}]},getPoint:(e,t,n=!1,i)=>wr.getPoint(t,e,i,n),hitRadiusPoint:(e,t,n)=>(n&&(t=ce.tempToInnerRadiusPointOf(t,n)),t.x>=e.x-t.radiusX&&t.x<=e.x+e.width+t.radiusX&&t.y>=e.y-t.radiusY&&t.y<=e.y+e.height+t.radiusY),hitPoint:(e,t,n)=>(n&&(t=ce.tempToInnerOf(t,n)),t.x>=e.x&&t.x<=e.x+e.width&&t.y>=e.y&&t.y<=e.y+e.height),hit:(e,t,n)=>(n&&(t=be.tempToOuterOf(t,n)),!(e.y+e.height<t.y||t.y+t.height<e.y||e.x+e.width<t.x||t.x+t.width<e.x)),includes:(e,t,n)=>(n&&(t=be.tempToOuterOf(t,n)),e.x<=t.x&&e.y<=t.y&&e.x+e.width>=t.x+t.width&&e.y+e.height>=t.y+t.height),getIntersectData(e,t,n){if(n&&(t=be.tempToOuterOf(t,n)),!be.hit(e,t))return{x:0,y:0,width:0,height:0};let{x:i,y:s,width:r,height:o}=t;return Gi=i+r,Wi=s+o,Pr=e.x+e.width,Lr=e.y+e.height,i=i>e.x?i:e.x,s=s>e.y?s:e.y,Gi=Gi<Pr?Gi:Pr,Wi=Wi<Lr?Wi:Lr,r=Gi-i,o=Wi-s,{x:i,y:s,width:r,height:o}},intersect(e,t,n){be.copy(e,be.getIntersectData(e,t,n))},isSame:(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,isEmpty:e=>e.x===0&&e.y===0&&e.width===0&&e.height===0,hasSize:e=>e.width&&e.height,reset(e){be.set(e)}},be=Bt,{add:E_,copy:w_}=be;let un=class mf{get minX(){return Bt.minX(this)}get minY(){return Bt.minY(this)}get maxX(){return Bt.maxX(this)}get maxY(){return Bt.maxY(this)}constructor(t,n,i,s){this.set(t,n,i,s)}set(t,n,i,s){return He(t)?Bt.copy(this,t):Bt.set(this,t,n,i,s),this}get(){const{x:t,y:n,width:i,height:s}=this;return{x:t,y:n,width:i,height:s}}clone(){return new mf(this)}move(t,n){return Bt.move(this,t,n),this}scale(t,n,i){return Bt.scale(this,t,n,i),this}scaleOf(t,n,i){return Bt.scaleOf(this,t,n,i),this}toOuterOf(t,n){return Bt.toOuterOf(this,t,n),this}toInnerOf(t,n){return Bt.toInnerOf(this,t,n),this}getFitMatrix(t,n){return Bt.getFitMatrix(this,t,n)}put(t,n,i){Bt.put(this,t,n,i)}spread(t,n){return Bt.spread(this,t,n),this}shrink(t,n){return Bt.shrink(this,t,n),this}ceil(){return Bt.ceil(this),this}unsign(){return Bt.unsign(this),this}float(t){return Bt.float(this,t),this}add(t){return Bt.add(this,t),this}addList(t){return Bt.setList(this,t,!0),this}setList(t){return Bt.setList(this,t),this}addListWithFn(t,n){return Bt.setListWithFn(this,t,n,!0),this}setListWithFn(t,n){return Bt.setListWithFn(this,t,n),this}setPoint(t){return Bt.setPoint(this,t),this}setPoints(t){return Bt.setPoints(this,t),this}addPoint(t){return Bt.addPoint(this,t),this}getPoints(){return Bt.getPoints(this)}getPoint(t,n,i){return Bt.getPoint(this,t,n,i)}hitPoint(t,n){return Bt.hitPoint(this,t,n)}hitRadiusPoint(t,n){return Bt.hitRadiusPoint(this,t,n)}hit(t,n){return Bt.hit(this,t,n)}includes(t,n){return Bt.includes(this,t,n)}intersect(t,n){return Bt.intersect(this,t,n),this}getIntersect(t,n){return new mf(Bt.getIntersectData(this,t,n))}isSame(t){return Bt.isSame(this,t)}isEmpty(){return Bt.isEmpty(this)}reset(){Bt.reset(this)}};const Yr=new un;let _E=class{constructor(t,n,i,s,r,o){He(t)?this.copy(t):this.set(t,n,i,s,r,o)}set(t=0,n=0,i=0,s=0,r=0,o=0){this.top=t,this.right=n,this.bottom=i,this.left=s,this.width=r,this.height=o}copy(t){const{top:n,right:i,bottom:s,left:r,width:o,height:a}=t;this.set(n,i,s,r,o,a)}getBoundsFrom(t){const{top:n,right:i,bottom:s,left:r,width:o,height:a}=this;return new un(r,n,o||t.width-r-i,a||t.height-n-s)}};const oy={number:(e,t)=>He(e)?e.type==="percent"?e.value*t:e.value:e},gE={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,".":1,e:1,E:1},{floor:T_,max:A_}=Math,Ot={toURL(e,t){let n=encodeURIComponent(e);return t==="text"?n="data:text/plain;charset=utf-8,"+n:t==="svg"&&(n="data:image/svg+xml,"+n),n},image:{hitCanvasSize:100,maxCacheSize:4096e3,maxPatternSize:8847360,crossOrigin:"anonymous",isLarge:(e,t,n,i)=>e.width*e.height*(t?t*n:1)>(i||ba.maxCacheSize),isSuperLarge:(e,t,n)=>ba.isLarge(e,t,n,ba.maxPatternSize),getRealURL(e){const{prefix:t,suffix:n}=ba;return!n||e.startsWith("data:")||e.startsWith("blob:")||(e+=(e.includes("?")?"&":"?")+n),t&&e[0]==="/"&&(e=t+e),e},resize(e,t,n,i,s,r,o,a,l,c){const h=A_(T_(t+(i||0)),1),d=A_(T_(n+(s||0)),1);let f,u,g;c&&(g=oy.number(c.offset,c.type==="x"?t:n))&&(c.type==="x"?f=!0:u=!0);const _=Ot.origin.createCanvas(u?2*h:h,f?2*d:d),m=_.getContext("2d");if(a&&(m.globalAlpha=a),m.imageSmoothingEnabled=o!==!1,ba.canUse(e)){if(r){const p=t/r.width,v=n/r.height;m.setTransform(p,0,0,v,-r.x*p,-r.y*v),m.drawImage(e,0,0,e.width,e.height)}else m.drawImage(e,0,0,t,n);g&&(m.drawImage(_,0,0,h,d,f?g-h:h,f?d:g-d,h,d),m.drawImage(_,0,0,h,d,f?g:h,f?d:g,h,d))}return _},canUse:e=>e&&e.width&&!e.__closed,setPatternTransform(e,t,n){try{t&&e.setTransform&&(e.setTransform(t),t=void 0)}catch{}n&&De.stintSet(n,"transform",t)}}},{image:ba}=Ot,{randColor:R_}=wn;let We=class _f{constructor(t){this.repeatMap={},this.name=t}static get(t){return new _f(t)}static set filter(t){this.filterList=C_(t)}static set exclude(t){this.excludeList=C_(t)}static drawRepaint(t,n){const i=R_();t.fillWorld(n,i.replace("1)",".1)")),t.strokeWorld(n,i)}static drawBounds(t,n,i){const s=_f.showBounds==="hit",r=t.__nowWorld,o=R_();s&&(n.setWorld(r),t.__drawHitPath(n),n.fillStyle=o.replace("1)",".2)"),n.fill()),n.resetTransform(),n.setStroke(o,2),s?n.stroke():n.strokeWorld(r,o)}log(...t){if(Ir.enable){if(Ir.filterList.length&&Ir.filterList.every(n=>n!==this.name)||Ir.excludeList.length&&Ir.excludeList.some(n=>n===this.name))return;console.log("%c"+this.name,"color:#21ae62",...t)}}tip(...t){Ir.enable&&this.warn(...t)}warn(...t){Ir.showWarn&&console.warn(this.name,...t)}repeat(t,...n){this.repeatMap[t]||(this.warn("repeat:"+t,...n),this.repeatMap[t]=!0)}error(...t){try{throw new Error}catch(n){console.error(this.name,...t,n)}}};function C_(e){return e?en(e)&&(e=[e]):e=[],e}We.filterList=[],We.excludeList=[],We.showWarn=!0;const Ir=We,xE=We.get("RunTime"),Li={currentId:0,currentName:"",idMap:{},nameMap:{},nameToIdMap:{},start(e,t){const n=Ws.create(Ws.RUNTIME);return ci.currentId=ci.idMap[n]=t?performance.now():Date.now(),ci.currentName=ci.nameMap[n]=e,ci.nameToIdMap[e]=n,n},end(e,t){const n=ci.idMap[e],i=ci.nameMap[e],s=t?(performance.now()-n)/1e3:Date.now()-n;ci.idMap[e]=ci.nameMap[e]=ci.nameToIdMap[i]=void 0,xE.log(i,s,"ms")},endOfName(e,t){const n=ci.nameToIdMap[e];Qt(n)||ci.end(n,t)}},ci=Li,ay=[],Kn={list:{},add(e,...t){this.list[e]=!0,ay.push(...t)},has(e,t){const n=this.list[e];return!n&&t&&this.need(e),n},need(e){console.error("please install and import plugin: "+(e.includes("-x")?"":"@leafer-in/")+e)}};setTimeout(()=>ay.forEach(e=>Kn.has(e,!0)));const Ze={editor:e=>Kn.need("editor")},P_=We.get("UICreator"),Nl={list:{},register(e){const{__tag:t}=e.prototype;ac[t]&&P_.repeat(t),ac[t]=e},get(e,t,n,i,s,r){if(!ac[e])return void P_.warn("not register "+e);const o=new ac[e](t);return Qt(n)||(o.x=n,i&&(o.y=i),s&&(o.width=s),r&&(o.height=r)),o}},{list:ac}=Nl,vE=We.get("EventCreator"),ca={nameList:{},register(e){let t;Object.keys(e).forEach(n=>{t=e[n],en(t)&&(Ea[t]&&vE.repeat(t),Ea[t]=e)})},changeName(e,t){const n=Ea[e];if(n){const i=Object.keys(n).find(s=>n[s]===e);i&&(n[i]=t,Ea[t]=n)}},has(e){return!!this.nameList[e]},get:(e,...t)=>new Ea[e](...t)},{nameList:Ea}=ca;let ly=class{constructor(){this.list=[]}add(t){t.manager=this,this.list.push(t)}get(t){let n;const{list:i}=this;for(let r=0,o=i.length;r<o;r++)if(n=i[r],n.recycled&&n.isSameSize(t))return n.recycled=!1,n.manager||(n.manager=this),n;const s=Ze.canvas(t);return this.add(s),s}recycle(t){t.recycled=!0}clearRecycled(){let t;const n=[];for(let i=0,s=this.list.length;i<s;i++)t=this.list[i],t.recycled?t.destroy():n.push(t);this.list=n}clear(){this.list.forEach(t=>{t.destroy()}),this.list.length=0}destroy(){this.clear()}};function zt(e,t,n,i){var s,r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}function cy(e,t,n,i){return new(n||(n=Promise))(function(s,r){function o(c){try{l(i.next(c))}catch(h){r(h)}}function a(c){try{l(i.throw(c))}catch(h){r(h)}}function l(c){var h;c.done?s(c.value):(h=c.value,h instanceof n?h:new n(function(d){d(h)})).then(o,a)}l((i=i.apply(e,[])).next())})}function Ve(e){return(t,n)=>{e||(e=n);const i={get(){return this.context[e]},set(s){this.context[e]=s}};n==="strokeCap"&&(i.set=function(s){this.context[e]=s==="none"?"butt":s}),Object.defineProperty(t,n,i)}}const hy=[];function ve(){return(e,t)=>{hy.push(t)}}const yE=[];let Gt=class{set blendMode(t){t==="normal"&&(t="source-over"),this.context.globalCompositeOperation=t}get blendMode(){return this.context.globalCompositeOperation}set dashPattern(t){this.context.setLineDash(t||yE)}get dashPattern(){return this.context.getLineDash()}__bindContext(){let t;hy.forEach(n=>{t=this.context[n],t&&(this[n]=t.bind(this.context))}),this.textBaseline="alphabetic"}setTransform(t,n,i,s,r,o){}resetTransform(){}getTransform(){}save(){}restore(){}transform(t,n,i,s,r,o){He(t)?this.context.transform(t.a,t.b,t.c,t.d,t.e,t.f):this.context.transform(t,n,i,s,r,o)}translate(t,n){}scale(t,n){}rotate(t){}fill(t,n){}stroke(t){}clip(t,n){}fillRect(t,n,i,s){}strokeRect(t,n,i,s){}clearRect(t,n,i,s){}drawImage(t,n,i,s,r,o,a,l,c){switch(arguments.length){case 9:if(n<0){const h=-n/s*l;s+=n,n=0,o+=h,l-=h}if(i<0){const h=-i/r*c;r+=i,i=0,a+=h,c-=h}this.context.drawImage(t,n,i,s,r,o,a,l,c);break;case 5:this.context.drawImage(t,n,i,s,r);break;case 3:this.context.drawImage(t,n,i)}}beginPath(){}moveTo(t,n){}lineTo(t,n){}bezierCurveTo(t,n,i,s,r,o){}quadraticCurveTo(t,n,i,s){}closePath(){}arc(t,n,i,s,r,o){}arcTo(t,n,i,s,r){}ellipse(t,n,i,s,r,o,a,l){}rect(t,n,i,s){}roundRect(t,n,i,s,r){}createConicGradient(t,n,i){}createLinearGradient(t,n,i,s){}createPattern(t,n){}createRadialGradient(t,n,i,s,r,o){}fillText(t,n,i,s){}measureText(t){}strokeText(t,n,i,s){}destroy(){this.context=null}};zt([Ve("imageSmoothingEnabled")],Gt.prototype,"smooth",void 0),zt([Ve("imageSmoothingQuality")],Gt.prototype,"smoothLevel",void 0),zt([Ve("globalAlpha")],Gt.prototype,"opacity",void 0),zt([Ve()],Gt.prototype,"fillStyle",void 0),zt([Ve()],Gt.prototype,"strokeStyle",void 0),zt([Ve("lineWidth")],Gt.prototype,"strokeWidth",void 0),zt([Ve("lineCap")],Gt.prototype,"strokeCap",void 0),zt([Ve("lineJoin")],Gt.prototype,"strokeJoin",void 0),zt([Ve("lineDashOffset")],Gt.prototype,"dashOffset",void 0),zt([Ve()],Gt.prototype,"miterLimit",void 0),zt([Ve()],Gt.prototype,"shadowBlur",void 0),zt([Ve()],Gt.prototype,"shadowColor",void 0),zt([Ve()],Gt.prototype,"shadowOffsetX",void 0),zt([Ve()],Gt.prototype,"shadowOffsetY",void 0),zt([Ve()],Gt.prototype,"filter",void 0),zt([Ve()],Gt.prototype,"font",void 0),zt([Ve()],Gt.prototype,"fontKerning",void 0),zt([Ve()],Gt.prototype,"fontStretch",void 0),zt([Ve()],Gt.prototype,"fontVariantCaps",void 0),zt([Ve()],Gt.prototype,"textAlign",void 0),zt([Ve()],Gt.prototype,"textBaseline",void 0),zt([Ve()],Gt.prototype,"textRendering",void 0),zt([Ve()],Gt.prototype,"wordSpacing",void 0),zt([Ve()],Gt.prototype,"letterSpacing",void 0),zt([Ve()],Gt.prototype,"direction",void 0),zt([ve()],Gt.prototype,"setTransform",null),zt([ve()],Gt.prototype,"resetTransform",null),zt([ve()],Gt.prototype,"getTransform",null),zt([ve()],Gt.prototype,"save",null),zt([ve()],Gt.prototype,"restore",null),zt([ve()],Gt.prototype,"translate",null),zt([ve()],Gt.prototype,"scale",null),zt([ve()],Gt.prototype,"rotate",null),zt([ve()],Gt.prototype,"fill",null),zt([ve()],Gt.prototype,"stroke",null),zt([ve()],Gt.prototype,"clip",null),zt([ve()],Gt.prototype,"fillRect",null),zt([ve()],Gt.prototype,"strokeRect",null),zt([ve()],Gt.prototype,"clearRect",null),zt([ve()],Gt.prototype,"beginPath",null),zt([ve()],Gt.prototype,"moveTo",null),zt([ve()],Gt.prototype,"lineTo",null),zt([ve()],Gt.prototype,"bezierCurveTo",null),zt([ve()],Gt.prototype,"quadraticCurveTo",null),zt([ve()],Gt.prototype,"closePath",null),zt([ve()],Gt.prototype,"arc",null),zt([ve()],Gt.prototype,"arcTo",null),zt([ve()],Gt.prototype,"ellipse",null),zt([ve()],Gt.prototype,"rect",null),zt([ve()],Gt.prototype,"roundRect",null),zt([ve()],Gt.prototype,"createConicGradient",null),zt([ve()],Gt.prototype,"createLinearGradient",null),zt([ve()],Gt.prototype,"createPattern",null),zt([ve()],Gt.prototype,"createRadialGradient",null),zt([ve()],Gt.prototype,"fillText",null),zt([ve()],Gt.prototype,"measureText",null),zt([ve()],Gt.prototype,"strokeText",null);const{copy:SE,multiplyParent:ME,pixelScale:bE}=re,{round:lc}=Math,ye=new un,L_=new un,EE={width:1,height:1,pixelRatio:1},Ai=["width","height","pixelRatio"];let uy=class extends Gt{get width(){return this.size.width}get height(){return this.size.height}get pixelRatio(){return this.size.pixelRatio}get pixelWidth(){return this.width*this.pixelRatio||0}get pixelHeight(){return this.height*this.pixelRatio||0}get pixelSnap(){return this.config.pixelSnap}set pixelSnap(t){this.config.pixelSnap=t}get allowBackgroundColor(){return this.view&&this.parentView}constructor(t,n){super(),this.size={},this.worldTransform={},t||(t=EE),this.manager=n,this.innerId=Ws.create(Ws.CNAVAS);const{width:i,height:s,pixelRatio:r}=t;this.autoLayout=!i||!s,this.size.pixelRatio=r||Ot.devicePixelRatio,this.config=t,this.init()}init(){}__createContext(){const{view:t}=this,{contextSettings:n}=this.config;this.context=n?t.getContext("2d",n):t.getContext("2d"),this.__bindContext()}export(t,n){}toBlob(t,n){}toDataURL(t,n){}saveAs(t,n){}resize(t,n=!0){if(this.isSameSize(t))return;let i;this.context&&!this.unreal&&n&&this.width&&(i=this.getSameCanvas(),i.copyWorld(this));const s=this.size;De.copyAttrs(s,t,Ai),Ai.forEach(r=>s[r]||(s[r]=1)),this.bounds=new un(0,0,this.width,this.height),this.updateViewSize(),this.updateClientBounds(),this.context&&(this.smooth=this.config.smooth,!this.unreal&&i&&(this.clearWorld(i.bounds),this.copyWorld(i),i.recycle()))}updateViewSize(){}updateClientBounds(){}getClientBounds(t){return t&&this.updateClientBounds(),this.clientBounds||this.bounds}startAutoLayout(t,n){}stopAutoLayout(){}setCursor(t){}setWorld(t,n){const{pixelRatio:i,pixelSnap:s}=this,r=this.worldTransform;n&&ME(t,n,r),bE(t,i,r),s&&!t.ignorePixelSnap&&(t.half&&t.half*i%2?(r.e=lc(r.e-.5)+.5,r.f=lc(r.f-.5)+.5):(r.e=lc(r.e),r.f=lc(r.f))),this.setTransform(r.a,r.b,r.c,r.d,r.e,r.f)}useWorldTransform(t){t&&(this.worldTransform=t);const n=this.worldTransform;n&&this.setTransform(n.a,n.b,n.c,n.d,n.e,n.f)}setStroke(t,n,i,s){n&&(this.strokeWidth=n),t&&(this.strokeStyle=t),i&&this.setStrokeOptions(i,s)}setStrokeOptions(t,n){let{strokeCap:i,strokeJoin:s,dashPattern:r,dashOffset:o,miterLimit:a}=t;n&&(n.strokeCap&&(i=n.strokeCap),n.strokeJoin&&(s=n.strokeJoin),Qt(n.dashPattern)||(r=n.dashPattern),Qt(n.dashOffset)||(o=n.dashOffset),n.miterLimit&&(a=n.miterLimit)),this.strokeCap=i,this.strokeJoin=s,this.dashPattern=r,this.dashOffset=o,this.miterLimit=a}saveBlendMode(t){this.savedBlendMode=this.blendMode,this.blendMode=t}restoreBlendMode(){this.blendMode=this.savedBlendMode}hitFill(t,n){return!0}hitStroke(t,n){return!0}hitPixel(t,n,i=1){return!0}setWorldShadow(t,n,i,s){const{pixelRatio:r}=this;this.shadowOffsetX=t*r,this.shadowOffsetY=n*r,this.shadowBlur=i*r,this.shadowColor=s||"black"}setWorldBlur(t){const{pixelRatio:n}=this;this.filter=`blur(${t*n}px)`}copyWorld(t,n,i,s,r){s&&(this.blendMode=s),n?(this.setTempPixelBounds(n,r),i?(this.setTempPixelBounds2(i,r),i=L_):i=ye,this.drawImage(t.view,ye.x,ye.y,ye.width,ye.height,i.x,i.y,i.width,i.height)):this.drawImage(t.view,0,0),s&&(this.blendMode="source-over")}copyWorldToInner(t,n,i,s,r){n.b||n.c?(this.save(),this.resetTransform(),this.copyWorld(t,n,Bt.tempToOuterOf(i,n),s,r),this.restore()):(s&&(this.blendMode=s),this.setTempPixelBounds(n,r),this.drawImage(t.view,ye.x,ye.y,ye.width,ye.height,i.x,i.y,i.width,i.height),s&&(this.blendMode="source-over"))}copyWorldByReset(t,n,i,s,r,o){this.resetTransform(),this.copyWorld(t,n,i,s,o),r||this.useWorldTransform()}useGrayscaleAlpha(t){let n,i;this.setTempPixelBounds(t,!0,!0);const{context:s}=this,r=s.getImageData(ye.x,ye.y,ye.width,ye.height),{data:o}=r;for(let a=0,l=o.length;a<l;a+=4)i=.299*o[a]+.587*o[a+1]+.114*o[a+2],(n=o[a+3])&&(o[a+3]=n===255?i:n*(i/255));s.putImageData(r,ye.x,ye.y)}useMask(t,n,i){this.copyWorld(t,n,i,"destination-in")}useEraser(t,n,i){this.copyWorld(t,n,i,"destination-out")}fillWorld(t,n,i,s){i&&(this.blendMode=i),this.fillStyle=n,this.setTempPixelBounds(t,s),this.fillRect(ye.x,ye.y,ye.width,ye.height),i&&(this.blendMode="source-over")}strokeWorld(t,n,i,s){i&&(this.blendMode=i),this.strokeStyle=n,this.setTempPixelBounds(t,s),this.strokeRect(ye.x,ye.y,ye.width,ye.height),i&&(this.blendMode="source-over")}clipWorld(t,n=!0){this.beginPath(),this.setTempPixelBounds(t,n),this.rect(ye.x,ye.y,ye.width,ye.height),this.clip()}clipUI(t){t.windingRule?this.clip(t.windingRule):this.clip()}clearWorld(t,n=!0){this.setTempPixelBounds(t,n),this.clearRect(ye.x,ye.y,ye.width,ye.height)}clear(){const{pixelRatio:t}=this;this.clearRect(0,0,this.width*t+2,this.height*t+2)}setTempPixelBounds(t,n,i){this.copyToPixelBounds(ye,t,n,i)}setTempPixelBounds2(t,n,i){this.copyToPixelBounds(L_,t,n,i)}copyToPixelBounds(t,n,i,s){t.set(n),s&&t.intersect(this.bounds),t.scale(this.pixelRatio),i&&t.ceil()}isSameSize(t){return this.width===t.width&&this.height===t.height&&(!t.pixelRatio||this.pixelRatio===t.pixelRatio)}getSameCanvas(t,n){const{size:i,pixelSnap:s}=this,r=this.manager?this.manager.get(i):Ze.canvas(Object.assign({},i));return r.save(),t&&(SE(r.worldTransform,this.worldTransform),r.useWorldTransform()),n&&(r.smooth=this.smooth),r.pixelSnap!==s&&(r.pixelSnap=s),r}recycle(t){this.recycled||(this.restore(),t?this.clearWorld(t):this.clear(),this.manager?this.manager.recycle(this):this.destroy())}updateRender(t){}unrealCanvas(){}destroy(){this.manager=this.view=this.parentView=null}};const Ji={creator:{},parse(e,t){},convertToCanvasData(e,t){}},dy={N:21,D:22,X:23,G:24,F:25,O:26,P:27,U:28},ki=Object.assign({M:1,m:10,L:2,l:20,H:3,h:30,V:4,v:40,C:5,c:50,S:6,s:60,Q:7,q:70,T:8,t:80,A:9,a:90,Z:11,z:11,R:12},dy),fy={M:3,m:3,L:3,l:3,H:2,h:2,V:2,v:2,C:7,c:7,S:5,s:5,Q:5,q:5,T:3,t:3,A:8,a:8,Z:1,z:1,N:5,D:9,X:6,G:9,F:5,O:7,P:4,U:6},py={m:10,l:20,H:3,h:30,V:4,v:40,c:50,S:6,s:60,q:70,T:8,t:80,A:9,a:90},wE=Object.assign(Object.assign({},py),dy),bh=ki,my={};for(let e in bh)my[bh[e]]=e;const Zp={};for(let e in bh)Zp[bh[e]]=fy[e];const _y={drawRoundRect(e,t,n,i,s,r){const o=wn.fourNumber(r,Math.min(i/2,s/2)),a=t+i,l=n+s;o[0]?e.moveTo(t+o[0],n):e.moveTo(t,n),o[1]?e.arcTo(a,n,a,l,o[1]):e.lineTo(a,n),o[2]?e.arcTo(a,l,t,l,o[2]):e.lineTo(a,l),o[3]?e.arcTo(t,l,t,n,o[3]):e.lineTo(t,l),o[0]?e.arcTo(t,n,a,n,o[0]):e.lineTo(t,n)}},{sin:_o,cos:wa,hypot:D_,atan2:I_,ceil:TE,abs:O_,PI:U_,sqrt:N_,pow:cc}=Math,{setPoint:bu,addPoint:hc}=Wh,{set:uc,toNumberPoints:AE}=ce,{M:F_,L:Eu,C:wu,Q:B_,Z:RE}=ki,Tu={},to={points(e,t,n,i){let s=AE(t);if(e.push(F_,s[0],s[1]),n&&s.length>5){let r,o,a,l,c,h,d,f,u,g,_,m,p,v,y,M=s.length;const C=n===!0?.5:n;i&&(s=[s[M-2],s[M-1],...s,s[0],s[1],s[2],s[3]],M=s.length);for(let w=2;w<M-2;w+=2)r=s[w-2],o=s[w-1],a=s[w],l=s[w+1],c=s[w+2],h=s[w+3],_=a-r,m=l-o,p=N_(cc(_,2)+cc(m,2)),v=N_(cc(c-a,2)+cc(h-l,2)),(p||v)&&(y=p+v,p=C*p/y,v=C*v/y,c-=r,h-=o,d=a-p*c,f=l-p*h,w===2?i||e.push(B_,d,f,a,l):(_||m)&&e.push(wu,u,g,d,f,a,l),u=a+v*c,g=l+v*h);i||e.push(B_,u,g,s[M-2],s[M-1])}else for(let r=2,o=s.length;r<o;r+=2)e.push(Eu,s[r],s[r+1]);i&&e.push(RE)},rect(e,t,n,i,s){Ji.creator.path=e,Ji.creator.moveTo(t,n).lineTo(t+i,n).lineTo(t+i,n+s).lineTo(t,n+s).lineTo(t,n)},roundRect(e,t,n,i,s,r){Ji.creator.path=[],_y.drawRoundRect(Ji.creator,t,n,i,s,r),e.push(...Ji.convertToCanvasData(Ji.creator.path,!0))},arcTo(e,t,n,i,s,r,o,a,l,c,h){const d=i-t,f=s-n,u=r-i,g=o-s;let _=I_(f,d),m=I_(g,u);const p=D_(d,f),v=D_(u,g);let y=m-_;if(y<0&&(y+=Ei),p<1e-12||v<1e-12||y<1e-12||O_(y-U_)<1e-12)return e&&e.push(Eu,i,s),l&&(bu(l,t,n),hc(l,i,s)),h&&uc(h,t,n),void(c&&uc(c,i,s));const M=d*g-u*f<0,C=M?-1:1,w=a/wa(y/2),R=i+w*wa(_+y/2+jo*C),S=s+w*_o(_+y/2+jo*C);return _-=jo*C,m-=jo*C,H_(e,R,S,a,a,0,_/Me,m/Me,M,l,c,h)},arc:(e,t,n,i,s,r,o,a,l,c)=>H_(e,t,n,i,i,0,s,r,o,a,l,c),ellipse(e,t,n,i,s,r,o,a,l,c,h,d){const f=r*Me,u=_o(f),g=wa(f);let _=o*Me,m=a*Me;_>U_&&(_-=Ei),m<0&&(m+=Ei);let p=m-_;p<0?p+=Ei:p>Ei&&(p-=Ei),l&&(p-=Ei);const v=TE(O_(p/jo)),y=p/v,M=_o(y/4),C=8/3*M*M/_o(y/2);m=_+y;let w,R,S,T,O,L,I,V,Y=wa(_),U=_o(_),k=S=g*i*Y-u*s*U,B=T=u*i*Y+g*s*U,j=t+S,st=n+T;e&&e.push(e.length?Eu:F_,j,st),c&&bu(c,j,st),d&&uc(d,j,st);for(let vt=0;vt<v;vt++)w=wa(m),R=_o(m),S=g*i*w-u*s*R,T=u*i*w+g*s*R,O=t+k-C*(g*i*U+u*s*Y),L=n+B-C*(u*i*U-g*s*Y),I=t+S+C*(g*i*R+u*s*w),V=n+T+C*(u*i*R-g*s*w),e&&e.push(wu,O,L,I,V,t+S,n+T),c&&z_(t+k,n+B,O,L,I,V,t+S,n+T,c,!0),k=S,B=T,Y=w,U=R,_=m,m+=y;h&&uc(h,t+S,n+T)},quadraticCurveTo(e,t,n,i,s,r,o){e.push(wu,(t+2*i)/3,(n+2*s)/3,(r+2*i)/3,(o+2*s)/3,r,o)},toTwoPointBoundsByQuadraticCurve(e,t,n,i,s,r,o,a){z_(e,t,(e+2*n)/3,(t+2*i)/3,(s+2*n)/3,(r+2*i)/3,s,r,o,a)},toTwoPointBounds(e,t,n,i,s,r,o,a,l,c){const h=[];let d,f,u,g,_,m,p,v,y=e,M=n,C=s,w=o;for(let R=0;R<2;++R)if(R==1&&(y=t,M=i,C=r,w=a),d=-3*y+9*M-9*C+3*w,f=6*y-12*M+6*C,u=3*M-3*y,Math.abs(d)<1e-12){if(Math.abs(f)<1e-12)continue;g=-u/f,0<g&&g<1&&h.push(g)}else p=f*f-4*u*d,v=Math.sqrt(p),p<0||(_=(-f+v)/(2*d),0<_&&_<1&&h.push(_),m=(-f-v)/(2*d),0<m&&m<1&&h.push(m));c?hc(l,e,t):bu(l,e,t),hc(l,o,a);for(let R=0,S=h.length;R<S;R++)k_(h[R],e,t,n,i,s,r,o,a,Tu),hc(l,Tu.x,Tu.y)},getPointAndSet(e,t,n,i,s,r,o,a,l,c){const h=1-e,d=h*h*h,f=3*h*h*e,u=3*h*e*e,g=e*e*e;c.x=d*t+f*i+u*r+g*a,c.y=d*n+f*s+u*o+g*l},getPoint(e,t,n,i,s,r,o,a,l){const c={};return k_(e,t,n,i,s,r,o,a,l,c),c},getDerivative(e,t,n,i,s){const r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)},cut(e,t,n,i,s,r,o,a,l){if(e<=0)return{left:null,right:[i,s,r,o,a,l]};if(e>=1)return{left:[i,s,r,o,a,l],right:null};const c=1-e,h=t*c+i*e,d=n*c+s*e,f=i*c+r*e,u=s*c+o*e,g=r*c+a*e,_=o*c+l*e,m=h*c+f*e,p=d*c+u*e,v=f*c+g*e,y=u*c+_*e;return{left:[h,d,m,p,m*c+v*e,p*c+y*e],right:[v,y,g,_,a,l]}}},{getPointAndSet:k_,toTwoPointBounds:z_,ellipse:H_}=to,{sin:CE,cos:PE,sqrt:V_,atan2:G_}=Math,{ellipse:LE}=to,DE={ellipticalArc(e,t,n,i,s,r,o,a,l,c,h){const d=(l-t)/2,f=(c-n)/2,u=r*Me,g=CE(u),_=PE(u),m=-_*d-g*f,p=-_*f+g*d,v=i*i,y=s*s,M=p*p,C=m*m,w=v*y-v*M-y*C;let R=0;if(w<0){const k=V_(1-w/(v*y));i*=k,s*=k}else R=(o===a?-1:1)*V_(w/(v*M+y*C));const S=R*i*p/s,T=-R*s*m/i,O=G_((p-T)/s,(m-S)/i),L=G_((-p-T)/s,(-m-S)/i);let I=L-O;a===0&&I>0?I-=Ei:a===1&&I<0&&(I+=Ei);const V=t+d+_*S-g*T,Y=n+f+g*S+_*T,U=I<0?1:0;h||Ot.ellipseToCurve?LE(e,V,Y,i,s,r,O/Me,L/Me,U):i!==s||r?e.push(ki.G,V,Y,i,s,r,O/Me,L/Me,U):e.push(ki.O,V,Y,i,O/Me,L/Me,U)}},IE={toCommand:e=>[],toNode:e=>[]},{M:Au,m:OE,L:go,l:UE,H:NE,h:FE,V:BE,v:kE,C:xo,c:zE,S:Ru,s:HE,Q:vo,q:VE,T:Cu,t:GE,A:WE,a:XE,Z:Pu,z:$E,N:YE,D:jE,X:qE,G:KE,F:ZE,O:JE,P:QE,U:tw}=ki,{rect:ew,roundRect:W_,arcTo:nw,arc:X_,ellipse:$_,quadraticCurveTo:Y_}=to,{ellipticalArc:iw}=DE,sw=We.get("PathConvert"),_s={},so={current:{dot:0},stringify(e,t){let n,i,s,r=0,o=e.length,a="";for(;r<o;){i=e[r],n=Zp[i],a+=i===s?" ":my[i];for(let l=1;l<n;l++)a+=wn.float(e[r+l],t),l===n-1||(a+=" ");s=i,r+=n}return a},parse(e,t){let n,i,s,r="";const o=[],a=t?wE:py;for(let l=0,c=e.length;l<c;l++)i=e[l],gE[i]?(i==="."&&(hi.dot&&(Or(o,r),r=""),hi.dot++),r==="0"&&i!=="."&&(Or(o,r),r=""),r+=i):ki[i]?(r&&(Or(o,r),r=""),hi.name=ki[i],hi.length=fy[i],hi.index=0,Or(o,hi.name),!n&&a[i]&&(n=!0)):i==="-"||i==="+"?s==="e"||s==="E"?r+=i:(r&&Or(o,r),r=i):r&&(Or(o,r),r=""),s=i;return r&&Or(o,r),n?so.toCanvasData(o,t):o},toCanvasData(e,t){let n,i,s,r,o,a=0,l=0,c=0,h=0,d=0,f=0,u=0,g=e.length;const _=[];for(;u<g;){switch(s=e[u],s){case OE:e[u+1]+=a,e[u+2]+=l;case Au:a=e[u+1],l=e[u+2],r===s?_.push(go,a,l):(_.push(Au,a,l),d=a,f=l),u+=3;break;case FE:e[u+1]+=a;case NE:a=e[u+1],_.push(go,a,l),u+=2;break;case kE:e[u+1]+=l;case BE:l=e[u+1],_.push(go,a,l),u+=2;break;case UE:e[u+1]+=a,e[u+2]+=l;case go:a=e[u+1],l=e[u+2],_.push(go,a,l),u+=3;break;case HE:e[u+1]+=a,e[u+2]+=l,e[u+3]+=a,e[u+4]+=l,s=Ru;case Ru:o=r===xo||r===Ru,c=o?2*a-n:e[u+1],h=o?2*l-i:e[u+2],n=e[u+1],i=e[u+2],a=e[u+3],l=e[u+4],_.push(xo,c,h,n,i,a,l),u+=5;break;case zE:e[u+1]+=a,e[u+2]+=l,e[u+3]+=a,e[u+4]+=l,e[u+5]+=a,e[u+6]+=l,s=xo;case xo:n=e[u+3],i=e[u+4],a=e[u+5],l=e[u+6],_.push(xo,e[u+1],e[u+2],n,i,a,l),u+=7;break;case GE:e[u+1]+=a,e[u+2]+=l,s=Cu;case Cu:o=r===vo||r===Cu,n=o?2*a-n:e[u+1],i=o?2*l-i:e[u+2],t?Y_(_,a,l,n,i,e[u+1],e[u+2]):_.push(vo,n,i,e[u+1],e[u+2]),a=e[u+1],l=e[u+2],u+=3;break;case VE:e[u+1]+=a,e[u+2]+=l,e[u+3]+=a,e[u+4]+=l,s=vo;case vo:n=e[u+1],i=e[u+2],t?Y_(_,a,l,n,i,e[u+3],e[u+4]):_.push(vo,n,i,e[u+3],e[u+4]),a=e[u+3],l=e[u+4],u+=5;break;case XE:e[u+6]+=a,e[u+7]+=l;case WE:iw(_,a,l,e[u+1],e[u+2],e[u+3],e[u+4],e[u+5],e[u+6],e[u+7],t),a=e[u+6],l=e[u+7],u+=8;break;case $E:case Pu:_.push(Pu),a=d,l=f,u++;break;case YE:a=e[u+1],l=e[u+2],t?ew(_,a,l,e[u+3],e[u+4]):tr(_,e,u,5),u+=5;break;case jE:a=e[u+1],l=e[u+2],t?W_(_,a,l,e[u+3],e[u+4],[e[u+5],e[u+6],e[u+7],e[u+8]]):tr(_,e,u,9),u+=9;break;case qE:a=e[u+1],l=e[u+2],t?W_(_,a,l,e[u+3],e[u+4],e[u+5]):tr(_,e,u,6),u+=6;break;case KE:$_(t?_:tr(_,e,u,9),e[u+1],e[u+2],e[u+3],e[u+4],e[u+5],e[u+6],e[u+7],e[u+8],null,_s),a=_s.x,l=_s.y,u+=9;break;case ZE:t?$_(_,e[u+1],e[u+2],e[u+3],e[u+4],0,0,360,!1):tr(_,e,u,5),a=e[u+1]+e[u+3],l=e[u+2],u+=5;break;case JE:X_(t?_:tr(_,e,u,7),e[u+1],e[u+2],e[u+3],e[u+4],e[u+5],e[u+6],null,_s),a=_s.x,l=_s.y,u+=7;break;case QE:t?X_(_,e[u+1],e[u+2],e[u+3],0,360,!1):tr(_,e,u,4),a=e[u+1]+e[u+3],l=e[u+2],u+=4;break;case tw:nw(t?_:tr(_,e,u,6),a,l,e[u+1],e[u+2],e[u+3],e[u+4],e[u+5],null,_s),a=_s.x,l=_s.y,u+=6;break;default:return sw.error(`command: ${s} [index:${u}]`,e),_}r=s}return _},objectToCanvasData(e){if(e[0].name.length>1)return IE.toCommand(e);{const t=[];return e.forEach(n=>{switch(n.name){case"M":t.push(Au,n.x,n.y);break;case"L":t.push(go,n.x,n.y);break;case"C":t.push(xo,n.x1,n.y1,n.x2,n.y2,n.x,n.y);break;case"Q":t.push(vo,n.x1,n.y1,n.x,n.y);break;case"Z":t.push(Pu)}}),t}},copyData(e,t,n,i){for(let s=n,r=n+i;s<r;s++)e.push(t[s])},pushData(e,t){hi.index===hi.length&&(hi.index=1,e.push(hi.name)),e.push(Number(t)),hi.index++,hi.dot=0}},{current:hi,pushData:Or,copyData:tr}=so,{M:Lu,L:rw,C:ow,Q:aw,Z:lw,N:j_,D:cw,X:hw,G:uw,F:dw,O:fw,P:pw,U:mw}=ki,{getMinDistanceFrom:_w,getRadianFrom:gw}=ce,{tan:xw,min:q_,abs:vw}=Math,yo={},lo={beginPath(e){e.length=0},moveTo(e,t,n){e.push(Lu,t,n)},lineTo(e,t,n){e.push(rw,t,n)},bezierCurveTo(e,t,n,i,s,r,o){e.push(ow,t,n,i,s,r,o)},quadraticCurveTo(e,t,n,i,s){e.push(aw,t,n,i,s)},closePath(e){e.push(lw)},rect(e,t,n,i,s){e.push(j_,t,n,i,s)},roundRect(e,t,n,i,s,r){if(Ke(r))e.push(hw,t,n,i,s,r);else{const o=wn.fourNumber(r);o?e.push(cw,t,n,i,s,...o):e.push(j_,t,n,i,s)}},ellipse(e,t,n,i,s,r,o,a,l){if(i===s)return K_(e,t,n,i,o,a,l);gi(r)?e.push(dw,t,n,i,s):(gi(o)&&(o=0),gi(a)&&(a=360),e.push(uw,t,n,i,s,r,o,a,l?1:0))},arc(e,t,n,i,s,r,o){gi(s)?e.push(pw,t,n,i):(gi(s)&&(s=0),gi(r)&&(r=360),e.push(fw,t,n,i,s,r,o?1:0))},arcTo(e,t,n,i,s,r,o,a,l){if(!Qt(o)){const c=_w(o,a,t,n,i,s)/(l?1:2);r=q_(r,q_(c,c*vw(xw(gw(o,a,t,n,i,s)/2))))}e.push(mw,t,n,i,s,r)},drawEllipse(e,t,n,i,s,r,o,a,l){to.ellipse(null,t,n,i,s,gi(r)?0:r,gi(o)?0:o,gi(a)?360:a,l,null,null,yo),e.push(Lu,yo.x,yo.y),yw(e,t,n,i,s,r,o,a,l)},drawArc(e,t,n,i,s,r,o){to.arc(null,t,n,i,gi(s)?0:s,gi(r)?360:r,o,null,null,yo),e.push(Lu,yo.x,yo.y),K_(e,t,n,i,s,r,o)},drawPoints(e,t,n,i){to.points(e,t,n,i)}},{ellipse:yw,arc:K_}=lo,{moveTo:Sw,lineTo:Mw,quadraticCurveTo:bw,bezierCurveTo:Ew,closePath:ww,beginPath:Tw,rect:Aw,roundRect:Rw,ellipse:Cw,arc:Pw,arcTo:Lw,drawEllipse:Dw,drawArc:Iw,drawPoints:Ow}=lo;class gy{set path(t){this.__path=t}get path(){return this.__path}constructor(t){this.set(t)}set(t){return this.__path=t?en(t)?Ji.parse(t):t:[],this}beginPath(){return Tw(this.__path),this.paint(),this}moveTo(t,n){return Sw(this.__path,t,n),this.paint(),this}lineTo(t,n){return Mw(this.__path,t,n),this.paint(),this}bezierCurveTo(t,n,i,s,r,o){return Ew(this.__path,t,n,i,s,r,o),this.paint(),this}quadraticCurveTo(t,n,i,s){return bw(this.__path,t,n,i,s),this.paint(),this}closePath(){return ww(this.__path),this.paint(),this}rect(t,n,i,s){return Aw(this.__path,t,n,i,s),this.paint(),this}roundRect(t,n,i,s,r){return Rw(this.__path,t,n,i,s,r),this.paint(),this}ellipse(t,n,i,s,r,o,a,l){return Cw(this.__path,t,n,i,s,r,o,a,l),this.paint(),this}arc(t,n,i,s,r,o){return Pw(this.__path,t,n,i,s,r,o),this.paint(),this}arcTo(t,n,i,s,r){return Lw(this.__path,t,n,i,s,r),this.paint(),this}drawEllipse(t,n,i,s,r,o,a,l){return Dw(this.__path,t,n,i,s,r,o,a,l),this.paint(),this}drawArc(t,n,i,s,r,o){return Iw(this.__path,t,n,i,s,r,o),this.paint(),this}drawPoints(t,n,i){return Ow(this.__path,t,n,i),this.paint(),this}clearPath(){return this.beginPath()}paint(){}}const{M:Uw,L:Nw,C:Fw,Q:Bw,Z:kw,N:zw,D:Hw,X:Vw,G:Gw,F:Ww,O:Xw,P:$w,U:Yw}=ki,jw=We.get("PathDrawer"),qw={drawPathByData(e,t){if(!t)return;let n,i=0,s=t.length;for(;i<s;)switch(n=t[i],n){case Uw:e.moveTo(t[i+1],t[i+2]),i+=3;break;case Nw:e.lineTo(t[i+1],t[i+2]),i+=3;break;case Fw:e.bezierCurveTo(t[i+1],t[i+2],t[i+3],t[i+4],t[i+5],t[i+6]),i+=7;break;case Bw:e.quadraticCurveTo(t[i+1],t[i+2],t[i+3],t[i+4]),i+=5;break;case kw:e.closePath(),i+=1;break;case zw:e.rect(t[i+1],t[i+2],t[i+3],t[i+4]),i+=5;break;case Hw:e.roundRect(t[i+1],t[i+2],t[i+3],t[i+4],[t[i+5],t[i+6],t[i+7],t[i+8]]),i+=9;break;case Vw:e.roundRect(t[i+1],t[i+2],t[i+3],t[i+4],t[i+5]),i+=6;break;case Gw:e.ellipse(t[i+1],t[i+2],t[i+3],t[i+4],t[i+5]*Me,t[i+6]*Me,t[i+7]*Me,t[i+8]),i+=9;break;case Ww:e.ellipse(t[i+1],t[i+2],t[i+3],t[i+4],0,0,Ei,!1),i+=5;break;case Xw:e.arc(t[i+1],t[i+2],t[i+3],t[i+4]*Me,t[i+5]*Me,t[i+6]),i+=7;break;case $w:e.arc(t[i+1],t[i+2],t[i+3],0,Ei,!1),i+=4;break;case Yw:e.arcTo(t[i+1],t[i+2],t[i+3],t[i+4],t[i+5]),i+=6;break;default:return void jw.error(`command: ${n} [index:${i}]`,t)}}},{M:Kw,L:Zw,C:Z_,Q:J_,Z:Q_,N:Jw,D:tg,X:Qw,G:tT,F:eT,O:nT,P:iT,U:sT}=ki,{toTwoPointBounds:rT,toTwoPointBoundsByQuadraticCurve:oT,arcTo:aT,arc:lT,ellipse:cT}=to,{addPointBounds:Ta,copy:Du,addPoint:hT,setPoint:Iu,addBounds:dc,toBounds:uT}=Wh,dT=We.get("PathBounds");let So,fc,Ou;const ti={},eg={},gs={},xy={toBounds(e,t){xy.toTwoPointBounds(e,eg),uT(eg,t)},toTwoPointBounds(e,t){if(!e||!e.length)return Iu(t,0,0);let n,i,s,r,o,a=0,l=0,c=0;const h=e.length;for(;a<h;)switch(o=e[a],a===0&&(o===Q_||o===Z_||o===J_?Iu(t,l,c):Iu(t,e[a+1],e[a+2])),o){case Kw:case Zw:l=e[a+1],c=e[a+2],hT(t,l,c),a+=3;break;case Z_:s=e[a+5],r=e[a+6],rT(l,c,e[a+1],e[a+2],e[a+3],e[a+4],s,r,ti),Ta(t,ti),l=s,c=r,a+=7;break;case J_:n=e[a+1],i=e[a+2],s=e[a+3],r=e[a+4],oT(l,c,n,i,s,r,ti),Ta(t,ti),l=s,c=r,a+=5;break;case Q_:a+=1;break;case Jw:l=e[a+1],c=e[a+2],dc(t,l,c,e[a+3],e[a+4]),a+=5;break;case tg:case Qw:l=e[a+1],c=e[a+2],dc(t,l,c,e[a+3],e[a+4]),a+=o===tg?9:6;break;case tT:cT(null,e[a+1],e[a+2],e[a+3],e[a+4],e[a+5],e[a+6],e[a+7],e[a+8],ti,gs),a===0?Du(t,ti):Ta(t,ti),l=gs.x,c=gs.y,a+=9;break;case eT:l=e[a+1],c=e[a+2],fc=e[a+3],Ou=e[a+4],dc(t,l-fc,c-Ou,2*fc,2*Ou),l+=fc,a+=5;break;case nT:lT(null,e[a+1],e[a+2],e[a+3],e[a+4],e[a+5],e[a+6],ti,gs),a===0?Du(t,ti):Ta(t,ti),l=gs.x,c=gs.y,a+=7;break;case iT:l=e[a+1],c=e[a+2],So=e[a+3],dc(t,l-So,c-So,2*So,2*So),l+=So,a+=4;break;case sT:aT(null,l,c,e[a+1],e[a+2],e[a+3],e[a+4],e[a+5],ti,gs),a===0?Du(t,ti):Ta(t,ti),l=gs.x,c=gs.y,a+=6;break;default:return void dT.error(`command: ${o} [index:${a}]`,e)}}},{M:pc,L:mc,Z:Aa}=ki,{getCenterX:fT,getCenterY:pT}=ce,{arcTo:Uu}=lo,mT={smooth(e,t,n){let i,s,r,o=0,a=0,l=0,c=0,h=0,d=0,f=0,u=0,g=0;hn(t)&&(t=t[0]||0);const _=e.length,m=_===9,p=[];for(;o<_;){switch(i=e[o],i){case pc:c=u=e[o+1],h=g=e[o+2],o+=3,e[o]===mc?(d=e[o+1],f=e[o+2],m?p.push(pc,c,h):p.push(pc,fT(c,d),pT(h,f))):p.push(pc,c,h);break;case mc:switch(a=e[o+1],l=e[o+2],o+=3,e[o]){case mc:Uu(p,a,l,e[o+1],e[o+2],t,u,g,m);break;case Aa:Uu(p,a,l,c,h,t,u,g,m);break;default:p.push(mc,a,l)}u=a,g=l;break;case Aa:s!==Aa&&(Uu(p,c,h,d,f,t,u,g,m),p.push(Aa)),o+=1;break;default:r=Zp[i];for(let v=0;v<r;v++)p.push(e[o+v]);o+=r}s=i}return i!==Aa&&(p[1]=c,p[2]=h),p}};function vy(e){return new gy(e)}const Ra=vy();Ji.creator=vy(),Ji.parse=so.parse,Ji.convertToCanvasData=so.toCanvasData;const{drawRoundRect:_T}=_y;function ng(e){(function(t){t&&!t.roundRect&&(t.roundRect=function(n,i,s,r,o){_T(this,n,i,s,r,o)})})(e)}const pr={alphaPixelTypes:["png","webp","svg"],upperCaseTypeMap:{},mimeType:(e,t="image")=>!e||e.startsWith(t)?e:(e==="jpg"&&(e="jpeg"),t+"/"+e),fileType(e){const t=e.split(".");return t[t.length-1]},isOpaqueImage(e){const t=sl.fileType(e);return["jpg","jpeg"].some(n=>n===t)},getExportOptions(e){switch(typeof e){case"object":return e;case"number":return{quality:e};case"boolean":return{blob:e};default:return{}}}},sl=pr;sl.mineType=sl.mimeType,sl.alphaPixelTypes.forEach(e=>sl.upperCaseTypeMap[e]=e.toUpperCase());const gT=We.get("TaskProcessor");let xT=class{constructor(t){this.parallel=!0,this.time=1,this.id=Ws.create(Ws.TASK),this.task=t}run(){return cy(this,void 0,void 0,function*(){try{if(this.isComplete||this.runing)return;if(this.runing=!0,this.canUse&&!this.canUse())return this.cancel();this.task&&(yield this.task())}catch(t){gT.error(t)}})}complete(){this.isComplete=!0,this.parent=this.task=this.canUse=null}cancel(){this.isCancel=!0,this.complete()}},ig=class{get total(){return this.list.length+this.delayNumber}get finishedIndex(){return this.isComplete?0:this.index+this.parallelSuccessNumber}get remain(){return this.isComplete?this.total:this.total-this.finishedIndex}get percent(){const{total:t}=this;let n=0,i=0;for(let s=0;s<t;s++)s<=this.finishedIndex?(i+=this.list[s].time,s===this.finishedIndex&&(n=i)):n+=this.list[s].time;return this.isComplete?1:i/n}constructor(t){this.config={parallel:6},this.list=[],this.running=!1,this.isComplete=!0,this.index=0,this.delayNumber=0,t&&De.assign(this.config,t),this.empty()}add(t,n,i){let s,r,o,a;const l=new xT(t);return l.parent=this,Ke(n)?a=n:n&&(r=n.parallel,s=n.start,o=n.time,a=n.delay,i||(i=n.canUse)),o&&(l.time=o),r===!1&&(l.parallel=!1),i&&(l.canUse=i),Qt(a)?this.push(l,s):(this.delayNumber++,setTimeout(()=>{this.delayNumber&&(this.delayNumber--,this.push(l,s))},a)),this.isComplete=!1,l}push(t,n){this.list.push(t),n===!1||this.timer||(this.timer=setTimeout(()=>this.start()))}empty(){this.index=0,this.parallelSuccessNumber=0,this.list=[],this.parallelList=[],this.delayNumber=0}start(){this.running||(this.running=!0,this.isComplete=!1,this.run())}pause(){clearTimeout(this.timer),this.timer=null,this.running=!1}resume(){this.start()}skip(){this.index++,this.resume()}stop(){this.isComplete=!0,this.list.forEach(t=>{t.isComplete||t.run()}),this.pause(),this.empty()}run(){this.running&&(this.setParallelList(),this.parallelList.length>1?this.runParallelTasks():this.remain?this.runTask():this.onComplete())}runTask(){const t=this.list[this.index];t?t.run().then(()=>{this.onTask(t),this.index++,t.isCancel?this.runTask():this.nextTask()}).catch(n=>{this.onError(n)}):this.timer=setTimeout(()=>this.nextTask())}runParallelTasks(){this.parallelList.forEach(t=>this.runParallelTask(t))}runParallelTask(t){t.run().then(()=>{this.onTask(t),this.fillParallelTask()}).catch(n=>{this.onParallelError(n)})}nextTask(){this.total===this.finishedIndex?this.onComplete():this.timer=setTimeout(()=>this.run())}setParallelList(){let t;const{config:n,list:i,index:s}=this;this.parallelList=[],this.parallelSuccessNumber=0;let r=s+n.parallel;if(r>i.length&&(r=i.length),n.parallel>1)for(let o=s;o<r&&(t=i[o],t.parallel);o++)this.parallelList.push(t)}fillParallelTask(){let t;const n=this.parallelList;this.parallelSuccessNumber++,n.pop();const i=n.length,s=this.finishedIndex+i;if(n.length){if(!this.running)return;s<this.total&&(t=this.list[s],t&&t.parallel&&(n.push(t),this.runParallelTask(t)))}else this.index+=this.parallelSuccessNumber,this.parallelSuccessNumber=0,this.nextTask()}onComplete(){this.stop(),this.config.onComplete&&this.config.onComplete()}onTask(t){t.complete(),this.config.onTask&&this.config.onTask()}onParallelError(t){this.parallelList.forEach(n=>{n.parallel=!1}),this.parallelList.length=0,this.parallelSuccessNumber=0,this.onError(t)}onError(t){this.pause(),this.config.onError&&this.config.onError(t)}destroy(){this.stop()}};const vT=We.get("Resource"),dr={tasker:new ig,queue:new ig({parallel:1}),map:{},get isComplete(){return er.tasker.isComplete},set(e,t){er.map[e]&&vT.repeat(e),er.map[e]=t},get:e=>er.map[e],remove(e){const t=er.map[e];t&&(t.destroy&&t.destroy(),delete er.map[e])},loadImage(e,t){return new Promise((n,i)=>{const s=this.setImage(e,e,t);s.load(()=>n(s),r=>i(r))})},setImage(e,t,n){let i;return en(t)?i={url:t}:t.url||(i={url:e,view:t}),i&&(n&&(i.format=n),t=Ze.image(i)),er.set(e,t),t},loadFilm(e,t){},loadVideo(e,t){},destroy(){er.map={}}},er=dr,Fi={maxRecycled:10,recycledList:[],patternTasker:dr.queue,get(e,t){let n=dr.get(e.url);return n||dr.set(e.url,n=t==="film"?Ze.film(e):Ze.image(e)),n.use++,n},recycle(e){e.parent&&(e=e.parent),e.use--,setTimeout(()=>{e.use||(Ot.image.isLarge(e)?e.url&&dr.remove(e.url):(e.clearLevels(),Ca.recycledList.push(e)))})},recyclePaint(e){Ca.recycle(e.image)},clearRecycled(e){const t=Ca.recycledList;(t.length>Ca.maxRecycled||e)&&(t.forEach(n=>(!n.use||e)&&n.url&&dr.remove(n.url)),t.length=0)},clearLevels(){},hasAlphaPixel:e=>pr.alphaPixelTypes.some(t=>Ca.isFormat(t,e)),isFormat(e,t){if(t.format)return t.format===e;const{url:n}=t;if(n.startsWith("data:")){if(n.startsWith("data:"+pr.mimeType(e)))return!0}else if(n.includes("."+e)||n.includes("."+pr.upperCaseTypeMap[e])||e==="png"&&!n.includes("."))return!0;return!1},destroy(){this.clearRecycled(!0)}},Ca=Fi,{IMAGE:yT,create:ST}=Ws;class yy{get tag(){return"Image"}get url(){return this.config.url}get crossOrigin(){const{crossOrigin:t}=this.config;return Qt(t)?Ot.image.crossOrigin:t}get completed(){return this.ready||!!this.error}constructor(t){if(this.use=0,this.waitComplete=[],this.innerId=ST(yT),this.config=t||(t={url:""}),t.view){const{view:n}=t;this.setView(n.config?n.view:n)}Fi.isFormat("svg",t)&&(this.isSVG=!0),Fi.hasAlphaPixel(t)&&(this.hasAlphaPixel=!0)}load(t,n,i){return this.loading||(this.loading=!0,dr.tasker.add(()=>cy(this,void 0,void 0,function*(){return yield Ot.origin["load"+this.tag](this.getLoadUrl(i),this.crossOrigin,this).then(s=>{i&&this.setThumbView(s),this.setView(s)}).catch(s=>{this.error=s,this.onComplete(!1)})}))),this.waitComplete.push(t,n),this.waitComplete.length-2}unload(t,n){const i=this.waitComplete;if(n){const s=i[t+1];s&&s({type:"stop"})}i[t]=i[t+1]=void 0}setView(t){this.ready=!0,this.width||(this.width=t.width,this.height=t.height,this.view=t),this.onComplete(!0)}onComplete(t){let n;this.waitComplete.forEach((i,s)=>{n=s%2,i&&(t?n||i(this):n&&i(this.error))}),this.waitComplete.length=0,this.loading=!1}getFull(t){return this.view}getCanvas(t,n,i,s,r,o,a,l){if(t||(t=this.width),n||(n=this.height),this.cache){let{params:h,data:d}=this.cache;for(let f in h)if(h[f]!==arguments[f]){d=null;break}if(d)return d}const c=Ot.image.resize(this.view,t,n,r,o,void 0,a,i,s,l);return this.cache=this.use>1?{data:c,params:arguments}:null,c}getPattern(t,n,i,s){const r=Ot.canvas.createPattern(t,n);return Ot.image.setPatternTransform(r,i,s),r}render(t,n,i,s,r,o,a,l,c){t.drawImage(this.view,n,i,s,r)}getLoadUrl(t){return this.url}setThumbView(t){}getThumbSize(t){}getMinLevel(){}getLevelData(t,n,i){}clearLevels(t){}destroyFilter(){}destroy(){this.clearLevels(),this.destroyFilter();const{view:t}=this;t&&t.close&&t.close(),this.config={url:""},this.cache=this.view=null,this.waitComplete.length=0}}function _a(e,t,n,i){n.configurable=n.enumerable=!0,Object.defineProperty(e,t,n)}function Sy(e,t){return Object.getOwnPropertyDescriptor(e,t)}function MT(e,t){const n="_"+e;return{get(){const i=this[n];return i??t},set(i){this[n]=i}}}function rn(e,t){return(n,i)=>bT(n,i,e,t&&t(i))}function bT(e,t,n,i){_a(e,t,Object.assign({get(){return this.__getAttr(t)},set(r){this.__setAttr(t,r)}},i||{})),by(e,t,n)}function jn(e){return rn(e)}function _c(e,t){return rn(e,n=>({set(i){this.__setAttr(n,i,t)&&(this.__layout.matrixChanged||this.__layout.matrixChange())}}))}function sg(e,t){return rn(e,n=>({set(i){this.__setAttr(n,i,t)&&(this.__layout.matrixChanged||this.__layout.matrixChange(),this.__scrollWorld||(this.__scrollWorld={}))}}))}function rg(e){return rn(e,t=>({set(n){this.__setAttr(t,n)&&(this.__hasAutoLayout=!!(this.origin||this.around||this.flow),this.__local||this.__layout.createLocal(),ga(this))}}))}function og(e,t){return rn(e,n=>({set(i){this.__setAttr(n,i,t)&&(this.__layout.scaleChanged||this.__layout.scaleChange())}}))}function Nu(e,t){return rn(e,n=>({set(i){this.__setAttr(n,i,t)&&(this.__layout.rotationChanged||this.__layout.rotationChange())}}))}function pe(e,t){return rn(e,n=>({set(i){this.__setAttr(n,i,t)&&ga(this)}}))}function ET(e){return rn(e,t=>({set(n){this.__setAttr(t,n)&&(ga(this),this.__.__removeNaturalSize())}}))}function ga(e){e.__layout.boxChanged||e.__layout.boxChange(),e.__hasAutoLayout&&(e.__layout.matrixChanged||e.__layout.matrixChange())}function wT(e){return rn(e,t=>({set(n){const i=this.__;i.__pathInputed!==2&&(i.__pathInputed=n?1:0),n||(i.__pathForRender=void 0),this.__setAttr(t,n),ga(this)}}))}const Mn=pe;function Xh(e,t){return rn(e,n=>({set(i){this.__setAttr(n,i)&&(TT(this),t&&(this.__.__useStroke=!0))}}))}function TT(e){e.__layout.strokeChanged||e.__layout.strokeChange(),e.__.__useArrow&&ga(e)}const Xi=Xh;function Jp(e){return rn(e,t=>({set(n){this.__setAttr(t,n),this.__layout.renderChanged||this.__layout.renderChange()}}))}function mr(e){return rn(e,t=>({set(n){this.__setAttr(t,n)&&(this.__layout.surfaceChanged||this.__layout.surfaceChange())}}))}function ag(e){return rn(e,t=>({set(n){if(this.__setAttr(t,n)){const i=this.__;De.stintSet(i,"__useDim",i.dim||i.bright||i.dimskip)}}}))}function AT(e){return rn(e,t=>({set(n){this.__setAttr(t,n)&&(this.__layout.opacityChanged||this.__layout.opacityChange()),this.mask&&My(this)}}))}function RT(e){return rn(e,t=>({set(n){const i=this.visible;if(i===!0&&n===0){if(this.animationOut)return this.__runAnimation("out",()=>lg(this,t,n,i))}else i===0&&n===!0&&this.animation&&this.__runAnimation("in");lg(this,t,n,i),this.mask&&My(this)}}))}function My(e){const{parent:t}=e;if(t){const{__hasMask:n}=t;t.__updateMask(),n!==t.__hasMask&&t.forceUpdate()}}function lg(e,t,n,i){e.__setAttr(t,n)&&(e.__layout.opacityChanged||e.__layout.opacityChange(),i!==0&&n!==0||ga(e))}function CT(e){return rn(e,t=>({set(n){this.__setAttr(t,n)&&this.waitParent(()=>{this.parent.__layout.childrenSortChange()})}}))}function PT(e){return rn(e,t=>({set(n){this.__setAttr(t,n)&&(this.__layout.boxChanged||this.__layout.boxChange(),this.waitParent(()=>{this.parent.__updateMask(n)}))}}))}function LT(e){return rn(e,t=>({set(n){this.__setAttr(t,n)&&this.waitParent(()=>{this.parent.__updateEraser(n)})}}))}function Xr(e){return rn(e,t=>({set(n){this.__setAttr(t,n)&&(this.__layout.hitCanvasChanged=!0,this.leafer&&this.leafer.updateCursor())}}))}function DT(e){return rn(e,t=>({set(n){this.__setAttr(t,n),this.leafer&&this.leafer.updateCursor()}}))}function In(e){return(t,n)=>{_a(t,"__DataProcessor",{get:()=>e})}}function by(e,t,n){const i=e.__DataProcessor.prototype,s="_"+t,r=function(h){return"set"+h.charAt(0).toUpperCase()+h.slice(1)}(t),o=MT(t,n);if(Qt(n))o.get=function(){return this[s]};else if(typeof n=="function")o.get=function(){const h=this[s];return h??n(this.__leaf)};else if(He(n)){const h=nE(n);o.get=function(){const d=this[s];return d??(this[s]=h?{}:De.clone(n))}}const a=e.isBranchLeaf;t==="width"?o.get=function(){const h=this[s];if(h==null){const d=this,f=d.__naturalWidth,u=d.__leaf;return!n||u.pathInputed?u.boxBounds.width:f?d._height&&d.__useNaturalRatio?d._height*f/d.__naturalHeight:f:a&&u.children.length?u.boxBounds.width:n}return h}:t==="height"&&(o.get=function(){const h=this[s];if(h==null){const d=this,f=d.__naturalHeight,u=d.__leaf;return!n||u.pathInputed?u.boxBounds.height:f?d._width&&d.__useNaturalRatio?d._width*f/d.__naturalWidth:f:a&&u.children.length?u.boxBounds.height:n}return h});let l,c=i;for(;!l&&c;)l=Sy(c,t),c=c.__proto__;l&&l.set&&(o.set=l.set),i[r]&&(o.set=i[r],delete i[r]),_a(i,t,o)}const IT=new We("rewrite"),rh=[],OT=["destroy","constructor"];function Cs(e){return(t,n)=>{rh.push({name:t.constructor.name+"."+n,run:()=>{t[n]=e}})}}function $h(){return e=>{Ey()}}function Ey(e){rh.length&&(rh.forEach(t=>{e&&IT.error(t.name,"需在Class上装饰@rewriteAble()"),t.run()}),rh.length=0)}function Ci(e,t){return n=>{var i;(e.prototype?(i=e.prototype,Object.getOwnPropertyNames(i)):Object.keys(e)).forEach(s=>{OT.includes(s)||t&&t.includes(s)||(e.prototype?Sy(e.prototype,s).writable&&(n.prototype[s]=e.prototype[s]):n.prototype[s]=e[s])})}}function On(){return e=>{Nl.register(e)}}function js(){return e=>{ca.register(e)}}setTimeout(()=>Ey(!0));const{copy:Mo,toInnerPoint:UT,toOuterPoint:NT,scaleOfOuter:cg,rotateOfOuter:FT,skewOfOuter:BT,multiplyParent:hg,divideParent:ug,getLayout:kT}=re,Ye={},{round:dg}=Math,Xe={updateAllMatrix(e,t,n){if(t&&e.__hasAutoLayout&&e.__layout.matrixChanged&&(n=!0),HT(e,t,n),e.isBranch){const{children:i}=e;for(let s=0,r=i.length;s<r;s++)zT(i[s],t,n)}},updateMatrix(e,t,n){const i=e.__layout;t?n&&(i.waitAutoLayout=!0,e.__hasAutoLayout&&(i.matrixChanged=!1)):i.waitAutoLayout&&(i.waitAutoLayout=!1),i.matrixChanged&&e.__updateLocalMatrix(),i.waitAutoLayout||e.__updateWorldMatrix()},updateBounds(e){const t=e.__layout;t.boundsChanged&&e.__updateLocalBounds(),t.waitAutoLayout||e.__updateWorldBounds()},updateAllWorldOpacity(e){if(e.__updateWorldOpacity(),e.isBranch){const{children:t}=e;for(let n=0,i=t.length;n<i;n++)fg(t[n])}},updateChange(e){const t=e.__layout;t.stateStyleChanged&&e.updateState(),t.opacityChanged&&fg(e),e.__updateChange(),t.surfaceChanged&&(e.__hasComplex&&Qe.updateComplex(e),t.surfaceChanged=!1)},updateAllChange(e){if(GT(e),e.isBranch){const{children:t}=e;for(let n=0,i=t.length;n<i;n++)VT(t[n])}},worldHittable(e){for(;e;){if(!e.__.hittable)return!1;e=e.parent}return!0},draggable:e=>(e.draggable||e.editable)&&e.hitSelf&&!e.locked,copyCanvasByWorld(e,t,n,i,s,r){i||(i=e.__nowWorld),e.__worldFlipped||Ot.fullImageShadow?t.copyWorldByReset(n,i,e.__nowWorld,s,r):t.copyWorldToInner(n,i,e.__layout.renderBounds,s)},renderComplex(e,t,n){},updateComplex(e){},checkComplex(e){},moveWorld(e,t,n=0,i,s){const r=He(t)?Object.assign({},t):{x:t,y:n};i?NT(e.localTransform,r,r,!0):e.parent&&UT(e.parent.scrollWorldTransform,r,r,!0),Qe.moveLocal(e,r.x,r.y,s)},moveLocal(e,t,n=0,i){He(t)&&(n=t.y,t=t.x),t+=e.x,n+=e.y,e.leafer&&e.leafer.config.pointSnap&&(t=dg(t),n=dg(n)),i?e.animate({x:t,y:n},i):(e.x=t,e.y=n)},zoomOfWorld(e,t,n,i,s,r){Qe.zoomOfLocal(e,Fu(e,t),n,i,s,r)},zoomOfLocal(e,t,n,i=n,s,r){const o=e.__localMatrix;if(Ke(i)||(i&&(r=i),i=n),Mo(Ye,o),cg(Ye,t,n,i),Qe.hasHighPosition(e))Qe.setTransform(e,Ye,s,r);else{const a=e.x+Ye.e-o.e,l=e.y+Ye.f-o.f;r&&!s?e.animate({x:a,y:l,scaleX:e.scaleX*n,scaleY:e.scaleY*i},r):(e.x=a,e.y=l,e.scaleResize(n,i,s!==!0))}},rotateOfWorld(e,t,n,i){Qe.rotateOfLocal(e,Fu(e,t),n,i)},rotateOfLocal(e,t,n,i){const s=e.__localMatrix;Mo(Ye,s),FT(Ye,t,n),Qe.hasHighPosition(e)?Qe.setTransform(e,Ye,!1,i):e.set({x:e.x+Ye.e-s.e,y:e.y+Ye.f-s.f,rotation:wn.formatRotation(e.rotation+n)},i)},skewOfWorld(e,t,n,i,s,r){Qe.skewOfLocal(e,Fu(e,t),n,i,s,r)},skewOfLocal(e,t,n,i=0,s,r){Mo(Ye,e.__localMatrix),BT(Ye,t,n,i),Qe.setTransform(e,Ye,s,r)},transformWorld(e,t,n,i){Mo(Ye,e.worldTransform),hg(Ye,t),e.parent&&ug(Ye,e.parent.scrollWorldTransform),Qe.setTransform(e,Ye,n,i)},transform(e,t,n,i){Mo(Ye,e.localTransform),hg(Ye,t),Qe.setTransform(e,Ye,n,i)},setTransform(e,t,n,i){const s=e.__,r=s.origin&&Qe.getInnerOrigin(e,s.origin),o=kT(t,r,s.around&&Qe.getInnerOrigin(e,s.around));if(Qe.hasOffset(e)&&(o.x-=s.offsetX,o.y-=s.offsetY),n){const a=o.scaleX/e.scaleX,l=o.scaleY/e.scaleY;if(delete o.scaleX,delete o.scaleY,r){Bt.scale(e.boxBounds,Math.abs(a),Math.abs(l));const c=Qe.getInnerOrigin(e,s.origin);ce.move(o,r.x-c.x,r.y-c.y)}e.set(o),e.scaleResize(a,l,!1)}else e.set(o,i)},getFlipTransform(e,t){const n={a:1,b:0,c:0,d:1,e:0,f:0},i=t==="x"?1:-1;return cg(n,Qe.getLocalOrigin(e,"center"),-1*i,1*i),n},getLocalOrigin:(e,t)=>ce.tempToOuterOf(Qe.getInnerOrigin(e,t),e.localTransform),getInnerOrigin(e,t){const n={};return wr.toPoint(t,e.boxBounds,n),n},getRelativeWorld:(e,t,n)=>(Mo(Ye,e.worldTransform),ug(Ye,t.scrollWorldTransform),n?Ye:Object.assign({},Ye)),updateScaleFixedWorld(e){},updateOuterBounds(e){},cacheId(e){},drop(e,t,n,i){e.setTransform(Qe.getRelativeWorld(e,t,!0),i),t.add(e,n)},hasHighPosition:e=>e.origin||e.around||Qe.hasOffset(e),hasOffset:e=>e.offsetX||e.offsetY,hasParent(e,t){if(!t)return!1;for(;e;){if(t===e)return!0;e=e.parent}},animateMove(e,t,n=.3){if(t.x||t.y)if(Math.abs(t.x)<1&&Math.abs(t.y)<1)e.move(t);else{const i=t.x*n,s=t.y*n;t.x-=i,t.y-=s,e.move(i,s),Ot.requestRender(()=>Qe.animateMove(e,t,n))}}},Qe=Xe,{updateAllMatrix:zT,updateMatrix:HT,updateAllWorldOpacity:fg,updateAllChange:VT,updateChange:GT}=Qe;function Fu(e,t){return e.updateLayout(),e.parent?ce.tempToInnerOf(t,e.parent.scrollWorldTransform):t}const Yh={worldBounds:e=>e.__world,localBoxBounds:e=>e.__.eraser||e.__.visible===0?null:e.__local||e.__layout,localStrokeBounds:e=>e.__.eraser||e.__.visible===0?null:e.__layout.localStrokeBounds,localRenderBounds(e){const{__:t,__layout:n}=e;return t.eraser||t.visible===0?null:n.localOuterBounds||n.localRenderBounds},maskLocalBoxBounds:(e,t)=>Bu(e,t)&&e.__localBoxBounds,maskLocalStrokeBounds:(e,t)=>Bu(e,t)&&e.__layout.localStrokeBounds,maskLocalRenderBounds(e,t){const{__layout:n}=e;return Bu(e,t)&&(n.localOuterBounds||n.localRenderBounds)},excludeRenderBounds:(e,t)=>!(!t.bounds||t.bounds.hit(e.__world,t.matrix))||!(!t.hideBounds||!t.hideBounds.includes(e.__world,t.matrix))};let Pa;function Bu(e,t){return t||(Pa=0),e.__.mask&&(Pa=1),Pa<0?null:(Pa&&(Pa=-1),!0)}const{updateBounds:pg}=Xe,Fl={sort:(e,t)=>e.__.zIndex===t.__.zIndex?e.__tempNumber-t.__tempNumber:e.__.zIndex-t.__.zIndex,pushAllChildBranch(e,t){if(e.__tempNumber=1,e.__.__childBranchNumber){const{children:n}=e;for(let i=0,s=n.length;i<s;i++)(e=n[i]).isBranch&&(e.__tempNumber=1,t.add(e),WT(e,t))}},pushAllParent(e,t){const{keys:n}=t;if(n)for(;e.parent&&Qt(n[e.parent.innerId]);)t.add(e.parent),e=e.parent;else for(;e.parent;)t.add(e.parent),e=e.parent},pushAllBranchStack(e,t){let n=t.length;const{children:i}=e;for(let s=0,r=i.length;s<r;s++)i[s].isBranch&&t.push(i[s]);for(let s=n,r=t.length;s<r;s++)mg(t[s],t)},updateBounds(e,t){const n=[e];mg(e,n),XT(n,t)},updateBoundsByBranchStack(e,t){let n,i;for(let s=e.length-1;s>-1;s--){n=e[s],i=n.children;for(let r=0,o=i.length;r<o;r++)pg(i[r]);t&&t===n||pg(n)}},move(e,t,n){let i;const{children:s}=e;for(let r=0,o=s.length;r<o;r++)i=(e=s[r]).__world,i.e+=t,i.f+=n,i.x+=t,i.y+=n,e.isBranch&&$T(e,t,n)},scale(e,t,n,i,s,r,o){let a;const{children:l}=e,c=i-1,h=s-1;for(let d=0,f=l.length;d<f;d++)a=(e=l[d]).__world,a.a*=i,a.d*=s,(a.b||a.c)&&(a.b*=i,a.c*=s),a.e===a.x&&a.f===a.y?(a.x=a.e+=(a.e-r)*c+t,a.y=a.f+=(a.f-o)*h+n):(a.e+=(a.e-r)*c+t,a.f+=(a.f-o)*h+n,a.x+=(a.x-r)*c+t,a.y+=(a.y-o)*h+n),a.width*=i,a.height*=s,a.scaleX*=i,a.scaleY*=s,e.isBranch&&YT(e,t,n,i,s,r,o)}},{pushAllChildBranch:WT,pushAllBranchStack:mg,updateBoundsByBranchStack:XT,move:$T,scale:YT}=Fl,La={run(e){if(e&&e.length){const t=e.length;for(let n=0;n<t;n++)e[n]();e.length===t?e.length=0:e.splice(0,t)}}},{getRelativeWorld:_g,updateBounds:jT}=Xe,{toOuterOf:gc,getPoints:qT,copy:KT}=Bt,ku="_localContentBounds",zu="_worldContentBounds",Hu="_worldBoxBounds",Vu="_worldStrokeBounds";class ZT{get contentBounds(){return this._contentBounds||this.boxBounds}set contentBounds(t){this._contentBounds=t}get strokeBounds(){return this._strokeBounds||this.boxBounds}get renderBounds(){return this._renderBounds||this.boxBounds}set renderBounds(t){this._renderBounds=t}get localContentBounds(){return gc(this.contentBounds,this.leaf.__localMatrix,this[ku]||(this[ku]={})),this[ku]}get localStrokeBounds(){return this._localStrokeBounds||this}get localRenderBounds(){return this._localRenderBounds||this}get worldContentBounds(){return gc(this.contentBounds,this.leaf.__world,this[zu]||(this[zu]={})),this[zu]}get worldBoxBounds(){return gc(this.boxBounds,this.leaf.__world,this[Hu]||(this[Hu]={})),this[Hu]}get worldStrokeBounds(){return gc(this.strokeBounds,this.leaf.__world,this[Vu]||(this[Vu]={})),this[Vu]}get a(){return 1}get b(){return 0}get c(){return 0}get d(){return 1}get e(){return this.leaf.__.x}get f(){return this.leaf.__.y}get x(){return this.e+this.boxBounds.x}get y(){return this.f+this.boxBounds.y}get width(){return this.boxBounds.width}get height(){return this.boxBounds.height}constructor(t){this.leaf=t,this.leaf.__local&&(this._localRenderBounds=this._localStrokeBounds=this.leaf.__local),t.__world&&(this.boxBounds={x:0,y:0,width:0,height:0},this.boxChange(),this.matrixChange())}createLocal(){const t=this.leaf.__local={a:1,b:0,c:0,d:1,e:0,f:0,x:0,y:0,width:0,height:0};this._localStrokeBounds||(this._localStrokeBounds=t),this._localRenderBounds||(this._localRenderBounds=t)}update(){const{leaf:t}=this,{leafer:n}=t;if(t.isApp)return jT(t);if(n)n.ready?n.watcher.changed&&n.layouter.layout():n.start();else{let i=t;for(;i.parent&&!i.parent.leafer;)i=i.parent;const s=i;if(s.__fullLayouting)return;s.__fullLayouting=!0,Ot.layout(s),delete s.__fullLayouting}}getTransform(t="world"){this.update();const{leaf:n}=this;switch(t){case"world":return n.__world;case"local":return n.__localMatrix;case"inner":return re.defaultMatrix;case"page":t=n.zoomLayer;default:return _g(n,t)}}getBounds(t,n="world"){switch(this.update(),n){case"world":return this.getWorldBounds(t);case"local":return this.getLocalBounds(t);case"inner":return this.getInnerBounds(t);case"page":n=this.leaf.zoomLayer;default:return new un(this.getInnerBounds(t)).toOuterOf(this.getTransform(n))}}getInnerBounds(t="box"){switch(t){case"render":return this.renderBounds;case"content":if(this.contentBounds)return this.contentBounds;case"box":return this.boxBounds;case"stroke":return this.strokeBounds}}getLocalBounds(t="box"){switch(t){case"render":return this.localRenderBounds;case"stroke":return this.localStrokeBounds;case"content":if(this.contentBounds)return this.localContentBounds;case"box":return this.leaf.__localBoxBounds}}getWorldBounds(t="box"){switch(t){case"render":return this.leaf.__world;case"stroke":return this.worldStrokeBounds;case"content":if(this.contentBounds)return this.worldContentBounds;case"box":return this.worldBoxBounds}}getLayoutBounds(t,n="world",i){const{leaf:s}=this;let r,o,a,l=this.getInnerBounds(t);switch(n){case"world":r=s.getWorldPoint(l),o=s.__world;break;case"local":const{scaleX:c,scaleY:h,rotation:d,skewX:f,skewY:u}=s.__;a={scaleX:c,scaleY:h,rotation:d,skewX:f,skewY:u},r=s.getLocalPointByInner(l);break;case"inner":r=l,o=re.defaultMatrix;break;case"page":n=s.zoomLayer;default:r=s.getWorldPoint(l,n),o=_g(s,n,!0)}if(a||(a=re.getLayout(o)),KT(a,l),ce.copy(a,r),i){const{scaleX:c,scaleY:h}=a,d=Math.abs(c),f=Math.abs(h);d===1&&f===1||(a.scaleX/=d,a.scaleY/=f,a.width*=d,a.height*=f)}return a}getLayoutPoints(t,n="world"){const{leaf:i}=this,s=qT(this.getInnerBounds(t));let r;switch(n){case"world":r=null;break;case"local":r=i.parent;break;case"inner":break;case"page":n=i.zoomLayer;default:r=n}return Qt(r)||s.forEach(o=>i.innerToWorld(o,null,!1,r)),s}shrinkContent(){const{x:t,y:n,width:i,height:s}=this.boxBounds;this._contentBounds={x:t,y:n,width:i,height:s}}spreadStroke(){const{x:t,y:n,width:i,height:s}=this.strokeBounds;this._strokeBounds={x:t,y:n,width:i,height:s},this._localStrokeBounds={x:t,y:n,width:i,height:s},this.renderSpread||this.spreadRenderCancel()}spreadRender(){const{x:t,y:n,width:i,height:s}=this.renderBounds;this._renderBounds={x:t,y:n,width:i,height:s},this._localRenderBounds={x:t,y:n,width:i,height:s}}shrinkContentCancel(){this._contentBounds=void 0}spreadStrokeCancel(){const t=this.renderBounds===this.strokeBounds;this._strokeBounds=this.boxBounds,this._localStrokeBounds=this.leaf.__localBoxBounds,t&&this.spreadRenderCancel()}spreadRenderCancel(){this._renderBounds=this._strokeBounds,this._localRenderBounds=this._localStrokeBounds}boxChange(){this.boxChanged=!0,this.localBoxChanged?this.boundsChanged||(this.boundsChanged=!0):this.localBoxChange(),this.hitCanvasChanged=!0}localBoxChange(){this.localBoxChanged=!0,this.boundsChanged=!0}strokeChange(){this.strokeChanged=!0,this.strokeSpread||(this.strokeSpread=1),this.boundsChanged=!0,this.hitCanvasChanged=!0}renderChange(){this.renderChanged=!0,this.renderSpread||(this.renderSpread=1),this.boundsChanged=!0}scaleChange(){this.scaleChanged=!0,this._scaleOrRotationChange()}rotationChange(){this.rotationChanged=!0,this.affectRotation=!0,this._scaleOrRotationChange()}_scaleOrRotationChange(){this.affectScaleOrRotation=!0,this.matrixChange(),this.leaf.__local||this.createLocal()}matrixChange(){this.matrixChanged=!0,this.localBoxChanged?this.boundsChanged||(this.boundsChanged=!0):this.localBoxChange()}surfaceChange(){this.surfaceChanged=!0}opacityChange(){this.opacityChanged=!0}childrenSortChange(){this.childrenSortChanged||(this.childrenSortChanged=this.affectChildrenSort=!0,this.leaf.forceUpdate("surface"))}destroy(){}}class us{constructor(t,n){this.bubbles=!1,this.type=t,n&&(this.target=n)}stopDefault(){this.isStopDefault=!0,this.origin&&Ot.event.stopDefault(this.origin)}stopNow(){this.isStopNow=!0,this.isStop=!0,this.origin&&Ot.event.stopNow(this.origin)}stop(){this.isStop=!0,this.origin&&Ot.event.stop(this.origin)}}class cn extends us{constructor(t,n,i){super(t,n),this.parent=i,this.child=n}}cn.ADD="child.add",cn.REMOVE="child.remove",cn.CREATED="created",cn.MOUNTED="mounted",cn.UNMOUNTED="unmounted",cn.DESTROY="destroy";const gf="property.scroll";class _r extends us{constructor(t,n,i,s,r){super(t,n),this.attrName=i,this.oldValue=s,this.newValue=r}}_r.CHANGE="property.change",_r.LEAFER_CHANGE="property.leafer_change",_r.SCROLL=gf;const JT={scrollX:gf,scrollY:gf};class Bs extends us{constructor(t,n){super(t),Object.assign(this,n)}}Bs.LOAD="image.load",Bs.LOADED="image.loaded",Bs.ERROR="image.error";class Ns extends us{static checkHas(t,n,i){i==="on"?n===oh?t.__hasWorldEvent=!0:t.__hasLocalEvent=!0:(t.__hasLocalEvent=t.hasEvent(xf)||t.hasEvent(vf)||t.hasEvent(yf),t.__hasWorldEvent=t.hasEvent(oh))}static emitLocal(t){if(t.leaferIsReady){const{resized:n}=t.__layout;n!=="local"&&(t.emit(xf,t),n==="inner"&&t.emit(vf,t)),t.emit(yf,t)}}static emitWorld(t){t.leaferIsReady&&t.emit(oh,t)}}Ns.RESIZE="bounds.resize",Ns.INNER="bounds.inner",Ns.LOCAL="bounds.local",Ns.WORLD="bounds.world";const{RESIZE:xf,INNER:vf,LOCAL:yf,WORLD:oh}=Ns,Sf={};[xf,vf,yf,oh].forEach(e=>Sf[e]=1);class co extends us{get bigger(){if(!this.old)return!0;const{width:t,height:n}=this.old;return this.width>=t&&this.height>=n}get smaller(){return!this.bigger}get samePixelRatio(){return!this.old||this.pixelRatio===this.old.pixelRatio}constructor(t,n){He(t)?(super(co.RESIZE),Object.assign(this,t)):super(t),this.old=n}static isResizing(t){return this.resizingKeys&&!Qt(this.resizingKeys[t.innerId])}}co.RESIZE="resize";class xr extends us{constructor(t,n){super(t),this.data=n}}xr.REQUEST="watch.request",xr.DATA="watch.data";class Ge extends us{constructor(t,n,i){super(t),n&&(this.data=n,this.times=i)}}Ge.REQUEST="layout.request",Ge.START="layout.start",Ge.BEFORE="layout.before",Ge.LAYOUT="layout",Ge.AFTER="layout.after",Ge.AGAIN="layout.again",Ge.END="layout.end";class Re extends us{constructor(t,n,i,s){super(t),n&&(this.times=n),i&&(this.renderBounds=i,this.renderOptions=s)}}Re.REQUEST="render.request",Re.CHILD_START="render.child_start",Re.CHILD_END="render.child_end",Re.START="render.start",Re.BEFORE="render.before",Re.RENDER="render",Re.AFTER="render.after",Re.AGAIN="render.again",Re.END="render.end",Re.NEXT="render.next";class Se extends us{}Se.START="leafer.start",Se.BEFORE_READY="leafer.before_ready",Se.READY="leafer.ready",Se.AFTER_READY="leafer.after_ready",Se.VIEW_READY="leafer.view_ready",Se.VIEW_COMPLETED="leafer.view_completed",Se.STOP="leafer.stop",Se.RESTART="leafer.restart",Se.END="leafer.end",Se.UPDATE_MODE="leafer.update_mode",Se.TRANSFORM="leafer.transform",Se.MOVE="leafer.move",Se.SCALE="leafer.scale",Se.ROTATE="leafer.rotate",Se.SKEW="leafer.skew";const{MOVE:gg,SCALE:xg,ROTATE:QT,SKEW:vg}=Se,tA={x:gg,y:gg,scaleX:xg,scaleY:xg,rotation:QT,skewX:vg,skewY:vg},yg={};class eA{set event(t){this.on(t)}on(t,n,i){if(!n){let h;if(hn(t))t.forEach(d=>this.on(d[0],d[1],d[2]));else for(let d in t)hn(h=t[d])?this.on(d,h[0],h[1]):this.on(d,h);return}let s,r,o;i&&(i==="once"?r=!0:typeof i=="boolean"?s=i:(s=i.capture,r=i.once));const a=Gu(this,s,!0),l=en(t)?t.split(" "):t,c=r?{listener:n,once:r}:{listener:n};l.forEach(h=>{h&&(o=a[h],o?o.findIndex(d=>d.listener===n)===-1&&o.push(c):a[h]=[c],Sf[h]&&Ns.checkHas(this,h,"on"))})}off(t,n,i){if(t){const s=en(t)?t.split(" "):t;if(n){let r,o,a;i&&(r=typeof i=="boolean"?i:i!=="once"&&i.capture);const l=Gu(this,r);s.forEach(c=>{c&&(o=l[c],o&&(a=o.findIndex(h=>h.listener===n),a>-1&&o.splice(a,1),o.length||delete l[c],Sf[c]&&Ns.checkHas(this,c,"off")))})}else{const{__bubbleMap:r,__captureMap:o}=this;s.forEach(a=>{r&&delete r[a],o&&delete o[a]})}}else this.__bubbleMap=this.__captureMap=void 0}on_(t,n,i,s){return n?this.on(t,i?n=n.bind(i):n,s):hn(t)&&t.forEach(r=>this.on(r[0],r[2]?r[1]=r[1].bind(r[2]):r[1],r[3])),{type:t,current:this,listener:n,options:s}}off_(t){if(!t)return;const n=hn(t)?t:[t];n.forEach(i=>{i&&(i.listener?i.current.off(i.type,i.listener,i.options):hn(i.type)&&i.type.forEach(s=>i.current.off(s[0],s[1],s[3])))}),n.length=0}once(t,n,i,s){if(!n)return hn(t)&&t.forEach(r=>this.once(r[0],r[1],r[2],r[3]));He(i)?n=n.bind(i):s=i,this.on(t,n,{once:!0,capture:s})}emit(t,n,i){!n&&ca.has(t)&&(n=ca.get(t,{type:t,target:this,current:this}));const s=Gu(this,i)[t];if(s){let r;for(let o=0,a=s.length;o<a&&!((r=s[o])&&(r.listener(n),r.once&&(this.off(t,r.listener,i),o--,a--),n&&n.isStopNow));o++);}this.syncEventer&&this.syncEventer.emitEvent(n,i)}emitEvent(t,n){t.current=this,this.emit(t.type,t,n)}hasEvent(t,n){if(this.syncEventer&&this.syncEventer.hasEvent(t,n))return!0;const{__bubbleMap:i,__captureMap:s}=this,r=i&&i[t],o=s&&s[t];return!!(Qt(n)?r||o:n?o:r)}destroy(){this.__captureMap=this.__bubbleMap=this.syncEventer=null}}function Gu(e,t,n){if(t){const{__captureMap:i}=e;return i||(n?e.__captureMap={}:yg)}{const{__bubbleMap:i}=e;return i||(n?e.__bubbleMap={}:yg)}}const{on:nA,on_:iA,off:sA,off_:rA,once:oA,emit:aA,emitEvent:lA,hasEvent:cA,destroy:hA}=eA.prototype,uA={on:nA,on_:iA,off:sA,off_:rA,once:oA,emit:aA,emitEvent:lA,hasEvent:cA,destroyEventer:hA},dA=We.get("setAttr"),fA={__setAttr(e,t,n){if(this.leaferIsCreated){const i=this.__.__getInput(e);if(!n||df(t)||Qt(t)||(dA.warn(this.innerName,e,t),t=void 0),He(t)||i!==t){if(this.__realSetAttr(e,t),this.isLeafer){this.emitEvent(new _r(_r.LEAFER_CHANGE,this,e,i,t));const r=tA[e];r&&(this.emitEvent(new Se(r,this)),this.emitEvent(new Se(Se.TRANSFORM,this)))}this.emitPropertyEvent(_r.CHANGE,e,i,t);const s=JT[e];return s&&this.emitPropertyEvent(s,e,i,t),!0}return!1}return this.__realSetAttr(e,t),!0},emitPropertyEvent(e,t,n,i){const s=new _r(e,this,t,n,i);this.isLeafer||this.hasEvent(e)&&this.emitEvent(s),this.leafer.emitEvent(s)},__realSetAttr(e,t){const n=this.__;n[e]=t,this.__proxyData&&this.setProxyAttr(e,t),n.normalStyle&&(this.lockNormalStyle||Qt(n.normalStyle[e])||(n.normalStyle[e]=t))},__getAttr(e){return this.__proxyData?this.getProxyAttr(e):this.__.__get(e)}},{setLayout:pA,multiplyParent:mA,translateInner:Sg,defaultWorld:_A}=re,{toPoint:gA,tempPoint:Wu}=wr,xA={__updateWorldMatrix(){const{parent:e,__layout:t,__world:n,__scrollWorld:i,__:s}=this;mA(this.__local||t,e?e.__scrollWorld||e.__world:_A,n,!!t.affectScaleOrRotation,s),i&&Sg(Object.assign(i,n),s.scrollX,s.scrollY),t.scaleFixed&&Xe.updateScaleFixedWorld(this)},__updateLocalMatrix(){if(this.__local){const e=this.__layout,t=this.__local,n=this.__;e.affectScaleOrRotation&&(e.scaleChanged&&(e.resized||(e.resized="scale"))||e.rotationChanged)&&(pA(t,n,null,null,e.affectRotation),e.scaleChanged=e.rotationChanged=void 0),t.e=n.x+n.offsetX,t.f=n.y+n.offsetY,(n.around||n.origin)&&(gA(n.around||n.origin,e.boxBounds,Wu),Sg(t,-Wu.x,-Wu.y,!n.around))}this.__layout.matrixChanged=void 0}},{updateMatrix:vA,updateAllMatrix:Mg}=Xe,{updateBounds:bg}=Fl,{toOuterOf:xc,copyAndSpread:Eg,copy:yA}=Bt,{toBounds:SA}=xy,MA={__updateWorldBounds(){const{__layout:e,__world:t}=this;xc(e.renderBounds,t,t),this.__hasComplex&&Xe.checkComplex(this),e.resized&&(e.resized==="inner"&&this.__onUpdateSize(),this.__hasLocalEvent&&Ns.emitLocal(this),e.resized=void 0),this.__hasWorldEvent&&Ns.emitWorld(this)},__updateLocalBounds(){const e=this.__layout,t=this.__;e.boxChanged&&(t.__pathInputed||this.__updatePath(),this.__updateRenderPath(),this.__updateBoxBounds(),e.resized="inner",t.__strokeGeometry&&(t.__strokeGeometry=void 0)),e.localBoxChanged&&(this.__local&&this.__updateLocalBoxBounds(),e.localBoxChanged=void 0,e.strokeSpread&&(e.strokeChanged=!0),e.renderSpread&&(e.renderChanged=!0),this.parent&&this.parent.__layout.boxChange()),e.boxChanged=void 0,e.strokeChanged&&(e.strokeSpread=this.__updateStrokeSpread(),e.strokeSpread?(e.strokeBounds===e.boxBounds&&e.spreadStroke(),this.__updateStrokeBounds(),this.__updateLocalStrokeBounds()):e.spreadStrokeCancel(),e.strokeChanged=void 0,(e.renderSpread||e.strokeSpread!==e.strokeBoxSpread)&&(e.renderChanged=!0),this.parent&&this.parent.__layout.strokeChange(),e.resized="inner",t.__strokeGeometry&&(t.__strokeGeometry=void 0)),e.renderChanged&&(e.renderSpread=this.__updateRenderSpread(),e.renderSpread?(e.renderBounds!==e.boxBounds&&e.renderBounds!==e.strokeBounds||e.spreadRender(),this.__updateRenderBounds(),this.__updateLocalRenderBounds()):e.spreadRenderCancel(),e.renderChanged=void 0,this.parent&&this.parent.__layout.renderChange()),e.outerScale&&Xe.updateOuterBounds(this),e.resized||(e.resized="local"),e.boundsChanged=void 0},__updateLocalBoxBounds(){this.__hasMotionPath&&this.__updateMotionPath(),this.__hasAutoLayout&&this.__updateAutoLayout(),xc(this.__layout.boxBounds,this.__local,this.__local)},__updateLocalStrokeBounds(){xc(this.__layout.strokeBounds,this.__localMatrix,this.__layout.localStrokeBounds)},__updateLocalRenderBounds(){xc(this.__layout.renderBounds,this.__localMatrix,this.__layout.localRenderBounds)},__updateBoxBounds(e,t){const n=this.__layout.boxBounds,i=this.__;i.__usePathBox?SA(i.path,n):(n.x=0,n.y=0,n.width=i.width,n.height=i.height)},__updateAutoLayout(){this.__layout.matrixChanged=!0,this.isBranch?(this.__extraUpdate(),this.__.flow?(this.__layout.boxChanged&&this.__updateFlowLayout(),Mg(this),bg(this,this),this.__.__autoSide&&this.__updateBoxBounds(!0)):(Mg(this),bg(this,this))):vA(this)},__updateNaturalSize(){const{__:e,__layout:t}=this;e.__naturalWidth=t.boxBounds.width,e.__naturalHeight=t.boxBounds.height},__updateStrokeBounds(e){const t=this.__layout;Eg(t.strokeBounds,t.boxBounds,t.strokeBoxSpread)},__updateRenderBounds(e){const t=this.__layout,{renderSpread:n}=t;Ke(n)&&n<=0?yA(t.renderBounds,t.strokeBounds):Eg(t.renderBounds,t.boxBounds,n)}},bA={__render(e,t){if(t.shape)return this.__renderShape(e,t);if((!t.cellList||t.cellList.has(this))&&this.__worldOpacity){const n=this.__;if(n.bright&&!t.topRendering)return t.topList.add(this);if(e.setWorld(this.__nowWorld=this.__getNowWorld(t)),e.opacity=t.ignoreOpacity?1:t.dimOpacity&&!n.dimskip?n.opacity*t.dimOpacity:n.opacity,this.__.__single){if(n.eraser==="path")return this.__renderEraser(e,t);const i=e.getSameCanvas(!0,!0);this.__draw(i,t,e),Xe.copyCanvasByWorld(this,e,i,this.__nowWorld,n.__blendMode,!0),i.recycle(this.__nowWorld)}else this.__draw(e,t);We.showBounds&&We.drawBounds(this,e,t)}},__renderShape(e,t){this.__worldOpacity&&(e.setWorld(this.__nowWorld=this.__getNowWorld(t)),this.__drawShape(e,t))},__clip(e,t){this.__worldOpacity&&(e.setWorld(this.__nowWorld=this.__getNowWorld(t)),this.__drawRenderPath(e),e.clipUI(this))},__updateWorldOpacity(){this.__worldOpacity=this.__.visible?this.parent?this.parent.__worldOpacity*this.__.opacity:this.__.opacity:0,this.__layout.opacityChanged&&(this.__layout.opacityChanged=!1)}},{excludeRenderBounds:wg}=Yh,{hasSize:EA}=Bt,wA={__updateChange(){const{__layout:e}=this;e.childrenSortChanged&&(this.__updateSortChildren(),e.childrenSortChanged=!1),this.__.__checkSingle()},__render(e,t){const n=this.__nowWorld=this.__getNowWorld(t);if(this.__worldOpacity&&EA(n)){const i=this.__;if(i.__useDim)if(i.dim)t.dimOpacity=i.dim===!0?.2:i.dim;else{if(i.bright&&!t.topRendering)return t.topList.add(this);i.dimskip&&t.dimOpacity&&(t.dimOpacity=0)}if(i.__single&&!this.isBranchLeaf){if(i.eraser==="path")return this.__renderEraser(e,t);const s=e.getSameCanvas(!1,!0);this.__renderBranch(s,t),e.opacity=t.ignoreOpacity?1:t.dimOpacity?i.opacity*t.dimOpacity:i.opacity,e.copyWorldByReset(s,n,n,i.__blendMode,!0),s.recycle(n)}else this.__renderBranch(e,t)}},__renderBranch(e,t){if(this.__hasMask)this.__renderMask(e,t);else{let n;const{children:i}=this;for(let s=0,r=i.length;s<r;s++)n=i[s],wg(n,t)||(n.__hasComplex?Xe.renderComplex(n,e,t):n.__render(e,t))}},__clip(e,t){if(this.__worldOpacity){const{children:n}=this;for(let i=0,s=n.length;i<s;i++)wg(n[i],t)||n[i].__clip(e,t)}}},{LEAF:TA,create:AA}=Ws,{stintSet:Tg}=De,{toInnerPoint:RA,toOuterPoint:CA,multiplyParent:PA}=re,{toOuterOf:Ag}=Bt,{copy:Rg,move:Cg}=ce,{getScaleFixedData:LA}=wn,{moveLocal:DA,zoomOfLocal:IA,rotateOfLocal:OA,skewOfLocal:UA,moveWorld:Pg,zoomOfWorld:NA,rotateOfWorld:FA,skewOfWorld:BA,transform:Lg,transformWorld:kA,setTransform:zA,getFlipTransform:HA,getLocalOrigin:Xu,getRelativeWorld:VA,drop:GA}=Xe;let ha=class{get tag(){return this.__tag}set tag(e){}get __tag(){return"Leaf"}get innerName(){return this.__.name||this.tag+this.innerId}get __DataProcessor(){return ey}get __LayoutProcessor(){return ZT}get leaferIsCreated(){return this.leafer&&this.leafer.created}get leaferIsReady(){return this.leafer&&this.leafer.ready}get isLeafer(){return!1}get isBranch(){return!1}get isBranchLeaf(){return!1}get __localMatrix(){return this.__local||this.__layout}get __localBoxBounds(){return this.__local||this.__layout}get worldTransform(){return this.__layout.getTransform("world")}get localTransform(){return this.__layout.getTransform("local")}get scrollWorldTransform(){return this.updateLayout(),this.__scrollWorld||this.__world}get boxBounds(){return this.getBounds("box","inner")}get renderBounds(){return this.getBounds("render","inner")}get worldBoxBounds(){return this.getBounds("box")}get worldStrokeBounds(){return this.getBounds("stroke")}get worldRenderBounds(){return this.getBounds("render")}get worldOpacity(){return this.updateLayout(),this.__worldOpacity}get __worldFlipped(){return this.__world.scaleX<0||this.__world.scaleY<0}get __onlyHitMask(){return this.__hasMask&&!this.__.hitChildren}get __ignoreHitWorld(){return(this.__hasMask||this.__hasEraser)&&this.__.hitChildren}get __inLazyBounds(){return this.leaferIsCreated&&this.leafer.lazyBounds.hit(this.__world)}get pathInputed(){return this.__.__pathInputed}set event(e){this.on(e)}constructor(e){this.innerId=AA(TA),this.reset(e),this.__bubbleMap&&this.__emitLifeEvent(cn.CREATED)}reset(e){this.leafer&&this.leafer.forceRender(this.__world),e!==0&&(this.__world={a:1,b:0,c:0,d:1,e:0,f:0,x:0,y:0,width:0,height:0,scaleX:1,scaleY:1},e!==null&&(this.__local={a:1,b:0,c:0,d:1,e:0,f:0,x:0,y:0,width:0,height:0})),this.__worldOpacity=1,this.__=new this.__DataProcessor(this),this.__layout=new this.__LayoutProcessor(this),this.__level&&this.resetCustom(),e&&(e.__&&(e=e.toJSON()),e.children?this.set(e):Object.assign(this,e))}resetCustom(){this.__hasMask=this.__hasEraser=null,this.forceUpdate()}waitParent(e,t){t&&(e=e.bind(t)),this.parent?e():this.on(cn.ADD,e,"once")}waitLeafer(e,t){t&&(e=e.bind(t)),this.leafer?e():this.on(cn.MOUNTED,e,"once")}nextRender(e,t,n){this.leafer?this.leafer.nextRender(e,t,n):this.waitLeafer(()=>this.leafer.nextRender(e,t,n))}removeNextRender(e){this.nextRender(e,null,"off")}__bindLeafer(e){if(this.isLeafer&&e!==null&&(e=this),this.leafer&&!e&&this.leafer.leafs--,this.leafer=e,e?(e.leafs++,this.__level=this.parent?this.parent.__level+1:1,this.animation&&this.__runAnimation("in"),this.__bubbleMap&&this.__emitLifeEvent(cn.MOUNTED),e.cacheId&&Xe.cacheId(this)):this.__emitLifeEvent(cn.UNMOUNTED),this.isBranch){const{children:t}=this;for(let n=0,i=t.length;n<i;n++)t[n].__bindLeafer(e)}}set(e,t){}get(e){}setAttr(e,t){this[e]=t}getAttr(e){return this[e]}getComputedAttr(e){return this.__[e]}toJSON(e){return e&&this.__layout.update(),this.__.__getInputData(null,e)}toString(e){return JSON.stringify(this.toJSON(e))}toSVG(){}__SVG(e){}toHTML(){}__setAttr(e,t){return!0}__getAttr(e){}setProxyAttr(e,t){}getProxyAttr(e){}find(e,t){}findTag(e){}findOne(e,t){}findId(e){}focus(e){}updateState(){}updateLayout(){this.__layout.update()}forceUpdate(e){Qt(e)?e="width":e==="surface"&&(e="blendMode");const t=this.__.__getInput(e);this.__[e]=Qt(t)?null:void 0,this[e]=t}forceRender(e,t){this.forceUpdate("surface")}__extraUpdate(){this.leaferIsReady&&this.leafer.layouter.addExtra(this)}__updateWorldMatrix(){}__updateLocalMatrix(){}__updateWorldBounds(){}__updateLocalBounds(){}__updateLocalBoxBounds(){}__updateLocalStrokeBounds(){}__updateLocalRenderBounds(){}__updateBoxBounds(e,t){}__updateContentBounds(){}__updateStrokeBounds(e){}__updateRenderBounds(e){}__updateAutoLayout(){}__updateFlowLayout(){}__updateNaturalSize(){}__updateStrokeSpread(){return 0}__updateRenderSpread(){return 0}__onUpdateSize(){}__updateEraser(e){this.__hasEraser=!!e||this.children.some(t=>t.__.eraser)}__renderEraser(e,t){e.save(),this.__clip(e,t);const{renderBounds:n}=this.__layout;e.clearRect(n.x,n.y,n.width,n.height),e.restore()}__updateMask(e){this.__hasMask=this.children.some(t=>t.__.mask&&t.__.visible&&t.__.opacity)}__renderMask(e,t){}__getNowWorld(e){if(e.matrix){this.__cameraWorld||(this.__cameraWorld={});const t=this.__cameraWorld,n=this.__world;return PA(n,e.matrix,t,void 0,n),Ag(this.__layout.renderBounds,t,t),Tg(t,"half",n.half),Tg(t,"ignorePixelSnap",n.ignorePixelSnap),t}return this.__world}getClampRenderScale(){let{scaleX:e}=this.__nowWorld||this.__world;return e<0&&(e=-e),e>1?e:1}getRenderScaleData(e,t,n=!0){return LA(Fi.patternLocked?this.__world:this.__nowWorld||this.__world,t,n,e)}getTransform(e){return this.__layout.getTransform(e||"local")}getBounds(e,t){return this.__layout.getBounds(e,t)}getLayoutBounds(e,t,n){return this.__layout.getLayoutBounds(e,t,n)}getLayoutPoints(e,t){return this.__layout.getLayoutPoints(e,t)}getWorldBounds(e,t,n){const i=t?VA(this,t):this.worldTransform,s=n?e:{};return Ag(e,i,s),s}worldToLocal(e,t,n,i){this.parent?this.parent.worldToInner(e,t,n,i):t&&Rg(t,e)}localToWorld(e,t,n,i){this.parent?this.parent.innerToWorld(e,t,n,i):t&&Rg(t,e)}worldToInner(e,t,n,i){i&&(i.innerToWorld(e,t,n),e=t||e),RA(this.worldTransform,e,t,n)}innerToWorld(e,t,n,i){CA(this.worldTransform,e,t,n),i&&i.worldToInner(t||e,null,n)}getBoxPoint(e,t,n,i){const s=this.getInnerPoint(e,t,n,i);return n?s:this.getBoxPointByInner(s,null,null,!0)}getBoxPointByInner(e,t,n,i){const s=i?e:Object.assign({},e),{x:r,y:o}=this.boxBounds;return Cg(s,-r,-o),s}getInnerPoint(e,t,n,i){const s=i?e:{};return this.worldToInner(e,s,n,t),s}getInnerPointByBox(e,t,n,i){const s=i?e:Object.assign({},e),{x:r,y:o}=this.boxBounds;return Cg(s,r,o),s}getInnerPointByLocal(e,t,n,i){return this.getInnerPoint(e,this.parent,n,i)}getLocalPoint(e,t,n,i){const s=i?e:{};return this.worldToLocal(e,s,n,t),s}getLocalPointByInner(e,t,n,i){return this.getWorldPoint(e,this.parent,n,i)}getPagePoint(e,t,n,i){return(this.leafer?this.leafer.zoomLayer:this).getInnerPoint(e,t,n,i)}getWorldPoint(e,t,n,i){const s=i?e:{};return this.innerToWorld(e,s,n,t),s}getWorldPointByBox(e,t,n,i){return this.getWorldPoint(this.getInnerPointByBox(e,null,null,i),t,n,!0)}getWorldPointByLocal(e,t,n,i){const s=i?e:{};return this.localToWorld(e,s,n,t),s}getWorldPointByPage(e,t,n,i){return(this.leafer?this.leafer.zoomLayer:this).getWorldPoint(e,t,n,i)}setTransform(e,t,n){zA(this,e,t,n)}transform(e,t,n){Lg(this,e,t,n)}move(e,t,n){DA(this,e,t,n)}moveInner(e,t,n){Pg(this,e,t,!0,n)}scaleOf(e,t,n,i,s){IA(this,Xu(this,e),t,n,i,s)}rotateOf(e,t,n){OA(this,Xu(this,e),t,n)}skewOf(e,t,n,i,s){UA(this,Xu(this,e),t,n,i,s)}transformWorld(e,t,n){kA(this,e,t,n)}moveWorld(e,t,n){Pg(this,e,t,!1,n)}scaleOfWorld(e,t,n,i,s){NA(this,e,t,n,i,s)}rotateOfWorld(e,t){FA(this,e,t)}skewOfWorld(e,t,n,i,s){BA(this,e,t,n,i,s)}flip(e,t){Lg(this,HA(this,e),!1,t)}scaleResize(e,t=e,n){this.scaleX*=e,this.scaleY*=t}__scaleResize(e,t){}resizeWidth(e){}resizeHeight(e){}hit(e,t){return!0}__hitWorld(e,t){return!0}__hit(e,t){return!0}__hitFill(e){return!0}__hitStroke(e,t){return!0}__hitPixel(e){return!0}__drawHitPath(e){}__updateHitCanvas(){}__render(e,t){}__drawFast(e,t){}__draw(e,t,n){}__clip(e,t){}__renderShape(e,t){}__drawShape(e,t){}__updateWorldOpacity(){}__updateChange(){}__drawPath(e){}__drawRenderPath(e){}__updatePath(){}__updateRenderPath(e){}getMotionPathData(){return Kn.need("path")}getMotionPoint(e){return Kn.need("path")}getMotionTotal(){return 0}__updateMotionPath(){}__runAnimation(e,t){}__updateSortChildren(){}add(e,t){}remove(e,t){this.parent&&this.parent.remove(this,t)}dropTo(e,t,n){GA(this,e,t,n)}on(e,t,n){}off(e,t,n){}on_(e,t,n,i){}off_(e){}once(e,t,n,i){}emit(e,t,n){}emitEvent(e,t){}hasEvent(e,t){return!1}static changeAttr(e,t,n){n?this.addAttr(e,t,n):by(this.prototype,e,t)}static addAttr(e,t,n,i){n||(n=pe),n(t,i)(this.prototype,e)}__emitLifeEvent(e){this.hasEvent(e)&&this.emitEvent(new cn(e,this,this.parent))}destroy(){this.destroyed||(this.parent&&this.remove(),this.children&&this.clear(),this.__emitLifeEvent(cn.DESTROY),this.__.destroy(),this.__layout.destroy(),this.destroyEventer(),this.destroyed=!0)}};ha=zt([Ci(fA),Ci(xA),Ci(MA),Ci(uA),Ci(bA)],ha);const{setListWithFn:$u}=Bt,{sort:WA}=Fl,{localBoxBounds:XA,localStrokeBounds:$A,localRenderBounds:YA,maskLocalBoxBounds:jA,maskLocalStrokeBounds:qA,maskLocalRenderBounds:KA}=Yh,ZA=new We("Branch");let Mf=class extends ha{__updateStrokeSpread(){const{children:e}=this;for(let t=0,n=e.length;t<n;t++)if(e[t].__layout.strokeSpread)return 1;return 0}__updateRenderSpread(){let e;const{children:t}=this;for(let n=0,i=t.length;n<i;n++)if(e=t[n].__layout,e.renderSpread||e.localOuterBounds)return 1;return 0}__updateBoxBounds(e,t){$u(t||this.__layout.boxBounds,this.children,this.__hasMask?jA:XA)}__updateStrokeBounds(e){$u(e||this.__layout.strokeBounds,this.children,this.__hasMask?qA:$A)}__updateRenderBounds(e){$u(e||this.__layout.renderBounds,this.children,this.__hasMask?KA:YA)}__updateSortChildren(){let e;const{children:t}=this;if(t.length>1){for(let n=0,i=t.length;n<i;n++)t[n].__tempNumber=n,t[n].__.zIndex&&(e=!0);t.sort(WA),this.__layout.affectChildrenSort=e}}add(e,t){if(e===this||e.destroyed)return ZA.warn("add self or destroyed");const n=Qt(t);if(!e.__){if(hn(e))return e.forEach(s=>{this.add(s,t),n||t++});if(!(e=Nl.get(e.tag,e)))return}e.parent&&e.parent.remove(e),e.parent=this,n?this.children.push(e):this.children.splice(t,0,e),e.isBranch&&(this.__.__childBranchNumber=(this.__.__childBranchNumber||0)+1);const i=e.__layout;i.boxChanged||i.boxChange(),i.matrixChanged||i.matrixChange(),e.__bubbleMap&&e.__emitLifeEvent(cn.ADD),this.leafer&&(e.__bindLeafer(this.leafer),this.leafer.created&&this.__emitChildEvent(cn.ADD,e)),this.__layout.affectChildrenSort&&this.__layout.childrenSortChange()}addMany(...e){this.add(e)}remove(e,t){e?e.__?e.animationOut?e.__runAnimation("out",()=>this.__remove(e,t)):this.__remove(e,t):this.find(e).forEach(n=>this.remove(n,t)):Qt(e)&&super.remove(null,t)}removeAll(e){const{children:t}=this;t.length&&(this.children=[],this.__preRemove(),this.__.__childBranchNumber=0,t.forEach(n=>{this.__realRemoveChild(n),e&&n.destroy()}))}clear(){this.removeAll(!0)}__remove(e,t){const n=this.children.indexOf(e);n>-1&&(this.children.splice(n,1),e.isBranch&&(this.__.__childBranchNumber=(this.__.__childBranchNumber||1)-1),this.__preRemove(),this.__realRemoveChild(e),t&&e.destroy())}__preRemove(){this.__hasMask&&this.__updateMask(),this.__hasEraser&&this.__updateEraser(),this.__layout.boxChange(),this.__layout.affectChildrenSort&&this.__layout.childrenSortChange()}__realRemoveChild(e){e.__emitLifeEvent(cn.REMOVE),e.parent=null,this.leafer&&(e.__bindLeafer(null),this.leafer.created&&(this.__emitChildEvent(cn.REMOVE,e),this.leafer.hitCanvasManager&&this.leafer.hitCanvasManager.clear()))}__emitChildEvent(e,t){const n=new cn(e,t,this);this.hasEvent(e)&&!this.isLeafer&&this.emitEvent(n),this.leafer.emitEvent(n)}};Mf=zt([Ci(wA)],Mf);class je{get length(){return this.list.length}constructor(t){this.reset(),t&&(hn(t)?this.addList(t):this.add(t))}has(t){return t&&!Qt(this.keys[t.innerId])}indexAt(t){return this.list[t]}indexOf(t){const n=this.keys[t.innerId];return Qt(n)?-1:n}add(t){const{list:n,keys:i}=this;Qt(i[t.innerId])&&(n.push(t),i[t.innerId]=n.length-1)}addAt(t,n=0){const{keys:i}=this;if(Qt(i[t.innerId])){const{list:s}=this;for(let r=n,o=s.length;r<o;r++)i[s[r].innerId]++;n===0?s.unshift(t):(n>s.length&&(n=s.length),s.splice(n,0,t)),i[t.innerId]=n}}addList(t){for(let n=0;n<t.length;n++)this.add(t[n])}remove(t){const{list:n}=this;let i;for(let s=0,r=n.length;s<r;s++)Qt(i)?n[s].innerId===t.innerId&&(i=s,delete this.keys[t.innerId]):this.keys[n[s].innerId]=s-1;Qt(i)||n.splice(i,1)}sort(t){const{list:n}=this;t?n.sort((i,s)=>s.__level-i.__level):n.sort((i,s)=>i.__level-s.__level)}forEach(t){this.list.forEach(t)}clone(){const t=new je;return t.list=[...this.list],t.keys=Object.assign({},this.keys),t}update(){this.keys={};const{list:t,keys:n}=this;for(let i=0,s=t.length;i<s;i++)n[t[i].innerId]=i}reset(){this.list=[],this.keys={}}destroy(){this.reset()}}class JA{get length(){return this._length}constructor(t){this._length=0,this.reset(),t&&(hn(t)?this.addList(t):this.add(t))}has(t){return!Qt(this.keys[t.innerId])}without(t){return Qt(this.keys[t.innerId])}sort(t){const{levels:n}=this;t?n.sort((i,s)=>s-i):n.sort((i,s)=>i-s)}addList(t){t.forEach(n=>{this.add(n)})}add(t){const{keys:n,levelMap:i}=this;n[t.innerId]||(n[t.innerId]=1,i[t.__level]?i[t.__level].push(t):(i[t.__level]=[t],this.levels.push(t.__level)),this._length++)}forEach(t){let n;this.levels.forEach(i=>{n=this.levelMap[i];for(let s=0,r=n.length;s<r;s++)t(n[s])})}reset(){this.levelMap={},this.keys={},this.levels=[],this._length=0}destroy(){this.levelMap=null}}function G(e,t,n,i){var s,r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}function bo(e){return rn(e,t=>({set(n){this.__setAttr(t,n),n&&(this.__.__useEffect=!0);const i=this.__layout;i.renderChanged||i.renderChange(),i.surfaceChange()}}))}function Da(e){return rn(e,t=>({set(n){this.__setAttr(t,n),this.__layout.boxChanged||this.__layout.boxChange(),this.__updateSize()}}))}function QA(){return(e,t)=>{const n="_"+t;_a(e,t,{set(i){this.isLeafer&&(this[n]=i)},get(){return this.isApp?this.tree.zoomLayer:this.isLeafer?this[n]||this:this.leafer&&this.leafer.zoomLayer}})}}const wy={},Zn={hasTransparent:function(e){if(!e||e.length===7||e.length===4)return!1;if(e==="transparent")return!0;const t=e[0];if(t==="#")switch(e.length){case 5:return e[4]!=="f"&&e[4]!=="F";case 9:return e[7]!=="f"&&e[7]!=="F"||e[8]!=="f"&&e[8]!=="F"}else if((t==="r"||t==="h")&&e[3]==="a"){const n=e.lastIndexOf(",");if(n>-1)return parseFloat(e.slice(n+1))<1}return!1}},Dg=oy,Ig={},me={},ke={},ah={},vr={},Ty={apply(){Kn.need("filter")}},t1={},Og={setStyleName:()=>Kn.need("state"),set:()=>Kn.need("state")},{parse:e1,objectToCanvasData:n1}=so,{stintSet:Eo}=De,{hasTransparent:Ug}=Zn,Ng={originPaint:{}},Fg=We.get("UIData");let qs=class extends ey{get scale(){const{scaleX:t,scaleY:n}=this;return t!==n?{x:t,y:n}:t}get __strokeWidth(){return this.__getRealStrokeWidth()}get __maxStrokeWidth(){const t=this,n=t.__hasStrokeSides||t.strokeWidth;return t.__hasMultiStrokeStyle?Math.max(t.__hasMultiStrokeStyle,n):n}get __hasMultiPaint(){const t=this;return t.fill&&this.__useStroke||t.__isFills&&t.fill.length>1||t.__isStrokes&&t.stroke.length>1||t.__useEffect}get __clipAfterFill(){const t=this;return t.cornerRadius||t.innerShadow||t.__pathInputed}get __hasSurface(){return this.fill||this.stroke}get __autoWidth(){return this._width==null}get __autoHeight(){return this._height==null}get __autoSide(){return this._width==null||this._height==null}get __autoSize(){return this._width==null&&this._height==null}setVisible(t){this._visible=t;const{leafer:n}=this.__leaf;n&&(n.watcher.hasVisible=!0)}setWidth(t){t<0?(this._width=-t,this.__leaf.scaleX*=-1,Fg.warn("width < 0, instead -scaleX ",this)):this._width=t}setHeight(t){t<0?(this._height=-t,this.__leaf.scaleY*=-1,Fg.warn("height < 0, instead -scaleY",this)):this._height=t}setFill(t){this.__naturalWidth&&this.__removeNaturalSize(),en(t)||!t?(Eo(this,"__isTransparentFill",Ug(t)),this.__isFills&&this.__removePaint("fill",!0),this._fill=t):He(t)&&this.__setPaint("fill",t)}setStroke(t){en(t)||!t?(Eo(this,"__isTransparentStroke",Ug(t)),this.__isStrokes&&this.__removePaint("stroke",!0),this._stroke=t):He(t)&&this.__setPaint("stroke",t)}setPath(t){const n=en(t);n||t&&He(t[0])?(this.__setInput("path",t),this._path=n?e1(t,this.__useArrow):n1(t)):(this.__input&&this.__removeInput("path"),this._path=t)}setShadow(t){Yu(this,"shadow",t)}setInnerShadow(t){Yu(this,"innerShadow",t)}setFilter(t){Yu(this,"filter",t)}__computePaint(){const{fill:t,stroke:n}=this.__input;t&&me.compute("fill",this.__leaf),n&&me.compute("stroke",this.__leaf),this.__needComputePaint=void 0}__getRealStrokeWidth(t){let{strokeWidth:n,strokeScaleFixed:i}=this;if(t&&(t.strokeWidth&&(n=t.strokeWidth),Qt(t.strokeScaleFixed)||(i=t.strokeScaleFixed)),i){const{scaleX:s}=this.__leaf.getRenderScaleData(!0,i,!1);if(s!==1)return n*s}return n}__checkComplex(){const t=this;Eo(t,"__complex",t.__isFills||t.__isStrokes||t.cornerRadius||t.__useEffect)}__setPaint(t,n){this.__setInput(t,n);const i=this.__leaf.__layout;i.boxChanged||i.boxChange(),hn(n)&&!n.length?this.__removePaint(t):t==="fill"?(this.__isFills=!0,this._fill||(this._fill=Ng)):(this.__isStrokes=!0,this._stroke||(this._stroke=Ng))}__removePaint(t,n){n&&this.__removeInput(t),ke.recycleImage(t,this),t==="fill"?(Eo(this,"__isAlphaPixelFill",void 0),this._fill=this.__isFills=void 0):(Eo(this,"__isAlphaPixelStroke",void 0),Eo(this,"__hasMultiStrokeStyle",void 0),this._stroke=this.__isStrokes=void 0)}};function Yu(e,t,n){e.__setInput(t,n),hn(n)?(n.some(i=>i.visible===!1)&&(n=n.filter(i=>i.visible!==!1)),n.length||(n=void 0)):n=n&&n.visible!==!1?[n]:void 0,e["_"+t]=n}let jh=class extends qs{},Ay=class extends jh{get __boxStroke(){return!this.__pathInputed}get __drawAfterFill(){return this.__single||this.__clipAfterFill}get __clipAfterFill(){const t=this;return t.overflow!=="show"&&t.__leaf.children.length&&(t.__leaf.isOverflow||super.__clipAfterFill)}},i1=class extends jh{__getInputData(t,n){const i=super.__getInputData(t,n);return Ai.forEach(s=>delete i[s]),i}},s1=class extends Ay{},r1=class extends qs{get __usePathBox(){return this.points||this.__pathInputed}},Qp=class extends qs{get __boxStroke(){return!this.__pathInputed}},o1=class extends qs{get __boxStroke(){return!this.__pathInputed}},a1=class extends qs{get __usePathBox(){return this.points||this.__pathInputed}},l1=class extends qs{get __boxStroke(){return!this.__pathInputed}},c1=class extends qs{get __pathInputed(){return 2}},h1=class extends jh{};const u1={thin:100,"extra-light":200,light:300,normal:400,medium:500,"semi-bold":600,bold:700,"extra-bold":800,black:900};let d1=class extends qs{get __useNaturalRatio(){return!1}setFontWeight(t){en(t)?(this.__setInput("fontWeight",t),t=u1[t]||400):this.__input&&this.__removeInput("fontWeight"),this._fontWeight=t}setBoxStyle(t){let n=this.__leaf,i=n.__box;if(t){const{boxStyle:s}=this;if(i)for(let a in s)i[a]=void 0;else i=n.__box=Nl.get("Rect",0);const r=n.__layout,o=i.__layout;s||(i.parent=n,i.__world=n.__world,o.boxBounds=r.boxBounds),i.set(t),o.strokeChanged&&r.strokeChange()}else i&&(n.__box=i.parent=null,i.destroy());this._boxStyle=t}__getInputData(t,n){const i=super.__getInputData(t,n);return i.textEditing&&delete i.textEditing,i}},f1=class extends Qp{get __urlType(){return"image"}setUrl(t){this.__setImageFill(t),this._url=t}__setImageFill(t){this.fill=t?{type:this.__urlType,mode:"stretch",url:t}:void 0}__getData(){const t=super.__getData();return t.url&&delete t.fill,t}__getInputData(t,n){const i=super.__getInputData(t,n);return i.url&&delete i.fill,i}},p1=class extends Qp{get __isCanvas(){return!0}get __drawAfterFill(){return!0}__getInputData(t,n){const i=super.__getInputData(t,n);return i.url=this.__leaf.canvas.toDataURL("image/png"),i}};const{max:Ia,add:ju}=Ul,m1={__updateStrokeSpread(){let e=0,t=0;const n=this.__,{strokeAlign:i,__maxStrokeWidth:s}=n,r=this.__box;if((n.stroke||n.hitStroke==="all")&&s&&i!=="inside"&&(t=e=i==="center"?s/2:s,!n.__boxStroke||n.__useArrow)){const o=n.__isLinePath?0:(n.strokeJoin==="miter"?10:1)*e,a=n.strokeCap==="none"?0:s;e+=Math.max(o,a)}return n.__useArrow&&(e+=5*s),r&&(e=Ia(e,r.__layout.strokeSpread=r.__updateStrokeSpread()),t=Math.max(t,r.__layout.strokeBoxSpread)),this.__layout.strokeBoxSpread=t,e},__updateRenderSpread(){let e=0;const{shadow:t,innerShadow:n,blur:i,backgroundBlur:s,filter:r,renderSpread:o}=this.__,{strokeSpread:a}=this.__layout,l=this.__box;t&&(e=vr.getShadowRenderSpread(this,t)),i&&(e=Ia(e,i)),r&&(e=ju(e,Ty.getSpread(r))),o&&(e=ju(e,o)),a&&(e=ju(e,a));let c=e;return n&&(c=Ia(c,vr.getInnerShadowSpread(this,n))),s&&(c=Ia(c,s)),this.__layout.renderShapeSpread=c,l?Ia(l.__updateRenderSpread(),e):e}},{stintSet:qu}=De,_1={__updateChange(){const e=this.__;if(e.__useStroke){const t=e.__useStroke=!(!e.stroke||!e.strokeWidth);qu(this.__world,"half",t&&e.strokeAlign==="center"&&e.strokeWidth%2),qu(e,"__fillAfterStroke",t&&e.strokeAlign==="outside"&&e.fill&&!e.__isTransparentFill)}if(e.__useEffect){const{shadow:t,fill:n,stroke:i}=e,s=e.innerShadow||e.blur||e.backgroundBlur||e.filter;qu(e,"__isFastShadow",t&&!s&&t.length<2&&!t[0].spread&&!vr.isTransformShadow(t[0])&&n&&!e.__isTransparentFill&&!(hn(n)&&n.length>1)&&(this.useFastShadow||!i||i&&e.strokeAlign==="inside")),e.__useEffect=!(!t&&!s)}e.__checkSingle(),e.__checkComplex()},__drawFast(e,t){Bg(this,e,t)},__draw(e,t,n){const i=this.__;if(i.__complex){i.__needComputePaint&&i.__computePaint();const{fill:s,stroke:r,__drawAfterFill:o,__fillAfterStroke:a,__isFastShadow:l}=i;if(this.__drawRenderPath(e),i.__useEffect&&!l){const c=me.shape(this,e,t);this.__nowWorld=this.__getNowWorld(t);const{shadow:h,innerShadow:d,filter:f}=i;h&&vr.shadow(this,e,c),a&&(i.__isStrokes?me.strokes(r,this,e,t):me.stroke(r,this,e,t)),s&&(i.__isFills?me.fills(s,this,e,t):me.fill(s,this,e,t)),o&&this.__drawAfterFill(e,t),d&&vr.innerShadow(this,e,c),r&&!a&&(i.__isStrokes?me.strokes(r,this,e,t):me.stroke(r,this,e,t)),f&&Ty.apply(f,this,this.__nowWorld,e,n,c),c.worldCanvas&&c.worldCanvas.recycle(),c.canvas.recycle()}else{if(a&&(i.__isStrokes?me.strokes(r,this,e,t):me.stroke(r,this,e,t)),l){const c=i.shadow[0],{scaleX:h,scaleY:d}=this.getRenderScaleData(!0,c.scaleFixed);e.save(),e.setWorldShadow(c.x*h,c.y*d,c.blur*h,Zn.string(c.color))}s&&(i.__isFills?me.fills(s,this,e,t):me.fill(s,this,e,t)),l&&e.restore(),o&&this.__drawAfterFill(e,t),r&&!a&&(i.__isStrokes?me.strokes(r,this,e,t):me.stroke(r,this,e,t))}}else i.__pathForRender?Bg(this,e,t):this.__drawFast(e,t)},__drawShape(e,t){this.__drawRenderPath(e);const n=this.__,{fill:i,stroke:s}=n;i&&!t.ignoreFill&&(n.__isAlphaPixelFill?me.fills(i,this,e,t):me.fill("#000000",this,e,t)),n.__isCanvas&&this.__drawAfterFill(e,t),s&&!t.ignoreStroke&&(n.__isAlphaPixelStroke?me.strokes(s,this,e,t):me.stroke("#000000",this,e,t))},__drawAfterFill(e,t){this.__.__clipAfterFill?(e.save(),e.clipUI(this),this.__drawContent(e,t),e.restore()):this.__drawContent(e,t)}};function Bg(e,t,n){const{fill:i,stroke:s,__drawAfterFill:r,__fillAfterStroke:o}=e.__;e.__drawRenderPath(t),o&&me.stroke(s,e,t,n),i&&me.fill(i,e,t,n),r&&e.__drawAfterFill(t,n),s&&!o&&me.stroke(s,e,t,n)}const g1={__drawFast(e,t){let{x:n,y:i,width:s,height:r}=this.__layout.boxBounds;const{fill:o,stroke:a,__drawAfterFill:l}=this.__;if(o&&(e.fillStyle=o,e.fillRect(n,i,s,r)),l&&this.__drawAfterFill(e,t),a){const{strokeAlign:c,__strokeWidth:h}=this.__;if(!h)return;e.setStroke(a,h,this.__);const d=h/2;switch(c){case"center":e.strokeRect(0,0,s,r);break;case"inside":s-=h,r-=h,s<0||r<0?(e.save(),this.__clip(e,t),e.strokeRect(n+d,i+d,s,r),e.restore()):e.strokeRect(n+d,i+d,s,r);break;case"outside":e.strokeRect(n-d,i-d,s+h,r+h)}}}};var bf;let Et=bf=class extends ha{get app(){return this.leafer&&this.leafer.app}get isFrame(){return!1}set strokeWidthFixed(e){this.strokeScaleFixed=e}get strokeWidthFixed(){return this.strokeScaleFixed}set scale(e){wn.assignScale(this,e)}get scale(){return this.__.scale}get isAutoWidth(){const e=this.__;return e.__autoWidth||e.autoWidth}get isAutoHeight(){const e=this.__;return e.__autoHeight||e.autoHeight}get pen(){const{path:e}=this.__;return Ra.set(this.path=e||[]),e||this.__drawPathByBox(Ra),Ra}reset(e){}set(e,t){e&&Object.assign(this,e)}get(e){return en(e)?this.__.__getInput(e):this.__.__getInputData(e)}createProxyData(){}clearProxyData(){}find(e,t){return Kn.need("find")}findTag(e){return this.find({tag:e})}findOne(e,t){return Kn.need("find")}findId(e){return this.findOne({id:e})}getPath(e,t){this.__layout.update();let n=t?this.__.__pathForRender:this.__.path;return n||(Ra.set(n=[]),this.__drawPathByBox(Ra,!t)),e?so.toCanvasData(n,!0):n}getPathString(e,t,n){return so.stringify(this.getPath(e,t),n)}asPath(e,t){this.path=this.getPath(e,t)}load(){this.__.__computePaint()}__onUpdateSize(){if(this.__.__input){const e=this.__;!e.lazy||this.__inLazyBounds||t1.running?e.__computePaint():e.__needComputePaint=!0}}__updateRenderPath(e){const t=this.__;t.path?(t.__pathForRender=t.cornerRadius||t.path.radius?mT.smooth(t.path,t.cornerRadius,t.cornerSmoothing):t.path,t.__useArrow&&Ig.addArrows(this,e)):t.__pathForRender&&(t.__pathForRender=void 0)}__drawRenderPath(e){const t=this.__;e.beginPath(),t.__useArrow&&Ig.updateArrow(this),this.__drawPathByData(e,t.__pathForRender)}__drawPath(e){e.beginPath(),this.__drawPathByData(e,this.__.path,!0)}__drawPathByData(e,t,n){t?qw.drawPathByData(e,t):this.__drawPathByBox(e,n)}__drawPathByBox(e,t){const{x:n,y:i,width:s,height:r}=this.__layout.boxBounds;if(this.__.cornerRadius&&!t){const{cornerRadius:o}=this.__;e.roundRect(n,i,s,r,Ke(o)?[o]:o)}else e.rect(n,i,s,r);e.closePath()}drawImagePlaceholder(e,t,n){me.fill(this.__.placeholderColor,this,t,n)}animate(e,t,n,i){return this.set(e),Kn.need("animate")}killAnimate(e,t){}export(e,t){return Kn.need("export")}syncExport(e,t){return Kn.need("export")}clone(e){const t=De.clone(this.toJSON());return e&&Object.assign(t,e),bf.one(t)}static one(e,t,n,i,s){return Nl.get(e.tag||this.prototype.__tag,e,t,n,i,s)}static registerUI(){On()(this)}static registerData(e){In(e)(this.prototype)}static setEditConfig(e){}static setEditOuter(e){}static setEditInner(e){}destroy(){this.__.__willDestroy=!0,this.fill=this.stroke=null,this.__animate&&this.killAnimate(),super.destroy()}};G([In(qs)],Et.prototype,"__",void 0),G([QA()],Et.prototype,"zoomLayer",void 0),G([jn("")],Et.prototype,"id",void 0),G([jn("")],Et.prototype,"name",void 0),G([jn("")],Et.prototype,"className",void 0),G([mr("pass-through")],Et.prototype,"blendMode",void 0),G([AT(1)],Et.prototype,"opacity",void 0),G([RT(!0)],Et.prototype,"visible",void 0),G([mr(!1)],Et.prototype,"locked",void 0),G([ag(!1)],Et.prototype,"dim",void 0),G([ag(!1)],Et.prototype,"dimskip",void 0),G([CT(0)],Et.prototype,"zIndex",void 0),G([PT(!1)],Et.prototype,"mask",void 0),G([LT(!1)],Et.prototype,"eraser",void 0),G([_c(0,!0)],Et.prototype,"x",void 0),G([_c(0,!0)],Et.prototype,"y",void 0),G([pe(100,!0)],Et.prototype,"width",void 0),G([pe(100,!0)],Et.prototype,"height",void 0),G([og(1,!0)],Et.prototype,"scaleX",void 0),G([og(1,!0)],Et.prototype,"scaleY",void 0),G([Nu(0,!0)],Et.prototype,"rotation",void 0),G([Nu(0,!0)],Et.prototype,"skewX",void 0),G([Nu(0,!0)],Et.prototype,"skewY",void 0),G([_c(0,!0)],Et.prototype,"offsetX",void 0),G([_c(0,!0)],Et.prototype,"offsetY",void 0),G([sg(0,!0)],Et.prototype,"scrollX",void 0),G([sg(0,!0)],Et.prototype,"scrollY",void 0),G([rg()],Et.prototype,"origin",void 0),G([rg()],Et.prototype,"around",void 0),G([jn(!1)],Et.prototype,"lazy",void 0),G([ET(1)],Et.prototype,"pixelRatio",void 0),G([Jp(0)],Et.prototype,"renderSpread",void 0),G([wT()],Et.prototype,"path",void 0),G([Mn()],Et.prototype,"windingRule",void 0),G([Mn(!0)],Et.prototype,"closed",void 0),G([pe(0)],Et.prototype,"padding",void 0),G([pe(!1)],Et.prototype,"lockRatio",void 0),G([pe()],Et.prototype,"widthRange",void 0),G([pe()],Et.prototype,"heightRange",void 0),G([jn(!1)],Et.prototype,"draggable",void 0),G([jn()],Et.prototype,"dragBounds",void 0),G([jn("auto")],Et.prototype,"dragBoundsType",void 0),G([jn(!1)],Et.prototype,"editable",void 0),G([Xr(!0)],Et.prototype,"hittable",void 0),G([Xr("path")],Et.prototype,"hitFill",void 0),G([Xi("path")],Et.prototype,"hitStroke",void 0),G([Xr(!1)],Et.prototype,"hitBox",void 0),G([Xr(!0)],Et.prototype,"hitChildren",void 0),G([Xr(!0)],Et.prototype,"hitSelf",void 0),G([Xr()],Et.prototype,"hitRadius",void 0),G([DT("")],Et.prototype,"cursor",void 0),G([mr()],Et.prototype,"fill",void 0),G([Xi(void 0,!0)],Et.prototype,"stroke",void 0),G([Xi("inside")],Et.prototype,"strokeAlign",void 0),G([Xi(1,!0)],Et.prototype,"strokeWidth",void 0),G([Xi(!1)],Et.prototype,"strokeScaleFixed",void 0),G([Xi("none")],Et.prototype,"strokeCap",void 0),G([Xi("miter")],Et.prototype,"strokeJoin",void 0),G([Xi()],Et.prototype,"dashPattern",void 0),G([Xi(0)],Et.prototype,"dashOffset",void 0),G([Xi(10)],Et.prototype,"miterLimit",void 0),G([Mn(0)],Et.prototype,"cornerRadius",void 0),G([Mn()],Et.prototype,"cornerSmoothing",void 0),G([bo()],Et.prototype,"shadow",void 0),G([bo()],Et.prototype,"innerShadow",void 0),G([bo()],Et.prototype,"blur",void 0),G([bo()],Et.prototype,"backgroundBlur",void 0),G([bo()],Et.prototype,"grayscale",void 0),G([bo()],Et.prototype,"filter",void 0),G([mr()],Et.prototype,"placeholderColor",void 0),G([jn(100)],Et.prototype,"placeholderDelay",void 0),G([jn({})],Et.prototype,"data",void 0),G([Cs(ha.prototype.reset)],Et.prototype,"reset",null),Et=bf=G([Ci(m1),Ci(_1),$h()],Et);let mi=class extends Et{get __tag(){return"Group"}get isBranch(){return!0}reset(t){this.__setBranch(),super.reset(t)}__setBranch(){this.children||(this.children=[])}set(t,n){if(t)if(t.children){const{children:i}=t;delete t.children,this.children?this.clear():this.__setBranch(),super.set(t,n),i.forEach(s=>this.add(s)),t.children=i}else super.set(t,n)}toJSON(t){const n=super.toJSON(t);if(!this.childlessJSON){const i=n.children=[];this.children.forEach(s=>s.skipJSON||i.push(s.toJSON(t)))}return n}pick(t,n){}addAt(t,n){this.add(t,n)}addAfter(t,n){this.add(t,this.children.indexOf(n)+1)}addBefore(t,n){this.add(t,this.children.indexOf(n))}add(t,n){}addMany(...t){}remove(t,n){}removeAll(t){}clear(){}};var lh;G([In(jh)],mi.prototype,"__",void 0),G([pe(0)],mi.prototype,"width",void 0),G([pe(0)],mi.prototype,"height",void 0),mi=G([Ci(Mf),On()],mi);const x1=We.get("Leafer");let hr=lh=class extends mi{get __tag(){return"Leafer"}get isApp(){return!1}get app(){return this.parent||this}get isLeafer(){return!0}get imageReady(){return this.viewReady&&dr.isComplete}get layoutLocked(){return!this.layouter.running}get view(){return this.canvas&&this.canvas.view}get FPS(){return this.renderer?this.renderer.FPS:60}get cursorPoint(){return this.interaction&&this.interaction.hoverData||{x:this.width/2,y:this.height/2}}get clientBounds(){return this.canvas&&this.canvas.getClientBounds(!0)||ny()}constructor(e,t){super(t),this.config={start:!0,hittable:!0,smooth:!0,lazySpeard:100},this.leafs=0,this.__eventIds=[],this.__controllers=[],this.__readyWait=[],this.__viewReadyWait=[],this.__viewCompletedWait=[],this.__nextRenderWait=[],this.userConfig=e,e&&(e.view||e.width)&&this.init(e),lh.list.add(this)}init(e,t){if(this.canvas)return;let n;const{config:i}=this;this.__setLeafer(this),t&&(this.parentApp=t,this.__bindApp(t),n=t.running),e&&(this.parent=t,this.initType(e.type),this.parent=void 0,De.assign(i,e));const s=this.canvas=Ze.canvas(i);this.__controllers.push(this.renderer=Ze.renderer(this,s,i),this.watcher=Ze.watcher(this,i),this.layouter=Ze.layouter(this,i)),this.isApp&&this.__setApp(),this.__checkAutoLayout(),t||(this.selector=Ze.selector(this),this.interaction=Ze.interaction(this,s,this.selector,i),this.interaction&&(this.__controllers.unshift(this.interaction),this.hitCanvasManager=Ze.hitCanvasManager()),this.canvasManager=new ly,n=i.start),this.hittable=i.hittable,this.fill=i.fill,this.canvasManager.add(s),this.__listenEvents(),n&&(this.__startTimer=setTimeout(this.start.bind(this))),La.run(this.__initWait),this.onInit()}onInit(){}initType(e){}set(e,t){this.waitInit(()=>{super.set(e,t)})}start(){clearTimeout(this.__startTimer),!this.running&&this.canvas&&(this.running=!0,this.ready?this.emitLeafer(Se.RESTART):this.emitLeafer(Se.START),this.__controllers.forEach(e=>e.start()),this.isApp||this.renderer.render())}stop(){clearTimeout(this.__startTimer),this.running&&this.canvas&&(this.__controllers.forEach(e=>e.stop()),this.running=!1,this.emitLeafer(Se.STOP))}unlockLayout(e=!0){this.layouter.start(),e&&this.updateLayout()}lockLayout(e=!0){e&&this.updateLayout(),this.layouter.stop()}resize(e){const t=De.copyAttrs({},e,Ai);Object.keys(t).forEach(n=>this[n]=t[n])}forceRender(e,t){const{renderer:n}=this;n&&(n.addBlock(e?new un(e):this.canvas.bounds),this.viewReady&&(t?n.render():n.update()))}requestRender(e=!1){this.renderer&&this.renderer.update(e)}updateCursor(e){const t=this.interaction;t&&(e?t.setCursor(e):t.updateCursor())}updateLazyBounds(){this.lazyBounds=this.canvas.bounds.clone().spread(this.config.lazySpeard)}__doResize(e){const{canvas:t}=this;if(!t||t.isSameSize(e))return;const n=De.copyAttrs({},this.canvas,Ai);t.resize(e),this.updateLazyBounds(),this.__onResize(new co(e,n))}__onResize(e){this.emitEvent(e),De.copyAttrs(this.__,e,Ai),setTimeout(()=>{this.canvasManager&&this.canvasManager.clearRecycled()},0)}__setApp(){}__bindApp(e){this.selector=e.selector,this.interaction=e.interaction,this.canvasManager=e.canvasManager,this.hitCanvasManager=e.hitCanvasManager}__setLeafer(e){this.leafer=e,this.__level=1}__checkAutoLayout(){const{config:e,parentApp:t}=this;t||(e.width&&e.height||(this.autoLayout=new _E(e)),this.canvas.startAutoLayout(this.autoLayout,this.__onResize.bind(this)))}__setAttr(e,t){return this.canvas&&(Ai.includes(e)?this.__changeCanvasSize(e,t):e==="fill"?this.__changeFill(t):e==="hittable"?this.parent||(this.canvas.hittable=t):e==="zIndex"?(this.canvas.zIndex=t,setTimeout(()=>this.parent&&this.parent.__updateSortChildren())):e==="mode"&&this.emit(Se.UPDATE_MODE,{mode:t})),super.__setAttr(e,t)}__getAttr(e){return this.canvas&&Ai.includes(e)?this.canvas[e]:super.__getAttr(e)}__changeCanvasSize(e,t){const{config:n,canvas:i}=this,s=De.copyAttrs({},i,Ai);s[e]=n[e]=t,n.width&&n.height?i.stopAutoLayout():this.__checkAutoLayout(),this.__doResize(s)}__changeFill(e){this.config.fill=e,this.canvas.allowBackgroundColor?this.canvas.backgroundColor=e:this.forceRender()}__onCreated(){this.created=!0}__onReady(){this.ready=!0,this.emitLeafer(Se.BEFORE_READY),this.emitLeafer(Se.READY),this.emitLeafer(Se.AFTER_READY),La.run(this.__readyWait)}__onViewReady(){this.viewReady||(this.viewReady=!0,this.emitLeafer(Se.VIEW_READY),La.run(this.__viewReadyWait))}__onLayoutEnd(){const{grow:e,width:t,height:n}=this.config;if(e){let{width:i,height:s,pixelRatio:r}=this;const o=e==="box"?this.worldBoxBounds:this.__world;t||(i=Math.max(1,o.x+o.width)),n||(s=Math.max(1,o.y+o.height)),this.__doResize({width:i,height:s,pixelRatio:r})}this.ready||this.__onReady()}__onNextRender(){if(this.viewReady){La.run(this.__nextRenderWait);const{imageReady:e}=this;e&&!this.viewCompleted&&this.__checkViewCompleted(),e||(this.viewCompleted=!1,this.requestRender())}else this.requestRender()}__checkViewCompleted(e=!0){this.nextRender(()=>{this.imageReady&&(e&&this.emitLeafer(Se.VIEW_COMPLETED),La.run(this.__viewCompletedWait),this.viewCompleted=!0)})}__onWatchData(){this.watcher.childrenChanged&&this.interaction&&this.nextRender(()=>this.interaction.updateCursor())}waitInit(e,t){t&&(e=e.bind(t)),this.__initWait||(this.__initWait=[]),this.canvas?e():this.__initWait.push(e)}waitReady(e,t){t&&(e=e.bind(t)),this.ready?e():this.__readyWait.push(e)}waitViewReady(e,t){t&&(e=e.bind(t)),this.viewReady?e():this.__viewReadyWait.push(e)}waitViewCompleted(e,t){t&&(e=e.bind(t)),this.__viewCompletedWait.push(e),this.viewCompleted?this.__checkViewCompleted(!1):this.running||this.start()}nextRender(e,t,n){t&&(e=e.bind(t));const i=this.__nextRenderWait;if(n){for(let s=0;s<i.length;s++)if(i[s]===e){i.splice(s,1);break}}else i.push(e);this.requestRender()}zoom(e,t,n,i){return Kn.need("view")}getValidMove(e,t,n){return{x:e,y:t}}getValidScale(e){return e}getWorldPointByClient(e,t){return this.interaction&&this.interaction.getLocal(e,t)}getPagePointByClient(e,t){return this.getPagePoint(this.getWorldPointByClient(e,t))}getClientPointByWorld(e){const{x:t,y:n}=this.clientBounds;return{x:t+e.x,y:n+e.y}}updateClientBounds(){this.canvas&&this.canvas.updateClientBounds()}receiveEvent(e){}emitLeafer(e){this.emitEvent(new Se(e,this))}__listenEvents(){const e=Li.start("FirstCreate "+this.innerName);this.once([[Se.START,()=>Li.end(e)],[Ge.START,this.updateLazyBounds,this],[Re.START,this.__onCreated,this],[Re.END,this.__onViewReady,this]]),this.__eventIds.push(this.on_([[xr.DATA,this.__onWatchData,this],[Ge.END,this.__onLayoutEnd,this],[Re.NEXT,this.__onNextRender,this]]))}__removeListenEvents(){this.off_(this.__eventIds)}destroy(e){const t=()=>{if(!this.destroyed){lh.list.remove(this);try{this.stop(),this.emitLeafer(Se.END),this.__removeListenEvents(),this.__controllers.forEach(n=>!(this.parent&&n===this.interaction)&&n.destroy()),this.__controllers.length=0,this.parent||(this.selector&&this.selector.destroy(),this.hitCanvasManager&&this.hitCanvasManager.destroy(),this.canvasManager&&this.canvasManager.destroy()),this.canvas&&this.canvas.destroy(),this.config.view=this.parentApp=null,this.userConfig&&(this.userConfig.view=null),super.destroy(),setTimeout(()=>{Fi.clearRecycled()},100)}catch(n){x1.error(n)}}};e?t():setTimeout(t)}};hr.list=new je,G([In(i1)],hr.prototype,"__",void 0),G([pe()],hr.prototype,"pixelRatio",void 0),G([jn("normal")],hr.prototype,"mode",void 0),hr=lh=G([On()],hr);let eo=class extends Et{get __tag(){return"Rect"}};G([In(Qp)],eo.prototype,"__",void 0),eo=G([Ci(g1),$h(),On()],eo);const{add:kg,includes:v1,scroll:y1}=Bt,Ur=eo.prototype,S1=mi.prototype;let yn=class extends mi{get __tag(){return"Box"}get isBranchLeaf(){return!0}get __useSelfBox(){return this.pathInputed}constructor(t){super(t),this.__layout.renderChanged||this.__layout.renderChange()}__updateStrokeSpread(){return 0}__updateRectRenderSpread(){return 0}__updateRenderSpread(){return this.__updateRectRenderSpread()||-1}__updateRectBoxBounds(){}__updateBoxBounds(t){if(this.children.length&&!this.__useSelfBox){const n=this.__;if(n.__autoSide){n.__hasSurface&&this.__extraUpdate(),super.__updateBoxBounds();const{boxBounds:i}=this.__layout;n.__autoSize||(n.__autoWidth?(i.width+=i.x,i.x=0,i.height=n.height,i.y=0):(i.height+=i.y,i.y=0,i.width=n.width,i.x=0)),this.__updateNaturalSize()}else this.__updateRectBoxBounds()}else this.__updateRectBoxBounds()}__updateStrokeBounds(){}__updateRenderBounds(){let t,n;if(this.children.length){const i=this.__,s=this.__layout,{renderBounds:r,boxBounds:o}=s,{overflow:a}=i,l=s.childrenRenderBounds||(s.childrenRenderBounds=ny());super.__updateRenderBounds(l),(n=a&&a.includes("scroll"))&&(kg(l,o),y1(l,i)),this.__updateRectRenderBounds(),t=!v1(o,l),t&&a==="show"&&kg(r,l)}else this.__updateRectRenderBounds();De.stintSet(this,"isOverflow",t),this.__checkScroll(n)}__updateRectRenderBounds(){}__checkScroll(t){}__updateRectChange(){}__updateChange(){super.__updateChange(),this.__updateRectChange()}__renderRect(t,n){}__renderGroup(t,n){}__render(t,n){this.__.__drawAfterFill?this.__renderRect(t,n):(this.__renderRect(t,n),this.children.length&&this.__renderGroup(t,n)),this.hasScroller&&this.scroller.__render(t,n)}__drawContent(t,n){this.__renderGroup(t,n),(this.__.__useStroke||this.__.__useEffect)&&(t.setWorld(this.__nowWorld),this.__drawRenderPath(t))}};G([In(Ay)],yn.prototype,"__",void 0),G([pe(100)],yn.prototype,"width",void 0),G([pe(100)],yn.prototype,"height",void 0),G([jn(!1)],yn.prototype,"resizeChildren",void 0),G([Jp("show")],yn.prototype,"overflow",void 0),G([Cs(Ur.__updateStrokeSpread)],yn.prototype,"__updateStrokeSpread",null),G([Cs(Ur.__updateRenderSpread)],yn.prototype,"__updateRectRenderSpread",null),G([Cs(Ur.__updateBoxBounds)],yn.prototype,"__updateRectBoxBounds",null),G([Cs(Ur.__updateStrokeBounds)],yn.prototype,"__updateStrokeBounds",null),G([Cs(Ur.__updateRenderBounds)],yn.prototype,"__updateRectRenderBounds",null),G([Cs(Ur.__updateChange)],yn.prototype,"__updateRectChange",null),G([Cs(Ur.__render)],yn.prototype,"__renderRect",null),G([Cs(S1.__render)],yn.prototype,"__renderGroup",null),yn=G([$h(),On()],yn);let Oa=class extends yn{get __tag(){return"Frame"}get isFrame(){return!0}};G([In(s1)],Oa.prototype,"__",void 0),G([mr("#FFFFFF")],Oa.prototype,"fill",void 0),G([Jp("hide")],Oa.prototype,"overflow",void 0),Oa=G([On()],Oa);const{moveTo:zg,closePath:M1,ellipse:wo}=lo;let Ri=class extends Et{get __tag(){return"Ellipse"}__updatePath(){const t=this.__,{width:n,height:i,innerRadius:s,startAngle:r,endAngle:o}=t,a=n/2,l=i/2,c=t.path=[];let h;s?r||o?(s<1?wo(c,a,l,a*s,l*s,0,r,o,!1):h=!0,wo(c,a,l,a,l,0,o,r,!0)):(s<1&&(wo(c,a,l,a*s,l*s),zg(c,n,l)),wo(c,a,l,a,l,0,360,0,!0)):r||o?(zg(c,a,l),wo(c,a,l,a,l,0,r,o,!1)):wo(c,a,l,a,l),h||M1(c),(Ot.ellipseToCurve||t.__useArrow||t.cornerRadius)&&(t.path=this.getPath(!0))}};G([In(o1)],Ri.prototype,"__",void 0),G([Mn(0)],Ri.prototype,"innerRadius",void 0),G([Mn(0)],Ri.prototype,"startAngle",void 0),G([Mn(0)],Ri.prototype,"endAngle",void 0),Ri=G([On()],Ri);const{sin:Hg,cos:Vg,PI:b1}=Math,{moveTo:Gg,lineTo:E1,closePath:w1,drawPoints:T1}=lo;let Nr=class extends Et{get __tag(){return"Polygon"}__updatePath(){const t=this.__,n=t.path=[];if(t.points)T1(n,t.points,t.curve,t.closed);else{const{width:i,height:s,sides:r,startAngle:o}=t,a=i/2,l=s/2;let c,h=0;o?(h=o*Me,Gg(n,a+a*Hg(h),l-l*Vg(h))):Gg(n,a,0);for(let d=1;d<r;d++)c=2*d*b1/r+h,E1(n,a+a*Hg(c),l-l*Vg(c));w1(n)}}};G([In(a1)],Nr.prototype,"__",void 0),G([Mn(3)],Nr.prototype,"sides",void 0),G([Mn(0)],Nr.prototype,"startAngle",void 0),G([Mn()],Nr.prototype,"points",void 0),G([Mn(0)],Nr.prototype,"curve",void 0),Nr=G([$h(),On()],Nr);const{sin:Wg,cos:Xg,PI:A1}=Math,{moveTo:$g,lineTo:R1,closePath:C1}=lo;let To=class extends Et{get __tag(){return"Star"}__updatePath(){const{width:t,height:n,corners:i,innerRadius:s,startAngle:r}=this.__,o=t/2,a=n/2,l=this.__.path=[];let c,h=0;r?(h=r*Me,$g(l,o+o*Wg(h),a-a*Xg(h))):$g(l,o,0);for(let d=1;d<2*i;d++)c=d*A1/i+h,R1(l,o+(d%2==0?o:o*s)*Wg(c),a-(d%2==0?a:a*s)*Xg(c));C1(l)}};G([In(l1)],To.prototype,"__",void 0),G([Mn(5)],To.prototype,"corners",void 0),G([Mn(.382)],To.prototype,"innerRadius",void 0),G([Mn(0)],To.prototype,"startAngle",void 0),To=G([On()],To);const{moveTo:P1,lineTo:L1,drawPoints:D1}=lo,{rotate:I1,getAngle:O1,getDistance:U1,defaultPoint:Yg}=ce;let bi=class extends Et{get __tag(){return"Line"}get toPoint(){const{width:t,rotation:n}=this.__,i=lE();return t&&(i.x=t),n&&I1(i,n),i}set toPoint(t){this.width=U1(Yg,t),this.rotation=O1(Yg,t),this.height&&(this.height=0)}__updatePath(){const t=this.__,n=t.path=[];t.points?D1(n,t.points,t.curve,t.closed):(P1(n,0,0),L1(n,this.width,0))}};G([In(r1)],bi.prototype,"__",void 0),G([Xh("center")],bi.prototype,"strokeAlign",void 0),G([pe(0)],bi.prototype,"height",void 0),G([Mn()],bi.prototype,"points",void 0),G([Mn(0)],bi.prototype,"curve",void 0),G([Mn(!1)],bi.prototype,"closed",void 0),bi=G([On()],bi);let vc=class extends eo{get __tag(){return"Image"}get ready(){const{image:t}=this;return t&&t.ready}get image(){const{fill:t}=this.__;return hn(t)&&t[0].image}};G([In(f1)],vc.prototype,"__",void 0),G([pe("")],vc.prototype,"url",void 0),vc=G([On()],vc);let xs=class extends eo{get __tag(){return"Canvas"}get context(){return this.canvas.context}get ready(){return!this.url}constructor(t){super(t),this.canvas=Ze.canvas(this.__),t&&t.url&&this.drawImage(t.url)}drawImage(t){new yy({url:t}).load(n=>{this.context.drawImage(n.view,0,0),this.url=void 0,this.paint(),this.emitEvent(new Bs(Bs.LOADED,{image:n}))})}draw(t,n,i,s){const r=new io(t.worldTransform).invert(),o=new io;n&&o.translate(n.x,n.y),i&&(Ke(i)?o.scale(i):o.scale(i.x,i.y)),s&&o.rotate(s),r.multiplyParent(o),t.__render(this.canvas,{matrix:r.withScale()}),this.paint()}paint(){this.forceRender()}__drawContent(t,n){const{width:i,height:s}=this.__,{view:r}=this.canvas;t.drawImage(r,0,0,r.width,r.height,0,0,i,s)}__updateSize(){const{canvas:t}=this;if(t){const{smooth:n,safeResize:i}=this.__;t.resize(this.__,i),t.smooth!==n&&(t.smooth=n)}}destroy(){this.canvas&&(this.canvas.destroy(),this.canvas=null),super.destroy()}};G([In(p1)],xs.prototype,"__",void 0),G([Da(100)],xs.prototype,"width",void 0),G([Da(100)],xs.prototype,"height",void 0),G([Da(1)],xs.prototype,"pixelRatio",void 0),G([Da(!0)],xs.prototype,"smooth",void 0),G([jn(!1)],xs.prototype,"safeResize",void 0),G([Da()],xs.prototype,"contextSettings",void 0),xs=G([On()],xs);const{copyAndSpread:N1,includes:F1,setList:B1}=Bt,{stintSet:Ku}=De;let ue=class extends Et{get __tag(){return"Text"}get textDrawData(){return this.updateLayout(),this.__.__textDrawData}__updateTextDrawData(){const t=this.__,{lineHeight:n,letterSpacing:i,fontFamily:s,fontSize:r,fontWeight:o,italic:a,textCase:l,textOverflow:c,padding:h,width:d,height:f}=t;t.__lineHeight=Dg.number(n,r),t.__letterSpacing=Dg.number(i,r),t.__baseLine=t.__lineHeight-(t.__lineHeight-.7*r)/2,t.__font=`${a?"italic ":""}${l==="small-caps"?"small-caps ":""}${o!=="normal"?o+" ":""}${r||12}px ${s||"caption"}`,Ku(t,"__padding",h&&wn.fourNumber(h)),Ku(t,"__clipText",c!=="show"&&!t.__autoSize),Ku(t,"__isCharMode",d||f||t.__letterSpacing||l!=="none"),t.__textDrawData=wy.getDrawData((t.__isPlacehold=t.placeholder&&t.text==="")?t.placeholder:t.text,this.__)}__updateBoxBounds(){const t=this.__,n=this.__layout,{fontSize:i,italic:s,padding:r,__autoWidth:o,__autoHeight:a}=t;this.__updateTextDrawData();const{bounds:l}=t.__textDrawData,c=n.boxBounds;if(n.contentBounds=l,t.__lineHeight<i&&(n.renderChanged=!0),o||a){if(c.x=o?l.x:0,c.y=a?l.y:0,c.width=o?l.width:t.width,c.height=a?l.height:t.height,r){const[h,d,f,u]=t.__padding;o&&(c.x-=u,c.width+=d+u),a&&(c.y-=h,c.height+=f+h)}this.__updateNaturalSize()}else super.__updateBoxBounds();s&&(c.width+=.16*i),De.stintSet(this,"isOverflow",!F1(c,l)),this.isOverflow?(B1(t.__textBoxBounds={},[c,l]),n.renderChanged=!0):t.__textBoxBounds=c}__updateRenderSpread(){let t=super.__updateRenderSpread();t||(t=this.isOverflow?1:0);const{__lineHeight:n,fontSize:i}=this.__;return n<i&&(t=Ul.max(t,(i-n)/2)),t}__updateRenderBounds(){const{renderBounds:t,renderSpread:n}=this.__layout;N1(t,this.__.__textBoxBounds,n),this.__box&&(this.__box.__layout.renderBounds=t)}__updateChange(){super.__updateChange();const t=this.__box;t&&(t.__onUpdateSize(),t.__updateChange())}__drawRenderPath(t){t.font=this.__.__font}__draw(t,n,i){const s=this.__box;s&&(s.__nowWorld=this.__nowWorld,s.__draw(t,n,i)),this.textEditing&&!n.exporting||super.__draw(t,n,i)}__drawShape(t,n){n.shape&&this.__box&&this.__box.__drawShape(t,n),super.__drawShape(t,n)}destroy(){this.boxStyle&&(this.boxStyle=null),super.destroy()}};G([In(d1)],ue.prototype,"__",void 0),G([pe(0)],ue.prototype,"width",void 0),G([pe(0)],ue.prototype,"height",void 0),G([mr()],ue.prototype,"boxStyle",void 0),G([jn(!1)],ue.prototype,"resizeFontSize",void 0),G([mr("#000000")],ue.prototype,"fill",void 0),G([Xh("outside")],ue.prototype,"strokeAlign",void 0),G([Xr("all")],ue.prototype,"hitFill",void 0),G([pe("")],ue.prototype,"text",void 0),G([pe("")],ue.prototype,"placeholder",void 0),G([pe("caption")],ue.prototype,"fontFamily",void 0),G([pe(12)],ue.prototype,"fontSize",void 0),G([pe("normal")],ue.prototype,"fontWeight",void 0),G([pe(!1)],ue.prototype,"italic",void 0),G([pe("none")],ue.prototype,"textCase",void 0),G([pe("none")],ue.prototype,"textDecoration",void 0),G([pe(0)],ue.prototype,"letterSpacing",void 0),G([pe({type:"percent",value:1.5})],ue.prototype,"lineHeight",void 0),G([pe(0)],ue.prototype,"paraIndent",void 0),G([pe(0)],ue.prototype,"paraSpacing",void 0),G([pe("x")],ue.prototype,"writingMode",void 0),G([pe("left")],ue.prototype,"textAlign",void 0),G([pe("top")],ue.prototype,"verticalAlign",void 0),G([pe(!0)],ue.prototype,"autoSizeAlign",void 0),G([pe("normal")],ue.prototype,"textWrap",void 0),G([pe("show")],ue.prototype,"textOverflow",void 0),G([mr(!1)],ue.prototype,"textEditing",void 0),ue=G([On()],ue);let rl=class extends Et{get __tag(){return"Path"}};G([In(c1)],rl.prototype,"__",void 0),G([Xh("center")],rl.prototype,"strokeAlign",void 0),rl=G([On()],rl);let yc=class extends mi{get __tag(){return"Pen"}setStyle(t){const n=this.pathElement=new rl(t);return this.pathStyle=t,this.__path=n.path||(n.path=[]),this.add(n),this}beginPath(){return this}moveTo(t,n){return this}lineTo(t,n){return this}bezierCurveTo(t,n,i,s,r,o){return this}quadraticCurveTo(t,n,i,s){return this}closePath(){return this}rect(t,n,i,s){return this}roundRect(t,n,i,s,r){return this}ellipse(t,n,i,s,r,o,a,l){return this}arc(t,n,i,s,r,o){return this}arcTo(t,n,i,s,r){return this}drawEllipse(t,n,i,s,r,o,a,l){return this}drawArc(t,n,i,s,r,o){return this}drawPoints(t,n,i){return this}clearPath(){return this}paint(){const{pathElement:t}=this;t.__layout.boxChanged||t.forceUpdate("path")}};G([In(h1)],yc.prototype,"__",void 0),G([(e,t)=>{_a(e,t,{get(){return this.__path}})}],yc.prototype,"path",void 0),yc=G([Ci(gy,["set","path","paint"]),On()],yc);function ds(e,t,n,i){var s,r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}let Ef=class extends hr{get __tag(){return"App"}get isApp(){return!0}constructor(e,t){super(e,t)}init(e,t){if(super.init(e,t),e){const{ground:n,tree:i,sky:s,editor:r}=e;n&&(this.ground=this.addLeafer(n)),(i||r)&&(this.tree=this.addLeafer(i||{type:e.type||"design"})),(s||r)&&(this.sky=this.addLeafer(s)),r&&Ze.editor(r,this)}}__setApp(){const{canvas:e}=this,{realCanvas:t,view:n}=this.config;t||n===this.canvas.view||!e.parentView?this.realCanvas=!0:e.unrealCanvas(),this.leafer=this,this.watcher.disable(),this.layouter.disable()}__updateLocalBounds(){this.forEach(e=>e.updateLayout()),super.__updateLocalBounds()}start(){super.start(),this.forEach(e=>e.start())}stop(){this.forEach(e=>e.stop()),super.stop()}unlockLayout(){super.unlockLayout(),this.forEach(e=>e.unlockLayout())}lockLayout(){super.lockLayout(),this.forEach(e=>e.lockLayout())}forceRender(e,t){this.forEach(n=>n.forceRender(e,t))}addLeafer(e){const t=new hr(e);return this.add(t),t}add(e,t){if(!e.view){if(this.realCanvas&&!this.canvas.bounds)return void setTimeout(()=>this.add(e,t),10);e.init(this.__getChildConfig(e.userConfig),this)}super.add(e,t),Qt(t)||(e.canvas.childIndex=t),this.__listenChildEvents(e)}forEach(e){this.children.forEach(e)}__onCreated(){this.created=this.children.every(e=>e.created)}__onReady(){this.children.every(e=>e.ready)&&super.__onReady()}__onViewReady(){this.children.every(e=>e.viewReady)&&super.__onViewReady()}__onChildRenderEnd(e){this.renderer.addBlock(e.renderBounds),this.viewReady&&this.renderer.update()}__render(e,t){e.context&&this.forEach(n=>t.matrix?n.__render(e,t):e.copyWorld(n.canvas,t.bounds,void 0,void 0,!0))}__onResize(e){this.forEach(t=>t.resize(e)),super.__onResize(e)}updateLayout(){this.forEach(e=>e.updateLayout())}__getChildConfig(e){const t=Object.assign({},this.config);return t.hittable=t.realCanvas=void 0,e&&De.assign(t,e),this.autoLayout&&De.copyAttrs(t,this,Ai),t.view=this.realCanvas?void 0:this.view,t.fill=void 0,t}__listenChildEvents(e){e.once([[Ge.END,this.__onReady,this],[Re.START,this.__onCreated,this],[Re.END,this.__onViewReady,this]]),this.realCanvas&&this.__eventIds.push(e.on_(Re.END,this.__onChildRenderEnd,this))}};Ef=ds([On()],Ef);const Sc={},ia={isHoldSpaceKey:()=>ia.isHold("Space"),isHold:e=>Sc[e],isHoldKeys:(e,t)=>t?e(t):void 0,setDownCode(e){Sc[e]||(Sc[e]=!0)},setUpCode(e){Sc[e]=!1}},wi={LEFT:1,RIGHT:2,MIDDLE:4,defaultLeft(e){e.buttons||(e.buttons=1)},left:e=>e.buttons===1,right:e=>e.buttons===2,middle:e=>e.buttons===4};class tm extends us{get spaceKey(){return ia.isHoldSpaceKey()}get left(){return wi.left(this)}get right(){return wi.right(this)}get middle(){return wi.middle(this)}constructor(t){super(t.type),this.bubbles=!0,Object.assign(this,t)}isHoldKeys(t){return ia.isHoldKeys(t,this)}getBoxPoint(t){return(t||this.current).getBoxPoint(this)}getInnerPoint(t){return(t||this.current).getInnerPoint(this)}getLocalPoint(t){return(t||this.current).getLocalPoint(this)}getPagePoint(){return this.current.getPagePoint(this)}getInner(t){return this.getInnerPoint(t)}getLocal(t){return this.getLocalPoint(t)}getPage(){return this.getPagePoint()}static changeName(t,n){ca.changeName(t,n)}}const{min:jg,max:Zu,abs:qg}=Math,{float:An,sign:Kg}=wn,{minX:Zg,maxX:Jg,minY:Qg,maxY:t0}=Bt,qe=new un,vs=new un,wf={limitMove(e,t){const{dragBounds:n,dragBoundsType:i}=e;n&&ys.getValidMove(e.__localBoxBounds,ys.getDragBounds(e),i,t,!0),ys.axisMove(e,t)},limitScaleOf(e,t,n,i){const{dragBounds:s,dragBoundsType:r}=e;s&&ys.getValidScaleOf(e.__localBoxBounds,ys.getDragBounds(e),r,e.getLocalPointByInner(e.getInnerPointByBox(t)),n,i,!0)},axisMove(e,t){const{draggable:n}=e;n==="x"&&(t.y=0),n==="y"&&(t.x=0)},getDragBounds(e){const{dragBounds:t}=e;return t==="parent"?e.parent.boxBounds:t},isInnerMode:(e,t,n,i)=>n==="inner"||n==="auto"&&An(e[i])>An(t[i]),getValidMove(e,t,n,i,s){const r=e.x+i.x,o=e.y+i.y,a=r+e.width,l=o+e.height,c=t.x+t.width,h=t.y+t.height;return s||(i=Object.assign({},i)),ys.isInnerMode(e,t,n,"width")?r>t.x?i.x+=t.x-r:a<c&&(i.x+=c-a):r<t.x?i.x+=t.x-r:a>c&&(i.x+=c-a),ys.isInnerMode(e,t,n,"height")?o>t.y?i.y+=t.y-o:l<h&&(i.y+=h-l):o<t.y?i.y+=t.y-o:l>h&&(i.y+=h-l),i.x=An(i.x),i.y=An(i.y),i},getValidScaleOf(e,t,n,i,s,r,o){o||(s=Object.assign({},s)),vs.set(t),qe.set(e).scaleOf(i,s.x,s.y);const a=(i.x-e.x)/e.width,l=1-a,c=(i.y-e.y)/e.height,h=1-c;let d,f,u,g,_=1,m=1;return ys.isInnerMode(e,t,n,"width")?(s.x<0&&qe.scaleOf(i,_=1/s.x,1),u=An(qe.minX-vs.minX),g=An(vs.maxX-qe.maxX),d=a&&u>0?1+u/(a*qe.width):1,f=l&&g>0?1+g/(l*qe.width):1,_*=Zu(d,f)):(s.x<0&&((An(Zg(e)-Zg(t))<=0||An(Jg(t)-Jg(e))<=0)&&qe.scaleOf(i,_=1/s.x,1),qe.unsign()),u=An(vs.minX-qe.minX),g=An(qe.maxX-vs.maxX),d=a&&u>0?1-u/(a*qe.width):1,f=l&&g>0?1-g/(l*qe.width):1,_*=jg(d,f)),ys.isInnerMode(e,t,n,"height")?(s.y<0&&qe.scaleOf(i,1,m=1/s.y),u=An(qe.minY-vs.minY),g=An(vs.maxY-qe.maxY),d=c&&u>0?1+u/(c*qe.height):1,f=h&&g>0?1+g/(h*qe.height):1,m*=Zu(d,f),r&&(d=Zu(qg(_),qg(m)),_=Kg(_)*d,m=Kg(m)*d)):(s.y<0&&((An(Qg(e)-Qg(t))<=0||An(t0(t)-t0(e))<=0)&&qe.scaleOf(i,1,m=1/s.y),qe.unsign()),u=An(vs.minY-qe.minY),g=An(qe.maxY-vs.maxY),d=c&&u>0?1-u/(c*qe.height):1,f=h&&g>0?1-g/(h*qe.height):1,m*=jg(d,f)),s.x*=df(_)?_:1,s.y*=df(m)?m:1,s}},ys=wf;let Kt=class extends tm{};Kt.POINTER="pointer",Kt.BEFORE_DOWN="pointer.before_down",Kt.BEFORE_MOVE="pointer.before_move",Kt.BEFORE_UP="pointer.before_up",Kt.DOWN="pointer.down",Kt.MOVE="pointer.move",Kt.UP="pointer.up",Kt.OVER="pointer.over",Kt.OUT="pointer.out",Kt.ENTER="pointer.enter",Kt.LEAVE="pointer.leave",Kt.TAP="tap",Kt.DOUBLE_TAP="double_tap",Kt.CLICK="click",Kt.DOUBLE_CLICK="double_click",Kt.LONG_PRESS="long_press",Kt.LONG_TAP="long_tap",Kt.MENU="pointer.menu",Kt.MENU_TAP="pointer.menu_tap",Kt=ds([js()],Kt);const Ua={};let Ee=class extends Kt{static setList(t){this.list=t instanceof je?t:new je(t)}static setData(t){this.data=t}static getValidMove(t,n,i,s=!0){const r=t.getLocalPoint(i,null,!0);return ce.move(r,n.x-t.x,n.y-t.y),s&&this.limitMove(t,r),wf.axisMove(t,r),r}static limitMove(t,n){wf.limitMove(t,n)}getPageMove(t){return this.assignMove(t),this.current.getPagePoint(Ua,null,!0)}getInnerMove(t,n){return t||(t=this.current),this.assignMove(n),t.getInnerPoint(Ua,null,!0)}getLocalMove(t,n){return t||(t=this.current),this.assignMove(n),t.getLocalPoint(Ua,null,!0)}getPageTotal(){return this.getPageMove(!0)}getInnerTotal(t){return this.getInnerMove(t,!0)}getLocalTotal(t){return this.getLocalMove(t,!0)}getPageBounds(){const t=this.getPageTotal(),n=this.getPagePoint(),i={};return Bt.set(i,n.x-t.x,n.y-t.y,t.x,t.y),Bt.unsign(i),i}assignMove(t){Ua.x=t?this.totalX:this.moveX,Ua.y=t?this.totalY:this.moveY}};Ee.BEFORE_DRAG="drag.before_drag",Ee.START="drag.start",Ee.DRAG="drag",Ee.END="drag.end",Ee.OVER="drag.over",Ee.OUT="drag.out",Ee.ENTER="drag.enter",Ee.LEAVE="drag.leave",Ee=ds([js()],Ee);let gl=class extends Kt{static setList(t){Ee.setList(t)}static setData(t){Ee.setData(t)}};gl.DROP="drop",gl=ds([js()],gl);let ii=class extends Ee{};ii.BEFORE_MOVE="move.before_move",ii.START="move.start",ii.MOVE="move",ii.DRAG_ANIMATE="move.drag_animate",ii.END="move.end",ii.PULL_DOWN="move.pull_down",ii.REACH_BOTTOM="move.reach_bottom",ii=ds([js()],ii);let e0=class extends tm{};e0=ds([js()],e0);let Ao=class extends Kt{};Ao.BEFORE_ROTATE="rotate.before_rotate",Ao.START="rotate.start",Ao.ROTATE="rotate",Ao.END="rotate.end",Ao=ds([js()],Ao);let Ti=class extends Ee{};Ti.SWIPE="swipe",Ti.LEFT="swipe.left",Ti.RIGHT="swipe.right",Ti.UP="swipe.up",Ti.DOWN="swipe.down",Ti=ds([js()],Ti);let Ro=class extends Kt{};Ro.BEFORE_ZOOM="zoom.before_zoom",Ro.START="zoom.start",Ro.ZOOM="zoom",Ro.END="zoom.end",Ro=ds([js()],Ro);let fi=class extends tm{};fi.BEFORE_DOWN="key.before_down",fi.BEFORE_UP="key.before_up",fi.DOWN="key.down",fi.HOLD="key.hold",fi.UP="key.up",fi=ds([js()],fi);const Bi={getDragEventData:(e,t,n)=>Object.assign(Object.assign({},n),{x:n.x,y:n.y,moveX:n.x-t.x,moveY:n.y-t.y,totalX:n.x-e.x,totalY:n.y-e.y}),getDropEventData:(e,t,n)=>Object.assign(Object.assign({},e),{list:t,data:n}),getSwipeDirection:e=>e<-45&&e>-135?Ti.UP:e>45&&e<135?Ti.DOWN:e<=45&&e>=-45?Ti.RIGHT:Ti.LEFT,getSwipeEventData:(e,t,n)=>Object.assign(Object.assign({},n),{moveX:t.moveX,moveY:t.moveY,totalX:n.x-e.x,totalY:n.y-e.y,type:k1.getSwipeDirection(ce.getAngle(e,n))}),getBase(e){const t=e.button===1?4:e.button;return{altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,time:Date.now(),buttons:Qt(e.buttons)?1:e.buttons===0?t:e.buttons,origin:e}},pathHasEventType(e,t){const{list:n}=e;for(let i=0,s=n.length;i<s;i++)if(n[i].hasEvent(t))return!0;return!1},filterPathByEventType(e,t){const n=new je,{list:i}=e;for(let s=0,r=i.length;s<r;s++)i[s].hasEvent(t)&&n.add(i[s]);return n},pathCanDrag:e=>e&&e.list.some(t=>Xe.draggable(t)||!t.isLeafer&&t.hasEvent(Ee.DRAG)),pathHasOutside:e=>e&&e.list.some(t=>t.isOutside)},k1=Bi,n0=new je,{getDragEventData:Ju,getDropEventData:z1,getSwipeEventData:H1}=Bi;let V1=class{constructor(t){this.dragDataList=[],this.interaction=t}setDragData(t){this.animateWait&&this.dragEndReal(),this.downData=this.interaction.downData,this.dragData=Ju(t,t,t),this.canAnimate=this.canDragOut=!0}getList(t,n){const{proxy:i}=this.interaction.selector,s=i&&i.list.length,r=Ee.list||this.draggableList||n0;return this.dragging&&(s?t?n0:new je(n?[...i.list,...i.dragHoverExclude]:i.list):r)}checkDrag(t,n){const{interaction:i}=this;if(this.moving&&t.buttons<1)return this.canAnimate=!1,void i.pointerCancel();!this.moving&&n&&(this.moving=i.canMove(this.downData)||i.isHoldRightKey||i.isMobileDragEmpty)&&(this.dragData.moveType="drag",i.emit(ii.START,this.dragData)),this.moving||this.dragStart(t,n),this.drag(t)}dragStart(t,n){this.dragging||(this.dragging=n&&wi.left(t),this.dragging&&(this.interaction.emit(Ee.START,this.dragData),this.getDraggableList(this.dragData.path),this.setDragStartPoints(this.realDraggableList=this.getList(!0))))}setDragStartPoints(t){this.dragStartPoints={},t.forEach(n=>this.dragStartPoints[n.innerId]={x:n.x,y:n.y})}getDraggableList(t){let n;for(let i=0,s=t.length;i<s;i++)if(n=t.list[i],Xe.draggable(n)){this.draggableList=new je(n);break}}drag(t){const{interaction:n,dragData:i,downData:s}=this,{path:r,throughPath:o}=s;this.dragData=Ju(s,i,t),o&&(this.dragData.throughPath=o),this.dragData.path=r,this.dragDataList.push(this.dragData),this.moving?(t.moving=!0,this.dragData.moveType="drag",n.emit(ii.BEFORE_MOVE,this.dragData),n.emit(ii.MOVE,this.dragData)):this.dragging&&(t.dragging=!0,this.dragReal(),n.emit(Ee.BEFORE_DRAG,this.dragData),n.emit(Ee.DRAG,this.dragData))}dragReal(t){const{interaction:n}=this,{running:i}=n,s=this.realDraggableList;if(s.length&&i){const{totalX:r,totalY:o}=this.dragData,{dragLimitAnimate:a}=n.p,l=!a||!!t;s.forEach(c=>{if(c.draggable){const h=en(c.draggable),d=Ee.getValidMove(c,this.dragStartPoints[c.innerId],{x:r,y:o},l||h);a&&!h&&t?Xe.animateMove(c,d,Ke(a)?a:.3):c.move(d)}})}}dragOverOrOut(t){const{interaction:n}=this,{dragOverPath:i}=this,{path:s}=t;this.dragOverPath=s,i?s.indexAt(0)!==i.indexAt(0)&&(n.emit(Ee.OUT,t,i),n.emit(Ee.OVER,t,s)):n.emit(Ee.OVER,t,s)}dragEnterOrLeave(t){const{interaction:n}=this,{dragEnterPath:i}=this,{path:s}=t;n.emit(Ee.LEAVE,t,i,s),n.emit(Ee.ENTER,t,s,i),this.dragEnterPath=s}dragEnd(t){(this.dragging||this.moving)&&(this.checkDragEndAnimate(t)||this.dragEndReal(t))}dragEndReal(t){const{interaction:n,downData:i,dragData:s}=this;t||(t=s);const{path:r,throughPath:o}=i,a=Ju(i,t,t);if(o&&(a.throughPath=o),a.path=r,this.moving&&(this.moving=!1,a.moveType="drag",n.emit(ii.END,a)),this.dragging){const l=this.getList();this.dragging=!1,n.p.dragLimitAnimate&&this.dragReal(!0),n.emit(Ee.END,a),this.swipe(t,i,s,a),this.drop(t,l,this.dragEnterPath)}this.autoMoveCancel(),this.dragReset(),this.animate(null,"off")}swipe(t,n,i,s){const{interaction:r}=this;if(ce.getDistance(n,t)>r.config.pointer.swipeDistance){const o=H1(n,i,s);this.interaction.emit(o.type,o)}}drop(t,n,i){const s=z1(t,n,Ee.data);s.path=i,this.interaction.emit(gl.DROP,s),this.interaction.emit(Ee.LEAVE,t,i)}dragReset(){Ee.list=Ee.data=this.draggableList=this.dragData=this.downData=this.dragOverPath=this.dragEnterPath=null,this.dragDataList=[]}checkDragEndAnimate(t,n){return!1}animate(t,n){}stopAnimate(){}checkDragOut(t){}autoMoveOnDragOut(t){}autoMoveCancel(){}destroy(){this.dragReset()}};const G1=We.get("emit"),W1=["move","zoom","rotate","key"];function i0(e,t,n,i,s){if(W1.some(r=>t.startsWith(r))&&e.__.hitChildren&&!Ry(e,s)){let r;for(let o=0,a=e.children.length;o<a;o++)r=e.children[o],!n.path.has(r)&&r.__.hittable&&Tf(r,t,n,i,s)}}function Tf(e,t,n,i,s){if(e.destroyed)return!1;if(e.__.hitSelf&&!Ry(e,s)&&(Og.updateEventStyle&&!i&&Og.updateEventStyle(e,t),e.hasEvent(t,i))){n.phase=i?1:e===n.target?2:3;const r=ca.get(t,n);if(e.emitEvent(r,i),r.isStop)return!0}return!1}function Ry(e,t){return t&&t.has(e)}const X1={wheel:{zoomSpeed:.5,moveSpeed:.5,rotateSpeed:.5,delta:{x:20,y:8}},pointer:{type:"pointer",snap:!0,hitRadius:5,tapTime:120,longPressTime:800,transformTime:500,hover:!0,dragHover:!0,dragDistance:2,swipeDistance:20},touch:{preventDefault:"auto"},multiTouch:{},move:{autoDistance:2},zoom:{},cursor:!0,keyEvent:!0},{pathHasEventType:Qu,pathCanDrag:$1,pathHasOutside:s0}=Bi;let Y1=class{get dragging(){return this.dragger.dragging}get transforming(){return this.transformer.transforming}get moveMode(){return this.m.drag===!0||this.isHoldSpaceKey||this.isHoldMiddleKey||this.isHoldRightKey&&this.dragger.moving||this.isDragEmpty}get canHover(){return this.p.hover&&!this.config.mobile}get isDragEmpty(){return this.m.dragEmpty&&this.isRootPath(this.hoverData)&&(!this.downData||this.isRootPath(this.downData))}get isMobileDragEmpty(){return this.m.dragEmpty&&!this.canHover&&this.downData&&this.isTreePath(this.downData)}get isHoldMiddleKey(){return this.m.holdMiddleKey&&this.downData&&wi.middle(this.downData)}get isHoldRightKey(){return this.m.holdRightKey&&this.downData&&wi.right(this.downData)}get isHoldSpaceKey(){return this.m.holdSpaceKey&&ia.isHoldSpaceKey()}get m(){return this.config.move}get p(){return this.config.pointer}get hitRadius(){return this.p.hitRadius}constructor(t,n,i,s){this.config=De.clone(X1),this.tapCount=0,this.downKeyMap={},this.target=t,this.canvas=n,this.selector=i,this.defaultPath=new je(t),this.createTransformer(),this.dragger=new V1(this),s&&(this.config=De.default(s,this.config)),this.__listenEvents()}start(){this.running=!0}stop(){this.running=!1}receive(t){}pointerDown(t,n){t||(t=this.hoverData),t&&(wi.defaultLeft(t),this.updateDownData(t),this.checkPath(t,n),this.downTime=Date.now(),this.emit(Kt.BEFORE_DOWN,t),t.path.needUpdate&&this.updateDownData(t),this.emit(Kt.DOWN,t),wi.left(t)&&(this.tapWait(),this.longPressWait(t)),this.waitRightTap=wi.right(t),this.dragger.setDragData(t),this.isHoldRightKey||this.updateCursor(t))}pointerMove(t){if(t||(t=this.hoverData),!t)return;const{downData:n}=this;n&&wi.defaultLeft(t),(this.canvas.bounds.hitPoint(t)||n)&&(this.pointerMoveReal(t),n&&this.dragger.checkDragOut(t))}pointerMoveReal(t){if(this.emit(Kt.BEFORE_MOVE,t,this.defaultPath),this.downData){const n=ce.getDistance(this.downData,t)>this.p.dragDistance;n&&(this.pointerWaitCancel(),this.waitRightTap=!1),this.dragger.checkDrag(t,n)}this.dragger.moving||(this.updateHoverData(t),this.checkPath(t),this.emit(Kt.MOVE,t),this.pointerHover(t),this.dragging&&(this.dragger.dragOverOrOut(t),this.dragger.dragEnterOrLeave(t))),this.updateCursor(this.downData||t)}pointerUp(t){const{downData:n}=this;if(t||(t=n),!n)return;wi.defaultLeft(t),t.multiTouch=n.multiTouch,this.findPath(t);const i=Object.assign(Object.assign({},t),{path:t.path.clone()});t.path.addList(n.path.list),this.checkPath(t),this.downData=null,this.emit(Kt.BEFORE_UP,t),this.emit(Kt.UP,t),this.touchLeave(t),t.isCancel||(this.tap(t),this.menuTap(t)),this.dragger.dragEnd(t),this.updateCursor(i)}pointerCancel(){const t=Object.assign({},this.dragger.dragData);t.isCancel=!0,this.pointerUp(t)}menu(t){this.findPath(t),this.emit(Kt.MENU,t),this.waitMenuTap=!0,!this.downData&&this.waitRightTap&&this.menuTap(t)}menuTap(t){this.waitRightTap&&this.waitMenuTap&&(this.emit(Kt.MENU_TAP,t),this.waitRightTap=this.waitMenuTap=!1)}createTransformer(){}move(t){}zoom(t){}rotate(t){}transformEnd(){}wheel(t){}multiTouch(t,n){}keyDown(t){if(!this.config.keyEvent)return;this.emit(fi.BEFORE_DOWN,t,this.defaultPath);const{code:n}=t;this.downKeyMap[n]||(this.downKeyMap[n]=!0,ia.setDownCode(n),this.emit(fi.HOLD,t,this.defaultPath),this.moveMode&&(this.cancelHover(),this.updateCursor())),this.emit(fi.DOWN,t,this.defaultPath)}keyUp(t){if(!this.config.keyEvent)return;this.emit(fi.BEFORE_UP,t,this.defaultPath);const{code:n}=t;this.downKeyMap[n]=!1,ia.setUpCode(n),this.emit(fi.UP,t,this.defaultPath),this.cursor==="grab"&&this.updateCursor()}pointerHover(t){!this.canHover||this.dragging&&!this.p.dragHover||(t.path||(t.path=new je),this.pointerOverOrOut(t),this.pointerEnterOrLeave(t))}pointerOverOrOut(t){const{path:n}=t,{overPath:i}=this;this.overPath=n,i?n.indexAt(0)!==i.indexAt(0)&&(this.emit(Kt.OUT,t,i),this.emit(Kt.OVER,t,n)):this.emit(Kt.OVER,t,n)}pointerEnterOrLeave(t){let{path:n}=t;this.downData&&!this.moveMode&&(n=n.clone(),this.downData.path.forEach(s=>n.add(s)));const{enterPath:i}=this;this.enterPath=n,this.emit(Kt.LEAVE,t,i,n),this.emit(Kt.ENTER,t,n,i)}touchLeave(t){t.pointerType==="touch"&&this.enterPath&&(this.emit(Kt.LEAVE,t),this.dragger.dragging&&this.emit(gl.LEAVE,t))}tap(t){const{pointer:n}=this.config,i=this.longTap(t);if(!n.tapMore&&i||!this.waitTap)return;n.tapMore&&this.emitTap(t);const s=Date.now()-this.downTime,r=[Kt.DOUBLE_TAP,Kt.DOUBLE_CLICK].some(o=>Qu(t.path,o));s<n.tapTime+50&&r?(this.tapCount++,this.tapCount===2?(this.tapWaitCancel(),this.emitDoubleTap(t)):(clearTimeout(this.tapTimer),this.tapTimer=setTimeout(()=>{n.tapMore||(this.tapWaitCancel(),this.emitTap(t))},n.tapTime))):n.tapMore||(this.tapWaitCancel(),this.emitTap(t))}findPath(t,n){const{hitRadius:i,through:s}=this.p,{bottomList:r,target:o}=this;Ot.backgrounder||t.origin||o&&o.updateLayout();const a=this.selector.getByPoint(t,i,Object.assign({bottomList:r,name:t.type},n||{through:s}));return a.throughPath&&(t.throughPath=a.throughPath),t.path=a.path,a.path}isRootPath(t){return t&&t.path.list[0].isLeafer}isTreePath(t){const n=this.target.app;return!(!n||!n.isApp)&&n.editor&&!t.path.has(n.editor)&&t.path.has(n.tree)&&!t.target.syncEventer}checkPath(t,n){(n||this.moveMode&&!s0(t.path))&&(t.path=this.defaultPath)}canMove(t){return t&&(this.moveMode||this.m.drag==="auto"&&!$1(t.path))&&!s0(t.path)}isDrag(t){return this.dragger.getList().has(t)}isPress(t){return this.downData&&this.downData.path.has(t)}isHover(t){return this.enterPath&&this.enterPath.has(t)}isFocus(t){return this.focusData===t}cancelHover(){const{hoverData:t}=this;t&&(t.path=this.defaultPath,this.pointerHover(t))}stopDragAnimate(){this.dragger.stopAnimate()}replaceDownTarget(t){const{downData:n}=this;if(n&&t){const{path:i}=n;i.remove(i.list[0]),i.addAt(t,0)}}updateDownData(t,n,i){const{downData:s}=this;!t&&s&&(t=s),t&&(this.findPath(t,n),i&&s&&t.path.addList(s.path.list),this.downData=t)}updateHoverData(t){t||(t=this.hoverData),t&&(this.findPath(t,{exclude:this.dragger.getList(!1,!0),name:Kt.MOVE}),this.hoverData=t)}updateCursor(t){if(!this.config.cursor||!this.canHover)return;if(t||(this.updateHoverData(),t=this.downData||this.hoverData),this.dragger.moving)return this.setCursor("grabbing");if(this.canMove(t))return this.setCursor(this.downData?"grabbing":"grab");if(!t)return;let n,i;const{path:s}=t;for(let r=0,o=s.length;r<o&&(n=s.list[r],i=n.syncEventer&&n.syncEventer.cursor||n.cursor,!i);r++);this.setCursor(i)}setCursor(t){this.cursor=t}getLocal(t,n){const i=this.canvas.getClientBounds(n),s={x:t.clientX-i.x,y:t.clientY-i.y},{bounds:r}=this.canvas;return s.x*=r.width/i.width,s.y*=r.height/i.height,this.p.snap&&ce.round(s),s}emitTap(t){this.emit(Kt.TAP,t),this.emit(Kt.CLICK,t)}emitDoubleTap(t){this.emit(Kt.DOUBLE_TAP,t),this.emit(Kt.DOUBLE_CLICK,t)}pointerWaitCancel(){this.tapWaitCancel(),this.longPressWaitCancel()}tapWait(){clearTimeout(this.tapTimer),this.waitTap=!0}tapWaitCancel(){this.waitTap&&(clearTimeout(this.tapTimer),this.waitTap=!1,this.tapCount=0)}longPressWait(t){clearTimeout(this.longPressTimer),this.longPressTimer=setTimeout(()=>{this.longPressed=!0,this.emit(Kt.LONG_PRESS,t)},this.p.longPressTime)}longTap(t){let n;return this.longPressed&&(this.emit(Kt.LONG_TAP,t),(Qu(t.path,Kt.LONG_TAP)||Qu(t.path,Kt.LONG_PRESS))&&(n=!0)),this.longPressWaitCancel(),n}longPressWaitCancel(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressed=!1)}__onResize(){const{dragOut:t}=this.m;this.shrinkCanvasBounds=new un(this.canvas.bounds),this.shrinkCanvasBounds.spread(-(Ke(t)?t:2))}__listenEvents(){const{target:t}=this;this.__eventIds=[t.on_(co.RESIZE,this.__onResize,this)],t.once(Se.READY,()=>this.__onResize())}__removeListenEvents(){this.target.off_(this.__eventIds),this.__eventIds.length=0}emit(t,n,i,s){this.running&&function(r,o,a,l){if(!a&&!o.path)return;let c;o.type=r,a?o=Object.assign(Object.assign({},o),{path:a}):a=o.path,o.target=a.indexAt(0);try{for(let h=a.length-1;h>-1;h--){if(c=a.list[h],Tf(c,r,o,!0,l))return;c.isApp&&i0(c,r,o,!0,l)}for(let h=0,d=a.length;h<d;h++)if(c=a.list[h],c.isApp&&i0(c,r,o,!1,l),Tf(c,r,o,!1,l))return}catch(h){G1.error(h)}}(t,n,i,s)}destroy(){this.__eventIds.length&&(this.stop(),this.__removeListenEvents(),this.dragger.destroy(),this.transformer&&this.transformer.destroy(),this.downData=this.overPath=this.enterPath=null)}},Cy=class{static set(t,n){this.custom[t]=n}static get(t){return this.custom[t]}};Cy.custom={};let j1=class extends ly{constructor(){super(...arguments),this.maxTotal=1e3,this.pathList=new je,this.pixelList=new je}getPixelType(t,n){return this.__autoClear(),this.pixelList.add(t),Ze.hitCanvas(n)}getPathType(t){return this.__autoClear(),this.pathList.add(t),Ze.hitCanvas()}clearImageType(){this.__clearLeafList(this.pixelList)}clearPathType(){this.__clearLeafList(this.pathList)}__clearLeafList(t){t.length&&(t.forEach(n=>{n.__hitCanvas&&(n.__hitCanvas.destroy(),n.__hitCanvas=null)}),t.reset())}__autoClear(){this.pathList.length+this.pixelList.length>this.maxTotal&&this.clear()}clear(){this.clearPathType(),this.clearImageType()}};Ot.getSelector=function(e){return e.leafer?e.leafer.selector:Ot.selector||(Ot.selector=Ze.selector())};const{toInnerRadiusPointOf:q1,copyRadiusPoint:r0}=ce,{hitRadiusPoint:K1,hitPoint:Z1}=Bt,Na={},Fa={},Co=ha.prototype;Co.hit=function(e,t=0){this.updateLayout(),r0(Fa,e,t);const n=this.__world;return!!(t?K1(n,Fa):Z1(n,Fa))&&(this.isBranch?Ot.getSelector(this).hitPoint(Object.assign({},Fa),t,{target:this}):this.__hitWorld(Fa))},Co.__hitWorld=function(e,t){const n=this.__;if(!n.hitSelf)return!1;const i=this.__world,s=this.__layout,r=i.width<10&&i.height<10;if(n.hitRadius&&(r0(Na,e,n.hitRadius),e=Na),q1(e,i,Na),n.hitBox||r){if(Bt.hitRadiusPoint(s.boxBounds,Na))return!0;if(r)return!1}return!s.hitCanvasChanged&&this.__hitCanvas||(this.__updateHitCanvas(),s.boundsChanged||(s.hitCanvasChanged=!1)),this.__hit(Na,t)},Co.__hitFill=function(e){const t=this.__hitCanvas;return t&&t.hitFill(e,this.__.windingRule)},Co.__hitStroke=function(e,t){const n=this.__hitCanvas;return n&&n.hitStroke(e,t)},Co.__hitPixel=function(e){const t=this.__hitCanvas;return t&&t.hitPixel(e,this.__layout.renderBounds,t.hitScale)},Co.__drawHitPath=function(e){e&&this.__drawRenderPath(e)};const J1=new io,o0=Et.prototype;o0.__updateHitCanvas=function(){this.__box&&this.__box.__updateHitCanvas();const{hitCanvasManager:e}=this.leafer||this.parent&&this.parent.leafer||{};if(!e)return;const t=this.__,n=(t.__isAlphaPixelFill||t.__isCanvas)&&t.hitFill==="pixel",i=t.__isAlphaPixelStroke&&t.hitStroke==="pixel",s=n||i;this.__hitCanvas||(this.__hitCanvas=s?e.getPixelType(this,{contextSettings:{willReadFrequently:!0}}):e.getPathType(this));const r=this.__hitCanvas;if(s){const{renderBounds:o}=this.__layout,a=Ot.image.hitCanvasSize,l=r.hitScale=Yr.set(0,0,a,a).getFitMatrix(o).a,{x:c,y:h,width:d,height:f}=Yr.set(o).scale(l);r.resize({width:d,height:f,pixelRatio:1}),r.clear(),Fi.patternLocked=!0,this.__renderShape(r,{matrix:J1.setWith(this.__world).scaleWith(1/l).invertWith().translate(-c,-h),snapshot:!0,ignoreFill:!n,ignoreStroke:!i}),Fi.patternLocked=!1,r.resetTransform(),t.__isHitPixel=!0}else t.__isHitPixel&&(t.__isHitPixel=!1);this.__drawHitPath(r),r.setStrokeOptions(t)},o0.__hit=function(e,t){if(this.__box&&this.__box.__hit(e))return!0;const n=this.__;if(n.__isHitPixel&&this.__hitPixel(e))return!0;const{hitFill:i}=n,s=(n.fill||n.__isCanvas)&&(i==="path"||i==="pixel"&&!(n.__isAlphaPixelFill||n.__isCanvas))||i==="all"||t;if(s&&this.__hitFill(e))return!0;const{hitStroke:r,__maxStrokeWidth:o}=n,a=n.stroke&&(r==="path"||r==="pixel"&&!n.__isAlphaPixelStroke)||r==="all";if(!s&&!a)return!1;const l=2*e.radiusX;let c=l;if(a)switch(n.strokeAlign){case"inside":if(c+=2*o,!s&&this.__hitFill(e)&&this.__hitStroke(e,c))return!0;c=l;break;case"center":c+=o;break;case"outside":if(c+=2*o,!s){if(!this.__hitFill(e)&&this.__hitStroke(e,c))return!0;c=l}}return!!c&&this.__hitStroke(e,c)};const a0=Et.prototype,l0=eo.prototype,c0=yn.prototype;l0.__updateHitCanvas=c0.__updateHitCanvas=function(){this.stroke||this.cornerRadius||(this.fill||this.__.__isCanvas)&&this.hitFill==="pixel"||this.hitStroke==="all"?a0.__updateHitCanvas.call(this):this.__hitCanvas&&(this.__hitCanvas=null)},l0.__hitFill=c0.__hitFill=function(e){return this.__hitCanvas?a0.__hitFill.call(this,e):Bt.hitRadiusPoint(this.__layout.boxBounds,e)},ue.prototype.__drawHitPath=function(e){const{__lineHeight:t,fontSize:n,__baseLine:i,__letterSpacing:s,__textDrawData:r}=this.__;e.beginPath(),s<0?this.__drawPathByBox(e):r.rows.forEach(o=>e.rect(o.x,o.y-i,o.width,t<n?n:t))},mi.prototype.pick=function(e,t){return t||(t=eE),this.updateLayout(),Ot.getSelector(this).getByPoint(e,t.hitRadius||0,Object.assign(Object.assign({},t),{target:this}))};const td=uy.prototype;td.hitFill=function(e,t){return t?this.context.isPointInPath(e.x,e.y,t):this.context.isPointInPath(e.x,e.y)},td.hitStroke=function(e,t){return this.strokeWidth=t,this.context.isPointInStroke(e.x,e.y)},td.hitPixel=function(e,t,n=1){let{x:i,y:s,radiusX:r,radiusY:o}=e;t&&(i-=t.x,s-=t.y),Yr.set(i-r,s-o,2*r,2*o).scale(n).ceil();const{data:a}=this.context.getImageData(Yr.x,Yr.y,Yr.width||1,Yr.height||1);for(let l=0,c=a.length;l<c;l+=4)if(a[l+3]>0)return!0;return a[3]>0};var h0;function Af(e,t,n,i){return new(n||(n=Promise))(function(s,r){function o(c){try{l(i.next(c))}catch(h){r(h)}}function a(c){try{l(i.throw(c))}catch(h){r(h)}}function l(c){var h;c.done?s(c.value):(h=c.value,h instanceof n?h:new n(function(d){d(h)})).then(o,a)}l((i=i.apply(e,t||[])).next())})}(function(e){e[e.none=1]="none",e[e.free=2]="free",e[e.mirrorAngle=3]="mirrorAngle",e[e.mirror=4]="mirror"})(h0||(h0={})),typeof SuppressedError=="function"&&SuppressedError;const u0=We.get("LeaferCanvas");class Py extends uy{set zIndex(t){const{style:n}=this.view;n.zIndex=t,this.setAbsolute(this.view)}set childIndex(t){const{view:n,parentView:i}=this;if(n&&i){const s=i.children[t];s?(this.setAbsolute(s),i.insertBefore(n,s)):i.appendChild(s)}}init(){const{config:t}=this,n=t.view||t.canvas;n?this.__createViewFrom(n):this.__createView();const{style:i}=this.view;if(i.display||(i.display="block"),this.parentView=this.view.parentElement,this.parentView){const s=this.parentView.style;s.webkitUserSelect=s.userSelect="none",this.view.classList.add("leafer-canvas-view")}Ot.syncDomFont&&!this.parentView&&(i.display="none",document.body&&document.body.appendChild(this.view)),this.__createContext(),this.autoLayout||this.resize(t)}set backgroundColor(t){this.view.style.backgroundColor=t}get backgroundColor(){return this.view.style.backgroundColor}set hittable(t){this.view.style.pointerEvents=t?"auto":"none"}get hittable(){return this.view.style.pointerEvents!=="none"}__createView(){this.view=document.createElement("canvas")}__createViewFrom(t){let n=en(t)?document.getElementById(t):t;if(n)if(n instanceof HTMLCanvasElement)this.view=n;else{let i=n;if(n===window||n===document){const r=document.createElement("div"),{style:o}=r;o.position="absolute",o.top=o.bottom=o.left=o.right="0px",document.body.appendChild(r),i=r}this.__createView();const s=this.view;i.hasChildNodes()&&(this.setAbsolute(s),i.style.position||(i.style.position="relative")),i.appendChild(s)}else u0.error(`no id: ${t}`),this.__createView()}setAbsolute(t){const{style:n}=t;n.position="absolute",n.top=n.left="0px"}updateViewSize(){const{width:t,height:n,pixelRatio:i}=this,{style:s}=this.view;s.width=t+"px",s.height=n+"px",this.unreal||(this.view.width=Math.ceil(t*i),this.view.height=Math.ceil(n*i))}updateClientBounds(){this.view.parentElement&&(this.clientBounds=this.view.getBoundingClientRect())}startAutoLayout(t,n){if(this.resizeListener=n,t){if(this.autoBounds=t,this.resizeObserver)return;try{this.resizeObserver=new ResizeObserver(s=>{this.updateClientBounds();for(const r of s)this.checkAutoBounds(r.contentRect)});const i=this.parentView;i?(this.resizeObserver.observe(i),this.checkAutoBounds(i.getBoundingClientRect())):(this.checkAutoBounds(this.view),u0.warn("no parent"))}catch{this.imitateResizeObserver()}this.stopListenPixelRatio()}else this.listenPixelRatio(),this.unreal&&this.updateViewSize()}imitateResizeObserver(){this.autoLayout&&(this.parentView&&this.checkAutoBounds(this.parentView.getBoundingClientRect()),Ot.requestRender(this.imitateResizeObserver.bind(this)))}listenPixelRatio(){this.windowListener||window.addEventListener("resize",this.windowListener=()=>{const t=Ot.devicePixelRatio;if(!this.config.pixelRatio&&this.pixelRatio!==t){const{width:n,height:i}=this;this.emitResize({width:n,height:i,pixelRatio:t})}})}stopListenPixelRatio(){this.windowListener&&(window.removeEventListener("resize",this.windowListener),this.windowListener=null)}checkAutoBounds(t){const n=this.view,{x:i,y:s,width:r,height:o}=this.autoBounds.getBoundsFrom(t),a={width:r,height:o,pixelRatio:this.config.pixelRatio?this.pixelRatio:Ot.devicePixelRatio};if(!this.isSameSize(a)){const{style:l}=n;l.marginLeft=i+"px",l.marginTop=s+"px",this.emitResize(a)}}stopAutoLayout(){this.autoLayout=!1,this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeListener=this.resizeObserver=null}emitResize(t){const n={};De.copyAttrs(n,this,Ai),this.resize(t),this.resizeListener&&!Qt(this.width)&&this.resizeListener(new co(t,n))}unrealCanvas(){if(!this.unreal&&this.parentView){let t=this.view;t&&t.remove(),t=this.view=document.createElement("div"),this.parentView.appendChild(this.view),t.classList.add("leafer-app-view"),this.unreal=!0}}destroy(){const{view:t}=this;t&&(this.stopAutoLayout(),this.stopListenPixelRatio(),t.parentElement&&t.remove(),super.destroy())}}function Q1(e,t){Ot.origin={createCanvas(n,i){const s=document.createElement("canvas");return s.width=n,s.height=i,s},canvasToDataURL:(n,i,s)=>{const r=pr.mimeType(i),o=n.toDataURL(r,s);return r==="image/bmp"?o.replace("image/png;","image/bmp;"):o},canvasToBolb:(n,i,s)=>new Promise(r=>n.toBlob(r,pr.mimeType(i),s)),canvasSaveAs:(n,i,s)=>{const r=n.toDataURL(pr.mimeType(pr.fileType(i)),s);return Ot.origin.download(r,i)},download(n,i){return Af(this,void 0,void 0,function*(){let s=document.createElement("a");s.href=n,s.download=i,document.body.appendChild(s),s.click(),document.body.removeChild(s)})},loadImage:(n,i,s)=>new Promise((r,o)=>{const a=new Ot.origin.Image;i&&(a.setAttribute("crossOrigin",i),a.crossOrigin=i),a.onload=()=>{r(a)},a.onerror=l=>{o(l)},a.src=Ot.image.getRealURL(n)}),loadContent(n){return Af(this,arguments,void 0,function*(i,s="text"){const r=yield fetch(i);if(!r.ok)throw new Error(`${r.status}`);return yield r[s]()})},Image,PointerEvent,DragEvent},Ot.event={stopDefault(n){n.preventDefault()},stopNow(n){n.stopImmediatePropagation()},stop(n){n.stopPropagation()}},Ot.canvas=Ze.canvas(),Ot.conicGradientSupport=!!Ot.canvas.context.createConicGradient}ng(CanvasRenderingContext2D.prototype),ng(Path2D.prototype),Object.assign(Ze,{canvas:(e,t)=>new Py(e,t),image:e=>new yy(e)}),Ot.name="web",Ot.isMobile="ontouchstart"in window,Ot.requestRender=function(e){window.requestAnimationFrame(e)},_a(Ot,"devicePixelRatio",{get:()=>devicePixelRatio});const{userAgent:Mc}=navigator;Mc.indexOf("Firefox")>-1?(Ot.intWheelDeltaY=!0,Ot.syncDomFont=!0):(/iPhone|iPad|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&/Version\/[\d.]+.*Safari/.test(navigator.userAgent))&&(Ot.fullImageShadow=!0),Mc.indexOf("Windows")>-1?(Ot.os="Windows",Ot.intWheelDeltaY=!0):Mc.indexOf("Mac")>-1?Ot.os="Mac":Mc.indexOf("Linux")>-1&&(Ot.os="Linux");class tR{get childrenChanged(){return this.hasAdd||this.hasRemove||this.hasVisible}get updatedList(){if(this.hasRemove&&this.config.usePartLayout){const t=new je;return this.__updatedList.list.forEach(n=>{n.leafer&&t.add(n)}),t}return this.__updatedList}constructor(t,n){this.totalTimes=0,this.config={},this.__updatedList=new je,this.target=t,n&&(this.config=De.default(n,this.config)),this.__listenEvents()}start(){this.disabled||(this.running=!0)}stop(){this.running=!1}disable(){this.stop(),this.__removeListenEvents(),this.disabled=!0}update(){this.changed=!0,this.running&&this.target.emit(Re.REQUEST)}__onAttrChange(t){this.config.usePartLayout&&this.__updatedList.add(t.target),this.update()}__onChildEvent(t){this.config.usePartLayout&&(t.type===cn.ADD?(this.hasAdd=!0,this.__pushChild(t.child)):(this.hasRemove=!0,this.__updatedList.add(t.parent))),this.update()}__pushChild(t){this.__updatedList.add(t),t.isBranch&&this.__loopChildren(t)}__loopChildren(t){const{children:n}=t;for(let i=0,s=n.length;i<s;i++)this.__pushChild(n[i])}__onRquestData(){this.target.emitEvent(new xr(xr.DATA,{updatedList:this.updatedList})),this.__updatedList=new je,this.totalTimes++,this.changed=this.hasVisible=this.hasRemove=this.hasAdd=!1}__listenEvents(){this.__eventIds=[this.target.on_([[_r.CHANGE,this.__onAttrChange,this],[[cn.ADD,cn.REMOVE],this.__onChildEvent,this],[xr.REQUEST,this.__onRquestData,this]])]}__removeListenEvents(){this.target.off_(this.__eventIds)}destroy(){this.target&&(this.stop(),this.__removeListenEvents(),this.target=this.__updatedList=null)}}const{updateAllMatrix:eR,updateBounds:d0,updateChange:nR}=Xe,{pushAllChildBranch:iR,pushAllParent:f0}=Fl,{worldBounds:p0}=Yh;class m0{constructor(t){this.updatedBounds=new un,this.beforeBounds=new un,this.afterBounds=new un,hn(t)&&(t=new je(t)),this.updatedList=t}setBefore(){this.beforeBounds.setListWithFn(this.updatedList.list,p0)}setAfter(){this.afterBounds.setListWithFn(this.updatedList.list,p0),this.updatedBounds.setList([this.beforeBounds,this.afterBounds])}merge(t){this.updatedList.addList(t.updatedList.list),this.beforeBounds.add(t.beforeBounds),this.afterBounds.add(t.afterBounds),this.updatedBounds.add(t.updatedBounds)}destroy(){this.updatedList=null}}const{updateAllMatrix:sR,updateAllChange:rR}=Xe,ed=We.get("Layouter");class Eh{constructor(t,n){this.totalTimes=0,this.config={usePartLayout:!0},this.__levelList=new JA,this.target=t,n&&(this.config=De.default(n,this.config)),this.__listenEvents()}start(){this.disabled||(this.running=!0)}stop(){this.running=!1}disable(){this.stop(),this.__removeListenEvents(),this.disabled=!0}layout(){if(this.layouting||!this.running)return;const{target:t}=this;this.times=0;try{t.emit(Ge.START),this.layoutOnce(),t.emitEvent(new Ge(Ge.END,this.layoutedBlocks,this.times))}catch(n){ed.error(n)}this.layoutedBlocks=null}layoutAgain(){this.layouting?this.waitAgain=!0:this.layoutOnce()}layoutOnce(){return this.layouting?ed.warn("layouting"):this.times>3?ed.warn("layout max times"):(this.times++,this.totalTimes++,this.layouting=!0,this.target.emit(xr.REQUEST),this.totalTimes>1&&this.config.usePartLayout?this.partLayout():this.fullLayout(),this.layouting=!1,void(this.waitAgain&&(this.waitAgain=!1,this.layoutOnce())))}partLayout(){var t;if(!(!((t=this.__updatedList)===null||t===void 0)&&t.length))return;const n=Li.start("PartLayout"),{target:i,__updatedList:s}=this,{BEFORE:r,LAYOUT:o,AFTER:a}=Ge,l=this.getBlocks(s);l.forEach(c=>c.setBefore()),i.emitEvent(new Ge(r,l,this.times)),this.extraBlock=null,s.sort(),function(c,h){let d;c.list.forEach(f=>{d=f.__layout,h.without(f)&&!d.proxyZoom&&(d.matrixChanged?(eR(f,!0),h.add(f),f.isBranch&&iR(f,h),f0(f,h)):d.boundsChanged&&(h.add(f),f.isBranch&&(f.__tempNumber=0),f0(f,h)))})}(s,this.__levelList),function(c){let h,d,f;c.sort(!0),c.levels.forEach(u=>{h=c.levelMap[u];for(let g=0,_=h.length;g<_;g++){if(d=h[g],d.isBranch&&d.__tempNumber){f=d.children;for(let m=0,p=f.length;m<p;m++)f[m].isBranch||d0(f[m])}d0(d)}})}(this.__levelList),function(c){c.list.forEach(nR)}(s),this.extraBlock&&l.push(this.extraBlock),l.forEach(c=>c.setAfter()),i.emitEvent(new Ge(o,l,this.times)),i.emitEvent(new Ge(a,l,this.times)),this.addBlocks(l),this.__levelList.reset(),this.__updatedList=null,Li.end(n)}fullLayout(){const t=Li.start("FullLayout"),{target:n}=this,{BEFORE:i,LAYOUT:s,AFTER:r}=Ge,o=this.getBlocks(new je(n));n.emitEvent(new Ge(i,o,this.times)),Eh.fullLayout(n),o.forEach(a=>{a.setAfter()}),n.emitEvent(new Ge(s,o,this.times)),n.emitEvent(new Ge(r,o,this.times)),this.addBlocks(o),Li.end(t)}static fullLayout(t){sR(t,!0),t.isBranch?Fl.updateBounds(t):Xe.updateBounds(t),rR(t)}addExtra(t){if(!this.__updatedList.has(t)){const{updatedList:n,beforeBounds:i}=this.extraBlock||(this.extraBlock=new m0([]));n.length?i.add(t.__world):i.set(t.__world),n.add(t)}}createBlock(t){return new m0(t)}getBlocks(t){return[this.createBlock(t)]}addBlocks(t){this.layoutedBlocks?this.layoutedBlocks.push(...t):this.layoutedBlocks=t}__onReceiveWatchData(t){this.__updatedList=t.data.updatedList}__listenEvents(){this.__eventIds=[this.target.on_([[Ge.REQUEST,this.layout,this],[Ge.AGAIN,this.layoutAgain,this],[xr.DATA,this.__onReceiveWatchData,this]])]}__removeListenEvents(){this.target.off_(this.__eventIds)}destroy(){this.target&&(this.stop(),this.__removeListenEvents(),this.target=this.config=null)}}const Po=We.get("Renderer");class qh{get needFill(){return!(this.canvas.allowBackgroundColor||!this.config.fill)}constructor(t,n,i){this.FPS=60,this.totalTimes=0,this.times=0,this.config={usePartRender:!0,ceilPartPixel:!0,maxFPS:120},this.frames=[],this.target=t,this.canvas=n,i&&(this.config=De.default(i,this.config)),this.__listenEvents()}start(){this.running=!0,this.update(!1)}stop(){this.running=!1}update(t=!0){this.changed||(this.changed=t),this.requestTime||this.__requestRender()}requestLayout(){this.target.emit(Ge.REQUEST)}checkRender(){if(this.running){const{target:t}=this;t.isApp&&(t.emit(Re.CHILD_START,t),t.children.forEach(n=>{n.renderer.FPS=this.FPS,n.renderer.checkRender()}),t.emit(Re.CHILD_END,t)),this.changed&&this.canvas.view&&this.render(),this.target.emit(Re.NEXT)}}render(t){if(!this.running||!this.canvas.view)return this.update();const{target:n}=this;this.times=0,this.totalBounds=new un,Po.log(n.innerName,"--->");try{this.emitRender(Re.START),this.renderOnce(t),this.emitRender(Re.END,this.totalBounds),Fi.clearRecycled()}catch(i){this.rendering=!1,Po.error(i)}Po.log("-------------|")}renderAgain(){this.rendering?this.waitAgain=!0:this.renderOnce()}renderOnce(t){if(this.rendering)return Po.warn("rendering");if(this.times>3)return Po.warn("render max times");if(this.times++,this.totalTimes++,this.rendering=!0,this.changed=!1,this.renderBounds=new un,this.renderOptions={},t)this.emitRender(Re.BEFORE),t();else{if(this.requestLayout(),this.ignore)return void(this.ignore=this.rendering=!1);this.emitRender(Re.BEFORE),this.config.usePartRender&&this.totalTimes>1?this.partRender():this.fullRender()}this.emitRender(Re.RENDER,this.renderBounds,this.renderOptions),this.emitRender(Re.AFTER,this.renderBounds,this.renderOptions),this.updateBlocks=null,this.rendering=!1,this.waitAgain&&(this.waitAgain=!1,this.renderOnce())}partRender(){const{canvas:t,updateBlocks:n}=this;n&&(this.mergeBlocks(),n.forEach(i=>{t.bounds.hit(i)&&!i.isEmpty()&&this.clipRender(i)}))}clipRender(t){const n=Li.start("PartRender"),{canvas:i}=this,s=t.getIntersect(i.bounds),r=new un(s);i.save(),s.spread(qh.clipSpread).ceil();const{ceilPartPixel:o}=this.config;i.clipWorld(s,o),i.clearWorld(s,o),this.__render(s,r),i.restore(),Li.end(n)}fullRender(){const t=Li.start("FullRender"),{canvas:n}=this;n.save(),n.clear(),this.__render(n.bounds),n.restore(),Li.end(t)}__render(t,n){const{canvas:i,target:s}=this,r=t.includes(s.__world),o=r?{includes:r}:{bounds:t,includes:r};this.needFill&&i.fillWorld(t,this.config.fill),We.showRepaint&&We.drawRepaint(i,t),this.config.useCellRender&&(o.cellList=this.getCellList()),Ot.render(s,i,o),this.renderBounds=n=n||t,this.renderOptions=o,this.totalBounds.isEmpty()?this.totalBounds=n:this.totalBounds.add(n),i.updateRender(n)}getCellList(){}addBlock(t,n){this.updateBlocks||(this.updateBlocks=[]),this.updateBlocks.push(t)}mergeBlocks(){const{updateBlocks:t}=this;if(t){const n=new un;n.setList(t),t.length=0,t.push(n)}}__requestRender(){const t=this.target;if(this.requestTime||!t)return;if(t.parentApp)return t.parentApp.requestRender(!1);this.requestTime=this.frameTime||Date.now();const n=()=>{const i=1e3/((this.frameTime=Date.now())-this.requestTime),{maxFPS:s}=this.config;if(s&&i>s)return Ot.requestRender(n);const{frames:r}=this;r.length>30&&r.shift(),r.push(i),this.FPS=Math.round(r.reduce((o,a)=>o+a,0)/r.length),this.requestTime=0,this.checkRender()};Ot.requestRender(n)}__onResize(t){if(!this.canvas.unreal){if(t.bigger||!t.samePixelRatio){const{width:n,height:i}=t.old;if(!new un(0,0,n,i).includes(this.target.__world)||this.needFill||!t.samePixelRatio)return this.addBlock(this.canvas.bounds),void this.target.forceUpdate("surface")}this.addBlock(new un(0,0,1,1)),this.update()}}__onLayoutEnd(t){t.data&&t.data.map(n=>{let i;const{updatedList:s}=n;s&&s.list.some(r=>(i=!r.__world.width||!r.__world.height,i&&(r.isLeafer||Po.tip(r.innerName,": empty"),i=!r.isBranch||r.isBranchLeaf),i)),this.addBlock(i?this.canvas.bounds:n.updatedBounds,s)})}emitRender(t,n,i){this.target.emitEvent(new Re(t,this.times,n,i))}__listenEvents(){this.__eventIds=[this.target.on_([[Re.REQUEST,this.update,this],[Ge.END,this.__onLayoutEnd,this],[Re.AGAIN,this.renderAgain,this],[co.RESIZE,this.__onResize,this]])]}__removeListenEvents(){this.target.off_(this.__eventIds)}destroy(){this.target&&(this.stop(),this.__removeListenEvents(),this.config={},this.target=this.canvas=null)}}qh.clipSpread=10;const oR={},{copyRadiusPoint:aR}=ce,{hitRadiusPoint:lR}=Bt;class cR{constructor(t,n){this.target=t,this.selector=n}getByPoint(t,n,i){n||(n=0),i||(i={});const s=i.through||!1,r=i.ignoreHittable||!1,o=i.target||this.target;this.exclude=i.exclude||null,this.point={x:t.x,y:t.y,radiusX:n,radiusY:n},this.findList=new je(i.findList),i.findList||this.hitBranch(o.isBranchLeaf?{children:[o]}:o);const{list:a}=this.findList,l=this.getBestMatchLeaf(a,i.bottomList,r,!!i.findList),c=r?this.getPath(l):this.getHitablePath(l);return this.clear(),s?{path:c,target:l,throughPath:a.length?this.getThroughPath(a):c}:{path:c,target:l}}hitPoint(t,n,i){return!!this.getByPoint(t,n,i).target}getBestMatchLeaf(t,n,i,s){const r=this.findList=new je;if(t.length){let o;const{x:a,y:l}=this.point,c={x:a,y:l,radiusX:0,radiusY:0};for(let h=0,d=t.length;h<d;h++)if(o=t[h],(i||Xe.worldHittable(o))&&(this.hitChild(o,c),r.length)){if(o.isBranchLeaf&&t.some(f=>f!==o&&Xe.hasParent(f,o))){r.reset();break}return r.list[0]}}if(n){for(let o=0,a=n.length;o<a;o++)if(this.hitChild(n[o].target,this.point,n[o].proxy),r.length)return r.list[0]}return s?null:i?t[0]:t.find(o=>Xe.worldHittable(o))}getPath(t){const n=new je,i=[],{target:s}=this;for(;t&&(t.syncEventer&&i.push(t.syncEventer),n.add(t),(t=t.parent)!==s););return i.length&&i.forEach(r=>{for(;r&&(r.__.hittable&&n.add(r),(r=r.parent)!==s););}),s&&n.add(s),n}getHitablePath(t){const n=this.getPath(t&&t.hittable?t:null);let i,s=new je;for(let r=n.list.length-1;r>-1&&(i=n.list[r],i.__.hittable)&&(s.addAt(i,0),i.__.hitChildren&&(!i.isLeafer||i.mode!=="draw"));r--);return s}getThroughPath(t){const n=new je,i=[];for(let a=t.length-1;a>-1;a--)i.push(this.getPath(t[a]));let s,r,o;for(let a=0,l=i.length;a<l;a++){s=i[a],r=i[a+1];for(let c=0,h=s.length;c<h&&(o=s.list[c],!r||!r.has(o));c++)n.add(o)}return n}hitBranch(t){this.eachFind(t.children,t.__onlyHitMask)}eachFind(t,n){let i,s,r;const{point:o}=this;for(let a=t.length-1;a>-1;a--)if(i=t[a],r=i.__,r.visible&&(!n||r.mask))if(s=lR(i.__world,r.hitRadius?aR(oR,o,r.hitRadius):o),i.isBranch){if(s||i.__ignoreHitWorld){if(i.isBranchLeaf&&r.__clipAfterFill&&!i.__hitWorld(o,!0))continue;i.topChildren&&this.eachFind(i.topChildren,!1),this.eachFind(i.children,i.__onlyHitMask),i.isBranchLeaf&&this.hitChild(i,o)}}else s&&this.hitChild(i,o)}hitChild(t,n,i){if((!this.exclude||!this.exclude.has(t))&&t.__hitWorld(n)){const{parent:s}=t;if(s&&s.__hasMask&&!t.__.mask){let r,o=[];const{children:a}=s;for(let l=0,c=a.length;l<c;l++)if(r=a[l],r.__.mask&&o.push(r),r===t){if(o&&!o.every(h=>h.__hitWorld(n)))return;break}}this.findList.add(i||t)}}clear(){this.point=null,this.findList=null,this.exclude=null}destroy(){this.clear()}}class hR{constructor(t,n){this.config={},n&&(this.config=De.default(n,this.config)),this.picker=new cR(this.target=t,this),this.finder=Ze.finder&&Ze.finder(t,this.config)}getByPoint(t,n,i){const{target:s,picker:r}=this;return Ot.backgrounder&&s&&s.updateLayout(),r.getByPoint(t,n,i)}hitPoint(t,n,i){return this.picker.hitPoint(t,n,i)}getBy(t,n,i,s){return this.finder?this.finder.getBy(t,n,i,s):Kn.need("find")}destroy(){this.picker.destroy(),this.finder&&this.finder.destroy()}}Object.assign(Ze,{watcher:(e,t)=>new tR(e,t),layouter:(e,t)=>new Eh(e,t),renderer:(e,t,n)=>new qh(e,t,n),selector:(e,t)=>new hR(e,t)}),Ot.layout=Eh.fullLayout,Ot.render=function(e,t,n){const i=Object.assign(Object.assign({},n),{topRendering:!0});n.topList=new je,e.__render(t,n),n.topList.length&&n.topList.forEach(s=>s.__render(t,i))};const $n={convert(e,t){const n=Bi.getBase(e),{x:i,y:s}=t,r=Object.assign(Object.assign({},n),{x:i,y:s,width:e.width,height:e.height,pointerType:e.pointerType,pressure:e.pressure});return r.pointerType==="pen"&&(r.tangentialPressure=e.tangentialPressure,r.tiltX=e.tiltX,r.tiltY=e.tiltY,r.twist=e.twist),r},convertMouse(e,t){const n=Bi.getBase(e),{x:i,y:s}=t;return Object.assign(Object.assign({},n),{x:i,y:s,width:1,height:1,pointerType:"mouse",pressure:.5})},convertTouch(e,t){const n=$n.getTouch(e),i=Bi.getBase(e),{x:s,y:r}=t;return Object.assign(Object.assign({},i),{x:s,y:r,width:1,height:1,pointerType:"touch",multiTouch:e.touches.length>1,pressure:n.force})},getTouch:e=>e.targetTouches[0]||e.changedTouches[0]},_0={convert(e){const t=Bi.getBase(e);return Object.assign(Object.assign({},t),{code:e.code,key:e.key})}},{pathCanDrag:uR}=Bi;class dR extends Y1{get windowTarget(){const{view:t}=this;return t&&t.ownerDocument||window}get notPointer(){const{p:t}=this;return t.type!=="pointer"||t.touch||this.useMultiTouch}get notTouch(){const{p:t}=this;return t.type==="mouse"||this.usePointer}get notMouse(){return this.usePointer||this.useTouch}__listenEvents(){super.__listenEvents();const t=this.view=this.canvas.view;this.viewEvents={pointerdown:this.onPointerDown,mousedown:this.onMouseDown,touchstart:this.onTouchStart,pointerleave:this.onPointerLeave,contextmenu:this.onContextMenu,wheel:this.onWheel,gesturestart:this.onGesturestart,gesturechange:this.onGesturechange,gestureend:this.onGestureend},this.windowEvents={pointermove:this.onPointerMove,pointerup:this.onPointerUp,pointercancel:this.onPointerCancel,mousemove:this.onMouseMove,mouseup:this.onMouseUp,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchCancel,keydown:this.onKeyDown,keyup:this.onKeyUp,scroll:this.onScroll};const{viewEvents:n,windowEvents:i}=this;for(let s in n)n[s]=n[s].bind(this),t.addEventListener(s,n[s]);for(let s in i)i[s]=i[s].bind(this),this.windowTarget.addEventListener(s,i[s])}__removeListenEvents(){super.__removeListenEvents();const{viewEvents:t,windowEvents:n}=this;for(let i in t)this.view.removeEventListener(i,t[i]),this.viewEvents={};for(let i in n)this.windowTarget.removeEventListener(i,n[i]),this.windowEvents={}}getTouches(t){const n=[];for(let i=0,s=t.length;i<s;i++)n.push(t[i]);return n}preventDefaultPointer(t){const{pointer:n}=this.config;n.preventDefault&&t.preventDefault()}preventDefaultWheel(t){const{wheel:n}=this.config;n.preventDefault&&t.preventDefault()}preventWindowPointer(t){return!this.downData&&t.target!==this.view&&(!this.config.shadowDOM||!t.composedPath||!t.composedPath().includes(this.view))}onKeyDown(t){this.keyDown(_0.convert(t))}onKeyUp(t){this.keyUp(_0.convert(t))}onContextMenu(t){this.config.pointer.preventDefaultMenu&&t.preventDefault(),this.menu($n.convert(t,this.getLocal(t)))}onScroll(){this.canvas.updateClientBounds()}onPointerDown(t){this.preventDefaultPointer(t),this.notPointer||(this.usePointer||(this.usePointer=!0),this.pointerDown($n.convert(t,this.getLocal(t))))}onPointerMove(t,n){if(this.notPointer||this.preventWindowPointer(t))return;this.usePointer||(this.usePointer=!0);const i=$n.convert(t,this.getLocal(t,!0));n?this.pointerHover(i):this.pointerMove(i)}onPointerLeave(t){this.onPointerMove(t,!0)}onPointerUp(t){this.downData&&this.preventDefaultPointer(t),this.notPointer||this.preventWindowPointer(t)||this.pointerUp($n.convert(t,this.getLocal(t)))}onPointerCancel(){this.useMultiTouch||this.pointerCancel()}onMouseDown(t){this.preventDefaultPointer(t),this.notMouse||this.pointerDown($n.convertMouse(t,this.getLocal(t)))}onMouseMove(t){this.notMouse||this.preventWindowPointer(t)||this.pointerMove($n.convertMouse(t,this.getLocal(t,!0)))}onMouseUp(t){this.downData&&this.preventDefaultPointer(t),this.notMouse||this.preventWindowPointer(t)||this.pointerUp($n.convertMouse(t,this.getLocal(t)))}onMouseCancel(){this.notMouse||this.pointerCancel()}onTouchStart(t){const n=$n.getTouch(t),i=this.getLocal(n,!0),{preventDefault:s}=this.config.touch;(s===!0||s==="auto"&&uR(this.findPath(i)))&&t.preventDefault(),this.multiTouchStart(t),this.notTouch||(this.touchTimer&&(window.clearTimeout(this.touchTimer),this.touchTimer=0),this.useTouch=!0,this.pointerDown($n.convertTouch(t,i)))}onTouchMove(t){if(this.multiTouchMove(t),this.notTouch||this.preventWindowPointer(t))return;const n=$n.getTouch(t);this.pointerMove($n.convertTouch(t,this.getLocal(n)))}onTouchEnd(t){if(this.multiTouchEnd(),this.notTouch||this.preventWindowPointer(t))return;this.touchTimer&&clearTimeout(this.touchTimer),this.touchTimer=setTimeout(()=>{this.useTouch=!1},500);const n=$n.getTouch(t);this.pointerUp($n.convertTouch(t,this.getLocal(n)))}onTouchCancel(){this.notTouch||this.pointerCancel()}multiTouchStart(t){this.useMultiTouch=t.touches.length>1,this.touches=this.useMultiTouch?this.getTouches(t.touches):void 0,this.useMultiTouch&&this.pointerCancel()}multiTouchMove(t){if(this.useMultiTouch&&t.touches.length>1){const n=this.getTouches(t.touches),i=this.getKeepTouchList(this.touches,n);i.length>1&&(this.multiTouch(Bi.getBase(t),i),this.touches=n)}}multiTouchEnd(){this.touches=null,this.useMultiTouch=!1,this.transformEnd()}getKeepTouchList(t,n){let i;const s=[];return t.forEach(r=>{i=n.find(o=>o.identifier===r.identifier),i&&s.push({from:this.getLocal(r),to:this.getLocal(i)})}),s}getLocalTouchs(t){return t.map(n=>this.getLocal(n))}onWheel(t){this.preventDefaultWheel(t),this.wheel(Object.assign(Object.assign(Object.assign({},Bi.getBase(t)),this.getLocal(t)),{deltaX:t.deltaX,deltaY:t.deltaY}))}onGesturestart(t){this.useMultiTouch||(this.preventDefaultWheel(t),this.lastGestureScale=1,this.lastGestureRotation=0)}onGesturechange(t){if(this.useMultiTouch)return;this.preventDefaultWheel(t);const n=Bi.getBase(t);Object.assign(n,this.getLocal(t));const i=t.scale/this.lastGestureScale,s=(t.rotation-this.lastGestureRotation)/Math.PI*180*(wn.within(this.config.wheel.rotateSpeed,0,1)/4+.1);this.zoom(Object.assign(Object.assign({},n),{scale:i*i})),this.rotate(Object.assign(Object.assign({},n),{rotation:s})),this.lastGestureScale=t.scale,this.lastGestureRotation=t.rotation}onGestureend(t){this.useMultiTouch||(this.preventDefaultWheel(t),this.transformEnd())}setCursor(t){super.setCursor(t);const n=[];this.eachCursor(t,n),He(n[n.length-1])&&n.push("default"),this.canvas.view.style.cursor=n.map(i=>He(i)?`url(${i.url}) ${i.x||0} ${i.y||0}`:i).join(",")}eachCursor(t,n,i=0){if(i++,hn(t))t.forEach(s=>this.eachCursor(s,n,i));else{const s=en(t)&&Cy.get(t);s&&i<2?this.eachCursor(s,n,i):n.push(t)}}destroy(){this.view&&(super.destroy(),this.view=null,this.touches=null)}}function Ba(e,t,n){e.__.__font?me.fillText(e,t,n):e.__.windingRule?t.fill(e.__.windingRule):t.fill()}function bc(e,t,n,i,s){const r=n.__;He(e)?me.drawStrokesStyle(e,t,!1,n,i,s):(i.setStroke(e,r.__strokeWidth*t,r),i.stroke()),r.__useArrow&&me.strokeArrow(e,n,i,s)}function Rf(e,t,n,i,s){const r=n.__;He(e)?me.drawStrokesStyle(e,t,!0,n,i,s):(i.setStroke(e,r.__strokeWidth*t,r),me.drawTextStroke(n,i,s))}function g0(e,t,n,i,s){const r=i.getSameCanvas(!0,!0);r.font=n.__.__font,Rf(e,2,n,r,s),r.blendMode=t==="outside"?"destination-out":"destination-in",me.fillText(n,r,s),r.blendMode="normal",Xe.copyCanvasByWorld(n,i,r),r.recycle(n.__nowWorld)}const{getSpread:fR,copyAndSpread:pR,toOuterOf:mR,getOuterOf:x0,getByMove:_R,move:gR,getIntersectData:xR}=Bt,v0={};let Cf;const{stintSet:ka}=De,{hasTransparent:vR}=Zn;function yR(e,t,n){if(!He(t)||t.visible===!1||t.opacity===0)return;let i;const{boxBounds:s}=n.__layout,{type:r}=t;switch(r){case"image":case"film":case"video":if(!t.url)return;i=ke.image(n,e,t,s,!Cf||!Cf[t.url]),r!=="image"&&ke[r](i);break;case"linear":i=ah.linearGradient(t,s);break;case"radial":i=ah.radialGradient(t,s);break;case"angular":i=ah.conicGradient(t,s);break;case"solid":const{color:o,opacity:a}=t;i={type:r,style:Zn.string(o,a)};break;default:Qt(t.r)||(i={type:"solid",style:Zn.string(t)})}if(i&&(i.originPaint=t,en(i.style)&&vR(i.style)&&(i.isTransparent=!0),t.style)){if(t.style.strokeWidth===0)return;i.strokeStyle=t.style}return i}const SR={compute:function(e,t){const n=t.__,i=[];let s,r,o,a=n.__input[e];hn(a)||(a=[a]),Cf=ke.recycleImage(e,n);for(let l,c=0,h=a.length;c<h;c++)(l=yR(e,a[c],t))&&(i.push(l),l.strokeStyle&&(o||(o=1),l.strokeStyle.strokeWidth&&(o=Math.max(o,l.strokeStyle.strokeWidth))));i.length?(n["_"+e]=i,i.every(l=>l.isTransparent)&&(i.some(l=>l.image)&&(s=!0),r=!0),e==="fill"?(ka(n,"__isAlphaPixelFill",s),ka(n,"__isTransparentFill",r)):(ka(n,"__isAlphaPixelStroke",s),ka(n,"__isTransparentStroke",r),ka(n,"__hasMultiStrokeStyle",o))):(n.__removePaint(e,!1),n["_"+e]="")},fill:function(e,t,n,i){n.fillStyle=e,Ba(t,n,i)},fills:function(e,t,n,i){let s,r,o;for(let a=0,l=e.length;a<l;a++){if(s=e[a],r=s.originPaint,s.image){if(o?o++:o=1,ke.checkImage(s,!t.__.__font,t,n,i))continue;if(!s.style){o===1&&s.image.isPlacehold&&t.drawImagePlaceholder(s,n,i);continue}}if(n.fillStyle=s.style,s.transform||r.scaleFixed){if(n.save(),s.transform&&n.transform(s.transform),r.scaleFixed){const{scaleX:c,scaleY:h}=t.getRenderScaleData(!0,r.scaleFixed,!1);c!==1&&n.scale(c,h)}r.blendMode&&(n.blendMode=r.blendMode),Ba(t,n,i),n.restore()}else r.blendMode?(n.saveBlendMode(r.blendMode),Ba(t,n,i),n.restoreBlendMode()):Ba(t,n,i)}},fillPathOrText:Ba,fillText:function(e,t,n){const i=e.__,{rows:s,decorationY:r}=i.__textDrawData;let o;i.__isPlacehold&&i.placeholderColor&&(t.fillStyle=i.placeholderColor);for(let a=0,l=s.length;a<l;a++)o=s[a],o.text?t.fillText(o.text,o.x,o.y):o.data&&o.data.forEach(c=>{t.fillText(c.char,c.x,o.y)});if(r){const{decorationColor:a,decorationHeight:l}=i.__textDrawData;a&&(t.fillStyle=a),s.forEach(c=>r.forEach(h=>t.fillRect(c.x,c.y+h,c.width,l)))}},stroke:function(e,t,n,i){const s=t.__;if(s.__strokeWidth)if(s.__font)me.strokeText(e,t,n,i);else if(s.__pathForStroke)me.fillStroke(e,t,n,i);else switch(s.strokeAlign){case"center":bc(e,1,t,n,i);break;case"inside":(function(r,o,a,l){a.save(),a.clipUI(o),bc(r,2,o,a,l),a.restore()})(e,t,n,i);break;case"outside":(function(r,o,a,l){const c=o.__;if(c.__fillAfterStroke)bc(r,2,o,a,l);else{const{renderBounds:h}=o.__layout,d=a.getSameCanvas(!0,!0);o.__drawRenderPath(d),bc(r,2,o,d,l),d.clipUI(c),d.clearWorld(h),Xe.copyCanvasByWorld(o,a,d),d.recycle(o.__nowWorld)}})(e,t,n,i)}},strokes:function(e,t,n,i){me.stroke(e,t,n,i)},strokeText:function(e,t,n,i){switch(t.__.strokeAlign){case"center":Rf(e,1,t,n,i);break;case"inside":g0(e,"inside",t,n,i);break;case"outside":t.__.__fillAfterStroke?Rf(e,2,t,n,i):g0(e,"outside",t,n,i)}},drawTextStroke:function(e,t,n){let i,s=e.__.__textDrawData;const{rows:r,decorationY:o}=s;for(let a=0,l=r.length;a<l;a++)i=r[a],i.text?t.strokeText(i.text,i.x,i.y):i.data&&i.data.forEach(c=>{t.strokeText(c.char,c.x,i.y)});if(o){const{decorationHeight:a}=s;r.forEach(l=>o.forEach(c=>t.strokeRect(l.x,l.y+c,l.width,a)))}},drawStrokesStyle:function(e,t,n,i,s,r){let o;const a=i.__,{__hasMultiStrokeStyle:l}=a;l||s.setStroke(void 0,a.__strokeWidth*t,a);for(let c=0,h=e.length;c<h;c++)if(o=e[c],(!o.image||!ke.checkImage(o,!1,i,s,r))&&o.style){if(l){const{strokeStyle:d}=o;d?s.setStroke(o.style,a.__getRealStrokeWidth(d)*t,a,d):s.setStroke(o.style,a.__strokeWidth*t,a)}else s.strokeStyle=o.style;o.originPaint.blendMode?(s.saveBlendMode(o.originPaint.blendMode),n?me.drawTextStroke(i,s,r):s.stroke(),s.restoreBlendMode()):n?me.drawTextStroke(i,s,r):s.stroke()}},shape:function(e,t,n){const i=t.getSameCanvas(),s=t.bounds,r=e.__nowWorld,o=e.__layout,a=e.__nowWorldShapeBounds||(e.__nowWorldShapeBounds={});let l,c,h,d,f,u;mR(o.strokeSpread?(pR(v0,o.boxBounds,o.strokeSpread),v0):o.boxBounds,r,a);let{scaleX:g,scaleY:_}=e.getRenderScaleData(!0);if(s.includes(a))u=i,l=f=a,c=r;else{let m;if(Ot.fullImageShadow)m=a;else{const M=o.renderShapeSpread?fR(s,Ul.swapAndScale(o.renderShapeSpread,g,_)):s;m=xR(M,a)}d=s.getFitMatrix(m);let{a:p,d:v}=d;d.a<1&&(u=t.getSameCanvas(),e.__renderShape(u,n),g*=p,_*=v),f=x0(a,d),l=_R(f,-d.e,-d.f),c=x0(r,d),gR(c,-d.e,-d.f);const y=n.matrix;y?(h=new io(d),h.multiply(y),p*=y.scaleX,v*=y.scaleY):h=d,h.withScale(p,v),n=Object.assign(Object.assign({},n),{matrix:h})}return e.__renderShape(i,n),{canvas:i,matrix:h,fitMatrix:d,bounds:l,renderBounds:c,worldCanvas:u,shapeBounds:f,scaleX:g,scaleY:_}}};let za,MR=new un;const{isSame:bR}=Bt;function y0(e,t,n,i,s,r){let o=!0;const a=e.__;if(t!=="fill"||a.__naturalWidth||(a.__naturalWidth=i.width/a.pixelRatio,a.__naturalHeight=i.height/a.pixelRatio,a.__autoSide&&(e.forceUpdate("width"),Xe.updateBounds(e),e.__proxyData&&(e.setProxyAttr("width",a.width),e.setProxyAttr("height",a.height)),o=!1)),n.mode==="brush"&&ke.brush(s),!s.data){ke.createData(s,i,n,r);const{transform:l}=s.data,{opacity:c}=n,h=(l&&!l.onlyScale||a.path||a.cornerRadius)&&!s.brush;(h||c&&c<1||n.blendMode)&&(s.complex=!h||2)}return n.filter&&ke.applyFilter(s,i,n.filter,e),o}function S0(e,t){em(e,Bs.LOAD,t)}function M0(e,t){em(e,Bs.LOADED,t)}function b0(e,t,n){t.error=n,e.forceUpdate("surface"),em(e,Bs.ERROR,t)}function em(e,t,n){e.hasEvent(t)&&e.emitEvent(new Bs(t,n))}function nd(e,t){const{leafer:n}=e;n&&n.viewReady&&(n.renderer.ignore=t)}const{get:ER,translate:wR}=re,TR=new un,id={},gn={};function E0(e,t,n,i){const s=en(e)||i?(i?n-i*t:n%t)/((i||Math.floor(n/t))-1):e;return e==="auto"&&s<0?0:s}let Ha={},sd=iy();const{get:Ec,set:AR,rotateOfOuter:w0,translate:$r,scaleOfOuter:rd,multiplyParent:RR,scale:Pf,rotate:Ly,skew:CR}=re;function T0(e,t,n,i,s,r,o,a){o&&Ly(e,o),a&&CR(e,a.x,a.y),s&&Pf(e,s,r),$r(e,t.x+n,t.y+i)}const{get:PR,scale:LR,copy:DR}=re,{getFloorScale:A0}=wn,{abs:R0}=Math,IR={image:function(e,t,n,i,s){let r,o;const a=Fi.get(n,n.type);return za&&n===za.paint&&bR(i,za.boxBounds)?r=za.leafPaint:(r={type:n.type,image:a},a.hasAlphaPixel&&(r.isTransparent=!0),za=a.use>1?{leafPaint:r,paint:n,boxBounds:MR.set(i)}:null),(s||a.loading)&&(o={image:a,attrName:t,attrValue:n}),a.ready?(y0(e,t,n,a,r,i),s&&(S0(e,o),M0(e,o))):a.error?s&&b0(e,o,a.error):(s&&(nd(e,!0),S0(e,o)),r.loadId=a.load(()=>{nd(e,!1),e.destroyed||(y0(e,t,n,a,r,i)&&(a.hasAlphaPixel&&(e.__layout.hitCanvasChanged=!0),e.forceUpdate("surface")),M0(e,o)),r.loadId=void 0},l=>{nd(e,!1),b0(e,o,l),r.loadId=void 0},n.lod&&a.getThumbSize(n.lod)),e.placeholderColor&&(e.placeholderDelay?setTimeout(()=>{a.ready||(a.isPlacehold=!0,e.forceUpdate("surface"))},e.placeholderDelay):a.isPlacehold=!0)),r},checkImage:function(e,t,n,i,s){const{scaleX:r,scaleY:o}=ke.getImageRenderScaleData(e,n,i,s),a=e.film?e.nowIndex:r+"-"+o,{image:l,brush:c,data:h,originPaint:d}=e,{exporting:f,snapshot:u}=s;if(!h||e.patternId===a&&!f||u){if(!c||!e.style)return!1}else if(t&&(h.repeat?t=!1:d.changeful||e.film||Ot.name==="miniapp"||f||(t=Ot.image.isLarge(l,r,o)||l.width*r>8096||l.height*o>8096)),t)n.__.__isFastShadow&&(i.fillStyle=e.style||"#000",i.fill());else if(!e.style||d.sync||f?ke.createPattern(e,n,i,s):ke.createPatternTask(e,n,i,s),!c||!e.style)return!1;return ke.drawImage(e,r,o,n,i,s),!0},drawImage:function(e,t,n,i,s,r){const{data:o,image:a,brush:l,complex:c}=e;let{width:h,height:d}=a,f=l||a;if(c){const{blendMode:u,opacity:g}=e.originPaint,{transform:_}=o;s.save(),c===2&&s.clipUI(i),u&&(s.blendMode=u),g&&(s.opacity*=g),_&&s.transform(_),f.render(s,0,0,h,d,i,e,t,n),s.restore()}else o.scaleX&&(h*=o.scaleX,d*=o.scaleY),f.render(s,0,0,h,d,i,e,t,n)},getImageRenderScaleData:function(e,t,n,i){const s=t.getRenderScaleData(!0,e.originPaint.scaleFixed),{data:r}=e;if(e.brush&&ke.addBrushScale(s,e,t),n){const{pixelRatio:o}=n;s.scaleX*=o,s.scaleY*=o}return r&&r.scaleX&&(s.scaleX*=Math.abs(r.scaleX),s.scaleY*=Math.abs(r.scaleY)),s},recycleImage:function(e,t){const n=t["_"+e];if(hn(n)){let i,s,r,o,a;const l=t.__leaf;for(let c=0,h=n.length;c<h;c++)i=n[c],s=i.image,a=s&&s.url,a&&(r||(r={}),r[a]=!0,Fi.recyclePaint(i),i.brush&&ke.recycleBrush(i,l),t.__willDestroy&&s.parent&&ke.recycleFilter(s,l),s.loading&&(o||(o=t.__input&&t.__input[e]||[],hn(o)||(o=[o])),s.unload(n[c].loadId,!o.some(d=>d.url===a))));return r}return null},createPatternTask:function(e,t,n,i){e.patternTask||(e.patternTask=Fi.patternTasker.add(()=>Af(this,void 0,void 0,function*(){ke.createPattern(e,t,n,i),t.forceUpdate("surface")}),0,()=>(e.patternTask=null,n.bounds.hit(t.__nowWorld))))},createPattern:function(e,t,n,i){let{scaleX:s,scaleY:r}=ke.getImageRenderScaleData(e,t,n,i),o=e.film?e.nowIndex:s+"-"+r;if(e.patternId!==o&&!t.destroyed&&(!Ot.image.isLarge(e.image,s,r)||e.data.repeat)){const{image:a,brush:l,data:c}=e,{opacity:h}=e.originPaint,{transform:d,gap:f}=c,u=ke.getPatternFixScale(e,s,r);let g,_,m,{width:p,height:v}=a;if(u&&(s*=u,r*=u),p*=s,v*=r,f&&(_=f.x*s/R0(c.scaleX||1),m=f.y*r/R0(c.scaleY||1),l)){const C=ke.getBrushScale(e,t);_/=C,m/=C}(d||s!==1||r!==1)&&(s*=A0(p+(_||0)),r*=A0(v+(m||0)),g=PR(),d&&DR(g,d),LR(g,1/s,1/r));const y=a.getCanvas(p,v,h,void 0,_,m,t.leafer&&t.leafer.config.smooth,c.interlace),M=l?y:a.getPattern(y,c.repeat||Ot.origin.noRepeat||"no-repeat",g,e);e.style=M,e.patternId=o}},getPatternFixScale:function(e,t,n){const{image:i}=e;let s,r=Ot.image.maxPatternSize,o=i.width*i.height;return i.isSVG?t>1&&(s=Math.ceil(t)/t):r>o&&(r=o),(o*=t*n)>r&&(s=Math.sqrt(r/o)),s},createData:function(e,t,n,i){e.data=ke.getPatternData(n,i,t)},getPatternData:function(e,t,n){e.padding&&(t=TR.set(t).shrink(e.padding)),e.mode==="strench"&&(e.mode="stretch");const{width:i,height:s}=n,{mode:r,align:o,offset:a,scale:l,size:c,rotation:h,skew:d,clipSize:f,repeat:u,gap:g,interlace:_}=e,m=t.width===i&&t.height===s,p={mode:r},v=o!=="center"&&(h||0)%180==90;let y,M;switch(Bt.set(gn,0,0,v?s:i,v?i:s),r&&r!=="cover"&&r!=="fit"?((l||c)&&(wn.getScaleData(l,c,n,id),y=id.scaleX,M=id.scaleY),(o||g||u)&&(y&&Bt.scale(gn,y,M,!0),o&&ry.toPoint(o,gn,t,gn,!0,!0))):m&&!h||(y=M=Bt.getFitScale(t,gn,r!=="fit"),Bt.put(t,n,o,y,!1,gn),Bt.scale(gn,y,M,!0)),a&&ce.move(gn,a),r){case"stretch":m?y&&(y=M=void 0):(y=t.width/i,M=t.height/s,ke.stretchMode(p,t,y,M));break;case"normal":case"clip":if(gn.x||gn.y||y||f||h||d){let w,R;f&&(w=t.width/f.width,R=t.height/f.height),ke.clipMode(p,t,gn.x,gn.y,y,M,h,d,w,R),w&&(y=y?y*w:w,M=M?M*R:R)}break;case"repeat":case"brush":(!m||y||h||d)&&ke.repeatMode(p,t,i,s,gn.x,gn.y,y,M,h,d,o,e.freeTransform),u||(p.repeat="repeat");const C=He(u);(g||C)&&(p.gap=function(w,R,S,T,O){let L,I;return He(w)?(L=w.x,I=w.y):L=I=w,{x:E0(L,S,O.width,R&&R.x),y:E0(I,T,O.height,R&&R.y)}}(g,C&&u,gn.width,gn.height,t));break;default:y&&ke.fillOrFitMode(p,t,gn.x,gn.y,y,M,h)}return p.transform||(t.x||t.y)&&wR(p.transform=ER(),t.x,t.y),y&&(p.scaleX=y,p.scaleY=M),u&&(p.repeat=en(u)?u==="x"?"repeat-x":"repeat-y":"repeat"),_&&(p.interlace=Ke(_)||_.type==="percent"?{type:"x",offset:_}:_),p},stretchMode:function(e,t,n,i){const s=Ec(),{x:r,y:o}=t;r||o?$r(s,r,o):n>0&&i>0&&(s.onlyScale=!0),Pf(s,n,i),e.transform=s},fillOrFitMode:function(e,t,n,i,s,r,o){const a=Ec();$r(a,t.x+n,t.y+i),Pf(a,s,r),o&&w0(a,{x:t.x+t.width/2,y:t.y+t.height/2},o),e.transform=a},clipMode:function(e,t,n,i,s,r,o,a,l,c){const h=Ec();T0(h,t,n,i,s,r,o,a),l&&(o||a?(AR(sd),rd(sd,t,l,c),RR(h,sd)):rd(h,t,l,c)),e.transform=h},repeatMode:function(e,t,n,i,s,r,o,a,l,c,h,d){const f=Ec();if(d)T0(f,t,s,r,o,a,l,c);else{if(l)if(h==="center")w0(f,{x:n/2,y:i/2},l);else switch(Ly(f,l),l){case 90:$r(f,i,0);break;case 180:$r(f,n,i);break;case 270:$r(f,0,n)}Ha.x=t.x+s,Ha.y=t.y+r,$r(f,Ha.x,Ha.y),o&&rd(f,Ha,o,a)}e.transform=f}},{toPoint:C0}=wr,{hasTransparent:OR}=Zn,od={},ad={};function ld(e,t,n,i){if(n){let s,r,o,a;for(let l=0,c=n.length;l<c;l++)s=n[l],en(s)?(o=l/(c-1),r=Zn.string(s,i)):(o=s.offset,r=Zn.string(s.color,i)),t.addColorStop(o,r),!a&&OR(r)&&(a=!0);a&&(e.isTransparent=!0)}}const{getAngle:UR,getDistance:NR}=ce,{get:FR,rotateOfOuter:P0,scaleOfOuter:L0}=re,{toPoint:D0}=wr,Fr={},cd={};function hd(e,t,n,i,s){let r;const{width:o,height:a}=e;if(o!==a||i){const l=UR(t,n);r=FR(),s?(L0(r,t,o/a*(i||1),1),P0(r,t,l+90)):(L0(r,t,1,o/a*(i||1)),P0(r,t,l))}return r}const{getDistance:BR}=ce,{toPoint:I0}=wr,Ss={},ud={},kR={linearGradient:function(e,t){let{from:n,to:i,type:s,opacity:r}=e;C0(n||"top",t,od),C0(i||"bottom",t,ad);const o=Ot.canvas.createLinearGradient(od.x,od.y,ad.x,ad.y),a={type:s,style:o};return ld(a,o,e.stops,r),a},radialGradient:function(e,t){let{from:n,to:i,type:s,opacity:r,stretch:o}=e;D0(n||"center",t,Fr),D0(i||"bottom",t,cd);const a=Ot.canvas.createRadialGradient(Fr.x,Fr.y,0,Fr.x,Fr.y,NR(Fr,cd)),l={type:s,style:a};ld(l,a,e.stops,r);const c=hd(t,Fr,cd,o,!0);return c&&(l.transform=c),l},conicGradient:function(e,t){let{from:n,to:i,type:s,opacity:r,rotation:o,stretch:a}=e;I0(n||"center",t,Ss),I0(i||"bottom",t,ud);const l=Ot.conicGradientSupport?Ot.canvas.createConicGradient(o?o*Me:0,Ss.x,Ss.y):Ot.canvas.createRadialGradient(Ss.x,Ss.y,0,Ss.x,Ss.y,BR(Ss,ud)),c={type:s,style:l};ld(c,l,e.stops,r);const h=hd(t,Ss,ud,a||1,Ot.conicGradientRotate90);return h&&(c.transform=h),c},getTransform:hd},{copy:zR,move:HR,toOffsetOutBounds:VR}=Bt,{max:wc,abs:GR}=Math,dd={},O0=new io,Va={};function Dy(e,t){let n,i,s,r,o=0,a=0,l=0,c=0;return t.forEach(h=>{n=h.x||0,i=h.y||0,r=1.5*(h.blur||0),s=GR(h.spread||0),o=wc(o,s+r-i),a=wc(a,s+r+n),l=wc(l,s+r+i),c=wc(c,s+r-n)}),o===a&&a===l&&l===c?o:[o,a,l,c]}function U0(e,t,n){const{shapeBounds:i}=n;let s,r;Ot.fullImageShadow?(zR(dd,e.bounds),HR(dd,t.x-i.x,t.y-i.y),s=e.bounds,r=dd):(s=i,r=t),e.copyWorld(n.canvas,s,r)}const{toOffsetOutBounds:WR}=Bt,Ga={},XR=Dy,$R={shadow:function(e,t,n){let i,s;const{__nowWorld:r}=e,{shadow:o}=e.__,{worldCanvas:a,bounds:l,renderBounds:c,shapeBounds:h,scaleX:d,scaleY:f}=n,u=t.getSameCanvas(),g=o.length-1;VR(l,Va,c),o.forEach((_,m)=>{let p=1;if(_.scaleFixed){const v=Math.abs(r.scaleX);v>1&&(p=1/v)}u.setWorldShadow(Va.offsetX+(_.x||0)*d*p,Va.offsetY+(_.y||0)*f*p,(_.blur||0)*d*p,Zn.string(_.color)),s=vr.getShadowTransform(e,u,n,_,Va,p),s&&u.setTransform(s),U0(u,Va,n),s&&u.resetTransform(),i=c,_.box&&(u.restore(),u.save(),a&&(u.copyWorld(u,c,r,"copy"),i=r),a?u.copyWorld(a,r,r,"destination-out"):u.copyWorld(n.canvas,h,l,"destination-out")),Xe.copyCanvasByWorld(e,t,u,i,_.blendMode),g&&m<g&&u.clearWorld(i)}),u.recycle(i)},innerShadow:function(e,t,n){let i,s;const{__nowWorld:r}=e,{innerShadow:o}=e.__,{worldCanvas:a,bounds:l,renderBounds:c,shapeBounds:h,scaleX:d,scaleY:f}=n,u=t.getSameCanvas(),g=o.length-1;WR(l,Ga,c),o.forEach((_,m)=>{let p=1;if(_.scaleFixed){const v=Math.abs(r.scaleX);v>1&&(p=1/v)}u.save(),u.setWorldShadow(Ga.offsetX+(_.x||0)*d*p,Ga.offsetY+(_.y||0)*f*p,(_.blur||0)*d*p),s=vr.getShadowTransform(e,u,n,_,Ga,p,!0),s&&u.setTransform(s),U0(u,Ga,n),u.restore(),a?(u.copyWorld(u,c,r,"copy"),u.copyWorld(a,r,r,"source-out"),i=r):(u.copyWorld(n.canvas,h,l,"source-out"),i=c),u.fillWorld(i,Zn.string(_.color),"source-in"),Xe.copyCanvasByWorld(e,t,u,i,_.blendMode),g&&m<g&&u.clearWorld(i)}),u.recycle(i)},blur:function(e,t,n){const{blur:i}=e.__;n.setWorldBlur(i*e.__nowWorld.a),n.copyWorldToInner(t,e.__nowWorld,e.__layout.renderBounds),n.filter="none"},backgroundBlur:function(e,t,n){},getShadowRenderSpread:Dy,getShadowTransform:function(e,t,n,i,s,r,o){if(i.spread){const a=2*i.spread*r*(o?-1:1),{width:l,height:c}=e.__layout.strokeBounds;return O0.set().scaleOfOuter({x:(s.x+s.width/2)*t.pixelRatio,y:(s.y+s.height/2)*t.pixelRatio},1+a/l,1+a/c),O0}},isTransformShadow(e){},getInnerShadowSpread:XR},{excludeRenderBounds:N0}=Yh;let Lf;function Tc(e,t,n,i,s,r,o,a){switch(t){case"grayscale":Lf||(Lf=!0,s.useGrayscaleAlpha(e.__nowWorld));case"alpha":(function(l,c,h,d,f,u){const g=l.__nowWorld;h.resetTransform(),h.opacity=1,h.useMask(d,g),u&&d.recycle(g),F0(l,c,h,1,f,u)})(e,n,i,s,o,a);break;case"opacity-path":F0(e,n,i,r,o,a);break;case"path":a&&n.restore()}}function fd(e){return e.getSameCanvas(!1,!0)}function F0(e,t,n,i,s,r){const o=e.__nowWorld;t.resetTransform(),t.opacity=i,t.copyWorld(n,o,void 0,s),r?n.recycle(o):n.clearWorld(o)}mi.prototype.__renderMask=function(e,t){let n,i,s,r,o,a;const{children:l}=this;for(let c=0,h=l.length;c<h;c++){if(n=l[c],a=n.__.mask,a){o&&(Tc(this,o,e,s,i,r,void 0,!0),i=s=null),a!=="clipping"&&a!=="clipping-path"||N0(n,t)||n.__render(e,t),r=n.__.opacity,Lf=!1,a==="path"||a==="clipping-path"?(r<1?(o="opacity-path",s||(s=fd(e))):(o="path",e.save()),n.__clip(s||e,t)):(o=a==="grayscale"?"grayscale":"alpha",i||(i=fd(e)),s||(s=fd(e)),n.__render(i,t));continue}const d=r===1&&n.__.__blendMode;d&&Tc(this,o,e,s,i,r,void 0,!1),N0(n,t)||n.__render(s||e,t),d&&Tc(this,o,e,s,i,r,d,!1)}Tc(this,o,e,s,i,r,void 0,!0)};const Iy=`>)]}%!?,.:;'"》）」〉』〗】〕｝┐＞’”！？，、。：；‰`,YR=Iy+"_#~&*+\\=|≮≯≈≠＝…",jR=new RegExp([[19968,40959],[13312,19903],[131072,173791],[173824,177983],[177984,178207],[178208,183983],[183984,191471],[196608,201551],[201552,205743],[11904,12031],[12032,12255],[12272,12287],[12288,12351],[12736,12783],[12800,13055],[13056,13311],[63744,64255],[65072,65103],[127488,127743],[194560,195103]].map(([e,t])=>`[\\u${e.toString(16)}-\\u${t.toString(16)}]`).join("|"));function Bl(e){const t={};return e.split("").forEach(n=>t[n]=!0),t}const qR=Bl("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"),KR=Bl(`{[(<'"《（「〈『〖【〔｛┌＜‘“＝¥￥＄€£￡¢￠`),ZR=Bl(Iy),JR=Bl(YR),QR=Bl("- —／～｜┆·");var wh;(function(e){e[e.Letter=0]="Letter",e[e.Single=1]="Single",e[e.Before=2]="Before",e[e.After=3]="After",e[e.Symbol=4]="Symbol",e[e.Break=5]="Break"})(wh||(wh={}));const{Letter:B0,Single:tC,Before:eC,After:nC,Symbol:iC,Break:sC}=wh;function rC(e){return qR[e]?B0:QR[e]?sC:KR[e]?eC:ZR[e]?nC:JR[e]?iC:jR.test(e)?tC:B0}const oC={trimRight(e){const{words:t}=e;let n,i=0,s=t.length;for(let r=s-1;r>-1&&(n=t[r].data[0],n.char===" ");r--)i++,e.width-=n.width;i&&t.splice(s-i,i)}};function aC(e,t,n){switch(t){case"title":return n?e.toUpperCase():e;case"upper":return e.toUpperCase();case"lower":return e.toLowerCase();default:return e}}const{trimRight:lC}=oC,{Letter:pd,Single:Wa,Before:k0,After:md,Symbol:cC,Break:z0}=wh;let xl,qi,Fn,qn,_d,xi,Ms,Al,ua,ui,nr,gd,Xa,Ko,Rl,ch,Df,qo=[];function xd(e,t){ua&&!Al&&(Al=ua),xl.data.push({char:e,width:t}),Fn+=t}function Br(){qn+=Fn,xl.width=Fn,qi.words.push(xl),xl={data:[]},Fn=0}function $a(){Ko&&(Rl.paraNumber++,qi.paraStart=!0,Ko=!1),ua&&(qi.startCharSize=Al,qi.endCharSize=ua,Al=0),qi.width=qn,ch.width?lC(qi):Df&&Oy(),qo.push(qi),qi={words:[]},qn=0}function Oy(){qn>(Rl.maxWidth||0)&&(Rl.maxWidth=qn)}const{top:Ac,right:H0,bottom:V0,left:Rc}=ff;function Cc(e,t,n){const{bounds:i,rows:s}=e;i[t]+=n;for(let r=0;r<s.length;r++)s[r][t]+=n}const hC={getDrawData:function(e,t){en(e)||(e=String(e));let n=0,i=0,s=t.__getInput("width")||0,r=t.__getInput("height")||0;const{__padding:o}=t;o&&(s?(n=o[Rc],s-=o[H0]+o[Rc],!s&&(s=.01)):t.autoSizeAlign||(n=o[Rc]),r?(i=o[Ac],r-=o[Ac]+o[V0],!r&&(r=.01)):t.autoSizeAlign||(i=o[Ac]));const a={bounds:{x:n,y:i,width:s,height:r},rows:[],paraNumber:0,font:Ot.canvas.font=t.__font};return function(l,c,h){Rl=l,qo=l.rows,ch=l.bounds,Df=!ch.width&&!h.autoSizeAlign;const{__letterSpacing:d,paraIndent:f,textCase:u}=h,{canvas:g}=Ot,{width:_}=ch;if(h.__isCharMode){const m=h.textWrap!=="none",p=h.textWrap==="break";Ko=!0,nr=null,Al=Ms=ua=Fn=qn=0,xl={data:[]},qi={words:[]};for(let v=0,y=(c=[...c]).length;v<y;v++)xi=c[v],xi===`
`?(Fn&&Br(),qi.paraEnd=!0,$a(),Ko=!0):(ui=rC(xi),ui===pd&&u!=="none"&&(xi=aC(xi,u,!Fn)),Ms=g.measureText(xi).width,d&&(d<0&&(ua=Ms),Ms+=d),gd=ui===Wa&&(nr===Wa||nr===pd)||nr===Wa&&ui!==md,Xa=!(ui!==k0&&ui!==Wa||nr!==cC&&nr!==md),_d=Ko&&f?_-f:_,m&&_&&qn+Fn+Ms>_d&&(p?(Fn&&Br(),qn&&$a()):(Xa||(Xa=ui===pd&&nr==md),(gd||Xa||ui===z0||ui===k0||ui===Wa||Fn+Ms>_d)&&Fn&&Br(),qn&&$a())),xi===" "&&Ko!==!0&&qn+Fn===0||(ui===z0?(xi===" "&&Fn&&Br(),xd(xi,Ms),Br()):((gd||Xa)&&Fn&&Br(),xd(xi,Ms))),nr=ui);Fn&&Br(),qn&&$a(),qo.length>0&&(qo[qo.length-1].paraEnd=!0)}else c.split(`
`).forEach(m=>{Rl.paraNumber++,qn=g.measureText(m).width,qo.push({x:f||0,text:m,width:qn,paraStart:!0}),Df&&Oy()})}(a,e,t),o&&function(l,c,h,d,f){if(!d&&h.autoSizeAlign)switch(h.textAlign){case"left":Cc(c,"x",l[Rc]);break;case"right":Cc(c,"x",-l[H0])}if(!f&&h.autoSizeAlign)switch(h.verticalAlign){case"top":Cc(c,"y",l[Ac]);break;case"bottom":Cc(c,"y",-l[V0])}}(o,a,t,s,r),function(l,c){const{rows:h,bounds:d}=l,f=h.length,{__lineHeight:u,__baseLine:g,__letterSpacing:_,__clipText:m,textAlign:p,verticalAlign:v,paraSpacing:y,autoSizeAlign:M}=c;let{x:C,y:w,width:R,height:S}=d,T=u*f+(y?y*(l.paraNumber-1):0),O=g;if(m&&T>S)T=Math.max(c.__autoHeight?T:S,u),f>1&&(l.overflow=f);else if(S||M)switch(v){case"middle":w+=(S-T)/2;break;case"bottom":w+=S-T}O+=w;let L,I,V,Y=R||M?R:l.maxWidth;for(let U=0,k=f;U<k;U++){if(L=h[U],L.x=C,L.width<R||L.width>R&&!m)switch(p){case"center":L.x+=(Y-L.width)/2;break;case"right":L.x+=Y-L.width}L.paraStart&&y&&U>0&&(O+=y),L.y=O,O+=u,l.overflow>U&&O>T&&(L.isOverflow=!0,l.overflow=U+1),I=L.x,V=L.width,_<0&&(L.width<0?(V=-L.width+c.fontSize+_,I-=V,V+=c.fontSize):V-=_),I<d.x&&(d.x=I),V>d.width&&(d.width=V),m&&R&&R<V&&(L.isOverflow=!0,l.overflow||(l.overflow=h.length))}d.y=w,d.height=T}(a,t),t.__isCharMode&&function(l,c,h){const{rows:d}=l,{textAlign:f,paraIndent:u,__letterSpacing:g}=c,_=h&&f.includes("both"),m=_||h&&f.includes("justify"),p=m&&f.includes("letter");let v,y,M,C,w,R,S,T,O,L;d.forEach(I=>{I.words&&(w=u&&I.paraStart?u:0,T=I.words.length,m&&(L=!I.paraEnd||_,y=h-I.width-w,p?C=y/(I.words.reduce((V,Y)=>V+Y.data.length,0)-1):M=T>1?y/(T-1):0),R=g||I.isOverflow||p?0:M?1:2,I.isOverflow&&!g&&(I.textMode=!0),R===2?(I.x+=w,function(V){V.text="",V.words.forEach(Y=>{Y.data.forEach(U=>{V.text+=U.char})})}(I)):(I.x+=w,v=I.x,I.data=[],I.words.forEach((V,Y)=>{R===1?(S={char:"",x:v},v=function(U,k,B){return U.forEach(j=>{B.char+=j.char,k+=j.width}),k}(V.data,v,S),(I.isOverflow||S.char!==" ")&&I.data.push(S)):v=function(U,k,B,j,st){return U.forEach(vt=>{(j||vt.char!==" ")&&(vt.x=k,B.push(vt)),k+=vt.width,st&&(k+=st)}),k}(V.data,v,I.data,I.isOverflow,L&&C),L&&(O=Y===T-1,M?O||(v+=M,I.width+=M):C&&(I.width+=C*(V.data.length-(O?1:0))))})),I.words=null)})}(a,t,s),a.overflow&&function(l,c,h,d){const{rows:f,overflow:u}=l;let{textOverflow:g}=c;if(u&&f.splice(u),d&&g&&g!=="show"){let _,m;g==="hide"?g="":g==="ellipsis"&&(g="...");const p=g?Ot.canvas.measureText(g).width:0,v=h+d-p;(c.textWrap==="none"?f:[f[u-1]]).forEach(y=>{if(y.isOverflow&&y.data){let M=y.data.length-1;for(let C=M;C>-1&&(_=y.data[C],m=_.x+_.width,!(C===M&&m<v));C--){if(m<v&&_.char!==" "||!C){y.data.splice(C+1),y.width-=_.width;break}y.width-=_.width}y.width+=p,y.data.push({char:g,x:m}),y.textMode&&function(C){C.text="",C.data.forEach(w=>{C.text+=w.char}),C.data=null}(y)}})}}(a,t,n,s),t.textDecoration!=="none"&&function(l,c){let h,d=0;const{fontSize:f,textDecoration:u}=c;switch(l.decorationHeight=f/11,He(u)?(h=u.type,u.color&&(l.decorationColor=Zn.string(u.color)),u.offset&&(d=Math.min(.3*f,Math.max(u.offset,.15*-f)))):h=u,h){case"under":l.decorationY=[.15*f+d];break;case"delete":l.decorationY=[.35*-f];break;case"under-delete":l.decorationY=[.15*f+d,.35*-f]}}(a,t),a}},uC={string:function(e,t){if(!e)return"#000";const n=Ke(t)&&t<1;if(en(e)){if(!n||!Zn.object)return e;e=Zn.object(e)}let i=Qt(e.a)?1:e.a;n&&(i*=t);const s=e.r+","+e.g+","+e.b;return i===1?"rgb("+s+")":"rgba("+s+","+i+")"}};Object.assign(wy,hC),Object.assign(Zn,uC),Object.assign(me,SR),Object.assign(ke,IR),Object.assign(ah,kR),Object.assign(vr,$R),Object.assign(Ze,{interaction:(e,t,n,i)=>new dR(e,t,n,i),hitCanvas:(e,t)=>new Py(e,t),hitCanvasManager:()=>new j1}),Q1();const dC={class:"canvas-wrapper"},fC={key:0,class:"placeholder"},pC=Vp({__name:"Valve2DCanvas",props:{params:{}},setup(e){const t=e,n=kp(null);let i=null;const s={bg:"#1a1f2e",outline:"#4fc3f7",hatch:"#2a5a6a",centerLine:"#f06292",dim:"#ff6b6b",dimText:"#ff6b6b",text:"#e0e0e0",green:"#66bb6a"};function r(u,g,_,m,p,v=1.2){return new bi({points:[u,g,_,m],strokeWidth:v,stroke:p})}function o(u,g,_,m,p,v=10,y=5){return new bi({points:[u,g,_,m],strokeWidth:.8,stroke:p,dashPattern:[v,y]})}function a(u,g,_,m=10){return new ue({x:u,y:g,text:_,fill:s.dimText,fontSize:m,fontFamily:"monospace"})}function l(u,g,_,m,p,v=18){const y=m+v;u.add(r(g,m,g,y+4,s.dim,.6)),u.add(r(_,m,_,y+4,s.dim,.6)),u.add(r(g,y,_,y,s.dim,.8)),u.add(r(g,y,g+5,y-2,s.dim,.8)),u.add(r(g,y,g+5,y+2,s.dim,.8)),u.add(r(_,y,_-5,y-2,s.dim,.8)),u.add(r(_,y,_-5,y+2,s.dim,.8)),u.add(a((g+_)/2-p.length*3,y-14,p))}function c(u,g,_,m,p,v=20){const y=m+v;u.add(r(m,g,y+4,g,s.dim,.6)),u.add(r(m,_,y+4,_,s.dim,.6)),u.add(r(y,g,y,_,s.dim,.8)),u.add(r(y,g,y-2,g+5,s.dim,.8)),u.add(r(y,g,y+2,g+5,s.dim,.8)),u.add(r(y,_,y-2,_-5,s.dim,.8)),u.add(r(y,_,y+2,_-5,s.dim,.8)),u.add(a(y+4,(g+_)/2-6,p))}function h(u,g,_,m,p,v=5){const y=m+p;for(let M=v;M<y;M+=v){const C=g+Math.min(M,m),w=_+Math.max(0,M-m),R=g+Math.max(0,M-p),S=_+Math.min(M,p);u.add(new bi({points:[C,w,R,S],strokeWidth:.4,stroke:s.hatch,opacity:.7}))}}function d(u){var St,yt;if(!i)return;(St=i.tree)==null||St.clear();const g=n.value.clientWidth,_=n.value.clientHeight,{diameter:m,height:p,flangeDiameter:v,thickness:y}=u,M=p,C=m/2,w=v*.88,R=v,S=w/2,T=R/2,O=y,L=M*.695,I=R*.305,V=m*.176,Y=8,U=g*.52,k=_*.85,B=(U-100)/M,j=(k-80)/R,st=Math.min(B,j)*.8,vt=U*.48,ht=_*.48,tt=new mi,Jt=M*st,$t=C*st,jt=S*st,rt=T*st,Tt=O*st,dt=L*st,Rt=vt-Jt/2,Dt=vt+Jt/2,Nt=Rt+dt,P=ht-jt,D=ht-rt,W=ht+jt,nt=ht+rt;tt.add(r(Rt,P,Nt,P,s.outline,1.5)),tt.add(r(Rt,W,Nt,W,s.outline,1.5)),tt.add(r(Rt,P,Rt,ht-$t,s.outline,1.5)),tt.add(r(Rt,W,Rt,ht+$t,s.outline,1.5)),tt.add(r(Nt,P,Nt,D,s.outline,1.5)),tt.add(r(Nt,W,Nt,nt,s.outline,1.5)),tt.add(r(Nt,D,Dt,D,s.outline,1.5)),tt.add(r(Nt,nt,Dt,nt,s.outline,1.5)),tt.add(r(Dt,D,Dt,ht-$t,s.outline,1.5)),tt.add(r(Dt,nt,Dt,ht+$t,s.outline,1.5)),tt.add(r(Rt,ht-$t,Dt,ht-$t,s.outline,1.2)),tt.add(r(Rt,ht+$t,Dt,ht+$t,s.outline,1.2));const K=C*1.6*st,et=Rt+dt*.52;tt.add(r(et,ht-K,et+dt*.2,ht-K,s.outline,1)),tt.add(r(et,ht+K,et+dt*.2,ht+K,s.outline,1)),tt.add(r(et,ht-$t,et,ht-K,s.outline,1)),tt.add(r(et,ht+$t,et,ht+K,s.outline,1)),tt.add(r(et+dt*.2,ht-K,et+dt*.2,ht-$t,s.outline,1)),tt.add(r(et+dt*.2,ht+K,et+dt*.2,ht+$t,s.outline,1));const ut=S*.72*st,ft=Nt+(Dt-Nt)*.3;tt.add(r(ft,ht-ut,Dt,ht-ut,s.outline,1)),tt.add(r(ft,ht+ut,Dt,ht+ut,s.outline,1)),tt.add(r(ft,ht-$t,ft,ht-ut,s.outline,1)),tt.add(r(ft,ht+$t,ft,ht+ut,s.outline,1)),h(tt,Rt+2,P+2,dt-4,jt-$t-4,6),h(tt,Nt+2,D+2,Dt-Nt-4,rt-$t-4,6),h(tt,Rt+2,ht+$t+2,dt-4,jt-$t-4,6),h(tt,Nt+2,ht+$t+2,Dt-Nt-4,rt-$t-4,6),tt.add(o(Rt-20,ht,Dt+30,ht,s.centerLine,12,4));const A=3*st;tt.add(r(Rt,P,Rt+A,P+A,s.outline,.8)),tt.add(r(Rt,W,Rt+A,W-A,s.outline,.8)),l(tt,Rt,Dt,nt,`${M.toFixed(1)}±0.2`,20),l(tt,Dt-dt,Dt,nt+38,`${L.toFixed(1)}±0.2`,0),c(tt,P,W,Rt-10,`Ø${w.toFixed(1)}`,-35),c(tt,D,nt,Dt+5,`Ø${R.toFixed(1)}`,15),c(tt,ht-$t,ht+$t,Rt-10,`Ø${m.toFixed(1)}`,-70);const ot=Dt,gt=Dt-Tt;tt.add(r(gt,D-10,gt,D-20,s.dim,.6)),tt.add(r(ot,D-10,ot,D-20,s.dim,.6)),tt.add(r(gt,D-16,ot,D-16,s.dim,.8)),tt.add(a(gt-4,D-32,`${y.toFixed(1)}`)),tt.add(new ue({x:vt-45,y:_*.88,text:'SECTION "A-A"',fill:s.text,fontSize:11,fontFamily:"monospace"}));const ct=g*.77,Z=_*.45,At=Math.min((g*.38-60)/R,(_*.7-60)/R)*.75,E=T*At,x=S*At,F=C*At,q=I*At,it=V*At;tt.add(new Ri({x:ct-E,y:Z-E,width:E*2,height:E*2,stroke:s.green,strokeWidth:1.8,fill:"transparent"})),tt.add(new Ri({x:ct-x,y:Z-x,width:x*2,height:x*2,stroke:s.outline,strokeWidth:1,fill:"transparent",dashPattern:[6,3]})),tt.add(new Ri({x:ct-F,y:Z-F,width:F*2,height:F*2,stroke:s.outline,strokeWidth:1.5,fill:s.bg})),tt.add(new Ri({x:ct-q,y:Z-q,width:q*2,height:q*2,stroke:s.centerLine,strokeWidth:.5,fill:"transparent",dashPattern:[8,4]}));for(let qt=0;qt<Y;qt++){const Yt=qt/Y*Math.PI*2+Math.PI/8,ae=ct+Math.cos(Yt)*q,N=Z+Math.sin(Yt)*q;tt.add(new Ri({x:ae-it,y:N-it,width:it*2,height:it*2,stroke:s.outline,strokeWidth:1.2,fill:s.bg})),tt.add(r(ae-it*1.4,N,ae+it*1.4,N,s.centerLine,.4)),tt.add(r(ae,N-it*1.4,ae,N+it*1.4,s.centerLine,.4))}tt.add(o(ct-E-15,Z,ct+E+15,Z,s.centerLine,12,4)),tt.add(o(ct,Z-E-15,ct,Z+E+15,s.centerLine,12,4));const pt=Math.PI*.25,_t=ct+Math.cos(pt)*q,Q=Z-Math.sin(pt)*q;tt.add(r(_t,Q,_t+25,Q-25,s.dim,.8)),tt.add(a(_t+28,Q-30,`Ø${(I*2).toFixed(0)}`));const lt=Math.PI/8,xt=ct+Math.cos(lt)*q,wt=Z-Math.sin(lt)*q;tt.add(r(xt,wt,xt+35,wt-20,s.dim,.8)),tt.add(a(xt+38,wt-26,`(${Y}x) Ø${(V*2).toFixed(1)}`)),tt.add(r(ct,Z,ct+E*.8,Z-E*.8,s.dim,.5)),tt.add(a(ct+E*.4,Z-E*.55,"45°",9)),tt.add(new ue({x:ct-8,y:Z+E+20,text:"A",fill:s.text,fontSize:14,fontFamily:"monospace",fontWeight:"bold"})),tt.add(new ue({x:g*.55,y:_*.82,text:"BALL VALVE - SEAT HOLDER",fill:s.text,fontSize:11,fontFamily:"monospace",fontWeight:"bold"})),tt.add(new ue({x:g*.55,y:_*.85,text:'Size: 3/4"  Class: 2500',fill:"#6b7b8a",fontSize:9,fontFamily:"monospace"})),tt.add(new ue({x:g*.55,y:_*.89,text:"Notes:",fill:s.green,fontSize:9,fontFamily:"monospace",fontWeight:"bold"})),tt.add(new ue({x:g*.55,y:_*.92,text:"1-) Chamfers: 0.3x45°  2-) Fillet: R0.5",fill:"#6b7b8a",fontSize:8,fontFamily:"monospace"})),tt.add(new ue({x:g*.55,y:_*.95,text:"Sealing: Single Piston / Lip Seal",fill:"#6b7b8a",fontSize:8,fontFamily:"monospace"})),tt.add(new ue({x:12,y:12,text:"SECTION A-A  |  VIEW A",fill:s.text,fontSize:11,fontFamily:"monospace"})),(yt=i.tree)==null||yt.add(tt)}function f(){n.value&&(i==null||i.destroy(),i=new Ef({view:n.value,fill:s.bg,tree:{type:"design"}}),t.params&&d(t.params))}return Gp(()=>{f()}),Wp(()=>{i==null||i.destroy(),i=null}),dl(()=>t.params,u=>{u&&d(u)},{deep:!0}),(u,g)=>(no(),aa("div",dC,[e.params?Yp("",!0):(no(),aa("div",fC,[...g[0]||(g[0]=[Ht("span",null,"请输入参数后点击「生成」",-1)])])),Ht("div",{ref_key:"containerRef",ref:n,class:"leafer-container"},null,512)]))}}),nm=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},mC=nm(pC,[["__scopeId","data-v-1ccbfa2f"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const im="184",sa={ROTATE:0,DOLLY:1,PAN:2},Zo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_C=0,G0=1,gC=2,hh=1,Uy=2,ol=3,Mr=0,zn=1,Us=2,ks=0,ra=1,W0=2,X0=3,$0=4,xC=5,jr=100,vC=101,yC=102,SC=103,MC=104,bC=200,EC=201,wC=202,TC=203,If=204,Of=205,AC=206,RC=207,CC=208,PC=209,LC=210,DC=211,IC=212,OC=213,UC=214,Uf=0,Nf=1,Ff=2,da=3,Bf=4,kf=5,zf=6,Hf=7,Ny=0,NC=1,FC=2,ss=0,Fy=1,By=2,ky=3,sm=4,zy=5,Hy=6,Vy=7,Gy=300,ro=301,fa=302,vd=303,yd=304,Kh=306,Vf=1e3,Fs=1001,Gf=1002,bn=1003,BC=1004,Pc=1005,Ln=1006,Sd=1007,Zr=1008,ri=1009,Wy=1010,Xy=1011,Cl=1012,rm=1013,cs=1014,es=1015,Xs=1016,om=1017,am=1018,Pl=1020,$y=35902,Yy=35899,jy=1021,qy=1022,Di=1023,$s=1026,Jr=1027,Ky=1028,lm=1029,oo=1030,cm=1031,hm=1033,uh=33776,dh=33777,fh=33778,ph=33779,Wf=35840,Xf=35841,$f=35842,Yf=35843,jf=36196,qf=37492,Kf=37496,Zf=37488,Jf=37489,Th=37490,Qf=37491,tp=37808,ep=37809,np=37810,ip=37811,sp=37812,rp=37813,op=37814,ap=37815,lp=37816,cp=37817,hp=37818,up=37819,dp=37820,fp=37821,pp=36492,mp=36494,_p=36495,gp=36283,xp=36284,Ah=36285,vp=36286,kC=3200,yp=0,zC=1,fr="",pi="srgb",Rh="srgb-linear",Ch="linear",Ae="srgb",Lo=7680,Y0=519,HC=512,VC=513,GC=514,um=515,WC=516,XC=517,dm=518,$C=519,j0=35044,q0="300 es",ns=2e3,Ll=2001;function YC(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ph(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function jC(){const e=Ph("canvas");return e.style.display="block",e}const K0={};function Z0(...e){const t="THREE."+e.shift();console.log(t,...e)}function Zy(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function Zt(...e){e=Zy(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function xe(...e){e=Zy(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Sp(...e){const t=e.join(" ");t in K0||(K0[t]=!0,Zt(...e))}function qC(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const KC={[Uf]:Nf,[Ff]:zf,[Bf]:Hf,[da]:kf,[Nf]:Uf,[zf]:Ff,[Hf]:Bf,[kf]:da};class Tr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mh=Math.PI/180,Mp=180/Math.PI;function kl(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[e&255]+Rn[e>>8&255]+Rn[e>>16&255]+Rn[e>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function de(e,t,n){return Math.max(t,Math.min(n,e))}function ZC(e,t){return(e%t+t)%t}function Md(e,t,n){return(1-n)*e+n*t}function Ya(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Wn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const JC={DEG2RAD:mh},xm=class xm{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};xm.prototype.isVector2=!0;let te=xm;class br{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],u=r[o+1],g=r[o+2],_=r[o+3];if(d!==_||l!==f||c!==u||h!==g){let m=l*f+c*u+h*g+d*_;m<0&&(f=-f,u=-u,g=-g,_=-_,m=-m);let p=1-a;if(m<.9995){const v=Math.acos(m),y=Math.sin(v);p=Math.sin(p*v)/y,a=Math.sin(a*v)/y,l=l*p+f*a,c=c*p+u*a,h=h*p+g*a,d=d*p+_*a}else{l=l*p+f*a,c=c*p+u*a,h=h*p+g*a,d=d*p+_*a;const v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],u=r[o+2],g=r[o+3];return t[n]=a*g+h*d+l*u-c*f,t[n+1]=l*g+h*f+c*d-a*u,t[n+2]=c*g+h*u+a*f-l*d,t[n+3]=h*g-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),u=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:Zt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>d){const u=2*Math.sqrt(1+i-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-i-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const vm=class vm{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(J0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(J0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this.z=de(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this.z=de(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return bd.copy(this).projectOnVector(t),this.sub(bd)}reflect(t){return this.sub(bd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(de(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vm.prototype.isVector3=!0;let H=vm;const bd=new H,J0=new br,ym=class ym{constructor(t,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c)}set(t,n,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],g=i[8],_=s[0],m=s[3],p=s[6],v=s[1],y=s[4],M=s[7],C=s[2],w=s[5],R=s[8];return r[0]=o*_+a*v+l*C,r[3]=o*m+a*y+l*w,r[6]=o*p+a*M+l*R,r[1]=c*_+h*v+d*C,r[4]=c*m+h*y+d*w,r[7]=c*p+h*M+d*R,r[2]=f*_+u*v+g*C,r[5]=f*m+u*y+g*w,r[8]=f*p+u*M+g*R,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,g=n*d+i*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*i)*_,t[2]=(a*i-s*o)*_,t[3]=f*_,t[4]=(h*n-s*l)*_,t[5]=(s*r-a*n)*_,t[6]=u*_,t[7]=(i*l-c*n)*_,t[8]=(o*n-i*r)*_,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(Ed.makeScale(t,n)),this}rotate(t){return this.premultiply(Ed.makeRotation(-t)),this}translate(t,n){return this.premultiply(Ed.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};ym.prototype.isMatrix3=!0;let ne=ym;const Ed=new ne,Q0=new ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tx=new ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function QC(){const e={enabled:!0,workingColorSpace:Rh,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ae&&(s.r=zs(s.r),s.g=zs(s.g),s.b=zs(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(s.r=oa(s.r),s.g=oa(s.g),s.b=oa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fr?Ch:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Sp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Sp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[Rh]:{primaries:t,whitePoint:i,transfer:Ch,toXYZ:Q0,fromXYZ:tx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:i,transfer:Ae,toXYZ:Q0,fromXYZ:tx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),e}const _e=QC();function zs(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function oa(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Do;class tP{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Do===void 0&&(Do=Ph("canvas")),Do.width=t.width,Do.height=t.height;const s=Do.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Do}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ph("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zs(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zs(n[i]/255)*255):n[i]=zs(n[i]);return{data:n,width:t.width,height:t.height}}else return Zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let eP=0;class fm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eP++}),this.uuid=kl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(wd(s[o].image)):r.push(wd(s[o]))}else r=wd(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function wd(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?tP.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(Zt("Texture: Unable to serialize Texture."),{})}let nP=0;const Td=new H;class Hn extends Tr{constructor(t=Hn.DEFAULT_IMAGE,n=Hn.DEFAULT_MAPPING,i=Fs,s=Fs,r=Ln,o=Zr,a=Di,l=ri,c=Hn.DEFAULT_ANISOTROPY,h=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nP++}),this.uuid=kl(),this.name="",this.source=new fm(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Td).x}get height(){return this.source.getSize(Td).y}get depth(){return this.source.getSize(Td).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){Zt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Zt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vf:t.x=t.x-Math.floor(t.x);break;case Fs:t.x=t.x<0?0:1;break;case Gf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vf:t.y=t.y-Math.floor(t.y);break;case Fs:t.y=t.y<0?0:1;break;case Gf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Gy;Hn.DEFAULT_ANISOTROPY=1;const Sm=class Sm{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,M=(u+1)/2,C=(p+1)/2,w=(h+f)/4,R=(d+_)/4,S=(g+m)/4;return y>M&&y>C?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=w/i,r=R/i):M>C?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=w/s,r=S/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=R/r,s=S/r),this.set(i,s,r,n),this}let v=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-h)*(f-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(d-_)/v,this.z=(f-h)/v,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=de(this.x,t.x,n.x),this.y=de(this.y,t.y,n.y),this.z=de(this.z,t.z,n.z),this.w=de(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=de(this.x,t,n),this.y=de(this.y,t,n),this.z=de(this.z,t,n),this.w=de(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(de(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sm.prototype.isVector4=!0;let tn=Sm;class iP extends Tr{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new tn(0,0,t,n),this.scissorTest=!1,this.viewport=new tn(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:i.depth},r=new Hn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new fm(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class rs extends iP{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Jy extends Hn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class sP extends Hn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Fs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oh=class Oh{constructor(t,n,i,s,r,o,a,l,c,h,d,f,u,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c,h,d,f,u,g,_,m)}set(t,n,i,s,r,o,a,l,c,h,d,f,u,g,_,m){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oh().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,s=1/Io.setFromMatrixColumn(t,0).length(),r=1/Io.setFromMatrixColumn(t,1).length(),o=1/Io.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*d,g=a*h,_=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=u+g*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=g+u*c,n[10]=o*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,g=c*h,_=c*d;n[0]=f+_*a,n[4]=g*a-u,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=u*a-g,n[6]=_+f*a,n[10]=o*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,g=c*h,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=g+u*a,n[1]=u+g*a,n[5]=o*h,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(t.order==="ZYX"){const f=o*h,u=o*d,g=a*h,_=a*d;n[0]=l*h,n[4]=g*c-u,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=u*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(t.order==="YZX"){const f=o*l,u=o*c,g=a*l,_=a*c;n[0]=l*h,n[4]=_-f*d,n[8]=g*d+u,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=u*d+g,n[10]=f-_*d}else if(t.order==="XZY"){const f=o*l,u=o*c,g=a*l,_=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+_,n[5]=o*h,n[9]=u*d-g,n[2]=g*d-u,n[6]=a*h,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(rP,t,oP)}lookAt(t,n,i){const s=this.elements;return ei.subVectors(t,n),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),ir.crossVectors(i,ei),ir.lengthSq()===0&&(Math.abs(i.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),ir.crossVectors(i,ei)),ir.normalize(),Lc.crossVectors(ei,ir),s[0]=ir.x,s[4]=Lc.x,s[8]=ei.x,s[1]=ir.y,s[5]=Lc.y,s[9]=ei.y,s[2]=ir.z,s[6]=Lc.z,s[10]=ei.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],g=i[2],_=i[6],m=i[10],p=i[14],v=i[3],y=i[7],M=i[11],C=i[15],w=s[0],R=s[4],S=s[8],T=s[12],O=s[1],L=s[5],I=s[9],V=s[13],Y=s[2],U=s[6],k=s[10],B=s[14],j=s[3],st=s[7],vt=s[11],ht=s[15];return r[0]=o*w+a*O+l*Y+c*j,r[4]=o*R+a*L+l*U+c*st,r[8]=o*S+a*I+l*k+c*vt,r[12]=o*T+a*V+l*B+c*ht,r[1]=h*w+d*O+f*Y+u*j,r[5]=h*R+d*L+f*U+u*st,r[9]=h*S+d*I+f*k+u*vt,r[13]=h*T+d*V+f*B+u*ht,r[2]=g*w+_*O+m*Y+p*j,r[6]=g*R+_*L+m*U+p*st,r[10]=g*S+_*I+m*k+p*vt,r[14]=g*T+_*V+m*B+p*ht,r[3]=v*w+y*O+M*Y+C*j,r[7]=v*R+y*L+M*U+C*st,r[11]=v*S+y*I+M*k+C*vt,r[15]=v*T+y*V+M*B+C*ht,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],g=t[3],_=t[7],m=t[11],p=t[15],v=l*u-c*f,y=a*u-c*d,M=a*f-l*d,C=o*u-c*h,w=o*f-l*h,R=o*d-a*h;return n*(_*v-m*y+p*M)-i*(g*v-m*C+p*w)+s*(g*y-_*C+p*R)-r*(g*M-_*w+m*R)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],g=t[12],_=t[13],m=t[14],p=t[15],v=n*a-i*o,y=n*l-s*o,M=n*c-r*o,C=i*l-s*a,w=i*c-r*a,R=s*c-r*l,S=h*_-d*g,T=h*m-f*g,O=h*p-u*g,L=d*m-f*_,I=d*p-u*_,V=f*p-u*m,Y=v*V-y*I+M*L+C*O-w*T+R*S;if(Y===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/Y;return t[0]=(a*V-l*I+c*L)*U,t[1]=(s*I-i*V-r*L)*U,t[2]=(_*R-m*w+p*C)*U,t[3]=(f*w-d*R-u*C)*U,t[4]=(l*O-o*V-c*T)*U,t[5]=(n*V-s*O+r*T)*U,t[6]=(m*M-g*R-p*y)*U,t[7]=(h*R-f*M+u*y)*U,t[8]=(o*I-a*O+c*S)*U,t[9]=(i*O-n*I-r*S)*U,t[10]=(g*w-_*M+p*v)*U,t[11]=(d*M-h*w-u*v)*U,t[12]=(a*T-o*L-l*S)*U,t[13]=(n*L-i*T+s*S)*U,t[14]=(_*y-g*C-m*v)*U,t[15]=(h*C-d*y+f*v)*U,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,g=r*d,_=o*h,m=o*d,p=a*d,v=l*c,y=l*h,M=l*d,C=i.x,w=i.y,R=i.z;return s[0]=(1-(_+p))*C,s[1]=(u+M)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(u-M)*w,s[5]=(1-(f+p))*w,s[6]=(m+v)*w,s[7]=0,s[8]=(g+y)*R,s[9]=(m-v)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Io.set(s[0],s[1],s[2]).length();const a=Io.set(s[4],s[5],s[6]).length(),l=Io.set(s[8],s[9],s[10]).length();r<0&&(o=-o),vi.copy(this);const c=1/o,h=1/a,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,n.setFromRotationMatrix(vi),i.x=o,i.y=a,i.z=l,this}makePerspective(t,n,i,s,r,o,a=ns,l=!1){const c=this.elements,h=2*r/(n-t),d=2*r/(i-s),f=(n+t)/(n-t),u=(i+s)/(i-s);let g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===ns)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Ll)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=ns,l=!1){const c=this.elements,h=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),u=-(i+s)/(i-s);let g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===ns)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===Ll)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Oh.prototype.isMatrix4=!0;let nn=Oh;const Io=new H,vi=new nn,rP=new H(0,0,0),oP=new H(1,1,1),ir=new H,Lc=new H,ei=new H,ex=new nn,nx=new br;class Er{constructor(t=0,n=0,i=0,s=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(n){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return ex.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ex,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return nx.setFromEuler(this),this.setFromQuaternion(nx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class Qy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let aP=0;const ix=new H,Oo=new br,bs=new nn,Dc=new H,ja=new H,lP=new H,cP=new br,sx=new H(1,0,0),rx=new H(0,1,0),ox=new H(0,0,1),ax={type:"added"},hP={type:"removed"},Uo={type:"childadded",child:null},Ad={type:"childremoved",child:null};class vn extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aP++}),this.uuid=kl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new H,n=new Er,i=new br,s=new H(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new nn},normalMatrix:{value:new ne}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Oo.setFromAxisAngle(t,n),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(t,n){return Oo.setFromAxisAngle(t,n),this.quaternion.premultiply(Oo),this}rotateX(t){return this.rotateOnAxis(sx,t)}rotateY(t){return this.rotateOnAxis(rx,t)}rotateZ(t){return this.rotateOnAxis(ox,t)}translateOnAxis(t,n){return ix.copy(t).applyQuaternion(this.quaternion),this.position.add(ix.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(sx,t)}translateY(t){return this.translateOnAxis(rx,t)}translateZ(t){return this.translateOnAxis(ox,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bs.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Dc.copy(t):Dc.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bs.lookAt(ja,Dc,this.up):bs.lookAt(Dc,ja,this.up),this.quaternion.setFromRotationMatrix(bs),s&&(bs.extractRotation(s.matrixWorld),Oo.setFromRotationMatrix(bs),this.quaternion.premultiply(Oo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(xe("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ax),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null):xe("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(hP),Ad.child=t,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bs.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bs.multiply(t.parent.matrixWorld)),t.applyMatrix4(bs),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ax),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,t,lP),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,cP,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(n){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}vn.DEFAULT_UP=new H(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class al extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uP={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new al,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new al,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new al,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uP)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new al;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const tS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function Cd(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class fe{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,_e.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=_e.workingColorSpace){return this.r=t,this.g=n,this.b=i,_e.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=_e.workingColorSpace){if(t=ZC(t,1),n=de(n,0,1),i=de(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=Cd(o,r,t+1/3),this.g=Cd(o,r,t),this.b=Cd(o,r,t-1/3)}return _e.colorSpaceToWorking(this,s),this}setStyle(t,n=pi){function i(r){r!==void 0&&parseFloat(r)<1&&Zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);Zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=pi){const i=tS[t.toLowerCase()];return i!==void 0?this.setHex(i,n):Zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}copyLinearToSRGB(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return _e.workingToColorSpace(Cn.copy(this),t),Math.round(de(Cn.r*255,0,255))*65536+Math.round(de(Cn.g*255,0,255))*256+Math.round(de(Cn.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=_e.workingColorSpace){_e.workingToColorSpace(Cn.copy(this),n);const i=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=_e.workingColorSpace){return _e.workingToColorSpace(Cn.copy(this),n),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=pi){_e.workingToColorSpace(Cn.copy(this),t);const n=Cn.r,i=Cn.g,s=Cn.b;return t!==pi?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(sr),this.setHSL(sr.h+t,sr.s+n,sr.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(sr),t.getHSL(Ic);const i=Md(sr.h,Ic.h,n),s=Md(sr.s,Ic.s,n),r=Md(sr.l,Ic.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new fe;fe.NAMES=tS;class dP extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const yi=new H,Es=new H,Pd=new H,ws=new H,No=new H,Fo=new H,lx=new H,Ld=new H,Dd=new H,Id=new H,Od=new tn,Ud=new tn,Nd=new tn;class Pi{constructor(t=new H,n=new H,i=new H){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),yi.subVectors(t,n),s.cross(yi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){yi.subVectors(s,n),Es.subVectors(i,n),Pd.subVectors(t,n);const o=yi.dot(yi),a=yi.dot(Es),l=yi.dot(Pd),c=Es.dot(Es),h=Es.dot(Pd),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-u-g,g,u)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,ws)===null?!1:ws.x>=0&&ws.y>=0&&ws.x+ws.y<=1}static getInterpolation(t,n,i,s,r,o,a,l){return this.getBarycoord(t,n,i,s,ws)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ws.x),l.addScaledVector(o,ws.y),l.addScaledVector(a,ws.z),l)}static getInterpolatedAttribute(t,n,i,s,r,o){return Od.setScalar(0),Ud.setScalar(0),Nd.setScalar(0),Od.fromBufferAttribute(t,n),Ud.fromBufferAttribute(t,i),Nd.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Od,r.x),o.addScaledVector(Ud,r.y),o.addScaledVector(Nd,r.z),o}static isFrontFacing(t,n,i,s){return yi.subVectors(i,n),Es.subVectors(t,n),yi.cross(Es).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),Es.subVectors(this.a,this.b),yi.cross(Es).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Pi.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return Pi.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return Pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let o,a;No.subVectors(s,i),Fo.subVectors(r,i),Ld.subVectors(t,i);const l=No.dot(Ld),c=Fo.dot(Ld);if(l<=0&&c<=0)return n.copy(i);Dd.subVectors(t,s);const h=No.dot(Dd),d=Fo.dot(Dd);if(h>=0&&d<=h)return n.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(No,o);Id.subVectors(t,r);const u=No.dot(Id),g=Fo.dot(Id);if(g>=0&&u<=g)return n.copy(r);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Fo,a);const m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return lx.subVectors(r,s),a=(d-h)/(d-h+(u-g)),n.copy(s).addScaledVector(lx,a);const p=1/(m+_+f);return o=_*p,a=f*p,n.copy(i).addScaledVector(No,o).addScaledVector(Fo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class zl{constructor(t=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Si):Si.fromBufferAttribute(r,o),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Oc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Oc.copy(i.boundingBox)),Oc.applyMatrix4(t.matrixWorld),this.union(Oc)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qa),Uc.subVectors(this.max,qa),Bo.subVectors(t.a,qa),ko.subVectors(t.b,qa),zo.subVectors(t.c,qa),rr.subVectors(ko,Bo),or.subVectors(zo,ko),kr.subVectors(Bo,zo);let n=[0,-rr.z,rr.y,0,-or.z,or.y,0,-kr.z,kr.y,rr.z,0,-rr.x,or.z,0,-or.x,kr.z,0,-kr.x,-rr.y,rr.x,0,-or.y,or.x,0,-kr.y,kr.x,0];return!Fd(n,Bo,ko,zo,Uc)||(n=[1,0,0,0,1,0,0,0,1],!Fd(n,Bo,ko,zo,Uc))?!1:(Nc.crossVectors(rr,or),n=[Nc.x,Nc.y,Nc.z],Fd(n,Bo,ko,zo,Uc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ts[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ts[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ts[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ts[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ts[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ts[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ts[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ts[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ts),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ts=[new H,new H,new H,new H,new H,new H,new H,new H],Si=new H,Oc=new zl,Bo=new H,ko=new H,zo=new H,rr=new H,or=new H,kr=new H,qa=new H,Uc=new H,Nc=new H,zr=new H;function Fd(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){zr.fromArray(e,r);const a=s.x*Math.abs(zr.x)+s.y*Math.abs(zr.y)+s.z*Math.abs(zr.z),l=t.dot(zr),c=n.dot(zr),h=i.dot(zr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const fn=new H,Fc=new te;let fP=0;class os extends Tr{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fP++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=j0,this.updateRanges=[],this.gpuType=es,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fc.fromBufferAttribute(this,n),Fc.applyMatrix3(t),this.setXY(n,Fc.x,Fc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix3(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyMatrix4(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.applyNormalMatrix(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)fn.fromBufferAttribute(this,n),fn.transformDirection(t),this.setXYZ(n,fn.x,fn.y,fn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ya(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Wn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ya(n,this.array)),n}setX(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ya(n,this.array)),n}setY(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ya(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ya(n,this.array)),n}setW(t,n){return this.normalized&&(n=Wn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),i=Wn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),i=Wn(i,this.array),s=Wn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=Wn(n,this.array),i=Wn(i,this.array),s=Wn(s,this.array),r=Wn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==j0&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class eS extends os{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class nS extends os{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class sn extends os{constructor(t,n,i){super(new Float32Array(t),n,i)}}const pP=new zl,Ka=new H,Bd=new H;class Zh{constructor(t=new H,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):pP.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ka.subVectors(t,this.center);const n=Ka.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ka,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Bd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ka.copy(t.center).add(Bd)),this.expandByPoint(Ka.copy(t.center).sub(Bd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let mP=0;const di=new nn,kd=new vn,Ho=new H,ni=new zl,Za=new zl,xn=new H;class Jn extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mP++}),this.uuid=kl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(YC(t)?nS:eS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new ne().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return di.makeRotationFromQuaternion(t),this.applyMatrix4(di),this}rotateX(t){return di.makeRotationX(t),this.applyMatrix4(di),this}rotateY(t){return di.makeRotationY(t),this.applyMatrix4(di),this}rotateZ(t){return di.makeRotationZ(t),this.applyMatrix4(di),this}translate(t,n,i){return di.makeTranslation(t,n,i),this.applyMatrix4(di),this}scale(t,n,i){return di.makeScale(t,n,i),this.applyMatrix4(di),this}lookAt(t){return kd.lookAt(t),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ho).negate(),this.translate(Ho.x,Ho.y,Ho.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sn(i,3))}else{const i=Math.min(t.length,n.count);for(let s=0;s<i;s++){const r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&Zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];ni.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&xe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zh);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){xe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const i=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Za.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(ni.min,Za.min),ni.expandByPoint(xn),xn.addVectors(ni.max,Za.max),ni.expandByPoint(xn)):(ni.expandByPoint(Za.min),ni.expandByPoint(Za.max))}ni.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)xn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(xn));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xn.fromBufferAttribute(a,c),l&&(Ho.fromBufferAttribute(t,c),xn.add(Ho)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&xe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){xe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new os(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let S=0;S<i.count;S++)a[S]=new H,l[S]=new H;const c=new H,h=new H,d=new H,f=new te,u=new te,g=new te,_=new H,m=new H;function p(S,T,O){c.fromBufferAttribute(i,S),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,O),f.fromBufferAttribute(r,S),u.fromBufferAttribute(r,T),g.fromBufferAttribute(r,O),h.sub(c),d.sub(c),u.sub(f),g.sub(f);const L=1/(u.x*g.y-g.x*u.y);isFinite(L)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(L),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(L),a[S].add(_),a[T].add(_),a[O].add(_),l[S].add(m),l[T].add(m),l[O].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let S=0,T=v.length;S<T;++S){const O=v[S],L=O.start,I=O.count;for(let V=L,Y=L+I;V<Y;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const y=new H,M=new H,C=new H,w=new H;function R(S){C.fromBufferAttribute(s,S),w.copy(C);const T=a[S];y.copy(T),y.sub(C.multiplyScalar(C.dot(T))).normalize(),M.crossVectors(w,T);const L=M.dot(l[S])<0?-1:1;o.setXYZW(S,y.x,y.y,y.z,L)}for(let S=0,T=v.length;S<T;++S){const O=v[S],L=O.start,I=O.count;for(let V=L,Y=L+I;V<Y;V+=3)R(t.getX(V+0)),R(t.getX(V+1)),R(t.getX(V+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new os(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,d=new H;if(t)for(let f=0,u=t.count;f<u;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=n.count;f<u;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)xn.fromBufferAttribute(t,n),xn.normalize(),t.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new os(f,h,d)}if(this.index===null)return Zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,i);l.push(u)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(n))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let _P=0;class xa extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_P++}),this.uuid=kl(),this.name="",this.type="Material",this.blending=ra,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Of,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Y0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){Zt(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){Zt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==If&&(i.blendSrc=this.blendSrc),this.blendDst!==Of&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==da&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Y0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const As=new H,zd=new H,Bc=new H,ar=new H,Hd=new H,kc=new H,Vd=new H;class pm{constructor(t=new H,n=new H(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,As)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=As.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(As.copy(this.origin).addScaledVector(this.direction,n),As.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){zd.copy(t).add(n).multiplyScalar(.5),Bc.copy(n).sub(t).normalize(),ar.copy(this.origin).sub(zd);const r=t.distanceTo(n)*.5,o=-this.direction.dot(Bc),a=ar.dot(this.direction),l=-ar.dot(Bc),c=ar.lengthSq(),h=Math.abs(1-o*o);let d,f,u,g;if(h>0)if(d=o*l-a,f=o*a-l,g=r*h,d>=0)if(f>=-g)if(f<=g){const _=1/h;d*=_,f*=_,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(zd).addScaledVector(Bc,f),u}intersectSphere(t,n){As.subVectors(t.center,this.origin);const i=As.dot(this.direction),s=As.dot(As)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,As)!==null}intersectTriangle(t,n,i,s,r){Hd.subVectors(n,t),kc.subVectors(i,t),Vd.crossVectors(Hd,kc);let o=this.direction.dot(Vd),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,t);const l=a*this.direction.dot(kc.crossVectors(ar,kc));if(l<0)return null;const c=a*this.direction.dot(Hd.cross(ar));if(c<0||l+c>o)return null;const h=-a*ar.dot(Vd);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class iS extends xa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=Ny,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const cx=new nn,Hr=new pm,zc=new Zh,hx=new H,Hc=new H,Vc=new H,Gc=new H,Gd=new H,Wc=new H,ux=new H,Xc=new H;class Ue extends vn{constructor(t=new Jn,n=new iS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Wc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(Gd.fromBufferAttribute(d,t),o?Wc.addScaledVector(Gd,h):Wc.addScaledVector(Gd.sub(n),h))}n.add(Wc)}return n}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),zc.copy(i.boundingSphere),zc.applyMatrix4(r),Hr.copy(t.ray).recast(t.near),!(zc.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(zc,hx)===null||Hr.origin.distanceToSquared(hx)>(t.far-t.near)**2))&&(cx.copy(r).invert(),Hr.copy(t.ray).applyMatrix4(cx),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Hr)))}_computeIntersections(t,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,u.start),y=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let M=v,C=y;M<C;M+=3){const w=a.getX(M),R=a.getX(M+1),S=a.getX(M+2);s=$c(this,p,t,i,c,h,d,w,R,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const v=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=$c(this,o,t,i,c,h,d,v,y,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],v=Math.max(m.start,u.start),y=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let M=v,C=y;M<C;M+=3){const w=M,R=M+1,S=M+2;s=$c(this,p,t,i,c,h,d,w,R,S),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const v=m,y=m+1,M=m+2;s=$c(this,o,t,i,c,h,d,v,y,M),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}}function gP(e,t,n,i,s,r,o,a){let l;if(t.side===zn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Mr,a),l===null)return null;Xc.copy(a),Xc.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Xc);return c<n.near||c>n.far?null:{distance:c,point:Xc.clone(),object:e}}function $c(e,t,n,i,s,r,o,a,l,c){e.getVertexPosition(a,Hc),e.getVertexPosition(l,Vc),e.getVertexPosition(c,Gc);const h=gP(e,t,n,i,Hc,Vc,Gc,ux);if(h){const d=new H;Pi.getBarycoord(ux,Hc,Vc,Gc,d),s&&(h.uv=Pi.getInterpolatedAttribute(s,a,l,c,d,new te)),r&&(h.uv1=Pi.getInterpolatedAttribute(r,a,l,c,d,new te)),o&&(h.normal=Pi.getInterpolatedAttribute(o,a,l,c,d,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new H,materialIndex:0};Pi.getNormal(Hc,Vc,Gc,f.normal),h.face=f,h.barycoord=d}return h}class xP extends Hn{constructor(t=null,n=1,i=1,s,r,o,a,l,c=bn,h=bn,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Wd=new H,vP=new H,yP=new ne;class ur{constructor(t=new H(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=Wd.subVectors(i,n).cross(vP.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const s=t.delta(Wd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||yP.getNormalMatrix(t),s=this.coplanarPoint(Wd).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Zh,SP=new te(.5,.5),Yc=new H;class mm{constructor(t=new ur,n=new ur,i=new ur,s=new ur,r=new ur,o=new ur){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=ns,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],g=r[8],_=r[9],m=r[10],p=r[11],v=r[12],y=r[13],M=r[14],C=r[15];if(s[0].setComponents(c-o,u-h,p-g,C-v).normalize(),s[1].setComponents(c+o,u+h,p+g,C+v).normalize(),s[2].setComponents(c+a,u+d,p+_,C+y).normalize(),s[3].setComponents(c-a,u-d,p-_,C-y).normalize(),i)s[4].setComponents(l,f,m,M).normalize(),s[5].setComponents(c-l,u-f,p-m,C-M).normalize();else if(s[4].setComponents(c-l,u-f,p-m,C-M).normalize(),n===ns)s[5].setComponents(c+l,u+f,p+m,C+M).normalize();else if(n===Ll)s[5].setComponents(l,f,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(t){Vr.center.set(0,0,0);const n=SP.distanceTo(t.center);return Vr.radius=.7071067811865476+n,Vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Yc.x=s.normal.x>0?t.max.x:t.min.x,Yc.y=s.normal.y>0?t.max.y:t.min.y,Yc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Yc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class sS extends xa{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Lh=new H,Dh=new H,dx=new nn,Ja=new pm,jc=new Zh,Xd=new H,fx=new H;class MP extends vn{constructor(t=new Jn,n=new sS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Lh.fromBufferAttribute(n,s-1),Dh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Lh.distanceTo(Dh);t.setAttribute("lineDistance",new sn(i,1))}else Zt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),jc.copy(i.boundingSphere),jc.applyMatrix4(s),jc.radius+=r,t.ray.intersectsSphere(jc)===!1)return;dx.copy(s).invert(),Ja.copy(t.ray).applyMatrix4(dx);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=c){const p=h.getX(_),v=h.getX(_+1),y=qc(this,t,Ja,l,p,v,_);y&&n.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(u),p=qc(this,t,Ja,l,_,m,g-1);p&&n.push(p)}}else{const u=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=u,m=g-1;_<m;_+=c){const p=qc(this,t,Ja,l,_,_+1,_);p&&n.push(p)}if(this.isLineLoop){const _=qc(this,t,Ja,l,g-1,u,g-1);_&&n.push(_)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function qc(e,t,n,i,s,r,o){const a=e.geometry.attributes.position;if(Lh.fromBufferAttribute(a,s),Dh.fromBufferAttribute(a,r),n.distanceSqToSegment(Lh,Dh,Xd,fx)>i)return;Xd.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Xd);if(!(c<t.near||c>t.far))return{distance:c,point:fx.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}const px=new H,mx=new H;class bP extends MP{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)px.fromBufferAttribute(n,s),mx.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+px.distanceTo(mx);t.setAttribute("lineDistance",new sn(i,1))}else Zt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class rS extends Hn{constructor(t=[],n=ro,i,s,r,o,a,l,c,h){super(t,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pa extends Hn{constructor(t,n,i=cs,s,r,o,a=bn,l=bn,c,h=$s,d=1){if(h!==$s&&h!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:n,depth:d};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new fm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class EP extends pa{constructor(t,n=cs,i=ro,s,r,o=bn,a=bn,l,c=$s){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class oS extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Hl extends Jn{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;g("z","y","x",-1,-1,i,n,t,o,r,0),g("z","y","x",1,-1,i,n,-t,o,r,1),g("x","z","y",1,1,t,i,n,s,o,2),g("x","z","y",1,-1,t,i,-n,s,o,3),g("x","y","z",1,-1,t,n,i,s,r,4),g("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(d,2));function g(_,m,p,v,y,M,C,w,R,S,T){const O=M/R,L=C/S,I=M/2,V=C/2,Y=w/2,U=R+1,k=S+1;let B=0,j=0;const st=new H;for(let vt=0;vt<k;vt++){const ht=vt*L-V;for(let tt=0;tt<U;tt++){const Jt=tt*O-I;st[_]=Jt*v,st[m]=ht*y,st[p]=Y,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[p]=w>0?1:-1,h.push(st.x,st.y,st.z),d.push(tt/R),d.push(1-vt/S),B+=1}}for(let vt=0;vt<S;vt++)for(let ht=0;ht<R;ht++){const tt=f+ht+U*vt,Jt=f+ht+U*(vt+1),$t=f+(ht+1)+U*(vt+1),jt=f+(ht+1)+U*vt;l.push(tt,Jt,jt),l.push(Jt,$t,jt),j+=6}a.addGroup(u,j,T),u+=j,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Mi extends Jn{constructor(t=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let g=0;const _=[],m=i/2;let p=0;v(),o===!1&&(t>0&&y(!0),n>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new sn(d,3)),this.setAttribute("normal",new sn(f,3)),this.setAttribute("uv",new sn(u,2));function v(){const M=new H,C=new H;let w=0;const R=(n-t)/i;for(let S=0;S<=r;S++){const T=[],O=S/r,L=O*(n-t)+t;for(let I=0;I<=s;I++){const V=I/s,Y=V*l+a,U=Math.sin(Y),k=Math.cos(Y);C.x=L*U,C.y=-O*i+m,C.z=L*k,d.push(C.x,C.y,C.z),M.set(U,R,k).normalize(),f.push(M.x,M.y,M.z),u.push(V,1-O),T.push(g++)}_.push(T)}for(let S=0;S<s;S++)for(let T=0;T<r;T++){const O=_[T][S],L=_[T+1][S],I=_[T+1][S+1],V=_[T][S+1];(t>0||T!==0)&&(h.push(O,L,V),w+=3),(n>0||T!==r-1)&&(h.push(L,I,V),w+=3)}c.addGroup(p,w,0),p+=w}function y(M){const C=g,w=new te,R=new H;let S=0;const T=M===!0?t:n,O=M===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,m*O,0),f.push(0,O,0),u.push(.5,.5),g++;const L=g;for(let I=0;I<=s;I++){const Y=I/s*l+a,U=Math.cos(Y),k=Math.sin(Y);R.x=T*k,R.y=m*O,R.z=T*U,d.push(R.x,R.y,R.z),f.push(0,O,0),w.x=U*.5+.5,w.y=k*.5*O+.5,u.push(w.x,w.y),g++}for(let I=0;I<s;I++){const V=C+I,Y=L+I;M===!0?h.push(Y,Y+1,V):h.push(Y+1,Y,V),S+=3}c.addGroup(p,S,M===!0?1:2),p+=S}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vl extends Jn{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=n/l,u=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const v=p*f-o;for(let y=0;y<c;y++){const M=y*d-r;g.push(M,-v,0),_.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){const y=v+c*p,M=v+c*(p+1),C=v+1+c*(p+1),w=v+1+c*p;u.push(y,M,w),u.push(M,C,w)}this.setIndex(u),this.setAttribute("position",new sn(g,3)),this.setAttribute("normal",new sn(_,3)),this.setAttribute("uv",new sn(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vl(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ih extends Jn{constructor(t=.5,n=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let d=t;const f=(n-t)/s,u=new H,g=new te;for(let _=0;_<=s;_++){for(let m=0;m<=i;m++){const p=r+m/i*o;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/n+1)/2,g.y=(u.y/n+1)/2,h.push(g.x,g.y)}d+=f}for(let _=0;_<s;_++){const m=_*(i+1);for(let p=0;p<i;p++){const v=p+m,y=v,M=v+i+1,C=v+i+2,w=v+1;a.push(y,M,w),a.push(M,C,w)}}this.setIndex(a),this.setAttribute("position",new sn(l,3)),this.setAttribute("normal",new sn(c,3)),this.setAttribute("uv",new sn(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ih(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class vl extends Jn{constructor(t=1,n=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],d=[],f=new H,u=new H,g=new H;for(let _=0;_<=i;_++){const m=o+_/i*a;for(let p=0;p<=s;p++){const v=p/s*r;u.x=(t+n*Math.cos(m))*Math.cos(v),u.y=(t+n*Math.cos(m))*Math.sin(v),u.z=n*Math.sin(m),c.push(u.x,u.y,u.z),f.x=t*Math.cos(v),f.y=t*Math.sin(v),g.subVectors(u,f).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(_/i)}}for(let _=1;_<=i;_++)for(let m=1;m<=s;m++){const p=(s+1)*_+m-1,v=(s+1)*(_-1)+m-1,y=(s+1)*(_-1)+m,M=(s+1)*_+m;l.push(p,v,M),l.push(v,y,M)}this.setIndex(l),this.setAttribute("position",new sn(c,3)),this.setAttribute("normal",new sn(h,3)),this.setAttribute("uv",new sn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vl(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function ma(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];if(_x(s))s.isRenderTargetTexture?(Zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(_x(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Nn(e){const t={};for(let n=0;n<e.length;n++){const i=ma(e[n]);for(const s in i)t[s]=i[s]}return t}function _x(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function wP(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function aS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:_e.workingColorSpace}const TP={clone:ma,merge:Nn};var AP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hs extends xa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=AP,this.fragmentShader=RP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ma(t.uniforms),this.uniformsGroups=wP(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class CP extends hs{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Qa extends xa{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yp,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class PP extends xa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class LP extends xa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Jh extends vn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new fe(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class DP extends Jh{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new fe(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const $d=new nn,gx=new H,xx=new H;class lS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mm,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;gx.setFromMatrixPosition(t.matrixWorld),n.position.copy(gx),xx.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(xx),n.updateMatrixWorld(),$d.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($d,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ll||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply($d)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Kc=new H,Zc=new br,$i=new H;class cS extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=ns,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Kc,Zc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Zc,$i.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Kc,Zc,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kc,Zc,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const lr=new H,vx=new te,yx=new te;class si extends cS{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Mp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(mh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Mp*2*Math.atan(Math.tan(mh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(lr.x,lr.y).multiplyScalar(-t/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-t/lr.z)}getViewSize(t,n){return this.getViewBounds(t,vx,yx),n.subVectors(yx,vx)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(mh*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class IP extends lS{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class OP extends Jh{constructor(t,n,i=0,s=2){super(t,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new IP}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,n){return super.copy(t,n),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class _m extends cS{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class UP extends lS{constructor(){super(new _m(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sx extends Jh{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new UP}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class NP extends Jh{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vo=-90,Go=1;class FP extends vn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new si(Vo,Go,t,n);s.layers=this.layers,this.add(s);const r=new si(Vo,Go,t,n);r.layers=this.layers,this.add(r);const o=new si(Vo,Go,t,n);o.layers=this.layers,this.add(o);const a=new si(Vo,Go,t,n);a.layers=this.layers,this.add(a);const l=new si(Vo,Go,t,n);l.layers=this.layers,this.add(l);const c=new si(Vo,Go,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(t===ns)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ll)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,f,u),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class BP extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Mx{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=de(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(de(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Mm=class Mm{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){const r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};Mm.prototype.isMatrix2=!0;let bx=Mm;class kP extends bP{constructor(t=10,n=10,i=4473924,s=8947848){i=new fe(i),s=new fe(s);const r=n/2,o=t/n,a=t/2,l=[],c=[];for(let f=0,u=0,g=-a;f<=n;f++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const _=f===r?i:s;_.toArray(c,u),u+=3,_.toArray(c,u),u+=3,_.toArray(c,u),u+=3,_.toArray(c,u),u+=3}const h=new Jn;h.setAttribute("position",new sn(l,3)),h.setAttribute("color",new sn(c,3));const d=new sS({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zP extends Tr{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){Zt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function Ex(e,t,n,i){const s=HP(i);switch(n){case jy:return e*t;case Ky:return e*t/s.components*s.byteLength;case lm:return e*t/s.components*s.byteLength;case oo:return e*t*2/s.components*s.byteLength;case cm:return e*t*2/s.components*s.byteLength;case qy:return e*t*3/s.components*s.byteLength;case Di:return e*t*4/s.components*s.byteLength;case hm:return e*t*4/s.components*s.byteLength;case uh:case dh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case fh:case ph:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Xf:case Yf:return Math.max(e,16)*Math.max(t,8)/4;case Wf:case $f:return Math.max(e,8)*Math.max(t,8)/2;case jf:case qf:case Zf:case Jf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Kf:case Th:case Qf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case tp:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ep:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case np:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ip:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case sp:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case rp:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case op:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ap:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case lp:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case cp:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case hp:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case up:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case dp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case fp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case pp:case mp:case _p:return Math.ceil(e/4)*Math.ceil(t/4)*16;case gp:case xp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Ah:case vp:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function HP(e){switch(e){case ri:case Wy:return{byteLength:1,components:1};case Cl:case Xy:case Xs:return{byteLength:2,components:1};case om:case am:return{byteLength:2,components:4};case cs:case rm:case es:return{byteLength:4,components:1};case $y:case Yy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:im}}));typeof window<"u"&&(window.__THREE__?Zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=im);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hS(){let e=null,t=!1,n=null,i=null;function s(r,o){n(r,o),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function VP(e){const t=new WeakMap;function n(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=e.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=e.HALF_FLOAT:u=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=e.SHORT;else if(c instanceof Uint32Array)u=e.UNSIGNED_INT;else if(c instanceof Int32Array)u=e.INT;else if(c instanceof Int8Array)u=e.BYTE;else if(c instanceof Uint8Array)u=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,a),d.length===0)e.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){const g=d[f],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){const _=d[u];e.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(e.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var GP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,WP=`#ifdef USE_ALPHAHASH
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
#endif`,XP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$P=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,YP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jP=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qP=`#ifdef USE_AOMAP
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
#endif`,KP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZP=`#ifdef USE_BATCHING
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
#endif`,JP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,QP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eL=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nL=`#ifdef USE_IRIDESCENCE
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
#endif`,iL=`#ifdef USE_BUMPMAP
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
#endif`,sL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,hL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dL=`#define PI 3.141592653589793
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
} // validated`,fL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pL=`vec3 transformedNormal = objectNormal;
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
#endif`,mL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_L=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,xL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vL="gl_FragColor = linearToOutputTexel( gl_FragColor );",yL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SL=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,ML=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,bL=`#ifdef USE_ENVMAP
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
#endif`,EL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wL=`#ifdef USE_ENVMAP
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
#endif`,TL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PL=`#ifdef USE_GRADIENTMAP
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
}`,LL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,IL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OL=`uniform bool receiveShadow;
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
#endif
#include <lightprobes_pars_fragment>`,UL=`#ifdef USE_ENVMAP
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
#endif`,NL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,kL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zL=`PhysicalMaterial material;
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
#endif`,HL=`uniform sampler2D dfgLUT;
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
		return 0.5 / max( gv + gl, EPSILON );
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
}`,VL=`
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GL=`#if defined( RE_IndirectDiffuse )
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
#endif`,WL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XL=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,$L=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QL=`#if defined( USE_POINTS_UV )
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
#endif`,tD=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eD=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,iD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rD=`#ifdef USE_MORPHTARGETS
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
#endif`,oD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,lD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,cD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,dD=`#ifdef USE_NORMALMAP
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
#endif`,fD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,pD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,mD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_D=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gD=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,MD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ED=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,TD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,AD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
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
#endif`,RD=`float getShadowMask() {
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
}`,CD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PD=`#ifdef USE_SKINNING
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
#endif`,LD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DD=`#ifdef USE_SKINNING
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
#endif`,ID=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ND=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,FD=`#ifdef USE_TRANSMISSION
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
#endif`,BD=`#ifdef USE_TRANSMISSION
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
#endif`,kD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,WD=`uniform sampler2D t2D;
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
}`,XD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$D=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qD=`#include <common>
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
}`,KD=`#if DEPTH_PACKING == 3200
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
}`,ZD=`#define DISTANCE
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
}`,JD=`#define DISTANCE
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
}`,QD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tI=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eI=`uniform float scale;
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
}`,nI=`uniform vec3 diffuse;
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
}`,iI=`#include <common>
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
}`,sI=`uniform vec3 diffuse;
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
}`,rI=`#define LAMBERT
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
}`,oI=`#define LAMBERT
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
}`,aI=`#define MATCAP
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
}`,lI=`#define MATCAP
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
}`,cI=`#define NORMAL
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
}`,hI=`#define NORMAL
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
}`,uI=`#define PHONG
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
}`,dI=`#define PHONG
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
}`,fI=`#define STANDARD
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
}`,pI=`#define STANDARD
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
}`,mI=`#define TOON
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
}`,_I=`#define TOON
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
}`,gI=`uniform float size;
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
}`,xI=`uniform vec3 diffuse;
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
}`,vI=`#include <common>
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
}`,yI=`uniform vec3 color;
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
}`,SI=`uniform float rotation;
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
}`,MI=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:GP,alphahash_pars_fragment:WP,alphamap_fragment:XP,alphamap_pars_fragment:$P,alphatest_fragment:YP,alphatest_pars_fragment:jP,aomap_fragment:qP,aomap_pars_fragment:KP,batching_pars_vertex:ZP,batching_vertex:JP,begin_vertex:QP,beginnormal_vertex:tL,bsdfs:eL,iridescence_fragment:nL,bumpmap_pars_fragment:iL,clipping_planes_fragment:sL,clipping_planes_pars_fragment:rL,clipping_planes_pars_vertex:oL,clipping_planes_vertex:aL,color_fragment:lL,color_pars_fragment:cL,color_pars_vertex:hL,color_vertex:uL,common:dL,cube_uv_reflection_fragment:fL,defaultnormal_vertex:pL,displacementmap_pars_vertex:mL,displacementmap_vertex:_L,emissivemap_fragment:gL,emissivemap_pars_fragment:xL,colorspace_fragment:vL,colorspace_pars_fragment:yL,envmap_fragment:SL,envmap_common_pars_fragment:ML,envmap_pars_fragment:bL,envmap_pars_vertex:EL,envmap_physical_pars_fragment:UL,envmap_vertex:wL,fog_vertex:TL,fog_pars_vertex:AL,fog_fragment:RL,fog_pars_fragment:CL,gradientmap_pars_fragment:PL,lightmap_pars_fragment:LL,lights_lambert_fragment:DL,lights_lambert_pars_fragment:IL,lights_pars_begin:OL,lights_toon_fragment:NL,lights_toon_pars_fragment:FL,lights_phong_fragment:BL,lights_phong_pars_fragment:kL,lights_physical_fragment:zL,lights_physical_pars_fragment:HL,lights_fragment_begin:VL,lights_fragment_maps:GL,lights_fragment_end:WL,lightprobes_pars_fragment:XL,logdepthbuf_fragment:$L,logdepthbuf_pars_fragment:YL,logdepthbuf_pars_vertex:jL,logdepthbuf_vertex:qL,map_fragment:KL,map_pars_fragment:ZL,map_particle_fragment:JL,map_particle_pars_fragment:QL,metalnessmap_fragment:tD,metalnessmap_pars_fragment:eD,morphinstance_vertex:nD,morphcolor_vertex:iD,morphnormal_vertex:sD,morphtarget_pars_vertex:rD,morphtarget_vertex:oD,normal_fragment_begin:aD,normal_fragment_maps:lD,normal_pars_fragment:cD,normal_pars_vertex:hD,normal_vertex:uD,normalmap_pars_fragment:dD,clearcoat_normal_fragment_begin:fD,clearcoat_normal_fragment_maps:pD,clearcoat_pars_fragment:mD,iridescence_pars_fragment:_D,opaque_fragment:gD,packing:xD,premultiplied_alpha_fragment:vD,project_vertex:yD,dithering_fragment:SD,dithering_pars_fragment:MD,roughnessmap_fragment:bD,roughnessmap_pars_fragment:ED,shadowmap_pars_fragment:wD,shadowmap_pars_vertex:TD,shadowmap_vertex:AD,shadowmask_pars_fragment:RD,skinbase_vertex:CD,skinning_pars_vertex:PD,skinning_vertex:LD,skinnormal_vertex:DD,specularmap_fragment:ID,specularmap_pars_fragment:OD,tonemapping_fragment:UD,tonemapping_pars_fragment:ND,transmission_fragment:FD,transmission_pars_fragment:BD,uv_pars_fragment:kD,uv_pars_vertex:zD,uv_vertex:HD,worldpos_vertex:VD,background_vert:GD,background_frag:WD,backgroundCube_vert:XD,backgroundCube_frag:$D,cube_vert:YD,cube_frag:jD,depth_vert:qD,depth_frag:KD,distance_vert:ZD,distance_frag:JD,equirect_vert:QD,equirect_frag:tI,linedashed_vert:eI,linedashed_frag:nI,meshbasic_vert:iI,meshbasic_frag:sI,meshlambert_vert:rI,meshlambert_frag:oI,meshmatcap_vert:aI,meshmatcap_frag:lI,meshnormal_vert:cI,meshnormal_frag:hI,meshphong_vert:uI,meshphong_frag:dI,meshphysical_vert:fI,meshphysical_frag:pI,meshtoon_vert:mI,meshtoon_frag:_I,points_vert:gI,points_frag:xI,shadow_vert:vI,shadow_frag:yI,sprite_vert:SI,sprite_frag:MI},Ct={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ne}},envmap:{envMap:{value:null},envMapRotation:{value:new ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ne},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0},uvTransform:{value:new ne}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ne},alphaMap:{value:null},alphaMapTransform:{value:new ne},alphaTest:{value:0}}},Qi={basic:{uniforms:Nn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:Nn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new fe(0)},envMapIntensity:{value:1}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:Nn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:Nn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:Nn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new fe(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:Nn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:Nn([Ct.points,Ct.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:Nn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:Nn([Ct.common,Ct.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:Nn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:Nn([Ct.sprite,Ct.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ne}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distance:{uniforms:Nn([Ct.common,Ct.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distance_vert,fragmentShader:le.distance_frag},shadow:{uniforms:Nn([Ct.lights,Ct.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};Qi.physical={uniforms:Nn([Qi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ne},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ne},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ne},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ne},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ne},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ne}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const Jc={r:0,b:0,g:0},bI=new nn,uS=new ne;uS.set(-1,0,0,0,1,0,0,0,1);function EI(e,t,n,i,s,r){const o=new fe(0);let a=s===!0?0:1,l,c,h=null,d=0,f=null;function u(v){let y=v.isScene===!0?v.background:null;if(y&&y.isTexture){const M=v.backgroundBlurriness>0;y=t.get(y,M)}return y}function g(v){let y=!1;const M=u(v);M===null?m(o,a):M&&M.isColor&&(m(M,1),y=!0);const C=e.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function _(v,y){const M=u(y);M&&(M.isCubeTexture||M.mapping===Kh)?(c===void 0&&(c=new Ue(new Hl(1,1,1),new hs({name:"BackgroundCubeMaterial",uniforms:ma(Qi.backgroundCube.uniforms),vertexShader:Qi.backgroundCube.vertexShader,fragmentShader:Qi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(bI.makeRotationFromEuler(y.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(uS),c.material.toneMapped=_e.getTransfer(M.colorSpace)!==Ae,(h!==M||d!==M.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,h=M,d=M.version,f=e.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ue(new Vl(2,2),new hs({name:"BackgroundMaterial",uniforms:ma(Qi.background.uniforms),vertexShader:Qi.background.vertexShader,fragmentShader:Qi.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=_e.getTransfer(M.colorSpace)!==Ae,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||d!==M.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,h=M,d=M.version,f=e.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,y){v.getRGB(Jc,aS(e)),n.buffers.color.setClear(Jc.r,Jc.g,Jc.b,y,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),a=y,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:g,addToRenderList:_,dispose:p}}function wI(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(L,I,V,Y,U){let k=!1;const B=d(L,Y,V,I);r!==B&&(r=B,c(r.object)),k=u(L,Y,V,U),k&&g(L,Y,V,U),U!==null&&t.update(U,e.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,M(L,I,V,Y),U!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function l(){return e.createVertexArray()}function c(L){return e.bindVertexArray(L)}function h(L){return e.deleteVertexArray(L)}function d(L,I,V,Y){const U=Y.wireframe===!0;let k=i[I.id];k===void 0&&(k={},i[I.id]=k);const B=L.isInstancedMesh===!0?L.id:0;let j=k[B];j===void 0&&(j={},k[B]=j);let st=j[V.id];st===void 0&&(st={},j[V.id]=st);let vt=st[U];return vt===void 0&&(vt=f(l()),st[U]=vt),vt}function f(L){const I=[],V=[],Y=[];for(let U=0;U<n;U++)I[U]=0,V[U]=0,Y[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:Y,object:L,attributes:{},index:null}}function u(L,I,V,Y){const U=r.attributes,k=I.attributes;let B=0;const j=V.getAttributes();for(const st in j)if(j[st].location>=0){const ht=U[st];let tt=k[st];if(tt===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(tt=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(tt=L.instanceColor)),ht===void 0||ht.attribute!==tt||tt&&ht.data!==tt.data)return!0;B++}return r.attributesNum!==B||r.index!==Y}function g(L,I,V,Y){const U={},k=I.attributes;let B=0;const j=V.getAttributes();for(const st in j)if(j[st].location>=0){let ht=k[st];ht===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(ht=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(ht=L.instanceColor));const tt={};tt.attribute=ht,ht&&ht.data&&(tt.data=ht.data),U[st]=tt,B++}r.attributes=U,r.attributesNum=B,r.index=Y}function _(){const L=r.newAttributes;for(let I=0,V=L.length;I<V;I++)L[I]=0}function m(L){p(L,0)}function p(L,I){const V=r.newAttributes,Y=r.enabledAttributes,U=r.attributeDivisors;V[L]=1,Y[L]===0&&(e.enableVertexAttribArray(L),Y[L]=1),U[L]!==I&&(e.vertexAttribDivisor(L,I),U[L]=I)}function v(){const L=r.newAttributes,I=r.enabledAttributes;for(let V=0,Y=I.length;V<Y;V++)I[V]!==L[V]&&(e.disableVertexAttribArray(V),I[V]=0)}function y(L,I,V,Y,U,k,B){B===!0?e.vertexAttribIPointer(L,I,V,U,k):e.vertexAttribPointer(L,I,V,Y,U,k)}function M(L,I,V,Y){_();const U=Y.attributes,k=V.getAttributes(),B=I.defaultAttributeValues;for(const j in k){const st=k[j];if(st.location>=0){let vt=U[j];if(vt===void 0&&(j==="instanceMatrix"&&L.instanceMatrix&&(vt=L.instanceMatrix),j==="instanceColor"&&L.instanceColor&&(vt=L.instanceColor)),vt!==void 0){const ht=vt.normalized,tt=vt.itemSize,Jt=t.get(vt);if(Jt===void 0)continue;const $t=Jt.buffer,jt=Jt.type,rt=Jt.bytesPerElement,Tt=jt===e.INT||jt===e.UNSIGNED_INT||vt.gpuType===rm;if(vt.isInterleavedBufferAttribute){const dt=vt.data,Rt=dt.stride,Dt=vt.offset;if(dt.isInstancedInterleavedBuffer){for(let Nt=0;Nt<st.locationSize;Nt++)p(st.location+Nt,dt.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Nt=0;Nt<st.locationSize;Nt++)m(st.location+Nt);e.bindBuffer(e.ARRAY_BUFFER,$t);for(let Nt=0;Nt<st.locationSize;Nt++)y(st.location+Nt,tt/st.locationSize,jt,ht,Rt*rt,(Dt+tt/st.locationSize*Nt)*rt,Tt)}else{if(vt.isInstancedBufferAttribute){for(let dt=0;dt<st.locationSize;dt++)p(st.location+dt,vt.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let dt=0;dt<st.locationSize;dt++)m(st.location+dt);e.bindBuffer(e.ARRAY_BUFFER,$t);for(let dt=0;dt<st.locationSize;dt++)y(st.location+dt,tt/st.locationSize,jt,ht,tt*rt,tt/st.locationSize*dt*rt,Tt)}}else if(B!==void 0){const ht=B[j];if(ht!==void 0)switch(ht.length){case 2:e.vertexAttrib2fv(st.location,ht);break;case 3:e.vertexAttrib3fv(st.location,ht);break;case 4:e.vertexAttrib4fv(st.location,ht);break;default:e.vertexAttrib1fv(st.location,ht)}}}}v()}function C(){T();for(const L in i){const I=i[L];for(const V in I){const Y=I[V];for(const U in Y){const k=Y[U];for(const B in k)h(k[B].object),delete k[B];delete Y[U]}}delete i[L]}}function w(L){if(i[L.id]===void 0)return;const I=i[L.id];for(const V in I){const Y=I[V];for(const U in Y){const k=Y[U];for(const B in k)h(k[B].object),delete k[B];delete Y[U]}}delete i[L.id]}function R(L){for(const I in i){const V=i[I];for(const Y in V){const U=V[Y];if(U[L.id]===void 0)continue;const k=U[L.id];for(const B in k)h(k[B].object),delete k[B];delete U[L.id]}}}function S(L){for(const I in i){const V=i[I],Y=L.isInstancedMesh===!0?L.id:0,U=V[Y];if(U!==void 0){for(const k in U){const B=U[k];for(const j in B)h(B[j].object),delete B[j];delete U[k]}delete V[Y],Object.keys(V).length===0&&delete i[I]}}}function T(){O(),o=!0,r!==s&&(r=s,c(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function TI(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];n.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function AI(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==Di&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const S=R===Xs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==ri&&i.convert(R)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==es&&!S)}function l(R){if(R==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(Zt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),M=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),C=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:M,maxSamples:C,samples:w}}function RI(e){const t=this;let n=null,i=0,s=!1,r=!1;const o=new ur,a=new ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||i!==0||s;return s=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,u){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=e.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const v=r?0:i,y=v*4;let M=p.clippingState||null;l.value=M,M=h(g,f,y,u);for(let C=0;C!==y;++C)M[C]=n[C];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=u+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,M=u;y!==_;++y,M+=4)o.copy(d[y]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}const gr=4,wx=[.125,.215,.35,.446,.526,.582],qr=20,CI=256,tl=new _m,Tx=new fe;let Yd=null,jd=0,qd=0,Kd=!1;const PI=new H;class Ax{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=PI}=r;Yd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Px(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yd,jd,qd),this._renderer.xr.enabled=Kd,t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ro||t.mapping===fa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yd=this._renderer.getRenderTarget(),jd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Kd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Xs,format:Di,colorSpace:Rh,depthBuffer:!1},s=Rx(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rx(t,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=LI(r)),this._blurMaterial=II(r,t,n),this._ggxMaterial=DI(r,t,n)}return s}_compileMaterial(t){const n=new Ue(new Jn,t);this._renderer.compile(n,tl)}_sceneToCubeUV(t,n,i,s,r){const l=new si(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(Tx),d.toneMapping=ss,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new Hl,new iS({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const v=t.background;v?v.isColor&&(m.color.copy(v),t.background=null,p=!0):(m.color.copy(Tx),p=!0);for(let y=0;y<6;y++){const M=y%3;M===0?(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[y],r.y,r.z)):M===1?(l.up.set(0,0,c[y]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[y],r.z)):(l.up.set(0,c[y],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[y]));const C=this._cubeSize;Wo(s,M*C,y>2?C:0,C,C),d.setRenderTarget(s),p&&d.render(_,l),d.render(t,l)}d.toneMapping=u,d.autoClear=f,t.background=v}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===ro||t.mapping===fa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Px()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cx());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Wo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,tl)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=0+c*1.25,u=d*f,{_lodMax:g}=this,_=this._sizeLods[i],m=3*_*(i>g-gr?i-g+gr:0),p=4*(this._cubeSize-_);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=g-n,Wo(r,m,p,3*_,2*_),s.setRenderTarget(r),s.render(a,tl),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Wo(t,m,p,3*_,2*_),s.setRenderTarget(t),s.render(a,tl)}_blur(t,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&xe("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const f=c.uniforms,u=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*qr-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):qr;m>qr&&Zt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qr}`);const p=[];let v=0;for(let R=0;R<qr;++R){const S=R/_,T=Math.exp(-S*S/2);p.push(T),R===0?v+=T:R<m&&(v+=2*T)}for(let R=0;R<p.length;R++)p[R]=p[R]/v;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-i;const M=this._sizeLods[s],C=3*M*(s>y-gr?s-y+gr:0),w=4*(this._cubeSize-M);Wo(n,C,w,3*M,2*M),l.setRenderTarget(n),l.render(d,tl)}}function LI(e){const t=[],n=[],i=[];let s=e;const r=e-gr+1+wx.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>e-gr?l=wx[o-e+gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*u),y=new Float32Array(m*g*u),M=new Float32Array(p*g*u);for(let w=0;w<u;w++){const R=w%3*2/3-1,S=w>2?0:-1,T=[R,S,0,R+2/3,S,0,R+2/3,S+1,0,R,S,0,R+2/3,S+1,0,R,S+1,0];v.set(T,_*g*w),y.set(f,m*g*w);const O=[w,w,w,w,w,w];M.set(O,p*g*w)}const C=new Jn;C.setAttribute("position",new os(v,_)),C.setAttribute("uv",new os(y,m)),C.setAttribute("faceIndex",new os(M,p)),i.push(new Ue(C,null)),s>gr&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Rx(e,t,n){const i=new rs(e,t,n);return i.texture.mapping=Kh,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function DI(e,t,n){return new hs({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CI,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:ks,depthTest:!1,depthWrite:!1})}function II(e,t,n){const i=new Float32Array(qr),s=new H(0,1,0);return new hs({name:"SphericalGaussianBlur",defines:{n:qr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:ks,depthTest:!1,depthWrite:!1})}function Cx(){return new hs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qh(),fragmentShader:`

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
		`,blending:ks,depthTest:!1,depthWrite:!1})}function Px(){return new hs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ks,depthTest:!1,depthWrite:!1})}function Qh(){return`

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
	`}class dS extends rs{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new rS(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Hl(5,5,5),r=new hs({name:"CubemapFromEquirect",uniforms:ma(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:zn,blending:ks});r.uniforms.tEquirect.value=n;const o=new Ue(s,r),a=n.minFilter;return n.minFilter===Zr&&(n.minFilter=Ln),new FP(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}}function OI(e){let t=new WeakMap,n=new WeakMap,i=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===vd||u===yd)if(t.has(f)){const g=t.get(f).texture;return a(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const _=new dS(g.height);return _.fromEquirectangularTexture(e,f),t.set(f,_),f.addEventListener("dispose",c),a(_.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const u=f.mapping,g=u===vd||u===yd,_=u===ro||u===fa;if(g||_){let m=n.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Ax(e)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const v=f.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new Ax(e)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",h),m.texture):null}}}return f}function a(f,u){return u===vd?f.mapping=ro:u===yd&&(f.mapping=fa),f}function l(f){let u=0;const g=6;for(let _=0;_<g;_++)f[_]!==void 0&&u++;return u===g}function c(f){const u=f.target;u.removeEventListener("dispose",c);const g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const g=n.get(u);g!==void 0&&(n.delete(u),g.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function UI(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&Sp("WebGLRenderer: "+i+" extension not supported."),s}}}function NI(e,t,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const u in f)t.update(f[u],e.ARRAY_BUFFER)}function c(d){const f=[],u=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(u!==null){const v=u.array;_=u.version;for(let y=0,M=v.length;y<M;y+=3){const C=v[y+0],w=v[y+1],R=v[y+2];f.push(C,w,w,R,R,C)}}else{const v=g.array;_=g.version;for(let y=0,M=v.length/3-1;y<M;y+=3){const C=y+0,w=y+1,R=y+2;f.push(C,w,w,R,R,C)}}const m=new(g.count>=65535?nS:eS)(f,1);m.version=_;const p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function FI(e,t,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){e.drawElements(i,f,r,d*o),n.update(f,i,1)}function c(d,f,u){u!==0&&(e.drawElementsInstanced(i,f,r,d*o,u),n.update(f,i,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,u);let _=0;for(let m=0;m<u;m++)_+=f[m];n.update(_,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function BI(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:xe("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function kI(e,t,n){const i=new WeakMap,s=new tn;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let O=function(){S.dispose(),i.delete(a),a.removeEventListener("dispose",O)};var u=O;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let C=a.attributes.position.count*M,w=1;C>t.maxTextureSize&&(w=Math.ceil(C/t.maxTextureSize),C=t.maxTextureSize);const R=new Float32Array(C*w*4*d),S=new Jy(R,C,w,d);S.type=es,S.needsUpdate=!0;const T=M*4;for(let L=0;L<d;L++){const I=p[L],V=v[L],Y=y[L],U=C*w*4*L;for(let k=0;k<I.count;k++){const B=k*T;g===!0&&(s.fromBufferAttribute(I,k),R[U+B+0]=s.x,R[U+B+1]=s.y,R[U+B+2]=s.z,R[U+B+3]=0),_===!0&&(s.fromBufferAttribute(V,k),R[U+B+4]=s.x,R[U+B+5]=s.y,R[U+B+6]=s.z,R[U+B+7]=0),m===!0&&(s.fromBufferAttribute(Y,k),R[U+B+8]=s.x,R[U+B+9]=s.y,R[U+B+10]=s.z,R[U+B+11]=Y.itemSize===4?s.w:1)}}f={count:d,texture:S,size:new te(C,w)},i.set(a,f),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(e,"morphTargetBaseInfluence",_),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function zI(e,t,n,i,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}const HI={[Fy]:"LINEAR_TONE_MAPPING",[By]:"REINHARD_TONE_MAPPING",[ky]:"CINEON_TONE_MAPPING",[sm]:"ACES_FILMIC_TONE_MAPPING",[Hy]:"AGX_TONE_MAPPING",[Vy]:"NEUTRAL_TONE_MAPPING",[zy]:"CUSTOM_TONE_MAPPING"};function VI(e,t,n,i,s){const r=new rs(t,n,{type:e,depthBuffer:i,stencilBuffer:s,depthTexture:i?new pa(t,n):void 0}),o=new rs(t,n,{type:Xs,depthBuffer:!1,stencilBuffer:!1}),a=new Jn;a.setAttribute("position",new sn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new sn([0,2,0,0,2,0],2));const l=new CP({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ue(a,l),h=new _m(-1,1,1,-1,0,1);let d=null,f=null,u=!1,g,_=null,m=[],p=!1;this.setSize=function(v,y){r.setSize(v,y),o.setSize(v,y);for(let M=0;M<m.length;M++){const C=m[M];C.setSize&&C.setSize(v,y)}},this.setEffects=function(v){m=v,p=m.length>0&&m[0].isRenderPass===!0;const y=r.width,M=r.height;for(let C=0;C<m.length;C++){const w=m[C];w.setSize&&w.setSize(y,M)}},this.begin=function(v,y){if(u||v.toneMapping===ss&&m.length===0)return!1;if(_=y,y!==null){const M=y.width,C=y.height;(r.width!==M||r.height!==C)&&this.setSize(M,C)}return p===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=ss,!0},this.hasRenderPass=function(){return p},this.end=function(v,y){v.toneMapping=g,u=!0;let M=r,C=o;for(let w=0;w<m.length;w++){const R=m[w];if(R.enabled!==!1&&(R.render(v,C,M,y),R.needsSwap!==!1)){const S=M;M=C,C=S}}if(d!==v.outputColorSpace||f!==v.toneMapping){d=v.outputColorSpace,f=v.toneMapping,l.defines={},_e.getTransfer(d)===Ae&&(l.defines.SRGB_TRANSFER="");const w=HI[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,v.setRenderTarget(_),v.render(c,h),_=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const fS=new Hn,bp=new pa(1,1),pS=new Jy,mS=new sP,_S=new rS,Lx=[],Dx=[],Ix=new Float32Array(16),Ox=new Float32Array(9),Ux=new Float32Array(4);function va(e,t,n){const i=e[0];if(i<=0||i>0)return e;const s=t*n;let r=Lx[s];if(r===void 0&&(r=new Float32Array(s),Lx[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function mn(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function _n(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function tu(e,t){let n=Dx[t];n===void 0&&(n=new Int32Array(t),Dx[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function GI(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function WI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;e.uniform2fv(this.addr,t),_n(n,t)}}function XI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(mn(n,t))return;e.uniform3fv(this.addr,t),_n(n,t)}}function $I(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;e.uniform4fv(this.addr,t),_n(n,t)}}function YI(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(mn(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),_n(n,t)}else{if(mn(n,i))return;Ux.set(i),e.uniformMatrix2fv(this.addr,!1,Ux),_n(n,i)}}function jI(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(mn(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),_n(n,t)}else{if(mn(n,i))return;Ox.set(i),e.uniformMatrix3fv(this.addr,!1,Ox),_n(n,i)}}function qI(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(mn(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),_n(n,t)}else{if(mn(n,i))return;Ix.set(i),e.uniformMatrix4fv(this.addr,!1,Ix),_n(n,i)}}function KI(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ZI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;e.uniform2iv(this.addr,t),_n(n,t)}}function JI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;e.uniform3iv(this.addr,t),_n(n,t)}}function QI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;e.uniform4iv(this.addr,t),_n(n,t)}}function t2(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function e2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(mn(n,t))return;e.uniform2uiv(this.addr,t),_n(n,t)}}function n2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(mn(n,t))return;e.uniform3uiv(this.addr,t),_n(n,t)}}function i2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(mn(n,t))return;e.uniform4uiv(this.addr,t),_n(n,t)}}function s2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(bp.compareFunction=n.isReversedDepthBuffer()?dm:um,r=bp):r=fS,n.setTexture2D(t||r,s)}function r2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||mS,s)}function o2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||_S,s)}function a2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||pS,s)}function l2(e){switch(e){case 5126:return GI;case 35664:return WI;case 35665:return XI;case 35666:return $I;case 35674:return YI;case 35675:return jI;case 35676:return qI;case 5124:case 35670:return KI;case 35667:case 35671:return ZI;case 35668:case 35672:return JI;case 35669:case 35673:return QI;case 5125:return t2;case 36294:return e2;case 36295:return n2;case 36296:return i2;case 35678:case 36198:case 36298:case 36306:case 35682:return s2;case 35679:case 36299:case 36307:return r2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return a2}}function c2(e,t){e.uniform1fv(this.addr,t)}function h2(e,t){const n=va(t,this.size,2);e.uniform2fv(this.addr,n)}function u2(e,t){const n=va(t,this.size,3);e.uniform3fv(this.addr,n)}function d2(e,t){const n=va(t,this.size,4);e.uniform4fv(this.addr,n)}function f2(e,t){const n=va(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function p2(e,t){const n=va(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function m2(e,t){const n=va(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function _2(e,t){e.uniform1iv(this.addr,t)}function g2(e,t){e.uniform2iv(this.addr,t)}function x2(e,t){e.uniform3iv(this.addr,t)}function v2(e,t){e.uniform4iv(this.addr,t)}function y2(e,t){e.uniform1uiv(this.addr,t)}function S2(e,t){e.uniform2uiv(this.addr,t)}function M2(e,t){e.uniform3uiv(this.addr,t)}function b2(e,t){e.uniform4uiv(this.addr,t)}function E2(e,t,n){const i=this.cache,s=t.length,r=tu(n,s);mn(i,r)||(e.uniform1iv(this.addr,r),_n(i,r));let o;this.type===e.SAMPLER_2D_SHADOW?o=bp:o=fS;for(let a=0;a!==s;++a)n.setTexture2D(t[a]||o,r[a])}function w2(e,t,n){const i=this.cache,s=t.length,r=tu(n,s);mn(i,r)||(e.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||mS,r[o])}function T2(e,t,n){const i=this.cache,s=t.length,r=tu(n,s);mn(i,r)||(e.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||_S,r[o])}function A2(e,t,n){const i=this.cache,s=t.length,r=tu(n,s);mn(i,r)||(e.uniform1iv(this.addr,r),_n(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||pS,r[o])}function R2(e){switch(e){case 5126:return c2;case 35664:return h2;case 35665:return u2;case 35666:return d2;case 35674:return f2;case 35675:return p2;case 35676:return m2;case 5124:case 35670:return _2;case 35667:case 35671:return g2;case 35668:case 35672:return x2;case 35669:case 35673:return v2;case 5125:return y2;case 36294:return S2;case 36295:return M2;case 36296:return b2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return w2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return A2}}class C2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=l2(n.type)}}class P2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=R2(n.type)}}class L2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,n[a.id],i)}}}const Zd=/(\w+)(\])?(\[|\.)?/g;function Nx(e,t){e.seq.push(t),e.map[t.id]=t}function D2(e,t,n){const i=e.name,s=i.length;for(Zd.lastIndex=0;;){const r=Zd.exec(i),o=Zd.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Nx(n,c===void 0?new C2(a,e,t):new P2(a,e,t));break}else{let d=n.map[a];d===void 0&&(d=new L2(a),Nx(n,d)),n=d}}}class _h{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(n,o),l=t.getUniformLocation(n,a.name);D2(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in n&&i.push(o)}return i}}function Fx(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const I2=37297;let O2=0;function U2(e,t){const n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Bx=new ne;function N2(e){_e._getMatrix(Bx,_e.workingColorSpace,e);const t=`mat3( ${Bx.elements.map(n=>n.toFixed(4))} )`;switch(_e.getTransfer(e)){case Ch:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return Zt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function kx(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+U2(e.getShaderSource(t),a)}else return r}function F2(e,t){const n=N2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const B2={[Fy]:"Linear",[By]:"Reinhard",[ky]:"Cineon",[sm]:"ACESFilmic",[Hy]:"AgX",[Vy]:"Neutral",[zy]:"Custom"};function k2(e,t){const n=B2[t];return n===void 0?(Zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Qc=new H;function z2(){_e.getLuminanceCoefficients(Qc);const e=Qc.x.toFixed(4),t=Qc.y.toFixed(4),n=Qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function V2(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function G2(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(t,s),o=r.name;let a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function ll(e){return e!==""}function zx(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hx(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(e){return e.replace(W2,$2)}const X2=new Map;function $2(e,t){let n=le[t];if(n===void 0){const i=X2.get(t);if(i!==void 0)n=le[i],Zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ep(n)}const Y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vx(e){return e.replace(Y2,j2)}function j2(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gx(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const q2={[hh]:"SHADOWMAP_TYPE_PCF",[ol]:"SHADOWMAP_TYPE_VSM"};function K2(e){return q2[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Z2={[ro]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE",[Kh]:"ENVMAP_TYPE_CUBE_UV"};function J2(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":Z2[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const Q2={[fa]:"ENVMAP_MODE_REFRACTION"};function t3(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Q2[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const e3={[Ny]:"ENVMAP_BLENDING_MULTIPLY",[NC]:"ENVMAP_BLENDING_MIX",[FC]:"ENVMAP_BLENDING_ADD"};function n3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":e3[e.combine]||"ENVMAP_BLENDING_NONE"}function i3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function s3(e,t,n,i){const s=e.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=K2(n),c=J2(n),h=t3(n),d=n3(n),f=i3(n),u=H2(n),g=V2(r),_=s.createProgram();let m,p,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ll).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ll).join(`
`),p.length>0&&(p+=`
`)):(m=[Gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),p=[Gx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ss?"#define TONE_MAPPING":"",n.toneMapping!==ss?le.tonemapping_pars_fragment:"",n.toneMapping!==ss?k2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,F2("linearToOutputTexel",n.outputColorSpace),z2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ll).join(`
`)),o=Ep(o),o=zx(o,n),o=Hx(o,n),a=Ep(a),a=zx(a,n),a=Hx(a,n),o=Vx(o),a=Vx(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=v+m+o,M=v+p+a,C=Fx(s,s.VERTEX_SHADER,y),w=Fx(s,s.FRAGMENT_SHADER,M);s.attachShader(_,C),s.attachShader(_,w),n.index0AttributeName!==void 0?s.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(L){if(e.debug.checkShaderErrors){const I=s.getProgramInfoLog(_)||"",V=s.getShaderInfoLog(C)||"",Y=s.getShaderInfoLog(w)||"",U=I.trim(),k=V.trim(),B=Y.trim();let j=!0,st=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(j=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,_,C,w);else{const vt=kx(s,C,"vertex"),ht=kx(s,w,"fragment");xe("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+U+`
`+vt+`
`+ht)}else U!==""?Zt("WebGLProgram: Program Info Log:",U):(k===""||B==="")&&(st=!1);st&&(L.diagnostics={runnable:j,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:B,prefix:p}})}s.deleteShader(C),s.deleteShader(w),S=new _h(s,_),T=G2(s,_)}let S;this.getUniforms=function(){return S===void 0&&R(this),S};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=s.getProgramParameter(_,I2)),O},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=O2++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=w,this}let r3=0;class o3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new a3(t),n.set(t,i)),i}}class a3{constructor(t){this.id=r3++,this.code=t,this.usedTimes=0}}function l3(e){return e===oo||e===Th||e===Ah}function c3(e,t,n,i,s,r){const o=new Qy,a=new o3,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,T,O,L,I,V){const Y=L.fog,U=I.geometry,k=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?L.environment:null,B=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,j=t.get(S.envMap||k,B),st=j&&j.mapping===Kh?j.image.height:null,vt=u[S.type];S.precision!==null&&(f=i.getMaxPrecision(S.precision),f!==S.precision&&Zt("WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ht=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,tt=ht!==void 0?ht.length:0;let Jt=0;U.morphAttributes.position!==void 0&&(Jt=1),U.morphAttributes.normal!==void 0&&(Jt=2),U.morphAttributes.color!==void 0&&(Jt=3);let $t,jt,rt,Tt;if(vt){const ie=Qi[vt];$t=ie.vertexShader,jt=ie.fragmentShader}else $t=S.vertexShader,jt=S.fragmentShader,a.update(S),rt=a.getVertexShaderID(S),Tt=a.getFragmentShaderID(S);const dt=e.getRenderTarget(),Rt=e.state.buffers.depth.getReversed(),Dt=I.isInstancedMesh===!0,Nt=I.isBatchedMesh===!0,P=!!S.map,D=!!S.matcap,W=!!j,nt=!!S.aoMap,K=!!S.lightMap,et=!!S.bumpMap,ut=!!S.normalMap,ft=!!S.displacementMap,A=!!S.emissiveMap,ot=!!S.metalnessMap,gt=!!S.roughnessMap,ct=S.anisotropy>0,Z=S.clearcoat>0,At=S.dispersion>0,E=S.iridescence>0,x=S.sheen>0,F=S.transmission>0,q=ct&&!!S.anisotropyMap,it=Z&&!!S.clearcoatMap,pt=Z&&!!S.clearcoatNormalMap,_t=Z&&!!S.clearcoatRoughnessMap,Q=E&&!!S.iridescenceMap,lt=E&&!!S.iridescenceThicknessMap,xt=x&&!!S.sheenColorMap,wt=x&&!!S.sheenRoughnessMap,St=!!S.specularMap,yt=!!S.specularColorMap,qt=!!S.specularIntensityMap,Yt=F&&!!S.transmissionMap,ae=F&&!!S.thicknessMap,N=!!S.gradientMap,Mt=!!S.alphaMap,at=S.alphaTest>0,It=!!S.alphaHash,bt=!!S.extensions;let mt=ss;S.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(mt=e.toneMapping);const Vt={shaderID:vt,shaderType:S.type,shaderName:S.name,vertexShader:$t,fragmentShader:jt,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:Tt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Nt,batchingColor:Nt&&I._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&I.instanceColor!==null,instancingMorph:Dt&&I.morphTexture!==null,outputColorSpace:dt===null?e.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:_e.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:P,matcap:D,envMap:W,envMapMode:W&&j.mapping,envMapCubeUVHeight:st,aoMap:nt,lightMap:K,bumpMap:et,normalMap:ut,displacementMap:ft,emissiveMap:A,normalMapObjectSpace:ut&&S.normalMapType===zC,normalMapTangentSpace:ut&&S.normalMapType===yp,packedNormalMap:ut&&S.normalMapType===yp&&l3(S.normalMap.format),metalnessMap:ot,roughnessMap:gt,anisotropy:ct,anisotropyMap:q,clearcoat:Z,clearcoatMap:it,clearcoatNormalMap:pt,clearcoatRoughnessMap:_t,dispersion:At,iridescence:E,iridescenceMap:Q,iridescenceThicknessMap:lt,sheen:x,sheenColorMap:xt,sheenRoughnessMap:wt,specularMap:St,specularColorMap:yt,specularIntensityMap:qt,transmission:F,transmissionMap:Yt,thicknessMap:ae,gradientMap:N,opaque:S.transparent===!1&&S.blending===ra&&S.alphaToCoverage===!1,alphaMap:Mt,alphaTest:at,alphaHash:It,combine:S.combine,mapUv:P&&g(S.map.channel),aoMapUv:nt&&g(S.aoMap.channel),lightMapUv:K&&g(S.lightMap.channel),bumpMapUv:et&&g(S.bumpMap.channel),normalMapUv:ut&&g(S.normalMap.channel),displacementMapUv:ft&&g(S.displacementMap.channel),emissiveMapUv:A&&g(S.emissiveMap.channel),metalnessMapUv:ot&&g(S.metalnessMap.channel),roughnessMapUv:gt&&g(S.roughnessMap.channel),anisotropyMapUv:q&&g(S.anisotropyMap.channel),clearcoatMapUv:it&&g(S.clearcoatMap.channel),clearcoatNormalMapUv:pt&&g(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:_t&&g(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&g(S.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&g(S.iridescenceThicknessMap.channel),sheenColorMapUv:xt&&g(S.sheenColorMap.channel),sheenRoughnessMapUv:wt&&g(S.sheenRoughnessMap.channel),specularMapUv:St&&g(S.specularMap.channel),specularColorMapUv:yt&&g(S.specularColorMap.channel),specularIntensityMapUv:qt&&g(S.specularIntensityMap.channel),transmissionMapUv:Yt&&g(S.transmissionMap.channel),thicknessMapUv:ae&&g(S.thicknessMap.channel),alphaMapUv:Mt&&g(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ut||ct),vertexNormals:!!U.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!U.attributes.uv&&(P||Mt),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||U.attributes.normal===void 0&&ut===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Rt,skinning:I.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Jt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:e.shadowMap.enabled&&O.length>0,shadowMapType:e.shadowMap.type,toneMapping:mt,decodeVideoTexture:P&&S.map.isVideoTexture===!0&&_e.getTransfer(S.map.colorSpace)===Ae,decodeVideoTextureEmissive:A&&S.emissiveMap.isVideoTexture===!0&&_e.getTransfer(S.emissiveMap.colorSpace)===Ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Us,flipSided:S.side===zn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:bt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&S.extensions.multiDraw===!0||Nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Vt.vertexUv1s=l.has(1),Vt.vertexUv2s=l.has(2),Vt.vertexUv3s=l.has(3),l.clear(),Vt}function m(S){const T=[];if(S.shaderID?T.push(S.shaderID):(T.push(S.customVertexShaderID),T.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)T.push(O),T.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(p(T,S),v(T,S),T.push(e.outputColorSpace)),T.push(S.customProgramCacheKey),T.join()}function p(S,T){S.push(T.precision),S.push(T.outputColorSpace),S.push(T.envMapMode),S.push(T.envMapCubeUVHeight),S.push(T.mapUv),S.push(T.alphaMapUv),S.push(T.lightMapUv),S.push(T.aoMapUv),S.push(T.bumpMapUv),S.push(T.normalMapUv),S.push(T.displacementMapUv),S.push(T.emissiveMapUv),S.push(T.metalnessMapUv),S.push(T.roughnessMapUv),S.push(T.anisotropyMapUv),S.push(T.clearcoatMapUv),S.push(T.clearcoatNormalMapUv),S.push(T.clearcoatRoughnessMapUv),S.push(T.iridescenceMapUv),S.push(T.iridescenceThicknessMapUv),S.push(T.sheenColorMapUv),S.push(T.sheenRoughnessMapUv),S.push(T.specularMapUv),S.push(T.specularColorMapUv),S.push(T.specularIntensityMapUv),S.push(T.transmissionMapUv),S.push(T.thicknessMapUv),S.push(T.combine),S.push(T.fogExp2),S.push(T.sizeAttenuation),S.push(T.morphTargetsCount),S.push(T.morphAttributeCount),S.push(T.numDirLights),S.push(T.numPointLights),S.push(T.numSpotLights),S.push(T.numSpotLightMaps),S.push(T.numHemiLights),S.push(T.numRectAreaLights),S.push(T.numDirLightShadows),S.push(T.numPointLightShadows),S.push(T.numSpotLightShadows),S.push(T.numSpotLightShadowsWithMaps),S.push(T.numLightProbes),S.push(T.shadowMapType),S.push(T.toneMapping),S.push(T.numClippingPlanes),S.push(T.numClipIntersection),S.push(T.depthPacking)}function v(S,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),S.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),S.push(o.mask)}function y(S){const T=u[S.type];let O;if(T){const L=Qi[T];O=TP.clone(L.uniforms)}else O=S.uniforms;return O}function M(S,T){let O=h.get(T);return O!==void 0?++O.usedTimes:(O=new s3(e,T,S,s),c.push(O),h.set(T,O)),O}function C(S){if(--S.usedTimes===0){const T=c.indexOf(S);c[T]=c[c.length-1],c.pop(),h.delete(S.cacheKey),S.destroy()}}function w(S){a.remove(S)}function R(){a.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:R}}function h3(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function s(o,a,l){e.get(o)[a]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function u3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Wx(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Xx(){const e=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,g,_,m,p){let v=e[t];return v===void 0?(v={id:f.id,object:f,geometry:u,material:g,materialVariant:o(f),groupOrder:_,renderOrder:f.renderOrder,z:m,group:p},e[t]=v):(v.id=f.id,v.object=f,v.geometry=u,v.material=g,v.materialVariant=o(f),v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=m,v.group=p),t++,v}function l(f,u,g,_,m,p){const v=a(f,u,g,_,m,p);g.transmission>0?i.push(v):g.transparent===!0?s.push(v):n.push(v)}function c(f,u,g,_,m,p){const v=a(f,u,g,_,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?s.unshift(v):n.unshift(v)}function h(f,u){n.length>1&&n.sort(f||u3),i.length>1&&i.sort(u||Wx),s.length>1&&s.sort(u||Wx)}function d(){for(let f=t,u=e.length;f<u;f++){const g=e[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function d3(){let e=new WeakMap;function t(i,s){const r=e.get(i);let o;return r===void 0?(o=new Xx,e.set(i,[o])):s>=r.length?(o=new Xx,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function f3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new H,color:new fe};break;case"SpotLight":n={position:new H,direction:new H,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new fe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":n={color:new fe,position:new H,halfWidth:new H,halfHeight:new H};break}return e[t.id]=n,n}}}function p3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let m3=0;function _3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function g3(e){const t=new f3,n=p3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);const s=new H,r=new nn,o=new nn;function a(c){let h=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,v=0,y=0,M=0,C=0,w=0,R=0;c.sort(_3);for(let T=0,O=c.length;T<O;T++){const L=c[T],I=L.color,V=L.intensity,Y=L.distance;let U=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===oo?U=L.shadow.map.texture:U=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=I.r*V,d+=I.g*V,f+=I.b*V;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],V);R++}else if(L.isDirectionalLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const B=L.shadow,j=n.get(L);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,i.directionalShadow[u]=j,i.directionalShadowMap[u]=U,i.directionalShadowMatrix[u]=L.shadow.matrix,v++}i.directional[u]=k,u++}else if(L.isSpotLight){const k=t.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(I).multiplyScalar(V),k.distance=Y,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[_]=k;const B=L.shadow;if(L.map&&(i.spotLightMap[C]=L.map,C++,B.updateMatrices(L),L.castShadow&&w++),i.spotLightMatrix[_]=B.matrix,L.castShadow){const j=n.get(L);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=U,M++}_++}else if(L.isRectAreaLight){const k=t.get(L);k.color.copy(I).multiplyScalar(V),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=k,m++}else if(L.isPointLight){const k=t.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const B=L.shadow,j=n.get(L);j.shadowIntensity=B.intensity,j.shadowBias=B.bias,j.shadowNormalBias=B.normalBias,j.shadowRadius=B.radius,j.shadowMapSize=B.mapSize,j.shadowCameraNear=B.camera.near,j.shadowCameraFar=B.camera.far,i.pointShadow[g]=j,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=L.shadow.matrix,y++}i.point[g]=k,g++}else if(L.isHemisphereLight){const k=t.get(L);k.skyColor.copy(L.color).multiplyScalar(V),k.groundColor.copy(L.groundColor).multiplyScalar(V),i.hemi[p]=k,p++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ct.LTC_FLOAT_1,i.rectAreaLTC2=Ct.LTC_FLOAT_2):(i.rectAreaLTC1=Ct.LTC_HALF_1,i.rectAreaLTC2=Ct.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const S=i.hash;(S.directionalLength!==u||S.pointLength!==g||S.spotLength!==_||S.rectAreaLength!==m||S.hemiLength!==p||S.numDirectionalShadows!==v||S.numPointShadows!==y||S.numSpotShadows!==M||S.numSpotMaps!==C||S.numLightProbes!==R)&&(i.directional.length=u,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=M+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,S.directionalLength=u,S.pointLength=g,S.spotLength=_,S.rectAreaLength=m,S.hemiLength=p,S.numDirectionalShadows=v,S.numPointShadows=y,S.numSpotShadows=M,S.numSpotMaps=C,S.numLightProbes=R,i.version=m3++)}function l(c,h){let d=0,f=0,u=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){const y=c[p];if(y.isDirectionalLight){const M=i.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(y.isSpotLight){const M=i.spot[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=i.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const M=i.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function $x(e){const t=new g3(e),n=[],i=[],s=[];function r(f){d.camera=f,n.length=0,i.length=0,s.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(n)}function h(f){t.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function x3(e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new $x(e),t.set(s,[a])):r>=o.length?(a=new $x(e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}const v3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,y3=`uniform sampler2D shadow_pass;
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
}`,S3=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],M3=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Yx=new nn,el=new H,Jd=new H;function b3(e,t,n){let i=new mm;const s=new te,r=new te,o=new tn,a=new PP,l=new LP,c={},h=n.maxTextureSize,d={[Mr]:zn,[zn]:Mr,[Us]:Us},f=new hs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:v3,fragmentShader:y3}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const g=new Jn;g.setAttribute("position",new os(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ue(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let p=this.type;this.render=function(w,R,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Uy&&(Zt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=hh);const T=e.getRenderTarget(),O=e.getActiveCubeFace(),L=e.getActiveMipmapLevel(),I=e.state;I.setBlending(ks),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const V=p!==this.type;V&&R.traverse(function(Y){Y.material&&(Array.isArray(Y.material)?Y.material.forEach(U=>U.needsUpdate=!0):Y.material.needsUpdate=!0)});for(let Y=0,U=w.length;Y<U;Y++){const k=w[Y],B=k.shadow;if(B===void 0){Zt("WebGLShadowMap:",k,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;s.copy(B.mapSize);const j=B.getFrameExtents();s.multiply(j),r.copy(B.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/j.x),s.x=r.x*j.x,B.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/j.y),s.y=r.y*j.y,B.mapSize.y=r.y));const st=e.state.buffers.depth.getReversed();if(B.camera._reversedDepth=st,B.map===null||V===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===ol){if(k.isPointLight){Zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new rs(s.x,s.y,{format:oo,type:Xs,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),B.map.texture.name=k.name+".shadowMap",B.map.depthTexture=new pa(s.x,s.y,es),B.map.depthTexture.name=k.name+".shadowMapDepth",B.map.depthTexture.format=$s,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=bn,B.map.depthTexture.magFilter=bn}else k.isPointLight?(B.map=new dS(s.x),B.map.depthTexture=new EP(s.x,cs)):(B.map=new rs(s.x,s.y),B.map.depthTexture=new pa(s.x,s.y,cs)),B.map.depthTexture.name=k.name+".shadowMap",B.map.depthTexture.format=$s,this.type===hh?(B.map.depthTexture.compareFunction=st?dm:um,B.map.depthTexture.minFilter=Ln,B.map.depthTexture.magFilter=Ln):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=bn,B.map.depthTexture.magFilter=bn);B.camera.updateProjectionMatrix()}const vt=B.map.isWebGLCubeRenderTarget?6:1;for(let ht=0;ht<vt;ht++){if(B.map.isWebGLCubeRenderTarget)e.setRenderTarget(B.map,ht),e.clear();else{ht===0&&(e.setRenderTarget(B.map),e.clear());const tt=B.getViewport(ht);o.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),I.viewport(o)}if(k.isPointLight){const tt=B.camera,Jt=B.matrix,$t=k.distance||tt.far;$t!==tt.far&&(tt.far=$t,tt.updateProjectionMatrix()),el.setFromMatrixPosition(k.matrixWorld),tt.position.copy(el),Jd.copy(tt.position),Jd.add(S3[ht]),tt.up.copy(M3[ht]),tt.lookAt(Jd),tt.updateMatrixWorld(),Jt.makeTranslation(-el.x,-el.y,-el.z),Yx.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),B._frustum.setFromProjectionMatrix(Yx,tt.coordinateSystem,tt.reversedDepth)}else B.updateMatrices(k);i=B.getFrustum(),M(R,S,B.camera,k,this.type)}B.isPointLightShadow!==!0&&this.type===ol&&v(B,S),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,e.setRenderTarget(T,O,L)};function v(w,R){const S=t.update(_);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new rs(s.x,s.y,{format:oo,type:Xs})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(R,null,S,f,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(R,null,S,u,_,null)}function y(w,R,S,T){let O=null;const L=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)O=L;else if(O=S.isPointLight===!0?l:a,e.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=O.uuid,V=R.uuid;let Y=c[I];Y===void 0&&(Y={},c[I]=Y);let U=Y[V];U===void 0&&(U=O.clone(),Y[V]=U,R.addEventListener("dispose",C)),O=U}if(O.visible=R.visible,O.wireframe=R.wireframe,T===ol?O.side=R.shadowSide!==null?R.shadowSide:R.side:O.side=R.shadowSide!==null?R.shadowSide:d[R.side],O.alphaMap=R.alphaMap,O.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,O.map=R.map,O.clipShadows=R.clipShadows,O.clippingPlanes=R.clippingPlanes,O.clipIntersection=R.clipIntersection,O.displacementMap=R.displacementMap,O.displacementScale=R.displacementScale,O.displacementBias=R.displacementBias,O.wireframeLinewidth=R.wireframeLinewidth,O.linewidth=R.linewidth,S.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const I=e.properties.get(O);I.light=S}return O}function M(w,R,S,T,O){if(w.visible===!1)return;if(w.layers.test(R.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===ol)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);const V=t.update(w),Y=w.material;if(Array.isArray(Y)){const U=V.groups;for(let k=0,B=U.length;k<B;k++){const j=U[k],st=Y[j.materialIndex];if(st&&st.visible){const vt=y(w,st,T,O);w.onBeforeShadow(e,w,R,S,V,vt,j),e.renderBufferDirect(S,null,V,vt,w,j),w.onAfterShadow(e,w,R,S,V,vt,j)}}}else if(Y.visible){const U=y(w,Y,T,O);w.onBeforeShadow(e,w,R,S,V,U,null),e.renderBufferDirect(S,null,V,U,w,null),w.onAfterShadow(e,w,R,S,V,U,null)}}const I=w.children;for(let V=0,Y=I.length;V<Y;V++)M(I[V],R,S,T,O)}function C(w){w.target.removeEventListener("dispose",C);for(const S in c){const T=c[S],O=w.target.uuid;O in T&&(T[O].dispose(),delete T[O])}}}function E3(e,t){function n(){let N=!1;const Mt=new tn;let at=null;const It=new tn(0,0,0,0);return{setMask:function(bt){at!==bt&&!N&&(e.colorMask(bt,bt,bt,bt),at=bt)},setLocked:function(bt){N=bt},setClear:function(bt,mt,Vt,ie,on){on===!0&&(bt*=ie,mt*=ie,Vt*=ie),Mt.set(bt,mt,Vt,ie),It.equals(Mt)===!1&&(e.clearColor(bt,mt,Vt,ie),It.copy(Mt))},reset:function(){N=!1,at=null,It.set(-1,0,0,0)}}}function i(){let N=!1,Mt=!1,at=null,It=null,bt=null;return{setReversed:function(mt){if(Mt!==mt){const Vt=t.get("EXT_clip_control");mt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),Mt=mt;const ie=bt;bt=null,this.setClear(ie)}},getReversed:function(){return Mt},setTest:function(mt){mt?dt(e.DEPTH_TEST):Rt(e.DEPTH_TEST)},setMask:function(mt){at!==mt&&!N&&(e.depthMask(mt),at=mt)},setFunc:function(mt){if(Mt&&(mt=KC[mt]),It!==mt){switch(mt){case Uf:e.depthFunc(e.NEVER);break;case Nf:e.depthFunc(e.ALWAYS);break;case Ff:e.depthFunc(e.LESS);break;case da:e.depthFunc(e.LEQUAL);break;case Bf:e.depthFunc(e.EQUAL);break;case kf:e.depthFunc(e.GEQUAL);break;case zf:e.depthFunc(e.GREATER);break;case Hf:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}It=mt}},setLocked:function(mt){N=mt},setClear:function(mt){bt!==mt&&(bt=mt,Mt&&(mt=1-mt),e.clearDepth(mt))},reset:function(){N=!1,at=null,It=null,bt=null,Mt=!1}}}function s(){let N=!1,Mt=null,at=null,It=null,bt=null,mt=null,Vt=null,ie=null,on=null;return{setTest:function(Ce){N||(Ce?dt(e.STENCIL_TEST):Rt(e.STENCIL_TEST))},setMask:function(Ce){Mt!==Ce&&!N&&(e.stencilMask(Ce),Mt=Ce)},setFunc:function(Ce,fs,zi){(at!==Ce||It!==fs||bt!==zi)&&(e.stencilFunc(Ce,fs,zi),at=Ce,It=fs,bt=zi)},setOp:function(Ce,fs,zi){(mt!==Ce||Vt!==fs||ie!==zi)&&(e.stencilOp(Ce,fs,zi),mt=Ce,Vt=fs,ie=zi)},setLocked:function(Ce){N=Ce},setClear:function(Ce){on!==Ce&&(e.clearStencil(Ce),on=Ce)},reset:function(){N=!1,Mt=null,at=null,It=null,bt=null,mt=null,Vt=null,ie=null,on=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f={},u=new WeakMap,g=[],_=null,m=!1,p=null,v=null,y=null,M=null,C=null,w=null,R=null,S=new fe(0,0,0),T=0,O=!1,L=null,I=null,V=null,Y=null,U=null;const k=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,j=0;const st=e.getParameter(e.VERSION);st.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(st)[1]),B=j>=1):st.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),B=j>=2);let vt=null,ht={};const tt=e.getParameter(e.SCISSOR_BOX),Jt=e.getParameter(e.VIEWPORT),$t=new tn().fromArray(tt),jt=new tn().fromArray(Jt);function rt(N,Mt,at,It){const bt=new Uint8Array(4),mt=e.createTexture();e.bindTexture(N,mt),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Vt=0;Vt<at;Vt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(Mt,0,e.RGBA,1,1,It,0,e.RGBA,e.UNSIGNED_BYTE,bt):e.texImage2D(Mt+Vt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,bt);return mt}const Tt={};Tt[e.TEXTURE_2D]=rt(e.TEXTURE_2D,e.TEXTURE_2D,1),Tt[e.TEXTURE_CUBE_MAP]=rt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),Tt[e.TEXTURE_2D_ARRAY]=rt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),Tt[e.TEXTURE_3D]=rt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),dt(e.DEPTH_TEST),o.setFunc(da),et(!1),ut(G0),dt(e.CULL_FACE),nt(ks);function dt(N){h[N]!==!0&&(e.enable(N),h[N]=!0)}function Rt(N){h[N]!==!1&&(e.disable(N),h[N]=!1)}function Dt(N,Mt){return f[N]!==Mt?(e.bindFramebuffer(N,Mt),f[N]=Mt,N===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=Mt),N===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Nt(N,Mt){let at=g,It=!1;if(N){at=u.get(Mt),at===void 0&&(at=[],u.set(Mt,at));const bt=N.textures;if(at.length!==bt.length||at[0]!==e.COLOR_ATTACHMENT0){for(let mt=0,Vt=bt.length;mt<Vt;mt++)at[mt]=e.COLOR_ATTACHMENT0+mt;at.length=bt.length,It=!0}}else at[0]!==e.BACK&&(at[0]=e.BACK,It=!0);It&&e.drawBuffers(at)}function P(N){return _!==N?(e.useProgram(N),_=N,!0):!1}const D={[jr]:e.FUNC_ADD,[vC]:e.FUNC_SUBTRACT,[yC]:e.FUNC_REVERSE_SUBTRACT};D[SC]=e.MIN,D[MC]=e.MAX;const W={[bC]:e.ZERO,[EC]:e.ONE,[wC]:e.SRC_COLOR,[If]:e.SRC_ALPHA,[LC]:e.SRC_ALPHA_SATURATE,[CC]:e.DST_COLOR,[AC]:e.DST_ALPHA,[TC]:e.ONE_MINUS_SRC_COLOR,[Of]:e.ONE_MINUS_SRC_ALPHA,[PC]:e.ONE_MINUS_DST_COLOR,[RC]:e.ONE_MINUS_DST_ALPHA,[DC]:e.CONSTANT_COLOR,[IC]:e.ONE_MINUS_CONSTANT_COLOR,[OC]:e.CONSTANT_ALPHA,[UC]:e.ONE_MINUS_CONSTANT_ALPHA};function nt(N,Mt,at,It,bt,mt,Vt,ie,on,Ce){if(N===ks){m===!0&&(Rt(e.BLEND),m=!1);return}if(m===!1&&(dt(e.BLEND),m=!0),N!==xC){if(N!==p||Ce!==O){if((v!==jr||C!==jr)&&(e.blendEquation(e.FUNC_ADD),v=jr,C=jr),Ce)switch(N){case ra:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case W0:e.blendFunc(e.ONE,e.ONE);break;case X0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case $0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:xe("WebGLState: Invalid blending: ",N);break}else switch(N){case ra:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case W0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case X0:xe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $0:xe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:xe("WebGLState: Invalid blending: ",N);break}y=null,M=null,w=null,R=null,S.set(0,0,0),T=0,p=N,O=Ce}return}bt=bt||Mt,mt=mt||at,Vt=Vt||It,(Mt!==v||bt!==C)&&(e.blendEquationSeparate(D[Mt],D[bt]),v=Mt,C=bt),(at!==y||It!==M||mt!==w||Vt!==R)&&(e.blendFuncSeparate(W[at],W[It],W[mt],W[Vt]),y=at,M=It,w=mt,R=Vt),(ie.equals(S)===!1||on!==T)&&(e.blendColor(ie.r,ie.g,ie.b,on),S.copy(ie),T=on),p=N,O=!1}function K(N,Mt){N.side===Us?Rt(e.CULL_FACE):dt(e.CULL_FACE);let at=N.side===zn;Mt&&(at=!at),et(at),N.blending===ra&&N.transparent===!1?nt(ks):nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const It=N.stencilWrite;a.setTest(It),It&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),A(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?dt(e.SAMPLE_ALPHA_TO_COVERAGE):Rt(e.SAMPLE_ALPHA_TO_COVERAGE)}function et(N){L!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),L=N)}function ut(N){N!==_C?(dt(e.CULL_FACE),N!==I&&(N===G0?e.cullFace(e.BACK):N===gC?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Rt(e.CULL_FACE),I=N}function ft(N){N!==V&&(B&&e.lineWidth(N),V=N)}function A(N,Mt,at){N?(dt(e.POLYGON_OFFSET_FILL),(Y!==Mt||U!==at)&&(Y=Mt,U=at,o.getReversed()&&(Mt=-Mt),e.polygonOffset(Mt,at))):Rt(e.POLYGON_OFFSET_FILL)}function ot(N){N?dt(e.SCISSOR_TEST):Rt(e.SCISSOR_TEST)}function gt(N){N===void 0&&(N=e.TEXTURE0+k-1),vt!==N&&(e.activeTexture(N),vt=N)}function ct(N,Mt,at){at===void 0&&(vt===null?at=e.TEXTURE0+k-1:at=vt);let It=ht[at];It===void 0&&(It={type:void 0,texture:void 0},ht[at]=It),(It.type!==N||It.texture!==Mt)&&(vt!==at&&(e.activeTexture(at),vt=at),e.bindTexture(N,Mt||Tt[N]),It.type=N,It.texture=Mt)}function Z(){const N=ht[vt];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function At(){try{e.compressedTexImage2D(...arguments)}catch(N){xe("WebGLState:",N)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(N){xe("WebGLState:",N)}}function x(){try{e.texSubImage2D(...arguments)}catch(N){xe("WebGLState:",N)}}function F(){try{e.texSubImage3D(...arguments)}catch(N){xe("WebGLState:",N)}}function q(){try{e.compressedTexSubImage2D(...arguments)}catch(N){xe("WebGLState:",N)}}function it(){try{e.compressedTexSubImage3D(...arguments)}catch(N){xe("WebGLState:",N)}}function pt(){try{e.texStorage2D(...arguments)}catch(N){xe("WebGLState:",N)}}function _t(){try{e.texStorage3D(...arguments)}catch(N){xe("WebGLState:",N)}}function Q(){try{e.texImage2D(...arguments)}catch(N){xe("WebGLState:",N)}}function lt(){try{e.texImage3D(...arguments)}catch(N){xe("WebGLState:",N)}}function xt(N){return d[N]!==void 0?d[N]:e.getParameter(N)}function wt(N,Mt){d[N]!==Mt&&(e.pixelStorei(N,Mt),d[N]=Mt)}function St(N){$t.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),$t.copy(N))}function yt(N){jt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),jt.copy(N))}function qt(N,Mt){let at=c.get(Mt);at===void 0&&(at=new WeakMap,c.set(Mt,at));let It=at.get(N);It===void 0&&(It=e.getUniformBlockIndex(Mt,N.name),at.set(N,It))}function Yt(N,Mt){const It=c.get(Mt).get(N);l.get(Mt)!==It&&(e.uniformBlockBinding(Mt,It,N.__bindingPointIndex),l.set(Mt,It))}function ae(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},vt=null,ht={},f={},u=new WeakMap,g=[],_=null,m=!1,p=null,v=null,y=null,M=null,C=null,w=null,R=null,S=new fe(0,0,0),T=0,O=!1,L=null,I=null,V=null,Y=null,U=null,$t.set(0,0,e.canvas.width,e.canvas.height),jt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:dt,disable:Rt,bindFramebuffer:Dt,drawBuffers:Nt,useProgram:P,setBlending:nt,setMaterial:K,setFlipSided:et,setCullFace:ut,setLineWidth:ft,setPolygonOffset:A,setScissorTest:ot,activeTexture:gt,bindTexture:ct,unbindTexture:Z,compressedTexImage2D:At,compressedTexImage3D:E,texImage2D:Q,texImage3D:lt,pixelStorei:wt,getParameter:xt,updateUBOMapping:qt,uniformBlockBinding:Yt,texStorage2D:pt,texStorage3D:_t,texSubImage2D:x,texSubImage3D:F,compressedTexSubImage2D:q,compressedTexSubImage3D:it,scissor:St,viewport:yt,reset:ae}}function w3(e,t,n,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,d=new Set;let f;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(E,x){return g?new OffscreenCanvas(E,x):Ph("canvas")}function m(E,x,F){let q=1;const it=At(E);if((it.width>F||it.height>F)&&(q=F/Math.max(it.width,it.height)),q<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const pt=Math.floor(q*it.width),_t=Math.floor(q*it.height);f===void 0&&(f=_(pt,_t));const Q=x?_(pt,_t):f;return Q.width=pt,Q.height=_t,Q.getContext("2d").drawImage(E,0,0,pt,_t),Zt("WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+pt+"x"+_t+")."),Q}else return"data"in E&&Zt("WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),E;return E}function p(E){return E.generateMipmaps}function v(E){e.generateMipmap(E)}function y(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function M(E,x,F,q,it,pt=!1){if(E!==null){if(e[E]!==void 0)return e[E];Zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let _t;q&&(_t=t.get("EXT_texture_norm16"),_t||Zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===e.RED&&(F===e.FLOAT&&(Q=e.R32F),F===e.HALF_FLOAT&&(Q=e.R16F),F===e.UNSIGNED_BYTE&&(Q=e.R8),F===e.UNSIGNED_SHORT&&_t&&(Q=_t.R16_EXT),F===e.SHORT&&_t&&(Q=_t.R16_SNORM_EXT)),x===e.RED_INTEGER&&(F===e.UNSIGNED_BYTE&&(Q=e.R8UI),F===e.UNSIGNED_SHORT&&(Q=e.R16UI),F===e.UNSIGNED_INT&&(Q=e.R32UI),F===e.BYTE&&(Q=e.R8I),F===e.SHORT&&(Q=e.R16I),F===e.INT&&(Q=e.R32I)),x===e.RG&&(F===e.FLOAT&&(Q=e.RG32F),F===e.HALF_FLOAT&&(Q=e.RG16F),F===e.UNSIGNED_BYTE&&(Q=e.RG8),F===e.UNSIGNED_SHORT&&_t&&(Q=_t.RG16_EXT),F===e.SHORT&&_t&&(Q=_t.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(F===e.UNSIGNED_BYTE&&(Q=e.RG8UI),F===e.UNSIGNED_SHORT&&(Q=e.RG16UI),F===e.UNSIGNED_INT&&(Q=e.RG32UI),F===e.BYTE&&(Q=e.RG8I),F===e.SHORT&&(Q=e.RG16I),F===e.INT&&(Q=e.RG32I)),x===e.RGB_INTEGER&&(F===e.UNSIGNED_BYTE&&(Q=e.RGB8UI),F===e.UNSIGNED_SHORT&&(Q=e.RGB16UI),F===e.UNSIGNED_INT&&(Q=e.RGB32UI),F===e.BYTE&&(Q=e.RGB8I),F===e.SHORT&&(Q=e.RGB16I),F===e.INT&&(Q=e.RGB32I)),x===e.RGBA_INTEGER&&(F===e.UNSIGNED_BYTE&&(Q=e.RGBA8UI),F===e.UNSIGNED_SHORT&&(Q=e.RGBA16UI),F===e.UNSIGNED_INT&&(Q=e.RGBA32UI),F===e.BYTE&&(Q=e.RGBA8I),F===e.SHORT&&(Q=e.RGBA16I),F===e.INT&&(Q=e.RGBA32I)),x===e.RGB&&(F===e.UNSIGNED_SHORT&&_t&&(Q=_t.RGB16_EXT),F===e.SHORT&&_t&&(Q=_t.RGB16_SNORM_EXT),F===e.UNSIGNED_INT_5_9_9_9_REV&&(Q=e.RGB9_E5),F===e.UNSIGNED_INT_10F_11F_11F_REV&&(Q=e.R11F_G11F_B10F)),x===e.RGBA){const lt=pt?Ch:_e.getTransfer(it);F===e.FLOAT&&(Q=e.RGBA32F),F===e.HALF_FLOAT&&(Q=e.RGBA16F),F===e.UNSIGNED_BYTE&&(Q=lt===Ae?e.SRGB8_ALPHA8:e.RGBA8),F===e.UNSIGNED_SHORT&&_t&&(Q=_t.RGBA16_EXT),F===e.SHORT&&_t&&(Q=_t.RGBA16_SNORM_EXT),F===e.UNSIGNED_SHORT_4_4_4_4&&(Q=e.RGBA4),F===e.UNSIGNED_SHORT_5_5_5_1&&(Q=e.RGB5_A1)}return(Q===e.R16F||Q===e.R32F||Q===e.RG16F||Q===e.RG32F||Q===e.RGBA16F||Q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function C(E,x){let F;return E?x===null||x===cs||x===Pl?F=e.DEPTH24_STENCIL8:x===es?F=e.DEPTH32F_STENCIL8:x===Cl&&(F=e.DEPTH24_STENCIL8,Zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===cs||x===Pl?F=e.DEPTH_COMPONENT24:x===es?F=e.DEPTH_COMPONENT32F:x===Cl&&(F=e.DEPTH_COMPONENT16),F}function w(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==bn&&E.minFilter!==Ln?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function R(E){const x=E.target;x.removeEventListener("dispose",R),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function S(E){const x=E.target;x.removeEventListener("dispose",S),L(x)}function T(E){const x=i.get(E);if(x.__webglInit===void 0)return;const F=E.source,q=u.get(F);if(q){const it=q[x.__cacheKey];it.usedTimes--,it.usedTimes===0&&O(E),Object.keys(q).length===0&&u.delete(F)}i.remove(E)}function O(E){const x=i.get(E);e.deleteTexture(x.__webglTexture);const F=E.source,q=u.get(F);delete q[x.__cacheKey],o.memory.textures--}function L(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let it=0;it<x.__webglFramebuffer[q].length;it++)e.deleteFramebuffer(x.__webglFramebuffer[q][it]);else e.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)e.deleteFramebuffer(x.__webglFramebuffer[q]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const F=E.textures;for(let q=0,it=F.length;q<it;q++){const pt=i.get(F[q]);pt.__webglTexture&&(e.deleteTexture(pt.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(E)}let I=0;function V(){I=0}function Y(){return I}function U(E){I=E}function k(){const E=I;return E>=s.maxTextures&&Zt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function B(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function j(E,x){const F=i.get(E);if(E.isVideoTexture&&ct(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const q=E.image;if(q===null)Zt("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Zt("WebGLRenderer: Texture marked for update but image is incomplete");else{Rt(F,E,x);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,F.__webglTexture,e.TEXTURE0+x)}function st(E,x){const F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Rt(F,E,x);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,F.__webglTexture,e.TEXTURE0+x)}function vt(E,x){const F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){Rt(F,E,x);return}n.bindTexture(e.TEXTURE_3D,F.__webglTexture,e.TEXTURE0+x)}function ht(E,x){const F=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&F.__version!==E.version){Dt(F,E,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,F.__webglTexture,e.TEXTURE0+x)}const tt={[Vf]:e.REPEAT,[Fs]:e.CLAMP_TO_EDGE,[Gf]:e.MIRRORED_REPEAT},Jt={[bn]:e.NEAREST,[BC]:e.NEAREST_MIPMAP_NEAREST,[Pc]:e.NEAREST_MIPMAP_LINEAR,[Ln]:e.LINEAR,[Sd]:e.LINEAR_MIPMAP_NEAREST,[Zr]:e.LINEAR_MIPMAP_LINEAR},$t={[HC]:e.NEVER,[$C]:e.ALWAYS,[VC]:e.LESS,[um]:e.LEQUAL,[GC]:e.EQUAL,[dm]:e.GEQUAL,[WC]:e.GREATER,[XC]:e.NOTEQUAL};function jt(E,x){if(x.type===es&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ln||x.magFilter===Sd||x.magFilter===Pc||x.magFilter===Zr||x.minFilter===Ln||x.minFilter===Sd||x.minFilter===Pc||x.minFilter===Zr)&&Zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,tt[x.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,tt[x.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,tt[x.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,Jt[x.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,Jt[x.minFilter]),x.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,$t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===bn||x.minFilter!==Pc&&x.minFilter!==Zr||x.type===es&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function rt(E,x){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",R));const q=x.source;let it=u.get(q);it===void 0&&(it={},u.set(q,it));const pt=B(x);if(pt!==E.__cacheKey){it[pt]===void 0&&(it[pt]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,F=!0),it[pt].usedTimes++;const _t=it[E.__cacheKey];_t!==void 0&&(it[E.__cacheKey].usedTimes--,_t.usedTimes===0&&O(x)),E.__cacheKey=pt,E.__webglTexture=it[pt].texture}return F}function Tt(E,x,F){return Math.floor(Math.floor(E/F)/x)}function dt(E,x,F,q){const pt=E.updateRanges;if(pt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,F,q,x.data);else{pt.sort((wt,St)=>wt.start-St.start);let _t=0;for(let wt=1;wt<pt.length;wt++){const St=pt[_t],yt=pt[wt],qt=St.start+St.count,Yt=Tt(yt.start,x.width,4),ae=Tt(St.start,x.width,4);yt.start<=qt+1&&Yt===ae&&Tt(yt.start+yt.count-1,x.width,4)===Yt?St.count=Math.max(St.count,yt.start+yt.count-St.start):(++_t,pt[_t]=yt)}pt.length=_t+1;const Q=n.getParameter(e.UNPACK_ROW_LENGTH),lt=n.getParameter(e.UNPACK_SKIP_PIXELS),xt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let wt=0,St=pt.length;wt<St;wt++){const yt=pt[wt],qt=Math.floor(yt.start/4),Yt=Math.ceil(yt.count/4),ae=qt%x.width,N=Math.floor(qt/x.width),Mt=Yt,at=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,ae,N,Mt,at,F,q,x.data)}E.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Q),n.pixelStorei(e.UNPACK_SKIP_PIXELS,lt),n.pixelStorei(e.UNPACK_SKIP_ROWS,xt)}}function Rt(E,x,F){let q=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=e.TEXTURE_3D);const it=rt(E,x),pt=x.source;n.bindTexture(q,E.__webglTexture,e.TEXTURE0+F);const _t=i.get(pt);if(pt.version!==_t.__version||it===!0){if(n.activeTexture(e.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const at=_e.getPrimaries(_e.workingColorSpace),It=x.colorSpace===fr?null:_e.getPrimaries(x.colorSpace),bt=x.colorSpace===fr||at===It?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let lt=m(x.image,!1,s.maxTextureSize);lt=Z(x,lt);const xt=r.convert(x.format,x.colorSpace),wt=r.convert(x.type);let St=M(x.internalFormat,xt,wt,x.normalized,x.colorSpace,x.isVideoTexture);jt(q,x);let yt;const qt=x.mipmaps,Yt=x.isVideoTexture!==!0,ae=_t.__version===void 0||it===!0,N=pt.dataReady,Mt=w(x,lt);if(x.isDepthTexture)St=C(x.format===Jr,x.type),ae&&(Yt?n.texStorage2D(e.TEXTURE_2D,1,St,lt.width,lt.height):n.texImage2D(e.TEXTURE_2D,0,St,lt.width,lt.height,0,xt,wt,null));else if(x.isDataTexture)if(qt.length>0){Yt&&ae&&n.texStorage2D(e.TEXTURE_2D,Mt,St,qt[0].width,qt[0].height);for(let at=0,It=qt.length;at<It;at++)yt=qt[at],Yt?N&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,yt.width,yt.height,xt,wt,yt.data):n.texImage2D(e.TEXTURE_2D,at,St,yt.width,yt.height,0,xt,wt,yt.data);x.generateMipmaps=!1}else Yt?(ae&&n.texStorage2D(e.TEXTURE_2D,Mt,St,lt.width,lt.height),N&&dt(x,lt,xt,wt)):n.texImage2D(e.TEXTURE_2D,0,St,lt.width,lt.height,0,xt,wt,lt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Yt&&ae&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Mt,St,qt[0].width,qt[0].height,lt.depth);for(let at=0,It=qt.length;at<It;at++)if(yt=qt[at],x.format!==Di)if(xt!==null)if(Yt){if(N)if(x.layerUpdates.size>0){const bt=Ex(yt.width,yt.height,x.format,x.type);for(const mt of x.layerUpdates){const Vt=yt.data.subarray(mt*bt/yt.data.BYTES_PER_ELEMENT,(mt+1)*bt/yt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,mt,yt.width,yt.height,1,xt,Vt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,0,yt.width,yt.height,lt.depth,xt,yt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,at,St,yt.width,yt.height,lt.depth,0,yt.data,0,0);else Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,at,0,0,0,yt.width,yt.height,lt.depth,xt,wt,yt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,at,St,yt.width,yt.height,lt.depth,0,xt,wt,yt.data)}else{Yt&&ae&&n.texStorage2D(e.TEXTURE_2D,Mt,St,qt[0].width,qt[0].height);for(let at=0,It=qt.length;at<It;at++)yt=qt[at],x.format!==Di?xt!==null?Yt?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,at,0,0,yt.width,yt.height,xt,yt.data):n.compressedTexImage2D(e.TEXTURE_2D,at,St,yt.width,yt.height,0,yt.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?N&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,yt.width,yt.height,xt,wt,yt.data):n.texImage2D(e.TEXTURE_2D,at,St,yt.width,yt.height,0,xt,wt,yt.data)}else if(x.isDataArrayTexture)if(Yt){if(ae&&n.texStorage3D(e.TEXTURE_2D_ARRAY,Mt,St,lt.width,lt.height,lt.depth),N)if(x.layerUpdates.size>0){const at=Ex(lt.width,lt.height,x.format,x.type);for(const It of x.layerUpdates){const bt=lt.data.subarray(It*at/lt.data.BYTES_PER_ELEMENT,(It+1)*at/lt.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,It,lt.width,lt.height,1,xt,wt,bt)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,xt,wt,lt.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,St,lt.width,lt.height,lt.depth,0,xt,wt,lt.data);else if(x.isData3DTexture)Yt?(ae&&n.texStorage3D(e.TEXTURE_3D,Mt,St,lt.width,lt.height,lt.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,xt,wt,lt.data)):n.texImage3D(e.TEXTURE_3D,0,St,lt.width,lt.height,lt.depth,0,xt,wt,lt.data);else if(x.isFramebufferTexture){if(ae)if(Yt)n.texStorage2D(e.TEXTURE_2D,Mt,St,lt.width,lt.height);else{let at=lt.width,It=lt.height;for(let bt=0;bt<Mt;bt++)n.texImage2D(e.TEXTURE_2D,bt,St,at,It,0,xt,wt,null),at>>=1,It>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){const at=e.canvas;if(at.hasAttribute("layoutsubtree")||at.setAttribute("layoutsubtree","true"),lt.parentNode!==at){at.appendChild(lt),d.add(x),at.onpaint=ie=>{const on=ie.changedElements;for(const Ce of d)on.includes(Ce.image)&&(Ce.needsUpdate=!0)},at.requestPaint();return}const It=0,bt=e.RGBA,mt=e.RGBA,Vt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,It,bt,mt,Vt,lt),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(qt.length>0){if(Yt&&ae){const at=At(qt[0]);n.texStorage2D(e.TEXTURE_2D,Mt,St,at.width,at.height)}for(let at=0,It=qt.length;at<It;at++)yt=qt[at],Yt?N&&n.texSubImage2D(e.TEXTURE_2D,at,0,0,xt,wt,yt):n.texImage2D(e.TEXTURE_2D,at,St,xt,wt,yt);x.generateMipmaps=!1}else if(Yt){if(ae){const at=At(lt);n.texStorage2D(e.TEXTURE_2D,Mt,St,at.width,at.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,xt,wt,lt)}else n.texImage2D(e.TEXTURE_2D,0,St,xt,wt,lt);p(x)&&v(q),_t.__version=pt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Dt(E,x,F){if(x.image.length!==6)return;const q=rt(E,x),it=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+F);const pt=i.get(it);if(it.version!==pt.__version||q===!0){n.activeTexture(e.TEXTURE0+F);const _t=_e.getPrimaries(_e.workingColorSpace),Q=x.colorSpace===fr?null:_e.getPrimaries(x.colorSpace),lt=x.colorSpace===fr||_t===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);const xt=x.isCompressedTexture||x.image[0].isCompressedTexture,wt=x.image[0]&&x.image[0].isDataTexture,St=[];for(let mt=0;mt<6;mt++)!xt&&!wt?St[mt]=m(x.image[mt],!0,s.maxCubemapSize):St[mt]=wt?x.image[mt].image:x.image[mt],St[mt]=Z(x,St[mt]);const yt=St[0],qt=r.convert(x.format,x.colorSpace),Yt=r.convert(x.type),ae=M(x.internalFormat,qt,Yt,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,Mt=pt.__version===void 0||q===!0,at=it.dataReady;let It=w(x,yt);jt(e.TEXTURE_CUBE_MAP,x);let bt;if(xt){N&&Mt&&n.texStorage2D(e.TEXTURE_CUBE_MAP,It,ae,yt.width,yt.height);for(let mt=0;mt<6;mt++){bt=St[mt].mipmaps;for(let Vt=0;Vt<bt.length;Vt++){const ie=bt[Vt];x.format!==Di?qt!==null?N?at&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Vt,0,0,ie.width,ie.height,qt,ie.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Vt,ae,ie.width,ie.height,0,ie.data):Zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Vt,0,0,ie.width,ie.height,qt,Yt,ie.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Vt,ae,ie.width,ie.height,0,qt,Yt,ie.data)}}}else{if(bt=x.mipmaps,N&&Mt){bt.length>0&&It++;const mt=At(St[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,It,ae,mt.width,mt.height)}for(let mt=0;mt<6;mt++)if(wt){N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,St[mt].width,St[mt].height,qt,Yt,St[mt].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ae,St[mt].width,St[mt].height,0,qt,Yt,St[mt].data);for(let Vt=0;Vt<bt.length;Vt++){const on=bt[Vt].image[mt].image;N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Vt+1,0,0,on.width,on.height,qt,Yt,on.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Vt+1,ae,on.width,on.height,0,qt,Yt,on.data)}}else{N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,0,0,qt,Yt,St[mt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,ae,qt,Yt,St[mt]);for(let Vt=0;Vt<bt.length;Vt++){const ie=bt[Vt];N?at&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Vt+1,0,0,qt,Yt,ie.image[mt]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,Vt+1,ae,qt,Yt,ie.image[mt])}}}p(x)&&v(e.TEXTURE_CUBE_MAP),pt.__version=it.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Nt(E,x,F,q,it,pt){const _t=r.convert(F.format,F.colorSpace),Q=r.convert(F.type),lt=M(F.internalFormat,_t,Q,F.normalized,F.colorSpace),xt=i.get(x),wt=i.get(F);if(wt.__renderTarget=x,!xt.__hasExternalTextures){const St=Math.max(1,x.width>>pt),yt=Math.max(1,x.height>>pt);it===e.TEXTURE_3D||it===e.TEXTURE_2D_ARRAY?n.texImage3D(it,pt,lt,St,yt,x.depth,0,_t,Q,null):n.texImage2D(it,pt,lt,St,yt,0,_t,Q,null)}n.bindFramebuffer(e.FRAMEBUFFER,E),gt(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,q,it,wt.__webglTexture,0,ot(x)):(it===e.TEXTURE_2D||it>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,q,it,wt.__webglTexture,pt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function P(E,x,F){if(e.bindRenderbuffer(e.RENDERBUFFER,E),x.depthBuffer){const q=x.depthTexture,it=q&&q.isDepthTexture?q.type:null,pt=C(x.stencilBuffer,it),_t=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;gt(x)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot(x),pt,x.width,x.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot(x),pt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,pt,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,_t,e.RENDERBUFFER,E)}else{const q=x.textures;for(let it=0;it<q.length;it++){const pt=q[it],_t=r.convert(pt.format,pt.colorSpace),Q=r.convert(pt.type),lt=M(pt.internalFormat,_t,Q,pt.normalized,pt.colorSpace);gt(x)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ot(x),lt,x.width,x.height):F?e.renderbufferStorageMultisample(e.RENDERBUFFER,ot(x),lt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,lt,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function D(E,x,F){const q=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=i.get(x.depthTexture);if(it.__renderTarget=x,(!it.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(it.__webglInit===void 0&&(it.__webglInit=!0,x.depthTexture.addEventListener("dispose",R)),it.__webglTexture===void 0){it.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,it.__webglTexture),jt(e.TEXTURE_CUBE_MAP,x.depthTexture);const xt=r.convert(x.depthTexture.format),wt=r.convert(x.depthTexture.type);let St;x.depthTexture.format===$s?St=e.DEPTH_COMPONENT24:x.depthTexture.format===Jr&&(St=e.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,St,x.width,x.height,0,xt,wt,null)}}else j(x.depthTexture,0);const pt=it.__webglTexture,_t=ot(x),Q=q?e.TEXTURE_CUBE_MAP_POSITIVE_X+F:e.TEXTURE_2D,lt=x.depthTexture.format===Jr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===$s)gt(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,Q,pt,0,_t):e.framebufferTexture2D(e.FRAMEBUFFER,lt,Q,pt,0);else if(x.depthTexture.format===Jr)gt(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,lt,Q,pt,0,_t):e.framebufferTexture2D(e.FRAMEBUFFER,lt,Q,pt,0);else throw new Error("Unknown depthTexture format")}function W(E){const x=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const q=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const it=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",it)};q.addEventListener("dispose",it),x.__depthDisposeCallback=it}x.__boundDepthTexture=q}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let q=0;q<6;q++)D(x.__webglFramebuffer[q],E,q);else{const q=E.texture.mipmaps;q&&q.length>0?D(x.__webglFramebuffer[0],E,0):D(x.__webglFramebuffer,E,0)}else if(F){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=e.createRenderbuffer(),P(x.__webglDepthbuffer[q],E,!1);else{const it=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pt=x.__webglDepthbuffer[q];e.bindRenderbuffer(e.RENDERBUFFER,pt),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,pt)}}else{const q=E.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),P(x.__webglDepthbuffer,E,!1);else{const it=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pt=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,pt),e.framebufferRenderbuffer(e.FRAMEBUFFER,it,e.RENDERBUFFER,pt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function nt(E,x,F){const q=i.get(E);x!==void 0&&Nt(q.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),F!==void 0&&W(E)}function K(E){const x=E.texture,F=i.get(E),q=i.get(x);E.addEventListener("dispose",S);const it=E.textures,pt=E.isWebGLCubeRenderTarget===!0,_t=it.length>1;if(_t||(q.__webglTexture===void 0&&(q.__webglTexture=e.createTexture()),q.__version=x.version,o.memory.textures++),pt){F.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[Q]=[];for(let lt=0;lt<x.mipmaps.length;lt++)F.__webglFramebuffer[Q][lt]=e.createFramebuffer()}else F.__webglFramebuffer[Q]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)F.__webglFramebuffer[Q]=e.createFramebuffer()}else F.__webglFramebuffer=e.createFramebuffer();if(_t)for(let Q=0,lt=it.length;Q<lt;Q++){const xt=i.get(it[Q]);xt.__webglTexture===void 0&&(xt.__webglTexture=e.createTexture(),o.memory.textures++)}if(E.samples>0&&gt(E)===!1){F.__webglMultisampledFramebuffer=e.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Q=0;Q<it.length;Q++){const lt=it[Q];F.__webglColorRenderbuffer[Q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,F.__webglColorRenderbuffer[Q]);const xt=r.convert(lt.format,lt.colorSpace),wt=r.convert(lt.type),St=M(lt.internalFormat,xt,wt,lt.normalized,lt.colorSpace,E.isXRRenderTarget===!0),yt=ot(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,yt,St,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.RENDERBUFFER,F.__webglColorRenderbuffer[Q])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=e.createRenderbuffer(),P(F.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(pt){n.bindTexture(e.TEXTURE_CUBE_MAP,q.__webglTexture),jt(e.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)Nt(F.__webglFramebuffer[Q][lt],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,lt);else Nt(F.__webglFramebuffer[Q],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(x)&&v(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_t){for(let Q=0,lt=it.length;Q<lt;Q++){const xt=it[Q],wt=i.get(xt);let St=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(St=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(St,wt.__webglTexture),jt(St,xt),Nt(F.__webglFramebuffer,E,xt,e.COLOR_ATTACHMENT0+Q,St,0),p(xt)&&v(St)}n.unbindTexture()}else{let Q=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Q,q.__webglTexture),jt(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let lt=0;lt<x.mipmaps.length;lt++)Nt(F.__webglFramebuffer[lt],E,x,e.COLOR_ATTACHMENT0,Q,lt);else Nt(F.__webglFramebuffer,E,x,e.COLOR_ATTACHMENT0,Q,0);p(x)&&v(Q),n.unbindTexture()}E.depthBuffer&&W(E)}function et(E){const x=E.textures;for(let F=0,q=x.length;F<q;F++){const it=x[F];if(p(it)){const pt=y(E),_t=i.get(it).__webglTexture;n.bindTexture(pt,_t),v(pt),n.unbindTexture()}}}const ut=[],ft=[];function A(E){if(E.samples>0){if(gt(E)===!1){const x=E.textures,F=E.width,q=E.height;let it=e.COLOR_BUFFER_BIT;const pt=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,_t=i.get(E),Q=x.length>1;if(Q)for(let xt=0;xt<x.length;xt++)n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);const lt=E.texture.mipmaps;lt&&lt.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let xt=0;xt<x.length;xt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(it|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(it|=e.STENCIL_BUFFER_BIT)),Q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,_t.__webglColorRenderbuffer[xt]);const wt=i.get(x[xt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,wt,0)}e.blitFramebuffer(0,0,F,q,0,0,F,q,it,e.NEAREST),l===!0&&(ut.length=0,ft.length=0,ut.push(e.COLOR_ATTACHMENT0+xt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(ut.push(pt),ft.push(pt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,ft)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,ut))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Q)for(let xt=0;xt<x.length;xt++){n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.RENDERBUFFER,_t.__webglColorRenderbuffer[xt]);const wt=i.get(x[xt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,_t.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+xt,e.TEXTURE_2D,wt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function ot(E){return Math.min(s.maxSamples,E.samples)}function gt(E){const x=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ct(E){const x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Z(E,x){const F=E.colorSpace,q=E.format,it=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==Rh&&F!==fr&&(_e.getTransfer(F)===Ae?(q!==Di||it!==ri)&&Zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):xe("WebGLTextures: Unsupported texture color space:",F)),x}function At(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.getTextureUnits=Y,this.setTextureUnits=U,this.setTexture2D=j,this.setTexture2DArray=st,this.setTexture3D=vt,this.setTextureCube=ht,this.rebindTextures=nt,this.setupRenderTarget=K,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=A,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=Nt,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function T3(e,t){function n(i,s=fr){let r;const o=_e.getTransfer(s);if(i===ri)return e.UNSIGNED_BYTE;if(i===om)return e.UNSIGNED_SHORT_4_4_4_4;if(i===am)return e.UNSIGNED_SHORT_5_5_5_1;if(i===$y)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Yy)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wy)return e.BYTE;if(i===Xy)return e.SHORT;if(i===Cl)return e.UNSIGNED_SHORT;if(i===rm)return e.INT;if(i===cs)return e.UNSIGNED_INT;if(i===es)return e.FLOAT;if(i===Xs)return e.HALF_FLOAT;if(i===jy)return e.ALPHA;if(i===qy)return e.RGB;if(i===Di)return e.RGBA;if(i===$s)return e.DEPTH_COMPONENT;if(i===Jr)return e.DEPTH_STENCIL;if(i===Ky)return e.RED;if(i===lm)return e.RED_INTEGER;if(i===oo)return e.RG;if(i===cm)return e.RG_INTEGER;if(i===hm)return e.RGBA_INTEGER;if(i===uh||i===dh||i===fh||i===ph)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===uh)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===dh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===fh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ph)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===uh)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===dh)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===fh)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ph)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wf||i===Xf||i===$f||i===Yf)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$f)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Yf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jf||i===qf||i===Kf||i===Zf||i===Jf||i===Th||i===Qf)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===jf||i===qf)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Kf)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Zf)return r.COMPRESSED_R11_EAC;if(i===Jf)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Th)return r.COMPRESSED_RG11_EAC;if(i===Qf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tp||i===ep||i===np||i===ip||i===sp||i===rp||i===op||i===ap||i===lp||i===cp||i===hp||i===up||i===dp||i===fp)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ep)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===np)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ip)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===op)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ap)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===cp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===up)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===dp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===fp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===pp||i===mp||i===_p)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===pp)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mp)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_p)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gp||i===xp||i===Ah||i===vp)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===gp)return r.COMPRESSED_RED_RGTC1_EXT;if(i===xp)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ah)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Pl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const A3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R3=`
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

}`;class C3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new oS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new hs({vertexShader:A3,fragmentShader:R3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ue(new Vl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class P3 extends Tr{constructor(t,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null;const _=typeof XRWebGLBinding<"u",m=new C3,p={},v=n.getContextAttributes();let y=null,M=null;const C=[],w=[],R=new te;let S=null;const T=new si;T.viewport=new tn;const O=new si;O.viewport=new tn;const L=[T,O],I=new BP;let V=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let Tt=C[rt];return Tt===void 0&&(Tt=new Rd,C[rt]=Tt),Tt.getTargetRaySpace()},this.getControllerGrip=function(rt){let Tt=C[rt];return Tt===void 0&&(Tt=new Rd,C[rt]=Tt),Tt.getGripSpace()},this.getHand=function(rt){let Tt=C[rt];return Tt===void 0&&(Tt=new Rd,C[rt]=Tt),Tt.getHandSpace()};function U(rt){const Tt=w.indexOf(rt.inputSource);if(Tt===-1)return;const dt=C[Tt];dt!==void 0&&(dt.update(rt.inputSource,rt.frame,c||o),dt.dispatchEvent({type:rt.type,data:rt.inputSource}))}function k(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",B);for(let rt=0;rt<C.length;rt++){const Tt=w[rt];Tt!==null&&(w[rt]=null,C[rt].disconnect(Tt))}V=null,Y=null,m.reset();for(const rt in p)delete p[rt];t.setRenderTarget(y),u=null,f=null,d=null,s=null,M=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(S),t.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){r=rt,i.isPresenting===!0&&Zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){a=rt,i.isPresenting===!0&&Zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(rt){c=rt},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(rt){if(s=rt,s!==null){if(y=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",k),s.addEventListener("inputsourceschange",B),v.xrCompatible!==!0&&await n.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let dt=null,Rt=null,Dt=null;v.depth&&(Dt=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,dt=v.stencil?Jr:$s,Rt=v.stencil?Pl:cs);const Nt={colorFormat:n.RGBA8,depthFormat:Dt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Nt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new rs(f.textureWidth,f.textureHeight,{format:Di,type:ri,depthTexture:new pa(f.textureWidth,f.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,dt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const dt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,n,dt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new rs(u.framebufferWidth,u.framebufferHeight,{format:Di,type:ri,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(rt){for(let Tt=0;Tt<rt.removed.length;Tt++){const dt=rt.removed[Tt],Rt=w.indexOf(dt);Rt>=0&&(w[Rt]=null,C[Rt].disconnect(dt))}for(let Tt=0;Tt<rt.added.length;Tt++){const dt=rt.added[Tt];let Rt=w.indexOf(dt);if(Rt===-1){for(let Nt=0;Nt<C.length;Nt++)if(Nt>=w.length){w.push(dt),Rt=Nt;break}else if(w[Nt]===null){w[Nt]=dt,Rt=Nt;break}if(Rt===-1)break}const Dt=C[Rt];Dt&&Dt.connect(dt)}}const j=new H,st=new H;function vt(rt,Tt,dt){j.setFromMatrixPosition(Tt.matrixWorld),st.setFromMatrixPosition(dt.matrixWorld);const Rt=j.distanceTo(st),Dt=Tt.projectionMatrix.elements,Nt=dt.projectionMatrix.elements,P=Dt[14]/(Dt[10]-1),D=Dt[14]/(Dt[10]+1),W=(Dt[9]+1)/Dt[5],nt=(Dt[9]-1)/Dt[5],K=(Dt[8]-1)/Dt[0],et=(Nt[8]+1)/Nt[0],ut=P*K,ft=P*et,A=Rt/(-K+et),ot=A*-K;if(Tt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(ot),rt.translateZ(A),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert(),Dt[10]===-1)rt.projectionMatrix.copy(Tt.projectionMatrix),rt.projectionMatrixInverse.copy(Tt.projectionMatrixInverse);else{const gt=P+A,ct=D+A,Z=ut-ot,At=ft+(Rt-ot),E=W*D/ct*gt,x=nt*D/ct*gt;rt.projectionMatrix.makePerspective(Z,At,E,x,gt,ct),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}}function ht(rt,Tt){Tt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(Tt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(s===null)return;let Tt=rt.near,dt=rt.far;m.texture!==null&&(m.depthNear>0&&(Tt=m.depthNear),m.depthFar>0&&(dt=m.depthFar)),I.near=O.near=T.near=Tt,I.far=O.far=T.far=dt,(V!==I.near||Y!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),V=I.near,Y=I.far),I.layers.mask=rt.layers.mask|6,T.layers.mask=I.layers.mask&-5,O.layers.mask=I.layers.mask&-3;const Rt=rt.parent,Dt=I.cameras;ht(I,Rt);for(let Nt=0;Nt<Dt.length;Nt++)ht(Dt[Nt],Rt);Dt.length===2?vt(I,T,O):I.projectionMatrix.copy(T.projectionMatrix),tt(rt,I,Rt)};function tt(rt,Tt,dt){dt===null?rt.matrix.copy(Tt.matrixWorld):(rt.matrix.copy(dt.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(Tt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(Tt.projectionMatrix),rt.projectionMatrixInverse.copy(Tt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=Mp*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(rt){l=rt,f!==null&&(f.fixedFoveation=rt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=rt)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(rt){return p[rt]};let Jt=null;function $t(rt,Tt){if(h=Tt.getViewerPose(c||o),g=Tt,h!==null){const dt=h.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let Rt=!1;dt.length!==I.cameras.length&&(I.cameras.length=0,Rt=!0);for(let D=0;D<dt.length;D++){const W=dt[D];let nt=null;if(u!==null)nt=u.getViewport(W);else{const et=d.getViewSubImage(f,W);nt=et.viewport,D===0&&(t.setRenderTargetTextures(M,et.colorTexture,et.depthStencilTexture),t.setRenderTarget(M))}let K=L[D];K===void 0&&(K=new si,K.layers.enable(D),K.viewport=new tn,L[D]=K),K.matrix.fromArray(W.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(W.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(nt.x,nt.y,nt.width,nt.height),D===0&&(I.matrix.copy(K.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Rt===!0&&I.cameras.push(K)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=i.getBinding();const D=d.getDepthInformation(dt[0]);D&&D.isValid&&D.texture&&m.init(D,s.renderState)}if(Dt&&Dt.includes("camera-access")&&_){t.state.unbindTexture(),d=i.getBinding();for(let D=0;D<dt.length;D++){const W=dt[D].camera;if(W){let nt=p[W];nt||(nt=new oS,p[W]=nt);const K=d.getCameraImage(W);nt.sourceTexture=K}}}}for(let dt=0;dt<C.length;dt++){const Rt=w[dt],Dt=C[dt];Rt!==null&&Dt!==void 0&&Dt.update(Rt,Tt,c||o)}Jt&&Jt(rt,Tt),Tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Tt}),g=null}const jt=new hS;jt.setAnimationLoop($t),this.setAnimationLoop=function(rt){Jt=rt},this.dispose=function(){}}}const L3=new nn,gS=new ne;gS.set(-1,0,0,0,1,0,0,0,1);function D3(e,t){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,aS(e)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,v,y,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,v,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===zn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===zn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const v=t.get(p),y=v.envMap,M=v.envMapRotation;y&&(m.envMap.value=y,m.envMapRotation.value.setFromMatrix4(L3.makeRotationFromEuler(M)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(gS),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,v,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=y*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===zn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const v=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function I3(e,t,n,i){let s={},r={},o=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const M=y.program;i.uniformBlockBinding(v,M)}function c(v,y){let M=s[v.id];M===void 0&&(g(v),M=h(v),s[v.id]=M,v.addEventListener("dispose",m));const C=y.program;i.updateUBOMapping(v,C);const w=t.render.frame;r[v.id]!==w&&(f(v),r[v.id]=w)}function h(v){const y=d();v.__bindingPointIndex=y;const M=e.createBuffer(),C=v.__size,w=v.usage;return e.bindBuffer(e.UNIFORM_BUFFER,M),e.bufferData(e.UNIFORM_BUFFER,C,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,y,M),M}function d(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return xe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const y=s[v.id],M=v.uniforms,C=v.__cache;e.bindBuffer(e.UNIFORM_BUFFER,y);for(let w=0,R=M.length;w<R;w++){const S=Array.isArray(M[w])?M[w]:[M[w]];for(let T=0,O=S.length;T<O;T++){const L=S[T];if(u(L,w,T,C)===!0){const I=L.__offset,V=Array.isArray(L.value)?L.value:[L.value];let Y=0;for(let U=0;U<V.length;U++){const k=V[U],B=_(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,e.bufferSubData(e.UNIFORM_BUFFER,I+Y,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):ArrayBuffer.isView(k)?L.__data.set(new k.constructor(k.buffer,k.byteOffset,L.__data.length)):(k.toArray(L.__data,Y),Y+=B.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,I,L.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(v,y,M,C){const w=v.value,R=y+"_"+M;if(C[R]===void 0)return typeof w=="number"||typeof w=="boolean"?C[R]=w:ArrayBuffer.isView(w)?C[R]=w.slice():C[R]=w.clone(),!0;{const S=C[R];if(typeof w=="number"||typeof w=="boolean"){if(S!==w)return C[R]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(S.equals(w)===!1)return S.copy(w),!0}}return!1}function g(v){const y=v.uniforms;let M=0;const C=16;for(let R=0,S=y.length;R<S;R++){const T=Array.isArray(y[R])?y[R]:[y[R]];for(let O=0,L=T.length;O<L;O++){const I=T[O],V=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,U=V.length;Y<U;Y++){const k=V[Y],B=_(k),j=M%C,st=j%B.boundary,vt=j+st;M+=st,vt!==0&&C-vt<B.storage&&(M+=C-vt),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=B.storage}}}const w=M%C;return w>0&&(M+=C-w),v.__size=M,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?Zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Zt("WebGLRenderer: Unsupported uniform value type.",v),y}function m(v){const y=v.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),e.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const v in s)e.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const O3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Yi=null;function U3(){return Yi===null&&(Yi=new xP(O3,16,16,oo,Xs),Yi.name="DFG_LUT",Yi.minFilter=Ln,Yi.magFilter=Ln,Yi.wrapS=Fs,Yi.wrapT=Fs,Yi.generateMipmaps=!1,Yi.needsUpdate=!0),Yi}class N3{constructor(t={}){const{canvas:n=jC(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=ri}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const _=u,m=new Set([hm,cm,lm]),p=new Set([ri,cs,Cl,Pl,om,am]),v=new Uint32Array(4),y=new Int32Array(4),M=new H;let C=null,w=null;const R=[],S=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ss,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let L=!1,I=null;this._outputColorSpace=pi;let V=0,Y=0,U=null,k=-1,B=null;const j=new tn,st=new tn;let vt=null;const ht=new fe(0);let tt=0,Jt=n.width,$t=n.height,jt=1,rt=null,Tt=null;const dt=new tn(0,0,Jt,$t),Rt=new tn(0,0,Jt,$t);let Dt=!1;const Nt=new mm;let P=!1,D=!1;const W=new nn,nt=new H,K=new tn,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function ft(){return U===null?jt:1}let A=i;function ot(b,z){return n.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${im}`),n.addEventListener("webglcontextlost",mt,!1),n.addEventListener("webglcontextrestored",Vt,!1),n.addEventListener("webglcontextcreationerror",ie,!1),A===null){const z="webgl2";if(A=ot(z,b),A===null)throw ot(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw xe("WebGLRenderer: "+b.message),b}let gt,ct,Z,At,E,x,F,q,it,pt,_t,Q,lt,xt,wt,St,yt,qt,Yt,ae,N,Mt,at;function It(){gt=new UI(A),gt.init(),N=new T3(A,gt),ct=new AI(A,gt,t,N),Z=new E3(A,gt),ct.reversedDepthBuffer&&f&&Z.buffers.depth.setReversed(!0),At=new BI(A),E=new h3,x=new w3(A,gt,Z,E,ct,N,At),F=new OI(O),q=new VP(A),Mt=new wI(A,q),it=new NI(A,q,At,Mt),pt=new zI(A,it,q,Mt,At),qt=new kI(A,ct,x),wt=new RI(E),_t=new c3(O,F,gt,ct,Mt,wt),Q=new D3(O,E),lt=new d3,xt=new x3(gt),yt=new EI(O,F,Z,pt,g,l),St=new b3(O,pt,ct),at=new I3(A,At,ct,Z),Yt=new TI(A,gt,At),ae=new FI(A,gt,At),At.programs=_t.programs,O.capabilities=ct,O.extensions=gt,O.properties=E,O.renderLists=lt,O.shadowMap=St,O.state=Z,O.info=At}It(),_!==ri&&(T=new VI(_,n.width,n.height,s,r));const bt=new P3(O,A);this.xr=bt,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const b=gt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=gt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return jt},this.setPixelRatio=function(b){b!==void 0&&(jt=b,this.setSize(Jt,$t,!1))},this.getSize=function(b){return b.set(Jt,$t)},this.setSize=function(b,z,J=!0){if(bt.isPresenting){Zt("WebGLRenderer: Can't change size while VR device is presenting.");return}Jt=b,$t=z,n.width=Math.floor(b*jt),n.height=Math.floor(z*jt),J===!0&&(n.style.width=b+"px",n.style.height=z+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(Jt*jt,$t*jt).floor()},this.setDrawingBufferSize=function(b,z,J){Jt=b,$t=z,jt=J,n.width=Math.floor(b*J),n.height=Math.floor(z*J),this.setViewport(0,0,b,z)},this.setEffects=function(b){if(_===ri){xe("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let z=0;z<b.length;z++)if(b[z].isOutputPass===!0){Zt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(j)},this.getViewport=function(b){return b.copy(dt)},this.setViewport=function(b,z,J,X){b.isVector4?dt.set(b.x,b.y,b.z,b.w):dt.set(b,z,J,X),Z.viewport(j.copy(dt).multiplyScalar(jt).round())},this.getScissor=function(b){return b.copy(Rt)},this.setScissor=function(b,z,J,X){b.isVector4?Rt.set(b.x,b.y,b.z,b.w):Rt.set(b,z,J,X),Z.scissor(st.copy(Rt).multiplyScalar(jt).round())},this.getScissorTest=function(){return Dt},this.setScissorTest=function(b){Z.setScissorTest(Dt=b)},this.setOpaqueSort=function(b){rt=b},this.setTransparentSort=function(b){Tt=b},this.getClearColor=function(b){return b.copy(yt.getClearColor())},this.setClearColor=function(){yt.setClearColor(...arguments)},this.getClearAlpha=function(){return yt.getClearAlpha()},this.setClearAlpha=function(){yt.setClearAlpha(...arguments)},this.clear=function(b=!0,z=!0,J=!0){let X=0;if(b){let $=!1;if(U!==null){const Lt=U.texture.format;$=m.has(Lt)}if($){const Lt=U.texture.type,Ft=p.has(Lt),Pt=yt.getClearColor(),kt=yt.getClearAlpha(),Wt=Pt.r,se=Pt.g,he=Pt.b;Ft?(v[0]=Wt,v[1]=se,v[2]=he,v[3]=kt,A.clearBufferuiv(A.COLOR,0,v)):(y[0]=Wt,y[1]=se,y[2]=he,y[3]=kt,A.clearBufferiv(A.COLOR,0,y))}else X|=A.COLOR_BUFFER_BIT}z&&(X|=A.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&A.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){n.removeEventListener("webglcontextlost",mt,!1),n.removeEventListener("webglcontextrestored",Vt,!1),n.removeEventListener("webglcontextcreationerror",ie,!1),yt.dispose(),lt.dispose(),xt.dispose(),E.dispose(),F.dispose(),pt.dispose(),Mt.dispose(),at.dispose(),_t.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",bm),bt.removeEventListener("sessionend",Em),Ar.stop()};function mt(b){b.preventDefault(),Z0("WebGLRenderer: Context Lost."),L=!0}function Vt(){Z0("WebGLRenderer: Context Restored."),L=!1;const b=At.autoReset,z=St.enabled,J=St.autoUpdate,X=St.needsUpdate,$=St.type;It(),At.autoReset=b,St.enabled=z,St.autoUpdate=J,St.needsUpdate=X,St.type=$}function ie(b){xe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function on(b){const z=b.target;z.removeEventListener("dispose",on),Ce(z)}function Ce(b){fs(b),E.remove(b)}function fs(b){const z=E.get(b).programs;z!==void 0&&(z.forEach(function(J){_t.releaseProgram(J)}),b.isShaderMaterial&&_t.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,J,X,$,Lt){z===null&&(z=et);const Ft=$.isMesh&&$.matrixWorld.determinant()<0,Pt=SS(b,z,J,X,$);Z.setMaterial(X,Ft);let kt=J.index,Wt=1;if(X.wireframe===!0){if(kt=it.getWireframeAttribute(J),kt===void 0)return;Wt=2}const se=J.drawRange,he=J.attributes.position;let Xt=se.start*Wt,Pe=(se.start+se.count)*Wt;Lt!==null&&(Xt=Math.max(Xt,Lt.start*Wt),Pe=Math.min(Pe,(Lt.start+Lt.count)*Wt)),kt!==null?(Xt=Math.max(Xt,0),Pe=Math.min(Pe,kt.count)):he!=null&&(Xt=Math.max(Xt,0),Pe=Math.min(Pe,he.count));const an=Pe-Xt;if(an<0||an===1/0)return;Mt.setup($,X,Pt,J,kt);let Je,Ie=Yt;if(kt!==null&&(Je=q.get(kt),Ie=ae,Ie.setIndex(Je)),$.isMesh)X.wireframe===!0?(Z.setLineWidth(X.wireframeLinewidth*ft()),Ie.setMode(A.LINES)):Ie.setMode(A.TRIANGLES);else if($.isLine){let Tn=X.linewidth;Tn===void 0&&(Tn=1),Z.setLineWidth(Tn*ft()),$.isLineSegments?Ie.setMode(A.LINES):$.isLineLoop?Ie.setMode(A.LINE_LOOP):Ie.setMode(A.LINE_STRIP)}else $.isPoints?Ie.setMode(A.POINTS):$.isSprite&&Ie.setMode(A.TRIANGLES);if($.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))Ie.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Tn=$._multiDrawStarts,Ut=$._multiDrawCounts,Qn=$._multiDrawCount,ge=kt?q.get(kt).bytesPerElement:1,ai=E.get(X).currentProgram.getUniforms();for(let Hi=0;Hi<Qn;Hi++)ai.setValue(A,"_gl_DrawID",Hi),Ie.render(Tn[Hi]/ge,Ut[Hi])}else if($.isInstancedMesh)Ie.renderInstances(Xt,an,$.count);else if(J.isInstancedBufferGeometry){const Tn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ut=Math.min(J.instanceCount,Tn);Ie.renderInstances(Xt,an,Ut)}else Ie.render(Xt,an)};function zi(b,z,J){b.transparent===!0&&b.side===Us&&b.forceSinglePass===!1?(b.side=zn,b.needsUpdate=!0,Wl(b,z,J),b.side=Mr,b.needsUpdate=!0,Wl(b,z,J),b.side=Us):Wl(b,z,J)}this.compile=function(b,z,J=null){J===null&&(J=b),w=xt.get(J),w.init(z),S.push(w),J.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),b!==J&&b.traverseVisible(function($){$.isLight&&$.layers.test(z.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights();const X=new Set;return b.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Lt=$.material;if(Lt)if(Array.isArray(Lt))for(let Ft=0;Ft<Lt.length;Ft++){const Pt=Lt[Ft];zi(Pt,J,$),X.add(Pt)}else zi(Lt,J,$),X.add(Lt)}),w=S.pop(),X},this.compileAsync=function(b,z,J=null){const X=this.compile(b,z,J);return new Promise($=>{function Lt(){if(X.forEach(function(Ft){E.get(Ft).currentProgram.isReady()&&X.delete(Ft)}),X.size===0){$(b);return}setTimeout(Lt,10)}gt.get("KHR_parallel_shader_compile")!==null?Lt():setTimeout(Lt,10)})};let eu=null;function vS(b){eu&&eu(b)}function bm(){Ar.stop()}function Em(){Ar.start()}const Ar=new hS;Ar.setAnimationLoop(vS),typeof self<"u"&&Ar.setContext(self),this.setAnimationLoop=function(b){eu=b,bt.setAnimationLoop(b),b===null?Ar.stop():Ar.start()},bt.addEventListener("sessionstart",bm),bt.addEventListener("sessionend",Em),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){xe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;I!==null&&I.renderStart(b,z);const J=bt.enabled===!0&&bt.isPresenting===!0,X=T!==null&&(U===null||J)&&T.begin(O,U);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(z),z=bt.getCamera()),b.isScene===!0&&b.onBeforeRender(O,b,z,U),w=xt.get(b,S.length),w.init(z),w.state.textureUnits=x.getTextureUnits(),S.push(w),W.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Nt.setFromProjectionMatrix(W,ns,z.reversedDepth),D=this.localClippingEnabled,P=wt.init(this.clippingPlanes,D),C=lt.get(b,R.length),C.init(),R.push(C),bt.enabled===!0&&bt.isPresenting===!0){const Ft=O.xr.getDepthSensingMesh();Ft!==null&&nu(Ft,z,-1/0,O.sortObjects)}nu(b,z,0,O.sortObjects),C.finish(),O.sortObjects===!0&&C.sort(rt,Tt),ut=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,ut&&yt.addToRenderList(C,b),this.info.render.frame++,P===!0&&wt.beginShadows();const $=w.state.shadowsArray;if(St.render($,b,z),P===!0&&wt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&T.hasRenderPass())===!1){const Ft=C.opaque,Pt=C.transmissive;if(w.setupLights(),z.isArrayCamera){const kt=z.cameras;if(Pt.length>0)for(let Wt=0,se=kt.length;Wt<se;Wt++){const he=kt[Wt];Tm(Ft,Pt,b,he)}ut&&yt.render(b);for(let Wt=0,se=kt.length;Wt<se;Wt++){const he=kt[Wt];wm(C,b,he,he.viewport)}}else Pt.length>0&&Tm(Ft,Pt,b,z),ut&&yt.render(b),wm(C,b,z)}U!==null&&Y===0&&(x.updateMultisampleRenderTarget(U),x.updateRenderTargetMipmap(U)),X&&T.end(O),b.isScene===!0&&b.onAfterRender(O,b,z),Mt.resetDefaultState(),k=-1,B=null,S.pop(),S.length>0?(w=S[S.length-1],x.setTextureUnits(w.state.textureUnits),P===!0&&wt.setGlobalState(O.clippingPlanes,w.state.camera)):w=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,I!==null&&I.renderEnd()};function nu(b,z,J,X){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Nt.intersectsSprite(b)){X&&K.setFromMatrixPosition(b.matrixWorld).applyMatrix4(W);const Ft=pt.update(b),Pt=b.material;Pt.visible&&C.push(b,Ft,Pt,J,K.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Nt.intersectsObject(b))){const Ft=pt.update(b),Pt=b.material;if(X&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),K.copy(b.boundingSphere.center)):(Ft.boundingSphere===null&&Ft.computeBoundingSphere(),K.copy(Ft.boundingSphere.center)),K.applyMatrix4(b.matrixWorld).applyMatrix4(W)),Array.isArray(Pt)){const kt=Ft.groups;for(let Wt=0,se=kt.length;Wt<se;Wt++){const he=kt[Wt],Xt=Pt[he.materialIndex];Xt&&Xt.visible&&C.push(b,Ft,Xt,J,K.z,he)}}else Pt.visible&&C.push(b,Ft,Pt,J,K.z,null)}}const Lt=b.children;for(let Ft=0,Pt=Lt.length;Ft<Pt;Ft++)nu(Lt[Ft],z,J,X)}function wm(b,z,J,X){const{opaque:$,transmissive:Lt,transparent:Ft}=b;w.setupLightsView(J),P===!0&&wt.setGlobalState(O.clippingPlanes,J),X&&Z.viewport(j.copy(X)),$.length>0&&Gl($,z,J),Lt.length>0&&Gl(Lt,z,J),Ft.length>0&&Gl(Ft,z,J),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function Tm(b,z,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[X.id]===void 0){const Xt=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[X.id]=new rs(1,1,{generateMipmaps:!0,type:Xt?Xs:ri,minFilter:Zr,samples:Math.max(4,ct.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_e.workingColorSpace})}const Lt=w.state.transmissionRenderTarget[X.id],Ft=X.viewport||j;Lt.setSize(Ft.z*O.transmissionResolutionScale,Ft.w*O.transmissionResolutionScale);const Pt=O.getRenderTarget(),kt=O.getActiveCubeFace(),Wt=O.getActiveMipmapLevel();O.setRenderTarget(Lt),O.getClearColor(ht),tt=O.getClearAlpha(),tt<1&&O.setClearColor(16777215,.5),O.clear(),ut&&yt.render(J);const se=O.toneMapping;O.toneMapping=ss;const he=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),w.setupLightsView(X),P===!0&&wt.setGlobalState(O.clippingPlanes,X),Gl(b,J,X),x.updateMultisampleRenderTarget(Lt),x.updateRenderTargetMipmap(Lt),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Xt=!1;for(let Pe=0,an=z.length;Pe<an;Pe++){const Je=z[Pe],{object:Ie,geometry:Tn,material:Ut,group:Qn}=Je;if(Ut.side===Us&&Ie.layers.test(X.layers)){const ge=Ut.side;Ut.side=zn,Ut.needsUpdate=!0,Am(Ie,J,X,Tn,Ut,Qn),Ut.side=ge,Ut.needsUpdate=!0,Xt=!0}}Xt===!0&&(x.updateMultisampleRenderTarget(Lt),x.updateRenderTargetMipmap(Lt))}O.setRenderTarget(Pt,kt,Wt),O.setClearColor(ht,tt),he!==void 0&&(X.viewport=he),O.toneMapping=se}function Gl(b,z,J){const X=z.isScene===!0?z.overrideMaterial:null;for(let $=0,Lt=b.length;$<Lt;$++){const Ft=b[$],{object:Pt,geometry:kt,group:Wt}=Ft;let se=Ft.material;se.allowOverride===!0&&X!==null&&(se=X),Pt.layers.test(J.layers)&&Am(Pt,z,J,kt,se,Wt)}}function Am(b,z,J,X,$,Lt){b.onBeforeRender(O,z,J,X,$,Lt),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),$.onBeforeRender(O,z,J,X,b,Lt),$.transparent===!0&&$.side===Us&&$.forceSinglePass===!1?($.side=zn,$.needsUpdate=!0,O.renderBufferDirect(J,z,X,$,b,Lt),$.side=Mr,$.needsUpdate=!0,O.renderBufferDirect(J,z,X,$,b,Lt),$.side=Us):O.renderBufferDirect(J,z,X,$,b,Lt),b.onAfterRender(O,z,J,X,$,Lt)}function Wl(b,z,J){z.isScene!==!0&&(z=et);const X=E.get(b),$=w.state.lights,Lt=w.state.shadowsArray,Ft=$.state.version,Pt=_t.getParameters(b,$.state,Lt,z,J,w.state.lightProbeGridArray),kt=_t.getProgramCacheKey(Pt);let Wt=X.programs;X.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?z.environment:null,X.fog=z.fog;const se=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;X.envMap=F.get(b.envMap||X.environment,se),X.envMapRotation=X.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Wt===void 0&&(b.addEventListener("dispose",on),Wt=new Map,X.programs=Wt);let he=Wt.get(kt);if(he!==void 0){if(X.currentProgram===he&&X.lightsStateVersion===Ft)return Cm(b,Pt),he}else Pt.uniforms=_t.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,J,Pt),b.onBeforeCompile(Pt,O),he=_t.acquireProgram(Pt,kt),Wt.set(kt,he),X.uniforms=Pt.uniforms;const Xt=X.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xt.clippingPlanes=wt.uniform),Cm(b,Pt),X.needsLights=bS(b),X.lightsStateVersion=Ft,X.needsLights&&(Xt.ambientLightColor.value=$.state.ambient,Xt.lightProbe.value=$.state.probe,Xt.directionalLights.value=$.state.directional,Xt.directionalLightShadows.value=$.state.directionalShadow,Xt.spotLights.value=$.state.spot,Xt.spotLightShadows.value=$.state.spotShadow,Xt.rectAreaLights.value=$.state.rectArea,Xt.ltc_1.value=$.state.rectAreaLTC1,Xt.ltc_2.value=$.state.rectAreaLTC2,Xt.pointLights.value=$.state.point,Xt.pointLightShadows.value=$.state.pointShadow,Xt.hemisphereLights.value=$.state.hemi,Xt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Xt.spotLightMatrix.value=$.state.spotLightMatrix,Xt.spotLightMap.value=$.state.spotLightMap,Xt.pointShadowMatrix.value=$.state.pointShadowMatrix),X.lightProbeGrid=w.state.lightProbeGridArray.length>0,X.currentProgram=he,X.uniformsList=null,he}function Rm(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=_h.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Cm(b,z){const J=E.get(b);J.outputColorSpace=z.outputColorSpace,J.batching=z.batching,J.batchingColor=z.batchingColor,J.instancing=z.instancing,J.instancingColor=z.instancingColor,J.instancingMorph=z.instancingMorph,J.skinning=z.skinning,J.morphTargets=z.morphTargets,J.morphNormals=z.morphNormals,J.morphColors=z.morphColors,J.morphTargetsCount=z.morphTargetsCount,J.numClippingPlanes=z.numClippingPlanes,J.numIntersection=z.numClipIntersection,J.vertexAlphas=z.vertexAlphas,J.vertexTangents=z.vertexTangents,J.toneMapping=z.toneMapping}function yS(b,z){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;M.setFromMatrixPosition(z.matrixWorld);for(let J=0,X=b.length;J<X;J++){const $=b[J];if($.texture!==null&&$.boundingBox.containsPoint(M))return $}return null}function SS(b,z,J,X,$){z.isScene!==!0&&(z=et),x.resetTextureUnits();const Lt=z.fog,Ft=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?z.environment:null,Pt=U===null?O.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:_e.workingColorSpace,kt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Wt=F.get(X.envMap||Ft,kt),se=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,he=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Xt=!!J.morphAttributes.position,Pe=!!J.morphAttributes.normal,an=!!J.morphAttributes.color;let Je=ss;X.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Je=O.toneMapping);const Ie=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Tn=Ie!==void 0?Ie.length:0,Ut=E.get(X),Qn=w.state.lights;if(P===!0&&(D===!0||b!==B)){const Be=b===B&&X.id===k;wt.setState(X,b,Be)}let ge=!1;X.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Qn.state.version||Ut.outputColorSpace!==Pt||$.isBatchedMesh&&Ut.batching===!1||!$.isBatchedMesh&&Ut.batching===!0||$.isBatchedMesh&&Ut.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ut.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ut.instancing===!1||!$.isInstancedMesh&&Ut.instancing===!0||$.isSkinnedMesh&&Ut.skinning===!1||!$.isSkinnedMesh&&Ut.skinning===!0||$.isInstancedMesh&&Ut.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ut.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ut.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ut.instancingMorph===!1&&$.morphTexture!==null||Ut.envMap!==Wt||X.fog===!0&&Ut.fog!==Lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==wt.numPlanes||Ut.numIntersection!==wt.numIntersection)||Ut.vertexAlphas!==se||Ut.vertexTangents!==he||Ut.morphTargets!==Xt||Ut.morphNormals!==Pe||Ut.morphColors!==an||Ut.toneMapping!==Je||Ut.morphTargetsCount!==Tn||!!Ut.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ge=!0):(ge=!0,Ut.__version=X.version);let ai=Ut.currentProgram;ge===!0&&(ai=Wl(X,z,$),I&&X.isNodeMaterial&&I.onUpdateProgram(X,ai,Ut));let Hi=!1,Ks=!1,ho=!1;const Oe=ai.getUniforms(),ln=Ut.uniforms;if(Z.useProgram(ai.program)&&(Hi=!0,Ks=!0,ho=!0),X.id!==k&&(k=X.id,Ks=!0),Ut.needsLights){const Be=yS(w.state.lightProbeGridArray,$);Ut.lightProbeGrid!==Be&&(Ut.lightProbeGrid=Be,Ks=!0)}if(Hi||B!==b){Z.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Oe.setValue(A,"projectionMatrix",b.projectionMatrix),Oe.setValue(A,"viewMatrix",b.matrixWorldInverse);const Js=Oe.map.cameraPosition;Js!==void 0&&Js.setValue(A,nt.setFromMatrixPosition(b.matrixWorld)),ct.logarithmicDepthBuffer&&Oe.setValue(A,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Oe.setValue(A,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,Ks=!0,ho=!0)}if(Ut.needsLights&&(Qn.state.directionalShadowMap.length>0&&Oe.setValue(A,"directionalShadowMap",Qn.state.directionalShadowMap,x),Qn.state.spotShadowMap.length>0&&Oe.setValue(A,"spotShadowMap",Qn.state.spotShadowMap,x),Qn.state.pointShadowMap.length>0&&Oe.setValue(A,"pointShadowMap",Qn.state.pointShadowMap,x)),$.isSkinnedMesh){Oe.setOptional(A,$,"bindMatrix"),Oe.setOptional(A,$,"bindMatrixInverse");const Be=$.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),Oe.setValue(A,"boneTexture",Be.boneTexture,x))}$.isBatchedMesh&&(Oe.setOptional(A,$,"batchingTexture"),Oe.setValue(A,"batchingTexture",$._matricesTexture,x),Oe.setOptional(A,$,"batchingIdTexture"),Oe.setValue(A,"batchingIdTexture",$._indirectTexture,x),Oe.setOptional(A,$,"batchingColorTexture"),$._colorsTexture!==null&&Oe.setValue(A,"batchingColorTexture",$._colorsTexture,x));const Zs=J.morphAttributes;if((Zs.position!==void 0||Zs.normal!==void 0||Zs.color!==void 0)&&qt.update($,J,ai),(Ks||Ut.receiveShadow!==$.receiveShadow)&&(Ut.receiveShadow=$.receiveShadow,Oe.setValue(A,"receiveShadow",$.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&z.environment!==null&&(ln.envMapIntensity.value=z.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=U3()),Ks){if(Oe.setValue(A,"toneMappingExposure",O.toneMappingExposure),Ut.needsLights&&MS(ln,ho),Lt&&X.fog===!0&&Q.refreshFogUniforms(ln,Lt),Q.refreshMaterialUniforms(ln,X,jt,$t,w.state.transmissionRenderTarget[b.id]),Ut.needsLights&&Ut.lightProbeGrid){const Be=Ut.lightProbeGrid;ln.probesSH.value=Be.texture,ln.probesMin.value.copy(Be.boundingBox.min),ln.probesMax.value.copy(Be.boundingBox.max),ln.probesResolution.value.copy(Be.resolution)}_h.upload(A,Rm(Ut),ln,x)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(_h.upload(A,Rm(Ut),ln,x),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Oe.setValue(A,"center",$.center),Oe.setValue(A,"modelViewMatrix",$.modelViewMatrix),Oe.setValue(A,"normalMatrix",$.normalMatrix),Oe.setValue(A,"modelMatrix",$.matrixWorld),X.uniformsGroups!==void 0){const Be=X.uniformsGroups;for(let Js=0,uo=Be.length;Js<uo;Js++){const Pm=Be[Js];at.update(Pm,ai),at.bind(Pm,ai)}}return ai}function MS(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function bS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(b,z,J){const X=E.get(b);X.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),E.get(b.texture).__webglTexture=z,E.get(b.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,z){const J=E.get(b);J.__webglFramebuffer=z,J.__useDefaultFramebuffer=z===void 0};const ES=A.createFramebuffer();this.setRenderTarget=function(b,z=0,J=0){U=b,V=z,Y=J;let X=null,$=!1,Lt=!1;if(b){const Pt=E.get(b);if(Pt.__useDefaultFramebuffer!==void 0){Z.bindFramebuffer(A.FRAMEBUFFER,Pt.__webglFramebuffer),j.copy(b.viewport),st.copy(b.scissor),vt=b.scissorTest,Z.viewport(j),Z.scissor(st),Z.setScissorTest(vt),k=-1;return}else if(Pt.__webglFramebuffer===void 0)x.setupRenderTarget(b);else if(Pt.__hasExternalTextures)x.rebindTextures(b,E.get(b.texture).__webglTexture,E.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const se=b.depthTexture;if(Pt.__boundDepthTexture!==se){if(se!==null&&E.has(se)&&(b.width!==se.image.width||b.height!==se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(b)}}const kt=b.texture;(kt.isData3DTexture||kt.isDataArrayTexture||kt.isCompressedArrayTexture)&&(Lt=!0);const Wt=E.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Wt[z])?X=Wt[z][J]:X=Wt[z],$=!0):b.samples>0&&x.useMultisampledRTT(b)===!1?X=E.get(b).__webglMultisampledFramebuffer:Array.isArray(Wt)?X=Wt[J]:X=Wt,j.copy(b.viewport),st.copy(b.scissor),vt=b.scissorTest}else j.copy(dt).multiplyScalar(jt).floor(),st.copy(Rt).multiplyScalar(jt).floor(),vt=Dt;if(J!==0&&(X=ES),Z.bindFramebuffer(A.FRAMEBUFFER,X)&&Z.drawBuffers(b,X),Z.viewport(j),Z.scissor(st),Z.setScissorTest(vt),$){const Pt=E.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+z,Pt.__webglTexture,J)}else if(Lt){const Pt=z;for(let kt=0;kt<b.textures.length;kt++){const Wt=E.get(b.textures[kt]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+kt,Wt.__webglTexture,J,Pt)}}else if(b!==null&&J!==0){const Pt=E.get(b.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Pt.__webglTexture,J)}k=-1},this.readRenderTargetPixels=function(b,z,J,X,$,Lt,Ft,Pt=0){if(!(b&&b.isWebGLRenderTarget)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt){Z.bindFramebuffer(A.FRAMEBUFFER,kt);try{const Wt=b.textures[Pt],se=Wt.format,he=Wt.type;if(b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Pt),!ct.textureFormatReadable(se)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(he)){xe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-X&&J>=0&&J<=b.height-$&&A.readPixels(z,J,X,$,N.convert(se),N.convert(he),Lt)}finally{const Wt=U!==null?E.get(U).__webglFramebuffer:null;Z.bindFramebuffer(A.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(b,z,J,X,$,Lt,Ft,Pt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ft!==void 0&&(kt=kt[Ft]),kt)if(z>=0&&z<=b.width-X&&J>=0&&J<=b.height-$){Z.bindFramebuffer(A.FRAMEBUFFER,kt);const Wt=b.textures[Pt],se=Wt.format,he=Wt.type;if(b.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Pt),!ct.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(he))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Xt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Xt),A.bufferData(A.PIXEL_PACK_BUFFER,Lt.byteLength,A.STREAM_READ),A.readPixels(z,J,X,$,N.convert(se),N.convert(he),0);const Pe=U!==null?E.get(U).__webglFramebuffer:null;Z.bindFramebuffer(A.FRAMEBUFFER,Pe);const an=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await qC(A,an,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Xt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,Lt),A.deleteBuffer(Xt),A.deleteSync(an),Lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,z=null,J=0){const X=Math.pow(2,-J),$=Math.floor(b.image.width*X),Lt=Math.floor(b.image.height*X),Ft=z!==null?z.x:0,Pt=z!==null?z.y:0;x.setTexture2D(b,0),A.copyTexSubImage2D(A.TEXTURE_2D,J,0,0,Ft,Pt,$,Lt),Z.unbindTexture()};const wS=A.createFramebuffer(),TS=A.createFramebuffer();this.copyTextureToTexture=function(b,z,J=null,X=null,$=0,Lt=0){let Ft,Pt,kt,Wt,se,he,Xt,Pe,an;const Je=b.isCompressedTexture?b.mipmaps[Lt]:b.image;if(J!==null)Ft=J.max.x-J.min.x,Pt=J.max.y-J.min.y,kt=J.isBox3?J.max.z-J.min.z:1,Wt=J.min.x,se=J.min.y,he=J.isBox3?J.min.z:0;else{const ln=Math.pow(2,-$);Ft=Math.floor(Je.width*ln),Pt=Math.floor(Je.height*ln),b.isDataArrayTexture?kt=Je.depth:b.isData3DTexture?kt=Math.floor(Je.depth*ln):kt=1,Wt=0,se=0,he=0}X!==null?(Xt=X.x,Pe=X.y,an=X.z):(Xt=0,Pe=0,an=0);const Ie=N.convert(z.format),Tn=N.convert(z.type);let Ut;z.isData3DTexture?(x.setTexture3D(z,0),Ut=A.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(x.setTexture2DArray(z,0),Ut=A.TEXTURE_2D_ARRAY):(x.setTexture2D(z,0),Ut=A.TEXTURE_2D),Z.activeTexture(A.TEXTURE0),Z.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,z.flipY),Z.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Z.pixelStorei(A.UNPACK_ALIGNMENT,z.unpackAlignment);const Qn=Z.getParameter(A.UNPACK_ROW_LENGTH),ge=Z.getParameter(A.UNPACK_IMAGE_HEIGHT),ai=Z.getParameter(A.UNPACK_SKIP_PIXELS),Hi=Z.getParameter(A.UNPACK_SKIP_ROWS),Ks=Z.getParameter(A.UNPACK_SKIP_IMAGES);Z.pixelStorei(A.UNPACK_ROW_LENGTH,Je.width),Z.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Je.height),Z.pixelStorei(A.UNPACK_SKIP_PIXELS,Wt),Z.pixelStorei(A.UNPACK_SKIP_ROWS,se),Z.pixelStorei(A.UNPACK_SKIP_IMAGES,he);const ho=b.isDataArrayTexture||b.isData3DTexture,Oe=z.isDataArrayTexture||z.isData3DTexture;if(b.isDepthTexture){const ln=E.get(b),Zs=E.get(z),Be=E.get(ln.__renderTarget),Js=E.get(Zs.__renderTarget);Z.bindFramebuffer(A.READ_FRAMEBUFFER,Be.__webglFramebuffer),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,Js.__webglFramebuffer);for(let uo=0;uo<kt;uo++)ho&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,E.get(b).__webglTexture,$,he+uo),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,E.get(z).__webglTexture,Lt,an+uo)),A.blitFramebuffer(Wt,se,Ft,Pt,Xt,Pe,Ft,Pt,A.DEPTH_BUFFER_BIT,A.NEAREST);Z.bindFramebuffer(A.READ_FRAMEBUFFER,null),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if($!==0||b.isRenderTargetTexture||E.has(b)){const ln=E.get(b),Zs=E.get(z);Z.bindFramebuffer(A.READ_FRAMEBUFFER,wS),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,TS);for(let Be=0;Be<kt;Be++)ho?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ln.__webglTexture,$,he+Be):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ln.__webglTexture,$),Oe?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Zs.__webglTexture,Lt,an+Be):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Zs.__webglTexture,Lt),$!==0?A.blitFramebuffer(Wt,se,Ft,Pt,Xt,Pe,Ft,Pt,A.COLOR_BUFFER_BIT,A.NEAREST):Oe?A.copyTexSubImage3D(Ut,Lt,Xt,Pe,an+Be,Wt,se,Ft,Pt):A.copyTexSubImage2D(Ut,Lt,Xt,Pe,Wt,se,Ft,Pt);Z.bindFramebuffer(A.READ_FRAMEBUFFER,null),Z.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else Oe?b.isDataTexture||b.isData3DTexture?A.texSubImage3D(Ut,Lt,Xt,Pe,an,Ft,Pt,kt,Ie,Tn,Je.data):z.isCompressedArrayTexture?A.compressedTexSubImage3D(Ut,Lt,Xt,Pe,an,Ft,Pt,kt,Ie,Je.data):A.texSubImage3D(Ut,Lt,Xt,Pe,an,Ft,Pt,kt,Ie,Tn,Je):b.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,Lt,Xt,Pe,Ft,Pt,Ie,Tn,Je.data):b.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,Lt,Xt,Pe,Je.width,Je.height,Ie,Je.data):A.texSubImage2D(A.TEXTURE_2D,Lt,Xt,Pe,Ft,Pt,Ie,Tn,Je);Z.pixelStorei(A.UNPACK_ROW_LENGTH,Qn),Z.pixelStorei(A.UNPACK_IMAGE_HEIGHT,ge),Z.pixelStorei(A.UNPACK_SKIP_PIXELS,ai),Z.pixelStorei(A.UNPACK_SKIP_ROWS,Hi),Z.pixelStorei(A.UNPACK_SKIP_IMAGES,Ks),Lt===0&&z.generateMipmaps&&A.generateMipmap(Ut),Z.unbindTexture()},this.initRenderTarget=function(b){E.get(b).__webglFramebuffer===void 0&&x.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?x.setTextureCube(b,0):b.isData3DTexture?x.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?x.setTexture2DArray(b,0):x.setTexture2D(b,0),Z.unbindTexture()},this.resetState=function(){V=0,Y=0,U=null,Z.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ns}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=_e._getDrawingBufferColorSpace(t),n.unpackColorSpace=_e._getUnpackColorSpace()}}const jx={type:"change"},gm={type:"start"},xS={type:"end"},th=new pm,qx=new ur,F3=Math.cos(70*JC.DEG2RAD),pn=new H,Xn=2*Math.PI,Le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Qd=1e-6;class B3 extends zP{constructor(t,n=null){super(t,n),this.state=Le.NONE,this.target=new H,this.cursor=new H,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sa.ROTATE,MIDDLE:sa.DOLLY,RIGHT:sa.PAN},this.touches={ONE:Zo.ROTATE,TWO:Zo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new H,this._lastQuaternion=new br,this._lastTargetPosition=new H,this._quat=new br().setFromUnitVectors(t.up,new H(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Mx,this._sphericalDelta=new Mx,this._scale=1,this._panOffset=new H,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new H,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=z3.bind(this),this._onPointerDown=k3.bind(this),this._onPointerUp=H3.bind(this),this._onContextMenu=j3.bind(this),this._onMouseWheel=W3.bind(this),this._onKeyDown=X3.bind(this),this._onTouchStart=$3.bind(this),this._onTouchMove=Y3.bind(this),this._onMouseDown=V3.bind(this),this._onMouseMove=G3.bind(this),this._interceptControlDown=q3.bind(this),this._interceptControlUp=K3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jx),this.update(),this.state=Le.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;pn.copy(n).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Xn:i>Math.PI&&(i-=Xn),s<-Math.PI?s+=Xn:s>Math.PI&&(s-=Xn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),n.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=pn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new H(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new H(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(th.origin.copy(this.object.position),th.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(th.direction))<F3?this.object.lookAt(this.target):(qx.setFromNormalAndCoplanarPoint(this.object.up,this.target),th.intersectPlane(qx,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Qd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Qd||this._lastTargetPosition.distanceToSquared(this.target)>Qd?(this.dispatchEvent(jx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Xn/60*this.autoRotateSpeed*t:Xn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){pn.setFromMatrixColumn(n,0),pn.multiplyScalar(-t),this._panOffset.add(pn)}_panUp(t,n){this.screenSpacePanning===!0?pn.setFromMatrixColumn(n,1):(pn.setFromMatrixColumn(n,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(t),this._panOffset.add(pn)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;pn.copy(s).sub(this.target);let r=pn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Xn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Xn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Xn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+n.x)*.5,a=(t.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new te,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function k3(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function z3(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function H3(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xS),this.state=Le.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function V3(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case sa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Le.DOLLY;break;case sa.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Le.ROTATE}break;case sa.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Le.PAN}break;default:this.state=Le.NONE}this.state!==Le.NONE&&this.dispatchEvent(gm)}function G3(e){switch(this.state){case Le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function W3(e){this.enabled===!1||this.enableZoom===!1||this.state!==Le.NONE||(e.preventDefault(),this.dispatchEvent(gm),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(xS))}function X3(e){this.enabled!==!1&&this._handleKeyDown(e)}function $3(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Zo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Le.TOUCH_ROTATE;break;case Zo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Le.TOUCH_PAN;break;default:this.state=Le.NONE}break;case 2:switch(this.touches.TWO){case Zo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Le.TOUCH_DOLLY_PAN;break;case Zo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Le.TOUCH_DOLLY_ROTATE;break;default:this.state=Le.NONE}break;default:this.state=Le.NONE}this.state!==Le.NONE&&this.dispatchEvent(gm)}function Y3(e){switch(this._trackPointer(e),this.state){case Le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Le.NONE}}function j3(e){this.enabled!==!1&&e.preventDefault()}function q3(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function K3(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Z3={class:"canvas-wrapper"},J3={key:0,class:"placeholder"},Q3=Vp({__name:"Valve3DCanvas",props:{params:{}},setup(e){const t=e,n=kp(null);let i=null,s=null,r=null,o=null,a=0,l=null,c=null;function h(_){return _/100}function d(_,m=.3,p=.8){return new Qa({color:_,roughness:m,metalness:p,envMapIntensity:.8})}function f(_){const{diameter:m,height:p,flangeDiameter:v}=_,y=new al,M=h(m/2),C=v*.88,w=v,R=h(C/2),S=h(w/2),T=h(p),O=h(p*.695),L=h(m/2*1.6),I=h(C/2*.72),V=h(.3),Y=h(w*.305),U=h(m*.176),k=h(p*.31),B=8,j=T/2,st=64,vt=new Mi(R,R,O,st),ht=d(7901340,.28,.82),tt=new Ue(vt,ht);tt.position.y=-j/2+O/2,tt.position.y=-j+O/2,y.add(tt);const Jt=T-O,$t=new Mi(S,S,Jt,st),jt=d(5093036,.25,.85),rt=new Ue($t,jt);rt.position.y=-j+O+Jt/2,y.add(rt);const Tt=new Mi(S,R,Jt*.05,st),dt=new Ue(Tt,jt);dt.position.y=-j+O+Jt*.025,y.add(dt);const Rt=new Mi(M,M,T*1.02,st),Dt=new Qa({color:856343,roughness:.9,metalness:.1,side:zn}),Nt=new Ue(Rt,Dt);y.add(Nt);const P=new vl(M,M*.05,8,st),D=d(5533306),W=new Ue(P,D);W.position.y=j,y.add(W);const nt=new Ue(P.clone(),D);nt.position.y=-j,y.add(nt);const K=h(p*.16),et=new Mi(L,L,K,st),ut=d(6056896,.35,.7),ft=new Ue(et,ut);ft.position.y=-j+h(p*.44),y.add(ft);const A=new Mi(I,I,Jt*.65,st),ot=d(4545124,.3,.75),gt=new Ue(A,ot);gt.position.y=j-Jt*.325,y.add(gt);const ct=(S+I)/2,Z=Jt*.12,At=new vl(ct,Z/2,16,st),E=new Qa({color:13935988,roughness:.6,metalness:.1,transparent:!0,opacity:.85}),x=new Ue(At,E);x.position.y=j-Jt*.5,y.add(x);const F=new Mi(R*1.02,R*1.02,O*.06,st),q=d(6323595,.35,.7),it=new Ue(F,q);it.position.y=-j+O*.5,y.add(it);const pt=new Ih(M,R,st),_t=d(9479342,.4,.6),Q=new Ue(pt,_t);Q.rotation.x=Math.PI/2,Q.position.y=-j,y.add(Q);const lt=new Ih(I,S,st),xt=new Ue(lt,_t);xt.rotation.x=-Math.PI/2,xt.position.y=j,y.add(xt);const wt=new Mi(R-V,R,V*2,st),St=new Ue(wt,ht);St.position.y=-j+V,y.add(St);const yt=new Mi(U,U,k,24),qt=new Qa({color:658964,roughness:.9,metalness:.1});for(let Yt=0;Yt<B;Yt++){const ae=Yt/B*Math.PI*2+Math.PI/8,N=Math.cos(ae)*Y,Mt=Math.sin(ae)*Y,at=new Ue(yt,qt);at.position.set(N,j-k/2+.001,Mt),y.add(at);const It=new vl(U,U*.12,8,16),bt=new Ue(It,d(3622735));bt.position.set(N,j,Mt),y.add(bt)}return y.traverse(Yt=>{Yt instanceof Ue&&(Yt.castShadow=!0,Yt.receiveShadow=!0)}),y.rotation.z=Math.PI/2,y}function u(_){if(!s)return;c&&(s.remove(c),c.traverse(v=>{v instanceof Ue&&(v.geometry.dispose(),Array.isArray(v.material)?v.material.forEach(y=>y.dispose()):v.material.dispose())})),c=f(_),s.add(c);const p=Math.max(h(_.height),h(_.flangeDiameter))*3.2;r.position.set(p*.8,p*.5,p*1),r.lookAt(0,0,0),o.target.set(0,0,0),o.update()}function g(){if(!n.value)return;const _=n.value,m=_.clientWidth,p=_.clientHeight;i=new N3({antialias:!0,alpha:!1}),i.setPixelRatio(Math.min(window.devicePixelRatio,2)),i.setSize(m,p),i.shadowMap.enabled=!0,i.shadowMap.type=Uy,i.toneMapping=sm,i.toneMappingExposure=1.3,_.appendChild(i.domElement),s=new dP,s.background=new fe(856343),r=new si(40,m/p,.01,100),r.position.set(3,2,4),o=new B3(r,i.domElement),o.enableDamping=!0,o.dampingFactor=.08,o.minDistance=.3,o.maxDistance=20,o.autoRotate=!0,o.autoRotateSpeed=1.2;const v=new NP(16777215,.45);s.add(v);const y=new Sx(16777215,1.8);y.position.set(6,10,6),y.castShadow=!0,y.shadow.mapSize.set(2048,2048),y.shadow.camera.near=.1,y.shadow.camera.far=40,s.add(y);const M=new Sx(5227511,.5);M.position.set(-4,-3,-6),s.add(M);const C=new DP(3359829,1122867,.4);s.add(C);const w=new OP(16777215,.6,15);w.position.set(2,4,2),s.add(w);const R=new Vl(20,20),S=new Qa({color:658964,roughness:.95,metalness:0}),T=new Ue(R,S);T.rotation.x=-Math.PI/2,T.position.y=-2,T.receiveShadow=!0,s.add(T);const O=new kP(8,16,1713459,1318183);O.position.y=-2,s.add(O),t.params&&u(t.params);function L(){a=requestAnimationFrame(L),o.update(),i.render(s,r)}L(),l=new ResizeObserver(()=>{if(!n.value||!i||!r)return;const I=n.value.clientWidth,V=n.value.clientHeight;r.aspect=I/V,r.updateProjectionMatrix(),i.setSize(I,V)}),l.observe(_)}return Gp(()=>g()),Wp(()=>{cancelAnimationFrame(a),l==null||l.disconnect(),o==null||o.dispose(),i==null||i.dispose(),i==null||i.domElement.remove()}),dl(()=>t.params,_=>{_&&u(_)},{deep:!0}),(_,m)=>(no(),aa("div",Z3,[e.params?Yp("",!0):(no(),aa("div",J3,[...m[0]||(m[0]=[Ht("span",null,"请输入参数后点击「生成」",-1)])])),Ht("div",{ref_key:"containerRef",ref:n,class:"three-container"},null,512)]))}}),tO=nm(Q3,[["__scopeId","data-v-ff89aaeb"]]),eO={diameter:100,height:300,flangeDiameter:180,thickness:20},nO={class:"app-shell"},iO={class:"sidebar"},sO={class:"err-msg"},rO={class:"err-msg"},oO={class:"err-msg"},aO={class:"err-msg"},lO={key:0,class:"param-summary"},cO={class:"main-area"},hO={class:"panel panel-2d"},uO={class:"panel-body"},dO={class:"panel panel-3d"},fO={class:"panel-body"},pO=Vp({__name:"App",setup(e){const t=Ml({...eO}),n=kp(null),i=Ml({diameter:"",height:"",flangeDiameter:"",thickness:""});function s(){let o=!0;return i.diameter="",i.height="",i.flangeDiameter="",i.thickness="",t.diameter<=0&&(i.diameter="口径必须大于 0",o=!1),t.height<=0&&(i.height="高度必须大于 0",o=!1),t.flangeDiameter<=t.diameter&&(i.flangeDiameter="法兰直径须大于口径",o=!1),(t.thickness<=0||t.thickness*2>=t.height)&&(i.thickness=`厚度须在 0 ~ ${Math.floor(t.height/2)} mm 之间`,o=!1),o}function r(){s()&&(n.value={...t})}return(o,a)=>(no(),aa("div",nO,[Ht("aside",iO,[a[14]||(a[14]=Ht("div",{class:"sidebar-header"},[Ht("span",{class:"icon"},"⚙"),Ht("h1",null,"阀门参数")],-1)),Ht("form",{onSubmit:qb(r,["prevent"]),class:"param-form"},[Ht("div",{class:Kr(["field",{error:i.diameter}])},[a[4]||(a[4]=Ht("label",null,[$o(" 口径 "),Ht("small",null,"mm")],-1)),jl(Ht("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>t.diameter=l),type:"number",min:"1",step:"1",placeholder:"e.g. 100"},null,512),[[ql,t.diameter,void 0,{number:!0}]]),Ht("span",sO,Rs(i.diameter),1)],2),Ht("div",{class:Kr(["field",{error:i.height}])},[a[5]||(a[5]=Ht("label",null,[$o(" 高度 "),Ht("small",null,"mm")],-1)),jl(Ht("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>t.height=l),type:"number",min:"1",step:"1",placeholder:"e.g. 300"},null,512),[[ql,t.height,void 0,{number:!0}]]),Ht("span",rO,Rs(i.height),1)],2),Ht("div",{class:Kr(["field",{error:i.flangeDiameter}])},[a[6]||(a[6]=Ht("label",null,[$o(" 法兰直径 "),Ht("small",null,"mm")],-1)),jl(Ht("input",{"onUpdate:modelValue":a[2]||(a[2]=l=>t.flangeDiameter=l),type:"number",min:"1",step:"1",placeholder:"e.g. 180"},null,512),[[ql,t.flangeDiameter,void 0,{number:!0}]]),Ht("span",oO,Rs(i.flangeDiameter),1)],2),Ht("div",{class:Kr(["field",{error:i.thickness}])},[a[7]||(a[7]=Ht("label",null,[$o(" 法兰厚度 "),Ht("small",null,"mm")],-1)),jl(Ht("input",{"onUpdate:modelValue":a[3]||(a[3]=l=>t.thickness=l),type:"number",min:"1",step:"1",placeholder:"e.g. 20"},null,512),[[ql,t.thickness,void 0,{number:!0}]]),Ht("span",aO,Rs(i.thickness),1)],2),a[8]||(a[8]=Ht("button",{type:"submit",class:"btn-generate"},[Ht("span",{class:"btn-icon"},"▶"),$o(" 生 成 ")],-1))],32),n.value?(no(),aa("div",lO,[a[13]||(a[13]=Ht("p",{class:"summary-title"},"当前模型参数",-1)),Ht("table",null,[Ht("tbody",null,[Ht("tr",null,[a[9]||(a[9]=Ht("td",null,"口径",-1)),Ht("td",null,Rs(n.value.diameter)+" mm",1)]),Ht("tr",null,[a[10]||(a[10]=Ht("td",null,"高度",-1)),Ht("td",null,Rs(n.value.height)+" mm",1)]),Ht("tr",null,[a[11]||(a[11]=Ht("td",null,"法兰直径",-1)),Ht("td",null,Rs(n.value.flangeDiameter)+" mm",1)]),Ht("tr",null,[a[12]||(a[12]=Ht("td",null,"法兰厚度",-1)),Ht("td",null,Rs(n.value.thickness)+" mm",1)])])])])):Yp("",!0)]),Ht("main",cO,[Ht("section",hO,[a[15]||(a[15]=Ht("div",{class:"panel-header"},[Ht("span",{class:"panel-tag tag-2d"},"2D"),Ht("span",null,"工程图")],-1)),Ht("div",uO,[Ni(mC,{params:n.value},null,8,["params"])])]),Ht("section",dO,[a[16]||(a[16]=Ht("div",{class:"panel-header"},[Ht("span",{class:"panel-tag tag-3d"},"3D"),Ht("span",null,"模型预览")],-1)),Ht("div",fO,[Ni(tO,{params:n.value},null,8,["params"])])])])]))}}),mO=nm(pO,[["__scopeId","data-v-5edb5f68"]]);Jb(mO).mount("#app");
