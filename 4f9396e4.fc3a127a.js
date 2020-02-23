(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{245:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a(1),r=a(9),i=(a(0),a(465)),o={id:"navigation-views",title:"Navigation views",sidebar_label:"Navigation views"},c={id:"version-3.x/navigation-views",title:"Navigation views",description:"Navigation views are presentation components that take a [`router`](routers.md) and a [`navigation`](navigation-prop.md) prop, and can display several screens, as specified by the `navigation.state`.",source:"@site/versioned_docs/version-3.x/navigation-views.md",permalink:"/docs/3.x/navigation-views",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-3.x/navigation-views.md",version:"3.x",sidebar_label:"Navigation views",sidebar:"version-3.x-docs",previous:{title:"Custom routers",permalink:"/docs/3.x/custom-routers"},next:{title:"Transitioner",permalink:"/docs/3.x/transitioner"}},s=[{value:"Built in Views",id:"built-in-views",children:[]},{value:"Transitioner",id:"transitioner",children:[]}],b={rightToc:s};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Navigation views are presentation components that take a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/3.x/routers"}),Object(i.b)("inlineCode",{parentName:"a"},"router"))," and a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/3.x/navigation-prop"}),Object(i.b)("inlineCode",{parentName:"a"},"navigation"))," prop, and can display several screens, as specified by the ",Object(i.b)("inlineCode",{parentName:"p"},"navigation.state"),"."),Object(i.b)("p",null,"Navigation views are controlled React components that can present the current navigation state. They manage switching of screens, animations and gestures. They also present persistent navigation views such as tab bars and headers."),Object(i.b)("h2",{id:"built-in-views"},"Built in Views"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-navigation/stack/blob/1.0/src/views/StackView/StackView.tsx"}),"StackView")," - Present a stack that looks suitable on any platform",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-navigation/stack/blob/1.0/src/views/StackView/StackViewCard.tsx"}),"StackViewCard")," - Present one card from the card stack, with gestures"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-navigation/stack/blob/1.0/src/views/Header/Header.tsx"}),"Header")," - The header view for the card stack"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-navigation/core/blob/ad6e5cecccb8bce081f773fdff7af000e0450746/src/views/SwitchView/SwitchView.js"}),"SwitchView")," - A navigator that only ever show one screen at a time, useful for authentication flows."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-navigation/tabs"}),"Tabs")," - A configurable tab switcher / pager"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/react-navigation/drawer"}),"Drawer")," - A view with a drawer that slides from the left")),Object(i.b)("h2",{id:"transitioner"},Object(i.b)("a",Object(n.a)({parentName:"h2"},{href:"/docs/3.x/transitioner"}),"Transitioner")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Transitioner")," manages the animations during the transition and can be used to build fully custom navigation views. It is used inside the ",Object(i.b)("inlineCode",{parentName:"p"},"StackView")," view. ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/3.x/transitioner"}),"Learn more about Transitioner here.")))}l.isMDXComponent=!0},465:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return v}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),l=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=l(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),p=l(a),d=n,v=p["".concat(o,".").concat(d)]||p[d]||u[d]||i;return a?r.a.createElement(v,c({ref:t},b,{components:a})):r.a.createElement(v,c({ref:t},b))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);