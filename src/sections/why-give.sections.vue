<script setup lang="ts">
import { ConfSite } from "../configurations/header"
</script>

<template>
   <div class="hs-accordion-group w-11/12 m-auto pb-16 flex flex-col gap-4">
      <h1 class="text-4xl font-extrabold text-green-600">Pourquoi donner ?</h1>


<div class="grid grid-cols-2 gap-4">

  <div class="hs-accordion active bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700" id="hs-bordered-heading-one">
    <button class="hs-accordion-toggle hs-accordion-active:text-red-400 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-bordered-collapse-one">
      <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
      <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
     {{ ConfSite.why[0].title }}
    </button>
    <div id="hs-basic-bordered-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-one">
      <div class="pb-4 px-5">
        <p class="text-gray-800 dark:text-gray-200">
          {{ ConfSite.why[0].content }}
        </p>
      </div>
    </div>
  </div>

  <div v-for="(why, index) in ConfSite.why">


    <div v-if="index > 0" class="hs-accordion bg-white border -mt-px first:rounded-t-lg last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700" id="hs-bordered-heading-two">
    <button class="hs-accordion-toggle hs-accordion-active:text-red-400 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400" aria-controls="hs-basic-bordered-collapse-two">
      <svg class="hs-accordion-active:hidden block w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
      <svg class="hs-accordion-active:block hidden w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
      {{ why.title }}
    </button>
    <div id="hs-basic-bordered-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-bordered-heading-two">
      <div class="pb-4 px-5">
        <p class="text-gray-800 dark:text-gray-200 text-sm">
          {{ why.content }}
        </p>
      </div>
    </div>
  </div>


</div>

</div>
     

      
  
   </div>
</template>

<style scoped></style>
