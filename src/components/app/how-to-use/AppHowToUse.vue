<script setup lang="ts">
import SectionWrapper from "@/components/shared/SectionWrapper.vue";
import SectionTitle from "@/components/shared/SectionTitle.vue";
import WhyUseCard from "@/components/app/how-to-use/WhyUseCard.vue";

type HowToUseCard = {
    title: string;
    description: string;
};

const cards: HowToUseCard[] = [
    {
        title: "Import your .env files",
        description:
            "Streamline your setup process by seamlessly importing your .env files to load in all your secrets and API keys.",
    },
    {
        title: "Manage your secrets",
        description:
            "Effortlessly navigate through your confidential data, making changes, deletions, creations, and retrievals with seamless ease.",
    },
    {
        title: "Export to your environment",
        description:
            "Easily export all your data for seamless project integration, or retrieve a single value with minimal effort.",
    },
];
</script>

<template>
    <SectionWrapper>
        <SectionTitle title="How to use Enkryptify?" />

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-4">
            <WhyUseCard v-for="(card, index) in cards" :key="card.title" v-bind="card" :step="index + 1" />
        </div>
    </SectionWrapper>
</template>
