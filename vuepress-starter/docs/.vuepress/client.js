import { defineClientConfig } from 'vuepress/client'
import Icon from './components/Icon.vue'
import Button from './components/Button.vue'
console.log('client.js',Icon,Button)
export default defineClientConfig({
  enhance({ app }) {
    app.component('j-icon', Icon)
    app.component('j-button', Button)
  },
})
