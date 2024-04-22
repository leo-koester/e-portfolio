<template>
    <HeaderComponent />
    <RouterView />
    <FooterComponent />
</template>

<script setup lang="ts">
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import "@/assets/fontawesome/css/all.css";
</script>
