import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from './router'

import App from './App.vue'
import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)

// Initialize countries store once before mounting so the fetch runs only on app startup
import { useCountriesStore } from './stores/countries'
const countriesStore = useCountriesStore(pinia)
// start the fetch (don't block mount) - store will be persisted by pinia plugin
countriesStore.init().catch(() => {
	/* ignore init errors here; components can read store.error */
})

app.mount('#app')

