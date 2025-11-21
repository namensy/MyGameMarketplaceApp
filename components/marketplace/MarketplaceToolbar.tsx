// Sticky toolbar สำหรับหน้า marketplace
// ใช้เป็น Server Component ได้ เพราะตอนนี้ยังไม่มี state/hook ใด ๆ
import { Search } from 'lucide-react';


const tabs = ["Discover", "Browse", "News"] as const;
const activeTab = "Discover"; // ภายหลังสามารถเปลี่ยนให้ผูกกับ route หรือ state ได้

const MarketplaceToolbar = () => {
  return (
    <section className="sticky top-0 z-20 mt-6 bg-slate-950/90 backdrop-blur">
      {/* กำหนดความกว้าง content ให้อยู่กลางจอ และจัด layout ระหว่าง search กับ tab */}
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-4 py-3">
        {/* SEARCH PILL */}
        {/* ตอนนี้ยังเป็น UI อย่างเดียว ยังไม่ต้องต่อ logic ค้นหา */}
        <form
          role="search"
          className="flex max-w-sm items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm text-slate-300"
        >
          {/* ไอคอน search แบบง่าย ๆ ด้วย border วงกลม + แท่งเล็ก */}
          <Search width={12} height={12} />

          <input
            type="search"
            placeholder="Search store"
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
          />
        </form>

        {/* NAV TABS */}
        {/* ใช้ nav เพื่อบอก screen reader ว่านี่คือ navigation ภายในหน้า marketplace */}
        <nav
          aria-label="Marketplace sections"
          className="flex items-center gap-6 text-sm"
        >
          {tabs.map((tab) => {
            const isActive = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                className={`transition-colors ${isActive
                  ? "text-slate-50"
                  : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                {tab}
              </button>
            );
          })}
        </nav>
      </div>
    </section>
  );
};

export default MarketplaceToolbar;