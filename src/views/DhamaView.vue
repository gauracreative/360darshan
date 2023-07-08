<script setup>
import {useRoute} from 'vue-router'
import { ref } from 'vue'
import {dhamaBySlugChunked} from '../data/data.js'
import DarshanItem from '../components/DarshanItem.vue'
import BreadCrumbs from '../components/BreadCrumbs.vue'
const route = useRoute()
const data = ref(dhamaBySlugChunked(route.params.slug, 3))
  // console.log(data)
const crumbs = ref([
    {
      label: 'India',
      link: '/'
    },
    {
      label: data.value.label
    }
  ])
</script>

<template>
  <main class="pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg pb-8">
        <BreadCrumbs :items="crumbs" />
        <div class="flex flex-col px-12">
          <h3 class="my-4 text-2xl text-center font-semibold">
            Available darshans in {{ data.label }}
          </h3>
          <div class="flex flex-col sm:flex-row space-x-2">
            <template v-for="col in data.places">
              <div class="w-full sm:w-1/3">
                <ul class="flex flex-col space-y-2 my-4 text-blue-700">
                  <DarshanItem v-for="d in col" :key="d.slug" :data="d" />
                </ul>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
