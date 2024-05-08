<script setup>
import {ref} from 'vue'
import axiosClient from "../../utils/axiosClient"
import VueCookies from 'vue-cookies'
import { useRouter } from 'vue-router';


const router = useRouter()

const user_account = ref({
    account_username: '', 
    account_password: ''
})

const login_account = () => {
    axiosClient.post("/user/login",{
        username: user_account.value.account_username,
        password: user_account.value.account_password
    })
    .then(res => {
        router.push("/application_forms")
    })  
    .catch(error => console.log(error))
}
</script>

<template>
    <div class="bg-white w-[60dvh] h-[65dvh]
    rounded-lg
    px-11 pt-8
    ">
        <!--Header Container-->
        <div>
            <h1 class="text-3xl font-semibold">Sign In</h1>
            <h2>Please fill up forms to sign in</h2>
        </div>
        <!--Form Container-->
        <div>
            <form @submit.prevent="login_account()" class="flex flex-col">
                <div class="flex flex-col mt-4">
                    
                    <label for="email" class="text-lg">Email</label>
                    <div class="relative">
                        <img src="/src/assets/mail.svg" alt="photo" class="absolute top-[2.5dvh] left-4 h-[25px] w-[25px]">
                        <input v-model="user_account.account_username" type="text" name="email" class="outline-none border-2 border-[#BABABA] rounded-lg h-[6.5dvh] w-full mt-2 pl-14">
                    </div>
                    
                </div>
                <div class="flex flex-col mt-4">
                    <label for="password" class="text-lg">Password</label>
                    <div class="relative">
                        <img src="/src/assets/lock.svg" alt="photo" class="absolute top-[2.5dvh] left-4 h-[25px] w-[25px]">
                        <input v-model="user_account.account_password" type="password" name="password" class="outline-none border-2 border-[#BABABA] rounded-lg h-[6.5dvh] w-full mt-2 pl-14 pr-3">
                    </div>
                </div>
                <h1 class="text-end text-[14px] my-2">Forgot Password?</h1>
                <input type="submit" value="Sign In"
                    class="outline-none h-[6.5dvh] rounded-lg text-white text-lg font-bold bg-gradient-to-r from-[#4AD4FF] to-[#4754C9]">
            </form>
        <div class="bg-black h-[3dvh] w-[7dvh] rounded-xl my-4">

        </div>
        </div>
    </div>
</template>