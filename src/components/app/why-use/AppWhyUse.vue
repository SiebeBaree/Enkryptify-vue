<script setup lang="ts">
import SectionWrapper from "@/components/shared/SectionWrapper.vue";
import SectionTitle from "@/components/shared/SectionTitle.vue";
import WhyUseCard from "@/components/app/why-use/WhyUseCard.vue";
import {
    ChevronRightIcon,
    type LucideIcon,
    MessageSquareMoreIcon,
    FolderTreeIcon,
    FileKey2Icon,
    GitPullRequestArrowIcon,
} from "lucide-vue-next";

type Card = {
    title: string;
    description: string;
    href: string;
    Icon: LucideIcon;
};

const cards: Card[] = [
    {
        title: "Stop sharing secrets via chat",
        description:
            "Sharing sensitive information like API keys and database credentials via chat is risky. Ensure your secrets stays secure and eliminate the risks of sharing secrets through chat applications.",
        href: "#",
        Icon: MessageSquareMoreIcon,
    },
    {
        title: "Maintain an overview",
        description:
            "Easily manage and track all your secrets in one centralized dashboard, ensuring you always have a clear and organized view of your critical information.",
        href: "#",
        Icon: FolderTreeIcon,
    },
    {
        title: "Remove all .env files",
        description:
            "Streamline your security by eliminating local .env files. Our solution centralizes environment variables securely, reducing vulnerabilities.",
        href: "#",
        Icon: FileKey2Icon,
    },
    {
        title: "One source of truth",
        description:
            "Add all your secrets in a single, secure repository, providing a reliable source of truth for your entire team. Easily track who makes changes, additions, or deletions.",
        href: "#",
        Icon: GitPullRequestArrowIcon,
    },
];
</script>

<template>
    <SectionWrapper>
        <SectionTitle title="Why use Enkryptify" />

        <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <WhyUseCard v-for="card in cards" :key="card.title" v-bind="card" />
        </div>

        <p class="mt-6 text-center">
            Missing a feature?
            <span class="cursor-pointer font-semibold text-primary hover:underline">Let us know!</span>
        </p>
    </SectionWrapper>
</template>
