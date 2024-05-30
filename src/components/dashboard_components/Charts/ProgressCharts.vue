<script setup>
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto';
import axios from 'axios'


const application_progress = ref([])
const chart_label = ref([])
const chart_data = ref([])

const fetch_app_progress = () => {
    axios.get('http://127.0.0.1:3000/analysis/progress').then(res => {
        application_progress.value = res.data.progress_status
        for (var i = 0; i < application_progress.value.length; i++) {
            chart_label.value.push(application_progress.value[i].app_status_name)
            console.log(chart_label.value)
            chart_data.value.push(application_progress.value[i].app_status_count)
            console.log(chart_data.value)
        }
    })
}

const tag = ref("Hello")


onMounted(() => {
    fetch_app_progress()
})

watch(application_progress, () => {
    const data = ref({
        labels: chart_label.value,
        datasets: [{
            label: "Recruitment Progress",
            data: chart_data.value
        }]
    })

    const config = {
        type: 'bar',
        data: data.value
    }
    const myChart = new Chart(tag.value, config)
})
</script>

<template>
    <div>
        <canvas :id="tag"></canvas>
    </div>
</template>