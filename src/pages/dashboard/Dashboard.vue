<script setup>
import DashboardComponents from '/src/components/dashboard_components/DashboardComponents.vue'
import DashboardScheduled from '../../components/dashboard_components/DashboardScheduled.vue';
import DashboardHiring from '../../components/dashboard_components/DashboardHiring.vue';
import DashboardApplicants from '../../components/dashboard_components/DashboardApplicants.vue';
import DashboardStatus from '../../components/dashboard_components/DashboardStatus.vue';
</script>

<template>
        <div class="flex justify-between
        mt-[4dvh] font-Poppins
        ">
            <!--Left Components-->
            <div class="flex flex-col">
                <DashboardComponents/>
                <DashboardHiring/>
                <DashboardStatus/>
            </div>
            <!--Right Components-->
            <div class="flex flex-col">
                <DashboardScheduled/>
                <DashboardApplicants/>
            </div>
        </div>
</template>