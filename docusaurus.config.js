// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QA Handbook',
  tagline: 'A Personal Guide to Mastering QA Excellence, Interviews, and Beyond!',

  // Set the production url of your site here
  url: 'https://nourilee.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/qa-handbook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nourilee', // Usually your GitHub org/user name.
  projectName: 'qa-handbook', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: false, // Optional: disable the blog plugin
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/qa-handbook.png',
      navbar: {
        title: 'QA Handbook',
        logo: {
          alt: 'QA Handbook Logo',
          src: 'img/girl-coder.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Start Here ⬇️',
          },
          {
            href: '/quick-guide',
            label: 'Quick Guide ⚡️',
            position: 'left',
          },          {
            href: 'https://github.com/nourilee/qa-handbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Start Here ⬇️',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/nourileesantos/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'About Me',
                href: 'https://nourilee.github.io/about-me/',
              },
              {
                label: 'My Portfolio',
                href: 'https://github.com/santosn-qa',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} QA Handbook. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
