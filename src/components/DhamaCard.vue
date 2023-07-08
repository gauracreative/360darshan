<template>
  <a :href="'/' + data.slug" class="flex flex-col space-y-2 px-8 py-5 border rounded-xl my-8 w-full hover:bg-gray-100">
    <h3 class="my-1 text-2xl text-center font-semibold">{{ data.label }}</h3>
    <p class="text-sm text-gray-700 indent-3 flex-1"><slot /></p>
    <p class="text-center text-blue-700 italic flex-none"><strong>{{ data.places.length }}</strong> virtual darshans included</p>
  </a>
</template>

<script setup>
  defineProps({
    data: { type: Object, required: true }
  })
</script>

<style scoped></style>
