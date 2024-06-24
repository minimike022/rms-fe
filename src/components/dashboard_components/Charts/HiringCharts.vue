<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'

const hiring_slots_data = ref([])

const get_job_lists = () => {
    axios.get('http://127.0.0.1:3000/jobs').then(res => {
        hiring_slots_data.value = res.data.job_positions
    })
}

onMounted(() => {
    get_job_lists()
})


</script>

<template>
    <div class="h-[45dvh] mt-2 grid grid-cols-2 overflow-y-auto px-4">
        <div v-for="hiring in hiring_slots_data" class="flex items-center my-2 w-[47dvh] h-[16dvh] shadow-lg rounded-lg p-2">
            <div class="flex items-center justify-center bg-blue-500 h-[11dvh] w-[10dvh] mx-2 rounded-lg">
                <h1 class="text-3xl text-white font-bold ">{{ hiring.available_slot }}</h1>
            </div>
            <span class="flex flex-col">
                <h1 class="font-bold text-blue-600">{{ hiring.position_name }}</h1>
                <h1 class="text-sm text-gray-500">{{ hiring.department_name }}</h1>
            </span>
        </div>
    </div>
</template>