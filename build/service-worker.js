if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),f={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>f[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"bundle.js",revision:"c09530eefb6519afca76bcb33007d9c8"},{url:"index.html",revision:"11a9d1aa29ebec0ef7b9cdf5d38dbbfa"},{url:"main.css",revision:"ad68ff252eb17cdfff07ffcc4cfb65aa"}],{})}));
