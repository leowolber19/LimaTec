import { createApp } from 'vue'
import roteador from './roteador'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css'


createApp(App).use(roteador).mount('#app')
