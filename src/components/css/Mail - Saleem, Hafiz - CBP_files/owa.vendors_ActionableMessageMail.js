self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.vendors~ActionableMessageMail.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[676],{1005:function(t,e,r){"use strict";function o(t){var e=t&&(t.commonAncestorContainer||t),r=e&&(e.ownerDocument||("[object HTMLDocument]"==Object.prototype.toString.apply(e)?e:null));return r&&(r.defaultView||window)}Object.defineProperty(e,"__esModule",{value:!0}),e.getTargetWindow=o,e.default=function(t,e){var r=o(t),n=r&&r[e],a=window,i=a&&a[e];return i&&t instanceof i||n&&t instanceof n}},1059:function(t,e,r){"use strict";var o=r(1308),n=r(1472),a=r(1089);e.a=function(t){return Object(a.a)(t)?Object(o.a)(t):Object(n.a)(t)}},1068:function(t,e,r){"use strict";var o=r(1291),n=r(1181);e.a=function(t,e,r,a){var i=!r;r||(r={});for(var c=-1,u=e.length;++c<u;){var l=e[c],s=a?a(r[l],t[l],l,r,t):void 0;void 0===s&&(s=t[l]),i?Object(n.a)(r,l,s):Object(o.a)(r,l,s)}return r}},1079:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},1081:function(t,e,r){"use strict";e.a=function(t,e){return t===e||t!=t&&e!=e}},1089:function(t,e,r){"use strict";var o=r(1180),n=r(1148);e.a=function(t){return null!=t&&Object(n.a)(t.length)&&!Object(o.a)(t)}},1136:function(t,e,r){"use strict";var o=9007199254740991,n=/^(?:0|[1-9]\d*)$/;e.a=function(t,e){var r=typeof t;return!!(e=null==e?o:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},1137:function(t,e,r){"use strict";var o=Object.prototype;e.a=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||o)}},1146:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1855);e.isDocumentFragment=o.default;var n=r(1856);e.isHTMLElement=n.default;var a=r(1857);e.isHTMLOListElement=a.default;var i=r(1858);e.isHTMLTableCellElement=i.default;var c=r(1859);e.isHTMLTableElement=c.default;var u=r(1860);e.isNode=u.default;var l=r(1861);e.isRange=l.default;var s=r(1005);e.safeInstanceOf=s.default},1148:function(t,e,r){"use strict";var o=9007199254740991;e.a=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}},1149:function(t,e,r){"use strict";e.a=function(t){return function(e){return t(e)}}},1160:function(t,e,r){"use strict";e.a=function(t){return t}},1161:function(t,e,r){"use strict";(function(t){var o=r(568),n="object"==typeof exports&&exports&&!exports.nodeType&&exports,a=n&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===n&&o.a.process,c=function(){try{var t=a&&a.require&&a.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(t){}}();e.a=c}).call(this,r(1079)(t))},1165:function(t,e,r){"use strict";(function(t){var o=r(480),n=r(1507),a="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,c=i&&i.exports===a?o.a.Buffer:void 0,u=(c?c.isBuffer:void 0)||n.a;e.a=u}).call(this,r(1079)(t))},1180:function(t,e,r){"use strict";var o=r(559),n=r(429),a="[object AsyncFunction]",i="[object Function]",c="[object GeneratorFunction]",u="[object Proxy]";e.a=function(t){if(!Object(n.a)(t))return!1;var e=Object(o.a)(t);return e==i||e==c||e==a||e==u}},1181:function(t,e,r){"use strict";var o=r(1212);e.a=function(t,e,r){"__proto__"==e&&o.a?Object(o.a)(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},1212:function(t,e,r){"use strict";var o=r(987),n=function(){try{var t=Object(o.a)(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();e.a=n},1223:function(t,e,r){"use strict";var o=Function.prototype.toString;e.a=function(t){if(null!=t){try{return o.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},1291:function(t,e,r){"use strict";var o=r(1181),n=r(1081),a=Object.prototype.hasOwnProperty;e.a=function(t,e,r){var i=t[e];a.call(t,e)&&Object(n.a)(i,r)&&(void 0!==r||e in t)||Object(o.a)(t,e,r)}},1308:function(t,e,r){"use strict";var o=r(1446),n=r(1332),a=r(982),i=r(1165),c=r(1136),u=r(1321),l=Object.prototype.hasOwnProperty;e.a=function(t,e){var r=Object(a.a)(t),s=!r&&Object(n.a)(t),d=!r&&!s&&Object(i.a)(t),b=!r&&!s&&!d&&Object(u.a)(t),f=r||s||d||b,p=f?Object(o.a)(t.length,String):[],g=p.length;for(var y in t)!e&&!l.call(t,y)||f&&("length"==y||d&&("offset"==y||"parent"==y)||b&&("buffer"==y||"byteLength"==y||"byteOffset"==y)||Object(c.a)(y,g))||p.push(y);return p}},1309:function(t,e,r){"use strict";e.a=function(t,e){return function(r){return t(e(r))}}},1321:function(t,e,r){"use strict";var o=r(559),n=r(1148),a=r(558),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1;var c=function(t){return Object(a.a)(t)&&Object(n.a)(t.length)&&!!i[Object(o.a)(t)]},u=r(1149),l=r(1161),s=l.a&&l.a.isTypedArray,d=s?Object(u.a)(s):c;e.a=d},1332:function(t,e,r){"use strict";var o=r(559),n=r(558),a="[object Arguments]";var i=function(t){return Object(n.a)(t)&&Object(o.a)(t)==a},c=Object.prototype,u=c.hasOwnProperty,l=c.propertyIsEnumerable,s=i(function(){return arguments}())?i:function(t){return Object(n.a)(t)&&u.call(t,"callee")&&!l.call(t,"callee")};e.a=s},1446:function(t,e,r){"use strict";e.a=function(t,e){for(var r=-1,o=Array(t);++r<t;)o[r]=e(r);return o}},1464:function(t,e,r){"use strict";var o=r(1160),n=r(1531),a=r(1530);e.a=function(t,e){return Object(a.a)(Object(n.a)(t,e,o.a),t+"")}},1472:function(t,e,r){"use strict";var o=r(1137),n=r(1309),a=Object(n.a)(Object.keys,Object),i=Object.prototype.hasOwnProperty;e.a=function(t){if(!Object(o.a)(t))return a(t);var e=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&e.push(r);return e}},1507:function(t,e,r){"use strict";e.a=function(){return!1}},1530:function(t,e,r){"use strict";var o=function(t){return function(){return t}},n=r(1212),a=r(1160),i=n.a?function(t,e){return Object(n.a)(t,"toString",{configurable:!0,enumerable:!1,value:o(e),writable:!0})}:a.a,c=800,u=16,l=Date.now;var s=function(t){var e=0,r=0;return function(){var o=l(),n=u-(o-r);if(r=o,n>0){if(++e>=c)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(i);e.a=s},1531:function(t,e,r){"use strict";var o=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)},n=Math.max;e.a=function(t,e,r){return e=n(void 0===e?t.length-1:e,0),function(){for(var a=arguments,i=-1,c=n(a.length-e,0),u=Array(c);++i<c;)u[i]=a[e+i];i=-1;for(var l=Array(e+1);++i<e;)l[i]=a[i];return l[e]=r(u),o(t,this,l)}}},1575:function(t,e,r){"use strict";var o=r(1464),n=r(1600);e.a=function(t){return Object(o.a)((function(e,r){var o=-1,a=r.length,i=a>1?r[a-1]:void 0,c=a>2?r[2]:void 0;for(i=t.length>3&&"function"==typeof i?(a--,i):void 0,c&&Object(n.a)(r[0],r[1],c)&&(i=a<3?void 0:i,a=1),e=Object(e);++o<a;){var u=r[o];u&&t(e,u,o,i)}return e}))}},1583:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="border-spacing,caption-side,color,cursor,direction,empty-cells,font-family,font-size,font-style,font-variant,font-weight,font,letter-spacing,line-height,list-style-image,list-style-position,list-style-type,list-style,orphans,quotes,text-align,text-indent,text-transform,visibility,white-space,widows,word-spacing".split(",");e.default=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView,r=e&&e.getComputedStyle(t),n={};return o.forEach((function(t){return n[t]=r&&r.getPropertyValue(t)||""})),n}},1584:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="\x3c!--StartFragment--\x3e",n="\x3c!--EndFragment--\x3e";function a(t,e){var r=i(e)[0];t.body.innerHTML=r}function i(t){var e=t.indexOf(o),r=t.lastIndexOf(n);if(e>=0&&r>=0&&r>=e+o.length){var a=t.substr(0,e),i=t.substr(r+n.length);return[t=t.substring(e+o.length,r),a,i]}return[t,null,null]}e.default=function(t,e,r){var o=(new DOMParser).parseFromString(t||"","text/html");return o&&o.body&&o.body.firstChild?(e&&(r||a)(o,t),o):null},e.splitWithFragment=i},1585:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.cloneObject=Object.assign?function(t,e){return Object.assign(e||{},t)}:function(t,e){var r=e||{};if(t)for(var o=0,n=Object.keys(t);o<n.length;o++){var a=n[o];r[a]=t[a]}return r}},1600:function(t,e,r){"use strict";var o=r(1081),n=r(1089),a=r(1136),i=r(429);e.a=function(t,e,r){if(!Object(i.a)(r))return!1;var c=typeof e;return!!("number"==c?Object(n.a)(r)&&Object(a.a)(e,r.length):"string"==c&&e in r)&&Object(o.a)(r[e],t)}},1722:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(2032);e.HtmlSanitizer=o.default;var n=r(1584);e.htmlToDom=n.default,e.splitWithFragment=n.splitWithFragment;var a=r(1583);e.getInheritableStyles=a.default},1855:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1005);e.default=function(t){return o.default(t,"DocumentFragment")}},1856:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1005);e.default=function(t){return o.default(t,"HTMLElement")}},1857:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1005);e.default=function(t){return o.default(t,"HTMLOListElement")}},1858:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1005);e.default=function(t){return o.default(t,"HTMLTableCellElement")}},1859:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1005);e.default=function(t){return o.default(t,"HTMLTableElement")}},1860:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1005);e.default=function(t){return o.default(t,"Node")}},1861:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1005);e.default=function(t){return o.default(t,"Range")}},2032:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1583),n=r(1584),a=r(1585),i=r(1146),c=r(2033),u=function(){function t(t){t=t||{},this.elementCallbacks=a.cloneObject(t.elementCallbacks),this.styleCallbacks=c.getStyleCallbacks(t.styleCallbacks),this.attributeCallbacks=a.cloneObject(t.attributeCallbacks),this.allowedTags=c.getAllowedTags(t.additionalAllowedTags),this.allowedAttributes=c.getAllowedAttributes(t.additionalAllowAttributes),this.defaultStyleValues=c.getDefaultStyleValues(t.additionalDefaultStyleValues),this.additionalGlobalStyleNodes=t.additionalGlobalStyleNodes||[],this.allowPreserveWhiteSpace=t.allowPreserveWhiteSpace}return t.convertInlineCss=function(e,r){return new t({additionalGlobalStyleNodes:r}).exec(e,!0)},t.sanitizeHtml=function(e,r){var n=new t(r=r||{}),a=i.isHTMLElement(r.currentElementOrStyle)?o.default(r.currentElementOrStyle):r.currentElementOrStyle;return n.exec(e,r.convertCssOnly,r.preserveFragmentOnly,a)},t.prototype.exec=function(t,e,r,o){var a=n.default(t,r);return a&&(this.convertGlobalCssToInlineCss(a),e||this.sanitize(a.body,o)),a&&a.body&&a.body.innerHTML||""},t.prototype.sanitize=function(t,e){if(!t)return"";e=a.cloneObject(e,o.default(null)),this.processNode(t,e,{})},t.prototype.convertGlobalCssToInlineCss=function(t){for(var e=l(t.querySelectorAll("style")),r=0,o=this.additionalGlobalStyleNodes.reverse().map((function(t){return t.sheet})).concat(e.map((function(t){return t.sheet})).reverse()).filter((function(t){return t}));r<o.length;r++)for(var n=o[r],a=function(e){var r=n.cssRules[e],o=r&&r.style?r.style.cssText:null;if(r.type!=CSSRule.STYLE_RULE||!o||!r.selectorText)return"continue";for(var a=0,i=r.selectorText.split(",");a<i.length;a++){var c=i[a];if(c&&c.trim()&&!(c.indexOf(":")>=0))l(t.querySelectorAll(c)).forEach((function(t){return t.setAttribute("style",o+(t.getAttribute("style")||""))}))}},i=n.cssRules.length-1;i>=0;i--)a(i);e.forEach((function(t){t.parentNode&&t.parentNode.removeChild(t)}))},t.prototype.processNode=function(t,e,r){var o=t.nodeType,n=o==Node.ELEMENT_NODE,i=o==Node.TEXT_NODE,c=t,u=n?c.tagName.toUpperCase():"";if(n&&!this.allowElement(c,u,r)||i&&/^[\r\n]*$/g.test(t.nodeValue)&&!e.insidePRE||!n&&!i)t.parentNode.removeChild(t);else if(i&&!this.allowPreserveWhiteSpace&&"pre"==e["white-space"])t.nodeValue=t.nodeValue.replace(/^ /gm," ").replace(/ {2}/g,"  ");else if(n){var l=a.cloneObject(e);this.processAttributes(c,r),this.processCss(c,u,l,r),"PRE"==u&&(l.insidePRE="true");for(var s=c.firstChild,d=void 0;s;s=d)d=s.nextSibling,this.processNode(s,l,r)}},t.prototype.processCss=function(t,e,r,o){var n=this,a=t.getAttributeNode("style");if(a){var i=a.value.split(";"),c=i.filter((function(e){var a;if(!e||""==e.trim()||2!=(a=e.split(":")).length)return!1;var i=a[0].trim().toLowerCase(),c=a[1].trim().toLowerCase(),u=n.styleCallbacks[i],l=null!=r[i],s=(!u||u(c,t,o))&&"inherit"!=c&&c.indexOf("expression")<0&&"-"!=i.substr(0,1)&&n.defaultStyleValues[i]!=c&&(l&&c!=r[i]||!l&&"initial"!=c&&"normal"!=c);return s&&l&&(r[i]=c),s&&(n.allowPreserveWhiteSpace||"white-space"!=i)}));i.length!=c.length&&(c.length>0?t.setAttribute("style",c.map((function(t){return t.trim()})).join("; ")):t.removeAttribute("style"))}},t.prototype.processAttributes=function(t,e){for(var r=t.attributes.length-1;r>=0;r--){var o=t.attributes[r],n=o.name.toLowerCase().trim(),a=o.value,i=this.attributeCallbacks[n];i?a=i(a,t,e):this.allowedAttributes.indexOf(n)<0&&(a=null),null==a||a.match(/s\n*c\n*r\n*i\n*p\n*t\n*:/i)?t.removeAttribute(n):o.value=a}},t.prototype.allowElement=function(t,e,r){var o=this.elementCallbacks[e];return o?o(t,r):this.allowedTags.indexOf(e)>=0||e.indexOf(":")>0},t}();function l(t){return[].slice.call(t)}e.default=u},2033:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(1585),n="BODY,H1,H2,H3,H4,H5,H6,FORM,P,BR,NOBR,HR,ACRONYM,ABBR,ADDRESS,B,BDI,BDO,BIG,BLOCKQUOTE,CENTER,CITE,CODE,DEL,DFN,EM,FONT,I,INS,KBD,MARK,METER,PRE,PROGRESS,Q,RP,RT,RUBY,S,SAMP,SMALL,STRIKE,STRONG,SUB,SUP,TEMPLATE,TIME,TT,U,VAR,WBR,XMP,INPUT,TEXTAREA,BUTTON,SELECT,OPTGROUP,OPTION,LABEL,FIELDSET,LEGEND,DATALIST,OUTPUT,IMG,MAP,AREA,CANVAS,FIGCAPTION,FIGURE,PICTURE,A,NAV,UL,OL,LI,DIR,UL,DL,DT,DD,MENU,MENUITEM,TABLE,CAPTION,TH,TR,TD,THEAD,TBODY,TFOOT,COL,COLGROUP,DIV,SPAN,HEADER,FOOTER,MAIN,SECTION,ARTICLE,ASIDE,DETAILS,DIALOG,SUMMARY,DATA".split(","),a="accept,align,alt,checked,cite,color,cols,colspan,contextmenu,coords,datetime,default,dir,dirname,disabled,download,face,headers,height,hidden,high,href,hreflang,ismap,kind,label,lang,list,low,max,maxlength,media,min,multiple,open,optimum,pattern,placeholder,readonly,rel,required,reversed,rows,rowspan,scope,selected,shape,size,sizes,span,spellcheck,src,srclang,srcset,start,step,style,tabindex,target,title,translate,type,usemap,value,width,wrap".split(","),i={"background-color":"transparent","border-bottom-color":"rgb(0, 0, 0)","border-bottom-style":"none","border-bottom-width":"0px","border-image-outset":"0","border-image-repeat":"stretch","border-image-slice":"100%","border-image-source":"none","border-image-width":"1","border-left-color":"rgb(0, 0, 0)","border-left-style":"none","border-left-width":"0px","border-right-color":"rgb(0, 0, 0)","border-right-style":"none","border-right-width":"0px","border-top-color":"rgb(0, 0, 0)","border-top-style":"none","border-top-width":"0px","outline-color":"transparent","outline-style":"none","outline-width":"0px",overflow:"visible","text-decoration":"none","-webkit-text-stroke-width":"0px","word-wrap":"break-word","margin-left":"0px","margin-right":"0px",padding:"0px","padding-top":"0px","padding-left":"0px","padding-right":"0px","padding-bottom":"0px",border:"0px","border-top":"0px","border-left":"0px","border-right":"0px","border-bottom":"0px","vertical-align":"baseline",float:"none"};function c(){return null}function u(t,e){var r=e.tagName;return!("LI"==r||"DIV"==r)}function l(t){return t.filter((function(t,e,r){return r.indexOf(t)==e}))}e.getAllowedTags=function(t){return l(n.concat(t||[])).map((function(t){return t.toUpperCase()}))},e.getAllowedAttributes=function(t){return l(a.concat(t||[])).map((function(t){return t.toLocaleLowerCase()}))},e.getDefaultStyleValues=function(t){var e=o.cloneObject(i);return t&&Object.keys(t).forEach((function(r){var o=t[r];null!=o?e[r]=o:delete e[r]})),e},e.getStyleCallbacks=function(t){var e=o.cloneObject(t);return e.position=e.position||c,e.width=e.width||u,e}},2233:function(t,e,r){"use strict";var o,n;r.d(e,"b",(function(){return o})),r.d(e,"a",(function(){return n})),function(t){t[t.button=0]="button",t[t.anchor=1]="anchor"}(o||(o={})),function(t){t[t.normal=0]="normal",t[t.primary=1]="primary",t[t.hero=2]="hero",t[t.compound=3]="compound",t[t.command=4]="command",t[t.icon=5]="icon",t[t.default=6]="default"}(n||(n={}))},2965:function(t,e,r){"use strict";var o=r(1291),n=r(1068),a=r(1575),i=r(1089),c=r(1137),u=r(1059),l=Object.prototype.hasOwnProperty,s=Object(a.a)((function(t,e){if(Object(c.a)(e)||Object(i.a)(e))Object(n.a)(e,Object(u.a)(e),t);else for(var r in e)l.call(e,r)&&Object(o.a)(t,r,e[r])}));e.a=s},385:function(t,e,r){"use strict";r.d(e,"b",(function(){return c})),r.d(e,"a",(function(){return u}));var o=r(0),n=r(14),a=r(324),i=function(){return{position:"absolute",width:1,right:31,top:8,bottom:8}};function c(t){var e,r,a,c,u,l=t.semanticColors,s=t.palette,d=l.buttonBackground,b=l.buttonBackgroundPressed,f=l.buttonBackgroundHovered,p=l.buttonText,g=l.buttonTextHovered,y=l.buttonTextChecked,h=l.buttonTextCheckedHovered;return{root:{backgroundColor:d,color:p},rootHovered:{backgroundColor:f,color:g,selectors:(e={},e[n.HighContrastSelector]={borderColor:"Highlight",color:"Highlight"},e)},rootPressed:{backgroundColor:b,color:y},rootExpanded:{backgroundColor:b,color:y},rootChecked:{backgroundColor:b,color:y},rootCheckedHovered:{backgroundColor:b,color:h},rootDisabled:{selectors:(r={},r[n.HighContrastSelector]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},r)},splitButtonContainer:{selectors:(a={},a[n.HighContrastSelector]={border:"none"},a)},splitButtonMenuButton:{color:s.white,backgroundColor:"transparent",selectors:{":hover":{backgroundColor:s.neutralLight,selectors:(c={},c[n.HighContrastSelector]={color:"Highlight"},c)}}},splitButtonMenuButtonDisabled:{backgroundColor:l.buttonBackgroundDisabled,selectors:{":hover":{backgroundColor:l.buttonBackgroundDisabled}}},splitButtonDivider:Object(o.__assign)(Object(o.__assign)({},i()),{backgroundColor:s.neutralTertiaryAlt,selectors:(u={},u[n.HighContrastSelector]={backgroundColor:"WindowText"},u)}),splitButtonDividerDisabled:{backgroundColor:t.palette.neutralTertiaryAlt},splitButtonMenuButtonChecked:{backgroundColor:s.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:s.neutralQuaternaryAlt}}},splitButtonMenuButtonExpanded:{backgroundColor:s.neutralQuaternaryAlt,selectors:{":hover":{backgroundColor:s.neutralQuaternaryAlt}}},splitButtonMenuIcon:{color:l.buttonText},splitButtonMenuIconDisabled:{color:l.buttonTextDisabled}}}function u(t){var e,r,c,u,l,s,d,b,f,p=t.palette,g=t.semanticColors;return{root:{backgroundColor:g.primaryButtonBackground,border:"1px solid "+g.primaryButtonBackground,color:g.primaryButtonText,selectors:(e={},e[n.HighContrastSelector]={color:"Window",backgroundColor:"WindowText",borderColor:"WindowText",MsHighContrastAdjust:"none"},e["."+a.a+" &:focus"]={selectors:{":after":{border:"none",outlineColor:p.white}}},e)},rootHovered:{backgroundColor:g.primaryButtonBackgroundHovered,border:"1px solid "+g.primaryButtonBackgroundHovered,color:g.primaryButtonTextHovered,selectors:(r={},r[n.HighContrastSelector]={color:"Window",backgroundColor:"Highlight",borderColor:"Highlight"},r)},rootPressed:{backgroundColor:g.primaryButtonBackgroundPressed,border:"1px solid "+g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed,selectors:(c={},c[n.HighContrastSelector]={color:"Window",backgroundColor:"WindowText",borderColor:"WindowText",MsHighContrastAdjust:"none"},c)},rootExpanded:{backgroundColor:g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed},rootChecked:{backgroundColor:g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed},rootCheckedHovered:{backgroundColor:g.primaryButtonBackgroundPressed,color:g.primaryButtonTextPressed},rootDisabled:{selectors:(u={},u[n.HighContrastSelector]={color:"GrayText",borderColor:"GrayText",backgroundColor:"Window"},u)},splitButtonContainer:{selectors:(l={},l[n.HighContrastSelector]={border:"none"},l)},splitButtonDivider:Object(o.__assign)(Object(o.__assign)({},i()),{backgroundColor:p.white,selectors:(s={},s[n.HighContrastSelector]={backgroundColor:"Window"},s)}),splitButtonMenuButton:{backgroundColor:g.primaryButtonBackground,color:g.primaryButtonText,selectors:(d={},d[n.HighContrastSelector]={backgroundColor:"WindowText"},d[":hover"]={backgroundColor:g.primaryButtonBackgroundHovered,selectors:(b={},b[n.HighContrastSelector]={color:"Highlight"},b)},d)},splitButtonMenuButtonDisabled:{backgroundColor:g.primaryButtonBackgroundDisabled,selectors:{":hover":{backgroundColor:g.primaryButtonBackgroundDisabled}}},splitButtonMenuButtonChecked:{backgroundColor:g.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:g.primaryButtonBackgroundPressed}}},splitButtonMenuButtonExpanded:{backgroundColor:g.primaryButtonBackgroundPressed,selectors:{":hover":{backgroundColor:g.primaryButtonBackgroundPressed}}},splitButtonMenuIcon:{color:g.primaryButtonText},splitButtonMenuIconDisabled:{color:p.neutralTertiary,selectors:(f={},f[n.HighContrastSelector]={color:"GrayText"},f)}}}},432:function(t,e,r){"use strict";var o=r(0),n=r(1),a=r(345),i=r(427),c=r(420),u=r(14),l=r(244),s=r(346),d=r(384),b=r(385),f=Object(l.c)((function(t,e,r){var o=Object(s.a)(t),n=Object(d.a)(t),a={root:{minWidth:"80px",height:"32px"},label:{fontWeight:u.FontWeights.semibold}};return Object(u.concatStyleSets)(o,a,r?Object(b.a)(t):Object(b.b)(t),n,e)}));r.d(e,"a",(function(){return p}));var p=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(o.__extends)(e,t),e.prototype.render=function(){var t=this.props,e=t.primary,r=void 0!==e&&e,c=t.styles,u=t.theme;return n.createElement(a.a,Object(o.__assign)({},this.props,{variantClassName:r?"ms-Button--primary":"ms-Button--default",styles:f(u,c,r),onRenderDescription:i.b}))},e=Object(o.__decorate)([Object(c.a)("DefaultButton",["theme","styles"],!0)],e)}(n.Component)},705:function(t,e,r){"use strict";r.d(e,"a",(function(){return u}));var o=r(0),n=r(1),a=r(427),i=r(420),c=r(432),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return Object(o.__extends)(e,t),e.prototype.render=function(){return n.createElement(c.a,Object(o.__assign)({},this.props,{primary:!0,onRenderDescription:a.b}))},e=Object(o.__decorate)([Object(i.a)("PrimaryButton",["theme","styles"],!0)],e)}(n.Component)},987:function(t,e,r){"use strict";var o,n=r(1180),a=r(480).a["__core-js_shared__"],i=(o=/[^.]+$/.exec(a&&a.keys&&a.keys.IE_PROTO||""))?"Symbol(src)_1."+o:"";var c=function(t){return!!i&&i in t},u=r(429),l=r(1223),s=/^\[object .+?Constructor\]$/,d=Function.prototype,b=Object.prototype,f=d.toString,p=b.hasOwnProperty,g=RegExp("^"+f.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var y=function(t){return!(!Object(u.a)(t)||c(t))&&(Object(n.a)(t)?g:s).test(Object(l.a)(t))};var h=function(t,e){return null==t?void 0:t[e]};e.a=function(t,e){var r=h(t,e);return y(r)?r:void 0}}}]);
//# sourceMappingURL=owa.vendors~ActionableMessageMail.js.map
self.scriptsLoaded['owa.vendors~ActionableMessageMail.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.vendors~ActionableMessageMail.js'] = (new Date()).getTime();