<template>
  <div class="mt-5">
    <label class="text-xl font-semibold mb-2 block" for="email">Your Meta email</label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
        <svg class="w-5 h-5 text-icons" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      </div>
      <input class="border rounded-md pl-8 pr-3 py-1 border-gray-300 bg-gray-100 w-full" type="email" value="" placeholder="required" x-model="email" extra="required" name="email" id="email">
    </div>
    <span class="text-sm text-gray-500">Email address you use to log into your Meta (Facebook) account. *This is important because Meta will only invite excisting users.</span>
  </div>
  <button ref="btn" @click="btnClicked(data.file)" type="button" class="rounded-md px-5 py-3 my-3 text-white text-center bg-indigo-500 font-semibold shadow w-full">
    Get Your Early Access
  </button>
</template>

<script setup>
import { ref } from 'vue'
  const btn = ref(null)
  
  const emit = defineEmits(['audioSelected'])

  const btnClicked = file => {
    let action = 'play'
    if (btn.value.classList.contains('nowPlaying')) {
      btn.value.classList.remove('nowPlaying')
      action = 'pause'
    } else {
      const plBtns = document.querySelectorAll('button.nowPlaying');
      plBtns.forEach((element) => {
        element.classList.remove('nowPlaying')
      })
      btn.value.classList.add('nowPlaying')
    }
    emit('audioSelected', file, action)
  }
</script>

<style scoped>
  .nowPlaying {
    @apply font-bold;
  }
</style>
