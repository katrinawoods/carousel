var writers_block;(()=>{"use strict";var e,r,t,n,o,i,a,l,s,u,f,d,c,p,h,v,m={587:(e,r,t)=>{var n={"./prosemirror-model":()=>Promise.all([t.e(676),t.e(935)]).then((()=>()=>t(935))),"./schema":()=>Promise.all([t.e(676),t.e(894),t.e(544)]).then((()=>()=>t(544))),"./view":()=>Promise.all([t.e(676),t.e(894),t.e(202)]).then((()=>()=>t(202)))},o=(e,r)=>(t.R=r,r=t.o(n,e)?n[e]():Promise.resolve().then((()=>{throw new Error('Module "'+e+'" does not exist in container.')})),t.R=void 0,r),i=(e,r)=>{if(t.S){var n="default",o=t.S[n];if(o&&o!==e)throw new Error("Container initialization failed as it has already been initialized with a different share scope");return t.S[n]=e,t.I(n,r)}};t.d(r,{get:()=>o,init:()=>i})}},g={};function b(e){var r=g[e];if(void 0!==r)return r.exports;var t=g[e]={exports:{}};return m[e](t,t.exports,b),t.exports}b.m=m,b.c=g,b.d=(e,r)=>{for(var t in r)b.o(r,t)&&!b.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},b.f={},b.e=e=>Promise.all(Object.keys(b.f).reduce(((r,t)=>(b.f[t](e,r),r)),[])),b.u=e=>({202:"d445416d",544:"b92601c5",676:"d4168b22",894:"ae9f88e9",935:"fadc459f"}[e]+".js"),b.miniCssF=e=>"467c7226.css",b.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),b.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e={},r="@articulate/writers-block-bundles:",b.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var a,l;if(void 0!==o)for(var s=document.getElementsByTagName("script"),u=0;u<s.length;u++){var f=s[u];if(f.getAttribute("src")==t||f.getAttribute("data-webpack")==r+o){a=f;break}}a||(l=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,b.nc&&a.setAttribute("nonce",b.nc),a.setAttribute("data-webpack",r+o),a.src=t),e[t]=[n];var d=(r,n)=>{a.onerror=a.onload=null,clearTimeout(c);var o=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(n))),r)return r(n)},c=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),l&&document.head.appendChild(a)}},b.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{b.S={};var e={},r={};b.I=(t,n)=>{n||(n=[]);var o=r[t];if(o||(o=r[t]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[t])return e[t];b.o(b.S,t)||(b.S[t]={}),b.S[t];var i=[];return e[t]=i.length?Promise.all(i).then((()=>e[t]=1)):1}}})(),(()=>{var e;b.g.importScripts&&(e=b.g.location+"");var r=b.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var t=r.getElementsByTagName("script");if(t.length)for(var n=t.length-1;n>-1&&!e;)e=t[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),b.p=e})(),t=e=>{var r=e=>e.split(".").map((e=>+e==e?+e:e)),t=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),n=t[1]?r(t[1]):[];return t[2]&&(n.length++,n.push.apply(n,r(t[2]))),t[3]&&(n.push([]),n.push.apply(n,r(t[3]))),n},n=(e,r)=>{e=t(e),r=t(r);for(var n=0;;){if(n>=e.length)return n<r.length&&"u"!=(typeof r[n])[0];var o=e[n],i=(typeof o)[0];if(n>=r.length)return"u"==i;var a=r[n],l=(typeof a)[0];if(i!=l)return"o"==i&&"n"==l||"s"==l||"u"==i;if("o"!=i&&"u"!=i&&o!=a)return o<a;n++}},o=e=>{var r=e[0],t="";if(1===e.length)return"*";if(r+.5){t+=0==r?">=":-1==r?"<":1==r?"^":2==r?"~":r>0?"=":"!=";for(var n=1,i=1;i<e.length;i++)n--,t+="u"==(typeof(l=e[i]))[0]?"-":(n>0?".":"")+(n=2,l);return t}var a=[];for(i=1;i<e.length;i++){var l=e[i];a.push(0===l?"not("+s()+")":1===l?"("+s()+" || "+s()+")":2===l?a.pop()+" "+a.pop():o(l))}return s();function s(){return a.pop().replace(/^\((.+)\)$/,"$1")}},i=(e,r)=>{if(0 in e){r=t(r);var n=e[0],o=n<0;o&&(n=-n-1);for(var a=0,l=1,s=!0;;l++,a++){var u,f,d=l<e.length?(typeof e[l])[0]:"";if(a>=r.length||"o"==(f=(typeof(u=r[a]))[0]))return!s||("u"==d?l>n&&!o:""==d!=o);if("u"==f){if(!s||"u"!=d)return!1}else if(s)if(d==f)if(l<=n){if(u!=e[l])return!1}else{if(o?u>e[l]:u<e[l])return!1;u!=e[l]&&(s=!1)}else if("s"!=d&&"n"!=d){if(o||l<=n)return!1;s=!1,l--}else{if(l<=n||f<d!=o)return!1;s=!1}else"s"!=d&&"n"!=d&&(s=!1,l--)}}var c=[],p=c.pop.bind(c);for(a=1;a<e.length;a++){var h=e[a];c.push(1==h?p()|p():2==h?p()&p():h?i(h,r):!p())}return!!p()},a=(e,r)=>{var t=b.S[e];if(!t||!b.o(t,r))throw new Error("Shared module "+r+" doesn't exist in shared scope "+e);return t},l=(e,r)=>{var t=e[r];return Object.keys(t).reduce(((e,r)=>!e||!t[e].loaded&&n(e,r)?r:e),0)},s=(e,r,t,n)=>"Unsatisfied version "+t+" from "+(t&&e[r][t].from)+" of shared singleton module "+r+" (required "+o(n)+")",u=(e,r,t,n)=>{var o=l(e,t);return i(n,o)||f(s(e,t,o,n)),d(e[t][o])},f=e=>{"undefined"!=typeof console&&console.warn&&console.warn(e)},d=e=>(e.loaded=1,e.get()),c=(e=>function(r,t,n,o){var i=b.I(r);return i&&i.then?i.then(e.bind(e,r,b.S[r],t,n,o)):e(r,b.S[r],t,n)})(((e,r,t,n)=>(a(e,t),u(r,0,t,n)))),p={},h={354:()=>c("default","svelte/internal",[1,4,2,0]),902:()=>c("default","svelte",[1,4,2,0])},v={202:[354,902]},b.f.consumes=(e,r)=>{b.o(v,e)&&v[e].forEach((e=>{if(b.o(p,e))return r.push(p[e]);var t=r=>{p[e]=0,b.m[e]=t=>{delete b.c[e],t.exports=r()}},n=r=>{delete p[e],b.m[e]=t=>{throw delete b.c[e],r}};try{var o=h[e]();o.then?r.push(p[e]=o.then(t).catch(n)):t(o)}catch(e){n(e)}}))},(()=>{if("undefined"!=typeof document){var e={479:0};b.f.miniCss=(r,t)=>{e[r]?t.push(e[r]):0!==e[r]&&{202:1}[r]&&t.push(e[r]=(e=>new Promise(((r,t)=>{var n=b.miniCssF(e),o=b.p+n;if(((e,r)=>{for(var t=document.getElementsByTagName("link"),n=0;n<t.length;n++){var o=(a=t[n]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(n=0;n<i.length;n++){var a;if((o=(a=i[n]).getAttribute("data-href"))===e||o===r)return a}})(n,o))return r();((e,r,t,n,o)=>{var i=document.createElement("link");i.rel="stylesheet",i.type="text/css",i.onerror=i.onload=t=>{if(i.onerror=i.onload=null,"load"===t.type)n();else{var a=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.href||r,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=l,i.parentNode&&i.parentNode.removeChild(i),o(s)}},i.href=r,document.head.appendChild(i)})(e,o,0,r,t)})))(r).then((()=>{e[r]=0}),(t=>{throw delete e[r],t})))}}})(),(()=>{var e={479:0};b.f.j=(r,t)=>{var n=b.o(e,r)?e[r]:void 0;if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(((t,o)=>n=e[r]=[t,o]));t.push(n[2]=o);var i=b.p+b.u(r),a=new Error;b.l(i,(t=>{if(b.o(e,r)&&(0!==(n=e[r])&&(e[r]=void 0),n)){var o=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;a.message="Loading chunk "+r+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,n[1](a)}}),"chunk-"+r,r)}};var r=(r,t)=>{var n,o,[i,a,l]=t,s=0;if(i.some((r=>0!==e[r]))){for(n in a)b.o(a,n)&&(b.m[n]=a[n]);l&&l(b)}for(r&&r(t);s<i.length;s++)o=i[s],b.o(e,o)&&e[o]&&e[o][0](),e[o]=0},t=self.webpackChunk_articulate_writers_block_bundles=self.webpackChunk_articulate_writers_block_bundles||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})();var y=b(587);writers_block=y})();
//# sourceMappingURL=entry.js.map