export default function IntroScreen() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-[#d2e6b5]">
      {/* Збільшене лого */}
      <img src="/logo.png" alt="Mathdi Logo" className="w-60 mb-6" />
      
      {/* Збільшений напис */}
      <h1
        className="text-6xl text-white"
        style={{ fontFamily: 'Chewy, sans-serif' }}
      >
        MATHDI
      </h1>
    </div>
  );
}
