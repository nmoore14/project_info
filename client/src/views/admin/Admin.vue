<template>
  <div class="flex flex-col justify-start items-center w-screen h-screen bg-base-200">
    <Header />
    <div class="flex flex-row justify-start items-center w-full h-full">
      <SideDrawer />
      <div class="flex flex-col justify-start items-start p-4 w-full h-full content">
        <h1>Admin Area</h1>
        <router-view />
        <button @click="login">Log In</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/admin/ui/Header.vue'
import SideDrawer from '@/components/admin/ui/SideDrawer.vue'
import { useAuth0 } from '@auth0/auth0-vue'

const { loginWithRedirect } = useAuth0()
const login = () => { loginWithRedirect() }
</script>

<style></style>
