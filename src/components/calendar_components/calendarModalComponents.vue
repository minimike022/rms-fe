<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import dash from 'lodash'

const set_interview = ref({
    app_status_id: null,
    interviewee_id: null,
    int_time: '',
    int_date: ''
})

const user_interviewee = ref([])
const status_list = ref([])
const application_status = ref([])
const search_applicants = ref('')

onMounted(() => {
    fetch_interviewee()
    fetch_status_list()
})

const search = dash.debounce(() => {
    axios.get(`http://127.0.0.1:3000/application/status?q=${search_applicants.value}`).then(res => {
        application_status.value = res.data.application_status
    })
}, 500)

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

</script>

<template>
    <img src="/src/assets/x.svg" alt="">
    <h1 class="text-xl font-bold text-blue-600 text-center my-6"> Set Interview </h1>
    <form action="">
        <div>
            <input type="text" placeholder="Search Applicant" @input="search" v-model="search_applicants"
                class="h-[6dvh] w-full outline-none border-blue-600 border pl-4 rounded-md text-gray-600">
        </div>

        <div class="grid grid-cols-1 gap-y-6 my-6">
            <select name="" id="" class="w-full outline-none border-b-2 border-gray-400 h-[7dvh] focus:border-blue-500">
                <option value="">Select Status</option>
                <option v-for="status in status_list" value=status.app_status_id>{{ status.app_status_name }}</option>
            </select>

            <select name="" id="" class="w-full outline-none border-b-2 border-gray-400 h-[7dvh] focus:border-blue-500">
                <option value="">Select Interviewer</option>
                <option v-for="interviewee in user_interviewee" value="">{{ interviewee.user_name }}</option>
            </select>
            <input type="time">
            <input type="date">
            <input type="submit" class="text-white font-bold bg-blue-600 w-full h-[7dvh] rounded-lg">
        </div>
    </form>

</template>