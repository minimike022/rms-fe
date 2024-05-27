<script setup>
import axios from 'axios'
import { ref, watch } from 'vue'


const emit = defineEmits("app_data")
const props = defineProps(["applicants_id"])
const applicants_data = ref([])



const get_applicants_data = () => {

    axios.get(`http://127.0.0.1:3000/applicants/${props.applicants_id}`).then(res => {
        applicants_data.value = res.data.Applicants
        console.log(applicants_data.value)
    }).catch(error => console.log(error))
}

watch(() => props.applicants_id,
    () => get_applicants_data()
)

const hide_applicants_modal = () => {
    emit("app_data")
}

</script>
<template>
    <!-- Header -->
    <div class="h-[90dvh] w-[70dvh] rounded-lg bg-gray-50 shadow-lg">
        <div class="flex justify-between p-4">
            <div></div>
            <h1>Applicants Data</h1>
            <img src="/src/assets/x.svg" alt="" @click="hide_applicants_modal">
            
        </div>
        <div v-for="app_data in applicants_data" class="my-4 grid grid-cols-2">
            
        </div>
    </div>
</template>