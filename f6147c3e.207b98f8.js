(window.webpackJsonp=window.webpackJsonp||[]).push([[326],{450:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(1),r=n(9),i=(n(0),n(465)),o={id:"handling-safe-area",title:"Supporting safe areas",sidebar_label:"Supporting safe areas"},c={id:"version-5.x/handling-safe-area",title:"Supporting safe areas",description:"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:",source:"@site/versioned_docs/version-5.x/handling-safe-area.md",permalink:"/docs/handling-safe-area",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/source/versioned_docs/version-5.x/handling-safe-area.md",version:"5.x",sidebar_label:"Supporting safe areas",sidebar:"version-5.x/docs",previous:{title:"Authentication flows",permalink:"/docs/auth-flow"},next:{title:"Different status bar configuration based on route",permalink:"/docs/status-bar"}},s=[{value:"Hidden/Custom Header or Tab Bar",id:"hiddencustom-header-or-tab-bar",children:[]},{value:"Landscape Mode",id:"landscape-mode",children:[]},{value:"Tweak paddings for more control",id:"tweak-paddings-for-more-control",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"By default, React Navigation tries to ensure that the elements of the navigators display correctly on devices with notches (e.g. iPhone X) and UI elements which may overlap the app content. Such items include:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Physical notches"),Object(i.b)("li",{parentName:"ul"},"Status bar overlay"),Object(i.b)("li",{parentName:"ul"},"Home activity indicator on iOS"),Object(i.b)("li",{parentName:"ul"},"Navigation bar on Android")),Object(i.b)("p",null,'The area not overlapped by such items is referred to as "safe area".'),Object(i.b)("p",null,"We try to apply proper insets on the UI elements of the navigators to avoid being overlapped by such items. The goal is to (a) maximize usage of the screen (b) without hiding content or making it difficult to interact with by having it obscured by a physical display cutout or some operating system UI."),Object(i.b)("p",null,"While React Navigation handles safe areas for the built-in UI elements by default, your own content also needs to handle it to ensure that content isn't hidden by these items."),Object(i.b)("p",null,"It's tempting to solve (a) by wrapping your entire app in a container with padding that ensures all content will not be occluded. But in doing so, we waste a bunch of space on the screen, as pictured in the image on the left below. What we ideally want is the image pictured on the right."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/00-intro.png",alt:"Notch on the iPhone X"}))),Object(i.b)("p",null,"While React Native exports a ",Object(i.b)("inlineCode",{parentName:"p"},"SafeAreaView")," component, it has some inherent issues, i.e. if a screen containing safe area is animating, it causes jumpy behavior. In addition, this component only supports iOS 10+ with no support for older iOS versions or Android. We recommend to use the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/th3rdwave/react-native-safe-area-context"}),"react-native-safe-area-context")," library to handle safe areas in a more reliable way."),Object(i.b)("p",null,"The rest of this guide gives more information on how to support safe areas in React Navigation."),Object(i.b)("h2",{id:"hiddencustom-header-or-tab-bar"},"Hidden/Custom Header or Tab Bar"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/01-iphonex-default.png",alt:"Default React Navigation Behavior"}))),Object(i.b)("p",null,"React Navigation handles safe area in the default header. However, if you're using a custom header, it's important to ensure your UI is within the safe area."),Object(i.b)("p",null,"For example, if I render nothing for the ",Object(i.b)("inlineCode",{parentName:"p"},"header")," or ",Object(i.b)("inlineCode",{parentName:"p"},"tabBar"),", nothing renders"),Object(i.b)("samp",{id:"hidden-components"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react';\nimport { Text, View } from 'react-native';\nimport { NavigationContainer } from '@react-navigation/native';\nimport { createBottomTabNavigator } from '@react-navigation/bottom-tabs';\nimport { createStackNavigator } from '@react-navigation/stack';\n\nfunction Demo() {\n  return (\n    <View\n      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\nconst Stack = createStackNavigator();\nconst Tab = createBottomTabNavigator();\n\nexport default function App() {\n  return (\n    <NavigationContainer>\n      <Stack.Navigator initialRouteName=\"Home\" headerMode=\"none\">\n        <Stack.Screen name=\"Home\">\n          {() => (\n            <Tab.Navigator initialRouteName=\"Analitics\" tabBar={() => null}>\n              <Tab.Screen name=\"Analitics\" component={Demo} />\n              <Tab.Screen name=\"Profile\" component={Demo} />\n            </Tab.Navigator>\n          )}\n        </Stack.Screen>\n\n        <Stack.Screen name=\"Settings\" component={Demo} />\n      </Stack.Navigator>\n    </NavigationContainer>\n  );\n}\n")),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/02-iphonex-content-hidden.png",alt:"Text hidden by iPhoneX UI elements"}))),Object(i.b)("p",null,"To fix this issue you can apply safe area insets on your content. This can be achieved easily by using the ",Object(i.b)("inlineCode",{parentName:"p"},"SafeAreaView")," component from the ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-safe-area-context")," library:"),Object(i.b)("samp",{id:"safe-area-example"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';\n\nfunction Demo() {\n  return (\n    <SafeAreaView\n      style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center' }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </SafeAreaView>\n  );\n}\n\nexport default function App() {\n  return (\n    <SafeAreaProvider>\n      <NavigationContainer>{/*(...) */}</NavigationContainer>\n    </SafeAreaProvider>\n  );\n}\n")),Object(i.b)("p",null,"Make sure to wrap your app in ",Object(i.b)("inlineCode",{parentName:"p"},"SafeAreaProvider")," as per the instructions ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/th3rdwave/react-native-safe-area-context#usage"}),"here"),"."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/03-iphonex-content-fixed.png",alt:"Content spaced correctly with safe area insets"}))),Object(i.b)("p",null,"This will detect if the app is running on a device with notches, if so, ensure the content isn't hidden behind any hardware elements."),Object(i.b)("h2",{id:"landscape-mode"},"Landscape Mode"),Object(i.b)("p",null,"Even if you're using the default navigation bar and tab bar if your application works in landscape mode it's important to ensure you content isn't hidden behind the sensor cluster."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/04-iphonex-landscape-hidden.png",alt:"App in landscape mode with text hidden"}))),Object(i.b)("p",null,"To fix this you can, once again, apply safe area insets your content. This will not conflict with the navigation bar nor the tab bar's default behavior in portrait mode."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"/docs/assets/iphoneX/05-iphonex-landscape-fixed.png",alt:"App in landscape mode with text visible"}))),Object(i.b)("h2",{id:"tweak-paddings-for-more-control"},"Tweak paddings for more control"),Object(i.b)("p",null,"In some cases you might need more control over which paddings are applied. For example, you can only apply the top and the bottom padding by changing the ",Object(i.b)("inlineCode",{parentName:"p"},"style")," object:"),Object(i.b)("samp",{id:"use-safe-area"}),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import { useSafeArea } from 'react-native-safe-area-context';\n\nfunction Demo() {\n  const insets = useSafeArea();\n  return (\n    <View\n      style={{\n        paddingTop: insets.top,\n        paddingBottom: insets.bottom,\n\n        flex: 1,\n        justifyContent: 'space-between',\n        alignItems: 'center',\n      }}\n    >\n      <Text>This is top text.</Text>\n      <Text>This is bottom text.</Text>\n    </View>\n  );\n}\n")))}l.isMDXComponent=!0},465:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),u=a,m=b["".concat(o,".").concat(u)]||b[u]||d[u]||i;return n?r.a.createElement(m,c({ref:t},p,{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);