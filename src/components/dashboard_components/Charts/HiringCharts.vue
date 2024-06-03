<script setup>
import axios from 'axios'
import { ref, onMounted, watch } from 'vue'
import Chart from 'chart.js/auto';

const hiring_progress = ref("hiring_chart")
const hiring_progress_data = ref([])
const hiring_chart_label = ref([])
const hiring_chart_data = ref([])

const change_bar_color = (data) => {
    var colors = []
    data.forEach(value => {
        if (value > 3) {
            colors.push('#ef4444')
            console.log("Urgent")
        }
        else {
            colors.push('#60a5fa')
        }
    })
    return colors
}


const get_job_lists = () => {
    axios.get('http://127.0.0.1:3000/jobs').then(res => {
        hiring_progress_data.value = res.data.job_positions
        for (var i = 0; i < hiring_progress_data.value.length; i++) {
            if (hiring_progress_data.value[i].available_slot > 0) {
                hiring_chart_label.value.push(hiring_progress_data.value[i].position_name)
                console.log(hiring_chart_label.value)
                hiring_chart_data.value.push(hiring_progress_data.value[i].available_slot)
                console.log(hiring_chart_data.value)
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
            backgroundColor: change_bar_color(hiring_chart_data.value),
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
    const myChart = new Chart(hiring_progress.value, config)
})
</script>

<template>
    <div>
        <canvas :id="hiring_progress">

        </canvas>
    </div>
</template>