import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue'
import router from '@/router/'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'

const auth0 = new createAuth0({
  domain: 'nmoore-dev.us.auth0.com',
  clientId: 'QpHuQ1ZVL9PWCsGGGCb8feiq2brGVORH',
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
})

const pinia = createPinia()

createApp(App).use(router).use(auth0).use(pinia).mount('#app')
