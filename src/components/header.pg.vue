<script setup lang="ts">
import {} from "vue"
import ImagesLogo from "./../assets/images/logo.jpg"
import {ConfSite} from "./../configurations/header"
import Vue3Autocounter from 'vue3-autocounter';


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
  <nav class="max-w-[85rem] w-full h-full mx-auto px-4 lg:px-8 md:flex sm:items-center sm:justify-between" aria-label="Global">
    <div class="flex items-center justify-between h-full">
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
      <div class="flex flex-col gap-8 mt-5 text-base sm:flex-row sm:items-center text-gray-700 sm:justify-end sm:mt-0 sm:ps-5 ">
        <div v-for="link in ConfSite.menu">
        <a :href="link.link" class=""> {{ link.name }} </a>
    </div>
    <a href="#spaceDaonation" class="bg-red-400 text-white px-4 py-2 rounded-lg font-bold text-base">Faites un don</a>

    <div class="bg-gray-700 h-full py-4 w-[10rem] flex justify-center gap-2 rounded-lg">

      <svg class="text-12" xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox="0 0 24 24"><title>wallet_4_line</title><g id="wallet_4_line" fill='none' fill-rule='evenodd'><path d='M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z'/><path fill='#fff' fill-rule='nonzero' d='M17 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0'/><path fill='#fff' d='m4.813 5.728 11-3.143A2.5 2.5 0 0 1 19 4.989V6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.045.835-1.993 1.813-2.272m11.55-1.22a.5.5 0 0 1 .637.48V6h-5.86zM5 8h14v10H5z'/></g></svg>
      <vue3-autocounter class="text-white" ref='counter' :startAmount='0' :endAmount='0' :duration='3' prefix='' suffix='GNF' separator=',' decimalSeparator='.' :decimals='2' :autoinit='true' /> 
    
    </div>
      </div>

      
    </div>

    

 
  </nav>
</header>

</template>

<style scoped></style>
