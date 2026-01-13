"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Gamepad2, Users, ShoppingCart, Vote, ShieldAlert, Globe, Search, Disc as Discord } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LEFT = [
    { name: "Home", href: "/", icon: Globe },
    { name: "Forums", href: "/forums", icon: Users },
    { name: "Store", href: "/store", icon: ShoppingCart },
];

const NAV_RIGHT = [
    { name: "Vote", href: "/vote", icon: Vote },
    { name: "Cobblemon", href: "/cobblemon", icon: Gamepad2 },
    { name: "Bans", href: "/bans", icon: ShieldAlert },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [copied, setCopied] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const serverIP = "SYNCGAMES.NETWORK";

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

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const navLinkClass = "px-3 xl:px-6 py-8 text-[13px] xl:text-[15px] font-semibold uppercase tracking-wide text-white hover:text-[#FFDE93] transition-all relative group flex items-center h-full hover:shadow-[inset_0_-6px_0_0_#FFDE93]";

    return (
        <header className="absolute top-0 left-0 w-full z-50">
            {/* Top Utility Bar */}
            <div className="bg-black/40 backdrop-blur-sm py-3">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end gap-6">
                    <Link href="/login" className="text-[11px] uppercase font-bold text-white/60 hover:text-white transition-colors">Log in</Link>
                    <Link href="/register" className="text-[11px] uppercase font-bold text-white/60 hover:text-white transition-colors">Register</Link>
                </div>
            </div>

            {/* Main Navbar Container */}
            <nav
                className={`transition-all duration-300 relative ${scrolled
                    ? "bg-background"
                    : "bg-background/10 backdrop-blur-sm"
                    } border-y border-primary/20`}
            >
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <div className="flex justify-between items-center gap-6 h-16 lg:h-20 relative">

                        {/* Desktop Navigation Left */}
                        <div className="hidden lg:flex flex-1 items-center justify-end pr-8 xl:pr-16 h-full">
                            {NAV_LEFT.map((link) => (
                                <Link key={link.name} href={link.href} className={navLinkClass}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Central Logo - Overlapping (Desktop Only) */}
                        <div className="relative z-50 flex-shrink-0 flex items-center justify-center hidden lg:flex">
                            <Link href="/" className="group relative mb-[-5rem] transition-transform duration-300 hover:scale-105">
                                <div className="absolute -inset-8 bg-[#FFDE93]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <img
                                    src="/logo.png"
                                    alt="SyncGames"
                                    className="h-52 w-auto relative drop-shadow-[0_0_25px_rgba(255,222,147,0.4)]"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation Right */}
                        <div className="hidden lg:flex flex-1 items-center justify-start pl-8 xl:pl-16 h-full">
                            {NAV_RIGHT.map((link) => (
                                <Link key={link.name} href={link.href} className={navLinkClass}>
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button - Left Aligned */}
                        <div className="lg:hidden flex-1 flex items-center pl-4">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 text-white hover:text-[#FFDE93] transition-colors relative z-[60]"
                                aria-label="Toggle Menu"
                            >
                                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Row 1: Sub-header Row (Welcome & Search) - RELOCATED */}
            <div className="w-full bg-background/10 py-4 px-4 hidden lg:block relative">
                <div className="max-w-4xl mx-auto flex justify-between items-center px-4 lg:px-8">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-sm font-bold text-white/80 tracking-wide"
                    >
                        Welcome to SyncGames!
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
                            className="w-full bg-transparent border-b border-white/10 py-1.5 focus:border-[#FFDE93]/50 transition-colors text-[15px] text-white placeholder:text-[#c0b3e4] outline-none pr-8 font-medium"
                        />
                        <Search className="absolute right-0 top-2 w-4 h-4 text-white/30 group-hover:text-white/60 transition-colors cursor-pointer" />
                    </motion.div>
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
                                <span className="text-sm font-black uppercase tracking-[0.2em] text-[#FFDE93]/80">Menu</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 text-white/60 hover:text-white transition-colors"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex flex-col px-6 py-8 space-y-5 flex-1 overflow-y-auto">
                                {[...NAV_LEFT, ...NAV_RIGHT].map((link, index) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center space-x-4 text-lg font-bold uppercase tracking-widest text-white/70 hover:text-[#FFDE93] transition-all border-b border-white/5 pb-3 group"
                                        >
                                            <link.icon className="w-5 h-5 text-[#FFDE93]/60 group-hover:scale-110 transition-transform" />
                                            <span>{link.name}</span>
                                        </Link>
                                    </motion.div>
                                ))}

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
