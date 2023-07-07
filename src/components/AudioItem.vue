<template>
  <li class="audioBtn flex space-x-2">
    <svg class="inline-block w-5 h-5 fill-current text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
    </svg>
    <button @click="audioSelected" type="button" class="px-4 py-2" data-file="{{ data.file }}">{{ data.label }}</button>
  </li>
</template>

<script setup>
  defineProps({
    data: { type: Object, required: true },
    player: { type: Object, required: true },
    playing: { type: String, required: true, default: 'paused' },
  })

  function audioSelected() {
    if (this.data.file == this.playing) {
        this.player.pause()
        this.playing = 'paused'
        $el.removeClass('font-bold')
    } else {
        let src = '/audio/FILE.mp3'.replace('FILE', this.data.file)
        document.querySelector('#player source').attr('src', src)
        this.player.load()
        this.player.play()
        this.playing = this.data.file
        document.querySelectorAll('.audioBtn button').removeClass('font-bold')
        $el.addClass('font-bold')
    }
  }
</script>

<style scoped>

</style>
