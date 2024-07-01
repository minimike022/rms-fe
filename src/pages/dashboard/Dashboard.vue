<script setup>
import DashboardScheduled from '../../components/dashboard_components/DashboardScheduled.vue';
import DashboardHiring from '../../components/dashboard_components/DashboardHiring.vue';
import DashboardApplicants from '../../components/dashboard_components/DashboardApplicants.vue';
import DashboardStatus from '../../components/dashboard_components/DashboardStatus.vue';
import DashboardApplications from '../../components/dashboard_components/analysis/DashboardApplications.vue';
import DashboardPlatform from '../../components/dashboard_components/analysis/DashboardPlatform.vue';

</script>

<template>
    <div class="w-full h-full">
        <div class="flex flex-col 
        mt-[4dvh] font-Poppins
        ">
            <DashboardHiring />
            <div class="w-full flex justify-between">
                <DashboardStatus/>
                <DashboardApplicants />
            </div>

            <!-- <div class="w-[110dvh] flex flex-col">
                <DashboardHiring />
                
            </div>
            <div class="w-[50dvh] flex flex-col">

            </div> -->
        </div>
        <!-- Analysis -->
        <div class="bg-white flex justify-between rounded-lg">
            <div class="w-[110dvh] flex flex-col">
                <DashboardApplications />
            </div>

            <div class="w-[50dvh] flex flex-col">
                <DashboardPlatform />
            </div>
        </div>
    </div>
</template>