self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.AllowedOptions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[124],{14763:function(t,e,n){"use strict";n.r(e);var o=n(4),r=n(3698),i=Object(o.mutatorAction)("SET_ALLOWED_OPTIONS",(function(t){Object(r.a)().allowedOptions=t})),c=n(24),u=n(0);function a(t,e){var n;return void 0===t||t.__type||(n=t,t=Object(u.__assign)({__type:"GetAllowedOptionsRequest:#Exchange"},n)),Object(c.a)("GetAllowedOptions",t,e)}var d=n(423);var O=void 0;function s(){return O||(O=a({Header:Object(d.b)()}).then((function(t){return i(t.AllowedOptions)}))),O}n.d(e,"loadAllowedOptions",(function(){return s}))},423:function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"a",(function(){return a}));var o=n(276),r=n(304),i=n(303),c=n(296);function u(t){return Object(o.a)({RequestServerVersion:"Exchange2015",TimeZoneContext:Object(r.a)({TimeZoneDefinition:Object(i.a)({Id:null!=t?t:"Pacific Standard Time"})})})}function a(t,e,n){return Object(c.a)({PropertySetId:t,PropertyName:e,PropertyType:n})}}}]);
//# sourceMappingURL=owa.AllowedOptions.js.map
self.scriptsLoaded['owa.AllowedOptions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.AllowedOptions.js'] = (new Date()).getTime();