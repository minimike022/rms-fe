<script setup>
import ProgressCharts from './charts/ProgressCharts.vue';
</script>

<template>
    <!--Header Title-->
    <div class="bg-white rounded-lg p-4 my-3 shadow-md">
        <div>
            <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <h1 class="text-2xl text-transparent bg-clip-text w-[40dvh]
                bg-gradient-to-r from-blue-600 to-blue-800 drop-shadow-lg
            font-bold">Recruitment Progress
                    </h1>
                </div>
            </div>
        </div>
        <!-- Recruitment Progress Graph -->
        <ProgressCharts />
    </div>
</template>