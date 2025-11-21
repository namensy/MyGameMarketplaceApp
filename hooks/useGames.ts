// Custom hook สำหรับดึง list เกมจาก Mock API `/api/games` ด้วย SWR
// แยก logic data fetching ออกจาก UI ทำให้ component อ่านง่ายและทดสอบได้ง่ายขึ้น

import useSWR from "swr";
import type { GameResponse } from "@/types/game";

// ฟังก์ชัน fetcher ที่ SWR จะเรียกใช้ทุกครั้งเมื่อมีการดึง/รีเฟรชข้อมูล
const fetcher = async (url: string): Promise<GameResponse> => {
  const res = await fetch(url);

  if (!res.ok) {
    // โยน error เพื่อให้ SWR ไปเซ็ต error state ให้เรา
    throw new Error("Failed to fetch games");
  }

  return res.json();
};

// ตัวเลือกสำหรับ pagination เบื้องต้น
type UseGamesOptions = {
  page?: number;
  limit?: number;
};

export function useGames(options: UseGamesOptions = {}) {
  const { page = 1, limit = 9 } = options;

  // ประกอบ query string จาก options
  const searchParams = new URLSearchParams({
    page: String(page),
    limit: String(limit),
  });

  const key = `/api/games?${searchParams.toString()}`;

  // ใช้ generic ของ SWR ให้ TypeScript รู้ว่ารูปแบบ data เป็น GameResponse
  const { data, error, isLoading } = useSWR<GameResponse>(key, fetcher);

  return {
    games: data?.games ?? [],
    total: data?.total ?? 0,
    page: data?.page ?? page,
    totalPages: data?.totalPages ?? 1,
    isLoading,
    isError: Boolean(error),
  };
}
