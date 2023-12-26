<script setup lang="ts">

 import {ConfSite} from "./../configurations/header"

</script>

<template>

<div class="flex flex-col relative w-full bg-gray-700 h-[18rem] pt-8 pb-10">


<div class="text-white flex flex-col gap-2 justify-center items-center z-50  w-7/12 m-auto">

    <span class=" text-4xl font-extrabold">Espace de don </span>
    <span class=" text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolore mollitia reprehenderit libero alias delectus laboriosam autem molestiae nemo. Repellendus blanditiis ab possimus ipsum illum obcaecati maiores reiciendis reprehenderit veniam! </span>
</div>





<div class="rounded-b-xl flex justify-center  text-4xl font-bold text-red-400">
     100.000GNF Collecter

</div>



</div>

<div class="w-fill grid grid-cols-3 divide-x-[1px] border-b-[1px]">  
    <div v-for="pay in ConfSite.pay">
        
        <div class="flex gap-4 py-4 px-8">
            <img class="h-16" :src="pay.image" alt="">
            <div class="flex flex-col">
                <span class="text-lg"> {{ pay.name }} </span>
                <span class="text-xl font-bold"> {{ pay.tel }} </span>
            </div>
        </div>
    
    </div>
</div>

</template>

<style scoped></style>
