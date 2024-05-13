<script setup>
</script>

<template>
    <div class="w-[95dvh] h-auto mt-6 px-11 py-8 
        drop-shadow-xl
        bg-white  rounded-2xl">
        <h1 class="text-2xl font-semibold">Personal Information</h1>
        <div class="grid grid-cols-2 gap-x-4 gap-y-8
            mt-6">
            <div class="relative">
                <input type="text" id="first_name" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="first_name" class="
                                        absolute
                                        text-md text-gray-400 cursor-text
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">First Name*</label>
            </div>
            <div class="relative">
                <input type="text" id="middle_name" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="middle_name" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Middle Name*</label>
            </div>
            <div class="relative">
                <input type="text" id="last_name" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="last_name" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Last Name*</label>
            </div>
            <div class="relative">
                <label for="extension_name" class="
                                        absolute
                                        text-sm text-gray-400
                                        left-0 top-1
                                        ">Extension Name (if any)</label>
                <input type="text" id="extension_name" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
            </div>
            <div class="relative">
                <input type="date" id="birthdate" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="birthdate" class="
                                        absolute
                                        text-sm text-gray-400
                                        left-0 -top-4
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Birthdate *</label>
            </div>
            <div class="relative">
                <input type="text" v-model="age" id="age" class="
                                        w-full
                                        outline-none border-b border-dotted border-gray-400 
                                        text-md py-3">
                <label for="age" class="
                                        absolute
                                        text-sm text-gray-400
                                        left-0 -top-4
                                        ">Age</label>
            </div>
        </div>
        <div class="relative mt-8">
            <input type="text" id="present_address" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
            <label for="present_address" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Present Address*</label>
        </div>
    </div>
</template>