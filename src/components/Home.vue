<script setup>
import DhamaItem from './DhamaItem.vue'
import {data} from '../data/data.js'

// provide('data', data)
</script>

<template>
  <div class="flex flex-col">
    <div class="row">
      <DhamaItem :data="data.vrindavan" />
      <DhamaItem :data="data.govardhan" />
      <DhamaItem :data="data.navadvipa" />
    </div>
    <div class="row">
      <DhamaItem :data="data.ekachakra" />
      <DhamaItem :data="data.ambikaKalna" />
      <DhamaItem :data="data.kattwa" />
    </div>
  </div>
</template>

<style scoped>
  .row {
    @apply flex flex-col sm:flex-row sm:space-x-4 sm:justify-between;
  }
</style>