import { createApp } from 'vue'
import { createAuth0 } from '@auth0/auth0-vue'
import router from '@/router/'
import 'primeicons/primeicons.css'
import './style.css'
import App from './App.vue'

const auth = new createAuth0({
  domain: 'nmoore-dev.us.auth0.com',
  clientId: 'QpHuQ1ZVL9PWCsGGGCb8feiq2brGVORH',
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
})

createApp(App).use(router).use(auth).mount('#app')
