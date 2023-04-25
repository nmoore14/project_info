<template>
  <div>
    <h1>Layouts</h1>
    <div class="overflow-x-auto w-full">
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
          <tr v-for="(layout, index) in layouts">
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div>
                  <div class="font-bold">{{ layout.name }}</div>
                </div>
              </div>
            </td>
            <td>
              {{ layout.description }}
            </td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
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
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const layouts = ref(null)
  const API_BASE = "http://localhost:8080/api"

  fetch(`${API_BASE}/layouts`)
    .then(response => response.json())
    .then((data) => {
      layouts.value = data
    })
    .catch((err) => {
      console.error(err)
    })
    .finally(() => {
      console.log(layouts.value)
    })

  
</script>
