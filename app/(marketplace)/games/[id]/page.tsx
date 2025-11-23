import type { GameDetail } from "@/types/game";
import { findGameById } from "@/lib/mock/games";
import { notFound } from "next/navigation";
import Image from "next/image";
import {
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Monitor,
  Cpu,
  HardDrive,
  MemoryStick,
  Globe,
  Calendar,
  Gamepad2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// ฟังก์ชันฝั่ง server สำหรับดึงข้อมูลเกมตาม id
async function getGameDetail(id: string): Promise<GameDetail> {
  const baseGame = findGameById(id);

  if (!baseGame) {
    notFound();
  }

  return {
    ...baseGame,
    description:
      "Embark on an unforgettable multiplayer adventure in this featured title. Team up with friends or challenge rivals in dynamic online modes. Experience stunning graphics, immersive gameplay, and a story that will keep you on the edge of your seat. Customize your character, unlock powerful weapons, and dominate the battlefield.",
    systemRequirements: {
      minimum: {
        os: "Windows 10 64-bit",
        cpu: "Intel i5-6500 or AMD Ryzen 3 1200",
        ram: "8 GB RAM",
        gpu: "NVIDIA GTX 970 or AMD RX 570",
        storage: "60 GB available space",
      },
      recommended: {
        os: "Windows 11 64-bit",
        cpu: "Intel i7-8700 or AMD Ryzen 5 3600",
        ram: "16 GB RAM",
        gpu: "NVIDIA RTX 2060 or AMD RX 5700",
        storage: "60 GB SSD space",
      },
    },
    screenshots: [
      baseGame.thumbnailUrl ??
      "https://via.placeholder.com/1200x675.png?text=Screenshot+1",
      "https://via.placeholder.com/1200x675.png?text=Screenshot+2",
      "https://via.placeholder.com/1200x675.png?text=Screenshot+3",
    ],
    videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
  };
}

export default async function GameDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const game = await getGameDetail(id);

  const discountPrice =
    game.price && game.discount
      ? (game.price * (100 - game.discount)) / 100
      : game.price;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 pb-20">
      {/* Hero Section with Background Blur */}
      <div className="relative h-[500px] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm opacity-30"
          style={{
            backgroundImage: `url(${game.image || game.thumbnailUrl || "/placeholder-game.jpg"
              })`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 h-full flex flex-col justify-end pb-12">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-sm font-medium text-indigo-400">
                <span className="rounded bg-indigo-500/10 px-2 py-1 text-white/90">
                  {game.category}
                </span>
                {game.highlight && (
                  <span className="rounded bg-emerald-500/20 px-2 py-1 text-emerald-200">
                    {game.highlight}
                  </span>
                )}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                {game.title}
              </h1>
              <p className="text-lg text-slate-200 max-w-2xl drop-shadow-md">
                {game.shortDescription ||
                  "Experience the next generation of gaming with this title."}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-300">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-semibold text-white">
                    {game.rating}
                  </span>
                  ({game.reviewCount || 120} reviews)
                </span>
                <span>•</span>
                <span>{game.developer}</span>
                <span>•</span>
                <span>Release: 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Media & Details */}
          <div className="lg:col-span-2 space-y-10">
            {/* Media Gallery (Simplified) */}
            <div className="relative aspect-video overflow-hidden rounded-xl border border-slate-800 bg-slate-900/60 shadow-lg group">
              <Image
                src={game.image || game.thumbnailUrl || "/placeholder-game.jpg"}
                alt={game.title}
                fill
                sizes="(min-width: 1024px) 768px, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button className="bg-black/50 hover:bg-black/70 text-white px-3 py-1 rounded-full text-xs backdrop-blur-md transition">
                  View Gallery
                </Button>
              </div>
            </div>

            {/* About Section */}
            <section>
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
                <Monitor className="w-6 h-6 text-indigo-400" />
                About This Game
              </h2>
              <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed">
                <p>{game.description}</p>
                <p className="mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </section>

            {/* System Requirements */}
            <section>
              <h2 className="mb-6 flex items-center gap-2 text-2xl font-bold">
                <Cpu className="w-6 h-6 text-indigo-400" />
                System Requirements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Minimum */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="text-lg font-semibold mb-4 text-slate-200">
                    Minimum
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex gap-3">
                      <Monitor className="w-5 h-5 shrink-0 text-slate-500" />
                      <div>
                        <span className="block text-slate-300 font-medium">
                          OS
                        </span>
                        {game.systemRequirements.minimum.os}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Cpu className="w-5 h-5 shrink-0 text-slate-500" />
                      <div>
                        <span className="block text-slate-300 font-medium">
                          Processor
                        </span>
                        {game.systemRequirements.minimum.cpu}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <MemoryStick className="w-5 h-5 shrink-0 text-slate-500" />
                      <div>
                        <span className="block text-slate-300 font-medium">
                          Memory
                        </span>
                        {game.systemRequirements.minimum.ram}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Gamepad2 className="w-5 h-5 shrink-0 text-slate-500" />
                      <div>
                        <span className="block text-slate-300 font-medium">
                          Graphics
                        </span>
                        {game.systemRequirements.minimum.gpu}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <HardDrive className="w-5 h-5 shrink-0 text-slate-500" />
                      <div>
                        <span className="block text-slate-300 font-medium">
                          Storage
                        </span>
                        {game.systemRequirements.minimum.storage}
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Recommended */}
                <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                  <h3 className="mb-4 text-lg font-semibold text-indigo-400">
                    Recommended
                  </h3>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex gap-3">
                      <Monitor className="w-5 h-5 shrink-0 text-slate-500" />
                      <div>
                        <span className="block text-slate-300 font-medium">
                          OS
                        </span>
                        {game.systemRequirements.recommended.os}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Cpu className="w-5 h-5 shrink-0 text-slate-500" />
                      <div>
                        <span className="block text-slate-300 font-medium">
                          Processor
                        </span>
                        {game.systemRequirements.recommended.cpu}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <MemoryStick className="w-5 h-5 shrink-0 text-slate-500" />
                      <div>
                        <span className="block text-slate-300 font-medium">
                          Memory
                        </span>
                        {game.systemRequirements.recommended.ram}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <Gamepad2 className="w-5 h-5 shrink-0 text-slate-500" />
                      <div>
                        <span className="block text-slate-300 font-medium">
                          Graphics
                        </span>
                        {game.systemRequirements.recommended.gpu}
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <HardDrive className="w-5 h-5 shrink-0 text-slate-500" />
                      <div>
                        <span className="block text-slate-300 font-medium">
                          Storage
                        </span>
                        {game.systemRequirements.recommended.storage}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Price Card */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    {game.discount ? (
                      <div className="flex flex-col">
                        <span className="text-sm text-slate-400 line-through">
                          ${game.originalPrice || game.price}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-3xl font-bold text-white">
                            ${discountPrice.toFixed(2)}
                          </span>
                          <span className="bg-green-500/20 text-green-400 px-2 py-0.5 rounded text-sm font-bold">
                            -{game.discount}%
                          </span>
                        </div>
                      </div>
                    ) : (
                      <span className="text-3xl font-bold text-white">
                        ${game.price}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  <button className="w-full rounded-lg bg-indigo-500 py-3 px-4 font-bold text-white transition flex items-center justify-center gap-2 cursor-pointer hover:bg-indigo-400">
                    Buy Now
                  </button>
                  <button className="w-full rounded-lg border border-slate-800 bg-slate-800 py-3 px-4 font-semibold text-slate-100 transition flex items-center justify-center gap-2 cursor-pointer hover:bg-slate-700">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                  </button>
                  <div className="flex gap-2 pt-2">
                    <button className="flex-1 rounded-lg border border-slate-800 bg-slate-900/60 py-2 text-slate-300 transition flex items-center justify-center gap-2 text-sm cursor-pointer hover:bg-slate-800">
                      <Heart className="w-4 h-4" /> Wishlist
                    </button>
                    <button className="flex-1 rounded-lg border border-slate-800 bg-slate-900/60 py-2 text-slate-300 transition flex items-center justify-center gap-2 text-sm cursor-pointer hover:bg-slate-800">
                      <Share2 className="w-4 h-4" /> Share
                    </button>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 space-y-3 text-sm text-slate-400">
                  <div className="flex justify-between">
                    <span>Refund Type</span>
                    <span className="text-slate-200">Self-Refundable</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support</span>
                    <span className="text-slate-200">In-Game</span>
                  </div>
                </div>
              </div>

              {/* Game Info */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
                <h3 className="font-semibold text-white mb-4">Game Info</h3>
                <ul className="space-y-4 text-sm">
                  <li className="flex justify-between items-center">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Globe className="w-4 h-4" /> Developer
                    </span>
                    <span className="text-slate-200">{game.developer}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Release Date
                    </span>
                    <span className="text-slate-200">Oct 24, 2024</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-slate-400 flex items-center gap-2">
                      <Gamepad2 className="w-4 h-4" /> Platform
                    </span>
                    <span className="text-slate-200">Windows, Mac</span>
                  </li>
                </ul>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase mb-3">
                    Genres
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {game.genres.map((genre) => (
                      <span
                        key={genre}
                        className="rounded border border-slate-800 bg-emerald-500/10 px-2 py-1 text-xs text-slate-200 transition hover:text-white"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase mb-3">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {game.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="rounded border border-slate-800 px-2 py-1 text-xs text-slate-400 hover:border-indigo-500/50 transition"
                      >
                        #{tag}
                      </span>
                    )) || (
                        <>
                          <span className="rounded border border-slate-800 px-2 py-1 text-xs text-slate-400">
                            #Multiplayer
                          </span>
                          <span className="rounded border border-slate-800 px-2 py-1 text-xs text-slate-400">
                            #Action
                          </span>
                        </>
                      )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
