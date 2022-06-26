
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
      '<a></a>': [

      ]
    },
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