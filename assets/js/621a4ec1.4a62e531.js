"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(n),m=o,f=l["".concat(u,".").concat(m)]||l[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5180:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},i="React-router-dom \u591a\u7ea7\u8def\u7531",c={unversionedId:"react-router/react-router-dom version.5 hierachy",id:"react-router/react-router-dom version.5 hierachy",title:"React-router-dom \u591a\u7ea7\u8def\u7531",description:"",source:"@site/docs/react-router/4.react-router-dom version.5 hierachy.md",sourceDirName:"react-router",slug:"/react-router/react-router-dom version.5 hierachy",permalink:"/docs/react-router/react-router-dom version.5 hierachy",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/react-router/4.react-router-dom version.5 hierachy.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"react-router-dom version.5 basic",permalink:"/docs/react-router/react-router-dom version.5 basic"},next:{title:"react-router-dom version.5 lazyload",permalink:"/docs/react-router/react-router-dom version.5 lazyload"}},u={},p=[],s={toc:p},l="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-router-dom-\u591a\u7ea7\u8def\u7531"},"React-router-dom \u591a\u7ea7\u8def\u7531"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="main.jsx"',title:'"main.jsx"'},'import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom"\nimport styled from "styled-components"\nimport A from "./a"\nimport B from "./b"\nconst Layout = styled.div`\n  display: flex;\n`\n\nconst LeftMenu = styled.nav`\n  padding: 20px;\n  height: 100vh;\n  box-sizing: border-box;\n  width: 20vw;\n  background: yellow;\n  display: flex;\n  flex-direction: column;\n\n  a {\n    margin: 4px 0;\n  }\n`\n\nconst RightContent = styled.div`\n  background: pink;\n  width: 80vw;\n`\n\nconst Main = () => {\n  return (\n    <HashRouter>\n      <Layout>\n        <LeftMenu>\n          <Link to="/a">/a</Link>\n          <Link to="/b">/b</Link>\n        </LeftMenu>\n        <RightContent>\n          <Switch>\n            {/* \u5339\u914droot */}\n            <Route path="/" exact component={A} />\n            <Route path="/a" component={A} />\n            <Route path="/b" component={B} />\n            {/* \u5176\u4f59\u8d70\u8fd9\u4e2a */}\n            <Redirect to="/" />\n          </Switch>\n        </RightContent>\n      </Layout>\n    </HashRouter>\n  )\n}\nexport default Main\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="a.jsx"',title:'"a.jsx"'},'import { Link } from "react-router-dom"\nimport styled from "styled-components"\nimport { Switch, Route, Redirect } from "react-router-dom"\nimport A1 from "./a1"\nimport A2 from "./a2"\n\nconst TopMenu = styled.nav`\n  background: purple;\n  padding: 20px 10px;\n\n  a {\n    color: #fff;\n    margin: 20px 10px;\n  }\n`\nexport default function A() {\n  return (\n    <>\n      <TopMenu>\n        <Link to="/a/a1">a/a1</Link>\n        <Link to="/a/a2">a/a2</Link>\n      </TopMenu>\n      <Switch>\n        {/* \u9996\u9875\u8df3\u8f6c\u5230... */}\n        <Redirect exact from="/" to="/a/a1/" />\n        {/* \u4e00\u7ea7\u8def\u7531root\u8df3\u8f6c\u5230... */}\n        <Redirect exact from="/a" to="/a/a1/" />\n        <Route path="/a/a1" component={A1} />\n        <Route path="/a/a2" component={A2} />\n      </Switch>\n    </>\n  )\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="a1.jsx"',title:'"a1.jsx"'},'export default function A1() {\n  return (\n    <div\n      style={{\n        padding: 30,\n        fontSize: 30,\n        background: "red",\n        width: "100%"\n      }}\n    >\n      component A1\n    </div>\n  )\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="a2.jsx"',title:'"a2.jsx"'},'export default function A2() {\n  return (\n    <div\n      style={{\n        padding: 30,\n        fontSize: 30,\n        background: "#33eeef",\n        width: "100%"\n      }}\n    >\n      component A2\n    </div>\n  )\n}\n')))}d.isMDXComponent=!0}}]);