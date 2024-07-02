<script setup lang="ts">
import { defineProps } from "vue";
import { ChevronRightIcon } from "lucide-vue-next";

const props = defineProps({
    title: String,
    description: String,
    href: String,
    Icon: Object,
});

const { title, description, href, Icon } = props;
</script>

<template>
    <div class="flex flex-col gap-2 rounded border bg-card p-4 text-card-foreground">
        <div class="flex items-center gap-3">
            <div class="flex h-14 w-14 items-center justify-center rounded bg-primary">
                <Icon :size="24" color="white" />
            </div>
            <h5 class="font-semibold">{{ title }}</h5>
        </div>
        <p>{{ description }}</p>

        <div class="flex flex-grow items-end">
            <a :href="href" class="flex items-center transition-all duration-100 hover:text-primary">
                <span class="font-medium">Learn more</span>
                <ChevronRightIcon :size="20" class="ml-1" />
            </a>
        </div>
    </div>
</template>
