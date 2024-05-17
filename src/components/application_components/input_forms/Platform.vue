<script setup>
import { ref, watch } from 'vue'

const emit = defineEmits(['platform_info'])

const selected_platform = ref([])

const platformsInfo_toParent = () => {
    emit('platform_info', selected_platform.value)
}

watch(
    () => selected_platform.value,
    () => {
        platformsInfo_toParent()
    }
)

</script>

<template>
    <div>
        <h1 class="text-xl font-semibold">HOW DID YOU FOUND OUT ABOUT THIS JOB VACANCY?</h1>
        <!-- Platform Forms -->
        <div class="
        my-4
        grid grid-cols-1 gap-y-5">
            <label for="MotivIT Website" class="flex items-center peer-checked:text-blue-500">
                <input type="checkbox" v-model="selected_platform" value="MotivIT Website" name="MotivIT Website"
                    class="h-[3dvh] w-[3dvh] accent-blue-500 peer">
                <h1 class="text-gray-600 font-semibold ml-4">MotivIT Website</h1>
            </label>
            <label for="Facebook" class="flex items-center peer-checked:text-blue-500">
                <input type="checkbox" v-model="selected_platform" value="Facebook" id="Facebook"
                    class="h-[3dvh] w-[3dvh] accent-blue-500">
                <h1 class="text-gray-600 font-semibold ml-4">Facebook</h1>
            </label>
            <label for="LinkedIn" class="flex items-center has-[:checked]:text-blue-600">
                <input type="checkbox" v-model="selected_platform" value="LinkedIn" id="LinkedIn"
                    class="h-[3dvh] w-[3dvh] accent-blue-500">
                <h1 class="text-gray-600 font-semibold ml-4">LinkedIn</h1>
            </label>
            <label for="Job Fair" class="flex items-center has-[:checked]:text-blue-600">
                <input type="checkbox" v-model="selected_platform" value="Job Fair" id="Job Fair"
                    class="h-[3dvh] w-[3dvh] accent-blue-500">
                <h1 class="text-gray-600 font-semibold ml-4">Job Fair</h1>
            </label>
            <label for="Referral"  class="text-gray-600 font-semibold flex items-center has-[:checked]:text-blue-600">
                <input type="checkbox" v-model="selected_platform"  value="Referral" id="Referral"
                    class="h-[3dvh] w-[3dvh] accent-blue-500">
                <h1 class="text-gray-600 font-semibold ml-4">Referral</h1>
            </label>
            <div class="relative mt-2">
                <input type="text" id="referral" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="referral" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Name of Referrer*</label>
            </div>

            <label for="Others" class="text-gray-600 font-semibold flex items-center has-[:checked]:text-blue-600">
                <input type="checkbox" v-model="selected_platform" value="Others" id="Others"
                    class="h-[3dvh] w-[3dvh] accent-blue-500">
                <h1 class="text-gray-600 font-semibold ml-4">Others</h1>
            </label>
            <div class="relative mt-2">
                <input type="text" id="other_platform" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="other_platform" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Specify*</label>
            </div>
        </div>
    </div>
</template>