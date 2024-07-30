import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
    title: "chldo AI Guide",
    tagline: "당신의 최애 AI, 직접 만들고 대화하세요",
    favicon: "img/favicon.ico",

    // Set the production url of your site here
    url: "https://chldo.github.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "chldo", // Usually your GitHub org/user name.
    projectName: "chldo.github.io", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    deploymentBranch: "gh-pages",
    trailingSlash: false,

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
                docs: {
                    sidebarPath: "./sidebars.ts",
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/chldo/chldo.github.io/tree/main",
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        "https://github.com/chldo/chldo.github.io/tree/main",
                },
                theme: {
                    customCss: "./src/css/custom.css",
                },
            } satisfies Preset.Options,
        ],
    ],

    themes: ["@docusaurus/theme-mermaid"],
    plugins: ["@docusaurus/theme-live-codeblock"],
    // In order for Mermaid code blocks in Markdown to work,
    // you also need to enable the Remark plugin with this option
    markdown: {
        mermaid: true,
    },

    themeConfig: {
        liveCodeBlock: {
            /**
             * The position of the live playground, above or under the editor
             * Possible values: "top" | "bottom"
             */
            playgroundPosition: "bottom",
        },

        // Replace with your project's social card
        image: "img/chldo-social-card.jpg",
        navbar: {
            title: "chldo AI Guide",
            logo: {
                alt: "chldo AI Logo",
                src: "img/logo.svg",
            },
            items: [
                {
                    type: "docSidebar",
                    sidebarId: "tutorialSidebar",
                    position: "left",
                    label: "Tutorial",
                },
                { to: "/blog", label: "Blog", position: "left" },
                {
                    href: "https://github.com/chldo/",
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
                            label: "Tutorial",
                            to: "/docs/intro",
                        },
                        {
                            label: "Blog",
                            to: "/blog",
                        },
                    ],
                },
                {
                    title: "Community",
                    items: [
                        {
                            label: "Discord",
                            href: "https://discord.gg/EKgruDkcmZ",
                        },
                        {
                            label: "X (Twitter)",
                            href: "https://x.com/chldoai",
                        },
                    ],
                },
                {
                    title: "More",
                    items: [
                        {
                            label: "chldo.com",
                            to: "https://chldo.com",
                        },
                        {
                            label: "chldo.ai",
                            to: "https://chldo.ai",
                        },
                        {
                            label: "GitHub",
                            href: "https://github.com/chldo/",
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} CoreDotToday, Inc.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
