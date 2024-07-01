<script setup>
import { RouterView } from 'vue-router';
import router from '../../router';
import { onBeforeMount } from 'vue';




onBeforeMount(() => {
    router.push('/applicants_status')
})


</script>

<template>
    <RouterView/>
</template>