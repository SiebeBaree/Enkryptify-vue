<script setup lang="ts">
import SectionWrapper from "@/components/shared/SectionWrapper.vue";
import { Button } from "@/components/ui/button";
import { PhoneIcon, BlocksIcon } from "lucide-vue-next";
</script>

<template>
    <SectionWrapper
        class="flex h-[70vh] min-h-[600px] max-w-[800px] flex-col items-center justify-center gap-2 py-16 text-center"
    >
        <div class="flex items-center gap-1 text-sm md:gap-3 md:text-lg">
            <p>Built in</p>
            <div class="flex items-center gap-1.5 text-sm md:text-lg">
                <span>
                    <img src="@/icons/flagBelgium.svg" alt="Flag of Belgium" />
                </span>
                <p>Belgium</p>
            </div>
        </div>
        <h1 class="text-3xl sm:text-5xl md:text-6xl">
            The Modern Way Of
            <span class="relative -mr-2 inline-block bg-primary px-1.5 py-1 text-primary-foreground">Secrets</span>
            Management
        </h1>
        <p class="pb-6 pt-3 text-sm md:text-base">
            Still sharing sensitive secrets via email or chat? Enkryptify is a secure platform designed to manage and
            distribute your environment variables safely and securely.
        </p>

        <div class="flex items-center gap-4">
            <Button size="lg" class="flex items-center gap-2">
                <PhoneIcon :size="20" />
                Book a call
            </Button>

            <Button size="lg" class="flex items-center gap-2" variant="outline">
                <BlocksIcon :size="20" />
                Features
            </Button>
        </div>
        <p class="mt-1 text-xs text-muted-foreground">Enkryptify is currently in beta.</p>
    </SectionWrapper>

    <div class="overflow-hidden sm:container">
        <div class="relative h-auto w-auto shadow-sm sm:rounded-xl">
            <img
                src="@/assets/images/hero.png"
                alt="Enkryptify dashboard preview"
                :width="1920"
                :height="1080"
                class="rounded-[inherit] border-b border-t sm:border"
            />
        </div>
    </div>
</template>
