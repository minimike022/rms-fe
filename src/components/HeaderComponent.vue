<script setup>
import { useRoute } from "vue-router"

const header_title = useRoute()

</script>

<template>
    <div class="flex items-center justify-between mt-[8.5dvh]">
        <div class="bg-white shadow-md rounded-lg h-[10dvh] w-auto px-8 flex items-center justify-center">
            <h1 class="text-3xl text-center text-transparent bg-clip-text
    bg-gradient-to-r from-[#0390EA] to-blue-800 drop-shadow-lg
        font-extrabold
        ">{{ header_title.meta.header }}</h1>
        </div>
        <div class="bg-white shadow-md rounded-lg h-[10dvh] w-auto flex items-center justify-center px-4">
            <h1 class="text-lg text-transparent bg-clip-text 
    bg-gradient-to-r from-[#0390EA] to-blue-800 drop-shadow-lg font-bold">Acceptance Rate: </h1>
        </div>
    </div>
</template>