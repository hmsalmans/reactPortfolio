self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.vendors~AttachmentPreviewSxSInitialize.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[678],{1005:function(e,t,r){"use strict";function n(e){var t=e&&(e.commonAncestorContainer||e),r=t&&(t.ownerDocument||("[object HTMLDocument]"==Object.prototype.toString.apply(t)?t:null));return r&&(r.defaultView||window)}Object.defineProperty(t,"__esModule",{value:!0}),t.getTargetWindow=n,t.default=function(e,t){var r=n(e),i=r&&r[t],o=window,l=o&&o[t];return l&&e instanceof l||i&&e instanceof i}},1146:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1855);t.isDocumentFragment=n.default;var i=r(1856);t.isHTMLElement=i.default;var o=r(1857);t.isHTMLOListElement=o.default;var l=r(1858);t.isHTMLTableCellElement=l.default;var a=r(1859);t.isHTMLTableElement=a.default;var s=r(1860);t.isNode=s.default;var u=r(1861);t.isRange=u.default;var c=r(1005);t.safeInstanceOf=c.default},1421:function(e,t,r){"use strict";e.exports=function(e,t){return"string"!=typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),/["'() \t\n]/.test(e)||t?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},1583:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="border-spacing,caption-side,color,cursor,direction,empty-cells,font-family,font-size,font-style,font-variant,font-weight,font,letter-spacing,line-height,list-style-image,list-style-position,list-style-type,list-style,orphans,quotes,text-align,text-indent,text-transform,visibility,white-space,widows,word-spacing".split(",");t.default=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView,r=t&&t.getComputedStyle(e),i={};return n.forEach((function(e){return i[e]=r&&r.getPropertyValue(e)||""})),i}},1584:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="\x3c!--StartFragment--\x3e",i="\x3c!--EndFragment--\x3e";function o(e,t){var r=l(t)[0];e.body.innerHTML=r}function l(e){var t=e.indexOf(n),r=e.lastIndexOf(i);if(t>=0&&r>=0&&r>=t+n.length){var o=e.substr(0,t),l=e.substr(r+i.length);return[e=e.substring(t+n.length,r),o,l]}return[e,null,null]}t.default=function(e,t,r){var n=(new DOMParser).parseFromString(e||"","text/html");return n&&n.body&&n.body.firstChild?(t&&(r||o)(n,e),n):null},t.splitWithFragment=l},1585:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.cloneObject=Object.assign?function(e,t){return Object.assign(t||{},e)}:function(e,t){var r=t||{};if(e)for(var n=0,i=Object.keys(e);n<i.length;n++){var o=i[n];r[o]=e[o]}return r}},1694:function(e,t,r){var n=r(1241);e.exports=function(e,t){var r=n(e).getTime(),i=Number(t);return new Date(r+i)}},1722:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(2032);t.HtmlSanitizer=n.default;var i=r(1584);t.htmlToDom=i.default,t.splitWithFragment=i.splitWithFragment;var o=r(1583);t.getInheritableStyles=o.default},1736:function(e,t,r){var n=r(1694),i=6e4;e.exports=function(e,t){var r=Number(t);return n(e,r*i)}},1855:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1005);t.default=function(e){return n.default(e,"DocumentFragment")}},1856:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1005);t.default=function(e){return n.default(e,"HTMLElement")}},1857:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1005);t.default=function(e){return n.default(e,"HTMLOListElement")}},1858:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1005);t.default=function(e){return n.default(e,"HTMLTableCellElement")}},1859:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1005);t.default=function(e){return n.default(e,"HTMLTableElement")}},1860:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1005);t.default=function(e){return n.default(e,"Node")}},1861:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1005);t.default=function(e){return n.default(e,"Range")}},2032:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1583),i=r(1584),o=r(1585),l=r(1146),a=r(2033),s=function(){function e(e){e=e||{},this.elementCallbacks=o.cloneObject(e.elementCallbacks),this.styleCallbacks=a.getStyleCallbacks(e.styleCallbacks),this.attributeCallbacks=o.cloneObject(e.attributeCallbacks),this.allowedTags=a.getAllowedTags(e.additionalAllowedTags),this.allowedAttributes=a.getAllowedAttributes(e.additionalAllowAttributes),this.defaultStyleValues=a.getDefaultStyleValues(e.additionalDefaultStyleValues),this.additionalGlobalStyleNodes=e.additionalGlobalStyleNodes||[],this.allowPreserveWhiteSpace=e.allowPreserveWhiteSpace}return e.convertInlineCss=function(t,r){return new e({additionalGlobalStyleNodes:r}).exec(t,!0)},e.sanitizeHtml=function(t,r){var i=new e(r=r||{}),o=l.isHTMLElement(r.currentElementOrStyle)?n.default(r.currentElementOrStyle):r.currentElementOrStyle;return i.exec(t,r.convertCssOnly,r.preserveFragmentOnly,o)},e.prototype.exec=function(e,t,r,n){var o=i.default(e,r);return o&&(this.convertGlobalCssToInlineCss(o),t||this.sanitize(o.body,n)),o&&o.body&&o.body.innerHTML||""},e.prototype.sanitize=function(e,t){if(!e)return"";t=o.cloneObject(t,n.default(null)),this.processNode(e,t,{})},e.prototype.convertGlobalCssToInlineCss=function(e){for(var t=u(e.querySelectorAll("style")),r=0,n=this.additionalGlobalStyleNodes.reverse().map((function(e){return e.sheet})).concat(t.map((function(e){return e.sheet})).reverse()).filter((function(e){return e}));r<n.length;r++)for(var i=n[r],o=function(t){var r=i.cssRules[t],n=r&&r.style?r.style.cssText:null;if(r.type!=CSSRule.STYLE_RULE||!n||!r.selectorText)return"continue";for(var o=0,l=r.selectorText.split(",");o<l.length;o++){var a=l[o];if(a&&a.trim()&&!(a.indexOf(":")>=0))u(e.querySelectorAll(a)).forEach((function(e){return e.setAttribute("style",n+(e.getAttribute("style")||""))}))}},l=i.cssRules.length-1;l>=0;l--)o(l);t.forEach((function(e){e.parentNode&&e.parentNode.removeChild(e)}))},e.prototype.processNode=function(e,t,r){var n=e.nodeType,i=n==Node.ELEMENT_NODE,l=n==Node.TEXT_NODE,a=e,s=i?a.tagName.toUpperCase():"";if(i&&!this.allowElement(a,s,r)||l&&/^[\r\n]*$/g.test(e.nodeValue)&&!t.insidePRE||!i&&!l)e.parentNode.removeChild(e);else if(l&&!this.allowPreserveWhiteSpace&&"pre"==t["white-space"])e.nodeValue=e.nodeValue.replace(/^ /gm," ").replace(/ {2}/g,"  ");else if(i){var u=o.cloneObject(t);this.processAttributes(a,r),this.processCss(a,s,u,r),"PRE"==s&&(u.insidePRE="true");for(var c=a.firstChild,d=void 0;c;c=d)d=c.nextSibling,this.processNode(c,u,r)}},e.prototype.processCss=function(e,t,r,n){var i=this,o=e.getAttributeNode("style");if(o){var l=o.value.split(";"),a=l.filter((function(t){var o;if(!t||""==t.trim()||2!=(o=t.split(":")).length)return!1;var l=o[0].trim().toLowerCase(),a=o[1].trim().toLowerCase(),s=i.styleCallbacks[l],u=null!=r[l],c=(!s||s(a,e,n))&&"inherit"!=a&&a.indexOf("expression")<0&&"-"!=l.substr(0,1)&&i.defaultStyleValues[l]!=a&&(u&&a!=r[l]||!u&&"initial"!=a&&"normal"!=a);return c&&u&&(r[l]=a),c&&(i.allowPreserveWhiteSpace||"white-space"!=l)}));l.length!=a.length&&(a.length>0?e.setAttribute("style",a.map((function(e){return e.trim()})).join("; ")):e.removeAttribute("style"))}},e.prototype.processAttributes=function(e,t){for(var r=e.attributes.length-1;r>=0;r--){var n=e.attributes[r],i=n.name.toLowerCase().trim(),o=n.value,l=this.attributeCallbacks[i];l?o=l(o,e,t):this.allowedAttributes.indexOf(i)<0&&(o=null),null==o||o.match(/s\n*c\n*r\n*i\n*p\n*t\n*:/i)?e.removeAttribute(i):n.value=o}},e.prototype.allowElement=function(e,t,r){var n=this.elementCallbacks[t];return n?n(e,r):this.allowedTags.indexOf(t)>=0||t.indexOf(":")>0},e}();function u(e){return[].slice.call(e)}t.default=s},2033:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1585),i="BODY,H1,H2,H3,H4,H5,H6,FORM,P,BR,NOBR,HR,ACRONYM,ABBR,ADDRESS,B,BDI,BDO,BIG,BLOCKQUOTE,CENTER,CITE,CODE,DEL,DFN,EM,FONT,I,INS,KBD,MARK,METER,PRE,PROGRESS,Q,RP,RT,RUBY,S,SAMP,SMALL,STRIKE,STRONG,SUB,SUP,TEMPLATE,TIME,TT,U,VAR,WBR,XMP,INPUT,TEXTAREA,BUTTON,SELECT,OPTGROUP,OPTION,LABEL,FIELDSET,LEGEND,DATALIST,OUTPUT,IMG,MAP,AREA,CANVAS,FIGCAPTION,FIGURE,PICTURE,A,NAV,UL,OL,LI,DIR,UL,DL,DT,DD,MENU,MENUITEM,TABLE,CAPTION,TH,TR,TD,THEAD,TBODY,TFOOT,COL,COLGROUP,DIV,SPAN,HEADER,FOOTER,MAIN,SECTION,ARTICLE,ASIDE,DETAILS,DIALOG,SUMMARY,DATA".split(","),o="accept,align,alt,checked,cite,color,cols,colspan,contextmenu,coords,datetime,default,dir,dirname,disabled,download,face,headers,height,hidden,high,href,hreflang,ismap,kind,label,lang,list,low,max,maxlength,media,min,multiple,open,optimum,pattern,placeholder,readonly,rel,required,reversed,rows,rowspan,scope,selected,shape,size,sizes,span,spellcheck,src,srclang,srcset,start,step,style,tabindex,target,title,translate,type,usemap,value,width,wrap".split(","),l={"background-color":"transparent","border-bottom-color":"rgb(0, 0, 0)","border-bottom-style":"none","border-bottom-width":"0px","border-image-outset":"0","border-image-repeat":"stretch","border-image-slice":"100%","border-image-source":"none","border-image-width":"1","border-left-color":"rgb(0, 0, 0)","border-left-style":"none","border-left-width":"0px","border-right-color":"rgb(0, 0, 0)","border-right-style":"none","border-right-width":"0px","border-top-color":"rgb(0, 0, 0)","border-top-style":"none","border-top-width":"0px","outline-color":"transparent","outline-style":"none","outline-width":"0px",overflow:"visible","text-decoration":"none","-webkit-text-stroke-width":"0px","word-wrap":"break-word","margin-left":"0px","margin-right":"0px",padding:"0px","padding-top":"0px","padding-left":"0px","padding-right":"0px","padding-bottom":"0px",border:"0px","border-top":"0px","border-left":"0px","border-right":"0px","border-bottom":"0px","vertical-align":"baseline",float:"none"};function a(){return null}function s(e,t){var r=t.tagName;return!("LI"==r||"DIV"==r)}function u(e){return e.filter((function(e,t,r){return r.indexOf(e)==t}))}t.getAllowedTags=function(e){return u(i.concat(e||[])).map((function(e){return e.toUpperCase()}))},t.getAllowedAttributes=function(e){return u(o.concat(e||[])).map((function(e){return e.toLocaleLowerCase()}))},t.getDefaultStyleValues=function(e){var t=n.cloneObject(l);return e&&Object.keys(e).forEach((function(r){var n=e[r];null!=n?t[r]=n:delete t[r]})),t},t.getStyleCallbacks=function(e){var t=n.cloneObject(e);return t.position=t.position||a,t.width=t.width||s,t}},241:function(e,t,r){"use strict";function n(){var e=Object.create(null),t=0,r=0,n=0,i=!1;function o(t){n--,delete e[t]}this.put=function(t,r,i,l){if(void 0!==i&&("number"!=typeof i||isNaN(i)||i<=0))throw new Error("Cache timeout must be a positive number");if(void 0!==l&&"function"!=typeof l)throw new Error("Cache timeout callback must be a function");var a=e[t];a?clearTimeout(a.timeout):n++;var s={value:r,expire:i+Date.now()};return isNaN(s.expire)||(s.timeout=setTimeout(function(){o(t),l&&l(t,r)}.bind(this),i)),e[t]=s,r},this.del=function(t){var r=!0,n=e[t];return n?(clearTimeout(n.timeout),!isNaN(n.expire)&&n.expire<Date.now()&&(r=!1)):r=!1,r&&o(t),r},this.clear=function(){for(var o in e)clearTimeout(e[o].timeout);n=0,e=Object.create(null),i&&(t=0,r=0)},this.get=function(o){var l=e[o];if(void 0!==l){if(isNaN(l.expire)||l.expire>=Date.now())return i&&t++,l.value;i&&r++,n--,delete e[o]}else i&&r++;return null},this.size=function(){return n},this.memsize=function(){var t,r=0;for(t in e)r++;return r},this.debug=function(e){i=e},this.hits=function(){return t},this.misses=function(){return r},this.keys=function(){return Object.keys(e)},this.exportJson=function(){var t={};for(var r in e){var n=e[r];t[r]={value:n.value,expire:n.expire||"NaN"}}return JSON.stringify(t)},this.importJson=function(t,r){var n=JSON.parse(t),i=Date.now(),o=r&&r.skipDuplicates;for(var l in n)if(n.hasOwnProperty(l)){if(o)if(e[l])continue;var a=n[l],s=a.expire-i;if(s<=0){this.del(l);continue}s=s>0?s:void 0,this.put(l,a.value,s)}return this.size()}}e.exports=new n,e.exports.Cache=n},2975:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return{snapshots:[],totalSize:0,currentIndex:-1,maxSize:e}}}}]);
//# sourceMappingURL=owa.vendors~AttachmentPreviewSxSInitialize.js.map
self.scriptsLoaded['owa.vendors~AttachmentPreviewSxSInitialize.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.vendors~AttachmentPreviewSxSInitialize.js'] = (new Date()).getTime();