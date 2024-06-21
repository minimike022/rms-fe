<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import moment from 'moment';

const get_today_date = () => {
    var today = new Date()
    var dd = String(today.getDate()).padStart(2, '0')
    var mm = String(today.getMonth() + 1).padStart(2, '0')
    var yyyy = today.getFullYear()

    today = yyyy + '-' + mm + '-' + dd

    return today
}

const application_schedule = ref([])

const get_application_schedule = () => {
    axios.get('http://127.0.0.1:3000/application/status').then(res => {
        for (var i = 0; i < res.data.application_status.length; i++) {
            if (res.data.application_status[i].interview_date >= get_today_date()) {
                application_schedule.value.push(res.data.application_status[i])
                console.log(application_schedule.value)
            }
        }

    })

}

const date_toString = (dateStr) => {
    const options = ref({
        month: 'long',
        day: '2-digit'
    })

    const date = new Date(dateStr)
    const formattedDate = date.toLocaleDateString('en-US', options.value)

    return formattedDate
}

const time_format = (rawTime) => {
    var time = rawTime
    var formatted_time = moment(time, "H:mm").format("LT")
    return formatted_time
}

onMounted(() => {
    get_application_schedule()
})

</script>

<template>
    <div class="p-4 my-3 shadow-md bg-white rounded-lg">
        <h1 class="text-xl text-transparent bg-clip-text w-[36dvh]
            bg-gradient-to-r from-blue-400 to-blue-800 drop-shadow-lg
        font-bold
        ">Upcoming Interview</h1>
        <div class=" overflow-y-auto h-[45.4dvh] mt-4">
            <div class="flex flex-col mt-5 items-center">
                <img src="/src/assets/calendar_dashboard.png" alt="" class="h-[23dvh]">
                <h1 class="text-lg text-center font-bold text-gray-400 mt-5" v-if="application_schedule == ''">No Upcoming
                    Interviews
                </h1>
            </div>

            <div v-for="applicants_sched in application_schedule">
                <div class="flex items-center my-4" v-if="applicants_sched.interview_date != ''"
                    :class="{ 'text-[#3b82f6]': applicants_sched.application_status === 'Initial Interview', 'text-[#7c3aed]': applicants_sched.application_status === 'Interview with HR', 'text-[#06b6d4]': applicants_sched.application_status === 'Interview with Hiring Manager' }">
                    <div class="text-sm font-bold">
                        <h1>{{ date_toString(applicants_sched.interview_date) }}</h1>
                        <h1>{{ time_format(applicants_sched.interview_time) }}</h1>
                    </div>
                    <div class="w-[1.8dvh] h-[7dvh] rounded-sm mx-2"
                        :class="{ 'bg-[#3b82f6]': applicants_sched.application_status === 'Initial Interview', 'bg-[#7c3aed]': applicants_sched.application_status === 'Interview with HR', 'bg-[#06b6d4]': applicants_sched.application_status === 'Interview with Hiring Manager' }">
                    </div>
                    <div class="font-bold">
                        <h1> {{ applicants_sched.first_name }} {{ applicants_sched.last_name }} {{
                            applicants_sched.extension_name }}</h1>
                        <h1 class="text-xs text-gray-500"> {{ applicants_sched.position_name }}</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>