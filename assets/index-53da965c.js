(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Va(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Ha(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=pt(i)?Qd(i):Ha(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(pt(n))return n;if(et(n))return n}}const Kd=/;(?![^(]*\))/g,Jd=/:([^]+)/,Zd=/\/\*.*?\*\//gs;function Qd(n){const e={};return n.replace(Zd,"").split(Kd).forEach(t=>{if(t){const i=t.split(Jd);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Wa(n){let e="";if(pt(n))e=n;else if(Le(n))for(let t=0;t<n.length;t++){const i=Wa(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const eh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",th=Va(eh);function Nu(n){return!!n||n===""}function nh(n,e){if(n.length!==e.length)return!1;let t=!0;for(let i=0;t&&i<n.length;i++)t=Qs(n[i],e[i]);return t}function Qs(n,e){if(n===e)return!0;let t=bc(n),i=bc(e);if(t||i)return t&&i?n.getTime()===e.getTime():!1;if(t=Or(n),i=Or(e),t||i)return n===e;if(t=Le(n),i=Le(e),t||i)return t&&i?nh(n,e):!1;if(t=et(n),i=et(e),t||i){if(!t||!i)return!1;const r=Object.keys(n).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Qs(n[o],e[o]))return!1}}return String(n)===String(e)}function Uu(n,e){return n.findIndex(t=>Qs(t,e))}const yc=n=>pt(n)?n:n==null?"":Le(n)||et(n)&&(n.toString===Gu||!Oe(n.toString))?JSON.stringify(n,Bu,2):String(n),Bu=(n,e)=>e&&e.__v_isRef?Bu(n,e.value):qi(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r])=>(t[`${i} =>`]=r,t),{})}:to(e)?{[`Set(${e.size})`]:[...e.values()]}:et(e)&&!Le(e)&&!Vu(e)?String(e):e,Ze={},ji=[],un=()=>{},ih=()=>!1,rh=/^on[^a-z]/,eo=n=>rh.test(n),ja=n=>n.startsWith("onUpdate:"),Ct=Object.assign,qa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},sh=Object.prototype.hasOwnProperty,Ve=(n,e)=>sh.call(n,e),Le=Array.isArray,qi=n=>qr(n)==="[object Map]",to=n=>qr(n)==="[object Set]",bc=n=>qr(n)==="[object Date]",Oe=n=>typeof n=="function",pt=n=>typeof n=="string",Or=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",zu=n=>et(n)&&Oe(n.then)&&Oe(n.catch),Gu=Object.prototype.toString,qr=n=>Gu.call(n),oh=n=>qr(n).slice(8,-1),Vu=n=>qr(n)==="[object Object]",Xa=n=>pt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ps=Va(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),no=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},ah=/-(\w)/g,Ji=no(n=>n.replace(ah,(e,t)=>t?t.toUpperCase():"")),ch=/\B([A-Z])/g,sr=no(n=>n.replace(ch,"-$1").toLowerCase()),Hu=no(n=>n.charAt(0).toUpperCase()+n.slice(1)),bo=no(n=>n?`on${Hu(n)}`:""),Fr=(n,e)=>!Object.is(n,e),Ds=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Gs=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Vs=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Sc;const lh=()=>Sc||(Sc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let pn;class uh{constructor(e=!1){this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=pn,!e&&pn&&(this.index=(pn.scopes||(pn.scopes=[])).push(this)-1)}run(e){if(this.active){const t=pn;try{return pn=this,e()}finally{pn=t}}}on(){pn=this}off(){pn=this.parent}stop(e){if(this.active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this.active=!1}}}function fh(n,e=pn){e&&e.active&&e.effects.push(n)}const $a=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Wu=n=>(n.w&Yn)>0,ju=n=>(n.n&Yn)>0,dh=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Yn},hh=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Wu(r)&&!ju(r)?r.delete(n):e[t++]=r,r.w&=~Yn,r.n&=~Yn}e.length=t}},ha=new WeakMap;let Tr=0,Yn=1;const pa=30;let sn;const yi=Symbol(""),ma=Symbol("");class Ya{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,fh(this,i)}run(){if(!this.active)return this.fn();let e=sn,t=qn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=sn,sn=this,qn=!0,Yn=1<<++Tr,Tr<=pa?dh(this):Mc(this),this.fn()}finally{Tr<=pa&&hh(this),Yn=1<<--Tr,sn=this.parent,qn=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){sn===this?this.deferStop=!0:this.active&&(Mc(this),this.onStop&&this.onStop(),this.active=!1)}}function Mc(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let qn=!0;const qu=[];function or(){qu.push(qn),qn=!1}function ar(){const n=qu.pop();qn=n===void 0?!0:n}function Xt(n,e,t){if(qn&&sn){let i=ha.get(n);i||ha.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=$a()),Xu(r)}}function Xu(n,e){let t=!1;Tr<=pa?ju(n)||(n.n|=Yn,t=!Wu(n)):t=!n.has(sn),t&&(n.add(sn),sn.deps.push(n))}function Fn(n,e,t,i,r,s){const o=ha.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Le(n)){const c=Vs(i);o.forEach((l,u)=>{(u==="length"||u>=c)&&a.push(l)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Le(n)?Xa(t)&&a.push(o.get("length")):(a.push(o.get(yi)),qi(n)&&a.push(o.get(ma)));break;case"delete":Le(n)||(a.push(o.get(yi)),qi(n)&&a.push(o.get(ma)));break;case"set":qi(n)&&a.push(o.get(yi));break}if(a.length===1)a[0]&&ga(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);ga($a(c))}}function ga(n,e){const t=Le(n)?n:[...n];for(const i of t)i.computed&&Tc(i);for(const i of t)i.computed||Tc(i)}function Tc(n,e){(n!==sn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const ph=Va("__proto__,__v_isRef,__isVue"),$u=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Or)),mh=Ka(),gh=Ka(!1,!0),_h=Ka(!0),Cc=vh();function vh(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let s=0,o=this.length;s<o;s++)Xt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){or();const i=je(this)[e].apply(this,t);return ar(),i}}),n}function Ka(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?kh:Qu:e?Zu:Ju).get(i))return i;const o=Le(i);if(!n&&o&&Ve(Cc,r))return Reflect.get(Cc,r,s);const a=Reflect.get(i,r,s);return(Or(r)?$u.has(r):ph(r))||(n||Xt(i,"get",r),e)?a:Tt(a)?o&&Xa(r)?a:a.value:et(a)?n?ef(a):Qa(a):a}}const xh=Yu(),yh=Yu(!0);function Yu(n=!1){return function(t,i,r,s){let o=t[i];if(Zi(o)&&Tt(o)&&!Tt(r))return!1;if(!n&&(!Hs(r)&&!Zi(r)&&(o=je(o),r=je(r)),!Le(t)&&Tt(o)&&!Tt(r)))return o.value=r,!0;const a=Le(t)&&Xa(i)?Number(i)<t.length:Ve(t,i),c=Reflect.set(t,i,r,s);return t===je(s)&&(a?Fr(r,o)&&Fn(t,"set",i,r):Fn(t,"add",i,r)),c}}function bh(n,e){const t=Ve(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&Fn(n,"delete",e,void 0),i}function Sh(n,e){const t=Reflect.has(n,e);return(!Or(e)||!$u.has(e))&&Xt(n,"has",e),t}function Mh(n){return Xt(n,"iterate",Le(n)?"length":yi),Reflect.ownKeys(n)}const Ku={get:mh,set:xh,deleteProperty:bh,has:Sh,ownKeys:Mh},Th={get:_h,set(n,e){return!0},deleteProperty(n,e){return!0}},Ch=Ct({},Ku,{get:gh,set:yh}),Ja=n=>n,io=n=>Reflect.getPrototypeOf(n);function Jr(n,e,t=!1,i=!1){n=n.__v_raw;const r=je(n),s=je(e);t||(e!==s&&Xt(r,"get",e),Xt(r,"get",s));const{has:o}=io(r),a=i?Ja:t?tc:Nr;if(o.call(r,e))return a(n.get(e));if(o.call(r,s))return a(n.get(s));n!==r&&n.get(e)}function Zr(n,e=!1){const t=this.__v_raw,i=je(t),r=je(n);return e||(n!==r&&Xt(i,"has",n),Xt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Qr(n,e=!1){return n=n.__v_raw,!e&&Xt(je(n),"iterate",yi),Reflect.get(n,"size",n)}function Ec(n){n=je(n);const e=je(this);return io(e).has.call(e,n)||(e.add(n),Fn(e,"add",n,n)),this}function wc(n,e){e=je(e);const t=je(this),{has:i,get:r}=io(t);let s=i.call(t,n);s||(n=je(n),s=i.call(t,n));const o=r.call(t,n);return t.set(n,e),s?Fr(e,o)&&Fn(t,"set",n,e):Fn(t,"add",n,e),this}function Rc(n){const e=je(this),{has:t,get:i}=io(e);let r=t.call(e,n);r||(n=je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&Fn(e,"delete",n,void 0),s}function Ac(){const n=je(this),e=n.size!==0,t=n.clear();return e&&Fn(n,"clear",void 0,void 0),t}function es(n,e){return function(i,r){const s=this,o=s.__v_raw,a=je(o),c=e?Ja:n?tc:Nr;return!n&&Xt(a,"iterate",yi),o.forEach((l,u)=>i.call(r,c(l),c(u),s))}}function ts(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),o=qi(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,l=r[n](...i),u=t?Ja:e?tc:Nr;return!e&&Xt(s,"iterate",c?ma:yi),{next(){const{value:f,done:d}=l.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Un(n){return function(...e){return n==="delete"?!1:this}}function Eh(){const n={get(s){return Jr(this,s)},get size(){return Qr(this)},has:Zr,add:Ec,set:wc,delete:Rc,clear:Ac,forEach:es(!1,!1)},e={get(s){return Jr(this,s,!1,!0)},get size(){return Qr(this)},has:Zr,add:Ec,set:wc,delete:Rc,clear:Ac,forEach:es(!1,!0)},t={get(s){return Jr(this,s,!0)},get size(){return Qr(this,!0)},has(s){return Zr.call(this,s,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:es(!0,!1)},i={get(s){return Jr(this,s,!0,!0)},get size(){return Qr(this,!0)},has(s){return Zr.call(this,s,!0)},add:Un("add"),set:Un("set"),delete:Un("delete"),clear:Un("clear"),forEach:es(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=ts(s,!1,!1),t[s]=ts(s,!0,!1),e[s]=ts(s,!1,!0),i[s]=ts(s,!0,!0)}),[n,t,e,i]}const[wh,Rh,Ah,Ph]=Eh();function Za(n,e){const t=e?n?Ph:Ah:n?Rh:wh;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ve(t,r)&&r in i?t:i,r,s)}const Dh={get:Za(!1,!1)},Lh={get:Za(!1,!0)},Ih={get:Za(!0,!1)},Ju=new WeakMap,Zu=new WeakMap,Qu=new WeakMap,kh=new WeakMap;function Oh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Fh(n){return n.__v_skip||!Object.isExtensible(n)?0:Oh(oh(n))}function Qa(n){return Zi(n)?n:ec(n,!1,Ku,Dh,Ju)}function Nh(n){return ec(n,!1,Ch,Lh,Zu)}function ef(n){return ec(n,!0,Th,Ih,Qu)}function ec(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const o=Fh(n);if(o===0)return n;const a=new Proxy(n,o===2?i:t);return r.set(n,a),a}function Xi(n){return Zi(n)?Xi(n.__v_raw):!!(n&&n.__v_isReactive)}function Zi(n){return!!(n&&n.__v_isReadonly)}function Hs(n){return!!(n&&n.__v_isShallow)}function tf(n){return Xi(n)||Zi(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function nf(n){return Gs(n,"__v_skip",!0),n}const Nr=n=>et(n)?Qa(n):n,tc=n=>et(n)?ef(n):n;function rf(n){qn&&sn&&(n=je(n),Xu(n.dep||(n.dep=$a())))}function sf(n,e){n=je(n),n.dep&&ga(n.dep)}function Tt(n){return!!(n&&n.__v_isRef===!0)}function dn(n){return Uh(n,!1)}function Uh(n,e){return Tt(n)?n:new Bh(n,e)}class Bh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:Nr(e)}get value(){return rf(this),this._value}set value(e){const t=this.__v_isShallow||Hs(e)||Zi(e);e=t?e:je(e),Fr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Nr(e),sf(this))}}function zh(n){return Tt(n)?n.value:n}const Gh={get:(n,e,t)=>zh(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Tt(r)&&!Tt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function of(n){return Xi(n)?n:new Proxy(n,Gh)}var af;class Vh{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[af]=!1,this._dirty=!0,this.effect=new Ya(e,()=>{this._dirty||(this._dirty=!0,sf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return rf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}af="__v_isReadonly";function Hh(n,e,t=!1){let i,r;const s=Oe(n);return s?(i=n,r=un):(i=n.get,r=n.set),new Vh(i,r,s||!r,t)}function Xn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ro(s,e,t)}return r}function Qt(n,e,t,i){if(Oe(n)){const s=Xn(n,e,t,i);return s&&zu(s)&&s.catch(o=>{ro(o,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Qt(n[s],e,t,i));return r}function ro(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=t;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](n,o,a)===!1)return}s=s.parent}const c=e.appContext.config.errorHandler;if(c){Xn(c,null,10,[n,o,a]);return}}Wh(n,t,r,i)}function Wh(n,e,t,i=!0){console.error(n)}let Ur=!1,_a=!1;const Mt=[];let vn=0;const $i=[];let An=null,di=0;const cf=Promise.resolve();let nc=null;function jh(n){const e=nc||cf;return n?e.then(this?n.bind(this):n):e}function qh(n){let e=vn+1,t=Mt.length;for(;e<t;){const i=e+t>>>1;Br(Mt[i])<n?e=i+1:t=i}return e}function ic(n){(!Mt.length||!Mt.includes(n,Ur&&n.allowRecurse?vn+1:vn))&&(n.id==null?Mt.push(n):Mt.splice(qh(n.id),0,n),lf())}function lf(){!Ur&&!_a&&(_a=!0,nc=cf.then(ff))}function Xh(n){const e=Mt.indexOf(n);e>vn&&Mt.splice(e,1)}function $h(n){Le(n)?$i.push(...n):(!An||!An.includes(n,n.allowRecurse?di+1:di))&&$i.push(n),lf()}function Pc(n,e=Ur?vn+1:0){for(;e<Mt.length;e++){const t=Mt[e];t&&t.pre&&(Mt.splice(e,1),e--,t())}}function uf(n){if($i.length){const e=[...new Set($i)];if($i.length=0,An){An.push(...e);return}for(An=e,An.sort((t,i)=>Br(t)-Br(i)),di=0;di<An.length;di++)An[di]();An=null,di=0}}const Br=n=>n.id==null?1/0:n.id,Yh=(n,e)=>{const t=Br(n)-Br(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function ff(n){_a=!1,Ur=!0,Mt.sort(Yh);const e=un;try{for(vn=0;vn<Mt.length;vn++){const t=Mt[vn];t&&t.active!==!1&&Xn(t,null,14)}}finally{vn=0,Mt.length=0,uf(),Ur=!1,nc=null,(Mt.length||$i.length)&&ff()}}function Kh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ze;let r=t;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||Ze;d&&(r=t.map(p=>pt(p)?p.trim():p)),f&&(r=t.map(Vs))}let a,c=i[a=bo(e)]||i[a=bo(Ji(e))];!c&&s&&(c=i[a=bo(sr(e))]),c&&Qt(c,n,6,r);const l=i[a+"Once"];if(l){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Qt(l,n,6,r)}}function df(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!Oe(n)){const c=l=>{const u=df(l,e,!0);u&&(a=!0,Ct(o,u))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(et(n)&&i.set(n,null),null):(Le(s)?s.forEach(c=>o[c]=null):Ct(o,s),et(n)&&i.set(n,o),o)}function so(n,e){return!n||!eo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ve(n,e[0].toLowerCase()+e.slice(1))||Ve(n,sr(e))||Ve(n,e))}let Zt=null,hf=null;function Ws(n){const e=Zt;return Zt=n,hf=n&&n.type.__scopeId||null,e}function Jh(n,e=Zt,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Bc(-1);const s=Ws(e);let o;try{o=n(...r)}finally{Ws(s),i._d&&Bc(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function So(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:f,data:d,setupState:p,ctx:g,inheritAttrs:h}=n;let m,v;const S=Ws(n);try{if(t.shapeFlag&4){const C=r||i;m=gn(u.call(C,C,f,s,p,d,g)),v=c}else{const C=e;m=gn(C.length>1?C(s,{attrs:c,slots:a,emit:l}):C(s,null)),v=e.props?c:Zh(c)}}catch(C){Ir.length=0,ro(C,n,1),m=kn(fn)}let y=m;if(v&&h!==!1){const C=Object.keys(v),{shapeFlag:M}=y;C.length&&M&7&&(o&&C.some(ja)&&(v=Qh(v,o)),y=Kn(y,v))}return t.dirs&&(y=Kn(y),y.dirs=y.dirs?y.dirs.concat(t.dirs):t.dirs),t.transition&&(y.transition=t.transition),m=y,Ws(S),m}const Zh=n=>{let e;for(const t in n)(t==="class"||t==="style"||eo(t))&&((e||(e={}))[t]=n[t]);return e},Qh=(n,e)=>{const t={};for(const i in n)(!ja(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function ep(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Dc(i,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!so(l,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Dc(i,o,l):!0:!!o;return!1}function Dc(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!so(t,s))return!0}return!1}function tp({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const np=n=>n.__isSuspense;function ip(n,e){e&&e.pendingBranch?Le(n)?e.effects.push(...n):e.effects.push(n):$h(n)}function rp(n,e){if(gt){let t=gt.provides;const i=gt.parent&&gt.parent.provides;i===t&&(t=gt.provides=Object.create(i)),t[n]=e}}function Ls(n,e,t=!1){const i=gt||Zt;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Oe(e)?e.call(i.proxy):e}}const ns={};function Mo(n,e,t){return pf(n,e,t)}function pf(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:o}=Ze){const a=gt;let c,l=!1,u=!1;if(Tt(n)?(c=()=>n.value,l=Hs(n)):Xi(n)?(c=()=>n,i=!0):Le(n)?(u=!0,l=n.some(y=>Xi(y)||Hs(y)),c=()=>n.map(y=>{if(Tt(y))return y.value;if(Xi(y))return _i(y);if(Oe(y))return Xn(y,a,2)})):Oe(n)?e?c=()=>Xn(n,a,2):c=()=>{if(!(a&&a.isUnmounted))return f&&f(),Qt(n,a,3,[d])}:c=un,e&&i){const y=c;c=()=>_i(y())}let f,d=y=>{f=v.onStop=()=>{Xn(y,a,4)}},p;if(Gr)if(d=un,e?t&&Qt(e,a,3,[c(),u?[]:void 0,d]):c(),r==="sync"){const y=tm();p=y.__watcherHandles||(y.__watcherHandles=[])}else return un;let g=u?new Array(n.length).fill(ns):ns;const h=()=>{if(v.active)if(e){const y=v.run();(i||l||(u?y.some((C,M)=>Fr(C,g[M])):Fr(y,g)))&&(f&&f(),Qt(e,a,3,[y,g===ns?void 0:u&&g[0]===ns?[]:g,d]),g=y)}else v.run()};h.allowRecurse=!!e;let m;r==="sync"?m=h:r==="post"?m=()=>It(h,a&&a.suspense):(h.pre=!0,a&&(h.id=a.uid),m=()=>ic(h));const v=new Ya(c,m);e?t?h():g=v.run():r==="post"?It(v.run.bind(v),a&&a.suspense):v.run();const S=()=>{v.stop(),a&&a.scope&&qa(a.scope.effects,v)};return p&&p.push(S),S}function sp(n,e,t){const i=this.proxy,r=pt(n)?n.includes(".")?mf(i,n):()=>i[n]:n.bind(i,i);let s;Oe(e)?s=e:(s=e.handler,t=e);const o=gt;Qi(this);const a=pf(r,s.bind(i),t);return o?Qi(o):bi(),a}function mf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function _i(n,e){if(!et(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Tt(n))_i(n.value,e);else if(Le(n))for(let t=0;t<n.length;t++)_i(n[t],e);else if(to(n)||qi(n))n.forEach(t=>{_i(t,e)});else if(Vu(n))for(const t in n)_i(n[t],e);return n}function op(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rc(()=>{n.isMounted=!0}),xf(()=>{n.isUnmounting=!0}),n}const Yt=[Function,Array],ap={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Yt,onEnter:Yt,onAfterEnter:Yt,onEnterCancelled:Yt,onBeforeLeave:Yt,onLeave:Yt,onAfterLeave:Yt,onLeaveCancelled:Yt,onBeforeAppear:Yt,onAppear:Yt,onAfterAppear:Yt,onAppearCancelled:Yt},setup(n,{slots:e}){const t=Xp(),i=op();let r;return()=>{const s=e.default&&_f(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const h of s)if(h.type!==fn){o=h;break}}const a=je(n),{mode:c}=a;if(i.isLeaving)return To(o);const l=Lc(o);if(!l)return To(o);const u=va(l,a,i,t);xa(l,u);const f=t.subTree,d=f&&Lc(f);let p=!1;const{getTransitionKey:g}=l.type;if(g){const h=g();r===void 0?r=h:h!==r&&(r=h,p=!0)}if(d&&d.type!==fn&&(!hi(l,d)||p)){const h=va(d,a,i,t);if(xa(d,h),c==="out-in")return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,t.update.active!==!1&&t.update()},To(o);c==="in-out"&&l.type!==fn&&(h.delayLeave=(m,v,S)=>{const y=gf(i,d);y[String(d.key)]=d,m._leaveCb=()=>{v(),m._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=S})}return o}}},cp=ap;function gf(n,e){const{leavingVNodes:t}=n;let i=t.get(e.type);return i||(i=Object.create(null),t.set(e.type,i)),i}function va(n,e,t,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:h,onAppear:m,onAfterAppear:v,onAppearCancelled:S}=e,y=String(n.key),C=gf(t,n),M=(x,w)=>{x&&Qt(x,i,9,w)},P=(x,w)=>{const A=w[1];M(x,w),Le(x)?x.every(Q=>Q.length<=1)&&A():x.length<=1&&A()},I={mode:s,persisted:o,beforeEnter(x){let w=a;if(!t.isMounted)if(r)w=h||a;else return;x._leaveCb&&x._leaveCb(!0);const A=C[y];A&&hi(n,A)&&A.el._leaveCb&&A.el._leaveCb(),M(w,[x])},enter(x){let w=c,A=l,Q=u;if(!t.isMounted)if(r)w=m||c,A=v||l,Q=S||u;else return;let re=!1;const F=x._enterCb=k=>{re||(re=!0,k?M(Q,[x]):M(A,[x]),I.delayedLeave&&I.delayedLeave(),x._enterCb=void 0)};w?P(w,[x,F]):F()},leave(x,w){const A=String(n.key);if(x._enterCb&&x._enterCb(!0),t.isUnmounting)return w();M(f,[x]);let Q=!1;const re=x._leaveCb=F=>{Q||(Q=!0,w(),F?M(g,[x]):M(p,[x]),x._leaveCb=void 0,C[A]===n&&delete C[A])};C[A]=n,d?P(d,[x,re]):re()},clone(x){return va(x,e,t,i)}};return I}function To(n){if(oo(n))return n=Kn(n),n.children=null,n}function Lc(n){return oo(n)?n.children?n.children[0]:void 0:n}function xa(n,e){n.shapeFlag&6&&n.component?xa(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function _f(n,e=!1,t){let i=[],r=0;for(let s=0;s<n.length;s++){let o=n[s];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:s);o.type===rn?(o.patchFlag&128&&r++,i=i.concat(_f(o.children,e,a))):(e||o.type!==fn)&&i.push(a!=null?Kn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function lp(n){return Oe(n)?{setup:n,name:n.name}:n}const Is=n=>!!n.type.__asyncLoader,oo=n=>n.type.__isKeepAlive;function up(n,e){vf(n,"a",e)}function fp(n,e){vf(n,"da",e)}function vf(n,e,t=gt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(ao(e,i,t),t){let r=t.parent;for(;r&&r.parent;)oo(r.parent.vnode)&&dp(i,e,t,r),r=r.parent}}function dp(n,e,t,i){const r=ao(e,n,i,!0);yf(()=>{qa(i[e],r)},t)}function ao(n,e,t=gt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;or(),Qi(t);const a=Qt(e,t,n,o);return bi(),ar(),a});return i?r.unshift(s):r.push(s),s}}const Nn=n=>(e,t=gt)=>(!Gr||n==="sp")&&ao(n,(...i)=>e(...i),t),hp=Nn("bm"),rc=Nn("m"),pp=Nn("bu"),mp=Nn("u"),xf=Nn("bum"),yf=Nn("um"),gp=Nn("sp"),_p=Nn("rtg"),vp=Nn("rtc");function xp(n,e=gt){ao("ec",n,e)}function Bn(n,e){const t=Zt;if(t===null)return n;const i=uo(t)||t.proxy,r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[o,a,c,l=Ze]=e[s];o&&(Oe(o)&&(o={mounted:o,updated:o}),o.deep&&_i(a),r.push({dir:o,instance:i,value:a,oldValue:void 0,arg:c,modifiers:l}))}return n}function ni(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(or(),Qt(c,t,8,[n.el,a,n,e]),ar())}}const yp=Symbol(),ya=n=>n?Df(n)?uo(n)||n.proxy:ya(n.parent):null,Lr=Ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ya(n.parent),$root:n=>ya(n.root),$emit:n=>n.emit,$options:n=>sc(n),$forceUpdate:n=>n.f||(n.f=()=>ic(n.update)),$nextTick:n=>n.n||(n.n=jh.bind(n.proxy)),$watch:n=>sp.bind(n)}),Co=(n,e)=>n!==Ze&&!n.__isScriptSetup&&Ve(n,e),bp={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=n;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Co(i,e))return o[e]=1,i[e];if(r!==Ze&&Ve(r,e))return o[e]=2,r[e];if((l=n.propsOptions[0])&&Ve(l,e))return o[e]=3,s[e];if(t!==Ze&&Ve(t,e))return o[e]=4,t[e];ba&&(o[e]=0)}}const u=Lr[e];let f,d;if(u)return e==="$attrs"&&Xt(n,"get",e),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==Ze&&Ve(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,Ve(d,e))return d[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Co(r,e)?(r[e]=t,!0):i!==Ze&&Ve(i,e)?(i[e]=t,!0):Ve(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!t[o]||n!==Ze&&Ve(n,o)||Co(e,o)||(a=s[0])&&Ve(a,o)||Ve(i,o)||Ve(Lr,o)||Ve(r.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ve(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let ba=!0;function Sp(n){const e=sc(n),t=n.proxy,i=n.ctx;ba=!1,e.beforeCreate&&Ic(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:f,mounted:d,beforeUpdate:p,updated:g,activated:h,deactivated:m,beforeDestroy:v,beforeUnmount:S,destroyed:y,unmounted:C,render:M,renderTracked:P,renderTriggered:I,errorCaptured:x,serverPrefetch:w,expose:A,inheritAttrs:Q,components:re,directives:F,filters:k}=e;if(l&&Mp(l,i,null,n.appContext.config.unwrapInjectedRef),o)for(const $ in o){const B=o[$];Oe(B)&&(i[$]=B.bind(t))}if(r){const $=r.call(t,t);et($)&&(n.data=Qa($))}if(ba=!0,s)for(const $ in s){const B=s[$],ae=Oe(B)?B.bind(t,t):Oe(B.get)?B.get.bind(t,t):un,ce=!Oe(B)&&Oe(B.set)?B.set.bind(t):un,xe=Qp({get:ae,set:ce});Object.defineProperty(i,$,{enumerable:!0,configurable:!0,get:()=>xe.value,set:z=>xe.value=z})}if(a)for(const $ in a)bf(a[$],i,t,$);if(c){const $=Oe(c)?c.call(t):c;Reflect.ownKeys($).forEach(B=>{rp(B,$[B])})}u&&Ic(u,n,"c");function ne($,B){Le(B)?B.forEach(ae=>$(ae.bind(t))):B&&$(B.bind(t))}if(ne(hp,f),ne(rc,d),ne(pp,p),ne(mp,g),ne(up,h),ne(fp,m),ne(xp,x),ne(vp,P),ne(_p,I),ne(xf,S),ne(yf,C),ne(gp,w),Le(A))if(A.length){const $=n.exposed||(n.exposed={});A.forEach(B=>{Object.defineProperty($,B,{get:()=>t[B],set:ae=>t[B]=ae})})}else n.exposed||(n.exposed={});M&&n.render===un&&(n.render=M),Q!=null&&(n.inheritAttrs=Q),re&&(n.components=re),F&&(n.directives=F)}function Mp(n,e,t=un,i=!1){Le(n)&&(n=Sa(n));for(const r in n){const s=n[r];let o;et(s)?"default"in s?o=Ls(s.from||r,s.default,!0):o=Ls(s.from||r):o=Ls(s),Tt(o)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[r]=o}}function Ic(n,e,t){Qt(Le(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function bf(n,e,t,i){const r=i.includes(".")?mf(t,i):()=>t[i];if(pt(n)){const s=e[n];Oe(s)&&Mo(r,s)}else if(Oe(n))Mo(r,n.bind(t));else if(et(n))if(Le(n))n.forEach(s=>bf(s,e,t,i));else{const s=Oe(n.handler)?n.handler.bind(t):e[n.handler];Oe(s)&&Mo(r,s,n)}}function sc(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(l=>js(c,l,o,!0)),js(c,e,o)),et(e)&&s.set(e,c),c}function js(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&js(n,s,t,!0),r&&r.forEach(o=>js(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Tp[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Tp={data:kc,props:li,emits:li,methods:li,computed:li,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:li,directives:li,watch:Ep,provide:kc,inject:Cp};function kc(n,e){return e?n?function(){return Ct(Oe(n)?n.call(this,this):n,Oe(e)?e.call(this,this):e)}:e:n}function Cp(n,e){return li(Sa(n),Sa(e))}function Sa(n){if(Le(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function At(n,e){return n?[...new Set([].concat(n,e))]:e}function li(n,e){return n?Ct(Ct(Object.create(null),n),e):e}function Ep(n,e){if(!n)return e;if(!e)return n;const t=Ct(Object.create(null),n);for(const i in e)t[i]=At(n[i],e[i]);return t}function wp(n,e,t,i=!1){const r={},s={};Gs(s,lo,1),n.propsDefaults=Object.create(null),Sf(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:Nh(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Rp(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=je(r),[c]=n.propsOptions;let l=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(so(n.emitsOptions,d))continue;const p=e[d];if(c)if(Ve(s,d))p!==s[d]&&(s[d]=p,l=!0);else{const g=Ji(d);r[g]=Ma(c,a,g,p,n,!1)}else p!==s[d]&&(s[d]=p,l=!0)}}}else{Sf(n,e,r,s)&&(l=!0);let u;for(const f in a)(!e||!Ve(e,f)&&((u=sr(f))===f||!Ve(e,u)))&&(c?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=Ma(c,a,f,void 0,n,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ve(e,f))&&(delete s[f],l=!0)}l&&Fn(n,"set","$attrs")}function Sf(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ps(c))continue;const l=e[c];let u;r&&Ve(r,u=Ji(c))?!s||!s.includes(u)?t[u]=l:(a||(a={}))[u]=l:so(n.emitsOptions,c)||(!(c in i)||l!==i[c])&&(i[c]=l,o=!0)}if(s){const c=je(t),l=a||Ze;for(let u=0;u<s.length;u++){const f=s[u];t[f]=Ma(r,c,f,l[f],n,!Ve(l,f))}}return o}function Ma(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=Ve(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&Oe(c)){const{propsDefaults:l}=r;t in l?i=l[t]:(Qi(r),i=l[t]=c.call(null,e),bi())}else i=c}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===sr(t))&&(i=!0))}return i}function Mf(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let c=!1;if(!Oe(n)){const u=f=>{c=!0;const[d,p]=Mf(f,e,!0);Ct(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!c)return et(n)&&i.set(n,ji),ji;if(Le(s))for(let u=0;u<s.length;u++){const f=Ji(s[u]);Oc(f)&&(o[f]=Ze)}else if(s)for(const u in s){const f=Ji(u);if(Oc(f)){const d=s[u],p=o[f]=Le(d)||Oe(d)?{type:d}:Object.assign({},d);if(p){const g=Uc(Boolean,p.type),h=Uc(String,p.type);p[0]=g>-1,p[1]=h<0||g<h,(g>-1||Ve(p,"default"))&&a.push(f)}}}const l=[o,a];return et(n)&&i.set(n,l),l}function Oc(n){return n[0]!=="$"}function Fc(n){const e=n&&n.toString().match(/^\s*function (\w+)/);return e?e[1]:n===null?"null":""}function Nc(n,e){return Fc(n)===Fc(e)}function Uc(n,e){return Le(e)?e.findIndex(t=>Nc(t,n)):Oe(e)&&Nc(e,n)?0:-1}const Tf=n=>n[0]==="_"||n==="$stable",oc=n=>Le(n)?n.map(gn):[gn(n)],Ap=(n,e,t)=>{if(e._n)return e;const i=Jh((...r)=>oc(e(...r)),t);return i._c=!1,i},Cf=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Tf(r))continue;const s=n[r];if(Oe(s))e[r]=Ap(r,s,i);else if(s!=null){const o=oc(s);e[r]=()=>o}}},Ef=(n,e)=>{const t=oc(e);n.slots.default=()=>t},Pp=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),Gs(e,"_",t)):Cf(e,n.slots={})}else n.slots={},e&&Ef(n,e);Gs(n.slots,lo,1)},Dp=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=Ze;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:(Ct(r,e),!t&&a===1&&delete r._):(s=!e.$stable,Cf(e,r)),o=e}else e&&(Ef(n,e),o={default:1});if(s)for(const a in r)!Tf(a)&&!(a in o)&&delete r[a]};function wf(){return{app:null,config:{isNativeTag:ih,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Lp=0;function Ip(n,e){return function(i,r=null){Oe(i)||(i=Object.assign({},i)),r!=null&&!et(r)&&(r=null);const s=wf(),o=new Set;let a=!1;const c=s.app={_uid:Lp++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:nm,get config(){return s.config},set config(l){},use(l,...u){return o.has(l)||(l&&Oe(l.install)?(o.add(l),l.install(c,...u)):Oe(l)&&(o.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!a){const d=kn(i,r);return d.appContext=s,u&&e?e(d,l):n(d,l,f),a=!0,c._container=l,l.__vue_app__=c,uo(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c}};return c}}function Ta(n,e,t,i,r=!1){if(Le(n)){n.forEach((d,p)=>Ta(d,e&&(Le(e)?e[p]:e),t,i,r));return}if(Is(i)&&!r)return;const s=i.shapeFlag&4?uo(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:c}=n,l=e&&e.r,u=a.refs===Ze?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(pt(l)?(u[l]=null,Ve(f,l)&&(f[l]=null)):Tt(l)&&(l.value=null)),Oe(c))Xn(c,a,12,[o,u]);else{const d=pt(c),p=Tt(c);if(d||p){const g=()=>{if(n.f){const h=d?Ve(f,c)?f[c]:u[c]:c.value;r?Le(h)&&qa(h,s):Le(h)?h.includes(s)||h.push(s):d?(u[c]=[s],Ve(f,c)&&(f[c]=u[c])):(c.value=[s],n.k&&(u[n.k]=c.value))}else d?(u[c]=o,Ve(f,c)&&(f[c]=o)):p&&(c.value=o,n.k&&(u[n.k]=o))};o?(g.id=-1,It(g,t)):g()}}}const It=ip;function kp(n){return Op(n)}function Op(n,e){const t=lh();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:d,setScopeId:p=un,insertStaticContent:g}=n,h=(E,R,V,ee=null,X=null,se=null,le=!1,Z=null,de=!!R.dynamicChildren)=>{if(E===R)return;E&&!hi(E,R)&&(ee=Pe(E),z(E,X,se,!0),E=null),R.patchFlag===-2&&(de=!1,R.dynamicChildren=null);const{type:ie,ref:b,shapeFlag:_}=R;switch(ie){case co:m(E,R,V,ee);break;case fn:v(E,R,V,ee);break;case Eo:E==null&&S(R,V,ee,le);break;case rn:re(E,R,V,ee,X,se,le,Z,de);break;default:_&1?M(E,R,V,ee,X,se,le,Z,de):_&6?F(E,R,V,ee,X,se,le,Z,de):(_&64||_&128)&&ie.process(E,R,V,ee,X,se,le,Z,de,ge)}b!=null&&X&&Ta(b,E&&E.ref,se,R||E,!R)},m=(E,R,V,ee)=>{if(E==null)i(R.el=a(R.children),V,ee);else{const X=R.el=E.el;R.children!==E.children&&l(X,R.children)}},v=(E,R,V,ee)=>{E==null?i(R.el=c(R.children||""),V,ee):R.el=E.el},S=(E,R,V,ee)=>{[E.el,E.anchor]=g(E.children,R,V,ee,E.el,E.anchor)},y=({el:E,anchor:R},V,ee)=>{let X;for(;E&&E!==R;)X=d(E),i(E,V,ee),E=X;i(R,V,ee)},C=({el:E,anchor:R})=>{let V;for(;E&&E!==R;)V=d(E),r(E),E=V;r(R)},M=(E,R,V,ee,X,se,le,Z,de)=>{le=le||R.type==="svg",E==null?P(R,V,ee,X,se,le,Z,de):w(E,R,X,se,le,Z,de)},P=(E,R,V,ee,X,se,le,Z)=>{let de,ie;const{type:b,props:_,shapeFlag:L,transition:H,dirs:Y}=E;if(de=E.el=o(E.type,se,_&&_.is,_),L&8?u(de,E.children):L&16&&x(E.children,de,null,ee,X,se&&b!=="foreignObject",le,Z),Y&&ni(E,null,ee,"created"),_){for(const _e in _)_e!=="value"&&!Ps(_e)&&s(de,_e,null,_[_e],se,E.children,ee,X,N);"value"in _&&s(de,"value",null,_.value),(ie=_.onVnodeBeforeMount)&&hn(ie,ee,E)}I(de,E,E.scopeId,le,ee),Y&&ni(E,null,ee,"beforeMount");const oe=(!X||X&&!X.pendingBranch)&&H&&!H.persisted;oe&&H.beforeEnter(de),i(de,R,V),((ie=_&&_.onVnodeMounted)||oe||Y)&&It(()=>{ie&&hn(ie,ee,E),oe&&H.enter(de),Y&&ni(E,null,ee,"mounted")},X)},I=(E,R,V,ee,X)=>{if(V&&p(E,V),ee)for(let se=0;se<ee.length;se++)p(E,ee[se]);if(X){let se=X.subTree;if(R===se){const le=X.vnode;I(E,le,le.scopeId,le.slotScopeIds,X.parent)}}},x=(E,R,V,ee,X,se,le,Z,de=0)=>{for(let ie=de;ie<E.length;ie++){const b=E[ie]=Z?Wn(E[ie]):gn(E[ie]);h(null,b,R,V,ee,X,se,le,Z)}},w=(E,R,V,ee,X,se,le)=>{const Z=R.el=E.el;let{patchFlag:de,dynamicChildren:ie,dirs:b}=R;de|=E.patchFlag&16;const _=E.props||Ze,L=R.props||Ze;let H;V&&ii(V,!1),(H=L.onVnodeBeforeUpdate)&&hn(H,V,R,E),b&&ni(R,E,V,"beforeUpdate"),V&&ii(V,!0);const Y=X&&R.type!=="foreignObject";if(ie?A(E.dynamicChildren,ie,Z,V,ee,Y,se):le||B(E,R,Z,null,V,ee,Y,se,!1),de>0){if(de&16)Q(Z,R,_,L,V,ee,X);else if(de&2&&_.class!==L.class&&s(Z,"class",null,L.class,X),de&4&&s(Z,"style",_.style,L.style,X),de&8){const oe=R.dynamicProps;for(let _e=0;_e<oe.length;_e++){const fe=oe[_e],W=_[fe],Ce=L[fe];(Ce!==W||fe==="value")&&s(Z,fe,W,Ce,X,E.children,V,ee,N)}}de&1&&E.children!==R.children&&u(Z,R.children)}else!le&&ie==null&&Q(Z,R,_,L,V,ee,X);((H=L.onVnodeUpdated)||b)&&It(()=>{H&&hn(H,V,R,E),b&&ni(R,E,V,"updated")},ee)},A=(E,R,V,ee,X,se,le)=>{for(let Z=0;Z<R.length;Z++){const de=E[Z],ie=R[Z],b=de.el&&(de.type===rn||!hi(de,ie)||de.shapeFlag&70)?f(de.el):V;h(de,ie,b,null,ee,X,se,le,!0)}},Q=(E,R,V,ee,X,se,le)=>{if(V!==ee){if(V!==Ze)for(const Z in V)!Ps(Z)&&!(Z in ee)&&s(E,Z,V[Z],null,le,R.children,X,se,N);for(const Z in ee){if(Ps(Z))continue;const de=ee[Z],ie=V[Z];de!==ie&&Z!=="value"&&s(E,Z,ie,de,le,R.children,X,se,N)}"value"in ee&&s(E,"value",V.value,ee.value)}},re=(E,R,V,ee,X,se,le,Z,de)=>{const ie=R.el=E?E.el:a(""),b=R.anchor=E?E.anchor:a("");let{patchFlag:_,dynamicChildren:L,slotScopeIds:H}=R;H&&(Z=Z?Z.concat(H):H),E==null?(i(ie,V,ee),i(b,V,ee),x(R.children,V,b,X,se,le,Z,de)):_>0&&_&64&&L&&E.dynamicChildren?(A(E.dynamicChildren,L,V,X,se,le,Z),(R.key!=null||X&&R===X.subTree)&&Rf(E,R,!0)):B(E,R,V,b,X,se,le,Z,de)},F=(E,R,V,ee,X,se,le,Z,de)=>{R.slotScopeIds=Z,E==null?R.shapeFlag&512?X.ctx.activate(R,V,ee,le,de):k(R,V,ee,X,se,le,de):J(E,R,de)},k=(E,R,V,ee,X,se,le)=>{const Z=E.component=qp(E,ee,X);if(oo(E)&&(Z.ctx.renderer=ge),$p(Z),Z.asyncDep){if(X&&X.registerDep(Z,ne),!E.el){const de=Z.subTree=kn(fn);v(null,de,R,V)}return}ne(Z,E,R,V,X,se,le)},J=(E,R,V)=>{const ee=R.component=E.component;if(ep(E,R,V))if(ee.asyncDep&&!ee.asyncResolved){$(ee,R,V);return}else ee.next=R,Xh(ee.update),ee.update();else R.el=E.el,ee.vnode=R},ne=(E,R,V,ee,X,se,le)=>{const Z=()=>{if(E.isMounted){let{next:b,bu:_,u:L,parent:H,vnode:Y}=E,oe=b,_e;ii(E,!1),b?(b.el=Y.el,$(E,b,le)):b=Y,_&&Ds(_),(_e=b.props&&b.props.onVnodeBeforeUpdate)&&hn(_e,H,b,Y),ii(E,!0);const fe=So(E),W=E.subTree;E.subTree=fe,h(W,fe,f(W.el),Pe(W),E,X,se),b.el=fe.el,oe===null&&tp(E,fe.el),L&&It(L,X),(_e=b.props&&b.props.onVnodeUpdated)&&It(()=>hn(_e,H,b,Y),X)}else{let b;const{el:_,props:L}=R,{bm:H,m:Y,parent:oe}=E,_e=Is(R);if(ii(E,!1),H&&Ds(H),!_e&&(b=L&&L.onVnodeBeforeMount)&&hn(b,oe,R),ii(E,!0),_&&He){const fe=()=>{E.subTree=So(E),He(_,E.subTree,E,X,null)};_e?R.type.__asyncLoader().then(()=>!E.isUnmounted&&fe()):fe()}else{const fe=E.subTree=So(E);h(null,fe,V,ee,E,X,se),R.el=fe.el}if(Y&&It(Y,X),!_e&&(b=L&&L.onVnodeMounted)){const fe=R;It(()=>hn(b,oe,fe),X)}(R.shapeFlag&256||oe&&Is(oe.vnode)&&oe.vnode.shapeFlag&256)&&E.a&&It(E.a,X),E.isMounted=!0,R=V=ee=null}},de=E.effect=new Ya(Z,()=>ic(ie),E.scope),ie=E.update=()=>de.run();ie.id=E.uid,ii(E,!0),ie()},$=(E,R,V)=>{R.component=E;const ee=E.vnode.props;E.vnode=R,E.next=null,Rp(E,R.props,ee,V),Dp(E,R.children,V),or(),Pc(),ar()},B=(E,R,V,ee,X,se,le,Z,de=!1)=>{const ie=E&&E.children,b=E?E.shapeFlag:0,_=R.children,{patchFlag:L,shapeFlag:H}=R;if(L>0){if(L&128){ce(ie,_,V,ee,X,se,le,Z,de);return}else if(L&256){ae(ie,_,V,ee,X,se,le,Z,de);return}}H&8?(b&16&&N(ie,X,se),_!==ie&&u(V,_)):b&16?H&16?ce(ie,_,V,ee,X,se,le,Z,de):N(ie,X,se,!0):(b&8&&u(V,""),H&16&&x(_,V,ee,X,se,le,Z,de))},ae=(E,R,V,ee,X,se,le,Z,de)=>{E=E||ji,R=R||ji;const ie=E.length,b=R.length,_=Math.min(ie,b);let L;for(L=0;L<_;L++){const H=R[L]=de?Wn(R[L]):gn(R[L]);h(E[L],H,V,null,X,se,le,Z,de)}ie>b?N(E,X,se,!0,!1,_):x(R,V,ee,X,se,le,Z,de,_)},ce=(E,R,V,ee,X,se,le,Z,de)=>{let ie=0;const b=R.length;let _=E.length-1,L=b-1;for(;ie<=_&&ie<=L;){const H=E[ie],Y=R[ie]=de?Wn(R[ie]):gn(R[ie]);if(hi(H,Y))h(H,Y,V,null,X,se,le,Z,de);else break;ie++}for(;ie<=_&&ie<=L;){const H=E[_],Y=R[L]=de?Wn(R[L]):gn(R[L]);if(hi(H,Y))h(H,Y,V,null,X,se,le,Z,de);else break;_--,L--}if(ie>_){if(ie<=L){const H=L+1,Y=H<b?R[H].el:ee;for(;ie<=L;)h(null,R[ie]=de?Wn(R[ie]):gn(R[ie]),V,Y,X,se,le,Z,de),ie++}}else if(ie>L)for(;ie<=_;)z(E[ie],X,se,!0),ie++;else{const H=ie,Y=ie,oe=new Map;for(ie=Y;ie<=L;ie++){const ye=R[ie]=de?Wn(R[ie]):gn(R[ie]);ye.key!=null&&oe.set(ye.key,ie)}let _e,fe=0;const W=L-Y+1;let Ce=!1,Ae=0;const Me=new Array(W);for(ie=0;ie<W;ie++)Me[ie]=0;for(ie=H;ie<=_;ie++){const ye=E[ie];if(fe>=W){z(ye,X,se,!0);continue}let Ie;if(ye.key!=null)Ie=oe.get(ye.key);else for(_e=Y;_e<=L;_e++)if(Me[_e-Y]===0&&hi(ye,R[_e])){Ie=_e;break}Ie===void 0?z(ye,X,se,!0):(Me[Ie-Y]=ie+1,Ie>=Ae?Ae=Ie:Ce=!0,h(ye,R[Ie],V,null,X,se,le,Z,de),fe++)}const we=Ce?Fp(Me):ji;for(_e=we.length-1,ie=W-1;ie>=0;ie--){const ye=Y+ie,Ie=R[ye],$e=ye+1<b?R[ye+1].el:ee;Me[ie]===0?h(null,Ie,V,$e,X,se,le,Z,de):Ce&&(_e<0||ie!==we[_e]?xe(Ie,V,$e,2):_e--)}}},xe=(E,R,V,ee,X=null)=>{const{el:se,type:le,transition:Z,children:de,shapeFlag:ie}=E;if(ie&6){xe(E.component.subTree,R,V,ee);return}if(ie&128){E.suspense.move(R,V,ee);return}if(ie&64){le.move(E,R,V,ge);return}if(le===rn){i(se,R,V);for(let _=0;_<de.length;_++)xe(de[_],R,V,ee);i(E.anchor,R,V);return}if(le===Eo){y(E,R,V);return}if(ee!==2&&ie&1&&Z)if(ee===0)Z.beforeEnter(se),i(se,R,V),It(()=>Z.enter(se),X);else{const{leave:_,delayLeave:L,afterLeave:H}=Z,Y=()=>i(se,R,V),oe=()=>{_(se,()=>{Y(),H&&H()})};L?L(se,Y,oe):oe()}else i(se,R,V)},z=(E,R,V,ee=!1,X=!1)=>{const{type:se,props:le,ref:Z,children:de,dynamicChildren:ie,shapeFlag:b,patchFlag:_,dirs:L}=E;if(Z!=null&&Ta(Z,null,V,E,!0),b&256){R.ctx.deactivate(E);return}const H=b&1&&L,Y=!Is(E);let oe;if(Y&&(oe=le&&le.onVnodeBeforeUnmount)&&hn(oe,R,E),b&6)pe(E.component,V,ee);else{if(b&128){E.suspense.unmount(V,ee);return}H&&ni(E,null,R,"beforeUnmount"),b&64?E.type.remove(E,R,V,X,ge,ee):ie&&(se!==rn||_>0&&_&64)?N(ie,R,V,!1,!0):(se===rn&&_&384||!X&&b&16)&&N(de,R,V),ee&&te(E)}(Y&&(oe=le&&le.onVnodeUnmounted)||H)&&It(()=>{oe&&hn(oe,R,E),H&&ni(E,null,R,"unmounted")},V)},te=E=>{const{type:R,el:V,anchor:ee,transition:X}=E;if(R===rn){he(V,ee);return}if(R===Eo){C(E);return}const se=()=>{r(V),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(E.shapeFlag&1&&X&&!X.persisted){const{leave:le,delayLeave:Z}=X,de=()=>le(V,se);Z?Z(E.el,se,de):de()}else se()},he=(E,R)=>{let V;for(;E!==R;)V=d(E),r(E),E=V;r(R)},pe=(E,R,V)=>{const{bum:ee,scope:X,update:se,subTree:le,um:Z}=E;ee&&Ds(ee),X.stop(),se&&(se.active=!1,z(le,E,R,V)),Z&&It(Z,R),It(()=>{E.isUnmounted=!0},R),R&&R.pendingBranch&&!R.isUnmounted&&E.asyncDep&&!E.asyncResolved&&E.suspenseId===R.pendingId&&(R.deps--,R.deps===0&&R.resolve())},N=(E,R,V,ee=!1,X=!1,se=0)=>{for(let le=se;le<E.length;le++)z(E[le],R,V,ee,X)},Pe=E=>E.shapeFlag&6?Pe(E.component.subTree):E.shapeFlag&128?E.suspense.next():d(E.anchor||E.el),Te=(E,R,V)=>{E==null?R._vnode&&z(R._vnode,null,null,!0):h(R._vnode||null,E,R,null,null,null,V),Pc(),uf(),R._vnode=E},ge={p:h,um:z,m:xe,r:te,mt:k,mc:x,pc:B,pbc:A,n:Pe,o:n};let ve,He;return e&&([ve,He]=e(ge)),{render:Te,hydrate:ve,createApp:Ip(Te,ve)}}function ii({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Rf(n,e,t=!1){const i=n.children,r=e.children;if(Le(i)&&Le(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Wn(r[s]),a.el=o.el),t||Rf(o,a)),a.type===co&&(a.el=o.el)}}function Fp(n){const e=n.slice(),t=[0];let i,r,s,o,a;const c=n.length;for(i=0;i<c;i++){const l=n[i];if(l!==0){if(r=t[t.length-1],n[r]<l){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<l?s=a+1:o=a;l<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}const Np=n=>n.__isTeleport,rn=Symbol(void 0),co=Symbol(void 0),fn=Symbol(void 0),Eo=Symbol(void 0),Ir=[];let ln=null;function Cr(n=!1){Ir.push(ln=n?null:[])}function Up(){Ir.pop(),ln=Ir[Ir.length-1]||null}let zr=1;function Bc(n){zr+=n}function Af(n){return n.dynamicChildren=zr>0?ln||ji:null,Up(),zr>0&&ln&&ln.push(n),n}function is(n,e,t,i,r,s){return Af(dt(n,e,t,i,r,s,!0))}function Bp(n,e,t,i,r){return Af(kn(n,e,t,i,r,!0))}function zp(n){return n?n.__v_isVNode===!0:!1}function hi(n,e){return n.type===e.type&&n.key===e.key}const lo="__vInternal",Pf=({key:n})=>n??null,ks=({ref:n,ref_key:e,ref_for:t})=>n!=null?pt(n)||Tt(n)||Oe(n)?{i:Zt,r:n,k:e,f:!!t}:n:null;function dt(n,e=null,t=null,i=0,r=null,s=n===rn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Pf(e),ref:e&&ks(e),scopeId:hf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Zt};return a?(ac(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=pt(t)?8:16),zr>0&&!o&&ln&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&ln.push(c),c}const kn=Gp;function Gp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===yp)&&(n=fn),zp(n)){const a=Kn(n,e,!0);return t&&ac(a,t),zr>0&&!s&&ln&&(a.shapeFlag&6?ln[ln.indexOf(n)]=a:ln.push(a)),a.patchFlag|=-2,a}if(Zp(n)&&(n=n.__vccOpts),e){e=Vp(e);let{class:a,style:c}=e;a&&!pt(a)&&(e.class=Wa(a)),et(c)&&(tf(c)&&!Le(c)&&(c=Ct({},c)),e.style=Ha(c))}const o=pt(n)?1:np(n)?128:Np(n)?64:et(n)?4:Oe(n)?2:0;return dt(n,e,t,i,r,o,s,!0)}function Vp(n){return n?tf(n)||lo in n?Ct({},n):n:null}function Kn(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:o}=n,a=e?Hp(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Pf(a),ref:e&&e.ref?t&&r?Le(r)?r.concat(ks(e)):[r,ks(e)]:ks(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==rn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Kn(n.ssContent),ssFallback:n.ssFallback&&Kn(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx}}function Vi(n=" ",e=0){return kn(co,null,n,e)}function wo(n="",e=!1){return e?(Cr(),Bp(fn,null,n)):kn(fn,null,n)}function gn(n){return n==null||typeof n=="boolean"?kn(fn):Le(n)?kn(rn,null,n.slice()):typeof n=="object"?Wn(n):kn(co,null,String(n))}function Wn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Kn(n)}function ac(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Le(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ac(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(lo in e)?e._ctx=Zt:r===3&&Zt&&(Zt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Oe(e)?(e={default:e,_ctx:Zt},t=32):(e=String(e),i&64?(t=16,e=[Vi(e)]):t=8);n.children=e,n.shapeFlag|=t}function Hp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Wa([e.class,i.class]));else if(r==="style")e.style=Ha([e.style,i.style]);else if(eo(r)){const s=e[r],o=i[r];o&&s!==o&&!(Le(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function hn(n,e,t,i=null){Qt(n,e,7,[t,i])}const Wp=wf();let jp=0;function qp(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Wp,s={uid:jp++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new uh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Mf(i,r),emitsOptions:df(i,r),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Kh.bind(null,s),n.ce&&n.ce(s),s}let gt=null;const Xp=()=>gt||Zt,Qi=n=>{gt=n,n.scope.on()},bi=()=>{gt&&gt.scope.off(),gt=null};function Df(n){return n.vnode.shapeFlag&4}let Gr=!1;function $p(n,e=!1){Gr=e;const{props:t,children:i}=n.vnode,r=Df(n);wp(n,t,r,e),Pp(n,i);const s=r?Yp(n,e):void 0;return Gr=!1,s}function Yp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=nf(new Proxy(n.ctx,bp));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Jp(n):null;Qi(n),or();const s=Xn(i,n,0,[n.props,r]);if(ar(),bi(),zu(s)){if(s.then(bi,bi),e)return s.then(o=>{zc(n,o,e)}).catch(o=>{ro(o,n,0)});n.asyncDep=s}else zc(n,s,e)}else Lf(n,e)}function zc(n,e,t){Oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=of(e)),Lf(n,t)}let Gc;function Lf(n,e,t){const i=n.type;if(!n.render){if(!e&&Gc&&!i.render){const r=i.template||sc(n).template;if(r){const{isCustomElement:s,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=i,l=Ct(Ct({isCustomElement:s,delimiters:a},o),c);i.render=Gc(r,l)}}n.render=i.render||un}Qi(n),or(),Sp(n),ar(),bi()}function Kp(n){return new Proxy(n.attrs,{get(e,t){return Xt(n,"get","$attrs"),e[t]}})}function Jp(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Kp(n))},slots:n.slots,emit:n.emit,expose:e}}function uo(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(of(nf(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Lr)return Lr[t](n)},has(e,t){return t in e||t in Lr}}))}function Zp(n){return Oe(n)&&"__vccOpts"in n}const Qp=(n,e)=>Hh(n,e,Gr),em=Symbol(""),tm=()=>Ls(em),nm="3.2.45",im="http://www.w3.org/2000/svg",pi=typeof document<"u"?document:null,Vc=pi&&pi.createElement("template"),rm={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?pi.createElementNS(im,n):pi.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>pi.createTextNode(n),createComment:n=>pi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>pi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{Vc.innerHTML=i?`<svg>${n}</svg>`:n;const a=Vc.content;if(i){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function sm(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function om(n,e,t){const i=n.style,r=pt(t);if(t&&!r){for(const s in t)Ca(i,s,t[s]);if(e&&!pt(e))for(const s in e)t[s]==null&&Ca(i,s,"")}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Hc=/\s*!important$/;function Ca(n,e,t){if(Le(t))t.forEach(i=>Ca(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=am(n,e);Hc.test(t)?n.setProperty(sr(i),t.replace(Hc,""),"important"):n[i]=t}}const Wc=["Webkit","Moz","ms"],Ro={};function am(n,e){const t=Ro[e];if(t)return t;let i=Ji(e);if(i!=="filter"&&i in n)return Ro[e]=i;i=Hu(i);for(let r=0;r<Wc.length;r++){const s=Wc[r]+i;if(s in n)return Ro[e]=s}return e}const jc="http://www.w3.org/1999/xlink";function cm(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(jc,e.slice(6,e.length)):n.setAttributeNS(jc,e,t);else{const s=th(e);t==null||s&&!Nu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function lm(n,e,t,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const c=t??"";(n.value!==c||n.tagName==="OPTION")&&(n.value=c),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=Nu(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function mi(n,e,t,i){n.addEventListener(e,t,i)}function um(n,e,t,i){n.removeEventListener(e,t,i)}function fm(n,e,t,i,r=null){const s=n._vei||(n._vei={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=dm(e);if(i){const l=s[e]=mm(i,r);mi(n,a,l,c)}else o&&(um(n,a,o,c),s[e]=void 0)}}const qc=/(?:Once|Passive|Capture)$/;function dm(n){let e;if(qc.test(n)){e={};let i;for(;i=n.match(qc);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):sr(n.slice(2)),e]}let Ao=0;const hm=Promise.resolve(),pm=()=>Ao||(hm.then(()=>Ao=0),Ao=Date.now());function mm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Qt(gm(i,t.value),e,5,[i])};return t.value=n,t.attached=pm(),t}function gm(n,e){if(Le(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Xc=/^on[a-z]/,_m=(n,e,t,i,r=!1,s,o,a,c)=>{e==="class"?sm(n,i,r):e==="style"?om(n,t,i):eo(e)?ja(e)||fm(n,e,t,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vm(n,e,i,r))?lm(n,e,i,s,o,a,c):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),cm(n,e,i,r))};function vm(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&Xc.test(e)&&Oe(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Xc.test(e)&&pt(t)?!1:e in n}const xm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};cp.props;const qs=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Le(e)?t=>Ds(e,t):e};function ym(n){n.target.composing=!0}function $c(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const rs={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n._assign=qs(r);const s=i||r.props&&r.props.type==="number";mi(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),s&&(a=Vs(a)),n._assign(a)}),t&&mi(n,"change",()=>{n.value=n.value.trim()}),e||(mi(n,"compositionstart",ym),mi(n,"compositionend",$c),mi(n,"change",$c))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:i,number:r}},s){if(n._assign=qs(s),n.composing||document.activeElement===n&&n.type!=="range"&&(t||i&&n.value.trim()===e||(r||n.type==="number")&&Vs(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},bm={deep:!0,created(n,e,t){n._assign=qs(t),mi(n,"change",()=>{const i=n._modelValue,r=Sm(n),s=n.checked,o=n._assign;if(Le(i)){const a=Uu(i,r),c=a!==-1;if(s&&!c)o(i.concat(r));else if(!s&&c){const l=[...i];l.splice(a,1),o(l)}}else if(to(i)){const a=new Set(i);s?a.add(r):a.delete(r),o(a)}else o(If(n,s))})},mounted:Yc,beforeUpdate(n,e,t){n._assign=qs(t),Yc(n,e,t)}};function Yc(n,{value:e,oldValue:t},i){n._modelValue=e,Le(e)?n.checked=Uu(e,i.props.value)>-1:to(e)?n.checked=e.has(i.props.value):e!==t&&(n.checked=Qs(e,If(n,!0)))}function Sm(n){return"_value"in n?n._value:n.value}function If(n,e){const t=e?"_trueValue":"_falseValue";return t in n?n[t]:e}const Po={beforeMount(n,{value:e},{transition:t}){n._vod=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):pr(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),pr(n,!0),i.enter(n)):i.leave(n,()=>{pr(n,!1)}):pr(n,e))},beforeUnmount(n,{value:e}){pr(n,e)}};function pr(n,e){n.style.display=e?n._vod:"none"}const Mm=Ct({patchProp:_m},rm);let Kc;function Tm(){return Kc||(Kc=kp(Mm))}const Cm=(...n)=>{const e=Tm().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Em(i);if(!r)return;const s=e._component;!Oe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function Em(n){return pt(n)?document.querySelector(n):n}var Xs={},wm={get exports(){return Xs},set exports(n){Xs=n}};(function(n){var e={};e.useBlobBuilder=function(){try{return new Blob([]),!1}catch{return!0}}(),e.useArrayBufferView=!e.useBlobBuilder&&function(){try{return new Blob([new Uint8Array([])]).size===0}catch{return!0}}(),n.exports.binaryFeatures=e;var t=n.exports.BlobBuilder;typeof window<"u"&&(t=n.exports.BlobBuilder=window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder||window.BlobBuilder);function i(){this._pieces=[],this._parts=[]}i.prototype.append=function(r){typeof r=="number"?this._pieces.push(r):(this.flush(),this._parts.push(r))},i.prototype.flush=function(){if(this._pieces.length>0){var r=new Uint8Array(this._pieces);e.useArrayBufferView||(r=r.buffer),this._parts.push(r),this._pieces=[]}},i.prototype.getBuffer=function(){if(this.flush(),e.useBlobBuilder){for(var r=new t,s=0,o=this._parts.length;s<o;s++)r.append(this._parts[s]);return r.getBlob()}else return new Blob(this._parts)},n.exports.BufferBuilder=i})(wm);var Rm=Xs.BufferBuilder,Jc=Xs.binaryFeatures,Am={unpack:function(n){var e=new vt(n);return e.unpack()},pack:function(n){var e=new xt;e.pack(n);var t=e.getBuffer();return t}},Zc=Am;function vt(n){this.index=0,this.dataBuffer=n,this.dataView=new Uint8Array(this.dataBuffer),this.length=this.dataBuffer.byteLength}vt.prototype.unpack=function(){var n=this.unpack_uint8();if(n<128)return n;if((n^224)<32)return(n^224)-32;var e;if((e=n^160)<=15)return this.unpack_raw(e);if((e=n^176)<=15)return this.unpack_string(e);if((e=n^144)<=15)return this.unpack_array(e);if((e=n^128)<=15)return this.unpack_map(e);switch(n){case 192:return null;case 193:return;case 194:return!1;case 195:return!0;case 202:return this.unpack_float();case 203:return this.unpack_double();case 204:return this.unpack_uint8();case 205:return this.unpack_uint16();case 206:return this.unpack_uint32();case 207:return this.unpack_uint64();case 208:return this.unpack_int8();case 209:return this.unpack_int16();case 210:return this.unpack_int32();case 211:return this.unpack_int64();case 212:return;case 213:return;case 214:return;case 215:return;case 216:return e=this.unpack_uint16(),this.unpack_string(e);case 217:return e=this.unpack_uint32(),this.unpack_string(e);case 218:return e=this.unpack_uint16(),this.unpack_raw(e);case 219:return e=this.unpack_uint32(),this.unpack_raw(e);case 220:return e=this.unpack_uint16(),this.unpack_array(e);case 221:return e=this.unpack_uint32(),this.unpack_array(e);case 222:return e=this.unpack_uint16(),this.unpack_map(e);case 223:return e=this.unpack_uint32(),this.unpack_map(e)}};vt.prototype.unpack_uint8=function(){var n=this.dataView[this.index]&255;return this.index++,n};vt.prototype.unpack_uint16=function(){var n=this.read(2),e=(n[0]&255)*256+(n[1]&255);return this.index+=2,e};vt.prototype.unpack_uint32=function(){var n=this.read(4),e=((n[0]*256+n[1])*256+n[2])*256+n[3];return this.index+=4,e};vt.prototype.unpack_uint64=function(){var n=this.read(8),e=((((((n[0]*256+n[1])*256+n[2])*256+n[3])*256+n[4])*256+n[5])*256+n[6])*256+n[7];return this.index+=8,e};vt.prototype.unpack_int8=function(){var n=this.unpack_uint8();return n<128?n:n-(1<<8)};vt.prototype.unpack_int16=function(){var n=this.unpack_uint16();return n<32768?n:n-(1<<16)};vt.prototype.unpack_int32=function(){var n=this.unpack_uint32();return n<Math.pow(2,31)?n:n-Math.pow(2,32)};vt.prototype.unpack_int64=function(){var n=this.unpack_uint64();return n<Math.pow(2,63)?n:n-Math.pow(2,64)};vt.prototype.unpack_raw=function(n){if(this.length<this.index+n)throw new Error("BinaryPackFailure: index is out of range "+this.index+" "+n+" "+this.length);var e=this.dataBuffer.slice(this.index,this.index+n);return this.index+=n,e};vt.prototype.unpack_string=function(n){for(var e=this.read(n),t=0,i="",r,s;t<n;)r=e[t],r<128?(i+=String.fromCharCode(r),t++):(r^192)<32?(s=(r^192)<<6|e[t+1]&63,i+=String.fromCharCode(s),t+=2):(s=(r&15)<<12|(e[t+1]&63)<<6|e[t+2]&63,i+=String.fromCharCode(s),t+=3);return this.index+=n,i};vt.prototype.unpack_array=function(n){for(var e=new Array(n),t=0;t<n;t++)e[t]=this.unpack();return e};vt.prototype.unpack_map=function(n){for(var e={},t=0;t<n;t++){var i=this.unpack(),r=this.unpack();e[i]=r}return e};vt.prototype.unpack_float=function(){var n=this.unpack_uint32(),e=n>>31,t=(n>>23&255)-127,i=n&8388607|8388608;return(e===0?1:-1)*i*Math.pow(2,t-23)};vt.prototype.unpack_double=function(){var n=this.unpack_uint32(),e=this.unpack_uint32(),t=n>>31,i=(n>>20&2047)-1023,r=n&1048575|1048576,s=r*Math.pow(2,i-20)+e*Math.pow(2,i-52);return(t===0?1:-1)*s};vt.prototype.read=function(n){var e=this.index;if(e+n<=this.length)return this.dataView.subarray(e,e+n);throw new Error("BinaryPackFailure: read index out of range")};function xt(){this.bufferBuilder=new Rm}xt.prototype.getBuffer=function(){return this.bufferBuilder.getBuffer()};xt.prototype.pack=function(n){var e=typeof n;if(e==="string")this.pack_string(n);else if(e==="number")Math.floor(n)===n?this.pack_integer(n):this.pack_double(n);else if(e==="boolean")n===!0?this.bufferBuilder.append(195):n===!1&&this.bufferBuilder.append(194);else if(e==="undefined")this.bufferBuilder.append(192);else if(e==="object")if(n===null)this.bufferBuilder.append(192);else{var t=n.constructor;if(t==Array)this.pack_array(n);else if(t==Blob||t==File||n instanceof Blob||n instanceof File)this.pack_bin(n);else if(t==ArrayBuffer)Jc.useArrayBufferView?this.pack_bin(new Uint8Array(n)):this.pack_bin(n);else if("BYTES_PER_ELEMENT"in n)Jc.useArrayBufferView?this.pack_bin(new Uint8Array(n.buffer)):this.pack_bin(n.buffer);else if(t==Object||t.toString().startsWith("class"))this.pack_object(n);else if(t==Date)this.pack_string(n.toString());else if(typeof n.toBinaryPack=="function")this.bufferBuilder.append(n.toBinaryPack());else throw new Error('Type "'+t.toString()+'" not yet supported')}else throw new Error('Type "'+e+'" not yet supported');this.bufferBuilder.flush()};xt.prototype.pack_bin=function(n){var e=n.length||n.byteLength||n.size;if(e<=15)this.pack_uint8(160+e);else if(e<=65535)this.bufferBuilder.append(218),this.pack_uint16(e);else if(e<=4294967295)this.bufferBuilder.append(219),this.pack_uint32(e);else throw new Error("Invalid length");this.bufferBuilder.append(n)};xt.prototype.pack_string=function(n){var e=Dm(n);if(e<=15)this.pack_uint8(176+e);else if(e<=65535)this.bufferBuilder.append(216),this.pack_uint16(e);else if(e<=4294967295)this.bufferBuilder.append(217),this.pack_uint32(e);else throw new Error("Invalid length");this.bufferBuilder.append(n)};xt.prototype.pack_array=function(n){var e=n.length;if(e<=15)this.pack_uint8(144+e);else if(e<=65535)this.bufferBuilder.append(220),this.pack_uint16(e);else if(e<=4294967295)this.bufferBuilder.append(221),this.pack_uint32(e);else throw new Error("Invalid length");for(var t=0;t<e;t++)this.pack(n[t])};xt.prototype.pack_integer=function(n){if(n>=-32&&n<=127)this.bufferBuilder.append(n&255);else if(n>=0&&n<=255)this.bufferBuilder.append(204),this.pack_uint8(n);else if(n>=-128&&n<=127)this.bufferBuilder.append(208),this.pack_int8(n);else if(n>=0&&n<=65535)this.bufferBuilder.append(205),this.pack_uint16(n);else if(n>=-32768&&n<=32767)this.bufferBuilder.append(209),this.pack_int16(n);else if(n>=0&&n<=4294967295)this.bufferBuilder.append(206),this.pack_uint32(n);else if(n>=-2147483648&&n<=2147483647)this.bufferBuilder.append(210),this.pack_int32(n);else if(n>=-9223372036854776e3&&n<=9223372036854776e3)this.bufferBuilder.append(211),this.pack_int64(n);else if(n>=0&&n<=18446744073709552e3)this.bufferBuilder.append(207),this.pack_uint64(n);else throw new Error("Invalid integer")};xt.prototype.pack_double=function(n){var e=0;n<0&&(e=1,n=-n);var t=Math.floor(Math.log(n)/Math.LN2),i=n/Math.pow(2,t)-1,r=Math.floor(i*Math.pow(2,52)),s=Math.pow(2,32),o=e<<31|t+1023<<20|r/s&1048575,a=r%s;this.bufferBuilder.append(203),this.pack_int32(o),this.pack_int32(a)};xt.prototype.pack_object=function(n){var e=Object.keys(n),t=e.length;if(t<=15)this.pack_uint8(128+t);else if(t<=65535)this.bufferBuilder.append(222),this.pack_uint16(t);else if(t<=4294967295)this.bufferBuilder.append(223),this.pack_uint32(t);else throw new Error("Invalid length");for(var i in n)n.hasOwnProperty(i)&&(this.pack(i),this.pack(n[i]))};xt.prototype.pack_uint8=function(n){this.bufferBuilder.append(n)};xt.prototype.pack_uint16=function(n){this.bufferBuilder.append(n>>8),this.bufferBuilder.append(n&255)};xt.prototype.pack_uint32=function(n){var e=n&4294967295;this.bufferBuilder.append((e&4278190080)>>>24),this.bufferBuilder.append((e&16711680)>>>16),this.bufferBuilder.append((e&65280)>>>8),this.bufferBuilder.append(e&255)};xt.prototype.pack_uint64=function(n){var e=n/Math.pow(2,32),t=n%Math.pow(2,32);this.bufferBuilder.append((e&4278190080)>>>24),this.bufferBuilder.append((e&16711680)>>>16),this.bufferBuilder.append((e&65280)>>>8),this.bufferBuilder.append(e&255),this.bufferBuilder.append((t&4278190080)>>>24),this.bufferBuilder.append((t&16711680)>>>16),this.bufferBuilder.append((t&65280)>>>8),this.bufferBuilder.append(t&255)};xt.prototype.pack_int8=function(n){this.bufferBuilder.append(n&255)};xt.prototype.pack_int16=function(n){this.bufferBuilder.append((n&65280)>>8),this.bufferBuilder.append(n&255)};xt.prototype.pack_int32=function(n){this.bufferBuilder.append(n>>>24&255),this.bufferBuilder.append((n&16711680)>>>16),this.bufferBuilder.append((n&65280)>>>8),this.bufferBuilder.append(n&255)};xt.prototype.pack_int64=function(n){var e=Math.floor(n/Math.pow(2,32)),t=n%Math.pow(2,32);this.bufferBuilder.append((e&4278190080)>>>24),this.bufferBuilder.append((e&16711680)>>>16),this.bufferBuilder.append((e&65280)>>>8),this.bufferBuilder.append(e&255),this.bufferBuilder.append((t&4278190080)>>>24),this.bufferBuilder.append((t&16711680)>>>16),this.bufferBuilder.append((t&65280)>>>8),this.bufferBuilder.append(t&255)};function Pm(n){var e=n.charCodeAt(0);return e<=2047?"00":e<=65535?"000":e<=2097151?"0000":e<=67108863?"00000":"000000"}function Dm(n){return n.length>600?new Blob([n]).size:n.replace(/[^\u0000-\u007F]/g,Pm).length}let kf=!0,Of=!0;function Er(n,e,t){const i=n.match(e);return i&&i.length>=t&&parseInt(i[t],10)}function cr(n,e,t){if(!n.RTCPeerConnection)return;const i=n.RTCPeerConnection.prototype,r=i.addEventListener;i.addEventListener=function(o,a){if(o!==e)return r.apply(this,arguments);const c=l=>{const u=t(l);u&&(a.handleEvent?a.handleEvent(u):a(u))};return this._eventMap=this._eventMap||{},this._eventMap[e]||(this._eventMap[e]=new Map),this._eventMap[e].set(a,c),r.apply(this,[o,c])};const s=i.removeEventListener;i.removeEventListener=function(o,a){if(o!==e||!this._eventMap||!this._eventMap[e])return s.apply(this,arguments);if(!this._eventMap[e].has(a))return s.apply(this,arguments);const c=this._eventMap[e].get(a);return this._eventMap[e].delete(a),this._eventMap[e].size===0&&delete this._eventMap[e],Object.keys(this._eventMap).length===0&&delete this._eventMap,s.apply(this,[o,c])},Object.defineProperty(i,"on"+e,{get(){return this["_on"+e]},set(o){this["_on"+e]&&(this.removeEventListener(e,this["_on"+e]),delete this["_on"+e]),o&&this.addEventListener(e,this["_on"+e]=o)},enumerable:!0,configurable:!0})}function Lm(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(kf=n,n?"adapter.js logging disabled":"adapter.js logging enabled")}function Im(n){return typeof n!="boolean"?new Error("Argument type: "+typeof n+". Please use a boolean."):(Of=!n,"adapter.js deprecation warnings "+(n?"disabled":"enabled"))}function cc(){if(typeof window=="object"){if(kf)return;typeof console<"u"&&typeof console.log=="function"&&console.log.apply(console,arguments)}}function fo(n,e){Of&&console.warn(n+" is deprecated, please use "+e+" instead.")}function km(n){const e={browser:null,version:null};if(typeof n>"u"||!n.navigator)return e.browser="Not a browser.",e;const{navigator:t}=n;if(t.mozGetUserMedia)e.browser="firefox",e.version=Er(t.userAgent,/Firefox\/(\d+)\./,1);else if(t.webkitGetUserMedia||n.isSecureContext===!1&&n.webkitRTCPeerConnection&&!n.RTCIceGatherer)e.browser="chrome",e.version=Er(t.userAgent,/Chrom(e|ium)\/(\d+)\./,2);else if(t.mediaDevices&&t.userAgent.match(/Edge\/(\d+).(\d+)$/))e.browser="edge",e.version=Er(t.userAgent,/Edge\/(\d+).(\d+)$/,2);else if(n.RTCPeerConnection&&t.userAgent.match(/AppleWebKit\/(\d+)\./))e.browser="safari",e.version=Er(t.userAgent,/AppleWebKit\/(\d+)\./,1),e.supportsUnifiedPlan=n.RTCRtpTransceiver&&"currentDirection"in n.RTCRtpTransceiver.prototype;else return e.browser="Not a supported browser.",e;return e}function Qc(n){return Object.prototype.toString.call(n)==="[object Object]"}function Ff(n){return Qc(n)?Object.keys(n).reduce(function(e,t){const i=Qc(n[t]),r=i?Ff(n[t]):n[t],s=i&&!Object.keys(r).length;return r===void 0||s?e:Object.assign(e,{[t]:r})},{}):n}function Ea(n,e,t){!e||t.has(e.id)||(t.set(e.id,e),Object.keys(e).forEach(i=>{i.endsWith("Id")?Ea(n,n.get(e[i]),t):i.endsWith("Ids")&&e[i].forEach(r=>{Ea(n,n.get(r),t)})}))}function el(n,e,t){const i=t?"outbound-rtp":"inbound-rtp",r=new Map;if(e===null)return r;const s=[];return n.forEach(o=>{o.type==="track"&&o.trackIdentifier===e.id&&s.push(o)}),s.forEach(o=>{n.forEach(a=>{a.type===i&&a.trackId===o.id&&Ea(n,a,r)})}),r}const tl=cc;function Nf(n,e){const t=n&&n.navigator;if(!t.mediaDevices)return;const i=function(a){if(typeof a!="object"||a.mandatory||a.optional)return a;const c={};return Object.keys(a).forEach(l=>{if(l==="require"||l==="advanced"||l==="mediaSource")return;const u=typeof a[l]=="object"?a[l]:{ideal:a[l]};u.exact!==void 0&&typeof u.exact=="number"&&(u.min=u.max=u.exact);const f=function(d,p){return d?d+p.charAt(0).toUpperCase()+p.slice(1):p==="deviceId"?"sourceId":p};if(u.ideal!==void 0){c.optional=c.optional||[];let d={};typeof u.ideal=="number"?(d[f("min",l)]=u.ideal,c.optional.push(d),d={},d[f("max",l)]=u.ideal,c.optional.push(d)):(d[f("",l)]=u.ideal,c.optional.push(d))}u.exact!==void 0&&typeof u.exact!="number"?(c.mandatory=c.mandatory||{},c.mandatory[f("",l)]=u.exact):["min","max"].forEach(d=>{u[d]!==void 0&&(c.mandatory=c.mandatory||{},c.mandatory[f(d,l)]=u[d])})}),a.advanced&&(c.optional=(c.optional||[]).concat(a.advanced)),c},r=function(a,c){if(e.version>=61)return c(a);if(a=JSON.parse(JSON.stringify(a)),a&&typeof a.audio=="object"){const l=function(u,f,d){f in u&&!(d in u)&&(u[d]=u[f],delete u[f])};a=JSON.parse(JSON.stringify(a)),l(a.audio,"autoGainControl","googAutoGainControl"),l(a.audio,"noiseSuppression","googNoiseSuppression"),a.audio=i(a.audio)}if(a&&typeof a.video=="object"){let l=a.video.facingMode;l=l&&(typeof l=="object"?l:{ideal:l});const u=e.version<66;if(l&&(l.exact==="user"||l.exact==="environment"||l.ideal==="user"||l.ideal==="environment")&&!(t.mediaDevices.getSupportedConstraints&&t.mediaDevices.getSupportedConstraints().facingMode&&!u)){delete a.video.facingMode;let f;if(l.exact==="environment"||l.ideal==="environment"?f=["back","rear"]:(l.exact==="user"||l.ideal==="user")&&(f=["front"]),f)return t.mediaDevices.enumerateDevices().then(d=>{d=d.filter(g=>g.kind==="videoinput");let p=d.find(g=>f.some(h=>g.label.toLowerCase().includes(h)));return!p&&d.length&&f.includes("back")&&(p=d[d.length-1]),p&&(a.video.deviceId=l.exact?{exact:p.deviceId}:{ideal:p.deviceId}),a.video=i(a.video),tl("chrome: "+JSON.stringify(a)),c(a)})}a.video=i(a.video)}return tl("chrome: "+JSON.stringify(a)),c(a)},s=function(a){return e.version>=64?a:{name:{PermissionDeniedError:"NotAllowedError",PermissionDismissedError:"NotAllowedError",InvalidStateError:"NotAllowedError",DevicesNotFoundError:"NotFoundError",ConstraintNotSatisfiedError:"OverconstrainedError",TrackStartError:"NotReadableError",MediaDeviceFailedDueToShutdown:"NotAllowedError",MediaDeviceKillSwitchOn:"NotAllowedError",TabCaptureError:"AbortError",ScreenCaptureError:"AbortError",DeviceCaptureError:"AbortError"}[a.name]||a.name,message:a.message,constraint:a.constraint||a.constraintName,toString(){return this.name+(this.message&&": ")+this.message}}},o=function(a,c,l){r(a,u=>{t.webkitGetUserMedia(u,c,f=>{l&&l(s(f))})})};if(t.getUserMedia=o.bind(t),t.mediaDevices.getUserMedia){const a=t.mediaDevices.getUserMedia.bind(t.mediaDevices);t.mediaDevices.getUserMedia=function(c){return r(c,l=>a(l).then(u=>{if(l.audio&&!u.getAudioTracks().length||l.video&&!u.getVideoTracks().length)throw u.getTracks().forEach(f=>{f.stop()}),new DOMException("","NotFoundError");return u},u=>Promise.reject(s(u))))}}}function Om(n,e){if(!(n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices)&&n.navigator.mediaDevices){if(typeof e!="function"){console.error("shimGetDisplayMedia: getSourceId argument is not a function");return}n.navigator.mediaDevices.getDisplayMedia=function(i){return e(i).then(r=>{const s=i.video&&i.video.width,o=i.video&&i.video.height,a=i.video&&i.video.frameRate;return i.video={mandatory:{chromeMediaSource:"desktop",chromeMediaSourceId:r,maxFrameRate:a||3}},s&&(i.video.mandatory.maxWidth=s),o&&(i.video.mandatory.maxHeight=o),n.navigator.mediaDevices.getUserMedia(i)})}}}function Uf(n){n.MediaStream=n.MediaStream||n.webkitMediaStream}function Bf(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("ontrack"in n.RTCPeerConnection.prototype)){Object.defineProperty(n.RTCPeerConnection.prototype,"ontrack",{get(){return this._ontrack},set(t){this._ontrack&&this.removeEventListener("track",this._ontrack),this.addEventListener("track",this._ontrack=t)},enumerable:!0,configurable:!0});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){return this._ontrackpoly||(this._ontrackpoly=i=>{i.stream.addEventListener("addtrack",r=>{let s;n.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(a=>a.track&&a.track.id===r.track.id):s={track:r.track};const o=new Event("track");o.track=r.track,o.receiver=s,o.transceiver={receiver:s},o.streams=[i.stream],this.dispatchEvent(o)}),i.stream.getTracks().forEach(r=>{let s;n.RTCPeerConnection.prototype.getReceivers?s=this.getReceivers().find(a=>a.track&&a.track.id===r.id):s={track:r};const o=new Event("track");o.track=r,o.receiver=s,o.transceiver={receiver:s},o.streams=[i.stream],this.dispatchEvent(o)})},this.addEventListener("addstream",this._ontrackpoly)),e.apply(this,arguments)}}else cr(n,"track",e=>(e.transceiver||Object.defineProperty(e,"transceiver",{value:{receiver:e.receiver}}),e))}function zf(n){if(typeof n=="object"&&n.RTCPeerConnection&&!("getSenders"in n.RTCPeerConnection.prototype)&&"createDTMFSender"in n.RTCPeerConnection.prototype){const e=function(r,s){return{track:s,get dtmf(){return this._dtmf===void 0&&(s.kind==="audio"?this._dtmf=r.createDTMFSender(s):this._dtmf=null),this._dtmf},_pc:r}};if(!n.RTCPeerConnection.prototype.getSenders){n.RTCPeerConnection.prototype.getSenders=function(){return this._senders=this._senders||[],this._senders.slice()};const r=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(a,c){let l=r.apply(this,arguments);return l||(l=e(this,a),this._senders.push(l)),l};const s=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(a){s.apply(this,arguments);const c=this._senders.indexOf(a);c!==-1&&this._senders.splice(c,1)}}const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(s){this._senders=this._senders||[],t.apply(this,[s]),s.getTracks().forEach(o=>{this._senders.push(e(this,o))})};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(s){this._senders=this._senders||[],i.apply(this,[s]),s.getTracks().forEach(o=>{const a=this._senders.find(c=>c.track===o);a&&this._senders.splice(this._senders.indexOf(a),1)})}}else if(typeof n=="object"&&n.RTCPeerConnection&&"getSenders"in n.RTCPeerConnection.prototype&&"createDTMFSender"in n.RTCPeerConnection.prototype&&n.RTCRtpSender&&!("dtmf"in n.RTCRtpSender.prototype)){const e=n.RTCPeerConnection.prototype.getSenders;n.RTCPeerConnection.prototype.getSenders=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i},Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=this._pc.createDTMFSender(this.track):this._dtmf=null),this._dtmf}})}}function Gf(n){if(!n.RTCPeerConnection)return;const e=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){const[i,r,s]=arguments;if(arguments.length>0&&typeof i=="function")return e.apply(this,arguments);if(e.length===0&&(arguments.length===0||typeof i!="function"))return e.apply(this,[]);const o=function(c){const l={};return c.result().forEach(f=>{const d={id:f.id,timestamp:f.timestamp,type:{localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[f.type]||f.type};f.names().forEach(p=>{d[p]=f.stat(p)}),l[d.id]=d}),l},a=function(c){return new Map(Object.keys(c).map(l=>[l,c[l]]))};if(arguments.length>=2){const c=function(l){r(a(o(l)))};return e.apply(this,[c,i])}return new Promise((c,l)=>{e.apply(this,[function(u){c(a(o(u)))},l])}).then(r,s)}}function Vf(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender&&n.RTCRtpReceiver))return;if(!("getStats"in n.RTCRtpSender.prototype)){const t=n.RTCPeerConnection.prototype.getSenders;t&&(n.RTCPeerConnection.prototype.getSenders=function(){const s=t.apply(this,[]);return s.forEach(o=>o._pc=this),s});const i=n.RTCPeerConnection.prototype.addTrack;i&&(n.RTCPeerConnection.prototype.addTrack=function(){const s=i.apply(this,arguments);return s._pc=this,s}),n.RTCRtpSender.prototype.getStats=function(){const s=this;return this._pc.getStats().then(o=>el(o,s.track,!0))}}if(!("getStats"in n.RTCRtpReceiver.prototype)){const t=n.RTCPeerConnection.prototype.getReceivers;t&&(n.RTCPeerConnection.prototype.getReceivers=function(){const r=t.apply(this,[]);return r.forEach(s=>s._pc=this),r}),cr(n,"track",i=>(i.receiver._pc=i.srcElement,i)),n.RTCRtpReceiver.prototype.getStats=function(){const r=this;return this._pc.getStats().then(s=>el(s,r.track,!1))}}if(!("getStats"in n.RTCRtpSender.prototype&&"getStats"in n.RTCRtpReceiver.prototype))return;const e=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){if(arguments.length>0&&arguments[0]instanceof n.MediaStreamTrack){const i=arguments[0];let r,s,o;return this.getSenders().forEach(a=>{a.track===i&&(r?o=!0:r=a)}),this.getReceivers().forEach(a=>(a.track===i&&(s?o=!0:s=a),a.track===i)),o||r&&s?Promise.reject(new DOMException("There are more than one sender or receiver for the track.","InvalidAccessError")):r?r.getStats():s?s.getStats():Promise.reject(new DOMException("There is no sender or receiver for the track.","InvalidAccessError"))}return e.apply(this,arguments)}}function Hf(n){n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},Object.keys(this._shimmedLocalStreams).map(o=>this._shimmedLocalStreams[o][0])};const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addTrack=function(o,a){if(!a)return e.apply(this,arguments);this._shimmedLocalStreams=this._shimmedLocalStreams||{};const c=e.apply(this,arguments);return this._shimmedLocalStreams[a.id]?this._shimmedLocalStreams[a.id].indexOf(c)===-1&&this._shimmedLocalStreams[a.id].push(c):this._shimmedLocalStreams[a.id]=[a,c],c};const t=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(o){this._shimmedLocalStreams=this._shimmedLocalStreams||{},o.getTracks().forEach(l=>{if(this.getSenders().find(f=>f.track===l))throw new DOMException("Track already exists.","InvalidAccessError")});const a=this.getSenders();t.apply(this,arguments);const c=this.getSenders().filter(l=>a.indexOf(l)===-1);this._shimmedLocalStreams[o.id]=[o].concat(c)};const i=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},delete this._shimmedLocalStreams[o.id],i.apply(this,arguments)};const r=n.RTCPeerConnection.prototype.removeTrack;n.RTCPeerConnection.prototype.removeTrack=function(o){return this._shimmedLocalStreams=this._shimmedLocalStreams||{},o&&Object.keys(this._shimmedLocalStreams).forEach(a=>{const c=this._shimmedLocalStreams[a].indexOf(o);c!==-1&&this._shimmedLocalStreams[a].splice(c,1),this._shimmedLocalStreams[a].length===1&&delete this._shimmedLocalStreams[a]}),r.apply(this,arguments)}}function Wf(n,e){if(!n.RTCPeerConnection)return;if(n.RTCPeerConnection.prototype.addTrack&&e.version>=65)return Hf(n);const t=n.RTCPeerConnection.prototype.getLocalStreams;n.RTCPeerConnection.prototype.getLocalStreams=function(){const u=t.apply(this);return this._reverseStreams=this._reverseStreams||{},u.map(f=>this._reverseStreams[f.id])};const i=n.RTCPeerConnection.prototype.addStream;n.RTCPeerConnection.prototype.addStream=function(u){if(this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},u.getTracks().forEach(f=>{if(this.getSenders().find(p=>p.track===f))throw new DOMException("Track already exists.","InvalidAccessError")}),!this._reverseStreams[u.id]){const f=new n.MediaStream(u.getTracks());this._streams[u.id]=f,this._reverseStreams[f.id]=u,u=f}i.apply(this,[u])};const r=n.RTCPeerConnection.prototype.removeStream;n.RTCPeerConnection.prototype.removeStream=function(u){this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{},r.apply(this,[this._streams[u.id]||u]),delete this._reverseStreams[this._streams[u.id]?this._streams[u.id].id:u.id],delete this._streams[u.id]},n.RTCPeerConnection.prototype.addTrack=function(u,f){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");const d=[].slice.call(arguments,1);if(d.length!==1||!d[0].getTracks().find(h=>h===u))throw new DOMException("The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.","NotSupportedError");if(this.getSenders().find(h=>h.track===u))throw new DOMException("Track already exists.","InvalidAccessError");this._streams=this._streams||{},this._reverseStreams=this._reverseStreams||{};const g=this._streams[f.id];if(g)g.addTrack(u),Promise.resolve().then(()=>{this.dispatchEvent(new Event("negotiationneeded"))});else{const h=new n.MediaStream([u]);this._streams[f.id]=h,this._reverseStreams[h.id]=f,this.addStream(h)}return this.getSenders().find(h=>h.track===u)};function s(l,u){let f=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const p=l._reverseStreams[d],g=l._streams[p.id];f=f.replace(new RegExp(g.id,"g"),p.id)}),new RTCSessionDescription({type:u.type,sdp:f})}function o(l,u){let f=u.sdp;return Object.keys(l._reverseStreams||[]).forEach(d=>{const p=l._reverseStreams[d],g=l._streams[p.id];f=f.replace(new RegExp(p.id,"g"),g.id)}),new RTCSessionDescription({type:u.type,sdp:f})}["createOffer","createAnswer"].forEach(function(l){const u=n.RTCPeerConnection.prototype[l],f={[l](){const d=arguments;return arguments.length&&typeof arguments[0]=="function"?u.apply(this,[g=>{const h=s(this,g);d[0].apply(null,[h])},g=>{d[1]&&d[1].apply(null,g)},arguments[2]]):u.apply(this,arguments).then(g=>s(this,g))}};n.RTCPeerConnection.prototype[l]=f[l]});const a=n.RTCPeerConnection.prototype.setLocalDescription;n.RTCPeerConnection.prototype.setLocalDescription=function(){return!arguments.length||!arguments[0].type?a.apply(this,arguments):(arguments[0]=o(this,arguments[0]),a.apply(this,arguments))};const c=Object.getOwnPropertyDescriptor(n.RTCPeerConnection.prototype,"localDescription");Object.defineProperty(n.RTCPeerConnection.prototype,"localDescription",{get(){const l=c.get.apply(this);return l.type===""?l:s(this,l)}}),n.RTCPeerConnection.prototype.removeTrack=function(u){if(this.signalingState==="closed")throw new DOMException("The RTCPeerConnection's signalingState is 'closed'.","InvalidStateError");if(!u._pc)throw new DOMException("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.","TypeError");if(!(u._pc===this))throw new DOMException("Sender was not created by this connection.","InvalidAccessError");this._streams=this._streams||{};let d;Object.keys(this._streams).forEach(p=>{this._streams[p].getTracks().find(h=>u.track===h)&&(d=this._streams[p])}),d&&(d.getTracks().length===1?this.removeStream(this._reverseStreams[d.id]):d.removeTrack(u.track),this.dispatchEvent(new Event("negotiationneeded")))}}function wa(n,e){!n.RTCPeerConnection&&n.webkitRTCPeerConnection&&(n.RTCPeerConnection=n.webkitRTCPeerConnection),n.RTCPeerConnection&&e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(t){const i=n.RTCPeerConnection.prototype[t],r={[t](){return arguments[0]=new(t==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),i.apply(this,arguments)}};n.RTCPeerConnection.prototype[t]=r[t]})}function jf(n,e){cr(n,"negotiationneeded",t=>{const i=t.target;if(!((e.version<72||i.getConfiguration&&i.getConfiguration().sdpSemantics==="plan-b")&&i.signalingState!=="stable"))return t})}const nl=Object.freeze(Object.defineProperty({__proto__:null,fixNegotiationNeeded:jf,shimAddTrackRemoveTrack:Wf,shimAddTrackRemoveTrackWithNative:Hf,shimGetDisplayMedia:Om,shimGetSendersWithDtmf:zf,shimGetStats:Gf,shimGetUserMedia:Nf,shimMediaStream:Uf,shimOnTrack:Bf,shimPeerConnection:wa,shimSenderReceiverGetStats:Vf},Symbol.toStringTag,{value:"Module"}));function Fm(n,e){let t=!1;return n=JSON.parse(JSON.stringify(n)),n.filter(i=>{if(i&&(i.urls||i.url)){let r=i.urls||i.url;i.url&&!i.urls&&fo("RTCIceServer.url","RTCIceServer.urls");const s=typeof r=="string";return s&&(r=[r]),r=r.filter(o=>{if(o.indexOf("stun:")===0)return!1;const a=o.startsWith("turn")&&!o.startsWith("turn:[")&&o.includes("transport=udp");return a&&!t?(t=!0,!0):a&&!t}),delete i.url,i.urls=s?r[0]:r,!!r.length}})}var $s={},Nm={get exports(){return $s},set exports(n){$s=n}};(function(n){var e={};e.generateIdentifier=function(){return Math.random().toString(36).substr(2,10)},e.localCName=e.generateIdentifier(),e.splitLines=function(t){return t.trim().split(`
`).map(function(i){return i.trim()})},e.splitSections=function(t){var i=t.split(`
m=`);return i.map(function(r,s){return(s>0?"m="+r:r).trim()+`\r
`})},e.getDescription=function(t){var i=e.splitSections(t);return i&&i[0]},e.getMediaSections=function(t){var i=e.splitSections(t);return i.shift(),i},e.matchPrefix=function(t,i){return e.splitLines(t).filter(function(r){return r.indexOf(i)===0})},e.parseCandidate=function(t){var i;t.indexOf("a=candidate:")===0?i=t.substring(12).split(" "):i=t.substring(10).split(" ");for(var r={foundation:i[0],component:parseInt(i[1],10),protocol:i[2].toLowerCase(),priority:parseInt(i[3],10),ip:i[4],address:i[4],port:parseInt(i[5],10),type:i[7]},s=8;s<i.length;s+=2)switch(i[s]){case"raddr":r.relatedAddress=i[s+1];break;case"rport":r.relatedPort=parseInt(i[s+1],10);break;case"tcptype":r.tcpType=i[s+1];break;case"ufrag":r.ufrag=i[s+1],r.usernameFragment=i[s+1];break;default:r[i[s]]=i[s+1];break}return r},e.writeCandidate=function(t){var i=[];i.push(t.foundation),i.push(t.component),i.push(t.protocol.toUpperCase()),i.push(t.priority),i.push(t.address||t.ip),i.push(t.port);var r=t.type;return i.push("typ"),i.push(r),r!=="host"&&t.relatedAddress&&t.relatedPort&&(i.push("raddr"),i.push(t.relatedAddress),i.push("rport"),i.push(t.relatedPort)),t.tcpType&&t.protocol.toLowerCase()==="tcp"&&(i.push("tcptype"),i.push(t.tcpType)),(t.usernameFragment||t.ufrag)&&(i.push("ufrag"),i.push(t.usernameFragment||t.ufrag)),"candidate:"+i.join(" ")},e.parseIceOptions=function(t){return t.substr(14).split(" ")},e.parseRtpMap=function(t){var i=t.substr(9).split(" "),r={payloadType:parseInt(i.shift(),10)};return i=i[0].split("/"),r.name=i[0],r.clockRate=parseInt(i[1],10),r.channels=i.length===3?parseInt(i[2],10):1,r.numChannels=r.channels,r},e.writeRtpMap=function(t){var i=t.payloadType;t.preferredPayloadType!==void 0&&(i=t.preferredPayloadType);var r=t.channels||t.numChannels||1;return"a=rtpmap:"+i+" "+t.name+"/"+t.clockRate+(r!==1?"/"+r:"")+`\r
`},e.parseExtmap=function(t){var i=t.substr(9).split(" ");return{id:parseInt(i[0],10),direction:i[0].indexOf("/")>0?i[0].split("/")[1]:"sendrecv",uri:i[1]}},e.writeExtmap=function(t){return"a=extmap:"+(t.id||t.preferredId)+(t.direction&&t.direction!=="sendrecv"?"/"+t.direction:"")+" "+t.uri+`\r
`},e.parseFmtp=function(t){for(var i={},r,s=t.substr(t.indexOf(" ")+1).split(";"),o=0;o<s.length;o++)r=s[o].trim().split("="),i[r[0].trim()]=r[1];return i},e.writeFmtp=function(t){var i="",r=t.payloadType;if(t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.parameters&&Object.keys(t.parameters).length){var s=[];Object.keys(t.parameters).forEach(function(o){t.parameters[o]?s.push(o+"="+t.parameters[o]):s.push(o)}),i+="a=fmtp:"+r+" "+s.join(";")+`\r
`}return i},e.parseRtcpFb=function(t){var i=t.substr(t.indexOf(" ")+1).split(" ");return{type:i.shift(),parameter:i.join(" ")}},e.writeRtcpFb=function(t){var i="",r=t.payloadType;return t.preferredPayloadType!==void 0&&(r=t.preferredPayloadType),t.rtcpFeedback&&t.rtcpFeedback.length&&t.rtcpFeedback.forEach(function(s){i+="a=rtcp-fb:"+r+" "+s.type+(s.parameter&&s.parameter.length?" "+s.parameter:"")+`\r
`}),i},e.parseSsrcMedia=function(t){var i=t.indexOf(" "),r={ssrc:parseInt(t.substr(7,i-7),10)},s=t.indexOf(":",i);return s>-1?(r.attribute=t.substr(i+1,s-i-1),r.value=t.substr(s+1)):r.attribute=t.substr(i+1),r},e.parseSsrcGroup=function(t){var i=t.substr(13).split(" ");return{semantics:i.shift(),ssrcs:i.map(function(r){return parseInt(r,10)})}},e.getMid=function(t){var i=e.matchPrefix(t,"a=mid:")[0];if(i)return i.substr(6)},e.parseFingerprint=function(t){var i=t.substr(14).split(" ");return{algorithm:i[0].toLowerCase(),value:i[1]}},e.getDtlsParameters=function(t,i){var r=e.matchPrefix(t+i,"a=fingerprint:");return{role:"auto",fingerprints:r.map(e.parseFingerprint)}},e.writeDtlsParameters=function(t,i){var r="a=setup:"+i+`\r
`;return t.fingerprints.forEach(function(s){r+="a=fingerprint:"+s.algorithm+" "+s.value+`\r
`}),r},e.parseCryptoLine=function(t){var i=t.substr(9).split(" ");return{tag:parseInt(i[0],10),cryptoSuite:i[1],keyParams:i[2],sessionParams:i.slice(3)}},e.writeCryptoLine=function(t){return"a=crypto:"+t.tag+" "+t.cryptoSuite+" "+(typeof t.keyParams=="object"?e.writeCryptoKeyParams(t.keyParams):t.keyParams)+(t.sessionParams?" "+t.sessionParams.join(" "):"")+`\r
`},e.parseCryptoKeyParams=function(t){if(t.indexOf("inline:")!==0)return null;var i=t.substr(7).split("|");return{keyMethod:"inline",keySalt:i[0],lifeTime:i[1],mkiValue:i[2]?i[2].split(":")[0]:void 0,mkiLength:i[2]?i[2].split(":")[1]:void 0}},e.writeCryptoKeyParams=function(t){return t.keyMethod+":"+t.keySalt+(t.lifeTime?"|"+t.lifeTime:"")+(t.mkiValue&&t.mkiLength?"|"+t.mkiValue+":"+t.mkiLength:"")},e.getCryptoParameters=function(t,i){var r=e.matchPrefix(t+i,"a=crypto:");return r.map(e.parseCryptoLine)},e.getIceParameters=function(t,i){var r=e.matchPrefix(t+i,"a=ice-ufrag:")[0],s=e.matchPrefix(t+i,"a=ice-pwd:")[0];return r&&s?{usernameFragment:r.substr(12),password:s.substr(10)}:null},e.writeIceParameters=function(t){return"a=ice-ufrag:"+t.usernameFragment+`\r
a=ice-pwd:`+t.password+`\r
`},e.parseRtpParameters=function(t){for(var i={codecs:[],headerExtensions:[],fecMechanisms:[],rtcp:[]},r=e.splitLines(t),s=r[0].split(" "),o=3;o<s.length;o++){var a=s[o],c=e.matchPrefix(t,"a=rtpmap:"+a+" ")[0];if(c){var l=e.parseRtpMap(c),u=e.matchPrefix(t,"a=fmtp:"+a+" ");switch(l.parameters=u.length?e.parseFmtp(u[0]):{},l.rtcpFeedback=e.matchPrefix(t,"a=rtcp-fb:"+a+" ").map(e.parseRtcpFb),i.codecs.push(l),l.name.toUpperCase()){case"RED":case"ULPFEC":i.fecMechanisms.push(l.name.toUpperCase());break}}}return e.matchPrefix(t,"a=extmap:").forEach(function(f){i.headerExtensions.push(e.parseExtmap(f))}),i},e.writeRtpDescription=function(t,i){var r="";r+="m="+t+" ",r+=i.codecs.length>0?"9":"0",r+=" UDP/TLS/RTP/SAVPF ",r+=i.codecs.map(function(o){return o.preferredPayloadType!==void 0?o.preferredPayloadType:o.payloadType}).join(" ")+`\r
`,r+=`c=IN IP4 0.0.0.0\r
`,r+=`a=rtcp:9 IN IP4 0.0.0.0\r
`,i.codecs.forEach(function(o){r+=e.writeRtpMap(o),r+=e.writeFmtp(o),r+=e.writeRtcpFb(o)});var s=0;return i.codecs.forEach(function(o){o.maxptime>s&&(s=o.maxptime)}),s>0&&(r+="a=maxptime:"+s+`\r
`),r+=`a=rtcp-mux\r
`,i.headerExtensions&&i.headerExtensions.forEach(function(o){r+=e.writeExtmap(o)}),r},e.parseRtpEncodingParameters=function(t){var i=[],r=e.parseRtpParameters(t),s=r.fecMechanisms.indexOf("RED")!==-1,o=r.fecMechanisms.indexOf("ULPFEC")!==-1,a=e.matchPrefix(t,"a=ssrc:").map(function(d){return e.parseSsrcMedia(d)}).filter(function(d){return d.attribute==="cname"}),c=a.length>0&&a[0].ssrc,l,u=e.matchPrefix(t,"a=ssrc-group:FID").map(function(d){var p=d.substr(17).split(" ");return p.map(function(g){return parseInt(g,10)})});u.length>0&&u[0].length>1&&u[0][0]===c&&(l=u[0][1]),r.codecs.forEach(function(d){if(d.name.toUpperCase()==="RTX"&&d.parameters.apt){var p={ssrc:c,codecPayloadType:parseInt(d.parameters.apt,10)};c&&l&&(p.rtx={ssrc:l}),i.push(p),s&&(p=JSON.parse(JSON.stringify(p)),p.fec={ssrc:c,mechanism:o?"red+ulpfec":"red"},i.push(p))}}),i.length===0&&c&&i.push({ssrc:c});var f=e.matchPrefix(t,"b=");return f.length&&(f[0].indexOf("b=TIAS:")===0?f=parseInt(f[0].substr(7),10):f[0].indexOf("b=AS:")===0?f=parseInt(f[0].substr(5),10)*1e3*.95-50*40*8:f=void 0,i.forEach(function(d){d.maxBitrate=f})),i},e.parseRtcpParameters=function(t){var i={},r=e.matchPrefix(t,"a=ssrc:").map(function(a){return e.parseSsrcMedia(a)}).filter(function(a){return a.attribute==="cname"})[0];r&&(i.cname=r.value,i.ssrc=r.ssrc);var s=e.matchPrefix(t,"a=rtcp-rsize");i.reducedSize=s.length>0,i.compound=s.length===0;var o=e.matchPrefix(t,"a=rtcp-mux");return i.mux=o.length>0,i},e.parseMsid=function(t){var i,r=e.matchPrefix(t,"a=msid:");if(r.length===1)return i=r[0].substr(7).split(" "),{stream:i[0],track:i[1]};var s=e.matchPrefix(t,"a=ssrc:").map(function(o){return e.parseSsrcMedia(o)}).filter(function(o){return o.attribute==="msid"});if(s.length>0)return i=s[0].value.split(" "),{stream:i[0],track:i[1]}},e.parseSctpDescription=function(t){var i=e.parseMLine(t),r=e.matchPrefix(t,"a=max-message-size:"),s;r.length>0&&(s=parseInt(r[0].substr(19),10)),isNaN(s)&&(s=65536);var o=e.matchPrefix(t,"a=sctp-port:");if(o.length>0)return{port:parseInt(o[0].substr(12),10),protocol:i.fmt,maxMessageSize:s};var a=e.matchPrefix(t,"a=sctpmap:");if(a.length>0){var c=e.matchPrefix(t,"a=sctpmap:")[0].substr(10).split(" ");return{port:parseInt(c[0],10),protocol:c[1],maxMessageSize:s}}},e.writeSctpDescription=function(t,i){var r=[];return t.protocol!=="DTLS/SCTP"?r=["m="+t.kind+" 9 "+t.protocol+" "+i.protocol+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctp-port:"+i.port+`\r
`]:r=["m="+t.kind+" 9 "+t.protocol+" "+i.port+`\r
`,`c=IN IP4 0.0.0.0\r
`,"a=sctpmap:"+i.port+" "+i.protocol+` 65535\r
`],i.maxMessageSize!==void 0&&r.push("a=max-message-size:"+i.maxMessageSize+`\r
`),r.join("")},e.generateSessionId=function(){return Math.random().toString().substr(2,21)},e.writeSessionBoilerplate=function(t,i,r){var s,o=i!==void 0?i:2;t?s=t:s=e.generateSessionId();var a=r||"thisisadapterortc";return`v=0\r
o=`+a+" "+s+" "+o+` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`},e.writeMediaSection=function(t,i,r,s){var o=e.writeRtpDescription(t.kind,i);if(o+=e.writeIceParameters(t.iceGatherer.getLocalParameters()),o+=e.writeDtlsParameters(t.dtlsTransport.getLocalParameters(),r==="offer"?"actpass":"active"),o+="a=mid:"+t.mid+`\r
`,t.direction?o+="a="+t.direction+`\r
`:t.rtpSender&&t.rtpReceiver?o+=`a=sendrecv\r
`:t.rtpSender?o+=`a=sendonly\r
`:t.rtpReceiver?o+=`a=recvonly\r
`:o+=`a=inactive\r
`,t.rtpSender){var a="msid:"+s.id+" "+t.rtpSender.track.id+`\r
`;o+="a="+a,o+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" "+a,t.sendEncodingParameters[0].rtx&&(o+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" "+a,o+="a=ssrc-group:FID "+t.sendEncodingParameters[0].ssrc+" "+t.sendEncodingParameters[0].rtx.ssrc+`\r
`)}return o+="a=ssrc:"+t.sendEncodingParameters[0].ssrc+" cname:"+e.localCName+`\r
`,t.rtpSender&&t.sendEncodingParameters[0].rtx&&(o+="a=ssrc:"+t.sendEncodingParameters[0].rtx.ssrc+" cname:"+e.localCName+`\r
`),o},e.getDirection=function(t,i){for(var r=e.splitLines(t),s=0;s<r.length;s++)switch(r[s]){case"a=sendrecv":case"a=sendonly":case"a=recvonly":case"a=inactive":return r[s].substr(2)}return i?e.getDirection(i):"sendrecv"},e.getKind=function(t){var i=e.splitLines(t),r=i[0].split(" ");return r[0].substr(2)},e.isRejected=function(t){return t.split(" ",2)[1]==="0"},e.parseMLine=function(t){var i=e.splitLines(t),r=i[0].substr(2).split(" ");return{kind:r[0],port:parseInt(r[1],10),protocol:r[2],fmt:r.slice(3).join(" ")}},e.parseOLine=function(t){var i=e.matchPrefix(t,"o=")[0],r=i.substr(2).split(" ");return{username:r[0],sessionId:r[1],sessionVersion:parseInt(r[2],10),netType:r[3],addressType:r[4],address:r[5]}},e.isValidSDP=function(t){if(typeof t!="string"||t.length===0)return!1;for(var i=e.splitLines(t),r=0;r<i.length;r++)if(i[r].length<2||i[r].charAt(1)!=="=")return!1;return!0},n.exports=e})(Nm);const Os=$s;var De=$s;function Um(n){return{inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"}[n.type]||n.type}function il(n,e,t,i,r){var s=De.writeRtpDescription(n.kind,e);if(s+=De.writeIceParameters(n.iceGatherer.getLocalParameters()),s+=De.writeDtlsParameters(n.dtlsTransport.getLocalParameters(),t==="offer"?"actpass":r||"active"),s+="a=mid:"+n.mid+`\r
`,n.rtpSender&&n.rtpReceiver?s+=`a=sendrecv\r
`:n.rtpSender?s+=`a=sendonly\r
`:n.rtpReceiver?s+=`a=recvonly\r
`:s+=`a=inactive\r
`,n.rtpSender){var o=n.rtpSender._initialTrackId||n.rtpSender.track.id;n.rtpSender._initialTrackId=o;var a="msid:"+(i?i.id:"-")+" "+o+`\r
`;s+="a="+a,s+="a=ssrc:"+n.sendEncodingParameters[0].ssrc+" "+a,n.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+n.sendEncodingParameters[0].rtx.ssrc+" "+a,s+="a=ssrc-group:FID "+n.sendEncodingParameters[0].ssrc+" "+n.sendEncodingParameters[0].rtx.ssrc+`\r
`)}return s+="a=ssrc:"+n.sendEncodingParameters[0].ssrc+" cname:"+De.localCName+`\r
`,n.rtpSender&&n.sendEncodingParameters[0].rtx&&(s+="a=ssrc:"+n.sendEncodingParameters[0].rtx.ssrc+" cname:"+De.localCName+`\r
`),s}function Bm(n,e){var t=!1;return n=JSON.parse(JSON.stringify(n)),n.filter(function(i){if(i&&(i.urls||i.url)){var r=i.urls||i.url;i.url&&!i.urls&&console.warn("RTCIceServer.url is deprecated! Use urls instead.");var s=typeof r=="string";return s&&(r=[r]),r=r.filter(function(o){var a=o.indexOf("turn:")===0&&o.indexOf("transport=udp")!==-1&&o.indexOf("turn:[")===-1&&!t;return a?(t=!0,!0):o.indexOf("stun:")===0&&e>=14393&&o.indexOf("?transport=udp")===-1}),delete i.url,i.urls=s?r[0]:r,!!r.length}})}function ss(n,e){var t={codecs:[],headerExtensions:[],fecMechanisms:[]},i=function(s,o){s=parseInt(s,10);for(var a=0;a<o.length;a++)if(o[a].payloadType===s||o[a].preferredPayloadType===s)return o[a]},r=function(s,o,a,c){var l=i(s.parameters.apt,a),u=i(o.parameters.apt,c);return l&&u&&l.name.toLowerCase()===u.name.toLowerCase()};return n.codecs.forEach(function(s){for(var o=0;o<e.codecs.length;o++){var a=e.codecs[o];if(s.name.toLowerCase()===a.name.toLowerCase()&&s.clockRate===a.clockRate){if(s.name.toLowerCase()==="rtx"&&s.parameters&&a.parameters.apt&&!r(s,a,n.codecs,e.codecs))continue;a=JSON.parse(JSON.stringify(a)),a.numChannels=Math.min(s.numChannels,a.numChannels),t.codecs.push(a),a.rtcpFeedback=a.rtcpFeedback.filter(function(c){for(var l=0;l<s.rtcpFeedback.length;l++)if(s.rtcpFeedback[l].type===c.type&&s.rtcpFeedback[l].parameter===c.parameter)return!0;return!1});break}}}),n.headerExtensions.forEach(function(s){for(var o=0;o<e.headerExtensions.length;o++){var a=e.headerExtensions[o];if(s.uri===a.uri){t.headerExtensions.push(a);break}}}),t}function rl(n,e,t){return{offer:{setLocalDescription:["stable","have-local-offer"],setRemoteDescription:["stable","have-remote-offer"]},answer:{setLocalDescription:["have-remote-offer","have-local-pranswer"],setRemoteDescription:["have-local-offer","have-remote-pranswer"]}}[e][n].indexOf(t)!==-1}function Do(n,e){var t=n.getRemoteCandidates().find(function(i){return e.foundation===i.foundation&&e.ip===i.ip&&e.port===i.port&&e.priority===i.priority&&e.protocol===i.protocol&&e.type===i.type});return t||n.addRemoteCandidate(e),!t}function bt(n,e){var t=new Error(e);return t.name=n,t.code={NotSupportedError:9,InvalidStateError:11,InvalidAccessError:15,TypeError:void 0,OperationError:void 0}[n],t}var zm=function(n,e){function t(c,l){l.addTrack(c),l.dispatchEvent(new n.MediaStreamTrackEvent("addtrack",{track:c}))}function i(c,l){l.removeTrack(c),l.dispatchEvent(new n.MediaStreamTrackEvent("removetrack",{track:c}))}function r(c,l,u,f){var d=new Event("track");d.track=l,d.receiver=u,d.transceiver={receiver:u},d.streams=f,n.setTimeout(function(){c._dispatchEvent("track",d)})}var s=function(c){var l=this,u=document.createDocumentFragment();if(["addEventListener","removeEventListener","dispatchEvent"].forEach(function(d){l[d]=u[d].bind(u)}),this.canTrickleIceCandidates=null,this.needNegotiation=!1,this.localStreams=[],this.remoteStreams=[],this._localDescription=null,this._remoteDescription=null,this.signalingState="stable",this.iceConnectionState="new",this.connectionState="new",this.iceGatheringState="new",c=JSON.parse(JSON.stringify(c||{})),this.usingBundle=c.bundlePolicy==="max-bundle",c.rtcpMuxPolicy==="negotiate")throw bt("NotSupportedError","rtcpMuxPolicy 'negotiate' is not supported");switch(c.rtcpMuxPolicy||(c.rtcpMuxPolicy="require"),c.iceTransportPolicy){case"all":case"relay":break;default:c.iceTransportPolicy="all";break}switch(c.bundlePolicy){case"balanced":case"max-compat":case"max-bundle":break;default:c.bundlePolicy="balanced";break}if(c.iceServers=Bm(c.iceServers||[],e),this._iceGatherers=[],c.iceCandidatePoolSize)for(var f=c.iceCandidatePoolSize;f>0;f--)this._iceGatherers.push(new n.RTCIceGatherer({iceServers:c.iceServers,gatherPolicy:c.iceTransportPolicy}));else c.iceCandidatePoolSize=0;this._config=c,this.transceivers=[],this._sdpSessionId=De.generateSessionId(),this._sdpSessionVersion=0,this._dtlsRole=void 0,this._isClosed=!1};Object.defineProperty(s.prototype,"localDescription",{configurable:!0,get:function(){return this._localDescription}}),Object.defineProperty(s.prototype,"remoteDescription",{configurable:!0,get:function(){return this._remoteDescription}}),s.prototype.onicecandidate=null,s.prototype.onaddstream=null,s.prototype.ontrack=null,s.prototype.onremovestream=null,s.prototype.onsignalingstatechange=null,s.prototype.oniceconnectionstatechange=null,s.prototype.onconnectionstatechange=null,s.prototype.onicegatheringstatechange=null,s.prototype.onnegotiationneeded=null,s.prototype.ondatachannel=null,s.prototype._dispatchEvent=function(c,l){this._isClosed||(this.dispatchEvent(l),typeof this["on"+c]=="function"&&this["on"+c](l))},s.prototype._emitGatheringStateChange=function(){var c=new Event("icegatheringstatechange");this._dispatchEvent("icegatheringstatechange",c)},s.prototype.getConfiguration=function(){return this._config},s.prototype.getLocalStreams=function(){return this.localStreams},s.prototype.getRemoteStreams=function(){return this.remoteStreams},s.prototype._createTransceiver=function(c,l){var u=this.transceivers.length>0,f={track:null,iceGatherer:null,iceTransport:null,dtlsTransport:null,localCapabilities:null,remoteCapabilities:null,rtpSender:null,rtpReceiver:null,kind:c,mid:null,sendEncodingParameters:null,recvEncodingParameters:null,stream:null,associatedRemoteMediaStreams:[],wantReceive:!0};if(this.usingBundle&&u)f.iceTransport=this.transceivers[0].iceTransport,f.dtlsTransport=this.transceivers[0].dtlsTransport;else{var d=this._createIceAndDtlsTransports();f.iceTransport=d.iceTransport,f.dtlsTransport=d.dtlsTransport}return l||this.transceivers.push(f),f},s.prototype.addTrack=function(c,l){if(this._isClosed)throw bt("InvalidStateError","Attempted to call addTrack on a closed peerconnection.");var u=this.transceivers.find(function(p){return p.track===c});if(u)throw bt("InvalidAccessError","Track already exists.");for(var f,d=0;d<this.transceivers.length;d++)!this.transceivers[d].track&&this.transceivers[d].kind===c.kind&&(f=this.transceivers[d]);return f||(f=this._createTransceiver(c.kind)),this._maybeFireNegotiationNeeded(),this.localStreams.indexOf(l)===-1&&this.localStreams.push(l),f.track=c,f.stream=l,f.rtpSender=new n.RTCRtpSender(c,f.dtlsTransport),f.rtpSender},s.prototype.addStream=function(c){var l=this;if(e>=15025)c.getTracks().forEach(function(f){l.addTrack(f,c)});else{var u=c.clone();c.getTracks().forEach(function(f,d){var p=u.getTracks()[d];f.addEventListener("enabled",function(g){p.enabled=g.enabled})}),u.getTracks().forEach(function(f){l.addTrack(f,u)})}},s.prototype.removeTrack=function(c){if(this._isClosed)throw bt("InvalidStateError","Attempted to call removeTrack on a closed peerconnection.");if(!(c instanceof n.RTCRtpSender))throw new TypeError("Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.");var l=this.transceivers.find(function(d){return d.rtpSender===c});if(!l)throw bt("InvalidAccessError","Sender was not created by this connection.");var u=l.stream;l.rtpSender.stop(),l.rtpSender=null,l.track=null,l.stream=null;var f=this.transceivers.map(function(d){return d.stream});f.indexOf(u)===-1&&this.localStreams.indexOf(u)>-1&&this.localStreams.splice(this.localStreams.indexOf(u),1),this._maybeFireNegotiationNeeded()},s.prototype.removeStream=function(c){var l=this;c.getTracks().forEach(function(u){var f=l.getSenders().find(function(d){return d.track===u});f&&l.removeTrack(f)})},s.prototype.getSenders=function(){return this.transceivers.filter(function(c){return!!c.rtpSender}).map(function(c){return c.rtpSender})},s.prototype.getReceivers=function(){return this.transceivers.filter(function(c){return!!c.rtpReceiver}).map(function(c){return c.rtpReceiver})},s.prototype._createIceGatherer=function(c,l){var u=this;if(l&&c>0)return this.transceivers[0].iceGatherer;if(this._iceGatherers.length)return this._iceGatherers.shift();var f=new n.RTCIceGatherer({iceServers:this._config.iceServers,gatherPolicy:this._config.iceTransportPolicy});return Object.defineProperty(f,"state",{value:"new",writable:!0}),this.transceivers[c].bufferedCandidateEvents=[],this.transceivers[c].bufferCandidates=function(d){var p=!d.candidate||Object.keys(d.candidate).length===0;f.state=p?"completed":"gathering",u.transceivers[c].bufferedCandidateEvents!==null&&u.transceivers[c].bufferedCandidateEvents.push(d)},f.addEventListener("localcandidate",this.transceivers[c].bufferCandidates),f},s.prototype._gather=function(c,l){var u=this,f=this.transceivers[l].iceGatherer;if(!f.onlocalcandidate){var d=this.transceivers[l].bufferedCandidateEvents;this.transceivers[l].bufferedCandidateEvents=null,f.removeEventListener("localcandidate",this.transceivers[l].bufferCandidates),f.onlocalcandidate=function(p){if(!(u.usingBundle&&l>0)){var g=new Event("icecandidate");g.candidate={sdpMid:c,sdpMLineIndex:l};var h=p.candidate,m=!h||Object.keys(h).length===0;if(m)(f.state==="new"||f.state==="gathering")&&(f.state="completed");else{f.state==="new"&&(f.state="gathering"),h.component=1,h.ufrag=f.getLocalParameters().usernameFragment;var v=De.writeCandidate(h);g.candidate=Object.assign(g.candidate,De.parseCandidate(v)),g.candidate.candidate=v,g.candidate.toJSON=function(){return{candidate:g.candidate.candidate,sdpMid:g.candidate.sdpMid,sdpMLineIndex:g.candidate.sdpMLineIndex,usernameFragment:g.candidate.usernameFragment}}}var S=De.getMediaSections(u._localDescription.sdp);m?S[g.candidate.sdpMLineIndex]+=`a=end-of-candidates\r
`:S[g.candidate.sdpMLineIndex]+="a="+g.candidate.candidate+`\r
`,u._localDescription.sdp=De.getDescription(u._localDescription.sdp)+S.join("");var y=u.transceivers.every(function(C){return C.iceGatherer&&C.iceGatherer.state==="completed"});u.iceGatheringState!=="gathering"&&(u.iceGatheringState="gathering",u._emitGatheringStateChange()),m||u._dispatchEvent("icecandidate",g),y&&(u._dispatchEvent("icecandidate",new Event("icecandidate")),u.iceGatheringState="complete",u._emitGatheringStateChange())}},n.setTimeout(function(){d.forEach(function(p){f.onlocalcandidate(p)})},0)}},s.prototype._createIceAndDtlsTransports=function(){var c=this,l=new n.RTCIceTransport(null);l.onicestatechange=function(){c._updateIceConnectionState(),c._updateConnectionState()};var u=new n.RTCDtlsTransport(l);return u.ondtlsstatechange=function(){c._updateConnectionState()},u.onerror=function(){Object.defineProperty(u,"state",{value:"failed",writable:!0}),c._updateConnectionState()},{iceTransport:l,dtlsTransport:u}},s.prototype._disposeIceAndDtlsTransports=function(c){var l=this.transceivers[c].iceGatherer;l&&(delete l.onlocalcandidate,delete this.transceivers[c].iceGatherer);var u=this.transceivers[c].iceTransport;u&&(delete u.onicestatechange,delete this.transceivers[c].iceTransport);var f=this.transceivers[c].dtlsTransport;f&&(delete f.ondtlsstatechange,delete f.onerror,delete this.transceivers[c].dtlsTransport)},s.prototype._transceive=function(c,l,u){var f=ss(c.localCapabilities,c.remoteCapabilities);l&&c.rtpSender&&(f.encodings=c.sendEncodingParameters,f.rtcp={cname:De.localCName,compound:c.rtcpParameters.compound},c.recvEncodingParameters.length&&(f.rtcp.ssrc=c.recvEncodingParameters[0].ssrc),c.rtpSender.send(f)),u&&c.rtpReceiver&&f.codecs.length>0&&(c.kind==="video"&&c.recvEncodingParameters&&e<15019&&c.recvEncodingParameters.forEach(function(d){delete d.rtx}),c.recvEncodingParameters.length?f.encodings=c.recvEncodingParameters:f.encodings=[{}],f.rtcp={compound:c.rtcpParameters.compound},c.rtcpParameters.cname&&(f.rtcp.cname=c.rtcpParameters.cname),c.sendEncodingParameters.length&&(f.rtcp.ssrc=c.sendEncodingParameters[0].ssrc),c.rtpReceiver.receive(f))},s.prototype.setLocalDescription=function(c){var l=this;if(["offer","answer"].indexOf(c.type)===-1)return Promise.reject(bt("TypeError",'Unsupported type "'+c.type+'"'));if(!rl("setLocalDescription",c.type,l.signalingState)||l._isClosed)return Promise.reject(bt("InvalidStateError","Can not set local "+c.type+" in state "+l.signalingState));var u,f;if(c.type==="offer")u=De.splitSections(c.sdp),f=u.shift(),u.forEach(function(p,g){var h=De.parseRtpParameters(p);l.transceivers[g].localCapabilities=h}),l.transceivers.forEach(function(p,g){l._gather(p.mid,g)});else if(c.type==="answer"){u=De.splitSections(l._remoteDescription.sdp),f=u.shift();var d=De.matchPrefix(f,"a=ice-lite").length>0;u.forEach(function(p,g){var h=l.transceivers[g],m=h.iceGatherer,v=h.iceTransport,S=h.dtlsTransport,y=h.localCapabilities,C=h.remoteCapabilities,M=De.isRejected(p)&&De.matchPrefix(p,"a=bundle-only").length===0;if(!M&&!h.rejected){var P=De.getIceParameters(p,f),I=De.getDtlsParameters(p,f);d&&(I.role="server"),(!l.usingBundle||g===0)&&(l._gather(h.mid,g),v.state==="new"&&v.start(m,P,d?"controlling":"controlled"),S.state==="new"&&S.start(I));var x=ss(y,C);l._transceive(h,x.codecs.length>0,!1)}})}return l._localDescription={type:c.type,sdp:c.sdp},c.type==="offer"?l._updateSignalingState("have-local-offer"):l._updateSignalingState("stable"),Promise.resolve()},s.prototype.setRemoteDescription=function(c){var l=this;if(["offer","answer"].indexOf(c.type)===-1)return Promise.reject(bt("TypeError",'Unsupported type "'+c.type+'"'));if(!rl("setRemoteDescription",c.type,l.signalingState)||l._isClosed)return Promise.reject(bt("InvalidStateError","Can not set remote "+c.type+" in state "+l.signalingState));var u={};l.remoteStreams.forEach(function(v){u[v.id]=v});var f=[],d=De.splitSections(c.sdp),p=d.shift(),g=De.matchPrefix(p,"a=ice-lite").length>0,h=De.matchPrefix(p,"a=group:BUNDLE ").length>0;l.usingBundle=h;var m=De.matchPrefix(p,"a=ice-options:")[0];return m?l.canTrickleIceCandidates=m.substr(14).split(" ").indexOf("trickle")>=0:l.canTrickleIceCandidates=!1,d.forEach(function(v,S){var y=De.splitLines(v),C=De.getKind(v),M=De.isRejected(v)&&De.matchPrefix(v,"a=bundle-only").length===0,P=y[0].substr(2).split(" ")[2],I=De.getDirection(v,p),x=De.parseMsid(v),w=De.getMid(v)||De.generateIdentifier();if(M||C==="application"&&(P==="DTLS/SCTP"||P==="UDP/DTLS/SCTP")){l.transceivers[S]={mid:w,kind:C,protocol:P,rejected:!0};return}!M&&l.transceivers[S]&&l.transceivers[S].rejected&&(l.transceivers[S]=l._createTransceiver(C,!0));var A,Q,re,F,k,J,ne,$,B,ae=De.parseRtpParameters(v),ce,xe;M||(ce=De.getIceParameters(v,p),xe=De.getDtlsParameters(v,p),xe.role="client"),ne=De.parseRtpEncodingParameters(v);var z=De.parseRtcpParameters(v),te=De.matchPrefix(v,"a=end-of-candidates",p).length>0,he=De.matchPrefix(v,"a=candidate:").map(function(ge){return De.parseCandidate(ge)}).filter(function(ge){return ge.component===1});if((c.type==="offer"||c.type==="answer")&&!M&&h&&S>0&&l.transceivers[S]&&(l._disposeIceAndDtlsTransports(S),l.transceivers[S].iceGatherer=l.transceivers[0].iceGatherer,l.transceivers[S].iceTransport=l.transceivers[0].iceTransport,l.transceivers[S].dtlsTransport=l.transceivers[0].dtlsTransport,l.transceivers[S].rtpSender&&l.transceivers[S].rtpSender.setTransport(l.transceivers[0].dtlsTransport),l.transceivers[S].rtpReceiver&&l.transceivers[S].rtpReceiver.setTransport(l.transceivers[0].dtlsTransport)),c.type==="offer"&&!M){A=l.transceivers[S]||l._createTransceiver(C),A.mid=w,A.iceGatherer||(A.iceGatherer=l._createIceGatherer(S,h)),he.length&&A.iceTransport.state==="new"&&(te&&(!h||S===0)?A.iceTransport.setRemoteCandidates(he):he.forEach(function(ge){Do(A.iceTransport,ge)})),$=n.RTCRtpReceiver.getCapabilities(C),e<15019&&($.codecs=$.codecs.filter(function(ge){return ge.name!=="rtx"})),J=A.sendEncodingParameters||[{ssrc:(2*S+2)*1001}];var pe=!1;if(I==="sendrecv"||I==="sendonly"){if(pe=!A.rtpReceiver,k=A.rtpReceiver||new n.RTCRtpReceiver(A.dtlsTransport,C),pe){var N;B=k.track,x&&x.stream==="-"||(x?(u[x.stream]||(u[x.stream]=new n.MediaStream,Object.defineProperty(u[x.stream],"id",{get:function(){return x.stream}})),Object.defineProperty(B,"id",{get:function(){return x.track}}),N=u[x.stream]):(u.default||(u.default=new n.MediaStream),N=u.default)),N&&(t(B,N),A.associatedRemoteMediaStreams.push(N)),f.push([B,k,N])}}else A.rtpReceiver&&A.rtpReceiver.track&&(A.associatedRemoteMediaStreams.forEach(function(ge){var ve=ge.getTracks().find(function(He){return He.id===A.rtpReceiver.track.id});ve&&i(ve,ge)}),A.associatedRemoteMediaStreams=[]);A.localCapabilities=$,A.remoteCapabilities=ae,A.rtpReceiver=k,A.rtcpParameters=z,A.sendEncodingParameters=J,A.recvEncodingParameters=ne,l._transceive(l.transceivers[S],!1,pe)}else if(c.type==="answer"&&!M){A=l.transceivers[S],Q=A.iceGatherer,re=A.iceTransport,F=A.dtlsTransport,k=A.rtpReceiver,J=A.sendEncodingParameters,$=A.localCapabilities,l.transceivers[S].recvEncodingParameters=ne,l.transceivers[S].remoteCapabilities=ae,l.transceivers[S].rtcpParameters=z,he.length&&re.state==="new"&&((g||te)&&(!h||S===0)?re.setRemoteCandidates(he):he.forEach(function(ge){Do(A.iceTransport,ge)})),(!h||S===0)&&(re.state==="new"&&re.start(Q,ce,"controlling"),F.state==="new"&&F.start(xe));var Pe=ss(A.localCapabilities,A.remoteCapabilities),Te=Pe.codecs.filter(function(ge){return ge.name.toLowerCase()==="rtx"}).length;!Te&&A.sendEncodingParameters[0].rtx&&delete A.sendEncodingParameters[0].rtx,l._transceive(A,I==="sendrecv"||I==="recvonly",I==="sendrecv"||I==="sendonly"),k&&(I==="sendrecv"||I==="sendonly")?(B=k.track,x?(u[x.stream]||(u[x.stream]=new n.MediaStream),t(B,u[x.stream]),f.push([B,k,u[x.stream]])):(u.default||(u.default=new n.MediaStream),t(B,u.default),f.push([B,k,u.default]))):delete A.rtpReceiver}}),l._dtlsRole===void 0&&(l._dtlsRole=c.type==="offer"?"active":"passive"),l._remoteDescription={type:c.type,sdp:c.sdp},c.type==="offer"?l._updateSignalingState("have-remote-offer"):l._updateSignalingState("stable"),Object.keys(u).forEach(function(v){var S=u[v];if(S.getTracks().length){if(l.remoteStreams.indexOf(S)===-1){l.remoteStreams.push(S);var y=new Event("addstream");y.stream=S,n.setTimeout(function(){l._dispatchEvent("addstream",y)})}f.forEach(function(C){var M=C[0],P=C[1];S.id===C[2].id&&r(l,M,P,[S])})}}),f.forEach(function(v){v[2]||r(l,v[0],v[1],[])}),n.setTimeout(function(){l&&l.transceivers&&l.transceivers.forEach(function(v){v.iceTransport&&v.iceTransport.state==="new"&&v.iceTransport.getRemoteCandidates().length>0&&(console.warn("Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification"),v.iceTransport.addRemoteCandidate({}))})},4e3),Promise.resolve()},s.prototype.close=function(){this.transceivers.forEach(function(c){c.iceTransport&&c.iceTransport.stop(),c.dtlsTransport&&c.dtlsTransport.stop(),c.rtpSender&&c.rtpSender.stop(),c.rtpReceiver&&c.rtpReceiver.stop()}),this._isClosed=!0,this._updateSignalingState("closed")},s.prototype._updateSignalingState=function(c){this.signalingState=c;var l=new Event("signalingstatechange");this._dispatchEvent("signalingstatechange",l)},s.prototype._maybeFireNegotiationNeeded=function(){var c=this;this.signalingState!=="stable"||this.needNegotiation===!0||(this.needNegotiation=!0,n.setTimeout(function(){if(c.needNegotiation){c.needNegotiation=!1;var l=new Event("negotiationneeded");c._dispatchEvent("negotiationneeded",l)}},0))},s.prototype._updateIceConnectionState=function(){var c,l={new:0,closed:0,checking:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(f){f.iceTransport&&!f.rejected&&l[f.iceTransport.state]++}),c="new",l.failed>0?c="failed":l.checking>0?c="checking":l.disconnected>0?c="disconnected":l.new>0?c="new":l.connected>0?c="connected":l.completed>0&&(c="completed"),c!==this.iceConnectionState){this.iceConnectionState=c;var u=new Event("iceconnectionstatechange");this._dispatchEvent("iceconnectionstatechange",u)}},s.prototype._updateConnectionState=function(){var c,l={new:0,closed:0,connecting:0,connected:0,completed:0,disconnected:0,failed:0};if(this.transceivers.forEach(function(f){f.iceTransport&&f.dtlsTransport&&!f.rejected&&(l[f.iceTransport.state]++,l[f.dtlsTransport.state]++)}),l.connected+=l.completed,c="new",l.failed>0?c="failed":l.connecting>0?c="connecting":l.disconnected>0?c="disconnected":l.new>0?c="new":l.connected>0&&(c="connected"),c!==this.connectionState){this.connectionState=c;var u=new Event("connectionstatechange");this._dispatchEvent("connectionstatechange",u)}},s.prototype.createOffer=function(){var c=this;if(c._isClosed)return Promise.reject(bt("InvalidStateError","Can not call createOffer after close"));var l=c.transceivers.filter(function(g){return g.kind==="audio"}).length,u=c.transceivers.filter(function(g){return g.kind==="video"}).length,f=arguments[0];if(f){if(f.mandatory||f.optional)throw new TypeError("Legacy mandatory/optional constraints not supported.");f.offerToReceiveAudio!==void 0&&(f.offerToReceiveAudio===!0?l=1:f.offerToReceiveAudio===!1?l=0:l=f.offerToReceiveAudio),f.offerToReceiveVideo!==void 0&&(f.offerToReceiveVideo===!0?u=1:f.offerToReceiveVideo===!1?u=0:u=f.offerToReceiveVideo)}for(c.transceivers.forEach(function(g){g.kind==="audio"?(l--,l<0&&(g.wantReceive=!1)):g.kind==="video"&&(u--,u<0&&(g.wantReceive=!1))});l>0||u>0;)l>0&&(c._createTransceiver("audio"),l--),u>0&&(c._createTransceiver("video"),u--);var d=De.writeSessionBoilerplate(c._sdpSessionId,c._sdpSessionVersion++);c.transceivers.forEach(function(g,h){var m=g.track,v=g.kind,S=g.mid||De.generateIdentifier();g.mid=S,g.iceGatherer||(g.iceGatherer=c._createIceGatherer(h,c.usingBundle));var y=n.RTCRtpSender.getCapabilities(v);e<15019&&(y.codecs=y.codecs.filter(function(M){return M.name!=="rtx"})),y.codecs.forEach(function(M){M.name==="H264"&&M.parameters["level-asymmetry-allowed"]===void 0&&(M.parameters["level-asymmetry-allowed"]="1"),g.remoteCapabilities&&g.remoteCapabilities.codecs&&g.remoteCapabilities.codecs.forEach(function(P){M.name.toLowerCase()===P.name.toLowerCase()&&M.clockRate===P.clockRate&&(M.preferredPayloadType=P.payloadType)})}),y.headerExtensions.forEach(function(M){var P=g.remoteCapabilities&&g.remoteCapabilities.headerExtensions||[];P.forEach(function(I){M.uri===I.uri&&(M.id=I.id)})});var C=g.sendEncodingParameters||[{ssrc:(2*h+1)*1001}];m&&e>=15019&&v==="video"&&!C[0].rtx&&(C[0].rtx={ssrc:C[0].ssrc+1}),g.wantReceive&&(g.rtpReceiver=new n.RTCRtpReceiver(g.dtlsTransport,v)),g.localCapabilities=y,g.sendEncodingParameters=C}),c._config.bundlePolicy!=="max-compat"&&(d+="a=group:BUNDLE "+c.transceivers.map(function(g){return g.mid}).join(" ")+`\r
`),d+=`a=ice-options:trickle\r
`,c.transceivers.forEach(function(g,h){d+=il(g,g.localCapabilities,"offer",g.stream,c._dtlsRole),d+=`a=rtcp-rsize\r
`,g.iceGatherer&&c.iceGatheringState!=="new"&&(h===0||!c.usingBundle)&&(g.iceGatherer.getLocalCandidates().forEach(function(m){m.component=1,d+="a="+De.writeCandidate(m)+`\r
`}),g.iceGatherer.state==="completed"&&(d+=`a=end-of-candidates\r
`))});var p=new n.RTCSessionDescription({type:"offer",sdp:d});return Promise.resolve(p)},s.prototype.createAnswer=function(){var c=this;if(c._isClosed)return Promise.reject(bt("InvalidStateError","Can not call createAnswer after close"));if(!(c.signalingState==="have-remote-offer"||c.signalingState==="have-local-pranswer"))return Promise.reject(bt("InvalidStateError","Can not call createAnswer in signalingState "+c.signalingState));var l=De.writeSessionBoilerplate(c._sdpSessionId,c._sdpSessionVersion++);c.usingBundle&&(l+="a=group:BUNDLE "+c.transceivers.map(function(d){return d.mid}).join(" ")+`\r
`),l+=`a=ice-options:trickle\r
`;var u=De.getMediaSections(c._remoteDescription.sdp).length;c.transceivers.forEach(function(d,p){if(!(p+1>u)){if(d.rejected){d.kind==="application"?d.protocol==="DTLS/SCTP"?l+=`m=application 0 DTLS/SCTP 5000\r
`:l+="m=application 0 "+d.protocol+` webrtc-datachannel\r
`:d.kind==="audio"?l+=`m=audio 0 UDP/TLS/RTP/SAVPF 0\r
a=rtpmap:0 PCMU/8000\r
`:d.kind==="video"&&(l+=`m=video 0 UDP/TLS/RTP/SAVPF 120\r
a=rtpmap:120 VP8/90000\r
`),l+=`c=IN IP4 0.0.0.0\r
a=inactive\r
a=mid:`+d.mid+`\r
`;return}if(d.stream){var g;d.kind==="audio"?g=d.stream.getAudioTracks()[0]:d.kind==="video"&&(g=d.stream.getVideoTracks()[0]),g&&e>=15019&&d.kind==="video"&&!d.sendEncodingParameters[0].rtx&&(d.sendEncodingParameters[0].rtx={ssrc:d.sendEncodingParameters[0].ssrc+1})}var h=ss(d.localCapabilities,d.remoteCapabilities),m=h.codecs.filter(function(v){return v.name.toLowerCase()==="rtx"}).length;!m&&d.sendEncodingParameters[0].rtx&&delete d.sendEncodingParameters[0].rtx,l+=il(d,h,"answer",d.stream,c._dtlsRole),d.rtcpParameters&&d.rtcpParameters.reducedSize&&(l+=`a=rtcp-rsize\r
`)}});var f=new n.RTCSessionDescription({type:"answer",sdp:l});return Promise.resolve(f)},s.prototype.addIceCandidate=function(c){var l=this,u;return c&&!(c.sdpMLineIndex!==void 0||c.sdpMid)?Promise.reject(new TypeError("sdpMLineIndex or sdpMid required")):new Promise(function(f,d){if(l._remoteDescription)if(!c||c.candidate==="")for(var p=0;p<l.transceivers.length&&!(!l.transceivers[p].rejected&&(l.transceivers[p].iceTransport.addRemoteCandidate({}),u=De.getMediaSections(l._remoteDescription.sdp),u[p]+=`a=end-of-candidates\r
`,l._remoteDescription.sdp=De.getDescription(l._remoteDescription.sdp)+u.join(""),l.usingBundle));p++);else{var g=c.sdpMLineIndex;if(c.sdpMid){for(var h=0;h<l.transceivers.length;h++)if(l.transceivers[h].mid===c.sdpMid){g=h;break}}var m=l.transceivers[g];if(m){if(m.rejected)return f();var v=Object.keys(c.candidate).length>0?De.parseCandidate(c.candidate):{};if(v.protocol==="tcp"&&(v.port===0||v.port===9)||v.component&&v.component!==1)return f();if((g===0||g>0&&m.iceTransport!==l.transceivers[0].iceTransport)&&!Do(m.iceTransport,v))return d(bt("OperationError","Can not add ICE candidate"));var S=c.candidate.trim();S.indexOf("a=")===0&&(S=S.substr(2)),u=De.getMediaSections(l._remoteDescription.sdp),u[g]+="a="+(v.type?S:"end-of-candidates")+`\r
`,l._remoteDescription.sdp=De.getDescription(l._remoteDescription.sdp)+u.join("")}else return d(bt("OperationError","Can not add ICE candidate"))}else return d(bt("InvalidStateError","Can not add ICE candidate without a remote description"));f()})},s.prototype.getStats=function(c){if(c&&c instanceof n.MediaStreamTrack){var l=null;if(this.transceivers.forEach(function(f){f.rtpSender&&f.rtpSender.track===c?l=f.rtpSender:f.rtpReceiver&&f.rtpReceiver.track===c&&(l=f.rtpReceiver)}),!l)throw bt("InvalidAccessError","Invalid selector.");return l.getStats()}var u=[];return this.transceivers.forEach(function(f){["rtpSender","rtpReceiver","iceGatherer","iceTransport","dtlsTransport"].forEach(function(d){f[d]&&u.push(f[d].getStats())})}),Promise.all(u).then(function(f){var d=new Map;return f.forEach(function(p){p.forEach(function(g){d.set(g.id,g)})}),d})};var o=["RTCRtpSender","RTCRtpReceiver","RTCIceGatherer","RTCIceTransport","RTCDtlsTransport"];o.forEach(function(c){var l=n[c];if(l&&l.prototype&&l.prototype.getStats){var u=l.prototype.getStats;l.prototype.getStats=function(){return u.apply(this).then(function(f){var d=new Map;return Object.keys(f).forEach(function(p){f[p].type=Um(f[p]),d.set(p,f[p])}),d})}}});var a=["createOffer","createAnswer"];return a.forEach(function(c){var l=s.prototype[c];s.prototype[c]=function(){var u=arguments;return typeof u[0]=="function"||typeof u[1]=="function"?l.apply(this,[arguments[2]]).then(function(f){typeof u[0]=="function"&&u[0].apply(null,[f])},function(f){typeof u[1]=="function"&&u[1].apply(null,[f])}):l.apply(this,arguments)}}),a=["setLocalDescription","setRemoteDescription","addIceCandidate"],a.forEach(function(c){var l=s.prototype[c];s.prototype[c]=function(){var u=arguments;return typeof u[1]=="function"||typeof u[2]=="function"?l.apply(this,arguments).then(function(){typeof u[1]=="function"&&u[1].apply(null)},function(f){typeof u[2]=="function"&&u[2].apply(null,[f])}):l.apply(this,arguments)}}),["getStats"].forEach(function(c){var l=s.prototype[c];s.prototype[c]=function(){var u=arguments;return typeof u[1]=="function"?l.apply(this,arguments).then(function(){typeof u[1]=="function"&&u[1].apply(null)}):l.apply(this,arguments)}}),s};function qf(n){const e=n&&n.navigator,t=function(r){return{name:{PermissionDeniedError:"NotAllowedError"}[r.name]||r.name,message:r.message,constraint:r.constraint,toString(){return this.name}}},i=e.mediaDevices.getUserMedia.bind(e.mediaDevices);e.mediaDevices.getUserMedia=function(r){return i(r).catch(s=>Promise.reject(t(s)))}}function Xf(n){"getDisplayMedia"in n.navigator&&n.navigator.mediaDevices&&(n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices||(n.navigator.mediaDevices.getDisplayMedia=n.navigator.getDisplayMedia.bind(n.navigator)))}function Ra(n,e){if(n.RTCIceGatherer&&(n.RTCIceCandidate||(n.RTCIceCandidate=function(r){return r}),n.RTCSessionDescription||(n.RTCSessionDescription=function(r){return r}),e.version<15025)){const i=Object.getOwnPropertyDescriptor(n.MediaStreamTrack.prototype,"enabled");Object.defineProperty(n.MediaStreamTrack.prototype,"enabled",{set(r){i.set.call(this,r);const s=new Event("enabled");s.enabled=r,this.dispatchEvent(s)}})}n.RTCRtpSender&&!("dtmf"in n.RTCRtpSender.prototype)&&Object.defineProperty(n.RTCRtpSender.prototype,"dtmf",{get(){return this._dtmf===void 0&&(this.track.kind==="audio"?this._dtmf=new n.RTCDtmfSender(this):this.track.kind==="video"&&(this._dtmf=null)),this._dtmf}}),n.RTCDtmfSender&&!n.RTCDTMFSender&&(n.RTCDTMFSender=n.RTCDtmfSender);const t=zm(n,e.version);n.RTCPeerConnection=function(r){return r&&r.iceServers&&(r.iceServers=Fm(r.iceServers,e.version),cc("ICE servers after filtering:",r.iceServers)),new t(r)},n.RTCPeerConnection.prototype=t.prototype}function $f(n){n.RTCRtpSender&&!("replaceTrack"in n.RTCRtpSender.prototype)&&(n.RTCRtpSender.prototype.replaceTrack=n.RTCRtpSender.prototype.setTrack)}const sl=Object.freeze(Object.defineProperty({__proto__:null,shimGetDisplayMedia:Xf,shimGetUserMedia:qf,shimPeerConnection:Ra,shimReplaceTrack:$f},Symbol.toStringTag,{value:"Module"}));function Yf(n,e){const t=n&&n.navigator,i=n&&n.MediaStreamTrack;if(t.getUserMedia=function(r,s,o){fo("navigator.getUserMedia","navigator.mediaDevices.getUserMedia"),t.mediaDevices.getUserMedia(r).then(s,o)},!(e.version>55&&"autoGainControl"in t.mediaDevices.getSupportedConstraints())){const r=function(o,a,c){a in o&&!(c in o)&&(o[c]=o[a],delete o[a])},s=t.mediaDevices.getUserMedia.bind(t.mediaDevices);if(t.mediaDevices.getUserMedia=function(o){return typeof o=="object"&&typeof o.audio=="object"&&(o=JSON.parse(JSON.stringify(o)),r(o.audio,"autoGainControl","mozAutoGainControl"),r(o.audio,"noiseSuppression","mozNoiseSuppression")),s(o)},i&&i.prototype.getSettings){const o=i.prototype.getSettings;i.prototype.getSettings=function(){const a=o.apply(this,arguments);return r(a,"mozAutoGainControl","autoGainControl"),r(a,"mozNoiseSuppression","noiseSuppression"),a}}if(i&&i.prototype.applyConstraints){const o=i.prototype.applyConstraints;i.prototype.applyConstraints=function(a){return this.kind==="audio"&&typeof a=="object"&&(a=JSON.parse(JSON.stringify(a)),r(a,"autoGainControl","mozAutoGainControl"),r(a,"noiseSuppression","mozNoiseSuppression")),o.apply(this,[a])}}}}function Gm(n,e){n.navigator.mediaDevices&&"getDisplayMedia"in n.navigator.mediaDevices||n.navigator.mediaDevices&&(n.navigator.mediaDevices.getDisplayMedia=function(i){if(!(i&&i.video)){const r=new DOMException("getDisplayMedia without video constraints is undefined");return r.name="NotFoundError",r.code=8,Promise.reject(r)}return i.video===!0?i.video={mediaSource:e}:i.video.mediaSource=e,n.navigator.mediaDevices.getUserMedia(i)})}function Kf(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function Aa(n,e){if(typeof n!="object"||!(n.RTCPeerConnection||n.mozRTCPeerConnection))return;!n.RTCPeerConnection&&n.mozRTCPeerConnection&&(n.RTCPeerConnection=n.mozRTCPeerConnection),e.version<53&&["setLocalDescription","setRemoteDescription","addIceCandidate"].forEach(function(r){const s=n.RTCPeerConnection.prototype[r],o={[r](){return arguments[0]=new(r==="addIceCandidate"?n.RTCIceCandidate:n.RTCSessionDescription)(arguments[0]),s.apply(this,arguments)}};n.RTCPeerConnection.prototype[r]=o[r]});const t={inboundrtp:"inbound-rtp",outboundrtp:"outbound-rtp",candidatepair:"candidate-pair",localcandidate:"local-candidate",remotecandidate:"remote-candidate"},i=n.RTCPeerConnection.prototype.getStats;n.RTCPeerConnection.prototype.getStats=function(){const[s,o,a]=arguments;return i.apply(this,[s||null]).then(c=>{if(e.version<53&&!o)try{c.forEach(l=>{l.type=t[l.type]||l.type})}catch(l){if(l.name!=="TypeError")throw l;c.forEach((u,f)=>{c.set(f,Object.assign({},u,{type:t[u.type]||u.type}))})}return c}).then(o,a)}}function Jf(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpSender.prototype)return;const e=n.RTCPeerConnection.prototype.getSenders;e&&(n.RTCPeerConnection.prototype.getSenders=function(){const r=e.apply(this,[]);return r.forEach(s=>s._pc=this),r});const t=n.RTCPeerConnection.prototype.addTrack;t&&(n.RTCPeerConnection.prototype.addTrack=function(){const r=t.apply(this,arguments);return r._pc=this,r}),n.RTCRtpSender.prototype.getStats=function(){return this.track?this._pc.getStats(this.track):Promise.resolve(new Map)}}function Zf(n){if(!(typeof n=="object"&&n.RTCPeerConnection&&n.RTCRtpSender)||n.RTCRtpSender&&"getStats"in n.RTCRtpReceiver.prototype)return;const e=n.RTCPeerConnection.prototype.getReceivers;e&&(n.RTCPeerConnection.prototype.getReceivers=function(){const i=e.apply(this,[]);return i.forEach(r=>r._pc=this),i}),cr(n,"track",t=>(t.receiver._pc=t.srcElement,t)),n.RTCRtpReceiver.prototype.getStats=function(){return this._pc.getStats(this.track)}}function Qf(n){!n.RTCPeerConnection||"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){fo("removeStream","removeTrack"),this.getSenders().forEach(i=>{i.track&&t.getTracks().includes(i.track)&&this.removeTrack(i)})})}function ed(n){n.DataChannel&&!n.RTCDataChannel&&(n.RTCDataChannel=n.DataChannel)}function td(n){if(!(typeof n=="object"&&n.RTCPeerConnection))return;const e=n.RTCPeerConnection.prototype.addTransceiver;e&&(n.RTCPeerConnection.prototype.addTransceiver=function(){this.setParametersPromises=[];const i=arguments[1],r=i&&"sendEncodings"in i;r&&i.sendEncodings.forEach(o=>{if("rid"in o&&!/^[a-z0-9]{0,16}$/i.test(o.rid))throw new TypeError("Invalid RID value provided.");if("scaleResolutionDownBy"in o&&!(parseFloat(o.scaleResolutionDownBy)>=1))throw new RangeError("scale_resolution_down_by must be >= 1.0");if("maxFramerate"in o&&!(parseFloat(o.maxFramerate)>=0))throw new RangeError("max_framerate must be >= 0.0")});const s=e.apply(this,arguments);if(r){const{sender:o}=s,a=o.getParameters();(!("encodings"in a)||a.encodings.length===1&&Object.keys(a.encodings[0]).length===0)&&(a.encodings=i.sendEncodings,o.sendEncodings=i.sendEncodings,this.setParametersPromises.push(o.setParameters(a).then(()=>{delete o.sendEncodings}).catch(()=>{delete o.sendEncodings})))}return s})}function nd(n){if(!(typeof n=="object"&&n.RTCRtpSender))return;const e=n.RTCRtpSender.prototype.getParameters;e&&(n.RTCRtpSender.prototype.getParameters=function(){const i=e.apply(this,arguments);return"encodings"in i||(i.encodings=[].concat(this.sendEncodings||[{}])),i})}function id(n){if(!(typeof n=="object"&&n.RTCPeerConnection))return;const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}function rd(n){if(!(typeof n=="object"&&n.RTCPeerConnection))return;const e=n.RTCPeerConnection.prototype.createAnswer;n.RTCPeerConnection.prototype.createAnswer=function(){return this.setParametersPromises&&this.setParametersPromises.length?Promise.all(this.setParametersPromises).then(()=>e.apply(this,arguments)).finally(()=>{this.setParametersPromises=[]}):e.apply(this,arguments)}}const ol=Object.freeze(Object.defineProperty({__proto__:null,shimAddTransceiver:td,shimCreateAnswer:rd,shimCreateOffer:id,shimGetDisplayMedia:Gm,shimGetParameters:nd,shimGetUserMedia:Yf,shimOnTrack:Kf,shimPeerConnection:Aa,shimRTCDataChannel:ed,shimReceiverGetStats:Zf,shimRemoveStream:Qf,shimSenderGetStats:Jf},Symbol.toStringTag,{value:"Module"}));function sd(n){if(!(typeof n!="object"||!n.RTCPeerConnection)){if("getLocalStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getLocalStreams=function(){return this._localStreams||(this._localStreams=[]),this._localStreams}),!("addStream"in n.RTCPeerConnection.prototype)){const e=n.RTCPeerConnection.prototype.addTrack;n.RTCPeerConnection.prototype.addStream=function(i){this._localStreams||(this._localStreams=[]),this._localStreams.includes(i)||this._localStreams.push(i),i.getAudioTracks().forEach(r=>e.call(this,r,i)),i.getVideoTracks().forEach(r=>e.call(this,r,i))},n.RTCPeerConnection.prototype.addTrack=function(i,...r){return r&&r.forEach(s=>{this._localStreams?this._localStreams.includes(s)||this._localStreams.push(s):this._localStreams=[s]}),e.apply(this,arguments)}}"removeStream"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.removeStream=function(t){this._localStreams||(this._localStreams=[]);const i=this._localStreams.indexOf(t);if(i===-1)return;this._localStreams.splice(i,1);const r=t.getTracks();this.getSenders().forEach(s=>{r.includes(s.track)&&this.removeTrack(s)})})}}function od(n){if(!(typeof n!="object"||!n.RTCPeerConnection)&&("getRemoteStreams"in n.RTCPeerConnection.prototype||(n.RTCPeerConnection.prototype.getRemoteStreams=function(){return this._remoteStreams?this._remoteStreams:[]}),!("onaddstream"in n.RTCPeerConnection.prototype))){Object.defineProperty(n.RTCPeerConnection.prototype,"onaddstream",{get(){return this._onaddstream},set(t){this._onaddstream&&(this.removeEventListener("addstream",this._onaddstream),this.removeEventListener("track",this._onaddstreampoly)),this.addEventListener("addstream",this._onaddstream=t),this.addEventListener("track",this._onaddstreampoly=i=>{i.streams.forEach(r=>{if(this._remoteStreams||(this._remoteStreams=[]),this._remoteStreams.includes(r))return;this._remoteStreams.push(r);const s=new Event("addstream");s.stream=r,this.dispatchEvent(s)})})}});const e=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){const i=this;return this._onaddstreampoly||this.addEventListener("track",this._onaddstreampoly=function(r){r.streams.forEach(s=>{if(i._remoteStreams||(i._remoteStreams=[]),i._remoteStreams.indexOf(s)>=0)return;i._remoteStreams.push(s);const o=new Event("addstream");o.stream=s,i.dispatchEvent(o)})}),e.apply(i,arguments)}}}function ad(n){if(typeof n!="object"||!n.RTCPeerConnection)return;const e=n.RTCPeerConnection.prototype,t=e.createOffer,i=e.createAnswer,r=e.setLocalDescription,s=e.setRemoteDescription,o=e.addIceCandidate;e.createOffer=function(l,u){const f=arguments.length>=2?arguments[2]:arguments[0],d=t.apply(this,[f]);return u?(d.then(l,u),Promise.resolve()):d},e.createAnswer=function(l,u){const f=arguments.length>=2?arguments[2]:arguments[0],d=i.apply(this,[f]);return u?(d.then(l,u),Promise.resolve()):d};let a=function(c,l,u){const f=r.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f};e.setLocalDescription=a,a=function(c,l,u){const f=s.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f},e.setRemoteDescription=a,a=function(c,l,u){const f=o.apply(this,[c]);return u?(f.then(l,u),Promise.resolve()):f},e.addIceCandidate=a}function cd(n){const e=n&&n.navigator;if(e.mediaDevices&&e.mediaDevices.getUserMedia){const t=e.mediaDevices,i=t.getUserMedia.bind(t);e.mediaDevices.getUserMedia=r=>i(ld(r))}!e.getUserMedia&&e.mediaDevices&&e.mediaDevices.getUserMedia&&(e.getUserMedia=function(i,r,s){e.mediaDevices.getUserMedia(i).then(r,s)}.bind(e))}function ld(n){return n&&n.video!==void 0?Object.assign({},n,{video:Ff(n.video)}):n}function ud(n){if(!n.RTCPeerConnection)return;const e=n.RTCPeerConnection;n.RTCPeerConnection=function(i,r){if(i&&i.iceServers){const s=[];for(let o=0;o<i.iceServers.length;o++){let a=i.iceServers[o];!a.hasOwnProperty("urls")&&a.hasOwnProperty("url")?(fo("RTCIceServer.url","RTCIceServer.urls"),a=JSON.parse(JSON.stringify(a)),a.urls=a.url,delete a.url,s.push(a)):s.push(i.iceServers[o])}i.iceServers=s}return new e(i,r)},n.RTCPeerConnection.prototype=e.prototype,"generateCertificate"in e&&Object.defineProperty(n.RTCPeerConnection,"generateCertificate",{get(){return e.generateCertificate}})}function fd(n){typeof n=="object"&&n.RTCTrackEvent&&"receiver"in n.RTCTrackEvent.prototype&&!("transceiver"in n.RTCTrackEvent.prototype)&&Object.defineProperty(n.RTCTrackEvent.prototype,"transceiver",{get(){return{receiver:this.receiver}}})}function dd(n){const e=n.RTCPeerConnection.prototype.createOffer;n.RTCPeerConnection.prototype.createOffer=function(i){if(i){typeof i.offerToReceiveAudio<"u"&&(i.offerToReceiveAudio=!!i.offerToReceiveAudio);const r=this.getTransceivers().find(o=>o.receiver.track.kind==="audio");i.offerToReceiveAudio===!1&&r?r.direction==="sendrecv"?r.setDirection?r.setDirection("sendonly"):r.direction="sendonly":r.direction==="recvonly"&&(r.setDirection?r.setDirection("inactive"):r.direction="inactive"):i.offerToReceiveAudio===!0&&!r&&this.addTransceiver("audio"),typeof i.offerToReceiveVideo<"u"&&(i.offerToReceiveVideo=!!i.offerToReceiveVideo);const s=this.getTransceivers().find(o=>o.receiver.track.kind==="video");i.offerToReceiveVideo===!1&&s?s.direction==="sendrecv"?s.setDirection?s.setDirection("sendonly"):s.direction="sendonly":s.direction==="recvonly"&&(s.setDirection?s.setDirection("inactive"):s.direction="inactive"):i.offerToReceiveVideo===!0&&!s&&this.addTransceiver("video")}return e.apply(this,arguments)}}function hd(n){typeof n!="object"||n.AudioContext||(n.AudioContext=n.webkitAudioContext)}const al=Object.freeze(Object.defineProperty({__proto__:null,shimAudioContext:hd,shimCallbacksAPI:ad,shimConstraints:ld,shimCreateOfferLegacy:dd,shimGetUserMedia:cd,shimLocalStreamsAPI:sd,shimRTCIceServerUrls:ud,shimRemoteStreamsAPI:od,shimTrackEventTransceiver:fd},Symbol.toStringTag,{value:"Module"}));function Fs(n){if(!n.RTCIceCandidate||n.RTCIceCandidate&&"foundation"in n.RTCIceCandidate.prototype)return;const e=n.RTCIceCandidate;n.RTCIceCandidate=function(i){if(typeof i=="object"&&i.candidate&&i.candidate.indexOf("a=")===0&&(i=JSON.parse(JSON.stringify(i)),i.candidate=i.candidate.substr(2)),i.candidate&&i.candidate.length){const r=new e(i),s=Os.parseCandidate(i.candidate),o=Object.assign(r,s);return o.toJSON=function(){return{candidate:o.candidate,sdpMid:o.sdpMid,sdpMLineIndex:o.sdpMLineIndex,usernameFragment:o.usernameFragment}},o}return new e(i)},n.RTCIceCandidate.prototype=e.prototype,cr(n,"icecandidate",t=>(t.candidate&&Object.defineProperty(t,"candidate",{value:new n.RTCIceCandidate(t.candidate),writable:"false"}),t))}function wr(n,e){if(!n.RTCPeerConnection)return;"sctp"in n.RTCPeerConnection.prototype||Object.defineProperty(n.RTCPeerConnection.prototype,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp}});const t=function(a){if(!a||!a.sdp)return!1;const c=Os.splitSections(a.sdp);return c.shift(),c.some(l=>{const u=Os.parseMLine(l);return u&&u.kind==="application"&&u.protocol.indexOf("SCTP")!==-1})},i=function(a){const c=a.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/);if(c===null||c.length<2)return-1;const l=parseInt(c[1],10);return l!==l?-1:l},r=function(a){let c=65536;return e.browser==="firefox"&&(e.version<57?a===-1?c=16384:c=2147483637:e.version<60?c=e.version===57?65535:65536:c=2147483637),c},s=function(a,c){let l=65536;e.browser==="firefox"&&e.version===57&&(l=65535);const u=Os.matchPrefix(a.sdp,"a=max-message-size:");return u.length>0?l=parseInt(u[0].substr(19),10):e.browser==="firefox"&&c!==-1&&(l=2147483637),l},o=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(){if(this._sctp=null,e.browser==="chrome"&&e.version>=76){const{sdpSemantics:c}=this.getConfiguration();c==="plan-b"&&Object.defineProperty(this,"sctp",{get(){return typeof this._sctp>"u"?null:this._sctp},enumerable:!0,configurable:!0})}if(t(arguments[0])){const c=i(arguments[0]),l=r(c),u=s(arguments[0],c);let f;l===0&&u===0?f=Number.POSITIVE_INFINITY:l===0||u===0?f=Math.max(l,u):f=Math.min(l,u);const d={};Object.defineProperty(d,"maxMessageSize",{get(){return f}}),this._sctp=d}return o.apply(this,arguments)}}function Rr(n){if(!(n.RTCPeerConnection&&"createDataChannel"in n.RTCPeerConnection.prototype))return;function e(i,r){const s=i.send;i.send=function(){const a=arguments[0],c=a.length||a.size||a.byteLength;if(i.readyState==="open"&&r.sctp&&c>r.sctp.maxMessageSize)throw new TypeError("Message too large (can send a maximum of "+r.sctp.maxMessageSize+" bytes)");return s.apply(i,arguments)}}const t=n.RTCPeerConnection.prototype.createDataChannel;n.RTCPeerConnection.prototype.createDataChannel=function(){const r=t.apply(this,arguments);return e(r,this),r},cr(n,"datachannel",i=>(e(i.channel,i.target),i))}function Pa(n){if(!n.RTCPeerConnection||"connectionState"in n.RTCPeerConnection.prototype)return;const e=n.RTCPeerConnection.prototype;Object.defineProperty(e,"connectionState",{get(){return{completed:"connected",checking:"connecting"}[this.iceConnectionState]||this.iceConnectionState},enumerable:!0,configurable:!0}),Object.defineProperty(e,"onconnectionstatechange",{get(){return this._onconnectionstatechange||null},set(t){this._onconnectionstatechange&&(this.removeEventListener("connectionstatechange",this._onconnectionstatechange),delete this._onconnectionstatechange),t&&this.addEventListener("connectionstatechange",this._onconnectionstatechange=t)},enumerable:!0,configurable:!0}),["setLocalDescription","setRemoteDescription"].forEach(t=>{const i=e[t];e[t]=function(){return this._connectionstatechangepoly||(this._connectionstatechangepoly=r=>{const s=r.target;if(s._lastConnectionState!==s.connectionState){s._lastConnectionState=s.connectionState;const o=new Event("connectionstatechange",r);s.dispatchEvent(o)}return r},this.addEventListener("iceconnectionstatechange",this._connectionstatechangepoly)),i.apply(this,arguments)}})}function Da(n,e){if(!n.RTCPeerConnection||e.browser==="chrome"&&e.version>=71||e.browser==="safari"&&e.version>=605)return;const t=n.RTCPeerConnection.prototype.setRemoteDescription;n.RTCPeerConnection.prototype.setRemoteDescription=function(r){if(r&&r.sdp&&r.sdp.indexOf(`
a=extmap-allow-mixed`)!==-1){const s=r.sdp.split(`
`).filter(o=>o.trim()!=="a=extmap-allow-mixed").join(`
`);n.RTCSessionDescription&&r instanceof n.RTCSessionDescription?arguments[0]=new n.RTCSessionDescription({type:r.type,sdp:s}):r.sdp=s}return t.apply(this,arguments)}}function Ns(n,e){if(!(n.RTCPeerConnection&&n.RTCPeerConnection.prototype))return;const t=n.RTCPeerConnection.prototype.addIceCandidate;!t||t.length===0||(n.RTCPeerConnection.prototype.addIceCandidate=function(){return arguments[0]?(e.browser==="chrome"&&e.version<78||e.browser==="firefox"&&e.version<68||e.browser==="safari")&&arguments[0]&&arguments[0].candidate===""?Promise.resolve():t.apply(this,arguments):(arguments[1]&&arguments[1].apply(null),Promise.resolve())})}const Vm=Object.freeze(Object.defineProperty({__proto__:null,removeExtmapAllowMixed:Da,shimAddIceCandidateNullOrEmpty:Ns,shimConnectionState:Pa,shimMaxMessageSize:wr,shimRTCIceCandidate:Fs,shimSendThrowTypeError:Rr},Symbol.toStringTag,{value:"Module"}));function Hm({window:n}={},e={shimChrome:!0,shimFirefox:!0,shimEdge:!0,shimSafari:!0}){const t=cc,i=km(n),r={browserDetails:i,commonShim:Vm,extractVersion:Er,disableLog:Lm,disableWarnings:Im};switch(i.browser){case"chrome":if(!nl||!wa||!e.shimChrome)return t("Chrome shim is not included in this adapter release."),r;if(i.version===null)return t("Chrome shim can not determine version, not shimming."),r;t("adapter.js shimming chrome."),r.browserShim=nl,Ns(n,i),Nf(n,i),Uf(n),wa(n,i),Bf(n),Wf(n,i),zf(n),Gf(n),Vf(n),jf(n,i),Fs(n),Pa(n),wr(n,i),Rr(n),Da(n,i);break;case"firefox":if(!ol||!Aa||!e.shimFirefox)return t("Firefox shim is not included in this adapter release."),r;t("adapter.js shimming firefox."),r.browserShim=ol,Ns(n,i),Yf(n,i),Aa(n,i),Kf(n),Qf(n),Jf(n),Zf(n),ed(n),td(n),nd(n),id(n),rd(n),Fs(n),Pa(n),wr(n,i),Rr(n);break;case"edge":if(!sl||!Ra||!e.shimEdge)return t("MS edge shim is not included in this adapter release."),r;t("adapter.js shimming edge."),r.browserShim=sl,qf(n),Xf(n),Ra(n,i),$f(n),wr(n,i),Rr(n);break;case"safari":if(!al||!e.shimSafari)return t("Safari shim is not included in this adapter release."),r;t("adapter.js shimming safari."),r.browserShim=al,Ns(n,i),ud(n),dd(n),ad(n),sd(n),od(n),fd(n),cd(n),hd(n),Fs(n),wr(n,i),Rr(n),Da(n,i);break;default:t("Unsupported browser!");break}return r}const cl=Hm({window:typeof window>"u"?void 0:window});function yn(n,e,t,i){Object.defineProperty(n,e,{get:t,set:i,enumerable:!0,configurable:!0})}var Lo=cl.default||cl,mr=new(function(){function n(){this.isIOS=["iPad","iPhone","iPod"].includes(navigator.platform),this.supportedBrowsers=["firefox","chrome","safari"],this.minFirefoxVersion=59,this.minChromeVersion=72,this.minSafariVersion=605}return n.prototype.isWebRTCSupported=function(){return typeof RTCPeerConnection<"u"},n.prototype.isBrowserSupported=function(){var e=this.getBrowser(),t=this.getVersion(),i=this.supportedBrowsers.includes(e);return i?e==="chrome"?t>=this.minChromeVersion:e==="firefox"?t>=this.minFirefoxVersion:e==="safari"?!this.isIOS&&t>=this.minSafariVersion:!1:!1},n.prototype.getBrowser=function(){return Lo.browserDetails.browser},n.prototype.getVersion=function(){return Lo.browserDetails.version||0},n.prototype.isUnifiedPlanSupported=function(){var e=this.getBrowser(),t=Lo.browserDetails.version||0;if(e==="chrome"&&t<this.minChromeVersion)return!1;if(e==="firefox"&&t>=this.minFirefoxVersion)return!0;if(!window.RTCRtpTransceiver||!("currentDirection"in RTCRtpTransceiver.prototype))return!1;var i,r=!1;try{i=new RTCPeerConnection,i.addTransceiver("audio"),r=!0}catch{}finally{i&&i.close()}return r},n.prototype.toString=function(){return`Supports:
    browser:`.concat(this.getBrowser(),`
    version:`).concat(this.getVersion(),`
    isIOS:`).concat(this.isIOS,`
    isWebRTCSupported:`).concat(this.isWebRTCSupported(),`
    isBrowserSupported:`).concat(this.isBrowserSupported(),`
    isUnifiedPlanSupported:`).concat(this.isUnifiedPlanSupported())},n}()),ll={iceServers:[{urls:"stun:stun.l.google.com:19302"},{urls:["turn:eu-0.turn.peerjs.com:3478","turn:us-0.turn.peerjs.com:3478"],username:"peerjs",credential:"peerjsp"}],sdpSemantics:"unified-plan"},Wm=function(){function n(){this.CLOUD_HOST="0.peerjs.com",this.CLOUD_PORT=443,this.chunkedBrowsers={Chrome:1,chrome:1},this.chunkedMTU=16300,this.defaultConfig=ll,this.browser=mr.getBrowser(),this.browserVersion=mr.getVersion(),this.supports=function(){var e={browser:mr.isBrowserSupported(),webRTC:mr.isWebRTCSupported(),audioVideo:!1,data:!1,binaryBlob:!1,reliable:!1};if(!e.webRTC)return e;var t;try{t=new RTCPeerConnection(ll),e.audioVideo=!0;var i=void 0;try{i=t.createDataChannel("_PEERJSTEST",{ordered:!0}),e.data=!0,e.reliable=!!i.ordered;try{i.binaryType="blob",e.binaryBlob=!mr.isIOS}catch{}}catch{}finally{i&&i.close()}}catch{}finally{t&&t.close()}return e}(),this.pack=Zc.pack,this.unpack=Zc.unpack,this._dataCount=1}return n.prototype.noop=function(){},n.prototype.validateId=function(e){return!e||/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/.test(e)},n.prototype.chunk=function(e){for(var t=[],i=e.size,r=Math.ceil(i/Xe.chunkedMTU),s=0,o=0;o<i;){var a=Math.min(i,o+Xe.chunkedMTU),c=e.slice(o,a),l={__peerData:this._dataCount,n:s,data:c,total:r};t.push(l),o=a,s++}return this._dataCount++,t},n.prototype.blobToArrayBuffer=function(e,t){var i=new FileReader;return i.onload=function(r){r.target&&t(r.target.result)},i.readAsArrayBuffer(e),i},n.prototype.binaryStringToArrayBuffer=function(e){for(var t=new Uint8Array(e.length),i=0;i<e.length;i++)t[i]=e.charCodeAt(i)&255;return t.buffer},n.prototype.randomToken=function(){return Math.random().toString(36).slice(2)},n.prototype.isSecure=function(){return location.protocol==="https:"},n}(),Xe=new Wm,pd={};yn(pd,"Peer",()=>Js,n=>Js=n);var Xr={},jm=Object.prototype.hasOwnProperty,Lt="~";function Vr(){}Object.create&&(Vr.prototype=Object.create(null),new Vr().__proto__||(Lt=!1));function qm(n,e,t){this.fn=n,this.context=e,this.once=t||!1}function md(n,e,t,i,r){if(typeof t!="function")throw new TypeError("The listener must be a function");var s=new qm(t,i||n,r),o=Lt?Lt+e:e;return n._events[o]?n._events[o].fn?n._events[o]=[n._events[o],s]:n._events[o].push(s):(n._events[o]=s,n._eventsCount++),n}function Us(n,e){--n._eventsCount===0?n._events=new Vr:delete n._events[e]}function Et(){this._events=new Vr,this._eventsCount=0}Et.prototype.eventNames=function(){var e=[],t,i;if(this._eventsCount===0)return e;for(i in t=this._events)jm.call(t,i)&&e.push(Lt?i.slice(1):i);return Object.getOwnPropertySymbols?e.concat(Object.getOwnPropertySymbols(t)):e};Et.prototype.listeners=function(e){var t=Lt?Lt+e:e,i=this._events[t];if(!i)return[];if(i.fn)return[i.fn];for(var r=0,s=i.length,o=new Array(s);r<s;r++)o[r]=i[r].fn;return o};Et.prototype.listenerCount=function(e){var t=Lt?Lt+e:e,i=this._events[t];return i?i.fn?1:i.length:0};Et.prototype.emit=function(e,t,i,r,s,o){var a=Lt?Lt+e:e;if(!this._events[a])return!1;var c=this._events[a],l=arguments.length,u,f;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),l){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,i),!0;case 4:return c.fn.call(c.context,t,i,r),!0;case 5:return c.fn.call(c.context,t,i,r,s),!0;case 6:return c.fn.call(c.context,t,i,r,s,o),!0}for(f=1,u=new Array(l-1);f<l;f++)u[f-1]=arguments[f];c.fn.apply(c.context,u)}else{var d=c.length,p;for(f=0;f<d;f++)switch(c[f].once&&this.removeListener(e,c[f].fn,void 0,!0),l){case 1:c[f].fn.call(c[f].context);break;case 2:c[f].fn.call(c[f].context,t);break;case 3:c[f].fn.call(c[f].context,t,i);break;case 4:c[f].fn.call(c[f].context,t,i,r);break;default:if(!u)for(p=1,u=new Array(l-1);p<l;p++)u[p-1]=arguments[p];c[f].fn.apply(c[f].context,u)}}return!0};Et.prototype.on=function(e,t,i){return md(this,e,t,i,!1)};Et.prototype.once=function(e,t,i){return md(this,e,t,i,!0)};Et.prototype.removeListener=function(e,t,i,r){var s=Lt?Lt+e:e;if(!this._events[s])return this;if(!t)return Us(this,s),this;var o=this._events[s];if(o.fn)o.fn===t&&(!r||o.once)&&(!i||o.context===i)&&Us(this,s);else{for(var a=0,c=[],l=o.length;a<l;a++)(o[a].fn!==t||r&&!o[a].once||i&&o[a].context!==i)&&c.push(o[a]);c.length?this._events[s]=c.length===1?c[0]:c:Us(this,s)}return this};Et.prototype.removeAllListeners=function(e){var t;return e?(t=Lt?Lt+e:e,this._events[t]&&Us(this,t)):(this._events=new Vr,this._eventsCount=0),this};Et.prototype.off=Et.prototype.removeListener;Et.prototype.addListener=Et.prototype.on;Et.prefixed=Lt;Et.EventEmitter=Et;Xr=Et;var Se={};yn(Se,"LogLevel",()=>kt,n=>kt=n);yn(Se,"default",()=>ul,n=>ul=n);var ri=function(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s},si=function(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))},Xm="PeerJS: ",kt;(function(n){n[n.Disabled=0]="Disabled",n[n.Errors=1]="Errors",n[n.Warnings=2]="Warnings",n[n.All=3]="All"})(kt||(kt={}));var $m=function(){function n(){this._logLevel=kt.Disabled}return Object.defineProperty(n.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){this._logLevel=e},enumerable:!1,configurable:!0}),n.prototype.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logLevel>=kt.All&&this._print.apply(this,si([kt.All],ri(e),!1))},n.prototype.warn=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logLevel>=kt.Warnings&&this._print.apply(this,si([kt.Warnings],ri(e),!1))},n.prototype.error=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];this._logLevel>=kt.Errors&&this._print.apply(this,si([kt.Errors],ri(e),!1))},n.prototype.setLogFunction=function(e){this._print=e},n.prototype._print=function(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];var r=si([Xm],ri(t),!1);for(var s in r)r[s]instanceof Error&&(r[s]="("+r[s].name+") "+r[s].message);e>=kt.All?console.log.apply(console,si([],ri(r),!1)):e>=kt.Warnings?console.warn.apply(console,si(["WARNING"],ri(r),!1)):e>=kt.Errors&&console.error.apply(console,si(["ERROR"],ri(r),!1))},n}(),ul=new $m,gd={};yn(gd,"Socket",()=>fl,n=>fl=n);var on;(function(n){n.Data="data",n.Media="media"})(on||(on={}));var tt;(function(n){n.BrowserIncompatible="browser-incompatible",n.Disconnected="disconnected",n.InvalidID="invalid-id",n.InvalidKey="invalid-key",n.Network="network",n.PeerUnavailable="peer-unavailable",n.SslUnavailable="ssl-unavailable",n.ServerError="server-error",n.SocketError="socket-error",n.SocketClosed="socket-closed",n.UnavailableID="unavailable-id",n.WebRTC="webrtc"})(tt||(tt={}));var Pn;(function(n){n.Binary="binary",n.BinaryUTF8="binary-utf8",n.JSON="json"})(Pn||(Pn={}));var Ln;(function(n){n.Message="message",n.Disconnected="disconnected",n.Error="error",n.Close="close"})(Ln||(Ln={}));var mt;(function(n){n.Heartbeat="HEARTBEAT",n.Candidate="CANDIDATE",n.Offer="OFFER",n.Answer="ANSWER",n.Open="OPEN",n.Error="ERROR",n.IdTaken="ID-TAKEN",n.InvalidKey="INVALID-KEY",n.Leave="LEAVE",n.Expire="EXPIRE"})(mt||(mt={}));var lc={};lc=JSON.parse('{"name":"peerjs","version":"1.4.7","keywords":["peerjs","webrtc","p2p","rtc"],"description":"PeerJS client","homepage":"https://peerjs.com","bugs":{"url":"https://github.com/peers/peerjs/issues"},"repository":{"type":"git","url":"https://github.com/peers/peerjs"},"license":"MIT","contributors":["Michelle Bu <michelle@michellebu.com>","afrokick <devbyru@gmail.com>","ericz <really.ez@gmail.com>","Jairo <kidandcat@gmail.com>","Jonas Gloning <34194370+jonasgloning@users.noreply.github.com>","Jairo Caro-Accino Viciana <jairo@galax.be>","Carlos Caballero <carlos.caballero.gonzalez@gmail.com>","hc <hheennrryy@gmail.com>","Muhammad Asif <capripio@gmail.com>","PrashoonB <prashoonbhattacharjee@gmail.com>","Harsh Bardhan Mishra <47351025+HarshCasper@users.noreply.github.com>","akotynski <aleksanderkotbury@gmail.com>","lmb <i@lmb.io>","Jairooo <jairocaro@msn.com>","Moritz Stückler <moritz.stueckler@gmail.com>","Simon <crydotsnakegithub@gmail.com>","Denis Lukov <denismassters@gmail.com>","Philipp Hancke <fippo@andyet.net>","Hans Oksendahl <hansoksendahl@gmail.com>","Jess <jessachandler@gmail.com>","khankuan <khankuan@gmail.com>","DUODVK <kurmanov.work@gmail.com>","XiZhao <kwang1imsa@gmail.com>","Matthias Lohr <matthias@lohr.me>","=frank tree <=frnktrb@googlemail.com>","Andre Eckardt <aeckardt@outlook.com>","Chris Cowan <agentme49@gmail.com>","Alex Chuev <alex@chuev.com>","alxnull <alxnull@e.mail.de>","Yemel Jardi <angel.jardi@gmail.com>","Ben Parnell <benjaminparnell.94@gmail.com>","Benny Lichtner <bennlich@gmail.com>","fresheneesz <bitetrudpublic@gmail.com>","bob.barstead@exaptive.com <bob.barstead@exaptive.com>","chandika <chandika@gmail.com>","emersion <contact@emersion.fr>","Christopher Van <cvan@users.noreply.github.com>","eddieherm <edhermoso@gmail.com>","Eduardo Pinho <enet4mikeenet@gmail.com>","Evandro Zanatta <ezanatta@tray.net.br>","Gardner Bickford <gardner@users.noreply.github.com>","Gian Luca <gianluca.cecchi@cynny.com>","PatrickJS <github@gdi2290.com>","jonnyf <github@jonathanfoss.co.uk>","Hizkia Felix <hizkifw@gmail.com>","Hristo Oskov <hristo.oskov@gmail.com>","Isaac Madwed <i.madwed@gmail.com>","Ilya Konanykhin <ilya.konanykhin@gmail.com>","jasonbarry <jasbarry@me.com>","Jonathan Burke <jonathan.burke.1311@googlemail.com>","Josh Hamit <josh.hamit@gmail.com>","Jordan Austin <jrax86@gmail.com>","Joel Wetzell <jwetzell@yahoo.com>","xizhao <kevin.wang@cloudera.com>","Alberto Torres <kungfoobar@gmail.com>","Jonathan Mayol <mayoljonathan@gmail.com>","Jefferson Felix <me@jsfelix.dev>","Rolf Erik Lekang <me@rolflekang.com>","Kevin Mai-Husan Chia <mhchia@users.noreply.github.com>","Pepijn de Vos <pepijndevos@gmail.com>","JooYoung <qkdlql@naver.com>","Tobias Speicher <rootcommander@gmail.com>","Steve Blaurock <sblaurock@gmail.com>","Kyrylo Shegeda <shegeda@ualberta.ca>","Diwank Singh Tomer <singh@diwank.name>","Sören Balko <Soeren.Balko@gmail.com>","Arpit Solanki <solankiarpit1997@gmail.com>","Yuki Ito <yuki@gnnk.net>","Artur Zayats <zag2art@gmail.com>"],"funding":{"type":"opencollective","url":"https://opencollective.com/peer"},"collective":{"type":"opencollective","url":"https://opencollective.com/peer"},"files":["dist/*"],"sideEffects":["lib/global.ts","lib/supports.ts"],"main":"dist/bundler.cjs","module":"dist/bundler.mjs","browser-minified":"dist/peerjs.min.js","browser-unminified":"dist/peerjs.js","types":"dist/types.d.ts","engines":{"node":">= 10"},"targets":{"types":{"source":"lib/exports.ts"},"main":{"source":"lib/exports.ts","sourceMap":{"inlineSources":true}},"module":{"source":"lib/exports.ts","includeNodeModules":["eventemitter3"],"sourceMap":{"inlineSources":true}},"browser-minified":{"context":"browser","outputFormat":"global","optimize":true,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"},"browser-unminified":{"context":"browser","outputFormat":"global","optimize":false,"engines":{"browsers":"cover 99%, not dead"},"source":"lib/global.ts"}},"scripts":{"contributors":"git-authors-cli --print=false && prettier --write package.json && git add package.json package-lock.json && git commit -m \\"chore(contributors): update and sort contributors list\\"","check":"tsc --noEmit","watch":"parcel watch","build":"rm -rf dist && parcel build","prepublishOnly":"npm run build","test":"mocha -r ts-node/register -r jsdom-global/register test/**/*.ts","format":"prettier --write .","semantic-release":"semantic-release"},"devDependencies":{"@parcel/config-default":"^2.5.0","@parcel/packager-ts":"^2.5.0","@parcel/transformer-typescript-tsc":"^2.5.0","@parcel/transformer-typescript-types":"^2.5.0","@semantic-release/changelog":"^6.0.1","@semantic-release/git":"^10.0.1","@types/chai":"^4.3.0","@types/mocha":"^9.1.0","@types/node":"^17.0.18","chai":"^4.3.6","git-authors-cli":"^1.0.40","jsdom":"^19.0.0","jsdom-global":"^3.0.2","mocha":"^9.2.0","mock-socket":"8.0.5","parcel":"^2.5.0","parcel-transformer-tsc-sourcemaps":"^1.0.2","prettier":"^2.6.2","semantic-release":"^19.0.2","standard":"^16.0.4","ts-node":"^10.5.0","typescript":"^4.5.5"},"dependencies":{"@swc/helpers":"^0.3.13","eventemitter3":"^4.0.7","peerjs-js-binarypack":"1.0.1","webrtc-adapter":"^7.7.1"}}');var Ym=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Km=function(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s},Jm=function(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))},Zm=function(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},fl=function(n){Ym(e,n);function e(t,i,r,s,o,a){a===void 0&&(a=5e3);var c=n.call(this)||this;c.pingInterval=a,c._disconnected=!0,c._messagesQueue=[];var l=t?"wss://":"ws://";return c._baseUrl=l+i+":"+r+s+"peerjs?key="+o,c}return e.prototype.start=function(t,i){var r=this;this._id=t;var s="".concat(this._baseUrl,"&id=").concat(t,"&token=").concat(i);this._socket||!this._disconnected||(this._socket=new WebSocket(s+"&version="+lc.version),this._disconnected=!1,this._socket.onmessage=function(o){var a;try{a=JSON.parse(o.data),Se.default.log("Server message received:",a)}catch{Se.default.log("Invalid server message",o.data);return}r.emit(Ln.Message,a)},this._socket.onclose=function(o){r._disconnected||(Se.default.log("Socket closed.",o),r._cleanup(),r._disconnected=!0,r.emit(Ln.Disconnected))},this._socket.onopen=function(){r._disconnected||(r._sendQueuedMessages(),Se.default.log("Socket open"),r._scheduleHeartbeat())})},e.prototype._scheduleHeartbeat=function(){var t=this;this._wsPingTimer=setTimeout(function(){t._sendHeartbeat()},this.pingInterval)},e.prototype._sendHeartbeat=function(){if(!this._wsOpen()){Se.default.log("Cannot send heartbeat, because socket closed");return}var t=JSON.stringify({type:mt.Heartbeat});this._socket.send(t),this._scheduleHeartbeat()},e.prototype._wsOpen=function(){return!!this._socket&&this._socket.readyState===1},e.prototype._sendQueuedMessages=function(){var t,i,r=Jm([],Km(this._messagesQueue),!1);this._messagesQueue=[];try{for(var s=Zm(r),o=s.next();!o.done;o=s.next()){var a=o.value;this.send(a)}}catch(c){t={error:c}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(t)throw t.error}}},e.prototype.send=function(t){if(!this._disconnected){if(!this._id){this._messagesQueue.push(t);return}if(!t.type){this.emit(Ln.Error,"Invalid message");return}if(this._wsOpen()){var i=JSON.stringify(t);this._socket.send(i)}}},e.prototype.close=function(){this._disconnected||(this._cleanup(),this._disconnected=!0)},e.prototype._cleanup=function(){this._socket&&(this._socket.onopen=this._socket.onmessage=this._socket.onclose=null,this._socket.close(),this._socket=void 0),clearTimeout(this._wsPingTimer)},e}(Xr.EventEmitter),La={};yn(La,"MediaConnection",()=>pl,n=>pl=n);var uc={};yn(uc,"Negotiator",()=>dl,n=>dl=n);var Ys=function(){return Ys=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Ys.apply(this,arguments)},os=function(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(f){o(f)}}function c(u){try{l(i.throw(u))}catch(f){o(f)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})},as=function(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(u){l=[6,u],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},dl=function(){function n(e){this.connection=e}return n.prototype.startConnection=function(e){var t=this._startPeerConnection();if(this.connection.peerConnection=t,this.connection.type===on.Media&&e._stream&&this._addTracksToConnection(e._stream,t),e.originator){if(this.connection.type===on.Data){var i=this.connection,r={ordered:!!e.reliable},s=t.createDataChannel(i.label,r);i.initialize(s)}this._makeOffer()}else this.handleSDP("OFFER",e.sdp)},n.prototype._startPeerConnection=function(){Se.default.log("Creating RTCPeerConnection.");var e=new RTCPeerConnection(this.connection.provider.options.config);return this._setupListeners(e),e},n.prototype._setupListeners=function(e){var t=this,i=this.connection.peer,r=this.connection.connectionId,s=this.connection.type,o=this.connection.provider;Se.default.log("Listening for ICE candidates."),e.onicecandidate=function(a){!a.candidate||!a.candidate.candidate||(Se.default.log("Received ICE candidates for ".concat(i,":"),a.candidate),o.socket.send({type:mt.Candidate,payload:{candidate:a.candidate,type:s,connectionId:r},dst:i}))},e.oniceconnectionstatechange=function(){switch(e.iceConnectionState){case"failed":Se.default.log("iceConnectionState is failed, closing connections to "+i),t.connection.emit("error",new Error("Negotiation of connection to "+i+" failed.")),t.connection.close();break;case"closed":Se.default.log("iceConnectionState is closed, closing connections to "+i),t.connection.emit("error",new Error("Connection to "+i+" closed.")),t.connection.close();break;case"disconnected":Se.default.log("iceConnectionState changed to disconnected on the connection with "+i);break;case"completed":e.onicecandidate=Xe.noop;break}t.connection.emit("iceStateChanged",e.iceConnectionState)},Se.default.log("Listening for data channel"),e.ondatachannel=function(a){Se.default.log("Received data channel");var c=a.channel,l=o.getConnection(i,r);l.initialize(c)},Se.default.log("Listening for remote stream"),e.ontrack=function(a){Se.default.log("Received remote stream");var c=a.streams[0],l=o.getConnection(i,r);if(l.type===on.Media){var u=l;t._addStreamToMediaConnection(c,u)}}},n.prototype.cleanup=function(){Se.default.log("Cleaning up PeerConnection to "+this.connection.peer);var e=this.connection.peerConnection;if(e){this.connection.peerConnection=null,e.onicecandidate=e.oniceconnectionstatechange=e.ondatachannel=e.ontrack=function(){};var t=e.signalingState!=="closed",i=!1;if(this.connection.type===on.Data){var r=this.connection,s=r.dataChannel;s&&(i=!!s.readyState&&s.readyState!=="closed")}(t||i)&&e.close()}},n.prototype._makeOffer=function(){return os(this,void 0,Promise,function(){var e,t,i,r,s,o,a;return as(this,function(c){switch(c.label){case 0:e=this.connection.peerConnection,t=this.connection.provider,c.label=1;case 1:return c.trys.push([1,7,,8]),[4,e.createOffer(this.connection.options.constraints)];case 2:i=c.sent(),Se.default.log("Created offer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp),c.label=3;case 3:return c.trys.push([3,5,,6]),[4,e.setLocalDescription(i)];case 4:return c.sent(),Se.default.log("Set localDescription:",i,"for:".concat(this.connection.peer)),r={sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,metadata:this.connection.metadata,browser:Xe.browser},this.connection.type===on.Data&&(s=this.connection,r=Ys(Ys({},r),{label:s.label,reliable:s.reliable,serialization:s.serialization})),t.socket.send({type:mt.Offer,payload:r,dst:this.connection.peer}),[3,6];case 5:return o=c.sent(),o!="OperationError: Failed to set local offer sdp: Called in wrong state: kHaveRemoteOffer"&&(t.emitError(tt.WebRTC,o),Se.default.log("Failed to setLocalDescription, ",o)),[3,6];case 6:return[3,8];case 7:return a=c.sent(),t.emitError(tt.WebRTC,a),Se.default.log("Failed to createOffer, ",a),[3,8];case 8:return[2]}})})},n.prototype._makeAnswer=function(){return os(this,void 0,Promise,function(){var e,t,i,r,s;return as(this,function(o){switch(o.label){case 0:e=this.connection.peerConnection,t=this.connection.provider,o.label=1;case 1:return o.trys.push([1,7,,8]),[4,e.createAnswer()];case 2:i=o.sent(),Se.default.log("Created answer."),this.connection.options.sdpTransform&&typeof this.connection.options.sdpTransform=="function"&&(i.sdp=this.connection.options.sdpTransform(i.sdp)||i.sdp),o.label=3;case 3:return o.trys.push([3,5,,6]),[4,e.setLocalDescription(i)];case 4:return o.sent(),Se.default.log("Set localDescription:",i,"for:".concat(this.connection.peer)),t.socket.send({type:mt.Answer,payload:{sdp:i,type:this.connection.type,connectionId:this.connection.connectionId,browser:Xe.browser},dst:this.connection.peer}),[3,6];case 5:return r=o.sent(),t.emitError(tt.WebRTC,r),Se.default.log("Failed to setLocalDescription, ",r),[3,6];case 6:return[3,8];case 7:return s=o.sent(),t.emitError(tt.WebRTC,s),Se.default.log("Failed to create answer, ",s),[3,8];case 8:return[2]}})})},n.prototype.handleSDP=function(e,t){return os(this,void 0,Promise,function(){var i,r,s,o;return as(this,function(a){switch(a.label){case 0:t=new RTCSessionDescription(t),i=this.connection.peerConnection,r=this.connection.provider,Se.default.log("Setting remote description",t),s=this,a.label=1;case 1:return a.trys.push([1,5,,6]),[4,i.setRemoteDescription(t)];case 2:return a.sent(),Se.default.log("Set remoteDescription:".concat(e," for:").concat(this.connection.peer)),e!=="OFFER"?[3,4]:[4,s._makeAnswer()];case 3:a.sent(),a.label=4;case 4:return[3,6];case 5:return o=a.sent(),r.emitError(tt.WebRTC,o),Se.default.log("Failed to setRemoteDescription, ",o),[3,6];case 6:return[2]}})})},n.prototype.handleCandidate=function(e){return os(this,void 0,Promise,function(){var t,i,r,s,o,a;return as(this,function(c){switch(c.label){case 0:Se.default.log("handleCandidate:",e),t=e.candidate,i=e.sdpMLineIndex,r=e.sdpMid,s=this.connection.peerConnection,o=this.connection.provider,c.label=1;case 1:return c.trys.push([1,3,,4]),[4,s.addIceCandidate(new RTCIceCandidate({sdpMid:r,sdpMLineIndex:i,candidate:t}))];case 2:return c.sent(),Se.default.log("Added ICE candidate for:".concat(this.connection.peer)),[3,4];case 3:return a=c.sent(),o.emitError(tt.WebRTC,a),Se.default.log("Failed to handleCandidate, ",a),[3,4];case 4:return[2]}})})},n.prototype._addTracksToConnection=function(e,t){if(Se.default.log("add tracks from stream ".concat(e.id," to peer connection")),!t.addTrack)return Se.default.error("Your browser does't support RTCPeerConnection#addTrack. Ignored.");e.getTracks().forEach(function(i){t.addTrack(i,e)})},n.prototype._addStreamToMediaConnection=function(e,t){Se.default.log("add stream ".concat(e.id," to media connection ").concat(t.connectionId)),t.addStream(e)},n}(),fc={};yn(fc,"BaseConnection",()=>hl,n=>hl=n);var Qm=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),hl=function(n){Qm(e,n);function e(t,i,r){var s=n.call(this)||this;return s.peer=t,s.provider=i,s.options=r,s._open=!1,s.metadata=r.metadata,s}return Object.defineProperty(e.prototype,"open",{get:function(){return this._open},enumerable:!1,configurable:!0}),e}(Xr.EventEmitter),eg=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),Ks=function(){return Ks=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},Ks.apply(this,arguments)},tg=function(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},pl=function(n){eg(e,n);function e(t,i,r){var s=n.call(this,t,i,r)||this;return s._localStream=s.options._stream,s.connectionId=s.options.connectionId||e.ID_PREFIX+Xe.randomToken(),s._negotiator=new uc.Negotiator(s),s._localStream&&s._negotiator.startConnection({_stream:s._localStream,originator:!0}),s}return Object.defineProperty(e.prototype,"type",{get:function(){return on.Media},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"localStream",{get:function(){return this._localStream},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"remoteStream",{get:function(){return this._remoteStream},enumerable:!1,configurable:!0}),e.prototype.addStream=function(t){Se.default.log("Receiving stream",t),this._remoteStream=t,n.prototype.emit.call(this,"stream",t)},e.prototype.handleMessage=function(t){var i=t.type,r=t.payload;switch(t.type){case mt.Answer:this._negotiator.handleSDP(i,r.sdp),this._open=!0;break;case mt.Candidate:this._negotiator.handleCandidate(r.candidate);break;default:Se.default.warn("Unrecognized message type:".concat(i," from peer:").concat(this.peer));break}},e.prototype.answer=function(t,i){var r,s;if(i===void 0&&(i={}),this._localStream){Se.default.warn("Local stream already exists on this MediaConnection. Are you answering a call twice?");return}this._localStream=t,i&&i.sdpTransform&&(this.options.sdpTransform=i.sdpTransform),this._negotiator.startConnection(Ks(Ks({},this.options._payload),{_stream:t}));var o=this.provider._getMessages(this.connectionId);try{for(var a=tg(o),c=a.next();!c.done;c=a.next()){var l=c.value;this.handleMessage(l)}}catch(u){r={error:u}}finally{try{c&&!c.done&&(s=a.return)&&s.call(a)}finally{if(r)throw r.error}}this._open=!0},e.prototype.close=function(){this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this._localStream=null,this._remoteStream=null,this.provider&&(this.provider._removeConnection(this),this.provider=null),this.options&&this.options._stream&&(this.options._stream=null),this.open&&(this._open=!1,n.prototype.emit.call(this,"close"))},e.ID_PREFIX="mc_",e}(fc.BaseConnection),Ia={};yn(Ia,"DataConnection",()=>gl,n=>gl=n);var _d={};yn(_d,"EncodingQueue",()=>ml,n=>ml=n);var ng=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),ml=function(n){ng(e,n);function e(){var t=n.call(this)||this;return t.fileReader=new FileReader,t._queue=[],t._processing=!1,t.fileReader.onload=function(i){t._processing=!1,i.target&&t.emit("done",i.target.result),t.doNextTask()},t.fileReader.onerror=function(i){Se.default.error("EncodingQueue error:",i),t._processing=!1,t.destroy(),t.emit("error",i)},t}return Object.defineProperty(e.prototype,"queue",{get:function(){return this._queue},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this.queue.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"processing",{get:function(){return this._processing},enumerable:!1,configurable:!0}),e.prototype.enque=function(t){this.queue.push(t),!this.processing&&this.doNextTask()},e.prototype.destroy=function(){this.fileReader.abort(),this._queue=[]},e.prototype.doNextTask=function(){this.size!==0&&(this.processing||(this._processing=!0,this.fileReader.readAsArrayBuffer(this.queue.shift())))},e}(Xr.EventEmitter),ig=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),rg=function(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},gl=function(n){ig(e,n);function e(t,i,r){var s=n.call(this,t,i,r)||this;return s.stringify=JSON.stringify,s.parse=JSON.parse,s._buffer=[],s._bufferSize=0,s._buffering=!1,s._chunkedData={},s._encodingQueue=new _d.EncodingQueue,s.connectionId=s.options.connectionId||e.ID_PREFIX+Xe.randomToken(),s.label=s.options.label||s.connectionId,s.serialization=s.options.serialization||Pn.Binary,s.reliable=!!s.options.reliable,s._encodingQueue.on("done",function(o){s._bufferedSend(o)}),s._encodingQueue.on("error",function(){Se.default.error("DC#".concat(s.connectionId,": Error occured in encoding from blob to arraybuffer, close DC")),s.close()}),s._negotiator=new uc.Negotiator(s),s._negotiator.startConnection(s.options._payload||{originator:!0}),s}return Object.defineProperty(e.prototype,"type",{get:function(){return on.Data},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dataChannel",{get:function(){return this._dc},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"bufferSize",{get:function(){return this._bufferSize},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t){this._dc=t,this._configureDataChannel()},e.prototype._configureDataChannel=function(){var t=this;(!Xe.supports.binaryBlob||Xe.supports.reliable)&&(this.dataChannel.binaryType="arraybuffer"),this.dataChannel.onopen=function(){Se.default.log("DC#".concat(t.connectionId," dc connection success")),t._open=!0,t.emit("open")},this.dataChannel.onmessage=function(i){Se.default.log("DC#".concat(t.connectionId," dc onmessage:"),i.data),t._handleDataMessage(i)},this.dataChannel.onclose=function(){Se.default.log("DC#".concat(t.connectionId," dc closed for:"),t.peer),t.close()}},e.prototype._handleDataMessage=function(t){var i=this,r=t.data,s=r.constructor,o=this.serialization===Pn.Binary||this.serialization===Pn.BinaryUTF8,a=r;if(o){if(s===Blob){Xe.blobToArrayBuffer(r,function(l){var u=Xe.unpack(l);i.emit("data",u)});return}else if(s===ArrayBuffer)a=Xe.unpack(r);else if(s===String){var c=Xe.binaryStringToArrayBuffer(r);a=Xe.unpack(c)}}else this.serialization===Pn.JSON&&(a=this.parse(r));if(a.__peerData){this._handleChunk(a);return}n.prototype.emit.call(this,"data",a)},e.prototype._handleChunk=function(t){var i=t.__peerData,r=this._chunkedData[i]||{data:[],count:0,total:t.total};if(r.data[t.n]=t.data,r.count++,this._chunkedData[i]=r,r.total===r.count){delete this._chunkedData[i];var s=new Blob(r.data);this._handleDataMessage({data:s})}},e.prototype.close=function(){this._buffer=[],this._bufferSize=0,this._chunkedData={},this._negotiator&&(this._negotiator.cleanup(),this._negotiator=null),this.provider&&(this.provider._removeConnection(this),this.provider=null),this.dataChannel&&(this.dataChannel.onopen=null,this.dataChannel.onmessage=null,this.dataChannel.onclose=null,this._dc=null),this._encodingQueue&&(this._encodingQueue.destroy(),this._encodingQueue.removeAllListeners(),this._encodingQueue=null),this.open&&(this._open=!1,n.prototype.emit.call(this,"close"))},e.prototype.send=function(t,i){if(!this.open){n.prototype.emit.call(this,"error",new Error("Connection is not open. You should listen for the `open` event before sending messages."));return}if(this.serialization===Pn.JSON)this._bufferedSend(this.stringify(t));else if(this.serialization===Pn.Binary||this.serialization===Pn.BinaryUTF8){var r=Xe.pack(t);if(!i&&r.size>Xe.chunkedMTU){this._sendChunks(r);return}Xe.supports.binaryBlob?this._bufferedSend(r):this._encodingQueue.enque(r)}else this._bufferedSend(t)},e.prototype._bufferedSend=function(t){(this._buffering||!this._trySend(t))&&(this._buffer.push(t),this._bufferSize=this._buffer.length)},e.prototype._trySend=function(t){var i=this;if(!this.open)return!1;if(this.dataChannel.bufferedAmount>e.MAX_BUFFERED_AMOUNT)return this._buffering=!0,setTimeout(function(){i._buffering=!1,i._tryBuffer()},50),!1;try{this.dataChannel.send(t)}catch(r){return Se.default.error("DC#:".concat(this.connectionId," Error when sending:"),r),this._buffering=!0,this.close(),!1}return!0},e.prototype._tryBuffer=function(){if(this.open&&this._buffer.length!==0){var t=this._buffer[0];this._trySend(t)&&(this._buffer.shift(),this._bufferSize=this._buffer.length,this._tryBuffer())}},e.prototype._sendChunks=function(t){var i,r,s=Xe.chunk(t);Se.default.log("DC#".concat(this.connectionId," Try to send ").concat(s.length," chunks..."));try{for(var o=rg(s),a=o.next();!a.done;a=o.next()){var c=a.value;this.send(c,!0)}}catch(l){i={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}},e.prototype.handleMessage=function(t){var i=t.payload;switch(t.type){case mt.Answer:this._negotiator.handleSDP(t.type,i.sdp);break;case mt.Candidate:this._negotiator.handleCandidate(i.candidate);break;default:Se.default.warn("Unrecognized message type:",t.type,"from peer:",this.peer);break}},e.ID_PREFIX="dc_",e.MAX_BUFFERED_AMOUNT=8388608,e}(fc.BaseConnection),vd={};yn(vd,"API",()=>xl,n=>xl=n);var _l=function(n,e,t,i){function r(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(u){try{l(i.next(u))}catch(f){o(f)}}function c(u){try{l(i.throw(u))}catch(f){o(f)}}function l(u){u.done?s(u.value):r(u.value).then(a,c)}l((i=i.apply(n,e||[])).next())})},vl=function(n,e){var t={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},i,r,s,o;return o={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(o[Symbol.iterator]=function(){return this}),o;function a(l){return function(u){return c([l,u])}}function c(l){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,r&&(s=l[0]&2?r.return:l[0]?r.throw||((s=r.return)&&s.call(r),0):r.next)&&!(s=s.call(r,l[1])).done)return s;switch(r=0,s&&(l=[l[0]&2,s.value]),l[0]){case 0:case 1:s=l;break;case 4:return t.label++,{value:l[1],done:!1};case 5:t.label++,r=l[1],l=[0];continue;case 7:l=t.ops.pop(),t.trys.pop();continue;default:if(s=t.trys,!(s=s.length>0&&s[s.length-1])&&(l[0]===6||l[0]===2)){t=0;continue}if(l[0]===3&&(!s||l[1]>s[0]&&l[1]<s[3])){t.label=l[1];break}if(l[0]===6&&t.label<s[1]){t.label=s[1],s=l;break}if(s&&t.label<s[2]){t.label=s[2],t.ops.push(l);break}s[2]&&t.ops.pop(),t.trys.pop();continue}l=e.call(n,t)}catch(u){l=[6,u],r=0}finally{i=s=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},xl=function(){function n(e){this._options=e}return n.prototype._buildRequest=function(e){var t=this._options.secure?"https":"http",i=this._options,r=i.host,s=i.port,o=i.path,a=i.key,c=new URL("".concat(t,"://").concat(r,":").concat(s).concat(o).concat(a,"/").concat(e));return c.searchParams.set("ts","".concat(Date.now()).concat(Math.random())),c.searchParams.set("version",lc.version),fetch(c.href,{referrerPolicy:this._options.referrerPolicy})},n.prototype.retrieveId=function(){return _l(this,void 0,Promise,function(){var e,t,i;return vl(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this._buildRequest("id")];case 1:if(e=r.sent(),e.status!==200)throw new Error("Error. Status:".concat(e.status));return[2,e.text()];case 2:throw t=r.sent(),Se.default.error("Error retrieving ID",t),i="",this._options.path==="/"&&this._options.host!==Xe.CLOUD_HOST&&(i=" If you passed in a `path` to your self-hosted PeerServer, you'll also need to pass in that same path when creating a new Peer."),new Error("Could not get an ID from the server."+i);case 3:return[2]}})})},n.prototype.listAllPeers=function(){return _l(this,void 0,Promise,function(){var e,t,i;return vl(this,function(r){switch(r.label){case 0:return r.trys.push([0,2,,3]),[4,this._buildRequest("peers")];case 1:if(e=r.sent(),e.status!==200)throw e.status===401?(t="",this._options.host===Xe.CLOUD_HOST?t="It looks like you're using the cloud server. You can email team@peerjs.com to enable peer listing for your API key.":t="You need to enable `allow_discovery` on your self-hosted PeerServer to use this feature.",new Error("It doesn't look like you have permission to list peers IDs. "+t)):new Error("Error. Status:".concat(e.status));return[2,e.json()];case 2:throw i=r.sent(),Se.default.error("Error retrieving list peers",i),new Error("Could not get list peers from the server."+i);case 3:return[2]}})})},n}(),sg=function(){var n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,r){i.__proto__=r}||function(i,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(i[s]=r[s])},n(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");n(e,t);function i(){this.constructor=e}e.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),kr=function(){return kr=Object.assign||function(n){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},kr.apply(this,arguments)},gr=function(n){var e=typeof Symbol=="function"&&Symbol.iterator,t=e&&n[e],i=0;if(t)return t.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&i>=n.length&&(n=void 0),{value:n&&n[i++],done:!n}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")},og=function(n,e){var t=typeof Symbol=="function"&&n[Symbol.iterator];if(!t)return n;var i=t.call(n),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=i.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return s},Js=function(n){sg(e,n);function e(t,i){var r=n.call(this)||this;r._id=null,r._lastServerId=null,r._destroyed=!1,r._disconnected=!1,r._open=!1,r._connections=new Map,r._lostMessages=new Map;var s;return t&&t.constructor==Object?i=t:t&&(s=t.toString()),i=kr({debug:0,host:Xe.CLOUD_HOST,port:Xe.CLOUD_PORT,path:"/",key:e.DEFAULT_KEY,token:Xe.randomToken(),config:Xe.defaultConfig,referrerPolicy:"strict-origin-when-cross-origin"},i),r._options=i,r._options.host==="/"&&(r._options.host=window.location.hostname),r._options.path&&(r._options.path[0]!=="/"&&(r._options.path="/"+r._options.path),r._options.path[r._options.path.length-1]!=="/"&&(r._options.path+="/")),r._options.secure===void 0&&r._options.host!==Xe.CLOUD_HOST?r._options.secure=Xe.isSecure():r._options.host==Xe.CLOUD_HOST&&(r._options.secure=!0),r._options.logFunction&&Se.default.setLogFunction(r._options.logFunction),Se.default.logLevel=r._options.debug||0,r._api=new vd.API(i),r._socket=r._createServerConnection(),!Xe.supports.audioVideo&&!Xe.supports.data?(r._delayedAbort(tt.BrowserIncompatible,"The current browser does not support WebRTC"),r):s&&!Xe.validateId(s)?(r._delayedAbort(tt.InvalidID,'ID "'.concat(s,'" is invalid')),r):(s?r._initialize(s):r._api.retrieveId().then(function(o){return r._initialize(o)}).catch(function(o){return r._abort(tt.ServerError,o)}),r)}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this._options},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"open",{get:function(){return this._open},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"socket",{get:function(){return this._socket},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"connections",{get:function(){var t,i,r=Object.create(null);try{for(var s=gr(this._connections),o=s.next();!o.done;o=s.next()){var a=og(o.value,2),c=a[0],l=a[1];r[c]=l}}catch(u){t={error:u}}finally{try{o&&!o.done&&(i=s.return)&&i.call(s)}finally{if(t)throw t.error}}return r},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"destroyed",{get:function(){return this._destroyed},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"disconnected",{get:function(){return this._disconnected},enumerable:!1,configurable:!0}),e.prototype._createServerConnection=function(){var t=this,i=new gd.Socket(this._options.secure,this._options.host,this._options.port,this._options.path,this._options.key,this._options.pingInterval);return i.on(Ln.Message,function(r){t._handleMessage(r)}),i.on(Ln.Error,function(r){t._abort(tt.SocketError,r)}),i.on(Ln.Disconnected,function(){t.disconnected||(t.emitError(tt.Network,"Lost connection to server."),t.disconnect())}),i.on(Ln.Close,function(){t.disconnected||t._abort(tt.SocketClosed,"Underlying socket is already closed.")}),i},e.prototype._initialize=function(t){this._id=t,this.socket.start(t,this._options.token)},e.prototype._handleMessage=function(t){var i,r,s=t.type,o=t.payload,a=t.src;switch(s){case mt.Open:this._lastServerId=this.id,this._open=!0,this.emit("open",this.id);break;case mt.Error:this._abort(tt.ServerError,o.msg);break;case mt.IdTaken:this._abort(tt.UnavailableID,'ID "'.concat(this.id,'" is taken'));break;case mt.InvalidKey:this._abort(tt.InvalidKey,'API KEY "'.concat(this._options.key,'" is invalid'));break;case mt.Leave:Se.default.log("Received leave message from ".concat(a)),this._cleanupPeer(a),this._connections.delete(a);break;case mt.Expire:this.emitError(tt.PeerUnavailable,"Could not connect to peer ".concat(a));break;case mt.Offer:var g=o.connectionId,h=this.getConnection(a,g);if(h&&(h.close(),Se.default.warn("Offer received for existing Connection ID:".concat(g))),o.type===on.Media){var c=new La.MediaConnection(a,this,{connectionId:g,_payload:o,metadata:o.metadata});h=c,this._addConnection(a,h),this.emit("call",c)}else if(o.type===on.Data){var l=new Ia.DataConnection(a,this,{connectionId:g,_payload:o,metadata:o.metadata,label:o.label,serialization:o.serialization,reliable:o.reliable});h=l,this._addConnection(a,h),this.emit("connection",l)}else{Se.default.warn("Received malformed connection type:".concat(o.type));return}var u=this._getMessages(g);try{for(var f=gr(u),d=f.next();!d.done;d=f.next()){var p=d.value;h.handleMessage(p)}}catch(m){i={error:m}}finally{try{d&&!d.done&&(r=f.return)&&r.call(f)}finally{if(i)throw i.error}}break;default:if(!o){Se.default.warn("You received a malformed message from ".concat(a," of type ").concat(s));return}var g=o.connectionId,h=this.getConnection(a,g);h&&h.peerConnection?h.handleMessage(t):g?this._storeMessage(g,t):Se.default.warn("You received an unrecognized message:",t);break}},e.prototype._storeMessage=function(t,i){this._lostMessages.has(t)||this._lostMessages.set(t,[]),this._lostMessages.get(t).push(i)},e.prototype._getMessages=function(t){var i=this._lostMessages.get(t);return i?(this._lostMessages.delete(t),i):[]},e.prototype.connect=function(t,i){if(i===void 0&&(i={}),this.disconnected){Se.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect, or call reconnect on this peer if you believe its ID to still be available."),this.emitError(tt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}var r=new Ia.DataConnection(t,this,i);return this._addConnection(t,r),r},e.prototype.call=function(t,i,r){if(r===void 0&&(r={}),this.disconnected){Se.default.warn("You cannot connect to a new Peer because you called .disconnect() on this Peer and ended your connection with the server. You can create a new Peer to reconnect."),this.emitError(tt.Disconnected,"Cannot connect to new Peer after disconnecting from server.");return}if(!i){Se.default.error("To call a peer, you must provide a stream from your browser's `getUserMedia`.");return}var s=new La.MediaConnection(t,this,kr(kr({},r),{_stream:i}));return this._addConnection(t,s),s},e.prototype._addConnection=function(t,i){Se.default.log("add connection ".concat(i.type,":").concat(i.connectionId," to peerId:").concat(t)),this._connections.has(t)||this._connections.set(t,[]),this._connections.get(t).push(i)},e.prototype._removeConnection=function(t){var i=this._connections.get(t.peer);if(i){var r=i.indexOf(t);r!==-1&&i.splice(r,1)}this._lostMessages.delete(t.connectionId)},e.prototype.getConnection=function(t,i){var r,s,o=this._connections.get(t);if(!o)return null;try{for(var a=gr(o),c=a.next();!c.done;c=a.next()){var l=c.value;if(l.connectionId===i)return l}}catch(u){r={error:u}}finally{try{c&&!c.done&&(s=a.return)&&s.call(a)}finally{if(r)throw r.error}}return null},e.prototype._delayedAbort=function(t,i){var r=this;setTimeout(function(){r._abort(t,i)},0)},e.prototype._abort=function(t,i){Se.default.error("Aborting!"),this.emitError(t,i),this._lastServerId?this.disconnect():this.destroy()},e.prototype.emitError=function(t,i){Se.default.error("Error:",i);var r;typeof i=="string"?r=new Error(i):r=i,r.type=t,this.emit("error",r)},e.prototype.destroy=function(){this.destroyed||(Se.default.log("Destroy peer with ID:".concat(this.id)),this.disconnect(),this._cleanup(),this._destroyed=!0,this.emit("close"))},e.prototype._cleanup=function(){var t,i;try{for(var r=gr(this._connections.keys()),s=r.next();!s.done;s=r.next()){var o=s.value;this._cleanupPeer(o),this._connections.delete(o)}}catch(a){t={error:a}}finally{try{s&&!s.done&&(i=r.return)&&i.call(r)}finally{if(t)throw t.error}}this.socket.removeAllListeners()},e.prototype._cleanupPeer=function(t){var i,r,s=this._connections.get(t);if(s)try{for(var o=gr(s),a=o.next();!a.done;a=o.next()){var c=a.value;c.close()}}catch(l){i={error:l}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(i)throw i.error}}},e.prototype.disconnect=function(){if(!this.disconnected){var t=this.id;Se.default.log("Disconnect peer with ID:".concat(t)),this._disconnected=!0,this._open=!1,this.socket.close(),this._lastServerId=t,this._id=null,this.emit("disconnected",t)}},e.prototype.reconnect=function(){if(this.disconnected&&!this.destroyed)Se.default.log("Attempting reconnection to server with ID ".concat(this._lastServerId)),this._disconnected=!1,this._initialize(this._lastServerId);else{if(this.destroyed)throw new Error("This peer cannot reconnect to the server. It has already been destroyed.");if(!this.disconnected&&!this.open)Se.default.error("In a hurry? We're still trying to make the initial connection!");else throw new Error("Peer ".concat(this.id," cannot reconnect because it is not disconnected from the server!"))}},e.prototype.listAllPeers=function(t){var i=this;t===void 0&&(t=function(r){}),this._api.listAllPeers().then(function(r){return t(r)}).catch(function(r){return i._abort(tt.ServerError,r)})},e.DEFAULT_KEY="peerjs",e}(Xr.EventEmitter);pd.Peer;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dc="149",ag=0,yl=1,cg=2,xd=1,lg=2,Ar=3,Jn=0,jt=1,jn=2,$n=0,Yi=1,bl=2,Sl=3,Ml=4,ug=5,Hi=100,fg=101,dg=102,Tl=103,Cl=104,hg=200,pg=201,mg=202,gg=203,yd=204,bd=205,_g=206,vg=207,xg=208,yg=209,bg=210,Sg=0,Mg=1,Tg=2,ka=3,Cg=4,Eg=5,wg=6,Rg=7,Sd=0,Ag=1,Pg=2,On=0,Dg=1,Lg=2,Ig=3,kg=4,Og=5,Md=300,er=301,tr=302,Oa=303,Fa=304,ho=306,Na=1e3,an=1001,Ua=1002,Dt=1003,El=1004,Io=1005,Ot=1006,Fg=1007,Hr=1008,Ti=1009,Ng=1010,Ug=1011,Td=1012,Bg=1013,vi=1014,xi=1015,Wr=1016,zg=1017,Gg=1018,Ki=1020,Vg=1021,cn=1023,Hg=1024,Wg=1025,Si=1026,nr=1027,jg=1028,qg=1029,Xg=1030,$g=1031,Yg=1033,ko=33776,Oo=33777,Fo=33778,No=33779,wl=35840,Rl=35841,Al=35842,Pl=35843,Kg=36196,Dl=37492,Ll=37496,Il=37808,kl=37809,Ol=37810,Fl=37811,Nl=37812,Ul=37813,Bl=37814,zl=37815,Gl=37816,Vl=37817,Hl=37818,Wl=37819,jl=37820,ql=37821,Uo=36492,Jg=36283,Xl=36284,$l=36285,Yl=36286,Ci=3e3,Je=3001,Zg=3200,Qg=3201,Cd=0,e_=1,mn="srgb",jr="srgb-linear",Bo=7680,t_=519,Kl=35044,Jl="300 es",Ba=1035;class lr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zo=Math.PI/180,Zl=180/Math.PI;function $r(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[i&255]+St[i>>8&255]+St[i>>16&255]+St[i>>24&255]).toLowerCase()}function Ht(n,e,t){return Math.max(e,Math.min(t,n))}function n_(n,e){return(n%e+e)%e}function Go(n,e,t){return(1-t)*n+t*e}function Ql(n){return(n&n-1)===0&&n!==0}function za(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cs(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],u=i[4],f=i[7],d=i[2],p=i[5],g=i[8],h=r[0],m=r[3],v=r[6],S=r[1],y=r[4],C=r[7],M=r[2],P=r[5],I=r[8];return s[0]=o*h+a*S+c*M,s[3]=o*m+a*y+c*P,s[6]=o*v+a*C+c*I,s[1]=l*h+u*S+f*M,s[4]=l*m+u*y+f*P,s[7]=l*v+u*C+f*I,s[2]=d*h+p*S+g*M,s[5]=d*m+p*y+g*P,s[8]=d*v+p*C+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-i*s*u+i*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,d=a*c-u*s,p=l*s-o*c,g=t*f+i*d+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const h=1/g;return e[0]=f*h,e[1]=(r*l-u*i)*h,e[2]=(a*i-r*o)*h,e[3]=d*h,e[4]=(u*t-r*c)*h,e[5]=(r*s-a*t)*h,e[6]=p*h,e[7]=(i*c-l*t)*h,e[8]=(o*t-i*s)*h,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Vo=new Wt;function Ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ho={[mn]:{[jr]:Mi},[jr]:{[mn]:Bs}},Rt={legacyMode:!0,get workingColorSpace(){return jr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.legacyMode||e===t||!e||!t)return n;if(Ho[e]&&Ho[e][t]!==void 0){const i=Ho[e][t];return n.r=i(n.r),n.g=i(n.g),n.b=i(n.b),n}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}},wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},st={r:0,g:0,b:0},en={h:0,s:0,l:0},ls={h:0,s:0,l:0};function Wo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}function us(n,e){return e.r=n.r,e.g=n.g,e.b=n.b,e}class Ye{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Rt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Rt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Rt.workingColorSpace){if(e=n_(e,1),t=Ht(t,0,1),i=Ht(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Wo(o,s,e+1/3),this.g=Wo(o,s,e),this.b=Wo(o,s,e-1/3)}return Rt.toWorkingColorSpace(this,r),this}setStyle(e,t=mn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Rt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Rt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(c,l,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Rt.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Rt.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=mn){const i=wd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Rt.fromWorkingColorSpace(us(this,st),e),Ht(st.r*255,0,255)<<16^Ht(st.g*255,0,255)<<8^Ht(st.b*255,0,255)<<0}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Rt.workingColorSpace){Rt.fromWorkingColorSpace(us(this,st),t);const i=st.r,r=st.g,s=st.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Rt.workingColorSpace){return Rt.fromWorkingColorSpace(us(this,st),t),e.r=st.r,e.g=st.g,e.b=st.b,e}getStyle(e=mn){return Rt.fromWorkingColorSpace(us(this,st),e),e!==mn?`color(${e} ${st.r} ${st.g} ${st.b})`:`rgb(${st.r*255|0},${st.g*255|0},${st.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(en),en.h+=e,en.s+=t,en.l+=i,this.setHSL(en.h,en.s,en.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(en),e.getHSL(ls);const i=Go(en.h,ls.h,t),r=Go(en.s,ls.s,t),s=Go(en.l,ls.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ye.NAMES=wd;let Ri;class Rd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=Zs("canvas")),Ri.width=e.width,Ri.height=e.height;const i=Ri.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ad{constructor(e=null){this.isSource=!0,this.uuid=$r(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(jo(r[o].image)):s.push(jo(r[o]))}else s=jo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function jo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let i_=0;class Ft extends lr{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,i=an,r=an,s=Ot,o=Hr,a=cn,c=Ti,l=Ft.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=$r(),this.name="",this.source=new Ad(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Md)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Na:e.x=e.x-Math.floor(e.x);break;case an:e.x=e.x<0?0:1;break;case Ua:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Na:e.y=e.y-Math.floor(e.y);break;case an:e.y=e.y<0?0:1;break;case Ua:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=Md;Ft.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],g=c[9],h=c[2],m=c[6],v=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-h)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+h)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,C=(p+1)/2,M=(v+1)/2,P=(u+d)/4,I=(f+h)/4,x=(g+m)/4;return y>C&&y>M?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=I/i):C>M?C<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),i=P/r,s=x/r):M<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(M),i=I/s,r=x/s),this.set(i,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(f-h)*(f-h)+(d-u)*(d-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(f-h)/S,this.z=(d-u)/S,this.w=Math.acos((l+p+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ei extends lr{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Ft(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ot,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ad(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pd extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class r_ extends Ft{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=an,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],l=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],g=s[o+2],h=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=h;return}if(f!==h||c!==d||l!==p||u!==g){let m=1-a;const v=c*d+l*p+u*g+f*h,S=v>=0?1:-1,y=1-v*v;if(y>Number.EPSILON){const M=Math.sqrt(y),P=Math.atan2(M,v*S);m=Math.sin(m*P)/M,a=Math.sin(a*P)/M}const C=a*S;if(c=c*m+d*C,l=l*m+p*C,u=u*m+g*C,f=f*m+h*C,m===1-a){const M=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=M,l*=M,u*=M,f*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],l=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+u*f+c*p-l*d,e[t+1]=c*g+u*d+l*f-a*p,e[t+2]=l*g+u*p+a*d-c*f,e[t+3]=u*g-a*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(i/2),u=a(r/2),f=a(s/2),d=c(i/2),p=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"YXZ":this._x=d*u*f+l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"ZXY":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f-d*p*g;break;case"ZYX":this._x=d*u*f-l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f+d*p*g;break;case"YZX":this._x=d*u*f+l*p*g,this._y=l*p*f+d*u*g,this._z=l*u*g-d*p*f,this._w=l*u*f-d*p*g;break;case"XZY":this._x=d*u*f-l*p*g,this._y=l*p*f-d*u*g,this._z=l*u*g+d*p*f,this._w=l*u*f+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(s-l)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-c)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+l)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-l)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=i*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-i*l,this._z=s*u+o*l+i*c-r*a,this._w=o*u-i*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*i,u=c*i+a*t-s*r,f=c*r+s*i-o*t,d=-s*t-o*i-a*r;return this.x=l*c+d*-s+u*-a-f*-o,this.y=u*c+d*-o+f*-s-l*-a,this.z=f*c+d*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return qo.copy(this).projectOnVector(e),this.sub(qo)}reflect(e){return this.sub(qo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ht(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qo=new G,eu=new Yr;class Kr{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],d=e[c+2];u<t&&(t=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),d=e.getZ(c);u<t&&(t=u),f<i&&(i=f),d<r&&(r=d),u>s&&(s=u),f>o&&(o=f),d>a&&(a=d)}return this.min.set(t,i,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,a=s.count;o<a;o++)oi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(oi)}else i.boundingBox===null&&i.computeBoundingBox(),Xo.copy(i.boundingBox),Xo.applyMatrix4(e.matrixWorld),this.union(Xo);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(_r),fs.subVectors(this.max,_r),Ai.subVectors(e.a,_r),Pi.subVectors(e.b,_r),Di.subVectors(e.c,_r),zn.subVectors(Pi,Ai),Gn.subVectors(Di,Pi),ai.subVectors(Ai,Di);let t=[0,-zn.z,zn.y,0,-Gn.z,Gn.y,0,-ai.z,ai.y,zn.z,0,-zn.x,Gn.z,0,-Gn.x,ai.z,0,-ai.x,-zn.y,zn.x,0,-Gn.y,Gn.x,0,-ai.y,ai.x,0];return!$o(t,Ai,Pi,Di,fs)||(t=[1,0,0,0,1,0,0,0,1],!$o(t,Ai,Pi,Di,fs))?!1:(ds.crossVectors(zn,Gn),t=[ds.x,ds.y,ds.z],$o(t,Ai,Pi,Di,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return oi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Tn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Tn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Tn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Tn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Tn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Tn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Tn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Tn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Tn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Tn=[new G,new G,new G,new G,new G,new G,new G,new G],oi=new G,Xo=new Kr,Ai=new G,Pi=new G,Di=new G,zn=new G,Gn=new G,ai=new G,_r=new G,fs=new G,ds=new G,ci=new G;function $o(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){ci.fromArray(n,s);const a=r.x*Math.abs(ci.x)+r.y*Math.abs(ci.y)+r.z*Math.abs(ci.z),c=e.dot(ci),l=t.dot(ci),u=i.dot(ci);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const s_=new Kr,vr=new G,Yo=new G;class po{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):s_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;vr.subVectors(e,this.center);const t=vr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(vr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(vr.copy(e.center).add(Yo)),this.expandByPoint(vr.copy(e.center).sub(Yo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new G,Ko=new G,hs=new G,Vn=new G,Jo=new G,ps=new G,Zo=new G;class Dd{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.direction).multiplyScalar(t).add(this.origin),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Ko.copy(e).add(t).multiplyScalar(.5),hs.copy(t).sub(e).normalize(),Vn.copy(this.origin).sub(Ko);const s=e.distanceTo(t)*.5,o=-this.direction.dot(hs),a=Vn.dot(this.direction),c=-Vn.dot(hs),l=Vn.lengthSq(),u=Math.abs(1-o*o);let f,d,p,g;if(u>0)if(f=o*c-a,d=o*a-c,g=s*u,f>=0)if(d>=-g)if(d<=g){const h=1/u;f*=h,d*=h,p=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-c),s),p=-f*f+d*(d+2*c)+l);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*c)+l;return i&&i.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(hs).multiplyScalar(d).add(Ko),p}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const i=Cn.dot(this.direction),r=Cn.dot(Cn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,r,s){Jo.subVectors(t,e),ps.subVectors(i,e),Zo.crossVectors(Jo,ps);let o=this.direction.dot(Zo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,e);const c=a*this.direction.dot(ps.crossVectors(Vn,ps));if(c<0)return null;const l=a*this.direction.dot(Jo.cross(Vn));if(l<0||c+l>o)return null;const u=-a*Vn.dot(Zo);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,o,a,c,l,u,f,d,p,g,h,m){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=o,v[9]=a,v[13]=c,v[2]=l,v[6]=u,v[10]=f,v[14]=d,v[3]=p,v[7]=g,v[11]=h,v[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Li.setFromMatrixColumn(e,0).length(),s=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,g=a*u,h=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+g*l,t[5]=d-h*l,t[9]=-a*c,t[2]=h-d*l,t[6]=g+p*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,g=l*u,h=l*f;t[0]=d+h*a,t[4]=g*a-p,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=h+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,g=l*u,h=l*f;t[0]=d-h*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=h-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,p=o*f,g=a*u,h=a*f;t[0]=c*u,t[4]=g*l-p,t[8]=d*l+h,t[1]=c*f,t[5]=h*l+d,t[9]=p*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,p=o*l,g=a*c,h=a*l;t[0]=c*u,t[4]=h-d*f,t[8]=g*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=p*f+g,t[10]=d-h*f}else if(e.order==="XZY"){const d=o*c,p=o*l,g=a*c,h=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+h,t[5]=o*u,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*u,t[10]=h*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(o_,e,a_)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Hn.crossVectors(i,Gt),Hn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Hn.crossVectors(i,Gt)),Hn.normalize(),ms.crossVectors(Gt,Hn),r[0]=Hn.x,r[4]=ms.x,r[8]=Gt.x,r[1]=Hn.y,r[5]=ms.y,r[9]=Gt.y,r[2]=Hn.z,r[6]=ms.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],u=i[1],f=i[5],d=i[9],p=i[13],g=i[2],h=i[6],m=i[10],v=i[14],S=i[3],y=i[7],C=i[11],M=i[15],P=r[0],I=r[4],x=r[8],w=r[12],A=r[1],Q=r[5],re=r[9],F=r[13],k=r[2],J=r[6],ne=r[10],$=r[14],B=r[3],ae=r[7],ce=r[11],xe=r[15];return s[0]=o*P+a*A+c*k+l*B,s[4]=o*I+a*Q+c*J+l*ae,s[8]=o*x+a*re+c*ne+l*ce,s[12]=o*w+a*F+c*$+l*xe,s[1]=u*P+f*A+d*k+p*B,s[5]=u*I+f*Q+d*J+p*ae,s[9]=u*x+f*re+d*ne+p*ce,s[13]=u*w+f*F+d*$+p*xe,s[2]=g*P+h*A+m*k+v*B,s[6]=g*I+h*Q+m*J+v*ae,s[10]=g*x+h*re+m*ne+v*ce,s[14]=g*w+h*F+m*$+v*xe,s[3]=S*P+y*A+C*k+M*B,s[7]=S*I+y*Q+C*J+M*ae,s[11]=S*x+y*re+C*ne+M*ce,s[15]=S*w+y*F+C*$+M*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],g=e[3],h=e[7],m=e[11],v=e[15];return g*(+s*c*f-r*l*f-s*a*d+i*l*d+r*a*p-i*c*p)+h*(+t*c*p-t*l*d+s*o*d-r*o*p+r*l*u-s*c*u)+m*(+t*l*f-t*a*p-s*o*f+i*o*p+s*a*u-i*l*u)+v*(-r*a*u-t*c*f+t*a*d+r*o*f-i*o*d+i*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],g=e[12],h=e[13],m=e[14],v=e[15],S=f*m*l-h*d*l+h*c*p-a*m*p-f*c*v+a*d*v,y=g*d*l-u*m*l-g*c*p+o*m*p+u*c*v-o*d*v,C=u*h*l-g*f*l+g*a*p-o*h*p-u*a*v+o*f*v,M=g*f*c-u*h*c-g*a*d+o*h*d+u*a*m-o*f*m,P=t*S+i*y+r*C+s*M;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=S*I,e[1]=(h*d*s-f*m*s-h*r*p+i*m*p+f*r*v-i*d*v)*I,e[2]=(a*m*s-h*c*s+h*r*l-i*m*l-a*r*v+i*c*v)*I,e[3]=(f*c*s-a*d*s-f*r*l+i*d*l+a*r*p-i*c*p)*I,e[4]=y*I,e[5]=(u*m*s-g*d*s+g*r*p-t*m*p-u*r*v+t*d*v)*I,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*v-t*c*v)*I,e[7]=(o*d*s-u*c*s+u*r*l-t*d*l-o*r*p+t*c*p)*I,e[8]=C*I,e[9]=(g*f*s-u*h*s-g*i*p+t*h*p+u*i*v-t*f*v)*I,e[10]=(o*h*s-g*a*s+g*i*l-t*h*l-o*i*v+t*a*v)*I,e[11]=(u*a*s-o*f*s-u*i*l+t*f*l+o*i*p-t*a*p)*I,e[12]=M*I,e[13]=(u*h*r-g*f*r+g*i*d-t*h*d-u*i*m+t*f*m)*I,e[14]=(g*a*r-o*h*r-g*i*c+t*h*c+o*i*m-t*a*m)*I,e[15]=(o*f*r-u*a*r+u*i*c-t*f*c-o*i*d+t*a*d)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+i,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,d=s*l,p=s*u,g=s*f,h=o*u,m=o*f,v=a*f,S=c*l,y=c*u,C=c*f,M=i.x,P=i.y,I=i.z;return r[0]=(1-(h+v))*M,r[1]=(p+C)*M,r[2]=(g-y)*M,r[3]=0,r[4]=(p-C)*P,r[5]=(1-(d+v))*P,r[6]=(m+S)*P,r[7]=0,r[8]=(g+y)*I,r[9]=(m-S)*I,r[10]=(1-(d+h))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Li.set(r[0],r[1],r[2]).length();const o=Li.set(r[4],r[5],r[6]).length(),a=Li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],tn.copy(this);const l=1/s,u=1/o,f=1/a;return tn.elements[0]*=l,tn.elements[1]*=l,tn.elements[2]*=l,tn.elements[4]*=u,tn.elements[5]*=u,tn.elements[6]*=u,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),d=-(o+s)/(o-s),p=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,r,s,o){const a=this.elements,c=1/(t-e),l=1/(i-r),u=1/(o-s),f=(t+e)*c,d=(i+r)*l,p=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Li=new G,tn=new ht,o_=new G(0,0,0),a_=new G(1,1,1),Hn=new G,ms=new G,Gt=new G,tu=new ht,nu=new Yr;class mo{constructor(e=0,t=0,i=0,r=mo.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nu.setFromEuler(this),this.setFromQuaternion(nu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mo.DEFAULT_ORDER="XYZ";class Ld{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let c_=0;const iu=new G,Ii=new Yr,En=new ht,gs=new G,xr=new G,l_=new G,u_=new Yr,ru=new G(1,0,0),su=new G(0,1,0),ou=new G(0,0,1),f_={type:"added"},au={type:"removed"};class Nt extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:c_++}),this.uuid=$r(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new G,t=new mo,i=new Yr,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Wt}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ld,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(su,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return iu.copy(e).applyQuaternion(this.quaternion),this.position.add(iu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(su,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gs.copy(e):gs.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(xr,gs,this.up):En.lookAt(gs,xr,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(En),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(f_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(au)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(au)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,u_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new G(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const nn=new G,wn=new G,Qo=new G,Rn=new G,ki=new G,Oi=new G,cu=new G,ea=new G,ta=new G,na=new G;class Dn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),nn.subVectors(e,t),r.cross(nn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){nn.subVectors(r,t),wn.subVectors(i,t),Qo.subVectors(e,t);const o=nn.dot(nn),a=nn.dot(wn),c=nn.dot(Qo),l=wn.dot(wn),u=wn.dot(Qo),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(l*c-a*u)*d,g=(o*u-a*c)*d;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Rn),Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,Rn),c.set(0,0),c.addScaledVector(s,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(a,Rn.z),c}static isFrontFacing(e,t,i,r){return nn.subVectors(i,t),wn.subVectors(e,t),nn.cross(wn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),wn.subVectors(this.a,this.b),nn.cross(wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Dn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ki.subVectors(r,i),Oi.subVectors(s,i),ea.subVectors(e,i);const c=ki.dot(ea),l=Oi.dot(ea);if(c<=0&&l<=0)return t.copy(i);ta.subVectors(e,r);const u=ki.dot(ta),f=Oi.dot(ta);if(u>=0&&f<=u)return t.copy(r);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(i).addScaledVector(ki,o);na.subVectors(e,s);const p=ki.dot(na),g=Oi.dot(na);if(g>=0&&p<=g)return t.copy(s);const h=p*l-c*g;if(h<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(i).addScaledVector(Oi,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return cu.subVectors(s,r),a=(f-u)/(f-u+(p-g)),t.copy(r).addScaledVector(cu,a);const v=1/(m+h+d);return o=h*v,a=d*v,t.copy(i).addScaledVector(ki,o).addScaledVector(Oi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let d_=0;class ur extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:d_++}),this.uuid=$r(),this.name="",this.type="Material",this.blending=Yi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=yd,this.blendDst=bd,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ka,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=t_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bo,this.stencilZFail=Bo,this.stencilZPass=Bo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(i.blending=this.blending),this.side!==Jn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hc extends ur{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const rt=new G,_s=new Ke;class xn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cs(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cs(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cs(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Id extends xn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class kd extends xn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends xn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let h_=0;const Kt=new ht,ia=new Nt,Fi=new G,Vt=new Kr,yr=new Kr,ft=new G;class bn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=$r(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ed(e)?kd:Id)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,i){return Kt.makeTranslation(e,t,i),this.applyMatrix4(Kt),this}scale(e,t,i){return Kt.makeScale(e,t,i),this.applyMatrix4(Kt),this}lookAt(e){return ia.lookAt(e),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new qt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Vt.setFromBufferAttribute(s),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Vt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Vt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Vt.min),this.boundingBox.expandByPoint(Vt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Vt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];yr.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(Vt.min,yr.min),Vt.expandByPoint(ft),ft.addVectors(Vt.max,yr.max),Vt.expandByPoint(ft)):(Vt.expandByPoint(yr.min),Vt.expandByPoint(yr.max))}Vt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ft));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)ft.fromBufferAttribute(a,l),c&&(Fi.fromBufferAttribute(e,l),ft.add(Fi)),r=Math.max(r,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xn(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let A=0;A<a;A++)l[A]=new G,u[A]=new G;const f=new G,d=new G,p=new G,g=new Ke,h=new Ke,m=new Ke,v=new G,S=new G;function y(A,Q,re){f.fromArray(r,A*3),d.fromArray(r,Q*3),p.fromArray(r,re*3),g.fromArray(o,A*2),h.fromArray(o,Q*2),m.fromArray(o,re*2),d.sub(f),p.sub(f),h.sub(g),m.sub(g);const F=1/(h.x*m.y-m.x*h.y);isFinite(F)&&(v.copy(d).multiplyScalar(m.y).addScaledVector(p,-h.y).multiplyScalar(F),S.copy(p).multiplyScalar(h.x).addScaledVector(d,-m.x).multiplyScalar(F),l[A].add(v),l[Q].add(v),l[re].add(v),u[A].add(S),u[Q].add(S),u[re].add(S))}let C=this.groups;C.length===0&&(C=[{start:0,count:i.length}]);for(let A=0,Q=C.length;A<Q;++A){const re=C[A],F=re.start,k=re.count;for(let J=F,ne=F+k;J<ne;J+=3)y(i[J+0],i[J+1],i[J+2])}const M=new G,P=new G,I=new G,x=new G;function w(A){I.fromArray(s,A*3),x.copy(I);const Q=l[A];M.copy(Q),M.sub(I.multiplyScalar(I.dot(Q))).normalize(),P.crossVectors(x,Q);const F=P.dot(u[A])<0?-1:1;c[A*4]=M.x,c[A*4+1]=M.y,c[A*4+2]=M.z,c[A*4+3]=F}for(let A=0,Q=C.length;A<Q;++A){const re=C[A],F=re.start,k=re.count;for(let J=F,ne=F+k;J<ne;J+=3)w(i[J+0]),w(i[J+1]),w(i[J+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new G,s=new G,o=new G,a=new G,c=new G,l=new G,u=new G,f=new G;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),h=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,h),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,h),l.fromBufferAttribute(i,m),a.add(u),c.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(h,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,d=new l.constructor(c.length*u);let p=0,g=0;for(let h=0,m=c.length;h<m;h++){a.isInterleavedBufferAttribute?p=c[h]*a.data.stride+a.offset:p=c[h]*u;for(let v=0;v<u;v++)d[g++]=l[p++]}return new xn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,i);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,i);c.push(p)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const lu=new ht,Ni=new Dd,ra=new po,br=new G,Sr=new G,Mr=new G,sa=new G,vs=new G,xs=new Ke,ys=new Ke,bs=new Ke,oa=new G,Ss=new G;class In extends Nt{constructor(e=new bn,t=new hc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){vs.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=a[c],f=s[c];u!==0&&(sa.fromBufferAttribute(f,e),o?vs.addScaledVector(sa,u):vs.addScaledVector(sa.sub(t),u))}t.add(vs)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),ra.copy(i.boundingSphere),ra.applyMatrix4(s),e.ray.intersectsSphere(ra)===!1)||(lu.copy(s).invert(),Ni.copy(e.ray).applyMatrix4(lu),i.boundingBox!==null&&Ni.intersectsBox(i.boundingBox)===!1))return;let o;const a=i.index,c=i.attributes.position,l=i.attributes.uv,u=i.attributes.uv2,f=i.groups,d=i.drawRange;if(a!==null)if(Array.isArray(r))for(let p=0,g=f.length;p<g;p++){const h=f[p],m=r[h.materialIndex],v=Math.max(h.start,d.start),S=Math.min(a.count,Math.min(h.start+h.count,d.start+d.count));for(let y=v,C=S;y<C;y+=3){const M=a.getX(y),P=a.getX(y+1),I=a.getX(y+2);o=Ms(this,m,e,Ni,l,u,M,P,I),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const p=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let h=p,m=g;h<m;h+=3){const v=a.getX(h),S=a.getX(h+1),y=a.getX(h+2);o=Ms(this,r,e,Ni,l,u,v,S,y),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let p=0,g=f.length;p<g;p++){const h=f[p],m=r[h.materialIndex],v=Math.max(h.start,d.start),S=Math.min(c.count,Math.min(h.start+h.count,d.start+d.count));for(let y=v,C=S;y<C;y+=3){const M=y,P=y+1,I=y+2;o=Ms(this,m,e,Ni,l,u,M,P,I),o&&(o.faceIndex=Math.floor(y/3),o.face.materialIndex=h.materialIndex,t.push(o))}}else{const p=Math.max(0,d.start),g=Math.min(c.count,d.start+d.count);for(let h=p,m=g;h<m;h+=3){const v=h,S=h+1,y=h+2;o=Ms(this,r,e,Ni,l,u,v,S,y),o&&(o.faceIndex=Math.floor(h/3),t.push(o))}}}}function p_(n,e,t,i,r,s,o,a){let c;if(e.side===jt?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===Jn,a),c===null)return null;Ss.copy(a),Ss.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(Ss);return l<t.near||l>t.far?null:{distance:l,point:Ss.clone(),object:n}}function Ms(n,e,t,i,r,s,o,a,c){n.getVertexPosition(o,br),n.getVertexPosition(a,Sr),n.getVertexPosition(c,Mr);const l=p_(n,e,t,i,br,Sr,Mr,oa);if(l){r&&(xs.fromBufferAttribute(r,o),ys.fromBufferAttribute(r,a),bs.fromBufferAttribute(r,c),l.uv=Dn.getUV(oa,br,Sr,Mr,xs,ys,bs,new Ke)),s&&(xs.fromBufferAttribute(s,o),ys.fromBufferAttribute(s,a),bs.fromBufferAttribute(s,c),l.uv2=Dn.getUV(oa,br,Sr,Mr,xs,ys,bs,new Ke));const u={a:o,b:a,c,normal:new G,materialIndex:0};Dn.getNormal(br,Sr,Mr,u.normal),l.face=u}return l}class fr extends bn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let d=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(f,2));function g(h,m,v,S,y,C,M,P,I,x,w){const A=C/I,Q=M/x,re=C/2,F=M/2,k=P/2,J=I+1,ne=x+1;let $=0,B=0;const ae=new G;for(let ce=0;ce<ne;ce++){const xe=ce*Q-F;for(let z=0;z<J;z++){const te=z*A-re;ae[h]=te*S,ae[m]=xe*y,ae[v]=k,l.push(ae.x,ae.y,ae.z),ae[h]=0,ae[m]=0,ae[v]=P>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(z/I),f.push(1-ce/x),$+=1}}for(let ce=0;ce<x;ce++)for(let xe=0;xe<I;xe++){const z=d+xe+J*ce,te=d+xe+J*(ce+1),he=d+(xe+1)+J*(ce+1),pe=d+(xe+1)+J*ce;c.push(z,te,pe),c.push(te,he,pe),B+=6}a.addGroup(p,B,w),p+=B,d+=$}}static fromJSON(e){return new fr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Pt(n){const e={};for(let t=0;t<n.length;t++){const i=ir(n[t]);for(const r in i)e[r]=i[r]}return e}function m_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Od(n){return n.getRenderTarget()===null&&n.outputEncoding===Je?mn:jr}const g_={clone:ir,merge:Pt};var __=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,v_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends ur{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=__,this.fragmentShader=v_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=m_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Fd extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Jt extends Fd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(zo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/l,r*=o.width/c,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,Bi=1;class x_ extends Nt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Jt(Ui,Bi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Jt(Ui,Bi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Jt(Ui,Bi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Jt(Ui,Bi,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Jt(Ui,Bi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Jt(Ui,Bi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=On,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,c),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Nd extends Ft{constructor(e,t,i,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,i,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class y_ extends Ei{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Nd(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ot}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fr(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:ir(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:$n});s.uniforms.tEquirect.value=t;const o=new In(r,s),a=t.minFilter;return t.minFilter===Hr&&(t.minFilter=Ot),new x_(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const aa=new G,b_=new G,S_=new Wt;class ui{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=aa.subVectors(i,t).cross(b_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(aa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||S_.getNormalMatrix(e),r=this.coplanarPoint(aa).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new po,Ts=new G;class Ud{constructor(e=new ui,t=new ui,i=new ui,r=new ui,s=new ui,o=new ui){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],o=i[2],a=i[3],c=i[4],l=i[5],u=i[6],f=i[7],d=i[8],p=i[9],g=i[10],h=i[11],m=i[12],v=i[13],S=i[14],y=i[15];return t[0].setComponents(a-r,f-c,h-d,y-m).normalize(),t[1].setComponents(a+r,f+c,h+d,y+m).normalize(),t[2].setComponents(a+s,f+l,h+p,y+v).normalize(),t[3].setComponents(a-s,f-l,h-p,y-v).normalize(),t[4].setComponents(a-o,f-u,h-g,y-S).normalize(),t[5].setComponents(a+o,f+u,h+g,y+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ts.x=r.normal.x>0?e.max.x:e.min.x,Ts.y=r.normal.y>0?e.max.y:e.min.y,Ts.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function M_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(l,u){const f=l.array,d=l.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,d),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const d=u.array,p=u.updateRange;n.bindBuffer(f,l),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=i.get(l);f===void 0?i.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class pc extends bn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),l=a+1,u=c+1,f=e/a,d=t/c,p=[],g=[],h=[],m=[];for(let v=0;v<u;v++){const S=v*d-o;for(let y=0;y<l;y++){const C=y*f-s;g.push(C,-S,0),h.push(0,0,1),m.push(y/a),m.push(1-v/c)}}for(let v=0;v<c;v++)for(let S=0;S<a;S++){const y=S+l*v,C=S+l*(v+1),M=S+1+l*(v+1),P=S+1+l*v;p.push(y,C,P),p.push(C,M,P)}this.setIndex(p),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(m,2))}static fromJSON(e){return new pc(e.width,e.height,e.widthSegments,e.heightSegments)}}var T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,C_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,w_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,A_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_="vec3 transformed = vec3( position );",D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,L_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,I_=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,k_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,H_=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,W_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,j_=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,$_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,K_="gl_FragColor = linearToOutputTexel( gl_FragColor );",J_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Z_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ev=`#ifdef USE_ENVMAP
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
#endif`,tv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
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
#endif`,iv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ov=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,av=`#ifdef USE_GRADIENTMAP
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
}`,cv=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,hv=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,xv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,yv=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Mv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tv=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cv=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ev=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,wv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Iv=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ov=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Uv=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Wv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,jv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,qv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,e0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,n0=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,i0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,r0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c0=`#ifdef USE_SKINNING
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
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,d0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,p0=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,m0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,g0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,_0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,v0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,x0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,y0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,b0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,M0=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,R0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,A0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,P0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,D0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,k0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,F0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,N0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,B0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,G0=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,W0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,j0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,X0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Y0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ex=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Fe={alphamap_fragment:T_,alphamap_pars_fragment:C_,alphatest_fragment:E_,alphatest_pars_fragment:w_,aomap_fragment:R_,aomap_pars_fragment:A_,begin_vertex:P_,beginnormal_vertex:D_,bsdfs:L_,iridescence_fragment:I_,bumpmap_pars_fragment:k_,clipping_planes_fragment:O_,clipping_planes_pars_fragment:F_,clipping_planes_pars_vertex:N_,clipping_planes_vertex:U_,color_fragment:B_,color_pars_fragment:z_,color_pars_vertex:G_,color_vertex:V_,common:H_,cube_uv_reflection_fragment:W_,defaultnormal_vertex:j_,displacementmap_pars_vertex:q_,displacementmap_vertex:X_,emissivemap_fragment:$_,emissivemap_pars_fragment:Y_,encodings_fragment:K_,encodings_pars_fragment:J_,envmap_fragment:Z_,envmap_common_pars_fragment:Q_,envmap_pars_fragment:ev,envmap_pars_vertex:tv,envmap_physical_pars_fragment:hv,envmap_vertex:nv,fog_vertex:iv,fog_pars_vertex:rv,fog_fragment:sv,fog_pars_fragment:ov,gradientmap_pars_fragment:av,lightmap_fragment:cv,lightmap_pars_fragment:lv,lights_lambert_fragment:uv,lights_lambert_pars_fragment:fv,lights_pars_begin:dv,lights_toon_fragment:pv,lights_toon_pars_fragment:mv,lights_phong_fragment:gv,lights_phong_pars_fragment:_v,lights_physical_fragment:vv,lights_physical_pars_fragment:xv,lights_fragment_begin:yv,lights_fragment_maps:bv,lights_fragment_end:Sv,logdepthbuf_fragment:Mv,logdepthbuf_pars_fragment:Tv,logdepthbuf_pars_vertex:Cv,logdepthbuf_vertex:Ev,map_fragment:wv,map_pars_fragment:Rv,map_particle_fragment:Av,map_particle_pars_fragment:Pv,metalnessmap_fragment:Dv,metalnessmap_pars_fragment:Lv,morphcolor_vertex:Iv,morphnormal_vertex:kv,morphtarget_pars_vertex:Ov,morphtarget_vertex:Fv,normal_fragment_begin:Nv,normal_fragment_maps:Uv,normal_pars_fragment:Bv,normal_pars_vertex:zv,normal_vertex:Gv,normalmap_pars_fragment:Vv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:Wv,clearcoat_pars_fragment:jv,iridescence_pars_fragment:qv,output_fragment:Xv,packing:$v,premultiplied_alpha_fragment:Yv,project_vertex:Kv,dithering_fragment:Jv,dithering_pars_fragment:Zv,roughnessmap_fragment:Qv,roughnessmap_pars_fragment:e0,shadowmap_pars_fragment:t0,shadowmap_pars_vertex:n0,shadowmap_vertex:i0,shadowmask_pars_fragment:r0,skinbase_vertex:s0,skinning_pars_vertex:o0,skinning_vertex:a0,skinnormal_vertex:c0,specularmap_fragment:l0,specularmap_pars_fragment:u0,tonemapping_fragment:f0,tonemapping_pars_fragment:d0,transmission_fragment:h0,transmission_pars_fragment:p0,uv_pars_fragment:m0,uv_pars_vertex:g0,uv_vertex:_0,uv2_pars_fragment:v0,uv2_pars_vertex:x0,uv2_vertex:y0,worldpos_vertex:b0,background_vert:S0,background_frag:M0,backgroundCube_vert:T0,backgroundCube_frag:C0,cube_vert:E0,cube_frag:w0,depth_vert:R0,depth_frag:A0,distanceRGBA_vert:P0,distanceRGBA_frag:D0,equirect_vert:L0,equirect_frag:I0,linedashed_vert:k0,linedashed_frag:O0,meshbasic_vert:F0,meshbasic_frag:N0,meshlambert_vert:U0,meshlambert_frag:B0,meshmatcap_vert:z0,meshmatcap_frag:G0,meshnormal_vert:V0,meshnormal_frag:H0,meshphong_vert:W0,meshphong_frag:j0,meshphysical_vert:q0,meshphysical_frag:X0,meshtoon_vert:$0,meshtoon_frag:Y0,points_vert:K0,points_frag:J0,shadow_vert:Z0,shadow_frag:Q0,sprite_vert:ex,sprite_frag:tx},me={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Wt},uv2Transform:{value:new Wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Wt}}},_n={basic:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Pt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Pt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Pt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Pt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Pt([me.points,me.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Pt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Pt([me.common,me.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Pt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Pt([me.sprite,me.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Pt([me.common,me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Pt([me.lights,me.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};_n.physical={uniforms:Pt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Cs={r:0,b:0,g:0};function nx(n,e,t,i,r,s,o){const a=new Ye(0);let c=s===!0?0:1,l,u,f=null,d=0,p=null;function g(m,v){let S=!1,y=v.isScene===!0?v.background:null;y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y));const C=n.xr,M=C.getSession&&C.getSession();M&&M.environmentBlendMode==="additive"&&(y=null),y===null?h(a,c):y&&y.isColor&&(h(y,1),S=!0),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),y&&(y.isCubeTexture||y.mapping===ho)?(u===void 0&&(u=new In(new fr(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:ir(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=y.encoding!==Je,(f!==y||d!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new In(new pc(2,2),new wi({name:"BackgroundMaterial",uniforms:ir(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=y.encoding!==Je,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||p!==n.toneMapping)&&(l.material.needsUpdate=!0,f=y,d=y.version,p=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function h(m,v){m.getRGB(Cs,Od(n)),i.buffers.color.setClear(Cs.r,Cs.g,Cs.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(m,v=1){a.set(m),c=v,h(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,h(a,c)},render:g}}function ix(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},c=m(null);let l=c,u=!1;function f(k,J,ne,$,B){let ae=!1;if(o){const ce=h($,ne,J);l!==ce&&(l=ce,p(l.object)),ae=v(k,$,ne,B),ae&&S(k,$,ne,B)}else{const ce=J.wireframe===!0;(l.geometry!==$.id||l.program!==ne.id||l.wireframe!==ce)&&(l.geometry=$.id,l.program=ne.id,l.wireframe=ce,ae=!0)}B!==null&&t.update(B,34963),(ae||u)&&(u=!1,x(k,J,ne,$),B!==null&&n.bindBuffer(34963,t.get(B).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(k){return i.isWebGL2?n.bindVertexArray(k):s.bindVertexArrayOES(k)}function g(k){return i.isWebGL2?n.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function h(k,J,ne){const $=ne.wireframe===!0;let B=a[k.id];B===void 0&&(B={},a[k.id]=B);let ae=B[J.id];ae===void 0&&(ae={},B[J.id]=ae);let ce=ae[$];return ce===void 0&&(ce=m(d()),ae[$]=ce),ce}function m(k){const J=[],ne=[],$=[];for(let B=0;B<r;B++)J[B]=0,ne[B]=0,$[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ne,attributeDivisors:$,object:k,attributes:{},index:null}}function v(k,J,ne,$){const B=l.attributes,ae=J.attributes;let ce=0;const xe=ne.getAttributes();for(const z in xe)if(xe[z].location>=0){const he=B[z];let pe=ae[z];if(pe===void 0&&(z==="instanceMatrix"&&k.instanceMatrix&&(pe=k.instanceMatrix),z==="instanceColor"&&k.instanceColor&&(pe=k.instanceColor)),he===void 0||he.attribute!==pe||pe&&he.data!==pe.data)return!0;ce++}return l.attributesNum!==ce||l.index!==$}function S(k,J,ne,$){const B={},ae=J.attributes;let ce=0;const xe=ne.getAttributes();for(const z in xe)if(xe[z].location>=0){let he=ae[z];he===void 0&&(z==="instanceMatrix"&&k.instanceMatrix&&(he=k.instanceMatrix),z==="instanceColor"&&k.instanceColor&&(he=k.instanceColor));const pe={};pe.attribute=he,he&&he.data&&(pe.data=he.data),B[z]=pe,ce++}l.attributes=B,l.attributesNum=ce,l.index=$}function y(){const k=l.newAttributes;for(let J=0,ne=k.length;J<ne;J++)k[J]=0}function C(k){M(k,0)}function M(k,J){const ne=l.newAttributes,$=l.enabledAttributes,B=l.attributeDivisors;ne[k]=1,$[k]===0&&(n.enableVertexAttribArray(k),$[k]=1),B[k]!==J&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,J),B[k]=J)}function P(){const k=l.newAttributes,J=l.enabledAttributes;for(let ne=0,$=J.length;ne<$;ne++)J[ne]!==k[ne]&&(n.disableVertexAttribArray(ne),J[ne]=0)}function I(k,J,ne,$,B,ae){i.isWebGL2===!0&&(ne===5124||ne===5125)?n.vertexAttribIPointer(k,J,ne,B,ae):n.vertexAttribPointer(k,J,ne,$,B,ae)}function x(k,J,ne,$){if(i.isWebGL2===!1&&(k.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const B=$.attributes,ae=ne.getAttributes(),ce=J.defaultAttributeValues;for(const xe in ae){const z=ae[xe];if(z.location>=0){let te=B[xe];if(te===void 0&&(xe==="instanceMatrix"&&k.instanceMatrix&&(te=k.instanceMatrix),xe==="instanceColor"&&k.instanceColor&&(te=k.instanceColor)),te!==void 0){const he=te.normalized,pe=te.itemSize,N=t.get(te);if(N===void 0)continue;const Pe=N.buffer,Te=N.type,ge=N.bytesPerElement;if(te.isInterleavedBufferAttribute){const ve=te.data,He=ve.stride,E=te.offset;if(ve.isInstancedInterleavedBuffer){for(let R=0;R<z.locationSize;R++)M(z.location+R,ve.meshPerAttribute);k.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let R=0;R<z.locationSize;R++)C(z.location+R);n.bindBuffer(34962,Pe);for(let R=0;R<z.locationSize;R++)I(z.location+R,pe/z.locationSize,Te,he,He*ge,(E+pe/z.locationSize*R)*ge)}else{if(te.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)M(z.location+ve,te.meshPerAttribute);k.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ve=0;ve<z.locationSize;ve++)C(z.location+ve);n.bindBuffer(34962,Pe);for(let ve=0;ve<z.locationSize;ve++)I(z.location+ve,pe/z.locationSize,Te,he,pe*ge,pe/z.locationSize*ve*ge)}}else if(ce!==void 0){const he=ce[xe];if(he!==void 0)switch(he.length){case 2:n.vertexAttrib2fv(z.location,he);break;case 3:n.vertexAttrib3fv(z.location,he);break;case 4:n.vertexAttrib4fv(z.location,he);break;default:n.vertexAttrib1fv(z.location,he)}}}}P()}function w(){re();for(const k in a){const J=a[k];for(const ne in J){const $=J[ne];for(const B in $)g($[B].object),delete $[B];delete J[ne]}delete a[k]}}function A(k){if(a[k.id]===void 0)return;const J=a[k.id];for(const ne in J){const $=J[ne];for(const B in $)g($[B].object),delete $[B];delete J[ne]}delete a[k.id]}function Q(k){for(const J in a){const ne=a[J];if(ne[k.id]===void 0)continue;const $=ne[k.id];for(const B in $)g($[B].object),delete $[B];delete ne[k.id]}}function re(){F(),u=!0,l!==c&&(l=c,p(l.object))}function F(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:re,resetDefaultState:F,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:Q,initAttributes:y,enableAttribute:C,disableUnusedAttributes:P}}function rx(n,e,t,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,l,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function sx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),d=n.getParameter(35660),p=n.getParameter(3379),g=n.getParameter(34076),h=n.getParameter(34921),m=n.getParameter(36347),v=n.getParameter(36348),S=n.getParameter(36349),y=d>0,C=o||e.has("OES_texture_float"),M=y&&C,P=o?n.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:g,maxAttributes:h,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:y,floatFragmentTextures:C,floatVertexTextures:M,maxSamples:P}}function ox(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new ui,a=new Wt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const g=f.clippingPlanes,h=f.clipIntersection,m=f.clipShadows,v=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const S=s?0:i,y=S*4;let C=v.clippingState||null;c.value=C,C=u(g,d,y,p);for(let M=0;M!==y;++M)C[M]=t[M];v.clippingState=C,this.numIntersection=h?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,g){const h=f!==null?f.length:0;let m=null;if(h!==0){if(m=c.value,g!==!0||m===null){const v=p+h*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<v)&&(m=new Float32Array(v));for(let y=0,C=p;y!==h;++y,C+=4)o.copy(f[y]).applyMatrix4(S,a),o.normal.toArray(m,C),m[C+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=h,e.numIntersection=0,m}}function ax(n){let e=new WeakMap;function t(o,a){return a===Oa?o.mapping=er:a===Fa&&(o.mapping=tr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Oa||a===Fa)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new y_(c.height/2);return l.fromEquirectangularTexture(n,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cx extends Fd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wi=4,uu=[.125,.215,.35,.446,.526,.582],gi=20,ca=new cx,fu=new Ye;let la=null;const fi=(1+Math.sqrt(5))/2,Gi=1/fi,du=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,fi,Gi),new G(0,fi,-Gi),new G(Gi,0,fi),new G(-Gi,0,fi),new G(fi,Gi,0),new G(-fi,Gi,0)];class hu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){la=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(la),e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),la=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ot,minFilter:Ot,generateMipmaps:!1,type:Wr,format:cn,encoding:Ci,depthBuffer:!1},r=pu(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pu(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lx(s)),this._blurMaterial=ux(s,e,t)}return r}_compileMaterial(e){const t=new In(this._lodPlanes[0],e);this._renderer.compile(t,ca)}_sceneToCubeUV(e,t,i,r){const a=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(fu),u.toneMapping=On,u.autoClear=!1;const p=new hc({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new In(new fr,p);let h=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,h=!0):(p.color.copy(fu),h=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(a.up.set(0,c[v],0),a.lookAt(l[v],0,0)):S===1?(a.up.set(0,0,c[v]),a.lookAt(0,l[v],0)):(a.up.set(0,c[v],0),a.lookAt(0,0,l[v]));const y=this._cubeSize;Es(r,S*y,v>2?y:0,y,y),u.setRenderTarget(r),h&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===er||e.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new In(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Es(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,ca)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=du[(r-1)%du.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new In(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*gi-1),h=s/g,m=isFinite(s)?1+Math.floor(u*h):gi;m>gi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const v=[];let S=0;for(let I=0;I<gi;++I){const x=I/h,w=Math.exp(-x*x/2);v.push(w),I===0?S+=w:I<m&&(S+=2*w)}for(let I=0;I<v.length;I++)v[I]=v[I]/S;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=v,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-i;const C=this._sizeLods[r],M=3*C*(r>y-Wi?r-y+Wi:0),P=4*(this._cubeSize-C);Es(t,M,P,3*C,2*C),c.setRenderTarget(t),c.render(f,ca)}}function lx(n){const e=[],t=[],i=[];let r=n;const s=n-Wi+1+uu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>n-Wi?c=uu[o-n+Wi-1]:o===0&&(c=0),i.push(c);const l=1/(a-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,h=3,m=2,v=1,S=new Float32Array(h*g*p),y=new Float32Array(m*g*p),C=new Float32Array(v*g*p);for(let P=0;P<p;P++){const I=P%3*2/3-1,x=P>2?0:-1,w=[I,x,0,I+2/3,x,0,I+2/3,x+1,0,I,x,0,I+2/3,x+1,0,I,x+1,0];S.set(w,h*g*P),y.set(d,m*g*P);const A=[P,P,P,P,P,P];C.set(A,v*g*P)}const M=new bn;M.setAttribute("position",new xn(S,h)),M.setAttribute("uv",new xn(y,m)),M.setAttribute("faceIndex",new xn(C,v)),e.push(M),r>Wi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function pu(n,e,t){const i=new Ei(n,e,t);return i.texture.mapping=ho,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function ux(n,e,t){const i=new Float32Array(gi),r=new G(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function mu(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mc(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function gu(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function mc(){return`

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
	`}function fx(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,l=c===Oa||c===Fa,u=c===er||c===tr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new hu(n)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new hu(n));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function dx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function hx(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],34962);const p=f.morphAttributes;for(const g in p){const h=p[g];for(let m=0,v=h.length;m<v;m++)e.update(h[m],34962)}}function l(f){const d=[],p=f.index,g=f.attributes.position;let h=0;if(p!==null){const S=p.array;h=p.version;for(let y=0,C=S.length;y<C;y+=3){const M=S[y+0],P=S[y+1],I=S[y+2];d.push(M,P,P,I,I,M)}}else{const S=g.array;h=g.version;for(let y=0,C=S.length/3-1;y<C;y+=3){const M=y+0,P=y+1,I=y+2;d.push(M,P,P,I,I,M)}}const m=new(Ed(d)?kd:Id)(d,1);m.version=h;const v=s.get(f);v&&e.remove(v),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function px(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,p){n.drawElements(s,p,a,d*c),t.update(p,s,1)}function f(d,p,g){if(g===0)return;let h,m;if(r)h=n,m="drawElementsInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",h===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,p,a,d*c,g),t.update(p,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function mx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function gx(n,e){return n[0]-e[0]}function _x(n,e){return Math.abs(e[1])-Math.abs(n[1])}function vx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new _t,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f,d){const p=l.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,m=h!==void 0?h.length:0;let v=s.get(u);if(v===void 0||v.count!==m){let ne=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",ne)};var g=ne;v!==void 0&&v.texture.dispose();const C=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],x=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let A=0;C===!0&&(A=1),M===!0&&(A=2),P===!0&&(A=3);let Q=u.attributes.position.count*A,re=1;Q>e.maxTextureSize&&(re=Math.ceil(Q/e.maxTextureSize),Q=e.maxTextureSize);const F=new Float32Array(Q*re*4*m),k=new Pd(F,Q,re,m);k.type=xi,k.needsUpdate=!0;const J=A*4;for(let $=0;$<m;$++){const B=I[$],ae=x[$],ce=w[$],xe=Q*re*4*$;for(let z=0;z<B.count;z++){const te=z*J;C===!0&&(o.fromBufferAttribute(B,z),F[xe+te+0]=o.x,F[xe+te+1]=o.y,F[xe+te+2]=o.z,F[xe+te+3]=0),M===!0&&(o.fromBufferAttribute(ae,z),F[xe+te+4]=o.x,F[xe+te+5]=o.y,F[xe+te+6]=o.z,F[xe+te+7]=0),P===!0&&(o.fromBufferAttribute(ce,z),F[xe+te+8]=o.x,F[xe+te+9]=o.y,F[xe+te+10]=o.z,F[xe+te+11]=ce.itemSize===4?o.w:1)}}v={count:m,texture:k,size:new Ke(Q,re)},s.set(u,v),u.addEventListener("dispose",ne)}let S=0;for(let C=0;C<p.length;C++)S+=p[C];const y=u.morphTargetsRelative?1:1-S;d.getUniforms().setValue(n,"morphTargetBaseInfluence",y),d.getUniforms().setValue(n,"morphTargetInfluences",p),d.getUniforms().setValue(n,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{const h=p===void 0?0:p.length;let m=i[u.id];if(m===void 0||m.length!==h){m=[];for(let M=0;M<h;M++)m[M]=[M,0];i[u.id]=m}for(let M=0;M<h;M++){const P=m[M];P[0]=M,P[1]=p[M]}m.sort(_x);for(let M=0;M<8;M++)M<h&&m[M][1]?(a[M][0]=m[M][0],a[M][1]=m[M][1]):(a[M][0]=Number.MAX_SAFE_INTEGER,a[M][1]=0);a.sort(gx);const v=u.morphAttributes.position,S=u.morphAttributes.normal;let y=0;for(let M=0;M<8;M++){const P=a[M],I=P[0],x=P[1];I!==Number.MAX_SAFE_INTEGER&&x?(v&&u.getAttribute("morphTarget"+M)!==v[I]&&u.setAttribute("morphTarget"+M,v[I]),S&&u.getAttribute("morphNormal"+M)!==S[I]&&u.setAttribute("morphNormal"+M,S[I]),r[M]=x,y+=x):(v&&u.hasAttribute("morphTarget"+M)===!0&&u.deleteAttribute("morphTarget"+M),S&&u.hasAttribute("morphNormal"+M)===!0&&u.deleteAttribute("morphNormal"+M),r[M]=0)}const C=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(n,"morphTargetBaseInfluence",C),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:c}}function xx(n,e,t,i){let r=new WeakMap;function s(c){const l=i.render.frame,u=c.geometry,f=e.get(c,u);return r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const zd=new Ft,Gd=new Pd,Vd=new r_,Hd=new Nd,_u=[],vu=[],xu=new Float32Array(16),yu=new Float32Array(9),bu=new Float32Array(4);function dr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_u[r];if(s===void 0&&(s=new Float32Array(r),_u[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function ot(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function at(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function go(n,e){let t=vu[e];t===void 0&&(t=new Int32Array(e),vu[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function yx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;n.uniform2fv(this.addr,e),at(t,e)}}function Sx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;n.uniform3fv(this.addr,e),at(t,e)}}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;n.uniform4fv(this.addr,e),at(t,e)}}function Tx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),at(t,e)}else{if(ot(t,i))return;bu.set(i),n.uniformMatrix2fv(this.addr,!1,bu),at(t,i)}}function Cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),at(t,e)}else{if(ot(t,i))return;yu.set(i),n.uniformMatrix3fv(this.addr,!1,yu),at(t,i)}}function Ex(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ot(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),at(t,e)}else{if(ot(t,i))return;xu.set(i),n.uniformMatrix4fv(this.addr,!1,xu),at(t,i)}}function wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Rx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;n.uniform2iv(this.addr,e),at(t,e)}}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;n.uniform3iv(this.addr,e),at(t,e)}}function Px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;n.uniform4iv(this.addr,e),at(t,e)}}function Dx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Lx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;n.uniform2uiv(this.addr,e),at(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;n.uniform3uiv(this.addr,e),at(t,e)}}function kx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;n.uniform4uiv(this.addr,e),at(t,e)}}function Ox(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||zd,r)}function Fx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Vd,r)}function Nx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Hd,r)}function Ux(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Gd,r)}function Bx(n){switch(n){case 5126:return yx;case 35664:return bx;case 35665:return Sx;case 35666:return Mx;case 35674:return Tx;case 35675:return Cx;case 35676:return Ex;case 5124:case 35670:return wx;case 35667:case 35671:return Rx;case 35668:case 35672:return Ax;case 35669:case 35673:return Px;case 5125:return Dx;case 36294:return Lx;case 36295:return Ix;case 36296:return kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ox;case 35679:case 36299:case 36307:return Fx;case 35680:case 36300:case 36308:case 36293:return Nx;case 36289:case 36303:case 36311:case 36292:return Ux}}function zx(n,e){n.uniform1fv(this.addr,e)}function Gx(n,e){const t=dr(e,this.size,2);n.uniform2fv(this.addr,t)}function Vx(n,e){const t=dr(e,this.size,3);n.uniform3fv(this.addr,t)}function Hx(n,e){const t=dr(e,this.size,4);n.uniform4fv(this.addr,t)}function Wx(n,e){const t=dr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function jx(n,e){const t=dr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function qx(n,e){const t=dr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Xx(n,e){n.uniform1iv(this.addr,e)}function $x(n,e){n.uniform2iv(this.addr,e)}function Yx(n,e){n.uniform3iv(this.addr,e)}function Kx(n,e){n.uniform4iv(this.addr,e)}function Jx(n,e){n.uniform1uiv(this.addr,e)}function Zx(n,e){n.uniform2uiv(this.addr,e)}function Qx(n,e){n.uniform3uiv(this.addr,e)}function ey(n,e){n.uniform4uiv(this.addr,e)}function ty(n,e,t){const i=this.cache,r=e.length,s=go(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||zd,s[o])}function ny(n,e,t){const i=this.cache,r=e.length,s=go(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Vd,s[o])}function iy(n,e,t){const i=this.cache,r=e.length,s=go(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Hd,s[o])}function ry(n,e,t){const i=this.cache,r=e.length,s=go(t,r);ot(i,s)||(n.uniform1iv(this.addr,s),at(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Gd,s[o])}function sy(n){switch(n){case 5126:return zx;case 35664:return Gx;case 35665:return Vx;case 35666:return Hx;case 35674:return Wx;case 35675:return jx;case 35676:return qx;case 5124:case 35670:return Xx;case 35667:case 35671:return $x;case 35668:case 35672:return Yx;case 35669:case 35673:return Kx;case 5125:return Jx;case 36294:return Zx;case 36295:return Qx;case 36296:return ey;case 35678:case 36198:case 36298:case 36306:case 35682:return ty;case 35679:case 36299:case 36307:return ny;case 35680:case 36300:case 36308:case 36293:return iy;case 36289:case 36303:case 36311:case 36292:return ry}}class oy{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Bx(t.type)}}class ay{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=sy(t.type)}}class cy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function Su(n,e){n.seq.push(e),n.map[e.id]=e}function ly(n,e,t){const i=n.name,r=i.length;for(ua.lastIndex=0;;){const s=ua.exec(i),o=ua.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){Su(t,l===void 0?new oy(a,n,e):new ay(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new cy(a),Su(t,f)),t=f}}}class zs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ly(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Mu(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let uy=0;function fy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function dy(n){switch(n){case Ci:return["Linear","( value )"];case Je:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Tu(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+fy(n.getShaderSource(e),o)}else return r}function hy(n,e){const t=dy(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function py(n,e){let t;switch(e){case Dg:t="Linear";break;case Lg:t="Reinhard";break;case Ig:t="OptimizedCineon";break;case kg:t="ACESFilmic";break;case Og:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function my(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Pr).join(`
`)}function gy(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function _y(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Pr(n){return n!==""}function Cu(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ga(n){return n.replace(vy,xy)}function xy(n,e){const t=Fe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Ga(t)}const yy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(n){return n.replace(yy,by)}function by(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ru(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sy(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===xd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===lg?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ar&&(e="SHADOWMAP_TYPE_VSM"),e}function My(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case ho:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ty(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function Cy(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Sd:e="ENVMAP_BLENDING_MULTIPLY";break;case Ag:e="ENVMAP_BLENDING_MIX";break;case Pg:e="ENVMAP_BLENDING_ADD";break}return e}function Ey(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function wy(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Sy(t),l=My(t),u=Ty(t),f=Cy(t),d=Ey(t),p=t.isWebGL2?"":my(t),g=gy(s),h=r.createProgram();let m,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Pr).join(`
`),m.length>0&&(m+=`
`),v=[p,g].filter(Pr).join(`
`),v.length>0&&(v+=`
`)):(m=[Ru(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Pr).join(`
`),v=[p,Ru(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==On?"#define TONE_MAPPING":"",t.toneMapping!==On?Fe.tonemapping_pars_fragment:"",t.toneMapping!==On?py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.encodings_pars_fragment,hy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Pr).join(`
`)),o=Ga(o),o=Cu(o,t),o=Eu(o,t),a=Ga(a),a=Cu(a,t),a=Eu(a,t),o=wu(o),a=wu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,v=["#define varying in",t.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const y=S+m+o,C=S+v+a,M=Mu(r,35633,y),P=Mu(r,35632,C);if(r.attachShader(h,M),r.attachShader(h,P),t.index0AttributeName!==void 0?r.bindAttribLocation(h,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(h,0,"position"),r.linkProgram(h),n.debug.checkShaderErrors){const w=r.getProgramInfoLog(h).trim(),A=r.getShaderInfoLog(M).trim(),Q=r.getShaderInfoLog(P).trim();let re=!0,F=!0;if(r.getProgramParameter(h,35714)===!1){re=!1;const k=Tu(r,M,"vertex"),J=Tu(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(h,35715)+`

Program Info Log: `+w+`
`+k+`
`+J)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(A===""||Q==="")&&(F=!1);F&&(this.diagnostics={runnable:re,programLog:w,vertexShader:{log:A,prefix:m},fragmentShader:{log:Q,prefix:v}})}r.deleteShader(M),r.deleteShader(P);let I;this.getUniforms=function(){return I===void 0&&(I=new zs(r,h)),I};let x;return this.getAttributes=function(){return x===void 0&&(x=_y(r,h)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(h),this.program=void 0},this.name=t.shaderName,this.id=uy++,this.cacheKey=e,this.usedTimes=1,this.program=h,this.vertexShader=M,this.fragmentShader=P,this}let Ry=0;class Ay{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Py(e),t.set(e,i)),i}}class Py{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}}function Dy(n,e,t,i,r,s,o){const a=new Ld,c=new Ay,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x,w,A,Q,re){const F=Q.fog,k=re.geometry,J=x.isMeshStandardMaterial?Q.environment:null,ne=(x.isMeshStandardMaterial?t:e).get(x.envMap||J),$=ne&&ne.mapping===ho?ne.image.height:null,B=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const ae=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=ae!==void 0?ae.length:0;let xe=0;k.morphAttributes.position!==void 0&&(xe=1),k.morphAttributes.normal!==void 0&&(xe=2),k.morphAttributes.color!==void 0&&(xe=3);let z,te,he,pe;if(B){const He=_n[B];z=He.vertexShader,te=He.fragmentShader}else z=x.vertexShader,te=x.fragmentShader,c.update(x),he=c.getVertexShaderID(x),pe=c.getFragmentShaderID(x);const N=n.getRenderTarget(),Pe=x.alphaTest>0,Te=x.clearcoat>0,ge=x.iridescence>0;return{isWebGL2:u,shaderID:B,shaderName:x.type,vertexShader:z,fragmentShader:te,defines:x.defines,customVertexShaderID:he,customFragmentShaderID:pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:d,outputEncoding:N===null?n.outputEncoding:N.isXRRenderTarget===!0?N.texture.encoding:Ci,map:!!x.map,matcap:!!x.matcap,envMap:!!ne,envMapMode:ne&&ne.mapping,envMapCubeUVHeight:$,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===e_,tangentSpaceNormalMap:x.normalMapType===Cd,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Je,clearcoat:Te,clearcoatMap:Te&&!!x.clearcoatMap,clearcoatRoughnessMap:Te&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:Te&&!!x.clearcoatNormalMap,iridescence:ge,iridescenceMap:ge&&!!x.iridescenceMap,iridescenceThicknessMap:ge&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===Yi,alphaMap:!!x.alphaMap,alphaTest:Pe,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!k.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!F,useFog:x.fog===!0,fogExp2:F&&F.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:f,skinning:re.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:xe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&A.length>0,shadowMapType:n.shadowMap.type,toneMapping:x.toneMapped?n.toneMapping:On,physicallyCorrectLights:n.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===jn,flipSided:x.side===jt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function m(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const A in x.defines)w.push(A),w.push(x.defines[A]);return x.isRawShaderMaterial===!1&&(v(w,x),S(w,x),w.push(n.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function v(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function S(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),x.push(a.mask)}function y(x){const w=g[x.type];let A;if(w){const Q=_n[w];A=g_.clone(Q.uniforms)}else A=x.uniforms;return A}function C(x,w){let A;for(let Q=0,re=l.length;Q<re;Q++){const F=l[Q];if(F.cacheKey===w){A=F,++A.usedTimes;break}}return A===void 0&&(A=new wy(n,w,x,s),l.push(A)),A}function M(x){if(--x.usedTimes===0){const w=l.indexOf(x);l[w]=l[l.length-1],l.pop(),x.destroy()}}function P(x){c.remove(x)}function I(){c.dispose()}return{getParameters:h,getProgramCacheKey:m,getUniforms:y,acquireProgram:C,releaseProgram:M,releaseShaderCache:P,programs:l,dispose:I}}function Ly(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Iy(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Au(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pu(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,g,h,m){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:d,material:p,groupOrder:g,renderOrder:f.renderOrder,z:h,group:m},n[e]=v):(v.id=f.id,v.object=f,v.geometry=d,v.material=p,v.groupOrder=g,v.renderOrder=f.renderOrder,v.z=h,v.group=m),e++,v}function a(f,d,p,g,h,m){const v=o(f,d,p,g,h,m);p.transmission>0?i.push(v):p.transparent===!0?r.push(v):t.push(v)}function c(f,d,p,g,h,m){const v=o(f,d,p,g,h,m);p.transmission>0?i.unshift(v):p.transparent===!0?r.unshift(v):t.unshift(v)}function l(f,d){t.length>1&&t.sort(f||Iy),i.length>1&&i.sort(d||Au),r.length>1&&r.sort(d||Au)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function ky(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Pu,n.set(i,[o])):r>=s.length?(o=new Pu,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Oy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Ye};break;case"SpotLight":t={position:new G,direction:new G,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function Fy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Ny=0;function Uy(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function By(n,e){const t=new Oy,i=Fy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,o=new ht,a=new ht;function c(u,f){let d=0,p=0,g=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let h=0,m=0,v=0,S=0,y=0,C=0,M=0,P=0,I=0,x=0;u.sort(Uy);const w=f!==!0?Math.PI:1;for(let Q=0,re=u.length;Q<re;Q++){const F=u[Q],k=F.color,J=F.intensity,ne=F.distance,$=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)d+=k.r*J*w,p+=k.g*J*w,g+=k.b*J*w;else if(F.isLightProbe)for(let B=0;B<9;B++)r.probe[B].addScaledVector(F.sh.coefficients[B],J);else if(F.isDirectionalLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity*w),F.castShadow){const ae=F.shadow,ce=i.get(F);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,r.directionalShadow[h]=ce,r.directionalShadowMap[h]=$,r.directionalShadowMatrix[h]=F.shadow.matrix,C++}r.directional[h]=B,h++}else if(F.isSpotLight){const B=t.get(F);B.position.setFromMatrixPosition(F.matrixWorld),B.color.copy(k).multiplyScalar(J*w),B.distance=ne,B.coneCos=Math.cos(F.angle),B.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),B.decay=F.decay,r.spot[v]=B;const ae=F.shadow;if(F.map&&(r.spotLightMap[I]=F.map,I++,ae.updateMatrices(F),F.castShadow&&x++),r.spotLightMatrix[v]=ae.matrix,F.castShadow){const ce=i.get(F);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,r.spotShadow[v]=ce,r.spotShadowMap[v]=$,P++}v++}else if(F.isRectAreaLight){const B=t.get(F);B.color.copy(k).multiplyScalar(J),B.halfWidth.set(F.width*.5,0,0),B.halfHeight.set(0,F.height*.5,0),r.rectArea[S]=B,S++}else if(F.isPointLight){const B=t.get(F);if(B.color.copy(F.color).multiplyScalar(F.intensity*w),B.distance=F.distance,B.decay=F.decay,F.castShadow){const ae=F.shadow,ce=i.get(F);ce.shadowBias=ae.bias,ce.shadowNormalBias=ae.normalBias,ce.shadowRadius=ae.radius,ce.shadowMapSize=ae.mapSize,ce.shadowCameraNear=ae.camera.near,ce.shadowCameraFar=ae.camera.far,r.pointShadow[m]=ce,r.pointShadowMap[m]=$,r.pointShadowMatrix[m]=F.shadow.matrix,M++}r.point[m]=B,m++}else if(F.isHemisphereLight){const B=t.get(F);B.skyColor.copy(F.color).multiplyScalar(J*w),B.groundColor.copy(F.groundColor).multiplyScalar(J*w),r.hemi[y]=B,y++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==h||A.pointLength!==m||A.spotLength!==v||A.rectAreaLength!==S||A.hemiLength!==y||A.numDirectionalShadows!==C||A.numPointShadows!==M||A.numSpotShadows!==P||A.numSpotMaps!==I)&&(r.directional.length=h,r.spot.length=v,r.rectArea.length=S,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=M,r.pointShadowMap.length=M,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=M,r.spotLightMatrix.length=P+I-x,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=x,A.directionalLength=h,A.pointLength=m,A.spotLength=v,A.rectAreaLength=S,A.hemiLength=y,A.numDirectionalShadows=C,A.numPointShadows=M,A.numSpotShadows=P,A.numSpotMaps=I,r.version=Ny++)}function l(u,f){let d=0,p=0,g=0,h=0,m=0;const v=f.matrixWorldInverse;for(let S=0,y=u.length;S<y;S++){const C=u[S];if(C.isDirectionalLight){const M=r.directional[d];M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),d++}else if(C.isSpotLight){const M=r.spot[g];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(v),M.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(v),g++}else if(C.isRectAreaLight){const M=r.rectArea[h];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(v),a.identity(),o.copy(C.matrixWorld),o.premultiply(v),a.extractRotation(o),M.halfWidth.set(C.width*.5,0,0),M.halfHeight.set(0,C.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),h++}else if(C.isPointLight){const M=r.point[p];M.position.setFromMatrixPosition(C.matrixWorld),M.position.applyMatrix4(v),p++}else if(C.isHemisphereLight){const M=r.hemi[m];M.direction.setFromMatrixPosition(C.matrixWorld),M.direction.transformDirection(v),m++}}}return{setup:c,setupView:l,state:r}}function Du(n,e){const t=new By(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function c(f){t.setup(i,f)}function l(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function zy(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new Du(n,e),t.set(s,[c])):o>=a.length?(c=new Du(n,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:i,dispose:r}}class Gy extends ur{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Vy extends ur{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jy(n,e,t){let i=new Ud;const r=new Ke,s=new Ke,o=new _t,a=new Gy({depthPacking:Qg}),c=new Vy,l={},u=t.maxTextureSize,f={[Jn]:jt,[jt]:Jn,[jn]:jn},d=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Hy,fragmentShader:Wy}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new bn;g.setAttribute("position",new xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const h=new In(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xd,this.render=function(C,M,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const I=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),A=n.state;A.setBlending($n),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);for(let Q=0,re=C.length;Q<re;Q++){const F=C[Q],k=F.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",F,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const J=k.getFrameExtents();if(r.multiply(J),s.copy(k.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,k.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,k.mapSize.y=s.y)),k.map===null){const $=this.type!==Ar?{minFilter:Dt,magFilter:Dt}:{};k.map=new Ei(r.x,r.y,$),k.map.texture.name=F.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();const ne=k.getViewportCount();for(let $=0;$<ne;$++){const B=k.getViewport($);o.set(s.x*B.x,s.y*B.y,s.x*B.z,s.y*B.w),A.viewport(o),k.updateMatrices(F,$),i=k.getFrustum(),y(M,P,k.camera,F,this.type)}k.isPointLightShadow!==!0&&this.type===Ar&&v(k,P),k.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(I,x,w)};function v(C,M){const P=e.update(h);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ei(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(M,null,P,d,h,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(M,null,P,p,h,null)}function S(C,M,P,I,x,w){let A=null;const Q=P.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(Q!==void 0)A=Q;else if(A=P.isPointLight===!0?c:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const re=A.uuid,F=M.uuid;let k=l[re];k===void 0&&(k={},l[re]=k);let J=k[F];J===void 0&&(J=A.clone(),k[F]=J),A=J}return A.visible=M.visible,A.wireframe=M.wireframe,w===Ar?A.side=M.shadowSide!==null?M.shadowSide:M.side:A.side=M.shadowSide!==null?M.shadowSide:f[M.side],A.alphaMap=M.alphaMap,A.alphaTest=M.alphaTest,A.map=M.map,A.clipShadows=M.clipShadows,A.clippingPlanes=M.clippingPlanes,A.clipIntersection=M.clipIntersection,A.displacementMap=M.displacementMap,A.displacementScale=M.displacementScale,A.displacementBias=M.displacementBias,A.wireframeLinewidth=M.wireframeLinewidth,A.linewidth=M.linewidth,P.isPointLight===!0&&A.isMeshDistanceMaterial===!0&&(A.referencePosition.setFromMatrixPosition(P.matrixWorld),A.nearDistance=I,A.farDistance=x),A}function y(C,M,P,I,x){if(C.visible===!1)return;if(C.layers.test(M.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Ar)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,C.matrixWorld);const Q=e.update(C),re=C.material;if(Array.isArray(re)){const F=Q.groups;for(let k=0,J=F.length;k<J;k++){const ne=F[k],$=re[ne.materialIndex];if($&&$.visible){const B=S(C,$,I,P.near,P.far,x);n.renderBufferDirect(P,null,Q,B,C,ne)}}}else if(re.visible){const F=S(C,re,I,P.near,P.far,x);n.renderBufferDirect(P,null,Q,F,C,null)}}const A=C.children;for(let Q=0,re=A.length;Q<re;Q++)y(A[Q],M,P,I,x)}}function qy(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const j=new _t;let ue=null;const be=new _t(0,0,0,0);return{setMask:function(Ee){ue!==Ee&&!D&&(n.colorMask(Ee,Ee,Ee,Ee),ue=Ee)},setLocked:function(Ee){D=Ee},setClear:function(Ee,qe,lt,yt,Zn){Zn===!0&&(Ee*=yt,qe*=yt,lt*=yt),j.set(Ee,qe,lt,yt),be.equals(j)===!1&&(n.clearColor(Ee,qe,lt,yt),be.copy(j))},reset:function(){D=!1,ue=null,be.set(-1,0,0,0)}}}function s(){let D=!1,j=null,ue=null,be=null;return{setTest:function(Ee){Ee?Pe(2929):Te(2929)},setMask:function(Ee){j!==Ee&&!D&&(n.depthMask(Ee),j=Ee)},setFunc:function(Ee){if(ue!==Ee){switch(Ee){case Sg:n.depthFunc(512);break;case Mg:n.depthFunc(519);break;case Tg:n.depthFunc(513);break;case ka:n.depthFunc(515);break;case Cg:n.depthFunc(514);break;case Eg:n.depthFunc(518);break;case wg:n.depthFunc(516);break;case Rg:n.depthFunc(517);break;default:n.depthFunc(515)}ue=Ee}},setLocked:function(Ee){D=Ee},setClear:function(Ee){be!==Ee&&(n.clearDepth(Ee),be=Ee)},reset:function(){D=!1,j=null,ue=null,be=null}}}function o(){let D=!1,j=null,ue=null,be=null,Ee=null,qe=null,lt=null,yt=null,Zn=null;return{setTest:function(Qe){D||(Qe?Pe(2960):Te(2960))},setMask:function(Qe){j!==Qe&&!D&&(n.stencilMask(Qe),j=Qe)},setFunc:function(Qe,Sn,$t){(ue!==Qe||be!==Sn||Ee!==$t)&&(n.stencilFunc(Qe,Sn,$t),ue=Qe,be=Sn,Ee=$t)},setOp:function(Qe,Sn,$t){(qe!==Qe||lt!==Sn||yt!==$t)&&(n.stencilOp(Qe,Sn,$t),qe=Qe,lt=Sn,yt=$t)},setLocked:function(Qe){D=Qe},setClear:function(Qe){Zn!==Qe&&(n.clearStencil(Qe),Zn=Qe)},reset:function(){D=!1,j=null,ue=null,be=null,Ee=null,qe=null,lt=null,yt=null,Zn=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let d={},p={},g=new WeakMap,h=[],m=null,v=!1,S=null,y=null,C=null,M=null,P=null,I=null,x=null,w=!1,A=null,Q=null,re=null,F=null,k=null;const J=n.getParameter(35661);let ne=!1,$=0;const B=n.getParameter(7938);B.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(B)[1]),ne=$>=1):B.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ne=$>=2);let ae=null,ce={};const xe=n.getParameter(3088),z=n.getParameter(2978),te=new _t().fromArray(xe),he=new _t().fromArray(z);function pe(D,j,ue){const be=new Uint8Array(4),Ee=n.createTexture();n.bindTexture(D,Ee),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let qe=0;qe<ue;qe++)n.texImage2D(j+qe,0,6408,1,1,0,6408,5121,be);return Ee}const N={};N[3553]=pe(3553,3553,1),N[34067]=pe(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Pe(2929),c.setFunc(ka),X(!1),se(yl),Pe(2884),V($n);function Pe(D){d[D]!==!0&&(n.enable(D),d[D]=!0)}function Te(D){d[D]!==!1&&(n.disable(D),d[D]=!1)}function ge(D,j){return p[D]!==j?(n.bindFramebuffer(D,j),p[D]=j,i&&(D===36009&&(p[36160]=j),D===36160&&(p[36009]=j)),!0):!1}function ve(D,j){let ue=h,be=!1;if(D)if(ue=g.get(j),ue===void 0&&(ue=[],g.set(j,ue)),D.isWebGLMultipleRenderTargets){const Ee=D.texture;if(ue.length!==Ee.length||ue[0]!==36064){for(let qe=0,lt=Ee.length;qe<lt;qe++)ue[qe]=36064+qe;ue.length=Ee.length,be=!0}}else ue[0]!==36064&&(ue[0]=36064,be=!0);else ue[0]!==1029&&(ue[0]=1029,be=!0);be&&(t.isWebGL2?n.drawBuffers(ue):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ue))}function He(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const E={[Hi]:32774,[fg]:32778,[dg]:32779};if(i)E[Tl]=32775,E[Cl]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(E[Tl]=D.MIN_EXT,E[Cl]=D.MAX_EXT)}const R={[hg]:0,[pg]:1,[mg]:768,[yd]:770,[bg]:776,[xg]:774,[_g]:772,[gg]:769,[bd]:771,[yg]:775,[vg]:773};function V(D,j,ue,be,Ee,qe,lt,yt){if(D===$n){v===!0&&(Te(3042),v=!1);return}if(v===!1&&(Pe(3042),v=!0),D!==ug){if(D!==S||yt!==w){if((y!==Hi||P!==Hi)&&(n.blendEquation(32774),y=Hi,P=Hi),yt)switch(D){case Yi:n.blendFuncSeparate(1,771,1,771);break;case bl:n.blendFunc(1,1);break;case Sl:n.blendFuncSeparate(0,769,0,1);break;case Ml:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Yi:n.blendFuncSeparate(770,771,1,771);break;case bl:n.blendFunc(770,1);break;case Sl:n.blendFuncSeparate(0,769,0,1);break;case Ml:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}C=null,M=null,I=null,x=null,S=D,w=yt}return}Ee=Ee||j,qe=qe||ue,lt=lt||be,(j!==y||Ee!==P)&&(n.blendEquationSeparate(E[j],E[Ee]),y=j,P=Ee),(ue!==C||be!==M||qe!==I||lt!==x)&&(n.blendFuncSeparate(R[ue],R[be],R[qe],R[lt]),C=ue,M=be,I=qe,x=lt),S=D,w=!1}function ee(D,j){D.side===jn?Te(2884):Pe(2884);let ue=D.side===jt;j&&(ue=!ue),X(ue),D.blending===Yi&&D.transparent===!1?V($n):V(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),c.setFunc(D.depthFunc),c.setTest(D.depthTest),c.setMask(D.depthWrite),a.setMask(D.colorWrite);const be=D.stencilWrite;l.setTest(be),be&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Z(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Pe(32926):Te(32926)}function X(D){A!==D&&(D?n.frontFace(2304):n.frontFace(2305),A=D)}function se(D){D!==ag?(Pe(2884),D!==Q&&(D===yl?n.cullFace(1029):D===cg?n.cullFace(1028):n.cullFace(1032))):Te(2884),Q=D}function le(D){D!==re&&(ne&&n.lineWidth(D),re=D)}function Z(D,j,ue){D?(Pe(32823),(F!==j||k!==ue)&&(n.polygonOffset(j,ue),F=j,k=ue)):Te(32823)}function de(D){D?Pe(3089):Te(3089)}function ie(D){D===void 0&&(D=33984+J-1),ae!==D&&(n.activeTexture(D),ae=D)}function b(D,j,ue){ue===void 0&&(ae===null?ue=33984+J-1:ue=ae);let be=ce[ue];be===void 0&&(be={type:void 0,texture:void 0},ce[ue]=be),(be.type!==D||be.texture!==j)&&(ae!==ue&&(n.activeTexture(ue),ae=ue),n.bindTexture(D,j||N[D]),be.type=D,be.texture=j)}function _(){const D=ce[ae];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function L(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function H(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function W(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(D){te.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function ye(D){he.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),he.copy(D))}function Ie(D,j){let ue=f.get(j);ue===void 0&&(ue=new WeakMap,f.set(j,ue));let be=ue.get(D);be===void 0&&(be=n.getUniformBlockIndex(j,D.name),ue.set(D,be))}function $e(D,j){const be=f.get(j).get(D);u.get(j)!==be&&(n.uniformBlockBinding(j,be,D.__bindingPointIndex),u.set(j,be))}function ct(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},ae=null,ce={},p={},g=new WeakMap,h=[],m=null,v=!1,S=null,y=null,C=null,M=null,P=null,I=null,x=null,w=!1,A=null,Q=null,re=null,F=null,k=null,te.set(0,0,n.canvas.width,n.canvas.height),he.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Pe,disable:Te,bindFramebuffer:ge,drawBuffers:ve,useProgram:He,setBlending:V,setMaterial:ee,setFlipSided:X,setCullFace:se,setLineWidth:le,setPolygonOffset:Z,setScissorTest:de,activeTexture:ie,bindTexture:b,unbindTexture:_,compressedTexImage2D:L,compressedTexImage3D:H,texImage2D:Ae,texImage3D:Me,updateUBOMapping:Ie,uniformBlockBinding:$e,texStorage2D:W,texStorage3D:Ce,texSubImage2D:Y,texSubImage3D:oe,compressedTexSubImage2D:_e,compressedTexSubImage3D:fe,scissor:we,viewport:ye,reset:ct}}function Xy(n,e,t,i,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let h;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,_){return v?new OffscreenCanvas(b,_):Zs("canvas")}function y(b,_,L,H){let Y=1;if((b.width>H||b.height>H)&&(Y=H/Math.max(b.width,b.height)),Y<1||_===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const oe=_?za:Math.floor,_e=oe(Y*b.width),fe=oe(Y*b.height);h===void 0&&(h=S(_e,fe));const W=L?S(_e,fe):h;return W.width=_e,W.height=fe,W.getContext("2d").drawImage(b,0,0,_e,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+_e+"x"+fe+")."),W}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function C(b){return Ql(b.width)&&Ql(b.height)}function M(b){return a?!1:b.wrapS!==an||b.wrapT!==an||b.minFilter!==Dt&&b.minFilter!==Ot}function P(b,_){return b.generateMipmaps&&_&&b.minFilter!==Dt&&b.minFilter!==Ot}function I(b){n.generateMipmap(b)}function x(b,_,L,H,Y=!1){if(a===!1)return _;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let oe=_;return _===6403&&(L===5126&&(oe=33326),L===5131&&(oe=33325),L===5121&&(oe=33321)),_===33319&&(L===5126&&(oe=33328),L===5131&&(oe=33327),L===5121&&(oe=33323)),_===6408&&(L===5126&&(oe=34836),L===5131&&(oe=34842),L===5121&&(oe=H===Je&&Y===!1?35907:32856),L===32819&&(oe=32854),L===32820&&(oe=32855)),(oe===33325||oe===33326||oe===33327||oe===33328||oe===34842||oe===34836)&&e.get("EXT_color_buffer_float"),oe}function w(b,_,L){return P(b,L)===!0||b.isFramebufferTexture&&b.minFilter!==Dt&&b.minFilter!==Ot?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function A(b){return b===Dt||b===El||b===Io?9728:9729}function Q(b){const _=b.target;_.removeEventListener("dispose",Q),F(_),_.isVideoTexture&&g.delete(_)}function re(b){const _=b.target;_.removeEventListener("dispose",re),J(_)}function F(b){const _=i.get(b);if(_.__webglInit===void 0)return;const L=b.source,H=m.get(L);if(H){const Y=H[_.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&k(b),Object.keys(H).length===0&&m.delete(L)}i.remove(b)}function k(b){const _=i.get(b);n.deleteTexture(_.__webglTexture);const L=b.source,H=m.get(L);delete H[_.__cacheKey],o.memory.textures--}function J(b){const _=b.texture,L=i.get(b),H=i.get(_);if(H.__webglTexture!==void 0&&(n.deleteTexture(H.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++)n.deleteFramebuffer(L.__webglFramebuffer[Y]),L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer[Y]);else{if(n.deleteFramebuffer(L.__webglFramebuffer),L.__webglDepthbuffer&&n.deleteRenderbuffer(L.__webglDepthbuffer),L.__webglMultisampledFramebuffer&&n.deleteFramebuffer(L.__webglMultisampledFramebuffer),L.__webglColorRenderbuffer)for(let Y=0;Y<L.__webglColorRenderbuffer.length;Y++)L.__webglColorRenderbuffer[Y]&&n.deleteRenderbuffer(L.__webglColorRenderbuffer[Y]);L.__webglDepthRenderbuffer&&n.deleteRenderbuffer(L.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Y=0,oe=_.length;Y<oe;Y++){const _e=i.get(_[Y]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(_[Y])}i.remove(_),i.remove(b)}let ne=0;function $(){ne=0}function B(){const b=ne;return b>=c&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+c),ne+=1,b}function ae(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.encoding),_.join()}function ce(b,_){const L=i.get(b);if(b.isVideoTexture&&de(b),b.isRenderTargetTexture===!1&&b.version>0&&L.__version!==b.version){const H=b.image;if(H===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(L,b,_);return}}t.bindTexture(3553,L.__webglTexture,33984+_)}function xe(b,_){const L=i.get(b);if(b.version>0&&L.__version!==b.version){Te(L,b,_);return}t.bindTexture(35866,L.__webglTexture,33984+_)}function z(b,_){const L=i.get(b);if(b.version>0&&L.__version!==b.version){Te(L,b,_);return}t.bindTexture(32879,L.__webglTexture,33984+_)}function te(b,_){const L=i.get(b);if(b.version>0&&L.__version!==b.version){ge(L,b,_);return}t.bindTexture(34067,L.__webglTexture,33984+_)}const he={[Na]:10497,[an]:33071,[Ua]:33648},pe={[Dt]:9728,[El]:9984,[Io]:9986,[Ot]:9729,[Fg]:9985,[Hr]:9987};function N(b,_,L){if(L?(n.texParameteri(b,10242,he[_.wrapS]),n.texParameteri(b,10243,he[_.wrapT]),(b===32879||b===35866)&&n.texParameteri(b,32882,he[_.wrapR]),n.texParameteri(b,10240,pe[_.magFilter]),n.texParameteri(b,10241,pe[_.minFilter])):(n.texParameteri(b,10242,33071),n.texParameteri(b,10243,33071),(b===32879||b===35866)&&n.texParameteri(b,32882,33071),(_.wrapS!==an||_.wrapT!==an)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,10240,A(_.magFilter)),n.texParameteri(b,10241,A(_.minFilter)),_.minFilter!==Dt&&_.minFilter!==Ot&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const H=e.get("EXT_texture_filter_anisotropic");if(_.magFilter===Dt||_.minFilter!==Io&&_.minFilter!==Hr||_.type===xi&&e.has("OES_texture_float_linear")===!1||a===!1&&_.type===Wr&&e.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||i.get(_).__currentAnisotropy)&&(n.texParameterf(b,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy)}}function Pe(b,_){let L=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",Q));const H=_.source;let Y=m.get(H);Y===void 0&&(Y={},m.set(H,Y));const oe=ae(_);if(oe!==b.__cacheKey){Y[oe]===void 0&&(Y[oe]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,L=!0),Y[oe].usedTimes++;const _e=Y[b.__cacheKey];_e!==void 0&&(Y[b.__cacheKey].usedTimes--,_e.usedTimes===0&&k(_)),b.__cacheKey=oe,b.__webglTexture=Y[oe].texture}return L}function Te(b,_,L){let H=3553;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(H=35866),_.isData3DTexture&&(H=32879);const Y=Pe(b,_),oe=_.source;t.bindTexture(H,b.__webglTexture,33984+L);const _e=i.get(oe);if(oe.version!==_e.__version||Y===!0){t.activeTexture(33984+L),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const fe=M(_)&&C(_.image)===!1;let W=y(_.image,fe,!1,u);W=ie(_,W);const Ce=C(W)||a,Ae=s.convert(_.format,_.encoding);let Me=s.convert(_.type),we=x(_.internalFormat,Ae,Me,_.encoding,_.isVideoTexture);N(H,_,Ce);let ye;const Ie=_.mipmaps,$e=a&&_.isVideoTexture!==!0,ct=_e.__version===void 0||Y===!0,D=w(_,W,Ce);if(_.isDepthTexture)we=6402,a?_.type===xi?we=36012:_.type===vi?we=33190:_.type===Ki?we=35056:we=33189:_.type===xi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===Si&&we===6402&&_.type!==Td&&_.type!==vi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=vi,Me=s.convert(_.type)),_.format===nr&&we===6402&&(we=34041,_.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=Ki,Me=s.convert(_.type))),ct&&($e?t.texStorage2D(3553,1,we,W.width,W.height):t.texImage2D(3553,0,we,W.width,W.height,0,Ae,Me,null));else if(_.isDataTexture)if(Ie.length>0&&Ce){$e&&ct&&t.texStorage2D(3553,D,we,Ie[0].width,Ie[0].height);for(let j=0,ue=Ie.length;j<ue;j++)ye=Ie[j],$e?t.texSubImage2D(3553,j,0,0,ye.width,ye.height,Ae,Me,ye.data):t.texImage2D(3553,j,we,ye.width,ye.height,0,Ae,Me,ye.data);_.generateMipmaps=!1}else $e?(ct&&t.texStorage2D(3553,D,we,W.width,W.height),t.texSubImage2D(3553,0,0,0,W.width,W.height,Ae,Me,W.data)):t.texImage2D(3553,0,we,W.width,W.height,0,Ae,Me,W.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){$e&&ct&&t.texStorage3D(35866,D,we,Ie[0].width,Ie[0].height,W.depth);for(let j=0,ue=Ie.length;j<ue;j++)ye=Ie[j],_.format!==cn?Ae!==null?$e?t.compressedTexSubImage3D(35866,j,0,0,0,ye.width,ye.height,W.depth,Ae,ye.data,0,0):t.compressedTexImage3D(35866,j,we,ye.width,ye.height,W.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(35866,j,0,0,0,ye.width,ye.height,W.depth,Ae,Me,ye.data):t.texImage3D(35866,j,we,ye.width,ye.height,W.depth,0,Ae,Me,ye.data)}else{$e&&ct&&t.texStorage2D(3553,D,we,Ie[0].width,Ie[0].height);for(let j=0,ue=Ie.length;j<ue;j++)ye=Ie[j],_.format!==cn?Ae!==null?$e?t.compressedTexSubImage2D(3553,j,0,0,ye.width,ye.height,Ae,ye.data):t.compressedTexImage2D(3553,j,we,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(3553,j,0,0,ye.width,ye.height,Ae,Me,ye.data):t.texImage2D(3553,j,we,ye.width,ye.height,0,Ae,Me,ye.data)}else if(_.isDataArrayTexture)$e?(ct&&t.texStorage3D(35866,D,we,W.width,W.height,W.depth),t.texSubImage3D(35866,0,0,0,0,W.width,W.height,W.depth,Ae,Me,W.data)):t.texImage3D(35866,0,we,W.width,W.height,W.depth,0,Ae,Me,W.data);else if(_.isData3DTexture)$e?(ct&&t.texStorage3D(32879,D,we,W.width,W.height,W.depth),t.texSubImage3D(32879,0,0,0,0,W.width,W.height,W.depth,Ae,Me,W.data)):t.texImage3D(32879,0,we,W.width,W.height,W.depth,0,Ae,Me,W.data);else if(_.isFramebufferTexture){if(ct)if($e)t.texStorage2D(3553,D,we,W.width,W.height);else{let j=W.width,ue=W.height;for(let be=0;be<D;be++)t.texImage2D(3553,be,we,j,ue,0,Ae,Me,null),j>>=1,ue>>=1}}else if(Ie.length>0&&Ce){$e&&ct&&t.texStorage2D(3553,D,we,Ie[0].width,Ie[0].height);for(let j=0,ue=Ie.length;j<ue;j++)ye=Ie[j],$e?t.texSubImage2D(3553,j,0,0,Ae,Me,ye):t.texImage2D(3553,j,we,Ae,Me,ye);_.generateMipmaps=!1}else $e?(ct&&t.texStorage2D(3553,D,we,W.width,W.height),t.texSubImage2D(3553,0,0,0,Ae,Me,W)):t.texImage2D(3553,0,we,Ae,Me,W);P(_,Ce)&&I(H),_e.__version=oe.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ge(b,_,L){if(_.image.length!==6)return;const H=Pe(b,_),Y=_.source;t.bindTexture(34067,b.__webglTexture,33984+L);const oe=i.get(Y);if(Y.version!==oe.__version||H===!0){t.activeTexture(33984+L),n.pixelStorei(37440,_.flipY),n.pixelStorei(37441,_.premultiplyAlpha),n.pixelStorei(3317,_.unpackAlignment),n.pixelStorei(37443,0);const _e=_.isCompressedTexture||_.image[0].isCompressedTexture,fe=_.image[0]&&_.image[0].isDataTexture,W=[];for(let j=0;j<6;j++)!_e&&!fe?W[j]=y(_.image[j],!1,!0,l):W[j]=fe?_.image[j].image:_.image[j],W[j]=ie(_,W[j]);const Ce=W[0],Ae=C(Ce)||a,Me=s.convert(_.format,_.encoding),we=s.convert(_.type),ye=x(_.internalFormat,Me,we,_.encoding),Ie=a&&_.isVideoTexture!==!0,$e=oe.__version===void 0||H===!0;let ct=w(_,Ce,Ae);N(34067,_,Ae);let D;if(_e){Ie&&$e&&t.texStorage2D(34067,ct,ye,Ce.width,Ce.height);for(let j=0;j<6;j++){D=W[j].mipmaps;for(let ue=0;ue<D.length;ue++){const be=D[ue];_.format!==cn?Me!==null?Ie?t.compressedTexSubImage2D(34069+j,ue,0,0,be.width,be.height,Me,be.data):t.compressedTexImage2D(34069+j,ue,ye,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?t.texSubImage2D(34069+j,ue,0,0,be.width,be.height,Me,we,be.data):t.texImage2D(34069+j,ue,ye,be.width,be.height,0,Me,we,be.data)}}}else{D=_.mipmaps,Ie&&$e&&(D.length>0&&ct++,t.texStorage2D(34067,ct,ye,W[0].width,W[0].height));for(let j=0;j<6;j++)if(fe){Ie?t.texSubImage2D(34069+j,0,0,0,W[j].width,W[j].height,Me,we,W[j].data):t.texImage2D(34069+j,0,ye,W[j].width,W[j].height,0,Me,we,W[j].data);for(let ue=0;ue<D.length;ue++){const Ee=D[ue].image[j].image;Ie?t.texSubImage2D(34069+j,ue+1,0,0,Ee.width,Ee.height,Me,we,Ee.data):t.texImage2D(34069+j,ue+1,ye,Ee.width,Ee.height,0,Me,we,Ee.data)}}else{Ie?t.texSubImage2D(34069+j,0,0,0,Me,we,W[j]):t.texImage2D(34069+j,0,ye,Me,we,W[j]);for(let ue=0;ue<D.length;ue++){const be=D[ue];Ie?t.texSubImage2D(34069+j,ue+1,0,0,Me,we,be.image[j]):t.texImage2D(34069+j,ue+1,ye,Me,we,be.image[j])}}}P(_,Ae)&&I(34067),oe.__version=Y.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function ve(b,_,L,H,Y){const oe=s.convert(L.format,L.encoding),_e=s.convert(L.type),fe=x(L.internalFormat,oe,_e,L.encoding);i.get(_).__hasExternalTextures||(Y===32879||Y===35866?t.texImage3D(Y,0,fe,_.width,_.height,_.depth,0,oe,_e,null):t.texImage2D(Y,0,fe,_.width,_.height,0,oe,_e,null)),t.bindFramebuffer(36160,b),Z(_)?d.framebufferTexture2DMultisampleEXT(36160,H,Y,i.get(L).__webglTexture,0,le(_)):(Y===3553||Y>=34069&&Y<=34074)&&n.framebufferTexture2D(36160,H,Y,i.get(L).__webglTexture,0),t.bindFramebuffer(36160,null)}function He(b,_,L){if(n.bindRenderbuffer(36161,b),_.depthBuffer&&!_.stencilBuffer){let H=33189;if(L||Z(_)){const Y=_.depthTexture;Y&&Y.isDepthTexture&&(Y.type===xi?H=36012:Y.type===vi&&(H=33190));const oe=le(_);Z(_)?d.renderbufferStorageMultisampleEXT(36161,oe,H,_.width,_.height):n.renderbufferStorageMultisample(36161,oe,H,_.width,_.height)}else n.renderbufferStorage(36161,H,_.width,_.height);n.framebufferRenderbuffer(36160,36096,36161,b)}else if(_.depthBuffer&&_.stencilBuffer){const H=le(_);L&&Z(_)===!1?n.renderbufferStorageMultisample(36161,H,35056,_.width,_.height):Z(_)?d.renderbufferStorageMultisampleEXT(36161,H,35056,_.width,_.height):n.renderbufferStorage(36161,34041,_.width,_.height),n.framebufferRenderbuffer(36160,33306,36161,b)}else{const H=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let Y=0;Y<H.length;Y++){const oe=H[Y],_e=s.convert(oe.format,oe.encoding),fe=s.convert(oe.type),W=x(oe.internalFormat,_e,fe,oe.encoding),Ce=le(_);L&&Z(_)===!1?n.renderbufferStorageMultisample(36161,Ce,W,_.width,_.height):Z(_)?d.renderbufferStorageMultisampleEXT(36161,Ce,W,_.width,_.height):n.renderbufferStorage(36161,W,_.width,_.height)}}n.bindRenderbuffer(36161,null)}function E(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),ce(_.depthTexture,0);const H=i.get(_.depthTexture).__webglTexture,Y=le(_);if(_.depthTexture.format===Si)Z(_)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,H,0,Y):n.framebufferTexture2D(36160,36096,3553,H,0);else if(_.depthTexture.format===nr)Z(_)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,H,0,Y):n.framebufferTexture2D(36160,33306,3553,H,0);else throw new Error("Unknown depthTexture format")}function R(b){const _=i.get(b),L=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");E(_.__webglFramebuffer,b)}else if(L){_.__webglDepthbuffer=[];for(let H=0;H<6;H++)t.bindFramebuffer(36160,_.__webglFramebuffer[H]),_.__webglDepthbuffer[H]=n.createRenderbuffer(),He(_.__webglDepthbuffer[H],b,!1)}else t.bindFramebuffer(36160,_.__webglFramebuffer),_.__webglDepthbuffer=n.createRenderbuffer(),He(_.__webglDepthbuffer,b,!1);t.bindFramebuffer(36160,null)}function V(b,_,L){const H=i.get(b);_!==void 0&&ve(H.__webglFramebuffer,b,b.texture,36064,3553),L!==void 0&&R(b)}function ee(b){const _=b.texture,L=i.get(b),H=i.get(_);b.addEventListener("dispose",re),b.isWebGLMultipleRenderTargets!==!0&&(H.__webglTexture===void 0&&(H.__webglTexture=n.createTexture()),H.__version=_.version,o.memory.textures++);const Y=b.isWebGLCubeRenderTarget===!0,oe=b.isWebGLMultipleRenderTargets===!0,_e=C(b)||a;if(Y){L.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)L.__webglFramebuffer[fe]=n.createFramebuffer()}else{if(L.__webglFramebuffer=n.createFramebuffer(),oe)if(r.drawBuffers){const fe=b.texture;for(let W=0,Ce=fe.length;W<Ce;W++){const Ae=i.get(fe[W]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&Z(b)===!1){const fe=oe?_:[_];L.__webglMultisampledFramebuffer=n.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer);for(let W=0;W<fe.length;W++){const Ce=fe[W];L.__webglColorRenderbuffer[W]=n.createRenderbuffer(),n.bindRenderbuffer(36161,L.__webglColorRenderbuffer[W]);const Ae=s.convert(Ce.format,Ce.encoding),Me=s.convert(Ce.type),we=x(Ce.internalFormat,Ae,Me,Ce.encoding,b.isXRRenderTarget===!0),ye=le(b);n.renderbufferStorageMultisample(36161,ye,we,b.width,b.height),n.framebufferRenderbuffer(36160,36064+W,36161,L.__webglColorRenderbuffer[W])}n.bindRenderbuffer(36161,null),b.depthBuffer&&(L.__webglDepthRenderbuffer=n.createRenderbuffer(),He(L.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(36160,null)}}if(Y){t.bindTexture(34067,H.__webglTexture),N(34067,_,_e);for(let fe=0;fe<6;fe++)ve(L.__webglFramebuffer[fe],b,_,36064,34069+fe);P(_,_e)&&I(34067),t.unbindTexture()}else if(oe){const fe=b.texture;for(let W=0,Ce=fe.length;W<Ce;W++){const Ae=fe[W],Me=i.get(Ae);t.bindTexture(3553,Me.__webglTexture),N(3553,Ae,_e),ve(L.__webglFramebuffer,b,Ae,36064+W,3553),P(Ae,_e)&&I(3553)}t.unbindTexture()}else{let fe=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?fe=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,H.__webglTexture),N(fe,_,_e),ve(L.__webglFramebuffer,b,_,36064,fe),P(_,_e)&&I(fe),t.unbindTexture()}b.depthBuffer&&R(b)}function X(b){const _=C(b)||a,L=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let H=0,Y=L.length;H<Y;H++){const oe=L[H];if(P(oe,_)){const _e=b.isWebGLCubeRenderTarget?34067:3553,fe=i.get(oe).__webglTexture;t.bindTexture(_e,fe),I(_e),t.unbindTexture()}}}function se(b){if(a&&b.samples>0&&Z(b)===!1){const _=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],L=b.width,H=b.height;let Y=16384;const oe=[],_e=b.stencilBuffer?33306:36096,fe=i.get(b),W=b.isWebGLMultipleRenderTargets===!0;if(W)for(let Ce=0;Ce<_.length;Ce++)t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ce,36161,null),t.bindFramebuffer(36160,fe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ce,3553,null,0);t.bindFramebuffer(36008,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,fe.__webglFramebuffer);for(let Ce=0;Ce<_.length;Ce++){oe.push(36064+Ce),b.depthBuffer&&oe.push(_e);const Ae=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Ae===!1&&(b.depthBuffer&&(Y|=256),b.stencilBuffer&&(Y|=1024)),W&&n.framebufferRenderbuffer(36008,36064,36161,fe.__webglColorRenderbuffer[Ce]),Ae===!0&&(n.invalidateFramebuffer(36008,[_e]),n.invalidateFramebuffer(36009,[_e])),W){const Me=i.get(_[Ce]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Me,0)}n.blitFramebuffer(0,0,L,H,0,0,L,H,Y,9728),p&&n.invalidateFramebuffer(36008,oe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),W)for(let Ce=0;Ce<_.length;Ce++){t.bindFramebuffer(36160,fe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Ce,36161,fe.__webglColorRenderbuffer[Ce]);const Ae=i.get(_[Ce]).__webglTexture;t.bindFramebuffer(36160,fe.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Ce,3553,Ae,0)}t.bindFramebuffer(36009,fe.__webglMultisampledFramebuffer)}}function le(b){return Math.min(f,b.samples)}function Z(b){const _=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function de(b){const _=o.render.frame;g.get(b)!==_&&(g.set(b,_),b.update())}function ie(b,_){const L=b.encoding,H=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Ba||L!==Ci&&(L===Je?a===!1?e.has("EXT_sRGB")===!0&&H===cn?(b.format=Ba,b.minFilter=Ot,b.generateMipmaps=!1):_=Rd.sRGBToLinear(_):(H!==cn||Y!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",L)),_}this.allocateTextureUnit=B,this.resetTextureUnits=$,this.setTexture2D=ce,this.setTexture2DArray=xe,this.setTexture3D=z,this.setTextureCube=te,this.rebindTextures=V,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=R,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Z}function $y(n,e,t){const i=t.isWebGL2;function r(s,o=null){let a;if(s===Ti)return 5121;if(s===zg)return 32819;if(s===Gg)return 32820;if(s===Ng)return 5120;if(s===Ug)return 5122;if(s===Td)return 5123;if(s===Bg)return 5124;if(s===vi)return 5125;if(s===xi)return 5126;if(s===Wr)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Vg)return 6406;if(s===cn)return 6408;if(s===Hg)return 6409;if(s===Wg)return 6410;if(s===Si)return 6402;if(s===nr)return 34041;if(s===Ba)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===jg)return 6403;if(s===qg)return 36244;if(s===Xg)return 33319;if(s===$g)return 33320;if(s===Yg)return 36249;if(s===ko||s===Oo||s===Fo||s===No)if(o===Je)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ko)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Fo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===No)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ko)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oo)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Fo)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===No)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===wl||s===Rl||s===Al||s===Pl)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===wl)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Rl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Al)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kg)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Dl||s===Ll)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Dl)return o===Je?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Ll)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Il||s===kl||s===Ol||s===Fl||s===Nl||s===Ul||s===Bl||s===zl||s===Gl||s===Vl||s===Hl||s===Wl||s===jl||s===ql)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Il)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kl)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ol)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fl)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nl)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ul)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bl)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zl)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gl)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vl)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hl)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wl)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===jl)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ql)return o===Je?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Uo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Uo)return o===Je?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Jg||s===Xl||s===$l||s===Yl)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Uo)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Xl)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===$l)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ki?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Yy extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ws extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ky={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ws,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ws,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ws,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const h of e.hand.values()){const m=t.getJointPose(h,i),v=this._getHandJoint(l,h);m!==null&&(v.matrix.fromArray(m.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=m.radius),v.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,g=.005;l.inputState.pinching&&d>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ky)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ws;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Jy extends Ft{constructor(e,t,i,r,s,o,a,c,l,u){if(u=u!==void 0?u:Si,u!==Si&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Si&&(i=vi),i===void 0&&u===nr&&(i=Ki),super(null,r,s,o,a,c,u,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=c!==void 0?c:Dt,this.flipY=!1,this.generateMipmaps=!1}}class Zy extends lr{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,g=null;const h=t.getContextAttributes();let m=null,v=null;const S=[],y=[],C=new Set,M=new Map,P=new Jt;P.layers.enable(1),P.viewport=new _t;const I=new Jt;I.layers.enable(2),I.viewport=new _t;const x=[P,I],w=new Yy;w.layers.enable(1),w.layers.enable(2);let A=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let te=S[z];return te===void 0&&(te=new fa,S[z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(z){let te=S[z];return te===void 0&&(te=new fa,S[z]=te),te.getGripSpace()},this.getHand=function(z){let te=S[z];return te===void 0&&(te=new fa,S[z]=te),te.getHandSpace()};function re(z){const te=y.indexOf(z.inputSource);if(te===-1)return;const he=S[te];he!==void 0&&he.dispatchEvent({type:z.type,data:z.inputSource})}function F(){r.removeEventListener("select",re),r.removeEventListener("selectstart",re),r.removeEventListener("selectend",re),r.removeEventListener("squeeze",re),r.removeEventListener("squeezestart",re),r.removeEventListener("squeezeend",re),r.removeEventListener("end",F),r.removeEventListener("inputsourceschange",k);for(let z=0;z<S.length;z++){const te=y[z];te!==null&&(y[z]=null,S[z].disconnect(te))}A=null,Q=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,v=null,xe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(z){l=z},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",re),r.addEventListener("selectstart",re),r.addEventListener("selectend",re),r.addEventListener("squeeze",re),r.addEventListener("squeezestart",re),r.addEventListener("squeezeend",re),r.addEventListener("end",F),r.addEventListener("inputsourceschange",k),h.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const te={antialias:r.renderState.layers===void 0?h.antialias:!0,alpha:h.alpha,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,te),r.updateRenderState({baseLayer:p}),v=new Ei(p.framebufferWidth,p.framebufferHeight,{format:cn,type:Ti,encoding:e.outputEncoding,stencilBuffer:h.stencil})}else{let te=null,he=null,pe=null;h.depth&&(pe=h.stencil?35056:33190,te=h.stencil?nr:Si,he=h.stencil?Ki:vi);const N={colorFormat:32856,depthFormat:pe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(N),r.updateRenderState({layers:[d]}),v=new Ei(d.textureWidth,d.textureHeight,{format:cn,type:Ti,depthTexture:new Jy(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:h.stencil,encoding:e.outputEncoding,samples:h.antialias?4:0});const Pe=e.properties.get(v);Pe.__ignoreDepthValues=d.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),xe.setContext(r),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function k(z){for(let te=0;te<z.removed.length;te++){const he=z.removed[te],pe=y.indexOf(he);pe>=0&&(y[pe]=null,S[pe].disconnect(he))}for(let te=0;te<z.added.length;te++){const he=z.added[te];let pe=y.indexOf(he);if(pe===-1){for(let Pe=0;Pe<S.length;Pe++)if(Pe>=y.length){y.push(he),pe=Pe;break}else if(y[Pe]===null){y[Pe]=he,pe=Pe;break}if(pe===-1)break}const N=S[pe];N&&N.connect(he)}}const J=new G,ne=new G;function $(z,te,he){J.setFromMatrixPosition(te.matrixWorld),ne.setFromMatrixPosition(he.matrixWorld);const pe=J.distanceTo(ne),N=te.projectionMatrix.elements,Pe=he.projectionMatrix.elements,Te=N[14]/(N[10]-1),ge=N[14]/(N[10]+1),ve=(N[9]+1)/N[5],He=(N[9]-1)/N[5],E=(N[8]-1)/N[0],R=(Pe[8]+1)/Pe[0],V=Te*E,ee=Te*R,X=pe/(-E+R),se=X*-E;te.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(se),z.translateZ(X),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert();const le=Te+X,Z=ge+X,de=V-se,ie=ee+(pe-se),b=ve*ge/Z*le,_=He*ge/Z*le;z.projectionMatrix.makePerspective(de,ie,b,_,le,Z)}function B(z,te){te===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(te.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;w.near=I.near=P.near=z.near,w.far=I.far=P.far=z.far,(A!==w.near||Q!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),A=w.near,Q=w.far);const te=z.parent,he=w.cameras;B(w,te);for(let N=0;N<he.length;N++)B(he[N],te);w.matrixWorld.decompose(w.position,w.quaternion,w.scale),z.matrix.copy(w.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale);const pe=z.children;for(let N=0,Pe=pe.length;N<Pe;N++)pe[N].updateMatrixWorld(!0);he.length===2?$(w,P,I):w.projectionMatrix.copy(P.projectionMatrix)},this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(z){c=z,d!==null&&(d.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.getPlanes=function(){return C};let ae=null;function ce(z,te){if(u=te.getViewerPose(l||o),g=te,u!==null){const he=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let pe=!1;he.length!==w.cameras.length&&(w.cameras.length=0,pe=!0);for(let N=0;N<he.length;N++){const Pe=he[N];let Te=null;if(p!==null)Te=p.getViewport(Pe);else{const ve=f.getViewSubImage(d,Pe);Te=ve.viewport,N===0&&(e.setRenderTargetTextures(v,ve.colorTexture,d.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(v))}let ge=x[N];ge===void 0&&(ge=new Jt,ge.layers.enable(N),ge.viewport=new _t,x[N]=ge),ge.matrix.fromArray(Pe.transform.matrix),ge.projectionMatrix.fromArray(Pe.projectionMatrix),ge.viewport.set(Te.x,Te.y,Te.width,Te.height),N===0&&w.matrix.copy(ge.matrix),pe===!0&&w.cameras.push(ge)}}for(let he=0;he<S.length;he++){const pe=y[he],N=S[he];pe!==null&&N!==void 0&&N.update(pe,te,l||o)}if(ae&&ae(z,te),te.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:te.detectedPlanes});let he=null;for(const pe of C)te.detectedPlanes.has(pe)||(he===null&&(he=[]),he.push(pe));if(he!==null)for(const pe of he)C.delete(pe),M.delete(pe),i.dispatchEvent({type:"planeremoved",data:pe});for(const pe of te.detectedPlanes)if(!C.has(pe))C.add(pe),M.set(pe,te.lastChangedTime),i.dispatchEvent({type:"planeadded",data:pe});else{const N=M.get(pe);pe.lastChangedTime>N&&(M.set(pe,pe.lastChangedTime),i.dispatchEvent({type:"planechanged",data:pe}))}}g=null}const xe=new Bd;xe.setAnimationLoop(ce),this.setAnimationLoop=function(z){ae=z},this.dispose=function(){}}}function Qy(n,e){function t(h,m){m.color.getRGB(h.fogColor.value,Od(n)),m.isFog?(h.fogNear.value=m.near,h.fogFar.value=m.far):m.isFogExp2&&(h.fogDensity.value=m.density)}function i(h,m,v,S,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(h,m):m.isMeshToonMaterial?(r(h,m),u(h,m)):m.isMeshPhongMaterial?(r(h,m),l(h,m)):m.isMeshStandardMaterial?(r(h,m),f(h,m),m.isMeshPhysicalMaterial&&d(h,m,y)):m.isMeshMatcapMaterial?(r(h,m),p(h,m)):m.isMeshDepthMaterial?r(h,m):m.isMeshDistanceMaterial?(r(h,m),g(h,m)):m.isMeshNormalMaterial?r(h,m):m.isLineBasicMaterial?(s(h,m),m.isLineDashedMaterial&&o(h,m)):m.isPointsMaterial?a(h,m,v,S):m.isSpriteMaterial?c(h,m):m.isShadowMaterial?(h.color.value.copy(m.color),h.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(h,m){h.opacity.value=m.opacity,m.color&&h.diffuse.value.copy(m.color),m.emissive&&h.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.bumpMap&&(h.bumpMap.value=m.bumpMap,h.bumpScale.value=m.bumpScale,m.side===jt&&(h.bumpScale.value*=-1)),m.displacementMap&&(h.displacementMap.value=m.displacementMap,h.displacementScale.value=m.displacementScale,h.displacementBias.value=m.displacementBias),m.emissiveMap&&(h.emissiveMap.value=m.emissiveMap),m.normalMap&&(h.normalMap.value=m.normalMap,h.normalScale.value.copy(m.normalScale),m.side===jt&&h.normalScale.value.negate()),m.specularMap&&(h.specularMap.value=m.specularMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);const v=e.get(m).envMap;if(v&&(h.envMap.value=v,h.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.reflectivity.value=m.reflectivity,h.ior.value=m.ior,h.refractionRatio.value=m.refractionRatio),m.lightMap){h.lightMap.value=m.lightMap;const C=n.physicallyCorrectLights!==!0?Math.PI:1;h.lightMapIntensity.value=m.lightMapIntensity*C}m.aoMap&&(h.aoMap.value=m.aoMap,h.aoMapIntensity.value=m.aoMapIntensity);let S;m.map?S=m.map:m.specularMap?S=m.specularMap:m.displacementMap?S=m.displacementMap:m.normalMap?S=m.normalMap:m.bumpMap?S=m.bumpMap:m.roughnessMap?S=m.roughnessMap:m.metalnessMap?S=m.metalnessMap:m.alphaMap?S=m.alphaMap:m.emissiveMap?S=m.emissiveMap:m.clearcoatMap?S=m.clearcoatMap:m.clearcoatNormalMap?S=m.clearcoatNormalMap:m.clearcoatRoughnessMap?S=m.clearcoatRoughnessMap:m.iridescenceMap?S=m.iridescenceMap:m.iridescenceThicknessMap?S=m.iridescenceThicknessMap:m.specularIntensityMap?S=m.specularIntensityMap:m.specularColorMap?S=m.specularColorMap:m.transmissionMap?S=m.transmissionMap:m.thicknessMap?S=m.thicknessMap:m.sheenColorMap?S=m.sheenColorMap:m.sheenRoughnessMap&&(S=m.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),h.uvTransform.value.copy(S.matrix));let y;m.aoMap?y=m.aoMap:m.lightMap&&(y=m.lightMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),h.uv2Transform.value.copy(y.matrix))}function s(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity}function o(h,m){h.dashSize.value=m.dashSize,h.totalSize.value=m.dashSize+m.gapSize,h.scale.value=m.scale}function a(h,m,v,S){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.size.value=m.size*v,h.scale.value=S*.5,m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let y;m.map?y=m.map:m.alphaMap&&(y=m.alphaMap),y!==void 0&&(y.matrixAutoUpdate===!0&&y.updateMatrix(),h.uvTransform.value.copy(y.matrix))}function c(h,m){h.diffuse.value.copy(m.color),h.opacity.value=m.opacity,h.rotation.value=m.rotation,m.map&&(h.map.value=m.map),m.alphaMap&&(h.alphaMap.value=m.alphaMap),m.alphaTest>0&&(h.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),h.uvTransform.value.copy(v.matrix))}function l(h,m){h.specular.value.copy(m.specular),h.shininess.value=Math.max(m.shininess,1e-4)}function u(h,m){m.gradientMap&&(h.gradientMap.value=m.gradientMap)}function f(h,m){h.roughness.value=m.roughness,h.metalness.value=m.metalness,m.roughnessMap&&(h.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(h.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(h.envMapIntensity.value=m.envMapIntensity)}function d(h,m,v){h.ior.value=m.ior,m.sheen>0&&(h.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),h.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(h.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(h.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(h.clearcoat.value=m.clearcoat,h.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(h.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(h.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(h.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),h.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===jt&&h.clearcoatNormalScale.value.negate())),m.iridescence>0&&(h.iridescence.value=m.iridescence,h.iridescenceIOR.value=m.iridescenceIOR,h.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],h.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(h.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(h.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(h.transmission.value=m.transmission,h.transmissionSamplerMap.value=v.texture,h.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(h.transmissionMap.value=m.transmissionMap),h.thickness.value=m.thickness,m.thicknessMap&&(h.thicknessMap.value=m.thicknessMap),h.attenuationDistance.value=m.attenuationDistance,h.attenuationColor.value.copy(m.attenuationColor)),h.specularIntensity.value=m.specularIntensity,h.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(h.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(h.specularColorMap.value=m.specularColorMap)}function p(h,m){m.matcap&&(h.matcap.value=m.matcap)}function g(h,m){h.referencePosition.value.copy(m.referencePosition),h.nearDistance.value=m.nearDistance,h.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function eb(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(35375):0;function c(S,y){const C=y.program;i.uniformBlockBinding(S,C)}function l(S,y){let C=r[S.id];C===void 0&&(g(S),C=u(S),r[S.id]=C,S.addEventListener("dispose",m));const M=y.program;i.updateUBOMapping(S,M);const P=e.render.frame;s[S.id]!==P&&(d(S),s[S.id]=P)}function u(S){const y=f();S.__bindingPointIndex=y;const C=n.createBuffer(),M=S.__size,P=S.usage;return n.bindBuffer(35345,C),n.bufferData(35345,M,P),n.bindBuffer(35345,null),n.bindBufferBase(35345,y,C),C}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=r[S.id],C=S.uniforms,M=S.__cache;n.bindBuffer(35345,y);for(let P=0,I=C.length;P<I;P++){const x=C[P];if(p(x,P,M)===!0){const w=x.__offset,A=Array.isArray(x.value)?x.value:[x.value];let Q=0;for(let re=0;re<A.length;re++){const F=A[re],k=h(F);typeof F=="number"?(x.__data[0]=F,n.bufferSubData(35345,w+Q,x.__data)):F.isMatrix3?(x.__data[0]=F.elements[0],x.__data[1]=F.elements[1],x.__data[2]=F.elements[2],x.__data[3]=F.elements[0],x.__data[4]=F.elements[3],x.__data[5]=F.elements[4],x.__data[6]=F.elements[5],x.__data[7]=F.elements[0],x.__data[8]=F.elements[6],x.__data[9]=F.elements[7],x.__data[10]=F.elements[8],x.__data[11]=F.elements[0]):(F.toArray(x.__data,Q),Q+=k.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,w,x.__data)}}n.bindBuffer(35345,null)}function p(S,y,C){const M=S.value;if(C[y]===void 0){if(typeof M=="number")C[y]=M;else{const P=Array.isArray(M)?M:[M],I=[];for(let x=0;x<P.length;x++)I.push(P[x].clone());C[y]=I}return!0}else if(typeof M=="number"){if(C[y]!==M)return C[y]=M,!0}else{const P=Array.isArray(C[y])?C[y]:[C[y]],I=Array.isArray(M)?M:[M];for(let x=0;x<P.length;x++){const w=P[x];if(w.equals(I[x])===!1)return w.copy(I[x]),!0}}return!1}function g(S){const y=S.uniforms;let C=0;const M=16;let P=0;for(let I=0,x=y.length;I<x;I++){const w=y[I],A={boundary:0,storage:0},Q=Array.isArray(w.value)?w.value:[w.value];for(let re=0,F=Q.length;re<F;re++){const k=Q[re],J=h(k);A.boundary+=J.boundary,A.storage+=J.storage}if(w.__data=new Float32Array(A.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=C,I>0){P=C%M;const re=M-P;P!==0&&re-A.boundary<0&&(C+=M-P,w.__offset=C)}C+=A.storage}return P=C%M,P>0&&(C+=M-P),S.__size=C,S.__cache={},this}function h(S){const y={boundary:0,storage:0};return typeof S=="number"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const C=o.indexOf(y.__bindingPointIndex);o.splice(C,1),n.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function v(){for(const S in r)n.deleteBuffer(r[S]);o=[],r={},s={}}return{bind:c,update:l,dispose:v}}function tb(){const n=Zs("canvas");return n.style.display="block",n}function Wd(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:tb(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,o=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,a=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,c=n.powerPreference!==void 0?n.powerPreference:"default",l=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,d=null;const p=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Ci,this.physicallyCorrectLights=!1,this.toneMapping=On,this.toneMappingExposure=1;const h=this;let m=!1,v=0,S=0,y=null,C=-1,M=null;const P=new _t,I=new _t;let x=null,w=e.width,A=e.height,Q=1,re=null,F=null;const k=new _t(0,0,w,A),J=new _t(0,0,w,A);let ne=!1;const $=new Ud;let B=!1,ae=!1,ce=null;const xe=new ht,z=new Ke,te=new G,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function pe(){return y===null?Q:1}let N=t;function Pe(T,U){for(let q=0;q<T.length;q++){const O=T[q],K=e.getContext(O,U);if(K!==null)return K}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${dc}`),e.addEventListener("webglcontextlost",we,!1),e.addEventListener("webglcontextrestored",ye,!1),e.addEventListener("webglcontextcreationerror",Ie,!1),N===null){const U=["webgl2","webgl","experimental-webgl"];if(h.isWebGL1Renderer===!0&&U.shift(),N=Pe(U,T),N===null)throw Pe(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}N.getShaderPrecisionFormat===void 0&&(N.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Te,ge,ve,He,E,R,V,ee,X,se,le,Z,de,ie,b,_,L,H,Y,oe,_e,fe,W,Ce;function Ae(){Te=new dx(N),ge=new sx(N,Te,n),Te.init(ge),fe=new $y(N,Te,ge),ve=new qy(N,Te,ge),He=new mx,E=new Ly,R=new Xy(N,Te,ve,E,ge,fe,He),V=new ax(h),ee=new fx(h),X=new M_(N,ge),W=new ix(N,Te,X,ge),se=new hx(N,X,He,W),le=new xx(N,se,X,He),Y=new vx(N,ge,R),_=new ox(E),Z=new Dy(h,V,ee,Te,ge,W,_),de=new Qy(h,E),ie=new ky,b=new zy(Te,ge),H=new nx(h,V,ee,ve,le,u,o),L=new jy(h,le,ge),Ce=new eb(N,He,ge,ve),oe=new rx(N,Te,He,ge),_e=new px(N,Te,He,ge),He.programs=Z.programs,h.capabilities=ge,h.extensions=Te,h.properties=E,h.renderLists=ie,h.shadowMap=L,h.state=ve,h.info=He}Ae();const Me=new Zy(h,N);this.xr=Me,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const T=Te.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Te.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(T){T!==void 0&&(Q=T,this.setSize(w,A,!1))},this.getSize=function(T){return T.set(w,A)},this.setSize=function(T,U,q){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=T,A=U,e.width=Math.floor(T*Q),e.height=Math.floor(U*Q),q!==!1&&(e.style.width=T+"px",e.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(w*Q,A*Q).floor()},this.setDrawingBufferSize=function(T,U,q){w=T,A=U,Q=q,e.width=Math.floor(T*q),e.height=Math.floor(U*q),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(k)},this.setViewport=function(T,U,q,O){T.isVector4?k.set(T.x,T.y,T.z,T.w):k.set(T,U,q,O),ve.viewport(P.copy(k).multiplyScalar(Q).floor())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,U,q,O){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,U,q,O),ve.scissor(I.copy(J).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(T){ve.setScissorTest(ne=T)},this.setOpaqueSort=function(T){re=T},this.setTransparentSort=function(T){F=T},this.getClearColor=function(T){return T.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor.apply(H,arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha.apply(H,arguments)},this.clear=function(T=!0,U=!0,q=!0){let O=0;T&&(O|=16384),U&&(O|=256),q&&(O|=1024),N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",we,!1),e.removeEventListener("webglcontextrestored",ye,!1),e.removeEventListener("webglcontextcreationerror",Ie,!1),ie.dispose(),b.dispose(),E.dispose(),V.dispose(),ee.dispose(),le.dispose(),W.dispose(),Ce.dispose(),Z.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",be),Me.removeEventListener("sessionend",Ee),ce&&(ce.dispose(),ce=null),qe.stop()};function we(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=He.autoReset,U=L.enabled,q=L.autoUpdate,O=L.needsUpdate,K=L.type;Ae(),He.autoReset=T,L.enabled=U,L.autoUpdate=q,L.needsUpdate=O,L.type=K}function Ie(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function $e(T){const U=T.target;U.removeEventListener("dispose",$e),ct(U)}function ct(T){D(T),E.remove(T)}function D(T){const U=E.get(T).programs;U!==void 0&&(U.forEach(function(q){Z.releaseProgram(q)}),T.isShaderMaterial&&Z.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,q,O,K,Re){U===null&&(U=he);const ke=K.isMesh&&K.matrixWorld.determinant()<0,Ne=qd(T,U,q,O,K);ve.setMaterial(O,ke);let Ue=q.index,We=1;O.wireframe===!0&&(Ue=se.getWireframeAttribute(q),We=2);const Be=q.drawRange,ze=q.attributes.position;let nt=Be.start*We,Ut=(Be.start+Be.count)*We;Re!==null&&(nt=Math.max(nt,Re.start*We),Ut=Math.min(Ut,(Re.start+Re.count)*We)),Ue!==null?(nt=Math.max(nt,0),Ut=Math.min(Ut,Ue.count)):ze!=null&&(nt=Math.max(nt,0),Ut=Math.min(Ut,ze.count));const Mn=Ut-nt;if(Mn<0||Mn===1/0)return;W.setup(K,O,Ne,q,Ue);let Qn,it=oe;if(Ue!==null&&(Qn=X.get(Ue),it=_e,it.setIndex(Qn)),K.isMesh)O.wireframe===!0?(ve.setLineWidth(O.wireframeLinewidth*pe()),it.setMode(1)):it.setMode(4);else if(K.isLine){let Ge=O.linewidth;Ge===void 0&&(Ge=1),ve.setLineWidth(Ge*pe()),K.isLineSegments?it.setMode(1):K.isLineLoop?it.setMode(2):it.setMode(3)}else K.isPoints?it.setMode(0):K.isSprite&&it.setMode(4);if(K.isInstancedMesh)it.renderInstances(nt,Mn,K.count);else if(q.isInstancedBufferGeometry){const Ge=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_o=Math.min(q.instanceCount,Ge);it.renderInstances(nt,Mn,_o)}else it.render(nt,Mn)},this.compile=function(T,U){function q(O,K,Re){O.transparent===!0&&O.side===jn&&O.forceSinglePass===!1?(O.side=jt,O.needsUpdate=!0,$t(O,K,Re),O.side=Jn,O.needsUpdate=!0,$t(O,K,Re),O.side=jn):$t(O,K,Re)}d=b.get(T),d.init(),g.push(d),T.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights(h.physicallyCorrectLights),T.traverse(function(O){const K=O.material;if(K)if(Array.isArray(K))for(let Re=0;Re<K.length;Re++){const ke=K[Re];q(ke,T,O)}else q(K,T,O)}),g.pop(),d=null};let j=null;function ue(T){j&&j(T)}function be(){qe.stop()}function Ee(){qe.start()}const qe=new Bd;qe.setAnimationLoop(ue),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(T){j=T,Me.setAnimationLoop(T),T===null?qe.stop():qe.start()},Me.addEventListener("sessionstart",be),Me.addEventListener("sessionend",Ee),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(U),U=Me.getCamera()),T.isScene===!0&&T.onBeforeRender(h,T,U,y),d=b.get(T,g.length),d.init(),g.push(d),xe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(xe),ae=this.localClippingEnabled,B=_.init(this.clippingPlanes,ae),f=ie.get(T,p.length),f.init(),p.push(f),lt(T,U,0,h.sortObjects),f.finish(),h.sortObjects===!0&&f.sort(re,F),B===!0&&_.beginShadows();const q=d.state.shadowsArray;if(L.render(q,T,U),B===!0&&_.endShadows(),this.info.autoReset===!0&&this.info.reset(),H.render(f,T),d.setupLights(h.physicallyCorrectLights),U.isArrayCamera){const O=U.cameras;for(let K=0,Re=O.length;K<Re;K++){const ke=O[K];yt(f,T,ke,ke.viewport)}}else yt(f,T,U);y!==null&&(R.updateMultisampleRenderTarget(y),R.updateRenderTargetMipmap(y)),T.isScene===!0&&T.onAfterRender(h,T,U),W.resetDefaultState(),C=-1,M=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,p.pop(),p.length>0?f=p[p.length-1]:f=null};function lt(T,U,q,O){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)d.pushLight(T),T.castShadow&&d.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||$.intersectsSprite(T)){O&&te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xe);const ke=le.update(T),Ne=T.material;Ne.visible&&f.push(T,ke,Ne,q,te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==He.render.frame&&(T.skeleton.update(),T.skeleton.frame=He.render.frame),!T.frustumCulled||$.intersectsObject(T))){O&&te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(xe);const ke=le.update(T),Ne=T.material;if(Array.isArray(Ne)){const Ue=ke.groups;for(let We=0,Be=Ue.length;We<Be;We++){const ze=Ue[We],nt=Ne[ze.materialIndex];nt&&nt.visible&&f.push(T,ke,nt,q,te.z,ze)}}else Ne.visible&&f.push(T,ke,Ne,q,te.z,null)}}const Re=T.children;for(let ke=0,Ne=Re.length;ke<Ne;ke++)lt(Re[ke],U,q,O)}function yt(T,U,q,O){const K=T.opaque,Re=T.transmissive,ke=T.transparent;d.setupLightsView(q),B===!0&&_.setGlobalState(h.clippingPlanes,q),Re.length>0&&Zn(K,U,q),O&&ve.viewport(P.copy(O)),K.length>0&&Qe(K,U,q),Re.length>0&&Qe(Re,U,q),ke.length>0&&Qe(ke,U,q),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Zn(T,U,q){const O=ge.isWebGL2;ce===null&&(ce=new Ei(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?Wr:Ti,minFilter:Hr,samples:O&&s===!0?4:0})),h.getDrawingBufferSize(z),O?ce.setSize(z.x,z.y):ce.setSize(za(z.x),za(z.y));const K=h.getRenderTarget();h.setRenderTarget(ce),h.clear();const Re=h.toneMapping;h.toneMapping=On,Qe(T,U,q),h.toneMapping=Re,R.updateMultisampleRenderTarget(ce),R.updateRenderTargetMipmap(ce),h.setRenderTarget(K)}function Qe(T,U,q){const O=U.isScene===!0?U.overrideMaterial:null;for(let K=0,Re=T.length;K<Re;K++){const ke=T[K],Ne=ke.object,Ue=ke.geometry,We=O===null?ke.material:O,Be=ke.group;Ne.layers.test(q.layers)&&Sn(Ne,U,q,Ue,We,Be)}}function Sn(T,U,q,O,K,Re){T.onBeforeRender(h,U,q,O,K,Re),T.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(h,U,q,O,T,Re),K.transparent===!0&&K.side===jn&&K.forceSinglePass===!1?(K.side=jt,K.needsUpdate=!0,h.renderBufferDirect(q,U,O,K,T,Re),K.side=Jn,K.needsUpdate=!0,h.renderBufferDirect(q,U,O,K,T,Re),K.side=jn):h.renderBufferDirect(q,U,O,K,T,Re),T.onAfterRender(h,U,q,O,K,Re)}function $t(T,U,q){U.isScene!==!0&&(U=he);const O=E.get(T),K=d.state.lights,Re=d.state.shadowsArray,ke=K.state.version,Ne=Z.getParameters(T,K.state,Re,U,q),Ue=Z.getProgramCacheKey(Ne);let We=O.programs;O.environment=T.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(T.isMeshStandardMaterial?ee:V).get(T.envMap||O.environment),We===void 0&&(T.addEventListener("dispose",$e),We=new Map,O.programs=We);let Be=We.get(Ue);if(Be!==void 0){if(O.currentProgram===Be&&O.lightsStateVersion===ke)return _c(T,Ne),Be}else Ne.uniforms=Z.getUniforms(T),T.onBuild(q,Ne,h),T.onBeforeCompile(Ne,h),Be=Z.acquireProgram(Ne,Ue),We.set(Ue,Be),O.uniforms=Ne.uniforms;const ze=O.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ze.clippingPlanes=_.uniform),_c(T,Ne),O.needsLights=$d(T),O.lightsStateVersion=ke,O.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMap.value=K.state.directionalShadowMap,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotShadowMap.value=K.state.spotShadowMap,ze.spotLightMatrix.value=K.state.spotLightMatrix,ze.spotLightMap.value=K.state.spotLightMap,ze.pointShadowMap.value=K.state.pointShadowMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix);const nt=Be.getUniforms(),Ut=zs.seqWithValue(nt.seq,ze);return O.currentProgram=Be,O.uniformsList=Ut,Be}function _c(T,U){const q=E.get(T);q.outputEncoding=U.outputEncoding,q.instancing=U.instancing,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function qd(T,U,q,O,K){U.isScene!==!0&&(U=he),R.resetTextureUnits();const Re=U.fog,ke=O.isMeshStandardMaterial?U.environment:null,Ne=y===null?h.outputEncoding:y.isXRRenderTarget===!0?y.texture.encoding:Ci,Ue=(O.isMeshStandardMaterial?ee:V).get(O.envMap||ke),We=O.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Be=!!O.normalMap&&!!q.attributes.tangent,ze=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,Ut=!!q.morphAttributes.color,Mn=O.toneMapped?h.toneMapping:On,Qn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,it=Qn!==void 0?Qn.length:0,Ge=E.get(O),_o=d.state.lights;if(B===!0&&(ae===!0||T!==M)){const Bt=T===M&&O.id===C;_.setState(O,T,Bt)}let ut=!1;O.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==_o.state.version||Ge.outputEncoding!==Ne||K.isInstancedMesh&&Ge.instancing===!1||!K.isInstancedMesh&&Ge.instancing===!0||K.isSkinnedMesh&&Ge.skinning===!1||!K.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Ue||O.fog===!0&&Ge.fog!==Re||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==_.numPlanes||Ge.numIntersection!==_.numIntersection)||Ge.vertexAlphas!==We||Ge.vertexTangents!==Be||Ge.morphTargets!==ze||Ge.morphNormals!==nt||Ge.morphColors!==Ut||Ge.toneMapping!==Mn||ge.isWebGL2===!0&&Ge.morphTargetsCount!==it)&&(ut=!0):(ut=!0,Ge.__version=O.version);let ei=Ge.currentProgram;ut===!0&&(ei=$t(O,U,K));let vc=!1,hr=!1,vo=!1;const wt=ei.getUniforms(),ti=Ge.uniforms;if(ve.useProgram(ei.program)&&(vc=!0,hr=!0,vo=!0),O.id!==C&&(C=O.id,hr=!0),vc||M!==T){if(wt.setValue(N,"projectionMatrix",T.projectionMatrix),ge.logarithmicDepthBuffer&&wt.setValue(N,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),M!==T&&(M=T,hr=!0,vo=!0),O.isShaderMaterial||O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshStandardMaterial||O.envMap){const Bt=wt.map.cameraPosition;Bt!==void 0&&Bt.setValue(N,te.setFromMatrixPosition(T.matrixWorld))}(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&wt.setValue(N,"isOrthographic",T.isOrthographicCamera===!0),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial||O.isShadowMaterial||K.isSkinnedMesh)&&wt.setValue(N,"viewMatrix",T.matrixWorldInverse)}if(K.isSkinnedMesh){wt.setOptional(N,K,"bindMatrix"),wt.setOptional(N,K,"bindMatrixInverse");const Bt=K.skeleton;Bt&&(ge.floatVertexTextures?(Bt.boneTexture===null&&Bt.computeBoneTexture(),wt.setValue(N,"boneTexture",Bt.boneTexture,R),wt.setValue(N,"boneTextureSize",Bt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const xo=q.morphAttributes;if((xo.position!==void 0||xo.normal!==void 0||xo.color!==void 0&&ge.isWebGL2===!0)&&Y.update(K,q,O,ei),(hr||Ge.receiveShadow!==K.receiveShadow)&&(Ge.receiveShadow=K.receiveShadow,wt.setValue(N,"receiveShadow",K.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(ti.envMap.value=Ue,ti.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),hr&&(wt.setValue(N,"toneMappingExposure",h.toneMappingExposure),Ge.needsLights&&Xd(ti,vo),Re&&O.fog===!0&&de.refreshFogUniforms(ti,Re),de.refreshMaterialUniforms(ti,O,Q,A,ce),zs.upload(N,Ge.uniformsList,ti,R)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(zs.upload(N,Ge.uniformsList,ti,R),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&wt.setValue(N,"center",K.center),wt.setValue(N,"modelViewMatrix",K.modelViewMatrix),wt.setValue(N,"normalMatrix",K.normalMatrix),wt.setValue(N,"modelMatrix",K.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Bt=O.uniformsGroups;for(let yo=0,Yd=Bt.length;yo<Yd;yo++)if(ge.isWebGL2){const xc=Bt[yo];Ce.update(xc,ei),Ce.bind(xc,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function Xd(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function $d(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(T,U,q){E.get(T.texture).__webglTexture=U,E.get(T.depthTexture).__webglTexture=q;const O=E.get(T);O.__hasExternalTextures=!0,O.__hasExternalTextures&&(O.__autoAllocateDepthBuffer=q===void 0,O.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,U){const q=E.get(T);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,q=0){y=T,v=U,S=q;let O=!0,K=null,Re=!1,ke=!1;if(T){const Ue=E.get(T);Ue.__useDefaultFramebuffer!==void 0?(ve.bindFramebuffer(36160,null),O=!1):Ue.__webglFramebuffer===void 0?R.setupRenderTarget(T):Ue.__hasExternalTextures&&R.rebindTextures(T,E.get(T.texture).__webglTexture,E.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ke=!0);const Be=E.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(K=Be[U],Re=!0):ge.isWebGL2&&T.samples>0&&R.useMultisampledRTT(T)===!1?K=E.get(T).__webglMultisampledFramebuffer:K=Be,P.copy(T.viewport),I.copy(T.scissor),x=T.scissorTest}else P.copy(k).multiplyScalar(Q).floor(),I.copy(J).multiplyScalar(Q).floor(),x=ne;if(ve.bindFramebuffer(36160,K)&&ge.drawBuffers&&O&&ve.drawBuffers(T,K),ve.viewport(P),ve.scissor(I),ve.setScissorTest(x),Re){const Ue=E.get(T.texture);N.framebufferTexture2D(36160,36064,34069+U,Ue.__webglTexture,q)}else if(ke){const Ue=E.get(T.texture),We=U||0;N.framebufferTextureLayer(36160,36064,Ue.__webglTexture,q||0,We)}C=-1},this.readRenderTargetPixels=function(T,U,q,O,K,Re,ke){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=E.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ke!==void 0&&(Ne=Ne[ke]),Ne){ve.bindFramebuffer(36160,Ne);try{const Ue=T.texture,We=Ue.format,Be=Ue.type;if(We!==cn&&fe.convert(We)!==N.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Be===Wr&&(Te.has("EXT_color_buffer_half_float")||ge.isWebGL2&&Te.has("EXT_color_buffer_float"));if(Be!==Ti&&fe.convert(Be)!==N.getParameter(35738)&&!(Be===xi&&(ge.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-O&&q>=0&&q<=T.height-K&&N.readPixels(U,q,O,K,fe.convert(We),fe.convert(Be),Re)}finally{const Ue=y!==null?E.get(y).__webglFramebuffer:null;ve.bindFramebuffer(36160,Ue)}}},this.copyFramebufferToTexture=function(T,U,q=0){const O=Math.pow(2,-q),K=Math.floor(U.image.width*O),Re=Math.floor(U.image.height*O);R.setTexture2D(U,0),N.copyTexSubImage2D(3553,q,0,0,T.x,T.y,K,Re),ve.unbindTexture()},this.copyTextureToTexture=function(T,U,q,O=0){const K=U.image.width,Re=U.image.height,ke=fe.convert(q.format),Ne=fe.convert(q.type);R.setTexture2D(q,0),N.pixelStorei(37440,q.flipY),N.pixelStorei(37441,q.premultiplyAlpha),N.pixelStorei(3317,q.unpackAlignment),U.isDataTexture?N.texSubImage2D(3553,O,T.x,T.y,K,Re,ke,Ne,U.image.data):U.isCompressedTexture?N.compressedTexSubImage2D(3553,O,T.x,T.y,U.mipmaps[0].width,U.mipmaps[0].height,ke,U.mipmaps[0].data):N.texSubImage2D(3553,O,T.x,T.y,ke,Ne,U.image),O===0&&q.generateMipmaps&&N.generateMipmap(3553),ve.unbindTexture()},this.copyTextureToTexture3D=function(T,U,q,O,K=0){if(h.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Re=T.max.x-T.min.x+1,ke=T.max.y-T.min.y+1,Ne=T.max.z-T.min.z+1,Ue=fe.convert(O.format),We=fe.convert(O.type);let Be;if(O.isData3DTexture)R.setTexture3D(O,0),Be=32879;else if(O.isDataArrayTexture)R.setTexture2DArray(O,0),Be=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(37440,O.flipY),N.pixelStorei(37441,O.premultiplyAlpha),N.pixelStorei(3317,O.unpackAlignment);const ze=N.getParameter(3314),nt=N.getParameter(32878),Ut=N.getParameter(3316),Mn=N.getParameter(3315),Qn=N.getParameter(32877),it=q.isCompressedTexture?q.mipmaps[0]:q.image;N.pixelStorei(3314,it.width),N.pixelStorei(32878,it.height),N.pixelStorei(3316,T.min.x),N.pixelStorei(3315,T.min.y),N.pixelStorei(32877,T.min.z),q.isDataTexture||q.isData3DTexture?N.texSubImage3D(Be,K,U.x,U.y,U.z,Re,ke,Ne,Ue,We,it.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),N.compressedTexSubImage3D(Be,K,U.x,U.y,U.z,Re,ke,Ne,Ue,it.data)):N.texSubImage3D(Be,K,U.x,U.y,U.z,Re,ke,Ne,Ue,We,it),N.pixelStorei(3314,ze),N.pixelStorei(32878,nt),N.pixelStorei(3316,Ut),N.pixelStorei(3315,Mn),N.pixelStorei(32877,Qn),K===0&&O.generateMipmaps&&N.generateMipmap(Be),ve.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),ve.unbindTexture()},this.resetState=function(){v=0,S=0,y=null,ve.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class nb extends Wd{}nb.prototype.isWebGL1Renderer=!0;class ib extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class gc extends ur{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ye(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lu=new G,Iu=new G,ku=new ht,da=new Dd,Rs=new po;class rb extends Nt{constructor(e=new bn,t=new gc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Lu.fromBufferAttribute(t,r-1),Iu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Lu.distanceTo(Iu);e.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Rs.copy(i.boundingSphere),Rs.applyMatrix4(r),Rs.radius+=s,e.ray.intersectsSphere(Rs)===!1)return;ku.copy(r).invert(),da.copy(e.ray).applyMatrix4(ku);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new G,u=new G,f=new G,d=new G,p=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const v=Math.max(0,o.start),S=Math.min(g.count,o.start+o.count);for(let y=v,C=S-1;y<C;y+=p){const M=g.getX(y),P=g.getX(y+1);if(l.fromBufferAttribute(m,M),u.fromBufferAttribute(m,P),da.distanceSqToSegment(l,u,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}else{const v=Math.max(0,o.start),S=Math.min(m.count,o.start+o.count);for(let y=v,C=S-1;y<C;y+=p){if(l.fromBufferAttribute(m,y),u.fromBufferAttribute(m,y+1),da.distanceSqToSegment(l,u,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:y,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Ou=new G,Fu=new G;class jd extends rb{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)Ou.fromBufferAttribute(t,r),Fu.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Ou.distanceTo(Fu);e.setAttribute("lineDistance",new qt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sb extends Ft{constructor(e,t,i,r,s,o,a,c,l){super(e,t,i,r,s,o,a,c,l),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Ot,this.magFilter=s!==void 0?s:Ot,this.generateMipmaps=!1;const u=this;function f(){u.needsUpdate=!0,e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(f)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ob extends ur{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class ab extends jd{constructor(e=10,t=10,i=4473924,r=8947848){i=new Ye(i),r=new Ye(r);const s=t/2,o=e/t,a=e/2,c=[],l=[];for(let d=0,p=0,g=-a;d<=t;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const h=d===s?i:r;h.toArray(l,p),p+=3,h.toArray(l,p),p+=3,h.toArray(l,p),p+=3,h.toArray(l,p),p+=3}const u=new bn;u.setAttribute("position",new qt(c,3)),u.setAttribute("color",new qt(l,3));const f=new gc({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class cb extends jd{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new bn;r.setAttribute("position",new qt(t,3)),r.setAttribute("color",new qt(i,3));const s=new gc({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Ye,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dc);class rr{static createButton(e){const t=document.createElement("button");function i(){let c=null;async function l(f){f.addEventListener("end",u),await e.xr.setSession(f),t.textContent="EXIT VR",c=f}function u(){c.removeEventListener("end",u),t.textContent="ENTER VR",c=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(c===null){const f={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",f).then(l)}else c.end()}}function r(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function s(){r(),t.textContent="VR NOT SUPPORTED"}function o(c){r(),console.warn("Exception when trying to call xr.isSessionSupported",c),t.textContent="VR NOT ALLOWED"}function a(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",a(t),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():s(),c&&rr.xrSessionIsGranted&&t.click()}).catch(o),t;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",a(c),c}}static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{rr.xrSessionIsGranted=!0})}}}rr.xrSessionIsGranted=!1;rr.registerSessionGrantedListener();const Dr=new ib,As=[];function lb(){const n=new Jt(50,window.innerWidth/window.innerHeight,.1,100);n.position.set(0,0,0),Dr.add(n),Dr.add(new ab(500,500)),Dr.add(new cb(10));const e=new Wd({antialias:!0});e.setPixelRatio(window.devicePixelRatio),e.setSize(window.innerWidth,window.innerHeight),e.xr.enabled=!0,e.setAnimationLoop(()=>{e.render(Dr,n)}),document.body.appendChild(e.domElement),document.body.appendChild(rr.createButton(e))}function ub(n){const e=new sb(n);return new hc({map:e})}async function fb(n){const e=ub(n),t=new ob;n.videoWidth===0&&n.videoHeight===0&&await new Promise(o=>{n.addEventListener("loadedmetadata",()=>o(),!1)}),console.log(n.videoWidth,n.videoHeight);const i=n.videoWidth/500,r=n.videoHeight/500,s=new In(new fr(i,r,1),[t,t,t,t,e,t]);if(As.length===0)s.position.set(0,r/2,-3);else{const o=As.map(a=>(a.geometry.computeBoundingBox(),a.geometry.boundingBox.max.x)).sort()[As.length-1];s.position.set(i/2+o,r/2,-3)}Dr.add(s),As.push(s)}const db={key:0,style:{color:"red"}},hb={style:{margin:"20px"}},pb=["disabled"],mb={key:0,style:{width:"100%",height:"100%","object-fit":"fill"},controls:""},gb={key:0},_b=lp({__name:"App",setup(n){const e=dn("viewer"),t=dn("localhost"),i=dn(9e3),r=dn("/"),s=dn(!1),o=dn("unknown"),a=dn([]),c=dn(),l=dn(""),u=dn(0);function f(){o.value="viewer",s.value&&lb();const p=new Js(e.value,{host:t.value,port:i.value,path:r.value});p.on("call",g=>{g.answer(),g.on("stream",h=>{a.value.push(h);const m=document.createElement("video");m.srcObject=h,m.autoplay=!0,m.controls=!0,m.style.width="100%",m.style.height="100%",m.style.objectFit="fill",c.value.appendChild(m),s.value&&fb(m)})}),p.on("error",g=>{console.error(g),l.value=g.message})}function d(){o.value="caster";const p=new Js({host:t.value,port:i.value,path:r.value});p.on("error",g=>{console.error(g),l.value=g.message}),navigator.mediaDevices.getDisplayMedia().then(g=>{p.call(e.value,g),u.value++})}return rc(()=>{const p=new URLSearchParams(window.location.search);if(p.has("viewer-name")&&(e.value=p.get("viewer-name")),p.has("host")&&(t.value=p.get("host")),p.has("port")&&(i.value=parseInt(p.get("port"))),p.has("path")&&(r.value=p.get("path")),p.has("xr")&&(s.value=p.get("xr")=="true"),p.has("role")){const g=p.get("role");g=="viewer"?f():g=="caster"&&d()}}),(p,g)=>(Cr(),is(rn,null,[l.value?(Cr(),is("p",db,yc(l.value),1)):wo("",!0),dt("main",null,[Bn(dt("div",hb,[dt("p",null,[Vi(" Viewer Name: "),Bn(dt("input",{"onUpdate:modelValue":g[0]||(g[0]=h=>e.value=h)},null,512),[[rs,e.value]])]),dt("p",null,[Vi(" Peer Server Host: "),Bn(dt("input",{"onUpdate:modelValue":g[1]||(g[1]=h=>t.value=h)},null,512),[[rs,t.value]])]),dt("p",null,[Vi(" Peer Server Port: "),Bn(dt("input",{type:"number","onUpdate:modelValue":g[2]||(g[2]=h=>i.value=h)},null,512),[[rs,i.value]])]),dt("p",null,[Vi(" Peer Server Path: "),Bn(dt("input",{"onUpdate:modelValue":g[3]||(g[3]=h=>r.value=h)},null,512),[[rs,r.value]])]),dt("p",null,[Vi(" View with WebXR: "),Bn(dt("input",{type:"checkbox","onUpdate:modelValue":g[4]||(g[4]=h=>s.value=h),disabled:o.value=="caster"},null,8,pb),[[bm,s.value]])]),dt("button",{onClick:f},"Register as Viewer"),dt("button",{onClick:d,style:{"margin-left":"20px"}}," Cast Screen to Viewer ")],512),[[Po,o.value=="unknown"||o.value=="caster"]]),Bn(dt("div",null,[Bn(dt("div",{ref_key:"videos",ref:c},[a.value.length===0?(Cr(),is("video",mb)):wo("",!0)],512),[[Po,s.value===!1]])],512),[[Po,o.value=="viewer"]]),u.value?(Cr(),is("p",gb,"Casting: "+yc(u.value)+" stream(s).",1)):wo("",!0)])],64))}});Cm(_b).mount("#app");
