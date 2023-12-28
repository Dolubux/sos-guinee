<script setup lang="ts">
// Import Swiper Vue.js components

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { ConfSite } from './../configurations/control.config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const modules = [Navigation, Pagination, A11y, Autoplay];
</script>

<template>
   <swiper
      :modules="modules"
      navigation
      :pagination="{ clickable: true }"
      :slides-per-view="1"
      :autoplay="{
         delay: 10000,
         disableOnInteraction: false,
      }"
      class="h-[10rem] md:h-[30rem]"
   >
      <swiper-slide class="flex relative w-full" v-for="banner in ConfSite.sliders">
         <div class="bg-white/0 w-full h-full absolute"></div>
         <div class="flex flex-col z-50 items-center justify-center hidden absolute  h-full w-full  m-auto gap-8">
            <span 
            class="z-50 w-11/12 md:w-8/12 text-center text-2xl  md:text-4xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
         >
            {{ banner.content }}
         </span>

         <div class="flex gap-4 z-50 divide-x-[1px]  rounded-xl w-11/12 md:w-8/12 hidden bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            <div v-for="pay in ConfSite.pay">
               <div class="p-4">
               
               <img class="h-8 " :src="pay.image" alt="">
                  <span class="text-base md:text-lg font-bold"> {{ pay.tel }} </span>
               </div>
            </div>
         </div>
         </div>
         <img :src="banner.image" class="w-full h-full object-cover" alt="" />

         
      </swiper-slide>
   </swiper>
</template>

<style scoped></style>
