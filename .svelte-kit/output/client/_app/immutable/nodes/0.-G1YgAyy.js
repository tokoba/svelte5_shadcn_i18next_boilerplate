import{c as k,a as U}from"../chunks/disclose-version.BUSkuIA1.js";import{Y as F,Z as N,U as $,n as W,_ as K,z as x,A as J,p as Q,$ as z,f as B,a as G}from"../chunks/runtime.BA54F5W-.js";import{i as A}from"../chunks/i18next.DUFf20pf.js";import{_ as V}from"../chunks/preload-helper.CmsKOCeN.js";import{w as R}from"../chunks/index.StKBPifa.js";function Y(r,e,...t){var n=r,o=W,i;F(()=>{o!==(o=e())&&(i&&(K(i),i=null),i=$(()=>o(n,...t)))},N),x&&(n=J)}function S(r){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},S(r)}function C(){return typeof XMLHttpRequest=="function"||(typeof XMLHttpRequest>"u"?"undefined":S(XMLHttpRequest))==="object"}function Z(r){return!!r&&typeof r.then=="function"}function ee(r){return Z(r)?r:Promise.resolve(r)}function q(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function L(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?q(Object(t),!0).forEach(function(n){te(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function te(r,e,t){return(e=ne(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function ne(r){var e=re(r,"string");return h(e)=="symbol"?e:e+""}function re(r,e){if(h(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(h(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}function h(r){"@babel/helpers - typeof";return h=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(r)}var y;typeof fetch=="function"&&(typeof global<"u"&&global.fetch?y=global.fetch:typeof window<"u"&&window.fetch?y=window.fetch:y=fetch);var b;C()&&(typeof global<"u"&&global.XMLHttpRequest?b=global.XMLHttpRequest:typeof window<"u"&&window.XMLHttpRequest&&(b=window.XMLHttpRequest));var w;typeof ActiveXObject=="function"&&(typeof global<"u"&&global.ActiveXObject?w=global.ActiveXObject:typeof window<"u"&&window.ActiveXObject&&(w=window.ActiveXObject));typeof y!="function"&&(y=void 0);if(!y&&!b&&!w)try{V(()=>import("../chunks/browser-ponyfill.DEEVcJG2.js").then(r=>r.b),[],import.meta.url).then(function(r){y=r.default}).catch(function(){})}catch{}var _=function(e,t){if(t&&h(t)==="object"){var n="";for(var o in t)n+="&"+encodeURIComponent(o)+"="+encodeURIComponent(t[o]);if(!n)return e;e=e+(e.indexOf("?")!==-1?"&":"?")+n.slice(1)}return e},E=function(e,t,n,o){var i=function(f){if(!f.ok)return n(f.statusText||"Error",{status:f.status});f.text().then(function(l){n(null,{status:f.status,data:l})}).catch(n)};if(o){var a=o(e,t);if(a instanceof Promise){a.then(i).catch(n);return}}typeof fetch=="function"?fetch(e,t).then(i).catch(n):y(e,t).then(i).catch(n)},H=!1,oe=function(e,t,n,o){e.queryStringParams&&(t=_(t,e.queryStringParams));var i=L({},typeof e.customHeaders=="function"?e.customHeaders():e.customHeaders);typeof window>"u"&&typeof global<"u"&&typeof global.process<"u"&&global.process.versions&&global.process.versions.node&&(i["User-Agent"]="i18next-http-backend (node/".concat(global.process.version,"; ").concat(global.process.platform," ").concat(global.process.arch,")")),n&&(i["Content-Type"]="application/json");var a=typeof e.requestOptions=="function"?e.requestOptions(n):e.requestOptions,s=L({method:n?"POST":"GET",body:n?e.stringify(n):void 0,headers:i},H?{}:a),f=typeof e.alternateFetch=="function"&&e.alternateFetch.length>=1?e.alternateFetch:void 0;try{E(t,s,o,f)}catch(l){if(!a||Object.keys(a).length===0||!l.message||l.message.indexOf("not implemented")<0)return o(l);try{Object.keys(a).forEach(function(u){delete s[u]}),E(t,s,o,f),H=!0}catch(u){o(u)}}},ie=function(e,t,n,o){n&&h(n)==="object"&&(n=_("",n).slice(1)),e.queryStringParams&&(t=_(t,e.queryStringParams));try{var i=b?new b:new w("MSXML2.XMLHTTP.3.0");i.open(n?"POST":"GET",t,1),e.crossDomain||i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.withCredentials=!!e.withCredentials,n&&i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.overrideMimeType&&i.overrideMimeType("application/json");var a=e.customHeaders;if(a=typeof a=="function"?a():a,a)for(var s in a)i.setRequestHeader(s,a[s]);i.onreadystatechange=function(){i.readyState>3&&o(i.status>=400?i.statusText:null,{status:i.status,data:i.responseText})},i.send(n)}catch(f){console&&console.log(f)}},ae=function(e,t,n,o){if(typeof n=="function"&&(o=n,n=void 0),o=o||function(){},y&&t.indexOf("file:")!==0)return oe(e,t,n,o);if(C()||typeof ActiveXObject=="function")return ie(e,t,n,o);o(new Error("No fetch and no xhr implementation found!"))};function v(r){"@babel/helpers - typeof";return v=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(r)}function T(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),t.push.apply(t,n)}return t}function P(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?T(Object(t),!0).forEach(function(n){M(r,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach(function(n){Object.defineProperty(r,n,Object.getOwnPropertyDescriptor(t,n))})}return r}function se(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}function fe(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,I(n.key),n)}}function ue(r,e,t){return e&&fe(r.prototype,e),Object.defineProperty(r,"prototype",{writable:!1}),r}function M(r,e,t){return(e=I(e))in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function I(r){var e=ce(r,"string");return v(e)=="symbol"?e:e+""}function ce(r,e){if(v(r)!="object"||!r)return r;var t=r[Symbol.toPrimitive];if(t!==void 0){var n=t.call(r,e||"default");if(v(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(r)}var le=function(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",parse:function(t){return JSON.parse(t)},stringify:JSON.stringify,parsePayload:function(t,n,o){return M({},n,o||"")},parseLoadPayload:function(t,n){},request:ae,reloadInterval:typeof window<"u"?!1:60*60*1e3,customHeaders:{},queryStringParams:{},crossDomain:!1,withCredentials:!1,overrideMimeType:!1,requestOptions:{mode:"cors",credentials:"same-origin",cache:"default"}}},D=function(){function r(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};se(this,r),this.services=e,this.options=t,this.allOptions=n,this.type="backend",this.init(e,t,n)}return ue(r,[{key:"init",value:function(t){var n=this,o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(this.services=t,this.options=P(P(P({},le()),this.options||{}),o),this.allOptions=i,this.services&&this.options.reloadInterval){var a=setInterval(function(){return n.reload()},this.options.reloadInterval);v(a)==="object"&&typeof a.unref=="function"&&a.unref()}}},{key:"readMulti",value:function(t,n,o){this._readAny(t,t,n,n,o)}},{key:"read",value:function(t,n,o){this._readAny([t],t,[n],n,o)}},{key:"_readAny",value:function(t,n,o,i,a){var s=this,f=this.options.loadPath;typeof this.options.loadPath=="function"&&(f=this.options.loadPath(t,o)),f=ee(f),f.then(function(l){if(!l)return a(null,{});var u=s.services.interpolator.interpolate(l,{lng:t.join("+"),ns:o.join("+")});s.loadUrl(u,a,n,i)})}},{key:"loadUrl",value:function(t,n,o,i){var a=this,s=typeof o=="string"?[o]:o,f=typeof i=="string"?[i]:i,l=this.options.parseLoadPayload(s,f);this.options.request(this.options,t,l,function(u,c){if(c&&(c.status>=500&&c.status<600||!c.status))return n("failed loading "+t+"; status code: "+c.status,!0);if(c&&c.status>=400&&c.status<500)return n("failed loading "+t+"; status code: "+c.status,!1);if(!c&&u&&u.message){var d=u.message.toLowerCase(),p=["failed","fetch","network","load"].find(function(O){return d.indexOf(O)>-1});if(p)return n("failed loading "+t+": "+u.message,!0)}if(u)return n(u,!1);var g,m;try{typeof c.data=="string"?g=a.options.parse(c.data,o,i):g=c.data}catch{m="failed parsing "+t+" to json"}if(m)return n(m,!1);n(null,g)})}},{key:"create",value:function(t,n,o,i,a){var s=this;if(this.options.addPath){typeof t=="string"&&(t=[t]);var f=this.options.parsePayload(n,o,i),l=0,u=[],c=[];t.forEach(function(d){var p=s.options.addPath;typeof s.options.addPath=="function"&&(p=s.options.addPath(d,n));var g=s.services.interpolator.interpolate(p,{lng:d,ns:n});s.options.request(s.options,g,f,function(m,O){l+=1,u.push(m),c.push(O),l===t.length&&typeof a=="function"&&a(u,c)})})}}},{key:"reload",value:function(){var t=this,n=this.services,o=n.backendConnector,i=n.languageUtils,a=n.logger,s=o.language;if(!(s&&s.toLowerCase()==="cimode")){var f=[],l=function(c){var d=i.toResolveHierarchy(c);d.forEach(function(p){f.indexOf(p)<0&&f.push(p)})};l(s),this.allOptions.preload&&this.allOptions.preload.forEach(function(u){return l(u)}),f.forEach(function(u){t.allOptions.ns.forEach(function(c){o.read(u,c,"read",null,null,function(d,p){d&&a.warn("loading namespace ".concat(c," for language ").concat(u," failed"),d),!d&&p&&a.log("loaded namespace ".concat(c," for language ").concat(u),p),o.loaded("".concat(u,"|").concat(c),d,p)})})})}}}])}();D.type="backend";const j=R(!0);class de{constructor(e){this.i18n=this.createInstance(e),this.isLoading=this.createLoadingInstance(e)}createInstance(e){const t=R(e);return e.on("initialized",()=>{t.set(e)}),e.on("loaded",()=>{t.set(e)}),e.on("added",()=>t.set(e)),e.on("languageChanged",()=>{t.set(e)}),t}createLoadingInstance(e){return e.on("loaded",t=>{Object.keys(t).length!==0&&j.set(!1)}),e.on("failedLoading",()=>{j.set(!0)}),j}}const pe=r=>new de(r).i18n;await A.use(D).init({fallbackLng:"en",supportedLngs:["en","ja"],interpolation:{escapeValue:!1},compatibilityJSON:"v4",debug:!0,backend:{loadPath:"/locales/{{lng}}/{{ns}}.json"},ns:"resource",detection:{order:["querystring","localStorage","navigator"],caches:["localStorage"],lookupQuerystring:"lng",lookupLocalStorage:"locale"}});const X=()=>pe(A);function be(r,e){Q(e,!0),z("i18n",X());const t=X();var n=k(),o=B(n);return Y(o,()=>e.children),U(r,n),G({i18nContext:t})}export{be as component};
