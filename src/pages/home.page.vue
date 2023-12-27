<script setup lang="ts">
import HeaderPg from '../components/header.pg.vue';
import Footer from '../components/footer.vue';
import BannerSections from '../sections/banner.sections.vue';
import AboutsSections from '../sections/abouts.sections.vue';
import WhyGiveSections from '../sections/why-give.sections.vue';
import DonationAreaSections from '../sections/donation-area.sections.vue';
import ParternSections from '../sections/partern.sections.vue';
import Hedding from '../components/hedding.vue';

import { ConfSite } from './../configurations/header';
</script>

<template>
   <div class="font-sans">
      <HeaderPg />
      <BannerSections />
      <AboutsSections />
      <WhyGiveSections />
      <DonationAreaSections />

      <div class="w-11/12 m-auto  flex flex-col md:flex  md:flex-row justify-between  py-32 gap-8 items-center" id="tutoriel">
         <div class="flex flex-col w-11/12 md:w-5/12 gap-2">
            <Hedding name="Tutoriel" />

            <div class="texts-sm">
               Cette vidéo vous explique en détail, comment faire un don via nos différents moyens de paiement.
            </div>

            <div class="">
               
            </div>
         </div>

         <div class="w-11/12 md:w-7/12 h-full border-2">
            <video width="" height="" class="h-full w-full" controls></video>
         </div>
      </div>

      <div class="w-11/12 m-auto flex flex-col justify-between pb-32 gap-8" id="actuality">
         <Hedding name="Actualités " />

         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="A in ConfSite.actuality">
               <div class="flex flex-col gap-2 rounded-xl border-[1px]">
                  <div class="w-full rounded-xl">
                     <img
                        class="w-fill rounded-t-xl h-[15rem] w-full object-cover"
                        :src="A.image"
                        alt=""
                     />
                  </div>

                  <div class="p-4 flex flex-col gap-2">
                     <span class="font-bold text-xl "> {{ A.title.substring(0, 65) }}{{ A.title.length >= 65 ? '...': '' }}</span>
                     <span class="text-smx"> {{ A.content.substring(0, 180) }}{{ A.content.length >= 180 ? '...': '' }} </span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <ParternSections />

      <Footer />
   </div>
</template>

<style scoped></style>
