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
    <div>
        <form @submit.prevent="submit_application_forms">
            <div>
                <input class="border-b border-[#D1D1D1] outline-none h-[7dvh]" type="text" name="first_name" placeholder="First Name*" v-model="application_forms.first_name">
                <input class="border-b border-[#D1D1D1] outline-none h-[7dvh]" type="text" name="middle_name" placeholder="Middle Name*" v-model="application_forms.middle_name">
                <input class="border-b border-[#D1D1D1] outline-none h-[7dvh]" type="text" name="last_name" placeholder="Last Name*" v-model="application_forms.last_name">
                <input class="border-b border-[#D1D1D1] outline-none h-[7dvh]" type="text" name="extension_name" placeholder="Extension Name*" v-model="application_forms.extension_name">
                <input class="border-b border-[#D1D1D1] outline-none h-[7dvh]" type="date" name="birthdate*" v-model="application_forms.birthdate">
                <input class="border-b border-[#D1D1D1] outline-none h-[7dvh]" type="number" name="age" placeholder="Age" v-model="application_forms.age">
                <input class="border-b border-[#D1D1D1] outline-none h-[7dvh]" type="text" name="present_address" placeholder="Present Address" v-model="application_forms.present_address">
            </div>
            <div>
                <input type="radio" name="position_id" v-model="application_forms.position_id" value="1">
                <input type="radio" name="position_id" v-model="application_forms.position_id" value="2">
                <input type="radio" name="position_id" v-model="application_forms.position_id" value="3">
            </div>

            
            <input type="text" name="facebook_link" placeholder="Facebook Link" v-model="application_forms.facebook_link">
            <!-- Radio Buttons -->
            <div>
                <h1>
                    Do you have BPO
                </h1>
                <span>
                    <input type="radio" name="bpo_exp_yes" value="yes" v-model="application_forms.bpo_exp">
                    <label for="bpo_exp_yes">Yes</label>
                    <input type="radio" name="bpo_exp_no" value="no" v-model="application_forms.bpo_exp">
                    <label for="bpo_exp_no">No</label>
                </span>
                <span>
                    <input type="radio" name="shift_sched" value="yes" v-model="application_forms.shift_sched">
                    <input type="radio" name="shift_sched" value="no" v-model="application_forms.shift_sched">
                </span>
                <span>
                    <input type="radio" name="work_report" value="yes" v-model="application_forms.work_report">
                    <input type="radio" name="work_report" value="no" v-model="application_forms.work_report">
                </span>
                <span>
                    <input type="radio" name="platform_id" value="yes" v-model="application_forms.platform_id">
                    <input type="radio" name="platform_id" value="no" v-model="application_forms.platform_id">
                </span>
            </div>
            <input type="text" name="ref_full_name" v-model="application_forms.ref_full_name">
            <input type="text" name="ref_position" v-model="application_forms.ref_position">
            <input type="text" name="ref_contact_num" v-model="application_forms.ref_contact_num">
            <input type="text" name="ref_email" v-model="application_forms.ref_email">
            <input type="text" name="applicant_cv" v-model="application_forms.applicant_cv">
            <input type="text" name="portfolio_link" v-model="application_forms.applicant_portfolio_link">

            <span>
                
            </span>
            <input type="submit">
        </form>
    </div>
</template>