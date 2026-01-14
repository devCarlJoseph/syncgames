"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Users, Disc as Discord, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LEFT, NAV_RIGHT } from "@/constants/navigation";
import Image from "next/image";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copied, setCopied] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const serverIP = "play.hysync.org:15790";

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/hysync") return pathname === "/hysync";
    return pathname.startsWith(href);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinkClass = "px-3 xl:px-6 py-8 text-[13px] xl:text-[15px] font-semibold uppercase tracking-wide text-white hover:text-primary transition-all relative group flex items-center h-full";

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Unified Glassmorphic Shell */}
      <div className="relative group/navbar overflow-hidden md:overflow-visible">
        {/* Global Backdrop & Blur */}
        <div className="absolute inset-0 bg-white/[0.04] backdrop-blur-2xl pointer-events-none shadow-[0_4px_30px_rgba(0,0,0,0.1)]" />

        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none" />

        {/* Light Flare Background Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-[500px] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent skew-x-12"
          />
        </div>

        {/* Top Utility Bar */}
        <div className="bg-black/20 border-b border-white/[0.03] py-2 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end gap-6 text-[10px] font-black uppercase tracking-widest">
            <Link href="/login" className="text-white/40 hover:text-white transition-colors">Log in</Link>
            <Link href="/register" className="text-white/40 hover:text-white transition-colors">Register</Link>
          </div>
        </div>

        {/* Main Navbar Container */}
        <nav
          className={`transition-all duration-300 relative z-20 ${scrolled
            ? "bg-black/40"
            : "bg-transparent"
            } border-b border-white/[0.05]`}
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex justify-between items-center gap-6 h-16 lg:h-20 relative">

              {/* Desktop Navigation Left */}
              <div className="hidden lg:flex flex-1 items-center justify-end pr-8 xl:pr-16 h-full">
                {NAV_LEFT.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`${navLinkClass} ${active ? "text-primary shadow-primary" : ""}`}
                    >
                      {link.name}
                      {active && (
                        <motion.div
                          layoutId="active-nav-indicator"
                          className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-full shadow-[0_-4px_10px_rgba(58,191,248,0.5)]"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Central Logo - Overlapping (Desktop Only) */}
              <div className="relative z-[100] flex-shrink-0 flex items-center justify-center hidden lg:flex w-52 h-52">
                <Link href="/" className="group/logo relative mb-[-10rem] transition-transform duration-500 hover:scale-110 w-full h-full">
                  {/* Glow */}
                  <div className="absolute -inset-10 bg-primary/10 rounded-full blur-[70px] opacity-0 group-hover/logo:opacity-100 transition-opacity duration-700 animate-pulse" />

                  {/* Logo Image */}
                  <Image
                    src="/logo.png"
                    alt="SyncGames"
                    fill
                    className="relative z-20 filter drop-shadow-[0_5px_10px_rgba(0,0,0,0.4)] group-hover/logo:drop-shadow-[0_10px_25px_rgba(58,191,248,0.2)] transition-all duration-500"
                    priority
                  />

                  {/* Shadow */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-64 h-12 bg-black/30 blur-[45px] rounded-full pointer-events-none opacity-0 group-hover/logo:opacity-100 transition-opacity" />
                </Link>
              </div>


              {/* Desktop Navigation Right */}
              <div className="hidden lg:flex flex-1 items-center justify-start pl-8 xl:pl-16 h-full">
                {NAV_RIGHT.map((link) => {
                  const active = isLinkActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`${navLinkClass} ${active ? "text-primary shadow-primary" : ""}`}
                    >
                      {link.name}
                      {active && (
                        <motion.div
                          layoutId="active-nav-indicator"
                          className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-full shadow-[0_-4px_10px_rgba(58,191,248,0.5)]"
                          transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Menu Button - Left Aligned */}
              <div className="lg:hidden flex-1 flex items-center pl-4">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 text-white hover:text-primary transition-all relative z-[60]"
                  aria-label="Toggle Menu"
                >
                  {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Sub-header Containers (Internal to Shell) */}
        <div className="relative z-10">
          {/* Row 1: Sub-header Row (Welcome & Search) */}
          <div className="w-full bg-white/[0.01] hover:bg-white/[0.03] transition-colors py-4 px-4 hidden lg:block border-b border-white/[0.03]">
            <div className="max-w-4xl mx-auto flex justify-between items-center px-4 lg:px-8">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm font-bold text-white/40 tracking-wide"
              >
                Welcome to Hysync!
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative w-48 group"
              >
                <input
                  type="text"
                  placeholder="Find Player"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-b border-white/5 py-1.5 focus:border-primary/30 transition-colors text-sm text-white/50  placeholder:text-white/40 outline-none pr-8 font-medium"
                />
                <Search className="absolute right-0 top-2 w-4 h-4 text-white/20 group-hover:text-primary/50 transition-colors cursor-pointer" />
              </motion.div>
            </div>
          </div>

          {/* Row 2: Info Bar Row (Domain & Discord) */}
          <div className="w-full bg-white/[0.02] hover:bg-white/[0.03] transition-colors py-3.5 px-4 hidden lg:block border-b border-white/[0.05]">
            <div className="max-w-5xl mx-auto flex justify-between items-center px-4 lg:px-8">
              {/* Left: Server IP */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={copyToClipboard}
                className="flex items-center gap-4 cursor-pointer group active:scale-95 px-4 py-1.5 rounded-lg transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:shadow-[0_0_15px_rgba(58,191,248,0.2)]">
                  <Users className="w-5 h-5 text-primary" />
                </div>

                <div className="flex flex-col">
                  <span className="text-[15px] font-black text-white tracking-[0.1em] uppercase group-hover:text-primary transition-colors">{serverIP}</span>
                </div>

                <AnimatePresence>
                  {copied && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: -45 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute bg-primary text-black text-[10px] font-black px-2 py-1 rounded shadow-xl left-1/2 -translate-x-1/2"
                    >
                      COPIED!
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Right: Discord Connection */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-4"
              >
                <Link
                  href="https://discord.gg/sE4PsbvS"
                  target="_blank"
                  className="flex items-center gap-4 group transition-all px-4 py-1.5 rounded-lg"
                >
                  <div className="flex flex-col items-end">
                    <span className="text-[15px] font-black text-white uppercase tracking-[0.1em] group-hover:text-primary transition-colors">Join Our Discord</span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#5865F2]/10 flex items-center justify-center group-hover:bg-[#5865F2]/20 transition-all group-hover:rotate-12 group-hover:shadow-[0_0_15px_rgba(88,101,242,0.2)]">
                    <Discord className="w-5 h-5 text-white" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>



      {/* Mobile Menu Aside with Framer Motion (Omitted for brevity, keep existing) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] lg:hidden"
            />

            {/* Side Menu */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-[85%] max-w-sm bg-[#0a0a0a] border-r border-white/10 z-[60] lg:hidden flex flex-col"
            >
              {/* Side Menu Header */}
              <div className="flex items-center justify-between px-6 h-20 border-b border-white/5 bg-white/[0.02]">
                <span className="text-sm font-black uppercase tracking-[0.2em] text-primary/80">Menu</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-white/60 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex flex-col px-6 py-8 space-y-5 flex-1 overflow-y-auto">
                {[...NAV_LEFT, ...NAV_RIGHT].map((link, index) => {
                  const active = isLinkActive(link.href);
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center space-x-4 text-lg font-bold uppercase tracking-widest transition-all border-b border-white/5 pb-3 group ${active ? "text-primary" : "text-white/70 hover:text-primary"
                          }`}
                      >
                        <link.icon className={`w-5 h-5 group-hover:scale-110 transition-transform ${active ? "text-primary" : "text-primary/60"
                          }`} />
                        <span>{link.name}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-6 flex flex-col gap-3 mt-auto"
                >
                  <Link
                    href="/login"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3.5 text-center text-sm font-bold uppercase tracking-widest text-white/50 bg-white/5 rounded-lg border border-white/10"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/play"
                    onClick={() => setIsOpen(false)}
                    className="w-full py-3.5 text-center text-sm font-bold uppercase tracking-widest bg-gradient-to-r from-primary to-cyan-600 text-primary-foreground rounded-lg shadow-[0_0_20px_rgba(var(--primary),0.2)] transition-all active:scale-[0.98]"
                  >
                    JOIN SERVER
                  </Link>
                </motion.div>
              </div>

              <div className="px-6 py-6 border-t border-white/5 bg-white/[0.01]">
                <p className="text-[9px] uppercase tracking-widest text-white/20 text-center font-bold">
                  &copy; 2026 SyncGames Network
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

    </header>
  );
}
