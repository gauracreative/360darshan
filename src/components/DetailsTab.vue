<script setup>
  import { ref, inject } from 'vue'
  import DetailsCard from './DetailsCard.vue'
  import AudioItem from './AudioItem.vue'
  import {chunkedAudio} from '../data/data.js'

  const player = ref(null)

  const audioSelected = (file, action) => {
    console.log('clicked', file, action)
    if (action == 'pause') {
        player.value.pause()
    } else {
        let src = '/audio/FILE.mp3'.replace('FILE', file)
        // console.log(src, player.value.firstChild)
        player.value.firstChild.setAttribute('src', src)
        player.value.load()
        player.value.play()
    }
  }

  const data = inject('data')
</script>

<template>
  <DetailsCard />
  <div v-if="data.audio" class="flex flex-col sm:flex-row space-x-2">
      <template v-for="col in chunkedAudio()">
        <div class="w-full sm:w-1/3">
          <ul class="flex flex-col space-y-2 my-4 text-blue-700">
            <AudioItem @audioSelected="audioSelected" v-for="audio in col" :key="audio.file" :data="audio" />
          </ul>
        </div>
      </template>
  </div>
  <audio ref="player" class="haha">
      <source src="/audio/rdamodar02.mp3" type="audio/mpeg">
      Your browser does not support the audio element.
  </audio>
</template>

<style scoped>
</style>