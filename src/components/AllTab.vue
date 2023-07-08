<script setup>
  import { inject } from 'vue'
  import DarshanItem from './DarshanItem.vue'
  import {dhamaBySlugChunked} from '../data/data.js'

  let data = inject('data')
  data = dhamaBySlugChunked(data.value.dhama.slug, 3)
  console.log(data)
</script>

<template>
  <h2 class="text-2xl font-bold my-4 text-center">Available darshans in {{ data.label }}</h2>
  <div class="flex flex-col sm:flex-row space-x-2">
      <template v-for="col in data.places">
        <div class="w-full sm:w-1/3">
          <ul class="flex flex-col space-y-2 my-4 text-blue-700">
            <DarshanItem v-for="d in col" :key="d.slug" :data="d" />
          </ul>
        </div>
      </template>
  </div>
</template>

<style scoped>
</style>