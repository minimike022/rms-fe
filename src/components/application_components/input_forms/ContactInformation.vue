<script setup></script>

<template>
    <!--Contact Information-->
    <div class="w-[95dvh] h-[50dvh] mt-6 px-11 py-8
                        drop-shadow-xl
                        bg-white  rounded-2xl">
        <h1 class="text-2xl font-semibold">Contact Information</h1>
        <!-- Input Forms -->
        <div class="grid grid-cols-1  gap-y-8
                                mt-4">
            <div class="relative">
                <input type="text" id="mobile_number" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="mobile_number" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Mobile Number*</label>
            </div>
            <div class="relative">
                <input type="text" id="email_address" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="email_address" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Email Address*</label>
            </div>
            <div class="relative">
                <input type="text" id="facebook_link" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="facebook_link" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Facebook_Username/link</label>
            </div>
        </div>
    </div>
</template>