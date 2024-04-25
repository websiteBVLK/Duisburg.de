!function(){"use strict";var e={7105:function(e,t,o){var n=o(58163);const r=/[^.]*(?=\..*)\.|.*/,s=/\..*/,l=/::\d+$/,i={};let a=1;const c={mouseenter:"mouseover",mouseleave:"mouseout"},u=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]),f={};function p(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(const[o,n]of Object.entries(t))try{e[o]=n}catch{Object.defineProperty(e,o,{configurable:!0,get(){return n}})}return e}function g(e,t){return t&&`${t}::${a++}`||e.uidEvent||a++}function d(e){const t=g(e);return e.uidEvent=t,i[t]=i[t]||{},i[t]}function h(e,t){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return Object.values(e).find((e=>e.callable===t&&e.delegationSelector===o))}function v(e){return e=e.replace(s,""),c[e]||e}function y(e,t,o){const n="string"==typeof t,r=n?o:t||o;let s=v(e);return u.has(s)||(s=e),[n,r,s]}function m(e,t,o,n,s){let[l,i,a]=y(t,o,n);if(t in c){const e=e=>function(t){return(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))&&e.call(this,t)};i=e(i)}const u=d(e),v=u[a]||(u[a]={}),m=h(v,i,l?o:null);if(m)return void(m.oneOff=m.oneOff&&s);const b=g(i,t.replace(r,"")),w=l?function(e,t,o){return function n(r){const s=e.querySelectorAll(t);for(let{target:l}=r;l&&l!==this;l=l.parentNode)for(const i of s)if(i===l)return p(r,{delegateTarget:l}),n.oneOff&&f.off(e,r.type,t,o),o.apply(l,[r]);return!1}}(e,o,i):function(e,t){return function o(n){return p(n,{delegateTarget:e}),o.oneOff&&f.off(e,n.type,t),t.apply(e,[n])}}(e,i);w.delegationSelector=l?o:null,w.callable=i,w.oneOff=s,w.uidEvent=b,v[b]=w,e.addEventListener(a,w,l)}function b(e,t,o,n,r){const s=h(t[o],n,r);s&&(e.removeEventListener(o,s,Boolean(r)),delete t[o][s.uidEvent])}function w(e,t,o,n){const r=t[o]||{};for(const[s,l]of Object.entries(r))s.includes(n)&&b(e,t,o,l.callable,l.delegationSelector)}f.on=function(e,t,o,n){"string"==typeof t&&e&&t.split(" ").forEach((t=>{m(e,t,o,n,!1)}))},f.one=function(e,t,o,n){"string"==typeof t&&e&&t.split(" ").forEach((t=>{m(e,t,o,n,!0)}))},f.off=function(e,t,o,n){"string"==typeof originalTypeEvent&&e&&t.split(" ").forEach((t=>{const[r,s,i]=y(t,o,n),a=i!==t,c=d(e),u=c[i]||{},f=t.startsWith(".");if(void 0===s){if(f)for(const o of Object.keys(c))w(e,c,o,t.slice(1));for(const[o,n]of Object.entries(u)){const r=o.replace(l,"");a&&!t.includes(r)||b(e,c,i,n.callable,n.delegationSelector)}}else{if(!Object.keys(u).length)return;b(e,c,i,s,r?o:null)}}))},f.trigger=function(e,t,o){if("string"!=typeof t||!e)return null;const r=(0,n.Z)();let s=null,l=!0,i=!0,a=!1;t!==v(t)&&r&&(s=r.Event(t,o),r(e).trigger(s),l=!s.isPropagationStopped(),i=!s.isImmediatePropagationStopped(),a=s.isDefaultPrevented());const c=p(new Event(t,{bubbles:l,cancelable:!0}),o);return a&&c.preventDefault(),i&&e.dispatchEvent(c),c.defaultPrevented&&s&&s.preventDefault(),c},t.Z=f},58163:function(e,t,o){function n(){return window.jQuery?window.jQuery:null}o.d(t,{Z:function(){return n}})}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,o),s.exports}o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e=o(7105);const{themeName:t,settings:n,media_sizes:r,disabledBlocks:s,allowPluginColorPalette:l,allowPluginCustomizer:i,sidebars:a,timezone:c,googleMapsAPIKey:u,googleMapsAPIUrl:f,googleMapsLibrary:p,googleReCaptchaAPISiteKey:g,googleReCaptchaAPISecretKey:d,icons:h,shapes:v,fonts:y,customTypographyList:m,admin_url:b,admin_templates_url:w}=window.ghostkitVariables,k={},P=[];Object.keys(r).forEach((e=>{k[`media_${e}`]=r[e],P.push(r[e])}));const O={themeName:t,settings:n,disabledBlocks:s,allowPluginColorPalette:l,allowPluginCustomizer:i,vars:k,replaceVars(e){return Object.keys(this.vars).forEach((t=>{var o;e=e.replace(new RegExp(`#{ghostkitvar:${o=t,o.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&")}}`,"g"),`(max-width: ${this.vars[t]}px)`)})),e},screenSizes:P,sidebars:a,timezone:c,googleMapsAPIKey:u,googleMapsAPIUrl:f,googleMapsLibrary:p,googleReCaptchaAPISiteKey:g,googleReCaptchaAPISecretKey:d,icons:h,shapes:v,fonts:y,customTypographyList:m,adminUrl:b,adminTemplatesUrl:w,events:e.Z,hasBlockSupport(e,t){let o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if("string"==typeof e&&wp&&wp.blocks){const{getBlockType:t}=wp.blocks;t&&(e=t(e))}return e&&e.ghostkit&&e.ghostkit.supports&&void 0!==e.ghostkit.supports[t]?e.ghostkit.supports[t]:o}};window.GHOSTKIT=O}()}();