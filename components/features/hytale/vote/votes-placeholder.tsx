"use client";

import { motion } from "framer-motion";
import { MessageSquare, Hammer, ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export function VotesPlaceholder() {
    return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 sm:p-12 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full max-w-2xl relative z-10"
            >
                <Card className="relative overflow-hidden border-white/5 bg-[#1c1c1e]/60 backdrop-blur-3xl shadow-2xl rounded-3xl p-8 sm:p-16 flex flex-col items-center text-center">
                    {/* Animated Construction Icon */}
                    <div className="relative mb-8">
                        <motion.div
                            animate={{
                                rotate: [0, -10, 10, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            className="w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center relative z-20"
                        >
                            <MessageSquare className="w-10 h-10 text-primary opacity-50 absolute" />
                            <Hammer className="w-12 h-12 text-primary relative z-10" />
                        </motion.div>
                        <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-20 animate-pulse" />
                    </div>

                    {/* Text Content */}
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-[10px] sm:text-[11px] font-black text-primary uppercase tracking-[0.4em] mb-4 block"
                    >
                        HYSYNC Community
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-widest uppercase italic mb-6"
                    >
                        Vote <span className="text-primary/60">Under Development</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-white/40 text-sm sm:text-base leading-relaxed font-bold tracking-wide mb-12 uppercase max-w-md"
                    >
                        We are currently building a powerful social hub for our community. {`Soon you'll be able to share ideas, post guides, and connect with other players.`}
                    </motion.p>

                    {/* Action Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Link
                            href="/hysync"
                            className="group flex items-center gap-3 px-8 py-4 bg-primary/10 hover:bg-primary text-primary hover:text-black text-[12px] font-black tracking-widest rounded-xl transition-all shadow-xl active:scale-95 uppercase"
                        >
                            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Return Home
                        </Link>
                    </motion.div>

                    {/* Bottom Decorative Line */}
                    <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                </Card>
            </motion.div>
        </div>
    );
}
