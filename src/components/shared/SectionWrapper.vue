<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps({
    id: String,
    className: String,
});

const { id, className } = props;
</script>

<template>
    <div :id="id" :class="cn('container py-20', className)">
        <slot></slot>
    </div>
</template>
