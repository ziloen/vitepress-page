
import { defineConfig, useData } from 'vitepress'
import type { UserConfig, DefaultTheme, } from 'vitepress'

// import getTags from 'vitepress-tags'

// const { site, page, theme } = useData()

// console.log({ site, page, theme });


export default defineConfig({
  base: '/vitepress-page/',
  outDir: '../docs',

  lastUpdated: true,

  themeConfig: {
    // siteTitle: '',
    nav: [
      {
        text: 'SVG',
        link: '/svg/index'
      },
      {
        text: 'index',
        link: '/index'
      }
    ],
    sidebar: {
      '/svg/': [
        {
          text: '标签',
          items: [
            { text: 'a', link: '/svg/' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ziloen' }
    ],
    lastUpdatedText: 'Last update at: '
  },

  markdown: {
    lineNumbers: false,

    // config(md) {
    //   console.log({ md })

    // },
  }
  // customData: pages
})