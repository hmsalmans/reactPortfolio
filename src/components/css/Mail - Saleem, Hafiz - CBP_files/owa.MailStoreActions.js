self.scriptsLoaded = self.scriptsLoaded || {}; self.scriptProcessStart = self.scriptProcessStart || {}; self.scriptProcessStart['owa.MailStoreActions.js'] = (new Date()).getTime();(window.$wj=window.$wj||[]).push([[404],{1017:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(295),o=t(985),r=t(76);function i(){var e;return(e={})[o.a.SmartSuggestions]={smartSuggestionsEnabled:!0,browserLocationEnabled:!1},e[o.a.DiverseEmojis]={diverseEmojisSelectedSkinTone:""},e[o.a.SurfaceActions]={readSurfaceActions:["Reply","ReplyAll","Forward"].concat(Object(a.a)()?[]:["LikeUnlike"]),readSurfaceAddins:[],composeSurfaceActions:["AddAttachment","AddInlineImage","AddEmoji","ToggleDictation","ProofingOptions","QuickUse","ToggleRibbon","FluidHeroButton"],composeSurfaceAddins:[]},e[o.a.SkypeNotifications]={skypeMessageNotification:1,skypeCallingNotification:1},e[o.a.Confetti]={confettiEnabled:!0},e[o.a.ComposeAssistance]={composeAssistanceEnabled:!0},e[o.a.GdprAdsPrefs]={feature:o.a.GdprAdsPrefs,consentString:null,allowStorageAndAccess:!1,allowPersonalization:!1,allowAdSelectionDeliveryReporting:!1,allowContentSelectionDeliveryReporting:!1,allowMeasurement:!1},e[o.a.CalendarSurfaceAddins]={calendarSurfaceAddins:[]},e[o.a.ExternalImages]={externalImagesSelectedOption:0},e[o.a.EventCapture]={autoCollectionEnabled:!1},e[o.a.Translation]={translationMode:0,targetLanguage:"",excludedLanguages:[]},e[o.a.CalendarSurfaceOptions]={agendaPaneIsClosed:!1,roamingTimeZoneTeachingMomentDisplayed:!1,bannedRoamingTimeZone:null,lastKnownRoamingTimeZone:null,roamingTimeZoneNotificationsIsDisabled:!1,allDayWellHeight:0,numDaysInDayRange:1,workLifeView:3},e[o.a.AmpDeveloper]={enabled:Object(r.h)("rp-ampDefault"),allowedSender:[]},e[o.a.CalendarHelp]={calendarHelpEnabled:!1},e[o.a.LinkedInViewProfile]={dismissed:!1},e[o.a.Bohemia]={bohemiaEnabled:Object(r.h)("cmp-prague")},e[o.a.GdprAdsV2]={feature:o.a.GdprAdsV2,consentString:null,allowStorageAndAccess:!0,allowPersonalization:!0,allowAdSelectionDeliveryReporting:!0,allowContentSelectionDeliveryReporting:!0,allowMeasurement:!0,disselectedVendorId:[],selectedVendorId:[]},e[o.a.GdprAdsV3]={feature:o.a.GdprAdsV3,encodedTCString:null,allStoreAndAccessDevice:!1,allowDevelopAndImproveProduct:!1,allowPersonalisedAds:!1,allowPersonalisedAdsSelectBasicAd:!1,allowPersonalisedAdsApplyMarketResearch:!1,allowPersonalisedAdsMeasureContentPerformance:!1,allowPersonalisedAdsSelectPersonalisedAds:!1,allowPersonalisedAdsMeasureAdPerf:!1,allowPersonalisedAdsSelectPersonalisedContent:!1,allowPersonalisedAdsCreatePersonalisedContentProfile:!1,allowPersonalisedAdsCreatePersonalisedAdsProfile:!1,allowPreciseGeoDataAndIdentifyDevice:!1,allowPreciseGeoDataAndIdentifyDeviceScanDevice:!1,allowPreciseGeoDataAndIdentifyDeviceGeoData:!1,disselectedVendorId:[],selectedVendorId:[]},e[o.a.Proofing]={feature:o.a.Proofing,spellCheckEnabled:!0,grammarEnabled:!0,writingRefinementsEnabled:!0,proofingLocale:void 0,overriddenOptions:void 0},e[o.a.ActiveProxyAddress]={feature:o.a.ActiveProxyAddress,activeProxyAddresses:[]},e[o.a.OutlookSpaces]={feature:o.a.OutlookSpaces,backgroundColor:"",gestureScheme:"pointer",toolboxCollapsed:!0},e[o.a.SxS]={feature:o.a.SxS,hideReadingPane:!1},e}},1189:function(e,n,t){"use strict";t.d(n,"e",(function(){return"{id}"})),t.d(n,"f",(function(){return"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAEALAAAAAABAAEAAAIBTAA7"})),t.d(n,"a",(function(){return"data-custom"})),t.d(n,"c",(function(){return"originalsrc"})),t.d(n,"b",(function(){return"data-loadstatus"})),t.d(n,"d",(function(){return"pending"}))},1233:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(4),o=t(1017),r=Object(a.action)("APPLY_DEFAULT_OPTIONS_ON_LOAD_FAIL",(function(e){return void 0===e&&(e=Object(o.a)()),{defaultOptions:e}}))},1311:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(960),o=t(103);function r(){var e=!0;if(Object(o.u)()){var n=Object(a.d)(a.a.ExternalImages);e=null===n.externalImagesSelectedOption||0===n.externalImagesSelectedOption}else{var t=Object(o.i)().PolicySettings;e=void 0===t.ExternalImageProxyEnabled||t.ExternalImageProxyEnabled}return e}},14620:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t(962),r=t(4807),i=t(283),s=t(1419),d=function(e,n){var t=e,a=n;t.ToRecipients=a.ToRecipients,t.CcRecipients=a.CcRecipients,t.BccRecipients=a.BccRecipients};function c(e){return Object(a.__awaiter)(this,void 0,void 0,(function(){var n,t,i;return Object(a.__generator)(this,(function(a){switch(a.label){case 0:return(n=Object(r.a)()).MaximumRecipientsToReturn=0,[4,Object(o.g)([e.ItemId.Id],n,"ItemPart")];case 1:return t=a.sent(),Object(s.a)(t[0])&&(i=t[0],d(e,i.Items[0])),[2]}}))}))}d=Object(i.action)("updateItemRecipients")(d);var l=t(255),u=t(1974),f=Object(i.action)("getItemTailoredXpData")(Object(i.select)({items:function(){return o.w.items}})((function(e,n){var t=e.ItemId.Id,a=e.TailoredXpEntitiesChangeNumber;if(a&&a>0){var r=n.items.get(t),s=(null==r?void 0:r.TailoredXpEntitiesChangeNumber)?r.TailoredXpEntitiesChangeNumber:0;if((!r||s<a)&&!e.TailoredXpEntities){var d=new l.a("RPPerfGetTailoredXpData"),c=Object(u.a)("TXPLoadMail");Object(o.v)(t).then(Object(i.action)("updateTailoredXpEntities")((function(e){var a=n.items.get(t);a&&(a.TailoredXpEntities=e.TailoredXpEntities,a.TailoredXpCalendarEventIds=e.TailoredXpCalendarEventIds,a.TailoredXpEntitiesStatus=e.TailoredXpEntitiesStatus,a.EntityNamesMap=e.EntityNamesMap),d.end(),c.end()}))).catch((function(e){d.endWithError("ServerError",e),c.endWithError("ServerError",e)}))}}}))),m=t(8094);function p(e){return!(!e.YammerNotification&&!e.ExtensibleContentData)&&(Object(l.o)("Yammer_PrefetchHit"),m.b.import().then((function(e){return e()})),!0)}function g(e){return e&&"Success"!=e.ResponseClass?[e.ResponseCode,e.StackTrace]:[null,null]}var v=[{name:"ItemClass",shouldInitializeUndefinedToNull:!1},{name:"LastModifiedTime",shouldInitializeUndefinedToNull:!1},{name:"DateTimeReceived",shouldInitializeUndefinedToNull:!1},{name:"ParentFolderId",shouldInitializeUndefinedToNull:!1},{name:"SystemCategories",shouldInitializeUndefinedToNull:!1},{name:"Hashtags",shouldInitializeUndefinedToNull:!1},{name:"PredictedActionReasons",shouldInitializeUndefinedToNull:!1},{name:"Flag",shouldInitializeUndefinedToNull:!1},{name:"IsRead",shouldInitializeUndefinedToNull:!1},{name:"Size",shouldInitializeUndefinedToNull:!1},{name:"IsClutter",shouldInitializeUndefinedToNull:!1},{name:"IconIndex",shouldInitializeUndefinedToNull:!1},{name:"Categories",shouldInitializeUndefinedToNull:!0},{name:"Likers",shouldInitializeUndefinedToNull:!0},{name:"LikeCount",shouldInitializeUndefinedToNull:!0},{name:"AdjacentMeetings",shouldInitializeUndefinedToNull:!0},{name:"ConflictingMeetings",shouldInitializeUndefinedToNull:!0},{name:"DeferredSendTime",shouldInitializeUndefinedToNull:!0},{name:"IsSubmitted",shouldInitializeUndefinedToNull:!0},{name:"YammerThreadId",shouldInitializeUndefinedToNull:!1}],S=function(e){v.forEach((function(n){n.shouldInitializeUndefinedToNull&&void 0===e[n.name]&&(e[n.name]=null)}))};function I(e){return["PrefetchFirstN","PrefetchSingleRow","PrefetchRowInCache","PrefetchAdjacentRowsOnDelay"].includes(e)}var b=function(e,n){Object.keys(n).forEach((function(t){void 0===e[t]&&(e[t]=n[t])}))},h=t(964);var A=t(3651);function O(e){Object(A.a)()&&function(e,n){var t;e&&n&&(e.AdditionalProperties||(e.AdditionalProperties=[]),(t=e.AdditionalProperties).push.apply(t,Object(a.__spread)(n)))}(e,[Object(h.a)({FieldURI:"AmpHtmlBody"})])}var C=t(5766),T=t(1807),P=t(2609),w=t(79),y=t(5758),j=t(2926),E=t(76),D=t(316),x="X-OWA-ActionSource",N="X-RedirectToOutlookService";var R=Object(i.action)("parseItemResponse")((function(e,n){return Object(a.__awaiter)(this,void 0,void 0,(function(){var t,r,i;return Object(a.__generator)(this,(function(s){switch(s.label){case 0:return(t=o.w.items.get(n.Id))&&b(e,t),Object(C.a)()&&p(e),S(e),r=Object(a.__assign)(Object(a.__assign)({Smime:null,TranslationData:{isShowingTranslation:!1,isTranslatable:!1,isTranslating:!1,shouldGetFeedback:!1,isShowingSubjectTranslation:!1,isShowingForwardContentTranslation:!1,isForwardContentTranslatable:!1,manuallyTranslated:!1,userLanguage:null,isWrongLanguage:null},adaptiveCardDetails:null},e),{MailboxInfo:n.mailboxInfo,SmartReplyData:null,SmartTimeData:null,SmartTaskData:null,SmartTimeExtendedProperty:null,smartPillFeedbackSubmitted:!1,itemCLPInfo:null,SIGSData:{SmartPillData:null}}),o.w.items.set(n.Id,r),i=o.w.items.get(n.Id),f(i),Object(P.a)(t)?[4,T.l.importAndExecute(i,t)]:[3,2];case 1:s.sent(),s.label=2;case 2:return[2]}}))}))}));function M(e,n,t,i){var d,c;t&&(c=t.addCheckmark("request_start"));var l={};D(l,null===(d=e.mailboxInfo)||void 0===d?void 0:d.requestOptions);var u=l.headers?new Headers(l.headers):new Headers;i&&u.set(j.c,j.d),u.set(x,n),Object(E.h)("platform-redirectGetItemToOutlookService")&&u.set(N,"true"),l.headers=u,l.datapoint={customData:{actionSource:n}};var f=Object(r.a)();return O(f),Object(y.a)(f),Object(o.c)(f),Object(o.g)([e.Id],f,"ItemNormalizedBody","V2017_08_18",l).then((function(r){if(t){var i=t.addCheckmark("request_end");t.addCustomData({requestTime:i-c})}if(Object(s.a)(null==r?void 0:r[0])){var d=r[0];return R(d.Items[0],e).then((function(){return o.w.items.get(e.Id)}))}switch(n){case"PrefetchFirstN":case"PrefetchSingleRow":case"PrefetchRowInCache":case"PrefetchAdjacentRowsOnDelay":break;default:w.g.warn(n+": "+r[0].MessageText)}var l=Object(a.__read)(g(r[0]),2),u=l[0],f=l[1];return u?Promise.reject(new Error("ErrorResponseCode="+u+", StackTrace="+f)):Promise.resolve(null)})).catch((function(e){return e.message+=", ActionSource="+n,I(n)?Promise.resolve():Promise.reject(e)}))}var k=t(1657),_=Object(i.action)("getConversationTailoredXpData")(Object(i.select)({items:function(){return o.w.items}})((function(e,n,t){Object(o.e)(e,n).Items.forEach((function(e){f(e,t)}))}))),L=t(1498);function F(e,n){return{conversationId:e,conversationNodeIds:[],conversationSortOrder:n,canLoadMore:!1,isLoadMoreInProgress:!1,maxItemsToReturn:L.a,loadingState:{isLoading:!1},syncState:"",isPendingDelete:!1,pendingRequestState:null,canDelete:null,subjectTranslationData:{isShowingTranslation:!1}}}var U=t(1764),V=t(2386),G="ChronologicalNewestOnBottom",z="PLACEHOLDER_NODE_INTERNET_MESSAGE_ID",B=function(e){return e.InternetMessageId},q=function(e){return e.ItemId.Id};function Q(e,n,t){var o=function(e,n){var t=[];return e.forEach((function(e){t.push(n(e))})),t}(n,t);if(function(e,n){if(e.length!=n.length)return!0;for(var t=0;t<e.length;t++)if(e[t]!=n[t])return!0;return!1}(e,o)){var r=function(e,n){var t=[];return e.forEach((function(e){n.indexOf(e)<0&&t.push(e)})),t}(e,o),i=e.length;return e.splice.apply(e,Object(a.__spread)([0,i],o)),[!0,r]}return[!1,[]]}function H(e,n){Object(U.a)(e,1)}function X(e,n,t,r,i,s){!function(e,n,t,r,i){if(e.length>0){var s=i==G,d=s?e.length-1:0,c=t.get(e[d]);if(c.localLieState==o.a.Pending){var l=!0,u=function(e,n){return n.internetMessageId==z?n.itemIds&&n.itemIds.length>0?function(e,n){var t,o,r,i;try{for(var s=Object(a.__values)(e),d=s.next();!d.done;d=s.next()){var c=d.value;try{for(var l=(r=void 0,Object(a.__values)(c.Items)),u=l.next();!u.done;u=l.next()){if(u.value.ItemId.Id==n)return c}}catch(e){r={error:e}}finally{try{u&&!u.done&&(i=l.return)&&i.call(l)}finally{if(r)throw r.error}}}}catch(e){t={error:e}}finally{try{d&&!d.done&&(o=s.return)&&o.call(s)}finally{if(t)throw t.error}}return null}(e,n.itemIds[0]):null:function(e,n){var t,o;try{for(var r=Object(a.__values)(e),i=r.next();!i.done;i=r.next()){var s=i.value;if(B(s)==n)return s}}catch(e){t={error:e}}finally{try{i&&!i.done&&(o=r.return)&&o.call(r)}finally{if(t)throw t.error}}return null}(e,n.internetMessageId)}(n,c);u&&(u.Items[0].IsDraft?n.splice(n.indexOf(u),1):(l=!1,function(e,n){e.localLieState=o.a.Complete,e.hasQuotedText=n.HasQuotedText,e.isQuotedTextChanged=n.IsQuotedTextChanged,e.quotedTextList=n.QuotedTextList}(c,u),function(e,n){var t=n.get(e.itemIds[0]);t&&delete t.localLieSentTime}(c,r))),l&&(u={InternetMessageId:c.internetMessageId,Items:[r.get(c.itemIds[0])]},s?n.push(u):n.unshift(u))}}}(e,n,t,r,i);var d=Q(e,n,B)[1],c={added:[],removed:[],modified:[]},l={isReadChangedToUnread:[]};return n.forEach((function(e){var n,i=B(e),d=t.get(i);d?(e.ParentInternetMessageId&&(d.parentInternetMessageId=e.ParentInternetMessageId),e.QuotedTextList&&(d.quotedTextList=e.QuotedTextList),e.QuotedTextState&&(d.quotedTextState=e.QuotedTextState),e.DiffingInformation&&(d.diffingInformation=e.DiffingInformation),Object(E.h)("rp-bodyDiffing")&&!e.Items[0].ContainsOnlyMandatoryProperties?(d.hasQuotedText=!!e.HasQuotedText,d.isQuotedTextChanged=!!e.IsQuotedTextChanged):(e.HasQuotedText&&(d.hasQuotedText=!0),e.IsQuotedTextChanged&&(d.isQuotedTextChanged=!0)),n=d):(t.set(i,{conversationId:s.Id,internetMessageId:i,itemIds:[],quotedTextList:e.QuotedTextList,hasQuotedText:e.HasQuotedText,isQuotedTextChanged:e.IsQuotedTextChanged,quotedTextState:e.QuotedTextState,localLieState:o.a.None,parentInternetMessageId:e.ParentInternetMessageId,diffingInformation:e.DiffingInformation}),n=t.get(i),c.added.push(i));var u=n.itemIds,f=Object(a.__read)(Q(u,e.Items,q),2),m=f[0],p=f[1];d&&m&&c.modified.push(i),d&&!m&&function(e,n,t,o){var r,i;try{for(var s=Object(a.__values)(n),d=s.next();!d.done;d=s.next()){var c=d.value,l=t.get(c.ItemId.Id);l&&l.IsRead&&!c.IsRead&&o.isReadChangedToUnread.push(e)}}catch(e){r={error:e}}finally{try{d&&!d.done&&(i=s.return)&&i.call(s)}finally{if(r)throw r.error}}}(i,e.Items,r,l),function(e,n,t,o,r){n.forEach((function(n){var t=n.ItemId.Id,i=o.get(t);S(n),n.ContainsOnlyMandatoryProperties?i?v.forEach((function(e){void 0!==n[e.name]&&(i[e.name]=n[e.name])})):e.splice(e.indexOf(t),1):(i&&b(n,i),o.set(t,Object(a.__assign)(Object(a.__assign)({TranslationData:{isShowingTranslation:!1,isTranslatable:!1,isTranslating:!1,shouldGetFeedback:!1,isShowingForwardContentTranslation:!1,isForwardContentTranslatable:!1,isShowingSubjectTranslation:!1,manuallyTranslated:!1,userLanguage:null,isWrongLanguage:null},adaptiveCardDetails:null},n),{MailboxInfo:r,SmartReplyData:null,SmartTimeData:null,SmartTaskData:null,SmartTimeExtendedProperty:null,smartPillFeedbackSubmitted:!1,itemCLPInfo:null,SIGSData:{SmartPillData:null}})))})),t.forEach((function(e){H(e)}))}(u,e.Items,p,r,s.mailboxInfo)})),d.forEach((function(e){!function(e,n,t){n.get(e).itemIds.forEach((function(e){H(e)})),n.delete(e)}(e,t),c.removed.push(e)})),[c,l]}var W=Object(i.action)("parseConversationResponse")(Object(i.select)({conversations:function(){return o.d},conversationNodes:function(){return o.w.conversationNodes},items:function(){return o.w.items}})((function(e,n,t,r){var i=t.Id,s=r.conversations.get(i);s||(s=F(t,n)),r.conversations.add(i,s),s=r.conversations.get(i);var d,c=!(e&&"Success"==e.ResponseClass);if(void 0===s.loadingState.hasLoadFailed&&(s.loadingState.hasLoadFailed=c),s.loadingState.hasLoadFailed&&Object(V.a)(i),!c){var l=e.Conversation;if(!l.ConversationNodes)return w.g.warn("GCI response has no ConversationNodes, but TotalConversationNodesCount is "+l.TotalConversationNodesCount),s.loadingState.hasLoadFailed=!0,void Object(V.a)(i);if(l.ConversationNodes.length==l.TotalConversationNodesCount)s.syncState=l.SyncState;else{var u=l.ConversationNodes.length,f=l.TotalConversationNodesCount;w.g.warn("Count of conversationNodes ("+u+") returned from GetConversationItems doesn't match TotalConversationNodesCount ("+f+")")}s.canLoadMore=l.RemainingConversationNodesCount>0||s.maxItemsToReturn<K&&l.ConversationNodes&&!(l.ConversationNodes.length<s.maxItemsToReturn),s.isLoadMoreInProgress=!1,s.canDelete=l.CanDelete||null,function(e,n,t,a){for(var o={},r=n.length,i=t==G,s=i?0:r-1,d=i?1:-1,c=function(){var t=n[s],r=e.get(t.InternetMessageId);r&&r.conversationId!=a.Id||o[t.InternetMessageId]?(t.InternetMessageId+=t.Items[0].ItemId.Id,t.Items.forEach((function(e){return e.InternetMessageId=t.InternetMessageId}))):o[t.InternetMessageId]=!0,s+=d};s>=0&&s<r;)c()}(r.conversationNodes,l.ConversationNodes,n,t),_(l.ConversationNodes,n),Object(C.a)()&&function(e,n){Object(o.e)(e,n).Items.some((function(e){return p(e)}))}(l.ConversationNodes,n);var m=Object(a.__read)(X(s.conversationNodeIds,l.ConversationNodes,r.conversationNodes,r.items,n,t),2),g=m[0],v=m[1];((d=g).added.length>0||d.removed.length>0||d.modified.length>0)&&Object(V.a)(i,g),function(e){return e.isReadChangedToUnread.length>0}(v)&&Object(V.b)(i,v)}}))),Z=t(26);var Y=t(316),K=100,$={};var J=Object(i.action)("processGetConversationItemsResponse")((function(e,n,t,a){W(t,e,n);var o=a.get(n.Id);o.loadingState.isLoading=!1,delete $[n.Id],o.pendingRequestState&&ee(n,o.pendingRequestState.actionSource)})),ee=Object(i.action)("loadConversation")(Object(i.select)({conversations:function(){return o.d}})((function(e,n,t,i){var s,d,c=Promise.resolve(),l=Object(Z.a)().UserOptions.ConversationSortOrderReact,u=e.Id,f=i.conversations.get(u);if(f&&f.conversationSortOrder!=l&&(Object(k.a)(u),f=null),f&&!f.loadingState.hasLoadFailed||(f=F(e,l)),i.conversations.add(u,f),function(e,n){e.pendingRequestState?e.pendingRequestState.shouldUseEmptySyncState=e.pendingRequestState.shouldUseEmptySyncState||!e.syncState:e.pendingRequestState={shouldUseEmptySyncState:!e.syncState},e.pendingRequestState.actionSource=n}(f=i.conversations.get(u),n),t&&(s=t.addCheckmark("request_start")),f.loadingState.isLoading&&(I(n)||$[u]))$[u]&&(c=$[u],t&&t.addCustomData({pendingRequest:!0}));else{var m=f.pendingRequestState.shouldUseEmptySyncState;f.loadingState.isLoading=!0,f.pendingRequestState=null;var p=f.conversationId.mailboxInfo,v={};if(Y(v,null==p?void 0:p.requestOptions),null==v?void 0:v.headers){var S=new Headers(v.headers);S.set("X-OWA-ActionSource",n),v.headers=S,v.datapoint={customData:{actionSource:n}}}var b=((d=Object(r.a)()).ExcludeBindForInlineAttachments=!0,d.CalculateOnlyFirstBody=!0,Object(E.h)("rp-bodyDiffing")&&(d.BodyShape="UniqueFragment"),d);O(b),c=Object(o.f)(f.conversationId,b,f.syncState,f.maxItemsToReturn,l,m,"ReturnRootNode",v).then((function(n){if(t){var o=t.addCheckmark("request_end");t.addCustomData({requestTime:o-s})}J(l,e,n,i.conversations);var r=Object(a.__read)(g(n),2),d=r[0],c=r[1];return d?Promise.reject(new Error("ErrorResponseCode="+d+", StackTrace="+c)):Promise.resolve()})).catch((function(t){return J(l,e,null,i.conversations),t.message+=", ActionSource="+n,I(n)?Promise.resolve():Promise.reject(t)})),I(n)||($[u]=c)}return c})));t.d(n,"loadAllRecipientsForItem",(function(){return c})),t.d(n,"loadItem",(function(){return M})),t.d(n,"loadConversation",(function(){return ee}))},1649:function(e,n,t){"use strict";var a;!function(e){e.None="None",e.OwaProxy="OwaProxy",e.ConnectorsProxy="ConnectorsProxy",e.Compose="Compose",e.OwaAndConnectorsProxy="OwaAndConnectorsProxy",e.OwaConnectorsProxyAndCompose="OwaConnectorsProxyAndCompose"}(a||(a={})),n.a=a},1767:function(e,n,t){"use strict";var a=t(4);n.a=Object(a.action)("saveSigningCertificate",(function(e,n){return{smimeViewState:e,signingCertRawData:n}}))},1807:function(e,n,t){"use strict";t.d(n,"m",(function(){return r})),t.d(n,"l",(function(){return i})),t.d(n,"o",(function(){return s})),t.d(n,"q",(function(){return d})),t.d(n,"p",(function(){return c})),t.d(n,"b",(function(){return l})),t.d(n,"e",(function(){return u})),t.d(n,"g",(function(){return f})),t.d(n,"h",(function(){return m})),t.d(n,"k",(function(){return p})),t.d(n,"n",(function(){return g})),t.d(n,"r",(function(){return v})),t.d(n,"c",(function(){return S})),t.d(n,"d",(function(){return I})),t.d(n,"j",(function(){return b})),t.d(n,"f",(function(){return h})),t.d(n,"i",(function(){return A})),t.d(n,"a",(function(){return O}));var a=t(108),o=(t(1767),new a.c((function(){return Promise.all([t.e(748),t.e(4),t.e(15),t.e(40),t.e(667)]).then(t.bind(null,3442))}))),r=new a.a(o,(function(e){return e.onSmimeItemAttachmentOpened})),i=new a.a(o,(function(e){return e.mergeSmimeDecodedMessageProperties})),s=(new a.b(o,(function(e){return e.fetchAndDecodeSmimeMessage})),new a.b(o,(function(e){return e.setSmimePropertiesInDraftMessage}))),d=new a.b(o,(function(e){return e.trySetSmimeProperties})),c=new a.b(o,(function(e){return e.tryAddSmimeProperties})),l=new a.b(o,(function(e){return e.createMailResponseBodyContent})),u=new a.b(o,(function(e){return e.downloadSmimeAttachment})),f=new a.b(o,(function(e){return e.getMergedSmimeViewState})),m=new a.b(o,(function(e){return e.getMergedSmimeViewStateForDraft})),p=new a.b(o,(function(e){return e.isSmimeItemDecoding})),g=new a.b(o,(function(e){return e.previewSmimeAttachment})),v=new a.b(o,(function(e){return e.updateSmimeAttachmentIds})),S=new a.b(o,(function(e){return e.createSmimeAttachmentsFromFiles})),I=new a.b(o,(function(e){return e.createSmimeAttachmentsViaSmimeQueueManager})),b=new a.b(o,(function(e){return e.initializeAttachmentStateForSmimeAttachments})),h=new a.b(o,(function(e){return e.getAttachmentsForSmimeResponse})),A=new a.b(o,(function(e){return e.getSmimeAttachmentsForRequest})),O=Object(a.d)(o,(function(e){return e.SignatureDetails}))},1974:function(e,n,t){"use strict";var a=t(255),o=t(325),r={tenantTokens:Object(a.e)(),isCore:!0};function i(e,n,t){var i=new o.a(e,n,r);t&&i.addCosmosOnlyData(t),a.k.importAndExecute(i)}function s(e){return new a.a(e,r)}t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}))},2386:function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r}));var a=t(4),o=Object(a.action)("CONVERSATION_READY_TO_LOAD",(function(e,n){return{conversationId:e,nodeIdCollectionChange:n}})),r=Object(a.action)("UPDATE_ITEM_MANDATORY_PROPERTIES",(function(e,n){return{conversationId:e,nodeIdCollectionWithItemMandatoryPropertiesChanged:n}}))},2609:function(e,n,t){"use strict";n.a=function(e){var n;return null===(n=null==e?void 0:e.Smime)||void 0===n?void 0:n.isDecoded}},2926:function(e,n,t){"use strict";t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return o})),t.d(n,"e",(function(){return r})),t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return s}));var a="X-OWA-SmimeInstalled",o="1",r="SmimeWithoutActiveX",i="message/rfc822",s="ErrorSmimeSendCancelled"},3651:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t(960),o=t(76),r=t(295);function i(){var e=Object(a.d)(a.a.AmpDeveloper);return Object(r.a)()&&Object(o.h)("rp-amp")&&e.enabled}},423:function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return d}));var a=t(276),o=t(304),r=t(303),i=t(296);function s(e){return Object(a.a)({RequestServerVersion:"Exchange2015",TimeZoneContext:Object(o.a)({TimeZoneDefinition:Object(r.a)({Id:null!=e?e:"Pacific Standard Time"})})})}function d(e,n,t){return Object(i.a)({PropertySetId:e,PropertyName:n,PropertyType:t})}},4807:function(e,n,t){"use strict";t.d(n,"a",(function(){return I}));var a,o,r=t(484),i=t(26),s=t(1189),d=t(1311),c=t(1649),l=t(964),u=t(296),f=t(423),m="rps_"+(a=1,o=65535,Math.ceil(Math.random()*(o-a)+a)).toString(16),p=2097152,g=20,v="ExplicitMessageCard",S="00062008-0000-0000-C000-000000000046";function I(){var e,n=Object(r.a)({BaseShape:"IdOnly",AddBlankTargetToLinks:!0,BlockContentFromUnknownSenders:(e=Object(i.a)(),!!e.SafetyUserOptions&&e.SafetyUserOptions.BlockContentFromUnknownSenders),BlockExternalImagesIfSenderUntrusted:!0,ClientSupportsIrm:!0,CssScopeClassName:m,FilterHtmlContent:!0,FilterInlineSafetyTips:!0,InlineImageCustomDataTemplate:s.e,InlineImageUrlTemplate:s.f,MaximumBodySize:p,MaximumRecipientsToReturn:g,ImageProxyCapability:Object(d.a)()?c.a.OwaAndConnectorsProxy:c.a.None,AdditionalProperties:[Object(l.a)({FieldURI:"CanDelete"}),Object(u.a)(Object(f.a)(S,v,"String"))]});return n.InlineImageUrlOnLoadTemplate="",n}},5758:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var a=t(76),o=t(296);function r(e){Object(a.h)("cmp-clp")&&e.AdditionalProperties.push(Object(o.a)({PropertyName:"msip_labels",DistinguishedPropertySetId:"InternetHeaders",PropertyType:"String"}))}},5765:function(e,n,t){"use strict";var a=t(4);n.a=Object(a.createStore)("yammerBoostrapStore",{bootstrapStatus:0})()},5766:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a,o=t(76),r=t(60),i=t(255),s=["office.com","office365.com"];function d(){return Object(o.h)("rp-yammer")&&function(){if(null!=a)return a;var e=Object(r.g)();e&&Object(i.o)("Yammer_UnsupportedBrowser");var n=s.some((function(e){return-1!=window.location.host.indexOf(e)}));n||Object(i.o)("Yammer_UnsupportedDomain");return a=!e&&n}()}},8094:function(e,n,t){"use strict";var a=t(108),o=t(5765);function r(){return 2==o.a.bootstrapStatus}t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return r}));var i=new a.c((function(){return Promise.all([t.e(87),t.e(4),t.e(455)]).then(t.bind(null,14505))})),s=new a.b(i,(function(e){return e.bootstrapYammerIfNeeded}))},960:function(e,n,t){"use strict";var a=t(108),o=t(1233),r=t(985),i=t(4),s=[r.a.SurfaceActions];Object(i.orchestrator)(o.a,(function(e){var n=e.defaultOptions;s.forEach((function(e){n[e]&&Object(r.f)(Number(e),n[e])}))}));var d=t(1017);t.d(n,"e",(function(){return l})),t.d(n,"h",(function(){return u})),t.d(n,"f",(function(){return f})),t.d(n,"g",(function(){return m})),t.d(n,"c",(function(){return d.a})),t.d(n,"d",(function(){return r.d})),t.d(n,"b",(function(){return r.b})),t.d(n,"a",(function(){return r.a}));var c=new a.c((function(){return t.e(437).then(t.bind(null,14697))})),l=new a.a(c,(function(e){return e.createOrUpdateOptionsForFeature})),u=new a.a(c,(function(e){return e.updateAddinPinStatus})),f=new a.b(c,(function(e){return e.getServerOptionsForFeature})),m=new a.a(c,(function(e){return e.loadOptions}))},985:function(e,n,t){"use strict";var a,o,r=t(4),i=Object(r.action)("setOptionValue",(function(e,n){return{feature:e,value:n}})),s=Object(r.action)("assignOptionValue",(function(e,n){return{feature:e,value:n}})),d=Object(r.action)("verifyAndSetOptionValues",(function(e){return{potentialOptionValues:e}})),c=Object(r.action)("setOptionValue",(function(e,n){return{feature:e,value:n}})),l=t(0);!function(e){e[e.TestFeature=1]="TestFeature",e[e.SmartSuggestions=2]="SmartSuggestions",e[e.DiverseEmojis=4]="DiverseEmojis",e[e.SurfaceActions=5]="SurfaceActions",e[e.SkypeNotifications=6]="SkypeNotifications",e[e.WebPushNotifications=7]="WebPushNotifications",e[e.Confetti=8]="Confetti",e[e.GdprAdsPrefs=9]="GdprAdsPrefs",e[e.CalendarSurfaceAddins=10]="CalendarSurfaceAddins",e[e.ExternalImages=11]="ExternalImages",e[e.EventCapture=12]="EventCapture",e[e.Translation=14]="Translation",e[e.CalendarSurfaceOptions=15]="CalendarSurfaceOptions",e[e.TxpEventNotifications=16]="TxpEventNotifications",e[e.MentionEventNotifications=17]="MentionEventNotifications",e[e.ComposeAssistance=18]="ComposeAssistance",e[e.ActivityFeed=19]="ActivityFeed",e[e.AmpDeveloper=20]="AmpDeveloper",e[e.CalendarHelp=21]="CalendarHelp",e[e.LinkedInViewProfile=22]="LinkedInViewProfile",e[e.Bohemia=23]="Bohemia",e[e.GdprAdsV2=24]="GdprAdsV2",e[e.Proofing=25]="Proofing",e[e.ActiveProxyAddress=26]="ActiveProxyAddress",e[e.OutlookSpaces=27]="OutlookSpaces",e[e.GdprAdsV3=28]="GdprAdsV3",e[e.SxS=29]="SxS"}(a||(a={}));var u=Object(r.createStore)("owsOptionsStore",{options:(o={},o[a.SmartSuggestions]={feature:a.SmartSuggestions,smartSuggestionsEnabled:!1,browserLocationEnabled:!1},o[a.DiverseEmojis]={feature:a.DiverseEmojis,diverseEmojisSelectedSkinTone:""},o[a.SurfaceActions]={feature:a.SurfaceActions,readSurfaceActions:[],readSurfaceAddins:[],composeSurfaceActions:[],composeSurfaceAddins:[]},o[a.SkypeNotifications]={feature:a.SkypeNotifications,skypeMessageNotification:1,skypeCallingNotification:1},o[a.WebPushNotifications]={feature:a.WebPushNotifications,enabled:!1,applicationServerKey:null},o[a.Confetti]={feature:a.Confetti,confettiEnabled:!1},o[a.GdprAdsPrefs]={feature:a.GdprAdsPrefs,consentString:null,allowStorageAndAccess:!1,allowPersonalization:!1,allowAdSelectionDeliveryReporting:!1,allowContentSelectionDeliveryReporting:!1,allowMeasurement:!1},o[a.GdprAdsV2]={feature:a.GdprAdsV2,consentString:null,allowStorageAndAccess:!0,allowPersonalization:!0,allowAdSelectionDeliveryReporting:!0,allowContentSelectionDeliveryReporting:!0,allowMeasurement:!0,disselectedVendorId:[],selectedVendorId:[]},o[a.GdprAdsV3]={feature:a.GdprAdsV3,encodedTCString:null,allStoreAndAccessDevice:!1,allowDevelopAndImproveProduct:!1,allowPersonalisedAds:!1,allowPersonalisedAdsSelectBasicAd:!1,allowPersonalisedAdsApplyMarketResearch:!1,allowPersonalisedAdsMeasureContentPerformance:!1,allowPersonalisedAdsSelectPersonalisedAds:!1,allowPersonalisedAdsMeasureAdPerf:!1,allowPersonalisedAdsSelectPersonalisedContent:!1,allowPersonalisedAdsCreatePersonalisedContentProfile:!1,allowPersonalisedAdsCreatePersonalisedAdsProfile:!1,allowPreciseGeoDataAndIdentifyDevice:!1,allowPreciseGeoDataAndIdentifyDeviceScanDevice:!1,allowPreciseGeoDataAndIdentifyDeviceGeoData:!1,disselectedVendorId:[],selectedVendorId:[]},o[a.CalendarSurfaceAddins]={feature:a.CalendarSurfaceAddins,calendarSurfaceAddins:[]},o[a.ExternalImages]={feature:a.ExternalImages,externalImagesSelectedOption:null},o[a.EventCapture]={autoCollectionEnabled:!1},o[a.Translation]={feature:a.Translation,translationMode:0,targetLanguage:"",excludedLanguages:[]},o[a.CalendarSurfaceOptions]={feature:a.CalendarSurfaceOptions,agendaPaneIsClosed:!0,roamingTimeZoneTeachingMomentDisplayed:!0,bannedRoamingTimeZone:void 0,lastKnownRoamingTimeZone:void 0,roamingTimeZoneNotificationsIsDisabled:void 0,allDayWellHeight:0,numDaysInDayRange:1,workLifeView:3},o[a.MentionEventNotifications]={feature:a.MentionEventNotifications,enabled:!1},o[a.TxpEventNotifications]={feature:a.TxpEventNotifications,enabled:!1},o[a.ComposeAssistance]={feature:a.ComposeAssistance,composeAssistanceEnabled:!1},o[a.AmpDeveloper]={feature:a.AmpDeveloper,enabled:!0,allowedSender:[]},o[a.ActivityFeed]={feature:a.ActivityFeed,OWASurfaceOptions:{SupportedTypes:[],DisabledInFeedPanel:[]}},o[a.LinkedInViewProfile]={dismissed:!1},o[a.CalendarHelp]={feature:a.CalendarHelp,calendarHelpEnabled:!1},o[a.Bohemia]={feature:a.Bohemia,bohemiaEnabled:!1},o[a.Proofing]={feature:a.Proofing,spellCheckEnabled:!0,grammarEnabled:!0,writingRefinementsEnabled:!1,proofingLocale:void 0,overriddenOptions:void 0},o[a.ActiveProxyAddress]={feature:a.ActiveProxyAddress,activeProxyAddresses:[]},o[a.OutlookSpaces]={feature:a.OutlookSpaces,backgroundColor:"",gestureScheme:"pointer"},o[a.SxS]={feature:a.SxS,hideReadingPane:!1},o)}),f=t(23);function m(e){return(null==e?void 0:e.feature)in a}var p,g=t(316);function v(e,n){u().options[e]=n}function S(e){return u().options[e]}Object(r.mutator)(s,(function(e){var n=e.feature,t=e.value;g(u().options[n],t)})),Object(r.mutator)(i,(function(e){v(e.feature,e.value)})),Object(r.mutator)(c,(function(e){var n=e.feature,t=e.value;Object(f.extendObservable)(u().options[n],t)})),Object(r.mutator)(d,(function(e){var n,t,a=e.potentialOptionValues;try{for(var o=Object(l.__values)(a),r=o.next();!r.done;r=o.next()){var i=r.value;i&&m(i)&&v(i.feature,i)}}catch(e){n={error:e}}finally{try{r&&!r.done&&(t=o.return)&&t.call(o)}finally{if(n)throw n.error}}})),function(e){e[e.Work=1]="Work",e[e.Life=2]="Life"}(p||(p={})),t.d(n,"g",(function(){return i})),t.d(n,"c",(function(){return s})),t.d(n,"h",(function(){return d})),t.d(n,"f",(function(){return c})),t.d(n,"e",(function(){return u})),t.d(n,"d",(function(){return S})),t.d(n,"b",(function(){return p})),t.d(n,"a",(function(){return a}))}}]);
//# sourceMappingURL=owa.MailStoreActions.js.map
self.scriptsLoaded['owa.MailStoreActions.js'] = 1; self.scriptProcessEnd = self.scriptProcessEnd || {}; self.scriptProcessEnd['owa.MailStoreActions.js'] = (new Date()).getTime();