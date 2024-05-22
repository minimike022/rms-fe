<script setup>
import { RouterLink } from 'vue-router'
import { ref, onMounted } from 'vue'
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
    <div class="w-full">
        <!-- Header -->
        <div class="flex items-center justify-between">
            <h1 class="text-2xl text-transparent bg-clip-text w-[35dvh]
            bg-gradient-to-r from-blue-400 to-blue-800 drop-shadow-lg
            font-bold">You Need to Hire!
            </h1>
            <RouterLink class="font-bold text-[#D1D1D1] hover:text-[#46D1FE]" to="/jobs">See all</RouterLink>
        </div>
        <!-- List of Jobs-->
        
    </div>
</template>