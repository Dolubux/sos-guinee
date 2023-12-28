<script setup lang="ts">
import HeaderPg from '../components/header.pg.vue';
import Footer from '../components/footer.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ConfSite } from '../configurations/control.config';

const route = useRoute();

const actualiteId = ref();
const Actu = ref();
onMounted(() => {
   const body = document.querySelector('body')
   body?.scrollBy(0, 0)
   actualiteId.value = route.params?.id;
   Actu.value = ConfSite.actuality[actualiteId.value];
});
</script>

<template>
   <div class="font-sans">
      <HeaderPg />

      <section>
         <div class="w-full m-auto">
            <div class="w-full md:w-8/12 lg:w-8/12 m-auto ">
               <img :src="Actu?.image" class="w-full h-full md:rounded-lg" alt="" />
            </div>

            <div
               class="flex flex-col whitespace-pre-line w-11/12 md:w-8/12 lg:w-8/12 px-4 m-auto pt-8 pb-24 gap-4"
            >
               <div v-for="actu in Actu?.sections">
                  <div class="flex flex-col w-full m-auto">
                     <span class="text-lg font-bold" v-html="actu.title"></span>
                     <span v-html="actu.content"></span>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
   </div>
</template>

<style scoped></style>
