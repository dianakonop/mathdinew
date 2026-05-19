import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Sidebar from "./SideBar";
import type { PageKey } from "../types";
import { useState } from "react";

type AnimationScreenProps = {
  onNavigate: (page: PageKey) => void;
  activePage: PageKey;
};

const marqueeText = "S - SOLVE   L - LEARN   A - ANALYZE   Y - YOUR WAY   ";

export default function AnimationScreen({ onNavigate, activePage }: AnimationScreenProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-pink-100 to-#d4e8b2">
      {/* Рухомий фон */}
<motion.img
  src="/formulas.png"
  alt="Formulas Background"
  animate={{ y: ["-100%", "0%"] }}
  transition={{
    repeat: Infinity,
    duration: 10,
    ease: "linear",
  }}
  className="absolute top-0 right-0 opacity-40 pointer-events-none"
  style={{
    width: "120vw",    // ширше за вікно для збільшення
    height: "100vh",
    objectFit: "cover",
    transformOrigin: "center",
    transform: "translateX(10%)",  // зсув вправо
  }}
/>
      {/* Кнопка меню */}
      <button
        className="absolute top-6 left-6 z-20 p-2 rounded-md hover:bg-black/10 transition"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Відкрити меню"
      >
        <Menu size={28} />
      </button>

      {/* Заголовок */}
      <h1
        className="absolute top-6 left-1/2 -translate-x-1/2 text-4xl font-bold text-white drop-shadow-[2px_2px_0px_black] z-10"
        style={{ fontFamily: "'Chewy', sans-serif" }}
      >
        MATHDI
      </h1>

      {/* Пантерa */}
      <motion.img
  src="/panther.png"
  alt="Panther"
  animate={{ scale: [1, 1.15, 1] }} // більший масштаб від 1 до 1.15
  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} // швидше (8 секунд)
  className="fixed z-10"
  style={{
    top: "0%",
    left: "24%",
    transform: "translate(-50%, -50%)",
    width: "800px",
    maxWidth: "95vw",
  }}
/>

      {/* Бігуча стрічка */}
      <div
        className="fixed bottom-0 w-full overflow-hidden bg-white z-20"
        style={{ height: "120px" }}
      >
        <div
          style={{
            fontSize: "3rem",
            fontWeight: "900",
            whiteSpace: "nowrap",
            lineHeight: "120px",
            letterSpacing: "10px",
            color: "#000",
            animation: "marquee 15s linear infinite",
          }}
        >
          {marqueeText.repeat(20)}
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar
        menuOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activePage={activePage}
        onNavigate={(page) => {
          onNavigate(page);
          setMenuOpen(false);
        }}
      />
    </div>
  );
}
