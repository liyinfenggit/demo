(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Sp(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const Ue={},Jo=[],ns=()=>{},jx=()=>!1,Lh=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Dh=e=>e.startsWith("onUpdate:"),En=Object.assign,Mp=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},wS=Object.prototype.hasOwnProperty,Te=(e,t)=>wS.call(e,t),Jt=Array.isArray,Qo=e=>Pl(e)==="[object Map]",Kx=e=>Pl(e)==="[object Set]",P_=e=>Pl(e)==="[object Date]",se=e=>typeof e=="function",hn=e=>typeof e=="string",os=e=>typeof e=="symbol",Ne=e=>e!==null&&typeof e=="object",Zx=e=>(Ne(e)||se(e))&&se(e.then)&&se(e.catch),Jx=Object.prototype.toString,Pl=e=>Jx.call(e),TS=e=>Pl(e).slice(8,-1),Qx=e=>Pl(e)==="[object Object]",bp=e=>hn(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ll=Sp(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ih=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},AS=/-\w/g,Li=Ih(e=>e.replace(AS,t=>t.slice(1).toUpperCase())),RS=/\B([A-Z])/g,ao=Ih(e=>e.replace(RS,"-$1").toLowerCase()),tv=Ih(e=>e.charAt(0).toUpperCase()+e.slice(1)),Qh=Ih(e=>e?`on${tv(e)}`:""),Qi=(e,t)=>!Object.is(e,t),Jc=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ev=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Ep=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let L_;const Oh=()=>L_||(L_=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wp(e){if(Jt(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],s=hn(i)?DS(i):wp(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(hn(e)||Ne(e))return e}const CS=/;(?![^(]*\))/g,PS=/:([^]+)/,LS=/\/\*[^]*?\*\//g;function DS(e){const t={};return e.replace(LS,"").split(CS).forEach(n=>{if(n){const i=n.split(PS);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Zr(e){let t="";if(hn(e))t=e;else if(Jt(e))for(let n=0;n<e.length;n++){const i=Zr(e[n]);i&&(t+=i+" ")}else if(Ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const IS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",OS=Sp(IS);function nv(e){return!!e||e===""}function US(e,t){if(e.length!==t.length)return!1;let n=!0;for(let i=0;n&&i<e.length;i++)n=Tp(e[i],t[i]);return n}function Tp(e,t){if(e===t)return!0;let n=P_(e),i=P_(t);if(n||i)return n&&i?e.getTime()===t.getTime():!1;if(n=os(e),i=os(t),n||i)return e===t;if(n=Jt(e),i=Jt(t),n||i)return n&&i?US(e,t):!1;if(n=Ne(e),i=Ne(t),n||i){if(!n||!i)return!1;const s=Object.keys(e).length,r=Object.keys(t).length;if(s!==r)return!1;for(const o in e){const a=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(a&&!l||!a&&l||!Tp(e[o],t[o]))return!1}}return String(e)===String(t)}const iv=e=>!!(e&&e.__v_isRef===!0),As=e=>hn(e)?e:e==null?"":Jt(e)||Ne(e)&&(e.toString===Jx||!se(e.toString))?iv(e)?As(e.value):JSON.stringify(e,sv,2):String(e),sv=(e,t)=>iv(t)?sv(e,t.value):Qo(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,s],r)=>(n[tu(i,r)+" =>"]=s,n),{})}:Kx(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>tu(n))}:os(t)?tu(t):Ne(t)&&!Jt(t)&&!Qx(t)?String(t):t,tu=(e,t="")=>{var n;return os(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sn;class NS{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Sn&&(Sn.active?(this.parent=Sn,this.index=(Sn.scopes||(Sn.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Sn;try{return Sn=this,t()}finally{Sn=n}}}on(){++this._on===1&&(this.prevScope=Sn,Sn=this)}off(){if(this._on>0&&--this._on===0){if(Sn===this)Sn=this.prevScope;else{let t=Sn;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function FS(){return Sn}let ke;const eu=new WeakSet;class rv{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Sn&&(Sn.active?Sn.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,eu.has(this)&&(eu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||av(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,D_(this),lv(this);const t=ke,n=Di;ke=this,Di=!0;try{return this.fn()}finally{cv(this),ke=t,Di=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Cp(t);this.deps=this.depsTail=void 0,D_(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?eu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Kd(this)&&this.run()}get dirty(){return Kd(this)}}let ov=0,cl,hl;function av(e,t=!1){if(e.flags|=8,t){e.next=hl,hl=e;return}e.next=cl,cl=e}function Ap(){ov++}function Rp(){if(--ov>0)return;if(hl){let t=hl;for(hl=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;cl;){let t=cl;for(cl=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function lv(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function cv(e){let t,n=e.depsTail,i=n;for(;i;){const s=i.prevDep;i.version===-1?(i===n&&(n=s),Cp(i),BS(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}e.deps=t,e.depsTail=n}function Kd(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(hv(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function hv(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===xl)||(e.globalVersion=xl,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Kd(e))))return;e.flags|=2;const t=e.dep,n=ke,i=Di;ke=e,Di=!0;try{lv(e);const s=e.fn(e._value);(t.version===0||Qi(s,e._value))&&(e.flags|=128,e._value=s,t.version++)}catch(s){throw t.version++,s}finally{ke=n,Di=i,cv(e),e.flags&=-3}}function Cp(e,t=!1){const{dep:n,prevSub:i,nextSub:s}=e;if(i&&(i.nextSub=s,e.prevSub=void 0),s&&(s.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Cp(r,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function BS(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let Di=!0;const uv=[];function zs(){uv.push(Di),Di=!1}function Hs(){const e=uv.pop();Di=e===void 0?!0:e}function D_(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=ke;ke=void 0;try{t()}finally{ke=n}}}let xl=0;class kS{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pp{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ke||!Di||ke===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ke)n=this.activeLink=new kS(ke,this),ke.deps?(n.prevDep=ke.depsTail,ke.depsTail.nextDep=n,ke.depsTail=n):ke.deps=ke.depsTail=n,dv(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=ke.depsTail,n.nextDep=void 0,ke.depsTail.nextDep=n,ke.depsTail=n,ke.deps===n&&(ke.deps=i)}return n}trigger(t){this.version++,xl++,this.notify(t)}notify(t){Ap();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rp()}}}function dv(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)dv(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Zd=new WeakMap,to=Symbol(""),Jd=Symbol(""),vl=Symbol("");function Pn(e,t,n){if(Di&&ke){let i=Zd.get(e);i||Zd.set(e,i=new Map);let s=i.get(n);s||(i.set(n,s=new Pp),s.map=i,s.key=n),s.track()}}function Ds(e,t,n,i,s,r){const o=Zd.get(e);if(!o){xl++;return}const a=l=>{l&&l.trigger()};if(Ap(),t==="clear")o.forEach(a);else{const l=Jt(e),c=l&&bp(n);if(l&&n==="length"){const h=Number(i);o.forEach((d,f)=>{(f==="length"||f===vl||!os(f)&&f>=h)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(vl)),t){case"add":l?c&&a(o.get("length")):(a(o.get(to)),Qo(e)&&a(o.get(Jd)));break;case"delete":l||(a(o.get(to)),Qo(e)&&a(o.get(Jd)));break;case"set":Qo(e)&&a(o.get(to));break}}Rp()}function fo(e){const t=we(e);return t===e?t:(Pn(t,"iterate",vl),Ii(e)?t:t.map(Vs))}function Lp(e){return Pn(e=we(e),"iterate",vl),e}function ji(e,t){return yr(e)?Sl(ta(e)?Vs(t):t):Vs(t)}const zS={__proto__:null,[Symbol.iterator](){return nu(this,Symbol.iterator,e=>ji(this,e))},concat(...e){return fo(this).concat(...e.map(t=>Jt(t)?fo(t):t))},entries(){return nu(this,"entries",e=>(e[1]=ji(this,e[1]),e))},every(e,t){return fs(this,"every",e,t,void 0,arguments)},filter(e,t){return fs(this,"filter",e,t,n=>n.map(i=>ji(this,i)),arguments)},find(e,t){return fs(this,"find",e,t,n=>ji(this,n),arguments)},findIndex(e,t){return fs(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return fs(this,"findLast",e,t,n=>ji(this,n),arguments)},findLastIndex(e,t){return fs(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return fs(this,"forEach",e,t,void 0,arguments)},includes(...e){return iu(this,"includes",e)},indexOf(...e){return iu(this,"indexOf",e)},join(e){return fo(this).join(e)},lastIndexOf(...e){return iu(this,"lastIndexOf",e)},map(e,t){return fs(this,"map",e,t,void 0,arguments)},pop(){return ya(this,"pop")},push(...e){return ya(this,"push",e)},reduce(e,...t){return I_(this,"reduce",e,t)},reduceRight(e,...t){return I_(this,"reduceRight",e,t)},shift(){return ya(this,"shift")},some(e,t){return fs(this,"some",e,t,void 0,arguments)},splice(...e){return ya(this,"splice",e)},toReversed(){return fo(this).toReversed()},toSorted(e){return fo(this).toSorted(e)},toSpliced(...e){return fo(this).toSpliced(...e)},unshift(...e){return ya(this,"unshift",e)},values(){return nu(this,"values",e=>ji(this,e))}};function nu(e,t,n){const i=Lp(e),s=i[t]();return i!==e&&!Ii(e)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=n(r.value)),r}),s}const HS=Array.prototype;function fs(e,t,n,i,s,r){const o=Lp(e),a=o!==e&&!Ii(e),l=o[t];if(l!==HS[t]){const d=l.apply(e,r);return a?Vs(d):d}let c=n;o!==e&&(a?c=function(d,f){return n.call(this,ji(e,d),f,e)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,e)}));const h=l.call(o,c,i);return a&&s?s(h):h}function I_(e,t,n,i){const s=Lp(e),r=s!==e&&!Ii(e);let o=n,a=!1;s!==e&&(r?(a=i.length===0,o=function(c,h,d){return a&&(a=!1,c=ji(e,c)),n.call(this,c,ji(e,h),d,e)}):n.length>3&&(o=function(c,h,d){return n.call(this,c,h,d,e)}));const l=s[t](o,...i);return a?ji(e,l):l}function iu(e,t,n){const i=we(e);Pn(i,"iterate",vl);const s=i[t](...n);return(s===-1||s===!1)&&Op(n[0])?(n[0]=we(n[0]),i[t](...n)):s}function ya(e,t,n=[]){zs(),Ap();const i=we(e)[t].apply(e,n);return Rp(),Hs(),i}const VS=Sp("__proto__,__v_isRef,__isVue"),fv=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(os));function GS(e){os(e)||(e=String(e));const t=we(this);return Pn(t,"has",e),t.hasOwnProperty(e)}class pv{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return r;if(n==="__v_raw")return i===(s?r?QS:xv:r?gv:mv).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Jt(t);if(!s){let l;if(o&&(l=zS[n]))return l;if(n==="hasOwnProperty")return GS}const a=Reflect.get(t,n,Dn(t)?t:i);if((os(n)?fv.has(n):VS(n))||(s||Pn(t,"get",n),r))return a;if(Dn(a)){const l=o&&bp(n)?a:a.value;return s&&Ne(l)?tf(l):l}return Ne(a)?s?tf(a):yl(a):a}}class _v extends pv{constructor(t=!1){super(!1,t)}set(t,n,i,s){let r=t[n];const o=Jt(t)&&bp(n);if(!this._isShallow){const c=yr(r);if(!Ii(i)&&!yr(i)&&(r=we(r),i=we(i)),!o&&Dn(r)&&!Dn(i))return c||(r.value=i),!0}const a=o?Number(n)<t.length:Te(t,n),l=Reflect.set(t,n,i,Dn(t)?t:s);return t===we(s)&&(a?Qi(i,r)&&Ds(t,"set",n,i):Ds(t,"add",n,i)),l}deleteProperty(t,n){const i=Te(t,n);t[n];const s=Reflect.deleteProperty(t,n);return s&&i&&Ds(t,"delete",n,void 0),s}has(t,n){const i=Reflect.has(t,n);return(!os(n)||!fv.has(n))&&Pn(t,"has",n),i}ownKeys(t){return Pn(t,"iterate",Jt(t)?"length":to),Reflect.ownKeys(t)}}class WS extends pv{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const XS=new _v,$S=new WS,YS=new _v(!0);const Qd=e=>e,Vl=e=>Reflect.getPrototypeOf(e);function qS(e,t,n){return function(...i){const s=this.__v_raw,r=we(s),o=Qo(r),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=s[e](...i),h=n?Qd:t?Sl:Vs;return!t&&Pn(r,"iterate",l?Jd:to),En(Object.create(c),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[h(d[0]),h(d[1])]:h(d),done:f}}})}}function Gl(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function jS(e,t){const n={get(s){const r=this.__v_raw,o=we(r),a=we(s);e||(Qi(s,a)&&Pn(o,"get",s),Pn(o,"get",a));const{has:l}=Vl(o),c=t?Qd:e?Sl:Vs;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!e&&Pn(we(s),"iterate",to),s.size},has(s){const r=this.__v_raw,o=we(r),a=we(s);return e||(Qi(s,a)&&Pn(o,"has",s),Pn(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=we(a),c=t?Qd:e?Sl:Vs;return!e&&Pn(l,"iterate",to),a.forEach((h,d)=>s.call(r,c(h),c(d),o))}};return En(n,e?{add:Gl("add"),set:Gl("set"),delete:Gl("delete"),clear:Gl("clear")}:{add(s){const r=we(this),o=Vl(r),a=we(s),l=!t&&!Ii(s)&&!yr(s)?a:s;return o.has.call(r,l)||Qi(s,l)&&o.has.call(r,s)||Qi(a,l)&&o.has.call(r,a)||(r.add(l),Ds(r,"add",l,l)),this},set(s,r){!t&&!Ii(r)&&!yr(r)&&(r=we(r));const o=we(this),{has:a,get:l}=Vl(o);let c=a.call(o,s);c||(s=we(s),c=a.call(o,s));const h=l.call(o,s);return o.set(s,r),c?Qi(r,h)&&Ds(o,"set",s,r):Ds(o,"add",s,r),this},delete(s){const r=we(this),{has:o,get:a}=Vl(r);let l=o.call(r,s);l||(s=we(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Ds(r,"delete",s,void 0),c},clear(){const s=we(this),r=s.size!==0,o=s.clear();return r&&Ds(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=qS(s,e,t)}),n}function Dp(e,t){const n=jS(e,t);return(i,s,r)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?i:Reflect.get(Te(n,s)&&s in i?n:i,s,r)}const KS={get:Dp(!1,!1)},ZS={get:Dp(!1,!0)},JS={get:Dp(!0,!1)};const mv=new WeakMap,gv=new WeakMap,xv=new WeakMap,QS=new WeakMap;function tM(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function eM(e){return e.__v_skip||!Object.isExtensible(e)?0:tM(TS(e))}function yl(e){return yr(e)?e:Ip(e,!1,XS,KS,mv)}function nM(e){return Ip(e,!1,YS,ZS,gv)}function tf(e){return Ip(e,!0,$S,JS,xv)}function Ip(e,t,n,i,s){if(!Ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=eM(e);if(r===0)return e;const o=s.get(e);if(o)return o;const a=new Proxy(e,r===2?i:n);return s.set(e,a),a}function ta(e){return yr(e)?ta(e.__v_raw):!!(e&&e.__v_isReactive)}function yr(e){return!!(e&&e.__v_isReadonly)}function Ii(e){return!!(e&&e.__v_isShallow)}function Op(e){return e?!!e.__v_raw:!1}function we(e){const t=e&&e.__v_raw;return t?we(t):e}function iM(e){return!Te(e,"__v_skip")&&Object.isExtensible(e)&&ev(e,"__v_skip",!0),e}const Vs=e=>Ne(e)?yl(e):e,Sl=e=>Ne(e)?tf(e):e;function Dn(e){return e?e.__v_isRef===!0:!1}function Up(e){return sM(e,!1)}function sM(e,t){return Dn(e)?e:new rM(e,t)}class rM{constructor(t,n){this.dep=new Pp,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:we(t),this._value=n?t:Vs(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||Ii(t)||yr(t);t=i?t:we(t),Qi(t,n)&&(this._rawValue=t,this._value=i?t:Vs(t),this.dep.trigger())}}function oM(e){return Dn(e)?e.value:e}const aM={get:(e,t,n)=>t==="__v_raw"?e:oM(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const s=e[t];return Dn(s)&&!Dn(n)?(s.value=n,!0):Reflect.set(e,t,n,i)}};function vv(e){return ta(e)?e:new Proxy(e,aM)}class lM{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Pp(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=xl-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return av(this,!0),!0}get value(){const t=this.dep.track();return hv(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function cM(e,t,n=!1){let i,s;return se(e)?i=e:(i=e.get,s=e.set),new lM(i,s,n)}const Wl={},ph=new WeakMap;let Gr;function hM(e,t=!1,n=Gr){if(n){let i=ph.get(n);i||ph.set(n,i=[]),i.push(e)}}function uM(e,t,n=Ue){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=n,c=S=>s?S:Ii(S)||s===!1||s===0?Is(S,1):Is(S);let h,d,f,u,m=!1,g=!1;if(Dn(e)?(d=()=>e.value,m=Ii(e)):ta(e)?(d=()=>c(e),m=!0):Jt(e)?(g=!0,m=e.some(S=>ta(S)||Ii(S)),d=()=>e.map(S=>{if(Dn(S))return S.value;if(ta(S))return c(S);if(se(S))return l?l(S,2):S()})):se(e)?t?d=l?()=>l(e,2):e:d=()=>{if(f){zs();try{f()}finally{Hs()}}const S=Gr;Gr=h;try{return l?l(e,3,[u]):e(u)}finally{Gr=S}}:d=ns,t&&s){const S=d,A=s===!0?1/0:s;d=()=>Is(S(),A)}const _=FS(),p=()=>{h.stop(),_&&_.active&&Mp(_.effects,h)};if(r&&t){const S=t;t=(...A)=>{S(...A),p()}}let y=g?new Array(e.length).fill(Wl):Wl;const M=S=>{if(!(!(h.flags&1)||!h.dirty&&!S))if(t){const A=h.run();if(s||m||(g?A.some((w,P)=>Qi(w,y[P])):Qi(A,y))){f&&f();const w=Gr;Gr=h;try{const P=[A,y===Wl?void 0:g&&y[0]===Wl?[]:y,u];y=A,l?l(t,3,P):t(...P)}finally{Gr=w}}}else h.run()};return a&&a(M),h=new rv(d),h.scheduler=o?()=>o(M,!1):M,u=S=>hM(S,!1,h),f=h.onStop=()=>{const S=ph.get(h);if(S){if(l)l(S,4);else for(const A of S)A();ph.delete(h)}},t?i?M(!0):y=h.run():o?o(M.bind(null,!0),!0):h.run(),p.pause=h.pause.bind(h),p.resume=h.resume.bind(h),p.stop=p,p}function Is(e,t=1/0,n){if(t<=0||!Ne(e)||e.__v_skip||(n=n||new Map,(n.get(e)||0)>=t))return e;if(n.set(e,t),t--,Dn(e))Is(e.value,t,n);else if(Jt(e))for(let i=0;i<e.length;i++)Is(e[i],t,n);else if(Kx(e)||Qo(e))e.forEach(i=>{Is(i,t,n)});else if(Qx(e)){for(const i in e)Is(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Is(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ll(e,t,n,i){try{return i?e(...i):e()}catch(s){Uh(s,t,n)}}function as(e,t,n,i){if(se(e)){const s=Ll(e,t,n,i);return s&&Zx(s)&&s.catch(r=>{Uh(r,t,n)}),s}if(Jt(e)){const s=[];for(let r=0;r<e.length;r++)s.push(as(e[r],t,n,i));return s}}function Uh(e,t,n,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Ue;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let d=0;d<h.length;d++)if(h[d](e,l,c)===!1)return}a=a.parent}if(r){zs(),Ll(r,null,10,[e,l,c]),Hs();return}}dM(e,n,s,i,o)}function dM(e,t,n,i=!0,s=!1){if(s)throw e;console.error(e)}const Bn=[];let $i=-1;const ea=[];let lr=null,Xo=0;const yv=Promise.resolve();let _h=null;function fM(e){const t=_h||yv;return e?t.then(this?e.bind(this):e):t}function pM(e){let t=$i+1,n=Bn.length;for(;t<n;){const i=t+n>>>1,s=Bn[i],r=Ml(s);r<e||r===e&&s.flags&2?t=i+1:n=i}return t}function Np(e){if(!(e.flags&1)){const t=Ml(e),n=Bn[Bn.length-1];!n||!(e.flags&2)&&t>=Ml(n)?Bn.push(e):Bn.splice(pM(t),0,e),e.flags|=1,Sv()}}function Sv(){_h||(_h=yv.then(bv))}function _M(e){Jt(e)?ea.push(...e):lr&&e.id===-1?lr.splice(Xo+1,0,e):e.flags&1||(ea.push(e),e.flags|=1),Sv()}function O_(e,t,n=$i+1){for(;n<Bn.length;n++){const i=Bn[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;Bn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Mv(e){if(ea.length){const t=[...new Set(ea)].sort((n,i)=>Ml(n)-Ml(i));if(ea.length=0,lr){lr.push(...t);return}for(lr=t,Xo=0;Xo<lr.length;Xo++){const n=lr[Xo];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}lr=null,Xo=0}}const Ml=e=>e.id==null?e.flags&2?-1:1/0:e.id;function bv(e){try{for($i=0;$i<Bn.length;$i++){const t=Bn[$i];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ll(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;$i<Bn.length;$i++){const t=Bn[$i];t&&(t.flags&=-2)}$i=-1,Bn.length=0,Mv(),_h=null,(Bn.length||ea.length)&&bv()}}let mi=null,Ev=null;function mh(e){const t=mi;return mi=e,Ev=e&&e.type.__scopeId||null,t}function mM(e,t=mi,n){if(!t||e._n)return e;const i=(...s)=>{i._d&&X_(-1);const r=mh(t);let o;try{o=e(...s)}finally{mh(r),i._d&&X_(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Xl(e,t){if(mi===null)return e;const n=kh(mi),i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=Ue]=t[s];r&&(se(r)&&(r={mounted:r,updated:r}),r.deep&&Is(o),i.push({dir:r,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Rr(e,t,n,i){const s=e.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(zs(),as(l,n,8,[e.el,a,e,t]),Hs())}}function gM(e,t){if(kn){let n=kn.provides;const i=kn.parent&&kn.parent.provides;i===n&&(n=kn.provides=Object.create(i)),n[e]=t}}function Qc(e,t,n=!1){const i=_b();if(i||na){let s=na?na._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&e in s)return s[e];if(arguments.length>1)return n&&se(t)?t.call(i&&i.proxy):t}}const xM=Symbol.for("v-scx"),vM=()=>Qc(xM);function ul(e,t,n){return wv(e,t,n)}function wv(e,t,n=Ue){const{immediate:i,deep:s,flush:r,once:o}=n,a=En({},n),l=t&&i||!t&&r!=="post";let c;if(El){if(r==="sync"){const u=vM();c=u.__watcherHandles||(u.__watcherHandles=[])}else if(!l){const u=()=>{};return u.stop=ns,u.resume=ns,u.pause=ns,u}}const h=kn;a.call=(u,m,g)=>as(u,h,m,g);let d=!1;r==="post"?a.scheduler=u=>{$n(u,h&&h.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(u,m)=>{m?u():Np(u)}),a.augmentJob=u=>{t&&(u.flags|=4),d&&(u.flags|=2,h&&(u.id=h.uid,u.i=h))};const f=uM(e,t,a);return El&&(c?c.push(f):l&&f()),f}function yM(e,t,n){const i=this.proxy,s=hn(e)?e.includes(".")?Tv(i,e):()=>i[e]:e.bind(i,i);let r;se(t)?r=t:(r=t.handler,n=t);const o=Dl(this),a=wv(s,r.bind(i),n);return o(),a}function Tv(e,t){const n=t.split(".");return()=>{let i=e;for(let s=0;s<n.length&&i;s++)i=i[n[s]];return i}}const SM=Symbol("_vte"),MM=e=>e.__isTeleport,bM=Symbol("_leaveCb");function Fp(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Fp(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Bp(e,t){return se(e)?En({name:e.name},t,{setup:e}):e}function Av(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function U_(e,t){let n;return!!((n=Object.getOwnPropertyDescriptor(e,t))&&!n.configurable)}const gh=new WeakMap;function dl(e,t,n,i,s=!1){if(Jt(e)){e.forEach((g,_)=>dl(g,t&&(Jt(t)?t[_]:t),n,i,s));return}if(fl(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&dl(e,t,n,i.component.subTree);return}const r=i.shapeFlag&4?kh(i.component):i.el,o=s?null:r,{i:a,r:l}=e,c=t&&t.r,h=a.refs===Ue?a.refs={}:a.refs,d=a.setupState,f=we(d),u=d===Ue?jx:g=>U_(h,g)?!1:Te(f,g),m=(g,_)=>!(_&&U_(h,_));if(c!=null&&c!==l){if(N_(t),hn(c))h[c]=null,u(c)&&(d[c]=null);else if(Dn(c)){const g=t;m(c,g.k)&&(c.value=null),g.k&&(h[g.k]=null)}}if(se(l))Ll(l,a,12,[o,h]);else{const g=hn(l),_=Dn(l);if(g||_){const p=()=>{if(e.f){const y=g?u(l)?d[l]:h[l]:m()||!e.k?l.value:h[e.k];if(s)Jt(y)&&Mp(y,r);else if(Jt(y))y.includes(r)||y.push(r);else if(g)h[l]=[r],u(l)&&(d[l]=h[l]);else{const M=[r];m(l,e.k)&&(l.value=M),e.k&&(h[e.k]=M)}}else g?(h[l]=o,u(l)&&(d[l]=o)):_&&(m(l,e.k)&&(l.value=o),e.k&&(h[e.k]=o))};if(o){const y=()=>{p(),gh.delete(e)};y.id=-1,gh.set(e,y),$n(y,n)}else N_(e),p()}}}function N_(e){const t=gh.get(e);t&&(t.flags|=8,gh.delete(e))}Oh().requestIdleCallback;Oh().cancelIdleCallback;const fl=e=>!!e.type.__asyncLoader,Rv=e=>e.type.__isKeepAlive;function EM(e,t){Cv(e,"a",t)}function wM(e,t){Cv(e,"da",t)}function Cv(e,t,n=kn){const i=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(Nh(t,i,n),n){let s=n.parent;for(;s&&s.parent;)Rv(s.parent.vnode)&&TM(i,t,n,s),s=s.parent}}function TM(e,t,n,i){const s=Nh(t,e,i,!0);Pv(()=>{Mp(i[t],s)},n)}function Nh(e,t,n=kn,i=!1){if(n){const s=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...o)=>{zs();const a=Dl(n),l=as(t,n,e,o);return a(),Hs(),l});return i?s.unshift(r):s.push(r),r}}const $s=e=>(t,n=kn)=>{(!El||e==="sp")&&Nh(e,(...i)=>t(...i),n)},AM=$s("bm"),kp=$s("m"),RM=$s("bu"),CM=$s("u"),zp=$s("bum"),Pv=$s("um"),PM=$s("sp"),LM=$s("rtg"),DM=$s("rtc");function IM(e,t=kn){Nh("ec",e,t)}const OM=Symbol.for("v-ndc"),ef=e=>e?Zv(e)?kh(e):ef(e.parent):null,pl=En(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ef(e.parent),$root:e=>ef(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Dv(e),$forceUpdate:e=>e.f||(e.f=()=>{Np(e.update)}),$nextTick:e=>e.n||(e.n=fM.bind(e.proxy)),$watch:e=>yM.bind(e)}),su=(e,t)=>e!==Ue&&!e.__isScriptSetup&&Te(e,t),UM={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=e;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return i[t];case 2:return s[t];case 4:return n[t];case 3:return r[t]}else{if(su(i,t))return o[t]=1,i[t];if(s!==Ue&&Te(s,t))return o[t]=2,s[t];if(Te(r,t))return o[t]=3,r[t];if(n!==Ue&&Te(n,t))return o[t]=4,n[t];nf&&(o[t]=0)}}const c=pl[t];let h,d;if(c)return t==="$attrs"&&Pn(e.attrs,"get",""),c(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==Ue&&Te(n,t))return o[t]=4,n[t];if(d=l.config.globalProperties,Te(d,t))return d[t]},set({_:e},t,n){const{data:i,setupState:s,ctx:r}=e;return su(s,t)?(s[t]=n,!0):i!==Ue&&Te(i,t)?(i[t]=n,!0):Te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(n[a]||e!==Ue&&a[0]!=="$"&&Te(e,a)||su(t,a)||Te(r,a)||Te(i,a)||Te(pl,a)||Te(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Te(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function F_(e){return Jt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let nf=!0;function NM(e){const t=Dv(e),n=e.proxy,i=e.ctx;nf=!1,t.beforeCreate&&B_(t.beforeCreate,e,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:d,mounted:f,beforeUpdate:u,updated:m,activated:g,deactivated:_,beforeDestroy:p,beforeUnmount:y,destroyed:M,unmounted:S,render:A,renderTracked:w,renderTriggered:P,errorCaptured:v,serverPrefetch:T,expose:U,inheritAttrs:C,components:I,directives:k,filters:X}=t;if(c&&FM(c,i,null),o)for(const F in o){const K=o[F];se(K)&&(i[F]=K.bind(n))}if(s){const F=s.call(n,n);Ne(F)&&(e.data=yl(F))}if(nf=!0,r)for(const F in r){const K=r[F],Z=se(K)?K.bind(n,n):se(K.get)?K.get.bind(n,n):ns,ft=!se(K)&&se(K.set)?K.set.bind(n):ns,Tt=Sb({get:Z,set:ft});Object.defineProperty(i,F,{enumerable:!0,configurable:!0,get:()=>Tt.value,set:wt=>Tt.value=wt})}if(a)for(const F in a)Lv(a[F],i,n,F);if(l){const F=se(l)?l.call(n):l;Reflect.ownKeys(F).forEach(K=>{gM(K,F[K])})}h&&B_(h,e,"c");function z(F,K){Jt(K)?K.forEach(Z=>F(Z.bind(n))):K&&F(K.bind(n))}if(z(AM,d),z(kp,f),z(RM,u),z(CM,m),z(EM,g),z(wM,_),z(IM,v),z(DM,w),z(LM,P),z(zp,y),z(Pv,S),z(PM,T),Jt(U))if(U.length){const F=e.exposed||(e.exposed={});U.forEach(K=>{Object.defineProperty(F,K,{get:()=>n[K],set:Z=>n[K]=Z,enumerable:!0})})}else e.exposed||(e.exposed={});A&&e.render===ns&&(e.render=A),C!=null&&(e.inheritAttrs=C),I&&(e.components=I),k&&(e.directives=k),T&&Av(e)}function FM(e,t,n=ns){Jt(e)&&(e=sf(e));for(const i in e){const s=e[i];let r;Ne(s)?"default"in s?r=Qc(s.from||i,s.default,!0):r=Qc(s.from||i):r=Qc(s),Dn(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function B_(e,t,n){as(Jt(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function Lv(e,t,n,i){let s=i.includes(".")?Tv(n,i):()=>n[i];if(hn(e)){const r=t[e];se(r)&&ul(s,r)}else if(se(e))ul(s,e.bind(n));else if(Ne(e))if(Jt(e))e.forEach(r=>Lv(r,t,n,i));else{const r=se(e.handler)?e.handler.bind(n):t[e.handler];se(r)&&ul(s,r,e)}}function Dv(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!n&&!i?l=t:(l={},s.length&&s.forEach(c=>xh(l,c,o,!0)),xh(l,t,o)),Ne(t)&&r.set(t,l),l}function xh(e,t,n,i=!1){const{mixins:s,extends:r}=t;r&&xh(e,r,n,!0),s&&s.forEach(o=>xh(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=BM[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const BM={data:k_,props:z_,emits:z_,methods:el,computed:el,beforeCreate:Un,created:Un,beforeMount:Un,mounted:Un,beforeUpdate:Un,updated:Un,beforeDestroy:Un,beforeUnmount:Un,destroyed:Un,unmounted:Un,activated:Un,deactivated:Un,errorCaptured:Un,serverPrefetch:Un,components:el,directives:el,watch:zM,provide:k_,inject:kM};function k_(e,t){return t?e?function(){return En(se(e)?e.call(this,this):e,se(t)?t.call(this,this):t)}:t:e}function kM(e,t){return el(sf(e),sf(t))}function sf(e){if(Jt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Un(e,t){return e?[...new Set([].concat(e,t))]:t}function el(e,t){return e?En(Object.create(null),e,t):t}function z_(e,t){return e?Jt(e)&&Jt(t)?[...new Set([...e,...t])]:En(Object.create(null),F_(e),F_(t??{})):t}function zM(e,t){if(!e)return t;if(!t)return e;const n=En(Object.create(null),e);for(const i in t)n[i]=Un(e[i],t[i]);return n}function Iv(){return{app:null,config:{isNativeTag:jx,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let HM=0;function VM(e,t){return function(i,s=null){se(i)||(i=En({},i)),s!=null&&!Ne(s)&&(s=null);const r=Iv(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:HM++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Mb,get config(){return r.config},set config(h){},use(h,...d){return o.has(h)||(h&&se(h.install)?(o.add(h),h.install(c,...d)):se(h)&&(o.add(h),h(c,...d))),c},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),c},component(h,d){return d?(r.components[h]=d,c):r.components[h]},directive(h,d){return d?(r.directives[h]=d,c):r.directives[h]},mount(h,d,f){if(!l){const u=c._ceVNode||Oi(i,s);return u.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),e(u,h,f),l=!0,c._container=h,h.__vue_app__=c,kh(u.component)}},onUnmount(h){a.push(h)},unmount(){l&&(as(a,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(h,d){return r.provides[h]=d,c},runWithContext(h){const d=na;na=c;try{return h()}finally{na=d}}};return c}}let na=null;const GM=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Li(t)}Modifiers`]||e[`${ao(t)}Modifiers`];function WM(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||Ue;let s=n;const r=t.startsWith("update:"),o=r&&GM(i,t.slice(7));o&&(o.trim&&(s=n.map(h=>hn(h)?h.trim():h)),o.number&&(s=n.map(Ep)));let a,l=i[a=Qh(t)]||i[a=Qh(Li(t))];!l&&r&&(l=i[a=Qh(ao(t))]),l&&as(l,e,6,s);const c=i[a+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,as(c,e,6,s)}}const XM=new WeakMap;function Ov(e,t,n=!1){const i=n?XM:t.emitsCache,s=i.get(e);if(s!==void 0)return s;const r=e.emits;let o={},a=!1;if(!se(e)){const l=c=>{const h=Ov(c,t,!0);h&&(a=!0,En(o,h))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!a?(Ne(e)&&i.set(e,null),null):(Jt(r)?r.forEach(l=>o[l]=null):En(o,r),Ne(e)&&i.set(e,o),o)}function Fh(e,t){return!e||!Lh(t)?!1:(t=t.slice(2).replace(/Once$/,""),Te(e,t[0].toLowerCase()+t.slice(1))||Te(e,ao(t))||Te(e,t))}function H_(e){const{type:t,vnode:n,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:d,data:f,setupState:u,ctx:m,inheritAttrs:g}=e,_=mh(e);let p,y;try{if(n.shapeFlag&4){const S=s||i,A=S;p=Ki(c.call(A,S,h,d,u,f,m)),y=a}else{const S=t;p=Ki(S.length>1?S(d,{attrs:a,slots:o,emit:l}):S(d,null)),y=t.props?a:$M(a)}}catch(S){_l.length=0,Uh(S,e,1),p=Oi(Sr)}let M=p;if(y&&g!==!1){const S=Object.keys(y),{shapeFlag:A}=M;S.length&&A&7&&(r&&S.some(Dh)&&(y=YM(y,r)),M=la(M,y,!1,!0))}return n.dirs&&(M=la(M,null,!1,!0),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&Fp(M,n.transition),p=M,mh(_),p}const $M=e=>{let t;for(const n in e)(n==="class"||n==="style"||Lh(n))&&((t||(t={}))[n]=e[n]);return t},YM=(e,t)=>{const n={};for(const i in e)(!Dh(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function qM(e,t,n){const{props:i,children:s,component:r}=e,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?V_(i,o,c):!!o;if(l&8){const h=t.dynamicProps;for(let d=0;d<h.length;d++){const f=h[d];if(Uv(o,i,f)&&!Fh(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?V_(i,o,c):!0:!!o;return!1}function V_(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Uv(t,e,r)&&!Fh(n,r))return!0}return!1}function Uv(e,t,n){const i=e[n],s=t[n];return n==="style"&&Ne(i)&&Ne(s)?!Tp(i,s):i!==s}function jM({vnode:e,parent:t,suspense:n},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.suspense.vnode.el=s.el=i,e=s),s===e)(e=t.vnode).el=i,t=t.parent;else break}n&&n.activeBranch===e&&(n.vnode.el=i)}const Nv={},Fv=()=>Object.create(Nv),Bv=e=>Object.getPrototypeOf(e)===Nv;function KM(e,t,n,i=!1){const s={},r=Fv();e.propsDefaults=Object.create(null),kv(e,t,s,r);for(const o in e.propsOptions[0])o in s||(s[o]=void 0);n?e.props=i?s:nM(s):e.type.props?e.props=s:e.props=r,e.attrs=r}function ZM(e,t,n,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=e,a=we(s),[l]=e.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const h=e.vnode.dynamicProps;for(let d=0;d<h.length;d++){let f=h[d];if(Fh(e.emitsOptions,f))continue;const u=t[f];if(l)if(Te(r,f))u!==r[f]&&(r[f]=u,c=!0);else{const m=Li(f);s[m]=rf(l,a,m,u,e,!1)}else u!==r[f]&&(r[f]=u,c=!0)}}}else{kv(e,t,s,r)&&(c=!0);let h;for(const d in a)(!t||!Te(t,d)&&((h=ao(d))===d||!Te(t,h)))&&(l?n&&(n[d]!==void 0||n[h]!==void 0)&&(s[d]=rf(l,a,d,void 0,e,!0)):delete s[d]);if(r!==a)for(const d in r)(!t||!Te(t,d))&&(delete r[d],c=!0)}c&&Ds(e.attrs,"set","")}function kv(e,t,n,i){const[s,r]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(ll(l))continue;const c=t[l];let h;s&&Te(s,h=Li(l))?!r||!r.includes(h)?n[h]=c:(a||(a={}))[h]=c:Fh(e.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=we(n),c=a||Ue;for(let h=0;h<r.length;h++){const d=r[h];n[d]=rf(s,l,d,c[d],e,!Te(c,d))}}return o}function rf(e,t,n,i,s,r){const o=e[n];if(o!=null){const a=Te(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&se(l)){const{propsDefaults:c}=s;if(n in c)i=c[n];else{const h=Dl(s);i=c[n]=l.call(null,t),h()}}else i=l;s.ce&&s.ce._setProp(n,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===ao(n))&&(i=!0))}return i}const JM=new WeakMap;function zv(e,t,n=!1){const i=n?JM:t.propsCache,s=i.get(e);if(s)return s;const r=e.props,o={},a=[];let l=!1;if(!se(e)){const h=d=>{l=!0;const[f,u]=zv(d,t,!0);En(o,f),u&&a.push(...u)};!n&&t.mixins.length&&t.mixins.forEach(h),e.extends&&h(e.extends),e.mixins&&e.mixins.forEach(h)}if(!r&&!l)return Ne(e)&&i.set(e,Jo),Jo;if(Jt(r))for(let h=0;h<r.length;h++){const d=Li(r[h]);G_(d)&&(o[d]=Ue)}else if(r)for(const h in r){const d=Li(h);if(G_(d)){const f=r[h],u=o[d]=Jt(f)||se(f)?{type:f}:En({},f),m=u.type;let g=!1,_=!0;if(Jt(m))for(let p=0;p<m.length;++p){const y=m[p],M=se(y)&&y.name;if(M==="Boolean"){g=!0;break}else M==="String"&&(_=!1)}else g=se(m)&&m.name==="Boolean";u[0]=g,u[1]=_,(g||Te(u,"default"))&&a.push(d)}}const c=[o,a];return Ne(e)&&i.set(e,c),c}function G_(e){return e[0]!=="$"&&!ll(e)}const Hp=e=>e==="_"||e==="_ctx"||e==="$stable",Vp=e=>Jt(e)?e.map(Ki):[Ki(e)],QM=(e,t,n)=>{if(t._n)return t;const i=mM((...s)=>Vp(t(...s)),n);return i._c=!1,i},Hv=(e,t,n)=>{const i=e._ctx;for(const s in e){if(Hp(s))continue;const r=e[s];if(se(r))t[s]=QM(s,r,i);else if(r!=null){const o=Vp(r);t[s]=()=>o}}},Vv=(e,t)=>{const n=Vp(t);e.slots.default=()=>n},Gv=(e,t,n)=>{for(const i in t)(n||!Hp(i))&&(e[i]=t[i])},tb=(e,t,n)=>{const i=e.slots=Fv();if(e.vnode.shapeFlag&32){const s=t._;s?(Gv(i,t,n),n&&ev(i,"_",s,!0)):Hv(t,i)}else t&&Vv(e,t)},eb=(e,t,n)=>{const{vnode:i,slots:s}=e;let r=!0,o=Ue;if(i.shapeFlag&32){const a=t._;a?n&&a===1?r=!1:Gv(s,t,n):(r=!t.$stable,Hv(t,s)),o=t}else t&&(Vv(e,t),o={default:1});if(r)for(const a in s)!Hp(a)&&o[a]==null&&delete s[a]},$n=ob;function nb(e){return ib(e)}function ib(e,t){const n=Oh();n.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:d,nextSibling:f,setScopeId:u=ns,insertStaticContent:m}=e,g=(L,D,W,nt=null,j=null,it=null,lt=void 0,_t=null,R=!!D.dynamicChildren)=>{if(L===D)return;L&&!Sa(L,D)&&(nt=gt(L),wt(L,j,it,!0),L=null),D.patchFlag===-2&&(R=!1,D.dynamicChildren=null);const{type:rt,ref:xt,shapeFlag:ut}=D;switch(rt){case Bh:_(L,D,W,nt);break;case Sr:p(L,D,W,nt);break;case ou:L==null&&y(D,W,nt,lt);break;case Ps:I(L,D,W,nt,j,it,lt,_t,R);break;default:ut&1?A(L,D,W,nt,j,it,lt,_t,R):ut&6?k(L,D,W,nt,j,it,lt,_t,R):(ut&64||ut&128)&&rt.process(L,D,W,nt,j,it,lt,_t,R,Wt)}xt!=null&&j?dl(xt,L&&L.ref,it,D||L,!D):xt==null&&L&&L.ref!=null&&dl(L.ref,null,it,L,!0)},_=(L,D,W,nt)=>{if(L==null)i(D.el=a(D.children),W,nt);else{const j=D.el=L.el;D.children!==L.children&&c(j,D.children)}},p=(L,D,W,nt)=>{L==null?i(D.el=l(D.children||""),W,nt):D.el=L.el},y=(L,D,W,nt)=>{[L.el,L.anchor]=m(L.children,D,W,nt,L.el,L.anchor)},M=({el:L,anchor:D},W,nt)=>{let j;for(;L&&L!==D;)j=f(L),i(L,W,nt),L=j;i(D,W,nt)},S=({el:L,anchor:D})=>{let W;for(;L&&L!==D;)W=f(L),s(L),L=W;s(D)},A=(L,D,W,nt,j,it,lt,_t,R)=>{if(D.type==="svg"?lt="svg":D.type==="math"&&(lt="mathml"),L==null)w(D,W,nt,j,it,lt,_t,R);else{const rt=L.el&&L.el._isVueCE?L.el:null;try{rt&&rt._beginPatch(),T(L,D,j,it,lt,_t,R)}finally{rt&&rt._endPatch()}}},w=(L,D,W,nt,j,it,lt,_t)=>{let R,rt;const{props:xt,shapeFlag:ut,transition:et,dirs:Pt}=L;if(R=L.el=o(L.type,it,xt&&xt.is,xt),ut&8?h(R,L.children):ut&16&&v(L.children,R,null,nt,j,ru(L,it),lt,_t),Pt&&Rr(L,null,nt,"created"),P(R,L,L.scopeId,lt,nt),xt){for(const x in xt)x!=="value"&&!ll(x)&&r(R,x,null,xt[x],it,nt);"value"in xt&&r(R,"value",null,xt.value,it),(rt=xt.onVnodeBeforeMount)&&zi(rt,nt,L)}Pt&&Rr(L,null,nt,"beforeMount");const E=sb(j,et);E&&et.beforeEnter(R),i(R,D,W),((rt=xt&&xt.onVnodeMounted)||E||Pt)&&$n(()=>{try{rt&&zi(rt,nt,L),E&&et.enter(R),Pt&&Rr(L,null,nt,"mounted")}finally{}},j)},P=(L,D,W,nt,j)=>{if(W&&u(L,W),nt)for(let it=0;it<nt.length;it++)u(L,nt[it]);if(j){let it=j.subTree;if(D===it||Yv(it.type)&&(it.ssContent===D||it.ssFallback===D)){const lt=j.vnode;P(L,lt,lt.scopeId,lt.slotScopeIds,j.parent)}}},v=(L,D,W,nt,j,it,lt,_t,R=0)=>{for(let rt=R;rt<L.length;rt++){const xt=L[rt]=_t?Ls(L[rt]):Ki(L[rt]);g(null,xt,D,W,nt,j,it,lt,_t)}},T=(L,D,W,nt,j,it,lt)=>{const _t=D.el=L.el;let{patchFlag:R,dynamicChildren:rt,dirs:xt}=D;R|=L.patchFlag&16;const ut=L.props||Ue,et=D.props||Ue;let Pt;if(W&&Cr(W,!1),(Pt=et.onVnodeBeforeUpdate)&&zi(Pt,W,D,L),xt&&Rr(D,L,W,"beforeUpdate"),W&&Cr(W,!0),(ut.innerHTML&&et.innerHTML==null||ut.textContent&&et.textContent==null)&&h(_t,""),rt?U(L.dynamicChildren,rt,_t,W,nt,ru(D,j),it):lt||K(L,D,_t,null,W,nt,ru(D,j),it,!1),R>0){if(R&16)C(_t,ut,et,W,j);else if(R&2&&ut.class!==et.class&&r(_t,"class",null,et.class,j),R&4&&r(_t,"style",ut.style,et.style,j),R&8){const E=D.dynamicProps;for(let x=0;x<E.length;x++){const B=E[x],J=ut[B],ot=et[B];(ot!==J||B==="value")&&r(_t,B,J,ot,j,W)}}R&1&&L.children!==D.children&&h(_t,D.children)}else!lt&&rt==null&&C(_t,ut,et,W,j);((Pt=et.onVnodeUpdated)||xt)&&$n(()=>{Pt&&zi(Pt,W,D,L),xt&&Rr(D,L,W,"updated")},nt)},U=(L,D,W,nt,j,it,lt)=>{for(let _t=0;_t<D.length;_t++){const R=L[_t],rt=D[_t],xt=R.el&&(R.type===Ps||!Sa(R,rt)||R.shapeFlag&198)?d(R.el):W;g(R,rt,xt,null,nt,j,it,lt,!0)}},C=(L,D,W,nt,j)=>{if(D!==W){if(D!==Ue)for(const it in D)!ll(it)&&!(it in W)&&r(L,it,D[it],null,j,nt);for(const it in W){if(ll(it))continue;const lt=W[it],_t=D[it];lt!==_t&&it!=="value"&&r(L,it,_t,lt,j,nt)}"value"in W&&r(L,"value",D.value,W.value,j)}},I=(L,D,W,nt,j,it,lt,_t,R)=>{const rt=D.el=L?L.el:a(""),xt=D.anchor=L?L.anchor:a("");let{patchFlag:ut,dynamicChildren:et,slotScopeIds:Pt}=D;Pt&&(_t=_t?_t.concat(Pt):Pt),L==null?(i(rt,W,nt),i(xt,W,nt),v(D.children||[],W,xt,j,it,lt,_t,R)):ut>0&&ut&64&&et&&L.dynamicChildren&&L.dynamicChildren.length===et.length?(U(L.dynamicChildren,et,W,j,it,lt,_t),(D.key!=null||j&&D===j.subTree)&&Wv(L,D,!0)):K(L,D,W,xt,j,it,lt,_t,R)},k=(L,D,W,nt,j,it,lt,_t,R)=>{D.slotScopeIds=_t,L==null?D.shapeFlag&512?j.ctx.activate(D,W,nt,lt,R):X(D,W,nt,j,it,lt,R):O(L,D,R)},X=(L,D,W,nt,j,it,lt)=>{const _t=L.component=pb(L,nt,j);if(Rv(L)&&(_t.ctx.renderer=Wt),mb(_t,!1,lt),_t.asyncDep){if(j&&j.registerDep(_t,z,lt),!L.el){const R=_t.subTree=Oi(Sr);p(null,R,D,W),L.placeholder=R.el}}else z(_t,L,D,W,j,it,lt)},O=(L,D,W)=>{const nt=D.component=L.component;if(qM(L,D,W))if(nt.asyncDep&&!nt.asyncResolved){F(nt,D,W);return}else nt.next=D,nt.update();else D.el=L.el,nt.vnode=D},z=(L,D,W,nt,j,it,lt)=>{const _t=()=>{if(L.isMounted){let{next:ut,bu:et,u:Pt,parent:E,vnode:x}=L;{const pt=Xv(L);if(pt){ut&&(ut.el=x.el,F(L,ut,lt)),pt.asyncDep.then(()=>{$n(()=>{L.isUnmounted||rt()},j)});return}}let B=ut,J;Cr(L,!1),ut?(ut.el=x.el,F(L,ut,lt)):ut=x,et&&Jc(et),(J=ut.props&&ut.props.onVnodeBeforeUpdate)&&zi(J,E,ut,x),Cr(L,!0);const ot=H_(L),dt=L.subTree;L.subTree=ot,g(dt,ot,d(dt.el),gt(dt),L,j,it),ut.el=ot.el,B===null&&jM(L,ot.el),Pt&&$n(Pt,j),(J=ut.props&&ut.props.onVnodeUpdated)&&$n(()=>zi(J,E,ut,x),j)}else{let ut;const{el:et,props:Pt}=D,{bm:E,m:x,parent:B,root:J,type:ot}=L,dt=fl(D);Cr(L,!1),E&&Jc(E),!dt&&(ut=Pt&&Pt.onVnodeBeforeMount)&&zi(ut,B,D),Cr(L,!0);{J.ce&&J.ce._hasShadowRoot()&&J.ce._injectChildStyle(ot,L.parent?L.parent.type:void 0);const pt=L.subTree=H_(L);g(null,pt,W,nt,L,j,it),D.el=pt.el}if(x&&$n(x,j),!dt&&(ut=Pt&&Pt.onVnodeMounted)){const pt=D;$n(()=>zi(ut,B,pt),j)}(D.shapeFlag&256||B&&fl(B.vnode)&&B.vnode.shapeFlag&256)&&L.a&&$n(L.a,j),L.isMounted=!0,D=W=nt=null}};L.scope.on();const R=L.effect=new rv(_t);L.scope.off();const rt=L.update=R.run.bind(R),xt=L.job=R.runIfDirty.bind(R);xt.i=L,xt.id=L.uid,R.scheduler=()=>Np(xt),Cr(L,!0),rt()},F=(L,D,W)=>{D.component=L;const nt=L.vnode.props;L.vnode=D,L.next=null,ZM(L,D.props,nt,W),eb(L,D.children,W),zs(),O_(L),Hs()},K=(L,D,W,nt,j,it,lt,_t,R=!1)=>{const rt=L&&L.children,xt=L?L.shapeFlag:0,ut=D.children,{patchFlag:et,shapeFlag:Pt}=D;if(et>0){if(et&128){ft(rt,ut,W,nt,j,it,lt,_t,R);return}else if(et&256){Z(rt,ut,W,nt,j,it,lt,_t,R);return}}Pt&8?(xt&16&&tt(rt,j,it),ut!==rt&&h(W,ut)):xt&16?Pt&16?ft(rt,ut,W,nt,j,it,lt,_t,R):tt(rt,j,it,!0):(xt&8&&h(W,""),Pt&16&&v(ut,W,nt,j,it,lt,_t,R))},Z=(L,D,W,nt,j,it,lt,_t,R)=>{L=L||Jo,D=D||Jo;const rt=L.length,xt=D.length,ut=Math.min(rt,xt);let et;for(et=0;et<ut;et++){const Pt=D[et]=R?Ls(D[et]):Ki(D[et]);g(L[et],Pt,W,null,j,it,lt,_t,R)}rt>xt?tt(L,j,it,!0,!1,ut):v(D,W,nt,j,it,lt,_t,R,ut)},ft=(L,D,W,nt,j,it,lt,_t,R)=>{let rt=0;const xt=D.length;let ut=L.length-1,et=xt-1;for(;rt<=ut&&rt<=et;){const Pt=L[rt],E=D[rt]=R?Ls(D[rt]):Ki(D[rt]);if(Sa(Pt,E))g(Pt,E,W,null,j,it,lt,_t,R);else break;rt++}for(;rt<=ut&&rt<=et;){const Pt=L[ut],E=D[et]=R?Ls(D[et]):Ki(D[et]);if(Sa(Pt,E))g(Pt,E,W,null,j,it,lt,_t,R);else break;ut--,et--}if(rt>ut){if(rt<=et){const Pt=et+1,E=Pt<xt?D[Pt].el:nt;for(;rt<=et;)g(null,D[rt]=R?Ls(D[rt]):Ki(D[rt]),W,E,j,it,lt,_t,R),rt++}}else if(rt>et)for(;rt<=ut;)wt(L[rt],j,it,!0),rt++;else{const Pt=rt,E=rt,x=new Map;for(rt=E;rt<=et;rt++){const vt=D[rt]=R?Ls(D[rt]):Ki(D[rt]);vt.key!=null&&x.set(vt.key,rt)}let B,J=0;const ot=et-E+1;let dt=!1,pt=0;const Q=new Array(ot);for(rt=0;rt<ot;rt++)Q[rt]=0;for(rt=Pt;rt<=ut;rt++){const vt=L[rt];if(J>=ot){wt(vt,j,it,!0);continue}let Et;if(vt.key!=null)Et=x.get(vt.key);else for(B=E;B<=et;B++)if(Q[B-E]===0&&Sa(vt,D[B])){Et=B;break}Et===void 0?wt(vt,j,it,!0):(Q[Et-E]=rt+1,Et>=pt?pt=Et:dt=!0,g(vt,D[Et],W,null,j,it,lt,_t,R),J++)}const at=dt?rb(Q):Jo;for(B=at.length-1,rt=ot-1;rt>=0;rt--){const vt=E+rt,Et=D[vt],yt=D[vt+1],mt=vt+1<xt?yt.el||$v(yt):nt;Q[rt]===0?g(null,Et,W,mt,j,it,lt,_t,R):dt&&(B<0||rt!==at[B]?Tt(Et,W,mt,2):B--)}}},Tt=(L,D,W,nt,j=null)=>{const{el:it,type:lt,transition:_t,children:R,shapeFlag:rt}=L;if(rt&6){Tt(L.component.subTree,D,W,nt);return}if(rt&128){L.suspense.move(D,W,nt);return}if(rt&64){lt.move(L,D,W,Wt);return}if(lt===Ps){i(it,D,W);for(let ut=0;ut<R.length;ut++)Tt(R[ut],D,W,nt);i(L.anchor,D,W);return}if(lt===ou){M(L,D,W);return}if(nt!==2&&rt&1&&_t)if(nt===0)_t.beforeEnter(it),i(it,D,W),$n(()=>_t.enter(it),j);else{const{leave:ut,delayLeave:et,afterLeave:Pt}=_t,E=()=>{L.ctx.isUnmounted?s(it):i(it,D,W)},x=()=>{it._isLeaving&&it[bM](!0),ut(it,()=>{E(),Pt&&Pt()})};et?et(it,E,x):x()}else i(it,D,W)},wt=(L,D,W,nt=!1,j=!1)=>{const{type:it,props:lt,ref:_t,children:R,dynamicChildren:rt,shapeFlag:xt,patchFlag:ut,dirs:et,cacheIndex:Pt,memo:E}=L;if(ut===-2&&(j=!1),_t!=null&&(zs(),dl(_t,null,W,L,!0),Hs()),Pt!=null&&(D.renderCache[Pt]=void 0),xt&256){D.ctx.deactivate(L);return}const x=xt&1&&et,B=!fl(L);let J;if(B&&(J=lt&&lt.onVnodeBeforeUnmount)&&zi(J,D,L),xt&6)jt(L.component,W,nt);else{if(xt&128){L.suspense.unmount(W,nt);return}x&&Rr(L,null,D,"beforeUnmount"),xt&64?L.type.remove(L,D,W,Wt,nt):rt&&!rt.hasOnce&&(it!==Ps||ut>0&&ut&64)?tt(rt,D,W,!1,!0):(it===Ps&&ut&384||!j&&xt&16)&&tt(R,D,W),nt&&re(L)}const ot=E!=null&&Pt==null;(B&&(J=lt&&lt.onVnodeUnmounted)||x||ot)&&$n(()=>{J&&zi(J,D,L),x&&Rr(L,null,D,"unmounted"),ot&&(L.el=null)},W)},re=L=>{const{type:D,el:W,anchor:nt,transition:j}=L;if(D===Ps){$t(W,nt);return}if(D===ou){S(L);return}const it=()=>{s(W),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(L.shapeFlag&1&&j&&!j.persisted){const{leave:lt,delayLeave:_t}=j,R=()=>lt(W,it);_t?_t(L.el,it,R):R()}else it()},$t=(L,D)=>{let W;for(;L!==D;)W=f(L),s(L),L=W;s(D)},jt=(L,D,W)=>{const{bum:nt,scope:j,job:it,subTree:lt,um:_t,m:R,a:rt}=L;W_(R),W_(rt),nt&&Jc(nt),j.stop(),it&&(it.flags|=8,wt(lt,L,D,W)),_t&&$n(_t,D),$n(()=>{L.isUnmounted=!0},D)},tt=(L,D,W,nt=!1,j=!1,it=0)=>{for(let lt=it;lt<L.length;lt++)wt(L[lt],D,W,nt,j)},gt=L=>{if(L.shapeFlag&6)return gt(L.component.subTree);if(L.shapeFlag&128)return L.suspense.next();const D=f(L.anchor||L.el),W=D&&D[SM];return W?f(W):D};let ht=!1;const Ht=(L,D,W)=>{let nt;L==null?D._vnode&&(wt(D._vnode,null,null,!0),nt=D._vnode.component):g(D._vnode||null,L,D,null,null,null,W),D._vnode=L,ht||(ht=!0,O_(nt),Mv(),ht=!1)},Wt={p:g,um:wt,m:Tt,r:re,mt:X,mc:v,pc:K,pbc:U,n:gt,o:e};return{render:Ht,hydrate:void 0,createApp:VM(Ht)}}function ru({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function Cr({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function sb(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wv(e,t,n=!1){const i=e.children,s=t.children;if(Jt(i)&&Jt(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=Ls(s[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Wv(o,a)),a.type===Bh&&(a.patchFlag===-1&&(a=s[r]=Ls(a)),a.el=o.el),a.type===Sr&&!a.el&&(a.el=o.el)}}function rb(e){const t=e.slice(),n=[0];let i,s,r,o,a;const l=e.length;for(i=0;i<l;i++){const c=e[i];if(c!==0){if(s=n[n.length-1],e[s]<c){t[i]=s,n.push(i);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,e[n[a]]<c?r=a+1:o=a;c<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=t[o];return n}function Xv(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Xv(t)}function W_(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}function $v(e){if(e.placeholder)return e.placeholder;const t=e.component;return t?$v(t.subTree):null}const Yv=e=>e.__isSuspense;function ob(e,t){t&&t.pendingBranch?Jt(e)?t.effects.push(...e):t.effects.push(e):_M(e)}const Ps=Symbol.for("v-fgt"),Bh=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),ou=Symbol.for("v-stc"),_l=[];let si=null;function no(e=!1){_l.push(si=e?null:[])}function ab(){_l.pop(),si=_l[_l.length-1]||null}let bl=1;function X_(e,t=!1){bl+=e,e<0&&si&&t&&(si.hasOnce=!0)}function qv(e){return e.dynamicChildren=bl>0?si||Jo:null,ab(),bl>0&&si&&si.push(e),e}function aa(e,t,n,i,s,r){return qv(Bt(e,t,n,i,s,r,!0))}function lb(e,t,n,i,s){return qv(Oi(e,t,n,i,s,!0))}function jv(e){return e?e.__v_isVNode===!0:!1}function Sa(e,t){return e.type===t.type&&e.key===t.key}const Kv=({key:e})=>e??null,th=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?hn(e)||Dn(e)||se(e)?{i:mi,r:e,k:t,f:!!n}:e:null);function Bt(e,t=null,n=null,i=0,s=null,r=e===Ps?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Kv(t),ref:t&&th(t),scopeId:Ev,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mi};return a?(Wp(l,n),r&128&&e.normalize(l)):n&&(l.shapeFlag|=hn(n)?8:16),bl>0&&!o&&si&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&si.push(l),l}const Oi=cb;function cb(e,t=null,n=null,i=0,s=null,r=!1){if((!e||e===OM)&&(e=Sr),jv(e)){const a=la(e,t,!0);return n&&Wp(a,n),bl>0&&!r&&si&&(a.shapeFlag&6?si[si.indexOf(e)]=a:si.push(a)),a.patchFlag=-2,a}if(yb(e)&&(e=e.__vccOpts),t){t=hb(t);let{class:a,style:l}=t;a&&!hn(a)&&(t.class=Zr(a)),Ne(l)&&(Op(l)&&!Jt(l)&&(l=En({},l)),t.style=wp(l))}const o=hn(e)?1:Yv(e)?128:MM(e)?64:Ne(e)?4:se(e)?2:0;return Bt(e,t,n,i,s,o,r,!0)}function hb(e){return e?Op(e)||Bv(e)?En({},e):e:null}function la(e,t,n=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=e,c=t?ub(s||{},t):s,h={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Kv(c),ref:t&&t.ref?n&&r?Jt(r)?r.concat(th(t)):[r,th(t)]:th(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ps?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&la(e.ssContent),ssFallback:e.ssFallback&&la(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&Fp(h,l.clone(h)),h}function $o(e=" ",t=0){return Oi(Bh,null,e,t)}function Gp(e="",t=!1){return t?(no(),lb(Sr,null,e)):Oi(Sr,null,e)}function Ki(e){return e==null||typeof e=="boolean"?Oi(Sr):Jt(e)?Oi(Ps,null,e.slice()):jv(e)?Ls(e):Oi(Bh,null,String(e))}function Ls(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:la(e)}function Wp(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Jt(t))n=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),Wp(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!Bv(t)?t._ctx=mi:s===3&&mi&&(mi.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else se(t)?(t={default:t,_ctx:mi},n=32):(t=String(t),i&64?(n=16,t=[$o(t)]):n=8);e.children=t,e.shapeFlag|=n}function ub(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=Zr([t.class,i.class]));else if(s==="style")t.style=wp([t.style,i.style]);else if(Lh(s)){const r=t[s],o=i[s];o&&r!==o&&!(Jt(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!Dh(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function zi(e,t,n,i=null){as(e,t,7,[n,i])}const db=Iv();let fb=0;function pb(e,t,n){const i=e.type,s=(t?t.appContext:e.appContext)||db,r={uid:fb++,vnode:e,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new NS(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zv(i,s),emitsOptions:Ov(i,s),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:i.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=WM.bind(null,r),e.ce&&e.ce(r),r}let kn=null;const _b=()=>kn||mi;let vh,of;{const e=Oh(),t=(n,i)=>{let s;return(s=e[n])||(s=e[n]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};vh=t("__VUE_INSTANCE_SETTERS__",n=>kn=n),of=t("__VUE_SSR_SETTERS__",n=>El=n)}const Dl=e=>{const t=kn;return vh(e),e.scope.on(),()=>{e.scope.off(),vh(t)}},$_=()=>{kn&&kn.scope.off(),vh(null)};function Zv(e){return e.vnode.shapeFlag&4}let El=!1;function mb(e,t=!1,n=!1){t&&of(t);const{props:i,children:s}=e.vnode,r=Zv(e);KM(e,i,r,t),tb(e,s,n||t);const o=r?gb(e,t):void 0;return t&&of(!1),o}function gb(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,UM);const{setup:i}=n;if(i){zs();const s=e.setupContext=i.length>1?vb(e):null,r=Dl(e),o=Ll(i,e,0,[e.props,s]),a=Zx(o);if(Hs(),r(),(a||e.sp)&&!fl(e)&&Av(e),a){if(o.then($_,$_),t)return o.then(l=>{Y_(e,l)}).catch(l=>{Uh(l,e,0)});e.asyncDep=o}else Y_(e,o)}else Jv(e)}function Y_(e,t,n){se(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ne(t)&&(e.setupState=vv(t)),Jv(e)}function Jv(e,t,n){const i=e.type;e.render||(e.render=i.render||ns);{const s=Dl(e);zs();try{NM(e)}finally{Hs(),s()}}}const xb={get(e,t){return Pn(e,"get",""),e[t]}};function vb(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,xb),slots:e.slots,emit:e.emit,expose:t}}function kh(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(vv(iM(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in pl)return pl[n](e)},has(t,n){return n in t||n in pl}})):e.proxy}function yb(e){return se(e)&&"__vccOpts"in e}const Sb=(e,t)=>cM(e,t,El),Mb="3.5.34";/**
* @vue/runtime-dom v3.5.34
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let af;const q_=typeof window<"u"&&window.trustedTypes;if(q_)try{af=q_.createPolicy("vue",{createHTML:e=>e})}catch{}const Qv=af?e=>af.createHTML(e):e=>e,bb="http://www.w3.org/2000/svg",Eb="http://www.w3.org/1998/Math/MathML",Cs=typeof document<"u"?document:null,j_=Cs&&Cs.createElement("template"),wb={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const s=t==="svg"?Cs.createElementNS(bb,e):t==="mathml"?Cs.createElementNS(Eb,e):n?Cs.createElement(e,{is:n}):Cs.createElement(e);return e==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:e=>Cs.createTextNode(e),createComment:e=>Cs.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Cs.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,s,r){const o=n?n.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===r||!(s=s.nextSibling)););else{j_.innerHTML=Qv(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=j_.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Tb=Symbol("_vtc");function Ab(e,t,n){const i=e[Tb];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const K_=Symbol("_vod"),Rb=Symbol("_vsh"),Cb=Symbol(""),Pb=/(?:^|;)\s*display\s*:/;function Lb(e,t,n){const i=e.style,s=hn(n);let r=!1;if(n&&!s){if(t)if(hn(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&nl(i,a,"")}else for(const o in t)n[o]==null&&nl(i,o,"");for(const o in n){o==="display"&&(r=!0);const a=n[o];a!=null?Ib(e,o,!hn(t)&&t?t[o]:void 0,a)||nl(i,o,a):nl(i,o,"")}}else if(s){if(t!==n){const o=i[Cb];o&&(n+=";"+o),i.cssText=n,r=Pb.test(n)}}else t&&e.removeAttribute("style");K_ in e&&(e[K_]=r?i.display:"",e[Rb]&&(i.display="none"))}const Z_=/\s*!important$/;function nl(e,t,n){if(Jt(n))n.forEach(i=>nl(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Db(e,t);Z_.test(n)?e.setProperty(ao(i),n.replace(Z_,""),"important"):e[i]=n}}const J_=["Webkit","Moz","ms"],au={};function Db(e,t){const n=au[t];if(n)return n;let i=Li(t);if(i!=="filter"&&i in e)return au[t]=i;i=tv(i);for(let s=0;s<J_.length;s++){const r=J_[s]+i;if(r in e)return au[t]=r}return t}function Ib(e,t,n,i){return e.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&hn(i)&&n===i}const Q_="http://www.w3.org/1999/xlink";function tm(e,t,n,i,s,r=OS(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Q_,t.slice(6,t.length)):e.setAttributeNS(Q_,t,n):n==null||r&&!nv(n)?e.removeAttribute(t):e.setAttribute(t,r?"":os(n)?String(n):n)}function em(e,t,n,i,s){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Qv(n):n);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=nv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(s||t)}function Yo(e,t,n,i){e.addEventListener(t,n,i)}function Ob(e,t,n,i){e.removeEventListener(t,n,i)}const nm=Symbol("_vei");function Ub(e,t,n,i,s=null){const r=e[nm]||(e[nm]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Nb(t);if(i){const c=r[t]=kb(i,s);Yo(e,a,c,l)}else o&&(Ob(e,a,o,l),r[t]=void 0)}}const im=/(?:Once|Passive|Capture)$/;function Nb(e){let t;if(im.test(e)){t={};let i;for(;i=e.match(im);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ao(e.slice(2)),t]}let lu=0;const Fb=Promise.resolve(),Bb=()=>lu||(Fb.then(()=>lu=0),lu=Date.now());function kb(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;as(zb(i,n.value),t,5,[i])};return n.value=e,n.attached=Bb(),n}function zb(e,t){if(Jt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>s=>!s._stopped&&i&&i(s))}else return t}const sm=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Hb=(e,t,n,i,s,r)=>{const o=s==="svg";t==="class"?Ab(e,i,o):t==="style"?Lb(e,n,i):Lh(t)?Dh(t)||Ub(e,t,n,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vb(e,t,i,o))?(em(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&tm(e,t,i,o,r,t!=="value")):e._isVueCE&&(Gb(e,t)||e._def.__asyncLoader&&(/[A-Z]/.test(t)||!hn(i)))?em(e,Li(t),i,r,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),tm(e,t,i,o))};function Vb(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&sm(t)&&se(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=e.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return sm(t)&&hn(n)?!1:t in e}function Gb(e,t){const n=e._def.props;if(!n)return!1;const i=Li(t);return Array.isArray(n)?n.some(s=>Li(s)===i):Object.keys(n).some(s=>Li(s)===i)}const rm=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Jt(t)?n=>Jc(t,n):t};function Wb(e){e.target.composing=!0}function om(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const cu=Symbol("_assign");function am(e,t,n){return t&&(e=e.trim()),n&&(e=Ep(e)),e}const $l={created(e,{modifiers:{lazy:t,trim:n,number:i}},s){e[cu]=rm(s);const r=i||s.props&&s.props.type==="number";Yo(e,t?"change":"input",o=>{o.target.composing||e[cu](am(e.value,n,r))}),(n||r)&&Yo(e,"change",()=>{e.value=am(e.value,n,r)}),t||(Yo(e,"compositionstart",Wb),Yo(e,"compositionend",om),Yo(e,"change",om))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:s,number:r}},o){if(e[cu]=rm(o),e.composing)return;const a=(r||e.type==="number")&&!/^0\d/.test(e.value)?Ep(e.value):e.value,l=t??"";if(a===l)return;const c=e.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===e&&e.type!=="range"&&(i&&t===n||s&&e.value.trim()===l)||(e.value=l)}},Xb=["ctrl","shift","alt","meta"],$b={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Xb.some(n=>e[`${n}Key`]&&!t.includes(n))},Yb=(e,t)=>{if(!e)return e;const n=e._withMods||(e._withMods={}),i=t.join(".");return n[i]||(n[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=$b[t[o]];if(a&&a(s,t))return}return e(s,...r)})},qb=En({patchProp:Hb},wb);let lm;function jb(){return lm||(lm=nb(qb))}const Kb=(...e)=>{const t=jb().createApp(...e),{mount:n}=t;return t.mount=i=>{const s=Jb(i);if(!s)return;const r=t._component;!se(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Zb(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function Zb(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Jb(e){return hn(e)?document.querySelector(e):e}var cm;(function(e){e[e.No=0]="No",e[e.Yes=1]="Yes",e[e.NoAndSkip=2]="NoAndSkip",e[e.YesAndSkip=3]="YesAndSkip"})(cm||(cm={}));const Qb={};function Kt(e){return e===void 0}function gi(e){return e==null}function tn(e){return typeof e=="string"}const{isFinite:lf}=Number;function je(e){return typeof e=="number"}const{isArray:ln}=Array;function ze(e){return e&&typeof e=="object"}function tE(e){return JSON.stringify(e)==="{}"}const De={default:(e,t)=>(Yl(t,e),Yl(e,t),e),assign(e,t,n){let i;Object.keys(t).forEach(s=>{var r,o;if(i=t[s],(i==null?void 0:i.constructor)===Object&&((r=e[s])===null||r===void 0?void 0:r.constructor)===Object)return Yl(e[s],t[s],n&&n[s]);n&&s in n?((o=n[s])===null||o===void 0?void 0:o.constructor)===Object&&Yl(e[s]={},t[s],n[s]):e[s]=t[s]})},copyAttrs:(e,t,n)=>(n.forEach(i=>{Kt(t[i])||(e[i]=t[i])}),e),clone:e=>JSON.parse(JSON.stringify(e)),toMap(e){const t={};for(let n=0,i=e.length;n<i;n++)t[e[n]]=!0;return t},stintSet(e,t,n){n||(n=void 0),e[t]!==n&&(e[t]=n)}},{assign:Yl}=De;class ty{get __useNaturalRatio(){return!0}get __isLinePath(){const{path:t}=this;return t&&t.length===6&&t[0]===1}get __usePathBox(){return this.__pathInputed}get __blendMode(){if(this.eraser&&this.eraser!=="path")return"destination-out";const{blendMode:t}=this;return t==="pass-through"?null:t}constructor(t){this.__leaf=t}__get(t){if(this.__input){const n=this.__input[t];if(!Kt(n))return n}return this[t]}__getData(){const t={tag:this.__leaf.tag},{__input:n}=this;let i;for(let s in this)s[0]!=="_"&&(i=n?n[s]:void 0,t[s]=Kt(i)?this[s]:i);return t}__setInput(t,n){this.__input||(this.__input={}),this.__input[t]=n}__getInput(t){if(this.__input){const n=this.__input[t];if(!Kt(n))return n}if(t!=="path"||this.__pathInputed)return this["_"+t]}__removeInput(t){this.__input&&!Kt(this.__input[t])&&(this.__input[t]=void 0)}__getInputData(t,n){const i={};if(t)if(ln(t))for(let s of t)i[s]=this.__getInput(s);else for(let s in t)i[s]=this.__getInput(s);else{let s,r,{__input:o}=this;i.tag=this.__leaf.tag;for(let a in this)if(a[0]!=="_"&&(s=this["_"+a],!Kt(s))){if(a==="path"&&!this.__pathInputed)continue;r=o?o[a]:void 0,i[a]=Kt(r)?s:r}}if(n&&n.matrix){const{a:s,b:r,c:o,d:a,e:l,f:c}=this.__leaf.__localMatrix;i.matrix={a:s,b:r,c:o,d:a,e:l,f:c}}return i}__setMiddle(t,n){this.__middle||(this.__middle={}),this.__middle[t]=n}__getMiddle(t){return this.__middle&&this.__middle[t]}__checkSingle(){const t=this;if(t.blendMode==="pass-through"){const n=this.__leaf;t.opacity<1&&(n.isBranch||t.__hasMultiPaint)||n.__hasEraser||t.eraser||t.filter?t.__single=!0:t.__single&&(t.__single=!1)}else t.__single=!0}__removeNaturalSize(){this.__naturalWidth=this.__naturalHeight=void 0}destroy(){this.__input=this.__middle=null,this.__complexData&&this.__complexData.destroy()}}const Gs={RUNTIME:"runtime",LEAF:"leaf",TASK:"task",CNAVAS:"canvas",IMAGE:"image",types:{},create(e){const{types:t}=eE;return t[e]?t[e]++:(t[e]=1,0)}},eE=Gs;let Hn,Vn,hu;const{max:Ma}=Math,uu=[0,0,0,0],Il={zero:[...uu],tempFour:uu,set:(e,t,n,i,s)=>(n===void 0&&(n=i=s=t),e[0]=t,e[1]=n,e[2]=i,e[3]=s,e),setTemp:(e,t,n,i)=>ql(uu,e,t,n,i),toTempAB(e,t,n){hu=n?je(e)?t:e:[],je(e)?(Hn=hm(e),Vn=t):je(t)?(Hn=e,Vn=hm(t)):(Hn=e,Vn=t),Hn.length!==4&&(Hn=du(Hn)),Vn.length!==4&&(Vn=du(Vn))},get(e,t){let n;if(!je(e))switch(e.length){case 4:n=Kt(t)?e:[...e];break;case 2:n=[e[0],e[1],e[0],e[1]];break;case 3:n=[e[0],e[1],e[2],e[1]];break;case 1:e=e[0];break;default:e=0}if(n||(n=[e,e,e,e]),!Kt(t))for(let i=0;i<4;i++)n[i]>t&&(n[i]=t);return n},max:(e,t,n)=>je(e)&&je(t)?Ma(e,t):(um(e,t,n),ql(hu,Ma(Hn[0],Vn[0]),Ma(Hn[1],Vn[1]),Ma(Hn[2],Vn[2]),Ma(Hn[3],Vn[3]))),add:(e,t,n)=>je(e)&&je(t)?e+t:(um(e,t,n),ql(hu,Hn[0]+Vn[0],Hn[1]+Vn[1],Hn[2]+Vn[2],Hn[3]+Vn[3])),swapAndScale(e,t,n,i){if(je(e))return t===n?e*t:[e*n,e*t];const s=i?e:[],[r,o,a,l]=e.length===4?e:du(e);return ql(s,a*n,l*t,r*n,o*t)}},{set:ql,get:du,setTemp:hm,toTempAB:um}=Il,{round:nE,pow:iE,max:sE,floor:rE,PI:Xp}=Math,fu={},wn={within:(e,t,n)=>(ze(t)&&(n=t.max,t=t.min),!Kt(t)&&e<t&&(e=t),!Kt(n)&&e>n&&(e=n),e),fourNumber:Il.get,formatRotation:(e,t)=>(e%=360,t?e<0&&(e+=360):(e>180&&(e-=360),e<-180&&(e+=360)),wn.float(e)),getGapRotation(e,t,n=0){let i=e+n;if(t>1){const s=Math.abs(i%t);(s<1||s>t-1)&&(i=Math.round(i/t)*t)}return i-n},float(e,t){const n=Kt(t)?1e12:iE(10,t);return(e=nE(e*n)/n)===-0?0:e},sign:e=>e<0?-1:1,getScaleData(e,t,n,i){if(i||(i={}),t){const s=(je(t)?t:t.width||0)/n.width,r=(je(t)?t:t.height||0)/n.height;i.scaleX=s||r||1,i.scaleY=r||s||1}else e&&wn.assignScale(i,e);return i},getScaleFixedData(e,t,n,i,s){let{scaleX:r,scaleY:o}=e;if((i||t)&&(r<0&&(r=-r),o<0&&(o=-o)),t)if(t===!0)r=o=n?1:1/r;else{let a;je(t)?a=t:t==="zoom-in"&&(a=1),a&&(r=o=r>a||o>a?n?1:1/r:n?1:1/a)}return fu.scaleX=r,fu.scaleY=o,fu},assignScale(e,t){je(t)?e.scaleX=e.scaleY=t:(e.scaleX=t.x,e.scaleY=t.y)},getFloorScale:(e,t=1)=>sE(rE(e),t)/e,randInt:jl,randColor:e=>`rgba(${jl(255)},${jl(255)},${jl(255)},${e||1})`};function jl(e){return Math.round(Math.random()*e)}const Me=Xp/180,Mi=2*Xp,qo=Xp/2;function oE(){return{x:0,y:0}}function ey(){return{x:0,y:0,width:0,height:0}}function ny(){return{a:1,b:0,c:0,d:1,e:0,f:0}}const{sin:pu,cos:_u,acos:Kl,sqrt:mu}=Math,{float:po}=wn,_o={};function dm(){return Object.assign(Object.assign(Object.assign({},{a:1,b:0,c:0,d:1,e:0,f:0}),{x:0,y:0,width:0,height:0}),{scaleX:1,scaleY:1,rotation:0,skewX:0,skewY:0})}const ie={defaultMatrix:{a:1,b:0,c:0,d:1,e:0,f:0},defaultWorld:dm(),tempMatrix:{},set(e,t=1,n=0,i=0,s=1,r=0,o=0){e.a=t,e.b=n,e.c=i,e.d=s,e.e=r,e.f=o},get:ny,getWorld:dm,copy(e,t){e.a=t.a,e.b=t.b,e.c=t.c,e.d=t.d,e.e=t.e,e.f=t.f},translate(e,t,n){e.e+=t,e.f+=n},translateInner(e,t,n,i){e.e+=e.a*t+e.c*n,e.f+=e.b*t+e.d*n,i&&(e.e-=t,e.f-=n)},scale(e,t,n=t){e.a*=t,e.b*=t,e.c*=n,e.d*=n},pixelScale(e,t,n){n||(n=e),n.a=e.a*t,n.b=e.b*t,n.c=e.c*t,n.d=e.d*t,n.e=e.e*t,n.f=e.f*t},scaleOfOuter(e,t,n,i){Xe.toInnerPoint(e,t,_o),Xe.scaleOfInner(e,_o,n,i)},scaleOfInner(e,t,n,i=n){Xe.translateInner(e,t.x,t.y),Xe.scale(e,n,i),Xe.translateInner(e,-t.x,-t.y)},rotate(e,t){const{a:n,b:i,c:s,d:r}=e,o=_u(t*=Me),a=pu(t);e.a=n*o-i*a,e.b=n*a+i*o,e.c=s*o-r*a,e.d=s*a+r*o},rotateOfOuter(e,t,n){Xe.toInnerPoint(e,t,_o),Xe.rotateOfInner(e,_o,n)},rotateOfInner(e,t,n){Xe.translateInner(e,t.x,t.y),Xe.rotate(e,n),Xe.translateInner(e,-t.x,-t.y)},skew(e,t,n){const{a:i,b:s,c:r,d:o}=e;n&&(n*=Me,e.a=i+r*n,e.b=s+o*n),t&&(t*=Me,e.c=r+i*t,e.d=o+s*t)},skewOfOuter(e,t,n,i){Xe.toInnerPoint(e,t,_o),Xe.skewOfInner(e,_o,n,i)},skewOfInner(e,t,n,i=0){Xe.translateInner(e,t.x,t.y),Xe.skew(e,n,i),Xe.translateInner(e,-t.x,-t.y)},multiply(e,t){const{a:n,b:i,c:s,d:r,e:o,f:a}=e;e.a=t.a*n+t.b*s,e.b=t.a*i+t.b*r,e.c=t.c*n+t.d*s,e.d=t.c*i+t.d*r,e.e=t.e*n+t.f*s+o,e.f=t.e*i+t.f*r+a},multiplyParent(e,t,n,i,s){const{e:r,f:o}=e;if(n||(n=e),Kt(i)&&(i=e.a!==1||e.b||e.c||e.d!==1),i){const{a,b:l,c,d:h}=e;n.a=a*t.a+l*t.c,n.b=a*t.b+l*t.d,n.c=c*t.a+h*t.c,n.d=c*t.b+h*t.d,s&&(n.scaleX=t.scaleX*s.scaleX,n.scaleY=t.scaleY*s.scaleY)}else n.a=t.a,n.b=t.b,n.c=t.c,n.d=t.d,s&&(n.scaleX=t.scaleX,n.scaleY=t.scaleY);n.e=r*t.a+o*t.c+t.e,n.f=r*t.b+o*t.d+t.f},divide(e,t){Xe.multiply(e,Xe.tempInvert(t))},divideParent(e,t){Xe.multiplyParent(e,Xe.tempInvert(t))},tempInvert(e){const{tempMatrix:t}=Xe;return Xe.copy(t,e),Xe.invert(t),t},invert(e){const{a:t,b:n,c:i,d:s,e:r,f:o}=e;if(n||i){const a=1/(t*s-n*i);e.a=s*a,e.b=-n*a,e.c=-i*a,e.d=t*a,e.e=-(r*s-o*i)*a,e.f=-(o*t-r*n)*a}else if(t===1&&s===1)e.e=-r,e.f=-o;else{const a=1/(t*s);e.a=s*a,e.d=t*a,e.e=-r*s*a,e.f=-o*t*a}},toOuterPoint(e,t,n,i){const{x:s,y:r}=t;n||(n=t),n.x=s*e.a+r*e.c,n.y=s*e.b+r*e.d,i||(n.x+=e.e,n.y+=e.f)},toInnerPoint(e,t,n,i){const{a:s,b:r,c:o,d:a}=e,l=1/(s*a-r*o),{x:c,y:h}=t;if(n||(n=t),n.x=(c*a-h*o)*l,n.y=(h*s-c*r)*l,!i){const{e:d,f}=e;n.x-=(d*a-f*o)*l,n.y-=(f*s-d*r)*l}},setLayout(e,t,n,i,s){const{x:r,y:o,scaleX:a,scaleY:l}=t;if(Kt(s)&&(s=t.rotation||t.skewX||t.skewY),s){const{rotation:c,skewX:h,skewY:d}=t,f=c*Me,u=_u(f),m=pu(f);if(h||d){const g=h*Me,_=d*Me;e.a=(u+_*-m)*a,e.b=(m+_*u)*a,e.c=(g*u-m)*l,e.d=(u+g*m)*l}else e.a=u*a,e.b=m*a,e.c=-m*l,e.d=u*l}else e.a=a,e.b=0,e.c=0,e.d=l;e.e=r,e.f=o,(n=n||i)&&Xe.translateInner(e,-n.x,-n.y,!i)},getLayout(e,t,n,i){const{a:s,b:r,c:o,d:a,e:l,f:c}=e;let h,d,f,u,m,g=l,_=c;if(r||o){const p=s*a-r*o;if(o&&!i){h=mu(s*s+r*r),d=p/h;const S=s/h;f=r>0?Kl(S):-Kl(S)}else{d=mu(o*o+a*a),h=p/d;const S=o/d;f=qo-(a>0?Kl(-S):-Kl(S))}const y=po(_u(f)),M=pu(f);h=po(h),d=po(d),u=y?po((o/d+M)/y/Me,9):0,m=y?po((r/h-M)/y/Me,9):0,f=po(f/Me)}else h=s,d=a,f=u=m=0;return(t=n||t)&&(g+=t.x*s+t.y*o,_+=t.x*r+t.y*a,n||(g-=t.x,_-=t.y)),{x:g,y:_,scaleX:h,scaleY:d,rotation:f,skewX:u,skewY:m}},withScale(e,t,n=t){const i=e;if(!t||!n){const{a:s,b:r,c:o,d:a}=e;r||o?n=(s*a-r*o)/(t=mu(s*s+r*r)):(t=s,n=a)}return i.scaleX=t,i.scaleY=n,i},reset(e){Xe.set(e)}},Xe=ie,{float:Zl}=wn,{toInnerPoint:gu,toOuterPoint:fm}=ie,{sin:pm,cos:_m,abs:mm,sqrt:aE,atan2:lE,min:cE,round:Jl}=Math,le={defaultPoint:{x:0,y:0},tempPoint:{},tempRadiusPoint:{},set(e,t=0,n=0){e.x=t,e.y=n},setRadius(e,t,n){e.radiusX=t,e.radiusY=Kt(n)?t:n},copy(e,t){e.x=t.x,e.y=t.y},copyFrom(e,t,n){e.x=t,e.y=n},round(e,t){e.x=t?Jl(e.x-.5)+.5:Jl(e.x),e.y=t?Jl(e.y-.5)+.5:Jl(e.y)},move(e,t,n){ze(t)?(e.x+=t.x,e.y+=t.y):(e.x+=t,e.y+=n)},scale(e,t,n=t){e.x&&(e.x*=t),e.y&&(e.y*=n)},scaleOf(e,t,n,i=n){e.x+=(e.x-t.x)*(n-1),e.y+=(e.y-t.y)*(i-1)},rotate(e,t,n){n||(n=Wr.defaultPoint);const i=_m(t*=Me),s=pm(t),r=e.x-n.x,o=e.y-n.y;e.x=n.x+r*i-o*s,e.y=n.y+r*s+o*i},tempToInnerOf(e,t){const{tempPoint:n}=Wr;return Ql(n,e),gu(t,n,n),n},tempToOuterOf(e,t){const{tempPoint:n}=Wr;return Ql(n,e),fm(t,n,n),n},tempToInnerRadiusPointOf(e,t){const{tempRadiusPoint:n}=Wr;return Ql(n,e),Wr.toInnerRadiusPointOf(e,t,n),n},copyRadiusPoint:(e,t,n,i)=>(Ql(e,t),hE(e,n,i),e),toInnerRadiusPointOf(e,t,n){n||(n=e),gu(t,e,n),n.radiusX=Math.abs(e.radiusX/t.scaleX),n.radiusY=Math.abs(e.radiusY/t.scaleY)},toInnerOf(e,t,n){gu(t,e,n)},toOuterOf(e,t,n){fm(t,e,n)},getCenter:(e,t)=>({x:e.x+(t.x-e.x)/2,y:e.y+(t.y-e.y)/2}),getCenterX:(e,t)=>e+(t-e)/2,getCenterY:(e,t)=>e+(t-e)/2,getDistance:(e,t)=>xu(e.x,e.y,t.x,t.y),getDistanceFrom(e,t,n,i){const s=mm(n-e),r=mm(i-t);return aE(s*s+r*r)},getMinDistanceFrom:(e,t,n,i,s,r)=>cE(xu(e,t,n,i),xu(n,i,s,r)),getAngle:(e,t)=>gm(e,t)/Me,getRotation:(e,t,n,i)=>(i||(i=t),Wr.getRadianFrom(e.x,e.y,t.x,t.y,n.x,n.y,i.x,i.y)/Me),getRadianFrom(e,t,n,i,s,r,o,a){Kt(o)&&(o=n,a=i);const l=e-n,c=t-i,h=s-o,d=r-a;return Math.atan2(l*d-c*h,l*h+c*d)},getAtan2:(e,t)=>lE(t.y-e.y,t.x-e.x),getDistancePoint(e,t,n,i,s){const r=gm(e,t);return s&&(e=t),i||(t={}),t.x=e.x+_m(r)*n,t.y=e.y+pm(r)*n,t},toNumberPoints(e){let t=e;return ze(e[0])&&(t=[],e.forEach(n=>t.push(n.x,n.y))),t},isSame:(e,t,n)=>n?e.x===t.x&&e.y===t.y:Zl(e.x)===Zl(t.x)&&Zl(e.y)===Zl(t.y),reset(e){}},Wr=le,{getDistanceFrom:xu,copy:Ql,setRadius:hE,getAtan2:gm}=Wr;let uE=class eh{constructor(t,n){this.set(t,n)}set(t,n){return ze(t)?le.copy(this,t):le.set(this,t,n),this}get(){const{x:t,y:n}=this;return{x:t,y:n}}clone(){return new eh(this)}move(t,n){return le.move(this,t,n),this}scale(t,n){return le.scale(this,t,n),this}scaleOf(t,n,i){return le.scaleOf(this,t,n,i),this}rotate(t,n){return le.rotate(this,t,n),this}rotateOf(t,n){return le.rotate(this,n,t),this}getRotation(t,n,i){return le.getRotation(this,t,n,i)}toInnerOf(t,n){return le.toInnerOf(this,t,n),this}toOuterOf(t,n){return le.toOuterOf(this,t,n),this}getCenter(t){return new eh(le.getCenter(this,t))}getDistance(t){return le.getDistance(this,t)}getDistancePoint(t,n,i,s){return new eh(le.getDistancePoint(this,t,n,i,s))}getAngle(t){return le.getAngle(this,t)}getAtan2(t){return le.getAtan2(this,t)}isSame(t,n){return le.isSame(this,t,n)}reset(){return this}};new uE;let io=class iy{constructor(t,n,i,s,r,o){this.set(t,n,i,s,r,o)}set(t,n,i,s,r,o){return ze(t)?ie.copy(this,t):ie.set(this,t,n,i,s,r,o),this}setWith(t){return ie.copy(this,t),this.scaleX=t.scaleX,this.scaleY=t.scaleY,this}get(){const{a:t,b:n,c:i,d:s,e:r,f:o}=this;return{a:t,b:n,c:i,d:s,e:r,f:o}}clone(){return new iy(this)}translate(t,n){return ie.translate(this,t,n),this}translateInner(t,n){return ie.translateInner(this,t,n),this}scale(t,n){return ie.scale(this,t,n),this}scaleWith(t,n){return ie.scale(this,t,n),this.scaleX*=t,this.scaleY*=n||t,this}pixelScale(t){return ie.pixelScale(this,t),this}scaleOfOuter(t,n,i){return ie.scaleOfOuter(this,t,n,i),this}scaleOfInner(t,n,i){return ie.scaleOfInner(this,t,n,i),this}rotate(t){return ie.rotate(this,t),this}rotateOfOuter(t,n){return ie.rotateOfOuter(this,t,n),this}rotateOfInner(t,n){return ie.rotateOfInner(this,t,n),this}skew(t,n){return ie.skew(this,t,n),this}skewOfOuter(t,n,i){return ie.skewOfOuter(this,t,n,i),this}skewOfInner(t,n,i){return ie.skewOfInner(this,t,n,i),this}multiply(t){return ie.multiply(this,t),this}multiplyParent(t){return ie.multiplyParent(this,t),this}divide(t){return ie.divide(this,t),this}divideParent(t){return ie.divideParent(this,t),this}invert(){return ie.invert(this),this}invertWith(){return ie.invert(this),this.scaleX=1/this.scaleX,this.scaleY=1/this.scaleY,this}toOuterPoint(t,n,i){ie.toOuterPoint(this,t,n,i)}toInnerPoint(t,n,i){ie.toInnerPoint(this,t,n,i)}setLayout(t,n,i){return ie.setLayout(this,t,n,i),this}getLayout(t,n,i){return ie.getLayout(this,t,n,i)}withScale(t,n){return ie.withScale(this,t,n)}reset(){ie.reset(this)}};new io;const zh={tempPointBounds:{},setPoint(e,t,n){e.minX=e.maxX=t,e.minY=e.maxY=n},addPoint(e,t,n){e.minX=t<e.minX?t:e.minX,e.minY=n<e.minY?n:e.minY,e.maxX=t>e.maxX?t:e.maxX,e.maxY=n>e.maxY?n:e.maxY},addBounds(e,t,n,i,s){xm(e,t,n),xm(e,t+i,n+s)},copy(e,t){e.minX=t.minX,e.minY=t.minY,e.maxX=t.maxX,e.maxY=t.maxY},addPointBounds(e,t){e.minX=t.minX<e.minX?t.minX:e.minX,e.minY=t.minY<e.minY?t.minY:e.minY,e.maxX=t.maxX>e.maxX?t.maxX:e.maxX,e.maxY=t.maxY>e.maxY?t.maxY:e.maxY},toBounds(e,t){t.x=e.minX,t.y=e.minY,t.width=e.maxX-e.minX,t.height=e.maxY-e.minY}},{addPoint:xm}=zh;var cf,hf;(function(e){e[e.top=0]="top",e[e.right=1]="right",e[e.bottom=2]="bottom",e[e.left=3]="left"})(cf||(cf={})),function(e){e[e.topLeft=0]="topLeft",e[e.top=1]="top",e[e.topRight=2]="topRight",e[e.right=3]="right",e[e.bottomRight=4]="bottomRight",e[e.bottom=5]="bottom",e[e.bottomLeft=6]="bottomLeft",e[e.left=7]="left",e[e.center=8]="center",e[e["top-left"]=0]="top-left",e[e["top-right"]=2]="top-right",e[e["bottom-right"]=4]="bottom-right",e[e["bottom-left"]=6]="bottom-left"}(hf||(hf={}));const $p=[{x:0,y:0},{x:.5,y:0},{x:1,y:0},{x:1,y:.5},{x:1,y:1},{x:.5,y:1},{x:0,y:1},{x:0,y:.5},{x:.5,y:.5}];$p.forEach(e=>e.type="percent");const wr={directionData:$p,tempPoint:{},get:vm,toPoint(e,t,n,i,s,r){const o=vm(e);n.x=o.x,n.y=o.y,o.type==="percent"&&(n.x*=t.width,n.y*=t.height,s&&(r||(n.x-=s.x,n.y-=s.y),o.x&&(n.x-=o.x===1?s.width:o.x===.5?o.x*s.width:0),o.y&&(n.y-=o.y===1?s.height:o.y===.5?o.y*s.height:0))),i||(n.x+=t.x,n.y+=t.y)},getPoint:(e,t,n,i=!0)=>(n||(n={}),wr.toPoint(e,t,n,i),n)};function vm(e){return tn(e)?$p[hf[e]]:e}const{toPoint:dE}=wr,sy={toPoint(e,t,n,i,s,r){dE(e,n,i,s,t,r)}},{tempPointBounds:Js,setPoint:ym,addPoint:tc,toBounds:Sm}=zh,{toOuterPoint:ec}=ie,{float:nc,fourNumber:fE}=wn,{floor:Mm,ceil:ic}=Math;let Hi,Vi,Pr,Lr;const ps={},ai={},Dr={},Ut={tempBounds:Dr,set(e,t=0,n=0,i=0,s=0){e.x=t,e.y=n,e.width=i,e.height=s},copy(e,t){e.x=t.x,e.y=t.y,e.width=t.width,e.height=t.height},copyAndSpread(e,t,n,i,s){const{x:r,y:o,width:a,height:l}=t;if(ln(n)){const c=fE(n);i?be.set(e,r+c[3],o+c[0],a-c[1]-c[3],l-c[2]-c[0]):be.set(e,r-c[3],o-c[0],a+c[1]+c[3],l+c[2]+c[0])}else i&&(n=-n),be.set(e,r-n,o-n,a+2*n,l+2*n);s&&(s==="width"?(e.y=o,e.height=l):(e.x=r,e.width=a))},minX:e=>e.width>0?e.x:e.x+e.width,minY:e=>e.height>0?e.y:e.y+e.height,maxX:e=>e.width>0?e.x+e.width:e.x,maxY:e=>e.height>0?e.y+e.height:e.y,move(e,t,n){e.x+=t,e.y+=n},scroll(e,t){e.x+=t.scrollX,e.y+=t.scrollY},getByMove:(e,t,n)=>(e=Object.assign({},e),be.move(e,t,n),e),toOffsetOutBounds(e,t,n){t?Em(t,e):t=e,n||(n=e),t.offsetX=be.maxX(n),t.offsetY=be.maxY(n),be.move(t,-t.offsetX,-t.offsetY)},scale(e,t,n=t,i){i||le.scale(e,t,n),e.width*=t,e.height*=n},scaleOf(e,t,n,i=n){le.scaleOf(e,t,n,i),e.width*=n,e.height*=i},tempToOuterOf:(e,t)=>(be.copy(Dr,e),be.toOuterOf(Dr,t),Dr),getOuterOf:(e,t)=>(e=Object.assign({},e),be.toOuterOf(e,t),e),toOuterOf(e,t,n){if(n||(n=e),t.b===0&&t.c===0){const{a:i,d:s,e:r,f:o}=t;i>0?(n.width=e.width*i,n.x=r+e.x*i):(n.width=e.width*-i,n.x=r+e.x*i-n.width),s>0?(n.height=e.height*s,n.y=o+e.y*s):(n.height=e.height*-s,n.y=o+e.y*s-n.height)}else ps.x=e.x,ps.y=e.y,ec(t,ps,ai),ym(Js,ai.x,ai.y),ps.x=e.x+e.width,ec(t,ps,ai),tc(Js,ai.x,ai.y),ps.y=e.y+e.height,ec(t,ps,ai),tc(Js,ai.x,ai.y),ps.x=e.x,ec(t,ps,ai),tc(Js,ai.x,ai.y),Sm(Js,n)},toInnerOf(e,t,n){n||(n=e),be.move(n,-t.e,-t.f),be.scale(n,1/t.a,1/t.d)},getFitMatrix(e,t,n=1){const i=Math.min(n,be.getFitScale(e,t));return new io(i,0,0,i,-t.x*i,-t.y*i)},getFitScale(e,t,n){const i=e.width/t.width,s=e.height/t.height;return n?Math.max(i,s):Math.min(i,s)},put(e,t,n="center",i=1,s=!0,r){r||(r=t),tn(i)&&(i=be.getFitScale(e,t,i==="cover")),Dr.width=s?t.width*=i:t.width*i,Dr.height=s?t.height*=i:t.height*i,sy.toPoint(n,Dr,e,r,!0,!0)},getSpread(e,t,n){const i={};return be.copyAndSpread(i,e,t,!1,n),i},spread(e,t,n){be.copyAndSpread(e,e,t,!1,n)},shrink(e,t,n){be.copyAndSpread(e,e,t,!0,n)},ceil(e){const{x:t,y:n}=e;e.x=Mm(e.x),e.y=Mm(e.y),e.width=t>e.x?ic(e.width+t-e.x):ic(e.width),e.height=n>e.y?ic(e.height+n-e.y):ic(e.height)},unsign(e){e.width<0&&(e.x+=e.width,e.width=-e.width),e.height<0&&(e.y+=e.height,e.height=-e.height)},float(e,t){e.x=nc(e.x,t),e.y=nc(e.y,t),e.width=nc(e.width,t),e.height=nc(e.height,t)},add(e,t,n){Hi=e.x+e.width,Vi=e.y+e.height,Pr=t.x,Lr=t.y,n||(Pr+=t.width,Lr+=t.height),Hi=Hi>Pr?Hi:Pr,Vi=Vi>Lr?Vi:Lr,e.x=e.x<t.x?e.x:t.x,e.y=e.y<t.y?e.y:t.y,e.width=Hi-e.x,e.height=Vi-e.y},addList(e,t){be.setListWithFn(e,t,void 0,!0)},setList(e,t,n=!1){be.setListWithFn(e,t,void 0,n)},addListWithFn(e,t,n){be.setListWithFn(e,t,n,!0)},setListWithFn(e,t,n,i=!1){let s,r=!0;for(let o=0,a=t.length;o<a;o++)s=n?n(t[o],o):t[o],s&&(s.width||s.height)&&(r?(r=!1,i||Em(e,s)):bm(e,s));r&&be.reset(e)},setPoints(e,t){t.forEach((n,i)=>i===0?ym(Js,n.x,n.y):tc(Js,n.x,n.y)),Sm(Js,e)},setPoint(e,t){be.set(e,t.x,t.y)},addPoint(e,t){bm(e,t,!0)},getPoints(e){const{x:t,y:n,width:i,height:s}=e;return[{x:t,y:n},{x:t+i,y:n},{x:t+i,y:n+s},{x:t,y:n+s}]},getPoint:(e,t,n=!1,i)=>wr.getPoint(t,e,i,n),hitRadiusPoint:(e,t,n)=>(n&&(t=le.tempToInnerRadiusPointOf(t,n)),t.x>=e.x-t.radiusX&&t.x<=e.x+e.width+t.radiusX&&t.y>=e.y-t.radiusY&&t.y<=e.y+e.height+t.radiusY),hitPoint:(e,t,n)=>(n&&(t=le.tempToInnerOf(t,n)),t.x>=e.x&&t.x<=e.x+e.width&&t.y>=e.y&&t.y<=e.y+e.height),hit:(e,t,n)=>(n&&(t=be.tempToOuterOf(t,n)),!(e.y+e.height<t.y||t.y+t.height<e.y||e.x+e.width<t.x||t.x+t.width<e.x)),includes:(e,t,n)=>(n&&(t=be.tempToOuterOf(t,n)),e.x<=t.x&&e.y<=t.y&&e.x+e.width>=t.x+t.width&&e.y+e.height>=t.y+t.height),getIntersectData(e,t,n){if(n&&(t=be.tempToOuterOf(t,n)),!be.hit(e,t))return{x:0,y:0,width:0,height:0};let{x:i,y:s,width:r,height:o}=t;return Hi=i+r,Vi=s+o,Pr=e.x+e.width,Lr=e.y+e.height,i=i>e.x?i:e.x,s=s>e.y?s:e.y,Hi=Hi<Pr?Hi:Pr,Vi=Vi<Lr?Vi:Lr,r=Hi-i,o=Vi-s,{x:i,y:s,width:r,height:o}},intersect(e,t,n){be.copy(e,be.getIntersectData(e,t,n))},isSame:(e,t)=>e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height,isEmpty:e=>e.x===0&&e.y===0&&e.width===0&&e.height===0,hasSize:e=>e.width&&e.height,reset(e){be.set(e)}},be=Ut,{add:bm,copy:Em}=be;let cn=class uf{get minX(){return Ut.minX(this)}get minY(){return Ut.minY(this)}get maxX(){return Ut.maxX(this)}get maxY(){return Ut.maxY(this)}constructor(t,n,i,s){this.set(t,n,i,s)}set(t,n,i,s){return ze(t)?Ut.copy(this,t):Ut.set(this,t,n,i,s),this}get(){const{x:t,y:n,width:i,height:s}=this;return{x:t,y:n,width:i,height:s}}clone(){return new uf(this)}move(t,n){return Ut.move(this,t,n),this}scale(t,n,i){return Ut.scale(this,t,n,i),this}scaleOf(t,n,i){return Ut.scaleOf(this,t,n,i),this}toOuterOf(t,n){return Ut.toOuterOf(this,t,n),this}toInnerOf(t,n){return Ut.toInnerOf(this,t,n),this}getFitMatrix(t,n){return Ut.getFitMatrix(this,t,n)}put(t,n,i){Ut.put(this,t,n,i)}spread(t,n){return Ut.spread(this,t,n),this}shrink(t,n){return Ut.shrink(this,t,n),this}ceil(){return Ut.ceil(this),this}unsign(){return Ut.unsign(this),this}float(t){return Ut.float(this,t),this}add(t){return Ut.add(this,t),this}addList(t){return Ut.setList(this,t,!0),this}setList(t){return Ut.setList(this,t),this}addListWithFn(t,n){return Ut.setListWithFn(this,t,n,!0),this}setListWithFn(t,n){return Ut.setListWithFn(this,t,n),this}setPoint(t){return Ut.setPoint(this,t),this}setPoints(t){return Ut.setPoints(this,t),this}addPoint(t){return Ut.addPoint(this,t),this}getPoints(){return Ut.getPoints(this)}getPoint(t,n,i){return Ut.getPoint(this,t,n,i)}hitPoint(t,n){return Ut.hitPoint(this,t,n)}hitRadiusPoint(t,n){return Ut.hitRadiusPoint(this,t,n)}hit(t,n){return Ut.hit(this,t,n)}includes(t,n){return Ut.includes(this,t,n)}intersect(t,n){return Ut.intersect(this,t,n),this}getIntersect(t,n){return new uf(Ut.getIntersectData(this,t,n))}isSame(t){return Ut.isSame(this,t)}isEmpty(){return Ut.isEmpty(this)}reset(){Ut.reset(this)}};const qr=new cn;let pE=class{constructor(t,n,i,s,r,o){ze(t)?this.copy(t):this.set(t,n,i,s,r,o)}set(t=0,n=0,i=0,s=0,r=0,o=0){this.top=t,this.right=n,this.bottom=i,this.left=s,this.width=r,this.height=o}copy(t){const{top:n,right:i,bottom:s,left:r,width:o,height:a}=t;this.set(n,i,s,r,o,a)}getBoundsFrom(t){const{top:n,right:i,bottom:s,left:r,width:o,height:a}=this;return new cn(r,n,o||t.width-r-i,a||t.height-n-s)}};const ry={number:(e,t)=>ze(e)?e.type==="percent"?e.value*t:e.value:e},_E={0:1,1:1,2:1,3:1,4:1,5:1,6:1,7:1,8:1,9:1,".":1,e:1,E:1},{floor:wm,max:Tm}=Math,Dt={toURL(e,t){let n=encodeURIComponent(e);return t==="text"?n="data:text/plain;charset=utf-8,"+n:t==="svg"&&(n="data:image/svg+xml,"+n),n},image:{hitCanvasSize:100,maxCacheSize:4096e3,maxPatternSize:8847360,crossOrigin:"anonymous",isLarge:(e,t,n,i)=>e.width*e.height*(t?t*n:1)>(i||ba.maxCacheSize),isSuperLarge:(e,t,n)=>ba.isLarge(e,t,n,ba.maxPatternSize),getRealURL(e){const{prefix:t,suffix:n}=ba;return!n||e.startsWith("data:")||e.startsWith("blob:")||(e+=(e.includes("?")?"&":"?")+n),t&&e[0]==="/"&&(e=t+e),e},resize(e,t,n,i,s,r,o,a,l,c){const h=Tm(wm(t+(i||0)),1),d=Tm(wm(n+(s||0)),1);let f,u,m;c&&(m=ry.number(c.offset,c.type==="x"?t:n))&&(c.type==="x"?f=!0:u=!0);const g=Dt.origin.createCanvas(u?2*h:h,f?2*d:d),_=g.getContext("2d");if(a&&(_.globalAlpha=a),_.imageSmoothingEnabled=o!==!1,ba.canUse(e)){if(r){const p=t/r.width,y=n/r.height;_.setTransform(p,0,0,y,-r.x*p,-r.y*y),_.drawImage(e,0,0,e.width,e.height)}else _.drawImage(e,0,0,t,n);m&&(_.drawImage(g,0,0,h,d,f?m-h:h,f?d:m-d,h,d),_.drawImage(g,0,0,h,d,f?m:h,f?d:m,h,d))}return g},canUse:e=>e&&e.width&&!e.__closed,setPatternTransform(e,t,n){try{t&&e.setTransform&&(e.setTransform(t),t=void 0)}catch{}n&&De.stintSet(n,"transform",t)}}},{image:ba}=Dt,{randColor:Am}=wn;let Ge=class df{constructor(t){this.repeatMap={},this.name=t}static get(t){return new df(t)}static set filter(t){this.filterList=Rm(t)}static set exclude(t){this.excludeList=Rm(t)}static drawRepaint(t,n){const i=Am();t.fillWorld(n,i.replace("1)",".1)")),t.strokeWorld(n,i)}static drawBounds(t,n,i){const s=df.showBounds==="hit",r=t.__nowWorld,o=Am();s&&(n.setWorld(r),t.__drawHitPath(n),n.fillStyle=o.replace("1)",".2)"),n.fill()),n.resetTransform(),n.setStroke(o,2),s?n.stroke():n.strokeWorld(r,o)}log(...t){if(Ir.enable){if(Ir.filterList.length&&Ir.filterList.every(n=>n!==this.name)||Ir.excludeList.length&&Ir.excludeList.some(n=>n===this.name))return;console.log("%c"+this.name,"color:#21ae62",...t)}}tip(...t){Ir.enable&&this.warn(...t)}warn(...t){Ir.showWarn&&console.warn(this.name,...t)}repeat(t,...n){this.repeatMap[t]||(this.warn("repeat:"+t,...n),this.repeatMap[t]=!0)}error(...t){try{throw new Error}catch(n){console.error(this.name,...t,n)}}};function Rm(e){return e?tn(e)&&(e=[e]):e=[],e}Ge.filterList=[],Ge.excludeList=[],Ge.showWarn=!0;const Ir=Ge,mE=Ge.get("RunTime"),Ri={currentId:0,currentName:"",idMap:{},nameMap:{},nameToIdMap:{},start(e,t){const n=Gs.create(Gs.RUNTIME);return li.currentId=li.idMap[n]=t?performance.now():Date.now(),li.currentName=li.nameMap[n]=e,li.nameToIdMap[e]=n,n},end(e,t){const n=li.idMap[e],i=li.nameMap[e],s=t?(performance.now()-n)/1e3:Date.now()-n;li.idMap[e]=li.nameMap[e]=li.nameToIdMap[i]=void 0,mE.log(i,s,"ms")},endOfName(e,t){const n=li.nameToIdMap[e];Kt(n)||li.end(n,t)}},li=Ri,oy=[],jn={list:{},add(e,...t){this.list[e]=!0,oy.push(...t)},has(e,t){const n=this.list[e];return!n&&t&&this.need(e),n},need(e){console.error("please install and import plugin: "+(e.includes("-x")?"":"@leafer-in/")+e)}};setTimeout(()=>oy.forEach(e=>jn.has(e,!0)));const Ke={editor:e=>jn.need("editor")},Cm=Ge.get("UICreator"),Ol={list:{},register(e){const{__tag:t}=e.prototype;sc[t]&&Cm.repeat(t),sc[t]=e},get(e,t,n,i,s,r){if(!sc[e])return void Cm.warn("not register "+e);const o=new sc[e](t);return Kt(n)||(o.x=n,i&&(o.y=i),s&&(o.width=s),r&&(o.height=r)),o}},{list:sc}=Ol,gE=Ge.get("EventCreator"),ca={nameList:{},register(e){let t;Object.keys(e).forEach(n=>{t=e[n],tn(t)&&(Ea[t]&&gE.repeat(t),Ea[t]=e)})},changeName(e,t){const n=Ea[e];if(n){const i=Object.keys(n).find(s=>n[s]===e);i&&(n[i]=t,Ea[t]=n)}},has(e){return!!this.nameList[e]},get:(e,...t)=>new Ea[e](...t)},{nameList:Ea}=ca;let ay=class{constructor(){this.list=[]}add(t){t.manager=this,this.list.push(t)}get(t){let n;const{list:i}=this;for(let r=0,o=i.length;r<o;r++)if(n=i[r],n.recycled&&n.isSameSize(t))return n.recycled=!1,n.manager||(n.manager=this),n;const s=Ke.canvas(t);return this.add(s),s}recycle(t){t.recycled=!0}clearRecycled(){let t;const n=[];for(let i=0,s=this.list.length;i<s;i++)t=this.list[i],t.recycled?t.destroy():n.push(t);this.list=n}clear(){this.list.forEach(t=>{t.destroy()}),this.list.length=0}destroy(){this.clear()}};function Ft(e,t,n,i){var s,r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}function ly(e,t,n,i){return new(n||(n=Promise))(function(s,r){function o(c){try{l(i.next(c))}catch(h){r(h)}}function a(c){try{l(i.throw(c))}catch(h){r(h)}}function l(c){var h;c.done?s(c.value):(h=c.value,h instanceof n?h:new n(function(d){d(h)})).then(o,a)}l((i=i.apply(e,[])).next())})}function He(e){return(t,n)=>{e||(e=n);const i={get(){return this.context[e]},set(s){this.context[e]=s}};n==="strokeCap"&&(i.set=function(s){this.context[e]=s==="none"?"butt":s}),Object.defineProperty(t,n,i)}}const cy=[];function xe(){return(e,t)=>{cy.push(t)}}const xE=[];let zt=class{set blendMode(t){t==="normal"&&(t="source-over"),this.context.globalCompositeOperation=t}get blendMode(){return this.context.globalCompositeOperation}set dashPattern(t){this.context.setLineDash(t||xE)}get dashPattern(){return this.context.getLineDash()}__bindContext(){let t;cy.forEach(n=>{t=this.context[n],t&&(this[n]=t.bind(this.context))}),this.textBaseline="alphabetic"}setTransform(t,n,i,s,r,o){}resetTransform(){}getTransform(){}save(){}restore(){}transform(t,n,i,s,r,o){ze(t)?this.context.transform(t.a,t.b,t.c,t.d,t.e,t.f):this.context.transform(t,n,i,s,r,o)}translate(t,n){}scale(t,n){}rotate(t){}fill(t,n){}stroke(t){}clip(t,n){}fillRect(t,n,i,s){}strokeRect(t,n,i,s){}clearRect(t,n,i,s){}drawImage(t,n,i,s,r,o,a,l,c){switch(arguments.length){case 9:if(n<0){const h=-n/s*l;s+=n,n=0,o+=h,l-=h}if(i<0){const h=-i/r*c;r+=i,i=0,a+=h,c-=h}this.context.drawImage(t,n,i,s,r,o,a,l,c);break;case 5:this.context.drawImage(t,n,i,s,r);break;case 3:this.context.drawImage(t,n,i)}}beginPath(){}moveTo(t,n){}lineTo(t,n){}bezierCurveTo(t,n,i,s,r,o){}quadraticCurveTo(t,n,i,s){}closePath(){}arc(t,n,i,s,r,o){}arcTo(t,n,i,s,r){}ellipse(t,n,i,s,r,o,a,l){}rect(t,n,i,s){}roundRect(t,n,i,s,r){}createConicGradient(t,n,i){}createLinearGradient(t,n,i,s){}createPattern(t,n){}createRadialGradient(t,n,i,s,r,o){}fillText(t,n,i,s){}measureText(t){}strokeText(t,n,i,s){}destroy(){this.context=null}};Ft([He("imageSmoothingEnabled")],zt.prototype,"smooth",void 0),Ft([He("imageSmoothingQuality")],zt.prototype,"smoothLevel",void 0),Ft([He("globalAlpha")],zt.prototype,"opacity",void 0),Ft([He()],zt.prototype,"fillStyle",void 0),Ft([He()],zt.prototype,"strokeStyle",void 0),Ft([He("lineWidth")],zt.prototype,"strokeWidth",void 0),Ft([He("lineCap")],zt.prototype,"strokeCap",void 0),Ft([He("lineJoin")],zt.prototype,"strokeJoin",void 0),Ft([He("lineDashOffset")],zt.prototype,"dashOffset",void 0),Ft([He()],zt.prototype,"miterLimit",void 0),Ft([He()],zt.prototype,"shadowBlur",void 0),Ft([He()],zt.prototype,"shadowColor",void 0),Ft([He()],zt.prototype,"shadowOffsetX",void 0),Ft([He()],zt.prototype,"shadowOffsetY",void 0),Ft([He()],zt.prototype,"filter",void 0),Ft([He()],zt.prototype,"font",void 0),Ft([He()],zt.prototype,"fontKerning",void 0),Ft([He()],zt.prototype,"fontStretch",void 0),Ft([He()],zt.prototype,"fontVariantCaps",void 0),Ft([He()],zt.prototype,"textAlign",void 0),Ft([He()],zt.prototype,"textBaseline",void 0),Ft([He()],zt.prototype,"textRendering",void 0),Ft([He()],zt.prototype,"wordSpacing",void 0),Ft([He()],zt.prototype,"letterSpacing",void 0),Ft([He()],zt.prototype,"direction",void 0),Ft([xe()],zt.prototype,"setTransform",null),Ft([xe()],zt.prototype,"resetTransform",null),Ft([xe()],zt.prototype,"getTransform",null),Ft([xe()],zt.prototype,"save",null),Ft([xe()],zt.prototype,"restore",null),Ft([xe()],zt.prototype,"translate",null),Ft([xe()],zt.prototype,"scale",null),Ft([xe()],zt.prototype,"rotate",null),Ft([xe()],zt.prototype,"fill",null),Ft([xe()],zt.prototype,"stroke",null),Ft([xe()],zt.prototype,"clip",null),Ft([xe()],zt.prototype,"fillRect",null),Ft([xe()],zt.prototype,"strokeRect",null),Ft([xe()],zt.prototype,"clearRect",null),Ft([xe()],zt.prototype,"beginPath",null),Ft([xe()],zt.prototype,"moveTo",null),Ft([xe()],zt.prototype,"lineTo",null),Ft([xe()],zt.prototype,"bezierCurveTo",null),Ft([xe()],zt.prototype,"quadraticCurveTo",null),Ft([xe()],zt.prototype,"closePath",null),Ft([xe()],zt.prototype,"arc",null),Ft([xe()],zt.prototype,"arcTo",null),Ft([xe()],zt.prototype,"ellipse",null),Ft([xe()],zt.prototype,"rect",null),Ft([xe()],zt.prototype,"roundRect",null),Ft([xe()],zt.prototype,"createConicGradient",null),Ft([xe()],zt.prototype,"createLinearGradient",null),Ft([xe()],zt.prototype,"createPattern",null),Ft([xe()],zt.prototype,"createRadialGradient",null),Ft([xe()],zt.prototype,"fillText",null),Ft([xe()],zt.prototype,"measureText",null),Ft([xe()],zt.prototype,"strokeText",null);const{copy:vE,multiplyParent:yE,pixelScale:SE}=ie,{round:rc}=Math,ve=new cn,Pm=new cn,ME={width:1,height:1,pixelRatio:1},wi=["width","height","pixelRatio"];let hy=class extends zt{get width(){return this.size.width}get height(){return this.size.height}get pixelRatio(){return this.size.pixelRatio}get pixelWidth(){return this.width*this.pixelRatio||0}get pixelHeight(){return this.height*this.pixelRatio||0}get pixelSnap(){return this.config.pixelSnap}set pixelSnap(t){this.config.pixelSnap=t}get allowBackgroundColor(){return this.view&&this.parentView}constructor(t,n){super(),this.size={},this.worldTransform={},t||(t=ME),this.manager=n,this.innerId=Gs.create(Gs.CNAVAS);const{width:i,height:s,pixelRatio:r}=t;this.autoLayout=!i||!s,this.size.pixelRatio=r||Dt.devicePixelRatio,this.config=t,this.init()}init(){}__createContext(){const{view:t}=this,{contextSettings:n}=this.config;this.context=n?t.getContext("2d",n):t.getContext("2d"),this.__bindContext()}export(t,n){}toBlob(t,n){}toDataURL(t,n){}saveAs(t,n){}resize(t,n=!0){if(this.isSameSize(t))return;let i;this.context&&!this.unreal&&n&&this.width&&(i=this.getSameCanvas(),i.copyWorld(this));const s=this.size;De.copyAttrs(s,t,wi),wi.forEach(r=>s[r]||(s[r]=1)),this.bounds=new cn(0,0,this.width,this.height),this.updateViewSize(),this.updateClientBounds(),this.context&&(this.smooth=this.config.smooth,!this.unreal&&i&&(this.clearWorld(i.bounds),this.copyWorld(i),i.recycle()))}updateViewSize(){}updateClientBounds(){}getClientBounds(t){return t&&this.updateClientBounds(),this.clientBounds||this.bounds}startAutoLayout(t,n){}stopAutoLayout(){}setCursor(t){}setWorld(t,n){const{pixelRatio:i,pixelSnap:s}=this,r=this.worldTransform;n&&yE(t,n,r),SE(t,i,r),s&&!t.ignorePixelSnap&&(t.half&&t.half*i%2?(r.e=rc(r.e-.5)+.5,r.f=rc(r.f-.5)+.5):(r.e=rc(r.e),r.f=rc(r.f))),this.setTransform(r.a,r.b,r.c,r.d,r.e,r.f)}useWorldTransform(t){t&&(this.worldTransform=t);const n=this.worldTransform;n&&this.setTransform(n.a,n.b,n.c,n.d,n.e,n.f)}setStroke(t,n,i,s){n&&(this.strokeWidth=n),t&&(this.strokeStyle=t),i&&this.setStrokeOptions(i,s)}setStrokeOptions(t,n){let{strokeCap:i,strokeJoin:s,dashPattern:r,dashOffset:o,miterLimit:a}=t;n&&(n.strokeCap&&(i=n.strokeCap),n.strokeJoin&&(s=n.strokeJoin),Kt(n.dashPattern)||(r=n.dashPattern),Kt(n.dashOffset)||(o=n.dashOffset),n.miterLimit&&(a=n.miterLimit)),this.strokeCap=i,this.strokeJoin=s,this.dashPattern=r,this.dashOffset=o,this.miterLimit=a}saveBlendMode(t){this.savedBlendMode=this.blendMode,this.blendMode=t}restoreBlendMode(){this.blendMode=this.savedBlendMode}hitFill(t,n){return!0}hitStroke(t,n){return!0}hitPixel(t,n,i=1){return!0}setWorldShadow(t,n,i,s){const{pixelRatio:r}=this;this.shadowOffsetX=t*r,this.shadowOffsetY=n*r,this.shadowBlur=i*r,this.shadowColor=s||"black"}setWorldBlur(t){const{pixelRatio:n}=this;this.filter=`blur(${t*n}px)`}copyWorld(t,n,i,s,r){s&&(this.blendMode=s),n?(this.setTempPixelBounds(n,r),i?(this.setTempPixelBounds2(i,r),i=Pm):i=ve,this.drawImage(t.view,ve.x,ve.y,ve.width,ve.height,i.x,i.y,i.width,i.height)):this.drawImage(t.view,0,0),s&&(this.blendMode="source-over")}copyWorldToInner(t,n,i,s,r){n.b||n.c?(this.save(),this.resetTransform(),this.copyWorld(t,n,Ut.tempToOuterOf(i,n),s,r),this.restore()):(s&&(this.blendMode=s),this.setTempPixelBounds(n,r),this.drawImage(t.view,ve.x,ve.y,ve.width,ve.height,i.x,i.y,i.width,i.height),s&&(this.blendMode="source-over"))}copyWorldByReset(t,n,i,s,r,o){this.resetTransform(),this.copyWorld(t,n,i,s,o),r||this.useWorldTransform()}useGrayscaleAlpha(t){let n,i;this.setTempPixelBounds(t,!0,!0);const{context:s}=this,r=s.getImageData(ve.x,ve.y,ve.width,ve.height),{data:o}=r;for(let a=0,l=o.length;a<l;a+=4)i=.299*o[a]+.587*o[a+1]+.114*o[a+2],(n=o[a+3])&&(o[a+3]=n===255?i:n*(i/255));s.putImageData(r,ve.x,ve.y)}useMask(t,n,i){this.copyWorld(t,n,i,"destination-in")}useEraser(t,n,i){this.copyWorld(t,n,i,"destination-out")}fillWorld(t,n,i,s){i&&(this.blendMode=i),this.fillStyle=n,this.setTempPixelBounds(t,s),this.fillRect(ve.x,ve.y,ve.width,ve.height),i&&(this.blendMode="source-over")}strokeWorld(t,n,i,s){i&&(this.blendMode=i),this.strokeStyle=n,this.setTempPixelBounds(t,s),this.strokeRect(ve.x,ve.y,ve.width,ve.height),i&&(this.blendMode="source-over")}clipWorld(t,n=!0){this.beginPath(),this.setTempPixelBounds(t,n),this.rect(ve.x,ve.y,ve.width,ve.height),this.clip()}clipUI(t){t.windingRule?this.clip(t.windingRule):this.clip()}clearWorld(t,n=!0){this.setTempPixelBounds(t,n),this.clearRect(ve.x,ve.y,ve.width,ve.height)}clear(){const{pixelRatio:t}=this;this.clearRect(0,0,this.width*t+2,this.height*t+2)}setTempPixelBounds(t,n,i){this.copyToPixelBounds(ve,t,n,i)}setTempPixelBounds2(t,n,i){this.copyToPixelBounds(Pm,t,n,i)}copyToPixelBounds(t,n,i,s){t.set(n),s&&t.intersect(this.bounds),t.scale(this.pixelRatio),i&&t.ceil()}isSameSize(t){return this.width===t.width&&this.height===t.height&&(!t.pixelRatio||this.pixelRatio===t.pixelRatio)}getSameCanvas(t,n){const{size:i,pixelSnap:s}=this,r=this.manager?this.manager.get(i):Ke.canvas(Object.assign({},i));return r.save(),t&&(vE(r.worldTransform,this.worldTransform),r.useWorldTransform()),n&&(r.smooth=this.smooth),r.pixelSnap!==s&&(r.pixelSnap=s),r}recycle(t){this.recycled||(this.restore(),t?this.clearWorld(t):this.clear(),this.manager?this.manager.recycle(this):this.destroy())}updateRender(t){}unrealCanvas(){}destroy(){this.manager=this.view=this.parentView=null}};const Zi={creator:{},parse(e,t){},convertToCanvasData(e,t){}},uy={N:21,D:22,X:23,G:24,F:25,O:26,P:27,U:28},Fi=Object.assign({M:1,m:10,L:2,l:20,H:3,h:30,V:4,v:40,C:5,c:50,S:6,s:60,Q:7,q:70,T:8,t:80,A:9,a:90,Z:11,z:11,R:12},uy),dy={M:3,m:3,L:3,l:3,H:2,h:2,V:2,v:2,C:7,c:7,S:5,s:5,Q:5,q:5,T:3,t:3,A:8,a:8,Z:1,z:1,N:5,D:9,X:6,G:9,F:5,O:7,P:4,U:6},fy={m:10,l:20,H:3,h:30,V:4,v:40,c:50,S:6,s:60,q:70,T:8,t:80,A:9,a:90},bE=Object.assign(Object.assign({},fy),uy),yh=Fi,py={};for(let e in yh)py[yh[e]]=e;const Yp={};for(let e in yh)Yp[yh[e]]=dy[e];const _y={drawRoundRect(e,t,n,i,s,r){const o=wn.fourNumber(r,Math.min(i/2,s/2)),a=t+i,l=n+s;o[0]?e.moveTo(t+o[0],n):e.moveTo(t,n),o[1]?e.arcTo(a,n,a,l,o[1]):e.lineTo(a,n),o[2]?e.arcTo(a,l,t,l,o[2]):e.lineTo(a,l),o[3]?e.arcTo(t,l,t,n,o[3]):e.lineTo(t,l),o[0]?e.arcTo(t,n,a,n,o[0]):e.lineTo(t,n)}},{sin:mo,cos:wa,hypot:Lm,atan2:Dm,ceil:EE,abs:Im,PI:Om,sqrt:Um,pow:oc}=Math,{setPoint:vu,addPoint:ac}=zh,{set:lc,toNumberPoints:wE}=le,{M:Nm,L:yu,C:Su,Q:Fm,Z:TE}=Fi,Mu={},eo={points(e,t,n,i){let s=wE(t);if(e.push(Nm,s[0],s[1]),n&&s.length>5){let r,o,a,l,c,h,d,f,u,m,g,_,p,y,M,S=s.length;const A=n===!0?.5:n;i&&(s=[s[S-2],s[S-1],...s,s[0],s[1],s[2],s[3]],S=s.length);for(let w=2;w<S-2;w+=2)r=s[w-2],o=s[w-1],a=s[w],l=s[w+1],c=s[w+2],h=s[w+3],g=a-r,_=l-o,p=Um(oc(g,2)+oc(_,2)),y=Um(oc(c-a,2)+oc(h-l,2)),(p||y)&&(M=p+y,p=A*p/M,y=A*y/M,c-=r,h-=o,d=a-p*c,f=l-p*h,w===2?i||e.push(Fm,d,f,a,l):(g||_)&&e.push(Su,u,m,d,f,a,l),u=a+y*c,m=l+y*h);i||e.push(Fm,u,m,s[S-2],s[S-1])}else for(let r=2,o=s.length;r<o;r+=2)e.push(yu,s[r],s[r+1]);i&&e.push(TE)},rect(e,t,n,i,s){Zi.creator.path=e,Zi.creator.moveTo(t,n).lineTo(t+i,n).lineTo(t+i,n+s).lineTo(t,n+s).lineTo(t,n)},roundRect(e,t,n,i,s,r){Zi.creator.path=[],_y.drawRoundRect(Zi.creator,t,n,i,s,r),e.push(...Zi.convertToCanvasData(Zi.creator.path,!0))},arcTo(e,t,n,i,s,r,o,a,l,c,h){const d=i-t,f=s-n,u=r-i,m=o-s;let g=Dm(f,d),_=Dm(m,u);const p=Lm(d,f),y=Lm(u,m);let M=_-g;if(M<0&&(M+=Mi),p<1e-12||y<1e-12||M<1e-12||Im(M-Om)<1e-12)return e&&e.push(yu,i,s),l&&(vu(l,t,n),ac(l,i,s)),h&&lc(h,t,n),void(c&&lc(c,i,s));const S=d*m-u*f<0,A=S?-1:1,w=a/wa(M/2),P=i+w*wa(g+M/2+qo*A),v=s+w*mo(g+M/2+qo*A);return g-=qo*A,_-=qo*A,zm(e,P,v,a,a,0,g/Me,_/Me,S,l,c,h)},arc:(e,t,n,i,s,r,o,a,l,c)=>zm(e,t,n,i,i,0,s,r,o,a,l,c),ellipse(e,t,n,i,s,r,o,a,l,c,h,d){const f=r*Me,u=mo(f),m=wa(f);let g=o*Me,_=a*Me;g>Om&&(g-=Mi),_<0&&(_+=Mi);let p=_-g;p<0?p+=Mi:p>Mi&&(p-=Mi),l&&(p-=Mi);const y=EE(Im(p/qo)),M=p/y,S=mo(M/4),A=8/3*S*S/mo(M/2);_=g+M;let w,P,v,T,U,C,I,k,X=wa(g),O=mo(g),z=v=m*i*X-u*s*O,F=T=u*i*X+m*s*O,K=t+v,Z=n+T;e&&e.push(e.length?yu:Nm,K,Z),c&&vu(c,K,Z),d&&lc(d,K,Z);for(let ft=0;ft<y;ft++)w=wa(_),P=mo(_),v=m*i*w-u*s*P,T=u*i*w+m*s*P,U=t+z-A*(m*i*O+u*s*X),C=n+F-A*(u*i*O-m*s*X),I=t+v+A*(m*i*P+u*s*w),k=n+T+A*(u*i*P-m*s*w),e&&e.push(Su,U,C,I,k,t+v,n+T),c&&km(t+z,n+F,U,C,I,k,t+v,n+T,c,!0),z=v,F=T,X=w,O=P,g=_,_+=M;h&&lc(h,t+v,n+T)},quadraticCurveTo(e,t,n,i,s,r,o){e.push(Su,(t+2*i)/3,(n+2*s)/3,(r+2*i)/3,(o+2*s)/3,r,o)},toTwoPointBoundsByQuadraticCurve(e,t,n,i,s,r,o,a){km(e,t,(e+2*n)/3,(t+2*i)/3,(s+2*n)/3,(r+2*i)/3,s,r,o,a)},toTwoPointBounds(e,t,n,i,s,r,o,a,l,c){const h=[];let d,f,u,m,g,_,p,y,M=e,S=n,A=s,w=o;for(let P=0;P<2;++P)if(P==1&&(M=t,S=i,A=r,w=a),d=-3*M+9*S-9*A+3*w,f=6*M-12*S+6*A,u=3*S-3*M,Math.abs(d)<1e-12){if(Math.abs(f)<1e-12)continue;m=-u/f,0<m&&m<1&&h.push(m)}else p=f*f-4*u*d,y=Math.sqrt(p),p<0||(g=(-f+y)/(2*d),0<g&&g<1&&h.push(g),_=(-f-y)/(2*d),0<_&&_<1&&h.push(_));c?ac(l,e,t):vu(l,e,t),ac(l,o,a);for(let P=0,v=h.length;P<v;P++)Bm(h[P],e,t,n,i,s,r,o,a,Mu),ac(l,Mu.x,Mu.y)},getPointAndSet(e,t,n,i,s,r,o,a,l,c){const h=1-e,d=h*h*h,f=3*h*h*e,u=3*h*e*e,m=e*e*e;c.x=d*t+f*i+u*r+m*a,c.y=d*n+f*s+u*o+m*l},getPoint(e,t,n,i,s,r,o,a,l){const c={};return Bm(e,t,n,i,s,r,o,a,l,c),c},getDerivative(e,t,n,i,s){const r=1-e;return 3*r*r*(n-t)+6*r*e*(i-n)+3*e*e*(s-i)},cut(e,t,n,i,s,r,o,a,l){if(e<=0)return{left:null,right:[i,s,r,o,a,l]};if(e>=1)return{left:[i,s,r,o,a,l],right:null};const c=1-e,h=t*c+i*e,d=n*c+s*e,f=i*c+r*e,u=s*c+o*e,m=r*c+a*e,g=o*c+l*e,_=h*c+f*e,p=d*c+u*e,y=f*c+m*e,M=u*c+g*e;return{left:[h,d,_,p,_*c+y*e,p*c+M*e],right:[y,M,m,g,a,l]}}},{getPointAndSet:Bm,toTwoPointBounds:km,ellipse:zm}=eo,{sin:AE,cos:RE,sqrt:Hm,atan2:Vm}=Math,{ellipse:CE}=eo,PE={ellipticalArc(e,t,n,i,s,r,o,a,l,c,h){const d=(l-t)/2,f=(c-n)/2,u=r*Me,m=AE(u),g=RE(u),_=-g*d-m*f,p=-g*f+m*d,y=i*i,M=s*s,S=p*p,A=_*_,w=y*M-y*S-M*A;let P=0;if(w<0){const z=Hm(1-w/(y*M));i*=z,s*=z}else P=(o===a?-1:1)*Hm(w/(y*S+M*A));const v=P*i*p/s,T=-P*s*_/i,U=Vm((p-T)/s,(_-v)/i),C=Vm((-p-T)/s,(-_-v)/i);let I=C-U;a===0&&I>0?I-=Mi:a===1&&I<0&&(I+=Mi);const k=t+d+g*v-m*T,X=n+f+m*v+g*T,O=I<0?1:0;h||Dt.ellipseToCurve?CE(e,k,X,i,s,r,U/Me,C/Me,O):i!==s||r?e.push(Fi.G,k,X,i,s,r,U/Me,C/Me,O):e.push(Fi.O,k,X,i,U/Me,C/Me,O)}},LE={toCommand:e=>[],toNode:e=>[]},{M:bu,m:DE,L:go,l:IE,H:OE,h:UE,V:NE,v:FE,C:xo,c:BE,S:Eu,s:kE,Q:vo,q:zE,T:wu,t:HE,A:VE,a:GE,Z:Tu,z:WE,N:XE,D:$E,X:YE,G:qE,F:jE,O:KE,P:ZE,U:JE}=Fi,{rect:QE,roundRect:Gm,arcTo:tw,arc:Wm,ellipse:Xm,quadraticCurveTo:$m}=eo,{ellipticalArc:ew}=PE,nw=Ge.get("PathConvert"),_s={},so={current:{dot:0},stringify(e,t){let n,i,s,r=0,o=e.length,a="";for(;r<o;){i=e[r],n=Yp[i],a+=i===s?" ":py[i];for(let l=1;l<n;l++)a+=wn.float(e[r+l],t),l===n-1||(a+=" ");s=i,r+=n}return a},parse(e,t){let n,i,s,r="";const o=[],a=t?bE:fy;for(let l=0,c=e.length;l<c;l++)i=e[l],_E[i]?(i==="."&&(ci.dot&&(Or(o,r),r=""),ci.dot++),r==="0"&&i!=="."&&(Or(o,r),r=""),r+=i):Fi[i]?(r&&(Or(o,r),r=""),ci.name=Fi[i],ci.length=dy[i],ci.index=0,Or(o,ci.name),!n&&a[i]&&(n=!0)):i==="-"||i==="+"?s==="e"||s==="E"?r+=i:(r&&Or(o,r),r=i):r&&(Or(o,r),r=""),s=i;return r&&Or(o,r),n?so.toCanvasData(o,t):o},toCanvasData(e,t){let n,i,s,r,o,a=0,l=0,c=0,h=0,d=0,f=0,u=0,m=e.length;const g=[];for(;u<m;){switch(s=e[u],s){case DE:e[u+1]+=a,e[u+2]+=l;case bu:a=e[u+1],l=e[u+2],r===s?g.push(go,a,l):(g.push(bu,a,l),d=a,f=l),u+=3;break;case UE:e[u+1]+=a;case OE:a=e[u+1],g.push(go,a,l),u+=2;break;case FE:e[u+1]+=l;case NE:l=e[u+1],g.push(go,a,l),u+=2;break;case IE:e[u+1]+=a,e[u+2]+=l;case go:a=e[u+1],l=e[u+2],g.push(go,a,l),u+=3;break;case kE:e[u+1]+=a,e[u+2]+=l,e[u+3]+=a,e[u+4]+=l,s=Eu;case Eu:o=r===xo||r===Eu,c=o?2*a-n:e[u+1],h=o?2*l-i:e[u+2],n=e[u+1],i=e[u+2],a=e[u+3],l=e[u+4],g.push(xo,c,h,n,i,a,l),u+=5;break;case BE:e[u+1]+=a,e[u+2]+=l,e[u+3]+=a,e[u+4]+=l,e[u+5]+=a,e[u+6]+=l,s=xo;case xo:n=e[u+3],i=e[u+4],a=e[u+5],l=e[u+6],g.push(xo,e[u+1],e[u+2],n,i,a,l),u+=7;break;case HE:e[u+1]+=a,e[u+2]+=l,s=wu;case wu:o=r===vo||r===wu,n=o?2*a-n:e[u+1],i=o?2*l-i:e[u+2],t?$m(g,a,l,n,i,e[u+1],e[u+2]):g.push(vo,n,i,e[u+1],e[u+2]),a=e[u+1],l=e[u+2],u+=3;break;case zE:e[u+1]+=a,e[u+2]+=l,e[u+3]+=a,e[u+4]+=l,s=vo;case vo:n=e[u+1],i=e[u+2],t?$m(g,a,l,n,i,e[u+3],e[u+4]):g.push(vo,n,i,e[u+3],e[u+4]),a=e[u+3],l=e[u+4],u+=5;break;case GE:e[u+6]+=a,e[u+7]+=l;case VE:ew(g,a,l,e[u+1],e[u+2],e[u+3],e[u+4],e[u+5],e[u+6],e[u+7],t),a=e[u+6],l=e[u+7],u+=8;break;case WE:case Tu:g.push(Tu),a=d,l=f,u++;break;case XE:a=e[u+1],l=e[u+2],t?QE(g,a,l,e[u+3],e[u+4]):Qs(g,e,u,5),u+=5;break;case $E:a=e[u+1],l=e[u+2],t?Gm(g,a,l,e[u+3],e[u+4],[e[u+5],e[u+6],e[u+7],e[u+8]]):Qs(g,e,u,9),u+=9;break;case YE:a=e[u+1],l=e[u+2],t?Gm(g,a,l,e[u+3],e[u+4],e[u+5]):Qs(g,e,u,6),u+=6;break;case qE:Xm(t?g:Qs(g,e,u,9),e[u+1],e[u+2],e[u+3],e[u+4],e[u+5],e[u+6],e[u+7],e[u+8],null,_s),a=_s.x,l=_s.y,u+=9;break;case jE:t?Xm(g,e[u+1],e[u+2],e[u+3],e[u+4],0,0,360,!1):Qs(g,e,u,5),a=e[u+1]+e[u+3],l=e[u+2],u+=5;break;case KE:Wm(t?g:Qs(g,e,u,7),e[u+1],e[u+2],e[u+3],e[u+4],e[u+5],e[u+6],null,_s),a=_s.x,l=_s.y,u+=7;break;case ZE:t?Wm(g,e[u+1],e[u+2],e[u+3],0,360,!1):Qs(g,e,u,4),a=e[u+1]+e[u+3],l=e[u+2],u+=4;break;case JE:tw(t?g:Qs(g,e,u,6),a,l,e[u+1],e[u+2],e[u+3],e[u+4],e[u+5],null,_s),a=_s.x,l=_s.y,u+=6;break;default:return nw.error(`command: ${s} [index:${u}]`,e),g}r=s}return g},objectToCanvasData(e){if(e[0].name.length>1)return LE.toCommand(e);{const t=[];return e.forEach(n=>{switch(n.name){case"M":t.push(bu,n.x,n.y);break;case"L":t.push(go,n.x,n.y);break;case"C":t.push(xo,n.x1,n.y1,n.x2,n.y2,n.x,n.y);break;case"Q":t.push(vo,n.x1,n.y1,n.x,n.y);break;case"Z":t.push(Tu)}}),t}},copyData(e,t,n,i){for(let s=n,r=n+i;s<r;s++)e.push(t[s])},pushData(e,t){ci.index===ci.length&&(ci.index=1,e.push(ci.name)),e.push(Number(t)),ci.index++,ci.dot=0}},{current:ci,pushData:Or,copyData:Qs}=so,{M:Au,L:iw,C:sw,Q:rw,Z:ow,N:Ym,D:aw,X:lw,G:cw,F:hw,O:uw,P:dw,U:fw}=Fi,{getMinDistanceFrom:pw,getRadianFrom:_w}=le,{tan:mw,min:qm,abs:gw}=Math,yo={},lo={beginPath(e){e.length=0},moveTo(e,t,n){e.push(Au,t,n)},lineTo(e,t,n){e.push(iw,t,n)},bezierCurveTo(e,t,n,i,s,r,o){e.push(sw,t,n,i,s,r,o)},quadraticCurveTo(e,t,n,i,s){e.push(rw,t,n,i,s)},closePath(e){e.push(ow)},rect(e,t,n,i,s){e.push(Ym,t,n,i,s)},roundRect(e,t,n,i,s,r){if(je(r))e.push(lw,t,n,i,s,r);else{const o=wn.fourNumber(r);o?e.push(aw,t,n,i,s,...o):e.push(Ym,t,n,i,s)}},ellipse(e,t,n,i,s,r,o,a,l){if(i===s)return jm(e,t,n,i,o,a,l);gi(r)?e.push(hw,t,n,i,s):(gi(o)&&(o=0),gi(a)&&(a=360),e.push(cw,t,n,i,s,r,o,a,l?1:0))},arc(e,t,n,i,s,r,o){gi(s)?e.push(dw,t,n,i):(gi(s)&&(s=0),gi(r)&&(r=360),e.push(uw,t,n,i,s,r,o?1:0))},arcTo(e,t,n,i,s,r,o,a,l){if(!Kt(o)){const c=pw(o,a,t,n,i,s)/(l?1:2);r=qm(r,qm(c,c*gw(mw(_w(o,a,t,n,i,s)/2))))}e.push(fw,t,n,i,s,r)},drawEllipse(e,t,n,i,s,r,o,a,l){eo.ellipse(null,t,n,i,s,gi(r)?0:r,gi(o)?0:o,gi(a)?360:a,l,null,null,yo),e.push(Au,yo.x,yo.y),xw(e,t,n,i,s,r,o,a,l)},drawArc(e,t,n,i,s,r,o){eo.arc(null,t,n,i,gi(s)?0:s,gi(r)?360:r,o,null,null,yo),e.push(Au,yo.x,yo.y),jm(e,t,n,i,s,r,o)},drawPoints(e,t,n,i){eo.points(e,t,n,i)}},{ellipse:xw,arc:jm}=lo,{moveTo:vw,lineTo:yw,quadraticCurveTo:Sw,bezierCurveTo:Mw,closePath:bw,beginPath:Ew,rect:ww,roundRect:Tw,ellipse:Aw,arc:Rw,arcTo:Cw,drawEllipse:Pw,drawArc:Lw,drawPoints:Dw}=lo;class my{set path(t){this.__path=t}get path(){return this.__path}constructor(t){this.set(t)}set(t){return this.__path=t?tn(t)?Zi.parse(t):t:[],this}beginPath(){return Ew(this.__path),this.paint(),this}moveTo(t,n){return vw(this.__path,t,n),this.paint(),this}lineTo(t,n){return yw(this.__path,t,n),this.paint(),this}bezierCurveTo(t,n,i,s,r,o){return Mw(this.__path,t,n,i,s,r,o),this.paint(),this}quadraticCurveTo(t,n,i,s){return Sw(this.__path,t,n,i,s),this.paint(),this}closePath(){return bw(this.__path),this.paint(),this}rect(t,n,i,s){return ww(this.__path,t,n,i,s),this.paint(),this}roundRect(t,n,i,s,r){return Tw(this.__path,t,n,i,s,r),this.paint(),this}ellipse(t,n,i,s,r,o,a,l){return Aw(this.__path,t,n,i,s,r,o,a,l),this.paint(),this}arc(t,n,i,s,r,o){return Rw(this.__path,t,n,i,s,r,o),this.paint(),this}arcTo(t,n,i,s,r){return Cw(this.__path,t,n,i,s,r),this.paint(),this}drawEllipse(t,n,i,s,r,o,a,l){return Pw(this.__path,t,n,i,s,r,o,a,l),this.paint(),this}drawArc(t,n,i,s,r,o){return Lw(this.__path,t,n,i,s,r,o),this.paint(),this}drawPoints(t,n,i){return Dw(this.__path,t,n,i),this.paint(),this}clearPath(){return this.beginPath()}paint(){}}const{M:Iw,L:Ow,C:Uw,Q:Nw,Z:Fw,N:Bw,D:kw,X:zw,G:Hw,F:Vw,O:Gw,P:Ww,U:Xw}=Fi,$w=Ge.get("PathDrawer"),Yw={drawPathByData(e,t){if(!t)return;let n,i=0,s=t.length;for(;i<s;)switch(n=t[i],n){case Iw:e.moveTo(t[i+1],t[i+2]),i+=3;break;case Ow:e.lineTo(t[i+1],t[i+2]),i+=3;break;case Uw:e.bezierCurveTo(t[i+1],t[i+2],t[i+3],t[i+4],t[i+5],t[i+6]),i+=7;break;case Nw:e.quadraticCurveTo(t[i+1],t[i+2],t[i+3],t[i+4]),i+=5;break;case Fw:e.closePath(),i+=1;break;case Bw:e.rect(t[i+1],t[i+2],t[i+3],t[i+4]),i+=5;break;case kw:e.roundRect(t[i+1],t[i+2],t[i+3],t[i+4],[t[i+5],t[i+6],t[i+7],t[i+8]]),i+=9;break;case zw:e.roundRect(t[i+1],t[i+2],t[i+3],t[i+4],t[i+5]),i+=6;break;case Hw:e.ellipse(t[i+1],t[i+2],t[i+3],t[i+4],t[i+5]*Me,t[i+6]*Me,t[i+7]*Me,t[i+8]),i+=9;break;case Vw:e.ellipse(t[i+1],t[i+2],t[i+3],t[i+4],0,0,Mi,!1),i+=5;break;case Gw:e.arc(t[i+1],t[i+2],t[i+3],t[i+4]*Me,t[i+5]*Me,t[i+6]),i+=7;break;case Ww:e.arc(t[i+1],t[i+2],t[i+3],0,Mi,!1),i+=4;break;case Xw:e.arcTo(t[i+1],t[i+2],t[i+3],t[i+4],t[i+5]),i+=6;break;default:return void $w.error(`command: ${n} [index:${i}]`,t)}}},{M:qw,L:jw,C:Km,Q:Zm,Z:Jm,N:Kw,D:Qm,X:Zw,G:Jw,F:Qw,O:tT,P:eT,U:nT}=Fi,{toTwoPointBounds:iT,toTwoPointBoundsByQuadraticCurve:sT,arcTo:rT,arc:oT,ellipse:aT}=eo,{addPointBounds:Ta,copy:Ru,addPoint:lT,setPoint:Cu,addBounds:cc,toBounds:cT}=zh,hT=Ge.get("PathBounds");let So,hc,Pu;const Qn={},tg={},ms={},gy={toBounds(e,t){gy.toTwoPointBounds(e,tg),cT(tg,t)},toTwoPointBounds(e,t){if(!e||!e.length)return Cu(t,0,0);let n,i,s,r,o,a=0,l=0,c=0;const h=e.length;for(;a<h;)switch(o=e[a],a===0&&(o===Jm||o===Km||o===Zm?Cu(t,l,c):Cu(t,e[a+1],e[a+2])),o){case qw:case jw:l=e[a+1],c=e[a+2],lT(t,l,c),a+=3;break;case Km:s=e[a+5],r=e[a+6],iT(l,c,e[a+1],e[a+2],e[a+3],e[a+4],s,r,Qn),Ta(t,Qn),l=s,c=r,a+=7;break;case Zm:n=e[a+1],i=e[a+2],s=e[a+3],r=e[a+4],sT(l,c,n,i,s,r,Qn),Ta(t,Qn),l=s,c=r,a+=5;break;case Jm:a+=1;break;case Kw:l=e[a+1],c=e[a+2],cc(t,l,c,e[a+3],e[a+4]),a+=5;break;case Qm:case Zw:l=e[a+1],c=e[a+2],cc(t,l,c,e[a+3],e[a+4]),a+=o===Qm?9:6;break;case Jw:aT(null,e[a+1],e[a+2],e[a+3],e[a+4],e[a+5],e[a+6],e[a+7],e[a+8],Qn,ms),a===0?Ru(t,Qn):Ta(t,Qn),l=ms.x,c=ms.y,a+=9;break;case Qw:l=e[a+1],c=e[a+2],hc=e[a+3],Pu=e[a+4],cc(t,l-hc,c-Pu,2*hc,2*Pu),l+=hc,a+=5;break;case tT:oT(null,e[a+1],e[a+2],e[a+3],e[a+4],e[a+5],e[a+6],Qn,ms),a===0?Ru(t,Qn):Ta(t,Qn),l=ms.x,c=ms.y,a+=7;break;case eT:l=e[a+1],c=e[a+2],So=e[a+3],cc(t,l-So,c-So,2*So,2*So),l+=So,a+=4;break;case nT:rT(null,l,c,e[a+1],e[a+2],e[a+3],e[a+4],e[a+5],Qn,ms),a===0?Ru(t,Qn):Ta(t,Qn),l=ms.x,c=ms.y,a+=6;break;default:return void hT.error(`command: ${o} [index:${a}]`,e)}}},{M:uc,L:dc,Z:Aa}=Fi,{getCenterX:uT,getCenterY:dT}=le,{arcTo:Lu}=lo,fT={smooth(e,t,n){let i,s,r,o=0,a=0,l=0,c=0,h=0,d=0,f=0,u=0,m=0;ln(t)&&(t=t[0]||0);const g=e.length,_=g===9,p=[];for(;o<g;){switch(i=e[o],i){case uc:c=u=e[o+1],h=m=e[o+2],o+=3,e[o]===dc?(d=e[o+1],f=e[o+2],_?p.push(uc,c,h):p.push(uc,uT(c,d),dT(h,f))):p.push(uc,c,h);break;case dc:switch(a=e[o+1],l=e[o+2],o+=3,e[o]){case dc:Lu(p,a,l,e[o+1],e[o+2],t,u,m,_);break;case Aa:Lu(p,a,l,c,h,t,u,m,_);break;default:p.push(dc,a,l)}u=a,m=l;break;case Aa:s!==Aa&&(Lu(p,c,h,d,f,t,u,m,_),p.push(Aa)),o+=1;break;default:r=Yp[i];for(let y=0;y<r;y++)p.push(e[o+y]);o+=r}s=i}return i!==Aa&&(p[1]=c,p[2]=h),p}};function xy(e){return new my(e)}const Ra=xy();Zi.creator=xy(),Zi.parse=so.parse,Zi.convertToCanvasData=so.toCanvasData;const{drawRoundRect:pT}=_y;function eg(e){(function(t){t&&!t.roundRect&&(t.roundRect=function(n,i,s,r,o){pT(this,n,i,s,r,o)})})(e)}const pr={alphaPixelTypes:["png","webp","svg"],upperCaseTypeMap:{},mimeType:(e,t="image")=>!e||e.startsWith(t)?e:(e==="jpg"&&(e="jpeg"),t+"/"+e),fileType(e){const t=e.split(".");return t[t.length-1]},isOpaqueImage(e){const t=il.fileType(e);return["jpg","jpeg"].some(n=>n===t)},getExportOptions(e){switch(typeof e){case"object":return e;case"number":return{quality:e};case"boolean":return{blob:e};default:return{}}}},il=pr;il.mineType=il.mimeType,il.alphaPixelTypes.forEach(e=>il.upperCaseTypeMap[e]=e.toUpperCase());const _T=Ge.get("TaskProcessor");let mT=class{constructor(t){this.parallel=!0,this.time=1,this.id=Gs.create(Gs.TASK),this.task=t}run(){return ly(this,void 0,void 0,function*(){try{if(this.isComplete||this.runing)return;if(this.runing=!0,this.canUse&&!this.canUse())return this.cancel();this.task&&(yield this.task())}catch(t){_T.error(t)}})}complete(){this.isComplete=!0,this.parent=this.task=this.canUse=null}cancel(){this.isCancel=!0,this.complete()}},ng=class{get total(){return this.list.length+this.delayNumber}get finishedIndex(){return this.isComplete?0:this.index+this.parallelSuccessNumber}get remain(){return this.isComplete?this.total:this.total-this.finishedIndex}get percent(){const{total:t}=this;let n=0,i=0;for(let s=0;s<t;s++)s<=this.finishedIndex?(i+=this.list[s].time,s===this.finishedIndex&&(n=i)):n+=this.list[s].time;return this.isComplete?1:i/n}constructor(t){this.config={parallel:6},this.list=[],this.running=!1,this.isComplete=!0,this.index=0,this.delayNumber=0,t&&De.assign(this.config,t),this.empty()}add(t,n,i){let s,r,o,a;const l=new mT(t);return l.parent=this,je(n)?a=n:n&&(r=n.parallel,s=n.start,o=n.time,a=n.delay,i||(i=n.canUse)),o&&(l.time=o),r===!1&&(l.parallel=!1),i&&(l.canUse=i),Kt(a)?this.push(l,s):(this.delayNumber++,setTimeout(()=>{this.delayNumber&&(this.delayNumber--,this.push(l,s))},a)),this.isComplete=!1,l}push(t,n){this.list.push(t),n===!1||this.timer||(this.timer=setTimeout(()=>this.start()))}empty(){this.index=0,this.parallelSuccessNumber=0,this.list=[],this.parallelList=[],this.delayNumber=0}start(){this.running||(this.running=!0,this.isComplete=!1,this.run())}pause(){clearTimeout(this.timer),this.timer=null,this.running=!1}resume(){this.start()}skip(){this.index++,this.resume()}stop(){this.isComplete=!0,this.list.forEach(t=>{t.isComplete||t.run()}),this.pause(),this.empty()}run(){this.running&&(this.setParallelList(),this.parallelList.length>1?this.runParallelTasks():this.remain?this.runTask():this.onComplete())}runTask(){const t=this.list[this.index];t?t.run().then(()=>{this.onTask(t),this.index++,t.isCancel?this.runTask():this.nextTask()}).catch(n=>{this.onError(n)}):this.timer=setTimeout(()=>this.nextTask())}runParallelTasks(){this.parallelList.forEach(t=>this.runParallelTask(t))}runParallelTask(t){t.run().then(()=>{this.onTask(t),this.fillParallelTask()}).catch(n=>{this.onParallelError(n)})}nextTask(){this.total===this.finishedIndex?this.onComplete():this.timer=setTimeout(()=>this.run())}setParallelList(){let t;const{config:n,list:i,index:s}=this;this.parallelList=[],this.parallelSuccessNumber=0;let r=s+n.parallel;if(r>i.length&&(r=i.length),n.parallel>1)for(let o=s;o<r&&(t=i[o],t.parallel);o++)this.parallelList.push(t)}fillParallelTask(){let t;const n=this.parallelList;this.parallelSuccessNumber++,n.pop();const i=n.length,s=this.finishedIndex+i;if(n.length){if(!this.running)return;s<this.total&&(t=this.list[s],t&&t.parallel&&(n.push(t),this.runParallelTask(t)))}else this.index+=this.parallelSuccessNumber,this.parallelSuccessNumber=0,this.nextTask()}onComplete(){this.stop(),this.config.onComplete&&this.config.onComplete()}onTask(t){t.complete(),this.config.onTask&&this.config.onTask()}onParallelError(t){this.parallelList.forEach(n=>{n.parallel=!1}),this.parallelList.length=0,this.parallelSuccessNumber=0,this.onError(t)}onError(t){this.pause(),this.config.onError&&this.config.onError(t)}destroy(){this.stop()}};const gT=Ge.get("Resource"),dr={tasker:new ng,queue:new ng({parallel:1}),map:{},get isComplete(){return tr.tasker.isComplete},set(e,t){tr.map[e]&&gT.repeat(e),tr.map[e]=t},get:e=>tr.map[e],remove(e){const t=tr.map[e];t&&(t.destroy&&t.destroy(),delete tr.map[e])},loadImage(e,t){return new Promise((n,i)=>{const s=this.setImage(e,e,t);s.load(()=>n(s),r=>i(r))})},setImage(e,t,n){let i;return tn(t)?i={url:t}:t.url||(i={url:e,view:t}),i&&(n&&(i.format=n),t=Ke.image(i)),tr.set(e,t),t},loadFilm(e,t){},loadVideo(e,t){},destroy(){tr.map={}}},tr=dr,Ui={maxRecycled:10,recycledList:[],patternTasker:dr.queue,get(e,t){let n=dr.get(e.url);return n||dr.set(e.url,n=t==="film"?Ke.film(e):Ke.image(e)),n.use++,n},recycle(e){e.parent&&(e=e.parent),e.use--,setTimeout(()=>{e.use||(Dt.image.isLarge(e)?e.url&&dr.remove(e.url):(e.clearLevels(),Ca.recycledList.push(e)))})},recyclePaint(e){Ca.recycle(e.image)},clearRecycled(e){const t=Ca.recycledList;(t.length>Ca.maxRecycled||e)&&(t.forEach(n=>(!n.use||e)&&n.url&&dr.remove(n.url)),t.length=0)},clearLevels(){},hasAlphaPixel:e=>pr.alphaPixelTypes.some(t=>Ca.isFormat(t,e)),isFormat(e,t){if(t.format)return t.format===e;const{url:n}=t;if(n.startsWith("data:")){if(n.startsWith("data:"+pr.mimeType(e)))return!0}else if(n.includes("."+e)||n.includes("."+pr.upperCaseTypeMap[e])||e==="png"&&!n.includes("."))return!0;return!1},destroy(){this.clearRecycled(!0)}},Ca=Ui,{IMAGE:xT,create:vT}=Gs;class vy{get tag(){return"Image"}get url(){return this.config.url}get crossOrigin(){const{crossOrigin:t}=this.config;return Kt(t)?Dt.image.crossOrigin:t}get completed(){return this.ready||!!this.error}constructor(t){if(this.use=0,this.waitComplete=[],this.innerId=vT(xT),this.config=t||(t={url:""}),t.view){const{view:n}=t;this.setView(n.config?n.view:n)}Ui.isFormat("svg",t)&&(this.isSVG=!0),Ui.hasAlphaPixel(t)&&(this.hasAlphaPixel=!0)}load(t,n,i){return this.loading||(this.loading=!0,dr.tasker.add(()=>ly(this,void 0,void 0,function*(){return yield Dt.origin["load"+this.tag](this.getLoadUrl(i),this.crossOrigin,this).then(s=>{i&&this.setThumbView(s),this.setView(s)}).catch(s=>{this.error=s,this.onComplete(!1)})}))),this.waitComplete.push(t,n),this.waitComplete.length-2}unload(t,n){const i=this.waitComplete;if(n){const s=i[t+1];s&&s({type:"stop"})}i[t]=i[t+1]=void 0}setView(t){this.ready=!0,this.width||(this.width=t.width,this.height=t.height,this.view=t),this.onComplete(!0)}onComplete(t){let n;this.waitComplete.forEach((i,s)=>{n=s%2,i&&(t?n||i(this):n&&i(this.error))}),this.waitComplete.length=0,this.loading=!1}getFull(t){return this.view}getCanvas(t,n,i,s,r,o,a,l){if(t||(t=this.width),n||(n=this.height),this.cache){let{params:h,data:d}=this.cache;for(let f in h)if(h[f]!==arguments[f]){d=null;break}if(d)return d}const c=Dt.image.resize(this.view,t,n,r,o,void 0,a,i,s,l);return this.cache=this.use>1?{data:c,params:arguments}:null,c}getPattern(t,n,i,s){const r=Dt.canvas.createPattern(t,n);return Dt.image.setPatternTransform(r,i,s),r}render(t,n,i,s,r,o,a,l,c){t.drawImage(this.view,n,i,s,r)}getLoadUrl(t){return this.url}setThumbView(t){}getThumbSize(t){}getMinLevel(){}getLevelData(t,n,i){}clearLevels(t){}destroyFilter(){}destroy(){this.clearLevels(),this.destroyFilter();const{view:t}=this;t&&t.close&&t.close(),this.config={url:""},this.cache=this.view=null,this.waitComplete.length=0}}function ma(e,t,n,i){n.configurable=n.enumerable=!0,Object.defineProperty(e,t,n)}function yy(e,t){return Object.getOwnPropertyDescriptor(e,t)}function yT(e,t){const n="_"+e;return{get(){const i=this[n];return i??t},set(i){this[n]=i}}}function nn(e,t){return(n,i)=>ST(n,i,e,t&&t(i))}function ST(e,t,n,i){ma(e,t,Object.assign({get(){return this.__getAttr(t)},set(r){this.__setAttr(t,r)}},i||{})),My(e,t,n)}function Yn(e){return nn(e)}function fc(e,t){return nn(e,n=>({set(i){this.__setAttr(n,i,t)&&(this.__layout.matrixChanged||this.__layout.matrixChange())}}))}function ig(e,t){return nn(e,n=>({set(i){this.__setAttr(n,i,t)&&(this.__layout.matrixChanged||this.__layout.matrixChange(),this.__scrollWorld||(this.__scrollWorld={}))}}))}function sg(e){return nn(e,t=>({set(n){this.__setAttr(t,n)&&(this.__hasAutoLayout=!!(this.origin||this.around||this.flow),this.__local||this.__layout.createLocal(),ga(this))}}))}function rg(e,t){return nn(e,n=>({set(i){this.__setAttr(n,i,t)&&(this.__layout.scaleChanged||this.__layout.scaleChange())}}))}function Du(e,t){return nn(e,n=>({set(i){this.__setAttr(n,i,t)&&(this.__layout.rotationChanged||this.__layout.rotationChange())}}))}function de(e,t){return nn(e,n=>({set(i){this.__setAttr(n,i,t)&&ga(this)}}))}function MT(e){return nn(e,t=>({set(n){this.__setAttr(t,n)&&(ga(this),this.__.__removeNaturalSize())}}))}function ga(e){e.__layout.boxChanged||e.__layout.boxChange(),e.__hasAutoLayout&&(e.__layout.matrixChanged||e.__layout.matrixChange())}function bT(e){return nn(e,t=>({set(n){const i=this.__;i.__pathInputed!==2&&(i.__pathInputed=n?1:0),n||(i.__pathForRender=void 0),this.__setAttr(t,n),ga(this)}}))}const Mn=de;function Hh(e,t){return nn(e,n=>({set(i){this.__setAttr(n,i)&&(ET(this),t&&(this.__.__useStroke=!0))}}))}function ET(e){e.__layout.strokeChanged||e.__layout.strokeChange(),e.__.__useArrow&&ga(e)}const Gi=Hh;function qp(e){return nn(e,t=>({set(n){this.__setAttr(t,n),this.__layout.renderChanged||this.__layout.renderChange()}}))}function _r(e){return nn(e,t=>({set(n){this.__setAttr(t,n)&&(this.__layout.surfaceChanged||this.__layout.surfaceChange())}}))}function og(e){return nn(e,t=>({set(n){if(this.__setAttr(t,n)){const i=this.__;De.stintSet(i,"__useDim",i.dim||i.bright||i.dimskip)}}}))}function wT(e){return nn(e,t=>({set(n){this.__setAttr(t,n)&&(this.__layout.opacityChanged||this.__layout.opacityChange()),this.mask&&Sy(this)}}))}function TT(e){return nn(e,t=>({set(n){const i=this.visible;if(i===!0&&n===0){if(this.animationOut)return this.__runAnimation("out",()=>ag(this,t,n,i))}else i===0&&n===!0&&this.animation&&this.__runAnimation("in");ag(this,t,n,i),this.mask&&Sy(this)}}))}function Sy(e){const{parent:t}=e;if(t){const{__hasMask:n}=t;t.__updateMask(),n!==t.__hasMask&&t.forceUpdate()}}function ag(e,t,n,i){e.__setAttr(t,n)&&(e.__layout.opacityChanged||e.__layout.opacityChange(),i!==0&&n!==0||ga(e))}function AT(e){return nn(e,t=>({set(n){this.__setAttr(t,n)&&this.waitParent(()=>{this.parent.__layout.childrenSortChange()})}}))}function RT(e){return nn(e,t=>({set(n){this.__setAttr(t,n)&&(this.__layout.boxChanged||this.__layout.boxChange(),this.waitParent(()=>{this.parent.__updateMask(n)}))}}))}function CT(e){return nn(e,t=>({set(n){this.__setAttr(t,n)&&this.waitParent(()=>{this.parent.__updateEraser(n)})}}))}function Xr(e){return nn(e,t=>({set(n){this.__setAttr(t,n)&&(this.__layout.hitCanvasChanged=!0,this.leafer&&this.leafer.updateCursor())}}))}function PT(e){return nn(e,t=>({set(n){this.__setAttr(t,n),this.leafer&&this.leafer.updateCursor()}}))}function In(e){return(t,n)=>{ma(t,"__DataProcessor",{get:()=>e})}}function My(e,t,n){const i=e.__DataProcessor.prototype,s="_"+t,r=function(h){return"set"+h.charAt(0).toUpperCase()+h.slice(1)}(t),o=yT(t,n);if(Kt(n))o.get=function(){return this[s]};else if(typeof n=="function")o.get=function(){const h=this[s];return h??n(this.__leaf)};else if(ze(n)){const h=tE(n);o.get=function(){const d=this[s];return d??(this[s]=h?{}:De.clone(n))}}const a=e.isBranchLeaf;t==="width"?o.get=function(){const h=this[s];if(h==null){const d=this,f=d.__naturalWidth,u=d.__leaf;return!n||u.pathInputed?u.boxBounds.width:f?d._height&&d.__useNaturalRatio?d._height*f/d.__naturalHeight:f:a&&u.children.length?u.boxBounds.width:n}return h}:t==="height"&&(o.get=function(){const h=this[s];if(h==null){const d=this,f=d.__naturalHeight,u=d.__leaf;return!n||u.pathInputed?u.boxBounds.height:f?d._width&&d.__useNaturalRatio?d._width*f/d.__naturalWidth:f:a&&u.children.length?u.boxBounds.height:n}return h});let l,c=i;for(;!l&&c;)l=yy(c,t),c=c.__proto__;l&&l.set&&(o.set=l.set),i[r]&&(o.set=i[r],delete i[r]),ma(i,t,o)}const LT=new Ge("rewrite"),nh=[],DT=["destroy","constructor"];function Rs(e){return(t,n)=>{nh.push({name:t.constructor.name+"."+n,run:()=>{t[n]=e}})}}function Vh(){return e=>{by()}}function by(e){nh.length&&(nh.forEach(t=>{e&&LT.error(t.name,"需在Class上装饰@rewriteAble()"),t.run()}),nh.length=0)}function Ti(e,t){return n=>{var i;(e.prototype?(i=e.prototype,Object.getOwnPropertyNames(i)):Object.keys(e)).forEach(s=>{DT.includes(s)||t&&t.includes(s)||(e.prototype?yy(e.prototype,s).writable&&(n.prototype[s]=e.prototype[s]):n.prototype[s]=e[s])})}}function On(){return e=>{Ol.register(e)}}function Ys(){return e=>{ca.register(e)}}setTimeout(()=>by(!0));const{copy:Mo,toInnerPoint:IT,toOuterPoint:OT,scaleOfOuter:lg,rotateOfOuter:UT,skewOfOuter:NT,multiplyParent:cg,divideParent:hg,getLayout:FT}=ie,$e={},{round:ug}=Math,We={updateAllMatrix(e,t,n){if(t&&e.__hasAutoLayout&&e.__layout.matrixChanged&&(n=!0),kT(e,t,n),e.isBranch){const{children:i}=e;for(let s=0,r=i.length;s<r;s++)BT(i[s],t,n)}},updateMatrix(e,t,n){const i=e.__layout;t?n&&(i.waitAutoLayout=!0,e.__hasAutoLayout&&(i.matrixChanged=!1)):i.waitAutoLayout&&(i.waitAutoLayout=!1),i.matrixChanged&&e.__updateLocalMatrix(),i.waitAutoLayout||e.__updateWorldMatrix()},updateBounds(e){const t=e.__layout;t.boundsChanged&&e.__updateLocalBounds(),t.waitAutoLayout||e.__updateWorldBounds()},updateAllWorldOpacity(e){if(e.__updateWorldOpacity(),e.isBranch){const{children:t}=e;for(let n=0,i=t.length;n<i;n++)dg(t[n])}},updateChange(e){const t=e.__layout;t.stateStyleChanged&&e.updateState(),t.opacityChanged&&dg(e),e.__updateChange(),t.surfaceChanged&&(e.__hasComplex&&Je.updateComplex(e),t.surfaceChanged=!1)},updateAllChange(e){if(HT(e),e.isBranch){const{children:t}=e;for(let n=0,i=t.length;n<i;n++)zT(t[n])}},worldHittable(e){for(;e;){if(!e.__.hittable)return!1;e=e.parent}return!0},draggable:e=>(e.draggable||e.editable)&&e.hitSelf&&!e.locked,copyCanvasByWorld(e,t,n,i,s,r){i||(i=e.__nowWorld),e.__worldFlipped||Dt.fullImageShadow?t.copyWorldByReset(n,i,e.__nowWorld,s,r):t.copyWorldToInner(n,i,e.__layout.renderBounds,s)},renderComplex(e,t,n){},updateComplex(e){},checkComplex(e){},moveWorld(e,t,n=0,i,s){const r=ze(t)?Object.assign({},t):{x:t,y:n};i?OT(e.localTransform,r,r,!0):e.parent&&IT(e.parent.scrollWorldTransform,r,r,!0),Je.moveLocal(e,r.x,r.y,s)},moveLocal(e,t,n=0,i){ze(t)&&(n=t.y,t=t.x),t+=e.x,n+=e.y,e.leafer&&e.leafer.config.pointSnap&&(t=ug(t),n=ug(n)),i?e.animate({x:t,y:n},i):(e.x=t,e.y=n)},zoomOfWorld(e,t,n,i,s,r){Je.zoomOfLocal(e,Iu(e,t),n,i,s,r)},zoomOfLocal(e,t,n,i=n,s,r){const o=e.__localMatrix;if(je(i)||(i&&(r=i),i=n),Mo($e,o),lg($e,t,n,i),Je.hasHighPosition(e))Je.setTransform(e,$e,s,r);else{const a=e.x+$e.e-o.e,l=e.y+$e.f-o.f;r&&!s?e.animate({x:a,y:l,scaleX:e.scaleX*n,scaleY:e.scaleY*i},r):(e.x=a,e.y=l,e.scaleResize(n,i,s!==!0))}},rotateOfWorld(e,t,n,i){Je.rotateOfLocal(e,Iu(e,t),n,i)},rotateOfLocal(e,t,n,i){const s=e.__localMatrix;Mo($e,s),UT($e,t,n),Je.hasHighPosition(e)?Je.setTransform(e,$e,!1,i):e.set({x:e.x+$e.e-s.e,y:e.y+$e.f-s.f,rotation:wn.formatRotation(e.rotation+n)},i)},skewOfWorld(e,t,n,i,s,r){Je.skewOfLocal(e,Iu(e,t),n,i,s,r)},skewOfLocal(e,t,n,i=0,s,r){Mo($e,e.__localMatrix),NT($e,t,n,i),Je.setTransform(e,$e,s,r)},transformWorld(e,t,n,i){Mo($e,e.worldTransform),cg($e,t),e.parent&&hg($e,e.parent.scrollWorldTransform),Je.setTransform(e,$e,n,i)},transform(e,t,n,i){Mo($e,e.localTransform),cg($e,t),Je.setTransform(e,$e,n,i)},setTransform(e,t,n,i){const s=e.__,r=s.origin&&Je.getInnerOrigin(e,s.origin),o=FT(t,r,s.around&&Je.getInnerOrigin(e,s.around));if(Je.hasOffset(e)&&(o.x-=s.offsetX,o.y-=s.offsetY),n){const a=o.scaleX/e.scaleX,l=o.scaleY/e.scaleY;if(delete o.scaleX,delete o.scaleY,r){Ut.scale(e.boxBounds,Math.abs(a),Math.abs(l));const c=Je.getInnerOrigin(e,s.origin);le.move(o,r.x-c.x,r.y-c.y)}e.set(o),e.scaleResize(a,l,!1)}else e.set(o,i)},getFlipTransform(e,t){const n={a:1,b:0,c:0,d:1,e:0,f:0},i=t==="x"?1:-1;return lg(n,Je.getLocalOrigin(e,"center"),-1*i,1*i),n},getLocalOrigin:(e,t)=>le.tempToOuterOf(Je.getInnerOrigin(e,t),e.localTransform),getInnerOrigin(e,t){const n={};return wr.toPoint(t,e.boxBounds,n),n},getRelativeWorld:(e,t,n)=>(Mo($e,e.worldTransform),hg($e,t.scrollWorldTransform),n?$e:Object.assign({},$e)),updateScaleFixedWorld(e){},updateOuterBounds(e){},cacheId(e){},drop(e,t,n,i){e.setTransform(Je.getRelativeWorld(e,t,!0),i),t.add(e,n)},hasHighPosition:e=>e.origin||e.around||Je.hasOffset(e),hasOffset:e=>e.offsetX||e.offsetY,hasParent(e,t){if(!t)return!1;for(;e;){if(t===e)return!0;e=e.parent}},animateMove(e,t,n=.3){if(t.x||t.y)if(Math.abs(t.x)<1&&Math.abs(t.y)<1)e.move(t);else{const i=t.x*n,s=t.y*n;t.x-=i,t.y-=s,e.move(i,s),Dt.requestRender(()=>Je.animateMove(e,t,n))}}},Je=We,{updateAllMatrix:BT,updateMatrix:kT,updateAllWorldOpacity:dg,updateAllChange:zT,updateChange:HT}=Je;function Iu(e,t){return e.updateLayout(),e.parent?le.tempToInnerOf(t,e.parent.scrollWorldTransform):t}const Gh={worldBounds:e=>e.__world,localBoxBounds:e=>e.__.eraser||e.__.visible===0?null:e.__local||e.__layout,localStrokeBounds:e=>e.__.eraser||e.__.visible===0?null:e.__layout.localStrokeBounds,localRenderBounds(e){const{__:t,__layout:n}=e;return t.eraser||t.visible===0?null:n.localOuterBounds||n.localRenderBounds},maskLocalBoxBounds:(e,t)=>Ou(e,t)&&e.__localBoxBounds,maskLocalStrokeBounds:(e,t)=>Ou(e,t)&&e.__layout.localStrokeBounds,maskLocalRenderBounds(e,t){const{__layout:n}=e;return Ou(e,t)&&(n.localOuterBounds||n.localRenderBounds)},excludeRenderBounds:(e,t)=>!(!t.bounds||t.bounds.hit(e.__world,t.matrix))||!(!t.hideBounds||!t.hideBounds.includes(e.__world,t.matrix))};let Pa;function Ou(e,t){return t||(Pa=0),e.__.mask&&(Pa=1),Pa<0?null:(Pa&&(Pa=-1),!0)}const{updateBounds:fg}=We,Ul={sort:(e,t)=>e.__.zIndex===t.__.zIndex?e.__tempNumber-t.__tempNumber:e.__.zIndex-t.__.zIndex,pushAllChildBranch(e,t){if(e.__tempNumber=1,e.__.__childBranchNumber){const{children:n}=e;for(let i=0,s=n.length;i<s;i++)(e=n[i]).isBranch&&(e.__tempNumber=1,t.add(e),VT(e,t))}},pushAllParent(e,t){const{keys:n}=t;if(n)for(;e.parent&&Kt(n[e.parent.innerId]);)t.add(e.parent),e=e.parent;else for(;e.parent;)t.add(e.parent),e=e.parent},pushAllBranchStack(e,t){let n=t.length;const{children:i}=e;for(let s=0,r=i.length;s<r;s++)i[s].isBranch&&t.push(i[s]);for(let s=n,r=t.length;s<r;s++)pg(t[s],t)},updateBounds(e,t){const n=[e];pg(e,n),GT(n,t)},updateBoundsByBranchStack(e,t){let n,i;for(let s=e.length-1;s>-1;s--){n=e[s],i=n.children;for(let r=0,o=i.length;r<o;r++)fg(i[r]);t&&t===n||fg(n)}},move(e,t,n){let i;const{children:s}=e;for(let r=0,o=s.length;r<o;r++)i=(e=s[r]).__world,i.e+=t,i.f+=n,i.x+=t,i.y+=n,e.isBranch&&WT(e,t,n)},scale(e,t,n,i,s,r,o){let a;const{children:l}=e,c=i-1,h=s-1;for(let d=0,f=l.length;d<f;d++)a=(e=l[d]).__world,a.a*=i,a.d*=s,(a.b||a.c)&&(a.b*=i,a.c*=s),a.e===a.x&&a.f===a.y?(a.x=a.e+=(a.e-r)*c+t,a.y=a.f+=(a.f-o)*h+n):(a.e+=(a.e-r)*c+t,a.f+=(a.f-o)*h+n,a.x+=(a.x-r)*c+t,a.y+=(a.y-o)*h+n),a.width*=i,a.height*=s,a.scaleX*=i,a.scaleY*=s,e.isBranch&&XT(e,t,n,i,s,r,o)}},{pushAllChildBranch:VT,pushAllBranchStack:pg,updateBoundsByBranchStack:GT,move:WT,scale:XT}=Ul,La={run(e){if(e&&e.length){const t=e.length;for(let n=0;n<t;n++)e[n]();e.length===t?e.length=0:e.splice(0,t)}}},{getRelativeWorld:_g,updateBounds:$T}=We,{toOuterOf:pc,getPoints:YT,copy:qT}=Ut,Uu="_localContentBounds",Nu="_worldContentBounds",Fu="_worldBoxBounds",Bu="_worldStrokeBounds";class jT{get contentBounds(){return this._contentBounds||this.boxBounds}set contentBounds(t){this._contentBounds=t}get strokeBounds(){return this._strokeBounds||this.boxBounds}get renderBounds(){return this._renderBounds||this.boxBounds}set renderBounds(t){this._renderBounds=t}get localContentBounds(){return pc(this.contentBounds,this.leaf.__localMatrix,this[Uu]||(this[Uu]={})),this[Uu]}get localStrokeBounds(){return this._localStrokeBounds||this}get localRenderBounds(){return this._localRenderBounds||this}get worldContentBounds(){return pc(this.contentBounds,this.leaf.__world,this[Nu]||(this[Nu]={})),this[Nu]}get worldBoxBounds(){return pc(this.boxBounds,this.leaf.__world,this[Fu]||(this[Fu]={})),this[Fu]}get worldStrokeBounds(){return pc(this.strokeBounds,this.leaf.__world,this[Bu]||(this[Bu]={})),this[Bu]}get a(){return 1}get b(){return 0}get c(){return 0}get d(){return 1}get e(){return this.leaf.__.x}get f(){return this.leaf.__.y}get x(){return this.e+this.boxBounds.x}get y(){return this.f+this.boxBounds.y}get width(){return this.boxBounds.width}get height(){return this.boxBounds.height}constructor(t){this.leaf=t,this.leaf.__local&&(this._localRenderBounds=this._localStrokeBounds=this.leaf.__local),t.__world&&(this.boxBounds={x:0,y:0,width:0,height:0},this.boxChange(),this.matrixChange())}createLocal(){const t=this.leaf.__local={a:1,b:0,c:0,d:1,e:0,f:0,x:0,y:0,width:0,height:0};this._localStrokeBounds||(this._localStrokeBounds=t),this._localRenderBounds||(this._localRenderBounds=t)}update(){const{leaf:t}=this,{leafer:n}=t;if(t.isApp)return $T(t);if(n)n.ready?n.watcher.changed&&n.layouter.layout():n.start();else{let i=t;for(;i.parent&&!i.parent.leafer;)i=i.parent;const s=i;if(s.__fullLayouting)return;s.__fullLayouting=!0,Dt.layout(s),delete s.__fullLayouting}}getTransform(t="world"){this.update();const{leaf:n}=this;switch(t){case"world":return n.__world;case"local":return n.__localMatrix;case"inner":return ie.defaultMatrix;case"page":t=n.zoomLayer;default:return _g(n,t)}}getBounds(t,n="world"){switch(this.update(),n){case"world":return this.getWorldBounds(t);case"local":return this.getLocalBounds(t);case"inner":return this.getInnerBounds(t);case"page":n=this.leaf.zoomLayer;default:return new cn(this.getInnerBounds(t)).toOuterOf(this.getTransform(n))}}getInnerBounds(t="box"){switch(t){case"render":return this.renderBounds;case"content":if(this.contentBounds)return this.contentBounds;case"box":return this.boxBounds;case"stroke":return this.strokeBounds}}getLocalBounds(t="box"){switch(t){case"render":return this.localRenderBounds;case"stroke":return this.localStrokeBounds;case"content":if(this.contentBounds)return this.localContentBounds;case"box":return this.leaf.__localBoxBounds}}getWorldBounds(t="box"){switch(t){case"render":return this.leaf.__world;case"stroke":return this.worldStrokeBounds;case"content":if(this.contentBounds)return this.worldContentBounds;case"box":return this.worldBoxBounds}}getLayoutBounds(t,n="world",i){const{leaf:s}=this;let r,o,a,l=this.getInnerBounds(t);switch(n){case"world":r=s.getWorldPoint(l),o=s.__world;break;case"local":const{scaleX:c,scaleY:h,rotation:d,skewX:f,skewY:u}=s.__;a={scaleX:c,scaleY:h,rotation:d,skewX:f,skewY:u},r=s.getLocalPointByInner(l);break;case"inner":r=l,o=ie.defaultMatrix;break;case"page":n=s.zoomLayer;default:r=s.getWorldPoint(l,n),o=_g(s,n,!0)}if(a||(a=ie.getLayout(o)),qT(a,l),le.copy(a,r),i){const{scaleX:c,scaleY:h}=a,d=Math.abs(c),f=Math.abs(h);d===1&&f===1||(a.scaleX/=d,a.scaleY/=f,a.width*=d,a.height*=f)}return a}getLayoutPoints(t,n="world"){const{leaf:i}=this,s=YT(this.getInnerBounds(t));let r;switch(n){case"world":r=null;break;case"local":r=i.parent;break;case"inner":break;case"page":n=i.zoomLayer;default:r=n}return Kt(r)||s.forEach(o=>i.innerToWorld(o,null,!1,r)),s}shrinkContent(){const{x:t,y:n,width:i,height:s}=this.boxBounds;this._contentBounds={x:t,y:n,width:i,height:s}}spreadStroke(){const{x:t,y:n,width:i,height:s}=this.strokeBounds;this._strokeBounds={x:t,y:n,width:i,height:s},this._localStrokeBounds={x:t,y:n,width:i,height:s},this.renderSpread||this.spreadRenderCancel()}spreadRender(){const{x:t,y:n,width:i,height:s}=this.renderBounds;this._renderBounds={x:t,y:n,width:i,height:s},this._localRenderBounds={x:t,y:n,width:i,height:s}}shrinkContentCancel(){this._contentBounds=void 0}spreadStrokeCancel(){const t=this.renderBounds===this.strokeBounds;this._strokeBounds=this.boxBounds,this._localStrokeBounds=this.leaf.__localBoxBounds,t&&this.spreadRenderCancel()}spreadRenderCancel(){this._renderBounds=this._strokeBounds,this._localRenderBounds=this._localStrokeBounds}boxChange(){this.boxChanged=!0,this.localBoxChanged?this.boundsChanged||(this.boundsChanged=!0):this.localBoxChange(),this.hitCanvasChanged=!0}localBoxChange(){this.localBoxChanged=!0,this.boundsChanged=!0}strokeChange(){this.strokeChanged=!0,this.strokeSpread||(this.strokeSpread=1),this.boundsChanged=!0,this.hitCanvasChanged=!0}renderChange(){this.renderChanged=!0,this.renderSpread||(this.renderSpread=1),this.boundsChanged=!0}scaleChange(){this.scaleChanged=!0,this._scaleOrRotationChange()}rotationChange(){this.rotationChanged=!0,this.affectRotation=!0,this._scaleOrRotationChange()}_scaleOrRotationChange(){this.affectScaleOrRotation=!0,this.matrixChange(),this.leaf.__local||this.createLocal()}matrixChange(){this.matrixChanged=!0,this.localBoxChanged?this.boundsChanged||(this.boundsChanged=!0):this.localBoxChange()}surfaceChange(){this.surfaceChanged=!0}opacityChange(){this.opacityChanged=!0}childrenSortChange(){this.childrenSortChanged||(this.childrenSortChanged=this.affectChildrenSort=!0,this.leaf.forceUpdate("surface"))}destroy(){}}class hs{constructor(t,n){this.bubbles=!1,this.type=t,n&&(this.target=n)}stopDefault(){this.isStopDefault=!0,this.origin&&Dt.event.stopDefault(this.origin)}stopNow(){this.isStopNow=!0,this.isStop=!0,this.origin&&Dt.event.stopNow(this.origin)}stop(){this.isStop=!0,this.origin&&Dt.event.stop(this.origin)}}class an extends hs{constructor(t,n,i){super(t,n),this.parent=i,this.child=n}}an.ADD="child.add",an.REMOVE="child.remove",an.CREATED="created",an.MOUNTED="mounted",an.UNMOUNTED="unmounted",an.DESTROY="destroy";const ff="property.scroll";class mr extends hs{constructor(t,n,i,s,r){super(t,n),this.attrName=i,this.oldValue=s,this.newValue=r}}mr.CHANGE="property.change",mr.LEAFER_CHANGE="property.leafer_change",mr.SCROLL=ff;const KT={scrollX:ff,scrollY:ff};class Fs extends hs{constructor(t,n){super(t),Object.assign(this,n)}}Fs.LOAD="image.load",Fs.LOADED="image.loaded",Fs.ERROR="image.error";class Us extends hs{static checkHas(t,n,i){i==="on"?n===ih?t.__hasWorldEvent=!0:t.__hasLocalEvent=!0:(t.__hasLocalEvent=t.hasEvent(pf)||t.hasEvent(_f)||t.hasEvent(mf),t.__hasWorldEvent=t.hasEvent(ih))}static emitLocal(t){if(t.leaferIsReady){const{resized:n}=t.__layout;n!=="local"&&(t.emit(pf,t),n==="inner"&&t.emit(_f,t)),t.emit(mf,t)}}static emitWorld(t){t.leaferIsReady&&t.emit(ih,t)}}Us.RESIZE="bounds.resize",Us.INNER="bounds.inner",Us.LOCAL="bounds.local",Us.WORLD="bounds.world";const{RESIZE:pf,INNER:_f,LOCAL:mf,WORLD:ih}=Us,gf={};[pf,_f,mf,ih].forEach(e=>gf[e]=1);class co extends hs{get bigger(){if(!this.old)return!0;const{width:t,height:n}=this.old;return this.width>=t&&this.height>=n}get smaller(){return!this.bigger}get samePixelRatio(){return!this.old||this.pixelRatio===this.old.pixelRatio}constructor(t,n){ze(t)?(super(co.RESIZE),Object.assign(this,t)):super(t),this.old=n}static isResizing(t){return this.resizingKeys&&!Kt(this.resizingKeys[t.innerId])}}co.RESIZE="resize";class xr extends hs{constructor(t,n){super(t),this.data=n}}xr.REQUEST="watch.request",xr.DATA="watch.data";class Ve extends hs{constructor(t,n,i){super(t),n&&(this.data=n,this.times=i)}}Ve.REQUEST="layout.request",Ve.START="layout.start",Ve.BEFORE="layout.before",Ve.LAYOUT="layout",Ve.AFTER="layout.after",Ve.AGAIN="layout.again",Ve.END="layout.end";class Re extends hs{constructor(t,n,i,s){super(t),n&&(this.times=n),i&&(this.renderBounds=i,this.renderOptions=s)}}Re.REQUEST="render.request",Re.CHILD_START="render.child_start",Re.CHILD_END="render.child_end",Re.START="render.start",Re.BEFORE="render.before",Re.RENDER="render",Re.AFTER="render.after",Re.AGAIN="render.again",Re.END="render.end",Re.NEXT="render.next";class Se extends hs{}Se.START="leafer.start",Se.BEFORE_READY="leafer.before_ready",Se.READY="leafer.ready",Se.AFTER_READY="leafer.after_ready",Se.VIEW_READY="leafer.view_ready",Se.VIEW_COMPLETED="leafer.view_completed",Se.STOP="leafer.stop",Se.RESTART="leafer.restart",Se.END="leafer.end",Se.UPDATE_MODE="leafer.update_mode",Se.TRANSFORM="leafer.transform",Se.MOVE="leafer.move",Se.SCALE="leafer.scale",Se.ROTATE="leafer.rotate",Se.SKEW="leafer.skew";const{MOVE:mg,SCALE:gg,ROTATE:ZT,SKEW:xg}=Se,JT={x:mg,y:mg,scaleX:gg,scaleY:gg,rotation:ZT,skewX:xg,skewY:xg},vg={};class QT{set event(t){this.on(t)}on(t,n,i){if(!n){let h;if(ln(t))t.forEach(d=>this.on(d[0],d[1],d[2]));else for(let d in t)ln(h=t[d])?this.on(d,h[0],h[1]):this.on(d,h);return}let s,r,o;i&&(i==="once"?r=!0:typeof i=="boolean"?s=i:(s=i.capture,r=i.once));const a=ku(this,s,!0),l=tn(t)?t.split(" "):t,c=r?{listener:n,once:r}:{listener:n};l.forEach(h=>{h&&(o=a[h],o?o.findIndex(d=>d.listener===n)===-1&&o.push(c):a[h]=[c],gf[h]&&Us.checkHas(this,h,"on"))})}off(t,n,i){if(t){const s=tn(t)?t.split(" "):t;if(n){let r,o,a;i&&(r=typeof i=="boolean"?i:i!=="once"&&i.capture);const l=ku(this,r);s.forEach(c=>{c&&(o=l[c],o&&(a=o.findIndex(h=>h.listener===n),a>-1&&o.splice(a,1),o.length||delete l[c],gf[c]&&Us.checkHas(this,c,"off")))})}else{const{__bubbleMap:r,__captureMap:o}=this;s.forEach(a=>{r&&delete r[a],o&&delete o[a]})}}else this.__bubbleMap=this.__captureMap=void 0}on_(t,n,i,s){return n?this.on(t,i?n=n.bind(i):n,s):ln(t)&&t.forEach(r=>this.on(r[0],r[2]?r[1]=r[1].bind(r[2]):r[1],r[3])),{type:t,current:this,listener:n,options:s}}off_(t){if(!t)return;const n=ln(t)?t:[t];n.forEach(i=>{i&&(i.listener?i.current.off(i.type,i.listener,i.options):ln(i.type)&&i.type.forEach(s=>i.current.off(s[0],s[1],s[3])))}),n.length=0}once(t,n,i,s){if(!n)return ln(t)&&t.forEach(r=>this.once(r[0],r[1],r[2],r[3]));ze(i)?n=n.bind(i):s=i,this.on(t,n,{once:!0,capture:s})}emit(t,n,i){!n&&ca.has(t)&&(n=ca.get(t,{type:t,target:this,current:this}));const s=ku(this,i)[t];if(s){let r;for(let o=0,a=s.length;o<a&&!((r=s[o])&&(r.listener(n),r.once&&(this.off(t,r.listener,i),o--,a--),n&&n.isStopNow));o++);}this.syncEventer&&this.syncEventer.emitEvent(n,i)}emitEvent(t,n){t.current=this,this.emit(t.type,t,n)}hasEvent(t,n){if(this.syncEventer&&this.syncEventer.hasEvent(t,n))return!0;const{__bubbleMap:i,__captureMap:s}=this,r=i&&i[t],o=s&&s[t];return!!(Kt(n)?r||o:n?o:r)}destroy(){this.__captureMap=this.__bubbleMap=this.syncEventer=null}}function ku(e,t,n){if(t){const{__captureMap:i}=e;return i||(n?e.__captureMap={}:vg)}{const{__bubbleMap:i}=e;return i||(n?e.__bubbleMap={}:vg)}}const{on:tA,on_:eA,off:nA,off_:iA,once:sA,emit:rA,emitEvent:oA,hasEvent:aA,destroy:lA}=QT.prototype,cA={on:tA,on_:eA,off:nA,off_:iA,once:sA,emit:rA,emitEvent:oA,hasEvent:aA,destroyEventer:lA},hA=Ge.get("setAttr"),uA={__setAttr(e,t,n){if(this.leaferIsCreated){const i=this.__.__getInput(e);if(!n||lf(t)||Kt(t)||(hA.warn(this.innerName,e,t),t=void 0),ze(t)||i!==t){if(this.__realSetAttr(e,t),this.isLeafer){this.emitEvent(new mr(mr.LEAFER_CHANGE,this,e,i,t));const r=JT[e];r&&(this.emitEvent(new Se(r,this)),this.emitEvent(new Se(Se.TRANSFORM,this)))}this.emitPropertyEvent(mr.CHANGE,e,i,t);const s=KT[e];return s&&this.emitPropertyEvent(s,e,i,t),!0}return!1}return this.__realSetAttr(e,t),!0},emitPropertyEvent(e,t,n,i){const s=new mr(e,this,t,n,i);this.isLeafer||this.hasEvent(e)&&this.emitEvent(s),this.leafer.emitEvent(s)},__realSetAttr(e,t){const n=this.__;n[e]=t,this.__proxyData&&this.setProxyAttr(e,t),n.normalStyle&&(this.lockNormalStyle||Kt(n.normalStyle[e])||(n.normalStyle[e]=t))},__getAttr(e){return this.__proxyData?this.getProxyAttr(e):this.__.__get(e)}},{setLayout:dA,multiplyParent:fA,translateInner:yg,defaultWorld:pA}=ie,{toPoint:_A,tempPoint:zu}=wr,mA={__updateWorldMatrix(){const{parent:e,__layout:t,__world:n,__scrollWorld:i,__:s}=this;fA(this.__local||t,e?e.__scrollWorld||e.__world:pA,n,!!t.affectScaleOrRotation,s),i&&yg(Object.assign(i,n),s.scrollX,s.scrollY),t.scaleFixed&&We.updateScaleFixedWorld(this)},__updateLocalMatrix(){if(this.__local){const e=this.__layout,t=this.__local,n=this.__;e.affectScaleOrRotation&&(e.scaleChanged&&(e.resized||(e.resized="scale"))||e.rotationChanged)&&(dA(t,n,null,null,e.affectRotation),e.scaleChanged=e.rotationChanged=void 0),t.e=n.x+n.offsetX,t.f=n.y+n.offsetY,(n.around||n.origin)&&(_A(n.around||n.origin,e.boxBounds,zu),yg(t,-zu.x,-zu.y,!n.around))}this.__layout.matrixChanged=void 0}},{updateMatrix:gA,updateAllMatrix:Sg}=We,{updateBounds:Mg}=Ul,{toOuterOf:_c,copyAndSpread:bg,copy:xA}=Ut,{toBounds:vA}=gy,yA={__updateWorldBounds(){const{__layout:e,__world:t}=this;_c(e.renderBounds,t,t),this.__hasComplex&&We.checkComplex(this),e.resized&&(e.resized==="inner"&&this.__onUpdateSize(),this.__hasLocalEvent&&Us.emitLocal(this),e.resized=void 0),this.__hasWorldEvent&&Us.emitWorld(this)},__updateLocalBounds(){const e=this.__layout,t=this.__;e.boxChanged&&(t.__pathInputed||this.__updatePath(),this.__updateRenderPath(),this.__updateBoxBounds(),e.resized="inner",t.__strokeGeometry&&(t.__strokeGeometry=void 0)),e.localBoxChanged&&(this.__local&&this.__updateLocalBoxBounds(),e.localBoxChanged=void 0,e.strokeSpread&&(e.strokeChanged=!0),e.renderSpread&&(e.renderChanged=!0),this.parent&&this.parent.__layout.boxChange()),e.boxChanged=void 0,e.strokeChanged&&(e.strokeSpread=this.__updateStrokeSpread(),e.strokeSpread?(e.strokeBounds===e.boxBounds&&e.spreadStroke(),this.__updateStrokeBounds(),this.__updateLocalStrokeBounds()):e.spreadStrokeCancel(),e.strokeChanged=void 0,(e.renderSpread||e.strokeSpread!==e.strokeBoxSpread)&&(e.renderChanged=!0),this.parent&&this.parent.__layout.strokeChange(),e.resized="inner",t.__strokeGeometry&&(t.__strokeGeometry=void 0)),e.renderChanged&&(e.renderSpread=this.__updateRenderSpread(),e.renderSpread?(e.renderBounds!==e.boxBounds&&e.renderBounds!==e.strokeBounds||e.spreadRender(),this.__updateRenderBounds(),this.__updateLocalRenderBounds()):e.spreadRenderCancel(),e.renderChanged=void 0,this.parent&&this.parent.__layout.renderChange()),e.outerScale&&We.updateOuterBounds(this),e.resized||(e.resized="local"),e.boundsChanged=void 0},__updateLocalBoxBounds(){this.__hasMotionPath&&this.__updateMotionPath(),this.__hasAutoLayout&&this.__updateAutoLayout(),_c(this.__layout.boxBounds,this.__local,this.__local)},__updateLocalStrokeBounds(){_c(this.__layout.strokeBounds,this.__localMatrix,this.__layout.localStrokeBounds)},__updateLocalRenderBounds(){_c(this.__layout.renderBounds,this.__localMatrix,this.__layout.localRenderBounds)},__updateBoxBounds(e,t){const n=this.__layout.boxBounds,i=this.__;i.__usePathBox?vA(i.path,n):(n.x=0,n.y=0,n.width=i.width,n.height=i.height)},__updateAutoLayout(){this.__layout.matrixChanged=!0,this.isBranch?(this.__extraUpdate(),this.__.flow?(this.__layout.boxChanged&&this.__updateFlowLayout(),Sg(this),Mg(this,this),this.__.__autoSide&&this.__updateBoxBounds(!0)):(Sg(this),Mg(this,this))):gA(this)},__updateNaturalSize(){const{__:e,__layout:t}=this;e.__naturalWidth=t.boxBounds.width,e.__naturalHeight=t.boxBounds.height},__updateStrokeBounds(e){const t=this.__layout;bg(t.strokeBounds,t.boxBounds,t.strokeBoxSpread)},__updateRenderBounds(e){const t=this.__layout,{renderSpread:n}=t;je(n)&&n<=0?xA(t.renderBounds,t.strokeBounds):bg(t.renderBounds,t.boxBounds,n)}},SA={__render(e,t){if(t.shape)return this.__renderShape(e,t);if((!t.cellList||t.cellList.has(this))&&this.__worldOpacity){const n=this.__;if(n.bright&&!t.topRendering)return t.topList.add(this);if(e.setWorld(this.__nowWorld=this.__getNowWorld(t)),e.opacity=t.ignoreOpacity?1:t.dimOpacity&&!n.dimskip?n.opacity*t.dimOpacity:n.opacity,this.__.__single){if(n.eraser==="path")return this.__renderEraser(e,t);const i=e.getSameCanvas(!0,!0);this.__draw(i,t,e),We.copyCanvasByWorld(this,e,i,this.__nowWorld,n.__blendMode,!0),i.recycle(this.__nowWorld)}else this.__draw(e,t);Ge.showBounds&&Ge.drawBounds(this,e,t)}},__renderShape(e,t){this.__worldOpacity&&(e.setWorld(this.__nowWorld=this.__getNowWorld(t)),this.__drawShape(e,t))},__clip(e,t){this.__worldOpacity&&(e.setWorld(this.__nowWorld=this.__getNowWorld(t)),this.__drawRenderPath(e),e.clipUI(this))},__updateWorldOpacity(){this.__worldOpacity=this.__.visible?this.parent?this.parent.__worldOpacity*this.__.opacity:this.__.opacity:0,this.__layout.opacityChanged&&(this.__layout.opacityChanged=!1)}},{excludeRenderBounds:Eg}=Gh,{hasSize:MA}=Ut,bA={__updateChange(){const{__layout:e}=this;e.childrenSortChanged&&(this.__updateSortChildren(),e.childrenSortChanged=!1),this.__.__checkSingle()},__render(e,t){const n=this.__nowWorld=this.__getNowWorld(t);if(this.__worldOpacity&&MA(n)){const i=this.__;if(i.__useDim)if(i.dim)t.dimOpacity=i.dim===!0?.2:i.dim;else{if(i.bright&&!t.topRendering)return t.topList.add(this);i.dimskip&&t.dimOpacity&&(t.dimOpacity=0)}if(i.__single&&!this.isBranchLeaf){if(i.eraser==="path")return this.__renderEraser(e,t);const s=e.getSameCanvas(!1,!0);this.__renderBranch(s,t),e.opacity=t.ignoreOpacity?1:t.dimOpacity?i.opacity*t.dimOpacity:i.opacity,e.copyWorldByReset(s,n,n,i.__blendMode,!0),s.recycle(n)}else this.__renderBranch(e,t)}},__renderBranch(e,t){if(this.__hasMask)this.__renderMask(e,t);else{let n;const{children:i}=this;for(let s=0,r=i.length;s<r;s++)n=i[s],Eg(n,t)||(n.__hasComplex?We.renderComplex(n,e,t):n.__render(e,t))}},__clip(e,t){if(this.__worldOpacity){const{children:n}=this;for(let i=0,s=n.length;i<s;i++)Eg(n[i],t)||n[i].__clip(e,t)}}},{LEAF:EA,create:wA}=Gs,{stintSet:wg}=De,{toInnerPoint:TA,toOuterPoint:AA,multiplyParent:RA}=ie,{toOuterOf:Tg}=Ut,{copy:Ag,move:Rg}=le,{getScaleFixedData:CA}=wn,{moveLocal:PA,zoomOfLocal:LA,rotateOfLocal:DA,skewOfLocal:IA,moveWorld:Cg,zoomOfWorld:OA,rotateOfWorld:UA,skewOfWorld:NA,transform:Pg,transformWorld:FA,setTransform:BA,getFlipTransform:kA,getLocalOrigin:Hu,getRelativeWorld:zA,drop:HA}=We;let ha=class{get tag(){return this.__tag}set tag(e){}get __tag(){return"Leaf"}get innerName(){return this.__.name||this.tag+this.innerId}get __DataProcessor(){return ty}get __LayoutProcessor(){return jT}get leaferIsCreated(){return this.leafer&&this.leafer.created}get leaferIsReady(){return this.leafer&&this.leafer.ready}get isLeafer(){return!1}get isBranch(){return!1}get isBranchLeaf(){return!1}get __localMatrix(){return this.__local||this.__layout}get __localBoxBounds(){return this.__local||this.__layout}get worldTransform(){return this.__layout.getTransform("world")}get localTransform(){return this.__layout.getTransform("local")}get scrollWorldTransform(){return this.updateLayout(),this.__scrollWorld||this.__world}get boxBounds(){return this.getBounds("box","inner")}get renderBounds(){return this.getBounds("render","inner")}get worldBoxBounds(){return this.getBounds("box")}get worldStrokeBounds(){return this.getBounds("stroke")}get worldRenderBounds(){return this.getBounds("render")}get worldOpacity(){return this.updateLayout(),this.__worldOpacity}get __worldFlipped(){return this.__world.scaleX<0||this.__world.scaleY<0}get __onlyHitMask(){return this.__hasMask&&!this.__.hitChildren}get __ignoreHitWorld(){return(this.__hasMask||this.__hasEraser)&&this.__.hitChildren}get __inLazyBounds(){return this.leaferIsCreated&&this.leafer.lazyBounds.hit(this.__world)}get pathInputed(){return this.__.__pathInputed}set event(e){this.on(e)}constructor(e){this.innerId=wA(EA),this.reset(e),this.__bubbleMap&&this.__emitLifeEvent(an.CREATED)}reset(e){this.leafer&&this.leafer.forceRender(this.__world),e!==0&&(this.__world={a:1,b:0,c:0,d:1,e:0,f:0,x:0,y:0,width:0,height:0,scaleX:1,scaleY:1},e!==null&&(this.__local={a:1,b:0,c:0,d:1,e:0,f:0,x:0,y:0,width:0,height:0})),this.__worldOpacity=1,this.__=new this.__DataProcessor(this),this.__layout=new this.__LayoutProcessor(this),this.__level&&this.resetCustom(),e&&(e.__&&(e=e.toJSON()),e.children?this.set(e):Object.assign(this,e))}resetCustom(){this.__hasMask=this.__hasEraser=null,this.forceUpdate()}waitParent(e,t){t&&(e=e.bind(t)),this.parent?e():this.on(an.ADD,e,"once")}waitLeafer(e,t){t&&(e=e.bind(t)),this.leafer?e():this.on(an.MOUNTED,e,"once")}nextRender(e,t,n){this.leafer?this.leafer.nextRender(e,t,n):this.waitLeafer(()=>this.leafer.nextRender(e,t,n))}removeNextRender(e){this.nextRender(e,null,"off")}__bindLeafer(e){if(this.isLeafer&&e!==null&&(e=this),this.leafer&&!e&&this.leafer.leafs--,this.leafer=e,e?(e.leafs++,this.__level=this.parent?this.parent.__level+1:1,this.animation&&this.__runAnimation("in"),this.__bubbleMap&&this.__emitLifeEvent(an.MOUNTED),e.cacheId&&We.cacheId(this)):this.__emitLifeEvent(an.UNMOUNTED),this.isBranch){const{children:t}=this;for(let n=0,i=t.length;n<i;n++)t[n].__bindLeafer(e)}}set(e,t){}get(e){}setAttr(e,t){this[e]=t}getAttr(e){return this[e]}getComputedAttr(e){return this.__[e]}toJSON(e){return e&&this.__layout.update(),this.__.__getInputData(null,e)}toString(e){return JSON.stringify(this.toJSON(e))}toSVG(){}__SVG(e){}toHTML(){}__setAttr(e,t){return!0}__getAttr(e){}setProxyAttr(e,t){}getProxyAttr(e){}find(e,t){}findTag(e){}findOne(e,t){}findId(e){}focus(e){}updateState(){}updateLayout(){this.__layout.update()}forceUpdate(e){Kt(e)?e="width":e==="surface"&&(e="blendMode");const t=this.__.__getInput(e);this.__[e]=Kt(t)?null:void 0,this[e]=t}forceRender(e,t){this.forceUpdate("surface")}__extraUpdate(){this.leaferIsReady&&this.leafer.layouter.addExtra(this)}__updateWorldMatrix(){}__updateLocalMatrix(){}__updateWorldBounds(){}__updateLocalBounds(){}__updateLocalBoxBounds(){}__updateLocalStrokeBounds(){}__updateLocalRenderBounds(){}__updateBoxBounds(e,t){}__updateContentBounds(){}__updateStrokeBounds(e){}__updateRenderBounds(e){}__updateAutoLayout(){}__updateFlowLayout(){}__updateNaturalSize(){}__updateStrokeSpread(){return 0}__updateRenderSpread(){return 0}__onUpdateSize(){}__updateEraser(e){this.__hasEraser=!!e||this.children.some(t=>t.__.eraser)}__renderEraser(e,t){e.save(),this.__clip(e,t);const{renderBounds:n}=this.__layout;e.clearRect(n.x,n.y,n.width,n.height),e.restore()}__updateMask(e){this.__hasMask=this.children.some(t=>t.__.mask&&t.__.visible&&t.__.opacity)}__renderMask(e,t){}__getNowWorld(e){if(e.matrix){this.__cameraWorld||(this.__cameraWorld={});const t=this.__cameraWorld,n=this.__world;return RA(n,e.matrix,t,void 0,n),Tg(this.__layout.renderBounds,t,t),wg(t,"half",n.half),wg(t,"ignorePixelSnap",n.ignorePixelSnap),t}return this.__world}getClampRenderScale(){let{scaleX:e}=this.__nowWorld||this.__world;return e<0&&(e=-e),e>1?e:1}getRenderScaleData(e,t,n=!0){return CA(Ui.patternLocked?this.__world:this.__nowWorld||this.__world,t,n,e)}getTransform(e){return this.__layout.getTransform(e||"local")}getBounds(e,t){return this.__layout.getBounds(e,t)}getLayoutBounds(e,t,n){return this.__layout.getLayoutBounds(e,t,n)}getLayoutPoints(e,t){return this.__layout.getLayoutPoints(e,t)}getWorldBounds(e,t,n){const i=t?zA(this,t):this.worldTransform,s=n?e:{};return Tg(e,i,s),s}worldToLocal(e,t,n,i){this.parent?this.parent.worldToInner(e,t,n,i):t&&Ag(t,e)}localToWorld(e,t,n,i){this.parent?this.parent.innerToWorld(e,t,n,i):t&&Ag(t,e)}worldToInner(e,t,n,i){i&&(i.innerToWorld(e,t,n),e=t||e),TA(this.worldTransform,e,t,n)}innerToWorld(e,t,n,i){AA(this.worldTransform,e,t,n),i&&i.worldToInner(t||e,null,n)}getBoxPoint(e,t,n,i){const s=this.getInnerPoint(e,t,n,i);return n?s:this.getBoxPointByInner(s,null,null,!0)}getBoxPointByInner(e,t,n,i){const s=i?e:Object.assign({},e),{x:r,y:o}=this.boxBounds;return Rg(s,-r,-o),s}getInnerPoint(e,t,n,i){const s=i?e:{};return this.worldToInner(e,s,n,t),s}getInnerPointByBox(e,t,n,i){const s=i?e:Object.assign({},e),{x:r,y:o}=this.boxBounds;return Rg(s,r,o),s}getInnerPointByLocal(e,t,n,i){return this.getInnerPoint(e,this.parent,n,i)}getLocalPoint(e,t,n,i){const s=i?e:{};return this.worldToLocal(e,s,n,t),s}getLocalPointByInner(e,t,n,i){return this.getWorldPoint(e,this.parent,n,i)}getPagePoint(e,t,n,i){return(this.leafer?this.leafer.zoomLayer:this).getInnerPoint(e,t,n,i)}getWorldPoint(e,t,n,i){const s=i?e:{};return this.innerToWorld(e,s,n,t),s}getWorldPointByBox(e,t,n,i){return this.getWorldPoint(this.getInnerPointByBox(e,null,null,i),t,n,!0)}getWorldPointByLocal(e,t,n,i){const s=i?e:{};return this.localToWorld(e,s,n,t),s}getWorldPointByPage(e,t,n,i){return(this.leafer?this.leafer.zoomLayer:this).getWorldPoint(e,t,n,i)}setTransform(e,t,n){BA(this,e,t,n)}transform(e,t,n){Pg(this,e,t,n)}move(e,t,n){PA(this,e,t,n)}moveInner(e,t,n){Cg(this,e,t,!0,n)}scaleOf(e,t,n,i,s){LA(this,Hu(this,e),t,n,i,s)}rotateOf(e,t,n){DA(this,Hu(this,e),t,n)}skewOf(e,t,n,i,s){IA(this,Hu(this,e),t,n,i,s)}transformWorld(e,t,n){FA(this,e,t,n)}moveWorld(e,t,n){Cg(this,e,t,!1,n)}scaleOfWorld(e,t,n,i,s){OA(this,e,t,n,i,s)}rotateOfWorld(e,t){UA(this,e,t)}skewOfWorld(e,t,n,i,s){NA(this,e,t,n,i,s)}flip(e,t){Pg(this,kA(this,e),!1,t)}scaleResize(e,t=e,n){this.scaleX*=e,this.scaleY*=t}__scaleResize(e,t){}resizeWidth(e){}resizeHeight(e){}hit(e,t){return!0}__hitWorld(e,t){return!0}__hit(e,t){return!0}__hitFill(e){return!0}__hitStroke(e,t){return!0}__hitPixel(e){return!0}__drawHitPath(e){}__updateHitCanvas(){}__render(e,t){}__drawFast(e,t){}__draw(e,t,n){}__clip(e,t){}__renderShape(e,t){}__drawShape(e,t){}__updateWorldOpacity(){}__updateChange(){}__drawPath(e){}__drawRenderPath(e){}__updatePath(){}__updateRenderPath(e){}getMotionPathData(){return jn.need("path")}getMotionPoint(e){return jn.need("path")}getMotionTotal(){return 0}__updateMotionPath(){}__runAnimation(e,t){}__updateSortChildren(){}add(e,t){}remove(e,t){this.parent&&this.parent.remove(this,t)}dropTo(e,t,n){HA(this,e,t,n)}on(e,t,n){}off(e,t,n){}on_(e,t,n,i){}off_(e){}once(e,t,n,i){}emit(e,t,n){}emitEvent(e,t){}hasEvent(e,t){return!1}static changeAttr(e,t,n){n?this.addAttr(e,t,n):My(this.prototype,e,t)}static addAttr(e,t,n,i){n||(n=de),n(t,i)(this.prototype,e)}__emitLifeEvent(e){this.hasEvent(e)&&this.emitEvent(new an(e,this,this.parent))}destroy(){this.destroyed||(this.parent&&this.remove(),this.children&&this.clear(),this.__emitLifeEvent(an.DESTROY),this.__.destroy(),this.__layout.destroy(),this.destroyEventer(),this.destroyed=!0)}};ha=Ft([Ti(uA),Ti(mA),Ti(yA),Ti(cA),Ti(SA)],ha);const{setListWithFn:Vu}=Ut,{sort:VA}=Ul,{localBoxBounds:GA,localStrokeBounds:WA,localRenderBounds:XA,maskLocalBoxBounds:$A,maskLocalStrokeBounds:YA,maskLocalRenderBounds:qA}=Gh,jA=new Ge("Branch");let xf=class extends ha{__updateStrokeSpread(){const{children:e}=this;for(let t=0,n=e.length;t<n;t++)if(e[t].__layout.strokeSpread)return 1;return 0}__updateRenderSpread(){let e;const{children:t}=this;for(let n=0,i=t.length;n<i;n++)if(e=t[n].__layout,e.renderSpread||e.localOuterBounds)return 1;return 0}__updateBoxBounds(e,t){Vu(t||this.__layout.boxBounds,this.children,this.__hasMask?$A:GA)}__updateStrokeBounds(e){Vu(e||this.__layout.strokeBounds,this.children,this.__hasMask?YA:WA)}__updateRenderBounds(e){Vu(e||this.__layout.renderBounds,this.children,this.__hasMask?qA:XA)}__updateSortChildren(){let e;const{children:t}=this;if(t.length>1){for(let n=0,i=t.length;n<i;n++)t[n].__tempNumber=n,t[n].__.zIndex&&(e=!0);t.sort(VA),this.__layout.affectChildrenSort=e}}add(e,t){if(e===this||e.destroyed)return jA.warn("add self or destroyed");const n=Kt(t);if(!e.__){if(ln(e))return e.forEach(s=>{this.add(s,t),n||t++});if(!(e=Ol.get(e.tag,e)))return}e.parent&&e.parent.remove(e),e.parent=this,n?this.children.push(e):this.children.splice(t,0,e),e.isBranch&&(this.__.__childBranchNumber=(this.__.__childBranchNumber||0)+1);const i=e.__layout;i.boxChanged||i.boxChange(),i.matrixChanged||i.matrixChange(),e.__bubbleMap&&e.__emitLifeEvent(an.ADD),this.leafer&&(e.__bindLeafer(this.leafer),this.leafer.created&&this.__emitChildEvent(an.ADD,e)),this.__layout.affectChildrenSort&&this.__layout.childrenSortChange()}addMany(...e){this.add(e)}remove(e,t){e?e.__?e.animationOut?e.__runAnimation("out",()=>this.__remove(e,t)):this.__remove(e,t):this.find(e).forEach(n=>this.remove(n,t)):Kt(e)&&super.remove(null,t)}removeAll(e){const{children:t}=this;t.length&&(this.children=[],this.__preRemove(),this.__.__childBranchNumber=0,t.forEach(n=>{this.__realRemoveChild(n),e&&n.destroy()}))}clear(){this.removeAll(!0)}__remove(e,t){const n=this.children.indexOf(e);n>-1&&(this.children.splice(n,1),e.isBranch&&(this.__.__childBranchNumber=(this.__.__childBranchNumber||1)-1),this.__preRemove(),this.__realRemoveChild(e),t&&e.destroy())}__preRemove(){this.__hasMask&&this.__updateMask(),this.__hasEraser&&this.__updateEraser(),this.__layout.boxChange(),this.__layout.affectChildrenSort&&this.__layout.childrenSortChange()}__realRemoveChild(e){e.__emitLifeEvent(an.REMOVE),e.parent=null,this.leafer&&(e.__bindLeafer(null),this.leafer.created&&(this.__emitChildEvent(an.REMOVE,e),this.leafer.hitCanvasManager&&this.leafer.hitCanvasManager.clear()))}__emitChildEvent(e,t){const n=new an(e,t,this);this.hasEvent(e)&&!this.isLeafer&&this.emitEvent(n),this.leafer.emitEvent(n)}};xf=Ft([Ti(bA)],xf);class Ye{get length(){return this.list.length}constructor(t){this.reset(),t&&(ln(t)?this.addList(t):this.add(t))}has(t){return t&&!Kt(this.keys[t.innerId])}indexAt(t){return this.list[t]}indexOf(t){const n=this.keys[t.innerId];return Kt(n)?-1:n}add(t){const{list:n,keys:i}=this;Kt(i[t.innerId])&&(n.push(t),i[t.innerId]=n.length-1)}addAt(t,n=0){const{keys:i}=this;if(Kt(i[t.innerId])){const{list:s}=this;for(let r=n,o=s.length;r<o;r++)i[s[r].innerId]++;n===0?s.unshift(t):(n>s.length&&(n=s.length),s.splice(n,0,t)),i[t.innerId]=n}}addList(t){for(let n=0;n<t.length;n++)this.add(t[n])}remove(t){const{list:n}=this;let i;for(let s=0,r=n.length;s<r;s++)Kt(i)?n[s].innerId===t.innerId&&(i=s,delete this.keys[t.innerId]):this.keys[n[s].innerId]=s-1;Kt(i)||n.splice(i,1)}sort(t){const{list:n}=this;t?n.sort((i,s)=>s.__level-i.__level):n.sort((i,s)=>i.__level-s.__level)}forEach(t){this.list.forEach(t)}clone(){const t=new Ye;return t.list=[...this.list],t.keys=Object.assign({},this.keys),t}update(){this.keys={};const{list:t,keys:n}=this;for(let i=0,s=t.length;i<s;i++)n[t[i].innerId]=i}reset(){this.list=[],this.keys={}}destroy(){this.reset()}}class KA{get length(){return this._length}constructor(t){this._length=0,this.reset(),t&&(ln(t)?this.addList(t):this.add(t))}has(t){return!Kt(this.keys[t.innerId])}without(t){return Kt(this.keys[t.innerId])}sort(t){const{levels:n}=this;t?n.sort((i,s)=>s-i):n.sort((i,s)=>i-s)}addList(t){t.forEach(n=>{this.add(n)})}add(t){const{keys:n,levelMap:i}=this;n[t.innerId]||(n[t.innerId]=1,i[t.__level]?i[t.__level].push(t):(i[t.__level]=[t],this.levels.push(t.__level)),this._length++)}forEach(t){let n;this.levels.forEach(i=>{n=this.levelMap[i];for(let s=0,r=n.length;s<r;s++)t(n[s])})}reset(){this.levelMap={},this.keys={},this.levels=[],this._length=0}destroy(){this.levelMap=null}}function G(e,t,n,i){var s,r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}function bo(e){return nn(e,t=>({set(n){this.__setAttr(t,n),n&&(this.__.__useEffect=!0);const i=this.__layout;i.renderChanged||i.renderChange(),i.surfaceChange()}}))}function Da(e){return nn(e,t=>({set(n){this.__setAttr(t,n),this.__layout.boxChanged||this.__layout.boxChange(),this.__updateSize()}}))}function ZA(){return(e,t)=>{const n="_"+t;ma(e,t,{set(i){this.isLeafer&&(this[n]=i)},get(){return this.isApp?this.tree.zoomLayer:this.isLeafer?this[n]||this:this.leafer&&this.leafer.zoomLayer}})}}const Ey={},Zn={hasTransparent:function(e){if(!e||e.length===7||e.length===4)return!1;if(e==="transparent")return!0;const t=e[0];if(t==="#")switch(e.length){case 5:return e[4]!=="f"&&e[4]!=="F";case 9:return e[7]!=="f"&&e[7]!=="F"||e[8]!=="f"&&e[8]!=="F"}else if((t==="r"||t==="h")&&e[3]==="a"){const n=e.lastIndexOf(",");if(n>-1)return parseFloat(e.slice(n+1))<1}return!1}},Lg=ry,Dg={},fe={},Be={},sh={},vr={},wy={apply(){jn.need("filter")}},JA={},Ig={setStyleName:()=>jn.need("state"),set:()=>jn.need("state")},{parse:QA,objectToCanvasData:t1}=so,{stintSet:Eo}=De,{hasTransparent:Og}=Zn,Ug={originPaint:{}},Ng=Ge.get("UIData");let qs=class extends ty{get scale(){const{scaleX:t,scaleY:n}=this;return t!==n?{x:t,y:n}:t}get __strokeWidth(){return this.__getRealStrokeWidth()}get __maxStrokeWidth(){const t=this,n=t.__hasStrokeSides||t.strokeWidth;return t.__hasMultiStrokeStyle?Math.max(t.__hasMultiStrokeStyle,n):n}get __hasMultiPaint(){const t=this;return t.fill&&this.__useStroke||t.__isFills&&t.fill.length>1||t.__isStrokes&&t.stroke.length>1||t.__useEffect}get __clipAfterFill(){const t=this;return t.cornerRadius||t.innerShadow||t.__pathInputed}get __hasSurface(){return this.fill||this.stroke}get __autoWidth(){return this._width==null}get __autoHeight(){return this._height==null}get __autoSide(){return this._width==null||this._height==null}get __autoSize(){return this._width==null&&this._height==null}setVisible(t){this._visible=t;const{leafer:n}=this.__leaf;n&&(n.watcher.hasVisible=!0)}setWidth(t){t<0?(this._width=-t,this.__leaf.scaleX*=-1,Ng.warn("width < 0, instead -scaleX ",this)):this._width=t}setHeight(t){t<0?(this._height=-t,this.__leaf.scaleY*=-1,Ng.warn("height < 0, instead -scaleY",this)):this._height=t}setFill(t){this.__naturalWidth&&this.__removeNaturalSize(),tn(t)||!t?(Eo(this,"__isTransparentFill",Og(t)),this.__isFills&&this.__removePaint("fill",!0),this._fill=t):ze(t)&&this.__setPaint("fill",t)}setStroke(t){tn(t)||!t?(Eo(this,"__isTransparentStroke",Og(t)),this.__isStrokes&&this.__removePaint("stroke",!0),this._stroke=t):ze(t)&&this.__setPaint("stroke",t)}setPath(t){const n=tn(t);n||t&&ze(t[0])?(this.__setInput("path",t),this._path=n?QA(t,this.__useArrow):t1(t)):(this.__input&&this.__removeInput("path"),this._path=t)}setShadow(t){Gu(this,"shadow",t)}setInnerShadow(t){Gu(this,"innerShadow",t)}setFilter(t){Gu(this,"filter",t)}__computePaint(){const{fill:t,stroke:n}=this.__input;t&&fe.compute("fill",this.__leaf),n&&fe.compute("stroke",this.__leaf),this.__needComputePaint=void 0}__getRealStrokeWidth(t){let{strokeWidth:n,strokeScaleFixed:i}=this;if(t&&(t.strokeWidth&&(n=t.strokeWidth),Kt(t.strokeScaleFixed)||(i=t.strokeScaleFixed)),i){const{scaleX:s}=this.__leaf.getRenderScaleData(!0,i,!1);if(s!==1)return n*s}return n}__checkComplex(){const t=this;Eo(t,"__complex",t.__isFills||t.__isStrokes||t.cornerRadius||t.__useEffect)}__setPaint(t,n){this.__setInput(t,n);const i=this.__leaf.__layout;i.boxChanged||i.boxChange(),ln(n)&&!n.length?this.__removePaint(t):t==="fill"?(this.__isFills=!0,this._fill||(this._fill=Ug)):(this.__isStrokes=!0,this._stroke||(this._stroke=Ug))}__removePaint(t,n){n&&this.__removeInput(t),Be.recycleImage(t,this),t==="fill"?(Eo(this,"__isAlphaPixelFill",void 0),this._fill=this.__isFills=void 0):(Eo(this,"__isAlphaPixelStroke",void 0),Eo(this,"__hasMultiStrokeStyle",void 0),this._stroke=this.__isStrokes=void 0)}};function Gu(e,t,n){e.__setInput(t,n),ln(n)?(n.some(i=>i.visible===!1)&&(n=n.filter(i=>i.visible!==!1)),n.length||(n=void 0)):n=n&&n.visible!==!1?[n]:void 0,e["_"+t]=n}let Wh=class extends qs{},Ty=class extends Wh{get __boxStroke(){return!this.__pathInputed}get __drawAfterFill(){return this.__single||this.__clipAfterFill}get __clipAfterFill(){const t=this;return t.overflow!=="show"&&t.__leaf.children.length&&(t.__leaf.isOverflow||super.__clipAfterFill)}},e1=class extends Wh{__getInputData(t,n){const i=super.__getInputData(t,n);return wi.forEach(s=>delete i[s]),i}},n1=class extends Ty{},i1=class extends qs{get __usePathBox(){return this.points||this.__pathInputed}},jp=class extends qs{get __boxStroke(){return!this.__pathInputed}},s1=class extends qs{get __boxStroke(){return!this.__pathInputed}},r1=class extends qs{get __usePathBox(){return this.points||this.__pathInputed}},o1=class extends qs{get __boxStroke(){return!this.__pathInputed}},a1=class extends qs{get __pathInputed(){return 2}},l1=class extends Wh{};const c1={thin:100,"extra-light":200,light:300,normal:400,medium:500,"semi-bold":600,bold:700,"extra-bold":800,black:900};let h1=class extends qs{get __useNaturalRatio(){return!1}setFontWeight(t){tn(t)?(this.__setInput("fontWeight",t),t=c1[t]||400):this.__input&&this.__removeInput("fontWeight"),this._fontWeight=t}setBoxStyle(t){let n=this.__leaf,i=n.__box;if(t){const{boxStyle:s}=this;if(i)for(let a in s)i[a]=void 0;else i=n.__box=Ol.get("Rect",0);const r=n.__layout,o=i.__layout;s||(i.parent=n,i.__world=n.__world,o.boxBounds=r.boxBounds),i.set(t),o.strokeChanged&&r.strokeChange()}else i&&(n.__box=i.parent=null,i.destroy());this._boxStyle=t}__getInputData(t,n){const i=super.__getInputData(t,n);return i.textEditing&&delete i.textEditing,i}},u1=class extends jp{get __urlType(){return"image"}setUrl(t){this.__setImageFill(t),this._url=t}__setImageFill(t){this.fill=t?{type:this.__urlType,mode:"stretch",url:t}:void 0}__getData(){const t=super.__getData();return t.url&&delete t.fill,t}__getInputData(t,n){const i=super.__getInputData(t,n);return i.url&&delete i.fill,i}},d1=class extends jp{get __isCanvas(){return!0}get __drawAfterFill(){return!0}__getInputData(t,n){const i=super.__getInputData(t,n);return i.url=this.__leaf.canvas.toDataURL("image/png"),i}};const{max:Ia,add:Wu}=Il,f1={__updateStrokeSpread(){let e=0,t=0;const n=this.__,{strokeAlign:i,__maxStrokeWidth:s}=n,r=this.__box;if((n.stroke||n.hitStroke==="all")&&s&&i!=="inside"&&(t=e=i==="center"?s/2:s,!n.__boxStroke||n.__useArrow)){const o=n.__isLinePath?0:(n.strokeJoin==="miter"?10:1)*e,a=n.strokeCap==="none"?0:s;e+=Math.max(o,a)}return n.__useArrow&&(e+=5*s),r&&(e=Ia(e,r.__layout.strokeSpread=r.__updateStrokeSpread()),t=Math.max(t,r.__layout.strokeBoxSpread)),this.__layout.strokeBoxSpread=t,e},__updateRenderSpread(){let e=0;const{shadow:t,innerShadow:n,blur:i,backgroundBlur:s,filter:r,renderSpread:o}=this.__,{strokeSpread:a}=this.__layout,l=this.__box;t&&(e=vr.getShadowRenderSpread(this,t)),i&&(e=Ia(e,i)),r&&(e=Wu(e,wy.getSpread(r))),o&&(e=Wu(e,o)),a&&(e=Wu(e,a));let c=e;return n&&(c=Ia(c,vr.getInnerShadowSpread(this,n))),s&&(c=Ia(c,s)),this.__layout.renderShapeSpread=c,l?Ia(l.__updateRenderSpread(),e):e}},{stintSet:Xu}=De,p1={__updateChange(){const e=this.__;if(e.__useStroke){const t=e.__useStroke=!(!e.stroke||!e.strokeWidth);Xu(this.__world,"half",t&&e.strokeAlign==="center"&&e.strokeWidth%2),Xu(e,"__fillAfterStroke",t&&e.strokeAlign==="outside"&&e.fill&&!e.__isTransparentFill)}if(e.__useEffect){const{shadow:t,fill:n,stroke:i}=e,s=e.innerShadow||e.blur||e.backgroundBlur||e.filter;Xu(e,"__isFastShadow",t&&!s&&t.length<2&&!t[0].spread&&!vr.isTransformShadow(t[0])&&n&&!e.__isTransparentFill&&!(ln(n)&&n.length>1)&&(this.useFastShadow||!i||i&&e.strokeAlign==="inside")),e.__useEffect=!(!t&&!s)}e.__checkSingle(),e.__checkComplex()},__drawFast(e,t){Fg(this,e,t)},__draw(e,t,n){const i=this.__;if(i.__complex){i.__needComputePaint&&i.__computePaint();const{fill:s,stroke:r,__drawAfterFill:o,__fillAfterStroke:a,__isFastShadow:l}=i;if(this.__drawRenderPath(e),i.__useEffect&&!l){const c=fe.shape(this,e,t);this.__nowWorld=this.__getNowWorld(t);const{shadow:h,innerShadow:d,filter:f}=i;h&&vr.shadow(this,e,c),a&&(i.__isStrokes?fe.strokes(r,this,e,t):fe.stroke(r,this,e,t)),s&&(i.__isFills?fe.fills(s,this,e,t):fe.fill(s,this,e,t)),o&&this.__drawAfterFill(e,t),d&&vr.innerShadow(this,e,c),r&&!a&&(i.__isStrokes?fe.strokes(r,this,e,t):fe.stroke(r,this,e,t)),f&&wy.apply(f,this,this.__nowWorld,e,n,c),c.worldCanvas&&c.worldCanvas.recycle(),c.canvas.recycle()}else{if(a&&(i.__isStrokes?fe.strokes(r,this,e,t):fe.stroke(r,this,e,t)),l){const c=i.shadow[0],{scaleX:h,scaleY:d}=this.getRenderScaleData(!0,c.scaleFixed);e.save(),e.setWorldShadow(c.x*h,c.y*d,c.blur*h,Zn.string(c.color))}s&&(i.__isFills?fe.fills(s,this,e,t):fe.fill(s,this,e,t)),l&&e.restore(),o&&this.__drawAfterFill(e,t),r&&!a&&(i.__isStrokes?fe.strokes(r,this,e,t):fe.stroke(r,this,e,t))}}else i.__pathForRender?Fg(this,e,t):this.__drawFast(e,t)},__drawShape(e,t){this.__drawRenderPath(e);const n=this.__,{fill:i,stroke:s}=n;i&&!t.ignoreFill&&(n.__isAlphaPixelFill?fe.fills(i,this,e,t):fe.fill("#000000",this,e,t)),n.__isCanvas&&this.__drawAfterFill(e,t),s&&!t.ignoreStroke&&(n.__isAlphaPixelStroke?fe.strokes(s,this,e,t):fe.stroke("#000000",this,e,t))},__drawAfterFill(e,t){this.__.__clipAfterFill?(e.save(),e.clipUI(this),this.__drawContent(e,t),e.restore()):this.__drawContent(e,t)}};function Fg(e,t,n){const{fill:i,stroke:s,__drawAfterFill:r,__fillAfterStroke:o}=e.__;e.__drawRenderPath(t),o&&fe.stroke(s,e,t,n),i&&fe.fill(i,e,t,n),r&&e.__drawAfterFill(t,n),s&&!o&&fe.stroke(s,e,t,n)}const _1={__drawFast(e,t){let{x:n,y:i,width:s,height:r}=this.__layout.boxBounds;const{fill:o,stroke:a,__drawAfterFill:l}=this.__;if(o&&(e.fillStyle=o,e.fillRect(n,i,s,r)),l&&this.__drawAfterFill(e,t),a){const{strokeAlign:c,__strokeWidth:h}=this.__;if(!h)return;e.setStroke(a,h,this.__);const d=h/2;switch(c){case"center":e.strokeRect(0,0,s,r);break;case"inside":s-=h,r-=h,s<0||r<0?(e.save(),this.__clip(e,t),e.strokeRect(n+d,i+d,s,r),e.restore()):e.strokeRect(n+d,i+d,s,r);break;case"outside":e.strokeRect(n-d,i-d,s+h,r+h)}}}};var vf;let Mt=vf=class extends ha{get app(){return this.leafer&&this.leafer.app}get isFrame(){return!1}set strokeWidthFixed(e){this.strokeScaleFixed=e}get strokeWidthFixed(){return this.strokeScaleFixed}set scale(e){wn.assignScale(this,e)}get scale(){return this.__.scale}get isAutoWidth(){const e=this.__;return e.__autoWidth||e.autoWidth}get isAutoHeight(){const e=this.__;return e.__autoHeight||e.autoHeight}get pen(){const{path:e}=this.__;return Ra.set(this.path=e||[]),e||this.__drawPathByBox(Ra),Ra}reset(e){}set(e,t){e&&Object.assign(this,e)}get(e){return tn(e)?this.__.__getInput(e):this.__.__getInputData(e)}createProxyData(){}clearProxyData(){}find(e,t){return jn.need("find")}findTag(e){return this.find({tag:e})}findOne(e,t){return jn.need("find")}findId(e){return this.findOne({id:e})}getPath(e,t){this.__layout.update();let n=t?this.__.__pathForRender:this.__.path;return n||(Ra.set(n=[]),this.__drawPathByBox(Ra,!t)),e?so.toCanvasData(n,!0):n}getPathString(e,t,n){return so.stringify(this.getPath(e,t),n)}asPath(e,t){this.path=this.getPath(e,t)}load(){this.__.__computePaint()}__onUpdateSize(){if(this.__.__input){const e=this.__;!e.lazy||this.__inLazyBounds||JA.running?e.__computePaint():e.__needComputePaint=!0}}__updateRenderPath(e){const t=this.__;t.path?(t.__pathForRender=t.cornerRadius||t.path.radius?fT.smooth(t.path,t.cornerRadius,t.cornerSmoothing):t.path,t.__useArrow&&Dg.addArrows(this,e)):t.__pathForRender&&(t.__pathForRender=void 0)}__drawRenderPath(e){const t=this.__;e.beginPath(),t.__useArrow&&Dg.updateArrow(this),this.__drawPathByData(e,t.__pathForRender)}__drawPath(e){e.beginPath(),this.__drawPathByData(e,this.__.path,!0)}__drawPathByData(e,t,n){t?Yw.drawPathByData(e,t):this.__drawPathByBox(e,n)}__drawPathByBox(e,t){const{x:n,y:i,width:s,height:r}=this.__layout.boxBounds;if(this.__.cornerRadius&&!t){const{cornerRadius:o}=this.__;e.roundRect(n,i,s,r,je(o)?[o]:o)}else e.rect(n,i,s,r);e.closePath()}drawImagePlaceholder(e,t,n){fe.fill(this.__.placeholderColor,this,t,n)}animate(e,t,n,i){return this.set(e),jn.need("animate")}killAnimate(e,t){}export(e,t){return jn.need("export")}syncExport(e,t){return jn.need("export")}clone(e){const t=De.clone(this.toJSON());return e&&Object.assign(t,e),vf.one(t)}static one(e,t,n,i,s){return Ol.get(e.tag||this.prototype.__tag,e,t,n,i,s)}static registerUI(){On()(this)}static registerData(e){In(e)(this.prototype)}static setEditConfig(e){}static setEditOuter(e){}static setEditInner(e){}destroy(){this.__.__willDestroy=!0,this.fill=this.stroke=null,this.__animate&&this.killAnimate(),super.destroy()}};G([In(qs)],Mt.prototype,"__",void 0),G([ZA()],Mt.prototype,"zoomLayer",void 0),G([Yn("")],Mt.prototype,"id",void 0),G([Yn("")],Mt.prototype,"name",void 0),G([Yn("")],Mt.prototype,"className",void 0),G([_r("pass-through")],Mt.prototype,"blendMode",void 0),G([wT(1)],Mt.prototype,"opacity",void 0),G([TT(!0)],Mt.prototype,"visible",void 0),G([_r(!1)],Mt.prototype,"locked",void 0),G([og(!1)],Mt.prototype,"dim",void 0),G([og(!1)],Mt.prototype,"dimskip",void 0),G([AT(0)],Mt.prototype,"zIndex",void 0),G([RT(!1)],Mt.prototype,"mask",void 0),G([CT(!1)],Mt.prototype,"eraser",void 0),G([fc(0,!0)],Mt.prototype,"x",void 0),G([fc(0,!0)],Mt.prototype,"y",void 0),G([de(100,!0)],Mt.prototype,"width",void 0),G([de(100,!0)],Mt.prototype,"height",void 0),G([rg(1,!0)],Mt.prototype,"scaleX",void 0),G([rg(1,!0)],Mt.prototype,"scaleY",void 0),G([Du(0,!0)],Mt.prototype,"rotation",void 0),G([Du(0,!0)],Mt.prototype,"skewX",void 0),G([Du(0,!0)],Mt.prototype,"skewY",void 0),G([fc(0,!0)],Mt.prototype,"offsetX",void 0),G([fc(0,!0)],Mt.prototype,"offsetY",void 0),G([ig(0,!0)],Mt.prototype,"scrollX",void 0),G([ig(0,!0)],Mt.prototype,"scrollY",void 0),G([sg()],Mt.prototype,"origin",void 0),G([sg()],Mt.prototype,"around",void 0),G([Yn(!1)],Mt.prototype,"lazy",void 0),G([MT(1)],Mt.prototype,"pixelRatio",void 0),G([qp(0)],Mt.prototype,"renderSpread",void 0),G([bT()],Mt.prototype,"path",void 0),G([Mn()],Mt.prototype,"windingRule",void 0),G([Mn(!0)],Mt.prototype,"closed",void 0),G([de(0)],Mt.prototype,"padding",void 0),G([de(!1)],Mt.prototype,"lockRatio",void 0),G([de()],Mt.prototype,"widthRange",void 0),G([de()],Mt.prototype,"heightRange",void 0),G([Yn(!1)],Mt.prototype,"draggable",void 0),G([Yn()],Mt.prototype,"dragBounds",void 0),G([Yn("auto")],Mt.prototype,"dragBoundsType",void 0),G([Yn(!1)],Mt.prototype,"editable",void 0),G([Xr(!0)],Mt.prototype,"hittable",void 0),G([Xr("path")],Mt.prototype,"hitFill",void 0),G([Gi("path")],Mt.prototype,"hitStroke",void 0),G([Xr(!1)],Mt.prototype,"hitBox",void 0),G([Xr(!0)],Mt.prototype,"hitChildren",void 0),G([Xr(!0)],Mt.prototype,"hitSelf",void 0),G([Xr()],Mt.prototype,"hitRadius",void 0),G([PT("")],Mt.prototype,"cursor",void 0),G([_r()],Mt.prototype,"fill",void 0),G([Gi(void 0,!0)],Mt.prototype,"stroke",void 0),G([Gi("inside")],Mt.prototype,"strokeAlign",void 0),G([Gi(1,!0)],Mt.prototype,"strokeWidth",void 0),G([Gi(!1)],Mt.prototype,"strokeScaleFixed",void 0),G([Gi("none")],Mt.prototype,"strokeCap",void 0),G([Gi("miter")],Mt.prototype,"strokeJoin",void 0),G([Gi()],Mt.prototype,"dashPattern",void 0),G([Gi(0)],Mt.prototype,"dashOffset",void 0),G([Gi(10)],Mt.prototype,"miterLimit",void 0),G([Mn(0)],Mt.prototype,"cornerRadius",void 0),G([Mn()],Mt.prototype,"cornerSmoothing",void 0),G([bo()],Mt.prototype,"shadow",void 0),G([bo()],Mt.prototype,"innerShadow",void 0),G([bo()],Mt.prototype,"blur",void 0),G([bo()],Mt.prototype,"backgroundBlur",void 0),G([bo()],Mt.prototype,"grayscale",void 0),G([bo()],Mt.prototype,"filter",void 0),G([_r()],Mt.prototype,"placeholderColor",void 0),G([Yn(100)],Mt.prototype,"placeholderDelay",void 0),G([Yn({})],Mt.prototype,"data",void 0),G([Rs(ha.prototype.reset)],Mt.prototype,"reset",null),Mt=vf=G([Ti(f1),Ti(p1),Vh()],Mt);let _i=class extends Mt{get __tag(){return"Group"}get isBranch(){return!0}reset(t){this.__setBranch(),super.reset(t)}__setBranch(){this.children||(this.children=[])}set(t,n){if(t)if(t.children){const{children:i}=t;delete t.children,this.children?this.clear():this.__setBranch(),super.set(t,n),i.forEach(s=>this.add(s)),t.children=i}else super.set(t,n)}toJSON(t){const n=super.toJSON(t);if(!this.childlessJSON){const i=n.children=[];this.children.forEach(s=>s.skipJSON||i.push(s.toJSON(t)))}return n}pick(t,n){}addAt(t,n){this.add(t,n)}addAfter(t,n){this.add(t,this.children.indexOf(n)+1)}addBefore(t,n){this.add(t,this.children.indexOf(n))}add(t,n){}addMany(...t){}remove(t,n){}removeAll(t){}clear(){}};var rh;G([In(Wh)],_i.prototype,"__",void 0),G([de(0)],_i.prototype,"width",void 0),G([de(0)],_i.prototype,"height",void 0),_i=G([Ti(xf),On()],_i);const m1=Ge.get("Leafer");let cr=rh=class extends _i{get __tag(){return"Leafer"}get isApp(){return!1}get app(){return this.parent||this}get isLeafer(){return!0}get imageReady(){return this.viewReady&&dr.isComplete}get layoutLocked(){return!this.layouter.running}get view(){return this.canvas&&this.canvas.view}get FPS(){return this.renderer?this.renderer.FPS:60}get cursorPoint(){return this.interaction&&this.interaction.hoverData||{x:this.width/2,y:this.height/2}}get clientBounds(){return this.canvas&&this.canvas.getClientBounds(!0)||ey()}constructor(e,t){super(t),this.config={start:!0,hittable:!0,smooth:!0,lazySpeard:100},this.leafs=0,this.__eventIds=[],this.__controllers=[],this.__readyWait=[],this.__viewReadyWait=[],this.__viewCompletedWait=[],this.__nextRenderWait=[],this.userConfig=e,e&&(e.view||e.width)&&this.init(e),rh.list.add(this)}init(e,t){if(this.canvas)return;let n;const{config:i}=this;this.__setLeafer(this),t&&(this.parentApp=t,this.__bindApp(t),n=t.running),e&&(this.parent=t,this.initType(e.type),this.parent=void 0,De.assign(i,e));const s=this.canvas=Ke.canvas(i);this.__controllers.push(this.renderer=Ke.renderer(this,s,i),this.watcher=Ke.watcher(this,i),this.layouter=Ke.layouter(this,i)),this.isApp&&this.__setApp(),this.__checkAutoLayout(),t||(this.selector=Ke.selector(this),this.interaction=Ke.interaction(this,s,this.selector,i),this.interaction&&(this.__controllers.unshift(this.interaction),this.hitCanvasManager=Ke.hitCanvasManager()),this.canvasManager=new ay,n=i.start),this.hittable=i.hittable,this.fill=i.fill,this.canvasManager.add(s),this.__listenEvents(),n&&(this.__startTimer=setTimeout(this.start.bind(this))),La.run(this.__initWait),this.onInit()}onInit(){}initType(e){}set(e,t){this.waitInit(()=>{super.set(e,t)})}start(){clearTimeout(this.__startTimer),!this.running&&this.canvas&&(this.running=!0,this.ready?this.emitLeafer(Se.RESTART):this.emitLeafer(Se.START),this.__controllers.forEach(e=>e.start()),this.isApp||this.renderer.render())}stop(){clearTimeout(this.__startTimer),this.running&&this.canvas&&(this.__controllers.forEach(e=>e.stop()),this.running=!1,this.emitLeafer(Se.STOP))}unlockLayout(e=!0){this.layouter.start(),e&&this.updateLayout()}lockLayout(e=!0){e&&this.updateLayout(),this.layouter.stop()}resize(e){const t=De.copyAttrs({},e,wi);Object.keys(t).forEach(n=>this[n]=t[n])}forceRender(e,t){const{renderer:n}=this;n&&(n.addBlock(e?new cn(e):this.canvas.bounds),this.viewReady&&(t?n.render():n.update()))}requestRender(e=!1){this.renderer&&this.renderer.update(e)}updateCursor(e){const t=this.interaction;t&&(e?t.setCursor(e):t.updateCursor())}updateLazyBounds(){this.lazyBounds=this.canvas.bounds.clone().spread(this.config.lazySpeard)}__doResize(e){const{canvas:t}=this;if(!t||t.isSameSize(e))return;const n=De.copyAttrs({},this.canvas,wi);t.resize(e),this.updateLazyBounds(),this.__onResize(new co(e,n))}__onResize(e){this.emitEvent(e),De.copyAttrs(this.__,e,wi),setTimeout(()=>{this.canvasManager&&this.canvasManager.clearRecycled()},0)}__setApp(){}__bindApp(e){this.selector=e.selector,this.interaction=e.interaction,this.canvasManager=e.canvasManager,this.hitCanvasManager=e.hitCanvasManager}__setLeafer(e){this.leafer=e,this.__level=1}__checkAutoLayout(){const{config:e,parentApp:t}=this;t||(e.width&&e.height||(this.autoLayout=new pE(e)),this.canvas.startAutoLayout(this.autoLayout,this.__onResize.bind(this)))}__setAttr(e,t){return this.canvas&&(wi.includes(e)?this.__changeCanvasSize(e,t):e==="fill"?this.__changeFill(t):e==="hittable"?this.parent||(this.canvas.hittable=t):e==="zIndex"?(this.canvas.zIndex=t,setTimeout(()=>this.parent&&this.parent.__updateSortChildren())):e==="mode"&&this.emit(Se.UPDATE_MODE,{mode:t})),super.__setAttr(e,t)}__getAttr(e){return this.canvas&&wi.includes(e)?this.canvas[e]:super.__getAttr(e)}__changeCanvasSize(e,t){const{config:n,canvas:i}=this,s=De.copyAttrs({},i,wi);s[e]=n[e]=t,n.width&&n.height?i.stopAutoLayout():this.__checkAutoLayout(),this.__doResize(s)}__changeFill(e){this.config.fill=e,this.canvas.allowBackgroundColor?this.canvas.backgroundColor=e:this.forceRender()}__onCreated(){this.created=!0}__onReady(){this.ready=!0,this.emitLeafer(Se.BEFORE_READY),this.emitLeafer(Se.READY),this.emitLeafer(Se.AFTER_READY),La.run(this.__readyWait)}__onViewReady(){this.viewReady||(this.viewReady=!0,this.emitLeafer(Se.VIEW_READY),La.run(this.__viewReadyWait))}__onLayoutEnd(){const{grow:e,width:t,height:n}=this.config;if(e){let{width:i,height:s,pixelRatio:r}=this;const o=e==="box"?this.worldBoxBounds:this.__world;t||(i=Math.max(1,o.x+o.width)),n||(s=Math.max(1,o.y+o.height)),this.__doResize({width:i,height:s,pixelRatio:r})}this.ready||this.__onReady()}__onNextRender(){if(this.viewReady){La.run(this.__nextRenderWait);const{imageReady:e}=this;e&&!this.viewCompleted&&this.__checkViewCompleted(),e||(this.viewCompleted=!1,this.requestRender())}else this.requestRender()}__checkViewCompleted(e=!0){this.nextRender(()=>{this.imageReady&&(e&&this.emitLeafer(Se.VIEW_COMPLETED),La.run(this.__viewCompletedWait),this.viewCompleted=!0)})}__onWatchData(){this.watcher.childrenChanged&&this.interaction&&this.nextRender(()=>this.interaction.updateCursor())}waitInit(e,t){t&&(e=e.bind(t)),this.__initWait||(this.__initWait=[]),this.canvas?e():this.__initWait.push(e)}waitReady(e,t){t&&(e=e.bind(t)),this.ready?e():this.__readyWait.push(e)}waitViewReady(e,t){t&&(e=e.bind(t)),this.viewReady?e():this.__viewReadyWait.push(e)}waitViewCompleted(e,t){t&&(e=e.bind(t)),this.__viewCompletedWait.push(e),this.viewCompleted?this.__checkViewCompleted(!1):this.running||this.start()}nextRender(e,t,n){t&&(e=e.bind(t));const i=this.__nextRenderWait;if(n){for(let s=0;s<i.length;s++)if(i[s]===e){i.splice(s,1);break}}else i.push(e);this.requestRender()}zoom(e,t,n,i){return jn.need("view")}getValidMove(e,t,n){return{x:e,y:t}}getValidScale(e){return e}getWorldPointByClient(e,t){return this.interaction&&this.interaction.getLocal(e,t)}getPagePointByClient(e,t){return this.getPagePoint(this.getWorldPointByClient(e,t))}getClientPointByWorld(e){const{x:t,y:n}=this.clientBounds;return{x:t+e.x,y:n+e.y}}updateClientBounds(){this.canvas&&this.canvas.updateClientBounds()}receiveEvent(e){}emitLeafer(e){this.emitEvent(new Se(e,this))}__listenEvents(){const e=Ri.start("FirstCreate "+this.innerName);this.once([[Se.START,()=>Ri.end(e)],[Ve.START,this.updateLazyBounds,this],[Re.START,this.__onCreated,this],[Re.END,this.__onViewReady,this]]),this.__eventIds.push(this.on_([[xr.DATA,this.__onWatchData,this],[Ve.END,this.__onLayoutEnd,this],[Re.NEXT,this.__onNextRender,this]]))}__removeListenEvents(){this.off_(this.__eventIds)}destroy(e){const t=()=>{if(!this.destroyed){rh.list.remove(this);try{this.stop(),this.emitLeafer(Se.END),this.__removeListenEvents(),this.__controllers.forEach(n=>!(this.parent&&n===this.interaction)&&n.destroy()),this.__controllers.length=0,this.parent||(this.selector&&this.selector.destroy(),this.hitCanvasManager&&this.hitCanvasManager.destroy(),this.canvasManager&&this.canvasManager.destroy()),this.canvas&&this.canvas.destroy(),this.config.view=this.parentApp=null,this.userConfig&&(this.userConfig.view=null),super.destroy(),setTimeout(()=>{Ui.clearRecycled()},100)}catch(n){m1.error(n)}}};e?t():setTimeout(t)}};cr.list=new Ye,G([In(e1)],cr.prototype,"__",void 0),G([de()],cr.prototype,"pixelRatio",void 0),G([Yn("normal")],cr.prototype,"mode",void 0),cr=rh=G([On()],cr);let Ci=class extends Mt{get __tag(){return"Rect"}};G([In(jp)],Ci.prototype,"__",void 0),Ci=G([Ti(_1),Vh(),On()],Ci);const{add:Bg,includes:g1,scroll:x1}=Ut,Ur=Ci.prototype,v1=_i.prototype;let yn=class extends _i{get __tag(){return"Box"}get isBranchLeaf(){return!0}get __useSelfBox(){return this.pathInputed}constructor(t){super(t),this.__layout.renderChanged||this.__layout.renderChange()}__updateStrokeSpread(){return 0}__updateRectRenderSpread(){return 0}__updateRenderSpread(){return this.__updateRectRenderSpread()||-1}__updateRectBoxBounds(){}__updateBoxBounds(t){if(this.children.length&&!this.__useSelfBox){const n=this.__;if(n.__autoSide){n.__hasSurface&&this.__extraUpdate(),super.__updateBoxBounds();const{boxBounds:i}=this.__layout;n.__autoSize||(n.__autoWidth?(i.width+=i.x,i.x=0,i.height=n.height,i.y=0):(i.height+=i.y,i.y=0,i.width=n.width,i.x=0)),this.__updateNaturalSize()}else this.__updateRectBoxBounds()}else this.__updateRectBoxBounds()}__updateStrokeBounds(){}__updateRenderBounds(){let t,n;if(this.children.length){const i=this.__,s=this.__layout,{renderBounds:r,boxBounds:o}=s,{overflow:a}=i,l=s.childrenRenderBounds||(s.childrenRenderBounds=ey());super.__updateRenderBounds(l),(n=a&&a.includes("scroll"))&&(Bg(l,o),x1(l,i)),this.__updateRectRenderBounds(),t=!g1(o,l),t&&a==="show"&&Bg(r,l)}else this.__updateRectRenderBounds();De.stintSet(this,"isOverflow",t),this.__checkScroll(n)}__updateRectRenderBounds(){}__checkScroll(t){}__updateRectChange(){}__updateChange(){super.__updateChange(),this.__updateRectChange()}__renderRect(t,n){}__renderGroup(t,n){}__render(t,n){this.__.__drawAfterFill?this.__renderRect(t,n):(this.__renderRect(t,n),this.children.length&&this.__renderGroup(t,n)),this.hasScroller&&this.scroller.__render(t,n)}__drawContent(t,n){this.__renderGroup(t,n),(this.__.__useStroke||this.__.__useEffect)&&(t.setWorld(this.__nowWorld),this.__drawRenderPath(t))}};G([In(Ty)],yn.prototype,"__",void 0),G([de(100)],yn.prototype,"width",void 0),G([de(100)],yn.prototype,"height",void 0),G([Yn(!1)],yn.prototype,"resizeChildren",void 0),G([qp("show")],yn.prototype,"overflow",void 0),G([Rs(Ur.__updateStrokeSpread)],yn.prototype,"__updateStrokeSpread",null),G([Rs(Ur.__updateRenderSpread)],yn.prototype,"__updateRectRenderSpread",null),G([Rs(Ur.__updateBoxBounds)],yn.prototype,"__updateRectBoxBounds",null),G([Rs(Ur.__updateStrokeBounds)],yn.prototype,"__updateStrokeBounds",null),G([Rs(Ur.__updateRenderBounds)],yn.prototype,"__updateRectRenderBounds",null),G([Rs(Ur.__updateChange)],yn.prototype,"__updateRectChange",null),G([Rs(Ur.__render)],yn.prototype,"__renderRect",null),G([Rs(v1.__render)],yn.prototype,"__renderGroup",null),yn=G([Vh(),On()],yn);let Oa=class extends yn{get __tag(){return"Frame"}get isFrame(){return!0}};G([In(n1)],Oa.prototype,"__",void 0),G([_r("#FFFFFF")],Oa.prototype,"fill",void 0),G([qp("hide")],Oa.prototype,"overflow",void 0),Oa=G([On()],Oa);const{moveTo:kg,closePath:y1,ellipse:wo}=lo;let $r=class extends Mt{get __tag(){return"Ellipse"}__updatePath(){const t=this.__,{width:n,height:i,innerRadius:s,startAngle:r,endAngle:o}=t,a=n/2,l=i/2,c=t.path=[];let h;s?r||o?(s<1?wo(c,a,l,a*s,l*s,0,r,o,!1):h=!0,wo(c,a,l,a,l,0,o,r,!0)):(s<1&&(wo(c,a,l,a*s,l*s),kg(c,n,l)),wo(c,a,l,a,l,0,360,0,!0)):r||o?(kg(c,a,l),wo(c,a,l,a,l,0,r,o,!1)):wo(c,a,l,a,l),h||y1(c),(Dt.ellipseToCurve||t.__useArrow||t.cornerRadius)&&(t.path=this.getPath(!0))}};G([In(s1)],$r.prototype,"__",void 0),G([Mn(0)],$r.prototype,"innerRadius",void 0),G([Mn(0)],$r.prototype,"startAngle",void 0),G([Mn(0)],$r.prototype,"endAngle",void 0),$r=G([On()],$r);const{sin:zg,cos:Hg,PI:S1}=Math,{moveTo:Vg,lineTo:M1,closePath:b1,drawPoints:E1}=lo;let Nr=class extends Mt{get __tag(){return"Polygon"}__updatePath(){const t=this.__,n=t.path=[];if(t.points)E1(n,t.points,t.curve,t.closed);else{const{width:i,height:s,sides:r,startAngle:o}=t,a=i/2,l=s/2;let c,h=0;o?(h=o*Me,Vg(n,a+a*zg(h),l-l*Hg(h))):Vg(n,a,0);for(let d=1;d<r;d++)c=2*d*S1/r+h,M1(n,a+a*zg(c),l-l*Hg(c));b1(n)}}};G([In(r1)],Nr.prototype,"__",void 0),G([Mn(3)],Nr.prototype,"sides",void 0),G([Mn(0)],Nr.prototype,"startAngle",void 0),G([Mn()],Nr.prototype,"points",void 0),G([Mn(0)],Nr.prototype,"curve",void 0),Nr=G([Vh(),On()],Nr);const{sin:Gg,cos:Wg,PI:w1}=Math,{moveTo:Xg,lineTo:T1,closePath:A1}=lo;let To=class extends Mt{get __tag(){return"Star"}__updatePath(){const{width:t,height:n,corners:i,innerRadius:s,startAngle:r}=this.__,o=t/2,a=n/2,l=this.__.path=[];let c,h=0;r?(h=r*Me,Xg(l,o+o*Gg(h),a-a*Wg(h))):Xg(l,o,0);for(let d=1;d<2*i;d++)c=d*w1/i+h,T1(l,o+(d%2==0?o:o*s)*Gg(c),a-(d%2==0?a:a*s)*Wg(c));A1(l)}};G([In(o1)],To.prototype,"__",void 0),G([Mn(5)],To.prototype,"corners",void 0),G([Mn(.382)],To.prototype,"innerRadius",void 0),G([Mn(0)],To.prototype,"startAngle",void 0),To=G([On()],To);const{moveTo:R1,lineTo:C1,drawPoints:P1}=lo,{rotate:L1,getAngle:D1,getDistance:I1,defaultPoint:$g}=le;let Yi=class extends Mt{get __tag(){return"Line"}get toPoint(){const{width:t,rotation:n}=this.__,i=oE();return t&&(i.x=t),n&&L1(i,n),i}set toPoint(t){this.width=I1($g,t),this.rotation=D1($g,t),this.height&&(this.height=0)}__updatePath(){const t=this.__,n=t.path=[];t.points?P1(n,t.points,t.curve,t.closed):(R1(n,0,0),C1(n,this.width,0))}};G([In(i1)],Yi.prototype,"__",void 0),G([Hh("center")],Yi.prototype,"strokeAlign",void 0),G([de(0)],Yi.prototype,"height",void 0),G([Mn()],Yi.prototype,"points",void 0),G([Mn(0)],Yi.prototype,"curve",void 0),G([Mn(!1)],Yi.prototype,"closed",void 0),Yi=G([On()],Yi);let mc=class extends Ci{get __tag(){return"Image"}get ready(){const{image:t}=this;return t&&t.ready}get image(){const{fill:t}=this.__;return ln(t)&&t[0].image}};G([In(u1)],mc.prototype,"__",void 0),G([de("")],mc.prototype,"url",void 0),mc=G([On()],mc);let gs=class extends Ci{get __tag(){return"Canvas"}get context(){return this.canvas.context}get ready(){return!this.url}constructor(t){super(t),this.canvas=Ke.canvas(this.__),t&&t.url&&this.drawImage(t.url)}drawImage(t){new vy({url:t}).load(n=>{this.context.drawImage(n.view,0,0),this.url=void 0,this.paint(),this.emitEvent(new Fs(Fs.LOADED,{image:n}))})}draw(t,n,i,s){const r=new io(t.worldTransform).invert(),o=new io;n&&o.translate(n.x,n.y),i&&(je(i)?o.scale(i):o.scale(i.x,i.y)),s&&o.rotate(s),r.multiplyParent(o),t.__render(this.canvas,{matrix:r.withScale()}),this.paint()}paint(){this.forceRender()}__drawContent(t,n){const{width:i,height:s}=this.__,{view:r}=this.canvas;t.drawImage(r,0,0,r.width,r.height,0,0,i,s)}__updateSize(){const{canvas:t}=this;if(t){const{smooth:n,safeResize:i}=this.__;t.resize(this.__,i),t.smooth!==n&&(t.smooth=n)}}destroy(){this.canvas&&(this.canvas.destroy(),this.canvas=null),super.destroy()}};G([In(d1)],gs.prototype,"__",void 0),G([Da(100)],gs.prototype,"width",void 0),G([Da(100)],gs.prototype,"height",void 0),G([Da(1)],gs.prototype,"pixelRatio",void 0),G([Da(!0)],gs.prototype,"smooth",void 0),G([Yn(!1)],gs.prototype,"safeResize",void 0),G([Da()],gs.prototype,"contextSettings",void 0),gs=G([On()],gs);const{copyAndSpread:O1,includes:U1,setList:N1}=Ut,{stintSet:$u}=De;let ye=class extends Mt{get __tag(){return"Text"}get textDrawData(){return this.updateLayout(),this.__.__textDrawData}__updateTextDrawData(){const t=this.__,{lineHeight:n,letterSpacing:i,fontFamily:s,fontSize:r,fontWeight:o,italic:a,textCase:l,textOverflow:c,padding:h,width:d,height:f}=t;t.__lineHeight=Lg.number(n,r),t.__letterSpacing=Lg.number(i,r),t.__baseLine=t.__lineHeight-(t.__lineHeight-.7*r)/2,t.__font=`${a?"italic ":""}${l==="small-caps"?"small-caps ":""}${o!=="normal"?o+" ":""}${r||12}px ${s||"caption"}`,$u(t,"__padding",h&&wn.fourNumber(h)),$u(t,"__clipText",c!=="show"&&!t.__autoSize),$u(t,"__isCharMode",d||f||t.__letterSpacing||l!=="none"),t.__textDrawData=Ey.getDrawData((t.__isPlacehold=t.placeholder&&t.text==="")?t.placeholder:t.text,this.__)}__updateBoxBounds(){const t=this.__,n=this.__layout,{fontSize:i,italic:s,padding:r,__autoWidth:o,__autoHeight:a}=t;this.__updateTextDrawData();const{bounds:l}=t.__textDrawData,c=n.boxBounds;if(n.contentBounds=l,t.__lineHeight<i&&(n.renderChanged=!0),o||a){if(c.x=o?l.x:0,c.y=a?l.y:0,c.width=o?l.width:t.width,c.height=a?l.height:t.height,r){const[h,d,f,u]=t.__padding;o&&(c.x-=u,c.width+=d+u),a&&(c.y-=h,c.height+=f+h)}this.__updateNaturalSize()}else super.__updateBoxBounds();s&&(c.width+=.16*i),De.stintSet(this,"isOverflow",!U1(c,l)),this.isOverflow?(N1(t.__textBoxBounds={},[c,l]),n.renderChanged=!0):t.__textBoxBounds=c}__updateRenderSpread(){let t=super.__updateRenderSpread();t||(t=this.isOverflow?1:0);const{__lineHeight:n,fontSize:i}=this.__;return n<i&&(t=Il.max(t,(i-n)/2)),t}__updateRenderBounds(){const{renderBounds:t,renderSpread:n}=this.__layout;O1(t,this.__.__textBoxBounds,n),this.__box&&(this.__box.__layout.renderBounds=t)}__updateChange(){super.__updateChange();const t=this.__box;t&&(t.__onUpdateSize(),t.__updateChange())}__drawRenderPath(t){t.font=this.__.__font}__draw(t,n,i){const s=this.__box;s&&(s.__nowWorld=this.__nowWorld,s.__draw(t,n,i)),this.textEditing&&!n.exporting||super.__draw(t,n,i)}__drawShape(t,n){n.shape&&this.__box&&this.__box.__drawShape(t,n),super.__drawShape(t,n)}destroy(){this.boxStyle&&(this.boxStyle=null),super.destroy()}};G([In(h1)],ye.prototype,"__",void 0),G([de(0)],ye.prototype,"width",void 0),G([de(0)],ye.prototype,"height",void 0),G([_r()],ye.prototype,"boxStyle",void 0),G([Yn(!1)],ye.prototype,"resizeFontSize",void 0),G([_r("#000000")],ye.prototype,"fill",void 0),G([Hh("outside")],ye.prototype,"strokeAlign",void 0),G([Xr("all")],ye.prototype,"hitFill",void 0),G([de("")],ye.prototype,"text",void 0),G([de("")],ye.prototype,"placeholder",void 0),G([de("caption")],ye.prototype,"fontFamily",void 0),G([de(12)],ye.prototype,"fontSize",void 0),G([de("normal")],ye.prototype,"fontWeight",void 0),G([de(!1)],ye.prototype,"italic",void 0),G([de("none")],ye.prototype,"textCase",void 0),G([de("none")],ye.prototype,"textDecoration",void 0),G([de(0)],ye.prototype,"letterSpacing",void 0),G([de({type:"percent",value:1.5})],ye.prototype,"lineHeight",void 0),G([de(0)],ye.prototype,"paraIndent",void 0),G([de(0)],ye.prototype,"paraSpacing",void 0),G([de("x")],ye.prototype,"writingMode",void 0),G([de("left")],ye.prototype,"textAlign",void 0),G([de("top")],ye.prototype,"verticalAlign",void 0),G([de(!0)],ye.prototype,"autoSizeAlign",void 0),G([de("normal")],ye.prototype,"textWrap",void 0),G([de("show")],ye.prototype,"textOverflow",void 0),G([_r(!1)],ye.prototype,"textEditing",void 0),ye=G([On()],ye);let sl=class extends Mt{get __tag(){return"Path"}};G([In(a1)],sl.prototype,"__",void 0),G([Hh("center")],sl.prototype,"strokeAlign",void 0),sl=G([On()],sl);let gc=class extends _i{get __tag(){return"Pen"}setStyle(t){const n=this.pathElement=new sl(t);return this.pathStyle=t,this.__path=n.path||(n.path=[]),this.add(n),this}beginPath(){return this}moveTo(t,n){return this}lineTo(t,n){return this}bezierCurveTo(t,n,i,s,r,o){return this}quadraticCurveTo(t,n,i,s){return this}closePath(){return this}rect(t,n,i,s){return this}roundRect(t,n,i,s,r){return this}ellipse(t,n,i,s,r,o,a,l){return this}arc(t,n,i,s,r,o){return this}arcTo(t,n,i,s,r){return this}drawEllipse(t,n,i,s,r,o,a,l){return this}drawArc(t,n,i,s,r,o){return this}drawPoints(t,n,i){return this}clearPath(){return this}paint(){const{pathElement:t}=this;t.__layout.boxChanged||t.forceUpdate("path")}};G([In(l1)],gc.prototype,"__",void 0),G([(e,t)=>{ma(e,t,{get(){return this.__path}})}],gc.prototype,"path",void 0),gc=G([Ti(my,["set","path","paint"]),On()],gc);function us(e,t,n,i){var s,r=arguments.length,o=r<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,n):i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(r<3?s(o):r>3?s(t,n,o):s(t,n))||o);return r>3&&o&&Object.defineProperty(t,n,o),o}let yf=class extends cr{get __tag(){return"App"}get isApp(){return!0}constructor(e,t){super(e,t)}init(e,t){if(super.init(e,t),e){const{ground:n,tree:i,sky:s,editor:r}=e;n&&(this.ground=this.addLeafer(n)),(i||r)&&(this.tree=this.addLeafer(i||{type:e.type||"design"})),(s||r)&&(this.sky=this.addLeafer(s)),r&&Ke.editor(r,this)}}__setApp(){const{canvas:e}=this,{realCanvas:t,view:n}=this.config;t||n===this.canvas.view||!e.parentView?this.realCanvas=!0:e.unrealCanvas(),this.leafer=this,this.watcher.disable(),this.layouter.disable()}__updateLocalBounds(){this.forEach(e=>e.updateLayout()),super.__updateLocalBounds()}start(){super.start(),this.forEach(e=>e.start())}stop(){this.forEach(e=>e.stop()),super.stop()}unlockLayout(){super.unlockLayout(),this.forEach(e=>e.unlockLayout())}lockLayout(){super.lockLayout(),this.forEach(e=>e.lockLayout())}forceRender(e,t){this.forEach(n=>n.forceRender(e,t))}addLeafer(e){const t=new cr(e);return this.add(t),t}add(e,t){if(!e.view){if(this.realCanvas&&!this.canvas.bounds)return void setTimeout(()=>this.add(e,t),10);e.init(this.__getChildConfig(e.userConfig),this)}super.add(e,t),Kt(t)||(e.canvas.childIndex=t),this.__listenChildEvents(e)}forEach(e){this.children.forEach(e)}__onCreated(){this.created=this.children.every(e=>e.created)}__onReady(){this.children.every(e=>e.ready)&&super.__onReady()}__onViewReady(){this.children.every(e=>e.viewReady)&&super.__onViewReady()}__onChildRenderEnd(e){this.renderer.addBlock(e.renderBounds),this.viewReady&&this.renderer.update()}__render(e,t){e.context&&this.forEach(n=>t.matrix?n.__render(e,t):e.copyWorld(n.canvas,t.bounds,void 0,void 0,!0))}__onResize(e){this.forEach(t=>t.resize(e)),super.__onResize(e)}updateLayout(){this.forEach(e=>e.updateLayout())}__getChildConfig(e){const t=Object.assign({},this.config);return t.hittable=t.realCanvas=void 0,e&&De.assign(t,e),this.autoLayout&&De.copyAttrs(t,this,wi),t.view=this.realCanvas?void 0:this.view,t.fill=void 0,t}__listenChildEvents(e){e.once([[Ve.END,this.__onReady,this],[Re.START,this.__onCreated,this],[Re.END,this.__onViewReady,this]]),this.realCanvas&&this.__eventIds.push(e.on_(Re.END,this.__onChildRenderEnd,this))}};yf=us([On()],yf);const xc={},ia={isHoldSpaceKey:()=>ia.isHold("Space"),isHold:e=>xc[e],isHoldKeys:(e,t)=>t?e(t):void 0,setDownCode(e){xc[e]||(xc[e]=!0)},setUpCode(e){xc[e]=!1}},bi={LEFT:1,RIGHT:2,MIDDLE:4,defaultLeft(e){e.buttons||(e.buttons=1)},left:e=>e.buttons===1,right:e=>e.buttons===2,middle:e=>e.buttons===4};class Kp extends hs{get spaceKey(){return ia.isHoldSpaceKey()}get left(){return bi.left(this)}get right(){return bi.right(this)}get middle(){return bi.middle(this)}constructor(t){super(t.type),this.bubbles=!0,Object.assign(this,t)}isHoldKeys(t){return ia.isHoldKeys(t,this)}getBoxPoint(t){return(t||this.current).getBoxPoint(this)}getInnerPoint(t){return(t||this.current).getInnerPoint(this)}getLocalPoint(t){return(t||this.current).getLocalPoint(this)}getPagePoint(){return this.current.getPagePoint(this)}getInner(t){return this.getInnerPoint(t)}getLocal(t){return this.getLocalPoint(t)}getPage(){return this.getPagePoint()}static changeName(t,n){ca.changeName(t,n)}}const{min:Yg,max:Yu,abs:qg}=Math,{float:An,sign:jg}=wn,{minX:Kg,maxX:Zg,minY:Jg,maxY:Qg}=Ut,qe=new cn,xs=new cn,Sf={limitMove(e,t){const{dragBounds:n,dragBoundsType:i}=e;n&&vs.getValidMove(e.__localBoxBounds,vs.getDragBounds(e),i,t,!0),vs.axisMove(e,t)},limitScaleOf(e,t,n,i){const{dragBounds:s,dragBoundsType:r}=e;s&&vs.getValidScaleOf(e.__localBoxBounds,vs.getDragBounds(e),r,e.getLocalPointByInner(e.getInnerPointByBox(t)),n,i,!0)},axisMove(e,t){const{draggable:n}=e;n==="x"&&(t.y=0),n==="y"&&(t.x=0)},getDragBounds(e){const{dragBounds:t}=e;return t==="parent"?e.parent.boxBounds:t},isInnerMode:(e,t,n,i)=>n==="inner"||n==="auto"&&An(e[i])>An(t[i]),getValidMove(e,t,n,i,s){const r=e.x+i.x,o=e.y+i.y,a=r+e.width,l=o+e.height,c=t.x+t.width,h=t.y+t.height;return s||(i=Object.assign({},i)),vs.isInnerMode(e,t,n,"width")?r>t.x?i.x+=t.x-r:a<c&&(i.x+=c-a):r<t.x?i.x+=t.x-r:a>c&&(i.x+=c-a),vs.isInnerMode(e,t,n,"height")?o>t.y?i.y+=t.y-o:l<h&&(i.y+=h-l):o<t.y?i.y+=t.y-o:l>h&&(i.y+=h-l),i.x=An(i.x),i.y=An(i.y),i},getValidScaleOf(e,t,n,i,s,r,o){o||(s=Object.assign({},s)),xs.set(t),qe.set(e).scaleOf(i,s.x,s.y);const a=(i.x-e.x)/e.width,l=1-a,c=(i.y-e.y)/e.height,h=1-c;let d,f,u,m,g=1,_=1;return vs.isInnerMode(e,t,n,"width")?(s.x<0&&qe.scaleOf(i,g=1/s.x,1),u=An(qe.minX-xs.minX),m=An(xs.maxX-qe.maxX),d=a&&u>0?1+u/(a*qe.width):1,f=l&&m>0?1+m/(l*qe.width):1,g*=Yu(d,f)):(s.x<0&&((An(Kg(e)-Kg(t))<=0||An(Zg(t)-Zg(e))<=0)&&qe.scaleOf(i,g=1/s.x,1),qe.unsign()),u=An(xs.minX-qe.minX),m=An(qe.maxX-xs.maxX),d=a&&u>0?1-u/(a*qe.width):1,f=l&&m>0?1-m/(l*qe.width):1,g*=Yg(d,f)),vs.isInnerMode(e,t,n,"height")?(s.y<0&&qe.scaleOf(i,1,_=1/s.y),u=An(qe.minY-xs.minY),m=An(xs.maxY-qe.maxY),d=c&&u>0?1+u/(c*qe.height):1,f=h&&m>0?1+m/(h*qe.height):1,_*=Yu(d,f),r&&(d=Yu(qg(g),qg(_)),g=jg(g)*d,_=jg(_)*d)):(s.y<0&&((An(Jg(e)-Jg(t))<=0||An(Qg(t)-Qg(e))<=0)&&qe.scaleOf(i,1,_=1/s.y),qe.unsign()),u=An(xs.minY-qe.minY),m=An(qe.maxY-xs.maxY),d=c&&u>0?1-u/(c*qe.height):1,f=h&&m>0?1-m/(h*qe.height):1,_*=Yg(d,f)),s.x*=lf(g)?g:1,s.y*=lf(_)?_:1,s}},vs=Sf;let Yt=class extends Kp{};Yt.POINTER="pointer",Yt.BEFORE_DOWN="pointer.before_down",Yt.BEFORE_MOVE="pointer.before_move",Yt.BEFORE_UP="pointer.before_up",Yt.DOWN="pointer.down",Yt.MOVE="pointer.move",Yt.UP="pointer.up",Yt.OVER="pointer.over",Yt.OUT="pointer.out",Yt.ENTER="pointer.enter",Yt.LEAVE="pointer.leave",Yt.TAP="tap",Yt.DOUBLE_TAP="double_tap",Yt.CLICK="click",Yt.DOUBLE_CLICK="double_click",Yt.LONG_PRESS="long_press",Yt.LONG_TAP="long_tap",Yt.MENU="pointer.menu",Yt.MENU_TAP="pointer.menu_tap",Yt=us([Ys()],Yt);const Ua={};let Ee=class extends Yt{static setList(t){this.list=t instanceof Ye?t:new Ye(t)}static setData(t){this.data=t}static getValidMove(t,n,i,s=!0){const r=t.getLocalPoint(i,null,!0);return le.move(r,n.x-t.x,n.y-t.y),s&&this.limitMove(t,r),Sf.axisMove(t,r),r}static limitMove(t,n){Sf.limitMove(t,n)}getPageMove(t){return this.assignMove(t),this.current.getPagePoint(Ua,null,!0)}getInnerMove(t,n){return t||(t=this.current),this.assignMove(n),t.getInnerPoint(Ua,null,!0)}getLocalMove(t,n){return t||(t=this.current),this.assignMove(n),t.getLocalPoint(Ua,null,!0)}getPageTotal(){return this.getPageMove(!0)}getInnerTotal(t){return this.getInnerMove(t,!0)}getLocalTotal(t){return this.getLocalMove(t,!0)}getPageBounds(){const t=this.getPageTotal(),n=this.getPagePoint(),i={};return Ut.set(i,n.x-t.x,n.y-t.y,t.x,t.y),Ut.unsign(i),i}assignMove(t){Ua.x=t?this.totalX:this.moveX,Ua.y=t?this.totalY:this.moveY}};Ee.BEFORE_DRAG="drag.before_drag",Ee.START="drag.start",Ee.DRAG="drag",Ee.END="drag.end",Ee.OVER="drag.over",Ee.OUT="drag.out",Ee.ENTER="drag.enter",Ee.LEAVE="drag.leave",Ee=us([Ys()],Ee);let ml=class extends Yt{static setList(t){Ee.setList(t)}static setData(t){Ee.setData(t)}};ml.DROP="drop",ml=us([Ys()],ml);let ni=class extends Ee{};ni.BEFORE_MOVE="move.before_move",ni.START="move.start",ni.MOVE="move",ni.DRAG_ANIMATE="move.drag_animate",ni.END="move.end",ni.PULL_DOWN="move.pull_down",ni.REACH_BOTTOM="move.reach_bottom",ni=us([Ys()],ni);let t0=class extends Kp{};t0=us([Ys()],t0);let Ao=class extends Yt{};Ao.BEFORE_ROTATE="rotate.before_rotate",Ao.START="rotate.start",Ao.ROTATE="rotate",Ao.END="rotate.end",Ao=us([Ys()],Ao);let Ei=class extends Ee{};Ei.SWIPE="swipe",Ei.LEFT="swipe.left",Ei.RIGHT="swipe.right",Ei.UP="swipe.up",Ei.DOWN="swipe.down",Ei=us([Ys()],Ei);let Ro=class extends Yt{};Ro.BEFORE_ZOOM="zoom.before_zoom",Ro.START="zoom.start",Ro.ZOOM="zoom",Ro.END="zoom.end",Ro=us([Ys()],Ro);let di=class extends Kp{};di.BEFORE_DOWN="key.before_down",di.BEFORE_UP="key.before_up",di.DOWN="key.down",di.HOLD="key.hold",di.UP="key.up",di=us([Ys()],di);const Ni={getDragEventData:(e,t,n)=>Object.assign(Object.assign({},n),{x:n.x,y:n.y,moveX:n.x-t.x,moveY:n.y-t.y,totalX:n.x-e.x,totalY:n.y-e.y}),getDropEventData:(e,t,n)=>Object.assign(Object.assign({},e),{list:t,data:n}),getSwipeDirection:e=>e<-45&&e>-135?Ei.UP:e>45&&e<135?Ei.DOWN:e<=45&&e>=-45?Ei.RIGHT:Ei.LEFT,getSwipeEventData:(e,t,n)=>Object.assign(Object.assign({},n),{moveX:t.moveX,moveY:t.moveY,totalX:n.x-e.x,totalY:n.y-e.y,type:F1.getSwipeDirection(le.getAngle(e,n))}),getBase(e){const t=e.button===1?4:e.button;return{altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,time:Date.now(),buttons:Kt(e.buttons)?1:e.buttons===0?t:e.buttons,origin:e}},pathHasEventType(e,t){const{list:n}=e;for(let i=0,s=n.length;i<s;i++)if(n[i].hasEvent(t))return!0;return!1},filterPathByEventType(e,t){const n=new Ye,{list:i}=e;for(let s=0,r=i.length;s<r;s++)i[s].hasEvent(t)&&n.add(i[s]);return n},pathCanDrag:e=>e&&e.list.some(t=>We.draggable(t)||!t.isLeafer&&t.hasEvent(Ee.DRAG)),pathHasOutside:e=>e&&e.list.some(t=>t.isOutside)},F1=Ni,e0=new Ye,{getDragEventData:qu,getDropEventData:B1,getSwipeEventData:k1}=Ni;let z1=class{constructor(t){this.dragDataList=[],this.interaction=t}setDragData(t){this.animateWait&&this.dragEndReal(),this.downData=this.interaction.downData,this.dragData=qu(t,t,t),this.canAnimate=this.canDragOut=!0}getList(t,n){const{proxy:i}=this.interaction.selector,s=i&&i.list.length,r=Ee.list||this.draggableList||e0;return this.dragging&&(s?t?e0:new Ye(n?[...i.list,...i.dragHoverExclude]:i.list):r)}checkDrag(t,n){const{interaction:i}=this;if(this.moving&&t.buttons<1)return this.canAnimate=!1,void i.pointerCancel();!this.moving&&n&&(this.moving=i.canMove(this.downData)||i.isHoldRightKey||i.isMobileDragEmpty)&&(this.dragData.moveType="drag",i.emit(ni.START,this.dragData)),this.moving||this.dragStart(t,n),this.drag(t)}dragStart(t,n){this.dragging||(this.dragging=n&&bi.left(t),this.dragging&&(this.interaction.emit(Ee.START,this.dragData),this.getDraggableList(this.dragData.path),this.setDragStartPoints(this.realDraggableList=this.getList(!0))))}setDragStartPoints(t){this.dragStartPoints={},t.forEach(n=>this.dragStartPoints[n.innerId]={x:n.x,y:n.y})}getDraggableList(t){let n;for(let i=0,s=t.length;i<s;i++)if(n=t.list[i],We.draggable(n)){this.draggableList=new Ye(n);break}}drag(t){const{interaction:n,dragData:i,downData:s}=this,{path:r,throughPath:o}=s;this.dragData=qu(s,i,t),o&&(this.dragData.throughPath=o),this.dragData.path=r,this.dragDataList.push(this.dragData),this.moving?(t.moving=!0,this.dragData.moveType="drag",n.emit(ni.BEFORE_MOVE,this.dragData),n.emit(ni.MOVE,this.dragData)):this.dragging&&(t.dragging=!0,this.dragReal(),n.emit(Ee.BEFORE_DRAG,this.dragData),n.emit(Ee.DRAG,this.dragData))}dragReal(t){const{interaction:n}=this,{running:i}=n,s=this.realDraggableList;if(s.length&&i){const{totalX:r,totalY:o}=this.dragData,{dragLimitAnimate:a}=n.p,l=!a||!!t;s.forEach(c=>{if(c.draggable){const h=tn(c.draggable),d=Ee.getValidMove(c,this.dragStartPoints[c.innerId],{x:r,y:o},l||h);a&&!h&&t?We.animateMove(c,d,je(a)?a:.3):c.move(d)}})}}dragOverOrOut(t){const{interaction:n}=this,{dragOverPath:i}=this,{path:s}=t;this.dragOverPath=s,i?s.indexAt(0)!==i.indexAt(0)&&(n.emit(Ee.OUT,t,i),n.emit(Ee.OVER,t,s)):n.emit(Ee.OVER,t,s)}dragEnterOrLeave(t){const{interaction:n}=this,{dragEnterPath:i}=this,{path:s}=t;n.emit(Ee.LEAVE,t,i,s),n.emit(Ee.ENTER,t,s,i),this.dragEnterPath=s}dragEnd(t){(this.dragging||this.moving)&&(this.checkDragEndAnimate(t)||this.dragEndReal(t))}dragEndReal(t){const{interaction:n,downData:i,dragData:s}=this;t||(t=s);const{path:r,throughPath:o}=i,a=qu(i,t,t);if(o&&(a.throughPath=o),a.path=r,this.moving&&(this.moving=!1,a.moveType="drag",n.emit(ni.END,a)),this.dragging){const l=this.getList();this.dragging=!1,n.p.dragLimitAnimate&&this.dragReal(!0),n.emit(Ee.END,a),this.swipe(t,i,s,a),this.drop(t,l,this.dragEnterPath)}this.autoMoveCancel(),this.dragReset(),this.animate(null,"off")}swipe(t,n,i,s){const{interaction:r}=this;if(le.getDistance(n,t)>r.config.pointer.swipeDistance){const o=k1(n,i,s);this.interaction.emit(o.type,o)}}drop(t,n,i){const s=B1(t,n,Ee.data);s.path=i,this.interaction.emit(ml.DROP,s),this.interaction.emit(Ee.LEAVE,t,i)}dragReset(){Ee.list=Ee.data=this.draggableList=this.dragData=this.downData=this.dragOverPath=this.dragEnterPath=null,this.dragDataList=[]}checkDragEndAnimate(t,n){return!1}animate(t,n){}stopAnimate(){}checkDragOut(t){}autoMoveOnDragOut(t){}autoMoveCancel(){}destroy(){this.dragReset()}};const H1=Ge.get("emit"),V1=["move","zoom","rotate","key"];function n0(e,t,n,i,s){if(V1.some(r=>t.startsWith(r))&&e.__.hitChildren&&!Ay(e,s)){let r;for(let o=0,a=e.children.length;o<a;o++)r=e.children[o],!n.path.has(r)&&r.__.hittable&&Mf(r,t,n,i,s)}}function Mf(e,t,n,i,s){if(e.destroyed)return!1;if(e.__.hitSelf&&!Ay(e,s)&&(Ig.updateEventStyle&&!i&&Ig.updateEventStyle(e,t),e.hasEvent(t,i))){n.phase=i?1:e===n.target?2:3;const r=ca.get(t,n);if(e.emitEvent(r,i),r.isStop)return!0}return!1}function Ay(e,t){return t&&t.has(e)}const G1={wheel:{zoomSpeed:.5,moveSpeed:.5,rotateSpeed:.5,delta:{x:20,y:8}},pointer:{type:"pointer",snap:!0,hitRadius:5,tapTime:120,longPressTime:800,transformTime:500,hover:!0,dragHover:!0,dragDistance:2,swipeDistance:20},touch:{preventDefault:"auto"},multiTouch:{},move:{autoDistance:2},zoom:{},cursor:!0,keyEvent:!0},{pathHasEventType:ju,pathCanDrag:W1,pathHasOutside:i0}=Ni;let X1=class{get dragging(){return this.dragger.dragging}get transforming(){return this.transformer.transforming}get moveMode(){return this.m.drag===!0||this.isHoldSpaceKey||this.isHoldMiddleKey||this.isHoldRightKey&&this.dragger.moving||this.isDragEmpty}get canHover(){return this.p.hover&&!this.config.mobile}get isDragEmpty(){return this.m.dragEmpty&&this.isRootPath(this.hoverData)&&(!this.downData||this.isRootPath(this.downData))}get isMobileDragEmpty(){return this.m.dragEmpty&&!this.canHover&&this.downData&&this.isTreePath(this.downData)}get isHoldMiddleKey(){return this.m.holdMiddleKey&&this.downData&&bi.middle(this.downData)}get isHoldRightKey(){return this.m.holdRightKey&&this.downData&&bi.right(this.downData)}get isHoldSpaceKey(){return this.m.holdSpaceKey&&ia.isHoldSpaceKey()}get m(){return this.config.move}get p(){return this.config.pointer}get hitRadius(){return this.p.hitRadius}constructor(t,n,i,s){this.config=De.clone(G1),this.tapCount=0,this.downKeyMap={},this.target=t,this.canvas=n,this.selector=i,this.defaultPath=new Ye(t),this.createTransformer(),this.dragger=new z1(this),s&&(this.config=De.default(s,this.config)),this.__listenEvents()}start(){this.running=!0}stop(){this.running=!1}receive(t){}pointerDown(t,n){t||(t=this.hoverData),t&&(bi.defaultLeft(t),this.updateDownData(t),this.checkPath(t,n),this.downTime=Date.now(),this.emit(Yt.BEFORE_DOWN,t),t.path.needUpdate&&this.updateDownData(t),this.emit(Yt.DOWN,t),bi.left(t)&&(this.tapWait(),this.longPressWait(t)),this.waitRightTap=bi.right(t),this.dragger.setDragData(t),this.isHoldRightKey||this.updateCursor(t))}pointerMove(t){if(t||(t=this.hoverData),!t)return;const{downData:n}=this;n&&bi.defaultLeft(t),(this.canvas.bounds.hitPoint(t)||n)&&(this.pointerMoveReal(t),n&&this.dragger.checkDragOut(t))}pointerMoveReal(t){if(this.emit(Yt.BEFORE_MOVE,t,this.defaultPath),this.downData){const n=le.getDistance(this.downData,t)>this.p.dragDistance;n&&(this.pointerWaitCancel(),this.waitRightTap=!1),this.dragger.checkDrag(t,n)}this.dragger.moving||(this.updateHoverData(t),this.checkPath(t),this.emit(Yt.MOVE,t),this.pointerHover(t),this.dragging&&(this.dragger.dragOverOrOut(t),this.dragger.dragEnterOrLeave(t))),this.updateCursor(this.downData||t)}pointerUp(t){const{downData:n}=this;if(t||(t=n),!n)return;bi.defaultLeft(t),t.multiTouch=n.multiTouch,this.findPath(t);const i=Object.assign(Object.assign({},t),{path:t.path.clone()});t.path.addList(n.path.list),this.checkPath(t),this.downData=null,this.emit(Yt.BEFORE_UP,t),this.emit(Yt.UP,t),this.touchLeave(t),t.isCancel||(this.tap(t),this.menuTap(t)),this.dragger.dragEnd(t),this.updateCursor(i)}pointerCancel(){const t=Object.assign({},this.dragger.dragData);t.isCancel=!0,this.pointerUp(t)}menu(t){this.findPath(t),this.emit(Yt.MENU,t),this.waitMenuTap=!0,!this.downData&&this.waitRightTap&&this.menuTap(t)}menuTap(t){this.waitRightTap&&this.waitMenuTap&&(this.emit(Yt.MENU_TAP,t),this.waitRightTap=this.waitMenuTap=!1)}createTransformer(){}move(t){}zoom(t){}rotate(t){}transformEnd(){}wheel(t){}multiTouch(t,n){}keyDown(t){if(!this.config.keyEvent)return;this.emit(di.BEFORE_DOWN,t,this.defaultPath);const{code:n}=t;this.downKeyMap[n]||(this.downKeyMap[n]=!0,ia.setDownCode(n),this.emit(di.HOLD,t,this.defaultPath),this.moveMode&&(this.cancelHover(),this.updateCursor())),this.emit(di.DOWN,t,this.defaultPath)}keyUp(t){if(!this.config.keyEvent)return;this.emit(di.BEFORE_UP,t,this.defaultPath);const{code:n}=t;this.downKeyMap[n]=!1,ia.setUpCode(n),this.emit(di.UP,t,this.defaultPath),this.cursor==="grab"&&this.updateCursor()}pointerHover(t){!this.canHover||this.dragging&&!this.p.dragHover||(t.path||(t.path=new Ye),this.pointerOverOrOut(t),this.pointerEnterOrLeave(t))}pointerOverOrOut(t){const{path:n}=t,{overPath:i}=this;this.overPath=n,i?n.indexAt(0)!==i.indexAt(0)&&(this.emit(Yt.OUT,t,i),this.emit(Yt.OVER,t,n)):this.emit(Yt.OVER,t,n)}pointerEnterOrLeave(t){let{path:n}=t;this.downData&&!this.moveMode&&(n=n.clone(),this.downData.path.forEach(s=>n.add(s)));const{enterPath:i}=this;this.enterPath=n,this.emit(Yt.LEAVE,t,i,n),this.emit(Yt.ENTER,t,n,i)}touchLeave(t){t.pointerType==="touch"&&this.enterPath&&(this.emit(Yt.LEAVE,t),this.dragger.dragging&&this.emit(ml.LEAVE,t))}tap(t){const{pointer:n}=this.config,i=this.longTap(t);if(!n.tapMore&&i||!this.waitTap)return;n.tapMore&&this.emitTap(t);const s=Date.now()-this.downTime,r=[Yt.DOUBLE_TAP,Yt.DOUBLE_CLICK].some(o=>ju(t.path,o));s<n.tapTime+50&&r?(this.tapCount++,this.tapCount===2?(this.tapWaitCancel(),this.emitDoubleTap(t)):(clearTimeout(this.tapTimer),this.tapTimer=setTimeout(()=>{n.tapMore||(this.tapWaitCancel(),this.emitTap(t))},n.tapTime))):n.tapMore||(this.tapWaitCancel(),this.emitTap(t))}findPath(t,n){const{hitRadius:i,through:s}=this.p,{bottomList:r,target:o}=this;Dt.backgrounder||t.origin||o&&o.updateLayout();const a=this.selector.getByPoint(t,i,Object.assign({bottomList:r,name:t.type},n||{through:s}));return a.throughPath&&(t.throughPath=a.throughPath),t.path=a.path,a.path}isRootPath(t){return t&&t.path.list[0].isLeafer}isTreePath(t){const n=this.target.app;return!(!n||!n.isApp)&&n.editor&&!t.path.has(n.editor)&&t.path.has(n.tree)&&!t.target.syncEventer}checkPath(t,n){(n||this.moveMode&&!i0(t.path))&&(t.path=this.defaultPath)}canMove(t){return t&&(this.moveMode||this.m.drag==="auto"&&!W1(t.path))&&!i0(t.path)}isDrag(t){return this.dragger.getList().has(t)}isPress(t){return this.downData&&this.downData.path.has(t)}isHover(t){return this.enterPath&&this.enterPath.has(t)}isFocus(t){return this.focusData===t}cancelHover(){const{hoverData:t}=this;t&&(t.path=this.defaultPath,this.pointerHover(t))}stopDragAnimate(){this.dragger.stopAnimate()}replaceDownTarget(t){const{downData:n}=this;if(n&&t){const{path:i}=n;i.remove(i.list[0]),i.addAt(t,0)}}updateDownData(t,n,i){const{downData:s}=this;!t&&s&&(t=s),t&&(this.findPath(t,n),i&&s&&t.path.addList(s.path.list),this.downData=t)}updateHoverData(t){t||(t=this.hoverData),t&&(this.findPath(t,{exclude:this.dragger.getList(!1,!0),name:Yt.MOVE}),this.hoverData=t)}updateCursor(t){if(!this.config.cursor||!this.canHover)return;if(t||(this.updateHoverData(),t=this.downData||this.hoverData),this.dragger.moving)return this.setCursor("grabbing");if(this.canMove(t))return this.setCursor(this.downData?"grabbing":"grab");if(!t)return;let n,i;const{path:s}=t;for(let r=0,o=s.length;r<o&&(n=s.list[r],i=n.syncEventer&&n.syncEventer.cursor||n.cursor,!i);r++);this.setCursor(i)}setCursor(t){this.cursor=t}getLocal(t,n){const i=this.canvas.getClientBounds(n),s={x:t.clientX-i.x,y:t.clientY-i.y},{bounds:r}=this.canvas;return s.x*=r.width/i.width,s.y*=r.height/i.height,this.p.snap&&le.round(s),s}emitTap(t){this.emit(Yt.TAP,t),this.emit(Yt.CLICK,t)}emitDoubleTap(t){this.emit(Yt.DOUBLE_TAP,t),this.emit(Yt.DOUBLE_CLICK,t)}pointerWaitCancel(){this.tapWaitCancel(),this.longPressWaitCancel()}tapWait(){clearTimeout(this.tapTimer),this.waitTap=!0}tapWaitCancel(){this.waitTap&&(clearTimeout(this.tapTimer),this.waitTap=!1,this.tapCount=0)}longPressWait(t){clearTimeout(this.longPressTimer),this.longPressTimer=setTimeout(()=>{this.longPressed=!0,this.emit(Yt.LONG_PRESS,t)},this.p.longPressTime)}longTap(t){let n;return this.longPressed&&(this.emit(Yt.LONG_TAP,t),(ju(t.path,Yt.LONG_TAP)||ju(t.path,Yt.LONG_PRESS))&&(n=!0)),this.longPressWaitCancel(),n}longPressWaitCancel(){this.longPressTimer&&(clearTimeout(this.longPressTimer),this.longPressed=!1)}__onResize(){const{dragOut:t}=this.m;this.shrinkCanvasBounds=new cn(this.canvas.bounds),this.shrinkCanvasBounds.spread(-(je(t)?t:2))}__listenEvents(){const{target:t}=this;this.__eventIds=[t.on_(co.RESIZE,this.__onResize,this)],t.once(Se.READY,()=>this.__onResize())}__removeListenEvents(){this.target.off_(this.__eventIds),this.__eventIds.length=0}emit(t,n,i,s){this.running&&function(r,o,a,l){if(!a&&!o.path)return;let c;o.type=r,a?o=Object.assign(Object.assign({},o),{path:a}):a=o.path,o.target=a.indexAt(0);try{for(let h=a.length-1;h>-1;h--){if(c=a.list[h],Mf(c,r,o,!0,l))return;c.isApp&&n0(c,r,o,!0,l)}for(let h=0,d=a.length;h<d;h++)if(c=a.list[h],c.isApp&&n0(c,r,o,!1,l),Mf(c,r,o,!1,l))return}catch(h){H1.error(h)}}(t,n,i,s)}destroy(){this.__eventIds.length&&(this.stop(),this.__removeListenEvents(),this.dragger.destroy(),this.transformer&&this.transformer.destroy(),this.downData=this.overPath=this.enterPath=null)}},Ry=class{static set(t,n){this.custom[t]=n}static get(t){return this.custom[t]}};Ry.custom={};let $1=class extends ay{constructor(){super(...arguments),this.maxTotal=1e3,this.pathList=new Ye,this.pixelList=new Ye}getPixelType(t,n){return this.__autoClear(),this.pixelList.add(t),Ke.hitCanvas(n)}getPathType(t){return this.__autoClear(),this.pathList.add(t),Ke.hitCanvas()}clearImageType(){this.__clearLeafList(this.pixelList)}clearPathType(){this.__clearLeafList(this.pathList)}__clearLeafList(t){t.length&&(t.forEach(n=>{n.__hitCanvas&&(n.__hitCanvas.destroy(),n.__hitCanvas=null)}),t.reset())}__autoClear(){this.pathList.length+this.pixelList.length>this.maxTotal&&this.clear()}clear(){this.clearPathType(),this.clearImageType()}};Dt.getSelector=function(e){return e.leafer?e.leafer.selector:Dt.selector||(Dt.selector=Ke.selector())};const{toInnerRadiusPointOf:Y1,copyRadiusPoint:s0}=le,{hitRadiusPoint:q1,hitPoint:j1}=Ut,Na={},Fa={},Co=ha.prototype;Co.hit=function(e,t=0){this.updateLayout(),s0(Fa,e,t);const n=this.__world;return!!(t?q1(n,Fa):j1(n,Fa))&&(this.isBranch?Dt.getSelector(this).hitPoint(Object.assign({},Fa),t,{target:this}):this.__hitWorld(Fa))},Co.__hitWorld=function(e,t){const n=this.__;if(!n.hitSelf)return!1;const i=this.__world,s=this.__layout,r=i.width<10&&i.height<10;if(n.hitRadius&&(s0(Na,e,n.hitRadius),e=Na),Y1(e,i,Na),n.hitBox||r){if(Ut.hitRadiusPoint(s.boxBounds,Na))return!0;if(r)return!1}return!s.hitCanvasChanged&&this.__hitCanvas||(this.__updateHitCanvas(),s.boundsChanged||(s.hitCanvasChanged=!1)),this.__hit(Na,t)},Co.__hitFill=function(e){const t=this.__hitCanvas;return t&&t.hitFill(e,this.__.windingRule)},Co.__hitStroke=function(e,t){const n=this.__hitCanvas;return n&&n.hitStroke(e,t)},Co.__hitPixel=function(e){const t=this.__hitCanvas;return t&&t.hitPixel(e,this.__layout.renderBounds,t.hitScale)},Co.__drawHitPath=function(e){e&&this.__drawRenderPath(e)};const K1=new io,r0=Mt.prototype;r0.__updateHitCanvas=function(){this.__box&&this.__box.__updateHitCanvas();const{hitCanvasManager:e}=this.leafer||this.parent&&this.parent.leafer||{};if(!e)return;const t=this.__,n=(t.__isAlphaPixelFill||t.__isCanvas)&&t.hitFill==="pixel",i=t.__isAlphaPixelStroke&&t.hitStroke==="pixel",s=n||i;this.__hitCanvas||(this.__hitCanvas=s?e.getPixelType(this,{contextSettings:{willReadFrequently:!0}}):e.getPathType(this));const r=this.__hitCanvas;if(s){const{renderBounds:o}=this.__layout,a=Dt.image.hitCanvasSize,l=r.hitScale=qr.set(0,0,a,a).getFitMatrix(o).a,{x:c,y:h,width:d,height:f}=qr.set(o).scale(l);r.resize({width:d,height:f,pixelRatio:1}),r.clear(),Ui.patternLocked=!0,this.__renderShape(r,{matrix:K1.setWith(this.__world).scaleWith(1/l).invertWith().translate(-c,-h),snapshot:!0,ignoreFill:!n,ignoreStroke:!i}),Ui.patternLocked=!1,r.resetTransform(),t.__isHitPixel=!0}else t.__isHitPixel&&(t.__isHitPixel=!1);this.__drawHitPath(r),r.setStrokeOptions(t)},r0.__hit=function(e,t){if(this.__box&&this.__box.__hit(e))return!0;const n=this.__;if(n.__isHitPixel&&this.__hitPixel(e))return!0;const{hitFill:i}=n,s=(n.fill||n.__isCanvas)&&(i==="path"||i==="pixel"&&!(n.__isAlphaPixelFill||n.__isCanvas))||i==="all"||t;if(s&&this.__hitFill(e))return!0;const{hitStroke:r,__maxStrokeWidth:o}=n,a=n.stroke&&(r==="path"||r==="pixel"&&!n.__isAlphaPixelStroke)||r==="all";if(!s&&!a)return!1;const l=2*e.radiusX;let c=l;if(a)switch(n.strokeAlign){case"inside":if(c+=2*o,!s&&this.__hitFill(e)&&this.__hitStroke(e,c))return!0;c=l;break;case"center":c+=o;break;case"outside":if(c+=2*o,!s){if(!this.__hitFill(e)&&this.__hitStroke(e,c))return!0;c=l}}return!!c&&this.__hitStroke(e,c)};const o0=Mt.prototype,a0=Ci.prototype,l0=yn.prototype;a0.__updateHitCanvas=l0.__updateHitCanvas=function(){this.stroke||this.cornerRadius||(this.fill||this.__.__isCanvas)&&this.hitFill==="pixel"||this.hitStroke==="all"?o0.__updateHitCanvas.call(this):this.__hitCanvas&&(this.__hitCanvas=null)},a0.__hitFill=l0.__hitFill=function(e){return this.__hitCanvas?o0.__hitFill.call(this,e):Ut.hitRadiusPoint(this.__layout.boxBounds,e)},ye.prototype.__drawHitPath=function(e){const{__lineHeight:t,fontSize:n,__baseLine:i,__letterSpacing:s,__textDrawData:r}=this.__;e.beginPath(),s<0?this.__drawPathByBox(e):r.rows.forEach(o=>e.rect(o.x,o.y-i,o.width,t<n?n:t))},_i.prototype.pick=function(e,t){return t||(t=Qb),this.updateLayout(),Dt.getSelector(this).getByPoint(e,t.hitRadius||0,Object.assign(Object.assign({},t),{target:this}))};const Ku=hy.prototype;Ku.hitFill=function(e,t){return t?this.context.isPointInPath(e.x,e.y,t):this.context.isPointInPath(e.x,e.y)},Ku.hitStroke=function(e,t){return this.strokeWidth=t,this.context.isPointInStroke(e.x,e.y)},Ku.hitPixel=function(e,t,n=1){let{x:i,y:s,radiusX:r,radiusY:o}=e;t&&(i-=t.x,s-=t.y),qr.set(i-r,s-o,2*r,2*o).scale(n).ceil();const{data:a}=this.context.getImageData(qr.x,qr.y,qr.width||1,qr.height||1);for(let l=0,c=a.length;l<c;l+=4)if(a[l+3]>0)return!0;return a[3]>0};var c0;function bf(e,t,n,i){return new(n||(n=Promise))(function(s,r){function o(c){try{l(i.next(c))}catch(h){r(h)}}function a(c){try{l(i.throw(c))}catch(h){r(h)}}function l(c){var h;c.done?s(c.value):(h=c.value,h instanceof n?h:new n(function(d){d(h)})).then(o,a)}l((i=i.apply(e,t||[])).next())})}(function(e){e[e.none=1]="none",e[e.free=2]="free",e[e.mirrorAngle=3]="mirrorAngle",e[e.mirror=4]="mirror"})(c0||(c0={})),typeof SuppressedError=="function"&&SuppressedError;const h0=Ge.get("LeaferCanvas");class Cy extends hy{set zIndex(t){const{style:n}=this.view;n.zIndex=t,this.setAbsolute(this.view)}set childIndex(t){const{view:n,parentView:i}=this;if(n&&i){const s=i.children[t];s?(this.setAbsolute(s),i.insertBefore(n,s)):i.appendChild(s)}}init(){const{config:t}=this,n=t.view||t.canvas;n?this.__createViewFrom(n):this.__createView();const{style:i}=this.view;if(i.display||(i.display="block"),this.parentView=this.view.parentElement,this.parentView){const s=this.parentView.style;s.webkitUserSelect=s.userSelect="none",this.view.classList.add("leafer-canvas-view")}Dt.syncDomFont&&!this.parentView&&(i.display="none",document.body&&document.body.appendChild(this.view)),this.__createContext(),this.autoLayout||this.resize(t)}set backgroundColor(t){this.view.style.backgroundColor=t}get backgroundColor(){return this.view.style.backgroundColor}set hittable(t){this.view.style.pointerEvents=t?"auto":"none"}get hittable(){return this.view.style.pointerEvents!=="none"}__createView(){this.view=document.createElement("canvas")}__createViewFrom(t){let n=tn(t)?document.getElementById(t):t;if(n)if(n instanceof HTMLCanvasElement)this.view=n;else{let i=n;if(n===window||n===document){const r=document.createElement("div"),{style:o}=r;o.position="absolute",o.top=o.bottom=o.left=o.right="0px",document.body.appendChild(r),i=r}this.__createView();const s=this.view;i.hasChildNodes()&&(this.setAbsolute(s),i.style.position||(i.style.position="relative")),i.appendChild(s)}else h0.error(`no id: ${t}`),this.__createView()}setAbsolute(t){const{style:n}=t;n.position="absolute",n.top=n.left="0px"}updateViewSize(){const{width:t,height:n,pixelRatio:i}=this,{style:s}=this.view;s.width=t+"px",s.height=n+"px",this.unreal||(this.view.width=Math.ceil(t*i),this.view.height=Math.ceil(n*i))}updateClientBounds(){this.view.parentElement&&(this.clientBounds=this.view.getBoundingClientRect())}startAutoLayout(t,n){if(this.resizeListener=n,t){if(this.autoBounds=t,this.resizeObserver)return;try{this.resizeObserver=new ResizeObserver(s=>{this.updateClientBounds();for(const r of s)this.checkAutoBounds(r.contentRect)});const i=this.parentView;i?(this.resizeObserver.observe(i),this.checkAutoBounds(i.getBoundingClientRect())):(this.checkAutoBounds(this.view),h0.warn("no parent"))}catch{this.imitateResizeObserver()}this.stopListenPixelRatio()}else this.listenPixelRatio(),this.unreal&&this.updateViewSize()}imitateResizeObserver(){this.autoLayout&&(this.parentView&&this.checkAutoBounds(this.parentView.getBoundingClientRect()),Dt.requestRender(this.imitateResizeObserver.bind(this)))}listenPixelRatio(){this.windowListener||window.addEventListener("resize",this.windowListener=()=>{const t=Dt.devicePixelRatio;if(!this.config.pixelRatio&&this.pixelRatio!==t){const{width:n,height:i}=this;this.emitResize({width:n,height:i,pixelRatio:t})}})}stopListenPixelRatio(){this.windowListener&&(window.removeEventListener("resize",this.windowListener),this.windowListener=null)}checkAutoBounds(t){const n=this.view,{x:i,y:s,width:r,height:o}=this.autoBounds.getBoundsFrom(t),a={width:r,height:o,pixelRatio:this.config.pixelRatio?this.pixelRatio:Dt.devicePixelRatio};if(!this.isSameSize(a)){const{style:l}=n;l.marginLeft=i+"px",l.marginTop=s+"px",this.emitResize(a)}}stopAutoLayout(){this.autoLayout=!1,this.resizeObserver&&this.resizeObserver.disconnect(),this.resizeListener=this.resizeObserver=null}emitResize(t){const n={};De.copyAttrs(n,this,wi),this.resize(t),this.resizeListener&&!Kt(this.width)&&this.resizeListener(new co(t,n))}unrealCanvas(){if(!this.unreal&&this.parentView){let t=this.view;t&&t.remove(),t=this.view=document.createElement("div"),this.parentView.appendChild(this.view),t.classList.add("leafer-app-view"),this.unreal=!0}}destroy(){const{view:t}=this;t&&(this.stopAutoLayout(),this.stopListenPixelRatio(),t.parentElement&&t.remove(),super.destroy())}}function Z1(e,t){Dt.origin={createCanvas(n,i){const s=document.createElement("canvas");return s.width=n,s.height=i,s},canvasToDataURL:(n,i,s)=>{const r=pr.mimeType(i),o=n.toDataURL(r,s);return r==="image/bmp"?o.replace("image/png;","image/bmp;"):o},canvasToBolb:(n,i,s)=>new Promise(r=>n.toBlob(r,pr.mimeType(i),s)),canvasSaveAs:(n,i,s)=>{const r=n.toDataURL(pr.mimeType(pr.fileType(i)),s);return Dt.origin.download(r,i)},download(n,i){return bf(this,void 0,void 0,function*(){let s=document.createElement("a");s.href=n,s.download=i,document.body.appendChild(s),s.click(),document.body.removeChild(s)})},loadImage:(n,i,s)=>new Promise((r,o)=>{const a=new Dt.origin.Image;i&&(a.setAttribute("crossOrigin",i),a.crossOrigin=i),a.onload=()=>{r(a)},a.onerror=l=>{o(l)},a.src=Dt.image.getRealURL(n)}),loadContent(n){return bf(this,arguments,void 0,function*(i,s="text"){const r=yield fetch(i);if(!r.ok)throw new Error(`${r.status}`);return yield r[s]()})},Image,PointerEvent,DragEvent},Dt.event={stopDefault(n){n.preventDefault()},stopNow(n){n.stopImmediatePropagation()},stop(n){n.stopPropagation()}},Dt.canvas=Ke.canvas(),Dt.conicGradientSupport=!!Dt.canvas.context.createConicGradient}eg(CanvasRenderingContext2D.prototype),eg(Path2D.prototype),Object.assign(Ke,{canvas:(e,t)=>new Cy(e,t),image:e=>new vy(e)}),Dt.name="web",Dt.isMobile="ontouchstart"in window,Dt.requestRender=function(e){window.requestAnimationFrame(e)},ma(Dt,"devicePixelRatio",{get:()=>devicePixelRatio});const{userAgent:vc}=navigator;vc.indexOf("Firefox")>-1?(Dt.intWheelDeltaY=!0,Dt.syncDomFont=!0):(/iPhone|iPad|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&/Version\/[\d.]+.*Safari/.test(navigator.userAgent))&&(Dt.fullImageShadow=!0),vc.indexOf("Windows")>-1?(Dt.os="Windows",Dt.intWheelDeltaY=!0):vc.indexOf("Mac")>-1?Dt.os="Mac":vc.indexOf("Linux")>-1&&(Dt.os="Linux");class J1{get childrenChanged(){return this.hasAdd||this.hasRemove||this.hasVisible}get updatedList(){if(this.hasRemove&&this.config.usePartLayout){const t=new Ye;return this.__updatedList.list.forEach(n=>{n.leafer&&t.add(n)}),t}return this.__updatedList}constructor(t,n){this.totalTimes=0,this.config={},this.__updatedList=new Ye,this.target=t,n&&(this.config=De.default(n,this.config)),this.__listenEvents()}start(){this.disabled||(this.running=!0)}stop(){this.running=!1}disable(){this.stop(),this.__removeListenEvents(),this.disabled=!0}update(){this.changed=!0,this.running&&this.target.emit(Re.REQUEST)}__onAttrChange(t){this.config.usePartLayout&&this.__updatedList.add(t.target),this.update()}__onChildEvent(t){this.config.usePartLayout&&(t.type===an.ADD?(this.hasAdd=!0,this.__pushChild(t.child)):(this.hasRemove=!0,this.__updatedList.add(t.parent))),this.update()}__pushChild(t){this.__updatedList.add(t),t.isBranch&&this.__loopChildren(t)}__loopChildren(t){const{children:n}=t;for(let i=0,s=n.length;i<s;i++)this.__pushChild(n[i])}__onRquestData(){this.target.emitEvent(new xr(xr.DATA,{updatedList:this.updatedList})),this.__updatedList=new Ye,this.totalTimes++,this.changed=this.hasVisible=this.hasRemove=this.hasAdd=!1}__listenEvents(){this.__eventIds=[this.target.on_([[mr.CHANGE,this.__onAttrChange,this],[[an.ADD,an.REMOVE],this.__onChildEvent,this],[xr.REQUEST,this.__onRquestData,this]])]}__removeListenEvents(){this.target.off_(this.__eventIds)}destroy(){this.target&&(this.stop(),this.__removeListenEvents(),this.target=this.__updatedList=null)}}const{updateAllMatrix:Q1,updateBounds:u0,updateChange:tR}=We,{pushAllChildBranch:eR,pushAllParent:d0}=Ul,{worldBounds:f0}=Gh;class p0{constructor(t){this.updatedBounds=new cn,this.beforeBounds=new cn,this.afterBounds=new cn,ln(t)&&(t=new Ye(t)),this.updatedList=t}setBefore(){this.beforeBounds.setListWithFn(this.updatedList.list,f0)}setAfter(){this.afterBounds.setListWithFn(this.updatedList.list,f0),this.updatedBounds.setList([this.beforeBounds,this.afterBounds])}merge(t){this.updatedList.addList(t.updatedList.list),this.beforeBounds.add(t.beforeBounds),this.afterBounds.add(t.afterBounds),this.updatedBounds.add(t.updatedBounds)}destroy(){this.updatedList=null}}const{updateAllMatrix:nR,updateAllChange:iR}=We,Zu=Ge.get("Layouter");class Sh{constructor(t,n){this.totalTimes=0,this.config={usePartLayout:!0},this.__levelList=new KA,this.target=t,n&&(this.config=De.default(n,this.config)),this.__listenEvents()}start(){this.disabled||(this.running=!0)}stop(){this.running=!1}disable(){this.stop(),this.__removeListenEvents(),this.disabled=!0}layout(){if(this.layouting||!this.running)return;const{target:t}=this;this.times=0;try{t.emit(Ve.START),this.layoutOnce(),t.emitEvent(new Ve(Ve.END,this.layoutedBlocks,this.times))}catch(n){Zu.error(n)}this.layoutedBlocks=null}layoutAgain(){this.layouting?this.waitAgain=!0:this.layoutOnce()}layoutOnce(){return this.layouting?Zu.warn("layouting"):this.times>3?Zu.warn("layout max times"):(this.times++,this.totalTimes++,this.layouting=!0,this.target.emit(xr.REQUEST),this.totalTimes>1&&this.config.usePartLayout?this.partLayout():this.fullLayout(),this.layouting=!1,void(this.waitAgain&&(this.waitAgain=!1,this.layoutOnce())))}partLayout(){var t;if(!(!((t=this.__updatedList)===null||t===void 0)&&t.length))return;const n=Ri.start("PartLayout"),{target:i,__updatedList:s}=this,{BEFORE:r,LAYOUT:o,AFTER:a}=Ve,l=this.getBlocks(s);l.forEach(c=>c.setBefore()),i.emitEvent(new Ve(r,l,this.times)),this.extraBlock=null,s.sort(),function(c,h){let d;c.list.forEach(f=>{d=f.__layout,h.without(f)&&!d.proxyZoom&&(d.matrixChanged?(Q1(f,!0),h.add(f),f.isBranch&&eR(f,h),d0(f,h)):d.boundsChanged&&(h.add(f),f.isBranch&&(f.__tempNumber=0),d0(f,h)))})}(s,this.__levelList),function(c){let h,d,f;c.sort(!0),c.levels.forEach(u=>{h=c.levelMap[u];for(let m=0,g=h.length;m<g;m++){if(d=h[m],d.isBranch&&d.__tempNumber){f=d.children;for(let _=0,p=f.length;_<p;_++)f[_].isBranch||u0(f[_])}u0(d)}})}(this.__levelList),function(c){c.list.forEach(tR)}(s),this.extraBlock&&l.push(this.extraBlock),l.forEach(c=>c.setAfter()),i.emitEvent(new Ve(o,l,this.times)),i.emitEvent(new Ve(a,l,this.times)),this.addBlocks(l),this.__levelList.reset(),this.__updatedList=null,Ri.end(n)}fullLayout(){const t=Ri.start("FullLayout"),{target:n}=this,{BEFORE:i,LAYOUT:s,AFTER:r}=Ve,o=this.getBlocks(new Ye(n));n.emitEvent(new Ve(i,o,this.times)),Sh.fullLayout(n),o.forEach(a=>{a.setAfter()}),n.emitEvent(new Ve(s,o,this.times)),n.emitEvent(new Ve(r,o,this.times)),this.addBlocks(o),Ri.end(t)}static fullLayout(t){nR(t,!0),t.isBranch?Ul.updateBounds(t):We.updateBounds(t),iR(t)}addExtra(t){if(!this.__updatedList.has(t)){const{updatedList:n,beforeBounds:i}=this.extraBlock||(this.extraBlock=new p0([]));n.length?i.add(t.__world):i.set(t.__world),n.add(t)}}createBlock(t){return new p0(t)}getBlocks(t){return[this.createBlock(t)]}addBlocks(t){this.layoutedBlocks?this.layoutedBlocks.push(...t):this.layoutedBlocks=t}__onReceiveWatchData(t){this.__updatedList=t.data.updatedList}__listenEvents(){this.__eventIds=[this.target.on_([[Ve.REQUEST,this.layout,this],[Ve.AGAIN,this.layoutAgain,this],[xr.DATA,this.__onReceiveWatchData,this]])]}__removeListenEvents(){this.target.off_(this.__eventIds)}destroy(){this.target&&(this.stop(),this.__removeListenEvents(),this.target=this.config=null)}}const Po=Ge.get("Renderer");class Xh{get needFill(){return!(this.canvas.allowBackgroundColor||!this.config.fill)}constructor(t,n,i){this.FPS=60,this.totalTimes=0,this.times=0,this.config={usePartRender:!0,ceilPartPixel:!0,maxFPS:120},this.frames=[],this.target=t,this.canvas=n,i&&(this.config=De.default(i,this.config)),this.__listenEvents()}start(){this.running=!0,this.update(!1)}stop(){this.running=!1}update(t=!0){this.changed||(this.changed=t),this.requestTime||this.__requestRender()}requestLayout(){this.target.emit(Ve.REQUEST)}checkRender(){if(this.running){const{target:t}=this;t.isApp&&(t.emit(Re.CHILD_START,t),t.children.forEach(n=>{n.renderer.FPS=this.FPS,n.renderer.checkRender()}),t.emit(Re.CHILD_END,t)),this.changed&&this.canvas.view&&this.render(),this.target.emit(Re.NEXT)}}render(t){if(!this.running||!this.canvas.view)return this.update();const{target:n}=this;this.times=0,this.totalBounds=new cn,Po.log(n.innerName,"--->");try{this.emitRender(Re.START),this.renderOnce(t),this.emitRender(Re.END,this.totalBounds),Ui.clearRecycled()}catch(i){this.rendering=!1,Po.error(i)}Po.log("-------------|")}renderAgain(){this.rendering?this.waitAgain=!0:this.renderOnce()}renderOnce(t){if(this.rendering)return Po.warn("rendering");if(this.times>3)return Po.warn("render max times");if(this.times++,this.totalTimes++,this.rendering=!0,this.changed=!1,this.renderBounds=new cn,this.renderOptions={},t)this.emitRender(Re.BEFORE),t();else{if(this.requestLayout(),this.ignore)return void(this.ignore=this.rendering=!1);this.emitRender(Re.BEFORE),this.config.usePartRender&&this.totalTimes>1?this.partRender():this.fullRender()}this.emitRender(Re.RENDER,this.renderBounds,this.renderOptions),this.emitRender(Re.AFTER,this.renderBounds,this.renderOptions),this.updateBlocks=null,this.rendering=!1,this.waitAgain&&(this.waitAgain=!1,this.renderOnce())}partRender(){const{canvas:t,updateBlocks:n}=this;n&&(this.mergeBlocks(),n.forEach(i=>{t.bounds.hit(i)&&!i.isEmpty()&&this.clipRender(i)}))}clipRender(t){const n=Ri.start("PartRender"),{canvas:i}=this,s=t.getIntersect(i.bounds),r=new cn(s);i.save(),s.spread(Xh.clipSpread).ceil();const{ceilPartPixel:o}=this.config;i.clipWorld(s,o),i.clearWorld(s,o),this.__render(s,r),i.restore(),Ri.end(n)}fullRender(){const t=Ri.start("FullRender"),{canvas:n}=this;n.save(),n.clear(),this.__render(n.bounds),n.restore(),Ri.end(t)}__render(t,n){const{canvas:i,target:s}=this,r=t.includes(s.__world),o=r?{includes:r}:{bounds:t,includes:r};this.needFill&&i.fillWorld(t,this.config.fill),Ge.showRepaint&&Ge.drawRepaint(i,t),this.config.useCellRender&&(o.cellList=this.getCellList()),Dt.render(s,i,o),this.renderBounds=n=n||t,this.renderOptions=o,this.totalBounds.isEmpty()?this.totalBounds=n:this.totalBounds.add(n),i.updateRender(n)}getCellList(){}addBlock(t,n){this.updateBlocks||(this.updateBlocks=[]),this.updateBlocks.push(t)}mergeBlocks(){const{updateBlocks:t}=this;if(t){const n=new cn;n.setList(t),t.length=0,t.push(n)}}__requestRender(){const t=this.target;if(this.requestTime||!t)return;if(t.parentApp)return t.parentApp.requestRender(!1);this.requestTime=this.frameTime||Date.now();const n=()=>{const i=1e3/((this.frameTime=Date.now())-this.requestTime),{maxFPS:s}=this.config;if(s&&i>s)return Dt.requestRender(n);const{frames:r}=this;r.length>30&&r.shift(),r.push(i),this.FPS=Math.round(r.reduce((o,a)=>o+a,0)/r.length),this.requestTime=0,this.checkRender()};Dt.requestRender(n)}__onResize(t){if(!this.canvas.unreal){if(t.bigger||!t.samePixelRatio){const{width:n,height:i}=t.old;if(!new cn(0,0,n,i).includes(this.target.__world)||this.needFill||!t.samePixelRatio)return this.addBlock(this.canvas.bounds),void this.target.forceUpdate("surface")}this.addBlock(new cn(0,0,1,1)),this.update()}}__onLayoutEnd(t){t.data&&t.data.map(n=>{let i;const{updatedList:s}=n;s&&s.list.some(r=>(i=!r.__world.width||!r.__world.height,i&&(r.isLeafer||Po.tip(r.innerName,": empty"),i=!r.isBranch||r.isBranchLeaf),i)),this.addBlock(i?this.canvas.bounds:n.updatedBounds,s)})}emitRender(t,n,i){this.target.emitEvent(new Re(t,this.times,n,i))}__listenEvents(){this.__eventIds=[this.target.on_([[Re.REQUEST,this.update,this],[Ve.END,this.__onLayoutEnd,this],[Re.AGAIN,this.renderAgain,this],[co.RESIZE,this.__onResize,this]])]}__removeListenEvents(){this.target.off_(this.__eventIds)}destroy(){this.target&&(this.stop(),this.__removeListenEvents(),this.config={},this.target=this.canvas=null)}}Xh.clipSpread=10;const sR={},{copyRadiusPoint:rR}=le,{hitRadiusPoint:oR}=Ut;class aR{constructor(t,n){this.target=t,this.selector=n}getByPoint(t,n,i){n||(n=0),i||(i={});const s=i.through||!1,r=i.ignoreHittable||!1,o=i.target||this.target;this.exclude=i.exclude||null,this.point={x:t.x,y:t.y,radiusX:n,radiusY:n},this.findList=new Ye(i.findList),i.findList||this.hitBranch(o.isBranchLeaf?{children:[o]}:o);const{list:a}=this.findList,l=this.getBestMatchLeaf(a,i.bottomList,r,!!i.findList),c=r?this.getPath(l):this.getHitablePath(l);return this.clear(),s?{path:c,target:l,throughPath:a.length?this.getThroughPath(a):c}:{path:c,target:l}}hitPoint(t,n,i){return!!this.getByPoint(t,n,i).target}getBestMatchLeaf(t,n,i,s){const r=this.findList=new Ye;if(t.length){let o;const{x:a,y:l}=this.point,c={x:a,y:l,radiusX:0,radiusY:0};for(let h=0,d=t.length;h<d;h++)if(o=t[h],(i||We.worldHittable(o))&&(this.hitChild(o,c),r.length)){if(o.isBranchLeaf&&t.some(f=>f!==o&&We.hasParent(f,o))){r.reset();break}return r.list[0]}}if(n){for(let o=0,a=n.length;o<a;o++)if(this.hitChild(n[o].target,this.point,n[o].proxy),r.length)return r.list[0]}return s?null:i?t[0]:t.find(o=>We.worldHittable(o))}getPath(t){const n=new Ye,i=[],{target:s}=this;for(;t&&(t.syncEventer&&i.push(t.syncEventer),n.add(t),(t=t.parent)!==s););return i.length&&i.forEach(r=>{for(;r&&(r.__.hittable&&n.add(r),(r=r.parent)!==s););}),s&&n.add(s),n}getHitablePath(t){const n=this.getPath(t&&t.hittable?t:null);let i,s=new Ye;for(let r=n.list.length-1;r>-1&&(i=n.list[r],i.__.hittable)&&(s.addAt(i,0),i.__.hitChildren&&(!i.isLeafer||i.mode!=="draw"));r--);return s}getThroughPath(t){const n=new Ye,i=[];for(let a=t.length-1;a>-1;a--)i.push(this.getPath(t[a]));let s,r,o;for(let a=0,l=i.length;a<l;a++){s=i[a],r=i[a+1];for(let c=0,h=s.length;c<h&&(o=s.list[c],!r||!r.has(o));c++)n.add(o)}return n}hitBranch(t){this.eachFind(t.children,t.__onlyHitMask)}eachFind(t,n){let i,s,r;const{point:o}=this;for(let a=t.length-1;a>-1;a--)if(i=t[a],r=i.__,r.visible&&(!n||r.mask))if(s=oR(i.__world,r.hitRadius?rR(sR,o,r.hitRadius):o),i.isBranch){if(s||i.__ignoreHitWorld){if(i.isBranchLeaf&&r.__clipAfterFill&&!i.__hitWorld(o,!0))continue;i.topChildren&&this.eachFind(i.topChildren,!1),this.eachFind(i.children,i.__onlyHitMask),i.isBranchLeaf&&this.hitChild(i,o)}}else s&&this.hitChild(i,o)}hitChild(t,n,i){if((!this.exclude||!this.exclude.has(t))&&t.__hitWorld(n)){const{parent:s}=t;if(s&&s.__hasMask&&!t.__.mask){let r,o=[];const{children:a}=s;for(let l=0,c=a.length;l<c;l++)if(r=a[l],r.__.mask&&o.push(r),r===t){if(o&&!o.every(h=>h.__hitWorld(n)))return;break}}this.findList.add(i||t)}}clear(){this.point=null,this.findList=null,this.exclude=null}destroy(){this.clear()}}class lR{constructor(t,n){this.config={},n&&(this.config=De.default(n,this.config)),this.picker=new aR(this.target=t,this),this.finder=Ke.finder&&Ke.finder(t,this.config)}getByPoint(t,n,i){const{target:s,picker:r}=this;return Dt.backgrounder&&s&&s.updateLayout(),r.getByPoint(t,n,i)}hitPoint(t,n,i){return this.picker.hitPoint(t,n,i)}getBy(t,n,i,s){return this.finder?this.finder.getBy(t,n,i,s):jn.need("find")}destroy(){this.picker.destroy(),this.finder&&this.finder.destroy()}}Object.assign(Ke,{watcher:(e,t)=>new J1(e,t),layouter:(e,t)=>new Sh(e,t),renderer:(e,t,n)=>new Xh(e,t,n),selector:(e,t)=>new lR(e,t)}),Dt.layout=Sh.fullLayout,Dt.render=function(e,t,n){const i=Object.assign(Object.assign({},n),{topRendering:!0});n.topList=new Ye,e.__render(t,n),n.topList.length&&n.topList.forEach(s=>s.__render(t,i))};const Xn={convert(e,t){const n=Ni.getBase(e),{x:i,y:s}=t,r=Object.assign(Object.assign({},n),{x:i,y:s,width:e.width,height:e.height,pointerType:e.pointerType,pressure:e.pressure});return r.pointerType==="pen"&&(r.tangentialPressure=e.tangentialPressure,r.tiltX=e.tiltX,r.tiltY=e.tiltY,r.twist=e.twist),r},convertMouse(e,t){const n=Ni.getBase(e),{x:i,y:s}=t;return Object.assign(Object.assign({},n),{x:i,y:s,width:1,height:1,pointerType:"mouse",pressure:.5})},convertTouch(e,t){const n=Xn.getTouch(e),i=Ni.getBase(e),{x:s,y:r}=t;return Object.assign(Object.assign({},i),{x:s,y:r,width:1,height:1,pointerType:"touch",multiTouch:e.touches.length>1,pressure:n.force})},getTouch:e=>e.targetTouches[0]||e.changedTouches[0]},_0={convert(e){const t=Ni.getBase(e);return Object.assign(Object.assign({},t),{code:e.code,key:e.key})}},{pathCanDrag:cR}=Ni;class hR extends X1{get windowTarget(){const{view:t}=this;return t&&t.ownerDocument||window}get notPointer(){const{p:t}=this;return t.type!=="pointer"||t.touch||this.useMultiTouch}get notTouch(){const{p:t}=this;return t.type==="mouse"||this.usePointer}get notMouse(){return this.usePointer||this.useTouch}__listenEvents(){super.__listenEvents();const t=this.view=this.canvas.view;this.viewEvents={pointerdown:this.onPointerDown,mousedown:this.onMouseDown,touchstart:this.onTouchStart,pointerleave:this.onPointerLeave,contextmenu:this.onContextMenu,wheel:this.onWheel,gesturestart:this.onGesturestart,gesturechange:this.onGesturechange,gestureend:this.onGestureend},this.windowEvents={pointermove:this.onPointerMove,pointerup:this.onPointerUp,pointercancel:this.onPointerCancel,mousemove:this.onMouseMove,mouseup:this.onMouseUp,touchmove:this.onTouchMove,touchend:this.onTouchEnd,touchcancel:this.onTouchCancel,keydown:this.onKeyDown,keyup:this.onKeyUp,scroll:this.onScroll};const{viewEvents:n,windowEvents:i}=this;for(let s in n)n[s]=n[s].bind(this),t.addEventListener(s,n[s]);for(let s in i)i[s]=i[s].bind(this),this.windowTarget.addEventListener(s,i[s])}__removeListenEvents(){super.__removeListenEvents();const{viewEvents:t,windowEvents:n}=this;for(let i in t)this.view.removeEventListener(i,t[i]),this.viewEvents={};for(let i in n)this.windowTarget.removeEventListener(i,n[i]),this.windowEvents={}}getTouches(t){const n=[];for(let i=0,s=t.length;i<s;i++)n.push(t[i]);return n}preventDefaultPointer(t){const{pointer:n}=this.config;n.preventDefault&&t.preventDefault()}preventDefaultWheel(t){const{wheel:n}=this.config;n.preventDefault&&t.preventDefault()}preventWindowPointer(t){return!this.downData&&t.target!==this.view&&(!this.config.shadowDOM||!t.composedPath||!t.composedPath().includes(this.view))}onKeyDown(t){this.keyDown(_0.convert(t))}onKeyUp(t){this.keyUp(_0.convert(t))}onContextMenu(t){this.config.pointer.preventDefaultMenu&&t.preventDefault(),this.menu(Xn.convert(t,this.getLocal(t)))}onScroll(){this.canvas.updateClientBounds()}onPointerDown(t){this.preventDefaultPointer(t),this.notPointer||(this.usePointer||(this.usePointer=!0),this.pointerDown(Xn.convert(t,this.getLocal(t))))}onPointerMove(t,n){if(this.notPointer||this.preventWindowPointer(t))return;this.usePointer||(this.usePointer=!0);const i=Xn.convert(t,this.getLocal(t,!0));n?this.pointerHover(i):this.pointerMove(i)}onPointerLeave(t){this.onPointerMove(t,!0)}onPointerUp(t){this.downData&&this.preventDefaultPointer(t),this.notPointer||this.preventWindowPointer(t)||this.pointerUp(Xn.convert(t,this.getLocal(t)))}onPointerCancel(){this.useMultiTouch||this.pointerCancel()}onMouseDown(t){this.preventDefaultPointer(t),this.notMouse||this.pointerDown(Xn.convertMouse(t,this.getLocal(t)))}onMouseMove(t){this.notMouse||this.preventWindowPointer(t)||this.pointerMove(Xn.convertMouse(t,this.getLocal(t,!0)))}onMouseUp(t){this.downData&&this.preventDefaultPointer(t),this.notMouse||this.preventWindowPointer(t)||this.pointerUp(Xn.convertMouse(t,this.getLocal(t)))}onMouseCancel(){this.notMouse||this.pointerCancel()}onTouchStart(t){const n=Xn.getTouch(t),i=this.getLocal(n,!0),{preventDefault:s}=this.config.touch;(s===!0||s==="auto"&&cR(this.findPath(i)))&&t.preventDefault(),this.multiTouchStart(t),this.notTouch||(this.touchTimer&&(window.clearTimeout(this.touchTimer),this.touchTimer=0),this.useTouch=!0,this.pointerDown(Xn.convertTouch(t,i)))}onTouchMove(t){if(this.multiTouchMove(t),this.notTouch||this.preventWindowPointer(t))return;const n=Xn.getTouch(t);this.pointerMove(Xn.convertTouch(t,this.getLocal(n)))}onTouchEnd(t){if(this.multiTouchEnd(),this.notTouch||this.preventWindowPointer(t))return;this.touchTimer&&clearTimeout(this.touchTimer),this.touchTimer=setTimeout(()=>{this.useTouch=!1},500);const n=Xn.getTouch(t);this.pointerUp(Xn.convertTouch(t,this.getLocal(n)))}onTouchCancel(){this.notTouch||this.pointerCancel()}multiTouchStart(t){this.useMultiTouch=t.touches.length>1,this.touches=this.useMultiTouch?this.getTouches(t.touches):void 0,this.useMultiTouch&&this.pointerCancel()}multiTouchMove(t){if(this.useMultiTouch&&t.touches.length>1){const n=this.getTouches(t.touches),i=this.getKeepTouchList(this.touches,n);i.length>1&&(this.multiTouch(Ni.getBase(t),i),this.touches=n)}}multiTouchEnd(){this.touches=null,this.useMultiTouch=!1,this.transformEnd()}getKeepTouchList(t,n){let i;const s=[];return t.forEach(r=>{i=n.find(o=>o.identifier===r.identifier),i&&s.push({from:this.getLocal(r),to:this.getLocal(i)})}),s}getLocalTouchs(t){return t.map(n=>this.getLocal(n))}onWheel(t){this.preventDefaultWheel(t),this.wheel(Object.assign(Object.assign(Object.assign({},Ni.getBase(t)),this.getLocal(t)),{deltaX:t.deltaX,deltaY:t.deltaY}))}onGesturestart(t){this.useMultiTouch||(this.preventDefaultWheel(t),this.lastGestureScale=1,this.lastGestureRotation=0)}onGesturechange(t){if(this.useMultiTouch)return;this.preventDefaultWheel(t);const n=Ni.getBase(t);Object.assign(n,this.getLocal(t));const i=t.scale/this.lastGestureScale,s=(t.rotation-this.lastGestureRotation)/Math.PI*180*(wn.within(this.config.wheel.rotateSpeed,0,1)/4+.1);this.zoom(Object.assign(Object.assign({},n),{scale:i*i})),this.rotate(Object.assign(Object.assign({},n),{rotation:s})),this.lastGestureScale=t.scale,this.lastGestureRotation=t.rotation}onGestureend(t){this.useMultiTouch||(this.preventDefaultWheel(t),this.transformEnd())}setCursor(t){super.setCursor(t);const n=[];this.eachCursor(t,n),ze(n[n.length-1])&&n.push("default"),this.canvas.view.style.cursor=n.map(i=>ze(i)?`url(${i.url}) ${i.x||0} ${i.y||0}`:i).join(",")}eachCursor(t,n,i=0){if(i++,ln(t))t.forEach(s=>this.eachCursor(s,n,i));else{const s=tn(t)&&Ry.get(t);s&&i<2?this.eachCursor(s,n,i):n.push(t)}}destroy(){this.view&&(super.destroy(),this.view=null,this.touches=null)}}function Ba(e,t,n){e.__.__font?fe.fillText(e,t,n):e.__.windingRule?t.fill(e.__.windingRule):t.fill()}function yc(e,t,n,i,s){const r=n.__;ze(e)?fe.drawStrokesStyle(e,t,!1,n,i,s):(i.setStroke(e,r.__strokeWidth*t,r),i.stroke()),r.__useArrow&&fe.strokeArrow(e,n,i,s)}function Ef(e,t,n,i,s){const r=n.__;ze(e)?fe.drawStrokesStyle(e,t,!0,n,i,s):(i.setStroke(e,r.__strokeWidth*t,r),fe.drawTextStroke(n,i,s))}function m0(e,t,n,i,s){const r=i.getSameCanvas(!0,!0);r.font=n.__.__font,Ef(e,2,n,r,s),r.blendMode=t==="outside"?"destination-out":"destination-in",fe.fillText(n,r,s),r.blendMode="normal",We.copyCanvasByWorld(n,i,r),r.recycle(n.__nowWorld)}const{getSpread:uR,copyAndSpread:dR,toOuterOf:fR,getOuterOf:g0,getByMove:pR,move:_R,getIntersectData:mR}=Ut,x0={};let wf;const{stintSet:ka}=De,{hasTransparent:gR}=Zn;function xR(e,t,n){if(!ze(t)||t.visible===!1||t.opacity===0)return;let i;const{boxBounds:s}=n.__layout,{type:r}=t;switch(r){case"image":case"film":case"video":if(!t.url)return;i=Be.image(n,e,t,s,!wf||!wf[t.url]),r!=="image"&&Be[r](i);break;case"linear":i=sh.linearGradient(t,s);break;case"radial":i=sh.radialGradient(t,s);break;case"angular":i=sh.conicGradient(t,s);break;case"solid":const{color:o,opacity:a}=t;i={type:r,style:Zn.string(o,a)};break;default:Kt(t.r)||(i={type:"solid",style:Zn.string(t)})}if(i&&(i.originPaint=t,tn(i.style)&&gR(i.style)&&(i.isTransparent=!0),t.style)){if(t.style.strokeWidth===0)return;i.strokeStyle=t.style}return i}const vR={compute:function(e,t){const n=t.__,i=[];let s,r,o,a=n.__input[e];ln(a)||(a=[a]),wf=Be.recycleImage(e,n);for(let l,c=0,h=a.length;c<h;c++)(l=xR(e,a[c],t))&&(i.push(l),l.strokeStyle&&(o||(o=1),l.strokeStyle.strokeWidth&&(o=Math.max(o,l.strokeStyle.strokeWidth))));i.length?(n["_"+e]=i,i.every(l=>l.isTransparent)&&(i.some(l=>l.image)&&(s=!0),r=!0),e==="fill"?(ka(n,"__isAlphaPixelFill",s),ka(n,"__isTransparentFill",r)):(ka(n,"__isAlphaPixelStroke",s),ka(n,"__isTransparentStroke",r),ka(n,"__hasMultiStrokeStyle",o))):(n.__removePaint(e,!1),n["_"+e]="")},fill:function(e,t,n,i){n.fillStyle=e,Ba(t,n,i)},fills:function(e,t,n,i){let s,r,o;for(let a=0,l=e.length;a<l;a++){if(s=e[a],r=s.originPaint,s.image){if(o?o++:o=1,Be.checkImage(s,!t.__.__font,t,n,i))continue;if(!s.style){o===1&&s.image.isPlacehold&&t.drawImagePlaceholder(s,n,i);continue}}if(n.fillStyle=s.style,s.transform||r.scaleFixed){if(n.save(),s.transform&&n.transform(s.transform),r.scaleFixed){const{scaleX:c,scaleY:h}=t.getRenderScaleData(!0,r.scaleFixed,!1);c!==1&&n.scale(c,h)}r.blendMode&&(n.blendMode=r.blendMode),Ba(t,n,i),n.restore()}else r.blendMode?(n.saveBlendMode(r.blendMode),Ba(t,n,i),n.restoreBlendMode()):Ba(t,n,i)}},fillPathOrText:Ba,fillText:function(e,t,n){const i=e.__,{rows:s,decorationY:r}=i.__textDrawData;let o;i.__isPlacehold&&i.placeholderColor&&(t.fillStyle=i.placeholderColor);for(let a=0,l=s.length;a<l;a++)o=s[a],o.text?t.fillText(o.text,o.x,o.y):o.data&&o.data.forEach(c=>{t.fillText(c.char,c.x,o.y)});if(r){const{decorationColor:a,decorationHeight:l}=i.__textDrawData;a&&(t.fillStyle=a),s.forEach(c=>r.forEach(h=>t.fillRect(c.x,c.y+h,c.width,l)))}},stroke:function(e,t,n,i){const s=t.__;if(s.__strokeWidth)if(s.__font)fe.strokeText(e,t,n,i);else if(s.__pathForStroke)fe.fillStroke(e,t,n,i);else switch(s.strokeAlign){case"center":yc(e,1,t,n,i);break;case"inside":(function(r,o,a,l){a.save(),a.clipUI(o),yc(r,2,o,a,l),a.restore()})(e,t,n,i);break;case"outside":(function(r,o,a,l){const c=o.__;if(c.__fillAfterStroke)yc(r,2,o,a,l);else{const{renderBounds:h}=o.__layout,d=a.getSameCanvas(!0,!0);o.__drawRenderPath(d),yc(r,2,o,d,l),d.clipUI(c),d.clearWorld(h),We.copyCanvasByWorld(o,a,d),d.recycle(o.__nowWorld)}})(e,t,n,i)}},strokes:function(e,t,n,i){fe.stroke(e,t,n,i)},strokeText:function(e,t,n,i){switch(t.__.strokeAlign){case"center":Ef(e,1,t,n,i);break;case"inside":m0(e,"inside",t,n,i);break;case"outside":t.__.__fillAfterStroke?Ef(e,2,t,n,i):m0(e,"outside",t,n,i)}},drawTextStroke:function(e,t,n){let i,s=e.__.__textDrawData;const{rows:r,decorationY:o}=s;for(let a=0,l=r.length;a<l;a++)i=r[a],i.text?t.strokeText(i.text,i.x,i.y):i.data&&i.data.forEach(c=>{t.strokeText(c.char,c.x,i.y)});if(o){const{decorationHeight:a}=s;r.forEach(l=>o.forEach(c=>t.strokeRect(l.x,l.y+c,l.width,a)))}},drawStrokesStyle:function(e,t,n,i,s,r){let o;const a=i.__,{__hasMultiStrokeStyle:l}=a;l||s.setStroke(void 0,a.__strokeWidth*t,a);for(let c=0,h=e.length;c<h;c++)if(o=e[c],(!o.image||!Be.checkImage(o,!1,i,s,r))&&o.style){if(l){const{strokeStyle:d}=o;d?s.setStroke(o.style,a.__getRealStrokeWidth(d)*t,a,d):s.setStroke(o.style,a.__strokeWidth*t,a)}else s.strokeStyle=o.style;o.originPaint.blendMode?(s.saveBlendMode(o.originPaint.blendMode),n?fe.drawTextStroke(i,s,r):s.stroke(),s.restoreBlendMode()):n?fe.drawTextStroke(i,s,r):s.stroke()}},shape:function(e,t,n){const i=t.getSameCanvas(),s=t.bounds,r=e.__nowWorld,o=e.__layout,a=e.__nowWorldShapeBounds||(e.__nowWorldShapeBounds={});let l,c,h,d,f,u;fR(o.strokeSpread?(dR(x0,o.boxBounds,o.strokeSpread),x0):o.boxBounds,r,a);let{scaleX:m,scaleY:g}=e.getRenderScaleData(!0);if(s.includes(a))u=i,l=f=a,c=r;else{let _;if(Dt.fullImageShadow)_=a;else{const S=o.renderShapeSpread?uR(s,Il.swapAndScale(o.renderShapeSpread,m,g)):s;_=mR(S,a)}d=s.getFitMatrix(_);let{a:p,d:y}=d;d.a<1&&(u=t.getSameCanvas(),e.__renderShape(u,n),m*=p,g*=y),f=g0(a,d),l=pR(f,-d.e,-d.f),c=g0(r,d),_R(c,-d.e,-d.f);const M=n.matrix;M?(h=new io(d),h.multiply(M),p*=M.scaleX,y*=M.scaleY):h=d,h.withScale(p,y),n=Object.assign(Object.assign({},n),{matrix:h})}return e.__renderShape(i,n),{canvas:i,matrix:h,fitMatrix:d,bounds:l,renderBounds:c,worldCanvas:u,shapeBounds:f,scaleX:m,scaleY:g}}};let za,yR=new cn;const{isSame:SR}=Ut;function v0(e,t,n,i,s,r){let o=!0;const a=e.__;if(t!=="fill"||a.__naturalWidth||(a.__naturalWidth=i.width/a.pixelRatio,a.__naturalHeight=i.height/a.pixelRatio,a.__autoSide&&(e.forceUpdate("width"),We.updateBounds(e),e.__proxyData&&(e.setProxyAttr("width",a.width),e.setProxyAttr("height",a.height)),o=!1)),n.mode==="brush"&&Be.brush(s),!s.data){Be.createData(s,i,n,r);const{transform:l}=s.data,{opacity:c}=n,h=(l&&!l.onlyScale||a.path||a.cornerRadius)&&!s.brush;(h||c&&c<1||n.blendMode)&&(s.complex=!h||2)}return n.filter&&Be.applyFilter(s,i,n.filter,e),o}function y0(e,t){Zp(e,Fs.LOAD,t)}function S0(e,t){Zp(e,Fs.LOADED,t)}function M0(e,t,n){t.error=n,e.forceUpdate("surface"),Zp(e,Fs.ERROR,t)}function Zp(e,t,n){e.hasEvent(t)&&e.emitEvent(new Fs(t,n))}function Ju(e,t){const{leafer:n}=e;n&&n.viewReady&&(n.renderer.ignore=t)}const{get:MR,translate:bR}=ie,ER=new cn,Qu={},gn={};function b0(e,t,n,i){const s=tn(e)||i?(i?n-i*t:n%t)/((i||Math.floor(n/t))-1):e;return e==="auto"&&s<0?0:s}let Ha={},td=ny();const{get:Sc,set:wR,rotateOfOuter:E0,translate:Yr,scaleOfOuter:ed,multiplyParent:TR,scale:Tf,rotate:Py,skew:AR}=ie;function w0(e,t,n,i,s,r,o,a){o&&Py(e,o),a&&AR(e,a.x,a.y),s&&Tf(e,s,r),Yr(e,t.x+n,t.y+i)}const{get:RR,scale:CR,copy:PR}=ie,{getFloorScale:T0}=wn,{abs:A0}=Math,LR={image:function(e,t,n,i,s){let r,o;const a=Ui.get(n,n.type);return za&&n===za.paint&&SR(i,za.boxBounds)?r=za.leafPaint:(r={type:n.type,image:a},a.hasAlphaPixel&&(r.isTransparent=!0),za=a.use>1?{leafPaint:r,paint:n,boxBounds:yR.set(i)}:null),(s||a.loading)&&(o={image:a,attrName:t,attrValue:n}),a.ready?(v0(e,t,n,a,r,i),s&&(y0(e,o),S0(e,o))):a.error?s&&M0(e,o,a.error):(s&&(Ju(e,!0),y0(e,o)),r.loadId=a.load(()=>{Ju(e,!1),e.destroyed||(v0(e,t,n,a,r,i)&&(a.hasAlphaPixel&&(e.__layout.hitCanvasChanged=!0),e.forceUpdate("surface")),S0(e,o)),r.loadId=void 0},l=>{Ju(e,!1),M0(e,o,l),r.loadId=void 0},n.lod&&a.getThumbSize(n.lod)),e.placeholderColor&&(e.placeholderDelay?setTimeout(()=>{a.ready||(a.isPlacehold=!0,e.forceUpdate("surface"))},e.placeholderDelay):a.isPlacehold=!0)),r},checkImage:function(e,t,n,i,s){const{scaleX:r,scaleY:o}=Be.getImageRenderScaleData(e,n,i,s),a=e.film?e.nowIndex:r+"-"+o,{image:l,brush:c,data:h,originPaint:d}=e,{exporting:f,snapshot:u}=s;if(!h||e.patternId===a&&!f||u){if(!c||!e.style)return!1}else if(t&&(h.repeat?t=!1:d.changeful||e.film||Dt.name==="miniapp"||f||(t=Dt.image.isLarge(l,r,o)||l.width*r>8096||l.height*o>8096)),t)n.__.__isFastShadow&&(i.fillStyle=e.style||"#000",i.fill());else if(!e.style||d.sync||f?Be.createPattern(e,n,i,s):Be.createPatternTask(e,n,i,s),!c||!e.style)return!1;return Be.drawImage(e,r,o,n,i,s),!0},drawImage:function(e,t,n,i,s,r){const{data:o,image:a,brush:l,complex:c}=e;let{width:h,height:d}=a,f=l||a;if(c){const{blendMode:u,opacity:m}=e.originPaint,{transform:g}=o;s.save(),c===2&&s.clipUI(i),u&&(s.blendMode=u),m&&(s.opacity*=m),g&&s.transform(g),f.render(s,0,0,h,d,i,e,t,n),s.restore()}else o.scaleX&&(h*=o.scaleX,d*=o.scaleY),f.render(s,0,0,h,d,i,e,t,n)},getImageRenderScaleData:function(e,t,n,i){const s=t.getRenderScaleData(!0,e.originPaint.scaleFixed),{data:r}=e;if(e.brush&&Be.addBrushScale(s,e,t),n){const{pixelRatio:o}=n;s.scaleX*=o,s.scaleY*=o}return r&&r.scaleX&&(s.scaleX*=Math.abs(r.scaleX),s.scaleY*=Math.abs(r.scaleY)),s},recycleImage:function(e,t){const n=t["_"+e];if(ln(n)){let i,s,r,o,a;const l=t.__leaf;for(let c=0,h=n.length;c<h;c++)i=n[c],s=i.image,a=s&&s.url,a&&(r||(r={}),r[a]=!0,Ui.recyclePaint(i),i.brush&&Be.recycleBrush(i,l),t.__willDestroy&&s.parent&&Be.recycleFilter(s,l),s.loading&&(o||(o=t.__input&&t.__input[e]||[],ln(o)||(o=[o])),s.unload(n[c].loadId,!o.some(d=>d.url===a))));return r}return null},createPatternTask:function(e,t,n,i){e.patternTask||(e.patternTask=Ui.patternTasker.add(()=>bf(this,void 0,void 0,function*(){Be.createPattern(e,t,n,i),t.forceUpdate("surface")}),0,()=>(e.patternTask=null,n.bounds.hit(t.__nowWorld))))},createPattern:function(e,t,n,i){let{scaleX:s,scaleY:r}=Be.getImageRenderScaleData(e,t,n,i),o=e.film?e.nowIndex:s+"-"+r;if(e.patternId!==o&&!t.destroyed&&(!Dt.image.isLarge(e.image,s,r)||e.data.repeat)){const{image:a,brush:l,data:c}=e,{opacity:h}=e.originPaint,{transform:d,gap:f}=c,u=Be.getPatternFixScale(e,s,r);let m,g,_,{width:p,height:y}=a;if(u&&(s*=u,r*=u),p*=s,y*=r,f&&(g=f.x*s/A0(c.scaleX||1),_=f.y*r/A0(c.scaleY||1),l)){const A=Be.getBrushScale(e,t);g/=A,_/=A}(d||s!==1||r!==1)&&(s*=T0(p+(g||0)),r*=T0(y+(_||0)),m=RR(),d&&PR(m,d),CR(m,1/s,1/r));const M=a.getCanvas(p,y,h,void 0,g,_,t.leafer&&t.leafer.config.smooth,c.interlace),S=l?M:a.getPattern(M,c.repeat||Dt.origin.noRepeat||"no-repeat",m,e);e.style=S,e.patternId=o}},getPatternFixScale:function(e,t,n){const{image:i}=e;let s,r=Dt.image.maxPatternSize,o=i.width*i.height;return i.isSVG?t>1&&(s=Math.ceil(t)/t):r>o&&(r=o),(o*=t*n)>r&&(s=Math.sqrt(r/o)),s},createData:function(e,t,n,i){e.data=Be.getPatternData(n,i,t)},getPatternData:function(e,t,n){e.padding&&(t=ER.set(t).shrink(e.padding)),e.mode==="strench"&&(e.mode="stretch");const{width:i,height:s}=n,{mode:r,align:o,offset:a,scale:l,size:c,rotation:h,skew:d,clipSize:f,repeat:u,gap:m,interlace:g}=e,_=t.width===i&&t.height===s,p={mode:r},y=o!=="center"&&(h||0)%180==90;let M,S;switch(Ut.set(gn,0,0,y?s:i,y?i:s),r&&r!=="cover"&&r!=="fit"?((l||c)&&(wn.getScaleData(l,c,n,Qu),M=Qu.scaleX,S=Qu.scaleY),(o||m||u)&&(M&&Ut.scale(gn,M,S,!0),o&&sy.toPoint(o,gn,t,gn,!0,!0))):_&&!h||(M=S=Ut.getFitScale(t,gn,r!=="fit"),Ut.put(t,n,o,M,!1,gn),Ut.scale(gn,M,S,!0)),a&&le.move(gn,a),r){case"stretch":_?M&&(M=S=void 0):(M=t.width/i,S=t.height/s,Be.stretchMode(p,t,M,S));break;case"normal":case"clip":if(gn.x||gn.y||M||f||h||d){let w,P;f&&(w=t.width/f.width,P=t.height/f.height),Be.clipMode(p,t,gn.x,gn.y,M,S,h,d,w,P),w&&(M=M?M*w:w,S=S?S*P:P)}break;case"repeat":case"brush":(!_||M||h||d)&&Be.repeatMode(p,t,i,s,gn.x,gn.y,M,S,h,d,o,e.freeTransform),u||(p.repeat="repeat");const A=ze(u);(m||A)&&(p.gap=function(w,P,v,T,U){let C,I;return ze(w)?(C=w.x,I=w.y):C=I=w,{x:b0(C,v,U.width,P&&P.x),y:b0(I,T,U.height,P&&P.y)}}(m,A&&u,gn.width,gn.height,t));break;default:M&&Be.fillOrFitMode(p,t,gn.x,gn.y,M,S,h)}return p.transform||(t.x||t.y)&&bR(p.transform=MR(),t.x,t.y),M&&(p.scaleX=M,p.scaleY=S),u&&(p.repeat=tn(u)?u==="x"?"repeat-x":"repeat-y":"repeat"),g&&(p.interlace=je(g)||g.type==="percent"?{type:"x",offset:g}:g),p},stretchMode:function(e,t,n,i){const s=Sc(),{x:r,y:o}=t;r||o?Yr(s,r,o):n>0&&i>0&&(s.onlyScale=!0),Tf(s,n,i),e.transform=s},fillOrFitMode:function(e,t,n,i,s,r,o){const a=Sc();Yr(a,t.x+n,t.y+i),Tf(a,s,r),o&&E0(a,{x:t.x+t.width/2,y:t.y+t.height/2},o),e.transform=a},clipMode:function(e,t,n,i,s,r,o,a,l,c){const h=Sc();w0(h,t,n,i,s,r,o,a),l&&(o||a?(wR(td),ed(td,t,l,c),TR(h,td)):ed(h,t,l,c)),e.transform=h},repeatMode:function(e,t,n,i,s,r,o,a,l,c,h,d){const f=Sc();if(d)w0(f,t,s,r,o,a,l,c);else{if(l)if(h==="center")E0(f,{x:n/2,y:i/2},l);else switch(Py(f,l),l){case 90:Yr(f,i,0);break;case 180:Yr(f,n,i);break;case 270:Yr(f,0,n)}Ha.x=t.x+s,Ha.y=t.y+r,Yr(f,Ha.x,Ha.y),o&&ed(f,Ha,o,a)}e.transform=f}},{toPoint:R0}=wr,{hasTransparent:DR}=Zn,nd={},id={};function sd(e,t,n,i){if(n){let s,r,o,a;for(let l=0,c=n.length;l<c;l++)s=n[l],tn(s)?(o=l/(c-1),r=Zn.string(s,i)):(o=s.offset,r=Zn.string(s.color,i)),t.addColorStop(o,r),!a&&DR(r)&&(a=!0);a&&(e.isTransparent=!0)}}const{getAngle:IR,getDistance:OR}=le,{get:UR,rotateOfOuter:C0,scaleOfOuter:P0}=ie,{toPoint:L0}=wr,Fr={},rd={};function od(e,t,n,i,s){let r;const{width:o,height:a}=e;if(o!==a||i){const l=IR(t,n);r=UR(),s?(P0(r,t,o/a*(i||1),1),C0(r,t,l+90)):(P0(r,t,1,o/a*(i||1)),C0(r,t,l))}return r}const{getDistance:NR}=le,{toPoint:D0}=wr,ys={},ad={},FR={linearGradient:function(e,t){let{from:n,to:i,type:s,opacity:r}=e;R0(n||"top",t,nd),R0(i||"bottom",t,id);const o=Dt.canvas.createLinearGradient(nd.x,nd.y,id.x,id.y),a={type:s,style:o};return sd(a,o,e.stops,r),a},radialGradient:function(e,t){let{from:n,to:i,type:s,opacity:r,stretch:o}=e;L0(n||"center",t,Fr),L0(i||"bottom",t,rd);const a=Dt.canvas.createRadialGradient(Fr.x,Fr.y,0,Fr.x,Fr.y,OR(Fr,rd)),l={type:s,style:a};sd(l,a,e.stops,r);const c=od(t,Fr,rd,o,!0);return c&&(l.transform=c),l},conicGradient:function(e,t){let{from:n,to:i,type:s,opacity:r,rotation:o,stretch:a}=e;D0(n||"center",t,ys),D0(i||"bottom",t,ad);const l=Dt.conicGradientSupport?Dt.canvas.createConicGradient(o?o*Me:0,ys.x,ys.y):Dt.canvas.createRadialGradient(ys.x,ys.y,0,ys.x,ys.y,NR(ys,ad)),c={type:s,style:l};sd(c,l,e.stops,r);const h=od(t,ys,ad,a||1,Dt.conicGradientRotate90);return h&&(c.transform=h),c},getTransform:od},{copy:BR,move:kR,toOffsetOutBounds:zR}=Ut,{max:Mc,abs:HR}=Math,ld={},I0=new io,Va={};function Ly(e,t){let n,i,s,r,o=0,a=0,l=0,c=0;return t.forEach(h=>{n=h.x||0,i=h.y||0,r=1.5*(h.blur||0),s=HR(h.spread||0),o=Mc(o,s+r-i),a=Mc(a,s+r+n),l=Mc(l,s+r+i),c=Mc(c,s+r-n)}),o===a&&a===l&&l===c?o:[o,a,l,c]}function O0(e,t,n){const{shapeBounds:i}=n;let s,r;Dt.fullImageShadow?(BR(ld,e.bounds),kR(ld,t.x-i.x,t.y-i.y),s=e.bounds,r=ld):(s=i,r=t),e.copyWorld(n.canvas,s,r)}const{toOffsetOutBounds:VR}=Ut,Ga={},GR=Ly,WR={shadow:function(e,t,n){let i,s;const{__nowWorld:r}=e,{shadow:o}=e.__,{worldCanvas:a,bounds:l,renderBounds:c,shapeBounds:h,scaleX:d,scaleY:f}=n,u=t.getSameCanvas(),m=o.length-1;zR(l,Va,c),o.forEach((g,_)=>{let p=1;if(g.scaleFixed){const y=Math.abs(r.scaleX);y>1&&(p=1/y)}u.setWorldShadow(Va.offsetX+(g.x||0)*d*p,Va.offsetY+(g.y||0)*f*p,(g.blur||0)*d*p,Zn.string(g.color)),s=vr.getShadowTransform(e,u,n,g,Va,p),s&&u.setTransform(s),O0(u,Va,n),s&&u.resetTransform(),i=c,g.box&&(u.restore(),u.save(),a&&(u.copyWorld(u,c,r,"copy"),i=r),a?u.copyWorld(a,r,r,"destination-out"):u.copyWorld(n.canvas,h,l,"destination-out")),We.copyCanvasByWorld(e,t,u,i,g.blendMode),m&&_<m&&u.clearWorld(i)}),u.recycle(i)},innerShadow:function(e,t,n){let i,s;const{__nowWorld:r}=e,{innerShadow:o}=e.__,{worldCanvas:a,bounds:l,renderBounds:c,shapeBounds:h,scaleX:d,scaleY:f}=n,u=t.getSameCanvas(),m=o.length-1;VR(l,Ga,c),o.forEach((g,_)=>{let p=1;if(g.scaleFixed){const y=Math.abs(r.scaleX);y>1&&(p=1/y)}u.save(),u.setWorldShadow(Ga.offsetX+(g.x||0)*d*p,Ga.offsetY+(g.y||0)*f*p,(g.blur||0)*d*p),s=vr.getShadowTransform(e,u,n,g,Ga,p,!0),s&&u.setTransform(s),O0(u,Ga,n),u.restore(),a?(u.copyWorld(u,c,r,"copy"),u.copyWorld(a,r,r,"source-out"),i=r):(u.copyWorld(n.canvas,h,l,"source-out"),i=c),u.fillWorld(i,Zn.string(g.color),"source-in"),We.copyCanvasByWorld(e,t,u,i,g.blendMode),m&&_<m&&u.clearWorld(i)}),u.recycle(i)},blur:function(e,t,n){const{blur:i}=e.__;n.setWorldBlur(i*e.__nowWorld.a),n.copyWorldToInner(t,e.__nowWorld,e.__layout.renderBounds),n.filter="none"},backgroundBlur:function(e,t,n){},getShadowRenderSpread:Ly,getShadowTransform:function(e,t,n,i,s,r,o){if(i.spread){const a=2*i.spread*r*(o?-1:1),{width:l,height:c}=e.__layout.strokeBounds;return I0.set().scaleOfOuter({x:(s.x+s.width/2)*t.pixelRatio,y:(s.y+s.height/2)*t.pixelRatio},1+a/l,1+a/c),I0}},isTransformShadow(e){},getInnerShadowSpread:GR},{excludeRenderBounds:U0}=Gh;let Af;function bc(e,t,n,i,s,r,o,a){switch(t){case"grayscale":Af||(Af=!0,s.useGrayscaleAlpha(e.__nowWorld));case"alpha":(function(l,c,h,d,f,u){const m=l.__nowWorld;h.resetTransform(),h.opacity=1,h.useMask(d,m),u&&d.recycle(m),N0(l,c,h,1,f,u)})(e,n,i,s,o,a);break;case"opacity-path":N0(e,n,i,r,o,a);break;case"path":a&&n.restore()}}function cd(e){return e.getSameCanvas(!1,!0)}function N0(e,t,n,i,s,r){const o=e.__nowWorld;t.resetTransform(),t.opacity=i,t.copyWorld(n,o,void 0,s),r?n.recycle(o):n.clearWorld(o)}_i.prototype.__renderMask=function(e,t){let n,i,s,r,o,a;const{children:l}=this;for(let c=0,h=l.length;c<h;c++){if(n=l[c],a=n.__.mask,a){o&&(bc(this,o,e,s,i,r,void 0,!0),i=s=null),a!=="clipping"&&a!=="clipping-path"||U0(n,t)||n.__render(e,t),r=n.__.opacity,Af=!1,a==="path"||a==="clipping-path"?(r<1?(o="opacity-path",s||(s=cd(e))):(o="path",e.save()),n.__clip(s||e,t)):(o=a==="grayscale"?"grayscale":"alpha",i||(i=cd(e)),s||(s=cd(e)),n.__render(i,t));continue}const d=r===1&&n.__.__blendMode;d&&bc(this,o,e,s,i,r,void 0,!1),U0(n,t)||n.__render(s||e,t),d&&bc(this,o,e,s,i,r,d,!1)}bc(this,o,e,s,i,r,void 0,!0)};const Dy=`>)]}%!?,.:;'"》）」〉』〗】〕｝┐＞’”！？，、。：；‰`,XR=Dy+"_#~&*+\\=|≮≯≈≠＝…",$R=new RegExp([[19968,40959],[13312,19903],[131072,173791],[173824,177983],[177984,178207],[178208,183983],[183984,191471],[196608,201551],[201552,205743],[11904,12031],[12032,12255],[12272,12287],[12288,12351],[12736,12783],[12800,13055],[13056,13311],[63744,64255],[65072,65103],[127488,127743],[194560,195103]].map(([e,t])=>`[\\u${e.toString(16)}-\\u${t.toString(16)}]`).join("|"));function Nl(e){const t={};return e.split("").forEach(n=>t[n]=!0),t}const YR=Nl("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"),qR=Nl(`{[(<'"《（「〈『〖【〔｛┌＜‘“＝¥￥＄€£￡¢￠`),jR=Nl(Dy),KR=Nl(XR),ZR=Nl("- —／～｜┆·");var Mh;(function(e){e[e.Letter=0]="Letter",e[e.Single=1]="Single",e[e.Before=2]="Before",e[e.After=3]="After",e[e.Symbol=4]="Symbol",e[e.Break=5]="Break"})(Mh||(Mh={}));const{Letter:F0,Single:JR,Before:QR,After:tC,Symbol:eC,Break:nC}=Mh;function iC(e){return YR[e]?F0:ZR[e]?nC:qR[e]?QR:jR[e]?tC:KR[e]?eC:$R.test(e)?JR:F0}const sC={trimRight(e){const{words:t}=e;let n,i=0,s=t.length;for(let r=s-1;r>-1&&(n=t[r].data[0],n.char===" ");r--)i++,e.width-=n.width;i&&t.splice(s-i,i)}};function rC(e,t,n){switch(t){case"title":return n?e.toUpperCase():e;case"upper":return e.toUpperCase();case"lower":return e.toLowerCase();default:return e}}const{trimRight:oC}=sC,{Letter:hd,Single:Wa,Before:B0,After:ud,Symbol:aC,Break:k0}=Mh;let gl,qi,Fn,qn,dd,xi,Ss,wl,ua,hi,er,fd,Xa,Ko,Tl,oh,Rf,jo=[];function pd(e,t){ua&&!wl&&(wl=ua),gl.data.push({char:e,width:t}),Fn+=t}function Br(){qn+=Fn,gl.width=Fn,qi.words.push(gl),gl={data:[]},Fn=0}function $a(){Ko&&(Tl.paraNumber++,qi.paraStart=!0,Ko=!1),ua&&(qi.startCharSize=wl,qi.endCharSize=ua,wl=0),qi.width=qn,oh.width?oC(qi):Rf&&Iy(),jo.push(qi),qi={words:[]},qn=0}function Iy(){qn>(Tl.maxWidth||0)&&(Tl.maxWidth=qn)}const{top:Ec,right:z0,bottom:H0,left:wc}=cf;function Tc(e,t,n){const{bounds:i,rows:s}=e;i[t]+=n;for(let r=0;r<s.length;r++)s[r][t]+=n}const lC={getDrawData:function(e,t){tn(e)||(e=String(e));let n=0,i=0,s=t.__getInput("width")||0,r=t.__getInput("height")||0;const{__padding:o}=t;o&&(s?(n=o[wc],s-=o[z0]+o[wc],!s&&(s=.01)):t.autoSizeAlign||(n=o[wc]),r?(i=o[Ec],r-=o[Ec]+o[H0],!r&&(r=.01)):t.autoSizeAlign||(i=o[Ec]));const a={bounds:{x:n,y:i,width:s,height:r},rows:[],paraNumber:0,font:Dt.canvas.font=t.__font};return function(l,c,h){Tl=l,jo=l.rows,oh=l.bounds,Rf=!oh.width&&!h.autoSizeAlign;const{__letterSpacing:d,paraIndent:f,textCase:u}=h,{canvas:m}=Dt,{width:g}=oh;if(h.__isCharMode){const _=h.textWrap!=="none",p=h.textWrap==="break";Ko=!0,er=null,wl=Ss=ua=Fn=qn=0,gl={data:[]},qi={words:[]};for(let y=0,M=(c=[...c]).length;y<M;y++)xi=c[y],xi===`
`?(Fn&&Br(),qi.paraEnd=!0,$a(),Ko=!0):(hi=iC(xi),hi===hd&&u!=="none"&&(xi=rC(xi,u,!Fn)),Ss=m.measureText(xi).width,d&&(d<0&&(ua=Ss),Ss+=d),fd=hi===Wa&&(er===Wa||er===hd)||er===Wa&&hi!==ud,Xa=!(hi!==B0&&hi!==Wa||er!==aC&&er!==ud),dd=Ko&&f?g-f:g,_&&g&&qn+Fn+Ss>dd&&(p?(Fn&&Br(),qn&&$a()):(Xa||(Xa=hi===hd&&er==ud),(fd||Xa||hi===k0||hi===B0||hi===Wa||Fn+Ss>dd)&&Fn&&Br(),qn&&$a())),xi===" "&&Ko!==!0&&qn+Fn===0||(hi===k0?(xi===" "&&Fn&&Br(),pd(xi,Ss),Br()):((fd||Xa)&&Fn&&Br(),pd(xi,Ss))),er=hi);Fn&&Br(),qn&&$a(),jo.length>0&&(jo[jo.length-1].paraEnd=!0)}else c.split(`
`).forEach(_=>{Tl.paraNumber++,qn=m.measureText(_).width,jo.push({x:f||0,text:_,width:qn,paraStart:!0}),Rf&&Iy()})}(a,e,t),o&&function(l,c,h,d,f){if(!d&&h.autoSizeAlign)switch(h.textAlign){case"left":Tc(c,"x",l[wc]);break;case"right":Tc(c,"x",-l[z0])}if(!f&&h.autoSizeAlign)switch(h.verticalAlign){case"top":Tc(c,"y",l[Ec]);break;case"bottom":Tc(c,"y",-l[H0])}}(o,a,t,s,r),function(l,c){const{rows:h,bounds:d}=l,f=h.length,{__lineHeight:u,__baseLine:m,__letterSpacing:g,__clipText:_,textAlign:p,verticalAlign:y,paraSpacing:M,autoSizeAlign:S}=c;let{x:A,y:w,width:P,height:v}=d,T=u*f+(M?M*(l.paraNumber-1):0),U=m;if(_&&T>v)T=Math.max(c.__autoHeight?T:v,u),f>1&&(l.overflow=f);else if(v||S)switch(y){case"middle":w+=(v-T)/2;break;case"bottom":w+=v-T}U+=w;let C,I,k,X=P||S?P:l.maxWidth;for(let O=0,z=f;O<z;O++){if(C=h[O],C.x=A,C.width<P||C.width>P&&!_)switch(p){case"center":C.x+=(X-C.width)/2;break;case"right":C.x+=X-C.width}C.paraStart&&M&&O>0&&(U+=M),C.y=U,U+=u,l.overflow>O&&U>T&&(C.isOverflow=!0,l.overflow=O+1),I=C.x,k=C.width,g<0&&(C.width<0?(k=-C.width+c.fontSize+g,I-=k,k+=c.fontSize):k-=g),I<d.x&&(d.x=I),k>d.width&&(d.width=k),_&&P&&P<k&&(C.isOverflow=!0,l.overflow||(l.overflow=h.length))}d.y=w,d.height=T}(a,t),t.__isCharMode&&function(l,c,h){const{rows:d}=l,{textAlign:f,paraIndent:u,__letterSpacing:m}=c,g=h&&f.includes("both"),_=g||h&&f.includes("justify"),p=_&&f.includes("letter");let y,M,S,A,w,P,v,T,U,C;d.forEach(I=>{I.words&&(w=u&&I.paraStart?u:0,T=I.words.length,_&&(C=!I.paraEnd||g,M=h-I.width-w,p?A=M/(I.words.reduce((k,X)=>k+X.data.length,0)-1):S=T>1?M/(T-1):0),P=m||I.isOverflow||p?0:S?1:2,I.isOverflow&&!m&&(I.textMode=!0),P===2?(I.x+=w,function(k){k.text="",k.words.forEach(X=>{X.data.forEach(O=>{k.text+=O.char})})}(I)):(I.x+=w,y=I.x,I.data=[],I.words.forEach((k,X)=>{P===1?(v={char:"",x:y},y=function(O,z,F){return O.forEach(K=>{F.char+=K.char,z+=K.width}),z}(k.data,y,v),(I.isOverflow||v.char!==" ")&&I.data.push(v)):y=function(O,z,F,K,Z){return O.forEach(ft=>{(K||ft.char!==" ")&&(ft.x=z,F.push(ft)),z+=ft.width,Z&&(z+=Z)}),z}(k.data,y,I.data,I.isOverflow,C&&A),C&&(U=X===T-1,S?U||(y+=S,I.width+=S):A&&(I.width+=A*(k.data.length-(U?1:0))))})),I.words=null)})}(a,t,s),a.overflow&&function(l,c,h,d){const{rows:f,overflow:u}=l;let{textOverflow:m}=c;if(u&&f.splice(u),d&&m&&m!=="show"){let g,_;m==="hide"?m="":m==="ellipsis"&&(m="...");const p=m?Dt.canvas.measureText(m).width:0,y=h+d-p;(c.textWrap==="none"?f:[f[u-1]]).forEach(M=>{if(M.isOverflow&&M.data){let S=M.data.length-1;for(let A=S;A>-1&&(g=M.data[A],_=g.x+g.width,!(A===S&&_<y));A--){if(_<y&&g.char!==" "||!A){M.data.splice(A+1),M.width-=g.width;break}M.width-=g.width}M.width+=p,M.data.push({char:m,x:_}),M.textMode&&function(A){A.text="",A.data.forEach(w=>{A.text+=w.char}),A.data=null}(M)}})}}(a,t,n,s),t.textDecoration!=="none"&&function(l,c){let h,d=0;const{fontSize:f,textDecoration:u}=c;switch(l.decorationHeight=f/11,ze(u)?(h=u.type,u.color&&(l.decorationColor=Zn.string(u.color)),u.offset&&(d=Math.min(.3*f,Math.max(u.offset,.15*-f)))):h=u,h){case"under":l.decorationY=[.15*f+d];break;case"delete":l.decorationY=[.35*-f];break;case"under-delete":l.decorationY=[.15*f+d,.35*-f]}}(a,t),a}},cC={string:function(e,t){if(!e)return"#000";const n=je(t)&&t<1;if(tn(e)){if(!n||!Zn.object)return e;e=Zn.object(e)}let i=Kt(e.a)?1:e.a;n&&(i*=t);const s=e.r+","+e.g+","+e.b;return i===1?"rgb("+s+")":"rgba("+s+","+i+")"}};Object.assign(Ey,lC),Object.assign(Zn,cC),Object.assign(fe,vR),Object.assign(Be,LR),Object.assign(sh,FR),Object.assign(vr,WR),Object.assign(Ke,{interaction:(e,t,n,i)=>new hR(e,t,n,i),hitCanvas:(e,t)=>new Cy(e,t),hitCanvasManager:()=>new $1}),Z1();const hC={class:"canvas-wrapper"},uC={key:0,class:"placeholder"},dC=Bp({__name:"Valve2DCanvas",props:{params:{}},setup(e){const t=e,n=Up(null);let i=null;const s={bg:"#1a1f2e",line:"#4fc3f7",centerLine:"#f06292",dim:"#ffcc02",text:"#e0e0e0",fill:"rgba(79,195,247,0.08)",flangeFill:"rgba(79,195,247,0.14)"};function r(h,d,f,u,m,g=8,_=5){return new Yi({points:[h,d,f,u],strokeWidth:1,stroke:m,dashPattern:[g,_]})}function o(h,d,f,u,m,g=1){return new Yi({points:[h,d,f,u],strokeWidth:g,stroke:m})}function a(h,d,f,u=11){return new ye({x:h,y:d,text:f,fill:s.dim,fontSize:u,fontFamily:"monospace"})}function l(h){var Ht,Wt;if(!i)return;(Ht=i.tree)==null||Ht.clear();const d=n.value.clientWidth,f=n.value.clientHeight,{diameter:u,height:m,flangeDiameter:g,thickness:_}=h,p=m-2*_,y=60,M=(d-y*2-120)/g,S=(f-y*2)/m,A=Math.min(M,S,2),w=u*A,P=p*A,v=g*A,T=_*A,U=m*A,C=(d-100)/2,I=f/2,k=I-U/2,X=I+U/2,O=C-v/2,z=C+v/2,F=C-w/2,K=C+w/2,Z=new _i;Z.add(new Ci({x:F,y:k+T,width:w,height:P,stroke:s.line,strokeWidth:1.5,fill:s.fill})),Z.add(new Ci({x:O,y:k,width:v,height:T,stroke:s.line,strokeWidth:1.5,fill:s.flangeFill})),Z.add(new Ci({x:O,y:X-T,width:v,height:T,stroke:s.line,strokeWidth:1.5,fill:s.flangeFill}));const ft=w*.18,Tt=P*.25;Z.add(new Ci({x:C-ft/2,y:k+T-Tt,width:ft,height:Tt,stroke:s.line,strokeWidth:1,fill:s.fill}));const wt=Math.max(3,_*A*.18),re=v*.35;for(const Xt of[k+T/2,X-T/2])for(const L of[C-re,C+re])Z.add(new $r({x:L-wt,y:Xt-wt,width:wt*2,height:wt*2,stroke:s.line,strokeWidth:1,fill:"transparent"}));Z.add(r(C,k-15,C,X+15,s.centerLine,8,4)),Z.add(r(F-15,I,K+15,I,s.centerLine,8,4));const $t=z+20,jt=$t+22;Z.add(o($t,k,$t+15,k,s.dim)),Z.add(o($t,X,$t+15,X,s.dim)),Z.add(o($t+8,k,$t+8,X,s.dim)),Z.add(o($t+8,k,$t+4,k+8,s.dim)),Z.add(o($t+8,k,$t+12,k+8,s.dim)),Z.add(o($t+8,X,$t+4,X-8,s.dim)),Z.add(o($t+8,X,$t+12,X-8,s.dim)),Z.add(a(jt,I-8,`H=${m}mm`));const tt=I-20;Z.add(o(F,tt-10,F,tt+10,s.dim)),Z.add(o(K,tt-10,K,tt+10,s.dim)),Z.add(o(F,tt,K,tt,s.dim)),Z.add(a(C-28,tt-20,`Ø${u}mm`));const gt=X+22;Z.add(o(O,gt-8,O,gt+8,s.dim)),Z.add(o(z,gt-8,z,gt+8,s.dim)),Z.add(o(O,gt,z,gt,s.dim)),Z.add(a(C-36,gt+6,`Ø${g}mm`));const ht=O-28;Z.add(o(ht-8,k,ht+8,k,s.dim)),Z.add(o(ht-8,k+T,ht+8,k+T,s.dim)),Z.add(o(ht,k,ht,k+T,s.dim)),Z.add(a(ht-46,k+T/2-7,`t=${_}mm`)),Z.add(new ye({x:12,y:12,text:"正视图  FRONT VIEW",fill:s.text,fontSize:12,fontFamily:"monospace"})),(Wt=i.tree)==null||Wt.add(Z)}function c(){n.value&&(i==null||i.destroy(),i=new yf({view:n.value,fill:s.bg,tree:{type:"design"}}),t.params&&l(t.params))}return kp(()=>{c()}),zp(()=>{i==null||i.destroy(),i=null}),ul(()=>t.params,h=>{h&&l(h)},{deep:!0}),(h,d)=>(no(),aa("div",hC,[e.params?Gp("",!0):(no(),aa("div",uC,[...d[0]||(d[0]=[Bt("span",null,"请输入参数后点击「生成」",-1)])])),Bt("div",{ref_key:"containerRef",ref:n,class:"leafer-container"},null,512)]))}}),Jp=(e,t)=>{const n=e.__vccOpts||e;for(const[i,s]of t)n[i]=s;return n},fC=Jp(dC,[["__scopeId","data-v-39152b44"]]);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qp="184",sa={ROTATE:0,DOLLY:1,PAN:2},Zo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pC=0,V0=1,_C=2,ah=1,Oy=2,rl=3,Mr=0,Kn=1,Os=2,Bs=0,ra=1,G0=2,W0=3,X0=4,mC=5,jr=100,gC=101,xC=102,vC=103,yC=104,SC=200,MC=201,bC=202,EC=203,Cf=204,Pf=205,wC=206,TC=207,AC=208,RC=209,CC=210,PC=211,LC=212,DC=213,IC=214,Lf=0,Df=1,If=2,da=3,Of=4,Uf=5,Nf=6,Ff=7,Uy=0,OC=1,UC=2,is=0,Ny=1,Fy=2,By=3,t_=4,ky=5,zy=6,Hy=7,Vy=300,ro=301,fa=302,_d=303,md=304,$h=306,Bf=1e3,Ns=1001,kf=1002,bn=1003,NC=1004,Ac=1005,Ln=1006,gd=1007,Jr=1008,ii=1009,Gy=1010,Wy=1011,Al=1012,e_=1013,ls=1014,ts=1015,Ws=1016,n_=1017,i_=1018,Rl=1020,Xy=35902,$y=35899,Yy=1021,qy=1022,Pi=1023,Xs=1026,Qr=1027,jy=1028,s_=1029,oo=1030,r_=1031,o_=1033,lh=33776,ch=33777,hh=33778,uh=33779,zf=35840,Hf=35841,Vf=35842,Gf=35843,Wf=36196,Xf=37492,$f=37496,Yf=37488,qf=37489,bh=37490,jf=37491,Kf=37808,Zf=37809,Jf=37810,Qf=37811,tp=37812,ep=37813,np=37814,ip=37815,sp=37816,rp=37817,op=37818,ap=37819,lp=37820,cp=37821,hp=36492,up=36494,dp=36495,fp=36283,pp=36284,Eh=36285,_p=36286,FC=3200,mp=0,BC=1,fr="",fi="srgb",wh="srgb-linear",Th="linear",Ae="srgb",Lo=7680,$0=519,kC=512,zC=513,HC=514,a_=515,VC=516,GC=517,l_=518,WC=519,Y0=35044,q0="300 es",es=2e3,Cl=2001;function XC(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ah(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function $C(){const e=Ah("canvas");return e.style.display="block",e}const j0={};function K0(...e){const t="THREE."+e.shift();console.log(t,...e)}function Ky(e){const t=e[0];if(typeof t=="string"&&t.startsWith("TSL:")){const n=e[1];n&&n.isStackTrace?e[0]+=" "+n.getLocation():e[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return e}function qt(...e){e=Ky(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function me(...e){e=Ky(e);const t="THREE."+e.shift();{const n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function gp(...e){const t=e.join(" ");t in j0||(j0[t]=!0,qt(...e))}function YC(e,t,n){return new Promise(function(i,s){function r(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:s();break;case e.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}const qC={[Lf]:Df,[If]:Nf,[Of]:Ff,[da]:Uf,[Df]:Lf,[Nf]:If,[Ff]:Of,[Uf]:da};class Tr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){const i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){const i=this._listeners;if(i===void 0)return;const s=i[t];if(s!==void 0){const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const i=n[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],dh=Math.PI/180,xp=180/Math.PI;function Fl(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[e&255]+Rn[e>>8&255]+Rn[e>>16&255]+Rn[e>>24&255]+"-"+Rn[t&255]+Rn[t>>8&255]+"-"+Rn[t>>16&15|64]+Rn[t>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function he(e,t,n){return Math.max(t,Math.min(n,e))}function jC(e,t){return(e%t+t)%t}function xd(e,t,n){return(1-n)*e+n*t}function Ya(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function Gn(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const KC={DEG2RAD:dh},g_=class g_{constructor(t=0,n=0){this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),s=Math.sin(n),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};g_.prototype.isVector2=!0;let te=g_;class br{constructor(t=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=s}static slerpFlat(t,n,i,s,r,o,a){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[o+0],u=r[o+1],m=r[o+2],g=r[o+3];if(d!==g||l!==f||c!==u||h!==m){let _=l*f+c*u+h*m+d*g;_<0&&(f=-f,u=-u,m=-m,g=-g,_=-_);let p=1-a;if(_<.9995){const y=Math.acos(_),M=Math.sin(y);p=Math.sin(p*y)/M,a=Math.sin(a*y)/M,l=l*p+f*a,c=c*p+u*a,h=h*p+m*a,d=d*p+g*a}else{l=l*p+f*a,c=c*p+u*a,h=h*p+m*a,d=d*p+g*a;const y=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=y,c*=y,h*=y,d*=y}}t[n]=l,t[n+1]=c,t[n+2]=h,t[n+3]=d}static multiplyQuaternionsFlat(t,n,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[o],f=r[o+1],u=r[o+2],m=r[o+3];return t[n]=a*m+h*d+l*u-c*f,t[n+1]=l*m+h*f+c*d-a*u,t[n+2]=c*m+h*u+a*f-l*d,t[n+3]=h*m-a*d-l*f-c*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,s){return this._x=t,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(s/2),d=a(r/2),f=l(i/2),u=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"YXZ":this._x=f*h*d+c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"ZXY":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d-f*u*m;break;case"ZYX":this._x=f*h*d-c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d+f*u*m;break;case"YZX":this._x=f*h*d+c*u*m,this._y=c*u*d+f*h*m,this._z=c*h*m-f*u*d,this._w=c*h*d-f*u*m;break;case"XZY":this._x=f*h*d-c*u*m,this._y=c*u*d-f*h*m,this._z=c*h*m+f*u*d,this._w=c*h*d+f*u*m;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],s=n[4],r=n[8],o=n[1],a=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+a+d;if(f>0){const u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(o-s)*u}else if(i>a&&i>d){const u=2*Math.sqrt(1+i-a-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+c)/u}else if(a>d){const u=2*Math.sqrt(1+a-i-d);this._w=(r-c)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(l+h)/u}else{const u=2*Math.sqrt(1+d-i-a);this._w=(o-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,s=t._y,r=t._z,o=t._w,a=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-i*c,this._z=r*h+o*c+i*l-s*a,this._w=o*h-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,n){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,n=Math.sin(n*c)/h,this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+s*n,this._z=this._z*l+r*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(n),r*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const x_=class x_{constructor(t=0,n=0,i=0){this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Z0.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Z0.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),h=2*(a*n-r*s),d=2*(r*i-o*n);return this.x=n+l*c+o*d-a*h,this.y=i+l*h+a*c-r*d,this.z=s+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,s=t.y,r=t.z,o=n.x,a=n.y,l=n.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return vd.copy(this).projectOnVector(t),this.sub(vd)}reflect(t){return this.sub(vd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(he(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return n*n+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const s=Math.sin(n)*t;return this.x=s*Math.sin(i),this.y=Math.cos(n)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};x_.prototype.isVector3=!0;let V=x_;const vd=new V,Z0=new br,v_=class v_{constructor(t,n,i,s,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c)}set(t,n,i,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],m=i[8],g=s[0],_=s[3],p=s[6],y=s[1],M=s[4],S=s[7],A=s[2],w=s[5],P=s[8];return r[0]=o*g+a*y+l*A,r[3]=o*_+a*M+l*w,r[6]=o*p+a*S+l*P,r[1]=c*g+h*y+d*A,r[4]=c*_+h*M+d*w,r[7]=c*p+h*S+d*P,r[2]=f*g+u*y+m*A,r[5]=f*_+u*M+m*w,r[8]=f*p+u*S+m*P,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return n*o*h-n*a*c-i*r*h+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,f=a*l-h*r,u=c*r-o*l,m=n*d+i*f+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=d*g,t[1]=(s*c-h*i)*g,t[2]=(a*i-s*o)*g,t[3]=f*g,t[4]=(h*n-s*l)*g,t[5]=(s*r-a*n)*g,t[6]=u*g,t[7]=(i*l-c*n)*g,t[8]=(o*n-i*r)*g,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(yd.makeScale(t,n)),this}rotate(t){return this.premultiply(yd.makeRotation(-t)),this}translate(t,n){return this.premultiply(yd.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};v_.prototype.isMatrix3=!0;let Qt=v_;const yd=new Qt,J0=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Q0=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ZC(){const e={enabled:!0,workingColorSpace:wh,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ae&&(s.r=ks(s.r),s.g=ks(s.g),s.b=ks(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ae&&(s.r=oa(s.r),s.g=oa(s.g),s.b=oa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fr?Th:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return gp("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),e.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return gp("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),e.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return e.define({[wh]:{primaries:t,whitePoint:i,transfer:Th,toXYZ:J0,fromXYZ:Q0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:i,transfer:Ae,toXYZ:J0,fromXYZ:Q0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),e}const pe=ZC();function ks(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function oa(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let Do;class JC{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Do===void 0&&(Do=Ah("canvas")),Do.width=t.width,Do.height=t.height;const s=Do.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Do}return i.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Ah("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ks(r[o]/255)*255;return i.putImageData(s,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ks(n[i]/255)*255):n[i]=ks(n[i]);return{data:n,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let QC=0;class c_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:QC++}),this.uuid=Fl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayWidth,n.displayHeight,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Sd(s[o].image)):r.push(Sd(s[o]))}else r=Sd(s);i.url=r}return n||(t.images[this.uuid]=i),i}}function Sd(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?JC.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}let tP=0;const Md=new V;class zn extends Tr{constructor(t=zn.DEFAULT_IMAGE,n=zn.DEFAULT_MAPPING,i=Ns,s=Ns,r=Ln,o=Jr,a=Pi,l=ii,c=zn.DEFAULT_ANISOTROPY,h=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tP++}),this.uuid=Fl(),this.name="",this.source=new c_(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Md).x}get height(){return this.source.getSize(Md).y}get depth(){return this.source.getSize(Md).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const i=t[n];if(i===void 0){qt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){qt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bf:t.x=t.x-Math.floor(t.x);break;case Ns:t.x=t.x<0?0:1;break;case kf:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bf:t.y=t.y-Math.floor(t.y);break;case Ns:t.y=t.y<0?0:1;break;case kf:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=Vy;zn.DEFAULT_ANISOTROPY=1;const y_=class y_{constructor(t=0,n=0,i=0,s=1){this.x=t,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,s){return this.x=t,this.y=n,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*n+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*n+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*n+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],m=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+g)<.1&&Math.abs(m+_)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,S=(u+1)/2,A=(p+1)/2,w=(h+f)/4,P=(d+g)/4,v=(m+_)/4;return M>S&&M>A?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=w/i,r=P/i):S>A?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=w/s,r=v/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=P/r,s=v/r),this.set(i,s,r,n),this}let y=Math.sqrt((_-m)*(_-m)+(d-g)*(d-g)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(_-m)/y,this.y=(d-g)/y,this.z=(f-h)/y,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=he(this.x,t.x,n.x),this.y=he(this.y,t.y,n.y),this.z=he(this.z,t.z,n.z),this.w=he(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=he(this.x,t,n),this.y=he(this.y,t,n),this.z=he(this.z,t,n),this.w=he(this.w,t,n),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(he(i,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};y_.prototype.isVector4=!0;let Qe=y_;class eP extends Tr{constructor(t=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=i.depth,this.scissor=new Qe(0,0,t,n),this.scissorTest=!1,this.viewport=new Qe(0,0,t,n),this.textures=[];const s={width:t,height:n,depth:i.depth},r=new zn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(t={}){const n={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const s=Object.assign({},t.textures[n].image);this.textures[n].source=new c_(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this.multiview=t.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends eP{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class Zy extends zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class nP extends zn{constructor(t=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:s},this.magFilter=bn,this.minFilter=bn,this.wrapR=Ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ph=class Ph{constructor(t,n,i,s,r,o,a,l,c,h,d,f,u,m,g,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,s,r,o,a,l,c,h,d,f,u,m,g,_)}set(t,n,i,s,r,o,a,l,c,h,d,f,u,m,g,_){const p=this.elements;return p[0]=t,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ph().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,i=t.elements,s=1/Io.setFromMatrixColumn(t,0).length(),r=1/Io.setFromMatrixColumn(t,1).length(),o=1/Io.setFromMatrixColumn(t,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const f=o*h,u=o*d,m=a*h,g=a*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=u+m*c,n[5]=f-g*c,n[9]=-a*l,n[2]=g-f*c,n[6]=m+u*c,n[10]=o*l}else if(t.order==="YXZ"){const f=l*h,u=l*d,m=c*h,g=c*d;n[0]=f+g*a,n[4]=m*a-u,n[8]=o*c,n[1]=o*d,n[5]=o*h,n[9]=-a,n[2]=u*a-m,n[6]=g+f*a,n[10]=o*l}else if(t.order==="ZXY"){const f=l*h,u=l*d,m=c*h,g=c*d;n[0]=f-g*a,n[4]=-o*d,n[8]=m+u*a,n[1]=u+m*a,n[5]=o*h,n[9]=g-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(t.order==="ZYX"){const f=o*h,u=o*d,m=a*h,g=a*d;n[0]=l*h,n[4]=m*c-u,n[8]=f*c+g,n[1]=l*d,n[5]=g*c+f,n[9]=u*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(t.order==="YZX"){const f=o*l,u=o*c,m=a*l,g=a*c;n[0]=l*h,n[4]=g-f*d,n[8]=m*d+u,n[1]=d,n[5]=o*h,n[9]=-a*h,n[2]=-c*h,n[6]=u*d+m,n[10]=f-g*d}else if(t.order==="XZY"){const f=o*l,u=o*c,m=a*l,g=a*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+g,n[5]=o*h,n[9]=u*d-m,n[2]=m*d-u,n[6]=a*h,n[10]=g*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(iP,t,sP)}lookAt(t,n,i){const s=this.elements;return ti.subVectors(t,n),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),nr.crossVectors(i,ti),nr.lengthSq()===0&&(Math.abs(i.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),nr.crossVectors(i,ti)),nr.normalize(),Rc.crossVectors(ti,nr),s[0]=nr.x,s[4]=Rc.x,s[8]=ti.x,s[1]=nr.y,s[5]=Rc.y,s[9]=ti.y,s[2]=nr.z,s[6]=Rc.z,s[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,s=n.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],m=i[2],g=i[6],_=i[10],p=i[14],y=i[3],M=i[7],S=i[11],A=i[15],w=s[0],P=s[4],v=s[8],T=s[12],U=s[1],C=s[5],I=s[9],k=s[13],X=s[2],O=s[6],z=s[10],F=s[14],K=s[3],Z=s[7],ft=s[11],Tt=s[15];return r[0]=o*w+a*U+l*X+c*K,r[4]=o*P+a*C+l*O+c*Z,r[8]=o*v+a*I+l*z+c*ft,r[12]=o*T+a*k+l*F+c*Tt,r[1]=h*w+d*U+f*X+u*K,r[5]=h*P+d*C+f*O+u*Z,r[9]=h*v+d*I+f*z+u*ft,r[13]=h*T+d*k+f*F+u*Tt,r[2]=m*w+g*U+_*X+p*K,r[6]=m*P+g*C+_*O+p*Z,r[10]=m*v+g*I+_*z+p*ft,r[14]=m*T+g*k+_*F+p*Tt,r[3]=y*w+M*U+S*X+A*K,r[7]=y*P+M*C+S*O+A*Z,r[11]=y*v+M*I+S*z+A*ft,r[15]=y*T+M*k+S*F+A*Tt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],u=t[14],m=t[3],g=t[7],_=t[11],p=t[15],y=l*u-c*f,M=a*u-c*d,S=a*f-l*d,A=o*u-c*h,w=o*f-l*h,P=o*d-a*h;return n*(g*y-_*M+p*S)-i*(m*y-_*A+p*w)+s*(m*M-g*A+p*P)-r*(m*S-g*w+_*P)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=n,s[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],u=t[11],m=t[12],g=t[13],_=t[14],p=t[15],y=n*a-i*o,M=n*l-s*o,S=n*c-r*o,A=i*l-s*a,w=i*c-r*a,P=s*c-r*l,v=h*g-d*m,T=h*_-f*m,U=h*p-u*m,C=d*_-f*g,I=d*p-u*g,k=f*p-u*_,X=y*k-M*I+S*C+A*U-w*T+P*v;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/X;return t[0]=(a*k-l*I+c*C)*O,t[1]=(s*I-i*k-r*C)*O,t[2]=(g*P-_*w+p*A)*O,t[3]=(f*w-d*P-u*A)*O,t[4]=(l*U-o*k-c*T)*O,t[5]=(n*k-s*U+r*T)*O,t[6]=(_*S-m*P-p*M)*O,t[7]=(h*P-f*S+u*M)*O,t[8]=(o*I-a*U+c*v)*O,t[9]=(i*U-n*I-r*v)*O,t[10]=(m*w-g*S+p*y)*O,t[11]=(d*S-h*w-u*y)*O,t[12]=(a*T-o*C-l*v)*O,t[13]=(n*C-i*T+s*v)*O,t[14]=(g*M-m*A-_*y)*O,t[15]=(h*A-d*M+f*y)*O,this}scale(t){const n=this.elements,i=t.x,s=t.y,r=t.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),s=Math.sin(n),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+i,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,n,s,1,0,0,0,0,1),this}compose(t,n,i){const s=this.elements,r=n._x,o=n._y,a=n._z,l=n._w,c=r+r,h=o+o,d=a+a,f=r*c,u=r*h,m=r*d,g=o*h,_=o*d,p=a*d,y=l*c,M=l*h,S=l*d,A=i.x,w=i.y,P=i.z;return s[0]=(1-(g+p))*A,s[1]=(u+S)*A,s[2]=(m-M)*A,s[3]=0,s[4]=(u-S)*w,s[5]=(1-(f+p))*w,s[6]=(_+y)*w,s[7]=0,s[8]=(m+M)*P,s[9]=(_-y)*P,s[10]=(1-(f+g))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,n,i){const s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];const r=this.determinant();if(r===0)return i.set(1,1,1),n.identity(),this;let o=Io.set(s[0],s[1],s[2]).length();const a=Io.set(s[4],s[5],s[6]).length(),l=Io.set(s[8],s[9],s[10]).length();r<0&&(o=-o),vi.copy(this);const c=1/o,h=1/a,d=1/l;return vi.elements[0]*=c,vi.elements[1]*=c,vi.elements[2]*=c,vi.elements[4]*=h,vi.elements[5]*=h,vi.elements[6]*=h,vi.elements[8]*=d,vi.elements[9]*=d,vi.elements[10]*=d,n.setFromRotationMatrix(vi),i.x=o,i.y=a,i.z=l,this}makePerspective(t,n,i,s,r,o,a=es,l=!1){const c=this.elements,h=2*r/(n-t),d=2*r/(i-s),f=(n+t)/(n-t),u=(i+s)/(i-s);let m,g;if(l)m=r/(o-r),g=o*r/(o-r);else if(a===es)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Cl)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,n,i,s,r,o,a=es,l=!1){const c=this.elements,h=2/(n-t),d=2/(i-s),f=-(n+t)/(n-t),u=-(i+s)/(i-s);let m,g;if(l)m=1/(o-r),g=o/(o-r);else if(a===es)m=-2/(o-r),g=-(o+r)/(o-r);else if(a===Cl)m=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}};Ph.prototype.isMatrix4=!0;let en=Ph;const Io=new V,vi=new en,iP=new V(0,0,0),sP=new V(1,1,1),nr=new V,Rc=new V,ti=new V,tx=new en,ex=new br;class Er{constructor(t=0,n=0,i=0,s=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,s=this._order){return this._x=t,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(n){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(he(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-he(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return tx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tx,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ex.setFromEuler(this),this.setFromQuaternion(ex,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class Jy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let rP=0;const nx=new V,Oo=new br,Ms=new en,Cc=new V,qa=new V,oP=new V,aP=new br,ix=new V(1,0,0),sx=new V(0,1,0),rx=new V(0,0,1),ox={type:"added"},lP={type:"removed"},Uo={type:"childadded",child:null},bd={type:"childremoved",child:null};class vn extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rP++}),this.uuid=Fl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vn.DEFAULT_UP.clone();const t=new V,n=new Er,i=new br,s=new V(1,1,1);function r(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new en},normalMatrix:{value:new Qt}}),this.matrix=new en,this.matrixWorld=new en,this.matrixAutoUpdate=vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Oo.setFromAxisAngle(t,n),this.quaternion.multiply(Oo),this}rotateOnWorldAxis(t,n){return Oo.setFromAxisAngle(t,n),this.quaternion.premultiply(Oo),this}rotateX(t){return this.rotateOnAxis(ix,t)}rotateY(t){return this.rotateOnAxis(sx,t)}rotateZ(t){return this.rotateOnAxis(rx,t)}translateOnAxis(t,n){return nx.copy(t).applyQuaternion(this.quaternion),this.position.add(nx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ix,t)}translateY(t){return this.translateOnAxis(sx,t)}translateZ(t){return this.translateOnAxis(rx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ms.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Cc.copy(t):Cc.set(t,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ms.lookAt(qa,Cc,this.up):Ms.lookAt(Cc,qa,this.up),this.quaternion.setFromRotationMatrix(Ms),s&&(Ms.extractRotation(s.matrixWorld),Oo.setFromRotationMatrix(Ms),this.quaternion.premultiply(Oo.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(me("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ox),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null):me("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(lP),bd.child=t,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ms.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ms.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ms),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ox),Uo.child=t,this.dispatchEvent(Uo),Uo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,t,oP),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qa,aP,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const n=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(n){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),u=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}vn.DEFAULT_UP=new V(0,1,0);vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ol extends vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const cP={type:"move"};class Ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ol,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ol,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ol,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const _=n.getJointPose(g,i),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,m=.005;c.inputState.pinching&&f>u+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=u-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=n.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=n.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(cP)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new ol;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const Qy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Pc={h:0,s:0,l:0};function wd(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class ue{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,n),this}setRGB(t,n,i,s=pe.workingColorSpace){return this.r=t,this.g=n,this.b=i,pe.colorSpaceToWorking(this,s),this}setHSL(t,n,i,s=pe.workingColorSpace){if(t=jC(t,1),n=he(n,0,1),i=he(i,0,1),n===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+n):i+n-i*n,o=2*i-r;this.r=wd(o,r,t+1/3),this.g=wd(o,r,t),this.b=wd(o,r,t-1/3)}return pe.colorSpaceToWorking(this,s),this}setStyle(t,n=fi){function i(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(r,16),n);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=fi){const i=Qy[t.toLowerCase()];return i!==void 0?this.setHex(i,n):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ks(t.r),this.g=ks(t.g),this.b=ks(t.b),this}copyLinearToSRGB(t){return this.r=oa(t.r),this.g=oa(t.g),this.b=oa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return pe.workingToColorSpace(Cn.copy(this),t),Math.round(he(Cn.r*255,0,255))*65536+Math.round(he(Cn.g*255,0,255))*256+Math.round(he(Cn.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=pe.workingColorSpace){pe.workingToColorSpace(Cn.copy(this),n);const i=Cn.r,s=Cn.g,r=Cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,n=pe.workingColorSpace){return pe.workingToColorSpace(Cn.copy(this),n),t.r=Cn.r,t.g=Cn.g,t.b=Cn.b,t}getStyle(t=fi){pe.workingToColorSpace(Cn.copy(this),t);const n=Cn.r,i=Cn.g,s=Cn.b;return t!==fi?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,n,i){return this.getHSL(ir),this.setHSL(ir.h+t,ir.s+n,ir.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(ir),t.getHSL(Pc);const i=xd(ir.h,Pc.h,n),s=xd(ir.s,Pc.s,n),r=xd(ir.l,Pc.l,n);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Cn=new ue;ue.NAMES=Qy;class h_{constructor(t,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new ue(t),this.near=n,this.far=i}clone(){return new h_(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class hP extends vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const yi=new V,bs=new V,Td=new V,Es=new V,No=new V,Fo=new V,ax=new V,Ad=new V,Rd=new V,Cd=new V,Pd=new Qe,Ld=new Qe,Dd=new Qe;class Ai{constructor(t=new V,n=new V,i=new V){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,s){s.subVectors(i,n),yi.subVectors(t,n),s.cross(yi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,n,i,s,r){yi.subVectors(s,n),bs.subVectors(i,n),Td.subVectors(t,n);const o=yi.dot(yi),a=yi.dot(bs),l=yi.dot(Td),c=bs.dot(bs),h=bs.dot(Td),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;const f=1/d,u=(c*l-a*h)*f,m=(o*h-a*l)*f;return r.set(1-u-m,m,u)}static containsPoint(t,n,i,s){return this.getBarycoord(t,n,i,s,Es)===null?!1:Es.x>=0&&Es.y>=0&&Es.x+Es.y<=1}static getInterpolation(t,n,i,s,r,o,a,l){return this.getBarycoord(t,n,i,s,Es)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Es.x),l.addScaledVector(o,Es.y),l.addScaledVector(a,Es.z),l)}static getInterpolatedAttribute(t,n,i,s,r,o){return Pd.setScalar(0),Ld.setScalar(0),Dd.setScalar(0),Pd.fromBufferAttribute(t,n),Ld.fromBufferAttribute(t,i),Dd.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Pd,r.x),o.addScaledVector(Ld,r.y),o.addScaledVector(Dd,r.z),o}static isFrontFacing(t,n,i,s){return yi.subVectors(i,n),bs.subVectors(t,n),yi.cross(bs).dot(s)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,s){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,n,i,s){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yi.subVectors(this.c,this.b),bs.subVectors(this.a,this.b),yi.cross(bs).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Ai.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,s,r){return Ai.getInterpolation(t,this.a,this.b,this.c,n,i,s,r)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,s=this.b,r=this.c;let o,a;No.subVectors(s,i),Fo.subVectors(r,i),Ad.subVectors(t,i);const l=No.dot(Ad),c=Fo.dot(Ad);if(l<=0&&c<=0)return n.copy(i);Rd.subVectors(t,s);const h=No.dot(Rd),d=Fo.dot(Rd);if(h>=0&&d<=h)return n.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),n.copy(i).addScaledVector(No,o);Cd.subVectors(t,r);const u=No.dot(Cd),m=Fo.dot(Cd);if(m>=0&&u<=m)return n.copy(r);const g=u*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Fo,a);const _=h*m-u*d;if(_<=0&&d-h>=0&&u-m>=0)return ax.subVectors(r,s),a=(d-h)/(d-h+(u-m)),n.copy(s).addScaledVector(ax,a);const p=1/(_+g+f);return o=g*p,a=f*p,n.copy(i).addScaledVector(No,o).addScaledVector(Fo,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Bl{constructor(t=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Si.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Si.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Si.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(n===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Si):Si.fromBufferAttribute(r,o),Si.applyMatrix4(t.matrixWorld),this.expandByPoint(Si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Lc.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Lc.copy(i.boundingBox)),Lc.applyMatrix4(t.matrixWorld),this.union(Lc)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Si),Si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ja),Dc.subVectors(this.max,ja),Bo.subVectors(t.a,ja),ko.subVectors(t.b,ja),zo.subVectors(t.c,ja),sr.subVectors(ko,Bo),rr.subVectors(zo,ko),kr.subVectors(Bo,zo);let n=[0,-sr.z,sr.y,0,-rr.z,rr.y,0,-kr.z,kr.y,sr.z,0,-sr.x,rr.z,0,-rr.x,kr.z,0,-kr.x,-sr.y,sr.x,0,-rr.y,rr.x,0,-kr.y,kr.x,0];return!Id(n,Bo,ko,zo,Dc)||(n=[1,0,0,0,1,0,0,0,1],!Id(n,Bo,ko,zo,Dc))?!1:(Ic.crossVectors(sr,rr),n=[Ic.x,Ic.y,Ic.z],Id(n,Bo,ko,zo,Dc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ws=[new V,new V,new V,new V,new V,new V,new V,new V],Si=new V,Lc=new Bl,Bo=new V,ko=new V,zo=new V,sr=new V,rr=new V,kr=new V,ja=new V,Dc=new V,Ic=new V,zr=new V;function Id(e,t,n,i,s){for(let r=0,o=e.length-3;r<=o;r+=3){zr.fromArray(e,r);const a=s.x*Math.abs(zr.x)+s.y*Math.abs(zr.y)+s.z*Math.abs(zr.z),l=t.dot(zr),c=n.dot(zr),h=i.dot(zr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const un=new V,Oc=new te;let uP=0;class rs extends Tr{constructor(t,n,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:uP++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=Y0,this.updateRanges=[],this.gpuType=ts,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=n.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Oc.fromBufferAttribute(this,n),Oc.applyMatrix3(t),this.setXY(n,Oc.x,Oc.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix3(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyMatrix4(t),this.setXYZ(n,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.applyNormalMatrix(t),this.setXYZ(n,un.x,un.y,un.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)un.fromBufferAttribute(this,n),un.transformDirection(t),this.setXYZ(n,un.x,un.y,un.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=Ya(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Ya(n,this.array)),n}setX(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Ya(n,this.array)),n}setY(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Ya(n,this.array)),n}setZ(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Ya(n,this.array)),n}setW(t,n){return this.normalized&&(n=Gn(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,s){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array),s=Gn(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,n,i,s,r){return t*=this.itemSize,this.normalized&&(n=Gn(n,this.array),i=Gn(i,this.array),s=Gn(s,this.array),r=Gn(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Y0&&(t.usage=this.usage),t}dispose(){this.dispatchEvent({type:"dispose"})}}class tS extends rs{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class eS extends rs{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class pn extends rs{constructor(t,n,i){super(new Float32Array(t),n,i)}}const dP=new Bl,Ka=new V,Od=new V;class Yh{constructor(t=new V,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):dP.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ka.subVectors(t,this.center);const n=Ka.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(Ka,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Od.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ka.copy(t.center).add(Od)),this.expandByPoint(Ka.copy(t.center).sub(Od))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let fP=0;const ui=new en,Ud=new vn,Ho=new V,ei=new Bl,Za=new Bl,xn=new V;class ri extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fP++}),this.uuid=Fl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(XC(t)?eS:tS)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Qt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,n,i){return ui.makeTranslation(t,n,i),this.applyMatrix4(ui),this}scale(t,n,i){return ui.makeScale(t,n,i),this.applyMatrix4(ui),this}lookAt(t){return Ud.lookAt(t),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ho).negate(),this.translate(Ho.x,Ho.y,Ho.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new pn(i,3))}else{const i=Math.min(t.length,n.count);for(let s=0;s<i;s++){const r=t[s];n.setXYZ(s,r.x,r.y,r.z||0)}t.length>n.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bl);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,s=n.length;i<s;i++){const r=n[i];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&me('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yh);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){me("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const i=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),n)for(let r=0,o=n.length;r<o;r++){const a=n[r];Za.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(ei.min,Za.min),ei.expandByPoint(xn),xn.addVectors(ei.max,Za.max),ei.expandByPoint(xn)):(ei.expandByPoint(Za.min),ei.expandByPoint(Za.max))}ei.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)xn.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(xn));if(n)for(let r=0,o=n.length;r<o;r++){const a=n[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xn.fromBufferAttribute(a,c),l&&(Ho.fromBufferAttribute(t,c),xn.add(Ho)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&me('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){me("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rs(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let v=0;v<i.count;v++)a[v]=new V,l[v]=new V;const c=new V,h=new V,d=new V,f=new te,u=new te,m=new te,g=new V,_=new V;function p(v,T,U){c.fromBufferAttribute(i,v),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,U),f.fromBufferAttribute(r,v),u.fromBufferAttribute(r,T),m.fromBufferAttribute(r,U),h.sub(c),d.sub(c),u.sub(f),m.sub(f);const C=1/(u.x*m.y-m.x*u.y);isFinite(C)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(d,-u.y).multiplyScalar(C),_.copy(d).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(C),a[v].add(g),a[T].add(g),a[U].add(g),l[v].add(_),l[T].add(_),l[U].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let v=0,T=y.length;v<T;++v){const U=y[v],C=U.start,I=U.count;for(let k=C,X=C+I;k<X;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const M=new V,S=new V,A=new V,w=new V;function P(v){A.fromBufferAttribute(s,v),w.copy(A);const T=a[v];M.copy(T),M.sub(A.multiplyScalar(A.dot(T))).normalize(),S.crossVectors(w,T);const C=S.dot(l[v])<0?-1:1;o.setXYZW(v,M.x,M.y,M.z,C)}for(let v=0,T=y.length;v<T;++v){const U=y[v],C=U.start,I=U.count;for(let k=C,X=C+I;k<X;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new rs(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);const s=new V,r=new V,o=new V,a=new V,l=new V,c=new V,h=new V,d=new V;if(t)for(let f=0,u=t.count;f<u;f+=3){const m=t.getX(f+0),g=t.getX(f+1),_=t.getX(f+2);s.fromBufferAttribute(n,m),r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,_),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,_),a.add(h),l.add(h),c.add(h),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,u=n.count;f<u;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)xn.fromBufferAttribute(t,n),xn.normalize(),t.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,d=a.normalized,f=new c.constructor(l.length*h);let u=0,m=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?u=l[g]*a.data.stride+a.offset:u=l[g]*h;for(let p=0;p<h;p++)f[m++]=c[u++]}return new rs(f,h,d)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ri,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);n.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){const f=c[h],u=t(f,i);l.push(u)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const u=c[d];h.push(u.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone());const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(n))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let pP=0;class xa extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pP++}),this.uuid=Fl(),this.name="",this.type="Material",this.blending=ra,this.side=Mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cf,this.blendDst=Pf,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lo,this.stencilZFail=Lo,this.stencilZPass=Lo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){qt(`Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){qt(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ra&&(i.blending=this.blending),this.side!==Mr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cf&&(i.blendSrc=this.blendSrc),this.blendDst!==Pf&&(i.blendDst=this.blendDst),this.blendEquation!==jr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==da&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(n){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Ts=new V,Nd=new V,Uc=new V,or=new V,Fd=new V,Nc=new V,Bd=new V;class u_{constructor(t=new V,n=new V(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ts)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Ts.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Ts.copy(this.origin).addScaledVector(this.direction,n),Ts.distanceToSquared(t))}distanceSqToSegment(t,n,i,s){Nd.copy(t).add(n).multiplyScalar(.5),Uc.copy(n).sub(t).normalize(),or.copy(this.origin).sub(Nd);const r=t.distanceTo(n)*.5,o=-this.direction.dot(Uc),a=or.dot(this.direction),l=-or.dot(Uc),c=or.lengthSq(),h=Math.abs(1-o*o);let d,f,u,m;if(h>0)if(d=o*l-a,f=o*a-l,m=r*h,d>=0)if(f>=-m)if(f<=m){const g=1/h;d*=g,f*=g,u=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;else f<=-m?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=m?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Nd).addScaledVector(Uc,f),u}intersectSphere(t,n){Ts.subVectors(t.center,this.origin);const i=Ts.dot(this.direction),s=Ts.dot(Ts)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(t){return this.intersectBox(t,Ts)!==null}intersectTriangle(t,n,i,s,r){Fd.subVectors(n,t),Nc.subVectors(i,t),Bd.crossVectors(Fd,Nc);let o=this.direction.dot(Bd),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;or.subVectors(this.origin,t);const l=a*this.direction.dot(Nc.crossVectors(or,Nc));if(l<0)return null;const c=a*this.direction.dot(Fd.cross(or));if(c<0||l+c>o)return null;const h=-a*or.dot(Bd);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nS extends xa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=Uy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const lx=new en,Hr=new u_,Fc=new Yh,cx=new V,Bc=new V,kc=new V,zc=new V,kd=new V,Hc=new V,hx=new V,Vc=new V;class fn extends vn{constructor(t=new ri,n=new nS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,n){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Hc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],d=r[l];h!==0&&(kd.fromBufferAttribute(d,t),o?Hc.addScaledVector(kd,h):Hc.addScaledVector(kd.sub(n),h))}n.add(Hc)}return n}raycast(t,n){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(r),Hr.copy(t.ray).recast(t.near),!(Fc.containsPoint(Hr.origin)===!1&&(Hr.intersectSphere(Fc,cx)===null||Hr.origin.distanceToSquared(cx)>(t.far-t.near)**2))&&(lx.copy(r).invert(),Hr.copy(t.ray).applyMatrix4(lx),!(i.boundingBox!==null&&Hr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Hr)))}_computeIntersections(t,n,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const _=f[m],p=o[_.materialIndex],y=Math.max(_.start,u.start),M=Math.min(a.count,Math.min(_.start+_.count,u.start+u.count));for(let S=y,A=M;S<A;S+=3){const w=a.getX(S),P=a.getX(S+1),v=a.getX(S+2);s=Gc(this,p,t,i,c,h,d,w,P,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const m=Math.max(0,u.start),g=Math.min(a.count,u.start+u.count);for(let _=m,p=g;_<p;_+=3){const y=a.getX(_),M=a.getX(_+1),S=a.getX(_+2);s=Gc(this,o,t,i,c,h,d,y,M,S),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){const _=f[m],p=o[_.materialIndex],y=Math.max(_.start,u.start),M=Math.min(l.count,Math.min(_.start+_.count,u.start+u.count));for(let S=y,A=M;S<A;S+=3){const w=S,P=S+1,v=S+2;s=Gc(this,p,t,i,c,h,d,w,P,v),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=_.materialIndex,n.push(s))}}else{const m=Math.max(0,u.start),g=Math.min(l.count,u.start+u.count);for(let _=m,p=g;_<p;_+=3){const y=_,M=_+1,S=_+2;s=Gc(this,o,t,i,c,h,d,y,M,S),s&&(s.faceIndex=Math.floor(_/3),n.push(s))}}}}function _P(e,t,n,i,s,r,o,a){let l;if(t.side===Kn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Mr,a),l===null)return null;Vc.copy(a),Vc.applyMatrix4(e.matrixWorld);const c=n.ray.origin.distanceTo(Vc);return c<n.near||c>n.far?null:{distance:c,point:Vc.clone(),object:e}}function Gc(e,t,n,i,s,r,o,a,l,c){e.getVertexPosition(a,Bc),e.getVertexPosition(l,kc),e.getVertexPosition(c,zc);const h=_P(e,t,n,i,Bc,kc,zc,hx);if(h){const d=new V;Ai.getBarycoord(hx,Bc,kc,zc,d),s&&(h.uv=Ai.getInterpolatedAttribute(s,a,l,c,d,new te)),r&&(h.uv1=Ai.getInterpolatedAttribute(r,a,l,c,d,new te)),o&&(h.normal=Ai.getInterpolatedAttribute(o,a,l,c,d,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new V,materialIndex:0};Ai.getNormal(Bc,kc,zc,f.normal),h.face=f,h.barycoord=d}return h}class mP extends zn{constructor(t=null,n=1,i=1,s,r,o,a,l,c=bn,h=bn,d,f){super(null,o,a,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const zd=new V,gP=new V,xP=new Qt;class hr{constructor(t=new V(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,s){return this.normal.set(t,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const s=zd.subVectors(i,n).cross(gP.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n,i=!0){const s=t.delta(zd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:n.copy(t.start).addScaledVector(s,o)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||xP.getNormalMatrix(t),s=this.coplanarPoint(zd).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new Yh,vP=new te(.5,.5),Wc=new V;class d_{constructor(t=new hr,n=new hr,i=new hr,s=new hr,r=new hr,o=new hr){this.planes=[t,n,i,s,r,o]}set(t,n,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=es,i=!1){const s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],f=r[6],u=r[7],m=r[8],g=r[9],_=r[10],p=r[11],y=r[12],M=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-o,u-h,p-m,A-y).normalize(),s[1].setComponents(c+o,u+h,p+m,A+y).normalize(),s[2].setComponents(c+a,u+d,p+g,A+M).normalize(),s[3].setComponents(c-a,u-d,p-g,A-M).normalize(),i)s[4].setComponents(l,f,_,S).normalize(),s[5].setComponents(c-l,u-f,p-_,A-S).normalize();else if(s[4].setComponents(c-l,u-f,p-_,A-S).normalize(),n===es)s[5].setComponents(c+l,u+f,p+_,A+S).normalize();else if(n===Cl)s[5].setComponents(l,f,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Vr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(t){Vr.center.set(0,0,0);const n=vP.distanceTo(t.center);return Vr.radius=.7071067811865476+n,Vr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(t){const n=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(Wc.x=s.normal.x>0?t.max.x:t.min.x,Wc.y=s.normal.y>0?t.max.y:t.min.y,Wc.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class iS extends xa{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Rh=new V,Ch=new V,ux=new en,Ja=new u_,Xc=new Yh,Hd=new V,dx=new V;class yP extends vn{constructor(t=new ri,n=new iS){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)Rh.fromBufferAttribute(n,s-1),Ch.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Rh.distanceTo(Ch);t.setAttribute("lineDistance",new pn(i,1))}else qt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xc.copy(i.boundingSphere),Xc.applyMatrix4(s),Xc.radius+=r,t.ray.intersectsSphere(Xc)===!1)return;ux.copy(s).invert(),Ja.copy(t.ray).applyMatrix4(ux);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const u=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=u,_=m-1;g<_;g+=c){const p=h.getX(g),y=h.getX(g+1),M=$c(this,t,Ja,l,p,y,g);M&&n.push(M)}if(this.isLineLoop){const g=h.getX(m-1),_=h.getX(u),p=$c(this,t,Ja,l,g,_,m-1);p&&n.push(p)}}else{const u=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let g=u,_=m-1;g<_;g+=c){const p=$c(this,t,Ja,l,g,g+1,g);p&&n.push(p)}if(this.isLineLoop){const g=$c(this,t,Ja,l,m-1,u,m-1);g&&n.push(g)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $c(e,t,n,i,s,r,o){const a=e.geometry.attributes.position;if(Rh.fromBufferAttribute(a,s),Ch.fromBufferAttribute(a,r),n.distanceSqToSegment(Rh,Ch,Hd,dx)>i)return;Hd.applyMatrix4(e.matrixWorld);const c=t.ray.origin.distanceTo(Hd);if(!(c<t.near||c>t.far))return{distance:c,point:dx.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}const fx=new V,px=new V;class SP extends yP{constructor(t,n){super(t,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)fx.fromBufferAttribute(n,s),px.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+fx.distanceTo(px);t.setAttribute("lineDistance",new pn(i,1))}else qt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sS extends zn{constructor(t=[],n=ro,i,s,r,o,a,l,c,h){super(t,n,i,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class pa extends zn{constructor(t,n,i=ls,s,r,o,a=bn,l=bn,c,h=Xs,d=1){if(h!==Xs&&h!==Qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:n,depth:d};super(f,s,r,o,a,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new c_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class MP extends pa{constructor(t,n=ls,i=ro,s,r,o=bn,a=bn,l,c=Xs){const h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,n,i,s,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class rS extends zn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class kl extends ri{constructor(t=1,n=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],d=[];let f=0,u=0;m("z","y","x",-1,-1,i,n,t,o,r,0),m("z","y","x",1,-1,i,n,-t,o,r,1),m("x","z","y",1,1,t,i,n,s,o,2),m("x","z","y",1,-1,t,i,-n,s,o,3),m("x","y","z",1,-1,t,n,i,s,r,4),m("x","y","z",-1,-1,t,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(d,2));function m(g,_,p,y,M,S,A,w,P,v,T){const U=S/P,C=A/v,I=S/2,k=A/2,X=w/2,O=P+1,z=v+1;let F=0,K=0;const Z=new V;for(let ft=0;ft<z;ft++){const Tt=ft*C-k;for(let wt=0;wt<O;wt++){const re=wt*U-I;Z[g]=re*y,Z[_]=Tt*M,Z[p]=X,c.push(Z.x,Z.y,Z.z),Z[g]=0,Z[_]=0,Z[p]=w>0?1:-1,h.push(Z.x,Z.y,Z.z),d.push(wt/P),d.push(1-ft/v),F+=1}}for(let ft=0;ft<v;ft++)for(let Tt=0;Tt<P;Tt++){const wt=f+Tt+O*ft,re=f+Tt+O*(ft+1),$t=f+(Tt+1)+O*(ft+1),jt=f+(Tt+1)+O*ft;l.push(wt,re,jt),l.push(re,$t,jt),K+=6}a.addGroup(u,K,T),u+=K,f+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class ur extends ri{constructor(t=1,n=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],f=[],u=[];let m=0;const g=[],_=i/2;let p=0;y(),o===!1&&(t>0&&M(!0),n>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new pn(d,3)),this.setAttribute("normal",new pn(f,3)),this.setAttribute("uv",new pn(u,2));function y(){const S=new V,A=new V;let w=0;const P=(n-t)/i;for(let v=0;v<=r;v++){const T=[],U=v/r,C=U*(n-t)+t;for(let I=0;I<=s;I++){const k=I/s,X=k*l+a,O=Math.sin(X),z=Math.cos(X);A.x=C*O,A.y=-U*i+_,A.z=C*z,d.push(A.x,A.y,A.z),S.set(O,P,z).normalize(),f.push(S.x,S.y,S.z),u.push(k,1-U),T.push(m++)}g.push(T)}for(let v=0;v<s;v++)for(let T=0;T<r;T++){const U=g[T][v],C=g[T+1][v],I=g[T+1][v+1],k=g[T][v+1];(t>0||T!==0)&&(h.push(U,C,k),w+=3),(n>0||T!==r-1)&&(h.push(C,I,k),w+=3)}c.addGroup(p,w,0),p+=w}function M(S){const A=m,w=new te,P=new V;let v=0;const T=S===!0?t:n,U=S===!0?1:-1;for(let I=1;I<=s;I++)d.push(0,_*U,0),f.push(0,U,0),u.push(.5,.5),m++;const C=m;for(let I=0;I<=s;I++){const X=I/s*l+a,O=Math.cos(X),z=Math.sin(X);P.x=T*z,P.y=_*U,P.z=T*O,d.push(P.x,P.y,P.z),f.push(0,U,0),w.x=O*.5+.5,w.y=z*.5*U+.5,u.push(w.x,w.y),m++}for(let I=0;I<s;I++){const k=A+I,X=C+I;S===!0?h.push(X,X+1,k):h.push(X+1,X,k),v+=3}c.addGroup(p,v,S===!0?1:2),p+=v}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ur(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class qh extends ri{constructor(t=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:s};const r=t/2,o=n/2,a=Math.floor(i),l=Math.floor(s),c=a+1,h=l+1,d=t/a,f=n/l,u=[],m=[],g=[],_=[];for(let p=0;p<h;p++){const y=p*f-o;for(let M=0;M<c;M++){const S=M*d-r;m.push(S,-y,0),g.push(0,0,1),_.push(M/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){const M=y+c*p,S=y+c*(p+1),A=y+1+c*(p+1),w=y+1+c*p;u.push(M,S,w),u.push(S,A,w)}this.setIndex(u),this.setAttribute("position",new pn(m,3)),this.setAttribute("normal",new pn(g,3)),this.setAttribute("uv",new pn(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qh(t.width,t.height,t.widthSegments,t.heightSegments)}}class f_ extends ri{constructor(t=1,n=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:n,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);const l=[],c=[],h=[],d=[],f=new V,u=new V,m=new V;for(let g=0;g<=i;g++){const _=o+g/i*a;for(let p=0;p<=s;p++){const y=p/s*r;u.x=(t+n*Math.cos(_))*Math.cos(y),u.y=(t+n*Math.cos(_))*Math.sin(y),u.z=n*Math.sin(_),c.push(u.x,u.y,u.z),f.x=t*Math.cos(y),f.y=t*Math.sin(y),m.subVectors(u,f).normalize(),h.push(m.x,m.y,m.z),d.push(p/s),d.push(g/i)}}for(let g=1;g<=i;g++)for(let _=1;_<=s;_++){const p=(s+1)*g+_-1,y=(s+1)*(g-1)+_-1,M=(s+1)*(g-1)+_,S=(s+1)*g+_;l.push(p,y,S),l.push(y,M,S)}this.setIndex(l),this.setAttribute("position",new pn(c,3)),this.setAttribute("normal",new pn(h,3)),this.setAttribute("uv",new pn(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new f_(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}function _a(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const s=e[n][i];if(_x(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=s.clone();else if(Array.isArray(s))if(_x(s[0])){const r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[n][i]=r}else t[n][i]=s.slice();else t[n][i]=s}}return t}function Nn(e){const t={};for(let n=0;n<e.length;n++){const i=_a(e[n]);for(const s in i)t[s]=i[s]}return t}function _x(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function bP(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function oS(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const EP={clone:_a,merge:Nn};var wP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cs extends xa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wP,this.fragmentShader=TP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_a(t.uniforms),this.uniformsGroups=bP(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?n.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[s]={type:"m4",value:o.toArray()}:n.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class AP extends cs{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class RP extends xa{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=mp,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class CP extends xa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class PP extends xa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class p_ extends vn{constructor(t,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,n){return super.copy(t,n),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const n=super.toJSON(t);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class LP extends p_{constructor(t,n,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(n)}copy(t,n){return super.copy(t,n),this.groundColor.copy(t.groundColor),this}toJSON(t){const n=super.toJSON(t);return n.object.groundColor=this.groundColor.getHex(),n}}const Vd=new en,mx=new V,gx=new V;class DP{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new en,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new d_,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const n=this.camera,i=this.matrix;mx.setFromMatrixPosition(t.matrixWorld),n.position.copy(mx),gx.setFromMatrixPosition(t.target.matrixWorld),n.lookAt(gx),n.updateMatrixWorld(),Vd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Cl||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Vd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Yc=new V,qc=new br,Wi=new V;class aS extends vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new en,this.projectionMatrix=new en,this.projectionMatrixInverse=new en,this.coordinateSystem=es,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yc,qc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,qc,Wi.set(1,1,1)).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorld.decompose(Yc,qc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,qc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ar=new V,xx=new te,vx=new te;class pi extends aS{constructor(t=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=xp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(dh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xp*2*Math.atan(Math.tan(dh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ar.x,ar.y).multiplyScalar(-t/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ar.x,ar.y).multiplyScalar(-t/ar.z)}getViewSize(t,n){return this.getViewBounds(t,xx,vx),n.subVectors(vx,xx)}setViewOffset(t,n,i,s,r,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(dh*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,n-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class __ extends aS{constructor(t=-1,n=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+n,l=s-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class IP extends DP{constructor(){super(new __(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yx extends p_{constructor(t,n){super(t,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vn.DEFAULT_UP),this.updateMatrix(),this.target=new vn,this.shadow=new IP}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const n=super.toJSON(t);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class OP extends p_{constructor(t,n){super(t,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vo=-90,Go=1;class UP extends vn{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new pi(Vo,Go,t,n);s.layers=this.layers,this.add(s);const r=new pi(Vo,Go,t,n);r.layers=this.layers,this.add(r);const o=new pi(Vo,Go,t,n);o.layers=this.layers,this.add(o);const a=new pi(Vo,Go,t,n);a.layers=this.layers,this.add(a);const l=new pi(Vo,Go,t,n);l.layers=this.layers,this.add(l);const c=new pi(Vo,Go,t,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,s,r,o,a,l]=n;for(const c of n)this.remove(c);if(t===es)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Cl)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of n)this.add(c),c.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let _=!1;t.isWebGLRenderer===!0?_=t.state.buffers.depth.getReversed():_=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,r),t.setRenderTarget(i,1,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,o),t.setRenderTarget(i,2,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,a),t.setRenderTarget(i,3,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,l),t.setRenderTarget(i,4,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,c),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),_&&t.autoClear===!1&&t.clearDepth(),t.render(n,h),t.setRenderTarget(d,f,u),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class NP extends pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Sx{constructor(t=1,n=0,i=0){this.radius=t,this.phi=n,this.theta=i}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=he(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(he(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const S_=class S_{constructor(t,n,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,n=0){for(let i=0;i<4;i++)this.elements[i]=t[i+n];return this}set(t,n,i,s){const r=this.elements;return r[0]=t,r[2]=n,r[1]=i,r[3]=s,this}};S_.prototype.isMatrix2=!0;let Mx=S_;class FP extends SP{constructor(t=10,n=10,i=4473924,s=8947848){i=new ue(i),s=new ue(s);const r=n/2,o=t/n,a=t/2,l=[],c=[];for(let f=0,u=0,m=-a;f<=n;f++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const g=f===r?i:s;g.toArray(c,u),u+=3,g.toArray(c,u),u+=3,g.toArray(c,u),u+=3,g.toArray(c,u),u+=3}const h=new ri;h.setAttribute("position",new pn(l,3)),h.setAttribute("color",new pn(c,3));const d=new iS({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class BP extends Tr{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){qt("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function bx(e,t,n,i){const s=kP(i);switch(n){case Yy:return e*t;case jy:return e*t/s.components*s.byteLength;case s_:return e*t/s.components*s.byteLength;case oo:return e*t*2/s.components*s.byteLength;case r_:return e*t*2/s.components*s.byteLength;case qy:return e*t*3/s.components*s.byteLength;case Pi:return e*t*4/s.components*s.byteLength;case o_:return e*t*4/s.components*s.byteLength;case lh:case ch:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case hh:case uh:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Hf:case Gf:return Math.max(e,16)*Math.max(t,8)/4;case zf:case Vf:return Math.max(e,8)*Math.max(t,8)/2;case Wf:case Xf:case Yf:case qf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case $f:case bh:case jf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Kf:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case Zf:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Jf:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case Qf:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case tp:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case ep:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case np:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ip:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case sp:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case rp:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case op:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case ap:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case lp:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case cp:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case hp:case up:case dp:return Math.ceil(e/4)*Math.ceil(t/4)*16;case fp:case pp:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Eh:case _p:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function kP(e){switch(e){case ii:case Gy:return{byteLength:1,components:1};case Al:case Wy:case Ws:return{byteLength:2,components:1};case n_:case i_:return{byteLength:2,components:4};case ls:case e_:case ts:return{byteLength:4,components:1};case Xy:case $y:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function lS(){let e=null,t=!1,n=null,i=null;function s(r,o){n(r,o),i=e.requestAnimationFrame(s)}return{start:function(){t!==!0&&n!==null&&e!==null&&(i=e.requestAnimationFrame(s),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){n=r},setContext:function(r){e=r}}}function zP(e){const t=new WeakMap;function n(a,l){const c=a.array,h=a.usage,d=c.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,c,h),a.onUploadCallback();let u;if(c instanceof Float32Array)u=e.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=e.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=e.HALF_FLOAT:u=e.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=e.SHORT;else if(c instanceof Uint32Array)u=e.UNSIGNED_INT;else if(c instanceof Int32Array)u=e.INT;else if(c instanceof Int8Array)u=e.BYTE;else if(c instanceof Uint8Array)u=e.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const h=l.array,d=l.updateRanges;if(e.bindBuffer(c,a),d.length===0)e.bufferSubData(c,0,h);else{d.sort((u,m)=>u.start-m.start);let f=0;for(let u=1;u<d.length;u++){const m=d[f],g=d[u];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,d[f]=g)}d.length=f+1;for(let u=0,m=d.length;u<m;u++){const g=d[u];e.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(e.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}var HP=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VP=`#ifdef USE_ALPHAHASH
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
#endif`,GP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,WP=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,XP=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$P=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YP=`#ifdef USE_AOMAP
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
#endif`,qP=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jP=`#ifdef USE_BATCHING
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
#endif`,KP=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ZP=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,JP=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QP=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tL=`#ifdef USE_IRIDESCENCE
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
#endif`,eL=`#ifdef USE_BUMPMAP
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
#endif`,nL=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,iL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,aL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cL=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,hL=`#define PI 3.141592653589793
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
} // validated`,uL=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dL=`vec3 transformedNormal = objectNormal;
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
#endif`,fL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_L=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mL=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gL="gl_FragColor = linearToOutputTexel( gl_FragColor );",xL=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vL=`#ifdef USE_ENVMAP
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
#endif`,yL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,SL=`#ifdef USE_ENVMAP
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
#endif`,ML=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bL=`#ifdef USE_ENVMAP
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
#endif`,EL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,AL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RL=`#ifdef USE_GRADIENTMAP
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
}`,CL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,PL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,DL=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,IL=`#ifdef USE_ENVMAP
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
#endif`,OL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,UL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NL=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FL=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BL=`PhysicalMaterial material;
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
#endif`,kL=`uniform sampler2D dfgLUT;
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
}`,zL=`
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
#endif`,HL=`#if defined( RE_IndirectDiffuse )
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
#endif`,VL=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GL=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,WL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,XL=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$L=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YL=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qL=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jL=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KL=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZL=`#if defined( USE_POINTS_UV )
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
#endif`,JL=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,QL=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tD=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eD=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nD=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iD=`#ifdef USE_MORPHTARGETS
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
#endif`,sD=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rD=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,oD=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,aD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lD=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cD=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hD=`#ifdef USE_NORMALMAP
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
#endif`,uD=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dD=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fD=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pD=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_D=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mD=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gD=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xD=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vD=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yD=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SD=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MD=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bD=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ED=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TD=`float getShadowMask() {
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
}`,AD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RD=`#ifdef USE_SKINNING
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
#endif`,CD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PD=`#ifdef USE_SKINNING
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
#endif`,LD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ID=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,UD=`#ifdef USE_TRANSMISSION
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
#endif`,ND=`#ifdef USE_TRANSMISSION
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
#endif`,FD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VD=`uniform sampler2D t2D;
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
}`,GD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,XD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$D=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YD=`#include <common>
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
}`,qD=`#if DEPTH_PACKING == 3200
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
}`,jD=`#define DISTANCE
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
}`,KD=`#define DISTANCE
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
}`,ZD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QD=`uniform float scale;
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
}`,tI=`uniform vec3 diffuse;
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
}`,eI=`#include <common>
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
}`,nI=`uniform vec3 diffuse;
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
}`,iI=`#define LAMBERT
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
}`,sI=`#define LAMBERT
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
}`,rI=`#define MATCAP
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
}`,oI=`#define MATCAP
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
}`,aI=`#define NORMAL
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
}`,lI=`#define NORMAL
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
}`,cI=`#define PHONG
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
}`,hI=`#define PHONG
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
}`,uI=`#define STANDARD
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
}`,dI=`#define STANDARD
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
}`,fI=`#define TOON
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
}`,pI=`#define TOON
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
}`,_I=`uniform float size;
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
}`,mI=`uniform vec3 diffuse;
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
}`,gI=`#include <common>
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
}`,xI=`uniform vec3 color;
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
}`,vI=`uniform float rotation;
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
}`,yI=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:HP,alphahash_pars_fragment:VP,alphamap_fragment:GP,alphamap_pars_fragment:WP,alphatest_fragment:XP,alphatest_pars_fragment:$P,aomap_fragment:YP,aomap_pars_fragment:qP,batching_pars_vertex:jP,batching_vertex:KP,begin_vertex:ZP,beginnormal_vertex:JP,bsdfs:QP,iridescence_fragment:tL,bumpmap_pars_fragment:eL,clipping_planes_fragment:nL,clipping_planes_pars_fragment:iL,clipping_planes_pars_vertex:sL,clipping_planes_vertex:rL,color_fragment:oL,color_pars_fragment:aL,color_pars_vertex:lL,color_vertex:cL,common:hL,cube_uv_reflection_fragment:uL,defaultnormal_vertex:dL,displacementmap_pars_vertex:fL,displacementmap_vertex:pL,emissivemap_fragment:_L,emissivemap_pars_fragment:mL,colorspace_fragment:gL,colorspace_pars_fragment:xL,envmap_fragment:vL,envmap_common_pars_fragment:yL,envmap_pars_fragment:SL,envmap_pars_vertex:ML,envmap_physical_pars_fragment:IL,envmap_vertex:bL,fog_vertex:EL,fog_pars_vertex:wL,fog_fragment:TL,fog_pars_fragment:AL,gradientmap_pars_fragment:RL,lightmap_pars_fragment:CL,lights_lambert_fragment:PL,lights_lambert_pars_fragment:LL,lights_pars_begin:DL,lights_toon_fragment:OL,lights_toon_pars_fragment:UL,lights_phong_fragment:NL,lights_phong_pars_fragment:FL,lights_physical_fragment:BL,lights_physical_pars_fragment:kL,lights_fragment_begin:zL,lights_fragment_maps:HL,lights_fragment_end:VL,lightprobes_pars_fragment:GL,logdepthbuf_fragment:WL,logdepthbuf_pars_fragment:XL,logdepthbuf_pars_vertex:$L,logdepthbuf_vertex:YL,map_fragment:qL,map_pars_fragment:jL,map_particle_fragment:KL,map_particle_pars_fragment:ZL,metalnessmap_fragment:JL,metalnessmap_pars_fragment:QL,morphinstance_vertex:tD,morphcolor_vertex:eD,morphnormal_vertex:nD,morphtarget_pars_vertex:iD,morphtarget_vertex:sD,normal_fragment_begin:rD,normal_fragment_maps:oD,normal_pars_fragment:aD,normal_pars_vertex:lD,normal_vertex:cD,normalmap_pars_fragment:hD,clearcoat_normal_fragment_begin:uD,clearcoat_normal_fragment_maps:dD,clearcoat_pars_fragment:fD,iridescence_pars_fragment:pD,opaque_fragment:_D,packing:mD,premultiplied_alpha_fragment:gD,project_vertex:xD,dithering_fragment:vD,dithering_pars_fragment:yD,roughnessmap_fragment:SD,roughnessmap_pars_fragment:MD,shadowmap_pars_fragment:bD,shadowmap_pars_vertex:ED,shadowmap_vertex:wD,shadowmask_pars_fragment:TD,skinbase_vertex:AD,skinning_pars_vertex:RD,skinning_vertex:CD,skinnormal_vertex:PD,specularmap_fragment:LD,specularmap_pars_fragment:DD,tonemapping_fragment:ID,tonemapping_pars_fragment:OD,transmission_fragment:UD,transmission_pars_fragment:ND,uv_pars_fragment:FD,uv_pars_vertex:BD,uv_vertex:kD,worldpos_vertex:zD,background_vert:HD,background_frag:VD,backgroundCube_vert:GD,backgroundCube_frag:WD,cube_vert:XD,cube_frag:$D,depth_vert:YD,depth_frag:qD,distance_vert:jD,distance_frag:KD,equirect_vert:ZD,equirect_frag:JD,linedashed_vert:QD,linedashed_frag:tI,meshbasic_vert:eI,meshbasic_frag:nI,meshlambert_vert:iI,meshlambert_frag:sI,meshmatcap_vert:rI,meshmatcap_frag:oI,meshnormal_vert:aI,meshnormal_frag:lI,meshphong_vert:cI,meshphong_frag:hI,meshphysical_vert:uI,meshphysical_frag:dI,meshtoon_vert:fI,meshtoon_frag:pI,points_vert:_I,points_frag:mI,shadow_vert:gI,shadow_frag:xI,sprite_vert:vI,sprite_frag:yI},At={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},Ji={basic:{uniforms:Nn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:Nn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ue(0)},envMapIntensity:{value:1}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:Nn([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:Nn([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:Nn([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new ue(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:Nn([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:Nn([At.points,At.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:Nn([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:Nn([At.common,At.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:Nn([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:Nn([At.sprite,At.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distance:{uniforms:Nn([At.common,At.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distance_vert,fragmentShader:ae.distance_frag},shadow:{uniforms:Nn([At.lights,At.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Ji.physical={uniforms:Nn([Ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};const jc={r:0,b:0,g:0},SI=new en,cS=new Qt;cS.set(-1,0,0,0,1,0,0,0,1);function MI(e,t,n,i,s,r){const o=new ue(0);let a=s===!0?0:1,l,c,h=null,d=0,f=null;function u(y){let M=y.isScene===!0?y.background:null;if(M&&M.isTexture){const S=y.backgroundBlurriness>0;M=t.get(M,S)}return M}function m(y){let M=!1;const S=u(y);S===null?_(o,a):S&&S.isColor&&(_(S,1),M=!0);const A=e.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(e.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(y,M){const S=u(M);S&&(S.isCubeTexture||S.mapping===$h)?(c===void 0&&(c=new fn(new kl(1,1,1),new cs({name:"BackgroundCubeMaterial",uniforms:_a(Ji.backgroundCube.uniforms),vertexShader:Ji.backgroundCube.vertexShader,fragmentShader:Ji.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(SI.makeRotationFromEuler(M.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cS),c.material.toneMapped=pe.getTransfer(S.colorSpace)!==Ae,(h!==S||d!==S.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,f=e.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new fn(new qh(2,2),new cs({name:"BackgroundMaterial",uniforms:_a(Ji.background.uniforms),vertexShader:Ji.background.vertexShader,fragmentShader:Ji.background.fragmentShader,side:Mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=pe.getTransfer(S.colorSpace)!==Ae,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,f=e.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function _(y,M){y.getRGB(jc,oS(e)),n.buffers.color.setClear(jc.r,jc.g,jc.b,M,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,M=1){o.set(y),a=M,_(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,_(o,a)},render:m,addToRenderList:g,dispose:p}}function bI(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},s=f(null);let r=s,o=!1;function a(C,I,k,X,O){let z=!1;const F=d(C,X,k,I);r!==F&&(r=F,c(r.object)),z=u(C,X,k,O),z&&m(C,X,k,O),O!==null&&t.update(O,e.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(C,I,k,X),O!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function l(){return e.createVertexArray()}function c(C){return e.bindVertexArray(C)}function h(C){return e.deleteVertexArray(C)}function d(C,I,k,X){const O=X.wireframe===!0;let z=i[I.id];z===void 0&&(z={},i[I.id]=z);const F=C.isInstancedMesh===!0?C.id:0;let K=z[F];K===void 0&&(K={},z[F]=K);let Z=K[k.id];Z===void 0&&(Z={},K[k.id]=Z);let ft=Z[O];return ft===void 0&&(ft=f(l()),Z[O]=ft),ft}function f(C){const I=[],k=[],X=[];for(let O=0;O<n;O++)I[O]=0,k[O]=0,X[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:X,object:C,attributes:{},index:null}}function u(C,I,k,X){const O=r.attributes,z=I.attributes;let F=0;const K=k.getAttributes();for(const Z in K)if(K[Z].location>=0){const Tt=O[Z];let wt=z[Z];if(wt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(wt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(wt=C.instanceColor)),Tt===void 0||Tt.attribute!==wt||wt&&Tt.data!==wt.data)return!0;F++}return r.attributesNum!==F||r.index!==X}function m(C,I,k,X){const O={},z=I.attributes;let F=0;const K=k.getAttributes();for(const Z in K)if(K[Z].location>=0){let Tt=z[Z];Tt===void 0&&(Z==="instanceMatrix"&&C.instanceMatrix&&(Tt=C.instanceMatrix),Z==="instanceColor"&&C.instanceColor&&(Tt=C.instanceColor));const wt={};wt.attribute=Tt,Tt&&Tt.data&&(wt.data=Tt.data),O[Z]=wt,F++}r.attributes=O,r.attributesNum=F,r.index=X}function g(){const C=r.newAttributes;for(let I=0,k=C.length;I<k;I++)C[I]=0}function _(C){p(C,0)}function p(C,I){const k=r.newAttributes,X=r.enabledAttributes,O=r.attributeDivisors;k[C]=1,X[C]===0&&(e.enableVertexAttribArray(C),X[C]=1),O[C]!==I&&(e.vertexAttribDivisor(C,I),O[C]=I)}function y(){const C=r.newAttributes,I=r.enabledAttributes;for(let k=0,X=I.length;k<X;k++)I[k]!==C[k]&&(e.disableVertexAttribArray(k),I[k]=0)}function M(C,I,k,X,O,z,F){F===!0?e.vertexAttribIPointer(C,I,k,O,z):e.vertexAttribPointer(C,I,k,X,O,z)}function S(C,I,k,X){g();const O=X.attributes,z=k.getAttributes(),F=I.defaultAttributeValues;for(const K in z){const Z=z[K];if(Z.location>=0){let ft=O[K];if(ft===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor)),ft!==void 0){const Tt=ft.normalized,wt=ft.itemSize,re=t.get(ft);if(re===void 0)continue;const $t=re.buffer,jt=re.type,tt=re.bytesPerElement,gt=jt===e.INT||jt===e.UNSIGNED_INT||ft.gpuType===e_;if(ft.isInterleavedBufferAttribute){const ht=ft.data,Ht=ht.stride,Wt=ft.offset;if(ht.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Z.locationSize;Xt++)p(Z.location+Xt,ht.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Xt=0;Xt<Z.locationSize;Xt++)_(Z.location+Xt);e.bindBuffer(e.ARRAY_BUFFER,$t);for(let Xt=0;Xt<Z.locationSize;Xt++)M(Z.location+Xt,wt/Z.locationSize,jt,Tt,Ht*tt,(Wt+wt/Z.locationSize*Xt)*tt,gt)}else{if(ft.isInstancedBufferAttribute){for(let ht=0;ht<Z.locationSize;ht++)p(Z.location+ht,ft.meshPerAttribute);C.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let ht=0;ht<Z.locationSize;ht++)_(Z.location+ht);e.bindBuffer(e.ARRAY_BUFFER,$t);for(let ht=0;ht<Z.locationSize;ht++)M(Z.location+ht,wt/Z.locationSize,jt,Tt,wt*tt,wt/Z.locationSize*ht*tt,gt)}}else if(F!==void 0){const Tt=F[K];if(Tt!==void 0)switch(Tt.length){case 2:e.vertexAttrib2fv(Z.location,Tt);break;case 3:e.vertexAttrib3fv(Z.location,Tt);break;case 4:e.vertexAttrib4fv(Z.location,Tt);break;default:e.vertexAttrib1fv(Z.location,Tt)}}}}y()}function A(){T();for(const C in i){const I=i[C];for(const k in I){const X=I[k];for(const O in X){const z=X[O];for(const F in z)h(z[F].object),delete z[F];delete X[O]}}delete i[C]}}function w(C){if(i[C.id]===void 0)return;const I=i[C.id];for(const k in I){const X=I[k];for(const O in X){const z=X[O];for(const F in z)h(z[F].object),delete z[F];delete X[O]}}delete i[C.id]}function P(C){for(const I in i){const k=i[I];for(const X in k){const O=k[X];if(O[C.id]===void 0)continue;const z=O[C.id];for(const F in z)h(z[F].object),delete z[F];delete O[C.id]}}}function v(C){for(const I in i){const k=i[I],X=C.isInstancedMesh===!0?C.id:0,O=k[X];if(O!==void 0){for(const z in O){const F=O[z];for(const K in F)h(F[K].object),delete F[K];delete O[z]}delete k[X],Object.keys(k).length===0&&delete i[I]}}}function T(){U(),o=!0,r!==s&&(r=s,c(r.object))}function U(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:T,resetDefaultState:U,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:v,releaseStatesOfProgram:P,initAttributes:g,enableAttribute:_,disableUnusedAttributes:y}}function EI(e,t,n){let i;function s(l){i=l}function r(l,c){e.drawArrays(i,l,c),n.update(c,i,1)}function o(l,c,h){h!==0&&(e.drawArraysInstanced(i,l,c,h),n.update(c,i,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let f=0;for(let u=0;u<h;u++)f+=c[u];n.update(f,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function wI(e,t,n,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=e.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==Pi&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const v=P===Ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ii&&i.convert(P)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ts&&!v)}function l(P){if(P==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const h=l(c);h!==c&&(qt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=e.getParameter(e.MAX_TEXTURE_SIZE),_=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),p=e.getParameter(e.MAX_VERTEX_ATTRIBS),y=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),M=e.getParameter(e.MAX_VARYING_VECTORS),S=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),A=e.getParameter(e.MAX_SAMPLES),w=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:S,maxSamples:A,samples:w}}function TI(e){const t=this;let n=null,i=0,s=!1,r=!1;const o=new hr,a=new Qt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const u=d.length!==0||f||i!==0||s;return s=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,u){const m=d.clippingPlanes,g=d.clipIntersection,_=d.clipShadows,p=e.get(d);if(!s||m===null||m.length===0||r&&!_)r?h(null):c();else{const y=r?0:i,M=y*4;let S=p.clippingState||null;l.value=S,S=h(m,f,M,u);for(let A=0;A!==M;++A)S[A]=n[A];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,f,u,m){const g=d!==null?d.length:0;let _=null;if(g!==0){if(_=l.value,m!==!0||_===null){const p=u+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<p)&&(_=new Float32Array(p));for(let M=0,S=u;M!==g;++M,S+=4)o.copy(d[M]).applyMatrix4(y,a),o.normal.toArray(_,S),_[S+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}const gr=4,Ex=[.125,.215,.35,.446,.526,.582],Kr=20,AI=256,Qa=new __,wx=new ue;let Gd=null,Wd=0,Xd=0,$d=!1;const RI=new V;class Tx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,i=.1,s=100,r={}){const{size:o=256,position:a=RI}=r;Gd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Gd,Wd,Xd),this._renderer.xr.enabled=$d,t.scissorTest=!1,Wo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===ro||t.mapping===fa?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Gd=this._renderer.getRenderTarget(),Wd=this._renderer.getActiveCubeFace(),Xd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:Ws,format:Pi,colorSpace:wh,depthBuffer:!1},s=Ax(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ax(t,n,i);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=CI(r)),this._blurMaterial=LI(r,t,n),this._ggxMaterial=PI(r,t,n)}return s}_compileMaterial(t){const n=new fn(new ri,t);this._renderer.compile(n,Qa)}_sceneToCubeUV(t,n,i,s,r){const l=new pi(90,1,n,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,u=d.toneMapping;d.getClearColor(wx),d.toneMapping=is,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new kl,new nS({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,_=g.material;let p=!1;const y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,p=!0):(_.color.copy(wx),p=!0);for(let M=0;M<6;M++){const S=M%3;S===0?(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[M],r.y,r.z)):S===1?(l.up.set(0,0,c[M]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[M],r.z)):(l.up.set(0,c[M],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[M]));const A=this._cubeSize;Wo(s,S*A,M>2?A:0,A,A),d.setRenderTarget(s),p&&d.render(g,l),d.render(t,l)}d.toneMapping=u,d.autoClear=f,t.background=y}_textureToCubeUV(t,n){const i=this._renderer,s=t.mapping===ro||t.mapping===fa;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rx());const r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;const a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Wo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qa)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);n.autoClear=i}_applyGGXFilter(t,n,i){const s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),f=0+c*1.25,u=d*f,{_lodMax:m}=this,g=this._sizeLods[i],_=3*g*(i>m-gr?i-m+gr:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=u,l.mipInt.value=m-n,Wo(r,_,p,3*g,2*g),s.setRenderTarget(r),s.render(a,Qa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,Wo(t,_,p,3*g,2*g),s.setRenderTarget(t),s.render(a,Qa)}_blur(t,n,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,n,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&me("blur direction must be either latitudinal or longitudinal!");const h=3,d=this._lodMeshes[s];d.material=c;const f=c.uniforms,u=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Kr-1),g=r/m,_=isFinite(r)?1+Math.floor(h*g):Kr;_>Kr&&qt(`sigmaRadians, ${r}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Kr}`);const p=[];let y=0;for(let P=0;P<Kr;++P){const v=P/g,T=Math.exp(-v*v/2);p.push(T),P===0?y+=T:P<_&&(y+=2*T)}for(let P=0;P<p.length;P++)p[P]=p[P]/y;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=m,f.mipInt.value=M-i;const S=this._sizeLods[s],A=3*S*(s>M-gr?s-M+gr:0),w=4*(this._cubeSize-S);Wo(n,A,w,3*S,2*S),l.setRenderTarget(n),l.render(d,Qa)}}function CI(e){const t=[],n=[],i=[];let s=e;const r=e-gr+1+Ex.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>e-gr?l=Ex[o-e+gr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,m=6,g=3,_=2,p=1,y=new Float32Array(g*m*u),M=new Float32Array(_*m*u),S=new Float32Array(p*m*u);for(let w=0;w<u;w++){const P=w%3*2/3-1,v=w>2?0:-1,T=[P,v,0,P+2/3,v,0,P+2/3,v+1,0,P,v,0,P+2/3,v+1,0,P,v+1,0];y.set(T,g*m*w),M.set(f,_*m*w);const U=[w,w,w,w,w,w];S.set(U,p*m*w)}const A=new ri;A.setAttribute("position",new rs(y,g)),A.setAttribute("uv",new rs(M,_)),A.setAttribute("faceIndex",new rs(S,p)),i.push(new fn(A,null)),s>gr&&s--}return{lodMeshes:i,sizeLods:t,sigmas:n}}function Ax(e,t,n){const i=new ss(e,t,n);return i.texture.mapping=$h,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Wo(e,t,n,i,s){e.viewport.set(t,n,i,s),e.scissor.set(t,n,i,s)}function PI(e,t,n){return new cs({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:AI,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:jh(),fragmentShader:`

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
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function LI(e,t,n){const i=new Float32Array(Kr),s=new V(0,1,0);return new cs({name:"SphericalGaussianBlur",defines:{n:Kr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:jh(),fragmentShader:`

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
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function Rx(){return new cs({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jh(),fragmentShader:`

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
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function Cx(){return new cs({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bs,depthTest:!1,depthWrite:!1})}function jh(){return`

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
	`}class hS extends ss{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new sS(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new kl(5,5,5),r=new cs({name:"CubemapFromEquirect",uniforms:_a(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Kn,blending:Bs});r.uniforms.tEquirect.value=n;const o=new fn(s,r),a=n.minFilter;return n.minFilter===Jr&&(n.minFilter=Ln),new UP(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n=!0,i=!0,s=!0){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,s);t.setRenderTarget(r)}}function DI(e){let t=new WeakMap,n=new WeakMap,i=null;function s(f,u=!1){return f==null?null:u?o(f):r(f)}function r(f){if(f&&f.isTexture){const u=f.mapping;if(u===_d||u===md)if(t.has(f)){const m=t.get(f).texture;return a(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const g=new hS(m.height);return g.fromEquirectangularTexture(e,f),t.set(f,g),f.addEventListener("dispose",c),a(g.texture,f.mapping)}else return null}}return f}function o(f){if(f&&f.isTexture){const u=f.mapping,m=u===_d||u===md,g=u===ro||u===fa;if(m||g){let _=n.get(f);const p=_!==void 0?_.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new Tx(e)),_=m?i.fromEquirectangular(f,_):i.fromCubemap(f,_),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),_.texture;if(_!==void 0)return _.texture;{const y=f.image;return m&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Tx(e)),_=m?i.fromEquirectangular(f):i.fromCubemap(f),_.texture.pmremVersion=f.pmremVersion,n.set(f,_),f.addEventListener("dispose",h),_.texture):null}}}return f}function a(f,u){return u===_d?f.mapping=ro:u===md&&(f.mapping=fa),f}function l(f){let u=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&u++;return u===m}function c(f){const u=f.target;u.removeEventListener("dispose",c);const m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function h(f){const u=f.target;u.removeEventListener("dispose",h);const m=n.get(u);m!==void 0&&(n.delete(u),m.dispose())}function d(){t=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function II(e){const t={};function n(i){if(t[i]!==void 0)return t[i];const s=e.getExtension(i);return t[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&gp("WebGLRenderer: "+i+" extension not supported."),s}}}function OI(e,t,n,i){const s={},r=new WeakMap;function o(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete s[f.id];const u=r.get(f);u&&(t.remove(u),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const u in f)t.update(f[u],e.ARRAY_BUFFER)}function c(d){const f=[],u=d.index,m=d.attributes.position;let g=0;if(m===void 0)return;if(u!==null){const y=u.array;g=u.version;for(let M=0,S=y.length;M<S;M+=3){const A=y[M+0],w=y[M+1],P=y[M+2];f.push(A,w,w,P,P,A)}}else{const y=m.array;g=m.version;for(let M=0,S=y.length/3-1;M<S;M+=3){const A=M+0,w=M+1,P=M+2;f.push(A,w,w,P,P,A)}}const _=new(m.count>=65535?eS:tS)(f,1);_.version=g;const p=r.get(d);p&&t.remove(p),r.set(d,_)}function h(d){const f=r.get(d);if(f){const u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function UI(e,t,n){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){e.drawElements(i,f,r,d*o),n.update(f,i,1)}function c(d,f,u){u!==0&&(e.drawElementsInstanced(i,f,r,d*o,u),n.update(f,i,u))}function h(d,f,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,u);let g=0;for(let _=0;_<u;_++)g+=f[_];n.update(g,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function NI(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(r/3);break;case e.LINES:n.lines+=a*(r/2);break;case e.LINE_STRIP:n.lines+=a*(r-1);break;case e.LINE_LOOP:n.lines+=a*r;break;case e.POINTS:n.points+=a*r;break;default:me("WebGLInfo: Unknown draw mode:",o);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:s,update:i}}function FI(e,t,n){const i=new WeakMap,s=new Qe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let U=function(){v.dispose(),i.delete(a),a.removeEventListener("dispose",U)};var u=U;f!==void 0&&f.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],y=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let A=a.attributes.position.count*S,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const P=new Float32Array(A*w*4*d),v=new Zy(P,A,w,d);v.type=ts,v.needsUpdate=!0;const T=S*4;for(let C=0;C<d;C++){const I=p[C],k=y[C],X=M[C],O=A*w*4*C;for(let z=0;z<I.count;z++){const F=z*T;m===!0&&(s.fromBufferAttribute(I,z),P[O+F+0]=s.x,P[O+F+1]=s.y,P[O+F+2]=s.z,P[O+F+3]=0),g===!0&&(s.fromBufferAttribute(k,z),P[O+F+4]=s.x,P[O+F+5]=s.y,P[O+F+6]=s.z,P[O+F+7]=0),_===!0&&(s.fromBufferAttribute(X,z),P[O+F+8]=s.x,P[O+F+9]=s.y,P[O+F+10]=s.z,P[O+F+11]=X.itemSize===4?s.w:1)}}f={count:d,texture:v,size:new te(A,w)},i.set(a,f),a.addEventListener("dispose",U)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let m=0;for(let _=0;_<c.length;_++)m+=c[_];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(e,"morphTargetBaseInfluence",g),l.getUniforms().setValue(e,"morphTargetInfluences",c)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:r}}function BI(e,t,n,i,s){let r=new WeakMap;function o(c){const h=s.render.frame,d=c.geometry,f=t.get(c,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(n.update(c.instanceMatrix,e.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,e.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return f}function a(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:o,dispose:a}}const kI={[Ny]:"LINEAR_TONE_MAPPING",[Fy]:"REINHARD_TONE_MAPPING",[By]:"CINEON_TONE_MAPPING",[t_]:"ACES_FILMIC_TONE_MAPPING",[zy]:"AGX_TONE_MAPPING",[Hy]:"NEUTRAL_TONE_MAPPING",[ky]:"CUSTOM_TONE_MAPPING"};function zI(e,t,n,i,s){const r=new ss(t,n,{type:e,depthBuffer:i,stencilBuffer:s,depthTexture:i?new pa(t,n):void 0}),o=new ss(t,n,{type:Ws,depthBuffer:!1,stencilBuffer:!1}),a=new ri;a.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new pn([0,2,0,0,2,0],2));const l=new AP({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new fn(a,l),h=new __(-1,1,1,-1,0,1);let d=null,f=null,u=!1,m,g=null,_=[],p=!1;this.setSize=function(y,M){r.setSize(y,M),o.setSize(y,M);for(let S=0;S<_.length;S++){const A=_[S];A.setSize&&A.setSize(y,M)}},this.setEffects=function(y){_=y,p=_.length>0&&_[0].isRenderPass===!0;const M=r.width,S=r.height;for(let A=0;A<_.length;A++){const w=_[A];w.setSize&&w.setSize(M,S)}},this.begin=function(y,M){if(u||y.toneMapping===is&&_.length===0)return!1;if(g=M,M!==null){const S=M.width,A=M.height;(r.width!==S||r.height!==A)&&this.setSize(S,A)}return p===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=is,!0},this.hasRenderPass=function(){return p},this.end=function(y,M){y.toneMapping=m,u=!0;let S=r,A=o;for(let w=0;w<_.length;w++){const P=_[w];if(P.enabled!==!1&&(P.render(y,A,S,M),P.needsSwap!==!1)){const v=S;S=A,A=v}}if(d!==y.outputColorSpace||f!==y.toneMapping){d=y.outputColorSpace,f=y.toneMapping,l.defines={},pe.getTransfer(d)===Ae&&(l.defines.SRGB_TRANSFER="");const w=kI[f];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,y.setRenderTarget(g),y.render(c,h),g=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){r.depthTexture&&r.depthTexture.dispose(),r.dispose(),o.dispose(),a.dispose(),l.dispose()}}const uS=new zn,vp=new pa(1,1),dS=new Zy,fS=new nP,pS=new sS,Px=[],Lx=[],Dx=new Float32Array(16),Ix=new Float32Array(9),Ox=new Float32Array(4);function va(e,t,n){const i=e[0];if(i<=0||i>0)return e;const s=t*n;let r=Px[s];if(r===void 0&&(r=new Float32Array(s),Px[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(r,a)}return r}function _n(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function mn(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function Kh(e,t){let n=Lx[t];n===void 0&&(n=new Int32Array(t),Lx[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function HI(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function VI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;e.uniform2fv(this.addr,t),mn(n,t)}}function GI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(_n(n,t))return;e.uniform3fv(this.addr,t),mn(n,t)}}function WI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;e.uniform4fv(this.addr,t),mn(n,t)}}function XI(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(_n(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),mn(n,t)}else{if(_n(n,i))return;Ox.set(i),e.uniformMatrix2fv(this.addr,!1,Ox),mn(n,i)}}function $I(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(_n(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),mn(n,t)}else{if(_n(n,i))return;Ix.set(i),e.uniformMatrix3fv(this.addr,!1,Ix),mn(n,i)}}function YI(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(_n(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),mn(n,t)}else{if(_n(n,i))return;Dx.set(i),e.uniformMatrix4fv(this.addr,!1,Dx),mn(n,i)}}function qI(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function jI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;e.uniform2iv(this.addr,t),mn(n,t)}}function KI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;e.uniform3iv(this.addr,t),mn(n,t)}}function ZI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;e.uniform4iv(this.addr,t),mn(n,t)}}function JI(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function QI(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(_n(n,t))return;e.uniform2uiv(this.addr,t),mn(n,t)}}function t2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(_n(n,t))return;e.uniform3uiv(this.addr,t),mn(n,t)}}function e2(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(_n(n,t))return;e.uniform4uiv(this.addr,t),mn(n,t)}}function n2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s);let r;this.type===e.SAMPLER_2D_SHADOW?(vp.compareFunction=n.isReversedDepthBuffer()?l_:a_,r=vp):r=uS,n.setTexture2D(t||r,s)}function i2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(t||fS,s)}function s2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(t||pS,s)}function r2(e,t,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(e.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(t||dS,s)}function o2(e){switch(e){case 5126:return HI;case 35664:return VI;case 35665:return GI;case 35666:return WI;case 35674:return XI;case 35675:return $I;case 35676:return YI;case 5124:case 35670:return qI;case 35667:case 35671:return jI;case 35668:case 35672:return KI;case 35669:case 35673:return ZI;case 5125:return JI;case 36294:return QI;case 36295:return t2;case 36296:return e2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return s2;case 36289:case 36303:case 36311:case 36292:return r2}}function a2(e,t){e.uniform1fv(this.addr,t)}function l2(e,t){const n=va(t,this.size,2);e.uniform2fv(this.addr,n)}function c2(e,t){const n=va(t,this.size,3);e.uniform3fv(this.addr,n)}function h2(e,t){const n=va(t,this.size,4);e.uniform4fv(this.addr,n)}function u2(e,t){const n=va(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function d2(e,t){const n=va(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function f2(e,t){const n=va(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function p2(e,t){e.uniform1iv(this.addr,t)}function _2(e,t){e.uniform2iv(this.addr,t)}function m2(e,t){e.uniform3iv(this.addr,t)}function g2(e,t){e.uniform4iv(this.addr,t)}function x2(e,t){e.uniform1uiv(this.addr,t)}function v2(e,t){e.uniform2uiv(this.addr,t)}function y2(e,t){e.uniform3uiv(this.addr,t)}function S2(e,t){e.uniform4uiv(this.addr,t)}function M2(e,t,n){const i=this.cache,s=t.length,r=Kh(n,s);_n(i,r)||(e.uniform1iv(this.addr,r),mn(i,r));let o;this.type===e.SAMPLER_2D_SHADOW?o=vp:o=uS;for(let a=0;a!==s;++a)n.setTexture2D(t[a]||o,r[a])}function b2(e,t,n){const i=this.cache,s=t.length,r=Kh(n,s);_n(i,r)||(e.uniform1iv(this.addr,r),mn(i,r));for(let o=0;o!==s;++o)n.setTexture3D(t[o]||fS,r[o])}function E2(e,t,n){const i=this.cache,s=t.length,r=Kh(n,s);_n(i,r)||(e.uniform1iv(this.addr,r),mn(i,r));for(let o=0;o!==s;++o)n.setTextureCube(t[o]||pS,r[o])}function w2(e,t,n){const i=this.cache,s=t.length,r=Kh(n,s);_n(i,r)||(e.uniform1iv(this.addr,r),mn(i,r));for(let o=0;o!==s;++o)n.setTexture2DArray(t[o]||dS,r[o])}function T2(e){switch(e){case 5126:return a2;case 35664:return l2;case 35665:return c2;case 35666:return h2;case 35674:return u2;case 35675:return d2;case 35676:return f2;case 5124:case 35670:return p2;case 35667:case 35671:return _2;case 35668:case 35672:return m2;case 35669:case 35673:return g2;case 5125:return x2;case 36294:return v2;case 36295:return y2;case 36296:return S2;case 35678:case 36198:case 36298:case 36306:case 35682:return M2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return E2;case 36289:case 36303:case 36311:case 36292:return w2}}class A2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=o2(n.type)}}class R2{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=T2(n.type)}}class C2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,n[a.id],i)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function Ux(e,t){e.seq.push(t),e.map[t.id]=t}function P2(e,t,n){const i=e.name,s=i.length;for(Yd.lastIndex=0;;){const r=Yd.exec(i),o=Yd.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ux(n,c===void 0?new A2(a,e,t):new R2(a,e,t));break}else{let d=n.map[a];d===void 0&&(d=new C2(a),Ux(n,d)),n=d}}}class fh{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=t.getActiveUniform(n,o),l=t.getUniformLocation(n,a.name);P2(a,l,this)}const s=[],r=[];for(const o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,n,i,s){const r=this.map[n];r!==void 0&&r.setValue(t,i,s)}setOptional(t,n,i){const s=n[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,n,i,s){for(let r=0,o=n.length;r!==o;++r){const a=n[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,n){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in n&&i.push(o)}return i}}function Nx(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const L2=37297;let D2=0;function I2(e,t){const n=e.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,n.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Fx=new Qt;function O2(e){pe._getMatrix(Fx,pe.workingColorSpace,e);const t=`mat3( ${Fx.elements.map(n=>n.toFixed(4))} )`;switch(pe.getTransfer(e)){case Th:return[t,"LinearTransferOETF"];case Ae:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",e),[t,"LinearTransferOETF"]}}function Bx(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=(e.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+I2(e.getShaderSource(t),a)}else return r}function U2(e,t){const n=O2(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const N2={[Ny]:"Linear",[Fy]:"Reinhard",[By]:"Cineon",[t_]:"ACESFilmic",[zy]:"AgX",[Hy]:"Neutral",[ky]:"Custom"};function F2(e,t){const n=N2[t];return n===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+e+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Kc=new V;function B2(){pe.getLuminanceCoefficients(Kc);const e=Kc.x.toFixed(4),t=Kc.y.toFixed(4),n=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k2(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function z2(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function H2(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=e.getActiveAttrib(t,s),o=r.name;let a=1;r.type===e.FLOAT_MAT2&&(a=2),r.type===e.FLOAT_MAT3&&(a=3),r.type===e.FLOAT_MAT4&&(a=4),n[o]={type:r.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function al(e){return e!==""}function kx(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zx(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const V2=/^[ \t]*#include +<([\w\d./]+)>/gm;function yp(e){return e.replace(V2,W2)}const G2=new Map;function W2(e,t){let n=ae[t];if(n===void 0){const i=G2.get(t);if(i!==void 0)n=ae[i],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return yp(n)}const X2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hx(e){return e.replace(X2,$2)}function $2(e,t,n,i){let s="";for(let r=parseInt(t);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vx(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}const Y2={[ah]:"SHADOWMAP_TYPE_PCF",[rl]:"SHADOWMAP_TYPE_VSM"};function q2(e){return Y2[e.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const j2={[ro]:"ENVMAP_TYPE_CUBE",[fa]:"ENVMAP_TYPE_CUBE",[$h]:"ENVMAP_TYPE_CUBE_UV"};function K2(e){return e.envMap===!1?"ENVMAP_TYPE_CUBE":j2[e.envMapMode]||"ENVMAP_TYPE_CUBE"}const Z2={[fa]:"ENVMAP_MODE_REFRACTION"};function J2(e){return e.envMap===!1?"ENVMAP_MODE_REFLECTION":Z2[e.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Q2={[Uy]:"ENVMAP_BLENDING_MULTIPLY",[OC]:"ENVMAP_BLENDING_MIX",[UC]:"ENVMAP_BLENDING_ADD"};function t3(e){return e.envMap===!1?"ENVMAP_BLENDING_NONE":Q2[e.combine]||"ENVMAP_BLENDING_NONE"}function e3(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function n3(e,t,n,i){const s=e.getContext(),r=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=q2(n),c=K2(n),h=J2(n),d=t3(n),f=e3(n),u=k2(n),m=z2(r),g=s.createProgram();let _,p,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(al).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(al).join(`
`),p.length>0&&(p+=`
`)):(_=[Vx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),p=[Vx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==is?"#define TONE_MAPPING":"",n.toneMapping!==is?ae.tonemapping_pars_fragment:"",n.toneMapping!==is?F2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,U2("linearToOutputTexel",n.outputColorSpace),B2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(al).join(`
`)),o=yp(o),o=kx(o,n),o=zx(o,n),a=yp(a),a=kx(a,n),a=zx(a,n),o=Hx(o),a=Hx(a),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",n.glslVersion===q0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===q0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=y+_+o,S=y+p+a,A=Nx(s,s.VERTEX_SHADER,M),w=Nx(s,s.FRAGMENT_SHADER,S);s.attachShader(g,A),s.attachShader(g,w),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function P(C){if(e.debug.checkShaderErrors){const I=s.getProgramInfoLog(g)||"",k=s.getShaderInfoLog(A)||"",X=s.getShaderInfoLog(w)||"",O=I.trim(),z=k.trim(),F=X.trim();let K=!0,Z=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(K=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(s,g,A,w);else{const ft=Bx(s,A,"vertex"),Tt=Bx(s,w,"fragment");me("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+ft+`
`+Tt)}else O!==""?qt("WebGLProgram: Program Info Log:",O):(z===""||F==="")&&(Z=!1);Z&&(C.diagnostics={runnable:K,programLog:O,vertexShader:{log:z,prefix:_},fragmentShader:{log:F,prefix:p}})}s.deleteShader(A),s.deleteShader(w),v=new fh(s,g),T=H2(s,g)}let v;this.getUniforms=function(){return v===void 0&&P(this),v};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let U=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(g,L2)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=D2++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let i3=0;class s3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new r3(t),n.set(t,i)),i}}class r3{constructor(t){this.id=i3++,this.code=t,this.usedTimes=0}}function o3(e){return e===oo||e===bh||e===Eh}function a3(e,t,n,i,s,r){const o=new Jy,a=new s3,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer;let f=i.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,T,U,C,I,k){const X=C.fog,O=I.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,K=t.get(v.envMap||z,F),Z=K&&K.mapping===$h?K.image.height:null,ft=u[v.type];v.precision!==null&&(f=i.getMaxPrecision(v.precision),f!==v.precision&&qt("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const Tt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,wt=Tt!==void 0?Tt.length:0;let re=0;O.morphAttributes.position!==void 0&&(re=1),O.morphAttributes.normal!==void 0&&(re=2),O.morphAttributes.color!==void 0&&(re=3);let $t,jt,tt,gt;if(ft){const ee=Ji[ft];$t=ee.vertexShader,jt=ee.fragmentShader}else $t=v.vertexShader,jt=v.fragmentShader,a.update(v),tt=a.getVertexShaderID(v),gt=a.getFragmentShaderID(v);const ht=e.getRenderTarget(),Ht=e.state.buffers.depth.getReversed(),Wt=I.isInstancedMesh===!0,Xt=I.isBatchedMesh===!0,L=!!v.map,D=!!v.matcap,W=!!K,nt=!!v.aoMap,j=!!v.lightMap,it=!!v.bumpMap,lt=!!v.normalMap,_t=!!v.displacementMap,R=!!v.emissiveMap,rt=!!v.metalnessMap,xt=!!v.roughnessMap,ut=v.anisotropy>0,et=v.clearcoat>0,Pt=v.dispersion>0,E=v.iridescence>0,x=v.sheen>0,B=v.transmission>0,J=ut&&!!v.anisotropyMap,ot=et&&!!v.clearcoatMap,dt=et&&!!v.clearcoatNormalMap,pt=et&&!!v.clearcoatRoughnessMap,Q=E&&!!v.iridescenceMap,at=E&&!!v.iridescenceThicknessMap,vt=x&&!!v.sheenColorMap,Et=x&&!!v.sheenRoughnessMap,yt=!!v.specularMap,mt=!!v.specularColorMap,Zt=!!v.specularIntensityMap,oe=B&&!!v.transmissionMap,ge=B&&!!v.thicknessMap,N=!!v.gradientMap,St=!!v.alphaMap,st=v.alphaTest>0,Lt=!!v.alphaHash,bt=!!v.extensions;let ct=is;v.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(ct=e.toneMapping);const kt={shaderID:ft,shaderType:v.type,shaderName:v.name,vertexShader:$t,fragmentShader:jt,defines:v.defines,customVertexShaderID:tt,customFragmentShaderID:gt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:Xt,batchingColor:Xt&&I._colorsTexture!==null,instancing:Wt,instancingColor:Wt&&I.instanceColor!==null,instancingMorph:Wt&&I.morphTexture!==null,outputColorSpace:ht===null?e.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:pe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:L,matcap:D,envMap:W,envMapMode:W&&K.mapping,envMapCubeUVHeight:Z,aoMap:nt,lightMap:j,bumpMap:it,normalMap:lt,displacementMap:_t,emissiveMap:R,normalMapObjectSpace:lt&&v.normalMapType===BC,normalMapTangentSpace:lt&&v.normalMapType===mp,packedNormalMap:lt&&v.normalMapType===mp&&o3(v.normalMap.format),metalnessMap:rt,roughnessMap:xt,anisotropy:ut,anisotropyMap:J,clearcoat:et,clearcoatMap:ot,clearcoatNormalMap:dt,clearcoatRoughnessMap:pt,dispersion:Pt,iridescence:E,iridescenceMap:Q,iridescenceThicknessMap:at,sheen:x,sheenColorMap:vt,sheenRoughnessMap:Et,specularMap:yt,specularColorMap:mt,specularIntensityMap:Zt,transmission:B,transmissionMap:oe,thicknessMap:ge,gradientMap:N,opaque:v.transparent===!1&&v.blending===ra&&v.alphaToCoverage===!1,alphaMap:St,alphaTest:st,alphaHash:Lt,combine:v.combine,mapUv:L&&m(v.map.channel),aoMapUv:nt&&m(v.aoMap.channel),lightMapUv:j&&m(v.lightMap.channel),bumpMapUv:it&&m(v.bumpMap.channel),normalMapUv:lt&&m(v.normalMap.channel),displacementMapUv:_t&&m(v.displacementMap.channel),emissiveMapUv:R&&m(v.emissiveMap.channel),metalnessMapUv:rt&&m(v.metalnessMap.channel),roughnessMapUv:xt&&m(v.roughnessMap.channel),anisotropyMapUv:J&&m(v.anisotropyMap.channel),clearcoatMapUv:ot&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:dt&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:at&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:vt&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Et&&m(v.sheenRoughnessMap.channel),specularMapUv:yt&&m(v.specularMap.channel),specularColorMapUv:mt&&m(v.specularColorMap.channel),specularIntensityMapUv:Zt&&m(v.specularIntensityMap.channel),transmissionMapUv:oe&&m(v.transmissionMap.channel),thicknessMapUv:ge&&m(v.thicknessMap.channel),alphaMapUv:St&&m(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(lt||ut),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(L||St),fog:!!X,useFog:v.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&lt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ht,skinning:I.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:re,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:e.shadowMap.enabled&&U.length>0,shadowMapType:e.shadowMap.type,toneMapping:ct,decodeVideoTexture:L&&v.map.isVideoTexture===!0&&pe.getTransfer(v.map.colorSpace)===Ae,decodeVideoTextureEmissive:R&&v.emissiveMap.isVideoTexture===!0&&pe.getTransfer(v.emissiveMap.colorSpace)===Ae,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Os,flipSided:v.side===Kn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:bt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&v.extensions.multiDraw===!0||Xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return kt.vertexUv1s=l.has(1),kt.vertexUv2s=l.has(2),kt.vertexUv3s=l.has(3),l.clear(),kt}function _(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const U in v.defines)T.push(U),T.push(v.defines[U]);return v.isRawShaderMaterial===!1&&(p(T,v),y(T,v),T.push(e.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function p(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function y(v,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),T.packedNormalMap&&o.enable(22),T.vertexNormals&&o.enable(23),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),T.numLightProbeGrids>0&&o.enable(22),v.push(o.mask)}function M(v){const T=u[v.type];let U;if(T){const C=Ji[T];U=EP.clone(C.uniforms)}else U=v.uniforms;return U}function S(v,T){let U=h.get(T);return U!==void 0?++U.usedTimes:(U=new n3(e,T,v,s),c.push(U),h.set(T,U)),U}function A(v){if(--v.usedTimes===0){const T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function w(v){a.remove(v)}function P(){a.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:M,acquireProgram:S,releaseProgram:A,releaseShaderCache:w,programs:c,dispose:P}}function l3(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function s(o,a,l){e.get(o)[a]=l}function r(){e=new WeakMap}return{has:t,get:n,remove:i,update:s,dispose:r}}function c3(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.materialVariant!==t.materialVariant?e.materialVariant-t.materialVariant:e.z!==t.z?e.z-t.z:e.id-t.id}function Gx(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Wx(){const e=[];let t=0;const n=[],i=[],s=[];function r(){t=0,n.length=0,i.length=0,s.length=0}function o(f){let u=0;return f.isInstancedMesh&&(u+=2),f.isSkinnedMesh&&(u+=1),u}function a(f,u,m,g,_,p){let y=e[t];return y===void 0?(y={id:f.id,object:f,geometry:u,material:m,materialVariant:o(f),groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},e[t]=y):(y.id=f.id,y.object=f,y.geometry=u,y.material=m,y.materialVariant=o(f),y.groupOrder=g,y.renderOrder=f.renderOrder,y.z=_,y.group=p),t++,y}function l(f,u,m,g,_,p){const y=a(f,u,m,g,_,p);m.transmission>0?i.push(y):m.transparent===!0?s.push(y):n.push(y)}function c(f,u,m,g,_,p){const y=a(f,u,m,g,_,p);m.transmission>0?i.unshift(y):m.transparent===!0?s.unshift(y):n.unshift(y)}function h(f,u){n.length>1&&n.sort(f||c3),i.length>1&&i.sort(u||Gx),s.length>1&&s.sort(u||Gx)}function d(){for(let f=t,u=e.length;f<u;f++){const m=e[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function h3(){let e=new WeakMap;function t(i,s){const r=e.get(i);let o;return r===void 0?(o=new Wx,e.set(i,[o])):s>=r.length?(o=new Wx,r.push(o)):o=r[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function u3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new V,color:new ue};break;case"SpotLight":n={position:new V,direction:new V,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new ue,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":n={color:new ue,position:new V,halfWidth:new V,halfHeight:new V};break}return e[t.id]=n,n}}}function d3(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let f3=0;function p3(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function _3(e){const t=new u3,n=d3(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const s=new V,r=new en,o=new en;function a(c){let h=0,d=0,f=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let u=0,m=0,g=0,_=0,p=0,y=0,M=0,S=0,A=0,w=0,P=0;c.sort(p3);for(let T=0,U=c.length;T<U;T++){const C=c[T],I=C.color,k=C.intensity,X=C.distance;let O=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===oo?O=C.shadow.map.texture:O=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=I.r*k,d+=I.g*k,f+=I.b*k;else if(C.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(C.sh.coefficients[z],k);P++}else if(C.isDirectionalLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const F=C.shadow,K=n.get(C);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,i.directionalShadow[u]=K,i.directionalShadowMap[u]=O,i.directionalShadowMatrix[u]=C.shadow.matrix,y++}i.directional[u]=z,u++}else if(C.isSpotLight){const z=t.get(C);z.position.setFromMatrixPosition(C.matrixWorld),z.color.copy(I).multiplyScalar(k),z.distance=X,z.coneCos=Math.cos(C.angle),z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),z.decay=C.decay,i.spot[g]=z;const F=C.shadow;if(C.map&&(i.spotLightMap[A]=C.map,A++,F.updateMatrices(C),C.castShadow&&w++),i.spotLightMatrix[g]=F.matrix,C.castShadow){const K=n.get(C);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,i.spotShadow[g]=K,i.spotShadowMap[g]=O,S++}g++}else if(C.isRectAreaLight){const z=t.get(C);z.color.copy(I).multiplyScalar(k),z.halfWidth.set(C.width*.5,0,0),z.halfHeight.set(0,C.height*.5,0),i.rectArea[_]=z,_++}else if(C.isPointLight){const z=t.get(C);if(z.color.copy(C.color).multiplyScalar(C.intensity),z.distance=C.distance,z.decay=C.decay,C.castShadow){const F=C.shadow,K=n.get(C);K.shadowIntensity=F.intensity,K.shadowBias=F.bias,K.shadowNormalBias=F.normalBias,K.shadowRadius=F.radius,K.shadowMapSize=F.mapSize,K.shadowCameraNear=F.camera.near,K.shadowCameraFar=F.camera.far,i.pointShadow[m]=K,i.pointShadowMap[m]=O,i.pointShadowMatrix[m]=C.shadow.matrix,M++}i.point[m]=z,m++}else if(C.isHemisphereLight){const z=t.get(C);z.skyColor.copy(C.color).multiplyScalar(k),z.groundColor.copy(C.groundColor).multiplyScalar(k),i.hemi[p]=z,p++}}_>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=At.LTC_FLOAT_1,i.rectAreaLTC2=At.LTC_FLOAT_2):(i.rectAreaLTC1=At.LTC_HALF_1,i.rectAreaLTC2=At.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const v=i.hash;(v.directionalLength!==u||v.pointLength!==m||v.spotLength!==g||v.rectAreaLength!==_||v.hemiLength!==p||v.numDirectionalShadows!==y||v.numPointShadows!==M||v.numSpotShadows!==S||v.numSpotMaps!==A||v.numLightProbes!==P)&&(i.directional.length=u,i.spot.length=g,i.rectArea.length=_,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=S+A-w,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=P,v.directionalLength=u,v.pointLength=m,v.spotLength=g,v.rectAreaLength=_,v.hemiLength=p,v.numDirectionalShadows=y,v.numPointShadows=M,v.numSpotShadows=S,v.numSpotMaps=A,v.numLightProbes=P,i.version=f3++)}function l(c,h){let d=0,f=0,u=0,m=0,g=0;const _=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){const M=c[p];if(M.isDirectionalLight){const S=i.directional[d];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),d++}else if(M.isSpotLight){const S=i.spot[u];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(_),u++}else if(M.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),o.identity(),r.copy(M.matrixWorld),r.premultiply(_),o.extractRotation(r),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(M.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(_),f++}else if(M.isHemisphereLight){const S=i.hemi[g];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:i}}function Xx(e){const t=new _3(e),n=[],i=[],s=[];function r(f){d.camera=f,n.length=0,i.length=0,s.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function l(f){s.push(f)}function c(){t.setup(n)}function h(f){t.setupView(n,f)}const d={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function m3(e){let t=new WeakMap;function n(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Xx(e),t.set(s,[a])):r>=o.length?(a=new Xx(e),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:n,dispose:i}}const g3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x3=`uniform sampler2D shadow_pass;
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
}`,v3=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],y3=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],$x=new en,tl=new V,qd=new V;function S3(e,t,n){let i=new d_;const s=new te,r=new te,o=new Qe,a=new CP,l=new PP,c={},h=n.maxTextureSize,d={[Mr]:Kn,[Kn]:Mr,[Os]:Os},f=new cs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:g3,fragmentShader:x3}),u=f.clone();u.defines.HORIZONTAL_PASS=1;const m=new ri;m.setAttribute("position",new rs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new fn(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ah;let p=this.type;this.render=function(w,P,v){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;this.type===Oy&&(qt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ah);const T=e.getRenderTarget(),U=e.getActiveCubeFace(),C=e.getActiveMipmapLevel(),I=e.state;I.setBlending(Bs),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const k=p!==this.type;k&&P.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach(O=>O.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,O=w.length;X<O;X++){const z=w[X],F=z.shadow;if(F===void 0){qt("WebGLShadowMap:",z,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const K=F.getFrameExtents();s.multiply(K),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/K.x),s.x=r.x*K.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/K.y),s.y=r.y*K.y,F.mapSize.y=r.y));const Z=e.state.buffers.depth.getReversed();if(F.camera._reversedDepth=Z,F.map===null||k===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===rl){if(z.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new ss(s.x,s.y,{format:oo,type:Ws,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),F.map.texture.name=z.name+".shadowMap",F.map.depthTexture=new pa(s.x,s.y,ts),F.map.depthTexture.name=z.name+".shadowMapDepth",F.map.depthTexture.format=Xs,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=bn,F.map.depthTexture.magFilter=bn}else z.isPointLight?(F.map=new hS(s.x),F.map.depthTexture=new MP(s.x,ls)):(F.map=new ss(s.x,s.y),F.map.depthTexture=new pa(s.x,s.y,ls)),F.map.depthTexture.name=z.name+".shadowMap",F.map.depthTexture.format=Xs,this.type===ah?(F.map.depthTexture.compareFunction=Z?l_:a_,F.map.depthTexture.minFilter=Ln,F.map.depthTexture.magFilter=Ln):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=bn,F.map.depthTexture.magFilter=bn);F.camera.updateProjectionMatrix()}const ft=F.map.isWebGLCubeRenderTarget?6:1;for(let Tt=0;Tt<ft;Tt++){if(F.map.isWebGLCubeRenderTarget)e.setRenderTarget(F.map,Tt),e.clear();else{Tt===0&&(e.setRenderTarget(F.map),e.clear());const wt=F.getViewport(Tt);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),I.viewport(o)}if(z.isPointLight){const wt=F.camera,re=F.matrix,$t=z.distance||wt.far;$t!==wt.far&&(wt.far=$t,wt.updateProjectionMatrix()),tl.setFromMatrixPosition(z.matrixWorld),wt.position.copy(tl),qd.copy(wt.position),qd.add(v3[Tt]),wt.up.copy(y3[Tt]),wt.lookAt(qd),wt.updateMatrixWorld(),re.makeTranslation(-tl.x,-tl.y,-tl.z),$x.multiplyMatrices(wt.projectionMatrix,wt.matrixWorldInverse),F._frustum.setFromProjectionMatrix($x,wt.coordinateSystem,wt.reversedDepth)}else F.updateMatrices(z);i=F.getFrustum(),S(P,v,F.camera,z,this.type)}F.isPointLightShadow!==!0&&this.type===rl&&y(F,v),F.needsUpdate=!1}p=this.type,_.needsUpdate=!1,e.setRenderTarget(T,U,C)};function y(w,P){const v=t.update(g);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new ss(s.x,s.y,{format:oo,type:Ws})),f.uniforms.shadow_pass.value=w.map.depthTexture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,e.setRenderTarget(w.mapPass),e.clear(),e.renderBufferDirect(P,null,v,f,g,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,e.setRenderTarget(w.map),e.clear(),e.renderBufferDirect(P,null,v,u,g,null)}function M(w,P,v,T){let U=null;const C=v.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)U=C;else if(U=v.isPointLight===!0?l:a,e.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const I=U.uuid,k=P.uuid;let X=c[I];X===void 0&&(X={},c[I]=X);let O=X[k];O===void 0&&(O=U.clone(),X[k]=O,P.addEventListener("dispose",A)),U=O}if(U.visible=P.visible,U.wireframe=P.wireframe,T===rl?U.side=P.shadowSide!==null?P.shadowSide:P.side:U.side=P.shadowSide!==null?P.shadowSide:d[P.side],U.alphaMap=P.alphaMap,U.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,U.map=P.map,U.clipShadows=P.clipShadows,U.clippingPlanes=P.clippingPlanes,U.clipIntersection=P.clipIntersection,U.displacementMap=P.displacementMap,U.displacementScale=P.displacementScale,U.displacementBias=P.displacementBias,U.wireframeLinewidth=P.wireframeLinewidth,U.linewidth=P.linewidth,v.isPointLight===!0&&U.isMeshDistanceMaterial===!0){const I=e.properties.get(U);I.light=v}return U}function S(w,P,v,T,U){if(w.visible===!1)return;if(w.layers.test(P.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===rl)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,w.matrixWorld);const k=t.update(w),X=w.material;if(Array.isArray(X)){const O=k.groups;for(let z=0,F=O.length;z<F;z++){const K=O[z],Z=X[K.materialIndex];if(Z&&Z.visible){const ft=M(w,Z,T,U);w.onBeforeShadow(e,w,P,v,k,ft,K),e.renderBufferDirect(v,null,k,ft,w,K),w.onAfterShadow(e,w,P,v,k,ft,K)}}}else if(X.visible){const O=M(w,X,T,U);w.onBeforeShadow(e,w,P,v,k,O,null),e.renderBufferDirect(v,null,k,O,w,null),w.onAfterShadow(e,w,P,v,k,O,null)}}const I=w.children;for(let k=0,X=I.length;k<X;k++)S(I[k],P,v,T,U)}function A(w){w.target.removeEventListener("dispose",A);for(const v in c){const T=c[v],U=w.target.uuid;U in T&&(T[U].dispose(),delete T[U])}}}function M3(e,t){function n(){let N=!1;const St=new Qe;let st=null;const Lt=new Qe(0,0,0,0);return{setMask:function(bt){st!==bt&&!N&&(e.colorMask(bt,bt,bt,bt),st=bt)},setLocked:function(bt){N=bt},setClear:function(bt,ct,kt,ee,sn){sn===!0&&(bt*=ee,ct*=ee,kt*=ee),St.set(bt,ct,kt,ee),Lt.equals(St)===!1&&(e.clearColor(bt,ct,kt,ee),Lt.copy(St))},reset:function(){N=!1,st=null,Lt.set(-1,0,0,0)}}}function i(){let N=!1,St=!1,st=null,Lt=null,bt=null;return{setReversed:function(ct){if(St!==ct){const kt=t.get("EXT_clip_control");ct?kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.ZERO_TO_ONE_EXT):kt.clipControlEXT(kt.LOWER_LEFT_EXT,kt.NEGATIVE_ONE_TO_ONE_EXT),St=ct;const ee=bt;bt=null,this.setClear(ee)}},getReversed:function(){return St},setTest:function(ct){ct?ht(e.DEPTH_TEST):Ht(e.DEPTH_TEST)},setMask:function(ct){st!==ct&&!N&&(e.depthMask(ct),st=ct)},setFunc:function(ct){if(St&&(ct=qC[ct]),Lt!==ct){switch(ct){case Lf:e.depthFunc(e.NEVER);break;case Df:e.depthFunc(e.ALWAYS);break;case If:e.depthFunc(e.LESS);break;case da:e.depthFunc(e.LEQUAL);break;case Of:e.depthFunc(e.EQUAL);break;case Uf:e.depthFunc(e.GEQUAL);break;case Nf:e.depthFunc(e.GREATER);break;case Ff:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}Lt=ct}},setLocked:function(ct){N=ct},setClear:function(ct){bt!==ct&&(bt=ct,St&&(ct=1-ct),e.clearDepth(ct))},reset:function(){N=!1,st=null,Lt=null,bt=null,St=!1}}}function s(){let N=!1,St=null,st=null,Lt=null,bt=null,ct=null,kt=null,ee=null,sn=null;return{setTest:function(Ce){N||(Ce?ht(e.STENCIL_TEST):Ht(e.STENCIL_TEST))},setMask:function(Ce){St!==Ce&&!N&&(e.stencilMask(Ce),St=Ce)},setFunc:function(Ce,ds,Bi){(st!==Ce||Lt!==ds||bt!==Bi)&&(e.stencilFunc(Ce,ds,Bi),st=Ce,Lt=ds,bt=Bi)},setOp:function(Ce,ds,Bi){(ct!==Ce||kt!==ds||ee!==Bi)&&(e.stencilOp(Ce,ds,Bi),ct=Ce,kt=ds,ee=Bi)},setLocked:function(Ce){N=Ce},setClear:function(Ce){sn!==Ce&&(e.clearStencil(Ce),sn=Ce)},reset:function(){N=!1,St=null,st=null,Lt=null,bt=null,ct=null,kt=null,ee=null,sn=null}}}const r=new n,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f={},u=new WeakMap,m=[],g=null,_=!1,p=null,y=null,M=null,S=null,A=null,w=null,P=null,v=new ue(0,0,0),T=0,U=!1,C=null,I=null,k=null,X=null,O=null;const z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,K=0;const Z=e.getParameter(e.VERSION);Z.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=K>=1):Z.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=K>=2);let ft=null,Tt={};const wt=e.getParameter(e.SCISSOR_BOX),re=e.getParameter(e.VIEWPORT),$t=new Qe().fromArray(wt),jt=new Qe().fromArray(re);function tt(N,St,st,Lt){const bt=new Uint8Array(4),ct=e.createTexture();e.bindTexture(N,ct),e.texParameteri(N,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(N,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let kt=0;kt<st;kt++)N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?e.texImage3D(St,0,e.RGBA,1,1,Lt,0,e.RGBA,e.UNSIGNED_BYTE,bt):e.texImage2D(St+kt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,bt);return ct}const gt={};gt[e.TEXTURE_2D]=tt(e.TEXTURE_2D,e.TEXTURE_2D,1),gt[e.TEXTURE_CUBE_MAP]=tt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[e.TEXTURE_2D_ARRAY]=tt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),gt[e.TEXTURE_3D]=tt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(e.DEPTH_TEST),o.setFunc(da),it(!1),lt(V0),ht(e.CULL_FACE),nt(Bs);function ht(N){h[N]!==!0&&(e.enable(N),h[N]=!0)}function Ht(N){h[N]!==!1&&(e.disable(N),h[N]=!1)}function Wt(N,St){return f[N]!==St?(e.bindFramebuffer(N,St),f[N]=St,N===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=St),N===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=St),!0):!1}function Xt(N,St){let st=m,Lt=!1;if(N){st=u.get(St),st===void 0&&(st=[],u.set(St,st));const bt=N.textures;if(st.length!==bt.length||st[0]!==e.COLOR_ATTACHMENT0){for(let ct=0,kt=bt.length;ct<kt;ct++)st[ct]=e.COLOR_ATTACHMENT0+ct;st.length=bt.length,Lt=!0}}else st[0]!==e.BACK&&(st[0]=e.BACK,Lt=!0);Lt&&e.drawBuffers(st)}function L(N){return g!==N?(e.useProgram(N),g=N,!0):!1}const D={[jr]:e.FUNC_ADD,[gC]:e.FUNC_SUBTRACT,[xC]:e.FUNC_REVERSE_SUBTRACT};D[vC]=e.MIN,D[yC]=e.MAX;const W={[SC]:e.ZERO,[MC]:e.ONE,[bC]:e.SRC_COLOR,[Cf]:e.SRC_ALPHA,[CC]:e.SRC_ALPHA_SATURATE,[AC]:e.DST_COLOR,[wC]:e.DST_ALPHA,[EC]:e.ONE_MINUS_SRC_COLOR,[Pf]:e.ONE_MINUS_SRC_ALPHA,[RC]:e.ONE_MINUS_DST_COLOR,[TC]:e.ONE_MINUS_DST_ALPHA,[PC]:e.CONSTANT_COLOR,[LC]:e.ONE_MINUS_CONSTANT_COLOR,[DC]:e.CONSTANT_ALPHA,[IC]:e.ONE_MINUS_CONSTANT_ALPHA};function nt(N,St,st,Lt,bt,ct,kt,ee,sn,Ce){if(N===Bs){_===!0&&(Ht(e.BLEND),_=!1);return}if(_===!1&&(ht(e.BLEND),_=!0),N!==mC){if(N!==p||Ce!==U){if((y!==jr||A!==jr)&&(e.blendEquation(e.FUNC_ADD),y=jr,A=jr),Ce)switch(N){case ra:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case G0:e.blendFunc(e.ONE,e.ONE);break;case W0:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case X0:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:me("WebGLState: Invalid blending: ",N);break}else switch(N){case ra:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case G0:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case W0:me("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case X0:me("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:me("WebGLState: Invalid blending: ",N);break}M=null,S=null,w=null,P=null,v.set(0,0,0),T=0,p=N,U=Ce}return}bt=bt||St,ct=ct||st,kt=kt||Lt,(St!==y||bt!==A)&&(e.blendEquationSeparate(D[St],D[bt]),y=St,A=bt),(st!==M||Lt!==S||ct!==w||kt!==P)&&(e.blendFuncSeparate(W[st],W[Lt],W[ct],W[kt]),M=st,S=Lt,w=ct,P=kt),(ee.equals(v)===!1||sn!==T)&&(e.blendColor(ee.r,ee.g,ee.b,sn),v.copy(ee),T=sn),p=N,U=!1}function j(N,St){N.side===Os?Ht(e.CULL_FACE):ht(e.CULL_FACE);let st=N.side===Kn;St&&(st=!st),it(st),N.blending===ra&&N.transparent===!1?nt(Bs):nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const Lt=N.stencilWrite;a.setTest(Lt),Lt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),R(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(e.SAMPLE_ALPHA_TO_COVERAGE):Ht(e.SAMPLE_ALPHA_TO_COVERAGE)}function it(N){C!==N&&(N?e.frontFace(e.CW):e.frontFace(e.CCW),C=N)}function lt(N){N!==pC?(ht(e.CULL_FACE),N!==I&&(N===V0?e.cullFace(e.BACK):N===_C?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):Ht(e.CULL_FACE),I=N}function _t(N){N!==k&&(F&&e.lineWidth(N),k=N)}function R(N,St,st){N?(ht(e.POLYGON_OFFSET_FILL),(X!==St||O!==st)&&(X=St,O=st,o.getReversed()&&(St=-St),e.polygonOffset(St,st))):Ht(e.POLYGON_OFFSET_FILL)}function rt(N){N?ht(e.SCISSOR_TEST):Ht(e.SCISSOR_TEST)}function xt(N){N===void 0&&(N=e.TEXTURE0+z-1),ft!==N&&(e.activeTexture(N),ft=N)}function ut(N,St,st){st===void 0&&(ft===null?st=e.TEXTURE0+z-1:st=ft);let Lt=Tt[st];Lt===void 0&&(Lt={type:void 0,texture:void 0},Tt[st]=Lt),(Lt.type!==N||Lt.texture!==St)&&(ft!==st&&(e.activeTexture(st),ft=st),e.bindTexture(N,St||gt[N]),Lt.type=N,Lt.texture=St)}function et(){const N=Tt[ft];N!==void 0&&N.type!==void 0&&(e.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Pt(){try{e.compressedTexImage2D(...arguments)}catch(N){me("WebGLState:",N)}}function E(){try{e.compressedTexImage3D(...arguments)}catch(N){me("WebGLState:",N)}}function x(){try{e.texSubImage2D(...arguments)}catch(N){me("WebGLState:",N)}}function B(){try{e.texSubImage3D(...arguments)}catch(N){me("WebGLState:",N)}}function J(){try{e.compressedTexSubImage2D(...arguments)}catch(N){me("WebGLState:",N)}}function ot(){try{e.compressedTexSubImage3D(...arguments)}catch(N){me("WebGLState:",N)}}function dt(){try{e.texStorage2D(...arguments)}catch(N){me("WebGLState:",N)}}function pt(){try{e.texStorage3D(...arguments)}catch(N){me("WebGLState:",N)}}function Q(){try{e.texImage2D(...arguments)}catch(N){me("WebGLState:",N)}}function at(){try{e.texImage3D(...arguments)}catch(N){me("WebGLState:",N)}}function vt(N){return d[N]!==void 0?d[N]:e.getParameter(N)}function Et(N,St){d[N]!==St&&(e.pixelStorei(N,St),d[N]=St)}function yt(N){$t.equals(N)===!1&&(e.scissor(N.x,N.y,N.z,N.w),$t.copy(N))}function mt(N){jt.equals(N)===!1&&(e.viewport(N.x,N.y,N.z,N.w),jt.copy(N))}function Zt(N,St){let st=c.get(St);st===void 0&&(st=new WeakMap,c.set(St,st));let Lt=st.get(N);Lt===void 0&&(Lt=e.getUniformBlockIndex(St,N.name),st.set(N,Lt))}function oe(N,St){const Lt=c.get(St).get(N);l.get(St)!==Lt&&(e.uniformBlockBinding(St,Lt,N.__bindingPointIndex),l.set(St,Lt))}function ge(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),h={},d={},ft=null,Tt={},f={},u=new WeakMap,m=[],g=null,_=!1,p=null,y=null,M=null,S=null,A=null,w=null,P=null,v=new ue(0,0,0),T=0,U=!1,C=null,I=null,k=null,X=null,O=null,$t.set(0,0,e.canvas.width,e.canvas.height),jt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:Ht,bindFramebuffer:Wt,drawBuffers:Xt,useProgram:L,setBlending:nt,setMaterial:j,setFlipSided:it,setCullFace:lt,setLineWidth:_t,setPolygonOffset:R,setScissorTest:rt,activeTexture:xt,bindTexture:ut,unbindTexture:et,compressedTexImage2D:Pt,compressedTexImage3D:E,texImage2D:Q,texImage3D:at,pixelStorei:Et,getParameter:vt,updateUBOMapping:Zt,uniformBlockBinding:oe,texStorage2D:dt,texStorage3D:pt,texSubImage2D:x,texSubImage3D:B,compressedTexSubImage2D:J,compressedTexSubImage3D:ot,scissor:yt,viewport:mt,reset:ge}}function b3(e,t,n,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,d=new Set;let f;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return m?new OffscreenCanvas(E,x):Ah("canvas")}function _(E,x,B){let J=1;const ot=Pt(E);if((ot.width>B||ot.height>B)&&(J=B/Math.max(ot.width,ot.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const dt=Math.floor(J*ot.width),pt=Math.floor(J*ot.height);f===void 0&&(f=g(dt,pt));const Q=x?g(dt,pt):f;return Q.width=dt,Q.height=pt,Q.getContext("2d").drawImage(E,0,0,dt,pt),qt("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+dt+"x"+pt+")."),Q}else return"data"in E&&qt("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),E;return E}function p(E){return E.generateMipmaps}function y(E){e.generateMipmap(E)}function M(E){return E.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?e.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function S(E,x,B,J,ot,dt=!1){if(E!==null){if(e[E]!==void 0)return e[E];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let pt;J&&(pt=t.get("EXT_texture_norm16"),pt||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=x;if(x===e.RED&&(B===e.FLOAT&&(Q=e.R32F),B===e.HALF_FLOAT&&(Q=e.R16F),B===e.UNSIGNED_BYTE&&(Q=e.R8),B===e.UNSIGNED_SHORT&&pt&&(Q=pt.R16_EXT),B===e.SHORT&&pt&&(Q=pt.R16_SNORM_EXT)),x===e.RED_INTEGER&&(B===e.UNSIGNED_BYTE&&(Q=e.R8UI),B===e.UNSIGNED_SHORT&&(Q=e.R16UI),B===e.UNSIGNED_INT&&(Q=e.R32UI),B===e.BYTE&&(Q=e.R8I),B===e.SHORT&&(Q=e.R16I),B===e.INT&&(Q=e.R32I)),x===e.RG&&(B===e.FLOAT&&(Q=e.RG32F),B===e.HALF_FLOAT&&(Q=e.RG16F),B===e.UNSIGNED_BYTE&&(Q=e.RG8),B===e.UNSIGNED_SHORT&&pt&&(Q=pt.RG16_EXT),B===e.SHORT&&pt&&(Q=pt.RG16_SNORM_EXT)),x===e.RG_INTEGER&&(B===e.UNSIGNED_BYTE&&(Q=e.RG8UI),B===e.UNSIGNED_SHORT&&(Q=e.RG16UI),B===e.UNSIGNED_INT&&(Q=e.RG32UI),B===e.BYTE&&(Q=e.RG8I),B===e.SHORT&&(Q=e.RG16I),B===e.INT&&(Q=e.RG32I)),x===e.RGB_INTEGER&&(B===e.UNSIGNED_BYTE&&(Q=e.RGB8UI),B===e.UNSIGNED_SHORT&&(Q=e.RGB16UI),B===e.UNSIGNED_INT&&(Q=e.RGB32UI),B===e.BYTE&&(Q=e.RGB8I),B===e.SHORT&&(Q=e.RGB16I),B===e.INT&&(Q=e.RGB32I)),x===e.RGBA_INTEGER&&(B===e.UNSIGNED_BYTE&&(Q=e.RGBA8UI),B===e.UNSIGNED_SHORT&&(Q=e.RGBA16UI),B===e.UNSIGNED_INT&&(Q=e.RGBA32UI),B===e.BYTE&&(Q=e.RGBA8I),B===e.SHORT&&(Q=e.RGBA16I),B===e.INT&&(Q=e.RGBA32I)),x===e.RGB&&(B===e.UNSIGNED_SHORT&&pt&&(Q=pt.RGB16_EXT),B===e.SHORT&&pt&&(Q=pt.RGB16_SNORM_EXT),B===e.UNSIGNED_INT_5_9_9_9_REV&&(Q=e.RGB9_E5),B===e.UNSIGNED_INT_10F_11F_11F_REV&&(Q=e.R11F_G11F_B10F)),x===e.RGBA){const at=dt?Th:pe.getTransfer(ot);B===e.FLOAT&&(Q=e.RGBA32F),B===e.HALF_FLOAT&&(Q=e.RGBA16F),B===e.UNSIGNED_BYTE&&(Q=at===Ae?e.SRGB8_ALPHA8:e.RGBA8),B===e.UNSIGNED_SHORT&&pt&&(Q=pt.RGBA16_EXT),B===e.SHORT&&pt&&(Q=pt.RGBA16_SNORM_EXT),B===e.UNSIGNED_SHORT_4_4_4_4&&(Q=e.RGBA4),B===e.UNSIGNED_SHORT_5_5_5_1&&(Q=e.RGB5_A1)}return(Q===e.R16F||Q===e.R32F||Q===e.RG16F||Q===e.RG32F||Q===e.RGBA16F||Q===e.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function A(E,x){let B;return E?x===null||x===ls||x===Rl?B=e.DEPTH24_STENCIL8:x===ts?B=e.DEPTH32F_STENCIL8:x===Al&&(B=e.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ls||x===Rl?B=e.DEPTH_COMPONENT24:x===ts?B=e.DEPTH_COMPONENT32F:x===Al&&(B=e.DEPTH_COMPONENT16),B}function w(E,x){return p(E)===!0||E.isFramebufferTexture&&E.minFilter!==bn&&E.minFilter!==Ln?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function P(E){const x=E.target;x.removeEventListener("dispose",P),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&d.delete(x)}function v(E){const x=E.target;x.removeEventListener("dispose",v),C(x)}function T(E){const x=i.get(E);if(x.__webglInit===void 0)return;const B=E.source,J=u.get(B);if(J){const ot=J[x.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&U(E),Object.keys(J).length===0&&u.delete(B)}i.remove(E)}function U(E){const x=i.get(E);e.deleteTexture(x.__webglTexture);const B=E.source,J=u.get(B);delete J[x.__cacheKey],o.memory.textures--}function C(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let ot=0;ot<x.__webglFramebuffer[J].length;ot++)e.deleteFramebuffer(x.__webglFramebuffer[J][ot]);else e.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)e.deleteFramebuffer(x.__webglFramebuffer[J]);else e.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&e.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&e.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&e.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&e.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=E.textures;for(let J=0,ot=B.length;J<ot;J++){const dt=i.get(B[J]);dt.__webglTexture&&(e.deleteTexture(dt.__webglTexture),o.memory.textures--),i.remove(B[J])}i.remove(E)}let I=0;function k(){I=0}function X(){return I}function O(E){I=E}function z(){const E=I;return E>=s.maxTextures&&qt("WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),I+=1,E}function F(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function K(E,x){const B=i.get(E);if(E.isVideoTexture&&ut(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){const J=E.image;if(J===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(B,E,x);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D,B.__webglTexture,e.TEXTURE0+x)}function Z(E,x){const B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Ht(B,E,x);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(e.TEXTURE_2D_ARRAY,B.__webglTexture,e.TEXTURE0+x)}function ft(E,x){const B=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){Ht(B,E,x);return}n.bindTexture(e.TEXTURE_3D,B.__webglTexture,e.TEXTURE0+x)}function Tt(E,x){const B=i.get(E);if(E.isCubeDepthTexture!==!0&&E.version>0&&B.__version!==E.version){Wt(B,E,x);return}n.bindTexture(e.TEXTURE_CUBE_MAP,B.__webglTexture,e.TEXTURE0+x)}const wt={[Bf]:e.REPEAT,[Ns]:e.CLAMP_TO_EDGE,[kf]:e.MIRRORED_REPEAT},re={[bn]:e.NEAREST,[NC]:e.NEAREST_MIPMAP_NEAREST,[Ac]:e.NEAREST_MIPMAP_LINEAR,[Ln]:e.LINEAR,[gd]:e.LINEAR_MIPMAP_NEAREST,[Jr]:e.LINEAR_MIPMAP_LINEAR},$t={[kC]:e.NEVER,[WC]:e.ALWAYS,[zC]:e.LESS,[a_]:e.LEQUAL,[HC]:e.EQUAL,[l_]:e.GEQUAL,[VC]:e.GREATER,[GC]:e.NOTEQUAL};function jt(E,x){if(x.type===ts&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Ln||x.magFilter===gd||x.magFilter===Ac||x.magFilter===Jr||x.minFilter===Ln||x.minFilter===gd||x.minFilter===Ac||x.minFilter===Jr)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(E,e.TEXTURE_WRAP_S,wt[x.wrapS]),e.texParameteri(E,e.TEXTURE_WRAP_T,wt[x.wrapT]),(E===e.TEXTURE_3D||E===e.TEXTURE_2D_ARRAY)&&e.texParameteri(E,e.TEXTURE_WRAP_R,wt[x.wrapR]),e.texParameteri(E,e.TEXTURE_MAG_FILTER,re[x.magFilter]),e.texParameteri(E,e.TEXTURE_MIN_FILTER,re[x.minFilter]),x.compareFunction&&(e.texParameteri(E,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(E,e.TEXTURE_COMPARE_FUNC,$t[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===bn||x.minFilter!==Ac&&x.minFilter!==Jr||x.type===ts&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");e.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function tt(E,x){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",P));const J=x.source;let ot=u.get(J);ot===void 0&&(ot={},u.set(J,ot));const dt=F(x);if(dt!==E.__cacheKey){ot[dt]===void 0&&(ot[dt]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ot[dt].usedTimes++;const pt=ot[E.__cacheKey];pt!==void 0&&(ot[E.__cacheKey].usedTimes--,pt.usedTimes===0&&U(x)),E.__cacheKey=dt,E.__webglTexture=ot[dt].texture}return B}function gt(E,x,B){return Math.floor(Math.floor(E/B)/x)}function ht(E,x,B,J){const dt=E.updateRanges;if(dt.length===0)n.texSubImage2D(e.TEXTURE_2D,0,0,0,x.width,x.height,B,J,x.data);else{dt.sort((Et,yt)=>Et.start-yt.start);let pt=0;for(let Et=1;Et<dt.length;Et++){const yt=dt[pt],mt=dt[Et],Zt=yt.start+yt.count,oe=gt(mt.start,x.width,4),ge=gt(yt.start,x.width,4);mt.start<=Zt+1&&oe===ge&&gt(mt.start+mt.count-1,x.width,4)===oe?yt.count=Math.max(yt.count,mt.start+mt.count-yt.start):(++pt,dt[pt]=mt)}dt.length=pt+1;const Q=n.getParameter(e.UNPACK_ROW_LENGTH),at=n.getParameter(e.UNPACK_SKIP_PIXELS),vt=n.getParameter(e.UNPACK_SKIP_ROWS);n.pixelStorei(e.UNPACK_ROW_LENGTH,x.width);for(let Et=0,yt=dt.length;Et<yt;Et++){const mt=dt[Et],Zt=Math.floor(mt.start/4),oe=Math.ceil(mt.count/4),ge=Zt%x.width,N=Math.floor(Zt/x.width),St=oe,st=1;n.pixelStorei(e.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(e.UNPACK_SKIP_ROWS,N),n.texSubImage2D(e.TEXTURE_2D,0,ge,N,St,st,B,J,x.data)}E.clearUpdateRanges(),n.pixelStorei(e.UNPACK_ROW_LENGTH,Q),n.pixelStorei(e.UNPACK_SKIP_PIXELS,at),n.pixelStorei(e.UNPACK_SKIP_ROWS,vt)}}function Ht(E,x,B){let J=e.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=e.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=e.TEXTURE_3D);const ot=tt(E,x),dt=x.source;n.bindTexture(J,E.__webglTexture,e.TEXTURE0+B);const pt=i.get(dt);if(dt.version!==pt.__version||ot===!0){if(n.activeTexture(e.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const st=pe.getPrimaries(pe.workingColorSpace),Lt=x.colorSpace===fr?null:pe.getPrimaries(x.colorSpace),bt=x.colorSpace===fr||st===Lt?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt)}n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment);let at=_(x.image,!1,s.maxTextureSize);at=et(x,at);const vt=r.convert(x.format,x.colorSpace),Et=r.convert(x.type);let yt=S(x.internalFormat,vt,Et,x.normalized,x.colorSpace,x.isVideoTexture);jt(J,x);let mt;const Zt=x.mipmaps,oe=x.isVideoTexture!==!0,ge=pt.__version===void 0||ot===!0,N=dt.dataReady,St=w(x,at);if(x.isDepthTexture)yt=A(x.format===Qr,x.type),ge&&(oe?n.texStorage2D(e.TEXTURE_2D,1,yt,at.width,at.height):n.texImage2D(e.TEXTURE_2D,0,yt,at.width,at.height,0,vt,Et,null));else if(x.isDataTexture)if(Zt.length>0){oe&&ge&&n.texStorage2D(e.TEXTURE_2D,St,yt,Zt[0].width,Zt[0].height);for(let st=0,Lt=Zt.length;st<Lt;st++)mt=Zt[st],oe?N&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,mt.width,mt.height,vt,Et,mt.data):n.texImage2D(e.TEXTURE_2D,st,yt,mt.width,mt.height,0,vt,Et,mt.data);x.generateMipmaps=!1}else oe?(ge&&n.texStorage2D(e.TEXTURE_2D,St,yt,at.width,at.height),N&&ht(x,at,vt,Et)):n.texImage2D(e.TEXTURE_2D,0,yt,at.width,at.height,0,vt,Et,at.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){oe&&ge&&n.texStorage3D(e.TEXTURE_2D_ARRAY,St,yt,Zt[0].width,Zt[0].height,at.depth);for(let st=0,Lt=Zt.length;st<Lt;st++)if(mt=Zt[st],x.format!==Pi)if(vt!==null)if(oe){if(N)if(x.layerUpdates.size>0){const bt=bx(mt.width,mt.height,x.format,x.type);for(const ct of x.layerUpdates){const kt=mt.data.subarray(ct*bt/mt.data.BYTES_PER_ELEMENT,(ct+1)*bt/mt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,ct,mt.width,mt.height,1,vt,kt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,at.depth,vt,mt.data)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,st,yt,mt.width,mt.height,at.depth,0,mt.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else oe?N&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,st,0,0,0,mt.width,mt.height,at.depth,vt,Et,mt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,st,yt,mt.width,mt.height,at.depth,0,vt,Et,mt.data)}else{oe&&ge&&n.texStorage2D(e.TEXTURE_2D,St,yt,Zt[0].width,Zt[0].height);for(let st=0,Lt=Zt.length;st<Lt;st++)mt=Zt[st],x.format!==Pi?vt!==null?oe?N&&n.compressedTexSubImage2D(e.TEXTURE_2D,st,0,0,mt.width,mt.height,vt,mt.data):n.compressedTexImage2D(e.TEXTURE_2D,st,yt,mt.width,mt.height,0,mt.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):oe?N&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,mt.width,mt.height,vt,Et,mt.data):n.texImage2D(e.TEXTURE_2D,st,yt,mt.width,mt.height,0,vt,Et,mt.data)}else if(x.isDataArrayTexture)if(oe){if(ge&&n.texStorage3D(e.TEXTURE_2D_ARRAY,St,yt,at.width,at.height,at.depth),N)if(x.layerUpdates.size>0){const st=bx(at.width,at.height,x.format,x.type);for(const Lt of x.layerUpdates){const bt=at.data.subarray(Lt*st/at.data.BYTES_PER_ELEMENT,(Lt+1)*st/at.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,Lt,at.width,at.height,1,vt,Et,bt)}x.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,vt,Et,at.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,yt,at.width,at.height,at.depth,0,vt,Et,at.data);else if(x.isData3DTexture)oe?(ge&&n.texStorage3D(e.TEXTURE_3D,St,yt,at.width,at.height,at.depth),N&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,vt,Et,at.data)):n.texImage3D(e.TEXTURE_3D,0,yt,at.width,at.height,at.depth,0,vt,Et,at.data);else if(x.isFramebufferTexture){if(ge)if(oe)n.texStorage2D(e.TEXTURE_2D,St,yt,at.width,at.height);else{let st=at.width,Lt=at.height;for(let bt=0;bt<St;bt++)n.texImage2D(e.TEXTURE_2D,bt,yt,st,Lt,0,vt,Et,null),st>>=1,Lt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in e){const st=e.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),at.parentNode!==st){st.appendChild(at),d.add(x),st.onpaint=ee=>{const sn=ee.changedElements;for(const Ce of d)sn.includes(Ce.image)&&(Ce.needsUpdate=!0)},st.requestPaint();return}const Lt=0,bt=e.RGBA,ct=e.RGBA,kt=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,Lt,bt,ct,kt,at),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(Zt.length>0){if(oe&&ge){const st=Pt(Zt[0]);n.texStorage2D(e.TEXTURE_2D,St,yt,st.width,st.height)}for(let st=0,Lt=Zt.length;st<Lt;st++)mt=Zt[st],oe?N&&n.texSubImage2D(e.TEXTURE_2D,st,0,0,vt,Et,mt):n.texImage2D(e.TEXTURE_2D,st,yt,vt,Et,mt);x.generateMipmaps=!1}else if(oe){if(ge){const st=Pt(at);n.texStorage2D(e.TEXTURE_2D,St,yt,st.width,st.height)}N&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,vt,Et,at)}else n.texImage2D(e.TEXTURE_2D,0,yt,vt,Et,at);p(x)&&y(J),pt.__version=dt.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Wt(E,x,B){if(x.image.length!==6)return;const J=tt(E,x),ot=x.source;n.bindTexture(e.TEXTURE_CUBE_MAP,E.__webglTexture,e.TEXTURE0+B);const dt=i.get(ot);if(ot.version!==dt.__version||J===!0){n.activeTexture(e.TEXTURE0+B);const pt=pe.getPrimaries(pe.workingColorSpace),Q=x.colorSpace===fr?null:pe.getPrimaries(x.colorSpace),at=x.colorSpace===fr||pt===Q?e.NONE:e.BROWSER_DEFAULT_WEBGL;n.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(e.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);const vt=x.isCompressedTexture||x.image[0].isCompressedTexture,Et=x.image[0]&&x.image[0].isDataTexture,yt=[];for(let ct=0;ct<6;ct++)!vt&&!Et?yt[ct]=_(x.image[ct],!0,s.maxCubemapSize):yt[ct]=Et?x.image[ct].image:x.image[ct],yt[ct]=et(x,yt[ct]);const mt=yt[0],Zt=r.convert(x.format,x.colorSpace),oe=r.convert(x.type),ge=S(x.internalFormat,Zt,oe,x.normalized,x.colorSpace),N=x.isVideoTexture!==!0,St=dt.__version===void 0||J===!0,st=ot.dataReady;let Lt=w(x,mt);jt(e.TEXTURE_CUBE_MAP,x);let bt;if(vt){N&&St&&n.texStorage2D(e.TEXTURE_CUBE_MAP,Lt,ge,mt.width,mt.height);for(let ct=0;ct<6;ct++){bt=yt[ct].mipmaps;for(let kt=0;kt<bt.length;kt++){const ee=bt[kt];x.format!==Pi?Zt!==null?N?st&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,ee.width,ee.height,Zt,ee.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,ge,ee.width,ee.height,0,ee.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,0,0,ee.width,ee.height,Zt,oe,ee.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt,ge,ee.width,ee.height,0,Zt,oe,ee.data)}}}else{if(bt=x.mipmaps,N&&St){bt.length>0&&Lt++;const ct=Pt(yt[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,Lt,ge,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(Et){N?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt[ct].width,yt[ct].height,Zt,oe,yt[ct].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ge,yt[ct].width,yt[ct].height,0,Zt,oe,yt[ct].data);for(let kt=0;kt<bt.length;kt++){const sn=bt[kt].image[ct].image;N?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,sn.width,sn.height,Zt,oe,sn.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,ge,sn.width,sn.height,0,Zt,oe,sn.data)}}else{N?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Zt,oe,yt[ct]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ge,Zt,oe,yt[ct]);for(let kt=0;kt<bt.length;kt++){const ee=bt[kt];N?st&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,0,0,Zt,oe,ee.image[ct]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+ct,kt+1,ge,Zt,oe,ee.image[ct])}}}p(x)&&y(e.TEXTURE_CUBE_MAP),dt.__version=ot.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function Xt(E,x,B,J,ot,dt){const pt=r.convert(B.format,B.colorSpace),Q=r.convert(B.type),at=S(B.internalFormat,pt,Q,B.normalized,B.colorSpace),vt=i.get(x),Et=i.get(B);if(Et.__renderTarget=x,!vt.__hasExternalTextures){const yt=Math.max(1,x.width>>dt),mt=Math.max(1,x.height>>dt);ot===e.TEXTURE_3D||ot===e.TEXTURE_2D_ARRAY?n.texImage3D(ot,dt,at,yt,mt,x.depth,0,pt,Q,null):n.texImage2D(ot,dt,at,yt,mt,0,pt,Q,null)}n.bindFramebuffer(e.FRAMEBUFFER,E),xt(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,J,ot,Et.__webglTexture,0,rt(x)):(ot===e.TEXTURE_2D||ot>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,J,ot,Et.__webglTexture,dt),n.bindFramebuffer(e.FRAMEBUFFER,null)}function L(E,x,B){if(e.bindRenderbuffer(e.RENDERBUFFER,E),x.depthBuffer){const J=x.depthTexture,ot=J&&J.isDepthTexture?J.type:null,dt=A(x.stencilBuffer,ot),pt=x.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;xt(x)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,rt(x),dt,x.width,x.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,rt(x),dt,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,dt,x.width,x.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,pt,e.RENDERBUFFER,E)}else{const J=x.textures;for(let ot=0;ot<J.length;ot++){const dt=J[ot],pt=r.convert(dt.format,dt.colorSpace),Q=r.convert(dt.type),at=S(dt.internalFormat,pt,Q,dt.normalized,dt.colorSpace);xt(x)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,rt(x),at,x.width,x.height):B?e.renderbufferStorageMultisample(e.RENDERBUFFER,rt(x),at,x.width,x.height):e.renderbufferStorage(e.RENDERBUFFER,at,x.width,x.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function D(E,x,B){const J=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(e.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ot=i.get(x.depthTexture);if(ot.__renderTarget=x,(!ot.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),J){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),ot.__webglTexture===void 0){ot.__webglTexture=e.createTexture(),n.bindTexture(e.TEXTURE_CUBE_MAP,ot.__webglTexture),jt(e.TEXTURE_CUBE_MAP,x.depthTexture);const vt=r.convert(x.depthTexture.format),Et=r.convert(x.depthTexture.type);let yt;x.depthTexture.format===Xs?yt=e.DEPTH_COMPONENT24:x.depthTexture.format===Qr&&(yt=e.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,yt,x.width,x.height,0,vt,Et,null)}}else K(x.depthTexture,0);const dt=ot.__webglTexture,pt=rt(x),Q=J?e.TEXTURE_CUBE_MAP_POSITIVE_X+B:e.TEXTURE_2D,at=x.depthTexture.format===Qr?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(x.depthTexture.format===Xs)xt(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,at,Q,dt,0,pt):e.framebufferTexture2D(e.FRAMEBUFFER,at,Q,dt,0);else if(x.depthTexture.format===Qr)xt(x)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,at,Q,dt,0,pt):e.framebufferTexture2D(e.FRAMEBUFFER,at,Q,dt,0);else throw new Error("Unknown depthTexture format")}function W(E){const x=i.get(E),B=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const J=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const ot=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",ot)};J.addEventListener("dispose",ot),x.__depthDisposeCallback=ot}x.__boundDepthTexture=J}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let J=0;J<6;J++)D(x.__webglFramebuffer[J],E,J);else{const J=E.texture.mipmaps;J&&J.length>0?D(x.__webglFramebuffer[0],E,0):D(x.__webglFramebuffer,E,0)}else if(B){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=e.createRenderbuffer(),L(x.__webglDepthbuffer[J],E,!1);else{const ot=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer[J];e.bindRenderbuffer(e.RENDERBUFFER,dt),e.framebufferRenderbuffer(e.FRAMEBUFFER,ot,e.RENDERBUFFER,dt)}}else{const J=E.texture.mipmaps;if(J&&J.length>0?n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(e.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=e.createRenderbuffer(),L(x.__webglDepthbuffer,E,!1);else{const ot=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,dt=x.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,dt),e.framebufferRenderbuffer(e.FRAMEBUFFER,ot,e.RENDERBUFFER,dt)}}n.bindFramebuffer(e.FRAMEBUFFER,null)}function nt(E,x,B){const J=i.get(E);x!==void 0&&Xt(J.__webglFramebuffer,E,E.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),B!==void 0&&W(E)}function j(E){const x=E.texture,B=i.get(E),J=i.get(x);E.addEventListener("dispose",v);const ot=E.textures,dt=E.isWebGLCubeRenderTarget===!0,pt=ot.length>1;if(pt||(J.__webglTexture===void 0&&(J.__webglTexture=e.createTexture()),J.__version=x.version,o.memory.textures++),dt){B.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[Q]=[];for(let at=0;at<x.mipmaps.length;at++)B.__webglFramebuffer[Q][at]=e.createFramebuffer()}else B.__webglFramebuffer[Q]=e.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let Q=0;Q<x.mipmaps.length;Q++)B.__webglFramebuffer[Q]=e.createFramebuffer()}else B.__webglFramebuffer=e.createFramebuffer();if(pt)for(let Q=0,at=ot.length;Q<at;Q++){const vt=i.get(ot[Q]);vt.__webglTexture===void 0&&(vt.__webglTexture=e.createTexture(),o.memory.textures++)}if(E.samples>0&&xt(E)===!1){B.__webglMultisampledFramebuffer=e.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Q=0;Q<ot.length;Q++){const at=ot[Q];B.__webglColorRenderbuffer[Q]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,B.__webglColorRenderbuffer[Q]);const vt=r.convert(at.format,at.colorSpace),Et=r.convert(at.type),yt=S(at.internalFormat,vt,Et,at.normalized,at.colorSpace,E.isXRRenderTarget===!0),mt=rt(E);e.renderbufferStorageMultisample(e.RENDERBUFFER,mt,yt,E.width,E.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+Q,e.RENDERBUFFER,B.__webglColorRenderbuffer[Q])}e.bindRenderbuffer(e.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=e.createRenderbuffer(),L(B.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(dt){n.bindTexture(e.TEXTURE_CUBE_MAP,J.__webglTexture),jt(e.TEXTURE_CUBE_MAP,x);for(let Q=0;Q<6;Q++)if(x.mipmaps&&x.mipmaps.length>0)for(let at=0;at<x.mipmaps.length;at++)Xt(B.__webglFramebuffer[Q][at],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,at);else Xt(B.__webglFramebuffer[Q],E,x,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(x)&&y(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(pt){for(let Q=0,at=ot.length;Q<at;Q++){const vt=ot[Q],Et=i.get(vt);let yt=e.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(yt=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(yt,Et.__webglTexture),jt(yt,vt),Xt(B.__webglFramebuffer,E,vt,e.COLOR_ATTACHMENT0+Q,yt,0),p(vt)&&y(yt)}n.unbindTexture()}else{let Q=e.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Q=E.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(Q,J.__webglTexture),jt(Q,x),x.mipmaps&&x.mipmaps.length>0)for(let at=0;at<x.mipmaps.length;at++)Xt(B.__webglFramebuffer[at],E,x,e.COLOR_ATTACHMENT0,Q,at);else Xt(B.__webglFramebuffer,E,x,e.COLOR_ATTACHMENT0,Q,0);p(x)&&y(Q),n.unbindTexture()}E.depthBuffer&&W(E)}function it(E){const x=E.textures;for(let B=0,J=x.length;B<J;B++){const ot=x[B];if(p(ot)){const dt=M(E),pt=i.get(ot).__webglTexture;n.bindTexture(dt,pt),y(dt),n.unbindTexture()}}}const lt=[],_t=[];function R(E){if(E.samples>0){if(xt(E)===!1){const x=E.textures,B=E.width,J=E.height;let ot=e.COLOR_BUFFER_BIT;const dt=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,pt=i.get(E),Q=x.length>1;if(Q)for(let vt=0;vt<x.length;vt++)n.bindFramebuffer(e.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+vt,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,pt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+vt,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer);const at=E.texture.mipmaps;at&&at.length>0?n.bindFramebuffer(e.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):n.bindFramebuffer(e.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let vt=0;vt<x.length;vt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ot|=e.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ot|=e.STENCIL_BUFFER_BIT)),Q){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,pt.__webglColorRenderbuffer[vt]);const Et=i.get(x[vt]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,Et,0)}e.blitFramebuffer(0,0,B,J,0,0,B,J,ot,e.NEAREST),l===!0&&(lt.length=0,_t.length=0,lt.push(e.COLOR_ATTACHMENT0+vt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(lt.push(dt),_t.push(dt),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_t)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,lt))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),Q)for(let vt=0;vt<x.length;vt++){n.bindFramebuffer(e.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+vt,e.RENDERBUFFER,pt.__webglColorRenderbuffer[vt]);const Et=i.get(x[vt]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,pt.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+vt,e.TEXTURE_2D,Et,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[x])}}}function rt(E){return Math.min(s.maxSamples,E.samples)}function xt(E){const x=i.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ut(E){const x=o.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function et(E,x){const B=E.colorSpace,J=E.format,ot=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==wh&&B!==fr&&(pe.getTransfer(B)===Ae?(J!==Pi||ot!==ii)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):me("WebGLTextures: Unsupported texture color space:",B)),x}function Pt(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=k,this.getTextureUnits=X,this.setTextureUnits=O,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=ft,this.setTextureCube=Tt,this.rebindTextures=nt,this.setupRenderTarget=j,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=W,this.setupFrameBufferTexture=Xt,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function E3(e,t){function n(i,s=fr){let r;const o=pe.getTransfer(s);if(i===ii)return e.UNSIGNED_BYTE;if(i===n_)return e.UNSIGNED_SHORT_4_4_4_4;if(i===i_)return e.UNSIGNED_SHORT_5_5_5_1;if(i===Xy)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===$y)return e.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gy)return e.BYTE;if(i===Wy)return e.SHORT;if(i===Al)return e.UNSIGNED_SHORT;if(i===e_)return e.INT;if(i===ls)return e.UNSIGNED_INT;if(i===ts)return e.FLOAT;if(i===Ws)return e.HALF_FLOAT;if(i===Yy)return e.ALPHA;if(i===qy)return e.RGB;if(i===Pi)return e.RGBA;if(i===Xs)return e.DEPTH_COMPONENT;if(i===Qr)return e.DEPTH_STENCIL;if(i===jy)return e.RED;if(i===s_)return e.RED_INTEGER;if(i===oo)return e.RG;if(i===r_)return e.RG_INTEGER;if(i===o_)return e.RGBA_INTEGER;if(i===lh||i===ch||i===hh||i===uh)if(o===Ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===lh)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ch)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===uh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===lh)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ch)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hh)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===uh)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===zf||i===Hf||i===Vf||i===Gf)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===zf)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hf)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Vf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gf)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wf||i===Xf||i===$f||i===Yf||i===qf||i===bh||i===jf)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Wf||i===Xf)return o===Ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$f)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yf)return r.COMPRESSED_R11_EAC;if(i===qf)return r.COMPRESSED_SIGNED_R11_EAC;if(i===bh)return r.COMPRESSED_RG11_EAC;if(i===jf)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Kf||i===Zf||i===Jf||i===Qf||i===tp||i===ep||i===np||i===ip||i===sp||i===rp||i===op||i===ap||i===lp||i===cp)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Kf)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Zf)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jf)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Qf)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ep)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===np)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ip)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===sp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===op)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ap)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===lp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===cp)return o===Ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===hp||i===up||i===dp)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===hp)return o===Ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===up)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dp)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fp||i===pp||i===Eh||i===_p)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fp)return r.COMPRESSED_RED_RGTC1_EXT;if(i===pp)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Eh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_p)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Rl?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}const w3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,T3=`
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

}`;class A3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const i=new rS(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new cs({vertexShader:w3,fragmentShader:T3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fn(new qh(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class R3 extends Tr{constructor(t,n){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,m=null;const g=typeof XRWebGLBinding<"u",_=new A3,p={},y=n.getContextAttributes();let M=null,S=null;const A=[],w=[],P=new te;let v=null;const T=new pi;T.viewport=new Qe;const U=new pi;U.viewport=new Qe;const C=[T,U],I=new NP;let k=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let gt=A[tt];return gt===void 0&&(gt=new Ed,A[tt]=gt),gt.getTargetRaySpace()},this.getControllerGrip=function(tt){let gt=A[tt];return gt===void 0&&(gt=new Ed,A[tt]=gt),gt.getGripSpace()},this.getHand=function(tt){let gt=A[tt];return gt===void 0&&(gt=new Ed,A[tt]=gt),gt.getHandSpace()};function O(tt){const gt=w.indexOf(tt.inputSource);if(gt===-1)return;const ht=A[gt];ht!==void 0&&(ht.update(tt.inputSource,tt.frame,c||o),ht.dispatchEvent({type:tt.type,data:tt.inputSource}))}function z(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",F);for(let tt=0;tt<A.length;tt++){const gt=w[tt];gt!==null&&(w[tt]=null,A[tt].disconnect(gt))}k=null,X=null,_.reset();for(const tt in p)delete p[tt];t.setRenderTarget(M),u=null,f=null,d=null,s=null,S=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(v),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",z),s.addEventListener("inputsourceschange",F),y.xrCompatible!==!0&&await n.makeXRCompatible(),v=t.getPixelRatio(),t.getSize(P),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Ht=null,Wt=null;y.depth&&(Wt=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ht=y.stencil?Qr:Xs,Ht=y.stencil?Rl:ls);const Xt={colorFormat:n.RGBA8,depthFormat:Wt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Xt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new ss(f.textureWidth,f.textureHeight,{format:Pi,type:ii,depthTexture:new pa(f.textureWidth,f.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ht={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,n,ht),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new ss(u.framebufferWidth,u.framebufferHeight,{format:Pi,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function F(tt){for(let gt=0;gt<tt.removed.length;gt++){const ht=tt.removed[gt],Ht=w.indexOf(ht);Ht>=0&&(w[Ht]=null,A[Ht].disconnect(ht))}for(let gt=0;gt<tt.added.length;gt++){const ht=tt.added[gt];let Ht=w.indexOf(ht);if(Ht===-1){for(let Xt=0;Xt<A.length;Xt++)if(Xt>=w.length){w.push(ht),Ht=Xt;break}else if(w[Xt]===null){w[Xt]=ht,Ht=Xt;break}if(Ht===-1)break}const Wt=A[Ht];Wt&&Wt.connect(ht)}}const K=new V,Z=new V;function ft(tt,gt,ht){K.setFromMatrixPosition(gt.matrixWorld),Z.setFromMatrixPosition(ht.matrixWorld);const Ht=K.distanceTo(Z),Wt=gt.projectionMatrix.elements,Xt=ht.projectionMatrix.elements,L=Wt[14]/(Wt[10]-1),D=Wt[14]/(Wt[10]+1),W=(Wt[9]+1)/Wt[5],nt=(Wt[9]-1)/Wt[5],j=(Wt[8]-1)/Wt[0],it=(Xt[8]+1)/Xt[0],lt=L*j,_t=L*it,R=Ht/(-j+it),rt=R*-j;if(gt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(rt),tt.translateZ(R),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Wt[10]===-1)tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse);else{const xt=L+R,ut=D+R,et=lt-rt,Pt=_t+(Ht-rt),E=W*D/ut*xt,x=nt*D/ut*xt;tt.projectionMatrix.makePerspective(et,Pt,E,x,xt,ut),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Tt(tt,gt){gt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(gt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let gt=tt.near,ht=tt.far;_.texture!==null&&(_.depthNear>0&&(gt=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),I.near=U.near=T.near=gt,I.far=U.far=T.far=ht,(k!==I.near||X!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),k=I.near,X=I.far),I.layers.mask=tt.layers.mask|6,T.layers.mask=I.layers.mask&-5,U.layers.mask=I.layers.mask&-3;const Ht=tt.parent,Wt=I.cameras;Tt(I,Ht);for(let Xt=0;Xt<Wt.length;Xt++)Tt(Wt[Xt],Ht);Wt.length===2?ft(I,T,U):I.projectionMatrix.copy(T.projectionMatrix),wt(tt,I,Ht)};function wt(tt,gt,ht){ht===null?tt.matrix.copy(gt.matrixWorld):(tt.matrix.copy(ht.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(gt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(gt.projectionMatrix),tt.projectionMatrixInverse.copy(gt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=xp*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(tt){l=tt,f!==null&&(f.fixedFoveation=tt),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=tt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(I)},this.getCameraTexture=function(tt){return p[tt]};let re=null;function $t(tt,gt){if(h=gt.getViewerPose(c||o),m=gt,h!==null){const ht=h.views;u!==null&&(t.setRenderTargetFramebuffer(S,u.framebuffer),t.setRenderTarget(S));let Ht=!1;ht.length!==I.cameras.length&&(I.cameras.length=0,Ht=!0);for(let D=0;D<ht.length;D++){const W=ht[D];let nt=null;if(u!==null)nt=u.getViewport(W);else{const it=d.getViewSubImage(f,W);nt=it.viewport,D===0&&(t.setRenderTargetTextures(S,it.colorTexture,it.depthStencilTexture),t.setRenderTarget(S))}let j=C[D];j===void 0&&(j=new pi,j.layers.enable(D),j.viewport=new Qe,C[D]=j),j.matrix.fromArray(W.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(W.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(nt.x,nt.y,nt.width,nt.height),D===0&&(I.matrix.copy(j.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Ht===!0&&I.cameras.push(j)}const Wt=s.enabledFeatures;if(Wt&&Wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){d=i.getBinding();const D=d.getDepthInformation(ht[0]);D&&D.isValid&&D.texture&&_.init(D,s.renderState)}if(Wt&&Wt.includes("camera-access")&&g){t.state.unbindTexture(),d=i.getBinding();for(let D=0;D<ht.length;D++){const W=ht[D].camera;if(W){let nt=p[W];nt||(nt=new rS,p[W]=nt);const j=d.getCameraImage(W);nt.sourceTexture=j}}}}for(let ht=0;ht<A.length;ht++){const Ht=w[ht],Wt=A[ht];Ht!==null&&Wt!==void 0&&Wt.update(Ht,gt,c||o)}re&&re(tt,gt),gt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:gt}),m=null}const jt=new lS;jt.setAnimationLoop($t),this.setAnimationLoop=function(tt){re=tt},this.dispose=function(){}}}const C3=new en,_S=new Qt;_S.set(-1,0,0,0,1,0,0,0,1);function P3(e,t){function n(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,oS(e)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function s(_,p,y,M,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(_,p):p.isMeshLambertMaterial?(r(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(_,p),d(_,p)):p.isMeshPhongMaterial?(r(_,p),h(_,p),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(_,p),f(_,p),p.isMeshPhysicalMaterial&&u(_,p,S)):p.isMeshMatcapMaterial?(r(_,p),m(_,p)):p.isMeshDepthMaterial?r(_,p):p.isMeshDistanceMaterial?(r(_,p),g(_,p)):p.isMeshNormalMaterial?r(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,y,M):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,n(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Kn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,n(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Kn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,n(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,n(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const y=t.get(p),M=y.envMap,S=y.envMapRotation;M&&(_.envMap.value=M,_.envMapRotation.value.setFromMatrix4(C3.makeRotationFromEuler(S)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(_S),_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,y,M){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*y,_.scale.value=M*.5,p.map&&(_.map.value=p.map,n(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,n(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,n(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function d(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function u(_,p,y){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Kn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){const y=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function L3(e,t,n,i){let s={},r={},o=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){const S=M.program;i.uniformBlockBinding(y,S)}function c(y,M){let S=s[y.id];S===void 0&&(m(y),S=h(y),s[y.id]=S,y.addEventListener("dispose",_));const A=M.program;i.updateUBOMapping(y,A);const w=t.render.frame;r[y.id]!==w&&(f(y),r[y.id]=w)}function h(y){const M=d();y.__bindingPointIndex=M;const S=e.createBuffer(),A=y.__size,w=y.usage;return e.bindBuffer(e.UNIFORM_BUFFER,S),e.bufferData(e.UNIFORM_BUFFER,A,w),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,M,S),S}function d(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return me("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=s[y.id],S=y.uniforms,A=y.__cache;e.bindBuffer(e.UNIFORM_BUFFER,M);for(let w=0,P=S.length;w<P;w++){const v=Array.isArray(S[w])?S[w]:[S[w]];for(let T=0,U=v.length;T<U;T++){const C=v[T];if(u(C,w,T,A)===!0){const I=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let X=0;for(let O=0;O<k.length;O++){const z=k[O],F=g(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,e.bufferSubData(e.UNIFORM_BUFFER,I+X,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):ArrayBuffer.isView(z)?C.__data.set(new z.constructor(z.buffer,z.byteOffset,C.__data.length)):(z.toArray(C.__data,X),X+=F.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,I,C.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(y,M,S,A){const w=y.value,P=M+"_"+S;if(A[P]===void 0)return typeof w=="number"||typeof w=="boolean"?A[P]=w:ArrayBuffer.isView(w)?A[P]=w.slice():A[P]=w.clone(),!0;{const v=A[P];if(typeof w=="number"||typeof w=="boolean"){if(v!==w)return A[P]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(v.equals(w)===!1)return v.copy(w),!0}}return!1}function m(y){const M=y.uniforms;let S=0;const A=16;for(let P=0,v=M.length;P<v;P++){const T=Array.isArray(M[P])?M[P]:[M[P]];for(let U=0,C=T.length;U<C;U++){const I=T[U],k=Array.isArray(I.value)?I.value:[I.value];for(let X=0,O=k.length;X<O;X++){const z=k[X],F=g(z),K=S%A,Z=K%F.boundary,ft=K+Z;S+=Z,ft!==0&&A-ft<F.storage&&(S+=A-ft),I.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=F.storage}}}const w=S%A;return w>0&&(S+=A-w),y.__size=S,y.__cache={},this}function g(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",y),M}function _(y){const M=y.target;M.removeEventListener("dispose",_);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),e.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const y in s)e.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}const D3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xi=null;function I3(){return Xi===null&&(Xi=new mP(D3,16,16,oo,Ws),Xi.name="DFG_LUT",Xi.minFilter=Ln,Xi.magFilter=Ln,Xi.wrapS=Ns,Xi.wrapT=Ns,Xi.generateMipmaps=!1,Xi.needsUpdate=!0),Xi}class O3{constructor(t={}){const{canvas:n=$C(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:u=ii}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const g=u,_=new Set([o_,r_,s_]),p=new Set([ii,ls,Al,Rl,n_,i_]),y=new Uint32Array(4),M=new Int32Array(4),S=new V;let A=null,w=null;const P=[],v=[];let T=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=is,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let C=!1,I=null;this._outputColorSpace=fi;let k=0,X=0,O=null,z=-1,F=null;const K=new Qe,Z=new Qe;let ft=null;const Tt=new ue(0);let wt=0,re=n.width,$t=n.height,jt=1,tt=null,gt=null;const ht=new Qe(0,0,re,$t),Ht=new Qe(0,0,re,$t);let Wt=!1;const Xt=new d_;let L=!1,D=!1;const W=new en,nt=new V,j=new Qe,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function _t(){return O===null?jt:1}let R=i;function rt(b,H){return n.getContext(b,H)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qp}`),n.addEventListener("webglcontextlost",ct,!1),n.addEventListener("webglcontextrestored",kt,!1),n.addEventListener("webglcontextcreationerror",ee,!1),R===null){const H="webgl2";if(R=rt(H,b),R===null)throw rt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw me("WebGLRenderer: "+b.message),b}let xt,ut,et,Pt,E,x,B,J,ot,dt,pt,Q,at,vt,Et,yt,mt,Zt,oe,ge,N,St,st;function Lt(){xt=new II(R),xt.init(),N=new E3(R,xt),ut=new wI(R,xt,t,N),et=new M3(R,xt),ut.reversedDepthBuffer&&f&&et.buffers.depth.setReversed(!0),Pt=new NI(R),E=new l3,x=new b3(R,xt,et,E,ut,N,Pt),B=new DI(U),J=new zP(R),St=new bI(R,J),ot=new OI(R,J,Pt,St),dt=new BI(R,ot,J,St,Pt),Zt=new FI(R,ut,x),Et=new TI(E),pt=new a3(U,B,xt,ut,St,Et),Q=new P3(U,E),at=new h3,vt=new m3(xt),mt=new MI(U,B,et,dt,m,l),yt=new S3(U,dt,ut),st=new L3(R,Pt,ut,et),oe=new EI(R,xt,Pt),ge=new UI(R,xt,Pt),Pt.programs=pt.programs,U.capabilities=ut,U.extensions=xt,U.properties=E,U.renderLists=at,U.shadowMap=yt,U.state=et,U.info=Pt}Lt(),g!==ii&&(T=new zI(g,n.width,n.height,s,r));const bt=new R3(U,R);this.xr=bt,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=xt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=xt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return jt},this.setPixelRatio=function(b){b!==void 0&&(jt=b,this.setSize(re,$t,!1))},this.getSize=function(b){return b.set(re,$t)},this.setSize=function(b,H,q=!0){if(bt.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}re=b,$t=H,n.width=Math.floor(b*jt),n.height=Math.floor(H*jt),q===!0&&(n.style.width=b+"px",n.style.height=H+"px"),T!==null&&T.setSize(n.width,n.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(re*jt,$t*jt).floor()},this.setDrawingBufferSize=function(b,H,q){re=b,$t=H,jt=q,n.width=Math.floor(b*q),n.height=Math.floor(H*q),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(g===ii){me("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){qt("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(K)},this.getViewport=function(b){return b.copy(ht)},this.setViewport=function(b,H,q,$){b.isVector4?ht.set(b.x,b.y,b.z,b.w):ht.set(b,H,q,$),et.viewport(K.copy(ht).multiplyScalar(jt).round())},this.getScissor=function(b){return b.copy(Ht)},this.setScissor=function(b,H,q,$){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,H,q,$),et.scissor(Z.copy(Ht).multiplyScalar(jt).round())},this.getScissorTest=function(){return Wt},this.setScissorTest=function(b){et.setScissorTest(Wt=b)},this.setOpaqueSort=function(b){tt=b},this.setTransparentSort=function(b){gt=b},this.getClearColor=function(b){return b.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor(...arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,q=!0){let $=0;if(b){let Y=!1;if(O!==null){const Ct=O.texture.format;Y=_.has(Ct)}if(Y){const Ct=O.texture.type,Ot=p.has(Ct),Rt=mt.getClearColor(),Nt=mt.getClearAlpha(),Vt=Rt.r,ne=Rt.g,ce=Rt.b;Ot?(y[0]=Vt,y[1]=ne,y[2]=ce,y[3]=Nt,R.clearBufferuiv(R.COLOR,0,y)):(M[0]=Vt,M[1]=ne,M[2]=ce,M[3]=Nt,R.clearBufferiv(R.COLOR,0,M))}else $|=R.COLOR_BUFFER_BIT}H&&($|=R.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&($|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&R.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),I=b},this.dispose=function(){n.removeEventListener("webglcontextlost",ct,!1),n.removeEventListener("webglcontextrestored",kt,!1),n.removeEventListener("webglcontextcreationerror",ee,!1),mt.dispose(),at.dispose(),vt.dispose(),E.dispose(),B.dispose(),dt.dispose(),St.dispose(),st.dispose(),pt.dispose(),bt.dispose(),bt.removeEventListener("sessionstart",M_),bt.removeEventListener("sessionend",b_),Ar.stop()};function ct(b){b.preventDefault(),K0("WebGLRenderer: Context Lost."),C=!0}function kt(){K0("WebGLRenderer: Context Restored."),C=!1;const b=Pt.autoReset,H=yt.enabled,q=yt.autoUpdate,$=yt.needsUpdate,Y=yt.type;Lt(),Pt.autoReset=b,yt.enabled=H,yt.autoUpdate=q,yt.needsUpdate=$,yt.type=Y}function ee(b){me("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function sn(b){const H=b.target;H.removeEventListener("dispose",sn),Ce(H)}function Ce(b){ds(b),E.remove(b)}function ds(b){const H=E.get(b).programs;H!==void 0&&(H.forEach(function(q){pt.releaseProgram(q)}),b.isShaderMaterial&&pt.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,q,$,Y,Ct){H===null&&(H=it);const Ot=Y.isMesh&&Y.matrixWorld.determinant()<0,Rt=vS(b,H,q,$,Y);et.setMaterial($,Ot);let Nt=q.index,Vt=1;if($.wireframe===!0){if(Nt=ot.getWireframeAttribute(q),Nt===void 0)return;Vt=2}const ne=q.drawRange,ce=q.attributes.position;let Gt=ne.start*Vt,Pe=(ne.start+ne.count)*Vt;Ct!==null&&(Gt=Math.max(Gt,Ct.start*Vt),Pe=Math.min(Pe,(Ct.start+Ct.count)*Vt)),Nt!==null?(Gt=Math.max(Gt,0),Pe=Math.min(Pe,Nt.count)):ce!=null&&(Gt=Math.max(Gt,0),Pe=Math.min(Pe,ce.count));const rn=Pe-Gt;if(rn<0||rn===1/0)return;St.setup(Y,$,Rt,q,Nt);let Ze,Ie=oe;if(Nt!==null&&(Ze=J.get(Nt),Ie=ge,Ie.setIndex(Ze)),Y.isMesh)$.wireframe===!0?(et.setLineWidth($.wireframeLinewidth*_t()),Ie.setMode(R.LINES)):Ie.setMode(R.TRIANGLES);else if(Y.isLine){let Tn=$.linewidth;Tn===void 0&&(Tn=1),et.setLineWidth(Tn*_t()),Y.isLineSegments?Ie.setMode(R.LINES):Y.isLineLoop?Ie.setMode(R.LINE_LOOP):Ie.setMode(R.LINE_STRIP)}else Y.isPoints?Ie.setMode(R.POINTS):Y.isSprite&&Ie.setMode(R.TRIANGLES);if(Y.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))Ie.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Tn=Y._multiDrawStarts,It=Y._multiDrawCounts,Jn=Y._multiDrawCount,_e=Nt?J.get(Nt).bytesPerElement:1,oi=E.get($).currentProgram.getUniforms();for(let ki=0;ki<Jn;ki++)oi.setValue(R,"_gl_DrawID",ki),Ie.render(Tn[ki]/_e,It[ki])}else if(Y.isInstancedMesh)Ie.renderInstances(Gt,rn,Y.count);else if(q.isInstancedBufferGeometry){const Tn=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,It=Math.min(q.instanceCount,Tn);Ie.renderInstances(Gt,rn,It)}else Ie.render(Gt,rn)};function Bi(b,H,q){b.transparent===!0&&b.side===Os&&b.forceSinglePass===!1?(b.side=Kn,b.needsUpdate=!0,Hl(b,H,q),b.side=Mr,b.needsUpdate=!0,Hl(b,H,q),b.side=Os):Hl(b,H,q)}this.compile=function(b,H,q=null){q===null&&(q=b),w=vt.get(q),w.init(H),v.push(w),q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),b!==q&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights();const $=new Set;return b.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ct=Y.material;if(Ct)if(Array.isArray(Ct))for(let Ot=0;Ot<Ct.length;Ot++){const Rt=Ct[Ot];Bi(Rt,q,Y),$.add(Rt)}else Bi(Ct,q,Y),$.add(Ct)}),w=v.pop(),$},this.compileAsync=function(b,H,q=null){const $=this.compile(b,H,q);return new Promise(Y=>{function Ct(){if($.forEach(function(Ot){E.get(Ot).currentProgram.isReady()&&$.delete(Ot)}),$.size===0){Y(b);return}setTimeout(Ct,10)}xt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Zh=null;function gS(b){Zh&&Zh(b)}function M_(){Ar.stop()}function b_(){Ar.start()}const Ar=new lS;Ar.setAnimationLoop(gS),typeof self<"u"&&Ar.setContext(self),this.setAnimationLoop=function(b){Zh=b,bt.setAnimationLoop(b),b===null?Ar.stop():Ar.start()},bt.addEventListener("sessionstart",M_),bt.addEventListener("sessionend",b_),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){me("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;I!==null&&I.renderStart(b,H);const q=bt.enabled===!0&&bt.isPresenting===!0,$=T!==null&&(O===null||q)&&T.begin(U,O);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),bt.enabled===!0&&bt.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(bt.cameraAutoUpdate===!0&&bt.updateCamera(H),H=bt.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,H,O),w=vt.get(b,v.length),w.init(H),w.state.textureUnits=x.getTextureUnits(),v.push(w),W.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Xt.setFromProjectionMatrix(W,es,H.reversedDepth),D=this.localClippingEnabled,L=Et.init(this.clippingPlanes,D),A=at.get(b,P.length),A.init(),P.push(A),bt.enabled===!0&&bt.isPresenting===!0){const Ot=U.xr.getDepthSensingMesh();Ot!==null&&Jh(Ot,H,-1/0,U.sortObjects)}Jh(b,H,0,U.sortObjects),A.finish(),U.sortObjects===!0&&A.sort(tt,gt),lt=bt.enabled===!1||bt.isPresenting===!1||bt.hasDepthSensing()===!1,lt&&mt.addToRenderList(A,b),this.info.render.frame++,L===!0&&Et.beginShadows();const Y=w.state.shadowsArray;if(yt.render(Y,b,H),L===!0&&Et.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&T.hasRenderPass())===!1){const Ot=A.opaque,Rt=A.transmissive;if(w.setupLights(),H.isArrayCamera){const Nt=H.cameras;if(Rt.length>0)for(let Vt=0,ne=Nt.length;Vt<ne;Vt++){const ce=Nt[Vt];w_(Ot,Rt,b,ce)}lt&&mt.render(b);for(let Vt=0,ne=Nt.length;Vt<ne;Vt++){const ce=Nt[Vt];E_(A,b,ce,ce.viewport)}}else Rt.length>0&&w_(Ot,Rt,b,H),lt&&mt.render(b),E_(A,b,H)}O!==null&&X===0&&(x.updateMultisampleRenderTarget(O),x.updateRenderTargetMipmap(O)),$&&T.end(U),b.isScene===!0&&b.onAfterRender(U,b,H),St.resetDefaultState(),z=-1,F=null,v.pop(),v.length>0?(w=v[v.length-1],x.setTextureUnits(w.state.textureUnits),L===!0&&Et.setGlobalState(U.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?A=P[P.length-1]:A=null,I!==null&&I.renderEnd()};function Jh(b,H,q,$){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xt.intersectsSprite(b)){$&&j.setFromMatrixPosition(b.matrixWorld).applyMatrix4(W);const Ot=dt.update(b),Rt=b.material;Rt.visible&&A.push(b,Ot,Rt,q,j.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xt.intersectsObject(b))){const Ot=dt.update(b),Rt=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),j.copy(b.boundingSphere.center)):(Ot.boundingSphere===null&&Ot.computeBoundingSphere(),j.copy(Ot.boundingSphere.center)),j.applyMatrix4(b.matrixWorld).applyMatrix4(W)),Array.isArray(Rt)){const Nt=Ot.groups;for(let Vt=0,ne=Nt.length;Vt<ne;Vt++){const ce=Nt[Vt],Gt=Rt[ce.materialIndex];Gt&&Gt.visible&&A.push(b,Ot,Gt,q,j.z,ce)}}else Rt.visible&&A.push(b,Ot,Rt,q,j.z,null)}}const Ct=b.children;for(let Ot=0,Rt=Ct.length;Ot<Rt;Ot++)Jh(Ct[Ot],H,q,$)}function E_(b,H,q,$){const{opaque:Y,transmissive:Ct,transparent:Ot}=b;w.setupLightsView(q),L===!0&&Et.setGlobalState(U.clippingPlanes,q),$&&et.viewport(K.copy($)),Y.length>0&&zl(Y,H,q),Ct.length>0&&zl(Ct,H,q),Ot.length>0&&zl(Ot,H,q),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function w_(b,H,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){const Gt=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new ss(1,1,{generateMipmaps:!0,type:Gt?Ws:ii,minFilter:Jr,samples:Math.max(4,ut.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace})}const Ct=w.state.transmissionRenderTarget[$.id],Ot=$.viewport||K;Ct.setSize(Ot.z*U.transmissionResolutionScale,Ot.w*U.transmissionResolutionScale);const Rt=U.getRenderTarget(),Nt=U.getActiveCubeFace(),Vt=U.getActiveMipmapLevel();U.setRenderTarget(Ct),U.getClearColor(Tt),wt=U.getClearAlpha(),wt<1&&U.setClearColor(16777215,.5),U.clear(),lt&&mt.render(q);const ne=U.toneMapping;U.toneMapping=is;const ce=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),L===!0&&Et.setGlobalState(U.clippingPlanes,$),zl(b,q,$),x.updateMultisampleRenderTarget(Ct),x.updateRenderTargetMipmap(Ct),xt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let Pe=0,rn=H.length;Pe<rn;Pe++){const Ze=H[Pe],{object:Ie,geometry:Tn,material:It,group:Jn}=Ze;if(It.side===Os&&Ie.layers.test($.layers)){const _e=It.side;It.side=Kn,It.needsUpdate=!0,T_(Ie,q,$,Tn,It,Jn),It.side=_e,It.needsUpdate=!0,Gt=!0}}Gt===!0&&(x.updateMultisampleRenderTarget(Ct),x.updateRenderTargetMipmap(Ct))}U.setRenderTarget(Rt,Nt,Vt),U.setClearColor(Tt,wt),ce!==void 0&&($.viewport=ce),U.toneMapping=ne}function zl(b,H,q){const $=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Ct=b.length;Y<Ct;Y++){const Ot=b[Y],{object:Rt,geometry:Nt,group:Vt}=Ot;let ne=Ot.material;ne.allowOverride===!0&&$!==null&&(ne=$),Rt.layers.test(q.layers)&&T_(Rt,H,q,Nt,ne,Vt)}}function T_(b,H,q,$,Y,Ct){b.onBeforeRender(U,H,q,$,Y,Ct),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(U,H,q,$,b,Ct),Y.transparent===!0&&Y.side===Os&&Y.forceSinglePass===!1?(Y.side=Kn,Y.needsUpdate=!0,U.renderBufferDirect(q,H,$,Y,b,Ct),Y.side=Mr,Y.needsUpdate=!0,U.renderBufferDirect(q,H,$,Y,b,Ct),Y.side=Os):U.renderBufferDirect(q,H,$,Y,b,Ct),b.onAfterRender(U,H,q,$,Y,Ct)}function Hl(b,H,q){H.isScene!==!0&&(H=it);const $=E.get(b),Y=w.state.lights,Ct=w.state.shadowsArray,Ot=Y.state.version,Rt=pt.getParameters(b,Y.state,Ct,H,q,w.state.lightProbeGridArray),Nt=pt.getProgramCacheKey(Rt);let Vt=$.programs;$.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,$.fog=H.fog;const ne=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;$.envMap=B.get(b.envMap||$.environment,ne),$.envMapRotation=$.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",sn),Vt=new Map,$.programs=Vt);let ce=Vt.get(Nt);if(ce!==void 0){if($.currentProgram===ce&&$.lightsStateVersion===Ot)return R_(b,Rt),ce}else Rt.uniforms=pt.getUniforms(b),I!==null&&b.isNodeMaterial&&I.build(b,q,Rt),b.onBeforeCompile(Rt,U),ce=pt.acquireProgram(Rt,Nt),Vt.set(Nt,ce),$.uniforms=Rt.uniforms;const Gt=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Gt.clippingPlanes=Et.uniform),R_(b,Rt),$.needsLights=SS(b),$.lightsStateVersion=Ot,$.needsLights&&(Gt.ambientLightColor.value=Y.state.ambient,Gt.lightProbe.value=Y.state.probe,Gt.directionalLights.value=Y.state.directional,Gt.directionalLightShadows.value=Y.state.directionalShadow,Gt.spotLights.value=Y.state.spot,Gt.spotLightShadows.value=Y.state.spotShadow,Gt.rectAreaLights.value=Y.state.rectArea,Gt.ltc_1.value=Y.state.rectAreaLTC1,Gt.ltc_2.value=Y.state.rectAreaLTC2,Gt.pointLights.value=Y.state.point,Gt.pointLightShadows.value=Y.state.pointShadow,Gt.hemisphereLights.value=Y.state.hemi,Gt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Gt.spotLightMatrix.value=Y.state.spotLightMatrix,Gt.spotLightMap.value=Y.state.spotLightMap,Gt.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.lightProbeGrid=w.state.lightProbeGridArray.length>0,$.currentProgram=ce,$.uniformsList=null,ce}function A_(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=fh.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function R_(b,H){const q=E.get(b);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function xS(b,H){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;S.setFromMatrixPosition(H.matrixWorld);for(let q=0,$=b.length;q<$;q++){const Y=b[q];if(Y.texture!==null&&Y.boundingBox.containsPoint(S))return Y}return null}function vS(b,H,q,$,Y){H.isScene!==!0&&(H=it),x.resetTextureUnits();const Ct=H.fog,Ot=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?H.environment:null,Rt=O===null?U.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:pe.workingColorSpace,Nt=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Vt=B.get($.envMap||Ot,Nt),ne=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,ce=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Gt=!!q.morphAttributes.position,Pe=!!q.morphAttributes.normal,rn=!!q.morphAttributes.color;let Ze=is;$.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Ze=U.toneMapping);const Ie=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Tn=Ie!==void 0?Ie.length:0,It=E.get($),Jn=w.state.lights;if(L===!0&&(D===!0||b!==F)){const Fe=b===F&&$.id===z;Et.setState($,b,Fe)}let _e=!1;$.version===It.__version?(It.needsLights&&It.lightsStateVersion!==Jn.state.version||It.outputColorSpace!==Rt||Y.isBatchedMesh&&It.batching===!1||!Y.isBatchedMesh&&It.batching===!0||Y.isBatchedMesh&&It.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&It.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&It.instancing===!1||!Y.isInstancedMesh&&It.instancing===!0||Y.isSkinnedMesh&&It.skinning===!1||!Y.isSkinnedMesh&&It.skinning===!0||Y.isInstancedMesh&&It.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&It.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&It.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&It.instancingMorph===!1&&Y.morphTexture!==null||It.envMap!==Vt||$.fog===!0&&It.fog!==Ct||It.numClippingPlanes!==void 0&&(It.numClippingPlanes!==Et.numPlanes||It.numIntersection!==Et.numIntersection)||It.vertexAlphas!==ne||It.vertexTangents!==ce||It.morphTargets!==Gt||It.morphNormals!==Pe||It.morphColors!==rn||It.toneMapping!==Ze||It.morphTargetsCount!==Tn||!!It.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,It.__version=$.version);let oi=It.currentProgram;_e===!0&&(oi=Hl($,H,Y),I&&$.isNodeMaterial&&I.onUpdateProgram($,oi,It));let ki=!1,js=!1,ho=!1;const Oe=oi.getUniforms(),on=It.uniforms;if(et.useProgram(oi.program)&&(ki=!0,js=!0,ho=!0),$.id!==z&&(z=$.id,js=!0),It.needsLights){const Fe=xS(w.state.lightProbeGridArray,Y);It.lightProbeGrid!==Fe&&(It.lightProbeGrid=Fe,js=!0)}if(ki||F!==b){et.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),Oe.setValue(R,"projectionMatrix",b.projectionMatrix),Oe.setValue(R,"viewMatrix",b.matrixWorldInverse);const Zs=Oe.map.cameraPosition;Zs!==void 0&&Zs.setValue(R,nt.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&Oe.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Oe.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),F!==b&&(F=b,js=!0,ho=!0)}if(It.needsLights&&(Jn.state.directionalShadowMap.length>0&&Oe.setValue(R,"directionalShadowMap",Jn.state.directionalShadowMap,x),Jn.state.spotShadowMap.length>0&&Oe.setValue(R,"spotShadowMap",Jn.state.spotShadowMap,x),Jn.state.pointShadowMap.length>0&&Oe.setValue(R,"pointShadowMap",Jn.state.pointShadowMap,x)),Y.isSkinnedMesh){Oe.setOptional(R,Y,"bindMatrix"),Oe.setOptional(R,Y,"bindMatrixInverse");const Fe=Y.skeleton;Fe&&(Fe.boneTexture===null&&Fe.computeBoneTexture(),Oe.setValue(R,"boneTexture",Fe.boneTexture,x))}Y.isBatchedMesh&&(Oe.setOptional(R,Y,"batchingTexture"),Oe.setValue(R,"batchingTexture",Y._matricesTexture,x),Oe.setOptional(R,Y,"batchingIdTexture"),Oe.setValue(R,"batchingIdTexture",Y._indirectTexture,x),Oe.setOptional(R,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Oe.setValue(R,"batchingColorTexture",Y._colorsTexture,x));const Ks=q.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&Zt.update(Y,q,oi),(js||It.receiveShadow!==Y.receiveShadow)&&(It.receiveShadow=Y.receiveShadow,Oe.setValue(R,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&H.environment!==null&&(on.envMapIntensity.value=H.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=I3()),js){if(Oe.setValue(R,"toneMappingExposure",U.toneMappingExposure),It.needsLights&&yS(on,ho),Ct&&$.fog===!0&&Q.refreshFogUniforms(on,Ct),Q.refreshMaterialUniforms(on,$,jt,$t,w.state.transmissionRenderTarget[b.id]),It.needsLights&&It.lightProbeGrid){const Fe=It.lightProbeGrid;on.probesSH.value=Fe.texture,on.probesMin.value.copy(Fe.boundingBox.min),on.probesMax.value.copy(Fe.boundingBox.max),on.probesResolution.value.copy(Fe.resolution)}fh.upload(R,A_(It),on,x)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(fh.upload(R,A_(It),on,x),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Oe.setValue(R,"center",Y.center),Oe.setValue(R,"modelViewMatrix",Y.modelViewMatrix),Oe.setValue(R,"normalMatrix",Y.normalMatrix),Oe.setValue(R,"modelMatrix",Y.matrixWorld),$.uniformsGroups!==void 0){const Fe=$.uniformsGroups;for(let Zs=0,uo=Fe.length;Zs<uo;Zs++){const C_=Fe[Zs];st.update(C_,oi),st.bind(C_,oi)}}return oi}function yS(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function SS(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(b,H,q){const $=E.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),E.get(b.texture).__webglTexture=H,E.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const q=E.get(b);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const MS=R.createFramebuffer();this.setRenderTarget=function(b,H=0,q=0){O=b,k=H,X=q;let $=null,Y=!1,Ct=!1;if(b){const Rt=E.get(b);if(Rt.__useDefaultFramebuffer!==void 0){et.bindFramebuffer(R.FRAMEBUFFER,Rt.__webglFramebuffer),K.copy(b.viewport),Z.copy(b.scissor),ft=b.scissorTest,et.viewport(K),et.scissor(Z),et.setScissorTest(ft),z=-1;return}else if(Rt.__webglFramebuffer===void 0)x.setupRenderTarget(b);else if(Rt.__hasExternalTextures)x.rebindTextures(b,E.get(b.texture).__webglTexture,E.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ne=b.depthTexture;if(Rt.__boundDepthTexture!==ne){if(ne!==null&&E.has(ne)&&(b.width!==ne.image.width||b.height!==ne.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(b)}}const Nt=b.texture;(Nt.isData3DTexture||Nt.isDataArrayTexture||Nt.isCompressedArrayTexture)&&(Ct=!0);const Vt=E.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Vt[H])?$=Vt[H][q]:$=Vt[H],Y=!0):b.samples>0&&x.useMultisampledRTT(b)===!1?$=E.get(b).__webglMultisampledFramebuffer:Array.isArray(Vt)?$=Vt[q]:$=Vt,K.copy(b.viewport),Z.copy(b.scissor),ft=b.scissorTest}else K.copy(ht).multiplyScalar(jt).floor(),Z.copy(Ht).multiplyScalar(jt).floor(),ft=Wt;if(q!==0&&($=MS),et.bindFramebuffer(R.FRAMEBUFFER,$)&&et.drawBuffers(b,$),et.viewport(K),et.scissor(Z),et.setScissorTest(ft),Y){const Rt=E.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+H,Rt.__webglTexture,q)}else if(Ct){const Rt=H;for(let Nt=0;Nt<b.textures.length;Nt++){const Vt=E.get(b.textures[Nt]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Nt,Vt.__webglTexture,q,Rt)}}else if(b!==null&&q!==0){const Rt=E.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Rt.__webglTexture,q)}z=-1},this.readRenderTargetPixels=function(b,H,q,$,Y,Ct,Ot,Rt=0){if(!(b&&b.isWebGLRenderTarget)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ot!==void 0&&(Nt=Nt[Ot]),Nt){et.bindFramebuffer(R.FRAMEBUFFER,Nt);try{const Vt=b.textures[Rt],ne=Vt.format,ce=Vt.type;if(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Rt),!ut.textureFormatReadable(ne)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(ce)){me("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-$&&q>=0&&q<=b.height-Y&&R.readPixels(H,q,$,Y,N.convert(ne),N.convert(ce),Ct)}finally{const Vt=O!==null?E.get(O).__webglFramebuffer:null;et.bindFramebuffer(R.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(b,H,q,$,Y,Ct,Ot,Rt=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ot!==void 0&&(Nt=Nt[Ot]),Nt)if(H>=0&&H<=b.width-$&&q>=0&&q<=b.height-Y){et.bindFramebuffer(R.FRAMEBUFFER,Nt);const Vt=b.textures[Rt],ne=Vt.format,ce=Vt.type;if(b.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+Rt),!ut.textureFormatReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Gt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,Gt),R.bufferData(R.PIXEL_PACK_BUFFER,Ct.byteLength,R.STREAM_READ),R.readPixels(H,q,$,Y,N.convert(ne),N.convert(ce),0);const Pe=O!==null?E.get(O).__webglFramebuffer:null;et.bindFramebuffer(R.FRAMEBUFFER,Pe);const rn=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await YC(R,rn,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,Gt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,Ct),R.deleteBuffer(Gt),R.deleteSync(rn),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,q=0){const $=Math.pow(2,-q),Y=Math.floor(b.image.width*$),Ct=Math.floor(b.image.height*$),Ot=H!==null?H.x:0,Rt=H!==null?H.y:0;x.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,q,0,0,Ot,Rt,Y,Ct),et.unbindTexture()};const bS=R.createFramebuffer(),ES=R.createFramebuffer();this.copyTextureToTexture=function(b,H,q=null,$=null,Y=0,Ct=0){let Ot,Rt,Nt,Vt,ne,ce,Gt,Pe,rn;const Ze=b.isCompressedTexture?b.mipmaps[Ct]:b.image;if(q!==null)Ot=q.max.x-q.min.x,Rt=q.max.y-q.min.y,Nt=q.isBox3?q.max.z-q.min.z:1,Vt=q.min.x,ne=q.min.y,ce=q.isBox3?q.min.z:0;else{const on=Math.pow(2,-Y);Ot=Math.floor(Ze.width*on),Rt=Math.floor(Ze.height*on),b.isDataArrayTexture?Nt=Ze.depth:b.isData3DTexture?Nt=Math.floor(Ze.depth*on):Nt=1,Vt=0,ne=0,ce=0}$!==null?(Gt=$.x,Pe=$.y,rn=$.z):(Gt=0,Pe=0,rn=0);const Ie=N.convert(H.format),Tn=N.convert(H.type);let It;H.isData3DTexture?(x.setTexture3D(H,0),It=R.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(x.setTexture2DArray(H,0),It=R.TEXTURE_2D_ARRAY):(x.setTexture2D(H,0),It=R.TEXTURE_2D),et.activeTexture(R.TEXTURE0),et.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),et.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),et.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment);const Jn=et.getParameter(R.UNPACK_ROW_LENGTH),_e=et.getParameter(R.UNPACK_IMAGE_HEIGHT),oi=et.getParameter(R.UNPACK_SKIP_PIXELS),ki=et.getParameter(R.UNPACK_SKIP_ROWS),js=et.getParameter(R.UNPACK_SKIP_IMAGES);et.pixelStorei(R.UNPACK_ROW_LENGTH,Ze.width),et.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Ze.height),et.pixelStorei(R.UNPACK_SKIP_PIXELS,Vt),et.pixelStorei(R.UNPACK_SKIP_ROWS,ne),et.pixelStorei(R.UNPACK_SKIP_IMAGES,ce);const ho=b.isDataArrayTexture||b.isData3DTexture,Oe=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const on=E.get(b),Ks=E.get(H),Fe=E.get(on.__renderTarget),Zs=E.get(Ks.__renderTarget);et.bindFramebuffer(R.READ_FRAMEBUFFER,Fe.__webglFramebuffer),et.bindFramebuffer(R.DRAW_FRAMEBUFFER,Zs.__webglFramebuffer);for(let uo=0;uo<Nt;uo++)ho&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,E.get(b).__webglTexture,Y,ce+uo),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,E.get(H).__webglTexture,Ct,rn+uo)),R.blitFramebuffer(Vt,ne,Ot,Rt,Gt,Pe,Ot,Rt,R.DEPTH_BUFFER_BIT,R.NEAREST);et.bindFramebuffer(R.READ_FRAMEBUFFER,null),et.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(Y!==0||b.isRenderTargetTexture||E.has(b)){const on=E.get(b),Ks=E.get(H);et.bindFramebuffer(R.READ_FRAMEBUFFER,bS),et.bindFramebuffer(R.DRAW_FRAMEBUFFER,ES);for(let Fe=0;Fe<Nt;Fe++)ho?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,on.__webglTexture,Y,ce+Fe):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,on.__webglTexture,Y),Oe?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ks.__webglTexture,Ct,rn+Fe):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Ks.__webglTexture,Ct),Y!==0?R.blitFramebuffer(Vt,ne,Ot,Rt,Gt,Pe,Ot,Rt,R.COLOR_BUFFER_BIT,R.NEAREST):Oe?R.copyTexSubImage3D(It,Ct,Gt,Pe,rn+Fe,Vt,ne,Ot,Rt):R.copyTexSubImage2D(It,Ct,Gt,Pe,Vt,ne,Ot,Rt);et.bindFramebuffer(R.READ_FRAMEBUFFER,null),et.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else Oe?b.isDataTexture||b.isData3DTexture?R.texSubImage3D(It,Ct,Gt,Pe,rn,Ot,Rt,Nt,Ie,Tn,Ze.data):H.isCompressedArrayTexture?R.compressedTexSubImage3D(It,Ct,Gt,Pe,rn,Ot,Rt,Nt,Ie,Ze.data):R.texSubImage3D(It,Ct,Gt,Pe,rn,Ot,Rt,Nt,Ie,Tn,Ze):b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,Ct,Gt,Pe,Ot,Rt,Ie,Tn,Ze.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,Ct,Gt,Pe,Ze.width,Ze.height,Ie,Ze.data):R.texSubImage2D(R.TEXTURE_2D,Ct,Gt,Pe,Ot,Rt,Ie,Tn,Ze);et.pixelStorei(R.UNPACK_ROW_LENGTH,Jn),et.pixelStorei(R.UNPACK_IMAGE_HEIGHT,_e),et.pixelStorei(R.UNPACK_SKIP_PIXELS,oi),et.pixelStorei(R.UNPACK_SKIP_ROWS,ki),et.pixelStorei(R.UNPACK_SKIP_IMAGES,js),Ct===0&&H.generateMipmaps&&R.generateMipmap(It),et.unbindTexture()},this.initRenderTarget=function(b){E.get(b).__webglFramebuffer===void 0&&x.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?x.setTextureCube(b,0):b.isData3DTexture?x.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?x.setTexture2DArray(b,0):x.setTexture2D(b,0),et.unbindTexture()},this.resetState=function(){k=0,X=0,O=null,et.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return es}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),n.unpackColorSpace=pe._getUnpackColorSpace()}}const Yx={type:"change"},m_={type:"start"},mS={type:"end"},Zc=new u_,qx=new hr,U3=Math.cos(70*KC.DEG2RAD),dn=new V,Wn=2*Math.PI,Le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},jd=1e-6;class N3 extends BP{constructor(t,n=null){super(t,n),this.state=Le.NONE,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:sa.ROTATE,MIDDLE:sa.DOLLY,RIGHT:sa.PAN},this.touches={ONE:Zo.ROTATE,TWO:Zo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new V,this._lastQuaternion=new br,this._lastTargetPosition=new V,this._quat=new br().setFromUnitVectors(t.up,new V(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Sx,this._sphericalDelta=new Sx,this._scale=1,this._panOffset=new V,this._rotateStart=new te,this._rotateEnd=new te,this._rotateDelta=new te,this._panStart=new te,this._panEnd=new te,this._panDelta=new te,this._dollyStart=new te,this._dollyEnd=new te,this._dollyDelta=new te,this._dollyDirection=new V,this._mouse=new te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=B3.bind(this),this._onPointerDown=F3.bind(this),this._onPointerUp=k3.bind(this),this._onContextMenu=$3.bind(this),this._onMouseWheel=V3.bind(this),this._onKeyDown=G3.bind(this),this._onTouchStart=W3.bind(this),this._onTouchMove=X3.bind(this),this._onMouseDown=z3.bind(this),this._onMouseMove=H3.bind(this),this._interceptControlDown=Y3.bind(this),this._interceptControlUp=q3.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction=""}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yx),this.update(),this.state=Le.NONE}pan(t,n){this._pan(t,n),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){const n=this.object.position;dn.copy(n).sub(this.target),dn.applyQuaternion(this._quat),this._spherical.setFromVector3(dn),this.autoRotate&&this.state===Le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Wn:i>Math.PI&&(i-=Wn),s<-Math.PI?s+=Wn:s>Math.PI&&(s-=Wn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(dn.setFromSpherical(this._spherical),dn.applyQuaternion(this._quatInverse),n.copy(this.target).add(dn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=dn.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new V(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new V(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=dn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Zc.origin.copy(this.object.position),Zc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Zc.direction))<U3?this.object.lookAt(this.target):(qx.setFromNormalAndCoplanarPoint(this.object.up,this.target),Zc.intersectPlane(qx,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>jd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>jd||this._lastTargetPosition.distanceToSquared(this.target)>jd?(this.dispatchEvent(Yx),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Wn/60*this.autoRotateSpeed*t:Wn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){dn.setFromMatrixColumn(n,0),dn.multiplyScalar(-t),this._panOffset.add(dn)}_panUp(t,n){this.screenSpacePanning===!0?dn.setFromMatrixColumn(n,1):(dn.setFromMatrixColumn(n,0),dn.crossVectors(this.object.up,dn)),dn.multiplyScalar(t),this._panOffset.add(dn)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;dn.copy(s).sub(this.target);let r=dn.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*n*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=n-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Wn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Wn*this._rotateDelta.x/n.clientHeight),this._rotateUp(Wn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,s=t.pageY-n.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+n.x)*.5,a=(t.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new te,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function F3(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function B3(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function k3(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mS),this.state=Le.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function z3(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case sa.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=Le.DOLLY;break;case sa.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Le.ROTATE}break;case sa.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=Le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=Le.PAN}break;default:this.state=Le.NONE}this.state!==Le.NONE&&this.dispatchEvent(m_)}function H3(e){switch(this.state){case Le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case Le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case Le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function V3(e){this.enabled===!1||this.enableZoom===!1||this.state!==Le.NONE||(e.preventDefault(),this.dispatchEvent(m_),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(mS))}function G3(e){this.enabled!==!1&&this._handleKeyDown(e)}function W3(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Zo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=Le.TOUCH_ROTATE;break;case Zo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=Le.TOUCH_PAN;break;default:this.state=Le.NONE}break;case 2:switch(this.touches.TWO){case Zo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=Le.TOUCH_DOLLY_PAN;break;case Zo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=Le.TOUCH_DOLLY_ROTATE;break;default:this.state=Le.NONE}break;default:this.state=Le.NONE}this.state!==Le.NONE&&this.dispatchEvent(m_)}function X3(e){switch(this._trackPointer(e),this.state){case Le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case Le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case Le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case Le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=Le.NONE}}function $3(e){this.enabled!==!1&&e.preventDefault()}function Y3(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function q3(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const j3={class:"canvas-wrapper"},K3={key:0,class:"placeholder"},Z3=Bp({__name:"Valve3DCanvas",props:{params:{}},setup(e){const t=e,n=Up(null);let i=null,s=null,r=null,o=null,a=0,l=null,c=null;function h(g){return g/100}function d(g,_=.35,p=.75){return new RP({color:g,roughness:_,metalness:p})}function f(g){const{diameter:_,height:p,flangeDiameter:y,thickness:M}=g,S=new ol,A=h(_/2),w=h(p),P=h(y/2),v=h(M),T=w-2*v,U=new ur(A,A,T,48),C=new fn(U,d(7901340));C.position.y=0,S.add(C);const I=new ur(P,P,v,64),k=new fn(I,d(5227511,.3,.85));k.position.y=T/2+v/2,S.add(k);const X=new fn(I,d(5227511,.3,.85));X.position.y=-(T/2+v/2),S.add(X);const O=h(Math.min(M*.18,_*.08)),z=v*1.05,F=new ur(O,O,z,16),K=d(1711918,.8,.1),Z=8,ft=(A+P)/2;for(let D=0;D<Z;D++){const W=D/Z*Math.PI*2,nt=Math.cos(W)*ft,j=Math.sin(W)*ft;for(const it of[k.position.y,X.position.y]){const lt=new fn(F,K);lt.position.set(nt,it,j),S.add(lt)}}const Tt=A*.22,wt=T*.6,re=new ur(Tt,Tt*1.1,wt,24),$t=new fn(re,d(11583173,.25,.9));$t.position.y=T/2+v+wt/2,S.add($t);const jt=A*1.4,tt=jt*.06,gt=new f_(jt,tt,12,48),ht=new fn(gt,d(16763906,.4,.6));ht.position.y=$t.position.y+wt/2+tt,S.add(ht);const Ht=new ur(tt*.8,tt*.8,jt*2,8),Wt=d(16763906,.4,.6);for(let D=0;D<4;D++){const W=new fn(Ht,Wt);W.position.copy(ht.position),W.rotation.z=D/4*Math.PI,S.add(W)}const Xt=new ur(A*1.06,A*1.06,T*.12,48),L=new fn(Xt,d(6323595));return L.position.y=0,S.add(L),S.traverse(D=>{D instanceof fn&&(D.castShadow=!0,D.receiveShadow=!0)}),S}function u(g){if(!s)return;c&&(s.remove(c),c.traverse(M=>{M instanceof fn&&(M.geometry.dispose(),M.material.dispose())})),c=f(g),s.add(c);const{height:_,flangeDiameter:p}=g,y=Math.max(h(_),h(p))*2.8;r.position.set(y*.7,y*.5,y*.9),r.lookAt(0,0,0),o.target.set(0,0,0),o.update()}function m(){if(!n.value)return;const g=n.value,_=g.clientWidth,p=g.clientHeight;i=new O3({antialias:!0,alpha:!1}),i.setPixelRatio(window.devicePixelRatio),i.setSize(_,p),i.shadowMap.enabled=!0,i.shadowMap.type=Oy,i.toneMapping=t_,i.toneMappingExposure=1.2,g.appendChild(i.domElement),s=new hP,s.background=new ue(856343),s.fog=new h_(856343,8,30),r=new pi(45,_/p,.01,100),r.position.set(4,3,5),o=new N3(r,i.domElement),o.enableDamping=!0,o.dampingFactor=.06,o.minDistance=.5,o.maxDistance=30,o.autoRotate=!1;const y=new OP(16777215,.5);s.add(y);const M=new yx(16777215,1.5);M.position.set(5,8,5),M.castShadow=!0,M.shadow.mapSize.set(2048,2048),s.add(M);const S=new yx(5227511,.6);S.position.set(-5,-2,-5),s.add(S);const A=new LP(2241348,1122867,.4);s.add(A);const w=new FP(10,20,2241348,1712691);w.position.y=-3,s.add(w),t.params&&u(t.params);function P(){a=requestAnimationFrame(P),o.update(),i.render(s,r)}P(),l=new ResizeObserver(()=>{if(!n.value||!i||!r)return;const v=n.value.clientWidth,T=n.value.clientHeight;r.aspect=v/T,r.updateProjectionMatrix(),i.setSize(v,T)}),l.observe(g)}return kp(()=>m()),zp(()=>{cancelAnimationFrame(a),l==null||l.disconnect(),o==null||o.dispose(),i==null||i.dispose(),i==null||i.domElement.remove()}),ul(()=>t.params,g=>{g&&u(g)},{deep:!0}),(g,_)=>(no(),aa("div",j3,[e.params?Gp("",!0):(no(),aa("div",K3,[..._[0]||(_[0]=[Bt("span",null,"请输入参数后点击「生成」",-1)])])),Bt("div",{ref_key:"containerRef",ref:n,class:"three-container"},null,512)]))}}),J3=Jp(Z3,[["__scopeId","data-v-d501af94"]]),Q3={diameter:100,height:300,flangeDiameter:180,thickness:20},tO={class:"app-shell"},eO={class:"sidebar"},nO={class:"err-msg"},iO={class:"err-msg"},sO={class:"err-msg"},rO={class:"err-msg"},oO={key:0,class:"param-summary"},aO={class:"main-area"},lO={class:"panel panel-2d"},cO={class:"panel-body"},hO={class:"panel panel-3d"},uO={class:"panel-body"},dO=Bp({__name:"App",setup(e){const t=yl({...Q3}),n=Up(null),i=yl({diameter:"",height:"",flangeDiameter:"",thickness:""});function s(){let o=!0;return i.diameter="",i.height="",i.flangeDiameter="",i.thickness="",t.diameter<=0&&(i.diameter="口径必须大于 0",o=!1),t.height<=0&&(i.height="高度必须大于 0",o=!1),t.flangeDiameter<=t.diameter&&(i.flangeDiameter="法兰直径须大于口径",o=!1),(t.thickness<=0||t.thickness*2>=t.height)&&(i.thickness=`厚度须在 0 ~ ${Math.floor(t.height/2)} mm 之间`,o=!1),o}function r(){s()&&(n.value={...t})}return(o,a)=>(no(),aa("div",tO,[Bt("aside",eO,[a[14]||(a[14]=Bt("div",{class:"sidebar-header"},[Bt("span",{class:"icon"},"⚙"),Bt("h1",null,"阀门参数")],-1)),Bt("form",{onSubmit:Yb(r,["prevent"]),class:"param-form"},[Bt("div",{class:Zr(["field",{error:i.diameter}])},[a[4]||(a[4]=Bt("label",null,[$o(" 口径 "),Bt("small",null,"mm")],-1)),Xl(Bt("input",{"onUpdate:modelValue":a[0]||(a[0]=l=>t.diameter=l),type:"number",min:"1",step:"1",placeholder:"e.g. 100"},null,512),[[$l,t.diameter,void 0,{number:!0}]]),Bt("span",nO,As(i.diameter),1)],2),Bt("div",{class:Zr(["field",{error:i.height}])},[a[5]||(a[5]=Bt("label",null,[$o(" 高度 "),Bt("small",null,"mm")],-1)),Xl(Bt("input",{"onUpdate:modelValue":a[1]||(a[1]=l=>t.height=l),type:"number",min:"1",step:"1",placeholder:"e.g. 300"},null,512),[[$l,t.height,void 0,{number:!0}]]),Bt("span",iO,As(i.height),1)],2),Bt("div",{class:Zr(["field",{error:i.flangeDiameter}])},[a[6]||(a[6]=Bt("label",null,[$o(" 法兰直径 "),Bt("small",null,"mm")],-1)),Xl(Bt("input",{"onUpdate:modelValue":a[2]||(a[2]=l=>t.flangeDiameter=l),type:"number",min:"1",step:"1",placeholder:"e.g. 180"},null,512),[[$l,t.flangeDiameter,void 0,{number:!0}]]),Bt("span",sO,As(i.flangeDiameter),1)],2),Bt("div",{class:Zr(["field",{error:i.thickness}])},[a[7]||(a[7]=Bt("label",null,[$o(" 法兰厚度 "),Bt("small",null,"mm")],-1)),Xl(Bt("input",{"onUpdate:modelValue":a[3]||(a[3]=l=>t.thickness=l),type:"number",min:"1",step:"1",placeholder:"e.g. 20"},null,512),[[$l,t.thickness,void 0,{number:!0}]]),Bt("span",rO,As(i.thickness),1)],2),a[8]||(a[8]=Bt("button",{type:"submit",class:"btn-generate"},[Bt("span",{class:"btn-icon"},"▶"),$o(" 生 成 ")],-1))],32),n.value?(no(),aa("div",oO,[a[13]||(a[13]=Bt("p",{class:"summary-title"},"当前模型参数",-1)),Bt("table",null,[Bt("tbody",null,[Bt("tr",null,[a[9]||(a[9]=Bt("td",null,"口径",-1)),Bt("td",null,As(n.value.diameter)+" mm",1)]),Bt("tr",null,[a[10]||(a[10]=Bt("td",null,"高度",-1)),Bt("td",null,As(n.value.height)+" mm",1)]),Bt("tr",null,[a[11]||(a[11]=Bt("td",null,"法兰直径",-1)),Bt("td",null,As(n.value.flangeDiameter)+" mm",1)]),Bt("tr",null,[a[12]||(a[12]=Bt("td",null,"法兰厚度",-1)),Bt("td",null,As(n.value.thickness)+" mm",1)])])])])):Gp("",!0)]),Bt("main",aO,[Bt("section",lO,[a[15]||(a[15]=Bt("div",{class:"panel-header"},[Bt("span",{class:"panel-tag tag-2d"},"2D"),Bt("span",null,"工程图")],-1)),Bt("div",cO,[Oi(fC,{params:n.value},null,8,["params"])])]),Bt("section",hO,[a[16]||(a[16]=Bt("div",{class:"panel-header"},[Bt("span",{class:"panel-tag tag-3d"},"3D"),Bt("span",null,"模型预览")],-1)),Bt("div",uO,[Oi(J3,{params:n.value},null,8,["params"])])])])]))}}),fO=Jp(dO,[["__scopeId","data-v-5edb5f68"]]);Kb(fO).mount("#app");
