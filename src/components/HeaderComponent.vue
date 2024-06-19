<script setup>
import {useRoute} from "vue-router"

const header_title = useRoute()

</script>

<template>
    <h1 class="text-3xl text-transparent bg-clip-text w-[30dvh] mt-[8.5dvh] 
    bg-gradient-to-r from-[#0390EA] to-blue-800 drop-shadow-lg
        font-extrabold
        ">{{header_title.meta.header}}</h1>
</template>