import { Game } from "@/types/game";
import { NextResponse } from "next/server";

const games: Game[] = [
  {
    id: "1",
    title: "Sea of Thieves",
    genres: ["Multiplayer", "Open World", "Adventure"],
    price: 1340,
    rating: 4,
    thumbnailUrl:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg?t=1755260861",
    highlight: "New Arrival",
  },
  {
    id: "2",
    title: "Dead by Daylight",
    genres: ["Horror", "Multiplater", "Survival Horror"],
    price: 350,
    rating: 3.5,
    thumbnailUrl:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg?t=1760636583",
    highlight: "Editor's pick",
  },
  {
    id: "3",
    title: "Counter-Strike 2",
    genres: ["FPS", "Shooter", "Multiplayer"],
    price: 620,
    rating: 4.5,
    thumbnailUrl:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
    highlight: "Top seller",
  },
];

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page") ?? "1");
  const limit = Number(searchParams.get("limit") ?? "9");

  const start = (page - 1) * limit;
  const end = start + limit;
  const pagedGames = games.slice(start, end);
  const totalPages = Math.ceil(games.length / limit);

  return NextResponse.json({
    games: pagedGames,
    total: games.length,
    page,
    totalPages,
  });
}
