"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Vote } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function Hero() {
    return (
        <section className="relative z-10 pt-[9rem] pb-5 flex flex-col items-center overflow-hidden font-sans px-4">

            {/* Main Hero Box - WELCOME BLOCK */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative z-10 w-full max-w-6xl"
            >
                <Card className="relative overflow-hidden border-white/20 bg-white/5 backdrop-blur-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]">
                    {/* Glassmorphism Background Elements */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent pointer-events-none" />
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FFDE93]/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />

                    {/* Noise texture overlay for glass effect */}
                    <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none" />

                    <CardContent className="p-6 md:p-8 relative z-20">
                        <div className="flex flex-col md:flex-row items-center md:items-start">
                            {/* Welcome Text */}
                            <div className="flex-1 text-center md:text-left pr-0 md:pr-8">
                                <motion.h2
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-xl md:text-2xl font-bold text-white mb-3"
                                >
                                    Welcome, friend!
                                </motion.h2>
                                <p className="text-white/90 text-sm md:text-base max-w-md leading-relaxed font-medium mb-3">
                                    SyncGames is a friendly and fun loving community with no toxicity allowed. Join us today to try our game modes and you'll feel right at home!
                                </p>
                                <p className="text-white/60 text-xs uppercase font-bold tracking-wide">
                                    Join now at <span className="text-white">PLAY.SYNCGAMES.COM</span>
                                </p>
                            </div>

                            {/* Feature Tiles */}
                            <div className="flex flex-wrap justify-center gap-6 mt-8 md:mt-0">
                                <FeatureTile
                                    icon={ShoppingCart}
                                    title="Store"
                                    subtitle="SUPPORT US!"
                                    image="/store-bg.png"
                                />
                                <FeatureTile
                                    icon={Vote}
                                    title="Vote"
                                    subtitle="EARN REWARDS!"
                                    image="/vote-bg.png"
                                />
                            </div>
                        </div>
                    </CardContent>

                    {/* CTA Button - CLICK TO PLAY! */}
                    <CardFooter className="p-0">
                        <Link href="/play" className="block w-full">
                            <motion.div
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative w-full py-5 md:py-6 flex items-center justify-center group transition-all border-t border-white/20 bg-black/20 backdrop-blur-sm"
                            >
                                <span className="text-lg md:text-xl font-bold text-[#FFDE93] uppercase tracking-wide group-hover:text-[#FFE8B3] transition-colors">
                                    Click to play!
                                </span>
                            </motion.div>
                        </Link>
                    </CardFooter>
                </Card>
            </motion.div>
        </section>
    );
}

function FeatureTile({ icon: Icon, title, subtitle, image }: any) {
    return (
        <motion.div
            whileHover={{ y: -4 }}
            className="flex flex-col items-center group cursor-pointer relative"
        >
            {/* Circular Container with Glass Effect */}
            <div className="relative w-[90px] h-[90px] mb-3 flex items-center justify-center">
                {/* Inner Icon Body with Glassmorphism */}
                <div className="w-[80px] h-[80px] rounded-full overflow-hidden border-2 border-white/30 shadow-xl relative bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:border-[#FFDE93]/50 group-hover:bg-white/15 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300 relative z-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                </div>
            </div>

            <h5 className="text-base font-bold text-white mb-1">{title}</h5>
            <small className="text-[9px] font-bold tracking-wider text-white/50 uppercase">{subtitle}</small>
        </motion.div>
    );
}
