import { NextResponse } from "next/server";
import type { GameDetail } from "@/types/game";
import { findGameById } from "@/lib/mock/games";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  const baseGame = findGameById(params.id);

  if (!baseGame) {
    return NextResponse.json({ message: "Game not found" }, { status: 404 });
  }

  // สร้าง GameDetail แบบง่าย ๆ จาก Game พื้นฐาน + mock ข้อมูล detail เพิ่มเติม
  const detail: GameDetail = {
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
    videos: [
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ", // mock URL
    ],
  };

  return NextResponse.json(detail);
}
