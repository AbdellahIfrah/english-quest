"use client";

import { useState, useEffect } from "react";
import { vocabularyData, grammarData, VocabItem } from "@/data/englishData";

type Mode = "home" | "study" | "quiz";

export default function Home() {
  const [mode, setMode] = useState<Mode>("home");
  const [selectedCategory, setSelectedCategory] = useState<{ type: "vocab" | "grammar"; key: string } | null>(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // Estados para el examen
  const [quizQuestions, setQuizQuestions] = useState<VocabItem[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [options, setOptions] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ msg: string; isCorrect: boolean } | null>(null);

  // Función de audio (Pronunciación en inglés)
  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "en-US";
      window.speechSynthesis.speak(utterance);
    }
  };

  // Abrir vista de estudio
  const handleOpenStudy = (type: "vocab" | "grammar", key: string) => {
    setSelectedCategory({ type, key });
    setMode("study");
  };

  // Iniciar Examen (filtra según la categoría seleccionada o toma todo si no hay ninguna)
  const handleStartQuiz = (customCategory?: { type: "vocab" | "grammar"; key: string }) => {
    const targetCategory = customCategory || selectedCategory;
    let itemsToQuiz: VocabItem[] = [];

    if (targetCategory) {
      if (targetCategory.type === "vocab" && vocabularyData[targetCategory.key]) {
        itemsToQuiz = [...vocabularyData[targetCategory.key].items];
      } else if (targetCategory.type === "grammar" && grammarData[targetCategory.key]) {
        itemsToQuiz = [...grammarData[targetCategory.key].items];
      }
    }

    // Si no se seleccionó ninguna categoría o la categoría no tiene elementos suficientes, usamos todos
    if (itemsToQuiz.length === 0) {
      Object.values(vocabularyData).forEach((cat) => itemsToQuiz.push(...cat.items));
      Object.values(grammarData).forEach((cat) => itemsToQuiz.push(...cat.items));
    }

    // Mezclar aleatoriamente
    const shuffled = [...itemsToQuiz].sort(() => Math.random() - 0.5);
    setQuizQuestions(shuffled);
    setQuizIndex(0);
    setMode("quiz");
  };

  // Generar opciones para la pregunta actual
  useEffect(() => {
    if (mode === "quiz" && quizQuestions.length > 0) {
      const current = quizQuestions[quizIndex];
      const opts = [current.es];

      // Pool total de respuestas en español para opciones falsas
      const allSpanishOpts: string[] = [];
      Object.values(vocabularyData).forEach((cat) => cat.items.forEach((i) => allSpanishOpts.push(i.es)));
      Object.values(grammarData).forEach((cat) => cat.items.forEach((i) => allSpanishOpts.push(i.es)));

      while (opts.length < Math.min(3, new Set(allSpanishOpts).size)) {
        const rand = allSpanishOpts[Math.floor(Math.random() * allSpanishOpts.length)];
        if (!opts.includes(rand)) opts.push(rand);
      }

      setOptions(opts.sort(() => Math.random() - 0.5));
      setFeedback(null);
    }
  }, [mode, quizIndex, quizQuestions]);

  // Validar respuesta del Examen
  const handleAnswer = (answer: string) => {
    if (feedback) return; // Evitar múltiples clics
    const current = quizQuestions[quizIndex];

    if (answer === current.es) {
      setScore((prev) => prev + 10);
      setStreak((prev) => prev + 1);
      setFeedback({ msg: "¡Correcto! 🎉", isCorrect: true });
    } else {
      setStreak(0);
      setFeedback({ msg: `Incorrecto 😅 Era: ${current.es}`, isCorrect: false });
    }

    setTimeout(() => {
      if (quizIndex + 1 < quizQuestions.length) {
        setQuizIndex((prev) => prev + 1);
      } else {
        alert("¡Has terminado todo el examen!");
        setMode("home");
      }
    }, 1200);
  };

  return (
    <main className="min-h-screen bg-slate-900 flex justify-center items-center p-0 sm:p-4">
      {/* Marco de teléfono móvil vertical */}
      <div className="w-full max-w-[420px] h-screen sm:h-[850px] bg-slate-50 flex flex-col shadow-2xl overflow-hidden sm:rounded-3xl border-0 sm:border-4 sm:border-slate-700">
        
        {/* Encabezado */}
        <header className="bg-indigo-600 text-white p-4 flex justify-between items-center shadow-md flex-shrink-0">
          <div className="flex items-center space-x-2">
            <span className="text-xl">🎮</span>
            <h1 className="font-bold text-lg tracking-wide">English Quest</h1>
          </div>
          <div className="flex space-x-2 text-xs font-semibold">
            <span className="bg-indigo-700 px-2.5 py-1 rounded-full flex items-center gap-1">
              🔥 <span>{streak}</span>
            </span>
            <span className="bg-indigo-700 px-2.5 py-1 rounded-full flex items-center gap-1">
              ⭐ <span>{score}</span>
            </span>
          </div>
        </header>

        {/* Contenido Dinámico */}
        <div className="flex-1 overflow-y-auto p-4">
          
          {/* MODO HOME */}
          {mode === "home" && (
            <div className="space-y-4">
              
              {/* ACCESO DIRECTO AL EXAMEN GENERAL */}
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  handleStartQuiz();
                }}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 rounded-2xl shadow-md flex items-center justify-between active:scale-98 transition"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-3xl">📝</span>
                  <div className="text-left">
                    <p className="font-bold text-base">Examen General</p>
                    <p className="text-xs text-indigo-100">Pon a prueba todo tu vocabulario</p>
                  </div>
                </div>
                <span className="bg-white/20 px-3 py-1 rounded-xl text-xs font-bold">Inicia</span>
              </button>

              <h2 className="font-bold text-slate-700 text-base pt-2">Vocabulario</h2>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(vocabularyData).map(([key, cat]) => (
                  <button
                    key={key}
                    onClick={() => handleOpenStudy("vocab", key)}
                    className="bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition text-left flex flex-col justify-between h-28 active:scale-95"
                  >
                    <div className={`${cat.color} text-white w-9 h-9 rounded-xl flex items-center justify-center text-lg`}>
                      {cat.icon}
                    </div>
                    <div>
                      <p className="font-bold text-xs text-slate-800">{cat.title}</p>
                      <p className="text-[10px] text-slate-400">{cat.items.length} palabras</p>
                    </div>
                  </button>
                ))}
              </div>

              <h2 className="font-bold text-slate-700 text-base mt-6">Gramática</h2>
              <div className="grid grid-cols-1 gap-2.5">
                {Object.entries(grammarData).map(([key, item]) => (
                  <button
                    key={key}
                    onClick={() => handleOpenStudy("grammar", key)}
                    className="bg-indigo-50 border border-indigo-100 p-3.5 rounded-2xl flex items-center justify-between hover:bg-indigo-100 transition active:scale-98"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">🎓</span>
                      <span className="font-bold text-sm text-slate-700">{item.title}</span>
                    </div>
                    <span className="text-indigo-400 font-bold">➔</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* MODO ESTUDIO DE UN TEMA ESPECÍFICO */}
          {mode === "study" && selectedCategory && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setMode("home");
                  }}
                  className="text-indigo-600 font-bold text-sm flex items-center gap-1"
                >
                  ← Volver
                </button>
                <span className="font-bold text-slate-700 text-sm">
                  {selectedCategory.type === "vocab"
                    ? vocabularyData[selectedCategory.key].title
                    : grammarData[selectedCategory.key].title}
                </span>
              </div>

              {/* Botón para iniciar Examen de esta categoría específica */}
              <button
                onClick={() => handleStartQuiz(selectedCategory)}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-xl font-bold text-xs shadow flex items-center justify-center gap-2 active:scale-98 transition"
              >
                <span>📝</span>
                <span>Hacer Examen de este Tema</span>
              </button>

              {/* Regla de Gramática */}
              {selectedCategory.type === "grammar" && (
                <div className="bg-indigo-600 text-white p-4 rounded-2xl text-xs whitespace-pre-line leading-relaxed shadow-sm">
                  {grammarData[selectedCategory.key].rules}
                </div>
              )}

              {/* Tarjetas del Tema */}
              <div className="space-y-2.5">
                {(selectedCategory.type === "vocab"
                  ? vocabularyData[selectedCategory.key].items
                  : grammarData[selectedCategory.key].items
                ).map((item, idx) => (
                  <div
                    key={idx}
                    onClick={() => speak(item.en)}
                    className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between cursor-pointer active:scale-98 transition shadow-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className="font-bold text-sm text-slate-800">{item.en}</p>
                        <p className="text-xs text-slate-500">{item.es}</p>
                      </div>
                    </div>
                    <span className="text-indigo-400 text-lg">🔊</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MODO EXAMEN */}
          {mode === "quiz" && quizQuestions.length > 0 && (
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex justify-between items-center mb-4">
                  <button
                    onClick={() => setMode(selectedCategory ? "study" : "home")}
                    className="text-slate-400 font-bold text-lg"
                  >
                    ✕
                  </button>
                  <span className="font-bold text-xs text-indigo-600">
                    Pregunta {quizIndex + 1} / {quizQuestions.length}
                  </span>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center space-y-2 mb-6">
                  <span className="text-5xl block">{quizQuestions[quizIndex].icon}</span>
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">¿Qué significa?</p>
                  <div className="flex items-center justify-center gap-2">
                    <h3 className="text-2xl font-bold text-slate-800">{quizQuestions[quizIndex].en}</h3>
                    <button onClick={() => speak(quizQuestions[quizIndex].en)} className="text-indigo-500 text-lg">
                      🔊
                    </button>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(opt)}
                      className="w-full bg-white border-2 border-slate-200 p-3.5 rounded-xl text-left font-bold text-sm text-slate-700 hover:border-indigo-500 active:scale-98 transition"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {feedback && (
                <div
                  className={`mt-4 p-3.5 rounded-xl text-center font-bold text-sm ${
                    feedback.isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {feedback.msg}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navegación Inferior Fija */}
        <nav className="bg-white border-t border-slate-200 p-2 flex justify-around items-center flex-shrink-0">
          <button
            onClick={() => {
              setSelectedCategory(null);
              setMode("home");
            }}
            className={`flex flex-col items-center font-semibold text-xs ${
              mode !== "quiz" ? "text-indigo-600" : "text-slate-400"
            }`}
          >
            <span className="text-lg">📖</span>
            <span>Aprender</span>
          </button>
          <button
            onClick={() => handleStartQuiz()}
            className={`flex flex-col items-center font-semibold text-xs ${
              mode === "quiz" ? "text-indigo-600" : "text-slate-400"
            }`}
          >
            <span className="text-lg">📝</span>
            <span>Examen</span>
          </button>
        </nav>

      </div>
    </main>
  );
}