<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'



const emit = defineEmits(["assign_interview"])
const props = defineProps(["status_id"])
const user_interviewee = ref([])
const status_list = ref([])

const assign_interview = ref({
    app_status_id: null,
    interviewee_id: null,
})

console.log(props)

const hide_assign_modal = () => {
    emit("assign_interview")
}

const fetch_status_list = () => {
    axios.get('http://127.0.0.1:3000/status/list').then(res => {
        for (var i = 0; i < 3; i++) {
            status_list.value.push({ value: res.data.status_list[i].app_status_id, label: res.data.status_list[i].app_status_name })
            console.log(status_list.value)
        }
    })
}

const fetch_interviewee = () => {
    axios.get('http://127.0.0.1:3000/users').then(res => {
        user_interviewee.value = res.data.users
    })
}

const update_status = () => {
    axios.patch(`http://127.0.0.1:3000/application/status/${props.status_id}`, assign_interview.value).then(res => {
        console.log(res.data)
    })
}

onMounted(() => {
    fetch_interviewee()
    fetch_status_list()
})
</script>

<template>
    <div class="sticky bg-white drop-shadow-lg w-[60dvh] h-auto py-4 rounded-lg">
        <!-- Header -->
        <div class="px-4 my-4 flex justify-between items-center">    
            <img src="/src/assets/x.svg" alt="" @click="hide_assign_modal()">
            <h1 class="text-2xl font-bold text-blue-600">Update Status</h1>
            <div>

            </div>
        </div>
        <div>
            <form @submit.prevent="update_status" class="grid grid-cols-1 gap-y-4 px-4">
                <div class="grid grid-cols-1 gap-6">
                    <v-select v-model="assign_interview.app_status_id" placeholder="Select Status" :reduce="label => label.value" :options="status_list"  />
                    <input type="submit" class="text-white font-bold bg-blue-600 w-full h-[10dvh] rounded-lg">
                </div>
            </form>
        </div>
    </div>
</template>