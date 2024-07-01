<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from 'axios'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css'


//Define emits and props value
const emit = defineEmits(["assign_interview"])
const props = defineProps(["status_id"])

//Store data fetched from the database
const status_list = ref([])

//Store selected status id
const application_status_id = ref(null)


//Hide modal when clicked 'x' img
const hide_assign_modal = () => {
    emit("hide_modal")
}

//fetch the list of different status
const fetch_status_list = () => {
    axios.get('http://127.0.0.1:3000/status/list').then(res => {
        for (var i = 0; i < 5; i++) {
            status_list.value.push({ value: res.data.status_list[i].app_status_id, label: res.data.status_list[i].app_status_name })
        }
    })
}
//HTTP request to application status
const update_status = () => {
    axios.patch(`http://127.0.0.1:3000/application/status/${props.status_id}`, {app_status_id: application_status_id.value}).then(res => {
        emit('update_status')
        hide_assign_modal()
    })
}

onMounted(() => {
    fetch_status_list()
})

</script>

<template>
    <img src="/src/assets/x.svg" @click="hide_assign_modal" alt="">
    <h1 class="text-xl font-bold text-blue-600 text-center my-6"> Update Status </h1>
    <div>
        <form @submit.prevent="update_status()" class="grid grid-cols-1 gap-y-4 px-4">
            <div class="grid grid-cols-1 gap-6">
                <v-select v-model="application_status_id" placeholder="Select Status" :reduce="label => label.value"
                    :options="status_list" />
                <input type="submit" class="text-white font-bold bg-blue-600 w-full h-[7dvh] rounded-lg">
            </div>
        </form>
    </div>
</template>