<script setup>
import {ref} from 'vue'
const isOpen = ref(false)
const selectedPosition = ref("")

const toggle_dropdown = () => {
    isOpen.value = !isOpen.value
}



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
                <select v-model="selectedPosition" class="text-lg text-blue-500
                outline-none border-b border-black
                ">
                    <option disabled value="">Choose Available Position</option>
                    <option value="Linux">Linux Administrator</option>
                    <option value="Web Developer">Web Developer</option>
                    <option value="Data Analyst">Data Analyst</option>
                </select>
                <div class="grid grid-cols-2 gap-y-4">
                    <h1>Do you have BPO Experience?</h1>
                    <div class="flex justify-end items-center">
                        <input type="radio"  name="BPO" value="Yes">
                        <label for="BPO" class="ml-1 text-md text-gray-400">Yes</label>
                        <input type="radio" class="ml-6" name="BPO" value="No">
                        <label for="BPO" class="ml-1 text-md text-gray-400">No</label>
                    </div>
                    <h1>Willing to work during night shift?</h1>
                    <div class="flex justify-end items-center">
                        <input type="radio" name="shift" value="Yes">
                        <label for="shift" class="ml-1 text-md text-gray-400">Yes</label>
                        <input type="radio" class="ml-6" name="shift" value="No">
                        <label for="shift" class="ml-1 text-md text-gray-400">No</label>
                    </div>
                    <h1>Willing to work on weekdays and holidays?</h1>
                    <div class="flex justify-end items-center">
                        <input type="radio" name="holidays" value="Yes">
                        <label for="holidays" class="ml-1 text-md text-gray-400">Yes</label>
                        <input type="radio" class="ml-6" name="holidays" value="No">
                        <label for="holidays" class="ml-1 text-md text-gray-400">No</label>
                    </div>
                    <h1>Willing to work onsite in Sto. Domingo. Nueva Ecija?</h1>
                    <div class="flex justify-end items-center">
                        <input type="radio" name="site" value="Yes">
                        <label for="site" class="ml-1 text-md text-gray-400">Yes</label>
                        <input type="radio" class="ml-6" name="site" value="No">
                        <label for="site" class="ml-1 text-md text-gray-400">No</label>
                    </div>
                </div>
        </div>
    </div>
</template>