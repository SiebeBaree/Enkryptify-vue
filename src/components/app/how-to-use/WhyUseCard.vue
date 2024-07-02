<script setup lang="ts">
import { Badge } from "@/components/ui/badge";
import { defineProps } from "vue";

const props = defineProps({
    title: String,
    description: String,
    step: Number,
});

const { title, description, step } = props;
</script>

<template>
    <div class="relative flex flex-col gap-2 rounded border bg-card p-4 pt-6 text-card-foreground">
        <Badge class="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 px-12 text-base">
            Step {{ step }}
        </Badge>
        <h5>{{ title }}</h5>
        <p>{{ description }}</p>
    </div>
</template>
