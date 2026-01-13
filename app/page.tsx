import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <main className="relative w-full h-screen overflow-hidden">

        {/* Center App Logo */}
        <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="SyncGames Logo"
            className="w-[300px] md:w-[650px] drop-shadow-2xl"
          />
        </div>

        {/* Split Panels */}
        <div className="relative z-10 flex w-full h-full">

          {/* Minecraft Panel */}
          <Link href="/minecraft" className="flex-1 h-full">
            <div className="group relative h-full overflow-hidden cursor-pointer">
              {/* Hover background */}
              <div className="absolute inset-0 bg-green-600/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <img
                src="/minecraft.webp"
                className="absolute inset-0 h-full w-full object-cover opacity-10 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </Link>

          {/* Hytale Panel */}
          <Link href="/hytale" className="flex-1 h-full">
            <div className="group relative h-full overflow-hidden cursor-pointer">
              {/* Hover background */}
              <div className="absolute inset-0 bg-indigo-600/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <img
                src="/hytale.jpg"
                className="absolute inset-0 h-full w-full object-cover opacity-10 transition-opacity duration-500 group-hover:opacity-100"
              />
            </div>
          </Link>

        </div>
      </main>
    </div>
  );
}
