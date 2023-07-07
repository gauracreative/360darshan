<script>
  import { ref } from 'vue'

  const src = ref('/audio/rdamodar02.mp3')

</script>

<template>
  <audio id="player">
      <source v-bind:src="src" type="audio/mpeg">
      Your browser does not support the audio element.
  </audio>
</template>

<style scoped>
</style>