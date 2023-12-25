"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3389],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>y});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(t),f=o,y=p["".concat(s,".").concat(f)]||p[f]||m[f]||a;return t?r.createElement(y,c(c({ref:n},l),{},{components:t})):r.createElement(y,c({ref:n},l))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const a={},c=void 0,i={unversionedId:"react/Hooks customization",id:"react/Hooks customization",title:"Hooks customization",description:"",source:"@site/docs/react/19.Hooks customization.md",sourceDirName:"react",slug:"/react/Hooks customization",permalink:"/docs/react/Hooks customization",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/react/19.Hooks customization.md",tags:[],version:"current",sidebarPosition:19,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hooks useCallback",permalink:"/docs/react/Hooks useCallback"},next:{title:"Composite Components",permalink:"/docs/react/Composite Components"}},s={},u=[],l={toc:u},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'import React, { useEffect, useState } from "react"\n\n/**\n * \u81ea\u5b9a\u4e49Hook\uff0c\u5c01\u88c5useState,\u652f\u6301\u5bf9\u8c61\u7c7b\u578b\uff0c\u90e8\u5206\u72b6\u6001\u4fee\u6539\n *\n * @param {*} initialValue\n * @returns\n */\nconst useMyHook = (initialValue) => {\n  const [val, setVal] = useState(initialValue)\n  // \u91cd\u5199\u4e86set\u65b9\u6cd5\n  const setMyValue = (newValue) => {\n    setVal({\n      ...val,\n      ...newValue,\n    })\n  }\n  let myValue = val\n  // \u8fd9\u91cc\u8981\u8fd4\u56de\n  return [myValue, setMyValue]\n}\n\n/**\n * \u81ea\u5b9a\u4e49useEffect\n * \u7c7b\u4f3c\u4e0evue\u7684mixins\n *\n * @param {*} name\n */\nconst useMyEffect = (name) => {\n  useEffect(() => {\n    console.log(`${name} says hello`)\n  }, [])\n}\n\nexport default function Demo() {\n  useMyEffect("Jonathan")\n\n  // use\u5f00\u5934\u7684\uff0creact\u4f1a\u6821\u9a8c\uff0c\u4f1a\u62a5\u9519\n  //   if (1 == 1) {\n  //     useMyEffect("Zhang")\n  //   }\n\n  const [myValue, setMyValue] = useMyHook({\n    x: 0,\n    y: 99,\n  })\n\n  const handle = function () {\n    setMyValue({ x: myValue.x + 1 })\n  }\n\n  return (\n    <div>\n      <div>x:{myValue.x}</div>\n      <div>y:{myValue.y}</div>\n      <button onClick={handle}>click me</button>\n    </div>\n  )\n}\n')))}m.isMDXComponent=!0}}]);