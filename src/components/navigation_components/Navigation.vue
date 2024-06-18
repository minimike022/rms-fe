<script setup>
import {RouterLink} from 'vue-router'
</script>

<template>
    <div class="w-[35dvh] h-[100%]">
        <div class="w-inherit fixed top-2 left-0">
            <div class="flex justify-center my-10">
                <img src="/src/assets/motivIT_logo.png" class="w-[25dvh]">
            </div>
            <div class="flex flex-col
            pl-12
            text-lg font-bold text-gray-500">
                <RouterLink activeClass="bg-clip-text text-transparent bg-gradient-to-r from-[#0390EA] to-blue-800" to="/dashboard" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#0390EA] to-blue-800" >Dashboard</RouterLink>
                <RouterLink activeClass="bg-clip-text text-transparent bg-gradient-to-r from-[#0390EA] to-blue-800" to="/applicants" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#0390EA] to-blue-800"> Applicants </RouterLink>
                <RouterLink activeClass="bg-clip-text text-transparent bg-gradient-to-r from-[#0390EA] to-blue-800" to="/calendar" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#0390EA] to-blue-800"> Calendar </RouterLink>
                <RouterLink activeClass="bg-clip-text text-transparent bg-gradient-to-r from-[#0390EA] to-blue-800" to="/jobs" class="my-[3dvh] bg-clip-text hover:text-transparent hover:bg-gradient-to-r from-[#0390EA] to-blue-800"> Jobs </RouterLink>
            </div>
        </div>
    </div>
</template>