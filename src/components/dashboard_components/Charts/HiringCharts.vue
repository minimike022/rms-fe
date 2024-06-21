<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto';

const hiring_progress = ref("hiring_chart")
const hiring_progress_data = ref([])
const hiring_chart_label = ref([])
const hiring_chart_data = ref([])

const get_job_lists = () => {
    axios.get('http://127.0.0.1:3000/jobs').then(res => {
        hiring_progress_data.value = res.data.job_positions
        console.log(hiring_progress_data.value)
        for (var i = 0; i < hiring_progress_data.value.length; i++) {
            if (hiring_progress_data.value[i].available_slot > 0) {
                hiring_chart_label.value.push(hiring_progress_data.value[i].position_name)
                hiring_chart_data.value.push(hiring_progress_data.value[i].available_slot)
            }
        }
    })
}

onMounted(() => {
    get_job_lists()
})

watch(hiring_progress_data, () => {
    const data = ref({
        labels: hiring_chart_label.value,
        datasets: [{
            label: "Available Positions",
            data: hiring_chart_data.value,
            backgroundColor: '#60a5fa',
            borderRadius: 10
        }]
    })

    const config = {
        type: 'bar',
        data: data.value,
        options: {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    }

    new Chart(hiring_progress.value, config)

})
</script>

<template>
    <div class="h-[45dvh] mt-4">
        <canvas :id="hiring_progress">
        </canvas>
    </div>
</template>