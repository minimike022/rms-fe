<script setup>
import { ref } from 'vue'
import PersonalInformation from './input_forms/PersonalInformation.vue';
import ContactInformation from './input_forms/ContactInformation.vue';
import DesiredPosition from './input_forms/DesiredPosition.vue';
import EducationalBackground from './input_forms/EducationalBackground.vue';
import Platform from './input_forms/Platform.vue'
import CharacterReference from './input_forms/CharacterReference.vue'
import PersonalCV from './input_forms/PersonalCV.vue';

const formData = ref({
    first_name: '',
    middle_name: '',
    last_name: '',
    extension_name: '',
    birthdate: null,
    age: null,
    present_address: ''
})


const receive_contacts_info = (contact_info) => {
}



const receive_personal_info = (personal_info) => {
    formData.value.first_name = personal_info.first_name
    formData.value.middle_name = personal_info.middle_name
    formData.value.last_name = personal_info.last_name
    formData.value.extension_name = personal_info.extension_name
    formData.value.birthdate = personal_info.birthdate
    formData.value.age = personal_info.age
    formData.value.present_address = personal_info.present_address


}

const submit_forms = () => {
    console.log(formData.value)
}



</script>

<template>
    <div class="h-full w-full bg-blue-700 ">
        <div class="relative w-screen flex flex-col items-center justify-center">
            <!-- Header -->
            <h1 class="font-bold text-white text-3xl mt-10">Application Form</h1>
            <!-- Contents -->
            <form @submit.prevent="submit_forms" class="my-5">
                <PersonalInformation @personal_info="receive_personal_info"/>
                <ContactInformation @contact_info="receive_contacts_info" />
                <DesiredPosition />
                <EducationalBackground />
                <div class="w-[95dvh] h-auto mt-6 px-11 py-8
                        drop-shadow-xl
                        bg-white  rounded-2xl">
                    <Platform/>
                    <CharacterReference/>
                    <PersonalCV/>
                </div>
                <input type="submit">
            </form>
        </div>
    </div>
</template>