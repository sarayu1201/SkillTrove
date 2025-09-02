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
    q: "What is the primary purpose of a load balancer in system design?",
    options: ["Data encryption", "Request distribution", "Database optimization", "User authentication"],
    answerIndex: 1,
  },
  {
    q: "Which cloud service model provides the most control over infrastructure?",
    options: ["SaaS", "PaaS", "IaaS", "FaaS"],
    answerIndex: 2,
  },
  {
    q: "What is the main advantage of microservices architecture?",
    options: ["Lower cost", "Better scalability", "Simpler deployment", "Faster development"],
    answerIndex: 1,
  },
  {
    q: "Which leadership style focuses on empowering team members?",
    options: ["Autocratic", "Democratic", "Laissez-faire", "Transformational"],
    answerIndex: 3,
  },
  {
    q: "What does CAP theorem stand for in distributed systems?",
    options: ["Consistency, Availability, Partition tolerance", "Control, Access, Performance", "Cost, Accuracy, Performance", "Capacity, Availability, Performance"],
    answerIndex: 0,
  },
  {
    q: "Which AWS service is used for serverless computing?",
    options: ["EC2", "Lambda", "S3", "RDS"],
    answerIndex: 1,
  },
  {
    q: "What is the primary goal of DevOps?",
    options: ["Reduce costs", "Improve collaboration", "Increase security", "Simplify architecture"],
    answerIndex: 1,
  },
  {
    q: "Which database type is best for handling complex relationships?",
    options: ["NoSQL", "Relational", "Key-value", "Document"],
    answerIndex: 1,
  },
  {
    q: "What is the main benefit of containerization?",
    options: ["Better performance", "Consistent environments", "Lower memory usage", "Easier debugging"],
    answerIndex: 1,
  },
  {
    q: "Which leadership principle emphasizes leading by example?",
    options: ["Vision setting", "Servant leadership", "Authentic leadership", "Transactional leadership"],
    answerIndex: 2,
  },
];

export default function ProfessionalQuizPage() {
  const router = useRouter();
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

  // Basic anti-cheat
  useEffect(() => {
    function onVisibility() {
      if (document.hidden) {
        // For pros, just reduce time as penalty
        setTimeLeft((t) => Math.max(0, t - 10));
      }
    }
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  function enterFullscreen() {
    document.documentElement.requestFullscreen?.();
  }

  async function handleAnswer(choiceIndex: number) {
    if (finished) return;
    const current = questions[index];
    const isCorrect = choiceIndex === current.answerIndex;
    setScore((s) => s + (isCorrect ? 10 : 0));
    const nextIndex = index + 1;
    if (nextIndex >= questions.length) {
      setFinished(true);
      try {
        await fetch("/api/quiz/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ role: "PROFESSIONAL", topic: "General", score: isCorrect ? score + 10 : score }),
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
        <h1 className="text-3xl font-bold">Assessment Completed</h1>
        <p className="text-lg">Score: {score}</p>
        <button onClick={() => router.push("/leaderboard")} className="border rounded px-4 py-2 inline-block">View Leaderboard</button>
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
      <div className="flex justify-end">
        <button onClick={enterFullscreen} className="text-xs underline">Enter fullscreen</button>
      </div>
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

