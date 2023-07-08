<script setup>
  import BreadCrumbs from '../components/BreadCrumbs.vue'
  import PanoVr from '../components/PanoVr.vue'
  import {useRoute} from 'vue-router'
  import {darshanBySlug} from '../data/data.js'
  import { ref } from 'vue'
  const route = useRoute()
  const slug = route.params.slug
  const place = ref(darshanBySlug(slug))
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
</script>
<template>
  <main class="pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg pb-8">
        <BreadCrumbs :items="crumbs" />
        <div class="-mt-6 relative w-full aspect-video">
          <PanoVr :data="place" />
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
