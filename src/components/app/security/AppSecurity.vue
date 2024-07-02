<script setup lang="ts">
import SectionWrapper from "@/components/shared/SectionWrapper.vue";
import SectionTitle from "@/components/shared/SectionTitle.vue";
import SecurityCard from "@/components/app/security/SecurityCard.vue";

type Security = {
    title: string;
    description: string;
};

const cards: Security[] = [
    {
        title: "Enterprise Encryption",
        description:
            "Protect your secrets with our advanced encryption system. Our zero-knowledge architecture ensures only you can access your data. Every project gets a unique encryption key for unmatched protection.",
    },
    {
        title: "Account Protection",
        description:
            "We implement account lockout, MFA and email verification to prevent unauthorized access. Detailed access logs and IP whitelisting further enhance your account's protection, ensuring your data remains secure even in case of a breach.",
    },
    {
        title: "Access Control",
        description:
            "Use role-based access control and assign permissions per project or team to maintain security. Our least privileged model ensures users only have access to what they need. Audit logs provide additional layers of security.",
    },
];
</script>

<template>
    <SectionWrapper>
        <SectionTitle title="Security, our top priority" />

        <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
            <SecurityCard v-for="card in cards" :key="card.title" v-bind="card" />
        </div>

        <p class="mt-6 text-center">
            Still unsure?
            <a
                class="cursor-pointer font-semibold text-primary hover:underline"
                href="https://docs.enkryptify.com/security/overview"
                target="_blank"
            >
                Read our security documentation
            </a>
        </p>
    </SectionWrapper>
</template>
