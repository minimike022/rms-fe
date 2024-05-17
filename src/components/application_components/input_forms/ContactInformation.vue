<script setup>
import {ref, watch} from 'vue'

const emit = defineEmits(['contact_info'])


const contact_info = ref({
    mobile_number: '',
    email_address: '',
    facebook_link: ''
})

const contactInfo_toParent = () => {
    emit('contact_info', contact_info.value)
}


watch(contact_info.value,
    () => {
        contactInfo_toParent()
    }
)

</script>

<template>
    <!--Contact Information-->
    <div class="w-[95dvh] h-auto mt-6 px-11 py-8
                        drop-shadow-xl
                        bg-white  rounded-2xl">
        <h1 class="text-2xl font-semibold">Contact Information</h1>
        <!-- Input Forms -->
        <div class="grid grid-cols-1  gap-y-8
                                mt-4">
            <div class="relative">
                <input required type="text" v-model.lazy="contact_info.mobile_number" placeholder="Mobile Number*" id="mobile_number" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="mobile_number" class="
                pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                                        ">Mobile Number*</label>
            </div>
            <div class="relative">
                <input required type="text" v-model.lazy="contact_info.email_address" placeholder="Email Address*" id="email_address" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="email_address" class="
                pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                                        ">Email Address*</label>
            </div>
            <div class="relative">
                <input required type="text" v-model.lazy="contact_info.facebook_link" placeholder="Facebook_Username/link" id="facebook_link" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="facebook_link" class="
                pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                                        ">Facebook_Username/link</label>
            </div>
        </div>
    </div>
</template>