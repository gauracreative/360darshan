<script setup>
  import Pano from '../components/Pano.vue'
  import DetailsTab from '../components/DetailsTab.vue'
  import {useRoute} from 'vue-router'
  import {darshanBySlug} from '../data/data.js'
  import { ref } from 'vue'
  const route = useRoute()
  const slug = route.params.slug
  const place = ref(darshanBySlug(slug))
  const tab = ref('pano')
</script>
<template>
  <main class="pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg pb-8">
        <ul id="breadcrumbs" class="hidden sm:flex flex-row rounded-lg rounded-b-none mb-6">
          <li class="bg-green-100">
              <a href="/" title="Home">India</a>
          </li>
          <li class="bg-green-200">
              <a :href="'/' + place.dhama.slug" title="{{ place.dhama.label }}">{{ place.dhama.label }}</a>
          </li>
          <li class="flex-grow rounded-md rounded-l-none rounded-b-none bg-green-300">
              <h1>Sri {{ place.label }}</h1>
          </li>
        </ul>
        <ul id="tab-nav" class="flex border-b px-12 text-blue-600 hover:text-blue-700">
          <li class="mr-1" :class="tab == 'pano' ? '-mb-px' : ''">
              <div class="tab" :class="tab == 'pano' ? 'tab-active' : ''" @click="tab = 'pano'">Virtual Darshan</div>
          </li>
          <li class="mr-1" :class="tab == 'details' ? '-mb-px' : ''">
              <div class="tab" :class="tab == 'details' ? 'tab-active' : ''" @click="tab = 'details'">
                  Details &amp; 
                  <svg class="inline-block w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
                  </svg>
              </div>
          </li>
          <li class="mr-1" :class="tab == 'all' ? '-mb-px' : ''">
              <div class="tab" :class="tab == 'all' ? 'tab-active' : ''" @click="tab = 'all'">All in {{ place.dhama.label }}</div>
          </li>
        </ul>
        <div class="tabs relative pt-5 w-full aspect-video" :class="tab == 'pano' ? '' : 'hidden'">
            <Pano :data="place" class="absolute h-full w-full object-cover" />
        </div>
        <div class="tabs flex flex-col px-8" :class="tab == 'details' ? '' : 'hidden'">
          <DetailsTab :data="place" />
        </div>
        <div class="tabs flex flex-col px-8" :class="tab == 'all' ? '' : 'hidden'">
            all places will be here
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .row {
    @apply flex space-x-4;
  }
  #breadcrumbs li {
    font-family: 'BacasimeAntique';
    color: #9a5642;
    font-weight: 400;
    @apply text-xl py-1 px-5;
  }
  .tab {
    @apply bg-white inline-block py-2 px-4 cursor-pointer;
  }
  .tab-active {
    @apply border-l border-t border-r rounded-t font-semibold;
  }
</style>
