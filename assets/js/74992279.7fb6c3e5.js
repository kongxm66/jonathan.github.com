"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3395],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>x});var o=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=o.createContext({}),s=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},m=function(t){var e=s(t.components);return o.createElement(l.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,l=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),p=s(n),d=r,x=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return n?o.createElement(x,c(c({ref:e},m),{},{components:n})):o.createElement(x,c({ref:e},m))}));function x(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[p]="string"==typeof t?t:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8262:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={},c=void 0,i={unversionedId:"react/Context",id:"react/Context",title:"Context",description:"Context with class component",source:"@site/docs/react/21.Context.md",sourceDirName:"react",slug:"/react/Context",permalink:"/docs/react/Context",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/react/21.Context.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Composite Components",permalink:"/docs/react/Composite Components"},next:{title:"Style",permalink:"/docs/react/Style"}},l={},s=[{value:"Context with class component",id:"context-with-class-component",level:2},{value:"Context with functional component",id:"context-with-functional-component",level:2}],m={toc:s},p="wrapper";function u(t){let{components:e,...n}=t;return(0,r.kt)(p,(0,o.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"context-with-class-component"},"Context with class component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u521b\u5efa\u4e0a\u4e0b\u6587 [myContext.context.jsx]"',title:'"\u521b\u5efa\u4e0a\u4e0b\u6587','[myContext.context.jsx]"':!0},'import React from "react"\n\nconst MyContext = React.createContext()\n\nexport default MyContext\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u7236\u7ea7\u7ec4\u4ef6 [parent.component.jsx]"',title:'"\u7236\u7ea7\u7ec4\u4ef6','[parent.component.jsx]"':!0},'import React from "react"\nimport Child1Component from "./demo23.child1.component"\nimport Child2Component from "./demo23.child2.component"\nimport MyContext from "./demo23.context"\nexport default class ParentComponent extends React.Component {\n  state = {\n    val1: 0,\n    val2: 0,\n  }\n\n  changeVal1 = () => {\n    this.setState({\n      ...this.state,\n      val1: this.state.val1 + 1,\n    })\n  }\n\n  changeVal2 = () => {\n    this.setState({\n      ...this.state,\n      val2: this.state.val2 + 1,\n    })\n  }\n\n  render() {\n    let { val1, val2 } = this.state\n    return (\n      <div>\n        {/* \u4f7f\u7528XXContext.Provicer\u5305\u88f9\u6240\u6709\u7236\u7ea7\u7ec4\u4ef6\u5185\u5bb9 */}\n        <MyContext.Provider value={{ val1, val2 }}>\n          {/* \u5b50\u7ec4\u4ef6\u4e5f\u5305\u88f9\u5728\u5185\uff0c\u5426\u5219\u4f1a\u62a5\u9519 */}\n          <Child1Component />\n          <Child2Component />\n          <div>\n            <button onClick={this.changeVal1}>increase val1</button>\n            <button onClick={this.changeVal2}>increase val2</button>\n          </div>\n        </MyContext.Provider>\n      </div>\n    )\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u5b50\u7ec4\u4ef61\uff0c\u7528\u6cd5\u4e00 [child1.component.jsx]"',title:'"\u5b50\u7ec4\u4ef61\uff0c\u7528\u6cd5\u4e00','[child1.component.jsx]"':!0},'import React from "react"\nimport MyContext from "./demo23.context"\nexport default class ChildComponent extends React.Component {\n  // \u5c06\u4e0a\u4e0b\u6587\u6302\u5728\u7c7b\u9759\u6001\u53d8\u91cfcontextType\u4e0a\n  static contextType = MyContext\n  render() {\n    // \u4f7f\u7528\u65f6\uff0c\u76f4\u63a5\u4ececontext\u4e2d\u83b7\u53d6\n    let { val1 } = this.context\n    return <div>{val1}</div>\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u5b50\u7ec4\u4ef62\uff0c\u7528\u6cd5\u4e8c [child2.component.jsx]"',title:'"\u5b50\u7ec4\u4ef62\uff0c\u7528\u6cd5\u4e8c','[child2.component.jsx]"':!0},'import React from "react"\nimport MyContext from "./demo23.context"\nexport default class ChildComponent extends React.Component {\n  render() {\n    return (\n      // \u4f7f\u7528XContext.Consumer\u53d6\u5f97\u4e0a\u4e0b\u6587\u6570\u503c\n      // \u8fd9\u79cd\u65b9\u5f0f\u5728functional component\u7ec4\u4ef6\u4e2d\u540c\u6837\u9002\u7528\n      <MyContext.Consumer>\n        {(context) => {\n          return <div>{context.val2}</div>\n        }}\n      </MyContext.Consumer>\n    )\n  }\n}\n')),(0,r.kt)("h2",{id:"context-with-functional-component"},"Context with functional component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u521b\u5efa\u4e0a\u4e0b\u6587 [myContext.context.jsx]"',title:'"\u521b\u5efa\u4e0a\u4e0b\u6587','[myContext.context.jsx]"':!0},'import React from "react"\n\nconst MyContext = React.createContext()\n\nexport default MyContext\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u7236\u7ec4\u4ef6"',title:'"\u7236\u7ec4\u4ef6"'},'import React, { useState } from "react"\nimport ChildComponent from "./demo24.child1.functionalcomponent"\nimport MyContext from "./demo24.context"\nexport default function ParentComponent() {\n  const [val, setVal] = useState(0)\n\n  const changeVal = () => {\n    setVal(val + 1)\n  }\n\n  return (\n    <div>\n      {/* \u8fd9\u91cc\u7236\u7ec4\u4ef6\u7684\u4f7f\u7528\u65b9\u6cd5\u548cclass component\u4e00\u6837 */}\n      <MyContext.Provider value={{ val }}>\n        <ChildComponent />\n        <div>\n          <button onClick={changeVal}>increase val</button>\n        </div>\n      </MyContext.Provider>\n    </div>\n  )\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u5b50\u7ec4\u4ef6"',title:'"\u5b50\u7ec4\u4ef6"'},'import React, { useContext } from "react"\nimport MyContext from "./demo24.context"\nexport default function ChildComponent() {\n  // functional component \u63d0\u4f9bhook\u51fd\u6570\uff0c\u76f4\u63a5\u4f7f\u7528\n  let { val } = useContext(MyContext)\n  return <div>{val}</div>\n}\n')))}u.isMDXComponent=!0}}]);