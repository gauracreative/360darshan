<template>
  <ul id="tab-nav" class="flex border-b px-12 text-blue-600 hover:text-blue-700">
    <template v-for="t in items" :key="t.target">
    <li class="mr-1" :class="tab == t.target ? '-mb-px' : ''">
        <div class="tab" @click="{$emit('tabChange', t.target); tab = t.target}" :class="tab == t.target ? 'tab-active' : ''" v-html="t.label"></div>
    </li>
    </template>
  </ul>
</template>

<script setup>
  import { ref, onMounted } from 'vue'  
  const props = defineProps({
    items: { type: Object, required: true },
    defaultTab: { type: String, default: 'pano' }
  })
  let tab = ref(props.defaultTab)

</script>

<style scoped>
  .tab {
    @apply bg-white inline-block py-2 px-4 cursor-pointer;
  }
  .tab-active {
    @apply border-l border-t border-r rounded-t font-semibold;
  }
</style>
