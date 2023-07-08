<script setup>
  import { ref } from 'vue'
  // import AppSubscribe from '../components/AppSubscribe.vue'
  import BreadCrumbs from '../components/BreadCrumbs.vue'
  const crumbs = ref([
    {
      label: 'Home',
      link: '/'
    },
    {
      label: 'Help'
    }
  ])
</script>

<template>
  <main class="pt-24">
    <div class="max-w-7xl mx-auto">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg pb-8">
        <BreadCrumbs :items="crumbs" />
        <div class="bg-white overflow-hidden py-4 px-8 flex flex-col sm:flex-row">
          <div class="w-full sm:w-3/7 px-4 py-4 flex flex-col space-y-2 text-lg">
            <p class="font-semibold">Hi there 😏</p>
            <p>Thanks for stopping by. If you have a question or would like to share a feedback you can do so here, via the form.</p>
            <p class="font-semibold text-right pr-4">Thank you</p>
          </div>
          <div class="w-full sm:w-4/7 px-8 py-5">
            <form id="contactForm" method="post" action="/send">
                <div class="flex flex-col sm:flex-row mt-4 sm:space-x-4">
                    <div class="w-full sm:w-1/2">
                      <div class="mt-5">
                        <label class="text-xl font-semibold mb-2 block" for="name">Name</label>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                            <svg class="w-5 h-5 text-icons" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                            </svg>
                          </div>
                          <input class="border rounded-md pl-8 pr-3 py-1 border-gray-300 bg-gray-100 w-full" type="text" placeholder="required" required="required" name="name" id="name">
                        </div>
                      </div>
                    </div>
                    <div class="w-full sm:w-1/2">
                      <div class="mt-5">
                        <label class="text-xl font-semibold mb-2 block" for="email">Email</label>
                        <div class="relative">
                          <div class="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
                            <svg class="w-5 h-5 text-icons" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                            </svg>
                          </div>
                          <input class="border rounded-md pl-8 pr-3 py-1 border-gray-300 bg-gray-100 w-full" type="text" placeholder="required" required="required" name="email" id="email">
                        </div>
                      </div>
                    </div>
                </div>
                <div class="mt-4">
                    <textarea cols="20" rows="6" name="message" class="rounded-md w-full border py-3 px-5 bg-gray-100" placeholder="Your message" required></textarea>
                </div>
                <button
                    type="submit"
                    class="rounded-md px-5 py-3 my-3 text-white text-center bg-indigo-500 font-semibold shadow w-full"
                    data-sitekey="..." 
                    data-callback="onSubmit" 
                    data-action="contact">
                    Send
                </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
