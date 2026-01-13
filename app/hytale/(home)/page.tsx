"use client";

import { Twitter, MessageCircle, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HytaleHome() {
    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black">
            <main className="relative w-full h-screen overflow-hidden">

                {/* Animated Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-blue-900/20 animate-pulse" />

                {/* Hytale Full Panel */}
                <div className="relative z-10 flex w-full h-full">
                    <div className="group relative h-full w-full overflow-hidden">

                        {/* Background Overlay with Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-purple-600/30 to-blue-600/20 opacity-30 transition-opacity duration-700 group-hover:opacity-50" />

                        {/* Image with Enhanced Effects */}
                        <motion.img
                            initial={{ scale: 1.1, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.25 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            src="/hytale.jpg"
                            className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:opacity-35"
                            alt="Hytale Background"
                        />

                        {/* Animated Particles/Stars Effect */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            {[...Array(20)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-white/40 rounded-full"
                                    initial={{
                                        x: Math.random() * window.innerWidth,
                                        y: Math.random() * window.innerHeight,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        y: [null, Math.random() * window.innerHeight],
                                        opacity: [0, 1, 0],
                                    }}
                                    transition={{
                                        duration: 3 + Math.random() * 4,
                                        repeat: Infinity,
                                        delay: Math.random() * 2,
                                    }}
                                />
                            ))}
                        </div>

                        {/* Center Content */}
                        <div className="relative z-20 pt-30 flex h-full w-full flex-col items-center justify-center text-center px-4">

                            {/* Sparkles Icon with Animation */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ duration: 0.8, ease: "backOut" }}
                                className="mb-6"
                            >
                                <Sparkles className="w-10 h-10 text-[#FFDE93] drop-shadow-[0_0_20px_rgba(255,222,147,0.6)]" />
                            </motion.div>

                            {/* Main Heading with Stagger Animation */}
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-6xl md:text-8xl font-black tracking-widest text-white drop-shadow-2xl relative"
                            >
                                <span className="bg-gradient-to-r from-white via-[#FFDE93] to-white bg-clip-text text-transparent animate-pulse">
                                    COMING SOON
                                </span>

                                {/* Glow Effect */}
                                <div className="absolute inset-0 blur-2xl opacity-50 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 -z-10" />
                            </motion.h1>

                            {/* Subtitle with Icon */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mt-6 flex items-center gap-3"
                            >
                                <Clock className="w-5 h-5 text-[#FFDE93]/80" />
                                <p className="text-base md:text-lg text-white/80 uppercase tracking-[0.3em] font-bold">
                                    Hytale Support Arriving
                                </p>
                            </motion.div>

                            {/* Decorative Line */}
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: "12rem" }}
                                transition={{ duration: 1, delay: 0.6 }}
                                className="mt-8 h-[2px] bg-gradient-to-r from-transparent via-[#FFDE93] to-transparent"
                            />

                            {/* Enhanced Social Icons */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.8 }}
                                className="mt-10 flex items-center gap-8"
                            >
                                <motion.a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60 hover:text-[#FFDE93] hover:border-[#FFDE93]/50 transition-all duration-300"
                                >
                                    <Twitter className="w-6 h-6" />
                                    <div className="absolute inset-0 rounded-full bg-[#FFDE93]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                                </motion.a>

                                <motion.a
                                    href="/discord"
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="group relative p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-white/60 hover:text-[#FFDE93] hover:border-[#FFDE93]/50 transition-all duration-300"
                                >
                                    <MessageCircle className="w-6 h-6" />
                                    <div className="absolute inset-0 rounded-full bg-[#FFDE93]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                                </motion.a>
                            </motion.div>

                            {/* Notify Me Button (Optional Enhancement) */}
                            <motion.button
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 1 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="mt-12 px-8 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white font-bold uppercase tracking-widest rounded-lg shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] transition-all duration-300 border border-white/20"
                            >
                                Notify Me
                            </motion.button>

                            {/* Bottom Tagline */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                className="absolute bottom-5 text-xs md:text-sm text-white/40 uppercase tracking-[0.4em]"
                            >
                                The Adventure Awaits
                            </motion.p>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
}
