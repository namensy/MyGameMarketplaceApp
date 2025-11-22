import type { Game } from "@/types/game";

// mock data กลางสำหรับทั้ง list และ detail endpoints
export const mockGames: Game[] = [
  {
    id: "1",
    title: "Sea of Thieves",
    developer: "Rare Ltd",
    genres: ["Multiplayer", "Open World", "Adventure"],
    category: "Action",
    price: 1340,
    originalPrice: 1890,
    discount: 30,
    rating: 4.2,
    reviewCount: 125_430,
    thumbnailUrl:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg?t=1755260861",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1172620/header.jpg?t=1755260861",
    highlight: "New Arrival",
    tags: ["co-op", "pirates", "open world"],
  },
  {
    id: "2",
    title: "Dead by Daylight",
    developer: "Behaviour Interactive",
    genres: ["Horror", "Multiplater", "Survival Horror"],
    category: "Strategy",
    price: 350,
    originalPrice: 700,
    discount: 50,
    rating: 4.0,
    reviewCount: 420_000,
    thumbnailUrl:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg?t=1760636583",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/381210/header.jpg?t=1760636583",
    highlight: "Editor's pick",
    tags: ["horror", "multiplayer", "survival"],
  },
  {
    id: "3",
    title: "Counter-Strike 2",
    developer: "Valve",
    genres: ["FPS", "Shooter", "Multiplayer"],
    category: "Sports",
    price: 620,
    originalPrice: 1290,
    discount: 50,
    rating: 4.8,
    reviewCount: 980_000,
    thumbnailUrl:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
    image:
      "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1749053861",
    highlight: "Top seller",
    tags: ["competitive", "fps", "esports"],
  },
];

export const findGameById = (id: string) =>
  mockGames.find((game) => game.id === id);
