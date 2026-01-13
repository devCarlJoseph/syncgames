"use client";

import { motion } from "framer-motion";
import { Users, Layout, MessageSquare, UserPlus } from "lucide-react";

export function Sidebar() {
    return (
        <aside className="space-y-6">
            {/* Members Online Widget */}
            <div className="bg-[#1c1c3c]/30 backdrop-blur-sm border border-white/[0.05] rounded-lg overflow-hidden">
                <div className="bg-white/[0.02] border-b border-white/[0.03] px-5 py-3 flex items-center gap-3">
                    <Users className="w-4 h-4 text-[#FFDE93]/60" />
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Members online</h4>
                </div>
                <div className="p-6">
                    <p className="text-[11px] font-bold text-white/20 text-center uppercase tracking-widest italic">
                        No members online now.
                    </p>
                </div>
            </div>

            {/* Latest Profile Posts Widget */}
            <div className="bg-[#1c1c3c]/30 backdrop-blur-sm border border-white/[0.05] rounded-lg overflow-hidden">
                <div className="bg-white/[0.02] border-b border-white/[0.03] px-5 py-3 flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-[#FFDE93]/60" />
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Latest profile posts</h4>
                </div>
                <div className="p-6">
                    <p className="text-[11px] font-bold text-white/20 text-center uppercase tracking-widest italic">
                        No profile posts yet.
                    </p>
                </div>
            </div>

            {/* Forum Statistics Widget */}
            <div className="bg-[#1c1c3c]/30 backdrop-blur-sm border border-white/[0.05] rounded-lg overflow-hidden">
                <div className="bg-white/[0.02] border-b border-white/[0.03] px-5 py-3 flex items-center gap-3">
                    <Layout className="w-4 h-4 text-[#FFDE93]/60" />
                    <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Forum statistics</h4>
                </div>
                <div className="p-5.5 space-y-4">
                    <StatItem label="Threads" value="1,248" />
                    <StatItem label="Messages" value="15,932" />
                    <StatItem label="Members" value="4,821" />
                    <div className="pt-2">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded bg-[#FFDE93]/10 border border-[#FFDE93]/20 flex items-center justify-center">
                                <UserPlus className="w-4 h-4 text-[#FFDE93]" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Latest member</p>
                                <p className="text-sm font-bold text-[#FFDE93] group-hover:text-white transition-colors cursor-pointer">PixelPioneer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}

function StatItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between items-center">
            <span className="text-[11px] font-bold text-white/40 uppercase tracking-widest">{label}:</span>
            <span className="text-sm font-black text-[#FFDE93]">{value}</span>
        </div>
    );
}
