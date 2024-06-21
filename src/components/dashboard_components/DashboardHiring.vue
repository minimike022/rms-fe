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
    <div class="bg-white rounded-lg my-3 p-4 shadow-md">
        <!-- Header -->
        <div class="flex items-center">
            <h1 class="text-2xl text-transparent bg-clip-text w-[35dvh]
            bg-gradient-to-r from-blue-400 to-blue-800
            font-bold">You Need to Hire!
            </h1>

        </div>
        <!-- List of Jobs-->
        <HiringCharts />
    </div>
</template>