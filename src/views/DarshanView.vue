<script setup>
  import BreadCrumbs from '../components/BreadCrumbs.vue'
  import Tabs from '../components/Tabs.vue'
  import Pano from '../components/Pano.vue'
  import DetailsTab from '../components/DetailsTab.vue'
  import AllTab from '../components/AllTab.vue'
  import {useRoute} from 'vue-router'
  import {darshanBySlug} from '../data/data.js'
  import { ref, provide } from 'vue'
  const route = useRoute()
  const slug = route.params.slug
  const place = ref(darshanBySlug(slug))
  provide('data', place)
  const tab = ref('pano')
  const crumbs = ref([
    {
      label: 'India',
      link: '/'
    },
    {
      label: place.value.dhama.label,
      link: '/' + place.value.dhama.slug,
    },
    {
      label: 'Sri ' + place.value.label
    }
  ])
  const tabs = ref([
    {
      label: 'Virtual Darshan',
      target: 'pano'
    },
    {
      label: 'Details &amp; <svg class="inline-block w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" /></svg>',
      target: 'details',
    },
    {
      label: 'All in ' + place.value.dhama.label,
      target: 'all'
    }
  ])
</script>
<template>
  <main class="pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg pb-8">
        <BreadCrumbs :items="crumbs" />
        <Tabs :items="tabs" defaultTab="pano" @tabChange="(newTab) => tab = newTab"/>
        <div class="tabs relative pt-5 w-full aspect-video" :class="tab == 'pano' ? '' : 'hidden'">
            <Pano />
        </div>
        <div class="tabs flex flex-col px-8" :class="tab == 'details' ? '' : 'hidden'">
          <DetailsTab />
        </div>
        <div class="tabs flex flex-col px-8" :class="tab == 'all' ? '' : 'hidden'">
            <AllTab />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .row {
    @apply flex space-x-4;
  }
</style>
