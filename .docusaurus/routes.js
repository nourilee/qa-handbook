import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/qa-handbook/practice',
    component: ComponentCreator('/qa-handbook/practice', 'b5c'),
    exact: true
  },
  {
    path: '/qa-handbook/quick-guide',
    component: ComponentCreator('/qa-handbook/quick-guide', 'bcb'),
    exact: true
  },
  {
    path: '/qa-handbook/docs',
    component: ComponentCreator('/qa-handbook/docs', 'acb'),
    routes: [
      {
        path: '/qa-handbook/docs/category/coding-interviews-for-test-automation',
        component: ComponentCreator('/qa-handbook/docs/category/coding-interviews-for-test-automation', '8a7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/category/problem-solving-interviews',
        component: ComponentCreator('/qa-handbook/docs/category/problem-solving-interviews', '50f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/category/scenario-based-assessments',
        component: ComponentCreator('/qa-handbook/docs/category/scenario-based-assessments', 'b7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/category/technical-interviews',
        component: ComponentCreator('/qa-handbook/docs/category/technical-interviews', 'be6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Coding/Automation Scripting',
        component: ComponentCreator('/qa-handbook/docs/Coding/Automation Scripting', 'bb4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Coding/CI and Version Control',
        component: ComponentCreator('/qa-handbook/docs/Coding/CI and Version Control', '84f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Coding/Code Review for Test Automation',
        component: ComponentCreator('/qa-handbook/docs/Coding/Code Review for Test Automation', '926'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Coding/Practice and Projects',
        component: ComponentCreator('/qa-handbook/docs/Coding/Practice and Projects', '41d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Coding/Test Data Management',
        component: ComponentCreator('/qa-handbook/docs/Coding/Test Data Management', '7e9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Coding/Tools and Frameworks',
        component: ComponentCreator('/qa-handbook/docs/Coding/Tools and Frameworks', '091'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Intro',
        component: ComponentCreator('/qa-handbook/docs/Intro', '933'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Problem Solving/Defect Analysis and Reporting',
        component: ComponentCreator('/qa-handbook/docs/Problem Solving/Defect Analysis and Reporting', '121'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Problem Solving/Test Case Refinement',
        component: ComponentCreator('/qa-handbook/docs/Problem Solving/Test Case Refinement', 'd99'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Problem Solving/Test Scenario Creation',
        component: ComponentCreator('/qa-handbook/docs/Problem Solving/Test Scenario Creation', 'a3f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Scenarios/End-to-End Testing Scenarios',
        component: ComponentCreator('/qa-handbook/docs/Scenarios/End-to-End Testing Scenarios', '527'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Scenarios/Integration Testing Scenarios',
        component: ComponentCreator('/qa-handbook/docs/Scenarios/Integration Testing Scenarios', '05a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Scenarios/Regression Testing Scenarios',
        component: ComponentCreator('/qa-handbook/docs/Scenarios/Regression Testing Scenarios', 'fee'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Technical/Automation',
        component: ComponentCreator('/qa-handbook/docs/Technical/Automation', '98f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Technical/Concepts',
        component: ComponentCreator('/qa-handbook/docs/Technical/Concepts', '6f8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Technical/Documentations',
        component: ComponentCreator('/qa-handbook/docs/Technical/Documentations', '58a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Technical/Non Functional',
        component: ComponentCreator('/qa-handbook/docs/Technical/Non Functional', 'd65'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Technical/Overview',
        component: ComponentCreator('/qa-handbook/docs/Technical/Overview', '3f9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/qa-handbook/docs/Technical/Techniques',
        component: ComponentCreator('/qa-handbook/docs/Technical/Techniques', '885'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/qa-handbook/',
    component: ComponentCreator('/qa-handbook/', '1d9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
