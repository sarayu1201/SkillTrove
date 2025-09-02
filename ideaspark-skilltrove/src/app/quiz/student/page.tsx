"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

type Question = {
  q: string;
  options: string[];
  answerIndex: number;
};

const sampleQuestions: Question[] = Array.from({ length: 10 }).map((_, i) => ({
  q: `Sample question ${i + 1}?`,
  options: ["A", "B", "C", "D"],
  answerIndex: i % 4,
}));

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
    <div className="space-y-4">
      <div className="flex justify-end">
        <button onClick={enterFullscreen} className="text-xs underline">Enter fullscreen</button>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {Array.from({ length: hearts }).map((_, i) => (
            <span key={i} className="text-red-500">❤️</span>
          ))}
          {Array.from({ length: 3 - hearts }).map((_, i) => (
            <span key={i} className="opacity-40">🖤</span>
          ))}
        </div>
        <div className="text-sm">Time left: {timeLeft}s</div>
        <div className="text-sm">Score: {score}</div>
      </div>

      <div className="border rounded p-4">
        <h2 className="font-semibold mb-3">Q{index + 1}. {questions[index].q}</h2>
        <div className="grid gap-2">
          {questions[index].options.map((opt, i) => (
            <button key={i} onClick={() => handleAnswer(i)} className="border rounded p-2 text-left hover:bg-black/5 dark:hover:bg-white/5">
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

