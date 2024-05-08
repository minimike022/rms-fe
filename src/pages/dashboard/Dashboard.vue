<script setup>
import DashboardComponents from '/src/components/dashboard_components/DashboardComponents.vue'
import DashboardScheduled from '../../components/dashboard_components/DashboardScheduled.vue';
import DashboardHiring from '../../components/dashboard_components/DashboardHiring.vue';
</script>

<template>
        <div class="flex justify-between
        mt-[4dvh]
        ">
            <!--Left Components-->
            <div class="flex flex-col">
                <DashboardComponents/>
                <DashboardHiring/>
            </div>
            <!--Right Components-->
            <div>
                <DashboardScheduled/>
            </div>
        </div>
</template>