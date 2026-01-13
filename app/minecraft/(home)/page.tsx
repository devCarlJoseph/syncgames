import { Navbar } from "@/components/common/navbar";
import { Hero } from "@/components/common/hero";
import { NewsFeed } from "@/components/common/news-feed";
import { Sidebar } from "@/components/common/sidebar";
import { Footer } from "@/components/common/footer";
import Link from "next/link";

export default function MinecraftHomePage() {
    return (
        <main className="min-h-screen bg-[#070b14] relative overflow-hidden">
            {/* Global Cinematic Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#1c1c3c_0%,transparent_50%)] opacity-40" />
                <div className="absolute inset-0 bg-[url('https://i.ibb.co/ZRm2gN2Z/WYtifpt.png')] opacity-[0.03] animate-pulse-slow" />
            </div>

            <div className="relative z-10">
                <Hero />

                {/* Content Grid */}
                <div className="max-w-7xl mx-auto px-4 lg:px-8 py-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        {/* Left Column: News Feed */}
                        <div className="lg:col-span-8 xl:col-span-9">
                            <div className="mb-6 flex items-center justify-between border-b border-white/5 pb-4">
                                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Latest Updates</h2>
                                <Link href="/news" className="text-[10px] font-bold uppercase text-[#FFDE93]/60 hover:text-[#FFDE93] transition-colors">View all</Link>
                            </div>
                            <NewsFeed />
                        </div>

                        {/* Right Column: Sidebar */}
                        <div className="lg:col-span-4 xl:col-span-3">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}