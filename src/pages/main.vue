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
    mt-[8.5dvh] px-[2dvh]
    h-full
    w-screen
    ">
      <HeaderComponent />
      <RouterView />
    </div>
  </div>
</template>