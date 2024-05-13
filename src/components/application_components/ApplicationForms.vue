<script setup>
import { ref } from 'vue'
import PersonalInformation from './input_forms/PersonalInformation.vue';
import ContactInformation from './input_forms/ContactInformation.vue';
import DesiredPosition from './input_forms/DesiredPosition.vue';

</script>

<template>
    <div class="h-full w-full bg-blue-500 ">
        <div class="relative w-screen flex flex-col items-center justify-center">
            <!-- Header -->
            <h1 class="font-bold text-white text-3xl mt-10">Application Form</h1>
            <!-- Contents -->
            <form @submit.prevent="">
                <PersonalInformation />
                <ContactInformation />
                <DesiredPosition/>
            </form>
        </div>
    </div>
</template>