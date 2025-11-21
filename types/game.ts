// โมเดลข้อมูลเกมที่ใช้ร่วมกันทั้งฝั่ง API และ UI
// ใช้ interface เพื่อให้ขยาย/extends ได้ง่ายในอนาคต

export interface Game {
  // ใช้ string เพราะจะเอาไปใช้ใน dynamic route /games/[id]
  id: string;

  // ชื่อเกมที่แสดงบนการ์ดและหน้า detail
  title: string;

  // ประเภท/แนวเกม เช่น "Action • RPG"
  genres: Array<string>;

  // เก็บราคาเป็นตัวเลข เพื่อให้คำนวณส่วนลด/ราคารวมได้ในอนาคต
  price: number;

  // คะแนนรีวิว เช่น 4.5 (เราค่อย format ตอนแสดงผล)
  rating: number;

  // badge สั้น ๆ เช่น "Top seller", "New arrival" (ไม่จำเป็นต้องมีทุกเกม)
  highlight?: string;

  // URL รูป thumbnail สำหรับใช้ใน card (optional เผื่อบางเกมยังไม่มีรูป)
  thumbnailUrl?: string;

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
