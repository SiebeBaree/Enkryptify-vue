import { CreditCardIcon, LogInIcon, type LucideIcon, ShieldCheckIcon } from "lucide-vue-next";

export type NavItemsType = {
    name: string;
    href: string;
    Icon: LucideIcon;
};

export const navItemsList: NavItemsType[] = [
    { name: "Security", href: "/security", Icon: ShieldCheckIcon },
    { name: "Pricing", href: "/pricing", Icon: CreditCardIcon },
    { name: "Sign Up", href: "/register", Icon: LogInIcon },
];
