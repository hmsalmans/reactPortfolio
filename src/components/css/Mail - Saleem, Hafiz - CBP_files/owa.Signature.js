self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.Signature.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[538],{10372:function(t,e,n){"use strict";n.r(e);var r,a=n(0),u=n(287),i=n(4),c=n(3351),o=Object(i.mutatorAction)("setDefaultSignatureName",(function(t,e){e?Object(c.a)().defaultReplySignatureName=t:Object(c.a)().defaultSignatureName=t})),l=Object(i.mutatorAction)("setLegacySignatureInStore",(function(t,e){"html"==t?Object(c.a)().legacySignature.html=e:"txt"==t&&(Object(c.a)().legacySignature.txt=e)})),s=Object(i.mutatorAction)("setRoamingSignatureInStore",(function(t){var e=Object(c.a)().roamingSignatureMap;if("htm"==t.secondaryKey)(n=e.get(t.name))?n.html=t:n={html:t,txt:null},e.set(t.name,n);else if("txt"==t.secondaryKey){var n;(n=e.get(t.name))?n.txt=t:n={html:null,txt:t},e.set(t.name,n)}})),g=n(7880);function f(){return Object(a.__awaiter)(this,void 0,void 0,(function(){return Object(a.__generator)(this,(function(t){return r||(r=Object(u.b)(g.a+"?settingname="+g.d+","+g.f+","+g.e+","+g.c+","+g.b).then((function(t){t.forEach((function(t){switch(t.name){case g.d:l("html",t);break;case g.f:l("txt",t);break;case g.e:e=t.value,Object(u.b)(g.a+"?settingname="+e,null,!1,{"x-islargesetting":!0}).then((function(t){t.forEach((function(t){s(t)}))}));break;case g.c:o(t.value,!1);break;case g.b:o(t.value,!0)}var e}))}))),[2,r]}))}))}var m=n(4081),b=n(76),d=n(26);function h(){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,e;return Object(a.__generator)(this,(function(n){if(Object(b.h)("cmp-roaming-signature")){if(null===(t=Object(c.a)()).legacySignature.html||null===t.legacySignature.txt)return[2,f()]}else if(null===(e=Object(d.a)().UserOptions).SignatureHtml||null===e.SignatureText)return[2,m.a.importAndExecute()];return[2,Promise.resolve()]}))}))}n.d(e,"loadSignature",(function(){return h}))},3351:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return c}));var r=n(23),a=n(4),u={legacySignature:{html:null,txt:null},roamingSignatureMap:new r.ObservableMap,defaultSignatureName:"",defaultReplySignatureName:""},i=Object(a.createStore)("signature",u),c=i()},4081:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n(108),a=new r.c((function(){return n.e(412).then(n.bind(null,6361))})),u=new r.a(a,(function(t){return t.loadSignatureInUserOptions}))},7880:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"b",(function(){return i})),n.d(e,"d",(function(){return c})),n.d(e,"f",(function(){return o}));var r="/ows/beta/OutlookCloudSettings/settings/account",a="roaming_signature_list",u="roaming_new_signature",i="roaming_reply_signature",c="signaturehtml",o="signaturetxt"}}]);
//# sourceMappingURL=owa.Signature.js.map
self.scriptsLoaded['owa.Signature.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.Signature.js'] = (new Date()).getTime();