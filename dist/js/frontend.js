!function(e){var n={};function t(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(i,o,function(n){return e[n]}.bind(null,o));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var i=window.googletag,o=window.AdViewabilityControl.advertiserIds||[];if(0<o.length){for(var r={},u=0,d=o.length;u<d;u++)r[o[u]]=1;o=r}var a=window.AdViewabilityControl.viewabilityThreshold||70,f=window.AdViewabilityControl.refreshInterval||30,l={},s=!0,c=function(e){var n=e.inViewPercentage;"undefined"===typeof e.inViewPercentage&&(n=100);var t=e.slot.getSlotElementId(),r=e.slot.getResponseInformation(),u=!0;0<o.length&&o[r.advertiserId]&&(u=!1),u&&(l[t]||(l[t]={}),"visible"===document.visibilityState&&n>=a?function(e,n){l[e].refreshing||(l[e].startTime=(new Date).valueOf(),l[e].refreshing=window.setInterval(function(){var t=(new Date).valueOf();if(Math.round((t-l[e].startTime)/1e3)>=f){if(!s)return;i.cmd.push(function(){i.pubads().refresh([n])}),l[e].startTime=(new Date).valueOf()}},1e3))}(t,e.slot):function(e){l[e].refreshing&&(window.clearInterval(l[e].refreshing),l[e].refreshing=null)}(t))};(function e(){var n=0;if(i&&i.apiReady)i.pubads().addEventListener("impressionViewable",c),i.pubads().addEventListener("slotVisibilityChanged",c),function(){function e(){s=!0}function n(){s=!1}"undefined"!==typeof document.hidden?(s=!document.hidden,document.addEventListener("visibilitychange",function(){s=!document.hidden})):"undefined"!==typeof document.onfocusin?(document.onfocusin=e,document.onfocusout=n):(window.onfocus=e,window.onblur=n)}();else var t=window.setTimeout(function(){n<=30?(n++,e()):console.error("Could not init GPT API."),window.clearTimeout(t)},100)})()}]);