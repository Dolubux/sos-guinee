<script setup lang="ts">
import {} from "vue"
import ImagesLogo from "./../assets/images/logo.jpg"
import {ConfSite} from "./../configurations/header"

const CloseMenu = () => {
  const colse = document.querySelector('#navbar-with-collapse')
  colse?.classList.contains('hidden') ? colse?.classList.remove('hidden') : colse?.classList.add('hidden')
}

</script>

<template>

<div class="flex justify-between w-full h-20 bg-gray-700 items-center px-8 hidden">



<div class="flex justify-center gap-6 text-white">
    
</div>


<div class="">
    
</div>
    
</div>


<header class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
  <nav class="max-w-[85rem] w-full mx-auto px-4 md:flex sm:items-center sm:justify-between" aria-label="Global">
    <div class="flex items-center justify-between">
      <a class="flex-none text-xl font-semibold " href="#">
        <div class="">
    <img :src="ImagesLogo" class="h-14" alt="">
</div>
      </a>
      <div class="md:hidden" @click="CloseMenu">
        <button type="button" class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700  dark:hover:bg-white/10 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-with-collapse" aria-controls="navbar-with-collapse" aria-label="Toggle navigation">
          <svg class="hs-collapse-open:hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
          <svg class="hs-collapse-open:block hidden flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>
    <div id="navbar-with-collapse" class="hidden basis-full grow md:block">
      <div class="flex flex-col gap-8 mt-5 text-lg sm:flex-row sm:items-center text-gray-700 sm:justify-end sm:mt-0 sm:ps-5 ">
        <div v-for="link in ConfSite.menu">
        <a :href="link.link" class=""> {{ link.name }} </a>
    </div>
    <button class="bg-red-400 text-white px-4 py-2 rounded-lg font-bold text-base">Faites un don</button>
      </div>
    </div>

 
  </nav>
</header>

</template>

<style scoped></style>
