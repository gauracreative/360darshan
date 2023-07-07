<template>
  <div class="absolute h-full w-full object-cover"></div>
</template>

<script>
  import '../assets/js/pannellum.js'
  import '../assets/css/pannellum.css'

  export default {
    props: {
      data: { type: Object, required: true }
    },
    computed: {
      // eslint-disable-next-line vue/return-in-computed-property
      srcOption () {
        const options = {}
        options.default = {
          firstScene: 's' + this.data.scenes[0].scene,
          autoLoad: true,
          // preview: '/img/sgurudeva.jpg',
          sceneFadeDuration: 1000
        }
        const scenes = {}
        this.data.scenes.forEach(scene => {
          const sceneData = {
            title: this.data.label + ' &bull; ' + scene.scene,
            hfov: 110,
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
        // console.log(options)
          
        return options
      }
    },
    mounted () {
      const viewer = window.pannellum.viewer(this.$el, this.srcOption)
      viewer.on('load', () => {
        console.log('pano loaded')
      })
      viewer.on('error', (err) => {
        console.error(err)
      })
    }
  }
</script>

<style scoped>
</style>