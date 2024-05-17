<script setup>
import {ref, watch} from 'vue'

const emit = defineEmits(['character_reference'])

const character_reference = ref({
    ref_full_name: '',
    ref_company: '',
    ref_position: '',
    ref_contact: '',
    ref_email:''
})

const characterRef_toParent = () => {
    emit('character_reference', character_reference.value )
}

watch(character_reference.value,
    () => {
        characterRef_toParent()
    }
)

</script>

<template>
    <div class="my-8">
        <!-- Header -->
        <div class="flex items-center">
            <h1 class="text-xl font-semibold">Character Reference</h1>
            <h1 class=" text-gray-500">(Must be a former colleague/Supervisor)</h1>
        </div>
        <div class="relative mt-4">
            <input required type="text" v-model="character_reference.ref_full_name"  id="ref_full_name" placeholder="Full Name*" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
            <label for="ref_full_name" class="
            pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                                        ">Full Name*</label>
        </div>
        <div class="relative mt-8">
            <input required type="text" v-model="character_reference.ref_company" id="ref_company" placeholder="Company*" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
            <label for="ref_company" class="
            pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                                        ">Company*</label>
        </div>
        <div class="relative mt-8">
            <input required type="text" v-model="character_reference.ref_position" id="ref_position" placeholder="Position*" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
            <label for="ref_position" class="
                                        pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                                        ">Position*</label>
        </div>
        <div class="relative mt-8">
            <input required type="text" v-model="character_reference.ref_contact" id="ref_contact" placeholder="Contact*" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
            <label for="ref_contact" class="
                                        pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                                        ">Contact*</label>
        </div>
        <div class="relative mt-8">
            <input required type="text" v-model="character_reference.ref_email" id="ref_email" placeholder="Email Address*" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
            <label for="ref_email" class="
                                        pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                                        ">Email Address*</label>
        </div>
    </div>
</template>