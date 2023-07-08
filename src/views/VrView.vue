<script setup>
  import { ref } from 'vue'
  import _ from 'lodash'
  import {data} from '../data/data.js'
  import AllTabVr from '../components/AllTabVr.vue'
  import BreadCrumbs from '../components/BreadCrumbs.vue'
  import Tabs from '../components/Tabs.vue'
    // console.log(data)
  const crumbs = ref([
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Virtual Reality (viewing the content in VR headset)'
    }
  ])

  const dhamKeys = ref(['vrindavan', 'govardhan', 'navadvipa', 'ekachakra', 'ambikaKalna', 'kattwa'])

  let tabs = [
    {
      label: 'How it works in VR',
      target: 'intro'
    }
  ]
  _.each(dhamKeys.value, key => {
    tabs.push({
      label: data[key]['label'],
      target: key
    })
  })
  tabs = ref(tabs)
  const tab = ref('intro')
</script>

<template>
  <main class="pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg pb-8">
        <BreadCrumbs :items="crumbs" />
        <div class="h-2 my-2" />
        <Tabs :items="tabs" defaultTab="intro" @tabChange="(newTab) => tab = newTab"/>
        <div class="tabs py-4 flex flex-col space-y-2 px-8" :class="tab == 'intro' ? '' : 'hidden'" id="intro">
            <p class="py-4 px-6 border-2 rounded-lg border-red-200 bg-red-100 text-xl text-fancy text-indigo-700 my-4 text-red-600">
                For a complete and immersive experience, a <a class="text-indigo-700" target="_blank" title="VR headset" href="https://www.oculus.com/">VR headset</a> is required. However, if you are accessing the content using a PC or phone with a regular 2D browser, you may enjoy it more through the <a class="text-indigo-700" href="/" title="360darshan.com">main page</a>.
            </p>
            <p>
                Tested with Meta Quest 2. It should work with Oculus Quest, Meta Quest Pro, Oculus Rift and Oculus Rift S, although not tested. An attempt has been made to support Vive headsets (based on coding documentation), but, again, not tested since I don't have those headsets. If you are using any of the other headsets (besides Quest 2) or any headsets at all please let me know how it works for you. I'll appreciate a feedback, and that should help me improve the app.
            </p>
            <h3 class="text-2xl font-semibold py-8 text-center">Opening it in VR: A Step-by-Step Guide</h3>
            <p class="py-4 px-6 border-2 rounded-lg border-green-200 bg-green-100 text-xl text-indigo-700 text-fancy mb-4">
                <span class="font-semibold text-red-600">Update from July 4th, 2023:</span> Discover <a class="font-semibold" href="/meta-quest-app">Meta Quest App</a>. You can bypass the following steps entirely!
            </p>
            <ol class="flex flex-col pt-3 pl-2 sm:pl-12 space-y-3 text-lg italic list-decimal">
                <li>Wear your virtual reality (VR) headset.</li>
                <li>Access the browser on your headset, such as the <b>Meta Quest Browser</b> on <b>Meta Quest 2</b>.</li>
                <li>Navigate to the website <b>vr.360darshan.com</b> (you can bookmark it for easier future access).</li>
                <li>Within the browser, open a tab of your preference, such as <b>Sri Vrindavan</b> or <b>Sri Govardhan</b> (see above).</li>
                <li>Choose a specific holy place within the selected tab.</li>
                <li>Locate the "VR" button located at the bottom-right corner of the screen.</li>
                <li>Click on the "VR" button to initiate the virtual reality experience.</li>
            </ol>
            <h3 class="text-2xl font-semibold py-8 text-center">Exploring the Virtual Reality Environment</h3>
            <table class="dataTable table-auto w-full">
                <thead>
                <tr>
                    <th class="w-48">Button</th>
                    <th>Function</th>
                    <th>Note</th>
                </tr>
                </thead>
                <tbody>
                <tr class="text-gray-700 text-center">
                    <td>Trigger button</td>
                    <td>Next viewing position</td>
                    <td class="italic text-gray-400">Some virtual tours have a single viewing position</td>
                </tr>
                <tr class="text-gray-700 text-center">
                    <td>B-button or Y-button</td>
                    <td>Score up Japa</td>
                    <td class="italic text-gray-400">Yes, you can chant there, and the VR will even count rounds for you</td>
                </tr>
                <tr class="text-gray-700 text-center">
                    <td>Grip button or A-button or X-button</td>
                    <td>Back to browser menu</td>
                    <td class="italic text-gray-400">where you can select next darshan</td>
                </tr>
                </tbody>
            </table>
            <img class="object-contain h-80" src="/img/quest-buttons.png" alt="" />
        </div>
        <div class="tabs flex flex-col px-8" :class="tab == slug ? '' : 'hidden'" :id="slug" v-for="slug in dhamKeys">
          <AllTabVr :slug="slug" />
        </div>
      </div>
    </div>
  </main>
</template>
