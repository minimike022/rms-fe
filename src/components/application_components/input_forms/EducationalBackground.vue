<script setup>
import { ref, defineEmits, watch} from 'vue'

const emit = defineEmits(['educational_info'])

const educational_background = ref({
    educational_attainment: '',
    degree_course: '',
    school_name: ''
})

const educationalInfo_toParent = () => {
    emit('educational_info', educational_background.value)
}


watch(educational_background.value,
    () => {
        educationalInfo_toParent()
    }
)
</script>

<template>
    <!--Contact Information-->
    <div class="h-auto mt-6 px-11 py-8
                        drop-shadow-xl
                        bg-white  rounded-2xl">
        <h1 class="text-2xl font-semibold">Educational Background</h1>
        <h1 class="text-sm mt-4 text-gray-500">Highest Educational Attainment*</h1>
        <!-- Input Forms -->
        <div class="grid grid-cols-1 gap-y-7">
            <select required v-model="educational_background.educational_attainment" class="text-lg
                h-[7dvh]
                outline-none border-b border-black
                ">
                <option disabled value="">Select Highest Educational Attained</option>
                <option value="High School Graduate">High School Graduate</option>
                <option value="College Undergraduate">College Undergraduate</option>
                <option value="College Graduate">College Graduate</option>
            </select>

            <div v-if="educational_background.educational_attainment == 'College Graduate' || educational_background.educational_attainment == 'College Undergraduate'" class="relative">

                <input required type="text" v-model="educational_background.degree_course" id="degree" placeholder="Degree/Course*" class="
                        w-full
                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                        outline-none border-b border-gray-400 
                        text-md py-3
                        transition-colors duration-500 peer">
                <label for="degree" class="
                pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                        ">Degree/Course*</label>
            </div>

            <div class="relative">

                <input required type="text" v-model="educational_background.school_name" id="school_name" placeholder="School Name*" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="school_name" class="
                pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                                        ">School Name*</label>
            </div>
        </div>
    </div>


</template>