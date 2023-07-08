<script setup>
  import _ from 'lodash'
  import DarshanItem from './DarshanItem.vue'
  import {dhamaByKeyChunked} from '../data/data.js'

  const props = defineProps({
    slug: String
  })
  const data = dhamaByKeyChunked(props.slug, 3)
  // console.log(data)
</script>

<template>
  <h2 class="text-2xl font-bold my-4 text-center">Available darshans in {{ data.label }}</h2>
  <div class="flex flex-col sm:flex-row space-x-2">
      <template v-for="col in data.places">
        <div class="w-full sm:w-1/3">
          <ul class="flex flex-col space-y-2 my-4 text-blue-700">
            <DarshanItem v-for="d in col" :key="d.slug" :data="d" vr="true" />
          </ul>
        </div>
      </template>
  </div>
</template>

<style scoped>
</style>