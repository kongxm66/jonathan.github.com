"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5075],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2761:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=t(7462),i=(t(7294),t(3905));const o={},a=void 0,s={unversionedId:"tailwindcss/Responsive",id:"tailwindcss/Responsive",title:"Responsive",description:"Basic Concepts of Responsive",source:"@site/docs/tailwindcss/3. Responsive.md",sourceDirName:"tailwindcss",slug:"/tailwindcss/Responsive",permalink:"/docs/tailwindcss/Responsive",draft:!1,editUrl:"https://github.com/JonathanTube/Jonathan.Kong.github.com/tree/main/docs/tailwindcss/3. Responsive.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tailwind component",permalink:"/docs/tailwindcss/Tailwind component"},next:{title:"Dark Mode",permalink:"/docs/tailwindcss/Dark Mode"}},c={},l=[{value:"Basic Concepts of Responsive",id:"basic-concepts-of-responsive",level:2},{value:"How to use it in Tailwind",id:"how-to-use-it-in-tailwind",level:2}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"basic-concepts-of-responsive"},"Basic Concepts of Responsive"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"/* \u5728\u5c0f\u4e8e\u6216\u7b49\u4e8e 992 \u50cf\u7d20\u7684\u5c4f\u5e55\u4e0a\uff0c\u5c06\u80cc\u666f\u8272\u8bbe\u7f6e\u4e3a\u84dd\u8272 */\n@media screen and (max-width: 992px) {\n  body {\n    background-color: blue;\n  }\n}\n \n/* \u5728 600 \u50cf\u7d20\u6216\u66f4\u5c0f\u7684\u5c4f\u5e55\u4e0a\uff0c\u5c06\u80cc\u666f\u8272\u8bbe\u7f6e\u4e3a\u6a44\u6984\u8272 */\n@media screen and (max-width: 600px) {\n  body {\n    background-color: olive;\n  }\n}\n")),(0,i.kt)("h2",{id:"how-to-use-it-in-tailwind"},"How to use it in Tailwind"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'    <div className="w-full">\n      {/* \u7b49\u4ef7\u4e8e\uff1a @media (min-width: 640px) {}\uff0c\u5f53\u5bbd\u5ea6\u5927\u4e8e\u7b49\u4e8e640px\u7684\u65f6\u5019\u751f\u6548 */}\n      <div className="sm:bg-red-300 w-full text-center">sm (640 px)</div>\n      <div className="md:bg-green-100 w-full text-center">md (768 px)</div>\n      <div className="lg:bg-blue-100 w-full text-center">lg (1024 px)</div>\n      <div className="xl:bg-purple-100 w-full text-center">xl (1280 px)</div>\n      <div className="2xl:bg-slate-100 w-full text-center">2xl (1536 px)</div>\n    </div>\n')))}u.isMDXComponent=!0}}]);