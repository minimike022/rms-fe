<script setup>
import { ref, watch, onMounted } from 'vue'
import axios from 'axios'


const emit = defineEmits(['desired_position'])
const job_positions = ref([])


const desiredPosition_toParent = () => {
    emit('desired_position', selected_answer.value)
}

const selected_answer = ref({
    selected_position: '',
    BPO_exp: '',
    shift: '',
    holiday: '',
    work_site:''
})

const get_job_positions = () => {
    axios.get(`http://127.0.0.1:3000/jobs`).then(results => {
        job_positions.value = results.data.job_positions
    //     for (var i = 0; i < res.data.job_positions.length; i++) {
    //         if(res.data.job_positions[i].position_status !== "Inactive") {
    //             job_positions.value.push(res.data.job_positions[i])
    //         }
    //     }
    })
}

onMounted(() => {
    get_job_positions()
})



watch(selected_answer.value, 
    () => {
        desiredPosition_toParent()
    }
)


</script>

<template>
    <!--Contact Information-->
    <div class="h-auto mt-6 px-11 py-8
                        drop-shadow-xl
                        bg-white  rounded-2xl">
        <h1 class="text-2xl font-semibold">Desired Position</h1>
        <!-- Dropdown Menu -->
        <div class="w-full
        grid grid-cols-1
        gap-y-4 mt-4">
            <select v-model="selected_answer.selected_position"  class="text-lg text-gray-400
                h-[7dvh]
                outline-none border-b border-black
                ">
                <option disabled value="" >Choose Available Position</option>
                <option v-for="jobs in job_positions" :value=jobs.position_id  class="text-blue-500">{{jobs.position_name}} {{ jobs.position_id }}</option>
            </select>
            <div class="grid grid-cols-2 gap-y-4 items-center">
                <!-- Do you have BPO Experience? -->
                <h1 class="text-md">Do you have BPO Experience?</h1>
                <div class="flex justify-end">
                    <label for="BPO_yes"
                        class="w-[15dvh] h-[5dvh] flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-blue-200 hover:drop-shadow-sm has-[:checked]:drop-shadow-md has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white">
                        <input type="radio" v-model="selected_answer.BPO_exp" name="BPO" value="Yes" id="BPO_yes" class="sr-only" />
                        <p class="text-sm font-medium">Yes</p>
                    </label>
                    <label for="BPO_no"
                        class="w-[15dvh] h-[5dvh] ml-4 flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-blue-200 hover:drop-shadow-sm has-[:checked]:drop-shadow-md has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white">
                        <input type="radio" v-model="selected_answer.BPO_exp" name="BPO" value="No" id="BPO_no" class="sr-only" />
                        <p class="text-sm font-medium">No</p>
                    </label>
                </div>
                <!-- Willing to work during night shift? -->
                <h1 class="text-md">Willing to work during night shift?</h1>
                <div class="flex justify-end">
                    <label for="shift_yes"
                        class="w-[15dvh] h-[5dvh] flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-blue-200 hover:drop-shadow-sm has-[:checked]:drop-shadow-md has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white">
                        <input type="radio" v-model="selected_answer.shift" name="shift" value="Yes" id="shift_yes" class="sr-only" />
                        <p class="text-sm font-medium">Yes</p>
                    </label>
                    <label for="shift_no"
                        class="w-[15dvh] h-[5dvh] ml-4 flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-blue-200 hover:drop-shadow-sm has-[:checked]:drop-shadow-md has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white">
                        <input type="radio" v-model="selected_answer.shift" name="shift" value="No" id="shift_no" class="sr-only" />
                        <p class="text-sm font-medium">No</p>
                    </label>
                </div>

                <!-- Willing to work during weekdays and holidays? -->
                <h1 class="text-md">Willing to work during weekdays and holidays?</h1>
                <div class="flex justify-end">
                    <label for="holiday_yes"
                        class="w-[15dvh] h-[5dvh] flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-blue-200 hover:drop-shadow-sm has-[:checked]:drop-shadow-md has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white">
                        <input type="radio" v-model="selected_answer.holiday" name="holiday" value="Yes" id="holiday_yes" class="sr-only" />
                        <p class="text-sm font-medium">Yes</p>
                    </label>
                    <label for="holiday_no"
                        class="w-[15dvh] h-[5dvh] ml-4 flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-blue-200 hover:drop-shadow-sm has-[:checked]:drop-shadow-md has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white">
                        <input type="radio" v-model="selected_answer.holiday" name="holiday" value="No" id="holiday_no" class="sr-only" />
                        <p class="text-sm font-medium">No</p>
                    </label>
                </div>


                <!-- Willing to work during weekdays and holidays? -->
                <h1 class="text-md">Willing to work onsite in Sto. Domingo. Nueva Ecija?</h1>
                <div class="flex justify-end">
                    <label for="work_location_yes"
                        class="w-[15dvh] h-[5dvh] flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:bordblue-200 hover:drop-shadow-sm has-[:checked]:drop-shadow-md has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white">
                        <input type="radio" v-model="selected_answer.work_site" name="work_location" value="Yes" id="work_location_yes" class="sr-only" />
                        <p class="text-sm font-medium">Yes</p>
                    </label>
                    <label for="work_location_no"
                        class="w-[15dvh] h-[5dvh] ml-4 flex cursor-pointer items-center justify-center rounded-md border border-gray-100 bg-white px-3 py-2 text-gray-900 hover:border-blue-200 hover:drop-shadow-sm has-[:checked]:drop-shadow-md has-[:checked]:border-blue-600 has-[:checked]:bg-blue-600 has-[:checked]:text-white">
                        <input type="radio" v-model="selected_answer.work_site" name="work_location" value="No" id="work_location_no" class="sr-only" />
                        <p class="text-sm font-medium">No</p>
                    </label>
                </div>

                
            </div>

        </div>
    </div>
</template>