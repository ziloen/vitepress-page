
import type { UserConfig, DefaultTheme } from 'vitepress'

export default <UserConfig<DefaultTheme.Config>>{
  base: '/vitepress-page/',
  outDir: '../docs',
  themeConfig: {
    // siteTitle: '',
    nav: [
      {
        text: 'SVG',
        link: '/svg/index'
      }
    ]
  }
}