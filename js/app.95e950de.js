(function(t){function e(e){for(var A,a,i=e[0],c=e[1],s=e[2],u=0,g=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&g.push(o[a][0]),o[a]=0;for(A in c)Object.prototype.hasOwnProperty.call(c,A)&&(t[A]=c[A]);l&&l(e);while(g.length)g.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],A=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(A=!1)}A&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var A={},a={app:0},o={app:0},r=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-12687621":"4efbff54","chunk-3784c0a2":"8b253060","chunk-6198bdb8":"59e5dddb","chunk-7a668276":"39e9aa97","chunk-d54f2d66":"a3e36f74"}[t]+".js"}function c(e){if(A[e])return A[e].exports;var n=A[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-12687621":1,"chunk-3784c0a2":1,"chunk-6198bdb8":1,"chunk-7a668276":1,"chunk-d54f2d66":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var A="css/"+({}[t]||t)+"."+{"chunk-12687621":"73bcfde0","chunk-3784c0a2":"58179057","chunk-6198bdb8":"cc2c92e7","chunk-7a668276":"c938c822","chunk-d54f2d66":"a670cf6d"}[t]+".css",o=c.p+A,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===A||u===o))return e()}var g=document.getElementsByTagName("style");for(i=0;i<g.length;i++){s=g[i],u=s.getAttribute("data-href");if(u===A||u===o)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var A=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+A+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=A,delete a[t],l.parentNode.removeChild(l),n(r)},l.href=o;var C=document.getElementsByTagName("head")[0];C.appendChild(l)})).then((function(){a[t]=0})));var A=o[t];if(0!==A)if(A)e.push(A[2]);else{var r=new Promise((function(e,n){A=o[t]=[e,n]}));e.push(A[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var g=new Error;s=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var A=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;g.message="Loading chunk "+t+" failed.\n("+A+": "+a+")",g.name="ChunkLoadError",g.type=A,g.request=a,n[1](g)}o[t]=void 0}};var l=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=A,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var A in t)c.d(n,A,function(e){return t[e]}.bind(null,A));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/test/",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var g=0;g<s.length;g++)e(s[g]);var l=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"20f0":function(t,e,n){},"3a5d":function(t,e,n){},"4e28":function(t,e,n){"use strict";var A=n("3a5d"),a=n.n(A);a.a},5235:function(t,e,n){"use strict";var A=n("6b27"),a=n.n(A);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var A=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("header-view"),t.isMobile?n("div",[n("v-container",{attrs:{id:"mobile-container",name:"mobile"}},[n("router-view")],1)],1):n("div",[n("v-container",{attrs:{id:"web-container","grid-list-md":"","text-xs-center":"",name:"web"}},[n("router-view")],1)],1),n("footer-view",{staticClass:"footer"})],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-col",{staticClass:"d-none d-md-block d-lg-block d-xl-block column",attrs:{cols:"12"}},[n("v-row",{staticClass:"white align-center justify-center"},t._l(t.links,(function(e){return n("div",{key:e,staticClass:"navagation-button web",class:{"focusing-button":t.activingButton==e},attrs:{label:e},on:{click:function(n){return t.moveToNavigationLink(e)}}},[t._v(" "+t._s(e)+" ")])})),0)],1),n("v-col",{staticClass:"d-md-none d-lg-none d-xl-none column",attrs:{cols:"12"}},[n("v-row",{staticClass:"white justify-space-around pt-2"},t._l(t.links,(function(e){return n("div",{key:e,staticClass:"navagation-button mobile",class:{"focusing-button":t.activingButton==e},attrs:{label:e},on:{click:function(n){return t.moveToNavigationLink(e)}}},[t._v(" "+t._s(e)+" ")])})),0)],1)],1)},i=[],c=(n("b0c0"),{name:"HeaderView",mounted:function(){this.$router.push({name:this.$route.name})},data:function(){return{activingButton:"HOME",links:["HOME","ABOUT","PROJECTS","CONTACT"]}},methods:{moveToNavigationLink:function(t){t!=this.$route.name&&(this.$router.push({name:t}),this.activingButton=t)}}}),s=c,u=(n("4e28"),n("2877")),g=n("6544"),l=n.n(g),C=n("62ad"),f=n("a523"),d=n("0fd9"),v=Object(u["a"])(s,r,i,!1,null,"9596c314",null),p=v.exports;l()(v,{VCol:C["a"],VContainer:f["a"],VRow:d["a"]});var I=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("div",[t.isMobile?t._e():A("div",{staticClass:"footer-upper-block "},[A("img",{attrs:{src:n("a65d")}})]),A("div",{staticClass:"footer-offset text-center"},[A("v-card-title",{staticClass:"upper-text",class:{"text-size-m":t.isMobile},staticStyle:{display:"inline-flex"}},[A("strong",{staticStyle:{display:"inline-flex"}},[t._v(" Hit the Ants "),t.isMobile?t._e():A("div",{staticStyle:{"font-weight":"400","padding-left":"20px"}},[t._v(" A Korean based Fucking Good Crew ")])]),A("v-spacer"),A("strong",{staticClass:"sns-container"},[t._v(" Follow us "),A("button",{staticStyle:{color:"#8c8c8c !important","margin-left":"10px","margin-right":"10px","font-weight":"400"},on:{click:t.popup}},[t._v(" Instagram ")]),A("button",{staticStyle:{color:"#8c8c8c !important","margin-right":"10px","font-weight":"400"},on:{click:t.popupM}},[t._v(" FaceBook ")])])],1),t.isMobile?A("div",{staticClass:"tail-text-w"},[A("v-flex",[t._v(" "+t._s((new Date).getFullYear())+" — ⓒAll Copyrights Reserved. 힛디앤츠(hittheants)"),A("br"),t._v(" E-mail:contact@hittheants.com ")])],1):A("div",{staticClass:"tail-text-w"},[A("v-flex",[t._v(" "+t._s((new Date).getFullYear())+" — ⓒAll Copyrights Reserved. 힛디앤츠(hittheants) E-mail:contact@hittheants.com ")])],1)],1)])},h=[],m={data:function(){return{isMobile:!1}},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{popup:function(){window.open("https://www.instagram.com/hittheants/","_blank")},popupM:function(){window.open("https://www.instagram.com/hittheants/","_blank")},onResize:function(){this.isMobile=window.innerWidth<500},onScroll:function(t){this.offsetTop=t.target.scrollTop}}},b=m,w=(n("5235"),n("99d9")),E=n("0e8f"),y=n("2fa4"),k=Object(u["a"])(b,I,h,!1,null,"29f25bbf",null),B=k.exports;l()(k,{VCardTitle:w["a"],VFlex:E["a"],VSpacer:y["a"]});var q={name:"App",components:{HeaderView:p,FooterView:B},data:function(){return{isMobile:!1}},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onResize:function(){this.isMobile=window.innerWidth<1e3}}},x=q,L=(n("79f1"),n("7496")),O=Object(u["a"])(x,a,o,!1,null,"4f834343",null),X=O.exports;l()(O,{VApp:L["a"],VContainer:f["a"]});n("d3b7");var P=n("8c4f");A["a"].use(P["a"]);var Q=[{path:"/",name:"Home",component:function(){return n.e("chunk-7a668276").then(n.bind(null,"bb51"))}},{path:"/test/",name:"HOME",component:function(){return n.e("chunk-7a668276").then(n.bind(null,"bb51"))}},{path:"/test/about",name:"ABOUT",component:function(){return n.e("chunk-6198bdb8").then(n.bind(null,"f820"))}},{path:"/test/projects",name:"PROJECTS",component:function(){return n.e("chunk-3784c0a2").then(n.bind(null,"acca"))}},{path:"/test/projects/detail",name:"project-detail",component:function(){return n.e("chunk-d54f2d66").then(n.bind(null,"97ef"))}},{path:"/test/contact",name:"CONTACT",component:function(){return n.e("chunk-12687621").then(n.bind(null,"b8fa"))}}],T=new P["a"]({mode:"history",routes:Q}),V=T,j=n("f309");A["a"].use(j["a"]);var F=new j["a"]({}),Y=n("8df1"),M=n.n(Y),z=n("d3a2"),R=n.n(z);A["a"].config.productionTip=!1,A["a"].use(R.a),new A["a"]({router:V,vuetify:F,style:M.a,render:function(t){return t(X)}}).$mount("#app")},"6b27":function(t,e,n){},"79f1":function(t,e,n){"use strict";var A=n("20f0"),a=n.n(A);a.a},"8df1":function(t,e,n){},a65d:function(t,e){t.exports="data:image/png;base64,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wAkVGFUL9gktIRdHYBIKhN1B7lu37iaF1BcqCPDUeq2RdoIrR2qNU+ub+hJ6t161csXPygOESVg1ioTAhAk0JRJvLBQCTWBmf97emXl3eOFwFJ7dJqt+1d6GcFSJcDSeg/89sFfbHzw0rOyElY4LIYAAAi9dIPLSD+VIBCpX4Lldu850ntfflsncUjt7bqe1hSsUANwR9cxHjIv8UXeuuxV8L7We/br6Z1/V3dvzrEY6OHoTd+VyUvMKFYglEv8YOHgwqTkXHt3X23PoJUW/xvuMWq3f6fvequ6ent1dXV39c2rmfEwv3P9nX29vOFwbHwQQQAABBBCYrgJNDcm3aOa5mRpx59vJWOygWuMuLdZV4/VWNcYS71P6I42x2CeK6SwRQODoAhpLvlMjSHSFT4mKOZOx5OXJZHJpcZslAggggAACCExjAb0AXB1Wb0kyeZpG21mrPqXvKq1uGCQo7e2laawjgMCRBRRg9+rG9O4j52APAggggAACCCCAAAIIjFognMFxQTJ50agPICMCCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIITGeBZCxxa7Ihvnk613Gq1c2bagWmvAgggAACCCCAAALDAta46/Tv5WEKwfawy4lc80/kxbk2AggggAACCCCAwPEJOGN+YayZFZ4lDLaNcd3Hd0aOPl4BAuzjFeR4BBBAAAEEEEDgBAqks5mVxcu/GGyfUtxmOf4CqXj8GuPMR51zS4y1g7rJediO/2W5AgIIIIAAAggggAAC00Ogubk5mu/rixcikazJ51c5Z9aU1kzB9TYC7FIR1hFAAAEEEEAAAQQQKBFQC/V3jHNLnYt8MVIdaQ0GBx9TUL1QrdXPWGfOdsYN9wixtsv6kUsIsEsAWUUAAQQQQAABBBBAoCiQisW+p2D6xnDbWjugQHuLuuEsLe4fXtpn1QH+FP37cjqT+TGjiAzLsIYAAggggAACCCCAwLCAM8uLG+pjXV0eXFvr3azA+8mqGdXLqjz7Juvs/DA/LdhFNZYIIIAAAggggAACCJQINDU1JYLB3C0KrN+s1uvZ4S4F1PsVbJ9irXlKmw9GPO+RHen0FqUr2+EPAXZRgiUCCCCAAAIIIIAAAiMINCUSlxYCd40C50UzzezLDpje37RnsxcuiscbtmcyneWH0EWkXIRtBBBAAAEEEEAAAQRKBXx/uzYHjB+5PveyXN74/g3h7pGC6zD9f18S/95CobEKAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=app.95e950de.js.map