import type { GameDetail } from "@/types/game";
import { findGameById } from "@/lib/mock/games";
import { notFound } from "next/navigation";

// ฟังก์ชันฝั่ง server สำหรับดึงข้อมูลเกมตาม id
async function getGameDetail(id: string): Promise<GameDetail> {
  const baseGame = findGameById(id);

  if (!baseGame) {
    notFound();
  }

  return {
    ...baseGame,
    description:
      "Embark on an unforgettable multiplayer adventure in this featured title. Team up with friends or challenge rivals in dynamic online modes.",
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
    ],
    videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
  };
}

// หน้านี้เป็น Server Component รับ params แบบใหม่ของ Next.js 16 App Router
export default async function GameDetailPage({
  params,
}: {
  params: { id: string };
}) {
  // params เป็น promise
  const { id } = await params
  const game = await getGameDetail(id)

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 text-slate-100">
      <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {game.title}
      </h1>
      <p className="mt-3 max-w-2xl text-sm text-slate-300">
        {game.description}
      </p>
      {/* TODO: ภายหลังเราจะออกแบบ layout หน้า detail ให้สวยและครบมากขึ้น */}
    </main>
  );
}

