<template>
  <div class="flex flex-col justify-start w-full h-full">
    <div class="flex flex-row mb-4 justify-between items-center page-details">
      <div class="flex flex-row justify-start items-center page-title">
        <h1 id="page-title" class="font-mono text-3xl mr-2" contenteditable="true">{{ pageTitle }}</h1>
        <i class="pi pi-pencil"></i>
      </div>
      <div class="flex flex-row justify-end items-center page-buttons">
        <button class="mr-2 btn btn-primary">Edit Style</button>
        <button class="btn btn-accent">{{ saveBtnText }}</button>
      </div>
    </div>
    <QuillEditor theme="snow" toolbar="full" :modules="modules" ref="quill"/>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { QuillEditor } from '@vueup/vue-quill'
import htmlEditButton from 'quill-html-edit-button'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const route = useRoute()

const modules = ref({
  name: 'htmlEditButton',
  module: htmlEditButton,
  options: {}
})

const quill = ref(null)
const saveBtnText = ref('Create')

const pageTitle = ref('New Page')
const pageContent = ref(null)
const API_BASE = "http://localhost:8080/api"

onMounted(() => {
  if (route.params.id) {
    saveBtnText.value = 'Save'
    fetch(`${API_BASE}/pages/${route.params.id}`)
      .then(response => response.json())
      .then((data) => {
        pageContent.value = data
      })
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {
        console.log(pageContent.value)
        pageTitle.value = pageContent.value.title
        quill.value.pasteHTML(pageContent.value.content, 'api')
      })
  }
})

</script>

<style>
.ql-container {
  width: 100%;
}
</style>
