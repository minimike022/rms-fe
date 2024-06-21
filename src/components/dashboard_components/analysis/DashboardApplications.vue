<script setup>
import ApplicationsChart from './charts/ApplicationsChart.vue';
</script>
<template>
    <div class="px-[2dvh] rounded-lg p-4 my-3">
        <h1 class="text-2xl text-transparent bg-clip-text w-[45dvh]
            bg-gradient-to-r from-blue-400 to-blue-800
            font-bold">Applications Per Month</h1>
        <ApplicationsChart/>
    </div>
</template>