<script setup>

const emit = defineEmits(["close_modal"])


</script>
<template>
    <div class="h-screen bg-white">
        <img src="/src/assets/x.svg" @click="emit('close_modal')" alt="" class="cursor-pointer">
        <h1 class="text-xl font-bold text-blue-600 text-center my-6"> Assess Applicant </h1>
    </div>
</template>