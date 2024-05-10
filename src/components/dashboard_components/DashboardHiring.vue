<script setup>
import {RouterLink} from 'vue-router'
import axios from 'axios'
</script>

<template>
    <div class="mt-[4dvh]">
        <!-- Header -->
        <div class="flex items-center justify-between">
            <h1 class="text-2xl text-transparent bg-clip-text w-[31dvh]
            bg-gradient-to-r from-[#46D1FE] to-[#0390EA] drop-shadow-lg
            font-bold">You Need to Hire!
            </h1>
            <RouterLink class="font-bold text-[#D1D1D1] hover:text-[#46D1FE]" to="/jobs">See all</RouterLink>
        </div>
        <!-- List of Jobs-->
        <div class="flex flex-col mt-[2dvh]">
            <!-- Upper Part -->
            <div class="flex">
                <div class="bg-white
                rounded-md
                drop-shadow-lg
                h-[25dvh] w-[50dvh]">

                </div>

                <div class="bg-white
                rounded-md
                ml-[4dvh]
                drop-shadow-lg
                h-[25dvh] w-[50dvh]">

                </div>

            </div>
            <!-- Lower Part-->
            <div class="flex mt-[4dvh]">

                <div class="bg-white
                rounded-md
                drop-shadow-lg
                h-[25dvh] w-[50dvh]">

                </div>

                <div class="bg-white
                rounded-md
                ml-[4dvh]
                drop-shadow-lg
                h-[25dvh] w-[50dvh]">

                </div>

            </div>
        </div>
    </div>
</template>