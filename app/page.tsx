import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=2670"
            alt="Hero Background"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-center px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Welcome to <span className="text-indigo-400">Orifuke Games</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
            Your ultimate destination for digital games. Discover, collect, and play the best titles from around the world.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/games">
              <button className="rounded-full bg-indigo-500 px-8 py-3 text-base font-medium text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 hover:scale-105">
                Browse Store
              </button>
            </Link>

          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-white">
            Explore Categories
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {['Action', 'RPG', 'Strategy', 'Sports'].map((category) => (
              <Link
                key={category}
                href={`/games?category=${category}`}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition hover:border-indigo-500/50 hover:bg-slate-900"
              >
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {category}
                  </h3>
                  <p className="mt-2 text-sm text-slate-400">
                    Discover the best {category.toLowerCase()} games
                  </p>
                </div>
                <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl transition group-hover:bg-indigo-500/20" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-slate-900/30 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-900/50 p-6 border border-slate-800">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Instant Delivery</h3>
              <p className="text-slate-400">Get your games instantly after purchase. No waiting, just playing.</p>
            </div>
            <div className="rounded-2xl bg-slate-900/50 p-6 border border-slate-800">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Secure Payments</h3>
              <p className="text-slate-400">Your transactions are protected with enterprise-grade security.</p>
            </div>
            <div className="rounded-2xl bg-slate-900/50 p-6 border border-slate-800">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">24/7 Support</h3>
              <p className="text-slate-400">Our team is always here to help you with any issues or questions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
