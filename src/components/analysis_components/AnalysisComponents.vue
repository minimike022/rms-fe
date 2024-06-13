<script setup>
import PlatformChart from './charts/PlatformChart.vue';
import ApplicationsChart from './charts/ApplicationsChart.vue';
</script>
<template>
    <div class="h-screen grid grid-cols-1 gap-y-2">
        <PlatformChart/>
        <ApplicationsChart/>
    </div>
</template>