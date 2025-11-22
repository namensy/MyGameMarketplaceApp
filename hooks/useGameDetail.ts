// Custom hook สำหรับดึงข้อมูลเกมรายตัวจาก `/api/games/:id`
// ใช้ pattern เดียวกับ useGames แต่โฟกัสที่ GameDetail เดียว

import useSWR from "swr";
import type { GameDetail } from "@/types/game";

const fetcher = async (url: string): Promise<GameDetail> => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch game detail");
  }

  return res.json();
};

export function useGameDetail(id: string | undefined) {
  // ถ้ายังไม่มี id (เช่น ตอน router ยังไม่พร้อม) ให้ pause SWR ไว้ก่อน
  const shouldFetch = Boolean(id);
  const key = shouldFetch ? `/api/games/${id}` : null;

  const { data, error, isLoading } = useSWR<GameDetail>(key, fetcher);

  return {
    game: data ?? null,
    isLoading,
    isError: Boolean(error),
  };
}
