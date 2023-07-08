<script setup>
  import { inject } from 'vue'

  const data = inject('data')
</script>

<template>
  <div class="flex flex-col sm:flex-row my-3 py-4 border-b space-x-8">
      <div class="hidden sm:flex flex-none px-4">
          <img class="object-contain place-self-start" src="/img/logo.jpg" alt="360darshan.com" />
      </div>
      <div class="flex flex-col space-y-3 text-lg mt-3">
          <div class="flex space-x-2">
              <svg class="inline-block w-6 h-6 fill-current text-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
              </svg>
              <div><span class="font-semibold">Photographs taken on</span> {{ data.time }}</div>
          </div>
          <div class="flex space-x-2">
              <svg class="inline-block w-6 h-6 fill-current text-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
              </svg>
              <div><span class="font-semibold">Scenes:</span> {{ data.scenes.length }}</div>
          </div>
          <div class="flex space-x-2">
              <svg class="inline-block w-6 h-6 fill-current text-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
              <div>Read about <a class="font-semibold text-indigo-700" :href="'/books/' + data.book" title="read about {{ data.label }}" target="_blank">{{data.label }}</a></div>
          </div>
      </div>
  </div>
</template>

<style scoped>
</style>