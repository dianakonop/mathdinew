import type { PageKey } from "../types";

type SidebarProps = {
  menuOpen: boolean;
  onClose: () => void;
  activePage: PageKey;
  onNavigate: (page: PageKey) => void;
};

export default function Sidebar({
  menuOpen,
  onClose,
  activePage,
  onNavigate,
}: SidebarProps) {
  const menuItems: { label: string; key: PageKey }[] = [
    { label: "Головна", key: "animation" },
    { label: "Акаунт", key: "account" },
    { label: "Тести", key: "tests" },
    { label: "Матеріали для повторення", key: "materials" },
    { label: "Контакти", key: "contacts" },
  ];

  if (!menuOpen) return null;

  return (
    <>
      {/* Кнопка Закрити меню */}
      <button
        onClick={onClose}
        className="fixed top-4 left-4 z-[60] p-2 rounded bg-pink-500 text-white font-bold shadow-lg hover:bg-pink-600 transition"
        aria-label="Закрити меню"
      >
        ← Назад
      </button>

      <div className="fixed top-0 left-0 h-full w-64 bg-[#d2e6b5] flex flex-col justify-between p-6 z-50 shadow-lg">
        <div className="flex flex-col gap-6 mt-12">
          {menuItems.map((item) => (
            <button
              key={item.key}
              onClick={() => {
                onNavigate(item.key);
                onClose();
              }}
              className={`text-lg font-semibold transition-colors duration-200 ${
                activePage === item.key
                  ? "text-pink-600"
                  : "text-black hover:text-pink-600"
              }`}
              style={{ background: "none" }}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Соцмережі */}
        <div className="flex space-x-4">
          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-125"
          >
            <img src="/telegram.png" alt="Telegram" className="w-8 h-8" />
          </a>
          <a
            href="https:"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-125"
          >
            <img src="/tiktok.png" alt="TikTok" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </>
  );
}
