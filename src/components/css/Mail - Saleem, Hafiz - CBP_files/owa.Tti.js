self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.Tti.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[590],{11303:function(t,e,n){(function(n){var r;!function(){var i="undefined"!=typeof window&&window===this?this:void 0!==n&&null!=n?n:this,o="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){t!=Array.prototype&&t!=Object.prototype&&(t[e]=n.value)};function a(){a=function(){},i.Symbol||(i.Symbol=u)}var s=0;function u(t){return"jscomp_symbol_"+(t||"")+s++}function c(){a();var t=i.Symbol.iterator;t||(t=i.Symbol.iterator=i.Symbol("iterator")),"function"!=typeof Array.prototype[t]&&o(Array.prototype,t,{configurable:!0,writable:!0,value:function(){return f(this)}}),c=function(){}}function f(t){var e=0;return function(t){return c(),(t={next:t})[i.Symbol.iterator]=function(){return this},t}((function(){return e<t.length?{done:!1,value:t[e++]}:{done:!0}}))}function d(t){c();var e=t[Symbol.iterator];return e?e.call(t):f(t)}function l(t){if(!(t instanceof Array)){t=d(t);for(var e,n=[];!(e=t.next()).done;)n.push(e.value);t=n}return t}var p=0;var h="img script iframe link audio video source".split(" ");function m(t,e){for(var n=(t=d(t)).next();!n.done;n=t.next())if(n=n.value,e.includes(n.nodeName.toLowerCase())||m(n.children,e))return!0;return!1}function v(t,e){if(2<t.length)return performance.now();for(var n=[],r=(e=d(e)).next();!r.done;r=e.next())r=r.value,n.push({timestamp:r.start,type:"requestStart"}),n.push({timestamp:r.end,type:"requestEnd"});for(r=(e=d(t)).next();!r.done;r=e.next())n.push({timestamp:r.value,type:"requestStart"});for(n.sort((function(t,e){return t.timestamp-e.timestamp})),t=t.length,e=n.length-1;0<=e;e--)switch(r=n[e],r.type){case"requestStart":t--;break;case"requestEnd":if(2<++t)return r.timestamp;break;default:throw Error("Internal Error: This should never happen")}return 0}function y(t){t=t||{},this.w=!!t.useMutationObserver,this.u=t.minValue||null,t=window.__tti&&window.__tti.e;var e=window.__tti&&window.__tti.o;this.a=t?t.map((function(t){return{start:t.startTime,end:t.startTime+t.duration}})):[],e&&e.disconnect(),this.b=[],this.f=new Map,this.j=null,this.v=-1/0,this.i=!1,this.h=this.c=this.s=null,function(t,e){var n=XMLHttpRequest.prototype.send,r=p++;XMLHttpRequest.prototype.send=function(i){for(var o=[],a=0;a<arguments.length;++a)o[a-0]=arguments[a];var s=this;return t(r),this.addEventListener("readystatechange",(function(){4===s.readyState&&e(r)})),n.apply(this,o)}}(this.m.bind(this),this.l.bind(this)),function(t,e){var n=fetch;fetch=function(r){for(var i=[],o=0;o<arguments.length;++o)i[o-0]=arguments[o];return new Promise((function(r,o){var a=p++;t(a),n.apply(null,[].concat(l(i))).then((function(t){e(a),r(t)}),(function(t){e(t),o(t)}))}))}}(this.m.bind(this),this.l.bind(this)),function(t){t.c=new PerformanceObserver((function(e){for(var n=(e=d(e.getEntries())).next();!n.done;n=e.next())if("resource"===(n=n.value).entryType&&(t.b.push({start:n.fetchStart,end:n.responseEnd}),b(t,v(t.g,t.b)+5e3)),"longtask"===n.entryType){var r=n.startTime+n.duration;t.a.push({start:n.startTime,end:r}),b(t,r+5e3)}})),t.c.observe({entryTypes:["longtask","resource"]})}(this),this.w&&(this.h=function(t){var e=new MutationObserver((function(e){for(var n=(e=d(e)).next();!n.done;n=e.next())"childList"==(n=n.value).type&&m(n.addedNodes,h)?t(n):"attributes"==n.type&&h.includes(n.target.tagName.toLowerCase())&&t(n)}));return e.observe(document,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["href","src"]}),e}(this.B.bind(this)))}function w(t){t.i=!0;var e=0<t.a.length?t.a[t.a.length-1].end:0,n=v(t.g,t.b);b(t,Math.max(n+5e3,e))}function b(t,e){!t.i||t.v>e||(clearTimeout(t.j),t.j=setTimeout((function(){var e=performance.timing.navigationStart,n=v(t.g,t.b);e=(window.a&&window.a.A?1e3*window.a.A().C-e:0)||performance.timing.domContentLoadedEventEnd-e;if(t.u)var r=t.u;else performance.timing.domContentLoadedEventEnd?r=(r=performance.timing).domContentLoadedEventEnd-r.navigationStart:r=null;var i=performance.now();null===r&&b(t,Math.max(n+5e3,i+1e3));var o=t.a;5e3>i-n?n=null:n=5e3>i-(n=o.length?o[o.length-1].end:e)?null:Math.max(n,r),n&&(t.s(n),clearTimeout(t.j),t.i=!1,t.c&&t.c.disconnect(),t.h&&t.h.disconnect()),b(t,performance.now()+1e3)}),e-performance.now()),t.v=e)}y.prototype.getFirstConsistentlyInteractive=function(){var t=this;return new Promise((function(e){t.s=e,"complete"==document.readyState?w(t):window.addEventListener("load",(function(){w(t)}))}))},y.prototype.m=function(t){this.f.set(t,performance.now())},y.prototype.l=function(t){this.f.delete(t)},y.prototype.B=function(){b(this,performance.now()+5e3)},i.Object.defineProperties(y.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return[].concat(l(this.f.values()))}}});var g={getFirstConsistentlyInteractive:function(t){return t=t||{},"PerformanceLongTaskTiming"in window?new y(t).getFirstConsistentlyInteractive():Promise.resolve(null)}};t.exports?t.exports=g:void 0===(r=function(){return g}.apply(e,[]))||(t.exports=r)}()}).call(this,n(113))},9936:function(t,e,n){"use strict";n.r(e),n.d(e,"tti",(function(){return i}));var r=n(11303);function i(){return Object(r.getFirstConsistentlyInteractive)()}}}]);
//# sourceMappingURL=owa.Tti.js.map
self.scriptsLoaded['owa.Tti.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.Tti.js'] = (new Date()).getTime();