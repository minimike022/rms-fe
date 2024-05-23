<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const applicants_data = ref([])


const get_applicants_data = () => {
    axios.get('http://127.0.0.1:3000/applicants').then(res => {
        applicants_data.value = res.data.applicants_data
    }).catch(error => console.log(error))
}

onMounted(() => {
    get_applicants_data()
})



</script>
<template>
    <!-- Header -->
    <div class="my-4">
        
    </div>
</template>