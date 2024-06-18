<script setup>
import DashboardScheduled from '../../components/dashboard_components/DashboardScheduled.vue';
import DashboardHiring from '../../components/dashboard_components/DashboardHiring.vue';
import DashboardApplicants from '../../components/dashboard_components/DashboardApplicants.vue';
import DashboardStatus from '../../components/dashboard_components/DashboardStatus.vue';
import DashboardApplications from '../../components/dashboard_components/DashboardApplications.vue';
import DashboardPlatform from '../../components/dashboard_components/DashboardPlatform.vue';

</script>

<template>
    <div class="grid grid-cols-2 gap-x-[60dvh] w-full h-full
        mt-[4dvh] font-Poppins
        ">
        <!--Left Components-->
        <div class="w-[110dvh]">
            <DashboardHiring />
            <DashboardStatus />
        </div>

        <div class="w-[50dvh] flex flex-col">
            <DashboardScheduled />
            <DashboardApplicants />
        </div>
    </div>
    <DashboardPlatform/>
    <DashboardApplications/>
</template>