<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import moment from 'moment';

const new_applicants = ref([])

const fetch_new_applicants = () => {
    axios.get(`http://127.0.0.1:3000/new_applicants`).then(res => {
        for (var i = 0; i < res.data.new_applicants.length; i++) {
            let duration = moment(res.data.new_applicants[i].app_date).startOf('hours').fromNow()
            let time_limit = moment.duration(moment().diff(res.data.new_applicants[i].app_date))

            let hours = time_limit.asHours();

            let hours_int = Math.trunc(hours)

            if (hours_int < 24) {
                new_applicants.value.push({ data_value: res.data.new_applicants[i], time_elapsed: duration })
            }
        }
    })
}
onMounted(() => {
    fetch_new_applicants()
})

</script>


<template>
    <div class="bg-white rounded-lg p-4 my-3 shadow-md">
        <h1 class="text-xl text-transparent bg-clip-text w-auto
            bg-gradient-to-r from-blue-600 to-blue-800 drop-shadow-lg
        font-bold
        ">New Applicants</h1>

        <div class="overflow-y-auto h-[45.4dvh] mt-4 scroll-smooth">
            <div class="flex flex-col mt-10 items-center" v-if="new_applicants == ''">
                <img src="/src/assets/applicants_dashboard.png" alt="" class="h-[15dvh]">
                <h1 class="text-center font-bold text-gray-400 mt-5" >No New Applicants
                </h1>
            </div>
            <div v-for="new_app in new_applicants" class="mb-8 px-2 flex justify-between items-center text-blue-600">
                <div>
                    <h1 class="text-md font-bold">{{ new_app.data_value.first_name }} {{ new_app.data_value.last_name }}
                    </h1>
                    <h1 class="text-xs">{{ new_app.data_value.job_position }}</h1>
                </div>
                <h1 class="text-xs font-bold text-gray-600 text-right">{{ new_app.time_elapsed }}</h1>
            </div>
        </div>
    </div>
</template>