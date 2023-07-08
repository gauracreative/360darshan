<template>
  <a class="text-blue-400" :href="url">{{ data.label }}</a>
</template>

<script setup>
import { computed } from 'vue'
  const props = defineProps({
    data: { type: Object, required: true },
    vr: { type: Boolean, default: false }
  })

  const url = computed(() => {
    return props.vr ? '/vr/of/' + props.data.slug : '/of/' + props.data.slug;
  })
</script>

<style scoped></style>
