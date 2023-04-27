<template>
  <select class="select w-full max-w-xs mr-4" v-model="selectedLayout">
    <option v-for="layout in layouts" :value="layout.id">
      {{ layout.name }}
    </option>
    <option disabled selected value="0">Pick a Layout</option>
  </select>
</template>

<script setup>
import { ref, watch, defineEmits } from 'vue'

const emit = defineEmits(['newLayout'])

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

const selectedLayout = ref(0)
watch(selectedLayout, (newLayout) => {
  if (newLayout > 0) {
    emit('newLayout', { layout: layouts.value[newLayout - 1] })
  }
})

</script>
