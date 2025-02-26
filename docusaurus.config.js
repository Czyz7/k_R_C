// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "California Care Coordinators",
  tagline: "Internal Resource Center",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.

          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/logo_CCC.jpg",
      navbar: {
        title: "Internal Resource Center",
        logo: {
          alt: "My Site Logo",
          src: "img/cCC.svg",
        },
        items: [
          {
            to: "/docs/category/policies",
            label: "Policies",
            position: "left",
          },
          {
            to: "/docs/category/procedures",
            label: "Procedures",
            position: "left",
          },
          {
            to: "/docs/category/announcements",
            label: "Announcements",
            position: "left",
          },
          {
            to: "/docs/category/documents",
            label: "Documents",
            position: "left",
          },
          {
            to: "/docs/category/case-manager-tools",
            label: "Case Manager Tools",
            position: "left",
          },
          {
            to: "/docs/category/member-resources",
            label: "Member Resources",
            position: "left",
          },
          {
            to: "/docs/category/trusted-pmslls",
            label: "Trusted PMs/LLs",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "CCC Company Site",
            items: [
              {
                label: "Homepage",
                to: "/",
              },
            ],
          },
          {
            title: "Internal Resource Center",
            items: [
              {
                label: "Policies",
                href: "/docs/category/policies",
              },
              {
                label: "Procedures",
                href: "/docs/category/procedures",
              },
              {
                label: "Announcements",
                href: "/docs/category/announcements",
              },
              {
                label: "Documents",
                href: "/docs/category/documents",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Case Manager Tools",
                to: "/docs/category/case-manager-tools",
              },
              {
                label: "Member Resources",
                to: "/docs/category/member-resources",
              },
              {
                label: "Trusted PMs/LLs",
                to: "/docs/category/trusted-pmslls",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} California Care Coordinators.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
