<script setup>
import axios from 'axios'
import {ref, onMounted, watch} from 'vue'

const applicants_data = ref([])
const application_status = ref([])

const get_applicants_data = () => {
    axios.get('http://127.0.0.1:3000/applicants').then(res => {
        applicants_data.value = res.data.applicants_data
    }).catch(error => console.log(error))
}

const get_application_status = () => {
    axios.get('http://127.0.0.1:3000/application/status').then(
        res => {
            application_status.value = res.data.application_status
        }
    )
}
onMounted(() => {
    get_applicants_data()
    get_application_status()
})

</script>
<template>
    <div>
        

        <div>
            <h1>Application Status</h1>
            <table>
                <thead>
                    <tr>
                        <th>Full Name</th>
                        <th>Position Name</th>
                        <th>Interviewee</th>
                        <th>Interview Date</th>
                        <th>Interview Time</th>
                        <th>Application Status</th>
                    </tr>
                </thead>
                <tbody >
                    <tr v-for="app_status in application_status">
                        <td>{{ app_status.first_name }} {{ app_status.last_name }} {{ app_status.extension_name }} </td>
                        <td>{{ app_status.position_name }}</td>
                        <td>{{ app_status.interviewee_name }}</td>
                        <td>{{ app_status.interview_date }}</td>
                        <td>{{ app_status.interview_time }}</td>
                        <td>{{ app_status.application_status }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>