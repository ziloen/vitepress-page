
import { defineConfig } from 'vitepress'
import { github } from './meta'

// import getTags from 'vitepress-tags'

// const { site, page, theme } = useData()

// console.log({ site, page, theme });


export default defineConfig({
  base: '/vitepress-page/',
  outDir: '../dist',

  appearance: "dark",
  lastUpdated: true,

  themeConfig: {
    // siteTitle: '',
    nav: [
      {
        text: 'SVG',
        link: '/svg/index'
      },
      {
        text: "Pages",
        link: "/pages/index"
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
      ],
      '/pages/': [
        {
          "text": "Event",
          items: [
            {
              text: "KeyboardEvent",
              link: "/pages/KeyboardEvent"
            },
            {
              text: "BorderImage",
              link: "/pages/BorderImage"
            }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: github }
    ],

    algolia: {
      appId: "",
      apiKey: "",
      indexName: ""
    },
    // lastUpdatedText: 'Last update at'
  },

  markdown: {
    lineNumbers: false,

    // config(md) {
    //   console.log({ md })

    // },
  }
  // customData: pages
})