<script setup>
import {ref, watch, onMounted} from 'vue'
import axios from 'axios'
const job_listing = ref([])

const get_job_lists = () => {
    axios.get('http://127.0.0.1:3000/jobs').then(res => {
        job_listing.value = res.data
    })
}

onMounted(() => {
    get_job_lists()
})


</script>
<template>
    <div>
        <div>

        </div>
        <div class="w-full px-4 py-4">
            <div class="flex justify-between">
                <div><h1>Search</h1></div>
                <div><h1>Add Jobs</h1></div>
            </div>
            <table class="w-full">
                <thead>
                    <tr class="text-blue-400">
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
                        <td class="text-center text-sm h-[10dvh] border-y font-bold" :class="{'text-red-500': jobs.position_status === 'Urgent', 'text-green-500': jobs.position_status === 'Open','text-yellow-500': jobs.position_status === 'Filled'}">{{ jobs.position_status }}</td>
                        <td class="text-center text-sm h-[10dvh] border-y">
                            <button>
                                <h1 class="font-bold text-green-400">Update</h1>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>