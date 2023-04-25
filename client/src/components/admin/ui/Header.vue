<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">prjkt{Info}</a>
      <div class="text-xs breadcrumbs">
        <ul>
          <li><a>Home</a></li>
          <li><a>Documents</a></li>
          <li>Add Document</li>
        </ul>
      </div>
    </div>
    <div class="flex-none gap-2" v-if="userAuth">
      <div class="form-control">
        <input type="text" placeholder="Search" class="input input-bordered" />
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full">
            <img :src="user.picture" />
          </div>
        </label>
        <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <li>
            <a class="justify-between">
              Profile
              <span class="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a @click="logout">Logout</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()
const { isAuthenticated, user } = storeToRefs(userStore)

const userAuth = computed(() => isAuthenticated.value)
const logout = () => {
  userStore.logout()
}

</script>
