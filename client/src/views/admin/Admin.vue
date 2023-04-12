<template>
  <div class="flex flex-col justify-start items-center w-screen h-screen bg-base-200">
    <Header />
    <div class="flex flex-row justify-start items-center w-full h-full">
      <SideDrawer />
      <div class="flex flex-col justify-start items-start p-4 w-full h-full content">
        <h1>Admin Area</h1>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/admin/ui/Header.vue'
import SideDrawer from '@/components/admin/ui/SideDrawer.vue'
</script>

<style></style>
