<script setup>
import { ref, watch, onMounted } from 'vue'
import axios from 'axios'
import AddJobsModal from './AddJobsModal.vue';
import dash from 'lodash'

const job_listing = ref([])
const add_jobs_modal = ref(false)
const update_jobs_modal = ref(false)
const search_jobs = ref('')


const get_job_lists = () => {
    axios.get('http://127.0.0.1:3000/jobs').then(res => {
        job_listing.value = res.data
    })
}

onMounted(() => {
    get_job_lists()
})

const search = dash.debounce(() => {
    // Axios Request to Back End
}, 2000)

</script>
<template>
    <div>
        <div class="w-full px-4 py-4">
            <div class="flex justify-between items-center">
                <div class="flex h-[7dvh] rounded-lg items-center drop-shadow-md">
                    <input type="text" placeholder="Search" @input="search" v-model="search_jobs" class="h-full w-[35vh] outline-none border-blue-600 border pl-4 rounded-l-md text-gray-600">
                    <div class="w-[10dvh] h-full bg-blue-600 rounded-r-md flex items-center justify-center">
                        <img src="/src/assets/search.svg" alt="">
                    </div>
                </div>
                <button @click="add_jobs_modal = !add_jobs_modal" class="bg-blue-600 h-[7dvh] w-[19vh] outline-none rounded-md 
                    text-center text-white font-bold
                    shadow-md">
                    <h1>Add Jobs</h1>
                </button>
            </div>
            <div class="relative flex items-center justify-center w-full" v-if="add_jobs_modal">
                <AddJobsModal @add_jobs="add_jobs_modal = !add_jobs_modal" />
            </div>
            <table class="w-full">
                <thead>
                    <tr class="text-blue-500">
                        <th class="text-left h-[10dvh] px-3">Position</th>
                        <th class="text-left h-[10dvh] px-3">Department</th>
                        <th class="text-center h-[10dvh] px-3">Available Slots</th>
                        <th class="text-center h-[10dvh] px-3">Status</th>
                        <th class="text-center h-[10dvh] px-3">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="jobs in job_listing" class="text-gray-600">
                        <td class="text-left h-[10dvh] border-y px-3 font-bold">{{ jobs.position_name }}</td>
                        <td class="text-left text-sm h-[10dvh] border-y px-3">{{ jobs.department_name }}</td>
                        <td class="text-center text-sm h-[10dvh] border-y px-3">{{ jobs.available_slot }}</td>
                        <td class="text-center text-sm h-[10dvh] border-y font-bold"
                            :class="{ 'text-red-500': jobs.position_status === 'Urgent', 'text-green-500': jobs.position_status === 'Open', 'text-yellow-500': jobs.position_status === 'Filled' }">
                            {{ jobs.position_status }}</td>
                        <td class="text-center text-sm h-[10dvh] border-y">
                            <button @click="update_jobs_modal = !update_jobs_modal">
                                <h1 class="font-bold text-green-400">Update</h1>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>