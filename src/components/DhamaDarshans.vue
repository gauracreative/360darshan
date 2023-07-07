<template>
  <div class="my-8 w-full">
    <a :href="'/' + data.slug" title="{{ data.label }}"><h3 class="my-4 text-2xl text-center font-semibold">{{ data.label }} ({{ data.places.length }})</h3></a>
    <div v-if="data.places" class="flex flex-col space-y-1">
      <template v-for="place in data.places" :key="place.file">
        <a class="text-blue-400" :href="'/of/' + place.slug">{{ place.label }}</a>
      </template>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    data: { type: Object, required: true }
  })
</script>

<style scoped></style>
