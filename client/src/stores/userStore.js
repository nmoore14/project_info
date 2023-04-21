import { defineStore } from "pinia";
import { useAuth0 } from '@auth0/auth0-vue'

export const useUserStore = defineStore('user', {
  state: () => ({
    isAuthenticated: false,
    user: null,
    loading: false,
    auth0Client: useAuth0()
  }),
  actions: {
    async loginWithRedirect() {
      try {
        this.loading = true
        await this.auth0Client.loginWithPopup()
        this.isAuthenticated = this.auth0Client.isAuthenticated
      } catch (e) {
        console.error(e)
      } finally {
        this.user = this.auth0Client.user
        this.loading = false
      }
    },
    async handleRedirectCallback() {
      this.loading = true
      try {
        await this.auth0Client.handleRedirectCallback()
        this.isAuthenticated = this.auth0Client.isAuthenticated
      } catch (e) {
        console.error(e)
      } finally {
        this.loading = false
        this.user = this.auth0Client.user
      }
    },
    logout() {
      this.auth0Client.logout()
    },
  },
})
