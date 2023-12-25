"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5007],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,k=u["".concat(p,".").concat(d)]||u[d]||s[d]||l;return n?r.createElement(k,i(i({ref:t},m),{},{components:n})):r.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var r=n(7462),a=n(7294),l=n(3905);const i={},o=void 0,p={unversionedId:"react/JSX",id:"react/JSX",title:"JSX",description:"JSX\u6784\u5efa\u89c6\u56fe\u7684\u57fa\u7840\u77e5\u8bc6",source:"@site/docs/react/3.JSX.md",sourceDirName:"react",slug:"/react/JSX",permalink:"/docs/react/JSX",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/react/3.JSX.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MVC & MVVM",permalink:"/docs/react/MVC & MVVM"},next:{title:"Functional Component",permalink:"/docs/react/Functional Component"}},c={},m=[{value:"JSX\u6784\u5efa\u89c6\u56fe\u7684\u57fa\u7840\u77e5\u8bc6",id:"jsx\u6784\u5efa\u89c6\u56fe\u7684\u57fa\u7840\u77e5\u8bc6",level:2},{value:"JSX\u5e95\u5c42\u5904\u7406\u673a\u5236",id:"jsx\u5e95\u5c42\u5904\u7406\u673a\u5236",level:2}],u={toc:m},s="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"jsx\u6784\u5efa\u89c6\u56fe\u7684\u57fa\u7840\u77e5\u8bc6"},"JSX\u6784\u5efa\u89c6\u56fe\u7684\u57fa\u7840\u77e5\u8bc6"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JSX",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"javascript and xml(html) \u628aJS\u548cHTML\u6807\u7b7e\u6df7\u5408\u5728\u4e86\u4e00\u8d77\u5e76\u4e0d\u662f\u6211\u4eec\u4e4b\u524d\u73a9\u7684\u5b57\u7b26\u4e32\u62fc\u63a5")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"vscode\u5982\u4f55\u652f\u6301JSX\u8bed\u6cd5 \u683c\u5f0f\u5316\u3001\u5feb\u6377\u63d0\u793a.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u521b\u5efa\u7684is\u6587\u4ef6\uff0c\u6211\u4eec\u628a\u540e\u7f00\u540d\u8bbe\u7f6e\u4e3ajsx\u5373\u53ef\uff0c\u8fd9\u6837js\u6587\u4ef6\u4e2d\u5c31\u53ef\u4ee5\u652f\u6301JSX\u8bed\u6cd5\u4e86"),(0,l.kt)("li",{parentName:"ul"},"webpack\u6253\u5305\u7684\u89c4\u5219\u4e2d\uff0c\u4e5f\u662f\u4f1a\u5bf9jsx\u8fd9\u79cd\u6587\u4ef6\uff0c\u6309\u7167JS\u7684\u65b9\u5f0f\u8fdb\u884c\u5904\u7406\u7684"),(0,l.kt)("li",{parentName:"ul"},"\u5728HTML\u4e2d\u5d4c\u5165\u201cJS\u8868\u8fbe\u5f0f\u201d\uff0c\u9700\u8981\u57fa\u4e8e\u201c{} \u8bed\u6cd5\u201d")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JS\u8868\u8fbe\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u6267\u884c\u5fc5\u987b\u6709\u7ed3\u679c"))),(0,l.kt)("li",{parentName:"ul"},"\u5728ReactDOM.createRoot()\u7684\u65f6\u5019\uff0c\u4e0d\u80fd\u76f4\u63a5\u628aHTML/BODY\u505a\u4e3a\u6839\u5bb9\u5668\uff0c\u9700\u8981\u6307\u5b9a\u4e00\u4e2a\u989d\u5916\u7684\u76d2\u5b50","[\u4f8b\u5982: #root]"),(0,l.kt)("li",{parentName:"ul"},"\u6bcf\u4e00\u4e2a\u6784\u5efa\u7684\u89c6\u56fe\uff0c\u53ea\u80fd\u6709\u4e00\u4e2a\u201c\u6839\u8282\u70b9\u201d",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u51fa\u73b0\u591a\u4e2a\u6839\u8282\u70b9\u5219\u62a5\u9519 Adjacent JSX elements must be wrapped in an enclosing tag."),(0,l.kt)("li",{parentName:"ul"},"React\u7ed9\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7279\u6b8a\u7684\u8282\u70b9(\u6807\u7b7e):ReactFragment \u7a7a\u6587\u6863\u6807\u8bb0\u6807\u7b7e",(0,l.kt)(a.Fragment,null),"\u65e2\u4fdd\u8bc1\u4e86\u53ef\u4ee5\u53ea\u6709\u4e00\u4e2a\u6839\u8282\u70b9\uff0c\u53c8\u4e0d\u65b0\u589e\u4e00\u4e2aHTML\u5c42\u7ea7\u7ed3\u6784!!")))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u57fa\u672c\u5165\u53e3&\u4f7f\u7528"',title:'"\u57fa\u672c\u5165\u53e3&\u4f7f\u7528"'},"//React\u8bed\u6cd5\u6838\u5fc3\nimport React from 'react'\n//\u6784\u5efaHTML(WebApp)\u7684\u6838\u5fc3\nimport ReactDOM from'react-dom/client'\n\n//\u83b7\u53d6\u9875\u9762\u4e2d#root\u7684\u5bb9\u5668\uff0c\u4f5c\u4e3a\u201c\u6839\u201d\u5bb9\u5668\nconst root = ReactDOM.createRoot(document.getElementById('root'))\n//\u57fa\u4e8erender\u65b9\u6cd5\u6e32\u67d3\u6211\u4eec\u7f16\u5199\u7684\u89c6\u56fe\uff0c\u628a\u67d3\u540e\u7684\u5185\u5bb9\uff0c\u5168\u90e8\u63d2\u5165\u5230#root\u4e2d\u8fdb\u884c\u6e32\u67d3\nroot.render(\n    // ....\n)\n")),(0,l.kt)("h2",{id:"jsx\u5e95\u5c42\u5904\u7406\u673a\u5236"},"JSX\u5e95\u5c42\u5904\u7406\u673a\u5236"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e00\u6b65: \u628a\u6211\u4eec\u7f16\u5199\u7684JSX\u8bed\u6cd5\uff0c\u7f16\u8bd1\u4e3a\u865a\u62dfDOM\u5bf9\u8c61virtualDOM"),(0,l.kt)("admonition",{parentName:"li",title:"\u865a\u62dfDOM\u5bf9\u8c61",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u6846\u67b6\u81ea\u5df1\u5185\u90e8\u6784\u5efa\u7684\u4e00\u5957\u5bf9\u8c61\u4f53\u7cfb(\u5bf9\u8c61\u7684\u76f8\u5173\u6210\u5458\u90fd\u662fReact\u5185\u90e8\u89c4\u5b9a\u7684)\uff0c\u57fa\u4e8e\u8fd9\u4e9b\u5c5e\u6027\u63cf\u8ff0\u51fa\uff0c\u6211\u4eec\u6240\u6784\u5efa\u89c6\u56fe\u4e2d\u7684\uff0cDOM\u8282\u70b9\u7684\u76f8\u5173\u7279\u5f81!!")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u57fa\u4e8e babel-preset-react-app \u628aJSX\u7f16\u8bd1\u4e3a React.CreateElement(...) \u8fd9\u79cd\u683c\u5f0f!!\u53ea\u8981\u662f\u5143\u7d20\u8282\u70b9\uff0c\u5fc5\u7136\u4f1a\u57fa\u4e8ecreateElement\u8fdb\u884c\u5904\u7406!"),(0,l.kt)("admonition",{parentName:"li",title:"\u7ed3\u6784",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"React.createElement(ele, props, ..children)",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"ele : \u5143\u7d20\u6807\u7b7e\u540d\u6216\u7ec4\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"props : \u5143\u7d20\u7684\u5c5e\u6027\u96c6\u5408(\u5bf9\u8c61)\u5982\u679c\u6ca1\u6709\u8bbe\u7f6e\u8fc7\u4efb\u4f55\u7684\u5c5e\u6027\uff0c\u5219\u6b64\u503c\u662fnull"),(0,l.kt)("li",{parentName:"ul"},"children : \u7b2c\u4e09\u4e2a\u53ca\u4ee5\u540e\u7684\u53c2\u6570\uff0c\u90fd\u662f\u5f53\u524d\u5143\u7d20\u7684\u5b50\u8282\u70b9")))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u518d\u628a createElement \u65b9\u6cd5\u6267\u884c\uff0c\u521b\u5efa\u51favirtualDM\u865a\u62dfDOM\u5bf9\u8c61\u4e5f\u6709\u79f0\u4e4b\u4e3a:JSX\u5143\u7d20\u3001JSX\u5bf9\u8c61\u3001ReactChild\u5bf9\u8c61..!!"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u8f6c\u6362\u540e\u7684\u5bf9\u8c61\u7ed3\u6784"',title:'"\u8f6c\u6362\u540e\u7684\u5bf9\u8c61\u7ed3\u6784"'},'virtualDOM = {\n    $$typeof: Symbol(react.element),\n    ref: null,\n    key: null,\n    type:"\u6807\u7b7e\u540d\u6216\u7ec4\u4ef6", //\u5b58\u50a8\u4e86\u5143\u7d20\u7684\u76f8\u5173\u5c5e\u6027 && \u5b50\u8282\u70b9\u4fe1\u606f\n    props:{\n        // \u5143\u7d20\u7684\u76f8\u5173\u5c5e\u6027\uff0c\n        // \u5b50\u8282\u70b9\u4fe1\u606f \u6ca1\u6709\u5b50\u8282\u70b9\u5219\u6ca1\u6709\u8fd9\u4e2a\u5c5e\u6027\u3001\n        // \u5c5e\u6027\u503c\u53ef\u80fd\u662f\u4e00\u4e2a\u503c\u3001\u4e5f\u53ef\u80fd\u662f\u4e00\u4e2a\u6570\u7ec4\n        children: []\n    }\n}\n')))))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u7b2c\u4e8c\u6b65:\u628a\u6784\u5efa\u7684virtualDOM\u6e32\u67d3\u4e3a\u771f\u5b9eDOM"),(0,l.kt)("admonition",{parentName:"li",title:"\u771f\u5b9eDOM",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u6d4f\u89c8\u5668\u9875\u9762\u4e2d\uff0c\u6700\u540e\u67d3\u51fa\u6765\uff0c\u8ba9\u7528\u6237\u770b\u89c1\u7684DOM\u5143\u7d20! ")),(0,l.kt)("admonition",{parentName:"li",title:"\u8865\u5145\u8bf4\u660e",type:"tip"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b21\u67d3\u9875\u9762\u662f\u76f4\u63a5\u4ecevirtualDOM->\u771f\u5b9eDOM;"),(0,l.kt)("li",{parentName:"ul"},"\u4f46\u662f\u540e\u671f\u89c6\u56fe\u66f4\u65b0\u7684\u65f6\u5019\uff0c\u9700\u8981\u7ecf\u8fc7\u4e00\u4e2aDOM-DIFF\u7684\u5bf9\u6bd4\uff0c\u8ba1\u7b97\u51fa\u8865\u4e01\u5305PATCH(\u4e24\u6b21\u89c6\u56fe\u5dee\u5f02\u7684\u90e8\u5206)\uff0c\n\u628aPATCH\u8865\u4e01\u5305\u8fdb\u884c\u67d3!!"))),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"ReactDOM\u4e2d\u7684render\u65b9\u6cd5\u5904\u7406"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="v16"',title:'"v16"'},"    ReactDOM.render(\n        // <>...</>\n        document.getElementById('root')\n    )\n")),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="v18"',title:'"v18"'},"    const root = ReactDOM.createRoot(document.getElementById('root'))\n    root.render(\n        // <>...</>\n    )\n")))))))}d.isMDXComponent=!0}}]);