<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import router from '../../../router';
import AssessApplicants from '../../../components/applicants_components/AssessApplicants.vue';

const props = defineProps(['id'])

const assessment_modal = ref(false)
const applicants_data = ref([])

const get_applicants_data = () => {
    axios.get(`http://127.0.0.1:3000/applicants/${props.id}`).then(res => {
        applicants_data.value = res.data.Applicants
    })
}

const go_back = () => {
    router.push('/applicants_status')
}

onMounted(() => {
    get_applicants_data()
})
</script>

<template>

    <div v-for="applicant in applicants_data" class="px-2 flex flex-col">
        <div class="flex items-center justify-between mt-8 mb-4">
            <span class="bg-blue-600 flex items-center py-2 px-4 rounded-lg cursor-pointer" @click="go_back()">
                <img src="/src/assets/back_button.svg" alt="" class="w-[24px]">
                <h1 class="text-white font-bold text-sm">Go Back</h1>
            </span>

        </div>
        <div>
            <div class="w-full h-[7dvh] rounded-lg px-4 flex items-center bg-blue-600">
                <h1 class="text-lg font-bold text-white">
                    Personal Information
                </h1>
            </div>
            <div class="my-8 grid grid-cols-3 gap-x-4 gap-y-7 px-4">
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">First Name: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.first_name }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Middle Name: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold"
                        v-if="applicant.middle_name !== ''">{{ applicant.middle_name }}</h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold" v-else>
                        N/A</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Last Name: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.last_name }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Extension Name: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold"
                        v-if="applicant.extension_name !== ''">{{ applicant.extension_name }}</h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold" v-else>
                        N/A</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Birthdate: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.birthdate }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Age: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.age }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Present Address: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.present_address }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Mobile Number: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold"
                        v-if="applicant.mobile_number !== ''">{{ applicant.mobile_number }}</h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold" v-else>
                        N/A</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Email Address: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.email_address }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Facebook Link: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.facebook_link }}</h1>
                </div>
            </div>
        </div>
        <div>
            <div class="w-full h-[7dvh] rounded-lg px-4 flex items-center bg-blue-600">
                <h1 class="text-lg font-bold text-white">
                    Educational Attainment
                </h1>
            </div>
            <div class="my-8 px-4 grid grid-cols-1 gap-y-7">
                <div class="flex items-center ">
                    <h1 class="font-bold text-blue-600">Highest Education: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold"
                        v-if="applicant.highest_education !== ''">{{ applicant.highest_education }}</h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold" v-else>
                        N/A</h1>
                </div>
                <div class="flex items-center ">
                    <h1 class="font-bold text-blue-600">Degree Course: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold"
                        v-if="applicant.degree_course !== ''">{{ applicant.degree_course }}</h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold" v-else>
                        N/A</h1>
                </div>
                <div class="flex items-center ">
                    <h1 class="font-bold text-blue-600">School Name: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold"
                        v-if="applicant.school_name !== ''">{{ applicant.school_name }}</h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold" v-else>
                        N/A</h1>
                </div>

            </div>
        </div>
        <div>
            <div class="w-full h-[7dvh] rounded-lg px-4 flex items-center bg-blue-600">
                <h1 class="text-lg font-bold text-white">
                    Others
                </h1>
            </div>
            <div class="my-8 px-4 grid grid-cols-1 gap-y-7">
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Has BPO Experience: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.bpo_exp }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Willing to work night shift: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.shift_sched }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Willing to work on weekdays and holidays: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.work_report }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Willing to work onsite in Sto. Domingo. Nueva Ecija: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.work_site_location }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Where did you heard about us: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold"> {{
                        applicant.platforms.toString() }} </h1>

                </div>

            </div>
        </div>
        <div>
            <div class="w-full h-[7dvh] rounded-lg px-4 flex items-center bg-blue-600">
                <h1 class="text-lg font-bold text-white">
                    Referral
                </h1>
            </div>
            <div class="my-8 px-4 grid grid-cols-1 gap-y-7">
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Full Name: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.ref_full_name }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Company: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.ref_company }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Position: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.ref_position }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Contact Number: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.ref_contact_num }}</h1>
                </div>
                <div class="flex items-center">
                    <h1 class="font-bold text-blue-600">Email Address: </h1>
                    <h1 class="w-auto h-auto py-2 px-4 rounded-lg ml-2 text-gray-600 font-bold">{{
                        applicant.ref_email }}</h1>
                </div>
            </div>
        </div>
        <div>
            <div class="w-full h-[7dvh] px-4 rounded-lg flex items-center bg-blue-600">
                <h1 class="text-lg font-bold text-white">
                    Assessments
                </h1>
            </div>
            <div class="flex flex-col justify-center my-8 px-4">
                <div class="mb-4">
                    <h1 class="text-blue-600 hover:text-blue-800 font-bold cursor-pointer" @click="assessment_modal = !assessment_modal">Add Assessment</h1>
                </div>
                <h1>
                    None
                </h1>
            </div>
        </div>
    </div>
    <div v-if="assessment_modal" class="fixed top-0 right-0 bg-white w-[53dvh] h-[100%] z-[10] shadow-lg p-6">
        <AssessApplicants @close_modal="assessment_modal = false"/>
    </div>
</template>