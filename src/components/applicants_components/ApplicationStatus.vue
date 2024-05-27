<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import dash from 'lodash'
import AssignInterview from './AssignInterview.vue';

const status_id = ref('')
const application_status = ref([])
const search_applicants = ref('')
const assign_interview = ref(false)

const get_application_status = () => {
    axios.get('http://127.0.0.1:3000/application/status').then(
        res => {
            application_status.value = res.data.application_status
            console.log(application_status.value)
        }
    )
}

onMounted(() => {
    get_application_status()
})

const search = dash.debounce(() => {
    axios.get(`http://127.0.0.1:3000/application/status?q=${search_applicants.value}`).then(res => {
        application_status.value = res.data.application_status
    })
}, 500)

const assign_interview_modal = (id) => {
    status_id.value = id
    assign_interview.value = !assign_interview.value
}

</script>

<template>
    <div class="relative my-11 px-4 shadow-lg rounded-lg">
        <div class="relative flex items-center">
            <div class="flex h-[7dvh] rounded-lg items-center drop-shadow-md">
                <input type="text" placeholder="Search" @input="search" v-model="search_applicants"
                    class="h-full w-[35vh] outline-none border-blue-600 border pl-4 rounded-l-md text-gray-600">
                <div class="w-[10dvh] h-full bg-blue-600 rounded-r-md flex items-center justify-center">
                    <img src="/src/assets/search.svg" alt="">
                </div>
            </div>
        </div>
        <table class="w-full relative mt-6">
            <thead>
                <tr class="text-blue-500 text-[18px] text-left">
                    <th class="h-[10dvh] px-3">Full Name</th>
                    <th class="h-[10dvh] px-3">Position Name</th>
                    <th class="h-[10dvh] px-3">Interviewee</th>
                    <th class="h-[10dvh] text-center px-3">Interview Date</th>
                    <th class="h-[10dvh] text-center px-3">Interview Time</th>
                    <th class="h-[10dvh] text-center px-3">Application Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="app_status in application_status"
                    class="border-y h-[10dvh] text-left text-sm text-gray-600 hover:bg-gray-100 cursor-pointer">
                    <td class="px-3 font-bold">{{ app_status.first_name }} {{ app_status.last_name }} {{
                        app_status.extension_name }} </td>
                    <td class="px-3">{{ app_status.position_name }}</td>
                    <td class="px-3">
                        <h1>{{ app_status.interviewee_name }}</h1>
                    </td>
                    <td class=" text-center px-3">
                        <h1>{{ app_status.interview_date }}</h1>
                    </td>
                    <td class=" text-center px-3">
                        <h1>{{ app_status.interview_time }}</h1>
                    </td>
                    <td class="font-bold px-3 text-center "
                        :class="{ 'text-green-500': app_status.application_status === 'Received' }">
                        {{ app_status.application_status }}
                    </td>
                    <td class="text-blue-700 font-bold cursor-pointer">
                        <h1 v-if="app_status.application_status === 'Received'" class="text-xs cursor-pointer" @click="assign_interview_modal(app_status.application_status_id)"> ASSIGN <br> INTERVIEW
                        </h1>
                        <h1 v-else class="text-green-500">UPDATE</h1>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="absolute top-0 w-full flex justify-center" v-if="assign_interview">
            <AssignInterview :status_id="status_id" @assign_interview="assign_interview = !assign_interview"/>
        </div>
    </div>
</template>