import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  Base:'/jiangUI/',
  lang: 'en-US',

  title: 'jiang-UI',
  description: 'My UI',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: ['/', '/get-started'],
    //侧边栏
    sidebar: [
      {
        text: '开始使用',
        link:'/'
      },
      {

        text: '基础组件',
        children: [
          {
            text: '图标', 
            link: '/comDocs/icon.md' 
          },
          {
            text: '按钮', 
            link: '/comDocs/button.md' 
          }
        ]
      }
    ]
  }),

  bundler: viteBundler(),
})
