(function(e){function t(t){for(var n,i,c=t[0],o=t[1],l=t[2],m=0,f=[];m<c.length;m++)i=c[m],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,c=1;c<a.length;c++){var o=a[c];0!==r[o]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},s=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=o;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"242a":function(e,t,a){},"2c7b":function(e,t,a){},"2e2a":function(e,t,a){"use strict";var n=a("eb56"),r=a.n(n);r.a},"2e61":function(e,t,a){"use strict";var n=a("f6ac"),r=a.n(n);r.a},"35db":function(e,t,a){"use strict";var n=a("e664"),r=a.n(n);r.a},4757:function(e,t,a){"use strict";var n=a("c6e8"),r=a.n(n);r.a},"487c":function(e,t,a){"use strict";var n=a("e3b7"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("8c4f"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("Main",{attrs:{msg:"A Tagline For Your Service",descrip:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ultrices, lacus ut fermentum malesuada, \n               orci ex ultricies mauris, tempus congue nisi orci eget urna."}})],1)},i=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"main"},[a("div",{staticClass:"main-container"},[a("Navbar"),a("div",{staticClass:"hero"},[a("h1",[e._v(e._s(e.msg))]),a("p",[e._v(e._s(e.descrip))]),a("router-link",{attrs:{to:"/about",tag:"button"}},[e._v("Learn More")])],1)],1),a("svg",{staticClass:"design",attrs:{width:"934",height:"1322",viewBox:"0 0 934 1322"}},[a("g",{attrs:{id:"Design",transform:"translate(-1020)",opacity:"0.6"}},[a("g",{attrs:{id:"Ellipse_2","data-name":"Ellipse 2",transform:"translate(1020 419)",fill:"#dfc7ff",stroke:"#443ead","stroke-width":"1",opacity:"0.2"}},[a("ellipse",{attrs:{cx:"467",cy:"451.5",rx:"467",ry:"451.5",stroke:"none"}}),a("ellipse",{attrs:{cx:"467",cy:"451.5",rx:"466.5",ry:"451",fill:"none"}})]),a("g",{attrs:{id:"Ellipse_1","data-name":"Ellipse 1",transform:"translate(1020)",fill:"#dfc7ff",stroke:"#443ead","stroke-width":"1",opacity:"0.2"}},[a("ellipse",{attrs:{cx:"467",cy:"451.5",rx:"467",ry:"451.5",stroke:"none"}}),a("ellipse",{attrs:{cx:"467",cy:"451.5",rx:"466.5",ry:"451",fill:"none"}})])])])])},o=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav-container"},[a("header",[e._v("logo")]),a("nav",{staticClass:"navbar"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/about"}},[e._v("about")])],1),a("li",[a("router-link",{attrs:{to:"/service"}},[e._v("service")])],1),a("li",[a("router-link",{attrs:{to:"/contact"}},[e._v("contact")])],1)])])])},u=[],m={name:"Navbar"},f=m,v=(a("7df7"),a("2877")),p=Object(v["a"])(f,l,u,!1,null,"c127ce02",null),d=p.exports,b=a("a925");n["a"].use(b["a"]);var _=new b["a"]({locale:"en",fallbackLocale:"es"}),h={name:"Main",props:{msg:String,descrip:String},components:{Navbar:d},methods:{changeLocale:function(e){_.locale=e}}},g=h,x=(a("f32c"),Object(v["a"])(g,c,o,!1,null,"6ea43b98",null)),y=x.exports,C={name:"Home",components:{Main:y}},w=C,O=Object(v["a"])(w,s,i,!1,null,null,null),S=O.exports,j=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"about"},[a("Description")],1)},E=[],k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},$=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"description"},[n("img",{attrs:{src:a("8349"),alt:"stock"}}),n("div",{staticClass:"description-container"},[n("div",{staticClass:"glass1"},[n("h2",[e._v("We Care")]),n("p",[e._v(" Curabitur ac vehicula est, non fermentum risus. In accumsan leo vel tellus mollis luctus. Aliquam erat volutpat. Sed id augue euismod, pellentesque justo vel, varius lectus. ")])]),n("div",{staticClass:"body"},[n("h1",[e._v("An About Tag")]),n("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam iaculis velit sed diam interdum pulvinar. ")])]),n("div",{staticClass:"glass2"},[n("h2",[e._v("We Listen")]),n("p",[e._v(" Curabitur ac vehicula est, non fermentum risus. In accumsan leo vel tellus mollis luctus. Aliquam erat volutpat. Sed id augue euismod, pellentesque justo vel, varius lectus. ")])])])])}],L={name:"Description",methods:{changeLocale:function(e){_.locale=e}}},N=L,M=(a("98ab"),Object(v["a"])(N,k,$,!1,null,"1fb8b156",null)),P=M.exports,q={name:"About",components:{Description:P}},F=q,I=Object(v["a"])(F,j,E,!1,null,null,null),R=I.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"service"},[a("Splitscreen")],1)},T=[],W=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"split-screen"},[a("div",{staticClass:"side1"},[a("router-link",{attrs:{to:"/offer",tag:"button"}},[e._v("What We Offer")])],1),a("div",{staticClass:"side2"},[a("router-link",{attrs:{to:"/review",tag:"button"}},[e._v("What Our Users Think")])],1)])},U=[],D={name:"Splitscreen",methods:{changeLocale:function(e){_.locale=e}}},H=D,J=(a("487c"),Object(v["a"])(H,W,U,!1,null,"381b0263",null)),B=J.exports,Y={name:"Service",components:{Splitscreen:B}},z=Y,G=Object(v["a"])(z,A,T,!1,null,null,null),K=G.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contact"},[a("Form",{attrs:{title:"Contact Us"}})],1)},V=[],X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"information"},[a("div",{staticClass:"info-form"},[a("h2",[e._v(e._s(e.title))]),e._m(0)])])},Z=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{attrs:{action:""}},[a("label",{attrs:{for:"fname"}},[e._v("First Name")]),a("input",{attrs:{type:"text",id:"fname"}}),a("label",{attrs:{for:"lname"}},[e._v("Last Name")]),a("input",{attrs:{type:"text",id:"lname"}}),a("label",{attrs:{for:"email"}},[e._v("Email")]),a("input",{attrs:{type:"email",id:"email"}}),a("label",{attrs:{for:"message"}},[e._v("Message")]),a("textarea",{attrs:{name:"message",id:"message",cols:"30",rows:"10"}}),a("button",{attrs:{type:"submit"}},[e._v("Submit")])])}],ee={name:"Form",props:{title:String},methods:{changeLocale:function(e){_.locale=e}}},te=ee,ae=(a("c152"),Object(v["a"])(te,X,Z,!1,null,"32e946d2",null)),ne=ae.exports,re={name:"Contact",components:{Form:ne}},se=re,ie=(a("35db"),Object(v["a"])(se,Q,V,!1,null,"91bfc874",null)),ce=ie.exports,oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"offer"},[e._m(0),a("Info")],1)},le=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("h1",[e._v("OFFERS")])])}],ue=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},me=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info"},[a("div",{staticClass:"service"},[a("h3",[e._v("Service")]),a("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt urna arcu, eget dapibus mauris accumsan non. Integer lobortis nisi malesuada mauris posuere pharetra. Proin et quam interdum, cursus odio eu, pharetra elit. ")])]),a("div",{staticClass:"service"},[a("h3",[e._v("Service")]),a("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt urna arcu, eget dapibus mauris accumsan non. Integer lobortis nisi malesuada mauris posuere pharetra. Proin et quam interdum, cursus odio eu, pharetra elit. ")])]),a("div",{staticClass:"service"},[a("h3",[e._v("Service")]),a("p",[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt urna arcu, eget dapibus mauris accumsan non. Integer lobortis nisi malesuada mauris posuere pharetra. Proin et quam interdum, cursus odio eu, pharetra elit. ")])])])}],fe={name:"Info",methods:{changeLocale:function(e){_.locale=e}}},ve=fe,pe=(a("2e61"),Object(v["a"])(ve,ue,me,!1,null,null,null)),de=pe.exports,be={name:"Offer",components:{Info:de}},_e=be,he=(a("d00b"),Object(v["a"])(_e,oe,le,!1,null,"4fa95d87",null)),ge=he.exports,xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"review"},[a("h1",[e._v("Review")]),a("div",{staticClass:"content"},[e._m(0),a("UserReview",{attrs:{name:"Mark Smith",review:'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt urna arcu, eget dapibus mauris accumsan non."'}})],1)])},ye=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("form",{attrs:{action:""}},[a("h2",[e._v("Write a Review")]),a("label",{attrs:{for:"fname"}},[e._v("First Name")]),a("input",{attrs:{type:"text",id:"fname"}}),a("label",{attrs:{for:"lname"}},[e._v("Last Name")]),a("input",{attrs:{type:"text",id:"lname"}}),a("label",{attrs:{for:"message"}},[e._v("Message")]),a("textarea",{attrs:{name:"message",id:"message",cols:"30",rows:"10"}}),a("button",{attrs:{type:"submit"}},[e._v("Submit")])])}],Ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-review"},[a("div",{staticClass:"review"},[a("p",[e._v(e._s(e.review))]),a("p",[e._v(e._s(e.name))])])])},we=[],Oe={name:"UserReview",props:{name:String,review:String},methods:{changeLocale:function(e){_.locale=e}}},Se=Oe,je=(a("4757"),Object(v["a"])(Se,Ce,we,!1,null,"672811e8",null)),Ee=je.exports,ke={name:"Review",components:{UserReview:Ee}},$e=ke,Le=(a("2e2a"),Object(v["a"])($e,xe,ye,!1,null,"2e965747",null)),Ne=Le.exports;n["a"].use(r["a"]);var Me=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:R},{path:"/service",name:"Service",component:K},{path:"/contact",name:"Contact",component:ce},{path:"/offer",name:"Offer",component:ge},{path:"/review",name:"Review",component:Ne}],Pe=new r["a"]({mode:"history",base:"/",routes:Me}),qe=Pe,Fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)],1)},Ie=[],Re=(a("5c0b"),{}),Ae=Object(v["a"])(Re,Fe,Ie,!1,null,null,null),Te=Ae.exports;n["a"].config.productionTip=!1,new n["a"]({router:qe,i18n:_,render:function(e){return e(Te)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var n=a("9c0c"),r=a.n(n);r.a},6897:function(e,t,a){},"7df7":function(e,t,a){"use strict";var n=a("b2cd"),r=a.n(n);r.a},8349:function(e,t,a){e.exports=a.p+"img/Stock.5d8c2c95.png"},"98ab":function(e,t,a){"use strict";var n=a("2c7b"),r=a.n(n);r.a},"9c0c":function(e,t,a){},a3df:function(e,t,a){},b2cd:function(e,t,a){},c152:function(e,t,a){"use strict";var n=a("6897"),r=a.n(n);r.a},c6e8:function(e,t,a){},d00b:function(e,t,a){"use strict";var n=a("a3df"),r=a.n(n);r.a},e3b7:function(e,t,a){},e664:function(e,t,a){},eb56:function(e,t,a){},f32c:function(e,t,a){"use strict";var n=a("242a"),r=a.n(n);r.a},f6ac:function(e,t,a){}});
//# sourceMappingURL=app.f9dc01ae.js.map