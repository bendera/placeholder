webpackJsonp([1],[,,,,,,function(t,e,a){"use strict";function n(t){a(21)}var o=a(22),i=a(39),l=a(2),r=n,c=l(o.a,i.a,!1,r,"data-v-a303c902",null);e.a=c.exports},,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(4),o=a(0),i=a(19),l=a(40);a.n(l);a(14),n.a.config.productionTip=!1,n.a.use(o.m),new n.a({el:"#q-app",router:i.a,render:function(t){return t(a(42).default)}})},function(t,e){},,,,,function(t,e,a){"use strict";var n=a(4),o=a(20),i=a(6);n.a.use(o.a),e.a=new o.a({routes:[{path:"/",component:i.a}]})},,function(t,e){},function(t,e,a){"use strict";var n=a(0),o=a(23),i=a(25),l=a(38),r={svg:new l.a,png:new i.a};e.a={components:{QBtn:n.a,QCard:n.b,QCardMain:n.c,QCardTitle:n.d,QField:n.e,QInput:n.f,QOptionGroup:n.h,QSelect:n.i,QInputColor:o.a},data:function(){return{width:600,height:400,textColor:"#ffffff",backgroundColor:"#cccccc",caption:"",fontFamily:"Helvetica, Arial, sans-serif",fontSize:40,fontAlign:"center",filetype:"png",dataURI:""}},methods:{updateImage:Object(n.l)(function(){this.dataURI=r[this.filetype].render({width:this.width,height:this.height,textColor:this.textColor,backgroundColor:this.backgroundColor,caption:""!==this.caption?this.caption:this.width+" x "+this.height,fontFamily:this.fontFamily,filetype:this.filetype})},400),selectDataURI:function(t){t.target.setSelectionRange(0,t.target.value.length)}},mounted:function(){this.updateImage()}}},function(t,e,a){"use strict";var n=a(24),o=a(2),i=o(n.a,null,!1,null,null,null);e.a=i.exports},function(t,e,a){"use strict";var n=a(0);e.a={mixins:[n.f],props:{type:{validator:function(){return"color"}}}}},function(t,e,a){"use strict";var n=a(7),o=a.n(n),i=a(8),l=a.n(i),r=function(){function t(){o()(this,t),this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d")}return l()(t,[{key:"render",value:function(t){return this.canvas.setAttribute("width",t.width),this.canvas.setAttribute("height",t.height),this.ctx.clearRect(0,0,t.width,t.height),this.ctx.fillStyle=t.backgroundColor,this.ctx.fillRect(0,0,t.width,t.height),this.ctx.font="48px "+t.fontFamily,this.ctx.textBaseline="middle",this.ctx.textAlign="center",this.ctx.fillStyle=t.textColor,this.ctx.fillText(t.caption,t.width/2,t.height/2),this.canvas.toDataURL()}}]),t}();e.a=r},,,,,,,,,,,,,function(t,e,a){"use strict";var n=a(7),o=a.n(n),i=a(8),l=a.n(i),r=function(){function t(){o()(this,t),console.log("svg renderer")}return l()(t,[{key:"render",value:function(){return"a"}}]),t}();e.a=r},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image-params-form"},[a("QCard",[a("QCardTitle",[t._v("Options")]),t._v(" "),a("QCardMain",[a("QInput",{attrs:{type:"number","float-label":"Width"},on:{change:function(e){t.updateImage()}},model:{value:t.width,callback:function(e){t.width=e},expression:"width"}}),t._v(" "),a("QInput",{attrs:{type:"number","float-label":"Height"},on:{change:function(e){t.updateImage()}},model:{value:t.height,callback:function(e){t.height=e},expression:"height"}}),t._v(" "),a("QInputColor",{attrs:{type:"color","float-label":"Text color"},on:{change:function(e){t.updateImage()}},model:{value:t.textColor,callback:function(e){t.textColor=e},expression:"textColor"}}),t._v(" "),a("QInputColor",{attrs:{type:"color","float-label":"Background color"},on:{change:function(e){t.updateImage()}},model:{value:t.backgroundColor,callback:function(e){t.backgroundColor=e},expression:"backgroundColor"}}),t._v(" "),a("QInput",{attrs:{type:"text","float-label":"Caption"},on:{change:function(e){t.updateImage()}},model:{value:t.caption,callback:function(e){t.caption=e},expression:"caption"}}),t._v(" "),a("QInput",{attrs:{type:"text","float-label":"Font family"},on:{change:function(e){t.updateImage()}},model:{value:t.fontFamily,callback:function(e){t.fontFamily=e},expression:"fontFamily"}}),t._v(" "),a("QSelect",{attrs:{radio:"","float-label":"Filetype",options:[{label:"SVG",value:"svg"},{label:"PNG",value:"png"}]},on:{change:function(e){t.updateImage()}},model:{value:t.filetype,callback:function(e){t.filetype=e},expression:"filetype"}})],1)],1),t._v(" "),a("QCard",[a("QCardTitle",[t._v("Output")]),t._v(" "),a("QCardMain",[a("div",{attrs:{id:"canvas-demo"}}),t._v(" "),a("div",{staticClass:"image-preview"},[a("img",{attrs:{src:t.dataURI,alt:"preview image"}})]),t._v(" "),a("QInput",{attrs:{"stack-label":"Data URI",readonly:""},on:{focus:function(e){t.selectDataURI(e)}},model:{value:t.dataURI,callback:function(e){t.dataURI=e},expression:"dataURI"}})],1)],1)],1)},o=[],i={render:n,staticRenderFns:o};e.a=i},,function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(43),o=a(44),i=a(2),l=i(n.a,o.a,!1,null,null,null);e.default=l.exports},function(t,e,a){"use strict";var n=a(0),o=a(6);e.a={components:{QField:n.e,QInput:n.f,QLayout:n.g,QToolbar:n.j,QToolbarTitle:n.k,ImageParamsForm:o.a}}},function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"q-app"}},[a("QLayout",[a("QToolbar",{attrs:{slot:"header"},slot:"header"},[t._v("\n      Placeholder image generator\n    ")]),t._v(" "),a("ImageParamsForm")],1)],1)},o=[],i={render:n,staticRenderFns:o};e.a=i}],[13]);