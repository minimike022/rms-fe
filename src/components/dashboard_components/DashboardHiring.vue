<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
import axios from 'axios'
import HiringCharts from './charts/HiringCharts.vue';

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
    <div class="shadow-lg rounded-lg p-4">
        <!-- Header -->
        <div class="flex items-center justify-between">
            <div class="flex items-center">
                <h1 class="text-2xl text-transparent bg-clip-text w-[35dvh]
            bg-gradient-to-r from-blue-400 to-blue-800 drop-shadow-lg
            font-bold">You Need to Hire!
                </h1>
                <div class="flex items-center">
                    <div class="w-[20px] h-[20px] bg-red-500 rounded-md"></div>
                    <h1 class="ml-2 text-sm text-gray-400">
                        Urgent
                    </h1>
                </div>
                <div class="flex items-center ml-4">
                    <div class="w-[20px] h-[20px] bg-blue-500 rounded-md"></div>
                    <h1 class="ml-2 text-sm text-gray-400">
                        Not Urgent
                    </h1>
                </div>
            </div>
        </div>
        <!-- List of Jobs-->
        <HiringCharts />
    </div>
</template>