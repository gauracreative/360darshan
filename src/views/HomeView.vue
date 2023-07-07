<script setup>
import DhamaDarshans from '../components/DhamaDarshans.vue'
import {data} from '../data/data.js'
import { ref } from 'vue'

const row1 = ref([data.vrindavan, data.govardhan, data.navadvipa])
const row2 = ref([data.ekachakra, data.ambikaKalna, data.kattwa])
</script>

<template>
  <main class="pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg pb-8 px-12">
        <div class="flex flex-col">
          <div class="row">
            <DhamaDarshans v-for="d in row1" :data="d" />
          </div>
          <div class="row">
            <DhamaDarshans v-for="d in row2" :data="d" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .row {
    @apply flex flex-col sm:flex-row sm:space-x-4 sm:justify-between;
  }
</style>