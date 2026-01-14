"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const steps = [
    "Launch Hytale in your Hytale Launcher",
    "Browse to the server browser or multiplayer area",
    "Add a server",
    'Add the server "Hysync" with the address below',
    "Connect to Hysync!"
];

const servers = [
    { label: "Asia Server", value: "play.hysync.org:15790" },
    { label: "EU Server", value: "Coming Soon" },
    { label: "ES Server", value: "Coming Soon" }
];

export default function PlayPage() {
    const [copied, setCopied] = useState("");

    const handleCopy = (value: string) => {
        navigator.clipboard.writeText(value);
        setCopied(value);
        setTimeout(() => setCopied(""), 2000);
    };

    return (
        <section className="min-h-screen bg-[#1a1a1a] text-white flex flex-col items-center pt-[15rem] px-4 py-16 font-sans">

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-center text-primary/90"
            >
                How to Play Hysync
            </motion.h1>

            {/* Steps */}
            <motion.ol
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="list-decimal list-inside space-y-2 text-white/70 max-w-3xl mb-12"
            >
                {steps.map((step, index) => (
                    <li key={index}>
                        <span className="font-semibold text-white">Step {index + 1}.</span> {step}
                    </li>
                ))}
            </motion.ol>

            {/* Servers */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="w-full max-w-2xl space-y-6 mb-12"
            >
                {servers.map((server, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <span className="font-bold text-white/90">{server.label}</span>
                        <div className="flex">
                            <input
                                type="text"
                                value={server.value}
                                readOnly
                                className="flex-1 px-4 py-2 rounded-l-lg bg-[#333] text-white/80 border border-gray-700 focus:outline-none"
                            />
                            <button
                                onClick={() => handleCopy(server.value)}
                                className={`px-4 py-2 rounded-r-lg bg-primary/70 text-black font-bold transition-colors hover:bg-primary cursor-pointer`}
                            >
                                {copied === server.value ? "Copied!" : "Copy"}
                            </button>
                        </div>
                    </div>
                ))}
            </motion.div>

            {/* Discord CTA */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="text-center"
            >
                <p className="text-white/50 mb-4 max-w-xl">
                    {`Don't forget to join our Discord to get rewards, participate in events, and connect with the community.`}
                </p>
                <Link href="https://discord.gg/sE4PsbvS" target="_blank">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#7289da] text-white font-bold px-6 py-3 rounded-lg shadow-lg hover:bg-[#5b6eae] transition-colors"
                    >
                        Discord
                    </motion.button>
                </Link>
            </motion.div>

        </section>
    );
}
