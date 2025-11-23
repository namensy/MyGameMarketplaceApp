# Game Marketplace App

Frontend test project built with **Next.js 16 App Router**, **TypeScript**, and **Tailwind CSS**.  
The app showcases a dark-themed marketplace landing page, dynamic game listings powered by Mock API + SWR, Zustand-managed filters, Firebase Authentication (Google login), and a simple game detail page.

This project was built with assistance from AI tools (Cursor / ChatGPT) for generating boilerplate code and UI layouts. I focused on understanding and wiring the core flows (auth, routing, data fetching, and filtering), as well as debugging issues related to the Next.js App Router and Firebase integration

I focused on making the core user flow work end-to-end:
 - Browse games
 - View game details
 - Sign in with Google
 - Filter games on the listing page
Due to time and health constraints, I intentionally skipped or simplified some features (full cart/wishlist, news, andadvanced testing), and would prioritize them next if I had more time.

## ✨ Features

- **Landing Page + Layout**

  - Sticky header, toolbar, responsive footer
  - Dark UI theme with Tailwind CSS
  - Hero, featured sections, how-it-works, CTA blocks

- **Games Marketplace**

  - Mock API (`/api/games`, `/api/games/[id]`) returning typed data
  - `useGames` SWR hook for paginated list fetching
  - `MarketplaceToolbar` + Zustand (`useGameFilterStore`) for filter/search/sort/price range
  - `FeaturedGamesSection` renders cards using filtered data
  - Dynamic game detail page via `app/(marketplace)/games/[id]`

- **Authentication**

  - Firebase Auth (Google sign-in)
  - Zustand auth store (`useAuthStore`) + `useAuth` hook
  - Navbar shows login state, avatar, email, logout button
  - `GoogleSignInButton` component, `AuthGuard` helper

- **Tech Stack**
  - Next.js 16.0.3 (App Router)
  - React 19, TypeScript, Tailwind CSS
  - SWR for data fetching
  - Zustand for global state (filters + auth)
  - Firebase JS SDK v11 for auth
  - Lucide Icons, shadcn-style button component

## 📁 Project Structure (highlights)

```
app/
  (marketplace)/
    games/
      page.tsx              // Landing + sections
      [id]/page.tsx         // Game detail (Server Component)
  (auth)/login/             // (placeholder for future login page)
  api/
    games/route.ts          // Mock list
    games/[id]/route.ts     // Mock detail

components/
  layout/                   // Navbar, Footer
  marketplace/              // Toolbar, Featured section
  auth/                     // Google button, AuthGuard

hooks/
  useGames.ts               // SWR hook for /api/games
  useGameFilters.ts         // Zustand-powered filter logic
  useAuth.ts                // Firebase auth helpers

lib/
  firebase/                 // firebaseClient.ts
  store/
    useAuthStore.ts
    useGameFilterStore.ts
  mock/                     // games mock data

types/
  game.ts                   // Game & GameDetail interfaces
```

## 🚀 Getting Started

1. **Install dependencies**

```bash
pnpm install   # or npm install / yarn install
```

2. **Environment variables**  
   Create `.env.local` with your Firebase config:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

3. **Run the dev server**

```bash
pnpm dev    # http://localhost:3000
```

4. **Build & start (for verification)**

```bash
pnpm build
pnpm start
```

## 🧪 Testing

_No formal tests yet._  
Recommended manual checks:

- `/games` landing loads, filters respond instantly
- `/games/1` detail page renders data
- Navbar shows Google login button; after signing in shows user info + logout
- API routes `/api/games` and `/api/games/1` return JSON

(You can add Jest + RTL later for hooks like `useGameFilters` / `useAuth`.)

## 📌 To‑Do / Next Steps

- Complete Header navigation menu (News / Top-up / Support)
- Finish Footer spec (columns, social, newsletter, payments)
- Polish Game detail layout (screenshots, system requirements section)
- Create dedicated `/login` page with React Hook Form + Zod
- Add cart or wishlist (mock) using Zustand (optional)
- Add Loading Skeletons / Framer Motion polish
- Write Jest tests + set up Husky pre-commit hooks

## 📝 Notes

- Mock data lives in `lib/mock/games.ts`; easy to swap with real API later
- Filters rely on `useGameFilterStore`; any component can reuse it
- Firebase config uses safe fallback for build, but real keys must be provided for login to work
- Deploy target: Vercel (recommended). Make sure to add the same env vars in the Vercel project settings.
