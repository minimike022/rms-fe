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

const position_status_id = ref(null)

const get_job_lists = () => {
    axios.get('http://127.0.0.1:3000/jobs/search').then(res => {
        job_listing.value = res.data.job_positions
    })
}

const update_jobs_data = (id) => {
    position_status_id.value = id
    is_update_active.value = true
}

onMounted(() => {
    get_job_lists()
})

const search = dash.debounce(() => {
    axios.get(`http://127.0.0.1:3000/jobs/search?q=${search_jobs.value}`).then(res => {
        job_listing.value = res.data.job_positions
    })
}, 500)

</script>
<template>
    <div class="w-full px-4 shadow-lg rounded-lg my-11">
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

        <table class="w-full mt-6 relative">
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
                <tr v-for="jobs in job_listing" class="text-gray-600 border-y">
                    <td class="text-left h-[10dvh] px-3 font-bold">{{ jobs.position_name }}</td>
                    <td class="text-left text-sm h-[10dvh] px-3">{{ jobs.department_name }}</td>
                    <td class="text-center text-sm h-[10dvh] px-3">{{ jobs.available_slot }}</td>
                    <td class="text-center text-sm h-[10dvh] font-bold text-white">
                        <div class="w-[17dvh] h-[4dvh] rounded-lg flex items-center justify-center"
                            :class="{ 'bg-red-500': jobs.position_status === 'Urgent', 'bg-green-500': jobs.position_status === 'Open', 'bg-yellow-500': jobs.position_status === 'Filled' }">
                            <h1>{{ jobs.position_status }}</h1>
                        </div>
                    </td>
                    <td class="flex justify-center items-center h-[10dvh]" @click="update_jobs_data(jobs.position_id)">
                        <div class="w-[6dvh] h-[6dvh] shadow-md rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-1  00">
                            <img src="/src/assets/edit.svg" alt="">
                        </div>
                    </td>
                </tr>
            </tbody>
            <div class="absolute top-[10dvh] flex items-center justify-center w-full" v-if="is_add_active">
                <AddJobsModal @add_jobs="is_add_active = !is_add_active" />
            </div>
            <div class="absolute top-[10dvh] flex items-center justify-center w-full" v-if="is_update_active">
                <UpdateJobsModal :position_id="position_status_id" @update_modal="is_update_active = false" />
            </div>
        </table>
    </div>
</template>