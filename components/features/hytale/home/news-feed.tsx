"use client";

import { motion } from "framer-motion";
import { MessageSquare, User, Clock, Eye, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface NewsItem {
  id: string;
  category: string;
  title: string;
  author: string;
  authorAvatar?: string;
  date: string;
  day: string;
  month: string;
  replies: number;
  views: string;
  image?: string;
  content: string;
  featured?: boolean;
}

const NEWS_DATA: NewsItem[] = [
  {
    id: "1",
    category: "Announcements",
    title: "Exploring HySync: A Pure Vanilla Hytale Experience",
    author: "HySyncTeam",
    authorAvatar: "",
    date: "Jan 14, 2026",
    day: "14",
    month: "Jan",
    replies: 24,
    views: "1.2k",
    image: "/hytale-game.jpg",
    content: "HySync is currently open as a pure vanilla environment, dedicated to allowing players to test and explore the beautiful world of Hytale. While our custom game modes and actual full release features are still under active development, this phase provides a unique opportunity to experience the core mechanics of Orbis and help us shape the future of the portal...",
    featured: true,
  },
  {
    id: "2",
    category: "Community",
    title: "Join the HySync Beta: First Wave Invites Going Out Now",
    author: "HySyncTeam",
    date: "Jan 12, 2026",
    day: "12",
    month: "Jan",
    replies: 128,
    views: "789",
    content: "The wait is almost over. We're starting to roll out the first wave of beta invites to our most dedicated community members. Check your email and join our Discord to see if you've been selected for the initial test phase...",
  }
];

export function NewsFeed() {
  return (
    <div className="space-y-8 md:space-y-12">
      {NEWS_DATA.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-[#1B1B1B] border border-white/5 rounded-[8.5px] overflow-hidden flex flex-col group hover:border-primary/20 transition-all duration-500 shadow-2xl"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-white/[0.03]">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6">
              <div className="flex-1 min-w-0">
                <span className="text-[10px] md:text-[11px] font-black text-primary/70 tracking-[0.2em] mb-2 block uppercase">
                  {item.category}
                </span>
                <h3 className="text-primary/70 font-black text-xl sm:text-2xl md:text-3xl tracking-tight leading-tight group-hover:brightness-125 transition-all cursor-pointer">
                  {item.title}
                </h3>
                <div className="flex items-center gap-4 text-[10px] md:text-[11px] font-bold text-white/30 tracking-widest mt-3 uppercase">
                  <span className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" /> Posted by {item.author}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> {item.date}
                  </span>
                </div>
              </div>

              {/* Minimalist Date Badge */}
              <div className="hidden sm:flex flex-col items-center justify-center border-l border-white/5 pl-8 ml-4 min-w-[80px]">
                <span className="text-[12px] font-black text-white/20 tracking-[0.2em] leading-none mb-1 uppercase">
                  {item.month}
                </span>
                <span className="text-3xl font-black text-white/90 leading-none">{item.day}</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6 sm:p-10 pt-8 sm:pt-10">
            {item.image && (
              <div className="relative aspect-video mb-8 sm:mb-10 rounded-lg overflow-hidden border border-white/5 shadow-2xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="group-hover:scale-[1.02] transition-transform duration-700"
                  priority={item.featured} // preload featured posts
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
            )}

            <p className="text-white/50 text-base sm:text-lg leading-relaxed font-medium mb-10 max-w-none">
              {item.content}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-white/5">
              <Link
                href="#"
                className="w-full sm:w-auto px-8 py-3.5 bg-primary/10 hover:bg-primary/60 text-primary hover:text-black text-[12px] font-black tracking-[0.2em] rounded-lg transition-all shadow-lg uppercase flex items-center justify-center gap-2 group/btn"
              >
                Read Full Post
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>

              <div className="flex items-center gap-8 text-white/20">
                <div className="flex items-center gap-2 text-[11px] font-black tracking-widest uppercase">
                  <MessageSquare className="w-5 h-5 text-white/10" />
                  <span>{item.replies} Replies</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] font-black tracking-widest uppercase">
                  <Eye className="w-5 h-5 text-white/10" />
                  <span>{item.views} Views</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
