<script setup>
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto';
import axios from 'axios'


const application_progress = ref([])
const progress_chart_label = ref([])
const progress_chart_data = ref([])
const recruitment_progress = ref("progress_chart")   

const fetch_app_progress = () => {
    axios.get('http://127.0.0.1:3000/analysis/progress').then(res => {
        application_progress.value = res.data.progress_status
        for (var i = 0; i < application_progress.value.length; i++) {
            progress_chart_label.value.push(application_progress.value[i].app_status_name)
            progress_chart_data.value.push(application_progress.value[i].app_status_count)
        }
    })
}

onMounted(() => {
    fetch_app_progress()
})

watch(application_progress, () => {
    const data = ref({
        labels: progress_chart_label.value,
        datasets: [{
            data: progress_chart_data.value,
            backgroundColor: [ // Specify the color for each bar
                '#a3e635', 
                '#facc15', 
                '#f87171', 
                '#3b82f6', 
                '#7c3aed', 
                '#06b6d4',
                '#10b981'
            ],
            borderRadius: 10
        }]
    })

    const config = {
        type: 'bar',
        data: data.value,
        options: {
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }
    const myChart = new Chart(recruitment_progress.value, config)
})
</script>

<template>
    <div>
        <canvas :id="recruitment_progress"></canvas>
    </div>
</template>