/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-pink-400",
    "hover:bg-pink-400",
    "background-container",  // якщо хочеш клас явно зберегти
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 15s linear infinite',
        fall: 'fall 25s linear infinite',
        pantherPulse: 'pantherPulse 4s ease-in-out infinite',
        rotateBg: 'rotateBg 20s linear infinite',   // додано
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        pantherPulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.07)' },
        },
        rotateBg: {   // додано keyframes для анімації фону
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
