<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import dash from 'lodash'

const application_status = ref([])
const search_applicants = ref('')

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
    console.log(search_applicants.value)
}, 1000)

</script>


<template>
    <div class="my-8">
        <div class="relative flex justify-center items-center">
            <div class="absolute left-0">
                <div class="flex h-[5.5dvh] rounded-lg items-center drop-shadow-md">
                    <input type="text" placeholder="Search" @input="search" v-model="search_applicants" class="h-full w-[35vh] outline-none border-blue-600 border pl-4 rounded-l-md text-gray-600">
                    <div class="w-[10dvh] h-full bg-blue-600 rounded-r-md flex items-center justify-center">
                        <img src="/src/assets/search.svg" alt="">
                    </div>
                </div>
            </div>
            <h1 class="text-2xl text-center drop-shadow-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0390EA] to-blue-800 w-[35dvh] mt-2">
                Application Status
            </h1>
        </div>
        <table class="w-full relative">
            <thead>
                <tr class="text-blue-500 text-sm">
                    <th class="text-center h-[10dvh] px-3">Full Name</th>
                    <th class="text-center h-[10dvh] px-3">Position Name</th>
                    <th class="text-center h-[10dvh] px-3">Interviewee</th>
                    <th class="text-center h-[10dvh] px-3">Interview Date</th>
                    <th class="text-center h-[10dvh] px-3">Interview Time</th>
                    <th class="text-center h-[10dvh] px-3">Application Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="app_status in application_status"
                    class="border-y h-[10dvh] text-center text-sm text-gray-600 hover:bg-gray-100 cursor-pointer">
                    <td class="px-3 font-bold">{{ app_status.first_name }} {{ app_status.last_name }} {{
                        app_status.extension_name }} </td>
                    <td class="px-3">{{ app_status.position_name }}</td>
                    <td class="px-3">
                        <h1>{{ app_status.interviewee_name }}</h1>
                    </td>
                    <td class="px-3">
                        <h1>{{ app_status.interview_date }}</h1>
                    </td>
                    <td class="px-3">
                        <h1>{{ app_status.interview_time }}</h1>
                    </td>
                    <td class="text-center font-bold"
                        :class="{ 'text-green-500': app_status.application_status === 'Received' }">{{
                            app_status.application_status }}</td>
                    <td class="text-blue-700 font-bold cursor-pointer">
                        <h1 v-if="app_status.application_status === 'Received'" class="text-xs"> ASSIGN <br> INTERVIEW </h1></td>
                </tr>
            </tbody>
            <div class="absolute top-0">
                hello world
            </div>
        </table>
    </div>
</template>