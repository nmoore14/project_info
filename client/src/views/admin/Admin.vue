<template>
  <div class="flex flex-col justify-start items-center w-screen h-screen bg-base-200">
    <Header />
    <div class="flex flex-row justify-start items-center w-full h-full">
      <template v-if="isAuthenticated">
        <SideDrawer />
        <div class="flex flex-col justify-start items-start p-4 w-full h-full content">
          <router-view />
        </div>
      </template>
      <template v-else>
        <div class="flex flex-col justify-center items-center p-4 w-full h-full content">
          <div class="flex flex-col justify-center items-center rounded-lg shadow-lg login-bg">
            <div class="card w-96 glass">
              <div class="card-body">
                <h2 class="w-full font-mono text-3xl text-center">Welcome!</h2>
                <p class="w-full font-sans text-md text-center">Login with your Google, GitHub, or Windows Account to edit your site</p>
                <div class="card-actions justify-center">
                  <button class="btn btn-secondary" @click="login">
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/userStore'
import Header from '@/components/admin/ui/Header.vue'
import SideDrawer from '@/components/admin/ui/SideDrawer.vue'

const userStore = useUserStore()
const { isAuthenticated } = storeToRefs(userStore)

const login = () => {
  userStore.loginWithRedirect()
}

</script>

<style>
.login-bg {
  width: 40rem;
  height: 15rem;
  background: url("/images/splatter.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
