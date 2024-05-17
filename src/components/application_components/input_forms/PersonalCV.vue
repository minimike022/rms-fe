<script setup>
import {ref, watch} from 'vue'

const emit = defineEmits(['personal_cv'])

const personal_cv = ref({
    selected_file: '',
    portfolio_link:'',
})

const handleFile = (event) => {
    var fileData = event.target.files[0]
    personal_cv.value.selected_file = fileData.name
}

watch(personal_cv.value,
    () => {
        emit('personal_cv', personal_cv.value)
    }
)

</script>

<template>
    <div>
        <div class="flex items-center">
            <h1 class="text-xl font-semibold">UPLOAD YOUR LATEST RESUME/CV</h1>
            <p class="font-normal text-gray-500">(only accepts .docx and .pdf)</p>
        </div>
        <label for="fileInput" class="flex items-center border-b border-gray-400">
            <div class=" mt-4 
        text-white flex items-center justify-center
        shadow-md shadow-blue-500
        bg-blue-600 file:border-none  
         h-[10dvh] w-[20dvh]
         font-bold rounded-md 
        ">
            <h1>File</h1>
        </div>
        <input required type="file" @change="handleFile" id="fileInput" class="hidden">
        <input type="text" v-model="personal_cv.selected_file" placeholder="Choose File" class=" ml-4 bg-transparent pointer-events-none">
        </label>
        <div class="relative mt-8">
                <input required type="text" v-model="personal_cv.portfolio_link" id="portfolio_link" placeholder="Portfolio Link*" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2 placeholder-transparent
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="portfolio_link" class="
                pointer-events-none
                                        absolute
                                        left-0 -translate-y-5 bg-white p-0.5 text-gray-400 transition-all text-sm 
                                        peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base 
                                        peer-focus:text-sm peer-focus:text-blue-500 peer-focus:top-0
                                        ">Portfolio Link*</label>
            </div>
    </div>
</template>