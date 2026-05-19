type TestsPageProps = {
  onBack: () => void;
};

export default function TestsPage({ onBack }: TestsPageProps) {
  return (
    <div className="p-6 text-black text-xl">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 rounded bg-[#d2e6b5] hover:bg-[#b0c993] transition-colors font-semibold"
      >
        ← Назад
      </button>
      <h1 className="text-3xl font-bold mb-4">🧪 Розділ з тестами</h1>
      <p>Тут будуть тести для підготовки.</p>
    </div>
  );
}
