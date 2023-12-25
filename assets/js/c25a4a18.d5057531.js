"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[525],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),u=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},s=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,d=c["".concat(p,".").concat(s)]||c[s]||k[s]||r;return n?l.createElement(d,o(o({ref:t},m),{},{components:n})):l.createElement(d,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=s;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1701:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={},o=void 0,i={unversionedId:"react/Lifecycle functions",id:"react/Lifecycle functions",title:"Lifecycle functions",description:"\u7ec4\u4ef6\u521d\u59cb\u5316\u903b\u8f91",source:"@site/docs/react/8.Lifecycle functions.md",sourceDirName:"react",slug:"/react/Lifecycle functions",permalink:"/docs/react/Lifecycle functions",draft:!1,editUrl:"https://github.com/JonathanTube/jonathantube.github.com/tree/main/docs/react/8.Lifecycle functions.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Component",permalink:"/docs/react/Component"},next:{title:"Ref",permalink:"/docs/react/Ref"}},p={},u=[{value:"\u7ec4\u4ef6\u521d\u59cb\u5316\u903b\u8f91",id:"\u7ec4\u4ef6\u521d\u59cb\u5316\u903b\u8f91",level:2},{value:"1. \u521d\u59cb\u5316\u5c5e\u6027 &amp;&amp; \u89c4\u5219\u6821\u9a8c",id:"1-\u521d\u59cb\u5316\u5c5e\u6027--\u89c4\u5219\u6821\u9a8c",level:3},{value:"2. \u521d\u59cb\u5316\u72b6\u6001",id:"2-\u521d\u59cb\u5316\u72b6\u6001",level:3},{value:"3. \u89e6\u53d1 componentwillMount(\u7b2c\u4e00\u6b21\u67d3\u524d)",id:"3-\u89e6\u53d1-componentwillmount\u7b2c\u4e00\u6b21\u67d3\u524d",level:3},{value:"4. \u89e6\u53d1 render \u51fd\u6570",id:"4-\u89e6\u53d1-render-\u51fd\u6570",level:3},{value:"5. \u89e6\u53d1 componentDidMount\u51fd\u6570",id:"5-\u89e6\u53d1-componentdidmount\u51fd\u6570",level:3},{value:"\u7ec4\u4ef6\u66f4\u65b0\u903b\u8f91",id:"\u7ec4\u4ef6\u66f4\u65b0\u903b\u8f91",level:2},{value:"1. \u89e6\u53d1 shouldComponentUpdate",id:"1-\u89e6\u53d1-shouldcomponentupdate",level:3},{value:"2. \u89e6\u53d1 componentwillUpdate \u5468\u671f\u51fd\u6570: \u66f4\u65b0\u4e4b\u524d",id:"2-\u89e6\u53d1-componentwillupdate-\u5468\u671f\u51fd\u6570-\u66f4\u65b0\u4e4b\u524d",level:3},{value:"3. \u4fee\u6539\u72b6\u6001\u503c",id:"3-\u4fee\u6539\u72b6\u6001\u503c",level:3},{value:"4. \u89e6\u53d1 render \u5468\u671f\u51fd\u6570: \u7ec4\u4ef6\u66f4\u65b0",id:"4-\u89e6\u53d1-render-\u5468\u671f\u51fd\u6570-\u7ec4\u4ef6\u66f4\u65b0",level:3},{value:"5. \u89e6\u53d1 componentDidUpdate",id:"5-\u89e6\u53d1-componentdidupdate",level:3},{value:"render\u51fd\u6570",id:"render\u51fd\u6570",level:2},{value:"\u7236\u7ec4\u4ef6\u66f4\u65b0\u5bfc\u81f4\u5b50\u7ec4\u4ef6\u66f4\u65b0",id:"\u7236\u7ec4\u4ef6\u66f4\u65b0\u5bfc\u81f4\u5b50\u7ec4\u4ef6\u66f4\u65b0",level:2},{value:"\u7ec4\u4ef6\u5378\u8f7d",id:"\u7ec4\u4ef6\u5378\u8f7d",level:2},{value:"\u7236\u5b50\u5d4c\u5957",id:"\u7236\u5b50\u5d4c\u5957",level:2},{value:"Class Component &amp; Functional Component",id:"class-component--functional-component",level:3}],m={toc:u},c="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u521d\u59cb\u5316\u903b\u8f91"},"\u7ec4\u4ef6\u521d\u59cb\u5316\u903b\u8f91"),(0,a.kt)("admonition",{title:"\u4ece\u8c03\u7528\u7c7b\u7ec4\u4ef6 new MyComponent()\u5f00\u59cb\uff0c\u7c7b\u7ec4\u4ef6\u5185\u90e8\u53d1\u751f\u7684\u4e8b\u60c5",type:"tip"}),(0,a.kt)("h3",{id:"1-\u521d\u59cb\u5316\u5c5e\u6027--\u89c4\u5219\u6821\u9a8c"},"1. \u521d\u59cb\u5316\u5c5e\u6027 && \u89c4\u5219\u6821\u9a8c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5148\u89c4\u5219\u6821\u9a8c\uff0c\u6821\u9a8c\u5b8c\u6bd5\u540e\uff0c\u518d\u5904\u7406\u5c5e\u6027\u7684\u5176\u4ed6\u64cd\u4f5c! !")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b9\u6848\u4e00"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"constructor(props) {\n    super(props); //\u4f1a\u628a\u4f20\u9012\u8fdb\u6765\u7684\u5c5e\u6027\u6302\u8f7d\u5230this\u5b9e\u4f8b\u4e0a\n    console.log(this.props); //\u83b7\u53d6\u5230\u4f20\u9012\u7684\u5c5e\u6027\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u65b9\u6848\u4e8c"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5373\u4fbf\u6211\u4eec\u81ea\u5df1\u4e0d\u5728constructor\u4e2d\u5904\u7406\u6216\u8005constructor\u90fd\u6ca1\u5199\uff0c\u5728constructor\u5904\u7406\u5b8c\u6bd5\u540e\uff0cReact\u5185\u90e8\u4e5f\u4f1a\u628a\u4f20\u9012\u7684props\u6302\u8f7d\u5230\u5b9e\u4f8b\u4e0a\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5728\u5176\u4ed6\u7684\u51fd\u6570\u4e2d\uff0c\u53ea\u8981\u4fdd\u8bc1this\u662f\u5b9e\u4f8b\uff0c\u5c31\u53ef\u4ee5\u57fa\u4e8ethis.props\u83b7\u53d6\u4f20\u9012\u7684\u5c5e\u6027!"),(0,a.kt)("li",{parentName:"ul"},"\u540c\u6837this.props\u83b7\u53d6\u7684\u5c5e\u6027\u5bf9\u8c61\u4e5f\u662f\u53ea\u8bfb\u7684\uff1aobject.isFrozen(this.props)==true")))),(0,a.kt)("h3",{id:"2-\u521d\u59cb\u5316\u72b6\u6001"},"2. \u521d\u59cb\u5316\u72b6\u6001"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u72b6\u6001\u521d\u59cb\u5316",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u540e\u671f\u4fee\u6539\u72b6\u6001\uff0c\u53ef\u4ee5\u89e6\u53d1\u89c6\u56fe\u7684\u66f4\u65b0"),(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u624b\u52a8\u521d\u59cb\u5316\uff0c\u5982\u679c\u6211\u4eec\u6ca1\u6709\u53bb\u505a\u76f8\u5173\u7684\u5904\u7406\uff0c\u5219\u9ed8\u8ba4\u4f1a\u5f80\u5b9e\u4f8b\u4e0a\u6302\u8f7d\u4e00\u4e2astate,\u521d\u59cb\u503c\u662fnull\uff1athis.state=null"))),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u72b6\u6001",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63a7\u5236\u89c6\u56fe\u66f4\u65b0this.state.xxx=xxx : \u8fd9\u79cd\u64cd\u4f5c\u4ec5\u4ec5\u662f\u4fee\u6539\u4e86\u72b6\u6001\u503c\uff0c\u4f46\u662f\u65e0\u6cd5\u8ba9\u89c6\u56fe\u66f4\u65b0;"),(0,a.kt)("li",{parentName:"ul"},"\u60f3\u8ba9\u89c6\u56fe\u66f4\u65b0\u9700\u8981\u57fa\u4e8eReact.Component.prototype\u63d0\u4f9b\u7684\u65b9\u6cd5\u64cd\u4f5c:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// this.setstate(partialstate) \u65e2\u53ef\u4ee5\u4fee\u6539\u72b6\u6001\uff0c\n// \u4e5f\u53ef\u4ee5\u8ba9\u89c6\u56fe\u66f4\u65b0-\u63a8\u8350\nthis.setState({\n// partialState:\u90e8\u5206\u72b6\u6001\n// xxx:xxx\n})\n// \u5f3a\u5236\u66f4\u65b0\uff0c\u4e0d\u7ba1state\u6709\u6ca1\u6709\u53d8\u5316\uff0c\u5f3a\u5236\u66f4\u65b0\u89c6\u56fe\nthis.forceUpdate() \n")))))),(0,a.kt)("h3",{id:"3-\u89e6\u53d1-componentwillmount\u7b2c\u4e00\u6b21\u67d3\u524d"},"3. \u89e6\u53d1 componentwillMount(\u7b2c\u4e00\u6b21\u67d3\u524d)"),(0,a.kt)("admonition",{title:"\u94a9\u5b50\u51fd\u6570",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u7a0b\u5e8f\u8fd0\u884c\u5230\u67d0\u4e2a\u9636\u6bb5\uff0c\u6211\u4eec\u53ef\u4ee5\u57fa\u4e8e\u63d0\u4f9b\u4e00\u4e2a\u5904\u7406\u51fd\u6570\uff0c\u8ba9\u5f00\u53d1\u8005\u5728\u8fd9\u4e2a\u9636\u6bb5\u505a\u4e00\u4e9b\u81ea\u5b9a\u4e49\u7684\u4e8b\u60c5")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("span",{style:{color:"red"}},"\u6b64\u5468\u671f\u51fd\u6570\uff0c\u76ee\u524d\u662f\u4e0d\u5b89\u5168\u7684[\u867d\u7136\u53ef\u4ee5\u7528\uff0c\u4f46\u662f\u672a\u6765\u53ef\u80fd\u8981\u88ab\u79fb\u9664\u4e86\uff0c\u6240\u4ee5\u4e0d\u5efa\u8bae\u4f7f\u7528"),"- \u63a7\u5236\u4f1a\u629b\u51fa\u9ec4\u8272\u8b66\u544a \u4e3a\u4e86\u4e0d\u629b\u51fa\u8b66\u544a\uff0c\u6211\u4eec\u53ef\u4ee5\u6682\u65f6\u7528 UNSAFE componentwillMountj - \u5982\u679c\u5f00\u542f\u4e86React.StrictMode\uff0c\u5219\u6211\u4eec\u4f7f\u7528 UNSAFE_componentWiLlMount - \u8fd9\u6837\u7684\u5468\u671f\u51fd\u6570\uff0c\u63a7\u5236\u53f0\u4f1a\u76f4\u63a5\u629b\u51fa\u7ea2\u8272\u8b66\u544a\u9519\u8bef! !"),(0,a.kt)("h3",{id:"4-\u89e6\u53d1-render-\u51fd\u6570"},"4. \u89e6\u53d1 render \u51fd\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06virtualDOM\u53d8\u4e3aactualDOM")),(0,a.kt)("h3",{id:"5-\u89e6\u53d1-componentdidmount\u51fd\u6570"},"5. \u89e6\u53d1 componentDidMount\u51fd\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5df2\u7ecf\u628avirtualDOM\u53d8\u4e3a\u771f\u5b9eDOM\u4e86\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u771f\u5b9eDOM\u4e86"),(0,a.kt)("li",{parentName:"ul"},"...")),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u66f4\u65b0\u903b\u8f91"},"\u7ec4\u4ef6\u66f4\u65b0\u903b\u8f91"),(0,a.kt)("p",null,"\u7ec4\u4ef6\u66f4\u65b0\u7684\u903b\u8f91 [\u5f53\u4fee\u6539\u4e86\u76f8\u5173\u72b6\u6001\uff0c\u7ec4\u4ef6\u4f1a\u66f4\u65b0"),(0,a.kt)("h3",{id:"1-\u89e6\u53d1-shouldcomponentupdate"},"1. \u89e6\u53d1 shouldComponentUpdate"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="\u5468\u671f\u51fd\u6570: \u662f\u5426\u5141\u8bb8\u66f4\u65b0"',title:'"\u5468\u671f\u51fd\u6570:','\u662f\u5426\u5141\u8bb8\u66f4\u65b0"':!0},"shouldComponentUpdate(nextProps, nextState) {\n    // nextState:\u5b58\u50a8\u8981\u4fee\u6539\u7684\u6700\u65b0\u72b6\u6001\n    // this.state:\u5b58\u50a8\u7684\u8fd8\u662f\u4fee\u6539\u524d\u7684\u72b6\u6001\u6b64\u65f6\u72b6\u6001\u8fd8\u6ca1\u6709\u6539\u53d8\n    console.log(this.state, nextState)\n    // \u6b64\u5468\u671f\u51fd\u6570\u9700\u8981\u8fd4\u56detrue/false\n    // \u8fd4\u56detrue: \u5141\u8bb8\u66f4\u65b0\uff0c\u4f1a\u7ee7\u7eed\u6267\u884c\u4e0b\u4e00\u4e2a\u64cd\u4f5c\n    // \u8fd4\u56defalse: \u4e0d\u5141\u8bb8\u66f4\u65b0\uff0c\u63a5\u4e0b\u6765\u5565\u90fd\u4e0d\u5904\u7406\n    return true\n}\n")),(0,a.kt)("h3",{id:"2-\u89e6\u53d1-componentwillupdate-\u5468\u671f\u51fd\u6570-\u66f4\u65b0\u4e4b\u524d"},"2. \u89e6\u53d1 componentwillUpdate \u5468\u671f\u51fd\u6570: \u66f4\u65b0\u4e4b\u524d"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{style:{color:"red"}},"\u6b64\u5468\u671f\u51fd\u6570\u4e5f\u662f\u4e0d\u5b89\u5168\u7684")),(0,a.kt)("li",{parentName:"ul"},"\u5728\u8fd9\u4e2a\u9636\u6bb5\uff0c\u72b6\u6001\u8fd8\u6ca1\u6709\u88ab\u4fee\u6539"))),(0,a.kt)("h3",{id:"3-\u4fee\u6539\u72b6\u6001\u503c"},"3. \u4fee\u6539\u72b6\u6001\u503c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8ba9this.state.xxx\u6539\u4e3a\u6700\u65b0\u7684\u503c")),(0,a.kt)("h3",{id:"4-\u89e6\u53d1-render-\u5468\u671f\u51fd\u6570-\u7ec4\u4ef6\u66f4\u65b0"},"4. \u89e6\u53d1 render \u5468\u671f\u51fd\u6570: \u7ec4\u4ef6\u66f4\u65b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6309\u7167\u6700\u65b0\u7684\u72b6\u6001/\u5c5e\u6027\uff0c\u7f16\u8bd1JSX=>virtualDOM"),(0,a.kt)("li",{parentName:"ul"},"DOM-DIFF:\u548c\u4e0a\u4e00\u6b21\u6e32\u67d3\u51fa\u6765\u7684virtualDOM\u8fdb\u884c\u5bf9\u6bd4"),(0,a.kt)("li",{parentName:"ul"},"\u628a\u5dee\u5f02\u7684\u90e8\u5206\u8fdb\u884c\u6e32\u67d3\u4e3a\u771f\u5b9e\u7684DOM")),(0,a.kt)("h3",{id:"5-\u89e6\u53d1-componentdidupdate"},"5. \u89e6\u53d1 componentDidUpdate"),(0,a.kt)("admonition",{title:"\u7ec4\u4ef6\u66f4\u65b0\u5b8c\u6bd5\u7279\u6b8a\u8bf4\u660e",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6211\u4eec\u662f\u57fa\u4e8e this.forceupdate() \u5f3a\u5236\u66f4\u65b0\u89c6\u56fe\uff0c\u4f1a\u8df3\u8fc7 shouldComponentUpdate \u5468\u671f\u51fd\u6570\u7684\u6821\u9a8c\uff0c\u76f4\u63a5\u4eceWillUpdate \u5f00\u59cb\u8fdb\u884c\u66f4\u65b0 "),(0,a.kt)("li",{parentName:"ul"},"\u4e5f\u5c31\u662f: \u89c6\u56fe\u4e00\u5b9a\u4f1a\u89e6\u53d1\u66f4\u65b0!"))),(0,a.kt)("h2",{id:"render\u51fd\u6570"},"render\u51fd\u6570"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"render\u51fd\u6570\u5728\u6e32\u67d3\u7684\u65f6\u5019\uff0c\u5982\u679ctype\u662f:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32: \u521b\u5efa\u4e00\u4e2a\u6807\u7b7e"),(0,a.kt)("li",{parentName:"ul"},"\u666e\u901a\u51fd\u6570: \u628a\u51fd\u6570\u6267\u884c\uff0c\u5e76\u4e14\u628aprops\u4f20\u9012\u7ed9\u51fd\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u6784\u9020\u51fd\u6570: \u628a\u6784\u9020\u51fd\u6570\u57fa\u4e8enew\u6267\u884c \u4e5f\u5c31\u662f\u521b\u5efa\u7c7b\u7684\u4e00\u4e2a\u5b9e\u4f8b]\uff0c\u4e5f\u4f1a\u628a\u89e3\u6790\u51fa\u6765\u7684props\u4f20\u9012\u8fc7\u53bb",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u8c03\u7528\u4e00\u6b21\u7c7b\u7ec4\u4ef6\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u5355\u72ec\u7684\u5b9e\u4f8b(\u5982\u679c\u662fPureComponet\u505ashallow compare,\u5dee\u5f02\u624dreRender)"),(0,a.kt)("li",{parentName:"ul"},"\u628a\u5728\u7c7b\u7ec4\u4ef6\u4e2d\u7f16\u5199\u7684render\u51fd\u6570\u6267\u884c\uff0c\u628a\u8fd4\u56de\u7684jsx virtualDOM\uff0c\u5f53\u505a\u7ec4\u4ef6\u89c6\u56fe\u8fdb\u884c\u67d3!!")))))),(0,a.kt)("h2",{id:"\u7236\u7ec4\u4ef6\u66f4\u65b0\u5bfc\u81f4\u5b50\u7ec4\u4ef6\u66f4\u65b0"},"\u7236\u7ec4\u4ef6\u66f4\u65b0\u5bfc\u81f4\u5b50\u7ec4\u4ef6\u66f4\u65b0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e6\u53d1 componentwillReceiveProps \u5468\u671f\u51fd\u6570"),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u63a5\u6536\u6700\u65b0\u5c5e\u6027\u4e4b\u524d"),(0,a.kt)("li",{parentName:"ul"},"\u5468\u671f\u51fd\u6570\u662f\u4e0d\u5b89\u5168\u7684"))),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"UNSAFE_componentWillReceiveProps(nextProps) {\n   // this.props:\u5b58\u50a8\u4e4b\u524d\u7684\u5c5e\u6027\n   // nextProps:\u4f20\u9012\u8fdb\u6765\u7684\u6700\u65b0\u5c5e\u6027\u503c\n   console.log('componentwillReceiveProps:', this.props, nextProps)\n}\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u89e6\u53d1 shouldComponentUpdate \u5468\u671f\u51fd\u6570")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"... \u5176\u4ed6\u6b65\u9aa4\u540c\u7ec4\u4ef6\u66f4\u65b0"))),(0,a.kt)("h2",{id:"\u7ec4\u4ef6\u5378\u8f7d"},"\u7ec4\u4ef6\u5378\u8f7d"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u89e6\u53d1 componentwillUnmount ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"\u5468\u671f\u51fd\u6570(\u7ec4\u4ef6\u9500\u6bc1\u4e4b\u524d)"))),(0,a.kt)("li",{parentName:"ol"},"\u9500\u6bc1")),(0,a.kt)("h2",{id:"\u7236\u5b50\u5d4c\u5957"},"\u7236\u5b50\u5d4c\u5957"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u7236\u5b50\u7ec4\u4ef6\u5d4c\u5957\uff0c\u5904\u7406\u673a\u5236\u4e0a\u9075\u5faa\u6df1\u5ea6\u4f18\u5148\u539f\u5219:\u7236\u7ec4\u4ef6\u5728\u64cd\u4f5c\u4e2d\uff0c\u9047\u5230\u5b50\u7ec4\u4ef6\uff0c\u4e00\u5b9a\u662f\u628a\u5b50\u7ec4\u4ef6\u5904\u7406\u5b8c\uff0c\u7236\u7ec4\u4ef6\u624d\u80fd\u7ee7\u7eed\u5904\u7406")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7236\u7ec4\u4ef6\u7b2c\u4e00\u6b21\u6e32\u67d3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7236 componentWillMount -> "),(0,a.kt)("li",{parentName:"ul"},"\u7236 render ->",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{style:{color:"yellow"}}," \u5b50 componentWillMount -> \u5b50 render -> \u5b50componentDidMount ->")))),(0,a.kt)("li",{parentName:"ul"},"\u7236 componentDidMount")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7236\u7ec4\u4ef6\u66f4\u65b0"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7236 shouldComponentUpdate -> "),(0,a.kt)("li",{parentName:"ul"},"\u7236 componentWillUpdate -> "),(0,a.kt)("li",{parentName:"ul"},"\u7236 render -> ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{style:{color:"yellow"}},"\u5b50 componentWillReceiveProps -> \u5b50 shouldComponentUpdate -> \u5b50componentWillUpdate -> \u5b50render -> \u5b50 componentDidUpdate -> ")))),(0,a.kt)("li",{parentName:"ul"},"\u7236 componentDidUpdate"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7236\u7ec4\u4ef6\u9500\u6bc1"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7236 componentWillUnmount -> ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("span",{style:{color:"yellow"}},"\u5904\u7406\u4e2d \u5b50componentWillUnmount -> \u5b50\u9500\u6bc1 -> ")))),(0,a.kt)("li",{parentName:"ul"},"\u7236\u9500\u6bc1")))),(0,a.kt)("h3",{id:"class-component--functional-component"},"Class Component & Functional Component"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7ec4\u4ef6-\u9759\u6001\u7ec4\u4ef6",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'\u7ec4\u4ef6\u7b2c\u4e00\u6b21\u67d3\u5b8c\u6bd5\u540e\uff0c\u65e0\u6cd5\u57fa\u4e8e\u201c\u5185\u90e8\u7684\u67d0\u4e9b\u64cd\u4f5c"\u8ba9\u7ec4\u4ef6\u66f4\u65b0\u65e0\u6cd5\u5b9e\u73b0\u201c\u81ea\u66f4\u65b0\u201d'),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u8c03\u7528\u5b83\u7684\u7236\u7ec4\u4ef6\u66f4\u65b0\u4e86\uff0c\u90a3\u4e48\u76f8\u5173\u7684\u5b50\u7ec4\u4ef6\u4e5f\u5b9a\u4f1a\u66f4\u65b0,\u53ef\u80fd\u4f20\u9012\u6700\u65b0\u7684\u5c5e\u6027\u503c\u8fdb\u6765"),(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u7ec4\u4ef6\u5177\u5907",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027...\u5176\u4ed6\u72b6\u6001\u7b49\u5185\u5bb9\u51e0\u4e4e\u6ca1\u6709J"))),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u52bf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6bd4\u7c7b\u7ec4\u4ef6\u5904\u7406\u7684\u673a\u5236\u7b80\u5355\uff0c\u8fd9\u6837\u5bfc\u81f4\u51fd\u6570\u7ec4\u4ef6\u6e32\u67d3\u901f\u5ea6\u66f4\u5feb!!")))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u7c7b\u7ec4\u4ef6-\u52a8\u6001\u7ec4\u4ef6"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u4ef6\u5728\u7b2c-\u67d3\u5b8c\u6bd5\u540e\uff0c\u9664\u4e86\u7236\u7ec4\u4ef6\u66f4\u65b0\u53ef\u4ee5\u89e6\u53d1\u5176\u66f4\u65b0\u5916\uff0c\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7: ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"this.setState\u4fee\u6539\u72b6\u6001\u6216\u8005 this.forceupdate \u7b49\u65b9\u5f0f\u8ba9\u7ec4\u4ef6\u5b9e\u73b0\u201c\u81ea\u66f4\u65b0\u201d"))),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u7ec4\u4ef6\u5177\u5907",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u6027\u3001\u72b6\u6001\u3001\u5468\u671f\u51fd\u6570\u3001ref...\u51e0\u4e4e\u7ec4\u4ef6\u5e94\u8be5\u6709\u7684\u4e1c\u897f\u5b83\u90fd\u5177\u5907"))),(0,a.kt)("li",{parentName:"ul"},"\u4f18\u52bf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u529f\u80fd\u5f3a\u5927! !"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"HOOKS\u7ec4\u4ef6"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u63a8\u8350",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5177\u5907\u4e86\u51fd\u6570\u7ec4\u4ef6\u548c\u4e3e\u4ef6\u7684\u5404\u81ea\u4f18\u52bf\u3001\u5728\u51fd\u6570\u7ec4\u4ef6\u7684\u57fa\u7840\u4e0a,\u57faHOOKS\u51fd\u6570\uff0c\u8ba9\u51fd\u6570\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u62e5\u6709\u72b6\u6001\u3001\u5468\u671f\u51fd\u6570\u7b49\u8ba9\u51fd\u6570\u7ec4\u4ef6\u4e5f\u53ef\u4ee5\u5b9e\u73b0\u81ea\u66f4\u65b0","[\u52a8\u6001\u5316]")))))))}k.isMDXComponent=!0}}]);