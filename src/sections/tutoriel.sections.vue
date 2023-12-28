<script setup lang="ts">
import Hedding from '../components/hedding.vue';
import { ConfSite } from './../configurations/control.config';
</script>

<template>


<div class="w-11/12 m-auto  flex flex-col md:flex  md:flex-row justify-between  py-32 gap-8 items-center" id="tutoriel">
         <div class="flex flex-col w-11/12 md:w-5/12 gap-2">
            <Hedding :name="ConfSite.sections?.tutoriel.title" />

            <div class="texts-sm">
               {{ ConfSite.sections?.tutoriel.content }}
            </div>

            <div class="">
               
            </div>
         </div>

         <div class="w-11/12 md:w-7/12 h-full">
            <video width="" height="" class="h-full w-full rounded-xl" controls></video>
         </div>
      </div>

 
</template>

<style scoped></style>
