"use client";

import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#050510] border-t border-white/[0.05] pt-16 pb-12 px-4 font-sans relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                {/* Branding/Copyright */}
                <p className="text-[11px] font-black text-white/30 uppercase tracking-[0.25em] mb-4 text-center">
                    &copy; 2026 SyncGames Network. All Rights Reserved.
                </p>

                {/* Disclaimer */}
                <div className="max-w-2xl text-center mb-8">
                    <p className="text-[10px] font-bold text-white/15 leading-relaxed uppercase tracking-wider">
                        SyncGames are not an official Minecraft product, and are not approved by or associated with Mojang or Microsoft. Any contribution or purchase made on this store goes to the development team of SyncGames.
                    </p>
                </div>

                {/* Contact/Credits */}
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
                    <a
                        href="mailto:MANAGEMENT@SYNCGAMES.NETWORK"
                        className="text-[10px] font-black text-white/40 hover:text-white transition-colors uppercase tracking-[0.15em] border-b border-white/5 hover:border-white/20 pb-1"
                    >
                        MANAGEMENT@SYNCGAMES.NETWORK
                    </a>

                </div>
            </div>

            {/* Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-[1px]" />
        </footer>
    );
}
