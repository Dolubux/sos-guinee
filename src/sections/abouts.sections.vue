<script setup lang="ts">
import Hedding from '../components/hedding.vue';
import { ConfSite } from './../configurations/control.config';
</script>

<template>
   <div class="items-center gap-8 w-11/12 m-auto py-24 flex flex-col md:flex-row" id="abouts">

    <div class="sm:w-8/12 md:w-8/12 lg:w-4/12 h-[14em] md:h-[24em]">
         <img class="w-full h-full object-cover rounded-lg" src="https://img.freepik.com/photos-gratuite/paysage-incendies-foret-extremes_23-2150880205.jpg?size=626&ext=jpg&ga=GA1.1.401016479.1673963877&semt=sph" alt="" />
      </div>

      <div class="sm:w-8/12 md:w-11/12  flex flex-col gap-1 ">
         <Hedding :name="ConfSite.sections?.abouts.title" />
         <p class=" text-lg text-gray-700">
            {{ ConfSite.sections?.abouts.content }}
         </p>
      </div>

      
   </div>
</template>

<style scoped></style>
