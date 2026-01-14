"use client";

import Image from "next/image";
import { Hero } from "@/components/features/hytale/home/hero";
import { NewsFeed } from "@/components/features/hytale/home/news-feed";
import { Sidebar } from "@/components/features/hytale/home/sidebar";
import { SnowEffect } from "@/components/ui/snow-effect";

export default function HytaleHome() {
    return (
        <div className="min-h-screen bg-[#100F10] text-foreground font-lato">
            <main className="relative w-full">
                {/* Background Visuals */}
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
                        <div className="absolute inset-0 bg-gradient-to-b from-[#100F10] via-transparent to-[#100F10]" />
                    </div>
                    <SnowEffect />
                </div>

                {/* Centered Content Container with Ambient Glow */}
                <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-24">
                    <div className="space-y-12 md:space-y-16">
                        {/* Hero Section */}
                        <Hero />

                        {/* Main Content Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
                            {/* News Feed - Column 1-8 */}
                            <div className="md:col-span-8">
                                <NewsFeed />
                            </div>

                            {/* Sidebar - Column 9-12 */}
                            <div className="md:col-span-4">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
