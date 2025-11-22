// โมเดลข้อมูลเกมที่ใช้ร่วมกันทั้งฝั่ง API และ UI
// ใช้ interface เพื่อให้ขยาย/extends ได้ง่ายในอนาคต

export interface Game {
  // ใช้ string เพราะจะเอาไปใช้ใน dynamic route /games/[id]
  id: string;

  // ชื่อเกมที่แสดงบนการ์ดและหน้า detail
  title: string;

  // ชื่อผู้พัฒนาเกม
  developer: string;

  // ประเภท/แนวเกม เช่น "Action • RPG"
  genres: Array<string>;

  // หมวดหมู่หลักตาม requirement
  category: "Action" | "RPG" | "Strategy" | "Sports" | "Puzzle";

  // เก็บราคาเป็นตัวเลข เพื่อให้คำนวณส่วนลด/ราคารวมได้ในอนาคต
  price: number;

  // ราคาปกติ (ถ้ามีส่วนลด)
  originalPrice?: number;

  // เปอร์เซ็นต์ส่วนลด เช่น 30 หมายถึง 30%
  discount?: number;

  // คะแนนรีวิว เช่น 4.5 (เราค่อย format ตอนแสดงผล)
  rating: number;

  // จำนวนรีวิวทั้งหมด
  reviewCount?: number;

  // badge สั้น ๆ เช่น "Top seller", "New arrival" (ไม่จำเป็นต้องมีทุกเกม)
  highlight?: string;

  // URL รูป thumbnail สำหรับใช้ใน card (optional เผื่อบางเกมยังไม่มีรูป)
  thumbnailUrl?: string;

  // image หลักของเกมตามสเปค (สามารถใช้ค่าเดียวกับ thumbnailUrl)
  image?: string;

  // คำอธิบายเกมแบบย่อ ใช้ในหน้า detail หรือ hover
  shortDescription?: string;

  // tag เพิ่มเติมสำหรับ filter/search เช่น ["singleplayer", "roguelike"]
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
