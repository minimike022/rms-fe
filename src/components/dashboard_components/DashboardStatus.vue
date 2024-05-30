<script setup>
import ProgressCharts from './Charts/ProgressCharts.vue';
</script>

<template>
    <!--Header Title-->
    <div class="my-[4dvh]">
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <h1 class="text-2xl text-transparent bg-clip-text w-[30dvh]
                bg-gradient-to-r from-blue-400 to-blue-800 drop-shadow-lg
            font-bold">Recruitment Progress
                </h1>
                <h1 class="bg-yellow-500 w-[14dvh] h-[4dvh] 
                rounded-lg 
                text-sm text-[#eeeeee] font-bold
                flex items-center justify-center">Ongoing</h1>
            </div>
            <RouterLink class="font-bold text-[#D1D1D1] hover:text-[#46D1FE]" to="/applicants">See all</RouterLink>
        </div>
    </div>
    <!-- Recruitment Progress Graph -->
    <ProgressCharts/>
</template>