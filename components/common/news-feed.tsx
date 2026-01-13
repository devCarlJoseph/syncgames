"use client";

import { motion } from "framer-motion";
import { MessageSquare, User, Clock } from "lucide-react";
import Link from "next/link";

interface NewsItem {
    id: string;
    title: string;
    author: string;
    date: string;
    month: string;
    day: string;
    replies: number;
    avatar?: string;
    image?: string;
    content?: string;
    featured?: boolean;
}

const NEWS_DATA: NewsItem[] = [
    {
        id: "1",
        title: "CANDYCORN PRISON FINAL SEASON @ TUESDAY 2PM EST",
        author: "BigCDG",
        date: "Jul 15, 2021",
        month: "Jul",
        day: "15",
        replies: 11,
        image: "/page-img.webp",
        content: "Hey everyone! On behalf of the OPB Team, we are excited to release the newest and final Candycorn season! This brand new season was carefully beta tested by the most dedicated members of our community and should be a much smoother...",
        featured: true,
    },
    {
        id: "2",
        title: "PRISON RELEASE @ FRIDAY 3PM EST",
        author: "PenguinTheNoot",
        date: "Mar 25, 2022",
        month: "Mar",
        day: "25",
        replies: 0,
    },
    {
        id: "3",
        title: "SKYBLOCK RELEASE @ SATURDAY 12PM EST",
        author: "StaffTeam",
        date: "Feb 10, 2023",
        month: "Feb",
        day: "10",
        replies: 24,
    }
];

export function NewsFeed() {
    return (
        <div className="space-y-6">
            {NEWS_DATA.map((item, index) => (
                <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-[#1c1c3c]/30 backdrop-blur-sm border border-white/[0.05] rounded-lg overflow-hidden flex flex-col group hover:border-cyan-500/20 transition-all shadow-xl"
                >
                    {/* Compact View / Header */}
                    <div className="p-4 flex items-center justify-between border-b border-white/[0.03] bg-white/[0.02]">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="w-10 h-10 rounded bg-[#FFDE93]/10 border border-[#FFDE93]/20 flex items-center justify-center">
                                <User className="w-5 h-5 text-[#FFDE93]" />
                            </div>
                            <div>
                                <h3 className="text-[#FFDE93] font-black text-sm md:text-base tracking-wide uppercase group-hover:text-white transition-colors cursor-pointer">
                                    {item.title}
                                </h3>
                                <div className="flex items-center gap-3 text-[10px] font-bold text-white/40 uppercase tracking-widest mt-0.5">
                                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {item.author}</span>
                                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {item.date}</span>
                                    <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> Replies: {item.replies}</span>
                                </div>
                            </div>
                        </div>

                        {/* Date Badge */}
                        <div className="hidden sm:flex flex-col items-center justify-center bg-white/[0.03] border border-white/10 rounded px-3 py-1 min-w-[50px]">
                            <span className="text-[10px] font-black uppercase text-white/40 leading-none">{item.month}</span>
                            <span className="text-xl font-black text-white leading-none mt-1">{item.day}</span>
                        </div>
                    </div>

                    {/* Featured Content (If any) */}
                    {item.featured && (
                        <div className="p-6">
                            {item.image && (
                                <div className="relative aspect-video mb-6 rounded-lg overflow-hidden border border-white/5">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            <h4 className="text-[#FF7F50] font-black text-center text-xl md:text-2xl mb-4 tracking-tight">
                                {item.title}
                            </h4>
                            <div className="text-center mb-6">
                                <Link
                                    href={`/news/${item.id}`}
                                    className="text-[11px] font-black text-[#FFDE93] border-b border-[#FFDE93]/20 hover:border-[#FFDE93] transition-all uppercase tracking-widest"
                                >
                                    CLICK HERE - COUNTDOWN
                                </Link>
                            </div>
                            <p className="text-white/70 text-sm leading-relaxed text-center max-w-2xl mx-auto font-medium mb-6">
                                {item.content}
                            </p>
                            <div className="text-center">
                                <Link
                                    href={`/news/${item.id}`}
                                    className="text-xs font-black text-white/40 hover:text-white transition-colors uppercase tracking-[0.2em]"
                                >
                                    Continue reading...
                                </Link>
                            </div>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
