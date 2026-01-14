"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Vote } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function Hero() {
  return (
    <section className="relative z-10 lg:pt-[10rem] pb-5 flex flex-col items-center overflow-hidden font-sans">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative z-10 w-full"
      >
        <Card className="relative overflow-hidden border-sky-200/50 bg-[#1f1f3b] shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] rounded-3xl">
          {/* Glass Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl opacity-50" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl opacity-50" />

          {/* Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] pointer-events-none" />

          <CardContent className="p-6 sm:p-10 md:p-12 relative z-20">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-12 lg:gap-16">

              {/* LEFT: TEXT + SERVERS */}
              <div className="flex-1 text-center lg:text-left">
                <motion.h2
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight"
                >
                  Welcome to Hysync Network
                </motion.h2>

                <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-xl leading-relaxed font-medium mb-10">
                  HySync is a friendly and fun loving community with no toxicity allowed.{' '}
                  {`Join us today to try our game modes and you'll feel right at home!`}
                </p>

                <div className="flex flex-col gap-3 max-w-md mx-auto lg:mx-0">
                  <ServerRow label="Asia Server" value="play.hysync.org:15790" status="online" />
                  <ServerRow label="US Server" value="Coming Soon" status="offline" />
                  <ServerRow label="EU Server" value="Coming Soon" status="offline" />
                </div>
              </div>

              {/* RIGHT: FEATURES */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-10 shrink-0">
                <FeatureTile icon={ShoppingCart} title="Store" subtitle="SUPPORT US!" />
                <FeatureTile icon={Vote} title="Vote" subtitle="EARN REWARDS!" />
              </div>
            </div>
          </CardContent>

          <CardFooter className="p-0">
            <Link href="/hysync/play" className="block w-full">
              <div className="w-full py-6 md:py-8 flex items-center justify-center border-t border-white/10 bg-black/60 hover:bg-primary/60 text-primary hover:text-white transition-colors">
                <span className="text-lg md:text-2xl font-black uppercase tracking-[0.3em]">
                  Click to Play!
                </span>
              </div>
            </Link>
          </CardFooter>
        </Card>
      </motion.div>
    </section>
  );
}

function ServerRow({ label, value, status }: { label: string; value: string; status: "online" | "offline"; }) {
  return (
    <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}
      className="flex items-center justify-between gap-4 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-primary/10 transition-all shadow-lg">
      <div className="flex flex-col text-left">
        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{label}</span>
        <span className="text-white text-xs sm:text-sm lg:text-base font-black tracking-widest uppercase">{value}</span>
      </div>
      <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${status === "online" ? "bg-emerald-500/10 text-emerald-400" : "bg-white/10 text-white/40"
        }`}>
        {status === "online" ? "Online" : "Soon"}
      </span>
    </motion.div>
  );
}

function FeatureTile({
  icon: Icon,
  title,
  subtitle
}: {
  icon: React.ElementType<React.SVGProps<SVGSVGElement>>;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div whileHover={{ y: -6, scale: 1.05 }} whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center group cursor-pointer relative">
      <div className="relative w-[85px] h-[85px] sm:w-[100px] sm:h-[100px] mb-4 flex items-center justify-center">
        <div className="w-full h-full rounded-3xl overflow-hidden border-2 border-white/10 shadow-xl relative bg-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/10 transition-all duration-500">
          <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white/50 group-hover:text-primary group-hover:scale-110 transition-all duration-500 relative z-20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
        </div>
      </div>
      <h5 className="text-sm sm:text-lg font-bold text-white mb-1 group-hover:text-primary transition-colors">{title}</h5>
      <small className="text-[9px] sm:text-[10px] font-black tracking-widest text-primary/40 uppercase group-hover:text-primary/60 transition-colors">{subtitle}</small>
    </motion.div>
  );
}
