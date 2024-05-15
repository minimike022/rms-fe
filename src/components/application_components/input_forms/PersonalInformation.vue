<script setup>
import {computed, ref, watch} from 'vue'

const emit = defineEmits(['personal_info'])

const personalInfo_toParent = () => {
    emit('personal_info', personal_information.value)
} 

const calculateAge = (birthdate) => {
      const birthday = new Date(birthdate);
      const today = new Date();
      let age = today.getFullYear() - birthday.getFullYear();
      const m = today.getMonth() - birthday.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
        age--;
      }

      return age;
    }

const personal_information = ref({
    first_name: '',
    middle_name: '',
    last_name: '',
    extension_name: '',
    birthdate: null,
    age: null,
    present_address: ''
})

watch(
    () => personal_information.value.birthdate,
    () => {
        personal_information.value.age = computed(() => {
            return calculateAge(personal_information.value.birthdate)
        })
    }
)

watch(personal_information.value,
    () => {
        personalInfo_toParent()
    }
)


</script>

<template>
    <div class="w-[95dvh] h-auto mt-6 px-11 py-8 
        drop-shadow-xl
        bg-white  rounded-2xl">
        <h1 class="text-2xl font-semibold">Personal Information</h1>
        <div class="grid grid-cols-2 gap-x-4 gap-y-8
            mt-6">
            <div class="relative">
                <input type="text" v-model.lazy="personal_information.first_name" id="first_name" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="first_name" class="
                                        absolute
                                        text-md text-gray-400 cursor-text
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">First Name*</label>
            </div>
            <div class="relative">
                <input type="text" v-model.lazy="personal_information.middle_name" id="middle_name" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="middle_name" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Middle Name*</label>
            </div>
            <div class="relative">
                <input type="text" v-model.lazy="personal_information.last_name" id="last_name" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="last_name" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Last Name*</label>
            </div>
            <div class="relative flex">
                <h1 class="text-sm 
                absolute -top-4
                ">Extension Name (if any)</h1>
                <select v-model.lazy="personal_information.extension_name" class="w-full outline-none border-b border-gray-400">
                    <option value="" class="text-lg text-gray-400">Choose your option</option>
                    <option value="Jr" class="text-lg text-blue-500">Jr</option>
                    <option value="Sr" class="text-lg text-blue-500">Sr</option>
                    <option value="I" class="text-lg text-blue-500">I</option>
                    <option value="II" class="text-lg text-blue-500">II</option>
                    <option value="III" class="text-lg text-blue-500">III</option>
                    <option value="IV" class="text-lg text-blue-500">IV</option>
                    <option value="V" class="text-lg text-blue-500">V</option>
                </select>
            </div>
                
            <div class="relative">
                <input type="date" v-model.lazy="personal_information.birthdate" id="birthdate" class="
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
                <label for="birthdate" class="
                                        absolute
                                        text-sm text-gray-400
                                        left-0 -top-4
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Birthdate *</label>
            </div>
            <div class="relative">
                <input type="text" disabled v-model="personal_information.age" id="age" class="
                                     bg-white
                                        w-full
                                        outline-none border-b border-dotted border-gray-400 
                                        text-md py-3">
                <label for="age" class="
                                        absolute
                                        text-sm text-gray-400
                                        left-0 -top-4
                                        ">Age</label>
            </div>
        </div>
        <div class="relative mt-8">
            <input type="text" v-model.lazy="personal_information.present_address" id="present_address" class="
                                        cursor-text
                                        w-full
                                     focus:border-blue-600 focus:border-b-2
                                        outline-none border-b border-gray-400 
                                        text-md py-3
                                        transition-colors duration-500 peer">
            <label for="present_address" class="
                                        absolute
                                        text-md text-gray-400
                                        left-0 top-1
                                        peer-focus:text-blue-600 peer-focus:text-sm peer-focus:-top-4 
                                        transition-all duration-100
                                        ">Present Address*</label>
        </div>
    </div>
</template>