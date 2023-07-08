<script setup>
  import { ref } from 'vue'
  import DhamaCard from '../components/DhamaCard.vue'
  import BreadCrumbs from '../components/BreadCrumbs.vue'
  import data from '../data/data.json'

  const crumbs = ref([
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Dhamas'
    }
  ])
</script>

<template>
  <main class="pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg pb-8">
        <BreadCrumbs :items="crumbs" />
        <div class="flex flex-col px-12">
          <div class="row">
            <DhamaCard :data="data.vrindavan">
              Delve into the divine allure of Sri Vrindavan, the birthplace of Sri Krishna. Explore its sacred temples, lush groves, and immerse yourself in the vibrant festivities that celebrate the eternal love of Sri Sri Radha and Krishna.
            </DhamaCard>
            <DhamaCard :data="data.govardhan">
              Discover the mystical charm of Sri Govardhan, a sacred town associated with Sri Krishna's divine pastimes. Witness the awe-inspiring Govardhan Hill and visit the temples that echo with devotion.
            </DhamaCard>
            <DhamaCard :data="data.navadvipa">
              Step into the spiritual realm of Sri Navadvipa, the holy abode of Sri Chaitanya Mahaprabhu, the incarnation of Sri Krishna. Explore the sacred sites, immerse in the ecstatic kirtans (devotional chants), and experience the fervor of Gaudiya Vaishnavism.
            </DhamaCard>
          </div>
          <div class="row">
            <DhamaCard :data="data.ekachakra">
              Uncover the divine mysteries of Sri Ekachakra, the birthplace of Sri Nityananda Prabhu, the eternal associate of Sri Gauranga Mahaprabhu. Discover the ancient temples, immerse in the holy atmosphere, and experience the spiritual bliss that surrounds this sacred town.
            </DhamaCard>
            <DhamaCard :data="data.ambikaKalna">
              Immerse yourself in the tranquil beauty of Ambika Kalna, a town known for its ornate terracotta temples. Marvel at the exquisite architecture, intricate carvings, and the sacredness that permeates the air.
            </DhamaCard>
            <DhamaCard :data="data.kattwa">
              Experience the divine charm of Kattwa, a town renowned for its association with Sri Chaitanya Mahaprabhu and his devotees. Explore the ancient temples, participate in soul-stirring kirtans, and immerse yourself in the devotional fervor that resonates through the streets.
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