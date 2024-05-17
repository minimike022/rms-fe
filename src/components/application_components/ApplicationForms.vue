<script setup>
import { ref, computed, watch } from 'vue'
import axios from 'axios'
import PersonalInformation from './input_forms/PersonalInformation.vue';
import ContactInformation from './input_forms/ContactInformation.vue';
import DesiredPosition from './input_forms/DesiredPosition.vue';
import EducationalBackground from './input_forms/EducationalBackground.vue';
import Platform from './input_forms/Platform.vue'
import CharacterReference from './input_forms/CharacterReference.vue'
import PersonalCV from './input_forms/PersonalCV.vue';

const privacy_policy = ref(false)
const data_accuracy = ref(false)
var form_data = new FormData()

// const form_data = ref({
//     first_name: '',
//     middle_name: '',
//     last_name: '',
//     extension_name: '',
//     birthdate: null,
//     age: null,
//     present_address: '',
//     mobile_number: '',
//     email_address: '',
//     facebook_link: '',
//     selected_position: '',
//     BPO_exp: '',
//     shift: '',
//     holiday: '',
//     work_site: '',
//     educational_attainment: '',
//     degree_course: '',
//     school_name: '',
//     platform: [],
//     ref_full_name: '',
//     ref_company: '',
//     ref_position: '',
//     ref_contact: '',
//     ref_email:'',
//     selected_file: '',
//     portfolio_link:''
// })

const receive_personal_info = (personal_info) => {
    form_data.append('first_name', personal_info.first_name)
    form_data.append('middle_name', personal_info.middle_name)
    form_data.append('last_name', personal_info.last_name)
    form_data.append('extension_name', personal_info.extension_name)
    form_data.append('birthdate', personal_info.birthdate)
    form_data.append('age', personal_info.age)
    form_data.append('present_address', personal_info.present_address)
}

const receive_contacts_info = (contact_info) => {
    form_data.append('mobile_number', contact_info.mobile_number)
    form_data.append('email_address', contact_info.email_address)
    form_data.append('facebook_link', contact_info.facebook_link)
}

const receive_desired_position = (desired_position) => {
    form_data.append('position_id',desired_position.selected_position)
    form_data.append('bpo_exp',desired_position.BPO_exp)
    form_data.append('shift_sched',desired_position.shift)
    form_data.append('work_report',desired_position.holiday)
    form_data.append('work_site_location',desired_position.work_site)
}

const receive_educational_background = (educational_info) => {
    form_data.append('highest_education', educational_info.educational_attainment)
    form_data.append('degree_course', educational_info.degree_course)
    form_data.append('school_name', educational_info.school_name)
}

const receive_platform_info = (platform_info) => {
    form_data.append('platform[]',)
}

// const receive_character_reference = (character_reference) => {
//     form_data.value.ref_full_name = character_reference.ref_full_name,
//     form_data.value.ref_company = character_reference.ref_company,
//     form_data.value.ref_position = character_reference.ref_position,
//     form_data.value.ref_contact = character_reference.ref_contact,
//     form_data.value.ref_email = character_reference.ref_email
// }

// const receive_personal_cv = (personal_cv) => {
//     form_data.value.selected_file = personal_cv.selected_file,
//     form_data.value.portfolio_link = personal_cv.portfolio_link
// }



const checked = computed(() => {
    return privacy_policy.value && data_accuracy.value
})


</script>

<template>
    <div class="h-full w-full bg-blue-700 ">
        <div class="relative w-screen flex flex-col items-center justify-center">
            <!-- Header -->
            <h1 class="font-bold text-white text-3xl mt-10">Application Form</h1>
            <!-- Contents -->
            <form @submit.prevent="submit_forms" class="my-5">
                <PersonalInformation @personal_info="receive_personal_info" />
                <ContactInformation @contact_info="receive_contacts_info" />
                <DesiredPosition @desired_position="receive_desired_position" />
                <EducationalBackground @educational_info="receive_educational_background" />
                <div class="w-[95dvh] h-auto mt-6 px-11 py-8
                        drop-shadow-xl
                        bg-white  rounded-2xl">
                    <Platform @platform_info="receive_platform_info" />
                    <CharacterReference @character_reference="receive_character_reference" />
                    <PersonalCV @personal_cv="receive_personal_cv"/>
                    <div class="my-4 grid grid-cols-1 gap-y-3">
                        <label class="flex items-center">
                            <input type="checkbox" v-model="privacy_policy">
                            <h1 class="ml-2">I have read and agree to the <span class="text-blue-500"> Data Privacy Consent</span>.
                            </h1>
                        </label>

                        <label class="flex items-center">
                            <input type="checkbox" v-model="data_accuracy">
                            <h1 class="ml-2">I hereby certify that all information above is true and correct.</h1>
                        </label>
                    </div>
                    
                    <input :disabled="!checked" type="submit" class="w-full h-[10dvh] rounded-lg 
                    shadow-blue-500 shadow-md disabled:shadow-blue-400
                    text-white font-bold text-xl
                    disabled:bg-blue-400
                     bg-blue-600">
                </div>
            </form>
        </div>
    </div>
</template>