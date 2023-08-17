"use strict";(self.webpackChunkqa_handbook=self.webpackChunkqa_handbook||[]).push([[742],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>y});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,y=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(y,i(i({ref:t},m),{},{components:a})):n.createElement(y,i({ref:t},m))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4929:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={},i="Test Scenario Creation Exercise",l={type:"mdx",permalink:"/qa-handbook/key-pages/test-scenario",source:"@site/src/pages/key-pages/test-scenario.md",title:"Test Scenario Creation Exercise",description:"Employee Management System Testing",frontMatter:{}},s=[{value:"Employee Management System Testing",id:"employee-management-system-testing",level:2},{value:"Instructions:",id:"instructions",level:3},{value:"Sample Test Scenarios:",id:"sample-test-scenarios",level:3},{value:"Scenario 1: Adding a New Employee",id:"scenario-1-adding-a-new-employee",level:4},{value:"Scenario 2: Updating Employee Personal Details",id:"scenario-2-updating-employee-personal-details",level:4},{value:"Scenario 3: Handling Employee Leave Request",id:"scenario-3-handling-employee-leave-request",level:4},{value:"Scenario 4: Invalid Login Attempt",id:"scenario-4-invalid-login-attempt",level:4},{value:"Scenario 5: Searching for Inactive Employee",id:"scenario-5-searching-for-inactive-employee",level:4}],p={toc:s},m="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"test-scenario-creation-exercise"},"Test Scenario Creation Exercise"),(0,r.kt)("h2",{id:"employee-management-system-testing"},"Employee Management System Testing"),(0,r.kt)("p",null,"You are the QA Tester for the OrangeHRM demo website (",(0,r.kt)("a",{parentName:"p",href:"https://opensource-demo.orangehrmlive.com"},"https://opensource-demo.orangehrmlive.com"),"), an employee management system. Your task is to create test scenarios for testing various aspects of the employee management process. The website allows administrators to manage employee information, such as adding new employees, updating personal details, and handling employee leave requests. The goal is to ensure that the employee management system functions correctly, and employee data is accurately maintained."),(0,r.kt)("h3",{id:"instructions"},"Instructions:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Review the ",(0,r.kt)("a",{parentName:"p",href:"https://opensource-demo.orangehrmlive.com"},"OrangeHRM demo website")," to understand the employee management process.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Identify the key features and user interactions involved in the employee management system.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a set of comprehensive test scenarios that cover various aspects of employee management. Your test scenarios should include both positive and negative test cases, focusing on different features, user actions, and potential edge cases.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Document each test scenario with clear steps, inputs, expected outcomes, and any special conditions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Apply the concepts and techniques of boundary value analysis, equivalence partitioning, user flows, and negative testing as you create your test scenarios.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Focus on ensuring that the test scenarios provide thorough coverage of employee management tasks, from adding employees to handling leave requests.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Present your test scenarios in the following markdown format, and be prepared to explain your thought process and rationale behind each scenario."))),(0,r.kt)("h3",{id:"sample-test-scenarios"},"Sample Test Scenarios:"),(0,r.kt)("h4",{id:"scenario-1-adding-a-new-employee"},"Scenario 1: Adding a New Employee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Log in to the OrangeHRM demo website using valid admin credentials."),(0,r.kt)("li",{parentName:"ol"},'Navigate to the "Add Employee" page.'),(0,r.kt)("li",{parentName:"ol"},"Enter valid employee details (e.g., first name, last name, employee ID)."),(0,r.kt)("li",{parentName:"ol"},"Save the employee information."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Outcome:")," The employee is successfully added to the system, and the details are accurately displayed in the employee list.")),(0,r.kt)("h4",{id:"scenario-2-updating-employee-personal-details"},"Scenario 2: Updating Employee Personal Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Log in to the OrangeHRM demo website using valid admin credentials."),(0,r.kt)("li",{parentName:"ol"},"Search for an existing employee."),(0,r.kt)("li",{parentName:"ol"},"Update the employee's personal details (e.g., contact information, address)."),(0,r.kt)("li",{parentName:"ol"},"Save the changes."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Outcome:")," The employee's personal details are successfully updated, and the changes are reflected in the employee profile.")),(0,r.kt)("h4",{id:"scenario-3-handling-employee-leave-request"},"Scenario 3: Handling Employee Leave Request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Log in to the OrangeHRM demo website using valid admin credentials."),(0,r.kt)("li",{parentName:"ol"},'Navigate to the "Leave" section and review pending leave requests.'),(0,r.kt)("li",{parentName:"ol"},"Approve a leave request for a specific employee."),(0,r.kt)("li",{parentName:"ol"},"Verify that the employee's leave balance is updated accordingly."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Outcome:")," The approved leave request is accurately processed, and the employee's leave balance is adjusted.")),(0,r.kt)("h4",{id:"scenario-4-invalid-login-attempt"},"Scenario 4: Invalid Login Attempt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Access the OrangeHRM demo website login page."),(0,r.kt)("li",{parentName:"ol"},"Enter an invalid username and password combination."),(0,r.kt)("li",{parentName:"ol"},"Attempt to log in."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Outcome:")," The system displays an appropriate error message and prevents access for invalid login attempts.")),(0,r.kt)("h4",{id:"scenario-5-searching-for-inactive-employee"},"Scenario 5: Searching for Inactive Employee"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Steps:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Log in to the OrangeHRM demo website using valid admin credentials."),(0,r.kt)("li",{parentName:"ol"},"Search for an employee who is marked as inactive."),(0,r.kt)("li",{parentName:"ol"},"Verify that the inactive employee's profile is displayed appropriately."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Expected Outcome:")," The inactive employee's profile is displayed with the appropriate status.")))}c.isMDXComponent=!0}}]);