<script setup>
import {ref, watch} from 'vue'

const emit = defineEmits(["assign_interview"])
const props = defineProps(["status_id"])




const hide_assign_modal = () => {
    emit("assign_interview")
}   

</script>

<template>
    <div>
        <input type="text">
        <input type="text">
        <div>
            <img src="/src/assets/x.svg" alt="" @click="hide_assign_modal()">
        </div>
    </div>
</template>