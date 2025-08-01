/*! For license information please see main.13e1c4f9.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),o=n(43),i=n(950);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function u(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function c(e){if(l(e)!==e)throw Error(a(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var f=Object.assign,h=Symbol.for("react.element"),p=Symbol.for("react.transitional.element"),g=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),O=Symbol.for("react.lazy");Symbol.for("react.scope");var j=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var T=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var P=Symbol.iterator;function D(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=P&&e[P]||e["@@iterator"])?e:null}var N=Symbol.for("react.client.reference");function R(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===N?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case m:return"Fragment";case b:return"Profiler";case v:return"StrictMode";case k:return"Suspense";case E:return"SuspenseList";case j:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case g:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(t=e.displayName||null)?t:R(e.type)||"Memo";case O:t=e._payload,e=e._init;try{return R(e(t))}catch(n){}}return null}var L=Array.isArray,_=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},I=[],A=-1;function F(e){return{current:e}}function M(e){0>A||(e.current=I[A],I[A]=null,A--)}function H(e,t){A++,I[A]=e.current,e.current=t}var B=F(null),U=F(null),V=F(null),W=F(null);function q(e,t){switch(H(V,t),H(U,e),H(B,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?od(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=id(t=od(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(B),H(B,e)}function K(){M(B),M(U),M(V)}function Y(e){null!==e.memoizedState&&H(W,e);var t=B.current,n=id(t,e.type);t!==n&&(H(U,e),H(B,n))}function Q(e){U.current===e&&(M(B),M(U)),W.current===e&&(M(W),Yd._currentValue=z)}var G=Object.prototype.hasOwnProperty,X=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,oe=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,ae=r.unstable_LowPriority,se=r.unstable_IdlePriority,le=r.log,ue=r.unstable_setDisableYieldValue,ce=null,de=null;function fe(e){if("function"===typeof le&&ue(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ce,e)}catch(t){}}var he=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(pe(e)/ge|0)|0},pe=Math.log,ge=Math.LN2;var me=256,ve=4194304;function be(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ye(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~i)?o=be(r):0!==(a&=s)?o=be(a):n||0!==(n=s&~e)&&(o=be(n)):0!==(s=r&~i)?o=be(s):0!==a?o=be(a):n||0!==(n=r&~e)&&(o=be(n)),0===o?0:0!==t&&t!==o&&0===(t&i)&&((i=o&-o)>=(n=t&-t)||32===i&&0!==(4194048&n))?t:o}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=me;return 0===(4194048&(me<<=1))&&(me=256),e}function ke(){var e=ve;return 0===(62914560&(ve<<=1))&&(ve=4194304),e}function Ee(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ce(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Oe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-he(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function je(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-he(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function Te(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Pe(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function De(){var e=$.p;return 0!==e?e:void 0===(e=window.event)?32:cf(e.type)}var Ne=Math.random().toString(36).slice(2),Re="__reactFiber$"+Ne,Le="__reactProps$"+Ne,_e="__reactContainer$"+Ne,$e="__reactEvents$"+Ne,ze="__reactListeners$"+Ne,Ie="__reactHandles$"+Ne,Ae="__reactResources$"+Ne,Fe="__reactMarker$"+Ne;function Me(e){delete e[Re],delete e[Le],delete e[$e],delete e[ze],delete e[Ie]}function He(e){var t=e[Re];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_e]||n[Re]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=yd(e);null!==e;){if(n=e[Re])return n;e=yd(e)}return t}n=(e=n).parentNode}return null}function Be(e){if(e=e[Re]||e[_e]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ue(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function Ve(e){var t=e[Ae];return t||(t=e[Ae]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Fe]=!0}var qe=new Set,Ke={};function Ye(e,t){Qe(e,t),Qe(e+"Capture",t)}function Qe(e,t){for(Ke[e]=t,e=0;e<t.length;e++)qe.add(t[e])}var Ge,Xe,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(o=t,G.call(et,o)||!G.call(Ze,o)&&(Je.test(o)?et[o]=!0:(Ze[o]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var o}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ot(e){if(void 0===Ge)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ge=t&&t[1]||"",Xe=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Ge+e+Xe}var it=!1;function at(e,t){if(!e||it)return"";it=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(o){var r=o}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(a){r=a}(n=e())&&"function"===typeof n.catch&&n.catch(function(){})}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),a=i[0],s=i[1];if(a&&s){var l=a.split("\n"),u=s.split("\n");for(o=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;o<u.length&&!u[o].includes("DetermineComponentFrameRoot");)o++;if(r===l.length||o===u.length)for(r=l.length-1,o=u.length-1;1<=r&&0<=o&&l[r]!==u[o];)o--;for(;1<=r&&0<=o;r--,o--)if(l[r]!==u[o]){if(1!==r||1!==o)do{if(r--,0>--o||l[r]!==u[o]){var c="\n"+l[r].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}}while(1<=r&&0<=o);break}}}finally{it=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ot(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return ot(e.type);case 16:return ot("Lazy");case 13:return ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return at(e.type,!1);case 11:return at(e.type.render,!1);case 1:return at(e.type,!0);case 31:return ot("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ct(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ct(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function ft(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ct(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ht(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var pt=/[\n"\\]/g;function gt(e){return e.replace(pt,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function mt(e,t,n,r,o,i,a,s){e.name="",null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a?e.type=a:e.removeAttribute("type"),null!=t?"number"===a?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ut(t)):e.value!==""+ut(t)&&(e.value=""+ut(t)):"submit"!==a&&"reset"!==a||e.removeAttribute("value"),null!=t?bt(e,a,ut(t)):null!=n?bt(e,a,ut(n)):null!=r&&e.removeAttribute("value"),null==o&&null!=i&&(e.defaultChecked=!!i),null!=o&&(e.checked=o&&"function"!==typeof o&&"symbol"!==typeof o),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ut(s):e.removeAttribute("name")}function vt(e,t,n,r,o,i,a,s){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return;n=null!=n?""+ut(n):"",t=null!=t?""+ut(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:o)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.name=a)}function bt(e,t,n){"number"===t&&ht(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ut(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ut(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ut(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(L(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ut(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&Et(e,o,r)}else for(var i in t)t.hasOwnProperty(i)&&Et(e,i,t[i])}function Ot(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Tt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Pt(e){return Tt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Dt=null;function Nt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Rt=null,Lt=null;function _t(e){var t=Be(e);if(t&&(e=t.stateNode)){var n=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(mt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+gt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[Le]||null;if(!o)throw Error(a(90));mt(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&ft(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&yt(e,!!n.multiple,t,!1)}}}var $t=!1;function zt(e,t,n){if($t)return e(t,n);$t=!0;try{return e(t)}finally{if($t=!1,(null!==Rt||null!==Lt)&&(Hu(),Rt&&(t=Rt,e=Lt,Lt=Rt=null,_t(t),e)))for(t=0;t<e.length;t++)_t(e[t])}}function It(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Le]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var At=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Ft=!1;if(At)try{var Mt={};Object.defineProperty(Mt,"passive",{get:function(){Ft=!0}}),window.addEventListener("test",Mt,Mt),window.removeEventListener("test",Mt,Mt)}catch(_f){Ft=!1}var Ht=null,Bt=null,Ut=null;function Vt(){if(Ut)return Ut;var e,t,n=Bt,r=n.length,o="value"in Ht?Ht.value:Ht.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Ut=o.slice(e,1<t?1-t:void 0)}function Wt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function qt(){return!0}function Kt(){return!1}function Yt(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?qt:Kt,this.isPropagationStopped=Kt,this}return f(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=qt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=qt)},persist:function(){},isPersistent:qt}),t}var Qt,Gt,Xt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Yt(Jt),en=f({},Jt,{view:0,detail:0}),tn=Yt(en),nn=f({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xt&&(Xt&&"mousemove"===e.type?(Qt=e.screenX-Xt.screenX,Gt=e.screenY-Xt.screenY):Gt=Qt=0,Xt=e),Qt)},movementY:function(e){return"movementY"in e?e.movementY:Gt}}),rn=Yt(nn),on=Yt(f({},nn,{dataTransfer:0})),an=Yt(f({},en,{relatedTarget:0})),sn=Yt(f({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=Yt(f({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),un=Yt(f({},Jt,{data:0})),cn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function hn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=fn[e])&&!!t[e]}function pn(){return hn}var gn=Yt(f({},en,{key:function(e){if(e.key){var t=cn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Wt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pn,charCode:function(e){return"keypress"===e.type?Wt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Wt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),mn=Yt(f({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vn=Yt(f({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pn})),bn=Yt(f({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),yn=Yt(f({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Yt(f({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],Sn=At&&"CompositionEvent"in window,kn=null;At&&"documentMode"in document&&(kn=document.documentMode);var En=At&&"TextEvent"in window&&!kn,Cn=At&&(!Sn||kn&&8<kn&&11>=kn),On=String.fromCharCode(32),jn=!1;function Tn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Dn=!1;var Nn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Nn[e.type]:"textarea"===t}function Ln(e,t,n,r){Rt?Lt?Lt.push(r):Lt=[r]:Rt=r,0<(t=Vc(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,$n=null;function zn(e){zc(e,0)}function In(e){if(ft(Ue(e)))return e}function An(e,t){if("change"===e)return t}var Fn=!1;if(At){var Mn;if(At){var Hn="oninput"in document;if(!Hn){var Bn=document.createElement("div");Bn.setAttribute("oninput","return;"),Hn="function"===typeof Bn.oninput}Mn=Hn}else Mn=!1;Fn=Mn&&(!document.documentMode||9<document.documentMode)}function Un(){_n&&(_n.detachEvent("onpropertychange",Vn),$n=_n=null)}function Vn(e){if("value"===e.propertyName&&In($n)){var t=[];Ln(t,$n,e,Nt(e)),zt(zn,t)}}function Wn(e,t,n){"focusin"===e?(Un(),$n=n,(_n=t).attachEvent("onpropertychange",Vn)):"focusout"===e&&Un()}function qn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return In($n)}function Kn(e,t){if("click"===e)return In(t)}function Yn(e,t){if("input"===e||"change"===e)return In(t)}var Qn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Gn(e,t){if(Qn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!G.call(t,o)||!Qn(e[o],t[o]))return!1}return!0}function Xn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=Xn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Xn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=ht((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ht((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=At&&"documentMode"in document&&11>=document.documentMode,rr=null,or=null,ir=null,ar=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ar||null==rr||rr!==ht(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ir&&Gn(ir,r)||(ir=r,0<(r=Vc(or,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ur={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},cr={},dr={};function fr(e){if(cr[e])return cr[e];if(!ur[e])return e;var t,n=ur[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return cr[e]=n[t];return e}At&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);var hr=fr("animationend"),pr=fr("animationiteration"),gr=fr("animationstart"),mr=fr("transitionrun"),vr=fr("transitionstart"),br=fr("transitioncancel"),yr=fr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){xr.set(e,t),Ye(t,[e])}wr.push("scrollEnd");var kr=new WeakMap;function Er(e,t){if("object"===typeof e&&null!==e){var n=kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},kr.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var Cr=[],Or=0,jr=0;function Tr(){for(var e=Or,t=jr=Or=0;t<e;){var n=Cr[t];Cr[t++]=null;var r=Cr[t];Cr[t++]=null;var o=Cr[t];Cr[t++]=null;var i=Cr[t];if(Cr[t++]=null,null!==r&&null!==o){var a=r.pending;null===a?o.next=o:(o.next=a.next,a.next=o),r.pending=o}0!==i&&Rr(n,o,i)}}function Pr(e,t,n,r){Cr[Or++]=e,Cr[Or++]=t,Cr[Or++]=n,Cr[Or++]=r,jr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Dr(e,t,n,r){return Pr(e,t,n,r),Lr(e)}function Nr(e,t){return Pr(e,null,null,t),Lr(e)}function Rr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var o=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(o=!0)),e=i,i=i.return;return 3===e.tag?(i=e.stateNode,o&&null!==t&&(o=31-he(n),null===(r=(e=i.hiddenUpdates)[o])?e[o]=[t]:r.push(t),t.lane=536870912|n),i):null}function Lr(e){if(50<Ru)throw Ru=0,Lu=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var _r={};function $r(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zr(e,t,n,r){return new $r(e,t,n,r)}function Ir(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ar(e,t){var n=e.alternate;return null===n?((n=zr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Fr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mr(e,t,n,r,o,i){var s=0;if(r=e,"function"===typeof e)Ir(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,B.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case j:return(e=zr(31,n,t,o)).elementType=j,e.lanes=i,e;case m:return Hr(n.children,o,i,t);case v:s=8,o|=24;break;case b:return(e=zr(12,n,t,2|o)).elementType=b,e.lanes=i,e;case k:return(e=zr(13,n,t,o)).elementType=k,e.lanes=i,e;case E:return(e=zr(19,n,t,o)).elementType=E,e.lanes=i,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case y:case w:s=10;break e;case x:s=9;break e;case S:s=11;break e;case C:s=14;break e;case O:s=16,r=null;break e}s=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=zr(s,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Hr(e,t,n,r){return(e=zr(7,e,r,t)).lanes=n,e}function Br(e,t,n){return(e=zr(6,e,null,t)).lanes=n,e}function Ur(e,t,n){return(t=zr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Vr=[],Wr=0,qr=null,Kr=0,Yr=[],Qr=0,Gr=null,Xr=1,Jr="";function Zr(e,t){Vr[Wr++]=Kr,Vr[Wr++]=qr,qr=e,Kr=t}function eo(e,t,n){Yr[Qr++]=Xr,Yr[Qr++]=Jr,Yr[Qr++]=Gr,Gr=e;var r=Xr;e=Jr;var o=32-he(r)-1;r&=~(1<<o),n+=1;var i=32-he(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Xr=1<<32-he(t)+o|n<<o|r,Jr=i+e}else Xr=1<<i|n<<o|r,Jr=e}function to(e){null!==e.return&&(Zr(e,1),eo(e,1,0))}function no(e){for(;e===qr;)qr=Vr[--Wr],Vr[Wr]=null,Kr=Vr[--Wr],Vr[Wr]=null;for(;e===Gr;)Gr=Yr[--Qr],Yr[Qr]=null,Jr=Yr[--Qr],Yr[Qr]=null,Xr=Yr[--Qr],Yr[Qr]=null}var ro=null,oo=null,io=!1,ao=null,so=!1,lo=Error(a(519));function uo(e){throw mo(Er(Error(a(418,"")),e)),lo}function co(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Re]=e,t[Le]=r,n){case"dialog":Ic("cancel",t),Ic("close",t);break;case"iframe":case"object":case"embed":Ic("load",t);break;case"video":case"audio":for(n=0;n<_c.length;n++)Ic(_c[n],t);break;case"source":Ic("error",t);break;case"img":case"image":case"link":Ic("error",t),Ic("load",t);break;case"details":Ic("toggle",t);break;case"input":Ic("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Ic("invalid",t);break;case"textarea":Ic("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Gc(t.textContent,n)?(null!=r.popover&&(Ic("beforetoggle",t),Ic("toggle",t)),null!=r.onScroll&&Ic("scroll",t),null!=r.onScrollEnd&&Ic("scrollend",t),null!=r.onClick&&(t.onclick=Xc),t=!0):t=!1,t||uo(e)}function fo(e){for(ro=e.return;ro;)switch(ro.tag){case 5:case 13:return void(so=!1);case 27:case 3:return void(so=!0);default:ro=ro.return}}function ho(e){if(e!==ro)return!1;if(!io)return fo(e),io=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||ad(e.type,e.memoizedProps)),t=!t),t&&oo&&uo(e),fo(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){oo=vd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}oo=null}}else 27===n?(n=oo,hd(e.type)?(e=bd,bd=null,oo=e):oo=n):oo=ro?vd(e.stateNode.nextSibling):null;return!0}function po(){oo=ro=null,io=!1}function go(){var e=ao;return null!==e&&(null===yu?yu=e:yu.push.apply(yu,e),ao=null),e}function mo(e){null===ao?ao=[e]:ao.push(e)}var vo=F(null),bo=null,yo=null;function xo(e,t,n){H(vo,t._currentValue),t._currentValue=n}function wo(e){e._currentValue=vo.current,M(vo)}function So(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ko(e,t,n,r){var o=e.child;for(null!==o&&(o.return=e);null!==o;){var i=o.dependencies;if(null!==i){var s=o.child;i=i.firstContext;e:for(;null!==i;){var l=i;i=o;for(var u=0;u<t.length;u++)if(l.context===t[u]){i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),So(i.return,n,e),r||(s=null);break e}i=l.next}}else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(i=s.alternate)&&(i.lanes|=n),So(s,n,e),s=null}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===e){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}}function Eo(e,t,n,r){e=null;for(var o=t,i=!1;null!==o;){if(!i)if(0!==(524288&o.flags))i=!0;else if(0!==(262144&o.flags))break;if(10===o.tag){var s=o.alternate;if(null===s)throw Error(a(387));if(null!==(s=s.memoizedProps)){var l=o.type;Qn(o.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(o===W.current){if(null===(s=o.alternate))throw Error(a(387));s.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push(Yd):e=[Yd])}o=o.return}null!==e&&ko(t,e,n,r),t.flags|=262144}function Co(e){for(e=e.firstContext;null!==e;){if(!Qn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Oo(e){bo=e,yo=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function jo(e){return Po(bo,e)}function To(e,t){return null===bo&&Oo(e),Po(e,t)}function Po(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===yo){if(null===e)throw Error(a(308));yo=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yo=yo.next=t;return n}var Do="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},No=r.unstable_scheduleCallback,Ro=r.unstable_NormalPriority,Lo={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _o(){return{controller:new Do,data:new Map,refCount:0}}function $o(e){e.refCount--,0===e.refCount&&No(Ro,function(){e.controller.abort()})}var zo=null,Io=0,Ao=0,Fo=null;function Mo(){if(0===--Io&&null!==zo){null!==Fo&&(Fo.status="fulfilled");var e=zo;zo=null,Ao=0,Fo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Ho=_.S;_.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===zo){var n=zo=[];Io=0,Ao=Pc(),Fo={status:"pending",value:void 0,then:function(e){n.push(e)}}}Io++,t.then(Mo,Mo)}(0,t),null!==Ho&&Ho(e,t)};var Bo=F(null);function Uo(){var e=Bo.current;return null!==e?e:ru.pooledCache}function Vo(e,t){H(Bo,null===t?Bo.current:t.pool)}function Wo(){var e=Uo();return null===e?null:{parent:Lo._currentValue,pool:e}}var qo=Error(a(460)),Ko=Error(a(474)),Yo=Error(a(542)),Qo={then:function(){}};function Go(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Xo(){}function Jo(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Xo,Xo),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ti(e=t.reason),e;default:if("string"===typeof t.status)t.then(Xo,Xo);else{if(null!==(e=ru)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then(function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}},function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ti(e=t.reason),e}throw Zo=t,qo}}var Zo=null;function ei(){if(null===Zo)throw Error(a(459));var e=Zo;return Zo=null,e}function ti(e){if(e===qo||e===Yo)throw Error(a(483))}var ni=!1;function ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ii(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ai(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nu)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=Lr(e),Rr(e,null,n),t}return Pr(e,r,t,n),Lr(e)}function si(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,je(e,n)}}function li(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ui=!1;function ci(){if(ui){if(null!==Fo)throw Fo}}function di(e,t,n,r){ui=!1;var o=e.updateQueue;ni=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,u=l.next;l.next=null,null===a?i=u:a.next=u,a=l;var c=e.alternate;null!==c&&((s=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===s?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,c=u=l=null,s=i;;){var h=-536870913&s.lane,p=h!==s.lane;if(p?(iu&h)===h:(r&h)===h){0!==h&&h===Ao&&(ui=!0),null!==c&&(c=c.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var g=e,m=s;h=t;var v=n;switch(m.tag){case 1:if("function"===typeof(g=m.payload)){d=g.call(v,d,h);break e}d=g;break e;case 3:g.flags=-65537&g.flags|128;case 0:if(null===(h="function"===typeof(g=m.payload)?g.call(v,d,h):g)||void 0===h)break e;d=f({},d,h);break e;case 2:ni=!0}}null!==(h=s.callback)&&(e.flags|=64,p&&(e.flags|=8192),null===(p=o.callbacks)?o.callbacks=[h]:p.push(h))}else p={lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===c?(u=c=p,l=d):c=c.next=p,a|=h;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(p=s).next,p.next=null,o.lastBaseUpdate=p,o.shared.pending=null}}null===c&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,null===i&&(o.shared.lanes=0),hu|=a,e.lanes=a,e.memoizedState=d}}function fi(e,t){if("function"!==typeof e)throw Error(a(191,e));e.call(t)}function hi(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)fi(n[e],t)}var pi=F(null),gi=F(0);function mi(e,t){H(gi,e=du),H(pi,t),du=e|t.baseLanes}function vi(){H(gi,du),H(pi,pi.current)}function bi(){du=gi.current,M(pi),M(gi)}var yi=0,xi=null,wi=null,Si=null,ki=!1,Ei=!1,Ci=!1,Oi=0,ji=0,Ti=null,Pi=0;function Di(){throw Error(a(321))}function Ni(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Qn(e[n],t[n]))return!1;return!0}function Ri(e,t,n,r,o,i){return yi=i,xi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=null===e||null===e.memoizedState?qa:Ka,Ci=!1,i=n(r,o),Ci=!1,Ei&&(i=_i(t,n,r,o)),Li(e),i}function Li(e){_.H=Wa;var t=null!==wi&&null!==wi.next;if(yi=0,Si=wi=xi=null,ki=!1,ji=0,Ti=null,t)throw Error(a(300));null===e||js||null!==(e=e.dependencies)&&Co(e)&&(js=!0)}function _i(e,t,n,r){xi=e;var o=0;do{if(Ei&&(Ti=null),ji=0,Ei=!1,25<=o)throw Error(a(301));if(o+=1,Si=wi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}_.H=Ya,i=t(n,r)}while(Ei);return i}function $i(){var e=_.H,t=e.useState()[0];return t="function"===typeof t.then?Hi(t):t,e=e.useState()[0],(null!==wi?wi.memoizedState:null)!==e&&(xi.flags|=1024),t}function zi(){var e=0!==Oi;return Oi=0,e}function Ii(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ai(e){if(ki){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ki=!1}yi=0,Si=wi=xi=null,Ei=!1,ji=Oi=0,Ti=null}function Fi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Si?xi.memoizedState=Si=e:Si=Si.next=e,Si}function Mi(){if(null===wi){var e=xi.alternate;e=null!==e?e.memoizedState:null}else e=wi.next;var t=null===Si?xi.memoizedState:Si.next;if(null!==t)Si=t,wi=e;else{if(null===e){if(null===xi.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(wi=e).memoizedState,baseState:wi.baseState,baseQueue:wi.baseQueue,queue:wi.queue,next:null},null===Si?xi.memoizedState=Si=e:Si=Si.next=e}return Si}function Hi(e){var t=ji;return ji+=1,null===Ti&&(Ti=[]),e=Jo(Ti,e,t),t=xi,null===(null===Si?t.memoizedState:Si.next)&&(t=t.alternate,_.H=null===t||null===t.memoizedState?qa:Ka),e}function Bi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Hi(e);if(e.$$typeof===w)return jo(e)}throw Error(a(438,String(e)))}function Ui(e){var t=null,n=xi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=xi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=T;return t.index++,n}function Vi(e,t){return"function"===typeof t?t(e):t}function Wi(e){return qi(Mi(),wi,e)}function qi(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var o=e.baseQueue,i=r.pending;if(null!==i){if(null!==o){var s=o.next;o.next=i.next,i.next=s}t.baseQueue=o=i,r.pending=null}if(i=e.baseState,null===o)e.memoizedState=i;else{var l=s=null,u=null,c=t=o.next,d=!1;do{var f=-536870913&c.lane;if(f!==c.lane?(iu&f)===f:(yi&f)===f){var h=c.revertLane;if(0===h)null!==u&&(u=u.next={lane:0,revertLane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Ao&&(d=!0);else{if((yi&h)===h){c=c.next,h===Ao&&(d=!0);continue}f={lane:0,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(l=u=f,s=i):u=u.next=f,xi.lanes|=h,hu|=h}f=c.action,Ci&&n(i,f),i=c.hasEagerState?c.eagerState:n(i,f)}else h={lane:f,revertLane:c.revertLane,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},null===u?(l=u=h,s=i):u=u.next=h,xi.lanes|=f,hu|=f;c=c.next}while(null!==c&&c!==t);if(null===u?s=i:u.next=l,!Qn(i,e.memoizedState)&&(js=!0,d&&null!==(n=Fo)))throw n;e.memoizedState=i,e.baseState=s,e.baseQueue=u,r.lastRenderedState=i}return null===o&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ki(e){var t=Mi(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var s=o=o.next;do{i=e(i,s.action),s=s.next}while(s!==o);Qn(i,t.memoizedState)||(js=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Yi(e,t,n){var r=xi,o=Mi(),i=io;if(i){if(void 0===n)throw Error(a(407));n=n()}else n=t();var s=!Qn((wi||o).memoizedState,n);if(s&&(o.memoizedState=n,js=!0),o=o.queue,va(2048,8,Xi.bind(null,r,o,e),[e]),o.getSnapshot!==t||s||null!==Si&&1&Si.memoizedState.tag){if(r.flags|=2048,pa(9,{destroy:void 0,resource:void 0},Gi.bind(null,r,o,n,t),null),null===ru)throw Error(a(349));i||0!==(124&yi)||Qi(r,t,n)}return n}function Qi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Gi(e,t,n,r){t.value=n,t.getSnapshot=r,Ji(t)&&Zi(e)}function Xi(e,t,n){return n(function(){Ji(t)&&Zi(e)})}function Ji(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Qn(e,n)}catch(r){return!0}}function Zi(e){var t=Nr(e,2);null!==t&&zu(t,e,2)}function ea(e){var t=Fi();if("function"===typeof e){var n=e;if(e=n(),Ci){fe(!0);try{n()}finally{fe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:e},t}function ta(e,t,n,r){return e.baseState=n,qi(e,wi,"function"===typeof r?r:Vi)}function na(e,t,n,r,o){if(Ba(e))throw Error(a(485));if(null!==(e=t.action)){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==_.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,ra(t,i)):(i.next=n.next,t.pending=n.next=i)}}function ra(e,t){var n=t.action,r=t.payload,o=e.state;if(t.isTransition){var i=_.T,a={};_.T=a;try{var s=n(o,r),l=_.S;null!==l&&l(a,s),oa(e,t,s)}catch(u){aa(e,t,u)}finally{_.T=i}}else try{oa(e,t,i=n(o,r))}catch(c){aa(e,t,c)}}function oa(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then(function(n){ia(e,t,n)},function(n){return aa(e,t,n)}):ia(e,t,n)}function ia(e,t,n){t.status="fulfilled",t.value=n,sa(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ra(e,n)))}function aa(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,sa(t),t=t.next}while(t!==r)}e.action=null}function sa(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function la(e,t){return t}function ua(e,t){if(io){var n=ru.formState;if(null!==n){e:{var r=xi;if(io){if(oo){t:{for(var o=oo,i=so;8!==o.nodeType;){if(!i){o=null;break t}if(null===(o=vd(o.nextSibling))){o=null;break t}}o="F!"===(i=o.data)||"F"===i?o:null}if(o){oo=vd(o.nextSibling),r="F!"===o.data;break e}}uo(r)}r=!1}r&&(t=n[0])}}return(n=Fi()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n.queue=r,n=Fa.bind(null,xi,r),r.dispatch=n,r=ea(!1),i=Ha.bind(null,xi,!1,r.queue),o={state:t,dispatch:null,action:e,pending:null},(r=Fi()).queue=o,n=na.bind(null,xi,o,i,n),o.dispatch=n,r.memoizedState=e,[t,n,!1]}function ca(e){return da(Mi(),wi,e)}function da(e,t,n){if(t=qi(e,t,la)[0],e=Wi(Vi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Hi(t)}catch(a){if(a===qo)throw Yo;throw a}else r=t;var o=(t=Mi()).queue,i=o.dispatch;return n!==t.memoizedState&&(xi.flags|=2048,pa(9,{destroy:void 0,resource:void 0},fa.bind(null,o,n),null)),[r,i,e]}function fa(e,t){e.action=t}function ha(e){var t=Mi(),n=wi;if(null!==n)return da(t,n,e);Mi(),t=t.memoizedState;var r=(n=Mi()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function pa(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ga(){return Mi().memoizedState}function ma(e,t,n,r){var o=Fi();r=void 0===r?null:r,xi.flags|=e,o.memoizedState=pa(1|t,{destroy:void 0,resource:void 0},n,r)}function va(e,t,n,r){var o=Mi();r=void 0===r?null:r;var i=o.memoizedState.inst;null!==wi&&null!==r&&Ni(r,wi.memoizedState.deps)?o.memoizedState=pa(t,i,n,r):(xi.flags|=e,o.memoizedState=pa(1|t,i,n,r))}function ba(e,t){ma(8390656,8,e,t)}function ya(e,t){va(2048,8,e,t)}function xa(e,t){return va(4,2,e,t)}function wa(e,t){return va(4,4,e,t)}function Sa(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ka(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,va(4,4,Sa.bind(null,t,e),n)}function Ea(){}function Ca(e,t){var n=Mi();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Ni(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Oa(e,t){var n=Mi();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Ni(t,r[1]))return r[0];if(r=e(),Ci){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r}function ja(e,t,n){return void 0===n||0!==(1073741824&yi)?e.memoizedState=t:(e.memoizedState=n,e=$u(),xi.lanes|=e,hu|=e,n)}function Ta(e,t,n,r){return Qn(n,t)?n:null!==pi.current?(e=ja(e,n,r),Qn(e,t)||(js=!0),e):0===(42&yi)?(js=!0,e.memoizedState=n):(e=$u(),xi.lanes|=e,hu|=e,t)}function Pa(e,t,n,r,o){var i=$.p;$.p=0!==i&&8>i?i:8;var a=_.T,s={};_.T=s,Ha(e,!1,t,n);try{var l=o(),u=_.S;if(null!==u&&u(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)Ma(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}(l,r),_u());else Ma(e,t,r,_u())}catch(c){Ma(e,t,{then:function(){},status:"rejected",reason:c},_u())}finally{$.p=i,_.T=a}}function Da(){}function Na(e,t,n,r){if(5!==e.tag)throw Error(a(476));var o=Ra(e).queue;Pa(e,o,t,z,null===n?Da:function(){return La(e),n(r)})}function Ra(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:z},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function La(e){Ma(e,Ra(e).next.queue,{},_u())}function _a(){return jo(Yd)}function $a(){return Mi().memoizedState}function za(){return Mi().memoizedState}function Ia(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=_u(),r=ai(t,e=ii(n),n);return null!==r&&(zu(r,t,n),si(r,t,n)),t={cache:_o()},void(e.payload=t)}t=t.return}}function Aa(e,t,n){var r=_u();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Ba(e)?Ua(t,n):null!==(n=Dr(e,t,n,r))&&(zu(n,e,r),Va(n,t,r))}function Fa(e,t,n){Ma(e,t,n,_u())}function Ma(e,t,n,r){var o={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ba(e))Ua(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Qn(s,a))return Pr(e,t,o,0),null===ru&&Tr(),!1}catch(l){}if(null!==(n=Dr(e,t,o,r)))return zu(n,e,r),Va(n,t,r),!0}return!1}function Ha(e,t,n,r){if(r={lane:2,revertLane:Pc(),action:r,hasEagerState:!1,eagerState:null,next:null},Ba(e)){if(t)throw Error(a(479))}else null!==(t=Dr(e,n,r,2))&&zu(t,e,2)}function Ba(e){var t=e.alternate;return e===xi||null!==t&&t===xi}function Ua(e,t){Ei=ki=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Va(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,je(e,n)}}var Wa={readContext:jo,use:Bi,useCallback:Di,useContext:Di,useEffect:Di,useImperativeHandle:Di,useLayoutEffect:Di,useInsertionEffect:Di,useMemo:Di,useReducer:Di,useRef:Di,useState:Di,useDebugValue:Di,useDeferredValue:Di,useTransition:Di,useSyncExternalStore:Di,useId:Di,useHostTransitionStatus:Di,useFormState:Di,useActionState:Di,useOptimistic:Di,useMemoCache:Di,useCacheRefresh:Di},qa={readContext:jo,use:Bi,useCallback:function(e,t){return Fi().memoizedState=[e,void 0===t?null:t],e},useContext:jo,useEffect:ba,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,ma(4194308,4,Sa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ma(4194308,4,e,t)},useInsertionEffect:function(e,t){ma(4,2,e,t)},useMemo:function(e,t){var n=Fi();t=void 0===t?null:t;var r=e();if(Ci){fe(!0);try{e()}finally{fe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Fi();if(void 0!==n){var o=n(t);if(Ci){fe(!0);try{n(t)}finally{fe(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=Aa.bind(null,xi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Fi().memoizedState=e},useState:function(e){var t=(e=ea(e)).queue,n=Fa.bind(null,xi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ea,useDeferredValue:function(e,t){return ja(Fi(),e,t)},useTransition:function(){var e=ea(!1);return e=Pa.bind(null,xi,e.queue,!0,!1),Fi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=xi,o=Fi();if(io){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===ru)throw Error(a(349));0!==(124&iu)||Qi(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ba(Xi.bind(null,r,i,e),[e]),r.flags|=2048,pa(9,{destroy:void 0,resource:void 0},Gi.bind(null,r,i,n,t),null),n},useId:function(){var e=Fi(),t=ru.identifierPrefix;if(io){var n=Jr;t="\xab"+t+"R"+(n=(Xr&~(1<<32-he(Xr)-1)).toString(32)+n),0<(n=Oi++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=Pi++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:_a,useFormState:ua,useActionState:ua,useOptimistic:function(e){var t=Fi();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ha.bind(null,xi,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ui,useCacheRefresh:function(){return Fi().memoizedState=Ia.bind(null,xi)}},Ka={readContext:jo,use:Bi,useCallback:Ca,useContext:jo,useEffect:ya,useImperativeHandle:ka,useInsertionEffect:xa,useLayoutEffect:wa,useMemo:Oa,useReducer:Wi,useRef:ga,useState:function(){return Wi(Vi)},useDebugValue:Ea,useDeferredValue:function(e,t){return Ta(Mi(),wi.memoizedState,e,t)},useTransition:function(){var e=Wi(Vi)[0],t=Mi().memoizedState;return["boolean"===typeof e?e:Hi(e),t]},useSyncExternalStore:Yi,useId:$a,useHostTransitionStatus:_a,useFormState:ca,useActionState:ca,useOptimistic:function(e,t){return ta(Mi(),0,e,t)},useMemoCache:Ui,useCacheRefresh:za},Ya={readContext:jo,use:Bi,useCallback:Ca,useContext:jo,useEffect:ya,useImperativeHandle:ka,useInsertionEffect:xa,useLayoutEffect:wa,useMemo:Oa,useReducer:Ki,useRef:ga,useState:function(){return Ki(Vi)},useDebugValue:Ea,useDeferredValue:function(e,t){var n=Mi();return null===wi?ja(n,e,t):Ta(n,wi.memoizedState,e,t)},useTransition:function(){var e=Ki(Vi)[0],t=Mi().memoizedState;return["boolean"===typeof e?e:Hi(e),t]},useSyncExternalStore:Yi,useId:$a,useHostTransitionStatus:_a,useFormState:ha,useActionState:ha,useOptimistic:function(e,t){var n=Mi();return null!==wi?ta(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ui,useCacheRefresh:za},Qa=null,Ga=0;function Xa(e){var t=Ga;return Ga+=1,null===Qa&&(Qa=[]),Jo(Qa,e,t)}function Ja(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Za(e,t){if(t.$$typeof===h)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function o(e,t){return(e=Ar(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Br(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===m?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===O&&es(i)===t.type)?(Ja(t=o(t,n.props),n),t.return=e,t):(Ja(t=Mr(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ur(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Hr(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Br(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case p:return Ja(n=Mr(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case g:return(t=Ur(t,e.mode,n)).return=e,t;case O:return f(e,t=(0,t._init)(t._payload),n)}if(L(t)||D(t))return(t=Hr(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return f(e,Xa(t),n);if(t.$$typeof===w)return f(e,To(e,t),n);Za(e,t)}return null}function h(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==o?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case p:return n.key===o?u(e,t,n,r):null;case g:return n.key===o?c(e,t,n,r):null;case O:return h(e,t,n=(o=n._init)(n._payload),r)}if(L(n)||D(n))return null!==o?null:d(e,t,n,r,null);if("function"===typeof n.then)return h(e,t,Xa(n),r);if(n.$$typeof===w)return h(e,t,To(e,n),r);Za(e,n)}return null}function v(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case p:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case g:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case O:return v(e,t,n,r=(0,r._init)(r._payload),o)}if(L(r)||D(r))return d(t,e=e.get(n)||null,r,o,null);if("function"===typeof r.then)return v(e,t,n,Xa(r),o);if(r.$$typeof===w)return v(e,t,n,To(t,r),o);Za(t,r)}return null}function b(l,u,c,d){if("object"===typeof c&&null!==c&&c.type===m&&null===c.key&&(c=c.props.children),"object"===typeof c&&null!==c){switch(c.$$typeof){case p:e:{for(var y=c.key;null!==u;){if(u.key===y){if((y=c.type)===m){if(7===u.tag){n(l,u.sibling),(d=o(u,c.props.children)).return=l,l=d;break e}}else if(u.elementType===y||"object"===typeof y&&null!==y&&y.$$typeof===O&&es(y)===u.type){n(l,u.sibling),Ja(d=o(u,c.props),c),d.return=l,l=d;break e}n(l,u);break}t(l,u),u=u.sibling}c.type===m?((d=Hr(c.props.children,l.mode,d,c.key)).return=l,l=d):(Ja(d=Mr(c.type,c.key,c.props,null,l.mode,d),c),d.return=l,l=d)}return s(l);case g:e:{for(y=c.key;null!==u;){if(u.key===y){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(d=o(u,c.children||[])).return=l,l=d;break e}n(l,u);break}t(l,u),u=u.sibling}(d=Ur(c,l.mode,d)).return=l,l=d}return s(l);case O:return b(l,u,c=(y=c._init)(c._payload),d)}if(L(c))return function(o,a,s,l){for(var u=null,c=null,d=a,p=a=0,g=null;null!==d&&p<s.length;p++){d.index>p?(g=d,d=null):g=d.sibling;var m=h(o,d,s[p],l);if(null===m){null===d&&(d=g);break}e&&d&&null===m.alternate&&t(o,d),a=i(m,a,p),null===c?u=m:c.sibling=m,c=m,d=g}if(p===s.length)return n(o,d),io&&Zr(o,p),u;if(null===d){for(;p<s.length;p++)null!==(d=f(o,s[p],l))&&(a=i(d,a,p),null===c?u=d:c.sibling=d,c=d);return io&&Zr(o,p),u}for(d=r(d);p<s.length;p++)null!==(g=v(d,o,p,s[p],l))&&(e&&null!==g.alternate&&d.delete(null===g.key?p:g.key),a=i(g,a,p),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(o,e)}),io&&Zr(o,p),u}(l,u,c,d);if(D(c)){if("function"!==typeof(y=D(c)))throw Error(a(150));return function(o,s,l,u){if(null==l)throw Error(a(151));for(var c=null,d=null,p=s,g=s=0,m=null,b=l.next();null!==p&&!b.done;g++,b=l.next()){p.index>g?(m=p,p=null):m=p.sibling;var y=h(o,p,b.value,u);if(null===y){null===p&&(p=m);break}e&&p&&null===y.alternate&&t(o,p),s=i(y,s,g),null===d?c=y:d.sibling=y,d=y,p=m}if(b.done)return n(o,p),io&&Zr(o,g),c;if(null===p){for(;!b.done;g++,b=l.next())null!==(b=f(o,b.value,u))&&(s=i(b,s,g),null===d?c=b:d.sibling=b,d=b);return io&&Zr(o,g),c}for(p=r(p);!b.done;g++,b=l.next())null!==(b=v(p,o,g,b.value,u))&&(e&&null!==b.alternate&&p.delete(null===b.key?g:b.key),s=i(b,s,g),null===d?c=b:d.sibling=b,d=b);return e&&p.forEach(function(e){return t(o,e)}),io&&Zr(o,g),c}(l,u,c=y.call(c),d)}if("function"===typeof c.then)return b(l,u,Xa(c),d);if(c.$$typeof===w)return b(l,u,To(l,c),d);Za(l,c)}return"string"===typeof c&&""!==c||"number"===typeof c||"bigint"===typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(d=o(u,c)).return=l,l=d):(n(l,u),(d=Br(c,l.mode,d)).return=l,l=d),s(l)):n(l,u)}return function(e,t,n,r){try{Ga=0;var o=b(e,t,n,r);return Qa=null,o}catch(a){if(a===qo||a===Yo)throw a;var i=zr(29,a,null,e.mode);return i.lanes=r,i.return=e,i}}}var ns=ts(!0),rs=ts(!1),os=F(null),is=null;function as(e){var t=e.alternate;H(cs,1&cs.current),H(os,e),null===is&&(null===t||null!==pi.current||null!==t.memoizedState)&&(is=e)}function ss(e){if(22===e.tag){if(H(cs,cs.current),H(os,e),null===is){var t=e.alternate;null!==t&&null!==t.memoizedState&&(is=e)}}else ls()}function ls(){H(cs,cs.current),H(os,os.current)}function us(e){M(os),is===e&&(is=null),M(cs)}var cs=F(0);function ds(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||md(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function fs(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:f({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_u(),o=ii(r);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=ai(e,o,r))&&(zu(t,e,r),si(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_u(),o=ii(r);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=ai(e,o,r))&&(zu(t,e,r),si(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_u(),r=ii(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=ai(e,r,n))&&(zu(t,e,n),si(t,e,n))}};function ps(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!Gn(n,r)||!Gn(o,i))}function gs(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hs.enqueueReplaceState(t,t.state,null)}function ms(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var o in n===t&&(n=f({},n)),e)void 0===n[o]&&(n[o]=e[o]);return n}var vs="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function bs(e){vs(e)}function ys(e){console.error(e)}function xs(e){vs(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function Ss(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ks(e,t,n){return(n=ii(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Es(e){return(e=ii(e)).tag=3,e}function Cs(e,t,n,r){var o=n.type.getDerivedStateFromError;if("function"===typeof o){var i=r.value;e.payload=function(){return o(i)},e.callback=function(){Ss(t,n,r)}}var a=n.stateNode;null!==a&&"function"===typeof a.componentDidCatch&&(e.callback=function(){Ss(t,n,r),"function"!==typeof o&&(null===Eu?Eu=new Set([this]):Eu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Os=Error(a(461)),js=!1;function Ts(e,t,n,r){t.child=null===e?rs(t,null,n,r):ns(t,e.child,n,r)}function Ps(e,t,n,r,o){n=n.render;var i=t.ref;if("ref"in r){var a={};for(var s in r)"ref"!==s&&(a[s]=r[s])}else a=r;return Oo(t),r=Ri(e,t,n,a,i,o),s=zi(),null===e||js?(io&&s&&to(t),t.flags|=1,Ts(e,t,r,o),t.child):(Ii(e,t,o),Qs(e,t,o))}function Ds(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Ir(i)||void 0!==i.defaultProps||null!==n.compare?((e=Mr(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Ns(e,t,i,r,o))}if(i=e.child,!Gs(e,o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:Gn)(a,r)&&e.ref===t.ref)return Qs(e,t,o)}return t.flags|=1,(e=Ar(i,r)).ref=t.ref,e.return=t,t.child=e}function Ns(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(Gn(i,r)&&e.ref===t.ref){if(js=!1,t.pendingProps=r=i,!Gs(e,o))return t.lanes=e.lanes,Qs(e,t,o);0!==(131072&e.flags)&&(js=!0)}}return $s(e,t,n,r,o)}function Rs(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==i?i.baseLanes|n:n,null!==e){for(o=t.child=e.child,i=0;null!==o;)i=i|o.lanes|o.childLanes,o=o.sibling;t.childLanes=i&~r}else t.childLanes=0,t.child=null;return Ls(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Ls(e,t,null!==i?i.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Vo(0,null!==i?i.cachePool:null),null!==i?mi(t,i):vi(),ss(t)}else null!==i?(Vo(0,i.cachePool),mi(t,i),ls(),t.memoizedState=null):(null!==e&&Vo(0,null),vi(),ls());return Ts(e,t,o,n),t.child}function Ls(e,t,n,r){var o=Uo();return o=null===o?null:{parent:Lo._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Vo(0,null),vi(),ss(t),null!==e&&Eo(e,t,r,!0),null}function _s(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function $s(e,t,n,r,o){return Oo(t),n=Ri(e,t,n,r,void 0,o),r=zi(),null===e||js?(io&&r&&to(t),t.flags|=1,Ts(e,t,n,o),t.child):(Ii(e,t,o),Qs(e,t,o))}function zs(e,t,n,r,o,i){return Oo(t),t.updateQueue=null,n=_i(t,r,n,o),Li(e),r=zi(),null===e||js?(io&&r&&to(t),t.flags|=1,Ts(e,t,n,i),t.child):(Ii(e,t,i),Qs(e,t,i))}function Is(e,t,n,r,o){if(Oo(t),null===t.stateNode){var i=_r,a=n.contextType;"object"===typeof a&&null!==a&&(i=jo(a)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=hs,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},ri(t),a=n.contextType,i.context="object"===typeof a&&null!==a?jo(a):_r,i.state=t.memoizedState,"function"===typeof(a=n.getDerivedStateFromProps)&&(fs(t,n,a,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(a=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),a!==i.state&&hs.enqueueReplaceState(i,i.state,null),di(t,r,i,o),ci(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var s=t.memoizedProps,l=ms(n,s);i.props=l;var u=i.context,c=n.contextType;a=_r,"object"===typeof c&&null!==c&&(a=jo(c));var d=n.getDerivedStateFromProps;c="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,s=t.pendingProps!==s,c||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(s||u!==a)&&gs(t,i,r,a),ni=!1;var f=t.memoizedState;i.state=f,di(t,r,i,o),ci(),u=t.memoizedState,s||f!==u||ni?("function"===typeof d&&(fs(t,n,d,r),u=t.memoizedState),(l=ni||ps(t,n,l,r,f,u,a))?(c||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),i.props=r,i.state=u,i.context=a,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,oi(e,t),c=ms(n,a=t.memoizedProps),i.props=c,d=t.pendingProps,f=i.context,u=n.contextType,l=_r,"object"===typeof u&&null!==u&&(l=jo(u)),(u="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(a!==d||f!==l)&&gs(t,i,r,l),ni=!1,f=t.memoizedState,i.state=f,di(t,r,i,o),ci();var h=t.memoizedState;a!==d||f!==h||ni||null!==e&&null!==e.dependencies&&Co(e.dependencies)?("function"===typeof s&&(fs(t,n,s,r),h=t.memoizedState),(c=ni||ps(t,n,c,r,f,h,l)||null!==e&&null!==e.dependencies&&Co(e.dependencies))?(u||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,l),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,l)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=l,r=c):("function"!==typeof i.componentDidUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,_s(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=ns(t,e.child,null,o),t.child=ns(t,null,n,o)):Ts(e,t,n,o),t.memoizedState=i.state,e=t.child):e=Qs(e,t,o),e}function As(e,t,n,r){return po(),t.flags|=256,Ts(e,t,n,r),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ms(e){return{baseLanes:e,cachePool:Wo()}}function Hs(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=mu),e}function Bs(e,t,n){var r,o=t.pendingProps,i=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&cs.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(io){if(i?as(t):ls(),io){var l,u=oo;if(l=u){e:{for(l=u,u=so;8!==l.nodeType;){if(!u){u=null;break e}if(null===(l=vd(l.nextSibling))){u=null;break e}}u=l}null!==u?(t.memoizedState={dehydrated:u,treeContext:null!==Gr?{id:Xr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},(l=zr(18,null,null,0)).stateNode=u,l.return=t,t.child=l,ro=t,oo=null,l=!0):l=!1}l||uo(t)}if(null!==(u=t.memoizedState)&&null!==(u=u.dehydrated))return md(u)?t.lanes=32:t.lanes=536870912,null;us(t)}return u=o.children,o=o.fallback,i?(ls(),u=Vs({mode:"hidden",children:u},i=t.mode),o=Hr(o,i,n,null),u.return=t,o.return=t,u.sibling=o,t.child=u,(i=t.child).memoizedState=Ms(n),i.childLanes=Hs(e,r,n),t.memoizedState=Fs,o):(as(t),Us(t,u))}if(null!==(l=e.memoizedState)&&null!==(u=l.dehydrated)){if(s)256&t.flags?(as(t),t.flags&=-257,t=Ws(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),i=o.fallback,u=t.mode,o=Vs({mode:"visible",children:o.children},u),(i=Hr(i,u,n,null)).flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,ns(t,e.child,null,n),(o=t.child).memoizedState=Ms(n),o.childLanes=Hs(e,r,n),t.memoizedState=Fs,t=i);else if(as(t),md(u)){if(r=u.nextSibling&&u.nextSibling.dataset)var c=r.dgst;r=c,(o=Error(a(419))).stack="",o.digest=r,mo({value:o,source:null,stack:null}),t=Ws(e,t,n)}else if(js||Eo(e,t,n,!1),r=0!==(n&e.childLanes),js||r){if(null!==(r=ru)&&(0!==(o=0!==((o=0!==(42&(o=n&-n))?1:Te(o))&(r.suspendedLanes|n))?0:o)&&o!==l.retryLane))throw l.retryLane=o,Nr(e,o),zu(r,e,o),Os;"$?"===u.data||Ku(),t=Ws(e,t,n)}else"$?"===u.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,oo=vd(u.nextSibling),ro=t,io=!0,ao=null,so=!1,null!==e&&(Yr[Qr++]=Xr,Yr[Qr++]=Jr,Yr[Qr++]=Gr,Xr=e.id,Jr=e.overflow,Gr=t),(t=Us(t,o.children)).flags|=4096);return t}return i?(ls(),i=o.fallback,u=t.mode,c=(l=e.child).sibling,(o=Ar(l,{mode:"hidden",children:o.children})).subtreeFlags=65011712&l.subtreeFlags,null!==c?i=Ar(c,i):(i=Hr(i,u,n,null)).flags|=2,i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,null===(u=e.child.memoizedState)?u=Ms(n):(null!==(l=u.cachePool)?(c=Lo._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Wo(),u={baseLanes:u.baseLanes|n,cachePool:l}),i.memoizedState=u,i.childLanes=Hs(e,r,n),t.memoizedState=Fs,o):(as(t),e=(n=e.child).sibling,(n=Ar(n,{mode:"visible",children:o.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Us(e,t){return(t=Vs({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Vs(e,t){return(e=zr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ws(e,t,n){return ns(t,e.child,null,n),(e=Us(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function qs(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),So(e.return,t,n)}function Ks(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ys(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ts(e,t,r.children,n),0!==(2&(r=cs.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&qs(e,n,t);else if(19===e.tag)qs(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(H(cs,r),o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ds(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ks(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ds(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ks(t,!0,n,null,i);break;case"together":Ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),hu|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Eo(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Ar(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ar(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Gs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Co(e))}function Xs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)js=!0;else{if(!Gs(e,n)&&0===(128&t.flags))return js=!1,function(e,t,n){switch(t.tag){case 3:q(t,t.stateNode.containerInfo),xo(0,Lo,e.memoizedState.cache),po();break;case 27:case 5:Y(t);break;case 4:q(t,t.stateNode.containerInfo);break;case 10:xo(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(as(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Bs(e,t,n):(as(t),null!==(e=Qs(e,t,n))?e.sibling:null);as(t);break;case 19:var o=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Eo(e,t,n,!1),r=0!==(n&t.childLanes)),o){if(r)return Ys(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),H(cs,cs.current),r)break;return null;case 22:case 23:return t.lanes=0,Rs(e,t,n);case 24:xo(0,Lo,e.memoizedState.cache)}return Qs(e,t,n)}(e,t,n);js=0!==(131072&e.flags)}else js=!1,io&&0!==(1048576&t.flags)&&eo(t,Kr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,o=r._init;if(r=o(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((o=r.$$typeof)===S){t.tag=11,t=Ps(null,t,r,e,n);break e}if(o===C){t.tag=14,t=Ds(null,t,r,e,n);break e}}throw t=R(r)||r,Error(a(306,t,""))}Ir(r)?(e=ms(r,e),t.tag=1,t=Is(null,t,r,e,n)):(t.tag=0,t=$s(null,t,r,e,n))}return t;case 0:return $s(e,t,t.type,t.pendingProps,n);case 1:return Is(e,t,r=t.type,o=ms(r,t.pendingProps),n);case 3:e:{if(q(t,t.stateNode.containerInfo),null===e)throw Error(a(387));r=t.pendingProps;var i=t.memoizedState;o=i.element,oi(e,t),di(t,r,null,n);var s=t.memoizedState;if(r=s.cache,xo(0,Lo,r),r!==i.cache&&ko(t,[Lo],n,!0),ci(),r=s.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=As(e,t,r,n);break e}if(r!==o){mo(o=Er(Error(a(424)),t)),t=As(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(oo=vd(e.firstChild),ro=t,io=!0,ao=null,so=!0,n=rs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(po(),r===o){t=Qs(e,t,n);break e}Ts(e,t,r,n)}t=t.child}return t;case 26:return _s(e,t),null===e?(n=Td(t.type,null,t.pendingProps,null))?t.memoizedState=n:io||(n=t.type,e=t.pendingProps,(r=rd(V.current).createElement(n))[Re]=t,r[Le]=e,ed(r,n,e),We(r),t.stateNode=r):t.memoizedState=Td(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Y(t),null===e&&io&&(r=t.stateNode=xd(t.type,t.pendingProps,V.current),ro=t,so=!0,o=oo,hd(t.type)?(bd=o,oo=vd(r.firstChild)):oo=o),Ts(e,t,t.pendingProps.children,n),_s(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&io&&((o=r=oo)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Fe])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==o.rel||e.getAttribute("href")!==(null==o.href||""===o.href?null:o.href)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin)||e.getAttribute("title")!==(null==o.title?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==o.src?null:o.src)||e.getAttribute("type")!==(null==o.type?null:o.type)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==o.name?null:""+o.name;if("hidden"===o.type&&e.getAttribute("name")===i)return e}if(null===(e=vd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,so))?(t.stateNode=r,ro=t,oo=vd(r.firstChild),so=!1,o=!0):o=!1),o||uo(t)),Y(t),o=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,r=i.children,ad(o,i)?r=null:null!==s&&ad(o,s)&&(t.flags|=32),null!==t.memoizedState&&(o=Ri(e,t,$i,null,null,n),Yd._currentValue=o),_s(e,t),Ts(e,t,r,n),t.child;case 6:return null===e&&io&&((e=n=oo)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=vd(e.nextSibling)))return null}return e}(n,t.pendingProps,so))?(t.stateNode=n,ro=t,oo=null,e=!0):e=!1),e||uo(t)),null;case 13:return Bs(e,t,n);case 4:return q(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ns(t,null,r,n):Ts(e,t,r,n),t.child;case 11:return Ps(e,t,t.type,t.pendingProps,n);case 7:return Ts(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ts(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,xo(0,t.type,r.value),Ts(e,t,r.children,n),t.child;case 9:return o=t.type._context,r=t.pendingProps.children,Oo(t),r=r(o=jo(o)),t.flags|=1,Ts(e,t,r,n),t.child;case 14:return Ds(e,t,t.type,t.pendingProps,n);case 15:return Ns(e,t,t.type,t.pendingProps,n);case 19:return Ys(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Vs(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Ar(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Rs(e,t,n);case 24:return Oo(t),r=jo(Lo),null===e?(null===(o=Uo())&&(o=ru,i=_o(),o.pooledCache=i,i.refCount++,null!==i&&(o.pooledCacheLanes|=n),o=i),t.memoizedState={parent:r,cache:o},ri(t),xo(0,Lo,o)):(0!==(e.lanes&n)&&(oi(e,t),di(t,null,null,n),ci()),o=e.memoizedState,i=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=o),xo(0,Lo,r)):(r=i.cache,xo(0,Lo,r),r!==o.cache&&ko(t,[Lo],n,!0))),Ts(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Js(e){e.flags|=4}function Zs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Hd(t)){if(null!==(t=os.current)&&((4194048&iu)===iu?null!==is:(62914560&iu)!==iu&&0===(536870912&iu)||t!==is))throw Zo=Qo,Ko;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,vu|=t)}function tl(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=65011712&o.subtreeFlags,r|=65011712&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rl(e,t,n){var r=t.pendingProps;switch(no(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),wo(Lo),K(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(ho(t)?Js(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,go())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Js(t),null!==n?(nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Js(t),nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==r&&Js(t),nl(t),t.flags&=-16777217),null;case 27:Q(t),n=V.current;var o=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return nl(t),null}e=B.current,ho(t)?co(t):(e=xd(o,r,n),t.stateNode=e,Js(t))}return nl(t),null;case 5:if(Q(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return nl(t),null}if(e=B.current,ho(t))co(t);else{switch(o=rd(V.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?o.createElement(n,{is:r.is}):o.createElement(n)}}e[Re]=t,e[Le]=r;e:for(o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode);else if(4!==o.tag&&27!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;null===o.sibling;){if(null===o.return||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Js(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(e=V.current,ho(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(o=ro))switch(o.tag){case 27:case 5:r=o.memoizedProps}e[Re]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Gc(e.nodeValue,n)))||uo(t)}else(e=rd(e).createTextNode(r))[Re]=t,t.stateNode=e}return nl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=ho(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[Re]=t}else po(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),o=!1}else o=go(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return 256&t.flags?(us(t),t):(us(t),null)}if(us(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){o=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(o=r.alternate.memoizedState.cachePool.pool);var i=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==o&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return K(),null===e&&Mc(t.stateNode.containerInfo),nl(t),null;case 10:return wo(t.type),nl(t),null;case 19:if(M(cs),null===(o=t.memoizedState))return nl(t),null;if(r=0!==(128&t.flags),null===(i=o.rendering))if(r)tl(o,!1);else{if(0!==fu||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=ds(e))){for(t.flags|=128,tl(o,!1),e=i.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Fr(n,e),n=n.sibling;return H(cs,1&cs.current|2),t.child}e=e.sibling}null!==o.tail&&te()>Su&&(t.flags|=128,r=!0,tl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ds(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!i.alternate&&!io)return nl(t),null}else 2*te()-o.renderingStartTime>Su&&536870912!==n&&(t.flags|=128,r=!0,tl(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=o.last)?e.sibling=i:t.child=i,o.last=i)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,e=cs.current,H(cs,r?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return us(t),bi(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&M(Bo),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wo(Lo),nl(t),null;case 25:case 30:return null}throw Error(a(156,t.tag))}function ol(e,t){switch(no(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return wo(Lo),K(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return Q(t),null;case 13:if(us(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));po()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return M(cs),null;case 4:return K(),null;case 10:return wo(t.type),null;case 22:case 23:return us(t),bi(),null!==e&&M(Bo),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return wo(Lo),null;default:return null}}function il(e,t){switch(no(t),t.tag){case 3:wo(Lo),K();break;case 26:case 27:case 5:Q(t);break;case 4:K();break;case 13:us(t);break;case 19:M(cs);break;case 10:wo(t.type);break;case 22:case 23:us(t),bi(),null!==e&&M(Bo);break;case 24:wo(Lo)}}function al(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var o=r.next;n=o;do{if((n.tag&e)===e){r=void 0;var i=n.create,a=n.inst;r=i(),a.destroy=r}n=n.next}while(n!==o)}}catch(s){cc(t,t.return,s)}}function sl(e,t,n){try{var r=t.updateQueue,o=null!==r?r.lastEffect:null;if(null!==o){var i=o.next;r=i;do{if((r.tag&e)===e){var a=r.inst,s=a.destroy;if(void 0!==s){a.destroy=void 0,o=t;var l=n,u=s;try{u()}catch(c){cc(o,l,c)}}}r=r.next}while(r!==i)}}catch(c){cc(t,t.return,c)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{hi(t,n)}catch(r){cc(e,e.return,r)}}}function ul(e,t,n){n.props=ms(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){cc(e,t,r)}}function cl(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(o){cc(e,t,o)}}function dl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(o){cc(e,t,o)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){cc(e,t,i)}else n.current=null}function fl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){cc(e,e.return,o)}}function hl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,s=null,l=null,u=null,c=null,d=null;for(p in n){var f=n[p];if(n.hasOwnProperty(p)&&null!=f)switch(p){case"checked":case"value":break;case"defaultValue":u=f;default:r.hasOwnProperty(p)||Jc(e,t,p,null,r,f)}}for(var h in r){var p=r[h];if(f=n[h],r.hasOwnProperty(h)&&(null!=p||null!=f))switch(h){case"type":i=p;break;case"name":o=p;break;case"checked":c=p;break;case"defaultChecked":d=p;break;case"value":s=p;break;case"defaultValue":l=p;break;case"children":case"dangerouslySetInnerHTML":if(null!=p)throw Error(a(137,t));break;default:p!==f&&Jc(e,t,h,p,r,f)}}return void mt(e,s,l,u,c,d,i,o);case"select":for(i in p=s=l=h=null,n)if(u=n[i],n.hasOwnProperty(i)&&null!=u)switch(i){case"value":break;case"multiple":p=u;default:r.hasOwnProperty(i)||Jc(e,t,i,null,r,u)}for(o in r)if(i=r[o],u=n[o],r.hasOwnProperty(o)&&(null!=i||null!=u))switch(o){case"value":h=i;break;case"defaultValue":l=i;break;case"multiple":s=i;default:i!==u&&Jc(e,t,o,i,r,u)}return t=l,n=s,r=p,void(null!=h?yt(e,!!n,h,!1):!!r!==!!n&&(null!=t?yt(e,!!n,t,!0):yt(e,!!n,n?[]:"",!1)));case"textarea":for(l in p=h=null,n)if(o=n[l],n.hasOwnProperty(l)&&null!=o&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Jc(e,t,l,null,r,o)}for(s in r)if(o=r[s],i=n[s],r.hasOwnProperty(s)&&(null!=o||null!=i))switch(s){case"value":h=o;break;case"defaultValue":p=o;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=o)throw Error(a(91));break;default:o!==i&&Jc(e,t,s,o,r,i)}return void xt(e,h,p);case"option":for(var g in n)if(h=n[g],n.hasOwnProperty(g)&&null!=h&&!r.hasOwnProperty(g))if("selected"===g)e.selected=!1;else Jc(e,t,g,null,r,h);for(u in r)if(h=r[u],p=n[u],r.hasOwnProperty(u)&&h!==p&&(null!=h||null!=p))if("selected"===u)e.selected=h&&"function"!==typeof h&&"symbol"!==typeof h;else Jc(e,t,u,h,r,p);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var m in n)h=n[m],n.hasOwnProperty(m)&&null!=h&&!r.hasOwnProperty(m)&&Jc(e,t,m,null,r,h);for(c in r)if(h=r[c],p=n[c],r.hasOwnProperty(c)&&h!==p&&(null!=h||null!=p))switch(c){case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(a(137,t));break;default:Jc(e,t,c,h,r,p)}return;default:if(Ot(t)){for(var v in n)h=n[v],n.hasOwnProperty(v)&&void 0!==h&&!r.hasOwnProperty(v)&&Zc(e,t,v,void 0,r,h);for(d in r)h=r[d],p=n[d],!r.hasOwnProperty(d)||h===p||void 0===h&&void 0===p||Zc(e,t,d,h,r,p);return}}for(var b in n)h=n[b],n.hasOwnProperty(b)&&null!=h&&!r.hasOwnProperty(b)&&Jc(e,t,b,null,r,h);for(f in r)h=r[f],p=n[f],!r.hasOwnProperty(f)||h===p||null==h&&null==p||Jc(e,t,f,h,r,p)}(r,e.type,n,t),r[Le]=t}catch(o){cc(e,e.return,o)}}function pl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&hd(e.type)||4===e.tag}function gl(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||pl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&hd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ml(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Xc));else if(4!==r&&(27===r&&hd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(ml(e,t,n),e=e.sibling;null!==e;)ml(e,t,n),e=e.sibling}function vl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&hd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(vl(e,t,n),e=e.sibling;null!==e;)vl(e,t,n),e=e.sibling}function bl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ed(t,r,n),t[Re]=e,t[Le]=n}catch(i){cc(e,e.return,i)}}var yl=!1,xl=!1,wl=!1,Sl="function"===typeof WeakSet?WeakSet:Set,kl=null;function El(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Il(e,n),4&r&&al(5,n);break;case 1:if(Il(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(a){cc(n,n.return,a)}else{var o=ms(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){cc(n,n.return,s)}}64&r&&ll(n),512&r&&cl(n,n.return);break;case 3:if(Il(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{hi(e,t)}catch(a){cc(n,n.return,a)}}break;case 27:null===t&&4&r&&bl(n);case 26:case 5:Il(e,n),null===t&&4&r&&fl(n),512&r&&cl(n,n.return);break;case 12:Il(e,n);break;case 13:Il(e,n),4&r&&Dl(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=pc.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||yl)){t=null!==t&&null!==t.memoizedState||xl,o=yl;var i=xl;yl=r,(xl=t)&&!i?Fl(e,n,0!==(8772&n.subtreeFlags)):Il(e,n),yl=o,xl=i}break;case 30:break;default:Il(e,n)}}function Cl(e){var t=e.alternate;null!==t&&(e.alternate=null,Cl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&Me(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ol=null,jl=!1;function Tl(e,t,n){for(n=n.child;null!==n;)Pl(e,t,n),n=n.sibling}function Pl(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ce,n)}catch(i){}switch(n.tag){case 26:xl||dl(n,t),Tl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xl||dl(n,t);var r=Ol,o=jl;hd(n.type)&&(Ol=n.stateNode,jl=!1),Tl(e,t,n),wd(n.stateNode),Ol=r,jl=o;break;case 5:xl||dl(n,t);case 6:if(r=Ol,o=jl,Ol=null,Tl(e,t,n),jl=o,null!==(Ol=r))if(jl)try{(9===Ol.nodeType?Ol.body:"HTML"===Ol.nodeName?Ol.ownerDocument.body:Ol).removeChild(n.stateNode)}catch(a){cc(n,t,a)}else try{Ol.removeChild(n.stateNode)}catch(a){cc(n,t,a)}break;case 18:null!==Ol&&(jl?(pd(9===(e=Ol).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Tf(e)):pd(Ol,n.stateNode));break;case 4:r=Ol,o=jl,Ol=n.stateNode.containerInfo,jl=!0,Tl(e,t,n),Ol=r,jl=o;break;case 0:case 11:case 14:case 15:xl||sl(2,n,t),xl||sl(4,n,t),Tl(e,t,n);break;case 1:xl||(dl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&ul(n,t,r)),Tl(e,t,n);break;case 21:Tl(e,t,n);break;case 22:xl=(r=xl)||null!==n.memoizedState,Tl(e,t,n),xl=r;break;default:Tl(e,t,n)}}function Dl(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Tf(e)}catch(n){cc(t,t.return,n)}}function Nl(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Sl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Sl),t;default:throw Error(a(435,e.tag))}}(e);t.forEach(function(t){var r=gc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}function Rl(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r],i=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(hd(l.type)){Ol=l.stateNode,jl=!1;break e}break;case 5:Ol=l.stateNode,jl=!1;break e;case 3:case 4:Ol=l.stateNode.containerInfo,jl=!0;break e}l=l.return}if(null===Ol)throw Error(a(160));Pl(i,s,o),Ol=null,jl=!1,null!==(i=o.alternate)&&(i.return=null),o.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)_l(t,e),t=t.sibling}var Ll=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Rl(t,e),$l(e),4&r&&(sl(3,e,e.return),al(3,e),sl(5,e,e.return));break;case 1:Rl(t,e),$l(e),512&r&&(xl||null===n||dl(n,n.return)),64&r&&yl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var o=Ll;if(Rl(t,e),$l(e),512&r&&(xl||null===n||dl(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(r){case"title":(!(i=o.getElementsByTagName("title")[0])||i[Fe]||i[Re]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=o.createElement(r),o.head.insertBefore(i,o.querySelector("head > title"))),ed(i,r,n),i[Re]=e,We(i),r=i;break e;case"link":var s=Fd("link","href",o).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((i=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}ed(i=o.createElement(r),r,n),o.head.appendChild(i);break;case"meta":if(s=Fd("meta","content",o).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((i=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}ed(i=o.createElement(r),r,n),o.head.appendChild(i);break;default:throw Error(a(468,r))}i[Re]=e,We(i),r=i}e.stateNode=r}else Md(o,e.type,e.stateNode);else e.stateNode=_d(o,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?Md(o,e.type,e.stateNode):_d(o,r,e.memoizedProps)):null===r&&null!==e.stateNode&&hl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Rl(t,e),$l(e),512&r&&(xl||null===n||dl(n,n.return)),null!==n&&4&r&&hl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Rl(t,e),$l(e),512&r&&(xl||null===n||dl(n,n.return)),32&e.flags){o=e.stateNode;try{St(o,"")}catch(p){cc(e,e.return,p)}}4&r&&null!=e.stateNode&&hl(e,o=e.memoizedProps,null!==n?n.memoizedProps:o),1024&r&&(wl=!0);break;case 6:if(Rl(t,e),$l(e),4&r){if(null===e.stateNode)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(p){cc(e,e.return,p)}}break;case 3:if(Ad=null,o=Ll,Ll=Ed(t.containerInfo),Rl(t,e),Ll=o,$l(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Tf(t.containerInfo)}catch(p){cc(e,e.return,p)}wl&&(wl=!1,zl(e));break;case 4:r=Ll,Ll=Ed(e.stateNode.containerInfo),Rl(t,e),$l(e),Ll=r;break;case 12:default:Rl(t,e),$l(e);break;case 13:Rl(t,e),$l(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wu=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Nl(e,r)));break;case 22:o=null!==e.memoizedState;var u=null!==n&&null!==n.memoizedState,c=yl,d=xl;if(yl=c||o,xl=d||u,Rl(t,e),xl=d,yl=c,$l(e),8192&r)e:for(t=e.stateNode,t._visibility=o?-2&t._visibility:1|t._visibility,o&&(null===n||u||yl||xl||Al(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){u=n=t;try{if(i=u.stateNode,o)"function"===typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=u.stateNode;var f=u.memoizedProps.style,h=void 0!==f&&null!==f&&f.hasOwnProperty("display")?f.display:null;l.style.display=null==h||"boolean"===typeof h?"":(""+h).trim()}}catch(p){cc(u,u.return,p)}}}else if(6===t.tag){if(null===n){u=t;try{u.stateNode.nodeValue=o?"":u.memoizedProps}catch(p){cc(u,u.return,p)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Nl(e,n))));break;case 19:Rl(t,e),$l(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Nl(e,r)));case 30:case 21:}}function $l(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(pl(r)){n=r;break}r=r.return}if(null==n)throw Error(a(160));switch(n.tag){case 27:var o=n.stateNode;vl(e,gl(e),o);break;case 5:var i=n.stateNode;32&n.flags&&(St(i,""),n.flags&=-33),vl(e,gl(e),i);break;case 3:case 4:var s=n.stateNode.containerInfo;ml(e,gl(e),s);break;default:throw Error(a(161))}}catch(l){cc(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function zl(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;zl(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Il(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)El(e,t.alternate,t),t=t.sibling}function Al(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Al(t);break;case 1:dl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&ul(t,t.return,n),Al(t);break;case 27:wd(t.stateNode);case 26:case 5:dl(t,t.return),Al(t);break;case 22:null===t.memoizedState&&Al(t);break;default:Al(t)}e=e.sibling}}function Fl(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,o=e,i=t,a=i.flags;switch(i.tag){case 0:case 11:case 15:Fl(o,i,n),al(4,i);break;case 1:if(Fl(o,i,n),"function"===typeof(o=(r=i).stateNode).componentDidMount)try{o.componentDidMount()}catch(u){cc(r,r.return,u)}if(null!==(o=(r=i).updateQueue)){var s=r.stateNode;try{var l=o.shared.hiddenCallbacks;if(null!==l)for(o.shared.hiddenCallbacks=null,o=0;o<l.length;o++)fi(l[o],s)}catch(u){cc(r,r.return,u)}}n&&64&a&&ll(i),cl(i,i.return);break;case 27:bl(i);case 26:case 5:Fl(o,i,n),n&&null===r&&4&a&&fl(i),cl(i,i.return);break;case 12:Fl(o,i,n);break;case 13:Fl(o,i,n),n&&4&a&&Dl(o,i);break;case 22:null===i.memoizedState&&Fl(o,i,n),cl(i,i.return);break;case 30:break;default:Fl(o,i,n)}t=t.sibling}}function Ml(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&$o(n))}function Hl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&$o(e))}function Bl(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Ul(e,t,n,r),t=t.sibling}function Ul(e,t,n,r){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Bl(e,t,n,r),2048&o&&al(9,t);break;case 1:case 13:default:Bl(e,t,n,r);break;case 3:Bl(e,t,n,r),2048&o&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&$o(e)));break;case 12:if(2048&o){Bl(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,a=i.id,s=i.onPostCommit;"function"===typeof s&&s(a,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){cc(t,t.return,l)}}else Bl(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,a=t.alternate,null!==t.memoizedState?2&i._visibility?Bl(e,t,n,r):Wl(e,t):2&i._visibility?Bl(e,t,n,r):(i._visibility|=2,Vl(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&o&&Ml(a,t);break;case 24:Bl(e,t,n,r),2048&o&&Hl(t.alternate,t)}}function Vl(e,t,n,r,o){for(o=o&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var i=e,a=t,s=n,l=r,u=a.flags;switch(a.tag){case 0:case 11:case 15:Vl(i,a,s,l,o),al(8,a);break;case 23:break;case 22:var c=a.stateNode;null!==a.memoizedState?2&c._visibility?Vl(i,a,s,l,o):Wl(i,a):(c._visibility|=2,Vl(i,a,s,l,o)),o&&2048&u&&Ml(a.alternate,a);break;case 24:Vl(i,a,s,l,o),o&&2048&u&&Hl(a.alternate,a);break;default:Vl(i,a,s,l,o)}t=t.sibling}}function Wl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,o=r.flags;switch(r.tag){case 22:Wl(n,r),2048&o&&Ml(r.alternate,r);break;case 24:Wl(n,r),2048&o&&Hl(r.alternate,r);break;default:Wl(n,r)}t=t.sibling}}var ql=8192;function Kl(e){if(e.subtreeFlags&ql)for(e=e.child;null!==e;)Yl(e),e=e.sibling}function Yl(e){switch(e.tag){case 26:Kl(e),e.flags&ql&&null!==e.memoizedState&&function(e,t,n){if(null===Bd)throw Error(a(475));var r=Bd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var o=Pd(n.href),i=e.querySelector(Dd(o));if(i)return null!==(e=i._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Vd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=i,void We(i);i=e.ownerDocument||e,n=Nd(n),(o=Sd.get(o))&&zd(n,o),We(i=i.createElement("link"));var s=i;s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ed(i,"link",n),t.instance=i}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Vd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Ll,e.memoizedState,e.memoizedProps);break;case 5:default:Kl(e);break;case 3:case 4:var t=Ll;Ll=Ed(e.stateNode.containerInfo),Kl(e),Ll=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=ql,ql=16777216,Kl(e),ql=t):Kl(e))}}function Ql(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Gl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Ql(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Xl(e),e=e.sibling}function Xl(e){switch(e.tag){case 0:case 11:case 15:Gl(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:Gl(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Jl(e)):Gl(e)}}function Jl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Ql(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Jl(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Zl(e,t){for(;null!==kl;){var n=kl;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:$o(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,kl=r;else e:for(n=e;null!==kl;){var o=(r=kl).sibling,i=r.return;if(Cl(r),r===n){kl=null;break e}if(null!==o){o.return=i,kl=o;break e}kl=i}}}var eu={getCacheForType:function(e){var t=jo(Lo),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tu="function"===typeof WeakMap?WeakMap:Map,nu=0,ru=null,ou=null,iu=0,au=0,su=null,lu=!1,uu=!1,cu=!1,du=0,fu=0,hu=0,pu=0,gu=0,mu=0,vu=0,bu=null,yu=null,xu=!1,wu=0,Su=1/0,ku=null,Eu=null,Cu=0,Ou=null,ju=null,Tu=0,Pu=0,Du=null,Nu=null,Ru=0,Lu=null;function _u(){if(0!==(2&nu)&&0!==iu)return iu&-iu;if(null!==_.T){return 0!==Ao?Ao:Pc()}return De()}function $u(){0===mu&&(mu=0===(536870912&iu)||io?Se():536870912);var e=os.current;return null!==e&&(e.flags|=32),mu}function zu(e,t,n){(e!==ru||2!==au&&9!==au)&&null===e.cancelPendingCommit||(Uu(e,0),Mu(e,iu,mu,!1)),Ce(e,n),0!==(2&nu)&&e===ru||(e===ru&&(0===(2&nu)&&(pu|=n),4===fu&&Mu(e,iu,mu,!1)),Sc(e))}function Iu(e,t,n){if(0!==(6&nu))throw Error(a(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),o=r?function(e,t){var n=nu;nu|=2;var r=Wu(),o=qu();ru!==e||iu!==t?(ku=null,Su=te()+500,Uu(e,t)):uu=xe(e,t);e:for(;;)try{if(0!==au&&null!==ou){t=ou;var i=su;t:switch(au){case 1:au=0,su=null,Zu(e,t,i,1);break;case 2:case 9:if(Go(i)){au=0,su=null,Ju(t);break}t=function(){2!==au&&9!==au||ru!==e||(au=7),Sc(e)},i.then(t,t);break e;case 3:au=7;break e;case 4:au=5;break e;case 7:Go(i)?(au=0,su=null,Ju(t)):(au=0,su=null,Zu(e,t,i,7));break;case 5:var s=null;switch(ou.tag){case 26:s=ou.memoizedState;case 5:case 27:var l=ou;if(!s||Hd(s)){au=0,su=null;var u=l.sibling;if(null!==u)ou=u;else{var c=l.return;null!==c?(ou=c,ec(c)):ou=null}break t}}au=0,su=null,Zu(e,t,i,5);break;case 6:au=0,su=null,Zu(e,t,i,6);break;case 8:Bu(),fu=6;break e;default:throw Error(a(462))}}Gu();break}catch(d){Vu(e,d)}return yo=bo=null,_.H=r,_.A=o,nu=n,null!==ou?0:(ru=null,iu=0,Tr(),fu)}(e,t):Yu(e,t,!0),i=r;;){if(0===o){uu&&!r&&Mu(e,t,0,!1);break}if(n=e.current.alternate,!i||Fu(n)){if(2===o){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;o=bu;var u=l.current.memoizedState.isDehydrated;if(u&&(Uu(l,s).flags|=256),2!==(s=Yu(l,s,!1))){if(cu&&!u){l.errorRecoveryDisabledLanes|=i,pu|=i,o=4;break e}i=yu,yu=o,null!==i&&(null===yu?yu=i:yu.push.apply(yu,i))}o=s}if(i=!1,2!==o)continue}}if(1===o){Uu(e,0),Mu(e,t,0,!0);break}e:{switch(r=e,i=o){case 0:case 1:throw Error(a(345));case 4:if((4194048&t)!==t)break;case 6:Mu(r,t,mu,!lu);break e;case 2:yu=null;break;case 3:case 5:break;default:throw Error(a(329))}if((62914560&t)===t&&10<(o=wu+300-te())){if(Mu(r,t,mu,!lu),0!==ye(r,0,!0))break e;r.timeoutHandle=ld(Au.bind(null,r,n,yu,ku,xu,t,mu,pu,vu,lu,i,2,-0,0),o)}else Au(r,n,yu,ku,xu,t,mu,pu,vu,lu,i,0,-0,0)}break}o=Yu(e,t,!1),i=!1}Sc(e)}function Au(e,t,n,r,o,i,s,l,u,c,d,f,h,p){if(e.timeoutHandle=-1,(8192&(f=t.subtreeFlags)||16785408===(16785408&f))&&(Bd={stylesheets:null,count:0,unsuspend:Ud},Yl(t),null!==(f=function(){if(null===Bd)throw Error(a(475));var e=Bd;return e.stylesheets&&0===e.count&&qd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout(function(){if(e.stylesheets&&qd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=f(nc.bind(null,e,t,i,n,r,o,s,l,u,d,1,h,p)),void Mu(e,i,s,!c);nc(e,t,i,n,r,o,s,l,u)}function Fu(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Qn(i(),o))return!1}catch(a){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Mu(e,t,n,r){t&=~gu,t&=~pu,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var i=31-he(o),a=1<<i;r[i]=-1,o&=~a}0!==n&&Oe(e,n,t)}function Hu(){return 0!==(6&nu)||(kc(0,!1),!1)}function Bu(){if(null!==ou){if(0===au)var e=ou.return;else yo=bo=null,Ai(e=ou),Qa=null,Ga=0,e=ou;for(;null!==e;)il(e.alternate,e),e=e.return;ou=null}}function Uu(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,ud(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Bu(),ru=e,ou=n=Ar(e.current,null),iu=t,au=0,su=null,lu=!1,uu=xe(e,t),cu=!1,vu=mu=gu=pu=hu=fu=0,yu=bu=null,xu=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var o=31-he(r),i=1<<o;t|=e[o],r&=~i}return du=t,Tr(),n}function Vu(e,t){xi=null,_.H=Wa,t===qo||t===Yo?(t=ei(),au=3):t===Ko?(t=ei(),au=4):au=t===Os?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,su=t,null===ou&&(fu=1,ws(e,Er(t,e.current)))}function Wu(){var e=_.H;return _.H=Wa,null===e?Wa:e}function qu(){var e=_.A;return _.A=eu,e}function Ku(){fu=4,lu||(4194048&iu)!==iu&&null!==os.current||(uu=!0),0===(134217727&hu)&&0===(134217727&pu)||null===ru||Mu(ru,iu,mu,!1)}function Yu(e,t,n){var r=nu;nu|=2;var o=Wu(),i=qu();ru===e&&iu===t||(ku=null,Uu(e,t)),t=!1;var a=fu;e:for(;;)try{if(0!==au&&null!==ou){var s=ou,l=su;switch(au){case 8:Bu(),a=6;break e;case 3:case 2:case 9:case 6:null===os.current&&(t=!0);var u=au;if(au=0,su=null,Zu(e,s,l,u),n&&uu){a=0;break e}break;default:u=au,au=0,su=null,Zu(e,s,l,u)}}Qu(),a=fu;break}catch(c){Vu(e,c)}return t&&e.shellSuspendCounter++,yo=bo=null,nu=r,_.H=o,_.A=i,null===ou&&(ru=null,iu=0,Tr()),a}function Qu(){for(;null!==ou;)Xu(ou)}function Gu(){for(;null!==ou&&!Z();)Xu(ou)}function Xu(e){var t=Xs(e.alternate,e,du);e.memoizedProps=e.pendingProps,null===t?ec(e):ou=t}function Ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=zs(n,t,t.pendingProps,t.type,void 0,iu);break;case 11:t=zs(n,t,t.pendingProps,t.type.render,t.ref,iu);break;case 5:Ai(t);default:il(n,t),t=Xs(n,t=ou=Fr(t,du),du)}e.memoizedProps=e.pendingProps,null===t?ec(e):ou=t}function Zu(e,t,n,r){yo=bo=null,Ai(t),Qa=null,Ga=0;var o=t.return;try{if(function(e,t,n,r,o){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Eo(t,n,o,!0),null!==(n=os.current)){switch(n.tag){case 13:return null===is?Ku():null===n.alternate&&0===fu&&(fu=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===Qo?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),dc(e,r,o)),!1;case 22:return n.flags|=65536,r===Qo?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),dc(e,r,o)),!1}throw Error(a(435,n.tag))}return dc(e,r,o),Ku(),!1}if(io)return null!==(t=os.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==lo&&mo(Er(e=Error(a(422),{cause:r}),n))):(r!==lo&&mo(Er(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,o&=-o,e.lanes|=o,r=Er(r,n),li(e,o=ks(e.stateNode,r,o)),4!==fu&&(fu=2)),!1;var i=Error(a(520),{cause:r});if(i=Er(i,n),null===bu?bu=[i]:bu.push(i),4!==fu&&(fu=2),null===t)return!0;r=Er(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,li(n,e=ks(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===Eu||!Eu.has(i))))return n.flags|=65536,o&=-o,n.lanes|=o,Cs(o=Es(o),e,n,r),li(n,o),!1}n=n.return}while(null!==n);return!1}(e,o,t,n,iu))return fu=1,ws(e,Er(n,e.current)),void(ou=null)}catch(i){if(null!==o)throw ou=o,i;return fu=1,ws(e,Er(n,e.current)),void(ou=null)}32768&t.flags?(io||1===r?e=!0:uu||0!==(536870912&iu)?e=!1:(lu=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=os.current)&&13===r.tag&&(r.flags|=16384))),tc(t,e)):ec(t)}function ec(e){var t=e;do{if(0!==(32768&t.flags))return void tc(t,lu);e=t.return;var n=rl(t.alternate,t,du);if(null!==n)return void(ou=n);if(null!==(t=t.sibling))return void(ou=t);ou=t=e}while(null!==t);0===fu&&(fu=5)}function tc(e,t){do{var n=ol(e.alternate,e);if(null!==n)return n.flags&=32767,void(ou=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ou=e);ou=e=n}while(null!==e);fu=6,ou=null}function nc(e,t,n,r,o,i,s,l,u){e.cancelPendingCommit=null;do{sc()}while(0!==Cu);if(0!==(6&nu))throw Error(a(327));if(null!==t){if(t===e.current)throw Error(a(177));if(i=t.lanes|t.childLanes,function(e,t,n,r,o,i){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,u=e.hiddenUpdates;for(n=a&~n;0<n;){var c=31-he(n),d=1<<c;s[c]=0,l[c]=-1;var f=u[c];if(null!==f)for(u[c]=null,c=0;c<f.length;c++){var h=f[c];null!==h&&(h.lane&=-536870913)}n&=~d}0!==r&&Oe(e,r,0),0!==i&&0===o&&0!==e.tag&&(e.suspendedLanes|=i&~(a&~t))}(e,n,i|=jr,s,l,u),e===ru&&(ou=ru=null,iu=0),ju=t,Ou=e,Tu=n,Pu=i,Du=o,Nu=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,X(ie,function(){return lc(),null})):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=_.T,_.T=null,o=$.p,$.p=2,s=nu,nu|=4;try{!function(e,t){if(e=e.containerInfo,td=nf,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(m){n=null;break e}var s=0,l=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(var p;f!==n||0!==o&&3!==f.nodeType||(l=s+o),f!==i||0!==r&&3!==f.nodeType||(u=s+r),3===f.nodeType&&(s+=f.nodeValue.length),null!==(p=f.firstChild);)h=f,f=p;for(;;){if(f===e)break t;if(h===n&&++c===o&&(l=s),h===i&&++d===r&&(u=s),null!==(p=f.nextSibling))break;h=(f=h).parentNode}f=p}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},nf=!1,kl=t;null!==kl;)if(e=(t=kl).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,kl=e;else for(;null!==kl;){switch(i=(t=kl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,o=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var g=ms(n.type,o,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(g,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){cc(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))gd(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":gd(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(a(163))}if(null!==(e=t.sibling)){e.return=t.return,kl=e;break}kl=t.return}}(e,t)}finally{nu=s,$.p=o,_.T=r}}Cu=1,rc(),oc(),ic()}}function rc(){if(1===Cu){Cu=0;var e=Ou,t=ju,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=_.T,_.T=null;var r=$.p;$.p=2;var o=nu;nu|=4;try{_l(t,e);var i=nd,a=er(e.containerInfo),s=i.focusedElem,l=i.selectionRange;if(a!==s&&s&&s.ownerDocument&&Zn(s.ownerDocument.documentElement,s)){if(null!==l&&tr(s)){var u=l.start,c=l.end;if(void 0===c&&(c=u),"selectionStart"in s)s.selectionStart=u,s.selectionEnd=Math.min(c,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var h=f.getSelection(),p=s.textContent.length,g=Math.min(l.start,p),m=void 0===l.end?g:Math.min(l.end,p);!h.extend&&g>m&&(a=m,m=g,g=a);var v=Jn(s,g),b=Jn(s,m);if(v&&b&&(1!==h.rangeCount||h.anchorNode!==v.node||h.anchorOffset!==v.offset||h.focusNode!==b.node||h.focusOffset!==b.offset)){var y=d.createRange();y.setStart(v.node,v.offset),h.removeAllRanges(),g>m?(h.addRange(y),h.extend(b.node,b.offset)):(y.setEnd(b.node,b.offset),h.addRange(y))}}}}for(d=[],h=s;h=h.parentNode;)1===h.nodeType&&d.push({element:h,left:h.scrollLeft,top:h.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var x=d[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}nf=!!td,nd=td=null}finally{nu=o,$.p=r,_.T=n}}e.current=t,Cu=2}}function oc(){if(2===Cu){Cu=0;var e=Ou,t=ju,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=_.T,_.T=null;var r=$.p;$.p=2;var o=nu;nu|=4;try{El(e,t.alternate,t)}finally{nu=o,$.p=r,_.T=n}}Cu=3}}function ic(){if(4===Cu||3===Cu){Cu=0,ee();var e=Ou,t=ju,n=Tu,r=Nu;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Cu=5:(Cu=0,ju=Ou=null,ac(e,e.pendingLanes));var o=e.pendingLanes;if(0===o&&(Eu=null),Pe(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ce,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=_.T,o=$.p,$.p=2,_.T=null;try{for(var i=e.onRecoverableError,a=0;a<r.length;a++){var s=r[a];i(s.value,{componentStack:s.stack})}}finally{_.T=t,$.p=o}}0!==(3&Tu)&&sc(),Sc(e),o=e.pendingLanes,0!==(4194090&n)&&0!==(42&o)?e===Lu?Ru++:(Ru=0,Lu=e):Ru=0,kc(0,!1)}}function ac(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,$o(t)))}function sc(e){return rc(),oc(),ic(),lc()}function lc(){if(5!==Cu)return!1;var e=Ou,t=Pu;Pu=0;var n=Pe(Tu),r=_.T,o=$.p;try{$.p=32>n?32:n,_.T=null,n=Du,Du=null;var i=Ou,s=Tu;if(Cu=0,ju=Ou=null,Tu=0,0!==(6&nu))throw Error(a(331));var l=nu;if(nu|=4,Xl(i.current),Ul(i,i.current,s,n),nu=l,kc(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ce,i)}catch(u){}return!0}finally{$.p=o,_.T=r,ac(e,t)}}function uc(e,t,n){t=Er(n,t),null!==(e=ai(e,t=ks(e.stateNode,t,2),2))&&(Ce(e,2),Sc(e))}function cc(e,t,n){if(3===e.tag)uc(e,e,n);else for(;null!==t;){if(3===t.tag){uc(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Eu||!Eu.has(r))){e=Er(n,e),null!==(r=ai(t,n=Es(2),2))&&(Cs(n,r,t,e),Ce(r,2),Sc(r));break}}t=t.return}}function dc(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tu;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(cu=!0,o.add(n),e=fc.bind(null,e,t,n),t.then(e,e))}function fc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ru===e&&(iu&n)===n&&(4===fu||3===fu&&(62914560&iu)===iu&&300>te()-wu?0===(2&nu)&&Uu(e,0):gu|=n,vu===iu&&(vu=0)),Sc(e)}function hc(e,t){0===t&&(t=ke()),null!==(e=Nr(e,t))&&(Ce(e,t),Sc(e))}function pc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),hc(e,n)}function gc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),hc(e,n)}var mc=null,vc=null,bc=!1,yc=!1,xc=!1,wc=0;function Sc(e){e!==vc&&null===e.next&&(null===vc?mc=vc=e:vc=vc.next=e),yc=!0,bc||(bc=!0,dd(function(){0!==(6&nu)?X(re,Ec):Cc()}))}function kc(e,t){if(!xc&&yc){xc=!0;do{for(var n=!1,r=mc;null!==r;){if(!t)if(0!==e){var o=r.pendingLanes;if(0===o)var i=0;else{var a=r.suspendedLanes,s=r.pingedLanes;i=(1<<31-he(42|e)+1)-1,i=201326741&(i&=o&~(a&~s))?201326741&i|1:i?2|i:0}0!==i&&(n=!0,Tc(r,i))}else i=iu,0===(3&(i=ye(r,r===ru?i:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,i)||(n=!0,Tc(r,i));r=r.next}}while(n);xc=!1}}function Ec(){Cc()}function Cc(){yc=bc=!1;var e=0;0!==wc&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==sd&&(sd=e,!0);return sd=null,!1}()&&(e=wc),wc=0);for(var t=te(),n=null,r=mc;null!==r;){var o=r.next,i=Oc(r,t);0===i?(r.next=null,null===n?mc=o:n.next=o,null===o&&(vc=n)):(n=r,(0!==e||0!==(3&i))&&(yc=!0)),r=o}kc(e,!1)}function Oc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var a=31-he(i),s=1<<a,l=o[a];-1===l?0!==(s&n)&&0===(s&r)||(o[a]=we(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}if(n=iu,n=ye(e,e===(t=ru)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===au||9===au)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&J(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&J(r),Pe(n)){case 2:case 8:n=oe;break;case 32:default:n=ie;break;case 268435456:n=se}return r=jc.bind(null,e),n=X(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&J(r),e.callbackPriority=2,e.callbackNode=null,2}function jc(e,t){if(0!==Cu&&5!==Cu)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(sc()&&e.callbackNode!==n)return null;var r=iu;return 0===(r=ye(e,e===ru?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Iu(e,r,t),Oc(e,te()),null!=e.callbackNode&&e.callbackNode===n?jc.bind(null,e):null)}function Tc(e,t){if(sc())return null;Iu(e,t,!0)}function Pc(){return 0===wc&&(wc=Se()),wc}function Dc(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Pt(""+e)}function Nc(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Rc=0;Rc<wr.length;Rc++){var Lc=wr[Rc];Sr(Lc.toLowerCase(),"on"+(Lc[0].toUpperCase()+Lc.slice(1)))}Sr(hr,"onAnimationEnd"),Sr(pr,"onAnimationIteration"),Sr(gr,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(mr,"onTransitionRun"),Sr(vr,"onTransitionStart"),Sr(br,"onTransitionCancel"),Sr(yr,"onTransitionEnd"),Qe("onMouseEnter",["mouseout","mouseover"]),Qe("onMouseLeave",["mouseout","mouseover"]),Qe("onPointerEnter",["pointerout","pointerover"]),Qe("onPointerLeave",["pointerout","pointerover"]),Ye("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ye("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ye("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ye("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ye("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ye("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _c="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$c=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_c));function zc(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;i=s,o.currentTarget=u;try{i(o)}catch(c){vs(c)}o.currentTarget=null,i=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,u=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;i=s,o.currentTarget=u;try{i(o)}catch(c){vs(c)}o.currentTarget=null,i=l}}}}function Ic(e,t){var n=t[$e];void 0===n&&(n=t[$e]=new Set);var r=e+"__bubble";n.has(r)||(Hc(t,e,2,!1),n.add(r))}function Ac(e,t,n){var r=0;t&&(r|=4),Hc(n,e,r,t)}var Fc="_reactListening"+Math.random().toString(36).slice(2);function Mc(e){if(!e[Fc]){e[Fc]=!0,qe.forEach(function(t){"selectionchange"!==t&&($c.has(t)||Ac(t,!1,e),Ac(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Fc]||(t[Fc]=!0,Ac("selectionchange",!1,t))}}function Hc(e,t,n,r){switch(cf(t)){case 2:var o=rf;break;case 8:o=of;break;default:o=af}n=o.bind(null,t,n,e),o=void 0,!Ft||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Bc(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===o)break;if(4===a)for(a=r.return;null!==a;){var u=a.tag;if((3===u||4===u)&&a.stateNode.containerInfo===o)return;a=a.return}for(;null!==s;){if(null===(a=He(s)))return;if(5===(u=a.tag)||6===u||26===u||27===u){r=i=a;continue e}s=s.parentNode}}r=r.return}zt(function(){var r=i,o=Nt(n),a=[];e:{var s=xr.get(e);if(void 0!==s){var u=Zt,c=e;switch(e){case"keypress":if(0===Wt(n))break e;case"keydown":case"keyup":u=gn;break;case"focusin":c="focus",u=an;break;case"focusout":c="blur",u=an;break;case"beforeblur":case"afterblur":u=an;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":u=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":u=on;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":u=vn;break;case hr:case pr:case gr:u=sn;break;case yr:u=bn;break;case"scroll":case"scrollend":u=tn;break;case"wheel":u=yn;break;case"copy":case"cut":case"paste":u=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":u=mn;break;case"toggle":case"beforetoggle":u=xn}var d=0!==(4&t),f=!d&&("scroll"===e||"scrollend"===e),h=d?null!==s?s+"Capture":null:s;d=[];for(var p,g=r;null!==g;){var m=g;if(p=m.stateNode,5!==(m=m.tag)&&26!==m&&27!==m||null===p||null===h||null!=(m=It(g,h))&&d.push(Uc(g,m,p)),f)break;g=g.return}0<d.length&&(s=new u(s,c,null,n,o),a.push({event:s,listeners:d}))}}if(0===(7&t)){if(u="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===Dt||!(c=n.relatedTarget||n.fromElement)||!He(c)&&!c[_e])&&(u||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,u?(u=r,null!==(c=(c=n.relatedTarget||n.toElement)?He(c):null)&&(f=l(c),d=c.tag,c!==f||5!==d&&27!==d&&6!==d)&&(c=null)):(u=null,c=r),u!==c)){if(d=rn,m="onMouseLeave",h="onMouseEnter",g="mouse","pointerout"!==e&&"pointerover"!==e||(d=mn,m="onPointerLeave",h="onPointerEnter",g="pointer"),f=null==u?s:Ue(u),p=null==c?s:Ue(c),(s=new d(m,g+"leave",u,n,o)).target=f,s.relatedTarget=p,m=null,He(o)===r&&((d=new d(h,g+"enter",c,n,o)).target=p,d.relatedTarget=f,m=d),f=m,u&&c)e:{for(h=c,g=0,p=d=u;p;p=Wc(p))g++;for(p=0,m=h;m;m=Wc(m))p++;for(;0<g-p;)d=Wc(d),g--;for(;0<p-g;)h=Wc(h),p--;for(;g--;){if(d===h||null!==h&&d===h.alternate)break e;d=Wc(d),h=Wc(h)}d=null}else d=null;null!==u&&qc(a,s,u,d,!1),null!==c&&null!==f&&qc(a,f,c,d,!0)}if("select"===(u=(s=r?Ue(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===u&&"file"===s.type)var v=An;else if(Rn(s))if(Fn)v=Yn;else{v=qn;var b=Wn}else!(u=s.nodeName)||"input"!==u.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Ot(r.elementType)&&(v=An):v=Kn;switch(v&&(v=v(e,r))?Ln(a,v,n,o):(b&&b(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&bt(s,"number",s.value)),b=r?Ue(r):window,e){case"focusin":(Rn(b)||"true"===b.contentEditable)&&(rr=b,or=r,ir=null);break;case"focusout":ir=or=rr=null;break;case"mousedown":ar=!0;break;case"contextmenu":case"mouseup":case"dragend":ar=!1,sr(a,n,o);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(a,n,o)}var y;if(Sn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Dn?Tn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Cn&&"ko"!==n.locale&&(Dn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Dn&&(y=Vt()):(Bt="value"in(Ht=o)?Ht.value:Ht.textContent,Dn=!0)),0<(b=Vc(r,x)).length&&(x=new un(x,e,null,n,o),a.push({event:x,listeners:b}),y?x.data=y:null!==(y=Pn(n))&&(x.data=y))),(y=En?function(e,t){switch(e){case"compositionend":return Pn(t);case"keypress":return 32!==t.which?null:(jn=!0,On);case"textInput":return(e=t.data)===On&&jn?null:e;default:return null}}(e,n):function(e,t){if(Dn)return"compositionend"===e||!Sn&&Tn(e,t)?(e=Vt(),Ut=Bt=Ht=null,Dn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Vc(r,"onBeforeInput")).length&&(b=new un("onBeforeInput","beforeinput",null,n,o),a.push({event:b,listeners:x}),b.data=y)),function(e,t,n,r,o){if("submit"===t&&n&&n.stateNode===o){var i=Dc((o[Le]||null).action),a=r.submitter;a&&null!==(t=(t=a[Le]||null)?Dc(t.formAction):a.getAttribute("formAction"))&&(i=t,a=null);var s=new Zt("action","action",null,r,o);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wc){var e=a?Nc(o,a):new FormData(o);Na(n,{pending:!0,data:e,method:o.method,action:i},null,e)}}else"function"===typeof i&&(s.preventDefault(),e=a?Nc(o,a):new FormData(o),Na(n,{pending:!0,data:e,method:o.method,action:i},i,e))},currentTarget:o}]})}}(a,e,r,n,o)}zc(a,t)})}function Uc(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Vc(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;if(5!==(o=o.tag)&&26!==o&&27!==o||null===i||(null!=(o=It(e,n))&&r.unshift(Uc(e,o,i)),null!=(o=It(e,t))&&r.push(Uc(e,o,i))),3===e.tag)return r;e=e.return}return[]}function Wc(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function qc(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===u||(l=u,o?null!=(u=It(n,i))&&a.unshift(Uc(n,u,l)):o||null!=(u=It(n,i))&&a.push(Uc(n,u,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Kc=/\r\n?/g,Yc=/\u0000|\uFFFD/g;function Qc(e){return("string"===typeof e?e:""+e).replace(Kc,"\n").replace(Yc,"")}function Gc(e,t){return t=Qc(t),Qc(e)===t}function Xc(){}function Jc(e,t,n,r,o,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Ct(e,r,i);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Pt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&Jc(e,t,"name",o.name,o,null),Jc(e,t,"formEncType",o.formEncType,o,null),Jc(e,t,"formMethod",o.formMethod,o,null),Jc(e,t,"formTarget",o.formTarget,o,null)):(Jc(e,t,"encType",o.encType,o,null),Jc(e,t,"method",o.method,o,null),Jc(e,t,"target",o.target,o,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Pt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Xc);break;case"onScroll":null!=r&&Ic("scroll",e);break;case"onScrollEnd":null!=r&&Ic("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Pt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Ic("beforetoggle",e),Ic("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=jt.get(n)||n,r)}}function Zc(e,t,n,r,o,i){switch(n){case"style":Ct(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Ic("scroll",e);break;case"onScrollEnd":null!=r&&Ic("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Xc);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ke.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),"function"===typeof(i=null!=(i=e[Le]||null)?i[n]:null)&&e.removeEventListener(t,i,o),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,o)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ic("error",e),Ic("load",e);var r,o=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Jc(e,t,r,s,n,null)}}return i&&Jc(e,t,"srcSet",n.srcSet,n,null),void(o&&Jc(e,t,"src",n.src,n,null));case"input":Ic("invalid",e);var l=r=s=i=null,u=null,c=null;for(o in n)if(n.hasOwnProperty(o)){var d=n[o];if(null!=d)switch(o){case"name":i=d;break;case"type":s=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(a(137,t));break;default:Jc(e,t,o,d,n,null)}}return vt(e,r,l,u,c,s,i,!1),void dt(e);case"select":for(i in Ic("invalid",e),o=s=r=null,n)if(n.hasOwnProperty(i)&&null!=(l=n[i]))switch(i){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":o=l;default:Jc(e,t,i,l,n,null)}return t=r,n=s,e.multiple=!!o,void(null!=t?yt(e,!!o,t,!1):null!=n&&yt(e,!!o,n,!0));case"textarea":for(s in Ic("invalid",e),r=i=o=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":o=l;break;case"defaultValue":i=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(a(91));break;default:Jc(e,t,s,l,n,null)}return wt(e,o,i,r),void dt(e);case"option":for(u in n)if(n.hasOwnProperty(u)&&null!=(o=n[u]))if("selected"===u)e.selected=o&&"function"!==typeof o&&"symbol"!==typeof o;else Jc(e,t,u,o,n,null);return;case"dialog":Ic("beforetoggle",e),Ic("toggle",e),Ic("cancel",e),Ic("close",e);break;case"iframe":case"object":Ic("load",e);break;case"video":case"audio":for(o=0;o<_c.length;o++)Ic(_c[o],e);break;case"image":Ic("error",e),Ic("load",e);break;case"details":Ic("toggle",e);break;case"embed":case"source":case"link":Ic("error",e),Ic("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&null!=(o=n[c]))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Jc(e,t,c,o,n,null)}return;default:if(Ot(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(o=n[d])&&Zc(e,t,d,o,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(o=n[l])&&Jc(e,t,l,o,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function od(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function ad(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var sd=null;var ld="function"===typeof setTimeout?setTimeout:void 0,ud="function"===typeof clearTimeout?clearTimeout:void 0,cd="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof cd?function(e){return cd.resolve(null).then(e).catch(fd)}:ld;function fd(e){setTimeout(function(){throw e})}function hd(e){return"head"===e}function pd(e,t){var n=t,r=0,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0<r&&8>r){n=r;var a=e.ownerDocument;if(1&n&&wd(a.documentElement),2&n&&wd(a.body),4&n)for(wd(n=a.head),a=n.firstChild;a;){var s=a.nextSibling,l=a.nodeName;a[Fe]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===a.rel.toLowerCase()||n.removeChild(a),a=s}}if(0===o)return e.removeChild(i),void Tf(t);o--}else"$"===n||"$?"===n||"$!"===n?o++:r=n.charCodeAt(0)-48;else r=0;n=i}while(n);Tf(t)}function gd(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":gd(n),Me(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function md(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function vd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var bd=null;function yd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Me(e)}var Sd=new Map,kd=new Set;function Ed(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Cd=$.d;$.d={f:function(){var e=Cd.f(),t=Hu();return e||t},r:function(e){var t=Be(e);null!==t&&5===t.tag&&"form"===t.type?La(t):Cd.r(e)},D:function(e){Cd.D(e),jd("dns-prefetch",e,null)},C:function(e,t){Cd.C(e,t),jd("preconnect",e,t)},L:function(e,t,n){Cd.L(e,t,n);var r=Od;if(r&&e&&t){var o='link[rel="preload"][as="'+gt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(o+='[imagesrcset="'+gt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(o+='[imagesizes="'+gt(n.imageSizes)+'"]')):o+='[href="'+gt(e)+'"]';var i=o;switch(t){case"style":i=Pd(e);break;case"script":i=Rd(e)}Sd.has(i)||(e=f({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Sd.set(i,e),null!==r.querySelector(o)||"style"===t&&r.querySelector(Dd(i))||"script"===t&&r.querySelector(Ld(i))||(ed(t=r.createElement("link"),"link",e),We(t),r.head.appendChild(t)))}},m:function(e,t){Cd.m(e,t);var n=Od;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",o='link[rel="modulepreload"][as="'+gt(r)+'"][href="'+gt(e)+'"]',i=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Rd(e)}if(!Sd.has(i)&&(e=f({rel:"modulepreload",href:e},t),Sd.set(i,e),null===n.querySelector(o))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ld(i)))return}ed(r=n.createElement("link"),"link",e),We(r),n.head.appendChild(r)}}},X:function(e,t){Cd.X(e,t);var n=Od;if(n&&e){var r=Ve(n).hoistableScripts,o=Rd(e),i=r.get(o);i||((i=n.querySelector(Ld(o)))||(e=f({src:e,async:!0},t),(t=Sd.get(o))&&Id(e,t),We(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}},S:function(e,t,n){Cd.S(e,t,n);var r=Od;if(r&&e){var o=Ve(r).hoistableStyles,i=Pd(e);t=t||"default";var a=o.get(i);if(!a){var s={loading:0,preload:null};if(a=r.querySelector(Dd(i)))s.loading=5;else{e=f({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sd.get(i))&&zd(e,n);var l=a=r.createElement("link");We(l),ed(l,"link",e),l._p=new Promise(function(e,t){l.onload=e,l.onerror=t}),l.addEventListener("load",function(){s.loading|=1}),l.addEventListener("error",function(){s.loading|=2}),s.loading|=4,$d(a,t,r)}a={type:"stylesheet",instance:a,count:1,state:s},o.set(i,a)}}},M:function(e,t){Cd.M(e,t);var n=Od;if(n&&e){var r=Ve(n).hoistableScripts,o=Rd(e),i=r.get(o);i||((i=n.querySelector(Ld(o)))||(e=f({src:e,async:!0,type:"module"},t),(t=Sd.get(o))&&Id(e,t),We(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}}};var Od="undefined"===typeof document?null:document;function jd(e,t,n){var r=Od;if(r&&"string"===typeof t&&t){var o=gt(t);o='link[rel="'+e+'"][href="'+o+'"]',"string"===typeof n&&(o+='[crossorigin="'+n+'"]'),kd.has(o)||(kd.add(o),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(o)&&(ed(t=r.createElement("link"),"link",e),We(t),r.head.appendChild(t)))}}function Td(e,t,n,r){var o,i,s,l,u=(u=V.current)?Ed(u):null;if(!u)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Pd(n.href),(r=(n=Ve(u).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Pd(n.href);var c=Ve(u).hoistableStyles,d=c.get(e);if(d||(u=u.ownerDocument||u,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,d),(c=u.querySelector(Dd(e)))&&!c._p&&(d.instance=c,d.state.loading=5),Sd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sd.set(e,n),c||(o=u,i=e,s=n,l=d.state,o.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=o.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),ed(i,"link",s),We(i),o.head.appendChild(i))))),t&&null===r)throw Error(a(528,""));return d}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Rd(n),(r=(n=Ve(u).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Pd(e){return'href="'+gt(e)+'"'}function Dd(e){return'link[rel="stylesheet"]['+e+"]"}function Nd(e){return f({},e,{"data-precedence":e.precedence,precedence:null})}function Rd(e){return'[src="'+gt(e)+'"]'}function Ld(e){return"script[async]"+e}function _d(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+gt(n.href)+'"]');if(r)return t.instance=r,We(r),r;var o=f({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return We(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",o),$d(r,n.precedence,e),t.instance=r;case"stylesheet":o=Pd(n.href);var i=e.querySelector(Dd(o));if(i)return t.state.loading|=4,t.instance=i,We(i),i;r=Nd(n),(o=Sd.get(o))&&zd(r,o),We(i=(e.ownerDocument||e).createElement("link"));var s=i;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),ed(i,"link",r),t.state.loading|=4,$d(i,n.precedence,e),t.instance=i;case"script":return i=Rd(n.src),(o=e.querySelector(Ld(i)))?(t.instance=o,We(o),o):(r=n,(o=Sd.get(i))&&Id(r=f({},n),o),We(o=(e=e.ownerDocument||e).createElement("script")),ed(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,$d(r,n.precedence,e));return t.instance}function $d(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,i=o,a=0;a<r.length;a++){var s=r[a];if(s.dataset.precedence===t)i=s;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function zd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Id(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Ad=null;function Fd(e,t,n){if(null===Ad){var r=new Map,o=Ad=new Map;o.set(n,r)}else(r=(o=Ad).get(n))||(r=new Map,o.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var i=n[o];if(!(i[Fe]||i[Re]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var a=i.getAttribute(t)||"";a=e+a;var s=r.get(a);s?s.push(i):r.set(a,[i])}}return r}function Md(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Hd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Bd=null;function Ud(){}function Vd(){if(this.count--,0===this.count)if(this.stylesheets)qd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Wd=null;function qd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Wd=new Map,t.forEach(Kd,e),Wd=null,Vd.call(e))}function Kd(e,t){if(!(4&t.state.loading)){var n=Wd.get(e);if(n)var r=n.get(null);else{n=new Map,Wd.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var a=o[i];"LINK"!==a.nodeName&&"not all"===a.getAttribute("media")||(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}a=(o=t.instance).getAttribute("data-precedence"),(i=n.get(a)||r)===r&&n.set(null,o),n.set(a,o),this.count++,r=Vd.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),i?i.parentNode.insertBefore(o,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(o,e.firstChild),t.state.loading|=4}}var Yd={$$typeof:w,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function Qd(e,t,n,r,o,i,a,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Gd(e,t,n,r,o,i,a,s,l,u,c,d){return e=new Qd(e,t,n,a,s,l,u,d),t=1,!0===i&&(t|=24),i=zr(3,null,null,t),e.current=i,i.stateNode=e,(t=_o()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},ri(i),e}function Xd(e){return e?e=_r:_r}function Jd(e,t,n,r,o,i){o=Xd(o),null===r.context?r.context=o:r.pendingContext=o,(r=ii(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=ai(e,r,t))&&(zu(n,0,t),si(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ef(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tf(e){if(13===e.tag){var t=Nr(e,67108864);null!==t&&zu(t,0,67108864),ef(e,67108864)}}var nf=!0;function rf(e,t,n,r){var o=_.T;_.T=null;var i=$.p;try{$.p=2,af(e,t,n,r)}finally{$.p=i,_.T=o}}function of(e,t,n,r){var o=_.T;_.T=null;var i=$.p;try{$.p=8,af(e,t,n,r)}finally{$.p=i,_.T=o}}function af(e,t,n,r){if(nf){var o=sf(r);if(null===o)Bc(e,t,r,lf,n),yf(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return ff=xf(ff,e,t,n,r,o),!0;case"dragenter":return hf=xf(hf,e,t,n,r,o),!0;case"mouseover":return pf=xf(pf,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return gf.set(i,xf(gf.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,mf.set(i,xf(mf.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(yf(e,r),4&t&&-1<bf.indexOf(e)){for(;null!==o;){var i=Be(o);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var a=be(i.pendingLanes);if(0!==a){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;a;){var l=1<<31-he(a);s.entanglements[1]|=l,a&=~l}Sc(i),0===(6&nu)&&(Su=te()+500,kc(0,!1))}}break;case 13:null!==(s=Nr(i,2))&&zu(s,0,2),Hu(),ef(i,2)}if(null===(i=sf(r))&&Bc(e,t,r,lf,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else Bc(e,t,r,null,n)}}function sf(e){return uf(e=Nt(e))}var lf=null;function uf(e){if(lf=null,null!==(e=He(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=u(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return lf=e,null}function cf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case oe:return 8;case ie:case ae:return 32;case se:return 268435456;default:return 32}default:return 32}}var df=!1,ff=null,hf=null,pf=null,gf=new Map,mf=new Map,vf=[],bf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yf(e,t){switch(e){case"focusin":case"focusout":ff=null;break;case"dragenter":case"dragleave":hf=null;break;case"mouseover":case"mouseout":pf=null;break;case"pointerover":case"pointerout":gf.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mf.delete(t.pointerId)}}function xf(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=Be(t))&&tf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function wf(e){var t=He(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=u(n)))return e.blockedOn=t,void function(e,t){var n=$.p;try{return $.p=e,t()}finally{$.p=n}}(e.priority,function(){if(13===n.tag){var e=_u();e=Te(e);var t=Nr(n,e);null!==t&&zu(t,0,e),ef(n,e)}})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Sf(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=sf(e.nativeEvent);if(null!==n)return null!==(t=Be(n))&&tf(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Dt=r,n.target.dispatchEvent(r),Dt=null,t.shift()}return!0}function kf(e,t,n){Sf(e)&&n.delete(t)}function Ef(){df=!1,null!==ff&&Sf(ff)&&(ff=null),null!==hf&&Sf(hf)&&(hf=null),null!==pf&&Sf(pf)&&(pf=null),gf.forEach(kf),mf.forEach(kf)}function Cf(e,t){e.blockedOn===t&&(e.blockedOn=null,df||(df=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ef)))}var Of=null;function jf(e){Of!==e&&(Of=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Of===e&&(Of=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],o=e[t+2];if("function"!==typeof r){if(null===uf(r||n))continue;break}var i=Be(n);null!==i&&(e.splice(t,3),t-=3,Na(i,{pending:!0,data:o,method:n.method,action:r},r,o))}}))}function Tf(e){function t(t){return Cf(t,e)}null!==ff&&Cf(ff,e),null!==hf&&Cf(hf,e),null!==pf&&Cf(pf,e),gf.forEach(t),mf.forEach(t);for(var n=0;n<vf.length;n++){var r=vf[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<vf.length&&null===(n=vf[0]).blockedOn;)wf(n),null===n.blockedOn&&vf.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var o=n[r],i=n[r+1],a=o[Le]||null;if("function"===typeof i)a||jf(n);else if(a){var s=null;if(i&&i.hasAttribute("formAction")){if(o=i,a=i[Le]||null)s=a.formAction;else if(null!==uf(o))continue}else s=a.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),jf(n)}}}function Pf(e){this._internalRoot=e}function Df(e){this._internalRoot=e}Df.prototype.render=Pf.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Jd(t.current,_u(),e,t,null,null)},Df.prototype.unmount=Pf.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Hu(),t[_e]=null}},Df.prototype.unstable_scheduleHydration=function(e){if(e){var t=De();e={blockedOn:null,target:e,priority:t};for(var n=0;n<vf.length&&0!==t&&t<vf[n].priority;n++);vf.splice(n,0,e),0===n&&wf(e)}};var Nf=o.version;if("19.1.0"!==Nf)throw Error(a(527,Nf,"19.1.0"));$.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return c(o),e;if(i===r)return c(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,u=o.child;u;){if(u===n){s=!0,n=o,r=i;break}if(u===r){s=!0,r=o,n=i;break}u=u.sibling}if(!s){for(u=i.child;u;){if(u===n){s=!0,n=i,r=o;break}if(u===r){s=!0,r=i,n=o;break}u=u.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Rf={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Lf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lf.isDisabled&&Lf.supportsFiber)try{ce=Lf.inject(Rf),de=Lf}catch($f){}}t.createRoot=function(e,t){if(!s(e))throw Error(a(299));var n=!1,r="",o=bs,i=ys,l=xs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(o=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Gd(e,1,!1,null,0,n,r,o,i,l,0,null),e[_e]=t.current,Mc(e),new Pf(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(a(299));var r=!1,o="",i=bs,l=ys,u=xs,c=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(u=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(c=n.formState)),(t=Gd(e,1,!0,t,0,r,o,i,l,u,0,c)).context=Xd(null),n=t.current,(o=ii(r=Te(r=_u()))).callback=null,ai(n,o,r),n=r,t.current.lanes=n,Ce(t,n),Sc(t),e[_e]=t.current,Mc(e),new Df(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},122:e=>{"use strict";e.exports=function e(t,n){if(t===n)return!0;if(t&&n&&"object"==typeof t&&"object"==typeof n){if(t.constructor!==n.constructor)return!1;var r,o,i;if(Array.isArray(t)){if((r=t.length)!=n.length)return!1;for(o=r;0!==o--;)if(!e(t[o],n[o]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if((r=(i=Object.keys(t)).length)!==Object.keys(n).length)return!1;for(o=r;0!==o--;)if(!Object.prototype.hasOwnProperty.call(n,i[o]))return!1;for(o=r;0!==o--;){var a=i[o];if(!e(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function b(){}function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=y.prototype=new b;x.constructor=y,g(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function E(e,t,r,o,i,a){return r=a.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:a}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function j(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function T(){}function P(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,u,c=!1;if(null===e)c=!0;else switch(s){case"bigint":case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0;break;case f:return P((c=e._init)(e._payload),t,o,i,a)}}if(c)return a=a(e),c=""===i?"."+j(e,0):i,w(a)?(o="",null!=c&&(o=c.replace(O,"$&/")+"/"),P(a,t,o,"",function(e){return e})):null!=a&&(C(a)&&(l=a,u=o+(null==a.key||e&&e.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+c,a=E(l.type,u,void 0,0,0,l.props)),t.push(a)),1;c=0;var d,p=""===i?".":i+":";if(w(e))for(var g=0;g<e.length;g++)c+=P(i=e[g],t,o,s=p+j(i,g),a);else if("function"===typeof(g=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=h&&d[h]||d["@@iterator"])?d:null))for(e=g.call(e),g=0;!(i=e.next()).done;)c+=P(i=i.value,t,o,s=p+j(i,g++),a);else if("object"===s){if("function"===typeof e.then)return P(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(T,T):(e.status="pending",e.then(function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)},function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return c}function D(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",function(e){return t.call(n,e,o++)}),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function L(){}t.Children={map:D,forEach:function(e,t,n){D(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return D(e,function(){t++}),t},toArray:function(e){return D(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=y,t.StrictMode=i,t.Suspense=c,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=g({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(o=""+t.key),t)!k.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var a=Array(i),s=0;s<i;s++)a[s]=arguments[s+2];r.children=a}return E(e.type,o,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,o={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return E(e,i,void 0,0,0,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),o=S.S;null!==o&&o(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(L,R)}catch(i){R(i)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=S.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var u=i[l];if(!s(u))return!1;var c=e[u],d=t[u];if(!1===(o=n?n.call(r,c,d,u):void 0)||void 0===o&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function u(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=a.p;try{if(l.T=null,a.p=2,e)return e()}finally{l.T=t,a.p=n,a.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin),o="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=u(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=u(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=u(t.as,t.crossOrigin);a.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element");function r(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:o,ref:void 0!==t?t:null,props:r}}Symbol.for("react.fragment"),t.jsx=r,t.jsxs=r},844:e=>{e.exports={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var s=2*(r+1)-1,l=e[s],u=s+1,c=e[u];if(0>i(l,n))u<o&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[s]=n,r=s);else{if(!(u<o&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var u=[],c=[],d=1,f=null,h=3,p=!1,g=!1,m=!1,v=!1,b="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(c);null!==t;){if(null===t.callback)o(c);else{if(!(t.startTime<=e))break;o(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function S(e){if(m=!1,w(e),!g)if(null!==r(u))g=!0,E||(E=!0,k());else{var t=r(c);null!==t&&R(S,t.startTime-e)}}var k,E=!1,C=-1,O=5,j=-1;function T(){return!!v||!(t.unstable_now()-j<O)}function P(){if(v=!1,E){var e=t.unstable_now();j=e;var n=!0;try{e:{g=!1,m&&(m=!1,y(C),C=-1),p=!0;var i=h;try{t:{for(w(e),f=r(u);null!==f&&!(f.expirationTime>e&&T());){var a=f.callback;if("function"===typeof a){f.callback=null,h=f.priorityLevel;var s=a(f.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){f.callback=s,w(e),n=!0;break t}f===r(u)&&o(u),w(e)}else o(u);f=r(u)}if(null!==f)n=!0;else{var l=r(c);null!==l&&R(S,l.startTime-e),n=!1}}break e}finally{f=null,h=i,p=!1}n=void 0}}finally{n?k():E=!1}}}if("function"===typeof x)k=function(){x(P)};else if("undefined"!==typeof MessageChannel){var D=new MessageChannel,N=D.port2;D.port1.onmessage=P,k=function(){N.postMessage(null)}}else k=function(){b(P,0)};function R(e,n){C=b(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_next=function(e){switch(h){case 1:case 2:case 3:var t=3;break;default:t=h}var n=h;h=t;try{return e()}finally{h=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=h;h=e;try{return t()}finally{h=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(m?(y(C),C=-1):m=!0,R(S,i-a))):(e.sortIndex=s,n(u,e),g||p||(g=!0,E||(E=!0,k()))),e},t.unstable_shouldYield=T,t.unstable_wrapCallback=function(e){var t=h;return function(){var n=h;h=t;try{return e.apply(this,arguments)}finally{h=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/room-craft/",n.nc=void 0,(()=>{"use strict";var e={};n.r(e),n.d(e,{FILE:()=>Pl,HTML:()=>Rl,TEXT:()=>Nl,URL:()=>Dl});var t=n(43),r=n(391);const o=e=>"string"===typeof e,i=()=>{let e,t;const n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},a=e=>null==e?"":""+e,s=/###/g,l=e=>e&&e.indexOf("###")>-1?e.replace(s,"."):e,u=e=>!e||o(e),c=(e,t,n)=>{const r=o(t)?t.split("."):t;let i=0;for(;i<r.length-1;){if(u(e))return{};const t=l(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return u(e)?{}:{obj:e,k:l(r[i])}},d=(e,t,n)=>{const{obj:r,k:o}=c(e,t,Object);if(void 0!==r||1===t.length)return void(r[o]=n);let i=t[t.length-1],a=t.slice(0,t.length-1),s=c(e,a,Object);for(;void 0===s.obj&&a.length;)i=`${a[a.length-1]}.${i}`,a=a.slice(0,a.length-1),s=c(e,a,Object),s?.obj&&"undefined"!==typeof s.obj[`${s.k}.${i}`]&&(s.obj=void 0);s.obj[`${s.k}.${i}`]=n},f=(e,t)=>{const{obj:n,k:r}=c(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},h=(e,t,n)=>{for(const r in t)"__proto__"!==r&&"constructor"!==r&&(r in e?o(e[r])||e[r]instanceof String||o(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):h(e[r],t[r],n):e[r]=t[r]);return e},p=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const m=e=>o(e)?e.replace(/[&<>"'\/]/g,e=>g[e]):e;const v=[" ",",","?","!",";"],b=new class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const t=this.regExpMap.get(e);if(void 0!==t)return t;const n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}}(20),y=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:".";if(!e)return;if(e[t]){if(!Object.prototype.hasOwnProperty.call(e,t))return;return e[t]}const r=t.split(n);let o=e;for(let i=0;i<r.length;){if(!o||"object"!==typeof o)return;let e,t="";for(let a=i;a<r.length;++a)if(a!==i&&(t+=n),t+=r[a],e=o[t],void 0!==e){if(["string","number","boolean"].indexOf(typeof e)>-1&&a<r.length-1)continue;i+=a-i+1;break}o=e}return o},x=e=>e?.replace("_","-"),w={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console?.[e]?.apply?.(console,t)}};class S{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.init(e,t)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=t.prefix||"i18next:",this.logger=e||w,this.options=t,this.debug=t.debug}log(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"log","",!0)}warn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","",!0)}error(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"error","")}deprecate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.forward(t,"warn","WARNING DEPRECATED: ",!0)}forward(e,t,n,r){return r&&!this.debug?null:(o(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(e){return new S(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return(e=e||this.options).prefix=e.prefix||this.prefix,new S(this.logger,e)}}var k=new S;class E{constructor(){this.observers={}}on(e,t){return e.split(" ").forEach(e=>{this.observers[e]||(this.observers[e]=new Map);const n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){this.observers[e]&&(t?this.observers[e].delete(t):delete this.observers[e])}emit(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(this.observers[e]){Array.from(this.observers[e].entries()).forEach(e=>{let[t,r]=e;for(let o=0;o<r;o++)t(...n)})}if(this.observers["*"]){Array.from(this.observers["*"].entries()).forEach(t=>{let[r,o]=t;for(let i=0;i<o;i++)r.apply(r,[e,...n])})}}}class C extends E{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),void 0===this.options.ignoreJSONStructure&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const i=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,a=void 0!==r.ignoreJSONStructure?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let s;e.indexOf(".")>-1?s=e.split("."):(s=[e,t],n&&(Array.isArray(n)?s.push(...n):o(n)&&i?s.push(...n.split(i)):s.push(n)));const l=f(this.data,s);return!l&&!t&&!n&&e.indexOf(".")>-1&&(e=s[0],t=s[1],n=s.slice(2).join(".")),!l&&a&&o(n)?y(this.data?.[e]?.[t],n,i):l}addResource(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1};const i=void 0!==o.keySeparator?o.keySeparator:this.options.keySeparator;let a=[e,t];n&&(a=a.concat(i?n.split(i):n)),e.indexOf(".")>-1&&(a=e.split("."),r=t,t=a[1]),this.addNamespaces(t),d(this.data,a,r),o.silent||this.emit("added",e,t,n,r)}addResources(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(const i in n)(o(n[i])||Array.isArray(n[i]))&&this.addResource(e,t,i,n[i],{silent:!0});r.silent||this.emit("added",e,t,n)}addResourceBundle(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1,skipCopy:!1},a=[e,t];e.indexOf(".")>-1&&(a=e.split("."),r=n,n=t,t=a[1]),this.addNamespaces(t);let s=f(this.data,a)||{};i.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?h(s,n,o):s={...s,...n},d(this.data,a,s),i.silent||this.emit("added",e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit("removed",e,t)}hasResourceBundle(e,t){return void 0!==this.getResource(e,t)}getResourceBundle(e,t){return t||(t=this.options.defaultNS),this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>t[e]&&Object.keys(t[e]).length>0)}toJSON(){return this.data}}var O={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,o){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,o)??t}),t}};const j={},T=e=>!o(e)&&"boolean"!==typeof e&&"number"!==typeof e;class P extends E{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};super(),((e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})})(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=t,void 0===this.options.keySeparator&&(this.options.keySeparator="."),this.logger=k.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){const t={...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}}};if(null==e)return!1;const n=this.resolve(e,t);return void 0!==n?.res}extractFromKey(e,t){let n=void 0!==t.nsSeparator?t.nsSeparator:this.options.nsSeparator;void 0===n&&(n=":");const r=void 0!==t.keySeparator?t.keySeparator:this.options.keySeparator;let i=t.ns||this.options.defaultNS||[];const a=n&&e.indexOf(n)>-1,s=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!((e,t,n)=>{t=t||"",n=n||"";const r=v.filter(e=>t.indexOf(e)<0&&n.indexOf(e)<0);if(0===r.length)return!0;const o=b.getRegExp(`(${r.map(e=>"?"===e?"\\?":e).join("|")})`);let i=!o.test(e);if(!i){const t=e.indexOf(n);t>0&&!o.test(e.substring(0,t))&&(i=!0)}return i})(e,n,r);if(a&&!s){const t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:o(i)?[i]:i};const a=e.split(n);(n!==r||n===r&&this.options.ns.indexOf(a[0])>-1)&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:o(i)?[i]:i}}translate(e,t,n){let r="object"===typeof t?{...t}:t;if("object"!==typeof r&&this.options.overloadTranslationOptionHandler&&(r=this.options.overloadTranslationOptionHandler(arguments)),"object"===typeof options&&(r={...r}),r||(r={}),null==e)return"";Array.isArray(e)||(e=[String(e)]);const i=void 0!==r.returnDetails?r.returnDetails:this.options.returnDetails,a=void 0!==r.keySeparator?r.keySeparator:this.options.keySeparator,{key:s,namespaces:l}=this.extractFromKey(e[e.length-1],r),u=l[l.length-1];let c=void 0!==r.nsSeparator?r.nsSeparator:this.options.nsSeparator;void 0===c&&(c=":");const d=r.lng||this.language,f=r.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if("cimode"===d?.toLowerCase())return f?i?{res:`${u}${c}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:u,usedParams:this.getUsedParamsDetails(r)}:`${u}${c}${s}`:i?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:u,usedParams:this.getUsedParamsDetails(r)}:s;const h=this.resolve(e,r);let p=h?.res;const g=h?.usedKey||s,m=h?.exactUsedKey||s,v=void 0!==r.joinArrays?r.joinArrays:this.options.joinArrays,b=!this.i18nFormat||this.i18nFormat.handleAsObject,y=void 0!==r.count&&!o(r.count),x=P.hasDefaultValue(r),w=y?this.pluralResolver.getSuffix(d,r.count,r):"",S=r.ordinal&&y?this.pluralResolver.getSuffix(d,r.count,{ordinal:!1}):"",k=y&&!r.ordinal&&0===r.count,E=k&&r[`defaultValue${this.options.pluralSeparator}zero`]||r[`defaultValue${w}`]||r[`defaultValue${S}`]||r.defaultValue;let C=p;b&&!p&&x&&(C=E);const O=T(C),j=Object.prototype.toString.apply(C);if(!(b&&C&&O&&["[object Number]","[object Function]","[object RegExp]"].indexOf(j)<0)||o(v)&&Array.isArray(C))if(b&&o(v)&&Array.isArray(p))p=p.join(v),p&&(p=this.extendTranslation(p,e,r,n));else{let t=!1,o=!1;!this.isValidLookup(p)&&x&&(t=!0,p=E),this.isValidLookup(p)||(o=!0,p=s);const i=(r.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&o?void 0:p,l=x&&E!==p&&this.options.updateMissing;if(o||t||l){if(this.logger.log(l?"updateKey":"missingKey",d,u,s,l?E:p),a){const e=this.resolve(s,{...r,keySeparator:!1});e&&e.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let e=[];const t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,r.lng||this.language);if("fallback"===this.options.saveMissingTo&&t&&t[0])for(let r=0;r<t.length;r++)e.push(t[r]);else"all"===this.options.saveMissingTo?e=this.languageUtils.toResolveHierarchy(r.lng||this.language):e.push(r.lng||this.language);const n=(e,t,n)=>{const o=x&&n!==p?n:i;this.options.missingKeyHandler?this.options.missingKeyHandler(e,u,t,o,l,r):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,u,t,o,l,r),this.emit("missingKey",e,u,t,p)};this.options.saveMissing&&(this.options.saveMissingPlurals&&y?e.forEach(e=>{const t=this.pluralResolver.getSuffixes(e,r);k&&r[`defaultValue${this.options.pluralSeparator}zero`]&&t.indexOf(`${this.options.pluralSeparator}zero`)<0&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,r[`defaultValue${t}`]||E)})}):n(e,s,E))}p=this.extendTranslation(p,e,r,h,n),o&&p===s&&this.options.appendNamespaceToMissingKey&&(p=`${u}${c}${s}`),(o||t)&&this.options.parseMissingKeyHandler&&(p=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${u}${c}${s}`:s,t?p:void 0,r))}else{if(!r.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,C,{...r,ns:l}):`key '${s} (${this.language})' returned an object instead of string.`;return i?(h.res=e,h.usedParams=this.getUsedParamsDetails(r),h):e}if(a){const e=Array.isArray(C),t=e?[]:{},n=e?m:g;for(const o in C)if(Object.prototype.hasOwnProperty.call(C,o)){const e=`${n}${a}${o}`;t[o]=x&&!p?this.translate(e,{...r,defaultValue:T(E)?E[o]:void 0,joinArrays:!1,ns:l}):this.translate(e,{...r,joinArrays:!1,ns:l}),t[o]===e&&(t[o]=C[o])}p=t}}return i?(h.res=p,h.usedParams=this.getUsedParamsDetails(r),h):p}extendTranslation(e,t,n,r,i){var a=this;if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});const s=o(e)&&(void 0!==n?.interpolation?.skipOnVariables?n.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let l;if(s){const t=e.match(this.interpolator.nestingRegexp);l=t&&t.length}let u=n.replace&&!o(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(u={...this.options.interpolation.defaultVariables,...u}),e=this.interpolator.interpolate(e,u,n.lng||this.language||r.usedLng,n),s){const t=e.match(this.interpolator.nestingRegexp);l<(t&&t.length)&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),!1!==n.nest&&(e=this.interpolator.nest(e,function(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return i?.[0]!==r[0]||n.context?a.translate(...r,t):(a.logger.warn(`It seems you are nesting recursively key: ${r[0]} in key: ${t[0]}`),null)},n)),n.interpolation&&this.interpolator.reset()}const s=n.postProcess||this.options.postProcess,l=o(s)?[s]:s;return null!=e&&l?.length&&!1!==n.applyPostProcessor&&(e=O.handle(l,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e){let t,n,r,i,a,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(e)&&(e=[e]),e.forEach(e=>{if(this.isValidLookup(t))return;const l=this.extractFromKey(e,s),u=l.key;n=u;let c=l.namespaces;this.options.fallbackNS&&(c=c.concat(this.options.fallbackNS));const d=void 0!==s.count&&!o(s.count),f=d&&!s.ordinal&&0===s.count,h=void 0!==s.context&&(o(s.context)||"number"===typeof s.context)&&""!==s.context,p=s.lngs?s.lngs:this.languageUtils.toResolveHierarchy(s.lng||this.language,s.fallbackLng);c.forEach(e=>{this.isValidLookup(t)||(a=e,j[`${p[0]}-${e}`]||!this.utils?.hasLoadedNamespace||this.utils?.hasLoadedNamespace(a)||(j[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${n}" for languages "${p.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),p.forEach(n=>{if(this.isValidLookup(t))return;i=n;const o=[u];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,u,n,e,s);else{let e;d&&(e=this.pluralResolver.getSuffix(n,s.count,s));const t=`${this.options.pluralSeparator}zero`,r=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(o.push(u+e),s.ordinal&&0===e.indexOf(r)&&o.push(u+e.replace(r,this.options.pluralSeparator)),f&&o.push(u+t)),h){const n=`${u}${this.options.contextSeparator}${s.context}`;o.push(n),d&&(o.push(n+e),s.ordinal&&0===e.indexOf(r)&&o.push(n+e.replace(r,this.options.pluralSeparator)),f&&o.push(n+t))}}let a;for(;a=o.pop();)this.isValidLookup(t)||(r=a,t=this.getResource(n,e,a,s))}))})}),{res:t,usedKey:n,exactUsedKey:r,usedLng:i,usedNS:a}}isValidLookup(e){return void 0!==e&&!(!this.options.returnNull&&null===e)&&!(!this.options.returnEmptyString&&""===e)}getResource(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const t=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],n=e.replace&&!o(e.replace);let r=n?e.replace:e;if(n&&"undefined"!==typeof e.count&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(const e of t)delete r[e]}return r}static hasDefaultValue(e){const t="defaultValue";for(const n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t===n.substring(0,12)&&void 0!==e[n])return!0;return!1}}class D{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=k.create("languageUtils")}getScriptPartFromCode(e){if(!(e=x(e))||e.indexOf("-")<0)return null;const t=e.split("-");return 2===t.length?null:(t.pop(),"x"===t[t.length-1].toLowerCase()?null:this.formatLanguageCode(t.join("-")))}getLanguagePartFromCode(e){if(!(e=x(e))||e.indexOf("-")<0)return e;const t=e.split("-");return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(o(e)&&e.indexOf("-")>-1){let n;try{n=Intl.getCanonicalLocales(e)[0]}catch(t){}return n&&this.options.lowerCaseLng&&(n=n.toLowerCase()),n||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return("languageOnly"===this.options.load||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;const n=this.formatLanguageCode(e);this.options.supportedLngs&&!this.isSupportedCode(n)||(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;const n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;const r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?e:e.indexOf("-")<0&&r.indexOf("-")<0?void 0:e.indexOf("-")>0&&r.indexOf("-")<0&&e.substring(0,e.indexOf("-"))===r||0===e.indexOf(r)&&r.length>1?e:void 0)}),t||(t=this.getFallbackCodes(this.options.fallbackLng)[0]),t}getFallbackCodes(e,t){if(!e)return[];if("function"===typeof e&&(e=e(t)),o(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||(n=e[this.getScriptPartFromCode(t)]),n||(n=e[this.formatLanguageCode(t)]),n||(n=e[this.getLanguagePartFromCode(t)]),n||(n=e.default),n||[]}toResolveHierarchy(e,t){const n=this.getFallbackCodes((!1===t?[]:t)||this.options.fallbackLng||[],e),r=[],i=e=>{e&&(this.isSupportedCode(e)?r.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return o(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?("languageOnly"!==this.options.load&&i(this.formatLanguageCode(e)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&i(this.getScriptPartFromCode(e)),"currentOnly"!==this.options.load&&i(this.getLanguagePartFromCode(e))):o(e)&&i(this.formatLanguageCode(e)),n.forEach(e=>{r.indexOf(e)<0&&i(this.formatLanguageCode(e))}),r}}const N={zero:0,one:1,two:2,few:3,many:4,other:5},R={select:e=>1===e?"one":"other",resolvedOptions:()=>({pluralCategories:["one","other"]})};class L{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.languageUtils=e,this.options=t,this.logger=k.create("pluralResolver"),this.pluralRulesCache={}}addRule(e,t){this.rules[e]=t}clearCache(){this.pluralRulesCache={}}getRule(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=x("dev"===e?"en":e),r=t.ordinal?"ordinal":"cardinal",o=JSON.stringify({cleanedCode:n,type:r});if(o in this.pluralRulesCache)return this.pluralRulesCache[o];let i;try{i=new Intl.PluralRules(n,{type:r})}catch(a){if(!Intl)return this.logger.error("No Intl support, please use an Intl polyfill!"),R;if(!e.match(/-|_/))return R;const n=this.languageUtils.getLanguagePartFromCode(e);i=this.getRule(n,t)}return this.pluralRulesCache[o]=i,i}needsPlural(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.getRule(e,t);return n||(n=this.getRule("dev",t)),n?n.resolvedOptions().pluralCategories.sort((e,t)=>N[e]-N[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:""}${e}`):[]}getSuffix(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix("dev",t,n))}}const _=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".",i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=((e,t,n)=>{const r=f(e,n);return void 0!==r?r:f(t,n)})(e,t,n);return!a&&i&&o(n)&&(a=y(e,n,r),void 0===a&&(a=y(t,n,r))),a},$=e=>e.replace(/\$/g,"$$$$");class z{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=k.create("interpolator"),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:o,prefixEscaped:i,suffix:a,suffixEscaped:s,formatSeparator:l,unescapeSuffix:u,unescapePrefix:c,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:h,nestingSuffixEscaped:g,nestingOptionsSeparator:v,maxReplaces:b,alwaysFormat:y}=e.interpolation;this.escape=void 0!==t?t:m,this.escapeValue=void 0===n||n,this.useRawValueToEscape=void 0!==r&&r,this.prefix=o?p(o):i||"{{",this.suffix=a?p(a):s||"}}",this.formatSeparator=l||",",this.unescapePrefix=u?"":c||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=d?p(d):f||p("$t("),this.nestingSuffix=h?p(h):g||p(")"),this.nestingOptionsSeparator=v||",",this.maxReplaces=b||1e3,this.alwaysFormat=void 0!==y&&y,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,s,l;const u=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(e.indexOf(this.formatSeparator)<0){const o=_(t,u,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(o,void 0,n,{...r,...t,interpolationkey:e}):o}const o=e.split(this.formatSeparator),i=o.shift().trim(),a=o.join(this.formatSeparator).trim();return this.format(_(t,u,i,this.options.keySeparator,this.options.ignoreJSONStructure),a,n,{...r,...t,interpolationkey:i})};this.resetRegExp();const d=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,f=void 0!==r?.interpolation?.skipOnVariables?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>$(e)},{regex:this.regexp,safeValue:e=>this.escapeValue?$(this.escape(e)):$(e)}].forEach(t=>{for(l=0;i=t.regex.exec(e);){const n=i[1].trim();if(s=c(n),void 0===s)if("function"===typeof d){const t=d(e,i,r);s=o(t)?t:""}else if(r&&Object.prototype.hasOwnProperty.call(r,n))s="";else{if(f){s=i[0];continue}this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),s=""}else o(s)||this.useRawValueToEscape||(s=a(s));const u=t.safeValue(s);if(e=e.replace(i[0],u),f?(t.regex.lastIndex+=s.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,l++,l>=this.maxReplaces)break}}),e}nest(e,t){let n,r,i,s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const l=(e,t)=>{const n=this.nestingOptionsSeparator;if(e.indexOf(n)<0)return e;const r=e.split(new RegExp(`${n}[ ]*{`));let o=`{${r[1]}`;e=r[0],o=this.interpolate(o,i);const a=o.match(/'/g),s=o.match(/"/g);((a?.length??0)%2===0&&!s||s.length%2!==0)&&(o=o.replace(/'/g,'"'));try{i=JSON.parse(o),t&&(i={...t,...i})}catch(l){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,l),`${e}${n}${o}`}return i.defaultValue&&i.defaultValue.indexOf(this.prefix)>-1&&delete i.defaultValue,e};for(;n=this.nestingRegexp.exec(e);){let u=[];i={...s},i=i.replace&&!o(i.replace)?i.replace:i,i.applyPostProcessor=!1,delete i.defaultValue;const c=/{.*}/.test(n[1])?n[1].lastIndexOf("}")+1:n[1].indexOf(this.formatSeparator);if(-1!==c&&(u=n[1].slice(c).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),n[1]=n[1].slice(0,c)),r=t(l.call(this,n[1].trim(),i),i),r&&n[0]===e&&!o(r))return r;o(r)||(r=a(r)),r||(this.logger.warn(`missed to resolve ${n[1]} for nesting ${e}`),r=""),u.length&&(r=u.reduce((e,t)=>this.format(e,t,s.lng,{...s,interpolationkey:n[1].trim()}),r.trim())),e=e.replace(n[0],r),this.regexp.lastIndex=0}return e}}const I=e=>{const t={};return(n,r,o)=>{let i=o;o&&o.interpolationkey&&o.formatParams&&o.formatParams[o.interpolationkey]&&o[o.interpolationkey]&&(i={...i,[o.interpolationkey]:void 0});const a=r+JSON.stringify(i);let s=t[a];return s||(s=e(x(r),o),t[a]=s),s(n)}},A=e=>(t,n,r)=>e(x(n),r)(t);class F{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.logger=k.create("formatter"),this.options=e,this.init(e)}init(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}};this.formatSeparator=t.interpolation.formatSeparator||",";const n=t.cacheInBuiltFormats?I:A;this.formats={number:n((e,t)=>{const n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{const n=new Intl.NumberFormat(e,{...t,style:"currency"});return e=>n.format(e)}),datetime:n((e,t)=>{const n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{const n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||"day")}),list:n((e,t)=>{const n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=I(t)}format(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const o=t.split(this.formatSeparator);if(o.length>1&&o[0].indexOf("(")>1&&o[0].indexOf(")")<0&&o.find(e=>e.indexOf(")")>-1)){const e=o.findIndex(e=>e.indexOf(")")>-1);o[0]=[o[0],...o.splice(1,e)].join(this.formatSeparator)}const i=o.reduce((e,t)=>{const{formatName:o,formatOptions:i}=(e=>{let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);"currency"===t&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):"relativetime"===t&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(e=>{if(e){const[t,...r]=e.split(":"),o=r.join(":").trim().replace(/^'+|'+$/g,""),i=t.trim();n[i]||(n[i]=o),"false"===o&&(n[i]=!1),"true"===o&&(n[i]=!0),isNaN(o)||(n[i]=parseInt(o,10))}})}return{formatName:t,formatOptions:n}})(t);if(this.formats[o]){let t=e;try{const a=r?.formatParams?.[r.interpolationkey]||{},s=a.locale||a.lng||r.locale||r.lng||n;t=this.formats[o](e,s,{...i,...r,...a})}catch(a){this.logger.warn(a)}return t}return this.logger.warn(`there was no format function for ${o}`),e},e);return i}}class M extends E{constructor(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=k.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){const o={},i={},a={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{const a=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[a]=2:this.state[a]<0||(1===this.state[a]?void 0===i[a]&&(i[a]=!0):(this.state[a]=1,r=!1,void 0===i[a]&&(i[a]=!0),void 0===o[a]&&(o[a]=!0),void 0===s[t]&&(s[t]=!0)))}),r||(a[e]=!0)}),(Object.keys(o).length||Object.keys(i).length)&&this.queue.push({pending:i,pendingCount:Object.keys(i).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(o),pending:Object.keys(i),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){const r=e.split("|"),o=r[0],i=r[1];t&&this.emit("failedLoading",o,i,t),!t&&n&&this.store.addResourceBundle(o,i,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);const a={};this.queue.forEach(n=>{((e,t,n)=>{const{obj:r,k:o}=c(e,t,Object);r[o]=r[o]||[],r[o].push(n)})(n.loaded,[o],i),((e,t)=>{void 0!==e.pending[t]&&(delete e.pending[t],e.pendingCount--)})(n,e),t&&n.errors.push(t),0!==n.pendingCount||n.done||(Object.keys(n.loaded).forEach(e=>{a[e]||(a[e]={});const t=n.loaded[e];t.length&&t.forEach(t=>{void 0===a[e][t]&&(a[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:this.retryTimeout,i=arguments.length>5?arguments[5]:void 0;if(!e.length)return i(null,{});if(this.readingCalls>=this.maxParallelReads)return void this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:o,callback:i});this.readingCalls++;const a=(a,s)=>{if(this.readingCalls--,this.waitingReads.length>0){const e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}a&&s&&r<this.maxRetries?setTimeout(()=>{this.read.call(this,e,t,n,r+1,2*o,i)},o):i(a,s)},s=this.backend[n].bind(this.backend);if(2!==s.length)return s(e,t,a);try{const n=s(e,t);n&&"function"===typeof n.then?n.then(e=>a(null,e)).catch(a):a(null,n)}catch(l){a(l)}}prepareLoading(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();o(e)&&(e=this.languageUtils.toResolveHierarchy(e)),o(t)&&(t=[t]);const i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const n=e.split("|"),r=n[0],o=n[1];this.read(r,o,"read",void 0,void 0,(n,i)=>{n&&this.logger.warn(`${t}loading namespace ${o} for language ${r} failed`,n),!n&&i&&this.logger.log(`${t}loaded namespace ${o} for language ${r}`,i),this.loaded(e,n,i)})}saveMissing(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:()=>{};if(!this.services?.utils?.hasLoadedNamespace||this.services?.utils?.hasLoadedNamespace(t)){if(void 0!==n&&null!==n&&""!==n){if(this.backend?.create){const l={...i,isUpdate:o},u=this.backend.create.bind(this.backend);if(u.length<6)try{let o;o=5===u.length?u(e,t,n,r,l):u(e,t,n,r),o&&"function"===typeof o.then?o.then(e=>a(null,e)).catch(a):a(null,o)}catch(s){a(s)}else u(e,t,n,r,a,l)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}else this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")}}const H=()=>({debug:!1,initAsync:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if("object"===typeof e[1]&&(t=e[1]),o(e[1])&&(t.defaultValue=e[1]),o(e[2])&&(t.tDescription=e[2]),"object"===typeof e[2]||"object"===typeof e[3]){const n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),B=e=>(o(e.ns)&&(e.ns=[e.ns]),o(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),o(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs?.indexOf?.("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),"boolean"===typeof e.initImmediate&&(e.initAsync=e.initImmediate),e),U=()=>{};class V extends E{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;var n;if(super(),this.options=B(e),this.services={},this.logger=k,this.modules={external:[]},n=this,Object.getOwnPropertyNames(Object.getPrototypeOf(n)).forEach(e=>{"function"===typeof n[e]&&(n[e]=n[e].bind(n))}),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(){var e=this;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,"function"===typeof t&&(n=t,t={}),null==t.defaultNS&&t.ns&&(o(t.ns)?t.defaultNS=t.ns:t.ns.indexOf("translation")<0&&(t.defaultNS=t.ns[0]));const r=H();this.options={...r,...this.options,...B(t)},this.options.interpolation={...r.interpolation,...this.options.interpolation},void 0!==t.keySeparator&&(this.options.userDefinedKeySeparator=t.keySeparator),void 0!==t.nsSeparator&&(this.options.userDefinedNsSeparator=t.nsSeparator);const a=e=>e?"function"===typeof e?new e:e:null;if(!this.options.isClone){let t;this.modules.logger?k.init(a(this.modules.logger),this.options):k.init(null,this.options),t=this.modules.formatter?this.modules.formatter:F;const n=new D(this.options);this.store=new C(this.options.resources,this.options);const o=this.services;o.logger=k,o.resourceStore=this.store,o.languageUtils=n,o.pluralResolver=new L(n,{prepend:this.options.pluralSeparator,simplifyPluralSuffix:this.options.simplifyPluralSuffix});this.options.interpolation.format&&this.options.interpolation.format!==r.interpolation.format&&this.logger.warn("init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"),!t||this.options.interpolation.format&&this.options.interpolation.format!==r.interpolation.format||(o.formatter=a(t),o.formatter.init&&o.formatter.init(o,this.options),this.options.interpolation.format=o.formatter.format.bind(o.formatter)),o.interpolator=new z(this.options),o.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},o.backendConnector=new M(a(this.modules.backend),o.resourceStore,o,this.options),o.backendConnector.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit(t,...r)}),this.modules.languageDetector&&(o.languageDetector=a(this.modules.languageDetector),o.languageDetector.init&&o.languageDetector.init(o,this.options.detection,this.options)),this.modules.i18nFormat&&(o.i18nFormat=a(this.modules.i18nFormat),o.i18nFormat.init&&o.i18nFormat.init(this)),this.translator=new P(this.services,this.options),this.translator.on("*",function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];e.emit(t,...r)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,n||(n=U),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&"dev"!==e[0]&&(this.options.lng=e[0])}this.services.languageDetector||this.options.lng||this.logger.warn("init: no languageDetector is used and no lng is defined");["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(t=>{this[t]=function(){return e.store[t](...arguments)}});["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(t=>{this[t]=function(){return e.store[t](...arguments),e}});const s=i(),l=()=>{const e=(e,t)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(t),n(e,t)};if(this.languages&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?l():setTimeout(l,0),s}loadResources(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U;const n=o(e)?e:this.language;if("function"===typeof e&&(t=e),!this.options.resources||this.options.partialBundledLanguages){if("cimode"===n?.toLowerCase()&&(!this.options.preload||0===this.options.preload.length))return t();const e=[],r=t=>{if(!t)return;if("cimode"===t)return;this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{"cimode"!==t&&e.indexOf(t)<0&&e.push(t)})};if(n)r(n);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>r(e))}this.options.preload?.forEach?.(e=>r(e)),this.services.backendConnector.load(e,this.options.ns,e=>{e||this.resolvedLanguage||!this.language||this.setResolvedLanguage(this.language),t(e)})}else t(null)}reloadResources(e,t,n){const r=i();return"function"===typeof e&&(n=e,e=void 0),"function"===typeof t&&(n=t,t=void 0),e||(e=this.languages),t||(t=this.options.ns),n||(n=U),this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return"backend"===e.type&&(this.modules.backend=e),("logger"===e.type||e.log&&e.warn&&e.error)&&(this.modules.logger=e),"languageDetector"===e.type&&(this.modules.languageDetector=e),"i18nFormat"===e.type&&(this.modules.i18nFormat=e),"postProcessor"===e.type&&O.addPostProcessor(e),"formatter"===e.type&&(this.modules.formatter=e),"3rdParty"===e.type&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&!(["cimode","dev"].indexOf(e)>-1)){for(let e=0;e<this.languages.length;e++){const t=this.languages[e];if(!(["cimode","dev"].indexOf(t)>-1)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&this.languages.indexOf(e)<0&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){var n=this;this.isLanguageChangingTo=e;const r=i();this.emit("languageChanging",e);const a=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},s=(o,i)=>{i?this.isLanguageChangingTo===e&&(a(i),this.translator.changeLanguage(i),this.isLanguageChangingTo=void 0,this.emit("languageChanged",i),this.logger.log("languageChanged",i)):this.isLanguageChangingTo=void 0,r.resolve(function(){return n.t(...arguments)}),t&&t(o,function(){return n.t(...arguments)})},l=t=>{e||t||!this.services.languageDetector||(t=[]);const n=o(t)?t:t&&t[0],r=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(o(t)?[t]:t);r&&(this.language||a(r),this.translator.language||this.translator.changeLanguage(r),this.services.languageDetector?.cacheUserLanguage?.(r)),this.loadResources(r,e=>{s(e,r)})};return e||!this.services.languageDetector||this.services.languageDetector.async?!e&&this.services.languageDetector&&this.services.languageDetector.async?0===this.services.languageDetector.detect.length?this.services.languageDetector.detect().then(l):this.services.languageDetector.detect(l):l(e):l(this.services.languageDetector.detect()),r}getFixedT(e,t,n){var r=this;const i=function(e,t){let o;if("object"!==typeof t){for(var a=arguments.length,s=new Array(a>2?a-2:0),l=2;l<a;l++)s[l-2]=arguments[l];o=r.options.overloadTranslationOptionHandler([e,t].concat(s))}else o={...t};o.lng=o.lng||i.lng,o.lngs=o.lngs||i.lngs,o.ns=o.ns||i.ns,""!==o.keyPrefix&&(o.keyPrefix=o.keyPrefix||n||i.keyPrefix);const u=r.options.keySeparator||".";let c;return c=o.keyPrefix&&Array.isArray(e)?e.map(e=>`${o.keyPrefix}${u}${e}`):o.keyPrefix?`${o.keyPrefix}${u}${e}`:e,r.t(c,o)};return o(e)?i.lng=e:i.lngs=e,i.ns=t,i.keyPrefix=n,i}t(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.translator?.translate(...t)}exists(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return this.translator?.exists(...t)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const n=t.lng||this.resolvedLanguage||this.languages[0],r=!!this.options&&this.options.fallbackLng,o=this.languages[this.languages.length-1];if("cimode"===n.toLowerCase())return!0;const i=(e,t)=>{const n=this.services.backendConnector.state[`${e}|${t}`];return-1===n||0===n||2===n};if(t.precheck){const e=t.precheck(this,i);if(void 0!==e)return e}return!!this.hasResourceBundle(n,e)||(!(this.services.backendConnector.backend&&(!this.options.resources||this.options.partialBundledLanguages))||!(!i(n,e)||r&&!i(o,e)))}loadNamespaces(e,t){const n=i();return this.options.ns?(o(e)&&(e=[e]),e.forEach(e=>{this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){const n=i();o(e)&&(e=[e]);const r=this.options.preload||[],a=e.filter(e=>r.indexOf(e)<0&&this.services.languageUtils.isSupportedCode(e));return a.length?(this.options.preload=r.concat(a),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language)),!e)return"rtl";try{const t=new Intl.Locale(e);if(t&&t.getTextInfo){const e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch(n){}const t=this.services?.languageUtils||new D(H());return e.toLowerCase().indexOf("-latn")>1?"ltr":["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"].indexOf(t.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){return new V(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1?arguments[1]:void 0)}cloneInstance(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:U;const n=e.forkResourceStore;n&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},o=new V(r);void 0===e.debug&&void 0===e.prefix||(o.logger=o.logger.clone(e));if(["store","services","language"].forEach(e=>{o[e]=this[e]}),o.services={...this.services},o.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},n){const e=Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{});o.store=new C(e,r),o.services.resourceStore=o.store}return o.translator=new P(o.services,r),o.translator.on("*",function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];o.emit(e,...n)}),o.init(r,t),o.translator.options=r,o.translator.backendConnector.services.utils={hasLoadedNamespace:o.hasLoadedNamespace.bind(o)},o}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const W=V.createInstance();W.createInstance=V.createInstance;W.createInstance,W.dir,W.init,W.loadResources,W.reloadResources,W.use,W.changeLanguage,W.getFixedT,W.t,W.exists,W.setDefaultNamespace,W.hasLoadedNamespace,W.loadNamespaces,W.loadLanguages;n(844);Object.create(null);const q={},K=(e,t,n,r)=>{X(n)&&q[n]||(X(n)&&(q[n]=new Date),((e,t,n,r)=>{const o=[n,{code:t,...r||{}}];if(e?.services?.logger?.forward)return e.services.logger.forward(o,"warn","react-i18next::",!0);X(o[0])&&(o[0]=`react-i18next:: ${o[0]}`),e?.services?.logger?.warn?e.services.logger.warn(...o):console?.warn&&console.warn(...o)})(e,t,n,r))},Y=(e,t)=>()=>{if(e.isInitialized)t();else{const n=()=>{setTimeout(()=>{e.off("initialized",n)},0),t()};e.on("initialized",n)}},Q=(e,t,n)=>{e.loadNamespaces(t,Y(e,n))},G=(e,t,n,r)=>{if(X(n)&&(n=[n]),e.options.preload&&e.options.preload.indexOf(t)>-1)return Q(e,n,r);n.forEach(t=>{e.options.ns.indexOf(t)<0&&e.options.ns.push(t)}),e.loadLanguages(t,Y(e,r))},X=e=>"string"===typeof e,J=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Z={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"\xa9","&#169;":"\xa9","&reg;":"\xae","&#174;":"\xae","&hellip;":"\u2026","&#8230;":"\u2026","&#x2F;":"/","&#47;":"/"},ee=e=>Z[e];let te={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:e=>e.replace(J,ee)};let ne;const re={type:"3rdParty",init(e){!function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};te={...te,...e}}(e.options.react),(e=>{ne=e})(e)}},oe=(0,t.createContext)();class ie{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(e=>{this.usedNamespaces[e]||(this.usedNamespaces[e]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const ae=(e,t,n,r)=>e.getFixedT(t,n,r),se=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{i18n:r}=n,{i18n:o,defaultNS:i}=(0,t.useContext)(oe)||{},a=r||o||ne;if(a&&!a.reportNamespaces&&(a.reportNamespaces=new ie),!a){K(a,"NO_I18NEXT_INSTANCE","useTranslation: You will need to pass in an i18next instance by using initReactI18next");const e=(e,t)=>{return X(t)?t:"object"===typeof(n=t)&&null!==n&&X(t.defaultValue)?t.defaultValue:Array.isArray(e)?e[e.length-1]:e;var n},t=[e,{},!1];return t.t=e,t.i18n={},t.ready=!1,t}a.options.react?.wait&&K(a,"DEPRECATED_OPTION","useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const s={...te,...a.options.react,...n},{useSuspense:l,keyPrefix:u}=s;let c=e||i||a.options?.defaultNS;c=X(c)?[c]:c||["translation"],a.reportNamespaces.addUsedNamespaces?.(c);const d=(a.isInitialized||a.initializedStoreOnce)&&c.every(e=>function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.languages&&t.languages.length?t.hasLoadedNamespace(e,{lng:n.lng,precheck:(t,r)=>{if(n.bindI18n&&n.bindI18n.indexOf("languageChanging")>-1&&t.services.backendConnector.backend&&t.isLanguageChangingTo&&!r(t.isLanguageChangingTo,e))return!1}}):(K(t,"NO_LANGUAGES","i18n.languages were undefined or empty",{languages:t.languages}),!0)}(e,a,s)),f=((e,n,r,o)=>(0,t.useCallback)(ae(e,n,r,o),[e,n,r,o]))(a,n.lng||null,"fallback"===s.nsMode?c:c[0],u),h=()=>f,p=()=>ae(a,n.lng||null,"fallback"===s.nsMode?c:c[0],u),[g,m]=(0,t.useState)(h);let v=c.join();n.lng&&(v=`${n.lng}${v}`);const b=((e,n)=>{const r=(0,t.useRef)();return(0,t.useEffect)(()=>{r.current=n?r.current:e},[e,n]),r.current})(v),y=(0,t.useRef)(!0);(0,t.useEffect)(()=>{const{bindI18n:e,bindI18nStore:t}=s;y.current=!0,d||l||(n.lng?G(a,n.lng,c,()=>{y.current&&m(p)}):Q(a,c,()=>{y.current&&m(p)})),d&&b&&b!==v&&y.current&&m(p);const r=()=>{y.current&&m(p)};return e&&a?.on(e,r),t&&a?.store.on(t,r),()=>{y.current=!1,a&&e&&e?.split(" ").forEach(e=>a.off(e,r)),t&&a&&t.split(" ").forEach(e=>a.store.off(e,r))}},[a,v]),(0,t.useEffect)(()=>{y.current&&d&&m(h)},[a,u,d]);const x=[g,a,d];if(x.t=g,x.i18n=a,x.ready=d,d)return x;if(!d&&!l)return x;throw new Promise(e=>{n.lng?G(a,n.lng,c,()=>e()):Q(a,c,()=>e())})};const le=JSON.parse('{"header":{"page1":"Home","page2":"Build","language":"Language"},"hero":{"title":"Create the Room of Your Dreams","subtitle":"An intuitive planner for designing the perfect space. No limits, no stress \u2014 just creativity and idea realization.","item1":"Over 10,000 unique designs created","item2":"50+ interior elements","item3":"Tips from professional designers","text1":"User rating","text2":"Interior styles","button":"Start designing \u2014 it\'s free"},"features":{"title1":"Unlimited Creativity","title2":"Accessibility","title3":"Project Saving","description1":"Combine thousands of interior elements: color, texture, size \u2014 design without limits.","description2":"Works on phones, tablets, and computers \u2014 right in your browser.","description3":"Your designs are saved to your account and available anytime."},"gallery":{"title":"Inspiration for Your Design","text1":"Scandinavian","text2":"Loft","text3":"Minimalism"},"how-it-works":{"title":"How It Works?","text1":"Choose room size","text2":"Add furniture","text3":"Adjust colors","text4":"Save and share"},"reviews":{"title":"What Our Users Say","author1":"Anna, 19 years old","author2":"Maksym, designer","author3":"Oleh, 32 years old","author4":"Iryna, mother of two","author5":"Serhii, realtor","author6":"Yuliia, student","text1":"Created my dream room in 10 minutes!","text2":"I use it for quick client sketches.","text3":"Very intuitive, nothing extra.","text4":"It helped plan the kids\' room before renovation.","text5":"Sometimes I show clients how a space might look.","text6":"Just awesome. Easy and no sign-up required."},"faq":{"title":"Frequently Asked Questions","question1":"What is this tool?","question2":"Do I need to install anything?","question3":"Can I share my design?","question4":"How much does it cost?","question5":"Does it work on mobile?","question6":"How can I contact support?","question7":"Can I save my design?","question8":"Is registration required?","answer1":"It\'s a web app that lets you easily create a room design by selecting furniture and colors.","answer2":"No, everything works right in your browser.","answer3":"Yes! You can export an image or share a link.","answer4":"The basic version is free. More features will be added soon.","answer5":"Yes, the interface is adapted for mobile devices.","answer6":"Message us in chat or email \u2014 links are at the bottom of the page.","answer7":"Yes, we automatically save your projects in local storage.","answer8":"No registration needed \u2014 just open and use it."},"footer":{"anchor1":"How it works","anchor2":"Reviews","anchor3":"FAQ","authors":"Authors: Artur Pankovets, Maksym Ryaboshapka"},"catalog":{"title":"Furniture Catalog","placeholder":"Search furniture..."},"furniture":{"furnitureName":"Furniture","beds":{"name":"Beds","bed1":"Palace Bed","bed2":"Folding Bed","bed3":"Hammock Bed","bed4":"Metal Bed","bed5":"Drawer Bed","bed6":"Transformer Bed"},"sofas":{"name":"Sofas","sofa1":"Classic Sofa","sofa2":"Modern Sofa","sofa3":"Corner Sofa","sofa4":"Sofa Bed","sofa5":"Folding Sofa"},"chairs":{"name":"Chairs","chair1":"Wooden Chair","chair2":"Cocoon Chair","chair3":"Gaming Chair","chair4":"Garden Chair","chair5":"Hanging Chair","chair6":"Mesh Chair","chair7":"Modern Chair","chair8":"Office Chair","chair9":"Rocking Chair","chair10":"Simple Chair"},"desks":{"name":"Desks","desk1":"Wooden Desk","desk2":"Glass Desk","desk3":"Office Desk","desk4":"Coffee Table","desk5":"Folding Desk"},"wardrobe":{"name":"Wardrobes","wardrobe1":"Classic Wardrobe","wardrobe2":"Modern Wardrobe","wardrobe3":"Bookcase","wardrobe4":"Shelf Wardrobe","wardrobe5":"Closet Wardrobe"},"shelfs":{"name":"Shelves","shelf1":"Classic Shelf","shelf2":"Modern Shelf","shelf3":"Corner Shelf"},"electronicsName":"Electronics","pcs":{"name":"Computers","pc1":"Desktop PC","pc2":"Laptop","pc3":"Gaming PC"},"tvs":{"name":"TVs","tv":"Television"},"lamps":{"name":"Lamps","lamp1":"Desk Lamp","lamp2":"Modern LED Lamp","lamp3":"Floor Lamp"},"decorName":"Decor","plants":{"name":"Plants","plant1":"Cactus","plant2":"Leafy Plant","plant3":"Flowering Plant"},"rugs":{"name":"Rugs","rug1":"Oriental Rug","rug2":"Modern Rug"},"gamingName":"Gaming","beanbags":{"name":"Bean Bags","beanbag1":"Classic Round","beanbag2":"Modern Square","beanbag3":"Designer Star"},"wheels":{"name":"Wheels","wheel1":"Sport Steering Wheel","wheel2":"Racing Wheel"},"arcades":{"name":"Arcades","arcade1":"Classic Arcade Machine","arcade2":"Racing Arcade"}}}'),ue=JSON.parse('{"header":{"page1":"\u0413\u043e\u043b\u043e\u0432\u043d\u0430","page2":"\u0420\u0435\u0434\u0430\u043a\u0442\u043e\u0440","language":"\u041c\u043e\u0432\u0430"},"hero":{"title":"\u0421\u0442\u0432\u043e\u0440\u0438 \u043a\u0456\u043c\u043d\u0430\u0442\u0443 \u0441\u0432\u043e\u0454\u0457 \u043c\u0440\u0456\u0457","subtitle":"\u0406\u043d\u0442\u0443\u0457\u0442\u0438\u0432\u043d\u0438\u0439 \u043a\u043e\u043d\u0441\u0442\u0440\u0443\u043a\u0442\u043e\u0440 \u0434\u043b\u044f \u043f\u043b\u0430\u043d\u0443\u0432\u0430\u043d\u043d\u044f \u0456\u0434\u0435\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043f\u0440\u043e\u0441\u0442\u043e\u0440\u0443. \u0411\u0435\u0437 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u044c, \u0431\u0435\u0437 \u0441\u0442\u0440\u0435\u0441\u0443 - \u0442\u0456\u043b\u044c\u043a\u0438 \u0442\u0432\u043e\u0440\u0447\u0456\u0441\u0442\u044c \u0442\u0430 \u0432\u0442\u0456\u043b\u0435\u043d\u043d\u044f \u0456\u0434\u0435\u0439.","item1":"\u041f\u043e\u043d\u0430\u0434 10,000 \u0443\u043d\u0456\u043a\u0430\u043b\u044c\u043d\u0438\u0445 \u0434\u0438\u0437\u0430\u0439\u043d\u0456\u0432 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e","item2":"50+ \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 \u0456\u043d\u0442\u0435\u0440\'\u0454\u0440\u0443","item3":"\u041f\u0456\u0434\u043a\u0430\u0437\u043a\u0438 \u0432\u0456\u0434 \u043f\u0440\u043e\u0444\u0435\u0441\u0456\u0439\u043d\u0438\u0445 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0456\u0432","text1":"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456\u0432","text2":"\u0421\u0442\u0438\u043b\u0456\u0432 \u0456\u043d\u0442\u0435\u0440\'\u0454\u0440\u0443","button":"\u041f\u043e\u0447\u0430\u0442\u0438 \u0434\u0438\u0437\u0430\u0439\u043d \u2014 \u0446\u0435 \u0431\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u043e"},"features":{"title1":"\u0411\u0435\u0437\u043c\u0435\u0436\u043d\u0430 \u0442\u0432\u043e\u0440\u0447\u0456\u0441\u0442\u044c","title2":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0456\u0441\u0442\u044c","title3":"\u0417\u0431\u0435\u0440\u0435\u0436\u0435\u043d\u043d\u044f \u043f\u0440\u043e\u0435\u043a\u0442\u0456\u0432","description1":"\u041f\u043e\u0454\u0434\u043d\u0443\u0439\u0442\u0435 \u0442\u0438\u0441\u044f\u0447\u0456 \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0456\u0432 \u0456\u043d\u0442\u0435\u0440\u2019\u0454\u0440\u0443: \u043a\u043e\u043b\u0456\u0440, \u0442\u0435\u043a\u0441\u0442\u0443\u0440\u0443, \u0440\u043e\u0437\u043c\u0456\u0440 \u2014 \u0434\u0438\u0437\u0430\u0439\u043d \u0431\u0435\u0437 \u043e\u0431\u043c\u0435\u0436\u0435\u043d\u044c.","description2":"\u041f\u0440\u0430\u0446\u044e\u0454 \u043d\u0430 \u043c\u043e\u0431\u0456\u043b\u044c\u043d\u0438\u0445, \u043f\u043b\u0430\u043d\u0448\u0435\u0442\u0430\u0445 \u0456 \u043a\u043e\u043c\u043f\u2019\u044e\u0442\u0435\u0440\u0430\u0445 \u2014 \u043f\u0440\u044f\u043c\u043e \u0432 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456.","description3":"\u0412\u0430\u0448\u0456 \u0434\u0438\u0437\u0430\u0439\u043d\u0438 \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u044e\u0442\u044c\u0441\u044f \u0432 \u0430\u043a\u0430\u0443\u043d\u0442\u0456 \u0439 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0456 \u0431\u0443\u0434\u044c-\u043a\u043e\u043b\u0438."},"gallery":{"title":"\u041d\u0430\u0442\u0445\u043d\u0435\u043d\u043d\u044f \u0434\u043b\u044f \u0432\u0430\u0448\u043e\u0433\u043e \u0434\u0438\u0437\u0430\u0439\u043d\u0443","text1":"\u0421\u043a\u0430\u043d\u0434\u0438\u043d\u0430\u0432\u0441\u044c\u043a\u0438\u0439","text2":"\u041b\u043e\u0444\u0442","text3":"\u041c\u0456\u043d\u0456\u043c\u0430\u043b\u0456\u0437\u043c"},"how-it-works":{"title":"\u042f\u043a \u0446\u0435 \u043f\u0440\u0430\u0446\u044e\u0454?","text1":"\u041e\u0431\u0435\u0440\u0456\u0442\u044c \u0440\u043e\u0437\u043c\u0456\u0440 \u043a\u0456\u043c\u043d\u0430\u0442\u0438","text2":"\u0414\u043e\u0434\u0430\u0439\u0442\u0435 \u043c\u0435\u0431\u043b\u0456","text3":"\u041d\u0430\u043b\u0430\u0448\u0442\u0443\u0439\u0442\u0435 \u043a\u043e\u043b\u044c\u043e\u0440\u0438","text4":"\u0417\u0431\u0435\u0440\u0435\u0436\u0456\u0442\u044c \u0442\u0430 \u043f\u043e\u0434\u0456\u043b\u0456\u0442\u044c\u0441\u044f"},"reviews":{"title":"\u0429\u043e \u0433\u043e\u0432\u043e\u0440\u044f\u0442\u044c \u043d\u0430\u0448\u0456 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0456","author1":"\u0410\u043d\u043d\u0430, 19 \u0440\u043e\u043a\u0456\u0432","author2":"\u041c\u0430\u043a\u0441\u0438\u043c, \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440","author3":"\u041e\u043b\u0435\u0433, 32 \u0440\u043e\u043a\u0438","author4":"\u0406\u0440\u0438\u043d\u0430, \u043c\u0430\u043c\u0430 \u0434\u0432\u043e\u0445 \u0434\u0456\u0442\u0435\u0439","author5":"\u0421\u0435\u0440\u0433\u0456\u0439, \u0440\u0456\u0454\u043b\u0442\u043e\u0440","author6":"\u042e\u043b\u0456\u044f, \u0441\u0442\u0443\u0434\u0435\u043d\u0442\u043a\u0430","text1":"\u0417\u0430 10 \u0445\u0432\u0438\u043b\u0438\u043d \u0441\u0442\u0432\u043e\u0440\u0438\u043b\u0430 \u0456\u0434\u0435\u0430\u043b\u044c\u043d\u0443 \u043a\u0456\u043c\u043d\u0430\u0442\u0443!","text2":"\u041a\u043e\u0440\u0438\u0441\u0442\u0443\u044e\u0441\u044c \u0434\u043b\u044f \u0448\u0432\u0438\u0434\u043a\u0438\u0445 \u0435\u0441\u043a\u0456\u0437\u0456\u0432 \u043a\u043b\u0456\u0454\u043d\u0442\u0430\u043c.","text3":"\u0414\u0443\u0436\u0435 \u0456\u043d\u0442\u0443\u0457\u0442\u0438\u0432\u043d\u043e, \u043d\u0456\u0447\u043e\u0433\u043e \u0437\u0430\u0439\u0432\u043e\u0433\u043e.","text4":"\u0443\u0447\u043d\u043e \u043f\u043b\u0430\u043d\u0443\u0432\u0430\u0442\u0438 \u0434\u0438\u0442\u044f\u0447\u0443 \u043a\u0456\u043c\u043d\u0430\u0442\u0443 \u043f\u0435\u0440\u0435\u0434 \u0440\u0435\u043c\u043e\u043d\u0442\u043e\u043c.","text5":"\u0406\u043d\u043e\u0434\u0456 \u043f\u043e\u043a\u0430\u0437\u0443\u044e \u043a\u043b\u0456\u0454\u043d\u0442\u0430\u043c, \u044f\u043a \u043c\u043e\u0436\u0435 \u0432\u0438\u0433\u043b\u044f\u0434\u0430\u0442\u0438 \u043f\u0440\u043e\u0441\u0442\u0456\u0440.","text6":"\u041f\u0440\u043e\u0441\u0442\u043e \u043a\u0430\u0439\u0444. \u041b\u0435\u0433\u043a\u043e \u0456 \u0431\u0435\u0437 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u0457."},"faq":{"title":"\u041f\u043e\u0448\u0438\u0440\u0435\u043d\u0456 \u0437\u0430\u043f\u0438\u0442\u0430\u043d\u043d\u044f","question1":"\u0429\u043e \u0446\u0435 \u0437\u0430 \u0456\u043d\u0441\u0442\u0440\u0443\u043c\u0435\u043d\u0442?","question2":"\u0427\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u043e \u0449\u043e\u0441\u044c \u0432\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u044e\u0432\u0430\u0442\u0438?","question3":"\u0427\u0438 \u043c\u043e\u0436\u0443 \u044f \u043f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u043e\u043c?","question4":"\u0421\u043a\u0456\u043b\u044c\u043a\u0438 \u0446\u0435 \u043a\u043e\u0448\u0442\u0443\u0454?","question5":"\u041f\u0440\u0430\u0446\u044e\u0454 \u043d\u0430 \u043c\u043e\u0431\u0456\u043b\u044c\u043d\u043e\u043c\u0443?","question6":"\u042f\u043a \u0437\u0432\u0435\u0440\u043d\u0443\u0442\u0438\u0441\u044c \u0443 \u043f\u0456\u0434\u0442\u0440\u0438\u043c\u043a\u0443?","question7":"\u0427\u0438 \u043c\u043e\u0436\u0443 \u044f \u0437\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0434\u0438\u0437\u0430\u0439\u043d","question8":"\u0427\u0438 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0430 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f?","answer1":"\u0426\u0435 \u0432\u0435\u0431\u0434\u043e\u0434\u0430\u0442\u043e\u043a, \u0449\u043e \u0434\u043e\u0437\u0432\u043e\u043b\u044f\u0454 \u043b\u0435\u0433\u043a\u043e \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u0438 \u0434\u0438\u0437\u0430\u0439\u043d \u043a\u0456\u043c\u043d\u0430\u0442\u0438, \u0432\u0438\u0431\u0438\u0440\u0430\u044e\u0447\u0438 \u043c\u0435\u0431\u043b\u0456 \u0442\u0430 \u043a\u043e\u043b\u044c\u043e\u0440\u0438.","answer2":"\u041d\u0456, \u0432\u0441\u0435 \u043f\u0440\u0430\u0446\u044e\u0454 \u043f\u0440\u044f\u043c\u043e \u0443 \u0432\u0430\u0448\u043e\u043c\u0443 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0456.","answer3":"\u0422\u0430\u043a! \u0412\u0438 \u043c\u043e\u0436\u0435\u0442\u0435 \u0435\u043a\u0441\u043f\u043e\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f \u0430\u0431\u043e \u043f\u043e\u0434\u0456\u043b\u0438\u0442\u0438\u0441\u044f \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f\u043c.","answer4":"\u0411\u0430\u0437\u043e\u0432\u0430 \u0432\u0435\u0440\u0441\u0456\u044f \u2014 \u0431\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u0430. \u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0456 \u0444\u0443\u043d\u043a\u0446\u0456\u0457 \u0437\u2019\u044f\u0432\u043b\u044f\u0442\u044c\u0441\u044f \u0437\u0433\u043e\u0434\u043e\u043c.","answer5":"\u0422\u0430\u043a, \u0456\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0430\u0434\u0430\u043f\u0442\u043e\u0432\u0430\u043d\u0438\u0439 \u043f\u0456\u0434 \u043c\u043e\u0431\u0456\u043b\u044c\u043d\u0456 \u043f\u0440\u0438\u0441\u0442\u0440\u043e\u0457.","answer6":"\u041d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u043d\u0430\u043c \u0443 \u0447\u0430\u0442 \u0430\u0431\u043e \u043d\u0430 \u043f\u043e\u0448\u0442\u0443 \u2014 \u043f\u043e\u0441\u0438\u043b\u0430\u043d\u043d\u044f \u0432\u043d\u0438\u0437\u0443 \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0438.","answer7":"\u0422\u0430\u043a, \u043c\u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u043d\u043e \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454\u043c\u043e \u0432\u0430\u0448\u0456 \u043f\u0440\u043e\u0454\u043a\u0442\u0438 \u0443 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e\u043c\u0443 \u0441\u0445\u043e\u0432\u0438\u0449\u0456.","answer8":"\u041d\u0456, \u0437\u0430\u0440\u0430\u0437 \u0440\u0435\u0454\u0441\u0442\u0440\u0430\u0446\u0456\u044f \u043d\u0435 \u043f\u043e\u0442\u0440\u0456\u0431\u043d\u0430 \u2014 \u043f\u0440\u043e\u0441\u0442\u043e \u0432\u0456\u0434\u043a\u0440\u0438\u0439\u0442\u0435 \u0456 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0439\u0442\u0435\u0441\u044c."},"footer":{"anchor1":"\u042f\u043a \u0446\u0435 \u043f\u0440\u0430\u0446\u044e\u0454","anchor2":"\u0412\u0456\u0434\u0433\u0443\u043a\u0438","anchor3":"FAQ","authors":"\u0410\u0432\u0442\u043e\u0440\u0438: \u0410\u0440\u0442\u0443\u0440 \u041f\u0430\u043d\u043a\u043e\u0432\u0435\u0446\u044c, \u041c\u0430\u043a\u0441\u0438\u043c \u0420\u044f\u0431\u043e\u0448\u0430\u043f\u043a\u0430"},"catalog":{"title":"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043c\u0435\u0431\u043b\u0456\u0432","placeholder":"\u041f\u043e\u0448\u0443\u043a \u043c\u0435\u0431\u043b\u0456\u0432..."},"furniture":{"furnitureName":"\u041c\u0435\u0431\u043b\u0456","beds":{"name":"\u041b\u0456\u0436\u043a\u0430","bed1":"\u041b\u0456\u0436\u043a\u043e-\u043f\u0430\u043b\u0430\u0446","bed2":"\u0420\u043e\u0437\u043a\u043b\u0430\u0434\u043d\u0435 \u043b\u0456\u0436\u043a\u043e","bed3":"\u041b\u0456\u0436\u043a\u043e-\u0433\u0430\u043c\u0430\u043a","bed4":"\u041c\u0435\u0442\u0430\u043b\u0435\u0432\u0435 \u043b\u0456\u0436\u043a\u043e","bed5":"\u041b\u0456\u0436\u043a\u043e \u0437 \u0448\u0443\u0445\u043b\u044f\u0434\u0430\u043c\u0438","bed6":"\u041b\u0456\u0436\u043a\u043e-\u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0435\u0440"},"sofas":{"name":"\u0414\u0438\u0432\u0430\u043d\u0438","sofa1":"\u041a\u043b\u0430\u0441\u0438\u0447\u043d\u0438\u0439 \u0434\u0438\u0432\u0430\u043d","sofa2":"\u0421\u0443\u0447\u0430\u0441\u043d\u0438\u0439 \u0434\u0438\u0432\u0430\u043d","sofa3":"\u041a\u0443\u0442\u043e\u0432\u0438\u0439 \u0434\u0438\u0432\u0430\u043d","sofa4":"\u0414\u0438\u0432\u0430\u043d-\u043b\u0456\u0436\u043a\u043e","sofa5":"\u0420\u043e\u0437\u043a\u043b\u0430\u0434\u043d\u0438\u0439 \u0434\u0438\u0432\u0430\u043d"},"chairs":{"name":"\u041a\u0440\u0456\u0441\u043b\u0430","chair1":"\u0414\u0435\u0440\u0435\u0432\'\u044f\u043d\u0435 \u043a\u0440\u0456\u0441\u043b\u043e","chair2":"\u041a\u0440\u0456\u0441\u043b\u043e-\u043a\u043e\u043a\u043e\u043d","chair3":"\u0413\u0435\u0439\u043c\u0435\u0440\u0441\u044c\u043a\u0435 \u043a\u0440\u0456\u0441\u043b\u043e","chair4":"\u0421\u0430\u0434\u043e\u0432\u0435 \u043a\u0440\u0456\u0441\u043b\u043e","chair5":"\u041a\u0440\u0456\u0441\u043b\u043e-\u043f\u0456\u0434\u0432\u0456\u0441","chair6":"\u041a\u0440\u0456\u0441\u043b\u043e-\u0441\u0456\u0442\u043a\u0430","chair7":"\u0421\u0443\u0447\u0430\u0441\u043d\u0435 \u043a\u0440\u0456\u0441\u043b\u043e","chair8":"\u041e\u0444\u0456\u0441\u043d\u0435 \u043a\u0440\u0456\u0441\u043b\u043e","chair9":"\u041a\u0440\u0456\u0441\u043b\u043e-\u043a\u0430\u0447\u0430\u043b\u043a\u0430","chair10":"\u041f\u0440\u043e\u0441\u0442\u0435 \u043a\u0440\u0456\u0441\u043b\u043e"},"desks":{"name":"\u0421\u0442\u043e\u043b\u0438","desk1":"\u0414\u0435\u0440\u0435\u0432\'\u044f\u043d\u0438\u0439 \u0441\u0442\u0456\u043b","desk2":"C\u043a\u043b\u044f\u043d\u0438\u0439 \u0441\u0442\u0456\u043b","desk3":"\u041e\u0444\u0456\u0441\u043d\u0438\u0439 \u0441\u0442\u0456\u043b","desk4":"\u041a\u0430\u0432\u043e\u0432\u0438\u0439 \u0441\u0442\u043e\u043b\u0438\u043a","desk5":"\u0421\u043a\u043b\u0430\u0434\u043d\u0438\u0439 \u0441\u0442\u0456\u043b"},"wardrobe":{"name":"\u0428\u0430\u0444\u0438","wardrobe1":"\u041a\u043b\u0430\u0441\u0438\u0447\u043d\u0430 \u0448\u0430\u0444\u0430","wardrobe2":"\u0421\u0443\u0447\u0430\u0441\u043d\u0430 \u0448\u0430\u0444\u0430","wardrobe3":"\u041a\u043d\u0438\u0436\u043a\u043e\u0432\u0430 \u0448\u0430\u0444\u0430","wardrobe4":"\u0428\u0430\u0444\u0430 \u0437 \u043f\u043e\u043b\u0438\u0446\u044f\u043c\u0438","wardrobe5":"\u0428\u0430\u0444\u0430-\u0433\u0430\u0440\u0434\u0435\u0440\u043e\u0431"},"shelfs":{"name":"\u041f\u043e\u043b\u0438\u0446\u0456","shelf1":"\u041a\u043b\u0430\u0441\u0438\u0447\u043d\u0430 \u043f\u043e\u043b\u0438\u0446\u044f","shelf2":"\u0421\u0443\u0447\u0430\u0441\u043d\u0430 \u043f\u043e\u043b\u0438\u0446\u044f","shelf3":"\u041a\u0443\u0442\u043e\u0432\u0430 \u043f\u043e\u043b\u0438\u0446\u044f"},"electronicsName":"\u0422\u0435\u0445\u043d\u0456\u043a\u0430","pcs":{"name":"\u041a\u043e\u043c\u043f\'\u044e\u0442\u0435\u0440\u0438","pc1":"\u041d\u0430\u0441\u0442\u0456\u043b\u044c\u043d\u0438\u0439 \u041f\u041a","pc2":"\u041d\u043e\u0443\u0442\u0431\u0443\u043a","pc3":"\u0413\u0435\u0439\u043c\u0435\u0440\u0441\u044c\u043a\u0438\u0439 \u041f\u041a"},"tvs":{"name":"\u0422\u0435\u043b\u0435\u0432\u0456\u0437\u043e\u0440\u0438","tv":"\u0422\u0435\u043b\u0435\u0432\u0456\u0437\u043e\u0440"},"lamps":{"name":"\u041b\u0430\u043c\u043f\u0438","lamp1":"\u041d\u0430\u0441\u0442\u0456\u043b\u044c\u043d\u0430 \u043b\u0430\u043c\u043f\u0430","lamp2":"\u0421\u0443\u0447\u0430\u0441\u043d\u0430 LED \u043b\u0430\u043c\u043f\u0430","lamp3":"\u041f\u0456\u0434\u043b\u043e\u0433\u043e\u0432\u0430 \u043b\u0430\u043c\u043f\u0430"},"decorName":"\u0414\u0435\u043a\u043e\u0440","plants":{"name":"\u0420\u043e\u0441\u043b\u0438\u043d\u0438","plant1":"\u041a\u0430\u043a\u0442\u0443\u0441","plant2":"\u041b\u0438\u0441\u0442\u044f\u043d\u0430 \u0440\u043e\u0441\u043b\u0438\u043d\u0430","plant3":"\u041a\u0432\u0456\u0442\u0443\u0447\u0430 \u0440\u043e\u0441\u043b\u0438\u043d\u0430"},"rugs":{"name":"\u041a\u0438\u043b\u0438\u043c\u0438","rug1":"\u041e\u0440\u0456\u0454\u043d\u0442\u0430\u043b\u044c\u043d\u0438\u0439 \u043a\u0438\u043b\u0438\u043c","rug2":"\u0421\u0443\u0447\u0430\u0441\u043d\u0438\u0439 \u043a\u0438\u043b\u0438\u043c"},"gamingName":"\u0413\u0435\u0439\u043c\u0456\u043d\u0433","beanbags":{"name":"\u041f\u0443\u0444\u0438","beanbag1":"\u041a\u043b\u0430\u0441\u0438\u0447\u043d\u0438\u0439 \u043a\u0440\u0443\u0433\u043b\u0438\u0439","beanbag2":"\u0421\u0443\u0447\u0430\u0441\u043d\u0438\u0439 \u043a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u0438\u0439","beanbag3":"\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u044c\u043a\u0438\u0439 \u0437\u0456\u0440\u043e\u0447\u043a\u0430"},"wheels":{"name":"\u041a\u0435\u0440\u043c\u043e","wheel1":"\u0421\u043f\u043e\u0440\u0442\u0438\u0432\u043d\u0435 \u043a\u0435\u0440\u043c\u043e","wheel2":"\u0413\u043e\u043d\u043e\u0447\u043d\u0435 \u043a\u0435\u0440\u043c\u043e"},"arcades":{"name":"\u0410\u0440\u043a\u0430\u0434\u0438","arcade1":"\u041a\u043b\u0430\u0441\u0438\u0447\u043d\u0438\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442","arcade2":"\u0413\u043e\u043d\u043e\u0447\u043d\u0438\u0439 \u0430\u0432\u0442\u043e\u043c\u0430\u0442"}}}');W.use(re).init({resources:{en:{translation:le},ua:{translation:ue}},lng:"ua",fallbackLng:"ua",interpolation:{escapeValue:!1}});var ce="popstate";function de(){return be(function(e,t){let{pathname:n,search:r,hash:o}=e.location;return ge("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"===typeof t?t:me(t)},null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function fe(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function he(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function pe(e,t){return{usr:e.state,key:e.key,idx:t}}function ge(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?ve(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function me(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function ve(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function be(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:i=!1}=r,a=o.history,s="POP",l=null,u=c();function c(){return(a.state||{idx:null}).idx}function d(){s="POP";let e=c(),t=null==e?null:e-u;u=e,l&&l({action:s,location:h.location,delta:t})}function f(e){return ye(e)}null==u&&(u=0,a.replaceState({...a.state,idx:u},""));let h={get action(){return s},get location(){return e(o,a)},listen(e){if(l)throw new Error("A history only accepts one active listener");return o.addEventListener(ce,d),l=e,()=>{o.removeEventListener(ce,d),l=null}},createHref:e=>t(o,e),createURL:f,encodeLocation(e){let t=f(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){s="PUSH";let r=ge(h.location,e,t);n&&n(r,e),u=c()+1;let d=pe(r,u),f=h.createHref(r);try{a.pushState(d,"",f)}catch(p){if(p instanceof DOMException&&"DataCloneError"===p.name)throw p;o.location.assign(f)}i&&l&&l({action:s,location:h.location,delta:1})},replace:function(e,t){s="REPLACE";let r=ge(h.location,e,t);n&&n(r,e),u=c();let o=pe(r,u),d=h.createHref(r);a.replaceState(o,"",d),i&&l&&l({action:s,location:h.location,delta:0})},go:e=>a.go(e)};return h}function ye(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n="http://localhost";"undefined"!==typeof window&&(n="null"!==window.location.origin?window.location.origin:window.location.href),fe(n,"No window.location.(origin|href) available to create URL");let r="string"===typeof e?e:me(e);return r=r.replace(/ $/,"%20"),!t&&r.startsWith("//")&&(r=n+r),new URL(r,n)}new WeakMap;function xe(e,t){return we(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function we(e,t,n,r){let o=ze(("string"===typeof t?ve(t):t).pathname||"/",n);if(null==o)return null;let i=Se(e);!function(e){e.sort((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n]);return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=$e(o);a=Re(i[s],e,r)}return a}function Se(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=(e,o,i)=>{let a={relativePath:void 0===i?e.path||"":i,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};a.relativePath.startsWith("/")&&(fe(a.relativePath.startsWith(r),`Absolute route path "${a.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),a.relativePath=a.relativePath.slice(r.length));let s=He([r,a.relativePath]),l=n.concat(a);e.children&&e.children.length>0&&(fe(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${s}".`),Se(e.children,t,l,s)),(null!=e.path||e.index)&&t.push({path:s,score:Ne(s,e.index),routesMeta:l})};return e.forEach((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of ke(e.path))o(e,t,n);else o(e,t)}),t}function ke(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=ke(r.join("/")),s=[];return s.push(...a.map(e=>""===e?i:[i,e].join("/"))),o&&s.push(...a),s.map(t=>e.startsWith("/")&&""===t?"/":t)}var Ee=/^:[\w-]+$/,Ce=3,Oe=2,je=1,Te=10,Pe=-2,De=e=>"*"===e;function Ne(e,t){let n=e.split("/"),r=n.length;return n.some(De)&&(r+=Pe),t&&(r+=Oe),n.filter(e=>!De(e)).reduce((e,t)=>e+(Ee.test(t)?Ce:""===t?je:Te),r)}function Re(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,u="/"===i?t:t.slice(i.length)||"/",c=Le({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},u),d=e.route;if(!c&&l&&n&&!r[r.length-1].route.index&&(c=Le({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(o,c.params),a.push({params:o,pathname:He([i,c.pathname]),pathnameBase:Be(He([i,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(i=He([i,c.pathnameBase]))}return a}function Le(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=_e(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=s[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=o&&!l?void 0:(l||"").replace(/%2F/g,"/"),e},{}),pathname:i,pathnameBase:a,pattern:e}}function _e(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];he("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function $e(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return he(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function ze(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function Ie(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0)}function Fe(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=ve(e):(r={...e},fe(!r.pathname||!r.pathname.includes("?"),Ie("?","pathname","search",r)),fe(!r.pathname||!r.pathname.includes("#"),Ie("#","pathname","hash",r)),fe(!r.search||!r.search.includes("#"),Ie("#","search","hash",r)));let i,a=""===e||""===r.pathname,s=a?"/":r.pathname;if(null==s)i=n;else{let e=t.length-1;if(!o&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}i=e>=0?t[e]:"/"}let l=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:o=""}="string"===typeof e?ve(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)}),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:Ue(r),hash:Ve(o)}}(r,i),u=s&&"/"!==s&&s.endsWith("/"),c=(a||"."===s)&&n.endsWith("/");return l.pathname.endsWith("/")||!u&&!c||(l.pathname+="/"),l}var He=e=>e.join("/").replace(/\/\/+/g,"/"),Be=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ue=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",Ve=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function We(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var qe=["POST","PUT","PATCH","DELETE"],Ke=(new Set(qe),["GET",...qe]);new Set(Ke),Symbol("ResetLoaderData");var Ye=t.createContext(null);Ye.displayName="DataRouter";var Qe=t.createContext(null);Qe.displayName="DataRouterState";var Ge=t.createContext(!1);var Xe=t.createContext({isTransitioning:!1});Xe.displayName="ViewTransition";var Je=t.createContext(new Map);Je.displayName="Fetchers";var Ze=t.createContext(null);Ze.displayName="Await";var et=t.createContext(null);et.displayName="Navigation";var tt=t.createContext(null);tt.displayName="Location";var nt=t.createContext({outlet:null,matches:[],isDataRoute:!1});nt.displayName="Route";var rt=t.createContext(null);rt.displayName="RouteError";function ot(){return null!=t.useContext(tt)}function it(){return fe(ot(),"useLocation() may be used only in the context of a <Router> component."),t.useContext(tt).location}var at="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function st(e){t.useContext(et).static||t.useLayoutEffect(e)}function lt(){let{isDataRoute:e}=t.useContext(nt);return e?function(){let{router:e}=vt("useNavigate"),n=yt("useNavigate"),r=t.useRef(!1);st(()=>{r.current=!0});let o=t.useCallback(async function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};he(r.current,at),r.current&&("number"===typeof t?e.navigate(t):await e.navigate(t,{fromRouteId:n,...o}))},[e,n]);return o}():function(){fe(ot(),"useNavigate() may be used only in the context of a <Router> component.");let e=t.useContext(Ye),{basename:n,navigator:r}=t.useContext(et),{matches:o}=t.useContext(nt),{pathname:i}=it(),a=JSON.stringify(Fe(o)),s=t.useRef(!1);st(()=>{s.current=!0});let l=t.useCallback(function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(he(s.current,at),!s.current)return;if("number"===typeof t)return void r.go(t);let l=Me(t,JSON.parse(a),i,"path"===o.relative);null==e&&"/"!==n&&(l.pathname="/"===l.pathname?n:He([n,l.pathname])),(o.replace?r.replace:r.push)(l,o.state,o)},[n,r,a,i,e]);return l}()}t.createContext(null);function ut(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=t.useContext(nt),{pathname:o}=it(),i=JSON.stringify(Fe(r));return t.useMemo(()=>Me(e,JSON.parse(i),o,"path"===n),[e,i,o,n])}function ct(e,n,r,o){fe(ot(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=t.useContext(et),{matches:a}=t.useContext(nt),s=a[a.length-1],l=s?s.params:{},u=s?s.pathname:"/",c=s?s.pathnameBase:"/",d=s&&s.route;{let e=d&&d.path||"";St(u,!d||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${u}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let f,h=it();if(n){let e="string"===typeof n?ve(n):n;fe("/"===c||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),f=e}else f=h;let p=f.pathname||"/",g=p;if("/"!==c){let e=c.replace(/^\//,"").split("/");g="/"+p.replace(/^\//,"").split("/").slice(e.length).join("/")}let m=xe(e,{pathname:g});he(d||null!=m,`No routes matched location "${f.pathname}${f.search}${f.hash}" `),he(null==m||void 0!==m[m.length-1].route.element||void 0!==m[m.length-1].route.Component||void 0!==m[m.length-1].route.lazy,`Matched leaf route at location "${f.pathname}${f.search}${f.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let v=gt(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:He([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?c:He([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,r,o);return n&&v?t.createElement(tt.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...f},navigationType:"POP"}},v):v}function dt(){let e=xt(),n=We(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o},a={padding:"2px 4px",backgroundColor:o},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=t.createElement(t.Fragment,null,t.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),t.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",t.createElement("code",{style:a},"ErrorBoundary")," or"," ",t.createElement("code",{style:a},"errorElement")," prop on your route.")),t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:i},r):null,s)}var ft=t.createElement(dt,null),ht=class extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(nt.Provider,{value:this.props.routeContext},t.createElement(rt.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function pt(e){let{routeContext:n,match:r,children:o}=e,i=t.useContext(Ye);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(nt.Provider,{value:n},o)}function gt(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==e){if(!r)return null;if(r.errors)e=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;e=r.matches}}let o=e,i=r?.errors;if(null!=i){let e=o.findIndex(e=>e.route.id&&void 0!==i?.[e.route.id]);fe(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(i).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let a=!1,s=-1;if(r)for(let t=0;t<o.length;t++){let e=o[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(s=t),e.route.id){let{loaderData:t,errors:n}=r,i=e.route.loader&&!t.hasOwnProperty(e.route.id)&&(!n||void 0===n[e.route.id]);if(e.route.lazy||i){a=!0,o=s>=0?o.slice(0,s+1):[o[0]];break}}}return o.reduceRight((e,l,u)=>{let c,d=!1,f=null,h=null;r&&(c=i&&l.route.id?i[l.route.id]:void 0,f=l.route.errorElement||ft,a&&(s<0&&0===u?(St("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,h=null):s===u&&(d=!0,h=l.route.hydrateFallbackElement||null)));let p=n.concat(o.slice(0,u+1)),g=()=>{let n;return n=c?f:d?h:l.route.Component?t.createElement(l.route.Component,null):l.route.element?l.route.element:e,t.createElement(pt,{match:l,routeContext:{outlet:e,matches:p,isDataRoute:null!=r},children:n})};return r&&(l.route.ErrorBoundary||l.route.errorElement||0===u)?t.createElement(ht,{location:r.location,revalidation:r.revalidation,component:f,error:c,children:g(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):g()},null)}function mt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function vt(e){let n=t.useContext(Ye);return fe(n,mt(e)),n}function bt(e){let n=t.useContext(Qe);return fe(n,mt(e)),n}function yt(e){let n=function(e){let n=t.useContext(nt);return fe(n,mt(e)),n}(e),r=n.matches[n.matches.length-1];return fe(r.route.id,`${e} can only be used on routes that contain a unique "id"`),r.route.id}function xt(){let e=t.useContext(rt),n=bt("useRouteError"),r=yt("useRouteError");return void 0!==e?e:n.errors?.[r]}var wt={};function St(e,t,n){t||wt[e]||(wt[e]=!0,he(!1,n))}var kt={};function Et(e,t){e||kt[t]||(kt[t]=!0,console.warn(t))}t.memo(function(e){let{routes:t,future:n,state:r}=e;return ct(t,void 0,r,n)});function Ct(e){fe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ot(e){let{basename:n="/",children:r=null,location:o,navigationType:i="POP",navigator:a,static:s=!1}=e;fe(!ot(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let l=n.replace(/^\/*/,"/"),u=t.useMemo(()=>({basename:l,navigator:a,static:s,future:{}}),[l,a,s]);"string"===typeof o&&(o=ve(o));let{pathname:c="/",search:d="",hash:f="",state:h=null,key:p="default"}=o,g=t.useMemo(()=>{let e=ze(c,l);return null==e?null:{location:{pathname:e,search:d,hash:f,state:h,key:p},navigationType:i}},[l,c,d,f,h,p,i]);return he(null!=g,`<Router basename="${l}"> is not able to match the URL "${c}${d}${f}" because it does not start with the basename, so the <Router> won't render anything.`),null==g?null:t.createElement(et.Provider,{value:u},t.createElement(tt.Provider,{children:r,value:g}))}function jt(e){let{children:t,location:n}=e;return ct(Tt(t),n)}t.Component;function Tt(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return t.Children.forEach(e,(e,o)=>{if(!t.isValidElement(e))return;let i=[...n,o];if(e.type===t.Fragment)return void r.push.apply(r,Tt(e.props.children,i));fe(e.type===Ct,`[${"string"===typeof e.type?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),fe(!e.props.index||!e.props.children,"An index route cannot have child routes.");let a={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:!0===e.props.hasErrorBoundary||null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Tt(e.props.children,i)),r.push(a)}),r}var Pt="get",Dt="application/x-www-form-urlencoded";function Nt(e){return null!=e&&"string"===typeof e.tagName}var Rt=null;var Lt=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function _t(e){return null==e||Lt.has(e)?e:(he(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Dt}"`),null)}function $t(e,t){let n,r,o,i,a;if(Nt(s=e)&&"form"===s.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?ze(a,t):null,n=e.getAttribute("method")||Pt,o=_t(e.getAttribute("enctype"))||Dt,i=new FormData(e)}else if(function(e){return Nt(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Nt(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?ze(s,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||Pt,o=_t(e.getAttribute("formenctype"))||_t(a.getAttribute("enctype"))||Dt,i=new FormData(a,e),!function(){if(null===Rt)try{new FormData(document.createElement("form"),0),Rt=!1}catch(e){Rt=!0}return Rt}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(Nt(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Pt,r=null,o=Dt,a=e}var s;return i&&"text/plain"===o&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");"undefined"!==typeof window?window:"undefined"!==typeof globalThis&&globalThis;function zt(e){return{__html:e}}function It(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}Symbol("SingleFetchRedirect");function At(e,t,n){let r="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===r.pathname?r.pathname=`_root.${n}`:t&&"/"===ze(r.pathname,t)?r.pathname=`${t.replace(/\/$/,"")}/_root.${n}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${n}`,r}async function Ft(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Mt(e){return null!=e&&"string"===typeof e.page}function Ht(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Bt(e,t,n,r,o,i){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter((e,t)=>a(e,t)||s(e,t)):"data"===i?t.filter((t,i)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(a(t,i)||s(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0}):[]}function Ut(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o}).flat(1),[...new Set(r)];var r}function Vt(e,t){let n=new Set,r=new Set(t);return e.reduce((e,o)=>{if(t&&!Mt(o)&&"script"===o.as&&o.href&&r.has(o.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(o));return n.has(i)||(n.add(i),e.push({key:i,link:o})),e},[])}function Wt(e,t){return"lazy"===e.mode&&!0===t}function qt(){let e=t.useContext(Ye);return It(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function Kt(){let e=t.useContext(Qe);return It(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var Yt=t.createContext(void 0);function Qt(){let e=t.useContext(Yt);return It(e,"You must render this element inside a <HydratedRouter> element"),e}function Gt(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Xt(e,t,n){if(n&&!tn)return[e[0]];if(t){let n=e.findIndex(e=>void 0!==t[e.route.id]);return e.slice(0,n+1)}return e}Yt.displayName="FrameworkContext";function Jt(e){let{page:n,...r}=e,{router:o}=qt(),i=t.useMemo(()=>xe(o.routes,n,o.basename),[o.routes,n,o.basename]);return i?t.createElement(en,{page:n,matches:i,...r}):null}function Zt(e){let{manifest:n,routeModules:r}=Qt(),[o,i]=t.useState([]);return t.useEffect(()=>{let t=!1;return async function(e,t,n){let r=await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await Ft(r,n);return e.links?e.links():[]}return[]}));return Vt(r.flat(1).filter(Ht).filter(e=>"stylesheet"===e.rel||"preload"===e.rel).map(e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"}))}(e,n,r).then(e=>{t||i(e)}),()=>{t=!0}},[e,n,r]),o}function en(e){let{page:n,matches:r,...o}=e,i=it(),{manifest:a,routeModules:s}=Qt(),{basename:l}=qt(),{loaderData:u,matches:c}=Kt(),d=t.useMemo(()=>Bt(n,r,c,a,i,"data"),[n,r,c,a,i]),f=t.useMemo(()=>Bt(n,r,c,a,i,"assets"),[n,r,c,a,i]),h=t.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let e=new Set,t=!1;if(r.forEach(n=>{let r=a.routes[n.route.id];r&&r.hasLoader&&(!d.some(e=>e.route.id===n.route.id)&&n.route.id in u&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))}),0===e.size)return[];let o=At(n,l,"data");return t&&e.size>0&&o.searchParams.set("_routes",r.filter(t=>e.has(t.route.id)).map(e=>e.route.id).join(",")),[o.pathname+o.search]},[l,u,i,a,d,r,n,s]),p=t.useMemo(()=>Ut(f,a),[f,a]),g=Zt(f);return t.createElement(t.Fragment,null,h.map(e=>t.createElement("link",{key:e,rel:"prefetch",as:"fetch",href:e,...o})),p.map(e=>t.createElement("link",{key:e,rel:"modulepreload",href:e,...o})),g.map(e=>{let{key:n,link:r}=e;return t.createElement("link",{key:n,...r})}))}var tn=!1;function nn(e){let{manifest:n,serverHandoffString:r,isSpaMode:o,renderMeta:i,routeDiscovery:a,ssr:s}=Qt(),{router:l,static:u,staticContext:c}=qt(),{matches:d}=Kt(),f=t.useContext(Ge),h=Wt(a,s);i&&(i.didRenderScripts=!0);let p=Xt(d,null,o);t.useEffect(()=>{0},[]);let g=t.useMemo(()=>{if(f)return null;let o=c?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=u?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${h?"":`import ${JSON.stringify(n.url)}`};\n${p.map((e,t)=>{let r=`route${t}`,o=n.routes[e.route.id];It(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:a,clientMiddlewareModule:s,hydrateFallbackModule:l,module:u}=o,c=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:u,varName:`${r}_main`}];return 1===c.length?`import * as ${r} from ${JSON.stringify(u)};`:[c.map(e=>`import * as ${e.varName} from "${e.module}";`).join("\n"),`const ${r} = {${c.map(e=>`...${e.varName}`).join(",")}};`].join("\n")}).join("\n")}\n  ${h?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,o=new Set(t.state.matches.map(e=>e.route.id)),i=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(i.pop();i.length>0;)a.push(`/${i.join("/")}`),i.pop();a.forEach(e=>{let n=xe(t.routes,e,t.basename);n&&n.forEach(e=>o.add(e.route.id))});let s=[...o].reduce((e,t)=>Object.assign(e,{[t]:r.routes[t]}),{});return{...r,routes:s,sri:!!n||void 0}}(n,l),null,2)};`:""}\n  window.__reactRouterRouteModules = {${p.map((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return t.createElement(t.Fragment,null,t.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:zt(o),type:void 0}),t.createElement("script",{...e,suppressHydrationWarning:!0,dangerouslySetInnerHTML:zt(i),type:"module",async:!0}))},[]),m=tn||f?[]:(n.entry.imports.concat(Ut(p,n,{includeHydrateFallback:!0})),[...new Set(v)]);var v;let b="object"===typeof n.sri?n.sri:{};return Et(!f,"The <Scripts /> element is a no-op when using RSC and can be safely removed."),tn||f?null:t.createElement(t.Fragment,null,"object"===typeof n.sri?t.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:b})}}):null,h?null:t.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:e.crossOrigin,integrity:b[n.url],suppressHydrationWarning:!0}),t.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:e.crossOrigin,integrity:b[n.entry.module],suppressHydrationWarning:!0}),m.map(n=>t.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:e.crossOrigin,integrity:b[n],suppressHydrationWarning:!0})),g)}function rn(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach(t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)})}}t.Component;function on(e){let{error:n,isOutsideRemixApp:r}=e;console.error(n);let o,i=t.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://reactrouter.com/how-to/error-boundary for more information."\n        );\n      '}});if(We(n))return t.createElement(an,{title:"Unhandled Thrown Response!"},t.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),i);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return t.createElement(an,{title:"Application Error!",isOutsideRemixApp:r},t.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),t.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),i)}function an(e){let{title:n,renderScripts:r,isOutsideRemixApp:o,children:i}=e,{routeModules:a}=Qt();return a.root?.Layout&&!o?i:t.createElement("html",{lang:"en"},t.createElement("head",null,t.createElement("meta",{charSet:"utf-8"}),t.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),t.createElement("title",null,n)),t.createElement("body",null,t.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,r?t.createElement(nn,null):null)))}var sn="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{sn&&(window.__reactRouterVersion="7.7.1")}catch(Bp){}function ln(e){let{basename:n,children:r,window:o}=e,i=t.useRef();null==i.current&&(i.current=de({window:o,v5Compat:!0}));let a=i.current,[s,l]=t.useState({action:a.action,location:a.location}),u=t.useCallback(e=>{t.startTransition(()=>l(e))},[l]);return t.useLayoutEffect(()=>a.listen(u),[a,u]),t.createElement(Ot,{basename:n,children:r,location:s.location,navigationType:s.action,navigator:a})}var un=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cn=t.forwardRef(function(e,n){let r,{onClick:o,discover:i="render",prefetch:a="none",relative:s,reloadDocument:l,replace:u,state:c,target:d,to:f,preventScrollReset:h,viewTransition:p,...g}=e,{basename:m}=t.useContext(et),v="string"===typeof f&&un.test(f),b=!1;if("string"===typeof f&&v&&(r=f,sn))try{let e=new URL(window.location.href),t=f.startsWith("//")?new URL(e.protocol+f):new URL(f),n=ze(t.pathname,m);t.origin===e.origin&&null!=n?f=n+t.search+t.hash:b=!0}catch(Bp){he(!1,`<Link to="${f}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let y=function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};fe(ot(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=t.useContext(et),{hash:i,pathname:a,search:s}=ut(e,{relative:n}),l=a;return"/"!==r&&(l="/"===a?r:He([r,a])),o.createHref({pathname:l,search:s,hash:i})}(f,{relative:s}),[x,w,S]=function(e,n){let r=t.useContext(Yt),[o,i]=t.useState(!1),[a,s]=t.useState(!1),{onFocus:l,onBlur:u,onMouseEnter:c,onMouseLeave:d,onTouchStart:f}=n,h=t.useRef(null);t.useEffect(()=>{if("render"===e&&s(!0),"viewport"===e){let e=new IntersectionObserver(e=>{e.forEach(e=>{s(e.isIntersecting)})},{threshold:.5});return h.current&&e.observe(h.current),()=>{e.disconnect()}}},[e]),t.useEffect(()=>{if(o){let e=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(e)}}},[o]);let p=()=>{i(!0)},g=()=>{i(!1),s(!1)};return r?"intent"!==e?[a,h,{}]:[a,h,{onFocus:Gt(l,p),onBlur:Gt(u,g),onMouseEnter:Gt(c,p),onMouseLeave:Gt(d,g),onTouchStart:Gt(f,p)}]:[!1,h,{}]}(a,g),k=function(e){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=lt(),u=it(),c=ut(e,{relative:a});return t.useCallback(t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,n)){t.preventDefault();let n=void 0!==r?r:me(u)===me(c);l(e,{replace:n,state:o,preventScrollReset:i,relative:a,viewTransition:s})}},[u,l,c,r,o,n,e,i,a,s])}(f,{replace:u,state:c,target:d,preventScrollReset:h,relative:s,viewTransition:p});let E=t.createElement("a",{...g,...S,href:r||y,onClick:b||l?o:function(e){o&&o(e),e.defaultPrevented||k(e)},ref:rn(n,w),target:d,"data-discover":v||"render"!==i?void 0:"true"});return x&&!v?t.createElement(t.Fragment,null,E,t.createElement(Jt,{page:y})):E});cn.displayName="Link";var dn=t.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:a=!1,style:s,to:l,viewTransition:u,children:c,...d}=e,f=ut(l,{relative:d.relative}),h=it(),p=t.useContext(Qe),{navigator:g,basename:m}=t.useContext(et),v=null!=p&&function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.useContext(Xe);fe(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=pn("useViewTransitionState"),i=ut(e,{relative:n});if(!r.isTransitioning)return!1;let a=ze(r.currentLocation.pathname,o)||r.currentLocation.pathname,s=ze(r.nextLocation.pathname,o)||r.nextLocation.pathname;return null!=Le(i.pathname,s)||null!=Le(i.pathname,a)}(f)&&!0===u,b=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,y=h.pathname,x=p&&p.navigation&&p.navigation.location?p.navigation.location.pathname:null;o||(y=y.toLowerCase(),x=x?x.toLowerCase():null,b=b.toLowerCase()),x&&m&&(x=ze(x,m)||x);const w="/"!==b&&b.endsWith("/")?b.length-1:b.length;let S,k=y===b||!a&&y.startsWith(b)&&"/"===y.charAt(w),E=null!=x&&(x===b||!a&&x.startsWith(b)&&"/"===x.charAt(b.length)),C={isActive:k,isPending:E,isTransitioning:v},O=k?r:void 0;S="function"===typeof i?i(C):[i,k?"active":null,E?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let j="function"===typeof s?s(C):s;return t.createElement(cn,{...d,"aria-current":O,className:S,ref:n,style:j,to:l,viewTransition:u},"function"===typeof c?c(C):c)});dn.displayName="NavLink";var fn=t.forwardRef((e,n)=>{let{discover:r="render",fetcherKey:o,navigate:i,reloadDocument:a,replace:s,state:l,method:u=Pt,action:c,onSubmit:d,relative:f,preventScrollReset:h,viewTransition:p,...g}=e,m=vn(),v=function(e){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=t.useContext(et),o=t.useContext(nt);fe(o,"useFormAction must be used inside a RouteContext");let[i]=o.matches.slice(-1),a={...ut(e||".",{relative:n})},s=it();if(null==e){a.search=s.search;let e=new URLSearchParams(a.search),t=e.getAll("index"),n=t.some(e=>""===e);if(n){e.delete("index"),t.filter(e=>e).forEach(t=>e.append("index",t));let n=e.toString();a.search=n?`?${n}`:""}}e&&"."!==e||!i.route.index||(a.search=a.search?a.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(a.pathname="/"===a.pathname?r:He([r,a.pathname]));return me(a)}(c,{relative:f}),b="get"===u.toLowerCase()?"get":"post",y="string"===typeof c&&un.test(c);return t.createElement("form",{ref:n,method:b,action:v,onSubmit:a?d:e=>{if(d&&d(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||u;m(t||e.currentTarget,{fetcherKey:o,method:n,navigate:i,replace:s,state:l,relative:f,preventScrollReset:h,viewTransition:p})},...g,"data-discover":y||"render"!==r?void 0:"true"})});function hn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function pn(e){let n=t.useContext(Ye);return fe(n,hn(e)),n}fn.displayName="Form";var gn=0,mn=()=>`__${String(++gn)}__`;function vn(){let{router:e}=pn("useSubmit"),{basename:n}=t.useContext(et),r=yt("useRouteId");return t.useCallback(async function(t){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:a,encType:s,formData:l,body:u}=$t(t,n);if(!1===o.navigate){let t=o.fetcherKey||mn();await e.fetch(t,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,flushSync:o.flushSync})}else await e.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:u,formMethod:o.method||a,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})},[e,n,r])}var bn=function(){return bn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},bn.apply(this,arguments)};Object.create;function yn(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var xn=n(324),wn=n.n(xn),Sn="-ms-",kn="-moz-",En="-webkit-",Cn="comm",On="rule",jn="decl",Tn="@keyframes",Pn=Math.abs,Dn=String.fromCharCode,Nn=Object.assign;function Rn(e){return e.trim()}function Ln(e,t){return(e=t.exec(e))?e[0]:e}function _n(e,t,n){return e.replace(t,n)}function $n(e,t,n){return e.indexOf(t,n)}function zn(e,t){return 0|e.charCodeAt(t)}function In(e,t,n){return e.slice(t,n)}function An(e){return e.length}function Fn(e){return e.length}function Mn(e,t){return t.push(e),e}function Hn(e,t){return e.filter(function(e){return!Ln(e,t)})}var Bn=1,Un=1,Vn=0,Wn=0,qn=0,Kn="";function Yn(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Bn,column:Un,length:a,return:"",siblings:s}}function Qn(e,t){return Nn(Yn("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Gn(e){for(;e.root;)e=Qn(e.root,{children:[e]});Mn(e,e.siblings)}function Xn(){return qn=Wn>0?zn(Kn,--Wn):0,Un--,10===qn&&(Un=1,Bn--),qn}function Jn(){return qn=Wn<Vn?zn(Kn,Wn++):0,Un++,10===qn&&(Un=1,Bn++),qn}function Zn(){return zn(Kn,Wn)}function er(){return Wn}function tr(e,t){return In(Kn,e,t)}function nr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function rr(e){return Bn=Un=1,Vn=An(Kn=e),Wn=0,[]}function or(e){return Kn="",e}function ir(e){return Rn(tr(Wn-1,lr(91===e?e+2:40===e?e+1:e)))}function ar(e){for(;(qn=Zn())&&qn<33;)Jn();return nr(e)>2||nr(qn)>3?"":" "}function sr(e,t){for(;--t&&Jn()&&!(qn<48||qn>102||qn>57&&qn<65||qn>70&&qn<97););return tr(e,er()+(t<6&&32==Zn()&&32==Jn()))}function lr(e){for(;Jn();)switch(qn){case e:return Wn;case 34:case 39:34!==e&&39!==e&&lr(qn);break;case 40:41===e&&lr(e);break;case 92:Jn()}return Wn}function ur(e,t){for(;Jn()&&e+qn!==57&&(e+qn!==84||47!==Zn()););return"/*"+tr(t,Wn-1)+"*"+Dn(47===e?e:Jn())}function cr(e){for(;!nr(Zn());)Jn();return tr(e,Wn)}function dr(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function fr(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case jn:return e.return=e.return||e.value;case Cn:return"";case Tn:return e.return=e.value+"{"+dr(e.children,r)+"}";case On:if(!An(e.value=e.props.join(",")))return""}return An(n=dr(e.children,r))?e.return=e.value+"{"+n+"}":""}function hr(e,t,n){switch(function(e,t){return 45^zn(e,0)?(((t<<2^zn(e,0))<<2^zn(e,1))<<2^zn(e,2))<<2^zn(e,3):0}(e,t)){case 5103:return En+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return En+e+e;case 4789:return kn+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return En+e+kn+e+Sn+e+e;case 5936:switch(zn(e,t+11)){case 114:return En+e+Sn+_n(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return En+e+Sn+_n(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return En+e+Sn+_n(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return En+e+Sn+e+e;case 6165:return En+e+Sn+"flex-"+e+e;case 5187:return En+e+_n(e,/(\w+).+(:[^]+)/,En+"box-$1$2"+Sn+"flex-$1$2")+e;case 5443:return En+e+Sn+"flex-item-"+_n(e,/flex-|-self/g,"")+(Ln(e,/flex-|baseline/)?"":Sn+"grid-row-"+_n(e,/flex-|-self/g,""))+e;case 4675:return En+e+Sn+"flex-line-pack"+_n(e,/align-content|flex-|-self/g,"")+e;case 5548:return En+e+Sn+_n(e,"shrink","negative")+e;case 5292:return En+e+Sn+_n(e,"basis","preferred-size")+e;case 6060:return En+"box-"+_n(e,"-grow","")+En+e+Sn+_n(e,"grow","positive")+e;case 4554:return En+_n(e,/([^-])(transform)/g,"$1"+En+"$2")+e;case 6187:return _n(_n(_n(e,/(zoom-|grab)/,En+"$1"),/(image-set)/,En+"$1"),e,"")+e;case 5495:case 3959:return _n(e,/(image-set\([^]*)/,En+"$1$`$1");case 4968:return _n(_n(e,/(.+:)(flex-)?(.*)/,En+"box-pack:$3"+Sn+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+En+e+e;case 4200:if(!Ln(e,/flex-|baseline/))return Sn+"grid-column-align"+In(e,t)+e;break;case 2592:case 3360:return Sn+_n(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Ln(e.props,/grid-\w+-end/)})?~$n(e+(n=n[t].value),"span",0)?e:Sn+_n(e,"-start","")+e+Sn+"grid-row-span:"+(~$n(n,"span",0)?Ln(n,/\d+/):+Ln(n,/\d+/)-+Ln(e,/\d+/))+";":Sn+_n(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(e){return Ln(e.props,/grid-\w+-start/)})?e:Sn+_n(_n(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return _n(e,/(.+)-inline(.+)/,En+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(An(e)-1-t>6)switch(zn(e,t+1)){case 109:if(45!==zn(e,t+4))break;case 102:return _n(e,/(.+:)(.+)-([^]+)/,"$1"+En+"$2-$3$1"+kn+(108==zn(e,t+3)?"$3":"$2-$3"))+e;case 115:return~$n(e,"stretch",0)?hr(_n(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return _n(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,o,i,a,s){return Sn+n+":"+r+s+(o?Sn+n+"-span:"+(i?a:+a-+r)+s:"")+e});case 4949:if(121===zn(e,t+6))return _n(e,":",":"+En)+e;break;case 6444:switch(zn(e,45===zn(e,14)?18:11)){case 120:return _n(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+En+(45===zn(e,14)?"inline-":"")+"box$3$1"+En+"$2$3$1"+Sn+"$2box$3")+e;case 100:return _n(e,":",":"+Sn)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return _n(e,"scroll-","scroll-snap-")+e}return e}function pr(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case jn:return void(e.return=hr(e.value,e.length,n));case Tn:return dr([Qn(e,{value:_n(e.value,"@","@"+En)})],r);case On:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,function(t){switch(Ln(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gn(Qn(e,{props:[_n(t,/:(read-\w+)/,":-moz-$1")]})),Gn(Qn(e,{props:[t]})),Nn(e,{props:Hn(n,r)});break;case"::placeholder":Gn(Qn(e,{props:[_n(t,/:(plac\w+)/,":"+En+"input-$1")]})),Gn(Qn(e,{props:[_n(t,/:(plac\w+)/,":-moz-$1")]})),Gn(Qn(e,{props:[_n(t,/:(plac\w+)/,Sn+"input-$1")]})),Gn(Qn(e,{props:[t]})),Nn(e,{props:Hn(n,r)})}return""})}}function gr(e){return or(mr("",null,null,null,[""],e=rr(e),0,[0],e))}function mr(e,t,n,r,o,i,a,s,l){for(var u=0,c=0,d=a,f=0,h=0,p=0,g=1,m=1,v=1,b=0,y="",x=o,w=i,S=r,k=y;m;)switch(p=b,b=Jn()){case 40:if(108!=p&&58==zn(k,d-1)){-1!=$n(k+=_n(ir(b),"&","&\f"),"&\f",Pn(u?s[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=ir(b);break;case 9:case 10:case 13:case 32:k+=ar(p);break;case 92:k+=sr(er()-1,7);continue;case 47:switch(Zn()){case 42:case 47:Mn(br(ur(Jn(),er()),t,n,l),l);break;default:k+="/"}break;case 123*g:s[u++]=An(k)*v;case 125*g:case 59:case 0:switch(b){case 0:case 125:m=0;case 59+c:-1==v&&(k=_n(k,/\f/g,"")),h>0&&An(k)-d&&Mn(h>32?yr(k+";",r,n,d-1,l):yr(_n(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(Mn(S=vr(k,t,n,u,c,o,s,y,x=[],w=[],d,i),i),123===b)if(0===c)mr(k,t,S,S,x,i,d,s,w);else switch(99===f&&110===zn(k,3)?100:f){case 100:case 108:case 109:case 115:mr(e,S,S,r&&Mn(vr(e,S,S,0,0,o,s,y,o,x=[],d,w),w),o,w,d,s,r?x:w);break;default:mr(k,S,S,S,[""],w,0,s,w)}}u=c=h=0,g=v=1,y=k="",d=a;break;case 58:d=1+An(k),h=p;default:if(g<1)if(123==b)--g;else if(125==b&&0==g++&&125==Xn())continue;switch(k+=Dn(b),b*g){case 38:v=c>0?1:(k+="\f",-1);break;case 44:s[u++]=(An(k)-1)*v,v=1;break;case 64:45===Zn()&&(k+=ir(Jn())),f=Zn(),c=d=An(y=k+=cr(er())),b++;break;case 45:45===p&&2==An(k)&&(g=0)}}return i}function vr(e,t,n,r,o,i,a,s,l,u,c,d){for(var f=o-1,h=0===o?i:[""],p=Fn(h),g=0,m=0,v=0;g<r;++g)for(var b=0,y=In(e,f+1,f=Pn(m=a[g])),x=e;b<p;++b)(x=Rn(m>0?h[b]+" "+y:_n(y,/&\f/g,h[b])))&&(l[v++]=x);return Yn(e,t,n,0===o?On:s,l,u,c,d)}function br(e,t,n,r){return Yn(e,t,n,Cn,Dn(qn),In(e,2,-2),0,r)}function yr(e,t,n,r,o){return Yn(e,t,n,jn,In(e,0,r),In(e,r+1,-1),r,o)}var xr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},wr="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Sr="active",kr="data-styled-version",Er="6.1.19",Cr="/*!sc*/\n",Or="undefined"!=typeof window&&"undefined"!=typeof document,jr=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"/room-craft",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Tr={},Pr=(new Set,Object.freeze([])),Dr=Object.freeze({});function Nr(e,t,n){return void 0===n&&(n=Dr),e.theme!==n.theme&&e.theme||t||n.theme}var Rr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Lr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,_r=/(^-|-$)/g;function $r(e){return e.replace(Lr,"-").replace(_r,"")}var zr=/(a)(d)/gi,Ir=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ar(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Ir(t%52)+n;return(Ir(t%52)+n).replace(zr,"$1-$2")}var Fr,Mr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Hr=function(e){return Mr(5381,e)};function Br(e){return Ar(Hr(e)>>>0)}function Ur(e){return e.displayName||e.name||"Component"}function Vr(e){return"string"==typeof e&&!0}var Wr="function"==typeof Symbol&&Symbol.for,qr=Wr?Symbol.for("react.memo"):60115,Kr=Wr?Symbol.for("react.forward_ref"):60112,Yr={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Qr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Gr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xr=((Fr={})[Kr]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Fr[qr]=Gr,Fr);function Jr(e){return("type"in(t=e)&&t.type.$$typeof)===qr?Gr:"$$typeof"in e?Xr[e.$$typeof]:Yr;var t}var Zr=Object.defineProperty,eo=Object.getOwnPropertyNames,to=Object.getOwnPropertySymbols,no=Object.getOwnPropertyDescriptor,ro=Object.getPrototypeOf,oo=Object.prototype;function io(e,t,n){if("string"!=typeof t){if(oo){var r=ro(t);r&&r!==oo&&io(e,r,n)}var o=eo(t);to&&(o=o.concat(to(t)));for(var i=Jr(e),a=Jr(t),s=0;s<o.length;++s){var l=o[s];if(!(l in Qr||n&&n[l]||a&&l in a||i&&l in i)){var u=no(t,l);try{Zr(e,l,u)}catch(e){}}}}return e}function ao(e){return"function"==typeof e}function so(e){return"object"==typeof e&&"styledComponentId"in e}function lo(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function uo(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function co(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function fo(e,t,n){if(void 0===n&&(n=!1),!n&&!co(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=fo(e[r],t[r]);else if(co(t))for(var r in t)e[r]=fo(e[r],t[r]);return e}function ho(e,t){Object.defineProperty(e,"toString",{value:t})}function po(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var go=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw po(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(Cr);return t},e}(),mo=new Map,vo=new Map,bo=1,yo=function(e){if(mo.has(e))return mo.get(e);for(;vo.has(bo);)bo++;var t=bo++;return mo.set(e,t),vo.set(t,e),t},xo=function(e,t){bo=t+1,mo.set(e,t),vo.set(t,e)},wo="style[".concat(wr,"][").concat(kr,'="').concat(Er,'"]'),So=new RegExp("^".concat(wr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ko=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},Eo=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Cr),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(So);if(l){var u=0|parseInt(l[1],10),c=l[2];0!==u&&(xo(c,u),ko(e,c,l[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}},Co=function(e){for(var t=document.querySelectorAll(wo),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(wr)!==Sr&&(Eo(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Oo(){return n.nc}var jo=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(wr,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(wr,Sr),r.setAttribute(kr,Er);var a=Oo();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},To=function(){function e(e){this.element=jo(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw po(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),Po=function(){function e(e){this.element=jo(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),Do=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),No=Or,Ro={isServer:!Or,useCSSOMInjection:!jr},Lo=function(){function e(e,t,n){void 0===e&&(e=Dr),void 0===t&&(t={});var r=this;this.options=bn(bn({},Ro),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Or&&No&&(No=!1,Co(this)),ho(this,function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return vo.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var s="".concat(wr,".g").concat(n,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach(function(e){e.length>0&&(l+="".concat(e,","))}),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(Cr)},i=0;i<n;i++)o(i);return r}(r)})}return e.registerId=function(e){return yo(e)},e.prototype.rehydrate=function(){!this.server&&Or&&Co(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(bn(bn({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new Do(n):t?new To(n):new Po(n)}(this.options),new go(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(yo(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(yo(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(yo(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),_o=/&/g,$o=/^\s*\/\/.*$/gm;function zo(e,t){return e.map(function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map(function(e){return"".concat(t," ").concat(e)})),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=zo(e.children,t)),e})}function Io(e){var t,n,r,o=void 0===e?Dr:e,i=o.options,a=void 0===i?Dr:i,s=o.plugins,l=void 0===s?Pr:s,u=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},c=l.slice();c.push(function(e){e.type===On&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(_o,n).replace(r,u))}),a.prefix&&c.push(pr),c.push(fr);var d=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace($o,""),u=gr(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(u=zo(u,a.namespace));var d,f=[];return dr(u,function(e){var t=Fn(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}(c.concat((d=function(e){return f.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),f};return d.hash=l.length?l.reduce(function(e,t){return t.name||po(15),Mr(e,t.name)},5381).toString():"",d}var Ao=new Lo,Fo=Io(),Mo=t.createContext({shouldForwardProp:void 0,styleSheet:Ao,stylis:Fo}),Ho=(Mo.Consumer,t.createContext(void 0));function Bo(){return(0,t.useContext)(Mo)}function Uo(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],o=n[1],i=Bo().styleSheet,a=(0,t.useMemo)(function(){var t=i;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t},[e.disableCSSOMInjection,e.sheet,e.target,i]),s=(0,t.useMemo)(function(){return Io({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})},[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)(function(){wn()(r,e.stylisPlugins)||o(e.stylisPlugins)},[e.stylisPlugins]);var l=(0,t.useMemo)(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:a,stylis:s}},[e.shouldForwardProp,a,s]);return t.createElement(Mo.Provider,{value:l},t.createElement(Ho.Provider,{value:s},e.children))}var Vo=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Fo);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,ho(this,function(){throw po(12,String(n.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=Fo),this.name+e.hash},e}(),Wo=function(e){return e>="A"&&e<="Z"};function qo(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;Wo(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ko=function(e){return null==e||!1===e||""===e},Yo=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Ko(i)&&(Array.isArray(i)&&i.isCss||ao(i)?r.push("".concat(qo(o),":"),i,";"):co(i)?r.push.apply(r,yn(yn(["".concat(o," {")],Yo(i),!1),["}"],!1)):r.push("".concat(qo(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in xr||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Qo(e,t,n,r){return Ko(e)?[]:so(e)?[".".concat(e.styledComponentId)]:ao(e)?!ao(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Qo(e(t),t,n,r):e instanceof Vo?n?(e.inject(n,r),[e.getName(r)]):[e]:co(e)?Yo(e):Array.isArray(e)?Array.prototype.concat.apply(Pr,e.map(function(e){return Qo(e,t,n,r)})):[e.toString()];var o}function Go(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ao(n)&&!so(n))return!1}return!0}var Xo=Hr(Er),Jo=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&Go(e),this.componentId=t,this.baseHash=Mr(Xo,t),this.baseStyle=n,Lo.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=lo(r,this.staticRulesId);else{var o=uo(Qo(this.rules,e,t,n)),i=Ar(Mr(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=lo(r,i),this.staticRulesId=i}else{for(var s=Mr(this.baseHash,n.hash),l="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)l+=c;else if(c){var d=uo(Qo(c,e,t,n));s=Mr(s,d+u),l+=d}}if(l){var f=Ar(s>>>0);t.hasNameForId(this.componentId,f)||t.insertRules(this.componentId,f,n(l,".".concat(f),void 0,this.componentId)),r=lo(r,f)}}return r},e}(),Zo=t.createContext(void 0);Zo.Consumer;var ei={};new Set;function ti(e,n,r){var o=so(e),i=e,a=!Vr(e),s=n.attrs,l=void 0===s?Pr:s,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":$r(e);ei[n]=(ei[n]||0)+1;var r="".concat(n,"-").concat(Br(Er+n+ei[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,f=void 0===d?function(e){return Vr(e)?"styled.".concat(e):"Styled(".concat(Ur(e),")")}(e):d,h=n.displayName&&n.componentId?"".concat($r(n.displayName),"-").concat(n.componentId):n.componentId||c,p=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,g=n.shouldForwardProp;if(o&&i.shouldForwardProp){var m=i.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;g=function(e,t){return m(e,t)&&v(e,t)}}else g=m}var b=new Jo(r,h,o?i.componentStyle:void 0);function y(e,n){return function(e,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,s=e.foldedComponentIds,l=e.styledComponentId,u=e.target,c=t.useContext(Zo),d=Bo(),f=e.shouldForwardProp||d.shouldForwardProp,h=Nr(n,c,a)||Dr,p=function(e,t,n){for(var r,o=bn(bn({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=ao(r=e[i])?r(o):r;for(var s in a)o[s]="className"===s?lo(o[s],a[s]):"style"===s?bn(bn({},o[s]),a[s]):a[s]}return t.className&&(o.className=lo(o.className,t.className)),o}(o,n,h),g=p.as||u,m={};for(var v in p)void 0===p[v]||"$"===v[0]||"as"===v||"theme"===v&&p.theme===h||("forwardedAs"===v?m.as=p.forwardedAs:f&&!f(v,g)||(m[v]=p[v]));var b=function(e,t){var n=Bo();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,p),y=lo(s,l);return b&&(y+=" "+b),p.className&&(y+=" "+p.className),m[Vr(g)&&!Rr.has(g)?"class":"className"]=y,r&&(m.ref=r),(0,t.createElement)(g,m)}(x,e,n)}y.displayName=f;var x=t.forwardRef(y);return x.attrs=p,x.componentStyle=b,x.displayName=f,x.shouldForwardProp=g,x.foldedComponentIds=o?lo(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=h,x.target=o?i.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)fo(e,o[r],!0);return e}({},i.defaultProps,e):e}}),ho(x,function(){return".".concat(x.styledComponentId)}),a&&io(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function ni(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var ri=function(e){return Object.assign(e,{isCss:!0})};function oi(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ao(e)||co(e))return ri(Qo(ni(Pr,yn([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Qo(r):ri(Qo(ni(r,t)))}function ii(e,t,n){if(void 0===n&&(n=Dr),!t)throw po(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,oi.apply(void 0,yn([r],o,!1)))};return r.attrs=function(r){return ii(e,t,bn(bn({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return ii(e,t,bn(bn({},n),r))},r}var ai=function(e){return ii(ti,e)},si=ai;Rr.forEach(function(e){si[e]=ai(e)});var li=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=Go(e),Lo.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(uo(Qo(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Lo.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Oo(),r=uo([n&&'nonce="'.concat(n,'"'),"".concat(wr,'="true"'),"".concat(kr,'="').concat(Er,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw po(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw po(2);var r=e.instance.toString();if(!r)return[];var o=((n={})[wr]="",n[kr]=Er,n.dangerouslySetInnerHTML={__html:r},n),i=Oo();return i&&(o.nonce=i),[t.createElement("style",bn({},o,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Lo({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw po(2);return t.createElement(Uo,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw po(3)}})(),"__sc-".concat(wr,"__");const ui=si.header`
  padding: 15px 0;

  display: flex;
  align-items: center;
`,ci=si.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`,di=si.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    gap: 100px;
  }

  @media screen and (min-width: 1200px) {
    justify-content: space-around;
    gap: 200px;
  }
`,fi=si(cn)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  & img {
    width: 24px;
    height: 24px;
  }

  & span {
    font-size: 26px;
    font-weight: 700;
    color: #000;
  }
`,hi=si.nav`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 35px;
  }

  & * {
    color: #000;
    font-size: 18px;
    font-weight: 500;

    transition: color 250ms ease;

    &:hover,
    &:focus {
      color: #4db6ac;
    }
  }
`,pi=si.button`
  width: 32px;
  height: 32px;

  background: transparent;

  @media screen and (min-width: 768px) {
    display: none;
  }

  & * {
    width: 100%;
    height: 100%;
  }
`,gi=si.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;

  padding: 100px 0 0 0;

  background-color: #fff;

  @media screen and (min-width: 768px) {
    display: none;
  }
`,mi=si.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  & * {
    color: #000;
    font-size: 22px;
    font-weight: 500;

    transition: color 250ms ease;

    &:hover,
    &:focus {
      color: #4db6ac;
    }
  }
`,vi=si.button`
  position: absolute;
  top: 20px;
  right: 20px;

  width: 32px;
  height: 32px;

  background: transparent;

  & * {
    width: 100%;
    height: 100%;
  }
`,bi=si.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
  max-width: 440px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;var yi=n(579);const xi=e=>{let{children:t}=e;return(0,yi.jsx)(bi,{children:t})};var wi={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Si=t.createContext&&t.createContext(wi),ki=["attr","size","title"];function Ei(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function Ci(){return Ci=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ci.apply(this,arguments)}function Oi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function ji(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oi(Object(n),!0).forEach(function(t){Ti(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oi(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Ti(e,t,n){return t=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Pi(e){return e&&e.map((e,n)=>t.createElement(e.tag,ji({key:n},e.attr),Pi(e.child)))}function Di(e){return n=>t.createElement(Ni,Ci({attr:ji({},e.attr)},n),Pi(e.child))}function Ni(e){var n=n=>{var r,{attr:o,size:i,title:a}=e,s=Ei(e,ki),l=i||n.size||"1em";return n.className&&(r=n.className),e.className&&(r=(r?r+" ":"")+e.className),t.createElement("svg",Ci({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,o,s,{className:r,style:ji(ji({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&t.createElement("title",null,a),e.children)};return void 0!==Si?t.createElement(Si.Consumer,null,e=>n(e)):n(wi)}function Ri(e){return Di({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"m289.94 256 95-95A24 24 0 0 0 351 127l-95 95-95-95a24 24 0 0 0-34 34l95 95-95 95a24 24 0 1 0 34 34l95-95 95 95a24 24 0 0 0 34-34z"},child:[]}]})(e)}function Li(e){return Di({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M239.802 74.44v.19h12.275v29.433h.004v31.265c-3.326-.562-6.698-.92-10.095-1.084-26.8-1.293-55.033 8.738-73.23 13.36l-7.545 1.92.582 5.564c-.46-.176-.917-.356-1.387-.525l-.705-.256-.74-.135c-4.097-.747-8.27-1.193-12.48-1.39-29.477-1.372-60.834 9.463-81.174 14.523l-7.612 1.892.836 7.8c.605 5.644 1.218 11.59 2.774 17.493-10.642 13.072-10.078 18.35-8.417 27.184l211.14 73.916v74.053C184.03 336.45 106.252 295.828 25.582 264.49v-170h18v.125h12.374v34.77l165.848-21.414V74.44zm-2.088 77.845c1.203-.013 2.39 0 3.564.04 2.818.095 5.505.396 8.09.84 13.548 5.197 20.296 12.637 24.25 21.462-23.255 9.644-44.174 13.507-62.515 15.736-5.277-1.15-9.503-2.466-12.944-3.894-3.802-7.298-9.183-14.244-16.522-20.16-.21-1.08-.405-2.186-.584-3.33 17.414-4.63 38.614-10.504 56.66-10.695zm-94.35 18.528c1.38-.014 2.743 0 4.09.046 3.218.11 6.296.446 9.26.95 15.757 5.89 23.546 14.435 28.002 24.526-26.44 10.85-50.22 15.162-70.965 17.62-17.42-3.692-25.116-8.99-29.17-14.665-3.072-4.302-4.524-9.753-5.53-16.518 19.495-5.077 43.62-11.753 64.314-11.96zM291.8 186.295l26.406 7.453c-59.194 10.41-125.095 28.732-165.18 45.766l-27.443-9.17c21.235-3.146 45.785-8.753 72.568-20.846l5.29-2.39c1.72.44 3.5.853 5.35 1.232l1.42.29 1.44-.17c21.562-2.54 47.905-7.294 77.15-20.782zm68.797 19.418l51.336 14.49-147.905 38.377v17.6l-82.517-27.147-1.77-.59c49.176-17.717 124.438-36.303 180.857-42.73zm127.79 13.68v90.57L283.69 372.127v-99.62zM23.613 282.45L60.837 299v14.674L39.98 322.13l-16.366-10.57zm463.26 49.243v34.995l-21.91 9.515-16.367-7.4v-25.487zm-234.453 52.49l11.608 5.16 9.442 4.196 19.342-6.87v40.848l-22.704 10.043-17.687-12.685z"},child:[]}]})(e)}function _i(e){return Di({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"},child:[]}]})(e)}function $i(e){return Di({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M64 48c-8.726 0-16 7.274-16 16v384c0 8.726 7.274 16 16 16h215v-16H64V64h63.375v97.53c0 3.924 3.443 7.095 7.72 7.095h169.81c4.277 0 7.72-3.17 7.72-7.094V64h69.22c.428.318.8.548 1.467 1.094 2.05 1.675 4.962 4.264 8.375 7.406 6.827 6.283 15.65 14.837 24.313 23.5 8.663 8.663 17.217 17.486 23.5 24.313 3.142 3.413 5.73 6.324 7.406 8.374.546.668.776 1.04 1.094 1.47V330.25l16 16V128c0-2.68-.657-3.402-1.03-4.156-.375-.754-.725-1.294-1.095-1.844-.74-1.1-1.575-2.19-2.594-3.438-2.036-2.492-4.768-5.55-8.03-9.093-6.524-7.09-15.155-16-23.938-24.782-8.782-8.783-17.692-17.414-24.78-23.938-3.545-3.262-6.6-5.994-9.094-8.03-1.247-1.02-2.337-1.855-3.438-2.595-.55-.37-1.09-.72-1.844-1.094-.754-.373-1.477-1.03-4.156-1.03H64zm87.72 16h48.56c4.277 0 7.72 4.425 7.72 9.938v70.124c0 5.513-3.443 9.938-7.72 9.938h-48.56c-4.277 0-7.72-4.425-7.72-9.938V73.938c0-5.512 3.443-9.937 7.72-9.937zM114 212c-4.432 0-8 3.568-8 8v184c0 4.432 3.568 8 8 8h165v-28h-76.72l15.345-15.375 128-128L352 234.28l6.375 6.345L406 288.25V220c0-4.432-3.568-8-8-8H114zm238 47.75L245.75 366H297v128h110V366h51.25L352 259.75zM448 384v64h-23v16h23c8.726 0 16-7.274 16-16v-64h-16z"},child:[]}]})(e)}function zi(e){return Di({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M160 32c-16 0-32 16-32 32v384c0 16 16 32 32 32h192c16 0 32-16 32-32V64c0-16-16-32-32-32H160zm21.68 23h96v18h-96V55zM304 55h32v18h-32V55zM154 96h204v320H154V96zm70 342h63.984c16 0 16 16 16 16v6H208v-6s0-16 16-16z"},child:[]}]})(e)}function Ii(e){return Di({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M112 73c-13.75 0-24.214 4.87-33.047 13.271-8.832 8.402-15.755 20.6-20.414 34.575-5.887 17.661-7.953 38.064-6.887 56.111a57.246 57.246 0 0 1 2.461-.187c8.38-.405 16.317 1.094 23.494 4.234 14.355 6.28 25.436 18.27 34.057 32.28 15.104 24.543 23.187 55.746 24.96 80.585 114.097-14.223 124.655-14.223 238.753 0 1.772-24.84 9.855-56.042 24.959-80.586 8.62-14.009 19.702-25.999 34.057-32.28 7.875-3.444 16.67-4.898 25.955-4.046 1.066-18.047-1-38.45-6.887-56.111-4.659-13.976-11.582-26.173-20.414-34.575C424.214 77.87 413.75 73 400 73zM56.969 194.502c-.686-.008-1.38.006-2.082.04-5.621.284-11.8 1.978-18.862 5.509-23.413 11.707-26.349 65.687 14.82 79.41l4.505 1.502L86.79 391h338.42l31.44-110.037 4.504-1.502c41.17-13.723 38.234-67.703 14.82-79.41-14.121-7.061-24.722-6.775-34.367-2.555-9.645 4.22-18.564 13.23-25.943 25.22C400.906 246.7 393 282 393 304v10.195l-10.117-1.265c-128-16-125.766-16-253.766 0L119 314.195V304c0-22-7.906-57.3-22.664-81.283-7.38-11.991-16.298-21.001-25.943-25.22-4.22-1.847-8.624-2.94-13.424-2.995zM83.727 409l-23.272 23.271c11.994 3.239 33.75 3.763 42.545-1.666 3.272-4.695 6.903-14.536 10.438-21.605zm314.836 0c1.494 6.017 6.952 19.12 10.437 21.605 13.2 5.463 29.904 5.774 42.545 1.666L428.273 409z"},child:[]}]})(e)}function Ai(e){return Di({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 25C128.3 25 25 128.3 25 256s103.3 231 231 231 231-103.3 231-231S383.7 25 256 25zm0 30c110.9 0 201 90.1 201 201s-90.1 201-201 201S55 366.9 55 256 145.1 55 256 55zM80.52 203.9c-4.71 19.2-7.52 37-7.52 54 144.7 30.3 121.5 62.4 148 177.8 11.4 2.1 23 3.3 35 3.3s23.6-1.2 35-3.3c26.5-115.4 3.3-147.5 148-177.8-.6-18.9-3-38.4-7.5-54C346.7 182.7 301.1 172 256 172c-45.1 0-90.7 10.7-175.48 31.9zM256 183c40.2 0 73 32.8 73 73s-32.8 73-73 73-73-32.8-73-73 32.8-73 73-73zm0 18c-30.5 0-55 24.5-55 55s24.5 55 55 55 55-24.5 55-55-24.5-55-55-55z"},child:[]}]})(e)}function Fi(e){return Di({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 27.12c-44.3 0-88.4 3.36-119 9.99v63.79h238V37.11c-30.6-6.63-74.7-9.99-119-9.99zm-91.6 91.78l15.8 132c5.8-.3 11.8-.6 18-.9l-15.7-131.1zm82.5 0l-1.6 130h18l1.6-130zm82.6 0L313.8 250c6.2.3 12.2.6 18 .9l15.8-132zm-73.5 148c-31.8 0-63.6 1-89.3 3-12.8 1-24.1 2.2-33 3.6-5.4.9-9.5 1.9-12.7 2.8v32.6h270v-32.6c-3.2-.9-7.3-1.9-12.7-2.8-8.9-1.4-20.2-2.6-33-3.6-25.7-2-57.5-3-89.3-3zm-103 60v158h30v-158zm176 0v158h30v-158zm-128 64v16h110v-16z"},child:[]}]})(e)}const Mi=n.p+"static/media/logo.7fa9d52d19d93eeac082.webp";function Hi(e){return Di({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"6 9 12 15 18 9"},child:[]}]})(e)}const Bi=si.div`
  position: relative;
  display: inline-block;
  z-index: 998;

  margin-top: 15px;

  @media screen and (min-width: 768px) {
    display: block;
    margin-top: 0;
  }
`,Ui=si.button`
  background-color: white;
  color: black;
  font-size: 1rem;
  border: none;
  border-radius: 12px;
  padding: 6px 12px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background-color: #f0f0f0;
  }

  svg {
    font-size: 1rem;
  }
`,Vi=si.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,Wi=si.ul`
  position: absolute;
  top: 100%;
  left: 0;
  min-width: 100px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  list-style: none;
  padding: 6px 0;
  margin: 4px 0 0 0;
  overflow: hidden;
  opacity: ${e=>{let{open:t}=e;return t?1:0}};
  transform: ${e=>{let{open:t}=e;return t?"translateY(0)":"translateY(-5px)"}};
  pointer-events: ${e=>{let{open:t}=e;return t?"auto":"none"}};
  transition: opacity 0.25s ease, transform 0.25s ease;
`,qi=si.li`
  padding: 10px 16px;
  cursor: pointer;
  color: black;
  transition: background 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`,Ki=()=>{const{t:e,i18n:n}=se(),[r,o]=(0,t.useState)(!1),i=e=>{n.changeLanguage(e),o(!1)};return(0,yi.jsxs)(Bi,{children:[(0,yi.jsx)(Ui,{onClick:()=>o(!r),children:(0,yi.jsxs)(Vi,{children:[e("header.language")," ",(0,yi.jsx)(Hi,{})]})}),(0,yi.jsxs)(Wi,{open:r,children:[(0,yi.jsx)(qi,{onClick:()=>i("ua"),children:"UA"}),(0,yi.jsx)(qi,{onClick:()=>i("en"),children:"EN"})]})]})},Yi=()=>{const[e,n]=(0,t.useState)(!1),{t:r}=se(),o=()=>{n(!e),document.body.classList.toggle("no-scroll")};return(0,yi.jsx)(ui,{children:(0,yi.jsx)(xi,{children:(0,yi.jsxs)(ci,{children:[(0,yi.jsxs)(di,{children:[(0,yi.jsxs)(fi,{to:"/",children:[(0,yi.jsx)("img",{src:Mi,alt:"Logo"}),(0,yi.jsx)("span",{children:"RoomCraft"})]}),(0,yi.jsxs)(hi,{children:[(0,yi.jsx)(cn,{to:"/",children:r("header.page1")}),(0,yi.jsx)(cn,{to:"/build",children:r("header.page2")})]}),(0,yi.jsx)(pi,{onClick:o,children:(0,yi.jsx)(_i,{})}),(0,yi.jsxs)(gi,{style:{display:e?"block":"none"},children:[(0,yi.jsx)(vi,{onClick:o,children:(0,yi.jsx)(Ri,{})}),(0,yi.jsxs)(mi,{children:[(0,yi.jsx)(cn,{onClick:o,to:"/",children:r("header.page1")}),(0,yi.jsx)(cn,{onClick:o,to:"/build",children:r("header.page2")})]})]})]}),(0,yi.jsx)(Ki,{})]})})})},Qi=si.footer`
  background-color: #212121;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  color: #cccccc;
  font-size: 15px;
  box-shadow: inset 0 4px 8px rgba(255, 255, 255, 0.05);
`,Gi=si.nav`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  justify-content: center;
`,Xi=si.a`
  color: #4db6ac;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 17px;
  position: relative;
  transition: color 0.3s ease;

  &:hover {
    color: #64b5f6;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #64b5f6;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`,Ji=(function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=uo(oi.apply(void 0,yn([e],t,!1))),o=Br(r);return new Vo(o,r)})`
  0% {
    transform: scale(1) rotate(0deg);
  }
  50% {
    transform: scale(1.1) rotate(10deg);
  }
  100% {
    transform: scale(1) rotate(0deg);
  }
`,Zi=si.a`
  color: #4db6ac;
  font-size: 32px;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #64b5f6;
    animation: ${Ji} 0.6s ease forwards;
  }
`,ea=si.div`
  color: #888888;
  font-style: italic;
  font-size: 14px;
  letter-spacing: 0.05em;
`;function ta(e){return Di({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function na(e){return Di({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M112 128c0-29.5 16.2-55 40-68.9V256h48V48h48v208h48V59.1c23.8 13.9 40 39.4 40 68.9v128h48V128C384 57.3 326.7 0 256 0h-64C121.3 0 64 57.3 64 128v128h48zm334.3 213.9l-10.7-32c-4.4-13.1-16.6-21.9-30.4-21.9H42.7c-13.8 0-26 8.8-30.4 21.9l-10.7 32C-5.2 362.6 10.2 384 32 384v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384h256v112c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V384c21.8 0 37.2-21.4 30.3-42.1z"},child:[]}]})(e)}function ra(e){return Di({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"},child:[]}]})(e)}function oa(e){return Di({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"},child:[]}]})(e)}function ia(e){return Di({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z"},child:[]}]})(e)}function aa(e){return Di({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M480.07 96H160a160 160 0 1 0 114.24 272h91.52A160 160 0 1 0 480.07 96zM248 268a12 12 0 0 1-12 12h-52v52a12 12 0 0 1-12 12h-24a12 12 0 0 1-12-12v-52H84a12 12 0 0 1-12-12v-24a12 12 0 0 1 12-12h52v-52a12 12 0 0 1 12-12h24a12 12 0 0 1 12 12v52h52a12 12 0 0 1 12 12zm216 76a40 40 0 1 1 40-40 40 40 0 0 1-40 40zm64-96a40 40 0 1 1 40-40 40 40 0 0 1-40 40z"},child:[]}]})(e)}function sa(e){return Di({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"},child:[]}]})(e)}function la(e){return Di({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"},child:[]}]})(e)}const ua=()=>{const{t:e}=se();return(0,yi.jsxs)(Qi,{children:[(0,yi.jsxs)(Gi,{children:[(0,yi.jsx)(Xi,{href:"#how-it-works",children:e("footer.anchor1")}),(0,yi.jsx)(Xi,{href:"#reviews",children:e("footer.anchor2")}),(0,yi.jsx)(Xi,{href:"#faq",children:e("footer.anchor3")})]}),(0,yi.jsx)(Zi,{href:"https://github.com/Pan-Artur/room-craft",target:"_blank",rel:"noopener noreferrer","aria-label":"GitHub \u0440\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0440\u0456\u0439",children:(0,yi.jsx)(ta,{})}),(0,yi.jsx)(ea,{children:e("footer.authors")})]})},ca=n.p+"static/media/hero.3221433fb06e494c0c58.webp",da=si.section`
  padding: 40px 0;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
`,fa=si.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`,ha=si.div`
  max-width: 500px;
`,pa=si.div`
  width: 100%;
  max-width: 320px;
  margin: 0 auto;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  img:hover {
    transform: scale(1.02);
  }

  @media (min-width: 768px) {
    max-width: 400px;
    margin-top: 0;
  }

  @media (min-width: 1200px) {
    max-width: 450px;
  }
`,ga=si.h1`
  font-size: 28px;
  color: #212529;
  margin-bottom: 16px;
  line-height: 1.2;

  @media (min-width: 576px) {
    font-size: 32px;
  }

  @media (min-width: 1200px) {
    font-size: 40px;
  }
`,ma=si.p`
  font-size: 16px;
  color: #495057;
  margin-bottom: 24px;
  line-height: 1.6;
`,va=si.ul`
  margin: 24px 0;
  padding: 0;
  list-style: none;
`,ba=si.li`
  margin-bottom: 12px;
  padding-left: 20px;
  position: relative;
  font-size: 15px;
  color: #495057;
  line-height: 22px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 7px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #4db6ac;
  }
`,ya=si.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 24px 0;

  @media (min-width: 576px) {
    flex-direction: row;
    gap: 32px;
  }
`,xa=si.div`
  span {
    font-size: 20px;
    font-weight: 700;
    color: #212529;
    display: block;
  }

  p {
    margin: 4px 0 0;
    font-size: 14px;
    color: #6c757d;
  }
`,wa=si.button`
  padding: 10px 24px;
  background: #4db6ac;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 300ms ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  position: relative;
  overflow: hidden;

  &::after {
    content: '→';
    margin-left: 8px;
    transition: transform 300ms ease;
  }

  &:hover {
    background: #3da89e;
    transform: translateY(-2px);
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }

  &:hover::after {
    transform: translateX(4px);
  }

  &:active {
    transform: translateY(0);
  }
`,Sa=()=>{const e=lt(),{t:t}=se();return(0,yi.jsx)(da,{children:(0,yi.jsx)(xi,{children:(0,yi.jsxs)(fa,{children:[(0,yi.jsxs)(ha,{children:[(0,yi.jsx)(ga,{children:t("hero.title")}),(0,yi.jsx)(ma,{children:t("hero.subtitle")}),(0,yi.jsxs)(va,{children:[(0,yi.jsxs)(ba,{children:["\ud83c\udfc6 ",t("hero.item1")]}),(0,yi.jsxs)(ba,{children:["\ud83c\udfa8 ",t("hero.item2")]}),(0,yi.jsxs)(ba,{children:["\ud83d\udca1 ",t("hero.item3")]})]}),(0,yi.jsxs)(ya,{children:[(0,yi.jsxs)(xa,{children:[(0,yi.jsx)("span",{children:"4.9/5"}),(0,yi.jsx)("p",{children:t("hero.text1")})]}),(0,yi.jsxs)(xa,{children:[(0,yi.jsx)("span",{children:"50+"}),(0,yi.jsx)("p",{children:t("hero.text2")})]})]}),(0,yi.jsx)(wa,{onClick:()=>e("/build"),children:t("hero.button")})]}),(0,yi.jsx)(pa,{children:(0,yi.jsx)("img",{src:ca,alt:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434 \u0434\u0438\u0437\u0430\u0439\u043d\u0443 \u043a\u0456\u043c\u043d\u0430\u0442\u0438"})})]})})})},ka=si.section`
  background-color: #f5f5f5;
  padding: 40px 0;
`,Ea=si.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (min-width: 1200px) {
    gap: 32px;
  }
`,Ca=si.div`
  background: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  width: 90%;
  max-width: 280px;
  padding: 20px;
  text-align: center;
  transition: transform 250ms ease, box-shadow 250ms ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1200px) {
    max-width: 300px;
  }
`,Oa=si.div`
  font-size: 40px;
  color: #64b5f6;
  margin-bottom: 12px;
  transition: color 250ms ease;

  ${Ca}:hover & {
    color: #4db6ac;
  }
`,ja=si.h3`
  font-size: 21px;
  margin-bottom: 8px;
  color: #333333;
`,Ta=si.p`
  font-size: 16px;
  color: #666666;
`,Pa=()=>{const{t:e}=se(),t=[{icon:(0,yi.jsx)(Ii,{}),title:e("features.title1"),description:e("features.description1")},{icon:(0,yi.jsx)(zi,{}),title:e("features.title2"),description:e("features.description2")},{icon:(0,yi.jsx)($i,{}),title:e("features.title3"),description:e("features.description3")}];return(0,yi.jsx)(ka,{children:(0,yi.jsx)(xi,{children:(0,yi.jsx)(Ea,{children:t.map((e,t)=>(0,yi.jsxs)(Ca,{children:[(0,yi.jsx)(Oa,{children:e.icon}),(0,yi.jsx)(ja,{children:e.title}),(0,yi.jsx)(Ta,{children:e.description})]},t))})})})},Da=si.section`
  padding: 40px 0;
  background-color: #ffffff;
`,Na=si.h2`
  font-size: 24px;
  color: #212529;
  text-align: center;
  margin-bottom: 32px;

  @media (min-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 1200px) {
    font-size: 32px;
  }
`,Ra=si.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`,La=si.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 250ms ease, box-shadow 250ms ease;

  aspect-ratio: 4 / 3;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 250ms ease;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

    img {
      transform: scale(1.03);
    }
  }
`,_a=si.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: rgba(0, 0, 0, 0.6);
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 14px;
`,$a=n.p+"static/media/scandinavian.8cbb213e32687cbbc7ef.webp",za=n.p+"static/media/loft.d718e95a5c8b9d2fe8ae.webp",Ia=n.p+"static/media/minimalist.efe51b56987e09e01074.webp",Aa=()=>{const{t:e}=se(),t=[{src:$a,styleName:e("gallery.text1")},{src:za,styleName:e("gallery.text2")},{src:Ia,styleName:e("gallery.text3")}];return(0,yi.jsx)(Da,{children:(0,yi.jsxs)(xi,{children:[(0,yi.jsx)(Na,{children:e("gallery.title")}),(0,yi.jsx)(Ra,{children:t.map((e,t)=>(0,yi.jsxs)(La,{children:[(0,yi.jsx)("img",{src:e.src,alt:e.styleName}),(0,yi.jsx)(_a,{children:e.styleName})]},t))})]})})},Fa=si.section`
  padding: 60px 20px;
  background-color: #eef7f6;
  text-align: center;
`,Ma=si.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;

  &::after {
    content: "";
    display: block;
    width: 60px;
    height: 4px;
    background-color: #4db6ac;
    margin: 12px auto 0;
    border-radius: 2px;
  }
`,Ha=si.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 1000px;
  margin: 0 auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }
`,Ba=si.div`
  background: white;
  padding: 32px 20px;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex: 1;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`,Ua=si.div`
  width: 50px;
  height: 50px;
  margin: 0 auto 16px;
  background-color: #4db6ac;
  color: white;
  font-weight: bold;
  font-size: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`,Va=si.h3`
  font-size: 18px;
  color: #333;
  margin: 0;
`,Wa=()=>{const{t:e}=se(),t=[{number:"1",title:e("how-it-works.text1")},{number:"2",title:e("how-it-works.text2")},{number:"3",title:e("how-it-works.text3")},{number:"4",title:e("how-it-works.text4")}];return(0,yi.jsxs)(Fa,{id:"how-it-works",children:[(0,yi.jsx)(Ma,{children:e("how-it-works.title")}),(0,yi.jsx)(Ha,{children:t.map(e=>{let{number:t,title:n}=e;return(0,yi.jsxs)(Ba,{children:[(0,yi.jsx)(Ua,{children:t}),(0,yi.jsx)(Va,{children:n})]},t)})})]})},qa=si.section`
  padding: 60px 20px;
  background-color: #fef9f3;
  text-align: center;
`,Ka=si.h2`
  font-size: 28px;
  color: #333;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background-color: #f4a261;
    margin: 12px auto 0;
    border-radius: 2px;
  }
`,Ya=si.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1100px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`,Qa=si.div`
  background: #fff;
  padding: 28px 24px;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(240, 177, 122, 0.1);
  text-align: left;
  transition: transform 250ms ease, box-shadow 250ms ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 24px rgba(240, 177, 122, 0.2);
  }
`,Ga=si.p`
  font-size: 16px;
  color: #444;
  margin-bottom: 16px;
  line-height: 1.5;
`,Xa=si.div`
  display: flex;
  align-items: center;
  gap: 8px;
  .author-icon {
    color: #f4a261;
    font-size: 24px;
    flex-shrink: 0;
  }
`,Ja=si.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  font-style: italic;
`,Za=()=>{const{t:e}=se(),t=[{author:e("reviews.author1"),text:e("reviews.text1")},{author:e("reviews.author2"),text:e("reviews.text2")},{author:e("reviews.author3"),text:e("reviews.text3")},{author:e("reviews.author4"),text:e("reviews.text4")},{author:e("reviews.author5"),text:e("reviews.text5")},{author:e("reviews.author6"),text:e("reviews.text6")}];return(0,yi.jsxs)(qa,{id:"reviews",children:[(0,yi.jsx)(Ka,{children:e("reviews.title")}),(0,yi.jsx)(Ya,{children:t.map((e,t)=>{let{author:n,text:r}=e;return(0,yi.jsxs)(Qa,{children:[(0,yi.jsxs)(Ga,{children:["\u201c",r,"\u201d"]}),(0,yi.jsxs)(Xa,{children:[(0,yi.jsx)(la,{className:"author-icon"}),(0,yi.jsx)(Ja,{children:n})]})]},t)})})]})},es=si.section`
  background: #f5f5f5;
  padding: 80px 20px;
  text-align: center;
`,ts=si.h2`
  font-size: 32px;
  margin-bottom: 40px;
  color: #2f2f2f;
  font-weight: 700;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 4px;
    background-color: #4db6ac;
    margin: 12px auto 0;
    border-radius: 2px;
  }
`,ns=si.div`
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`,rs=si.div`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
  padding: 20px 24px;
  text-align: left;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }
`,os=si.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,is=si.h3`
  font-size: 20px;
  color: #333333;
  font-weight: 600;
  margin: 0;
`,as=si.span`
  font-size: 24px;
  transform: ${e=>{let{isOpen:t}=e;return t?"rotate(180deg)":"rotate(0deg)"}};
  transition: transform 0.3s ease;
  color: #4db6ac;
`,ss=si.div`
  font-size: 16px;
  color: #555555;
  line-height: 24px;
  will-change: height, opacity;
`;function ls(e){return Di({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"},child:[]}]})(e)}const us=e=>{let{title:n,children:r}=e;const[o,i]=(0,t.useState)(!1),a=(0,t.useRef)(null),[s,l]=(0,t.useState)("0px");return(0,t.useEffect)(()=>{l(o?`${a.current.scrollHeight}px`:"0px")},[o]),(0,yi.jsxs)(rs,{children:[(0,yi.jsxs)(os,{onClick:()=>i(!o),children:[(0,yi.jsx)(is,{children:n}),(0,yi.jsx)(as,{isOpen:o,children:(0,yi.jsx)(ls,{size:24})})]}),(0,yi.jsx)(ss,{ref:a,style:{height:s,overflow:"hidden",transition:"height 300ms ease",opacity:o?1:0,paddingTop:o?"16px":"0"},children:r})]})},cs=()=>{const{t:e}=se(),t=[{title:e("faq.question1"),answer:e("faq.answer1")},{title:e("faq.question2"),answer:e("faq.answer2")},{title:e("faq.question3"),answer:e("faq.answer3")},{title:e("faq.question4"),answer:e("faq.answer4")},{title:e("faq.question5"),answer:e("faq.answer5")},{title:e("faq.question6"),answer:e("faq.answer6")},{title:e("faq.question7"),answer:e("faq.answer7")},{title:e("faq.question8"),answer:e("faq.answer8")}];return(0,yi.jsxs)(es,{id:"faq",children:[(0,yi.jsx)(ts,{children:e("faq.title")}),(0,yi.jsx)(ns,{children:t.map((e,t)=>(0,yi.jsx)(us,{title:e.title,children:e.answer},t))})]})},ds=()=>(0,yi.jsxs)("main",{children:[(0,yi.jsx)(Sa,{}),(0,yi.jsx)(Pa,{}),(0,yi.jsx)(Aa,{}),(0,yi.jsx)(Wa,{}),(0,yi.jsx)(Za,{}),(0,yi.jsx)(cs,{})]});function fs(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var hs="function"===typeof Symbol&&Symbol.observable||"@@observable",ps=function(){return Math.random().toString(36).substring(7).split("").join(".")},gs={INIT:"@@redux/INIT"+ps(),REPLACE:"@@redux/REPLACE"+ps(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+ps()}};function ms(e){if("object"!==typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function vs(e,t,n){var r;if("function"===typeof t&&"function"===typeof n||"function"===typeof n&&"function"===typeof arguments[3])throw new Error(fs(0));if("function"===typeof t&&"undefined"===typeof n&&(n=t,t=void 0),"undefined"!==typeof n){if("function"!==typeof n)throw new Error(fs(1));return n(vs)(e,t)}if("function"!==typeof e)throw new Error(fs(2));var o=e,i=t,a=[],s=a,l=!1;function u(){s===a&&(s=a.slice())}function c(){if(l)throw new Error(fs(3));return i}function d(e){if("function"!==typeof e)throw new Error(fs(4));if(l)throw new Error(fs(5));var t=!0;return u(),s.push(e),function(){if(t){if(l)throw new Error(fs(6));t=!1,u();var n=s.indexOf(e);s.splice(n,1),a=null}}}function f(e){if(!ms(e))throw new Error(fs(7));if("undefined"===typeof e.type)throw new Error(fs(8));if(l)throw new Error(fs(9));try{l=!0,i=o(i,e)}finally{l=!1}for(var t=a=s,n=0;n<t.length;n++){(0,t[n])()}return e}return f({type:gs.INIT}),(r={dispatch:f,subscribe:d,getState:c,replaceReducer:function(e){if("function"!==typeof e)throw new Error(fs(10));o=e,f({type:gs.REPLACE})}})[hs]=function(){var e,t=d;return(e={subscribe:function(e){if("object"!==typeof e||null===e)throw new Error(fs(11));function n(){e.next&&e.next(c())}return n(),{unsubscribe:t(n)}}})[hs]=function(){return this},e},r}function bs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if("undefined"!==typeof process&&void 0===t)throw new Error("invariant requires an error message argument");if(!e){let e;if(void 0===t)e=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{let n=0;e=new Error(t.replace(/%s/g,function(){return r[n++]})),e.name="Invariant Violation"}throw e.framesToPop=1,e}}function ys(e){return"object"===typeof e}const xs="dnd-core/INIT_COORDS",ws="dnd-core/BEGIN_DRAG",Ss="dnd-core/PUBLISH_DRAG_SOURCE",ks="dnd-core/HOVER",Es="dnd-core/DROP",Cs="dnd-core/END_DRAG";function Os(e,t){return{type:xs,payload:{sourceClientOffset:t||null,clientOffset:e||null}}}const js={type:xs,payload:{clientOffset:null,sourceClientOffset:null}};function Ts(e){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{publishSource:!0};const{publishSource:r=!0,clientOffset:o,getSourceClientOffset:i}=n,a=e.getMonitor(),s=e.getRegistry();e.dispatch(Os(o)),function(e,t,n){bs(!t.isDragging(),"Cannot call beginDrag while dragging."),e.forEach(function(e){bs(n.getSource(e),"Expected sourceIds to be registered.")})}(t,a,s);const l=function(e,t){let n=null;for(let r=e.length-1;r>=0;r--)if(t.canDragSource(e[r])){n=e[r];break}return n}(t,a);if(null==l)return void e.dispatch(js);let u=null;if(o){if(!i)throw new Error("getSourceClientOffset must be defined");!function(e){bs("function"===typeof e,"When clientOffset is provided, getSourceClientOffset must be a function.")}(i),u=i(l)}e.dispatch(Os(o,u));const c=s.getSource(l).beginDrag(a,l);if(null==c)return;!function(e){bs(ys(e),"Item must be an object.")}(c),s.pinSource(l);const d=s.getSourceType(l);return{type:ws,payload:{itemType:d,item:c,sourceId:l,clientOffset:o||null,sourceClientOffset:u||null,isSourcePublic:!!r}}}}function Ps(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ds(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Ps(e,t,n[t])})}return e}function Ns(e){return function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const n=e.getMonitor(),r=e.getRegistry();!function(e){bs(e.isDragging(),"Cannot call drop while not dragging."),bs(!e.didDrop(),"Cannot call drop twice during one drag operation.")}(n);const o=function(e){const t=e.getTargetIds().filter(e.canDropOnTarget,e);return t.reverse(),t}(n);o.forEach((o,i)=>{const a=function(e,t,n,r){const o=n.getTarget(e);let i=o?o.drop(r,e):void 0;(function(e){bs("undefined"===typeof e||ys(e),"Drop result must either be an object or undefined.")})(i),"undefined"===typeof i&&(i=0===t?{}:r.getDropResult());return i}(o,i,r,n),s={type:Es,payload:{dropResult:Ds({},t,a)}};e.dispatch(s)})}}function Rs(e){return function(){const t=e.getMonitor(),n=e.getRegistry();!function(e){bs(e.isDragging(),"Cannot call endDrag while not dragging.")}(t);const r=t.getSourceId();if(null!=r){n.getSource(r,!0).endDrag(t,r),n.unpinSource()}return{type:Cs}}}function Ls(e,t){return null===t?null===e:Array.isArray(e)?e.some(e=>e===t):e===t}function _s(e){return function(t){let{clientOffset:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e){bs(Array.isArray(e),"Expected targetIds to be an array.")}(t);const r=t.slice(0),o=e.getMonitor(),i=e.getRegistry();return function(e,t,n){for(let r=e.length-1;r>=0;r--){const o=e[r];Ls(t.getTargetType(o),n)||e.splice(r,1)}}(r,i,o.getItemType()),function(e,t,n){bs(t.isDragging(),"Cannot call hover while not dragging."),bs(!t.didDrop(),"Cannot call hover after drop.");for(let r=0;r<e.length;r++){const t=e[r];bs(e.lastIndexOf(t)===r,"Expected targetIds to be unique in the passed array.");bs(n.getTarget(t),"Expected targetIds to be registered.")}}(r,o,i),function(e,t,n){e.forEach(function(e){n.getTarget(e).hover(t,e)})}(r,o,i),{type:ks,payload:{targetIds:r,clientOffset:n||null}}}}function $s(e){return function(){if(e.getMonitor().isDragging())return{type:Ss}}}class zs{receiveBackend(e){this.backend=e}getMonitor(){return this.monitor}getBackend(){return this.backend}getRegistry(){return this.monitor.registry}getActions(){const e=this,{dispatch:t}=this.store;const n=function(e){return{beginDrag:Ts(e),publishDragSource:$s(e),hover:_s(e),drop:Ns(e),endDrag:Rs(e)}}(this);return Object.keys(n).reduce((r,o)=>{const i=n[o];var a;return r[o]=(a=i,function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];const i=a.apply(e,r);"undefined"!==typeof i&&t(i)}),r},{})}dispatch(e){this.store.dispatch(e)}constructor(e,t){this.isSetUp=!1,this.handleRefCountChange=()=>{const e=this.store.getState().refCount>0;this.backend&&(e&&!this.isSetUp?(this.backend.setup(),this.isSetUp=!0):!e&&this.isSetUp&&(this.backend.teardown(),this.isSetUp=!1))},this.store=e,this.monitor=t,e.subscribe(this.handleRefCountChange)}}function Is(e,t){return{x:e.x-t.x,y:e.y-t.y}}const As=[],Fs=[];As.__IS_NONE__=!0,Fs.__IS_ALL__=!0;class Ms{subscribeToStateChange(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{handlerIds:n}=t;bs("function"===typeof e,"listener must be a function."),bs("undefined"===typeof n||Array.isArray(n),"handlerIds, when specified, must be an array of strings.");let r=this.store.getState().stateId;return this.store.subscribe(()=>{const t=this.store.getState(),o=t.stateId;try{const i=o===r||o===r+1&&!function(e,t){return e!==As&&(e===Fs||"undefined"===typeof t||(n=e,t.filter(e=>n.indexOf(e)>-1)).length>0);var n}(t.dirtyHandlerIds,n);i||e()}finally{r=o}})}subscribeToOffsetChange(e){bs("function"===typeof e,"listener must be a function.");let t=this.store.getState().dragOffset;return this.store.subscribe(()=>{const n=this.store.getState().dragOffset;n!==t&&(t=n,e())})}canDragSource(e){if(!e)return!1;const t=this.registry.getSource(e);return bs(t,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()&&t.canDrag(this,e)}canDropOnTarget(e){if(!e)return!1;const t=this.registry.getTarget(e);if(bs(t,`Expected to find a valid target. targetId=${e}`),!this.isDragging()||this.didDrop())return!1;return Ls(this.registry.getTargetType(e),this.getItemType())&&t.canDrop(this,e)}isDragging(){return Boolean(this.getItemType())}isDraggingSource(e){if(!e)return!1;const t=this.registry.getSource(e,!0);if(bs(t,`Expected to find a valid source. sourceId=${e}`),!this.isDragging()||!this.isSourcePublic())return!1;return this.registry.getSourceType(e)===this.getItemType()&&t.isDragging(this,e)}isOverTarget(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{shallow:!1};if(!e)return!1;const{shallow:n}=t;if(!this.isDragging())return!1;const r=this.registry.getTargetType(e),o=this.getItemType();if(o&&!Ls(r,o))return!1;const i=this.getTargetIds();if(!i.length)return!1;const a=i.indexOf(e);return n?a===i.length-1:a>-1}getItemType(){return this.store.getState().dragOperation.itemType}getItem(){return this.store.getState().dragOperation.item}getSourceId(){return this.store.getState().dragOperation.sourceId}getTargetIds(){return this.store.getState().dragOperation.targetIds}getDropResult(){return this.store.getState().dragOperation.dropResult}didDrop(){return this.store.getState().dragOperation.didDrop}isSourcePublic(){return Boolean(this.store.getState().dragOperation.isSourcePublic)}getInitialClientOffset(){return this.store.getState().dragOffset.initialClientOffset}getInitialSourceClientOffset(){return this.store.getState().dragOffset.initialSourceClientOffset}getClientOffset(){return this.store.getState().dragOffset.clientOffset}getSourceClientOffset(){return function(e){const{clientOffset:t,initialClientOffset:n,initialSourceClientOffset:r}=e;return t&&n&&r?Is(function(e,t){return{x:e.x+t.x,y:e.y+t.y}}(t,r),n):null}(this.store.getState().dragOffset)}getDifferenceFromInitialOffset(){return function(e){const{clientOffset:t,initialClientOffset:n}=e;return t&&n?Is(t,n):null}(this.store.getState().dragOffset)}constructor(e,t){this.store=e,this.registry=t}}const Hs="undefined"!==typeof global?global:self,Bs=Hs.MutationObserver||Hs.WebKitMutationObserver;function Us(e){return function(){const t=setTimeout(r,0),n=setInterval(r,50);function r(){clearTimeout(t),clearInterval(n),e()}}}const Vs="function"===typeof Bs?function(e){let t=1;const n=new Bs(e),r=document.createTextNode("");return n.observe(r,{characterData:!0}),function(){t=-t,r.data=t}}:Us;class Ws{call(){try{this.task&&this.task()}catch(e){this.onError(e)}finally{this.task=null,this.release(this)}}constructor(e,t){this.onError=e,this.release=t,this.task=null}}const qs=new class{enqueueTask(e){const{queue:t,requestFlush:n}=this;t.length||(n(),this.flushing=!0),t[t.length]=e}constructor(){this.queue=[],this.pendingErrors=[],this.flushing=!1,this.index=0,this.capacity=1024,this.flush=()=>{const{queue:e}=this;for(;this.index<e.length;){const t=this.index;if(this.index++,e[t].call(),this.index>this.capacity){for(let t=0,n=e.length-this.index;t<n;t++)e[t]=e[t+this.index];e.length-=this.index,this.index=0}}e.length=0,this.index=0,this.flushing=!1},this.registerPendingError=e=>{this.pendingErrors.push(e),this.requestErrorThrow()},this.requestFlush=Vs(this.flush),this.requestErrorThrow=Us(()=>{if(this.pendingErrors.length)throw this.pendingErrors.shift()})}},Ks=new class{create(e){const t=this.freeTasks,n=t.length?t.pop():new Ws(this.onError,e=>t[t.length]=e);return n.task=e,n}constructor(e){this.onError=e,this.freeTasks=[]}}(qs.registerPendingError);const Ys="dnd-core/ADD_SOURCE",Qs="dnd-core/ADD_TARGET",Gs="dnd-core/REMOVE_SOURCE",Xs="dnd-core/REMOVE_TARGET";function Js(e,t){t&&Array.isArray(e)?e.forEach(e=>Js(e,!1)):bs("string"===typeof e||"symbol"===typeof e,t?"Type can only be a string, a symbol, or an array of either.":"Type can only be a string or a symbol.")}var Zs;!function(e){e.SOURCE="SOURCE",e.TARGET="TARGET"}(Zs||(Zs={}));let el=0;function tl(e){const t=(el++).toString();switch(e){case Zs.SOURCE:return`S${t}`;case Zs.TARGET:return`T${t}`;default:throw new Error(`Unknown Handler Role: ${e}`)}}function nl(e){switch(e[0]){case"S":return Zs.SOURCE;case"T":return Zs.TARGET;default:throw new Error(`Cannot parse handler ID: ${e}`)}}function rl(e,t){const n=e.entries();let r=!1;do{const{done:e,value:[,o]}=n.next();if(o===t)return!0;r=!!e}while(!r);return!1}class ol{addSource(e,t){Js(e),function(e){bs("function"===typeof e.canDrag,"Expected canDrag to be a function."),bs("function"===typeof e.beginDrag,"Expected beginDrag to be a function."),bs("function"===typeof e.endDrag,"Expected endDrag to be a function.")}(t);const n=this.addHandler(Zs.SOURCE,e,t);return this.store.dispatch(function(e){return{type:Ys,payload:{sourceId:e}}}(n)),n}addTarget(e,t){Js(e,!0),function(e){bs("function"===typeof e.canDrop,"Expected canDrop to be a function."),bs("function"===typeof e.hover,"Expected hover to be a function."),bs("function"===typeof e.drop,"Expected beginDrag to be a function.")}(t);const n=this.addHandler(Zs.TARGET,e,t);return this.store.dispatch(function(e){return{type:Qs,payload:{targetId:e}}}(n)),n}containsHandler(e){return rl(this.dragSources,e)||rl(this.dropTargets,e)}getSource(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];bs(this.isSourceId(e),"Expected a valid source ID.");return t&&e===this.pinnedSourceId?this.pinnedSource:this.dragSources.get(e)}getTarget(e){return bs(this.isTargetId(e),"Expected a valid target ID."),this.dropTargets.get(e)}getSourceType(e){return bs(this.isSourceId(e),"Expected a valid source ID."),this.types.get(e)}getTargetType(e){return bs(this.isTargetId(e),"Expected a valid target ID."),this.types.get(e)}isSourceId(e){return nl(e)===Zs.SOURCE}isTargetId(e){return nl(e)===Zs.TARGET}removeSource(e){var t;bs(this.getSource(e),"Expected an existing source."),this.store.dispatch(function(e){return{type:Gs,payload:{sourceId:e}}}(e)),t=()=>{this.dragSources.delete(e),this.types.delete(e)},qs.enqueueTask(Ks.create(t))}removeTarget(e){bs(this.getTarget(e),"Expected an existing target."),this.store.dispatch(function(e){return{type:Xs,payload:{targetId:e}}}(e)),this.dropTargets.delete(e),this.types.delete(e)}pinSource(e){const t=this.getSource(e);bs(t,"Expected an existing source."),this.pinnedSourceId=e,this.pinnedSource=t}unpinSource(){bs(this.pinnedSource,"No source is pinned at the time."),this.pinnedSourceId=null,this.pinnedSource=null}addHandler(e,t,n){const r=tl(e);return this.types.set(r,t),e===Zs.SOURCE?this.dragSources.set(r,n):e===Zs.TARGET&&this.dropTargets.set(r,n),r}constructor(e){this.types=new Map,this.dragSources=new Map,this.dropTargets=new Map,this.pinnedSourceId=null,this.pinnedSource=null,this.store=e}}const il=(e,t)=>e===t;function al(){let e=arguments.length>1?arguments[1]:void 0;switch(e.type){case ks:break;case Ys:case Qs:case Xs:case Gs:return As;default:return Fs}const{targetIds:t=[],prevTargetIds:n=[]}=e.payload,r=function(e,t){const n=new Map,r=e=>{n.set(e,n.has(e)?n.get(e)+1:1)};e.forEach(r),t.forEach(r);const o=[];return n.forEach((e,t)=>{1===e&&o.push(t)}),o}(t,n),o=r.length>0||!function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:il;if(e.length!==t.length)return!1;for(let r=0;r<e.length;++r)if(!n(e[r],t[r]))return!1;return!0}(t,n);if(!o)return As;const i=n[n.length-1],a=t[t.length-1];return i!==a&&(i&&r.push(i),a&&r.push(a)),r}function sl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ll={initialSourceClientOffset:null,initialClientOffset:null,clientOffset:null};function ul(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ll,t=arguments.length>1?arguments[1]:void 0;const{payload:n}=t;switch(t.type){case xs:case ws:return{initialSourceClientOffset:n.sourceClientOffset,initialClientOffset:n.clientOffset,clientOffset:n.clientOffset};case ks:return r=e.clientOffset,o=n.clientOffset,!r&&!o||r&&o&&r.x===o.x&&r.y===o.y?e:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){sl(e,t,n[t])})}return e}({},e,{clientOffset:n.clientOffset});case Cs:case Es:return ll;default:return e}var r,o}function cl(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dl(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){cl(e,t,n[t])})}return e}const fl={itemType:null,item:null,sourceId:null,targetIds:[],dropResult:null,didDrop:!1,isSourcePublic:null};function hl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fl,t=arguments.length>1?arguments[1]:void 0;const{payload:n}=t;switch(t.type){case ws:return dl({},e,{itemType:n.itemType,item:n.item,sourceId:n.sourceId,isSourcePublic:n.isSourcePublic,dropResult:null,didDrop:!1});case Ss:return dl({},e,{isSourcePublic:!0});case ks:return dl({},e,{targetIds:n.targetIds});case Xs:return-1===e.targetIds.indexOf(n.targetId)?e:dl({},e,{targetIds:(r=e.targetIds,o=n.targetId,r.filter(e=>e!==o))});case Es:return dl({},e,{dropResult:n.dropResult,didDrop:!0,targetIds:[]});case Cs:return dl({},e,{itemType:null,item:null,sourceId:null,dropResult:null,didDrop:!1,isSourcePublic:null,targetIds:[]});default:return e}var r,o}function pl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;switch((arguments.length>1?arguments[1]:void 0).type){case Ys:case Qs:return e+1;case Gs:case Xs:return e-1;default:return e}}function gl(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)+1}function ml(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vl(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){ml(e,t,n[t])})}return e}function bl(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{dirtyHandlerIds:al(e.dirtyHandlerIds,{type:t.type,payload:vl({},t.payload,{prevTargetIds:(n=e,r="dragOperation.targetIds",o=[],r.split(".").reduce((e,t)=>e&&e[t]?e[t]:o||null,n))})}),dragOffset:ul(e.dragOffset,t),refCount:pl(e.refCount,t),dragOperation:hl(e.dragOperation,t),stateId:gl(e.stateId)};var n,r,o}function yl(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=function(e){const t="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__;return vs(bl,e&&t&&t({name:"dnd-core",instanceId:"dnd-core"}))}(arguments.length>3&&void 0!==arguments[3]&&arguments[3]),o=new Ms(r,new ol(r)),i=new zs(r,o),a=e(i,t,n);return i.receiveBackend(a),i}const xl=(0,t.createContext)({dragDropManager:void 0});function wl(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}let Sl=0;const kl=Symbol.for("__REACT_DND_CONTEXT_INSTANCE__");var El=(0,t.memo)(function(e){var{children:n}=e,r=wl(e,["children"]);const[o,i]=function(e){if("manager"in e){return[{dragDropManager:e.manager},!1]}const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Cl(),n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;const o=t;o[kl]||(o[kl]={dragDropManager:yl(e,t,n,r)});return o[kl]}(e.backend,e.context,e.options,e.debugMode),n=!e.context;return[t,n]}(r);return(0,t.useEffect)(()=>{if(i){const e=Cl();return++Sl,()=>{0===--Sl&&(e[kl]=null)}}},[]),(0,yi.jsx)(xl.Provider,{value:o,children:n})});function Cl(){return"undefined"!==typeof global?global:window}function Ol(e){let t=null;return()=>(null==t&&(t=e()),t)}class jl{enter(e){const t=this.entered.length;return this.entered=function(e,t){const n=new Set,r=e=>n.add(e);e.forEach(r),t.forEach(r);const o=[];return n.forEach(e=>o.push(e)),o}(this.entered.filter(t=>this.isNodeInDocument(t)&&(!t.contains||t.contains(e))),[e]),0===t&&this.entered.length>0}leave(e){const t=this.entered.length;var n,r;return this.entered=(n=this.entered.filter(this.isNodeInDocument),r=e,n.filter(e=>e!==r)),t>0&&0===this.entered.length}reset(){this.entered=[]}constructor(e){this.entered=[],this.isNodeInDocument=e}}class Tl{initializeExposedProperties(){Object.keys(this.config.exposeProperties).forEach(e=>{Object.defineProperty(this.item,e,{configurable:!0,enumerable:!0,get:()=>(console.warn(`Browser doesn't allow reading "${e}" until the drop event.`),null)})})}loadDataTransfer(e){if(e){const t={};Object.keys(this.config.exposeProperties).forEach(n=>{const r=this.config.exposeProperties[n];null!=r&&(t[n]={value:r(e,this.config.matchesTypes),configurable:!0,enumerable:!0})}),Object.defineProperties(this.item,t)}}canDrag(){return!0}beginDrag(){return this.item}isDragging(e,t){return t===e.getSourceId()}endDrag(){}constructor(e){this.config=e,this.item={},this.initializeExposedProperties()}}const Pl="__NATIVE_FILE__",Dl="__NATIVE_URL__",Nl="__NATIVE_TEXT__",Rl="__NATIVE_HTML__";function Ll(e,t,n){const r=t.reduce((t,n)=>t||e.getData(n),"");return null!=r?r:n}const _l={[Pl]:{exposeProperties:{files:e=>Array.prototype.slice.call(e.files),items:e=>e.items,dataTransfer:e=>e},matchesTypes:["Files"]},[Rl]:{exposeProperties:{html:(e,t)=>Ll(e,t,""),dataTransfer:e=>e},matchesTypes:["Html","text/html"]},[Dl]:{exposeProperties:{urls:(e,t)=>Ll(e,t,"").split("\n"),dataTransfer:e=>e},matchesTypes:["Url","text/uri-list"]},[Nl]:{exposeProperties:{text:(e,t)=>Ll(e,t,""),dataTransfer:e=>e},matchesTypes:["Text","text/plain"]}};function $l(e){if(!e)return null;const t=Array.prototype.slice.call(e.types||[]);return Object.keys(_l).filter(e=>{const n=_l[e];return!!(null===n||void 0===n?void 0:n.matchesTypes)&&n.matchesTypes.some(e=>t.indexOf(e)>-1)})[0]||null}const zl=Ol(()=>/firefox/i.test(navigator.userAgent)),Il=Ol(()=>Boolean(window.safari));class Al{interpolate(e){const{xs:t,ys:n,c1s:r,c2s:o,c3s:i}=this;let a=t.length-1;if(e===t[a])return n[a];let s,l=0,u=i.length-1;for(;l<=u;){s=Math.floor(.5*(l+u));const r=t[s];if(r<e)l=s+1;else{if(!(r>e))return n[s];u=s-1}}a=Math.max(0,u);const c=e-t[a],d=c*c;return n[a]+r[a]*c+o[a]*d+i[a]*c*d}constructor(e,t){const{length:n}=e,r=[];for(let h=0;h<n;h++)r.push(h);r.sort((t,n)=>e[t]<e[n]?-1:1);const o=[],i=[],a=[];let s,l;for(let h=0;h<n-1;h++)s=e[h+1]-e[h],l=t[h+1]-t[h],i.push(s),o.push(l),a.push(l/s);const u=[a[0]];for(let h=0;h<i.length-1;h++){const e=a[h],t=a[h+1];if(e*t<=0)u.push(0);else{s=i[h];const n=i[h+1],r=s+n;u.push(3*r/((r+n)/e+(r+s)/t))}}u.push(a[a.length-1]);const c=[],d=[];let f;for(let h=0;h<u.length-1;h++){f=a[h];const e=u[h],t=1/i[h],n=e+u[h+1]-f-f;c.push((f-e-n)*t),d.push(n*t*t)}this.xs=e,this.ys=t,this.c1s=u,this.c2s=c,this.c3s=d}}function Fl(e){const t=1===e.nodeType?e:e.parentElement;if(!t)return null;const{top:n,left:r}=t.getBoundingClientRect();return{x:r,y:n}}function Ml(e){return{x:e.clientX,y:e.clientY}}function Hl(e,t,n,r,o){const i=function(e){var t;return"IMG"===e.nodeName&&(zl()||!(null===(t=document.documentElement)||void 0===t?void 0:t.contains(e)))}(t),a=Fl(i?e:t),s={x:n.x-a.x,y:n.y-a.y},{offsetWidth:l,offsetHeight:u}=e,{anchorX:c,anchorY:d}=r,{dragPreviewWidth:f,dragPreviewHeight:h}=function(e,t,n,r){let o=e?t.width:n,i=e?t.height:r;return Il()&&e&&(i/=window.devicePixelRatio,o/=window.devicePixelRatio),{dragPreviewWidth:o,dragPreviewHeight:i}}(i,t,l,u),{offsetX:p,offsetY:g}=o,m=0===g||g;return{x:0===p||p?p:new Al([0,.5,1],[s.x,s.x/l*f,s.x+f-l]).interpolate(c),y:m?g:(()=>{let e=new Al([0,.5,1],[s.y,s.y/u*h,s.y+h-u]).interpolate(d);return Il()&&i&&(e+=(window.devicePixelRatio-1)*h),e})()}}class Bl{get window(){return this.globalContext?this.globalContext:"undefined"!==typeof window?window:void 0}get document(){var e;return(null===(e=this.globalContext)||void 0===e?void 0:e.document)?this.globalContext.document:this.window?this.window.document:void 0}get rootElement(){var e;return(null===(e=this.optionsArgs)||void 0===e?void 0:e.rootElement)||this.window}constructor(e,t){this.ownerDocument=null,this.globalContext=e,this.optionsArgs=t}}function Ul(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Vl(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){Ul(e,t,n[t])})}return e}class Wl{profile(){var e,t;return{sourcePreviewNodes:this.sourcePreviewNodes.size,sourcePreviewNodeOptions:this.sourcePreviewNodeOptions.size,sourceNodeOptions:this.sourceNodeOptions.size,sourceNodes:this.sourceNodes.size,dragStartSourceIds:(null===(e=this.dragStartSourceIds)||void 0===e?void 0:e.length)||0,dropTargetIds:this.dropTargetIds.length,dragEnterTargetIds:this.dragEnterTargetIds.length,dragOverTargetIds:(null===(t=this.dragOverTargetIds)||void 0===t?void 0:t.length)||0}}get window(){return this.options.window}get document(){return this.options.document}get rootElement(){return this.options.rootElement}setup(){const e=this.rootElement;if(void 0!==e){if(e.__isReactDndBackendSetUp)throw new Error("Cannot have two HTML5 backends at the same time.");e.__isReactDndBackendSetUp=!0,this.addEventListeners(e)}}teardown(){const e=this.rootElement;var t;void 0!==e&&(e.__isReactDndBackendSetUp=!1,this.removeEventListeners(this.rootElement),this.clearCurrentDragSourceNode(),this.asyncEndDragFrameId&&(null===(t=this.window)||void 0===t||t.cancelAnimationFrame(this.asyncEndDragFrameId)))}connectDragPreview(e,t,n){return this.sourcePreviewNodeOptions.set(e,n),this.sourcePreviewNodes.set(e,t),()=>{this.sourcePreviewNodes.delete(e),this.sourcePreviewNodeOptions.delete(e)}}connectDragSource(e,t,n){this.sourceNodes.set(e,t),this.sourceNodeOptions.set(e,n);const r=t=>this.handleDragStart(t,e),o=e=>this.handleSelectStart(e);return t.setAttribute("draggable","true"),t.addEventListener("dragstart",r),t.addEventListener("selectstart",o),()=>{this.sourceNodes.delete(e),this.sourceNodeOptions.delete(e),t.removeEventListener("dragstart",r),t.removeEventListener("selectstart",o),t.setAttribute("draggable","false")}}connectDropTarget(e,t){const n=t=>this.handleDragEnter(t,e),r=t=>this.handleDragOver(t,e),o=t=>this.handleDrop(t,e);return t.addEventListener("dragenter",n),t.addEventListener("dragover",r),t.addEventListener("drop",o),()=>{t.removeEventListener("dragenter",n),t.removeEventListener("dragover",r),t.removeEventListener("drop",o)}}addEventListeners(e){e.addEventListener&&(e.addEventListener("dragstart",this.handleTopDragStart),e.addEventListener("dragstart",this.handleTopDragStartCapture,!0),e.addEventListener("dragend",this.handleTopDragEndCapture,!0),e.addEventListener("dragenter",this.handleTopDragEnter),e.addEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.addEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.addEventListener("dragover",this.handleTopDragOver),e.addEventListener("dragover",this.handleTopDragOverCapture,!0),e.addEventListener("drop",this.handleTopDrop),e.addEventListener("drop",this.handleTopDropCapture,!0))}removeEventListeners(e){e.removeEventListener&&(e.removeEventListener("dragstart",this.handleTopDragStart),e.removeEventListener("dragstart",this.handleTopDragStartCapture,!0),e.removeEventListener("dragend",this.handleTopDragEndCapture,!0),e.removeEventListener("dragenter",this.handleTopDragEnter),e.removeEventListener("dragenter",this.handleTopDragEnterCapture,!0),e.removeEventListener("dragleave",this.handleTopDragLeaveCapture,!0),e.removeEventListener("dragover",this.handleTopDragOver),e.removeEventListener("dragover",this.handleTopDragOverCapture,!0),e.removeEventListener("drop",this.handleTopDrop),e.removeEventListener("drop",this.handleTopDropCapture,!0))}getCurrentSourceNodeOptions(){const e=this.monitor.getSourceId(),t=this.sourceNodeOptions.get(e);return Vl({dropEffect:this.altKeyPressed?"copy":"move"},t||{})}getCurrentDropEffect(){return this.isDraggingNativeItem()?"copy":this.getCurrentSourceNodeOptions().dropEffect}getCurrentSourcePreviewNodeOptions(){const e=this.monitor.getSourceId();return Vl({anchorX:.5,anchorY:.5,captureDraggingState:!1},this.sourcePreviewNodeOptions.get(e)||{})}isDraggingNativeItem(){const t=this.monitor.getItemType();return Object.keys(e).some(n=>e[n]===t)}beginDragNativeItem(e,t){this.clearCurrentDragSourceNode(),this.currentNativeSource=function(e,t){const n=_l[e];if(!n)throw new Error(`native type ${e} has no configuration`);const r=new Tl(n);return r.loadDataTransfer(t),r}(e,t),this.currentNativeHandle=this.registry.addSource(e,this.currentNativeSource),this.actions.beginDrag([this.currentNativeHandle])}setCurrentDragSourceNode(e){this.clearCurrentDragSourceNode(),this.currentDragSourceNode=e;this.mouseMoveTimeoutTimer=setTimeout(()=>{var e;return null===(e=this.rootElement)||void 0===e?void 0:e.addEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0)},1e3)}clearCurrentDragSourceNode(){if(this.currentDragSourceNode){var e;if(this.currentDragSourceNode=null,this.rootElement)null===(e=this.window)||void 0===e||e.clearTimeout(this.mouseMoveTimeoutTimer||void 0),this.rootElement.removeEventListener("mousemove",this.endDragIfSourceWasRemovedFromDOM,!0);return this.mouseMoveTimeoutTimer=null,!0}return!1}handleDragStart(e,t){e.defaultPrevented||(this.dragStartSourceIds||(this.dragStartSourceIds=[]),this.dragStartSourceIds.unshift(t))}handleDragEnter(e,t){this.dragEnterTargetIds.unshift(t)}handleDragOver(e,t){null===this.dragOverTargetIds&&(this.dragOverTargetIds=[]),this.dragOverTargetIds.unshift(t)}handleDrop(e,t){this.dropTargetIds.unshift(t)}constructor(e,t,n){this.sourcePreviewNodes=new Map,this.sourcePreviewNodeOptions=new Map,this.sourceNodes=new Map,this.sourceNodeOptions=new Map,this.dragStartSourceIds=null,this.dropTargetIds=[],this.dragEnterTargetIds=[],this.currentNativeSource=null,this.currentNativeHandle=null,this.currentDragSourceNode=null,this.altKeyPressed=!1,this.mouseMoveTimeoutTimer=null,this.asyncEndDragFrameId=null,this.dragOverTargetIds=null,this.lastClientOffset=null,this.hoverRafId=null,this.getSourceClientOffset=e=>{const t=this.sourceNodes.get(e);return t&&Fl(t)||null},this.endDragNativeItem=()=>{this.isDraggingNativeItem()&&(this.actions.endDrag(),this.currentNativeHandle&&this.registry.removeSource(this.currentNativeHandle),this.currentNativeHandle=null,this.currentNativeSource=null)},this.isNodeInDocument=e=>Boolean(e&&this.document&&this.document.body&&this.document.body.contains(e)),this.endDragIfSourceWasRemovedFromDOM=()=>{const e=this.currentDragSourceNode;null==e||this.isNodeInDocument(e)||(this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover())},this.scheduleHover=e=>{null===this.hoverRafId&&"undefined"!==typeof requestAnimationFrame&&(this.hoverRafId=requestAnimationFrame(()=>{this.monitor.isDragging()&&this.actions.hover(e||[],{clientOffset:this.lastClientOffset}),this.hoverRafId=null}))},this.cancelHover=()=>{null!==this.hoverRafId&&"undefined"!==typeof cancelAnimationFrame&&(cancelAnimationFrame(this.hoverRafId),this.hoverRafId=null)},this.handleTopDragStartCapture=()=>{this.clearCurrentDragSourceNode(),this.dragStartSourceIds=[]},this.handleTopDragStart=e=>{if(e.defaultPrevented)return;const{dragStartSourceIds:t}=this;this.dragStartSourceIds=null;const n=Ml(e);this.monitor.isDragging()&&(this.actions.endDrag(),this.cancelHover()),this.actions.beginDrag(t||[],{publishSource:!1,getSourceClientOffset:this.getSourceClientOffset,clientOffset:n});const{dataTransfer:r}=e,o=$l(r);if(this.monitor.isDragging()){if(r&&"function"===typeof r.setDragImage){const e=this.monitor.getSourceId(),t=this.sourceNodes.get(e),o=this.sourcePreviewNodes.get(e)||t;if(o){const{anchorX:e,anchorY:i,offsetX:a,offsetY:s}=this.getCurrentSourcePreviewNodeOptions(),l=Hl(t,o,n,{anchorX:e,anchorY:i},{offsetX:a,offsetY:s});r.setDragImage(o,l.x,l.y)}}try{null===r||void 0===r||r.setData("application/json",{})}catch(i){}this.setCurrentDragSourceNode(e.target);const{captureDraggingState:t}=this.getCurrentSourcePreviewNodeOptions();t?this.actions.publishDragSource():setTimeout(()=>this.actions.publishDragSource(),0)}else if(o)this.beginDragNativeItem(o);else{if(r&&!r.types&&(e.target&&!e.target.hasAttribute||!e.target.hasAttribute("draggable")))return;e.preventDefault()}},this.handleTopDragEndCapture=()=>{this.clearCurrentDragSourceNode()&&this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleTopDragEnterCapture=e=>{var t;(this.dragEnterTargetIds=[],this.isDraggingNativeItem())&&(null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer));if(!this.enterLeaveCounter.enter(e.target)||this.monitor.isDragging())return;const{dataTransfer:n}=e,r=$l(n);r&&this.beginDragNativeItem(r,n)},this.handleTopDragEnter=e=>{const{dragEnterTargetIds:t}=this;if(this.dragEnterTargetIds=[],!this.monitor.isDragging())return;this.altKeyPressed=e.altKey,t.length>0&&this.actions.hover(t,{clientOffset:Ml(e)});t.some(e=>this.monitor.canDropOnTarget(e))&&(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect()))},this.handleTopDragOverCapture=e=>{var t;(this.dragOverTargetIds=[],this.isDraggingNativeItem())&&(null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer))},this.handleTopDragOver=e=>{const{dragOverTargetIds:t}=this;if(this.dragOverTargetIds=[],!this.monitor.isDragging())return e.preventDefault(),void(e.dataTransfer&&(e.dataTransfer.dropEffect="none"));this.altKeyPressed=e.altKey,this.lastClientOffset=Ml(e),this.scheduleHover(t);(t||[]).some(e=>this.monitor.canDropOnTarget(e))?(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect=this.getCurrentDropEffect())):this.isDraggingNativeItem()?e.preventDefault():(e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="none"))},this.handleTopDragLeaveCapture=e=>{this.isDraggingNativeItem()&&e.preventDefault();this.enterLeaveCounter.leave(e.target)&&(this.isDraggingNativeItem()&&setTimeout(()=>this.endDragNativeItem(),0),this.cancelHover())},this.handleTopDropCapture=e=>{var t;(this.dropTargetIds=[],this.isDraggingNativeItem())?(e.preventDefault(),null===(t=this.currentNativeSource)||void 0===t||t.loadDataTransfer(e.dataTransfer)):$l(e.dataTransfer)&&e.preventDefault();this.enterLeaveCounter.reset()},this.handleTopDrop=e=>{const{dropTargetIds:t}=this;this.dropTargetIds=[],this.actions.hover(t,{clientOffset:Ml(e)}),this.actions.drop({dropEffect:this.getCurrentDropEffect()}),this.isDraggingNativeItem()?this.endDragNativeItem():this.monitor.isDragging()&&this.actions.endDrag(),this.cancelHover()},this.handleSelectStart=e=>{const t=e.target;"function"===typeof t.dragDrop&&("INPUT"===t.tagName||"SELECT"===t.tagName||"TEXTAREA"===t.tagName||t.isContentEditable||(e.preventDefault(),t.dragDrop()))},this.options=new Bl(t,n),this.actions=e.getActions(),this.monitor=e.getMonitor(),this.registry=e.getRegistry(),this.enterLeaveCounter=new jl(this.isNodeInDocument)}}const ql=function(e,t,n){return new Wl(e,t,n)},Kl=e=>{let{rotation:t=0}=e;const n=t%180!==0;return(0,yi.jsxs)(Yl,{$vertical:n,style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)(Ql,{$left:!0}),(0,yi.jsx)(Ql,{$right:!0}),(0,yi.jsx)(Gl,{}),(0,yi.jsx)(Xl,{}),(0,yi.jsx)(Jl,{children:(0,yi.jsxs)(Zl,{children:[(0,yi.jsx)(eu,{}),(0,yi.jsx)(tu,{})]})})]})},Yl=si.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transform: ${e=>{let{$rotation:t}=e;return`rotate(${t}deg)`}};
  transform-origin: center;
  transition: transform 0.3s ease;
`,Ql=si.div`
  width: 6%;
  height: 80%;
  background: linear-gradient(to bottom, #A1887F, #D7CCC8);
  position: absolute;
  bottom: 0;
  ${e=>e.$left?"left: 10%;":"right: 10%;"}
  z-index: 2;
  border-radius: 3px;
`,Gl=si.div`
  width: 90%;
  height: 10%;
  background: linear-gradient(to bottom, #BCAAA4, #D7CCC8);
  position: absolute;
  top: 5%;
  left: 5%;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  z-index: 3;
`,Xl=si.div`
  position: absolute;
  top: 15%;
  left: 5%;
  width: 90%;
  height: 60%;
  background: linear-gradient(
    to bottom,
    rgba(188,170,164,0.7),
    rgba(215,204,200,0.4)
  );
  backdrop-filter: blur(1px);
  z-index: 1;
`,Jl=si.div`
  width: 80%;
  height: 60%;
  position: relative;
  z-index: 2;
`,Zl=si.div`
  width: 100%;
  height: 80%;
  background: #FFF8E1;
  position: absolute;
  bottom: 0;
  border-radius: 5px;
  box-shadow: inset 0 -5px 10px rgba(0,0,0,0.05);
`,eu=si.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 25%;
  height: 20%;
  background: white;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
`,tu=si.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 90%;
  height: 40%;
  background: #BCAAA4;
  border-radius: 5px;
`,nu=e=>{let{rotation:t=0}=e;const n=t%180!==0;return(0,yi.jsxs)(ru,{$vertical:n,style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsxs)(ou,{children:[(0,yi.jsx)(iu,{}),(0,yi.jsx)(au,{})]}),(0,yi.jsxs)(su,{children:[(0,yi.jsx)(lu,{$left:!0}),(0,yi.jsx)(lu,{$right:!0}),(0,yi.jsx)(uu,{})]}),(0,yi.jsx)(cu,{})]})},ru=si.div`
  width: ${e=>{let{$vertical:t}=e;return"100%"}};
  height: ${e=>{let{$vertical:t}=e;return"100%"}};
  aspect-ratio: ${e=>{let{$vertical:t}=e;return t?"2 / 3":"3 / 2"}};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: transform 0.3s ease;
`,ou=si.div`
  width: 80%;
  height: 65%;
  background: #A1887F;
  position: absolute;
  bottom: 5%;
  left: 10%;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  overflow: hidden;
  z-index: 2;
`,iu=si.div`
  width: 100%;
  height: 90%;
  background: #D7CCC8;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 5px 5px;
`,au=si.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 25%;
  height: 20%;
  background: #EFEBE9;
  border-radius: 5px;
`,su=si.div`
  width: 80%;
  height: 20%;
  background: #8D6E63;
  position: absolute;
  top: 10%;
  left: 10%;
  border-radius: 8px;
  box-shadow: 0 -2px 5px rgba(0,0,0,0.1);
  z-index: 1;
`,lu=si.div`
  position: absolute;
  top: 50%;
  ${e=>e.$left?"left: 10%;":"right: 10%;"}
  width: 8%;
  height: 20%;
  background: #5D4037;
  border-radius: 50%;
  transform: translateY(-50%);
`,uu=si.div`
  position: absolute;
  top: 50%;
  left: 20%;
  width: 60%;
  height: 2px;
  background: repeating-linear-gradient(
    to right,
    #5D4037,
    #5D4037 5px,
    transparent 5px,
    transparent 10px
  );
  transform: translateY(-50%);
`,cu=si.div`
  position: absolute;
  width: 70%;
  height: 5%;
  background: #5D4037;
  bottom: 0;
  left: 15%;
  border-radius: 3px 3px 0 0;
  z-index: 3;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 150%;
    background: linear-gradient(90deg, 
      transparent 15%, 
      #5D4037 15%, 
      #5D4037 20%, 
      transparent 20%, 
      transparent 80%, 
      #5D4037 80%, 
      #5D4037 85%, 
      transparent 85%
    );
    bottom: 100%;
  }
`,du=e=>{let{rotation:t=0}=e;const n=t%180!==0;return(0,yi.jsxs)(fu,{$vertical:n,style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsxs)(hu,{children:[(0,yi.jsxs)(pu,{children:[(0,yi.jsx)(gu,{}),(0,yi.jsx)(mu,{})]}),(0,yi.jsx)(vu,{}),(0,yi.jsx)(bu,{})]}),(0,yi.jsx)(yu,{children:[...Array(4)].map((e,t)=>(0,yi.jsx)(xu,{},t))})]})},fu=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: ${e=>{let{$vertical:t}=e;return t?"2 / 3":"3 / 2"}};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;
`,hu=si.div`
  width: 85%;
  height: 75%;
  background: linear-gradient(145deg, #e6e6e6, #ffffff);
  border: 3px solid #cfcfcf;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`,pu=si.div`
  width: 92%;
  height: 85%;
  background: #fff8e1;
  position: absolute;
  top: 7%;
  left: 4%;
  border-radius: 3px;
  overflow: hidden;
`,gu=si.div`
  position: absolute;
  top: 5%;
  left: 5%;
  width: 25%;
  height: 15%;
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 -2px 5px rgba(0,0,0,0.1);
`,mu=si.div`
  position: absolute;
  bottom: 5%;
  left: 5%;
  width: 90%;
  height: 40%;
  background: #bbdefb;
  border-radius: 5px;
`,vu=si.div`
  position: absolute;
  top: -10%;
  left: 0;
  width: 100%;
  height: 12%;
  background: linear-gradient(to right, #616161, #9e9e9e, #616161);
  border-radius: 5px 5px 0 0;
`,bu=si.div`
  position: absolute;
  bottom: -5%;
  left: 0;
  width: 100%;
  height: 7%;
  background: linear-gradient(to right, #616161, #9e9e9e, #616161);
  border-radius: 0 0 5px 5px;
`,yu=si.div`
  position: absolute;
  width: 100%;
  height: 100%;
`,xu=si.div`
  width: 4%;
  height: 7%;
  background: linear-gradient(to bottom, #424242, #616161);
  position: absolute;
  bottom: 0;
  
  &:nth-child(1) { left: 8%; border-radius: 0 0 3px 3px; }
  &:nth-child(2) { right: 8%; border-radius: 0 0 3px 3px; }
  &:nth-child(3) { left: 8%; top: 68%; }
  &:nth-child(4) { right: 8%; top: 68%; }
`,wu=e=>{let{rotation:t=0}=e;const n=t%180!==0;return(0,yi.jsxs)(Su,{$vertical:n,style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsxs)(ku,{children:[(0,yi.jsxs)(Eu,{children:[(0,yi.jsx)(Cu,{}),(0,yi.jsx)(Ou,{})]}),(0,yi.jsx)(ju,{$left:!0,children:(0,yi.jsx)(Tu,{})}),(0,yi.jsx)(ju,{$right:!0,children:(0,yi.jsx)(Tu,{})}),(0,yi.jsx)(Pu,{})]}),(0,yi.jsxs)(Du,{children:[(0,yi.jsx)(Nu,{}),(0,yi.jsx)(Nu,{})]})]})},Su=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: ${e=>{let{$vertical:t}=e;return t?"2 / 3":"3 / 2"}};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  transition: transform 0.3s ease;
`,ku=si.div`
  width: 85%;
  height: 75%;
  background: #5D4037;
  position: relative;
  border-radius: 8px 8px 0 0;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
`,Eu=si.div`
  width: 100%;
  height: 65%;
  background: #D7CCC8;
  position: absolute;
  top: 0;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`,Cu=si.div`
  position: absolute;
  top: 10%;
  left: 5%;
  width: 25%;
  height: 20%;
  background: #EFEBE9;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`,Ou=si.div`
  position: absolute;
  bottom: 10%;
  right: 5%;
  width: 50%;
  height: 30%;
  background: #BCAAA4;
  border-radius: 5px;
`,ju=si.div`
  width: 40%;
  height: 20%;
  background: #3E2723;
  position: absolute;
  bottom: 0;
  ${e=>e.$left?"left: 5%;":"right: 5%;"}
  border-radius: 0 0 5px 5px;
  box-shadow: inset 0 -3px 5px rgba(0,0,0,0.2);
`,Tu=si.div`
  position: absolute;
  width: 20%;
  height: 10%;
  background: #BCAAA4;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
`,Pu=si.div`
  position: absolute;
  width: 10%;
  height: 20%;
  background: #4E342E;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`,Du=si.div`
  position: absolute;
  width: 85%;
  height: 5%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`,Nu=si.div`
  width: 8%;
  height: 100%;
  background: #3E2723;
  border-radius: 0 0 3px 3px;
`,Ru=e=>{let{rotation:t=0}=e;return(0,yi.jsx)(Lu,{rotation:t,children:(0,yi.jsxs)(_u,{children:[(0,yi.jsxs)($u,{children:[(0,yi.jsx)(zu,{}),(0,yi.jsxs)(Iu,{children:[(0,yi.jsx)(Au,{}),(0,yi.jsx)(Au,{})]})]}),(0,yi.jsxs)(Fu,{children:[(0,yi.jsx)(Mu,{$left:!0}),(0,yi.jsx)(Mu,{$right:!0})]}),(0,yi.jsx)(Hu,{})]})})},Lu=si.div`
  width: 100%;
  height: 100%;
  transform: rotate(${e=>{let{rotation:t}=e;return t}}deg);
  transform-origin: center center;
  transition: transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
`,_u=si.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`,$u=si.div`
  width: 85%;
  height: 65%;
  background: #78909C;
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px 8px 0 0;
  box-shadow: 0 5px 10px rgba(0,0,0,0.2);
`,zu=si.div`
  width: 100%;
  height: 80%;
  background: #B0BEC5;
  position: absolute;
  top: 0;
  border-radius: 8px 8px 0 0;
`,Iu=si.div`
  position: absolute;
  width: 80%;
  height: 5%;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
`,Au=si.div`
  width: 45%;
  height: 100%;
  background: repeating-linear-gradient(
    to right,
    #37474F,
    #37474F 5px,
    transparent 5px,
    transparent 10px
  );
`,Fu=si.div`
  width: 85%;
  height: 20%;
  background: #546E7A;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 8px;
  box-shadow: 0 -3px 5px rgba(0,0,0,0.1);

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 20%;
    background: #37474F;
    bottom: 0;
    border-radius: 0 0 8px 8px;
  }
`,Mu=si.div`
  position: absolute;
  width: 8%;
  height: 30%;
  background: #37474F;
  top: 50%;
  ${e=>e.$left?"left: 5%;":"right: 5%;"}
  transform: translateY(-50%);
  border-radius: 5px;
`,Hu=si.div`
  position: absolute;
  width: 15%;
  height: 5%;
  background: #37474F;
  top: 12%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &::before {
    content: '';
    color: #ECEFF1;
    font-size: 12px;
  }
`,Bu=e=>{let{rotation:t=0}=e;return(0,yi.jsxs)(Uu,{style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)(Vu,{}),(0,yi.jsx)(Wu,{}),(0,yi.jsx)(qu,{$front:!0,$left:!0}),(0,yi.jsx)(qu,{$front:!0,$right:!0}),(0,yi.jsx)(qu,{$back:!0,$left:!0}),(0,yi.jsx)(qu,{$back:!0,$right:!0})]})},Uu=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  transition: transform 0.3s ease;
`,Vu=si.div`
  width: 60%;
  height: 40%;
  background-color: #8b4513;
  position: absolute;
  top: 40%;
  left: 20%;
  z-index: 2;
`,Wu=si.div`
  width: 50%;
  height: 60%;
  background-color: #654321;
  position: absolute;
  top: 0;
  left: 25%;
  z-index: 1;
`,qu=si.div`
  width: 8%;
  height: 40%;
  background-color: #5D4037;
  position: absolute;
  bottom: 0;
  
  ${e=>e.$front&&e.$left&&"left: 20%;"}
  ${e=>e.$front&&e.$right&&"right: 20%;"}
  ${e=>e.$back&&e.$left&&"left: 15%; height: 45%;"}
  ${e=>e.$back&&e.$right&&"right: 15%; height: 45%;"}
`,Ku=()=>(0,yi.jsxs)(Yu,{children:[(0,yi.jsx)(Qu,{}),(0,yi.jsx)(Gu,{})]}),Yu=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Qu=si.div`
  width: 80%;
  height: 80%;
  background-color: #6D4C41;
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
  position: absolute;
  top: 10%;
  left: 10%;
`,Gu=si.div`
  width: 50%;
  height: 50%;
  background-color: #8D6E63;
  border-radius: 50%;
  position: absolute;
  top: 25%;
  left: 25%;
`,Xu=()=>(0,yi.jsxs)(Ju,{children:[(0,yi.jsx)(Zu,{}),(0,yi.jsx)(ec,{}),(0,yi.jsx)(tc,{})]}),Ju=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Zu=si.div`
  width: 70%;
  height: 70%;
  background-color: #1a1a1a;
  border-radius: 10%;
  position: absolute;
  top: 15%;
  left: 15%;
`,ec=si.div`
  width: 70%;
  height: 25%;
  background-color: #ff4500; 
  border-radius: 10% 10% 0 0;
  position: absolute;
  top: 0;
  left: 15%;
`,tc=si.div`
  width: 15%;
  height: 50%;
  background-color: #1a1a1a;
  position: absolute;
  top: 25%;
  left: 0;

  &::after {
    content: '';
    position: absolute;
    width: 15%;
    height: 50%;
    background-color: #1a1a1a;
    right: -85%;
  }
`,nc=()=>(0,yi.jsxs)(rc,{children:[(0,yi.jsx)(oc,{}),(0,yi.jsx)(ic,{}),(0,yi.jsx)(ac,{})]}),rc=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,oc=si.div`
  width: 70%;
  height: 70%;
  background-color: #00BCD4;
  border-radius: 10%;
  position: absolute;
  top: 15%;
  left: 15%;
`,ic=si.div`
  width: 70%;
  height: 20%;
  background-color: #0097A7;
  border-radius: 10% 10% 0 0;
  position: absolute;
  top: 0;
  left: 15%;
`,ac=si.div`
  width: 40%;
  height: 40%;
  background-color: #B2EBF2;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  left: 30%;
`,sc=()=>(0,yi.jsxs)(lc,{children:[(0,yi.jsx)(uc,{}),(0,yi.jsx)(cc,{}),(0,yi.jsx)(cc,{$right:!0})]}),lc=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,uc=si.div`
  width: 70%;
  height: 40%;
  background-color: #5D4037;
  border-radius: 10%;
  position: absolute;
  bottom: 15%;
  left: 15%;
`,cc=si.div`
  width: 5%;
  height: 65%;
  background-color: #212121;
  position: absolute;
  top: 0;
  ${e=>e.$right?"left: 75%;":"left: 20%;"}
  transform-origin: top;
  transform: rotate(${e=>e.$right?"-15deg":"15deg"});
`,dc=()=>(0,yi.jsx)(fc,{children:(0,yi.jsxs)(hc,{children:[(0,yi.jsx)(pc,{children:[...Array(10)].map((e,t)=>(0,yi.jsx)(gc,{children:[...Array(10)].map((e,t)=>(0,yi.jsx)(mc,{},t))},t))}),(0,yi.jsxs)(vc,{children:[(0,yi.jsx)(bc,{}),(0,yi.jsx)(bc,{}),(0,yi.jsx)(bc,{}),(0,yi.jsx)(bc,{})]})]})}),fc=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,hc=si.div`
  width: 80%;
  height: 80%;
  border: 5px solid #424242;
  border-radius: 5px;
  position: absolute;
  top: 10%;
  left: 10%;
  overflow: hidden;
`,pc=si.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`,gc=si.div`
  display: flex;
  flex: 1;
`,mc=si.div`
  flex: 1;
  border-right: 1px solid #424242;
  border-bottom: 1px solid #424242;
  
  &:last-child {
    border-right: none;
  }
`,vc=si.div`
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
`,bc=si.div`
  position: absolute;
  width: 10%;
  height: 10%;
  background-color: #424242;
  
  &:nth-child(1) {
    bottom: 0;
    left: 0;
    border-radius: 0 0 0 5px;
  }
  &:nth-child(2) {
    bottom: 0;
    right: 0;
    border-radius: 0 0 5px 0;
  }
  &:nth-child(3) {
    top: 0;
    left: 0;
    border-radius: 0 5px 0 0;
  }
  &:nth-child(4) {
    top: 0;
    right: 0;
    border-radius: 5px 0 0 0;
  }
`,yc=()=>(0,yi.jsxs)(xc,{children:[(0,yi.jsx)(wc,{}),(0,yi.jsx)(Sc,{})]}),xc=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,wc=si.div`
  width: 70%;
  height: 70%;
  background-color: #e0e0e0;
  border-radius: 10%;
  position: absolute;
  top: 15%;
  left: 15%;
  box-shadow: 0 0 10% rgba(0, 0, 0, 0.1);
`,Sc=si.div`
  width: 70%;
  height: 20%;
  background-color: #a0a0a0;
  border-radius: 10% 10% 0 0;
  position: absolute;
  top: 0;
  left: 15%;
`,kc=()=>(0,yi.jsxs)(Ec,{children:[(0,yi.jsx)(Cc,{}),(0,yi.jsx)(Oc,{}),(0,yi.jsx)(jc,{}),(0,yi.jsx)(Tc,{children:[...Array(5)].map((e,t)=>(0,yi.jsx)(Pc,{},t))})]}),Ec=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Cc=si.div`
  width: 70%;
  height: 70%;
  background-color: #607D8B;
  border-radius: 5%;
  position: absolute;
  top: 15%;
  left: 15%;
  z-index: 2;
`,Oc=si.div`
  width: 70%;
  height: 20%;
  background-color: #455A64;
  border-radius: 5% 5% 0 0;
  position: absolute;
  top: 0;
  left: 15%;
  z-index: 1;
`,jc=si.div`
  width: 20%;
  height: 20%;
  background-color: #263238;
  border-radius: 50%;
  position: absolute;
  bottom: 25%;
  left: 40%;
  z-index: 1;
`,Tc=si.div`
  position: absolute;
  width: 100%;
  height: 100%;
`,Pc=si.div`
  width: 8%;
  height: 8%;
  background-color: #212121;
  border-radius: 50%;
  position: absolute;
  bottom: 10%;
  
  &:nth-child(1) { left: 15%; }
  &:nth-child(2) { right: 15%; }
  &:nth-child(3) { left: 25%; bottom: 15%; }
  &:nth-child(4) { right: 25%; bottom: 15%; }
  &:nth-child(5) { left: 46%; bottom: 5%; }
`,Dc=()=>(0,yi.jsxs)(Nc,{children:[(0,yi.jsx)(Rc,{}),(0,yi.jsx)(Lc,{}),(0,yi.jsx)(_c,{})]}),Nc=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Rc=si.div`
  width: 60%;
  height: 50%;
  background-color: #A1887F;
  border-radius: 5%;
  position: absolute;
  top: 25%;
  left: 20%;
  z-index: 2;
`,Lc=si.div`
  width: 60%;
  height: 35%;
  background-color: #8D6E63;
  border-radius: 5% 5% 0 0;
  position: absolute;
  top: 0;
  left: 20%;
  z-index: 1;
`,_c=si.div`
  width: 80%;
  height: 12%;
  background-color: #5D4037;
  border-radius: 50% / 100%;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
  position: absolute;
  bottom: 0;
  left: 10%;
`,$c=()=>(0,yi.jsxs)(zc,{children:[(0,yi.jsx)(Ic,{}),(0,yi.jsx)(Ac,{})]}),zc=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Ic=si.div`
  width: 60%;
  height: 60%;
  background-color: #8b4513;
  border-radius: 5%;
  position: absolute;
  top: 20%;
  left: 20%;
`,Ac=si.div`
  width: 20%;
  height: 60%;
  background-color: #654321;
  position: absolute;
  top: 0;
  left: 40%;
`,Fc=()=>(0,yi.jsxs)(Mc,{children:[(0,yi.jsx)(Hc,{}),(0,yi.jsx)(Bc,{$left:!0}),(0,yi.jsx)(Bc,{$right:!0})]}),Mc=si.div`
  width: 100%;
  height: 20%;
  position: relative;
`,Hc=si.div`
  width: 90%;
  height: 70%;
  background-color: #8B4513;
  border: 2% solid #654321;
  position: absolute;
  top: 15%;
  left: 5%;
`,Bc=si.div`
  width: 7%;
  height: 100%;
  background-color: #654321;
  position: absolute;
  top: 0;
  ${e=>e.$left?"left: 0;":"right: 0;"}
`,Uc=()=>(0,yi.jsxs)(Vc,{children:[(0,yi.jsx)(Wc,{}),(0,yi.jsx)(qc,{})]}),Vc=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Wc=si.div`
  width: 80%;
  height: 80%;
  background-color: #D2B48C;
  border: 2.5% solid #A0522D;
  clip-path: polygon(0 0, 100% 0, 0 100%);
  position: absolute;
  top: 10%;
  left: 10%;
`,qc=si.div`
  width: 4%;
  height: 90%;
  background-color: #A0522D;
  position: absolute;
  top: 5%;
  left: 5%;
  transform: rotate(45deg);
  transform-origin: top left;
`,Kc=()=>(0,yi.jsxs)(Yc,{children:[(0,yi.jsx)(Qc,{}),(0,yi.jsx)(Gc,{$left:!0}),(0,yi.jsx)(Gc,{$right:!0})]}),Yc=si.div`
  width: 100%;
  height: 15%;
  position: relative;
`,Qc=si.div`
  width: 90%;
  height: 60%;
  background-color: #C0C0C0;
  box-shadow: 0 2% 5% rgba(0,0,0,0.2);
  position: absolute;
  top: 20%;
  left: 5%;
`,Gc=si.div`
  width: 3%;
  height: 100%;
  background-color: #A9A9A9;
  position: absolute;
  top: 0;
  ${e=>e.$left?"left: 0;":"right: 0;"}
`,Xc=e=>{let{rotation:t=0}=e;const n=t%180!==0;return(0,yi.jsxs)(Jc,{$vertical:n,style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)(Zc,{}),(0,yi.jsx)(ed,{}),(0,yi.jsx)(td,{$left:!0}),(0,yi.jsx)(td,{$right:!0})]})},Jc=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: ${e=>{let{$vertical:t}=e;return t?"1 / 2":"2 / 1"}};
  position: relative;
  transition: transform 0.3s ease;
`,Zc=si.div`
  width: 90%;
  height: 65%;
  background-color: #8b4513;
  border-radius: 8%;
  position: absolute;
  top: 35%;
  left: 5%;
`,ed=si.div`
  width: 90%;
  height: 15%;
  background-color: #654321;
  border-radius: 8% 8% 0 0;
  position: absolute;
  top: 20%;
  left: 5%;
`,td=si.div`
  width: 10%;
  height: 50%;
  background-color: #654321;
  border-radius: 4%;
  position: absolute;
  top: 25%;
  ${e=>e.$left?"left: 0;":"right: 0;"}
`,nd=e=>{let{rotation:t=0}=e;return(0,yi.jsxs)(rd,{style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)(od,{}),(0,yi.jsx)(id,{})]})},rd=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  transition: transform 0.3s ease;
`,od=si.div`
  width: 65%;
  height: 65%;
  background-color: #5d4037;
  border-radius: 8%;
  position: absolute;
  top: 35%;
  left: 35%;
`,id=si.div`
  width: 35%;
  height: 35%;
  background-color: #4e342e;
  border-radius: 0 8% 8% 0;
  position: absolute;
  top: 65%;
  left: 0;
`,ad=e=>{let{rotation:t=0}=e;const n=t%180!==0;return(0,yi.jsxs)(sd,{$vertical:n,style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)(ld,{}),(0,yi.jsx)(ud,{}),(0,yi.jsx)(cd,{})]})},sd=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: ${e=>{let{$vertical:t}=e;return t?"1 / 2":"2 / 1"}};
  position: relative;
  transition: transform 0.3s ease;
`,ld=si.div`
  width: 90%;
  height: 70%;
  background-color: #3e2723;
  border-radius: 4%;
  position: absolute;
  top: 30%;
  left: 5%;
`,ud=si.div`
  width: 90%;
  height: 15%;
  background-color: #4e342e;
  border-radius: 4% 4% 0 0;
  position: absolute;
  top: 15%;
  left: 5%;
`,cd=si.div`
  width: 3%;
  height: 70%;
  background-color: #5d4037;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
`,dd=e=>{let{rotation:t=0}=e;const n=t%180!==0;return(0,yi.jsxs)(fd,{$vertical:n,style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)(hd,{}),(0,yi.jsx)(pd,{})]})},fd=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: ${e=>{let{$vertical:t}=e;return t?"1 / 2":"2 / 1"}};
  position: relative;
  transition: transform 0.3s ease;
`,hd=si.div`
  width: 90%;
  height: 70%;
  background-color: #2c3e50;
  border-radius: 12%;
  position: absolute;
  top: 30%;
  left: 5%;
`,pd=si.div`
  width: 90%;
  height: 12%;
  background-color: #34495e;
  border-radius: 12% 12% 0 0;
  position: absolute;
  top: 18%;
  left: 5%;
`,gd=e=>{let{rotation:t=0}=e;const n=t%180!==0;return(0,yi.jsxs)(md,{$vertical:n,style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)(vd,{}),(0,yi.jsx)(bd,{}),(0,yi.jsx)(yd,{})]})},md=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: ${e=>{let{$vertical:t}=e;return t?"1 / 2":"2 / 1"}};
  position: relative;
  transition: transform 0.3s ease;
`,vd=si.div`
  width: 90%;
  height: 75%;
  background-color: #6d4c41;
  border-radius: 4%;
  position: absolute;
  top: 25%;
  left: 5%;
`,bd=si.div`
  width: 90%;
  height: 12%;
  background-color: #5d4037;
  border-radius: 4% 4% 0 0;
  position: absolute;
  top: 13%;
  left: 5%;
`,yd=si.div`
  width: 25%;
  height: 30%;
  background-color: #8d6e63;
  border-radius: 8%;
  position: absolute;
  top: 5%;
  left: 10%;
`,xd=e=>{let{rotation:t=0}=e;return(0,yi.jsxs)(wd,{style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)(Sd,{}),(0,yi.jsx)(kd,{$left:!0,$top:!0}),(0,yi.jsx)(kd,{$right:!0,$top:!0}),(0,yi.jsx)(kd,{$left:!0,$bottom:!0}),(0,yi.jsx)(kd,{$right:!0,$bottom:!0})]})},wd=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  transition: transform 0.3s ease;
`,Sd=si.div`
  width: 85%;
  height: 85%;
  background-color: #8B4513;
  border: 2% solid #654321;
  border-radius: 5%;
  position: absolute;
  top: 7.5%;
  left: 7.5%;
`,kd=si.div`
  width: 7%;
  height: 7%;
  background-color: #654321;
  position: absolute;
  top: ${e=>e.$top?"3%":e.$bottom?"88%":"0"};
  left: ${e=>e.$left?"3%":e.$right?"88%":"0"};
`,Ed=e=>{let{rotation:t=0}=e;return(0,yi.jsxs)(Cd,{style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)(Od,{}),(0,yi.jsx)(jd,{})]})},Cd=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  transition: transform 0.3s ease;
`,Od=si.div`
  width: 80%;
  height: 80%;
  background-color: #D2B48C;
  border-radius: 50%;
  border: 2% solid #A0522D;
  position: absolute;
  top: 10%;
  left: 10%;
`,jd=si.div`
  width: 10%;
  height: 10%;
  background-color: #A0522D;
  border-radius: 50%;
  position: absolute;
  top: 45%;
  left: 45%;
`,Td=e=>{let{rotation:t=0}=e;return(0,yi.jsxs)(Pd,{style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)(Dd,{}),(0,yi.jsx)(Nd,{}),(0,yi.jsx)(Rd,{})]})},Pd=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  transition: transform 0.3s ease;
`,Dd=si.div`
  width: 55%;
  height: 80%;
  background-color: #6D4C41;
  position: absolute;
  top: 10%;
  left: 5%;
`,Nd=si.div`
  width: 35%;
  height: 65%;
  background-color: #5D4037;
  position: absolute;
  top: 17%;
  right: 5%;
`,Rd=si.div`
  width: 3%;
  height: 65%;
  background-color: #4E342E;
  position: absolute;
  top: 17%;
  right: 40%;
`,Ld=e=>{let{rotation:t=0}=e;return(0,yi.jsxs)(_d,{style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)($d,{}),(0,yi.jsx)(zd,{})]})},_d=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  transition: transform 0.3s ease;
`,$d=si.div`
  width: 85%;
  height: 85%;
  background: rgba(200, 220, 255, 0.3);
  border: 1.5% solid #C0C0C0;
  backdrop-filter: blur(2px);
  position: absolute;
  top: 7.5%;
  left: 7.5%;
`,zd=si.div`
  width: 65%;
  height: 65%;
  border: 2% solid #A9A9A9;
  position: absolute;
  top: 17.5%;
  left: 17.5%;
`,Id=e=>{let{rotation:t=0}=e;return(0,yi.jsxs)(Ad,{style:{transform:`rotate(${t}deg)`},children:[(0,yi.jsx)(Fd,{}),(0,yi.jsx)(Md,{})]})},Ad=si.div`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  position: relative;
  transition: transform 0.3s ease;
`,Fd=si.div`
  width: 90%;
  height: 80%;
  background-color: #2F4F4F;
  position: absolute;
  top: 10%;
  left: 5%;
`,Md=si.div`
  width: 90%;
  height: 15%;
  background-color: #1E3A3A;
  position: absolute;
  top: 75%;
  left: 5%;
`,Hd=()=>(0,yi.jsx)(Bd,{children:(0,yi.jsxs)(Ud,{children:[(0,yi.jsx)(Vd,{}),(0,yi.jsx)(Vd,{}),(0,yi.jsx)(Vd,{}),(0,yi.jsx)(Vd,{})]})}),Bd=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Ud=si.div`
  width: 90%;
  height: 95%;
  background-color: #DEB887;
  position: absolute;
  top: 2.5%;
  left: 5%;
`,Vd=si.div`
  width: 85%;
  height: 1.5%;
  background-color: #8B4513;
  position: absolute;
  left: 5%;
  
  &:nth-child(1) { top: 15%; }
  &:nth-child(2) { top: 35%; }
  &:nth-child(3) { top: 55%; }
  &:nth-child(4) { top: 75%; }
`,Wd=()=>(0,yi.jsx)(qd,{children:(0,yi.jsxs)(Kd,{children:[(0,yi.jsx)(Yd,{$left:!0}),(0,yi.jsx)(Yd,{$right:!0}),(0,yi.jsx)(Qd,{$left:!0}),(0,yi.jsx)(Qd,{$right:!0})]})}),qd=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Kd=si.div`
  width: 90%;
  height: 95%;
  background-color: #8B4513;
  border: 3% solid #654321;
  position: absolute;
  top: 2.5%;
  left: 5%;
`,Yd=si.div`
  width: 45%;
  height: 95%;
  background-color: #A0522D;
  position: absolute;
  top: 2.5%;
  ${e=>e.$left?"left: 2.5%;":"right: 2.5%;"}
  border: 1.5% solid #654321;
`,Qd=si.div`
  width: 5%;
  height: 5%;
  background-color: #C0C0C0;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  ${e=>e.$left?"left: 10%;":"right: 10%;"}
  transform: translateY(-50%);
`,Gd=()=>(0,yi.jsx)(Xd,{children:(0,yi.jsxs)(Jd,{children:[(0,yi.jsx)(Zd,{}),(0,yi.jsx)(ef,{}),(0,yi.jsx)(ef,{}),(0,yi.jsx)(ef,{}),(0,yi.jsx)(tf,{})]})}),Xd=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Jd=si.div`
  width: 90%;
  height: 95%;
  background-color: #F5DEB3;
  position: absolute;
  top: 2.5%;
  left: 5%;
`,Zd=si.div`
  width: 85%;
  height: 1.5%;
  background-color: #A0522D;
  position: absolute;
  top: 15%;
  left: 7.5%;
`,ef=si.div`
  width: 13%;
  height: 13%;
  border-radius: 50% 50% 0 0;
  border: 1.5% solid #696969;
  position: absolute;
  top: 17%;
  
  &:nth-child(2) { left: 20%; }
  &:nth-child(3) { left: 50%; }
  &:nth-child(4) { left: 80%; }
`,tf=si.div`
  width: 40%;
  height: 90%;
  background-color: rgba(245, 222, 179, 0.7);
  border: 1.5% solid #A0522D;
  position: absolute;
  top: 5%;
  right: 5%;
`,nf=()=>(0,yi.jsx)(rf,{children:(0,yi.jsxs)(of,{children:[(0,yi.jsx)(af,{}),(0,yi.jsx)(sf,{})]})}),rf=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,of=si.div`
  width: 90%;
  height: 95%;
  background-color: #2F4F4F;
  position: absolute;
  top: 2.5%;
  left: 5%;
`,af=si.div`
  width: 45%;
  height: 95%;
  background: linear-gradient(135deg, #E6E6FA 25%, #708090 50%, #E6E6FA 75%);
  position: absolute;
  top: 2.5%;
  left: 2.5%;
`,sf=si.div`
  width: 45%;
  height: 95%;
  background-color: #708090;
  position: absolute;
  top: 2.5%;
  right: 2.5%;
`,lf=()=>(0,yi.jsx)(uf,{children:(0,yi.jsxs)(cf,{children:[(0,yi.jsx)(df,{}),(0,yi.jsx)(df,{}),(0,yi.jsx)(df,{}),(0,yi.jsx)(ff,{})]})}),uf=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,cf=si.div`
  width: 90%;
  height: 95%;
  background-color: #D2B48C;
  position: absolute;
  top: 2.5%;
  left: 5%;
`,df=si.div`
  width: 85%;
  height: 1.5%;
  background-color: #A0522D;
  position: absolute;
  left: 5%;
  
  &:nth-child(1) { top: 20%; }
  &:nth-child(2) { top: 45%; }
  &:nth-child(3) { top: 70%; }
`,ff=si.div`
  width: 40%;
  height: 90%;
  background-color: rgba(210, 180, 140, 0.7);
  border: 1.5% solid #A0522D;
  position: absolute;
  top: 5%;
  right: 5%;
`,hf=()=>(0,yi.jsxs)(pf,{children:[(0,yi.jsx)(gf,{}),(0,yi.jsxs)(mf,{children:[(0,yi.jsx)(vf,{}),(0,yi.jsxs)(bf,{children:[(0,yi.jsx)(yf,{color:"#FF0000"}),(0,yi.jsx)(yf,{color:"#00FF00"}),(0,yi.jsx)(yf,{color:"#0000FF"})]})]})]}),pf=si.div`
  width: 100%;
  height: 100%;
  background-color: #1A1A1A;
  border-radius: 8%;
  position: relative;
  border: 3% solid #FFD700;
`,gf=si.div`
  width: 75%;
  height: 40%;
  background-color: #000080;
  border: 2% solid #C0C0C0;
  position: absolute;
  top: 10%;
  left: 12.5%;
  &::before {
    content: 'PAC-MAN';
    color: #FFFF00;
    font-family: 'Arial', sans-serif;
    font-size: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,mf=si.div`
  width: 85%;
  height: 20%;
  background-color: #333333;
  position: absolute;
  bottom: 10%;
  left: 7.5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`,vf=si.div`
  width: 20%;
  height: 20%;
  background-color: #808080;
  border-radius: 50%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    width: 40%;
    height: 40%;
    background-color: #000000;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,bf=si.div`
  display: flex;
  gap: 6%;
`,yf=si.div`
  width: 12%;
  height: 12%;
  background-color: ${e=>e.color||"#FF0000"};
  border-radius: 50%;
`,xf=()=>(0,yi.jsxs)(wf,{children:[(0,yi.jsx)(Sf,{}),(0,yi.jsx)(kf,{}),(0,yi.jsxs)(Ef,{children:[(0,yi.jsx)(Cf,{}),(0,yi.jsx)(Cf,{})]})]}),wf=si.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(145deg, #E60000, #990000);
  border-radius: 10%;
  position: relative;
  box-shadow: 0 3% 8% rgba(0,0,0,0.3);
`,Sf=si.div`
  width: 85%;
  height: 40%;
  background-color: #000000;
  border: 2% solid #333333;
  position: absolute;
  top: 10%;
  left: 7.5%;
  &::before {
    content: 'RACING';
    color: #FFFFFF;
    font-family: 'Arial', sans-serif;
    font-size: 70%;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,kf=si.div`
  width: 25%;
  height: 25%;
  border: 3% solid #333333;
  border-radius: 50%;
  position: absolute;
  top: 55%;
  left: 20%;
  &::before {
    content: '';
    position: absolute;
    width: 25%;
    height: 25%;
    background-color: #333333;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,Ef=si.div`
  display: flex;
  gap: 10%;
  position: absolute;
  bottom: 10%;
  left: 25%;
`,Cf=si.div`
  width: 13%;
  height: 7%;
  background-color: #333333;
  border-radius: 20%;
`,Of=()=>(0,yi.jsxs)(jf,{children:[(0,yi.jsx)(Tf,{}),(0,yi.jsx)(Pf,{})]}),jf=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Tf=si.div`
  width: 80%;
  height: 80%;
  background-color: #8B4513;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 10%;
  box-shadow: 0 4% 10% rgba(0,0,0,0.2);
`,Pf=si.div`
  width: 65%;
  height: 12%;
  background-color: #654321;
  border-radius: 8%;
  position: absolute;
  bottom: 5%;
  left: 17.5%;
`,Df=()=>(0,yi.jsxs)(Nf,{children:[(0,yi.jsx)(Rf,{}),(0,yi.jsx)(Lf,{})]}),Nf=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Rf=si.div`
  width: 80%;
  height: 80%;
  background-color: #E0E0E0;
  border-radius: 8%;
  position: absolute;
  top: 10%;
  left: 10%;
  box-shadow: 0 4% 10% rgba(0,0,0,0.1);
`,Lf=si.div`
  width: 75%;
  height: 8%;
  background-color: #A0A0A0;
  border-radius: 4%;
  position: absolute;
  bottom: 5%;
  left: 12.5%;
`,_f=()=>(0,yi.jsxs)($f,{children:[(0,yi.jsx)(zf,{}),(0,yi.jsx)(If,{})]}),$f=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,zf=si.div`
  width: 80%;
  height: 80%;
  background-color: #FF6B6B;
  clip-path: polygon(
    50% 0%, 
    61% 35%, 
    98% 35%, 
    68% 57%, 
    79% 91%, 
    50% 70%, 
    21% 91%, 
    32% 57%, 
    2% 35%, 
    39% 35%
  );
  position: absolute;
  top: 10%;
  left: 10%;
`,If=si.div`
  width: 25%;
  height: 25%;
  background-color: #FFE66D;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Af=()=>(0,yi.jsxs)(Ff,{children:[(0,yi.jsxs)(Mf,{children:[(0,yi.jsx)(Hf,{}),(0,yi.jsx)(Bf,{$position:"top"}),(0,yi.jsx)(Bf,{$position:"right"}),(0,yi.jsx)(Bf,{$position:"bottom"}),(0,yi.jsx)(Bf,{$position:"left"})]}),(0,yi.jsxs)(Uf,{children:[(0,yi.jsx)(Vf,{}),(0,yi.jsx)(Vf,{})]})]}),Ff=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Mf=si.div`
  width: 85%;
  height: 85%;
  border: 4% solid #E74C3C;
  border-radius: 50%;
  position: absolute;
  top: 7.5%;
  left: 7.5%;
`,Hf=si.div`
  width: 20%;
  height: 20%;
  background-color: #2C3E50;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Bf=si.div`
  width: 15%;
  height: 30%;
  background-color: #E74C3C;
  border-radius: 8%;
  position: absolute;
  ${e=>{switch(e.$position){case"top":return"top: 0; left: 50%; transform: translateX(-50%);";case"right":return"top: 50%; right: 0; transform: translateY(-50%);";case"bottom":return"bottom: 0; left: 50%; transform: translateX(-50%);";case"left":return"top: 50%; left: 0; transform: translateY(-50%);";default:return""}}}
`,Uf=si.div`
  display: flex;
  gap: 7%;
  position: absolute;
  bottom: -10%;
  left: 50%;
  transform: translateX(-50%);
`,Vf=si.div`
  width: 8%;
  height: 8%;
  background-color: #3498DB;
  border-radius: 50%;
`,Wf=()=>(0,yi.jsxs)(qf,{children:[(0,yi.jsxs)(Kf,{children:[(0,yi.jsx)(Yf,{}),(0,yi.jsx)(Qf,{$rotate:"0"}),(0,yi.jsx)(Qf,{$rotate:"45deg"}),(0,yi.jsx)(Qf,{$rotate:"90deg"}),(0,yi.jsx)(Qf,{$rotate:"135deg"})]}),(0,yi.jsx)(Gf,{$position:"top"}),(0,yi.jsx)(Gf,{$position:"bottom"})]}),qf=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Kf=si.div`
  width: 80%;
  height: 80%;
  border: 6% solid #333;
  border-radius: 50%;
  position: absolute;
  top: 10%;
  left: 10%;
`,Yf=si.div`
  width: 15%;
  height: 15%;
  background-color: #555;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,Qf=si.div`
  width: 1.5%;
  height: 35%;
  background-color: #444;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(${e=>e.$rotate||"0"});
  transform-origin: center top;
`,Gf=si.div`
  width: 25%;
  height: 8%;
  background-color: #222;
  border-radius: 4%;
  position: absolute;
  top: ${e=>"top"===e.$position?"5%":"87%"};
  left: 50%;
  transform: translateX(-50%);
`,Xf=()=>(0,yi.jsxs)(Jf,{children:[(0,yi.jsxs)(Zf,{children:[(0,yi.jsx)(eh,{}),(0,yi.jsx)(th,{})]}),(0,yi.jsx)(nh,{}),(0,yi.jsx)(rh,{})]}),Jf=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,Zf=si.div`
  width: 60%;
  height: 50%;
  background-color: #333;
  border-radius: 3%;
  position: absolute;
  top: 10%;
  left: 20%;
`,eh=si.div`
  width: 90%;
  height: 80%;
  background-color: #0066CC;
  border: 1.5% solid #000;
  position: absolute;
  top: 10%;
  left: 5%;
  &::after {
    content: '';
    color: white;
    font-size: 40%;
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
`,th=si.div`
  width: 15%;
  height: 5%;
  background-color: #555;
  position: absolute;
  bottom: -5%;
  left: 42.5%;
`,nh=si.div`
  width: 50%;
  height: 15%;
  background-color: #444;
  border-radius: 2%;
  position: absolute;
  bottom: 25%;
  left: 25%;
`,rh=si.div`
  width: 12.5%;
  height: 20%;
  background-color: #666;
  border-radius: 8% 8% 0 0;
  position: absolute;
  bottom: 15%;
  right: 20%;
`,oh=()=>(0,yi.jsxs)(ih,{children:[(0,yi.jsxs)(ah,{children:[(0,yi.jsx)(sh,{}),(0,yi.jsx)(lh,{})]}),(0,yi.jsx)(uh,{children:(0,yi.jsx)(ch,{})})]}),ih=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,ah=si.div`
  width: 30%;
  height: 65%;
  background-color: #1A1A1A;
  border: 1.5% solid #FF4500;
  position: absolute;
  bottom: 0;
  left: 10%;
`,sh=si.div`
  width: 2.5%;
  height: 55%;
  background: linear-gradient(to bottom, #FF0000, #00FF00, #0000FF);
  position: absolute;
  right: -3.5%;
  top: 10%;
`,lh=si.div`
  width: 25%;
  height: 5%;
  background-color: #333;
  position: absolute;
  top: 10%;
  left: 2.5%;
  &::after, &::before {
    content: '';
    position: absolute;
    width: 25%;
    height: 5%;
    background-color: #333;
  }
  &::after { top: 15%; }
  &::before { top: 30%; }
`,uh=si.div`
  width: 50%;
  height: 55%;
  background-color: #111;
  border: 2% solid #FF4500;
  position: absolute;
  top: 10%;
  right: 10%;
`,ch=si.div`
  width: 90%;
  height: 85%;
  background-color: #000;
  border: 1.5% solid #FF4500;
  position: absolute;
  top: 5%;
  left: 5%;
  &::after {
    content: '';
    color: #FF4500;
    font-size: 40%;
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
`,dh=()=>(0,yi.jsxs)(fh,{children:[(0,yi.jsxs)(hh,{children:[(0,yi.jsx)(ph,{}),(0,yi.jsx)(gh,{})]}),(0,yi.jsx)(mh,{})]}),fh=si.div`
  width: 100%;
  height: 100%;
  position: relative;
`,hh=si.div`
  width: 85%;
  height: 65%;
  background-color: #E0E0E0;
  border-radius: 3% 3% 0 0;
  position: absolute;
  bottom: 0;
  left: 7.5%;
`,ph=si.div`
  width: 90%;
  height: 60%;
  background-color: #333;
  border-radius: 2%;
  position: absolute;
  top: 10%;
  left: 5%;
`,gh=si.div`
  width: 30%;
  height: 15%;
  background-color: #555;
  border-radius: 1.5%;
  position: absolute;
  bottom: 5%;
  left: 35%;
`,mh=si.div`
  width: 85%;
  height: 75%;
  background-color: #0066CC;
  border: 2% solid #E0E0E0;
  border-bottom: none;
  border-radius: 3% 3% 0 0;
  position: absolute;
  top: 0;
  left: 7.5%;
  &::after {
    content: '';
    color: white;
    font-size: 50%;
    position: absolute;
    bottom: 5%;
    right: 5%;
  }
`,vh=()=>(0,yi.jsxs)(bh,{children:[(0,yi.jsxs)(xh,{children:[(0,yi.jsx)(wh,{$left:!0}),(0,yi.jsx)(wh,{$right:!0})]}),(0,yi.jsx)(yh,{})]}),bh=si.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`,yh=si.div`
  width: 60%;
  height: 25%;
  background-color: #A0522D;
  border-radius: 0 0 5px 5px;
  position: relative;
`,xh=si.div`
  width: 40%;
  height: 50%;
  background-color: #2E8B57;
  border-radius: 10px;
  position: relative;
  margin-bottom: -5%;
`,wh=si.div`
  width: 30%;
  height: 40%;
  background-color: #2E8B57;
  border-radius: 5px;
  position: absolute;
  top: 30%;
  ${e=>e.$left&&"left: -20%;"}
  ${e=>e.$right&&"right: -20%;"}
`,Sh=()=>(0,yi.jsxs)(kh,{children:[(0,yi.jsx)(Eh,{}),(0,yi.jsx)(Ch,{}),(0,yi.jsx)(Oh,{}),(0,yi.jsx)(jh,{})]}),kh=si.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`,Eh=si.div`
  width: 60%;
  height: 25%;
  background-color: #CD853F;
  border-radius: 0 0 10% 10%;
  position: relative;
`,Ch=si.div`
  width: 6%;
  height: 50%;
  background-color: #228B22;
  position: absolute;
  bottom: 25%;
  left: 50%;
  transform: translateX(-50%);
`,Oh=si.div`
  width: 60%;
  height: 20%;
  position: absolute;
  bottom: 40%;
  left: 20%;

  &::before, &::after {
    content: '';
    position: absolute;
    width: 25%;
    height: 15%;
    background-color: #228B22;
    border-radius: 50% 0 50% 50%;
  }

  &::before {
    transform: rotate(-30deg);
    left: 0;
  }

  &::after {
    transform: rotate(30deg) scaleX(-1);
    right: 0;
  }
`,jh=si.div`
  width: 30%;
  height: 30%;
  background-color: #FF69B4;
  border-radius: 50%;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);

  &::before {
    content: '';
    position: absolute;
    width: 33%;
    height: 33%;
    background-color: #FFD700;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,Th=()=>(0,yi.jsxs)(Ph,{children:[(0,yi.jsx)(Dh,{}),(0,yi.jsx)(Nh,{$big:!0}),(0,yi.jsx)(Nh,{$medium:!0,$rotate:"30deg"}),(0,yi.jsx)(Nh,{$small:!0,$rotate:"-20deg"})]}),Ph=si.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`,Dh=si.div`
  width: 60%;
  height: 30%;
  background-color: #D2B48C;
  border-radius: 0 0 15% 15%;
  position: relative;
`,Nh=si.div`
  width: ${e=>e.$big?"50%":e.$medium?"35%":"25%"};
  height: ${e=>e.$big?"30%":e.$medium?"20%":"15%"};
  background-color: #3CB371;
  border-radius: 50% 0 50% 50%;
  position: absolute;
  bottom: ${e=>e.$big?"30%":e.$medium?"45%":"40%"};
  left: ${e=>e.$big?"25%":e.$medium?"40%":"15%"};
  transform: rotate(${e=>e.$rotate||"0"});
`,Rh=()=>(0,yi.jsxs)(Lh,{children:[(0,yi.jsx)(_h,{}),(0,yi.jsx)($h,{})]}),Lh=si.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,_h=si.div`
  width: 60%;
  height: 80%;
  background: 
    linear-gradient(45deg, #FFD700 25%, transparent 25%) -25% 0,
    linear-gradient(-45deg, #FFD700 25%, transparent 25%) -25% 0,
    linear-gradient(45deg, transparent 75%, #FFD700 75%),
    linear-gradient(-45deg, transparent 75%, #FFD700 75%);
  background-size: 50% 50%;
  background-color: #8B0000;
`,$h=si.div`
  width: 80%;
  height: 90%;
  border: 3% solid #FFD700;
  position: absolute;
  pointer-events: none;
`,zh=()=>(0,yi.jsx)(Ih,{children:(0,yi.jsx)(Ah,{})}),Ih=si.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`,Ah=si.div`
  width: 80%;
  height: 80%;
  background: 
    linear-gradient(to right, #333 20%, transparent 20%, transparent 80%, #333 80%),
    linear-gradient(to bottom, #333 20%, transparent 20%, transparent 80%, #333 80%);
  background-size: 40% 40%;
  border: 2px solid #333;
`,Fh=si.div`
  width: 300px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  overflow-y: auto;
  padding: 15px;
  height: 100%;
`,Mh=si.h3`
  color: #616161;
  margin-bottom: 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #E0E0E0;
`,Hh=si.input`
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1.5rem;
  border: 1px solid #E0E0E0;
  border-radius: 6px;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #4DB6AC;
    box-shadow: 0 0 0 2px rgba(77, 182, 172, 0.2);
  }
`,Bh=si.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`,Uh=si.div`
  border-radius: 4px;
  overflow: hidden;
`,Vh=si.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  background: ${e=>e.$isActive?"#F5F5F5":"#FAFAFA"};
  cursor: pointer;
  user-select: none;
  transition: all 0.2s;

  &:hover {
    background: #F0F0F0;
  }
`,Wh=(si.div`
  font-weight: bold;
  margin-top: 12px;
  cursor: pointer;
`,si.div`
  margin-right: 10px;
  color: #616161;
`),qh=si.span`
  flex: 1;
  font-size: 15px;
  font-weight: 500;
  color: #424242;
`,Kh=si.div`
  color: #9E9E9E;
  font-size: 12px;
`,Yh=si.div`
  max-height: ${e=>e.$isOpen?"1000px":"0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
  background: #FFFFFF;
`,Qh=si.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.2s;
`,Gh=si.div`
  margin-right: 10px;
  color: #4DB6AC;
`,Xh=si.span`
  font-size: 14px;
  color: #616161;
`,Jh=si.div`
  display: ${e=>e.$isOpen?"block":"none"};
  padding-left: 32px;
  background-color: #fafafa;
`,Zh=si.div`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  cursor: pointer;
  background-color: ${e=>e.$isActive?"#f0f0f0":"transparent"};
  &:hover {
    background-color: #f0f0f0;
  }
`,ep=si.span`
  flex-grow: 1;
  margin-left: 8px;
  font-size: 14px;
`,tp=si.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 16px 12px 36px;
`,np=si.div`
  width: 60px;
  height: 60px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: white;
  transition: all 0.2s;
  overflow: hidden;
  position: relative;

  &:hover {
    border-color: #4DB6AC;
    box-shadow: 0 0 0 2px rgba(77, 182, 172, 0.2);
  }

  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: ${e=>`rotate(${e.$rotation||0}deg)`};
    transform-origin: center;
  }
`;function rp(e){return Di({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M13 4h3a2 2 0 0 1 2 2v14"},child:[]},{tag:"path",attr:{d:"M2 20h3"},child:[]},{tag:"path",attr:{d:"M13 20h9"},child:[]},{tag:"path",attr:{d:"M10 12v.01"},child:[]},{tag:"path",attr:{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"},child:[]}]})(e)}function op(e){return Di({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"m16 6 4 14"},child:[]},{tag:"path",attr:{d:"M12 6v14"},child:[]},{tag:"path",attr:{d:"M8 8v12"},child:[]},{tag:"path",attr:{d:"M4 4v16"},child:[]}]})(e)}function ip(e){return Di({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"},child:[]},{tag:"path",attr:{d:"M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"},child:[]},{tag:"path",attr:{d:"M4 18v2"},child:[]},{tag:"path",attr:{d:"M20 18v2"},child:[]},{tag:"path",attr:{d:"M12 4v9"},child:[]}]})(e)}function ap(e){return Di({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"},child:[]}]})(e)}function sp(e){return Di({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M20.998 3V5C20.998 8.86599 17.864 12 13.998 12H12.998V13H17.998V20C17.998 21.1046 17.1026 22 15.998 22H7.99805C6.89348 22 5.99805 21.1046 5.99805 20V13H10.998V10C10.998 6.13401 14.1321 3 17.998 3H20.998ZM5.49805 2C8.02667 2 10.263 3.25136 11.6216 5.1686C10.6026 6.51084 9.99805 8.18482 9.99805 10V11H9.49805C5.35591 11 1.99805 7.64214 1.99805 3.5V2H5.49805Z"},child:[]}]})(e)}function lp(e){return Di({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"currentColor"},child:[{tag:"path",attr:{d:"M5.99805 2C8.68733 2 11.0224 3.51653 12.1947 5.74104C13.372 4.08252 15.3086 3 17.498 3H20.998V5.5C20.998 9.08985 18.0879 12 14.498 12H12.998V13H17.998V20C17.998 21.1046 17.1026 22 15.998 22H7.99805C6.89348 22 5.99805 21.1046 5.99805 20V13H10.998V11H8.99805C5.13205 11 1.99805 7.86599 1.99805 4V2H5.99805ZM15.998 15H7.99805V20H15.998V15ZM18.998 5H17.498C15.0128 5 12.998 7.01472 12.998 9.5V10H14.498C16.9833 10 18.998 7.98528 18.998 5.5V5ZM5.99805 4H3.99805C3.99805 6.76142 6.23662 9 8.99805 9H10.998C10.998 6.23858 8.75947 4 5.99805 4Z"},child:[]}]})(e)}function up(e){return Di({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M200,16a8,8,0,0,0-8,8V40H160V24a8,8,0,0,0-16,0V40H112V24a8,8,0,0,0-16,0V40H64V24a8,8,0,0,0-16,0V232a8,8,0,0,0,16,0V216H96v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V216h32v16a8,8,0,0,0,16,0V24A8,8,0,0,0,200,16ZM64,56H192V200H64Zm64,120a8,8,0,0,0,6.86-3.88l24-40a8,8,0,0,0,0-8.24l-24-40a8,8,0,0,0-13.72,0l-24,40a8,8,0,0,0,0,8.24l24,40A8,8,0,0,0,128,176Zm0-72.45L142.67,128,128,152.45,113.33,128Z"},child:[]}]})(e)}function cp(e){return Di({tag:"svg",attr:{role:"img",viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M.198 18.24a.966.966 0 0 1-.194-.571v-.955s0-.571.563-.313c0 0 6.919 3.135 8.033 3.626a7.832 7.832 0 0 0 3.408.729 8.216 8.216 0 0 0 3.396-.729l8.037-3.626c.559-.258.559.313.559.313v.955a1.038 1.038 0 0 1-.198.575c-.19.258-.515.539-1.411.959-.713.337-6.23 2.818-6.995 3.17a8.008 8.008 0 0 1-3.4.729 8.336 8.336 0 0 1-3.82-.927c-1.435-.65-5.849-2.631-6.567-2.972-.9-.428-1.153-.654-1.411-.963zm1.411-5.973l6.987-3.17a7.975 7.975 0 0 1 2.164-.634v5.707c0 .396.571.697 1.236.697s1.141-.313 1.141-.697V8.479c.778.105 1.54.313 2.263.618l6.987 3.17c.579.273 1.609.761 1.609 1.538s-1.011 1.236-1.609 1.53l-6.987 3.17a8.2 8.2 0 0 1-3.396.729 7.832 7.832 0 0 1-3.408-.729l-6.987-3.17C1.011 15.042 0 14.574 0 13.801s1.03-1.264 1.609-1.534zm1.807 2.247c.77.396 1.683.396 2.453 0 .682-.396.686-1.026 0-1.419a2.705 2.705 0 0 0-2.453 0c-.68.392-.666 1.02 0 1.419zM12 7.595a3.35 3.35 0 1 1 3.349-3.351v.003c0 1.849-1.5 3.348-3.349 3.348z"},child:[]}]})(e)}const dp=e=>{let{onSelectItem:n,selectedItem:r,mode:o}=e;const[i,a]=(0,t.useState)(null),[s,l]=(0,t.useState)(null),[u,c]=(0,t.useState)(null),[d,f]=(0,t.useState)(""),{t:h}=se(),[p,g]=(0,t.useState)(null),[m,v]=(0,t.useState)(null),[b,y]=(0,t.useState)(null),x={furniture:{name:h("furniture.furnitureName"),icon:(0,yi.jsx)(ip,{size:20}),items:[{id:"bed",name:h("furniture.beds.name"),icon:(0,yi.jsx)(Li,{size:20}),components:[{name:h("furniture.beds.bed1"),component:Kl,positions:[{x:0,y:0,rotation:0},{x:0,y:0,rotation:90},{x:0,y:0,rotation:180},{x:0,y:0,rotation:270}]},{name:h("furniture.beds.bed2"),component:nu,positions:[{x:0,y:0,rotation:0},{x:0,y:0,rotation:90},{x:0,y:0,rotation:180},{x:0,y:0,rotation:270}]},{name:h("furniture.beds.bed4"),component:du,positions:[{x:0,y:0,rotation:0},{x:0,y:0,rotation:90},{x:0,y:0,rotation:180},{x:0,y:0,rotation:270}]},{name:h("furniture.beds.bed5"),component:wu,positions:[{x:0,y:0,rotation:0},{x:0,y:0,rotation:90},{x:0,y:0,rotation:180},{x:0,y:0,rotation:270}]},{name:h("furniture.beds.bed6"),component:Ru,positions:[{x:0,y:0,rotation:0},{x:0,y:0,rotation:90},{x:0,y:0,rotation:180},{x:0,y:0,rotation:270}]}]},{id:"sofa",name:h("furniture.sofas.name"),icon:(0,yi.jsx)(Ii,{size:20}),components:[{name:h("furniture.sofas.sofa1"),component:Xc},{name:h("furniture.sofas.sofa2"),component:dd},{name:h("furniture.sofas.sofa3"),component:nd},{name:h("furniture.sofas.sofa4"),component:gd},{name:h("furniture.sofas.sofa5"),component:ad}]},{id:"chair",name:h("furniture.chairs.name"),icon:(0,yi.jsx)(Fi,{size:20}),components:[{name:h("furniture.chairs.chair1"),component:(0,yi.jsx)(Bu,{})},{name:h("furniture.chairs.chair2"),component:Ku},{name:h("furniture.chairs.chair3"),component:Xu},{name:h("furniture.chairs.chair4"),component:nc},{name:h("furniture.chairs.chair5"),component:sc},{name:h("furniture.chairs.chair6"),component:dc},{name:h("furniture.chairs.chair7"),component:yc},{name:h("furniture.chairs.chair8"),component:kc},{name:h("furniture.chairs.chair9"),component:Dc},{name:h("furniture.chairs.chair10"),component:$c}]},{id:"desk",name:h("furniture.desks.name"),icon:(0,yi.jsx)(ap,{size:20}),components:[{name:h("furniture.desks.desk1"),component:xd},{name:h("furniture.desks.desk2"),component:Ld},{name:h("furniture.desks.desk3"),component:Id},{name:h("furniture.desks.desk4"),component:Ed},{name:h("furniture.desks.desk5"),component:Td}]},{id:"wardrobe",name:h("furniture.wardrobe.name"),icon:(0,yi.jsx)(rp,{size:20}),components:[{name:h("furniture.wardrobe.wardrobe1"),component:Wd},{name:h("furniture.wardrobe.wardrobe2"),component:nf},{name:h("furniture.wardrobe.wardrobe3"),component:Hd},{name:h("furniture.wardrobe.wardrobe4"),component:lf},{name:h("furniture.wardrobe.wardrobe5"),component:Gd}]},{id:"shelf",name:h("furniture.shelfs.name"),icon:(0,yi.jsx)(op,{size:20}),components:[{name:h("furniture.shelfs.shelf1"),component:Fc},{name:h("furniture.shelfs.shelf2"),component:Kc},{name:h("furniture.shelfs.shelf3"),component:Uc}]}]},electronics:{name:h("furniture.electronicsName"),icon:(0,yi.jsx)(sa,{size:20}),items:[{id:"pc",name:h("furniture.pcs.name"),icon:(0,yi.jsx)(ia,{size:20}),components:[{name:h("furniture.pcs.pc1"),component:Xf},{name:h("furniture.pcs.pc2"),component:dh},{name:h("furniture.pcs.pc3"),component:oh}]}]},decor:{name:h("furniture.decorName"),icon:(0,yi.jsx)(sp,{size:20}),items:[{id:"plant",name:h("furniture.plants.name"),icon:(0,yi.jsx)(lp,{size:20}),components:[{name:h("furniture.plants.plant1"),component:vh},{name:h("furniture.plants.plant2"),component:Th},{name:h("furniture.plants.plant3"),component:Sh}]},{id:"rug",name:h("furniture.rugs.name"),icon:(0,yi.jsx)(up,{size:20}),components:[{name:h("furniture.rugs.rug1"),component:Rh},{name:h("furniture.rugs.rug2"),component:zh}]}]},gaming:{name:h("furniture.gamingName"),icon:(0,yi.jsx)(aa,{size:20}),items:[{id:"beanbag",name:h("furniture.beanbags.name"),icon:(0,yi.jsx)(na,{size:20}),components:[{name:h("furniture.beanbags.beanbag1"),component:Of},{name:h("furniture.beanbags.beanbag2"),component:Df},{name:h("furniture.beanbags.beanbag3"),component:_f}]},{id:"wheel",name:h("furniture.wheels.name"),icon:(0,yi.jsx)(Ai,{size:20}),components:[{name:h("furniture.wheels.wheel1"),component:Wf},{name:h("furniture.wheels.wheel2"),component:Af}]},{id:"arcade",name:h("furniture.arcades.name"),icon:(0,yi.jsx)(cp,{size:20}),components:[{name:h("furniture.arcades.arcade1"),component:hf},{name:h("furniture.arcades.arcade2"),component:xf}]}]}},w=Object.values(x).map(e=>{const t=e.items.filter(e=>e.name.toLowerCase().includes(d.toLowerCase())||e.components.some(e=>e.name.toLowerCase().includes(d.toLowerCase())));return{...e,items:t}}).filter(e=>e.items.length>0);return(0,yi.jsxs)(Fh,{children:[(0,yi.jsx)(Mh,{children:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043c\u0435\u0431\u043b\u0456\u0432"}),(0,yi.jsx)(Hh,{placeholder:"\u041f\u043e\u0448\u0443\u043a...",value:d,onChange:e=>f(e.target.value)}),(0,yi.jsx)(Bh,{children:w.map(e=>(0,yi.jsxs)(Uh,{children:[(0,yi.jsxs)(Vh,{$isActive:p===e.name,onClick:()=>g(p===e.name?null:e.name),children:[(0,yi.jsx)(Wh,{children:e.icon}),(0,yi.jsx)(qh,{children:e.name}),(0,yi.jsx)(Kh,{children:p===e.name?(0,yi.jsx)(oa,{}):(0,yi.jsx)(ra,{})})]}),(0,yi.jsx)(Yh,{$isOpen:p===e.name,children:e.items.map(e=>(0,yi.jsxs)("div",{children:[(0,yi.jsxs)(Zh,{$isActive:m===e.name,onClick:()=>v(m===e.name?null:e.name),children:[(0,yi.jsx)(Gh,{children:e.icon}),(0,yi.jsx)(ep,{children:e.name}),(0,yi.jsx)(Kh,{children:m===e.name?(0,yi.jsx)(oa,{size:12}):(0,yi.jsx)(ra,{size:12})})]}),(0,yi.jsx)(Jh,{$isOpen:m===e.name,children:e.components.map(t=>(0,yi.jsxs)("div",{children:[(0,yi.jsxs)(Qh,{onClick:()=>y(b===t.name?null:t.name),children:[(0,yi.jsx)(Xh,{children:t.name}),(0,yi.jsx)(Kh,{children:b===t.name?(0,yi.jsx)(oa,{size:12}):(0,yi.jsx)(ra,{size:12})})]}),b===t.name&&(0,yi.jsx)(tp,{children:t.positions?t.positions.map((r,o)=>(0,yi.jsx)(np,{$rotation:r.rotation,onClick:o=>{o.stopPropagation(),n({id:e.id,name:t.name,component:t.component,rotation:r.rotation})},children:(0,yi.jsx)("div",{children:(0,yi.jsx)(t.component,{rotation:r.rotation})})},o)):(0,yi.jsx)(np,{onClick:r=>{r.stopPropagation(),n({id:e.id,name:t.name,component:t.component,rotation:0})},children:(0,yi.jsx)("div",{children:(0,yi.jsx)(t.component,{})})})})]},t.name))})]},e.name))})]},e.name))})]})};var fp=n(122);const hp="undefined"!==typeof window?t.useLayoutEffect:t.useEffect;function pp(e,n,r){const[o,i]=function(e,n,r){const[o,i]=(0,t.useState)(()=>n(e)),a=(0,t.useCallback)(()=>{const t=n(e);fp(o,t)||(i(t),r&&r())},[o,e,r]);return hp(a),[o,a]}(e,n,r);return hp(function(){const t=e.getHandlerId();if(null!=t)return e.subscribeToStateChange(i,{handlerIds:[t]})},[e,i]),o}function gp(e,t,n){return pp(t,e||(()=>({})),()=>n.reconnect())}function mp(e){return(0,t.useMemo)(()=>e.hooks.dropTarget(),[e])}function vp(e){return function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(!(0,t.isValidElement)(n)){const t=n;return e(t,r),t}const o=n;!function(e){if("string"===typeof e.type)return;const t=e.type.displayName||e.type.name||"the component";throw new Error(`Only native element nodes can now be passed to React DnD connectors.You can either wrap ${t} into a <div>, or turn it into a drag source or a drop target itself.`)}(o);const i=r?t=>e(t,r):e;return function(e,n){const r=e.ref;return bs("string"!==typeof r,"Cannot connect React DnD to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://reactjs.org/docs/refs-and-the-dom.html#callback-refs"),r?(0,t.cloneElement)(e,{ref:e=>{bp(r,e),bp(n,e)}}):(0,t.cloneElement)(e,{ref:n})}(o,i)}}function bp(e,t){"function"===typeof e?e(t):e.current=t}class yp{get connectTarget(){return this.dropTarget}reconnect(){const e=this.didHandlerIdChange()||this.didDropTargetChange()||this.didOptionsChange();e&&this.disconnectDropTarget();const t=this.dropTarget;this.handlerId&&(t?e&&(this.lastConnectedHandlerId=this.handlerId,this.lastConnectedDropTarget=t,this.lastConnectedDropTargetOptions=this.dropTargetOptions,this.unsubscribeDropTarget=this.backend.connectDropTarget(this.handlerId,t,this.dropTargetOptions)):this.lastConnectedDropTarget=t)}receiveHandlerId(e){e!==this.handlerId&&(this.handlerId=e,this.reconnect())}get dropTargetOptions(){return this.dropTargetOptionsInternal}set dropTargetOptions(e){this.dropTargetOptionsInternal=e}didHandlerIdChange(){return this.lastConnectedHandlerId!==this.handlerId}didDropTargetChange(){return this.lastConnectedDropTarget!==this.dropTarget}didOptionsChange(){return!function(e,t,n,r){let o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;const i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;const s=Object.prototype.hasOwnProperty.bind(t);for(let l=0;l<i.length;l++){const a=i[l];if(!s(a))return!1;const u=e[a],c=t[a];if(o=n?n.call(r,u,c,a):void 0,!1===o||void 0===o&&u!==c)return!1}return!0}(this.lastConnectedDropTargetOptions,this.dropTargetOptions)}disconnectDropTarget(){this.unsubscribeDropTarget&&(this.unsubscribeDropTarget(),this.unsubscribeDropTarget=void 0)}get dropTarget(){return this.dropTargetNode||this.dropTargetRef&&this.dropTargetRef.current}clearDropTarget(){this.dropTargetRef=null,this.dropTargetNode=null}constructor(e){this.hooks=function(e){const t={};return Object.keys(e).forEach(n=>{const r=e[n];if(n.endsWith("Ref"))t[n]=e[n];else{const e=vp(r);t[n]=()=>e}}),t}({dropTarget:(e,t)=>{var n;this.clearDropTarget(),this.dropTargetOptions=t,null!==(n=e)&&"object"===typeof n&&Object.prototype.hasOwnProperty.call(n,"current")?this.dropTargetRef=e:this.dropTargetNode=e,this.reconnect()}}),this.handlerId=null,this.dropTargetRef=null,this.dropTargetOptionsInternal=null,this.lastConnectedHandlerId=null,this.lastConnectedDropTarget=null,this.lastConnectedDropTargetOptions=null,this.backend=e}}function xp(){const{dragDropManager:e}=(0,t.useContext)(xl);return bs(null!=e,"Expected drag drop context"),e}let wp=!1;class Sp{receiveHandlerId(e){this.targetId=e}getHandlerId(){return this.targetId}subscribeToStateChange(e,t){return this.internalMonitor.subscribeToStateChange(e,t)}canDrop(){if(!this.targetId)return!1;bs(!wp,"You may not call monitor.canDrop() inside your canDrop() implementation. Read more: http://react-dnd.github.io/react-dnd/docs/api/drop-target-monitor");try{return wp=!0,this.internalMonitor.canDropOnTarget(this.targetId)}finally{wp=!1}}isOver(e){return!!this.targetId&&this.internalMonitor.isOverTarget(this.targetId,e)}getItemType(){return this.internalMonitor.getItemType()}getItem(){return this.internalMonitor.getItem()}getDropResult(){return this.internalMonitor.getDropResult()}didDrop(){return this.internalMonitor.didDrop()}getInitialClientOffset(){return this.internalMonitor.getInitialClientOffset()}getInitialSourceClientOffset(){return this.internalMonitor.getInitialSourceClientOffset()}getSourceClientOffset(){return this.internalMonitor.getSourceClientOffset()}getClientOffset(){return this.internalMonitor.getClientOffset()}getDifferenceFromInitialOffset(){return this.internalMonitor.getDifferenceFromInitialOffset()}constructor(e){this.targetId=null,this.internalMonitor=e.getMonitor()}}class kp{canDrop(){const e=this.spec,t=this.monitor;return!e.canDrop||e.canDrop(t.getItem(),t)}hover(){const e=this.spec,t=this.monitor;e.hover&&e.hover(t.getItem(),t)}drop(){const e=this.spec,t=this.monitor;if(e.drop)return e.drop(t.getItem(),t)}constructor(e,t){this.spec=e,this.monitor=t}}function Ep(e,n,r){const o=xp(),i=function(e,n){const r=(0,t.useMemo)(()=>new kp(e,n),[n]);return(0,t.useEffect)(()=>{r.spec=e},[e]),r}(e,n),a=function(e){const{accept:n}=e;return(0,t.useMemo)(()=>(bs(null!=e.accept,"accept must be defined"),Array.isArray(n)?n:[n]),[n])}(e);hp(function(){const[e,t]=function(e,t,n){const r=n.getRegistry(),o=r.addTarget(e,t);return[o,()=>r.removeTarget(o)]}(a,i,o);return n.receiveHandlerId(e),r.receiveHandlerId(e),t},[o,n,i,r,a.map(e=>e.toString()).join("|")])}function Cp(e,n){const r=function(e,n){const r=[...n||[]];return null==n&&"function"!==typeof e&&r.push(e),(0,t.useMemo)(()=>"function"===typeof e?e():e,r)}(e,n),o=function(){const e=xp();return(0,t.useMemo)(()=>new Sp(e),[e])}(),i=function(e){const n=xp(),r=(0,t.useMemo)(()=>new yp(n.getBackend()),[n]);return hp(()=>(r.dropTargetOptions=e||null,r.reconnect(),()=>r.disconnectDropTarget()),[e]),r}(r.options);return Ep(r,o,i),[gp(r.collect,o,i),mp(i)]}const Op=si.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  max-width: 600px;
  max-height: 600px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
`,jp=si.div`
  aspect-ratio: 1 / 1;
  background-color: ${e=>e.$isFree?"transparent":"rgba(0, 0, 0, 0.02)"}; 
  pointer-events: ${e=>e.$isFree?"auto":"none"};
  border: 1px solid #ccc;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${e=>e.$isFree?"#f5f5f5":"rgba(0, 0, 0, 0.02)"};
  }
`,Tp=e=>{let{furniture:n,onRotateFurniture:r,floorTheme:o,onCellClick:i,selectedItem:a,mode:s,onDelete:l,setSelectedItem:u}=e;const c=(0,t.useRef)(null),d=(0,t.useCallback)((e,t)=>{if(!c.current)return{x:0,y:0};const n=c.current.getBoundingClientRect(),r=n.width/6;return{x:Math.max(0,Math.min(5,Math.floor((e-n.left)/r))),y:Math.max(0,Math.min(5,Math.floor((t-n.top)/r)))}},[]),[{isOver:f},h]=Cp(()=>({accept:"FURNITURE",drop:(e,t)=>{const n=t.getClientOffset();if(!n)return;const{x:r,y:o}=d(n.x,n.y);i(r,o)},collect:e=>({isOver:!!e.isOver()})}));h(c);const p={light:{color:"#F5F5F5",grid:"#E0E0E0"},dark:{color:"#616161",grid:"#424242"},wood:{color:"#D7CCC8",grid:"#BCAAA4"},tile:{color:"#FFFFFF",grid:"#E0E0E0"}},g=p[o]||p.light,m=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={cols:1,rows:1};switch(e){case"bed":n={cols:3,rows:2};break;case"sofa":n={cols:2,rows:1};break;default:n={cols:1,rows:1}}return t%180!==0?{cols:n.rows,rows:n.cols}:n},v=(e,t)=>!n.some(n=>{const r=m(n.type,n.rotation||0);return n.x<0||n.y<0||n.x+r.cols>6||n.y+r.rows>6||e>=n.x&&e<n.x+r.cols&&t>=n.y&&t<n.y+r.rows});return(0,yi.jsxs)(Op,{id:"room-grid",ref:h,$isOver:f,$floorColor:g.color,$gridColor:g.grid,children:[Array.from({length:6}).map((e,t)=>Array.from({length:6}).map((e,n)=>(0,yi.jsx)(jp,{onClick:()=>i(n,t),$isFree:v(n,t)},`${t}-${n}`))),n.map(e=>{const{cols:t,rows:n}=m(e.type,e.rotation),o=e.component;return(0,yi.jsx)("div",{style:{gridColumn:`${e.x+1} / span ${t}`,gridRow:`${e.y+1} / span ${n}`,position:"relative",display:"flex",justifyContent:"center",alignItems:"center",zIndex:2,pointerEvents:"auto",cursor:"delete"===s?"not-allowed":"pointer",outline:(null===a||void 0===a?void 0:a.id)===e.id?"2px solid #4DB6AC":"none",borderRadius:"4px"},onClick:t=>((e,t)=>{e.stopPropagation(),"delete"===s?l(t.id):u(t)})(t,e),onDoubleClick:t=>{t.stopPropagation(),r(e.id,90)},children:(0,yi.jsx)("div",{style:{width:"100%",height:"100%",transform:`rotate(${e.rotation}deg)`,transformOrigin:"center center",transition:"transform 0.3s ease",display:"flex",justifyContent:"center",alignItems:"center"},children:(0,yi.jsx)(o,{rotation:e.rotation})})},e.id)})]})},Pp=si.div`
  width: 250px;
  background: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,Dp=si.h3`
  color: #616161;
  margin: 0;
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid #E0E0E0;
`,Np=si.button`
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  background: ${e=>e.$active?"#4DB6AC":"#F5F5F5"};
  color: ${e=>e.$active?"#FFFFFF":"#616161"};
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  width: 100%;
  
  &:hover {
    background: ${e=>e.$active?"#3DA89D":"#E0E0E0"};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,Rp=si.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`,Lp=si.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  label {
    font-size: 0.875rem;
    color: #616161;
  }
  
  select {
    padding: 0.5rem;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    background: #FFFFFF;
  }
`,_p=si.div`
  background: #F5F5F5;
  padding: 0.75rem;
  border-radius: 6px;
  font-size: 0.875rem;
  color: #616161;
  white-space: pre-line;
`,$p=e=>{let{mode:t,setMode:n,selectedItem:r,setSelectedItem:o,onDelete:i,floorTheme:a,setFloorTheme:s}=e;return(0,yi.jsxs)(Pp,{children:[(0,yi.jsx)(Dp,{children:"\u0423\u043f\u0440\u0430\u0432\u043b\u0456\u043d\u043d\u044f"}),(0,yi.jsxs)(Rp,{children:[(0,yi.jsx)(Np,{$active:"add"===t,onClick:()=>n("add"),children:"\u0414\u043e\u0434\u0430\u0442\u0438"}),(0,yi.jsx)(Np,{$active:"move"===t,onClick:()=>n("move"),disabled:!r,children:"\u041f\u0435\u0440\u0435\u043c\u0456\u0441\u0442\u0438\u0442\u0438"}),(0,yi.jsx)(Np,{$active:"delete"===t,onClick:()=>{r&&(i(r.id),o(null)),n("delete")},children:"\u0412\u0438\u0434\u0430\u043b\u0438\u0442\u0438"})]}),(0,yi.jsxs)(Lp,{children:[(0,yi.jsx)("label",{children:"\u0422\u0435\u043c\u0430 \u043f\u0456\u0434\u043b\u043e\u0433\u0438:"}),(0,yi.jsxs)("select",{value:a,onChange:e=>s(e.target.value),children:[(0,yi.jsx)("option",{value:"light",children:"\u0421\u0432\u0456\u0442\u043b\u0430"}),(0,yi.jsx)("option",{value:"dark",children:"\u0422\u0435\u043c\u043d\u0430"}),(0,yi.jsx)("option",{value:"wood",children:"\u0414\u0435\u0440\u0435\u0432\u043e"}),(0,yi.jsx)("option",{value:"tile",children:"\u041f\u043b\u0438\u0442\u043a\u0430"})]})]}),(0,yi.jsxs)(_p,{children:["add"===t&&"1. \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043c\u0435\u0431\u043b\u0456 \u0437 \u043a\u0430\u0442\u0430\u043b\u043e\u0433\u0443\n2. \u041a\u043b\u0456\u043a\u043d\u0456\u0442\u044c \u043d\u0430 \u0441\u0456\u0442\u043a\u0443 \u0434\u043b\u044f \u0440\u043e\u0437\u043c\u0456\u0449\u0435\u043d\u043d\u044f","move"===t&&"1. \u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043c\u0435\u0431\u043b\u0456 \u043d\u0430 \u0441\u0456\u0442\u0446\u0456\n2. \u041a\u043b\u0456\u043a\u043d\u0456\u0442\u044c \u043d\u0430 \u043d\u043e\u0432\u0443 \u043a\u043b\u0456\u0442\u0438\u043d\u043a\u0443","delete"===t&&"\u041a\u043b\u0456\u043a\u043d\u0456\u0442\u044c \u043d\u0430 \u043c\u0435\u0431\u043b\u0456 \u0434\u043b\u044f \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f"]})]})},zp=si.div`
  display: flex;
  height: auto;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 20px;
  justify-content: center;
  
  > *:first-child {
    flex: 0 0 250px;
  }
  
  > *:nth-child(2) {
    flex: 0 0 600px;
    margin: 0 15px 0 0;
    height: 100%;
  }
  
  > *:last-child {
    flex: 0 0 250px;
  }
`,Ip=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n={cols:1,rows:1};switch(e){case"bed":case"rug":n={cols:3,rows:2};break;case"sofa":case"desk":n={cols:2,rows:1};break;case"chair":case"pc":case"plant":case"beanbag":case"wheel":case"arcade":default:n={cols:1,rows:1};break;case"wardrobe":n={cols:2,rows:3};break;case"shelf":n={cols:1,rows:2}}return t%180!==0?{cols:n.rows,rows:n.cols}:n},Ap=()=>{const[e,n]=(0,t.useState)([]),[r,o]=(0,t.useState)("light"),[i,a]=(0,t.useState)(null),[s,l]=(0,t.useState)(null),[u,c]=(0,t.useState)("add"),d=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0;const{cols:i,rows:a}=Ip(n,o);if(e+i>10||t+a>10)return!1;for(let s of r){const{cols:n,rows:r}=Ip(s.type,s.rotation||0),o=s.x,l=s.y;if(e<o+n&&e+i>o&&t<l+r&&t+a>l)return!1}return!0},f=(0,t.useCallback)((t,r)=>{if("move"===u&&i){const o=Ip(i.type,i.rotation);if(t+o.cols>6||r+o.rows>6)return;d(t,r,i.type,e.filter(e=>e.id!==i.id),i.rotation)&&(n(e.map(e=>e.id===i.id?{...e,x:t,y:r}:e)),a(null))}else if("add"===u&&s){const o=Ip(s.id,0);if(t+o.cols>6||r+o.rows>6)return;if(d(t,r,s.id,e,0)){const o={id:Date.now(),type:s.id,x:t,y:r,component:s.component,rotation:0,name:s.name};n([...e,o])}}},[e,u,i,s,d]),h=t=>{n(e.filter(e=>e.id!==t)),(null===i||void 0===i?void 0:i.id)===t&&a(null)};return(0,yi.jsx)(El,{backend:ql,children:(0,yi.jsxs)(zp,{children:[(0,yi.jsx)(dp,{onSelectItem:e=>{"add"===u&&l(e)},selectedItem:i,mode:u}),(0,yi.jsx)(Tp,{furniture:e,onRotateFurniture:(e,t)=>{n(n=>n.map(r=>{if(r.id===e){const o=(r.rotation+t)%360,i=d(r.x,r.y,r.type,n.filter(t=>t.id!==e),o);return i?{...r,rotation:o}:r}return r}))},floorTheme:r,onCellClick:f,selectedItem:i,mode:u,onDelete:h,setSelectedItem:a}),(0,yi.jsx)($p,{mode:u,setMode:c,selectedItem:i,setSelectedItem:a,onDelete:h,floorTheme:r,setFloorTheme:o})]})})},Fp=()=>(0,yi.jsx)("main",{children:(0,yi.jsx)(El,{backend:ql,children:(0,yi.jsx)(Ap,{})})}),Mp=()=>(0,yi.jsx)(ln,{basename:"/room-craft",children:(0,yi.jsxs)("div",{className:"App",children:[(0,yi.jsx)(Yi,{}),(0,yi.jsxs)(jt,{children:[(0,yi.jsx)(Ct,{index:!0,element:(0,yi.jsx)(ds,{})}),(0,yi.jsx)(Ct,{path:"build",element:(0,yi.jsx)(Fp,{})})]}),(0,yi.jsx)(ua,{})]})}),Hp=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=oi.apply(void 0,yn([e],n,!1)),i="sc-global-".concat(Br(JSON.stringify(o))),a=new li(o,i),s=function(e){var n=Bo(),r=t.useContext(Zo),o=t.useRef(n.styleSheet.allocateGSInstance(i)).current;return n.styleSheet.server&&l(o,e,n.styleSheet,r,n.stylis),t.useLayoutEffect(function(){if(!n.styleSheet.server)return l(o,e,n.styleSheet,r,n.stylis),function(){return a.removeStyles(o,n.styleSheet)}},[o,e,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,o){if(a.isStatic)a.renderStyles(e,Tr,n,o);else{var i=bn(bn({},t),{theme:Nr(t,r,s.defaultProps)});a.renderStyles(e,i,n,o)}}return t.memo(s)})`
  * {
    box-sizing: border-box;
  }

  *::selection {
    color: #fff;
    background-color: #4DB6AC;
  }
  
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  .no-scroll {
    overflow-y: hidden;
  }

  h1
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  ul,
  ol {
    padding: 0;
    margin: 0;

    list-style: none;
  }

  button {
    padding: 0;
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;r.createRoot(document.getElementById("root")).render((0,yi.jsxs)(t.StrictMode,{children:[(0,yi.jsx)(Hp,{}),(0,yi.jsx)(Mp,{})]}))})()})();
//# sourceMappingURL=main.13e1c4f9.js.map