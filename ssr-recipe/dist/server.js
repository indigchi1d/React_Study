(()=>{"use strict";var e,r={985:(e,r,t)=>{t.d(r,{A:()=>d});var s=t(822),n=(t(524),t(612)),o=t(248),i=t.n(o),a=t(732);const l=i()({resolved:{},chunkName:()=>"pages-RedPage",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:()=>t.e(730).then(t.bind(t,183)),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return t(r)},resolve:()=>183}),c=i()({resolved:{},chunkName:()=>"pages-Bluepage",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:()=>t.e(39).then(t.bind(t,864)),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return t(r)},resolve:()=>864}),u=i()({resolved:{},chunkName:()=>"pages-UsersPage",isReady(e){const r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:()=>t.e(399).then(t.bind(t,148)),requireAsync(e){const r=this.resolve(e);return this.resolved[r]=!1,this.importAsync(e).then((e=>(this.resolved[r]=!0,e)))},requireSync(e){const r=this.resolve(e);return t(r)},resolve:()=>148});const d=function(){return(0,a.jsxs)("div",{children:[(0,a.jsx)(n.A,{}),(0,a.jsx)("hr",{}),(0,a.jsxs)(s.Routes,{children:[(0,a.jsx)(s.Route,{path:"/red",element:(0,a.jsx)(l,{})}),(0,a.jsx)(s.Route,{path:"/blue",element:(0,a.jsx)(c,{})}),(0,a.jsx)(s.Route,{path:"/users/*",element:(0,a.jsx)(u,{})})]})]})}},612:(e,r,t)=>{t.d(r,{A:()=>o});var s=t(822),n=(t(15),t(732));const o=()=>(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)(s.Link,{to:"/red",children:"red"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.Link,{to:"/blue",children:"blue"})}),(0,n.jsx)("li",{children:(0,n.jsx)(s.Link,{to:"users",children:"Users"})})]})},125:(e,r,t)=>{const s=require("react-dom/server");var n=t.n(s);const o=require("express");var i=t.n(o);const a=require("react-router-dom/server");var l=t(985);const c=require("path");var u=t.n(c);const d=require("fs");var p=t.n(d);const h=require("redux");var v=t(544);const y=require("redux-thunk");var g=t(223),m=t(364);function*x(){yield(0,m.all)([(0,g.zk)()])}const j=(0,h.combineReducers)({users:g.Ay});var S=t(220);const f=require("redux-saga");var b=t.n(f);const E=require("@loadable/server");var q=t(732);const A=u().resolve("./build/loadable-stats.json"),R=JSON.parse(p().readFileSync(u().resolve("./build/asset-manifest.json"),"utf-8")),k=i()(),_=i().static(u().resolve("./build"),{index:!1});k.use(_),k.use((async(e,r,t)=>{const s=b()(),o=(0,h.createStore)(j,(0,h.applyMiddleware)(y.thunk,s)),i=s.run(x).toPromise(),c={done:!1,promises:[]},u=new E.ChunkExtractor({statsFile:A}),d=(0,q.jsx)(E.ChunkExtractorManager,{extractor:u,children:(0,q.jsx)(S.A.Provider,{value:c,children:(0,q.jsx)(v.Provider,{store:o,children:(0,q.jsx)(a.StaticRouter,{location:e.url,context:{},children:(0,q.jsx)(l.A,{})})})})});n().renderToStaticMarkup(d),o.dispatch(f.END);try{await i,await Promise.all(c.promises)}catch(e){return r.status(500)}c.done=!0;const p=n().renderToString(d),g=JSON.stringify(o.getState()).replace(/</g,"\\u003c"),m={scripts:"<script>__PRELOADED_STATE__ = ".concat(g,"<\/script>")+u.getScriptTags(),links:u.getLinkTags(),styles:u.getStyleTags()};r.send(function(e,r){return'<!DOCTYPE html>\n    <html lang="en">\n      <head>\n      <meta charset = "utf-8"/>\n      <link rel="shortcut icon" href="/favicon.ico"/>\n      <meta \n        name = "viewport"\n        content = "width=device-width, initial-scale=1,shrink-to-fit=no"\n      />\n      <meta name="theme-color" content="#000000" />\n      <title>React App</title>\n      '.concat(r.styles,"\n      ").concat(r.links,'\n      </head>\n      <body>\n        <noscript>\n          You need to enable JS to run this app.\n        </noscript>\n        <div id = "root">').concat(e,"</div>\n        ").concat(r.scripts,"\n        <script src=").concat(R.files["main.js"],"><\/script>\n      </body>\n    </html> \n  ")}(p,m))})),k.listen(8080,(()=>{console.log("Running on http://localhost:8080")}))},220:(e,r,t)=>{t.d(r,{A:()=>o,Z:()=>i});var s=t(15);const n=(0,s.createContext)(null),o=n,i=e=>{let{resolve:r}=e;const t=(0,s.useContext)(n);return t?(t.done||t.promises.push(Promise.resolve(r())),null):null}},223:(e,r,t)=>{t.d(r,{Ay:()=>S,wz:()=>p,lo:()=>y,zk:()=>x});const s=require("axios");var n=t.n(s),o=t(364);const i="users/GET_USERS_PENDING",a="users/GET_USERS_SUCCESS",l="users/GET_USERS_FALIURE",c="users/GET_USER",u="users/GET_USER_SUCCESS",d="users/GET_USER_FAILURE",p=e=>({type:c,payload:e}),h=e=>({type:u,payload:e}),v=e=>({type:d,payload:e,error:!0}),y=()=>async e=>{try{e({type:i});const r=await n().get("https://jsonplaceholder.typicode.com/users");e({type:a,payload:r})}catch(r){throw e({type:l,error:!0,payload:r}),r}},g=e=>n().get("https://jsonplaceholder.typicode.com/users/".concat(e));function*m(e){try{const r=yield(0,o.call)(g,e.payload);yield(0,o.put)(h(r.data))}catch(e){yield(0,o.put)(v(e))}}function*x(){yield(0,o.takeEvery)(c,m)}const j={users:null,user:null,loading:{users:!1,user:!1},error:{users:null,user:null}},S=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case i:return{...e,loading:{...e.loading,users:!0}};case a:return{...e,loading:{...e.loading,users:!1},users:r.payload.data};case l:return{...e,loading:{...e.loading,users:!1},error:{...e.error,users:r.payload}};case c:return{...e,loading:{...e.loading,user:!0},error:{...e.error,user:null}};case u:return{...e,loading:{...e.loading,user:!1},user:r.payload};case d:return{...e,loading:{...e.loading,user:!1},error:{...e.error,user:r.payload}};default:return e}}},524:()=>{},248:e=>{e.exports=require("@loadable/component")},15:e=>{e.exports=require("react")},544:e=>{e.exports=require("react-redux")},822:e=>{e.exports=require("react-router-dom")},732:e=>{e.exports=require("react/jsx-runtime")},364:e=>{e.exports=require("redux-saga/effects")}},t={};function s(e){var n=t[e];if(void 0!==n)return n.exports;var o=t[e]={exports:{}};return r[e](o,o.exports,s),o.exports}s.m=r,s.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return s.d(r,{a:r}),r},s.d=(e,r)=>{for(var t in r)s.o(r,t)&&!s.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((r,t)=>(s.f[t](e,r),r)),[])),s.u=e=>"js/"+{39:"pages-Bluepage",399:"pages-UsersPage",730:"pages-RedPage"}[e]+".chunk.js",s.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},e={792:1},s.f.require=(r,t)=>{e[r]||(r=>{var t=r.modules,n=r.ids,o=r.runtime;for(var i in t)s.o(t,i)&&(s.m[i]=t[i]);o&&o(s);for(var a=0;a<n.length;a++)e[n[a]]=1})(require("./"+s.u(r)))};s(125)})();