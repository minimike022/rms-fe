<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="w-[35dvh] shadow-lg">
        <div class="w-inherit sticky top-10 left-0">
            <div class="flex justify-center my-10">
                <img src="/src/assets/motivIT_logo.png" class="w-[25dvh]">
            </div>
            <div class="flex flex-col
            pl-12
            text-lg font-bold text-[#D1D1D1]">
                <RouterLink activeClass="bg-clip-text text-transparent bg-gradient-to-r from-[#0390EA] to-blue-800" to="/dashboard" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#0390EA] to-blue-800 active:bg-slate-600" :class="'bg-black'">Dashboard</RouterLink>
                <RouterLink activeClass="bg-clip-text text-transparent bg-gradient-to-r from-[#0390EA] to-blue-800" to="/applicants" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#0390EA] to-blue-800"> Applicants </RouterLink>
                <RouterLink activeClass="bg-clip-text text-transparent bg-gradient-to-r from-[#0390EA] to-blue-800" to="/calendar" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#0390EA] to-blue-800"> Calendar </RouterLink>
                <RouterLink activeClass="bg-clip-text text-transparent bg-gradient-to-r from-[#0390EA] to-blue-800" to="/jobs" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#0390EA] to-blue-800"> Jobs </RouterLink>
                <RouterLink activeClass="bg-clip-text text-transparent bg-gradient-to-r from-[#0390EA] to-blue-800" to="/analysis" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#0390EA] to-blue-800"> Analysis </RouterLink>
            </div>
        </div>
    </div>
</template>