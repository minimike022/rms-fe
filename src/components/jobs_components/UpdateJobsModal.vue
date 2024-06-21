<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'

const emit = defineEmits(["update_modal"])
const props = defineProps(["job_position"])
const job_status_options = ["Open", "Urgent", "Inactive"]

const departments = ref([])

const jobs_modal = ref({

    position_name: props.job_position.position_name,
    department_id: props.job_position.department_id,
    position_status: props.job_position.position_status,
    available_slot: props.job_position.available_slot,

})

const hide_modal = () => {
    emit("update_modal")
}

const fetch_departments = () => {
    axios.get('http://127.0.0.1:3000/departments').then(res => {
        for (let i = 0; i < res.data.departments.length; i++) {
            departments.value.push({value: res.data.departments[i].department_id, label:res.data.departments[i].department_name})
        }
    })
}

const update_jobs = () => {
    axios.patch(`http://127.0.0.1:3000/jobs/update/${props.job_position.position_id}`, jobs_modal.value).then(res => {
        console.log(res)
    })
}

onMounted(() => {
    fetch_departments()
})

</script>


<template>
    <div class="fixed top-0 right-0 bg-white w-[53dvh] h-[100%] z-[10] shadow-lg p-6">
        <img src="/src/assets/x.svg" alt="" @click="hide_modal()" class="cursor-pointer">
        <h1 class="text-2xl font-bold text-blue-600 text-center my-6">Update Jobs</h1>

        <form @submit="update_jobs">
            <div class="my-6">
                <h1 class="font-bold text-blue-600 my-3">
                    Position Name
                </h1>
                <input type="text" v-model.lazy="jobs_modal.position_name" class="w-full border border-[#cfcfc4] h-[6dvh] rounded-md  px-2 outline-none focus:border-blue-600">
            </div>
            <div class="my-6">
                <h1 class="font-bold text-blue-600 my-3">Department</h1>
                <v-select v-model.lazy="jobs_modal.department_id" placeholder="Select Department"
                    :reduce="label => label.value" :options="departments" />
            </div>
            <div class="my-6">
                <h1 class="font-bold text-blue-600 my-3">Status</h1>
                <v-select v-model.lazy="jobs_modal.position_status" placeholder="Select Status"
                    :reduce="label => label.value" :options="job_status_options" class="focus:border-blue-500"/>
            </div>

            <div class="my-6">
                <h1 class="font-bold text-blue-600 my-3">
                    Available Slots
                </h1>
                <input type="number" v-model="jobs_modal.available_slot" class="w-full border border-[#cfcfc4] h-[6dvh] rounded-md px-2 outline-none focus:border-blue-600">
            </div>
            <input type="submit" class="w-full h-[10dvh] my-2 bg-blue-600 text-white text-lg font-semibold rounded-lg">
        </form>
    </div>
</template>