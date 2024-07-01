<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { onMounted } from 'vue'
import router from '../../router';

onMounted(() => {
    router.push("/new_applicant")
})

</script>

<template>
    <div>
        <div class="flex justify-between text-gray-500 h-[6.5dvh]">
            <RouterLink active-class="border-blue-600 text-blue-600" to="/scheduled" class="w-[49%] border-b-2 text-center font-semibold ">Scheduled</RouterLink>
            <RouterLink active-class="border-blue-600 text-blue-600" to="/new_applicant" class="w-[49%] border-b-2 text-center font-semibold">New Applicants</RouterLink>
        </div>
        <div class="w-[55dvh]">
            <RouterView />
        </div>
    </div>
</template>