<script setup>
import axios from 'axios'
import { ref, onMounted} from 'vue'
import dash from 'lodash'
import { useCalendarStore } from '../../pinia/calendarModal';

const calendarStore = useCalendarStore()

console.log(calendarStore)

const emit = defineEmits(['interview_modal'])
const props = defineProps(['interview_data'])

console.log(props)

const set_interview = ref({
    app_status_id: '',
    interviewee_id: '',
    int_time: '',
    int_date: props.interview_data.int_date
})

const user_interviewee = ref([])
const status_list = ref([])
const application_status = ref([])
const search_applicants = ref('')

const get_application_status = () => {
    axios.get('http://127.0.0.1:3000/application/status').then(
        res => {
            application_status.value = res.data.application_status
            console.log(application_status.value)
        }
    )
}

const fetch_status_list = () => {
    axios.get('http://127.0.0.1:3000/status/list').then(res => {
        status_list.value = res.data.status_list
    })
}

const fetch_interviewee = () => {
    axios.get('http://127.0.0.1:3000/users').then(res => {
        user_interviewee.value = res.data.users
    })
}



const search = dash.debounce(() => {
    axios.get(`http://127.0.0.1:3000/application/status?q=${search_applicants.value}`).then(res => {
        application_status.value = res.data.application_status
    })
}, 500)



const close_interview_modal = () => {
    emit('close_modal')
}

onMounted(() => {
    fetch_interviewee()
    fetch_status_list()
    get_application_status()
})



</script>

<template>
    <img src="/src/assets/x.svg" @click="close_interview_modal()" alt="">
    <h1 class="text-xl font-bold text-blue-600 text-center my-6"> Set Interview </h1>
    <div>
        <input type="text" placeholder="Search Applicant" @input="search" v-model="search_applicants"
            class="h-[6dvh] w-full outline-none border-blue-600 border pl-4 rounded-md text-gray-600">
    </div>

    <form>
        <div class="grid grid-cols-1 gap-y-6 my-6">
            <div>
                <h1 class="font-bold text-blue-600 my-2">Applicant</h1>
            </div>
            <div>
                <h1 class="font-bold text-blue-600 my-2">Application Status</h1>
                <select name="" id=""
                    class="w-full outline-none border-b border-gray-400 h-[7dvh] focus:border-blue-500">
                    <option value="">Select Status</option>
                    <option class="text-gray-500" v-for="status in status_list" value=status.app_status_id>{{
                        status.app_status_name }}</option>
                </select>
            </div>

            <div>
                <h1 class="font-bold text-blue-600 my-2">Interviewer</h1>
                <select name="" id=""
                    class="w-full outline-none border-b border-gray-400 h-[7dvh] focus:border-blue-500 ">
                    <option value="">Select Interviewer</option>
                    <option class="text-gray-500" v-for="interviewee in user_interviewee" value="">{{
                        interviewee.user_name }}</option>
                </select>
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