<script setup lang="ts">
import { cn } from "@/lib/utils";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { navItemsList } from "@/lib/navItems";

const route = useRoute();
const currentPath = ref(route.path);
</script>

<template>
    <div class="items-center gap-2 hidden md:flex">
        <a
            v-for="item in navItemsList"
            :key="item.href"
            :href="item.href"
            :class="
                cn(
                    'rounded px-6 py-2 text-sm transition-colors duration-100 hover:bg-black/5',
                    currentPath === item.href && 'bg-black/5',
                )
            "
        >
            {{ item.name }}
        </a>
    </div>
</template>
