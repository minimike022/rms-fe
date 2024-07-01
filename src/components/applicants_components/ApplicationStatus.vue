<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import dash from 'lodash'
import UpdateStatus from './UpdateStatus.vue';
import router from '../../router';

const status_id = ref(null)

const application_status = ref([])
const search_applicants = ref('')
const update_status = ref(false)

const no_of_pages = ref()
var current_page = 1
const limit = ref(5)

const sort_order = ref({
    col: "AD.first_name",
    order: "ASC"
})


const get_application_status = () => {
    axios.get(`http://127.0.0.1:3000/application/status?page=${current_page}&limit=${limit.value}&sort_col=${sort_order.value.col}&sort_order=${sort_order.value.order}`).then(
        res => {
            application_status.value = res.data.application_status
            no_of_pages.value = Math.ceil(res.data.count / limit.value)
            console.log(application_status.value)
        }
    )
}

const get_page = (page) => {
    current_page = page

    axios.get(`http://127.0.0.1:3000/application/status?page=${current_page}&limit=${limit.value}&sort_col=${sort_order.value.col}&sort_order=${sort_order.value.order}`).then(res => {
        application_status.value = res.data.application_status
    })
    console.log(sort_order.value)
}

const sort = (sort_col) => {
    current_page = 1
    sort_order.value.col = sort_col

    if (sort_order.value.order === "ASC") {
        sort_order.value.order = "DESC"
    } else {
        sort_order.value.order = "ASC"
    }
    axios.get(`http://127.0.0.1:3000/application/status?q=${search_applicants.value}&page=${current_page}&limit=${limit.value}&sort_col=${sort_order.value.col}&sort_order=${sort_order.value.order}`).then(res => {
        application_status.value = res.data.application_status
        console.log(application_status.value)
    })
}

onMounted(() => {
    get_application_status()
})

watch(() => limit.value, () => {
    get_application_status()
})

const go_to = (id) => {
    router.push(`/applicants_data/${id}`)
}

const search = dash.debounce(() => {
    axios.get(`http://127.0.0.1:3000/application/status?q=${search_applicants.value}&page=${current_page}&limit=${limit.value}&sort_col=${sort_order.value.col}&sort_order=${sort_order.value.order}`).then(res => {
        application_status.value = res.data.application_status
        no_of_pages.value = Math.ceil(res.data.count / limit.value)
        console.log(no_of_pages.value)
    })
}, 500)

const update_status_modal = (id) => {
    status_id.value = id

    update_status.value = !update_status.value
}

</script>

<template>
    <div class="my-8">
        <div class="flex items-center justify-between">
            <div class="flex h-[7dvh] rounded-lg items-center drop-shadow-md">
                <input type="text" placeholder="Search" @input="search" v-model="search_applicants"
                    class="h-full w-[35vh] outline-none border-blue-600 border pl-4 rounded-l-md text-gray-600">
                <div class="w-[10dvh] h-full bg-blue-600 rounded-r-md flex items-center justify-center">
                    <img src="/src/assets/search.svg" alt="">
                </div>
            </div>
            <div class="cursor-pointer bg-blue-600 h-[7dvh] w-[25dvh] rounded-md flex items-center justify-center">
                <h1 class="text-white font-bold">Generate Report</h1>
            </div>
        </div>
        <table class="w-full mt-4 shadow-lg rounded-lg bg-white">
            <thead>
                <tr class="text-blue-600 text-[16px] text-left">
                    <th class="h-[10dvh] px-3 cursor-pointer" @click="sort('AD.first_name')">Full Name</th>
                    <th class="h-[10dvh] px-3 cursor-pointer" @click="sort('JP.position_name')">Position Name</th>
                    <th class="h-[10dvh] px-3">Interviewee</th>
                    <th class="h-[10dvh] text-center px-3">Interview Date</th>
                    <th class="h-[10dvh] text-center px-3">Interview Time</th>
                    <th class="h-[10dvh] text-center px-3 cursor-pointer" @click="sort('ASL.application_status_name')">
                        Application Status</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="app_status in application_status"
                    class="h-[10dvh] text-left text-sm text-blue-600">
                    <td class="px-3 font-bold cursor-pointer hover:text-gray-600" @click="go_to(app_status.applicant_id)" >{{ app_status.first_name }} {{ app_status.last_name }} {{
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
                    <td class="font-bold text-center">
                        <div class=" text-xs h-[4dvh] rounded-lg flex justify-center items-center p-4"
                            :class="{ 'text-green-500': app_status.application_status === 'Received', 'text-yellow-500': app_status.application_status === 'Screening', 'text-red-500': app_status.application_status === 'Shortlisted', 'text-blue-500': app_status.application_status === 'Interview with Hiring Manager', 'text-green-600': app_status.application_status === 'Onboarding', 'text-violet-500': app_status.application_status === 'Interview with HR' }">
                            <h1>
                                {{ app_status.application_status }}
                            </h1>
                        </div>
                    </td>
                    <td class="flex justify-center items-center h-[10dvh] px-3 z-[9999]"
                        @click="update_status_modal(app_status.application_status_id)">
                        <div class="flex items-center justify-center">
                            <img src="/src/assets/edit.svg" alt="">
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="fixed bg-white w-[53dvh] h-[100%] z-[10] top-0 right-0 shadow-lg px-4 py-6" v-if="update_status">
            <UpdateStatus :status_id="status_id" @hide_modal="update_status = !update_status"
                @update_status="get_application_status()" />
        </div>

        <div class=" font-bold px-4 my-4 w-full flex justify-end items-center text-blue-500">
            <button :disabled="current_page <= 1" @click="get_page(current_page -= 1)"
                class="cursor-pointer h-[6dvh] rounded-md w-auto px-4 flex items-center justify-center enabled:border enabled:border-blue-500 enabled:hover:bg-blue-500 hover:text-white disabled:text-gray-400 disabled:bg-gray-200 mr-2">
                <h1>Prev</h1>
            </button>
            <div @click="get_page(index)" :class="{ 'bg-blue-500 text-white': current_page === index }"
                v-for="index in no_of_pages"
                class="cursor-pointer rounded-md border border-blue-500 mr-2  h-[6dvh] w-[6dvh] flex items-center justify-center hover:bg-blue-500 hover:text-white transition ease-out duration-400">
                <h1>
                    {{ index }}
                </h1>
            </div>
            <button :disabled="current_page >= no_of_pages" @click="get_page(current_page += 1)"
                class="cursor-pointer  h-[6dvh] rounded-md w-auto px-4 flex items-center justify-center enabled:border enabled:border-blue-500 enabled:hover:bg-blue-500 hover:text-white disabled:text-gray-400 disabled:bg-gray-200">
                <h1>Next</h1>
            </button>
        </div>
    </div>
</template>