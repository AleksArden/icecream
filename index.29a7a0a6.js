!function(e,o){if("function"==typeof define&&define.amd)define(["exports"],o);else if("undefined"!=typeof exports)o(exports);else{var t={};o(t),e.bodyScrollLock=t}}(this,(function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=!1;if("undefined"!=typeof window){var t={get passive(){o=!0}};window.addEventListener("testPassive",null,t),window.removeEventListener("testPassive",null,t)}function n(e){return d.some((function(o){return!(!o.options.allowTouchMove||!o.options.allowTouchMove(e))}))}function i(e){var o=e||window.event;return!!n(o.target)||1<o.touches.length||(o.preventDefault&&o.preventDefault(),!1)}function r(){void 0!==s&&(document.body.style.paddingRight=s,s=void 0),void 0!==u&&(document.body.style.overflow=u,u=void 0)}var l="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&1<window.navigator.maxTouchPoints),d=[],c=!1,a=-1,u=void 0,s=void 0;e.disableBodyScroll=function(e,t){if(e){if(!d.some((function(o){return o.targetElement===e}))){var r={targetElement:e,options:t||{}};d=[].concat(function(e){if(Array.isArray(e)){for(var o=0,t=Array(e.length);o<e.length;o++)t[o]=e[o];return t}return Array.from(e)}(d),[r]),l?(e.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},e.ontouchmove=function(o){var t,r,l,d;1===o.targetTouches.length&&(r=e,d=(t=o).targetTouches[0].clientY-a,n(t.target)||(r&&0===r.scrollTop&&0<d||(l=r)&&l.scrollHeight-l.scrollTop<=l.clientHeight&&d<0?i(t):t.stopPropagation()))},c||(document.addEventListener("touchmove",i,o?{passive:!1}:void 0),c=!0)):function(e){if(void 0===s){var o=!!e&&!0===e.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;o&&0<t&&(s=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===u&&(u=document.body.style.overflow,document.body.style.overflow="hidden")}(t)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},e.clearAllBodyScrollLocks=function(){l?(d.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),c&&(document.removeEventListener("touchmove",i,o?{passive:!1}:void 0),c=!1),a=-1):r(),d=[]},e.enableBodyScroll=function(e){e?(d=d.filter((function(o){return o.targetElement!==e})),l?(e.ontouchstart=null,e.ontouchmove=null,c&&0===d.length&&(document.removeEventListener("touchmove",i,o?{passive:!1}:void 0),c=!1)):d.length||r()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}}));
//# sourceMappingURL=index.29a7a0a6.js.map