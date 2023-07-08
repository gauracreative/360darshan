<template>
  <ul v-if="items.length == 3" id="breadcrumbs" class="hidden sm:flex flex-row rounded-lg rounded-b-none mb-6">
    <li class="bg-green-100">
        <a :href="items[0]['link']" :title="items[0]['label']" :text="items[0]['label']"></a>
    </li>
    <li class="bg-green-200">
        <a :href="items[1]['link']" title="{{ items[1]['label'] }}">{{ items[1]['label'] }}</a>
    </li>
    <li class="flex-grow rounded-md rounded-l-none rounded-b-none bg-green-300">
        <h1>{{ items[2]['label'] }}</h1>
    </li>
  </ul>
  <ul v-else id="breadcrumbs" class="hidden sm:flex flex-row rounded-lg rounded-b-none">
      <li class="bg-green-100">
          <a :href="items[0]['link']" :title="items[0]['label']" :text="items[0]['label']">Home</a>
      </li>
      <li class="flex-grow rounded-md rounded-l-none rounded-b-none bg-green-300">
          <h1>{{ items[1]['label'] }}</h1>
      </li>
  </ul>
</template>

<script setup>  
  defineProps({
    items: { type: Object, required: true }
  })
</script>

<style scoped>
  #breadcrumbs li {
    font-family: 'BacasimeAntique';
    color: #9a5642;
    font-weight: 400;
    @apply text-xl py-1 px-5;
  }
</style>
