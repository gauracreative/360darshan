<template>
  <div class="my-8 w-full">
    <a :href="'/' + data.slug" title="{{ data.label }}"><h3 class="my-4 text-2xl text-center font-semibold">{{ data.label }} ({{ data.places.length }})</h3></a>
    <div v-if="data.places" class="flex flex-col space-y-1">
      <DarshanItem v-for="place in data.places" :key="place.file" :data="place" />
    </div>
  </div>
</template>

<script setup>
  import DarshanItem from './DarshanItem.vue'

  defineProps({
    data: { type: Object, required: true }
  })
</script>

<style scoped></style>
