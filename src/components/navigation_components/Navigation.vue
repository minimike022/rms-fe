<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="w-[50dvh]">
        <div class="w-inherit sticky top-10 left-0">
            <div class="flex justify-center my-10">
                <img src="/src/assets/motivIT_logo.png" class="w-[30dvh]">
            </div>
            <div class="flex flex-col
            pl-[10dvh]
            text-lg font-bold text-[#D1D1D1]">
                <RouterLink to="/dashboard" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#46D1FE] to-[#0390EA] active:bg-slate-600"> Dashboard</RouterLink>
                <RouterLink to="/applicants" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#46D1FE] to-[#0390EA]"> Applicants </RouterLink>
                <RouterLink to="/calendar" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#46D1FE] to-[#0390EA]"> Calendar </RouterLink>
                <RouterLink to="/jobs" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#46D1FE] to-[#0390EA]"> Jobs </RouterLink>
                <RouterLink to="/analysis" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#46D1FE] to-[#0390EA]"> Analysis </RouterLink>
            </div>
        </div>
    </div>
</template>