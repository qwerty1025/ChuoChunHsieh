(function(t){function e(e){for(var a,r,i=e[0],c=e[1],u=e[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==o[i]&&(a=!1)}a&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-1e6051bc":"73643fdf","chunk-4e8ca01f":"af3575f9","chunk-50938b30":"55c99752","chunk-2d2091f0":"e30b6beb","chunk-2d22c101":"57131b24","chunk-47659f24":"41814f63","chunk-54cc1632":"016ee67c","chunk-5b3f2e8f":"ae92d3de","chunk-60339c8f":"85e7f598","chunk-b7eb286c":"812df978","chunk-f1a7df6e":"386f6eaa","chunk-f7ff260a":"390dedf1"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-1e6051bc":1,"chunk-4e8ca01f":1,"chunk-50938b30":1,"chunk-54cc1632":1,"chunk-5b3f2e8f":1,"chunk-60339c8f":1,"chunk-b7eb286c":1,"chunk-f1a7df6e":1,"chunk-f7ff260a":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-1e6051bc":"05dea0d1","chunk-4e8ca01f":"47a369fb","chunk-50938b30":"352e0675","chunk-2d2091f0":"31d6cfe0","chunk-2d22c101":"31d6cfe0","chunk-47659f24":"31d6cfe0","chunk-54cc1632":"86c79b16","chunk-5b3f2e8f":"0a38e498","chunk-60339c8f":"20fa81b9","chunk-b7eb286c":"0713717b","chunk-f1a7df6e":"6138fc13","chunk-f7ff260a":"b94f2c3d"}[t]+".css",o=c.p+a,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var u=s[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],f.parentNode.removeChild(f),n(s)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=i(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{staticClass:"pt-4",attrs:{floating:"",permanent:"",app:"",color:"grey lighten-3","mini-variant":""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("div",{staticClass:"mx-3 py-3"},[n("v-btn",{staticClass:"p-5",attrs:{icon:"",small:"",to:"/"}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}})])])],1),n("div",{staticClass:"mx-3 py-1.5 "},[n("v-btn",{staticClass:"p-5",attrs:{icon:"",small:"",to:"/"}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})])]),n("span",{staticClass:"text-xs font-light px-1"},[t._v(" 介紹 ")])],1),n("div",{staticClass:"mx-3 pt-3 py-1.5 "},[n("v-btn",{staticClass:"p-5",attrs:{icon:"",small:"",to:"/introList_CASE1"}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"}})])]),n("span",{staticClass:"text-xs font-light px-1"},[t._v(" 理念 ")])],1),n("div",{staticClass:"mx-3 py-1.5 "},[n("v-btn",{staticClass:"p-5",attrs:{icon:"",small:"",to:"/studyList_CASE1"}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"}})])]),n("span",{staticClass:"text-xs font-light px-1"},[t._v(" 文獻 ")])],1),n("v-divider",{staticClass:"pt-2"}),n("div",{staticClass:"mx-3 py-1.5 "},[n("v-btn",{staticClass:"p-5",attrs:{icon:"",small:"",to:"/emailme"}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"}})])])],1),n("div",{staticClass:"mx-3 py-1.5 "},[n("v-btn",{staticClass:"p-5",attrs:{icon:"",small:"",to:"Login_ing"}},[n("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"}})])])],1),n("v-divider",{staticClass:"pt-2"}),n("div",{staticClass:"mx-2 py-1.5 "},[n("v-btn",{staticClass:"p-5 bg-gray-100 text-gray-600 ",attrs:{small:"",fab:"",to:"1"}},[t._v("首頁1 ")])],1),n("div",{staticClass:"mx-2 py-1.5 "},[n("v-btn",{staticClass:"p-5 bg-gray-100 text-gray-600 ",attrs:{small:"",fab:"",to:"2"}},[t._v("首頁2 ")])],1),n("div",{staticClass:"mx-2 py-1.5 "},[n("v-btn",{staticClass:"p-5 bg-gray-100 text-gray-600 ",attrs:{small:"",fab:"",to:"3"}},[t._v("首頁3 ")])],1)],1),n("v-main",[n("router-view")],1)],1)},o=[],s={data:function(){return{direction:"top",fab:!1,fling:!1,hover:!1,tabs:null,top:!1,right:!0,bottom:!0,left:!1,transition:"slide-y-reverse-transition"}},methods:{getAnysisReport:function(){Swal.fire({icon:"question",title:"是否好奇 測試完的結果?",text:"讓我 分析數據後,帶您了解 相關的診斷 建議",footer:'<a href=""> 重新測驗 </a>'})}},watch:{top:function(t){this.bottom=!t},right:function(t){this.left=!t},bottom:function(t){this.top=!t},left:function(t){this.right=!t}}},i=s,c=n("2877"),u=n("6544"),l=n.n(u),d=n("7496"),f=n("8336"),p=n("ce7e"),h=n("f6c4"),m=n("f774"),v=Object(c["a"])(i,r,o,!1,null,null,null),b=v.exports;l()(v,{VApp:d["a"],VBtn:f["a"],VDivider:p["a"],VMain:h["a"],VNavigationDrawer:m["a"]});var g=n("8aa5"),w=n.n(g),k=(n("45fc"),n("d3b7"),n("8c4f")),C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticStyle:{background:"linear-gradient(to left, rgb(100, 181, 246), rgb(144, 202, 249))"}},[n("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[n("v-card",{staticClass:"mx-auto",attrs:{shaped:"",elevation:"20"}},[n("v-toolbar",{attrs:{color:"primary",dark:"",flat:""}},[n("v-toolbar-title",{staticClass:"headline"},[t._v("Admin Panel")])],1),n("v-card-text",[n("v-form",{ref:"form",attrs:{disabled:t.disabled,"lazy-validation":""}},[n("v-text-field",{attrs:{type:"text",label:"E-Mail",rules:t.emailRules,"prepend-icon":"mdi-at"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),n("v-text-field",{attrs:{type:t.showPassword?"text":"password",label:"Password",rules:t.passwordRules,"prepend-icon":"mdi-lock","append-icon":t.showPassword?"mdi-eye-off":"mdi-eye"},on:{"click:append":function(e){t.showPassword=!t.showPassword}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),n("p",{staticClass:"red--text"},[t._v(t._s(t.error)+" ")])],1),n("v-card-actions",[n("v-btn",{attrs:{disabled:t.disabled,block:"",color:"primary"},on:{click:t.validate}},[n("span",{directives:[{name:"show",rawName:"v-show",value:!t.disabled,expression:"!disabled"}]},[t._v("Login")]),n("span",{directives:[{name:"show",rawName:"v-show",value:t.disabled,expression:"disabled"}]},[n("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1)])],1)],1)],1)],1)],1)],1)},x=[],y=(n("ac1f"),n("5319"),{data:function(){return{disabled:!1,email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],showPassword:!1,password:"",passwordRules:[function(t){return!!t||"Password is required"}],error:""}},methods:{validate:function(){var t=this;this.$refs.form.validate()&&(this.disabled=!0,w.a.auth().signInWithEmailAndPassword(this.email,this.password).then((function(){t.disabled=!1,t.$router.replace({path:"/admin"})})).catch((function(e){t.disabled=!1,t.error=e.message})))}}}),E=y,O=n("b0af"),_=n("99d9"),S=n("62ad"),A=n("a523"),j=n("4bd4"),R=n("490a"),T=n("0fd9"),V=n("8654"),D=n("71d9"),P=n("2a7f"),M=Object(c["a"])(E,C,x,!1,null,null,null),U=M.exports;l()(M,{VApp:d["a"],VBtn:f["a"],VCard:O["a"],VCardActions:_["a"],VCardText:_["b"],VCol:S["a"],VContainer:A["a"],VForm:j["a"],VProgressCircular:R["a"],VRow:T["a"],VTextField:V["a"],VToolbar:D["a"],VToolbarTitle:P["a"]}),a["default"].use(k["a"]);var L=[{path:"/Login_ing",component:function(){return n.e("chunk-2d2091f0").then(n.bind(null,"a869"))}},{path:"/introList_CASE1",component:function(){return n.e("chunk-f1a7df6e").then(n.bind(null,"5920"))}},{path:"/studyList_CASE1",component:function(){return Promise.all([n.e("chunk-1e6051bc"),n.e("chunk-50938b30")]).then(n.bind(null,"33fb"))}},{path:"/greatList_CASE1",component:function(){return n.e("chunk-54cc1632").then(n.bind(null,"36fb"))}},{path:"/shareList_CASE1",component:function(){return n.e("chunk-b7eb286c").then(n.bind(null,"ee9f"))}},{path:"/emailme",component:function(){return n.e("chunk-5b3f2e8f").then(n.bind(null,"b9c6"))}},{path:"/1",component:function(){return n.e("chunk-47659f24").then(n.bind(null,"454c"))}},{path:"/2",component:function(){return n.e("chunk-f7ff260a").then(n.bind(null,"0950"))}},{path:"/3",component:function(){return n.e("chunk-60339c8f").then(n.bind(null,"920e"))}},{path:"/",component:function(){return n.e("chunk-47659f24").then(n.bind(null,"454c"))}},{path:"/Blog_v1",component:function(){return Promise.all([n.e("chunk-1e6051bc"),n.e("chunk-4e8ca01f")]).then(n.bind(null,"263e"))},meta:{requiresAuth:!0}},{path:"/Login",component:U},{path:"/fgtpw",name:"forgot-password",component:function(){return n.e("chunk-2d22c101").then(n.bind(null,"f243"))}}],N=new k["a"]({routes:L});N.beforeEach((function(t,e,n){t.matched.some((function(t){return t.meta.requiresAuth}))?w.a.auth().currentUser?n():n({name:"/"}):"/"==t.path&&w.a.auth().currentUser?n({path:"/Blog_v1"}):n()}));var B=N,G=n("2f62"),I={namespaced:!0,state:{user:{loggedIn:!1,data:null}},getters:{user:function(t){return t.user}},mutations:{SET_LOGGED_IN:function(t,e){t.user.loggedIn=e},SET_USER:function(t,e){t.user.data=e}},actions:{fetchUser:function(t,e){var n=t.commit;n("SET_LOGGED_IN",null!==e),n("SET_USER",e||null)}}},q=I,z=(n("c975"),n("d81d"),n("a434"),n("96cf"),n("1da1")),Y="Sounds",H={namespaced:!0,state:{sounds:[]},getters:{getSounds:function(t){return t.sounds}},mutations:{SET_SOUNDS:function(t,e){t.sounds=e},ADD_SOUND:function(t,e){t.sounds.push(e)},UPDATE_SOUND:function(t,e){Object.assign(t.sounds[e.index],e.sound)},REMOVE_SOUND:function(t,e){var n=t.sounds.indexOf(e);t.sounds.splice(n,1)}},actions:{addSound:function(t,e){return Object(z["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,Object(g["firestore"])().collection(Y).add(e);case 3:r=n.sent,e.id=r.id,a("ADD_SOUND",e);case 6:case"end":return n.stop()}}),n)})))()},loadSounds:function(t){return Object(z["a"])(regeneratorRuntime.mark((function e(){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Object(g["firestore"])().collection(Y).get();case 3:a=e.sent,o=a.docs.map((function(t){return r=t.data(),r.id=t.id,r})),n("SET_SOUNDS",o);case 6:case"end":return e.stop()}}),e)})))()},updateSound:function(t,e){return Object(z["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,Object(g["firestore"])().collection(Y).doc(e.sound.id).set(e.sound);case 3:a("UPDATE_SOUND",e);case 4:case"end":return n.stop()}}),n)})))()},removeSound:function(t,e){return Object(z["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,Object(g["firestore"])().collection(Y).doc(e.id).delete();case 3:a("REMOVE_SOUND",e);case 4:case"end":return n.stop()}}),n)})))()}}},$=H,F="Categories",J={namespaced:!0,state:{categories:[]},getters:{getCategories:function(t){return t.categories}},mutations:{SET_CATEGORIES:function(t,e){t.categories=e},ADD_CATEGORY:function(t,e){t.categories.push(e)},UPDATE_CATEGORY:function(t,e){Object.assign(t.categories[e.index],e.category)},REMOVE_CATEGORY:function(t,e){var n=t.categories.indexOf(e);t.categories.splice(n,1)}},actions:{addCategory:function(t,e){return Object(z["a"])(regeneratorRuntime.mark((function n(){var a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,Object(g["firestore"])().collection(F).add(e);case 3:r=n.sent,e.id=r.id,a("ADD_CATEGORY",e);case 6:case"end":return n.stop()}}),n)})))()},loadCategories:function(t){return Object(z["a"])(regeneratorRuntime.mark((function e(){var n,a,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,Object(g["firestore"])().collection(F).get();case 3:a=e.sent,o=a.docs.map((function(t){return r=t.data(),r.id=t.id,r})),n("SET_CATEGORIES",o);case 6:case"end":return e.stop()}}),e)})))()},updateCategory:function(t,e){return Object(z["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,Object(g["firestore"])().collection(F).doc(e.category.id).set(e.category);case 3:a("UPDATE_CATEGORY",e);case 4:case"end":return n.stop()}}),n)})))()},removeCategory:function(t,e){return Object(z["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=t.commit,n.next=3,Object(g["firestore"])().collection(F).doc(e.id).delete();case 3:a("REMOVE_CATEGORY",e);case 4:case"end":return n.stop()}}),n)})))()}}},K=J;a["default"].use(G["a"]);var W=new G["a"].Store({modules:{auth:q,categories:K,sounds:$}}),Q=n("f309");a["default"].use(Q["a"]);var X=new Q["a"]({}),Z=n("0ff2"),tt=n("8cb8"),et=n("3d20"),nt=n.n(et),at=n("5a0c"),rt=n.n(at),ot=n("48cd"),st=n.n(ot);a["default"].config.productionTip=!1,a["default"].use(Z["a"]);var it={apiKey:"AIzaSyDnVquQGd724SE39PdkZ1vs49Tki2Joums",authDomain:"a8ask-4c2de.firebaseapp.com",databaseURL:"https://a8ask-4c2de-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"a8ask-4c2de",storageBucket:"a8ask-4c2de.appspot.com",messagingSenderId:"424321311432",appId:"1:424321311432:web:e1137966ad5bb04f853bfd",measurementId:"G-25W3XV40CH"};g["initializeApp"](it);var ct;e["default"]=g["database"]();a["default"].use(tt["default"]),window.Swal=nt.a,a["default"].prototype.dayjs=rt.a,a["default"].use(st.a),g["auth"]().onAuthStateChanged((function(t){W.dispatch("auth/fetchUser",t),ct||new a["default"]({store:W,router:B,vuetify:X,render:function(t){return t(b)}}).$mount("#app")}))}});