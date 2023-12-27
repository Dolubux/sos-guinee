<script setup lang="ts">

 import {ConfSite} from "./../configurations/header"
 import Vue3Autocounter from 'vue3-autocounter';

</script>

<template>

<div class="flex flex-col relative w-full bg-gray-700  pt-8 pb-10" id="spaceDaonation">


<div class="text-white flex flex-col gap-2 justify-center items-center z-50   w-10/12 md:w-7/12 m-auto">

    <span class=" text-4xl font-extrabold">Espace de don </span>
    <span class=" text-center sm:text-sm md:text-base"> Grâce à vos dons, nous reconstruisons des vies. Chaque geste, peu importe la taille, a un impact immense. Rejoignez-nous dans cet effort de solidarité. Donnez aujourd'hui pour un meilleur demain. </span>
</div>





<div class="rounded-b-xl flex justify-center text-2xl  md:text-4xl font-bold text-red-400 mt-8  gap-2">


     <vue3-autocounter ref='counter' :startAmount='0' :endAmount='0' :duration='3' prefix='' suffix='GNF' separator=',' decimalSeparator='.' :decimals='2' :autoinit='true' /> Collecté

</div>



</div>

<div class="w-fill grid md:grid-cols-1 lg:grid-cols-2 sm:divide-y-[1px]  md:divide-x-[1px] border-b-[1px]">  
    <div v-for="pay in ConfSite.pay">
        
        <div class="flex gap-4 py-4 px-8">
            <img class="h-16 w-20 object-cover" :src="pay.image" alt="">
            <div class="flex flex-col">
                <span class="text-lg"> {{ pay.name }} </span>
                <span class="text-base md:text-xl font-bold"> {{ pay.tel }} </span>
            </div>
        </div>
    
    </div>
</div>

</template>

<style scoped></style>
