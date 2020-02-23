(window.webpackJsonp=window.webpackJsonp||[]).push([[324],{448:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(9),i=(n(0),n(465)),o={id:"state-persistence",title:"State persistence",sidebar_label:"State persistence"},s={id:"version-5.x/state-persistence",title:"State persistence",description:"You might want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted.",source:"@site/versioned_docs/version-5.x/state-persistence.md",permalink:"/docs/state-persistence",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/state-persistence.md",version:"5.x",sidebar_label:"State persistence",sidebar:"version-5.x/docs",previous:{title:"Themes",permalink:"/docs/themes"},next:{title:"Type checking with TypeScript",permalink:"/docs/typescript"}},c=[{value:"Usage",id:"usage",children:[{value:"Development Mode",id:"development-mode",children:[]},{value:"Loading View",id:"loading-view",children:[]}]},{value:"Warning: Serializable State",id:"warning-serializable-state",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You might want to save the user's location in the app, so that they are immediately returned to the same location after the app is restarted."),Object(i.b)("p",null,"This is especially valuable during development because it allows the developer to stay on the same screen when they refresh the app."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Note: This feature is currently considered experimental, because of the warnings listed at the end of this page. Use with caution!")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("p",null,"To be able to persist the navigation state, we can use the ",Object(i.b)("inlineCode",{parentName:"p"},"onStateChange")," and ",Object(i.b)("inlineCode",{parentName:"p"},"initialState")," props of the container."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"onStateChange")," - This prop notifies us of any state changes. We can persist the state in this callback.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"initialState")," - This prop allows us to pass an initial state to use for navigation state. We can pass the restored state in this prop."),Object(i.b)("samp",{id:"state-persistance"}))),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const PERSISTENCE_KEY = 'NAVIGATION_STATE';\n\nexport default function App() {\n  const [isReady, setIsReady] = React.useState(false);\n  const [initialState, setInitialState] = React.useState();\n\n  React.useEffect(() => {\n    const restoreState = async () => {\n      try {\n        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);\n        const state = JSON.parse(savedStateString);\n\n        setInitialState(state);\n      } finally {\n        setIsReady(true);\n      }\n    };\n\n    if (!isReady) {\n      restoreState();\n    }\n  }, [isReady]);\n\n  if (!isReady) {\n    return null;\n  }\n\n  return (\n    <NavigationContainer\n      initialState={initialState}\n      onStateChange={state =>\n        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))\n      }\n    >\n      {/* ... */}\n    </NavigationContainer>\n  );\n}\n")),Object(i.b)("h3",{id:"development-mode"},"Development Mode"),Object(i.b)("p",null,"This feature is particularly useful in development mode. You can enable it selectively using the following approach:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const [isReady, setIsReady] = React.useState(__DEV__ ? false : true);\n")),Object(i.b)("h3",{id:"loading-view"},"Loading View"),Object(i.b)("p",null,"Because the state is restored asynchronously, the app must render an empty/loading view for a moment before we have the initial state. To handle this, we can return a loading view when ",Object(i.b)("inlineCode",{parentName:"p"},"isReady")," is ",Object(i.b)("inlineCode",{parentName:"p"},"false"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"if (!isReady) {\n  return <ActivityIndicator />;\n}\n")),Object(i.b)("h2",{id:"warning-serializable-state"},"Warning: Serializable State"),Object(i.b)("p",null,"Each param, route, and navigation state must be fully serializable for this feature to work. Typically, you would serialize the state as a JSON string. This means that your routes and params must contain no functions, class instances, or recursive data structures."),Object(i.b)("p",null,"You can modify the initial state object before passing it to container, but note that if your ",Object(i.b)("inlineCode",{parentName:"p"},"initialState")," provides an invalid object (an object from which the navigation state cannot be recovered), React Navigation may not be able to handle the situation gracefully."))}p.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||i;return n?r.a.createElement(m,s({ref:t},l,{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);