import { createApp } from 'vue'
import App from './App.vue'
import components from '../packages/index'

const app = createApp(App)
app.use(components)
app.mount('#app')
