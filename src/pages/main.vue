<script setup>
import { RouterView } from 'vue-router'
import Navigation from "/src/components/navigation_components/Navigation.vue"
import HeaderComponent from "/src/components/HeaderComponent.vue"
</script>

<template>
  <div class="flex
  font-Poppins">
    <Navigation />
    <div class="
    sm:ml-52
    px-2
    w-screen
    h-full
    ">
      <HeaderComponent />
      <RouterView />
    </div>
  </div>
</template>