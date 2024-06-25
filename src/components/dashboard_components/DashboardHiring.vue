<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const no_of_pages = ref()
const limit = 4
var current_page = 1

const job_listing = ref([])

const get_jobs_list = () =>{
    axios.get(`http://127.0.0.1:3000/jobs?page=${current_page}&limit=${limit}`).then(res => {
        no_of_pages.value = Math.ceil(res.data.count / limit)
        job_listing.value = res.data.job_positions
    })
}

const get_page = (page) => {
    current_page = page

    axios.get(`http://127.0.0.1:3000/jobs?page=${current_page}&limit=${limit}`).then(res => {
        job_listing.value = res.data.job_positions
    })
}

onMounted(() => {
    get_jobs_list()
})
</script>

<template>
    <div class=" bg-white rounded-lg my-3 p-4 shadow-md h-[57dvh]">
        <!-- Header -->
        <div class="flex items-center">
            <h1 class="text-2xl text-transparent bg-clip-text w-[35dvh]
            bg-gradient-to-r from-blue-600 to-blue-800
            font-bold">You Need to Hire!
            </h1>
        </div>
        <!-- List of Jobs-->
        <div class="h-[40dvh] my-4 grid grid-cols-2 px-4">
            <div v-for="jobs in job_listing" class="flex items-center my-2 w-[47dvh] h-[18dvh] shadow-lg rounded-lg p-2"
                :class="{ 'bg-red-500': jobs.position_status === 'Urgent' }">
                <div class="flex items-center justify-center h-[11dvh] w-[10dvh] ml-2 mr-4 rounded-lg drop-shadow-lg"
                    :class="{ 'bg-red-600': jobs.position_status === 'Urgent', 'bg-blue-500': jobs.position_status === 'Open' }">
                    <h1 class="text-3xl text-white font-bold ">{{ jobs.available_slot }}</h1>
                </div>
                <span class="flex flex-col">
                    <h1 class="font-bold text-blue-600" :class="{ 'text-white': jobs.position_status === 'Urgent' }">{{
                        jobs.position_name }}</h1>
                    <h1 class="text-sm text-gray-500" :class="{ 'text-white': jobs.position_status === 'Urgent' }">{{
                        jobs.department_name }}</h1>
                </span>
            </div>
        </div>
        <div class="w-full flex items-center justify-center">
            <div @click="get_page(index)" v-for="index in no_of_pages" :class="{ 'bg-blue-500': current_page === index, 'bg-gray-200': current_page != index }" class="mx-2 w-[5dvh] h-[1dvh]  hover:bg-blue-500 transition ease-out duration-200">
            </div>
        </div>
    </div>
    
</template>