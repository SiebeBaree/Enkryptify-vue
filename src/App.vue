<script setup lang="ts">
import { RouterView } from "vue-router";
import Navbar from "@/components/app/navbar/Navbar.vue";
import Footer from "@/components/app/footer/Footer.vue";
</script>

<template>
    <Navbar />

    <RouterView />

    <Footer />
</template>

<style scoped></style>
