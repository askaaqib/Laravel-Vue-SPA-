// import './assets/main.css'
import './assets/styles.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { plugin, defaultConfig } from '@formkit/vue'
import config from '../formkit.config.ts'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(plugin, defaultConfig(config))
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

app.mount('#app')
