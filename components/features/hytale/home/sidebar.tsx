"use client";

import { Layout, UserPlus, Disc as Discord, Zap } from "lucide-react";
import Link from "next/link";

export function Sidebar() {
  return (
    <aside className="space-y-6 md:space-y-8">
      {/* Server Status Widget */}
      <div className="bg-[#1c1c1e] border border-white/[0.05] rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-500 shadow-2xl">
        <div className="bg-white/[0.02] border-b border-white/[0.03] px-5 md:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-4 h-4 text-primary" />
            <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white">
              Portal Status
            </h4>
          </div>
        </div>

        <div className="p-5 md:p-6 space-y-4">
          {/* Current Server - Online */}
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 space-y-1">
            <div className="flex justify-between items-center">
              <p className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest">
                Current Server
              </p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] md:text-[10px] font-bold text-emerald-500 uppercase tracking-widest">
                  Online
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm font-black text-white tracking-widest truncate">
              play.hysync.org:15790
            </p>
          </div>

          {/* US Server - Offline */}
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 space-y-1">
            <div className="flex justify-between items-center">
              <p className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest">
                US Server
              </p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-[9px] md:text-[10px] font-bold text-red-500 uppercase tracking-widest">
                  Offline
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm font-black text-white tracking-widest truncate">
              Coming Soon
            </p>
          </div>

          {/* EU Server - Offline */}
          <div className="bg-black/20 rounded-xl p-4 border border-white/5 space-y-1">
            <div className="flex justify-between items-center">
              <p className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest">
                EU Server
              </p>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <span className="text-[9px] md:text-[10px] font-bold text-red-500 uppercase tracking-widest">
                  Offline
                </span>
              </div>
            </div>
            <p className="text-xs md:text-sm font-black text-white tracking-widest truncate">
              Coming Soon
            </p>
          </div>

          {/* Players & Ping */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/[0.02] rounded-xl p-3 border border-white/5">
              <p className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">
                Players
              </p>
              <p className="text-base md:text-lg font-black text-primary">155</p>
            </div>
            <div className="bg-white/[0.02] rounded-xl p-3 border border-white/5">
              <p className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">
                Ping
              </p>
              <p className="text-base md:text-lg font-black text-primary">24ms</p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Connect Widget */}
      <div className="bg-[#5865F2] border border-[#5865F2]/20 rounded-2xl overflow-hidden group hover:bg-[#5865F2]/90 transition-all duration-500 shadow-2xl">
        <div className="px-5 md:px-6 py-4 md:py-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Discord className="w-5 h-5 text-white shrink-0" />
            <div className="min-w-0">
              <h4 className="text-xs md:text-sm font-black uppercase tracking-widest text-white truncate">Hysync Discord</h4>
            </div>
          </div>
          <Link
            href="https://discord.gg/sE4PsbvS"
            target="_blank"
          >
            <button className="bg-white text-[#5865F2] px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-[9px] md:text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform shrink-0">
              Join
            </button>
          </Link>
        </div>
      </div>

      {/* Forum Activity Widget */}
      <div className="bg-[#1c1c1e] border border-white/[0.05] rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-500 shadow-2xl">
        <div className="bg-white/[0.02] border-b border-white/[0.03] px-5 md:px-6 py-4 flex items-center gap-3">
          <Layout className="w-4 h-4 text-primary" />
          <h4 className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-white">Activity Pulse</h4>
        </div>
        <div className="p-5 md:p-6 space-y-5">
          <div className="space-y-4">
            <SimpleStat label="Threads" value="1,248" />
            <SimpleStat label="Messages" value="1.2K" />
            <SimpleStat label="Members" value="245" />
          </div>

          <div className="pt-4 border-t border-white/5">
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/30 transition-all shrink-0">
                <UserPlus className="w-5 h-5 text-white/40 group-hover:text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-[9px] md:text-[10px] font-bold text-white/30 uppercase tracking-widest">Latest Member</p>
                <p className="text-xs md:text-sm font-black text-white group-hover:text-primary transition-colors tracking-wide truncate">PixelPioneer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </aside>
  );
}

function SimpleStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center group">
      <span className="text-[9px] md:text-[10px] font-bold text-white/20 uppercase tracking-[0.2em] group-hover:text-white/40 transition-colors">{label}</span>
      <span className="text-xs md:text-sm font-black text-white tracking-widest">{value}</span>
    </div>
  );
}
