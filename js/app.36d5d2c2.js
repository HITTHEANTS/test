(function(t){function e(e){for(var n,a,i=e[0],s=e[1],u=e[2],c=0,g=[];c<i.length;c++)a=i[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&g.push(r[a][0]),r[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);C&&C(e);while(g.length)g.shift()();return o.push.apply(o,u||[]),A()}function A(){for(var t,e=0;e<o.length;e++){for(var A=o[e],n=!0,a=1;a<A.length;a++){var i=A[a];0!==r[i]&&(n=!1)}n&&(o.splice(e--,1),t=s(s.s=A[0]))}return t}var n={},a={app:0},r={app:0},o=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-23617b96":"4b74a5cf","chunk-3432b811":"ec1da9eb","chunk-35064a61":"538d8302","chunk-900de16a":"868a8478","chunk-96432ac0":"1c694335"}[t]+".js"}function s(e){if(n[e])return n[e].exports;var A=n[e]={i:e,l:!1,exports:{}};return t[e].call(A.exports,A,A.exports,s),A.l=!0,A.exports}s.e=function(t){var e=[],A={"chunk-23617b96":1,"chunk-3432b811":1,"chunk-35064a61":1,"chunk-900de16a":1,"chunk-96432ac0":1};a[t]?e.push(a[t]):0!==a[t]&&A[t]&&e.push(a[t]=new Promise((function(e,A){for(var n="css/"+({}[t]||t)+"."+{"chunk-23617b96":"c03013c0","chunk-3432b811":"b457a303","chunk-35064a61":"b0b53ea9","chunk-900de16a":"77a9dd9d","chunk-96432ac0":"bb0d5b45"}[t]+".css",r=s.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===n||c===r))return e()}var g=document.getElementsByTagName("style");for(i=0;i<g.length;i++){u=g[i],c=u.getAttribute("data-href");if(c===n||c===r)return e()}var C=document.createElement("link");C.rel="stylesheet",C.type="text/css",C.onload=e,C.onerror=function(e){var n=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[t],C.parentNode.removeChild(C),A(o)},C.href=r;var l=document.getElementsByTagName("head")[0];l.appendChild(C)})).then((function(){a[t]=0})));var n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,A){n=r[t]=[e,A]}));e.push(n[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=i(t);var g=new Error;u=function(e){c.onerror=c.onload=null,clearTimeout(C);var A=r[t];if(0!==A){if(A){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;g.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",g.name="ChunkLoadError",g.type=n,g.request=a,A[1](g)}r[t]=void 0}};var C=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=n,s.d=function(t,e,A){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:A})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var A=Object.create(null);if(s.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(A,n,function(e){return t[e]}.bind(null,n));return A},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/test/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var g=0;g<u.length;g++)e(u[g]);var C=c;o.push([0,"chunk-vendors"]),A()})({0:function(t,e,A){t.exports=A("56d7")},"21d0":function(t,e,A){},"2a7f":function(t,e,A){"use strict";var n=A("21d0"),a=A.n(n);a.a},"45bd":function(t,e,A){"use strict";var n=A("71d7"),a=A.n(n);a.a},"56d7":function(t,e,A){"use strict";A.r(e);A("e260"),A("e6cf"),A("cca6"),A("a79d");var n=A("2b0e"),a=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("v-app",[A("header-view"),t.isMobile?A("v-container",{attrs:{name:"mobile"}},[A("router-view")],1):A("div",{staticStyle:{"min-height":"100%"}},[A("v-container",{attrs:{id:"web-container","grid-list-md":"","text-xs-center":"",name:"web"}},[A("router-view")],1),A("footer-view",{staticClass:"footer"})],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,A=t._self._c||e;return A("v-container",{attrs:{fluid:""}},[A("v-col",{staticClass:"d-none d-md-block d-lg-block d-xl-block column",attrs:{cols:"12"}},[A("v-row",{staticClass:"white align-center justify-center"},t._l(t.links,(function(e){return A("div",{key:e,staticClass:"navagation-button web mx-12",class:{"focusing-button":t.activingButton==e},attrs:{label:e},on:{click:function(A){return t.moveToNavigationLink(e)}}},[t._v(" "+t._s(e)+" ")])})),0)],1),A("v-col",{staticClass:"d-md-none d-lg-none d-xl-none column",attrs:{cols:"12"}},[A("v-row",{staticClass:"white justify-space-around pt-2"},t._l(t.links,(function(e){return A("div",{key:e,staticClass:"navagation-button mobile",class:{"focusing-button":t.activingButton==e},attrs:{label:e},on:{click:function(A){return t.moveToNavigationLink(e)}}},[t._v(" "+t._s(e)+" ")])})),0)],1)],1)},i=[],s=(A("b0c0"),{name:"HeaderView",mounted:function(){this.$router.push({name:this.$route.name})},data:function(){return{activingButton:"HOME",links:["HOME","ABOUT","PROJECTS","CONTACT"]}},methods:{moveToNavigationLink:function(t){t!=this.$route.name&&(this.$router.push({name:t}),this.activingButton=t)}}}),u=s,c=(A("2a7f"),A("2877")),g=A("6544"),C=A.n(g),l=A("62ad"),f=A("a523"),d=A("0fd9"),v=Object(c["a"])(u,o,i,!1,null,"4b1c6fdc",null),I=v.exports;C()(v,{VCol:l["a"],VContainer:f["a"],VRow:d["a"]});var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer_offset"},[n("v-footer",{attrs:{dark:"",padless:""}},[n("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[n("div",{staticClass:"text-center footer-upper-block"},[n("img",{attrs:{src:A("a65d")}})]),n("v-card-title",{staticClass:" teal text-center"},[n("strong",{staticClass:"subheading left-title"},[t._v(" Hit the Ants ")]),n("strong",{staticClass:"subheading left-text"},[t._v(" A Korean based Fucking Good Crew ")]),n("v-spacer"),n("div",[n("strong",{staticClass:"subheading right-title"},[t._v(" Follow us ")]),n("button",{staticClass:"footer-view-button"},[n("router-link",{attrs:{to:"https://www.instagram.com/hittheants/"}},[t._v("Instagram")])],1),n("button",{staticClass:"footer-view-button"},[n("router-link",{attrs:{to:"https://www.instagram.com/hittheants/"}},[t._v("FaceBook")])],1)])],1),n("v-card-text",{staticClass:"py-2 text-center"},[t._v(" "+t._s((new Date).getFullYear())+" — "),n("strong",[t._v("ⓒAll Copyrights Reserved. 힛디앤츠(HitTheAnts) E-mail:hittheants@gmail.com")])])],1)],1)],1)},h=[],p={},m=p,w=(A("45bd"),A("b0af")),E=A("99d9"),k=A("553a"),B=A("2fa4"),q=Object(c["a"])(m,b,h,!1,null,"45e01332",null),y=q.exports;C()(q,{VCard:w["a"],VCardText:E["a"],VCardTitle:E["b"],VFooter:k["a"],VSpacer:B["a"]});var O={name:"App",components:{HeaderView:I,FooterView:y},data:function(){return{isMobile:!1}},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onResize:function(){this.isMobile=window.innerWidth<600}}},X=O,x=(A("9128"),A("7496")),L=Object(c["a"])(X,a,r,!1,null,"641624cb",null),P=L.exports;C()(L,{VApp:x["a"],VContainer:f["a"]});A("d3b7");var Q=A("8c4f");n["a"].use(Q["a"]);var V=[{path:"/",name:"Home",component:function(){return A.e("chunk-3432b811").then(A.bind(null,"bb51"))}},{path:"/test/",name:"HOME",component:function(){return A.e("chunk-3432b811").then(A.bind(null,"bb51"))}},{path:"/test/about",name:"ABOUT",component:function(){return A.e("chunk-900de16a").then(A.bind(null,"f820"))}},{path:"/test/projects",name:"PROJECTS",component:function(){return A.e("chunk-35064a61").then(A.bind(null,"acca"))}},{path:"/test/projects/detail",name:"project-detail",component:function(){return A.e("chunk-23617b96").then(A.bind(null,"97ef"))}},{path:"/test/contact",name:"CONTACT",component:function(){return A.e("chunk-96432ac0").then(A.bind(null,"b8fa"))}}],T=new Q["a"]({mode:"history",routes:V}),j=T,F=A("f309");n["a"].use(F["a"]);var Y=new F["a"]({}),G=A("8df1"),H=A.n(G);n["a"].config.productionTip=!1,new n["a"]({router:j,vuetify:Y,style:H.a,render:function(t){return t(P)}}).$mount("#app")},"71d7":function(t,e,A){},"8df1":function(t,e,A){},9128:function(t,e,A){"use strict";var n=A("b69b"),a=A.n(n);a.a},a65d:function(t,e){t.exports="data:image/png;base64,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wAkVGFUL9gktIRdHYBIKhN1B7lu37iaF1BcqCPDUeq2RdoIrR2qNU+ub+hJ6t161csXPygOESVg1ioTAhAk0JRJvLBQCTWBmf97emXl3eOFwFJ7dJqt+1d6GcFSJcDSeg/89sFfbHzw0rOyElY4LIYAAAi9dIPLSD+VIBCpX4Lldu850ntfflsncUjt7bqe1hSsUANwR9cxHjIv8UXeuuxV8L7We/br6Z1/V3dvzrEY6OHoTd+VyUvMKFYglEv8YOHgwqTkXHt3X23PoJUW/xvuMWq3f6fvequ6ent1dXV39c2rmfEwv3P9nX29vOFwbHwQQQAABBBCYrgJNDcm3aOa5mRpx59vJWOygWuMuLdZV4/VWNcYS71P6I42x2CeK6SwRQODoAhpLvlMjSHSFT4mKOZOx5OXJZHJpcZslAggggAACCExjAb0AXB1Wb0kyeZpG21mrPqXvKq1uGCQo7e2laawjgMCRBRRg9+rG9O4j52APAggggAACCCCAAAIIjFognMFxQTJ50agPICMCCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIITGeBZCxxa7Ihvnk613Gq1c2bagWmvAgggAACCCCAAALDAta46/Tv5WEKwfawy4lc80/kxbk2AggggAACCCCAwPEJOGN+YayZFZ4lDLaNcd3Hd0aOPl4BAuzjFeR4BBBAAAEEEEDgBAqks5mVxcu/GGyfUtxmOf4CqXj8GuPMR51zS4y1g7rJediO/2W5AgIIIIAAAggggAAC00Ogubk5mu/rixcikazJ51c5Z9aU1kzB9TYC7FIR1hFAAAEEEEAAAQQQKBFQC/V3jHNLnYt8MVIdaQ0GBx9TUL1QrdXPWGfOdsYN9wixtsv6kUsIsEsAWUUAAQQQQAABBBBAoCiQisW+p2D6xnDbWjugQHuLuuEsLe4fXtpn1QH+FP37cjqT+TGjiAzLsIYAAggggAACCCCAwLCAM8uLG+pjXV0eXFvr3azA+8mqGdXLqjz7Juvs/DA/LdhFNZYIIIAAAggggAACCJQINDU1JYLB3C0KrN+s1uvZ4S4F1PsVbJ9irXlKmw9GPO+RHen0FqUr2+EPAXZRgiUCCCCAAAIIIIAAAiMINCUSlxYCd40C50UzzezLDpje37RnsxcuiscbtmcyneWH0EWkXIRtBBBAAAEEEEAAAQRKBXx/uzYHjB+5PveyXN74/g3h7pGC6zD9f18S/95CobEKAAAAAElFTkSuQmCC"},b69b:function(t,e,A){}});
//# sourceMappingURL=app.36d5d2c2.js.map