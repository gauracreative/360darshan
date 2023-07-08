<template>
  <a class="text-blue-400" :href="'/of/' + data.slug">{{ data.label }}</a>
</template>

<script setup>
  defineProps({
    data: { type: Object, required: true }
  })
</script>

<style scoped></style>
