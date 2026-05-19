import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import Sidebar from "./SideBar";
import type { PageKey } from "../types";

type AccountPageProps = {
  onNavigate: (page: PageKey) => void;
  activePage: PageKey;
};

export default function AccountPage({ onNavigate, activePage }: AccountPageProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  // Отримання даних користувача
  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) console.error(error);
      if (data?.user) {
        setUser(data.user);
        setName(data.user.user_metadata.name || "");
        setLogin(data.user.user_metadata.login || "");
        setEmail(data.user.email || "");
        setAvatarUrl(data.user.user_metadata.avatar_url || "");
      }
    };
    getUser();
  }, []);

  // Оновлення даних
  const handleUpdate = async () => {
    const { error } = await supabase.auth.updateUser({
      data: { name, login, avatar_url: avatarUrl }
    });
    if (error) alert("Помилка оновлення: " + error.message);
    else alert("Дані успішно оновлені!");
  };

  // Завантаження аватарки
  const handleAvatarUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !user) return;
    const file = e.target.files[0];
    const filePath = `${user.id}/${file.name}`;
    const { error } = await supabase.storage.from("avatars").upload(filePath, file, { upsert: true });
    if (error) {
      alert("Помилка завантаження фото: " + error.message);
      return;
    }
    const { data } = supabase.storage.from("avatars").getPublicUrl(filePath);
    setAvatarUrl(data.publicUrl);
  };

  if (!user) return <div>Завантаження...</div>;

  return (
    <div className="relative w-full min-h-screen bg-white">
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

      {/* Контент */}
<div className="flex flex-col items-center p-6 pt-20 w-full">
  <h2
    className="text-6xl font-extrabold mb-4 drop-shadow-lg text-center w-full"
    style={{ fontFamily: "'Chewy', sans-serif" }}
  >
    Account Settings
  </h2>
  <p
    className="font-black italic text-3xl mb-10 text-center w-full"
    style={{ fontFamily: "'Chewy', sans-serif" }}
  >
    BAAASE information
  </p>

        {/* Фото профілю */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex flex-col items-center group transition-transform duration-300 hover:scale-110">
            <p className="text-gray-400 font-bold">Ваша фоточка</p>
            <img
              src={avatarUrl || "/default-avatar.png"}
              alt="avatar"
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg object-cover"
            />
            <label className="mt-1 text-pink-600 underline cursor-pointer transition-transform duration-300 hover:scale-110">
              Завантажити
              <input type="file" className="hidden" onChange={handleAvatarUpload} />
            </label>
          </div>
        </div>

        {/* Поля акаунту */}
        <div className="w-full max-w-md space-y-4">
          <div className="transition-transform duration-300 hover:scale-105 cursor-pointer bg-gray-50 p-3 rounded-lg shadow-sm">
            <p className="text-gray-400 font-bold">Ім’я</p>
            <div>{name}</div>
          </div>
          <div className="transition-transform duration-300 hover:scale-105 cursor-pointer bg-gray-50 p-3 rounded-lg shadow-sm">
            <p className="text-gray-400 italic font-bold">Username</p>
            <div>{login}</div>
          </div>
          <div className="transition-transform duration-300 hover:scale-105 cursor-pointer bg-gray-50 p-3 rounded-lg shadow-sm">
            <p className="text-gray-400 font-bold">Електронна пошта</p>
            <div>{email}</div>
          </div>
        </div>

        {/* Кнопка збереження */}
        <button
  onClick={handleUpdate}
  className="mt-8 py-3 px-8 rounded-full bg-gradient-to-r from-pink-400 to-pink-600 text-white text-lg font-bold shadow-lg hover:from-pink-500 hover:to-pink-700 transition-transform duration-300 hover:scale-110"
>
  Зберегти зміни
</button>
      </div>
    </div>
  );
}
