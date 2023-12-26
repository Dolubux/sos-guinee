<script setup lang="ts">
// Import Swiper Vue.js components

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { ConfSite } from './../configurations/header';

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
      :space-between="50"
      :autoplay="{
         delay: 2500,
         disableOnInteraction: false,
      }"
      class="h-[35rem]"
   >
      <swiper-slide class="flex relative w-full" v-for="banner in ConfSite.sliders">
         <div class="bg-white/40 w-full h-full absolute"></div>
         <div class="flex flex-col z-50 items-center justify-center absolute left-16 bottom-28 w-full  m-auto gap-4">
            <span 
            class="z-50 w-8/12 text-center  text-4xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent"
         >
            {{ banner.content }}
         </span>

         <div class="flex gap-4 z-50 divide-x-[1px]  rounded-xl w-8/12 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            <div v-for="pay in ConfSite.pay">
               <div class="p-4">
               
               <img class="h-8 " :src="pay.image" alt="">
                  <span class="text-lg font-bold"> {{ pay.tel }} </span>
               </div>
            </div>
         </div>
         </div>
         <img :src="banner.image" class="w-full h-full object-cover" alt="" />

         
      </swiper-slide>
   </swiper>
</template>

<style scoped></style>
