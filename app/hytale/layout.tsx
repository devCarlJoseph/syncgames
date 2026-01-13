import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.css";
import { Navbar } from "@/components/common/navbar"
import { Footer } from "@/components/common/footer"


const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Hytale - SyncGames",
    description: "Hytale section of SyncGames.",
};

export default function MinecraftLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
            <Navbar />
            <main className="pt-16">
                {children}
            </main>
            <Footer />
        </div>

    );
}
