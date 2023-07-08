<script setup>
  import { ref } from 'vue'
  import AppSubscribe from '../components/AppSubscribe.vue'
  import BreadCrumbs from '../components/BreadCrumbs.vue'
  const crumbs = ref([
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Meta Quest App'
    }
  ])
</script>

<template>
  <main class="pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg pb-8">
        <BreadCrumbs :items="crumbs" />
        <div class="py-4 mt-4 flex flex-col space-y-2 px-12">
          <p class="py-4 px-6 border-2 rounded-lg border-green-200 bg-green-100 text-xl text-indigo-700 text-fancy mb-4">
              <span class="font-semibold text-red-600">Calling all devotees</span> with access to a Meta Quest 2 or Meta Quest Pro! You are invited to enjoy a forever-free early access to the upcoming 360darshan Meta Quest App. Immerse yourself in fully immersive VR darshan experiences of over 55 most-cherished holy places within Sri Vrindavan, Sri Govardhan, Sri Navadvip, and other sacred dhamas.
          </p>
          <h3 class="text-2xl font-semibold py-8 text-center">Meta Quest App <span class="text-red-600 text-fancy font-bold">*New*</span></h3>
          <div class="flex flex-col sm:flex-row mt-4 sm:space-x-4">
              <div class="w-full sm:w-3/4 text-lg text-gray-800 space-y-3">
                  <p>
                      An upcoming Meta Quest app is currently being developed to provide users with a more streamlined experience. The app will allow users to directly enjoy immersive virtual darshans. However, it's important to note that the app is currently in an alpha-state and not yet fully available to the general public. Only a select group of "alpha-testers" have the opportunity to get a sneak peek. If you would like to gain early access, simply <span class="text-indigo-700 font-semibold">submit the form</span>, and you will receive an invitation to become an early tester.
                  </p>
                  <p>
                      Rest assured, there is no cost involved, and you won't be obligated in any way. Your participation will not only grant you access to the early version but also contribute to its enhancement, benefiting the global sanga, who can subsequently utilize and relish the experience.
                  </p>
                  <p>If you have any questions, please feel free to <a class="text-indigo-700 font-semibold" href="/help" title="contact">message me</a>.</p>
              </div>
              <div class="w-full sm:w-1/4">
                  <AppSubscribe />
              </div>
          </div>
          <h3 class="text-2xl font-semibold py-8 text-center">What will Happen Next</h3>
          <ol class="flex flex-col pt-3 pl-2 sm:pl-12 space-y-3 text-lg italic list-decimal">
              <li><b>Meta</b> will send you an email containing a link to accept the invitation.</li>
              <li>Follow the instructions provided in the email.</li>
              <li>Afterward, you should be able to search for the "360darshan" app within your phone's Meta Quest App and also within your Quest device.</li>
              <li>Once located, proceed with installing the app, which can be done in a similar manner to any other apps on your Quest.</li>
              <li>Once installed, you can use the app just like any other applications on your Quest device.</li>
          </ol>
          <h3 class="text-2xl font-semibold py-8 text-center">In-App Controls</h3>
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
                  <td>Go to the next viewing position</td>
                  <td class="italic text-gray-400">.. when available. &ndash; some virtual tours have a single viewing position</td>
              </tr>
              <tr class="text-gray-700 text-center">
                  <td>B-button or Y-button</td>
                  <td>Score up Japa</td>
                  <td class="italic text-gray-400">Yes, you can chant there, and the VR will even count rounds for you :)</td>
              </tr>
              <tr class="text-gray-700 text-center">
                  <td>A-button or X-button</td>
                  <td>Toggle audio ON and OFF</td>
                  <td class="italic text-gray-400">soft bhajans will be playing</td>
              </tr>
              <tr class="text-gray-700 text-center">
                  <td>Grip button</td>
                  <td>Back to menu</td>
                  <td class="italic text-gray-400">where you can select next darshan</td>
              </tr>
              </tbody>
          </table>
          <img class="object-contain h-80" src="/img/quest-buttons.png" alt="" />
        </div>
      </div>
    </div>
  </main>
</template>
