<script setup lang="ts">
import NavItems from "@/components/app/navbar/NavItems.vue";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-vue-next";
import MobileNavItems from "./MobileNavItems.vue";
</script>

<template>
    <nav class="container flex items-center justify-between gap-8 py-4">
        <a href="/" class="text-2xl font-bold">Enkryptify</a>

        <div class="flex items-center gap-4">
            <NavItems />
            <Button variant="default" class="hidden md:block">Contact Us</Button>
            <Sheet>
                <SheetTrigger class="block md:hidden">
                    <MenuIcon />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Enkryptify</SheetTitle>
                    </SheetHeader>
                    <MobileNavItems />
                </SheetContent>
            </Sheet>
        </div>
    </nav>
</template>
