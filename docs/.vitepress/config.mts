import { defineConfig } from 'vitepress'
import { alias } from "../../configs/project/alias-config";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Experiment UI",
  description: "Experiment UI - UI Library write for Vue 3",
  base: "/experiment-ui/",
  head: [
    [
      'script',
      {
        src: 'https://kit.fontawesome.com/1e91b4a459.js'
      }
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/index.md' }
    ],

    sidebar: [
      {
        text: 'Components',
        link: '/components/index.md',
        items: [
          { text: 'Atoms', items: [{ text: 'Button', link: '/components/atoms/button.md' }] },
          { text: 'Molecules' },
          { text: 'Organism' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
  vite: {
    resolve: {
      alias,
    },
  }
})
