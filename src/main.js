import { createApp } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

import App from './App.vue'

import './assets/main.css'

//const app = createApp({})
//app.use(pinia)
//app.mount('#app')

createApp(App).use(pinia).mount('#app')
