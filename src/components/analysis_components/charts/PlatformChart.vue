<script setup>
import Chart from 'chart.js/auto';
import {ref, watch, onMounted} from 'vue'
import axios from 'axios'

var test_data = ref(['Google', 'Canva'])
var test_platform_data = ref([2,4])
const platform_chart = ref('platform_chart')


const fetch_applicants_data = () => {
    axios.get('http://127.0.0.1:3000/applicants').then(res => {
        console.log(res.data)
    })
}

onMounted(() => {
    fetch_applicants_data()
})

watch(test_data.value, () => {
    const data = ref({
        labels: test_data.value,
        datasets: [{
            label: 'Platform Data',
            data: test_platform_data.value
        }]
    })
    const config = ref({
        type: 'bar',
        data: data.value
    })

    new Chart(platform_chart.value, config.value)
    console.log(test_data.value)
})
test_data.value.push('text1')



</script>

<template>
    <div>
        <h1>Platform Data</h1>
        <canvas :id="platform_chart">

        </canvas>
    </div>
</template>