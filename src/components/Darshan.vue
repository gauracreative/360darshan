<script setup>
  import Pano from './Pano.vue'
  import AudioItem from './AudioItem.vue'
  import {useRoute} from 'vue-router'
  import {darshanBySlug, chunkedAudio} from '../data/data.js'
  import { ref } from 'vue'
  const route = useRoute()
  const slug = route.params.slug
  const place = ref(darshanBySlug(slug))
  const tab = ref('pano')
  let player = ref(document.getElementById('player'));
  let playing = ref('paused');
</script>

<template>
  <ul id="breadcrumbs" class="hidden sm:flex flex-row rounded-lg rounded-b-none mb-6">
      <li class="bg-green-100">
          <a href="/" title="Home">India</a>
      </li>
      <li class="bg-green-200">
          <a :href="'/' + place.dhama.slug" title="{{ place.dhama.label }}">{{ place.dhama.label }}</a>
      </li>
      <li class="flex-grow rounded-md rounded-l-none rounded-b-none bg-green-300">
          <h1>Sri {{ place.label }}</h1>
      </li>
  </ul>
  <ul id="tab-nav" class="flex border-b px-12 text-blue-600 hover:text-blue-700">
      <li class="mr-1" :class="tab == 'pano' ? '-mb-px' : ''">
          <div class="tab" :class="tab == 'pano' ? 'tab-active' : ''" @click="tab = 'pano'">Virtual Darshan</div>
      </li>
      <li class="mr-1" :class="tab == 'details' ? '-mb-px' : ''">
          <div class="tab" :class="tab == 'details' ? 'tab-active' : ''" @click="tab = 'details'">
              Details &amp; 
              <svg class="inline-block w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
              </svg>
          </div>
      </li>
  </ul>
  <div class="tabs relative pt-5 w-full aspect-video" :class="tab == 'pano' ? '' : 'hidden'">
      <Pano :data="place" class="absolute h-full w-full object-cover" />
  </div>
  <div class="tabs flex flex-col px-8" :class="tab == 'details' ? '' : 'hidden'">
    <div class="flex flex-col sm:flex-row my-3 py-4 border-b space-x-8">
        <div class="hidden sm:flex flex-none px-4">
            <img class="object-contain place-self-start" src="/img/logo.jpg" alt="360darshan.com" />
        </div>
        <div class="flex flex-col space-y-3 text-lg mt-3">
            <div class="flex space-x-2">
                <svg class="inline-block w-6 h-6 fill-current text-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
                <div><span class="font-semibold">Photographs taken on</span> {{ place.time }}</div>
            </div>
            <div class="flex space-x-2">
                <svg class="inline-block w-6 h-6 fill-current text-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                </svg>
                <div><span class="font-semibold">Scenes:</span> {{ place.scenes.length }}</div>
            </div>
            <div class="flex space-x-2">
                <svg class="inline-block w-6 h-6 fill-current text-green-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
                <div>Read about <a class="font-semibold text-indigo-700" :href="'http://issuu.com/360darshan.com/docs/' + place.book + '?mode=window&viewMode=singlePage'" title="read about Sri {{ place.label }}" target="_blank">Sri {{place.label }}</a></div>
            </div>
        </div>
    </div>
    <div v-if="place.audio" class="flex flex-col sm:flex-row space-x-2">
        <template v-for="col in chunkedAudio()">
          <div class="w-full sm:w-1/3">
            <audio id="player">
                <source src="/audio/rdamodar02.mp3" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
            <ul class="flex flex-col space-y-2 my-4 text-blue-700">
              <template v-for="audio in col" v-bind:key="audio.file">
                <AudioItem :data="audio" :playing="playing" :player="player" />
              </template>
            </ul>
          </div>
        </template>
    </div>
</div>
</template>

<style scoped>
  .row {
    @apply flex space-x-4;
  }
  #breadcrumbs li {
    font-family: 'BacasimeAntique';
    color: #9a5642;
    font-weight: 400;
    @apply text-xl py-1 px-5;
  }
  .tab {
    @apply bg-white inline-block py-2 px-4 cursor-pointer;
  }
  .tab-active {
    @apply border-l border-t border-r rounded-t font-semibold;
  }
</style>