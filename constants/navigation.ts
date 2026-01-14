import { Globe, Users, ShoppingCart, Vote, Gamepad2, ShieldAlert } from "lucide-react";

export const NAV_LEFT = [
    { name: "Home", href: "/hysync", icon: Globe },
    { name: "Forums", href: "/hysync/forums", icon: Users },
    { name: "Store", href: "/hysync/store", icon: ShoppingCart },
];

export const NAV_RIGHT = [
    { name: "Vote", href: "/hysync/votes", icon: Vote },
    { name: "Members", href: "/hysync/members", icon: Gamepad2 },
    { name: "Bans", href: "/hysync/bans", icon: ShieldAlert },
];
