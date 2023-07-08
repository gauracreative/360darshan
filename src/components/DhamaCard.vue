<template>
  <a :href="'/' + data.slug" class="border rounded-xl my-8 w-full hover:bg-gray-100">
    <h3 class="my-4 text-2xl text-center font-semibold">{{ data.label }} ({{ data.places.length }})</h3>
    <slot />
  </a>
</template>

<script setup>
  defineProps({
    data: { type: Object, required: true }
  })
</script>

<style scoped></style>
