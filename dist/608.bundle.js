(self.webpackChunkrestaurant_apps=self.webpackChunkrestaurant_apps||[]).push([[608],{452:e=>{e=function(a){"use strict";var s,t=Object.prototype,u=t.hasOwnProperty,f=Object.defineProperty||function(t,e,n){t[e]=n.value},e="function"==typeof Symbol?Symbol:{},r=e.iterator||"@@iterator",n=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,n){return t[e]=n}}function c(t,e,n,r){var o,i,a,c,e=e&&e.prototype instanceof g?e:g,e=Object.create(e.prototype),r=new P(r||[]);return f(e,"_invoke",{value:(o=t,i=n,a=r,c=h,function(t,e){if(c===d)throw new Error("Generator is already running");if(c===v){if("throw"===t)throw e;return{value:s,done:!0}}for(a.method=t,a.arg=e;;){var n=a.delegate;if(n){n=function t(e,n){var r=n.method;var o=e.iterator[r];if(o===s)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=s,t(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;r=l(o,e.iterator,n.arg);if("throw"===r.type)return n.method="throw",n.arg=r.arg,n.delegate=null,y;o=r.arg;if(!o)return n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y;{if(!o.done)return o;n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=s)}n.delegate=null;return y}(n,a);if(n){if(n===y)continue;return n}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===h)throw c=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=d;n=l(o,i,a);if("normal"===n.type){if(c=a.done?v:p,n.arg!==y)return{value:n.arg,done:a.done}}else"throw"===n.type&&(c=v,a.method="throw",a.arg=n.arg)}})}),e}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}a.wrap=c;var h="suspendedStart",p="suspendedYield",d="executing",v="completed",y={};function g(){}function m(){}function w(){}var e={},b=(i(e,r,function(){return this}),Object.getPrototypeOf),b=b&&b(b(k([]))),E=(b&&b!==t&&u.call(b,r)&&(e=b),w.prototype=g.prototype=Object.create(e));function L(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function x(a,c){var e;f(this,"_invoke",{value:function(n,r){function t(){return new c(function(t,e){!function e(t,n,r,o){var i,t=l(a[t],a,n);if("throw"!==t.type)return(n=(i=t.arg).value)&&"object"==typeof n&&u.call(n,"__await")?c.resolve(n.__await).then(function(t){e("next",t,r,o)},function(t){e("throw",t,r,o)}):c.resolve(n).then(function(t){i.value=t,r(i)},function(t){return e("throw",t,r,o)});o(t.arg)}(n,r,t,e)})}return e=e?e.then(t,t):t()}})}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function k(e){if(null!=e){var n,t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return n=-1,(t=function t(){for(;++n<e.length;)if(u.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=s,t.done=!0,t}).next=t}throw new TypeError(typeof e+" is not iterable")}return f(E,"constructor",{value:m.prototype=w,configurable:!0}),f(w,"constructor",{value:m,configurable:!0}),m.displayName=i(w,o,"GeneratorFunction"),a.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},a.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,i(t,o,"GeneratorFunction")),t.prototype=Object.create(E),t},a.awrap=function(t){return{__await:t}},L(x.prototype),i(x.prototype,n,function(){return this}),a.AsyncIterator=x,a.async=function(t,e,n,r,o){void 0===o&&(o=Promise);var i=new x(c(t,e,n,r),o);return a.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},L(E),i(E,o,"Generator"),i(E,r,function(){return this}),i(E,"toString",function(){return"[object Generator]"}),a.keys=function(t){var e,n=Object(t),r=[];for(e in n)r.push(e);return r.reverse(),function t(){for(;r.length;){var e=r.pop();if(e in n)return t.value=e,t.done=!1,t}return t.done=!0,t}},a.values=k,P.prototype={constructor:P,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=s,this.done=!1,this.delegate=null,this.method="next",this.arg=s,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=s)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var r=this;function t(t,e){return i.type="throw",i.arg=n,r.next=t,e&&(r.method="next",r.arg=s),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var a=u.call(o,"catchLoc"),c=u.call(o,"finallyLoc");if(a&&c){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;0<=n;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&u.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),j(n),y}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var n,r,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(n=o.completion).type&&(r=n.arg,j(o)),r}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:k(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=s),y}},a}(e.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}},72:t=>{"use strict";var u=[];function f(t){for(var e=-1,n=0;n<u.length;n++)if(u[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c=n[a]||0,s="".concat(a," ").concat(c),a=(n[a]=c+1,f(s)),c={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};-1!==a?(u[a].references++,u[a].updater(c)):(i=function(e,t){var n=t.domAPI(t);return n.update(e),function(t){t?t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer||n.update(e=t):n.remove()}}(c,e),e.byIndex=o,u.splice(o,0,{identifier:s,updater:i,references:1})),r.push(s)}return r}t.exports=function(t,i){var a=c(t=t||[],i=i||{});return function(t){t=t||[];for(var e=0;e<a.length;e++){var n=f(a[e]);u[n].references--}for(var t=c(t,i),r=0;r<a.length;r++){var o=f(a[r]);0===u[o].references&&(u[o].updater(),u.splice(o,1))}a=t}}},659:t=>{"use strict";var n={};t.exports=function(t,e){if(!(t=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t)))throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},540:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{"use strict";t.exports=function(i){var a;return"undefined"==typeof document?{update:function(){},remove:function(){}}:(a=i.insertStyleElement(i),{update:function(t){var e,n,r,o;e=a,n=i,r="",(t=t).supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {")),(o=void 0!==t.layer)&&(r+="@layer".concat(0<t.layer.length?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}"),(o=t.sourceMap)&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)},remove:function(){var t;null!==(t=a).parentNode&&t.parentNode.removeChild(t)}})}},113:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},730:(t,e,n)=>{"use strict";n.d(e,{JK:()=>d});try{self["workbox:window:7.0.0"]&&_()}catch(r){}function r(n,r){return new Promise(function(e){var t=new MessageChannel;t.port1.onmessage=function(t){e(t.data)},n.postMessage(r,[t.port2])})}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}try{self["workbox:core:7.0.0"]&&_()}catch(r){}function c(){var n=this;this.promise=new Promise(function(t,e){n.resolve=t,n.reject=e})}function s(t,e){var n=location.href;return new URL(t,n).href===new URL(e,n).href}function u(t,e){this.type=t,Object.assign(this,e)}function f(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function a(){}var l={type:"SKIP_WAITING"};function h(t,e){if(!e)return t&&t.then?t.then(a):Promise.resolve()}(n=y.prototype).addEventListener=function(t,e){this.Sn(t).add(e)},n.removeEventListener=function(t,e){this.Sn(t).delete(e)},n.dispatchEvent=function(t){for(var e,n=function(t,e){var n,r;if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator])return(n=t[Symbol.iterator]()).next.bind(n);if(Array.isArray(t)||(n=function(t){var e;if(t)return"string"==typeof t?i(t,void 0):"Map"===(e="Object"===(e=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:e)||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(t,void 0):void 0}(t))||e&&t&&"number"==typeof t.length)return n&&(t=n),r=0,function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}};throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}((t.target=this).Sn(t.type));!(e=n()).done;)(0,e.value)(t)},n.Sn=function(t){return this.Pn.has(t)||this.Pn.set(t,new Set),this.Pn.get(t)},e=p=y,(n=v).prototype=Object.create(e.prototype),(n.prototype.constructor=n).__proto__=e,(n=v.prototype).register=function(t){var e,n,r=(void 0===t?{}:t).immediate,o=void 0!==r&&r;try{var i=this;return e=function(){return i.mn=Boolean(navigator.serviceWorker.controller),i.yn=i.pn(),f(i.bn(),function(t){i.fn=t,i.yn&&(i.hn=i.yn,i.en.resolve(i.yn),i.on.resolve(i.yn),i.yn.addEventListener("statechange",i.ln,{once:!0}));var e=i.fn.waiting;return e&&s(e.scriptURL,i.sn.toString())&&(i.hn=e,Promise.resolve().then(function(){i.dispatchEvent(new u("waiting",{sw:e,wasWaitingBeforeRegister:!0}))}).then(function(){})),i.hn&&(i.rn.resolve(i.hn),i.an.add(i.hn)),i.fn.addEventListener("updatefound",i.cn),navigator.serviceWorker.addEventListener("controllerchange",i.dn),i.fn})},(n=function(){if(!o&&"complete"!==document.readyState)return h(new Promise(function(t){return window.addEventListener("load",t)}))}())&&n.then?n.then(e):e()}catch(t){return Promise.reject(t)}},n.update=function(){try{return this.fn?h(this.fn.update()):void 0}catch(t){return Promise.reject(t)}},n.getSW=function(){return void 0!==this.hn?Promise.resolve(this.hn):this.rn.promise},n.messageSW=function(e){try{return f(this.getSW(),function(t){return r(t,e)})}catch(t){return Promise.reject(t)}},n.messageSkipWaiting=function(){this.fn&&this.fn.waiting&&r(this.fn.waiting,l)},n.pn=function(){var t=navigator.serviceWorker.controller;return t&&s(t.scriptURL,this.sn.toString())?t:void 0},n.bn=function(){try{var e=this,n=function(t){throw t};try{var t=f(navigator.serviceWorker.register(e.sn,e.nn),function(t){return e.un=performance.now(),t})}catch(t){return n(t)}return t&&t.then?t.then(void 0,n):t}catch(e){return Promise.reject(e)}},o(v.prototype,[{key:"active",get:function(){return this.en.promise}},{key:"controlling",get:function(){return this.on.promise}}]);var p,d=v;function v(t,e){var a,n;return void 0===e&&(e={}),(a=p.call(this)||this).nn={},a.tn=0,a.rn=new c,a.en=new c,a.on=new c,a.un=0,a.an=new Set,a.cn=function(){var t=a.fn,e=t.installing;0<a.tn||!s(e.scriptURL,a.sn.toString())||performance.now()>a.un+6e4?(a.vn=e,t.removeEventListener("updatefound",a.cn)):(a.hn=e,a.an.add(e),a.rn.resolve(e)),++a.tn,e.addEventListener("statechange",a.ln)},a.ln=function(t){var e=a.fn,n=t.target,r=n.state,o=n===a.vn,i={sw:n,isExternal:o,originalEvent:t};!o&&a.mn&&(i.isUpdate=!0),a.dispatchEvent(new u(r,i)),"installed"===r?a.wn=self.setTimeout(function(){"installed"===r&&e.waiting===n&&a.dispatchEvent(new u("waiting",i))},200):"activating"===r&&(clearTimeout(a.wn),o||a.en.resolve(n))},a.dn=function(t){var e=a.hn,n=e!==navigator.serviceWorker.controller;a.dispatchEvent(new u("controlling",{isExternal:n,originalEvent:t,sw:e,isUpdate:a.mn})),n||a.on.resolve(e)},a.gn=(n=function(t){var e=t.data,n=t.ports,r=t.source;return f(a.getSW(),function(){a.an.has(r)&&a.dispatchEvent(new u("message",{data:e,originalEvent:t,ports:n,sw:r}))})},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];try{return Promise.resolve(n.apply(this,t))}catch(t){return Promise.reject(t)}}),a.sn=t,a.nn=e,navigator.serviceWorker.addEventListener("message",a.gn),a}function y(){this.Pn=new Map}}}]);