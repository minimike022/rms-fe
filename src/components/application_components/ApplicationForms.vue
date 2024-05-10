<script setup>
import {ref} from 'vue'
const application_forms = ref({
    position_id: null,
    first_name: "",
    middle_name: "",
    last_name: "",
    extension_name: "",
    birthdate: "",
    age: null,
    present_address: "",
    highest_education: "",
    email_address:"",
    facebook_link: "",
    bpo_exp: "",
    shift_sched: "",
    work_report: "",
    work_site_location: "",
    platform_id: null,
    ref_full_name: "",
    ref_position: "",
    ref_contact_num: "",
    ref_email: "",
    applicant_cv: "",
    applicant_portfolio_link:"",
})

const submit_application_forms = () => {
    const positionID = parseInt(application_forms.value.position_id)
}

</script>

<template>
    <div class="h-[100dvh] w-full bg-blue-500 ">
            
            <div class="relative w-screen flex flex-col items-center justify-center">
                <!-- Header -->
                <div class="mt-[10dvh]">
                    <h1 class="font-bold text-white text-3xl">Application Form</h1>
                </div>
                <!-- Contents -->
                <div>
                    <form @submit.prevent="">
                        <div class="w-[95dvh] h-[65dvh] mt-6 px-10 py-4 
                        drop-shadow-xl
                        bg-white  rounded-2xl">
                            <!--Personal Information-->
                            <h1>Personal Information</h1>
                        </div>
                    </form>
                </div>
            </div>
    </div>
</template>