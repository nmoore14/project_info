<template>
  <div class="flex flex-col justify-start w-full h-full">
    <div class="flex flex-row mb-4 justify-between items-center page-details">
      <div class="flex flex-row justify-start items-center page-title">
        <h1 id="page-title" class="font-mono text-3xl mr-2" contenteditable="true" ref="pageTitle">{{ newPageTitle }}</h1>
        <i class="pi pi-pencil"></i>
      </div>
      <div class="flex flex-row justify-end items-center page-buttons">
        <button class="mr-2 btn btn-primary">Edit Style</button>
        <button class="btn btn-accent" @click="savePage">{{ saveBtnText }}</button>
      </div>
    </div>
    <div id="gjs"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import grapesjs from 'grapesjs'
import 'grapesjs/dist/css/grapes.min.css'
import plugin from 'grapesjs-blocks-basic'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const route = useRoute()

let editor = ref(null)
const saveBtnText = ref('Create')

const pageTitle = ref(null)
const newPageTitle = ref('New Page')
const pageContent = ref(null)
const API_BASE = "http://localhost:8080/api"

onMounted(() => {
  editor = grapesjs.init({
    container: '#gjs',
    height: '900px',
    width: '100%',
    plugins: [plugin],
    storageManager: {
      id: 'gjs-',
      type: 'local',
      autosave: true,
      storeComponents: true,
      storeStyles: true,
      storeHtml: true,
      storeCss: true,
    },
    deviceManager: {
      devices:
      [
        {
          id: 'desktop',
          name: 'Desktop',
          width: '',
        },
        {
          id: 'tablet',
          name: 'Tablet',
          width: '768px',
          widthMedia: '992px',
        },
        {
          id: 'mobilePortrait',
          name: 'Mobile portrait',
          width: '320px',
          widthMedia: '575px',
        },
      ]
    },
  })

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
        newPageTitle.value = pageContent.value.title
        editor.setStyle(pageContent.value.style)
        editor.setComponents(pageContent.value.content)
      })
  }
})

const savePage = () => { 
  const pageData = {
    title: pageTitle.value.innerText,
    description: '',
    content: editor.getHtml(),
    style: editor.getCss(),
  }

  const reqOpts = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pageData)
  }

  console.log(reqOpts)

  fetch(`${API_BASE}/pages/${route.params.id}`, reqOpts)
  .then(response => response.json())
  .then((data) => {
      console.log('Page Saved')
  })
  .catch((e) => {
    console.log(e)
  })
}

</script>

<style>
.ql-container {
  width: 100%;
}
</style>
