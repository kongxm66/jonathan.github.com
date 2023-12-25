"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"how-to-use-vuex","metadata":{"permalink":"/blog/how-to-use-vuex","editUrl":"https://github.com/JonathanTube/jonathantube.github.com/tree/main/blog/2023-05-28-how-to-use-vitest.md","source":"@site/blog/2023-05-28-how-to-use-vitest.md","title":"vitest\u6d4b\u8bd5\u6846\u67b6\u7b80\u5355\u4f7f\u7528","description":"","date":"2023-05-28T00:00:00.000Z","formattedDate":"May 28, 2023","tags":[{"label":"frontend","permalink":"/blog/tags/frontend"},{"label":"vue","permalink":"/blog/tags/vue"},{"label":"test","permalink":"/blog/tags/test"}],"readingTime":0,"hasTruncateMarker":false,"authors":[],"frontMatter":{"slug":"how-to-use-vuex","title":"vitest\u6d4b\u8bd5\u6846\u67b6\u7b80\u5355\u4f7f\u7528","tags":["frontend","vue","test"]},"nextItem":{"title":"vuex\u7b80\u5355\u4f7f\u7528","permalink":"/blog/2019/05/28/how-to-use-vuex"}},"content":""},{"id":"/2019/05/28/how-to-use-vuex","metadata":{"permalink":"/blog/2019/05/28/how-to-use-vuex","editUrl":"https://github.com/JonathanTube/jonathantube.github.com/tree/main/blog/2019-05-28-how-to-use-vuex.md","source":"@site/blog/2019-05-28-how-to-use-vuex.md","title":"vuex\u7b80\u5355\u4f7f\u7528","description":"\u9879\u76ee\u6839src\u76ee\u5f55\u5efa\u7acbstore\u6587\u4ef6","date":"2019-05-28T00:00:00.000Z","formattedDate":"May 28, 2019","tags":[{"label":"frontend","permalink":"/blog/tags/frontend"},{"label":"vue","permalink":"/blog/tags/vue"},{"label":"vuex","permalink":"/blog/tags/vuex"}],"readingTime":1.5,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"vuex\u7b80\u5355\u4f7f\u7528","tags":["frontend","vue","vuex"]},"prevItem":{"title":"vitest\u6d4b\u8bd5\u6846\u67b6\u7b80\u5355\u4f7f\u7528","permalink":"/blog/how-to-use-vuex"},"nextItem":{"title":"\u5982\u4f55\u8bbe\u7f6e\u672c\u5730ssl\u6d4b\u8bd5\u73af\u5883","permalink":"/blog/2015/05/28/how-to-set-local-ssl"}},"content":"## \u9879\u76ee\u6839src\u76ee\u5f55\u5efa\u7acbstore\u6587\u4ef6\\r\\n - /src/store/index\\r\\n \\r\\n```js\\r\\nimport { createStore } from \'vuex\' // \u5bfc\u5165\\r\\nimport { toRaw } from \'vue\' // \u8fd9\u91cc\u662f\u6bd4\u8f83\u8ff7\u60d1\u7684\uff0cvue3\u9700\u8981\u7528\u5230\uff1b\u4f46\u662f\u65e2\u7136\u662fvue3\u4e86\u4e3a\u4ec0\u4e48\u4e0d\u7528pinia\\r\\n\\r\\nconst store = createStore({\\r\\n  state: {\\r\\n    myState: \'\' // \u5b9a\u4e49\u4e00\u4e2astate\u53d8\u91cf\uff0c\u4e5f\u53ef\u4ee5\u662f\u5bf9\u8c61\u7c7b\u578b\\r\\n  },\\r\\n  mutations: {\\r\\n    setMyState: (state, payload) => {\\r\\n      state.myState = payload.value\\r\\n    }\\r\\n  },\\r\\n  // \u53ef\u4ee5\u4e0d\u6dfb\u52a0action\uff0c\u4f46\u662faction\u7ed3\u5408dispatch\u4f7f\u7528\u662f\u5f02\u6b65\u8c03\u7528\\r\\n  actions: {\\r\\n    handlerMyState: (context, payload) => {\\r\\n      context.commit(\'setMyState\', payload)\\r\\n    }\\r\\n  },\\r\\n  getters: {\\r\\n    getMyState: (state) => {\\r\\n      return toRaw(state.myState) // \u5982\u679c\u662fvue3\u8fd4\u56de\u7684\u4f1a\u662fproxy\uff0c\u9700\u8981\u7528toRaw\u89e3\u6784\u4e00\u4e0b\u62ff\u5230\u771f\u5b9e\u7684\u503c\\r\\n    }\\r\\n  }\\r\\n})\\r\\n\\r\\nexport default store\\r\\n```\\r\\n\\r\\n## main.js\u4e2d\u914d\u7f6e\\r\\n```js title=\\"vue3\u7248\u672c\\"\\r\\nimport { createApp } from \'vue\'\\r\\nimport App from \'./App.vue\'\\r\\nimport store from \'./store\' // \u5bfc\u5165/src/store/index.js\\r\\nconst app = createApp(App)\\r\\napp.use(store) // \u6302\u8f7d\\r\\napp.mount(\'#app\')\\r\\n```\\r\\n\\r\\n```js title=\\"vue2\u7248\u672c\\"\\r\\nimport Vue from \'vue\'\\r\\nimport App from \'./App.vue\'\\r\\nimport store from \'./store\'\\r\\nnew Vue({\\r\\n  store, // \u4e00\u70b9\u5c0f\u5dee\u522b\\r\\n  render: h => h(App),\\r\\n}).$mount(\'#app\')\\r\\n```\\r\\n\\r\\n## vue\u6587\u4ef6\u4e2d\u4f7f\u7528\\r\\n```js title=\\"vue3\\"\\r\\n{/* <script setup> */}\\r\\n  import { useStore } from \'vuex\'\\r\\n  const store = useStore()\\r\\n  // \u540c\u6b65\u8c03\u7528\uff0csetMyState\u662fmutations\u4e2d\u7684\u65b9\u6cd5\u540d\\r\\n  store.commit(\\"setMyState\\", { value: \'my value\' })\\r\\n  // \u5f02\u6b65dispatch\u4fee\u6539\u503c\uff0chandlerMyState\u662faction\u4e2d\u7684\u65b9\u6cd5\u540d\\r\\n  store.dispatch(\'handlerMyState\', { value: \'my value\' })\\r\\n// <\/script>\\r\\n\\r\\n<span>{{store.getters[\'getMyState\']}}</span>\\r\\n```\\r\\n\\r\\n```js title=\\"vue2\\"\\r\\nthis.$store.state.myState\\r\\n<span>{{$store.state.myState}}</span>\\r\\n```"},{"id":"/2015/05/28/how-to-set-local-ssl","metadata":{"permalink":"/blog/2015/05/28/how-to-set-local-ssl","editUrl":"https://github.com/JonathanTube/jonathantube.github.com/tree/main/blog/2015-05-28-how-to-set-local-ssl.md","source":"@site/blog/2015-05-28-how-to-set-local-ssl.md","title":"\u5982\u4f55\u8bbe\u7f6e\u672c\u5730ssl\u6d4b\u8bd5\u73af\u5883","description":"\u4e00\u3001\u901a\u8fc7mkcert\u521b\u5efa\u672c\u5730\u8bc1\u4e66\u5e76\u52a0\u8f7d","date":"2015-05-28T00:00:00.000Z","formattedDate":"May 28, 2015","tags":[],"readingTime":1.95,"hasTruncateMarker":false,"authors":[],"frontMatter":{},"prevItem":{"title":"vuex\u7b80\u5355\u4f7f\u7528","permalink":"/blog/2019/05/28/how-to-use-vuex"}},"content":"## \u4e00\u3001\u901a\u8fc7mkcert\u521b\u5efa\u672c\u5730\u8bc1\u4e66\u5e76\u52a0\u8f7d\\r\\n\\r\\n1. \u5b89\u88c5mkcert\\r\\n```\\r\\n  npm install -g mkcert\\r\\n```\\r\\n\\r\\n2. \u751f\u6210\u8bc1\u4e66\\r\\n```\\r\\n  mkcert create-ca\\r\\n  mkcert create-cert\\r\\n```\\r\\n\u751f\u6210\u4e86\u56db\u4e2a\u6587\u4ef6\\r\\n```\\r\\n  ca.crt\\r\\n  ca.key\\r\\n  cert.crt\\r\\n  cert.key\\r\\n```\\r\\n\\r\\n## \u52a0\u8f7d\u8bc1\u4e66\\r\\n### mac\\r\\n- \u53cc\u51fbca.cert\uff0c\u5728\u5f39\u51fa\u7684\u754c\u9762\u9009\u62e9Test CA\uff0c\u9009\u62e9\u201c\u4fe1\u4efb\u201d\uff0c\u7136\u540e\u9009\u62e9\u201c\u59cb\u7ec8\u4fe1\u4efb\u201d\uff0c\u6700\u540e\u8f93\u5165\u5bc6 \u7801\u786e\u8ba4\u5373\u53ef\\r\\n### windows\\r\\n- \u53cc\u51fbca.crt\uff0c\u5728\u5f39\u51fa\u7684\u754c\u9762\u4e2d\u9009\u62e9\u5b89\u88c5\u8bc1\u4e66\uff0c\u9009\u62e9\u201c\u5f53\u524d\u7528\u6237\u201d\u6216\u201c\u672c\u5730\u8ba1\u7b97\u673a\u201d\u5747\u53ef\uff0c\u5173\u952e\u7684\u662f\u4e0b\u4e00\u6b65\uff0c\u9009\u62e9\u201c\u5c06\u6240\u6709\u7684\u8bc1\u4e66\u90fd\u653e\u5165\u4e0b\u5217\u5b58\u50a8\u201d\uff0c\u5e76\u4e14\u9009\u62e9\u4e3a\u201c\u53d7\u4fe1\u4efb\u7684\u6839\u8bc1\u4e66\u9881\u53d1\u673a\u6784\u201d\uff0c\u7136\u540e\u4e00\u8def\u786e\u5b9a\u5373\u53ef\\r\\n\\r\\n## \u4e8c\u3001\u5728vue\u6216uniapp\u4e2d\u4f7f\u7528\u521a\u521a\u7684\u8bc1\u4e66\\r\\n1. vue2\\r\\n```js\\r\\n// vue.config.js\\r\\nconst path = require(\'path\')\\r\\nconst fs = require(\'fs\')\\r\\nmodule.exports = {\\r\\n  devServer: {\\r\\n    open: true,\\r\\n    https: {\\r\\n      cert: fs.readFileSync(path.join(__dirname, \'src/ssl/cert.crt\')),\\r\\n      key: fs.readFileSync(path.join(__dirname, \'src/ssl/cert.key\'))\\r\\n    }\\r\\n  }\\r\\n}\\r\\n\\r\\n```\\r\\n2. vue3\\r\\n```js\\r\\n// vite.config.js\\r\\nimport { defineConfig } from \'vite\'\\r\\nimport vue from \'@vitejs/plugin-vue\'\\r\\nconst fs = require(\'fs\')\\r\\nconst path = require(\'path\')\\r\\nexport default defineConfig({\\r\\n  plugins: [vue()],\\r\\n  resolve: {\\r\\n    alias: {\\r\\n      \'@\': path.join(__dirname, \'src\')\\r\\n    }\\r\\n  },\\r\\n  server: {\\r\\n    open: true,\\r\\n    https: {\\r\\n      // \u4e3b\u8981\u662f\u4e0b\u9762\u4e24\u884c\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u4e0d\u8981\u5fd8\u8bb0\u5f15\u5165 fs \u548c path \u4e24\u4e2a\u5bf9\u8c61\\r\\n      cert: fs.readFileSync(path.join(__dirname, \'src/ssl/cert.crt\')),\\r\\n      key: fs.readFileSync(path.join(__dirname, \'src/ssl/cert.key\'))\\r\\n    }\\r\\n  }\\r\\n})\\r\\n```\\r\\n\\r\\n3. uniapp\\r\\n```json\\r\\n// manifest.json\\r\\n\\"h5\\" : {\\r\\n        \\"devServer\\" : {\\r\\n            \\"https\\" : {\\r\\n                \\"cert\\" : \\"\u590d\u5236cert.cer\u4e2d\u7684\u5168\u90e8\u5185\u5bb9\uff0c\u6362\u884c\u8f6c\u6362\u4e3a\\\\n\\"\\r\\n                \\"key\\" :  \\"\u590d\u5236cert.key\u4e2d\u7684\u5168\u90e8\u5185\u5bb9\uff0c\u6362\u884c\u8f6c\u6362\u4e3a\\\\n\\"\\r\\n            },\\r\\n            \\"proxy\\" : {} // \u8fd9\u4e2a\u5fc5\u987b\u5728\u8fd9\u91cc\u914d\u7f6e\uff0c\u56e0\u4e3avue.config.js\u4e2d\u7684\u4f1a\u51b2\u7a81\\r\\n        },\\r\\n        \\"async\\" : {\\r\\n            \\"delay\\" : \\"10000\\"\\r\\n        },\\r\\n        \\"router\\" : {\\r\\n            \\"base\\" : \\"./\\"\\r\\n        }\\r\\n    }\\r\\n```"}]}')}}]);