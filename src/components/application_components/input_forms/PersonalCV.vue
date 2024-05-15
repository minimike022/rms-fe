<script setup>

</script>

<template>
    <div>
        <div class="flex items-center">
            <h1 class="text-xl font-semibold">UPLOAD YOUR LATEST RESUME/CV</h1>
            <p class="font-normal text-gray-500">(only accepts .docx and .pdf)</p>
        </div>
        <input type="file" class="border-b w-full">

        <div class="relative mt-8">
                <input type="text" id="portfolio_link" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="portfolio_link" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Portfolio Link*</label>
            </div>
    </div>
</template>