import { defineConfig, defineConfigWithTheme, Theme } from 'vitepress'
import defaultTheme from 'vitepress/theme'

import "../style/vars.css"

export default {
  ...defaultTheme,
} as Theme