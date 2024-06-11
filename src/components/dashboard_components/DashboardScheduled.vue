<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

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
                // if (res.data.application_status[i].application_status === 'Interview with HR') {

                //     application_schedule.value.push(res.data.application_status[i])

                //     console.log(application_schedule.value)
                // }
                
            }
        }
        console.log(res.data.application_status)
    })

}

const date_toString = (dateStr) => {
    const options = ref({
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    })

    const date = new Date(dateStr)
    const formattedDate = date.toLocaleDateString('en-US', options.value)

    return formattedDate
}

onMounted(() => {
    get_application_schedule()
})

</script>

<template>
    <div class="p-4 shadow-lg">
        <div class="flex items-center justify-between">
            <h1 class="text-xl text-transparent bg-clip-text w-[36dvh]
            bg-gradient-to-r from-blue-400 to-blue-800 drop-shadow-lg
        font-bold
        ">Upcoming Interview</h1>
            <RouterLink class="font-bold text-[#D1D1D1] hover:text-[#46D1FE]" to="/calendar">See all</RouterLink>
        </div>
        <div class="overflow-y-auto h-[50dvh] mt-4">
            <h1 class="text-center font-bold text-gray-500 mt-5" v-if="application_schedule == ''">No Upcoming
                Interviews
            </h1>
            <div v-for="applicants_sched in application_schedule">
                <div class="flex items-center my-4" v-if="applicants_sched.interview_date != ''">
                    <h1>{{ date_toString(applicants_sched.interview_date) }}</h1>
                    <div class="w-[1.4dvh] h-[7dvh] bg-black"
                        :class="{ 'bg-[#3b82f6]': applicants_sched.application_status === 'Initial Interview', 'bg-[#7c3aed]': applicants_sched.application_status === 'Interview with HR', 'bg-[#06b6d4]': applicants_sched.application_status === 'Interview with Hiring Manager', 'bg-[#10b981]': applicants_sched.application_status === 'Onboarding' }">
                    </div>
                    <h1> {{ applicants_sched.first_name }} {{ applicants_sched.last_name }} {{
                        applicants_sched.extension_name }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>