"use client";

import { MembersPlaceholder } from "@/components/features/hytale/members/members-placeholder";
import { SnowEffect } from "@/components/ui/snow-effect";
import Image from "next/image";

export default function MembersPage() {
    return (
        <div className="min-h-screen bg-[#101010] text-foreground font-sans relative">
            {/* Background Atmosphere */}
            <div className="fixed inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/hytale.jpg"
                        alt="Background"
                        fill
                        style={{ objectFit: "cover" }}
                        className="opacity-10"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#101010] via-transparent to-[#101010]" />
                </div>
                <SnowEffect />
            </div>

            <main className="relative z-10 pt-[12rem] md:pt-[14rem] pb-20 container mx-auto px-4">
                <MembersPlaceholder />
            </main>
        </div>
    );
}
