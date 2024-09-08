import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const copyrightText = (() => {
  const yearName = `Copyright © ${new Date().getFullYear()} GDG on Campus – CVR`;
  const a = (href: string, text: string) =>
    `<a href="${href}" target="_blank" rel="license noopener noreferrer">${text}</a>`;
  const codeLicense = a(
    "https://spdx.org/licenses/AGPL-3.0-only.html",
    "AGPLv3"
  );
  const textLicense = a(
    "https://creativecommons.org/licenses/by-nc-sa/4.0/",
    "CC BY-NC-SA 4.0"
  );
  const license = `Code licensed under ${codeLicense}, content under ${textLicense}.`;
  return `${yearName}<br>${license}`;
})();

const config: Config = {
  title: "GDG on Campus – CVR College of Engineering",
  tagline: "Community for developers to connect and learn together.",
  favicon: "favicon.ico",

  url: "https://gdsccvr.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "gdsccvr", // Usually your GitHub org/user name.
  projectName: "gdsccvr.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

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
      {
        docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // TODO: Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // TODO: Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "GDG on Campus – CVR",
      logo: {
        // TODO: make logo a bit smaller
        alt: "GDG on Campus – CVR",
        src: "img/logo.png",
      },
      items: [
        // TODO: events page
        // { to: "/events", label: "📅 Events", position: "left" },
        { to: "/team", label: "👥 Team", position: "left" },
        // TODO: blog
        // { to: "/blog", label: "✍️ Blog", position: "left" },
        { to: "/links", label: "🔗 Links", position: "left" },
        {
          href: "https://gdg.community.dev/gdg-on-campus-cvr-college-of-engineering-hyderabad-india/",
          label: "Chapter page",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: copyrightText,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
