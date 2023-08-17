"use strict";(self.webpackChunkqa_handbook=self.webpackChunkqa_handbook||[]).push([[87],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||i;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},776:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={},s="Exercise: Test Case Refinement",o={type:"mdx",permalink:"/qa-handbook/key-pages/test-case-refinement",source:"@site/src/pages/key-pages/test-case-refinement.md",title:"Exercise: Test Case Refinement",description:"You are testing a banking application that offers various features, including account management, funds transfer, and bill payment. One of the critical functionalities is the funds transfer feature, allowing users to transfer money between their accounts.",frontMatter:{}},l=[],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"exercise-test-case-refinement"},"Exercise: Test Case Refinement"),(0,r.kt)("p",null,"You are testing a banking application that offers various features, including account management, funds transfer, and bill payment. One of the critical functionalities is the funds transfer feature, allowing users to transfer money between their accounts."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Instructions:"),"\nRefine the identified test case following the principles of advanced test case refinement."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Existing Test Case:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title: Transfer funds between accounts"),(0,r.kt)("li",{parentName:"ul"},"Steps:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Log in to the application."),(0,r.kt)("li",{parentName:"ol"},"Navigate to the funds transfer section."),(0,r.kt)("li",{parentName:"ol"},"Select source and destination accounts."),(0,r.kt)("li",{parentName:"ol"},'Enter transfer amount and click "Transfer."'),(0,r.kt)("li",{parentName:"ol"},"Verify the success message."))),(0,r.kt)("li",{parentName:"ul"},"Expected Result: Funds are transferred successfully.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Advanced Refined Test Case:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title: Verify funds transfer between accounts with multiple scenarios"),(0,r.kt)("li",{parentName:"ul"},"Steps:",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Log in to the application with valid credentials."),(0,r.kt)("li",{parentName:"ol"},"Navigate to the funds transfer section."),(0,r.kt)("li",{parentName:"ol"},"Select source and destination accounts with different types (checking, savings, etc.)."),(0,r.kt)("li",{parentName:"ol"},'Enter valid transfer amounts (e.g., $100, $500, $1000) and click "Transfer."'),(0,r.kt)("li",{parentName:"ol"},"Verify the success message."),(0,r.kt)("li",{parentName:"ol"},"Check the updated account balances for both source and destination accounts."),(0,r.kt)("li",{parentName:"ol"},"Navigate to transaction history and validate the transfer entry."),(0,r.kt)("li",{parentName:"ol"},"Attempt to transfer funds from an invalid source account and validate error message."),(0,r.kt)("li",{parentName:"ol"},"Attempt to transfer more funds than available in the source account and validate error message."))),(0,r.kt)("li",{parentName:"ul"},"Expected Results:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Funds are transferred successfully for valid scenarios."),(0,r.kt)("li",{parentName:"ul"},"Account balances are updated accurately."),(0,r.kt)("li",{parentName:"ul"},"Transaction history entry reflects the transfer."),(0,r.kt)("li",{parentName:"ul"},"Error messages are displayed for invalid scenarios.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Explanation:")),(0,r.kt)("p",null,"In this refined test case, we have significantly expanded the coverage to include various data variations, validation checks, and account type combinations. We also validate the accuracy of account balances and transaction history updates."),(0,r.kt)("p",null,"The refined test case adheres to test case refinement principles by incorporating multiple scenarios, exhaustive data variations, and comprehensive validation. This ensures thorough testing of the funds transfer feature, uncovering potential defects and enhancing the overall test coverage."),(0,r.kt)("p",null,"By conducting these thorough validations, the test case contributes to ensuring the reliability and accuracy of the funds transfer functionality, even in complex scenarios."))}p.isMDXComponent=!0}}]);