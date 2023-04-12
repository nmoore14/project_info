<template>
  <div class="flex flex-col justify-start items-start w-56 h-full px-2 py-4 bg-base-300">
    <div class="flex flex-col w-full">
      <router-link to="/admin/dashboard" class="pl-8 py-2 rounded-md hover:bg-base-100">
        <i class="pi pi-desktop mr-2"></i>
        Dashboard
      </router-link>
      <div class="-ml-6 divider"></div>
      <router-link to="/admin" class="pl-8 py-2 rounded-md hover:bg-base-100">
        <i class="pi pi-file mr-2"></i>
        Pages
      </router-link>
      <router-link to="/admin" class="pl-8 py-2 rounded-md hover:bg-base-100">
        <i class="pi pi-th-large mr-2"></i>
        Layouts
      </router-link>
      <div class="-ml-6 divider"></div>
      <router-link to="/admin/users" class="pl-8 py-2 rounded-md hover:bg-base-100">
        <i class="pi pi-users mr-2"></i>
        Users
      </router-link>
    </div>
    <div class="fixed flex flex-col w-full mb-4 bottom-0">
      <router-link to="/admin" class="pl-8 py-2 rounded-md hover:bg-base-100">
        <i class="pi pi-cog mr-2"></i>
        Settings
      </router-link>
    </div>
  </div>
</template>
