<script setup>
import {ref, onMounted, watch} from 'vue'
import Chart from 'chart.js/auto';
import axios from 'axios'
import moment from 'moment';

const applications_chart_id = ref('applicants_chart')
const chart_applied_date = ref([])

const fetch_applicants_data = () => {
    axios.get('http://127.0.0.1:3000/analysis/date').then(res => {
        for(let i = 0; i < res.data.application_date.length; i++) {
            const converted_date = moment(res.data.application_date[i].created_At).format('MM/YYYY')
            chart_applied_date.value.push(converted_date)
        }
    })
}

onMounted(() => {
    fetch_applicants_data()
})

watch(chart_applied_date.value, () => {
    console.log(chart_applied_date.value)
    const data = ref({
        labels: chart_applied_date.value,
        datasets: [{
            label: 'Applied Date',
            data: [4,5],
        }]
    })
    const config = ref({
        type: 'line',
        data: data.value,
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    })

    new Chart(applications_chart_id.value, config.value)
})

</script>

<template>
    <div class="h-[45dvh]">
        <canvas :id="applications_chart_id">
        </canvas>
    </div>
</template>