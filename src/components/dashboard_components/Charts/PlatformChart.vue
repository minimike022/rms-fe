<script setup>
import Chart from 'chart.js/auto';
import { ref, watch, onMounted } from 'vue'
import axios from 'axios'

var chart_label = ref([])
var chart_data = ref([])
var chart_platform_data = ref([])
const platform_chart_id = ref('platform_chart')

const fetch_platforms_data = () => {
    axios.get('http://127.0.0.1:3000/analysis/platform').then(res => {
        for (let i = 0; i < res.data.platform_list.length; i++) {
            chart_platform_data.value.push({ label: res.data.platform_list[i].platform_name, count: 0 })
        }
        for (let i = 0; i < res.data.platform_analysis.length; i++) {
            for (let x = 0; x < chart_platform_data.value.length; x++) {
                for (let y = 0; y < res.data.platform_analysis[i].platforms_data.length; y++) {
                    if(chart_platform_data.value[x].label === res.data.platform_analysis[i].platforms_data[y]) {
                        chart_platform_data.value[x].count += 1
                    }
                }
            }
        }

        for (let i = 0; i < chart_platform_data.value.length; i++) {
            chart_label.value.push(chart_platform_data.value[i].label)
            chart_data.value.push(chart_platform_data.value[i].count)
        }
    })
}

onMounted(() => {
    fetch_platforms_data()
})

watch(chart_platform_data.value, () => {
    const data = ref({
        labels: chart_label.value,
        datasets: [{
            label: 'Platform Data',
            data: chart_data.value
        }]
    })
    const config = ref({
        type: 'bar',
        data: data.value
    })

    new Chart(platform_chart_id.value, config.value)
})
</script>

<template>
    <div>
        <h1>Platform Data</h1>
        <canvas :id="platform_chart_id">

        </canvas>
    </div>
</template>