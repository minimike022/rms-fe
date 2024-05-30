<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const emit = defineEmits(["assign_interview"])
const props = defineProps(["status_id"])
const user_interviewee = ref([])
const status_list = ref([])

const assign_interview = ref({
    app_status_id: null,
    interviewee_id: null,
    int_time: '',
    int_date: ''
})

console.log(props)

const hide_assign_modal = () => {
    emit("assign_interview")
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

const update_interview = () => {
    console.log("Hello World")
    axios.patch(`http://127.0.0.1:3000/application/status_update/${props.status_id}`, assign_interview.value).then(res => {
        console.log(res.data)
    })
}

onMounted(() => {
    fetch_interviewee()
    fetch_status_list()
})
</script>

<template>
    <div class="sticky bg-white drop-shadow-lg w-[60dvh] h-[60dvh] rounded-lg">
        <!-- Header -->
        <div class="px-4 my-2 flex justify-between items-center">    
            <img src="/src/assets/x.svg" alt="" @click="hide_assign_modal()">
            <h1 class="text-2xl font-bold text-blue-600">Change Status</h1>
            <div>

            </div>
        </div>
        <div>
            <form @submit="update_interview" class="grid grid-cols-1 gap-y-4 px-4">
                <div class="grid grid-cols-1 gap-6">
                    <select name="users_data" v-model="assign_interview.interviewee_id" class="border-b outline-none h-[7dvh]">
                        <option value=null>Select Interviewer</option>
                        <option v-for="users in user_interviewee" :value="users.account_id">
                            <h1>{{ users.user_name }} - </h1>
                            <h1 class="text-lg">{{ users.department_name }}</h1>
                        </option>
                    </select>
                    <select name="status_list" class="border-b h-[7dvh] outline-none" v-model="assign_interview.app_status_id">
                        <option value=null>Select Status</option>
                        <option v-for="lists in status_list" :value=lists.app_status_id> {{ lists.app_status_name }}
                        </option>
                    </select>
                    <input type="time" v-model="assign_interview.int_time">
                    <input type="date" placeholder="Select Date" v-model="assign_interview.int_date">
                    <input type="submit" class="text-white font-bold bg-blue-600 w-full h-[10dvh] rounded-lg">
                </div>
            </form>
        </div>
    </div>
</template>