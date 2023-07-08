<script setup>
  import { onMounted, ref } from 'vue'
  import '../assets/js/pannellum.js'
  import '../assets/css/pannellum.css'

  const root = ref(null)

  const props = defineProps({
    data: { type: Object, required: true }
  })

  const srcOptions = () => {
    const options = {}
    options.default = {
      firstScene: 's' + props.data.scenes[0]['scene'],
      autoLoad: true,
      // preview: '/img/sgurudeva.jpg',
      sceneFadeDuration: 1000
    }
    const scenes = {}
    props.data.scenes.forEach(scene => {
      const sceneData = {
        title: props.data.label + ' &bull; ' + scene.scene,
        hfov: scene.hfov,
        pitch: scene.pitch,
        yaw: scene.yaw,
        type: 'equirectangular',
        panorama: '/img/pano/' + scene.file + '.jpg'
      }
      const hotSpots = []
      scene.hotspots.forEach(hs => {
        hotSpots.push({
            pitch: hs.pitch,
            yaw: hs.yaw,
            targetPitch: hs.target_pitch,
            targetYaw: hs.target_yaw,
            type: 'scene',
            text: 'Scene ' + hs.target,
            sceneId: 's' + hs.target,
            cssClass: 'hotSpot'
        })
      })

      sceneData.hotSpots = hotSpots

      scenes['s' + scene.scene] = sceneData
    })
    options.scenes = scenes
    return options
  }

  onMounted(() => {
    const viewer = window.pannellum.viewer(root.value, srcOptions())
    viewer.on('load', () => {
      console.log('pano loaded')
    })
    viewer.on('error', (err) => {
      console.error(err)
    })
  })
</script>

<template>
  <div ref="root" class="absolute h-full w-full object-cover"></div>
</template>

<style scoped>
</style>