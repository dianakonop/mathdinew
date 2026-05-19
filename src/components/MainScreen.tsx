import './MainScreen.css';

interface MainScreenProps {
  onLoginClick: () => void;
  onRegisterClick: () => void;
}

export default function MainScreen({ onLoginClick, onRegisterClick }: MainScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-start w-full h-screen overflow-hidden bg-white">

      {/* Лого */}
      <div
        className="absolute top-4 left-4 z-30 text-white font-extrabold text-3xl select-none"
        style={{
          fontFamily: "'Chewy', sans-serif",
          textShadow: `-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000`,
        }}
      >
        MATHDI
      </div>

      {/* Telegram + TikTok */}
<div className="absolute top-4 right-4 flex space-x-3 z-20">
  <a
    href="https://t.me/xrxtg"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/telegram.png"
      alt="Telegram"
      className="w-10 h-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
    />
  </a>
  <a
    href="https://www.tiktok.com/@dianakonop"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="/tiktok.png"
      alt="TikTok"
      className="w-10 h-10 transition-transform duration-300 hover:scale-110 cursor-pointer"
    />
  </a>
</div>


      {/* Динамічне фонове зображення */}
      <img
        src="/background.png"
        alt="Background Animation"
        className="absolute z-0 animate-zoom-bounce w-[1000px] opacity-50 pointer-events-none select-none"
      />

      {/* Контейнер для стрічки і кнопок */}
      <div className="flex flex-col items-center w-full mt-[65vh] mb-6 z-10">

        {/* Стрічка з білим фоном і текстом */}
        <div className="w-full bg-white py-4 mb-4 overflow-hidden whitespace-nowrap border-y-2 border-black">
          <div className="animate-marquee text-4xl md:text-5xl font-bold text-black">
            БУДЬ <span className="text-black italic font-extrabold">SLAY</span> - ТЕСТУЙСЯ! &nbsp;
            БУДЬ <span className="text-black italic font-extrabold">SLAY</span> - ТЕСТУЙСЯ! &nbsp;
            БУДЬ <span className="text-black italic font-extrabold">SLAY</span> - ТЕСТУЙСЯ! &nbsp;
          </div>
        </div>

        {/* Кнопки */}
        <div className="flex space-x-6 mt-0">
          <button
            onClick={onLoginClick}
            className="px-6 py-2 text-lg font-semibold border-2 border-black rounded-full transition-transform duration-300 hover:scale-110"
          >
            Вхід
          </button>
          <button
            onClick={onRegisterClick}
            className="px-6 py-2 text-lg font-semibold bg-black text-white rounded-full transition-transform duration-300 hover:scale-110"
          >
            Реєстрація
          </button>
        </div>
      </div>
    </div>
  );
}
