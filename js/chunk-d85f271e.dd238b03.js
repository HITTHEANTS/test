(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d85f271e"],{"0e8f":function(t,e,i){"use strict";i("20f6");var s=i("e8f2");e["a"]=Object(s["a"])("flex")},"269a":function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var s in"function"===typeof t.exports&&(i.directives=t.exports.options.directives),i.directives=i.directives||{},e)i.directives[s]=i.directives[s]||e[s]}},"36a7":function(t,e,i){},"3f41":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAYCAYAAAAh8HdUAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAADaADAAQAAAABAAAAGAAAAAABygBcAAABI0lEQVQ4EZXSz22DMBgF8NqJgAHadIf+OWWC0A06BOKCGIYLYoiyQXLKBGkyRNpLbghFkPeQbCGwwViKCPD9/D7biCfHEcfxpm3bH5TfVi6GoGmaPWq3QoirmEM98A7w63leOIlMIMuyPyuyAXa2NrVHgEUf8O5NtcQEVTtKUgDICAil0rz2AW5PXHQ/QdVqlKbpK1tiAoHv+18mQNi1R1BV1V4BPA+LovhngWmIpYCTSCSUrgkqlVt+5w22dhUEgdNnJZHyDXNiGtfFHeQkU6PbiCiKnlHED/ITiRf8dnmeX21QH+4SqM+JW8yzwexdq2j3YGtVJ6lWkiR5qeuaZ/aBZ2cpZThsdYSI56ARzUErmoKTyAZn0RDiDI9OqAdL/L89AFZh4dXh30YhAAAAAElFTkSuQmCC"},"8efc":function(t,e,i){},"90a2":function(t,e,i){"use strict";i("7db0");var s=i("53ca");function n(t,e){var i=e.modifiers||{},n=e.value,a="object"===Object(s["a"])(n),o=a?n.handler:n,c=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],s=arguments.length>1?arguments[1]:void 0;if(t._observe){if(o&&(!i.quiet||t._observe.init)){var n=Boolean(e.find((function(t){return t.isIntersecting})));o(e,s,n)}t._observe.init&&i.once?r(t):t._observe.init=!0}}),n.options||{});t._observe={init:!1,observer:c},c.observe(t)}function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var a={inserted:n,unbind:r};e["a"]=a},"97ef":function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{directives:[{name:"scroll",rawName:"v-scroll:#scroll-target",value:t.onScroll,expression:"onScroll",arg:"#scroll-target"}],attrs:{column:""}},[t.isMobile?s("div",[s("div",{staticClass:"mt-4 mr-5 ml-5 title-block"},[s("div",{staticClass:"title"},[s("img",{attrs:{src:i("3f41")}}),t._v(" Collact ")]),s("div",{staticClass:"subTitle"},[t._v(" Date January 11, 2019 "),s("br"),t._v(" Tags App Service")])]),s("v-flex",{staticClass:"mt-10 ml-5 mr-5 introduce-project"},[t._v(" collact는 이 시대를 살아가는 젊은 아티스트들을 위한 온라인 공간을 만드는 프로젝트입니다. 누구나 크리에이터가 되는 시대. 창작의 진입 장벽이 낮아짐에 따라 미술 시장의 규모와 네트워킹의 니즈는 점점 증가하고 있지만, 아티스트를 발견하고 소통할 수 있는 창구는 아직 없습니다. 등등등 소개문구 "),s("v-img",{staticClass:"projectImg",attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),s("v-img",{staticClass:"projectImg",attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}})],1)],1):s("div",[s("v-flex",{staticClass:"mt-4 ml-5 text-block",staticStyle:{width:"100%",height:"100%"}},[s("div",{staticClass:"left-text"},[s("div",{staticClass:"left-text-title"},[t._v(" Collact ")]),s("div",{staticClass:"left-text-subtitle"},[t._v(" Date January 11, 2019 "),s("br"),t._v(" Tags App Service ")])]),s("div",{staticClass:"right-block"},[s("div",{staticClass:"right-text"},[t._v(" collact는 이 시대를 살아가는 젊은 아티스트들을 위한 온라인 공간을 만드는 프로젝트입니다. 누구나 크리에이터가 되는 시대. 창작의 진입 장벽이 낮아짐에 따라 미술 시장의 규모와 네트워킹의 니즈는 점점 증가하고 있지만, 아티스트를 발견하고 소통할 수 있는 창구는 아직 없습니다. 등등등 소개문구 ")])])]),s("v-flex",{staticStyle:{weight:"100%"},attrs:{"mt-20":""}},[s("v-img",{staticClass:"projectImg",attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}}),s("v-img",{staticClass:"projectImg",attrs:{src:"https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",height:"200px"}})],1)],1)])},n=[],r={data:function(){return{isMobile:!1}},beforeDestroy:function(){"undefined"!==typeof window&&window.removeEventListener("resize",this.onResize,{passive:!0})},mounted:function(){this.onResize(),window.addEventListener("resize",this.onResize,{passive:!0})},methods:{onResize:function(){this.isMobile=window.innerWidth<600},onScroll:function(t){this.offsetTop=t.target.scrollTop}}},a=r,o=(i("bade"),i("2877")),c=i("6544"),l=i.n(c),d=i("0e8f"),h=i("adda"),u=i("a722"),v=i("269a"),g=i.n(v),m=i("f977"),p=Object(o["a"])(a,s,n,!1,null,"62459c94",null);e["default"]=p.exports;l()(p,{VFlex:d["a"],VImg:h["a"],VLayout:u["a"]}),g()(p,{Scroll:m["a"]})},a722:function(t,e,i){"use strict";i("20f6");var s=i("e8f2");e["a"]=Object(s["a"])("layout")},adda:function(t,e,i){"use strict";i("a15b"),i("a9e3"),i("8efc");var s=i("90a2"),n=(i("36a7"),i("24b2")),r=i("58df"),a=Object(r["a"])(n["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),o=a,c=i("d9bd");e["a"]=o.extend({name:"v-img",directives:{intersect:s["a"]},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},hasIntersect:function(){return"undefined"!==typeof window&&"IntersectionObserver"in window},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,i){if(!this.hasIntersect||i||this.eager){if(this.normalisedSrc.lazySrc){var s=new Image;s.src=this.normalisedSrc.lazySrc,this.pollForSize(s,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(c["b"])("Image load failed\n\n"+"src: ".concat(this.normalisedSrc.src),this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch((function(e){Object(c["c"])("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,s=function s(){var n=t.naturalHeight,r=t.naturalWidth;n||r?(e.naturalWidth=r,e.calculatedAspectRatio=r/n):null!=i&&setTimeout(s,i)};s()},genContent:function(){var t=o.options.methods.genContent.call(this);return this.naturalWidth&&this._b(t.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),t},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=o.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.directives=this.hasIntersect?[{name:"intersect",options:this.options,modifiers:{once:!0},value:this.init}]:[],e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},b850:function(t,e,i){},bade:function(t,e,i){"use strict";var s=i("b850"),n=i.n(s);n.a},f977:function(t,e,i){"use strict";function s(t,e){var i=e.value,s=e.options||{passive:!0},n=e.arg?document.querySelector(e.arg):window;n&&(n.addEventListener("scroll",i,s),t._onScroll={callback:i,options:s,target:n})}function n(t){if(t._onScroll){var e=t._onScroll,i=e.callback,s=e.options,n=e.target;n.removeEventListener("scroll",i,s),delete t._onScroll}}var r={inserted:s,unbind:n};e["a"]=r}}]);
//# sourceMappingURL=chunk-d85f271e.dd238b03.js.map