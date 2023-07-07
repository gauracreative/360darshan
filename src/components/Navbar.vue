<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
const open = ref(false)
</script>

<template>
  <nav class="fixed w-full bg-white border-b border-gray-100 z-50 shadow">
      <!-- Primary Navigation Menu -->
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16">
              <div class="flex">
                  <!-- Logo -->
                  <div class="flex-shrink-0 flex items-center">
                      <a href="/" title="360darshan.com">
                          <img class="object-contain" src="https://360darshan.com/img/logo.png" alt="360darshan.com">
                      </a>
                  </div>

                  <!-- Navigation Links -->
                  <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                    <RouterLink to="/">Home</RouterLink>
                    <RouterLink to="/dhamas">Dhamas</RouterLink>
                    <RouterLink to="/vr">VR</RouterLink>
                    <RouterLink to="/vr/meta-quest-app">Meta Quest App</RouterLink>
                    <RouterLink to="/help">Help</RouterLink>
                  </div>
                  <!-- tmp notice -->
                  <div class="hidden sm:ml-10 sm:flex py-2 my-3 border border-red-300 bg-red-100 px-4 rounded-xl text-red-700">
                    This is a test under-construction site. Actual website <a href="https://360darshan.com">is here</a>.
                  </div>
              </div>

              <!-- Hamburger -->
              <div class="-mr-2 flex items-center sm:hidden">
                  <button @click="open = !open" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                      <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                          <path :class="open ? 'hidden' : 'inline-flex'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                          <path :class="open ? 'inline-flex' : 'hidden'" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
              </div>
          </div>
      </div>

      <!-- Responsive Navigation Menu -->
      <div id="responsiveNavbar" :class="open ? 'block' : 'hidden'" class="sm:hidden">
          <div class="pt-2 pb-3 space-y-1">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/dhamas">Dhamas</RouterLink>
          </div>
      </div>
    </nav>
</template>

<style scoped>
  a {
    @apply inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out;
  }
  a.router-link-active {
    @apply inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out;
  }

  #responsiveNavbar a {
    @apply block w-full pl-3 pr-4 py-2 border-l-4 border-transparent text-left text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out;
  }

  #responsiveNavbar a.router-link-active {
    @apply block w-full pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-left text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out;
  }
</style>
