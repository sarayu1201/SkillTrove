"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Question = {
  q: string;
  options: string[];
  answerIndex: number;
};

const sampleQuestions: Question[] = [
  {
    q: "If a train travels 120 km in 2 hours, what is its speed?",
    options: ["60 km/h", "50 km/h", "70 km/h", "80 km/h"],
    answerIndex: 0,
  },
  {
    q: "What is 25% of 200?",
    options: ["40", "50", "60", "75"],
    answerIndex: 1,
  },
  {
    q: "Complete the series: 2, 4, 8, 16, ?",
    options: ["24", "32", "20", "28"],
    answerIndex: 1,
  },
  {
    q: "If 5 workers can complete a job in 8 days, how many days will 10 workers take?",
    options: ["4 days", "6 days", "8 days", "10 days"],
    answerIndex: 0,
  },
  {
    q: "What is the synonym of 'BENEVOLENT'?",
    options: ["Cruel", "Kind", "Angry", "Sad"],
    answerIndex: 1,
  },
  {
    q: "If A is to B as C is to D, and A=2, B=4, C=6, then D=?",
    options: ["8", "10", "12", "14"],
    answerIndex: 2,
  },
  {
    q: "What is the next number in the sequence: 1, 4, 9, 16, ?",
    options: ["20", "24", "25", "30"],
    answerIndex: 2,
  },
  {
    q: "If a shirt costs $40 and is on sale for 20% off, what is the sale price?",
    options: ["$30", "$32", "$35", "$38"],
    answerIndex: 1,
  },
  {
    q: "What is the antonym of 'TRANSPARENT'?",
    options: ["Clear", "Opaque", "Bright", "Shiny"],
    answerIndex: 1,
  },
  {
    q: "If 3x + 7 = 22, what is the value of x?",
    options: ["3", "4", "5", "6"],
    answerIndex: 2,
  },
];

export default function StudentQuizPage() {
  const router = useRouter();
  const questions = useMemo(() => sampleQuestions, []);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [hearts, setHearts] = useState(3);
  const [timeLeft, setTimeLeft] = useState(60);
  const [finished, setFinished] = useState(false);

  // Anti-copy context menu and keydown
  useEffect(() => {
    const onContext = (e: MouseEvent) => e.preventDefault();
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && ["c", "v", "x", "a"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      if (e.key === "PrintScreen") e.preventDefault();
    };
    document.addEventListener("contextmenu", onContext);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("contextmenu", onContext);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    if (finished) return;
    const t = setInterval(() => setTimeLeft((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [finished]);

  useEffect(() => {
    if (timeLeft === 0) handleAnswer(-1);
  }, [timeLeft]);

  // Enhanced anti-cheat: visibility and focus penalties
  useEffect(() => {
    function onVisibility() {
      if (document.hidden) {
        setHearts((h) => (h > 0 ? h - 1 : 0));
      }
    }
    function onBlur() {
      setHearts((h) => (h > 0 ? h - 1 : 0));
    }
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("blur", onBlur);
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("blur", onBlur);
    };
  }, []);

  function enterFullscreen() {
    document.documentElement.requestFullscreen?.();
  }

  async function handleAnswer(choiceIndex: number) {
    if (finished) return;
    const current = questions[index];
    const isCorrect = choiceIndex === current.answerIndex;
    if (isCorrect) {
      setScore((s) => s + 10);
    } else {
      setScore((s) => s - 5);
      setHearts((h) => h - 1);
    }
    const nextIndex = index + 1;
    if (nextIndex >= questions.length || hearts - (isCorrect ? 0 : 1) <= 0) {
      setFinished(true);
      try {
        await fetch("/api/quiz/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role: "STUDENT", topic: "General", score: isCorrect ? score + 10 : score - 5 }),
        });
      } catch {}
    } else {
      setIndex(nextIndex);
      setTimeLeft(60);
    }
  }

  if (finished) {
    return (
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Quiz Completed</h1>
        <p className="text-lg">Score: {score}</p>
        <button onClick={() => router.push("/leaderboard")} className="border rounded px-4 py-2 inline-block">View Leaderboard</button>
        <a
          href={`/api/certificate?name=Student&score=${score}&role=Student`}
          className="border rounded px-4 py-2 inline-block"
        >
          Download Certificate
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              {Array.from({ length: hearts }).map((_, i) => (
                <span key={i} className="text-2xl animate-pulse">❤️</span>
              ))}
              {Array.from({ length: 3 - hearts }).map((_, i) => (
                <span key={i} className="text-2xl opacity-30">🖤</span>
              ))}
            </div>
            <div className="text-lg font-semibold">Lives</div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{timeLeft}</div>
              <div className="text-sm opacity-80">Seconds</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{score}</div>
              <div className="text-sm opacity-80">Score</div>
            </div>
            <button 
              onClick={enterFullscreen} 
              className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-all duration-300 backdrop-blur-sm"
            >
              🔍 Fullscreen
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>{index + 1} / {questions.length}</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-500"
              style={{ width: `${((index + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-6 py-2 text-sm font-semibold mb-4">
              Question {index + 1} of {questions.length}
            </div>
            <h2 className="text-2xl font-bold leading-relaxed">
              {questions[index].q}
            </h2>
          </div>

          <div className="grid gap-4">
            {questions[index].options.map((opt, i) => (
              <button 
                key={i} 
                onClick={() => handleAnswer(i)} 
                className="group p-6 bg-white/10 hover:bg-white/20 rounded-2xl border border-white/20 hover:border-white/40 transition-all duration-300 text-left backdrop-blur-sm hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-4 group-hover:scale-110 transition-transform duration-300">
                    {String.fromCharCode(65 + i)}
                  </div>
                  <span className="text-lg">{opt}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Game Info */}
        <div className="mt-8 text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
            <h3 className="font-bold mb-2">🎮 Game Rules</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div>✅ Correct: +10 points</div>
              <div>❌ Wrong: -5 points</div>
              <div>💔 Wrong: -1 heart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

