<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const new_applicants = ref([])


const fetch_new_applicants = () => {
    axios.get(`http://127.0.0.1:3000/new_applicants`).then(res => {
        new_applicants.value = res.data.new_applicants
        console.log(new_applicants.value)

    })
}

onMounted(() => {
    fetch_new_applicants()
})

</script>


<template>
    <div class="px-[2dvh] p-4 my-4 shadow-lg ">
        <div class="flex items-center justify-between">
            <h1 class="text-xl text-transparent bg-clip-text w-[30dvh]
            bg-gradient-to-r from-blue-400 to-blue-800 drop-shadow-lg
        font-bold
        ">New Applicants</h1>
            <RouterLink class="font-bold text-[#D1D1D1] hover:text-[#46D1FE]" to="/applicants">See all</RouterLink>
        </div>
        <div class="overflow-y-auto h-[50dvh] mt-4 scroll-smooth">
            <div v-for="new_app in new_applicants" class="mb-8 px-2">
                <div class="flex justify-between items-center">
                    <div>
                        <h1 class="text-lg font-bold text-gray-500">{{ new_app.first_name }} {{ new_app.last_name }}</h1>
                        <h1 class="text-sm text-gray-400">{{ new_app.job_position }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>