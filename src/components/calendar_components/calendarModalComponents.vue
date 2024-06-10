<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'



const emit = defineEmits(['interview_modal'])
const props = defineProps(['interview_data'])

const set_interview = ref({
    app_status_id: '',
    interviewee_id: '',
    int_time: '',
    int_date: props.interview_data.int_date
})

const application_status_id = ref(null)
const applicants_options = ref([])
const interviewee_options = ref([])
const status_list_options = ref([])

const get_application_status = () => {
    axios.get('http://127.0.0.1:3000/application/status').then(
        res => {
            for(var i = 0; i < res.data.application_status.length; i++) {
                let full_name = res.data.application_status[i].first_name+ ' ' + res.data.application_status[i].last_name
                applicants_options.value.push({value: res.data.application_status[i].application_status_id, label: full_name})
            }
        }
    )
}

const fetch_status_list = () => {
    axios.get('http://127.0.0.1:3000/status/list').then(res => {
        for(var i = 0; i < res.data.status_list.length; i++) {
            status_list_options.value.push({value: res.data.status_list[i].app_status_id, label: res.data.status_list[i].app_status_name})
        }
    }) 
}

const fetch_interviewee = () => {
    axios.get('http://127.0.0.1:3000/users').then(res => {
        // interviewee_options.value.push(res.data.users)
        // console.log(interviewee_options.value)
        for(var i = 0; i < res.data.users.length; i++) {
            interviewee_options.value.push({value: res.data.users[i].account_id, label: res.data.users[i].user_name})
        }
    })
}

const close_interview_modal = () => {
    emit('close_modal')
}

onMounted(() => {
    fetch_interviewee()
    fetch_status_list()
    get_application_status()
})

watch(set_interview.value, () => {
    console.log(set_interview.value)
})

watch(() => application_status_id.value, () => {
    console.log(application_status_id.value)
})


</script>

<template>
    <img src="/src/assets/x.svg" @click="close_interview_modal()" alt="">
    <h1 class="text-xl font-bold text-blue-600 text-center my-6"> Set Interview </h1>
    
    <form>
        <div class="grid grid-cols-1 gap-y-6 my-6">
            <div>
                <h1 class="font-bold text-blue-600 my-2">Applicant</h1>
                <v-select v-model="application_status_id" placeholder="Select Applicant" :reduce="label => label.value" :options="applicants_options" class=""/>
            </div>
            <div>
                <h1 class="font-bold text-blue-600 my-2">Application Status</h1>
                <v-select v-model="set_interview.app_status_id" placeholder="Select Status" :reduce="label => label.value" :options="status_list_options"/>
            </div>

            <div>
                <h1 class="font-bold text-blue-600 my-2">Interviewer</h1>
                <v-select v-model="set_interview.interviewee_id" placeholder="Select Interviewer" :reduce="label => label.value" :options="interviewee_options"/>
            </div>
            <label for="interview_time" class=" flex justify-between items-center h-[5dvh]">
                <h1 class="font-bold text-blue-600">Interview Time:</h1>
                <input type="time" value="00:00" v-model="set_interview.int_time" name="interview_time">
            </label>

            <label for="calendar_date" class="flex justify-between items-center h-[5dvh]">
                <h1 class="font-bold text-blue-600">Interview Date:</h1>
                <div class="flex">
                    <input name="calendar_date" class="bg-transparent" type="date" v-model="set_interview.int_date"
                        disabled>
                    <img src="/src/assets/calendar.svg" alt="" class="h-[24px] w-[24px]">
                </div>
            </label>
            <input type="submit" class="text-white font-bold bg-blue-600 w-full h-[7dvh] rounded-lg">
        </div>
    </form>

</template>