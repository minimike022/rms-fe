<script setup>
import { ref, watch } from 'vue'


const selected_platform = ref([])

watch(
    () => selected_platform.value,
    () => {
        console.log(selected_platform.value)
    }
)
</script>

<template>
    <div class="w-[95dvh] h-auto mt-6 px-11 py-8
                        drop-shadow-xl
                        bg-white  rounded-2xl">
        <h1 class="text-xl font-semibold">HOW DID YOU FOUND OUT ABOUT THIS JOB VACANCY?</h1>
        <!-- Input Forms -->
        <div class="
        my-4
        grid grid-cols-1 gap-y-5">
            <span class="flex items-center justify-start">
                <input type="checkbox" v-model="selected_platform" value="MotivIT Website" name="MotivIT Website"
                    class="h-[3dvh] w-[3dvh] accent-blue-500">
                <label for="MotivIT Website" class="text-gray-400">MotivIT Website</label>
            </span>
            <span class="flex items-center justify-start">
                <input type="checkbox" v-model="selected_platform" value="Facebook" id="Facebook" class="h-[3dvh] w-[3dvh] accent-blue-500">
                <label for="Facebook" class="text-gray-400">Facebook</label>
            </span>
            <span class="flex items-center justify-start">
                <input type="checkbox" v-model="selected_platform" value="LinkedIn" id="LinkedIn" class="h-[3dvh] w-[3dvh] accent-blue-500">
                <label for="LinkedIn" class="text-gray-400">LinkedIn</label>
            </span>
            <span class="flex items-center justify-start">
                <input type="checkbox" v-model="selected_platform" value="Job Fair" id="Job Fair" class="h-[3dvh] w-[3dvh] accent-blue-500">
                <label for="Job Fair" class="text-gray-400">Job Fair</label>
            </span>
            <span class="flex items-center justify-start">
                <input type="checkbox" v-model="selected_platform" value="Referral" id="Referral" class="h-[3dvh] w-[3dvh] accent-blue-500">
                <label for="Referral" class="text-gray-400">Referral</label>
            </span>
            <div v-if="selected_platform == 'Referral'" class="relative mt-2 ">
                <input type="text" id="referral" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="referral" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Name of Referrer*</label>
            </div>

            <span class="flex items-center justify-start">
                <input type="checkbox" v-model="selected_platform" id="Others" value="Others" class="h-[3dvh] w-[3dvh] accent-blue-500">
                <label for="Others" class="text-gray-400">Others</label>
            </span>
            <div v-for="platform in selected_platform" v-if="platform == 'Others'" class="relative mt-2">
                <input type="text" id="other_platform" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="other_platform" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Specify*</label>
            </div>
        </div>
    </div>
</template>