<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import AddJobsModal from './AddJobsModal.vue';
import dash from 'lodash'
import UpdateJobsModal from './UpdateJobsModal.vue';

const job_listing = ref([])
const is_add_active = ref(false)
const is_update_active = ref(false)
const search_jobs = ref('')

const job_position_status = ref({})

const no_of_pages = ref()
var current_page = 1
const limit = 4

const get_jobs_data = () => {
    axios.get(`http://127.0.0.1:3000/jobs/search?page=${current_page}&limit=${limit}`).then(res => {
        no_of_pages.value = Math.ceil(res.data.count / limit)
        job_listing.value = res.data.job_positions
    })
}

const get_page = (page) => {
    current_page = page

    axios.get(`http://127.0.0.1:3000/jobs/search?q=${search_jobs.value}&page=${current_page}&limit=${limit}`).then(res => {
        job_listing.value = res.data.job_positions
    })
}

const update_jobs_data = (position_id, position_name, department_id, department_name, position_status, available_slot) => {
    job_position_status.value = {
        position_id: position_id,
        position_name: position_name,
        department_name: department_name,
        department_id: department_id,
        position_status: position_status,
        available_slot: available_slot,
    }
    is_update_active.value = true
}

onMounted(() => {
    get_jobs_data()
})

const search = dash.debounce(() => {
    axios.get(`http://127.0.0.1:3000/jobs/search?q=${search_jobs.value}&page=${current_page}&limit=${limit}`).then(res => {
        no_of_pages.value = Math.ceil(res.data.count / limit)
        job_listing.value = res.data.job_positions
        console.log(res.data)
    })
}, 500)

</script>
<template>
    <div class="w-full rounded-lg my-8">
        <div class="flex justify-between items-center">
            <div class="flex h-[7dvh] rounded-lg items-center drop-shadow-md">
                <input type="text" placeholder="Search" @input="search" v-model="search_jobs"
                    class="h-full w-[35vh] outline-none border-blue-600 border pl-4 rounded-l-md text-gray-600">
                <div class="w-[10dvh] h-full bg-blue-600 rounded-r-md flex items-center justify-center">
                    <img src="/src/assets/search.svg" alt="">
                </div>
            </div>
            <button @click="is_add_active = true" class="bg-blue-600 h-[7dvh] w-[19vh] outline-none rounded-md 
                    text-center text-white font-bold
                    shadow-md">
                <h1>Add Jobs</h1>
            </button>
        </div>

        <table class="relative w-full h-auto mt-4  shadow-lg rounded-lg">
            <thead>
                <tr class="text-blue-500 text-[18px]">
                    <th class="text-left h-[10dvh] px-3">Position</th>
                    <th class="text-left h-[10dvh] px-3">Department</th>
                    <th class="text-center h-[10dvh] px-3">Available Slots</th>
                    <th class="text-center h-[10dvh] px-3">Status</th>
                    <th class="text-center h-[10dvh] px-3">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="jobs in job_listing" class="text-gray-600">
                    <td class="text-left h-[10dvh] px-3 font-bold">{{ jobs.position_name }}</td>
                    <td class="text-left text-sm h-[10dvh] px-3">{{ jobs.department_name }}</td>
                    <td class="text-center text-sm h-[10dvh] px-3">{{ jobs.available_slot }}</td>
                    <td class="text-center text-sm h-[10dvh] font-bold text-white">
                        <div class="w-[17dvh] h-[4dvh] rounded-lg flex items-center justify-center"
                            :class="{ 'bg-red-500': jobs.position_status === 'Urgent', 'bg-green-500': jobs.position_status === 'Open', 'bg-yellow-500': jobs.position_status === 'Filled' }">
                            <h1>{{ jobs.position_status }}</h1>
                        </div>
                    </td>
                    <td class="flex justify-center items-center h-[10dvh]"
                        @click="update_jobs_data(jobs.position_id, jobs.position_name, jobs.department_id, jobs.department_name, jobs.position_status, jobs.available_slot)">
                        <div
                            class="w-[6dvh] h-[6dvh] shadow-md rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-1  00">
                            <img src="/src/assets/edit.svg" alt="">
                        </div>
                    </td>
                </tr>
            </tbody>

            <div class="flex items-center justify-center w-full" v-if="is_add_active">
                <AddJobsModal @add_jobs="is_add_active = !is_add_active" />
            </div>
            <div class="flex items-center justify-center w-full" v-if="is_update_active">
                <UpdateJobsModal :job_position="job_position_status" @update_modal="is_update_active = false" />
            </div>
        </table>
        <div class="absolute bottom-5 right-0 font-bold px-4 my-4 w-full flex justify-end items-center text-blue-500">
            <button :disabled="current_page <= 1" @click="get_page(current_page -= 1)" class="cursor-pointer  h-[6dvh] rounded-md w-auto px-4 flex items-center justify-center enabled:border enabled:border-blue-500 enabled:hover:bg-blue-500 hover:text-white disabled:text-gray-400 disabled:bg-gray-200">
                <h1>Prev</h1>
            </button>
            <div @click="get_page(index)" :class="{ 'bg-blue-500 text-white': current_page === index }" v-for="index in no_of_pages"
                class="cursor-pointer rounded-md border border-blue-500  h-[6dvh] w-[6dvh] mx-3 flex items-center justify-center hover:bg-blue-500 hover:text-white transition ease-out duration-400">
                <h1>
                    {{ index }}
                </h1>
            </div>
            <button :disabled="current_page >= no_of_pages" @click="get_page(current_page += 1)" class="cursor-pointer  h-[6dvh] rounded-md w-auto px-4 flex items-center justify-center enabled:border enabled:border-blue-500 enabled:hover:bg-blue-500 hover:text-white disabled:text-gray-400 disabled:bg-gray-200">
                <h1>Next</h1>
            </button>
        </div>
    </div>

</template>