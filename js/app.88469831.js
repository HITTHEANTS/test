(function(e){function t(t){for(var i,o,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);f&&f(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(i=!1)}i&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var i={},o={app:0},a={app:0},r=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-25648ee7":"9419cc6d","chunk-4028cd90":"a5bc8c4f","chunk-6e8d1103":"5f3b208e","chunk-7a8d319e":"b4a13744","chunk-ace3713e":"239569a3"}[e]+".js"}function c(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-25648ee7":1,"chunk-4028cd90":1,"chunk-6e8d1103":1,"chunk-7a8d319e":1,"chunk-ace3713e":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-25648ee7":"b6adea30","chunk-4028cd90":"e240bfa2","chunk-6e8d1103":"7934dcd3","chunk-7a8d319e":"74c490ff","chunk-ace3713e":"ddcbd4f0"}[e]+".css",a=c.p+i,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===i||l===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===i||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var i=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=i,delete o[e],f.parentNode.removeChild(f),n(r)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var i=a[e];if(0!==i)if(i)t.push(i[2]);else{var r=new Promise((function(t,n){i=a[e]=[t,n]}));t.push(i[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=i,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)c.d(n,i,function(t){return e[t]}.bind(null,i));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/test/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07e7":function(e,t,n){},"20e0":function(e,t,n){},3162:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("header-view"),e.isMobile?n("div",[n("v-container",{attrs:{id:"mobile-container",name:"mobile"}},[n("router-view")],1)],1):n("div",[n("v-container",{attrs:{id:"web-container","grid-list-md":"","text-xs-center":"",name:"web"}},[n("router-view")],1)],1),n("footer-view",{staticClass:"footer"})],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-col",{staticClass:"d-none d-md-block d-lg-block  ",staticStyle:{width:"100%","text-align":"-webkit-center"}},[n("v-row",{staticClass:"white align-center justify-center",staticStyle:{"max-width":"1050px"}},e._l(e.links,(function(t){return n("div",{key:t,staticClass:"navagation-button web",class:{"focusing-button":e.activingButton==t},attrs:{label:t},on:{click:function(n){return e.moveToNavigationLink(t)}}},[e._v(" "+e._s(t)+" ")])})),0)],1),n("v-col",{staticClass:"d-md-none d-lg-none d-xl-none ",staticStyle:{"padding-right":"0","padding-left":"0"}},[n("v-row",{staticClass:"white justify-space-around pt-2 pl-0"},e._l(e.links,(function(t){return n("div",{key:t,staticClass:"navagation-button mobile",class:{"focusing-button":e.activingButton==t},attrs:{label:t},on:{click:function(n){e.moveToNavigationLink(t),e.setActive(t)}}},[e._v(" "+e._s(t)+" "),n("v-spacer")],1)})),0)],1)],1)},s=[],c=(n("b0c0"),{name:"HeaderView",mounted:function(){this.$router.push({name:this.$route.name})},data:function(){return{activingButton:"HOME",links:["HOME","ABOUT","PROJECTS","CONTACT"]}},methods:{moveToNavigationLink:function(e){e!=this.$route.name&&(this.activingButton=e,this.$router.push({name:e}))}}}),u=c,l=(n("d867"),n("2877")),d=n("6544"),f=n.n(d),p=n("62ad"),h=n("a523"),v=n("0fd9"),m=n("2fa4"),b=Object(l["a"])(u,r,s,!1,null,"70e5794a",null),g=b.exports;f()(b,{VCol:p["a"],VContainer:h["a"],VRow:v["a"],VSpacer:m["a"]});var w=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[e.isMobile?e._e():i("div",{staticClass:"footer-upper-block "},[i("img",{attrs:{src:n("a65d")}})]),i("div",{staticClass:"footer-offset text-center"},[i("v-card-title",{staticClass:"upper-text",class:{"text-size-m":e.isMobile},staticStyle:{display:"inline-flex padding-left: 22px","padding-right":"22px"}},[i("strong",{staticStyle:{display:"inline-flex"}},[e._v(" Hit the Ants ")]),i("v-spacer"),i("strong",{staticClass:"sns-container"},[e._v(" Follow us "),i("button",{staticStyle:{color:"#8c8c8c !important","margin-left":"10px","margin-right":"10px","font-weight":"400"},on:{click:e.popup}},[e._v(" hittheants@Instagram ")])])],1),e.isMobile?i("div",{staticClass:"tail-text-w"},[i("v-flex",[e._v(" "+e._s((new Date).getFullYear())+" — ⓒAll Copyrights Reserved. 힛디앤츠(hittheants)"),i("br"),e._v(" E-mail:contact@hittheants.com ")])],1):i("div",{staticClass:"tail-text-w"},[i("v-flex",[e._v(" "+e._s((new Date).getFullYear())+" — ⓒAll Copyrights Reserved. 힛디앤츠(hittheants) E-mail:contact@hittheants.com ")])],1)],1)])},y=[],k={data:function(){return{isMobile:!1}},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{popup:function(){window.open("https://www.instagram.com/hittheants/","_blank")},popupM:function(){window.open("https://www.instagram.com/hittheants/","_blank")},onResize:function(){this.isMobile=window.innerWidth<500},onScroll:function(e){this.offsetTop=e.target.scrollTop}}},C=k,_=(n("5a93"),n("99d9")),x=n("0e8f"),O=Object(l["a"])(C,w,y,!1,null,"26b36949",null),E=O.exports;f()(O,{VCardTitle:_["a"],VFlex:x["a"],VSpacer:m["a"]});var T={name:"App",components:{HeaderView:g,FooterView:E},data:function(){return{isMobile:!1}},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onResize:function(){this.isMobile=window.innerWidth<1e3}}},S=T,j=(n("d17f"),n("7496")),A=Object(l["a"])(S,o,a,!1,null,"cf6b6f28",null),M=A.exports;f()(A,{VApp:j["a"],VContainer:h["a"]});n("d3b7");var z=n("8c4f");i["a"].use(z["a"]);var R=[{path:"/",name:"HOME",component:function(){return n.e("chunk-25648ee7").then(n.bind(null,"bb51"))}},{path:"/test",name:"HOME",component:function(){return n.e("chunk-25648ee7").then(n.bind(null,"bb51"))}},{path:"/test/about",name:"ABOUT",component:function(){return n.e("chunk-4028cd90").then(n.bind(null,"f820"))}},{path:"/test/projects",name:"PROJECTS",component:function(){return n.e("chunk-ace3713e").then(n.bind(null,"acca"))}},{path:"/test/projects/detail",name:"project-detail",component:function(){return n.e("chunk-7a8d319e").then(n.bind(null,"97ef"))}},{path:"/test/contact",name:"CONTACT",component:function(){return n.e("chunk-6e8d1103").then(n.bind(null,"b8fa"))}}],L=new z["a"]({mode:"history",base:"/test/",routes:R}),P=L,V=n("f309");i["a"].use(V["a"]);var N=new V["a"]({}),B=n("8df1"),H=n.n(B),$=n("d3a2"),D=n.n($);i["a"].config.productionTip=!1,i["a"].use(D.a),new i["a"]({router:P,vuetify:N,style:H.a,render:function(e){return e(M)}}).$mount("#app")},"5a93":function(e,t,n){"use strict";var i=n("07e7"),o=n.n(i);o.a},"8df1":function(e,t,n){},a65d:function(e,t,n){e.exports=n.p+"img/foorterAnts.b2f32264.png"},d17f:function(e,t,n){"use strict";var i=n("3162"),o=n.n(i);o.a},d867:function(e,t,n){"use strict";var i=n("20e0"),o=n.n(i);o.a}});
//# sourceMappingURL=app.88469831.js.map