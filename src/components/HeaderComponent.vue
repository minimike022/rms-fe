<script setup>
import {useRoute} from "vue-router"

const header_title = useRoute()

</script>

<template>
    <h1 class="text-3xl text-transparent bg-clip-text w-[24dvh]
        bg-gradient-to-r from-[#46D1FE] to-[#0390EA] drop-shadow-lg
        font-bold
        ">{{header_title.meta.header}}</h1>
</template>