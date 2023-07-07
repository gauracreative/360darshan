<script setup>
import {useRoute} from 'vue-router'
import { ref } from 'vue'
import {dhamaBySlug} from '../data/data.js'
const route = useRoute()
const slug = route.params.slug
const dhama = ref(dhamaBySlug(slug))
</script>

<template>
  <main class="pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg pb-8 px-12">
        <h3 class="my-4 text-2xl text-center font-semibold">{{ dhama.label }} ({{ dhama.places.length }})</h3>
        List 3 columns or so
      </div>
    </div>
  </main>
</template>
