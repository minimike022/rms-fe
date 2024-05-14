<script setup>
import {ref} from 'vue'

const selectedPosition = ref("")




</script>

<template>
    <!--Contact Information-->
    <div class="w-[95dvh] h-auto mt-6 px-11 py-8
                        drop-shadow-xl
                        bg-white  rounded-2xl">
        <h1 class="text-2xl font-semibold">Desired Position</h1>
        <!-- Dropdown Menu -->
        <div class="w-full
        grid grid-cols-1
        gap-y-4 mt-4">
                <select v-model="selectedPosition" class="text-lg
                h-[7dvh]
                outline-none border-b border-black
                ">
                    <option disabled value="">Choose Available Position</option>
                    <option value="Linux" class="text-blue-500 h-">Linux Administrator</option>
                    <option value="Web Developer">Web Developer</option>
                    <option value="Data Analyst">Data Analyst</option>
                </select>
                <div class="grid grid-cols-2 gap-y-4">
                    <h1 class="text-md">Do you have BPO Experience?</h1>
                </div>
        </div>
    </div>
</template>