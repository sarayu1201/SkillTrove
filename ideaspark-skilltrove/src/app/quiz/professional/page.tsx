"use client";

import { useEffect, useMemo, useState } from "react";

type Question = {
  q: string;
  options: string[];
  answerIndex: number;
};

const sampleQuestions: Question[] = Array.from({ length: 10 }).map((_, i) => ({
  q: `Professional assessment ${i + 1}: Choose the correct option`,
  options: ["Option A", "Option B", "Option C", "Option D"],
  answerIndex: (i + 1) % 4,
}));

export default function ProfessionalQuizPage() {
  const questions = useMemo(() => sampleQuestions, []);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [finished, setFinished] = useState(false);

  // Secure: disable copy/paste and context menu
  useEffect(() => {
    const onContext = (e: MouseEvent) => e.preventDefault();
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && ["c", "v", "x", "a"].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
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

  function handleAnswer(choiceIndex: number) {
    if (finished) return;
    const current = questions[index];
    const isCorrect = choiceIndex === current.answerIndex;
    setScore((s) => s + (isCorrect ? 10 : 0));
    const nextIndex = index + 1;
    if (nextIndex >= questions.length) {
      setFinished(true);
    } else {
      setIndex(nextIndex);
      setTimeLeft(60);
    }
  }

  if (finished) {
    return (
      <div className="space-y-4 text-center">
        <h1 className="text-3xl font-bold">Assessment Completed</h1>
        <p className="text-lg">Score: {score}</p>
        <a
          href={`/api/certificate?name=Professional&score=${score}&role=Professional`}
          className="border rounded px-4 py-2 inline-block"
        >
          Download Certificate
        </a>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
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

