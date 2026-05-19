import { motion } from "framer-motion";
import Sidebar from "./SideBar";
import type { PageKey } from "../types";
import { useState } from "react";

const pdfFiles = [
  { name: "Збірник для підготовки до НМТ 2024 з математики", url: "/pdfs/zb-irnyk-nmt-2024.pdf" },
  { name: "ЗНО в картинках", url: "/pdfs/zno-v-kartynkah.pdf" },
  { name: "Інтерактивний електронний посібник — завдання з параметрами", url: "/pdfs/interaktyvnyi-posibnyk.pdf" },
  { name: "Короткі шпаргалки по темах НМТ", url: "/pdfs/shparhalky-nmt.pdf" },
  { name: "Конспект з алгебри", url: "/pdfs/konspekt-algebra.pdf" },
  { name: "Усе про логарифми", url: "/pdfs/vse-pro-logaryfmy.pdf" },
  { name: "Усі функції на НМТ", url: "/pdfs/usi-funkcii-nmt.pdf" },
  { name: "Таблиця переведення балів НМТ", url: "/pdfs/tablytsia-perevedennia.pdf" },
  { name: "Циліндр", url: "/pdfs/tsylindr.jpg" }
];

type MaterialsPageProps = {
  onNavigate: (page: PageKey) => void;
  activePage: PageKey;
};

export default function MaterialsPage({ onNavigate, activePage }: MaterialsPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-white">
      {/* Кнопка бургер */}
      <div
        onClick={() => setMenuOpen((prev) => !prev)}
        className="fixed top-6 left-6 z-50 cursor-pointer px-4 py-3 rounded-xl bg-[#d2e6b5] bg-opacity-50 hover:scale-110 transition-transform"
        title="Menu"
      >
        <div className="space-y-2">
          <span className="block w-8 h-1 bg-black rounded"></span>
          <span className="block w-8 h-1 bg-black rounded"></span>
          <span className="block w-8 h-1 bg-black rounded"></span>
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

      {/* Заголовок */}
      <h1
        className="absolute top-6 left-1/2 -translate-x-1/2 text-4xl font-bold text-white drop-shadow-[2px_2px_0px_black] z-10"
        style={{ fontFamily: "'Chewy', sans-serif" }}
      >
        MATHDI
      </h1>

      {/* Фон з формулами */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none animate-fall">
        <img src="/formulas.png" alt="Formulas" className="w-full h-full object-cover" />
      </div>

      {/* Контент */}
      <main className="relative z-10 flex flex-col items-center pt-24 pb-16 px-6 overflow-auto h-full">
        <div
          className="text-5xl sm:text-6xl font-extrabold text-center drop-shadow-[2px_2px_0px_#000] text-black mb-16"
          style={{ fontFamily: "Chewy, sans-serif" }}
        >
          Матеріали для повторення
        </div>

        <div className="max-w-3xl w-full space-y-4">
          {pdfFiles.map((file, index) => (
            <motion.a
              key={index}
              href={file.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="block p-4 bg-[#f0f0f0] rounded-lg shadow hover:bg-[#e2e2e2] text-black font-medium transition-all"
            >
              📄 {file.name}
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center text-sm text-gray-600 max-w-xl mx-auto px-4">
          Матеріали зібрані з телеграм-каналів <strong>matanove.zno</strong>, <strong>abitmath</strong>, <strong>abitblog</strong> та з сайту{" "}
          <a href="https://znohub.online" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">
            znohub.online
          </a>.
        </div>
      </main>
    </div>
  );
}
