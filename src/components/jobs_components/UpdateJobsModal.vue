<script setup>
import {ref, onMounted} from 'vue'
import axios from 'axios'

const emit = defineEmits(["update_modal"])
const props = defineProps(["position_id"])

const departments = ref([])

console.log(props.position_id)

const jobs_modal = ref({
    position_name: '',
    department_id: null,
    position_status: '',
    available_slot: null,
})

const hide_modal = () => {
    emit("update_modal")
}

const fetch_departments = () => {
    axios.get('http://127.0.0.1:3000/departments').then(res => {
        departments.value = res.data.departments
    })
}

const update_jobs = () => {
    axios.patch(`http://127.0.0.1:3000/jobs/update/${props.position_id}`, jobs_modal.value).then(res => {
        console.log(res)
    }) 
}

onMounted(() => {
    fetch_departments()
})

</script>


<template>
<div class="absolute -top-4 w-[55dvh] h-[77dvh] bg-white
    flex flex-col justify-center
    px-4 pt-4
    drop-shadow-lg rounded-lg
    ring-1 ring-blue-100
    ">
            <div class="flex items-center justify-between">
                <img src="/src/assets/x.svg" alt="" @click="hide_modal()" class="cursor-pointer">
                <h1 class="text-2xl font-bold text-blue-600 drop-shadow-lg">Update Jobs</h1>
                <div>

                </div>
            </div>
            <form @submit="update_jobs" class="flex flex-col my-2">
                <div class="relative my-2">
                    <input required type="text" v-model.lazy="jobs_modal.position_name" placeholder="Position Name*"
                        id="position_name" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                    <label for="position_name" class="
                pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-8 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-600 peer-focus:top-0
                                        ">Position Name*</label>
                </div>
                <select name="department_name" class="focus:border-blue-600 focus:border-b-2 
                my-2 h-[10dvh]
                outline-none border-b border-gray-400
                " v-model.lazy="jobs_modal.department_id">
                    <option :value=null>Select Department</option>
                    <option v-for="dep in departments" :value="dep.department_id">{{ dep.department_name }}</option>
                </select>
                <select name="position_status" v-model="jobs_modal.position_status" class="focus:border-blue-600 focus:border-b-2 
                my-2 h-[10dvh]
                outline-none border-b border-gray-400
                ">
                    <option value="">Select Status</option>
                    <option value="Open">Open</option>
                    <option value="Urgent">Urgent</option>
                    <option value="Filled">Filled</option>
                    <option value="Inactive">Inactive</option>
                </select>
                <div class="relative my-4">
                    <input required type="number" v-model.lazy="jobs_modal.available_slot" placeholder="Available Slot*"
                        id="available_slot" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                    <label for="available_slot" class="
                pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-8 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                                        ">Available Slot*</label>
                </div>
                <input type="submit" class="h-[10dvh] my-4 bg-blue-600 text-white text-lg font-semibold rounded-lg">
            </form>
        </div>
</template>