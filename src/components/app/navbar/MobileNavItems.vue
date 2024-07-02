<script setup lang="ts">
import { cn } from "@/lib/utils";
import { navItemsList } from "@/lib/navItems";
import { useRoute } from "vue-router";
import { ref } from "vue";
import { Button } from "@/components/ui/button";
import { RouterLink } from "vue-router";

const route = useRoute();
const currentPath = ref(route.path);
</script>

<template>
    <div className="flex flex-col justify-between h-full gap-8 pt-8">
        <div className="flex flex-col gap-2">
            <RouterLink
                v-for="item in navItemsList"
                :key="item.href"
                :to="item.href"
                :class="
                    cn(
                        'flex items-center gap-3 p-2 rounded transition-all duration-100',
                        currentPath === item.href
                            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                            : 'hover:bg-card-selected',
                    )
                "
            >
                <component :is="item.Icon" class="h-5 w-5" />
                <p className="transition-all duration-100">{{ item.name }}</p>
            </RouterLink>
        </div>

        <Button class="mb-6">Contact Us</Button>
    </div>
</template>
