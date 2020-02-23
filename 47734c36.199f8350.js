(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{233:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return s}));var n=a(1),i=a(9),r=(a(0),a(465)),o={id:"material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",sidebar_label:"createMaterialBottomTabNavigator"},b={id:"version-3.x/material-bottom-tab-navigator",title:"createMaterialBottomTabNavigator",description:"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused.",source:"@site/versioned_docs/version-3.x/material-bottom-tab-navigator.md",permalink:"/docs/3.x/material-bottom-tab-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-3.x/material-bottom-tab-navigator.md",version:"3.x",sidebar_label:"createMaterialBottomTabNavigator",sidebar:"version-3.x-docs",previous:{title:"createBottomTabNavigator",permalink:"/docs/3.x/bottom-tab-navigator"},next:{title:"createMaterialTopTabNavigator",permalink:"/docs/3.x/material-top-tab-navigator"}},l=[{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"MaterialBottomTabNavigatorConfig",id:"materialbottomtabnavigatorconfig",children:[]},{value:"<code>navigationOptions</code> for screens inside of the navigator",id:"navigationoptions-for-screens-inside-of-the-navigator",children:[]},{value:"Using with <code>react-native-paper</code> (optional)",id:"using-with-react-native-paper-optional",children:[]}],c={rightToc:l};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A material-design themed tab bar on the bottom of the screen that lets you switch between different routes. Routes are lazily initialized -- their screen components are not mounted until they are first focused."),Object(r.b)("img",{src:"/docs/assets/navigators/bottom-navigation.gif",style:{width:"420px",maxWidth:"100%"}}),Object(r.b)("p",null,"To use this navigator, you need to install ",Object(r.b)("inlineCode",{parentName:"p"},"react-navigation-material-bottom-tabs")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"npm install react-navigation-material-bottom-tabs react-native-paper\n")),Object(r.b)("p",null,"This API also requires that you install ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-vector-icons"),"! If you are using Expo, it will just work out of the box. Otherwise, ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/oblador/react-native-vector-icons#installation"}),"follow these installation instructions"),"."),Object(r.b)("p",null,"To use this tab navigator, import it from ",Object(r.b)("inlineCode",{parentName:"p"},"react-navigation-material-bottom-tabs")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";\n\ncreateMaterialBottomTabNavigator(\n  RouteConfigs,\n  MaterialBottomTabNavigatorConfig\n);\n')),Object(r.b)("p",null,"This library uses the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/bottom-navigation.html"}),Object(r.b)("inlineCode",{parentName:"a"},"BottomNavigation")," component from ",Object(r.b)("inlineCode",{parentName:"a"},"react-native-paper")),". It doesn't include the whole ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-paper")," library in your bundle, so you don't need to worry about it."),Object(r.b)("h2",{id:"routeconfigs"},"RouteConfigs"),Object(r.b)("p",null,"The route configs object is a mapping from route name to a route config."),Object(r.b)("h2",{id:"materialbottomtabnavigatorconfig"},"MaterialBottomTabNavigatorConfig"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"shifting")," - Whether the shifting style is used, the active tab appears wider and the inactive tabs won't have a label. By default, this is ",Object(r.b)("inlineCode",{parentName:"li"},"true")," when you have more than 3 tabs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"labeled")," - Whether to show labels in tabs. When ",Object(r.b)("inlineCode",{parentName:"li"},"false"),", only icons will be displayed."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"activeColor")," - Custom color for icon and label in the active tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"inactiveColor")," - Custom color for icon and label in the inactive tab."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"barStyle")," - Style for the bottom navigation bar. You can set a bottom padding here if you have a translucent navigation bar on Android: ",Object(r.b)("inlineCode",{parentName:"li"},"barStyle={{ paddingBottom: 48 }}"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"initialRouteName")," - The routeName for the initial tab route when first loading."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"order")," - Array of routeNames which defines the order of the tabs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"paths")," - Provide a mapping of routeName to path config, which overrides the paths set in the routeConfigs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"backBehavior")," - ",Object(r.b)("inlineCode",{parentName:"li"},"initialRoute")," to return to initial tab, ",Object(r.b)("inlineCode",{parentName:"li"},"order")," to return to previous tab, ",Object(r.b)("inlineCode",{parentName:"li"},"history")," to return to last visited tab, or ",Object(r.b)("inlineCode",{parentName:"li"},"none"),".")),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"export default createMaterialBottomTabNavigator({\n  Album: { screen: Album },\n  Library: { screen: Library },\n  History: { screen: History },\n  Cart: { screen: Cart },\n}, {\n  initialRouteName: 'Album',\n  activeColor: '#f0edf6',\n  inactiveColor: '#3e2465',\n  barStyle: { backgroundColor: '#694fad' },\n});\n")),Object(r.b)("h2",{id:"navigationoptions-for-screens-inside-of-the-navigator"},Object(r.b)("inlineCode",{parentName:"h2"},"navigationOptions")," for screens inside of the navigator"),Object(r.b)("h4",{id:"title"},Object(r.b)("inlineCode",{parentName:"h4"},"title")),Object(r.b)("p",null,"Generic title that can be used as a fallback for ",Object(r.b)("inlineCode",{parentName:"p"},"headerTitle")," and ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarLabel"),"."),Object(r.b)("h4",{id:"tabbaricon"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarIcon")),Object(r.b)("p",null,"React Element or a function that given ",Object(r.b)("inlineCode",{parentName:"p"},"{ focused: boolean, horizontal: boolean, tintColor: string }")," returns a React.Node, to display in the tab bar. ",Object(r.b)("inlineCode",{parentName:"p"},"horizontal")," is ",Object(r.b)("inlineCode",{parentName:"p"},"true")," when the device is in landscape and ",Object(r.b)("inlineCode",{parentName:"p"},"false")," when portrait. The icon is re-rendered whenever the device orientation changes."),Object(r.b)("h4",{id:"tabbarcolor"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarColor")),Object(r.b)("p",null,"Color for the tab bar when the tab corresponding to the screen is active. Used for the ripple effect. This is only supported when ",Object(r.b)("inlineCode",{parentName:"p"},"shifting")," is ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("h4",{id:"tabbarlabel"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarLabel")),Object(r.b)("p",null,"Title string of a tab displayed in the tab bar. When undefined, scene ",Object(r.b)("inlineCode",{parentName:"p"},"title")," is used. To hide, see ",Object(r.b)("inlineCode",{parentName:"p"},"labeled")," option in the previous section."),Object(r.b)("h4",{id:"tabbaraccessibilitylabel"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarAccessibilityLabel")),Object(r.b)("p",null,"Accessibility label for the tab button. This is read by the screen reader when the user taps the tab. It's recommended to set this if you don't have a label for the tab."),Object(r.b)("h4",{id:"tabbartestid"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarTestID")),Object(r.b)("p",null,"ID to locate this tab button in tests."),Object(r.b)("h4",{id:"tabbaronpress"},Object(r.b)("inlineCode",{parentName:"h4"},"tabBarOnPress")),Object(r.b)("p",null,"Callback to handle press events; the argument is an object containing:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"navigation"),": navigation prop for the screen"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"defaultHandler"),": the default handler for tab press")),Object(r.b)("p",null,"Useful for adding a custom logic before the transition to the next scene (the tapped one) starts."),Object(r.b)("h2",{id:"using-with-react-native-paper-optional"},"Using with ",Object(r.b)("inlineCode",{parentName:"h2"},"react-native-paper")," (optional)"),Object(r.b)("p",null,"You can use the theming support in ",Object(r.b)("inlineCode",{parentName:"p"},"react-native-paper")," to customize the material bottom navigation by wrapping your app in ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/getting-started.html"}),Object(r.b)("inlineCode",{parentName:"a"},"Provider")," from ",Object(r.b)("inlineCode",{parentName:"a"},"react-native-paper")),". A common use case for this can be to customize the background color for the screens when your app has a dark theme. Follow the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://callstack.github.io/react-native-paper/theming.html"}),"instructions on ",Object(r.b)("inlineCode",{parentName:"a"},"react-native-paper"),"'s documentation")," to learn how to customize the theme."))}s.isMDXComponent=!0},465:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),s=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=s(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||d[u]||r;return a?i.a.createElement(m,b({ref:t},c,{components:a})):i.a.createElement(m,b({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);