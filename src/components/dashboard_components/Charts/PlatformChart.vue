<script setup>
import Chart from 'chart.js/auto';
import { ref, watch, onMounted } from 'vue'
import axios from 'axios'

var chart_platform_label = ref([])
var chart_platform_data = ref([])
const chart_id = ref('platform_chart')

const fetch_platforms_data = () => {
    axios.get('http://127.0.0.1:3000/analysis/platform').then(res => {
        for (let i = 0; i < res.data.platform_list.length; i++) {
            chart_platform_label.value.push(res.data.platform_list[i].platform_name)
        }
        for (let i = 0; i < res.data.platform_analysis.length; i++) {
            console.log(res.data.platform_analysis[i])

            // const recurringValue = chart_platform_label.filter((value, index, self) => {
        //         return self.indexOf(value) !== index;
        //     });
        // console.log(recurringValue)
        }

        

    })
}

onMounted(() => {
    fetch_platforms_data()
})

watch(chart_platform_label.value, () => {
    const data = ref({
        labels: chart_platform_label.value,
        datasets: [{
            label: 'Platform Data',
            data: test_platform_data.value
        }]
    })
    const config = ref({
        type: 'bar',
        data: data.value
    })

    new Chart(chart_id.value, config.value)
})




</script>

<template>
    <div>
        <h1>Platform Data</h1>
        <canvas :id="chart_id">

        </canvas>
    </div>
</template>