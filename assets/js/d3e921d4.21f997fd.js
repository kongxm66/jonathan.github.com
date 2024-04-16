"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),c=u(r),v=a,d=c["".concat(p,".").concat(v)]||c[v]||m[v]||o;return r?n.createElement(d,s(s({ref:t},i),{},{components:r})):n.createElement(d,s({ref:t},i))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=v;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}v.displayName="MDXCreateElement"},3385:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const o={title:"vuex\u7b80\u5355\u4f7f\u7528",tags:["frontend","vue","vuex"]},s=void 0,l={permalink:"/blog/2019/05/28/how-to-use-vuex",editUrl:"https://github.com/JonathanTube/Jonathan.Kong.github.com/tree/main/blog/2019-05-28-how-to-use-vuex.md",source:"@site/blog/2019-05-28-how-to-use-vuex.md",title:"vuex\u7b80\u5355\u4f7f\u7528",description:"\u9879\u76ee\u6839src\u76ee\u5f55\u5efa\u7acbstore\u6587\u4ef6",date:"2019-05-28T00:00:00.000Z",formattedDate:"May 28, 2019",tags:[{label:"frontend",permalink:"/blog/tags/frontend"},{label:"vue",permalink:"/blog/tags/vue"},{label:"vuex",permalink:"/blog/tags/vuex"}],readingTime:1.5,hasTruncateMarker:!1,authors:[],frontMatter:{title:"vuex\u7b80\u5355\u4f7f\u7528",tags:["frontend","vue","vuex"]},prevItem:{title:"How to use http-proxy-middleware",permalink:"/blog/2021/05/20/how-to-use-http-proxy-middleware"},nextItem:{title:"\u5982\u4f55\u8bbe\u7f6e\u672c\u5730ssl\u6d4b\u8bd5\u73af\u5883",permalink:"/blog/2015/05/28/how-to-set-local-ssl"}},p={authorsImageUrls:[]},u=[{value:"\u9879\u76ee\u6839src\u76ee\u5f55\u5efa\u7acbstore\u6587\u4ef6",id:"\u9879\u76ee\u6839src\u76ee\u5f55\u5efa\u7acbstore\u6587\u4ef6",level:2},{value:"main.js\u4e2d\u914d\u7f6e",id:"mainjs\u4e2d\u914d\u7f6e",level:2},{value:"vue\u6587\u4ef6\u4e2d\u4f7f\u7528",id:"vue\u6587\u4ef6\u4e2d\u4f7f\u7528",level:2}],i={toc:u},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u9879\u76ee\u6839src\u76ee\u5f55\u5efa\u7acbstore\u6587\u4ef6"},"\u9879\u76ee\u6839src\u76ee\u5f55\u5efa\u7acbstore\u6587\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"/src/store/index")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { createStore } from 'vuex' // \u5bfc\u5165\nimport { toRaw } from 'vue' // \u8fd9\u91cc\u662f\u6bd4\u8f83\u8ff7\u60d1\u7684\uff0cvue3\u9700\u8981\u7528\u5230\uff1b\u4f46\u662f\u65e2\u7136\u662fvue3\u4e86\u4e3a\u4ec0\u4e48\u4e0d\u7528pinia\n\nconst store = createStore({\n  state: {\n    myState: '' // \u5b9a\u4e49\u4e00\u4e2astate\u53d8\u91cf\uff0c\u4e5f\u53ef\u4ee5\u662f\u5bf9\u8c61\u7c7b\u578b\n  },\n  mutations: {\n    setMyState: (state, payload) => {\n      state.myState = payload.value\n    }\n  },\n  // \u53ef\u4ee5\u4e0d\u6dfb\u52a0action\uff0c\u4f46\u662faction\u7ed3\u5408dispatch\u4f7f\u7528\u662f\u5f02\u6b65\u8c03\u7528\n  actions: {\n    handlerMyState: (context, payload) => {\n      context.commit('setMyState', payload)\n    }\n  },\n  getters: {\n    getMyState: (state) => {\n      return toRaw(state.myState) // \u5982\u679c\u662fvue3\u8fd4\u56de\u7684\u4f1a\u662fproxy\uff0c\u9700\u8981\u7528toRaw\u89e3\u6784\u4e00\u4e0b\u62ff\u5230\u771f\u5b9e\u7684\u503c\n    }\n  }\n})\n\nexport default store\n")),(0,a.kt)("h2",{id:"mainjs\u4e2d\u914d\u7f6e"},"main.js\u4e2d\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="vue3\u7248\u672c"',title:'"vue3\u7248\u672c"'},"import { createApp } from 'vue'\nimport App from './App.vue'\nimport store from './store' // \u5bfc\u5165/src/store/index.js\nconst app = createApp(App)\napp.use(store) // \u6302\u8f7d\napp.mount('#app')\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="vue2\u7248\u672c"',title:'"vue2\u7248\u672c"'},"import Vue from 'vue'\nimport App from './App.vue'\nimport store from './store'\nnew Vue({\n  store, // \u4e00\u70b9\u5c0f\u5dee\u522b\n  render: h => h(App),\n}).$mount('#app')\n")),(0,a.kt)("h2",{id:"vue\u6587\u4ef6\u4e2d\u4f7f\u7528"},"vue\u6587\u4ef6\u4e2d\u4f7f\u7528"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="vue3"',title:'"vue3"'},"{/* <script setup> */}\n  import { useStore } from 'vuex'\n  const store = useStore()\n  // \u540c\u6b65\u8c03\u7528\uff0csetMyState\u662fmutations\u4e2d\u7684\u65b9\u6cd5\u540d\n  store.commit(\"setMyState\", { value: 'my value' })\n  // \u5f02\u6b65dispatch\u4fee\u6539\u503c\uff0chandlerMyState\u662faction\u4e2d\u7684\u65b9\u6cd5\u540d\n  store.dispatch('handlerMyState', { value: 'my value' })\n// <\/script>\n\n<span>{{store.getters['getMyState']}}</span>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="vue2"',title:'"vue2"'},"this.$store.state.myState\n<span>{{$store.state.myState}}</span>\n")))}m.isMDXComponent=!0}}]);