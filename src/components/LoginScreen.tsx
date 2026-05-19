import { useState } from "react";
import { supabase } from "../supabaseClient";

type LoginScreenProps = {
  onRegister: () => void;
  onGoClick: () => void;
  onBack: () => void;
};

export default function LoginScreen({ onRegister, onGoClick, onBack }: LoginScreenProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) {
      alert("Помилка: " + error.message);
      return;
    }

    console.log("Login data:", data); // тепер data використовується, помилка зникне

    alert("Вхід успішний!");
    onGoClick();
  };

  return (
    <div className="bg-[#d4e8b2] w-full h-screen flex justify-center items-center relative">
      <div className="bg-[#e0f3c2] p-10 rounded-2xl shadow-lg w-[400px]">
        <button onClick={onBack} className="absolute top-4 left-4 text-gray-700 underline">
          ← Back
        </button>
        <h2 className="text-center text-white text-2xl font-bold mb-6 italic">Log in</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-6 p-3 border-b-2 border-gray-300 bg-transparent text-white text-lg italic focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-3 border-b-2 border-gray-300 bg-transparent text-white text-lg italic focus:outline-none"
        />

        <p className="text-base text-gray-700 text-center mb-4">
          Не маєш акаунту?{" "}
          <span
            onClick={onRegister}
            className="text-pink-500 cursor-pointer transition-all duration-300 hover:text-pink-700 hover:text-lg hover:font-bold"
          >
            Реєструйся
          </span>
        </p>

        <button
          onClick={handleLogin}
          className="w-full py-3 mt-2 rounded-md bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold text-lg shadow-md hover:from-pink-500 hover:to-pink-700 transition-all duration-300"
        >
          GO!
        </button>
      </div>
    </div>
  );
}
