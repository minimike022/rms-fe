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


const form_data = ref({
    position_id: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    extension_name: '',
    birthdate: null,
    age: null,
    present_address: '',
    highest_education: '',
    degree_course: '',
    school_name: '',
    mobile_number: '',
    email_address: '',
    facebook_link: '',
    bpo_exp: '',
    shift_sched: '',
    work_report: '',
    work_site_location: '',
    platforms: '',
    ref_full_name: '',
    ref_company: '',
    ref_position: '',
    ref_contact_num: '',
    ref_email:'',
    applicant_cv: '',
    applicant_portfolio:''
})

const receive_personal_info = (personal_info) => {
    form_data.value.first_name = personal_info.first_name
    form_data.value.middle_name = personal_info.middle_name
    form_data.value.last_name = personal_info.last_name
    form_data.value.extension_name = personal_info.extension_name
    form_data.value.birthdate = personal_info.birthdate
    form_data.value.age = personal_info.age
    form_data.value.present_address = personal_info.present_address
}

const receive_contacts_info = (contact_info) => {
    form_data.value.mobile_number = contact_info.mobile_number
    form_data.value.email_address = contact_info.email_address
    form_data.value.facebook_link = contact_info.facebook_link
}

const receive_desired_position = (desired_position) => {
    form_data.value.position_id = desired_position.selected_position
    form_data.value.bpo_exp = desired_position.BPO_exp
    form_data.value.shift_sched = desired_position.shift
    form_data.value.work_report = desired_position.holiday
    form_data.value.work_site_location = desired_position.work_site
}

const receive_educational_background = (educational_info) => {
    form_data.value.highest_education = educational_info.educational_attainment
    form_data.value.degree_course = educational_info.degree_course
    form_data.value.school_name = educational_info.school_name
}

const receive_platform_info = (platform_info) => {
    form_data.value.platforms = platform_info
}

const receive_character_reference = (character_reference) => {
    form_data.value.ref_full_name = character_reference.ref_full_name
    form_data.value.ref_company = character_reference.ref_company
    form_data.value.ref_position = character_reference.ref_position
    form_data.value.ref_contact_num = character_reference.ref_contact
    form_data.value.ref_email = character_reference.ref_email
}

const receive_personal_cv = (personal_cv) => {
    form_data.value.applicant_cv = personal_cv.selected_file
    form_data.value.applicant_portfolio = personal_cv.portfolio_link
}

const checked = computed(() => {
    return privacy_policy.value && data_accuracy.value
})

const submit_forms = () => {
    axios.post(`http://127.0.0.1:3000/applicants/add`, form_data.value).then(res => {
        console.log(res)
    })
}


</script>

<template>
    <div class="h-full w-full bg-blue-500 ">
        <div class="relative w-screen flex flex-col items-center justify-center">
            <!-- Header -->
            <h1 class="font-bold text-white text-3xl mt-10">Application Form</h1>
            <!-- Contents -->
            <form @submit.prevent="submit_forms" class="my-5 w-[120dvh]">
                <PersonalInformation @personal_info="receive_personal_info" />
                <ContactInformation @contact_info="receive_contacts_info" />
                <DesiredPosition @desired_position="receive_desired_position" />
                <EducationalBackground @educational_info="receive_educational_background" />
                <div class="h-auto mt-6 px-11 py-8
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
                    
                    <input :disabled="!checked" type="submit" class="w-full h-[14dvh] rounded-lg 
                    shadow-md 
                    text-white font-bold text-xl
                    disabled:bg-blue-400
                     bg-blue-600">
                </div>
            </form>
        </div>
    </div>
</template>