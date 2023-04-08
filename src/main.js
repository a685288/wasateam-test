import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/scss/_variables.scss'
import '@/assets/scss/reset.scss'

global.colorMode = 'light'

createApp(App).use(router).mount('#app')