<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { ConfSite } from './../configurations/control.config';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Hedding from '../components/hedding.vue';

const modules = [Navigation, Pagination, A11y, Autoplay];
</script>

<template>
   <div class="pb-[8rem] w-11/12 m-auto flex flex-col gap-4">
      <Hedding name="Les partenaires" />

      <swiper
         :slides-per-view="3"
         :space-between="50"
         class="w-full"
         :modules="modules"
         :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
         }"
      >
         <swiper-slide class="flex relative" v-for="banner in ConfSite.partner">
            <img
               :src="banner.image"
               class="w-auto object-cover h-[4em]"
               alt=""
            />

            <div class=""></div>
         </swiper-slide>
      </swiper>
   </div>
</template>

<style scoped></style>
