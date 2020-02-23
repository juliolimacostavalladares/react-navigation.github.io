(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{460:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(9),r=(n(0),n(465)),i={id:"handling-iphonex",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},c={id:"version-4.x/handling-iphonex",title:"Supporting safe areas",description:'By default, React Navigation aids in ensuring your application displays correctly on the iPhone X and other devices with notches and "safe areas". It does so by using `SafeAreaView` inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.',source:"@site/versioned_docs/version-4.x/handling-iphonex.md",permalink:"/docs/4.x/handling-iphonex",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-4.x/handling-iphonex.md",version:"4.x",sidebar_label:"Supporting safe areas",sidebar:"version-4.x-docs",previous:{title:"Authentication flows",permalink:"/docs/4.x/auth-flow"},next:{title:"Different status bar configuration based on route",permalink:"/docs/4.x/status-bar"}},s=[{value:"Hidden/Custom Navigation Bar or Tab Bar",id:"hiddencustom-navigation-bar-or-tab-bar",children:[]},{value:"Landscape Mode",id:"landscape-mode",children:[]},{value:"Use <code>forceInset</code> to get more control",id:"use-forceinset-to-get-more-control",children:[]},{value:"Android notches",id:"android-notches",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,'By default, React Navigation aids in ensuring your application displays correctly on the iPhone X and other devices with notches and "safe areas". It does so by using ',Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView"),' inside of UI elements that may interact with the sensor cluster ("the notch") or the home activity indicator.'),Object(r.b)("p",null,"The goal is to (a) maximize usage of the screen (b) without hiding content or making it difficult to interact with by having it obscured by a physical display cutout or some operating system UI."),Object(r.b)("p",null,"It's tempting to solve (a) by wrapping your entire app in a container with padding that ensures all content will not be occluded. But in doing so, we waste a bunch of space on the screen, as pictured in the image on the left below. What we ideally want is the image pictured on the right. We can use ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView")," for this. The rest of this guide gives more information on how to support safe areas in React Navigation."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/00-intro.png",alt:null}))),Object(r.b)("a",{href:"https://snack.expo.io/@react-navigation/boring-safe-area",target:"blank",class:"run-code-button"},"\u2192 Run the example pictured on the left")," or, preferably, ",Object(r.b)("a",{href:"https://snack.expo.io/@react-navigation/nice-safe-area",target:"blank",class:"run-code-button"},"run the example pictured on the right."),Object(r.b)("h2",{id:"hiddencustom-navigation-bar-or-tab-bar"},"Hidden/Custom Navigation Bar or Tab Bar"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/01-iphonex-default.png",alt:"Default React Navigation Behavior"}))),Object(r.b)("p",null,"However, if you're overriding the default navigation bar, it's important to ensure your UI doesn't interfere with either of those hardware elements."),Object(r.b)("p",null,"For example, if I render nothing for the ",Object(r.b)("inlineCode",{parentName:"p"},"header")," or ",Object(r.b)("inlineCode",{parentName:"p"},"tabBarComponent"),", nothing renders"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const Tabs = createBottomTabNavigator({\n  ...\n}, {\n  tabBarComponent: () => null,\n});\n\nexport default createStackNavigator({\n  ...\n}, {\n  headerMode: 'none',\n});\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/02-iphonex-content-hidden.png",alt:"Text hidden by iPhoneX UI elements"}))),Object(r.b)("p",null,"To fix this issue you can wrap your content in a ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView"),", which can be imported from ",Object(r.b)("inlineCode",{parentName:"p"},"react-navigation"),". Recall that ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView")," should not wrap entire navigators, just the screen components or any content in them."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import SafeAreaView from 'react-native-safe-area-view';\n\nclass MyHomeScreen extends Component {\n  render() {\n    return (\n      <SafeAreaView style={styles.container}>\n        <Text style={styles.paragraph}>This is top text.</Text>\n        <Text style={styles.paragraph}>This is bottom text.</Text>\n      </SafeAreaView>\n    );\n  }\n}\n")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/03-iphonex-content-fixed.png",alt:"Content spaced correctly with SafeAreaView"}))),Object(r.b)("p",null,"This will detect if the app is running on an iPhoneX and, if so, ensure the content isn't hidden behind any hardware elements."),Object(r.b)("h2",{id:"landscape-mode"},"Landscape Mode"),Object(r.b)("p",null,"Even if you're using the default navigation bar and tab bar if your application works in landscape mode it's important to ensure you content isn't hidden behind the sensor cluster."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/04-iphonex-landscape-hidden.png",alt:"App in landscape mode with text hidden"}))),Object(r.b)("p",null,"To fix this you can, once again, wrap your content in a ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView"),". This will not conflict with the navigation bar nor the tab bar's default behavior in portrait mode."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/05-iphonex-landscape-fixed.png",alt:"App in landscape mode with text visible"}))),Object(r.b)("p",null,"In conclusion, use the ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView")," component on the screens you register with a React Navigation navigator."),Object(r.b)("p",null,"A ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@react-navigation/docs:-iphonex-demo-v3"}),"Snack")," is available with the code used in this overview."),Object(r.b)("h2",{id:"use-forceinset-to-get-more-control"},"Use ",Object(r.b)("inlineCode",{parentName:"h2"},"forceInset")," to get more control"),Object(r.b)("p",null,"In some cases you might need more control over which paddings are applied. For example, you can remove bottom padding by passing ",Object(r.b)("inlineCode",{parentName:"p"},"forceInset")," prop to ",Object(r.b)("inlineCode",{parentName:"p"},"SafeAreaView"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<SafeAreaView style={styles.container} forceInset={{ bottom: 'never' }}>\n  <Text style={styles.paragraph}>This is top text.</Text>\n  <Text style={styles.paragraph}>This is bottom text.</Text>\n</SafeAreaView>\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"forceInset")," takes an object with the keys ",Object(r.b)("inlineCode",{parentName:"p"},"top | bottom | left | right | vertical | horizontal")," and the values ",Object(r.b)("inlineCode",{parentName:"p"},"'always' | 'never'"),". Or you can override the padding altogether by passing an integer."),Object(r.b)("p",null,"There is also a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@react-navigation/react-navigation-docs:-safeareaview-demo-v3"}),"Snack")," available to demonstrate how ",Object(r.b)("inlineCode",{parentName:"p"},"forceInset")," behaves."),Object(r.b)("h2",{id:"android-notches"},"Android notches"),Object(r.b)("p",null,"React Native does not currently expose an API to access information about device cutouts on Android devices. If your app has an opaque status bar (the default in React Native), that may handle the area where the device has its cutout without any further work required. If not, to workaround this you may want to use the following temporary workaround:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/react-native-community/react-native-device-info"}),"react-native-device-info"),"."),Object(r.b)("li",{parentName:"ul"},"Check if the device has a notch with ",Object(r.b)("inlineCode",{parentName:"li"},"DeviceInfo.hasNotch()")," - this compares the device brand and model to a list of devices with notches - a crude but effective workaround."),Object(r.b)("li",{parentName:"ul"},"If the device has a notch, you may want to increase the status bar height known to the SafeAreaView by doing something like this:")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import { Platform } from 'react-native';\nimport SafeAreaView from 'react-native-safe-area-view';\nimport DeviceInfo from 'react-native-device-info';\n\nif (Platform.OS === 'android' && DeviceInfo.hasNotch()) {\n  SafeAreaView\n    .setStatusBarHeight\n    /* Some value for status bar height + notch height */\n    ();\n}\n")),Object(r.b)("p",null,"Work is in progress on a longer term solution, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/react-native/pull/20999"}),"this pull request")," for more information."))}p.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,u=b["".concat(i,".").concat(h)]||b[h]||d[h]||r;return n?o.a.createElement(u,c({ref:t},l,{components:n})):o.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);