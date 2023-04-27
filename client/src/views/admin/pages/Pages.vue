<template>
  <div class="flex flex-col justify-start w-full h-full">
    <h1>Pages</h1>
    <div class="overflow-x-auto w-full">
      <template v-if="!pageLoadFail">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Title</th>
              <th>Description</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(page, index) in pages">
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div>
                    <div class="font-bold">{{ page.title }}</div>
                  </div>
                </div>
              </td>
              <td>
                {{ page.description }}
              </td>
              <th>
                <router-link :to="`/admin/pageEditor/${page.id}`" class="btn btn-ghost btn-xs">Edit</router-link>
              </th>
            </tr>
          </tbody>
          <!-- foot -->
          <tfoot>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </template>
      <template v-else>
        <div class="alert shadow-lg">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <span>No Pages Available!</span>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const pages = ref(null)
  const API_BASE = "http://localhost:8080/api"

  const pageLoadFail = ref(true)

  fetch(`${API_BASE}/pages`)
    .then(response => response.json())
    .then((data) => {
      pages.value = data
      pageLoadFail.value = data.length > 0 ? false : true
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      console.log(pages.value)
    })
</script>
