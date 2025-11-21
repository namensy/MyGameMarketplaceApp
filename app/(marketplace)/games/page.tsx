// หน้า Landing ของ marketplace แบบ static + dark theme
// ใช้เป็น Server Component (ไม่มี "use client") เพื่อให้เพจโหลดเร็วและโค้ดอ่านง่าย

import MarketplaceToolbar from "@/components/marketplace/MarketplaceToolbar";

type FeaturedGame = {
  id: number;
  title: string;
  genre: string;
  price: string;
  rating: number;
  highlight?: string;
};

// mock data สำหรับ featured games ยังไม่ต้องต่อ API จริง
const featuredGames: FeaturedGame[] = [
  {
    id: 1,
    title: "Cyber Nova",
    genre: "Action • Sci-Fi",
    price: "$24.99",
    rating: 4.7,
    highlight: "Top seller",
  },
  {
    id: 2,
    title: "Crystal Valley",
    genre: "Adventure • RPG",
    price: "$18.50",
    rating: 4.5,
    highlight: "Editor's pick",
  },
  {
    id: 3,
    title: "Neon Drift",
    genre: "Racing • Arcade",
    price: "$14.99",
    rating: 4.3,
    highlight: "New arrival",
  },
];

export default function GamesPage() {
  return (
    // พื้นหลัง dark + ตัวหนังสืออ่านง่าย
    <main className="min-h-screen bg-slate-950 text-slate-100">

      <MarketplaceToolbar />
      {/* กำหนดความกว้าง content กลางจอ และเว้นระยะด้านบน/ล่าง */}
      <div className="mx-auto max-w-6xl px-4 py-12 space-y-16">
        {/* HERO SECTION */}
        <section className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-4">
            <p className="text-sm font-medium text-indigo-400">
              Game Marketplace
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
              Discover and collect{" "}
              <span className="text-indigo-400">your next favorite game</span>.
            </h1>
            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              Browse curated titles from indie and AAA creators. Find new
              worlds, support your favorite studios, and build your collection
              in one place.
            </p>

            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-indigo-500 px-5 py-2 text-sm font-medium text-white shadow-md shadow-indigo-500/40 transition hover:bg-indigo-400">
                Explore featured games
              </button>
              <button className="rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900/60">
                View all categories
              </button>
            </div>

            <p className="text-xs text-slate-400">
              500+ titles • New games every week • Secure checkout (mock)
            </p>
          </div>

          {/* กล่อง visual ด้านขวา: ใช้ gradient + border ให้ดูเหมือน promo card */}
          <div className="mt-6 w-full max-w-sm self-stretch rounded-2xl border border-indigo-500/40 bg-linear-to-br from-slate-900 via-slate-950 to-indigo-900/40 p-5 shadow-lg shadow-indigo-900/40 md:mt-0">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-300">
              Live deals
            </p>
            <p className="mt-2 text-sm text-slate-200">
              Up to <span className="font-semibold text-indigo-300">70%</span>{" "}
              off launch collections.
            </p>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
                <span className="text-slate-100">Weekend bundles</span>
                <span className="text-xs text-emerald-300">Limited</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2">
                <span className="text-slate-100">Indie spotlight</span>
                <span className="text-xs text-indigo-300">Trending</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED GAMES SECTION */}
        <section className="space-y-6">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Featured games
              </h2>
              <p className="text-sm text-slate-300">
                Hand-picked titles from our curators. No API yet — pure mock
                data for now.
              </p>
            </div>
            <button className="hidden text-xs font-medium text-slate-300 underline-offset-4 hover:text-indigo-300 hover:underline sm:inline">
              See all games
            </button>
          </div>

          {/* grid ของ card games ใช้ data จาก featuredGames */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGames.map((game) => (
              <article
                key={game.id}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm shadow-slate-950/60 transition hover:border-indigo-500/60 hover:bg-slate-900"
              >
                <div className="space-y-3">
                  {/* พื้นที่แทนรูปภาพ (ยังไม่ใช้ image จริง) */}
                  <div className="h-32 w-full rounded-xl bg-linear-to-br from-slate-800 via-slate-900 to-indigo-900/60 opacity-90 transition group-hover:opacity-100" />

                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                        {game.title}
                      </h3>
                      <p className="text-xs text-slate-400">{game.genre}</p>
                    </div>
                    {game.highlight && (
                      <span className="rounded-full bg-indigo-500/20 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-indigo-200">
                        {game.highlight}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-300">
                    <span className="font-medium text-slate-50">
                      {game.price}
                    </span>
                    <span className="text-xs text-amber-300">
                      ★ {game.rating.toFixed(1)}
                    </span>
                  </div>
                </div>

                <button className="mt-4 w-full rounded-full border border-slate-700 px-3 py-2 text-xs font-medium text-slate-100 transition hover:border-indigo-400 hover:bg-slate-950/80">
                  View details
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* CATEGORIES SECTION */}
        <section className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              Browse by category
            </h2>
            <p className="text-sm text-slate-300">
              Quick filters to help players discover games they love. (Static
              for now.)
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {["Action", "RPG", "Strategy", "Indie", "Rogue-like", "Co‑op"].map(
              (category) => (
                <button
                  key={category}
                  className="rounded-full border border-slate-700 px-4 py-1.5 text-xs font-medium text-slate-100 transition hover:border-indigo-400 hover:bg-slate-900"
                >
                  {category}
                </button>
              )
            )}
          </div>
        </section>

        {/* HOW IT WORKS SECTION */}
        <section className="space-y-6">
          <div>
            <h2 className="text-lg font-semibold tracking-tight">
              How it works
            </h2>
            <p className="text-sm text-slate-300">
              Simple 3-step flow for players. Later we can wire this to real
              cart and checkout logic.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-medium text-indigo-300">Step 1</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Discover games
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                Browse curated collections, featured lists, and categories to
                find titles that match your style.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-medium text-indigo-300">Step 2</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Add to cart
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                Save games you love into a cart or wishlist. We&apos;ll later
                connect this to a Zustand store.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
              <p className="text-xs font-medium text-indigo-300">Step 3</p>
              <h3 className="mt-2 text-sm font-semibold text-slate-50">
                Checkout securely
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                In the final version, players will confirm their order and
                receive digital copies instantly.
              </p>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="border-t border-slate-800 pt-10">
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              Ready to explore the marketplace?
            </h2>
            <p className="mx-auto max-w-md text-sm text-slate-300">
              This page is fully static for now. In the next steps, we&apos;ll
              hook it up to mock APIs, SWR, Zustand, and Firebase auth.
            </p>
            <button className="rounded-full bg-indigo-500 px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-indigo-500/40 transition hover:bg-indigo-400">
              Start browsing games
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}