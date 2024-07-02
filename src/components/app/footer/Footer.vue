<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { PhoneIcon } from "lucide-vue-next";

const navLinks = [
    {
        title: "Support",
        links: [
            {
                title: "Contact",
                href: "/contact",
            },
            {
                title: "Documentation",
                href: "https://docs.enkryptify.com",
            },
        ],
    },
    {
        title: "Company",
        links: [
            {
                title: "About us",
                href: "/about-us",
            },
            {
                title: "Pricing",
                href: "/pricing",
            },
        ],
    },
    {
        title: "Legal",
        links: [
            {
                title: "Privacy Policy",
                href: "/privacy-policy",
            },
            {
                title: "Terms of Service",
                href: "/terms-of-service",
            },
            {
                title: "GDPR Compliance",
                href: "/gdpr",
            },
        ],
    },
];
</script>

<template>
    <footer class="relative mt-56 border-t bg-card pt-44 text-card-foreground">
        <div
            class="absolute left-1/2 top-0 w-full max-w-[940px] -translate-x-1/2 translate-y-[-225px] px-5 sm:translate-y-[-150px]"
        >
            <div
                class="flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-primary p-6 text-center text-primary-foreground sm:p-8"
            >
                <h3>Still have questions?</h3>
                <p class="w-full sm:w-[85%]">
                    Not sure how Enkryptify works or how we can secure your business? Send us a message or book a call.
                    We&apos;re here to provide the answers and support you need.
                </p>
                <div class="mt-4 flex flex-col items-center gap-4 sm:flex-row">
                    <Button
                        size="lg"
                        class="flex items-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    >
                        <PhoneIcon :size="20" />
                        Book a call
                    </Button>

                    <a href="https://docs.enkryptify.com/">
                        <Button
                            size="lg"
                            class="flex items-center gap-2 border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            variant="outline"
                        >
                            Documentation
                        </Button>
                    </a>
                </div>
            </div>
        </div>

        <div class="container flex flex-col pb-20 lg:flex-row lg:justify-between">
            <div class="flex flex-col items-center gap-1 text-center lg:items-start lg:text-left">
                <p class="text-3xl font-bold">Enkryptify</p>
                <p class="text-muted-foreground">© {{ new Date().getFullYear() }} Enkryptify. All rights reserved.</p>
                <div class="flex items-center gap-2">
                    <a href="mailto:contact@enkryptify.com" class="text-primary"> contact@enkryptify.com </a>
                    <div class="h-1 w-1 rounded-full bg-muted-foreground"></div>
                    <a href="#">
                        <img src="@/icons/linkedin.svg" class="w-6 h-6" />
                    </a>
                </div>
            </div>

            <div class="mt-8 flex flex-col gap-16 lg:mt-0 lg:flex-row">
                <div v-for="nav in navLinks" :key="nav.title" class="text-center lg:text-left">
                    <p class="text-lg font-bold">{{ nav.title }}</p>
                    <ul class="mt-3 space-y-1">
                        <li v-for="link in nav.links" :key="link.title">
                            <a
                                :href="link.href"
                                class="text-muted-foreground transition-colors duration-100 hover:text-primary"
                            >
                                {{ link.title }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.05);
}
</style>
