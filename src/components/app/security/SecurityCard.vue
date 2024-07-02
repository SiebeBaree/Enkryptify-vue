<script setup lang="ts">
import { defineProps, ref } from "vue";
import { ChevronRightIcon } from "lucide-vue-next";

const props = defineProps({
    title: String,
    description: String,
});

const { title, description } = props;
const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";

let text = ref(generateRandomString(1000));

function handleOnMove() {
    text.value = generateRandomString(1000);
}

function generateRandomString(length: number) {
    return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}
</script>

<template>
    <div class="overflow-hidden rounded border bg-card">
        <div
            class="relative flex h-40 select-none items-center justify-center overflow-hidden bg-primary text-primary-foreground"
            @mousemove="handleOnMove"
            @touchmove="handleOnMove"
        >
            <h4 class="z-20">{{ title }}</h4>
            <div class="card-background absolute z-10 h-full w-full mix-blend-darken"></div>
            <div class="absolute left-0 top-0 h-full w-full break-all text-sm leading-tight text-primary-foreground/50">
                {{ text }}
            </div>
        </div>
        <div class="p-4 text-justify">
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<style scoped>
.card-background {
    background: radial-gradient(hsl(var(--primary)) 25%, transparent 70%);
}
</style>
