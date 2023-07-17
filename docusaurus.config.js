// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "NeoForged docs",
  tagline: "The better mod loader",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.neoforged.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "neoforged", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.

  onBrokenLinks: "ignore", // Yay multi versioned-docs sites
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          lastVersion: "current",
          includeCurrentVersion: true,
          versions: {
            current: {
              label: "1.20.x",
            },
            "1.19.x": {
              banner: "unreleased",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "neogradle",
        path: "neogradle",
        routeBasePath: "neogradle",
        sidebarPath: require.resolve("./sidebarsNG.js"),
        lastVersion: "current",
        includeCurrentVersion: true,
        versions: {
          current: {
            label: "FG6",
          },
          "5.x": {
            label: "FG5",
            path: "5.x",
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: "NeoForged documentation",
        logo: {
          alt: "NeoForged Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "mainSidebar",
            position: "left",
            label: "Getting Started",
          },
          {
            type: "docSidebar",
            sidebarId: "ngSidebar",
            position: "left",
            docsPluginId: "neogradle",
            label: "NeoGradle Documentation",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            position: "right",
            docsPluginId: "neogradle",
          },
          {
            href: "https://github.com/neoforged/documentation",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                to: "/docs/gettingstarted/",
                label: "NeoForge Documentation",
              },
              {
                to: "/neogradle/docs/",
                label: "NeoGradle Documentation",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "Discord",
                href: "https://discord.neoforged.net/",
              },
              {
                label: "Main Website",
                href: "https://neoforged.net/",
              },
              {
                label: "GitHub",
                href: "https://github.com/neoforged/documentation",
              },
            ],
          },
        ],
        copyright: `Copyright © 2016, under the MIT license. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java", "gradle", "toml", "groovy", "kotlin"],
      },
      algolia: {
        // The application ID provided by Algolia
        appId: '05RJFT798Z',
  
        // Public API key: it is safe to commit it
        apiKey: 'b198aa85c7f2ee9364d105ef0be4d81a',
  
        indexName: 'neoforged'
      },
    }),
};

module.exports = config;
