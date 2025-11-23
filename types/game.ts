// โมเดลข้อมูลเกมที่ใช้ร่วมกันทั้งฝั่ง API และ UI
// ใช้ interface เพื่อให้ขยาย/extends ได้ง่ายในอนาคต

export interface Game {
  id: string;
  title: string;
  developer: string;
  genres: Array<string>;
  category: "Action" | "RPG" | "Strategy" | "Sports" | "Puzzle";
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  reviewCount?: number;
  highlight?: string;
  thumbnailUrl?: string;
  image?: string;
  shortDescription?: string;
  tags?: string[];
}

export interface GameResponse {
  games: Game[];
  total: number;
  page: number;
  totalPages: number;
}

// ใช้ใน Game detail ตามสเปค Mock API (minimum / recommended spec)
export interface SystemReq {
  os: string;
  cpu: string;
  ram: string;
  gpu: string;
  storage: string;
}

// ข้อมูลเกมฉบับเต็มสำหรับหน้า detail และ /api/games/:id
export interface GameDetail extends Game {
  description: string;
  systemRequirements: {
    minimum: SystemReq;
    recommended: SystemReq;
  };
  screenshots: string[];
  videos: string[];
}
