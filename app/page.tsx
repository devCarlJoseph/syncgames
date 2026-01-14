"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SnowEffect } from "@/components/ui/snow-effect";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 120);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full bg-[#080808] text-foreground font-sans overflow-hidden flex items-center justify-center px-4">

      {/* CINEMATIC FLASH */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-black z-[100]"
          />
        )}
      </AnimatePresence>

      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 0.2 : 0 }}
          transition={{ duration: 3, delay: 0.6 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,191,248,0.15)_0%,transparent_70%)]"
        />

        <motion.img
          initial={{ scale: 1.25, opacity: 0, filter: "brightness(0)" }}
          animate={{
            scale: isLoaded ? 1 : 1.25,
            opacity: isLoaded ? 0.15 : 0,
            filter: isLoaded ? "brightness(1)" : "brightness(0)"
          }}
          transition={{ duration: 3, ease: [0.16, 1, 0.3, 1] }}
          src="/hytale.jpg"
          className="w-full h-full object-cover"
          alt="Atmospheric Background"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-transparent to-[#080808]" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 2.5, delay: 1.2 }}
        >
          <SnowEffect />
        </motion.div>
      </div>

      {/* MAIN CONTENT */}
      <main className="relative z-10 flex flex-col items-center text-center">

        {/* LOGO — SMOOTH POWER-IN + IDLE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.55,
            rotateX: 18,
            rotateY: -18,
            filter: "brightness(4) blur(10px)"
          }}
          animate={{
            opacity: 1,
            scale: [0.55, 1.05, 1],
            rotateX: [18, 0, 0],
            rotateY: [-18, 0, 0],
            filter: [
              "brightness(4) blur(10px)",
              "brightness(1.6) blur(2px)",
              "brightness(1) blur(0px)"
            ]
          }}
          transition={{
            duration: 1.8,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.6
          }}
          className="relative mb-4"
        >
          {/* SOFT ENERGY RING */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.9, opacity: [0.4, 0] }}
            transition={{ duration: 3.5, ease: "easeOut" }}
            className="absolute inset-0 rounded-full border border-primary/30 blur-md"
          />

          {/* AMBIENT CORE GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.25, 0.45, 0.25]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -inset-12 bg-primary/20 blur-[90px] rounded-full"
          />

          {/* FLOATING LOGO */}
          <motion.img
            src="/logo.png"
            alt="Hysync Logo"
            className="relative z-10 w-40 md:w-[300px] lg:w-[340px] drop-shadow-[0_25px_80px_rgba(0,0,0,0.9)]"
            animate={{
              y: [0, -5, 0],
              scale: [1, 1.02, 1]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* TEXT — SMOOTH STAGGERED FADE */}
        <div className="flex flex-col items-center">

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 12 }}
            transition={{ delay: 1.9, duration: 0.8, ease: "easeOut" }}
            className="text-[9px] font-black text-primary tracking-[0.5em] uppercase mb-4"
          >
            Hysync Network
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{
              opacity: isLoaded ? 1 : 0,
              y: isLoaded ? 0 : 14,
              filter: isLoaded ? "blur(0px)" : "blur(6px)"
            }}
            transition={{
              delay: 2.1,
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1]
            }}
            className="text-white text-xl md:text-3xl font-black uppercase tracking-widest mb-4"
          >
            The Next <span className="text-primary/80">Generation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ delay: 2.35, duration: 1.1, ease: "easeOut" }}
            className="text-white/30 text-[9px] md:text-[11px] font-bold tracking-[0.2em] uppercase max-w-sm mb-6"
          >
            Experience the pure essence of Orbis in our premium hytale environments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 22 }}
            transition={{
              delay: 2.7,
              duration: 0.8,
              type: "spring",
              stiffness: 120,
              damping: 18
            }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/hysync">
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(58,191,248,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-primary/10 border border-primary/30 text-primary text-[11px] font-black tracking-[0.2em] rounded-2xl uppercase flex items-center gap-3"
              >
                Enter Portal <ChevronRight className="w-4 h-4" />
              </motion.div>
            </Link>

            <Link href="https://discord.gg/sE4PsbvS" target="_blank">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 bg-white/5 border border-white/10 text-white/40 text-[11px] font-black tracking-[0.2em] rounded-2xl uppercase"
              >
                Discord
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </main>

      {/* CORNER GLOWS */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[180px] rounded-full translate-x-1/2 translate-y-1/2" />
    </div>
  );
}
