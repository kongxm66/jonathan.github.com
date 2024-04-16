"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5977],{3905:(n,t,e)=>{e.d(t,{Zo:()=>s,kt:()=>f});var r=e(7294);function a(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function i(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?o(Object(e),!0).forEach((function(t){a(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function c(n,t){if(null==n)return{};var e,r,a=function(n,t){if(null==n)return{};var e,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||(a[e]=n[e]);return a}(n,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)e=o[r],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var p=r.createContext({}),m=function(n){var t=r.useContext(p),e=t;return n&&(e="function"==typeof n?n(t):i(i({},t),n)),e},s=function(n){var t=m(n.components);return r.createElement(p.Provider,{value:t},n.children)},u="mdxType",l={inlineCode:"code",wrapper:function(n){var t=n.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(n,t){var e=n.components,a=n.mdxType,o=n.originalType,p=n.parentName,s=c(n,["components","mdxType","originalType","parentName"]),u=m(e),d=a,f=u["".concat(p,".").concat(d)]||u[d]||l[d]||o;return e?r.createElement(f,i(i({ref:t},s),{},{components:e})):r.createElement(f,i({ref:t},s))}));function f(n,t){var e=arguments,a=t&&t.mdxType;if("string"==typeof n||a){var o=e.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=n,c[u]="string"==typeof n?n:a,i[1]=c;for(var m=2;m<o;m++)i[m]=e[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}d.displayName="MDXCreateElement"},520:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>c,toc:()=>m});var r=e(7462),a=(e(7294),e(3905));const o={},i=void 0,c={unversionedId:"react-router/v5/redirect",id:"react-router/v5/redirect",title:"redirect",description:"\u8def\u7531\u8df3\u8f6c\u548c\u4f20\u53c2",source:"@site/docs/react-router/v5/5.redirect.md",sourceDirName:"react-router/v5",slug:"/react-router/v5/redirect",permalink:"/docs/react-router/v5/redirect",draft:!1,editUrl:"https://github.com/JonathanTube/Jonathan.Kong.github.com/tree/main/docs/react-router/v5/5.redirect.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"hooks",permalink:"/docs/react-router/v5/hooks"},next:{title:"navLink",permalink:"/docs/react-router/v5/navLink"}},p={},m=[{value:"\u8def\u7531\u8df3\u8f6c\u548c\u4f20\u53c2",id:"\u8def\u7531\u8df3\u8f6c\u548c\u4f20\u53c2",level:2},{value:"\u4e3b\u9875\u9762",id:"\u4e3b\u9875\u9762",level:3},{value:"\u8def\u7531\u8df3\u8f6c\u53d1\u8d77",id:"\u8def\u7531\u8df3\u8f6c\u53d1\u8d77",level:3},{value:"\u8def\u7531\u53c2\u6570\u63a5\u6536",id:"\u8def\u7531\u53c2\u6570\u63a5\u6536",level:3}],s={toc:m},u="wrapper";function l(n){let{components:t,...e}=n;return(0,a.kt)(u,(0,r.Z)({},s,e,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8def\u7531\u8df3\u8f6c\u548c\u4f20\u53c2"},"\u8def\u7531\u8df3\u8f6c\u548c\u4f20\u53c2"),(0,a.kt)("h3",{id:"\u4e3b\u9875\u9762"},"\u4e3b\u9875\u9762"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.jsx"',title:'"main.jsx"'},'import { HashRouter, Link, Route, Switch } from "react-router-dom"\nimport styled from "styled-components"\nimport From from "./from"\nimport To from "./to"\nconst NavBox = styled.nav`\n  a {\n    margin: 20px 10px;\n  }\n`\n\nexport default function Main() {\n  return (\n    <HashRouter>\n      <NavBox>\n        <Link to="/from">from component</Link>\n        <Link to="/to">to component</Link>\n      </NavBox>\n      <div>\n        <Switch>\n          <Route path="/from" component={From} />\n          <Route exact path="/to" component={To} />\n          {/* \u8def\u5f84\u4f20\u53c2\uff1a\uff1f\u4ee3\u8868\u53ef\u9009 */}\n          <Route exact path="/to/:param0/:param1?" component={To} />\n        </Switch>\n      </div>\n    </HashRouter>\n  )\n}\n')),(0,a.kt)("h3",{id:"\u8def\u7531\u8df3\u8f6c\u53d1\u8d77"},"\u8def\u7531\u8df3\u8f6c\u53d1\u8d77"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="from.jsx"',title:'"from.jsx"'},'import { Link, useHistory } from "react-router-dom"\nexport default function From() {\n  let history = useHistory()\n\n  return (\n    <>\n      <h1>From Component</h1>\n      <Link\n        to={{\n          pathname: "/to",\n          search: "param=x", // \u53c2\u6570\n          state: {}\n        }}\n      >\n        Link\u8df3\u8f6c-\u53ef\u56de\u9000\n      </Link>\n\n      <br />\n\n      <Link\n        to={{\n          pathname: "/to",\n          search: "param=x", // \u53c2\u6570\n          state: {}\n        }}\n        replace\n      >\n        Link\u8df3\u8f6c-repalce\u4e0d\u53ef\u56de\u9000\n      </Link>\n\n      <br />\n\n      <button\n        onClick={() => {\n          history.push("/to?param0=x&param1=y")\n        }}\n      >\n        \u7f16\u7a0b\u5f0f\u8df3\u8f6c-\u95ee\u53f7\u4f20\u53c2\n      </button>\n\n      <br />\n\n      <button\n        onClick={() => {\n          history.push({\n            pathname: "/to",\n            search: "param0=1&param1=2"\n          })\n        }}\n      >\n        \u7f16\u7a0b\u5f0f\u8df3\u8f6c-search\u4f20\u53c2(\u51fa\u73b0\u5728url\u4e0a\uff0c\u957f\u5ea6\u9650\u52362K\u7b49\u95ee\u9898)\n      </button>\n\n      <br />\n      <button\n        onClick={() => {\n          history.push(`/to/x/y`)\n        }}\n      >\n        \u7f16\u7a0b\u5f0f\u8df3\u8f6c-\u8def\u7531\u8def\u5f84\u4f20\u53c2\n      </button>\n\n      <br />\n      <button\n        onClick={() => {\n          history.push({\n            pathname: "/to",\n            state: {\n              param0: "x",\n              param1: "y"\n            }\n          })\n        }}\n      >\n        \u7f16\u7a0b\u5f0f\u8df3\u8f6c-hide\u65b9\u5f0f\u4f20\u53c2\n      </button>\n    </>\n  )\n}\n')),(0,a.kt)("h3",{id:"\u8def\u7531\u53c2\u6570\u63a5\u6536"},"\u8def\u7531\u53c2\u6570\u63a5\u6536"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="to.jsx"',title:'"to.jsx"'},'import { useLocation, useRouteMatch } from "react-router-dom"\nexport default function To() {\n  let param0, param1\n\n  // \u4f7f\u7528url\u4f20\u503c\uff0c\u83b7\u53d6\u65b9\u5f0f\n  let location = useLocation()\n  if (location.search) {\n    let usp = new URLSearchParams(location.search)\n    param0 = usp.get("param0")\n    param1 = usp.get("param1")\n  }\n\n  // \u4f7f\u7528\u8def\u7531\u8def\u5f84\u4f20\u9012\u53c2\u6570\uff0c\u83b7\u53d6\u65b9\u5f0f\n  let match = useRouteMatch()\n  if (match.params && Object.keys(match.params).length > 0) {\n    param0 = match.params.param0\n    param1 = match.params.param1\n  }\n\n  // hide\u65b9\u5f0f\u4f20\u53c2\uff0c\u83b7\u53d6\u65b9\u5f0f\uff0c\u4f46\u662f\u5237\u65b0\u53c2\u6570\u4e22\u5931\n  let { state } = location\n  if (state) {\n    // console.log("state=", state)\n    param0 = state.param0\n    param1 = state.param1\n  }\n\n  return (\n    <>\n      <h1>To Component</h1>\n      <div>param0={param0}</div>\n      <div>param1={param1}</div>\n    </>\n  )\n}\n')))}l.isMDXComponent=!0}}]);