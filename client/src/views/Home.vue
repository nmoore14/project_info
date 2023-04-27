<template>
  <div>
    <div class="page-content" v-html="displayContent"></div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const pageContent = ref(null)
  const displayContent = ref(null)
  const API_BASE = "http://localhost:8080"

  fetch(`${API_BASE}/api/pages/1`)
    .then(response => response.json())
    .then((data) => {
      console.log(data)
      pageContent.value = data
    })
    .catch((e) => {
      console.log(e)
    })
    .finally(() => {
      displayContent.value = `<style>${pageContent.value.style}</style>${pageContent.value.content}`
    })
</script>

<style></style>
