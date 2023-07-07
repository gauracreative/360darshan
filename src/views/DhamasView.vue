<script setup>
  import DhamaCard from '../components/DhamaCard.vue'
  import data from '../data/data.json'
</script>

<template>
  <main class="pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg pb-8 px-12">
        <div class="flex flex-col">
          <div class="row">
            <DhamaCard :data="data.vrindavan">
              This is a nice little intro about Sri Vrindavan
            </DhamaCard>
            <DhamaCard :data="data.govardhan">
            </DhamaCard>
            <DhamaCard :data="data.navadvipa">
            </DhamaCard>
          </div>
          <div class="row">
            <DhamaCard :data="data.ekachakra">
            </DhamaCard>
            <DhamaCard :data="data.ambikaKalna">
            </DhamaCard>
            <DhamaCard :data="data.kattwa">
            </DhamaCard>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  .row {
    @apply flex flex-col sm:flex-row sm:space-x-8 sm:justify-between;
  }
</style>