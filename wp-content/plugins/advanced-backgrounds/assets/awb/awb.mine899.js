/*! For license information please see awb.js.LICENSE.txt */
!function(){var t={7880:function(){document.addEventListener("jetpack-lazy-loaded-image",(t=>{if(t.target.classList.contains("jarallax-img")){const e=t.target.parentNode.parentNode;e&&e.jarallax&&e.jarallax.image&&e.jarallax.image.$item&&(e.jarallax.image.$item=t.target)}}),{passive:!0})}},e={};function i(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,i),o.exports}!function(){"use strict";function t(t,e,i){var a,n=i||{},o=n.noTrailing,r=void 0!==o&&o,s=n.noLeading,l=void 0!==s&&s,d=n.debounceMode,c=void 0===d?void 0:d,g=!1,u=0;function b(){a&&clearTimeout(a)}function w(){for(var i=arguments.length,n=new Array(i),o=0;o<i;o++)n[o]=arguments[o];var s=this,d=Date.now()-u;function w(){u=Date.now(),e.apply(s,n)}function p(){a=void 0}g||(l||!c||a||w(),b(),void 0===c&&d>t?l?(u=Date.now(),r||(a=setTimeout(c?p:w,t))):w():!0!==r&&(a=setTimeout(c?p:w,void 0===c?t-d:t)))}return w.cancel=function(t){var e=(t||{}).upcomingOnly,i=void 0!==e&&e;b(),g=!i},w}const e="awb";function a(t,i,a){const n=new CustomEvent(`${e}-${i}`,{bubbles:!0,cancelable:!0,detail:a});t.dispatchEvent(n)}function n(t,i){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:document;a.addEventListener(`${e}-${t}`,i)}const{AWB:o}=window,r=/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(navigator.userAgent||navigator.vendor||window.opera),s=!!document.documentMode,l=!s&&!!window.StyleMedia,d="undefined"!=typeof InstallTrigger,c=/constructor/i.test(window.HTMLElement)||"[object SafariRemoteNotification]"===(!window.safari||"undefined"!=typeof safari&&safari.pushNotification).toString(),g=!!window.chrome&&!!window.chrome.webstore,u=!!window.opr&&!!window.opr.addons||!!window.opera||navigator.userAgent.indexOf(" OPR/")>=0;let b=!1,w=!1;function p(){return o}o.settings&&o.settings.disable_parallax&&o.settings.disable_parallax.length&&o.settings.disable_parallax.forEach((t=>{if(!b)switch(t){case"everywhere":b=!0;break;case"mobile":b=r;break;case"ie":b=s;break;case"edge":b=l;break;case"firefox":b=d;break;case"safari":b=c;break;case"chrome":b=g;break;case"opera":b=u}})),o.settings&&o.settings.disable_video&&o.settings.disable_video.length&&o.settings.disable_video.forEach((t=>{if(!w)switch(t){case"everywhere":w=!0;break;case"mobile":w=r;break;case"ie":w=s;break;case"edge":w=l;break;case"firefox":w=d;break;case"safari":w=c;break;case"chrome":w=g;break;case"opera":w=u}})),o.isMobile=r,o.disableParallax=b,o.disableVideo=w,i(7880),n("before-init",(t=>{!function(t){if(!t||!t.parentNode||!t.parentNode.classList.contains("nk-awb-after-vc_row"))return;const e=t.parentNode;let i=e.previousElementSibling;i=!!i.classList.contains("vc_clearfix")&&i;let a=(i||e).previousElementSibling;a=!(!a||!a.matches(".vc_row:not(.nk-awb)"))&&a,a&&("true"===a.getAttribute("data-vc-full-width")&&t.removeAttribute("data-awb-stretch"),a.classList.add("nk-awb"),a.append(t)),e.remove()}(t.target),function(t){if(!t||!t.parentNode||!t.parentNode.classList.contains("nk-awb-after-vc_column"))return;const e=t.parentNode;let i=e.previousElementSibling;i=!(!i||!i.matches(".wpb_column:not(.nk-awb)"))&&i;const a=i.closest(".vc_row");i&&(a.matches("[data-vc-stretch-content=true]")&&t.removeAttribute("data-awb-stretch"),i.classList.add("nk-awb"),i.append(t)),e.remove()}(t.target)}));let f=!1,m="";n("before-init",(t=>{window.GHOSTKIT||function(t){const e=t.parentNode&&t.parentNode.getAttribute("data-ghostkit-styles");e&&(f||(f=document.createElement("style"),f.setAttribute("id","ghostkit-awb-custom-css-inline-css"),document.head.appendChild(f)),m+=e,t.parentNode.removeAttribute("data-ghostkit-styles"),f.textContent=m)}(t.target)}));const{settings:h}=p(),v=[],y=[],x=[];function k(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;t&&t.length&&t.forEach((t=>{const e=t.getBoundingClientRect(),{left:i,right:a}=e,n=window.innerWidth-a,o=getComputedStyle(t),r=parseFloat(o["margin-left"]||0),s=parseFloat(o["margin-right"]||0);t.style["margin-left"]=r-i+"px",t.style["margin-right"]=s-n+"px"}))}function A(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y;t&&t.length&&t.forEach((t=>{const e=t.closest(".vc_row"),i=t.closest(".wpb_column"),a=t.getBoundingClientRect(),n=e.getBoundingClientRect(),o=i.getBoundingClientRect(),r=getComputedStyle(t),s=getComputedStyle(e),l=a.left,d=window.innerWidth-a.right,c=n.left+(parseFloat(s["padding-left"])||0),g=window.innerWidth-n.right+(parseFloat(s["padding-right"])||0),u=o.left,b=window.innerWidth-o.right,w={"margin-left":0,"margin-right":0};if(Math.round(c)===Math.round(u)){const t=parseFloat(r["margin-left"]||0);w["margin-left"]=t-l+"px"}if(Math.round(g)===Math.round(b)){const t=parseFloat(r["margin-right"]||0);w["margin-right"]=t-d+"px"}t.style["margin-left"]=w["margin-left"],t.style["margin-right"]=w["margin-right"]}))}function E(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;t&&t.length&&t.forEach((t=>{const e=t.getBoundingClientRect(),{left:i,bottom:a}=e,n=window.innerWidth-e.right,o=getComputedStyle(t),r=parseFloat(o["margin-left"]||0),s=parseFloat(o["margin-right"]||0),l=parseFloat(o["margin-bottom"]||0);let d=r-i,c=s-n,g="";const u=t.closest(".ghostkit-col");if(u){const e=t.closest(".ghostkit-grid").getBoundingClientRect(),o=u.getBoundingClientRect(),b=e.left,w=window.innerWidth-e.right,p=o.left,f=window.innerWidth-o.right,m=o.bottom;Math.round(b)!==Math.round(p)&&(d=p-i+r),Math.round(w)!==Math.round(f)&&(c=f-n+s),g=l-(m-a)}t.style["margin-left"]=`${d}px`,t.style["margin-right"]=`${c}px`,t.style["margin-bottom"]=`${g}px`}))}const L=t(200,(function(){k(),A(),E()}));n("before-init",(t=>{!function(t){const e=t.getAttribute("data-awb-stretch");e&&t.parentNode.classList.contains("wpb_column")?(A([t]),y.push(t)):e?(k([t]),v.push(t)):h.full_width_fallback&&t.parentNode.classList.contains("alignfull")&&(E([t]),x.push(t))}(t.target)})),window.addEventListener("resize",L,{passive:!0}),window.addEventListener("orientationchange",L,{passive:!0}),window.addEventListener("load",L,{passive:!0});const{IntersectionObserver:_}=window,{isMobile:S}=p(),z=[];let M=1;function j(){z.forEach((t=>{t.awbMouseData.is_in_viewport&&(t.awbMouseData.rect=t.parentNode.getBoundingClientRect())}))}const C=t(200,j);setInterval(j,3e3),window.addEventListener("resize",C,{passive:!0}),window.addEventListener("orientationchange",C,{passive:!0}),window.addEventListener("load",C,{passive:!0}),document.addEventListener("scroll",C,{passive:!0});const N=t(200,((t,e,i)=>{!function(t,e,i){let a,n,o;z.forEach((r=>{a=r.awbMouseData,a&&"object"==typeof a&&(a.is_in_viewport||i&&M)&&(i?(n=-a.size*t,o=-a.size*e):(n=(a.rect.width-(t-a.rect.left))/a.rect.width,o=(a.rect.height-(e-a.rect.top))/a.rect.height,(n>1||n<0||o>1||o<0)&&(n=.5,o=.5),n=a.size*(n-.5)*2,o=a.size*(o-.5)*2),r.style.transform=`translateX(${n}px) translateY(${o}px) translateZ(0)`,i&&M||(r.style.transition=`transform ${i?2:a.speed}s  cubic-bezier(.22, .63, .6, .88)`))})),M=0}(t,e,i)})),F=new _((t=>{t.forEach((t=>{t.target.awbMouseData&&(t.target.awbMouseData.is_in_viewport=t.isIntersecting,t.isIntersecting&&C())}))}),{rootMargin:"50px"});function B(t){t&&t.length||(t=document.querySelectorAll(".nk-awb .nk-awb-inner img")),t&&t.length&&t.forEach((t=>{const e=window.getComputedStyle(t,null);if(e&&e.objectFit&&"cover"===e.objectFit){const e=parseInt(t.getAttribute("height"),10),i=parseInt(t.getAttribute("width"),10);if(e){let a=t.clientWidth;i/e>t.clientWidth/t.clientHeight&&(a=parseInt(t.clientHeight*i/e,10)),t.getAttribute("sizes")!==`${a}px`&&(t.setAttribute("sizes",`${a}px`),t.getAttribute("data-sizes")&&t.setAttribute("data-sizes",`${a}px`),t.getAttribute("data-lazy-sizes")&&t.setAttribute("data-lazy-sizes",`${a}px`))}}}))}n("init",(t=>{!function(t){if(t.classList.contains("nk-awb-mouse-parallax")||!t.getAttribute("data-awb-mouse-parallax-size"))return;const e=t.querySelector(":scope > .nk-awb-inner"),i=parseFloat(t.getAttribute("data-awb-mouse-parallax-size"))||30,a=parseFloat(t.getAttribute("data-awb-mouse-parallax-speed"))||1e4;t.classList.add("nk-awb-mouse-parallax"),e.awbMouseData={is_in_viewport:0,rect:t.getBoundingClientRect(),size:i,speed:a/1e3},e.style.left=-i+"px",e.style.right=-i+"px",e.style.top=-i+"px",e.style.bottom=-i+"px",F.observe(e),z.push(e),1===z.length&&(S&&window.DeviceOrientationEvent?window.addEventListener("deviceorientation",(t=>{N(t.gamma/90,t.beta/180,!0)}),{passive:!0}):window.addEventListener("mousemove",(t=>{N(t.clientX,t.clientY)}),{passive:!0}))}(t.target)}));const $=(500,t(500,B,{debounceMode:!1!==(void 0!==(W={}.atBegin)&&W)}));var W;n("before-init",(t=>{B(t.target.querySelectorAll(".nk-awb-inner img"))})),window.addEventListener("resize",$,{passive:!0}),window.addEventListener("orientationchange",$,{passive:!0}),window.addEventListener("load",$,{passive:!0});const I=!!document.querySelector("#twentytwenty-style-css, #twenty-twenty-style-css, #twenty-twenty-one-style-css");n("before-jarallax-init",(t=>{I&&function(t,e){const i=t.querySelector(":scope > .nk-awb-inner"),a=e.onInit;e.onInit=function(){Array.from(i.children).forEach((t=>{t.classList.add("intrinsic-ignore")})),a&&a()}}(t.target,t.detail)}));const{jarallax:P}=window,{isMobile:R,disableParallax:T,disableVideo:q}=p();n("init",(t=>{!function(t){if(void 0===P)return;const e=t.querySelector(".jarallax-img"),i=t.getAttribute("data-awb-type"),n=t.getAttribute("data-awb-image-background-size"),o=t.getAttribute("data-awb-image-background-position");let r=!1,s=0,l=0,d=0,c=!0,g=!0,u=!1,b=t.getAttribute("data-awb-parallax"),w=t.getAttribute("data-awb-parallax-speed"),p="true"===t.getAttribute("data-awb-parallax-mobile")||"1"===t.getAttribute("data-awb-parallax-mobile");if("yt_vm_video"!==i&&"video"!==i||(r=t.getAttribute("data-awb-video"),s=parseFloat(t.getAttribute("data-awb-video-start-time"))||0,l=parseFloat(t.getAttribute("data-awb-video-end-time"))||0,d=parseFloat(t.getAttribute("data-awb-video-volume"))||0,c="false"!==t.getAttribute("data-awb-video-loop"),g="true"===t.getAttribute("data-awb-video-always-play"),u="1"===t.getAttribute("data-awb-video-mobile")||"true"===t.getAttribute("data-awb-video-mobile"),!r||b||w||(b="scroll",w=1,p=u)),!b&&!r){const i=t.getAttribute("data-awb-image-background-size")||"cover",a=t.getAttribute("data-awb-image-background-position")||"50% 50%";return void(e&&(e.style.objectFit=i,e.style.objectPosition=a))}const f={type:b,speed:w,disableParallax(){return T||!p&&R},disableVideo(){return q||!u&&R},imgSize:n||"cover",imgPosition:o||"50% 50%"};"pattern"===n&&(f.imgSize="auto",f.imgRepeat="repeat"),r&&(f.speed=b?w:1,f.videoSrc=r,f.videoStartTime=s,f.videoEndTime=l,f.videoVolume=d,f.videoLoop=c,f.videoPlayOnlyVisible=!g);const m=t.querySelector(":scope > .nk-awb-inner"),h=m.querySelector("picture .jarallax-img");h&&(h.classList.remove("jarallax-img"),h.closest("picture").classList.add("jarallax-img")),a(t,"before-jarallax-init",f),P(m,f),a(t,"after-jarallax-init",f)}(t.target)}));const D=p();D.selector=".nk-awb .nk-awb-wrap:not(.nk-awb-rendered)",D.events={on:n,trigger:a},D.init=function(t){const e=document.querySelectorAll(t||D.selector);e&&e.length&&e.forEach((function(t){a(t,"before-init"),t.classList.add("nk-awb-rendered"),a(t,"init"),a(t,"after-init")}))},D.initThrottled=t(200,(()=>{D.init()})),D.init(),new window.MutationObserver((t=>{if(!t||!t.length)return;let e=!1;t.forEach((t=>{let{addedNodes:i}=t;!e&&i&&i.length&&i.forEach((t=>{!e&&t.tagName&&(t.classList.contains("nk-awb")||t.classList.contains("nk-awb-after-vc_row")||t.classList.contains("nk-awb-after-vc_column")||t.firstElementChild&&t.querySelector(".nk-awb, .nk-awb-after-vc_row, .nk-awb-after-vc_column"))&&(e=!0)}))})),e&&D.initThrottled()})).observe(document.documentElement,{childList:!0,subtree:!0}),window.AWB=D,a(document,"ready"),window.nkAwbInit=function(){console.warn('You are using the "nkAwbInit()" function, which is deprecated since v1.11.1. Please, use "AWB.init()" instead.'),window.AWB.init()}}()}();