<script setup lang="ts">
import Hedding from '../components/hedding.vue';

import { ConfSite } from './../configurations/control.config';
</script>

<template>


      <div class="w-11/12 m-auto flex flex-col justify-between pb-32 gap-8" id="actuality">
         <Hedding name="Actualités " />

         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="(A, index) in ConfSite.actuality">
               <RouterLink :to="{name: 'Actualite', params: {id: index}}" class="flex flex-col gap-2 rounded-xl border-[1px]">
                  <div class="w-full rounded-xl">
                     <img
                        class="w-fill rounded-t-xl h-[15rem] w-full object-cover"
                        :src="A.image"
                        alt=""
                     />
                  </div>

                  <div class="p-4 flex flex-col gap-2">
                     <span class="font-bold text-xl "> {{ A.title.substring(0, 75) }}{{ A.title.length >= 75 ? '...': '' }}</span>
                     <span class="text-smx"> {{ A.content.substring(0, 190) }}{{ A.content.length >= 190 ? '...': '' }} </span>
                  </div>
               </RouterLink>
            </div>
         </div>
      </div>

 
</template>

<style scoped></style>
