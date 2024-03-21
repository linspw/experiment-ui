import { defineConfig } from "vitepress";
import { alias } from "../../configs/project/alias-config";
import { postcssIsolateStyles } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Experiment UI",
  description: "Experiment UI - UI Library write for Vue 3",
  base: "/experiment-ui/",
  head: [
    [
      "script",
      {
        src: "https://kit.fontawesome.com/1e91b4a459.js",
      },
    ],
  ],
  themeConfig: {
    logo: {
      light: '/logo-horizontal-lighter.svg',
      dark: '/logo-horizontal-darker.svg',
      alt: "Logo"
    },
    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Components", link: "/components/index.md" },
    ],

    sidebar: [
      {
        text: "Get Started",
        link: "/get-started",
      },
      {
        text: "Components",
        link: "/components/index.md",
        items: [
          {
            text: "Atoms",
            items: [
              { text: "Button", link: "/components/atoms/button.md" },
              { text: "Card", link: "/components/atoms/card.md" },
              { text: "Grid", link: "/components/atoms/grid.md" },
              { text: "Icon", link: "/components/atoms/icon.md" },
              { text: "Input", link: "/components/atoms/input.md" },
              { text: "Text", link: "/components/atoms/text.md" },
            ],
          },
          { text: "Molecules" },
          { text: "Organism" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    resolve: {
      alias,
    },
    css: {
      postcss: {
        plugins: [
          postcssIsolateStyles({
            includeFiles: [/vp-doc\.css/],
          }),
        ]
      },
    },
  },
});
