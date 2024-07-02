<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps({
    id: String,
    className: String,
    title: String,
});

const { id, className, title } = props;
</script>

<template>
    <h2 :id="id ?? ''" :class="cn('py-12 text-center', className)">
        {{ title }}
    </h2>
</template>
