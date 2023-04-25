<template>
  <div>
    <h1>Home</h1>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const test = ref(null)
  const API_BASE = "http://localhost:8080"

  fetch(`${API_BASE}/test`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      test.value = data
      console.log(test.value.data)
    })

</script>

<style></style>
