<script setup>
import { ref } from 'vue'
const educationalAttainment = ref("")

</script>

<template>
    <!--Contact Information-->
    <div class="w-[95dvh] h-auto mt-6 px-11 py-8
                        drop-shadow-xl
                        bg-white  rounded-2xl">
        <h1 class="text-2xl font-semibold">Educational Background</h1>
        <h1 class="text-sm text-gray-500">Highest Educational Attainment*</h1>
        <!-- Input Forms -->
        <div class="grid grid-cols-1 gap-y-7">
            <select v-model="educationalAttainment" class="text-lg
                h-[7dvh]
                outline-none border-b border-black
                ">
                <option disabled value="">Select Highest Educational Attained</option>
                <option value="High School Graduate">High School Graduate</option>
                <option value="College Undergraduate">College Undergraduate</option>
                <option value="College Graduate">College Graduate</option>
            </select>

            <div v-if="educationalAttainment == 'College Graduate' || educationalAttainment == 'College Undergraduate'" class="relative">

                <input type="text" id="degree" class="
                        w-full
                     focus:border-blue-600 focus:border-b-2
                        outline-none border-b border-gray-400 
                        text-md py-3
                        transition-colors duration-500 peer">
                <label for="degree" class="
                        absolute
                        text-md text-gray-400 cursor-text
                        left-0 top-1
                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4
                        transition-all duration-100
                        ">Degree/Course*</label>
            </div>

            <div class="relative">

                <input type="text" id="school_name" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="school_name" class="
                                        absolute
                                        text-md text-gray-400 cursor-text
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">School Name*</label>
            </div>
        </div>
    </div>


</template>