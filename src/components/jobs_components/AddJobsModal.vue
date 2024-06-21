<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const emit = defineEmits(['add_jobs'])

const departments = ref([])

const jobs_modal = ref({
    position_name: '',
    department_id: null,
    available_slot: null,
})

const hide_modal = () => {
    emit('add_jobs')
}

const post_jobs = () => {
    axios.post('http://127.0.0.1:3000/jobs/add', jobs_modal.value)
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    hide_modal()
}

const fetch_departments = () => {
    axios.get('http://127.0.0.1:3000/departments').then(res => {
        for (let i = 0; i < res.data.departments.length; i++) {
            departments.value.push({value: res.data.departments[i].department_id, label:res.data.departments[i].department_name})
        }
    })
}

onMounted(() => {
    fetch_departments()
})



</script>

<template>
    <div class="fixed top-0 right-0 bg-white w-[53dvh] h-[100%] z-[10] shadow-lg p-6">
        <img src="/src/assets/x.svg" alt="" @click="hide_modal" class="cursor-pointer">
        <h1 class="text-2xl font-bold text-blue-600 text-center my-6">Add Jobs</h1>
        <form @submit="post_jobs" class="flex flex-col my-2 ">
            <div class="my-2">
                <h1 class="font-bold text-blue-600 my-3">
                    Position Name
                </h1>
                <input type="text" v-model.lazy="jobs_modal.position_name" placeholder="Enter Position"
                    class="w-full border border-[#cfcfc4] h-[6dvh] rounded-md  px-2 outline-none focus:border-blue-600">
            </div>
            <div class="my-2">
                <h1 class="font-bold text-blue-600 my-3">Department</h1>
                <v-select v-model.lazy="jobs_modal.department_id" placeholder="Select Department"
                    :reduce="label => label.value" :options="departments" />
            </div>
            <div class="my-2">
                <h1 class="font-bold text-blue-600 my-3">
                    Available Slots
                </h1>
                <input type="number" v-model="jobs_modal.available_slot" placeholder="Enter Available Position" class="w-full border border-[#cfcfc4] h-[6dvh] rounded-md px-2 outline-none focus:border-blue-600">
            </div>
            <input type="submit" class="h-[10dvh] my-4 bg-blue-600 text-white text-lg font-semibold rounded-lg">
        </form>
    </div>
</template>