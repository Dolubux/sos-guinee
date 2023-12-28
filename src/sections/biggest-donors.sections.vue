<script setup lang="ts">
import Hedding from '../components/hedding.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ConfSite } from './../configurations/control.config';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import Vue3Autocounter from 'vue3-autocounter';




// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const modules = [Navigation, Pagination, A11y, Autoplay];
</script>

<template>
   <div
      class="w-full m-auto flex flex-col bg-green-200/20 justify-between py-16 gap-8 items-center"
      id="tutoriel"
   >
      <div class="flex flex-col w-11/12 md:w-6/12 gap-2 justify-center items-center">
         <Hedding class="text-center" :name="ConfSite.sections?.biggestDonars.title" />

         <div class="texts-sm text-center">
            {{ ConfSite.sections?.biggestDonars.content }}
         </div>
      </div>

      
       
         <div
         :slides-per-view="4"
         :space-between="50"
         class="w-11/12 md:w-11/12 h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-cnter"
         :modules="modules"
         :autoplay="{
            delay: 5000,
            disableOnInteraction: false,
         }"
      >
         <div class="flex relative" v-for="donate in ConfSite.biggestDonars">
            
            <div class="flex items-center gap-2 justify-center">
                <div class="h-16 w-16 bg-gray-400 rounded-full">
                <img :src="donate.image" class="w-full min-h-max h-full rounded-full object-cover overflow-auto" alt=""></div>
                <div class="flex flex-col">
                <span class="text-ld font-bold"> {{ donate.name }} </span>
                
                <vue3-autocounter
            ref="counter"
            class="text-lg"
            :startAmount="donate.account"
            :endAmount="donate.account"
            :duration="3"
            prefix=""
            :suffix="donate.prefix"
            separator=","
            decimalSeparator="."
            :decimals="2"
            :autoinit="true"
         />
                </div>
            </div>
     
         </div>
      </div>
      </div>
 
</template>

<style scoped></style>
