import { useState } from "react";
import { supabase } from "../supabaseClient";

type RegisterScreenProps = {
  onGoClick: () => void;
  onBack: () => void;
};

export default function RegisterScreen({ onGoClick, onBack }: RegisterScreenProps) {
  const [name, setName] = useState("");
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
        login,
      },
    },
  });

  if (error) {
    alert("Помилка реєстрації: " + error.message);
    return;
  }

  console.log("User:", data.user);

  alert("Реєстрація успішна! Перевірте email для підтвердження.");
  onGoClick();
};

  return (
    <div className="bg-[#d4e8b2] w-full h-screen flex justify-center items-center">
      <div className="bg-[#e0f3c2] p-10 rounded-2xl shadow-lg w-[400px] relative">
        <button onClick={onBack} className="absolute top-4 left-4 text-gray-700 underline">
          ← Back
        </button>
        <h2 className="text-center text-white text-2xl font-bold mb-6 italic">Register</h2>

        <input
          type="text"
          placeholder="Ваше ім’я"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mb-5 p-3 border-b-2 border-gray-300 bg-transparent text-white text-lg italic focus:outline-none"
        />
        <input
          type="text"
          placeholder="Логін"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className="w-full mb-5 p-3 border-b-2 border-gray-300 bg-transparent text-white text-lg italic focus:outline-none"
        />
        <input
          type="email"
          placeholder="Електронна пошта"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-5 p-3 border-b-2 border-gray-300 bg-transparent text-white text-lg italic focus:outline-none"
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border-b-2 border-gray-300 bg-transparent text-white text-lg italic focus:outline-none"
        />

        <button
          onClick={handleRegister}
          className="w-full py-3 mt-2 rounded-md bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold text-lg shadow-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
        >
          GO!
        </button>
      </div>
    </div>
  );
}
